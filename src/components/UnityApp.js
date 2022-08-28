import AssetList from './AssetList';
import './UnityApp.css';
import FileUpload from './FileUpload';
import rawData from '../rawData.json';

const UnityApp = () => {
	return (
		<div className='UnityApp'>
			<h1>Unity App</h1>
			<AssetList data={rawData} />
			<FileUpload />
		</div>
	);
};

export default UnityApp;
