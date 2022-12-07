import {
	IContext,
	TypeUserState
} from 'providers/auth-provider/auth.interface';
import { PropsWithChildren, createContext, useState } from 'react';
import { FC } from 'react';

export const AuthContext = createContext({} as IContext);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<TypeUserState>(null);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
