import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { List } from '../atoms'

const HeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
`

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between" items="center">
      <div>MIPISO.com</div>
      <div>
        <List>
          <li>Buscador</li>
          <li>Datos</li>
          <li>Mi Perfil</li>
        </List>
      </div>
    </HeaderStyled>
  )
}

export default Header
