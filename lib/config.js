var config = {}

// basic configurations
config.app_name = 'search_api';
config.ip_address = '0.0.0.0';
config.port = process.env.SEARCH_API_PORT || 8081;
config.proxy_mode = '';
// this contains the list of supported domain in CSV
// for e.g. http://localhost, http://app.linkwok.com
// * for the all domains
config.cors_origins=['*']
config.supported_search_engines = ['google', 'youtube', 'bing'];
config.cpu_count = 2;

// email settings
config.smtp_host = process.env.SMTP_HOST || 'email-smtp.us-east-1.amazonaws.com';
config.smtp_port = process.env.SMTP_PORT || 465;
config.smtp_secure = process.env.SMTP_SECURE || true;
config.service_email_username = process.env.SERVICE_EMAIL || 'AKIAIIAJOPIZHRKFOQKQ';
config.service_email_password = process.env.SERVICE_PASSWORD || 'Au/f0ggCTv130nDeovuIdRU2eTO0JALNd1lM1m7n6/U6';
config.from_email_address = "LinkWok No-Reply <notification-center@linkwok.com>";
config.to_email_address = process.env.SERVICE_TO_EMAIL_ADDRESS || "admin@cybit.in";


// this required !!!
module.exports = config;

