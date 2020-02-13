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
  "duration": 7171317900,
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
  "duration": 25734754199,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 741802201,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyEnabledGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2343907400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test enabling AA privacy20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1159737600,
  "status": "passed"
});
formatter.before({
  "duration": 3668770300,
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
  "duration": 22299754799,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 946937601,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 306380100,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1859688800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test disabling AA privacy20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1135629200,
  "status": "passed"
});
formatter.before({
  "duration": 3651203499,
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
  "duration": 21447543499,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1628635100,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2883488899,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1368489300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 Test disabling AA from General Page with privacy truned on20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1071403500,
  "status": "passed"
});
formatter.before({
  "duration": 3751633000,
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
  "duration": 21740389500,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 550290999,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2362759900,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1368438500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 Test disabling AA from Option Page with privacy truned on20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1129493399,
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
  "duration": 3669805999,
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
  "duration": 23427962999,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableAdvanceUser()"
});
formatter.result({
  "duration": 1098502000,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableDebugInfo()"
});
formatter.result({
  "duration": 91518201,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.checkDebugInfo()"
});
formatter.result({
  "duration": 18502134501,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test Debug info works20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1128933900,
  "status": "passed"
});
formatter.before({
  "duration": 3639644000,
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
  "duration": 21692336700,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableAdvanceUser()"
});
formatter.result({
  "duration": 1098144300,
  "status": "passed"
});
formatter.match({
  "location": "SubscribeStepDefn.userCustomFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 7171615600,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.userClickOnShowLinks()"
});
formatter.result({
  "duration": 3064865400,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.linksDisplayed()"
});
formatter.result({
  "duration": 2657227201,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test show links20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1044555500,
  "status": "passed"
});
formatter.before({
  "duration": 3587313600,
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
  "duration": 22558811100,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableAdvanceUser()"
});
formatter.result({
  "duration": 1092907600,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromManuallyEditFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 20038439700,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.addDisabled(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8948022900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3632325601,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10989779800,
  "error_message": "java.lang.AssertionError: AdBlock in contxt menu is not disabled\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.WhitelistStepDefn.isnotAdBlockDisabledwithFilters(WhitelistStepDefn.java:116)\r\n\tat ✽.Then adblock is not disabled and filter is removed from manually edit your filter(AdBlockAdvanceUser.feature:33)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 Test disabled filter20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1381943900,
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
  "duration": 3651799100,
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
  "duration": 20893914700,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlaclistByCSS(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10844002300,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3841855600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 739929200,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 661998000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5343012900,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adisDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1819266600,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 11225864200,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 828016700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User blacklist a given ad by its CSS20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1078951800,
  "status": "passed"
});
formatter.before({
  "duration": 3606686600,
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
  "duration": 21741357100,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlaclistByDomain(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 13889895800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFiltersAdded(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 13296828800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 40695003700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 10839123700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFiltersAdded(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 13272070900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User blacklist by show ads everywhere except20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1133557000,
  "status": "passed"
});
formatter.before({
  "duration": 3682014400,
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
  "duration": 22258182300,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlackList(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 44644192800,
  "error_message": "java.lang.AssertionError: The wizard on the website http://slashdot.org is not correct\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.BlacklistStepDefn.userBlackList(BlacklistStepDefn.java:68)\r\n\tat ✽.And user clicks on do not run ads on website(AdBlockBlacklist.feature:48)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 Check the blacklist wizard looks right20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1368955700,
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
  "duration": 3611890300,
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
  "duration": 22542201200,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.sendDCObject()"
});
formatter.result({
  "duration": 16883409400,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.isEmptyDC()"
});
formatter.result({
  "duration": 4997873000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test Data collection is empty when user does not have it turned on20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1059902500,
  "status": "passed"
});
formatter.before({
  "duration": 3645177500,
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
  "duration": 23578297200,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.enableDC()"
});
formatter.result({
  "duration": 89227700,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.navigateToSomeWebsites()"
});
formatter.result({
  "duration": 7654704500,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.sendDCObject()"
});
formatter.result({
  "duration": 17700794300,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.isNotEmptyDC()"
});
formatter.result({
  "duration": 4057917400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test Data collection is  working when user  have it turned on20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1080161300,
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
  "duration": 3660146700,
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
  "duration": 23166421500,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockDevToolsStepDefn.disableDevTools()"
});
formatter.result({
  "duration": 69801900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1879747100,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockDevToolsStepDefn.devToolsIsDisabled()"
});
formatter.result({
  "duration": 20433977100,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockDevToolsStepDefn.enableDevTools()"
});
formatter.result({
  "duration": 8617515600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1247288700,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockDevToolsStepDefn.devToolsIsenabled()"
});
formatter.result({
  "duration": 9576029900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 Test disable Dev Tools20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1498151500,
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
  "duration": 5432426900,
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
  "duration": 22820065500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16729740200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 60074200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User gets an error when trying to use rewrite filter20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1069281600,
  "status": "passed"
});
formatter.before({
  "duration": 3706209200,
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
  "duration": 20651155500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17543157700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 56145700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User gets an error when adding incorrect filter20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1046431400,
  "status": "passed"
});
formatter.before({
  "duration": 3700291000,
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
  "duration": 23315994500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16704775500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 65069100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 User gets an error when adding incorrect filter20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 967971100,
  "status": "passed"
});
formatter.before({
  "duration": 3613095300,
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
  "duration": 21906487200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16706484900,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 57998800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 User gets an error when adding incorrect filter20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1079788700,
  "status": "passed"
});
formatter.before({
  "duration": 3725508200,
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
  "duration": 24088395500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16702950300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 63844300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-5 User gets an error when adding incorrect filter20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1135244000,
  "status": "passed"
});
formatter.before({
  "duration": 3803998000,
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
  "duration": 20656394000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16786847400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 45987000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-6 User gets an error when adding incorrect filter20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1029528800,
  "status": "passed"
});
formatter.before({
  "duration": 3747696100,
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
  "duration": 23463038200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16671456700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 50766800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-7 User gets an error when adding incorrect filter20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1049532200,
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
    },
    {
      "line": 3,
      "name": "@RunThis"
    }
  ]
});
formatter.before({
  "duration": 3642516100,
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
  "duration": 23970432400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 11570270600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 25479698100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 1089303800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23110254600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 11195386300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7630583200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User pause AdBlock on a particular website from pop-up20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1152855500,
  "status": "passed"
});
formatter.before({
  "duration": 3621541700,
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
  "duration": 22353246400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromContext(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8030167700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23345359800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 1101487400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 22523300100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 11668800900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7622636300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User pause AdBlock on a particular website from context menu20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1099347100,
  "status": "passed"
});
formatter.before({
  "duration": 3604423900,
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
  "duration": 20884732100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4318768400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 30070437300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 32123200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23701717300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.AdBlockPausedOnAll(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 52030048000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 User pause AdBlock on a all sites from pop-up20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1198481000,
  "status": "passed"
});
formatter.before({
  "duration": 3773196600,
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
  "duration": 23642782500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromContextMenu(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4155511300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 27706653700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 20097700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23068955000,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.AdBlockPausedOnAll(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 53991662700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 User pause AdBlock on a all sites from context menu20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1175176500,
  "status": "passed"
});
formatter.before({
  "duration": 3644594600,
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
  "duration": 23445199600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromContextMenu(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3877109300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.resumePopup()"
});
formatter.result({
  "duration": 4293258300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7957328400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-5 User resume Adblock from pop-up menu20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1042774800,
  "status": "passed"
});
formatter.before({
  "duration": 3793101400,
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
  "duration": 24023395000,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10403728900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.resumeContext()"
});
formatter.result({
  "duration": 2617868000,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 14206783800,
  "error_message": "java.lang.AssertionError: AdBlock in contxt menu is  paused\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.PauseStepDefn.isNotAdBlockPaused(PauseStepDefn.java:89)\r\n\tat ✽.Then adblock is not paused(AdBlockPause.feature:73)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-6 User resume Adblock from context menu20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1361986300,
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
  "duration": 3671848400,
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
  "duration": 26115609600,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.themesApplied(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 28736865400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test default themes are applied for fresh install20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1107582100,
  "status": "passed"
});
formatter.before({
  "duration": 3631969800,
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
  "duration": 25275416000,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 57632622900,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.displayTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9333672300,
  "error_message": "java.lang.AssertionError: The display card theme page is not correct\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.ThemesStepDefn.displayTheme(ThemesStepDefn.java:101)\r\n\tat ✽.And user display the theme(AdBlockThemes.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ThemesStepDefn.applyTheme(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test all themes for popup and applying them20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1141765900,
  "status": "passed"
});
formatter.before({
  "duration": 3625458700,
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
  "duration": 20766222000,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 57569731900,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.displayTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17468208000,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.applyTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 59319237900,
  "error_message": "java.lang.AssertionError: The general page theme page is not correct\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.ThemesStepDefn.applyTheme(ThemesStepDefn.java:168)\r\n\tat ✽.And user apply theme(AdBlockThemes.feature:47)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test all option page theme20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1150103600,
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
  "duration": 3572963300,
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
        "@@|https://stackoverflow.com/|$document"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user navigates to website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 14
    },
    {
      "cells": [
        "https://stackoverflow.com/"
      ],
      "line": 15
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "adblock is disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user navigates away from website and back",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 18
    },
    {
      "cells": [
        "https://stackoverflow.com/"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "adblock is disabled",
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 21749358100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 7531340300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 29764901300,
  "error_message": "java.lang.AssertionError: The website was not addded to the filter list. We should got @@|https://stackoverflow.com/|$document but got @@||stackoverflow.com/^$document\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.WhitelistStepDefn.isAdBlockDisabledwithFilters(WhitelistStepDefn.java:105)\r\n\tat ✽.Then adblock is disabled and website added to manually edit your filter(AdBlockWhitelist.feature:10)\r\n",
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
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User whitelist a given site from pop-up and then remove it20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1198359900,
  "status": "passed"
});
formatter.before({
  "duration": 3747040300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Scenario-2 User whitelist AdBlock on a particular website from customize page",
  "description": "",
  "id": "test-whitelisting-functionality-which-includes-don\u0027t-run-on-this-page,-don\u0027t-run-on-pages-on-this-site,-show-ads-on-a-webpage-or-a-domain,-manually-edit-your-filters;scenario-2-user-whitelist-adblock-on-a-particular-website-from-customize-page",
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
  "name": "user whitelist adblock from customize page show ads on a webpage or domain",
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
  "name": "adblock is disabled and website added to manually edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 29
    },
    {
      "cells": [
        "@@https://www.theguardian.com/international$document"
      ],
      "line": 30
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "user enable Adblocking by removing the filter",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user navigates to website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 33
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 34
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "adblock is not disabled and filter is removed from manually edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 36
    },
    {
      "cells": [
        "@@https://www.theguardian.com/international$document"
      ],
      "line": 37
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 24853193300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromShowAdsOnwebpage(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16296068900,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 33558645000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingbyRemovingFilter()"
});
formatter.result({
  "duration": 16215911600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4050365500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 13091222300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User whitelist AdBlock on a particular website from customize page20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1237729800,
  "status": "passed"
});
formatter.before({
  "duration": 3614428700,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Scenario-3 User whitelist AdBlock on a particular website adding it to manually edit filters",
  "description": "",
  "id": "test-whitelisting-functionality-which-includes-don\u0027t-run-on-this-page,-don\u0027t-run-on-pages-on-this-site,-show-ads-on-a-webpage-or-a-domain,-manually-edit-your-filters;scenario-3-user-whitelist-adblock-on-a-particular-website-adding-it-to-manually-edit-filters",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user whitelist adblock from manually edit filters",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 42
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 43
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "adblock is disabled",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "user enable Adblocking from pop-up",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user navigates to website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 47
    },
    {
      "cells": [
        "https://www.theguardian.com/international"
      ],
      "line": 48
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "adblock is not disabled and filter is removed from manually edit your filter",
  "rows": [
    {
      "cells": [
        "FILTER"
      ],
      "line": 50
    },
    {
      "cells": [
        "@@https://www.theguardian.com/international$document"
      ],
      "line": 51
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 20615584700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromManuallyEditFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 20614568300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled()"
});
formatter.result({
  "duration": 15233841900,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 11199029600,
  "error_message": "FindFailed: src/test/resources/images/enable_adblock_popup.png: (191x24) seen at (1567, 169) with 1.00 in S(0)[0,0 1920x1080] E:Y, T:3.0\n  Line 2782, in file Region.java\n\r\n\tat org.sikuli.script.Region.wait(Region.java:2782)\r\n\tat org.sikuli.script.Region.find(Region.java:2329)\r\n\tat org.sikuli.script.Region.getLocationFromTarget(Region.java:3238)\r\n\tat org.sikuli.script.Region.click(Region.java:3736)\r\n\tat org.sikuli.script.Region.click(Region.java:3721)\r\n\tat com.betafish.webdriver.PopupPage.clickEnableAdblock(PopupPage.java:271)\r\n\tat com.betafish.stepdefn.WhitelistStepDefn.resumeAdblockingFromPopup(WhitelistStepDefn.java:274)\r\n\tat ✽.And user enable Adblocking from pop-up(AdBlockWhitelist.feature:45)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 User whitelist AdBlock on a particular website adding it to manually edit filters20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1545337900,
  "status": "passed"
});
formatter.before({
  "duration": 3704847400,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Scenario-4 Check the wizard looks right",
  "description": "",
  "id": "test-whitelisting-functionality-which-includes-don\u0027t-run-on-this-page,-don\u0027t-run-on-pages-on-this-site,-show-ads-on-a-webpage-or-a-domain,-manually-edit-your-filters;scenario-4-check-the-wizard-looks-right",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "user install AdBlock",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "user whitelist all pages on website",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 56
    },
    {
      "cells": [
        "https://www.thelocal.se/"
      ],
      "line": 57
    },
    {
      "cells": [
        "https://clevelandmagazine.com/"
      ],
      "line": 58
    },
    {
      "cells": [
        "http://www.di.se"
      ],
      "line": 59
    },
    {
      "cells": [
        "http://slashdot.org"
      ],
      "line": 60
    },
    {
      "cells": [
        "http://www.iqshw.com"
      ],
      "line": 61
    },
    {
      "cells": [
        "https://anistar.me"
      ],
      "line": 62
    },
    {
      "cells": [
        "https://www.kbb.com/"
      ],
      "line": 63
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "InstalltionStepDefn.userInstallAdblock()"
});
formatter.result({
  "duration": 21084186400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userWhitelistAllPages(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 100656034100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 Check the wizard looks right20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1165863500,
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
  "duration": 3618939300,
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
  "duration": 22320562600,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userNotDisplayedwithCountButton(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4468623100,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.enableAdBlockCountIcon()"
});
formatter.result({
  "duration": 10659497000,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userDisplayedwithCountButton(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6403339600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User disable and enable AdBlock count on icon20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1258578300,
  "status": "passed"
});
formatter.before({
  "duration": 3766692000,
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
  "duration": 21954845500,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.clickAdBlockCountPopup()"
});
formatter.result({
  "duration": 7833630700,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userNotDisplayedwithCountPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5367321400,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.enableAdBlockCountPopup()"
});
formatter.result({
  "duration": 7041935100,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userDisplayedwithCountPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6731612000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 User disable and enable AdBlock count on popup20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1193950700,
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
  "duration": 3661878100,
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
  "duration": 26357876500,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.navigateSupportTab()"
});
formatter.result({
  "duration": 4250746200,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.userClicksonlinks(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 52875288500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Check all links in support tab20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1074470200,
  "status": "passed"
});
formatter.before({
  "duration": 3649471900,
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
  "duration": 22439248300,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.navigateSupportTab()"
});
formatter.result({
  "duration": 4280111700,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.submitBugReport()"
});
formatter.result({
  "duration": 14730877500,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.bugreportsubmit()"
});
formatter.result({
  "duration": 45699700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Check that user can submit a bug report20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1041881600,
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
  "duration": 3603939200,
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
  "duration": 8895248500,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.userIDInjected()"
});
formatter.result({
  "duration": 19550674200,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.isPopUpHasAllElements()"
});
formatter.result({
  "duration": 881077000,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.isUserSubscribedToCorrectFilters()"
});
formatter.result({
  "duration": 5903016200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User install AdBlock and default subscription are correct20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1094103600,
  "status": "passed"
});
formatter.before({
  "duration": 3659107800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Scenario-2 Check all links in installed page",
  "description": "",
  "id": "test-fresh-installtion;scenario-2-check-all-links-in-installed-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@RunThis"
    }
  ]
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
  "duration": 5168555900,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.userClicksonlinks(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 36309303600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Check all links in installed page20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1085955600,
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
  "duration": 3624644900,
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
  "duration": 24023136400,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.adblockTestPass()"
});
formatter.result({
  "duration": 3103062000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 18341243800,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.textishidden()"
});
formatter.result({
  "duration": 2263851100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Check the test page for adblock functionality20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1076855100,
  "status": "passed"
});
formatter.before({
  "duration": 3654273500,
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
  "duration": 20849978600,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17258453000,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.testSnippet()"
});
formatter.result({
  "duration": 20605205900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Check the snippet page for adblock functionality20200213.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.after({
  "duration": 1083150500,
  "status": "passed"
});
});