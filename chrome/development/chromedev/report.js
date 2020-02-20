$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdBlockFeedback.feature");
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
  "duration": 5702007100,
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
  "duration": 22163091500,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.userClickFeedback()"
});
formatter.result({
  "duration": 9068233600,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.correctLink(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 11310800,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test Feedback URL with user not upgraded to Permiumchrome20200220.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 12664906800,
  "status": "passed"
});
formatter.before({
  "duration": 3331904100,
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
  "duration": 21194642300,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 55866494700,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.userClickFeedback()"
});
formatter.result({
  "duration": 8231652500,
  "status": "passed"
});
formatter.match({
  "location": "FeedbackStepDefn.correctLink(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 9745300,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test Feedback URL with user IS upgraded to Permiumchrome20200220.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 11878068600,
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
  "duration": 3292241100,
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
  "duration": 20691809200,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 55785729700,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.themesApplied()"
});
formatter.result({
  "duration": 4203532400,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noCTA(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 70317800,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.notselected()"
});
formatter.result({
  "duration": 14914800,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noSwap()"
});
formatter.result({
  "duration": 51059800,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.noneSelected()"
});
formatter.result({
  "duration": 19599200,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-1 Test that deafult for image swap is none selectedchrome20200220.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 11885340400,
  "status": "passed"
});
formatter.before({
  "duration": 3316210900,
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
  "duration": 22425641700,
  "status": "passed"
});
formatter.match({
  "location": "PingDataStepDefn.enableMAB()"
});
formatter.result({
  "duration": 55849145500,
  "status": "passed"
});
formatter.match({
  "location": "ImageSwapStepDefn.imageSwap(String,String\u003e\u003e)"
});
formatter.result({
  "duration": 56980371000,
  "status": "passed"
});
formatter.embedding("text/html", "\u003cvideo width\u003d\"100%\" height\u003d\"500\" controls\u003e\u003csource src\u003d\".\\mp4Result\\Scenario-2 Test Image swap behaves correctlychrome20200220.mp4\" type\u003d\"video/mp4\"\u003eYour browser does not support the video tag.\u003c/video\u003e");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 11909182100,
  "status": "passed"
});
});