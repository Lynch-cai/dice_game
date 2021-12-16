import React from 'react'
import styled from "styled-components"

import { Pillar } from "../molecules/Pillar"

export const GameTable = () => (
    <Container>
        {arr.map((style) => (
            <PillarContainer style={style}>
                <Pillar />
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