import { Checkbox, Collapse, Layout, Menu} from "antd";
import React, { useEffect, useState, useContext} from "react";
import ReactLinkify from "react-linkify";
import ReactPlayer from "react-player";
import firebaseApp from "../../firebase/Firebase";
import { AuthContext } from '../../firebase/Auth';
import "./player.css";

const { Sider, Content } = Layout;
const { Panel } = Collapse;

function TrackPlay ({ playlistID }){
    const [playlistData, setPlaylistData] = useState(null);

    const { currentUser } = useContext(AuthContext);
    let uid = currentUser.uid;
    if (uid === "") {
      uid = localStorage.getItem("user-id");
    } else {
      localStorage.setItem("user-id", uid);
    }
  
    const [currentVideo, setCurrentVideo] = useState();
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const [videoDescription, setVideoDescription] = useState("");
    const [videoMargin, setVideoMargin] = useState(400);
    const selectedMenuItem = currentVideo;

    const getDataCB = async () => {
        const data = await firebaseApp.firestore()
          .collection("users")
          .doc(uid)
          .collection("courses")
          .doc(playlistID)
          .get();
        setPlaylistData(data.data());
        //console.log(data.data().Total_Videos[0]);
        setFirstUnwatchedVideo(data.data());
        setVideoDescription(data.data().Total_Videos[0].description);
      };

    useEffect(() => {
    getDataCB();
    }, [playlistID, uid]);

    const setFirstUnwatchedVideo = (data) => {
      if (data) {
        const firstUnwatchedVideo = data.Total_Videos.find(item => item.watched === false);
        setCurrentVideo(firstUnwatchedVideo.id);
      }
    };
    console.log(playlistData);
  
    const findVideoAndSetWatched = async (id, setWatched = false) => {
        console.log('inside function');
        // const data = null;
        let data = await firebaseApp.firestore()
        .collection("users")
        .doc(uid)
        .collection("courses")
        .doc(playlistID)
        .get();
        data = data.data();
        data.Total_Videos.forEach((video) => {
            if (video.id === id) {
                if (!setWatched) {
                video.watched = !video.watched;
                } else {
                video.watched = setWatched;
                }
            }
        });
  
          await firebaseApp.firestore().collection("users")
            .doc(uid)
            .collection("courses")
            .doc(playlistID)
            .set({
              Playlist_ID: data.Playlist_ID,
              Title: data.Title,
              Total_Videos: data.Total_Videos
            });
          setPlaylistData(data);
    };
  
    const handleVideoEnded = () => {
      let idx;
      findVideoAndSetWatched(currentVideo, true);
      console.log(playlistData);
      playlistData.Total_Videos.forEach((video) => {
        if (video.id === currentVideo) {
          idx = playlistData.Total_Videos.indexOf(video);
        }
      });
      idx === -1
        ? setCurrentVideo(currentVideo)
        : setCurrentVideo(playlistData.Total_Videos[++idx].id);
      setVideoDescription(playlistData.Total_Videos[idx].description);
    };
  
    const returnIframMarkup = () => {
        console.log(currentVideo);
      let videoURL = `https://www.youtube.com/embed/${currentVideo}`;
      return (
        <ReactPlayer
          controls={true}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          url={videoURL}
          playing={true}
          className="react-player"
          width="auto%"
          height={700}
          onEnded={handleVideoEnded}
        ></ReactPlayer>
      );
    };
  
    const RenderMenuItem = ({ videos }) => {
       //console.log(videos);
      if (videos === undefined) {
        return null;
      }
      const renderedMenuItem = videos.map((video) => {
        return (
          <Menu.Item
            key={video.id}
            className="menu-item"
            style={{ fontSize: 12 }}
            onClick={() => {
              //setVideoDescription(video.description);
              setCurrentVideo(video.id);
            }}
          >
            <Checkbox
              className="menu-checkbox"
              checked={video.watched}
              onChange={() => {
                console.log('clicked');
                findVideoAndSetWatched(video.id);
              }}
            ></Checkbox>
            {video.title}
          </Menu.Item>
        );
      });
      return <Menu selectedKeys={[selectedMenuItem]}>{renderedMenuItem}</Menu>;
    };
  
    const handleMenuCollapse = (collapsed) => {
      setMenuCollapsed(collapsed);
      menuCollapsed ? setVideoMargin(400) : setVideoMargin(72);
    };
  
    return (
      <div>
        <Layout>
          <Sider
            collapsible
            onCollapse={handleMenuCollapse}
            collapsed={menuCollapsed}
            width={400}
            collapsedWidth={65}
            style={{
              overflow: "auto",
              height: "100%",
              position: "fixed",
              left: 0,
            }}
          >
            <Menu theme="light" mode="inline" selectedKeys={[selectedMenuItem]}>
              <Menu.Item key="9" style={{ paddingTop: 120, textAlign: "center" }}>
                <h2>Videos</h2>
              </Menu.Item>
              {playlistData ? (
                <RenderMenuItem videos={playlistData.Total_Videos} />
              ) : (
                " "
              )}
              <Menu.Item key="8" style={{ paddingBottom: 80 }}></Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: videoMargin }}>
            <Content style={{ margin: "50px 16px 0", overflow: "initial" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, textAlign: "center", minHeight: 820 }}
              >
                {returnIframMarkup()}
              </div>
              <Collapse bordered={false} defaultActiveKey={["1"]}>
                <Panel header="Description" key="1">
                  <ReactLinkify>
                    <span className="description-span">{videoDescription}</span>{" "}
                  </ReactLinkify>
                </Panel>
              </Collapse>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
};

export default TrackPlay;
