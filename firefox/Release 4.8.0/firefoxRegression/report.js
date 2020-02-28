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
  "duration": 40890545500,
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
  "duration": 20469124400,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1282005400,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyEnabledGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2564128900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test enabling AA privacyfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 6213836100,
  "status": "passed"
});
formatter.before({
  "duration": 33085424400,
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
  "duration": 18517457200,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1584818000,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1610947200,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1628906600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test disabling AA privacyfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 6449540200,
  "status": "passed"
});
formatter.before({
  "duration": 31295597200,
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
  "duration": 18742756600,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2056411000,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4430667400,
  "error_message": "java.lang.AssertionError: Acceptable Ads warning message is not displayed or incorrect\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.AAPrivacyStepDefn.disableAA(AAPrivacyStepDefn.java:50)\r\n\tat ✽.Then disable AA(AdBlockAAPrivacyTest.feature:35)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 Test disabling AA from General Page with privacy truned onfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 8017739500,
  "status": "passed"
});
formatter.before({
  "duration": 33256740800,
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
  "duration": 18509973000,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1353799200,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3603474600,
  "error_message": "java.lang.AssertionError: Acceptable Ads was not disabled on Filter list page\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.AAPrivacyStepDefn.disableAA(AAPrivacyStepDefn.java:60)\r\n\tat ✽.Then disable AA(AdBlockAAPrivacyTest.feature:49)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 Test disabling AA from Option Page with privacy truned onfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 6913894200,
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
  "duration": 31715762900,
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
  "duration": 18572705800,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableAdvanceUser()"
});
formatter.result({
  "duration": 1250900100,
  "status": "passed"
});
formatter.match({
  "location": "SubscribeStepDefn.userCustomFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 7992993700,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.userClickOnShowLinks()"
});
formatter.result({
  "duration": 2219620900,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //*[@id\u003d\"custom_filter_lists\"]//a\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CKSGUD9K\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 74.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200226031638, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 20088, moz:profile: C:\\Users\\alyao\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 68989433-28da-43a8-9049-cba4d4821dee\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"custom_filter_lists\"]//a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.betafish.webdriver.OptionsFilterPage.clickFilterLink(OptionsFilterPage.java:207)\r\n\tat com.betafish.stepdefn.AdvanceUserStepDefn.userClickOnShowLinks(AdvanceUserStepDefn.java:66)\r\n\tat ✽.And user click on show links(AdBlockAdvanceUser.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.linksDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test show linksfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 6466084500,
  "status": "passed"
});
formatter.before({
  "duration": 33832244700,
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
  "duration": 18368660400,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableAdvanceUser()"
});
formatter.result({
  "duration": 1289313800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromManuallyEditFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 22936115900,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.addDisabled(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8951381000,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6722792600,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8556276100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 Test disabled filterfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 6795073900,
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
  "duration": 30788748400,
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
  "duration": 18530069600,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlaclistByCSS(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10740830400,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4093652300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 3279387500,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1093538300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5567075800,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adisDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1092850500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 11194159500,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2298437600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User blacklist a given ad by its CSSfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 5586143300,
  "status": "passed"
});
formatter.before({
  "duration": 30495738800,
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
  "duration": 19035752100,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlaclistByDomain(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 13768687700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFiltersAdded(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 12135448900,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 53936192100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 10870664000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFiltersAdded(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 13120958400,
  "error_message": "java.lang.AssertionError: AdBlock in contxt menu is not disabled\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.WhitelistStepDefn.isAdBlockDisabledwithFiltersAdded(WhitelistStepDefn.java:158)\r\n\tat ✽.Then adblock is not disabled and filter is added  manually to edit your filter(AdBlockBlacklist.feature:42)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User blacklist by show ads everywhere exceptfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 6572524500,
  "status": "passed"
});
formatter.before({
  "duration": 30912975900,
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
  "duration": 18938323100,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlackList(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 134097482100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 Check the blacklist wizard looks rightfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 7947252100,
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
  "duration": 30292186400,
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
  "duration": 18443548400,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.sendDCObject()"
});
formatter.result({
  "duration": 14943592400,
  "error_message": "FindFailed: src/test/resources/images/console_text_area_firefox.png: (475x28) in S(0)[0,0 1920x1080] E:Y, T:3.0\n  Line 2782, in file Region.java\n\r\n\tat org.sikuli.script.Region.wait(Region.java:2782)\r\n\tat org.sikuli.script.Region.find(Region.java:2329)\r\n\tat org.sikuli.script.Region.getLocationFromTarget(Region.java:3238)\r\n\tat org.sikuli.script.Region.click(Region.java:3736)\r\n\tat org.sikuli.script.Region.click(Region.java:3721)\r\n\tat com.betafish.webdriver.Console.sendCosoleText(Console.java:200)\r\n\tat com.betafish.stepdefn.DataCollectionStepDefn.sendDCObject(DataCollectionStepDefn.java:33)\r\n\tat ✽.And send Data Collection Object(AdBlockDataCollection.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DataCollectionStepDefn.isEmptyDC()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test Data collection is empty when user does not have it turned onfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 6551768300,
  "status": "passed"
});
formatter.before({
  "duration": 31985534600,
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
  "duration": 18563317800,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.enableDC()"
});
formatter.result({
  "duration": 228405800,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.navigateToSomeWebsites()"
});
formatter.result({
  "duration": 12745476900,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.sendDCObject()"
});
formatter.result({
  "duration": 18262545900,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.isNotEmptyDC()"
});
formatter.result({
  "duration": 5726995900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test Data collection is  working when user  have it turned onfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 9057515200,
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
  "duration": 41452076700,
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
  "duration": 18751804500,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.userClickFeedback()"
});
formatter.result({
  "duration": 4875173100,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.correctLink(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 11249800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test Feedback URL with user not upgraded to Permiumfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 7594553800,
  "status": "passed"
});
formatter.before({
  "duration": 41011073500,
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
  "duration": 18677850900,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 57611780400,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.userClickFeedback()"
});
formatter.result({
  "duration": 4840817600,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.correctLink(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 14435900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test Feedback URL with user IS upgraded to Permiumfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 7444880400,
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
  "duration": 41227943500,
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
  "duration": 18700441100,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 57217851300,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.themesApplied()"
});
formatter.result({
  "duration": 4416921300,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noCTA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 240342300,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.notselected()"
});
formatter.result({
  "duration": 19291900,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noSwap()"
});
formatter.result({
  "duration": 240415700,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noneSelected()"
});
formatter.result({
  "duration": 12544300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test that deafult for image swap is none selectedfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 7477470500,
  "status": "passed"
});
formatter.before({
  "duration": 43496287700,
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
  "duration": 18683864600,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 56373139500,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.imageSwap(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6817589700,
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 0, Size: 0\r\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:657)\r\n\tat java.util.ArrayList.get(ArrayList.java:433)\r\n\tat com.betafish.webdriver.TestPage.checkImageChannel(TestPage.java:311)\r\n\tat com.betafish.stepdefn.ImageSwapStepDefn.imageSwap(ImageSwapStepDefn.java:90)\r\n\tat ✽.When image swap behave correctly(AdBlockImageSwap.feature:21)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test Image swap behaves correctlyfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 6225997400,
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
  "duration": 30783824900,
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
  "duration": 18452192400,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.themesApplied()"
});
formatter.result({
  "duration": 6024687100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test CTA on all pagesfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 6209917400,
  "status": "passed"
});
formatter.before({
  "duration": 31277492500,
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
  "duration": 18637680400,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.openAdblock()"
});
formatter.result({
  "duration": 2419183700,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.noCTA()"
});
formatter.result({
  "duration": 1297203800,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.changeSetting()"
});
formatter.result({
  "duration": 2277179700,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.themesApplied()"
});
formatter.result({
  "duration": 5971734100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test user sees CTA on setting changefirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "duration": 6156331500,
  "status": "passed"
});
formatter.before({
  "duration": 30702215300,
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
  "duration": 18386212300,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.closeSyncCTA()"
});
formatter.result({
  "duration": 6494917400,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.noCTA()"
});
formatter.result({
  "duration": 1773044600,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.changeSetting()"
});
formatter.result({
  "duration": 2257741000,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.noCTA()"
});
formatter.result({
  "duration": 1474532900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 Test user can dismiss CTA permanentlyfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 5911168600,
  "status": "passed"
});
formatter.before({
  "duration": 30594340800,
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
  "duration": 18459597200,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.dismissCTA()"
});
formatter.result({
  "duration": 8950733200,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.goToOptionPage()"
});
formatter.result({
  "duration": 29305950500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 Test Themes CTAfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "duration": 5944470700,
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
  "duration": 30058494400,
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
  "duration": 18936379700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16982868800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 38005100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User gets an error when trying to use rewrite filterfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "duration": 5474887300,
  "status": "passed"
});
formatter.before({
  "duration": 30602797100,
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
  "duration": 18575656800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16942012400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 33776200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User gets an error when adding incorrect filterfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded20.png");
formatter.after({
  "duration": 5576121900,
  "status": "passed"
});
formatter.before({
  "duration": 31821301600,
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
  "duration": 18574935800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17041580800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 31340400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 User gets an error when adding incorrect filterfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded21.png");
formatter.after({
  "duration": 5530080500,
  "status": "passed"
});
formatter.before({
  "duration": 30059238400,
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
  "duration": 18560728900,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16940241000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 25561600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 User gets an error when adding incorrect filterfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded22.png");
formatter.after({
  "duration": 6124559400,
  "status": "passed"
});
formatter.before({
  "duration": 30036678300,
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
  "duration": 18501909800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17010964400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 33423600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-5 User gets an error when adding incorrect filterfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded23.png");
formatter.after({
  "duration": 5838803400,
  "status": "passed"
});
formatter.before({
  "duration": 30584989000,
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
  "duration": 18518613200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16960603600,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 43106700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-6 User gets an error when adding incorrect filterfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded24.png");
formatter.after({
  "duration": 5985470000,
  "status": "passed"
});
formatter.before({
  "duration": 30096594700,
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
  "duration": 18637617500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16911879000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 29079100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-7 User gets an error when adding incorrect filterfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded25.png");
formatter.after({
  "duration": 5651413400,
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
  "duration": 30067070100,
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
  "duration": 18423686900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 11659817800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 27305178400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 3640075100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 25057393700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 11559043200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7522581500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User pause AdBlock on a particular website from pop-upfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded26.png");
formatter.after({
  "duration": 6246206800,
  "status": "passed"
});
formatter.before({
  "duration": 31350432800,
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
  "duration": 18451256600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromContext(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10231193100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 29204831500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 3241801500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 25037493100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 13157216300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7833023500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User pause AdBlock on a particular website from context menufirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded27.png");
formatter.after({
  "duration": 6286343900,
  "status": "passed"
});
formatter.before({
  "duration": 31150436700,
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
  "duration": 18473965299,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6198667700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 32231181100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 5017699801,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 26127084000,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.AdBlockPausedOnAll(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 86534490401,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 User pause AdBlock on a all sites from pop-upfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded28.png");
formatter.after({
  "duration": 6345738101,
  "status": "passed"
});
formatter.before({
  "duration": 32446637899,
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
  "duration": 18827231600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromContextMenu(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5794910900,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 29966532800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 6091805701,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 25996051100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.AdBlockPausedOnAll(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 80891311800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 User pause AdBlock on a all sites from context menufirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded29.png");
formatter.after({
  "duration": 6848904399,
  "status": "passed"
});
formatter.before({
  "duration": 31043072900,
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
  "duration": 18784629600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromContextMenu(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5302311200,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.resumePopup()"
});
formatter.result({
  "duration": 5867346001,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7572252701,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-5 User resume Adblock from pop-up menufirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded30.png");
formatter.after({
  "duration": 6236869101,
  "status": "passed"
});
formatter.before({
  "duration": 31498922500,
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
  "duration": 18755994400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 15559335700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.resumeContext()"
});
formatter.result({
  "duration": 2298472400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 16401303900,
  "error_message": "java.lang.AssertionError: AdBlock in contxt menu is  paused\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.PauseStepDefn.isNotAdBlockPaused(PauseStepDefn.java:89)\r\n\tat ✽.Then adblock is not paused(AdBlockPause.feature:73)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-6 User resume Adblock from context menufirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded31.png");
formatter.after({
  "duration": 8586172100,
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
  "duration": 32064978999,
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
  "duration": 18496924000,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.themesApplied(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 29936406800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test default themes are applied for fresh installfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded32.png");
formatter.after({
  "duration": 6033887099,
  "status": "passed"
});
formatter.before({
  "duration": 31401704900,
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
  "duration": 18457528001,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 57332401200,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.displayTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 39218056600,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.applyTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 127904101801,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test all themes for popup and applying themfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded33.png");
formatter.after({
  "duration": 5317109200,
  "status": "passed"
});
formatter.before({
  "duration": 31239527000,
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
  "duration": 18446357800,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 56748156200,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.displayTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17078480500,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.applyTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 100719898400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test all option page themefirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded34.png");
formatter.after({
  "duration": 5987268700,
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
  "duration": 31083728300,
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
  "duration": 18456528399,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromShowAdsOnwebpage(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 19680460101,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 29209031100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingbyRemovingFilter()"
});
formatter.result({
  "duration": 16680982500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4201760200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8686349300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User whitelist AdBlock on a particular website from customize pagefirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded35.png");
formatter.after({
  "duration": 6540474100,
  "status": "passed"
});
formatter.before({
  "duration": 30895999500,
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
  "duration": 18448016000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromManuallyEditFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 22463782800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled()"
});
formatter.result({
  "duration": 15204800100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 10843805100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3573484700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9209570800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 User whitelist AdBlock on a particular website adding it to manually edit filtersfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded36.png");
formatter.after({
  "duration": 6266600100,
  "status": "passed"
});
formatter.before({
  "duration": 29802734500,
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
  "duration": 18571556100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userWhitelistAllPages(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 127018582900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-4 Check the wizard looks rightfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded37.png");
formatter.after({
  "duration": 9869596300,
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
  "duration": 31739423600,
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
  "duration": 18472879800,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userNotDisplayedwithCountButton(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4095503100,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.enableAdBlockCountIcon()"
});
formatter.result({
  "duration": 9675189200,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userDisplayedwithCountButton(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5703389000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 User disable and enable AdBlock count on iconfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded38.png");
formatter.after({
  "duration": 6181603000,
  "status": "passed"
});
formatter.before({
  "duration": 30700647800,
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
  "duration": 18784533900,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.clickAdBlockCountPopup()"
});
formatter.result({
  "duration": 7990335700,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userNotDisplayedwithCountPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6636081300,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.enableAdBlockCountPopup()"
});
formatter.result({
  "duration": 6220129900,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userDisplayedwithCountPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6855806100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-3 User disable and enable AdBlock count on popupfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded39.png");
formatter.after({
  "duration": 6086978800,
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
  "duration": 30670454100,
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
  "duration": 18737008900,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.navigateSupportTab()"
});
formatter.result({
  "duration": 4238249900,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.userClicksonlinks(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 59799357900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Check all links in support tabfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded40.png");
formatter.after({
  "duration": 6126495400,
  "status": "passed"
});
formatter.before({
  "duration": 34249225800,
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
  "duration": 18656883300,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.navigateSupportTab()"
});
formatter.result({
  "duration": 4166051600,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.submitBugReport()"
});
formatter.result({
  "duration": 15263057700,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.bugreportsubmit()"
});
formatter.result({
  "duration": 47816400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Check that user can submit a bug reportfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded41.png");
formatter.after({
  "duration": 6723346700,
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
  "duration": 30352728400,
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
  "duration": 4247777200,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.userIDInjected()"
});
formatter.result({
  "duration": 18570266500,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.isPopUpHasAllElements()"
});
formatter.result({
  "duration": 179500,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.isUserSubscribedToCorrectFilters()"
});
formatter.result({
  "duration": 5361703500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 User install AdBlock and default subscription are correctfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded42.png");
formatter.after({
  "duration": 6476409800,
  "status": "passed"
});
formatter.before({
  "duration": 30379173200,
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
  "duration": 4144657700,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.userClicksonlinks(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 26311186400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Check all links in installed pagefirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded43.png");
formatter.after({
  "duration": 6400714100,
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
  "duration": 30772828300,
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
  "duration": 18476823700,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.adblockTestPass()"
});
formatter.result({
  "duration": 2796112700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17996312200,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.textishidden()"
});
formatter.result({
  "duration": 1490071200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Check the test page for adblock functionalityfirefox20200228.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded44.png");
formatter.after({
  "duration": 6212297000,
  "status": "passed"
});
});