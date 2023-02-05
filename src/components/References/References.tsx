import * as React from 'react';

import { styled, useTheme } from '@mui/material/styles';
import SkeletonMui from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper';

import Heading from '../Heading';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

export const PUBLIC_PATH = 'responsive_images';

export interface ReferenceData {
  src: string;
  srcSet: string;
  alt: string;
  title: string;
  description: string;
}

export const references: ReferenceData[] = [
  {
    src: `${PUBLIC_PATH}/reference_001.jpg`,
    srcSet: `${PUBLIC_PATH}/reference_001.webp`,
    alt: 'Отзыв 1',
    title: 'Помогаю найти мотивацию',

    description: `Слушай,я хотела ещё раз сказать спасибо! У меня сейчас такое хорошее настроение,я не знаю,как тебе объяснить даже. Какое то ощущение реальности. Тоесть того,чтовсе реально.это очень интересная практика. Я очень надеюсь,что не нагрузила тебя своими вопросами. Ещё раз спасибо. Я бы очень хотела работать дальше.`,
  },
  {
    src: `${PUBLIC_PATH}/reference_002.jpg`,
    srcSet: `${PUBLIC_PATH}/reference_002.webp`,
    alt: 'Отзыв 2',
    title: 'Помогаю включить желаемое состояние',

    description: `Даша, спасибо тебе за коуч-сессию! Это было полезно для меня. Ты помогла мне вспомнить это базовое состояние спокойствия, неспешности, которого часто не хватает в жизни. Теперь я вовремя останавливаю режим «белка в колесе» и выделяю время на себя и свои дела. Мне понравилось задание, где нужно написать 20 дел, которые будут поддерживать меня в желаемом состоянии, свежести, спокойствия, радости. Это как база для других свершений в моей жизни). Еще отметила, что ты располагаешь к себе, это 100%!`,
  },
  {
    src: `${PUBLIC_PATH}/reference_003.jpg`,
    srcSet: `${PUBLIC_PATH}/reference_003.webp`,
    alt: 'Отзыв 3',
    title: 'Помогаю наладить пищевое поведение',

    description: `Привет 🤗 Да, конечно 👌🏻 За время работы с тобой я пришла к принятию своего текущего веса, рациона питания. Все стабилизировалось и меня уже не штормит то в переедание, то в голодание. Сладкое не переедаю, разрешаю себе в умеренных количествах. И теперь знаю набор инструментов по регулированию тяги к сладкому и контролю рациона✨ Благодарю за столь ценную информацию, мягкое ведение и понимание🌹`,
  },
  {
    src: `${PUBLIC_PATH}/reference_004.jpg`,
    srcSet: `${PUBLIC_PATH}/reference_004.webp`,
    alt: 'Отзыв 4',
    title: 'Помогаю в освоении полезных привычек',

    description: `Даша, большое спасибо за медитацию с едой. Прекрасная практика, которая позволила замедлиться и раскрыть более полно вкус любимой еды (от арамота до послевкусия). А самое главное, понять, что для удовлетворения достаточно съесть совсем чуть-чуть и получить при этом не меньше удовольствия. Очень понравилось 🥰`,
  },
  {
    src: `${PUBLIC_PATH}/reference_005.jpg`,
    srcSet: `${PUBLIC_PATH}/reference_005.webp`,
    alt: 'Отзыв 5',
    title: 'Помогаю определить истинные цели',

    description: `Спасибо большое, Дарья,за профессиональный и оптимистичный подход. ❤️🙏 Поняла, что нет нерешаемых проблем, и что важно выстроить свой день и свою жизнь максимально полезно и со здоровыми привычками, поняла, что на уровень жизни и счастья влияют и атмосфера места, где живешь, и окружение, и твоя самореализация и присутствие вдохновляющих людей, и выстраивание здоровых личных границ. Спасибо за наводящие вопросы, которые глубже помогли увидеть себя и цель, куда двигаться 💛🙏`,
  },
  {
    src: `${PUBLIC_PATH}/reference_006.jpg`,
    srcSet: `${PUBLIC_PATH}/reference_006.webp`,
    alt: 'Отзыв 6',
    title: 'Помогаю расставить приоритеты',

    description: `Даша, благодарю тебя за консультацию. Она прошла легко и непринуждённо. В очередной раз пришло осознание, что надо не только знать, но и делать. А за счёт расставленных акцентов и подведённых итогов стало ясно, какие шаги важны для поддержания ресурсного потенциала и здоровья. Спасибо ❤️`,
  },
  {
    src: `${PUBLIC_PATH}/reference_007.jpg`,
    srcSet: `${PUBLIC_PATH}/reference_007.webp`,
    alt: 'Отзыв 7',
    title: 'Помогаю обрести душевный покой',

    description: `Встреча мне дала чувство умиротворения, спокойствия, чувство, когда не хочется никуда спешить, чувство небольшого понимания , что мне нужно и как я могу постепенно к этому идти`,
  },
  {
    src: `${PUBLIC_PATH}/reference_008.jpg`,
    srcSet: `${PUBLIC_PATH}/reference_008.webp`,
    alt: 'Отзыв 8',
    title: 'Помогаю понять себя и свое тело',

    description: `Положительные изменения: Понемногу стала более осознанно питаться , отслеживать голод и насыщение, понимать по какой причине я ем, даже когда не хочется, осознавать, что в этом нет никакого смысла на данный момент`,
  },
  {
    src: `${PUBLIC_PATH}/reference_009.jpg`,
    srcSet: `${PUBLIC_PATH}/reference_009.webp`,
    alt: 'Отзыв 9',
    title: 'Помогаю найти в себе силы',
    description: `благодарю! очень много благодарю что ви справились со мною лучше чем в етом ролике`,
  },
  {
    src: `${PUBLIC_PATH}/reference_010.png`,
    srcSet: `${PUBLIC_PATH}/reference_010.webp`,
    alt: 'Отзыв 10',
    title: 'Помогаю ощутить прилив сил для новых свершений',

    description: `Даша, по прошествии уже почти трех месяцев хочу вновь поблагодарить тебя за первый в моей жизни коучинг! Я, честно говоря, не ожидала, что его результат будет для меня настолько весомым. Конечно, я надеялась и верила, что итог будет положительным, но не могла предполагать, что именно телесно почувствую настолько яркий приток энергии! Причем в теле ощущение прилива сохранялось не час-два, а несколько дней, а затем трансформировалось в очень насыщенное воспоминание, которое, как теперь вижу, стало для меня своеобразным индикатором прилива энергии в других практиках и ситуациях: как только это ощущение возвращается, я знаю -всё сделано правильно, я иду верным путём. Я благодарю тебя за помощь в решении вопроса, с которым я к тебе обратилась, потому что мой запрос был удовлетворен на 100%. В то же время, благодаря ясности в этой сфере я стала четче видеть`,
  },
  {
    src: `${PUBLIC_PATH}/reference_011.png`,
    srcSet: `${PUBLIC_PATH}/reference_011.webp`,
    alt: 'Отзыв 11',
    title: 'Помогаю вернуться к себе',

    description: `Признаюсь честно: изначально я недооценивала ценность коучинга и не особенно верила, что за один час сессии можно всерьез измениться. Но теперь я уже ЗНАЮ, что это возможно и это действительно ценный инструмент. И что важно, я не ощущаю желания бежать к тебе вновь и вновь за решением очередных проблем. Наоборот -хочется прислушаться к себе, четко сформировать свой истинный вопрос, а потом внимательно услышать ответ в себе самой. А если не получится - я знаю, кто мне бережно поможет вернуться к себе 😉`,
  },
  {
    src: `${PUBLIC_PATH}/reference_012.png`,
    srcSet: `${PUBLIC_PATH}/reference_012.webp`,
    alt: 'Отзыв 12',
    title: 'Помогаю перестроить мышление',

    description: `ты в данном случае, помогла мне перестроить, мое воображение в позитивную сторону. Как ты сказала тогда, что я сам это сделал, возможно, но, до разговора с тобой, я не мог поставить себя на хороший лад и постоянно перебивался сомнениями`,
  },
  {
    src: `${PUBLIC_PATH}/reference_013.png`,
    srcSet: `${PUBLIC_PATH}/reference_013.webp`,
    alt: 'Отзыв 13',
    title: 'Помогаю взглянуть на ситуацию под другим углом',

    description: `Даша, спасибо большое за коуч-сессию! Запрос был на то, как действовать из радости, а не из чувства "должен". По итогу сессии вывели формулу-"Давай попробуем пуститься в это приключение!"Еще на сессии почувствовала прилив сил и вдохновения, как будто избавилась от тяжелого груза, поняла, что подход к жизни может быть совсем другой-легкий и из позиции исследователя) началась трансформация, которая происходит до сих пор 🧡 🙏`,
  },
  {
    src: `${PUBLIC_PATH}/reference_014.png`,
    srcSet: `${PUBLIC_PATH}/reference_014.webp`,
    alt: 'Отзыв 14',
    title: 'Помогаю принять решение и перестать переживать',

    description: `Наши встречи очень важные для меня - каждый раз я хочу поделиться всем с тобой, очень хочу узнать твое мнение, очень ценю твои рекомендации и стараюсь применять. Я ощущаю твою большую заботу, и в голосе, и в поведении видно твое желание помочь улучшить мое здоровье. Ты хорошо анализируешь разные ситуации, стараешься понять, что случилось, а также помогаешь мне разобраться с моими эмоциями и лучше понять эмоции других людей. Думаю, это очень трудно и восхищаюсь твоим профессионализмом. Ты такая молодая, а с таким опытом во взаимоотношениях. Ты задаёшь мне такие вопросы, которые помогают мне принять решение. После чего у меня возникает ощущение, что это то, что нужно было и я больше не переживаю и не думаю об этом. Если перед встречами меня одолевают сомнения, то после наших встреч я чувствую уверенность! Иногда мне трудно сказать что я хочу по-русски, но ты меня понимаешь и мы продолжаем. С тобой комфортно.`,
  },
];

