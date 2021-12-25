import React from 'react';
import styled from 'styled-components';

// type: secondary
export const Button = ({ content, type, size }) => (
  <Container type={type} size={size}>
    <Content>{content}</Content>
  </Container>
);

const Container = styled('div')`
  padding: ${(props) => (props.size == 'small' ? '0.5rem 1rem' : '1rem 4rem')};
  background: ${(props) => (props.type == 'secondary' ? 'none' : '#F1F1F1')};
  border: ${(props) =>
    props.type == 'secondary'
      ? 'rgba(255, 255, 255, 0.95) 0.125rem solid'
      : 'transparent solid 0.125rem'};
  color: ${(props) => (props.type == 'secondary' ? 'rgba(255, 255, 255, 0.95)' : '#2E0F4C')};
  transition: background-color 0.15s ease;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.type == 'secondary' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.85)'};
  }
  &:active {
    background-color: ${(props) =>
      props.type == 'secondary' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.75)'};
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
