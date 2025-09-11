# RISE Project Directory

This repository serves as a directory of all RISE apps, tools, and infrastructure that will be displayed on the RISE website.

## How to Add Your Project

1. **Fork this repository** and create a new branch for your addition.

2. **Add your project logo and banner images**:
   - Create a directory for your project: `projects/your-project-name/`
   - Add a square logo (250x250px): `projects/your-project-name/logo.png`
   - Add a banner image (1000x500px): `projects/your-project-name/banner.png`

3. **Update the directory**:
   - Add your project to `src/directory.ts`
   - Follow the existing format and provide all required fields

   Example:
   ```typescript
   {
     type: 'project', // Choose from: 'project', 'infrastructure', or 'tooling'
     name: 'Your Project Name',
     oneLiner: 'A short, catchy description (one sentence)',
     blurb: 'A detailed description of your project (max 150 words)',
     logo: '/projects/your-project-name/logo.png',
     banner: '/projects/your-project-name/banner.png',
     tags: ['crypto', 'payments'], // Choose from available tags in types.ts
   }
   ```

4. **Run tests to ensure everything works**:
   ```bash
   npm test
   ```

5. **Submit a pull request** with your changes.

## Requirements

- Images must be in PNG format
- Logo must be 250x250px square
- Banner must be 1000x500px
- Blurb should be 150 words maximum
- All fields are required
- All tests must pass

## Development

### Setup

```bash
# Install dependencies
npm install
```

### Building

```bash
# Build the project
npm run build
```

The compiled output will be in the `dist` directory.

### Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run a specific test
npm test -- -t "test name"
```

**Important:** All tests must pass before submitting a pull request. The CI pipeline will reject any PRs with failing tests.

### Linting

```bash
# Run linter
npm run lint
```



## Project Structure

- `src/` - TypeScript source code
  - `types.ts` - Type definitions for projects
  - `directory.ts` - Project listings data
  - `__tests__/` - Test files
- `projects/` - Project assets (logos, banners)
  - `<project-name>/` - Assets for each project

## CI/CD

This repository uses GitHub Actions for continuous integration:

- **Automatic Testing**: Every pull request and push to main triggers automatic testing
- **Build Verification**: The CI pipeline ensures the project builds successfully
- **Linting**: Code style and quality are automatically checked
- **Multiple Node Versions**: Tests run on Node.js 18.x and 20.x

[![CI](https://github.com/risechain/proj-list/actions/workflows/ci.yml/badge.svg)](https://github.com/risechain/proj-list/actions/workflows/ci.yml)

## Review Process

Once you submit your PR, the RISE team will review your submission. All CI checks must pass before a PR can be merged. We may request changes if necessary. After approval, your project will be added to the official RISE website directories.
