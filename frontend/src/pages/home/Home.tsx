import { Hello } from '../../assets/Hello';
import { Intro } from '../../assets/Intro';

type HomePageType = {
  user: {
    first_name: string;
    location: {
      city: string;
      country: string;
    };
    current_role: string;
  };
};

const HomePage = ({ user }: HomePageType) => {
  return (
    <>
      <Hello />
      <Intro
        firstName={user.first_name}
        currentRole={user.current_role}
        city={user.location.city}
      />
    </>
  );
};

export { HomePage };
