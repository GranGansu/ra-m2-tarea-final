import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../styles'

export default function Button({
  children,
  color = colors.main,
  onClick = () => {},
  width = '100%',
}) {
  const Btn = styled.button`
    color: white;
    border-radius: 5px;
    border: none;
    padding: 10px;
    height: 100%;
    width: ${width};
  `
  return (
    <Btn type="button" onClick={onClick} style={{ backgroundColor: color }}>
      {children}
    </Btn>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string,
}
