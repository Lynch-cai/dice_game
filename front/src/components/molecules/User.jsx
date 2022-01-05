import React from 'react';
import styled from 'styled-components';
import { Diamond } from '../atoms/Diamond';
import { Input } from '../atoms/Input';

// in_game: true
// turn: true
export const User = ({ diamond_content, first_content, second_content, in_game, turn }) => (
  <Container in_game={in_game} turn={turn}>
    <Diamond content={diamond_content} />
    <Container_text>
      <Input input_default_value={first_content} type="secondary" />
      <Second_content>{second_content}</Second_content>
    </Container_text>
  </Container>
);

const Container = styled('div')`
  display: flex;
  z-index: 1;
  box-sizing: content-box;
  padding: ${(props) => (props.in_game == 'true' ? '1.25rem 2rem' : '1.25rem 0 1.25rem 0.5rem')};
  width: ${(props) => (props.in_game == 'true' ? '19.75rem' : '')};
  background: ${(props) =>
    props.turn == 'true'
      ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)'
      : 'none'};
`;

const Container_text = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  color: #f1f1f1;
  text-transform: uppercase;
  margin-left: 1.5rem;
`;

const First_content = styled('span')`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  letter-spacing: 0.125rem;
`;

const Second_content = styled('span')`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.125rem;
`;
