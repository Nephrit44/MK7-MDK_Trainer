//Коллеция групп и ссылок на них
const dbQestions = [
  {
    cardID: 1,
    cardOrder: 1,
    cardQestion: "Поздороваться, представиться, обозначить свою роль",
    cardAction: "Сказать",
    cardExemple: "«Здравствуйте! Меня зовут (ФИО)»"
  },
  {
    cardID: 1,
    cardOrder: 2,
    cardQestion: "Сообщить о проводимой манипуляции",
    cardAction: "Сказать",
    cardExemple: "«Мне необходимо провести гигиеническую обработку рук мылом и водой»"
  },
  {
    cardID: 1,
    cardOrder: 3,
    cardQestion: "Объяснить ход и цель процедуры",
    cardAction: "Сказать",
    cardExemple: "«Цель: удаление загрязнений и снижение количества микроорганизмов (профилактика ИСМП)»"
  },
  {
    cardID: 1,
    cardOrder: 4,
    cardQestion: "Обеспечить условия для эффективного мытья и обеззараживания рук:",
    cardAction: "Сказать",
    cardExemple: "«Ногти на руках - чистые, коротко остриженные, не покрыты лаком, искусственные ногти отсутствуют»"
  },
  {
    cardID: 1,
    cardOrder: 5,
    cardQestion: "Ногти на руках - чистые, коротко остриженные, не покрыты лаком, искусственные ногти отсутствуют",
    cardAction: "Сказать",
    cardExemple: ""
  },
  {
    cardID: 1,
    cardOrder: 6,
    cardQestion: "Кольца, перстни, часы, браслеты, элементы пирсинга и другие украшения на руках отсутствуют",
    cardAction: "Сказать",
    cardExemple: ""
  },
  {
    cardID: 1,
    cardOrder: 7,
    cardQestion: "При наличии микротравм (порезов, проколов, заусениц, царапин, микротрещин), их необходимо обработать антисептическим лекарственным средством и закрыть водостойким лейкопластырем",
    cardAction: "Сказать",
    cardExemple: ""
  },
  {
    cardID: 1,
    cardOrder: 8,
    cardQestion: "Увлажнить руки водой",
    cardAction: "Сказать",
    cardExemple: "«Открываю кран, регулирую температуру и напор воды, увлажняю руки водой»"
  },
  {
    cardID: 1,
    cardOrder: 9,
    cardQestion: "Нанести на ладони необходимое количество мыла",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 1,
    cardOrder: 10,
    cardQestion: "Потереть одну ладонь о другую",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 1,
    cardOrder: 11,
    cardQestion: "Правой ладонью растереть мыло по тыльной поверхности левой кисти и наоборот",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 1,
    cardOrder: 12,
    cardQestion: "Переплести пальцы, растирая ладонь о ладонь",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 1,
    cardOrder: 13,
    cardQestion: "Соединить пальцы в «замок», тыльной стороной пальцев растирать ладонь другой руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 1,
    cardOrder: 14,
    cardQestion: "Охватить большой палец левой руки правой ладонью и потереть его круговыми движениями, поменять руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 1,
    cardOrder: 15,
    cardQestion: "Круговыми движениями в направлении вперед и назад сомкнутыми пальцами правой руки потереть левую ладонь, поменять руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 1,
    cardOrder: 16,
    cardQestion: "Тщательно смыть мыло под проточной водопроводной водой",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 1,
    cardOrder: 17,
    cardQestion: "Тщательно промокнуть руки одноразовым полотенцем (салфеткой)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 1,
    cardOrder: 18,
    cardQestion: "Закрыть кран локтем (при отсутствии локтевого крана – одноразовым полотенцем (салфеткой))",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 1,
    cardOrder: 19,
    cardQestion: "Поместить одноразовое полотенце (салфетку) в емкость для медицинских отходов класса «А»",
    cardAction: "Выполнить",
    cardExemple: ""
  },

  //Чеклист 2

  {
    cardID: 2,
    cardOrder: 1,
    cardQestion: "Поздороваться, представиться, обозначить свою роль",
    cardAction: "Сказать",
    cardExemple: "«Здравствуйте! Меня зовут (ФИО)»"
  },
  {
    cardID: 2,
    cardOrder: 2,
    cardQestion: "Сообщить о проводимой манипуляции",
    cardAction: "Сказать",
    cardExemple: "«Мне необходимо провести гигиеническую обработку рук мылом и водой»"
  },
  {
    cardID: 2,
    cardOrder: 3,
    cardQestion: "Объяснить ход и цель процедуры",
    cardAction: "Сказать",
    cardExemple: "«Цель: удаление загрязнений и снижение количества микроорганизмов до безопасного уровня (профилактика ИСМП). Обработка рук проводится кожным антисептиком в нестерильной зоне с соблюдением последовательности выполняемых действий»"
  },
  {
    cardID: 2,
    cardOrder: 4,
    cardQestion: "Объяснить технику и продолжительность процедуры",
    cardAction: "Сказать",
    cardExemple: "«Каждое движение повторяем 5 раз. Руки на протяжении всей процедуры должны быть увлажнены, при необходимости добавляем кожный антисептик и продолжаем обработку по алгоритму»"
  },
  {
    cardID: 2,
    cardOrder: 5,
    cardQestion: "Нанести антисептик на ладонь",
    cardAction: "Сказать",
    cardExemple: "«Объем кожного антисептика, наносимого на поверхность руки, должен соответствовать инструкции применения (в среднем 3-5 мл), и должен покрывать всю поверхность руки»"
  },
  {
    cardID: 2,
    cardOrder: 6,
    cardQestion: "Потереть одну ладонь о другую",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 2,
    cardOrder: 7,
    cardQestion: "Правой ладонью растереть антисептик по тыльной поверхности левой кисти, переплетая пальцы, и наоборот",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 2,
    cardOrder: 8,
    cardQestion: "Переплести пальцы, растирая ладонь о ладонь",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 2,
    cardOrder: 9,
    cardQestion: "Соединить пальцы в «замок», тыльной стороной согнутых пальцев растирать ладонь другой руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 2,
    cardOrder: 10,
    cardQestion: "Охватить большой палец левой руки правой ладонью и потереть его круговыми движениями, поменять руки и выполнить процедуру для другой руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 2,
    cardOrder: 11,
    cardQestion: "Круговыми движениями в направлении вперед и назад сомкнутыми пальцами правой руки потереть левую ладонь, поменять руки и выполнить процедуру для другой руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 2,
    cardOrder: 12,
    cardQestion: "Дождаться полного естественного высыхания кожного антисептика",
    cardAction: "Выполнить",
    cardExemple: ""
  },

  //Чеклист 3

  {
    cardID: 3,
    cardOrder: 1,
    cardQestion: "Обработать руки гигиеническим способом (кожным антисептиком)",
    cardAction: "Сказать",
    cardExemple: "«Обрабатываю руки гигиеническим способом (кожным антисептиком)»"
  },
  {
    cardID: 3,
    cardOrder: 2,
    cardQestion: "Надеть маску, нестерильные перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 3,
    cardOrder: 3,
    cardQestion: "Объяснить ход и цель процедуры",
    cardAction: "Выполнить",
    cardExemple: "Подготовить ёмкость-контейнер с плотно прилегающей крышкой, проверить маркировку (название, концентрацию раствора, цель использования, дата)"
  },
  {
    cardID: 3,
    cardOrder: 4,
    cardQestion: "Подготовить ветошь (2 шт.) в лотке с маркировкой или дезинфицирующие салфетки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 3,
    cardOrder: 5,
    cardQestion: "Смочить ветошь, отжать или использовать дезинфицирующие салфетки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 3,
    cardOrder: 6,
    cardQestion: "Обработать ветошью или дезинфицирующими салфетками двукратно с интервалом 15 минут методом протирания",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 3,
    cardOrder: 7,
    cardQestion: "После обработки ветошью промыть проточной водой",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 3,
    cardOrder: 8,
    cardQestion: "Просушить, хранить в санитарной комнате в шкафу",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 3,
    cardOrder: 9,
    cardQestion: "Ветошь поместить в дезинфектант или дезинфицирующие салфетки поместить в емкость для медицинских отходов класса «Б»",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 3,
    cardOrder: 10,
    cardQestion: "Снять нестерильные перчатки, сбросить в пакет для отходов класса «Б»",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 3,
    cardOrder: 11,
    cardQestion: "Снять и поместить маску 3 -х слойную медицинскую одноразовую нестерильную в пакет для отходов класса «Б»",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 3,
    cardOrder: 12,
    cardQestion: "Обработать руки гигиеническим способом (кожным антисептиком)",
    cardAction: "Выполнить",
    cardExemple: "«Обрабатываю руки гигиеническим способом»"
  },
  {
    cardID: 3,
    cardOrder: 13,
    cardQestion: "Сделать запись о выполненной процедуре в медицинской документации",
    cardAction: "Выполнить",
    cardExemple: "«Делаю запись в медицинской документации»"
  },

  //Чеклист 4

  {
    cardID: 4,
    cardOrder: 1,
    cardQestion: "Обработать руки гигиеническим способом (кожным антисептиком)",
    cardAction: "Сказать",
    cardExemple: "«Обрабатываю руки гигиеническим способом (кожным антисептиком)»"
  },
  {
    cardID: 4,
    cardOrder: 2,
    cardQestion: "Надеть маску, нестерильные перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 4,
    cardOrder: 3,
    cardQestion: "Подготовить ёмкость-контейнер с плотно прилегающей крышкой, проверить маркировку (название, концентрацию раствора, цель использования, дата)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 4,
    cardOrder: 4,
    cardQestion: "Залить в контейнер дезинфицирующий раствор нужной концентрации",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 4,
    cardOrder: 5,
    cardQestion: "Погрузить термометр в дезинфицирующий раствор сразу после использования, (электронный термометр обрабатывается антисептической салфеткой)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 4,
    cardOrder: 6,
    cardQestion: "Выдержать время экспозиции в соответствии с методическими рекомендациями по применению дезинфицирующего раствора",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 4,
    cardOrder: 7,
    cardQestion: "После экспозиции промыть термометр проточной водой",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 4,
    cardOrder: 8,
    cardQestion: "Просушить, хранить в контейнере для термометров",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 4,
    cardOrder: 9,
    cardQestion: "Снять нестерильные перчатки, сбросить в пакет для отходов класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 4,
    cardOrder: 10,
    cardQestion: "Снять и поместить маску 3 -х слойную медицинскую одноразовую нестерильную в пакет для отходов класса «Б»",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 4,
    cardOrder: 11,
    cardQestion: "Обработать руки гигиеническим способом (кожным антисептиком)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 4,
    cardOrder: 12,
    cardQestion: "Сделать запись о выполненной процедуре в медицинской документации",
    cardAction: "Выполнить",
    cardExemple: ""
  },

  //Чеклист 5

  {
    cardID: 5,
    cardOrder: 1,
    cardQestion: "Взять кожный антисептик во флаконе с распылителем (или 2 антисептические салфетки)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 2,
    cardQestion: "Взять жгут венозный с застежкой (либо жгут резиновый)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 3,
    cardQestion: "Проверить срок годности кожного антисептика (спиртовых салфеток)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 4,
    cardQestion: "Проверить целостность упаковки салфеток",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 5,
    cardQestion: "Провести гигиеническую обработку рук",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 6,
    cardQestion: "Надеть средства индивидуальной защиты",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 7,
    cardQestion: "Надеть нестерильные медицинские перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 8,
    cardQestion: "Тщательно обработать жгут венозный с застежкой аэрозольным методом",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 9,
    cardQestion: "Выдержать время экспозиции (30 секунд)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 10,
    cardQestion: "Повторно обработать жгут венозный с застежкой аэрозольным методом",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 11,
    cardQestion: "Выдержать время экспозиции (30 секунд)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 12,
    cardQestion: "Дождаться полного высыхания жгута",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 13,
    cardQestion: "Вскрыть упаковку одной спиртовой салфетки и протереть ею резиновый жгут по всей длине",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 14,
    cardQestion: "Поместить салфетку в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 15,
    cardQestion: "Поместить упаковку от салфетки в отходы класса А",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 16,
    cardQestion: "Вскрыть упаковку второй спиртовой салфетки и протереть ею резиновый жгут по всей длине",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 17,
    cardQestion: "Поместить салфетку в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 18,
    cardQestion: "Поместить упаковки от салфеток в отходы класса А",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 19,
    cardQestion: "Дождаться полного высыхания жгута",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 20,
    cardQestion: "Снять перчатки, поместить их в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 21,
    cardQestion: "Снять средства индивидуальной защиты, поместить их в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 5,
    cardOrder: 22,
    cardQestion: "Обработать руки гигиеническим способом",
    cardAction: "Выполнить",
    cardExemple: ""
  },

  //Чеклист 6

  {
    cardID: 6,
    cardOrder: 1,
    cardQestion: "Подготовить оснащение",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 2,
    cardQestion: "Подготовить дезинфицирующее средство",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 3,
    cardQestion: "Ограничить доступ к месту аварии",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 4,
    cardQestion: "Надеть средства индивидуальной защиты",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 5,
    cardQestion: "Надеть нестерильные медицинские перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 6,
    cardQestion: "Провести дезинфекцию отходов на месте аварии",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 7,
    cardQestion: "Провести сбор рассыпанных (разлитых) отходов по истечении времени экспозиции в пакет с соответствующей классу опасности отходов маркировкой",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 8,
    cardQestion: "Закрыть и повторно маркировать упаковку, указав ФИО ответственного, дату, отделение",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 9,
    cardQestion: "Обрабатать поверхность в месте рассыпания (розлива) отходов ветошью, смоченной в растворе дезинфицирующего средства согласно инструкции по применению к дезсредству",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 10,
    cardQestion: "Транспортировать медицинские отходы в комнату временного хранения",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 11,
    cardQestion: "Собрать твердые отходы в пакет с соответствующей классу опасности отходов маркировкой",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 12,
    cardQestion: "Закрыть и повторно маркировать упаковку, указав ФИО ответственного, дату, отделение",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 13,
    cardQestion: "Обработать поверхность в месте рассыпания (розлива) отходов ветошью, смоченной в растворе дезинфицирующего средства согласно инструкции по применению к дезсредству",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 14,
    cardQestion: "Транспортировать медицинские отходы в комнату временного хранения",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 15,
    cardQestion: "Если произошло повреждение тары для сбора ртутьсодержащих отходов провести демеркуризацию — удалить остатки ртути при помощи механических и физико-химических способов",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 16,
    cardQestion: "Провести дезинфекцию отходов на месте аварии с использованием соответствующих дезинфицирующих средств (заливаю место аварии)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 17,
    cardQestion: "Произвести сбор рассыпанных (разлитых) отходов по истечении времени экспозиции в пакет с соответствующей классу опасности отходов и маркировкой",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 18,
    cardQestion: "Закрыть и повторно маркировать упаковку, указав ФИО ответственного, дату, отделение",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 19,
    cardQestion: "Обработать поверхность в месте рассыпания (розлива) отходов ветошью, смоченной в растворе дезинфицирующего средства согласно инструкции по применению дезсредства",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 20,
    cardQestion: "Транспортировать медицинские отходы в комнату временного хранения",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 21,
    cardQestion: "Снять средства индивидуальной защиты",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 22,
    cardQestion: "Собрать спецодежду и средства индивидуальной защиты",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 23,
    cardQestion: "Обработать перчатки салфеткой, смоченной дезинфицирующим раствором",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 24,
    cardQestion: "Снять перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 25,
    cardQestion: "Обработать руки гигиеническим способом",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 6,
    cardOrder: 26,
    cardQestion: "",
    cardAction: "Выполнить",
    cardExemple: "Сообщить об аварийной ситуации руководителю подразделения"
  },
];

