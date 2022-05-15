import * as React from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import LinkBlank from '../../components/LinkBlank';

export interface BookingProps {
  heading?: string;
}

function Booking(props: BookingProps) {
  const { heading } = props;
  const {
    calendly: { label: calendlyLabel, href: calendlyHref },
  }: Config = React.useContext(AppConfigContext);

  return (
    <>
      <Heading>{heading}</Heading>
      <Paragraph>
        Используйте{' '}
        <LinkBlank sx={{ textTransform: 'lowercase' }} href={calendlyHref}>
          {calendlyLabel}
        </LinkBlank>{' '}
        для ознакомления с расписанием и для записи на консультацию.
      </Paragraph>
      <Alert sx={{ my: 1 }} severity="warning">
        <AlertTitle>Система тестируется</AlertTitle>
        Обращаем ваше внимание, что система записи на консультацию находится в режиме тестирования и может быть
        нестабильна.
      </Alert>
      <Alert sx={{ my: 1 }} severity="info">
        <AlertTitle>Русский язык</AlertTitle>
        Cистема записи на консультацию находится на стороннем сервисе, который очень простой и понятный, однако этот
        сервис не имеет русского языка. Для тех, кто не говорит по-английски, мы очень постарались перевести на русский
        язык все элементы на страничках, но, к сожалению, на данный момент технически не возможно предоставить 100%
        русскую версию, поэтому мы активно работаем над разработкой простой и понятной инструкции по использованию,
        которая скоро будет опубликована на этой странице. Спасибо за ваше терпение и понимание 😇
      </Alert>
    </>
  );
}

export default Booking;
