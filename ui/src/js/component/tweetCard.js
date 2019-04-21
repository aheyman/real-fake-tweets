import React from 'react';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    const { name } = this.props;
    const nameLink = `#${name}`;

    return (
      <div className="tweetCard">
        <a href={nameLink} onClick={this.toggleModal} onKeyDown={this.toggleModal} tabIndex={0}>
          Some content
        </a>
        <h3 className="sticky">{name}</h3>
      </div>
    );
  }
}

export default Person;
