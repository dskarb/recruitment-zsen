import React, { useState } from 'react';
import LoginForm from '../LoginForm';
import { Context, IContext, defaultState } from 'commons/context/Context';
import AuthWrapper from 'api/api';
import { UserType } from 'types/types';

const App = () => {
  const [user, setUser] = useState<IContext['user']>(defaultState.user);

  const handleSetUser = (user: UserType) => {
    setUser(user);
  };

  return (
    <Context.Provider value={{ user: user, setUser: handleSetUser }}>
      <AuthWrapper>
        <div className="App">
          <LoginForm />
        </div>
      </AuthWrapper>
    </Context.Provider>
  );
};

export default App;
