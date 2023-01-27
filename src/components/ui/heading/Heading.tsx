import { FC, PropsWithChildren } from 'react';

import styles from './Heading.module.scss';

const Heading: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <div className={styles.title}>{children}</div>;
};

export default Heading;
