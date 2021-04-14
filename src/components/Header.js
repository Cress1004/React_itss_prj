import React from 'react';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <div className="navbar navbar-light bg-light row">
        <div className="col navbar-text align-self-center">Flash Cards</div>
      </div>
    );
  }
}

export default Header;