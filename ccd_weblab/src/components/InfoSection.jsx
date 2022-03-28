import React from 'react'
import styled from 'styled-components';
import { ButtonArticle } from './ButtonArticle';
import { IoMdArrowRoundForward } from 'react-icons/io';

// Definicion de esilos

// Dimensiones del contenedor y definicion de ssu esspacio en pantalla
const ArticleContainer = styled.section`
    height: auto;
    max-height: 120vw;
    position: relative;
    overflow: hidden;
    margin-bottom: 4rem;
    margin: 1rem;

    @media screen and (max-width: 768px){
        max-height: 280vw;
        grid-template-rows: repeat( 8,40vw);
    }
`;
// definicon del grid y ajustes por tamaño
const ArticleSection = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    overflow: hidden;
    position: relative;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat( 4, 40vw);
    text-align: start;
    margin-bottom: 2rem;
    margin-left: 2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        grid-template-rows: repeat( 8,40vw);
    }
`;
// definicion de llaa vista de celdas individuales
const ArticlePreview = styled.div`
    height: auto;
`;
// Estilos para las imagenes
const ArticleImage = styled.img`
    position: relative;
    top: 0;
    left: 0; 
    width: 40vw;
    height: 20vw;
    max-height: 80vw;
    object-fit: cover;
    z-index: 1;
`;
// Definiciones del parrafo
const ArticleContent= styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% -100px);
    color: #000000;
    background-color: white;
    box-shadow: #000000;
    box-shadow: 5px;

    h1{
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p{
        margin-right: 4rem;
        text-shadow: 0px 0px 20px rgba(0,0,0, 0.4);
    }
`;
// Flecha para el boton
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.rem;
`;

// Funcion para dezplegar los articulos destacados, 
// la seleccion puede ser manual pero permanezco a la espera 
const InfoSection = ({Posts}) => {
  return (
      <ArticleContainer>
          <ArticleSection>
              {Posts.map((post, index) => {
                  return (
                      <ArticlePreview key={index}>
                            <ArticleImage src={post.image} alt="imagen" />
                            <ArticleContent>
                              <h1>{post.header}</h1>
                              <p>{post.subtitle}</p>
                              <ButtonArticle to={post.path}
                                  primary="true"
                                  css={'max-width: 160px;'}>
                                  Ver Mas
                                  <Arrow />
                              </ButtonArticle>
                          </ArticleContent>
                      </ArticlePreview>
                  );  
                })}
        </ArticleSection>
      </ArticleContainer>
  )
}

export default InfoSection