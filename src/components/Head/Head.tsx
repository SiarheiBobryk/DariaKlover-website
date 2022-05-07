import * as React from 'react';
import { Helmet } from 'react-helmet';

import { Theme, useTheme } from '@mui/material/styles';

import { AppConfigContext, Config } from '../../providers/AppConfigProvider';

// TODO: Forward ref for the main components (where it's necessary)
function Head() {
  const theme: Theme = useTheme();
  const { fullName, language, description, keywords, ...configs }: Config = React.useContext(AppConfigContext);

  return (
    // NOTE: We set the actual HTML `title` in the body of the `App` children
    <Helmet titleTemplate={`%s | ${fullName}`}>
      <html lang={language} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content={theme.palette.background.default} />
      <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
      <link rel="manifest" href="/icon/site.webmanifest" />
      <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="icon" href="/icon/favicon.ico" />
      <meta name="msapplication-TileColor" content={configs['msapplication-TileColor']} />
      <meta name="msapplication-config" content="/icon/browserconfig.xml" />
    </Helmet>
  );
}

export default Head;
