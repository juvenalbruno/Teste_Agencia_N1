import React from 'react';
import styled from 'styled-components';

import { CgMenuGridO } from 'react-icons/cg';

import MiddleBanner from '../../components/Middle';
import Sidebar from '../../components/Sidebar';
import Slider from '../../components/Slider';
import Destaque from '../../components/Destaque';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import Zelda from '../../assets/img/zelda_banner.jpg';
import Sekiro from '../../assets/img/sekiro_banner.jpg';
import Outriders from '../../assets/img/product_outriders.png';
import Cyberpunk2077 from '../../assets/img/product_cyberpunk2077.png';
import DonkeyKong from '../../assets/img/product_donkey_kong_country_tropical_freeze.png';

import MK from '../../assets/img/principal_banner_desktop.jpg'
import RD from '../../assets/img/principal_banner_desktop_02.jpg'


export default function Home(){
    return(
        <>
            {/* <Modal /> */}
            <Sidebar />
            <Slider 
                Img1={MK} Alt1="MK" Text="MORTAL KOMBAT" Real1="299" Cents1="99" InfoText1="Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta."
                Img2={RD} Alt2="RD" Text2="RED DEAD REDEMPTION II" Real2="399" Cents2="99" InfoText2="Red Dead Redemption 2 é um jogo eletrônico de ação-aventura desenvolvido e publicado pela Rockstar Games. É o terceiro título da série Red Dead e uma prequela de Red Dead Redemption."
            />

            <Banners>

                <MiddleBanner Image={Zelda} Alt={Zelda} Title="The Legend of Zelda - Breath of the wild"/>
                <MiddleBanner Image={Sekiro} Alt={Sekiro} Title="SEKIRO - Shadows die twice" />

            </Banners>

            <DestaqueSessao>

                <CgMenuGridO />
                <h1>Produtos em destaque</h1>

            </DestaqueSessao>

            <ContentDestaque>

                <Destaque Image={Outriders} Alt="Outriders" Title="Outriders" Value="200,00" />
                <Destaque Image={Cyberpunk2077} Alt="Cyberpunk2077" Title="CYBERPUNK 2077" Value="200,00" />
                <Destaque Image={DonkeyKong} Alt="DonkeyKong" Title="Donkey Kong Contry Tropical Freeze" Value="200,00" />

            </ContentDestaque>   

            <Footer />         
        </>
    );
}

const Banners = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    padding: 0 75px;
    top: -7rem;
`;

const DestaqueSessao = styled.div `
    display: flex;
    align-items: center;
    margin-left: 13%;
    margin-bottom: 55px;

    svg {
        font-size: 35px;
        color: #3EC6E0;
        margin-right: 15px;
    }

    h1 {
        color: #084154;
        font-weight: 300;
        font-size: 36px;
    }
`;

const ContentDestaque = styled.div`
    display: flex;
    justify-content: center;
`;