# Programação de Aulas

Sistema para montar a programação diária de aulas de uma escola de tempo integral:
registra faltas, sugere substitutos pelo critério escolhido, avisa conflitos
(professor em dois lugares) e professor sem horário de almoço, e gera a imagem do dia para o WhatsApp.

- Página única (`index.html`), sem servidor próprio: hospedada no GitHub Pages.
- Os dados da escola **não ficam neste repositório**. Ficam num banco Supabase
  protegido por login; só os e-mails cadastrados como membros conseguem ler ou salvar.
- A chave que aparece no código é a chave *publicável* do Supabase (feita para ficar no navegador);
  quem protege os dados são as regras do banco (RLS).
- O banco guarda sozinho uma cópia por dia do estado anterior.
