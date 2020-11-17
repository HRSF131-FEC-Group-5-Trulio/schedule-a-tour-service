import React from 'react';
import styled from 'styled-components';

import Tab from './Tab';
import TourType from './TourType';
import ChooseDate from './ChooseDate';
import ChooseTime from './ChooseTime';

const OneThird = styled.div`
  border-style: solid;
  border-color: transparent;
  width: 33.4%;
  box-sizing: border-box;
  display: block;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
    };
  }

  componentDidMount() {
    this.setState({current: 'left'});
  }

  render() {
    return (
      <OneThird>
        <div>
          <Tab current={this.state.current}/>
        </div>
        <div>
          <form>
            <TourType />
            <div>
              <ChooseDate />
              <ChooseTime />
            </div>
          </form>
        </div>
      </OneThird>
    );
  }
}

export default App;