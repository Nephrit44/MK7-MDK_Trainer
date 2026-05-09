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

  //Чеклист 7

  {
    cardID: 7,
    cardOrder: 1,
    cardQestion: "Доложить об аварийной ситуации в ходе выполнения манипуляции при выполнении забора крови у пациента (порез или укол острым инструментарием)",
    cardAction: "Сказать",
    cardExemple: "«Я уколола палец иглой при выходе из периферической вены»"
  },
  {
    cardID: 7,
    cardOrder: 2,
    cardQestion: "Немедленно прекратить манипуляцию",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 3,
    cardQestion: "Взять укладку экстренной профилактики парентеральных инфекций",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 4,
    cardQestion: "Перчатки обработать салфеткой, смоченной дезинфицирующим средством, немедленно снять перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 5,
    cardQestion: "Поместить перчатки в контейнер для отходов класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 6,
    cardQestion: "Вымыть дважды кожу рук с мылом под проточной водой",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 7,
    cardQestion: "Высушить кожу рук одноразовыми бумажными полотенцами",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 8,
    cardQestion: "Поместить использованные бумажные полотенца в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 9,
    cardQestion: "Вскрыть стерильные салфетки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 10,
    cardQestion: "Смочить стерильную салфетку 70%-ным этиловым спиртом",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 11,
    cardQestion: "Обработать кожу салфеткой, смоченной 70%-ным этиловым спиртом",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 12,
    cardQestion: "Поместить использованную салфетку в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 13,
    cardQestion: "Смочить вторую стерильную салфетку 5%-ным раствором йода",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 14,
    cardQestion: "Смазать края раны 5%-ным раствором йода",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 15,
    cardQestion: "Поместить использованную салфетку в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 16,
    cardQestion: "Вскрыть упаковку с лейкопластырем",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 17,
    cardQestion: "Достать из упаковки лейкопластырь",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 18,
    cardQestion: "Заклеить ранку пластырем",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 19,
    cardQestion: "Поместить упаковки от салфеток и лейкопластырей в отходы класса А",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 20,
    cardQestion: "Надеть нестерильные перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 21,
    cardQestion: "Провести дезинфицирующую обработку манипуляционного столика",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 22,
    cardQestion: "Поместить использованную дезинфицирующую салфетку в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 23,
    cardQestion: "Снять нестерильные перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 24,
    cardQestion: "Поместить использованные нестерильные перчатки в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 25,
    cardQestion: "Поставить в известность руководителя структурным подразделением: сообщить отделение, дату, время, ФИО, должность пострадавшего",
    cardAction: "Выполнить",
    cardExemple: "« Я медицинская сестра (отделения, дата, время и фио) произошла аварийная ситуация в связи»"
  },
  {
    cardID: 7,
    cardOrder: 26,
    cardQestion: "Сделать запись в журнале учета аварийных ситуаций при проведении медицинских манипуляций: ФИО пострадавшего медицинского работника, место работы, должность, возраст, дата и время аварии, обстоятельства и характер аварии; ФИО больного, адрес, № истории болезни, дата и результаты обследования на ВИЧ, ВГВ, ВГС, стадия ВИЧ-инфекции, АРВТ, объемы оказанной помощи пострадавшим; ФИО руководителя, который проинформирован об аварии",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 27,
    cardQestion: "Руководителю подразделения организовать работу по эпидемиологическому расследованию аварийной ситуации с привлечением врача-инфекциониста",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 28,
    cardQestion: "Незамедлительно провести экспресс-тест на ВИЧ пациенту с обязательным направлением образца крови для стандартного тестирования на ВИЧ в диагностический центр. Образцы плазмы передать для хранения в течение 12 месяцев в центр СПИД",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 29,
    cardQestion: "Врач-инфекционист проводит опрос пациента о носительстве вирусных гепатитов, ИППП и т.д.",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 7,
    cardOrder: 30,
    cardQestion: "Врач-инфекционист оформляет акт аварийной ситуации в 3 экземплярах и карту эпидемиологического наблюдения",
    cardAction: "Выполнить",
    cardExemple: ""
  },

  //Чеклист 8

  {
    cardID: 8,
    cardOrder: 1,
    cardQestion: "Доложить об аварийной ситуации в ходе выполнения манипуляции (попала биологическая жидкость на слизистые носа, глаз, рта)",
    cardAction: "Сказать",
    cardExemple: "«При выполнении манипуляции произошла аварийная ситуация. Биологическая жидкость попала на слизистые носа, глаз, рта»"
  },
  {
    cardID: 8,
    cardOrder: 2,
    cardQestion: "Немедленно прекратить манипуляцию",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 8,
    cardOrder: 3,
    cardQestion: "Взять укладку экстренной профилактики парентеральных инфекций",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 8,
    cardOrder: 4,
    cardQestion: "Ротовую полость и горло обильно прополоскать водой",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 8,
    cardOrder: 5,
    cardQestion: "Слизистую оболочку глаз промыть проточной водой. НЕ ТЕРЕТЬ!!!",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 8,
    cardOrder: 6,
    cardQestion: "Сесть, запрокинув голову, осторожно полить на глаза воду (самостоятельно или попросить коллегу). Чтобы вода затекала под веки, их осторожно оттянуть",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 8,
    cardOrder: 7,
    cardQestion: "Носовую полость промыть проточной водой. НЕ ТЕРЕТЬ!!!",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 8,
    cardOrder: 8,
    cardQestion: "Поставить в известность руководителя структурным подразделением: сообщить отделение, дату, время, ФИО, должность пострадавшего",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 8,
    cardOrder: 9,
    cardQestion: "Сделать запись в журнале учета аварийных ситуаций при проведении медицинских манипуляций: ФИО пострадавшего медицинского работника, место работы, должность, возраст, дату и время аварии, обстоятельства и характер аварии; ФИО больного, адрес, № истории болезни, дата и результаты обследования на ВИЧ, ВГВ, ВГС, стадия ВИЧ-инфекции, АРВТ, объемы оказанной помощи пострадавшим; ФИО руководителя, который проинформирован об аварии",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 8,
    cardOrder: 10,
    cardQestion: "Руководителю подразделения организовать работу по эпидемиологическому расследованию аварийной ситуации с привлечением врача-инфекциониста",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 8,
    cardOrder: 11,
    cardQestion: "Незамедлительно провести экспресс-тест на ВИЧ и пациенту с обязательным направлением образца крови для стандартного тестирования на ВИЧ в диагностических тестах. Образцы плазмы передать для хранения в течение 12 месяцев в центр СПИД",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 8,
    cardOrder: 12,
    cardQestion: "Врач-инфекционист проводит опрос пациента о носительстве вирусных гепатитов, ИППП и т.д.",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 8,
    cardOrder: 13,
    cardQestion: "",
    cardAction: "Выполнить",
    cardExemple: "Врач-инфекционист оформляет акт аварийной ситуации в 3 экземплярах и карту эпидемиологического наблюдения"
  },

  //Чеклист 9

  {
    cardID: 9,
    cardOrder: 1,
    cardQestion: "Доложить об аварийной ситуации в ходе выполнения манипуляции (попала биологическая жидкость на одежду)",
    cardAction: "Сказать",
    cardExemple: "«При выполнении манипуляции произошла аварийная ситуация. Биологическая жидкость попала на одежду»"
  },
  {
    cardID: 9,
    cardOrder: 2,
    cardQestion: "Немедленно прекратить манипуляцию",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 3,
    cardQestion: "Взять укладку экстренной профилактики парентеральных инфекций",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 4,
    cardQestion: "Обработать руки гигиеническим способом",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 5,
    cardQestion: "Надеть средства индивидуальной защиты (маску медицинскую одноразовую, очки медицинские, шапочку)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 6,
    cardQestion: "Надеть нестерильные перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 7,
    cardQestion: "Снять загрязненную одежду",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 8,
    cardQestion: "Свернуть медицинскую одежду загрязненной стороной внутрь",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 9,
    cardQestion: "Погрузить загрязненную одежду в дезинфицирующий раствор требуемой концентрации и экспозиции (применять из расчета: 5 л дезраствора на 1 кг сухого белья)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 10,
    cardQestion: "Снять перчатки, поместить их в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 11,
    cardQestion: "Кожу под загрязненной одеждой обработать 70%-ным этиловым спиртом двукратно",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 12,
    cardQestion: "Надеть нестерильные перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 13,
    cardQestion: "По окончании экспозиции одежду отжать от дезинфицирующего раствора",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 14,
    cardQestion: "Продезинфицированную одежду поместить в промаркированный прорезиненный мешок (или в специальный бак для сбора белья) и отправить одежду в прачечную",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 15,
    cardQestion: "Загрязненную обувь двукратно протереть салфеткой, смоченной в дезинфицирующем растворе",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 16,
    cardQestion: "Поместить использованную салфетку в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 17,
    cardQestion: "Провести дезинфицирующую обработку поверхностей манипуляционного столика",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 18,
    cardQestion: "Поместить использованную дезинфицирующую в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 19,
    cardQestion: "Снять перчатки, поместить их в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 20,
    cardQestion: "Снять средства индивидуальной защиты, поместить их в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 21,
    cardQestion: "Обработать руки гигиеническим способом",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 22,
    cardQestion: "Поставить в известность руководителя структурным подразделением: сообщить отделение, дату, время, ФИО, должность пострадавшего",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 23,
    cardQestion: "Сделать запись в журнале учета аварийных ситуаций при проведении медицинских манипуляций: ФИО пострадавшего медицинского работника, место работы, должность, возраст, дата и время аварии, обстоятельства и характер аварии; ФИО больного, адрес, № истории болезни, дата и результаты обследования на ВИЧ, ВГВ, ВГС, стадию ВИЧ-инфекции, АРВТ, объемы оказанной помощи пострадавшим; ФИО руководителя, который проинформирован об аварии",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 24,
    cardQestion: "Руководителю подразделения организовать работу по эпидемиологическому расследованию аварийной ситуации с привлечением врача-инфекциониста",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 25,
    cardQestion: "Врач-инфекционист проводит опрос пациента о носительстве вирусных гепатитов, ИППП и т.д.",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 9,
    cardOrder: 26,
    cardQestion: "Врач-инфекционист оформляет акт аварийной ситуации в 3 экземплярах и карту эпидемиологического наблюдения",
    cardAction: "Выполнить",
    cardExemple: ""
  },

  //Чеклист 10

  {
    cardID: 10,
    cardOrder: 1,
    cardQestion: "Доложить об аварийной ситуации в ходе выполнения манипуляции (попадание биологической жидкости на кожу)",
    cardAction: "Сказать",
    cardExemple: "«При выполнении манипуляции на кожу попала биологическая жидкость»"
  },
  {
    cardID: 10,
    cardOrder: 2,
    cardQestion: "Немедленно прекратить манипуляцию",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 3,
    cardQestion: "Взять укладку экстренной профилактики парентеральных инфекций",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 4,
    cardQestion: "Обмыть дважды кожу проточной водой с мылом",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 5,
    cardQestion: "Высушить кожу бумажными полотенцами",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 6,
    cardQestion: "Поместить использованные бумажные полотенца в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 7,
    cardQestion: "Вскрыть стерильную салфетку",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 8,
    cardQestion: "Смочить стерильную салфетку 70%-ным этиловым спиртом",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 9,
    cardQestion: "Обработать загрязненную кожу салфеткой, смоченной 70%-ным этиловым спиртом",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 10,
    cardQestion: "Поместить использованную салфетку в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 11,
    cardQestion: "Смочить вторую стерильную салфетку 70%-ным этиловым спиртом",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 12,
    cardQestion: "Повторно обработать кожу салфеткой, смоченной 70%-ным этиловым спиртом",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 13,
    cardQestion: "Поместить использованную салфетку в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 14,
    cardQestion: "Поместить упаковки от салфеток в отходы класса А",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 15,
    cardQestion: "Провести дезинфицирующую обработку манипуляционного столика",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 16,
    cardQestion: "Поместить использованную дезинфицирующую салфетку в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 17,
    cardQestion: "Поставить в известность руководителя структурным подразделением: сообщить отделение, дату, время, ФИО, должность пострадавшего",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 18,
    cardQestion: "Сделать запись в журнале учета аварийных ситуаций при проведении медицинских манипуляций: ФИО пострадавшего медицинского работника, место работы, должность, возраст, дата и время аварии, обстоятельства и характер аварии; ФИО больного, адрес, № истории болезни, дата и результаты обследования на ВИЧ, ВГВ, ВГС, стадия ВИЧ-инфекции, АРВТ, объемы оказанной помощи пострадавшим; ФИО руководителя, который проинформирован об аварии",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 19,
    cardQestion: "Руководителю подразделения организовать работу по эпидемиологическому расследованию аварийной ситуации с привлечением врача-инфекциониста",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 20,
    cardQestion: "Врач-инфекционист проводит опрос пациента о носительстве вирусных гепатитов, ИППП и т.д.",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 10,
    cardOrder: 21,
    cardQestion: "Врач-инфекционист оформляет акт аварийной ситуации в 3 экземплярах и карту эпидемиологического наблюдения",
    cardAction: "Выполнить",
    cardExemple: ""
  },

  //Чеклист 11

  {
    cardID: 11,
    cardOrder: 1,
    cardQestion: "Снять все украшения и аксессуары",
    cardAction: "Сказать",
    cardExemple: "«Снимаю все украшения (браслет, кольца, часы)»."
  },
  {
    cardID: 11,
    cardOrder: 2,
    cardQestion: "Надеть рабочую одежду, носки и медицинскую сменную обувь (при необходимости предварительно приняв душ)",
    cardAction: "Выполнить",
    cardExemple: "«Надеваю рабочую чистую одежду, носки, обувь»."
  },
  {
    cardID: 11,
    cardOrder: 3,
    cardQestion: "Подготовить необходимое оснащение",
    cardAction: "Выполнить",
    cardExemple: "«Необходимое оснащение подготовлено»."
  },
  {
    cardID: 11,
    cardOrder: 4,
    cardQestion: "Проверить целостность, герметичность, сроки годности, количество, необходимый размер оснащения",
    cardAction: "Выполнить",
    cardExemple: "«Срок годности упаковки не истек, упаковка герметична, целостность не нарушена, размер защитного костюма подходит»."
  },
  {
    cardID: 11,
    cardOrder: 5,
    cardQestion: "Обработать руки гигиеническим способом",
    cardAction: "Выполнить",
    cardExemple: "«Обрабатываю руки гигиеническим способом»."
  },
  {
    cardID: 11,
    cardOrder: 6,
    cardQestion: "Надеть шапочку, волосы и уши должны быть закрыты шапочкой",
    cardAction: "Выполнить",
    cardExemple: "«Надеваю шапочку на голову, закрываю шапочкой волосы и уши»."
  },
  {
    cardID: 11,
    cardOrder: 7,
    cardQestion: "Взять комбинезон в руки, расправить, расстегнуть молнию",
    cardAction: "Выполнить",
    cardExemple: "«Беру комбинезон в руки, расправляю, расстегиваю молнию»."
  },
  {
    cardID: 11,
    cardOrder: 8,
    cardQestion: "Захватить правой рукой правый манжет и правый край замка комбинезона, левой рукой – левый манжет и левый край замка комбинезона, надеть брючины комбинезона",
    cardAction: "Выполнить",
    cardExemple: "«Захватываю правой рукой правый манжет и правый край замка комбинезона, левой рукой – левый манжет и левый край замка комбинезона, надеваю брючины комбинезона»."
  },
  {
    cardID: 11,
    cardOrder: 9,
    cardQestion: "Надеть поочередно рукава комбинезона",
    cardAction: "Выполнить",
    cardExemple: "«Надеваю поочередно рукава комбинезона»."
  },
  {
    cardID: 11,
    cardOrder: 10,
    cardQestion: "Взять бахилы в руки, расправить, надеть бахилы, брюки заправить в бахилы, завязать завязки на бахилах",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 11,
    cardOrder: 11,
    cardQestion: "Взять респиратор, расправить, приложить к лицу, взяв его с внешней стороны одной рукой, перекинуть резинки респиратора за тыльную сторону руки, натянуть нижнюю резинку другой рукой на основание черепа, натянуть верхнюю резинку другой рукой на затылок",
    cardAction: "Выполнить",
    cardExemple: "«Беру респиратор, расправляю, прикладываю к лицу, взяв его с внешней стороны одной рукой, перекидываю резинки респиратора за тыльную сторону руки, натягиваю нижнюю резинку другой рукой на основание черепа, натягиваю верхнюю резинку другой рукой на затылок»."
  },
  {
    cardID: 11,
    cardOrder: 12,
    cardQestion: "Прижать зажим к носу. Убедиться, что респиратор плотно прилегает к лицу. Провести тест на герметичность, сделать 23 форсированных вдоха-выдоха, убедиться, что отсутствует подсос и выход воздуха по краям респиратора, на вдохе респиратор плотно прижимается к лицу без утечки воздуха по краям, отрегулировать положение респиратора",
    cardAction: "Выполнить",
    cardExemple: "«Прижимаю зажим к носу. Респиратор плотно прилегает к лицу. Провожу тест на герметичность, делаю 23 форсированных вдоха-выдоха. Отсутствует подсос и выход воздуха по краям респиратора. На вдохе респиратор плотно прижимается к лицу без утечки воздуха по краям. Регулирую положение респиратора»."
  },
  {
    cardID: 11,
    cardOrder: 13,
    cardQestion: "Взять очки, обработать средством от запотевания, надеть очки поверх респиратора, проверить их прилегание, убедиться, что текстильный эластичный ремешок плотно прилегает, но не сдавливает",
    cardAction: "Выполнить",
    cardExemple: "«Беру очки, обрабатываю средством от запотевания, надеваю очки поверх респиратора, проверяю их прилегание. Текстильный эластичный ремешок плотно прилегает, но не сдавливает»."
  },
  {
    cardID: 11,
    cardOrder: 14,
    cardQestion: "Надеть капюшон комбинезона на голову",
    cardAction: "Выполнить",
    cardExemple: "«Надеваю капюшон комбинезона на голову»."
  },
  {
    cardID: 11,
    cardOrder: 15,
    cardQestion: "Застегнуть молнию комбинезона до конца, прикрыть ее защитной планкой",
    cardAction: "Выполнить",
    cardExemple: "«Застегиваю молнию комбинезона до конца, прикрываю ее защитной планкой»."
  },
  {
    cardID: 11,
    cardOrder: 16,
    cardQestion: "Надеть внутренние нестерильные перчатки, заправить перчатки под рукава комбинезона",
    cardAction: "Выполнить",
    cardExemple: "«Надеваю внутренние нестерильные перчатки, заправляю перчатки под рукава комбинезона»."
  },
  {
    cardID: 11,
    cardOrder: 17,
    cardQestion: "Надеть внешнюю пару нестерильных перчаток поверх рукавов комбинезона",
    cardAction: "Выполнить",
    cardExemple: "«Надеваю внешнюю пару нестерильных перчаток поверх рукавов комбинезона»."
  },
  {
    cardID: 11,
    cardOrder: 18,
    cardQestion: "Убедиться в отсутствии непокрытых кожных покровов, зазоров между элементами",
    cardAction: "Выполнить",
    cardExemple: "«Кожных покровы прикрыты, зазоров нет»."
  },
  {
    cardID: 11,
    cardOrder: 19,
    cardQestion: "Поместить упаковки из-под перчаток, комбинезона, бахил, респиратора, шапочки в отходы класса А",
    cardAction: "Выполнить",
    cardExemple: "«Помещаю упаковки из-под перчаток, комбинезона, бахил, респиратора, шапочки в отходы класса А»"
  },

  //Чеклист 12

  {
    cardID: 12,
    cardOrder: 1,
    cardQestion: "Обработать руки гигиеническим способом (кожным антисептиком)",
    cardAction: "Сказать",
    cardExemple: "Обрабатываем руки гигиеническим способом (кожным антисептиком)"
  },
  {
    cardID: 12,
    cardOrder: 2,
    cardQestion: "Взять стерильные перчатки, проверить герметичность упаковки и срок годности.",
    cardAction: "Выполнить",
    cardExemple: "Проверяем герметичность и срок годности  упаковки со стерильными перчатками."
  },
  {
    cardID: 12,
    cardOrder: 3,
    cardQestion: "Открыть упаковку, не нарушая стерильности.",
    cardAction: "Выполнить",
    cardExemple: "Открываем упаковку, не нарушая её стерильности."
  },
  {
    cardID: 12,
    cardOrder: 4,
    cardQestion: "Попросить помощника поместить упаковку от перчаток в емкость для отходов класса «А»",
    cardAction: "Выполнить",
    cardExemple: "«Попросить помощника поместить упаковку от перчаток в емкость для отходов класса «А»"
  },
  {
    cardID: 12,
    cardOrder: 5,
    cardQestion: "Взять перчатку для правой руки за отворот так, чтобы пальцы не касались наружной (рабочей) поверхности перчатки.",
    cardAction: "Выполнить",
    cardExemple: "Берем перчатку для правой руки за отворот так, чтобы пальцы не касались наружной (рабочей) поверхности перчатки."
  },
  {
    cardID: 12,
    cardOrder: 6,
    cardQestion: "Сомкнуть пальцы правой руки и ввести их в перчатку.",
    cardAction: "Выполнить",
    cardExemple: "Смыкаем пальцы правой руки и вводим их в перчатку."
  },
  {
    cardID: 12,
    cardOrder: 7,
    cardQestion: "Разомкнуть пальцы правой руки и натянуть на них перчатку, не нарушая отворота.",
    cardAction: "Выполнить",
    cardExemple: "Размыкаем пальцы правой руки и натягиваем на них перчатку, не нарушая отворота."
  },
  {
    cardID: 12,
    cardOrder: 8,
    cardQestion: "Завести под отворот левой перчатки 2-й, 3-й и 4-й пальцы правой руки, уже одетой в перчатку, так, чтобы 1-й палец правой руки был направлен в сторону 1-го пальца на левой перчатке.",
    cardAction: "Выполнить",
    cardExemple: "Заводим под отворот левой перчатки 2-й, 3-й и 4-й пальцы правой руки, уже одетой в перчатку, так, чтобы 1й палец правой руки был направлен в сторону 1го пальца на левой перчатке."
  },
  {
    cardID: 12,
    cardOrder: 9,
    cardQestion: "Сомкнуть пальцы левой руки и ввести их в перчатку.",
    cardAction: "Выполнить",
    cardExemple: "Смыкаем пальцы левой руки и вводим их в перчатку."
  },
  {
    cardID: 12,
    cardOrder: 2,
    cardQestion: "Расправить отворот левой перчатки, натянув ее на рукав, затем на правой с помощью 2-го и 3-го пальцев, подводя их под подвернутый край перчатки.",
    cardAction: "Выполнить",
    cardExemple: "Расправляем отворот левой перчатки, натянув ее на рукав, затем на правой с помощью 2-го и 3-го пальцев, подводя их под подвернутый край перчатки."
  },

  //Чеклист 13

  {
    cardID: 13,
    cardOrder: 1,
    cardQestion: "Подготовить необходимые ресурсы",
    cardAction: "Сказать",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 2,
    cardQestion: "Снять украшения и часы с рук",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 3,
    cardQestion: "Убедиться, что ногти коротко подстрижены, искусственных ногтей нет",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 4,
    cardQestion: "Убедиться, что на руках и под ногтями нет следов грязи",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 5,
    cardQestion: "Открыть кран, отрегулировать температуру и напор воды",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 6,
    cardQestion: "Запустить отсчет времени",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 7,
    cardQestion: "Увлажнить руки водой до локтевого сгиба",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 8,
    cardQestion: "С помощью дозатора нанести на ладони достаточное количество жидкого мыла, чтобы покрыть всю поверхность руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 9,
    cardQestion: "Потереть одну ладонь о другую ладонь возвратно-поступательными движениями",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 10,
    cardQestion: "Правой ладонью растереть тыльную поверхность левой кисти, переплетая пальцы",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 11,
    cardQestion: "Левой ладонью растереть тыльную поверхность правой кисти, переплетая пальцы",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 12,
    cardQestion: "Соединить пальцы одной руки в межпальцевых промежутках другой, тереть внутренние поверхности пальцев движениями вверх и вниз",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 13,
    cardQestion: "Поменять руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 14,
    cardQestion: "Соединить пальцы в «замок», тыльной стороной согнутых пальцев растирать ладонь другой руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 15,
    cardQestion: "Поменять руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 16,
    cardQestion: "Охватить основание большого пальца левой кисти между большим и указательным пальцами правой кисти, провести вращательное трение",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 17,
    cardQestion: "Провести вращательное трение на запястье пальцами правой кисти",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 18,
    cardQestion: "Поменять руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 19,
    cardQestion: "Охватить основание большого пальца правой кисти между большим и указательным пальцами левой кисти, провести вращательное трение",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 20,
    cardQestion: "Провести вращательное трение на запястье пальцами левой кисти",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 21,
    cardQestion: "Круговым движением тереть ладонь правой кисти кончиками пальцев левой руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 22,
    cardQestion: "Поменять руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 23,
    cardQestion: "Круговым движением тереть ладонь левой кисти кончиками пальцев правой руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 24,
    cardQestion: "Намылить правое предплечье ладонной поверхностью левой кисти прямыми движениями поочередно от запястья до локтя, соблюдая технику намыливания,  ладонь скользит по наружной (внутренней) поверхности предплечья, сомкнутые пальцы кисти  по ребру предплечья",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 25,
    cardQestion: "Поменять руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 26,
    cardQestion: "Намылить левое предплечье ладонной поверхностью правой кисти прямыми движениями поочередно от запястья до локтя, соблюдая технику намыливания,  ладонь скользит по наружной (внутренней) поверхности предплечья, сомкнутые пальцы кисти  по ребру предплечья",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 27,
    cardQestion: "Убедиться, что смываемая мыльная пена белоснежная",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 28,
    cardQestion: "Проводить всю процедуру 2 минуты",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 29,
    cardQestion: "Ополоснуть руки проточной водой для удаления мыльной пены от ногтевых фаланг до локтевого сгиба",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 30,
    cardQestion: "Закрыть кран локтем",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 31,
    cardQestion: "Насухо промокнуть руки (поочередно) стерильной тканевой салфеткой (с расчетом на одну руку), начиная с кончиков пальцев  по направлению к локтевому сгибу",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 32,
    cardQestion: "Поместить салфетки в отходы класса А",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 33,
    cardQestion: "Нанести необходимое количество кожного антисептика согласно инструкции к антисептическому средству на ладонь левой руки, используя локоть правой руки для управления дозатором",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 34,
    cardQestion: "Погрузить в средство кончики пальцев правой руки для обеззараживания подногтевых пространств",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 35,
    cardQestion: "Распределить средство по всей поверхности правого предплечья круговыми движениями до высыхания средства (1015 секунд)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 36,
    cardQestion: "Нанести необходимое количество кожного антисептика согласно инструкции к антисептическому средству на ладонь правой руки, используя локоть левой руки для управления дозатором",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 37,
    cardQestion: "Погрузить в средство кончики пальцев левой руки для обеззараживания подногтевых пространств",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 38,
    cardQestion: "Распределить средство по всей поверхности левого предплечья круговыми движениями до высыхания средства (1015 секунд)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 39,
    cardQestion: "Нанести необходимое количество кожного антисептика согласно инструкции к антисептическому средству  ладонь левой руки, используя локоть правой руки для управления дозатором",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 40,
    cardQestion: "Обработать руки до запястья в течение 30 секунд",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 41,
    cardQestion: "Повторить каждое движение 5 раз",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 42,
    cardQestion: "Нанести средство на всю поверхность кистей рук до запястья и круговыми движениями растереть средство",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 43,
    cardQestion: "Обработать тыльную сторону левой кисти, включая запястье, двигая правую ладонь вперед-назад",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 44,
    cardQestion: "Поменять руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 45,
    cardQestion: "Обработать тыльную сторону правой кисти, включая запястье, двигая левую ладонь вперед-назад",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 46,
    cardQestion: "Переплести пальцы и тереть внутренние поверхности пальцев и межпальцевые промежутки движениями вверх-вниз",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 47,
    cardQestion: "Соединить пальцы в «замок», тыльной стороной согнутых пальцев левой руки растирать ладонь правой руки движениями вперед и назад",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 48,
    cardQestion: "Поменять руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 49,
    cardQestion: "Соединить пальцы в «замок», тыльной стороной согнутых пальцев правой руки растирать ладонь левой руки движениями вперед и назад",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 50,
    cardQestion: "Охватить большой палец левой руки правой ладонью и потереть его круговыми движениями",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 51,
    cardQestion: "Поменять руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 52,
    cardQestion: "Охватить большой палец правой руки левой ладонью и потереть его круговыми движениями",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 53,
    cardQestion: "Тереть ладонь левой кисти кончиками пальцев правой руки круговыми движениями",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 54,
    cardQestion: "Поменять руки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 55,
    cardQestion: "Тереть ладонь правой кисти кончиками пальцев левой руки круговыми движениями",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 56,
    cardQestion: "Втирать антисептик до полного высыхания рук",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 13,
    cardOrder: 57,
    cardQestion: "Кисти рук держать выше локтевых сгибов на уровне груди",
    cardAction: "Выполнить",
    cardExemple: ""
  },

  //Чеклист 14

  {
    cardID: 14,
    cardOrder: 1,
    cardQestion: "Подготовить все необходимое оснащение",
    cardAction: "Сказать",
    cardExemple: ""
  },
  {
    cardID: 14,
    cardOrder: 2,
    cardQestion: "При загрязнении перчаток выделениями, кровью во избежании загрязнения рук в процессе их снятия следует обработать салфеткой, смоченной раствором дезинфицирующего средства",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 14,
    cardOrder: 3,
    cardQestion: "Поместить салфетку в пакет для медицинских отходов класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 14,
    cardOrder: 4,
    cardQestion: "Сделать отворот пальцами правой руки на левой перчатке, касаясь её только с наружной стороны",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 14,
    cardOrder: 5,
    cardQestion: "Сделать отворот пальцами левой руки на правой перчатке, касаясь её только с наружной стороны",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 14,
    cardOrder: 6,
    cardQestion: "Снять перчатку с левой руки, заведя правую руку под отворот",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 14,
    cardOrder: 7,
    cardQestion: "Вывернуть её наизнанку",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 14,
    cardOrder: 8,
    cardQestion: "Держать снятую с левой руки перчатку в правой руке",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 14,
    cardOrder: 9,
    cardQestion: "Взять перчатку левой рукой за отворот на правой руке с внутренней стороны.",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 14,
    cardOrder: 10,
    cardQestion: "Снять перчатку с правой, руки выворачивая её наизнанку",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 14,
    cardOrder: 11,
    cardQestion: "Поместить перчатки в пакет для отходов класса Б.",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 14,
    cardOrder: 12,
    cardQestion: "Обработать руки гигиеническим способом (кожным антисептиком)",
    cardAction: "Выполнить",
    cardExemple: ""
  },

  //Чеклист 15

  {
    cardID: 15,
    cardOrder: 1,
    cardQestion: "Удалить и утилизировать медицинские отходы",
    cardAction: "Сказать",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 2,
    cardQestion: "Подготовить СИЗ (перчатки, маски, медицинские шапочки, резиновые перчатки, халат)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 3,
    cardQestion: "Подготовить ветошь",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 4,
    cardQestion: "Подготовить уборочный инвентарь",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 5,
    cardQestion: "Подготовить ведро для мытья пола",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 6,
    cardQestion: "Подготовить емкость для обработки поверхностей",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 7,
    cardQestion: "Подготовить моющие и дезинфицирующие средства, разрешенные к применению в Российской Федерации",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 8,
    cardQestion: "Подготовить емкость для дезинфицирующего раствора для обработки использованного уборочного инвентаря",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 9,
    cardQestion: "Если уборка проводится в палате, предупредить пациентов",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 10,
    cardQestion: "Обработать руки гигиеническим способом, осушить",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 11,
    cardQestion: "Надеть СИЗ (перчатки, маски, медицинские шапочки, резиновые перчатки, халат)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 12,
    cardQestion: "Подготовить рабочий раствор дезинфицирующего средства",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 13,
    cardQestion: "Взять приготовленную емкость с дезинфицирующим рабочим раствором и ветошь для обработки поверхностей",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 14,
    cardQestion: "Смочить чистую ветошь в рабочем растворе, приготовленном для обработки поверхностей. Провести уборку по принципу «от чистого к грязному»",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 15,
    cardQestion: "Выдержать раствор на поверхности в течение времени, рекомендованного производителем средства в инструкции",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 16,
    cardQestion: "Если дезинфицирующий раствор требует смывания, переодеться в чистый халат и чистой ветошью, смоченной водопроводной водой, отмыть все поверхности от дезинфицирующего средства",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 17,
    cardQestion: "Взять ведро с приготовленным дезинфицирующим средством, швабру и ветошь (МОП) для обработки пола",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 18,
    cardQestion: "Вымыть пол по принципу «от чистого к грязному»",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 19,
    cardQestion: "Уборку туалетных комнат и душевых в палатах провести в последнюю очередь",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 20,
    cardQestion: "Провести «кварцевание» помещения",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 21,
    cardQestion: "Провести обеззараживание уборочного инвентаря",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 22,
    cardQestion: "Тщательно высушить уборочный инвентарь",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 23,
    cardQestion: "Убрать уборочный инвентарь в место хранения",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 24,
    cardQestion: "Снять средства индивидуальной защиты, поместить их в отходы класса Б",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 15,
    cardOrder: 25,
    cardQestion: "Обработать руки гигиеническим способом",
    cardAction: "Выполнить",
    cardExemple: ""
  },

  //Чеклист 16

  {
    cardID: 16,
    cardOrder: 1,
    cardQestion: "Подготовить необходимое оснащение (упаковку с нестерильными перчатками и антисептик)",
    cardAction: "Сказать",
    cardExemple: ""
  },
  {
    cardID: 16,
    cardOrder: 2,
    cardQestion: "Обработать руки гигиеническим способом",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 16,
    cardOrder: 3,
    cardQestion: "Достать перчатку из коробки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 16,
    cardOrder: 4,
    cardQestion: "Касаться только верхнего края перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 16,
    cardOrder: 5,
    cardQestion: "Надеть первую перчатку",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 16,
    cardOrder: 6,
    cardQestion: "Достать вторую перчатку рукой без перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 16,
    cardOrder: 7,
    cardQestion: "Касаться только верхнего края перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 16,
    cardOrder: 8,
    cardQestion: "Вывернуть наружную поверхность второй перчатки так, чтобы она была надета на согнутые пальцы первой руки (которая уже в перчатке)",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 16,
    cardOrder: 9,
    cardQestion: "Надеть вторую перчатку",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 16,
    cardOrder: 10,
    cardQestion: "После того, как перчатки надеты, не прикасаться к загрязненным поверхностям, чтобы не менять перчатки",
    cardAction: "Выполнить",
    cardExemple: ""
  },

  //Чеклист 17

  {
    cardID: 17,
    cardOrder: 1,
    cardQestion: "Обработать руки гигиеническим способом",
    cardAction: "Сказать",
    cardExemple: ""
  },
  {
    cardID: 17,
    cardOrder: 2,
    cardQestion: "Надеть шапочку и одноразовую маску",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 17,
    cardOrder: 3,
    cardQestion: "Подготовить необходимое оснащение",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 17,
    cardOrder: 4,
    cardQestion: "Проверить сроки стерилизации и герметичность упаковки халата",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 17,
    cardOrder: 5,
    cardQestion: "Вскрыть упаковку халата.",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 17,
    cardOrder: 6,
    cardQestion: "Извлечь халат из упаковки",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 17,
    cardOrder: 7,
    cardQestion: "Упаковку от халата поместить в отходы класса А",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 17,
    cardOrder: 8,
    cardQestion: "Расправить халат.",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 17,
    cardOrder: 9,
    cardQestion: "Завести поочередно кисти рук в отверстия для рукавов",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 17,
    cardOrder: 10,
    cardQestion: "Вытянуть руки вперед и в стороны, дать халату полностью расправиться",
    cardAction: "Выполнить",
    cardExemple: ""
  },
  {
    cardID: 17,
    cardOrder: 11,
    cardQestion: "Зафиксировать сзади застежки-липучки на горловине халата, подтянуть и завязать тесемки внутри халата на спине, завязать тесемки халата спереди и слева. Примечание: Кисти рук держать выше локтевых сгибов",
    cardAction: "Выполнить",
    cardExemple: ""
  },
];

