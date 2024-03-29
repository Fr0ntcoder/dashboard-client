import { axiosClassic } from 'api/interceptor';

import { IAuthResponse } from '@/shared/interfaces/user.interface';

import { saveToStorage } from '@/services/auth/auth.helper';

import { removeTokenFromStorage } from './auth.helper';

export const AuthService = {
	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>('/auth/login', {
			email,
			password
		});

		if (response.data.accessToken) saveToStorage(response.data);

		return response.data;
	},

	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthResponse>('/auth/register', {
			email,
			password
		});

		if (response.data.accessToken) saveToStorage(response.data);

		return response.data;
	},

	logout() {
		removeTokenFromStorage();
		localStorage.removeItem('user');
	}
};
