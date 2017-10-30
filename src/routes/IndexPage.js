import React from 'react'
import { connect } from 'dva'
import styles from './IndexPage.css'
import GoJsonSchema from '../components/GoJsonSchema'

function IndexPage () {
  return (
    <div className={styles.normal}>
      <GoJsonSchema/>
    </div>
  )
}

IndexPage.propTypes = {}

export default connect()(IndexPage)
