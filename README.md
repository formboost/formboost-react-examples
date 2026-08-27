# Formboost React Examples

React + Vite examples for submitting forms to [Formboost](https://formboost.app/) using both native `fetch` and Axios.

Formboost endpoint format:

```text
https://formboost.app/f/YOUR_ENDPOINT
```

## Included examples

- `ContactFormFetch.jsx` — controlled React form using `fetch`
- `ContactFormAxios.jsx` — controlled React form using Axios
- basic loading, success, and error states

## Run locally

```bash
npm install
npm run dev
```

Then replace `YOUR_ENDPOINT` in the example components with your Formboost endpoint ID.

## Example request

```js
await fetch("https://formboost.app/f/YOUR_ENDPOINT", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Alex Johnson",
    email: "alex@example.com",
    message: "Hello from React"
  })
});
```

See the [Formboost documentation](https://formboost.app/docs) for configuration, integrations, redirects, and spam protection.
