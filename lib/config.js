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

// api configurations
config.google_key_change_lock = false;
config.google_cycled_all_keys=false;
config.google_api_key_array = ['AIzaSyB09XP1ue4GlT35jRSHH_JmrAWOK43mjc4'];
config.google_api_key = 'AIzaSyB09XP1ue4GlT35jRSHH_JmrAWOK43mjc4';
config.google_search_engine_id = '005448109129597878660:rliwwy1a1_w';
config.google_retry_limit = config.google_api_key_array.length;

config.youtube_cycled_all_keys= false;
config.youtube_key_change_lock = false;
config.youtube_api_key_array = ['AIzaSyB09XP1ue4GlT35jRSHH_JmrAWOK43mjc4'];
config.youtube_api_key = 'AIzaSyB09XP1ue4GlT35jRSHH_JmrAWOK43mjc4';
config.youtube_retry_limit = config.youtube_api_key_array.length;

// actual bing key = 0LR8Odfpjs8RuoLy7VvVD1XgxJl0wPE/ODp0MW0AeZ4=
// this require btoa()- normalized key- use either utility at location test\bing_encrypted.js
config.bing_api_key = 'IDoxemdBSnlnekN2aGRtN3IzbWpjb0owamcwMEdqZVg0UldMRUZxNURaOEZF';

config.per_user_limit_google = process.env.LIMIT_GOOGLE || 50;
config.per_user_limit_youtube = process.env.LIMIT_YOUTUBE || 50;
config.per_user_limit_bing = process.env.LIMIT_BING || 100;

config.user_search_bing_prefix = 'user_search_bing';
config.user_search_youtube_prefix = 'user_search_youtube';
config.user_search_google_prefix = 'user_search_google';

config.youtube_key_change_channel='youtube_key_change';
config.google_key_change_channel='google_key_change';

// email settings
config.smtp_host = process.env.SMTP_HOST || 'email-smtp.us-east-1.amazonaws.com';
config.smtp_port = process.env.SMTP_PORT || 465;
config.smtp_secure = process.env.SMTP_SECURE || true;
config.service_email_username = process.env.SERVICE_EMAIL || 'AKIAIIAJOPIZHRKFOQKQ';
config.service_email_password = process.env.SERVICE_PASSWORD || 'Au/f0ggCTv130nDeovuIdRU2eTO0JALNd1lM1m7n6/U6';
config.from_email_address = "LinkWok No-Reply <notification-center@linkwok.com>";
config.to_email_address = process.env.SERVICE_TO_EMAIL_ADDRESS || "admin@cybit.in";

// constants for email types
config.auth_key_change = 'KEY_CHANGE';
config.signature_failure_individual = 'SIGNATURE_FAILURE';
config.signature_failure_summary = 'SIGNATURE_FAILURE_SUMMARY';
config.user_report_summary = 'USER_REPORT_SUMMARY';
config.user_report_individual = 'USER_REPORT_INDIVIDIUAL';

// some cron expression
// '*/45 * * * * *' - once in 45 seconds - for testing only
// '0 * * * *' - start of evert hour
// '0 0 * * * *'    - daily at midnight

config.cron_expression_for_user_search_daemon = '00 59 23 * * *'

// this required !!!
module.exports = config;

