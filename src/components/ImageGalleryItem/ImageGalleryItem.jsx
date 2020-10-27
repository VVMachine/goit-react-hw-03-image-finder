import React from "react";

import styles from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ tags, webformatURL, onClick }) {
  return (
    <li className={styles.imageGalleryItem} onClick={onClick}>
      <img src={webformatURL} alt={tags} className={styles.imageGalleryItemImage} />
    </li>
  );
}
