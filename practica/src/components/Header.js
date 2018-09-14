import React from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize';

const Header = (props) =>
(
	<div>
		<Navbar left>
			<NavItem href='/'><Icon>comment</Icon></NavItem>
		</Navbar>
	</div>
);

export default Header;