__report = {"info":{"file":"apps/communications/dialer/js/mmi.js","fileShort":"mmi.js","fileSafe":"mmi_js","link":"files/mmi_js/index.html"},"complexity":{"aggregate":{"line":1,"complexity":{"sloc":{"physical":210,"logical":144},"cyclomatic":40,"halstead":{"operators":{"distinct":31,"total":385,"identifiers":["__stripped__"]},"operands":{"distinct":115,"total":439,"identifiers":["__stripped__"]},"length":824,"vocabulary":146,"difficulty":59.16956521739131,"volume":5924.415436517134,"effort":350545.08554592036,"bugs":1.9748051455057114,"time":19474.72697477335}}},"functions":[{"name":"mm_init","line":19,"complexity":{"sloc":{"physical":24,"logical":13},"cyclomatic":4,"halstead":{"operators":{"distinct":8,"total":39,"identifiers":["__stripped__"]},"operands":{"distinct":24,"total":52,"identifiers":["__stripped__"]},"length":91,"vocabulary":32,"difficulty":8.666666666666666,"volume":455,"effort":3943.333333333333,"bugs":0.15166666666666667,"time":219.07407407407405}}},{"name":"mm_send","line":44,"complexity":{"sloc":{"physical":12,"logical":7},"cyclomatic":3,"halstead":{"operators":{"distinct":6,"total":26,"identifiers":["__stripped__"]},"operands":{"distinct":14,"total":28,"identifiers":["__stripped__"]},"length":54,"vocabulary":20,"difficulty":6,"volume":233.38411712391758,"effort":1400.3047027435055,"bugs":0.07779470570797252,"time":77.79470570797253}}},{"name":"mm_notifySuccess","line":57,"complexity":{"sloc":{"physical":79,"logical":11},"cyclomatic":4,"halstead":{"operators":{"distinct":13,"total":36,"identifiers":["__stripped__"]},"operands":{"distinct":22,"total":40,"identifiers":["__stripped__"]},"length":76,"vocabulary":35,"difficulty":11.818181818181818,"volume":389.82550928781745,"effort":4607.028746128752,"bugs":0.12994183642927248,"time":255.94604145159732}}},{"name":"processCf","line":60,"complexity":{"sloc":{"physical":56,"logical":53},"cyclomatic":21,"halstead":{"operators":{"distinct":24,"total":154,"identifiers":["__stripped__"]},"operands":{"distinct":42,"total":169,"identifiers":["__stripped__"]},"length":323,"vocabulary":66,"difficulty":48.285714285714285,"volume":1952.3393005527805,"effort":94270.09765526283,"bugs":0.6507797668509269,"time":5237.227647514602}}},{"name":"mm_notifyError","line":137,"complexity":{"sloc":{"physical":7,"logical":4},"cyclomatic":1,"halstead":{"operators":{"distinct":6,"total":11,"identifiers":["__stripped__"]},"operands":{"distinct":12,"total":15,"identifiers":["__stripped__"]},"length":26,"vocabulary":18,"difficulty":3.75,"volume":108.41805003750011,"effort":406.5676876406254,"bugs":0.036139350012500036,"time":22.587093757812525}}},{"name":"mm_openUI","line":145,"complexity":{"sloc":{"physical":10,"logical":4},"cyclomatic":2,"halstead":{"operators":{"distinct":5,"total":10,"identifiers":["__stripped__"]},"operands":{"distinct":7,"total":9,"identifiers":["__stripped__"]},"length":19,"vocabulary":12,"difficulty":3.2142857142857144,"volume":68.11428751370197,"effort":218.93878129404206,"bugs":0.022704762504567322,"time":12.163265627446782}}},{"name":"localized","line":150,"complexity":{"sloc":{"physical":4,"logical":3},"cyclomatic":1,"halstead":{"operators":{"distinct":5,"total":7,"identifiers":["__stripped__"]},"operands":{"distinct":8,"total":11,"identifiers":["__stripped__"]},"length":18,"vocabulary":13,"difficulty":3.4375,"volume":66.60791492653966,"effort":228.9647075599801,"bugs":0.022202638308846556,"time":12.720261531110005}}},{"name":"mm_handleMMIReceived","line":156,"complexity":{"sloc":{"physical":14,"logical":8},"cyclomatic":2,"halstead":{"operators":{"distinct":11,"total":16,"identifiers":["__stripped__"]},"operands":{"distinct":12,"total":21,"identifiers":["__stripped__"]},"length":37,"vocabulary":23,"difficulty":9.625,"volume":167.37179237410948,"effort":1610.9535016008037,"bugs":0.055790597458036495,"time":89.49741675560021}}},{"name":"mm_isMMI","line":171,"complexity":{"sloc":{"physical":4,"logical":1},"cyclomatic":1,"halstead":{"operators":{"distinct":5,"total":6,"identifiers":["__stripped__"]},"operands":{"distinct":5,"total":7,"identifiers":["__stripped__"]},"length":13,"vocabulary":10,"difficulty":3.5,"volume":43.18506523353572,"effort":151.147728317375,"bugs":0.014395021744511906,"time":8.397096017631945}}},{"name":"mm_handleEvent","line":176,"complexity":{"sloc":{"physical":34,"logical":24},"cyclomatic":10,"halstead":{"operators":{"distinct":14,"total":49,"identifiers":["__stripped__"]},"operands":{"distinct":23,"total":50,"identifiers":["__stripped__"]},"length":99,"vocabulary":37,"difficulty":15.217391304347824,"volume":515.735883197266,"effort":7848.154744306222,"bugs":0.17191196106575535,"time":436.0085969059012}}}],"maintainability":56.93887733253304,"module":"mmi.js"},"jshint":{"messages":[{"severity":"error","line":1,"column":1,"message":"Use the function form of \"use strict\".","source":"Use the function form of \"use strict\"."},{"severity":"error","line":73,"column":59,"message":"Use '!==' to compare with '0'.","source":"Use '{a}' to compare with '{b}'."},{"severity":"error","line":127,"column":61,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":159,"column":17,"message":"Use '===' to compare with 'null'.","source":"Use '{a}' to compare with '{b}'."},{"severity":"error","line":5,"column":21,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":6,"column":5,"message":"'document' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":20,"column":18,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":24,"column":24,"message":"'MobileOperator' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":30,"column":7,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":38,"column":7,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":134,"column":5,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":142,"column":5,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":150,"column":5,"message":"'LazyL10n' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":152,"column":7,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":168,"column":5,"message":"'window' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":183,"column":26,"message":"'MobileOperator' is not defined.","source":"'{a}' is not defined."},{"severity":"error","line":207,"column":7,"message":"'window' is not defined.","source":"'{a}' is not defined."}]}}