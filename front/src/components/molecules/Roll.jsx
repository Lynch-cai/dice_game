import React from 'react'
import styled from 'styled-components'
import { Label } from '../atoms/Label'
import { Button } from '../atoms/Button'

export const Roll = ({label_content}) => (
  <Container>
    <Label label_content={label_content}/>
    <RollContainer>
      <Button content="5x5" size="small" type="secondary" />
      <Button content="4x4" size="small" type="secondary" />
      <Button content="3x3" size="small" type="secondary" />
    </RollContainer>
  </Container>
)

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  margin: 0.75rem 0;
`;

const RollContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-top: 1.125rem;
`;
