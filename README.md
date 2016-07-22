# osi-7-server
A panel which monitors all the functions of the application layer. (API and Robot)

###Requires:

* node (npm)
* mongodb

### Instaling (node):

1. Download the Source Code at [node download page](https://nodejs.org/en/download/).
2. Run the commands above:
  * `./configure`
  * `make`
  * `sudo make install`
  
### Instaling (mongodb):

On Ubuntu:

1. `sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10`
2. `echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list`
3. `sudo apt-get update`
4. `sudo apt-get install mongodb-org`

On Arch:

1. `sudo pacman -S mongodb # install from pacman`
2. `systemctl start mongodb.service # init the daemon`

## Start the project:

1. Run the commands above:
  * `git clone git@github.com:bieelsoares/osi-7-server.git`
  * `cd osi-7-server`
  * `npm install`
  * `node api/server.js` e/ou `node robot/server.js`

## Base libs:
* mongoose
* body-parser
* express
* timer-jobs
* request
* underscore

