# 🚀 Login - Typescript

Uma aplicação web frontend desenvolvida com **React + Vite**, utilizando **TypeScript**, **TailwindCSS** para estilização, e **shadcn/ui** para componentes UI acessíveis e personalizáveis.  
Este projeto está em fase inicial de desenvolvimento (frontend), com planos para incluir **autenticação** e **integração com banco de dados** em versões futuras.

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/) (base dos componentes do shadcn)

## 📁 Estrutura do Projeto

```
📦 nome-do-projeto
├── public/              # Arquivos públicos
├── src/
│   ├── assets/          # Imagens e outros assets
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas da aplicação
│   ├── routes/          # Rotas da aplicação (se aplicável)
│   ├── styles/          # Estilos globais (se necessário)
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Ponto de entrada do app
├── tailwind.config.ts   # Configuração do Tailwind
├── shadcn.config.ts     # Configuração do shadcn/ui
├── tsconfig.json        # Configuração do TypeScript
├── vite.config.ts       # Configuração do Vite
└── package.json         # Dependências e scripts
```

## 📦 Instalação e Uso

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# Instale as dependências
npm install

# Rode o projeto em ambiente de desenvolvimento
npm run dev
```

## 🧱 Componentes UI com ShadCN

Os componentes são gerenciados via CLI:

```bash
# Exemplo de adição de um componente novo
npx shadcn-ui@latest add button
```

## 📌 Planejamento Futuro

- [ ] Integração com sistema de autenticação (provavelmente JWT + OAuth)
- [ ] Integração com banco de dados (MongoDB, PostgreSQL ou outro)
- [ ] Criação de back-end próprio (Node/Express, NestJS ou similar)
- [ ] Deploy (Vercel, Netlify ou outro serviço)

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](./LICENSE) para mais informações.

---

## ✨ Agradecimentos

- [shadcn/ui](https://ui.shadcn.com/) pela UI elegante e acessível
- [Vite](https://vitejs.dev/) pela performance incrível no desenvolvimento
- A comunidade open source ❤️
