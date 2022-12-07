import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { IUserAvatar } from '@/components/ui/user-avatar/user-avatar.interface';

import styles from './UserAvatar.module.scss';

const UserAvatar: FC<IUserAvatar> = ({ avatarPath, alt }) => {
	return (
		<Link href='/dashboard' className={styles.avatar}>
			<Image src={avatarPath} alt='' />
		</Link>
	);
};

export default UserAvatar;
