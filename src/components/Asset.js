import './Asset.css';
import fileIcon from '../assets/file-solid.svg';
import deleteIcon from '../assets/trash-solid.svg';

const Asset = ({ assetId, name, version, fireUrl, dateAdded }) => {
	return (
		<div className='Asset'>
			<img src={fileIcon} alt='file icon' />
			<p>{name}</p>
			<p>Version {version}</p>
			<button>Reupload</button>
			<img className='delete' src={deleteIcon} alt='delete icon' />
		</div>
	);
};

export default Asset;
