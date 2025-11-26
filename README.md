# Backstage App Setup Guide

This guide outlines how to create and run a local Backstage instance.

---

## 1. Create a New App

```bash
npx @backstage/create-app@latest

create app name

cd my-backstage-app # my-backstage-app
yarn start
```

## 2. If yarn fails run:
Follow these steps if you encounter command not found: yarn or similar errors.
1) Switch to Node 20 (via nvm)
```bash
# Install nvm if not already installed
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"   # load nvm in this shell

# Install and use Node 20 LTS
nvm install --lts=iron
nvm use --lts=iron

# Confirm version
node -v   # should show v20.x
```
2) Enable Yarn 4 with Corepack

```bash
corepack enable
corepack prepare yarn@4.4.1 --activate

yarn -v    # should show 4.4.1
```
3) Run yarn install

```bash
yarn install

yarn start
```

Issues:
```text
yarn: command not found:	Run corepack enable then corepack prepare yarn@4.4.1 --activate

Wrong Node version:	Run nvm use --lts=iron

Install fails on isolated-vm:	macOS: run xcode-select --install
                                Ubuntu: sudo apt install -y build-essential python3 g++

App won’t start after switching Node versions:	Delete node_modules and yarn.lock, then rerun yarn install
```