import * as React from 'react';

import Link from '@mui/material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';

export interface BookingProps {
  heading?: string;
}

function Booking(props: BookingProps) {
  const { heading } = props;
  const {
    calendly: { label: calendlyLabel, href: calendlyHref },
  }: Config = React.useContext(AppConfigContext);
  const [openInfo, setOpenInfo] = React.useState(true);
  const [openWarning, setOpenWarning] = React.useState(true);

  const onCloseButtonInfoClick = React.useCallback(
    function handleOnClick() {
      setOpenInfo(false);
    },
    [setOpenInfo],
  );

  const onCloseButtonWarningClick = React.useCallback(
    function handleOnClick() {
      setOpenWarning(false);
    },
    [setOpenWarning],
  );

  return (
    <>
      <Heading>{heading}</Heading>
      <Paragraph>
        Используйте{' '}
        <Link sx={{ textTransform: 'lowercase' }} href={calendlyHref} target="_blank">
          {calendlyLabel} <OpenInNewIcon fontSize="small" sx={{ verticalAlign: 'middle' }} />
        </Link>{' '}
        для ознакомления с расписанием и для записи на консультацию.
      </Paragraph>
      <Collapse sx={{ my: 1 }} in={openWarning}>
        <Alert
          severity="warning"
          action={
            <IconButton aria-label="Закрыть" onClick={onCloseButtonWarningClick}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Система тестируется</AlertTitle>
          Обращаем ваше внимание, что система записи на консультацию находится в режиме тестирования и может быть
          нестабильна.
        </Alert>
      </Collapse>
      <Collapse sx={{ my: 1 }} in={openInfo}>
        <Alert
          severity="info"
          action={
            <IconButton aria-label="Закрыть" onClick={onCloseButtonInfoClick}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Русский язык</AlertTitle>
          Cистема записи на консультацию находится на стороннем сервисе <i>Calendly</i>, который очень простой и
          понятный, однако этот сервис не имеет русского языка. Для тех, кто не говорит по-английски, мы очень
          постарались перевести на русский язык все элементы на страничках, но, к сожалению, на данный момент технически
          не возможно предоставить 100% русскую версию, поэтому мы активно работаем над разработкой простой и понятной
          инструкции по использованию, которая скоро будет опубликована на этой странице. Спасибо за ваше терпение и
          понимание 😇
        </Alert>
      </Collapse>
    </>
  );
}

export default Booking;
