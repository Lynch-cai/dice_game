import React from 'react'
import styled from "styled-components"

const slice = [1, 2, 3, 4, 5, 6];

export const Dice = ({ diceValue }) => (
    <Container>
        {slice.map((_, index) => (
            <Cube key={index} index={index}>
                <Top index={index} value={diceValue} />
            </Cube>
        ))}
    </Container>
);

const Container = styled("div")`
    position: relative;
`
const Cube = styled("div")`
    width: 80px;
    height: 80px;
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
    width: 80px;
    height: 4px; //4px
    float: left;
    overflow: hidden;
    background: ${({ index, value }) => index === slice.length - 1 ? diceGradiants[value].up : diceGradiants[value].down }; 
`
const Top = styled(Face)`
    transform: rotatex(90deg) rotatey(0deg) translateX(0px) translateY(0px) translateZ(56px);
    -moz-transform: rotatex(90deg) rotatey(0deg) translateX(0px) translateY(0px) translateZ(56px);
    -webkit-transform: rotatex(90deg) rotatey(0deg) translateX(0px) translateY(0px) translateZ(56px);
    height: 80px;
    border-radius: 8px;
`

const diceGradiants = {
    0: {
        up: "linear-gradient(to bottom left, rgba(255, 255, 255, 1),rgba(249, 249, 249, 1),rgba(223, 223, 223, 1))",
        down: "linear-gradient(rgba(175, 175, 175, 1),rgba(243, 243, 243, 1))",
    },
    1: {
        up: "linear-gradient(to bottom left, rgba(230, 159, 133, 1),rgba(212, 126, 139, 1))",
        down: "linear-gradient(rgba(138, 82, 94, 1),rgba(220, 129, 106, 1))",
    },
    2: {
        up: "linear-gradient(to bottom left, rgba(141, 216, 209, 1),rgba(142, 164, 206, 1))",
        down: "linear-gradient(rgba(94, 99, 124, 1),rgba(123, 167, 203, 1))",
    },
    3: {
        up: "linear-gradient(to bottom left, rgba(152, 216, 141, 1),rgba(118, 186, 95, 1))",
        down: "linear-gradient(rgba(95, 125, 103, 1),rgba(125, 206, 123, 1))",
    },
    4: {
        up: "linear-gradient(to bottom left, rgba(201, 216, 141, 1),rgba(206, 192, 142, 1))",
        down: "linear-gradient(rgba(123, 124, 94, 1),rgba(203, 181, 123, 1))",
    },
    5: {
        up: "linear-gradient(to bottom left, rgba(183, 141, 216, 1),rgba(147, 142, 206, 1))",
        down: "linear-gradient(rgba(116, 94, 124, 1),rgba(144, 123, 203, 1))",
    },
    6: {
        up: "linear-gradient(to bottom left, rgba(228, 129, 218, 1),rgba(227, 121, 185, 1))",
        down: "linear-gradient(rgba(123, 94, 124, 1),rgba(203, 123, 185, 1))",
    },
}