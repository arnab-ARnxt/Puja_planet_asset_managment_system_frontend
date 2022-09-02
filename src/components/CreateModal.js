import React, { useState } from 'react';
import styles from './Modal.module.css';
import axios from '../axios';

const FileInput = ({ selectedImage, setSelectedImage }) => {
	return (
		<div>
			{selectedImage && (
				<div>
					<img alt='not fount' width={'250px'} src={URL.createObjectURL(selectedImage)} />
					<br />
					<button
						onClick={() => {
							setSelectedImage(null);
						}}
					>
						Remove
					</button>
				</div>
			)}
			<br />

			<br />
			<input
				type='file'
				name='myImage'
				onChange={(event) => {
					console.log(event.target.files[0]);
					setSelectedImage(event.target.files[0]);
				}}
			/>
		</div>
	);
};

const Modal = ({ assetID, setIsOpen, getData, isForUpdate, name: fileName, fileUrl }) => {
	const [name, setName] = useState(isForUpdate ? fileName : '');
	const [selectedImage, setSelectedImage] = useState(isForUpdate ? fileUrl : null);
	const handleSubmit = async () => {
		if (name && selectedImage) {
			const formData = new FormData();
			formData.append('photo', selectedImage);
			formData.append('name', name);
			await axios.put('/files/', formData);
			setIsOpen(false);
			window.location.reload(false);
		}
	};
	return (
		<>
			<div className={styles.darkBG} onClick={() => setIsOpen(false)} />
			<div className={styles.centered}>
				<div className={styles.modal}>
					<div className={styles.modalHeader}>
						<h5 className={styles.heading}>Create File</h5>
					</div>
					<label htmlFor='name'>Enter the name of the Image</label>
					<br />
					<input
						id='name'
						type='text'
						placeholder='Enter the name'
						value={name}
						onChange={(event) => {
							setName(event.target.value);
						}}
						width={500}
					/>
					<FileInput
						isForUpdate
						selectedImage={selectedImage}
						setSelectedImage={setSelectedImage}
					/>
					<div className={styles.modalActions}>
						<div className={styles.actionsContainer}>
							<button className={styles.deleteBtn} onClick={handleSubmit}>
								Submit
							</button>
							<button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
