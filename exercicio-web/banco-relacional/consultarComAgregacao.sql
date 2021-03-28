select * from estados

-- Total de população por regiões 
select regiao as "Região", sum(populacao) as Total
from estados 
group by regiao
order by Total desc

-- Total da população 
select sum(populacao) as Total
from estados 

-- Media da populacao
select avg(populacao) as Media
from estados 
