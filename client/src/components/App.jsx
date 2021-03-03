import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Tab from './Tab';
import Schedule from './Schedule';
import Request from './Request';

const OneThird = styled.div`
  border-style: solid;
  border-color: transparent;
  width: 310px;

  box-sizing: border-box;
  display: block;
  outline: none;
  box-sizing: border-box;
`;

const TabContainer = styled.div`
  box-shadow: rgba(59, 65, 68, 0.18) 0px 17px 21px -1px;
  border-top-left-radius: ${props => props.tab === "schedule" ? "0px" : "8px"};
  border-top-right-radius: ${props => props.tab === "schedule" ? "8px" : "0px"};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;

  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(232, 233, 234);

  display: flex;
  flex-direction: column;
  overflow: auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'schedule',
      schedule: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.getProperty = this.getProperty.bind(this);
  }

  componentDidMount() {
    this.getProperty(this.props.id);
  }

  handleClick(tab) {
    this.setState({ currentTab: tab });
  }

  getProperty(id) {
    axios.get(`/api/ScheduleTour/${id}`)
      .then((listings) => {
        this.setState({ schedule: listings.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { currentTab } = this.state;
    const { schedule } = this.state;
    let tab;
    const now = new Date();

    if (currentTab === 'schedule') {
      tab = <Schedule name="schedule" time={now} schedule={schedule} />;
    } else if (currentTab === 'request') {
      tab = <Request name="request" />;
    }

    return (
      <OneThird>
        <div>
          <Tab tabSelection={this.handleClick} />
        </div>
        <TabContainer tab={currentTab}>
          {tab}
        </TabContainer>
      </OneThird>
    );
  }
}

export default App;
