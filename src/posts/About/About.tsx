import * as React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const aboutConstants = {
  title: 'Обо мне',
  spell: `ˈkləʊvər`,
  instagramLink: {
    // TODO: Move the urls into a global constants
    props: {
      href: 'https://www.instagram.com/daria.klover',
      target: '_blank',
    },
    children: '@daria.klover',
  },
};

function LinkWithSpaces() {
  return (
    <>
      {' '}
      <Link {...aboutConstants.instagramLink.props}>{aboutConstants.instagramLink.children}</Link>{' '}
    </>
  );
}

function About() {
  return (
    <>
      {/* TODO: encapsulate it into a separate component */}
      <Typography component="h2" variant="h5">
        {aboutConstants.title}
      </Typography>
      {/* TODO: Use a constant here */}
      <Typography>Привет! Я - Дарья Кловер.</Typography>
      <Typography>
        Кловер - мой псевдоним. От английского <Typography component="i">{aboutConstants.spell}</Typography> - клевер 🍀
      </Typography>
      <Typography>
        Мне очень нравится идея передачи смыслов через образы. В этом есть что-то увлекательное, интересное и
        таинственное. У клевера есть много значений. Для меня - это олицетворение баланса и гармонии. По-моему, значение
        этого символа очень хорошо отражает меня и то, к ему я стремлюсь, во что верю, чем занималась и продолжаю
        заниматься.
      </Typography>
      <Typography>
        В прошлом я врач терапевт, врач общей практики, массажист и косметик. Я знаю не понаслышке, что для сохранения
        здоровья нужно не только владеть нужной информацией, но и уметь разумно ее применить.
      </Typography>
      <Typography>
        Сейчас я учусь на health коуча. Суть моей профессии - помочь человеку найти баланс. Баланс в его физическом,
        эмоциональном, ментальном и духовном здоровье.
      </Typography>
      <Typography>
        Моя роль как health коуча - помочь человеку уверенно пройти его путь к оздоровлению, создавая благоприятную
        атмосферу для изменений, снабжая необходимыми знаниями и инструментами для приобретения, сохранения и управления
        своим здоровьем.
      </Typography>
      <Typography>
        Познакомиться со мной получше вы можете через мой Инстаграм
        <LinkWithSpaces /> аккаунт. Там я время от времени выкладываю сториз и посты о себе, своих осознаниях и важных
        для меня событиях.
      </Typography>
      <Typography>А данный сайт - это площадка для профессионального творчества.</Typography>
      <Typography>Добро пожаловать в гости!</Typography>
    </>
  );
}

export default About;
