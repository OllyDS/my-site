import { UserInfo } from '../../App.types';
import { Hello } from '../../assets/Hello';
import { Intro } from '../../assets/Intro';

type HomePageType = {
    user: UserInfo;
};

const HomePage = ({ user }: HomePageType) => {
    return (
        <>
            <Hello />
            <Intro
                firstName={user?.first_name}
                currentRole={user?.employment?.['current']?.role}
                city={user?.location?.city}
            />
        </>
    );
};

export { HomePage };
