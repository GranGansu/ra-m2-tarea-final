import styled from 'styled-components'
import PropTypes from 'prop-types'

const Span = styled.span`
  font-size: x-large; // Utiliza un tamaño de fuente que venga de styles
`
export default function Icon({ children }) {
  return <Span className="material-symbols-outlined">{children}</Span>
}

Icon.propTypes = {
  children: PropTypes.string,
}
