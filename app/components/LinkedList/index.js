
import React from 'react';
import Link from '../Link';
import styles from './styles.css';

function LinkedList({ links }) {
  const linkNodes = links.map(link => (
    <Link key={link.id} link={link} />
  ));

  return (
    <div className={styles.linkedList}>
      {linkNodes}
    </div>
  );
}

LinkedList.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })),
};

export default LinkedList;
