# 🛒 Carrinho de Compras Shopee (Node.js CLI)

Este é um projeto de terminal simples para simular um carrinho de compras, inspirado na Shopee, utilizando JavaScript moderno (ES Modules) com Node.js.

---

## 🚀 Funcionalidades

- Adicionar itens ao carrinho com nome, preço e quantidade
- Remover itens do carrinho (com decremento ou remoção completa)
- Visualizar todos os itens no carrinho
- Calcular o total da compra
- Interface de menu interativo pelo terminal

---

## 🛠️ Tecnologias utilizadas

- Node.js (ESM)
- JavaScript moderno
- `readline-sync` (para entrada de dados via terminal)

---

## ⚙️ Instalação e utilisação

Antes de começar, certifique-se de ter o **Node.js** instalado em sua máquina.

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/carrinho-shopee.git
cd carrinho-shopee
```
2. antes de executar instale alguns pacotes, use o comando abaixo que serve para baixar todos os pacotes que estão no projeto

````bash
npm install
````

3. estrutura do projeto se encontra asim

````bash
carrinho-shopee/
│
├── src/
│   ├── index.js              # Script principal (menu de interação)
│   └── services/
│       ├── cart.js           # Funções de manipulação do carrinho
│       └── item.js           # Função para criar novos itens
│
├── package.json
└── README.md
````

4. Como usar? execute o seguinte comando no seu terminal e o projeto ja estar rodando

````bash
node src/index.js
````
