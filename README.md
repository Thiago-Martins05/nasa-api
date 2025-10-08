# �� NASA API Project

<div align="center">

![NASA Logo](public/images/logo-nasa.png)

**Uma aplicação React moderna que consome APIs da NASA para exibir dados astronômicos em tempo real.**

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.0.4-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[🚀 Demo](#) • [📖 Documentação](#) • [🐛 Reportar Bug](#)

</div>

---

## ✨ Funcionalidades

### 🌌 Astronomy Picture of the Day (APOD)

- **Imagem astronômica diária** com explicação detalhada
- Suporte para imagens e vídeos
- Interface responsiva e moderna
- Carregamento lazy de imagens

### ☄️ Near-Earth Objects (NEO)

- **Dados de asteroides próximos à Terra**
- Informações sobre velocidade e tamanho
- Filtro por data personalizado
- Visualização organizada em lista

### 🛸 Mars Rover Photos

- **Fotos do rover Curiosity em Marte**
- Filtro por data específica
- Informações sobre câmera e status do rover
- Galeria responsiva de imagens

## 🛠️ Tecnologias Utilizadas

### Frontend

- **[React 19](https://reactjs.org/)** - Biblioteca JavaScript para interfaces
- **[Vite](https://vitejs.dev/)** - Ferramenta de build e servidor de desenvolvimento
- **[React Router DOM](https://reactrouter.com/)** - Roteamento da aplicação
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário

### Bibliotecas

- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[CLSX](https://github.com/lukeed/clsx)** - Utilitário para classes CSS condicionais
- **[Dotenv](https://www.npmjs.com/package/dotenv)** - Gerenciamento de variáveis de ambiente

### APIs

- **[NASA APOD API](https://api.nasa.gov/planetary/apod)** - Imagem astronômica do dia
- **[NASA NEO API](https://api.nasa.gov/neo/rest/v1/feed)** - Objetos próximos à Terra
- **[NASA Mars Rover API](https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos)** - Fotos do rover Curiosity

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Chave da API da NASA

## 🌐 Deploy na Vercel

### 1. Preparação do Repositório

```bash
# Certifique-se de que todas as alterações estão commitadas
git add .
git commit -m "feat: prepare for deployment"
```

### 2. Criar Repositório no GitHub

1. Acesse [GitHub](https://github.com)
2. Clique em "New repository"
3. Nome: `nasa-project`
4. Descrição: "Aplicação React que consome APIs da NASA"
5. Deixe público
6. **NÃO** inicialize com README (já temos um)
7. Clique em "Create repository"

### 3. Conectar ao GitHub

```bash
# Adicionar remote origin
git remote add origin https://github.com/Thiago-Martins05/nasa-project.git

# Enviar para o GitHub
git push -u origin master
```

### 4. Deploy na Vercel

1. Acesse [Vercel](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em "New Project"
4. Importe o repositório `nasa-project`
5. Configure as variáveis de ambiente:
   - **Name**: `VITE_API_KEY`
   - **Value**: Sua chave da API da NASA
6. Clique em "Deploy"

### 5. Configurações da Vercel

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

O projeto já inclui um arquivo `vercel.json` com configurações otimizadas!

### 1. Clone o repositório

```bash
git clone https://github.com/Thiago-Martins05/nasa-project.git
cd nasa-project
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure a chave da API da NASA

1. Acesse [https://api.nasa.gov/](https://api.nasa.gov/)
2. Registre-se e obtenha sua chave gratuita
3. Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_KEY=sua_chave_aqui
```

### 4. Execute o projeto

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
nasa-project/
├── public/                 # Arquivos públicos
│   └── images/            # Imagens estáticas
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── ErrorMessage/  # Mensagens de erro
│   │   ├── Footer/        # Rodapé da aplicação
│   │   ├── Header/        # Cabeçalho com navegação
│   │   ├── Input/         # Componente de entrada
│   │   ├── LazyImage/     # Imagem com carregamento lazy
│   │   ├── LoadingSpinner/# Spinner de carregamento
│   │   ├── NavBar/        # Barra de navegação
│   │   └── SubTitle/      # Componente de subtítulo
│   ├── pages/             # Páginas da aplicação
│   │   ├── Apod.jsx       # Página da imagem do dia
│   │   ├── ErrorPage.jsx  # Página de erro 404
│   │   ├── Neo.jsx        # Página de asteroides
│   │   └── Rover.jsx      # Página de fotos de Marte
│   ├── services/          # Serviços de API
│   │   ├── apiApod.js     # API da imagem do dia
│   │   ├── apiNeo.js      # API de asteroides
│   │   └── apiRover.js    # API do rover
│   ├── hooks/             # Hooks customizados
│   │   └── useApi.js      # Hook para gerenciamento de API
│   ├── config/            # Configurações
│   │   └── api.js         # Configuração das APIs
│   ├── utils/             # Utilitários
│   │   └── formatters.js  # Funções de formatação
│   ├── App.jsx            # Componente principal
│   ├── main.jsx           # Ponto de entrada
│   └── index.css          # Estilos globais
├── dist/                  # Build de produção
├── package.json           # Dependências e scripts
├── vite.config.js         # Configuração do Vite
├── tailwind.config.js     # Configuração do Tailwind
└── README.md              # Este arquivo
```

## 🔧 Melhorias Implementadas

### ⚡ Performance

- ✅ **Carregamento lazy de imagens** - Melhora o tempo de carregamento
- ✅ **Timeout de requisições API** - Evita travamentos
- ✅ **Memoização de componentes** - Reduz re-renderizações desnecessárias
- ✅ **Otimização de re-renderizações** - Melhor performance geral

### 🎨 UX/UI

- ✅ **Estados de carregamento** - Spinners informativos
- ✅ **Tratamento de erros** - Mensagens claras com opção de retry
- ✅ **Validação de formulários** - Entrada de dados segura
- ✅ **Animações e transições** - Interface fluida
- ✅ **Design responsivo** - Funciona em todos os dispositivos

### 💻 Código

- ✅ **Hooks customizados reutilizáveis** - Código mais limpo
- ✅ **Configuração centralizada** - Fácil manutenção
- ✅ **Tratamento robusto de erros** - Aplicação estável
- ✅ **Componentes modulares** - Arquitetura escalável
- ✅ **Utilitários de formatação** - Dados bem apresentados

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona perfeitamente em:

- 📱 **Dispositivos móveis** (320px+)
- 📱 **Tablets** (768px+)
- 💻 **Desktops** (1024px+)
- 🖥️ **Telas grandes** (1440px+)

## 🌟 APIs Utilizadas

### APOD API

- **Endpoint**: `https://api.nasa.gov/planetary/apod`
- **Funcionalidade**: Imagem astronômica do dia
- **Dados**: URL da imagem, título, explicação, data

### NEO API

- **Endpoint**: `https://api.nasa.gov/neo/rest/v1/feed`
- **Funcionalidade**: Objetos próximos à Terra
- **Dados**: Nome, diâmetro, velocidade, data de aproximação

### Mars Rover API

- **Endpoint**: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`
- **Funcionalidade**: Fotos do rover Curiosity
- **Dados**: URL da imagem, câmera, rover, status

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm run preview      # Preview da build

# Qualidade de código
npm run lint         # Executa ESLint
```

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Desenvolvedor

**Thiago Martins**

- 🌐 **GitHub**: [Thiago Martins](https://github.com/Thiago-Martins05)
- 💼 **LinkedIn**: [Thiago Martins](https://www.linkedin.com/in/thiago-martins-5556512b6)

---

<div align="center">

⭐ **Se este projeto te ajudou, considere dar uma estrela!** ⭐

</div>
