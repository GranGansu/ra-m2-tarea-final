import styled from 'styled-components'
import PropTypes from 'prop-types'

const SelectStyled = styled.select`
  border: 1px solid gray;
  min-width: 100px;
  border-radius: 5px;
  margin-right: 5px;
  padding: 10px;
  box-shadow: 0 0 5px #0000003d;
`
function Select({ children, placeholder, id }) {
  return (
    <SelectStyled id={id}>
      <option value="" disabled selected>
        {placeholder}
      </option>
      {children}
    </SelectStyled>
  )
}
export default Select

Select.propTypes = {
  children: PropTypes.array,
  placeholder: PropTypes.string,
  id: PropTypes.string,
}
