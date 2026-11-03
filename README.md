# Portfolio Website

My personal portfolio, built with [Next.js](https://nextjs.org) and published with GitHub Pages at https://angelicab303.github.io/portfolio/.

## Run Locally

Install dependencies (first time, or whenever `package.json` changes):

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads as you edit files (for example `app/page.tsx`).

## Making and Previewing Changes

Work on a branch so the live site is never affected until you're ready.

```bash
git checkout main
git pull origin main
git checkout -b my-branch-name
```

Make your edits, check them at `localhost:3000`, then commit and push the branch:

```bash
git add .
git commit -m "Describe the change"
git push -u origin my-branch-name
```

Pushing a branch does not change the live site.

## Merge to Main

When you're happy with the changes, merge into `main`, either by opening a pull request on GitHub and merging it, or locally:

```bash
git checkout main
git pull origin main
git merge my-branch-name
git push origin main
```

Merging to `main` only updates the source code. It does **not** update the live site.

## Deploy to GitHub Pages

GitHub Pages serves the `gh-pages` branch, which holds the built static site. 

Deploy from an up-to-date `main` branch:

```bash
git checkout main
git pull origin main
npm run deploy
```

`npm run deploy` does the following:

1. Deletes old build output (`out` and `.next`).
2. Builds the static site with the `/portfolio` base path.
3. Adds a `.nojekyll` file so GitHub Pages serves Next.js files correctly.
4. Force-pushes the `out` folder to the `gh-pages` branch.

Deploy publishes whatever branch is currently checked out, so always run it from `main`.

### Verify the Deploy

- Check the **Actions** tab on GitHub for a green "pages build and deployment" run. It will show a spinning icon when actively deploying and can take a few minutes.
- Wait 1 to 2 minutes, then hard refresh the live site (Cmd+Shift+R).

## Troubleshooting

- **Git asks for a password during deploy:** GitHub doesn't accept passwords. This repo is set up to use SSH (`git@github.com:angelicab303/portfolio.git`). Check with `ssh -T git@github.com`.
- **Deploy uses stale or broken state:** clear the cache and retry:

  ```bash
  npx gh-pages-clean
  npm run deploy
  ```

- **Site looks unchanged after deploying:** try a private window to rule out browser caching, and confirm the Actions run succeeded.
- **CSS or images are broken on the live site:** check that the `/portfolio` base path is still set in the deploy script and `next.config`.