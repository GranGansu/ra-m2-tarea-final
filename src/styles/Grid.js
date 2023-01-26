import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || '50% 50%'};
  max-width: ${({ maxWidth }) => maxWidth || '100%'};
  align-items: ${({ align }) => align || 'inherit'};
  justify-items: ${({ justify }) => justify || 'center'};
  padding: ${({ padding }) => padding || '10px'};
  gap: ${({ gap }) => gap || '10px'}; ;
`

export default Grid
