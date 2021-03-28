select * from empresas_unidades;

select em.nome as Empresa, ci.nome as Cidade
from empresas em, empresas_unidades eu, cidades ci
where em.id = eu.empresa_id and ci.id = eu.cidade_id and sede;