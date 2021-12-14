import React from 'react'
import styled from "styled-components"

const slice = [1, 2, 3, 4, 5, 6];

export const Dice = () => (
    <Container>
        {slice.map((_, index) => (
            <Cube key={index} index={index}>
                <Top index={index} />
            </Cube>   
        ))}     
    </Container>
)

const Container = styled("div")`
    position: relative;
`
const Cube = styled("div")`
    width: 112px;
    height: 112px;
    top: ${({ index }) => `${50 + -index}px` };
    transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform: rotateX(330deg) rotateY(315deg) rotateZ(0deg);
    -moz-transform: rotateX(330deg) rotateY(315deg) rotateZ(0deg);
    -webkit-transform: rotateX(330deg) rotateY(315deg) rotateZ(0deg);
    margin: auto;
    position: relative;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    position: absolute;
`
const Face = styled("div")`
    position: absolute;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    width: 112px;
    height: 4px; //4px
    float: left;
    overflow: hidden;
    background: ${({ index }) => index === slice.length - 1 ? "linear-gradient(270deg, #B78DD8 4.72%, #938ECE 95.75%)" : "linear-gradient(90.21deg, #907BCB 0.03%, #745E7C 99.76%)" }; 
`
const Top = styled(Face)`
    transform: rotatex(90deg) rotatey(0deg) translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: rotatex(90deg) rotatey(0deg) translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: rotatex(90deg) rotatey(0deg) translateX(0px) translateY(0px) translateZ(56px);
    height: 112px;
    border-radius: 8px;
`