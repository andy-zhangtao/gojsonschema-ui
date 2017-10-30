import React from 'react'
import { connect } from 'dva'
import styles from './IndexPage.css'
import GoJsonSchema from '../components/GoJsonSchema'
import Header from '../components/Header'

function IndexPage () {
  return (
    <div className={styles.normal}>
      <Header/>
      <GoJsonSchema/>

    </div>
  )
}

IndexPage.propTypes = {}

export default connect()(IndexPage)
