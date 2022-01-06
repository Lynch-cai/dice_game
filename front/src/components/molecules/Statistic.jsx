import React from 'react';
import styled from 'styled-components';
import { Label } from '../atoms/Label';

export const Statistic = ({ label_content, value }) => (
  <Container>
    <Label label_content={label_content} />
    <Value>{value}</Value>
  </Container>
);

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.75rem 0;
  position: relative;
`;

const Value = styled('div')`
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
`;
