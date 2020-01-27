# Repro of bug

Repro of bug while running jest importing files using styled jsx with postcss plugin.

## Instructions

Run `yarn test`. It gets stuck while importing file using styled jsx.

Remove `jsx` from `pages/index.js`, run tests and now they work fine.

Using node v12.13.1.
