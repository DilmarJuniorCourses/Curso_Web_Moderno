select * from estados;

insert into cidades (nome, area, estado_id)
values ('Campinhas', 795, 35)

insert into cidades (nome, area, estado_id)
values ('Niterói', 133.9, 29)

insert into cidades (nome,area,estado_id)
values ('Caruaru', 920.6, (select id from estados where sigla='PE'))

insert into cidades (nome,area,estado_id)
values ('Juazeiro do Norte', 920.6, (select id from estados where sigla='CE'))

select * from cidades;