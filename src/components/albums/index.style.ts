import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageTitle = styled.h2`
  margin-bottom: 40px;
  font-size: 36px;
`;

export const AlbumList = styled.ul``;

export const AlbumItem = styled.li`
  margin-bottom: 40px;
  padding-bottom: 8px;
  border-bottom: 2px solid #000;
`;

export const AlbumTitle = styled(Link)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 30px;
  text-decoration: none;
  color: #000;
`;
