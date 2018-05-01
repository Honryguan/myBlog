import React from 'react';
import styles from './main.less';
import Order from '../../routes/order/Orders';
import { Router,Switch, Route } from 'dva/router';
const Footer = () => <div className={styles.footer}>
	<Switch>
      <Route exact path='/' component={Order}/>
      <Route path='/orters' component={Order}/>

    </Switch>
</div>;

export default Footer;


