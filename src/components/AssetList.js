import './AssetList.css';
import Asset from './Asset';

const AssetList = ({ data: assets }) => {
	return (
		<div className='AssetList'>
			<h1>Current Assets</h1>
			<div className='main'>
				{assets.map((anAsset) => (
					<Asset key={anAsset.assetId} {...anAsset} />
				))}
			</div>
		</div>
	);
};

export default AssetList;
