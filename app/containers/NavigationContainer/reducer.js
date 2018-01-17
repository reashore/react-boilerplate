/*
 *
 * NavigationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  topics: [
    {
      name: 'libraries',
      description: 'Links to open source libraries',
    },
    {
      name: 'apps',
      description: 'links to new exciring apps',
    },
    {
      name: 'news',
      description: 'links to programming related news and articles',
    },
  ],
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default navigationContainerReducer;
