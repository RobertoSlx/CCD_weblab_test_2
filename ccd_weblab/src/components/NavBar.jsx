import React from 'react'
import styled, {css} from 'styled-components/macro'
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import { ButtonArticle } from './ButtonArticle';
import { FiMenu } from 'react-icons/fi';

// Definicion de estiloa

// Estilos genrales y proporciones de la barra de navegacion
const Nav = styled.nav`
  height: 80px;
  display: flex;
  background: black;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  z-index: 5;
`;
// vinculos, La extencion de css para la respuesta en &:hover
const NavLink = css`
  color:#fff;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  &:hover{
    background-color: #272626;
  }
`;
// boton del menu dezplegable
const MenuIcon = styled.i`
  display:none;

  @media screen and (max-width: 768px){
    display: flex;
    background-size: contain;
    height: 80px;
    width: 80px;
    cursor: pointer;
    position: relative;
    top: 0;
    right: 0;
    transform: translate(50%, 25%);
  }
`;
// estilos de txto
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media screen and (max-width: 768px){
    display: none;
  }
`;
// estilos de loss vinculos
const NavMenuLinks = styled(Link)`
  ${NavLink}
  text-decoration: none;
  color:#fff;
`;
// Definicion del logo, hay algunos probllemas con el svg
const Logo = styled(Link)`
  ${NavLink}
  color: white;
`;

// Funcion principal
const NavBar= ({toggle}) => {
  return (
    <Nav>
      <Logo to="/"> CCD </Logo>
      <MenuIcon> 
        {/* <object type="image/svg+xml" data={Animated}></object> */}
        <FiMenu style={{ color: 'White' }} onClick={toggle} />
      </MenuIcon>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
    </Nav>
  );
}

export default NavBar