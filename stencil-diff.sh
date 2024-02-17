#!/bin/zsh

# save the stencil folder as the first argument and git folder as second argument
stencilFolder=$1
gitFolder=$2

# if [ ! -d "$stencilFolder" ] ; then
#   echo "Error: Stencil theme not found"
#   exit
# fi

# if [ ! -d "$gitFolder" ] ; then
#   echo "Error: Git repo theme not found"
#   exit
# fi

diff -qr --exclude=node_modules --exclude=dist --exclude=.DS_Store --exclude=parsed --exclude=package-lock.json --exclude=manifest.json --exclude=.git $stencilFolder $gitFolder