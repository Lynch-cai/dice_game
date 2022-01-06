import React from 'react';
import styled from 'styled-components';

import { Pillar } from '../molecules/Pillar';
import { randomIntFromInterval } from '../../utils/randomIntFromInterval';

const gameTableSize = 5;
let arr = [];

for (let i = 0; i < gameTableSize; i++) {
  let right = 65 * -i;
  let bottom = -36 * i;
  for (let j = 0; j < gameTableSize; j++) {
    arr.push({
      right: right + 'px',
      bottom: bottom + 'px',
      pos: [i, j],
      diceValue: randomIntFromInterval(1, 6),
    });
    right += 65;
    bottom -= 36;
  }
}

export const GameTable = () => (
  <Container>
    {arr.map((element, index) => (
      <PillarContainer key={index} style={element}>
        <Pillar diceValue={element.diceValue} />
      </PillarContainer>
    ))}
  </Container>
);

const Container = styled('div')`
  background: blue;
  position: relative;
`;

const PillarContainer = styled('div')`
  position: absolute;
`;
