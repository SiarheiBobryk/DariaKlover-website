import * as React from 'react';

import Link from '@mui/material/Link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';

function Introduction() {
  return (
    <>
      <Heading>Кто я и что я делаю</Heading>
      <Paragraph>Всем привет, я - Дарья Кловер!</Paragraph>
      <Paragraph>
        Я прохожу обучение в{' '}
        <Link
          href="https://uom.education/university"
          sx={{ display: 'inline-flex', alignItems: 'center', marginBottom: 0 }}
          rel="noopener"
        >
          Университете образовательной медицины (УОМ) <OpenInNewIcon fontSize="small" />
        </Link>{' '}
        {/* TODO: The better (React) alternative for `i` here? */}и <i>PreventAge LifeStyle School</i> на интегративного
        health-коуча - специалиста по модификации образа жизни и немедикаментозному оздоровлению.
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
        Одна из моих главных задач - осознание клиентом того, <strong>что, как и почему нужно делать</strong>, чтобы
        достичь желаемого результата.
      </Paragraph>
    </>
  );
}

export default Introduction;
