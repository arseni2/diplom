module.exports = {
  apps: [{
    name: 'server',
    script: 'npm',
    args: 'run start:prod',
    cwd: '/var/www/crm/diplom/server',
    instances: 1,
    autorestart: true,
    watch: false,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true
  }]
};
