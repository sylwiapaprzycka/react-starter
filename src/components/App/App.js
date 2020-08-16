import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer.js';
import Search from '../Search/SearchContainer.js';
import propTypes from 'prop-types';

class App extends React.Component {
  static propTypes = {
    title: propTypes.node,
    subtitle: propTypes.node,
    lists: propTypes.array,
  }

  render() {
    const { title, subtitle, lists } = this.props;
    return (
      <main className={ styles.component }>
        <h1 className={ styles.title }>{ title }</h1>
        <h2 className={ styles.subtitle }>{ subtitle }</h2>
        <Search />
        {lists.map(listData => (
          <List key={ listData.id } { ...listData } />
        ))}
      </main>
    );
  }  
}

export default App;
