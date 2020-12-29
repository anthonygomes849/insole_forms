import React from 'react';
import {StatusBar} from 'react-native';

// import Amplify, { Auth } from 'aws-amplify';
// import { withAuthenticator } from 'aws-amplify-react-native';

import App from './App';

const Index = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <App />
    </>
  );
};
