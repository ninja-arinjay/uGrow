import React, {useState, useContext} from 'react';
import {
    CaretRightOutlined,
    CopyOutlined,
    PlusCircleOutlined
  } from "@ant-design/icons";
import { Avatar, Card, Popconfirm, Popover } from "antd";
import { Link } from "react-router-dom";
import { AuthContext } from '../../firebase/Auth';
import handleAddToBookmark from '../../firestore/addBookmark';
import handleAddCourse from '../../firestore/addCourse';
import './Explore.css';
import instance from '../../Api/youtube';

function Explore() {
    const { currentUser } = useContext(AuthContext);
    const uid = currentUser.uid;
    console.log(uid);
    const [data, setData] = useState([]);
    const handleChange = async (event) => {
        if (event.key === 'Enter') {
            console.log(event.target.value);
            const response = await instance.get("/search", {
            params: {
              q: event.target.value.trim(),
            },
            });
            setData(response.data.items);
            //console.log(response);
        }
    };
    const { Meta } = Card;
  return (
    <div>
      <h2>Search a keyword to get a playlist</h2>
      <div className="box-container">
        <input type="text" placeholder="   Search" className="search-input" onKeyPress={handleChange}/>
      </div>
      <div className="allplaylists">
        <ul>
          {data.map((item) => (
            <Card 
                className='cardItem'
                style={({ width: 50 }, { padding: 0 }, { margin: 20 })}
                actions={[
                    <Popover content="Preview in the Player">
                    <Link
                        to={{
                        pathname: "/player",
                        playlistID: item.id.playlistId,
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
                        handleAddCourse(item.id.playlistId, item.snippet.title, uid);
                        //console.log('Enroll Course Clicked', item);
                        }}
                    >
                    <PlusCircleOutlined key="Enroll" />
                    </Popconfirm>
                    </Popover>,
                    <Popover content="Add to bookmark">
                    <CopyOutlined
                        onClick={() => {
                        handleAddToBookmark(
                            item.id.playlistId,
                            uid,
                            item.snippet.title,
                            item.snippet.thumbnails.high.url
                        );
                        console.log('Bookmark Course Clicked');
                        }}
                    />
                    </Popover>,
                ]}
                bordered={true}
            >
            <Meta
                avatar={<Avatar src={item.snippet.thumbnails.default.url} />}
                title={item.snippet.title}
                description={item.snippet.description}
            />
            </Card>
            //<li key={JSON.stringify(item.id.playlistId)}>{item.etag}</li>
          ))}
        </ul>
       </div>
    </div>
  );
}

export default Explore;
