import { Footer, Screen } from '@cdiscount/backoffice-ui';
import React from 'react';

import HomeNavigation from '../../components/HomeNavigation';
import TitleBar from '../../components/TitleBar';

function Home() {
  return (
    <Screen titlebar={<TitleBar title="Accueil" />} bottombar={<Footer />}>
      <HomeNavigation />
    </Screen>
  );
}

export default Home;
