# API PETS
## _CADASTRO DE PETS_

### STACK
1. Deverá desenvolver uma API usando TypeScript
2. Deverá realizar uma persistência de dados usando o TypeORM
3. O código deve ter a injeção de dependência. Será considerado diferencial o uso de inversão de dependências com o inversificar.
4. Deverá usar um banco de dados SQL ..
5. Deverá ser usado como método de autenticação do JWT.

Você irá criar um cadastro de Pais e Filhos. Todos os filhos precisam estar relacionados a um Pai. Com isso definido:

1. Deverá existir um relacionamento entre Pais e Filhos. (1: N)
2. Deverá existir validação das informações antes da gravação.

### REQUISITOS

- [x] Deverá existir um relacionamento entre Pais e Filhos. (1: N)
- [] Deverá existir validação das informações antes da gravação.
- [x] Cadastro de Pais
- [x] Cadastro de Filhos
- [x] Ver todos os Pais e filhos
- [x] Ver todos os filhos de um determinado pai
- [x] Editar os dados de um pai
- [x] Editar os dados de um filho
- [x] Excluir um Pai e seus filhos (cascata)

### REGRAS DE NEGÓCIO
- [x] As rotas de cadastro de pais devem ser uma rota pública.
- [x] As rotas de edição e exclusão devem ser rotas restritas protegidas por autenticação via JWT
- [x] A rota de cadastro de filhos deve ser uma rota protegida por JWT

### REFERÊNCIAS
Documentações .
| STACK             | FRAME                              | Descrição                                    |
| ----------------- | ---------------------------------- | ------------                                 |
| Versionamento     | git/github                         | Versionador / Repositório remoto             |
| backend           | [nestjs](https://docs.nestjs.com)  |                                              |
| ORM               | [TypeORM](https://typeorm.io)      | Object relational mapping                    |

### DOCKER / DOCKER-COMPOSE


