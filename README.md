# ![image](https://user-images.githubusercontent.com/63330019/207848916-6f849df1-98a3-4b64-bd12-f784e2457ac3.png)  DeCryptography
[![Build](https://img.shields.io/badge/%20%F0%9F%94%A8%20Build%20-%20Passing-success.svg)](https://github.com/UCAS-Cybersecurity/DeCryptography/actions/workflows/build.yaml) [![Build](https://img.shields.io/badge/%20%F0%9F%93%84%20Pages%20-%20Deployed-blue.svg)](https://ucas-cybersecurity.github.io/DeCryptography/) [![Build](https://img.shields.io/badge/%20%F0%9F%94%A5%20Firebase%20-%20Deployed-orange.svg)](https://decryptography-43fa4.web.app/) [![Build](https://img.shields.io/badge/%20%F0%9F%9A%80%20Vercel%20-%20Deployed-white.svg)](https://de-cryptography.vercel.app/)


## About
An application to share descriptions of the most common cryptography algorithms. want to learn more about the project? Contact [me](https://t.me/Khader_Kh).

## Content Collaborations
You are very welcome to share with us! learn [how to write content](https://ucas-cybersecurity.github.io/DeCryptography/article/3JgVOSqWvjIo5MEIjNCi).

## Code Collaborations
We are happy to collaborate with the community. you can join us on if you want. [more info](https://t.me/Khader_Kh)

## How to run
To run the project you need a firebase app to make things work. learn how to [create a new app](https://firebase.google.com/).
## App env
After you have your firebase app and running you can link your clone to it by copying .env.example

```bash
cp .env.example .env
```
Then edit it to match your app config
```bash
nano .env
```
```.env
NEXT_PUBLIC_API_KEY=############################
NEXT_PUBLIC_AUTH_DOMAIN=########################
NEXT_PUBLIC_PROJECT_ID=#########################
NEXT_PUBLIC_STORAGE_BUCKET=#####################
NEXT_PUBLIC_MESSAGING_SENDER_ID=################
NEXT_PUBLIC_APP_ID=#############################
NEXT_PUBLIC_MEASUREMENT_ID=#####################
```
Then you're all set to go, you can install and run you're clone as a normal nextjs app

```bash
npm install
npm run dev
# or
yarn install
yarn dev
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Github Actions
DeCryptography depends on github actions for continuos deployments if you want to benefit from actions add custom github secrets
- `env` should contain a copy of you're `.env` file contents
- `FIREBASE_TOKEN` should contain a firebase token to an account that can deploy the configured firebase app

