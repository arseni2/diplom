module.exports = {
  apps: [{
    name: 'client',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/crm/diplom/client',
    instances: 1,
    autorestart: true,
    watch: false,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    env: {
      NEXT_PUBLIC_API_URL: "http://93.183.83.57:10000"
    }
  }]
};
