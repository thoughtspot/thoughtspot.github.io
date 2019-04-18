### Authorization

When a user attempts to access the exported link, they will be subject to authorization. Access will be granted based on the user’s active login via SSO/SAML, LDAP, or an authorization token.  


### Filters

To filter the data, modify the URL with parameters. Each filter needs a numbered column, operator, and value combination, named col1, operator1, val1 for the first filter, then col2, operator2, val2, and so on. Together, these values combine to express a conditional phrase that will query the data based only on the data that matches. The following example shows a filter that only queries data from the EMEA region:

```
https://thoughtspothost/viz/GUID/?col1=region&operator1=EQ&val1=EMEA
```

Possible values for operator are, EQ (equals), GT (greater than), LT (less that), and NE (not equals).