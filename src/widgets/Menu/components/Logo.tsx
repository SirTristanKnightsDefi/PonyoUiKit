import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "../../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
  banner?: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 48px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href, banner }) => {
  const isAbsoluteUrl = href.startsWith("http");
  if(isDark){
    banner = 'https://metaclubbers.mypinata.cloud/ipfs/QmUnmRb5GsQux1nESaNLcGQEQavd9TCFapG7ucR5BBJA33';
  } else {
    banner = 'https://metaclubbers.mypinata.cloud/ipfs/QmUnmRb5GsQux1nESaNLcGQEQavd9TCFapG7ucR5BBJA33';
  }

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Ponyo home page">
          <img
            src="https://metaclubbers.mypinata.cloud/ipfs/QmUnmRb5GsQux1nESaNLcGQEQavd9TCFapG7ucR5BBJA33"
            alt="Ponyo Logo"
            className="mobile-icon"
            height="32px"
          />
          <img
            src={banner}
            alt="Ponyo Logo"
            className="desktop-icon"
            height="32px"
          />
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Ponyo home page">
          <img
            src="https://metaclubbers.mypinata.cloud/ipfs/QmUnmRb5GsQux1nESaNLcGQEQavd9TCFapG7ucR5BBJA33"
            alt="Ponyo Logo"
            className="mobile-icon"
            height="32px"
          />
          <img
            src={banner}
            alt="Ponyo Logo"
            className="desktop-icon"
            height="32px"
          />
        </StyledLink>
      )}
    </Flex>
  );
};

export default Logo;
