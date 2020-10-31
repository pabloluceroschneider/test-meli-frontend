import React, { useState } from 'react';
import logo_ML from '../../assets/Logo_ML.png'

const TopNav = () => {
	const [ search, setSearch ] = useState(new URLSearchParams(window.location.search).get('search') || '');

	const handleSearch = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	return (
		<div className="topnav-wrapper">
			<a href="/" role="button">
				<img alt="logo" className="logo" src={logo_ML} />
			</a>

			<form action="/items" method="GET" role="search">
				<input
					name="search"
					placeholder="Nunca dejes de buscar"
					maxLength="120"
					autoFocus
					tabIndex="2"
					onChange={handleSearch}
					value={search}
				/>
				<button tabIndex="3" >
					<div role="img" aria-label="Buscar" class="nav-icon-search"></div>
				</button>
			</form>
		</div>
	);
};

export default TopNav;
