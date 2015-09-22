angular.module("ysSmsVerification.templates").run(["$templateCache", function($templateCache) {$templateCache.put("mobile-number.html","<form class=\"form-horizontal\" name=\"mobileNumberForm\" >\n\n    <div class=\"form-group form-group-lg has-feedback\">\n        <label for=\"inputEmail3\" class=\"col-sm-3 control-label\">{{ \'phone_number\' | translate }}</label>\n        <div class=\"col-sm-5\">\n\n            <div ng-if=\"fail\" class=\"alert alert-danger text-center\">\n                {{ \'something_went_wrong\' | translate }}\n            </div>\n\n            <div class=\"form-group form-group-lg has-feedback\" show-errors>\n                <div class=\"col-sm-12\">\n                    <input class=\'form-control input-lg\' type=\"text\" utils-script=\"{{ utilsScript }}\" \n                    preferred-countries=\"ps, sa,jo,kw,qa,bh,uae,\"\n                     responsive-dropdown=\'true\' default-country=\"ps\" international-phone-number name=\"phoneNumber\" ng-model=\"phoneNumber\" ng-required=\"true\" />\n                    <span style=\"top:15px;right: 21px;\" ng-show=\"mobileNumberForm.phoneNumber.$valid\" class=\"fa fa-check-circle text-success form-control-feedback\" aria-hidden=\"true\"></span>\n                </div>\n            </div>\n            <div class=\"form-group form-group-lg\">\n                <div class=\"col-sm-12\">\n                    <button ng-disabled=\"submittingPhone\" type=\'buttom\' ng-click=\"submitNumber(phoneNumber)\" class=\'btn btn-primary btn-block btn-lg\'  analytics-on=\"click\" analytics-event=\"Send Me SMS button\" analytics-category=\"Checkout\">\n                        <span> {{ \'send_me_sms\' | translate }} </span>\n                        <span ng-if=\"submittingPhone\"> <i class=\"fa fa-spinner fa-spin\"></i> \n                        </span>\n                    </button>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <p class=\"help-block\">\n                <strong>{{ \'send_you_verification\' | translate }}</strong>\n                <br />{{ \'code_to_confirm\' | translate }}</p>\n        </div>\n    </div>\n</form>\n");
$templateCache.put("sms-verification.html","\n<mobile-number>\n</mobile-number>\n\n<verification-code>\n</verification-code>\n\n<verification-success>\n</verification-success>\n");
$templateCache.put("verification-code.html","<form class=\"form-horizontal\" name=\"verificationCodeForm\">\n    <div class=\"form-group form-group-lg\">\n        <label for=\"inputEmail3\" class=\"col-sm-3 control-label\">{{ \'verification_code\' | translate }}</label>\n        <div class=\"col-sm-5\">\n            <div class=\"form-group form-group-lg has-feedback\" show-errors>\n                <div class=\"col-sm-12\">\n                    <div class=\"input-group\">\n                        <input id=\"verification-code\" class=\'form-control\' type=\'text\' name=\"code\" ng-model=\'code\' ng-minlength=\"5\" ng-maxlength=\"7\" ng-required=\'true\' placeholder=\'_______ \' style=\"font-size: 30px;height: 70px;letter-spacing: 7px;font-family: monospace;text-align: center; color:black; \" />\n                        <span class=\"input-group-btn\">\n                            <a class=\"btn btn-default\" type=\"button\" style=\"padding: 14px 24px;font-size: 28px;color:black;\" disabled><i class=\"fa fa-lock\"></i>\n                            </a>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <button type=\"button\" ng-click=\"submitCode(code,$event)\"  class=\"btn btn-block book-btn-2 has-label\" ng-disabled=\"booking\">\n                        <span class=\"the-label\">\n                            <i class=\"fa fa-{{ booking ? \'spin fa-spinner\' : \'lock\' }}\"></i>\n                        </span>\n                        <span>{{ \'complete_booking\' | translate }}</span>\n                    </button>\n                    <br>\n                    <p class=\"text-center\" style=\"margin-top:10px;\">\n                        {{ \'agreement_1\' | translate }}\n                        <a target=\"_blank\" href=\"https://www.yamsafer.me/en/info/terms-of-use\"> {{ \'terms\' | translate }}</a> & <a data-placement=\"top\" data-trigger=\"click\" data-template=\"demo.html\" data-auto-close=\"1\" bs-popover ng-click=\"\">{{ \'cancelation_policy\' | translate }}</a> {{ \'agreement_2\' | translate }}\n\n                    </p>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div ng-if=\"!error\">\n                <p class=\"help-block\" ng-if=\"!error\">\n                    {{ \'code_being_delivered\' | translate }}\n                    <br>{{ \'minutes_note\' | translate }}\n                    <br>\n                    <strong>\n                    <small>\n                        <timer autostart=\"false\" countdown=\"120\" max-time-unit=\"\'minute\'\" interval=\"1000\" finish-callback=\"timerFinished()\">\n                        {{mminutes}} {{ \'minute\' | translate  }} {{minutesS}}, {{sseconds}} {{ \'second\' | translate }} {{secondsS}}</timer> <i class=\"fa fa-clock-o\"></i> {{ \'passed\' | translate }}.\n                    </small>\n                </strong>\n                    <span class=\"text-center\" ng-show=\"timeout\">\n                    {{ \'did_not_receive_code\' | translate }} <br> <a ng-click=\"tryAgain()\" href=\"\"> {{ \'try_different_number\' | translate }} </a>\n                </span>\n                </p>\n            </div>\n            <div ng-if=\"error\">\n                <p class=\"help-block text-danger\">\n                    <strong>\n                         <i class=\"fa fa-warning fa-2x pull-left\"></i> {{ error.message }}\n                         <hr>\n                         {{ \'did_not_receive_code\' | translate }} <a ng-click=\"tryAgain()\" href=\"\">{{ \'try_different_number\' | translate }} </a>\n                    </strong>\n                </p>\n            </div>\n        </div>\n    </div>\n</form>\n\n\n<script type=\"text/ng-template\" id=\"demo.html\">\n    <div class=\"popover\" style=\"min-width:452px !important;\">\n        <div class=\"arrow\"></div>\n        <h3 class=\"popover-title\"> {{ \'cancellation_policy\' | translate }} </h3>\n        <div class=\"popover-content\">\n            <div class=\"panel-group\" bs-collapse data-animation=\"false\">\n                <div class=\"panel panel-default\" ng-repeat=\"room in order.rooms\">\n                    <div class=\"panel-heading\">\n                        <h4 class=\"panel-title\">\n                            <a href=\"\" bs-collapse-toggle ng-bind-html=\"room.roomName\">                            \n                            </a>\n                      </h4>\n                    </div>\n                    <div class=\"panel-collapse\" bs-collapse-target>\n                        <div class=\"panel-body\" ng-bind-html=\"room.cancellation_policy\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n        </div>\n    </div>\n\n</script>\n");}]);