import axios from "axios";
// const KEY = "AIzaSyAJHoU6GmUO5GUEXxOHTYwrcoeZ1ifNGww";
const KEY = "AIzaSyBPLlaCcDkoDBBdhjeBrM-KLojXVF0LB6A";
const instance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "playlist",
    maxResults: 15,
    key: KEY,
  },
});
// const handleSubmit = async () => {
//     const response = await instance.get("/search", {
//       params: {
//         q: "car",
//       },
//     });
//     console.log(response.data.items);
// }
// handleSubmit();


export default instance;
