import React from 'react'
import styled from 'styled-components'

export const Diamond = ({content}) => (
    <Container>
        <Content>
            {content}
        </Content>
    </Container>
)

const Container = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #F1F1F1;
    transform: rotate(45deg);
    width: 2.5rem;
    height: 2.5rem;
`
const Content = styled('span')`
    font-weight: 600;
    font-size: 1.5rem;
    font-color: #F1F1F1;
    transform: rotate(-45deg);
`