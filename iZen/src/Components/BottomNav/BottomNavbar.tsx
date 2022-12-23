import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

function BottomNavbar({}: Props) {
	const [value, setvalue] = useState();
	const navigate = useNavigate();

	return (
		<Paper
			sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
			elevation={3}
		>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setvalue(newValue);
					if (newValue == 0) navigate('/');
					if (newValue == 1) navigate('/quotes');
					if (newValue == 2) navigate('/create');
					if (newValue == 3) navigate('/favourites');
					if (newValue == 4) navigate('/settings');
				}}
			>
				<BottomNavigationAction label="Home" icon={<HomeIcon />} />
				<BottomNavigationAction label="Quotes" icon={<FormatQuoteIcon />} />
				<BottomNavigationAction label="Create" icon={<AddIcon />} />
				<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
				<BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
			</BottomNavigation>
		</Paper>
	);
}

export default BottomNavbar;
