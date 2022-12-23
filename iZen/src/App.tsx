import { Route, Routes } from 'react-router-dom';
import { Create } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import LoadingPage from './Loading/LoadingPage';
import Dashboard from './Pages/Dashboard';
import Favourites from './Pages/Favourites';
import Quotes from './Pages/Quotes';
import Settings from './Pages/Settings';
import './Styles/Main.scss';
import BottomNavbar from './Components/BottomNav/BottomNavbar';

function App() {
	const [Loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<div className="App">
			{Loading ? (
				<LoadingPage />
			) : (
				<>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/quotes" element={<Quotes />} />
						<Route path="/favourites" element={<Favourites />} />
						<Route path="/create" element={<Create />} />
						<Route path="/settings" element={<Settings />} />
					</Routes>
					<BottomNavbar />
				</>
			)}
		</div>
	);
}

export default App;
