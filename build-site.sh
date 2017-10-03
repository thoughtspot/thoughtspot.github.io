# /bsh/sh

for v in 4.4 
  do
    # Checkout a versioned branch with the version name
    git checkout $v
    # Create a configuration file that sets a new baseurl based d on version
    echo "baseurl : /$v" > _config.$v.yml
    echo "exclude : " >> _config.$v.yml
    echo "  - $v"  >> _config.$v.yml
    # Build using both the basic configuration file and the version config file
    bundle exec jekyll build --config _config.yml,_config.$v.yml -d /tmp/$v/
    rm _config.$v.yml
  done

git checkout master
