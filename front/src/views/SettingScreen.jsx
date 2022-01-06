import React from 'react';
import styled from 'styled-components';

import { Button } from '../components/atoms/Button';
import { Card } from '../components/organisms/Card';
import { User } from '../components/molecules/User';
import { Roll } from '../components/molecules/Roll';
import { InputContainer } from '../components/molecules/InputContainer';

export const SettingScreen = () => {
  return (
    <Container>
      <CardsContainer>
        <Card
          width="360"
          height="572"
          title="Players"
          button_type="secondary"
          button_content="Add player">
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
        </Card>
        <Card
          width="360"
          height="572"
          title="Setting"
          button_type="secondary"
          button_content="Apply">
          <InputContainer label_content="score to win" input_default_value="2000" />
          <InputContainer label_content="bonus x" input_default_value="100" />
          <InputContainer label_content="bonux ace x" input_default_value="1000" />
          <Roll label_content="total roll" />
        </Card>
      </CardsContainer>
      <Button content="Start" />
    </Container>
  );
};

const Container = styled('div')``;
const CardsContainer = styled('div')`
  display: flex;
`;
