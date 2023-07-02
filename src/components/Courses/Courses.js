import {
  CaretRightOutlined,
  CopyOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Popconfirm, Popover } from "antd";
import React, { useContext} from "react";
import handleAddToBookmark from '../../firestore/addBookmark';
import handleAddCourse from '../../firestore/addCourse';
import { AuthContext } from '../../firebase/Auth';
import { Link } from "react-router-dom";
import ds1 from "./Ds1.jpeg";
import ds2 from "./Ds2.jpeg";
import ds3 from "./Ds3.jpeg";
import cs1 from "./cs1.jpeg";
import cs2 from "./cs2.jpeg";
import cs3 from "./cs3.jpeg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import "./Courses.css";
const { Meta } = Card;

function Courses() {
  const { currentUser } = useContext(AuthContext);
  const uid = currentUser.uid;
  return (
    <div className="box-container">
      <div className="very-center">
        <h2>Data Structures and Algorithms Track</h2>
        <section className="video-section">
          <Card className="card"
            cover={<img src={ds1} alt="JAVA Course"></img>}
            actions={[
              <Popover content="Preview in the Player">
              <Link
                to={{
                  pathname: "/player",
                  playlistID: "PLsSIC55gTMOYrz_uDf-hxkK8F9CP5bAFi",
                  tracking: false,
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>,
              </Popover>,
              <Popover content="Enroll Course">
                  <Popconfirm
                      title="You shouldn't learn two things at once, adding to bookmarks is better, still wanna continue"
                      onConfirm={() => {
                      handleAddCourse("PLsSIC55gTMOYrz_uDf-hxkK8F9CP5bAFi", "Java Course", uid);
                      //console.log('clicked Enroll Java Course');
                      }}
                  >
                  <PlusCircleOutlined key="Enroll" />
                  </Popconfirm>
              </Popover>,
              <Popover content="Add to bookmark">
                    <CopyOutlined
                        onClick={() => {
                        handleAddToBookmark(
                          "PLsSIC55gTMOYrz_uDf-hxkK8F9CP5bAFi",
                            uid,
                            "Java Course",
                            ds1
                        );
                        //console.log('clicked Bookmark Java Course');
                        }}
                    />
              </Popover>,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.googleusercontent.com/ytc/AGIKgqN11FeTgpZA4iZHLxK-Cv3V-ShfsTrwYvSZyb1G=s176-c-k-c0x00ffffff-no-rj" />
              }
              title="Java Course"
              description="By Anuj Bhaiya"
            />
          </Card>

          <Card className="card"
            cover={<img src={ds2} alt="DSA One"></img>}
            actions={[
              <Popover content="Preview in the Player">
                <Link
                to={{
                  pathname: "/player",
                  playlistID: "PLUcsbZa0qzu3yNzzAxgvSgRobdUUJvz7p",
                  tracking: false,
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>
              </Popover>,
              <Popover content="Enroll Course">
                  <Popconfirm
                      title="You shouldn't learn two things at once, adding to bookmarks is better, still wanna continue"
                      onConfirm={() => {
                        handleAddCourse("PLUcsbZa0qzu3yNzzAxgvSgRobdUUJvz7p", "DSA One", uid);
                        //console.log('clicked Enroll DSA One');
                      }}
                  >
                  <PlusCircleOutlined key="Enroll" />
                  </Popconfirm>
              </Popover>,
              <Popover content="Add to bookmark">
                    <CopyOutlined
                        onClick={() => {
                        handleAddToBookmark(
                          "PLUcsbZa0qzu3yNzzAxgvSgRobdUUJvz7p",
                            uid,
                            "DSA One",
                            ds2
                        );
                        //console.log('clicked Bookmark DSA One');
                        }}
                    />
              </Popover>,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.googleusercontent.com/ytc/AGIKgqN11FeTgpZA4iZHLxK-Cv3V-ShfsTrwYvSZyb1G=s176-c-k-c0x00ffffff-no-rj" />
              }
              title="DSA One"
              description="By Anuj Bhaiya"
            />
          </Card>

          <Card className="card"
            cover={<img src={ds3} alt="Dynamic Programming"></img>}
            actions={[
              <Popover content="Preview in the Player">
              <Link
                className="action-link"
                to={{
                  pathname: "/player",
                  playlistID: "PLeuU9ICKUA4d5xIQW2Y6MLSF_Ivw46-bn",
                  tracking: false,
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>
              </Popover>,
              <Popover content="Enroll Course">
                  <Popconfirm
                      title="You shouldn't learn two things at once, adding to bookmarks is better, still wanna continue"
                      onConfirm={() => {
                      handleAddCourse("PLeuU9ICKUA4d5xIQW2Y6MLSF_Ivw46-bn", "Dynamic Programming", uid);
                      //console.log('clicked Enroll DP');
                      }}
                  >
                  <PlusCircleOutlined key="Enroll" />
                  </Popconfirm>
              </Popover>,
              <Popover content="Add to bookmark">
                    <CopyOutlined
                        onClick={() => {
                        handleAddToBookmark(
                            "PLeuU9ICKUA4d5xIQW2Y6MLSF_Ivw46-bn",
                            uid,
                            "Dynamic Programming",
                            ds3
                        );
                        console.log('clicked Bookmark DP');
                        }}
                    />
              </Popover>,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.googleusercontent.com/ytc/AGIKgqMtDz7IXWbOVvw30upY4gMNKTSbOWHfBgaUqhi_wg=s176-c-k-c0x00ffffff-no-rj" />
              }
              title="Dynamic Programming"
              description="By Aditya Verma"
            />
          </Card>
        </section>
      </div>
      <div className="very-center">
        <h2>Cyber Security Track</h2>
        <section className="video-section">
          <Card className="card"
            cover={<img src={cs1} alt="Intro to CS"></img>}
            actions={[
              <Popover content="Preview in the Player">
              <Link
                to={{
                  pathname: "/player",
                  playlistID: "PLQVJk9oC5JKq15cieChuOU9zFdf-FlnMi",
                  tracking: false,
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>,
              </Popover>,
              <Popover content="Enroll Course">
                  <Popconfirm
                      title="You shouldn't learn two things at once, adding to bookmarks is better, still wanna continue"
                      onConfirm={() => {
                      handleAddCourse("PLQVJk9oC5JKq15cieChuOU9zFdf-FlnMi", "Intro to Cyber Security", uid);
                      //console.log('clicked Enroll Intro to CS');
                      }}
                  >
                  <PlusCircleOutlined key="Enroll" />
                  </Popconfirm>
              </Popover>,
              <Popover content="Add to bookmark">
                    <CopyOutlined
                        onClick={() => {
                        handleAddToBookmark(
                          "PLQVJk9oC5JKq15cieChuOU9zFdf-FlnMi",
                            uid,
                            "Intro to Cyber Security",
                            cs1
                        );
                        //console.log('clicked Bookmark Intro to CS');
                        }}
                    />
              </Popover>,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.googleusercontent.com/OtB--dcR_oNUZUaUsuyk2ShT5nFYjEcj9Yxx50-Nner03vXKt4IWXtP--JrnSGQbwRSHYuVb38g=s176-c-k-c0x00ffffff-no-rj" />
              }
              title="Intro to Cyber Security"
              description="By edureka!"
            />
          </Card>

          <Card className="card"
            cover={<img src={cs2} alt="CS Principles"></img>}
            actions={[
              <Popover content="Preview in the Player">
                <Link
                to={{
                  pathname: "/player",
                  playlistID: "PL8oRZVu1TnSIk_WIX-Gztgt2BAf31Y4IK",
                  tracking: false,
                }}
              >
                <CaretRightOutlined
                  key="Play"
                />
              </Link>
              </Popover>,
              <Popover content="Enroll Course">
                  <Popconfirm
                      title="You shouldn't learn two things at once, adding to bookmarks is better, still wanna continue"
                      onConfirm={() => {
                      handleAddCourse("PL8oRZVu1TnSIk_WIX-Gztgt2BAf31Y4IK", "Cyber Security Principles", uid);
                      //console.log('clicked Enroll Cs Principles');
                      }}
                  >
                  <PlusCircleOutlined key="Enroll" />
                  </Popconfirm>
              </Popover>,
              <Popover content="Add to bookmark">
                    <CopyOutlined
                        onClick={() => {
                        handleAddToBookmark(
                          "PL8oRZVu1TnSIk_WIX-Gztgt2BAf31Y4IK",
                            uid,
                            "Cyber Security Principles",
                            cs2
                        );
                        //console.log('clicked Bookmark Cs Principles');
                        }}
                    />
              </Popover>,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.googleusercontent.com/ytc/AGIKgqMwtT6FQadVfpQbibmoyRynbtZMimBHBC-ljAxN3w=s176-c-k-c0x00ffffff-no-rj" />
              }
              title="Cyber Security Principles"
              description="By Vision Academy"
            />
          </Card>

          <Card className="card"
            cover={<img src={cs3} alt="CS Projects"></img>}
            actions={[
              <Popover content="Preview in the Player">
              <Link
                className="action-link"
                to={{
                  pathname: "/player",
                  playlistID: "PLpmV6S5Msuyb0BQwnNgmIDy6Gon7EKDBF",
                  tracking: false,
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>
              </Popover>,
              <Popover content="Enroll Course">
                  <Popconfirm
                      title="You shouldn't learn two things at once, adding to bookmarks is better, still wanna continue"
                      onConfirm={() => {
                      handleAddCourse("PLpmV6S5Msuyb0BQwnNgmIDy6Gon7EKDBF", "CS Projects", uid);
                      //console.log('clicked Enroll CS Projects');
                      }}
                  >
                  <PlusCircleOutlined key="Enroll" />
                  </Popconfirm>
              </Popover>,
              <Popover content="Add to bookmark">
                    <CopyOutlined
                        onClick={() => {
                        handleAddToBookmark(
                          "PLpmV6S5Msuyb0BQwnNgmIDy6Gon7EKDBF",
                            uid,
                            "CS Projects",
                            cs3
                        );
                        //console.log('clicked Bookmark CS Projects');
                        }}
                    />
              </Popover>,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.googleusercontent.com/ytc/AGIKgqPHqcCVdf1F6mxc5YR293cqcxAudyethE10z-qWTQ=s176-c-k-c0x00ffffff-no-rj" />
              }
              title="CS Projects"
              description="By Rahul Singh"
            />
          </Card>
        </section>
      </div>
      <div className="very-center">
        <h2>Machine Learning Track</h2>
        <section className="video-section">
          <Card className="card"
            cover={<img src={img4} alt="Python Programming"></img>}
            actions={[
              <Popover content="Preview in the Player">
              <Link
                to={{
                  pathname: "/player",
                  playlistID: "PLQVvvaa0QuDeAams7fkdcwOGBpGdHpXln",
                  tracking: false,
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>
              </Popover>,
              <Popover content="Enroll Course">
                  <Popconfirm
                      title="You shouldn't learn two things at once, adding to bookmarks is better, still wanna continue"
                      onConfirm={() => {
                      handleAddCourse("PLQVvvaa0QuDeAams7fkdcwOGBpGdHpXln", "Python Programming ", uid);
                      //console.log('clicked Enroll Python');
                      }}
                  >
                  <PlusCircleOutlined key="Enroll" />
                  </Popconfirm>
              </Popover>,
              <Popover content="Add to bookmark">
                    <CopyOutlined
                        onClick={() => {
                        handleAddToBookmark(
                          "PLQVvvaa0QuDeAams7fkdcwOGBpGdHpXln",
                            uid,
                            "Python Programming ",
                            img4
                        );
                        //console.log('clicked Bookmark Python');
                        }}
                    />
              </Popover>,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.ggpht.com/ytc/AKedOLS4PrPaM3XUymase4vM38wnsSYY803EreFCHVoatg=s88-c-k-c0x00ffffff-no-rj" />
              }
              title="Python Programming "
              description="By Sentdex"
            />
          </Card>

          <Card className="card"
            cover={<img src={img5} alt="Machine Learning"></img>}
            actions={[
              <Popover content="Preview in the Player">
              <Link
                to={{
                  pathname: "/player",
                  playlistID: "PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v",
                  tracking: false,
                }}
              >
                <CaretRightOutlined
                  key="Play"
                  onClick={() => {
                    //handleAddCourse("PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v", uid);
                    console.log('clicked Play Machine Learning');
                  }}
                />
              </Link>
              </Popover>,
              <Popover content="Enroll Course">
                  <Popconfirm
                      title="You shouldn't learn two things at once, adding to bookmarks is better, still wanna continue"
                      onConfirm={() => {
                      handleAddCourse("PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v","Intro to Machine Learning", uid);
                      //console.log('clicked Enroll Machine Learning');
                      }}
                  >
                  <PlusCircleOutlined key="Enroll" />
                  </Popconfirm>
              </Popover>,
              <Popover content="Add to bookmark">
                    <CopyOutlined
                        onClick={() => {
                        handleAddToBookmark(
                          "PLQVvvaa0QuDfKTOs3Keq_kaG2P55YRn5v",
                            uid,
                            "Intro to Machine Learning",
                            img5
                        );
                        //console.log('clicked Bookmark Machine Learning');
                        }}
                    />
              </Popover>,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.ggpht.com/ytc/AKedOLS4PrPaM3XUymase4vM38wnsSYY803EreFCHVoatg=s88-c-k-c0x00ffffff-no-rj" />
              }
              title="Intro to Machine Learning"
              description="By Sentdex"
            />
          </Card>

          <Card className="card"
            cover={<img src={img6} alt="ML Projects"></img>}
            actions={[
              <Popover content="Preview in the Player">
              <Link
                className="action-link"
                to={{
                  pathname: "/player",
                  playlistID: "PLfFghEzKVmjvuSA67LszN1dZ-Dd_pkus6",
                  tracking: false,
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>
              </Popover>,
              <Popover content="Enroll Course">
                  <Popconfirm
                      title="You shouldn't learn two things at once, adding to bookmarks is better, still wanna continue"
                      onConfirm={() => {
                      handleAddCourse("PLfFghEzKVmjvuSA67LszN1dZ-Dd_pkus6", "Machine Learning Projects",uid);
                      //console.log('clicked Enroll ML Projects');
                      }}
                  >
                  <PlusCircleOutlined key="Enroll" />
                  </Popconfirm>
              </Popover>,
              <Popover content="Add to bookmark">
                    <CopyOutlined
                        onClick={() => {
                        handleAddToBookmark(
                          "PLfFghEzKVmjvuSA67LszN1dZ-Dd_pkus6",
                            uid,
                            "Machine Learning Projects",
                            img6
                        );
                        //console.log('clicked Bookmark ML Projects');
                        }}
                    />
              </Popover>,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.ggpht.com/ytc/AKedOLSKNlxTFQrCEjs7F61i_ZMpuUGXP3bQ4IbW93tM=s176-c-k-c0x00ffffff-no-rj" />
              }
              title="Machine Learning Projects"
              description="By Siddhardhan"
            />
          </Card>
        </section>
      </div>
      
      <div className="very-center">
        <h2>Frontend Development Track</h2>
        <section className="video-section">
          <Card className="card"
            cover={<img src={img1} alt="Freecodecamp HTML+CSS"></img>}
            actions={[
              <Popover content="Preview in the Player">
              <Link
                to={{
                  pathname: "/player",
                  playlistID: "PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88",
                  tracking: false,
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>,
              </Popover>,
              <Popover content="Enroll Course">
                  <Popconfirm
                      title="You shouldn't learn two things at once, adding to bookmarks is better, still wanna continue"
                      onConfirm={() => {
                      handleAddCourse("PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88", "HTML+CSS ", uid);
                      //console.log('clicked Enroll HTML+CSS');
                      }}
                  >
                  <PlusCircleOutlined key="Enroll" />
                  </Popconfirm>
              </Popover>,
              <Popover content="Add to bookmark">
                    <CopyOutlined
                        onClick={() => {
                        handleAddToBookmark(
                          "PLWKjhJtqVAbnSe1qUNMG7AbPmjIG54u88",
                            uid,
                            "HTML+CSS ",
                            img1
                        );
                        //console.log('clicked Bookmark HTML+CSS');
                        }}
                    />
              </Popover>,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://clipground.com/images/freecodecamp-logo-6.jpg" />
              }
              title="HTML+CSS "
              description="By FreeCodeCamp"
            />
          </Card>

          <Card className="card"
            cover={<img src={img2} alt="Traverssy JS"></img>}
            actions={[
              <Popover content="Preview in the Player">
                <Link
                to={{
                  pathname: "/player",
                  playlistID: "PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX",
                  tracking: false,
                }}
              >
                <CaretRightOutlined
                  key="Play"
                />
              </Link>
              </Popover>,
              <Popover content="Enroll Course">
                  <Popconfirm
                      title="You shouldn't learn two things at once, adding to bookmarks is better, still wanna continue"
                      onConfirm={() => {
                      handleAddCourse("PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX", "Javascript", uid);
                      console.log('clicked Enroll Traversy JSS');
                      }}
                  >
                  <PlusCircleOutlined key="Enroll" />
                  </Popconfirm>
              </Popover>,
              <Popover content="Add to bookmark">
                    <CopyOutlined
                        onClick={() => {
                        handleAddToBookmark(
                          "PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX",
                            uid,
                            "Javascript",
                            img2
                        );
                        //console.log('clicked Bookmark Traversy JSS');
                        }}
                    />
              </Popover>,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.ggpht.com/ytc/AKedOLSxHOOxxa9Af8Bfb2XMop3lm4tor9bViWiC-d5aaw=s68-c-k-c0x00ffffff-no-rj" />
              }
              title="Javascript"
              description="By Traversy Media"
            />
          </Card>

          <Card className="card"
            cover={<img src={img3} alt="ReactJS"></img>}
            actions={[
              <Popover content="Preview in the Player">
              <Link
                className="action-link"
                to={{
                  pathname: "/player",
                  playlistID: "PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
                  tracking: false,
                }}
              >
                <CaretRightOutlined key="Play" />
              </Link>
              </Popover>,
              <Popover content="Enroll Course">
                  <Popconfirm
                      title="You shouldn't learn two things at once, adding to bookmarks is better, still wanna continue"
                      onConfirm={() => {
                      handleAddCourse("PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d", "React JS", uid);
                      //console.log('clicked Enroll React JS');
                      }}
                  >
                  <PlusCircleOutlined key="Enroll" />
                  </Popconfirm>
              </Popover>,
              <Popover content="Add to bookmark">
                    <CopyOutlined
                        onClick={() => {
                        handleAddToBookmark(
                          "PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d",
                            uid,
                            "React JS",
                            img3
                        );
                        //console.log('clicked Bookmark React JS');
                        }}
                    />
              </Popover>,
            ]}
            bordered={true}
          >
            <Meta
              avatar={
                <Avatar src="https://yt3.ggpht.com/ytc/AKedOLT3v89U-2iVX-78hqPk1-lBIduTcljrKLIH9YJg1A=s176-c-k-c0x00ffffff-no-rj" />
              }
              title="React JS"
              description="By The Net Ninja"
            />
          </Card>
        </section>
      </div>
    </div>
  );
}

export default Courses;
