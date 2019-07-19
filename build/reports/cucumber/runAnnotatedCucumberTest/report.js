$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdBlockBlacklist.feature");
formatter.feature({
  "line": 2,
  "name": "Test blacklist functionality by CSS, show ads everywhere except and block an ad by its URL",
  "description": "",
  "id": "test-blacklist-functionality-by-css,-show-ads-everywhere-except-and-block-an-ad-by-its-url",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    }
  ]
});
formatter.before({
  "duration": 14860041200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Scenario-1 User blacklist a given ad by its CSS",
  "description": "",
  "id": "test-blacklist-functionality-by-css,-show-ads-everywhere-except-and-block-an-ad-by-its-url;scenario-1-user-blacklist-a-given-ad-by-its-css",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user blacklist an ad by its CSS",
  "rows": [
    {
      "cells": [
        "URL",
        "",
        "CSS"
      ],
      "line": 7
    },
    {
      "cells": [
        "stackoverflow.com",
        "",
        "HEADER[class\u003d\"top-bar js-top-bar top-bar__network _fixed\"]"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "ad is not displayed",
  "rows": [
    {
      "cells": [
        "URL",
        "",
        "xpath"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://stackoverflow.com",
        "",
        "/html/body/header"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user refersh the page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "ad is not displayed",
  "rows": [
    {
      "cells": [
        "URL",
        "",
        "xpath"
      ],
      "line": 14
    },
    {
      "cells": [
        "https://stackoverflow.com",
        "",
        "/html/body/header"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user whitelist adblock on website from popup",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 17
    },
    {
      "cells": [
        "https://stackoverflow.com"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "ad is displayed",
  "rows": [
    {
      "cells": [
        "URL",
        "",
        "xpath"
      ],
      "line": 20
    },
    {
      "cells": [
        "https://stackoverflow.com",
        "",
        "/html/body/header"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user enable Adblocking from pop-up",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "ad is not displayed",
  "rows": [
    {
      "cells": [
        "URL",
        "",
        "xpath"
      ],
      "line": 24
    },
    {
      "cells": [
        "https://stackoverflow.com",
        "",
        "/html/body/header"
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4892237700,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlaclistByCSS(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2840662200,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2237196500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 525541900,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 571489900,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4313822300,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adisDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 568141000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 2127612600,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1405244100,
  "status": "passed"
});
formatter.after({
  "duration": 621531800,
  "status": "passed"
});
formatter.before({
  "duration": 12195905300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Scenario-2 User blacklist by show ads everywhere except",
  "description": "",
  "id": "test-blacklist-functionality-by-css,-show-ads-everywhere-except-and-block-an-ad-by-its-url;scenario-2-user-blacklist-by-show-ads-everywhere-except",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user blacklist all websites except one from show ads everywhere except for these domains",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 30
    },
    {
      "cells": [
        "https://www.theguardian.com"
      ],
      "line": 31
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "adblock is not disabled and filter is added  manually to edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 33
    },
    {
      "cells": [
        "@@*$document,domain\u003d~www.theguardian.com"
      ],
      "line": 34
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "adblock is disabled on all websites",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 36
    },
    {
      "cells": [
        "https://www.digitalspy.com/tv/"
      ],
      "line": 37
    },
    {
      "cells": [
        "https://stackoverflow.com/"
      ],
      "line": 38
    },
    {
      "cells": [
        "https://www.kbb.com/"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user enable Adblocking from pop-up",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "adblock is not disabled and filter is added  manually to edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 42
    },
    {
      "cells": [
        "@@*$document,domain\u003d~www.theguardian.com|~kbb.com"
      ],
      "line": 43
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4509702500,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlaclistByDomain(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 7401477400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFiltersAdded(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10852189400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 61902746100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 2088138000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFiltersAdded(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10946324200,
  "status": "passed"
});
formatter.after({
  "duration": 689084200,
  "status": "passed"
});
formatter.uri("AdBlockManuallyEdit.feature");
formatter.feature({
  "line": 2,
  "name": "Test Error Handling of manually editing filters",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    }
  ]
});
formatter.before({
  "duration": 12178781800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Scenario-1 User gets an error when trying to use rewrite filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-1-user-gets-an-error-when-trying-to-use-rewrite-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 7
    },
    {
      "cells": [
        "/(testpages\\.adblockplus\\.org\\/css\\/testpages\\.css)\\?14$/$rewrite\u003d$1?42"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 10
    },
    {
      "cells": [
        "filter_invalid_rewrite"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4306146400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4809595300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 36709500,
  "status": "passed"
});
formatter.after({
  "duration": 606515200,
  "status": "passed"
});
formatter.before({
  "duration": 12188871300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Scenario-2 User gets an error when adding incorrect filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-2-user-gets-an-error-when-adding-incorrect-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 16
    },
    {
      "cells": [
        "^^SDKLS###!!!!!!! (\u0026^()%^^$%$jhdrfs"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 20
    },
    {
      "cells": [
        "is not a valid CSS selector"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4441589200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4808514300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 35627900,
  "status": "passed"
});
formatter.after({
  "duration": 612593900,
  "status": "passed"
});
formatter.before({
  "duration": 12121530100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Scenario-3 User gets an error when adding filter list header",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-3-user-gets-an-error-when-adding-filter-list-header",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 26
    },
    {
      "cells": [
        "[Adblock Plus 2.0]"
      ],
      "line": 27
    },
    {
      "cells": [
        "! Checksum: wyraDqYy0lxSoLZ4BQs5bw"
      ],
      "line": 28
    },
    {
      "cells": [
        "! Version: 201907171530"
      ],
      "line": 29
    },
    {
      "cells": [
        "! Title: EasyList"
      ],
      "line": 30
    },
    {
      "cells": [
        "! Last modified: 17 Jul 2019 15:30 UTC"
      ],
      "line": 31
    },
    {
      "cells": [
        "! Expires: 1 days (update frequency)"
      ],
      "line": 32
    },
    {
      "cells": [
        "! Homepage: https://easylist.to/"
      ],
      "line": 33
    },
    {
      "cells": [
        "! Licence: https://easylist.to/pages/licence.html"
      ],
      "line": 34
    },
    {
      "cells": [
        "!"
      ],
      "line": 35
    },
    {
      "cells": [
        "! Please report any unblocked adverts or problems"
      ],
      "line": 36
    },
    {
      "cells": [
        "! in the forums (https://forums.lanik.us/)"
      ],
      "line": 37
    },
    {
      "cells": [
        "! or via e-mail (easylist.subscription@gmail.com)."
      ],
      "line": 38
    },
    {
      "cells": [
        "!"
      ],
      "line": 39
    },
    {
      "cells": [
        "!-----------------------General advert blocking filters-----------------------!"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 42
    },
    {
      "cells": [
        "Filter list headers aren\u0027t allowed here"
      ],
      "line": 44
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4468953000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4824371600,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 57827800,
  "status": "passed"
});
formatter.after({
  "duration": 614611400,
  "status": "passed"
});
formatter.uri("AdBlockPause.feature");
formatter.feature({
  "line": 2,
  "name": "Test Pausing AdBlock on a particular website and all websites",
  "description": "",
  "id": "test-pausing-adblock-on-a-particular-website-and-all-websites",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    }
  ]
});
formatter.before({
  "duration": 12117888500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Scenario-1 User pause AdBlock on a particular website from pop-up",
  "description": "",
  "id": "test-pausing-adblock-on-a-particular-website-and-all-websites;scenario-1-user-pause-adblock-on-a-particular-website-from-pop-up",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user pause adblock on website from popup",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 7
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user refersh the page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user navigates away from website and back",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 13
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "adblock is not paused",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4488049300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 7922242800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 22249035900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 31442700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 22208582800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10409854500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 11625044800,
  "status": "passed"
});
formatter.after({
  "duration": 659293100,
  "status": "passed"
});
formatter.before({
  "duration": 12136211300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Scenario-2 User pause AdBlock on a particular website from context menu",
  "description": "",
  "id": "test-pausing-adblock-on-a-particular-website-and-all-websites;scenario-2-user-pause-adblock-on-a-particular-website-from-context-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user pause adblock on website from context menu",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 20
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user refersh the page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user navigates away from website and back",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 26
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 27
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "adblock is not paused",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4468122900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromContext(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10378400800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 22645958300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 38211400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 22121693000,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9176082100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 11648906000,
  "status": "passed"
});
formatter.after({
  "duration": 671882700,
  "status": "passed"
});
formatter.before({
  "duration": 12117410900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Scenario-3 User pause AdBlock on a all sites from pop-up",
  "description": "",
  "id": "test-pausing-adblock-on-a-particular-website-and-all-websites;scenario-3-user-pause-adblock-on-a-all-sites-from-pop-up",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "user pause adblock on all sites from pop-up",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 34
    },
    {
      "cells": [
        "https://www.tutorialspoint.com/How-to-convert-Image-to-Byte-Array-in-java"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "user refersh the page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "AdBlock is paused when navigating to different websites",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 40
    },
    {
      "cells": [
        "https://www.businessinsider.com/"
      ],
      "line": 41
    },
    {
      "cells": [
        "https://www.reddit.com"
      ],
      "line": 42
    },
    {
      "cells": [
        "https://stackoverflow.com/"
      ],
      "line": 43
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4470339700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4931292400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 22794726200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 2604722800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 22009909200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.AdBlockPausedOnAll(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 82239470200,
  "status": "passed"
});
formatter.after({
  "duration": 699038100,
  "status": "passed"
});
formatter.before({
  "duration": 12125286100,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Scenario-4 User pause AdBlock on a all sites from context menu",
  "description": "",
  "id": "test-pausing-adblock-on-a-particular-website-and-all-websites;scenario-4-user-pause-adblock-on-a-all-sites-from-context-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "user pause adblock on all sites from context menu",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 48
    },
    {
      "cells": [
        "https://www.tutorialspoint.com/How-to-convert-Image-to-Byte-Array-in-java"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "user refersh the page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "AdBlock is paused when navigating to different websites",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 54
    },
    {
      "cells": [
        "https://www.businessinsider.com/"
      ],
      "line": 55
    },
    {
      "cells": [
        "https://www.reddit.com"
      ],
      "line": 56
    },
    {
      "cells": [
        "https://stackoverflow.com/"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4481657600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromContextMenu(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6063649200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 21994675800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 1846861800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 21972858200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.AdBlockPausedOnAll(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 82737250200,
  "status": "passed"
});
formatter.after({
  "duration": 713888600,
  "status": "passed"
});
formatter.before({
  "duration": 12124026200,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Scenario-5 User resume Adblock from pop-up menu",
  "description": "",
  "id": "test-pausing-adblock-on-a-particular-website-and-all-websites;scenario-5-user-resume-adblock-from-pop-up-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "user pause adblock on all sites from context menu",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 62
    },
    {
      "cells": [
        "https://www.tutorialspoint.com/How-to-convert-Image-to-Byte-Array-in-java"
      ],
      "line": 63
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user resume Adblock from pop-up",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "adblock is not paused",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4517156600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromContextMenu(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4659978400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.resumePopup()"
});
formatter.result({
  "duration": 3263492500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 11679374100,
  "status": "passed"
});
formatter.after({
  "duration": 641093100,
  "status": "passed"
});
formatter.before({
  "duration": 12198570200,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Scenario-6 User resume Adblock from context menu",
  "description": "",
  "id": "test-pausing-adblock-on-a-particular-website-and-all-websites;scenario-6-user-resume-adblock-from-context-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 68,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "user pause adblock on website from popup",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 70
    },
    {
      "cells": [
        "https://www.twitch.tv/"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "user resume Adblock from context menu",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "adblock is not paused",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4353125100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10452121200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.resumeContext()"
});
formatter.result({
  "duration": 781294200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 2250187800,
  "error_message": "java.lang.AssertionError: AdBlock is  paused\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.PauseStepDefn.isNotAdBlockPaused(PauseStepDefn.java:85)\r\n\tat ✽.Then adblock is not paused(AdBlockPause.feature:73)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2137235100,
  "status": "passed"
});
formatter.uri("AdBlockWhitelist.feature");
formatter.feature({
  "line": 2,
  "name": "Test whitelisting functionality which includes don\u0027t run on this page, Don\u0027t run on pages on this site, Show ads on a webpage or a domain, manually edit your filters",
  "description": "",
  "id": "test-whitelisting-functionality-which-includes-don\u0027t-run-on-this-page,-don\u0027t-run-on-pages-on-this-site,-show-ads-on-a-webpage-or-a-domain,-manually-edit-your-filters",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    }
  ]
});
formatter.before({
  "duration": 12129087100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Scenario-1 User whitelist a given site from pop-up and then remove it",
  "description": "",
  "id": "test-whitelisting-functionality-which-includes-don\u0027t-run-on-this-page,-don\u0027t-run-on-pages-on-this-site,-show-ads-on-a-webpage-or-a-domain,-manually-edit-your-filters;scenario-1-user-whitelist-a-given-site-from-pop-up-and-then-remove-it",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user whitelist adblock on website from popup",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 7
    },
    {
      "cells": [
        "https://stackoverflow.com/"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "adblock is disabled and website added to manually edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 10
    },
    {
      "cells": [
        "@@|https://stackoverflow.com/|$document"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user refersh the page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "adblock is disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user navigates away from website and back",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 15
    },
    {
      "cells": [
        "https://stackoverflow.com/"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "adblock is disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4319713700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5841068000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 19652660300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 578388400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled()"
});
formatter.result({
  "duration": 14713319400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6670914700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled()"
});
formatter.result({
  "duration": 14689416300,
  "status": "passed"
});
formatter.after({
  "duration": 630453800,
  "status": "passed"
});
formatter.before({
  "duration": 12151497600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Scenario-2 User whitelist AdBlock on a particular website from customize page",
  "description": "",
  "id": "test-whitelisting-functionality-which-includes-don\u0027t-run-on-this-page,-don\u0027t-run-on-pages-on-this-site,-show-ads-on-a-webpage-or-a-domain,-manually-edit-your-filters;scenario-2-user-whitelist-adblock-on-a-particular-website-from-customize-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "user whitelist adblock from customize page show ads on a webpage or domain",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 23
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "adblock is disabled and website added to manually edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 26
    },
    {
      "cells": [
        "@@https://www.theguardian.com/international$document"
      ],
      "line": 27
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user enable Adblocking by removing the filter",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "adblock is not disabled and filter is removed from manually edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 30
    },
    {
      "cells": [
        "@@https://www.theguardian.com/international$document"
      ],
      "line": 31
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4303653600,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromShowAdsOnwebpage(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 7790622600,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 19887179400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingbyRemovingFilter()"
});
formatter.result({
  "duration": 7233935700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10813622900,
  "status": "passed"
});
formatter.after({
  "duration": 649662500,
  "status": "passed"
});
formatter.before({
  "duration": 12118486900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Scenario-3 User whitelist AdBlock on a particular website adding it to manually edit filters",
  "description": "",
  "id": "test-whitelisting-functionality-which-includes-don\u0027t-run-on-this-page,-don\u0027t-run-on-pages-on-this-site,-show-ads-on-a-webpage-or-a-domain,-manually-edit-your-filters;scenario-3-user-whitelist-adblock-on-a-particular-website-adding-it-to-manually-edit-filters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user whitelist adblock from manually edit filters",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 36
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "adblock is disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user enable Adblocking from pop-up",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "adblock is not disabled and filter is removed from manually edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 41
    },
    {
      "cells": [
        "@@https://www.theguardian.com/international$document"
      ],
      "line": 42
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4354309900,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromManuallyEditFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9714921200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled()"
});
formatter.result({
  "duration": 14165638200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 2116911700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 11077245300,
  "status": "passed"
});
formatter.after({
  "duration": 657093900,
  "status": "passed"
});
formatter.before({
  "duration": 12128190100,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Scenario-4 Check the wizard looks right",
  "description": "",
  "id": "test-whitelisting-functionality-which-includes-don\u0027t-run-on-this-page,-don\u0027t-run-on-pages-on-this-site,-show-ads-on-a-webpage-or-a-domain,-manually-edit-your-filters;scenario-4-check-the-wizard-looks-right",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "user whitelist all pages on website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 47
    },
    {
      "cells": [
        "https://www.thelocal.se/"
      ],
      "line": 48
    },
    {
      "cells": [
        "https://clevelandmagazine.com/"
      ],
      "line": 49
    },
    {
      "cells": [
        "http://www.di.se"
      ],
      "line": 50
    },
    {
      "cells": [
        "http://slashdot.org"
      ],
      "line": 51
    },
    {
      "cells": [
        "http://www.iqshw.com"
      ],
      "line": 52
    },
    {
      "cells": [
        "http://aranzulla.it/"
      ],
      "line": 53
    },
    {
      "cells": [
        "https://anistar.me"
      ],
      "line": 54
    },
    {
      "cells": [
        "https://www.kbb.com/"
      ],
      "line": 55
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4316213400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userWhitelistAllPages(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 201669831900,
  "status": "passed"
});
formatter.after({
  "duration": 736863100,
  "status": "passed"
});
formatter.uri("Installtion.feature");
formatter.feature({
  "line": 2,
  "name": "Test Fresh Installtion",
  "description": "",
  "id": "test-fresh-installtion",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    }
  ]
});
formatter.before({
  "duration": 12122792200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Scenario-1 User install AdBlock and default subscription are correct",
  "description": "",
  "id": "test-fresh-installtion;scenario-1-user-install-adblock-and-default-subscription-are-correct",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user ID is displayed in the URL and injected in the page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "pop-up has all the correct elements",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is subscribed to correct filter",
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4349332600,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.userIDInjected()"
});
formatter.result({
  "duration": 1885353000,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.isPopUpHasAllElements()"
});
formatter.result({
  "duration": 926361300,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.isUserSubscribedToCorrectFilters()"
});
formatter.result({
  "duration": 4480792600,
  "status": "passed"
});
formatter.after({
  "duration": 613590600,
  "status": "passed"
});
formatter.before({
  "duration": 12102848300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Scenario-2 Check all links in installed page",
  "description": "",
  "id": "test-fresh-installtion;scenario-2-check-all-links-in-installed-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@RunThis"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user clicks on following links",
  "rows": [
    {
      "cells": [
        "LINK",
        "",
        "URL"
      ],
      "line": 13
    },
    {
      "cells": [
        "opt out now",
        "",
        "ADBLOCK DISABLED"
      ],
      "line": 14
    },
    {
      "cells": [
        "good web neighbors",
        "",
        "https://help.getadblock.com/support/solutions/articles/6000092027-why-does-adblock-allow-some-ads-to-appear-"
      ],
      "line": 15
    },
    {
      "cells": [
        "help.getadblock.com",
        "",
        "https://help.getadblock.com/support/home"
      ],
      "line": 16
    },
    {
      "cells": [
        "AdBlock for iOS",
        "",
        "https://apps.apple.com/us/app/adblock-for-mobile/id1036484810"
      ],
      "line": 17
    },
    {
      "cells": [
        "AdBlock for Samsung Internet",
        "",
        "https://play.google.com/store/apps/details?id\u003dcom.betafish.adblocksbrowser"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4470179300,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.userClicksonlinks(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 31139942100,
  "status": "passed"
});
formatter.after({
  "duration": 654794400,
  "status": "passed"
});
formatter.uri("TestPages.feature");
formatter.feature({
  "line": 2,
  "name": "Test adblock test page and snippet page",
  "description": "",
  "id": "test-adblock-test-page-and-snippet-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    }
  ]
});
formatter.before({
  "duration": 12117681700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Scenario-1 Check the test page for adblock functionality",
  "description": "",
  "id": "test-adblock-test-page-and-snippet-page;scenario-1-check-the-test-page-for-adblock-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "adblocking test pass",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 8
    },
    {
      "cells": [
        "getadblock.com#?#div.sidebar \u003e div:-abp-has(div.berry)"
      ],
      "line": 9
    },
    {
      "cells": [
        "getadblock.com#?#tr:-abp-has(\u003e td[class^\u003d\"content\"]:-abp-contains(Реклама))"
      ],
      "line": 10
    },
    {
      "cells": [
        "getadblock.com#?#div:-abp-properties(content: \"«\")"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "text is hidden",
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4322864900,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.adblockTestPass()"
});
formatter.result({
  "duration": 1717503800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6339246100,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.textishidden()"
});
formatter.result({
  "duration": 1009778300,
  "status": "passed"
});
formatter.after({
  "duration": 644713800,
  "status": "passed"
});
formatter.before({
  "duration": 12119667400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Scenario-2 Check the snippet page for adblock functionality",
  "description": "",
  "id": "test-adblock-test-page-and-snippet-page;scenario-2-check-the-snippet-page-for-adblock-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 17
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-contains /\\\\\\\\bPublicity\\\\\\\\b/ div[id]"
      ],
      "line": 18
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-contains-and-matches-style Ad div[id] span.label \";\" /\\\\bdisplay:\\ inline\\;/"
      ],
      "line": 19
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-contains-and-matches-style Ad div[id] span.label /./ \"display: inline;\""
      ],
      "line": 20
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-shadow-contains /\\\\\\\\bAnnuncio\\\\\\\\b/ div[id]"
      ],
      "line": 21
    },
    {
      "cells": [
        "code.getadblock.com#$#log \"Test 1: Hello world with log!\""
      ],
      "line": 22
    },
    {
      "cells": [
        "code.getadblock.com#$#trace \"Test 7: Hello world with trace!\""
      ],
      "line": 23
    },
    {
      "cells": [
        "code.getadblock.com#$#wrong-snippet"
      ],
      "line": 24
    },
    {
      "cells": [
        "code.getadblock.com#$#uabinject-defuser"
      ],
      "line": 25
    },
    {
      "cells": [
        "code.getadblock.com#$#abort-on-property-read adsOptions.shown"
      ],
      "line": 26
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-contains-image /.*/ div[id].test-5"
      ],
      "line": 27
    },
    {
      "cells": [
        "code.getadblock.com#$#readd div.test-8 div[id\u003d\"readd\"]"
      ],
      "line": 28
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-has-and-matches-style span.test-9 div[id].test-9 div[id].test-9 /./ \\\u0027background-color: rgb(255, 102, 102);\\\u0027"
      ],
      "line": 29
    },
    {
      "cells": [
        "code.getadblock.com#$#abort-current-inline-script Math.abs /[a-zA-Z]{3,}/"
      ],
      "line": 30
    },
    {
      "cells": [
        "code.getadblock.com#$#abort-current-inline-script Object.keys"
      ],
      "line": 31
    },
    {
      "cells": [
        "code.getadblock.com#$#abort-on-property-write theAdIsShowing"
      ],
      "line": 32
    },
    {
      "cells": [
        "code.getadblock.com#$#strip-fetch-query-parameter foo"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "test snippent page",
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 4348154800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5132834100,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.testSnippet()"
});
formatter.result({
  "duration": 5423138100,
  "status": "passed"
});
formatter.after({
  "duration": 619542200,
  "status": "passed"
});
});