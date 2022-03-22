import React, {useState} from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Login from './src/pages/Login';
import Prompt from './src/pages/Prompt';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentPage, setCurrentPage] = useState('LOGIN');

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {currentPage === 'LOGIN' ? <Login onLogin={() => setCurrentPage('PROMPT')} /> : <Prompt />}
    </SafeAreaView>
  );
};

export default App;
