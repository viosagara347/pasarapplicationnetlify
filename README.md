# pasarapplicationnetlify
using netlify for live preview.

## Netlify Deploy Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/f8401b63-0104-4985-acd7-61e1778bc37f/deploy-status)](https://app.netlify.com/sites/pasarapplication/deploys)

**ClickAble Links: [pasarapplications](https://pasarapplication)**

Please Make Sure that NPM and Gulp Installed Successfully.
After that,
**NPM** Proper Fitment.
```sh
$npm install
```
and then
```sh
$npm start
```
or
```sh
$gulp watch
```

*Copied and Adapted From [SB Admin 2](https://startbootstrap.com/template-overviews/sb-admin-2/) README.md*

### Gulp Tasks

-   `gulp` the default task that builds everything
-   `gulp watch` browserSync opens the project in your default browser and live reloads when changes are made
-   `gulp css` compiles SCSS files into CSS and minifies the compiled CSS
-   `gulp js` minifies the themes JS file
-   `gulp vendor` copies dependencies from node_modules to the vendor directory

You must have npm installed globally in order to use this build environment. This theme was built using node v11.6.0 and the Gulp CLI v2.0.1. If Gulp is not running properly after running `npm install`, you may need to update node and/or the Gulp CLI locally. 