import styled from 'styled-components'
import PropTypes from 'prop-types'

const ListStyled = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`
export default function List({ children }) {
  return <ListStyled>{children}</ListStyled>
}

List.propTypes = {
  children: PropTypes.node,
}
