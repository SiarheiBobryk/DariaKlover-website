import * as React from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { AppConfigContext, Config } from '../../providers/AppConfigProvider';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';

export const aboutConstants = {
  spell: `ˈkləʊvər`,
};

export interface AboutProps {
  heading?: string;
}

function About(props: AboutProps) {
  const { heading } = props;
  const {
    instagram: { href: instagramHref, id: instagramId },
    fullName,
  }: Config = React.useContext(AppConfigContext);

  return (
    <>
      <Heading>{heading}</Heading>
      <Paragraph>Привет! Я - {fullName}.</Paragraph>
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
        <Link href={instagramHref} target="_blank">
          {instagramId} <OpenInNewIcon fontSize="small" sx={{ verticalAlign: 'middle' }} />
        </Link>
        . Там я время от времени выкладываю сториз и посты о себе, своих осознаниях и важных для меня событиях.
      </Paragraph>
      <Paragraph>А данный сайт - это площадка для профессионального творчества.</Paragraph>
      <Paragraph>Добро пожаловать в гости!</Paragraph>
    </>
  );
}

export default About;
