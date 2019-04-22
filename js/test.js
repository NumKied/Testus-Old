const base = [
  { // 1
    question: "Групова динаміка-",
    answers: {
      a: "сукупність процесів, що відбуваються в малій групі і характеризують її з точки зору руху, розвитку та функціонування",
      b: "сукупність процесів, що відбуваються в малій групі і характеризують її роботу",
      c: "сукупність процесів, що відбуваються в малих та великих групах"
    },
    correctAnswer: "a"
  },
  { // 2
    question: "Механізми розвитку-",
    answers: {
      a: "Ідіосинкразійний кредит лідера",
      b: "Нормативний вплив більшості",
      c: "Нормативний вплив меншості",
      d: "Ефекти поляризації і зсуву до ризику",
      e: "Ненормативний вплив меншості",
      f: "Внутрішньогуповий конфлікт"
    },
    correctAnswer: {
     1: "a",
     2: "c",
     3: "d",
     4: "f"
    }
  },
  { // 3
    question: "Механізм стабілізації",
    answers: {
      a: "конформність, сумісність і спрацьованість, згуртованість",
      b: "Індивідуальність, оцінка групи",
      c: "Відпустка"
    },
    correctAnswer: "a"
  },
  { // 4
    question: "Стадії сфери групової життєдіяльності",
    answers: {
      a: "Перевірка і залежність",
      b: "Внутрішній конфлікт",
      c: "Зовнішній конфлікт",
      d: "Розвиток групової згуртованості"
    },
    correctAnswer: {
      1: "a",
      2: "b",
      3: "d"
    }
  },
  { // 5
    question: "Комформізм",
    answers: {
      a: "Пасивне, пристосовницьке прийняття групових стандартів поведінки, безапеляційне визнання існуючих порядків, норм і правил, безумовне схиляння перед авторитетами.",
      b: "Комфортне перебування в групі",
      c: "Розуміння людського ставлення до групової динаміки"
    },
    correctAnswer: "a"
  },
  { // 6
    question: "Комформа",
    answers: {
      a: "Дія людини, яка проявляється у її піддатливості реальному чи уявному тиску групи, у зміні установок і вчинків відповідно до позиції спільноти, до якої вона причетна.",
      b: "Думка людей про групу, яка уособлює собою засудження груп ",
      c: "Груповий динамічний процес усвідомлення "
    },
    correctAnswer: "a"
  },
  { // 7
    question: "Комфортність",
    answers: {
      a: "Схильність індивіда піддаватися думці групової більшості, реальному чи уявному тискові групи.",
      b: "Перебування в групі однодумців",
      c: "Формування комфортної групи для всіх учасників групи",
      d: "М’якість"
    },
    correctAnswer: "a"
  },
  { // 8
    question: "Меншість",
    answers: {
      a: "Частина групи, наділена меншими можливостями впливу (авторитетом, статусом та ін.).",
      b: "Мало людей в групі",
      c: "Маленька частина групи"
    },
    correctAnswer: "a"
  },
  { // 9
    question: "Керівник",
    answers: {
      a: "Індивід, на якого офіційно покладені функції управління і організації діяльності в групі (установі, фірмі та ін.).",
      b: "Людина, яка народжена управляти",
      c: "Індивід, до якого прислухаються",
      d: "Лідер, який має вести всіх вперед"
    },
    correctAnswer: "a"
  },
  { // 10
    question: "Керівництво",
    answers: {
      a: "Здійснюваний індивідом чи колективним суб'єктом соціально-психологічний вплив на інших людей з метою структурування дій та відносин у групі (організації).",
      b: "Сукупність людей, які виконують управлінську функцію",
      c: "Найважливіші люди в організації"
    },
    correctAnswer: "a"
  },
  { // 11
    question: "Лідерство",
    answers: {
      a: "Один з процесів організації й управління малою соціальною групою, який сприяє досягненню групових цілей в оптимальні терміни та з оптимальним ефектом.",
      b: "Людина назначена керівництвом компанії для того, щоб всі йшли за лідером і слідували його прикладу",
      c: "Процес водіння за собою інших людей"
    },
    correctAnswer: "a"
  },
  { // 12
    question: "Лідер",
    answers: {
      a: "Наділений найбільшим ціннісним потенціалом індивід, який має провідний вплив у групі.",
      b: "Той хто знає краще",
      c: "Найкращий з вибраної групи людей",
      d: "Індивід, який знає місію та візію організації"
    },
    correctAnswer: "a"
  },
  { // 13
    question: "Теорія рис",
    answers: {
      a: "сукупністю певних психологічних рис",
      b: "перелік особливих характеристик",
      c: "риси, які притаманні певній групі людей"
    },
    correctAnswer: "a"
  },
  { // 14
    question: "Стиль лідерства",
    answers: {
      a: "автократ, демократ, ліберал",
      b: "демократ",
      c: "ліберал",
      d: "автократ"
    },
    correctAnswer: "a"
  },
  { // 15
    question: "Види диференцій лідерства",
    answers: {
      a: "За змістом діяльності",
      b: "За ідеологічними принципами",
      c: "За стилем керівництва",
      d: "За стратегічним плануванням діяльності",
      e: "За характером діяльності"
    },
    correctAnswer: {
      1: "a",
      2: "c",
      3: "e"
    }
  },
  { // 16
    question: "Прийняття рішень",
    answers: {
      a: "волевиявлення індивіда або групи людей, спрямоване на формування послідовності дій і вибір альтернативи.",
      b: "покладання на інтуїцію, а також на попередній досвід",
      c: "розуміння ситуації в цілому і вибір між двома варіантами"
    },
    correctAnswer: "a"
  },
  { // 17
    question: "Переваги групового прийняття рішень",
    answers: {
      a: "у групі легше долаються стереотипи мислення",
      b: "відповідальність ділиться на всіх хто у групі",
      c: "групове рішення охоплює більший обсяг знань та інформації",
      d: "швидке і безкомпромісне прийняття рішення",
      e: "групове рішення адекватніше відображає суть проблеми"
    },
    correctAnswer: {
      1: "a",
      2: "c",
      3: "e"
    }
  },
  { // 18
    question: "Недоліки прийняття рішення у групі",
    answers: {
      a: "Блокування рішення внаслідок розходження точок зору",
      b: "Багато хороших варіантів",
      c: "Відповідальність за рішення несе вся група",
      d: "Прийняття неоптимального результату рішення",
      e: "Розроблення й ухвалення групового рішення"
    },
    correctAnswer: {
      1: "a",
      2: "d",
      3: "e"
    }
  },
  { // 19
    question: "Групова нормалізація",
    answers: {
      a: "соціально-психологічний феномен, який виникає у результаті групової дискусії, коли протилежні точки зору, навіть екстремальні позиції, згладжуються і стають єдиною усередненою думкою",
      b: "соціально-психологічний феномен, який виникає у результаті, коли протилежні точки зору, навіть екстремальні позиції, стають нормальною думкою",
      c: "психологічний феномен, який виникає у результаті групової дискусії"
    },
    correctAnswer: "a"
  },
  { // 20
    question: "Групова поляризація",
    answers: {
      a: "соціально-психологічний феномен, що є результатом групової дискусії, у процесі якої різні точки зору, думки оформлюються у дві протилежні безкомпромісні позиції.",
      b: "психологічний феномен, що є результатом групової дискусії, у процесі якої одна точка зору оформлюються у дві протилежні позиції",
      c: "соціально-психологічний феномен, що є результатом групової дискусії, у процесі якої різні точки зору оформлюються в одну протилежну безкомпромісну позиц"
    },
    correctAnswer: "a"
  },
  { // 21
    question: "Group Thing",
    answers: {
      a: "спосіб (режим) мислення людей, які, перебуваючи у тісно згуртованій групі і прагнучи до єдності думок, головним вважають пошук консенсусу, що знижує їх здатність до пізнання реальності",
      b: "групова справа",
      c: "групове обговорення важливих питань в середині групи"
    },
    correctAnswer: "a"
  },
  { // 22
    question: "Класифікація групових завдань",
    answers: {
      a: "завдання, які можливо розв'язати",
      b: "завдання, які неможливо розв'язати",
      c: "завдання, які належать до компетенції керівників",
      d: "завдання, які необхідно розв’язати",
      e: "завдання, які розв’язує тільки група",
      f: "завдання, які розв’язує тільки лідер"
    },
    correctAnswer: {
      1: "a",
      2: "b",
      3: "c"
    }
  },
  { // 23
    question: "Ключові навички рутинного типу",
    answers: {
      a: "неухильне дотримання процедури",
      b: "недотримання процедури",
      c: "раціональна оцінка ситуації",
      d: "гуманне лідерство",
      e: "демократичність",
      f: "відповідальність",
      g: "контроль / мотивація"
    },
    correctAnswer: {
      1: "a",
      2: "c",
      3: "d",
      4: "g"
    }
  },
  { // 24
    question: "Типи",
    answers: {
      a: "Рутинний",
      b: "Контролюючий",
      c: "Селективний",
      d: "Ліберальний",
      e: "Адаптаційний",
      f: "Відповідальний",
      g: "Інноваційний"
    },
    correctAnswer: {
      1: "a",
      2: "c",
      3: "e",
      4: "g"
    }
  },
  { // 25
    question: "Групова дискусія",
    answers: {
      a: "метод групового обговорення проблеми, який дає змогу виявити спектр думок і суджень членів групи, запропонувати можливі шляхи розв'язання завдання, знайти групове розв'язання проблеми.",
      b: "метод, який дає змогу виявити потреби членів групи, запропонувати остаточне розв'язання завдання.",
      c: "метод групового обговорення проблеми, який дає змогу знайти рішення вірне для кожного з групи"
    },
    correctAnswer: "a"
  },
  { // 26
    question: "Групова згуртованість",
    answers: {
      a: "утворення, розвиток і формування зв'язків у групі, які забезпечують перетворення зовні заданої структури на психологічну спільність людей, психологічний організм, який живе за своїми нормами і законами відповідно до своїх цілей і цінностей.",
      b: "Загальне об’єднання людей для вирішення проблем ключового характеру для організації",
      c: "Корпоративна культура в компаніях",
      d: "Кількість людей, які разом згуртовуються в групі"
    },
    correctAnswer: "a"
  },
  { // 27
    question: "Структура малої групи",
    answers: {
      a: "це сукупність зв'язків, що складаються в ній між індивідами",
      b: "це кількість людей, що зібрались в групі",
      c: "це комунікативна структура малої групи",
      d: "це структура яка складається з індивідів в групі"
    },
    correctAnswer: "a"
  },
  { // 28
    question: "Групова сумісність",
    answers: {
      a: "соціально-психологічний показник згуртованості групи, що виражає можливість безконфліктного спілкування і погодження дій індивідів в умовах спільної діяльності.",
      b: "психологічний показник групи, що дає можливість неконфліктного погодження процесів в групі",
      c: "соціальний показник групи, що виражає можливість безконфліктного спілкування і погодження дій членів групи."
    },
    correctAnswer: "a"
  },
  { // 29
    question: "Соціально-психологічний клімат групи",
    answers: {
      a: "якісний аспект міжособистісних відносин, що виявляється у сукупності внутрішніх (психологічних) умов, які сприяють або перешкоджають продуктивній спільній діяльності і всебічному розвитку особистості у групі.",
      b: "хороше відчуття в середині групи",
      c: "аспект міжособистісних відносин, який тільки сприяє продуктивній спільній діяльності і всебічному розвитку особистості у групі.",
      d: "аспект міжособистісних відносин, який перешкоджає продуктивній діяльності і розвитку особистості у групі."
    },
    correctAnswer: "a"
  },
  { // 30
    question: "Види конфліктів у групі",
    answers: {
      a: "конфлікт цілей",
      b: "конфлікт пізнання",
      c: "емоційний конфлікт",
      d: "реальний конфлікт",
      e: "зміщений конфлікт",
      f: "хибний конфлікт"
    },
    correctAnswer: {
      1: "a",
      2: "b",
      3: "c"
    }
  },
  { // 31
    question: "Інтелект, який має здатність оперувати словами, символами, числами, ідеями, логічними доказами.",
    answers: {
      a: "Вербальний",
      b: "Механічний",
      c: "Соціальний"
    },
    correctAnswer: "a"
  },
  { // 32
    question: "Інтелект, який має здатність сприймати і розуміти зв'язки фізичних сил і елементів механізмів у практичних ситуаціях, швидко схоплювати принципи машинних операцій.",
    answers: {
      a: "Вербальний",
      b: "Механічний",
      c: "Соціальний"
    },
    correctAnswer: "b"
  },
  { // 33
    question: "Інтелект, який має почуття такту, уміння здобути розташування інших людей і створити сприятливу атмосферу у взаємовідносинах з ними. Низький рівень розвитку даного типу інтелекту приводить до постійних виявів нетактовності, труднощів пристосування до соціального оточення, до проблем спілкування і самотності.",
    answers: {
      a: "Вербальний",
      b: "Механічний",
      c: "Соціальний"
    },
    correctAnswer: "c"
  },
  { // 34
    question: "Консенсус це:",
    answers: {
      a: "методика шляхом відкритого обговорення вихідних індивідуальних варіантів виробляється єдине групове",
      b: "методика, яка включає обговорення не варіантів рішень, а факторів, що впливають на них",
      c: "методика, яка включає обговорення варіантів рішень і закінчується вибором учасника, чия думка і стає думкою групи",
      d: "методика, яка включає багаторазове анонімне й ізольоване висловлення й обговорення думок у писемній формі. За кілька раундів звичайно вдається прийти до загального рішення",
      e: "методика, яка включає усереднення результату, що виключає всі індивідуальні впливи"
    },
    correctAnswer: "a"
  },
  { // 35
    question: "Діалектична це:",
    answers: {
      a: "методика шляхом відкритого обговорення вихідних індивідуальних варіантів виробляється єдине групове",
      b: "методика, яка включає обговорення не варіантів рішень, а факторів, що впливають на них",
      c: "методика, яка включає обговорення варіантів рішень і закінчується вибором учасника, чия думка і стає думкою групи",
      d: "методика, яка включає багаторазове анонімне й ізольоване висловлення й обговорення думок у писемній формі. За кілька раундів звичайно вдається прийти до загального рішення",
      e: "методика, яка включає усереднення результату, що виключає всі індивідуальні впливи"
    },
    correctAnswer: "b"
  },
  { // 36
    question: "Диктатура це:",
    answers: {
      a: "методика шляхом відкритого обговорення вихідних індивідуальних варіантів виробляється єдине групове",
      b: "методика, яка включає обговорення не варіантів рішень, а факторів, що впливають на них",
      c: "методика, яка включає обговорення варіантів рішень і закінчується вибором учасника, чия думка і стає думкою групи",
      d: "методика, яка включає багаторазове анонімне й ізольоване висловлення й обговорення думок у писемній формі. За кілька раундів звичайно вдається прийти до загального рішення",
      e: "методика, яка включає усереднення результату, що виключає всі індивідуальні впливи"
    },
    correctAnswer: "c"
  },
  { // 37
    question: "Метод Дельфі це:",
    answers: {
      a: "методика шляхом відкритого обговорення вихідних індивідуальних варіантів виробляється єдине групове",
      b: "методика, яка включає обговорення не варіантів рішень, а факторів, що впливають на них",
      c: "методика, яка включає обговорення варіантів рішень і закінчується вибором учасника, чия думка і стає думкою групи",
      d: "методика, яка включає багаторазове анонімне й ізольоване висловлення й обговорення думок у писемній формі. За кілька раундів звичайно вдається прийти до загального рішення",
      e: "методика, яка включає усереднення результату, що виключає всі індивідуальні впливи"
    },
    correctAnswer: "d"
  },
  { // 38
    question: "Колективна це:",
    answers: {
      a: "методика шляхом відкритого обговорення вихідних індивідуальних варіантів виробляється єдине групове",
      b: "методика, яка включає обговорення не варіантів рішень, а факторів, що впливають на них",
      c: "методика, яка включає обговорення варіантів рішень і закінчується вибором учасника, чия думка і стає думкою групи",
      d: "методика, яка включає багаторазове анонімне й ізольоване висловлення й обговорення думок у писемній формі. За кілька раундів звичайно вдається прийти до загального рішення",
      e: "методика, яка включає усереднення результату, що виключає всі індивідуальні впливи"
    },
    correctAnswer: "e"
  },
  { // 39
    question: "Метод мозкового штурму:",
    answers: {
      a: "Чітке формулювання мети і/або задач і обмежень",
      b: "вичленовування виниклої проблеми і спробі її рішення за допомогою ідей з інших сфер життя і науки.",
      c: "6 чоловік висловлюють по 3 ідеї по заданому питанню за 5 хвилин."
    },
    correctAnswer: "a"
  },
  { // 40
    question: "Метод аналогій:",
    answers: {
      a: "Чітке формулювання мети і/або задач і обмежень",
      b: "вичленовування виниклої проблеми і спробі її рішення за допомогою ідей з інших сфер життя і науки.",
      c: "6 чоловік висловлюють по 3 ідеї по заданому питанню за 5 хвилин."
    },
    correctAnswer: "b"
  },
  { // 41
    question: "Метод 635:",
    answers: {
      a: "Чітке формулювання мети і/або задач і обмежень",
      b: "вичленовування виниклої проблеми і спробі її рішення за допомогою ідей з інших сфер життя і науки.",
      c: "6 чоловік висловлюють по 3 ідеї по заданому питанню за 5 хвилин."
    },
    correctAnswer: "c"
  },
  { // 42
    question: "Мультикультурне середовище:",
    answers: {
      a: "це співіснування і взаємодія в конкретному соціальному просторі різноманітних, рівноправних і рівноцінних культур і їхніх представників, а також визначене відношення особистостей до цього різноманіття.",
      b: "”конкретний соціальний простір”, за допомогою якого людина включається в культурні зв'язки суспільства.",
      c: "сукупність природних і соціально-побутових умов, у яких протікає життєдіяльність дитини і становлення його як особистості.",
      d: "спеціально, згідно з педагогічними цілями, створювана система умов організації життєдіяльності дітей, спрямована на формування їхніх відносин до світу, людям і один до одного.",
      e: "сукупність умов, у яких розвертається освітній процес і з яким вступають у взаємодію суб'єкти цього процесу."
    },
    correctAnswer: "a"
  },
  { // 43
    question: "Соціокультурне середовище:",
    answers: {
      a: "це співіснування і взаємодія в конкретному соціальному просторі різноманітних, рівноправних і рівноцінних культур і їхніх представників, а також визначене відношення особистостей до цього різноманіття.",
      b: "”конкретний соціальний простір”, за допомогою якого людина включається в культурні зв'язки суспільства.",
      c: "сукупність природних і соціально-побутових умов, у яких протікає життєдіяльність дитини і становлення його як особистості.",
      d: "спеціально, згідно з педагогічними цілями, створювана система умов організації життєдіяльності дітей, спрямована на формування їхніх відносин до світу, людям і один до одного.",
      e: "сукупність умов, у яких розвертається освітній процес і з яким вступають у взаємодію суб'єкти цього процесу."
    },
    correctAnswer: "b"
  },
  { // 44
    question: "Середовище виховання:",
    answers: {
      a: "це співіснування і взаємодія в конкретному соціальному просторі різноманітних, рівноправних і рівноцінних культур і їхніх представників, а також визначене відношення особистостей до цього різноманіття.",
      b: "”конкретний соціальний простір”, за допомогою якого людина включається в культурні зв'язки суспільства.",
      c: "сукупність природних і соціально-побутових умов, у яких протікає життєдіяльність дитини і становлення його як особистості.",
      d: "спеціально, згідно з педагогічними цілями, створювана система умов організації життєдіяльності дітей, спрямована на формування їхніх відносин до світу, людям і один до одного.",
      e: "сукупність умов, у яких розвертається освітній процес і з яким вступають у взаємодію суб'єкти цього процесу."
    },
    correctAnswer: "c"
  },
  { // 45
    question: "Середовище педагогічне:",
    answers: {
      a: "це співіснування і взаємодія в конкретному соціальному просторі різноманітних, рівноправних і рівноцінних культур і їхніх представників, а також визначене відношення особистостей до цього різноманіття.",
      b: "”конкретний соціальний простір”, за допомогою якого людина включається в культурні зв'язки суспільства.",
      c: "сукупність природних і соціально-побутових умов, у яких протікає життєдіяльність дитини і становлення його як особистості.",
      d: "спеціально, згідно з педагогічними цілями, створювана система умов організації життєдіяльності дітей, спрямована на формування їхніх відносин до світу, людям і один до одного.",
      e: "сукупність умов, у яких розвертається освітній процес і з яким вступають у взаємодію суб'єкти цього процесу."
    },
    correctAnswer: "d"
  },
  { // 46
    question: "Освітнє середовище:",
    answers: {
      a: "це співіснування і взаємодія в конкретному соціальному просторі різноманітних, рівноправних і рівноцінних культур і їхніх представників, а також визначене відношення особистостей до цього різноманіття.",
      b: "”конкретний соціальний простір”, за допомогою якого людина включається в культурні зв'язки суспільства.",
      c: "сукупність природних і соціально-побутових умов, у яких протікає життєдіяльність дитини і становлення його як особистості.",
      d: "спеціально, згідно з педагогічними цілями, створювана система умов організації життєдіяльності дітей, спрямована на формування їхніх відносин до світу, людям і один до одного.",
      e: "сукупність умов, у яких розвертається освітній процес і з яким вступають у взаємодію суб'єкти цього процесу."
    },
    correctAnswer: "e"
  },
  { // 47
    question: "Конфлікт Внутрішньо-особистий:",
    answers: {
      a: "виникає, коли до однієї людини висувають суперечливі вимоги з приводу того, яким має бути результат його роботи",
      b: "виникає як боротьба керівників за обмежені ресурси, капітал, робочу силу, час використання обладнання або схвалення проекту",
      c: "виникає, коли особистість займає позицію, відмінну від позиції групи",
      d: "виникає, як розбіжність груп формальних і не формальних",
    },
    correctAnswer: "a"
  },
  { // 48
    question: "Конфлікт між особовий:",
    answers: {
      a: "виникає, коли до однієї людини висувають суперечливі вимоги з приводу того, яким має бути результат його роботи",
      b: "виникає як боротьба керівників за обмежені ресурси, капітал, робочу силу, час використання обладнання або схвалення проекту",
      c: "виникає, коли особистість займає позицію, відмінну від позиції групи",
      d: "виникає, як розбіжність груп формальних і не формальних",
    },
    correctAnswer: "b"
  },
  { // 49
    question: "Конфлікт між особистістю і групою:",
    answers: {
      a: "виникає, коли до однієї людини висувають суперечливі вимоги з приводу того, яким має бути результат його роботи",
      b: "виникає як боротьба керівників за обмежені ресурси, капітал, робочу силу, час використання обладнання або схвалення проекту",
      c: "виникає, коли особистість займає позицію, відмінну від позиції групи",
      d: "виникає, як розбіжність груп формальних і не формальних",
    },
    correctAnswer: "c"
  },
  { // 50
    question: "Конфлікт між груповий:",
    answers: {
      a: "виникає, коли до однієї людини висувають суперечливі вимоги з приводу того, яким має бути результат його роботи",
      b: "виникає як боротьба керівників за обмежені ресурси, капітал, робочу силу, час використання обладнання або схвалення проекту",
      c: "виникає, коли особистість займає позицію, відмінну від позиції групи",
      d: "виникає, як розбіжність груп формальних і не формальних",
    },
    correctAnswer: "d"
  }
];
//VARIABLES
let restrictScroll = false;
let yOffset = 0;
//---User set questionsNumber
let quetionsNumber = 10
let answeredQuestionsCounter = 0;
let needToAnswerCounter = quetionsNumber;
let questions = document.getElementsByClassName('questions')[0];
let questionsArr = [];
let randomQuestionsArr = [];
let wrongArr = [];
let rightArr = [];
let clickedArr = [];
let rightQuestionsArr =[];
let wrongQuestionsArr = [];
let restrictToContinue = false;
//---User set timeLimit
let timeLimit = 20;
let timeLimitSeconds = "00";
let secondsBelowTen = false;
let minutesBelowTen = false;

