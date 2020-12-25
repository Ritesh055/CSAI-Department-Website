import React from 'react';
import './header.css';
import logo from './logo.png';

class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="Header-Site-Title">
					<img className = "Header-logo" src={logo} alt = ""/>
					
					<div className="Department-Name">
						<h1 >
							<b>Department Of Computer Science And Engineering</b>
							<br/>
						</h1>
						<h3>
							Netaji Subhas University of Technology
						</h3>					
					</div>			
				</div>
			</header>
		);
	}
}

export default Header;
