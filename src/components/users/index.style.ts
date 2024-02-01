import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserList = styled.ul`
  position: relative;
  width: 100%;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  line-height: 1.5;
  padding: 16px 0;
  color: #363636;
  border-bottom: 2px solid #363636;
`;

export const Icons = styled.div`
  display: flex;
  gap: 20px;
`;
export const IconLink = styled(Link)`
  color: #80a4ed;
`;

export const Input = styled.input`
  width: 10vw;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #000;
  font-size: 20px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 16px;
`;

export const NoResults = styled.h2`
  margin-top: 10vw;
  font-size: 30px;
  text-align: center;
`;

export const SortButton = styled.button``;
