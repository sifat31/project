import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Button1 } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import GlobalStyles from "./styles/Global";
import { AiOutlineWallet } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav >
          <Logo src="./images/logo.svg" alt="logo" />
          <searchbox>
            <input placeholder="Search" type="text" />
          </searchbox>
          <li>
            <p>Explore</p>
            <p>Market</p>
            <p>about</p>
            <p>create</p>
            <p>wallet  <AiOutlineWallet /></p>
          </li>
          <loginButton>Log In <AiOutlineUser /></loginButton>
        </Nav>
        <GlobalStyles />
        <Flex>
          <div>
            <h4>Discover, invest, Collect 
            and Profit Form cards
            </h4>
            <p>BooleanStock is the worlds first company
            Cards Marketplaces</p>
            <Button >Explore</Button>
            <Button1 >Create</Button1>
          </div>
          <Image src="./images/header photo.png" alt="" />

        </Flex>

      </Container>
    </StyledHeader>
  );
};

export default Header;
