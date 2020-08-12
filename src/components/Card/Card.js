import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

Card.propTypes = {
  title: PropTypes.node,
};

class Card extends React.Component {
  static PropTypes = {
    title: PropTypes.node,
  }
  render() {
    return (
      <section className={styles.component}>
        <h3>{this.props.title}</h3>
      </section>
    );
  }
}

export default Card;