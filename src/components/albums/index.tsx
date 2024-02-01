import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";
import { fetchAlbums, fetchUser } from "../../helpers/http";
import { AlbumList, AlbumItem, AlbumTitle, PageTitle } from "./index.style";

interface Album {
  id: number;
  title: string;
  userId: number;
}

const Albums: React.FC = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const albumsData = await fetchAlbums(userId);
      const userData = await fetchUser(userId);
      if (userData) {
        setUsername(userData.username);
      }
      setAlbums(albumsData);
    };

    fetchData();
  }, [userId]);

  return (
    <>
      <PageTitle>Albums by {username}</PageTitle>
      <AlbumList>
        {albums.map((album) => (
          <AlbumItem key={album.id}>
            <AlbumTitle to={`/albums/${album.id}`}>
              {album.title} <IoArrowForward size={24} />
            </AlbumTitle>
          </AlbumItem>
        ))}
      </AlbumList>
      <Helmet>
        <title>{username ? `Albums by ${username}` : "Albums"}</title>
      </Helmet>
    </>
  );
};

export default Albums;
