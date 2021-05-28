/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import styled from 'styled-components';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Slider(props){

    const [hability, setHability] = useState('flex');
    const [hability2, setHability2] = useState('none');
    const [number, setNumber] = useState(1);

    function GoLeft(e){
        setHability('flex')
        setHability2('none')
        setNumber(1)
    }
    function GoRigth(e){
        setHability('none'), 
        setHability2('flex'),
        setNumber(2)
    }


    return(
        <ComponentImg>
                <div id="desktop" >
                    <img src={props.Img1} alt={props.Alt1} style={{display: hability}}/>
                    <img src={props.Img2} alt={props.Alt2} style={{display: hability2}} />      
                </div>
                <div id="mobile">
                    <img className="mobile" src={props.Img12} alt={props.Alt1} style={{display: hability}}/>
                    <img className="mobile" src={props.Img22} alt={props.Alt2} style={{display: hability2}} />      
                </div>

                <Announcement style={{display: hability}}>
                    <h1>{props.Text}</h1>
                    <h2>R$ {props.Real1}<span>,{props.Cents1}</span></h2>
                    <p>{props.InfoText1}</p>
                </Announcement>
                <Announcement style={{display: hability2}}>
                    <h1>{props.Text2}</h1>
                    <h2>R$ {props.Real2}<span>,{props.Cents2}</span></h2>
                    <p>{props.InfoText2}</p>
                </Announcement>

                <Info>
                    <Text>
                        <p style={{display: hability}} >{props.Text}</p>
                        <p style={{display: hability2}}>{props.Text2}</p>
                    </Text>

                    <hr />

                    <Cont>
                        <p>{number} / 2</p>
                        <Icon>
                            <IoIosArrowBack onClick={(e) => {GoLeft()}} />
                            <IoIosArrowForward onClick={(e) => {GoRigth()}}/>
                        </Icon>
                    </Cont>
                </Info>
        </ComponentImg>
    );
}

const ComponentImg = styled.div`
    max-width: 100vw;
    max-height: 590px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    
    img {
        width: 100%;
        height: 590px;
        image-rendering: optimizeQuality;
    };

    #mobile {
        display: none;
    }

    @media(max-width: 750px) {
        flex-direction: column;

        hr {
            display: none;
        }
        img {
            height: 320px ;
        };
    }

    @media(max-width: 390px) {
        
        #desktop {
            display: none ;
        }
        #mobile {
            display: flex;
        }
    }
`;
const Announcement = styled.div`
    position: absolute;
    width: 414px;
    margin-right: 20%;
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;


    color: white;
    border-radius: 5px;
    
    h1 {
        font-size: 46px;
        font-weight: bold;
        text-align: end;
    }
    h2 {
        color: #3EC6E0;
        font-size: 70px;
        display: flex;
    }
    span { 
        font-size: 28px;
        margin-top: 15px;
    }
    p {
        text-align: end;
        font-size: 16px;
        font-weight: 300;
        line-height: 1.5;
        margin: 15px 0;
        text-overflow: clip;
    }
    @media(max-width: 750px){
        display: flex;
        width: 100%;
        margin: 65px ;
        padding: 10px 0;
        background-color: #00000065;

        h1 {
            font-size: 26px;
            padding: 0 25px 0 55px;
        }
        h2 {
            font-size: 48px;
            display: flex;
            padding: 0 25px 0 55px;
        }
        span { 
            font-size: 28px;
        }
        p {
            font-size: 12px;
            padding: 0 25px 0 55px;
        }
    }
`;
const Info = styled.div`  
    position: absolute;
    width: 384px;
    height: 68px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    transform: rotate(90deg);
    margin-right: -10.36em;

    color: white;
    background-color: #3EC6E0;
    padding-left: 15px;
    border-radius:0 0 15px 0;

    hr {
        height: 1px;
        width: 110px;
        background-color: white;
        border: 0;
    }

    @media(max-width: 750px) {
        width: 97%;
        position: relative;
        margin-right: 0;
        transform: rotate(0deg);
        border-radius: 0 0 0 18px;
        display: flex;
    }
    
`;
const Text = styled.div`
    display: flex;
    align-items: center;
    width: 180px;

    p {
        font-size: 14px;
        font-weight: normal;
        
    }
`;
const Cont = styled.div`
    transform: rotate(-90deg);
    background-color: #084154;
    width: 68px;
    height: 68px;
    border-radius: 0 0 0 15px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 14px;
    line-height: 2;

    @media(max-width: 750px) {
        width: 168px;
        transform: rotate(0deg);
        border-radius: 0;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }

`;
const Icon = styled.div`
    display: flex;
    justify-content: center;

    svg {
        font-size: 25px;
        cursor: pointer;
    }

    @media(max-width: 750px) {
        margin: 10px;
        svg {
            margin: 0 10px;
        }
    }
`;