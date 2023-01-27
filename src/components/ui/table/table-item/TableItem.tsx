import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import {
	HiOutlineExternalLink,
	HiOutlinePencil,
	HiOutlineTrash
} from 'react-icons/hi';

import { ITableItem } from '@/components/ui/table/table.interface';

import styles from './TableItem.module.scss';

const TableItem: FC<{ item: ITableItem }> = ({ item }) => {
	return (
		<div className={styles.root}>
			<div className={styles.id}>{item.id}</div>
			{item.image && (
				<div className={styles.img}>
					<Image src={item.image} alt={item.name} width={50} height={50} />
				</div>
			)}
			<div className={styles.name}>{item.name}</div>
			<div className={styles.link}>
				<Link href={item.viewLink} rel='noreferrer' target='_blank'>
					<HiOutlineExternalLink />
				</Link>
			</div>
			{item.editLink && (
				<div className={styles.link}>
					<Link href={item.editLink}>
						<HiOutlinePencil />
					</Link>
				</div>
			)}
			<div className={styles.link}>
				<button onClick={item.removeHandler}>
					<HiOutlineTrash />
				</button>
			</div>
		</div>
	);
};

export default TableItem;
