import create from 'zustand';
import Cookies from 'js-cookie';
import instance from '@/core/constants/request';
import END_POINTS from '@/core/constants/endpoinsts';

interface LoginState {
    isAuthenticated: boolean;
    loginUser: (username: string, password: string) => Promise<string>;
    logoutUser: () => void;
    token: string | null;
}

const token = Cookies.get('token');
const useLoginStore = create<LoginState>((set, get) => ({

    isAuthenticated: !!token,
    token: null, // Initialize token as null
    loginUser: async (username: string, password: string): Promise<string> => {
        try {
            const response = await instance.post(END_POINTS.login, { username, password });
            const data = response.data;
            console.log(data);

            if (data.token) {
                set({ isAuthenticated: true, token: data.token });
                Cookies.set('token', data.token, { expires: 1 }); // Set cookie for 1 day
                return data.firstName;
            }
            throw new Error("Login failed");
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },

    logoutUser: () => {
        set({ isAuthenticated: false, token: null });
        Cookies.remove('token'); // Remove token from cookies
    },
}));

export default useLoginStore;
