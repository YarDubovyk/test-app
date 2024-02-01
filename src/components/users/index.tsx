import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { IoNewspaper, IoImages, IoArrowUp, IoArrowDown } from "react-icons/io5";
import { fetchUsers } from "../../helpers/http";
import {
  UserList,
  ListItem,
  Icons,
  IconLink,
  Input,
  Header,
  ButtonsWrapper,
  SortButton,
  NoResults,
} from "./index.style";

interface User {
  id: string;
  username: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const sortUsers = (field: string, order: "asc" | "desc") => {
    const sortedUsers = [...users].sort((a, b) => {
      if (order === "asc") {
        return a[field].localeCompare(b[field]);
      } else {
        return b[field].localeCompare(a[field]);
      }
    });

    setUsers(sortedUsers);
  };

  const inputHandler = (e) => {
    const value = e.target.value.toLowerCase();

    if (value === "") {
      fetchData();
    } else {
      const result = users.filter((user) =>
        user.username.toLowerCase().includes(value)
      );

      if (result.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
        setUsers(result);
      }
    }
  };

  const fetchData = async () => {
    const usersData = await fetchUsers();
    setUsers(usersData);
    setNoResults(false);
  };

  return (
    <>
      <Header>
        <Input type="text" placeholder="Search" onChange={inputHandler} />
        <ButtonsWrapper>
          Sort by:
          <SortButton onClick={() => sortUsers("username", "asc")}>
            <IoArrowUp size={24} />
          </SortButton>
          <SortButton onClick={() => sortUsers("username", "desc")}>
            <IoArrowDown size={24} />
          </SortButton>
        </ButtonsWrapper>
      </Header>
      <UserList>
        {noResults ? (
          <NoResults>No results found</NoResults>
        ) : (
          users.map((user, i) => (
            <ListItem key={`list-item-${i}`}>
              {user.username}
              <Icons>
                <IconLink to={`/${user.id}/posts`} title="Открыть посты">
                  <IoNewspaper />
                </IconLink>
                <IconLink to={`/${user.id}/albums`} title="Открыть альбомы">
                  <IoImages />
                </IconLink>
              </Icons>
            </ListItem>
          ))
        )}
      </UserList>
      <Helmet>
        <title>Users Page</title>
      </Helmet>
    </>
  );
};

export default Users;
