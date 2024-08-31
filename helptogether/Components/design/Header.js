import React from 'react'
import styled from 'styled-components';
import { HLogo } from './components_second/HLogo';
import { HNav } from './components_second/HNav';
import { HSide } from './components_second/HSide';


export const Header = () => {
  return (
    <MainHeader>
    <HNav />
    <HLogo/>
    <HSide/>
    </MainHeader>
  )
}

const MainHeader = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  // in flex bydefult in row
  justify-content: space-between;
  align-items: center;
`

export default Header