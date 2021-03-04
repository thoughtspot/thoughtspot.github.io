<<<<<<< HEAD
#! /bin/sh

helpmsg () {
  printf "\\nSYNTAX: \\n"
  printf "   bash-build.sh BRANCH_NAME VERSION_VALUE [-r]\\n"
  printf "\\nBRANCH_NAME   Branch that contains your source files, may be a name such as x.y.z"
  printf "\\nVERSION_VALUE Product version to build, should be a major version such as x.y"
  printf "\\n -r           Optionally replace the index.html and search.html files. Use for updating an existing or to a new version.\\n"

}

if [ $# -lt 2 ]
  then
    printf "Error. Not enough argments.\\n" >&2
    helpmsg >&2
    exit 1
  elif [ $# -gt 3 ]
   then
    printf "Error. Too many argments.\\n" >&2
    helpmsg >&2
    exit 1
fi


case $1 in
  [0-9].[0-9])
  ;;
  [0-9].[0-9].[0-9])
  ;;
  [0-9].[0-9].[0-9].[0-9])
  ;;
  *)
    printf "Error. BRANCH_NAME format is not. w.x.y.z is the largest number supported\\n" >&2
    helpmsg >&2
    exit 1
  esac

  case $2 in
    [0-9].[0-9])
    ;;
    *)
      printf "Error. VERSION_VALUE format is not supported. Must be a major version number such as: w.x\\n" >&2
      helpmsg >&2
      exit 1
  esac




  if [ "$3" ]; then
    if [ "$3" != "-r" ]; then
      #statements
      printf "Error. The $3 flag is not supported. Must be -r \\n" >&2
      helpmsg >&2                  s
      exit 1
    fi
  fi


# Checkout a versioned branch with the version name
if git checkout $1; then
  echo "SUCCESS: checked out $1";
else
  exit 1
fi

# Create a configuration file that sets a new baseurl based d on version
echo "baseurl : /$2" > _config.$2.yml
echo "exclude : " >> _config.$2.yml
echo "  - $2"  >> _config.$2.yml
echo "branch_url : /$1" >> _config.$2.yml

# Build using both the basic configuration file and the version config file
JEKYLL_ENV=production bundle exec jekyll build --config _config.yml,_config.$2.yml -d /tmp/$2/
rm _config.$2.yml

if git checkout master; then
  echo "SUCCESS: checked out master";
else
  exit 1
fi

rm -rf $2
mv /tmp/$2 $2

# This replaces the root files with the latest version.  index.html redirects to the latest version x.x/index.html.
if [[ $3 == "-r" ]]; then
  cp $2/index.html .
  cp $2/search.html .
fi

exit 0
=======
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
>>>>>>> 72cf400a2f... Updating master
