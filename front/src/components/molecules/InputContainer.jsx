import React from 'react';
import styled from 'styled-components';
import { Label } from '../atoms/Label';
import { Input } from '../atoms/Input';

export const InputContainer = ({ label_content, input_default_value }) => (
  <Container>
    <Label label_content={label_content} />
    <Input input_default_value={input_default_value} />
  </Container>
);

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.75rem 0;
`;
