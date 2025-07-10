# Node.js TypeScript Project

A simple Node.js project set up with TypeScript support.

## Project Structure

```
├── src/
│   └── index.ts          # Main TypeScript source file
├── dist/                 # Compiled JavaScript output (generated)
├── node_modules/         # Dependencies (generated)
├── package.json          # Project configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## Scripts

- `npm run dev` - Run the project in development mode using ts-node
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled JavaScript
- `npm test` - Run tests (not implemented yet)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run in development mode:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Run the compiled version:
   ```bash
   npm start
   ```

## Dependencies

### Dev Dependencies
- `typescript` - TypeScript compiler
- `@types/node` - Node.js type definitions
- `ts-node` - TypeScript execution environment for Node.js

## TypeScript Configuration

The project uses a standard TypeScript configuration with:
- Source files in `src/`
- Compiled output in `dist/`
- CommonJS module system
- ES2016 target
- Strict type checking enabled
