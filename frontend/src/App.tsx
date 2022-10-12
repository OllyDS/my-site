import { useState } from 'react';
import { HomePage } from './pages/home/Home';

const App = () => {
  // replace with api call from backend.
  const [userInfo] = useState({
    first_name: 'oliver',
    location: {
      city: 'london',
      country: 'UK',
    },
    current_role: 'full-stack engineer',
  });

  return <HomePage user={userInfo} />;
};

export { App };
