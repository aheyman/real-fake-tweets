import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import TweetCard from './js/component/tweetCard';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">Real Fake Tweets</header>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TweetCard />
        </div>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(App);
