import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectStyled = styled.select`
  border: 1px solid gray;
  min-width: 100px;
  border-radius: 5px;
  margin-right: 5px;
  box-shadow: 0 0 5px #0000003d;
`
function Select({ children }) {
  return <SelectStyled>{children}</SelectStyled>
}
export default Select

Select.propTypes = {
  children: PropTypes.array,
}
