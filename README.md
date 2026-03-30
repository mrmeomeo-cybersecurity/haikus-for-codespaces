# Haikus for Codespaces

This is a quick node project template for demoing Codespaces. It is based on the [Azure node sample](https://github.com/Azure-Samples/nodejs-docs-hello-world).

Point your browser to [Quickstart for GitHub Codespaces](https://docs.github.com/en/codespaces/getting-started/quickstart) for a tour of using Codespaces with this repo.

## Cloudflare setup

This repo now includes a Cloudflare Workers configuration so you can run and deploy the app on Cloudflare.

### 1) Authenticate Wrangler

```bash
npx wrangler login
```

### 2) Run locally with Cloudflare runtime

```bash
npm run cf:dev
```

### 3) Deploy to Cloudflare Workers

```bash
npm run cf:deploy
```

### Notes

- The Worker entrypoint is `worker.js`.
- Static files in `public/` are served using the `ASSETS` binding configured in `wrangler.toml`.
