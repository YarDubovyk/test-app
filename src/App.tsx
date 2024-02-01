import React from "react";
import Users from "./components/users";
import GlobalStyle from "./helpers/global-styles";
import Layout from "./components/layout";
import Posts from "./components/posts";
import Albums from "./components/albums";
import AlbumDetails from "./components/album-details";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const App = () => (
  <HelmetProvider>
    <Layout>
      <GlobalStyle />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/posts" element={<Posts />} />
          <Route path="/:userId/albums" element={<Albums />} />
          <Route path="/albums/:albumId" element={<AlbumDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  </HelmetProvider>
);

export default App;
