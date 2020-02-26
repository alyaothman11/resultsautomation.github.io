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
  "duration": 6491922800,
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
  "duration": 21251425000,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 395152100,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyEnabledGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1474523600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test enabling AA privacychrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 12457942100,
  "status": "passed"
});
formatter.before({
  "duration": 4478141200,
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
  "duration": 20138340100,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 454721100,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 174436100,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1233294200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test disabling AA privacychrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 11867459200,
  "status": "passed"
});
formatter.before({
  "duration": 3305362500,
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
  "duration": 20274456000,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 493414900,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2578295100,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1195574900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 Test disabling AA from General Page with privacy truned onchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 11780611600,
  "status": "passed"
});
formatter.before({
  "duration": 4925635300,
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
  "duration": 20116685300,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 369678700,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2475775800,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1193505600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 Test disabling AA from Option Page with privacy truned onchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 11745328600,
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
  "duration": 5409149200,
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
  "duration": 21180424900,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableAdvanceUser()"
});
formatter.result({
  "duration": 1044928600,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableDebugInfo()"
});
formatter.result({
  "duration": 62004800,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.checkDebugInfo()"
});
formatter.result({
  "duration": 15312949700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test Debug info workschrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 10608547500,
  "status": "passed"
});
formatter.before({
  "duration": 4929910100,
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
  "duration": 20089148300,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableAdvanceUser()"
});
formatter.result({
  "duration": 1047369600,
  "status": "passed"
});
formatter.match({
  "location": "SubscribeStepDefn.userCustomFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3529710700,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.userClickOnShowLinks()"
});
formatter.result({
  "duration": 2268371400,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.linksDisplayed()"
});
formatter.result({
  "duration": 1353617800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test show linkschrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 12204422500,
  "status": "passed"
});
formatter.before({
  "duration": 4410476600,
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
  "duration": 20217332100,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableAdvanceUser()"
});
formatter.result({
  "duration": 1049776300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromManuallyEditFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17169338100,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.addDisabled(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8611845700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1391748700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9936301500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 Test disabled filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 12385921200,
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
  "duration": 3311083100,
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
  "duration": 20204209900,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlaclistByCSS(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9383048300,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2462826800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 459002600,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 459452800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4804759400,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adisDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 489208300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 10937484900,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 532863200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User blacklist a given ad by its CSSchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 11920655500,
  "status": "passed"
});
formatter.before({
  "duration": 3286142900,
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
  "duration": 21408632100,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlaclistByDomain(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 12179699800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFiltersAdded(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 12692266300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 35155867500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 10764433500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFiltersAdded(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 11793476700,
  "error_message": "java.lang.AssertionError: AdBlock in contxt menu is not disabled\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.WhitelistStepDefn.isAdBlockDisabledwithFiltersAdded(WhitelistStepDefn.java:158)\r\n\tat ✽.Then adblock is not disabled and filter is added  manually to edit your filter(AdBlockBlacklist.feature:42)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User blacklist by show ads everywhere exceptchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 11994326600,
  "status": "passed"
});
formatter.before({
  "duration": 4698778500,
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
  "duration": 20270252700,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlackList(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 76469775700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 Check the blacklist wizard looks rightchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 11820212200,
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
  "duration": 4359169400,
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
  "duration": 20127313300,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.sendDCObject()"
});
formatter.result({
  "duration": 16172448500,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.isEmptyDC()"
});
formatter.result({
  "duration": 4253486200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test Data collection is empty when user does not have it turned onchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 14545443000,
  "status": "passed"
});
formatter.before({
  "duration": 5463066500,
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
  "duration": 20156617400,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.enableDC()"
});
formatter.result({
  "duration": 49329900,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.navigateToSomeWebsites()"
});
formatter.result({
  "duration": 4880022800,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.sendDCObject()"
});
formatter.result({
  "duration": 16446582700,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.isNotEmptyDC()"
});
formatter.result({
  "duration": 4109514500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test Data collection is  working when user  have it turned onchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 14704191600,
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
  "duration": 5040958900,
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
  "duration": 20130204400,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockDevToolsStepDefn.disableDevTools()"
});
formatter.result({
  "duration": 52779900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1241937900,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockDevToolsStepDefn.devToolsIsDisabled()"
});
formatter.result({
  "duration": 19795425700,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockDevToolsStepDefn.enableDevTools()"
});
formatter.result({
  "duration": 8353830800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1052928300,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockDevToolsStepDefn.devToolsIsenabled()"
});
formatter.result({
  "duration": 9067782200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 Test disable Dev Toolschrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 12445125300,
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
    },
    {
      "line": 3,
      "name": "@RunThis"
    }
  ]
});
formatter.before({
  "duration": 5221444400,
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
  "duration": 20212875200,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.userClickFeedback()"
});
formatter.result({
  "duration": 8152058400,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.correctLink(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 7864600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test Feedback URL with user not upgraded to Permiumchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 12075781600,
  "status": "passed"
});
formatter.before({
  "duration": 4256727100,
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
  "duration": 20011014300,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 55446546900,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.userClickFeedback()"
});
formatter.result({
  "duration": 7051501600,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.correctLink(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8111800,
  "error_message": "java.lang.AssertionError: Expected URL is https://portal.productboard.com/getadblock/5-adblock-extension-premium/tabs/10-under-considerationbut URL is https://portal.productboard.com/getadblock/4-adblock-extension/tabs/7-under-consideration\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.FeedbackStepDefn.correctLink(FeedbackStepDefn.java:41)\r\n\tat ✽.Then user is redirected to correct URL(AdBlockFeedback.feature:19)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test Feedback URL with user IS upgraded to Permiumchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 11745582400,
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
  "duration": 4796397900,
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
  "duration": 20106359200,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 55380497700,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.themesApplied()"
});
formatter.result({
  "duration": 4188993500,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noCTA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 75559300,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.notselected()"
});
formatter.result({
  "duration": 13265800,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noSwap()"
});
formatter.result({
  "duration": 52979900,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noneSelected()"
});
formatter.result({
  "duration": 17980200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test that deafult for image swap is none selectedchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 11826542300,
  "status": "passed"
});
formatter.before({
  "duration": 4415517700,
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
  "duration": 20364192800,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 55416190800,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.imageSwap(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8565631100,
  "error_message": "java.lang.AssertionError: Channel ID does not include channel namecat\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.ImageSwapStepDefn.imageSwap(ImageSwapStepDefn.java:91)\r\n\tat ✽.When image swap behave correctly(AdBlockImageSwap.feature:21)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test Image swap behaves correctlychrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "duration": 11814000500,
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
  "duration": 5123861200,
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
  "duration": 20129036000,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.themesApplied()"
});
formatter.result({
  "duration": 5969557400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test CTA on all pageschrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 11809409100,
  "status": "passed"
});
formatter.before({
  "duration": 5167186100,
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
  "duration": 20118989600,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.openAdblock()"
});
formatter.result({
  "duration": 2492502800,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.noCTA()"
});
formatter.result({
  "duration": 1313660700,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.changeSetting()"
});
formatter.result({
  "duration": 2148349300,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.themesApplied()"
});
formatter.result({
  "duration": 5908725900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test user sees CTA on setting changechrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "duration": 11751191800,
  "status": "passed"
});
formatter.before({
  "duration": 5949032100,
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
  "duration": 20128365300,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.closeSyncCTA()"
});
formatter.result({
  "duration": 6347219600,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.noCTA()"
});
formatter.result({
  "duration": 1363786900,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.changeSetting()"
});
formatter.result({
  "duration": 2123107000,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.noCTA()"
});
formatter.result({
  "duration": 1245184900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 Test user can dismiss CTA permanentlychrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "duration": 11723128600,
  "status": "passed"
});
formatter.before({
  "duration": 4963024400,
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
  "duration": 20420374600,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.dismissCTA()"
});
formatter.result({
  "duration": 7839836800,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.goToOptionPage()"
});
formatter.result({
  "duration": 24964628200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 Test Themes CTAchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded20.png");
formatter.after({
  "duration": 11752249700,
  "status": "passed"
});
formatter.uri("AdBlockManuallyEdit.feature");
formatter.feature({
  "line": 3,
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
    }
  ]
});
formatter.before({
  "duration": 4567738500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Scenario-1 User gets an error when trying to use rewrite filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-1-user-gets-an-error-when-trying-to-use-rewrite-filter",
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
        "/(testpages\\.adblockplus\\.org\\/css\\/testpages\\.css)\\?14$/$rewrite\u003d$1?42"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 11
    },
    {
      "cells": [
        "Invalid filter"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20576187400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16504647000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 35009000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User gets an error when trying to use rewrite filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded21.png");
formatter.after({
  "duration": 11718179800,
  "status": "passed"
});
formatter.before({
  "duration": 4214980300,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "#Note: This check was removed by ABP and if we want it we need to add it on the"
    },
    {
      "line": 14,
      "value": "#UI"
    }
  ],
  "line": 15,
  "name": "Scenario-2 User gets an error when adding incorrect filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-2-user-gets-an-error-when-adding-incorrect-filter",
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
        "/foo/bar.html^$rewrite\u003dsjkdhfladsjhfasl"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 22
    },
    {
      "cells": [
        "Invalid filter"
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
  "duration": 20569513700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16434017800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 37985600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User gets an error when adding incorrect filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded22.png");
formatter.after({
  "duration": 11730091300,
  "status": "passed"
});
formatter.before({
  "duration": 4730101700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Scenario-3 User gets an error when adding incorrect filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-3-user-gets-an-error-when-adding-incorrect-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 27
    },
    {
      "cells": [
        "/foo/bar.html^$rewrite"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 31
    },
    {
      "cells": [
        "Unknown filter option"
      ],
      "line": 32
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20109346900,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16459116400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 39951900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 User gets an error when adding incorrect filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded23.png");
formatter.after({
  "duration": 12253154800,
  "status": "passed"
});
formatter.before({
  "duration": 4518956900,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Scenario-4 User gets an error when adding incorrect filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-4-user-gets-an-error-when-adding-incorrect-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 38
    },
    {
      "cells": [
        "example.com^$csp"
      ],
      "line": 39
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
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
        "Invalid Content Security Policy"
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
  "duration": 20166716300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16403804800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 34699200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 User gets an error when adding incorrect filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded24.png");
formatter.after({
  "duration": 11709050200,
  "status": "passed"
});
formatter.before({
  "duration": 4554564500,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Scenario-5 User gets an error when adding incorrect filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-5-user-gets-an-error-when-adding-incorrect-filter",
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
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 49
    },
    {
      "cells": [
        ",##selector"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 53
    },
    {
      "cells": [
        "Invalid (or empty) domain specified"
      ],
      "line": 54
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20127508100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16454745300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 34670800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-5 User gets an error when adding incorrect filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded25.png");
formatter.after({
  "duration": 11762925700,
  "status": "passed"
});
formatter.before({
  "duration": 4476399100,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Scenario-6 User gets an error when adding incorrect filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-6-user-gets-an-error-when-adding-incorrect-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 57,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 59
    },
    {
      "cells": [
        "t#?#div:-abp-properties(width: 213px)"
      ],
      "line": 60
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 63
    },
    {
      "cells": [
        "No active domain specified for extended element hiding filter"
      ],
      "line": 64
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20124662700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16396887900,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 37750300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-6 User gets an error when adding incorrect filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded26.png");
formatter.after({
  "duration": 12232057000,
  "status": "passed"
});
formatter.before({
  "duration": 4425362400,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Scenario-7 User gets an error when adding incorrect filter",
  "description": "",
  "id": "test-error-handling-of-manually-editing-filters;scenario-7-user-gets-an-error-when-adding-incorrect-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 67,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "user add custom filters",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 69
    },
    {
      "cells": [
        "t#$#log foo"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "user gets an error",
  "rows": [
    {
      "cells": [
        "ERROR"
      ],
      "line": 73
    },
    {
      "cells": [
        "No active domain specified for snippet filter"
      ],
      "line": 74
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20104634800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16439708100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 35441200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-7 User gets an error when adding incorrect filterchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded27.png");
formatter.after({
  "duration": 11799261200,
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
  "duration": 4597245600,
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
  "duration": 20074762300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9510236300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 22769611000,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 461866800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23028103500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6159319400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7596513100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User pause AdBlock on a particular website from pop-upchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded28.png");
formatter.after({
  "duration": 11805571300,
  "status": "passed"
});
formatter.before({
  "duration": 5648084500,
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
  "duration": 20516452300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromContext(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6959004900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23520056100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 616948100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23074932200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6653180200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7551002900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User pause AdBlock on a particular website from context menuchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded29.png");
formatter.after({
  "duration": 11745988100,
  "status": "passed"
});
formatter.before({
  "duration": 3295883700,
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
  "duration": 20424463900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3473274900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 24555941800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 12612500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 22159277600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.AdBlockPausedOnAll(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 50009056100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 User pause AdBlock on a all sites from pop-upchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded30.png");
formatter.after({
  "duration": 11818135400,
  "status": "passed"
});
formatter.before({
  "duration": 4231236800,
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
  "duration": 20404071500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromContextMenu(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3344108200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23868267900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 9840500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 21948580000,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.AdBlockPausedOnAll(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 48915631300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 User pause AdBlock on a all sites from context menuchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded31.png");
formatter.after({
  "duration": 11811302500,
  "status": "passed"
});
formatter.before({
  "duration": 4531517600,
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
  "duration": 20219775700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromContextMenu(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3254428700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.resumePopup()"
});
formatter.result({
  "duration": 3583420600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7500220900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-5 User resume Adblock from pop-up menuchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded32.png");
formatter.after({
  "duration": 11735028700,
  "status": "passed"
});
formatter.before({
  "duration": 4388822000,
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
  "duration": 20302529600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9076682400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.resumeContext()"
});
formatter.result({
  "duration": 1845735600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7421501100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-6 User resume Adblock from context menuchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded33.png");
formatter.after({
  "duration": 11869396100,
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
  "duration": 3350232600,
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
  "duration": 20120006400,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.themesApplied(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 24527499400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test default themes are applied for fresh installchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded34.png");
formatter.after({
  "duration": 11736070800,
  "status": "passed"
});
formatter.before({
  "duration": 4504761100,
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
  "duration": 20132648900,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 55333303000,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.displayTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 37789152200,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.applyTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 46835940700,
  "error_message": "java.lang.AssertionError: The popup theme page is not correct\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.ThemesStepDefn.applyTheme(ThemesStepDefn.java:207)\r\n\tat ✽.And user apply theme(AdBlockThemes.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test all themes for popup and applying themchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded35.png");
formatter.after({
  "duration": 12618398300,
  "status": "passed"
});
formatter.before({
  "duration": 4701860500,
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
  "duration": 20266737900,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 55462911300,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.displayTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16405428600,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.applyTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 89382082500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test all option page themechrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded36.png");
formatter.after({
  "duration": 11933090600,
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
  "duration": 4787445300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Scenario-1 User whitelist a given site from pop-up and then remove it",
  "description": "",
  "id": "test-whitelisting-functionality-which-includes-don\u0027t-run-on-this-page,-don\u0027t-run-on-pages-on-this-site,-show-ads-on-a-webpage-or-a-domain,-manually-edit-your-filters;scenario-1-user-whitelist-a-given-site-from-pop-up-and-then-remove-it",
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
  "name": "user whitelist adblock on website from popup",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 8
    },
    {
      "cells": [
        "https://stackoverflow.com/"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "adblock is disabled and website added to manually edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 11
    },
    {
      "cells": [
        "@@|",
        "stackoverflow.com/|$document"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user navigates to website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 16
    },
    {
      "cells": [
        "https://stackoverflow.com/"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "adblock is disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user navigates away from website and back",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 20
    },
    {
      "cells": [
        "https://stackoverflow.com/"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "adblock is disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20094551100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6162292500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 118700,
  "error_message": "cucumber.runtime.CucumberException: Table is unbalanced: expected 1 column(s) but found 2.\r\n\tat cucumber.api.DataTable.\u003cinit\u003e(DataTable.java:63)\r\n\tat cucumber.runtime.StepDefinitionMatch.tableArgument(StepDefinitionMatch.java:95)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:74)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User whitelist a given site from pop-up and then remove itchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded37.png");
formatter.after({
  "duration": 11753542100,
  "status": "passed"
});
formatter.before({
  "duration": 5315892100,
  "status": "passed"
});
formatter.scenario({
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
  "duration": 20174181500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromShowAdsOnwebpage(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 12211818000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 29699342300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingbyRemovingFilter()"
});
formatter.result({
  "duration": 14885304500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1432766200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9441910600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User whitelist AdBlock on a particular website from customize pagechrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded38.png");
formatter.after({
  "duration": 11882095900,
  "status": "passed"
});
formatter.before({
  "duration": 3343098700,
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
  "duration": 20119654000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromManuallyEditFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17956986300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled()"
});
formatter.result({
  "duration": 14953020800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 10992248600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 72114312000,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:18274\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CKSGUD9K\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.betafish.stepdefn.PauseStepDefn.userNavigatestoWebsite(PauseStepDefn.java:107)\r\n\tat ✽.And user navigates to website(AdBlockWhitelist.feature:48)\r\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:18274\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.betafish.stepdefn.PauseStepDefn.userNavigatestoWebsite(PauseStepDefn.java:107)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\r\n\t... 61 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2174143500,
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:18274\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CKSGUD9K\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.betafish.stepdefn.Hooks.getConsoleLogs(Hooks.java:360)\r\n\tat com.betafish.stepdefn.Hooks.killBrowser(Hooks.java:333)\r\n\tat sun.reflect.GeneratedMethodAccessor25.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:18274\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\r\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\r\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\r\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\r\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\r\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\r\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\r\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\r\n\tat okhttp3.RealCall.execute(RealCall.java:77)\r\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\t... 40 more\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\r\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\r\n\t... 60 more\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 4451450200,
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
  "duration": 21001127200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userWhitelistAllPages(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 81151197800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 Check the wizard looks rightchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded39.png");
formatter.after({
  "duration": 11824498600,
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
  "duration": 4908984900,
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
  "duration": 20064008500,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userNotDisplayedwithCountButton(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2309777700,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.enableAdBlockCountIcon()"
});
formatter.result({
  "duration": 10329518500,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userDisplayedwithCountButton(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4904569700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User disable and enable AdBlock count on iconchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded40.png");
formatter.after({
  "duration": 11753388800,
  "status": "passed"
});
formatter.before({
  "duration": 6440046200,
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
  "duration": 20332877800,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.clickAdBlockCountPopup()"
});
formatter.result({
  "duration": 7354223200,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userNotDisplayedwithCountPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4698922600,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.enableAdBlockCountPopup()"
});
formatter.result({
  "duration": 6751473200,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userDisplayedwithCountPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5555131600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 User disable and enable AdBlock count on popupchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded41.png");
formatter.after({
  "duration": 12424091600,
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
  "duration": 5282974100,
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
  "duration": 20240378300,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.navigateSupportTab()"
});
formatter.result({
  "duration": 4142632900,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.userClicksonlinks(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 51767446900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Check all links in support tabchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded42.png");
formatter.after({
  "duration": 11757990000,
  "status": "passed"
});
formatter.before({
  "duration": 4579877000,
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
  "duration": 20068394700,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.navigateSupportTab()"
});
formatter.result({
  "duration": 4136384000,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.submitBugReport()"
});
formatter.result({
  "duration": 13522210500,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.bugreportsubmit()"
});
formatter.result({
  "duration": 33226800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Check that user can submit a bug reportchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded43.png");
formatter.after({
  "duration": 11807325000,
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
  "duration": 5028619600,
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
  "duration": 4018081100,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.userIDInjected()"
});
formatter.result({
  "duration": 20289728500,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.isPopUpHasAllElements()"
});
formatter.result({
  "duration": 478618200,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.isUserSubscribedToCorrectFilters()"
});
formatter.result({
  "duration": 5489881300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User install AdBlock and default subscription are correctchrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded44.png");
formatter.after({
  "duration": 11666650800,
  "status": "passed"
});
formatter.before({
  "duration": 4291111200,
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
  "duration": 4023688900,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.userClicksonlinks(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 35222734200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Check all links in installed pagechrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded45.png");
formatter.after({
  "duration": 11784447300,
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
  "duration": 3319577900,
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
  "duration": 21005263700,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.adblockTestPass()"
});
formatter.result({
  "duration": 1658012300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17725728900,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.textishidden()"
});
formatter.result({
  "duration": 1081948700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Check the test page for adblock functionalitychrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded46.png");
formatter.after({
  "duration": 11753701900,
  "status": "passed"
});
formatter.before({
  "duration": 4541494400,
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
  "duration": 20138212500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16725610400,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.testSnippet()"
});
formatter.result({
  "duration": 18766970500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Check the snippet page for adblock functionalitychrome20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded47.png");
formatter.after({
  "duration": 11782470100,
  "status": "passed"
});
});