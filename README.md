# Live Blog

Eine Blog-Anwendung, umgesetzt mit **Next.js 16**, **React 19**, **TypeScript** und **Tailwind CSS**.  
Der Fokus liegt auf sauberer Architektur, Typsicherheit und einem modernen Entwickler-Workflow.
Es wird clientseitige Datenabfrage mit TanStack Query demonstriert. 

## Technologie-Stack

- **Framework:** Next.js 16
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Linting & Formatierung:** ESLint, Prettier

## Lokale Entwicklung
```bash
npm install
npm run dev
```

Anwendung unter [http://localhost:3000](http://localhost:3000) im Browser öffnen.

## Projektstruktur
```
src/
├── app/        # Next.js App Router – Seiten & Layouts
├── components/ # Wiederverwendbare UI-Komponenten
└── data/       # Datenbank-Schema und Queries
```

## Features

- Serverseitiges Rendering & statische Generierung mit dem Next.js App Router
- Vollständig typisierte Codebasis mit TypeScript
- clientseitiges Daten-Fetching mit TanStack Query
- Einheitlicher Code-Stil durch ESLint & Prettier
```
