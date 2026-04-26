# GitHub Issues Viewer

A React app for browsing and filtering GitHub repository issues.

## Features

- Search any public GitHub repository by owner and repo name
- View issues in a card grid with title, state badge, dates, author avatar, and links
- Filter issues by creation date or last updated date independently
- Pagination to browse through issues page by page
- Dark / Light mode toggle
- Hover tooltip on truncated issue titles

## Tech Stack

- React 19 + TypeScript
- Vite
- Axios
- CSS Modules

## Getting Started

```bash
cd vite-project
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. Type a repository in the search bar using the format `owner/repo` (e.g. `facebook/react`)
2. Click **Search**
3. Use the filters on the left to narrow issues by creation or update date
4. Select **All** on a filter to clear only that filter
5. Use **Previous** / **Next** to paginate

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
