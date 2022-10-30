import { UserInfo } from '../../App.types';
import { Hello } from '../../assets/Hello';
import { Intro } from '../../assets/Intro';
import { style } from './Home.styles';

type HomePageType = {
    user: UserInfo;
};

const HomePage = ({ user }: HomePageType) => {
    return (
        <div className={style.background}>
            <Hello />
            <Intro
                firstName={user?.first_name}
                currentRole={user?.employment?.['current']?.role}
                city={user?.location?.city}
            />
        </div>
    );
};

export { HomePage };
