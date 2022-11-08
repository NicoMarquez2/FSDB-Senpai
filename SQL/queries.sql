select count(gender), gender 
from students 
group by gender

select * from students
where gender = 'Bigender'
order by birthdate


select name,extract(YEAR from age(now(),birthdate)) as year from students
where gender = 'Genderfluid'
order by birthdate

SELECT document_number, name, last_name, birthdate, (('10/19/2022'-birthdate)/365) as "Edad"
FROM students 
WHERE gender='Genderfluid'
ORDER BY birthdate

select name,birthdate, address from students
where gender = 'Male' and birthdate between '1995-01-01' and '2000-01-01' 

select * from students order by birthdate