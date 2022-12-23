import React from 'react';
import { RotateLoader } from 'react-spinners';

const LoadPageStyle = {
	height: '100vh',
	width: '100vw',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

function LoadingPage() {
	return (
		<div style={LoadPageStyle} className="LoadingPageContainer">
			<RotateLoader speedMultiplier={0.6} />
		</div>
	);
}

export default LoadingPage;
