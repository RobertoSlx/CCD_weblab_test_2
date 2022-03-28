import React, {useState} from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Definicion del enu dezplegable en pantalla completa
const DropdownContainer = styled.div`
    position: fixed;
    z-index: 30;
    width: 100%;
    height: 100%;
    background: #f0beff;
    display: grid;
    align-items: center;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;
// Estilos para iconos svg
const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;
const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;
// Estilo del contenedor de vinculos
const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat( 4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 768px){
        grid-template-rows: repeat( 4, 60px);
    }
`;
// Estilos para los vinculos
const DropdownLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        color: #000d1a;
    }
`;

// Funcion principal, Definicion de las ventanas en MenuData.jsx
const DropMenu = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
                <DropdownMenu>
                    {menuData.map(( item, index )=>(
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>))}
                </DropdownMenu>
        </DropdownContainer>
    );
};

export default DropMenu