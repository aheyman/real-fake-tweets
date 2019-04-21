import React from 'react';
import { connect } from 'react-redux';
import simpleAction from './js/actions/simpleActions';
import './App.css';

class App extends React.PureComponent {
  render() {
    const { someAction } = { ...this.props };

    return (
      <div className="App">
        <header className="App-header">Real Fake Tweets</header>
        <button type="button" onClick={someAction}>
          Test redux action
        </button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  someAction: () => dispatch(simpleAction('blah')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
