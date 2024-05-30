// Функция для получения названия месяца по его номеру
function getMonthName(month) {
    var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    return months[month - 1];
}

// Функция для форматирования Фамилии И.О.
function formatName(name) {
    var parts = name.split(" ");
    var formattedName = parts[0];
    for (var i = 1; i < parts.length; i++) {
        formattedName += " " + parts[i].charAt(0) + ".";
    }
    return formattedName;
}

// Запрос студентов, у которых день рождения соответствует текущему месяцу
db.Students.find().forEach(function (student) {
    let date = student.date_of_birth.split('.');
    let day = date[2];
    let month = getMonthName(date[1]);

    let fullName = formatName(student.name);
    let group = db.Groups.findOne({ _id: student.group_id });
    let direction = db.Directions.findOne({ _id: group.direction }).name;
    print(fullName + ", " + day + " " + month + ", группа: " + group.name + ", направление: " + direction);
});
