select * from cidades;

insert into prefeitos 
    (nome, cidade_id)
values 
    ('Rodrigo Neves', 2), ('Raquel Lyra', 6), ('Zenaldo Coutinho', null);

insert into prefeitos
    (nome, cidade_id)
values
    ('Rafael Greca', null);

select * from prefeitos;
