import styled from 'styled-components'
import PropTypes from 'prop-types'
import {dimensions} from '../../styles'

const LabelStyled = styled.label`
  font-size: ${dimensions.span};
`
export default function Label({ children }) {
  return <LabelStyled>{children}</LabelStyled>
}

Label.propTypes = {
  children: PropTypes.string,
}
