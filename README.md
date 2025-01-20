# GCP Functions

## install gcloud CLI

.. this took a bit of time on my machine as brew does a lot of updates ..

```bash
brew install --cask google-cloud-sdk
```

```bash
gcloud init
```

```bash
gcloud --version
```

## Create Project

```bash
yarn init -i

```

## install dependencies

```bash
yarn add @google-cloud/functions-framework
yarn add -D typescript
```

## Important note

To satisfy typescript i had to install or you might get compilation errors

```bash
@yarnpkg/sdks@3.2.0
```

## Upgrade Yarn to Version 2 or Later: If you haven’t already, upgrade Yarn

```bash
npm install -g yarn@berry
```

## Set Your Project to Use Plug'n'Play

```bash
yarn set version berry
```

.yarnrc.yml should now be in your project

## Install Dependencies: Reinstall the project dependencies

```bash
yarn install
```

## Run the Command

```bash
yarn dlx @yarnpkg/sdks vscode
```

## In package.json specify what yarn engine you are using

```json
  "engines": {
    "yarn": "^4.6.0"
  }
```

## Write the function

## build the project

## Start the project locally

```bash
yarn start
```

output

```bash
Serving function...
Function: hello
Signature type: http
URL: http://localhost:8081/
```

Go to the url

output

```bash
Hello from GCP function 2025-01-20T07:32:42.067Z
```

## Deploy to GCP cloud

if you are not logged in, make sure you authenticate your account

```bash
gcloud auth login
```

```bash
gcloud functions deploy hello \
    --gen2 \
    --runtime=nodejs23 \
    --region=us-west1 \
    --source=. \
    --entry-point=hello \
    --trigger-http \
    --allow-unauthenticated
```
