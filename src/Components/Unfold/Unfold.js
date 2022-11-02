import { ReactComponent as Arrow } from '../../Images/downward-arrow.svg';
import React from 'react';
import Data from '../Data/Data';
import styled from "styled-components";


const HeaderButton = styled.button`
    width: 28px;
    height: 14px;
    padding: 0;
    border: 0;
    margin: 0;
    background: none;
    align-self: center;
    transition: 0.5s;
    ${props => {
        if (props.open) {
        return `
            transform-origin: center;
            transform: rotate(-180deg);
            margin-top: 10px;
        `;
        } else {
        return ``;
        }
    }}
`;

    const UnfoldWrapper = styled.div`
        margin: 0;
        padding: 40px;
        background: #283592;
        border-radius: 20px;
        &:hover ${HeaderButton} {
            margin-top: 10px;
        }
    `;

    const Header = styled.div`
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
    `;

    const HeaderTitle = styled.h3`
        padding: 0;
        margin: 0;
        font-weight: 800;
        font-size: 20px;
        line-height: 1.5;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(0deg, rgba(255, 252, 170, 0.2), rgba(255, 252, 170, 0.2)), radial-gradient(110.58% 110.58% at 40.19% 148.08%, rgba(40, 53, 146, 0.5) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(141.03% 3248.2% at 71.91% -110.26%, #FF98C6 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(93.91% 3215.11% at 1.53% 100%, #DBCCE5 0%, #FFFFFF 100%) 
    `;

    const UnfoldContent = styled.div`
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        transition: all 0.5s cubic-bezier(0, 1, 0, 1);
        ${props => {
            if (props.open) {
            return `
                opacity: 1;
                max-height: 1000px;
                margin-top: 32px;
                transition: max-height 1s ease-in-out;
            `;
            } else {
            return ``;
            }
        }}
    `;

    const UnfoldText = styled.p`
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.25;
        color: #fff;
    `;

    const UnfoldButton = styled.button`
        width: 170px;
        height: 50px;
        color: #fff;
        background-color: #EC1E7B;
        padding: 15px 28px;
        border: none;
        margin: 0;
        margin-top: 52px;
        border-radius: 12px;
        font-weight: 700;
        font-size: 16px;
        line-height: 1.25;
        cursor: pointer;
    `;


function Unfold()  {

    const [open, setOpen] = React.useState(false);

    const toggleComponent = (event) => {
        event.preventDefault();
        setOpen(!open);
    }

    

    return (
        <UnfoldWrapper onClick={toggleComponent}>
            <Header>
                <HeaderTitle>For healthcare system</HeaderTitle>
                <HeaderButton open={open}><Arrow/></HeaderButton>
            </Header>
            <UnfoldContent open={open}>
                <div>
                    <UnfoldText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</UnfoldText>
                    <UnfoldButton>Request a call</UnfoldButton>
                </div>
                <div>
                    <Data/>
                </div>
            </UnfoldContent>
        </UnfoldWrapper>
    );
}

export default Unfold;