#! /bin/bash

npm run build

echo " "
echo "--------- DEPLOYING TO REMOTE SERVER ---------"

scp deploy.zip root@107.191.55.153:/root

ssh root@107.191.55.153 'cd /root && sh deploy-remote.sh && exit'

echo " "
echo "---------------- DEPLOY SUCCESS ---------------"
echo "|                                             |"
echo "| Deployed to remote server @ 107.191.55.153  |"
echo "|                                             |"
echo "| Check logs to confirm that the deploy       |"
echo "| was successfull.                            |"
echo "|                                             |"
echo "-----------------------------------------------"