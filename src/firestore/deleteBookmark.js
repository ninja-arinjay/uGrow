import { message } from "antd";
import firebaseApp from "../firebase/Firebase";

const handleDeleteBookmark = async (playlistID, uid) => {
  if (uid === "") {
    message.error("Not Logged In",1.5);
    return;
  }

  console.log("Inside deleteBookmark function");
  const bookmarkRef = firebaseApp
    .firestore()
    .collection("users")
    .doc(uid)
    .collection("bookmarks")
    .doc(playlistID);

  try {
    const bookmarkSnapshot = await bookmarkRef.get();
    if (bookmarkSnapshot.exists) {
      await bookmarkRef.delete();
      message.info(`Bookmark deleted successfully`,1.5);
      console.log("success");
      // add a redirect here if needed
    } else {
      message.info(`Bookmark does not exist`,1.5);
    }
  } catch (error) {
    message.info(`Error deleting bookmark: ${error}`,1.5);
    console.log("failed", error);
  }
};

export default handleDeleteBookmark;
