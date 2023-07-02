import { message } from "antd";
import firebaseApp from "../firebase/Firebase";

const handleDeleteCourse = async (playlistID, uid) => {
  console.log('Inside Delete Course', playlistID);
  if (uid === "") {
    message.error("Not Logged In", 1.5);
    return;
  }

  try {
    const coursesRef = firebaseApp.firestore()
    .collection("users")
    .doc(uid)
    .collection("courses")
    .doc(playlistID);
    const coursesSnapshot = await coursesRef.get();
    if (coursesSnapshot.exists) {
      await coursesRef.delete();
      //message.info(`Course deleted successfully`);
      console.log("success");
      // add a redirect here if needed
    } else {
      message.info(`Course does not exist`, 1.5);
    }
    message.success(`Course deleted successfully`, 1.5);
    console.log("Deleted course successfully");
  } catch (error) {
    message.error(`Error deleting course: ${error.message}`, 1.5);
    console.log("Failed to delete course", error);
  }
};

export default handleDeleteCourse;
