import React, { Component } from "react";

import styles from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscClose);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscClose);
  }

  handleEscClose = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;

    return (
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
