# 🔗 LinkShort - URL Shortener

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</div>

<div align="center">
  <h3>🚀 Encurte seus links com estilo e monitore sua performance</h3>
  <p>Uma aplicação moderna e responsiva para encurtamento de URLs com analytics integrados</p>
</div>

---

## 📋 Sobre o Projeto

**LinkShort** é uma aplicação web moderna para encurtamento de URLs, desenvolvida com React e TailwindCSS. O projeto oferece uma interface intuitiva e elegante para transformar links longos em URLs curtas e fáceis de compartilhar, com funcionalidades de monitoramento e analytics.

### 🎯 Principais Funcionalidades

- ✅ **Encurtamento de URLs** - Integração com API TinyURL e sistema de fallback
- 📊 **Dashboard Analytics** - Estatísticas de cliques e performance
- 📱 **Design Responsivo** - Interface otimizada para todos os dispositivos
- 🎨 **UI/UX Moderna** - Design clean com gradientes e animações suaves
- 🔒 **Validação de URLs** - Sistema robusto de validação e tratamento de erros
- 📋 **Copy to Clipboard** - Funcionalidade de cópia com feedback visual
- 🗑️ **Gerenciamento de Links** - Opções para deletar e organizar URLs

---

## 🖼️ Preview da Aplicação

<div align="center">
  <img src="./screenshots/linkshort-preview.png" alt="LinkShort - Interface Principal" width="800"/>
  <p><em>Interface principal do LinkShort com design moderno e responsivo</em></p>
</div>

### ✨ Destaques Visuais

- 🎨 **Design Moderno** - Interface limpa com gradientes sutis
- 📱 **Layout Responsivo** - Otimizado para desktop, tablet e mobile
- 🔥 **UX Intuitiva** - Formulário centralizado e call-to-action destacado
- ⚡ **Performance Visual** - Carregamento rápido e transições suaves
- 🎯 **Foco na Conversão** - Design que incentiva o uso da ferramenta

> 🚀 **[Ver Aplicação ao Vivo](https://url-shortener-wine-psi.vercel.app/)** | 💻 **[Código no GitHub](https://github.com/MatheusQuintanilhaa/url-shortener)**

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 19.1.0** - Biblioteca principal para interface
- **Vite 6.3.5** - Build tool moderna e rápida
- **TailwindCSS 3.4.17** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones moderna

### Desenvolvimento

- **ESLint** - Linting e padronização de código
- **PostCSS & Autoprefixer** - Processamento de CSS
- **JavaScript ES6+** - Sintaxe moderna

### APIs & Integrações

- **TinyURL API** - Serviço principal de encurtamento
- **Sistema de Fallback** - Geração local de URLs curtas
- **Clipboard API** - Funcionalidade de cópia

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16+)
- npm ou yarn

### Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/url-shortener.git

# Acesse o diretório
cd url-shortener

# Instale as dependências
npm install

# Execute o projeto em modo desenvolvimento
npm run dev

# Para build de produção
npm run build

# Para preview da build
npm run preview
```

A aplicação estará disponível em `http://localhost:5173`

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx           # Cabeçalho da aplicação
│   ├── HeroSection.jsx      # Seção hero com apresentação
│   ├── URLShortenerForm.jsx # Formulário de encurtamento
│   ├── URLResult.jsx        # Resultado individual da URL
│   ├── URLList.jsx          # Lista de URLs encurtadas
│   └── Stats.jsx            # Dashboard de estatísticas
├── App.jsx                  # Componente principal
├── main.jsx                 # Ponto de entrada
└── index.css               # Estilos globais
```

---

## 🎨 Características Técnicas

### Arquitetura

- **Componentização** - Estrutura modular e reutilizável
- **Estado Global** - Gerenciamento eficiente com useState
- **Tratamento de Erros** - Sistema robusto de error handling
- **Performance** - Otimizações e lazy loading

### UX/UI Features

- **Loading States** - Feedback visual durante operações
- **Toast Notifications** - Notificações de sucesso/erro
- **Animações Suaves** - Transições CSS otimizadas
- **Acessibilidade** - Foco em usabilidade e inclusão

### Funcionalidades Avançadas

- **Validação de URLs** - Regex pattern e formatação automática
- **Detecção de Duplicatas** - Previne URLs duplicadas
- **Sistema de Fallback** - Geração local quando API falha
- **Responsividade Total** - Mobile-first approach

---

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview da build
npm run lint     # Análise de código com ESLint
```

---

## 📊 Funcionalidades em Destaque

### 🎯 Sistema de Encurtamento Inteligente

- Integração primária com TinyURL API
- Sistema de fallback automático
- Validação robusta de URLs
- Formatação automática de protocolos

### 📈 Analytics Dashboard

- Contadores em tempo real
- Métricas de performance
- Interface visual atrativa
- Dados organizados e claros

### 🎨 Design System

- Paleta de cores consistente
- Tipografia hierárquica
- Componentes reutilizáveis
- Padrões de layout padronizados

---

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Se você tem sugestões de melhorias:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Desenvolvedor

**Matheus Quintanilha**

- 💼 LinkedIn: [matheus-quintanilhadev](https://www.linkedin.com/in/matheus-quintanilhadev/)
- 🐱 GitHub: [MatheusQuintanilhaa](https://github.com/MatheusQuintanilhaa)
- 🌐 Portfolio: [Ver Portfolio](https://portflio-matheus-quintanilha.vercel.app/)

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
  <p>📧 Entre em contato para oportunidades de colaboração</p>
</div>

---

### 🚀 Próximas Funcionalidades

- [ ] Sistema de autenticação de usuários
- [ ] Analytics avançados com gráficos
- [ ] Personalização de URLs (custom alias)
- [ ] Integração com QR Code
- [ ] Exportação de dados
- [ ] Tema dark/light mode
- [ ] API própria para encurtamento

---

<div align="center">
  <sub>Desenvolvido por Matheus Quintanilha</sub>
</div>
