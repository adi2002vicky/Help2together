import styled from 'styled-components';
import Wallet from './Wallet';
export const HSide = () => {
  return (
    <SideMain>
    <Wallet/>
    </SideMain>
  )
}

const SideMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  height: 50%;
`