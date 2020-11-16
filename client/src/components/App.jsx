import React from 'react';
import styled from 'styled-components';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: null,
    };
  }

  render() {
    return (
      <div>
        <div>
          <button>Schedule A Tour</button>
          <button>Request Info</button>
        </div>
        <div>
          <form>
            <div>
              <label>Tour Type</label>
            </div>
            <div>
              <button>In-Person</button>
              <button>Video Chat</button>
            </div>
            <div>
              reponsive slides
            </div>
            <div>
              <select>
                <option>Choose a time</option>
                <option>09:00 AM</option>
                <option>09:30 AM</option>
                <option>10:00 AM</option>
                <option>10:30 AM</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;