import './AssetList.css';
import Asset from './Asset';

const AssetList = ({ data: assets, getData }) => {
	return (
		<div className='AssetList'>
			<h1>Current Assets</h1>
			<div className='main'>
				{assets.map((anAsset) => (
					<Asset getData={getData} key={anAsset.assetID} {...anAsset} />
				))}
			</div>
		</div>
	);
};

export default AssetList;
