desc empresas;
desc prefeitos;
alter table empresas modify cnpj varchar(14) not null;

insert into empresas
    (nome, cnpj)
values 
    ('Bradesco', 12345678987654),
    ('Vale', 25874136986413),
    ('Cielo', 39874584126854);

select * from empresas;
select * from cidades;
select * from empresas_unidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (3, 6, 1),
    (2, 2, 1);
