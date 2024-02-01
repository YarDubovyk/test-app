import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { fetchPosts, fetchUser } from "../../helpers/http";
import {
  PostsList,
  PostItem,
  PostTitle,
  PostDescription,
  PageTitle,
} from "./index.style";

interface Post {
  id: string;
  title: string;
  body: string;
  userId: string;
}

const Posts: React.FC = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        const userData = await fetchUser(userId);
        if (userData) {
          setUsername(userData.username);
        }
        const postsData = await fetchPosts(userId);
        setPosts(postsData);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <>
      <PostsList>
        <PageTitle>Posts by {username}</PageTitle>
        {posts.map((post, i) => {
          return (
            <PostItem key={`list-iten-${i}`}>
              <PostTitle>{post.title}</PostTitle>
              <PostDescription>{post.body}</PostDescription>
            </PostItem>
          );
        })}
      </PostsList>
      <Helmet>
        <title>{username ? `Posts by ${username}` : "Posts"}</title>
      </Helmet>
    </>
  );
};

export default Posts;
