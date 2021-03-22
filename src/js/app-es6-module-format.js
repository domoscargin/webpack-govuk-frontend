// ES Modules format
import Accordion from 'govuk-frontend/govuk/components/accordion/accordion';
var $accordion = document.querySelector('[data-module="govuk-accordion"]')
if ($accordion) {
  new Accordion($accordion).init()
}

import CharacterCount from 'govuk-frontend/govuk/components/character-count/character-count';
var $characterCount = document.querySelector('[data-module="govuk-character-count"]')
if ($characterCount) {
  new CharacterCount($characterCount).init()
}

require('./main.js')
