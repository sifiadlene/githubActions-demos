# GitHub Actions Demos

A comprehensive demonstration repository showcasing various GitHub Actions patterns, including reusable workflows, custom JavaScript actions, and custom container actions.

## 📋 Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Features](#features)
- [Getting Started](#getting-started)
- [Reusable Workflows](#reusable-workflows)
- [Custom Actions](#custom-actions)
- [Usage Examples](#usage-examples)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This repository demonstrates best practices for GitHub Actions, including:

- **Reusable Workflows**: How to create and use workflows that can be shared across repositories
- **Custom JavaScript Actions**: Building Node.js-based actions for complex logic
- **Custom Container Actions**: Creating Docker-based actions for environment-specific tasks
- **Workflow patterns**: Caller-reusable workflow patterns with inputs and secrets

## 📁 Repository Structure

```
.github/
├── Workflows/
│   ├── reusable.yml          # Reusable workflow definition
│   └── caller.yml            # Workflow that calls the reusable workflow
└── actions/
    ├── MyJavaScriptAction/   # Custom JavaScript action
    │   ├── action.yml        # Action metadata
    │   ├── src/index.js      # Action logic
    │   ├── package.json      # Node.js dependencies
    │   └── node_modules/     # Dependencies (auto-generated)
    └── my-container-action/  # Custom container action
        ├── action.yml        # Action metadata
        ├── Dockerfile        # Container definition
        └── entrypoint.sh     # Container entry point script
```

## ✨ Features

### 🔄 Reusable Workflows
- Parameterized workflows that can accept inputs and secrets
- Demonstration of workflow composition and reusability
- Best practices for sharing workflows across repositories

### 🎭 Custom Actions
- **JavaScript Action**: Lightweight action using Node.js runtime
- **Container Action**: Full-featured action using Docker containers
- Input/output handling and error management
- Action branding and metadata

## 🚀 Getting Started

### Prerequisites

- GitHub account
- Repository with Actions enabled
- Basic understanding of YAML and GitHub Actions concepts

### Using the Reusable Workflow

To use the reusable workflow in your repository:

```yaml
name: Example Usage
on: [push]

jobs:
  call-reusable:
    uses: sifiadlene/githubActions-demos/.github/Workflows/reusable.yml@main
    with:
      username: ${{ github.actor }}
    secrets:
      MY_SECRET: ${{ secrets.MY_SECRET }}
```

### Using Custom Actions

#### JavaScript Action
```yaml
steps:
  - name: Greet Someone
    uses: sifiadlene/githubActions-demos/.github/actions/MyJavaScriptAction@main
    with:
      who: 'World'
    id: greet

  - name: Get the output
    run: echo "${{ steps.greet.outputs.greeting }}"
```

#### Container Action
```yaml
steps:
  - name: Run Container Action
    uses: sifiadlene/githubActions-demos/.github/actions/my-container-action@main
```

## 🔄 Reusable Workflows

### Simple Reusable Workflow

**File**: `.github/Workflows/reusable.yml`

This workflow demonstrates:
- **Inputs**: Accepts a `username` parameter
- **Secrets**: Securely handles a `MY_SECRET` secret
- **Functionality**: Prints a greeting and displays the secret

**Parameters:**
- `username` (required, string): The name to greet
- `MY_SECRET` (required, secret): A secret value to display

### Caller Workflow

**File**: `.github/Workflows/caller.yml`

This workflow shows how to:
- Call a reusable workflow from the same repository
- Pass inputs and secrets to the reusable workflow
- Trigger on push to the main branch

## 🎭 Custom Actions

### JavaScript Action

**Location**: `.github/actions/MyJavaScriptAction/`

A Node.js-based action that:
- Accepts a `who` input parameter (defaults to "world")
- Returns a `greeting` output
- Uses the GitHub Actions Toolkit (`@actions/core`)
- Includes proper error handling

**Features:**
- Lightweight and fast execution
- Full access to Node.js ecosystem
- Built-in GitHub API integration
- TypeScript support ready

### Container Action

**Location**: `.github/actions/my-container-action/`

A Docker-based action that:
- Uses Ubuntu 22.04 as base image
- Includes curl for HTTP requests
- Runs a simple greeting script
- Demonstrates container action patterns

**Features:**
- Complete control over runtime environment
- Support for any programming language
- System-level access and tools
- Consistent execution across platforms

## 💡 Usage Examples

### Example 1: Basic Workflow with Custom Actions

```yaml
name: Demo Workflow
on:
  push:
    branches: [ main ]

jobs:
  demo:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: JavaScript Greeting
        uses: ./.github/actions/MyJavaScriptAction
        with:
          who: 'GitHub Actions'
        id: js-greeting
      
      - name: Container Greeting
        uses: ./.github/actions/my-container-action
      
      - name: Display Results
        run: echo "${{ steps.js-greeting.outputs.greeting }}"
```

### Example 2: Using the Reusable Workflow

```yaml
name: Call Reusable Demo
on: [workflow_dispatch]

jobs:
  call-demo:
    uses: ./.github/Workflows/reusable.yml
    with:
      username: ${{ github.actor }}
    secrets:
      MY_SECRET: ${{ secrets.DEMO_SECRET }}
```

## 🛠️ Development

### Setting Up JavaScript Action

1. Navigate to the JavaScript action directory:
   ```bash
   cd .github/actions/MyJavaScriptAction
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Make changes to `src/index.js`

4. Build the action (if using build tools):
   ```bash
   npm run build
   ```

### Setting Up Container Action

1. Navigate to the container action directory:
   ```bash
   cd .github/actions/my-container-action
   ```

2. Test the Docker container locally:
   ```bash
   docker build -t test-action .
   docker run test-action
   ```

3. Make changes to `entrypoint.sh` or `Dockerfile` as needed

## 📚 Best Practices Demonstrated

- **Security**: Proper handling of secrets in reusable workflows
- **Modularity**: Separating actions and workflows for reusability
- **Documentation**: Clear action metadata with descriptions and branding
- **Error Handling**: Proper error handling in both JavaScript and container actions
- **Structure**: Organized directory structure following GitHub conventions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-demo`)
3. Make your changes
4. Test your actions and workflows
5. Commit your changes (`git commit -am 'Add new demo'`)
6. Push to the branch (`git push origin feature/new-demo`)
7. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Creating Custom Actions](https://docs.github.com/en/actions/creating-actions)
- [Reusing Workflows](https://docs.github.com/en/actions/using-workflows/reusing-workflows)
- [GitHub Actions Toolkit](https://github.com/actions/toolkit)

---

**Happy Automating! 🚀**