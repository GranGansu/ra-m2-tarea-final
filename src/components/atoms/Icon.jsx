import styled from 'styled-components'
import PropTypes from 'prop-types'

const Span = styled.span`
  font-size: x-large;
`
export default function Icon({ children }) {
  return <Span className="material-symbols-outlined">{children}</Span>
}

Icon.propTypes = {
  children: PropTypes.string,
}
