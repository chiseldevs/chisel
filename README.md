<p align="center">
  <a href="https://t.me/chiseldevs">
    <img src="src/.vuepress/public/assets/header-logo.png" width="180" height="180">
  </a>
  <h1 align="center">Chisel Devs</h1>
</p>

<p align="center">
  <a href="https://app.netlify.com/sites/chisel/deploys">
    <img src="https://api.netlify.com/api/v1/badges/1180daa0-df1b-4259-b0cb-d56926833117/deploy-status">
  </a>
</p>

**Chisel Devs** is written in Node JS with _Vue JS_. A website that can serve as a guide book for WIUT students.

## Preliminaries

Currently, this application runs in Netlify and it's still in beta phase! If you want to become a collaborator, PM with one
of the Chisel Devs Admins and get Contributor status in our organisation.

## Test & Deploy

In order to startup the project, make sure you have Yarn and NodeJS installed on your PC! You can use NPM, however
yarn is likely recommended for this app. After installation process, open terminal / powershell and run those commands
below:

```bash
// Clone the project
git clone https://github.com/sakhib-orzklv/chisel.git ./chisel

// Enter the project root folder
cd chisel

// Install required modules
yarn install

// Start development session
yarn run docs:dev

// Start building session
yarn run docs:build && mv docs/.vuepress/dist ./dist
```

> The web page is still in beta phase so feel free to [open issues](https://github.com/chiseldevs/chisel/issues/new) and give me some suggestions.

---

> Important Note: Under the MIT license, if you're running your own instance, you should add a link to the source [(this repository)](/) in your websites bio. If you're modifying this source and making your own bot, you should link to the source of your own version of the bot according to the MIT license. Check [LICENSE](LICENSE) for more info.

`Chisel Devs` icon is created by [Genemator (Sokhibjon Orzikulov)](https://genemator.me/).
