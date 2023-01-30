import styled from 'styled-components'
import PropTypes from 'prop-types'
import {dimensions} from '../../styles'

const Span = styled.span`
  font-size: 1em;
`
export default function Icon({ children }) {
  return <Span className="material-symbols-outlined">{children}</Span>
}

Icon.propTypes = {
  children: PropTypes.string,
}
