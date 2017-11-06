# (Ignite + NativeBase) Experiment

A useful CLI for React Native, boilerplates, plugins, generators, and more.

 - https://github.com/infinitered/ignite

 - https://infinite.red/ignite

Make sure we have Node 7.6+

```
mkdir ignite && cd ignite

nvm install 7.6.0

nvm use 7.6.0
```

```
node -v && npm -v

v7.6.0
4.1.2
```

## Install Ignite CLI

### Install yarn

Beacuse we use nvm, we should exclude installing Node.js so that nvm’s version of Node.js is used.

- https://yarnpkg.com/lang/en/docs/install/

```
brew install yarn --without-node
```

```
yarn --version

1.3.2
```

### Install react-native-cli

```
npm i -g react-native-cli
```

### Now install ignite-cli

```
npm install -g ignite-cli
```

## Learn Ignite

 - https://github.com/infinitered/ignite/tree/master/docs

```
ignite --help
```

```
add (a)        Adds an Ignite plugin.
attach         Attaches Ignite CLI to an existing project.
doctor         Checks your dev environment for dependencies.
generate (g)   Generates some files.
info           Displays info about a given Ignite plugin.
list           Lists known Ignite plugins.
new (n)        Generate a new React Native project with Ignite CLI.
plugin (p)     Manages ignite plugins
remove (r)     Removes an Ignite CLI plugin.
search         Searches known Ignite plugins.
spork          Copy templates as blueprints for this project
version (v)    Prints current version of installed ignite

Slack: http://community.infinite.red
```

### List Ignite Plugins

```
ignite list
```

```
Install with `ignite add pluginname` and remove with `ignite remove pluginname`

ignite-animatable             Infinite Red, Inc.
ignite-basic-generators       Infinite Red, Inc.
ignite-dev-screens            Infinite Red, Inc.
ignite-elements               Nader Dabit
ignite-empty-app-template     Infinite Red, Inc.
ignite-fetch-blob             Steve Kellock
ignite-i18n                   Infinite Red, Inc.
ignite-img-cache              Steve Kellock
ignite-keychain               Justin Lane
ignite-maps                   Infinite Red, Inc.
ignite-minimal-app-template   Infinite Red, Inc.
ignite-push-notification      Ryan Linton
ignite-radio-buttons          Robin Heinze
ignite-redux-logger           Gant Laborde
ignite-source-map             Gant Laborde
ignite-tab-view               Nader Dabit
ignite-unholy-app-template    Infinite Red, Inc.
ignite-vector-icons           Infinite Red, Inc.
ignite-video                  Ryan Linton
```

## Project Structure

 - https://github.com/infinitered/ignite/blob/master/docs/quick-start/project-structure.md


## How to create a new (Ignite + NativeBase) project

```
ignite new appname --boilerplate native-base-boilerplate
```

### Boilerplate

 - https://github.com/GeekyAnts/ignite-native-base-boilerplate

#### Generators

```
ignite generate screen MyNewScreen
```

```
ignite generate container MyNewContainer
```

This generates a generic components which is reusable in any screen of the app.

```
ignite generate component MyNewComponent
```

Floatlist, Row, Single

```
ignite generate list MyNewList
```

## Create a new (Ignite + NativeBase) project

```
brew install watchman
```

```
ignite new cryptofak --boilerplate native-base-boilerplate
```

```
🔥 igniting app cryptofak
✔ using the Native Base's Iginte boilerplate v2

✔ added React Native 0.47.2 in 47.46s

? What internationalization library will you use?

✔ added ignite-native-base-boilerplate in 45.74s
✔ added ignite-vector-icons in 29.24s
✔ added ignite-standard in 34.17s

✔ configured git
```

### To get started:

```
cd cryptofak

react-native run-ios
react-native run-android
```

If you hit the error:

```
xcrun: error: unable to find utility "instruments", not a developer
tool or in PATH
```

Set the Xcode path:

```
sudo xcode-select -s /Applications/Xcode.app
```

### To run in Android

Before using Ignite make sure we've followed the latest react-native setup instructions at:

 - https://facebook.github.io/react-native/docs/getting-started.html

### Read the walkthrough at

 - https://github.com/infinitered/ChainReactApp (Includes API Call examples)

 - https://github.com/infinitered/ignite-ir-boilerplate/blob/master/readme.md#boilerplate-walkthrough

### Slack community at

 - http://community.infinite.red

## Install Reactotron

 - https://github.com/infinitered/reactotron

 - https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md

```
brew cask install reactotron
```

### Install the CLI

```
npm install -g reactotron-cli
```

### Configure Reactotron with our project

Let's install Reactotron on our project as a dev dependency.

```
npm i --save-dev reactotron-react-native
```

#  cryptofak
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** Install the Application with `yarn` or `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

