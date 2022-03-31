(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/js/main.js
  var require_main = __commonJS({
    "src/js/main.js"() {
      (function() {
        console.log("test");
      })();
    }
  });

  // node_modules/govuk-frontend/govuk-esm/common.mjs
  function nodeListForEach(nodes, callback) {
    if (window.NodeList.prototype.forEach) {
      return nodes.forEach(callback);
    }
    for (var i = 0; i < nodes.length; i++) {
      callback.call(window, nodes[i], i, nodes);
    }
  }

  // node_modules/govuk-frontend/govuk-esm/components/accordion/accordion.mjs
  function Accordion($module) {
    this.$module = $module;
    this.moduleId = $module.getAttribute("id");
    this.$sections = $module.querySelectorAll(".govuk-accordion__section");
    this.$showAllButton = "";
    this.browserSupportsSessionStorage = helper.checkForSessionStorage();
    this.controlsClass = "govuk-accordion__controls";
    this.showAllClass = "govuk-accordion__show-all";
    this.showAllTextClass = "govuk-accordion__show-all-text";
    this.sectionExpandedClass = "govuk-accordion__section--expanded";
    this.sectionButtonClass = "govuk-accordion__section-button";
    this.sectionHeaderClass = "govuk-accordion__section-header";
    this.sectionHeadingClass = "govuk-accordion__section-heading";
    this.sectionHeadingTextClass = "govuk-accordion__section-heading-text";
    this.sectionHeadingTextFocusClass = "govuk-accordion__section-heading-text-focus";
    this.sectionShowHideToggleClass = "govuk-accordion__section-toggle";
    this.sectionShowHideToggleFocusClass = "govuk-accordion__section-toggle-focus";
    this.sectionShowHideTextClass = "govuk-accordion__section-toggle-text";
    this.upChevronIconClass = "govuk-accordion-nav__chevron";
    this.downChevronIconClass = "govuk-accordion-nav__chevron--down";
    this.sectionSummaryClass = "govuk-accordion__section-summary";
    this.sectionSummaryFocusClass = "govuk-accordion__section-summary-focus";
  }
  Accordion.prototype.init = function() {
    if (!this.$module) {
      return;
    }
    this.initControls();
    this.initSectionHeaders();
    var areAllSectionsOpen = this.checkIfAllSectionsOpen();
    this.updateShowAllButton(areAllSectionsOpen);
  };
  Accordion.prototype.initControls = function() {
    this.$showAllButton = document.createElement("button");
    this.$showAllButton.setAttribute("type", "button");
    this.$showAllButton.setAttribute("class", this.showAllClass);
    this.$showAllButton.setAttribute("aria-expanded", "false");
    var $icon = document.createElement("span");
    $icon.classList.add(this.upChevronIconClass);
    this.$showAllButton.appendChild($icon);
    var $accordionControls = document.createElement("div");
    $accordionControls.setAttribute("class", this.controlsClass);
    $accordionControls.appendChild(this.$showAllButton);
    this.$module.insertBefore($accordionControls, this.$module.firstChild);
    var $wrappershowAllText = document.createElement("span");
    $wrappershowAllText.classList.add(this.showAllTextClass);
    this.$showAllButton.appendChild($wrappershowAllText);
    this.$showAllButton.addEventListener("click", this.onShowOrHideAllToggle.bind(this));
  };
  Accordion.prototype.initSectionHeaders = function() {
    nodeListForEach(this.$sections, function($section, i) {
      var $header = $section.querySelector("." + this.sectionHeaderClass);
      this.constructHeaderMarkup($header, i);
      this.setExpanded(this.isExpanded($section), $section);
      $header.addEventListener("click", this.onSectionToggle.bind(this, $section));
      this.setInitialState($section);
    }.bind(this));
  };
  Accordion.prototype.constructHeaderMarkup = function($headerWrapper, index) {
    var $span = $headerWrapper.querySelector("." + this.sectionButtonClass);
    var $heading = $headerWrapper.querySelector("." + this.sectionHeadingClass);
    var $summary = $headerWrapper.querySelector("." + this.sectionSummaryClass);
    var $button = document.createElement("button");
    $button.setAttribute("type", "button");
    $button.setAttribute("aria-controls", this.moduleId + "-content-" + (index + 1));
    for (var i = 0; i < $span.attributes.length; i++) {
      var attr = $span.attributes.item(i);
      if (attr.nodeName !== "id") {
        $button.setAttribute(attr.nodeName, attr.nodeValue);
      }
    }
    var $headingText = document.createElement("span");
    $headingText.classList.add(this.sectionHeadingTextClass);
    $headingText.id = $span.id;
    var $headingTextFocus = document.createElement("span");
    $headingTextFocus.classList.add(this.sectionHeadingTextFocusClass);
    $headingText.appendChild($headingTextFocus);
    $headingTextFocus.innerHTML = $span.innerHTML;
    var $showToggle = document.createElement("span");
    $showToggle.classList.add(this.sectionShowHideToggleClass);
    $showToggle.setAttribute("data-nosnippet", "");
    var $showToggleFocus = document.createElement("span");
    $showToggleFocus.classList.add(this.sectionShowHideToggleFocusClass);
    $showToggle.appendChild($showToggleFocus);
    var $showToggleText = document.createElement("span");
    var $icon = document.createElement("span");
    $icon.classList.add(this.upChevronIconClass);
    $showToggleFocus.appendChild($icon);
    $showToggleText.classList.add(this.sectionShowHideTextClass);
    $showToggleFocus.appendChild($showToggleText);
    $button.appendChild($headingText);
    $button.appendChild(this.getButtonPunctuationEl());
    if (typeof $summary !== "undefined" && $summary !== null) {
      var $summarySpan = document.createElement("span");
      var $summarySpanFocus = document.createElement("span");
      $summarySpanFocus.classList.add(this.sectionSummaryFocusClass);
      $summarySpan.appendChild($summarySpanFocus);
      for (var j = 0, l = $summary.attributes.length; j < l; ++j) {
        var nodeName = $summary.attributes.item(j).nodeName;
        var nodeValue = $summary.attributes.item(j).nodeValue;
        $summarySpan.setAttribute(nodeName, nodeValue);
      }
      $summarySpanFocus.innerHTML = $summary.innerHTML;
      $summary.parentNode.replaceChild($summarySpan, $summary);
      $button.appendChild($summarySpan);
      $button.appendChild(this.getButtonPunctuationEl());
    }
    $button.appendChild($showToggle);
    $heading.removeChild($span);
    $heading.appendChild($button);
  };
  Accordion.prototype.onSectionToggle = function($section) {
    var expanded = this.isExpanded($section);
    this.setExpanded(!expanded, $section);
    this.storeState($section);
  };
  Accordion.prototype.onShowOrHideAllToggle = function() {
    var $module = this;
    var $sections = this.$sections;
    var nowExpanded = !this.checkIfAllSectionsOpen();
    nodeListForEach($sections, function($section) {
      $module.setExpanded(nowExpanded, $section);
      $module.storeState($section);
    });
    $module.updateShowAllButton(nowExpanded);
  };
  Accordion.prototype.setExpanded = function(expanded, $section) {
    var $icon = $section.querySelector("." + this.upChevronIconClass);
    var $showHideText = $section.querySelector("." + this.sectionShowHideTextClass);
    var $button = $section.querySelector("." + this.sectionButtonClass);
    var $newButtonText = expanded ? "Hide" : "Show";
    var $visuallyHiddenText = document.createElement("span");
    $visuallyHiddenText.classList.add("govuk-visually-hidden");
    $visuallyHiddenText.innerHTML = " this section";
    $showHideText.innerHTML = $newButtonText;
    $showHideText.appendChild($visuallyHiddenText);
    $button.setAttribute("aria-expanded", expanded);
    if (expanded) {
      $section.classList.add(this.sectionExpandedClass);
      $icon.classList.remove(this.downChevronIconClass);
    } else {
      $section.classList.remove(this.sectionExpandedClass);
      $icon.classList.add(this.downChevronIconClass);
    }
    var areAllSectionsOpen = this.checkIfAllSectionsOpen();
    this.updateShowAllButton(areAllSectionsOpen);
  };
  Accordion.prototype.isExpanded = function($section) {
    return $section.classList.contains(this.sectionExpandedClass);
  };
  Accordion.prototype.checkIfAllSectionsOpen = function() {
    var sectionsCount = this.$sections.length;
    var expandedSectionCount = this.$module.querySelectorAll("." + this.sectionExpandedClass).length;
    var areAllSectionsOpen = sectionsCount === expandedSectionCount;
    return areAllSectionsOpen;
  };
  Accordion.prototype.updateShowAllButton = function(expanded) {
    var $showAllIcon = this.$showAllButton.querySelector("." + this.upChevronIconClass);
    var $showAllText = this.$showAllButton.querySelector("." + this.showAllTextClass);
    var newButtonText = expanded ? "Hide all sections" : "Show all sections";
    this.$showAllButton.setAttribute("aria-expanded", expanded);
    $showAllText.innerHTML = newButtonText;
    if (expanded) {
      $showAllIcon.classList.remove(this.downChevronIconClass);
    } else {
      $showAllIcon.classList.add(this.downChevronIconClass);
    }
  };
  var helper = {
    checkForSessionStorage: function() {
      var testString = "this is the test string";
      var result;
      try {
        window.sessionStorage.setItem(testString, testString);
        result = window.sessionStorage.getItem(testString) === testString.toString();
        window.sessionStorage.removeItem(testString);
        return result;
      } catch (exception) {
        if (typeof console === "undefined" || typeof console.log === "undefined") {
          console.log("Notice: sessionStorage not available.");
        }
      }
    }
  };
  Accordion.prototype.storeState = function($section) {
    if (this.browserSupportsSessionStorage) {
      var $button = $section.querySelector("." + this.sectionButtonClass);
      if ($button) {
        var contentId = $button.getAttribute("aria-controls");
        var contentState = $button.getAttribute("aria-expanded");
        if (typeof contentId === "undefined" && (typeof console === "undefined" || typeof console.log === "undefined")) {
          console.error(new Error("No aria controls present in accordion section heading."));
        }
        if (typeof contentState === "undefined" && (typeof console === "undefined" || typeof console.log === "undefined")) {
          console.error(new Error("No aria expanded present in accordion section heading."));
        }
        if (contentId && contentState) {
          window.sessionStorage.setItem(contentId, contentState);
        }
      }
    }
  };
  Accordion.prototype.setInitialState = function($section) {
    if (this.browserSupportsSessionStorage) {
      var $button = $section.querySelector("." + this.sectionButtonClass);
      if ($button) {
        var contentId = $button.getAttribute("aria-controls");
        var contentState = contentId ? window.sessionStorage.getItem(contentId) : null;
        if (contentState !== null) {
          this.setExpanded(contentState === "true", $section);
        }
      }
    }
  };
  Accordion.prototype.getButtonPunctuationEl = function() {
    var $punctuationEl = document.createElement("span");
    $punctuationEl.classList.add("govuk-visually-hidden", "govuk-accordion__section-heading-divider");
    $punctuationEl.innerHTML = ", ";
    return $punctuationEl;
  };
  var accordion_default = Accordion;

  // node_modules/govuk-frontend/govuk-esm/components/character-count/character-count.mjs
  function CharacterCount($module) {
    this.$module = $module;
    this.$textarea = $module.querySelector(".govuk-js-character-count");
    if (this.$textarea) {
      this.$countMessage = document.getElementById(this.$textarea.id + "-info");
    }
  }
  CharacterCount.prototype.defaults = {
    characterCountAttribute: "data-maxlength",
    wordCountAttribute: "data-maxwords"
  };
  CharacterCount.prototype.init = function() {
    var $module = this.$module;
    var $textarea = this.$textarea;
    var $countMessage = this.$countMessage;
    if (!$textarea || !$countMessage) {
      return;
    }
    $textarea.insertAdjacentElement("afterend", $countMessage);
    this.options = this.getDataset($module);
    var countAttribute = this.defaults.characterCountAttribute;
    if (this.options.maxwords) {
      countAttribute = this.defaults.wordCountAttribute;
    }
    this.maxLength = $module.getAttribute(countAttribute);
    if (!this.maxLength) {
      return;
    }
    $module.removeAttribute("maxlength");
    if ("onpageshow" in window) {
      window.addEventListener("pageshow", this.sync.bind(this));
    } else {
      window.addEventListener("DOMContentLoaded", this.sync.bind(this));
    }
    this.sync();
  };
  CharacterCount.prototype.sync = function() {
    this.bindChangeEvents();
    this.updateCountMessage();
  };
  CharacterCount.prototype.getDataset = function(element) {
    var dataset = {};
    var attributes = element.attributes;
    if (attributes) {
      for (var i = 0; i < attributes.length; i++) {
        var attribute = attributes[i];
        var match = attribute.name.match(/^data-(.+)/);
        if (match) {
          dataset[match[1]] = attribute.value;
        }
      }
    }
    return dataset;
  };
  CharacterCount.prototype.count = function(text) {
    var length;
    if (this.options.maxwords) {
      var tokens = text.match(/\S+/g) || [];
      length = tokens.length;
    } else {
      length = text.length;
    }
    return length;
  };
  CharacterCount.prototype.bindChangeEvents = function() {
    var $textarea = this.$textarea;
    $textarea.addEventListener("keyup", this.checkIfValueChanged.bind(this));
    $textarea.addEventListener("focus", this.handleFocus.bind(this));
    $textarea.addEventListener("blur", this.handleBlur.bind(this));
  };
  CharacterCount.prototype.checkIfValueChanged = function() {
    if (!this.$textarea.oldValue)
      this.$textarea.oldValue = "";
    if (this.$textarea.value !== this.$textarea.oldValue) {
      this.$textarea.oldValue = this.$textarea.value;
      this.updateCountMessage();
    }
  };
  CharacterCount.prototype.updateCountMessage = function() {
    var countElement = this.$textarea;
    var options = this.options;
    var countMessage = this.$countMessage;
    var currentLength = this.count(countElement.value);
    var maxLength = this.maxLength;
    var remainingNumber = maxLength - currentLength;
    var thresholdPercent = options.threshold ? options.threshold : 0;
    var thresholdValue = maxLength * thresholdPercent / 100;
    if (thresholdValue > currentLength) {
      countMessage.classList.add("govuk-character-count__message--disabled");
      countMessage.setAttribute("aria-hidden", true);
    } else {
      countMessage.classList.remove("govuk-character-count__message--disabled");
      countMessage.removeAttribute("aria-hidden");
    }
    if (remainingNumber < 0) {
      countElement.classList.add("govuk-textarea--error");
      countMessage.classList.remove("govuk-hint");
      countMessage.classList.add("govuk-error-message");
    } else {
      countElement.classList.remove("govuk-textarea--error");
      countMessage.classList.remove("govuk-error-message");
      countMessage.classList.add("govuk-hint");
    }
    var charVerb = "remaining";
    var charNoun = "character";
    var displayNumber = remainingNumber;
    if (options.maxwords) {
      charNoun = "word";
    }
    charNoun = charNoun + (remainingNumber === -1 || remainingNumber === 1 ? "" : "s");
    charVerb = remainingNumber < 0 ? "too many" : "remaining";
    displayNumber = Math.abs(remainingNumber);
    countMessage.innerHTML = "You have " + displayNumber + " " + charNoun + " " + charVerb;
  };
  CharacterCount.prototype.handleFocus = function() {
    this.valueChecker = setInterval(this.checkIfValueChanged.bind(this), 1e3);
  };
  CharacterCount.prototype.handleBlur = function() {
    clearInterval(this.valueChecker);
  };
  var character_count_default = CharacterCount;

  // src/js/app.js
  var $accordion = document.querySelector('[data-module="govuk-accordion"]');
  if ($accordion) {
    new accordion_default($accordion).init();
  }
  var $characterCount = document.querySelector('[data-module="govuk-character-count"]');
  if ($characterCount) {
    new character_count_default($characterCount).init();
  }
  require_main();
})();
