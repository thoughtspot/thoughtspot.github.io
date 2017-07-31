# Enable the call home capability

The optional "call home" capability sends usage statistics to ThoughtSpot Support once a day via a secure file server.

Before you can enable the call home feature:

1.  [Configure the connection to the file server](configure_secure_file_server_connection.html#).
2.  Obtain the customer name as recognized by the file server.

The customer name is formatted like this example: `Shared/<customer\_name>/stats`. If you do not know the customer name, [contact ThoughtSpot Support](../misc/contact.html#).

This can be helpful when troubleshooting problems with ThoughtSpot Support, because they will be able to see basic usage information over time for your ThoughtSpot instance.

To set up the call home feature:

1.   [Log in to the Linux shell using SSH](login_console.html#). 
2.   Enable the call home feature by issuing: 

    ```
    $ tscli callhome enable --customer_name <customer\_name>
    ```

3.   If you want to disable call home in the future, you can do so by issuing: 

    ```
    $ tscli callhome disable
    ```


