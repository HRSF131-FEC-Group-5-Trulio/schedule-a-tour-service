import React from 'react';
import styled from 'styled-components';
import ChooseDateItem from './ChooseDateItem';

const InnerFormDiv = styled.div`
  transform: translateX(0%);
  flex-wrap: nowrap;
  transition: transform 0.7s ease-in-out;
  display: flex;
  overflow-x: scroll;
  margin-left: -4px;
  margin-right: -4px;
  margin-top: -8px;
  justify-content: ${props => props.left === true ? 'flex-start' : 'flex-end'};
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  position: relative;
  flex: 0 0 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const RightArrowDiv = styled.div`
  position: absolute;
  left: 266px;
  top: 47%;
  visibility: ${props => props.left === true ? null : 'hidden'};
`;

const LeftArrowDiv = styled.div`
  position: absolute;
  z-index: 1;
  left: 6px;
  top: 47%;
  visibility: ${props => props.left === true ? 'hidden' : null};
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

const Padding = styled.div`
  padding-top: 5px;
  padding-right: 4px;
  padding-bottom: 4px;
  padding-left: 4px;
  margin: -4px;
`;

class ChooseDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: true,
      week: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.makeDaysOfWeek = this.makeDaysOfWeek.bind(this);
  }

  handleClick() {
    const left = !this.state.left;
    this.setState({left: left});
  }

  makeDaysOfWeek() {
    let week = [];
    for (let i = 0; i < 7; i++) {
      let curr = new Date();
      let currTime = curr.getHours();
      let add;
      currTime > 19 ? add = 1 : add = 0;
      let firstDay = new Date(curr.setDate(curr.getDate() + i + add));
      const options = {weekday: 'short', day: 'numeric', month: 'short'};
      week.push(firstDay.toLocaleString('default', options).split(' '));
    }
    return week;
  }

  render() {

    const daysOfWeek = this.makeDaysOfWeek();
    return (
      <div>
        <Position>
          <Padding>
            <InnerFormDiv id='container' left={this.state.left}>
              {
                daysOfWeek.map((day, i) => <ChooseDateItem weekDay={day[0].slice(0, 3)} day={day[2]} month={day[1]} key={i}/>)
              }
            </InnerFormDiv>
          </Padding>
        </Position>
        <LeftArrowDiv left={this.state.left}>
          <Button type='button' onClick={this.handleClick}>
            <i className="fas fa-angle-left"></i>
          </Button>
        </LeftArrowDiv>
        <RightArrowDiv left={this.state.left}>
          <Button type='button' onClick={this.handleClick}>
            <i className="fas fa-angle-right"></i>
          </Button>
        </RightArrowDiv>
      </div>
    );
  }
}

export default ChooseDate;
