import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com"

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchUsers = async () => fetchData(`${apiUrl}/users`);
export const fetchUser = async (userId) => fetchData(`${apiUrl}/users/${userId}`);
export const fetchPosts = async (userId) => fetchData(`${apiUrl}/users/${userId}/posts`);
export const fetchAlbums = async (userId) => fetchData(`${apiUrl}/users/${userId}/albums`);
export const fetchAlbum = async (albumId) => fetchData(`${apiUrl}/albums/${albumId}`);
export const fetchPhotos = async (albumId) => fetchData(`${apiUrl}/albums/${albumId}/photos`); 