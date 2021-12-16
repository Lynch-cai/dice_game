import React from 'react'
import styled from "styled-components"

import { Pillar } from "../molecules/Pillar"

const arr = [
    { right: "0", bottom: "0", pos: [0, 0]},
    { right: "65px", bottom: "-32px", pos: [0, 1]},
    { right: "130px", bottom: "-64px", pos: [0, 2] },
    { right: "195px", bottom: "-96px", pos: [0, 3] },
    { right: "260px", bottom: "-128px", pos: [0, 4] },

    { right: "-65px", bottom: "-32px", pos: [1, 0] },
    { right: "0px", bottom: "-64px", pos: [1, 1] },
    { right: "65px", bottom: "-96px", pos: [1, 2] },
    { right: "130px", bottom: "-128px", pos: [1, 3] },
    { right: "195px", bottom: "-160px", pos: [1, 4] },

    { right: "-130px", bottom: "-64px", pos: [2, 0] },
    { right: "-65px", bottom: "-96px", pos: [2, 1] },
    { right: "0px", bottom: "-128px", pos: [2, 2] },
    { right: "65px", bottom: "-160px", pos: [2, 3] },
    { right: "130px", bottom: "-192px", pos: [2, 4] },

    { right: "-195px", bottom: "-96px", pos: [3, 0] },
    { right: "-130px", bottom: "-128px", pos: [3, 1] },
    { right: "-65px", bottom: "-160px", pos: [3, 2] },
    { right: "0px", bottom: "-192px", pos: [3, 3] },
    { right: "65px", bottom: "-224px", pos: [3, 4] },

    { right: "-256px", bottom: "-128px", pos: [4, 0] },
    { right: "-192px", bottom: "-160px", pos: [4, 1] },
    { right: "-128px", bottom: "-192px", pos: [4, 2] },
    { right: "-65px", bottom: "-224px", pos: [4, 3] },
    { right: "0px", bottom: "-256px", pos: [4, 4] },
]

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