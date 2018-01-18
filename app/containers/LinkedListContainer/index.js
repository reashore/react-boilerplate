
import React from 'react';
import { connect } from 'react-redux';
import selectLinkedListContainer from './selectors';
import LinkedList from '../../components/LinkedList';

export class LinkedListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LinkedList {...this.props} />
    );
  }
}

const mapStateToProps = selectLinkedListContainer();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkedListContainer);
