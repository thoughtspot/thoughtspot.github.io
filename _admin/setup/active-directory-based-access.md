---
title: [Enable access through Active Directory]
last_updated: 01-07-2020
summary: "You can enable Active Directory (AD) access on each ThoughtSpot node."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

## Enable user access on a ThoughtSpot node through AD

In ThoughtSpot, you must enable Active Directory (AD) access for each node where you run commands. To enable AD access on a cluster, you must run these commands on each node. You must similarly configure all new nodes that you subsequently add to the cluster.

To enable system AD user access, issue the [tscli sssd enable] ({{ site.baseurl }}/reference/tscli-command-ref.html#tscli-sssd-enable) command:

```
tscli sssd enable --user <USER> --domain <DOMAIN>
```

Here, _`USER`_ is the user account you are enabling on the domain _`DOMAIN`_.

The system prompts for password credentials before completing the step.

{% include note.html content="The user must have permission to join a computer or VM to the domain."%}

## Set sudo AD Group on a ThoughtSpot node

Just like enabling AD-based access on a node, you can enable `sudo` AD groups only on specific nodes. To set AD group `sudo` access for the entire cluster, you must run the command on each node. You must similarly configure all new nodes that you subsequently add to the cluster.

To enable `sudo` permissions for AD group, issue the [tscli sssd set-sudo-group] ({{ site.baseurl }}/reference/tscli-command-ref.html#tscli-sssd-set-sudo-group) command:

```
tscli sssd set-sudo-group <ACTIVE_DIRECTORY_GROUP_NAME>
```

## Clear `sudo` AD Group on a local node

You may clear the `sudo` AD group only on the node where you run the command, not for the entire cluster.

To clear `sudo` permissions for the AD group, issue the [tscli sssd clear-sudo-group] ({{ site.baseurl }}/reference/tscli-command-ref.html#tscli-sssd-clear-sudo-group) command:

```
tscli sssd clear-sudo-group <ACTIVE_DIRECTORY_GROUP_NAME>
```

## Disable AD based access on a local node

Currently ThoughtSpot supports disabling AD based access individually on each
node where the commands are run. There is no provision to disable AD access for
the whole cluster with a single command. To disable AD access on a cluster,  run
these commands on each individual node and any additional nodes added to the
cluster.

To disable system AD user access, issue the [tscli sssd disable] ({{ site.baseurl }}/reference/tscli-command-ref.html#tscli-sssd-disable) command:

```
tscli sssd disable
```

{% include note.html content="Running this command also removes the AD group from `sudo` list."%}

## Related Information

* The [sssd command]({{ site.baseurl }}/reference/tscli-command-ref.html#sssd) in the `tscli` command reference
