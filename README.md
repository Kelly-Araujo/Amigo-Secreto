## DEPLOY :
https://amigo-secreto-rouge-seven.vercel.app/
# Sorteio de Amigo Secreto

Este é um projeto simples em JavaScript que permite realizar um sorteio de amigo secreto para grupos de pessoas. O sistema pega uma lista de nomes e sorteia aleatoriamente quem será o amigo secreto de cada pessoa. Ideal para festas ou eventos de fim de ano!

## Tecnologias Usadas

- **HTML**: Para estruturar a página e o conteúdo.
- **CSS**: Para estilizar a interface e melhorar a apresentação do projeto.
- **JavaScript**: Para implementar a lógica de adicionar amigos à lista e manipulação do DOM.


## Funcionalidades

- Entrada de nomes de participantes.
- Sorteio aleatório dos amigos secretos.
- Exibição do resultado com o nome da pessoa e seu amigo secreto.

## Dificuldades e Como Superei
- Validar a Entrada de Dados do Usuário
- Problema: Quando os usuários tentavam adicionar amigos à lista, era necessário garantir que eles não enviassem    entradas vazias. Isso poderia resultar em itens vazios na lista, o que afetaria a experiência do usuário.

- Solução: Usei um simples if para verificar se o campo de entrada estava vazio (if (nomeInput)). Caso o campo estivesse vazio, um alerta seria exibido solicitando que o usuário digitasse um nome. Caso contrário, o nome seria adicionado à lista de amigos.

## Atualizar a Lista de Amigos Dinamicamente
- Problema: Depois de adicionar um nome à lista de amigos, a lista na interface do usuário precisava ser atualizada imediatamente. Sem isso, os usuários não veriam a mudança que acabaram de fazer.

- Solução: Criei uma função exibirLista() que limpa o conteúdo atual da lista (innerHTML = "";) e a atualiza com os novos nomes sempre que um nome é adicionado. Isso garantiu que a lista fosse refletida em tempo real na página.
## Manipulação do DOM
- Problema: Manipular o DOM corretamente para exibir os nomes de forma ordenada e dinâmica foi uma tarefa inicial complicada.

- Solução: Utilizei métodos do DOM como createElement("li") para criar novos itens de lista e appendChild() para adicionar esses itens ao elemento da lista. Essa abordagem permitiu que a lista fosse gerenciada facilmente de forma dinâmica à medida que os dados eram modificados.

## AGRADECIMENTO ONE !
Gostei muito de realizar esse desafio proposto pela One!
 Melhorei bastante as minhas habilidades em programação, pois eu ja tinha uma certa experiencia mas eu tinha receio de aplicar de verdade e agora estou aos poucos perdendo esse receio.

## OBRIGADA, ONE! :()