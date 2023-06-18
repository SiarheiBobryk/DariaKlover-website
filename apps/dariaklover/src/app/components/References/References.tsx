import * as React from 'react';

import Box from '@mui/material/Box';
import SkeletonMui from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { Pagination, Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Heading from '../Heading';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

const { NX_IMAGES_PATH = '' } = process.env;

export interface ReferenceData {
  src: string;
  srcSet: string;
  alt: string;
  title: string;
  description: React.ReactNode;
}

export const references: ReferenceData[] = [
  {
    src: `${NX_IMAGES_PATH}/reference_001.jpg`,
    srcSet: `${NX_IMAGES_PATH}/reference_001.webp`,
    alt: 'Отзыв 1',
    title: 'Помогаю увидеть возможности',
    description: (
      <Typography>
        Слушай,я хотела ещё раз сказать спасибо! <strong>У меня сейчас такое хорошее настроение</strong>,я не знаю,как
        тебе объяснить даже. Какое то <strong>ощущение реальности</strong>. Тоесть того,чтовсе реально.это очень
        интересная практика. Я очень надеюсь,что не нагрузила тебя своими вопросами. Ещё раз спасибо.{' '}
        <strong>Я бы очень хотела работать дальше</strong>.
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_002.jpg`,
    srcSet: `${NX_IMAGES_PATH}/reference_002.webp`,
    alt: 'Отзыв 2',
    title: 'Помогаю организовать время',
    description: (
      <Typography>
        Даша, спасибо тебе за коуч-сессию! Это было полезно для меня.{' '}
        <strong>
          Ты помогла мне вспомнить это базовое состояние спокойствия, неспешности, которого часто не хватает в жизни.
          Теперь я вовремя останавливаю режим «белка в колесе» и выделяю время на себя и свои дела.
        </strong>{' '}
        Мне понравилось задание, где нужно написать 20 дел, которые будут поддерживать меня в желаемом состоянии,
        свежести, спокойствия, радости. Это как база для других свершений в моей жизни). Еще отметила, что{' '}
        <strong>ты располагаешь к себе, это 100%</strong>!
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_003.jpg`,
    srcSet: `${NX_IMAGES_PATH}/reference_003.webp`,
    alt: 'Отзыв 3',
    title: 'Помогаю найти баланс',
    description: (
      <Typography>
        Привет 🤗 Да, конечно 👌🏻{' '}
        <strong>
          За время работы с тобой я пришла к принятию своего текущего веса, рациона питания. Все стабилизировалось и
          меня уже не штормит то в переедание, то в голодание
        </strong>
        . Сладкое не переедаю, разрешаю себе в умеренных количествах. И теперь знаю набор инструментов по регулированию
        тяги к сладкому и контролю рациона✨{' '}
        <strong>Благодарю за столь ценную информацию, мягкое ведение и понимание🌹</strong>
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_004.jpg`,
    srcSet: `${NX_IMAGES_PATH}/reference_004.webp`,
    alt: 'Отзыв 4',
    title: 'Помогаю справиться с проблемой',
    description: (
      <Typography>
        Даша, большое спасибо за медитацию с едой. Прекрасная практика, которая{' '}
        <strong>позволила замедлиться и раскрыть более полно вкус любимой еды</strong> (от арамота до послевкусия). А
        самое главное, понять, что для удовлетворения достаточно съесть совсем чуть-чуть и получить при этом не меньше
        удовольствия. <strong>Очень понравилось</strong> 🥰
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_005.jpg`,
    srcSet: `${NX_IMAGES_PATH}/reference_005.webp`,
    alt: 'Отзыв 5',
    title: 'Помогаю найти свои цели',
    description: (
      <Typography>
        Спасибо большое, Дарья,за профессиональный и оптимистичный подход. ❤️🙏 Поняла, что нет нерешаемых проблем, и
        что важно выстроить свой день и свою жизнь максимально полезно и со здоровыми привычками, поняла, что на уровень
        жизни и счастья влияют и атмосфера места, где живешь, и окружение, и твоя самореализация и присутствие
        вдохновляющих людей, и выстраивание здоровых личных границ.{' '}
        <strong>Спасибо за наводящие вопросы, которые глубже помогли увидеть себя и цель, куда двигаться</strong> 💛🙏
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_006.jpg`,
    srcSet: `${NX_IMAGES_PATH}/reference_006.webp`,
    alt: 'Отзыв 6',
    title: 'Помогаю сфокусироваться на важном',
    description: (
      <Typography>
        Даша, благодарю тебя за консультацию. Она прошла легко и непринуждённо. В очередной раз{' '}
        <strong>пришло осознание, что надо не только знать, но и делать</strong>. А за счёт расставленных акцентов и
        подведённых итогов <strong>стало ясно, какие шаги важны</strong> для поддержания ресурсного потенциала и
        здоровья. Спасибо ❤️
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_007.jpg`,
    srcSet: `${NX_IMAGES_PATH}/reference_007.webp`,
    alt: 'Отзыв 7',
    title: 'Помогаю восстановиться',
    description: (
      <Typography>
        <strong>Встреча мне дала чувство умиротворения, спокойствия</strong>, чувство, когда не хочется никуда спешить,
        чувство небольшого понимания , что мне нужно и как я могу постепенно к этому идти
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_008.jpg`,
    srcSet: `${NX_IMAGES_PATH}/reference_008.webp`,
    alt: 'Отзыв 8',
    title: 'Сопровождаю в процессе изменений',
    description: (
      <Typography>
        Положительные изменения: Понемногу <strong>стала более осознанно питаться</strong> , отслеживать голод и
        насыщение, понимать по какой причине я ем, даже когда не хочется, осознавать, что в этом нет никакого смысла на
        данный момент
      </Typography>
    ),
  },
  // Commented as not descriptive
  // {
  //   src: `${NX_IMAGES_PATH}/reference_009.jpg`,
  //   srcSet: `${NX_IMAGES_PATH}/reference_009.webp`,
  //   alt: 'Отзыв 9',
  //   title: 'Помогаю найти в себе силы',
  //   description: `благодарю! очень много благодарю что ви справились со мною лучше чем в етом ролике`,
  // },
  {
    src: `${NX_IMAGES_PATH}/reference_010.png`,
    srcSet: `${NX_IMAGES_PATH}/reference_010.webp`,
    alt: 'Отзыв 10',
    title: 'Помогаю найти опоры',
    description: (
      <Typography>
        Даша, по прошествии уже почти трех месяцев{' '}
        <strong>хочу вновь поблагодарить тебя за первый в моей жизни коучинг</strong>! Я, честно говоря, не ожидала, что
        его результат будет для меня настолько весомым. Конечно, я надеялась и верила, что итог будет положительным, но
        не могла предполагать, что именно телесно почувствую настолько яркий приток энергии! Причем{' '}
        <strong>
          в теле ощущение прилива сохранялось не час-два, а несколько дней, а затем трансформировалось в очень
          насыщенное воспоминание
        </strong>
        , которое, как теперь вижу, стало для меня своеобразным индикатором прилива энергии в других практиках и
        ситуациях:{' '}
        <strong>как только это ощущение возвращается, я знаю -всё сделано правильно, я иду верным путём</strong>. Я
        благодарю тебя за помощь в решении вопроса, с которым я к тебе обратилась, потому что{' '}
        <strong>мой запрос был удовлетворен на 100%</strong>. В то же время, благодаря ясности в этой сфере я стала
        четче видеть
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_011.png`,
    srcSet: `${NX_IMAGES_PATH}/reference_011.webp`,
    alt: 'Отзыв 11',
    title: 'Помогаю стать увереннее',
    description: (
      <Typography>
        Признаюсь честно: изначально я недооценивала ценность коучинга и не особенно верила, что за один час сессии
        можно всерьез измениться. Но теперь я уже ЗНАЮ, что это возможно и это действительно ценный инструмент. И что
        важно, я не ощущаю желания бежать к тебе вновь и вновь за решением очередных проблем. Наоборот -
        <strong>
          хочется прислушаться к себе, четко сформировать свой истинный вопрос, а потом внимательно услышать ответ в
          себе самой. А если не получится - я знаю, кто мне бережно поможет вернуться к себе
        </strong>{' '}
        😉
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_012.png`,
    srcSet: `${NX_IMAGES_PATH}/reference_012.webp`,
    alt: 'Отзыв 12',
    title: 'Помогаю вновь найти силы',
    description: (
      <Typography>
        ты в данном случае, помогла мне перестроить, мое воображение в позитивную сторону. Как ты сказала тогда, что я
        сам это сделал, возможно, но, до разговора с тобой, я не мог <strong>поставить себя на хороший лад</strong> и
        постоянно перебивался сомнениями
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_013.png`,
    srcSet: `${NX_IMAGES_PATH}/reference_013.webp`,
    alt: 'Отзыв 13',
    title: 'Помогаю поменять подход',
    description: (
      <Typography>
        Даша, спасибо большое за коуч-сессию! Запрос был на то, как действовать из радости, а не из чувства
        &quot;должен&quot;. По итогу сессии вывели формулу-&quot;Давай попробуем пуститься в это приключение!&quot;{' '}
        <strong>Еще на сессии почувствовала прилив сил и вдохновения, как будто избавилась от тяжелого груза</strong>,
        поняла, что подход к жизни может быть совсем другой-легкий и из позиции исследователя){' '}
        <strong>началась трансформация, которая происходит до сих пор</strong> 🧡 🙏
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_014.png`,
    srcSet: `${NX_IMAGES_PATH}/reference_014.webp`,
    alt: 'Отзыв 14',
    title: 'Помогаю найти решение',
    description: (
      <Typography>
        Наши встречи очень важные для меня - каждый раз я хочу поделиться всем с тобой, очень хочу узнать твое мнение,
        очень ценю твои рекомендации и стараюсь применять. Я ощущаю твою большую заботу, и в голосе, и в поведении видно
        твое желание помочь улучшить мое здоровье. Ты хорошо анализируешь разные ситуации, стараешься понять, что
        случилось, а также помогаешь мне разобраться с моими эмоциями и лучше понять эмоции других людей. Думаю, это
        очень трудно и восхищаюсь твоим профессионализмом. Ты такая молодая, а с таким опытом во взаимоотношениях. Ты{' '}
        <strong>задаёшь мне такие вопросы, которые помогают мне принять решение</strong>. После чего у меня возникает
        ощущение, что это то, что нужно было и я больше не переживаю и не думаю об этом. Если перед встречами меня
        одолевают сомнения, то <strong>после наших встреч я чувствую уверенность</strong>! Иногда мне трудно сказать что
        я хочу по-русски, но ты меня понимаешь и мы продолжаем. С тобой комфортно.
      </Typography>
    ),
  },
  // Reference 16 must come first; after it, reference 15
  {
    src: `${NX_IMAGES_PATH}/reference_016.png`,
    srcSet: `${NX_IMAGES_PATH}/reference_016.webp`,
    alt: 'Отзыв 16',
    title: 'Помогаю организовать здоровый образ жизни',
    description: (
      <article>
        <Typography>
          <strong>
            Стала увереннее в себе, больше слушать себя, свои потребности, тело. Научилась выстраивать границы
          </strong>
          .
        </Typography>
        <Typography>
          - Чему вы научились или может что важное поняли в процессе работы с этим специалистом? (практики перечислять
          не нужно, достаточно указать в общем)
        </Typography>
        <Typography>
          <strong>
            Коучинг очень хорошо работает с установками, многие удалось поменять, появилось больше легкости в жизнИ
          </strong>
          .
        </Typography>
        <Typography>
          -Могли бы вы рекомендовать данного коуча? И кому на ваш взгляд помощь данного специалиста особенно будет нужна
          и полезна?
        </Typography>{' '}
        <Typography>
          Однозначно! Думаю всем{' '}
          <strong>
            подойдет-и тем, кто хочет улучшить здоровье, режим и привычки, и тем, кто хочет попробовать коучинг, т.е.
            работу с установками, мышлением
          </strong>
          .
        </Typography>
      </article>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_015.png`,
    srcSet: `${NX_IMAGES_PATH}/reference_015.webp`,
    alt: 'Отзыв 15',
    title: 'Помогаю найти мотивацию',
    description: (
      <article>
        <Typography>-Сколько длилась ваша работа с хелс-коучем?</Typography>
        <Typography>3 месяца</Typography>
        <Typography>-Каких результатов вы достигли за этот период?</Typography>
        <Typography>
          {' '}
          Хороших результатов, <strong>ввела новые полезные привычки, более правильное питание и режим дня</strong>,
          изменились механизмы приема пищи, добавила в рацион новые продукты с большим содержанием белка так как я
          вегетарианка),микроэлементов и витаминов, ввела прием нутрицевтиков (витамины группы 6, магний, веган омега 3,
          селен, Йод), <strong>стала лучше себя чувствовать, появилось больше энергии</strong>. Также{' '}
          <strong>по настоянию хелс-коуча пошла на прием к эндокринологу</strong>, сдала анализы, которые выявили ряд
          незначительных отклонений,и эндокринолог назначил лечение.
        </Typography>
      </article>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_017.png`,
    srcSet: `${NX_IMAGES_PATH}/reference_017.webp`,
    alt: 'Отзыв 17',
    title: 'Помогаю сложное сделать простым',
    description: (
      <Typography>
        Проходила у Дарьи коучинг сессию по вопросам связанным с целями (выбор, препятствия, шаги). Мне было интересно и
        полезно разложить мой вопрос на за и против и выявить взаимосвязи.{' '}
        <strong>Дарья помогла подойти к выбору решения структурированно</strong>, без водЫ. В процессе нашей работы{' '}
        <strong>я наметила шаги действий</strong>. Обозначила для себя временные рамки. Благодарю, что за короткое время
        сессии удалось увидеть несколько разных граней вопроса, подсветить главные акценты! <strong>Рекомендую</strong>
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_018.png`,
    srcSet: `${NX_IMAGES_PATH}/reference_018.webp`,
    alt: 'Отзыв 18',
    title: 'Помогаю найти баланс между надо и хочу',
    description: (
      <Typography>
        Хотела сказать тебе большое спасибо за сессию, было очень полезно всё разложить по полочкам и выделить
        приоритетные направления в обшем потоке желаний и дел, самой бы мне было очень сложно так быстро и эффективно с
        этим справится) Задание также оказалось очень полезным, буду его повторять переодически, чтобы сверяться с
        реальностью) Ещё раз спасибо)
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_019.png`,
    srcSet: `${NX_IMAGES_PATH}/reference_019.webp`,
    alt: 'Отзыв 19',
    title: 'Помогаю создать ощущения, которые будут бережно мотивировать',
    description: (
      <Typography>
        Спустя какое-то время после встречи у меня осталось только ощущение от того что мы обсуждали - важность
        расслабления, легкости и баланса работы и отдыха. Мне понравилось, что ты дала достаточно времени и пространства
        подумать, развернуть мысль и прийти к чему-то важному на встречи. Чувствовалась нейтральность, но это правильная
        нейтральность, чтобы отражаться как есть и на самом деле увидеть что происходит, куда я иду, а куда хочу прийти,
        что мешает этому. И такое мягкое, бережное отношение. И все в совокупности создает хорошую картину и ясность.
      </Typography>
    ),
  },
  {
    src: `${NX_IMAGES_PATH}/reference_020.png`,
    srcSet: `${NX_IMAGES_PATH}/reference_020.webp`,
    alt: 'Отзыв 20',
    title: 'Помогаю найти баланс в большом количестве задач',
    description: (
      <Typography>
        Привет! В целом хорошо. Осталось ощущение про важность отдыха и отпуска. И как- то так вышло, что предыдущая
        неделя как раз была не такая перегруженная, были моменты, но в целом уже стало намного лучше. На этой неделе я
        тоже стараюсь держать баланс)
      </Typography>
    ),
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
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState<number>(0);
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

  const referencesReversed = [...references].reverse();
  const { title = '' } = referencesReversed[currentSlideIndex] ?? {};
  const { description, src: descriptionId } = referencesReversed[currentSlideIndex] ?? {};

  return (
    <>
      <Heading>{heading}</Heading>
      <Heading component="h2" variant="h6">
        {title}
      </Heading>
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
        {referencesReversed.map(function mapReferences(item: ReferenceData) {
          return (
            <SwiperSlide key={item.src} style={{ display: 'flex', justifyContent: 'center' }}>
              <Skeleton
                variant="rectangular"
                height={appTheme.typography.pxToRem(height)}
                width={appTheme.typography.pxToRem(width)}
              />
              <Box component="picture" sx={{ zIndex: 2 }}>
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
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Typography id={descriptionId} component="blockquote" sx={{ p: 1, fontStyle: 'italic' }}>
        {description}
      </Typography>
    </>
  );
}

export default References;