export const Img = styled('img')(function styleImg({ theme }) {
  return {
    borderRadius: theme.spacing(1),
  };
});

export const Skeleton = styled(SkeletonMui)(function styleSkeleton({ theme }) {
  return {
    position: 'absolute',
    borderRadius: theme.spacing(1),
  };
});

export interface ReferencesProps {
  heading?: string;
}

export interface SwiperClass {
  activeIndex: number;
}

function References(props: ReferencesProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const { heading } = props;
  const height = 541;
  const width = 250;
  const appTheme = useTheme();

  const handleOnSlideChange = React.useCallback(
    function handleOnSlideChange(swiper: SwiperClass) {
      const { activeIndex } = swiper;
      setCurrentSlideIndex(Number(activeIndex));
    },
    [setCurrentSlideIndex],
  );

  return (
    <>
      <Heading>{heading}</Heading>
      <Swiper
        onSlideChange={handleOnSlideChange}
        a11y={{
          enabled: true,
          nextSlideMessage: 'Следующий отзыв',
          prevSlideMessage: 'Предыдущий отзыв',
          paginationBulletMessage: 'Перейти на слайд {{index}}',
        }}
        grabCursor
        modules={[Pagination, Navigation, A11y]}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        style={{
          height: appTheme.typography.pxToRem(height),
          marginTop: appTheme.typography.pxToRem(8),
          marginBottom: appTheme.typography.pxToRem(8),
        }}
      >
        {references.map(function mapReferences(item: ReferenceData) {
          return (
            <SwiperSlide key={item.src} style={{ display: 'flex', justifyContent: 'center' }}>
              <picture>
                <source type="image/webp" data-srcset={item.srcSet} />
                <source type="image/jpeg" data-srcset={item.src} />
                <Img
                  aria-describedby={item.src}
                  src={item.src}
                  alt={item.title}
                  height={height}
                  width={width}
                  className="swiper-lazy"
                  loading="lazy"
                />
              </picture>
              <Skeleton
                variant="rectangular"
                height={appTheme.typography.pxToRem(height)}
                width={appTheme.typography.pxToRem(width)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Typography
        id={references[currentSlideIndex].src}
        component="blockquote"
        sx={{ p: 1, fontStyle: 'italic', '&::before': { content: '"«"' }, '&::after': { content: '"»"' } }}
      >
        {references[currentSlideIndex].description}
      </Typography>
    </>
  );
}

export default References;
