# Video API

API REST para gerenciamento de vídeos, desenvolvida com Node.js, TypeScript, Fastify e PostgreSQL, seguindo boas práticas de arquitetura e pronta para deploy em ambiente cloud.

---

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Fastify
- PostgreSQL (Neon Database)
- dotenv
- UUID
- Arquitetura em camadas (Use Cases / Controllers / Database)

---

## Estrutura do Projeto

src/
├── controller/
│   └── VideoController.ts
├── use-case/
│   ├── CreateVideoUseCase.ts
│   └── ListVideosUseCase.ts
├── database/
│   ├── db.ts
│   └── postgres.ts
├── server.ts
└── routes.ts

Após o build:

dist/
├── controller/
├── use-case/
├── database/
└── server.js

---

## Configuração do Ambiente

1) Clone o repositório

    git clone https://github.com/seu-usuario/video-api.git
    cd video-api

2) Instale as dependências

    npm install

3) Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto:

    DATABASE_URL=postgresql://user:password@host/dbname
    PORT=3000

---

## Scripts Disponíveis

    npm run dev
    npm run build
    npm start

---

## Executando o Projeto

Ambiente de desenvolvimento:

    npm run dev

Produção (após build):

    npm run build
    npm start

---

## Endpoints da API

Criar vídeo  
POST /videos

Body:

    {
      "title": "Meu primeiro vídeo"
    }

Resposta:

    201 Created

Listar vídeos  
GET /videos

Resposta:

    [
      {
        "id": "uuid",
        "title": "Meu primeiro vídeo"
      }
    ]

---

## Arquitetura

A aplicação segue o princípio de separação de responsabilidades:

- Controller: recebe a requisição HTTP
- Use Case: contém a regra de negócio
- Database: acesso ao banco de dados
- Server: configuração do servidor e rotas

Benefícios:
- Testes mais simples
- Manutenção facilitada
- Escalabilidade

---

## Deploy

A API está preparada para deploy em plataformas como Render.

Requisitos:
- Uso de process.env.PORT
- Servidor escutando em 0.0.0.0

Exemplo:

    app.listen({
      port: Number(process.env.PORT),
      host: "0.0.0.0"
    });

---

## Próximas melhorias

- Validação de dados
- Testes automatizados
- Autenticação
- Paginação
- Documentação com Swagger

---

## Autor

Desenvolvido por Daniel  
Entre em contato pelo LinkedIn ou GitHub
