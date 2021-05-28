import React, { useState } from 'react';
import styled from 'styled-components';
import BtnMario from '../../assets/img/btnMario.png'

export default function Destaque(props){
   
    const [hability, setHability] = useState('');
    const [hability2, setHability2] = useState('');


    function btnHability(e){
        setHability('none');
        setHability2('flex');
    }

    return(
        <ContentGamer>
            
            <img src={props.Image} alt={props.Alt} />

            <InfoGamer>
                <Info>
                    <h2>{props.Title}</h2>
                    <h1>R$ {props.Value}</h1>
                </Info>

                <button 
                    id="btnBuy" 
                    onClick={(e) => {
                        btnHability()
                    }}
                    style={{display: hability}} 
                >
                    COMPRAR
                </button>
                
                <button 
                    id="btnComprado" 
                    style={{display: hability2}} 
                >
                    COMPRADO!
                    <img id="btnMario" src={BtnMario} alt="Mario"/>
                </button>

            </InfoGamer>
        </ContentGamer>
    );
}

const ContentGamer = styled.div`
    width: 260px;
    display: flex;
    flex-direction: column;

    margin: 10px;
    border-radius: 8px;

    box-shadow: .1rem .1rem 1rem #00000034;

    img {
        width: 100%;
        height: 295px;
        padding: 20px 0;
        border-bottom: 2px solid #3EC6E0;
    }
`;
const InfoGamer = styled.div`
    display: flex;
    flex-direction: column;
    
    padding-bottom: 15px;
    border-radius: 0 0 8px 8px;

    background-color: #F5F5F5;

    #btnBuy{
        height: 52px;
        width: 85%;
        margin: auto;
        background-color: #3EC6E0;
        border: none;
        border-radius: 5px;

        font-size: 18px;
        font-weight: 700;
        color: white;
        cursor: pointer;
    };
    #btnComprado {
        display: none;
        align-items: center;
        justify-content: space-around;
        height: 52px;
        width: 85%;
        margin: auto;
        background-color: #084154;
        border: none;
        border-radius: 5px;

        font-size: 18px;
        font-weight: 700;
        color: white;
        cursor: pointer;
    };
    #btnComprado img {
            height: 79px;
            width: 68px;
            border: 0;
            padding-bottom: 49px;
    }

`;
const Info = styled.div`
    margin: 0 30px;

    h2 {
        font-weight: 500;
        font-size: 14px;
        color: #084154;
        margin-top: 15px;
        height: 45px;
    }

    h1 {
        font-weight: 700;
        font-size: 18px;
        color: #084154;
        margin-bottom: 15px;
    }
`;