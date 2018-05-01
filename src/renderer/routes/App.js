import React, { PropTypes } from 'react';
import { connect } from 'dva';
import Login from './Login';

import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Sider from '../components/Layout/Sider';
import MenuTab from '../components/Layout/MenuTab';

import styles from '../components/Layout/main.less';
import { Spin,Icon } from 'antd';
import classnames from 'classnames';
import '../components/Layout/common.less';

function App({children, location, dispatch, app}) {
	const {menulist,errMessages,login, loading,tokenUrl,loginButtonLoading, users, siderFold, darkTheme, isNavbar, menuPopoverVisible} = app;
	const loginProps = {
		loading,
		errMessages,
		loginButtonLoading,
		onOk (data) {
			dispatch({type: 'app/login', payload: data});
		}
	};
	const headerProps = {
		tokenUrl,
		users,
		siderFold,
		location,
		isNavbar,
		menuPopoverVisible,
		switchMenuPopover () {
			dispatch({type: 'app/switchMenuPopover'});
		},
		logout () {
			dispatch({type: 'app/logout'});
		},
		switchSider () {
			dispatch({type: 'app/switchSider'});
		}
	};

	const siderProps = {
		menulist,	
		siderFold,
		darkTheme,
		changeTheme () {
			dispatch({type: 'app/changeTheme'});
		}
	};

	const menusProps = {
		siderFold: false,
		darkTheme: false,
		isNavbar,
		handleClickNavMenu(){
			dispatch({type: 'app/switchMenuPopover'});
		},
		location
	};

	const tabProps={
		menulist,
		children
	}

	const pathName=location.pathname;

	function switchSider () {
			dispatch({type: 'app/switchSider'});
		}

	return (
		<div>{login
        ? 
        <div className={classnames(styles.layout,{[styles.fold]: isNavbar ? false : siderFold}, {[styles.withnavbar]: isNavbar})}>
          <Header {...headerProps} />
          {!isNavbar ? <aside className={classnames(styles.sider, {[styles.light]: !darkTheme})}>
            <Sider {...siderProps} />
          </aside> : ''}
          <div className={styles.main}>
			{isNavbar ? 
				<Popover placement='bottomLeft' onVisibleChange={switchMenuPopover} visible={menuPopoverVisible} overlayClassName={styles.popovermenu} triger='click' content={<Menus {...menusProps} />}>
					<div className={styles.siderbutton}>
						<Icon type='bars' />
					</div>
				</Popover>
				:
				<div className={styles.siderbutton} onClick={switchSider}>
					<Icon type={siderFold ? 'caret-right' : 'caret-left'} />
				</div>
				 }

            {pathName==='/'? <div className={styles.container}>
              <div className={styles.content}>
                {children}
               </div>
            </div> : <MenuTab {...tabProps}/>}
          </div>
       </div>
        : <div className={styles.spin}><Spin tip='加载用户信息...' spinning={loading} size='large'><Login {...loginProps} /></Spin></div>}</div>
	);
}

App.propTypes = {
	children: PropTypes.element.isRequired,
	location: PropTypes.object,
	dispatch: PropTypes.func,
	loading: PropTypes.object,
	loginButtonLoading: PropTypes.bool,
	login: PropTypes.bool,
	user: PropTypes.object,
	siderFold: PropTypes.bool,
	darkTheme: PropTypes.bool
};

export default connect(({app}) => ({app}))(App);
