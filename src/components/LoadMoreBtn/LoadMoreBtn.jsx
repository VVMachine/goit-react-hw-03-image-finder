import React from "react";

import styles from './LoadMoreBtn.module.css'


export default function LoadMoreBtn({nextPageRequest}) {
  return <button type="button" onClick={nextPageRequest} className={styles.button}>Load More</button>;
}
