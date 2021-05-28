import React from "react";
import styled from "styled-components";

export default function MiddleBanner(props) {
  return (
    <Middle>
      <img src={props.Image} alt={props.Alt} />
      <ContentWrapp>
        <Wrapp>
          <p>{props.Title}</p>
          <hr />
        </Wrapp>
      </ContentWrapp>
    </Middle>
  );
}
const Middle = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  position: relative;

  img {
    width: 30.65em;
    height: 15em;
  }
`;
const ContentWrapp = styled.div`
  height: 61px;
  display: flex;
  justify-content: flex-end;

  background-color: #084154;
  border-radius: 0 0 5px 5px;

  p {
    font-weight: 700;
    font-size: 16px;
    color: #084154;
    margin-right: 5px;
    padding: 15px 0;
  }

  hr {
    width: 30%;
    height: 1px;
    border: solid 0px;
    background-color: #084154;
  }
`;
const Wrapp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 88%;

  display: flex;
  align-items: center;
  padding: 0 25px;

  background-color: #3ec6e0;
  border-radius: 0 0 5px 0;
`;
