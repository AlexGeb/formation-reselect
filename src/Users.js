import React, { useContext, useMemo } from 'react';
import { ReactReduxContext } from 'react-redux';
import { createSelector } from 'reselect';

import User from './User';

export const Users = ({ userIds }) => {
  console.log('render Users');
  return (
    <ul>
      {userIds.map(userId => (
        <User key={userId} userId={userId} />
      ))}
    </ul>
  );
};

const userIdsSelector = createSelector(
  [state => state.users.byId],
  usersById => (
    console.log('userIdsSelector', usersById), Object.keys(usersById)
  )
);

const mapState = state => ({ userIds: userIdsSelector(state) });

const MappedStateToPropsComponent = ({
  mapState,
  render: RenderedComponent
}) => {
  const { storeState } = useContext(ReactReduxContext);
  const computedProps = mapState(storeState);
  console.log(RenderedComponent);
  console.log(computedProps);

  return () => React.memo(() => <RenderedComponent {...computedProps} />);
};

export default () => (
  <MappedStateToPropsComponent
    mapState={mapState}
    render={props => <Users {...props} />}
  />
);
