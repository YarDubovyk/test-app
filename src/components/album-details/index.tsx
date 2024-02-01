import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { fetchPhotos, fetchAlbum } from "../../helpers/http";
import {
  PhotoItem,
  PhotoList,
  PhotoDescription,
  PageTitle,
} from "./index.style";

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface Album {
  id: number;
  userId: number;
  title: string;
}

const AlbumDetails: React.FC = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState<Album | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (albumId) {
        const albumData = await fetchAlbum(albumId);
        setAlbum(albumData);
        const photosData = await fetchPhotos(albumId);
        setPhotos(photosData);
      }
    };

    fetchData();
  }, [albumId]);

  return (
    <>
      {album && <PageTitle>{album.title}</PageTitle>}
      <PhotoList>
        {photos.map((photo) => (
          <PhotoItem key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <PhotoDescription>{photo.title}</PhotoDescription>
          </PhotoItem>
        ))}
      </PhotoList>
      <Helmet>
        <title>{album ? album.title : "Album Page"}</title>
      </Helmet>
    </>
  );
};

export default AlbumDetails;
