import React, { ReactNode } from "react";
import styled from "styled-components";

interface LayoutProps {
  children: ReactNode;
}

export const Wrapper = styled.div`
  max-width: 30vw;
  padding: 10vh 0;
  width: 100%;
  margin: 0 auto;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
