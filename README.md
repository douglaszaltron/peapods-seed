<div align="center">
  <h1>🌱 peapods-seeds-react 🌱</h1>
  <p>A React micro-frontend starter template with best practices and modern tooling</p>
</div>

## 💻 Prerequisites

Before you begin, ensure you have the following installed:
- **[Node.js](https://nodejs.org/)** `v18` or higher
- **[pnpm](https://pnpm.io/)** `v9` or higher

## ✨ Getting Started

1. Clone the repository

```bash
git clone https://github.com/peapods/peapods-seeds-react.git
```

2. Install dependencies

```bash
pnpm install
```

3. Run the development server

```bash
pnpm dev
```

The application will run in development mode. Open [http://localhost:4200](http://localhost:4200) to view it in your browser.

## 🛠 Development Workflow

### Branch Strategy

We follow this branching strategy:

| Branch       | Purpose                                           |
| ------------ | ------------------------------------------------- |
| `main`       | Production code                                   |
| `staging`    | Staging/QA environment                            |
| `feature/*`  | New feature development                           |
| `fix/*`      | Bug fixes                                         |
| `hotfix/*`   | Critical production bug fixes                     |
| `release/*`  | Release preparation                               |

**Note:** When creating branches, use the Kanban friendly ID, e.g., `feature/STK-1234`

### Available Scripts

| Command         | Description                                    |
| -------------- | ---------------------------------------------- |
| `pnpm dev`     | Start development server                       |
| `pnpm build`   | Build for production                           |
| `pnpm test`    | Run tests in interactive mode                  |
| `pnpm coverage`| Run tests with coverage report                 |
| `pnpm format`  | Run Biome formatting                           |
| `pnpm validate`| Run linters and type checking                  |
| `pnpm commit`  | Create commits using commitizen                |

### Environment Variables

Create a `.env` file based on `.env.example` with these variables:

| Variable                 | Description                  | Required |
| ----------------------- | ---------------------------- | -------- |
| `REACT_APP_API_BASE_URL`| BFF API URL                 | Yes      |
| `REACT_APP_BASE_URL`    | Micro-frontend base URL     | Yes      |

## 👍 Pull Request Guidelines

### Code Review Resources

We follow Google's engineering practices for code reviews:
- [What do code reviewers look for?](https://google.github.io/eng-practices/review/)
- [How to do a code review](https://google.github.io/eng-practices/review/reviewer/)

### Before Submitting a PR

1. Ensure all tests pass: `pnpm test`
2. Run type checking: `pnpm validate`
3. Format your code: `pnpm format`
4. Update documentation if needed

## 📦 Project Structure

```
src/
├── app/          # Application core components
├── components/   # Shared components
├── hooks/        # Custom React hooks
├── services/     # API and external services
├── types/        # TypeScript type definitions
└── utils/        # Utility functions
```

## 🔧 Tech Stack

- React
- TypeScript
- Vite
- Biome
- Vitest
- React Testing Library
- Commitizen
- Lefthook

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details