{: id="admin-portal"}
## Configure SAML using the Admin Console
You need admin privileges to enable SAML SSO authentication.

{% include note.html content="If you configure authentication through SAML, you cannot also configure authentication through Active Directory." %}

1. Configure the ThoughtSpot application instance on your IDP server.

2. Log into your ThoughtSpot application instance.

3. From the top navigation bar, select the **Admin** tab.

4. Select **SAML** from the side navigation bar that appears.

5. Click the **Configure** button in the middle of the screen.

6. Fill in the parameters with the information you collected in the [Configuration prerequisites](#prerequisites).

4. When the configuration is complete, download ThoughtSpot's metadata file, `spring_saml_metadata.xml`. To download this file, navigate to `https://<hostname-or-IP>/callosum/v1/saml/metadata`. The file automatically downloads.

{% include note.html content="ThoughtSpot adds external users, or users that authenticate through SAML or Active Directory, to the <strong>all</strong> group by default. This group has no privileges. You must manually assign users to ThoughtSpot groups to give them privileges, such as <strong>can upload user data</strong>, or <strong>can manage data</strong>." %}

### Configure the IdP
To enable the IdP to recognize your host application and ThoughtSpot as a valid service provider, you must configure the IdP with required attributes and metadata. This includes the `spring_saml_metadata.xml` file that you downloaded in step 7 of [Configure SAML using the Admin Console](#admin-portal).

ThoughtSpot supports SAML authentication with several identity and access management providers, such as [Okta](https://developer.okta.com/docs/guides/build-sso-integration/saml2/before-you-begin/){: target="_blank"}, [Azure Active Directory](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings-azure-ad){: target="_blank"}, [PingFederate](https://docs.pingidentity.com/bundle/solution-guides/page/ozz1597769517562.html){: target="_blank"}, [Microsoft AD FS](https://docs.microsoft.com/en-us/powerapps/maker/portals/configure/configure-saml2-settings){: target="_blank"}, [Onelogin](https://developers.onelogin.com/saml){: target="_blank"} and so on. If you want to use one of these providers as your IdP, make sure you read the SAML configuration steps described in the Identity provider’s documentation site.

To determine if ThoughtSpot supports your preferred IdP, [contact ThoughtSpot support]({{ site.baseurl }}/admin/misc/contact.html).

Complete your configuration of the IdP using the IdP's SAML documentation. Upload or copy the contents of the `spring_saml_metadata.xml` to your IdP server. If you did not download the `spring_saml_metadata.xml` file, navigate to `https://<your_ThoughtSpot_hostname-or-IP>/callosum/v1/saml/metadata`. The file automatically downloads.

{% include note.html content="When configuring SAML 2.0, make sure you map the SAML user attributes to appropriate fields. For example, you must map SAML user’s username to the NameId attribute in OneLogin. Similarly, in Okta, you must map the username to userPrincipalName. You must also ensure that the email address of the user is mapped to the mail attribute. If your IdP does not allow you to import the IdP metadata XML file, you must map these values manually." %}

After you configure the IdP, open a Web browser and go to the ThoughtSpot login page. It should now show the Single Sign On option.

## Additional resources
As you develop your expertise in authentication and security, we recommend the following ThoughtSpot U course:
* [Single Sign On (SSO)](https://training.thoughtspot.com/authentication-security/621450){:target="_blank"}

See other training resources at <br/>
<a href="https://training.thoughtspot.com/" target="_blank"><img src="{{ "/images/ts-u.png" | prepend: site.baseurl  }}" alt="ThoughtSpot U"></a>
