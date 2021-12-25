import React from 'react';
import styled from 'styled-components';

// type: secondary
export const Button = ({ content, type }) => (
  <Container type={type}>
    <Content>{content}</Content>
  </Container>
);

const Container = styled('div')`
  padding: 1rem 4rem;
  box-sizing: content-box;
  background: ${(props) => (props.type == 'secondary' ? '#F1F1F1' : 'none')};
  border: ${(props) =>
    props.type == 'secondary'
      ? 'transparent solid 0.125rem'
      : 'rgba(255, 255, 255, 0.95) 0.125rem solid'};
  color: ${(props) => (props.type == 'secondary' ? '#2E0F4C' : 'rgba(255, 255, 255, 0.95)')};
  transition: background-color 0.15s ease;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.type == 'secondary' ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.1)'};
  }
  &:active {
    background-color: ${(props) =>
      props.type == 'secondary' ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.2)'};
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
