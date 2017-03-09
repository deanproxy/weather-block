# How it looks...
![Weather Block](http://i.imgur.com/Og4Ene8.png)

# Requirements
1. Node and NPM
2. Latest FontAwesome installed.

# Installation
1. Clone the repo
2. Edit weather.js and add your API key and Zipcode to the specified variables.
3. Run `npm install`
4. Reference the shell script `weather` in your i3blocks.conf file.
5. Restart i3blocks. Should be all set!

# Example section in i3blocks.conf
    [weather]
    command=~/scripts/weather
    interval=1800
