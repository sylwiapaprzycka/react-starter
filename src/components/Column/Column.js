import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import Creator from '../Creator/Creator.js';
import { settings } from '../../data/dataStore';
import propTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

class Column extends React.Component {
  static propTypes = {
    title: propTypes.string,
    cards: propTypes.array,
    icon: propTypes.node,
    addCard: propTypes.func,
    id: propTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  render() {
    const { title, icon, cards, addCard, id } = this.props;

    return (
      <section className={ styles.component }>
        <h3 className={ styles.title }>
          <span className={ styles.icon }><Icon name={ icon } /></span>
          { title }
        </h3>
        <div>
          <Droppable droppableId={id}>
            {provided => (
              <div
                className={styles.cards}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {cards.map(cardData => (
                  <Card key={cardData.id} {...cardData} />
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}

export default Column;