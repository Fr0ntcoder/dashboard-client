export interface IUser {
	id: number;
	name: string;
	email: string;
	avatarPath: string;
}

export interface IAuthResponse extends IUser {
	user: IUser;
	accessToken: string;
}
