# Замена 20031223 на 2003.12.23
# '([0-9]{4})([0-9]{2})([0-9]{2})'
# '$1.$2.$3'

import re

def convert_mysql_to_mongodb(mysql_insert):
    
    # Парсинг названия  таблицы
    name = re.search(r'(\w+) \((.+?)\)', mysql_insert).group(0).split(' ')[0]
    
    # Парсинг названий колонок в таблице
    columns_str = re.findall(r'\((.+?)\)', mysql_insert)[0]
    columns = [col.strip() for col in columns_str.split(',')]
    
    # Парсинг значений
    documents = []
    values_str = re.findall(r"\('(.+?)'\)", mysql_insert)
    
    for value in values_str:
        documents.append([val.strip() for val in value.split(',')])
    
    # Формирование "документов" для MongoDB
    mongodb_insert=[]
    for document in documents:
        mongodb_insert.append(dict(zip(columns, document)))
    
    return name, mongodb_insert

# Запрос вставки данных в формате MySQL
mysql_inserts = """
insert INTO Students (name, date_of_birth, address, email, group_id, budget)
VALUES
('Иванов Иван Алексеевич', 20021123, 'г.Новосибирск ул.Добролюбова д.34', 'qwe@yandex.ru', 1, False),
('Очаков Николай Александрович', 20020630, 'г.Новосибирск ул.Красный проспект д.6', 'fgvbgf@mail.ru', 1, False),
('Суворов Дмитрий Иванович', 20020512, 'г.Новкузнецк ул.Зеленая д.342', 'qgbfgbfwe@mail.ru', 1, True),
('Конфеткин Иван Александрович', 20020318, 'г.Колывань ул.Кирова д.76', 'qwbfgbe@yandex.ru', 1, False),
('Павлова Анна Ивановна', 20030501, 'г.Новосибирск ул.Пушкина д.23', 'qwbfgbe@mail.ru', 1, True),
('Камчаткин Дмитрий Александрович', 20010318, 'г.Новосибирск ул.Добролюбова д.145', 'gbf@gmail.com', 1, True),
('Куприн Юлия Сергеевна', 20020227, 'г.Томск ул.Бориса Богаткова д.34', 'qwbfgbfe@mail.ru', 1, True);"""


name, mongodb = convert_mysql_to_mongodb(mysql_inserts)
print(f'db.{name}.insertMany([')
for el in mongodb[:-1]:
    print(el, end=',\n')
print(mongodb[-1])
print(']);')
