import {
  CaretRightOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Card, Col, Popconfirm, Popover, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import handleAddCourse from "../../firestore/addCourse";
import handleDeleteBookmark from "../../firestore/deleteBookmark";
import { AuthContext } from '../../firebase/Auth';
import firebaseApp from "../../firebase/Firebase";
import "./Bookmarks.css";

const { Meta } = Card;

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const uid = currentUser.uid;
  const fetchData = async (uid) => {
    try {
      const bookmarkRef = firebaseApp.firestore().collection("users").doc(uid).collection("bookmarks");
      const bookmarkSnapshot = await bookmarkRef.get();
  
      const res = bookmarkSnapshot.docs.map((doc) => doc.data());
      setBookmarks(res);
      console.log(res);
    } catch (error) {
      console.log("Error retrieving bookmarks:", error);
      return [];
    }
  };
  useEffect(()=>{
    fetchData(uid);
  },[uid]);
  return (
    <div className="wrapper____">
      {bookmarks.length === 0 ? (
        <h2 style={{ paddingTop: 100, textAlign: "center" }}>
          No Bookmarks Added
        </h2>
      ) : (
        <Row gutter={[16, 24]}>
          {bookmarks.map((playlist) => (
            <Col className="gutter-row" span={6} key={playlist.Playlist}>
              <Card
                cover={<img alt="example" src={playlist.Thumbnail} />}
                style={{ width: 300, margin: 0 }}
                actions={[
                  <Popover content="Open in the player">
                    <Link
                      to={{
                        pathname: "/player",
                        playlistID: playlist.Playlist,
                        tracking: false,
                      }}
                    >
                      <CaretRightOutlined key="play" />
                    </Link>
                  </Popover>,
                  <Popover title="Enroll in course and start tracking it">
                    <PlusCircleOutlined
                      key="Enroll"
                      onClick={() => {
                        handleAddCourse(playlist.Playlist, playlist.Title, uid);
                      }}
                    />
                  </Popover>,
                  <Popconfirm
                    title="Are you sure you wanna delete this?"
                    onConfirm={() => {
                      handleDeleteBookmark(playlist.Playlist, uid);
                      fetchData(uid);
                      console.log("delete button clicked");
                    }}
                  >
                    <DeleteOutlined key="edit" />
                  </Popconfirm>,
                ]}
              >
                <Meta title={playlist.Title} />
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Bookmarks;