//Clicke on answer variant 

function variantChoosed(e) {
  let variantId = e.getAttribute('id');
  let type = e.getAttribute('type');
  let variantText = document.querySelector(`[name = "${variantId}"]`);
  answeredQuestionsCounter = 0;
  if (type === 'checkbox') {
    variantText.classList.toggle('answerLabel-checked');
    e.previousElementSibling.classList.toggle('fakeCheckbox-checked');
    e.parentNode.parentNode.classList.toggle('clickedAnswer');
  } else {
    if (e.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(`[class = "fakeRadio fakeRadio-checked"]`) !== null) {
      e.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(`[class = "answerLabel-checked"]`).classList.remove('answerLabel-checked');
      e.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(`[class = "fakeRadio fakeRadio-checked"]`).classList.remove('fakeRadio-checked');
      e.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(`[class = "answerBG clickedAnswer"]`).classList.remove('clickedAnswer');

    }
    e.parentNode.querySelector(`[type = "radio"]:checked`).previousElementSibling.classList.add('fakeRadio-checked');
    variantText.classList.add('answerLabel-checked');
    e.parentNode.parentNode.classList.add('clickedAnswer');
  }

  let questions = document.querySelectorAll('.question');
  questions.forEach((currentQuestion) => {
    if (currentQuestion.querySelector(`input:checked`)) {
      answeredQuestionsCounter++;
    }
  });
  document.getElementsByClassName('answeredQuestionsCounter')[0].textContent = answeredQuestionsCounter;
}

