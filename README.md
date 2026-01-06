# Desafio NestJS + Vite

## Objetivo

Criar uma aplicação simples para praticar **NestJS no backend** e **Vite no frontend**, com foco na integração entre API REST e interface web.

## Requisitos

[Node.js 24.12.0](https://nodejs.org/dist/v24.12.0/node-v24.12.0-x64.msi)

## Instalação

Clone o [repositório do GitHub](https://github.com/RafaelRozaa/vite-nestJS-desafio.git)
```bash
git clone https://github.com/RafaelRozaa/vite-nestJS-desafio.git
```
Instale as dependências
```bash
npm install
```

## Executando o Programa

Para executar em modo desenvolvimento (recomendado), insira o seguinte código no terminal do diretório :

```bash
npm run dev
```
Você poderá acessar o vite pela porta http://localhost:5173/, que usará um proxy API com o NestJS, ele pode ser visto na porta http://localhost:3000/

Caso queria ver eles rodando de forma unificada, poderá acessar o modo de produção:

```bash
npm run build
npm start
```
## Domínio do Problema

### Catálogo de Itens

A aplicação deve permitir criar itens, lista-los (filtravel por categoria e por favoritos), alterar seu nome e categoria, marcar/desmarcar itens como favoritos, e excluir itens.

### Estrutura do Item
```json
{
  "id": "int",
  "name": "string",
  "category": "string",
  "isFavorite": true
}
