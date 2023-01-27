import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { IUserAvatar } from '@/components/ui/user-avatar/user-avatar.interface';

import styles from './UserAvatar.module.scss';

const UserAvatar: FC<IUserAvatar> = ({ avatarPath, link }) => {
	return (
		<Link href={link} className={styles.avatar}>
			<Image src={avatarPath} alt='' width={20} height={20} />
		</Link>
	);
};

export default UserAvatar;
