import React from 'react';
import styled from 'styled-components';
import TourType from './TourType';
import ChooseDate from './ChooseDate';
import ChooseTime from './ChooseTime';
import Input from './Input';
import CheckBox from './CheckBox';

const ScehduleDiv = styled.div`
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
  padding-bottom: 4px;
  padding-left: 0px;
`;

const PaddingPhone = styled(Padding)`
  padding-left: 8px;
  display: inline-block;
`;

const Schedule = (props) => (
  <ScehduleDiv>
    <form>
      <InnerFormDiv>
        <Padding>
          <TourType />
        </Padding>
        <Padding>
          <ChooseDate time={props.time}/>
          <ChooseTime time={props.time}/>
        </Padding>
        <Input />
      </InnerFormDiv>
      <InnerFormDiv>
        <Padding>
          <CheckBox />
          {/* <i class="far fa-check-square"></i>&nbsp;&nbsp;I want to talk about finaning */}
        </Padding>
      </InnerFormDiv>
      <InnerFormDiv>
        <Padding>
          <button>Schedule a Tour</button>
        </Padding>
      </InnerFormDiv>
    </form>
  </ScehduleDiv>
);

export default Schedule;