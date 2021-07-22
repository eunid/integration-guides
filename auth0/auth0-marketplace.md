## Prerequisites

Before you begin:

1. Register an Auth0 account and setup a tenant. If not, register a free account and tenant at https://auth0.com
2. Furthermore, we assume that you have already registered a developer account at netID. If not, register a free account at https://developer.netid.de/register

## Configure integration with netID

To configure the integration with netID, follow the steps below.

1. Login into the netID Developer Portal with your account
2. Create a `service` for which you want to enable the netID Single Sign-On by navigating to `Services` and then selecting `Add service`. Detailed documentation can be found [here](https://developerzone.netid.dev/devportal/tutorial/services/)
3. Create a `client` for this service by selecting on `Add client`. Detailed documentation can be found [here](https://developerzone.netid.dev/devportal/tutorial/clients/#creating-a-client). **It's critical** to configure the proper `callback url` for your tenant, `like https://<YOUR_AUTH0_DOMAIN>/login/callback`. Your Auth0 domain is either your custom domain, if one is configured, or your tenant name and a region (for most tenants) prepended to auth0.com. [More information on Auth0 tenant domains are here](https://auth0.com/docs/get-started/learn-the-basics#create-a-tenant-and-domain).
4. Once the client is created it will initially run in a sandboxed mode, which means it can only be used with  netID-Accounts on the configured allow list. In order to successfully run through the initial integration add a
test user (e-mail address) to the allow list by selecting `Add test user`

Remember **Client ID** and **Client secret - sandbox** (later referred to as **Client Secret**) for the Auth0 configuration by expanding the client details.

## Create and enable connection in Auth0

[Set up this social connection](https://auth0.com/docs/dashboard/guides/connections/set-up-connections-social) in Auth0. Make sure you have the generated **Client ID** and the **Client Secret**.

## Test connection

You're ready to [test your connection](https://auth0.com/docs/get-started/dashboard/test-social-connections). Make sure to use an eligible account as configured for your sandboxed client.

Once you successfully tested the integration you are free request the approval of your service for production use (i.e. without limitations to test users) by netID as described [here](https://developerzone.netid.dev/devportal/tutorial/services/#approval-for-production-use) and once done enable it for users.