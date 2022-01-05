import React from 'react';
import styled from 'styled-components';

export const Button = ({ content, type }) => (
  <ButtonContainer type={type}>
    <Content>{content}</Content>
  </ButtonContainer>
);

export const RadioButton = ({ content, isActive }) => (
  <RadioButtonContainer isActive={isActive}>
    <Content>{content}</Content>
  </RadioButtonContainer>
);

const ButtonTemplate = styled('div')`
  cursor: pointer;
  transition: background-color 0.15s ease;
`;

const ButtonContainer = styled(ButtonTemplate)`
  padding: 16px 61px;
  background: ${({ type }) => (type == 'secondary' ? 'none' : '#F1F1F1')};
  color: ${({ type }) => (type == 'secondary' ? 'rgba(255, 255, 255, 0.95)' : '#2E0F4C')};
  border: ${({ type }) =>
    type == 'secondary'
      ? 'rgba(255, 255, 255, 0.95) 0.125rem solid'
      : 'transparent solid 0.125rem'};
  &:hover {
    background-color: ${({ type }) =>
      type == 'secondary' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.85)'};
  }
`;

const RadioButtonContainer = styled(ButtonTemplate)`
  background: ${({ isActive }) => (isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent')};
  border: rgba(255, 255, 255, 0.95) 0.125rem solid;
  color: rgba(255, 255, 255, 0.95);
  padding: 11px 15px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const Content = styled('div')`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.375rem;
  text-align: center;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  &::selection {
    background: none;
  }
`;
