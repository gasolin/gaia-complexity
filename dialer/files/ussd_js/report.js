__report = {"info":{"file":"apps/communications/dialer/js/ussd.js","fileShort":"ussd.js","fileSafe":"ussd_js","link":"files/ussd_js/index.html"},"complexity":{"aggregate":{"line":1,"complexity":{"sloc":{"physical":283,"logical":184},"cyclomatic":51,"halstead":{"operators":{"distinct":31,"total":472,"identifiers":["__stripped__"]},"operands":{"distinct":139,"total":541,"identifiers":["__stripped__"]},"length":1013,"vocabulary":170,"difficulty":60.3273381294964,"volume":7505.713018307492,"effort":452799.6871583991,"bugs":2.5019043394358307,"time":25155.538175466616}}},"functions":[{"name":"um_init","line":20,"complexity":{"sloc":{"physical":16,"logical":8},"cyclomatic":3,"halstead":{"operators":{"distinct":5,"total":30,"identifiers":["__stripped__"]},"operands":{"distinct":19,"total":38,"identifiers":["__stripped__"]},"length":68,"vocabulary":24,"difficulty":5,"volume":311.7774500490387,"effort":1558.8872502451934,"bugs":0.1039258166830129,"time":86.60484723584408}}},{"name":"um_send","line":37,"complexity":{"sloc":{"physical":10,"logical":6},"cyclomatic":3,"halstead":{"operators":{"distinct":6,"total":24,"identifiers":["__stripped__"]},"operands":{"distinct":13,"total":26,"identifiers":["__stripped__"]},"length":50,"vocabulary":19,"difficulty":6,"volume":212.39637567217926,"effort":1274.3782540330756,"bugs":0.07079879189072642,"time":70.79879189072642}}},{"name":"um_notifySuccess","line":48,"complexity":{"sloc":{"physical":80,"logical":11},"cyclomatic":4,"halstead":{"operators":{"distinct":13,"total":35,"identifiers":["__stripped__"]},"operands":{"distinct":20,"total":38,"identifiers":["__stripped__"]},"length":73,"vocabulary":33,"difficulty":12.35,"volume":368.2407707131671,"effort":4547.773518307613,"bugs":0.1227469235710557,"time":252.65408435042295}}},{"name":"processCf","line":52,"complexity":{"sloc":{"physical":56,"logical":53},"cyclomatic":21,"halstead":{"operators":{"distinct":24,"total":154,"identifiers":["__stripped__"]},"operands":{"distinct":42,"total":169,"identifiers":["__stripped__"]},"length":323,"vocabulary":66,"difficulty":48.285714285714285,"volume":1952.3393005527805,"effort":94270.09765526283,"bugs":0.6507797668509269,"time":5237.227647514602}}},{"name":"um_notifyError","line":129,"complexity":{"sloc":{"physical":7,"logical":4},"cyclomatic":1,"halstead":{"operators":{"distinct":6,"total":10,"identifiers":["__stripped__"]},"operands":{"distinct":10,"total":13,"identifiers":["__stripped__"]},"length":23,"vocabulary":16,"difficulty":3.9000000000000004,"volume":92,"effort":358.8,"bugs":0.030666666666666665,"time":19.933333333333334}}},{"name":"um_openUI","line":137,"complexity":{"sloc":{"physical":40,"logical":4},"cyclomatic":2,"halstead":{"operators":{"distinct":5,"total":8,"identifiers":["__stripped__"]},"operands":{"distinct":7,"total":8,"identifiers":["__stripped__"]},"length":16,"vocabulary":12,"difficulty":2.8571428571428568,"volume":57.359400011538504,"effort":163.88400003296712,"bugs":0.01911980000384617,"time":9.104666668498174}}},{"name":"localized","line":142,"complexity":{"sloc":{"physical":34,"logical":13},"cyclomatic":4,"halstead":{"operators":{"distinct":11,"total":35,"identifiers":["__stripped__"]},"operands":{"distinct":22,"total":44,"identifiers":["__stripped__"]},"length":79,"vocabulary":33,"difficulty":11,"volume":398.5071354293178,"effort":4383.578489722496,"bugs":0.1328357118097726,"time":243.53213831791643}}},{"name":"um_uiReady","line":178,"complexity":{"sloc":{"physical":9,"logical":6},"cyclomatic":2,"halstead":{"operators":{"distinct":5,"total":14,"identifiers":["__stripped__"]},"operands":{"distinct":10,"total":16,"identifiers":["__stripped__"]},"length":30,"vocabulary":15,"difficulty":4,"volume":117.20671786825557,"effort":468.82687147302227,"bugs":0.03906890595608519,"time":26.045937304056793}}},{"name":"um_notifyPending","line":188,"complexity":{"sloc":{"physical":5,"logical":2},"cyclomatic":2,"halstead":{"operators":{"distinct":3,"total":5,"identifiers":["__stripped__"]},"operands":{"distinct":3,"total":6,"identifiers":["__stripped__"]},"length":11,"vocabulary":6,"difficulty":3,"volume":28.43458750793272,"effort":85.30376252379816,"bugs":0.009478195835977574,"time":4.739097917988786}}},{"name":"um_notifyLast","line":194,"complexity":{"sloc":{"physical":5,"logical":2},"cyclomatic":2,"halstead":{"operators":{"distinct":3,"total":5,"identifiers":["__stripped__"]},"operands":{"distinct":3,"total":6,"identifiers":["__stripped__"]},"length":11,"vocabulary":6,"difficulty":3,"volume":28.43458750793272,"effort":85.30376252379816,"bugs":0.009478195835977574,"time":4.739097917988786}}},{"name":"um_isUSSD","line":200,"complexity":{"sloc":{"physical":4,"logical":1},"cyclomatic":1,"halstead":{"operators":{"distinct":5,"total":6,"identifiers":["__stripped__"]},"operands":{"distinct":5,"total":7,"identifiers":["__stripped__"]},"length":13,"vocabulary":10,"difficulty":3.5,"volume":43.18506523353572,"effort":151.147728317375,"bugs":0.014395021744511906,"time":8.397096017631945}}},{"name":"um_postMessage","line":205,"complexity":{"sloc":{"physical":11,"logical":7},"cyclomatic":3,"halstead":{"operators":{"distinct":7,"total":19,"identifiers":["__stripped__"]},"operands":{"distinct":11,"total":24,"identifiers":["__stripped__"]},"length":43,"vocabulary":18,"difficulty":7.636363636363636,"volume":179.30677506201943,"effort":1369.2517368372392,"bugs":0.059768925020673144,"time":76.06954093540217}}},{"name":"um_closeUI","line":217,"complexity":{"sloc":{"physical":7,"logical":5},"cyclomatic":2,"halstead":{"operators":{"distinct":5,"total":12,"identifiers":["__stripped__"]},"operands":{"distinct":9,"total":14,"identifiers":["__stripped__"]},"length":26,"vocabulary":14,"difficulty":3.888888888888889,"volume":98.9912279734977,"effort":384.96588656360217,"bugs":0.0329970759911659,"time":21.3869936979779}}},{"name":"um_handleIncomingUssd","line":225,"complexity":{"sloc":{"physical":3,"logical":1},"cyclomatic":1,"halstead":{"operators":{"distinct":2,"total":2,"identifiers":["__stripped__"]},"operands":{"distinct":3,"total":4,"identifiers":["__stripped__"]},"length":6,"vocabulary":5,"difficulty":1.3333333333333333,"volume":13.931568569324174,"effort":18.575424759098897,"bugs":0.004643856189774725,"time":1.0319680421721609}}},{"name":"um_handleEvent","line":229,"complexity":{"sloc":{"physical":39,"logical":29},"cyclomatic":11,"halstead":{"operators":{"distinct":15,"total":56,"identifiers":["__stripped__"]},"operands":{"distinct":23,"total":60,"identifiers":["__stripped__"]},"length":116,"vocabulary":38,"difficulty":19.565217391304348,"volume":608.7595915594559,"effort":11910.513747902398,"bugs":0.20291986385315197,"time":661.6952082167999}}},{"name":"us_handleVisibility","line":271,"complexity":{"sloc":{"physical":10,"logical":7},"cyclomatic":4,"halstead":{"operators":{"distinct":5,"total":13,"identifiers":["__stripped__"]},"operands":{"distinct":9,"total":15,"identifiers":["__stripped__"]},"length":28,"vocabulary":14,"difficulty":4.166666666666667,"volume":106.6059378176129,"effort":444.1914075733871,"bugs":0.035535312605870964,"time":24.677300420743727}}}],"maintainability":60.18507480317584,"module":"ussd.js"},"jshint":{"messages":[{"severity":"error","line":1,"column":1,"message":"Use the function form of \"use strict\".","source":"Use the function form of \"use strict\"."},{"severity":"error","line":65,"column":59,"message":"Use '!==' to compare with '0'.","source":"Use '{a}' to compare with '{b}'."},{"severity":"error","line":119,"column":61,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":238,"column":25,"message":"Use '!==' to compare with 'null'.","source":"Use '{a}' to compare with '{b}'."},{"severity":"error","line":6,"column":10,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":23,"column":24,"message":"'MobileOperator' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":26,"column":20,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":27,"column":7,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":33,"column":7,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":142,"column":5,"message":"'LazyL10n' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":156,"column":21,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":246,"column":26,"message":"'MobileOperator' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":270,"column":1,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":272,"column":9,"message":"'document' is not defined.","source":"'{a}' is not defined."}]}}