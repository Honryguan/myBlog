import React from 'react';
import { Menu, Icon, Popover } from 'antd';
import styles from './main.less';
import Menus from './Menus';
import logo from '../../assets/logo.png'

import { Link } from 'dva/router';

const SubMenu = Menu.SubMenu;

function Header ({users, logout, tokenUrl,switchSider, siderFold, isNavbar, menuPopoverVisible, location, switchMenuPopover}) {
	let handleClickMenu = e =>{
		e.key === 'logout' && logout();
		e.key === 'switch' && logout();
	}
	const menusProps = {
		siderFold: false,
		darkTheme: false,
		isNavbar,
		handleClickNavMenu: switchMenuPopover,
		location
	};
	return (
		 <div>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/orders'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
		</div>
	);
}

export default Header;


