import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import RequestInput from './RequestInput';
import CheckBox from './CheckBox';

const RequestDiv = styled.div`
  padding-top: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
`;

const InnerFormDiv = styled.div`
  padding: 0px 2px;
  overflow: visible;
  display: flex;
  flex-direction: column;
`;

const Padding = styled.div`
  padding-top: 4px;
  padding-right: 0px;
  padding-bottom: 2px;
  padding-left: 0px;
`;

const SubmitButton = styled.button`
  margin-top: -8px;
  margin-bottom: 8px;
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
  width: 100%;
  color: rgb(255, 255, 255);
  background-color: rgb(217, 60, 35);
  border-color: transparent;
  outline: none;
  width: 100%;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  display: block;

  &:hover {
    background-color: transparent;
    border-color: rgb(217, 60, 35);
    color: rgb(217, 60, 35);
  }
`;

const TermsDiv = styled.div`
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  display: block;
  outline: none;
  color: rgb(134, 144, 153);
  font-size: 10px;
  line-height: 1.6;
  margin-top: 10px;
`;

const Ahref = styled.a`
  &:link {
    text-decoration: none;
    color: rgb(0, 120, 130);
  }

  &:hover {
    text-decoration: none;
    color: rgb(0, 120, 130);
  }

  &:visited {
    text-decoration: none;
    color: rgb(0, 120, 130);
  }

  &:active {
    text-decoration: none;
    color: rgb(0, 120, 130);
  }
`;

const Tooltip = styled.div`
  border-radius: 8px;
  box-shadow: rgba(134, 144, 153, 0.18) 0px 8px 16px 0px, rgba(59, 65, 68, 0.05) 0px 2px 4px 0px;
  padding: 16px;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  font-size: 10px
`;

const Request = () => (
  <RequestDiv>
    <form>
      <InnerFormDiv>
        <Padding>
          <RequestInput />
        </Padding>
        <Padding>
          <SubmitButton type="button">Request Info</SubmitButton>
        </Padding>
        <Padding>
          <CheckBox />
        </Padding>
      </InnerFormDiv>
      <InnerFormDiv>
        <Padding>
          <TermsDiv>
            By pressing Schedule A Tour, you agree that Trulia and real estate
            professionals may contact you via phone/text about your inquiry, which may
            involve the use of automated means. You are not required to consent as a
            condition of purchasing any property, goods or services. Message/data rates
            may apply. You also agree to our
            &nbsp;
            <Ahref target="blank" href="https://www.trulia.com/terms">Terms of Use</Ahref>
            &nbsp;
            Trulia does not endorse any&nbsp;
            <span>
              <Ahref target="blank" href="https://www.trulia.com/terms" data-tip data-for="terms">real estate professionals</Ahref>
              <ReactTooltip
                id="terms"
                effect="solid"
                textColor="rgb(59, 65, 68)"
                backgroundColor="rgb(255, 255, 255)"
              >
                <Tooltip>
                  <p>Real estate professionals include the real estate agents and brokers, mortgage</p>
                  <p>mortgage lenders and loan officers, property managers, and other</p>
                  <p>professionals you interact with through Trulia.</p>
                </Tooltip>
              </ReactTooltip>
            </span>
            &nbsp;
          </TermsDiv>
        </Padding>
      </InnerFormDiv>
    </form>
  </RequestDiv>
);

export default Request;
