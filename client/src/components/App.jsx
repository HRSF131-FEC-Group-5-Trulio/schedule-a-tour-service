import React from 'react';
import styled from 'styled-components';

import Tab from './Tab';
import Schedule from './Schedule';
import Request from './Request';


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
      currentTab: null,
    };
  }

  componentDidMount() {
    this.setState({currentTab: 'schedule'});
  }

  render() {
    const { currentTab } = this.state;
    let tab = '';
    if ({currentTab} === 'schedule') {
      tab = <Schedule />;
    } else if ({currentTab} === 'request') {
      tab = <Request />;
    }
    return (
      <OneThird>
        <div>
          <Tab />
        </div>
        <div>
          {tab}
        </div>
      </OneThird>
    );
  }
}

export default App;
