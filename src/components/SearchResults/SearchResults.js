import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import propTypes from 'prop-types';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { Droppable } from 'react-beautiful-dnd';

class SearchResults extends React.Component {
  static propTypes = {
    match: propTypes.any,
    index: propTypes.number,
    cards: propTypes.array,
    id: propTypes.string,
  }


  render() {
    const { cards, id } = this.props;

    return (
      <Container>
        <section className={ styles.component }>
          <Droppable droppableId={ id } >
            { provided => (
              <div
                className={ styles.cards }
                { ...provided.droppableProps }
                ref={ provided.innerRef }
              >
                {cards.map((cardData, index) => (
                  <>
                    <Link to={ `/list/${ cardData.listId }` }>
                      <Card key={ cardData.id } { ...cardData } index={ index } />
                    </Link>
                  </>
                ))}
                { provided.placeholder }
              </div>
            )}
          </Droppable>
        </section>
      </Container>
    );
  }
}

export default SearchResults;