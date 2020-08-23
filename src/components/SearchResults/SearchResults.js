import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import propTypes from 'prop-types';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

class SearchResults extends React.Component {
  static propTypes = {
    cards: propTypes.array,
  }

  render() {
    const { cards } = this.props;

    return (
      <Container>
        <section className={ styles.component }>
          {cards.map(cardData => (
            <div key={ cardData.id }> 
              <Card key={ cardData.id } { ...cardData } />
              <Link to={ `/list/${ cardData.listId }` } />
            </div>
          ))}
        </section>
      </Container>
    );
  }
}

export default SearchResults;