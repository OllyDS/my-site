import { useEffect, useState } from 'react';
import { HomePage } from './pages/home/Home';
import axios from 'axios';
import { UserInfo } from './App.types';
import { VITE_API_URL } from './utils/constants';

const App = () => {
    const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);

    /** fetches user data from the API to serve on the UI */
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${VITE_API_URL}/cv/json/`);
            setUserInfo(res.data.data);
        };

        fetchData();
    }, []);

    return userInfo ? <HomePage user={userInfo} /> : <></>;
};

export { App };