//Hide header on scroll event

window.addEventListener('scroll', () => {
  let header = document.getElementsByTagName('header')[0];
  if (!restrictScroll) {
    if (window.pageYOffset > yOffset) {
      yOffset = pageYOffset;
      header.classList.add('hideHeader')
    } else {
      yOffset = pageYOffset;
      header.classList.remove("hideHeader");
    }
  }
});

//Get object length metod

Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

//Set how many questions need to be answered

document.getElementsByClassName('needToAnswerCounter')[0].textContent = needToAnswerCounter;
document.getElementsByClassName('answeredQuestionsCounter')[0].textContent = answeredQuestionsCounter;

//Randomize questions

for (let i = 0; i < quetionsNumber; i++) {
  let randomQuestion = Math.floor(Math.random() * base.length);
  randomQuestionsArr[i] = base[randomQuestion];
  base.splice(randomQuestion, 1);
}

//Create DOM

randomQuestionsArr.forEach((currentQuestion, questionNumber) => {
  let answersArr = [];
  for(letter in currentQuestion.answers) {
    if (Object.size(currentQuestion.correctAnswer) === 1) {
      answersArr.push(
        `<div class="answer">
          <div class="answerContent">
            <div class="answerBG">
              <div class="checkboxHolder">
                <div class="fakeRadio"></div>
                <input type="radio" name="question${questionNumber}" id="question${questionNumber}${letter}" onclick="variantChoosed(this)" value="${letter}">
              </div>
              <div class="answerLabel">
                <label for="question${questionNumber}${letter}" name="question${questionNumber}${letter}">${currentQuestion.answers[letter]}</label>
              </div>
            </div>
          </div>
        </div>`
      );
    } else {
      answersArr.push(
        `<div class="answer">
          <div class="answerContent">
            <div class="answerBG">
              <div class="checkboxHolder">
                <div class="fakeCheckbox"></div>
                <input type="checkbox" name="question${questionNumber}" id="question${questionNumber}${letter}" onclick="variantChoosed(this)" value="${letter}">
              </div>
              <div class="answerLabel">
                <label for="question${questionNumber}${letter}" name="question${questionNumber}${letter}">${currentQuestion.answers[letter]}</label>
              </div>
            </div>
          </div>
        </div>`
      );
    }
  }

//Randomize answers

  const randomAnswersArr = [];
  for (let i = 0; i < Object.size(currentQuestion.answers); i++) {
    let randomAnswer = Math.floor(Math.random() * answersArr.length);
    randomAnswersArr[i] = answersArr[randomAnswer];
    answersArr.splice(randomAnswer, 1);
  }
  questionsArr.push(
    `<div class="question">
       <h3>${currentQuestion.question}</h3>
       <div class="answers">
         ${randomAnswersArr.join('')}
       </div>
     </div>`
  );
});
questions.innerHTML = questionsArr.join('');

