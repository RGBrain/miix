import axios from "axios";
// const [data, setData] = useState([]);

// useEffect(() => {
//   axios
//     .get("https://api.spotify.com/v1/me/top/tracks")
//     .then((response) => {
//       setData(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);

// return (
//   <div>
//     {data.map((item) => (
//       <p key={item.id}>{item.title}</p>
//     ))}
//   </div>
// );

// const BASEURL = "https://";
// const APIKEY = "";

// export default {
//   search: function (query) {
//     return axios.get(BASEURL + query + APIKEY);
//   },
// };

// const getTopTracks = async (e) => {
//   e.preventDefault();
//   const { data } = await axios.get("https://api.spotify.com/v1/me/top/tracks", {
//     headers: { Authorization: `Bearer ${props.token}` },
//   });
//   console.log(data);
//   addSongs(data.items);
// };
