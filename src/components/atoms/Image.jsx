import styled from 'styled-components'

const Image = styled.img`
  width: 100%;
  height: ${({ height }) => height || 'auto'};
  border-radius: ${({ radius }) => radius || '0px'};
  object-fit: cover;
`
export default Image
