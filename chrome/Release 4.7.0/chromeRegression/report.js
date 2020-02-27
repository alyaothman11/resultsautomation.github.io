$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdBlockAAPrivacyTest.feature");
formatter.feature({
  "line": 4,
  "name": "Test AA Privacy",
  "description": "",
  "id": "test-aa-privacy",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    },
    {
      "line": 2,
      "name": "@RegressionFirefox"
    }
  ]
});
formatter.before({
  "duration": 7588857000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Scenario-1 Test enabling AA privacy",
  "description": "",
  "id": "test-aa-privacy;scenario-1-test-enabling-aa-privacy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enable AA privacy",
  "rows": [
    {
      "cells": [
        "PAGE"
      ],
      "line": 9
    },
    {
      "cells": [
        "General"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "privacy is enabled",
  "rows": [
    {
      "cells": [
        "PAGE"
      ],
      "line": 12
    },
    {
      "cells": [
        "General"
      ],
      "line": 13
    },
    {
      "cells": [
        "Filter"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 21117909100,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 148270000,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyEnabledGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1303682600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Test enabling AA privacychrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 12600670700,
  "status": "passed"
});
formatter.before({
  "duration": 3313966000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Scenario-2 Test disabling AA privacy",
  "description": "",
  "id": "test-aa-privacy;scenario-2-test-disabling-aa-privacy",
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
  "name": "enable AA privacy",
  "rows": [
    {
      "cells": [
        "PAGE"
      ],
      "line": 20
    },
    {
      "cells": [
        "Filter"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "disable AA privacy",
  "rows": [
    {
      "cells": [
        "PAGE"
      ],
      "line": 23
    },
    {
      "cells": [
        "General"
      ],
      "line": 24
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "privacy is disabled",
  "rows": [
    {
      "cells": [
        "PAGE"
      ],
      "line": 26
    },
    {
      "cells": [
        "Filter"
      ],
      "line": 27
    },
    {
      "cells": [
        "General"
      ],
      "line": 28
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20322781800,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 219616700,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 203565600,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1263371600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test disabling AA privacychrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 11803309000,
  "status": "passed"
});
formatter.before({
  "duration": 3303912300,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Scenario-3 Test disabling AA from General Page with privacy truned on",
  "description": "",
  "id": "test-aa-privacy;scenario-3-test-disabling-aa-from-general-page-with-privacy-truned-on",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "enable AA privacy",
  "rows": [
    {
      "cells": [
        "PAGE"
      ],
      "line": 33
    },
    {
      "cells": [
        "Filter"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "disable AA",
  "rows": [
    {
      "cells": [
        "PAGE"
      ],
      "line": 36
    },
    {
      "cells": [
        "General"
      ],
      "line": 37
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "privacy is disabled",
  "rows": [
    {
      "cells": [
        "PAGE"
      ],
      "line": 39
    },
    {
      "cells": [
        "Filter"
      ],
      "line": 40
    },
    {
      "cells": [
        "General"
      ],
      "line": 41
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20338119000,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 210802200,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2262304700,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1168876600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 Test disabling AA from General Page with privacy truned onchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 11823386700,
  "status": "passed"
});
formatter.before({
  "duration": 3312226900,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Scenario-4 Test disabling AA from Option Page with privacy truned on",
  "description": "",
  "id": "test-aa-privacy;scenario-4-test-disabling-aa-from-option-page-with-privacy-truned-on",
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
  "name": "enable AA privacy",
  "rows": [
    {
      "cells": [
        "PAGE"
      ],
      "line": 47
    },
    {
      "cells": [
        "General"
      ],
      "line": 48
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "disable AA",
  "rows": [
    {
      "cells": [
        "PAGE"
      ],
      "line": 50
    },
    {
      "cells": [
        "Filter"
      ],
      "line": 51
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "privacy is disabled",
  "rows": [
    {
      "cells": [
        "PAGE"
      ],
      "line": 53
    },
    {
      "cells": [
        "Filter"
      ],
      "line": 54
    },
    {
      "cells": [
        "General"
      ],
      "line": 55
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20326349900,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 160439300,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2200762200,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1168971000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-4 Test disabling AA from Option Page with privacy truned onchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 11825244100,
  "status": "passed"
});
formatter.uri("AdBlockAdvanceUser.feature");
formatter.feature({
  "line": 3,
  "name": "Test Advance User",
  "description": "",
  "id": "test-advance-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    }
  ]
});
formatter.before({
  "duration": 3298722700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Scenario-1 Test Debug info works",
  "description": "",
  "id": "test-advance-user;scenario-1-test-debug-info-works",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enable Advance user",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enable Debug info",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "debug info works",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20327033100,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableAdvanceUser()"
});
formatter.result({
  "duration": 1056437000,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableDebugInfo()"
});
formatter.result({
  "duration": 67353100,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.checkDebugInfo()"
});
formatter.result({
  "duration": 15536356900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Test Debug info workschrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 10916066000,
  "status": "passed"
});
formatter.before({
  "duration": 3290213400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Scenario-2 Test show links",
  "description": "",
  "id": "test-advance-user;scenario-2-test-show-links",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionFirefox"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enable Advance user",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user subscribe to filter by URL",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 15
    },
    {
      "cells": [
        "https://www.i-dont-care-about-cookies.eu/abp/"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user click on show links",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "links are displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20672775200,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableAdvanceUser()"
});
formatter.result({
  "duration": 1047768200,
  "status": "passed"
});
formatter.match({
  "location": "SubscribeStepDefn.userCustomFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3916161400,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.userClickOnShowLinks()"
});
formatter.result({
  "duration": 1231015400,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.linksDisplayed()"
});
formatter.result({
  "duration": 1445811500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test show linkschrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 12038961100,
  "status": "passed"
});
formatter.before({
  "duration": 4787830800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Scenario-3 Test disabled filter",
  "description": "",
  "id": "test-advance-user;scenario-3-test-disabled-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@RegressionFirefox"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user enable Advance user",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user whitelist adblock from manually edit filters",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 25
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user add the filter to disabled filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 28
    },
    {
      "cells": [
        "@@https://www.theguardian.com/international$document"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user navigates to website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 31
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 32
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "adblock is not disabled and filter is removed from manually edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 34
    },
    {
      "cells": [
        "@@https://www.theguardian.com/international$document"
      ],
      "line": 35
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20277635000,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableAdvanceUser()"
});
formatter.result({
  "duration": 1057312500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromManuallyEditFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17415021700,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.addDisabled(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8548269700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1604736600,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9489100000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 Test disabled filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 11834059900,
  "status": "passed"
});
formatter.uri("AdBlockBlacklist.feature");
formatter.feature({
  "line": 4,
  "name": "Test blacklist functionality by CSS, show ads everywhere except and block an ad by its URL",
  "description": "",
  "id": "test-blacklist-functionality-by-css,-show-ads-everywhere-except-and-block-an-ad-by-its-url",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    },
    {
      "line": 2,
      "name": "@RegressionFirefox"
    }
  ]
});
formatter.before({
  "duration": 3303460100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Scenario-1 User blacklist a given ad by its CSS",
  "description": "",
  "id": "test-blacklist-functionality-by-css,-show-ads-everywhere-except-and-block-an-ad-by-its-url;scenario-1-user-blacklist-a-given-ad-by-its-css",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user blacklist an ad by its CSS",
  "rows": [
    {
      "cells": [
        "URL",
        "",
        "CSS"
      ],
      "line": 9
    },
    {
      "cells": [
        "stackoverflow.com",
        "",
        "HEADER[class\u003d\"top-bar js-top-bar top-bar__network _fixed\"]"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "ad is not displayed",
  "rows": [
    {
      "cells": [
        "URL",
        "",
        "xpath"
      ],
      "line": 12
    },
    {
      "cells": [
        "https://stackoverflow.com",
        "",
        "/html/body/header"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user refersh the page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "ad is not displayed",
  "rows": [
    {
      "cells": [
        "URL",
        "",
        "xpath"
      ],
      "line": 16
    },
    {
      "cells": [
        "https://stackoverflow.com",
        "",
        "/html/body/header"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user whitelist adblock on website from popup",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 19
    },
    {
      "cells": [
        "https://stackoverflow.com"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "ad is displayed",
  "rows": [
    {
      "cells": [
        "URL",
        "",
        "xpath"
      ],
      "line": 22
    },
    {
      "cells": [
        "https://stackoverflow.com",
        "",
        "/html/body/header"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "user enable Adblocking from pop-up",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "ad is not displayed",
  "rows": [
    {
      "cells": [
        "URL",
        "",
        "xpath"
      ],
      "line": 26
    },
    {
      "cells": [
        "https://stackoverflow.com",
        "",
        "/html/body/header"
      ],
      "line": 27
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20877681100,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlaclistByCSS(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9441148800,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2789905200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 731892800,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 730711900,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5133198400,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adisDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 718369900,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 10976761100,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 631598400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 User blacklist a given ad by its CSSchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 11862022400,
  "status": "passed"
});
formatter.before({
  "duration": 3306934000,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Scenario-2 User blacklist by show ads everywhere except",
  "description": "",
  "id": "test-blacklist-functionality-by-css,-show-ads-everywhere-except-and-block-an-ad-by-its-url;scenario-2-user-blacklist-by-show-ads-everywhere-except",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user blacklist all websites except one from show ads everywhere except for these domains",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 32
    },
    {
      "cells": [
        "https://stackoverflow.com"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "adblock is not disabled and filter is added  manually to edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 35
    },
    {
      "cells": [
        "@@*$document,domain\u003d~stackoverflow.com"
      ],
      "line": 36
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "adblock is disabled on all websites",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 38
    },
    {
      "cells": [
        "https://www.digitalspy.com/tv/"
      ],
      "line": 39
    },
    {
      "cells": [
        "https://www.kbb.com/"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user enable Adblocking from pop-up",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "adblock is not disabled and filter is added  manually to edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 43
    },
    {
      "cells": [
        "@@*$document,domain\u003d~stackoverflow.com|~kbb.com"
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
  "duration": 20518997800,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlaclistByDomain(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 11816261300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFiltersAdded(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 12709740800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 38484272500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 10779555000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFiltersAdded(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 12943357300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 User blacklist by show ads everywhere exceptchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 11924986000,
  "status": "passed"
});
formatter.before({
  "duration": 4712559700,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Scenario-3 Check the blacklist wizard looks right",
  "description": "",
  "id": "test-blacklist-functionality-by-css,-show-ads-everywhere-except-and-block-an-ad-by-its-url;scenario-3-check-the-blacklist-wizard-looks-right",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "user clicks on do not run ads on website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 49
    },
    {
      "cells": [
        "https://www.thelocal.se/"
      ],
      "line": 50
    },
    {
      "cells": [
        "https://clevelandmagazine.com/"
      ],
      "line": 51
    },
    {
      "comments": [
        {
          "line": 52,
          "value": "#\t\t|http://www.di.se|"
        }
      ],
      "cells": [
        "http://slashdot.org"
      ],
      "line": 53
    },
    {
      "cells": [
        "http://www.iqshw.com"
      ],
      "line": 54
    },
    {
      "cells": [
        "https://anistar.me"
      ],
      "line": 55
    },
    {
      "cells": [
        "https://www.kbb.com/"
      ],
      "line": 56
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20259993200,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlackList(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 92935905800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 Check the blacklist wizard looks rightchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 11833741400,
  "status": "passed"
});
formatter.uri("AdBlockDataCollection.feature");
formatter.feature({
  "line": 3,
  "name": "Test Data Collection",
  "description": "",
  "id": "test-data-collection",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    },
    {
      "line": 2,
      "name": "@RegressionFirefox"
    }
  ]
});
formatter.before({
  "duration": 4713537700,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Scenario-1 Test Data collection is empty when user does not have it turned on",
  "description": "",
  "id": "test-data-collection;scenario-1-test-data-collection-is-empty-when-user-does-not-have-it-turned-on",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "send Data Collection Object",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "object is empty",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20289929000,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.sendDCObject()"
});
formatter.result({
  "duration": 16186797600,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.isEmptyDC()"
});
formatter.result({
  "duration": 4330949000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Test Data collection is empty when user does not have it turned onchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 10769188800,
  "status": "passed"
});
formatter.before({
  "duration": 4799724600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "#Note: The URL is preset in the background, because the image has to match the URL"
    },
    {
      "line": 11,
      "value": "# Testing against two websites"
    }
  ],
  "line": 13,
  "name": "Scenario-2 Test Data collection is  working when user  have it turned on",
  "description": "",
  "id": "test-data-collection;scenario-2-test-data-collection-is--working-when-user--have-it-turned-on",
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
  "name": "user enable Data Collection",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user navigate to some websites",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "send Data Collection Object",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "object is not empty",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20220901200,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.enableDC()"
});
formatter.result({
  "duration": 53960500,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.navigateToSomeWebsites()"
});
formatter.result({
  "duration": 5737994500,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.sendDCObject()"
});
formatter.result({
  "duration": 16524078500,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.isNotEmptyDC()"
});
formatter.result({
  "duration": 4124253000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test Data collection is  working when user  have it turned onchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 10942513900,
  "status": "passed"
});
formatter.uri("AdBlockDevTools.feature");
formatter.feature({
  "line": 3,
  "name": "Test Dev Tools",
  "description": "",
  "id": "test-dev-tools",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3307919100,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Scenario-3 Test disable Dev Tools",
  "description": "",
  "id": "test-dev-tools;scenario-3-test-disable-dev-tools",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@RegressionChrome"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user disable Dev Tools",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user navigates to website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 43
    },
    {
      "cells": [
        "https://www.google.com"
      ],
      "line": 44
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "dev tools is disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "user enable Dev Tools",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user navigates to website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 48
    },
    {
      "cells": [
        "https://www.google.com"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "dev tool is enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20315200200,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockDevToolsStepDefn.disableDevTools()"
});
formatter.result({
  "duration": 51989300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2297101100,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockDevToolsStepDefn.devToolsIsDisabled()"
});
formatter.result({
  "duration": 19541296200,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockDevToolsStepDefn.enableDevTools()"
});
formatter.result({
  "duration": 8424728700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1205847200,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockDevToolsStepDefn.devToolsIsenabled()"
});
formatter.result({
  "duration": 9062508900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 Test disable Dev Toolschrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 12528039200,
  "status": "passed"
});
formatter.uri("AdBlockFeedback.feature");
formatter.feature({
  "line": 4,
  "name": "Test Feedback CTA",
  "description": "",
  "id": "test-feedback-cta",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    },
    {
      "line": 2,
      "name": "@RegressionFirefox"
    }
  ]
});
formatter.before({
  "duration": 5519499500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Scenario-1 Test Feedback URL with user not upgraded to Permium",
  "description": "",
  "id": "test-feedback-cta;scenario-1-test-feedback-url-with-user-not-upgraded-to-permium",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user click on Feedback",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is redirected to correct URL",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://portal.productboard.com/getadblock/4-adblock-extension/tabs/7-under-consideration"
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
  "duration": 20325637500,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.userClickFeedback()"
});
formatter.result({
  "duration": 8352753700,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.correctLink(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8904500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Test Feedback URL with user not upgraded to Permiumchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 12115109200,
  "status": "passed"
});
formatter.before({
  "duration": 3331689300,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Scenario-2 Test Feedback URL with user IS upgraded to Permium",
  "description": "",
  "id": "test-feedback-cta;scenario-2-test-feedback-url-with-user-is-upgraded-to-permium",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "enable MAB",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user click on Feedback",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user is redirected to correct URL",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 20
    },
    {
      "cells": [
        "https://portal.productboard.com/getadblock/5-adblock-extension-premium/tabs/10-under-consideration"
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
  "duration": 20321612000,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 55517947100,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.userClickFeedback()"
});
formatter.result({
  "duration": 7813284900,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.correctLink(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 7766200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test Feedback URL with user IS upgraded to Permiumchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 11782217500,
  "status": "passed"
});
formatter.uri("AdBlockImageSwap.feature");
formatter.feature({
  "line": 4,
  "name": "Test Image Swap",
  "description": "",
  "id": "test-image-swap",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    },
    {
      "line": 2,
      "name": "@RegressionFirefox"
    },
    {
      "line": 3,
      "name": "@RunThis"
    }
  ]
});
formatter.before({
  "duration": 3245398600,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Scenario-1 Test that deafult for image swap is none selected",
  "description": "",
  "id": "test-image-swap;scenario-1-test-that-deafult-for-image-swap-is-none-selected",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enable MAB",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "don\u0027t swap ads is selected",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user select another image swap",
  "rows": [
    {
      "cells": [
        "channel"
      ],
      "line": 11
    },
    {
      "cells": [
        "cat"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "don\u0027t swap ads is not selected",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user select don\u0027t swap ads",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "none of the other images are selected",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20377573600,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 55592397600,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.themesApplied()"
});
formatter.result({
  "duration": 4183171100,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noCTA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 64963200,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.notselected()"
});
formatter.result({
  "duration": 16132000,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noSwap()"
});
formatter.result({
  "duration": 70509400,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noneSelected()"
});
formatter.result({
  "duration": 18843700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Test that deafult for image swap is none selectedchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 11768768600,
  "status": "passed"
});
formatter.before({
  "duration": 3306410500,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Scenario-2 Test Image swap behaves correctly",
  "description": "",
  "id": "test-image-swap;scenario-2-test-image-swap-behaves-correctly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "enable MAB",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "image swap behave correctly",
  "rows": [
    {
      "cells": [
        "channel"
      ],
      "line": 22
    },
    {
      "cells": [
        "cat"
      ],
      "line": 23
    },
    {
      "cells": [
        "dog"
      ],
      "line": 24
    },
    {
      "cells": [
        "landscape"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20709842600,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 55446531500,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.imageSwap(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 54588411700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test Image swap behaves correctlychrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "duration": 11914456900,
  "status": "passed"
});
formatter.uri("AdBlockInMarketing.feature");
formatter.feature({
  "line": 4,
  "name": "Test Feedback CTA",
  "description": "",
  "id": "test-feedback-cta",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    },
    {
      "line": 2,
      "name": "@RegressionFirefox"
    },
    {
      "line": 3,
      "name": "@RunThiss"
    }
  ]
});
formatter.before({
  "duration": 3274935800,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Scenario-1 Test CTA on all pages",
  "description": "",
  "id": "test-feedback-cta;scenario-1-test-cta-on-all-pages",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user sees CTA  to upgrade on all pages",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20323534500,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.themesApplied()"
});
formatter.result({
  "duration": 6039506200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Test CTA on all pageschrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 11790709100,
  "status": "passed"
});
formatter.before({
  "duration": 3295368000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Scenario-2 Test user sees CTA on setting change",
  "description": "",
  "id": "test-feedback-cta;scenario-2-test-user-sees-cta-on-setting-change",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user refersh Adblock",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user sees does not see CTA  to upgrade on all pages",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user change setting",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user sees CTA  to upgrade on all pages",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 21622277000,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.openAdblock()"
});
formatter.result({
  "duration": 2701521400,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.noCTA()"
});
formatter.result({
  "duration": 1381217800,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.changeSetting()"
});
formatter.result({
  "duration": 2108164500,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.themesApplied()"
});
formatter.result({
  "duration": 5981093600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test user sees CTA on setting changechrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "duration": 11831486000,
  "status": "passed"
});
formatter.before({
  "duration": 3302601500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Scenario-3 Test user can dismiss CTA permanently",
  "description": "",
  "id": "test-feedback-cta;scenario-3-test-user-can-dismiss-cta-permanently",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user dismiss Sync CTA",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user sees does not see CTA  to upgrade on all pages",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user change setting",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user sees does not see CTA  to upgrade on all pages",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20315980600,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.closeSyncCTA()"
});
formatter.result({
  "duration": 6422068700,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.noCTA()"
});
formatter.result({
  "duration": 1364047100,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.changeSetting()"
});
formatter.result({
  "duration": 2111853100,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.noCTA()"
});
formatter.result({
  "duration": 1248420800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 Test user can dismiss CTA permanentlychrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "duration": 11759618400,
  "status": "passed"
});
formatter.before({
  "duration": 3308842600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Scenario-4 Test Themes CTA",
  "description": "",
  "id": "test-feedback-cta;scenario-4-test-themes-cta",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "user dismiss upgrade CTA",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "a different theme is applied on reopen of popup",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20270198600,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.dismissCTA()"
});
formatter.result({
  "duration": 5892084800,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.goToOptionPage()"
});
formatter.result({
  "duration": 25155902000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-4 Test Themes CTAchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded20.png");
formatter.after({
  "duration": 11768502000,
  "status": "passed"
});
formatter.uri("AdBlockManuallyEdit.feature");
formatter.feature({
  "line": 4,
  "name": "Test Error Handling of manually editing filters",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    },
    {
      "line": 2,
      "name": "@RegressionFirefox"
    },
    {
      "line": 3,
      "name": "@RunThis"
    }
  ]
});
formatter.before({
  "duration": 3302888700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Scenario-1 User gets an error when trying to use rewrite filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-1-user-gets-an-error-when-trying-to-use-rewrite-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 9
    },
    {
      "cells": [
        "/(testpages\\.adblockplus\\.org\\/css\\/testpages\\.css)\\?14$/$rewrite\u003d$1?42"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 12
    },
    {
      "cells": [
        "Invalid filter"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20309093500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16471540100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 34750600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 User gets an error when trying to use rewrite filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded21.png");
formatter.after({
  "duration": 11789642600,
  "status": "passed"
});
formatter.before({
  "duration": 3289219900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "#Note: This check was removed by ABP and if we want it we need to add it on the"
    },
    {
      "line": 15,
      "value": "#UI"
    }
  ],
  "line": 16,
  "name": "Scenario-2 User gets an error when adding incorrect filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-2-user-gets-an-error-when-adding-incorrect-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 19
    },
    {
      "cells": [
        "/foo/bar.html^$rewrite\u003dsjkdhfladsjhfasl"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 23
    },
    {
      "cells": [
        "Invalid filter"
      ],
      "line": 24
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20281010200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16469937400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 36665500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 User gets an error when adding incorrect filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded22.png");
formatter.after({
  "duration": 11765016600,
  "status": "passed"
});
formatter.before({
  "duration": 3282449300,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Scenario-3 User gets an error when adding incorrect filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-3-user-gets-an-error-when-adding-incorrect-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 28
    },
    {
      "cells": [
        "/foo/bar.html^$rewrite"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 32
    },
    {
      "cells": [
        "Unknown filter option"
      ],
      "line": 33
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20264874200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16466617200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 36219700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 User gets an error when adding incorrect filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded23.png");
formatter.after({
  "duration": 11724468200,
  "status": "passed"
});
formatter.before({
  "duration": 3298817700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Scenario-4 User gets an error when adding incorrect filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-4-user-gets-an-error-when-adding-incorrect-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 39
    },
    {
      "cells": [
        "example.com^$csp"
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
      "line": 43
    },
    {
      "cells": [
        "Invalid Content Security Policy"
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
  "duration": 20915229400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16537318100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 40224500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-4 User gets an error when adding incorrect filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded24.png");
formatter.after({
  "duration": 11762592800,
  "status": "passed"
});
formatter.before({
  "duration": 3285631600,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Scenario-5 User gets an error when adding incorrect filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-5-user-gets-an-error-when-adding-incorrect-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 50
    },
    {
      "cells": [
        ",##selector"
      ],
      "line": 51
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 54
    },
    {
      "cells": [
        "Invalid (or empty) domain specified"
      ],
      "line": 55
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20322619000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16470042200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 35887800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-5 User gets an error when adding incorrect filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded25.png");
formatter.after({
  "duration": 11783300400,
  "status": "passed"
});
formatter.before({
  "duration": 3325436100,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Scenario-6 User gets an error when adding incorrect filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-6-user-gets-an-error-when-adding-incorrect-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 58,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 60
    },
    {
      "cells": [
        "t#?#div:-abp-properties(width: 213px)"
      ],
      "line": 61
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 64
    },
    {
      "cells": [
        "No active domain specified for extended element hiding filter"
      ],
      "line": 65
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20343255900,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16457595300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 35743200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-6 User gets an error when adding incorrect filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded26.png");
formatter.after({
  "duration": 11775818000,
  "status": "passed"
});
formatter.before({
  "duration": 3286850100,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Scenario-7 User gets an error when adding incorrect filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-7-user-gets-an-error-when-adding-incorrect-filter",
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
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 70
    },
    {
      "cells": [
        "t#$#log foo"
      ],
      "line": 71
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 74
    },
    {
      "cells": [
        "No active domain specified for snippet filter"
      ],
      "line": 75
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20323574200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16421570600,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 38847700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-7 User gets an error when adding incorrect filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded27.png");
formatter.after({
  "duration": 11802071500,
  "status": "passed"
});
formatter.uri("AdBlockPause.feature");
formatter.feature({
  "line": 4,
  "name": "Test Pausing AdBlock on a particular website and all websites",
  "description": "",
  "id": "test-pausing-adblock-on-a-particular-website-and-all-websites",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    },
    {
      "line": 2,
      "name": "@RegressionFirefox"
    }
  ]
});
formatter.before({
  "duration": 4970072500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Scenario-1 User pause AdBlock on a particular website from pop-up",
  "description": "",
  "id": "test-pausing-adblock-on-a-particular-website-and-all-websites;scenario-1-user-pause-adblock-on-a-particular-website-from-pop-up",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user pause adblock on website from popup",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 9
    },
    {
      "cells": [
        "https://www.stackoverflow.com"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user refersh the page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "adblock is paused",
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
        "https://www.stackoverflow.com"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "adblock is not paused",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20284580300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10227239000,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 22950676500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 550517500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23345024900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6379768400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7056319300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 User pause AdBlock on a particular website from pop-upchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded28.png");
formatter.after({
  "duration": 11763029700,
  "status": "passed"
});
formatter.before({
  "duration": 3337077100,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Scenario-2 User pause AdBlock on a particular website from context menu",
  "description": "",
  "id": "test-pausing-adblock-on-a-particular-website-and-all-websites;scenario-2-user-pause-adblock-on-a-particular-website-from-context-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user pause adblock on website from context menu",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 22
    },
    {
      "cells": [
        "https://www.stackoverflow.com"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "user refersh the page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "user navigates away from website and back",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 28
    },
    {
      "cells": [
        "https://www.stackoverflow.com"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "adblock is not paused",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20508134600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromContext(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 7202345900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23414048200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 1496059500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23563464300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6621247300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7773337300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 User pause AdBlock on a particular website from context menuchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded29.png");
formatter.after({
  "duration": 11826654000,
  "status": "passed"
});
formatter.before({
  "duration": 3283116500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Scenario-3 User pause AdBlock on a all sites from pop-up",
  "description": "",
  "id": "test-pausing-adblock-on-a-particular-website-and-all-websites;scenario-3-user-pause-adblock-on-a-all-sites-from-pop-up",
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
  "name": "user pause adblock on all sites from pop-up",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 36
    },
    {
      "cells": [
        "https://www.tutorialspoint.com/How-to-convert-Image-to-Byte-Array-in-java"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "user refersh the page",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "AdBlock is paused when navigating to different websites",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 42
    },
    {
      "cells": [
        "https://www.kbb.com/"
      ],
      "line": 43
    },
    {
      "cells": [
        "https://stackoverflow.com/"
      ],
      "line": 44
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20518199400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4856959600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23707468300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 29800200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 22796190700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.AdBlockPausedOnAll(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 53486940000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 User pause AdBlock on a all sites from pop-upchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded30.png");
formatter.after({
  "duration": 11834392600,
  "status": "passed"
});
formatter.before({
  "duration": 3304800700,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Scenario-4 User pause AdBlock on a all sites from context menu",
  "description": "",
  "id": "test-pausing-adblock-on-a-particular-website-and-all-websites;scenario-4-user-pause-adblock-on-a-all-sites-from-context-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "user pause adblock on all sites from context menu",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 49
    },
    {
      "cells": [
        "https://www.tutorialspoint.com/How-to-convert-Image-to-Byte-Array-in-java"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "user refersh the page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "adblock is paused",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "AdBlock is paused when navigating to different websites",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 55
    },
    {
      "cells": [
        "https://www.kbb.com/"
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
  "duration": 22084835200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromContextMenu(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4629468900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 49904008900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 6871145700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 25976604200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.AdBlockPausedOnAll(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 55324200400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-4 User pause AdBlock on a all sites from context menuchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded31.png");
formatter.after({
  "duration": 11861886900,
  "status": "passed"
});
formatter.before({
  "duration": 3278926200,
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
  "duration": 20813886100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromContextMenu(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3990967600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.resumePopup()"
});
formatter.result({
  "duration": 5931541300,
  "error_message": "FindFailed: src/test/resources/images/resume_popup.png: (156x22) in S(0)[0,0 1920x1080] E:Y, T:3.0\n  Line 2782, in file Region.java\n\r\n\tat org.sikuli.script.Region.wait(Region.java:2782)\r\n\tat org.sikuli.script.Region.find(Region.java:2329)\r\n\tat org.sikuli.script.Region.getLocationFromTarget(Region.java:3238)\r\n\tat org.sikuli.script.Region.click(Region.java:3736)\r\n\tat org.sikuli.script.Region.click(Region.java:3721)\r\n\tat com.betafish.webdriver.AbstractPage.clickImage(AbstractPage.java:67)\r\n\tat com.betafish.webdriver.PopupPage.clickResumePopup(PopupPage.java:237)\r\n\tat com.betafish.stepdefn.PauseStepDefn.resumePopup(PauseStepDefn.java:131)\r\n\tat ✽.And user resume Adblock from pop-up(AdBlockPause.feature:64)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-5 User resume Adblock from pop-up menuchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded32.png");
formatter.after({
  "duration": 11781784000,
  "status": "passed"
});
formatter.before({
  "duration": 3285352300,
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
  "duration": 20297201700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10313803800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.resumeContext()"
});
formatter.result({
  "duration": 1814447900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7518670100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-6 User resume Adblock from context menuchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded33.png");
formatter.after({
  "duration": 11928046700,
  "status": "passed"
});
formatter.uri("AdBlockThemes.feature");
formatter.feature({
  "line": 3,
  "name": "Test Themes",
  "description": "",
  "id": "test-themes",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    },
    {
      "line": 2,
      "name": "@RegressionFirefox"
    }
  ]
});
formatter.before({
  "duration": 4511778800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Scenario-1 Test default themes are applied for fresh install",
  "description": "",
  "id": "test-themes;scenario-1-test-default-themes-are-applied-for-fresh-install",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "themes are applied",
  "rows": [
    {
      "cells": [
        "LOC",
        "",
        "THEME"
      ],
      "line": 8
    },
    {
      "cells": [
        "option_page",
        "",
        "default"
      ],
      "line": 9
    },
    {
      "cells": [
        "pop_up",
        "",
        "default"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20690903500,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.themesApplied(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 26274598000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Test default themes are applied for fresh installchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded34.png");
formatter.after({
  "duration": 11770489900,
  "status": "passed"
});
formatter.before({
  "duration": 3286949300,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Scenario-2 Test all themes for popup and applying them",
  "description": "",
  "id": "test-themes;scenario-2-test-all-themes-for-popup-and-applying-them",
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
  "name": "enable MAB",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user display the theme",
  "rows": [
    {
      "cells": [
        "LOC",
        "",
        "THEME"
      ],
      "line": 17
    },
    {
      "cells": [
        "pop_up",
        "",
        "dark"
      ],
      "line": 18
    },
    {
      "cells": [
        "pop_up",
        "",
        "rebecca_purple"
      ],
      "line": 19
    },
    {
      "cells": [
        "pop_up",
        "",
        "solarized"
      ],
      "line": 20
    },
    {
      "cells": [
        "pop_up",
        "",
        "solarized_light"
      ],
      "line": 21
    },
    {
      "cells": [
        "pop_up",
        "",
        "watermelon"
      ],
      "line": 22
    },
    {
      "cells": [
        "pop_up",
        "",
        "ocean"
      ],
      "line": 23
    },
    {
      "cells": [
        "pop_up",
        "",
        "sunshine"
      ],
      "line": 24
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user apply theme",
  "rows": [
    {
      "cells": [
        "LOC",
        "",
        "THEME"
      ],
      "line": 26
    },
    {
      "cells": [
        "pop_up",
        "",
        "dark"
      ],
      "line": 27
    },
    {
      "cells": [
        "pop_up",
        "",
        "rebecca_purple"
      ],
      "line": 28
    },
    {
      "cells": [
        "pop_up",
        "",
        "solarized"
      ],
      "line": 29
    },
    {
      "cells": [
        "pop_up",
        "",
        "solarized_light"
      ],
      "line": 30
    },
    {
      "cells": [
        "pop_up",
        "",
        "watermelon"
      ],
      "line": 31
    },
    {
      "cells": [
        "pop_up",
        "",
        "ocean"
      ],
      "line": 32
    },
    {
      "cells": [
        "pop_up",
        "",
        "sunshine"
      ],
      "line": 33
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20463579900,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 55549649500,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.displayTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 38039290700,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.applyTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 46209326800,
  "error_message": "java.lang.AssertionError: The popup theme page is not correct\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.ThemesStepDefn.applyTheme(ThemesStepDefn.java:207)\r\n\tat ✽.And user apply theme(AdBlockThemes.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test all themes for popup and applying themchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded35.png");
formatter.after({
  "duration": 12763693400,
  "status": "passed"
});
formatter.before({
  "duration": 3284101500,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Scenario-2 Test all option page theme",
  "description": "",
  "id": "test-themes;scenario-2-test-all-option-page-theme",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "enable MAB",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "user display the theme",
  "rows": [
    {
      "cells": [
        "LOC",
        "",
        "THEME"
      ],
      "line": 41
    },
    {
      "cells": [
        "option_page",
        "",
        "dark"
      ],
      "line": 42
    },
    {
      "cells": [
        "option_page",
        "",
        "solarized"
      ],
      "line": 44
    },
    {
      "cells": [
        "option_page",
        "",
        "solarized_light"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user apply theme",
  "rows": [
    {
      "cells": [
        "LOC",
        "",
        "THEME"
      ],
      "line": 48
    },
    {
      "cells": [
        "option_page",
        "",
        "dark"
      ],
      "line": 49
    },
    {
      "cells": [
        "option_page",
        "",
        "solarized"
      ],
      "line": 51
    },
    {
      "cells": [
        "option_page",
        "",
        "solarized_light"
      ],
      "line": 52
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20699483000,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 55460834200,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.displayTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16421171800,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.applyTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 90893453900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test all option page themechrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded36.png");
formatter.after({
  "duration": 12007831600,
  "status": "passed"
});
formatter.uri("AdBlockWhitelist.feature");
formatter.feature({
  "line": 3,
  "name": "Test whitelisting functionality which includes don\u0027t run on this page, Don\u0027t run on pages on this site, Show ads on a webpage or a domain, manually edit your filters",
  "description": "",
  "id": "test-whitelisting-functionality-which-includes-don\u0027t-run-on-this-page,-don\u0027t-run-on-pages-on-this-site,-show-ads-on-a-webpage-or-a-domain,-manually-edit-your-filters",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    },
    {
      "line": 2,
      "name": "@RegressionFirefox"
    }
  ]
});
formatter.before({
  "duration": 3298491700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#Scenario: Scenario-1 User whitelist a given site from pop-up and then remove it"
    },
    {
      "line": 6,
      "value": "#\tGiven user install AdBlock"
    },
    {
      "line": 7,
      "value": "#\tAnd user whitelist adblock on website from popup"
    },
    {
      "line": 8,
      "value": "#\t\t|URL|"
    },
    {
      "line": 9,
      "value": "#\t\t|https://stackoverflow.com/|"
    },
    {
      "line": 10,
      "value": "#\tThen adblock is disabled and website added to manually edit your filter"
    },
    {
      "line": 11,
      "value": "#\t\t|FILTER|"
    },
    {
      "line": 12,
      "value": "#\t\t|@@\\|stackoverflow.com/\\|$document|"
    },
    {
      "line": 13,
      "value": "#"
    },
    {
      "line": 14,
      "value": "#"
    },
    {
      "line": 15,
      "value": "#\tAnd user navigates to website"
    },
    {
      "line": 16,
      "value": "#\t\t|URL|"
    },
    {
      "line": 17,
      "value": "#\t\t|https://stackoverflow.com/|"
    },
    {
      "line": 18,
      "value": "#\tThen adblock is disabled"
    },
    {
      "line": 19,
      "value": "#\tAnd user navigates away from website and back"
    },
    {
      "line": 20,
      "value": "#\t\t|URL|"
    },
    {
      "line": 21,
      "value": "#\t\t|https://stackoverflow.com/|"
    },
    {
      "line": 22,
      "value": "#\tThen adblock is disabled"
    }
  ],
  "line": 25,
  "name": "Scenario-2 User whitelist AdBlock on a particular website from customize page",
  "description": "",
  "id": "test-whitelisting-functionality-which-includes-don\u0027t-run-on-this-page,-don\u0027t-run-on-pages-on-this-site,-show-ads-on-a-webpage-or-a-domain,-manually-edit-your-filters;scenario-2-user-whitelist-adblock-on-a-particular-website-from-customize-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user whitelist adblock from customize page show ads on a webpage or domain",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 28
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "adblock is disabled and website added to manually edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 31
    },
    {
      "cells": [
        "@@https://www.theguardian.com/international$document"
      ],
      "line": 32
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user enable Adblocking by removing the filter",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user navigates to website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 35
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 36
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "adblock is not disabled and filter is removed from manually edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 38
    },
    {
      "cells": [
        "@@https://www.theguardian.com/international$document"
      ],
      "line": 39
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20310281500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromShowAdsOnwebpage(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 12295861300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 29426744800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingbyRemovingFilter()"
});
formatter.result({
  "duration": 14854664200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1689228300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9439651000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 User whitelist AdBlock on a particular website from customize pagechrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded37.png");
formatter.after({
  "duration": 11915590500,
  "status": "passed"
});
formatter.before({
  "duration": 3281962400,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Scenario-3 User whitelist AdBlock on a particular website adding it to manually edit filters",
  "description": "",
  "id": "test-whitelisting-functionality-which-includes-don\u0027t-run-on-this-page,-don\u0027t-run-on-pages-on-this-site,-show-ads-on-a-webpage-or-a-domain,-manually-edit-your-filters;scenario-3-user-whitelist-adblock-on-a-particular-website-adding-it-to-manually-edit-filters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "user whitelist adblock from manually edit filters",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 44
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "adblock is disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "user enable Adblocking from pop-up",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user navigates to website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 49
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "adblock is not disabled and filter is removed from manually edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 52
    },
    {
      "cells": [
        "@@https://www.theguardian.com/international$document"
      ],
      "line": 53
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20355259100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromManuallyEditFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17925372700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled()"
});
formatter.result({
  "duration": 15784947400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 10996211300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 983259100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9616168000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 User whitelist AdBlock on a particular website adding it to manually edit filterschrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded38.png");
formatter.after({
  "duration": 11848253200,
  "status": "passed"
});
formatter.before({
  "duration": 3284979900,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Scenario-4 Check the wizard looks right",
  "description": "",
  "id": "test-whitelisting-functionality-which-includes-don\u0027t-run-on-this-page,-don\u0027t-run-on-pages-on-this-site,-show-ads-on-a-webpage-or-a-domain,-manually-edit-your-filters;scenario-4-check-the-wizard-looks-right",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "user whitelist all pages on website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 58
    },
    {
      "cells": [
        "https://www.thelocal.se/"
      ],
      "line": 59
    },
    {
      "cells": [
        "https://clevelandmagazine.com/"
      ],
      "line": 60
    },
    {
      "cells": [
        "http://www.di.se"
      ],
      "line": 61
    },
    {
      "cells": [
        "http://slashdot.org"
      ],
      "line": 62
    },
    {
      "cells": [
        "http://www.iqshw.com"
      ],
      "line": 63
    },
    {
      "cells": [
        "https://anistar.me"
      ],
      "line": 64
    },
    {
      "cells": [
        "https://www.kbb.com/"
      ],
      "line": 65
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20268385400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userWhitelistAllPages(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 72008991800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-4 Check the wizard looks rightchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded39.png");
formatter.after({
  "duration": 11856804100,
  "status": "passed"
});
formatter.uri("AdBlockedCount.feature");
formatter.feature({
  "line": 3,
  "name": "Test AdBlock Count",
  "description": "",
  "id": "test-adblock-count",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    },
    {
      "line": 2,
      "name": "@RegressionFirefox"
    }
  ]
});
formatter.before({
  "duration": 3273019900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#Scenario: Scenario-1 User has adblock count enabled and get correct number blokced and total"
    },
    {
      "line": 6,
      "value": "#\tGiven user install AdBlock"
    },
    {
      "line": 7,
      "value": "#\tAnd number of blocked request matches the number in the popup and icon"
    },
    {
      "line": 8,
      "value": "#\t\t|URL|"
    },
    {
      "line": 9,
      "value": "#\t\t|https://www.tutorialspoint.com/How-to-convert-Image-to-Byte-Array-in-java|"
    },
    {
      "line": 10,
      "value": "#\t\t|https://www.google.com/search?ei\u003dFVzZXKq3DMqdlwTfkILgCg\u0026q\u003diphone\u0026oq\u003diphone\u0026gs_l\u003dpsy-ab.3..35i39l2j0i67l3j0l5.131213.131992..132147...0.0..0.164.924.0j6......0....1..gws-wiz.......0i131i67j0i131j0i20i263.ntk3XjrmyNk|"
    },
    {
      "line": 11,
      "value": "#\t\t|https://stackoverflow.com/|"
    }
  ],
  "line": 14,
  "name": "Scenario-2 User disable and enable AdBlock count on icon",
  "description": "",
  "id": "test-adblock-count;scenario-2-user-disable-and-enable-adblock-count-on-icon",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user is not displayed with count in icon when navigating to website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 18
    },
    {
      "cells": [
        "https://www.tutorialspoint.com/How-to-convert-Image-to-Byte-Array-in-java"
      ],
      "line": 19
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user enable adblock count in icon",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user is displayed with count in icon when navigating to website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 22
    },
    {
      "cells": [
        "https://www.tutorialspoint.com/How-to-convert-Image-to-Byte-Array-in-java"
      ],
      "line": 23
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 21161006700,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userNotDisplayedwithCountButton(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2880481800,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.enableAdBlockCountIcon()"
});
formatter.result({
  "duration": 10338916700,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userDisplayedwithCountButton(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5119928300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 User disable and enable AdBlock count on iconchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded40.png");
formatter.after({
  "duration": 11750182500,
  "status": "passed"
});
formatter.before({
  "duration": 3293536900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Scenario-3 User disable and enable AdBlock count on popup",
  "description": "",
  "id": "test-adblock-count;scenario-3-user-disable-and-enable-adblock-count-on-popup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "disable adblock count in popup",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user is not displayed with count in popup when navigating to website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 29
    },
    {
      "cells": [
        "https://stackoverflow.com/"
      ],
      "line": 30
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user enable adblock count in popup",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user is displayed with count in popup when navigating to website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 33
    },
    {
      "cells": [
        "https://stackoverflow.com/"
      ],
      "line": 34
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20310960500,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.clickAdBlockCountPopup()"
});
formatter.result({
  "duration": 7419738100,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userNotDisplayedwithCountPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4341333100,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.enableAdBlockCountPopup()"
});
formatter.result({
  "duration": 6855248500,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userDisplayedwithCountPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5739020100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 User disable and enable AdBlock count on popupchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded41.png");
formatter.after({
  "duration": 12330726400,
  "status": "passed"
});
formatter.uri("AdblockSupport.feature");
formatter.feature({
  "line": 4,
  "name": "Test Support Tab",
  "description": "",
  "id": "test-support-tab",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    },
    {
      "line": 2,
      "name": "@RegressionFirefox"
    }
  ]
});
formatter.before({
  "duration": 3304942000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Scenario-1 Check all links in support tab",
  "description": "",
  "id": "test-support-tab;scenario-1-check-all-links-in-support-tab",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user navigate to support tab",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks on following links on support tab",
  "rows": [
    {
      "cells": [
        "LINK",
        "",
        "URL"
      ],
      "line": 12
    },
    {
      "cells": [
        "ad_report_please",
        "",
        "https://help.getadblock.com/support/solutions/articles/6000109812-report-an-unblocked-ad"
      ],
      "line": 14
    },
    {
      "cells": [
        "supportsite",
        "",
        "https://help.getadblock.com/support/home"
      ],
      "line": 15
    },
    {
      "cells": [
        "sourcecode",
        "",
        "http://code.getadblock.com/"
      ],
      "line": 16
    },
    {
      "cells": [
        "contributors",
        "",
        "https://getadblock.com/contributors/"
      ],
      "line": 17
    },
    {
      "cells": [
        "whatsnew",
        "",
        "CHANGELOG"
      ],
      "line": 18
    },
    {
      "cells": [
        "debuginfo",
        "",
        "debuginfo"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20450170200,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.navigateSupportTab()"
});
formatter.result({
  "duration": 4139609100,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.userClicksonlinks(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 51818316400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Check all links in support tabchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded42.png");
formatter.after({
  "duration": 11765866300,
  "status": "passed"
});
formatter.before({
  "duration": 3302768300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Scenario-2 Check that user can submit a bug report",
  "description": "",
  "id": "test-support-tab;scenario-2-check-that-user-can-submit-a-bug-report",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "user navigate to support tab",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user submit a bug report",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "bug report is submitted",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20395274200,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.navigateSupportTab()"
});
formatter.result({
  "duration": 4142796100,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.submitBugReport()"
});
formatter.result({
  "duration": 13467686400,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.bugreportsubmit()"
});
formatter.result({
  "duration": 30174600,
  "error_message": "java.lang.AssertionError: Bug Report is not submitted\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.SupportStepDefn.bugreportsubmit(SupportStepDefn.java:96)\r\n\tat ✽.Then bug report is submitted(AdblockSupport.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Check that user can submit a bug reportchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded43.png");
formatter.after({
  "duration": 11862034800,
  "status": "passed"
});
formatter.uri("Installtion.feature");
formatter.feature({
  "line": 3,
  "name": "Test Fresh Installtion",
  "description": "",
  "id": "test-fresh-installtion",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@RegressionChrome"
    },
    {
      "line": 2,
      "name": "@RegressionFirefox"
    }
  ]
});
formatter.before({
  "duration": 3314368300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Scenario-1 User install AdBlock and default subscription are correct",
  "description": "",
  "id": "test-fresh-installtion;scenario-1-user-install-adblock-and-default-subscription-are-correct",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user install AdBlock with count on",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user ID is displayed in the URL and injected in the page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "pop-up has all the correct elements",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is subscribed to correct filter",
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblockCountOn()"
});
formatter.result({
  "duration": 5068770300,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.userIDInjected()"
});
formatter.result({
  "duration": 19325168500,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.isPopUpHasAllElements()"
});
formatter.result({
  "duration": 447528300,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.isUserSubscribedToCorrectFilters()"
});
formatter.result({
  "duration": 5544141100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 User install AdBlock and default subscription are correctchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded44.png");
formatter.after({
  "duration": 11811781100,
  "status": "passed"
});
formatter.before({
  "duration": 3285765500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Scenario-2 Check all links in installed page",
  "description": "",
  "id": "test-fresh-installtion;scenario-2-check-all-links-in-installed-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "user install AdBlock with count on",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user clicks on following links",
  "rows": [
    {
      "cells": [
        "LINK",
        "",
        "URL"
      ],
      "line": 14
    },
    {
      "cells": [
        "opt out now",
        "",
        "ADBLOCK DISABLED"
      ],
      "line": 15
    },
    {
      "cells": [
        "good web neighbors",
        "",
        "https://help.getadblock.com/support/solutions/articles/6000092027-why-does-adblock-allow-some-ads-to-appear-"
      ],
      "line": 16
    },
    {
      "cells": [
        "help.getadblock.com",
        "",
        "https://help.getadblock.com/support/home"
      ],
      "line": 17
    },
    {
      "cells": [
        "AdBlock for iOS",
        "",
        "https://apps.apple.com/us/app/adblock-for-mobile/id1036484810"
      ],
      "line": 18
    },
    {
      "cells": [
        "AdBlock for Samsung Internet",
        "",
        "https://play.google.com/store/apps/details?id\u003dcom.betafish.adblocksbrowser"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblockCountOn()"
});
formatter.result({
  "duration": 5072735600,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.userClicksonlinks(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 35332504300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Check all links in installed pagechrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded45.png");
formatter.after({
  "duration": 11794643000,
  "status": "passed"
});
formatter.uri("TestPages.feature");
formatter.feature({
  "line": 3,
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
  "duration": 4476353800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Scenario-1 Check the test page for adblock functionality",
  "description": "",
  "id": "test-adblock-test-page-and-snippet-page;scenario-1-check-the-test-page-for-adblock-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@RegressionFirefox"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "adblocking test pass",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 9
    },
    {
      "cells": [
        "getadblock.com#?#div.sidebar \u003e div:-abp-has(div.berry)"
      ],
      "line": 10
    },
    {
      "cells": [
        "getadblock.com#?#tr:-abp-has(\u003e td[class^\u003d\"content\"]:-abp-contains(Реклама))"
      ],
      "line": 11
    },
    {
      "cells": [
        "getadblock.com#?#div:-abp-properties(content: \"«\")"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "text is hidden",
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20700186900,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.adblockTestPass()"
});
formatter.result({
  "duration": 1765187900,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat com.betafish.stepdefn.TestPageStepDefn.adblockTestPass(TestPageStepDefn.java:20)\r\n\tat ✽.And adblocking test pass(TestPages.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestPageStepDefn.textishidden()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Check the test page for adblock functionalitychrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded46.png");
formatter.after({
  "duration": 11706997900,
  "status": "passed"
});
formatter.before({
  "duration": 3334326400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Scenario-2 Check the snippet page for adblock functionality",
  "description": "",
  "id": "test-adblock-test-page-and-snippet-page;scenario-2-check-the-snippet-page-for-adblock-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 18
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-contains /\\\\\\\\bPublicity\\\\\\\\b/ div[id]"
      ],
      "line": 19
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-contains-and-matches-style Ad div[id] span.label \";\" /\\\\bdisplay:\\ inline\\;/"
      ],
      "line": 20
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-contains-and-matches-style Ad div[id] span.label /./ \"display: inline;\""
      ],
      "line": 21
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-shadow-contains /\\\\\\\\bAnnuncio\\\\\\\\b/ div[id]"
      ],
      "line": 22
    },
    {
      "cells": [
        "code.getadblock.com#$#log \"Test 1: Hello world with log!\""
      ],
      "line": 23
    },
    {
      "cells": [
        "code.getadblock.com#$#trace \"Test 7: Hello world with trace!\""
      ],
      "line": 24
    },
    {
      "cells": [
        "code.getadblock.com#$#wrong-snippet"
      ],
      "line": 25
    },
    {
      "cells": [
        "code.getadblock.com#$#uabinject-defuser"
      ],
      "line": 26
    },
    {
      "cells": [
        "code.getadblock.com#$#abort-on-property-read adsOptions.shown"
      ],
      "line": 27
    },
    {
      "cells": [
        "code.getadblock.com#$#abort-on-property-read Object.entries"
      ],
      "line": 28
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-contains-image /.*/ div[id].test-5"
      ],
      "line": 29
    },
    {
      "cells": [
        "code.getadblock.com#$#readd div.test-8 div[id\u003d\"readd\"]"
      ],
      "line": 30
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-has-and-matches-style span.test-9 div[id].test-9 div[id].test-9 /./ \\\u0027background-color: rgb(255, 102, 102);\\\u0027"
      ],
      "line": 31
    },
    {
      "cells": [
        "code.getadblock.com#$#abort-current-inline-script Math.abs /[a-zA-Z]{3,}/"
      ],
      "line": 32
    },
    {
      "cells": [
        "code.getadblock.com#$#abort-current-inline-script Object.keys"
      ],
      "line": 33
    },
    {
      "cells": [
        "code.getadblock.com#$#abort-current-inline-script document.write atob"
      ],
      "line": 34
    },
    {
      "cells": [
        "code.getadblock.com#$#abort-current-inline-script document.write btoa"
      ],
      "line": 35
    },
    {
      "cells": [
        "code.getadblock.com#$#abort-on-property-write theAdIsShowing"
      ],
      "line": 36
    },
    {
      "cells": [
        "code.getadblock.com#$#abort-on-property-write theSponsorIsShowing"
      ],
      "line": 37
    },
    {
      "cells": [
        "code.getadblock.com#$#abort-on-property-write document.createTextNode"
      ],
      "line": 38
    },
    {
      "cells": [
        "code.getadblock.com#$#strip-fetch-query-parameter foo"
      ],
      "line": 39
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-contains-visible-text \\\u0027sponsor1\\\u0027 div.sponsor1 span.sponsor1"
      ],
      "line": 40
    },
    {
      "cells": [
        "code.getadblock.com#$#hide-if-contains-visible-text \\\u0027sponsor2\\\u0027 span.sponsor2"
      ],
      "line": 41
    },
    {
      "cells": [
        "shoniko.gitlab.io#$#hide-if-contains-image-hash ffff8f8383ffffff \\\u0027#hash-selector img\\\u0027"
      ],
      "line": 42
    },
    {
      "cells": [
        "shoniko.gitlab.io#$#hide-if-contains-image-hash 0f0f8f07f7ffffff \\\u0027#hash-selector-searchSelector \u003e div\\\u0027"
      ],
      "line": 43
    },
    {
      "cells": [
        "shoniko.gitlab.io#$#hide-if-contains-image-hash 0100010101010101 \\\u0027#hash-selector-searchSelector-selection \u003e div\\\u0027 0 8 740x0x60x60"
      ],
      "line": 44
    },
    {
      "cells": [
        "shoniko.gitlab.io#$#hide-if-contains-image-hash 0100010101010101 \\\u0027#hash-selector-searchSelector-selection-negative \u003e div\\\u0027 0 8 -60x0x60x60"
      ],
      "line": 45
    },
    {
      "cells": [
        "shoniko.gitlab.io#$#hide-if-contains-image-hash 0100010101010101 \\\u0027#hash-selector-searchSelector-selection-maxDistance \u003e div\\\u0027 1 8 740x0x60x60"
      ],
      "line": 46
    },
    {
      "cells": [
        "shoniko.gitlab.io#$#hide-if-contains-image-hash 59ff007f00ff007fffff80c3808390c7ffff910790078087fefbffffffffffff \\\u0027#hash-selector-searchSelector-selection-maxDistance-blockBits \u003e div\\\u0027 0 16 0x0x800x250"
      ],
      "line": 47
    },
    {
      "cells": [
        "shoniko.gitlab.io#$#hide-if-contains-image-hash ffff8f8383c7ffff \\\u0027* img\\\u0027"
      ],
      "line": 48
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "test snippent page",
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20318931300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16604888700,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.testSnippet()"
});
formatter.result({
  "duration": 18813909200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Check the snippet page for adblock functionalitychrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded47.png");
formatter.after({
  "duration": 11874763800,
  "status": "passed"
});
});