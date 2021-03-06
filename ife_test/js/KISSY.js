/**
 * Created by rulersex on 2016/12/9.
 */
/*
 Copyright 2014, KISSY v1.48
 MIT Licensed
 build time: Aug 28 13:17
 */
var KISSY = function (a) {
    function f(a) {
        var k = {}, f;
        for (f in m)(function (b, g) {
            b[g] = function (d) {
                return h.log(d, g, a)
            }
        })(k, f);
        return k
    }

    var h, l = 0, m = {debug: 10, info: 20, warn: 30, error: 40};
    h = {
        __BUILD_TIME: "20140828131714",
        Env: {host: this},
        Config: {debug: "", fns: {}},
        version: '1.48',
        config: function (c, f) {
            var j, b, g = this, d, e = h.Config, s = e.fns;
            h.isObject(c) ? h.each(c, function (a, n) {
                (d = s[n]) ? d.call(g, a) : e[n] = a
            }) : (j = s[c], f === a ? b = j ? j.call(g) : e[c] : j ? b = j.call(g, f) : e[c] = f);
            return b
        },
        log: function () {
            return a
        },
        getLogger: function (a) {
            return f(a)
        },
        error: function () {
        },
        guid: function (a) {
            return (a || "") + l++
        },
        Logger: {}
    };
    h.Logger.Level = {DEBUG: "debug", INFO: "info", WARN: "warn", ERROR: "error"};
    return h
}();
(function (a, f) {
    function h() {
    }

    function l(g, i, e, d, b, k) {
        if (!i || !g)return g;
        var t, q, u, p;
        i[c] = g;
        k.push(i);
        u = a.keys(i);
        p = u.length;
        for (t = 0; t < p; t++)if (q = u[t], q !== c) {
            var h = g, m = i, x = e, F = d, H = b, K = k;
            if (x || !(q in h) || H) {
                var y = h[q], w = m[q];
                if (y === w)y === f && (h[q] = y); else if (F && (w = F.call(m, q, w)), H && w && (a.isArray(w) || a.isPlainObject(w)))w[c] ? h[q] = w[c] : (m = y && (a.isArray(y) || a.isPlainObject(y)) ? y : a.isArray(w) ? [] : {}, h[q] = m, l(m, w, x, F, j, K)); else if (w !== f && (x || !(q in h)))h[q] = w
            }
        }
        return g
    }

    function m(a, i) {
        return "constructor" ===
        a ? f : i
    }

    var c = "__MIX_CIRCULAR", k = this, j = !0, b = Object, g = b.create, d = !{toString: 1}.propertyIsEnumerable("toString"), e = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toString,toLocaleString,valueOf".split(",");
    (function (a, i) {
        for (var g in i)a[g] = i[g]
    })(a, {
        stamp: function (g, i, e) {
            var e = e || "__~ks_stamped", d = g[e];
            if (!d && !i)try {
                d = g[e] = a.guid(e)
            } catch (b) {
                d = f
            }
            return d
        }, keys: b.keys || function (a) {
            var i = [], g, b;
            for (g in a)a.hasOwnProperty(g) && i.push(g);
            if (d)for (b = e.length - 1; 0 <= b; b--)g = e[b], a.hasOwnProperty(g) &&
            i.push(g);
            return i
        }, mix: function (g, i, e, d, b) {
            "object" === typeof e && (d = e.whitelist, b = e.deep, e = e.overwrite);
            if (d && "function" !== typeof d)var h = d, d = function (i, g) {
                return a.inArray(i, h) ? g : f
            };
            e === f && (e = j);
            var t = [], q = 0;
            for (l(g, i, e, d, b, t); i = t[q++];)delete i[c];
            return g
        }, merge: function (g) {
            var g = a.makeArray(arguments), i = {}, e, d = g.length;
            for (e = 0; e < d; e++)a.mix(i, g[e]);
            return i
        }, augment: function (g, i) {
            var e = a.makeArray(arguments), d = e.length - 2, b = 1, c, t, q = e[d], u = e[d + 1];
            e[1] = i;
            a.isArray(u) || (q = u, u = f, d++);
            "boolean" !== typeof q &&
            (q = f, d++);
            for (; b < d; b++) {
                t = e[b];
                if (c = t.prototype)t = a.mix({}, c, !0, m);
                a.mix(g.prototype, t, q, u)
            }
            return g
        }, extend: function (e, i, d, b) {
            var c = i.prototype;
            c.constructor = i;
            g ? i = g(c) : (h.prototype = c, i = new h);
            i.constructor = e;
            e.prototype = a.mix(i, e.prototype);
            e.superclass = c;
            d && a.mix(i, d);
            b && a.mix(e, b);
            return e
        }, namespace: function () {
            var g = a.makeArray(arguments), i = g.length, e = null, d, b, c, t = g[i - 1] === j && i--;
            for (d = 0; d < i; d++) {
                c = ("" + g[d]).split(".");
                e = t ? k : this;
                for (b = k[c[0]] === e ? 1 : 0; b < c.length; ++b)e = e[c[b]] = e[c[b]] || {}
            }
            return e
        }
    })
})(KISSY);
(function (a, f) {
    var h = Array.prototype, l = h.indexOf, m = h.lastIndexOf, c = h.filter, k = h.every, j = h.some, b = h.map;
    a.mix(a, {
        each: function (g, d, e) {
            if (g) {
                var b, i, c = 0;
                b = g && g.length;
                i = b === f || "function" === a.type(g);
                e = e || null;
                if (i)for (i = a.keys(g); c < i.length && !(b = i[c], !1 === d.call(e, g[b], b, g)); c++); else for (i = g[0]; c < b && !1 !== d.call(e, i, c, g); i = g[++c]);
            }
            return g
        }, indexOf: l ? function (a, d) {
            return l.call(d, a)
        } : function (a, d) {
            for (var e = 0, b = d.length; e < b; ++e)if (d[e] === a)return e;
            return -1
        }, lastIndexOf: m ? function (a, d) {
            return m.call(d,
                a)
        } : function (a, d) {
            for (var e = d.length - 1; 0 <= e && d[e] !== a; e--);
            return e
        }, unique: function (g, d) {
            var e = g.slice();
            d && e.reverse();
            for (var b = 0, i, c; b < e.length;) {
                for (c = e[b]; (i = a.lastIndexOf(c, e)) !== b;)e.splice(i, 1);
                b += 1
            }
            d && e.reverse();
            return e
        }, inArray: function (g, d) {
            return -1 < a.indexOf(g, d)
        }, filter: c ? function (a, d, e) {
            return c.call(a, d, e || this)
        } : function (g, d, e) {
            var b = [];
            a.each(g, function (a, g, c) {
                d.call(e || this, a, g, c) && b.push(a)
            });
            return b
        }, map: b ? function (a, d, e) {
            return b.call(a, d, e || this)
        } : function (a, d, e) {
            for (var b =
                a.length, i = Array(b), c = 0; c < b; c++) {
                var f = "string" === typeof a ? a.charAt(c) : a[c];
                if (f || c in a)i[c] = d.call(e || this, f, c, a)
            }
            return i
        }, reduce: function (a, d, e) {
            var b = a.length;
            if ("function" !== typeof d)throw new TypeError("callback is not function!");
            if (0 === b && 2 === arguments.length)throw new TypeError("arguments invalid");
            var i = 0, c;
            if (3 <= arguments.length)c = e; else {
                do {
                    if (i in a) {
                        c = a[i++];
                        break
                    }
                    i += 1;
                    if (i >= b)throw new TypeError;
                } while (1)
            }
            for (; i < b;)i in a && (c = d.call(f, c, a[i], i, a)), i++;
            return c
        }, every: k ? function (a, d,
                                e) {
            return k.call(a, d, e || this)
        } : function (a, d, e) {
            for (var b = a && a.length || 0, i = 0; i < b; i++)if (i in a && !d.call(e, a[i], i, a))return !1;
            return !0
        }, some: j ? function (a, d, e) {
            return j.call(a, d, e || this)
        } : function (a, d, e) {
            for (var b = a && a.length || 0, i = 0; i < b; i++)if (i in a && d.call(e, a[i], i, a))return !0;
            return !1
        }, makeArray: function (b) {
            if (null == b)return [];
            if (a.isArray(b))return b;
            var d = typeof b.length, e = typeof b;
            if ("number" !== d || b.alert || "string" === e || "function" === e && !("item" in b && "number" === d))return [b];
            for (var d = [], e = 0, c = b.length; e <
            c; e++)d[e] = b[e];
            return d
        }
    })
})(KISSY);
(function (a, f) {
    function h(a) {
        var b = typeof a;
        return null == a || "object" !== b && "function" !== b
    }

    function l() {
        if (b)return b;
        var e = c;
        a.each(k, function (a) {
            e += a + "|"
        });
        e = e.slice(0, -1);
        return b = RegExp(e, "g")
    }

    function m() {
        if (g)return g;
        var e = c;
        a.each(j, function (a) {
            e += a + "|"
        });
        e += "&#(\\d{1,5});";
        return g = RegExp(e, "g")
    }

    var c = "", k = {
        "&amp;": "&",
        "&gt;": ">",
        "&lt;": "<",
        "&#x60;": "`",
        "&#x2F;": "/",
        "&quot;": '"',
        "&#x27;": "'"
    }, j = {}, b, g, d = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
    (function () {
        for (var a in k)j[k[a]] = a
    })();
    a.mix(a, {
        urlEncode: function (a) {
            return encodeURIComponent("" +
                a)
        }, urlDecode: function (a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        }, fromUnicode: function (a) {
            return a.replace(/\\u([a-f\d]{4})/ig, function (a, i) {
                return String.fromCharCode(parseInt(i, 16))
            })
        }, escapeHtml: function (a) {
            return (a + "").replace(l(), function (a) {
                return j[a]
            })
        }, escapeRegExp: function (a) {
            return a.replace(d, "\\$&")
        }, unEscapeHtml: function (a) {
            return a.replace(m(), function (a, i) {
                return k[a] || String.fromCharCode(+i)
            })
        }, param: function (b, d, i, g) {
            d = d || "&";
            i = i || "=";
            g === f && (g = !0);
            var k = [], r, j, t, q, u, p =
                a.urlEncode;
            for (r in b)if (u = b[r], r = p(r), h(u))k.push(r), u !== f && k.push(i, p(u + c)), k.push(d); else if (a.isArray(u) && u.length) {
                j = 0;
                for (q = u.length; j < q; ++j)t = u[j], h(t) && (k.push(r, g ? p("[]") : c), t !== f && k.push(i, p(t + c)), k.push(d))
            }
            k.pop();
            return k.join(c)
        }, unparam: function (b, d, i) {
            if ("string" !== typeof b || !(b = a.trim(b)))return {};
            for (var i = i || "=", c = {}, g, k = a.urlDecode, b = b.split(d || "&"), h = 0, t = b.length; h < t; ++h) {
                g = b[h].indexOf(i);
                if (-1 === g)d = k(b[h]), g = f; else {
                    d = k(b[h].substring(0, g));
                    g = b[h].substring(g + 1);
                    try {
                        g = k(g)
                    } catch (q) {
                    }
                    a.endsWith(d,
                        "[]") && (d = d.substring(0, d.length - 2))
                }
                d in c ? a.isArray(c[d]) ? c[d].push(g) : c[d] = [c[d], g] : c[d] = g
            }
            return c
        }
    });
    a.escapeHTML = a.escapeHtml;
    a.unEscapeHTML = a.unEscapeHtml
})(KISSY);
(function (a) {
    function f(a, f, m) {
        function c() {
        }

        var k = [].slice, j = k.call(arguments, 3), b = function () {
            var b = k.call(arguments);
            return f.apply(this instanceof c ? this : m || this, a ? b.concat(j) : j.concat(b))
        };
        c.prototype = f.prototype;
        b.prototype = new c;
        return b
    }

    a.mix(a, {
        noop: function () {
        }, bind: f(0, f, null, 0), rbind: f(0, f, null, 1), later: function (f, l, m, c, k) {
            var l = l || 0, j = f, b = a.makeArray(k), g;
            "string" === typeof f && (j = c[f]);
            f = function () {
                j.apply(c, b)
            };
            g = m ? setInterval(f, l) : setTimeout(f, l);
            return {
                id: g, interval: m, cancel: function () {
                    this.interval ?
                        clearInterval(g) : clearTimeout(g)
                }
            }
        }, throttle: function (f, l, m) {
            l = l || 150;
            if (-1 === l)return function () {
                f.apply(m || this, arguments)
            };
            var c = a.now();
            return function () {
                var k = a.now();
                k - c > l && (c = k, f.apply(m || this, arguments))
            }
        }, buffer: function (f, l, m) {
            function c() {
                c.stop();
                k = a.later(f, l, 0, m || this, arguments)
            }

            l = l || 150;
            if (-1 === l)return function () {
                f.apply(m || this, arguments)
            };
            var k = null;
            c.stop = function () {
                k && (k.cancel(), k = 0)
            };
            return c
        }
    })
})(KISSY);
(function (a, f) {
    function h(b, g, d) {
        var e = b, f, i, n, j;
        if (!b)return e;
        if (b[k])return d[b[k]].destination;
        if ("object" === typeof b) {
            j = b.constructor;
            if (a.inArray(j, [Boolean, String, Number, Date, RegExp]))e = new j(b.valueOf()); else if (f = a.isArray(b))e = g ? a.filter(b, g) : b.concat(); else if (i = a.isPlainObject(b))e = {};
            b[k] = j = a.guid("c");
            d[j] = {destination: e, input: b}
        }
        if (f)for (b = 0; b < e.length; b++)e[b] = h(e[b], g, d); else if (i)for (n in b)if (n !== k && (!g || g.call(b, b[n], n, b) !== c))e[n] = h(b[n], g, d);
        return e
    }

    function l(b, c, d, e) {
        if (b[j] ===
            c && c[j] === b)return m;
        b[j] = c;
        c[j] = b;
        var k = function (a, i) {
            return null !== a && a !== f && a[i] !== f
        }, i;
        for (i in c)!k(b, i) && k(c, i) && d.push("expected has key " + i + '", but missing from actual.');
        for (i in b)!k(c, i) && k(b, i) && d.push('expected missing key "' + i + '", but present in actual.');
        for (i in c)i !== j && (a.equals(b[i], c[i], d, e) || e.push('"' + i + '" was "' + (c[i] ? c[i].toString() : c[i]) + '" in expected, but was "' + (b[i] ? b[i].toString() : b[i]) + '" in actual.'));
        a.isArray(b) && a.isArray(c) && b.length !== c.length && e.push("arrays were not the same length");
        delete b[j];
        delete c[j];
        return 0 === d.length && 0 === e.length
    }

    var m = !0, c = !1, k = "__~ks_cloned", j = "__~ks_compared";
    a.mix(a, {
        equals: function (a, c, d, e) {
            d = d || [];
            e = e || [];
            return a === c ? m : a === f || null === a || c === f || null === c ? null == a && null == c : a instanceof Date && c instanceof Date ? a.getTime() === c.getTime() : "string" === typeof a && "string" === typeof c || "number" === typeof a && "number" === typeof c ? a === c : "object" === typeof a && "object" === typeof c ? l(a, c, d, e) : a === c
        }, clone: function (b, c) {
            var d = {}, e = h(b, c, d);
            a.each(d, function (a) {
                a = a.input;
                if (a[k])try {
                    delete a[k]
                } catch (i) {
                    a[k] = f
                }
            });
            d = null;
            return e
        }, now: Date.now || function () {
            return +new Date
        }
    })
})(KISSY);
(function (a, f) {
    var h = /^[\s\xa0]+|[\s\xa0]+$/g, l = String.prototype.trim, m = /\\?\{([^{}]+)\}/g;
    a.mix(a, {
        trim: l ? function (a) {
            return null == a ? "" : l.call(a)
        } : function (a) {
            return null == a ? "" : (a + "").replace(h, "")
        }, substitute: function (a, k, j) {
            return "string" !== typeof a || !k ? a : a.replace(j || m, function (a, c) {
                return "\\" === a.charAt(0) ? a.slice(1) : k[c] === f ? "" : k[c]
            })
        }, ucfirst: function (a) {
            a += "";
            return a.charAt(0).toUpperCase() + a.substring(1)
        }, startsWith: function (a, f) {
            return 0 === a.lastIndexOf(f, 0)
        }, endsWith: function (a, f) {
            var j =
                a.length - f.length;
            return 0 <= j && a.indexOf(f, j) === j
        }
    })
})(KISSY);
(function (a, f) {
    var h = {}, l = Object.prototype, m = l.toString;
    a.mix(a, {
        type: function (a) {
            return null == a ? "" + a : h[m.call(a)] || "object"
        }, isNull: function (a) {
            return null === a
        }, isUndefined: function (a) {
            return a === f
        }, isEmptyObject: function (a) {
            for (var k in a)if (k !== f)return !1;
            return !0
        }, isPlainObject: function (c) {
            if (!c || "object" !== a.type(c) || c.nodeType || c.window == c)return !1;
            var k, j;
            try {
                if ((j = c.constructor) && !l.hasOwnProperty.call(c, "constructor") && !l.hasOwnProperty.call(j.prototype, "isPrototypeOf"))return !1
            } catch (b) {
                return !1
            }
            for (k in c);
            return k === f || l.hasOwnProperty.call(c, k)
        }
    });
    a.each("Boolean,Number,String,Function,Date,RegExp,Object,Array".split(","), function (c, f) {
        h["[object " + c + "]"] = f = c.toLowerCase();
        a["is" + c] = function (c) {
            return a.type(c) === f
        }
    });
    a.isArray = Array.isArray || a.isArray
})(KISSY);
(function (a) {
    function f() {
        for (var a = 0, b; b = h[a++];)try {
            b()
        } catch (c) {
            setTimeout(function () {
                throw c;
            }, 0)
        }
        1 < a && (h = []);
        l = 0
    }

    var h = [], l = 0;
    a.setImmediate = function (a) {
        h.push(a);
        l || (l = 1, m())
    };
    var m;
    if ("function" === typeof setImmediate)m = function () {
        setImmediate(f)
    }; else if ("undefined" !== typeof process && "function" === typeof process.nextTick)m = function () {
        process.nextTick(f)
    }; else if ("undefined" !== typeof MessageChannel) {
        var c = new MessageChannel;
        c.port1.onmessage = function () {
            m = k;
            c.port1.onmessage = f;
            f()
        };
        var k = function () {
            c.port2.postMessage(0)
        };
        m = function () {
            setTimeout(f, 0);
            k()
        }
    } else m = function () {
        setTimeout(f, 0)
    }
})(KISSY);
(function (a) {
    function f(a, c) {
        for (var f = 0, h = a.length - 1, b = [], g; 0 <= h; h--)g = a[h], "." !== g && (".." === g ? f++ : f ? f-- : b[b.length] = g);
        if (c)for (; f--; f)b[b.length] = "..";
        return b = b.reverse()
    }

    var h = /^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/, l = a.Path = {
        resolve: function () {
            var h = "", c, k = arguments, j, b = 0;
            for (c = k.length - 1; 0 <= c && !b; c--)j = k[c], "string" === typeof j && j && (h = j + "/" + h, b = "/" === j.charAt(0));
            h = f(a.filter(h.split("/"), function (a) {
                return !!a
            }), !b).join("/");
            return (b ? "/" : "") + h || "."
        }, normalize: function (h) {
            var c =
                "/" === h.charAt(0), k = "/" === h.slice(-1), h = f(a.filter(h.split("/"), function (a) {
                return !!a
            }), !c).join("/");
            !h && !c && (h = ".");
            h && k && (h += "/");
            return (c ? "/" : "") + h
        }, join: function () {
            var f = a.makeArray(arguments);
            return l.normalize(a.filter(f, function (a) {
                return a && "string" === typeof a
            }).join("/"))
        }, relative: function (f, c) {
            var f = l.normalize(f), c = l.normalize(c), h = a.filter(f.split("/"), function (a) {
                return !!a
            }), j = [], b, g, d = a.filter(c.split("/"), function (a) {
                return !!a
            });
            g = Math.min(h.length, d.length);
            for (b = 0; b < g && h[b] === d[b]; b++);
            for (g = b; b < h.length;)j.push(".."), b++;
            j = j.concat(d.slice(g));
            return j = j.join("/")
        }, basename: function (a, c) {
            var f;
            f = (a.match(h) || [])[3] || "";
            c && f && f.slice(-1 * c.length) === c && (f = f.slice(0, -1 * c.length));
            return f
        }, dirname: function (a) {
            var c = a.match(h) || [], a = c[1] || "", c = c[2] || "";
            if (!a && !c)return ".";
            c && (c = c.substring(0, c.length - 1));
            return a + c
        }, extname: function (a) {
            return (a.match(h) || [])[4] || ""
        }
    }
})(KISSY);
(function (a, f) {
    function h(i) {
        i._queryMap || (i._queryMap = a.unparam(i._query))
    }

    function l(a) {
        this._query = a || ""
    }

    function m(a, d) {
        return encodeURI(a).replace(d, function (a) {
            a = a.charCodeAt(0).toString(16);
            return "%" + (1 === a.length ? "0" + a : a)
        })
    }

    function c(i) {
        if (i instanceof c)return i.clone();
        var d = this;
        a.mix(d, {scheme: "", userInfo: "", hostname: "", port: "", path: "", query: "", fragment: ""});
        i = c.getComponents(i);
        a.each(i, function (i, b) {
            i = i || "";
            if ("query" === b)d.query = new l(i); else {
                try {
                    i = a.urlDecode(i)
                } catch (c) {
                }
                d[b] = i
            }
        });
        return d
    }

    var k = /[#\/\?@]/g, j = /[#\?]/g, b = /[#@]/g, g = /#/g, d = RegExp("^(?:([\\w\\d+.-]+):)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), e = a.Path, s = {
        scheme: 1,
        userInfo: 2,
        hostname: 3,
        port: 4,
        path: 5,
        query: 6,
        fragment: 7
    };
    l.prototype = {
        constructor: l, clone: function () {
            return new l(this.toString())
        }, reset: function (a) {
            this._query = a || "";
            this._queryMap = null;
            return this
        }, count: function () {
            var i = 0, d, b;
            h(this);
            d = this._queryMap;
            for (b in d)a.isArray(d[b]) ?
                i += d[b].length : i++;
            return i
        }, has: function (d) {
            var b;
            h(this);
            b = this._queryMap;
            return d ? d in b : !a.isEmptyObject(b)
        }, get: function (a) {
            var d;
            h(this);
            d = this._queryMap;
            return a ? d[a] : d
        }, keys: function () {
            h(this);
            return a.keys(this._queryMap)
        }, set: function (d, b) {
            var c;
            h(this);
            c = this._queryMap;
            "string" === typeof d ? this._queryMap[d] = b : (d instanceof l && (d = d.get()), a.each(d, function (a, d) {
                c[d] = a
            }));
            return this
        }, remove: function (a) {
            h(this);
            a ? delete this._queryMap[a] : this._queryMap = {};
            return this
        }, add: function (a, d) {
            var b,
                c;
            if ("string" === typeof a)h(this), b = this._queryMap, c = b[a], c = c === f ? d : [].concat(c).concat(d), b[a] = c; else for (b in a instanceof l && (a = a.get()), a)this.add(b, a[b]);
            return this
        }, toString: function (d) {
            h(this);
            return a.param(this._queryMap, f, f, d)
        }
    };
    c.prototype = {
        constructor: c, clone: function () {
            var d = new c, b = this;
            a.each(s, function (a, c) {
                d[c] = b[c]
            });
            d.query = d.query.clone();
            return d
        }, resolve: function (d) {
            "string" === typeof d && (d = new c(d));
            var b = 0, g, f = this.clone();
            a.each("scheme,userInfo,hostname,port,path,query,fragment".split(","),
                function (c) {
                    if (c === "path")if (b)f[c] = d[c]; else {
                        if (c = d.path) {
                            b = 1;
                            if (!a.startsWith(c, "/"))if (f.hostname && !f.path)c = "/" + c; else if (f.path) {
                                g = f.path.lastIndexOf("/");
                                g !== -1 && (c = f.path.slice(0, g + 1) + c)
                            }
                            f.path = e.normalize(c)
                        }
                    } else if (c === "query") {
                        if (b || d.query.toString()) {
                            f.query = d.query.clone();
                            b = 1
                        }
                    } else if (b || d[c]) {
                        f[c] = d[c];
                        b = 1
                    }
                });
            return f
        }, getScheme: function () {
            return this.scheme
        }, setScheme: function (a) {
            this.scheme = a;
            return this
        }, getHostname: function () {
            return this.hostname
        }, setHostname: function (a) {
            this.hostname =
                a;
            return this
        }, setUserInfo: function (a) {
            this.userInfo = a;
            return this
        }, getUserInfo: function () {
            return this.userInfo
        }, setPort: function (a) {
            this.port = a;
            return this
        }, getPort: function () {
            return this.port
        }, setPath: function (a) {
            this.path = a;
            return this
        }, getPath: function () {
            return this.path
        }, setQuery: function (d) {
            "string" === typeof d && (a.startsWith(d, "?") && (d = d.slice(1)), d = new l(m(d, b)));
            this.query = d;
            return this
        }, getQuery: function () {
            return this.query
        }, getFragment: function () {
            return this.fragment
        }, setFragment: function (d) {
            a.startsWith(d,
                "#") && (d = d.slice(1));
            this.fragment = d;
            return this
        }, isSameOriginAs: function (a) {
            return this.hostname.toLowerCase() === a.hostname.toLowerCase() && this.scheme.toLowerCase() === a.scheme.toLowerCase() && this.port.toLowerCase() === a.port.toLowerCase()
        }, toString: function (d) {
            var b = [], c, f;
            if (c = this.scheme)b.push(m(c, k)), b.push(":");
            if (c = this.hostname) {
                b.push("//");
                if (f = this.userInfo)b.push(m(f, k)), b.push("@");
                b.push(encodeURIComponent(c));
                if (f = this.port)b.push(":"), b.push(f)
            }
            if (f = this.path)c && !a.startsWith(f, "/") &&
            (f = "/" + f), f = e.normalize(f), b.push(m(f, j));
            if (d = this.query.toString.call(this.query, d))b.push("?"), b.push(d);
            if (d = this.fragment)b.push("#"), b.push(m(d, g));
            return b.join("")
        }
    };
    c.Query = l;
    c.getComponents = function (b) {
        var c = (b || "").match(d) || [], e = {};
        a.each(s, function (a, d) {
            e[d] = c[a]
        });
        return e
    };
    a.Uri = c
})(KISSY);
(function (a, f) {
    function h(a) {
        var d = 0;
        return parseFloat(a.replace(/\./g, function () {
            return 0 === d++ ? "." : ""
        }))
    }

    function l(a, d) {
        var b;
        d.trident = 0.1;
        if ((b = a.match(/Trident\/([\d.]*)/)) && b[1])d.trident = h(b[1]);
        d.core = "trident"
    }

    function m(a) {
        var d, b;
        return (d = a.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (b = d[1] || d[2]) ? h(b) : 0
    }

    function c(a) {
        var d, b = "", c = "", e, g = [6, 9], t, q = j && j.createElement("div"), u = [], p = {
            webkit: f,
            trident: f,
            gecko: f,
            presto: f,
            chrome: f,
            safari: f,
            firefox: f,
            ie: f,
            ieMode: f,
            opera: f,
            mobile: f,
            core: f,
            shell: f,
            phantomjs: f,
            os: f,
            ipad: f,
            iphone: f,
            ipod: f,
            ios: f,
            android: f,
            nodejs: f
        };
        q && q.getElementsByTagName && (q.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", ""), u = q.getElementsByTagName("s"));
        if (0 < u.length) {
            l(a, p);
            e = g[0];
            for (g = g[1]; e <= g; e++)if (q.innerHTML = "<\!--[if IE {{version}}]><s></s><![endif]--\>".replace("{{version}}", e), 0 < u.length) {
                p[c = "ie"] = e;
                break
            }
            if (!p.ie && (t = m(a)))p[c = "ie"] = t
        } else if ((e = a.match(/AppleWebKit\/([\d.]*)/)) && e[1]) {
            p[b = "webkit"] = h(e[1]);
            if ((e =
                    a.match(/OPR\/(\d+\.\d+)/)) && e[1])p[c = "opera"] = h(e[1]); else if ((e = a.match(/Chrome\/([\d.]*)/)) && e[1])p[c = "chrome"] = h(e[1]); else if ((e = a.match(/\/([\d.]*) Safari/)) && e[1])p[c = "safari"] = h(e[1]);
            if (/ Mobile\//.test(a) && a.match(/iPad|iPod|iPhone/)) {
                p.mobile = "apple";
                if ((e = a.match(/OS ([^\s]*)/)) && e[1])p.ios = h(e[1].replace("_", "."));
                d = "ios";
                if ((e = a.match(/iPad|iPod|iPhone/)) && e[0])p[e[0].toLowerCase()] = p.ios
            } else if (/ Android/i.test(a)) {
                if (/Mobile/.test(a) && (d = p.mobile = "android"), (e = a.match(/Android ([^\s]*);/)) &&
                    e[1])p.android = h(e[1])
            } else if (e = a.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/))p.mobile = e[0].toLowerCase();
            if ((e = a.match(/PhantomJS\/([^\s]*)/)) && e[1])p.phantomjs = h(e[1])
        } else if ((e = a.match(/Presto\/([\d.]*)/)) && e[1]) {
            if (p[b = "presto"] = h(e[1]), (e = a.match(/Opera\/([\d.]*)/)) && e[1]) {
                p[c = "opera"] = h(e[1]);
                if ((e = a.match(/Opera\/.* Version\/([\d.]*)/)) && e[1])p[c] = h(e[1]);
                if ((e = a.match(/Opera Mini[^;]*/)) && e)p.mobile = e[0].toLowerCase(); else if ((e = a.match(/Opera Mobi[^;]*/)) && e)p.mobile = e[0]
            }
        } else if (t =
                m(a))p[c = "ie"] = t, l(a, p); else if (e = a.match(/Gecko/)) {
            p[b = "gecko"] = 0.1;
            if ((e = a.match(/rv:([\d.]*)/)) && e[1])p[b] = h(e[1]), /Mobile|Tablet/.test(a) && (p.mobile = "firefox");
            if ((e = a.match(/Firefox\/([\d.]*)/)) && e[1])p[c = "firefox"] = h(e[1])
        }
        d || (/windows|win32/i.test(a) ? d = "windows" : /macintosh|mac_powerpc/i.test(a) ? d = "macintosh" : /linux/i.test(a) ? d = "linux" : /rhino/i.test(a) && (d = "rhino"));
        p.os = d;
        p.core = p.core || b;
        p.shell = c;
        p.ieMode = p.ie && j.documentMode || p.ie;
        return p
    }

    var k = a.Env.host, j = k.document, k = k.navigator, b = KISSY.UA =
        c(k && k.userAgent || "");
    if ("object" === typeof process) {
        var g, d;
        if ((g = process.versions) && (d = g.node))b.os = process.platform, b.nodejs = h(d)
    }
    b.getDescriptorFromUserAgent = c;
    g = "webkit,trident,gecko,presto,chrome,safari,firefox,ie,opera".split(",");
    d = j && j.documentElement;
    var e = "";
    d && (a.each(g, function (a) {
        var d = b[a];
        d && (e += " ks-" + a + (parseInt(d) + ""), e += " ks-" + a)
    }), a.trim(e) && (d.className = a.trim(d.className + e)))
})(KISSY);
(function (a, f) {
    function h(a) {
        if (x[a])return x[a];
        if (!v || a in v)x[a] = {name: a, prefix: ""}; else {
            for (var d = a.charAt(0).toUpperCase() + a.slice(1), b, e = c.length; e--;)b = c[e] + d, b in v && (x[a] = {
                name: b,
                prefix: c[e]
            });
            x[a] = x[a] || {name: a, prefix: !1}
        }
        return x[a]
    }

    var l = a.Env.host, m = a.UA, c = ["", "Webkit", "Moz", "O", "ms"], k = l.document || {}, j, b, g, d, e, s, i, n = k.documentElement, v, r = !0, o = !1, t = "ontouchstart" in k && !m.phantomjs, q = m.ieMode;
    if (n && (n.querySelector && 8 !== q && (o = !0), v = n.style, a.each(c, function (a) {
            var b = a ? a + "Transition" : "transition",
                c = a ? a + "Transform" : "transform";
            e === f && b in v && (e = a, g = b);
            s === f && c in v && (s = a, d = c)
        }), r = "classList" in n, m = l.navigator || {}, j = "msPointerEnabled" in m, b = "pointerEnabled" in m, d))try {
        var u = k.createElement("p");
        n.insertBefore(u, n.firstChild);
        u.style[d] = "translate3d(1px,1px,1px)";
        var p = l.getComputedStyle(u), E = p.getPropertyValue(d) || p[d];
        n.removeChild(u);
        i = E !== f && 0 < E.length && "none" !== E
    } catch (L) {
        i = !0
    }
    var x = {};
    a.Features = {
        isMsPointerSupported: function () {
            return j
        }, isPointerSupported: function () {
            return b
        }, isTouchEventSupported: function () {
            return t
        },
        isTouchGestureSupported: function () {
            return t || b || j
        }, isDeviceMotionSupported: function () {
            return !!l.DeviceMotionEvent
        }, isHashChangeSupported: function () {
            return "onhashchange" in l && (!q || 7 < q)
        }, isTransitionSupported: function () {
            return e !== f
        }, isTransformSupported: function () {
            return s !== f
        }, isTransform3dSupported: function () {
            return i
        }, isClassListSupported: function () {
            return r
        }, isQuerySelectorSupported: function () {
            return !a.config("dom/selector") && o
        }, isIELessThan: function (a) {
            return !!(q && q < a)
        }, getTransitionPrefix: function () {
            return e
        },
        getTransformPrefix: function () {
            return s
        }, getTransitionProperty: function () {
            return g
        }, getTransformProperty: function () {
            return d
        }, getVendorCssPropPrefix: function (a) {
            return h(a).prefix
        }, getVendorCssPropName: function (a) {
            return h(a).name
        }
    }
})(KISSY);
(function (a) {
    (a.Loader = {}).Status = {ERROR: -1, INIT: 0, LOADING: 1, LOADED: 2, READY_TO_ATTACH: 3, ATTACHING: 4, ATTACHED: 5}
})(KISSY);
(function (a) {
    function f(a) {
        if ("string" === typeof a)return h(a);
        for (var d = [], b = 0, e = a.length; b < e; b++)d[b] = h(a[b]);
        return d
    }

    function h(d) {
        "/" === d.charAt(d.length - 1) && (d += "index");
        a.endsWith(d, ".js") && (d = d.slice(0, -3));
        return d
    }

    function l(d, b) {
        var e = b.indexOf("!");
        if (-1 !== e) {
            var c = b.substring(0, e), b = b.substring(e + 1);
            a.use(c, {
                sync: !0, success: function (a, e) {
                    e.alias && (b = e.alias(d, b, c))
                }
            })
        }
        return b
    }

    var m = a.Loader, c = a.Path, k = a.Env.host, j = a.startsWith, b = m.Status, g = b.ATTACHED, d = b.READY_TO_ATTACH, e = b.LOADED, s =
        b.ATTACHING, i = b.ERROR, n = m.Utils = {}, v = k.document;
    a.mix(n, {
        docHead: function () {
            return v.getElementsByTagName("head")[0] || v.documentElement
        }, normalDepModuleName: function (a, d) {
            var b = 0, e;
            if (!d)return d;
            if ("string" === typeof d)return j(d, "../") || j(d, "./") ? c.resolve(c.dirname(a), d) : c.normalize(d);
            for (e = d.length; b < e; b++)d[b] = n.normalDepModuleName(a, d[b]);
            return d
        }, createModulesInfo: function (d, b) {
            a.each(b, function (a) {
                n.createModuleInfo(d, a)
            })
        }, createModuleInfo: function (d, b, e) {
            var b = h(b), c = d.Env.mods, g = c[b];
            return g ? g : c[b] = g = new m.Module(a.mix({name: b, runtime: d}, e))
        }, getModules: function (d, b) {
            var e = [d], c, g, f, i, h = d.Env.mods;
            a.each(b, function (b) {
                c = h[b];
                !c || "css" !== c.getType() ? (g = n.unalias(d, b), (f = a.reduce(g, function (a, d) {
                    i = h[d];
                    return a && i && i.status >= s
                }, !0)) ? e.push(h[g[0]].exports) : e.push(null)) : e.push(void 0)
            });
            return e
        }, attachModsRecursively: function (a, d) {
            var b, e = a.length;
            for (b = 0; b < e; b++)n.attachModRecursively(a[b], d)
        }, checkModsLoadRecursively: function (a, d, b, e, c) {
            var b = b || [], c = c || {}, g, f = 1, i = a.length,
                h = b.length;
            for (g = 0; g < i; g++)f = f && n.checkModLoadRecursively(a[g], d, b, e, c), b.length = h;
            return !!f
        }, checkModLoadRecursively: function (a, b, c, g, f) {
            var h, k = b.Env.mods[a];
            if (a in f)return f[a];
            if (!k)return f[a] = !1;
            h = k.status;
            return h === i ? (g.push(k), f[a] = !1) : h >= d ? f[a] = !0 : h !== e ? f[a] = !1 : n.checkModsLoadRecursively(k.getNormalizedRequires(), b, c, g, f) ? (k.status = d, f[a] = !0) : f[a] = !1
        }, attachModRecursively: function (a, d) {
            var b = d.Env.mods[a];
            b.status >= s || (b.status = s, b.cjs || n.attachModsRecursively(b.getNormalizedRequires(),
                d), n.attachMod(d, b))
        }, attachMod: function (d, b) {
            var e = b.factory;
            if ("function" === typeof e) {
                var c;
                b.cjs && 1 < e.length && (c = a.bind(b.require, b));
                e = e.apply(b, b.cjs ? [d, c, b.exports, b] : n.getModules(d, b.getRequiresWithAlias()));
                void 0 !== e && (b.exports = e)
            } else b.exports = e;
            b.status = g
        }, getModNamesAsArray: function (a) {
            "string" === typeof a && (a = a.replace(/\s+/g, "").split(","));
            return a
        }, normalizeModNames: function (a, d, b) {
            return n.unalias(a, n.normalizeModNamesWithAlias(a, d, b))
        }, unalias: function (a, d) {
            for (var b = [].concat(d),
                     e, c, g, i = 0, h, k = a.Env.mods; !i;) {
                i = 1;
                for (e = b.length - 1; 0 <= e; e--)if ((c = k[b[e]]) && "alias" in c) {
                    i = 0;
                    g = c.alias;
                    "string" === typeof g && (g = [g]);
                    for (h = g.length - 1; 0 <= h; h--)g[h] || g.splice(h, 1);
                    b.splice.apply(b, [e, 1].concat(f(g)))
                }
            }
            return b
        }, normalizeModNamesWithAlias: function (a, d, b) {
            var e = [], c, g;
            if (d) {
                c = 0;
                for (g = d.length; c < g; c++)d[c] && e.push(l(a, f(d[c])))
            }
            b && (e = n.normalDepModuleName(b, e));
            return e
        }, registerModule: function (d, b, c, g) {
            var b = h(b), f = d.Env.mods, i = f[b];
            i && void 0 !== i.factory || (n.createModuleInfo(d, b), i = f[b],
                a.mix(i, {name: b, status: e, factory: c}), a.mix(i, g))
        }, getHash: function (a) {
            var d = 5381, b;
            for (b = a.length; -1 < --b;)d = (d << 5) + d + a.charCodeAt(b);
            return d + ""
        }, getRequiresFromFn: function (a) {
            var d = [];
            a.toString().replace(r, "").replace(o, function (a, b) {
                d.push(b.match(/^\s*["']([^'"\s]+)["']\s*$/)[1])
            });
            return d
        }
    });
    var r = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg, o = /[^.'"]\s*require\s*\(([^)]+)\)/g
})(KISSY);
(function (a) {
    function f(a, b) {
        return b in a ? a[b] : a.runtime.Config[b]
    }

    function h(d) {
        a.mix(this, d)
    }

    function l(d) {
        this.exports = {};
        this.status = k.Status.INIT;
        this.factory = this.name = void 0;
        this.cjs = 1;
        a.mix(this, d);
        this.waitedCallbacks = []
    }

    function m(a) {
        for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
        return b
    }

    function c(a) {
        "function" === typeof a && (a = {success: a});
        if (a && a.success) {
            var b = a.success;
            a.success = function () {
                b.apply(this, m(arguments).slice(1))
            };
            a.sync = 1;
            return a
        }
    }

    var k = a.Loader, j = a.Path, b = k.Utils;
    h.prototype =
    {
        constructor: h, reset: function (b) {
        a.mix(this, b)
    }, getTag: function () {
        return f(this, "tag")
    }, getName: function () {
        return this.name
    }, getBase: function () {
        return f(this, "base")
    }, getPrefixUriForCombo: function () {
        var a = this.name;
        return this.getBase() + (a && !this.isIgnorePackageNameInUri() ? a + "/" : "")
    }, getPackageUri: function () {
        this.packageUri || (this.packageUri = new a.Uri(this.getPrefixUriForCombo()));
        return this.packageUri
    }, getBaseUri: function () {
        return f(this, "baseUri")
    }, isDebug: function () {
        return f(this, "debug")
    }, isIgnorePackageNameInUri: function () {
        return f(this,
            "ignorePackageNameInUri")
    }, getCharset: function () {
        return f(this, "charset")
    }, isCombine: function () {
        return f(this, "combine")
    }, getGroup: function () {
        return f(this, "group")
    }
    };
    k.Package = h;
    l.prototype = {
        kissy: 1, constructor: l, use: function (a, e) {
            a = b.getModNamesAsArray(a);
            return KISSY.use(b.normalDepModuleName(this.name, a), e)
        }, resolve: function (a) {
            return this.getFullPathUri().resolve(a)
        }, resolveByName: function (a) {
            return b.normalDepModuleName(this.name, a)
        }, require: function (b) {
            if ("string" === typeof b)return a.require(b,
                this.name);
            for (var e = b, g = 0; g < e.length; g++)e[g] = this.resolveByName(e[g]);
            g = m(arguments);
            g[0] = e;
            g[1] = c(g[1]);
            a.use.apply(a, g)
        }, wait: function (a) {
            this.waitedCallbacks.push(a)
        }, notifyAll: function () {
            for (var a, b = this.waitedCallbacks.length, c = 0; c < b; c++) {
                a = this.waitedCallbacks[c];
                try {
                    a(this)
                } catch (g) {
                    setTimeout(function () {
                        throw g;
                    }, 0)
                }
            }
            this.waitedCallbacks = []
        }, getType: function () {
            var a = this.type;
            a || (this.type = a = ".css" === j.extname(this.name).toLowerCase() ? "css" : "js");
            return a
        }, getFullPathUri: function () {
            var b,
                c, g, f;
            if (!this.fullPathUri) {
                if (this.fullpath)c = new a.Uri(this.fullpath); else {
                    c = this.getPackage();
                    b = c.getBaseUri();
                    f = this.getPath();
                    if (c.isIgnorePackageNameInUri() && (g = c.name))f = j.relative(g, f);
                    c = b.resolve(f);
                    if (b = this.getTag())b += "." + this.getType(), c.query.set("t", b)
                }
                this.fullPathUri = c
            }
            return this.fullPathUri
        }, getFullPath: function () {
            var a;
            this.fullpath || (a = this.getFullPathUri(), this.fullpath = a.toString());
            return this.fullpath
        }, getPath: function () {
            var a;
            if (!(a = this.path)) {
                a = this.name;
                var b = "." + this.getType(),
                    c = "-min";
                a = j.join(j.dirname(a), j.basename(a, b));
                this.getPackage().isDebug() && (c = "");
                a = this.path = a + c + b
            }
            return a
        }, getName: function () {
            return this.name
        }, getPackage: function () {
            var b;
            if (!(b = this.packageInfo)) {
                var c = this.name;
                b = this.runtime.config("packages");
                var c = c + "/", f = "", i;
                for (i in b)a.startsWith(c, i + "/") && i.length > f.length && (f = i);
                b = this.packageInfo = b[f] || g
            }
            return b
        }, getTag: function () {
            return this.tag || this.getPackage().getTag()
        }, getCharset: function () {
            return this.charset || this.getPackage().getCharset()
        },
        getRequiresWithAlias: function () {
            var a = this.requiresWithAlias, c = this.requires;
            if (!c || 0 === c.length)return c || [];
            a || (this.requiresWithAlias = a = b.normalizeModNamesWithAlias(this.runtime, c, this.name));
            return a
        }, getRequiredMods: function () {
            var d = this.runtime;
            return a.map(this.getNormalizedRequires(), function (a) {
                return b.createModuleInfo(d, a)
            })
        }, getNormalizedRequires: function () {
            var a, c = this.normalizedRequiresStatus, g = this.status, f = this.requires;
            if (!f || 0 === f.length)return f || [];
            if ((a = this.normalizedRequires) &&
                c === g)return a;
            this.normalizedRequiresStatus = g;
            return this.normalizedRequires = b.normalizeModNames(this.runtime, f, this.name)
        }
    };
    k.Module = l;
    var g = new h({name: "", runtime: a})
})(KISSY);
(function (a) {
    function f(a) {
        var c = 0;
        if (m.webkit)a.sheet && (c = 1); else if (a.sheet)try {
            a.sheet.cssRules && (c = 1)
        } catch (d) {
            "NS_ERROR_DOM_SECURITY_ERR" === d.name && (c = 1)
        }
        return c
    }

    function h() {
        for (var b in j) {
            var c = j[b], d = c.node;
            f(d, b) && (c.callback && c.callback.call(d), delete j[b])
        }
        k = a.isEmptyObject(j) ? 0 : setTimeout(h, l)
    }

    var l = 30, m = a.UA, c = a.Loader.Utils, k = 0, j = {};
    c.pollCss = function (a, c) {
        var d;
        d = j[a.href] = {};
        d.node = a;
        d.callback = c;
        k || h()
    };
    c.isCssLoaded = f
})(KISSY);
(function (a) {
    var f = a.Env.host.document, h = a.Loader.Utils, l = a.Path, m = {}, c, k = a.UA;
    a.getScript = function (j, b, g) {
        function d() {
            var a = o.readyState;
            if (!a || "loaded" === a || "complete" === a)o.onreadystatechange = o.onload = null, t(0)
        }

        var e = b, s = 0, i, n, v, r;
        a.startsWith(l.extname(j).toLowerCase(), ".css") && (s = 1);
        a.isPlainObject(e) && (b = e.success, i = e.error, n = e.timeout, g = e.charset, v = e.attrs);
        e = m[j] = m[j] || [];
        e.push([b, i]);
        if (1 < e.length)return e.node;
        var o = f.createElement(s ? "link" : "script");
        v && a.each(v, function (a, b) {
            o.setAttribute(b,
                a)
        });
        g && (o.charset = g);
        s ? (o.href = j, o.rel = "stylesheet") : (o.src = j, o.async = !0);
        e.node = o;
        var t = function (b) {
            var c;
            if (r) {
                r.cancel();
                r = void 0
            }
            a.each(m[j], function (a) {
                (c = a[b]) && c.call(o)
            });
            delete m[j]
        }, b = "onload" in o, g = a.Config.forceCssPoll || k.webkit && 536 > k.webkit;
        s && g && b && (b = !1);
        b ? (o.onload = d, o.onerror = function () {
            o.onerror = null;
            t(1)
        }) : s ? h.pollCss(o, function () {
            t(0)
        }) : o.onreadystatechange = d;
        n && (r = a.later(function () {
            t(1)
        }, 1E3 * n));
        c || (c = h.docHead());
        s ? c.appendChild(o) : c.insertBefore(o, c.firstChild);
        return o
    }
})(KISSY);
(function (a, f) {
    function h(b) {
        b = b.replace(/\\/g, "/");
        "/" !== b.charAt(b.length - 1) && (b += "/");
        k ? b = k.resolve(b) : (a.startsWith(b, "file:") || (b = "file:" + b), b = new a.Uri(b));
        return b
    }

    var l = a.Loader, m = l.Utils, c = a.Env.host.location, k, j, b = a.Config.fns;
    if (!a.UA.nodejs && c && (j = c.href))k = new a.Uri(j);
    a.Config.loadModsFn = function (b, c) {
        a.getScript(b.fullpath, c)
    };
    b.packages = function (b) {
        var c, e = this.Config, k = e.packages = e.packages || {};
        return b ? (a.each(b, function (b, e) {
            c = b.name || e;
            var f = h(b.base || b.path);
            b.name = c;
            b.base = f.toString();
            b.baseUri = f;
            b.runtime = a;
            delete b.path;
            k[c] ? k[c].reset(b) : k[c] = new l.Package(b)
        }), f) : !1 === b ? (e.packages = {}, f) : k
    };
    b.modules = function (b) {
        var c = this;
        b && a.each(b, function (b, f) {
            var g = m.createModuleInfo(c, f, b);
            g.status === l.Status.INIT && a.mix(g, b)
        })
    };
    b.base = function (a) {
        var b = this.Config;
        if (!a)return b.base;
        a = h(a);
        b.base = a.toString();
        b.baseUri = a;
        return f
    }
})(KISSY);
(function (a, f) {
    function h(b, c, d, e, i) {
        var h = c && c.length, j = [], l = [];
        a.each(c, function (c) {
            var q, m = {
                timeout: i, success: function () {
                    l.push(c);
                    q && r && (g.registerModule(b, q.name, r.factory, r.config), r = f);
                    --h || d(l, j)
                }, error: function () {
                    j.push(c);
                    --h || d(l, j)
                }, charset: e
            };
            c.combine || (q = c.mods[0], "css" === q.getType() ? q = f : k && (o = q.name, a.now(), m.attrs = {"data-mod-name": q.name}));
            a.Config.loadModsFn(c, m)
        })
    }

    function l(b, c) {
        a.mix(this, {runtime: b, waitingModules: c})
    }

    function m(a, b) {
        if (!a && "function" === typeof b && 1 < b.length) {
            var c =
                g.getRequiresFromFn(b);
            c.length && (a = a || {}, a.requires = c)
        } else a && a.requires && !a.cjs && (a.cjs = 0);
        return a
    }

    function c(a, b) {
        for (var a = a.split(/\//), b = b.split(/\//), c = Math.min(a.length, b.length), d = 0; d < c && a[d] === b[d]; d++);
        return a.slice(0, d).join("/") + "/"
    }

    var k = 10 > a.UA.ieMode, j = a.Loader, b = j.Status, g = j.Utils, d = g.getHash, e = b.LOADING, s = b.LOADED, i = b.READY_TO_ATTACH, n = b.ERROR, v = a.now();
    l.groupTag = v;
    var r, o;
    l.add = function (b, c, d, e, i) {
        if (3 === i && a.isArray(c))var h = c, c = d, d = {requires: h, cjs: 1};
        if ("function" === typeof b ||
            1 === i)if (d = c, c = b, d = m(d, c), k) {
            for (var b = a.Env.host.document.getElementsByTagName("script"), j, i = b.length - 1; 0 <= i; i--)if (h = b[i], "interactive" === h.readyState) {
                j = h;
                break
            }
            b = j ? j.getAttribute("data-mod-name") : o;
            g.registerModule(e, b, c, d);
            o = null
        } else r = {factory: c, config: d}; else k ? o = null : r = f, d = m(d, c), g.registerModule(e, b, c, d)
    };
    a.augment(l, {
        use: function (b) {
            var c = a.Config.timeout, d = this.runtime, b = a.keys(this.calculate(b));
            g.createModulesInfo(d, b);
            b = this.getComboUrls(b);
            a.each(b.css, function (b) {
                h(d, b, function (b,
                                  c) {
                    a.each(b, function (b) {
                        a.each(b.mods, function (b) {
                            g.registerModule(d, b.name, a.noop);
                            b.notifyAll()
                        })
                    });
                    a.each(c, function (b) {
                        a.each(b.mods, function (a) {
                            a.status = n;
                            a.notifyAll()
                        })
                    })
                }, b.charset, c)
            });
            a.each(b.js, function (b) {
                h(d, b, function () {
                    a.each(b, function (b) {
                        a.each(b.mods, function (a) {
                            a.factory || (a.status = n);
                            a.notifyAll()
                        })
                    })
                }, b.charset, c)
            })
        }, calculate: function (a, b, c) {
            var d, f, h, k, j = this.waitingModules, l = this.runtime, c = c || {}, b = b || {};
            for (d = 0; d < a.length; d++)f = a[d], b[f] || (b[f] = 1, h = g.createModuleInfo(l, f),
                k = h.status, k >= i || (k !== s && !j.contains(f) && (k !== e && (h.status = e, c[f] = 1), h.wait(function (a) {
                j.remove(a.name);
                j.notifyAll()
            }), j.add(f)), this.calculate(h.getNormalizedRequires(), b, c)));
            return c
        }, getComboMods: function (b, d) {
            for (var e = {}, f, i = this.runtime, h = 0, k = b.length, j, l, m, o, n, s, r, G, I; h < k; ++h) {
                j = b[h];
                j = g.createModuleInfo(i, j);
                m = j.getType();
                I = j.getFullPath();
                l = j.getPackage();
                r = l.name;
                n = l.getCharset();
                o = l.getTag();
                G = l.getGroup();
                s = l.getPrefixUriForCombo();
                f = l.getPackageUri();
                var z = r;
                (j.canBeCombined = l.isCombine() &&
                    a.startsWith(I, s)) && G ? (z = G + "_" + n + "_" + v, (l = d[z]) ? l.isSameOriginAs(f) ? l.setPath(c(l.getPath(), f.getPath())) : (z = r, d[r] = f) : d[z] = f.clone()) : d[r] = f;
                f = e[m] = e[m] || {};
                (m = f[z]) ? 1 === m.tags.length && m.tags[0] === o || m.tags.push(o) : (m = f[z] = [], m.charset = n, m.tags = [o]);
                m.push(j)
            }
            return e
        }, getComboUrls: function (a) {
            var b = this.runtime.Config, c = b.comboPrefix, e = b.comboSep, f = b.comboMaxFileNum, b = b.comboMaxUrlLength, g = {}, a = this.getComboMods(a, g), i = {}, h;
            for (h in a) {
                i[h] = {};
                for (var k in a[h]) {
                    var j = [], l = [], m = a[h][k], o = m.tags,
                        n = (o = 1 < o.length ? d(o.join("")) : o[0]) ? "?t=" + encodeURIComponent(o) + "." + h : "", o = n.length, s = g[k].toString(), r = s.length, v = s + c, A = i[h][k] = [], s = v.length;
                    A.charset = m.charset;
                    A.mods = [];
                    for (var J = function () {
                        A.push({combine: 1, fullpath: v + j.join(e) + n, mods: l})
                    }, C = 0; C < m.length; C++) {
                        var B = m[C];
                        A.mods.push(B);
                        var D = B.getFullPath();
                        if (B.canBeCombined) {
                            if (D = D.slice(r).replace(/\?.*$/, ""), j.push(D), l.push(B), j.length > f || s + j.join(e).length + o > b)j.pop(), l.pop(), J(), j = [], l = [], C--
                        } else A.push({combine: 0, fullpath: D, mods: [B]})
                    }
                    j.length &&
                    J()
                }
            }
            return i
        }
    });
    j.ComboLoader = l
})(KISSY);
(function (a, f) {
    function h(b) {
        a.mix(this, {fn: b, waitMods: {}})
    }

    var l = a.Loader, m = a.Env, c = l.Utils, k = a.setImmediate, j = l.ComboLoader;
    h.prototype = {
        constructor: h, notifyAll: function () {
            var b = this.fn;
            b && a.isEmptyObject(this.waitMods) && (this.fn = null, b())
        }, add: function (a) {
            this.waitMods[a] = 1
        }, remove: function (a) {
            delete this.waitMods[a]
        }, contains: function (a) {
            return this.waitMods[a]
        }
    };
    l.WaitingModules = h;
    a.mix(a, {
        add: function (b, c, d) {
            j.add(b, c, d, a, arguments.length)
        }, use: function (b, g) {
            function d() {
                ++v;
                var b = [];
                a.now();
                c.checkModsLoadRecursively(e, a, f, b) ? (c.attachModsRecursively(e, a), g && (m ? r() : k(r))) : b.length ? i && (m ? i.apply(a, b) : k(function () {
                    i.apply(a, b)
                })) : (o.fn = d, l.use(e))
            }

            var e, l, i, m, v = 0, r, o = new h(d);
            a.isPlainObject(g) && (m = g.sync, i = g.error, g = g.success);
            r = function () {
                g.apply(a, c.getModules(a, b))
            };
            b = c.getModNamesAsArray(b);
            b = c.normalizeModNamesWithAlias(a, b);
            e = c.unalias(a, b);
            l = new j(a, o);
            m ? o.notifyAll() : k(function () {
                o.notifyAll()
            });
            return a
        }, require: function (b, f) {
            if (b) {
                var d = c.unalias(a, c.normalizeModNamesWithAlias(a,
                    [b], f));
                c.attachModsRecursively(d, a);
                return c.getModules(a, d)[1]
            }
        }
    });
    m.mods = {}
})(KISSY);
(function (a) {
    function f(d) {
        var e = d.src || "";
        if (!e.match(g))return 0;
        var d = (d = d.getAttribute("data-config")) ? (new Function("return " + d))() : {}, f = d.comboPrefix || k, i = d.comboSep || j, h, l = e.indexOf(f);
        -1 === l ? h = e.replace(b, "$1") : (h = e.substring(0, l), "/" !== h.charAt(h.length - 1) && (h += "/"), f = e.substring(l + f.length).split(i), a.each(f, function (a) {
            if (a.match(g))return h += a.replace(b, "$1"), !1
        }));
        "tag" in d || (f = e.lastIndexOf("?t="), -1 !== f && (e = e.substring(f + 1), d.tag = m.getHash(c + e)));
        d.base = d.base || h;
        return d
    }

    function h() {
        var a =
            l.getElementsByTagName("script"), b, c;
        for (b = a.length - 1; 0 <= b; b--)if (c = f(a[b]))return c;
        return null
    }

    var l = a.Env.host && a.Env.host.document, m = a.Loader.Utils, c = "20140828131714", k = "??", j = ",", b = /^(.*)(seed|kissy)(?:-min)?\.js[^/]*/i, g = /(seed|kissy)(?:-min)?\.js/i;
    a.config({comboPrefix: k, comboSep: j, charset: "utf-8", lang: "zh-cn"});
    a.UA.nodejs ? a.config({
        charset: "utf-8",
        base: __dirname.replace(/\\/g, "/").replace(/\/$/, "") + "/"
    }) : l && l.getElementsByTagName && a.config(a.mix({comboMaxUrlLength: 2E3, comboMaxFileNum: 40}, h()))
})(KISSY);
KISSY.add("i18n", {
    alias: function (a, f) {
        return f + "/i18n/" + a.Config.lang
    }
});
(function (a, f) {
    function h() {
        if (!b) {
            c && !m.nodejs && v(l, i, h);
            b = 1;
            for (var d = 0; d < g.length; d++)try {
                g[d](a)
            } catch (e) {
                setTimeout(function () {
                    throw e;
                }, 0)
            }
        }
    }

    var l = a.Env.host, m = a.UA, c = l.document, k = c && c.documentElement, j = l.location, b = 0, g = [], d = /^#?([\w-]+)$/, e = /\S/, s = !(!c || !c.addEventListener), i = "load", n = s ? function (a, b, c) {
        a.addEventListener(b, c, !1)
    } : function (a, b, c) {
        a.attachEvent("on" + b, c)
    }, v = s ? function (a, b, c) {
        a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent("on" + b, c)
    };
    a.mix(a, {
        isWindow: function (a) {
            return null !=
                a && a == a.window
        }, parseXML: function (a) {
            if (a.documentElement)return a;
            var b;
            try {
                l.DOMParser ? b = (new DOMParser).parseFromString(a, "text/xml") : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = !1, b.loadXML(a))
            } catch (c) {
                b = f
            }
            !b || !b.documentElement || b.getElementsByTagName("parsererror");
            return b
        }, globalEval: function (a) {
            a && e.test(a) && (l.execScript ? l.execScript(a) : l.eval.call(l, a))
        }, ready: function (c) {
            if (b)try {
                c(a)
            } catch (d) {
                setTimeout(function () {
                    throw d;
                }, 0)
            } else g.push(c);
            return this
        }, available: function (b, e) {
            var b =
                (b + "").match(d)[1], f = 1, g = a.later(function () {
                if (500 < ++f)g.cancel(); else {
                    var a = c.getElementById(b);
                    a && (e(a), g.cancel())
                }
            }, 40, !0)
        }
    });
    if (j && -1 !== (j.search || "").indexOf("ks-debug"))a.Config.debug = !0;
    (function () {
        if (!c || "complete" === c.readyState)h(); else if (n(l, i, h), s) {
            var a = function () {
                v(c, "DOMContentLoaded", a);
                h()
            };
            n(c, "DOMContentLoaded", a)
        } else {
            var b = function () {
                "complete" === c.readyState && (v(c, "readystatechange", b), h())
            };
            n(c, "readystatechange", b);
            var d, e = k && k.doScroll;
            try {
                d = null === l.frameElement
            } catch (f) {
                d = !1
            }
            if (e && d) {
                var g = function () {
                    try {
                        e("left"), h()
                    } catch (a) {
                        setTimeout(g, 40)
                    }
                };
                g()
            }
        }
    })();
    if (m.ie)try {
        c.execCommand("BackgroundImageCache", !1, !0)
    } catch (r) {
    }
})(KISSY, void 0);
(function (a) {
    a.config({
        modules: {
            core: {alias: "dom,event,io,anim,base,node,json,ua,cookie".split(",")},
            ajax: {alias: "io"},
            "rich-base": {alias: "base"}
        }
    });
    if ("undefined" !== typeof location) {
        var f = a.startsWith(location.href, "https") ? "https://s.tbcdn.cn/s/kissy/" : "http://a.tbcdn.cn/s/kissy/";
        a.config({packages: {gallery: {base: f}, kg: {base: "//g.alicdn.com/"}, mobile: {base: f}}})
    }
})(KISSY);
(function (a, f, h) {
    a({"anim/transition?": {alias: KISSY.Features.isTransitionSupported() ? "anim/transition" : ""}});
    a({anim: {requires: ["anim/base", "anim/timer", "anim/transition?"]}});
    a({"anim/base": {requires: ["dom", "promise"]}});
    a({"anim/timer": {requires: ["dom", "anim/base"]}});
    a({"anim/transition": {requires: ["dom", "anim/base"]}});
    a({attribute: {requires: ["event/custom"]}});
    a({base: {requires: ["attribute"]}});
    a({button: {requires: ["node", "component/control"]}});
    a({color: {requires: ["attribute"]}});
    a({
        combobox: {
            requires: ["node",
                "component/control", "menu", "attribute", "io"]
        }
    });
    a({"component/container": {requires: ["component/control", "component/manager"]}});
    a({"component/control": {requires: ["node", "base", "promise", "component/manager", "xtemplate/runtime"]}});
    a({"component/extension/align": {requires: ["node"]}});
    a({"component/extension/content-render": {requires: ["component/extension/content-xtpl"]}});
    a({"component/extension/delegate-children": {requires: ["node", "component/manager"]}});
    a({"component/plugin/drag": {requires: ["dd"]}});
    a({"component/plugin/resize": {requires: ["resizable"]}});
    a({"date/format": {requires: ["date/gregorian", "i18n!date"]}});
    a({"date/gregorian": {requires: ["i18n!date"]}});
    a({"date/picker": {requires: "node,date/gregorian,i18n!date/picker,component/control,date/format,date/picker-xtpl".split(",")}});
    a({"date/popup-picker": {requires: ["date/picker-xtpl", "date/picker", "component/extension/shim", "component/extension/align"]}});
    a({dd: {requires: ["node", "base"]}});
    a({"dd/plugin/constrain": {requires: ["node", "base"]}});
    a({"dd/plugin/proxy": {requires: ["node", "dd", "base"]}});
    a({"dd/plugin/scroll": {requires: ["node", "dd", "base"]}});
    a({
        "dom/basic": {alias: ["dom/base", f.isIELessThan(9) ? "dom/ie" : "", f.isClassListSupported() ? "" : "dom/class-list"]},
        dom: {alias: ["dom/basic", !f.isQuerySelectorSupported() ? "dom/selector" : ""]}
    });
    a({"dom/base": {requires: ["ua"]}});
    a({"dom/class-list": {requires: ["dom/base"]}});
    a({"dom/ie": {requires: ["dom/base"]}});
    a({"dom/selector": {requires: ["dom/basic"]}});
    a({
        editor: {
            requires: ["node", "html-parser",
                "component/control", "ua"]
        }
    });
    a({event: {requires: ["event/dom", "event/custom"]}});
    a({"event/custom": {requires: ["event/base"]}});
    a({"event/dom": {alias: ["event/dom/base", f.isTouchGestureSupported() ? "event/dom/touch" : "", f.isDeviceMotionSupported() ? "event/dom/shake" : "", f.isHashChangeSupported() ? "" : "event/dom/hashchange", f.isIELessThan(9) ? "event/dom/ie" : "", h.ie ? "" : "event/dom/focusin"]}});
    a({"event/dom/base": {requires: ["event/base", "dom"]}});
    a({"event/dom/focusin": {requires: ["event/dom/base"]}});
    a({
        "event/dom/hashchange": {
            requires: ["event/dom/base",
                "dom"]
        }
    });
    a({"event/dom/ie": {requires: ["event/dom/base", "dom"]}});
    a({"event/dom/shake": {requires: ["event/dom/base"]}});
    a({"event/dom/touch": {requires: ["event/dom/base", "dom"]}});
    a({"filter-menu": {requires: ["menu", "component/extension/content-xtpl", "component/extension/content-render"]}});
    a({io: {requires: ["dom", "event/custom", "promise", "event/dom"]}});
    a({kison: {requires: ["base"]}});
    a({menu: {requires: "node,component/container,component/extension/delegate-children,component/control,component/extension/content-render,component/extension/content-xtpl,component/extension/align,component/extension/shim".split(",")}});
    a({menubutton: {requires: ["node", "button", "component/extension/content-xtpl", "component/extension/content-render", "menu"]}});
    a({mvc: {requires: ["io", "json", "attribute", "node"]}});
    a({node: {requires: ["dom", "event/dom", "anim"]}});
    a({overlay: {requires: "component/container,component/extension/shim,component/extension/align,node,component/extension/content-xtpl,component/extension/content-render".split(",")}});
    a({resizable: {requires: ["node", "base", "dd"]}});
    a({"resizable/plugin/proxy": {requires: ["node", "base"]}});
    a({"scroll-view": {alias: f.isTouchGestureSupported() ? "scroll-view/drag" : "scroll-view/base"}});
    a({"scroll-view/base": {requires: ["node", "anim", "component/container", "component/extension/content-render"]}});
    a({"scroll-view/drag": {requires: ["scroll-view/base", "node", "anim"]}});
    a({"scroll-view/plugin/pull-to-refresh": {requires: ["base"]}});
    a({"scroll-view/plugin/scrollbar": {requires: ["base", "node", "component/control"]}});
    a({separator: {requires: ["component/control"]}});
    a({
        "split-button": {
            requires: ["component/container",
                "button", "menubutton"]
        }
    });
    a({stylesheet: {requires: ["dom"]}});
    a({swf: {requires: ["dom", "json", "attribute"]}});
    a({tabs: {requires: ["component/container", "toolbar", "button"]}});
    a({toolbar: {requires: ["component/container", "component/extension/delegate-children", "node"]}});
    a({tree: {requires: ["node", "component/container", "component/extension/content-xtpl", "component/extension/content-render", "component/extension/delegate-children"]}});
    a({xtemplate: {requires: ["xtemplate/runtime", "xtemplate/compiler"]}});
    a({"xtemplate/compiler": {requires: ["xtemplate/runtime"]}});
    a({"xtemplate/runtime": {requires: ["path"]}})
})(function (a) {
    KISSY.config("modules", a)
}, KISSY.Features, KISSY.UA);
(function (a) {
    a.add("ua", function () {
        return a.UA
    });
    a.add("uri", function () {
        return a.Uri
    });
    a.add("path", function () {
        return a.Path
    });
    var f = a.UA, h = a.Env.host, l = (f.nodejs && "object" === typeof global ? global : h).JSON;
    9 > f.ieMode && (l = null);
    if (l)a.add("json", function () {
        return a.JSON = l
    }), a.parseJson = function (a) {
        return l.parse(a)
    }; else {
        var m = /^[\],:{}\s]*$/, c = /(?:^|:|,)(?:\s*\[)+/g, k = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;
        a.parseJson = function (b) {
            return null ===
            b ? b : "string" === typeof b && (b = a.trim(b)) && m.test(b.replace(k, "@").replace(j, "]").replace(c, "")) ? (new Function("return " + b))() : a.error("Invalid Json: " + b)
        }
    }
    a.UA.nodejs && (a.KISSY = a, module.exports = a)
})(KISSY);