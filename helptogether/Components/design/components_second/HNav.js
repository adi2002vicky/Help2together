import styled from "styled-components"
import {useRouter} from 'next/router';
import Link from 'next/link';
export const HNav = () => {
  const Router = useRouter();
  return (
    <Navmain>
    <Link passHref href={'/CreateCampaigns'}><HLinks active={Router.pathname == "/CreateCampaigns" ? true : false}>
    Create Campaigns
    </HLinks></Link>
    <Link passHref href={'/'}><HLinks active={Router.pathname == "/" ? true : false}>
    Explore Campaigns
    </HLinks></Link>
    <Link passHref href={'/YourCampaigns'}><HLinks active={Router.pathname == "/YourCampaigns" ? true: false}>
      Your Campaigns
    </HLinks></Link>
  </Navmain>
  )
}

const Navmain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 6px;
  height: 50%;
  border-radius: 10px;
  margin-left: 5px;
  margin-right: -261px;
  `

const HLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.active ? props.theme.bgSubDiv : props.theme.bgDiv };
  height: 100%;
  font-family: 'Roboto';
  margin: 5px;
  border-radius: 10px;
  padding: 0 5px 0 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: small;
`
