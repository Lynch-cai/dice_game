import React from 'react';
import styled from 'styled-components';

const slice = [1, 2, 3, 4, 5, 6];

export const Dice = ({ diceValue }) => (
  <Container>
    {slice.map((_, index) => (
      <Cube key={index} index={index}>
        <Top index={index} value={diceValue}>
          {diceValue == 1 ? <DiceDots1 /> : ''}
          {diceValue == 2 ? <DiceDots2 /> : ''}
          {diceValue == 3 ? <DiceDots3 /> : ''}
          {diceValue == 4 ? <DiceDots4 /> : ''}
          {diceValue == 5 ? <DiceDots5 /> : ''}
          {diceValue == 6 ? <DiceDots6 /> : ''}
        </Top>
      </Cube>
    ))}
  </Container>
);

const DiceDots1 = ({ diceValue }) => (
  <DiceDots>
    <DiceDot left="" right="" top="" bottom="" />
  </DiceDots>
);

const DiceDots2 = ({ diceValue }) => (
  <DiceDots>
    <DiceDot left="16" right="" top="16" bottom="" />
    <DiceDot left="" right="16" top="" bottom="16" />
  </DiceDots>
);

const DiceDots3 = ({ diceValue }) => (
  <DiceDots>
    <DiceDot left="12" right="" top="12" bottom="" />
    <DiceDot left="" right="" top="" bottom="" />
    <DiceDot left="" right="12" top="" bottom="12" />
  </DiceDots>
);
const DiceDots4 = ({ diceValue }) => (
  <DiceDots>
    <DiceDot left="16" right="" top="16" bottom="" />
    <DiceDot left="16" right="" top="" bottom="16" />
    <DiceDot left="" right="16" top="" bottom="16" />
    <DiceDot left="" right="16" top="16" bottom="" />
  </DiceDots>
);
const DiceDots5 = ({ diceValue }) => (
  <DiceDots>
    <DiceDot left="12" right="" top="12" bottom="" />
    <DiceDot left="12" right="" top="" bottom="12" />
    <DiceDot left="" right="12" top="" bottom="12" />
    <DiceDot left="" right="12" top="12" bottom="" />
    <DiceDot left="" right="" top="" bottom="" />
  </DiceDots>
);
const DiceDots6 = ({ diceValue }) => (
  <DiceDots>
    <DiceDot left="16" right="" top="12" bottom="" />
    <DiceDot left="16" right="" top="32" bottom="" />
    <DiceDot left="16" right="" top="" bottom="12" />
    <DiceDot left="" right="16" top="12" bottom="" />
    <DiceDot left="" right="16" top="32" bottom="" />
    <DiceDot left="" right="16" top="" bottom="12" />
  </DiceDots>
);

const DiceDots = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const DiceDot = styled('div')`
  background: white;
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 100%;
  position: absolute;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
  top: ${(props) => props.top}px;
  bottom: ${(props) => props.bottom}px;
`;

const Container = styled('div')`
  position: relative;
`;
const Cube = styled('div')`
  width: 80px;
  height: 80px;
  top: ${({ index }) => `${50 + -index}px`};
  transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transform: rotateX(325deg) rotateY(315deg) rotateZ(0deg);
  -moz-transform: rotateX(325deg) rotateY(315deg) rotateZ(0deg);
  -webkit-transform: rotateX(325deg) rotateY(315deg) rotateZ(0deg);
  margin: auto;
  position: relative;
  -moz-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  position: absolute;
`;
const Face = styled('div')`
  position: absolute;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  width: 80px;
  height: 4px; //4px
  float: left;
  overflow: hidden;
  background: ${({ index, value }) =>
    index === slice.length - 1 ? diceGradiants[value].up : diceGradiants[value].down};
`;
const Top = styled(Face)`
  transform: rotatex(90deg) rotatey(0deg) translateX(0px) translateY(0px) translateZ(56px);
  -moz-transform: rotatex(90deg) rotatey(0deg) translateX(0px) translateY(0px) translateZ(56px);
  -webkit-transform: rotatex(90deg) rotatey(0deg) translateX(0px) translateY(0px) translateZ(56px);
  height: 80px;
  border-radius: 8px;
`;

const diceGradiants = {
  0: {
    up: 'linear-gradient(to bottom left, rgba(255, 255, 255, 1),rgba(249, 249, 249, 1),rgba(223, 223, 223, 1))',
    down: 'linear-gradient(rgba(175, 175, 175, 1),rgba(243, 243, 243, 1))',
  },
  1: {
    up: 'linear-gradient(to bottom left, rgba(230, 159, 133, 1),rgba(212, 126, 139, 1))',
    down: 'linear-gradient(rgba(138, 82, 94, 1),rgba(220, 129, 106, 1))',
  },
  2: {
    up: 'linear-gradient(to bottom left, rgba(141, 216, 209, 1),rgba(142, 164, 206, 1))',
    down: 'linear-gradient(rgba(94, 99, 124, 1),rgba(123, 167, 203, 1))',
  },
  3: {
    up: 'linear-gradient(to bottom left, rgba(152, 216, 141, 1),rgba(118, 186, 95, 1))',
    down: 'linear-gradient(rgba(95, 125, 103, 1),rgba(125, 206, 123, 1))',
  },
  4: {
    up: 'linear-gradient(to bottom left, rgba(201, 216, 141, 1),rgba(206, 192, 142, 1))',
    down: 'linear-gradient(rgba(123, 124, 94, 1),rgba(203, 181, 123, 1))',
  },
  5: {
    up: 'linear-gradient(to bottom left, rgba(183, 141, 216, 1),rgba(147, 142, 206, 1))',
    down: 'linear-gradient(rgba(116, 94, 124, 1),rgba(144, 123, 203, 1))',
  },
  6: {
    up: 'linear-gradient(to bottom left, rgba(228, 129, 218, 1),rgba(227, 121, 185, 1))',
    down: 'linear-gradient(rgba(123, 94, 124, 1),rgba(203, 123, 185, 1))',
  },
};
