import { createSelector } from 'reselect';

describe('reselect', () => {
  const state = {
    entity: {
      byId: {
        1: { id: 1 },
        2: { id: 2 }
      }
    },
    otherEntity: {
      byId: {
        1: { id: 1 },
        2: { id: 2 }
      }
    }
  };
  const props = {
    isLoading: true,
    entityId: 1
  };
  const outputSelector = jest.fn();
  const selectEntity = state => state.entity;
  const selectEntityIdFromProps = (_, props) => props.entityId;

  let selector;
  let makeSelector;
  beforeEach(() => {
    outputSelector.mockClear();
    selector = createSelector(
      [selectEntity, selectEntityIdFromProps],
      (entity, entityId) => outputSelector()
    );
    makeSelector = () =>
      createSelector(
        [selectEntity, selectEntityIdFromProps],
        (entity, entityId) => outputSelector()
      );
  });

  it('should memoize properly when a part of the state change', () => {
    selector(state, props);
    selector(state, props);
    const state2 = { ...state, otherEntity: {} };
    selector(state2, props);
    expect(outputSelector).toHaveBeenCalledTimes(1);
  });

  it('should memoize properly when a part of the props change', () => {
    selector(state, props);
    const props2 = { ...props, isLoading: false };
    selector(state, props2);
    expect(outputSelector).toHaveBeenCalledTimes(1);
  });

  it('should not memoize when one of the output selector return value is different', () => {
    selector(state, props);
    const props2 = { ...props, entityId: 3 };
    selector(state, props2);
    // size of cache has length of one
    selector(state, props);
    expect(outputSelector).toHaveBeenCalledTimes(3);
  });

  it('should create several selector instances, each with an independant cache', () => {
    const selector1 = makeSelector();
    const selector2 = makeSelector();
    selector1(state, props);
    const props2 = { ...props, entityId: 3 };
    selector2(state, props2);
    selector1(state, props);

    expect(outputSelector).toHaveBeenCalledTimes(2);
    expect(selector1.recomputations()).toEqual(1);
    expect(selector2.recomputations()).toEqual(1);
  });
});
