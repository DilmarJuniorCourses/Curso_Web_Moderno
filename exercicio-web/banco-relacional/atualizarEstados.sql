update estados set nome = 'Maranhão' where sigla = 'MA';

select est.sigla, est.nome from estados est where sigla = 'MA';

-- Primeira Verificação
select est.sigla, est.nome, est.populacao from estados est where sigla ='PR'  

update estados
set nome = 'Paraná',
    populacao = 11.32
where sigla = 'PR'

select est.sigla, est.nome, est.populacao from estados est where sigla ='PR'  
