import expect from 'expect';
import linkedListContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('linkedListContainerReducer', () => {
  it('returns the initial state', () => {
    expect(linkedListContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
