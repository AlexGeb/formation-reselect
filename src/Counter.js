import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });
  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Counter = ({ count, incrementCounter }) => {
  useInterval(incrementCounter, 1000);
  return (
    <h3>
      Counter : <span>{count}</span>
    </h3>
  );
};

const mapStateToProps = state => state.counter;
const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch({ type: 'INCREMENT' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
