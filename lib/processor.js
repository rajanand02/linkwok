var nodemailer = require('nodemailer') ;
var config = require('./config');
var smtpTransport = nodemailer.createTransport("SMTP", {
  host: config.smtp_host, // hostname
  secureConnection: config.smtp_secure, // use SSL
  port: config.smtp_port, // port for secure SMTP
  auth: {
    user: config.service_email_username,
    pass: config.service_email_password
  }
});

exports.send_email = function(req, res ){

  smtpTransport.sendMail({
    from: config.from_email_address,
    to: req.query.email,
    subject: 'Welcome to Linkwok',
    html: 'Welcome to <b>LinkWok</b>,<br>You have enrolled yourself in a whole new world of possibilities.<br>At LinkWok, we saw a fundamental issue in the way users consumed information.There\'s a fundamental gap between finding cool stuff on the web and doing something with what you find.<br>We\'re here to bridge that gap. Use search engines that you\'re comfortable with. Drag what\'s relevant.Drop it onto a canvas. Use webpages, images, videos, files - just about anything.Connect, annotate, share and collaborate. Create search-maps. Search for public maps.<br>If you find a relevant map to what you\'re searching for, you can clone it and start where others left off.All that\'s left is for you to activate your account.<br>Get started here: <a href="http://www.linkwok.com" target="_blank">Linkwok.com</a><br>'
  }, function (err, responseStatus) {
    if (err) {
      console.log('Error while sending the email message : ' +err);
    } else {
//            log.info('mail sent status : ' + responseStatus.message);
    }
  });
  res.send();
  }
