import styled from 'styled-components'

const Text = styled.p`
  font-weight: ${({ weight }) => weight || 'inherit'};
  font-size: ${({ size }) => size || 'medium'};
  padding: 0;
  margin: 0;
`

export default Text