//Check user answers on correctness

function reviewTest() {
  if (!restrictToContinue) {
    let answers = questions.querySelectorAll('.answers');
    randomQuestionsArr.forEach((currentQuestion, questionNumber) => {
      let currentAnswer = answers[questionNumber];
      let selector = `input:checked`;
      let userAnswers = currentAnswer.querySelectorAll(selector) || {};
      let correctAnswersArr = [];
      for (let key in currentQuestion.correctAnswer) {
        correctAnswersArr.push(currentQuestion.correctAnswer[key]);
      }
      let correctnessCounter = 0;
      let clickedArrCounter = 0;
      let correctAnswersCounter = 0;
      correctAnswersArr.forEach((correctAnswer) => {
        correctAnswersCounter++;
        let id = currentAnswer.querySelector(`[value = "${correctAnswer}"]`).getAttribute('id');
        let variantText = document.querySelector(`[name = "${id}"]`);
        // currentAnswer.querySelector(`[value = "${correctAnswer}"]`).previousElementSibling.classList.add('wrongAnswer');
        // variantText.classList.add('wrongText');
        wrongArr.push(id);
        for (let i = 0; i < userAnswers.length; i++) {
          if (clickedArrCounter === 0) {
            clickedArr.push(userAnswers[i].id);
          }
          if (correctAnswer === userAnswers[i].value) {
            for (let j = 0; j < wrongArr.length; j++) {
              if (wrongArr[j] === userAnswers[i].id) {
                wrongArr.splice(j, 1);
              }
            }
            if (userAnswers.length <= correctAnswersArr.length) {
              correctnessCounter++;
            }
            rightArr.push(id);
            // currentAnswer.querySelector(`[value = "${correctAnswer}"]`).previousElementSibling.classList.remove('wrongAnswer');
            // variantText.classList.remove('wrongText');
            // currentAnswer.querySelector(`[value = "${correctAnswer}"]`).previousElementSibling.classList.add('rightAnswer');
            // variantText.classList.add('rightText');
          }
        }
        if (correctAnswersCounter === correctAnswersArr.length) {
          if (correctnessCounter === correctAnswersArr.length) {
            console.log(rightQuestionsArr)
            rightQuestionsArr.push(id);
          } else {
            wrongQuestionsArr.push(id);
            console.log(wrongQuestionsArr)
          }
          correctAnswersCounter = 0;
        }
        clickedArrCounter++;
      });
      // Цього взагалі не треба(чисто для себе зробив)
      if (currentAnswer.querySelectorAll(`[class = "fakeCheckbox fakeCheckbox-checked"]`) !== null) {
        currentAnswer.querySelectorAll(`[class = "fakeCheckbox fakeCheckbox-checked"]`).forEach((fakeCheckbox) => {
          // fakeCheckbox.classList.remove('fakeCheckbox-checked');
          fakeCheckbox.classList.add('clicked');
          // fakeCheckbox.parentNode.parentNode.classList.add('clickedAnswer');
        });
      }
      if (currentAnswer.querySelectorAll(`[class = "fakeRadio fakeRadio-checked"]`) !== null) {
        currentAnswer.querySelectorAll(`[class = "fakeRadio fakeRadio-checked"]`).forEach((fakeRadio) => {
          // fakeRadio.classList.remove('fakeRadio-checked');
          fakeRadio.classList.add('clicked');
          // fakeRadio.parentNode.parentNode.classList.add('clickedAnswer');
        });
      }
      // if (currentAnswer.querySelectorAll(`[class = "answerLabel-checked"]`) !== null) {
      //   currentAnswer.querySelectorAll(`[class = "answerLabel-checked"]`).forEach((answerLabel) => {
      //     answerLabel.classList.remove('answerLabel-checked');
      //   });
      // }
    });
    restrictToContinue = true;
  }
}

