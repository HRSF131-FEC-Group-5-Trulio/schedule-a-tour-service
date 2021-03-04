/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ChooseDateItem from './ChooseDateItem';

const InnerFormDiv = styled.div`
  transform: translateX(0%);
  transition: transform 0.7s ease-in-out;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-x: scroll;
  margin-left: -4px;
  margin-right: -4px;
  margin-top: -8px;
  scroll-behavior: smooth;
  position: relative;
  flex: 0 0 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const RightArrowDiv = styled.div`
  position: absolute;
  right: 0px;
  top: 30%;
  visibility: ${props => props.left === true ? null : 'hidden'};
  margin-right: -16px;
  z-index: 5;
`;

const LeftArrowDiv = styled.div`
  position: absolute;
  z-index: 1;
  left: 0px;
  top: 30%;
  visibility: ${props => props.left === true ? 'hidden' : null};
  margin-left: -16px;
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
  outline: none;

  &:hover {
    border-color: rgb(255, 255, 255);
    box-shadow: rgb(240, 240, 240) 0px 0px 10px 3px;
  }
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

const TestDiv = styled.div`
  position: relative;
`;

class ChooseDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: true,
      selectedDate: '',
      selectedId: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.makeDaysOfWeek = this.makeDaysOfWeek.bind(this);
    this.scrollToRight = this.scrollToRight.bind(this);
    this.scrollToLeft = this.scrollToLeft.bind(this);
  }

  handleClick(e) {
    const arrow = e.target.id;
    if (arrow === 'leftArrow') {
      this.setState({ left: true });
    } else {
      this.setState({ left: false });
    }
  }

  handleDate(e) {
    const selectedDate = e.target.value;
    // eslint-disable-next-line react/no-unused-state
    this.setState({ selectedDate });
    // eslint-disable-next-line react/destructuring-assignment
    this.props.selectedDate(selectedDate);
  }

  handleSelected(e) {
    const selectedId = e.target.id;
    this.setState({ selectedId });
  }

  makeDaysOfWeek() {
    let week = [];
    for (let i = 0; i < 7; i++) {
		//'2021-01-02T00:00:00'
		let curr = new Date();
		let currTime = curr.getHours();
		let add;
		currTime > 16 ? (add = 1) : (add = 0);
		let firstDay = new Date(curr.setDate(curr.getDate() + i + add));
		week.push(firstDay.toDateString());
	}
    return week;
  }

  scrollToRight() {
    document.getElementById('container').scrollLeft -= 300;
  }

  scrollToLeft() {
    document.getElementById('container').scrollLeft += 300;
  }

  render() {
    const daysOfWeek = this.makeDaysOfWeek();
    const { left } = this.state;
    const { selectedId } = this.state;

    return (
      <TestDiv>
        <Position>
          <Padding>
            <InnerFormDiv id="container" left={left} onClick={this.handleSelected}>
              {
                daysOfWeek.map((day, i) => (
                  <ChooseDateItem
                    day={day}
                    key={day}
                    id={i}
                    onclick={this.handleDate}
                    selected={selectedId}
                  />
                ))
              }
            </InnerFormDiv>
          </Padding>
          <LeftArrowDiv left={left}>
            <Button
              id="leftArrow"
              type="button"
              onClick={(e) => {
                this.handleClick(e);
                this.scrollToRight();
              }}
            >
              <i className="fas fa-angle-left" />
            </Button>
          </LeftArrowDiv>
          <RightArrowDiv left={left}>
            <Button
              id="rightArrow"
              type="button"
              onClick={(e) => {
                this.handleClick(e);
                this.scrollToLeft();
              }}
            >
              <i className="fas fa-angle-right" />
            </Button>
          </RightArrowDiv>
        </Position>

      </TestDiv>
    );
  }
}

export default ChooseDate;
