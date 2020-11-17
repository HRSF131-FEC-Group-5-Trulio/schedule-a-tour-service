import React from 'react';
import TourType from './TourType';
import ChooseDate from './ChooseDate';
import ChooseTime from './ChooseTime';

const Schedule = (props) => (
  <form>
    <TourType />
    <div>
      <ChooseDate />
      <ChooseTime />
    </div>
  </form>
);

export default Schedule;