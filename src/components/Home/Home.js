import {
  CaretRightOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import { Card, Popconfirm, Popover, Progress, Space } from "antd";
import "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import handleDeleteCourse from "../../firestore/deleteCourse";
import { AuthContext } from '../../firebase/Auth';
import firebaseApp from "../../firebase/Firebase";
import { Link } from "react-router-dom";
import "./Home.css";

const { Meta } = Card;

function Home() {
  const [courses, setCourses] = useState([]);
  const [totalProgress, setTotalProgress] = useState(0);
  const { currentUser } = useContext(AuthContext);
  const uid = currentUser.uid;
  const fetchData = async (uid) => {
    try {
      const bookmarkRef = firebaseApp.firestore().collection("users").doc(uid).collection("courses");
      const bookmarkSnapshot = await bookmarkRef.get();
  
      const res = bookmarkSnapshot.docs.map((doc) => doc.data());
      setCourses(res);
      console.log("Res");
      console.log(res);
    } catch (error) {
      console.log("Error retrieving enrolled courses:", error);
      return [];
    }
  };
  useEffect(()=>{
    fetchData(uid);
  },[uid]);

  useEffect(() => {
    calculateAndSetTotalProgress();
  }, [fetchData]);

  const calculateAndSetTotalProgress = async () => {
    let totalWatched = 0,totalVideos = 0;
    const data = await firebaseApp.firestore()
      .collection("users")
      .doc(uid)
      .collection("courses")
      .get();
    data.docs.forEach((doc) => {
      doc.data().Total_Videos.forEach((v) => {
        if(v.watched === true){
          totalWatched = totalWatched +1;
        }
        totalVideos = totalVideos +1;
      })
    });
    const progress = Math.round((totalWatched / totalVideos) * 100);
    setTotalProgress(progress);
  };


  return (
    <div className="wrapper">
    <Space direction="horizontal" align="center" width="80%" size={100}>
    <div className="wrapper____">
  {courses.length === 0 ? (
    <h2 style={{ paddingTop: 100, textAlign: "center" }}>
      No Courses Enrolled
    </h2>
  ) : (
    
    <div>
    <h2 style={{ paddingTop: 100, textAlign: "center" }}>
      Courses Enrolled
    </h2>
      {courses.map((playlist) => (
        <Card
          key={playlist.Playlist}
          style={{ width: 300, margin: "16px auto" }}
          actions={[
            <Popover content="Open in the player">
              <Link
                to={{
                  pathname: "/player",
                  playlistID: playlist.Playlist_ID,
                  tracking: true,
                }}
              >
                <CaretRightOutlined key="play" />
              </Link>
            </Popover>,
            <Popconfirm
              title="Are you sure you want to delete this?"
              onConfirm={() => {
                handleDeleteCourse(playlist.Playlist_ID, uid);
                fetchData(uid);
              }}
            >
              <DeleteOutlined key="edit" />
            </Popconfirm>,
          ]}
        >
          <Meta title={playlist.Title} />
        </Card>
      ))}
    </div>
  )}
</div>


      <div>
        <h2 className="card-heading">Progress</h2>
        <Card>
          <div className="progress-circle-n">
            <Popover>
              <Progress
                type="circle"
                percent={totalProgress}
                width={207}
                strokeColor="#fa2c28"
              ></Progress>
            </Popover>
          </div>
          <Meta
            title="Total Progress"
            description="This is the description"
          />
        </Card>
      </div>
      <div>
        <h2 className="card-heading">Enroll New</h2>
        <Card
          cover={
            <img
              alt="example"
              src="https://static1.squarespace.com/static/55c542c2e4b03257969ad9b2/t/5ec6a2162a09cc0adc3e7a09/1680813272060/"
              //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BF77pThADMkGwSFsFAs14__kq25Ne3F7K-c7_8YfK2qFLmeDP_ei0QzShICYBY6PfA&usqp=CAU"
            />
          }
          actions={[
            <Popover title="Explore new courses">
              <Link to="/explore">
                <CaretRightOutlined key="play" />
              </Link>
            </Popover>,
          ]}
        >
          <Meta
            title="Enroll New Courses"
            description="Explore and find what you need"
          />
        </Card>
      </div>
    </Space>
    </div>
  );
}

export default Home;
