
import React from 'react';
import styles from './styles.css';

function Navigation({ topics }) {
  return (
    <div className={styles.navigation}>
      <p>There are {topics.length} topics in the Navigation component</p>
    </div>
  );
}

Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