//Set timer

document.getElementsByClassName('timeLimitMinutes')[0].textContent = timeLimit;
document.getElementsByClassName('timeLimitSeconds')[0].textContent = timeLimitSeconds;

//Timer

let timer = setInterval(() => {
  if (timeLimitSeconds > 10 || timeLimitSeconds === "00" || timeLimitSeconds === 0) {
    secondsBelowTen = false;
  } else {
    secondsBelowTen = true;
  }
  if (timeLimitSeconds === 0 || timeLimitSeconds === "00") {
    timeLimitSeconds = 60;
    timeLimit--;
  }
  timeLimitSeconds--;
  if (secondsBelowTen) {
    document.getElementsByClassName('timeLimitSeconds')[0].textContent = "0" + timeLimitSeconds;
  } else {
    document.getElementsByClassName('timeLimitSeconds')[0].textContent = timeLimitSeconds;
  }
  if (timeLimit < 10) {
    document.getElementsByClassName('timeLimitMinutes')[0].textContent = "0" + timeLimit;
  } else {
    document.getElementsByClassName('timeLimitMinutes')[0].textContent = timeLimit;
  }
  if (timeLimit === 0 && timeLimitSeconds === 0) {
    clearInterval(timer);
    timeOut();
  }
}, 1000);

//Show timeOut message and start reviewTest() fucntion

