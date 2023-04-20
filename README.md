# demo-bill-pay

This demo shows how you could build a bill pay solution with Codat. It demonstrates how we can manage bill payments of apps like Quickbooks Sandbox.

See it in action - <https://demo-bill-pay.vercel.app>


[![Billpay Demo Video](https://img.youtube.com/vi/7US9K6EUzF4/0.jpg)](https://www.youtube.com/watch?v=7US9K6EUzF4)



---

## Getting started

### Local development

#### In Codat...

1. Set up the integrations you want to use  
  You should have a Codat account connected to the source that you want. For example to connect your Codat account to a Quickbooks Sandbox, follow [our docs](https://docs.codat.io/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup).
2. Set up redirects  
  On the [redirects settings](https://app.codat.io/settings/redirects) page, add `https://{your-domain}/connection-successful`, replacing `your-domain` with your domain. Users are redirected to Hosted Link to authorize access to their data, and this is the URL the user will return to when that's completed.

#### Dependencies

To ensure that you can run the development server, make sure that the following are installed:
- `npm -v 16.9.0`

To install all the dependencies:

```bash
npm install
```

Create a `.env` file (you can copy the `.env.example` file and rename it). 

```
CODAT_AUTH_HEADER="Basic MarxMnVNSEdXREVwQTI2Qk1seE5lQzAzcnhGZHNBZzFiYUxKeFRXQQ=="
```

Replace the `CODAT_AUTH_HEADER` value with your auth header. You can find this [in the Portal](https://app.codat.io/developers/api-keys).

#### Run the project

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

