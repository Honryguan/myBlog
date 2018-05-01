import React from 'react';
import { connect } from 'dva';
import styles from './Index.less';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';


function IndexPage() {
  return(
      <div>
    <Header />111
    <Footer />
  </div>

    );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
