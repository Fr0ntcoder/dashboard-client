import { FC } from 'react';

import Loader from '@/components/ui/loader/Loader';
import TableItem from '@/components/ui/table/table-item/TableItem';
import { ITableItem } from '@/components/ui/table/table.interface';

import styles from './Table.module.scss';

const Table: FC<{ items: ITableItem[]; isLoading?: boolean }> = ({
	items,
	isLoading
}) => {
	return (
		<div className={styles.root}>
			{isLoading ? (
				<Loader count={3} />
			) : items?.length ? (
				items.map((item) => <TableItem item={item} key={item.id} />)
			) : (
				<div>Не найдено</div>
			)}
		</div>
	);
};

export default Table;
