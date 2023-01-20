import Image from 'next/image';
import { FC } from 'react';

import { IReview } from '@/shared/interfaces/reviews.interface';

import styles from './ReviewItem.module.scss';

const ReviewItem: FC<{ review: IReview }> = ({
	review: { description, id, movie, user }
}) => {
	return (
		<div className={styles.item}>
			{user && (
				<div className={styles.author}>
					<Image
						className={styles.img}
						src={user.avatarPath}
						alt={user.name}
						width={30}
						height={30}
					/>
					<h4 className={styles.name}>{user.name}</h4>
				</div>
			)}
			<article>{description}</article>
		</div>
	);
};

export default ReviewItem;
