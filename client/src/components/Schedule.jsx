import React from 'react';
import styled from 'styled-components';
import TourType from './TourType';
import ChooseDate from './ChooseDate';
import ChooseTime from './ChooseTime';

const ScehduleDiv = styled.div`
  padding: 16px;
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

const Schedule = (props) => (
  <ScehduleDiv>
    <form>
      <InnerFormDiv>
        <Padding>
          <TourType />
        </Padding>
        <Padding>
          <ChooseDate />
          <ChooseTime time={props.time}/>
        </Padding>
        <Padding>
          {/* <input /> */}
        </Padding>
        <Padding>
          ㅁ I want to talk about financing
        </Padding>
        <Padding>
          <button>Schedule a Tour</button>
        </Padding>
      </InnerFormDiv>
    </form>
  </ScehduleDiv>
);

export default Schedule;