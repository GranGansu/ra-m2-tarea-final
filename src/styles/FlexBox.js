import styled from 'styled-components'

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ justify }) => justify || 'start'};
  align-items: ${({ items }) => items || 'initial'};
  gap: ${({ gap }) => gap || 'initial'};
  padding: ${({ padding }) => padding || 'initial'};
`

export default FlexBox
