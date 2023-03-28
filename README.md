# bill-pay-demo

This project is a Next.js app developed by Theodo UK. This Codat Demo is used to show the bill payment functionality from the Codat API. More specifically, it demonstrates how we can manage bill payments of apps like Quickbooks Sandbox.

## Getting started

### Local development

#### In Codat...

1. Set up integrations
  You should have a Codat account connected to the source that you want. For example to connect your Codat account to a Quickbooks Sandbox, follow [our docs](https://docs.codat.io/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup).
2. Set up redirects

#### Dependencies

To ensure that you can run the development server, make sure that the following are installed:
- `npm -v 16.9.0`
- `next -v 10` (needed?)

To install all the dependencies:

```bash
npm install
```

Create a `.env` file (you can copy the `.env.example` file and rename it). 

```
CODAT_AUTH_HEADER="Basic MarxMnVNSEdXREVwQTI2Qk1seE5lQzAzcnhGZHNBZzFiYUxKeFRXQQ=="
```

Replace the `CODAT_AUTH_HEADER` value wuth your auth header. You can find this [in the Portal](https://app.codat.io/developers/api-keys).

#### Run the project

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

