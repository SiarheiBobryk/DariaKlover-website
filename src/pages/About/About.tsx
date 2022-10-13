import * as React from 'react';
import { Helmet } from 'react-helmet';

import Typography from '@mui/material/Typography';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Heading from '../../components/Heading';
import LinkBlank from '../../components/LinkBlank';
import Paragraph from '../../components/Paragraph';
import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import aboutMetaData from './aboutMetaData';

export const aboutConstants = {
  spell: `ˈkləʊvər`,
};

// TODO: It would be great to add a pic here
function About() {
  const {
    instagram: { href: instagramHref, id: instagramId },
    fullName,
  }: Config = React.useContext(AppConfigContext);

  return (
    <>
      <Helmet>
        <title>{aboutMetaData.title}</title>
      </Helmet>
      <Heading>{aboutMetaData.heading}</Heading>
      <Paragraph>Привет! Я - {fullName}.</Paragraph>
      <Alert severity="info">
        <AlertTitle>Мое фото</AlertTitle>
        Поверьте, это сложно подобрать подходящее фото для этой страницы, но мы работаем над этим и скоро исправимся 🙂
      </Alert>
      <Paragraph>
        Кловер - мой псевдоним. От английского <Typography component="i">{aboutConstants.spell}</Typography> - клевер 🍀
      </Paragraph>
      <Paragraph>
        Мне очень нравится идея передачи смыслов через образы. В этом есть что-то увлекательное, интересное и
        таинственное. У клевера есть много значений. Для меня - это олицетворение баланса и гармонии. По-моему, значение
        этого символа очень хорошо отражает меня и то, к ему я стремлюсь, во что верю, чем занималась и продолжаю
        заниматься.
      </Paragraph>
      <Paragraph>
        В прошлом я врач терапевт, врач общей практики, массажист и косметик. Я знаю не понаслышке, что для сохранения
        здоровья нужно не только владеть нужной информацией, но и уметь разумно ее применить.
      </Paragraph>
      <Paragraph>
        Сейчас я учусь на health коуча. Суть моей профессии - помочь человеку найти баланс. Баланс в его физическом,
        эмоциональном, ментальном и духовном здоровье.
      </Paragraph>
      <Paragraph>
        Моя роль как health коуча - помочь человеку уверенно пройти его путь к оздоровлению, создавая благоприятную
        атмосферу для изменений, снабжая необходимыми знаниями и инструментами для приобретения, сохранения и управления
        своим здоровьем.
      </Paragraph>
      <Paragraph>
        Познакомиться со мной получше вы можете через мой Инстаграм{' '}
        <LinkBlank href={instagramHref}>{instagramId}</LinkBlank>. Там я время от времени выкладываю сториз и посты о
        себе, своих осознаниях и важных для меня событиях.
      </Paragraph>
      <Paragraph>А данный сайт - это площадка для профессионального творчества.</Paragraph>
      <Paragraph>Добро пожаловать в гости!</Paragraph>
    </>
  );
}

export default About;
