import React from 'react'
import styles from './SearchLoadingAnimation.module.css'
const SearchLoadingAnimation = ({isSearching}) => {
  if(!isSearching) return null
  return (
    <div className={styles.loaderContainer}>
    <div className={styles.searchMadness}>
      <div className={styles.searchBeams}></div>
      <div className={styles.searchIcon}></div>
      <div className={styles.searchText}>Searching...</div>
    </div>
  </div>
  )
}

export default SearchLoadingAnimation
