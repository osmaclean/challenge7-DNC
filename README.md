# Desafio 7 - Escola DNC

### Índice
<ul>
  <a href="#descrição"><li>Descrição</li></a>
  <a href="#instalação"><li>Instalação</li></a>
  <a href="#criação-do-banco-de-dados"><li>Criação do Banco de Dados</li></a>
  <a href="#testes"><li>Testes</li></a>
  <a href="#estrutura-do-projeto"><li>Estrutura do Projeto</li></a>
  <a href="#demonstração"><li>Demonstração</li></a>
</ul>

### Descrição
Este projeto foi desenvolvido como resolução para o desafio 7 da formação de Tecnologia da escola DNC.

### Instalação 
##### Clone o repositório:
```
$ git clone git@github.com:osmaclean/challenge7-DNC.git
```

##### Acesse a pasta criada:
```
$ cd challenge7-DNC
```

##### Instale as dependências:
```
$ npm install
```
---

### Criação do Banco de Dados
##### Crie o banco de dados MySQL e as tabelas a seguir:
```mysql
CREATE TABLE `aluno` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`nome` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`email` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	`nacionalidade` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_0900_ai_ci',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8mb4_0900_ai_ci'
ENGINE=InnoDB
AUTO_INCREMENT=5
;
```

##### Configure o banco de dados no ficheiro knex.ts (src/config/knex.ts):
```javascript
const knexConfig: KnexConfig = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345678',
    database: 'desafio_7',
  },
};
```
---

### Testes
##### Inicie o projeto:
```
$ npm test --config=jest.config.ts
```

---

### Estrutura do projeto
##### Tecnologias Utilizadas
<div style="display: inline_block"><br>
  
  [![My Skills](https://skillicons.dev/icons?i=nodejs,express,mysql,typescript)](https://skillicons.dev)
</div>

##### IDE Utilizada
<div> 
  
  [![My Skills](https://skillicons.dev/icons?i=vscode)](https://skillicons.dev)
</div>

---

### Demonstração
![image](https://github.com/osmaclean/challenge7-DNC/assets/115199808/166a54f9-77d6-42fa-a91d-6993f3d9d54b)
