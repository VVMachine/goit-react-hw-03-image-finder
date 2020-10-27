import axios from "axios";

const API_KEY = `18096168-1a47ddc4f6b43b68eb373a2c6`;

export default function apiRequest(searchQuery, page) {
  return axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(resp => resp.data);
}
