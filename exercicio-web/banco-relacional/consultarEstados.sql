-- Vizualiza todas as linhas da tabela
select * from estados;

-- Vizualiza algumas colunas da tabela (Não tem problema ser letra maiuscula ou minuscula e da pra alterar a label)
select Sigla, nome as 'Nome do Estado' from estados;

-- Vizualizar algumas colunas filtrando com uma condição
select 
    Sigla, 
    Nome, 
    Regiao 
from estados 
where regiao = 'Sul';

-- Vizualiza algumas colunas filtrando com uma condição ordenando (sem usar desc = crescente/ usando desc = decrescente)
select sigla, nome, regiao, populacao from estados
where populacao >= 10
order by populacao desc


