import * as React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import { AppConfigContext, Config } from '../../providers/AppConfigProvider';

export const aboutConstants = {
  title: 'Обо мне',
  spell: `ˈkləʊvər`,
};

function About() {
  const {
    instagram: { href: instagramHref, id: instagramId },
    fullName,
  }: Config = React.useContext(AppConfigContext);

  return (
    <>
      {/* TODO: encapsulate it into a separate component */}
      <Typography component="h2" variant="h5">
        {aboutConstants.title}
      </Typography>
      <Typography>Привет! Я - {fullName}.</Typography>
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
        Познакомиться со мной получше вы можете через мой Инстаграм{' '}
        <Link href={instagramHref} target="_blank">
          {instagramId}
        </Link>{' '}
        аккаунт. Там я время от времени выкладываю сториз и посты о себе, своих осознаниях и важных для меня событиях.
      </Typography>
      <Typography>А данный сайт - это площадка для профессионального творчества.</Typography>
      <Typography>Добро пожаловать в гости!</Typography>
    </>
  );
}

export default About;
