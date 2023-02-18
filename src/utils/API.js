import axios from "axios";
const BASEURL = "https://";
const APIKEY = "";

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};
