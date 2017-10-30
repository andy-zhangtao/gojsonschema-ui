import React from 'react'
import { connect } from 'dva'
import styles from './IndexPage.css'
import GoJsonSchema from '../components/GoJsonSchema'
import Header from '../components/Header'
import Footer from '../components/Footer'
function IndexPage () {
  return (
    <div className={styles.normal}>
      <Header/>
      <GoJsonSchema/>
      <Footer/>
    </div>
  )
}

IndexPage.propTypes = {}

export default connect()(IndexPage)
