# Set the relay host for SMTP \(email\)

To enable alert emails, you'll need to set up a relay host for SMTP traffic from ThoughtSpot. This routes the alert and notification emails coming from ThoughtSpot through an SMTP email server.

To set up a relay host:

1.   [Log in to the Linux shell using SSH](login_console.html#). 
2.   Issue the setup command, providing the IP address of the relay host: 

    ```
    $ tscli smtp set-relayhost <IP\_address>
    ```

3.   Verify your settings: 

    ```
    $ tscli smtp show-relayhost
    ```

4.   [Verify that email is working](setup_email.html#). 

