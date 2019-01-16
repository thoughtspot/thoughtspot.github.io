---
title: [Enable Active Directory based access]
tags: []
keywords: "active directory"
last_updated: tbd
summary: "ThoughtSpot supports enabling Active Directory (AD) based access individually on each node where the commands are run. "
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Enable Active Directory based access on a ThoughtSpot node

ThoughtSpot supports enabling Active Directory (AD) based access individually on
each node where the commands are run. There is no provision to enable AD access
for the whole cluster with a single command. To enable AD access on a cluster,
you need to run these commands on each individual node and on any additional
nodes added to the cluster.

The command to enable system AD user access is:

```
tscli sssd enable --user <USER> --domain <DOMAIN>
```

You will then be prompted for password credentials.

{% include note.html content="The user must have permission to join a computer or VM to the domain."%}

## Set sudoers AD Group on a local node

Just like enabling AD based access on a node, setting `sudo` AD group applies
only on the node where the command is run, and is not set for the whole cluster.

The command to allow `sudo` permissions for AD group:

```
tscli sssd set-sudo-group <ACTIVE_DIRECTORY_GROUP_NAME>
```

## Disable Active Directory based access on a local node

Currently ThoughtSpot supports disabling AD based access individually on each
node where the commands are run. There is no provision to disable AD access for
the whole cluster with a single command. To disable AD access on a cluster,  run
these commands on each individual node and any additional nodes added to the
cluster.

Command to disable system AD user access is:

```
tscli sssd disable
```

{% include note.html content="Running this command will also remove the AD group from sudoers list."%}

## Related Information

* [sssd]({{ site.baseurl }}/reference/tscli-command-ref.html#sssd) in the `tscli` command reference
