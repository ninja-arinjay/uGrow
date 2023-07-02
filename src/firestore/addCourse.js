import { message } from "antd";
import firebaseApp from "../firebase/Firebase";
import getMaxVideos from "../Api/getMaxVideos";

const handleAddCourse = async (
  playlistID,
  title,
  uid
) => {
    if (uid === "") {
        message.error("Not Logged In",1.5);
        return;
      }
    console.log("inside Add course function");
    let totalVideos = await getMaxVideos(playlistID);
    console.log(totalVideos);
    const courseRef = firebaseApp.firestore().collection("users").doc(uid).collection("courses");
    console.log(courseRef);
    const courseSnapshot = await courseRef.doc(playlistID).get();
    console.log(courseSnapshot);
    if (courseSnapshot.exists) {
        message.info(`You have already enrolled in the course.`,1.5);

    } else {
        console.log("Course does not exist, creating new document");
        const data = {
            Playlist_ID : playlistID,
            Title : title,
            Total_Videos : totalVideos
        };
        await courseRef.doc(playlistID).set(data)
            .then(() => {
                message.info(`You have successfully enrolled in the course.`,1.5);
                console.log("success");
                // add a redirect here
            })
            .catch((error) => {
                message.info(`Error creating document`,1.5);
                console.log("failed", error);
            });
    }
};

export default handleAddCourse;
