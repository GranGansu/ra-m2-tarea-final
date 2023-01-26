import React from 'react'
import styled from 'styled-components'
import { FlexBox, dimensions } from '../../styles'
import { Select, Icon, Button } from '../atoms'

const SubHeaderStyled = styled(FlexBox)`
  padding-left: ${dimensions.margin};
  padding-right: ${dimensions.margin};
  padding-top: 10px;
  padding-bottom: 10px;
  border-top: 2px solid #ededed;
  border-bottom: 2px solid #ededed;
  background-color: whitesmoke;
`

function SubHeader({ ...props }) {
  return (
    <SubHeaderStyled {...props}>
      <FlexBox direction="row" gap="10px">
        <Select>
          <option>Piso</option>
          <option>Chalet</option>
          <option>Garaje</option>
        </Select>
        <Select>
          <option>Madrid</option>
          <option>Zaragoza</option>
          <option>Barcelona</option>
        </Select>
        <Button color="blue" width="fit-content">
          <Icon>search</Icon>
        </Button>
      </FlexBox>
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
