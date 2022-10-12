import { useEffect, useState } from 'react';
import { HomePage } from './pages/home/Home';
import axios from 'axios';
import { UserInfo } from './App.types';

const { VITE_API_URL } = import.meta.env;

const App = () => {
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

    /** fetches user data from the API to serve on the UI */
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${VITE_API_URL}/cv/`);
            setUserInfo(res.data.data);
        };

        fetchData();
    }, []);

    return userInfo ? <HomePage user={userInfo} /> : <></>;
};

export { App };
