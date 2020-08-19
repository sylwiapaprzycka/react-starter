import React from 'react';
import styles from './Home.scss';
import List from '../List/ListContainer.js';
import Search from '../Search/SearchContainer.js';
import propTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';

class Home extends React.Component {
  static propTypes = {
    title: propTypes.node,
    subtitle: propTypes.node,
    lists: propTypes.array,
    moveCard: propTypes.func,
  }

  render() {
    const { title, subtitle, lists, moveCard } = this.props;
    const moveCardHandler = result => {
      if(
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ){
        moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };
    return (
      <main className={ styles.component }>
        <h1 className={ styles.title }>{ title }</h1>
        <h2 className={ styles.subtitle }>{ subtitle }</h2>
        <Search /> 
        <DragDropContext onDragEnd={moveCardHandler}>
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
        </DragDropContext>
      </main>
    );
  }  
}

export default Home;
