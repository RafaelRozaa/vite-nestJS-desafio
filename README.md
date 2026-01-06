# Desafio — NestJS + Vite

## Objetivo

Criar uma aplicação simples para praticar **NestJS no backend** e **Vite no frontend**, com foco na integração entre API REST e interface web.

## Requisitos

[Node.js 24.12.0](https://nodejs.org/dist/v24.12.0/node-v24.12.0-x64.msi)
---
## Instalação

Clone o [repositório do GitHub]()
```bash

```
Instale as dependências
```bash
npm install
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
