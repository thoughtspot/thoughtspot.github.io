# unsafe mode TQL

If TQL is run using the flag `--allow_unsafe`, your statements will always execute without this warning. Note that when running TQL from a script, you will need to decide what behavior you want if the script contains changes that affect dependent objects. If you want the script to run even if objects with dependencies are afffected, run it using this flag, for example:

```
cat safest_script_ever.sql | tql --allow_unsafe
```

