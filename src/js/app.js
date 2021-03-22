// CommonJS require syntax
const GOVUKFrontend = require('govuk-frontend')
const Accordion = GOVUKFrontend.Accordion
const CharacterCount = GOVUKFrontend.CharacterCount

var $accordion = document.querySelector('[data-module="govuk-accordion"]')
if ($accordion) {
  new Accordion($accordion).init()
}
var $characterCount = document.querySelector('[data-module="govuk-character-count"]')
if ($characterCount) {
  new CharacterCount($characterCount).init()
}

require('./main.js')
