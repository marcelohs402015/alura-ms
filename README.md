# 🚀 Alura Microservices - Formação Engenharia de Software

<div align="center">

![Java](https://img.shields.io/badge/Java-21+-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.0+-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-8.0+-777BB4?style=for-the-badge&logo=php&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-15+-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-20.10+-2496ED?style=for-the-badge&logo=docker&logoColor=white)

**Projeto de estudo em constante evolução | Preparado para projetos modernos e sistemas legados**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/marcelohs402015/alura-ms)
[![Alura](https://img.shields.io/badge/Alura-Formação-00C8FF?style=for-the-badge)](https://cursos.alura.com.br/formacao-engenharia-software)

</div>

---

## 📚 Sobre o Projeto

Este repositório contém um projeto completo de **microserviços** desenvolvido durante a **Formação Engenharia de Software** da Alura. O projeto demonstra a aplicação prática de conceitos avançados de arquitetura de software, incluindo:

- **Arquitetura de Microserviços**
- **API Gateway e Comunicação Assíncrona**
- **Padrões de Design e Clean Architecture**
- **DevOps e Containerização**
- **Testes e Qualidade de Código**

### 🎯 Objetivo Profissional

Este projeto reflete meu **compromisso com aprendizado contínuo** e minha capacidade de trabalhar tanto com **tecnologias modernas** quanto com **sistemas legados**. Estou constantemente me atualizando para estar preparado para os desafios do mercado, seja em projetos greenfield ou na manutenção e modernização de sistemas existentes.

---

## 🏗️ Arquitetura do Sistema

O projeto é composto por múltiplos microserviços que trabalham em conjunto:

```
┌─────────────────┐
│   Front-End     │  Angular 15+
│   (Angular)     │
└────────┬────────┘
         │
┌────────▼────────┐
│   API Gateway   │  Nginx
│   (Nginx)       │
└────────┬────────┘
         │
    ┌────┴────┬──────────────┬─────────────┐
    │         │              │             │
┌───▼───┐ ┌──▼────┐ ┌───────▼──┐ ┌───────▼──┐
│Acadêmico│ │Financeiro│ │Marketing│ │  Gateway │
│ (PHP)   │ │  (PHP)   │ │ (Node)  │ │  (Nginx) │
└────────┘ └──────────┘ └─────────┘ └──────────┘
```

### 📦 Microserviços

| Serviço | Tecnologia | Descrição |
|---------|-----------|-----------|
| **Front-End** | Angular 15+ | Interface web responsiva |
| **Acadêmico** | PHP 8.0+ | Gestão de cursos e estudantes |
| **Financeiro** | PHP 8.0+ | Processamento de pagamentos |
| **Marketing** | Node.js 18+ | Gestão de leads e campanhas |
| **API Gateway** | Nginx | Roteamento e balanceamento |

---

## 📖 Formação Alura - Engenharia de Software

### 📊 Estatísticas da Formação

- **⏱️ Carga Horária Total:** 86 horas
- **📚 Cursos:** 9 cursos
- **🎥 Vídeos Extras:** 32 vídeos
- **🎙️ Podcasts:** 9 episódios
- **📄 Artigos:** 4 artigos

### 🗺️ Trilha de Aprendizado

#### 1. **Design e Arquitetura**
- Padrões de projeto (Design Patterns)
- Princípios SOLID
- Clean Architecture
- Arquitetura Hexagonal (Ports & Adapters)

#### 2. **API e REST**
- Design de APIs RESTful
- Versionamento de APIs
- Documentação (OpenAPI/Swagger)
- Boas práticas de API Design

#### 3. **Microsserviços**
- Arquitetura de microserviços
- Comunicação síncrona e assíncrona
- Service Discovery
- API Gateway
- Message Queues (RabbitMQ)

#### 4. **DevOps e Monitoramento**
- Containerização (Docker)
- Orquestração (Docker Compose)
- CI/CD
- Monitoramento e observabilidade
- Logs e métricas

#### 5. **Agilidade e Times**
- Metodologias ágeis
- Gestão de projetos
- Trabalho em equipe
- Comunicação eficaz

#### 6. **Testes e Qualidade**
- Testes unitários
- Testes de integração
- Testes end-to-end
- TDD (Test-Driven Development)
- Qualidade de código

---

## 🛠️ Tecnologias e Ferramentas

### Backend
- **PHP 8.0+** - Linguagem principal para serviços acadêmicos e financeiros
- **Node.js 18+** - Serviço de marketing
- **Spring Boot 3+** (Java 21+) - Preparado para expansão

### Frontend
- **Angular 15+** - Framework frontend
- **TypeScript** - Tipagem estática
- **RxJS** - Programação reativa

### Infraestrutura
- **Docker** - Containerização
- **Docker Compose** - Orquestração local
- **Nginx** - API Gateway e reverse proxy
- **RabbitMQ** - Message broker para comunicação assíncrona

### Banco de Dados
- **PostgreSQL** - Banco de dados relacional
- **MongoDB** - Banco de dados NoSQL (serviço de marketing)

### Ferramentas de Desenvolvimento
- **Git** - Controle de versão
- **Composer** - Gerenciador de dependências PHP
- **NPM** - Gerenciador de pacotes Node.js

---

## 🚀 Como Executar

### Pré-requisitos

- Docker e Docker Compose instalados
- Git instalado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/marcelohs402015/alura-ms.git
cd alura-ms

# Inicie todos os serviços
docker-compose up -d

# Verifique os serviços
docker-compose ps
```

### Acessos

- **Frontend:** http://localhost:4200
- **API Gateway:** http://localhost:8080
- **Serviço Acadêmico:** http://localhost:8001
- **Serviço Financeiro:** http://localhost:8002
- **Serviço Marketing:** http://localhost:3000

---

## 📈 Evolução e Aprendizado Contínuo

### 💡 Por que este projeto?

Este projeto demonstra minha **mentalidade de crescimento contínuo** e minha capacidade de:

✅ **Adaptar-se a diferentes tecnologias** - Trabalhando com PHP, Node.js, Angular e preparado para Java/Spring Boot

✅ **Entender arquiteturas complexas** - Microserviços, comunicação assíncrona, padrões de design

✅ **Trabalhar com sistemas legados** - PHP é amplamente usado em sistemas legados, e este projeto mostra que posso trabalhar com eles

✅ **Implementar soluções modernas** - Docker, microserviços, APIs RESTful, mensageria

✅ **Manter qualidade de código** - Aplicando princípios SOLID, Clean Code e testes

### 🎓 Compromisso com Aprendizado

- **86 horas** de estudo dedicado à Engenharia de Software
- Aplicação prática dos conceitos aprendidos
- Projeto em constante evolução
- Preparado para contribuir em projetos novos e legados

---

## 📝 Estrutura do Projeto

```
alura-ms/
├── front-end/              # Aplicação Angular
├── academico-php/          # Microserviço Acadêmico (PHP)
├── academico-php-web/      # API Web do serviço acadêmico
├── financeiro-php/         # Microserviço Financeiro (PHP)
├── mkt-node/               # Microserviço Marketing (Node.js)
├── servicos-nginx/         # Configuração do API Gateway
└── docker-compose.yml      # Orquestração dos serviços
```

---

## 🤝 Contribuindo

Este é um projeto de estudo pessoal, mas sugestões e feedback são sempre bem-vindos!

---

## 📄 Licença

Este projeto é parte da minha jornada de aprendizado e está disponível para fins educacionais.

---

## 📧 Contato

**Desenvolvedor em constante evolução | Preparado para novos desafios**

- **GitHub:** [@marcelohs402015](https://github.com/marcelohs402015)
- **LinkedIn:** [Marcelo Hernandes da Silva](https://www.linkedin.com/in/marcelo-hernandes-da-silva-351a7159/)

---

<div align="center">

**⭐ Se este projeto foi útil, considere dar uma estrela! ⭐**

*Última atualização: Janeiro 2025*

</div>

