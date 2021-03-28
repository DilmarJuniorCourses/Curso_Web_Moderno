select * from prefeitos;
select * from cidades;

-- Inner seleciona somente a intersecção (Oque as daus tabelas tem em comum) dos conjuntos (tabelas)
select * from cidades cid inner join prefeitos pref on cid.id = pref.cidade_id;

-- Left seleciona a intersecção e a tabela a esquerda toda
select * from cidades cid left join prefeitos pref on cid.id = pref.cidade_id;

-- Right seleciona a intersecção e a tabela a direita toda
select * from cidades cid right join prefeitos pref on cid.id = pref.cidade_id; 
-- select * from cidades cid full join prefeitos pref on cid.id = pref.cidade_id; +Não suportado+

-- Como full join não é suportado usamos um union no left e right, alcançando assim o full join
-- Union all: trás duplicidades Union s/all : Não trás duplicidades
select * from cidades cid left join prefeitos pref on cid.id = pref.cidade_id
union
select * from cidades cid right join prefeitos pref on cid.id = pref.cidade_id; 



