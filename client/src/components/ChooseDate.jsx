import React from 'react';
import styled from 'styled-components';
import ChooseDateItem from './ChooseDateItem';

const InnerFormDiv = styled.div`
  transform: translateX(0%);
  flex-wrap: nowrap;
  transition: transform 0.45s ease 0s;
  display: flex;
  overflow-x: auto;
  margin-left: -4px;
  margin-right: -4px;
  margin-top: -8px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const RightArrowDiv = styled.div`
  position: absolute;
  left: 282px;
  top: 47%;
`;

const LeftArrowDiv = styled.div`
  position: absolute;
  z-index: 1;
  left: 6px;
  top: 47%;
`;

const Button = styled.button`
  transition: box-shadow 0.1s ease 0s, color 0.1s ease 0s, border-color 0.2s ease 0s, background-color 0.2s ease 0s;
  border-radius: 24px;
  padding: 1px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border: 1px solid rgb(232, 233, 234);
  background-color: rgb(255, 255, 255);

`;

const Position = styled.div`
  position: relative;
`;
const padding = styled.div`
  overflow: hidden;
  padding-top: 4px;
  padding-right: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
  margin: -4px;
`;

class ChooseDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    const curr = new Date();
    let week = [];
    const currTime = curr.getHours();

    for (let i = 0; i < 7; i++) {
      const curr = new Date();
      const currTime = curr.getHours();
      let add;
      currTime > 19 ? add = 1 : add = 0;
      let next = new Date(curr.setDate(curr.getDate() + i + add));
      const options = {weekday: 'short', day: 'numeric', month: 'short'};
      week.push(next.toLocaleString('default', options).split(' '));
    }


    return (
      <div>
        <Position>
          <padding>
            <InnerFormDiv id='container'>
              {
                week.map((day, i) => <ChooseDateItem weekDay={day[0].slice(0, 3)} day={day[2]} month={day[1]} key={i}/>)
              }
            </InnerFormDiv>
          </padding>
        </Position>
        <LeftArrowDiv>
          <Button id='slideLeft' type='button'>
            <i className="fas fa-angle-left"></i>
          </Button>
        </LeftArrowDiv>
        <RightArrowDiv>
          <Button id='slideRight' type='button'>
            <i className="fas fa-angle-right"></i>
          </Button>
        </RightArrowDiv>
      </div>
    );
  }
}

export default ChooseDate;