function timeOut() {
  document.getElementsByClassName('testLogic')[0].classList.add('blurTestLogic');
  document.getElementsByClassName('timeOut')[0].classList.add('showTimeOut');
  document.getElementsByClassName('testInfo')[0].classList.add('hideTestInfo');
  document.getElementsByTagName('header')[0].classList.remove('hideHeader');
  restrictScroll = true;
  reviewTest();
}

//Show AreYouSure message

function submit() {
  document.getElementsByClassName('testLogic')[0].classList.add('blurTestLogic');
  document.getElementsByClassName('attemptToSubmit')[0].classList.add('showAttemptToSubmit');
  document.getElementsByClassName('testInfo')[0].classList.add('hideTestInfo');
  document.getElementsByTagName('header')[0].classList.remove('hideHeader');
  restrictScroll = true;
}

//Confirm to proceed

function confirmSubmit() {
  reviewTest();
  document.getElementsByClassName('attemptToSubmit')[0].classList.remove('showAttemptToSubmit');
  viewResults();
}

//Cancel to proceed

function cancelSubmit() {
  restrictScroll = false;
  document.getElementsByClassName('testLogic')[0].classList.remove('blurTestLogic');
  document.getElementsByClassName('attemptToSubmit')[0].classList.remove('showAttemptToSubmit');
  document.getElementsByClassName('testInfo')[0].classList.remove('hideTestInfo');
}

