import './FileUpload.css';
import FileIcon from '../assets/cloud-arrow-up-solid.svg';
import { useState } from 'react';
import CreateModal from './CreateModal';

const FileUpload = ({ getData }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<div className='FileUpload'>
			<img src={FileIcon} alt='file-icon' />
			<button onClick={() => setIsModalOpen(true)}>Upload New Model</button>
			{isModalOpen && <CreateModal getData={getData} setIsOpen={setIsModalOpen} />}
		</div>
	);
};

export default FileUpload;
