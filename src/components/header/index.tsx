import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoArrowBackSharp, IoRocketSharp } from "react-icons/io5";
import { Wrapper, Logo, BackButton } from "./index.style";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper>
      {location.pathname !== "/" && (
        <BackButton onClick={() => navigate(-1)} title="go back">
          <IoArrowBackSharp size={30} />
        </BackButton>
      )}
      <Logo>
        Test App <IoRocketSharp />
      </Logo>
    </Wrapper>
  );
};

export default Header;
