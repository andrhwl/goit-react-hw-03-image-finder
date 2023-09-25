import { createPortal } from 'react-dom';
import { Component } from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseOnEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseOnEscape);
  }

  handleCloseOnEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  hendleCloseOnOverlay = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { imgLarge } = this.props;

    return createPortal(
      <Overlay onClick={this.hendleCloseOnOverlay}>
        <ModalWindow>
          <img src={imgLarge} alt="" />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}
