import * as React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink as RouterNavLink } from 'react-router-dom';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Link from '@mui/material/Link';

import AlertHelp from '../../components/AlertHelp';
import bookingMetaData from '../Booking/bookingMetaData';
import Heading from '../../components/Heading';
import howToBookMetaData from './howToBookMetaData';
import Image from '../../components/Image';
import Paragraph from '../../components/Paragraph';

function HowToBook() {
  return (
    <>
      <Helmet>
        <title>{howToBookMetaData.title}</title>
      </Helmet>
      <Heading>{howToBookMetaData.heading}</Heading>
      <Alert severity="info" variant="outlined">
        <AlertTitle>Русский язык</AlertTitle>
        Система записи на консультацию находится на стороннем сервисе, который очень простой и понятный, однако этот
        сервис не имеет русского языка. Для тех, кто не говорит по-английски, мы очень постарались перевести на русский
        язык все элементы на страничках, но, к сожалению, на данный момент технически не возможно предоставить 100%
        русскую версию.
      </Alert>
      <Paragraph>
        <strong>Шаг 1</strong>. Перейдите на страницу{' '}
        <Link component={RouterNavLink} to={bookingMetaData.path}>
          {bookingMetaData.heading}
        </Link>
        .
      </Paragraph>

      <Paragraph>
        <strong>Шаг 2</strong>. Выберите консультацию и нажмите на кнопку <i>ВЫБРАТЬ ДАТУ И ВРЕМЯ</i>.
      </Paragraph>

      <Paragraph>
        <strong>Шаг 3</strong>. В открывшемся окне убедитесь, что отображаемое время соответствует вашему местному
        времени. Если это не так, то установите ваш часовой пояс.
      </Paragraph>
      <Image fileName="how-to-book-1" alt="Установка часового пояса" caption="Установка вашего часового пояса" />

      <Paragraph>
        <strong>Шаг 4</strong>. Выберите день.
      </Paragraph>
      <Image fileName="how-to-book-2" alt="Выбор дня" caption="Выбор дня" />

      <Paragraph>
        <strong>Шаг 5</strong>. Выберите время и подтвердите выбранное время нажав на кнопку <i>Confirm</i>.
      </Paragraph>
      <Image fileName="how-to-book-3" alt="Выбор времени" caption="Выбор времени" />
      <Image
        fileName="how-to-book-4"
        alt="Подтверждение выбранного времени"
        caption="Подтверждение выбранного времени"
      />

      <Paragraph>
        <strong>Шаг 6</strong>. Введите свое имя в поле <i>Name</i> [1], электронную почту в поле <i>Email</i> [2] и
        нажмите кнопку <i>Schedule Event</i> [3].
      </Paragraph>
      <Alert severity="warning" variant="outlined">
        <AlertTitle>
          Электронная почта (<i>Email</i>)
        </AlertTitle>
        Пожалуйста, внимательно вводите адрес вашей электронной почты (<i>Email</i>), т.к. на этот адрес мы вам вышлем
        подтверждение записи на консультацию с указанием выбранного дня и времени.
      </Alert>
      <Image
        fileName="how-to-book-5"
        alt="Ввод вашего имени, электронной почты и подтверждение"
        caption="Ввод вашего имени, электронной почты и подтверждение"
      />

      <Paragraph>
        <strong>Шаг 7</strong>. Вы увидите похожую страницу, где будет надпись <i>Confirmed</i> и подробная информация о
        консультации.
      </Paragraph>
      <Image fileName="how-to-book-6" alt="Подтверждение записи" caption="Подтверждение записи" />

      <Paragraph>
        <strong>Шаг 8</strong>. Проверьте входящие сообщения на вашей электронную почте. Вам должно прийти сообщение с
        подтверждением записи в течение 5-10 минут (иногда сразу).
      </Paragraph>
      <Alert severity="warning" variant="outlined">
        <AlertTitle>
          Папка <i>Спам</i>
        </AlertTitle>
        Если в папке <i>Входящие</i> ничего нет, попробуйте проверить папку <i>Спам</i>. Иногда, сообщение может быть
        там.
      </Alert>
      <Paragraph>Вам придет похожее сообщение с подтверждением записи на консультацию:</Paragraph>
      <Image
        fileName="how-to-book-7"
        alt="Сообщение с подтверждением записи на консультацию"
        caption="Сообщение с подтверждением записи на консультацию"
      />
      <Paragraph>
        В полученном сообщении вы сможете увидеть следующее: название консультации [1] (<i>Event Name</i>), краткое
        описание консультации [2], кнопку для подключения к консультации [3] (<i>Join with Google Meet</i>), дату и
        время проведения консультации [6], а также ссылку для отмены [4] (<i>Cancel</i>) и переноса консультации на
        другое время [5] (<i>Reschedule</i>).
      </Paragraph>
      <Image
        fileName="how-to-book-8"
        alt="Важные элементы в сообщении с подтверждением записи на консультацию"
        caption="Важные элементы в сообщении с подтверждением записи на консультацию"
      />

      <Paragraph>Поздравляем, у вас получилось 🎉</Paragraph>
      <Paragraph>Сохраните себе в календаре дату и время консультации.</Paragraph>
      <Paragraph>До встречи!</Paragraph>
      <AlertHelp />
    </>
  );
}

export default HowToBook;