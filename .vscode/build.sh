#/bin/bash
export PATH="/usr/local/bin:$PATH"
CLI_LOCATION="$(pwd)/cli"
echo "Building plugin in $(pwd)"
printf "Please input sudo password to proceed.\n"

read -s sudopass

printf "\n"

$CLI_LOCATION/decky plugin build $(pwd)
