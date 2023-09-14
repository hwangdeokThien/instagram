# Instagram clone project
This is a clone version of instagram website. In this application, we using NodeJS, ReactTypeScript, and server managed by vite

## Set up enviroment from scratch (for Linux)
### nodeJs
1. install Node Version Manager
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
```

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

```bash
source ~/.bashrc
```

2. check nvm installation (check node version)
```bash
nvm list-remote
```

3. install node using nvm
```bash
nvm install v18
```

4. check node installation
```bash
node --version
```

If the terminal print out the version of node (v18), installation is success

### pnpm
install through npm

```bash
npm install -g pnpm
```

### vite
create new vite project (you can skip this part)

```bash
pnpm create vite
```

## Getting Started

To run the server locally, follow these steps:

1. Clone and open the repository:
    ```bash
    git clone https://github.com/hwangdeokThien/instagram.git
    cd instagram
    ```
2. Install required packages for frontend.
    ```bash
    pnpm i
    ```
3. Navigate to server folder and install required packages for backend server.
    ```bash
    cd ./server
    pnpm i
    ```
4. Run the server
    ```bash
    pnpm run server
    ```
5. Open another terminal tab in root folder and run web page.
    ```bash
    pnpm run dev
    ```
6. Ctrl + click to ip server to open localhost
