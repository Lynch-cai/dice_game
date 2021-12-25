import React from 'react'
import styled from 'styled-components'

// type: secondary
export const Input = ({default_value, type}) => {
  return (
    <InputText maxLength={type == 'secondary' ? "18" : '6'} type={type} defaultValue={default_value}/>
  )
}

const InputText = styled('input')`
  padding: ${(props) => (props.type == 'secondary' ? '0' : '0.75rem 1rem')};
  border: ${(props) => (props.type == 'secondary' ? '0' : 'rgba(255, 255, 255, 0.95) 0.125rem solid')};
  font-weight: ${(props) => (props.type == 'secondary' ? '500' : '600')};
  width: ${(props) => (props.type == 'secondary' ? '14rem' : '6.875rem')};
  background: transparent;
  font-size: 1.125rem;
  line-height: 1.375rem;
  color: rgba(255, 255, 255, 0.95);
  outline: none;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  box-sizing: border-box;
`