import styled from 'styled-components'
import Text from './Text'
import { colors, dimensions } from '../../styles'

const Title = styled(Text)`
  color: ${({ color }) => color || colors.font.base};
  font-size: ${({ size }) => size || dimensions.font.base};
`

export default Title
