import React from 'react';
import styled from 'styled-components';

// type: secondary
export const Label = ({ label_content }) => {
  return <Container>{label_content}</Container>;
};

const Container = styled('div')`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
`;
