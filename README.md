# 🌍 Countries Explorer

Aplicação SPA desenvolvida em Angular para explorar países do mundo utilizando dados reais da REST Countries API.

Projeto criado como desafio técnico para a Bclouder, com foco em arquitetura moderna, organização escalável e boas práticas de front-end.

---

## 🚀 Tecnologias

- Angular 19 (Standalone API)
- RxJS
- Angular Material
- TypeScript
- SCSS (BEM methodology)
- REST Countries API

---

## 📸 Preview

<img width="1900" height="943" alt="image" src="https://github.com/user-attachments/assets/c70e1004-3e8e-409d-be9a-823f5d1f7e73" />

<img width="1912" height="958" alt="image" src="https://github.com/user-attachments/assets/33ac9ece-2175-47ec-9788-66c5ee203d6d" />

---

## 🚀 Como rodar o projeto localmente

### Pré-requisitos
- Node.js 18+
- npm

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/Moisestaguchi/countries-explorer.git

# 2. Acesse a pasta
cd countries-explorer

# 3. Instale as dependências
npm install

# 4. Inicie o servidor
ng serve
```

## 🌐 Demo ao vivo
A SER ADICIONADO

A aplicação estará disponível em:

http://localhost:4200
✅ Funcionalidades

🔍 Busca em tempo real por nome do país

🌎 Filtro por região (África, Américas, Ásia, Europa, Oceania)

📊 Ordenação por nome ou população

🗺️ Página de detalhe com informações completas

🔗 Países fronteiriços clicáveis

🌙 Dark mode com alternância por botão

⏳ Estado de loading durante requisições

❌ Tratamento de erros com botão de retry

📱 Layout responsivo

🧩 Arquitetura

A aplicação segue divisão por camadas:

Core → Serviços globais (CountriesService, ThemeService)

Shared → Componentes reutilizáveis (Loading, Error)

Features → Funcionalidades isoladas por domínio (Countries)

Cada feature é autocontida, favorecendo escalabilidade e manutenção.

🧠 Decisões Técnicas
Standalone Components

O projeto utiliza a abordagem moderna baseada em Standalone Components, eliminando NgModules e tornando dependências explícitas no próprio decorator.

Benefícios:

Redução de boilerplate

Melhor organização

Alinhamento com o futuro do Angular

Estratégia de Cache Local

A API é chamada apenas uma vez no carregamento inicial.
Busca, filtro e ordenação são aplicados localmente sobre o array carregado.

Vantagens:

Redução de requisições HTTP

Melhor performance percebida

Simplicidade no gerenciamento de estado

Lazy Loading

As páginas são carregadas sob demanda utilizando loadComponent, reduzindo o bundle inicial.

Separação de Responsabilidades

countries-list atua como container (Smart Component)

Componentes filhos são presentacionais (Dumb Components)

Comunicação via @Input() e @Output()

Dark Mode

Implementado com CSS Custom Properties e alternância de classe global, mantendo consistência visual e evitando duplicação de estilos.

🔮 Melhorias Futuras

Implementar ChangeDetectionStrategy.OnPush

Substituir subscribe manual por async pipe

Adicionar testes unitários

Implementar CDK Virtual Scroll

Persistir tema no localStorage

Adicionar i18n

Implementar animações de transição

🛠️ Build para Produção
ng build

👨‍💻 Autor: Moisés Taguchi
Desafio técnico — Bclouder
