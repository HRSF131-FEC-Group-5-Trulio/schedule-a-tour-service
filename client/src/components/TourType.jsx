import React from 'react';
import styled from 'styled-components';

const InnerFormDiv = styled.div`
  padding: 4px 0px;
  display: inline-flex;
  width: 100%;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(59, 65, 68);
`;

const Button = styled.div`
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  white-space: nowrap;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 16px;
  box-shadow: none;
  margin: 0px;
  flex: 1 1 auto;
`;

const LeftButton = styled(Button)`
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  color: ${props => props.current === "inPerson" ? "rgb(255, 255, 255)" : "rgb(59, 65, 68)"};
  background-color: ${props => props.current === "inPerson" ? "rgb(0, 120, 130)" : "rgb(255, 255, 255)"};
  border-color: ${props => props.current === "inPerson" ? "transparent" : "rgb(205, 209, 212)"};
  border-right: 0px;

  &:hover {
    background-color: ${props => props.current === "inPerson" ? "rgb(0, 120, 130)" : "rgb(240, 240, 240)"};
    transition: background-color 0.5s ease 0s;
  }
`;

const RightButton = styled(Button)`
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  color: ${props => props.current === "videoChat" ? "rgb(255, 255, 255)" : "rgb(59, 65, 68)"};
  background-color: ${props => props.current === "videoChat" ? "rgb(0, 120, 130)" : "rgb(255, 255, 255)"};
  border-color: ${props => props.current === "videoChat" ? "transparent" : "rgb(205, 209, 212)"};
  border-left-color: transparent;

  &:hover {
    background-color: ${props => props.current === "videoChat" ? "rgb(0, 120, 130)" : "rgb(240, 240, 240)"};
    transition: background-color 0.5s ease 0s;
  }
`;

const Label = styled.label`
  color: rgb(134, 144, 153);
`;

class TourType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tourType: 'inPerson',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const tourType = e.target.id;
    this.setState({ tourType });
  }

  render() {
    return (
      <div>
        <InnerFormDiv>
          <Label>
            Tour Type&nbsp;&nbsp;
            <i className="far fa-question-circle" />
          </Label>
        </InnerFormDiv>
        <InnerFormDiv>
          <LeftButton id="inPerson" current={this.state.tourType} onClick={this.handleClick}>In-Person</LeftButton>
          <RightButton id="videoChat" current={this.state.tourType} onClick={this.handleClick}>Video Chat</RightButton>
        </InnerFormDiv>
      </div>
    );
  }
}

export default TourType;
