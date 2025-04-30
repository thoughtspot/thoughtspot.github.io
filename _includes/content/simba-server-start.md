Before you begin, you need to know the IP address or DNS name of the server you
intend to connect your server to.

1. SSH as `admin` or the `thoughtspot` user to your ThoughtSpot node.
2. Verify the node IP(s).

   ```bash
   $ tscli node ls
   172.18.231.17
   ```

3. Make a note of each IP; there may be more than one.
4. Verify that the `simba_server` is running, if it isn't, work with ThoughtSpot Support to start it.
5. Exit or close the shell.
