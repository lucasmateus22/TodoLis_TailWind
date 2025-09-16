# 🚀 Login - Typescript

Uma aplicação web frontend desenvolvida com **React + Vite**, utilizando **TypeScript**, **TailwindCSS** para estilização, e **shadcn/ui** para componentes UI acessíveis e personalizáveis.  

Este projeto já conta com **autenticação via Firebase**, permitindo login de usuários com integração simplificada.  
Está em fase inicial de desenvolvimento (frontend), com planos para incluir **integração com banco de dados** em versões futuras.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Firebase Authentication](https://firebase.google.com/)

---

## 📁 Estrutura do Projeto

```
📦 nome-do-projeto
├── public/              # Arquivos públicos
├── src/
│   ├── assets/          # Imagens e outros assets
│   ├── components/      # Componentes reutilizáveis
│   ├── features/        # Funcionalidades da aplicação
│   ├── hooks/           # Funcionalidades complexas
│   ├── pages/           # Páginas da aplicação
│   ├── routes/          # Rotas da aplicação
│   ├── index.css        # Estilo global
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Ponto de entrada do app
├── tsconfig.json        # Configuração do TypeScript
├── vite.config.ts       # Configuração do Vite
└── package.json         # Dependências e scripts
```

---

## 📦 Instalação e Uso

```bash
# Clone o repositório
git clone https://github.com/lucasmateus22/page_login_tailWind.git
cd page_login_tailWind

# Instale as dependências
npm install

# Rode o projeto em ambiente de desenvolvimento
npm run dev
```

---

## 🔑 Autenticação com Firebase

O projeto utiliza **Firebase Authentication** para gerenciar logins.  
Atualmente foi configurado login básico.

---

## 🧱 Componentes UI com ShadCN

Os componentes são gerenciados via CLI:

```bash
# Exemplo de adição de um componente novo
npx shadcn-ui@latest add button
```

---

## ✨ Agradecimentos

- [shadcn/ui](https://ui.shadcn.com/) pela UI elegante e acessível  
- [Vite](https://vitejs.dev/) pela performance incrível no desenvolvimento  
- [Firebase](https://firebase.google.com/) pela solução de autenticação simples e poderosa
