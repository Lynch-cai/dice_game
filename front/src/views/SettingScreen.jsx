import React from 'react';
import styled from 'styled-components';

import { Button } from '../components/atoms/Button';
import { CardPlayer } from '../components/organisms/CardPlayer';
import { CardSetting } from '../components/organisms/CardSetting';

export const SettingScreen = () => {
  return (
    <Container>
      <CardsContainer>
        <CardPlayer />
        <CardSetting />
      </CardsContainer>
      <Button content="Start" />
    </Container>
  );
};

const Container = styled('div')``;
const CardsContainer = styled('div')`
  display: flex;
`;
