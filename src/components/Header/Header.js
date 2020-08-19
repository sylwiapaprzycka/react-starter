import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { HamburgerSqueeze } from 'react-animated-burgers';

class Header extends React.Component {
  state = {
    isActive: false,
  }

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    return (
      <header className={ styles.component }>
        <Container>
          <div className={ styles.wrapper }>
            <Link to='/' className={ styles.logo }>
              <Icon name='moon' />
            </Link>
            <nav>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/info'>Info</NavLink>
              <HamburgerSqueeze isActive={this.state.isActive} toggleButton={this.toggleButton} barColor='white' buttonWidth={20} />
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;