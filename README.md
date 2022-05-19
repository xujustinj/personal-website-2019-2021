# Personal Website - Version 3

This version of my website is based off [Waterpark's frontend](https://github.com/loolabs/waterpark/tree/main/client) which uses Next.js, TypeScript, and `styled-components`. It comes after I was annoyed by version 2 for relying on `react-scripts`, having a ton of insecure dependencies, and lacking TypeScript. Rather than migrating, I decided to burn it all down.

## Notes

### Creating the Boilerplate

```sh
# load the Next.js example project
npx create-next-app@latest --example with-typescript-styled-components .
# update its packages to the latest
npx npm-check-updates --upgrade
# install the updated packages
npm install
```

### Link Dump

- [Modernising an existing Bootstrap website using Next.js and Tailwind CSS](https://dev.to/jameswallis/series/7970)
- [How to update each dependency in package.json to the latest version?](https://stackoverflow.com/a/22849716)
- [How to remove margin space around body...](https://stackoverflow.com/a/9547315)
- [Favicon for Next.js and TypeScript](https://dev.to/jcubic/favicon-for-next-js-and-typescript-9gk)
- [Linking to an element](https://stackoverflow.com/a/2835151)
- [Custom image for using AWS Amplify with Git LFS](https://hub.docker.com/r/slawekkolodziej/aws-amplify-lfs)
- [FontAwesome icons in Next.js](https://fontawesome.com/docs/web/use-with/react/use-with#next-js)
