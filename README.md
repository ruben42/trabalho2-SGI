## Trabalho Nº 2

## Gestão de Identidade na Web

Pretende-se com este trabalho demonstrar as técnicas de Gestão de Identidade na Web
apresentadas nas aulas teóricas, através da operacionalização de uma prova de conceito.

O trabalho deverá abranger os pontos seguintes:

- Estudo da arquitetura utilizada e apresentação dos seus componentes.
- Determinação das bibliotecas necessárias à sua implementação.
- Instalação do ambiente no PC do aluno, máquina virtual ou num outro ambiente à
escolha, que possa ser utilizado para a demonstração.

A implementação deverá obrigatoriamente contemplar os seguintes aspetos:

- Acesso ao site da aplicação através de protocolo de autorização (e.g.: OAuth2) com
consentimento explícito, fornecido com base numa conta Google.
- A autorização deverá dar acesso aos dados básicos do perfil do utilizador
(google_id, username e email), a ser apresentados na página de sucesso.
- A persistência da sessão deverá ser assegurada implicitamente pelo middleware de
sessão, e o perfil do utilizador deverá ser explicitamente armazenado numa
collection distinta da mesma base de dados (e.g.: MongoDB Atlas).
- Uma vez autenticado, o utilizador poderá aceder a uma form específica para criar
um recurso próprio (i.e.: um item), que deverá ser armazenado numa outra collection
(items). Sugerem-se os campos “Título”, “Descrição” e “Data de Criação”.
- Uma vez criado, o recurso deverá ficar protegido, ou seja, só poderá ser acedido
pelo utilizador que o criou quando este estiver autenticado.
- O utilizador deverá poder apagar o(s) recurso(s) que criou.
- Uma tentativa de acesso ao recurso protegido por um utilizador não autenticado
deverá gerar uma mensagem de erro, ou melhor ainda, deverá ser redirecionada
para a sequência de autorização.
- Em caso de logout, a sessão deve ser apagada, mas o perfil do utilizador e os seus
recursos armazenados na BD deverão manter-se.
- A apresentação das páginas de criação e acesso ao recurso deverá ser feita com
base num template engine do tipo do utilizado nos exemplos fornecidos (i.e.: EJS).
- O código da aplicação deverá ser entregue sob forma de repositório no Github,
sendo valorizado o seu deployment numa plataforma Cloud (e.g.: evennode, vercel,
heroku...).

A entrega dos trabalhos deverá ser realizada até **31 de Maio de 2024**, devendo a defesa
do trabalho decorrer até **4 de Junho de 2024**. A demonstração das funcionalidades
implementadas poderá ser realizada on-line.
