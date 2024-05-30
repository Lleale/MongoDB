
// Полный список предметов
db.Subjects.insertMany([
    { 'name': 'Математика' },
    { 'name': 'Иностранный язык' },
    { 'name': 'Программирование' },
    { 'name': 'Философия' },
    { 'name': 'Экономика' },
    { 'name': 'История' },
    { 'name': 'Юриспруденция' },
    { 'name': 'Физкультура' },
    { 'name': 'Теория вероятности' },
    { 'name': 'Предпринимательство' }
]);

// Список преподавателей
db.Teachers.insertMany([
    { 'name': 'Дроздов Антон Николаевич' },
    { 'name': 'Губов Владимир Алексеевич' },
    { 'name': 'Купринова Ольга Сергеевна' },
    { 'name': 'Коротько Галина Андреевна' },
    { 'name': 'Казанков Александр Алексеевич' }
]);

// Направления и предметы с преподавателями
db.Directions.insertMany([
    {
        'code': '09.03.03', 'name': 'Прикладная информатика', 'subjects': [
            { 'name': db.Subjects.findOne({ 'name': 'Математика' })._id, 'teacher': db.Teachers.findOne({ 'name': 'Губов Владимир Алексеевич' })._id },
            { 'name': db.Subjects.findOne({ 'name': 'Программирование' })._id, 'teacher': db.Teachers.findOne({ 'name': 'Дроздов Антон Николаевич' })._id },
            { 'name': db.Subjects.findOne({ 'name': 'Предпринимательство' })._id, 'teacher': db.Teachers.findOne({ 'name': 'Губов Владимир Алексеевич' })._id },
            { 'name': db.Subjects.findOne({ 'name': 'Физкультура' })._id, 'teacher': db.Teachers.findOne({ 'name': 'Коротько Галина Андреевна' })._id }
        ]
    },
    {
        'code': '38.03.01', 'name': 'Экономика', 'subjects': [
            { 'name': db.Subjects.findOne({ 'name': 'Математика' })._id, 'teacher': db.Teachers.findOne({ 'name': 'Дроздов Антон Николаевич' })._id },
            { 'name': db.Subjects.findOne({ 'name': 'Иностранный язык' })._id, 'teacher': db.Teachers.findOne({ 'name': 'Купринова Ольга Сергеевна' })._id },
            { 'name': db.Subjects.findOne({ 'name': 'Программирование' })._id, 'teacher': db.Teachers.findOne({ 'name': 'Казанков Александр Алексеевич' })._id },
            { 'name': db.Subjects.findOne({ 'name': 'История' })._id, 'teacher': db.Teachers.findOne({ 'name': 'Купринова Ольга Сергеевна' })._id },
            { 'name': db.Subjects.findOne({ 'name': 'Философия' })._id, 'teacher': db.Teachers.findOne({ 'name': 'Казанков Александр Алексеевич' })._id }
        ]
    },
    {
        'code': '40.03.01', 'name': 'Юриспруденция', 'subjects': [
            { 'name': db.Subjects.findOne({ 'name': 'Философия' })._id, 'teacher': db.Teachers.findOne({ 'name': 'Казанков Александр Алексеевич' })._id },
            { 'name': db.Subjects.findOne({ 'name': 'Математика' })._id, 'teacher': db.Teachers.findOne({ 'name': 'Губов Владимир Алексеевич' })._id },
            { 'name': db.Subjects.findOne({ 'name': 'Иностранный язык' })._id, 'teacher': db.Teachers.findOne({ 'name': 'Коротько Галина Андреевна' })._id }
        ]
    }
]);

