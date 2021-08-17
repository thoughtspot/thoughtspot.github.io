## SAML SSO authentication
ThoughtSpot supports the Single Sign-On (SSO) authentication method with the Security Assertion Markup Language (SAML) authentication and authorization framework. With SAML SSO, users can authenticate to the SAML identity provider (IdP) at your federation to access the ThoughtSpot application, or the embedded ThoughtSpot content in an external web application. It also allows them to navigate seamlessly between different application interfaces with their existing credentials.

By default, [local authentication]({{ site.baseurl }}/admin/setup/internal-auth.html) is enabled. Use this article to learn how to configure a SAML integration with an external IdP.

## About SAML authentication
The SAML SSO authentication involves several entities and components.

### SAML entities
SAML is an XML standard that allows secure exchange of user authentication and authorization data between trusted partners. It enables the following entities to exchange identity, authentication, and authorization information:

- **Identity Provider (IdP)**

    The Identity Management system that maintains the user identity information. IdP acts as a SAML authority and authenticates SSO users. ThoughtSpot supports SAML authentication framework with popular Identity Providers such as [Okta](https://developer.okta.com/docs/guides/build-sso-integration/saml2/before-you-begin/){: target="_blank"}, [Azure Active Directory](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings-azure-ad){: target="_blank"}, [PingFederate](https://docs.pingidentity.com/bundle/solution-guides/page/ozz1597769517562.html){: target="_blank"}, [Microsoft AD FS](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings){: target="_blank"}, and [Onelogin](https://developers.onelogin.com/saml){: target="_blank"}. This is not an exhaustive list. To determine if ThoughtSpot supports your preferred IdP, talk to your ThoughtSpot contact.

    After you complete the SAML configuration in ThoughtSpot that this article describes, refer to your Identity Provider’s SAML documentation for specific information on setting up SAML with that IdP.

- **Service Provider (SP)**

    The provider of a business function or application service; for example ThoughtSpot. The SP relies on the IdP to authenticate users before allowing access to its services.

- **Federated user**

    A user whose identity information is managed by the IdP. The federated users have SSO credentials and authenticate to IdP to access various application services.

### SAML assertion and attributes
Both SP-initiated and IdP-initiated authentication workflows rely upon assertions that are exchanged between the SAML endpoints through a web browser.

Some of the most commonly used elements are:

- **SAML assertion**

    The user authentication and authorization information issued by the IdP. SAML assertions contain all the information necessary for a service provider to confirm if the user identity is valid.

- **Metadata**

    Data in the XML format to establish interoperability between the IdP and SP. It contains the URLs of the endpoints, entity ID, and so on.

- **Assertion Services Consumer (ACS) URL**

    The endpoint URL to which the user’s browser sends the SAML response received from the IdP after authenticating a user.

- **Entity ID**

    A unique service name to identify the client application from which the SSO login request originates.

- **SAML attributes**

    The attributes associated with the user; for example, username and email address.
