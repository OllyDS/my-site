import axios from 'axios';
import { useEffect, useState } from 'react';

import { UserInfo } from '../../App.types';
import { CV } from '../../assets/intro-section/CV';
import { Hello } from '../../assets/intro-section/Hello';
import { Information } from '../../assets/intro-section/Information';
import { Intro } from '../../assets/intro-section/Intro';
import { Languages } from '../../assets/intro-section/Languages';
import { VITE_API_URL } from '../../utils/constants';
import { S } from './Home.styles';

type HomePageType = {
    user: UserInfo;
};

const HomePage = ({ user }: HomePageType) => {
    const [displayCV, setDisplayCV] = useState(false);
    const [pdf, setPdf] = useState('');

    /** fetches user data from the API to serve on the UI */
    useEffect(() => {
        const fetchData = async () => {
            // fetch the pdf as a blob
            const res = await axios.get(`${VITE_API_URL}/cv/pdf/`, { responseType: 'blob' });
            // create a file from the blob
            const file = new Blob([res.data], { type: 'application/pdf' });
            // build a URL from the file
            const fileURL = URL.createObjectURL(file);
            // save the url to state
            setPdf(fileURL);
        };

        fetchData();
    }, []);

    return (
        <S.Background onClick={() => displayCV && setDisplayCV(false)}>
            <Hello />
            <Intro
                firstName={user?.first_name}
                currentRole={user?.employment?.['current']?.role}
                city={user?.location?.city}
            />
            <Languages />
            <S.Divider />
            <Information setDisplayCV={setDisplayCV} pdf={pdf} />
            {displayCV && <CV pdf={pdf} />}
        </S.Background>
    );
};

export { HomePage };
