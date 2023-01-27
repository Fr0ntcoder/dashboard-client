import { FC } from 'react';

import { IUploadField } from '@/components/ui/upload-field/upload-field.interface';
import { useUploadFile } from '@/components/ui/upload-field/useUploadFile';

import styles from './UploadFile.module.scss';

const UploadField: FC<IUploadField> = ({ onChange, folder, value }) => {
	const { uploadFile } = useUploadFile(onChange, folder);
	return (
		<div className={styles.file}>
			{value && <img src={value} className={styles.img} />}
			<label className={styles.label}>
				<span className={styles.btn}>Browser</span>
				<div className={styles.hidden}>
					<input type='file' onChange={uploadFile} />
				</div>
			</label>
		</div>
	);
};

export default UploadField;
