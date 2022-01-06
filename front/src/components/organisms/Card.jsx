import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';

export const Card = ({ width, height, title, children, button_type, button_content }) => (
  <Container width={width} height={height}>
    <Header>
      <H2>{title}</H2>
      <HR></HR>
    </Header>
    <Body>{children}</Body>
    <Footer>
      <HR></HR>
      {button_type != 'none' ? <Button type={button_type} content={button_content} /> : ''}
    </Footer>
  </Container>
);

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  box-sizing: border-box;
`;

const Header = styled('div')``;

const Body = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
`;

const Footer = styled('div')``;

const H2 = styled('h2')`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.375rem;
  text-align: center;
  letter-spacing: 0.12em;
  margin: 0;
`;

const HR = styled('hr')`
  height: 0.125rem;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  margin: 1.5rem 0;
`;
