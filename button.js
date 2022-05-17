'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You found me!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Secret'
    );
  }
}

// DOM contained from id (Button)
const domContainer = document.querySelector('#Button_object')
// create main node (where every react DOM is managed)
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
