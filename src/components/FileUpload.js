import './FileUpload.css';
import FileIcon from '../assets/cloud-arrow-up-solid.svg';

const FileUpload = () => {
	return (
		<div className='FileUpload'>
			<img src={FileIcon} alt='file-icon' />
			<button>Upload New Model</button>
		</div>
	);
};

export default FileUpload;
