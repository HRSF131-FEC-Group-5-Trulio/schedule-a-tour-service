import React from 'react';
import styled from 'styled-components';
import CheckBoxStyle from './CheckBoxStyle';

const PaddingDiv = styled.div`
  padding: 4px 0px 8px;
  display: block;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.43;

  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  color: rgb(59, 65, 68);
  letter-spacing: -0.1px;
`;

const Label = styled.label`
  cursor: pointer;
`;

const FlexDiv = styled.div`
  flex-direction: row;

  align-items: center;
  display: flex;
`;

const InnerFlexDiv = styled.div`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid rgb(134, 144, 153);
  border-radius: 3px;
  align-item: center;
`;

const Span = styled.div`
  color: rgb(134, 144, 153);
  font-size: 12px;
  line-height: 1.33;
  margin-left: 8px;
`;


class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(event) {
    this.setState({
      checked: event.target.checked
    });
    console.log(this.state.checked);
  }

  render() {

    let msg = '';
    if (this.state.checked === false) {
      msg = 'I want to talk about financing';
    } else {
      msg = 'A licensed lender will call you soon';
    }

    return (
      <div>
        <PaddingDiv>
          <Label>
            <FlexDiv>
              <InnerFlexDiv>
                <CheckBoxStyle
                  checked={this.state.checked}
                  onchange={this.handleCheckboxChange}
                />
              </InnerFlexDiv>
              <Span>{msg}</Span>
            </FlexDiv>
          </Label>
        </PaddingDiv>
      </div>
    );
  }
}

export default CheckBox;