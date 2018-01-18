/*
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import NavigationContainer from '../../containers/NavigationContainer';
import LinkedListContainer from '../../containers/LinkedListContainer';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <NavigationContainer />
        <LinkedListContainer />
      </div>
    );
  }
}
