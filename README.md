# 🌍 Countries Explorer

Aplicação SPA desenvolvida em Angular para explorar países do mundo com dados reais da [REST Countries API](https://restcountries.com).

Projeto criado como desafio técnico para a **Bclouder**, com foco em arquitetura moderna, organização escalável e boas práticas de front-end.

🔗 **[Ver demo ao vivo](#)** ← [ substituir pela URL da Vercel ]

---

## 📸 Preview

| Lista de países | Detalhe do país |
|---|---|
| ![Lista](https://github.com/user-attachments/assets/c70e1004-3e8e-409d-be9a-823f5d1f7e73) | ![Detalhe](https://github.com/user-attachments/assets/33ac9ece-2175-47ec-9788-66c5ee203d6d) |

---

## ✅ Funcionalidades

- 🔍 Busca em tempo real por nome do país
- 🌎 Filtro por região (África, Américas, Ásia, Europa, Oceania)
- 📊 Ordenação por nome ou população
- 🗺️ Página de detalhe com capital, região, sub-região, população, idiomas e moedas
- 🔗 Países fronteiriços clicáveis na página de detalhe
- 🌙 Dark mode com alternância por botão
- ⏳ Estado de loading visível durante requisições
- ❌ Tratamento de erro com botão de nova tentativa
- 📱 Layout responsivo para mobile e desktop

---

## 🚀 Como rodar localmente

**Pré-requisitos:** Node.js 18+ e npm instalados.

```bash
# Clone o repositório
git clone https://github.com/Moisestaguchi/countries-explorer.git

# Acesse a pasta
cd countries-explorer

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
ng serve
```

Acesse **[http://localhost:4200](http://localhost:4200)** no navegador.

---

## 🧩 Arquitetura

```
src/app/
├── core/
│   └── services/          # CountriesService, ThemeService
├── features/
│   └── countries/
│       ├── components/    # country-card, search-bar, region-filter
│       ├── models/        # interface Country tipada
│       └── pages/         # countries-list, country-detail
└── shared/
    └── components/        # loading-spinner, error-message
```

A estrutura segue divisão por camadas — **core** para serviços globais, **features** para domínios isolados e **shared** para componentes reutilizáveis. Cada feature é autocontida, favorecendo escalabilidade e manutenção.

---

## 🧠 Decisões técnicas

### Standalone Components
Utilizei a abordagem moderna sem NgModules, tornando as dependências explícitas no próprio decorator de cada componente. Isso reduz boilerplate, melhora a legibilidade e está alinhado com o futuro do Angular.

### Estratégia de cache local
A API é chamada **uma única vez** no carregamento inicial. Busca, filtro por região e ordenação são aplicados localmente sobre o array em memória. Isso reduz requisições HTTP, melhora a performance percebida e simplifica o gerenciamento de estado — uma troca consciente dado o tamanho fixo da base (~250 países).

### Lazy loading
As páginas são carregadas sob demanda via `loadComponent`, reduzindo o bundle inicial da aplicação.

### Smart / Dumb Components
`countries-list` atua como **container** — gerencia estado e lógica. Os filhos (`search-bar`, `region-filter`, `country-card`) são **presentacionais** — recebem dados via `@Input()` e comunicam eventos via `@Output()`. Isso facilita manutenção, reuso e futuros testes.

### Dark mode com CSS Custom Properties
O tema é controlado por variáveis CSS globais (`--bg`, `--card-bg`, `--text`, `--border`). O `ThemeService` alterna a classe `.dark-mode` no `body`, e o Angular Material responde automaticamente. Sem duplicação de estilos.

---

## 🔮 Melhorias futuras

- `ChangeDetectionStrategy.OnPush` nos componentes presentacionais
- Substituir `subscribe` manual por `async pipe`
- Testes unitários com Jest/Karma
- CDK Virtual Scroll para listas grandes
- Persistência do tema no `localStorage`
- Animações de transição entre páginas

---

## 🛠️ Tecnologias

- [Angular 19](https://angular.dev) — Standalone API
- [Angular Material](https://material.angular.io)
- RxJS
- TypeScript
- SCSS com BEM
- [REST Countries API](https://restcountries.com)

---

## 🏗️ Build para produção

```bash
ng build
```

Arquivos gerados em `dist/countries-explorer/browser`.

---

**Moisés Taguchi** — Desafio técnico Bclouder
