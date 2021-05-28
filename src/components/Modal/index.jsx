import React from 'react'
import styled from 'styled-components';
import { IoCloseCircleSharp } from 'react-icons/io5';

export default function Modal({ showModal, setShowModal }) {
    return (
        <>
            {/* {showModal ? ( */}
                <Background>
                    <ContentWrapp>
                        <BtnClose>
                            <IoCloseCircleSharp/>
                        </BtnClose>
                        <Text>
                            <hr/>
                            <p>Pedido realizado<br/>com sucesso!</p>
                            <hr/>
                        </Text>
                        <ImgMario>

                        </ImgMario>
                    </ContentWrapp>
                </Background>
            {/* ) : null} */}

        </>
    );
}

const Background = styled.div `
    position: absolute !important;
    /* background-color: rgba(8, 65, 84, 62%); */
    background-color: red;
    height: 100vh;
    width: 100vw;
`;
const ContentWrapp = styled.div`
`;
const BtnClose = styled.div`
`;
const Text = styled.div`
`;
const ImgMario = styled.div`
`;