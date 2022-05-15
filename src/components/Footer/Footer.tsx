import * as React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import packageJson from '../../../package.json';

export const iconButtonA11yProps = {
  rel: 'noopener',
  target: '_blank',
};

interface FooterProps {
  // TODO: Add `data-testid` for all components
  'data-testid'?: string;
}

function Footer(props: FooterProps) {
  const {
    instagram: { href: instagramHref, label: instagramLabel },
    telegram: { href: telegramHref, label: telegramLabel },
    calendly: { href: calendlyHref, label: calendlyLabel },
    fullName,
    github,
  }: Config = React.useContext(AppConfigContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1, marginBottom: 1 }} {...props}>
      <Box>
        <IconButton aria-label={calendlyLabel} href={calendlyHref} color="inherit" {...iconButtonA11yProps}>
          <CalendarMonthIcon />
        </IconButton>
        <IconButton aria-label={instagramLabel} href={instagramHref} color="inherit" {...iconButtonA11yProps}>
          <InstagramIcon />
        </IconButton>
        <IconButton aria-label={telegramLabel} href={telegramHref} color="inherit" {...iconButtonA11yProps}>
          <TelegramIcon />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {fullName} {new Date().getFullYear()}
      </Typography>
      <Link variant="body2" color="text.secondary" href={`${github}/releases/tag/v${packageJson.version}`}>
        {`v${packageJson.version}`}
      </Link>
    </Box>
  );
}

export default Footer;
