SELECT Groups.name as 'group', Students.name, Students.budget
from Groups, Students
where Groups.id = Students.group_id
order by Groups.name, Students.name;

--
SELECT Students.name, Groups.name as 'group', Directions.name as 'direction'
from Students
JOIN Groups
on Students.group_id = Groups.id
join Directions
on Groups.direction_id = Directions.id
where Students.name LIKE 'К%'

--
SELECT CONCAT(
          SUBSTRING(Students.name, 1, CHARINDEX(' ', Students.name)+1), '.',
          SUBSTRING(SUBSTRING(Students.name, 1, CHARINDEX(' ', Students.name)+1),
                    CHARINDEX(' ', SUBSTRING(Students.name, 1, CHARINDEX(' ', Students.name)+1))+1, 
                    1), '.') as 'name',
           DAY(Students.date_of_birth) as 'day',
           DATENAME(MONTH, Students.date_of_birth) as 'month',
           Groups.name AS 'group',
           Directions.name as 'direction'
FROM Students
join Groups ON Groups.id = Students.group_id
JOIN Directions ON Directions.id = Groups.direction_id

--
SELECT Students.name,
(YEAR(GETDATE())-YEAR(date_of_birth))-IIF(RIGHT(CONVERT(VARCHAR, GETDATE(), 23),5)<RIGHT(CONVERT(VARCHAR, date_of_birth, 23),5), 1, 0) AS 'age'
FROM Students
ORDER BY age

--
SELECT Students.name,
DAY(Students.date_of_birth) AS 'day',
DATENAME(MONTH, Students.date_of_birth) AS 'month'
FROM Students
WHERE MONTH(Students.date_of_birth) = MONTH(GETDATE())

--
SELECT Directions.name, COUNT(Students.id)
FROM Directions
JOIN Groups ON Groups.direction_id = Directions.id
JOIN Students ON Students.group_id = Groups.id
GROUP BY Directions.name

--
SELECT Groups.name AS 'group',
Directions.name as 'direction',
COUNT(*) AS 'всего',
SUM(CASE WHEN Students.budget = 1 THEN 1 ELSE 0 END) AS 'бюджет',
SUM(CASE WHEN Students.budget = 0 THEN 1 ELSE 0 END) AS 'внебюджет'
FROM Students
JOIN Groups ON Groups.id = Students.group_id
JOIN Directions ON Groups.direction_id = Directions.id
GROUP BY Groups.name, Directions.name