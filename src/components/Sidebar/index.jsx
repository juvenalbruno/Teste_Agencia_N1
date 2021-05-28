import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../assets/img/Logo_N1_Rush_fundo_escuro_bg_tranparente 1.png'

import { HiOutlineMenuAlt2, HiOutlineShoppingBag } from 'react-icons/hi'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { CgSearch } from 'react-icons/cg'

export default function Sidebar(){

    const [hability, setHability] = useState();

    function Menu(e){
        {hability == "flex" ? setHability("none") : setHability("flex")}
    }
    return (
        <Content>
            <ContentWrapp1>
                <button>
                    <HiOutlineMenuAlt2 onClick={(e) => {Menu()}}/>
                </button>
                    <ContentMenu style={{display: hability}}>
                    <div className="triangulo"></div>
                    <div className="backgroundblue">
                        <div className="Wrapp">
                            <div className="categoria">
                                <h1>Luta</h1>
                                <p>Mortal Kombat</p>
                                <p>Smash Bros</p>
                                <p>Killer Instict</p>
                                <p>DBZ Kakarot</p>
                            </div>
                            <div className="categoria">
                                <h1>Ação / Aventura</h1>
                                <p>GTA V</p>
                                <p>Tomb Raider</p>
                                <p>HALO</p>
                                <p>Call of Duty</p>
                            </div>
                            <div className="categoria">
                                <h1>Corrida</h1>
                                <p>NEED For SPEED</p>
                                <p>Forza Horizon</p>
                            </div>
                        </div>
                    </div>
                </ContentMenu>
                <Link to="/" >
                    <img src={Logo} alt="Agencia N1"/>
                </Link>
            </ContentWrapp1>
            
            <ContentWrapp2>
                <Link to="" >
                    <IoPaperPlaneOutline id="plane" />
                    <p>CONTATO</p>
                </Link>
                
                <hr />

                <Link to="" >
                    <CgSearch id="search" />
                    <p>BUSCAR</p>
                </Link>

                <hr />

                <Link to="" >
                    <HiOutlineShoppingBag />
                    <spam id="number" >2</spam>
                </Link>
            </ContentWrapp2>
        </Content>
    );
}

const Content = styled.div `
    max-width: 100vw;
    width: 100%;

    height: 35px;
    margin: 25px auto;

    display: flex;
    position: absolute;
    justify-content: center;
    
    color: white;    

    a {
        display: flex;
        align-items: center;

        text-decoration: none;
        color: white;
    };
    p {
        margin-left: 10px;
        font-size: 14px;

    };
    #menu {
        cursor: pointer;
    };
    #number {
        background-color: #3EC6E0;
        padding: 2px 7px;
        border-radius: 25px;
    };
    button {
        background-color: transparent;
        color: white;
        border: 0;
    }
`;
const ContentWrapp1 = styled.div `
    width: 25rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    svg {
        font-size: 35px;
        margin-right: 35px;
        cursor: pointer;
    }

    @media(max-width: 600px){
        img {
            width: 107px;
        }
    }

`;
const ContentWrapp2 = styled.div `
    width: 25rem;
    
    display: flex;
    align-items: center;
    justify-content: flex-end;
    

    hr {
        height: 25px;
        margin: 0 25px;
    }

    svg {
        font-size: 25px;
    }

    #search {
        transform: rotate(180deg);
        transform: rotateY(180deg);
    }
    
    #plane {
        transform: rotate(20deg);
    }

    @media(max-width: 600px) {
            padding: 0 15px;
        svg {
            margin: 0 10px;
            
        }
        p, hr {
            display: none;
        }
    }
`;
const ContentMenu = styled.div`
    position: absolute;
    display: none;
    margin-top: 330px;
    flex-direction: column;
    z-index: 8;

    .triangulo {
        width: 0; 
        height: 0; 
        border-left: 18px solid transparent;
        border-right: 18px solid transparent;
        border-bottom: 18px solid #3EC6E0;
    }
    .backgroundblue {
        background-color: #3EC6E0;
        height: 250px;
        width: 425px;
        border-radius: 0 4px 4px 4px;
        position: relative;
        top: 10px;
        left: -12px;

    }
    .backgroundblue .Wrapp {
        height: 250px;
        width: 425px;
        display: flex;
        position: absolute;
        top: -10px;
        left: -10px;
        border-radius: 4px;
        border: 1px solid #3EC6E0;

        background-color: #084154;

        .categoria {
            display: flex;
            flex-direction: column;
            margin: 30px auto;

            h1 {
                font-size: 16px;
                margin: 10px 20px;
            }
            p {
                cursor:pointer;
                padding: 10px;
            }
            
            p:hover{
                background-color: #3EC6E0;
                color: #084154;
                border-radius: 8px;
            }
        }
    }

    @media(max-width: 450px){
        
    }
`;