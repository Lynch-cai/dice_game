import React from 'react'
import styled from "styled-components"

import { Pillar } from "../molecules/Pillar"
import { randomIntFromInterval } from "../../utils/randomIntFromInterval"

const arr = [
    { right: "0", bottom: "0", pos: [0, 0], diceValue: randomIntFromInterval(1, 6)},
    { right: "65px", bottom: "-32px", pos: [0, 1], diceValue: randomIntFromInterval(1, 6)},
    { right: "130px", bottom: "-64px", pos: [0, 2] , diceValue: randomIntFromInterval(1, 6)},
    { right: "195px", bottom: "-96px", pos: [0, 3] , diceValue: randomIntFromInterval(1, 6)},
    { right: "260px", bottom: "-128px", pos: [0, 4] , diceValue: randomIntFromInterval(1, 6)},

    { right: "-65px", bottom: "-32px", pos: [1, 0] , diceValue: randomIntFromInterval(1, 6)},
    { right: "0px", bottom: "-64px", pos: [1, 1] , diceValue: randomIntFromInterval(1, 6)},
    { right: "65px", bottom: "-96px", pos: [1, 2] , diceValue: randomIntFromInterval(1, 6)},
    { right: "130px", bottom: "-128px", pos: [1, 3] , diceValue: randomIntFromInterval(1, 6)},
    { right: "195px", bottom: "-160px", pos: [1, 4] , diceValue: randomIntFromInterval(1, 6)},

    { right: "-130px", bottom: "-64px", pos: [2, 0] , diceValue: randomIntFromInterval(1, 6)},
    { right: "-65px", bottom: "-96px", pos: [2, 1] , diceValue: randomIntFromInterval(1, 6)},
    { right: "0px", bottom: "-128px", pos: [2, 2] , diceValue: randomIntFromInterval(1, 6)},
    { right: "65px", bottom: "-160px", pos: [2, 3] , diceValue: randomIntFromInterval(1, 6)},
    { right: "130px", bottom: "-192px", pos: [2, 4] , diceValue: randomIntFromInterval(1, 6)},

    { right: "-195px", bottom: "-96px", pos: [3, 0] , diceValue: randomIntFromInterval(1, 6)},
    { right: "-130px", bottom: "-128px", pos: [3, 1] , diceValue: randomIntFromInterval(1, 6)},
    { right: "-65px", bottom: "-160px", pos: [3, 2] , diceValue: randomIntFromInterval(1, 6)},
    { right: "0px", bottom: "-192px", pos: [3, 3] , diceValue: randomIntFromInterval(1, 6)},
    { right: "65px", bottom: "-224px", pos: [3, 4] , diceValue: randomIntFromInterval(1, 6)},

    { right: "-256px", bottom: "-128px", pos: [4, 0] , diceValue: randomIntFromInterval(1, 6)},
    { right: "-192px", bottom: "-160px", pos: [4, 1] , diceValue: randomIntFromInterval(1, 6)},
    { right: "-128px", bottom: "-192px", pos: [4, 2] , diceValue: randomIntFromInterval(1, 6)},
    { right: "-65px", bottom: "-224px", pos: [4, 3] , diceValue: randomIntFromInterval(1, 6)},
    { right: "0px", bottom: "-256px", pos: [4, 4] , diceValue: randomIntFromInterval(1, 6)},
]

export const GameTable = () => (
    <Container>
        {arr.map((element, index) => (
            <PillarContainer key={index} style={element}>
                <Pillar diceValue={element.diceValue} />
            </PillarContainer>
        ))}
    </Container> 
)

const Container = styled("div")`
    background: blue;
    position: relative;
`

const PillarContainer = styled("div")`
    position: absolute;
`