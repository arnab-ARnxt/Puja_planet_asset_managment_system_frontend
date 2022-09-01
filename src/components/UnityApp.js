import AssetList from './AssetList';
import './UnityApp.css';
import FileUpload from './FileUpload';
// import rawData from '../rawData.json';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UnityApp = () => {
	const [num, setNum] = useState([]);
	async function getData() {
		const res = await axios.get(`http://localhost:8081/api/v1/files/`);
		setNum(res.data.data.files.Items);
	}
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='UnityApp'>
			<h1>Unity App</h1>
			<AssetList data={num} getData={getData} />
			<FileUpload getData={getData} />
		</div>
	);
};

export default UnityApp;
