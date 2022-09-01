import React, { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import axios from 'axios';

const FileInput = ({ selectedImage, setSelectedImage, isForUpdate }) => {
	const [localIsForUpdate, setLocalIsForUpdate] = useState(isForUpdate);
	useEffect(() => {
		console.log(typeof selectedImage);
	}, [selectedImage]);
	return (
		<div>
			{selectedImage && (
				<div>
					<img
						alt='not fount'
						width={'250px'}
						src={localIsForUpdate ? selectedImage : URL.createObjectURL(selectedImage)}
					/>
					<br />
					<button
						onClick={() => {
							setSelectedImage(null);
							setLocalIsForUpdate(isForUpdate ? false : localIsForUpdate);
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
		if (name || selectedImage) {
			const formData = new FormData();
			if (typeof selectedImage === 'object') formData.append('photo', selectedImage);
			if (name) formData.append('name', name);
			console.log(formData);
			let response;
			if (!isForUpdate) {
				response = await axios.put('http://localhost:8081/api/v1/files/', formData);
			} else {
				response = await axios.patch(
					`http://localhost:8081/api/v1/files/${assetID}`,
					formData
				);
			}
			console.log(response);
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
