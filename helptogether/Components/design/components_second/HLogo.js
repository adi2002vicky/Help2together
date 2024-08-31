import styled from "styled-components"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { App } from '../Design';
import { useContext } from 'react';
export const HLogo = () => {
  const change_theme  = useContext(App);
  return (
    <Title>
       Help2gether
      <change_theme>
      {change_theme.theme=='light' ? <DarkModeIcon onClick={change_theme.function_change_theme}/> : <LightModeIcon onClick={change_theme.function_change_theme}/> }
      </change_theme>
      </Title>
  )
}

const Title = styled.h1`
 font-weight: bold;
  font-size: 40px;
  margin-left: 23px;
  font-family: 'Anton', sans-serif;
  letter-spacing: 3px;
  cursor: pointer;`

const change_theme = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 5px;
width: 45px;
border-radius: 12px;
cursor: pointer;
`