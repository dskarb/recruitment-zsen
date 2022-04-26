import { getToken } from 'commons/auth/tokens';
import { Navigate, RouteProps, useNavigate } from 'react-router-dom';
import { Context } from 'commons/context/Context';
import { useContext, useEffect } from 'react';
import axios from 'axios';

const PrivateRoute = ({ children }: RouteProps) => {
  let navigate = useNavigate();
  const token = getToken();
  const { setUser } = useContext(Context);

  return token ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
