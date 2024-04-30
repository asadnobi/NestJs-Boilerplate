# Nest.js Boilerplate

Welcome to the Nest.js Boilerplate repository! This boilerplate provides a solid foundation for kickstarting your Nest.js projects with ease and efficiency. Whether you're building a small REST API or a large-scale microservices architecture, this boilerplate is designed to streamline your development process and promote best practices.

### Features
- Modular Structure: Organize your codebase effectively using Nest.js's modular architecture, enhancing scalability and maintainability.
- Configuration Management: Simplify environment configuration with dotenv integration, allowing seamless management of environment variables.
- Dependency Management: Easily manage project dependencies with a pre-configured package.json, including essential Nest.js packages.
- Convenient Scripts: Execute common tasks effortlessly with predefined scripts in the package.json, covering tasks like server startup, testing, and linting.
- Comprehensive Documentation: Get started quickly with detailed documentation, covering setup instructions, configuration options, and usage guidelines.
- Test Coverage: Ensure code quality and reliability with built-in Jest testing, facilitating robust testing practices from the outset.
- Example Endpoints: Explore example endpoints to understand routing and request handling in Nest.js, serving as a valuable reference for developers.

## Getting Started
Follow these steps to get started with the Nest.js Boilerplate:

1. Clone the repository:
```bash
git clone <your-repo-url>
```
2. Install dependencies:
```bash
cd your-repo
npm install
```
3. Set up environment variables:
- Create a `.env.dev.local` file in the root directory for development environment.
- Create a `.env.prod.local` file in the root directory for production environment.
- Define your environment variables in the respective .env files (e.g., PORT, DATABASE_URL, etc.).
4. Run the server:
- For development:
```bash
npm run start:dev
```
- For production:
```bash
npm run start:prod
```

Explore example endpoints:Visit http://localhost:3000 in your browser to explore the example endpoints and understand routing and request handling in Nest.js.

### Available Scripts
In the project directory, you can run:

- npm run build: Builds the Nest.js project.
- npm run format: Formats source code using Prettier.
- npm start: Starts the Nest.js application.
- npm run start:dev: Starts the application in development mode with hot reloading.
- npm run start:debug: Starts the application in debug mode with hot reloading.
- npm run start:prod: Starts the application in production mode.
- npm run lint: Lints the codebase using ESLint.
- npm test: Runs Jest tests.
- npm run test:watch: Runs Jest tests in watch mode.
- npm run test:cov: Runs Jest tests with coverage reporting.
- npm run test:debug: Runs Jest tests in debug mode.
- npm run test:e2e: Runs end-to-end tests using Jest.

## Configuration
- ESLint: ESLint is configured to enforce coding styles and best practices. You can customize ESLint rules in the .eslintrc.json file.
- Prettier: Prettier is integrated for code formatting. You can customize Prettier rules in the .prettierrc.json file.
- CORS: Cross-Origin Resource Sharing (CORS) is enabled by default to allow requests from different origins. You can customize CORS options in the main.ts file.
- dotenv: dotenv is used for environment variable management. Define your environment variables in .env.dev.local and .env.prod.local files for development and production environments respectively.

## Q&A
- What is the purpose of the configs folder?
The configs folder contains configuration files for different environments or application settings.

- What does the core folder contain?
The core folder includes core modules and services that are fundamental to the application, such as database connections, logging, and utility functions.

### Resources
- [Nest.js Official Documentation](https://docs.nestjs.com/)
- [Nest.js GitHub Repository](https://github.com/nestjs/nest)
- [Nest.js Examples Repository](https://github.com/nestjs/nest/tree/master/sample)

### Additional Resources
- [Nest.js TypeScript Starter](https://github.com/nestjs/typescript-starter)
- [Nest.js Official YouTube Channel]()
[- Nest.js Discord Community]()