// Группы и их принадлежность к напрвлениям
db.Groups.insertMany([
    { 'name': 'ФИ101', 'direction': db.Directions.findOne({ 'name': 'Прикладная информатика' })._id },
    { 'name': 'ПИ101', 'direction': db.Directions.findOne({ 'name': 'Прикладная информатика' })._id },
    { 'name': 'ИС101', 'direction': db.Directions.findOne({ 'name': 'Прикладная информатика' })._id },
    { 'name': 'Э203', 'direction': db.Directions.findOne({ 'name': 'Экономика' })._id },
    { 'name': 'Э102', 'direction': db.Directions.findOne({ 'name': 'Экономика' })._id },
    { 'name': 'Э111', 'direction': db.Directions.findOne({ 'name': 'Экономика' })._id },
    { 'name': 'Ю102', 'direction': db.Directions.findOne({ 'name': 'Юриспруденция' })._id },
    { 'name': 'ЮЗ402', 'direction': db.Directions.findOne({ 'name': 'Юриспруденция' })._id },
    { 'name': 'Ю203Ж', 'direction': db.Directions.findOne({ 'name': 'Юриспруденция' })._id }
]);

// Информация о студентах
db.Students.insertMany([
    { 'name': 'Иванов Иван Алексеевич', 'date_of_birth': '2002.11.23', 'address': 'г.Новосибирск ул.Добролюбова д.34', 'email': 'qwe@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'ФИ101' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Очаков Николай Александрович', 'date_of_birth': '2002.06.30', 'address': 'г.Новосибирск ул.Красный проспект д.6', 'email': 'fgvbgf@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ФИ101' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Суворов Дмитрий Иванович', 'date_of_birth': '2002.05.12', 'address': 'г.Новкузнецк ул.Зеленая д.342', 'email': 'qgbfgbfwe@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ФИ101' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Конфеткин Иван Александрович', 'date_of_birth': '2002.03.18', 'address': 'г.Колывань ул.Кирова д.76', 'email': 'qwbfgbe@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'ФИ101' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Павлова Анна Ивановна', 'date_of_birth': '2003.05.01', 'address': 'г.Новосибирск ул.Пушкина д.23', 'email': 'qwbfgbe@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ФИ101' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Камчаткин Дмитрий Александрович', 'date_of_birth': '2001.03.18', 'address': 'г.Новосибирск ул.Добролюбова д.145', 'email': 'gbf@gmail.com', 'group_id': db.Groups.findOne({ 'name': 'ФИ101' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Куприн Юлия Сергеевна', 'date_of_birth': '2002.02.27', 'address': 'г.Томск ул.Бориса Богаткова д.34', 'email': 'qwbfgbfe@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ФИ101' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Коалов Иван Иванович', 'date_of_birth': '2002.11.01', 'address': 'г.Новосибирск ул.Чурчхелы д.35', 'email': 'qbwe@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ПИ101' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Какич Дмитрий Иванович', 'date_of_birth': '2002.11.02', 'address': 'г.Томск ул.Церковная д.42', 'email': 'lhg@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'ПИ101' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Зубрин Иван Алексеевич', 'date_of_birth': '2002.11.03', 'address': 'г.Новкузнецк ул.Золотая д.64', 'email': 'jghjg@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ПИ101' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Козлов Николай Иванович', 'date_of_birth': '2002.11.04', 'address': 'г.Томск ул.Добролюбова д.54', 'email': 'vsdv@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'ПИ101' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Урлик Иван Иванович', 'date_of_birth': '2002.11.07', 'address': 'г.Новосибирск ул.Каменная д.45', 'email': 'vdfdfb@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ПИ101' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Мещанова Юлия Иванович', 'date_of_birth': '2002.12.03', 'address': 'г.Томск ул.Кремлевская д.45', 'email': 'fbdfbdf@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'ПИ101' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Боярский Тарас Александрович', 'date_of_birth': '2002.10.09', 'address': 'г.Томск ул.Купленная д.54', 'email': 'bdfbd@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ПИ101' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Туркин Иван Алексеевич', 'date_of_birth': '2002.06.17', 'address': 'г.Томск ул.Довлатова д.68', 'email': 'bfdbn@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ПИ101' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Кравченко Евгений Иоанович', 'date_of_birth': '2002.12.31', 'address': 'г.Новосибирск ул.Дровникова д.286', 'email': 'bfdb@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ИС101' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Наров Иван Александрович', 'date_of_birth': '2002.09.02', 'address': 'г.Новосибирск ул.Пролетариата д.13', 'email': 'qwngfnge@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'ИС101' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Прохоров Дмитрий Алексеевич', 'date_of_birth': '2002.11.11', 'address': 'г.Томск ул.Дремова д.251', 'email': 'ngfn@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ИС101' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Паничкин Николай Иванович', 'date_of_birth': '2002.11.13', 'address': 'г.Томск ул.Травникова д.321', 'email': 'nfgnf@gmail.com', 'group_id': db.Groups.findOne({ 'name': 'ИС101' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Дорогина Анна Иванович', 'date_of_birth': '2002.09.01', 'address': 'г.Колывань ул.Добролюбова д.51', 'email': 'fnngn@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ИС101' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Дратутин Николай Александрович', 'date_of_birth': '2002.04.19', 'address': 'г.Новосибирск ул.Труда д.28', 'email': 'ddddddddd@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'ИС101' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Досвиданя Дмитрий Иванович', 'date_of_birth': '2002.05.27', 'address': 'г.Томск ул.Мира д.48', 'email': 'fdbfbdf@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ИС101' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Кукиш Иван Александрович', 'date_of_birth': '2002.02.04', 'address': 'г.Томск ул.Земляничная д.64', 'email': 'lkji@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'ИС101' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Карпова Юлия Иванович', 'date_of_birth': '2002.01.03', 'address': 'г.Новкузнецк ул.Кубышкина д.564', 'email': 'sdfs@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'ИС101' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Крылова Ульяна Ильинична', 'date_of_birth': '2002.11.08', 'address': 'г. Новосибирск ул.Якуба Коласа д.6', 'email': 'efim.mosh@outlook.com', 'group_id': db.Groups.findOne({ 'name': 'Э203' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Харитонова Милана Демьяновна', 'date_of_birth': '2001.11.20', 'address': 'г.Бердск ул.Мирная д.2 кв.84', 'email': 'yurin06121967@gmail.com', 'group_id': db.Groups.findOne({ 'name': 'Э203' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Головин Александр Дмитриевич', 'date_of_birth': '2002.01.03', 'address': 'г.Новосибирск ул.Речная д.11 кв.126', 'email': 'in.sarna@outlook.com', 'group_id': db.Groups.findOne({ 'name': 'Э203' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Гордеева Ксения Артёмовна', 'date_of_birth': '2000.02.18', 'address': 'г.Новосибирск ул.Минская д.21 кв.111', 'email': 'pelageya1405@hotmail.com', 'group_id': db.Groups.findOne({ 'name': 'Э203' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Лебедев Арсений Алексеевич', 'date_of_birth': '2003.07.25', 'address': 'г.Новосибирск ул.Победы д.12 кв.214', 'email': 'sem82@ya.ru', 'group_id': db.Groups.findOne({ 'name': 'Э203' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Смирнов Кирилл Михайлович', 'date_of_birth': '2002.12.25', 'address': 'г.Куйбышев ул.Победы д.14 кв.130', 'email': 'poln25121978@rambler.ru', 'group_id': db.Groups.findOne({ 'name': 'Э203' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Александров Игорь Олегович', 'date_of_birth': '2002.02.06', 'address': 'г.Новосибирск ул.Космонавтов д.19 кв.103', 'email': 'aton2899@rambler.ru', 'group_id': db.Groups.findOne({ 'name': 'Э203' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Николаев Илья Егорович', 'date_of_birth': '2002.06.02', 'address': 'г.Новосибирск Луговая ул. д. 8 кв.148', 'email': 'konstantin08111969@outlook.com', 'group_id': db.Groups.findOne({ 'name': 'Э102' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Воробьева Анна Данииловна', 'date_of_birth': '2003.05.24', 'address': 'г.Новосибирск Космонавтов ул. д. 19 кв.103', 'email': 'arkadiy27071985@ya.ru', 'group_id': db.Groups.findOne({ 'name': 'Э102' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Медведев Даниил Андреевич', 'date_of_birth': '2003.04.27', 'address': 'г.Томск Калинина ул. д. 23 кв.150', 'email': 'nika5557@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'Э102' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Лосева Нина Владимировна', 'date_of_birth': '2001.09.10', 'address': 'г.Новосибирск Хуторская ул. д. 11 кв.90', 'email': 'valeriya79@outlook.com', 'group_id': db.Groups.findOne({ 'name': 'Э102' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Лебедев Артём Романович', 'date_of_birth': '2003.08.21', 'address': 'г.Новосибирск 3 Марта ул. д. 17 кв.50', 'email': 'kuzma91@rambler.ru', 'group_id': db.Groups.findOne({ 'name': 'Э102' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Елисеева Александра Ярославовна', 'date_of_birth': '2003.02.14', 'address': 'г.Новосибирск Лесной пер. д. 8 кв.213', 'email': 'rada99@gmail.com', 'group_id': db.Groups.findOne({ 'name': 'Э102' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Яшин Дмитрий Дмитриевич', 'date_of_birth': '2001.10.01', 'address': 'г.Мочище Луговая ул. д. 3 кв.39', 'email': 'tamara7482@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'Э102' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Иванов Лев Владиславович', 'date_of_birth': '2002.11.18', 'address': 'г.Новосибирск Светлая ул. д. 6 кв.96', 'email': 'german26021968@outlook.com', 'group_id': db.Groups.findOne({ 'name': 'Э111' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Мешкова Анастасия Никитична', 'date_of_birth': '2000.03.04', 'address': 'г.Новосибирск Речная ул. д. 17 кв.142', 'email': 'pavel36@outlook.com', 'group_id': db.Groups.findOne({ 'name': 'Э111' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Ларионов Вадим Богданович', 'date_of_birth': '2001.07.24', 'address': 'г.Бердск Западная ул. д. 22 кв.19', 'email': 'emelyan38@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'Э111' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Савельева Кира Ильинична', 'date_of_birth': '2001.01.28', 'address': 'г.Новосибирск Березовая ул. д. 21 кв.15', 'email': 'viktoriya.kutepova@gmail.com', 'group_id': db.Groups.findOne({ 'name': 'Э111' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Бурова Малика Максимовна', 'date_of_birth': '2002.07.23', 'address': 'г.Новосибирск Строителей ул. д. 6 кв.156', 'email': 'lyubov73@gmail.com', 'group_id': db.Groups.findOne({ 'name': 'Э111' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Трофимова Елизавета Дмитриевна', 'date_of_birth': '2000.05.06', 'address': 'г.Мочище Лесной пер. д. 20 кв.102', 'email': 'lev7311@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'Э111' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Басова Вера Романовна', 'date_of_birth': '2004.01.16', 'address': 'г.Новосибирск Песчаная ул. д. 21 кв.88', 'email': 'georgiy.nekrestyanov@gmail.com', 'group_id': db.Groups.findOne({ 'name': 'Э111' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Воронцов Владимир Кириллович', 'date_of_birth': '2001.12.22', 'address': 'г.Новосибирск Школьная ул. д. 23 кв.182', 'email': 'maryamna7165@hotmail.com', 'group_id': db.Groups.findOne({ 'name': 'Э111' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Власова Сафия Артёмовна', 'date_of_birth': '2002.06.18', 'address': 'г.Новосибирск Приозерная ул. д. 25 кв.32', 'email': 'yuriy.jgulev@rambler.ru', 'group_id': db.Groups.findOne({ 'name': 'Э111' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Кузьмина Анастасия Львовна', 'date_of_birth': '2000.08.24', 'address': 'г.Томск Интернациональная ул. д. 25 кв.15', 'email': 'valentin1995@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'Э111' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Горохова Лидия Матвеевна', 'date_of_birth': '20010420', 'address': 'г.Новосибирск Комсомольская ул. д. 10 кв.13', 'email': 'tatyana9938@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Иванов Эмир Владиславович', 'date_of_birth': '20020909', 'address': 'г.Бердск Южная ул. д. 22 кв.99', 'email': 'egor33@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Суворова Софья Тимофеевна', 'date_of_birth': '20040921', 'address': 'г.Новосибирск Новая ул. д. 23 кв.8', 'email': 'yakov3206@outlook.com', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Куликова Дарья Дмитриевна', 'date_of_birth': '20010718', 'address': 'г.Новосибирск Рабочая ул. д. 8 кв.167', 'email': 'danila.korjev@outlook.com', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Сазонова Кира Леонидовна', 'date_of_birth': '20021207', 'address': 'г.Бердск Приозерная ул. д. 20 кв.163', 'email': 'margarita2079@gmail.com', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Карпова Мария Павловна', 'date_of_birth': '20040806', 'address': 'г.Новосибирск Ленина ул. д. 11 кв.211', 'email': 'nastasya5069@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Тихомиров Герман Макарович', 'date_of_birth': '20040220', 'address': 'г.Новосибирск Чапаева ул. д. 17 кв.154', 'email': 'maryamna14@rambler.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Горохова Лидия Матвеевна', 'date_of_birth': '2001.04.20', 'address': 'г.Новосибирск Комсомольская ул. д. 10 кв.13', 'email': 'tatyana9938@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Иванов Эмир Владиславович', 'date_of_birth': '2002.09.09', 'address': 'г.Бердск Южная ул. д. 22 кв.99', 'email': 'egor33@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Суворова Софья Тимофеевна', 'date_of_birth': '2004.09.21', 'address': 'г.Новосибирск Новая ул. д. 23 кв.8', 'email': 'yakov3206@outlook.com', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Куликова Дарья Дмитриевна', 'date_of_birth': '2001.07.18', 'address': 'г.Новосибирск Рабочая ул. д. 8 кв.167', 'email': 'danila.korjev@outlook.com', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Сазонова Кира Леонидовна', 'date_of_birth': '2002.12.07', 'address': 'г.Бердск Приозерная ул. д. 20 кв.163', 'email': 'margarita2079@gmail.com', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Карпова Мария Павловна', 'date_of_birth': '2004.08.06', 'address': 'г.Новосибирск Ленина ул. д. 11 кв.211', 'email': 'nastasya5069@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Тихомиров Герман Макарович', 'date_of_birth': '2004.02.20', 'address': 'г.Новосибирск Чапаева ул. д. 17 кв.154', 'email': 'maryamna14@rambler.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю102' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Ширяева Аделина Ивановна', 'date_of_birth': '2002.12.27', 'address': 'г.Новосибирск Первомайская ул. д. 18 кв.100', 'email': 'veronika1990@yandex.ru', 'group_id': db.Groups.findOne({ 'name': 'ЮЗ402' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Егоров Дмитрий Романович', 'date_of_birth': '2000.03.16', 'address': 'г.Новосибирск Лесной пер. д. 3 кв.176', 'email': 'yuliya07121994@ya.ru', 'group_id': db.Groups.findOne({ 'name': 'ЮЗ402' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Шапошников Георгий Сергеевич', 'date_of_birth': '2003.07.31', 'address': 'г.Новосибирск Колхозная ул. д. 15 кв.110', 'email': 'egor6327@outlook.com', 'group_id': db.Groups.findOne({ 'name': 'ЮЗ402' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Гуляева Марта Демидовна', 'date_of_birth': '2002.10.10', 'address': 'г.Новосибирск Победы ул. д. 17 кв.152', 'email': 'egor6327@outlook.com', 'group_id': db.Groups.findOne({ 'name': 'ЮЗ402' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Данилов Никита Артёмович', 'date_of_birth': '2003.03.27', 'address': 'г.Мочище Озерная ул. д. 12 кв.214', 'email': 'aleksandra1981@ya.ru', 'group_id': db.Groups.findOne({ 'name': 'ЮЗ402' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Громов Антон Александрович', 'date_of_birth': '2004.01.24', 'address': 'г.Новосибирск Якуба Коласа ул. д. 21 кв.148', 'email': 'egor80@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ЮЗ402' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Моисеева София Платоновна', 'date_of_birth': '2004.08.22', 'address': 'г.Мочище Светлая ул. д. 21 кв.105', 'email': 'lana1960@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ЮЗ402' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Филатова Дарья Сергеевна', 'date_of_birth': '2003.12.16', 'address': 'г.Новосибирск Лесной пер. д. 4 кв.94', 'email': 'filipp04021987@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ЮЗ402' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Завьялов Артём Михайлович', 'date_of_birth': '2001.03.14', 'address': 'г.Новосибирск Луговая ул. д. 25 кв.128', 'email': 'afanasiya1968@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ЮЗ402' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Морозов Даниил Ильич', 'date_of_birth': '2002.01.25', 'address': 'г.Новосибирск Молодежный пер. д. 1 кв.32', 'email': 'valentin64@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'ЮЗ402' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Моисеев Всеволод Ярославович', 'date_of_birth': '2000.02.16', 'address': 'г.Новосибирск Чкалова ул. д. 12 кв.178', 'email': 'valentin64@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю203Ж' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Кузнецов Сергей Фёдорович', 'date_of_birth': '2000.02.09', 'address': 'г.Бердск Чкалова ул. д. 12 кв.178', 'email': 'anton1981@hotmail.com', 'group_id': db.Groups.findOne({ 'name': 'Ю203Ж' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Виноградова Сабина Тимофеевна', 'date_of_birth': '2002.04.15', 'address': 'г.Новосибирск Октябрьский пер. д. 14 кв.72', 'email': 'yurin95@mail.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю203Ж' })._id, 'budget': true, 'phones': [] },
    { 'name': 'Филимонова София Данииловна', 'date_of_birth': '2000.05.01', 'address': 'г.Новосибирск Полевая ул. д. 1 кв.11', 'email': 'rimma05021965@ya.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю203Ж' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Лазарев Максим Ильич', 'date_of_birth': '2003.04.03', 'address': 'г.Бердск Дружбы ул. д. 13 кв.129', 'email': 'german21011973@ya.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю203Ж' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Пономарев Давид Никитич', 'date_of_birth': '2003.01.12', 'address': 'г.Мочище Солнечный пер. д. 10 кв.98', 'email': 'alina14011965@rambler.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю203Ж' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Львова Ирина Руслановна', 'date_of_birth': '2000.07.29', 'address': 'г.Новосибирск Заречная ул. д. 10 кв.207', 'email': 'alina14011965@rambler.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю203Ж' })._id, 'budget': false, 'phones': [] },
    { 'name': 'Щербакова Есения Дамировна', 'date_of_birth': '2000.07.06', 'address': 'г.Новосибирск 3 Марта ул. д. 14 кв.159', 'email': 'ulyana88@rambler.ru', 'group_id': db.Groups.findOne({ 'name': 'Ю203Ж' })._id, 'budget': false }
]);

// Внесение оценок студентов направления Прикладная информатика
db.Students.updateMany({ 'group_id': { "$in": [db.Groups.findOne({ 'name': 'ФИ101' })._id, db.Groups.findOne({ 'name': 'ПИ101' })._id, db.Groups.findOne({ 'name': 'ИС101' })._id] } }, {
    "$set": {
        'marks': [
            { 'subject': db.Subjects.findOne({ 'name': 'Математика' })._id, 'mark': Math.floor(Math.random() * 4 + 2) },
            { 'subject': db.Subjects.findOne({ 'name': 'Программирование' })._id, 'mark': Math.floor(Math.random() * 4 + 2) },
            { 'subject': db.Subjects.findOne({ 'name': 'Предпринимательство' })._id, 'mark': Math.floor(Math.random() * 4 + 2) },
            { 'subject': db.Subjects.findOne({ 'name': 'Физкультура' })._id, 'mark': Math.floor(Math.random() * 4 + 2) }]
    }
});

// Внесение оценок студентов направления Экономика
db.Students.updateMany({ 'group_id': { "$in": [db.Groups.findOne({ 'name': 'Э203' })._id, db.Groups.findOne({ 'name': 'Э102' })._id, db.Groups.findOne({ 'name': 'Э111' })._id] } }, {
    "$set": {
        'marks': [
            { 'subject': db.Subjects.findOne({ 'name': 'Математика' })._id, 'mark': Math.floor(Math.random() * 4 + 2) },
            { 'subject': db.Subjects.findOne({ 'name': 'Иностранный язык' })._id, 'mark': Math.floor(Math.random() * 4 + 2) },
            { 'subject': db.Subjects.findOne({ 'name': 'Программирование' })._id, 'mark': Math.floor(Math.random() * 4 + 2) },
            { 'subject': db.Subjects.findOne({ 'name': 'История' })._id, 'mark': Math.floor(Math.random() * 4 + 2) },
            { 'subject': db.Subjects.findOne({ 'name': 'Философия' })._id, 'mark': Math.floor(Math.random() * 4 + 2) }]
    }
});

// Внесение оценок студентов направления Юриспруденция
db.Students.updateMany({ 'group_id': { "$in": [db.Groups.findOne({ 'name': 'Ю102' })._id, db.Groups.findOne({ 'name': 'ЮЗ402' })._id, db.Groups.findOne({ 'name': 'Ю203Ж' })._id] } }, {
    "$set": {
        'marks': [
            { 'subject': db.Subjects.findOne({ 'name': 'Математика' })._id, 'mark': Math.floor(Math.random() * 4 + 2) },
            { 'subject': db.Subjects.findOne({ 'name': 'Иностранный язык' })._id, 'mark': Math.floor(Math.random() * 4 + 2) },
            { 'subject': db.Subjects.findOne({ 'name': 'Программирование' })._id, 'mark': Math.floor(Math.random() * 4 + 2) },
            { 'subject': db.Subjects.findOne({ 'name': 'История' })._id, 'mark': Math.floor(Math.random() * 4 + 2) },
            { 'subject': db.Subjects.findOne({ 'name': 'Философия' })._id, 'mark': Math.floor(Math.random() * 4 + 2) }]
    }
});

// Расписание звонков
db.Timetable.insertMany([
    { 'lesson_number': 1, 'start_time': "09:40:00", "end_time": "11:10:00" },
    { 'lesson_number': 2, 'start_time': "08:00:00", "end_time": "09:30:00" },
    { 'lesson_number': 3, 'start_time': "11:25:00", "end_time": "12:55:00" },
    { 'lesson_number': 4, 'start_time': "13:20:00", "end_time": "14:50:00" },
    { 'lesson_number': 5, 'start_time': "15:05:00", "end_time": "16:35:00" },
    { 'lesson_number': 6, 'start_time': "16:50:00", "end_time": "18:20:00" },
    { 'lesson_number': 7, 'start_time': "18:30:00", "end_time": "20:00:00" },
    { 'lesson_number': 8, 'start_time': "20:05:00", "end_time": "21:35:00" },
]);

// Журналы посещаемости
db.Schedule_attendance.insertMany([
    { 'subject_id': db.Subjects.findOne({ 'name': 'Математика' })._id, 'teacher_id': db.Teachers.findOne({ 'name': 'Губов Владимир Алексеевич' })._id, 'direction_id': db.Directions.findOne({ 'code': '09.03.03' })._id },
    { 'subject_id': db.Subjects.findOne({ 'name': 'Программирование' })._id, 'teacher_id': db.Teachers.findOne({ 'name': 'Дроздов Антон Николаевич' })._id, 'direction_id': db.Directions.findOne({ 'code': '09.03.03' })._id },
    { 'subject_id': db.Subjects.findOne({ 'name': 'Предпринимательство' })._id, 'teacher_id': db.Teachers.findOne({ 'name': 'Губов Владимир Алексеевич' })._id, 'direction_id': db.Directions.findOne({ 'code': '09.03.03' })._id },
    { 'subject_id': db.Subjects.findOne({ 'name': 'Физкультура' })._id, 'teacher_id': db.Teachers.findOne({ 'name': 'Коротько Галина Андреевна' })._id, 'direction_id': db.Directions.findOne({ 'code': '09.03.03' })._id },
    { 'subject_id': db.Subjects.findOne({ 'name': 'Математика' })._id, 'teacher_id': db.Teachers.findOne({ 'name': 'Дроздов Антон Николаевич' })._id, 'direction_id': db.Directions.findOne({ 'code': '38.03.01' })._id },
    { 'subject_id': db.Subjects.findOne({ 'name': 'Иностранный язык' })._id, 'teacher_id': db.Teachers.findOne({ 'name': 'Купринова Ольга Сергеевна' })._id, 'direction_id': db.Directions.findOne({ 'code': '38.03.01' })._id },
    { 'subject_id': db.Subjects.findOne({ 'name': 'Программирование' })._id, 'teacher_id': db.Teachers.findOne({ 'name': 'Казанков Александр Алексеевич' })._id, 'direction_id': db.Directions.findOne({ 'code': '38.03.01' })._id },
    { 'subject_id': db.Subjects.findOne({ 'name': 'История' })._id, 'teacher_id': db.Teachers.findOne({ 'name': 'Купринова Ольга Сергеевна' })._id, 'direction_id': db.Directions.findOne({ 'code': '38.03.01' })._id },
    { 'subject_id': db.Subjects.findOne({ 'name': 'Философия' })._id, 'teacher_id': db.Teachers.findOne({ 'name': 'Казанков Александр Алексеевич' })._id, 'direction_id': db.Directions.findOne({ 'code': '38.03.01' })._id },
    { 'subject_id': db.Subjects.findOne({ 'name': 'Философия' })._id, 'teacher_id': db.Teachers.findOne({ 'name': 'Казанков Александр Алексеевич' })._id, 'direction_id': db.Directions.findOne({ 'code': '40.03.01' })._id },
    { 'subject_id': db.Subjects.findOne({ 'name': 'Математика' })._id, 'teacher_id': db.Teachers.findOne({ 'name': 'Губов Владимир Алексеевич' })._id, 'direction_id': db.Directions.findOne({ 'code': '40.03.01' })._id },
    { 'subject_id': db.Subjects.findOne({ 'name': 'Иностранный язык' })._id, 'teacher_id': db.Teachers.findOne({ 'name': 'Коротько Галина Андреевна' })._id, 'direction_id': db.Directions.findOne({ 'code': '40.03.01' })._id }
]);

function randElemsID(arr) {
    let res = [];
    for (var i = 0; (i < Math.floor(arr.length * 0.7)) && (i < arr.length); i++) {
        let r = Math.floor(Math.random() * arr.length);
        res.push(arr[r]);
        arr.splice(r, 1);
    }
    return res;
}

db.Schedule_attendance.updateMany({}, {
    "$set": {
        'lessons': [
            { 'lesson': db.Timetable.findOne({ 'lesson_number': Math.floor(Math.random() * 7 + 1) }), 'students': randElemsID(db.Students.distinct("_id", { group_id: { $in: db.Groups.distinct("_id") } })) },
            { 'lesson': db.Timetable.findOne({ 'lesson_number': Math.floor(Math.random() * 7 + 1) }), 'students': randElemsID(db.Students.distinct("_id", { group_id: { $in: db.Groups.distinct("_id") } })) },
            { 'lesson': db.Timetable.findOne({ 'lesson_number': Math.floor(Math.random() * 7 + 1) }), 'students': randElemsID(db.Students.distinct("_id", { group_id: { $in: db.Groups.distinct("_id") } })) },
            { 'lesson': db.Timetable.findOne({ 'lesson_number': Math.floor(Math.random() * 7 + 1) }), 'students': randElemsID(db.Students.distinct("_id", { group_id: { $in: db.Groups.distinct("_id") } })) },
            { 'lesson': db.Timetable.findOne({ 'lesson_number': Math.floor(Math.random() * 7 + 1) }), 'students': randElemsID(db.Students.distinct("_id", { group_id: { $in: db.Groups.distinct("_id") } })) },
        ]
    }
});