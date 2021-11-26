const express = require('express')
const router = new express.Router()

// Set variables
router.get('*', function(req, res, next){
  res.locals['serviceName'] = 'GovWifi'
  res.locals['status'] = 'signed-in'
  res.locals['mainClasses'] = 'govuk-main-wrapper--s'

  next()
})





// Add your routes above the module.exports line
module.exports = router