//Show test results

function viewResults() {
  clearInterval(timer);
  document.getElementsByClassName('timeOut')[0].classList.remove('showTimeOut');
  restrictScroll = false;
  document.getElementsByClassName('testLogic')[0].classList.remove('blurTestLogic');
  let questions = document.getElementsByClassName('questions')[0].querySelectorAll('[class = "question"]');
  let questionsSelectorsArr = [];
  questions.forEach((currentQuestion) => {
    currentQuestion.querySelector('[class="answers"]').classList.add('result-answers');
    currentQuestion.querySelector('h3').setAttribute('onclick', 'openAnswersDropdownMenu(this)');
    currentQuestion.classList.add('result-question');
    questionsSelectorsArr.push(currentQuestion);
  });
  for (let i = 0; i < wrongArr.length; i++) {
    document.querySelector(`[for = "${wrongArr[i]}"]`).classList.add('wrongText');
    document.querySelector(`[id = "${wrongArr[i]}"]`).previousElementSibling.classList.add('wrongAnswer');
  }
  for (let i = 0; i < wrongQuestionsArr.length; i++) {
    document.querySelector(`[id = "${wrongQuestionsArr[i]}"]`).parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('wrongQuestion');
    document.querySelector(`[id = "${wrongQuestionsArr[i]}"]`).parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.classList.add('wrongH3');
  }
  for (let i = 0; i < rightArr.length; i++) {
    document.querySelector(`[for = "${rightArr[i]}"]`).classList.add('rightText');
    document.querySelector(`[id = "${rightArr[i]}"]`).previousElementSibling.classList.add('rightAnswer');
  }
  for (let i = 0; i < rightQuestionsArr.length; i++) {
    document.querySelector(`[id = "${rightQuestionsArr[i]}"]`).parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('rightQuestion');
    document.querySelector(`[id = "${rightQuestionsArr[i]}"]`).parentNode.parentNode.parentNode.parentNode.parentNode.previousElementSibling.classList.add('rightH3');
  }
}

