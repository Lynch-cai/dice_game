import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFoundScreen = () => {
  let navigate = useNavigate();

  useEffect(() => navigate('/settings'), []);

  return <></>;
};
