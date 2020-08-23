import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForList } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchstring = props.match.params.id;

  return { 
    cards: getCardsForList(state, searchstring),
  };
};
    
export default connect(mapStateToProps)(SearchResults);