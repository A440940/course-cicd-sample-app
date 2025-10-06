#!/bin/bash
cd /home/ec2-user/nodeapp
node app.js > app.log 2>&1 &
