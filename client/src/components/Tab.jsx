import React from 'react';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DivInFlex = styled.div`
  -webkit-box-flex: 1;
  flex: 1 0 auto;
  display: block;
`;

const Button = styled.button`
  font-weight: normal;
  background-color: rgb(255, 255, 255);
  border: 1px solid transparent;
  position: relative;
  transition: box-shadow 0s ease 0s, border 0s ease 0s;
  color: rgb(0, 120, 130);

  margin: 0px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  text-align: center;

  white-space: nowrap;
  font-size: 15px;
  line-height: 1.5;
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
  width: 100%;

  border-image: initial;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const LeftButton = styled(Button)`
  border-top-color: rgb(232, 233, 234);
  border-right-color: rgb(232, 233, 234);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(232, 233, 234);
  box-shadow: rgb(255, 255, 255) 0px 2px 0px -1px;
  border-bottom-left-radius: 0px;

  &::after {
    position: absolute;
    content: " ";
    bottom: -2px;
    right: -9px;
    width: 8px;
    height: 8px;
    border-style: solid;
    border-color: rgb(232, 233, 234);
    border-bottom-left-radius: 8px;
    border-width: 0px 0px 1px 1px;
    box-shadow: rgb(255, 255, 255) -2px 2px 0px;
  }
`;

const RightButton = styled(Button)`
  border-top-color: rgb(232, 233, 234);
  border-right-color: rgb(232, 233, 234);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(232, 233, 234);
  box-shadow: rgb(255, 255, 255) 0px 2px 0px -2px;
  border-bottom-right-radius: 0px;

  &::before {
    position: absolute;
    content: " ";
    bottom: -2px;
    left: -9.5px;
    width: 8px;
    height: 8px;
    border-style: solid;
    border-color: rgb(232, 233, 234);
    border-bottom-right-radius: 8px;
    border-width: 0px 1px 1px 0px;
    box-shadow: rgb(255, 255, 255) 2px 2px 0px;
  }
`;

const DivInButton = styled.div`
  font-weight: normal;
  color: rgb(0, 120, 130);
  white-space: nowrap;
  font-size: 15px;
  line-height: 1.5;
`;

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      current: 'left',
    });
  }

  handleClick() {
    const current = this.state.current;
    if (current === 'left') {
      this.setState({current: 'right'});
    } else {
      this.setState({current: 'left'});
    }
  }


  render() {
    const clicked = this.state.current;
    const leftTab = clicked === 'left' ? <LeftButton onClick={this.handleClick}><DivInButton>Schedule A Tour</DivInButton></LeftButton> : <Button onClick={this.handleClick}>Schedule A Tour</Button>;
    const rightTab = clicked === 'right' ? <RightButton onClick={this.handleClick}><DivInButton>Request Info</DivInButton></RightButton> : <Button onClick={this.handleClick}>Request Info</Button>;
    return (
      <FlexDiv>
        <DivInFlex>
          {leftTab}
        </DivInFlex>
        <DivInFlex>
          {rightTab}
        </DivInFlex>
      </FlexDiv>
    );
  }
}

export default Tab;