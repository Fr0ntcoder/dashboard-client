import { forwardRef } from 'react';

import { ITextArea } from '@/components/ui/textarea/textarea.interface';

import styles from './Textarea.module.scss';

const Textarea = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ error, style, ...rest }, ref) => {
		return (
			<div className={styles.input} style={style}>
				<textarea ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

Textarea.displayName = 'TextArea';

export default Textarea;
