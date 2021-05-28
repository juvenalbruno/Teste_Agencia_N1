import React from 'react';
import styled from 'styled-components';

import LogoFooter from '../../assets/img/logo_footer.png';

export default function Footer(){
    return(
        <FooterContent>
            <FooterLogo>
                <img src={LogoFooter} alt="logo" />
            </FooterLogo>
            <FooterInfo>
                <p>Agência N1 - Todos os direitos reservados</p>
            </FooterInfo>
        </FooterContent>
    );
}

const FooterContent = styled.div`
    width: 100%;
    height: 50px;

    display: flex;

    margin-top: 110px;
`;
const FooterLogo = styled.div`
    width: 28%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    background-color: #084154;

    img {
        padding-right: 25px;
    }
`;
const FooterInfo = styled.div`
    width: 72%;
    height: 100%;

    display: flex;
    align-items: center;
    
    color: white;
    background-color: #3EC6E0;

    p {
        padding-left: 25px;
        font-size: 14px;
    }
`;