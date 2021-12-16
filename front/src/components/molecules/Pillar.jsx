import React from 'react'
import styled from "styled-components"

import { Dice } from "../atoms/Dice"
import { Rectangle } from "../atoms/Rectangle"

export const Pillar = ({ diceValue }) => (
    <Container>
        <DiceContainer>
            <Dice diceValue={diceValue} />
        </DiceContainer>
        <Rectangle />
    </Container>
)

const Container = styled("div")`
    position: relative;
`

const DiceContainer = styled("div")`
    background: blue;
    width: 100px;
    position: absolute;
    top: -40px;
    left: 13px;
`