//Open answers on results screen

function openAnswersDropdownMenu(e) {
  e.nextElementSibling.classList.toggle('result-answersOpen');
}

function filter(filterValue) {
  if (filterValue === 'right') {
    document.querySelectorAll(`[class = "question result-question wrongQuestion"]`).forEach((question) => {
      question.classList.add('result-questionHide');
      question.lastElementChild.classList.remove('result-answersOpen');
    });
    document.querySelectorAll(`[class = "question result-question rightQuestion result-questionHide"]`).forEach((question) => {
      question.classList.remove('result-questionHide');
    });
  }
  if (filterValue === 'wrong') {
    document.querySelectorAll(`[class = "question result-question rightQuestion"]`).forEach((question) => {
      question.classList.add('result-questionHide');
      question.lastElementChild.classList.remove('result-answersOpen');
    });
    document.querySelectorAll(`[class = "question result-question wrongQuestion result-questionHide"]`).forEach((question) => {
      question.classList.remove('result-questionHide');
    });
  }
  if (filterValue === 'all') {
    if (document.querySelectorAll(`[class = "answers result-answers result-answersOpen"]`) !== null) {
      document.querySelectorAll(`[class = "answers result-answers result-answersOpen"]`).forEach((question) => {
        question.classList.remove('result-answersOpen');
      });
    }
    document.querySelectorAll(`[class = "question result-question wrongQuestion result-questionHide"]`).forEach((question) => {
      question.lastElementChild.classList.remove('result-answersOpen');
      question.classList.remove('result-questionHide');
    });
    document.querySelectorAll(`[class = "question result-question rightQuestion result-questionHide"]`).forEach((question) => {
      question.lastElementChild.classList.remove('result-answersOpen');
      question.classList.remove('result-questionHide');
    });
  }
}