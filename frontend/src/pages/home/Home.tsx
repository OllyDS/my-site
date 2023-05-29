import { useState } from 'react';

import { UserInfo } from '../../App.types';
import { CV } from '../../assets/intro-section/CV';
import { Hello } from '../../assets/intro-section/Hello';
import { Information } from '../../assets/intro-section/Information';
import { Intro } from '../../assets/intro-section/Intro';
import { Languages } from '../../assets/intro-section/Languages';
import { S } from './Home.styles';

type HomePageType = {
    user: UserInfo;
};

const HomePage = ({ user }: HomePageType) => {
    const [displayCV, setDisplayCV] = useState(false);

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
            <Information setDisplayCV={setDisplayCV} />
            {displayCV && <CV />}
        </S.Background>
    );
};

export { HomePage };
