import * as React from 'react';
import { Helmet } from 'react-helmet';

import Introduction from '../../posts/Introduction/Introduction';

function Main() {
  return (
    <>
      <Helmet>
        <title>Главная страница</title>
      </Helmet>

      <Introduction />
    </>
  );
}

export default Main;
