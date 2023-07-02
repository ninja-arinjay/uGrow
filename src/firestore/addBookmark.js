import { message } from "antd";
import firebaseApp from "../firebase/Firebase";

const handleAddToBookmark = async (
  playlistID,
  uid,
  title = "Untitled",
  thumbnail = "https://i.stack.imgur.com/y9DpT.jpg"
) => {
    if (uid === "") {
        message.error("Not Logged In",1.5);
        return;
      }
    console.log("inside function");
    const bookmarkRef = firebaseApp.firestore().collection("users").doc(uid).collection("bookmarks");
    console.log(bookmarkRef);
    const bookmarkSnapshot = await bookmarkRef.doc(playlistID).get();
    console.log(bookmarkSnapshot);
    if (bookmarkSnapshot.exists) {
        message.info(`Course has been already added to Bookmarks.`,1.5);

    } else {
        console.log("Bookmark does not exist, creating new document");
        const data = {
            Playlist : playlistID, 
            Title : title, 
            Thumbnail : thumbnail 
        };
        await bookmarkRef.doc(playlistID).set(data)
            .then(() => {
                message.info(`Course added to Bookmarks check it out`,1.5);
                console.log("success");
                // add a redirect here
            })
            .catch((error) => {
                message.info(`Error creating document`,1.5);
                console.log("failed", error);
            });
    }
};

export default handleAddToBookmark;
