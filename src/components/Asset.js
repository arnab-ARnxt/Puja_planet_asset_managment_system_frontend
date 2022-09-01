import './Asset.css';
import fileIcon from '../assets/file-solid.svg';
import deleteIcon from '../assets/trash-solid.svg';
import axios from 'axios';
import Modal from './Modal';
import { useState } from 'react';

const Asset = ({ assetID, name, versions, fileUrl, dateAdded, getData }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	async function deletePhoto() {
		const response = await axios.delete(`http://localhost:8081/api/v1/files/${assetID}`);
		console.log(response);
		getData();
	}

	return (
		<div className='Asset'>
			<img src={fileIcon} alt='file icon' />
			<p>{name}</p>
			<p>Version {versions}</p>
			<button onClick={() => setIsModalOpen(true)}>Reupload</button>
			<img className='delete' src={deleteIcon} alt='delete icon' onClick={deletePhoto} />
			{isModalOpen && (
				<Modal
					isForUpdate
					assetID={assetID}
					name={name}
					fileUrl={fileUrl}
					setIsOpen={setIsModalOpen}
				/>
			)}
		</div>
	);
};

export default Asset;
