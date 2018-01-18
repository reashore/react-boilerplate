import { createSelector } from 'reselect';

/**
 * Direct selector to the linkedListContainer state domain
 */
const selectLinkedListContainerDomain = () => state => state.get('linkedListContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LinkedListContainer
 */

const selectLinkedListContainer = () => createSelector(
  selectLinkedListContainerDomain(),
  (substate) => substate.toJS()
);

export default selectLinkedListContainer;
export {
  selectLinkedListContainerDomain,
};
