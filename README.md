Linkwok Static site
=========

Install the following tools to improve the productivity

  - [Apache](https://help.ubuntu.com/10.04/serverguide/httpd.html)
  - [Ruby](http://rvm.io/rvm/install) (rbenv or rvm- optional)
  - [Compass](http://compass-style.org/)
  - [Guard](https://github.com/guard/guard-livereload)
  - [Livereload chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)
  
##Installation
###Apache
```sh
sudo apt-get install apache2
service restart apache2
```
###Ruby using rvm(recommended)

```sh
\curl -sSL https://get.rvm.io | bash -s stable --ruby
```
###Ruby from ubuntu repository 

```sh
sudo apt-get install ruby
```
###Check ruby version

```sh
ruby -v
```
###Install compass
```sh
gem update --system
gem install bundler
gem install compass
gem install guard-livereload
```
## Starting the project
```sh
cd ~/var/www/html
#clone the repo
git clone git@github.com:scorpwarp23/app_front.git

#change permission
sudo chmod -R 777 app_front
cd app_front
git checkout raj

#run bundle command to install the gems from Gemfile
bundle

#start guard liverealod for the project
bundle exec guard

# start compass to  watch sass files and complile it to css
cd ..
compass watch app_front
```


###In browser
Go to
[http://localhost/app_front/index.html](http://localhost/app_front/index.html)
and click live-reload extension to connect with guard

###On production
```sh
#with compass default options
compass compile -e production --force

# to override default
compass compile --output-style compressed --force
```

####Note: 
Check Guardfile, Gemfile and config.rb for more options.


