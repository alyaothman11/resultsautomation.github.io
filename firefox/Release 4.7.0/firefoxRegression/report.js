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
  "duration": 24661383000,
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
  "duration": 19514281899,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 274624701,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyEnabledGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1411609900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Test enabling AA privacyfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 5721389800,
  "status": "passed"
});
formatter.before({
  "duration": 21378140000,
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
  "duration": 19090920099,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 402133600,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 269991299,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1123522800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test disabling AA privacyfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 4728975400,
  "status": "passed"
});
formatter.before({
  "duration": 15114269400,
  "error_message": "org.openqa.selenium.WebDriverException: permission denied\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CKSGUD9K\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: FirefoxDriver\nremote stacktrace: \r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat com.betafish.stepdefn.Hooks.setUp(Hooks.java:230)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAA(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2470201,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-CKSGUD9K\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.betafish.stepdefn.Hooks.getConsoleLogs(Hooks.java:386)\r\n\tat com.betafish.stepdefn.Hooks.killBrowser(Hooks.java:333)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 24084640401,
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
  "duration": 19473236299,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.enableAAPrivacy(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 732863800,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.disableAA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3348011500,
  "status": "passed"
});
formatter.match({
  "location": "AAPrivacyStepDefn.isAAPrivacyDisableGeneral(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1285510899,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-4 Test disabling AA from Option Page with privacy truned onfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 4468160299,
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
  "duration": 21668088400,
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
  "duration": 18291018399,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableAdvanceUser()"
});
formatter.result({
  "duration": 1150639601,
  "status": "passed"
});
formatter.match({
  "location": "SubscribeStepDefn.userCustomFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3262316499,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.userClickOnShowLinks()"
});
formatter.result({
  "duration": 1649783601,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.linksDisplayed()"
});
formatter.result({
  "duration": 3283960799,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test show linksfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 4823204200,
  "status": "passed"
});
formatter.before({
  "duration": 22484008801,
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
  "duration": 18222325300,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.enableAdvanceUser()"
});
formatter.result({
  "duration": 1140831000,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromManuallyEditFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 31826431599,
  "status": "passed"
});
formatter.match({
  "location": "AdvanceUserStepDefn.addDisabled(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8193102400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2002840200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8419871000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 Test disabled filterfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 5104334800,
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
  "duration": 22361215801,
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
  "duration": 18421894800,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlaclistByCSS(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9200777500,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3600399199,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 2607079600,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1086869001,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4955295401,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adisDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1009431700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 10883279100,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.adNotDispalyed(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 691792200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 User blacklist a given ad by its CSSfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 5057470600,
  "status": "passed"
});
formatter.before({
  "duration": 21359603101,
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
  "duration": 18436421399,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlaclistByDomain(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 12967297500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFiltersAdded(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 11662621400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 41689202399,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 10751376200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFiltersAdded(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 11741759899,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 User blacklist by show ads everywhere exceptfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 5751570600,
  "status": "passed"
});
formatter.before({
  "duration": 21680362901,
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
  "duration": 18185111901,
  "status": "passed"
});
formatter.match({
  "location": "BlacklistStepDefn.userBlackList(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 80250178701,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 Check the blacklist wizard looks rightfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 6731296899,
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
  "duration": 22639683100,
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
  "duration": 18363970101,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.sendDCObject()"
});
formatter.result({
  "duration": 17465130500,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.isEmptyDC()"
});
formatter.result({
  "duration": 3970011600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Test Data collection is empty when user does not have it turned onfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 4915793700,
  "status": "passed"
});
formatter.before({
  "duration": 22668060301,
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
  "duration": 18282991600,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.enableDC()"
});
formatter.result({
  "duration": 217576201,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.navigateToSomeWebsites()"
});
formatter.result({
  "duration": 6981789000,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.sendDCObject()"
});
formatter.result({
  "duration": 16162497900,
  "status": "passed"
});
formatter.match({
  "location": "DataCollectionStepDefn.isNotEmptyDC()"
});
formatter.result({
  "duration": 4070594400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test Data collection is  working when user  have it turned onfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 5295515200,
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
  "duration": 21314810500,
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
  "duration": 18300951100,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.userClickFeedback()"
});
formatter.result({
  "duration": 4449947000,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.correctLink(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3336099,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Test Feedback URL with user not upgraded to Permiumfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 4784709100,
  "status": "passed"
});
formatter.before({
  "duration": 21824118000,
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
  "duration": 18912837200,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 54365527000,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.userClickFeedback()"
});
formatter.result({
  "duration": 4452984199,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.correctLink(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3006500,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test Feedback URL with user IS upgraded to Permiumfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 4666287301,
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
  "duration": 21595144399,
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
  "duration": 18276690501,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 54203466401,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.themesApplied()"
});
formatter.result({
  "duration": 4194005999,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noCTA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 220252000,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.notselected()"
});
formatter.result({
  "duration": 8921000,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noSwap()"
});
formatter.result({
  "duration": 219477501,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noneSelected()"
});
formatter.result({
  "duration": 8734299,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Test that deafult for image swap is none selectedfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 4354370201,
  "status": "passed"
});
formatter.before({
  "duration": 21988174500,
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
  "duration": 18301465300,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 54183674800,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.imageSwap(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6498827600,
  "error_message": "java.lang.IndexOutOfBoundsException: Index: 0, Size: 0\r\n\tat java.util.ArrayList.rangeCheck(ArrayList.java:657)\r\n\tat java.util.ArrayList.get(ArrayList.java:433)\r\n\tat com.betafish.webdriver.TestPage.checkImageChannel(TestPage.java:311)\r\n\tat com.betafish.stepdefn.ImageSwapStepDefn.imageSwap(ImageSwapStepDefn.java:90)\r\n\tat ✽.When image swap behave correctly(AdBlockImageSwap.feature:21)\r\n",
  "status": "failed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test Image swap behaves correctlyfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 4372605200,
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
  "duration": 21741178200,
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
  "duration": 18201306900,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.themesApplied()"
});
formatter.result({
  "duration": 5534918299,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Test CTA on all pagesfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 4485070000,
  "status": "passed"
});
formatter.before({
  "duration": 21498037899,
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
  "duration": 18575270901,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.openAdblock()"
});
formatter.result({
  "duration": 2173732001,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.noCTA()"
});
formatter.result({
  "duration": 1175653801,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.changeSetting()"
});
formatter.result({
  "duration": 2250183899,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.themesApplied()"
});
formatter.result({
  "duration": 5552115400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test user sees CTA on setting changefirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 4348322500,
  "status": "passed"
});
formatter.before({
  "duration": 21477587900,
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
  "duration": 18216644601,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.closeSyncCTA()"
});
formatter.result({
  "duration": 6385474201,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.noCTA()"
});
formatter.result({
  "duration": 1362717600,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.changeSetting()"
});
formatter.result({
  "duration": 2242493000,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.noCTA()"
});
formatter.result({
  "duration": 1372735400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 Test user can dismiss CTA permanentlyfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "duration": 4524091400,
  "status": "passed"
});
formatter.before({
  "duration": 21430016500,
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
  "duration": 18233322401,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.dismissCTA()"
});
formatter.result({
  "duration": 6946819901,
  "status": "passed"
});
formatter.match({
  "location": "InMarketingStepDefn.goToOptionPage()"
});
formatter.result({
  "duration": 25672847101,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-4 Test Themes CTAfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 4478762300,
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
  "duration": 21667227100,
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
  "duration": 18276014100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16797719501,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 23231400,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 User gets an error when trying to use rewrite filterfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "duration": 4746481700,
  "status": "passed"
});
formatter.before({
  "duration": 23057839399,
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
  "duration": 18231394699,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16771783499,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17268700,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 User gets an error when adding incorrect filterfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "duration": 4730881500,
  "status": "passed"
});
formatter.before({
  "duration": 22033425000,
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
  "duration": 18241338800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16698075900,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 18821199,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 User gets an error when adding incorrect filterfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded20.png");
formatter.after({
  "duration": 4727018301,
  "status": "passed"
});
formatter.before({
  "duration": 21441531399,
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
  "duration": 18302342500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16754516100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 22949100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-4 User gets an error when adding incorrect filterfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded21.png");
formatter.after({
  "duration": 4592019299,
  "status": "passed"
});
formatter.before({
  "duration": 21451635601,
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
  "duration": 19289471300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16779573800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 21396100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-5 User gets an error when adding incorrect filterfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded22.png");
formatter.after({
  "duration": 4673077400,
  "status": "passed"
});
formatter.before({
  "duration": 21440630000,
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
  "duration": 18900638401,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16788391200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 18389800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-6 User gets an error when adding incorrect filterfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded23.png");
formatter.after({
  "duration": 4725800399,
  "status": "passed"
});
formatter.before({
  "duration": 21470244100,
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
  "duration": 18415355200,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16744921101,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userGetErrorCustom(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 22423999,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-7 User gets an error when adding incorrect filterfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded24.png");
formatter.after({
  "duration": 4655281000,
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
  "duration": 21514086600,
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
  "duration": 18246445100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10376606199,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 24888778000,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 2626708300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 24179045600,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6668012701,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7324698200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 User pause AdBlock on a particular website from pop-upfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded25.png");
formatter.after({
  "duration": 4464975399,
  "status": "passed"
});
formatter.before({
  "duration": 21573480900,
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
  "duration": 18589057501,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromContext(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 7489584300,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23962000301,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 3571336301,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 24696902100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatesAwayAndBack(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 6985623599,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7350345999,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 User pause AdBlock on a particular website from context menufirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded26.png");
formatter.after({
  "duration": 4332393600,
  "status": "passed"
});
formatter.before({
  "duration": 21398096999,
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
  "duration": 18293563000,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 3476819400,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 25096698800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "duration": 4290392399,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 23774566199,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.AdBlockPausedOnAll(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 69627227300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 User pause AdBlock on a all sites from pop-upfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded27.png");
formatter.after({
  "duration": 5476562100,
  "status": "passed"
});
formatter.before({
  "duration": 21592436701,
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
  "duration": 18591837599,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromContextMenu(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5072203501,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "duration": 9422407201,
  "error_message": "java.lang.AssertionError: AdBlock is not paused in popup\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat com.betafish.stepdefn.PauseStepDefn.isAdBlockPaused(PauseStepDefn.java:74)\r\n\tat ✽.Then adblock is paused(AdBlockPause.feature:51)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PauseStepDefn.userRefershPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PauseStepDefn.isAdBlockPaused()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PauseStepDefn.AdBlockPausedOnAll(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-4 User pause AdBlock on a all sites from context menufirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded28.png");
formatter.after({
  "duration": 4571568300,
  "status": "passed"
});
formatter.before({
  "duration": 21528086300,
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
  "duration": 18141553800,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseAllSiteFromContextMenu(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5006460500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.resumePopup()"
});
formatter.result({
  "duration": 3619550100,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7343381501,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-5 User resume Adblock from pop-up menufirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded29.png");
formatter.after({
  "duration": 4424657800,
  "status": "passed"
});
formatter.before({
  "duration": 21672903200,
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
  "duration": 18312256700,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userPauseOnSiteFromPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 10408114500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.resumeContext()"
});
formatter.result({
  "duration": 1934030500,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.isNotAdBlockPaused()"
});
formatter.result({
  "duration": 7536709100,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-6 User resume Adblock from context menufirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded30.png");
formatter.after({
  "duration": 5219297201,
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
  "duration": 21611727100,
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
  "duration": 18810866300,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.themesApplied(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 26876646299,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Test default themes are applied for fresh installfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded31.png");
formatter.after({
  "duration": 4579517600,
  "status": "passed"
});
formatter.before({
  "duration": 22156734999,
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
  "duration": 19097006200,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 54218265099,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.displayTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 37659852999,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.applyTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 124093142800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test all themes for popup and applying themfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded32.png");
formatter.after({
  "duration": 4059199999,
  "status": "passed"
});
formatter.before({
  "duration": 21693386199,
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
  "duration": 18123114499,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 54151049300,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.displayTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 16278081300,
  "status": "passed"
});
formatter.match({
  "location": "ThemesStepDefn.applyTheme(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 89684715800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Test all option page themefirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded33.png");
formatter.after({
  "duration": 4108865700,
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
  "duration": 21631269800,
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
  "duration": 18117015400,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromShowAdsOnwebpage(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 12012652300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 28413919300,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingbyRemovingFilter()"
});
formatter.result({
  "duration": 15413308000,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1856361100,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8345941299,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 User whitelist AdBlock on a particular website from customize pagefirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded34.png");
formatter.after({
  "duration": 5915086301,
  "status": "passed"
});
formatter.before({
  "duration": 21708583900,
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
  "duration": 18154980800,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.whitelistFromManuallyEditFilter(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 18024513500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isAdBlockDisabled()"
});
formatter.result({
  "duration": 14878623500,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.resumeAdblockingFromPopup()"
});
formatter.result({
  "duration": 10998000199,
  "status": "passed"
});
formatter.match({
  "location": "PauseStepDefn.userNavigatestoWebsite(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 1309204700,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.isnotAdBlockDisabledwithFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 8414010599,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 User whitelist AdBlock on a particular website adding it to manually edit filtersfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded35.png");
formatter.after({
  "duration": 5197874200,
  "status": "passed"
});
formatter.before({
  "duration": 21489191500,
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
  "duration": 18104098600,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.userWhitelistAllPages(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 90898578300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-4 Check the wizard looks rightfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded36.png");
formatter.after({
  "duration": 6745290400,
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
  "duration": 22915622300,
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
  "duration": 18195736300,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userNotDisplayedwithCountButton(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 2473067000,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.enableAdBlockCountIcon()"
});
formatter.result({
  "duration": 9534081301,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userDisplayedwithCountButton(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4984569600,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 User disable and enable AdBlock count on iconfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded37.png");
formatter.after({
  "duration": 4625786300,
  "status": "passed"
});
formatter.before({
  "duration": 22081113900,
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
  "duration": 18089805800,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.clickAdBlockCountPopup()"
});
formatter.result({
  "duration": 7751607000,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userNotDisplayedwithCountPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 4294870800,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.enableAdBlockCountPopup()"
});
formatter.result({
  "duration": 5989976400,
  "status": "passed"
});
formatter.match({
  "location": "AdBlockStepDefn.userDisplayedwithCountPopup(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 5535835399,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-3 User disable and enable AdBlock count on popupfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded38.png");
formatter.after({
  "duration": 4998353799,
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
  "duration": 21492717900,
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
  "duration": 18601966999,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.navigateSupportTab()"
});
formatter.result({
  "duration": 4133395500,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.userClicksonlinks(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 58156455599,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Check all links in support tabfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded39.png");
formatter.after({
  "duration": 4927374200,
  "status": "passed"
});
formatter.before({
  "duration": 21579325200,
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
  "duration": 18149223900,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.navigateSupportTab()"
});
formatter.result({
  "duration": 4130074300,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.submitBugReport()"
});
formatter.result({
  "duration": 14460186200,
  "status": "passed"
});
formatter.match({
  "location": "SupportStepDefn.bugreportsubmit()"
});
formatter.result({
  "duration": 26749900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Check that user can submit a bug reportfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded40.png");
formatter.after({
  "duration": 4542143400,
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
  "duration": 21708094000,
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
  "duration": 4061668501,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.userIDInjected()"
});
formatter.result({
  "duration": 18378354601,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.isPopUpHasAllElements()"
});
formatter.result({
  "duration": 48801,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.isUserSubscribedToCorrectFilters()"
});
formatter.result({
  "duration": 5255269300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 User install AdBlock and default subscription are correctfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded41.png");
formatter.after({
  "duration": 4483817199,
  "status": "passed"
});
formatter.before({
  "duration": 21651002400,
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
  "duration": 4064992300,
  "status": "passed"
});
formatter.match({
  "location": "InstalltionStepDefn.userClicksonlinks(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 26023138900,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-2 Check all links in installed pagefirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded42.png");
formatter.after({
  "duration": 5053190001,
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
  "duration": 21535306899,
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
  "duration": 18746307100,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.adblockTestPass()"
});
formatter.result({
  "duration": 2092117600,
  "status": "passed"
});
formatter.match({
  "location": "WhitelistStepDefn.customFilters(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 17125581199,
  "status": "passed"
});
formatter.match({
  "location": "TestPageStepDefn.textishidden()"
});
formatter.result({
  "duration": 622106801,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\"C:\\Users\\alyao\\automation\\E2E_QA_automation\\build\\reports\\cucumber\\mp4Result\\Scenario-1 Check the test page for adblock functionalityfirefox20200226.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded43.png");
formatter.after({
  "duration": 4639814000,
  "status": "passed"
});
});