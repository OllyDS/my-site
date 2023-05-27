import axios from 'axios';
import { useEffect, useState } from 'react';
import { VITE_API_URL } from '../../utils/constants';
import { S } from './CV.styles';

const CV = () => {
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
        <S.Container>
            <object data={pdf} type="application/pdf" width="100%" height="100%">
                <p>Oops something went wrong!</p>
             </object>
        </S.Container>
    );
};

export { CV };
