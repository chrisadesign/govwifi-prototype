// Use this file to change prototype configuration.

// Note: prototype config can be overridden using environment variables (eg on heroku)

module.exports = {
  // Service name used in header. Eg: 'Renew your passport'
  serviceName: '',

  // URL for heroku app (used in footer when running locally, don't include trailing slash)
  herokuURL: 'https://govwifi-prototype.herokuapp.com',

  // URL for the repo (used in footer)
  repoURL: 'https://github.com/chrisadesign/govwifi-prototype',

  // Enable internal class on html element and the styles associated to it
  internal: false,

  // Default port that prototype runs on
  port: '3000',

  // Enable or disable password protection on production
  useAuth: 'true',

  // Automatically stores form data, and send to all views
  useAutoStoreData: 'true',

  // Enable cookie-based session store (persists on restart)
  // Please note 4KB cookie limit per domain, cookies too large will silently be ignored
  useCookieSessionStore: 'false',

  // Enable or disable built-in docs and examples.
  useDocumentation: 'true',

  // Force HTTP to redirect to HTTPS on production
  useHttps: 'true',

  // Enable or disable Browser Sync
  useBrowserSync: 'true'

}
