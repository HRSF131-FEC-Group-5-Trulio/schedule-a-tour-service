import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -4px;
  margin-bottom: -6px;
`;

// const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
//   border: 0;
//   clip: rect(0 0 0 0);
//   clip-path: inset(50%);
//   height: 1px;
//   margin: -1px;
//   overflow: hidden;
//   padding: 0;
//   position: absolute;
//   white-space: nowrap;
//   width: 1px;
// `;

// const StyledCheckbox = styled.div`
//   display: inline-block;
//   width: 16px;
//   height: 16px;
//   background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')}
//   border-radius: 3px;
//   transition: all 150ms;
//   cursor: pointer;

//   ${HiddenCheckbox}:focus + & {
//     box-shadow: 0 0 0 3px pink;
//   }

//   ${Icon} {
//     visibility: ${(props) => (props.checked ? 'visible' : 'hidden')}
//   }
// `;

const Label = styled.label`
  cursor: pointer;
  display: flex;
  color: rgb(134, 144, 153);
  font-size: 12px;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  margin-top: 3px;

  &::before {
    content: '';
    height: 11px;
    width: 11px;
    border-radius: 2px;
    margin-right: 10px;
    border: 1px solid white;
  }

  &:hover::before {
    border: 1px solid transparent;
    box-shadow: black 0px 0px 2px 0.7px;
    transition: border-color 0.2s, box-shadow 0.1s;
  }
`;

const Input = styled.input`
  position: absolute;
  padding: 0;
  white-space: nowrap;
  margin-top: 5px;
  margin-left: 0px;
  &:checked + Label:before {
    box-shadow: none;
  }
`;

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(e) {
    const checked = e.target.checked;
    this.setState({ checked });
  }

  render() {
    let msg = '';
    const { checked } = this.state;
    if (checked === false) {
      msg = 'I want to talk about financing';
    } else {
      msg = 'A licensed lender will call you soon';
    }
    return (
      <CheckboxContainer>
        <Input
          id="input"
          type="checkbox"
          onChange={this.handleCheckboxChange}
        />
        <Label htmlFor="input">{msg}</Label>
      </CheckboxContainer>
    );
  }
}

export default CheckBox;
