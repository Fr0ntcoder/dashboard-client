import { IconType } from 'react-icons/lib';
import {
	RiDashboard2Line,
	RiFileList3Line,
	RiListUnordered,
	RiMovie2Line
} from 'react-icons/ri';

export interface IMenuItem {
	link: string;
	Icon: IconType;
}

export const menu: IMenuItem[] = [
	{
		link: '/dashboard',
		Icon: RiDashboard2Line
	},
	{
		link: '/movies',
		Icon: RiMovie2Line
	},
	{
		link: '/reviews',
		Icon: RiListUnordered
	},
	{
		link: '/invoices',
		Icon: RiFileList3Line
	}
];
