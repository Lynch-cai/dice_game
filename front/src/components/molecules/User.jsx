import React from 'react'
import styled from 'styled-components'
import { Diamond } from '../atoms/Diamond'

export const User = ({diamond_content, first_content, second_content}) => (
    <Container>
        <Diamond content={diamond_content}/>
        <Container_text>
            <First_content>{first_content}</First_content>
            <Second_content>{second_content}</Second_content>
        </Container_text>
    </Container>
)

const Container = styled('div')`
    display: flex;
    z-index: 1;
    box-sizing: content-box;
`

const Container_text = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    color: #F1F1F1;
    text-transform: uppercase;
    margin-left: 1.5rem;
`

const First_content = styled('span')`
    font-size: 1.125rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
    letter-spacing: 0.125rem;
`

const Second_content = styled('span')`
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.125rem;
`