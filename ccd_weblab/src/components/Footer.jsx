import React from 'react'
import styled from 'styled-components'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';

const Footer = styled.nav`
  height: 80px;
  display: flex;
  background: black;
  align-content: flex-end;
  padding: 1rem 2rem;
  position: sticky;
  width: 100%;
  z-index: 5;
`;
// estilos de txto
const FootNav = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

function footer() {
  return (
      <Footer>
          <IoLogoFacebook style={{ color: 'White' }}/>
          <IoLogoTwitter style={{ color: 'White' }}/>
          <IoLogoInstagram style={{ color: 'White' }}/>
    </Footer>
  )
}

export default footer