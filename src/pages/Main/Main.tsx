import * as React from 'react';
import { Helmet } from 'react-helmet';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { styled } from '@mui/material/styles';

import Heading from '../../components/Heading';
import mainMetaData from './mainMetaData';
import Paragraph from '../../components/Paragraph';

export const Strong = styled('strong')(function styleStrong() {
  return {
    textDecoration: 'underline',
  };
});

function Main() {
  return (
    <>
      <Helmet>
        <title>{mainMetaData.title}</title>
      </Helmet>
      <Heading>{mainMetaData.heading}</Heading>
      <Paragraph>Всем привет!</Paragraph>
      {/* TODO: Use a constant here */}
      <Paragraph>
        Я Дарья Кловер, дипломированный health-коуч - специалист по здоровому образу жизни и немедикаментозному
        оздоровлению.
      </Paragraph>
      <Paragraph>
        Я помогаю своим клиентам вести здоровый образ жизни и предотвратить появление хронических заболеваний, а также
        повысить качество жизни, улучшить самочувствие, делюсь рекомендациями для восстановления и поддержания здоровья.
      </Paragraph>

      <Paragraph>
        Я разбираю запрос клиента с разных сторон, что помогает увидеть полную картину конкретной ситуации и ее причины.
        Я использую различные подходы и инструменты, чтобы помочь проработать эти причины и придти к решению запроса
        клиента.
      </Paragraph>

      {/* TODO: The better (React) alternative for `strong` here? */}
      <Paragraph>
        Одна из моих главных задач - осознание клиентом того, <Strong>что, как и почему нужно делать</Strong>, чтобы
        достичь желаемого результата.
      </Paragraph>
      <Alert severity="info">
        <AlertTitle>Ведутся работы</AlertTitle>В связи с тем, что на сайте ведутся активные работы, что-то может
        отсутствовать, работать не стабильно или вовсе не работать (мало верояно, но все-таки возможно). Спасибо за
        понимание 😇
      </Alert>
    </>
  );
}

export default Main;
