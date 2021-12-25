import React from 'react';
import styled from 'styled-components';
import { Button } from '../atoms/Button';
import { User } from '../molecules/User';
import { Input } from '../atoms/Input';

export const SectionSetting = () => (
  <Container>
    <Header>
      <H2>Setting</H2>
      <HR></HR>
    </Header>
    <Body>
      <InputContainer>
        <Label>score to win</Label>
        <Input default_value="2000"></Input>
      </InputContainer>
      <InputContainer>
        <Label>bonus x</Label>
        <Input default_value="100"></Input>
      </InputContainer>
      <InputContainer>
        <Label>bonux ace x</Label>
        <Input default_value="1000"></Input>
      </InputContainer>
      <RollContainer>
        <Label>total roll</Label>
        <RollBody>
          <Button content="5x5" size="small" type="secondary" />
          <Button content="4x4" size="small" type="secondary" />
          <Button content="3x3" size="small" type="secondary" />
        </RollBody>
      </RollContainer>
    </Body>
    <Footer>
      <HR></HR>
      <Button type="secondary" content="Apply" />
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

const InputContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.75rem 0;
`;

const Label = styled('label')`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.375rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const RollContainer = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  margin: 0.75rem 0;
`;

const RollBody = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 1.125rem;
`;
