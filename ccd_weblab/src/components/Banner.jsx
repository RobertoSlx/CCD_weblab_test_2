import React, {useState, useRef, useEffect} from 'react';
import { FaSlideshare } from 'react-icons/fa';
import styled, { css } from 'styled-components/macro';
import { ButtonArticle } from './ButtonArticle';
import { IoMdArrowRoundForward, IoMdArrowRoundBack } from 'react-icons/io';

// Definicion de estilos

// Definicion de espacio en pantalla
const BannerSection = styled.section`
    height: auto;
    max-height: 40vw;
    position: relative;
    overflow: hidden;
    margin-bottom: 4rem;
    @media screen and (max-width: 768px){
        max-height: 60vw;
    }
`;
// Definicion general del cntenedor
const BannerWrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;
// Definicion del banner 
const BannerSlide = styled.div`
    z-index: 1;
    width: 80vw;
    height: 40vw;
    @media screen and (max-width: 768px){
        height: 60vw;
    }
`;
// definicion del contenedor
const BannerSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0; 
    width: 80vw;
    height: 40vw;
    display: flex;
    align-items: center;
    justify-content: center;

    /* &::before{
        content: '';
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100vh;
        bottom: 0vh;
        left: 0;
        overflow: hidden;
        opacity: 0.4;
        background: linear-gradient(
            0deg, 
            rgba(0,0,0,0.2) 0%, 
            rgba(0,0,0,0.2) 50%,
            rgba(0,0,0,0.6) 100%,
        )
    } */
`;
// Definicion del template de las diapositivas
const BannerImage = styled.img`
    position: absolute;
    top: 0;
    left: 0; 
    width: 100vw;
    height: 100vw;
    max-height: 80vw;
    object-fit: cover;
`;
// Definicion del estlo del texto
const BannerContent = styled.div`
    position: relative;
    z-index: 10;
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
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0,0,0, 0.4);
    }
`;
// Boton del articulo
const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    display: flex;
    z-index: 10;
`;
// Definiciones para os botones de dezplazamiento
const arrowButtons = css`
    width: 50px;
    height: 50px;
    color: #fff;
    cursor: pointer;
    background: #000d1a;
    border-radius: 50px;
    padding: 10px;
    margin-right: 1rem;
    margin-left: 1rem;
    user-select: none;
    transition: 0.3;

    &:hover{
        background: #cd853f;
        transform: scale(1.05);
    }
`;
const Arrow = styled(IoMdArrowRoundForward)`
    margin-left: 0.rem;
`;
const PrevArrow = styled(IoMdArrowRoundBack)`
    ${arrowButtons}
`;
const NextArrow = styled(IoMdArrowRoundForward)`
    ${arrowButtons}
`;

 // Funcion principal
const Banner = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    // Funcion de la tancicion automatica de las diapositivas
    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        };
        // Temporizador para el cambio de diapositiva
        timeout.current = setTimeout(nextSlide, 3000);

        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
            };
        },
        [current, length]
    
    );
    const nextSlide = () => {
        if (timeout.current) {
                clearTimeout(timeout.current);
            }
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const prevSlide = () => {
        if (timeout.current) {
                clearTimeout(timeout.current);
            }
        setCurrent(current === 0 ? length - 1 : current - 1)
    };
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    };

    // Retorno de la definicion principal
    return (
        <BannerSection>
            <BannerWrapper>
                {slides.map((slide, index) => {
                    return (
                        <BannerSlide key={index}>
                            {index === current && (
                                <BannerSlider>
                                    <BannerImage src={slide.image} alt="imagen"/>
                                    <BannerContent>
                                        <h1>{slide.header}</h1>
                                        <p>{slide.subtitle}</p>
                                        <ButtonArticle to={slide.path}
                                            primary="true"
                                            css={'max-width: 160px;'}>
                                            Ver Mas
                                            <Arrow />
                                        </ButtonArticle>
                                    </BannerContent>
                                </BannerSlider>
                            )}
                        </BannerSlide>
                    );
                })}
                <SliderButtons>
                    <PrevArrow onClick={nextSlide}/>
                    <NextArrow onClick={prevSlide}/>
                </SliderButtons>
            </BannerWrapper>
        </BannerSection>
    );
};

export default Banner