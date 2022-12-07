import cn from 'classnames';
import { forwardRef } from 'react';

import { IField } from '@/components/ui/field/field.interface';

import styles from './Field.module.scss';

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, className, ...rest }, ref) => {
		return (
			<div className={cn(styles.input, className)}>
				<input ref={ref} type={type} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

Field.displayName = 'Field';

export default Field;
