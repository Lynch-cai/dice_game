import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import { User } from '../molecules/User';

export const SectionPlayer = () => (
  <Container>
    <Header>
      <H2>Players</H2>
      <HR></HR>
    </Header>
    <Body>
      <User
        diamond_content="1"
        first_content="Player 1"
        second_content="remove"
        in_game="false"
        turn="false"
      />
      <User
        diamond_content="2"
        first_content="Player 2"
        second_content="remove"
        in_game="false"
        turn="false"
      />
      <User
        diamond_content="3"
        first_content="Player 3"
        second_content="remove"
        in_game="false"
        turn="false"
      />
      <User
        diamond_content="4"
        first_content="Player 4"
        second_content="remove"
        in_game="false"
        turn="false"
      />
    </Body>
    <Footer>
      <HR></HR>
      <Button type="secondary" content="add player" />
    </Footer>
  </Container>
);

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  height: 35.75rem;
  width: 22.5rem;
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
