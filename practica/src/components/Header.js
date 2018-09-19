import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

const Header = (props) =>
(
	<div>
		<Navbar left>
			<NavItem href='/'><Icon>comment</Icon></NavItem>
			<NavItem href='/usuarios'><Icon>account_circle</Icon></NavItem>
		</Navbar>
	</div>
);

export default Header;