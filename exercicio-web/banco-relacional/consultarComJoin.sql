select * from estados est, cidades cid
where est.id = cid.estado_id;

select 
    est.nome as Estado, 
    cid.nome as Cidade, 
    regiao  as Região
from estados est, cidades cid
where est.id = cid.estado_id;

select 
    est.nome as Estado, 
    cid.nome as Cidade, 
    regiao  as Região
from estados est
inner join cidades cid on est.id = cid.estado_id;
