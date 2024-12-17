Create new angular project

- npx create-nx-workspace@latest app-name --preset=angular-monorepo

Add new typescript library

- npm install @nrwl/js --save-dev
- npx nx g @nrwl/js:library libs/types (path/to/lib)

Show graph

- npx nx graph

Add story book

- npm install @nrwl/storybook --save-dev
- npm install @nrwl/angular --save-dev
- npx nx g @nx/angular:library libs/ui (path/to/lib)
- npx nx g @nx/storybook:configuration ui (name of lib)

New component

- nx g @nx/angular:component path/to/component

Run storybook

- npx nx storybook ui

Remove library

- npx nx g @nx/workspace:remove storybook (name of lib)

Adding Nest application

- npm install -D @nx/nest
- npm i @nrwl/workspace
- npx nx g @nx/nest:application apps/backend
