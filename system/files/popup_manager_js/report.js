__report = {"info":{"file":"apps/system/js/popup_manager.js","fileShort":"popup_manager.js","fileSafe":"popup_manager_js","link":"files/popup_manager_js/index.html"},"complexity":{"aggregate":{"line":3,"complexity":{"sloc":{"physical":320,"logical":210},"cyclomatic":36,"halstead":{"operators":{"distinct":26,"total":611,"identifiers":["__stripped__"]},"operands":{"distinct":159,"total":682,"identifiers":["__stripped__"]},"length":1293,"vocabulary":185,"difficulty":55.761006289308185,"volume":9738.076228447591,"effort":543004.9298202287,"bugs":3.2460254094825305,"time":30166.94054556826}}},"functions":[{"name":"pm_init","line":31,"complexity":{"sloc":{"physical":14,"logical":12},"cyclomatic":1,"halstead":{"operators":{"distinct":3,"total":29,"identifiers":["__stripped__"]},"operands":{"distinct":19,"total":52,"identifiers":["__stripped__"]},"length":81,"vocabulary":22,"difficulty":4.105263157894737,"volume":361.2139611096211,"effort":1482.8783666605498,"bugs":0.12040465370320703,"time":82.38213148114166}}},{"name":"pm_open","line":46,"complexity":{"sloc":{"physical":35,"logical":19},"cyclomatic":3,"halstead":{"operators":{"distinct":8,"total":60,"identifiers":["__stripped__"]},"operands":{"distinct":34,"total":79,"identifiers":["__stripped__"]},"length":139,"vocabulary":42,"difficulty":9.294117647058824,"volume":749.5321217662478,"effort":6966.239719945127,"bugs":0.24984404058874926,"time":387.0133177747293}}},{"name":"pm_close","line":82,"complexity":{"sloc":{"physical":20,"logical":6},"cyclomatic":3,"halstead":{"operators":{"distinct":12,"total":24,"identifiers":["__stripped__"]},"operands":{"distinct":17,"total":25,"identifiers":["__stripped__"]},"length":49,"vocabulary":29,"difficulty":8.823529411764707,"volume":238.04106876125107,"effort":2100.362371422804,"bugs":0.07934702292041702,"time":116.68679841237798}}},{"name":"wait","line":88,"complexity":{"sloc":{"physical":7,"logical":5},"cyclomatic":1,"halstead":{"operators":{"distinct":3,"total":21,"identifiers":["__stripped__"]},"operands":{"distinct":15,"total":27,"identifiers":["__stripped__"]},"length":48,"vocabulary":18,"difficulty":2.7,"volume":200.15640006923098,"effort":540.4222801869237,"bugs":0.066718800023077,"time":30.02346001038465}}},{"name":"pm_backHandling","line":103,"complexity":{"sloc":{"physical":6,"logical":3},"cyclomatic":2,"halstead":{"operators":{"distinct":5,"total":8,"identifiers":["__stripped__"]},"operands":{"distinct":4,"total":6,"identifiers":["__stripped__"]},"length":14,"vocabulary":9,"difficulty":3.75,"volume":44.37895002019238,"effort":166.4210625757214,"bugs":0.014792983340064125,"time":9.245614587540079}}},{"name":"pm_isVisible","line":110,"complexity":{"sloc":{"physical":3,"logical":1},"cyclomatic":1,"halstead":{"operators":{"distinct":3,"total":5,"identifiers":["__stripped__"]},"operands":{"distinct":4,"total":5,"identifiers":["__stripped__"]},"length":10,"vocabulary":7,"difficulty":1.875,"volume":28.07354922057604,"effort":52.63790478858007,"bugs":0.009357849740192013,"time":2.924328043810004}}},{"name":"pm_setHeight","line":114,"complexity":{"sloc":{"physical":4,"logical":2},"cyclomatic":2,"halstead":{"operators":{"distinct":5,"total":8,"identifiers":["__stripped__"]},"operands":{"distinct":6,"total":9,"identifiers":["__stripped__"]},"length":17,"vocabulary":11,"difficulty":3.75,"volume":58.81033751683406,"effort":220.53876568812774,"bugs":0.019603445838944685,"time":12.25215364934043}}},{"name":"pm_handleEvent","line":119,"complexity":{"sloc":{"physical":111,"logical":80},"cyclomatic":23,"halstead":{"operators":{"distinct":18,"total":198,"identifiers":["__stripped__"]},"operands":{"distinct":71,"total":195,"identifiers":["__stripped__"]},"length":393,"vocabulary":89,"difficulty":24.718309859154928,"volume":2544.9632383697945,"effort":62907.189906182946,"bugs":0.8483210794565982,"time":3494.8438836768305}}},{"name":"pm_showError","line":231,"complexity":{"sloc":{"physical":23,"logical":20},"cyclomatic":4,"halstead":{"operators":{"distinct":11,"total":68,"identifiers":["__stripped__"]},"operands":{"distinct":30,"total":75,"identifiers":["__stripped__"]},"length":143,"vocabulary":41,"difficulty":13.75,"volume":766.129936660386,"effort":10534.286629080307,"bugs":0.255376645553462,"time":585.238146060017}}},{"name":"pm_getOpenedOriginOpener","line":258,"complexity":{"sloc":{"physical":12,"logical":6},"cyclomatic":2,"halstead":{"operators":{"distinct":10,"total":31,"identifiers":["__stripped__"]},"operands":{"distinct":13,"total":31,"identifiers":["__stripped__"]},"length":62,"vocabulary":23,"difficulty":11.923076923076923,"volume":280.4608412755348,"effort":3343.9561844390687,"bugs":0.09348694709184494,"time":185.77534357994827}}},{"name":"pm_getTitleFromUrl","line":271,"complexity":{"sloc":{"physical":13,"logical":7},"cyclomatic":2,"halstead":{"operators":{"distinct":10,"total":35,"identifiers":["__stripped__"]},"operands":{"distinct":16,"total":34,"identifiers":["__stripped__"]},"length":69,"vocabulary":26,"difficulty":10.625,"volume":324.3303405517354,"effort":3446.0098683621886,"bugs":0.10811011351724513,"time":191.44499268678825}}},{"name":"pm__getOriginObject","line":285,"complexity":{"sloc":{"physical":10,"logical":6},"cyclomatic":1,"halstead":{"operators":{"distinct":7,"total":14,"identifiers":["__stripped__"]},"operands":{"distinct":10,"total":18,"identifiers":["__stripped__"]},"length":32,"vocabulary":17,"difficulty":6.3,"volume":130.79881092001088,"effort":824.0325087960686,"bugs":0.04359960364000363,"time":45.77958382200381}}},{"name":"pm_getPopupFromOrigin","line":296,"complexity":{"sloc":{"physical":3,"logical":1},"cyclomatic":1,"halstead":{"operators":{"distinct":2,"total":3,"identifiers":["__stripped__"]},"operands":{"distinct":3,"total":4,"identifiers":["__stripped__"]},"length":7,"vocabulary":5,"difficulty":1.3333333333333333,"volume":16.253496664211536,"effort":21.67132888561538,"bugs":0.005417832221403845,"time":1.2039627158675212}}},{"name":"pm_show","line":300,"complexity":{"sloc":{"physical":12,"logical":7},"cyclomatic":2,"halstead":{"operators":{"distinct":7,"total":26,"identifiers":["__stripped__"]},"operands":{"distinct":16,"total":27,"identifiers":["__stripped__"]},"length":53,"vocabulary":23,"difficulty":5.90625,"volume":239.7487836710217,"effort":1416.0162535569718,"bugs":0.0799162612236739,"time":78.66756964205399}}},{"name":"pm_hide","line":313,"complexity":{"sloc":{"physical":7,"logical":4},"cyclomatic":2,"halstead":{"operators":{"distinct":6,"total":13,"identifiers":["__stripped__"]},"operands":{"distinct":9,"total":14,"identifiers":["__stripped__"]},"length":27,"vocabulary":15,"difficulty":4.666666666666667,"volume":105.48604608143,"effort":492.2682150466734,"bugs":0.03516201536047667,"time":27.348234169259634}}}],"maintainability":58.85269375868798,"module":"popup_manager.js"},"jshint":{"messages":[{"severity":"error","line":3,"column":1,"message":"Use the function form of \"use strict\".","source":"Use the function form of \"use strict\"."},{"severity":"error","line":83,"column":17,"message":"Confusing use of '!'.","source":"Confusing use of '{a}'."},{"severity":"error","line":111,"column":53,"message":"Use '!==' to compare with 'null'.","source":"Use '{a}' to compare with '{b}'."},{"severity":"error","line":11,"column":13,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":13,"column":12,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":15,"column":19,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":17,"column":14,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":19,"column":11,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":21,"column":16,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":23,"column":15,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":25,"column":17,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":27,"column":16,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":29,"column":14,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":32,"column":18,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":33,"column":5,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":34,"column":5,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":35,"column":5,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":36,"column":5,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":37,"column":5,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":38,"column":5,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":39,"column":5,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":40,"column":5,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":57,"column":20,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":57,"column":41,"message":"'StatusBar' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":64,"column":25,"message":"'name' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":70,"column":9,"message":"'WindowManager' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":100,"column":5,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":150,"column":13,"message":"'WindowManager' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":157,"column":55,"message":"'popup' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":177,"column":15,"message":"'MozActivity' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":198,"column":24,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":198,"column":45,"message":"'StatusBar' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":221,"column":30,"message":"'KeyboardManager' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":222,"column":24,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":222,"column":45,"message":"'StatusBar' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":226,"column":24,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":226,"column":45,"message":"'StatusBar' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":239,"column":13,"message":"'navigator' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":241,"column":9,"message":"'AirplaneMode' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":245,"column":17,"message":"'navigator' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":272,"column":15,"message":"'WindowManager' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":286,"column":18,"message":"'document' is not defined.","source":"'{a}' is not defined."}]}}