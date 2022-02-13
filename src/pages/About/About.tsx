import * as React from 'react';
import { Helmet } from 'react-helmet';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

// TODO: It would be great to add a pic here
function About() {
  return (
    <>
      <Helmet>
        <title>Обо мне</title>
      </Helmet>
      <Typography variant="h4" component="h1" gutterBottom>
        Обо мне
      </Typography>
      <Typography gutterBottom>Привет! Я - Дарья Кловер.</Typography>
      <Typography gutterBottom>
        Кловер - мой псевдоним. От английского <Typography component="i">ˈkləʊvər</Typography> - клевер 🍀
      </Typography>
      <Typography gutterBottom>
        Мне очень нравится идея передачи смыслов через образы. В этом есть что-то увлекательное, интересное и
        таинственное. У клевера есть много значений. Для меня - это олицетворение баланса и гармонии. По-моему, значение
        этого символа очень хорошо отражает меня и то, к ему я стремлюсь, во что верю, чем занималась и продолжаю
        заниматься.
      </Typography>
      <Typography gutterBottom>
        В прошлом я врач терапевт, врач общей практики, массажист и косметик. Я знаю не понаслышке, что для сохранения
        здоровья нужно не только владеть нужной информацией, но и уметь разумно ее применить.
      </Typography>
      <Typography gutterBottom>
        Сейчас я учусь на health коуча. Суть моей профессии - помочь человеку найти баланс. Баланс в его физическом,
        эмоциональном, ментальном и духовном здоровье.
      </Typography>
      <Typography gutterBottom>
        Моя роль как health коуча - помочь человеку уверенно пройти его путь к оздоровлению, создавая благоприятную
        атмосферу для изменений, снабжая необходимыми знаниями и инструментами для приобретения, сохранения и управления
        своим здоровьем.
      </Typography>
      <Typography gutterBottom>
        Познакомиться со мной получше вы можете через мой Инстаграм{' '}
        <Link href="https://www.instagram.com/daria.klover">@daria.klover</Link> аккаунт. Там я время от времени
        выкладываю сториз и посты о себе, своих осознаниях и важных для меня событиях.
      </Typography>
      <Typography gutterBottom>А данный сайт - это площадка для профессионального творчества.</Typography>
      <Typography gutterBottom>Добро пожаловать в гости!</Typography>
    </>
  );
}

export default About;
