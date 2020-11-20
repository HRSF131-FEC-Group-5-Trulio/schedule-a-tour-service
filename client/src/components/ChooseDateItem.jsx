import React from 'react';
import styled from 'styled-components';

const ItemDiv = styled.div`
  -webkit-box-flex: 0;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  display: block;
  width: 22%;
  border-style: solid;
  border-color: transparent;
  border-top-width: 4px;
  border-right-width: 4px;
  border-bottom-width: 1px;
  border-left-width: 4px;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
`;

const ItemButton = styled.button`
  margin: 0px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  white-space: nowrap;
  font-size: 14px;
  line-height: 1.43;
  padding: 8px;
  width: 100%;
  font-weight: normal;
  color: rgb(59, 65, 68);
  background-color: rgb(255, 255, 255);
  border: 2px solid transparent;
  box-shadow: ${props => props.clicked ? 'rgb(0, 173, 187) 0px 0px 0px 2px' : 'rgb(205, 209, 212) 0px 0px 0px 1px' };

   &:hover {
    background-color: rgb(240, 240, 240);
  }
`;

const DayDiv = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 1.2;
`;

const NormalDiv = styled.div`
  display: block;
`;

const ChooseDateItem = (props) => (
  <ItemDiv>
    <ItemButton type='button' >
      <NormalDiv>
        {props.weekDay}
      </NormalDiv>
      <DayDiv>
        {props.day}
      </DayDiv>
      <NormalDiv>
        {props.month}
      </NormalDiv>
    </ItemButton>
  </ItemDiv>
);

export default ChooseDateItem;