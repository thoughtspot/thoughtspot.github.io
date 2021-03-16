---
title: [Home and Favorite Pinboards Tool]
last_updated: 3/16/2021
summary: "You can record a search replay to create training for your users on how to search your own data."
sidebar: mydoc_sidebar
permalink: /:collection/:path.html
---

The Home and Favorite Pinboards Tool is a Python script that allows you to use the ThoughtSpot Web APIs to do the following:

- Set a Pinboard as the Home Pinboard for all users in a user group of the ThoughtSpot Mobile App.
- Add Pinboard(s) to favorites for all users in a user group of a ThoughtSpot instance.
- Remove Pinboard(s) from favorites for all users in a user group of a

## Prerequisites

- Python 3
- Mac OS X, Linux, or Windows
- User must have **admin** privilege on the ThoughtSpot instance.

  {% include note.html content="Web APIs are not public." %}

## Installing the script

To install the script:
1. Download the source zip file and decompress it.
2. Open a terminal/cmd window, and run:

 ```py
python setup.py install
```

### Command syntax

```
configure_pinboards [-h] [--ts_url TS_URL] [--username USERNAME] [--password PASSWORD]
                       [--disable_ssl] [--action ACTION] [--category CATEGORY]
                       [--user_group USER_GROUP] [--grant_permission] [--remove_permission]
                       [--pinboards PINBOARDS]
```

#### Mandatory arguments

| Argument | Description |
| :------------- | :------------- |
| `--ts_url TS_URL` | `TS_URL` is the URL or hostname of your ThoughtSpot instance, e.g. **ht<span>tps://myserver** |
| `--username USERNAME` | `USERNAME` is the username of the user running the script. |
| `--password PASSWORD` | `PASSWORD` is the password of the user running the script. |
| `--action ACTION` | `ACTION` is the action to perform. Use **set** to set the home pinboard. Use **add** or **remove** to add or remove pinboards in user favorites. |
| `--category CATEGORY` | `CATEGORY` is the item on which to perform the action. Choose **home** to set the home pinboard for all mobile users. Choose **favourites** to add pinboards to user favorites.   {% include note.html content="When adding pinboards to user favorites, you must use the spelling **favourites**." %} |
|`--user_group USER_GROUP`  | `USER_GROUP` is the name of the user group to which to apply the specified action. |
|`--pinboards PINBOARDS`  | `PINBOARDS` is a list of comma-separated pinboard ID(s). For setting the Home Pinboard, you must specify only one pinboard ID. |

#### Optional arguments

| Argument | Description |
| :------------- | :------------- |
| `-h, --help` | Shows the help message and exit. |
| `--disable_ssl` | Ignores SSL errors. |
| `--grant_permission` | Grants permissions to users in the specified user group who do not have permissions to the specified pinboard(s). (Otherwise, skips the specified action for such user.) |
| `--remove_permission` | Removes permissions from users in the specified user group. {% include note.html content="This applies only to removing pinboards from user favorites." %} |

## Using the script

### Setting the User Home Pinboard for Mobile users

Sets a given pinboard as the Home Pinboard in the mobile app for all users of a given user group in a ThoughtSpot cluster.

#### Command syntax:

```py
python3 -m pinboard.configure_pinboards --ts_url <URL of ThoughtSpot instance> --username  <ThoughtSpot username> --password <ThoughtSpot password> --action set --category home --user_group <user group name> --grant_permission --pinboards <pinboard ID>
```
#### Example:

```py
python3 -m pinboard.configure_pinboards --ts_url http://172.18.2.39:8088 --username tsadmin --password admin --action set --category home --user_group rls-group-1 --grant_permission --pinboards 2ff57a24-cf90-485f-8b4b-45fc17474c6f
```

### Adding Pinboards to User Favorites

Adds given pinboards to User Favorites for all users of given user group in a ThoughtSpot cluster.

#### Command syntax:
```py
python3 -m pinboard.configure_pinboards --ts_url <URL of ThoughtSpot instance> --username <ThoughtSpot username> --password <ThoughtSpot password> --action add --category favourites --user_group <user group name> --grant_permission --pinboards <pinboard IDs>
```
#### Example:
```py
python3 -m pinboard.configure_pinboards --ts_url http://172.18.2.39:8088 --username tsadmin --password admin --action add --category favourites --user_group rls-group-1 --grant_permission --pinboards e0836cad-4fdf-42d4-bd97-567a6b2a6058,2ff57a24-cf90-485f-8b4b-45fc17474c6f
```

### Removing Pinboards from User Favorites

Removes given pinboards from User Favorites for all users of given user group in a ThoughtSpot cluster.

#### Command syntax:

```py
python3 -m pinboard.configure_pinboards --ts_url <URL of ThoughtSpot instance> --username <ThoughtSpot username> --password <ThoughtSpot password> --action remove --category favourites --user_group <user group name> --pinboards <pinboard IDs>
```

#### Example
```py
python3 -m pinboard.configure_pinboards --ts_url http://172.18.2.39:8088 --username tsadmin --password admin --action remove --category favourites --user_group rls-group-1 --pinboards e0836cad-4fdf-42d4-bd97-567a6b2a6058,2ff57a24-cf90-485f-8b4b-45fc17474c6f
```
