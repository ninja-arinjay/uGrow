const API_KEY ="AIzaSyBPLlaCcDkoDBBdhjeBrM-KLojXVF0LB6A";
const _URL = "https://www.googleapis.com/youtube/v3/playlistItems";


const getMaxVideos = async (playlistID) => {
  const options = {
    part: "snippet",
    key: API_KEY,
    maxResults: 500,
    playlistId: playlistID,
  };
  const url = getFetchUrl(options);

  let data = await (await fetch(url)).json();
  let temp = data.items;
  console.log(temp);
  const result = temp.map((i) => ({
    id: i.snippet.resourceId.videoId,
    title: i.snippet.title,
    description : i.snippet.description,
    watched: false,
  }));
  return result;
};


const getFetchUrl = (options) => {
  var url = new URL(_URL),
    params = options;
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  return url;
};

export default getMaxVideos;
