(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[825], {
    9967: function (e) {
        "use strict";
        var t = Object.prototype.hasOwnProperty, n = Object.prototype.toString, r = Object.defineProperty,
            i = Object.getOwnPropertyDescriptor, a = function (e) {
                return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
            }, o = function (e) {
                if (!e || "[object Object]" !== n.call(e)) return !1;
                var r, i = t.call(e, "constructor"),
                    a = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
                if (e.constructor && !i && !a) return !1;
                for (r in e) ;
                return void 0 === r || t.call(e, r)
            }, s = function (e, t) {
                r && "__proto__" === t.name ? r(e, t.name, {
                    enumerable: !0,
                    configurable: !0,
                    value: t.newValue,
                    writable: !0
                }) : e[t.name] = t.newValue
            }, l = function (e, n) {
                if ("__proto__" === n) {
                    if (!t.call(e, n)) return;
                    if (i) return i(e, n).value
                }
                return e[n]
            };
        e.exports = function e() {
            var t, n, r, i, c, u, d = arguments[0], p = 1, h = arguments.length, m = !1;
            for ("boolean" == typeof d && (m = d, d = arguments[1] || {}, p = 2), (null == d || "object" != typeof d && "function" != typeof d) && (d = {}); p < h; ++p) if (t = arguments[p], null != t) for (n in t) r = l(d, n), d !== (i = l(t, n)) && (m && i && (o(i) || (c = a(i))) ? (c ? (c = !1, u = r && a(r) ? r : []) : u = r && o(r) ? r : {}, s(d, {
                name: n,
                newValue: e(m, u, i)
            })) : void 0 !== i && s(d, {name: n, newValue: i}));
            return d
        }
    }, 2129: function (e) {
        !function () {
            var t;

            function n(e) {
                for (var t, n, r, i, a = 1, o = [].slice.call(arguments), s = 0, l = e.length, c = "", u = !1, d = !1, p = function () {
                    return o[a++]
                }; s < l; ++s) if (t = e[s], u) switch (u = !1, "." == t ? (d = !1, t = e[++s]) : "0" == t && "." == e[s + 1] ? (d = !0, s += 2, t = e[s]) : d = !0, i = function () {
                    for (var n = ""; /\d/.test(e[s]);) n += e[s++], t = e[s];
                    return n.length > 0 ? parseInt(n) : null
                }(), t) {
                    case"b":
                        c += parseInt(p(), 10).toString(2);
                        break;
                    case"c":
                        "string" == typeof (n = p()) || n instanceof String ? c += n : c += String.fromCharCode(parseInt(n, 10));
                        break;
                    case"d":
                        c += parseInt(p(), 10);
                        break;
                    case"f":
                        r = String(parseFloat(p()).toFixed(i || 6)), c += d ? r : r.replace(/^0/, "");
                        break;
                    case"j":
                        c += JSON.stringify(p());
                        break;
                    case"o":
                        c += "0" + parseInt(p(), 10).toString(8);
                        break;
                    case"s":
                        c += p();
                        break;
                    case"x":
                        c += "0x" + parseInt(p(), 10).toString(16);
                        break;
                    case"X":
                        c += "0x" + parseInt(p(), 10).toString(16).toUpperCase();
                        break;
                    default:
                        c += t
                } else "%" === t ? u = !0 : c += t;
                return c
            }

            (t = e.exports = n).format = n, t.vsprintf = function (e, t) {
                return n.apply(null, [e].concat(t))
            }, "undefined" != typeof console && "function" == typeof console.log && (t.printf = function () {
                console.log(n.apply(null, arguments))
            })
        }()
    }, 4645: function (e) {
        var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, n = /\n/g, r = /^\s*/, i = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
            a = /^:\s*/, o = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, s = /^[;\s]*/, l = /^\s+|\s+$/g;

        function c(e) {
            return e ? e.replace(l, "") : ""
        }

        e.exports = function (e, l) {
            if ("string" != typeof e) throw TypeError("First argument must be a string");
            if (!e) return [];
            l = l || {};
            var u = 1, d = 1;

            function p(e) {
                var t = e.match(n);
                t && (u += t.length);
                var r = e.lastIndexOf("\n");
                d = ~r ? e.length - r : d + e.length
            }

            function h() {
                var e = {line: u, column: d};
                return function (t) {
                    return t.position = new m(e), E(r), t
                }
            }

            function m(e) {
                this.start = e, this.end = {line: u, column: d}, this.source = l.source
            }

            m.prototype.content = e;
            var f = [];

            function g(t) {
                var n = Error(l.source + ":" + u + ":" + d + ": " + t);
                if (n.reason = t, n.filename = l.source, n.line = u, n.column = d, n.source = e, l.silent) f.push(n); else throw n
            }

            function E(t) {
                var n = t.exec(e);
                if (n) {
                    var r = n[0];
                    return p(r), e = e.slice(r.length), n
                }
            }

            function T(e) {
                var t;
                for (e = e || []; t = _();) !1 !== t && e.push(t);
                return e
            }

            function _() {
                var t = h();
                if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                    for (var n = 2; "" != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1));) ++n;
                    if (n += 2, "" === e.charAt(n - 1)) return g("End of comment missing");
                    var r = e.slice(2, n - 2);
                    return d += 2, p(r), e = e.slice(n), d += 2, t({type: "comment", comment: r})
                }
            }

            return E(r), function () {
                var e, n = [];
                for (T(n); e = function () {
                    var e = h(), n = E(i);
                    if (n) {
                        if (_(), !E(a)) return g("property missing ':'");
                        var r = E(o), l = e({
                            type: "declaration",
                            property: c(n[0].replace(t, "")),
                            value: r ? c(r[0].replace(t, "")) : ""
                        });
                        return E(s), l
                    }
                }();) !1 !== e && (n.push(e), T(n));
                return n
            }()
        }
    }, 6475: function (e) {/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        e.exports = function (e) {
            return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
    }, 4825: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, {
            Markdown: function () {
                return aA
            }, PreCode: function () {
                return ab
            }
        });
        var r = {};
        n.r(r), n.d(r, {
            attentionMarkers: function () {
                return e1
            }, contentInitial: function () {
                return eY
            }, disable: function () {
                return e0
            }, document: function () {
                return eW
            }, flow: function () {
                return eV
            }, flowInitial: function () {
                return eQ
            }, insideSpan: function () {
                return eJ
            }, string: function () {
                return eX
            }, text: function () {
                return eZ
            }
        });
        var i = {};
        n.r(i), n.d(i, {
            boolean: function () {
                return tM
            }, booleanish: function () {
                return tL
            }, commaOrSpaceSeparated: function () {
                return tB
            }, commaSeparated: function () {
                return tH
            }, number: function () {
                return tP
            }, overloadedBoolean: function () {
                return tD
            }, spaceSeparated: function () {
                return tF
            }
        });
        var a = n(9268), o = n(6006), s = n(6475);

        function l(e) {
            return e && "object" == typeof e ? "position" in e || "type" in e ? u(e.position) : "start" in e || "end" in e ? u(e) : "line" in e || "column" in e ? c(e) : "" : ""
        }

        function c(e) {
            return d(e && e.line) + ":" + d(e && e.column)
        }

        function u(e) {
            return c(e && e.start) + "-" + c(e && e.end)
        }

        function d(e) {
            return e && "number" == typeof e ? e : 1
        }

        class p extends Error {
            constructor(e, t, n) {
                let r = [null, null], i = {start: {line: null, column: null}, end: {line: null, column: null}};
                if (super(), "string" == typeof t && (n = t, t = void 0), "string" == typeof n) {
                    let e = n.indexOf(":");
                    -1 === e ? r[1] = n : (r[0] = n.slice(0, e), r[1] = n.slice(e + 1))
                }
                t && ("type" in t || "position" in t ? t.position && (i = t.position) : "start" in t || "end" in t ? i = t : ("line" in t || "column" in t) && (i.start = t)), this.name = l(t) || "1:1", this.message = "object" == typeof e ? e.message : e, this.stack = "", "object" == typeof e && e.stack && (this.stack = e.stack), this.reason = this.message, this.fatal, this.line = i.start.line, this.column = i.start.column, this.position = i, this.source = r[0], this.ruleId = r[1], this.file, this.actual, this.expected, this.url, this.note
            }
        }

        p.prototype.file = "", p.prototype.name = "", p.prototype.reason = "", p.prototype.message = "", p.prototype.stack = "", p.prototype.fatal = null, p.prototype.column = null, p.prototype.line = null, p.prototype.source = null, p.prototype.ruleId = null, p.prototype.position = null;
        let h = {
            basename: function (e, t) {
                let n;
                if (void 0 !== t && "string" != typeof t) throw TypeError('"ext" argument must be a string');
                m(e);
                let r = 0, i = -1, a = e.length;
                if (void 0 === t || 0 === t.length || t.length > e.length) {
                    for (; a--;) if (47 === e.charCodeAt(a)) {
                        if (n) {
                            r = a + 1;
                            break
                        }
                    } else i < 0 && (n = !0, i = a + 1);
                    return i < 0 ? "" : e.slice(r, i)
                }
                if (t === e) return "";
                let o = -1, s = t.length - 1;
                for (; a--;) if (47 === e.charCodeAt(a)) {
                    if (n) {
                        r = a + 1;
                        break
                    }
                } else o < 0 && (n = !0, o = a + 1), s > -1 && (e.charCodeAt(a) === t.charCodeAt(s--) ? s < 0 && (i = a) : (s = -1, i = o));
                return r === i ? i = o : i < 0 && (i = e.length), e.slice(r, i)
            }, dirname: function (e) {
                let t;
                if (m(e), 0 === e.length) return ".";
                let n = -1, r = e.length;
                for (; --r;) if (47 === e.charCodeAt(r)) {
                    if (t) {
                        n = r;
                        break
                    }
                } else t || (t = !0);
                return n < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === n && 47 === e.charCodeAt(0) ? "//" : e.slice(0, n)
            }, extname: function (e) {
                let t;
                m(e);
                let n = e.length, r = -1, i = 0, a = -1, o = 0;
                for (; n--;) {
                    let s = e.charCodeAt(n);
                    if (47 === s) {
                        if (t) {
                            i = n + 1;
                            break
                        }
                        continue
                    }
                    r < 0 && (t = !0, r = n + 1), 46 === s ? a < 0 ? a = n : 1 !== o && (o = 1) : a > -1 && (o = -1)
                }
                return a < 0 || r < 0 || 0 === o || 1 === o && a === r - 1 && a === i + 1 ? "" : e.slice(a, r)
            }, join: function (...e) {
                let t, n = -1;
                for (; ++n < e.length;) m(e[n]), e[n] && (t = void 0 === t ? e[n] : t + "/" + e[n]);
                return void 0 === t ? "." : function (e) {
                    m(e);
                    let t = 47 === e.charCodeAt(0), n = function (e, t) {
                        let n, r, i = "", a = 0, o = -1, s = 0, l = -1;
                        for (; ++l <= e.length;) {
                            if (l < e.length) n = e.charCodeAt(l); else if (47 === n) break; else n = 47;
                            if (47 === n) {
                                if (o === l - 1 || 1 === s) ; else if (o !== l - 1 && 2 === s) {
                                    if (i.length < 2 || 2 !== a || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2)) {
                                        if (i.length > 2) {
                                            if ((r = i.lastIndexOf("/")) !== i.length - 1) {
                                                r < 0 ? (i = "", a = 0) : a = (i = i.slice(0, r)).length - 1 - i.lastIndexOf("/"), o = l, s = 0;
                                                continue
                                            }
                                        } else if (i.length > 0) {
                                            i = "", a = 0, o = l, s = 0;
                                            continue
                                        }
                                    }
                                    t && (i = i.length > 0 ? i + "/.." : "..", a = 2)
                                } else i.length > 0 ? i += "/" + e.slice(o + 1, l) : i = e.slice(o + 1, l), a = l - o - 1;
                                o = l, s = 0
                            } else 46 === n && s > -1 ? s++ : s = -1
                        }
                        return i
                    }(e, !t);
                    return 0 !== n.length || t || (n = "."), n.length > 0 && 47 === e.charCodeAt(e.length - 1) && (n += "/"), t ? "/" + n : n
                }(t)
            }, sep: "/"
        };

        function m(e) {
            if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
        }

        let f = {
            cwd: function () {
                return "/"
            }
        };

        function g(e) {
            return null !== e && "object" == typeof e && e.href && e.origin
        }

        let E = ["history", "path", "basename", "stem", "extname", "dirname"];

        class T {
            constructor(e) {
                let t, n;
                t = e ? "string" == typeof e || s(e) ? {value: e} : g(e) ? {path: e} : e : {}, this.data = {}, this.messages = [], this.history = [], this.cwd = f.cwd(), this.value, this.stored, this.result, this.map;
                let r = -1;
                for (; ++r < E.length;) {
                    let e = E[r];
                    e in t && void 0 !== t[e] && null !== t[e] && (this[e] = "history" === e ? [...t[e]] : t[e])
                }
                for (n in t) E.includes(n) || (this[n] = t[n])
            }

            get path() {
                return this.history[this.history.length - 1]
            }

            set path(e) {
                g(e) && (e = function (e) {
                    if ("string" == typeof e) e = new URL(e); else if (!g(e)) {
                        let t = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
                        throw t.code = "ERR_INVALID_ARG_TYPE", t
                    }
                    if ("file:" !== e.protocol) {
                        let e = TypeError("The URL must be of scheme file");
                        throw e.code = "ERR_INVALID_URL_SCHEME", e
                    }
                    return function (e) {
                        if ("" !== e.hostname) {
                            let e = TypeError('File URL host must be "localhost" or empty on darwin');
                            throw e.code = "ERR_INVALID_FILE_URL_HOST", e
                        }
                        let t = e.pathname, n = -1;
                        for (; ++n < t.length;) if (37 === t.charCodeAt(n) && 50 === t.charCodeAt(n + 1)) {
                            let e = t.charCodeAt(n + 2);
                            if (70 === e || 102 === e) {
                                let e = TypeError("File URL path must not include encoded / characters");
                                throw e.code = "ERR_INVALID_FILE_URL_PATH", e
                            }
                        }
                        return decodeURIComponent(t)
                    }(e)
                }(e)), b(e, "path"), this.path !== e && this.history.push(e)
            }

            get dirname() {
                return "string" == typeof this.path ? h.dirname(this.path) : void 0
            }

            set dirname(e) {
                A(this.basename, "dirname"), this.path = h.join(e || "", this.basename)
            }

            get basename() {
                return "string" == typeof this.path ? h.basename(this.path) : void 0
            }

            set basename(e) {
                b(e, "basename"), _(e, "basename"), this.path = h.join(this.dirname || "", e)
            }

            get extname() {
                return "string" == typeof this.path ? h.extname(this.path) : void 0
            }

            set extname(e) {
                if (_(e, "extname"), A(this.dirname, "extname"), e) {
                    if (46 !== e.charCodeAt(0)) throw Error("`extname` must start with `.`");
                    if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots")
                }
                this.path = h.join(this.dirname, this.stem + (e || ""))
            }

            get stem() {
                return "string" == typeof this.path ? h.basename(this.path, this.extname) : void 0
            }

            set stem(e) {
                b(e, "stem"), _(e, "stem"), this.path = h.join(this.dirname || "", e + (this.extname || ""))
            }

            toString(e) {
                return (this.value || "").toString(e || void 0)
            }

            message(e, t, n) {
                let r = new p(e, t, n);
                return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r
            }

            info(e, t, n) {
                let r = this.message(e, t, n);
                return r.fatal = null, r
            }

            fail(e, t, n) {
                let r = this.message(e, t, n);
                throw r.fatal = !0, r
            }
        }

        function _(e, t) {
            if (e && e.includes(h.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + h.sep + "`")
        }

        function b(e, t) {
            if (!e) throw Error("`" + t + "` cannot be empty")
        }

        function A(e, t) {
            if (!e) throw Error("Setting `" + t + "` requires `path` to be set too")
        }

        function y(e) {
            if (e) throw e
        }

        var N = n(9967);

        function k(e) {
            if ("object" != typeof e || null === e) return !1;
            let t = Object.getPrototypeOf(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
        }

        let C = (function e() {
            let t;
            let n = function () {
                let e = [], t = {
                    run: function (...t) {
                        let n = -1, r = t.pop();
                        if ("function" != typeof r) throw TypeError("Expected function as last argument, not " + r);
                        !function i(a, ...o) {
                            let s = e[++n], l = -1;
                            if (a) {
                                r(a);
                                return
                            }
                            for (; ++l < t.length;) (null === o[l] || void 0 === o[l]) && (o[l] = t[l]);
                            t = o, s ? (function (e, t) {
                                let n;
                                return function (...t) {
                                    let a;
                                    let o = e.length > t.length;
                                    o && t.push(r);
                                    try {
                                        a = e.apply(this, t)
                                    } catch (e) {
                                        if (o && n) throw e;
                                        return r(e)
                                    }
                                    o || (a instanceof Promise ? a.then(i, r) : a instanceof Error ? r(a) : i(a))
                                };

                                function r(e, ...i) {
                                    n || (n = !0, t(e, ...i))
                                }

                                function i(e) {
                                    r(null, e)
                                }
                            })(s, i)(...o) : r(null, ...o)
                        }(null, ...t)
                    }, use: function (n) {
                        if ("function" != typeof n) throw TypeError("Expected `middelware` to be a function, not " + n);
                        return e.push(n), t
                    }
                };
                return t
            }(), r = [], i = {}, a = -1;
            return o.data = function (e, n) {
                return "string" == typeof e ? 2 == arguments.length ? (I("data", t), i[e] = n, o) : S.call(i, e) && i[e] || null : e ? (I("data", t), i = e, o) : i
            }, o.Parser = void 0, o.Compiler = void 0, o.freeze = function () {
                if (t) return o;
                for (; ++a < r.length;) {
                    let [e, ...t] = r[a];
                    if (!1 === t[0]) continue;
                    !0 === t[0] && (t[0] = void 0);
                    let i = e.call(o, ...t);
                    "function" == typeof i && n.use(i)
                }
                return t = !0, a = Number.POSITIVE_INFINITY, o
            }, o.attachers = r, o.use = function (e, ...n) {
                let a;
                if (I("use", t), null == e) ; else if ("function" == typeof e) c(e, ...n); else if ("object" == typeof e) Array.isArray(e) ? l(e) : s(e); else throw TypeError("Expected usable value, not `" + e + "`");
                return a && (i.settings = Object.assign(i.settings || {}, a)), o;

                function s(e) {
                    l(e.plugins), e.settings && (a = Object.assign(a || {}, e.settings))
                }

                function l(e) {
                    let t = -1;
                    if (null == e) ; else if (Array.isArray(e)) for (; ++t < e.length;) {
                        let n = e[t];
                        !function (e) {
                            if ("function" == typeof e) c(e); else if ("object" == typeof e) {
                                if (Array.isArray(e)) {
                                    let [t, ...n] = e;
                                    c(t, ...n)
                                } else s(e)
                            } else throw TypeError("Expected usable value, not `" + e + "`")
                        }(n)
                    } else throw TypeError("Expected a list of plugins, not `" + e + "`")
                }

                function c(e, t) {
                    let n, i = -1;
                    for (; ++i < r.length;) if (r[i][0] === e) {
                        n = r[i];
                        break
                    }
                    n ? (k(n[1]) && k(t) && (t = N(!0, n[1], t)), n[1] = t) : r.push([...arguments])
                }
            }, o.parse = function (e) {
                o.freeze();
                let t = M(e), n = o.Parser;
                return (x("parse", n), O(n, "parse")) ? new n(String(t), t).parse() : n(String(t), t)
            }, o.stringify = function (e, t) {
                o.freeze();
                let n = M(t), r = o.Compiler;
                return (v("stringify", r), w(e), O(r, "compile")) ? new r(e, n).compile() : r(e, n)
            }, o.run = function (e, t, r) {
                if (w(e), o.freeze(), r || "function" != typeof t || (r = t, t = void 0), !r) return new Promise(i);

                function i(i, a) {
                    n.run(e, M(t), function (t, n, o) {
                        n = n || e, t ? a(t) : i ? i(n) : r(null, n, o)
                    })
                }

                i(null, r)
            }, o.runSync = function (e, t) {
                let n, r;
                return o.run(e, t, function (e, t) {
                    y(e), n = t, r = !0
                }), R("runSync", "run", r), n
            }, o.process = function (e, t) {
                if (o.freeze(), x("process", o.Parser), v("process", o.Compiler), !t) return new Promise(n);

                function n(n, r) {
                    let i = M(e);

                    function a(e, i) {
                        e || !i ? r(e) : n ? n(i) : t(null, i)
                    }

                    o.run(o.parse(i), i, (e, t, n) => {
                        if (!e && t && n) {
                            let r = o.stringify(t, n);
                            null == r || ("string" == typeof r || s(r) ? n.value = r : n.result = r), a(e, n)
                        } else a(e)
                    })
                }

                n(null, t)
            }, o.processSync = function (e) {
                let t;
                o.freeze(), x("processSync", o.Parser), v("processSync", o.Compiler);
                let n = M(e);
                return o.process(n, function (e) {
                    t = !0, y(e)
                }), R("processSync", "process", t), n
            }, o;

            function o() {
                let t = e(), n = -1;
                for (; ++n < r.length;) t.use(...r[n]);
                return t.data(N(!0, {}, i)), t
            }
        })().freeze(), S = {}.hasOwnProperty;

        function O(e, t) {
            return "function" == typeof e && e.prototype && (function (e) {
                let t;
                for (t in e) if (S.call(e, t)) return !0;
                return !1
            }(e.prototype) || t in e.prototype)
        }

        function x(e, t) {
            if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `Parser`")
        }

        function v(e, t) {
            if ("function" != typeof t) throw TypeError("Cannot `" + e + "` without `Compiler`")
        }

        function I(e, t) {
            if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
        }

        function w(e) {
            if (!k(e) || "string" != typeof e.type) throw TypeError("Expected node, got `" + e + "`")
        }

        function R(e, t, n) {
            if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead")
        }

        function M(e) {
            return e && "object" == typeof e && "message" in e && "messages" in e ? e : new T(e)
        }

        function L(e, t) {
            return !!(e && "object" == typeof e) && ("value" in e && e.value || t && "alt" in e && e.alt || "children" in e && D(e.children, t)) || Array.isArray(e) && D(e, t) || ""
        }

        function D(e, t) {
            let n = [], r = -1;
            for (; ++r < e.length;) n[r] = L(e[r], t);
            return n.join("")
        }

        function P(e, t, n, r) {
            let i;
            let a = e.length, o = 0;
            if (t = t < 0 ? -t > a ? 0 : a + t : t > a ? a : t, n = n > 0 ? n : 0, r.length < 1e4) (i = Array.from(r)).unshift(t, n), [].splice.apply(e, i); else for (n && [].splice.apply(e, [t, n]); o < r.length;) (i = r.slice(o, o + 1e4)).unshift(t, 0), [].splice.apply(e, i), o += 1e4, t += 1e4
        }

        function F(e, t) {
            return e.length > 0 ? (P(e, e.length, 0, t), e) : t
        }

        let H = {}.hasOwnProperty;

        function B(e) {
            let t = {}, n = -1;
            for (; ++n < e.length;) !function (e, t) {
                let n;
                for (n in t) {
                    let r;
                    let i = H.call(e, n) ? e[n] : void 0, a = i || (e[n] = {}), o = t[n];
                    for (r in o) {
                        H.call(a, r) || (a[r] = []);
                        let e = o[r];
                        !function (e, t) {
                            let n = -1, r = [];
                            for (; ++n < t.length;) ("after" === t[n].add ? e : r).push(t[n]);
                            P(e, 0, 0, r)
                        }(a[r], Array.isArray(e) ? e : e ? [e] : [])
                    }
                }
            }(t, e[n]);
            return t
        }

        let U = Z(/[A-Za-z]/), K = Z(/\d/), G = Z(/[\dA-Fa-f]/), z = Z(/[\dA-Za-z]/), j = Z(/[!-/:-@[-`{-~]/),
            $ = Z(/[#-'*+\--9=?A-Z^-~]/);

        function q(e) {
            return null !== e && (e < 32 || 127 === e)
        }

        function W(e) {
            return null !== e && (e < 0 || 32 === e)
        }

        function Y(e) {
            return null !== e && e < -2
        }

        function Q(e) {
            return -2 === e || -1 === e || 32 === e
        }

        let V = Z(/\s/),
            X = Z(/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/);

        function Z(e) {
            return function (t) {
                return null !== t && e.test(String.fromCharCode(t))
            }
        }

        function J(e, t, n, r) {
            let i = r ? r - 1 : Number.POSITIVE_INFINITY, a = 0;
            return function (r) {
                return Q(r) ? (e.enter(n), function r(o) {
                    return Q(o) && a++ < i ? (e.consume(o), r) : (e.exit(n), t(o))
                }(r)) : t(r)
            }
        }

        let ee = {
            tokenize: function (e) {
                let t;
                let n = e.attempt(this.parser.constructs.contentInitial, function (t) {
                    if (null === t) {
                        e.consume(t);
                        return
                    }
                    return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), J(e, n, "linePrefix")
                }, function (n) {
                    return e.enter("paragraph"), function n(r) {
                        let i = e.enter("chunkText", {contentType: "text", previous: t});
                        return t && (t.next = i), t = i, function t(r) {
                            if (null === r) {
                                e.exit("chunkText"), e.exit("paragraph"), e.consume(r);
                                return
                            }
                            return Y(r) ? (e.consume(r), e.exit("chunkText"), n) : (e.consume(r), t)
                        }(r)
                    }(n)
                });
                return n
            }
        }, et = {
            tokenize: function (e) {
                let t, n, r;
                let i = this, a = [], o = 0;
                return s;

                function s(t) {
                    if (o < a.length) {
                        let n = a[o];
                        return i.containerState = n[1], e.attempt(n[0].continuation, l, c)(t)
                    }
                    return c(t)
                }

                function l(e) {
                    if (o++, i.containerState._closeFlow) {
                        let n;
                        i.containerState._closeFlow = void 0, t && E();
                        let r = i.events.length, a = r;
                        for (; a--;) if ("exit" === i.events[a][0] && "chunkFlow" === i.events[a][1].type) {
                            n = i.events[a][1].end;
                            break
                        }
                        g(o);
                        let s = r;
                        for (; s < i.events.length;) i.events[s][1].end = Object.assign({}, n), s++;
                        return P(i.events, a + 1, 0, i.events.slice(r)), i.events.length = s, c(e)
                    }
                    return s(e)
                }

                function c(n) {
                    if (o === a.length) {
                        if (!t) return p(n);
                        if (t.currentConstruct && t.currentConstruct.concrete) return m(n);
                        i.interrupt = !!(t.currentConstruct && !t._gfmTableDynamicInterruptHack)
                    }
                    return i.containerState = {}, e.check(en, u, d)(n)
                }

                function u(e) {
                    return t && E(), g(o), p(e)
                }

                function d(e) {
                    return i.parser.lazy[i.now().line] = o !== a.length, r = i.now().offset, m(e)
                }

                function p(t) {
                    return i.containerState = {}, e.attempt(en, h, m)(t)
                }

                function h(e) {
                    return o++, a.push([i.currentConstruct, i.containerState]), p(e)
                }

                function m(r) {
                    if (null === r) {
                        t && E(), g(0), e.consume(r);
                        return
                    }
                    return t = t || i.parser.flow(i.now()), e.enter("chunkFlow", {
                        contentType: "flow",
                        previous: n,
                        _tokenizer: t
                    }), function t(n) {
                        if (null === n) {
                            f(e.exit("chunkFlow"), !0), g(0), e.consume(n);
                            return
                        }
                        return Y(n) ? (e.consume(n), f(e.exit("chunkFlow")), o = 0, i.interrupt = void 0, s) : (e.consume(n), t)
                    }(r)
                }

                function f(e, a) {
                    let s = i.sliceStream(e);
                    if (a && s.push(null), e.previous = n, n && (n.next = e), n = e, t.defineSkip(e.start), t.write(s), i.parser.lazy[e.start.line]) {
                        let e, n, a = t.events.length;
                        for (; a--;) if (t.events[a][1].start.offset < r && (!t.events[a][1].end || t.events[a][1].end.offset > r)) return;
                        let s = i.events.length, l = s;
                        for (; l--;) if ("exit" === i.events[l][0] && "chunkFlow" === i.events[l][1].type) {
                            if (e) {
                                n = i.events[l][1].end;
                                break
                            }
                            e = !0
                        }
                        for (g(o), a = s; a < i.events.length;) i.events[a][1].end = Object.assign({}, n), a++;
                        P(i.events, l + 1, 0, i.events.slice(s)), i.events.length = a
                    }
                }

                function g(t) {
                    let n = a.length;
                    for (; n-- > t;) {
                        let t = a[n];
                        i.containerState = t[1], t[0].exit.call(i, e)
                    }
                    a.length = t
                }

                function E() {
                    t.write([null]), n = void 0, t = void 0, i.containerState._closeFlow = void 0
                }
            }
        }, en = {
            tokenize: function (e, t, n) {
                return J(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
            }
        }, er = {
            tokenize: function (e, t, n) {
                return J(e, function (e) {
                    return null === e || Y(e) ? t(e) : n(e)
                }, "linePrefix")
            }, partial: !0
        };

        function ei(e) {
            let t, n, r, i, a, o, s;
            let l = {}, c = -1;
            for (; ++c < e.length;) {
                for (; (c in l);) c = l[c];
                if (t = e[c], c && "chunkFlow" === t[1].type && "listItemPrefix" === e[c - 1][1].type && ((r = 0) < (o = t[1]._tokenizer.events).length && "lineEndingBlank" === o[r][1].type && (r += 2), r < o.length && "content" === o[r][1].type)) for (; ++r < o.length && "content" !== o[r][1].type;) "chunkText" === o[r][1].type && (o[r][1]._isInFirstContentOfListItem = !0, r++);
                if ("enter" === t[0]) t[1].contentType && (Object.assign(l, function (e, t) {
                    let n, r;
                    let i = e[t][1], a = e[t][2], o = t - 1, s = [],
                        l = i._tokenizer || a.parser[i.contentType](i.start), c = l.events, u = [], d = {}, p = -1,
                        h = i, m = 0, f = 0, g = [f];
                    for (; h;) {
                        for (; e[++o][1] !== h;) ;
                        s.push(o), !h._tokenizer && (n = a.sliceStream(h), h.next || n.push(null), r && l.defineSkip(h.start), h._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(n), h._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), r = h, h = h.next
                    }
                    for (h = i; ++p < c.length;) "exit" === c[p][0] && "enter" === c[p - 1][0] && c[p][1].type === c[p - 1][1].type && c[p][1].start.line !== c[p][1].end.line && (f = p + 1, g.push(f), h._tokenizer = void 0, h.previous = void 0, h = h.next);
                    for (l.events = [], h ? (h._tokenizer = void 0, h.previous = void 0) : g.pop(), p = g.length; p--;) {
                        let t = c.slice(g[p], g[p + 1]), n = s.pop();
                        u.unshift([n, n + t.length - 1]), P(e, n, 2, t)
                    }
                    for (p = -1; ++p < u.length;) d[m + u[p][0]] = m + u[p][1], m += u[p][1] - u[p][0] - 1;
                    return d
                }(e, c)), c = l[c], s = !0); else if (t[1]._container) {
                    for (r = c, n = void 0; r--;) if ("lineEnding" === (i = e[r])[1].type || "lineEndingBlank" === i[1].type) "enter" === i[0] && (n && (e[n][1].type = "lineEndingBlank"), i[1].type = "lineEnding", n = r); else break;
                    n && (t[1].end = Object.assign({}, e[n][1].start), (a = e.slice(n, c)).unshift(t), P(e, n, c - n + 1, a))
                }
            }
            return !s
        }

        let ea = {
            tokenize: function (e, t) {
                let n;
                return function (t) {
                    return e.enter("content"), n = e.enter("chunkContent", {contentType: "content"}), r(t)
                };

                function r(t) {
                    return null === t ? i(t) : Y(t) ? e.check(eo, a, i)(t) : (e.consume(t), r)
                }

                function i(n) {
                    return e.exit("chunkContent"), e.exit("content"), t(n)
                }

                function a(t) {
                    return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
                        contentType: "content",
                        previous: n
                    }), n = n.next, r
                }
            }, resolve: function (e) {
                return ei(e), e
            }
        }, eo = {
            tokenize: function (e, t, n) {
                let r = this;
                return function (t) {
                    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), J(e, i, "linePrefix")
                };

                function i(i) {
                    if (null === i || Y(i)) return n(i);
                    let a = r.events[r.events.length - 1];
                    return !r.parser.constructs.disable.null.includes("codeIndented") && a && "linePrefix" === a[1].type && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i)
                }
            }, partial: !0
        }, es = {
            tokenize: function (e) {
                let t = this, n = e.attempt(er, function (r) {
                    if (null === r) {
                        e.consume(r);
                        return
                    }
                    return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n
                }, e.attempt(this.parser.constructs.flowInitial, r, J(e, e.attempt(this.parser.constructs.flow, r, e.attempt(ea, r)), "linePrefix")));
                return n;

                function r(r) {
                    if (null === r) {
                        e.consume(r);
                        return
                    }
                    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n
                }
            }
        }, el = {resolveAll: ep()}, ec = ed("string"), eu = ed("text");

        function ed(e) {
            return {
                tokenize: function (t) {
                    let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
                    return a;

                    function a(e) {
                        return l(e) ? i(e) : o(e)
                    }

                    function o(e) {
                        if (null === e) {
                            t.consume(e);
                            return
                        }
                        return t.enter("data"), t.consume(e), s
                    }

                    function s(e) {
                        return l(e) ? (t.exit("data"), i(e)) : (t.consume(e), s)
                    }

                    function l(e) {
                        if (null === e) return !0;
                        let t = r[e], i = -1;
                        if (t) for (; ++i < t.length;) {
                            let e = t[i];
                            if (!e.previous || e.previous.call(n, n.previous)) return !0
                        }
                        return !1
                    }
                }, resolveAll: ep("text" === e ? eh : void 0)
            }
        }

        function ep(e) {
            return function (t, n) {
                let r, i = -1;
                for (; ++i <= t.length;) void 0 === r ? t[i] && "data" === t[i][1].type && (r = i, i++) : t[i] && "data" === t[i][1].type || (i !== r + 2 && (t[r][1].end = t[i - 1][1].end, t.splice(r + 2, i - r - 2), i = r + 2), r = void 0);
                return e ? e(t, n) : t
            }
        }

        function eh(e, t) {
            let n = 0;
            for (; ++n <= e.length;) if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
                let r;
                let i = e[n - 1][1], a = t.sliceStream(i), o = a.length, s = -1, l = 0;
                for (; o--;) {
                    let e = a[o];
                    if ("string" == typeof e) {
                        for (s = e.length; 32 === e.charCodeAt(s - 1);) l++, s--;
                        if (s) break;
                        s = -1
                    } else if (-2 === e) r = !0, l++; else if (-1 === e) ; else {
                        o++;
                        break
                    }
                }
                if (l) {
                    let a = {
                        type: n === e.length || r || l < 2 ? "lineSuffix" : "hardBreakTrailing",
                        start: {
                            line: i.end.line,
                            column: i.end.column - l,
                            offset: i.end.offset - l,
                            _index: i.start._index + o,
                            _bufferIndex: o ? s : i.start._bufferIndex + s
                        },
                        end: Object.assign({}, i.end)
                    };
                    i.end = Object.assign({}, a.start), i.start.offset === i.end.offset ? Object.assign(i, a) : (e.splice(n, 0, ["enter", a, t], ["exit", a, t]), n += 2)
                }
                n++
            }
            return e
        }

        function em(e, t, n) {
            let r = [], i = -1;
            for (; ++i < e.length;) {
                let a = e[i].resolveAll;
                a && !r.includes(a) && (t = a(t, n), r.push(a))
            }
            return t
        }

        let ef = {
            name: "thematicBreak", tokenize: function (e, t, n) {
                let r = 0;
                return function (i) {
                    return e.enter("thematicBreak"), function a(o) {
                        return o === i ? (e.enter("thematicBreakSequence"), function t(n) {
                            return n === i ? (e.consume(n), r++, t) : (e.exit("thematicBreakSequence"), a(n))
                        }(o)) : Q(o) ? J(e, a, "whitespace")(o) : r < 3 || null !== o && !Y(o) ? n(o) : (e.exit("thematicBreak"), t(o))
                    }(i)
                }
            }
        }, eg = {
            name: "list", tokenize: function (e, t, n) {
                let r = this, i = r.events[r.events.length - 1],
                    a = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
                return function (t) {
                    let i = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                    if ("listUnordered" === i ? !r.containerState.marker || t === r.containerState.marker : K(t)) {
                        if (r.containerState.type || (r.containerState.type = i, e.enter(i, {_container: !0})), "listUnordered" === i) return e.enter("listItemPrefix"), 42 === t || 45 === t ? e.check(ef, n, s)(t) : s(t);
                        if (!r.interrupt || 49 === t) return e.enter("listItemPrefix"), e.enter("listItemValue"), function t(i) {
                            return K(i) && ++o < 10 ? (e.consume(i), t) : (!r.interrupt || o < 2) && (r.containerState.marker ? i === r.containerState.marker : 41 === i || 46 === i) ? (e.exit("listItemValue"), s(i)) : n(i)
                        }(t)
                    }
                    return n(t)
                };

                function s(t) {
                    return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(er, r.interrupt ? n : l, e.attempt(eE, u, c))
                }

                function l(e) {
                    return r.containerState.initialBlankLine = !0, a++, u(e)
                }

                function c(t) {
                    return Q(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), u) : n(t)
                }

                function u(n) {
                    return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n)
                }
            }, continuation: {
                tokenize: function (e, t, n) {
                    let r = this;
                    return r.containerState._closeFlow = void 0, e.check(er, function (n) {
                        return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, J(e, t, "listItemIndent", r.containerState.size + 1)(n)
                    }, function (n) {
                        return r.containerState.furtherBlankLines || !Q(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, i(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(eT, t, i)(n))
                    });

                    function i(i) {
                        return r.containerState._closeFlow = !0, r.interrupt = void 0, J(e, e.attempt(eg, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i)
                    }
                }
            }, exit: function (e) {
                e.exit(this.containerState.type)
            }
        }, eE = {
            tokenize: function (e, t, n) {
                let r = this;
                return J(e, function (e) {
                    let i = r.events[r.events.length - 1];
                    return !Q(e) && i && "listItemPrefixWhitespace" === i[1].type ? t(e) : n(e)
                }, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
            }, partial: !0
        }, eT = {
            tokenize: function (e, t, n) {
                let r = this;
                return J(e, function (e) {
                    let i = r.events[r.events.length - 1];
                    return i && "listItemIndent" === i[1].type && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e)
                }, "listItemIndent", r.containerState.size + 1)
            }, partial: !0
        }, e_ = {
            name: "blockQuote", tokenize: function (e, t, n) {
                let r = this;
                return function (t) {
                    if (62 === t) {
                        let n = r.containerState;
                        return n.open || (e.enter("blockQuote", {_container: !0}), n.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), i
                    }
                    return n(t)
                };

                function i(n) {
                    return Q(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n))
                }
            }, continuation: {
                tokenize: function (e, t, n) {
                    return J(e, e.attempt(e_, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                }
            }, exit: function (e) {
                e.exit("blockQuote")
            }
        };

        function eb(e, t, n, r, i, a, o, s, l) {
            let c = l || Number.POSITIVE_INFINITY, u = 0;
            return function (t) {
                return 60 === t ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), d) : null === t || 41 === t || q(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", {contentType: "string"}), m(t))
            };

            function d(n) {
                return 62 === n ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", {contentType: "string"}), p(n))
            }

            function p(t) {
                return 62 === t ? (e.exit("chunkString"), e.exit(s), d(t)) : null === t || 60 === t || Y(t) ? n(t) : (e.consume(t), 92 === t ? h : p)
            }

            function h(t) {
                return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t)
            }

            function m(i) {
                return 40 === i ? ++u > c ? n(i) : (e.consume(i), m) : 41 === i ? u-- ? (e.consume(i), m) : (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : null === i || W(i) ? u ? n(i) : (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : q(i) ? n(i) : (e.consume(i), 92 === i ? f : m)
            }

            function f(t) {
                return 40 === t || 41 === t || 92 === t ? (e.consume(t), m) : m(t)
            }
        }

        function eA(e, t, n, r, i, a) {
            let o;
            let s = this, l = 0;
            return function (t) {
                return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), c
            };

            function c(d) {
                return null === d || 91 === d || 93 === d && !o || 94 === d && !l && "_hiddenFootnoteSupport" in s.parser.constructs || l > 999 ? n(d) : 93 === d ? (e.exit(a), e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : Y(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), c) : (e.enter("chunkString", {contentType: "string"}), u(d))
            }

            function u(t) {
                return null === t || 91 === t || 93 === t || Y(t) || l++ > 999 ? (e.exit("chunkString"), c(t)) : (e.consume(t), o = o || !Q(t), 92 === t ? d : u)
            }

            function d(t) {
                return 91 === t || 92 === t || 93 === t ? (e.consume(t), l++, u) : u(t)
            }
        }

        function ey(e, t, n, r, i, a) {
            let o;
            return function (t) {
                return e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = 40 === t ? 41 : t, s
            };

            function s(n) {
                return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n))
            }

            function l(t) {
                return t === o ? (e.exit(a), s(o)) : null === t ? n(t) : Y(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), J(e, l, "linePrefix")) : (e.enter("chunkString", {contentType: "string"}), c(t))
            }

            function c(t) {
                return t === o || null === t || Y(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), 92 === t ? u : c)
            }

            function u(t) {
                return t === o || 92 === t ? (e.consume(t), c) : c(t)
            }
        }

        function eN(e, t) {
            let n;
            return function r(i) {
                return Y(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : Q(i) ? J(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i)
            }
        }

        function ek(e) {
            return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
        }

        let eC = {
                tokenize: function (e, t, n) {
                    return function (t) {
                        return W(t) ? eN(e, r)(t) : n(t)
                    };

                    function r(t) {
                        return 34 === t || 39 === t || 40 === t ? ey(e, J(e, i, "whitespace"), n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t) : n(t)
                    }

                    function i(e) {
                        return null === e || Y(e) ? t(e) : n(e)
                    }
                }, partial: !0
            }, eS = {
                name: "codeIndented", tokenize: function (e, t, n) {
                    let r = this;
                    return function (t) {
                        return e.enter("codeIndented"), J(e, i, "linePrefix", 5)(t)
                    };

                    function i(t) {
                        let i = r.events[r.events.length - 1];
                        return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? function t(n) {
                            return null === n ? a(n) : Y(n) ? e.attempt(eO, t, a)(n) : (e.enter("codeFlowValue"), function n(r) {
                                return null === r || Y(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n)
                            }(n))
                        }(t) : n(t)
                    }

                    function a(n) {
                        return e.exit("codeIndented"), t(n)
                    }
                }
            }, eO = {
                tokenize: function (e, t, n) {
                    let r = this;
                    return i;

                    function i(t) {
                        return r.parser.lazy[r.now().line] ? n(t) : Y(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : J(e, a, "linePrefix", 5)(t)
                    }

                    function a(e) {
                        let a = r.events[r.events.length - 1];
                        return a && "linePrefix" === a[1].type && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : Y(e) ? i(e) : n(e)
                    }
                }, partial: !0
            }, ex = {
                name: "setextUnderline", tokenize: function (e, t, n) {
                    let r;
                    let i = this, a = i.events.length;
                    for (; a--;) if ("lineEnding" !== i.events[a][1].type && "linePrefix" !== i.events[a][1].type && "content" !== i.events[a][1].type) {
                        r = "paragraph" === i.events[a][1].type;
                        break
                    }
                    return function (t) {
                        return !i.parser.lazy[i.now().line] && (i.interrupt || r) ? (e.enter("setextHeadingLine"), e.enter("setextHeadingLineSequence"), function n(r) {
                            return r === t ? (e.consume(r), n) : (e.exit("setextHeadingLineSequence"), J(e, o, "lineSuffix")(r))
                        }(t)) : n(t)
                    };

                    function o(r) {
                        return null === r || Y(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r)
                    }
                }, resolveTo: function (e, t) {
                    let n, r, i, a = e.length;
                    for (; a--;) if ("enter" === e[a][0]) {
                        if ("content" === e[a][1].type) {
                            n = a;
                            break
                        }
                        "paragraph" === e[a][1].type && (r = a)
                    } else "content" === e[a][1].type && e.splice(a, 1), i || "definition" !== e[a][1].type || (i = a);
                    let o = {
                        type: "setextHeading",
                        start: Object.assign({}, e[r][1].start),
                        end: Object.assign({}, e[e.length - 1][1].end)
                    };
                    return e[r][1].type = "setextHeadingText", i ? (e.splice(r, 0, ["enter", o, t]), e.splice(i + 1, 0, ["exit", e[n][1], t]), e[n][1].end = Object.assign({}, e[i][1].end)) : e[n][1] = o, e.push(["exit", o, t]), e
                }
            },
            ev = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"],
            eI = ["pre", "script", "style", "textarea"], ew = {
                tokenize: function (e, t, n) {
                    return function (r) {
                        return e.exit("htmlFlowData"), e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), e.attempt(er, t, n)
                    }
                }, partial: !0
            }, eR = {
                name: "codeFenced", tokenize: function (e, t, n) {
                    let r;
                    let i = this, a = {
                            tokenize: function (e, t, n) {
                                let i = 0;
                                return J(e, function (t) {
                                    return e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), function t(o) {
                                        return o === r ? (e.consume(o), i++, t) : i < c ? n(o) : (e.exit("codeFencedFenceSequence"), J(e, a, "whitespace")(o))
                                    }(t)
                                }, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);

                                function a(r) {
                                    return null === r || Y(r) ? (e.exit("codeFencedFence"), t(r)) : n(r)
                                }
                            }, partial: !0
                        }, o = {
                            tokenize: function (e, t, n) {
                                let r = this;
                                return function (t) {
                                    return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i
                                };

                                function i(e) {
                                    return r.parser.lazy[r.now().line] ? n(e) : t(e)
                                }
                            }, partial: !0
                        }, s = this.events[this.events.length - 1],
                        l = s && "linePrefix" === s[1].type ? s[2].sliceSerialize(s[1], !0).length : 0, c = 0;
                    return function (t) {
                        return e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), r = t, function t(i) {
                            return i === r ? (e.consume(i), c++, t) : (e.exit("codeFencedFenceSequence"), c < 3 ? n(i) : J(e, u, "whitespace")(i))
                        }(t)
                    };

                    function u(t) {
                        return null === t || Y(t) ? p(t) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {contentType: "string"}), function t(i) {
                            return null === i || W(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), J(e, d, "whitespace")(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t)
                        }(t))
                    }

                    function d(t) {
                        return null === t || Y(t) ? p(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {contentType: "string"}), function t(i) {
                            return null === i || Y(i) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), p(i)) : 96 === i && i === r ? n(i) : (e.consume(i), t)
                        }(t))
                    }

                    function p(n) {
                        return e.exit("codeFencedFence"), i.interrupt ? t(n) : function t(n) {
                            return null === n ? h(n) : Y(n) ? e.attempt(o, e.attempt(a, h, l ? J(e, t, "linePrefix", l + 1) : t), h)(n) : (e.enter("codeFlowValue"), function n(r) {
                                return null === r || Y(r) ? (e.exit("codeFlowValue"), t(r)) : (e.consume(r), n)
                            }(n))
                        }(n)
                    }

                    function h(n) {
                        return e.exit("codeFenced"), t(n)
                    }
                }, concrete: !0
            }, eM = document.createElement("i");

        function eL(e) {
            let t = "&" + e + ";";
            eM.innerHTML = t;
            let n = eM.textContent;
            return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
        }

        let eD = {
            name: "characterReference", tokenize: function (e, t, n) {
                let r, i;
                let a = this, o = 0;
                return function (t) {
                    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), s
                };

                function s(t) {
                    return 35 === t ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), r = 31, i = z, c(t))
                }

                function l(t) {
                    return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), r = 6, i = G, c) : (e.enter("characterReferenceValue"), r = 7, i = K, c(t))
                }

                function c(s) {
                    let l;
                    return 59 === s && o ? (l = e.exit("characterReferenceValue"), i !== z || eL(a.sliceSerialize(l))) ? (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t) : n(s) : i(s) && o++ < r ? (e.consume(s), c) : n(s)
                }
            }
        }, eP = {
            name: "characterEscape", tokenize: function (e, t, n) {
                return function (t) {
                    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), r
                };

                function r(r) {
                    return j(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r)
                }
            }
        }, eF = {
            name: "lineEnding", tokenize: function (e, t) {
                return function (n) {
                    return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), J(e, t, "linePrefix")
                }
            }
        }, eH = {
            name: "labelEnd", tokenize: function (e, t, n) {
                let r, i;
                let a = this, o = a.events.length;
                for (; o--;) if (("labelImage" === a.events[o][1].type || "labelLink" === a.events[o][1].type) && !a.events[o][1]._balanced) {
                    r = a.events[o][1];
                    break
                }
                return function (t) {
                    return r ? r._inactive ? l(t) : (i = a.parser.defined.includes(ek(a.sliceSerialize({
                        start: r.end,
                        end: a.now()
                    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), s) : n(t)
                };

                function s(n) {
                    return 40 === n ? e.attempt(eB, t, i ? t : l)(n) : 91 === n ? e.attempt(eU, t, i ? e.attempt(eK, t, l) : l)(n) : i ? t(n) : l(n)
                }

                function l(e) {
                    return r._balanced = !0, n(e)
                }
            }, resolveTo: function (e, t) {
                let n, r, i, a, o = e.length, s = 0;
                for (; o--;) if (n = e[o][1], r) {
                    if ("link" === n.type || "labelLink" === n.type && n._inactive) break;
                    "enter" === e[o][0] && "labelLink" === n.type && (n._inactive = !0)
                } else if (i) {
                    if ("enter" === e[o][0] && ("labelImage" === n.type || "labelLink" === n.type) && !n._balanced && (r = o, "labelLink" !== n.type)) {
                        s = 2;
                        break
                    }
                } else "labelEnd" === n.type && (i = o);
                let l = {
                        type: "labelLink" === e[r][1].type ? "link" : "image",
                        start: Object.assign({}, e[r][1].start),
                        end: Object.assign({}, e[e.length - 1][1].end)
                    }, c = {type: "label", start: Object.assign({}, e[r][1].start), end: Object.assign({}, e[i][1].end)},
                    u = {
                        type: "labelText",
                        start: Object.assign({}, e[r + s + 2][1].end),
                        end: Object.assign({}, e[i - 2][1].start)
                    };
                return a = F(a = [["enter", l, t], ["enter", c, t]], e.slice(r + 1, r + s + 3)), a = F(a, [["enter", u, t]]), a = F(a, em(t.parser.constructs.insideSpan.null, e.slice(r + s + 4, i - 3), t)), a = F(a, [["exit", u, t], e[i - 2], e[i - 1], ["exit", c, t]]), a = F(a, e.slice(i + 1)), a = F(a, [["exit", l, t]]), P(e, r, e.length, a), e
            }, resolveAll: function (e) {
                let t, n = -1;
                for (; ++n < e.length;) ("labelImage" === (t = e[n][1]).type || "labelLink" === t.type || "labelEnd" === t.type) && (e.splice(n + 1, "labelImage" === t.type ? 4 : 2), t.type = "data", n++);
                return e
            }
        }, eB = {
            tokenize: function (e, t, n) {
                return function (t) {
                    return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), eN(e, r)
                };

                function r(t) {
                    return 41 === t ? o(t) : eb(e, i, n, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t)
                }

                function i(t) {
                    return W(t) ? eN(e, a)(t) : o(t)
                }

                function a(t) {
                    return 34 === t || 39 === t || 40 === t ? ey(e, eN(e, o), n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : o(t)
                }

                function o(r) {
                    return 41 === r ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r)
                }
            }
        }, eU = {
            tokenize: function (e, t, n) {
                let r = this;
                return function (t) {
                    return eA.call(r, e, i, n, "reference", "referenceMarker", "referenceString")(t)
                };

                function i(e) {
                    return r.parser.defined.includes(ek(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e)
                }
            }
        }, eK = {
            tokenize: function (e, t, n) {
                return function (t) {
                    return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), r
                };

                function r(r) {
                    return 93 === r ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r)
                }
            }
        }, eG = {
            name: "labelStartImage", tokenize: function (e, t, n) {
                let r = this;
                return function (t) {
                    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), i
                };

                function i(t) {
                    return 91 === t ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), a) : n(t)
                }

                function a(e) {
                    return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                }
            }, resolveAll: eH.resolveAll
        };

        function ez(e) {
            return null === e || W(e) || V(e) ? 1 : X(e) ? 2 : void 0
        }

        let ej = {
            name: "attention", tokenize: function (e, t) {
                let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = ez(r);
                return function (a) {
                    return e.enter("attentionSequence"), function o(s) {
                        if (s === a) return e.consume(s), o;
                        let l = e.exit("attentionSequence"), c = ez(s), u = !c || 2 === c && i || n.includes(s),
                            d = !i || 2 === i && c || n.includes(r);
                        return l._open = !!(42 === a ? u : u && (i || !d)), l._close = !!(42 === a ? d : d && (c || !u)), t(s)
                    }(a)
                }
            }, resolveAll: function (e, t) {
                let n, r, i, a, o, s, l, c, u = -1;
                for (; ++u < e.length;) if ("enter" === e[u][0] && "attentionSequence" === e[u][1].type && e[u][1]._close) {
                    for (n = u; n--;) if ("exit" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._open && t.sliceSerialize(e[n][1]).charCodeAt(0) === t.sliceSerialize(e[u][1]).charCodeAt(0)) {
                        if ((e[n][1]._close || e[u][1]._open) && (e[u][1].end.offset - e[u][1].start.offset) % 3 && !((e[n][1].end.offset - e[n][1].start.offset + e[u][1].end.offset - e[u][1].start.offset) % 3)) continue;
                        s = e[n][1].end.offset - e[n][1].start.offset > 1 && e[u][1].end.offset - e[u][1].start.offset > 1 ? 2 : 1;
                        let d = Object.assign({}, e[n][1].end), p = Object.assign({}, e[u][1].start);
                        e$(d, -s), e$(p, s), a = {
                            type: s > 1 ? "strongSequence" : "emphasisSequence",
                            start: d,
                            end: Object.assign({}, e[n][1].end)
                        }, o = {
                            type: s > 1 ? "strongSequence" : "emphasisSequence",
                            start: Object.assign({}, e[u][1].start),
                            end: p
                        }, i = {
                            type: s > 1 ? "strongText" : "emphasisText",
                            start: Object.assign({}, e[n][1].end),
                            end: Object.assign({}, e[u][1].start)
                        }, r = {
                            type: s > 1 ? "strong" : "emphasis",
                            start: Object.assign({}, a.start),
                            end: Object.assign({}, o.end)
                        }, e[n][1].end = Object.assign({}, a.start), e[u][1].start = Object.assign({}, o.end), l = [], e[n][1].end.offset - e[n][1].start.offset && (l = F(l, [["enter", e[n][1], t], ["exit", e[n][1], t]])), l = F(l, [["enter", r, t], ["enter", a, t], ["exit", a, t], ["enter", i, t]]), l = F(l, em(t.parser.constructs.insideSpan.null, e.slice(n + 1, u), t)), l = F(l, [["exit", i, t], ["enter", o, t], ["exit", o, t], ["exit", r, t]]), e[u][1].end.offset - e[u][1].start.offset ? (c = 2, l = F(l, [["enter", e[u][1], t], ["exit", e[u][1], t]])) : c = 0, P(e, n - 1, u - n + 3, l), u = n + l.length - c - 2;
                        break
                    }
                }
                for (u = -1; ++u < e.length;) "attentionSequence" === e[u][1].type && (e[u][1].type = "data");
                return e
            }
        };

        function e$(e, t) {
            e.column += t, e.offset += t, e._bufferIndex += t
        }

        let eq = {
            name: "labelStartLink", tokenize: function (e, t, n) {
                let r = this;
                return function (t) {
                    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), i
                };

                function i(e) {
                    return 94 === e && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e)
                }
            }, resolveAll: eH.resolveAll
        }, eW = {
            42: eg,
            43: eg,
            45: eg,
            48: eg,
            49: eg,
            50: eg,
            51: eg,
            52: eg,
            53: eg,
            54: eg,
            55: eg,
            56: eg,
            57: eg,
            62: e_
        }, eY = {
            91: {
                name: "definition", tokenize: function (e, t, n) {
                    let r;
                    let i = this;
                    return function (t) {
                        return e.enter("definition"), eA.call(i, e, a, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t)
                    };

                    function a(t) {
                        return (r = ek(i.sliceSerialize(i.events[i.events.length - 1][1]).slice(1, -1)), 58 === t) ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), eN(e, eb(e, e.attempt(eC, J(e, o, "whitespace"), J(e, o, "whitespace")), n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"))) : n(t)
                    }

                    function o(a) {
                        return null === a || Y(a) ? (e.exit("definition"), i.parser.defined.includes(r) || i.parser.defined.push(r), t(a)) : n(a)
                    }
                }
            }
        }, eQ = {[-2]: eS, [-1]: eS, 32: eS}, eV = {
            35: {
                name: "headingAtx", tokenize: function (e, t, n) {
                    let r = this, i = 0;
                    return function (a) {
                        return e.enter("atxHeading"), e.enter("atxHeadingSequence"), function a(o) {
                            return 35 === o && i++ < 6 ? (e.consume(o), a) : null === o || W(o) ? (e.exit("atxHeadingSequence"), r.interrupt ? t(o) : function n(r) {
                                return 35 === r ? (e.enter("atxHeadingSequence"), function t(r) {
                                    return 35 === r ? (e.consume(r), t) : (e.exit("atxHeadingSequence"), n(r))
                                }(r)) : null === r || Y(r) ? (e.exit("atxHeading"), t(r)) : Q(r) ? J(e, n, "whitespace")(r) : (e.enter("atxHeadingText"), function t(r) {
                                    return null === r || 35 === r || W(r) ? (e.exit("atxHeadingText"), n(r)) : (e.consume(r), t)
                                }(r))
                            }(o)) : n(o)
                        }(a)
                    }
                }, resolve: function (e, t) {
                    let n, r, i = e.length - 2, a = 3;
                    return "whitespace" === e[3][1].type && (a += 2), i - 2 > a && "whitespace" === e[i][1].type && (i -= 2), "atxHeadingSequence" === e[i][1].type && (a === i - 1 || i - 4 > a && "whitespace" === e[i - 2][1].type) && (i -= a + 1 === i ? 2 : 4), i > a && (n = {
                        type: "atxHeadingText",
                        start: e[a][1].start,
                        end: e[i][1].end
                    }, r = {
                        type: "chunkText",
                        start: e[a][1].start,
                        end: e[i][1].end,
                        contentType: "text"
                    }, P(e, a, i - a + 1, [["enter", n, t], ["enter", r, t], ["exit", r, t], ["exit", n, t]])), e
                }
            }, 42: ef, 45: [ex, ef], 60: {
                name: "htmlFlow", tokenize: function (e, t, n) {
                    let r, i, a, o, s;
                    let l = this;
                    return function (t) {
                        return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), c
                    };

                    function c(o) {
                        return 33 === o ? (e.consume(o), u) : 47 === o ? (e.consume(o), h) : 63 === o ? (e.consume(o), r = 3, l.interrupt ? t : w) : U(o) ? (e.consume(o), a = String.fromCharCode(o), i = !0, m) : n(o)
                    }

                    function u(i) {
                        return 45 === i ? (e.consume(i), r = 2, d) : 91 === i ? (e.consume(i), r = 5, a = "CDATA[", o = 0, p) : U(i) ? (e.consume(i), r = 4, l.interrupt ? t : w) : n(i)
                    }

                    function d(r) {
                        return 45 === r ? (e.consume(r), l.interrupt ? t : w) : n(r)
                    }

                    function p(r) {
                        return r === a.charCodeAt(o++) ? (e.consume(r), o === a.length ? l.interrupt ? t : k : p) : n(r)
                    }

                    function h(t) {
                        return U(t) ? (e.consume(t), a = String.fromCharCode(t), m) : n(t)
                    }

                    function m(o) {
                        return null === o || 47 === o || 62 === o || W(o) ? 47 !== o && i && eI.includes(a.toLowerCase()) ? (r = 1, l.interrupt ? t(o) : k(o)) : ev.includes(a.toLowerCase()) ? (r = 6, 47 === o) ? (e.consume(o), f) : l.interrupt ? t(o) : k(o) : (r = 7, l.interrupt && !l.parser.lazy[l.now().line] ? n(o) : i ? g(o) : function t(n) {
                            return Q(n) ? (e.consume(n), t) : y(n)
                        }(o)) : 45 === o || z(o) ? (e.consume(o), a += String.fromCharCode(o), m) : n(o)
                    }

                    function f(r) {
                        return 62 === r ? (e.consume(r), l.interrupt ? t : k) : n(r)
                    }

                    function g(t) {
                        return 47 === t ? (e.consume(t), y) : 58 === t || 95 === t || U(t) ? (e.consume(t), E) : Q(t) ? (e.consume(t), g) : y(t)
                    }

                    function E(t) {
                        return 45 === t || 46 === t || 58 === t || 95 === t || z(t) ? (e.consume(t), E) : T(t)
                    }

                    function T(t) {
                        return 61 === t ? (e.consume(t), _) : Q(t) ? (e.consume(t), T) : g(t)
                    }

                    function _(t) {
                        return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), s = t, b) : Q(t) ? (e.consume(t), _) : (s = null, function t(n) {
                            return null === n || 34 === n || 39 === n || 60 === n || 61 === n || 62 === n || 96 === n || W(n) ? T(n) : (e.consume(n), t)
                        }(t))
                    }

                    function b(t) {
                        return null === t || Y(t) ? n(t) : t === s ? (e.consume(t), A) : (e.consume(t), b)
                    }

                    function A(e) {
                        return 47 === e || 62 === e || Q(e) ? g(e) : n(e)
                    }

                    function y(t) {
                        return 62 === t ? (e.consume(t), N) : n(t)
                    }

                    function N(t) {
                        return Q(t) ? (e.consume(t), N) : null === t || Y(t) ? k(t) : n(t)
                    }

                    function k(t) {
                        return 45 === t && 2 === r ? (e.consume(t), O) : 60 === t && 1 === r ? (e.consume(t), x) : 62 === t && 4 === r ? (e.consume(t), R) : 63 === t && 3 === r ? (e.consume(t), w) : 93 === t && 5 === r ? (e.consume(t), I) : Y(t) && (6 === r || 7 === r) ? e.check(ew, R, C)(t) : null === t || Y(t) ? C(t) : (e.consume(t), k)
                    }

                    function C(t) {
                        return e.exit("htmlFlowData"), function t(n) {
                            return null === n ? M(n) : Y(n) ? e.attempt({
                                tokenize: S,
                                partial: !0
                            }, t, M)(n) : (e.enter("htmlFlowData"), k(n))
                        }(t)
                    }

                    function S(e, t, n) {
                        return function (t) {
                            return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), r
                        };

                        function r(e) {
                            return l.parser.lazy[l.now().line] ? n(e) : t(e)
                        }
                    }

                    function O(t) {
                        return 45 === t ? (e.consume(t), w) : k(t)
                    }

                    function x(t) {
                        return 47 === t ? (e.consume(t), a = "", v) : k(t)
                    }

                    function v(t) {
                        return 62 === t && eI.includes(a.toLowerCase()) ? (e.consume(t), R) : U(t) && a.length < 8 ? (e.consume(t), a += String.fromCharCode(t), v) : k(t)
                    }

                    function I(t) {
                        return 93 === t ? (e.consume(t), w) : k(t)
                    }

                    function w(t) {
                        return 62 === t ? (e.consume(t), R) : 45 === t && 2 === r ? (e.consume(t), w) : k(t)
                    }

                    function R(t) {
                        return null === t || Y(t) ? (e.exit("htmlFlowData"), M(t)) : (e.consume(t), R)
                    }

                    function M(n) {
                        return e.exit("htmlFlow"), t(n)
                    }
                }, resolveTo: function (e) {
                    let t = e.length;
                    for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type);) ;
                    return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e
                }, concrete: !0
            }, 61: ex, 95: ef, 96: eR, 126: eR
        }, eX = {38: eD, 92: eP}, eZ = {
            [-5]: eF, [-4]: eF, [-3]: eF, 33: eG, 38: eD, 42: ej, 60: [{
                name: "autolink", tokenize: function (e, t, n) {
                    let r = 1;
                    return function (t) {
                        return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), i
                    };

                    function i(t) {
                        return U(t) ? (e.consume(t), a) : $(t) ? s(t) : n(t)
                    }

                    function a(t) {
                        return 43 === t || 45 === t || 46 === t || z(t) ? function t(n) {
                            return 58 === n ? (e.consume(n), o) : (43 === n || 45 === n || 46 === n || z(n)) && r++ < 32 ? (e.consume(n), t) : s(n)
                        }(t) : s(t)
                    }

                    function o(t) {
                        return 62 === t ? (e.exit("autolinkProtocol"), c(t)) : null === t || 32 === t || 60 === t || q(t) ? n(t) : (e.consume(t), o)
                    }

                    function s(t) {
                        return 64 === t ? (e.consume(t), r = 0, l) : $(t) ? (e.consume(t), s) : n(t)
                    }

                    function l(t) {
                        return z(t) ? function t(i) {
                            return 46 === i ? (e.consume(i), r = 0, l) : 62 === i ? (e.exit("autolinkProtocol").type = "autolinkEmail", c(i)) : function i(a) {
                                return (45 === a || z(a)) && r++ < 63 ? (e.consume(a), 45 === a ? i : t) : n(a)
                            }(i)
                        }(t) : n(t)
                    }

                    function c(n) {
                        return e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t
                    }
                }
            }, {
                name: "htmlText", tokenize: function (e, t, n) {
                    let r, i, a, o;
                    let s = this;
                    return function (t) {
                        return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), l
                    };

                    function l(t) {
                        return 33 === t ? (e.consume(t), c) : 47 === t ? (e.consume(t), y) : 63 === t ? (e.consume(t), b) : U(t) ? (e.consume(t), k) : n(t)
                    }

                    function c(t) {
                        return 45 === t ? (e.consume(t), u) : 91 === t ? (e.consume(t), i = "CDATA[", a = 0, f) : U(t) ? (e.consume(t), _) : n(t)
                    }

                    function u(t) {
                        return 45 === t ? (e.consume(t), d) : n(t)
                    }

                    function d(t) {
                        return null === t || 62 === t ? n(t) : 45 === t ? (e.consume(t), p) : h(t)
                    }

                    function p(e) {
                        return null === e || 62 === e ? n(e) : h(e)
                    }

                    function h(t) {
                        return null === t ? n(t) : 45 === t ? (e.consume(t), m) : Y(t) ? (o = h, w(t)) : (e.consume(t), h)
                    }

                    function m(t) {
                        return 45 === t ? (e.consume(t), M) : h(t)
                    }

                    function f(t) {
                        return t === i.charCodeAt(a++) ? (e.consume(t), a === i.length ? g : f) : n(t)
                    }

                    function g(t) {
                        return null === t ? n(t) : 93 === t ? (e.consume(t), E) : Y(t) ? (o = g, w(t)) : (e.consume(t), g)
                    }

                    function E(t) {
                        return 93 === t ? (e.consume(t), T) : g(t)
                    }

                    function T(t) {
                        return 62 === t ? M(t) : 93 === t ? (e.consume(t), T) : g(t)
                    }

                    function _(t) {
                        return null === t || 62 === t ? M(t) : Y(t) ? (o = _, w(t)) : (e.consume(t), _)
                    }

                    function b(t) {
                        return null === t ? n(t) : 63 === t ? (e.consume(t), A) : Y(t) ? (o = b, w(t)) : (e.consume(t), b)
                    }

                    function A(e) {
                        return 62 === e ? M(e) : b(e)
                    }

                    function y(t) {
                        return U(t) ? (e.consume(t), N) : n(t)
                    }

                    function N(t) {
                        return 45 === t || z(t) ? (e.consume(t), N) : function t(n) {
                            return Y(n) ? (o = t, w(n)) : Q(n) ? (e.consume(n), t) : M(n)
                        }(t)
                    }

                    function k(t) {
                        return 45 === t || z(t) ? (e.consume(t), k) : 47 === t || 62 === t || W(t) ? C(t) : n(t)
                    }

                    function C(t) {
                        return 47 === t ? (e.consume(t), M) : 58 === t || 95 === t || U(t) ? (e.consume(t), S) : Y(t) ? (o = C, w(t)) : Q(t) ? (e.consume(t), C) : M(t)
                    }

                    function S(t) {
                        return 45 === t || 46 === t || 58 === t || 95 === t || z(t) ? (e.consume(t), S) : function t(n) {
                            return 61 === n ? (e.consume(n), O) : Y(n) ? (o = t, w(n)) : Q(n) ? (e.consume(n), t) : C(n)
                        }(t)
                    }

                    function O(t) {
                        return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t), r = t, x) : Y(t) ? (o = O, w(t)) : Q(t) ? (e.consume(t), O) : (e.consume(t), r = void 0, I)
                    }

                    function x(t) {
                        return t === r ? (e.consume(t), v) : null === t ? n(t) : Y(t) ? (o = x, w(t)) : (e.consume(t), x)
                    }

                    function v(e) {
                        return 62 === e || 47 === e || W(e) ? C(e) : n(e)
                    }

                    function I(t) {
                        return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 62 === t || W(t) ? C(t) : (e.consume(t), I)
                    }

                    function w(t) {
                        return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), J(e, R, "linePrefix", s.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
                    }

                    function R(t) {
                        return e.enter("htmlTextData"), o(t)
                    }

                    function M(r) {
                        return 62 === r ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r)
                    }
                }
            }], 91: eq, 92: [{
                name: "hardBreakEscape", tokenize: function (e, t, n) {
                    return function (t) {
                        return e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(t), r
                    };

                    function r(r) {
                        return Y(r) ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(r)) : n(r)
                    }
                }
            }, eP], 93: eH, 95: ej, 96: {
                name: "codeText", tokenize: function (e, t, n) {
                    let r, i, a = 0;
                    return function (t) {
                        return e.enter("codeText"), e.enter("codeTextSequence"), function t(n) {
                            return 96 === n ? (e.consume(n), a++, t) : (e.exit("codeTextSequence"), o(n))
                        }(t)
                    };

                    function o(l) {
                        return null === l ? n(l) : 96 === l ? (i = e.enter("codeTextSequence"), r = 0, function n(o) {
                            return 96 === o ? (e.consume(o), r++, n) : r === a ? (e.exit("codeTextSequence"), e.exit("codeText"), t(o)) : (i.type = "codeTextData", s(o))
                        }(l)) : 32 === l ? (e.enter("space"), e.consume(l), e.exit("space"), o) : Y(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : (e.enter("codeTextData"), s(l))
                    }

                    function s(t) {
                        return null === t || 32 === t || 96 === t || Y(t) ? (e.exit("codeTextData"), o(t)) : (e.consume(t), s)
                    }
                }, resolve: function (e) {
                    let t, n, r = e.length - 4, i = 3;
                    if (("lineEnding" === e[3][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
                        for (t = i; ++t < r;) if ("codeTextData" === e[t][1].type) {
                            e[i][1].type = "codeTextPadding", e[r][1].type = "codeTextPadding", i += 2, r -= 2;
                            break
                        }
                    }
                    for (t = i - 1, r++; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t === r || "lineEnding" === e[t][1].type) && (e[n][1].type = "codeTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
                    return e
                }, previous: function (e) {
                    return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                }
            }
        }, eJ = {null: [ej, el]}, e1 = {null: [42, 95]}, e0 = {null: []}, e9 = /[\0\t\n\r]/g;

        function e5(e, t) {
            let n = Number.parseInt(e, t);
            return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCharCode(n)
        }

        let e4 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;

        function e8(e) {
            return e.replace(e4, e2)
        }

        function e2(e, t, n) {
            if (t) return t;
            let r = n.charCodeAt(0);
            if (35 === r) {
                let e = n.charCodeAt(1), t = 120 === e || 88 === e;
                return e5(n.slice(t ? 2 : 1), t ? 16 : 10)
            }
            return eL(n) || e
        }

        let e6 = {}.hasOwnProperty, e7 = function (e, t, n) {
            let i, a, o, s;
            return "string" != typeof t && (n = t, t = void 0), (function (e) {
                let t = {
                    transforms: [], canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"], enter: {
                        autolink: a(b),
                        autolinkProtocol: p,
                        autolinkEmail: p,
                        atxHeading: a(E),
                        blockQuote: a(function () {
                            return {type: "blockquote", children: []}
                        }),
                        characterEscape: p,
                        characterReference: p,
                        codeFenced: a(g),
                        codeFencedFenceInfo: o,
                        codeFencedFenceMeta: o,
                        codeIndented: a(g, o),
                        codeText: a(function () {
                            return {type: "inlineCode", value: ""}
                        }, o),
                        codeTextData: p,
                        data: p,
                        codeFlowValue: p,
                        definition: a(function () {
                            return {type: "definition", identifier: "", label: null, title: null, url: ""}
                        }),
                        definitionDestinationString: o,
                        definitionLabelString: o,
                        definitionTitleString: o,
                        emphasis: a(function () {
                            return {type: "emphasis", children: []}
                        }),
                        hardBreakEscape: a(T),
                        hardBreakTrailing: a(T),
                        htmlFlow: a(_, o),
                        htmlFlowData: p,
                        htmlText: a(_, o),
                        htmlTextData: p,
                        image: a(function () {
                            return {type: "image", title: null, url: "", alt: null}
                        }),
                        label: o,
                        link: a(b),
                        listItem: a(function (e) {
                            return {type: "listItem", spread: e._spread, checked: null, children: []}
                        }),
                        listItemValue: function (e) {
                            if (n.expectingFirstListItemValue) {
                                let t = this.stack[this.stack.length - 2];
                                t.start = Number.parseInt(this.sliceSerialize(e), 10), n.expectingFirstListItemValue = void 0
                            }
                        },
                        listOrdered: a(A, function () {
                            n.expectingFirstListItemValue = !0
                        }),
                        listUnordered: a(A),
                        paragraph: a(function () {
                            return {type: "paragraph", children: []}
                        }),
                        reference: function () {
                            n.referenceType = "collapsed"
                        },
                        referenceString: o,
                        resourceDestinationString: o,
                        resourceTitleString: o,
                        setextHeading: a(E),
                        strong: a(function () {
                            return {type: "strong", children: []}
                        }),
                        thematicBreak: a(function () {
                            return {type: "thematicBreak"}
                        })
                    }, exit: {
                        atxHeading: c(),
                        atxHeadingSequence: function (e) {
                            let t = this.stack[this.stack.length - 1];
                            if (!t.depth) {
                                let n = this.sliceSerialize(e).length;
                                t.depth = n
                            }
                        },
                        autolink: c(),
                        autolinkEmail: function (e) {
                            h.call(this, e);
                            let t = this.stack[this.stack.length - 1];
                            t.url = "mailto:" + this.sliceSerialize(e)
                        },
                        autolinkProtocol: function (e) {
                            h.call(this, e);
                            let t = this.stack[this.stack.length - 1];
                            t.url = this.sliceSerialize(e)
                        },
                        blockQuote: c(),
                        characterEscapeValue: h,
                        characterReferenceMarkerHexadecimal: f,
                        characterReferenceMarkerNumeric: f,
                        characterReferenceValue: function (e) {
                            let t;
                            let r = this.sliceSerialize(e), i = n.characterReferenceType;
                            if (i) t = e5(r, "characterReferenceMarkerNumeric" === i ? 10 : 16), n.characterReferenceType = void 0; else {
                                let e = eL(r);
                                t = e
                            }
                            let a = this.stack.pop();
                            a.value += t, a.position.end = e3(e.end)
                        },
                        codeFenced: c(function () {
                            let e = this.resume(), t = this.stack[this.stack.length - 1];
                            t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), n.flowCodeInside = void 0
                        }),
                        codeFencedFence: function () {
                            !n.flowCodeInside && (this.buffer(), n.flowCodeInside = !0)
                        },
                        codeFencedFenceInfo: function () {
                            let e = this.resume(), t = this.stack[this.stack.length - 1];
                            t.lang = e
                        },
                        codeFencedFenceMeta: function () {
                            let e = this.resume(), t = this.stack[this.stack.length - 1];
                            t.meta = e
                        },
                        codeFlowValue: h,
                        codeIndented: c(function () {
                            let e = this.resume(), t = this.stack[this.stack.length - 1];
                            t.value = e.replace(/(\r?\n|\r)$/g, "")
                        }),
                        codeText: c(function () {
                            let e = this.resume(), t = this.stack[this.stack.length - 1];
                            t.value = e
                        }),
                        codeTextData: h,
                        data: h,
                        definition: c(),
                        definitionDestinationString: function () {
                            let e = this.resume(), t = this.stack[this.stack.length - 1];
                            t.url = e
                        },
                        definitionLabelString: function (e) {
                            let t = this.resume(), n = this.stack[this.stack.length - 1];
                            n.label = t, n.identifier = ek(this.sliceSerialize(e)).toLowerCase()
                        },
                        definitionTitleString: function () {
                            let e = this.resume(), t = this.stack[this.stack.length - 1];
                            t.title = e
                        },
                        emphasis: c(),
                        hardBreakEscape: c(m),
                        hardBreakTrailing: c(m),
                        htmlFlow: c(function () {
                            let e = this.resume(), t = this.stack[this.stack.length - 1];
                            t.value = e
                        }),
                        htmlFlowData: h,
                        htmlText: c(function () {
                            let e = this.resume(), t = this.stack[this.stack.length - 1];
                            t.value = e
                        }),
                        htmlTextData: h,
                        image: c(function () {
                            let e = this.stack[this.stack.length - 1];
                            if (n.inReference) {
                                let t = n.referenceType || "shortcut";
                                e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
                            } else delete e.identifier, delete e.label;
                            n.referenceType = void 0
                        }),
                        label: function () {
                            let e = this.stack[this.stack.length - 1], t = this.resume(),
                                r = this.stack[this.stack.length - 1];
                            if (n.inReference = !0, "link" === r.type) {
                                let t = e.children;
                                r.children = t
                            } else r.alt = t
                        },
                        labelText: function (e) {
                            let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
                            n.label = e8(t), n.identifier = ek(t).toLowerCase()
                        },
                        lineEnding: function (e) {
                            let r = this.stack[this.stack.length - 1];
                            if (n.atHardBreak) {
                                let t = r.children[r.children.length - 1];
                                t.position.end = e3(e.end), n.atHardBreak = void 0;
                                return
                            }
                            !n.setextHeadingSlurpLineEnding && t.canContainEols.includes(r.type) && (p.call(this, e), h.call(this, e))
                        },
                        link: c(function () {
                            let e = this.stack[this.stack.length - 1];
                            if (n.inReference) {
                                let t = n.referenceType || "shortcut";
                                e.type += "Reference", e.referenceType = t, delete e.url, delete e.title
                            } else delete e.identifier, delete e.label;
                            n.referenceType = void 0
                        }),
                        listItem: c(),
                        listOrdered: c(),
                        listUnordered: c(),
                        paragraph: c(),
                        referenceString: function (e) {
                            let t = this.resume(), r = this.stack[this.stack.length - 1];
                            r.label = t, r.identifier = ek(this.sliceSerialize(e)).toLowerCase(), n.referenceType = "full"
                        },
                        resourceDestinationString: function () {
                            let e = this.resume(), t = this.stack[this.stack.length - 1];
                            t.url = e
                        },
                        resourceTitleString: function () {
                            let e = this.resume(), t = this.stack[this.stack.length - 1];
                            t.title = e
                        },
                        resource: function () {
                            n.inReference = void 0
                        },
                        setextHeading: c(function () {
                            n.setextHeadingSlurpLineEnding = void 0
                        }),
                        setextHeadingLineSequence: function (e) {
                            let t = this.stack[this.stack.length - 1];
                            t.depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                        },
                        setextHeadingText: function () {
                            n.setextHeadingSlurpLineEnding = !0
                        },
                        strong: c(),
                        thematicBreak: c()
                    }
                };
                !function e(t, n) {
                    let r = -1;
                    for (; ++r < n.length;) {
                        let i = n[r];
                        Array.isArray(i) ? e(t, i) : function (e, t) {
                            let n;
                            for (n in t) if (e6.call(t, n)) {
                                if ("canContainEols" === n) {
                                    let r = t[n];
                                    r && e[n].push(...r)
                                } else if ("transforms" === n) {
                                    let r = t[n];
                                    r && e[n].push(...r)
                                } else if ("enter" === n || "exit" === n) {
                                    let r = t[n];
                                    r && Object.assign(e[n], r)
                                }
                            }
                        }(t, i)
                    }
                }(t, (e || {}).mdastExtensions || []);
                let n = {};
                return function (e) {
                    let n = {type: "root", children: []}, a = {
                        stack: [n],
                        tokenStack: [],
                        config: t,
                        enter: s,
                        exit: u,
                        buffer: o,
                        resume: d,
                        setData: r,
                        getData: i
                    }, l = [], c = -1;
                    for (; ++c < e.length;) if ("listOrdered" === e[c][1].type || "listUnordered" === e[c][1].type) {
                        if ("enter" === e[c][0]) l.push(c); else {
                            let t = l.pop();
                            c = function (e, t, n) {
                                let r, i, a, o, s = t - 1, l = -1, c = !1;
                                for (; ++s <= n;) {
                                    let t = e[s];
                                    if ("listUnordered" === t[1].type || "listOrdered" === t[1].type || "blockQuote" === t[1].type ? ("enter" === t[0] ? l++ : l--, o = void 0) : "lineEndingBlank" === t[1].type ? "enter" === t[0] && (!r || o || l || a || (a = s), o = void 0) : "linePrefix" === t[1].type || "listItemValue" === t[1].type || "listItemMarker" === t[1].type || "listItemPrefix" === t[1].type || "listItemPrefixWhitespace" === t[1].type || (o = void 0), !l && "enter" === t[0] && "listItemPrefix" === t[1].type || -1 === l && "exit" === t[0] && ("listUnordered" === t[1].type || "listOrdered" === t[1].type)) {
                                        if (r) {
                                            let o = s;
                                            for (i = void 0; o--;) {
                                                let t = e[o];
                                                if ("lineEnding" === t[1].type || "lineEndingBlank" === t[1].type) {
                                                    if ("exit" === t[0]) continue;
                                                    i && (e[i][1].type = "lineEndingBlank", c = !0), t[1].type = "lineEnding", i = o
                                                } else if ("linePrefix" === t[1].type || "blockQuotePrefix" === t[1].type || "blockQuotePrefixWhitespace" === t[1].type || "blockQuoteMarker" === t[1].type || "listItemIndent" === t[1].type) ; else break
                                            }
                                            a && (!i || a < i) && (r._spread = !0), r.end = Object.assign({}, i ? e[i][1].start : t[1].end), e.splice(i || s, 0, ["exit", r, t[2]]), s++, n++
                                        }
                                        "listItemPrefix" === t[1].type && (r = {
                                            type: "listItem",
                                            _spread: !1,
                                            start: Object.assign({}, t[1].start)
                                        }, e.splice(s, 0, ["enter", r, t[2]]), s++, n++, a = void 0, o = !0)
                                    }
                                }
                                return e[t][1]._spread = c, n
                            }(e, t, c)
                        }
                    }
                    for (c = -1; ++c < e.length;) {
                        let n = t[e[c][0]];
                        e6.call(n, e[c][1].type) && n[e[c][1].type].call(Object.assign({sliceSerialize: e[c][2].sliceSerialize}, a), e[c][1])
                    }
                    if (a.tokenStack.length > 0) {
                        let e = a.tokenStack[a.tokenStack.length - 1], t = e[1] || te;
                        t.call(a, void 0, e[0])
                    }
                    for (n.position = {
                        start: e3(e.length > 0 ? e[0][1].start : {line: 1, column: 1, offset: 0}),
                        end: e3(e.length > 0 ? e[e.length - 2][1].end : {line: 1, column: 1, offset: 0})
                    }, c = -1; ++c < t.transforms.length;) n = t.transforms[c](n) || n;
                    return n
                };

                function r(e, t) {
                    n[e] = t
                }

                function i(e) {
                    return n[e]
                }

                function a(e, t) {
                    return function (n) {
                        s.call(this, e(n), n), t && t.call(this, n)
                    }
                }

                function o() {
                    this.stack.push({type: "fragment", children: []})
                }

                function s(e, t, n) {
                    let r = this.stack[this.stack.length - 1];
                    return r.children.push(e), this.stack.push(e), this.tokenStack.push([t, n]), e.position = {start: e3(t.start)}, e
                }

                function c(e) {
                    return function (t) {
                        e && e.call(this, t), u.call(this, t)
                    }
                }

                function u(e, t) {
                    let n = this.stack.pop(), r = this.tokenStack.pop();
                    if (r) {
                        if (r[0].type !== e.type) {
                            if (t) t.call(this, e, r[0]); else {
                                let t = r[1] || te;
                                t.call(this, e, r[0])
                            }
                        }
                    } else throw Error("Cannot close `" + e.type + "` (" + l({
                        start: e.start,
                        end: e.end
                    }) + "): it’s not open");
                    return n.position.end = e3(e.end), n
                }

                function d() {
                    return function (e, t) {
                        let n = {}.includeImageAlt;
                        return L(e, "boolean" != typeof n || n)
                    }(this.stack.pop())
                }

                function p(e) {
                    let t = this.stack[this.stack.length - 1], n = t.children[t.children.length - 1];
                    n && "text" === n.type || ((n = {
                        type: "text",
                        value: ""
                    }).position = {start: e3(e.start)}, t.children.push(n)), this.stack.push(n)
                }

                function h(e) {
                    let t = this.stack.pop();
                    t.value += this.sliceSerialize(e), t.position.end = e3(e.end)
                }

                function m() {
                    n.atHardBreak = !0
                }

                function f(e) {
                    var t;
                    t = e.type, n.characterReferenceType = t
                }

                function g() {
                    return {type: "code", lang: null, meta: null, value: ""}
                }

                function E() {
                    return {type: "heading", depth: void 0, children: []}
                }

                function T() {
                    return {type: "break"}
                }

                function _() {
                    return {type: "html", value: ""}
                }

                function b() {
                    return {type: "link", title: null, url: "", children: []}
                }

                function A(e) {
                    return {
                        type: "list",
                        ordered: "listOrdered" === e.type,
                        start: null,
                        spread: e._spread,
                        children: []
                    }
                }
            })(n)(function (e) {
                for (; !ei(e);) ;
                return e
            }((function (e = {}) {
                let t = B([r].concat(e.extensions || [])), n = {
                    defined: [],
                    lazy: {},
                    constructs: t,
                    content: i(ee),
                    document: i(et),
                    flow: i(es),
                    string: i(ec),
                    text: i(eu)
                };
                return n;

                function i(e) {
                    return function (t) {
                        return function (e, t, n) {
                            let r = Object.assign(n ? Object.assign({}, n) : {
                                line: 1,
                                column: 1,
                                offset: 0
                            }, {_index: 0, _bufferIndex: -1}), i = {}, a = [], o = [], s = [], l = {
                                consume: function (e) {
                                    Y(e) ? (r.line++, r.column = 1, r.offset += -3 === e ? 2 : 1, g()) : -1 !== e && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = e
                                }, enter: function (e, t) {
                                    let n = t || {};
                                    return n.type = e, n.start = p(), c.events.push(["enter", n, c]), s.push(n), n
                                }, exit: function (e) {
                                    let t = s.pop();
                                    return t.end = p(), c.events.push(["exit", t, c]), t
                                }, attempt: m(function (e, t) {
                                    f(e, t.from)
                                }), check: m(h), interrupt: m(h, {interrupt: !0})
                            }, c = {
                                previous: null,
                                code: null,
                                containerState: {},
                                events: [],
                                parser: e,
                                sliceStream: d,
                                sliceSerialize: function (e, t) {
                                    return function (e, t) {
                                        let n, r = -1, i = [];
                                        for (; ++r < e.length;) {
                                            let a;
                                            let o = e[r];
                                            if ("string" == typeof o) a = o; else switch (o) {
                                                case -5:
                                                    a = "\r";
                                                    break;
                                                case -4:
                                                    a = "\n";
                                                    break;
                                                case -3:
                                                    a = "\r\n";
                                                    break;
                                                case -2:
                                                    a = t ? " " : "	";
                                                    break;
                                                case -1:
                                                    if (!t && n) continue;
                                                    a = " ";
                                                    break;
                                                default:
                                                    a = String.fromCharCode(o)
                                            }
                                            n = -2 === o, i.push(a)
                                        }
                                        return i.join("")
                                    }(d(e), t)
                                },
                                now: p,
                                defineSkip: function (e) {
                                    i[e.line] = e.column, g()
                                },
                                write: function (e) {
                                    return (o = F(o, e), function () {
                                        let e;
                                        for (; r._index < o.length;) {
                                            var t;
                                            let n = o[r._index];
                                            if ("string" == typeof n) for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < n.length;) u = u(n.charCodeAt(r._bufferIndex)); else u = u(n)
                                        }
                                    }(), null !== o[o.length - 1]) ? [] : (f(t, 0), c.events = em(a, c.events, c), c.events)
                                }
                            }, u = t.tokenize.call(c, l);
                            return t.resolveAll && a.push(t), c;

                            function d(e) {
                                return function (e, t) {
                                    let n;
                                    let r = t.start._index, i = t.start._bufferIndex, a = t.end._index,
                                        o = t.end._bufferIndex;
                                    return r === a ? n = [e[r].slice(i, o)] : (n = e.slice(r, a), i > -1 && (n[0] = n[0].slice(i)), o > 0 && n.push(e[a].slice(0, o))), n
                                }(o, e)
                            }

                            function p() {
                                return Object.assign({}, r)
                            }

                            function h(e, t) {
                                t.restore()
                            }

                            function m(e, t) {
                                return function (n, i, a) {
                                    let o, u, d, h;
                                    return Array.isArray(n) ? m(n) : "tokenize" in n ? m([n]) : function (e) {
                                        let t = null !== e && n[e], r = null !== e && n.null,
                                            i = [...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(r) ? r : r ? [r] : []];
                                        return m(i)(e)
                                    };

                                    function m(e) {
                                        return (o = e, u = 0, 0 === e.length) ? a : f(e[u])
                                    }

                                    function f(e) {
                                        return function (n) {
                                            return (h = function () {
                                                let e = p(), t = c.previous, n = c.currentConstruct,
                                                    i = c.events.length, a = Array.from(s);
                                                return {
                                                    restore: function () {
                                                        r = e, c.previous = t, c.currentConstruct = n, c.events.length = i, s = a, g()
                                                    }, from: i
                                                }
                                            }(), d = e, e.partial || (c.currentConstruct = e), e.name && c.parser.constructs.disable.null.includes(e.name)) ? T(n) : e.tokenize.call(t ? Object.assign(Object.create(c), t) : c, l, E, T)(n)
                                        }
                                    }

                                    function E(t) {
                                        return e(d, h), i
                                    }

                                    function T(e) {
                                        return (h.restore(), ++u < o.length) ? f(o[u]) : a
                                    }
                                }
                            }

                            function f(e, t) {
                                e.resolveAll && !a.includes(e) && a.push(e), e.resolve && P(c.events, t, c.events.length - t, e.resolve(c.events.slice(t), c)), e.resolveTo && (c.events = e.resolveTo(c.events, c))
                            }

                            function g() {
                                r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1)
                            }
                        }(n, e, t)
                    }
                }
            })(n).document().write((a = 1, o = "", s = !0, function (e, t, n) {
                let r, l, c, u, d;
                let p = [];
                for (e = o + e.toString(t), c = 0, o = "", s && (65279 === e.charCodeAt(0) && c++, s = void 0); c < e.length;) {
                    if (e9.lastIndex = c, u = (r = e9.exec(e)) && void 0 !== r.index ? r.index : e.length, d = e.charCodeAt(u), !r) {
                        o = e.slice(c);
                        break
                    }
                    if (10 === d && c === u && i) p.push(-3), i = void 0; else switch (i && (p.push(-5), i = void 0), c < u && (p.push(e.slice(c, u)), a += u - c), d) {
                        case 0:
                            p.push(65533), a++;
                            break;
                        case 9:
                            for (l = 4 * Math.ceil(a / 4), p.push(-2); a++ < l;) p.push(-1);
                            break;
                        case 10:
                            p.push(-4), a = 1;
                            break;
                        default:
                            i = !0, a = 1
                    }
                    c = u + 1
                }
                return n && (i && p.push(-5), o && p.push(o), p.push(null)), p
            })(e, t, !0))))
        };

        function e3(e) {
            return {line: e.line, column: e.column, offset: e.offset}
        }

        function te(e, t) {
            if (e) throw Error("Cannot close `" + e.type + "` (" + l({
                start: e.start,
                end: e.end
            }) + "): a different token (`" + t.type + "`, " + l({start: t.start, end: t.end}) + ") is open");
            throw Error("Cannot close document, a token (`" + t.type + "`, " + l({
                start: t.start,
                end: t.end
            }) + ") is still open")
        }

        var tt = function (e) {
            let t = t => {
                let n = this.data("settings");
                return e7(t, Object.assign({}, n, e, {
                    extensions: this.data("micromarkExtensions") || [],
                    mdastExtensions: this.data("fromMarkdownExtensions") || []
                }))
            };
            Object.assign(this, {Parser: t})
        };

        function tn(e) {
            let t = [], n = -1, r = 0, i = 0;
            for (; ++n < e.length;) {
                let a = e.charCodeAt(n), o = "";
                if (37 === a && z(e.charCodeAt(n + 1)) && z(e.charCodeAt(n + 2))) i = 2; else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a)); else if (a > 55295 && a < 57344) {
                    let t = e.charCodeAt(n + 1);
                    a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�"
                } else o = String.fromCharCode(a);
                o && (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0)
            }
            return t.join("") + e.slice(r)
        }

        let tr = function (e) {
            if (null == e) return ta;
            if ("string" == typeof e) return ti(function (t) {
                return t && t.type === e
            });
            if ("object" == typeof e) return Array.isArray(e) ? function (e) {
                let t = [], n = -1;
                for (; ++n < e.length;) t[n] = tr(e[n]);
                return ti(function (...e) {
                    let n = -1;
                    for (; ++n < t.length;) if (t[n].call(this, ...e)) return !0;
                    return !1
                })
            }(e) : ti(function (t) {
                let n;
                for (n in e) if (t[n] !== e[n]) return !1;
                return !0
            });
            if ("function" == typeof e) return ti(e);
            throw Error("Expected function, string, or object as test")
        };

        function ti(e) {
            return function (t, ...n) {
                return !!(t && "object" == typeof t && "type" in t && e.call(this, t, ...n))
            }
        }

        function ta() {
            return !0
        }

        let to = function (e, t, n, r) {
            "function" == typeof t && "function" != typeof n && (r = n, n = t, t = null);
            let i = tr(t), a = r ? -1 : 1;
            (function e(o, s, l) {
                let c = o && "object" == typeof o ? o : {};
                if ("string" == typeof c.type) {
                    let e = "string" == typeof c.tagName ? c.tagName : "string" == typeof c.name ? c.name : void 0;
                    Object.defineProperty(u, "name", {value: "node (" + o.type + (e ? "<" + e + ">" : "") + ")"})
                }
                return u;

                function u() {
                    var c;
                    let u, d, p, h = [];
                    if ((!t || i(o, s, l[l.length - 1] || null)) && !1 === (h = Array.isArray(c = n(o, l)) ? c : "number" == typeof c ? [!0, c] : [c])[0]) return h;
                    if (o.children && "skip" !== h[0]) for (d = (r ? o.children.length : -1) + a, p = l.concat(o); d > -1 && d < o.children.length;) {
                        if (!1 === (u = e(o.children[d], d, p)())[0]) return u;
                        d = "number" == typeof u[1] ? u[1] : d + a
                    }
                    return h
                }
            })(e, void 0, [])()
        }, ts = function (e, t, n, r) {
            "function" == typeof t && "function" != typeof n && (r = n, n = t, t = null), to(e, t, function (e, t) {
                let r = t[t.length - 1];
                return n(e, r ? r.children.indexOf(e) : null, r)
            }, r)
        }, tl = tu("start"), tc = tu("end");

        function tu(e) {
            return function (t) {
                let n = t && t.position && t.position[e] || {};
                return {line: n.line || null, column: n.column || null, offset: n.offset > -1 ? n.offset : null}
            }
        }

        let td = {}.hasOwnProperty;

        function tp(e) {
            return String(e || "").toUpperCase()
        }

        function th(e, t) {
            let n;
            let r = String(t.identifier).toUpperCase(), i = tn(r.toLowerCase()), a = e.footnoteOrder.indexOf(r);
            -1 === a ? (e.footnoteOrder.push(r), e.footnoteCounts[r] = 1, n = e.footnoteOrder.length) : (e.footnoteCounts[r]++, n = a + 1);
            let o = e.footnoteCounts[r], s = {
                type: "element",
                tagName: "a",
                properties: {
                    href: "#" + e.clobberPrefix + "fn-" + i,
                    id: e.clobberPrefix + "fnref-" + i + (o > 1 ? "-" + o : ""),
                    dataFootnoteRef: !0,
                    ariaDescribedBy: ["footnote-label"]
                },
                children: [{type: "text", value: String(n)}]
            };
            e.patch(t, s);
            let l = {type: "element", tagName: "sup", properties: {}, children: [s]};
            return e.patch(t, l), e.applyData(t, l)
        }

        function tm(e, t) {
            let n = t.referenceType, r = "]";
            if ("collapsed" === n ? r += "[]" : "full" === n && (r += "[" + (t.label || t.identifier) + "]"), "imageReference" === t.type) return {
                type: "text",
                value: "![" + t.alt + r
            };
            let i = e.all(t), a = i[0];
            a && "text" === a.type ? a.value = "[" + a.value : i.unshift({type: "text", value: "["});
            let o = i[i.length - 1];
            return o && "text" === o.type ? o.value += r : i.push({type: "text", value: r}), i
        }

        function tf(e) {
            let t = e.spread;
            return null == t ? e.children.length > 1 : t
        }

        function tg(e, t, n) {
            let r = 0, i = e.length;
            if (t) {
                let t = e.codePointAt(r);
                for (; 9 === t || 32 === t;) r++, t = e.codePointAt(r)
            }
            if (n) {
                let t = e.codePointAt(i - 1);
                for (; 9 === t || 32 === t;) i--, t = e.codePointAt(i - 1)
            }
            return i > r ? e.slice(r, i) : ""
        }

        let tE = {
            blockquote: function (e, t) {
                let n = {type: "element", tagName: "blockquote", properties: {}, children: e.wrap(e.all(t), !0)};
                return e.patch(t, n), e.applyData(t, n)
            }, break: function (e, t) {
                let n = {type: "element", tagName: "br", properties: {}, children: []};
                return e.patch(t, n), [e.applyData(t, n), {type: "text", value: "\n"}]
            }, code: function (e, t) {
                let n = t.value ? t.value + "\n" : "", r = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null, i = {};
                r && (i.className = ["language-" + r]);
                let a = {type: "element", tagName: "code", properties: i, children: [{type: "text", value: n}]};
                return t.meta && (a.data = {meta: t.meta}), e.patch(t, a), a = {
                    type: "element",
                    tagName: "pre",
                    properties: {},
                    children: [a = e.applyData(t, a)]
                }, e.patch(t, a), a
            }, delete: function (e, t) {
                let n = {type: "element", tagName: "del", properties: {}, children: e.all(t)};
                return e.patch(t, n), e.applyData(t, n)
            }, emphasis: function (e, t) {
                let n = {type: "element", tagName: "em", properties: {}, children: e.all(t)};
                return e.patch(t, n), e.applyData(t, n)
            }, footnoteReference: th, footnote: function (e, t) {
                let n = e.footnoteById, r = 1;
                for (; (r in n);) r++;
                let i = String(r);
                return n[i] = {
                    type: "footnoteDefinition",
                    identifier: i,
                    children: [{type: "paragraph", children: t.children}],
                    position: t.position
                }, th(e, {type: "footnoteReference", identifier: i, position: t.position})
            }, heading: function (e, t) {
                let n = {type: "element", tagName: "h" + t.depth, properties: {}, children: e.all(t)};
                return e.patch(t, n), e.applyData(t, n)
            }, html: function (e, t) {
                if (e.dangerous) {
                    let n = {type: "raw", value: t.value};
                    return e.patch(t, n), e.applyData(t, n)
                }
                return null
            }, imageReference: function (e, t) {
                let n = e.definition(t.identifier);
                if (!n) return tm(e, t);
                let r = {src: tn(n.url || ""), alt: t.alt};
                null !== n.title && void 0 !== n.title && (r.title = n.title);
                let i = {type: "element", tagName: "img", properties: r, children: []};
                return e.patch(t, i), e.applyData(t, i)
            }, image: function (e, t) {
                let n = {src: tn(t.url)};
                null !== t.alt && void 0 !== t.alt && (n.alt = t.alt), null !== t.title && void 0 !== t.title && (n.title = t.title);
                let r = {type: "element", tagName: "img", properties: n, children: []};
                return e.patch(t, r), e.applyData(t, r)
            }, inlineCode: function (e, t) {
                let n = {type: "text", value: t.value.replace(/\r?\n|\r/g, " ")};
                e.patch(t, n);
                let r = {type: "element", tagName: "code", properties: {}, children: [n]};
                return e.patch(t, r), e.applyData(t, r)
            }, linkReference: function (e, t) {
                let n = e.definition(t.identifier);
                if (!n) return tm(e, t);
                let r = {href: tn(n.url || "")};
                null !== n.title && void 0 !== n.title && (r.title = n.title);
                let i = {type: "element", tagName: "a", properties: r, children: e.all(t)};
                return e.patch(t, i), e.applyData(t, i)
            }, link: function (e, t) {
                let n = {href: tn(t.url)};
                null !== t.title && void 0 !== t.title && (n.title = t.title);
                let r = {type: "element", tagName: "a", properties: n, children: e.all(t)};
                return e.patch(t, r), e.applyData(t, r)
            }, listItem: function (e, t, n) {
                let r = e.all(t), i = n ? function (e) {
                    let t = !1;
                    if ("list" === e.type) {
                        t = e.spread || !1;
                        let n = e.children, r = -1;
                        for (; !t && ++r < n.length;) t = tf(n[r])
                    }
                    return t
                }(n) : tf(t), a = {}, o = [];
                if ("boolean" == typeof t.checked) {
                    let e;
                    let n = r[0];
                    n && "element" === n.type && "p" === n.tagName ? e = n : (e = {
                        type: "element",
                        tagName: "p",
                        properties: {},
                        children: []
                    }, r.unshift(e)), e.children.length > 0 && e.children.unshift({
                        type: "text",
                        value: " "
                    }), e.children.unshift({
                        type: "element",
                        tagName: "input",
                        properties: {type: "checkbox", checked: t.checked, disabled: !0},
                        children: []
                    }), a.className = ["task-list-item"]
                }
                let s = -1;
                for (; ++s < r.length;) {
                    let e = r[s];
                    (i || 0 !== s || "element" !== e.type || "p" !== e.tagName) && o.push({
                        type: "text",
                        value: "\n"
                    }), "element" !== e.type || "p" !== e.tagName || i ? o.push(e) : o.push(...e.children)
                }
                let l = r[r.length - 1];
                l && (i || "element" !== l.type || "p" !== l.tagName) && o.push({type: "text", value: "\n"});
                let c = {type: "element", tagName: "li", properties: a, children: o};
                return e.patch(t, c), e.applyData(t, c)
            }, list: function (e, t) {
                let n = {}, r = e.all(t), i = -1;
                for ("number" == typeof t.start && 1 !== t.start && (n.start = t.start); ++i < r.length;) {
                    let e = r[i];
                    if ("element" === e.type && "li" === e.tagName && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
                        n.className = ["contains-task-list"];
                        break
                    }
                }
                let a = {type: "element", tagName: t.ordered ? "ol" : "ul", properties: n, children: e.wrap(r, !0)};
                return e.patch(t, a), e.applyData(t, a)
            }, paragraph: function (e, t) {
                let n = {type: "element", tagName: "p", properties: {}, children: e.all(t)};
                return e.patch(t, n), e.applyData(t, n)
            }, root: function (e, t) {
                let n = {type: "root", children: e.wrap(e.all(t))};
                return e.patch(t, n), e.applyData(t, n)
            }, strong: function (e, t) {
                let n = {type: "element", tagName: "strong", properties: {}, children: e.all(t)};
                return e.patch(t, n), e.applyData(t, n)
            }, table: function (e, t) {
                let n = e.all(t), r = n.shift(), i = [];
                if (r) {
                    let n = {type: "element", tagName: "thead", properties: {}, children: e.wrap([r], !0)};
                    e.patch(t.children[0], n), i.push(n)
                }
                if (n.length > 0) {
                    let r = {type: "element", tagName: "tbody", properties: {}, children: e.wrap(n, !0)},
                        a = tl(t.children[1]), o = tc(t.children[t.children.length - 1]);
                    a.line && o.line && (r.position = {start: a, end: o}), i.push(r)
                }
                let a = {type: "element", tagName: "table", properties: {}, children: e.wrap(i, !0)};
                return e.patch(t, a), e.applyData(t, a)
            }, tableCell: function (e, t) {
                let n = {type: "element", tagName: "td", properties: {}, children: e.all(t)};
                return e.patch(t, n), e.applyData(t, n)
            }, tableRow: function (e, t, n) {
                let r = n ? n.children : void 0, i = r ? r.indexOf(t) : 1, a = 0 === i ? "th" : "td",
                    o = n && "table" === n.type ? n.align : void 0, s = o ? o.length : t.children.length, l = -1,
                    c = [];
                for (; ++l < s;) {
                    let n = t.children[l], r = {}, i = o ? o[l] : void 0;
                    i && (r.align = i);
                    let s = {type: "element", tagName: a, properties: r, children: []};
                    n && (s.children = e.all(n), e.patch(n, s), s = e.applyData(t, s)), c.push(s)
                }
                let u = {type: "element", tagName: "tr", properties: {}, children: e.wrap(c, !0)};
                return e.patch(t, u), e.applyData(t, u)
            }, text: function (e, t) {
                let n = {
                    type: "text", value: function (e) {
                        let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
                        for (; r;) a.push(tg(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
                        return a.push(tg(t.slice(i), i > 0, !1)), a.join("")
                    }(String(t.value))
                };
                return e.patch(t, n), e.applyData(t, n)
            }, thematicBreak: function (e, t) {
                let n = {type: "element", tagName: "hr", properties: {}, children: []};
                return e.patch(t, n), e.applyData(t, n)
            }, toml: tT, yaml: tT, definition: tT, footnoteDefinition: tT
        };

        function tT() {
            return null
        }

        let t_ = {}.hasOwnProperty;

        function tb(e, t) {
            e.position && (t.position = {start: tl(e), end: tc(e)})
        }

        function tA(e, t) {
            let n = t;
            if (e && e.data) {
                let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
                "string" == typeof t && ("element" === n.type ? n.tagName = t : n = {
                    type: "element",
                    tagName: t,
                    properties: {},
                    children: []
                }), "element" === n.type && i && (n.properties = {...n.properties, ...i}), "children" in n && n.children && null != r && (n.children = r)
            }
            return n
        }

        function ty(e, t, n) {
            let r = t && t.type;
            if (!r) throw Error("Expected node, got `" + t + "`");
            return t_.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children" in t ? {
                ...t,
                children: tN(e, t)
            } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : function (e, t) {
                let n = t.data || {}, r = "value" in t && !(t_.call(n, "hProperties") || t_.call(n, "hChildren")) ? {
                    type: "text",
                    value: t.value
                } : {type: "element", tagName: "div", properties: {}, children: tN(e, t)};
                return e.patch(t, r), e.applyData(t, r)
            }(e, t)
        }

        function tN(e, t) {
            let n = [];
            if ("children" in t) {
                let r = t.children, i = -1;
                for (; ++i < r.length;) {
                    let a = ty(e, r[i], t);
                    if (a) {
                        if (i && "break" === r[i - 1].type && (Array.isArray(a) || "text" !== a.type || (a.value = a.value.replace(/^\s+/, "")), !Array.isArray(a) && "element" === a.type)) {
                            let e = a.children[0];
                            e && "text" === e.type && (e.value = e.value.replace(/^\s+/, ""))
                        }
                        Array.isArray(a) ? n.push(...a) : n.push(a)
                    }
                }
            }
            return n
        }

        function tk(e, t) {
            let n = [], r = -1;
            for (t && n.push({type: "text", value: "\n"}); ++r < e.length;) r && n.push({
                type: "text",
                value: "\n"
            }), n.push(e[r]);
            return t && e.length > 0 && n.push({type: "text", value: "\n"}), n
        }

        function tC(e, t) {
            let n = function (e, t) {
                let n = t || {}, r = n.allowDangerousHtml || !1, i = {};
                return o.dangerous = r, o.clobberPrefix = void 0 === n.clobberPrefix || null === n.clobberPrefix ? "user-content-" : n.clobberPrefix, o.footnoteLabel = n.footnoteLabel || "Footnotes", o.footnoteLabelTagName = n.footnoteLabelTagName || "h2", o.footnoteLabelProperties = n.footnoteLabelProperties || {className: ["sr-only"]}, o.footnoteBackLabel = n.footnoteBackLabel || "Back to content", o.unknownHandler = n.unknownHandler, o.passThrough = n.passThrough, o.handlers = {...tE, ...n.handlers}, o.definition = function (e) {
                    let t = Object.create(null);
                    if (!e || !e.type) throw Error("mdast-util-definitions expected node");
                    return ts(e, "definition", e => {
                        let n = tp(e.identifier);
                        n && !td.call(t, n) && (t[n] = e)
                    }), function (e) {
                        let n = tp(e);
                        return n && td.call(t, n) ? t[n] : null
                    }
                }(e), o.footnoteById = i, o.footnoteOrder = [], o.footnoteCounts = {}, o.patch = tb, o.applyData = tA, o.one = function (e, t) {
                    return ty(o, e, t)
                }, o.all = function (e) {
                    return tN(o, e)
                }, o.wrap = tk, o.augment = a, ts(e, "footnoteDefinition", e => {
                    let t = String(e.identifier).toUpperCase();
                    t_.call(i, t) || (i[t] = e)
                }), o;

                function a(e, t) {
                    if (e && "data" in e && e.data) {
                        let n = e.data;
                        n.hName && ("element" !== t.type && (t = {
                            type: "element",
                            tagName: "",
                            properties: {},
                            children: []
                        }), t.tagName = n.hName), "element" === t.type && n.hProperties && (t.properties = {...t.properties, ...n.hProperties}), "children" in t && t.children && n.hChildren && (t.children = n.hChildren)
                    }
                    if (e) {
                        let n = "type" in e ? e : {position: e};
                        !n || !n.position || !n.position.start || !n.position.start.line || !n.position.start.column || !n.position.end || !n.position.end.line || !n.position.end.column || (t.position = {
                            start: tl(n),
                            end: tc(n)
                        })
                    }
                    return t
                }

                function o(e, t, n, r) {
                    return Array.isArray(n) && (r = n, n = {}), a(e, {
                        type: "element",
                        tagName: t,
                        properties: n || {},
                        children: r || []
                    })
                }
            }(e, t), r = n.one(e, null), i = function (e) {
                let t = [], n = -1;
                for (; ++n < e.footnoteOrder.length;) {
                    let r = e.footnoteById[e.footnoteOrder[n]];
                    if (!r) continue;
                    let i = e.all(r), a = String(r.identifier).toUpperCase(), o = tn(a.toLowerCase()), s = 0, l = [];
                    for (; ++s <= e.footnoteCounts[a];) {
                        let t = {
                            type: "element",
                            tagName: "a",
                            properties: {
                                href: "#" + e.clobberPrefix + "fnref-" + o + (s > 1 ? "-" + s : ""),
                                dataFootnoteBackref: !0,
                                className: ["data-footnote-backref"],
                                ariaLabel: e.footnoteBackLabel
                            },
                            children: [{type: "text", value: "↩"}]
                        };
                        s > 1 && t.children.push({
                            type: "element",
                            tagName: "sup",
                            children: [{type: "text", value: String(s)}]
                        }), l.length > 0 && l.push({type: "text", value: " "}), l.push(t)
                    }
                    let c = i[i.length - 1];
                    if (c && "element" === c.type && "p" === c.tagName) {
                        let e = c.children[c.children.length - 1];
                        e && "text" === e.type ? e.value += " " : c.children.push({
                            type: "text",
                            value: " "
                        }), c.children.push(...l)
                    } else i.push(...l);
                    let u = {
                        type: "element",
                        tagName: "li",
                        properties: {id: e.clobberPrefix + "fn-" + o},
                        children: e.wrap(i, !0)
                    };
                    e.patch(r, u), t.push(u)
                }
                if (0 !== t.length) return {
                    type: "element",
                    tagName: "section",
                    properties: {dataFootnotes: !0, className: ["footnotes"]},
                    children: [{
                        type: "element",
                        tagName: e.footnoteLabelTagName,
                        properties: {...JSON.parse(JSON.stringify(e.footnoteLabelProperties)), id: "footnote-label"},
                        children: [{type: "text", value: e.footnoteLabel}]
                    }, {type: "text", value: "\n"}, {
                        type: "element",
                        tagName: "ol",
                        properties: {},
                        children: e.wrap(t, !0)
                    }, {type: "text", value: "\n"}]
                }
            }(n);
            return i && r.children.push({type: "text", value: "\n"}, i), Array.isArray(r) ? {
                type: "root",
                children: r
            } : r
        }

        var tS = function (e, t) {
            var n;
            return e && "run" in e ? (n, r, i) => {
                e.run(tC(n, t), r, e => {
                    i(e)
                })
            } : (n = e || t, e => tC(e, n))
        }, tO = n(9497);

        class tx {
            constructor(e, t, n) {
                this.property = e, this.normal = t, n && (this.space = n)
            }
        }

        function tv(e, t) {
            let n = {}, r = {}, i = -1;
            for (; ++i < e.length;) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
            return new tx(n, r, t)
        }

        function tI(e) {
            return e.toLowerCase()
        }

        tx.prototype.property = {}, tx.prototype.normal = {}, tx.prototype.space = null;

        class tw {
            constructor(e, t) {
                this.property = e, this.attribute = t
            }
        }

        tw.prototype.space = null, tw.prototype.boolean = !1, tw.prototype.booleanish = !1, tw.prototype.overloadedBoolean = !1, tw.prototype.number = !1, tw.prototype.commaSeparated = !1, tw.prototype.spaceSeparated = !1, tw.prototype.commaOrSpaceSeparated = !1, tw.prototype.mustUseProperty = !1, tw.prototype.defined = !1;
        let tR = 0, tM = tU(), tL = tU(), tD = tU(), tP = tU(), tF = tU(), tH = tU(), tB = tU();

        function tU() {
            return 2 ** ++tR
        }

        let tK = Object.keys(i);

        class tG extends tw {
            constructor(e, t, n, r) {
                var a, o, s, l;
                let c = -1;
                if (super(e, t), a = this, r && (a.space = r), "number" == typeof n) for (; ++c < tK.length;) {
                    let e = tK[c];
                    o = this, s = tK[c], (l = (n & i[e]) === i[e]) && (o[s] = l)
                }
            }
        }

        tG.prototype.defined = !0;
        let tz = {}.hasOwnProperty;

        function tj(e) {
            let t;
            let n = {}, r = {};
            for (t in e.properties) if (tz.call(e.properties, t)) {
                let i = e.properties[t], a = new tG(t, e.transform(e.attributes || {}, t), i, e.space);
                e.mustUseProperty && e.mustUseProperty.includes(t) && (a.mustUseProperty = !0), n[t] = a, r[tI(t)] = t, r[tI(a.attribute)] = t
            }
            return new tx(n, r, e.space)
        }

        let t$ = tj({
            space: "xlink",
            transform: (e, t) => "xlink:" + t.slice(5).toLowerCase(),
            properties: {
                xLinkActuate: null,
                xLinkArcRole: null,
                xLinkHref: null,
                xLinkRole: null,
                xLinkShow: null,
                xLinkTitle: null,
                xLinkType: null
            }
        }), tq = tj({
            space: "xml",
            transform: (e, t) => "xml:" + t.slice(3).toLowerCase(),
            properties: {xmlLang: null, xmlBase: null, xmlSpace: null}
        });

        function tW(e, t) {
            return t in e ? e[t] : t
        }

        function tY(e, t) {
            return tW(e, t.toLowerCase())
        }

        let tQ = tj({
            space: "xmlns",
            attributes: {xmlnsxlink: "xmlns:xlink"},
            transform: tY,
            properties: {xmlns: null, xmlnsXLink: null}
        }), tV = tj({
            transform: (e, t) => "role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
            properties: {
                ariaActiveDescendant: null,
                ariaAtomic: tL,
                ariaAutoComplete: null,
                ariaBusy: tL,
                ariaChecked: tL,
                ariaColCount: tP,
                ariaColIndex: tP,
                ariaColSpan: tP,
                ariaControls: tF,
                ariaCurrent: null,
                ariaDescribedBy: tF,
                ariaDetails: null,
                ariaDisabled: tL,
                ariaDropEffect: tF,
                ariaErrorMessage: null,
                ariaExpanded: tL,
                ariaFlowTo: tF,
                ariaGrabbed: tL,
                ariaHasPopup: null,
                ariaHidden: tL,
                ariaInvalid: null,
                ariaKeyShortcuts: null,
                ariaLabel: null,
                ariaLabelledBy: tF,
                ariaLevel: tP,
                ariaLive: null,
                ariaModal: tL,
                ariaMultiLine: tL,
                ariaMultiSelectable: tL,
                ariaOrientation: null,
                ariaOwns: tF,
                ariaPlaceholder: null,
                ariaPosInSet: tP,
                ariaPressed: tL,
                ariaReadOnly: tL,
                ariaRelevant: null,
                ariaRequired: tL,
                ariaRoleDescription: tF,
                ariaRowCount: tP,
                ariaRowIndex: tP,
                ariaRowSpan: tP,
                ariaSelected: tL,
                ariaSetSize: tP,
                ariaSort: null,
                ariaValueMax: tP,
                ariaValueMin: tP,
                ariaValueNow: tP,
                ariaValueText: null,
                role: null
            }
        }), tX = tj({
            space: "html",
            attributes: {acceptcharset: "accept-charset", classname: "class", htmlfor: "for", httpequiv: "http-equiv"},
            transform: tY,
            mustUseProperty: ["checked", "multiple", "muted", "selected"],
            properties: {
                abbr: null,
                accept: tH,
                acceptCharset: tF,
                accessKey: tF,
                action: null,
                allow: null,
                allowFullScreen: tM,
                allowPaymentRequest: tM,
                allowUserMedia: tM,
                alt: null,
                as: null,
                async: tM,
                autoCapitalize: null,
                autoComplete: tF,
                autoFocus: tM,
                autoPlay: tM,
                capture: tM,
                charSet: null,
                checked: tM,
                cite: null,
                className: tF,
                cols: tP,
                colSpan: null,
                content: null,
                contentEditable: tL,
                controls: tM,
                controlsList: tF,
                coords: tP | tH,
                crossOrigin: null,
                data: null,
                dateTime: null,
                decoding: null,
                default: tM,
                defer: tM,
                dir: null,
                dirName: null,
                disabled: tM,
                download: tD,
                draggable: tL,
                encType: null,
                enterKeyHint: null,
                form: null,
                formAction: null,
                formEncType: null,
                formMethod: null,
                formNoValidate: tM,
                formTarget: null,
                headers: tF,
                height: tP,
                hidden: tM,
                high: tP,
                href: null,
                hrefLang: null,
                htmlFor: tF,
                httpEquiv: tF,
                id: null,
                imageSizes: null,
                imageSrcSet: null,
                inputMode: null,
                integrity: null,
                is: null,
                isMap: tM,
                itemId: null,
                itemProp: tF,
                itemRef: tF,
                itemScope: tM,
                itemType: tF,
                kind: null,
                label: null,
                lang: null,
                language: null,
                list: null,
                loading: null,
                loop: tM,
                low: tP,
                manifest: null,
                max: null,
                maxLength: tP,
                media: null,
                method: null,
                min: null,
                minLength: tP,
                multiple: tM,
                muted: tM,
                name: null,
                nonce: null,
                noModule: tM,
                noValidate: tM,
                onAbort: null,
                onAfterPrint: null,
                onAuxClick: null,
                onBeforeMatch: null,
                onBeforePrint: null,
                onBeforeUnload: null,
                onBlur: null,
                onCancel: null,
                onCanPlay: null,
                onCanPlayThrough: null,
                onChange: null,
                onClick: null,
                onClose: null,
                onContextLost: null,
                onContextMenu: null,
                onContextRestored: null,
                onCopy: null,
                onCueChange: null,
                onCut: null,
                onDblClick: null,
                onDrag: null,
                onDragEnd: null,
                onDragEnter: null,
                onDragExit: null,
                onDragLeave: null,
                onDragOver: null,
                onDragStart: null,
                onDrop: null,
                onDurationChange: null,
                onEmptied: null,
                onEnded: null,
                onError: null,
                onFocus: null,
                onFormData: null,
                onHashChange: null,
                onInput: null,
                onInvalid: null,
                onKeyDown: null,
                onKeyPress: null,
                onKeyUp: null,
                onLanguageChange: null,
                onLoad: null,
                onLoadedData: null,
                onLoadedMetadata: null,
                onLoadEnd: null,
                onLoadStart: null,
                onMessage: null,
                onMessageError: null,
                onMouseDown: null,
                onMouseEnter: null,
                onMouseLeave: null,
                onMouseMove: null,
                onMouseOut: null,
                onMouseOver: null,
                onMouseUp: null,
                onOffline: null,
                onOnline: null,
                onPageHide: null,
                onPageShow: null,
                onPaste: null,
                onPause: null,
                onPlay: null,
                onPlaying: null,
                onPopState: null,
                onProgress: null,
                onRateChange: null,
                onRejectionHandled: null,
                onReset: null,
                onResize: null,
                onScroll: null,
                onScrollEnd: null,
                onSecurityPolicyViolation: null,
                onSeeked: null,
                onSeeking: null,
                onSelect: null,
                onSlotChange: null,
                onStalled: null,
                onStorage: null,
                onSubmit: null,
                onSuspend: null,
                onTimeUpdate: null,
                onToggle: null,
                onUnhandledRejection: null,
                onUnload: null,
                onVolumeChange: null,
                onWaiting: null,
                onWheel: null,
                open: tM,
                optimum: tP,
                pattern: null,
                ping: tF,
                placeholder: null,
                playsInline: tM,
                poster: null,
                preload: null,
                readOnly: tM,
                referrerPolicy: null,
                rel: tF,
                required: tM,
                reversed: tM,
                rows: tP,
                rowSpan: tP,
                sandbox: tF,
                scope: null,
                scoped: tM,
                seamless: tM,
                selected: tM,
                shape: null,
                size: tP,
                sizes: null,
                slot: null,
                span: tP,
                spellCheck: tL,
                src: null,
                srcDoc: null,
                srcLang: null,
                srcSet: null,
                start: tP,
                step: null,
                style: null,
                tabIndex: tP,
                target: null,
                title: null,
                translate: null,
                type: null,
                typeMustMatch: tM,
                useMap: null,
                value: tL,
                width: tP,
                wrap: null,
                align: null,
                aLink: null,
                archive: tF,
                axis: null,
                background: null,
                bgColor: null,
                border: tP,
                borderColor: null,
                bottomMargin: tP,
                cellPadding: null,
                cellSpacing: null,
                char: null,
                charOff: null,
                classId: null,
                clear: null,
                code: null,
                codeBase: null,
                codeType: null,
                color: null,
                compact: tM,
                declare: tM,
                event: null,
                face: null,
                frame: null,
                frameBorder: null,
                hSpace: tP,
                leftMargin: tP,
                link: null,
                longDesc: null,
                lowSrc: null,
                marginHeight: tP,
                marginWidth: tP,
                noResize: tM,
                noHref: tM,
                noShade: tM,
                noWrap: tM,
                object: null,
                profile: null,
                prompt: null,
                rev: null,
                rightMargin: tP,
                rules: null,
                scheme: null,
                scrolling: tL,
                standby: null,
                summary: null,
                text: null,
                topMargin: tP,
                valueType: null,
                version: null,
                vAlign: null,
                vLink: null,
                vSpace: tP,
                allowTransparency: null,
                autoCorrect: null,
                autoSave: null,
                disablePictureInPicture: tM,
                disableRemotePlayback: tM,
                prefix: null,
                property: null,
                results: tP,
                security: null,
                unselectable: null
            }
        }), tZ = tj({
            space: "svg", attributes: {
                accentHeight: "accent-height",
                alignmentBaseline: "alignment-baseline",
                arabicForm: "arabic-form",
                baselineShift: "baseline-shift",
                capHeight: "cap-height",
                className: "class",
                clipPath: "clip-path",
                clipRule: "clip-rule",
                colorInterpolation: "color-interpolation",
                colorInterpolationFilters: "color-interpolation-filters",
                colorProfile: "color-profile",
                colorRendering: "color-rendering",
                crossOrigin: "crossorigin",
                dataType: "datatype",
                dominantBaseline: "dominant-baseline",
                enableBackground: "enable-background",
                fillOpacity: "fill-opacity",
                fillRule: "fill-rule",
                floodColor: "flood-color",
                floodOpacity: "flood-opacity",
                fontFamily: "font-family",
                fontSize: "font-size",
                fontSizeAdjust: "font-size-adjust",
                fontStretch: "font-stretch",
                fontStyle: "font-style",
                fontVariant: "font-variant",
                fontWeight: "font-weight",
                glyphName: "glyph-name",
                glyphOrientationHorizontal: "glyph-orientation-horizontal",
                glyphOrientationVertical: "glyph-orientation-vertical",
                hrefLang: "hreflang",
                horizAdvX: "horiz-adv-x",
                horizOriginX: "horiz-origin-x",
                horizOriginY: "horiz-origin-y",
                imageRendering: "image-rendering",
                letterSpacing: "letter-spacing",
                lightingColor: "lighting-color",
                markerEnd: "marker-end",
                markerMid: "marker-mid",
                markerStart: "marker-start",
                navDown: "nav-down",
                navDownLeft: "nav-down-left",
                navDownRight: "nav-down-right",
                navLeft: "nav-left",
                navNext: "nav-next",
                navPrev: "nav-prev",
                navRight: "nav-right",
                navUp: "nav-up",
                navUpLeft: "nav-up-left",
                navUpRight: "nav-up-right",
                onAbort: "onabort",
                onActivate: "onactivate",
                onAfterPrint: "onafterprint",
                onBeforePrint: "onbeforeprint",
                onBegin: "onbegin",
                onCancel: "oncancel",
                onCanPlay: "oncanplay",
                onCanPlayThrough: "oncanplaythrough",
                onChange: "onchange",
                onClick: "onclick",
                onClose: "onclose",
                onCopy: "oncopy",
                onCueChange: "oncuechange",
                onCut: "oncut",
                onDblClick: "ondblclick",
                onDrag: "ondrag",
                onDragEnd: "ondragend",
                onDragEnter: "ondragenter",
                onDragExit: "ondragexit",
                onDragLeave: "ondragleave",
                onDragOver: "ondragover",
                onDragStart: "ondragstart",
                onDrop: "ondrop",
                onDurationChange: "ondurationchange",
                onEmptied: "onemptied",
                onEnd: "onend",
                onEnded: "onended",
                onError: "onerror",
                onFocus: "onfocus",
                onFocusIn: "onfocusin",
                onFocusOut: "onfocusout",
                onHashChange: "onhashchange",
                onInput: "oninput",
                onInvalid: "oninvalid",
                onKeyDown: "onkeydown",
                onKeyPress: "onkeypress",
                onKeyUp: "onkeyup",
                onLoad: "onload",
                onLoadedData: "onloadeddata",
                onLoadedMetadata: "onloadedmetadata",
                onLoadStart: "onloadstart",
                onMessage: "onmessage",
                onMouseDown: "onmousedown",
                onMouseEnter: "onmouseenter",
                onMouseLeave: "onmouseleave",
                onMouseMove: "onmousemove",
                onMouseOut: "onmouseout",
                onMouseOver: "onmouseover",
                onMouseUp: "onmouseup",
                onMouseWheel: "onmousewheel",
                onOffline: "onoffline",
                onOnline: "ononline",
                onPageHide: "onpagehide",
                onPageShow: "onpageshow",
                onPaste: "onpaste",
                onPause: "onpause",
                onPlay: "onplay",
                onPlaying: "onplaying",
                onPopState: "onpopstate",
                onProgress: "onprogress",
                onRateChange: "onratechange",
                onRepeat: "onrepeat",
                onReset: "onreset",
                onResize: "onresize",
                onScroll: "onscroll",
                onSeeked: "onseeked",
                onSeeking: "onseeking",
                onSelect: "onselect",
                onShow: "onshow",
                onStalled: "onstalled",
                onStorage: "onstorage",
                onSubmit: "onsubmit",
                onSuspend: "onsuspend",
                onTimeUpdate: "ontimeupdate",
                onToggle: "ontoggle",
                onUnload: "onunload",
                onVolumeChange: "onvolumechange",
                onWaiting: "onwaiting",
                onZoom: "onzoom",
                overlinePosition: "overline-position",
                overlineThickness: "overline-thickness",
                paintOrder: "paint-order",
                panose1: "panose-1",
                pointerEvents: "pointer-events",
                referrerPolicy: "referrerpolicy",
                renderingIntent: "rendering-intent",
                shapeRendering: "shape-rendering",
                stopColor: "stop-color",
                stopOpacity: "stop-opacity",
                strikethroughPosition: "strikethrough-position",
                strikethroughThickness: "strikethrough-thickness",
                strokeDashArray: "stroke-dasharray",
                strokeDashOffset: "stroke-dashoffset",
                strokeLineCap: "stroke-linecap",
                strokeLineJoin: "stroke-linejoin",
                strokeMiterLimit: "stroke-miterlimit",
                strokeOpacity: "stroke-opacity",
                strokeWidth: "stroke-width",
                tabIndex: "tabindex",
                textAnchor: "text-anchor",
                textDecoration: "text-decoration",
                textRendering: "text-rendering",
                typeOf: "typeof",
                underlinePosition: "underline-position",
                underlineThickness: "underline-thickness",
                unicodeBidi: "unicode-bidi",
                unicodeRange: "unicode-range",
                unitsPerEm: "units-per-em",
                vAlphabetic: "v-alphabetic",
                vHanging: "v-hanging",
                vIdeographic: "v-ideographic",
                vMathematical: "v-mathematical",
                vectorEffect: "vector-effect",
                vertAdvY: "vert-adv-y",
                vertOriginX: "vert-origin-x",
                vertOriginY: "vert-origin-y",
                wordSpacing: "word-spacing",
                writingMode: "writing-mode",
                xHeight: "x-height",
                playbackOrder: "playbackorder",
                timelineBegin: "timelinebegin"
            }, transform: tW, properties: {
                about: tB,
                accentHeight: tP,
                accumulate: null,
                additive: null,
                alignmentBaseline: null,
                alphabetic: tP,
                amplitude: tP,
                arabicForm: null,
                ascent: tP,
                attributeName: null,
                attributeType: null,
                azimuth: tP,
                bandwidth: null,
                baselineShift: null,
                baseFrequency: null,
                baseProfile: null,
                bbox: null,
                begin: null,
                bias: tP,
                by: null,
                calcMode: null,
                capHeight: tP,
                className: tF,
                clip: null,
                clipPath: null,
                clipPathUnits: null,
                clipRule: null,
                color: null,
                colorInterpolation: null,
                colorInterpolationFilters: null,
                colorProfile: null,
                colorRendering: null,
                content: null,
                contentScriptType: null,
                contentStyleType: null,
                crossOrigin: null,
                cursor: null,
                cx: null,
                cy: null,
                d: null,
                dataType: null,
                defaultAction: null,
                descent: tP,
                diffuseConstant: tP,
                direction: null,
                display: null,
                dur: null,
                divisor: tP,
                dominantBaseline: null,
                download: tM,
                dx: null,
                dy: null,
                edgeMode: null,
                editable: null,
                elevation: tP,
                enableBackground: null,
                end: null,
                event: null,
                exponent: tP,
                externalResourcesRequired: null,
                fill: null,
                fillOpacity: tP,
                fillRule: null,
                filter: null,
                filterRes: null,
                filterUnits: null,
                floodColor: null,
                floodOpacity: null,
                focusable: null,
                focusHighlight: null,
                fontFamily: null,
                fontSize: null,
                fontSizeAdjust: null,
                fontStretch: null,
                fontStyle: null,
                fontVariant: null,
                fontWeight: null,
                format: null,
                fr: null,
                from: null,
                fx: null,
                fy: null,
                g1: tH,
                g2: tH,
                glyphName: tH,
                glyphOrientationHorizontal: null,
                glyphOrientationVertical: null,
                glyphRef: null,
                gradientTransform: null,
                gradientUnits: null,
                handler: null,
                hanging: tP,
                hatchContentUnits: null,
                hatchUnits: null,
                height: null,
                href: null,
                hrefLang: null,
                horizAdvX: tP,
                horizOriginX: tP,
                horizOriginY: tP,
                id: null,
                ideographic: tP,
                imageRendering: null,
                initialVisibility: null,
                in: null,
                in2: null,
                intercept: tP,
                k: tP,
                k1: tP,
                k2: tP,
                k3: tP,
                k4: tP,
                kernelMatrix: tB,
                kernelUnitLength: null,
                keyPoints: null,
                keySplines: null,
                keyTimes: null,
                kerning: null,
                lang: null,
                lengthAdjust: null,
                letterSpacing: null,
                lightingColor: null,
                limitingConeAngle: tP,
                local: null,
                markerEnd: null,
                markerMid: null,
                markerStart: null,
                markerHeight: null,
                markerUnits: null,
                markerWidth: null,
                mask: null,
                maskContentUnits: null,
                maskUnits: null,
                mathematical: null,
                max: null,
                media: null,
                mediaCharacterEncoding: null,
                mediaContentEncodings: null,
                mediaSize: tP,
                mediaTime: null,
                method: null,
                min: null,
                mode: null,
                name: null,
                navDown: null,
                navDownLeft: null,
                navDownRight: null,
                navLeft: null,
                navNext: null,
                navPrev: null,
                navRight: null,
                navUp: null,
                navUpLeft: null,
                navUpRight: null,
                numOctaves: null,
                observer: null,
                offset: null,
                onAbort: null,
                onActivate: null,
                onAfterPrint: null,
                onBeforePrint: null,
                onBegin: null,
                onCancel: null,
                onCanPlay: null,
                onCanPlayThrough: null,
                onChange: null,
                onClick: null,
                onClose: null,
                onCopy: null,
                onCueChange: null,
                onCut: null,
                onDblClick: null,
                onDrag: null,
                onDragEnd: null,
                onDragEnter: null,
                onDragExit: null,
                onDragLeave: null,
                onDragOver: null,
                onDragStart: null,
                onDrop: null,
                onDurationChange: null,
                onEmptied: null,
                onEnd: null,
                onEnded: null,
                onError: null,
                onFocus: null,
                onFocusIn: null,
                onFocusOut: null,
                onHashChange: null,
                onInput: null,
                onInvalid: null,
                onKeyDown: null,
                onKeyPress: null,
                onKeyUp: null,
                onLoad: null,
                onLoadedData: null,
                onLoadedMetadata: null,
                onLoadStart: null,
                onMessage: null,
                onMouseDown: null,
                onMouseEnter: null,
                onMouseLeave: null,
                onMouseMove: null,
                onMouseOut: null,
                onMouseOver: null,
                onMouseUp: null,
                onMouseWheel: null,
                onOffline: null,
                onOnline: null,
                onPageHide: null,
                onPageShow: null,
                onPaste: null,
                onPause: null,
                onPlay: null,
                onPlaying: null,
                onPopState: null,
                onProgress: null,
                onRateChange: null,
                onRepeat: null,
                onReset: null,
                onResize: null,
                onScroll: null,
                onSeeked: null,
                onSeeking: null,
                onSelect: null,
                onShow: null,
                onStalled: null,
                onStorage: null,
                onSubmit: null,
                onSuspend: null,
                onTimeUpdate: null,
                onToggle: null,
                onUnload: null,
                onVolumeChange: null,
                onWaiting: null,
                onZoom: null,
                opacity: null,
                operator: null,
                order: null,
                orient: null,
                orientation: null,
                origin: null,
                overflow: null,
                overlay: null,
                overlinePosition: tP,
                overlineThickness: tP,
                paintOrder: null,
                panose1: null,
                path: null,
                pathLength: tP,
                patternContentUnits: null,
                patternTransform: null,
                patternUnits: null,
                phase: null,
                ping: tF,
                pitch: null,
                playbackOrder: null,
                pointerEvents: null,
                points: null,
                pointsAtX: tP,
                pointsAtY: tP,
                pointsAtZ: tP,
                preserveAlpha: null,
                preserveAspectRatio: null,
                primitiveUnits: null,
                propagate: null,
                property: tB,
                r: null,
                radius: null,
                referrerPolicy: null,
                refX: null,
                refY: null,
                rel: tB,
                rev: tB,
                renderingIntent: null,
                repeatCount: null,
                repeatDur: null,
                requiredExtensions: tB,
                requiredFeatures: tB,
                requiredFonts: tB,
                requiredFormats: tB,
                resource: null,
                restart: null,
                result: null,
                rotate: null,
                rx: null,
                ry: null,
                scale: null,
                seed: null,
                shapeRendering: null,
                side: null,
                slope: null,
                snapshotTime: null,
                specularConstant: tP,
                specularExponent: tP,
                spreadMethod: null,
                spacing: null,
                startOffset: null,
                stdDeviation: null,
                stemh: null,
                stemv: null,
                stitchTiles: null,
                stopColor: null,
                stopOpacity: null,
                strikethroughPosition: tP,
                strikethroughThickness: tP,
                string: null,
                stroke: null,
                strokeDashArray: tB,
                strokeDashOffset: null,
                strokeLineCap: null,
                strokeLineJoin: null,
                strokeMiterLimit: tP,
                strokeOpacity: tP,
                strokeWidth: null,
                style: null,
                surfaceScale: tP,
                syncBehavior: null,
                syncBehaviorDefault: null,
                syncMaster: null,
                syncTolerance: null,
                syncToleranceDefault: null,
                systemLanguage: tB,
                tabIndex: tP,
                tableValues: null,
                target: null,
                targetX: tP,
                targetY: tP,
                textAnchor: null,
                textDecoration: null,
                textRendering: null,
                textLength: null,
                timelineBegin: null,
                title: null,
                transformBehavior: null,
                type: null,
                typeOf: tB,
                to: null,
                transform: null,
                u1: null,
                u2: null,
                underlinePosition: tP,
                underlineThickness: tP,
                unicode: null,
                unicodeBidi: null,
                unicodeRange: null,
                unitsPerEm: tP,
                values: null,
                vAlphabetic: tP,
                vMathematical: tP,
                vectorEffect: null,
                vHanging: tP,
                vIdeographic: tP,
                version: null,
                vertAdvY: tP,
                vertOriginX: tP,
                vertOriginY: tP,
                viewBox: null,
                viewTarget: null,
                visibility: null,
                width: null,
                widths: null,
                wordSpacing: null,
                writingMode: null,
                x: null,
                x1: null,
                x2: null,
                xChannelSelector: null,
                xHeight: tP,
                y: null,
                y1: null,
                y2: null,
                yChannelSelector: null,
                z: null,
                zoomAndPan: null
            }
        }), tJ = tv([tq, t$, tQ, tV, tX], "html"), t1 = tv([tq, t$, tQ, tV, tZ], "svg");

        function t0(e) {
            if (e.allowedElements && e.disallowedElements) throw TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
            if (e.allowedElements || e.disallowedElements || e.allowElement) return t => {
                ts(t, "element", (t, n, r) => {
                    let i;
                    if (e.allowedElements ? i = !e.allowedElements.includes(t.tagName) : e.disallowedElements && (i = e.disallowedElements.includes(t.tagName)), !i && e.allowElement && "number" == typeof n && (i = !e.allowElement(t, n, r)), i && "number" == typeof n) return e.unwrapDisallowed && t.children ? r.children.splice(n, 1, ...t.children) : r.children.splice(n, 1), n
                })
            }
        }

        var t9 = n(9605);
        let t5 = /^data[-\w.:]+$/i, t4 = /-[a-z]/g, t8 = /[A-Z]/g;

        function t2(e, t) {
            let n = tI(t), r = t, i = tw;
            if (n in e.normal) return e.property[e.normal[n]];
            if (n.length > 4 && "data" === n.slice(0, 4) && t5.test(t)) {
                if ("-" === t.charAt(4)) {
                    let e = t.slice(5).replace(t4, t7);
                    r = "data" + e.charAt(0).toUpperCase() + e.slice(1)
                } else {
                    let e = t.slice(4);
                    if (!t4.test(e)) {
                        let n = e.replace(t8, t6);
                        "-" !== n.charAt(0) && (n = "-" + n), t = "data" + n
                    }
                }
                i = tG
            }
            return new i(r, t)
        }

        function t6(e) {
            return "-" + e.toLowerCase()
        }

        function t7(e) {
            return e.charAt(1).toUpperCase()
        }

        let t3 = {
            classId: "classID",
            dataType: "datatype",
            itemId: "itemID",
            strokeDashArray: "strokeDasharray",
            strokeDashOffset: "strokeDashoffset",
            strokeLineCap: "strokeLinecap",
            strokeLineJoin: "strokeLinejoin",
            strokeMiterLimit: "strokeMiterlimit",
            typeOf: "typeof",
            xLinkActuate: "xlinkActuate",
            xLinkArcRole: "xlinkArcrole",
            xLinkHref: "xlinkHref",
            xLinkRole: "xlinkRole",
            xLinkShow: "xlinkShow",
            xLinkTitle: "xlinkTitle",
            xLinkType: "xlinkType",
            xmlnsXLink: "xmlnsXlink"
        };

        function ne(e) {
            let t = String(e || "").trim();
            return t ? t.split(/[ \t\n\r\f]+/g) : []
        }

        function nt(e) {
            let t = [], n = String(e || ""), r = n.indexOf(","), i = 0, a = !1;
            for (; !a;) {
                -1 === r && (r = n.length, a = !0);
                let e = n.slice(i, r).trim();
                (e || !a) && t.push(e), i = r + 1, r = n.indexOf(",", i)
            }
            return t
        }

        var nn = n(2093);
        let nr = ["http", "https", "mailto", "tel"];

        function ni(e) {
            let t = (e || "").trim(), n = t.charAt(0);
            if ("#" === n || "/" === n) return t;
            let r = t.indexOf(":");
            if (-1 === r) return t;
            let i = -1;
            for (; ++i < nr.length;) {
                let e = nr[i];
                if (r === e.length && t.slice(0, e.length).toLowerCase() === e) return t
            }
            return -1 !== (i = t.indexOf("?")) && r > i || -1 !== (i = t.indexOf("#")) && r > i ? t : "javascript:void(0)"
        }

        let na = {}.hasOwnProperty, no = new Set(["table", "thead", "tbody", "tfoot", "tr"]);

        function ns(e, t) {
            let n = -1, r = 0;
            for (; ++n < e.children.length && e.children[n] !== t;) "element" === e.children[n].type && r++;
            return r
        }

        function nl(e, t) {
            return t.toUpperCase()
        }

        let nc = {}.hasOwnProperty, nu = {
            plugins: {to: "remarkPlugins", id: "change-plugins-to-remarkplugins"},
            renderers: {to: "components", id: "change-renderers-to-components"},
            astPlugins: {id: "remove-buggy-html-in-markdown-parser"},
            allowDangerousHtml: {id: "remove-buggy-html-in-markdown-parser"},
            escapeHtml: {id: "remove-buggy-html-in-markdown-parser"},
            source: {to: "children", id: "change-source-to-children"},
            allowNode: {to: "allowElement", id: "replace-allownode-allowedtypes-and-disallowedtypes"},
            allowedTypes: {to: "allowedElements", id: "replace-allownode-allowedtypes-and-disallowedtypes"},
            disallowedTypes: {to: "disallowedElements", id: "replace-allownode-allowedtypes-and-disallowedtypes"},
            includeNodeIndex: {to: "includeElementIndex", id: "change-includenodeindex-to-includeelementindex"}
        };

        function nd(e) {
            for (let t in nu) if (nc.call(nu, t) && nc.call(e, t)) {
                let e = nu[t];
                console.warn(`[react-markdown] Warning: please ${e.to ? `use \`${e.to}\` instead of` : "remove"} \`${t}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${e.id}> for more info)`), delete nu[t]
            }
            let t = C().use(tt).use(e.remarkPlugins || []).use(tS, {
                ...e.remarkRehypeOptions,
                allowDangerousHtml: !0
            }).use(e.rehypePlugins || []).use(t0, e), n = new T;
            "string" == typeof e.children ? n.value = e.children : void 0 !== e.children && null !== e.children && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
            let r = t.runSync(t.parse(n), n);
            if ("root" !== r.type) throw TypeError("Expected a `root` node");
            let i = o.createElement(o.Fragment, {}, function e(t, n) {
                let r;
                let i = [], a = -1;
                for (; ++a < n.children.length;) "element" === (r = n.children[a]).type ? i.push(function (t, n, r, i) {
                    let a;
                    let s = t.options, l = void 0 === s.transformLinkUri ? ni : s.transformLinkUri, c = t.schema,
                        u = n.tagName, d = {}, p = c;
                    if ("html" === c.space && "svg" === u && (p = t1, t.schema = p), n.properties) for (a in n.properties) na.call(n.properties, a) && function (e, t, n, r) {
                        let i = t2(r.schema, t), a = n;
                        null != a && a == a && (Array.isArray(a) && (a = i.commaSeparated ? function (e, t) {
                            let n = {}, r = "" === e[e.length - 1] ? [...e, ""] : e;
                            return r.join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " ")).trim()
                        }(a) : a.join(" ").trim()), "style" === i.property && "string" == typeof a && (a = function (e) {
                            let t = {};
                            try {
                                nn(e, function (e, n) {
                                    let r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
                                    t[r.replace(/-([a-z])/g, nl)] = n
                                })
                            } catch {
                            }
                            return t
                        }(a)), i.space && i.property ? e[na.call(t3, i.property) ? t3[i.property] : i.property] = a : i.attribute && (e[i.attribute] = a))
                    }(d, a, n.properties[a], t);
                    ("ol" === u || "ul" === u) && t.listDepth++;
                    let h = e(t, n);
                    ("ol" === u || "ul" === u) && t.listDepth--, t.schema = c;
                    let m = n.position || {
                            start: {line: null, column: null, offset: null},
                            end: {line: null, column: null, offset: null}
                        }, f = s.components && na.call(s.components, u) ? s.components[u] : u,
                        g = "string" == typeof f || f === o.Fragment;
                    if (!t9.isValidElementType(f)) throw TypeError(`Component for name \`${u}\` not defined or is not renderable`);
                    if (d.key = [u, m.start.line, m.start.column, r].join("-"), "a" === u && s.linkTarget && (d.target = "function" == typeof s.linkTarget ? s.linkTarget(String(d.href || ""), n.children, "string" == typeof d.title ? d.title : null) : s.linkTarget), "a" === u && l && (d.href = l(String(d.href || ""), n.children, "string" == typeof d.title ? d.title : null)), g || "code" !== u || "element" !== i.type || "pre" === i.tagName || (d.inline = !0), g || "h1" !== u && "h2" !== u && "h3" !== u && "h4" !== u && "h5" !== u && "h6" !== u || (d.level = Number.parseInt(u.charAt(1), 10)), "img" === u && s.transformImageUri && (d.src = s.transformImageUri(String(d.src || ""), String(d.alt || ""), "string" == typeof d.title ? d.title : null)), !g && "li" === u && "element" === i.type) {
                        let e = function (e) {
                            let t = -1;
                            for (; ++t < e.children.length;) {
                                let n = e.children[t];
                                if ("element" === n.type && "input" === n.tagName) return n
                            }
                            return null
                        }(n);
                        d.checked = e && e.properties ? !!e.properties.checked : null, d.index = ns(i, n), d.ordered = "ol" === i.tagName
                    }
                    return g || "ol" !== u && "ul" !== u || (d.ordered = "ol" === u, d.depth = t.listDepth), "td" !== u && "th" !== u || (d.align && (d.style || (d.style = {}), d.style.textAlign = d.align, delete d.align), g || (d.isHeader = "th" === u)), g || "tr" !== u || "element" !== i.type || (d.isHeader = "thead" === i.tagName), s.sourcePos && (d["data-sourcepos"] = [m.start.line, ":", m.start.column, "-", m.end.line, ":", m.end.column].map(String).join("")), !g && s.rawSourcePos && (d.sourcePosition = n.position), !g && s.includeElementIndex && (d.index = ns(i, n), d.siblingCount = ns(i)), g || (d.node = n), h.length > 0 ? o.createElement(f, d, h) : o.createElement(f, d)
                }(t, r, a, n)) : "text" === r.type ? "element" === n.type && no.has(n.tagName) && function (e) {
                    let t = e && "object" == typeof e && "text" === e.type ? e.value || "" : e;
                    return "string" == typeof t && "" === t.replace(/[ \t\n\f\r]/g, "")
                }(r) || i.push(r.value) : "raw" !== r.type || t.options.skipHtml || i.push(r.value);
                return i
            }({options: e, schema: tJ, listDepth: 0}, r));
            return e.className && (i = o.createElement("div", {className: e.className}, i)), i
        }

        nd.propTypes = {
            children: tO.string,
            className: tO.string,
            allowElement: tO.func,
            allowedElements: tO.arrayOf(tO.string),
            disallowedElements: tO.arrayOf(tO.string),
            unwrapDisallowed: tO.bool,
            remarkPlugins: tO.arrayOf(tO.oneOfType([tO.object, tO.func, tO.arrayOf(tO.oneOfType([tO.bool, tO.string, tO.object, tO.func, tO.arrayOf(tO.any)]))])),
            rehypePlugins: tO.arrayOf(tO.oneOfType([tO.object, tO.func, tO.arrayOf(tO.oneOfType([tO.bool, tO.string, tO.object, tO.func, tO.arrayOf(tO.any)]))])),
            sourcePos: tO.bool,
            rawSourcePos: tO.bool,
            skipHtml: tO.bool,
            includeElementIndex: tO.bool,
            transformLinkUri: tO.oneOfType([tO.func, tO.bool]),
            linkTarget: tO.oneOfType([tO.func, tO.string]),
            transformImageUri: tO.func,
            components: tO.object
        }, n(2790);
        let np = {
            tokenize: function (e, t, n) {
                let r = this, i = r.events[r.events.length - 1],
                    a = i && "linePrefix" === i[1].type ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
                return function (t) {
                    return e.enter("mathFlow"), e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"), function t(r) {
                        return 36 === r ? (e.consume(r), o++, t) : (e.exit("mathFlowFenceSequence"), o < 2 ? n(r) : J(e, s, "whitespace")(r))
                    }(t)
                };

                function s(t) {
                    return null === t || Y(t) ? l(t) : (e.enter("mathFlowFenceMeta"), e.enter("chunkString", {contentType: "string"}), function t(r) {
                        return null === r || Y(r) ? (e.exit("chunkString"), e.exit("mathFlowFenceMeta"), l(r)) : 36 === r ? n(r) : (e.consume(r), t)
                    }(t))
                }

                function l(n) {
                    return e.exit("mathFlowFence"), r.interrupt ? t(n) : function t(n) {
                        return null === n ? c(n) : Y(n) ? e.attempt(nh, e.attempt({
                            tokenize: u,
                            partial: !0
                        }, c, a ? J(e, t, "linePrefix", a + 1) : t), c)(n) : (e.enter("mathFlowValue"), function n(r) {
                            return null === r || Y(r) ? (e.exit("mathFlowValue"), t(r)) : (e.consume(r), n)
                        }(n))
                    }(n)
                }

                function c(n) {
                    return e.exit("mathFlow"), t(n)
                }

                function u(e, t, n) {
                    let r = 0;
                    return J(e, function (t) {
                        return e.enter("mathFlowFence"), e.enter("mathFlowFenceSequence"), function t(a) {
                            return 36 === a ? (e.consume(a), r++, t) : r < o ? n(a) : (e.exit("mathFlowFenceSequence"), J(e, i, "whitespace")(a))
                        }(t)
                    }, "linePrefix", 4);

                    function i(r) {
                        return null === r || Y(r) ? (e.exit("mathFlowFence"), t(r)) : n(r)
                    }
                }
            }, concrete: !0
        }, nh = {
            tokenize: function (e, t, n) {
                let r = this;
                return function (t) {
                    return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i
                };

                function i(e) {
                    return r.parser.lazy[r.now().line] ? n(e) : t(e)
                }
            }, partial: !0
        };

        function nm(e) {
            let t, n, r = e.length - 4, i = 3;
            if (("lineEnding" === e[3][1].type || "space" === e[i][1].type) && ("lineEnding" === e[r][1].type || "space" === e[r][1].type)) {
                for (t = i; ++t < r;) if ("mathTextData" === e[t][1].type) {
                    e[r][1].type = "mathTextPadding", e[i][1].type = "mathTextPadding", i += 2, r -= 2;
                    break
                }
            }
            for (t = i - 1, r++; ++t <= r;) void 0 === n ? t !== r && "lineEnding" !== e[t][1].type && (n = t) : (t === r || "lineEnding" === e[t][1].type) && (e[n][1].type = "mathTextData", t !== n + 2 && (e[n][1].end = e[t - 1][1].end, e.splice(n + 2, t - n - 2), r -= t - n - 2, t = n + 2), n = void 0);
            return e
        }

        function nf(e) {
            return 36 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
        }

        function ng(e) {
            if (!e._compiled) {
                let t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
                e._compiled = RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g")
            }
            return e._compiled
        }

        function nE(e, t, n) {
            if ("string" == typeof t && (t = [t]), !t || 0 === t.length) return n;
            let r = -1;
            for (; ++r < t.length;) if (e.includes(t[r])) return !0;
            return !1
        }

        function nT(e, t, n) {
            let r = (n.before || "") + (t || "") + (n.after || ""), i = [], a = [], o = {}, s = -1;
            for (; ++s < e.unsafe.length;) {
                var l;
                let t;
                let n = e.unsafe[s];
                if (!nE(l = e.stack, n.inConstruct, !0) || nE(l, n.notInConstruct, !1)) continue;
                let a = ng(n);
                for (; t = a.exec(r);) {
                    let e = "before" in n || !!n.atBreak, r = "after" in n, a = t.index + (e ? t[1].length : 0);
                    i.includes(a) ? (o[a].before && !e && (o[a].before = !1), o[a].after && !r && (o[a].after = !1)) : (i.push(a), o[a] = {
                        before: e,
                        after: r
                    })
                }
            }
            i.sort(n_);
            let c = n.before ? n.before.length : 0, u = r.length - (n.after ? n.after.length : 0);
            for (s = -1; ++s < i.length;) {
                let e = i[s];
                !(e < c) && !(e >= u) && (!(e + 1 < u) || i[s + 1] !== e + 1 || !o[e].after || o[e + 1].before || o[e + 1].after) && (i[s - 1] !== e - 1 || !o[e].before || o[e - 1].before || o[e - 1].after) && (c !== e && a.push(nb(r.slice(c, e), "\\")), c = e, !/[!-/:-@[-`{-~]/.test(r.charAt(e)) || n.encode && n.encode.includes(r.charAt(e)) ? (a.push("&#x" + r.charCodeAt(e).toString(16).toUpperCase() + ";"), c++) : a.push("\\"))
            }
            return a.push(nb(r.slice(c, u), n.after)), a.join("")
        }

        function n_(e, t) {
            return e - t
        }

        function nb(e, t) {
            let n;
            let r = /\\(?=[!-/:-@[-`{-~])/g, i = [], a = [], o = e + t, s = -1, l = 0;
            for (; n = r.exec(o);) i.push(n.index);
            for (; ++s < i.length;) l !== i[s] && a.push(e.slice(l, i[s])), a.push("\\"), l = i[s];
            return a.push(e.slice(l)), a.join("")
        }

        function nA(e) {
            let t = e || {}, n = t.now || {}, r = t.lineShift || 0, i = n.line || 1, a = n.column || 1;
            return {
                move: function (e) {
                    let t = e || "", n = t.split(/\r?\n|\r/g), o = n[n.length - 1];
                    return i += n.length - 1, a = 1 === n.length ? a + o.length : 1 + o.length + r, t
                }, current: function () {
                    return {now: {line: i, column: a}, lineShift: r}
                }, shift: function (e) {
                    r += e
                }
            }
        }

        function ny(e = {}) {
            let t = this.data();

            function n(e, n) {
                let r = t[e] ? t[e] : t[e] = [];
                r.push(n)
            }

            n("micromarkExtensions", {
                flow: {36: np}, text: {
                    36: function (e = {}) {
                        let t = e.singleDollarTextMath;
                        return null == t && (t = !0), {
                            tokenize: function (e, n, r) {
                                let i, a, o = 0;
                                return function (n) {
                                    return e.enter("mathText"), e.enter("mathTextSequence"), function n(i) {
                                        return 36 === i ? (e.consume(i), o++, n) : o < 2 && !t ? r(i) : (e.exit("mathTextSequence"), s(i))
                                    }(n)
                                };

                                function s(t) {
                                    return null === t ? r(t) : 36 === t ? (a = e.enter("mathTextSequence"), i = 0, function t(r) {
                                        return 36 === r ? (e.consume(r), i++, t) : i === o ? (e.exit("mathTextSequence"), e.exit("mathText"), n(r)) : (a.type = "mathTextData", l(r))
                                    }(t)) : 32 === t ? (e.enter("space"), e.consume(t), e.exit("space"), s) : Y(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), s) : (e.enter("mathTextData"), l(t))
                                }

                                function l(t) {
                                    return null === t || 32 === t || 36 === t || Y(t) ? (e.exit("mathTextData"), s(t)) : (e.consume(t), l)
                                }
                            }, resolve: nm, previous: nf
                        }
                    }(e)
                }
            }), n("fromMarkdownExtensions", function () {
                return {
                    enter: {
                        mathFlow: function (e) {
                            this.enter({
                                type: "math",
                                meta: null,
                                value: "",
                                data: {
                                    hName: "div",
                                    hProperties: {className: ["math", "math-display"]},
                                    hChildren: [{type: "text", value: ""}]
                                }
                            }, e)
                        }, mathFlowFenceMeta: function () {
                            this.buffer()
                        }, mathText: function (e) {
                            this.enter({
                                type: "inlineMath",
                                value: "",
                                data: {
                                    hName: "span",
                                    hProperties: {className: ["math", "math-inline"]},
                                    hChildren: [{type: "text", value: ""}]
                                }
                            }, e), this.buffer()
                        }
                    }, exit: {
                        mathFlow: function (e) {
                            let t = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), n = this.exit(e);
                            n.value = t, n.data.hChildren[0].value = t, this.setData("mathFlowInside")
                        }, mathFlowFence: function () {
                            this.getData("mathFlowInside") || (this.buffer(), this.setData("mathFlowInside", !0))
                        }, mathFlowFenceMeta: function () {
                            let e = this.resume(), t = this.stack[this.stack.length - 1];
                            t.meta = e
                        }, mathFlowValue: e, mathText: function (e) {
                            let t = this.resume(), n = this.exit(e);
                            n.value = t, n.data.hChildren[0].value = t
                        }, mathTextData: e
                    }
                };

                function e(e) {
                    this.config.enter.data.call(this, e), this.config.exit.data.call(this, e)
                }
            }()), n("toMarkdownExtensions", function (e) {
                let t = (e || {}).singleDollarTextMath;
                return null == t && (t = !0), n.peek = function () {
                    return "$"
                }, {
                    unsafe: [{character: "\r", inConstruct: "mathFlowMeta"}, {
                        character: "\n",
                        inConstruct: "mathFlowMeta"
                    }, {character: "$", after: t ? void 0 : "\\$", inConstruct: "phrasing"}, {
                        character: "$",
                        inConstruct: "mathFlowMeta"
                    }, {atBreak: !0, character: "$", after: "\\$"}], handlers: {
                        math: function (e, t, n, r) {
                            let i = e.value || "", a = nA(r), o = "$".repeat(Math.max(function (e, t) {
                                let n = String(e), r = n.indexOf(t), i = r, a = 0, o = 0;
                                if ("string" != typeof t) throw TypeError("Expected substring");
                                for (; -1 !== r;) r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
                                return o
                            }(i, "$") + 1, 2)), s = n.enter("mathFlow"), l = a.move(o);
                            if (e.meta) {
                                let t = n.enter("mathFlowMeta");
                                l += a.move(nT(n, e.meta, {before: l, after: "\n", encode: ["$"], ...a.current()})), t()
                            }
                            return l += a.move("\n"), i && (l += a.move(i + "\n")), l += a.move(o), s(), l
                        }, inlineMath: n
                    }
                };

                function n(e, n, r) {
                    let i = e.value || "", a = 1;
                    for (!t && a++; RegExp("(^|[^$])" + "\\$".repeat(a) + "([^$]|$)").test(i);) a++;
                    let o = "$".repeat(a);
                    /[^ \r\n]/.test(i) && (/^[ \r\n]/.test(i) && /[ \r\n]$/.test(i) || /^\$|\$$/.test(i)) && (i = " " + i + " ");
                    let s = -1;
                    for (; ++s < r.unsafe.length;) {
                        let e;
                        let t = r.unsafe[s], n = ng(t);
                        if (t.atBreak) for (; e = n.exec(i);) {
                            let t = e.index;
                            10 === i.codePointAt(t) && 13 === i.codePointAt(t - 1) && t--, i = i.slice(0, t) + " " + i.slice(e.index + 1)
                        }
                    }
                    return o + i + o
                }
            }(e))
        }

        let nN = /[\t ]*(?:\r?\n|\r)/g;

        function nk() {
            return e => {
                ts(e, "text", (e, t, n) => {
                    let r = [], i = 0;
                    nN.lastIndex = 0;
                    let a = nN.exec(e.value);
                    for (; a;) {
                        let t = a.index;
                        i !== t && r.push({
                            type: "text",
                            value: e.value.slice(i, t)
                        }), r.push({type: "break"}), i = t + a[0].length, a = nN.exec(e.value)
                    }
                    if (r.length > 0 && n && "number" == typeof t) return i < e.value.length && r.push({
                        type: "text",
                        value: e.value.slice(i)
                    }), n.children.splice(t, 1, ...r), t + r.length
                })
            }
        }

        var nC = n(4739);
        let nS = function (e) {
            if (null == e) return nx;
            if ("string" == typeof e) return function (t) {
                return nx(t) && t.tagName === e
            };
            if ("object" == typeof e) return function (e) {
                let t = [], n = -1;
                for (; ++n < e.length;) t[n] = nS(e[n]);
                return nO(function (...e) {
                    let n = -1;
                    for (; ++n < t.length;) if (t[n].call(this, ...e)) return !0;
                    return !1
                })
            }(e);
            if ("function" == typeof e) return nO(e);
            throw Error("Expected function, string, or array as test")
        };

        function nO(e) {
            return function (t, ...n) {
                return nx(t) && !!e.call(this, t, ...n)
            }
        }

        function nx(e) {
            return !!(e && "object" == typeof e && "element" === e.type && "string" == typeof e.tagName)
        }

        let nv = function (e, t, n) {
                let r = tr(n);
                if (!e || !e.type || !e.children) throw Error("Expected parent node");
                if ("number" == typeof t) {
                    if (t < 0 || t === Number.POSITIVE_INFINITY) throw Error("Expected positive finite number as index")
                } else if ((t = e.children.indexOf(t)) < 0) throw Error("Expected child node or index");
                for (; ++t < e.children.length;) if (r(e.children[t], t, e)) return e.children[t];
                return null
            }, nI = /\n/g, nw = /[\t ]+/g, nR = nS("br"), nM = nS("p"), nL = nS(["th", "td"]), nD = nS("tr"),
            nP = nS(["datalist", "head", "noembed", "noframes", "noscript", "rp", "script", "style", "template", "title", function (e) {
                return !!(e.properties || {}).hidden
            }, function (e) {
                return "dialog" === e.tagName && !(e.properties || {}).open
            }]),
            nF = nS(["address", "article", "aside", "blockquote", "body", "caption", "center", "dd", "dialog", "dir", "dl", "dt", "div", "figure", "figcaption", "footer", "form,", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "legend", "listing", "main", "menu", "nav", "ol", "p", "plaintext", "pre", "section", "ul", "xmp"]);

        function nH(e, t = {}) {
            let n;
            let r = "children" in e ? e.children : [], i = nF(e),
                a = nU(e, {whitespace: t.whitespace || "normal", breakBefore: !1, breakAfter: !1}), o = [];
            ("text" === e.type || "comment" === e.type) && o.push(...nB(e, {
                whitespace: a,
                breakBefore: !0,
                breakAfter: !0
            }));
            let s = -1;
            for (; ++s < r.length;) o.push(...function e(t, n, r) {
                return "element" === t.type ? function (t, n, r) {
                    let i, a;
                    let o = nU(t, r), s = t.children || [], l = -1, c = [];
                    if (nP(t)) return c;
                    for (nR(t) ? a = "\n" : nD(t) && nv(n, t, nD) ? a = "\n" : nM(t) ? (i = 2, a = 2) : nF(t) && (i = 1, a = 1); ++l < s.length;) c = c.concat(e(s[l], t, {
                        whitespace: o,
                        breakBefore: l ? void 0 : i,
                        breakAfter: l < s.length - 1 ? nR(s[l + 1]) : a
                    }));
                    return nL(t) && nv(n, t, nL) && c.push("	"), i && c.unshift(i), a && c.push(a), c
                }(t, n, r) : "text" === t.type ? "normal" === r.whitespace ? nB(t, r) : [String(t.value)] : []
            }(r[s], e, {whitespace: a, breakBefore: s ? void 0 : i, breakAfter: s < r.length - 1 ? nR(r[s + 1]) : i}));
            let l = [];
            for (s = -1; ++s < o.length;) {
                let e = o[s];
                "number" == typeof e ? void 0 !== n && e > n && (n = e) : e && (void 0 !== n && n > -1 && l.push("\n".repeat(n) || " "), n = -1, l.push(e))
            }
            return l.join("")
        }

        function nB(e, t) {
            let n;
            let r = String(e.value), i = [], a = [], o = 0;
            for (; o <= r.length;) {
                nI.lastIndex = o;
                let e = nI.exec(r), n = e && "index" in e ? e.index : r.length;
                i.push(function (e, t, n) {
                    let r;
                    let i = [], a = 0;
                    for (; a < e.length;) {
                        nw.lastIndex = a;
                        let n = nw.exec(e);
                        r = n ? n.index : e.length, a || r || !n || t || i.push(""), a !== r && i.push(e.slice(a, r)), a = n ? r + n[0].length : r
                    }
                    return a === r || n || i.push(""), i.join(" ")
                }(r.slice(o, n).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""), 0 !== o || t.breakBefore, n !== r.length || t.breakAfter)), o = n + 1
            }
            let s = -1;
            for (; ++s < i.length;) 8203 === i[s].charCodeAt(i[s].length - 1) || s < i.length - 1 && 8203 === i[s + 1].charCodeAt(0) ? (a.push(i[s]), n = void 0) : i[s] ? ("number" == typeof n && a.push(n), a.push(i[s]), n = 0) : (0 === s || s === i.length - 1) && a.push(0);
            return a
        }

        function nU(e, t) {
            if ("element" === e.type) {
                let n = e.properties || {};
                switch (e.tagName) {
                    case"listing":
                    case"plaintext":
                    case"xmp":
                        return "pre";
                    case"nobr":
                        return "nowrap";
                    case"pre":
                        return n.wrap ? "pre-wrap" : "pre";
                    case"td":
                    case"th":
                        return n.noWrap ? "nowrap" : t.whitespace;
                    case"textarea":
                        return "pre-wrap"
                }
            }
            return t.whitespace
        }

        var nK = n(7915);
        let nG = /[#.]/g, nz = new Set(["menu", "submit", "reset", "button"]), nj = {}.hasOwnProperty;

        function n$(e, t, n) {
            let r = n && function (e) {
                let t = {}, n = -1;
                for (; ++n < e.length;) t[e[n].toLowerCase()] = e[n];
                return t
            }(n);
            return function (n, i, ...a) {
                let o, s = -1;
                if (null == n) o = {type: "root", children: []}, a.unshift(i); else {
                    var l;
                    if ((o = function (e, t) {
                        let n, r;
                        let i = e || "", a = {}, o = 0;
                        for (; o < i.length;) {
                            nG.lastIndex = o;
                            let e = nG.exec(i), t = i.slice(o, e ? e.index : i.length);
                            t && (n ? "#" === n ? a.id = t : Array.isArray(a.className) ? a.className.push(t) : a.className = [t] : r = t, o += t.length), e && (n = e[0], o++)
                        }
                        return {type: "element", tagName: r || t || "div", properties: a, children: []}
                    }(n, t)).tagName = o.tagName.toLowerCase(), r && nj.call(r, o.tagName) && (o.tagName = r[o.tagName]), l = o.tagName, !(null == i || "object" != typeof i || Array.isArray(i)) && ("input" === l || !i.type || "string" != typeof i.type || !("children" in i && Array.isArray(i.children)) && ("button" === l ? nz.has(i.type.toLowerCase()) : !("value" in i)))) {
                        let t;
                        for (t in i) nj.call(i, t) && function (e, t, n, r) {
                            let i;
                            let a = t2(e, n), o = -1;
                            if (null != r) {
                                if ("number" == typeof r) {
                                    if (Number.isNaN(r)) return;
                                    i = r
                                } else i = "boolean" == typeof r ? r : "string" == typeof r ? a.spaceSeparated ? ne(r) : a.commaSeparated ? nt(r) : a.commaOrSpaceSeparated ? ne(nt(r).join(" ")) : nq(a, a.property, r) : Array.isArray(r) ? r.concat() : "style" === a.property ? function (e) {
                                    let t;
                                    let n = [];
                                    for (t in e) nj.call(e, t) && n.push([t, e[t]].join(": "));
                                    return n.join("; ")
                                }(r) : String(r);
                                if (Array.isArray(i)) {
                                    let e = [];
                                    for (; ++o < i.length;) e[o] = nq(a, a.property, i[o]);
                                    i = e
                                }
                                "className" === a.property && Array.isArray(t.className) && (i = t.className.concat(i)), t[a.property] = i
                            }
                        }(e, o.properties, t, i[t])
                    } else a.unshift(i)
                }
                for (; ++s < a.length;) !function e(t, n) {
                    let r = -1;
                    if (null == n) ; else if ("string" == typeof n || "number" == typeof n) t.push({
                        type: "text",
                        value: String(n)
                    }); else if (Array.isArray(n)) for (; ++r < n.length;) e(t, n[r]); else if ("object" == typeof n && "type" in n) "root" === n.type ? e(t, n.children) : t.push(n); else throw Error("Expected node, nodes, or string, got `" + n + "`")
                }(o.children, a[s]);
                return "element" === o.type && "template" === o.tagName && (o.content = {
                    type: "root",
                    children: o.children
                }, o.children = []), o
            }
        }

        function nq(e, t, n) {
            if ("string" == typeof n) {
                if (e.number && n && !Number.isNaN(Number(n))) return Number(n);
                if ((e.boolean || e.overloadedBoolean) && ("" === n || tI(n) === tI(t))) return !0
            }
            return n
        }

        let nW = n$(t1, "g", ["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "solidColor", "textArea", "textPath"]),
            nY = n$(tJ, "div"), nQ = {
                html: "http://www.w3.org/1999/xhtml",
                mathml: "http://www.w3.org/1998/Math/MathML",
                svg: "http://www.w3.org/2000/svg",
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            }, nV = {}.hasOwnProperty, nX = Object.prototype;

        function nZ(e, t) {
            let n;
            switch (t.nodeName) {
                case"#comment":
                    return n = {type: "comment", value: t.data}, n1(e, t, n), n;
                case"#document":
                case"#document-fragment": {
                    let r = "mode" in t && ("quirks" === t.mode || "limited-quirks" === t.mode);
                    if (n = {
                        type: "root",
                        children: nJ(e, t.childNodes),
                        data: {quirksMode: r}
                    }, e.file && e.location) {
                        let t = String(e.file), r = function (e) {
                            let t = String(e), n = [], r = /\r?\n|\r/g;
                            for (; r.test(t);) n.push(r.lastIndex);
                            return n.push(t.length + 1), {
                                toPoint: function (e) {
                                    let t = -1;
                                    if ("number" == typeof e && e > -1 && e < n[n.length - 1]) {
                                        for (; ++t < n.length;) if (n[t] > e) return {
                                            line: t + 1,
                                            column: e - (t > 0 ? n[t - 1] : 0) + 1,
                                            offset: e
                                        }
                                    }
                                    return {line: void 0, column: void 0, offset: void 0}
                                }, toOffset: function (e) {
                                    let t = e && e.line, r = e && e.column;
                                    if ("number" == typeof t && "number" == typeof r && !Number.isNaN(t) && !Number.isNaN(r) && t - 1 in n) {
                                        let e = (n[t - 2] || 0) + r - 1 || 0;
                                        if (e > -1 && e < n[n.length - 1]) return e
                                    }
                                    return -1
                                }
                            }
                        }(t), i = r.toPoint(0), a = r.toPoint(t.length);
                        n.position = {start: i, end: a}
                    }
                    return n
                }
                case"#documentType":
                    return n1(e, t, n = {type: "doctype"}), n;
                case"#text":
                    return n = {type: "text", value: t.value}, n1(e, t, n), n;
                default:
                    return function (e, t) {
                        let n = e.schema;
                        e.schema = t.namespaceURI === nQ.svg ? t1 : tJ;
                        let r = -1, i = {};
                        for (; ++r < t.attrs.length;) {
                            let e = t.attrs[r], n = (e.prefix ? e.prefix + ":" : "") + e.name;
                            nV.call(nX, n) || (i[n] = e.value)
                        }
                        let a = "svg" === e.schema.space ? nW : nY, o = a(t.tagName, i, nJ(e, t.childNodes));
                        if (n1(e, t, o), "template" === o.tagName) {
                            let n = t.sourceCodeLocation, r = n && n.startTag && n0(n.startTag),
                                i = n && n.endTag && n0(n.endTag), a = nZ(e, t.content);
                            r && i && e.file && (a.position = {start: r.end, end: i.start}), o.content = a
                        }
                        return e.schema = n, o
                    }(e, t)
            }
        }

        function nJ(e, t) {
            let n = -1, r = [];
            for (; ++n < t.length;) r[n] = nZ(e, t[n]);
            return r
        }

        function n1(e, t, n) {
            if ("sourceCodeLocation" in t && t.sourceCodeLocation && e.file) {
                let r = function (e, t, n) {
                    let r = n0(n);
                    if ("element" === t.type) {
                        let i = t.children[t.children.length - 1];
                        if (r && !n.endTag && i && i.position && i.position.end && (r.end = Object.assign({}, i.position.end)), e.verbose) {
                            let r;
                            let i = {};
                            if (n.attrs) for (r in n.attrs) nV.call(n.attrs, r) && (i[t2(e.schema, r).property] = n0(n.attrs[r]));
                            t.data = {
                                position: {
                                    opening: n0(n.startTag),
                                    closing: n.endTag ? n0(n.endTag) : null,
                                    properties: i
                                }
                            }
                        }
                    }
                    return r
                }(e, n, t.sourceCodeLocation);
                r && (e.location = !0, n.position = r)
            }
        }

        function n0(e) {
            let t = n9({line: e.startLine, column: e.startCol, offset: e.startOffset}),
                n = n9({line: e.endLine, column: e.endCol, offset: e.endOffset});
            return t || n ? {start: t, end: n} : void 0
        }

        function n9(e) {
            return e.line && e.column ? e : void 0
        }

        let n5 = {
            abandonedHeadElementChild: {
                reason: "Unexpected metadata element after head",
                description: "Unexpected element after head. Expected the element before `</head>`",
                url: !1
            },
            abruptClosingOfEmptyComment: {
                reason: "Unexpected abruptly closed empty comment",
                description: "Unexpected `>` or `->`. Expected `-->` to close comments"
            },
            abruptDoctypePublicIdentifier: {
                reason: "Unexpected abruptly closed public identifier",
                description: "Unexpected `>`. Expected a closing `\"` or `'` after the public identifier"
            },
            abruptDoctypeSystemIdentifier: {
                reason: "Unexpected abruptly closed system identifier",
                description: "Unexpected `>`. Expected a closing `\"` or `'` after the identifier identifier"
            },
            absenceOfDigitsInNumericCharacterReference: {
                reason: "Unexpected non-digit at start of numeric character reference",
                description: "Unexpected `%c`. Expected `[0-9]` for decimal references or `[0-9a-fA-F]` for hexadecimal references"
            },
            cdataInHtmlContent: {
                reason: "Unexpected CDATA section in HTML",
                description: "Unexpected `<![CDATA[` in HTML. Remove it, use a comment, or encode special characters instead"
            },
            characterReferenceOutsideUnicodeRange: {
                reason: "Unexpected too big numeric character reference",
                description: "Unexpectedly high character reference. Expected character references to be at most hexadecimal 10ffff (or decimal 1114111)"
            },
            closingOfElementWithOpenChildElements: {
                reason: "Unexpected closing tag with open child elements",
                description: "Unexpectedly closing tag. Expected other tags to be closed first",
                url: !1
            },
            controlCharacterInInputStream: {
                reason: "Unexpected control character",
                description: "Unexpected control character `%x`. Expected a non-control code point, 0x00, or ASCII whitespace"
            },
            controlCharacterReference: {
                reason: "Unexpected control character reference",
                description: "Unexpectedly control character in reference. Expected a non-control code point, 0x00, or ASCII whitespace"
            },
            disallowedContentInNoscriptInHead: {
                reason: "Disallowed content inside `<noscript>` in `<head>`",
                description: "Unexpected text character `%c`. Only use text in `<noscript>`s in `<body>`",
                url: !1
            },
            duplicateAttribute: {
                reason: "Unexpected duplicate attribute",
                description: "Unexpectedly double attribute. Expected attributes to occur only once"
            },
            endTagWithAttributes: {
                reason: "Unexpected attribute on closing tag",
                description: "Unexpected attribute. Expected `>` instead"
            },
            endTagWithTrailingSolidus: {
                reason: "Unexpected slash at end of closing tag",
                description: "Unexpected `%c-1`. Expected `>` instead"
            },
            endTagWithoutMatchingOpenElement: {
                reason: "Unexpected unopened end tag",
                description: "Unexpected end tag. Expected no end tag or another end tag",
                url: !1
            },
            eofBeforeTagName: {
                reason: "Unexpected end of file",
                description: "Unexpected end of file. Expected tag name instead"
            },
            eofInCdata: {
                reason: "Unexpected end of file in CDATA",
                description: "Unexpected end of file. Expected `]]>` to close the CDATA"
            },
            eofInComment: {
                reason: "Unexpected end of file in comment",
                description: "Unexpected end of file. Expected `-->` to close the comment"
            },
            eofInDoctype: {
                reason: "Unexpected end of file in doctype",
                description: "Unexpected end of file. Expected a valid doctype (such as `<!doctype html>`)"
            },
            eofInElementThatCanContainOnlyText: {
                reason: "Unexpected end of file in element that can only contain text",
                description: "Unexpected end of file. Expected text or a closing tag",
                url: !1
            },
            eofInScriptHtmlCommentLikeText: {
                reason: "Unexpected end of file in comment inside script",
                description: "Unexpected end of file. Expected `-->` to close the comment"
            },
            eofInTag: {
                reason: "Unexpected end of file in tag",
                description: "Unexpected end of file. Expected `>` to close the tag"
            },
            incorrectlyClosedComment: {
                reason: "Incorrectly closed comment",
                description: "Unexpected `%c-1`. Expected `-->` to close the comment"
            },
            incorrectlyOpenedComment: {
                reason: "Incorrectly opened comment",
                description: "Unexpected `%c`. Expected `<!--` to open the comment"
            },
            invalidCharacterSequenceAfterDoctypeName: {
                reason: "Invalid sequence after doctype name",
                description: "Unexpected sequence at `%c`. Expected `public` or `system`"
            },
            invalidFirstCharacterOfTagName: {
                reason: "Invalid first character in tag name",
                description: "Unexpected `%c`. Expected an ASCII letter instead"
            },
            misplacedDoctype: {
                reason: "Misplaced doctype",
                description: "Unexpected doctype. Expected doctype before head",
                url: !1
            },
            misplacedStartTagForHeadElement: {
                reason: "Misplaced `<head>` start tag",
                description: "Unexpected start tag `<head>`. Expected `<head>` directly after doctype",
                url: !1
            },
            missingAttributeValue: {
                reason: "Missing attribute value",
                description: "Unexpected `%c-1`. Expected an attribute value or no `%c-1` instead"
            },
            missingDoctype: {
                reason: "Missing doctype before other content",
                description: "Expected a `<!doctype html>` before anything else",
                url: !1
            },
            missingDoctypeName: {
                reason: "Missing doctype name",
                description: "Unexpected doctype end at `%c`. Expected `html` instead"
            },
            missingDoctypePublicIdentifier: {
                reason: "Missing public identifier in doctype",
                description: "Unexpected `%c`. Expected identifier for `public` instead"
            },
            missingDoctypeSystemIdentifier: {
                reason: "Missing system identifier in doctype",
                description: 'Unexpected `%c`. Expected identifier for `system` instead (suggested: `"about:legacy-compat"`)'
            },
            missingEndTagName: {
                reason: "Missing name in end tag",
                description: "Unexpected `%c`. Expected an ASCII letter instead"
            },
            missingQuoteBeforeDoctypePublicIdentifier: {
                reason: "Missing quote before public identifier in doctype",
                description: "Unexpected `%c`. Expected `\"` or `'` instead"
            },
            missingQuoteBeforeDoctypeSystemIdentifier: {
                reason: "Missing quote before system identifier in doctype",
                description: "Unexpected `%c`. Expected `\"` or `'` instead"
            },
            missingSemicolonAfterCharacterReference: {
                reason: "Missing semicolon after character reference",
                description: "Unexpected `%c`. Expected `;` instead"
            },
            missingWhitespaceAfterDoctypePublicKeyword: {
                reason: "Missing whitespace after public identifier in doctype",
                description: "Unexpected `%c`. Expected ASCII whitespace instead"
            },
            missingWhitespaceAfterDoctypeSystemKeyword: {
                reason: "Missing whitespace after system identifier in doctype",
                description: "Unexpected `%c`. Expected ASCII whitespace instead"
            },
            missingWhitespaceBeforeDoctypeName: {
                reason: "Missing whitespace before doctype name",
                description: "Unexpected `%c`. Expected ASCII whitespace instead"
            },
            missingWhitespaceBetweenAttributes: {
                reason: "Missing whitespace between attributes",
                description: "Unexpected `%c`. Expected ASCII whitespace instead"
            },
            missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: {
                reason: "Missing whitespace between public and system identifiers in doctype",
                description: "Unexpected `%c`. Expected ASCII whitespace instead"
            },
            nestedComment: {reason: "Unexpected nested comment", description: "Unexpected `<!--`. Expected `-->`"},
            nestedNoscriptInHead: {
                reason: "Unexpected nested `<noscript>` in `<head>`",
                description: "Unexpected `<noscript>`. Expected a closing tag or a meta element",
                url: !1
            },
            nonConformingDoctype: {
                reason: "Unexpected non-conforming doctype declaration",
                description: 'Expected `<!doctype html>` or `<!doctype html system "about:legacy-compat">`',
                url: !1
            },
            nonVoidHtmlElementStartTagWithTrailingSolidus: {
                reason: "Unexpected trailing slash on start tag of non-void element",
                description: "Unexpected `/`. Expected `>` instead"
            },
            noncharacterCharacterReference: {
                reason: "Unexpected noncharacter code point referenced by character reference",
                description: "Unexpected code point. Do not use noncharacters in HTML"
            },
            noncharacterInInputStream: {
                reason: "Unexpected noncharacter character",
                description: "Unexpected code point `%x`. Do not use noncharacters in HTML"
            },
            nullCharacterReference: {
                reason: "Unexpected NULL character referenced by character reference",
                description: "Unexpected code point. Do not use NULL characters in HTML"
            },
            openElementsLeftAfterEof: {
                reason: "Unexpected end of file",
                description: "Unexpected end of file. Expected closing tag instead",
                url: !1
            },
            surrogateCharacterReference: {
                reason: "Unexpected surrogate character referenced by character reference",
                description: "Unexpected code point. Do not use lone surrogate characters in HTML"
            },
            surrogateInInputStream: {
                reason: "Unexpected surrogate character",
                description: "Unexpected code point `%x`. Do not use lone surrogate characters in HTML"
            },
            unexpectedCharacterAfterDoctypeSystemIdentifier: {
                reason: "Invalid character after system identifier in doctype",
                description: "Unexpected character at `%c`. Expected `>`"
            },
            unexpectedCharacterInAttributeName: {
                reason: "Unexpected character in attribute name",
                description: "Unexpected `%c`. Expected whitespace, `/`, `>`, `=`, or probably an ASCII letter"
            },
            unexpectedCharacterInUnquotedAttributeValue: {
                reason: "Unexpected character in unquoted attribute value",
                description: "Unexpected `%c`. Quote the attribute value to include it"
            },
            unexpectedEqualsSignBeforeAttributeName: {
                reason: "Unexpected equals sign before attribute name",
                description: "Unexpected `%c`. Add an attribute name before it"
            },
            unexpectedNullCharacter: {
                reason: "Unexpected NULL character",
                description: "Unexpected code point `%x`. Do not use NULL characters in HTML"
            },
            unexpectedQuestionMarkInsteadOfTagName: {
                reason: "Unexpected question mark instead of tag name",
                description: "Unexpected `%c`. Expected an ASCII letter instead"
            },
            unexpectedSolidusInTag: {
                reason: "Unexpected slash in tag",
                description: "Unexpected `%c-1`. Expected it followed by `>` or in a quoted attribute value"
            },
            unknownNamedCharacterReference: {
                reason: "Unexpected unknown named character reference",
                description: "Unexpected character reference. Expected known named character references"
            }
        }, n4 = {2: !0, 1: !1, 0: null}, n8 = Object.assign, n2 = C().use(function (e) {
            let t = this.data("settings"), n = Object.assign({}, t, e);
            Object.assign(this, {
                Parser: function (e, t) {
                    let r = n.fragment ? "parseFragment" : "parse", i = n.emitParseErrors ? function (r) {
                        let i = r.code, a = i.replace(/-[a-z]/g, e => e.charAt(1).toUpperCase()), o = n[a],
                            s = null == o || o, l = "number" == typeof s ? s : s ? 1 : 0,
                            c = {line: r.startLine, column: r.startCol, offset: r.startOffset},
                            u = {line: r.endLine, column: r.endCol, offset: r.endOffset};
                        if (l) {
                            let e = n5[a] || {reason: "", description: "", url: ""},
                                n = t.message(d(e.reason), {start: c, end: u});
                            n.source = "parse-error", n.ruleId = i, n.fatal = n4[l], n.note = d(e.description), n.url = "url" in e && !1 === e.url ? null : "https://html.spec.whatwg.org/multipage/parsing.html#parse-error-" + i
                        }

                        function d(t) {
                            return t.replace(/%c(?:-(\d+))?/g, (t, n) => {
                                let i = n ? -Number.parseInt(n, 10) : 0, a = e.charAt(r.startOffset + i);
                                return "`" === a ? "` ` `" : a
                            }).replace(/%x/g, () => "0x" + e.charCodeAt(r.startOffset).toString(16).toUpperCase())
                        }
                    } : null, a = new nK({sourceCodeLocationInfo: !0, onParseError: i, scriptingEnabled: !1});
                    return function (e, t) {
                        let n, r;
                        let i = t || {};
                        return "messages" in i ? (r = i, n = {}) : (r = i.file || void 0, n = i), nZ({
                            schema: "svg" === n.space ? t1 : tJ,
                            file: r,
                            verbose: n.verbose,
                            location: !1
                        }, e)
                    }(a[r](e), {space: n.space, file: t, verbose: n.verbose})
                }
            })
        }, {fragment: !0});

        function n6(e) {
            let t = e || {}, n = t.throwOnError || !1;
            return (e, r) => {
                ts(e, "element", e => {
                    let i;
                    let a = e.properties && Array.isArray(e.properties.className) ? e.properties.className : [],
                        o = a.includes("math-inline"), s = a.includes("math-display");
                    if (!o && !s) return;
                    let l = nH(e, {whitespace: "pre"});
                    try {
                        i = nC.Z.renderToString(l, n8({}, t, {displayMode: s, throwOnError: !0}))
                    } catch (o) {
                        let a = ["rehype-katex", o.name.toLowerCase()].join(":");
                        r[n ? "fail" : "message"](o.message, e.position, a), i = nC.Z.renderToString(l, n8({}, t, {
                            displayMode: s,
                            throwOnError: !1,
                            strict: "ignore"
                        }))
                    }
                    e.children = function (e, t) {
                        let n = "boolean" == typeof t ? t : !!t && t.force;
                        return ts(e, function (e) {
                            n ? delete e.position : e.position = void 0
                        }), e
                    }(n2.parse(i), !0).children
                })
            }
        }

        let n7 = {
            tokenize: function (e, t, n) {
                return function (t) {
                    return e.consume(t), r
                };

                function r(t) {
                    return 87 === t || 119 === t ? (e.consume(t), i) : n(t)
                }

                function i(t) {
                    return 87 === t || 119 === t ? (e.consume(t), a) : n(t)
                }

                function a(t) {
                    return 46 === t ? (e.consume(t), o) : n(t)
                }

                function o(e) {
                    return null === e || Y(e) ? n(e) : t(e)
                }
            }, partial: !0
        }, n3 = {
            tokenize: function (e, t, n) {
                let r, i;
                return a;

                function a(t) {
                    return 38 === t ? e.check(rn, s, o)(t) : 46 === t || 95 === t ? e.check(rt, s, o)(t) : null === t || q(t) || V(t) || 45 !== t && X(t) ? s(t) : (e.consume(t), a)
                }

                function o(t) {
                    return 46 === t ? (i = r, r = void 0, e.consume(t), a) : (95 === t && (r = !0), e.consume(t), a)
                }

                function s(e) {
                    return i || r ? n(e) : t(e)
                }
            }, partial: !0
        }, re = {
            tokenize: function (e, t) {
                let n = 0;
                return r;

                function r(o) {
                    return 38 === o ? e.check(rn, t, i)(o) : (40 === o && n++, 41 === o) ? e.check(rt, a, i)(o) : ru(o) ? t(o) : rc(o) ? e.check(rt, t, i)(o) : (e.consume(o), r)
                }

                function i(t) {
                    return e.consume(t), r
                }

                function a(e) {
                    return --n < 0 ? t(e) : i(e)
                }
            }, partial: !0
        }, rt = {
            tokenize: function (e, t, n) {
                return function (t) {
                    return e.consume(t), r
                };

                function r(i) {
                    return rc(i) ? (e.consume(i), r) : ru(i) ? t(i) : n(i)
                }
            }, partial: !0
        }, rn = {
            tokenize: function (e, t, n) {
                return function (t) {
                    return e.consume(t), r
                };

                function r(t) {
                    return U(t) ? (e.consume(t), r) : 59 === t ? (e.consume(t), i) : n(t)
                }

                function i(e) {
                    return ru(e) ? t(e) : n(e)
                }
            }, partial: !0
        }, rr = {
            tokenize: function (e, t, n) {
                let r = this;
                return function (t) {
                    return 87 !== t && 119 !== t || !rp(r.previous) || rf(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(n7, e.attempt(n3, e.attempt(re, i), n), n)(t))
                };

                function i(n) {
                    return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n)
                }
            }, previous: rp
        }, ri = {
            tokenize: function (e, t, n) {
                let r = this;
                return function (t) {
                    return 72 !== t && 104 !== t || !rh(r.previous) || rf(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), e.consume(t), i)
                };

                function i(t) {
                    return 84 === t || 116 === t ? (e.consume(t), a) : n(t)
                }

                function a(t) {
                    return 84 === t || 116 === t ? (e.consume(t), o) : n(t)
                }

                function o(t) {
                    return 80 === t || 112 === t ? (e.consume(t), s) : n(t)
                }

                function s(t) {
                    return 83 === t || 115 === t ? (e.consume(t), l) : l(t)
                }

                function l(t) {
                    return 58 === t ? (e.consume(t), c) : n(t)
                }

                function c(t) {
                    return 47 === t ? (e.consume(t), u) : n(t)
                }

                function u(t) {
                    return 47 === t ? (e.consume(t), d) : n(t)
                }

                function d(t) {
                    return null === t || q(t) || V(t) || X(t) ? n(t) : e.attempt(n3, e.attempt(re, p), n)(t)
                }

                function p(n) {
                    return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n)
                }
            }, previous: rh
        }, ra = {
            tokenize: function (e, t, n) {
                let r, i;
                let a = this;
                return function (t) {
                    return !rd(t) || !rm(a.previous) || rf(a.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), function t(r) {
                        return rd(r) ? (e.consume(r), t) : 64 === r ? (e.consume(r), o) : n(r)
                    }(t))
                };

                function o(t) {
                    return 46 === t ? e.check(rt, u, s)(t) : 45 === t || 95 === t ? e.check(rt, n, l)(t) : z(t) ? (!i && K(t) && (i = !0), e.consume(t), o) : u(t)
                }

                function s(t) {
                    return e.consume(t), r = !0, i = void 0, o
                }

                function l(t) {
                    return e.consume(t), c
                }

                function c(t) {
                    return 46 === t ? e.check(rt, n, s)(t) : o(t)
                }

                function u(a) {
                    return r && !i ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(a)) : n(a)
                }
            }, previous: rm
        }, ro = {}, rs = {text: ro}, rl = 48;
        for (; rl < 123;) ro[rl] = ra, 58 == ++rl ? rl = 65 : 91 === rl && (rl = 97);

        function rc(e) {
            return 33 === e || 34 === e || 39 === e || 41 === e || 42 === e || 44 === e || 46 === e || 58 === e || 59 === e || 60 === e || 63 === e || 95 === e || 126 === e
        }

        function ru(e) {
            return null === e || 60 === e || W(e)
        }

        function rd(e) {
            return 43 === e || 45 === e || 46 === e || 95 === e || z(e)
        }

        function rp(e) {
            return null === e || 40 === e || 42 === e || 95 === e || 126 === e || W(e)
        }

        function rh(e) {
            return null === e || !U(e)
        }

        function rm(e) {
            return 47 !== e && rh(e)
        }

        function rf(e) {
            let t = e.length, n = !1;
            for (; t--;) {
                let r = e[t][1];
                if (("labelLink" === r.type || "labelImage" === r.type) && !r._balanced) {
                    n = !0;
                    break
                }
                if (r._gfmAutolinkLiteralWalkedInto) {
                    n = !1;
                    break
                }
            }
            return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n
        }

        ro[43] = ra, ro[45] = ra, ro[46] = ra, ro[95] = ra, ro[72] = [ra, ri], ro[104] = [ra, ri], ro[87] = [ra, rr], ro[119] = [ra, rr];
        let rg = {
            tokenize: function (e, t, n) {
                let r = this;
                return J(e, function (e) {
                    let i = r.events[r.events.length - 1];
                    return i && "gfmFootnoteDefinitionIndent" === i[1].type && 4 === i[2].sliceSerialize(i[1], !0).length ? t(e) : n(e)
                }, "gfmFootnoteDefinitionIndent", 5)
            }, partial: !0
        };

        function rE(e, t, n) {
            let r;
            let i = this, a = i.events.length, o = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []);
            for (; a--;) {
                let e = i.events[a][1];
                if ("labelImage" === e.type) {
                    r = e;
                    break
                }
                if ("gfmFootnoteCall" === e.type || "labelLink" === e.type || "label" === e.type || "image" === e.type || "link" === e.type) break
            }
            return function (a) {
                if (!r || !r._balanced) return n(a);
                let s = ek(i.sliceSerialize({start: r.end, end: i.now()}));
                return 94 === s.charCodeAt(0) && o.includes(s.slice(1)) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(a), e.exit("gfmFootnoteCallLabelMarker"), t(a)) : n(a)
            }
        }

        function rT(e, t) {
            let n = e.length;
            for (; n--;) if ("labelImage" === e[n][1].type && "enter" === e[n][0]) {
                e[n][1];
                break
            }
            e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
            let r = {
                type: "gfmFootnoteCall",
                start: Object.assign({}, e[n + 3][1].start),
                end: Object.assign({}, e[e.length - 1][1].end)
            }, i = {
                type: "gfmFootnoteCallMarker",
                start: Object.assign({}, e[n + 3][1].end),
                end: Object.assign({}, e[n + 3][1].end)
            };
            i.end.column++, i.end.offset++, i.end._bufferIndex++;
            let a = {
                    type: "gfmFootnoteCallString",
                    start: Object.assign({}, i.end),
                    end: Object.assign({}, e[e.length - 1][1].start)
                }, o = {
                    type: "chunkString",
                    contentType: "string",
                    start: Object.assign({}, a.start),
                    end: Object.assign({}, a.end)
                },
                s = [e[n + 1], e[n + 2], ["enter", r, t], e[n + 3], e[n + 4], ["enter", i, t], ["exit", i, t], ["enter", a, t], ["enter", o, t], ["exit", o, t], ["exit", a, t], e[e.length - 2], e[e.length - 1], ["exit", r, t]];
            return e.splice(n, e.length - n + 1, ...s), e
        }

        function r_(e, t, n) {
            let r;
            let i = this, a = i.parser.gfmFootnotes || (i.parser.gfmFootnotes = []), o = 0;
            return function (t) {
                return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), s
            };

            function s(t) {
                return 94 !== t ? n(t) : (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l)
            }

            function l(s) {
                let u;
                if (null === s || 91 === s || o++ > 999) return n(s);
                if (93 === s) return r ? (e.exit("chunkString"), u = e.exit("gfmFootnoteCallString"), a.includes(ek(i.sliceSerialize(u))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s)) : n(s);
                return e.consume(s), W(s) || (r = !0), 92 === s ? c : l
            }

            function c(t) {
                return 91 === t || 92 === t || 93 === t ? (e.consume(t), o++, l) : l(t)
            }
        }

        function rb(e, t, n) {
            let r, i;
            let a = this, o = a.parser.gfmFootnotes || (a.parser.gfmFootnotes = []), s = 0;
            return function (t) {
                return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l
            };

            function l(t) {
                return 94 === t ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), c) : n(t)
            }

            function c(t) {
                let o;
                return null === t || 91 === t || s > 999 ? n(t) : 93 === t ? i ? (o = e.exit("gfmFootnoteDefinitionLabelString"), r = ek(a.sliceSerialize(o)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), p) : n(t) : Y(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), s++, c) : (e.enter("chunkString").contentType = "string", u(t))
            }

            function u(t) {
                return null === t || Y(t) || 91 === t || 93 === t || s > 999 ? (e.exit("chunkString"), c(t)) : (W(t) || (i = !0), s++, e.consume(t), 92 === t ? d : u)
            }

            function d(t) {
                return 91 === t || 92 === t || 93 === t ? (e.consume(t), s++, u) : u(t)
            }

            function p(t) {
                return 58 === t ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), J(e, h, "gfmFootnoteDefinitionWhitespace")) : n(t)
            }

            function h(e) {
                return o.includes(r) || o.push(r), t(e)
            }
        }

        function rA(e, t, n) {
            return e.check(er, t, e.attempt(rg, t, n))
        }

        function ry(e) {
            e.exit("gfmFootnoteDefinition")
        }

        let rN = {
            flow: {
                null: {
                    tokenize: function (e, t, n) {
                        let r, i;
                        let a = this, o = [], s = 0;
                        return function (t) {
                            return (e.enter("table")._align = o, e.enter("tableHead"), e.enter("tableRow"), 124 === t) ? l(t) : (s++, e.enter("temporaryTableCellContent"), d(t))
                        };

                        function l(t) {
                            return e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), r = !0, c
                        }

                        function c(t) {
                            return null === t || Y(t) ? function (t) {
                                if (null === t) return n(t);
                                e.exit("tableRow"), e.exit("tableHead");
                                let r = a.interrupt;
                                return a.interrupt = !0, e.attempt({tokenize: x, partial: !0}, function (t) {
                                    return a.interrupt = r, e.enter("tableDelimiterRow"), h(t)
                                }, function (e) {
                                    return a.interrupt = r, n(e)
                                })(t)
                            }(t) : Q(t) ? (e.enter("whitespace"), e.consume(t), u) : (r && (r = void 0, s++), 124 === t) ? l(t) : (e.enter("temporaryTableCellContent"), d(t))
                        }

                        function u(t) {
                            return Q(t) ? (e.consume(t), u) : (e.exit("whitespace"), c(t))
                        }

                        function d(t) {
                            return null === t || 124 === t || W(t) ? (e.exit("temporaryTableCellContent"), c(t)) : (e.consume(t), 92 === t ? p : d)
                        }

                        function p(t) {
                            return 92 === t || 124 === t ? (e.consume(t), d) : d(t)
                        }

                        function h(t) {
                            return null === t || Y(t) ? T(t) : Q(t) ? (e.enter("whitespace"), e.consume(t), m) : 45 === t ? (e.enter("tableDelimiterFiller"), e.consume(t), i = !0, o.push("none"), f) : 58 === t ? (e.enter("tableDelimiterAlignment"), e.consume(t), e.exit("tableDelimiterAlignment"), o.push("left"), g) : 124 === t ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : n(t)
                        }

                        function m(t) {
                            return Q(t) ? (e.consume(t), m) : (e.exit("whitespace"), h(t))
                        }

                        function f(t) {
                            return 45 === t ? (e.consume(t), f) : (e.exit("tableDelimiterFiller"), 58 === t) ? (e.enter("tableDelimiterAlignment"), e.consume(t), e.exit("tableDelimiterAlignment"), o[o.length - 1] = "left" === o[o.length - 1] ? "center" : "right", E) : h(t)
                        }

                        function g(t) {
                            return 45 === t ? (e.enter("tableDelimiterFiller"), e.consume(t), i = !0, f) : n(t)
                        }

                        function E(t) {
                            return null === t || Y(t) ? T(t) : Q(t) ? (e.enter("whitespace"), e.consume(t), m) : 124 === t ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : n(t)
                        }

                        function T(t) {
                            return (e.exit("tableDelimiterRow"), i && s === o.length) ? null === t ? _(t) : e.check(rk, _, e.attempt({
                                tokenize: x,
                                partial: !0
                            }, J(e, b, "linePrefix", 4), _))(t) : n(t)
                        }

                        function _(n) {
                            return e.exit("table"), t(n)
                        }

                        function b(t) {
                            return e.enter("tableBody"), A(t)
                        }

                        function A(t) {
                            return (e.enter("tableRow"), 124 === t) ? y(t) : (e.enter("temporaryTableCellContent"), C(t))
                        }

                        function y(t) {
                            return e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), N
                        }

                        function N(t) {
                            return null === t || Y(t) ? (e.exit("tableRow"), null === t) ? O(t) : e.check(rk, O, e.attempt({
                                tokenize: x,
                                partial: !0
                            }, J(e, A, "linePrefix", 4), O))(t) : Q(t) ? (e.enter("whitespace"), e.consume(t), k) : 124 === t ? y(t) : (e.enter("temporaryTableCellContent"), C(t))
                        }

                        function k(t) {
                            return Q(t) ? (e.consume(t), k) : (e.exit("whitespace"), N(t))
                        }

                        function C(t) {
                            return null === t || 124 === t || W(t) ? (e.exit("temporaryTableCellContent"), N(t)) : (e.consume(t), 92 === t ? S : C)
                        }

                        function S(t) {
                            return 92 === t || 124 === t ? (e.consume(t), C) : C(t)
                        }

                        function O(t) {
                            return e.exit("tableBody"), _(t)
                        }

                        function x(e, t, n) {
                            return function (t) {
                                return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), J(e, r, "linePrefix")
                            };

                            function r(r) {
                                if (a.parser.lazy[a.now().line] || null === r || Y(r)) return n(r);
                                let i = a.events[a.events.length - 1];
                                return !a.parser.constructs.disable.null.includes("codeIndented") && i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? n(r) : (a._gfmTableDynamicInterruptHack = !0, e.check(a.parser.constructs.flow, function (e) {
                                    return a._gfmTableDynamicInterruptHack = !1, n(e)
                                }, function (e) {
                                    return a._gfmTableDynamicInterruptHack = !1, t(e)
                                })(r))
                            }
                        }
                    }, resolve: function (e, t) {
                        let n, r, i, a, o, s, l, c = -1;
                        for (; ++c < e.length;) {
                            let u = e[c][1];
                            if (i && ("temporaryTableCellContent" === u.type && (a = a || c, o = c), ("tableCellDivider" === u.type || "tableRow" === u.type) && o)) {
                                let n = {type: "tableContent", start: e[a][1].start, end: e[o][1].end},
                                    r = {type: "chunkText", start: n.start, end: n.end, contentType: "text"};
                                e.splice(a, o - a + 1, ["enter", n, t], ["enter", r, t], ["exit", r, t], ["exit", n, t]), c -= o - a - 3, a = void 0, o = void 0
                            }
                            if ("exit" === e[c][0] && void 0 !== s && s + (l ? 0 : 1) < c && ("tableCellDivider" === u.type || "tableRow" === u.type && (s + 3 < c || "whitespace" !== e[s][1].type))) {
                                let i = {
                                    type: r ? "tableDelimiter" : n ? "tableHeader" : "tableData",
                                    start: e[s][1].start,
                                    end: e[c][1].end
                                };
                                e.splice(c + ("tableCellDivider" === u.type ? 1 : 0), 0, ["exit", i, t]), e.splice(s, 0, ["enter", i, t]), c += 2, s = c + 1, l = !0
                            }
                            "tableRow" === u.type && (i = "enter" === e[c][0]) && (s = c + 1, l = !1), "tableDelimiterRow" === u.type && (r = "enter" === e[c][0]) && (s = c + 1, l = !1), "tableHead" === u.type && (n = "enter" === e[c][0])
                        }
                        return e
                    }
                }
            }
        }, rk = {
            tokenize: function (e, t, n) {
                let r = 0;
                return function (t) {
                    return e.enter("check"), e.consume(t), i
                };

                function i(a) {
                    return -1 === a || 32 === a ? (e.consume(a), 4 == ++r ? t : i) : null === a || W(a) ? t(a) : n(a)
                }
            }, partial: !0
        }, rC = {
            text: {
                91: {
                    tokenize: function (e, t, n) {
                        let r = this;
                        return function (t) {
                            return null === r.previous && r._gfmTasklistFirstContentOfListItem ? (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), i) : n(t)
                        };

                        function i(t) {
                            return W(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), a) : 88 === t || 120 === t ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), a) : n(t)
                        }

                        function a(r) {
                            return 93 === r ? (e.enter("taskListCheckMarker"), e.consume(r), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), e.check({tokenize: rS}, t, n)) : n(r)
                        }
                    }
                }
            }
        };

        function rS(e, t, n) {
            let r = this;
            return J(e, function (e) {
                let i = r.events[r.events.length - 1];
                return (i && "whitespace" === i[1].type || Y(e)) && null !== e ? t(e) : n(e)
            }, "whitespace")
        }

        function rO(e, t) {
            let n = String(e);
            if ("string" != typeof t) throw TypeError("Expected character");
            let r = 0, i = n.indexOf(t);
            for (; -1 !== i;) r++, i = n.indexOf(t, i + t.length);
            return r
        }

        let rx = {}.hasOwnProperty, rv = function (e, t, n, r) {
            let i, a;
            "string" == typeof t || t instanceof RegExp ? (a = [[t, n]], i = r) : (a = t, i = n), i || (i = {});
            let o = tr(i.ignore || []), s = function (e) {
                let t = [];
                if ("object" != typeof e) throw TypeError("Expected array or object as schema");
                if (Array.isArray(e)) {
                    let n = -1;
                    for (; ++n < e.length;) t.push([rI(e[n][0]), rw(e[n][1])])
                } else {
                    let n;
                    for (n in e) rx.call(e, n) && t.push([rI(n), rw(e[n])])
                }
                return t
            }(a), l = -1;
            for (; ++l < s.length;) to(e, "text", c);
            return e;

            function c(e, t) {
                let n, r = -1;
                for (; ++r < t.length;) {
                    let e = t[r];
                    if (o(e, n ? n.children.indexOf(e) : void 0, n)) return;
                    n = e
                }
                if (n) return function (e, t) {
                    let n = t[t.length - 1], r = s[l][0], i = s[l][1], a = 0, o = n.children.indexOf(e), c = !1, u = [];
                    r.lastIndex = 0;
                    let d = r.exec(e.value);
                    for (; d;) {
                        let n = d.index, o = {index: d.index, input: d.input, stack: [...t, e]}, s = i(...d, o);
                        if ("string" == typeof s && (s = s.length > 0 ? {
                            type: "text",
                            value: s
                        } : void 0), !1 !== s && (a !== n && u.push({
                            type: "text",
                            value: e.value.slice(a, n)
                        }), Array.isArray(s) ? u.push(...s) : s && u.push(s), a = n + d[0].length, c = !0), !r.global) break;
                        d = r.exec(e.value)
                    }
                    return c ? (a < e.value.length && u.push({
                        type: "text",
                        value: e.value.slice(a)
                    }), n.children.splice(o, 1, ...u)) : u = [e], o + u.length
                }(e, t)
            }
        };

        function rI(e) {
            return "string" == typeof e ? RegExp(function (e) {
                if ("string" != typeof e) throw TypeError("Expected a string");
                return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
            }(e), "g") : e
        }

        function rw(e) {
            return "function" == typeof e ? e : () => e
        }

        let rR = "phrasing", rM = ["autolink", "link", "image", "label"], rL = {
            transforms: [function (e) {
                rv(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, rF], [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, rH]], {ignore: ["link", "linkReference"]})
            }], enter: {
                literalAutolink: function (e) {
                    this.enter({type: "link", title: null, url: "", children: []}, e)
                }, literalAutolinkEmail: rP, literalAutolinkHttp: rP, literalAutolinkWww: rP
            }, exit: {
                literalAutolink: function (e) {
                    this.exit(e)
                }, literalAutolinkEmail: function (e) {
                    this.config.exit.autolinkEmail.call(this, e)
                }, literalAutolinkHttp: function (e) {
                    this.config.exit.autolinkProtocol.call(this, e)
                }, literalAutolinkWww: function (e) {
                    this.config.exit.data.call(this, e);
                    let t = this.stack[this.stack.length - 1];
                    t.url = "http://" + this.sliceSerialize(e)
                }
            }
        }, rD = {
            unsafe: [{
                character: "@",
                before: "[+\\-.\\w]",
                after: "[\\-.\\w]",
                inConstruct: rR,
                notInConstruct: rM
            }, {
                character: ".",
                before: "[Ww]",
                after: "[\\-.\\w]",
                inConstruct: rR,
                notInConstruct: rM
            }, {character: ":", before: "[ps]", after: "\\/", inConstruct: rR, notInConstruct: rM}]
        };

        function rP(e) {
            this.config.enter.autolinkProtocol.call(this, e)
        }

        function rF(e, t, n, r, i) {
            let a = "";
            if (!rB(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !function (e) {
                let t = e.split(".");
                return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])))
            }(n))) return !1;
            let o = function (e) {
                let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
                if (!t) return [e, void 0];
                e = e.slice(0, t.index);
                let n = t[0], r = n.indexOf(")"), i = rO(e, "("), a = rO(e, ")");
                for (; -1 !== r && i > a;) e += n.slice(0, r + 1), r = (n = n.slice(r + 1)).indexOf(")"), a++;
                return [e, n]
            }(n + r);
            if (!o[0]) return !1;
            let s = {type: "link", title: null, url: a + t + o[0], children: [{type: "text", value: t + o[0]}]};
            return o[1] ? [s, {type: "text", value: o[1]}] : s
        }

        function rH(e, t, n, r) {
            return !(!rB(r, !0) || /[-\d_]$/.test(n)) && {
                type: "link",
                title: null,
                url: "mailto:" + t + "@" + n,
                children: [{type: "text", value: t + "@" + n}]
            }
        }

        function rB(e, t) {
            let n = e.input.charCodeAt(e.index - 1);
            return (0 === e.index || V(n) || X(n)) && (!t || 47 !== n)
        }

        function rU(e) {
            return e.label || !e.identifier ? e.label || "" : e8(e.identifier)
        }

        let rK = /\r?\n|\r/g;

        function rG(e) {
            this.enter({type: "footnoteDefinition", identifier: "", label: "", children: []}, e)
        }

        function rz() {
            this.buffer()
        }

        function rj(e) {
            let t = this.resume(), n = this.stack[this.stack.length - 1];
            n.label = t, n.identifier = ek(this.sliceSerialize(e)).toLowerCase()
        }

        function r$(e) {
            this.exit(e)
        }

        function rq(e) {
            this.enter({type: "footnoteReference", identifier: "", label: ""}, e)
        }

        function rW() {
            this.buffer()
        }

        function rY(e) {
            let t = this.resume(), n = this.stack[this.stack.length - 1];
            n.label = t, n.identifier = ek(this.sliceSerialize(e)).toLowerCase()
        }

        function rQ(e) {
            this.exit(e)
        }

        function rV(e, t, n, r) {
            let i = nA(r), a = i.move("[^"), o = n.enter("footnoteReference"), s = n.enter("reference");
            return a += i.move(nT(n, rU(e), {...i.current(), before: a, after: "]"})), s(), o(), a += i.move("]")
        }

        function rX(e, t, n, r) {
            let i = nA(r), a = i.move("[^"), o = n.enter("footnoteDefinition"), s = n.enter("label");
            return a += i.move(nT(n, rU(e), {
                ...i.current(),
                before: a,
                after: "]"
            })), s(), a += i.move("]:" + (e.children && e.children.length > 0 ? " " : "")), i.shift(4), a += i.move(function (e, t) {
                let n;
                let r = [], i = 0, a = 0;
                for (; n = rK.exec(e);) o(e.slice(i, n.index)), r.push(n[0]), i = n.index + n[0].length, a++;
                return o(e.slice(i)), r.join("");

                function o(e) {
                    r.push(t(e, a, !e))
                }
            }(function (e, t, n) {
                let r = t.indexStack, i = e.children || [], a = t.createTracker(n), o = [], s = -1;
                for (r.push(-1); ++s < i.length;) {
                    let n = i[s];
                    r[r.length - 1] = s, o.push(a.move(t.handle(n, e, t, {
                        before: "\n",
                        after: "\n", ...a.current()
                    }))), "list" !== n.type && (t.bulletLastUsed = void 0), s < i.length - 1 && o.push(a.move(function (e, t, n, r) {
                        let i = r.join.length;
                        for (; i--;) {
                            let a = r.join[i](e, t, n, r);
                            if (!0 === a || 1 === a) break;
                            if ("number" == typeof a) return "\n".repeat(1 + a);
                            if (!1 === a) return "\n\n<!---->\n\n"
                        }
                        return "\n\n"
                    }(n, i[s + 1], e, t)))
                }
                return r.pop(), o.join("")
            }(e, n, i.current()), rZ)), o(), a
        }

        function rZ(e, t, n) {
            return 0 === t ? e : (n ? "" : "    ") + e
        }

        function rJ(e, t, n) {
            let r = t.indexStack, i = e.children || [], a = [], o = -1, s = n.before;
            r.push(-1);
            let l = t.createTracker(n);
            for (; ++o < i.length;) {
                let c;
                let u = i[o];
                if (r[r.length - 1] = o, o + 1 < i.length) {
                    let n = t.handle.handlers[i[o + 1].type];
                    n && n.peek && (n = n.peek), c = n ? n(i[o + 1], e, t, {
                        before: "",
                        after: "", ...l.current()
                    }).charAt(0) : ""
                } else c = n.after;
                a.length > 0 && ("\r" === s || "\n" === s) && "html" === u.type && (a[a.length - 1] = a[a.length - 1].replace(/(\r?\n|\r)$/, " "), s = " ", (l = t.createTracker(n)).move(a.join(""))), a.push(l.move(t.handle(u, e, t, {
                    ...l.current(),
                    before: s,
                    after: c
                }))), s = a[a.length - 1].slice(-1)
            }
            return r.pop(), a.join("")
        }

        rV.peek = function () {
            return "["
        }, r9.peek = function () {
            return "~"
        };
        let r1 = {
            canContainEols: ["delete"], enter: {
                strikethrough: function (e) {
                    this.enter({type: "delete", children: []}, e)
                }
            }, exit: {
                strikethrough: function (e) {
                    this.exit(e)
                }
            }
        }, r0 = {
            unsafe: [{
                character: "~",
                inConstruct: "phrasing",
                notInConstruct: ["autolink", "destinationLiteral", "destinationRaw", "reference", "titleQuote", "titleApostrophe"]
            }], handlers: {delete: r9}
        };

        function r9(e, t, n, r) {
            let i = nA(r), a = n.enter("strikethrough"), o = i.move("~~");
            return o += rJ(e, n, {...i.current(), before: o, after: "~"}) + i.move("~~"), a(), o
        }

        function r5(e, t, n) {
            let r = e.value || "", i = "`", a = -1;
            for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
            for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length;) {
                let e;
                let t = n.unsafe[a], i = ng(t);
                if (t.atBreak) for (; e = i.exec(r);) {
                    let t = e.index;
                    10 === r.charCodeAt(t) && 13 === r.charCodeAt(t - 1) && t--, r = r.slice(0, t) + " " + r.slice(e.index + 1)
                }
            }
            return i + r + i
        }

        function r4(e) {
            return e.length
        }

        function r8(e) {
            let t = "string" == typeof e ? e.codePointAt(0) : 0;
            return 67 === t || 99 === t ? 99 : 76 === t || 108 === t ? 108 : 82 === t || 114 === t ? 114 : 0
        }

        r5.peek = function () {
            return "`"
        };
        let r2 = {
            enter: {
                table: function (e) {
                    let t = e._align;
                    this.enter({
                        type: "table",
                        align: t.map(e => "none" === e ? null : e),
                        children: []
                    }, e), this.setData("inTable", !0)
                }, tableData: r7, tableHeader: r7, tableRow: function (e) {
                    this.enter({type: "tableRow", children: []}, e)
                }
            }, exit: {
                codeText: function (e) {
                    let t = this.resume();
                    this.getData("inTable") && (t = t.replace(/\\([\\|])/g, r3));
                    let n = this.stack[this.stack.length - 1];
                    n.value = t, this.exit(e)
                }, table: function (e) {
                    this.exit(e), this.setData("inTable")
                }, tableData: r6, tableHeader: r6, tableRow: r6
            }
        };

        function r6(e) {
            this.exit(e)
        }

        function r7(e) {
            this.enter({type: "tableCell", children: []}, e)
        }

        function r3(e, t) {
            return "|" === t ? t : e
        }

        let ie = {
            exit: {
                taskListCheckValueChecked: ir, taskListCheckValueUnchecked: ir, paragraph: function (e) {
                    let t = this.stack[this.stack.length - 2];
                    if (t && "listItem" === t.type && "boolean" == typeof t.checked) {
                        let e = this.stack[this.stack.length - 1], n = e.children[0];
                        if (n && "text" === n.type) {
                            let r;
                            let i = t.children, a = -1;
                            for (; ++a < i.length;) {
                                let e = i[a];
                                if ("paragraph" === e.type) {
                                    r = e;
                                    break
                                }
                            }
                            r === e && (n.value = n.value.slice(1), 0 === n.value.length ? e.children.shift() : e.position && n.position && "number" == typeof n.position.start.offset && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)))
                        }
                    }
                    this.exit(e)
                }
            }
        }, it = {
            unsafe: [{atBreak: !0, character: "-", after: "[:|-]"}], handlers: {
                listItem: function (e, t, n, r) {
                    let i = e.children[0], a = "boolean" == typeof e.checked && i && "paragraph" === i.type,
                        o = "[" + (e.checked ? "x" : " ") + "] ", s = nA(r);
                    a && s.move(o);
                    let l = function (e, t, n, r) {
                        let i = function (e) {
                            let t = e.options.listItemIndent || "tab";
                            if (1 === t || "1" === t) return "one";
                            if ("tab" !== t && "one" !== t && "mixed" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
                            return t
                        }(n), a = n.bulletCurrent || function (e) {
                            let t = e.options.bullet || "*";
                            if ("*" !== t && "+" !== t && "-" !== t) throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
                            return t
                        }(n);
                        t && "list" === t.type && t.ordered && (a = ("number" == typeof t.start && t.start > -1 ? t.start : 1) + (!1 === n.options.incrementListMarker ? 0 : t.children.indexOf(e)) + a);
                        let o = a.length + 1;
                        ("tab" === i || "mixed" === i && (t && "list" === t.type && t.spread || e.spread)) && (o = 4 * Math.ceil(o / 4));
                        let s = n.createTracker(r);
                        s.move(a + " ".repeat(o - a.length)), s.shift(o);
                        let l = n.enter("listItem"),
                            c = n.indentLines(n.containerFlow(e, s.current()), function (e, t, n) {
                                return t ? (n ? "" : " ".repeat(o)) + e : (n ? a : a + " ".repeat(o - a.length)) + e
                            });
                        return l(), c
                    }(e, t, n, {...r, ...s.current()});
                    return a && (l = l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, function (e) {
                        return e + o
                    })), l
                }
            }
        };

        function ir(e) {
            let t = this.stack[this.stack.length - 2];
            t.checked = "taskListCheckValueChecked" === e.type
        }

        function ii(e = {}) {
            let t = this.data();

            function n(e, n) {
                let r = t[e] ? t[e] : t[e] = [];
                r.push(n)
            }

            n("micromarkExtensions", B([rs, {
                document: {91: {tokenize: rb, continuation: {tokenize: rA}, exit: ry}},
                text: {91: {tokenize: r_}, 93: {add: "after", tokenize: rE, resolveTo: rT}}
            }, function (e = {}) {
                let t = e.singleTilde, n = {
                    tokenize: function (e, n, r) {
                        let i = this.previous, a = this.events, o = 0;
                        return function (s) {
                            return 126 === i && "characterEscape" !== a[a.length - 1][1].type ? r(s) : (e.enter("strikethroughSequenceTemporary"), function a(s) {
                                let l = ez(i);
                                if (126 === s) return o > 1 ? r(s) : (e.consume(s), o++, a);
                                if (o < 2 && !t) return r(s);
                                let c = e.exit("strikethroughSequenceTemporary"), u = ez(s);
                                return c._open = !u || 2 === u && !!l, c._close = !l || 2 === l && !!u, n(s)
                            }(s))
                        }
                    }, resolveAll: function (e, t) {
                        let n = -1;
                        for (; ++n < e.length;) if ("enter" === e[n][0] && "strikethroughSequenceTemporary" === e[n][1].type && e[n][1]._close) {
                            let r = n;
                            for (; r--;) if ("exit" === e[r][0] && "strikethroughSequenceTemporary" === e[r][1].type && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset == e[r][1].end.offset - e[r][1].start.offset) {
                                e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
                                let i = {
                                    type: "strikethrough",
                                    start: Object.assign({}, e[r][1].start),
                                    end: Object.assign({}, e[n][1].end)
                                }, a = {
                                    type: "strikethroughText",
                                    start: Object.assign({}, e[r][1].end),
                                    end: Object.assign({}, e[n][1].start)
                                }, o = [["enter", i, t], ["enter", e[r][1], t], ["exit", e[r][1], t], ["enter", a, t]];
                                P(o, o.length, 0, em(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), P(o, o.length, 0, [["exit", a, t], ["enter", e[n][1], t], ["exit", e[n][1], t], ["exit", i, t]]), P(e, r - 1, n - r + 3, o), n = r + o.length - 2;
                                break
                            }
                        }
                        for (n = -1; ++n < e.length;) "strikethroughSequenceTemporary" === e[n][1].type && (e[n][1].type = "data");
                        return e
                    }
                };
                return null == t && (t = !0), {text: {126: n}, insideSpan: {null: [n]}, attentionMarkers: {null: [126]}}
            }(e), rN, rC])), n("fromMarkdownExtensions", [rL, {
                enter: {
                    gfmFootnoteDefinition: rG,
                    gfmFootnoteDefinitionLabelString: rz,
                    gfmFootnoteCall: rq,
                    gfmFootnoteCallString: rW
                },
                exit: {
                    gfmFootnoteDefinition: r$,
                    gfmFootnoteDefinitionLabelString: rj,
                    gfmFootnoteCall: rQ,
                    gfmFootnoteCallString: rY
                }
            }, r1, r2, ie]), n("toMarkdownExtensions", {
                extensions: [rD, {
                    unsafe: [{character: "[", inConstruct: ["phrasing", "label", "reference"]}],
                    handlers: {footnoteDefinition: rX, footnoteReference: rV}
                }, r0, function (e) {
                    let t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength,
                        a = n ? " " : "|";
                    return {
                        unsafe: [{character: "\r", inConstruct: "tableCell"}, {
                            character: "\n",
                            inConstruct: "tableCell"
                        }, {atBreak: !0, character: "|", after: "[	 :-]"}, {
                            character: "|",
                            inConstruct: "tableCell"
                        }, {atBreak: !0, character: ":", after: "-"}, {atBreak: !0, character: "-", after: "[:|-]"}],
                        handlers: {
                            table: function (e, t, n, r) {
                                return s(function (e, t, n) {
                                    let r = e.children, i = -1, a = [], o = t.enter("table");
                                    for (; ++i < r.length;) a[i] = l(r[i], t, n);
                                    return o(), a
                                }(e, n, r), e.align)
                            }, tableRow: function (e, t, n, r) {
                                let i = l(e, n, r), a = s([i]);
                                return a.slice(0, a.indexOf("\n"))
                            }, tableCell: o, inlineCode: function (e, t, n) {
                                let r = r5(e, t, n);
                                return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r
                            }
                        }
                    };

                    function o(e, t, n, r) {
                        let i = n.enter("tableCell"), o = n.enter("phrasing"),
                            s = rJ(e, n, {...r, before: a, after: a});
                        return o(), i(), s
                    }

                    function s(e, t) {
                        return function (e, t = {}) {
                            let n = (t.align || []).concat(), r = t.stringLength || r4, i = [], a = [], o = [], s = [],
                                l = 0, c = -1;
                            for (; ++c < e.length;) {
                                let n = [], i = [], d = -1;
                                for (e[c].length > l && (l = e[c].length); ++d < e[c].length;) {
                                    var u;
                                    let a = null == (u = e[c][d]) ? "" : String(u);
                                    if (!1 !== t.alignDelimiters) {
                                        let e = r(a);
                                        i[d] = e, (void 0 === s[d] || e > s[d]) && (s[d] = e)
                                    }
                                    n.push(a)
                                }
                                a[c] = n, o[c] = i
                            }
                            let d = -1;
                            if ("object" == typeof n && "length" in n) for (; ++d < l;) i[d] = r8(n[d]); else {
                                let e = r8(n);
                                for (; ++d < l;) i[d] = e
                            }
                            d = -1;
                            let p = [], h = [];
                            for (; ++d < l;) {
                                let e = i[d], n = "", r = "";
                                99 === e ? (n = ":", r = ":") : 108 === e ? n = ":" : 114 === e && (r = ":");
                                let a = !1 === t.alignDelimiters ? 1 : Math.max(1, s[d] - n.length - r.length),
                                    o = n + "-".repeat(a) + r;
                                !1 !== t.alignDelimiters && ((a = n.length + a + r.length) > s[d] && (s[d] = a), h[d] = a), p[d] = o
                            }
                            a.splice(1, 0, p), o.splice(1, 0, h), c = -1;
                            let m = [];
                            for (; ++c < a.length;) {
                                let e = a[c], n = o[c];
                                d = -1;
                                let r = [];
                                for (; ++d < l;) {
                                    let a = e[d] || "", o = "", c = "";
                                    if (!1 !== t.alignDelimiters) {
                                        let e = s[d] - (n[d] || 0), t = i[d];
                                        114 === t ? o = " ".repeat(e) : 99 === t ? e % 2 ? (o = " ".repeat(e / 2 + .5), c = " ".repeat(e / 2 - .5)) : c = o = " ".repeat(e / 2) : c = " ".repeat(e)
                                    }
                                    !1 === t.delimiterStart || d || r.push("|"), !1 !== t.padding && !(!1 === t.alignDelimiters && "" === a) && (!1 !== t.delimiterStart || d) && r.push(" "), !1 !== t.alignDelimiters && r.push(o), r.push(a), !1 !== t.alignDelimiters && r.push(c), !1 !== t.padding && r.push(" "), (!1 !== t.delimiterEnd || d !== l - 1) && r.push("|")
                                }
                                m.push(!1 === t.delimiterEnd ? r.join("").replace(/ +$/, "") : r.join(""))
                            }
                            return m.join("\n")
                        }(e, {align: t, alignDelimiters: r, padding: n, stringLength: i})
                    }

                    function l(e, t, n) {
                        let r = e.children, i = -1, a = [], s = t.enter("tableRow");
                        for (; ++i < r.length;) a[i] = o(r[i], e, t, n);
                        return s(), a
                    }
                }(e), it]
            })
        }

        let ia = e => ({
                IMPORTANT: {scope: "meta", begin: "!important"},
                BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
                HEXCOLOR: {scope: "number", begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},
                FUNCTION_DISPATCH: {className: "built_in", begin: /[\w-]+(?=\()/},
                ATTRIBUTE_SELECTOR_MODE: {
                    scope: "selector-attr",
                    begin: /\[/,
                    end: /\]/,
                    illegal: "$",
                    contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                },
                CSS_NUMBER_MODE: {
                    scope: "number",
                    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                    relevance: 0
                },
                CSS_VARIABLE: {className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/}
            }),
            io = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
            is = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
            il = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
            ic = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
            iu = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse();
        var id = "[0-9](_*[0-9])*", ip = `\\.(${id})`, ih = "[0-9a-fA-F](_*[0-9a-fA-F])*", im = {
            className: "number",
            variants: [{begin: `(\\b(${id})((${ip})|\\.)?|(${ip}))[eE][+-]?(${id})[fFdD]?\\b`}, {begin: `\\b(${id})((${ip})[fFdD]?\\b|\\.([fFdD]\\b)?)`}, {begin: `(${ip})[fFdD]?\\b`}, {begin: `\\b(${id})[fFdD]\\b`}, {begin: `\\b0[xX]((${ih})\\.?|(${ih})?\\.(${ih}))[pP][+-]?(${id})[fFdD]?\\b`}, {begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"}, {begin: `\\b0[xX](${ih})[lL]?\\b`}, {begin: "\\b0(_*[0-7])*[lL]?\\b"}, {begin: "\\b0[bB][01](_*[01])*[lL]?\\b"}],
            relevance: 0
        };
        let ig = "[A-Za-z$_][0-9A-Za-z$_]*",
            iE = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
            iT = ["true", "false", "null", "undefined", "NaN", "Infinity"],
            i_ = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
            ib = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
            iA = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
            iy = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
            iN = [].concat(iA, i_, ib);
        var ik = "[0-9](_*[0-9])*", iC = `\\.(${ik})`, iS = "[0-9a-fA-F](_*[0-9a-fA-F])*", iO = {
            className: "number",
            variants: [{begin: `(\\b(${ik})((${iC})|\\.)?|(${iC}))[eE][+-]?(${ik})[fFdD]?\\b`}, {begin: `\\b(${ik})((${iC})[fFdD]?\\b|\\.([fFdD]\\b)?)`}, {begin: `(${iC})[fFdD]?\\b`}, {begin: `\\b(${ik})[fFdD]\\b`}, {begin: `\\b0[xX]((${iS})\\.?|(${iS})?\\.(${iS}))[pP][+-]?(${ik})[fFdD]?\\b`}, {begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b"}, {begin: `\\b0[xX](${iS})[lL]?\\b`}, {begin: "\\b0(_*[0-7])*[lL]?\\b"}, {begin: "\\b0[bB][01](_*[01])*[lL]?\\b"}],
            relevance: 0
        };
        let ix = e => ({
                IMPORTANT: {scope: "meta", begin: "!important"},
                BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
                HEXCOLOR: {scope: "number", begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},
                FUNCTION_DISPATCH: {className: "built_in", begin: /[\w-]+(?=\()/},
                ATTRIBUTE_SELECTOR_MODE: {
                    scope: "selector-attr",
                    begin: /\[/,
                    end: /\]/,
                    illegal: "$",
                    contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                },
                CSS_NUMBER_MODE: {
                    scope: "number",
                    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                    relevance: 0
                },
                CSS_VARIABLE: {className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/}
            }),
            iv = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
            iI = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
            iw = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
            iR = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
            iM = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse(),
            iL = iw.concat(iR), iD = e => ({
                IMPORTANT: {scope: "meta", begin: "!important"},
                BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
                HEXCOLOR: {scope: "number", begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/},
                FUNCTION_DISPATCH: {className: "built_in", begin: /[\w-]+(?=\()/},
                ATTRIBUTE_SELECTOR_MODE: {
                    scope: "selector-attr",
                    begin: /\[/,
                    end: /\]/,
                    illegal: "$",
                    contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                },
                CSS_NUMBER_MODE: {
                    scope: "number",
                    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                    relevance: 0
                },
                CSS_VARIABLE: {className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/}
            }),
            iP = ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"],
            iF = ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"],
            iH = ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"],
            iB = ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"],
            iU = ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-blend-mode", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "block-size", "border", "border-block", "border-block-color", "border-block-end", "border-block-end-color", "border-block-end-style", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-style", "border-block-start-width", "border-block-style", "border-block-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-inline", "border-inline-color", "border-inline-end", "border-inline-end-color", "border-inline-end-style", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-style", "border-inline-start-width", "border-inline-style", "border-inline-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "inline-size", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-block", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-block-size", "max-height", "max-inline-size", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-block", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "scrollbar-color", "scrollbar-gutter", "scrollbar-width", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse();

        function iK(e) {
            return e ? "string" == typeof e ? e : e.source : null
        }

        function iG(e) {
            return iz("(?=", e, ")")
        }

        function iz(...e) {
            let t = e.map(e => iK(e)).join("");
            return t
        }

        function ij(...e) {
            let t = function (e) {
                let t = e[e.length - 1];
                return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {}
            }(e), n = "(" + (t.capture ? "" : "?:") + e.map(e => iK(e)).join("|") + ")";
            return n
        }

        let i$ = e => iz(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/), iq = ["Protocol", "Type"].map(i$),
            iW = ["init", "self"].map(i$), iY = ["Any", "Self"],
            iQ = ["actor", "any", "associatedtype", "async", "await", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "distributed", "do", "dynamic", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "isolated", "nonisolated", "lazy", "let", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"],
            iV = ["false", "nil", "true"],
            iX = ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"],
            iZ = ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"],
            iJ = ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"],
            i1 = ij(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/),
            i0 = ij(i1, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/),
            i9 = iz(i1, i0, "*"),
            i5 = ij(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/),
            i4 = ij(i5, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/), i8 = iz(i5, i4, "*"),
            i2 = iz(/[A-Z]/, i4, "*"),
            i6 = ["autoclosure", iz(/convention\(/, ij("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", iz(/objc\(/, i8, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "resultBuilder", "testable", "UIApplicationMain", "unknown", "usableFromInline"],
            i7 = ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"],
            i3 = "[A-Za-z$_][0-9A-Za-z$_]*",
            ae = ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"],
            at = ["true", "false", "null", "undefined", "NaN", "Infinity"],
            an = ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"],
            ar = ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"],
            ai = ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"],
            aa = ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"],
            ao = [].concat(ai, an, ar);
        var as = n(7848), al = n(2129);
        let ac = Object.assign(au(Error), {
            eval: au(EvalError),
            range: au(RangeError),
            reference: au(ReferenceError),
            syntax: au(SyntaxError),
            type: au(TypeError),
            uri: au(URIError)
        });

        function au(e) {
            return t.displayName = e.displayName || e.name, t;

            function t(n, ...r) {
                let i = n ? al(n, ...r) : n;
                return new e(i)
            }
        }

        let ad = {}.hasOwnProperty, ap = "hljs-";

        function ah(e, t, n = {}) {
            let r = n.prefix;
            if ("string" != typeof e) throw ac("Expected `string` for name, got `%s`", e);
            if (!as.getLanguage(e)) throw ac("Unknown language: `%s` is not registered", e);
            if ("string" != typeof t) throw ac("Expected `string` for value, got `%s`", t);
            null == r && (r = ap), as.configure({__emitter: am, classPrefix: r});
            let i = as.highlight(t, {language: e, ignoreIllegals: !0});
            if (as.configure({}), i.errorRaised) throw i.errorRaised;
            return i._emitter.root.data.language = i.language, i._emitter.root.data.relevance = i.relevance, i._emitter.root
        }

        class am {
            constructor(e) {
                this.options = e, this.root = {
                    type: "root",
                    data: {language: null, relevance: 0},
                    children: []
                }, this.stack = [this.root]
            }

            addText(e) {
                if ("" === e) return;
                let t = this.stack[this.stack.length - 1], n = t.children[t.children.length - 1];
                n && "text" === n.type ? n.value += e : t.children.push({type: "text", value: e})
            }

            addKeyword(e, t) {
                this.openNode(t), this.addText(e), this.closeNode()
            }

            addSublanguage(e, t) {
                let n = this.stack[this.stack.length - 1], r = e.root.children;
                t ? n.children.push({
                    type: "element",
                    tagName: "span",
                    properties: {className: [t]},
                    children: r
                }) : n.children.push(...r)
            }

            openNode(e) {
                let t = e.split(".").map((e, t) => t ? e + "_".repeat(t) : this.options.classPrefix + e),
                    n = this.stack[this.stack.length - 1],
                    r = {type: "element", tagName: "span", properties: {className: t}, children: []};
                n.children.push(r), this.stack.push(r)
            }

            closeNode() {
                this.stack.pop()
            }

            closeAllNodes() {
            }

            finalize() {
            }

            toHTML() {
                return ""
            }
        }

        let af = {
            highlight: ah, highlightAuto: function (e, t = {}) {
                let n = t.subset || as.listLanguages(), r = t.prefix, i = -1,
                    a = {type: "root", data: {language: null, relevance: 0}, children: []};
                if (null == r && (r = ap), "string" != typeof e) throw ac("Expected `string` for value, got `%s`", e);
                for (; ++i < n.length;) {
                    let r = n[i];
                    if (!as.getLanguage(r)) continue;
                    let o = ah(r, e, t);
                    o.data.relevance > a.data.relevance && (a = o)
                }
                return a
            }, registerLanguage: function (e, t) {
                as.registerLanguage(e, t)
            }, registered: function (e) {
                return !!as.getLanguage(e)
            }, listLanguages: function () {
                return as.listLanguages()
            }, registerAlias: function (e, t) {
                if ("string" == typeof e) as.registerAliases(t, {languageName: e}); else {
                    let t;
                    for (t in e) ad.call(e, t) && as.registerAliases(e[t], {languageName: t})
                }
            }
        };
        af.registerLanguage("arduino", function (e) {
            let t = {
                type: ["boolean", "byte", "word", "String"],
                built_in: ["KeyboardController", "MouseController", "SoftwareSerial", "EthernetServer", "EthernetClient", "LiquidCrystal", "RobotControl", "GSMVoiceCall", "EthernetUDP", "EsploraTFT", "HttpClient", "RobotMotor", "WiFiClient", "GSMScanner", "FileSystem", "Scheduler", "GSMServer", "YunClient", "YunServer", "IPAddress", "GSMClient", "GSMModem", "Keyboard", "Ethernet", "Console", "GSMBand", "Esplora", "Stepper", "Process", "WiFiUDP", "GSM_SMS", "Mailbox", "USBHost", "Firmata", "PImage", "Client", "Server", "GSMPIN", "FileIO", "Bridge", "Serial", "EEPROM", "Stream", "Mouse", "Audio", "Servo", "File", "Task", "GPRS", "WiFi", "Wire", "TFT", "GSM", "SPI", "SD"],
                _hints: ["setup", "loop", "runShellCommandAsynchronously", "analogWriteResolution", "retrieveCallingNumber", "printFirmwareVersion", "analogReadResolution", "sendDigitalPortPair", "noListenOnLocalhost", "readJoystickButton", "setFirmwareVersion", "readJoystickSwitch", "scrollDisplayRight", "getVoiceCallStatus", "scrollDisplayLeft", "writeMicroseconds", "delayMicroseconds", "beginTransmission", "getSignalStrength", "runAsynchronously", "getAsynchronously", "listenOnLocalhost", "getCurrentCarrier", "readAccelerometer", "messageAvailable", "sendDigitalPorts", "lineFollowConfig", "countryNameWrite", "runShellCommand", "readStringUntil", "rewindDirectory", "readTemperature", "setClockDivider", "readLightSensor", "endTransmission", "analogReference", "detachInterrupt", "countryNameRead", "attachInterrupt", "encryptionType", "readBytesUntil", "robotNameWrite", "readMicrophone", "robotNameRead", "cityNameWrite", "userNameWrite", "readJoystickY", "readJoystickX", "mouseReleased", "openNextFile", "scanNetworks", "noInterrupts", "digitalWrite", "beginSpeaker", "mousePressed", "isActionDone", "mouseDragged", "displayLogos", "noAutoscroll", "addParameter", "remoteNumber", "getModifiers", "keyboardRead", "userNameRead", "waitContinue", "processInput", "parseCommand", "printVersion", "readNetworks", "writeMessage", "blinkVersion", "cityNameRead", "readMessage", "setDataMode", "parsePacket", "isListening", "setBitOrder", "beginPacket", "isDirectory", "motorsWrite", "drawCompass", "digitalRead", "clearScreen", "serialEvent", "rightToLeft", "setTextSize", "leftToRight", "requestFrom", "keyReleased", "compassRead", "analogWrite", "interrupts", "WiFiServer", "disconnect", "playMelody", "parseFloat", "autoscroll", "getPINUsed", "setPINUsed", "setTimeout", "sendAnalog", "readSlider", "analogRead", "beginWrite", "createChar", "motorsStop", "keyPressed", "tempoWrite", "readButton", "subnetMask", "debugPrint", "macAddress", "writeGreen", "randomSeed", "attachGPRS", "readString", "sendString", "remotePort", "releaseAll", "mouseMoved", "background", "getXChange", "getYChange", "answerCall", "getResult", "voiceCall", "endPacket", "constrain", "getSocket", "writeJSON", "getButton", "available", "connected", "findUntil", "readBytes", "exitValue", "readGreen", "writeBlue", "startLoop", "IPAddress", "isPressed", "sendSysex", "pauseMode", "gatewayIP", "setCursor", "getOemKey", "tuneWrite", "noDisplay", "loadImage", "switchPIN", "onRequest", "onReceive", "changePIN", "playFile", "noBuffer", "parseInt", "overflow", "checkPIN", "knobRead", "beginTFT", "bitClear", "updateIR", "bitWrite", "position", "writeRGB", "highByte", "writeRed", "setSpeed", "readBlue", "noStroke", "remoteIP", "transfer", "shutdown", "hangCall", "beginSMS", "endWrite", "attached", "maintain", "noCursor", "checkReg", "checkPUK", "shiftOut", "isValid", "shiftIn", "pulseIn", "connect", "println", "localIP", "pinMode", "getIMEI", "display", "noBlink", "process", "getBand", "running", "beginSD", "drawBMP", "lowByte", "setBand", "release", "bitRead", "prepare", "pointTo", "readRed", "setMode", "noFill", "remove", "listen", "stroke", "detach", "attach", "noTone", "exists", "buffer", "height", "bitSet", "circle", "config", "cursor", "random", "IRread", "setDNS", "endSMS", "getKey", "micros", "millis", "begin", "print", "write", "ready", "flush", "width", "isPIN", "blink", "clear", "press", "mkdir", "rmdir", "close", "point", "yield", "image", "BSSID", "click", "delay", "read", "text", "move", "peek", "beep", "rect", "line", "open", "seek", "fill", "size", "turn", "stop", "home", "find", "step", "tone", "sqrt", "RSSI", "SSID", "end", "bit", "tan", "cos", "sin", "pow", "map", "abs", "max", "min", "get", "run", "put"],
                literal: ["DIGITAL_MESSAGE", "FIRMATA_STRING", "ANALOG_MESSAGE", "REPORT_DIGITAL", "REPORT_ANALOG", "INPUT_PULLUP", "SET_PIN_MODE", "INTERNAL2V56", "SYSTEM_RESET", "LED_BUILTIN", "INTERNAL1V1", "SYSEX_START", "INTERNAL", "EXTERNAL", "DEFAULT", "OUTPUT", "INPUT", "HIGH", "LOW"]
            }, n = function (e) {
                let t = e.regex, n = e.COMMENT("//", "$", {contains: [{begin: /\\\n/}]}), r = "decltype\\(auto\\)",
                    i = "[a-zA-Z_]\\w*::",
                    a = "(?!struct)(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")",
                    o = {className: "type", begin: "\\b[a-z\\d_]*_t\\b"}, s = {
                        className: "string",
                        variants: [{
                            begin: '(u8?|U|L)?"',
                            end: '"',
                            illegal: "\\n",
                            contains: [e.BACKSLASH_ESCAPE]
                        }, {
                            begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                            end: "'",
                            illegal: "."
                        }, e.END_SAME_AS_BEGIN({begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, end: /\)([^()\\ ]{0,16})"/})]
                    }, l = {
                        className: "number",
                        variants: [{begin: "\\b(0b[01']+)"}, {begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"}, {begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],
                        relevance: 0
                    }, c = {
                        className: "meta",
                        begin: /#\s*[a-z]+\b/,
                        end: /$/,
                        keywords: {keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},
                        contains: [{begin: /\\\n/, relevance: 0}, e.inherit(s, {className: "string"}), {
                            className: "string",
                            begin: /<.*?>/
                        }, n, e.C_BLOCK_COMMENT_MODE]
                    }, u = {className: "title", begin: t.optional(i) + e.IDENT_RE, relevance: 0},
                    d = t.optional(i) + e.IDENT_RE + "\\s*\\(", p = {
                        type: ["bool", "char", "char16_t", "char32_t", "char8_t", "double", "float", "int", "long", "short", "void", "wchar_t", "unsigned", "signed", "const", "static"],
                        keyword: ["alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel", "atomic_commit", "atomic_noexcept", "auto", "bitand", "bitor", "break", "case", "catch", "class", "co_await", "co_return", "co_yield", "compl", "concept", "const_cast|10", "consteval", "constexpr", "constinit", "continue", "decltype", "default", "delete", "do", "dynamic_cast|10", "else", "enum", "explicit", "export", "extern", "false", "final", "for", "friend", "goto", "if", "import", "inline", "module", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "override", "private", "protected", "public", "reflexpr", "register", "reinterpret_cast|10", "requires", "return", "sizeof", "static_assert", "static_cast|10", "struct", "switch", "synchronized", "template", "this", "thread_local", "throw", "transaction_safe", "transaction_safe_dynamic", "true", "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile", "while", "xor", "xor_eq"],
                        literal: ["NULL", "false", "nullopt", "nullptr", "true"],
                        built_in: ["_Pragma"],
                        _type_hints: ["any", "auto_ptr", "barrier", "binary_semaphore", "bitset", "complex", "condition_variable", "condition_variable_any", "counting_semaphore", "deque", "false_type", "future", "imaginary", "initializer_list", "istringstream", "jthread", "latch", "lock_guard", "multimap", "multiset", "mutex", "optional", "ostringstream", "packaged_task", "pair", "promise", "priority_queue", "queue", "recursive_mutex", "recursive_timed_mutex", "scoped_lock", "set", "shared_future", "shared_lock", "shared_mutex", "shared_timed_mutex", "shared_ptr", "stack", "string_view", "stringstream", "timed_mutex", "thread", "true_type", "tuple", "unique_lock", "unique_ptr", "unordered_map", "unordered_multimap", "unordered_multiset", "unordered_set", "variant", "vector", "weak_ptr", "wstring", "wstring_view"]
                    }, h = {
                        className: "function.dispatch",
                        relevance: 0,
                        keywords: {_hint: ["abort", "abs", "acos", "apply", "as_const", "asin", "atan", "atan2", "calloc", "ceil", "cerr", "cin", "clog", "cos", "cosh", "cout", "declval", "endl", "exchange", "exit", "exp", "fabs", "floor", "fmod", "forward", "fprintf", "fputs", "free", "frexp", "fscanf", "future", "invoke", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "labs", "launder", "ldexp", "log", "log10", "make_pair", "make_shared", "make_shared_for_overwrite", "make_tuple", "make_unique", "malloc", "memchr", "memcmp", "memcpy", "memset", "modf", "move", "pow", "printf", "putchar", "puts", "realloc", "scanf", "sin", "sinh", "snprintf", "sprintf", "sqrt", "sscanf", "std", "stderr", "stdin", "stdout", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "swap", "tan", "tanh", "terminate", "to_underlying", "tolower", "toupper", "vfprintf", "visit", "vprintf", "vsprintf"]},
                        begin: t.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, t.lookahead(/(<[^<>]+>|)\s*\(/))
                    }, m = [h, c, o, n, e.C_BLOCK_COMMENT_MODE, l, s], f = {
                        variants: [{begin: /=/, end: /;/}, {
                            begin: /\(/,
                            end: /\)/
                        }, {beginKeywords: "new throw return else", end: /;/}],
                        keywords: p,
                        contains: m.concat([{
                            begin: /\(/,
                            end: /\)/,
                            keywords: p,
                            contains: m.concat(["self"]),
                            relevance: 0
                        }]),
                        relevance: 0
                    }, g = {
                        className: "function",
                        begin: "(" + a + "[\\*&\\s]+)+" + d,
                        returnBegin: !0,
                        end: /[{;=]/,
                        excludeEnd: !0,
                        keywords: p,
                        illegal: /[^\w\s\*&:<>.]/,
                        contains: [{begin: r, keywords: p, relevance: 0}, {
                            begin: d,
                            returnBegin: !0,
                            contains: [u],
                            relevance: 0
                        }, {begin: /::/, relevance: 0}, {begin: /:/, endsWithParent: !0, contains: [s, l]}, {
                            relevance: 0,
                            match: /,/
                        }, {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            keywords: p,
                            relevance: 0,
                            contains: [n, e.C_BLOCK_COMMENT_MODE, s, l, o, {
                                begin: /\(/,
                                end: /\)/,
                                keywords: p,
                                relevance: 0,
                                contains: ["self", n, e.C_BLOCK_COMMENT_MODE, s, l, o]
                            }]
                        }, o, n, e.C_BLOCK_COMMENT_MODE, c]
                    };
                return {
                    name: "C++",
                    aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
                    keywords: p,
                    illegal: "</",
                    classNameAliases: {"function.dispatch": "built_in"},
                    contains: [].concat(f, g, h, m, [c, {
                        begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
                        end: ">",
                        keywords: p,
                        contains: ["self", o]
                    }, {
                        begin: e.IDENT_RE + "::",
                        keywords: p
                    }, {
                        match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/],
                        className: {1: "keyword", 3: "title.class"}
                    }])
                }
            }(e), r = n.keywords;
            return r.type = [...r.type, ...t.type], r.literal = [...r.literal, ...t.literal], r.built_in = [...r.built_in, ...t.built_in], r._hints = t._hints, n.name = "Arduino", n.aliases = ["ino"], n.supersetOf = "cpp", n
        }), af.registerLanguage("bash", function (e) {
            let t = e.regex, n = {};
            Object.assign(n, {
                className: "variable",
                variants: [{begin: t.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])")}, {
                    begin: /\$\{/,
                    end: /\}/,
                    contains: ["self", {begin: /:-/, contains: [n]}]
                }]
            });
            let r = {className: "subst", begin: /\$\(/, end: /\)/, contains: [e.BACKSLASH_ESCAPE]}, i = {
                begin: /<<-?\s*(?=\w+)/,
                starts: {contains: [e.END_SAME_AS_BEGIN({begin: /(\w+)/, end: /(\w+)/, className: "string"})]}
            }, a = {className: "string", begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, n, r]};
            r.contains.push(a);
            let o = {
                begin: /\$?\(\(/,
                end: /\)\)/,
                contains: [{begin: /\d+#[0-9a-f]+/, className: "number"}, e.NUMBER_MODE, n]
            }, s = e.SHEBANG({binary: "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)", relevance: 10}), l = {
                className: "function",
                begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                returnBegin: !0,
                contains: [e.inherit(e.TITLE_MODE, {begin: /\w[\w\d_]*/})],
                relevance: 0
            };
            return {
                name: "Bash",
                aliases: ["sh"],
                keywords: {
                    $pattern: /\b[a-z][a-z0-9._-]+\b/,
                    keyword: ["if", "then", "else", "elif", "fi", "for", "while", "in", "do", "done", "case", "esac", "function"],
                    literal: ["true", "false"],
                    built_in: ["break", "cd", "continue", "eval", "exec", "exit", "export", "getopts", "hash", "pwd", "readonly", "return", "shift", "test", "times", "trap", "umask", "unset", "alias", "bind", "builtin", "caller", "command", "declare", "echo", "enable", "help", "let", "local", "logout", "mapfile", "printf", "read", "readarray", "source", "type", "typeset", "ulimit", "unalias", "set", "shopt", "autoload", "bg", "bindkey", "bye", "cap", "chdir", "clone", "comparguments", "compcall", "compctl", "compdescribe", "compfiles", "compgroups", "compquote", "comptags", "comptry", "compvalues", "dirs", "disable", "disown", "echotc", "echoti", "emulate", "fc", "fg", "float", "functions", "getcap", "getln", "history", "integer", "jobs", "kill", "limit", "log", "noglob", "popd", "print", "pushd", "pushln", "rehash", "sched", "setcap", "setopt", "stat", "suspend", "ttyctl", "unfunction", "unhash", "unlimit", "unsetopt", "vared", "wait", "whence", "where", "which", "zcompile", "zformat", "zftp", "zle", "zmodload", "zparseopts", "zprof", "zpty", "zregexparse", "zsocket", "zstyle", "ztcp", "chcon", "chgrp", "chown", "chmod", "cp", "dd", "df", "dir", "dircolors", "ln", "ls", "mkdir", "mkfifo", "mknod", "mktemp", "mv", "realpath", "rm", "rmdir", "shred", "sync", "touch", "truncate", "vdir", "b2sum", "base32", "base64", "cat", "cksum", "comm", "csplit", "cut", "expand", "fmt", "fold", "head", "join", "md5sum", "nl", "numfmt", "od", "paste", "ptx", "pr", "sha1sum", "sha224sum", "sha256sum", "sha384sum", "sha512sum", "shuf", "sort", "split", "sum", "tac", "tail", "tr", "tsort", "unexpand", "uniq", "wc", "arch", "basename", "chroot", "date", "dirname", "du", "echo", "env", "expr", "factor", "groups", "hostid", "id", "link", "logname", "nice", "nohup", "nproc", "pathchk", "pinky", "printenv", "printf", "pwd", "readlink", "runcon", "seq", "sleep", "stat", "stdbuf", "stty", "tee", "test", "timeout", "tty", "uname", "unlink", "uptime", "users", "who", "whoami", "yes"]
                },
                contains: [s, e.SHEBANG(), l, o, e.HASH_COMMENT_MODE, i, {match: /(\/[a-z._-]+)+/}, a, {
                    className: "",
                    begin: /\\"/
                }, {className: "string", begin: /'/, end: /'/}, n]
            }
        }), af.registerLanguage("c", function (e) {
            let t = e.regex, n = e.COMMENT("//", "$", {contains: [{begin: /\\\n/}]}), r = "decltype\\(auto\\)",
                i = "[a-zA-Z_]\\w*::",
                a = "(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")",
                o = {className: "type", variants: [{begin: "\\b[a-z\\d_]*_t\\b"}, {match: /\batomic_[a-z]{3,6}\b/}]},
                s = {
                    className: "string",
                    variants: [{
                        begin: '(u8?|U|L)?"',
                        end: '"',
                        illegal: "\\n",
                        contains: [e.BACKSLASH_ESCAPE]
                    }, {
                        begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                        end: "'",
                        illegal: "."
                    }, e.END_SAME_AS_BEGIN({begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, end: /\)([^()\\ ]{0,16})"/})]
                }, l = {
                    className: "number",
                    variants: [{begin: "\\b(0b[01']+)"}, {begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"}, {begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],
                    relevance: 0
                }, c = {
                    className: "meta",
                    begin: /#\s*[a-z]+\b/,
                    end: /$/,
                    keywords: {keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},
                    contains: [{begin: /\\\n/, relevance: 0}, e.inherit(s, {className: "string"}), {
                        className: "string",
                        begin: /<.*?>/
                    }, n, e.C_BLOCK_COMMENT_MODE]
                }, u = {className: "title", begin: t.optional(i) + e.IDENT_RE, relevance: 0},
                d = t.optional(i) + e.IDENT_RE + "\\s*\\(", p = {
                    keyword: ["asm", "auto", "break", "case", "continue", "default", "do", "else", "enum", "extern", "for", "fortran", "goto", "if", "inline", "register", "restrict", "return", "sizeof", "struct", "switch", "typedef", "union", "volatile", "while", "_Alignas", "_Alignof", "_Atomic", "_Generic", "_Noreturn", "_Static_assert", "_Thread_local", "alignas", "alignof", "noreturn", "static_assert", "thread_local", "_Pragma"],
                    type: ["float", "double", "signed", "unsigned", "int", "short", "long", "char", "void", "_Bool", "_Complex", "_Imaginary", "_Decimal32", "_Decimal64", "_Decimal128", "const", "static", "complex", "bool", "imaginary"],
                    literal: "true false NULL",
                    built_in: "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr"
                }, h = [c, o, n, e.C_BLOCK_COMMENT_MODE, l, s], m = {
                    variants: [{begin: /=/, end: /;/}, {
                        begin: /\(/,
                        end: /\)/
                    }, {beginKeywords: "new throw return else", end: /;/}],
                    keywords: p,
                    contains: h.concat([{begin: /\(/, end: /\)/, keywords: p, contains: h.concat(["self"]), relevance: 0}]),
                    relevance: 0
                }, f = {
                    begin: "(" + a + "[\\*&\\s]+)+" + d,
                    returnBegin: !0,
                    end: /[{;=]/,
                    excludeEnd: !0,
                    keywords: p,
                    illegal: /[^\w\s\*&:<>.]/,
                    contains: [{begin: r, keywords: p, relevance: 0}, {
                        begin: d,
                        returnBegin: !0,
                        contains: [e.inherit(u, {className: "title.function"})],
                        relevance: 0
                    }, {relevance: 0, match: /,/}, {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        keywords: p,
                        relevance: 0,
                        contains: [n, e.C_BLOCK_COMMENT_MODE, s, l, o, {
                            begin: /\(/,
                            end: /\)/,
                            keywords: p,
                            relevance: 0,
                            contains: ["self", n, e.C_BLOCK_COMMENT_MODE, s, l, o]
                        }]
                    }, o, n, e.C_BLOCK_COMMENT_MODE, c]
                };
            return {
                name: "C",
                aliases: ["h"],
                keywords: p,
                disableAutodetect: !0,
                illegal: "</",
                contains: [].concat(m, f, h, [c, {begin: e.IDENT_RE + "::", keywords: p}, {
                    className: "class",
                    beginKeywords: "enum class struct union",
                    end: /[{;:<>=]/,
                    contains: [{beginKeywords: "final class struct"}, e.TITLE_MODE]
                }]),
                exports: {preprocessor: c, strings: s, keywords: p}
            }
        }), af.registerLanguage("cpp", function (e) {
            let t = e.regex, n = e.COMMENT("//", "$", {contains: [{begin: /\\\n/}]}), r = "decltype\\(auto\\)",
                i = "[a-zA-Z_]\\w*::",
                a = "(?!struct)(" + r + "|" + t.optional(i) + "[a-zA-Z_]\\w*" + t.optional("<[^<>]+>") + ")",
                o = {className: "type", begin: "\\b[a-z\\d_]*_t\\b"}, s = {
                    className: "string",
                    variants: [{
                        begin: '(u8?|U|L)?"',
                        end: '"',
                        illegal: "\\n",
                        contains: [e.BACKSLASH_ESCAPE]
                    }, {
                        begin: "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",
                        end: "'",
                        illegal: "."
                    }, e.END_SAME_AS_BEGIN({begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, end: /\)([^()\\ ]{0,16})"/})]
                }, l = {
                    className: "number",
                    variants: [{begin: "\\b(0b[01']+)"}, {begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)"}, {begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],
                    relevance: 0
                }, c = {
                    className: "meta",
                    begin: /#\s*[a-z]+\b/,
                    end: /$/,
                    keywords: {keyword: "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},
                    contains: [{begin: /\\\n/, relevance: 0}, e.inherit(s, {className: "string"}), {
                        className: "string",
                        begin: /<.*?>/
                    }, n, e.C_BLOCK_COMMENT_MODE]
                }, u = {className: "title", begin: t.optional(i) + e.IDENT_RE, relevance: 0},
                d = t.optional(i) + e.IDENT_RE + "\\s*\\(", p = {
                    type: ["bool", "char", "char16_t", "char32_t", "char8_t", "double", "float", "int", "long", "short", "void", "wchar_t", "unsigned", "signed", "const", "static"],
                    keyword: ["alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel", "atomic_commit", "atomic_noexcept", "auto", "bitand", "bitor", "break", "case", "catch", "class", "co_await", "co_return", "co_yield", "compl", "concept", "const_cast|10", "consteval", "constexpr", "constinit", "continue", "decltype", "default", "delete", "do", "dynamic_cast|10", "else", "enum", "explicit", "export", "extern", "false", "final", "for", "friend", "goto", "if", "import", "inline", "module", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "override", "private", "protected", "public", "reflexpr", "register", "reinterpret_cast|10", "requires", "return", "sizeof", "static_assert", "static_cast|10", "struct", "switch", "synchronized", "template", "this", "thread_local", "throw", "transaction_safe", "transaction_safe_dynamic", "true", "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile", "while", "xor", "xor_eq"],
                    literal: ["NULL", "false", "nullopt", "nullptr", "true"],
                    built_in: ["_Pragma"],
                    _type_hints: ["any", "auto_ptr", "barrier", "binary_semaphore", "bitset", "complex", "condition_variable", "condition_variable_any", "counting_semaphore", "deque", "false_type", "future", "imaginary", "initializer_list", "istringstream", "jthread", "latch", "lock_guard", "multimap", "multiset", "mutex", "optional", "ostringstream", "packaged_task", "pair", "promise", "priority_queue", "queue", "recursive_mutex", "recursive_timed_mutex", "scoped_lock", "set", "shared_future", "shared_lock", "shared_mutex", "shared_timed_mutex", "shared_ptr", "stack", "string_view", "stringstream", "timed_mutex", "thread", "true_type", "tuple", "unique_lock", "unique_ptr", "unordered_map", "unordered_multimap", "unordered_multiset", "unordered_set", "variant", "vector", "weak_ptr", "wstring", "wstring_view"]
                }, h = {
                    className: "function.dispatch",
                    relevance: 0,
                    keywords: {_hint: ["abort", "abs", "acos", "apply", "as_const", "asin", "atan", "atan2", "calloc", "ceil", "cerr", "cin", "clog", "cos", "cosh", "cout", "declval", "endl", "exchange", "exit", "exp", "fabs", "floor", "fmod", "forward", "fprintf", "fputs", "free", "frexp", "fscanf", "future", "invoke", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "labs", "launder", "ldexp", "log", "log10", "make_pair", "make_shared", "make_shared_for_overwrite", "make_tuple", "make_unique", "malloc", "memchr", "memcmp", "memcpy", "memset", "modf", "move", "pow", "printf", "putchar", "puts", "realloc", "scanf", "sin", "sinh", "snprintf", "sprintf", "sqrt", "sscanf", "std", "stderr", "stdin", "stdout", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "swap", "tan", "tanh", "terminate", "to_underlying", "tolower", "toupper", "vfprintf", "visit", "vprintf", "vsprintf"]},
                    begin: t.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, t.lookahead(/(<[^<>]+>|)\s*\(/))
                }, m = [h, c, o, n, e.C_BLOCK_COMMENT_MODE, l, s], f = {
                    variants: [{begin: /=/, end: /;/}, {
                        begin: /\(/,
                        end: /\)/
                    }, {beginKeywords: "new throw return else", end: /;/}],
                    keywords: p,
                    contains: m.concat([{begin: /\(/, end: /\)/, keywords: p, contains: m.concat(["self"]), relevance: 0}]),
                    relevance: 0
                }, g = {
                    className: "function",
                    begin: "(" + a + "[\\*&\\s]+)+" + d,
                    returnBegin: !0,
                    end: /[{;=]/,
                    excludeEnd: !0,
                    keywords: p,
                    illegal: /[^\w\s\*&:<>.]/,
                    contains: [{begin: r, keywords: p, relevance: 0}, {
                        begin: d,
                        returnBegin: !0,
                        contains: [u],
                        relevance: 0
                    }, {begin: /::/, relevance: 0}, {begin: /:/, endsWithParent: !0, contains: [s, l]}, {
                        relevance: 0,
                        match: /,/
                    }, {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        keywords: p,
                        relevance: 0,
                        contains: [n, e.C_BLOCK_COMMENT_MODE, s, l, o, {
                            begin: /\(/,
                            end: /\)/,
                            keywords: p,
                            relevance: 0,
                            contains: ["self", n, e.C_BLOCK_COMMENT_MODE, s, l, o]
                        }]
                    }, o, n, e.C_BLOCK_COMMENT_MODE, c]
                };
            return {
                name: "C++",
                aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
                keywords: p,
                illegal: "</",
                classNameAliases: {"function.dispatch": "built_in"},
                contains: [].concat(f, g, h, m, [c, {
                    begin: "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
                    end: ">",
                    keywords: p,
                    contains: ["self", o]
                }, {
                    begin: e.IDENT_RE + "::",
                    keywords: p
                }, {
                    match: [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/],
                    className: {1: "keyword", 3: "title.class"}
                }])
            }
        }), af.registerLanguage("csharp", function (e) {
            let t = {
                    keyword: ["abstract", "as", "base", "break", "case", "catch", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "scoped", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"].concat(["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"]),
                    built_in: ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "uint", "ushort"],
                    literal: ["default", "false", "null", "true"]
                }, n = e.inherit(e.TITLE_MODE, {begin: "[a-zA-Z](\\.?\\w)*"}), r = {
                    className: "number",
                    variants: [{begin: "\\b(0b[01']+)"}, {begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"}, {begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],
                    relevance: 0
                }, i = {className: "string", begin: '@"', end: '"', contains: [{begin: '""'}]},
                a = e.inherit(i, {illegal: /\n/}), o = {className: "subst", begin: /\{/, end: /\}/, keywords: t},
                s = e.inherit(o, {illegal: /\n/}), l = {
                    className: "string",
                    begin: /\$"/,
                    end: '"',
                    illegal: /\n/,
                    contains: [{begin: /\{\{/}, {begin: /\}\}/}, e.BACKSLASH_ESCAPE, s]
                }, c = {
                    className: "string",
                    begin: /\$@"/,
                    end: '"',
                    contains: [{begin: /\{\{/}, {begin: /\}\}/}, {begin: '""'}, o]
                }, u = e.inherit(c, {illegal: /\n/, contains: [{begin: /\{\{/}, {begin: /\}\}/}, {begin: '""'}, s]});
            o.contains = [c, l, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, r, e.C_BLOCK_COMMENT_MODE], s.contains = [u, l, a, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, r, e.inherit(e.C_BLOCK_COMMENT_MODE, {illegal: /\n/})];
            let d = {variants: [c, l, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]},
                p = {begin: "<", end: ">", contains: [{beginKeywords: "in out"}, n]},
                h = e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?",
                m = {begin: "@" + e.IDENT_RE, relevance: 0};
            return {
                name: "C#",
                aliases: ["cs", "c#"],
                keywords: t,
                illegal: /::/,
                contains: [e.COMMENT("///", "$", {
                    returnBegin: !0,
                    contains: [{
                        className: "doctag",
                        variants: [{begin: "///", relevance: 0}, {begin: "<!--|-->"}, {begin: "</?", end: ">"}]
                    }]
                }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                    className: "meta",
                    begin: "#",
                    end: "$",
                    keywords: {keyword: "if else elif endif define undef warning error line region endregion pragma checksum"}
                }, d, r, {
                    beginKeywords: "class interface",
                    relevance: 0,
                    end: /[{;=]/,
                    illegal: /[^\s:,]/,
                    contains: [{beginKeywords: "where class"}, n, p, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, {
                    beginKeywords: "namespace",
                    relevance: 0,
                    end: /[{;=]/,
                    illegal: /[^\s:]/,
                    contains: [n, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, {
                    beginKeywords: "record",
                    relevance: 0,
                    end: /[{;=]/,
                    illegal: /[^\s:]/,
                    contains: [n, p, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, {
                    className: "meta",
                    begin: "^\\s*\\[(?=[\\w])",
                    excludeBegin: !0,
                    end: "\\]",
                    excludeEnd: !0,
                    contains: [{className: "string", begin: /"/, end: /"/}]
                }, {beginKeywords: "new return throw await else", relevance: 0}, {
                    className: "function",
                    begin: "(" + h + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
                    returnBegin: !0,
                    end: /\s*[{;=]/,
                    excludeEnd: !0,
                    keywords: t,
                    contains: [{
                        beginKeywords: "public private protected static internal protected abstract async extern override unsafe virtual new sealed partial",
                        relevance: 0
                    }, {
                        begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
                        returnBegin: !0,
                        contains: [e.TITLE_MODE, p],
                        relevance: 0
                    }, {match: /\(\)/}, {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: t,
                        relevance: 0,
                        contains: [d, r, e.C_BLOCK_COMMENT_MODE]
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, m]
            }
        }), af.registerLanguage("css", function (e) {
            let t = e.regex, n = ia(e), r = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
            return {
                name: "CSS",
                case_insensitive: !0,
                illegal: /[=|'\$]/,
                keywords: {keyframePosition: "from to"},
                classNameAliases: {keyframePosition: "selector-tag"},
                contains: [n.BLOCK_COMMENT, {begin: /-(webkit|moz|ms|o)-(?=[a-z])/}, n.CSS_NUMBER_MODE, {
                    className: "selector-id",
                    begin: /#[A-Za-z0-9_-]+/,
                    relevance: 0
                }, {
                    className: "selector-class",
                    begin: "\\.[a-zA-Z-][a-zA-Z0-9_-]*",
                    relevance: 0
                }, n.ATTRIBUTE_SELECTOR_MODE, {
                    className: "selector-pseudo",
                    variants: [{begin: ":(" + il.join("|") + ")"}, {begin: ":(:)?(" + ic.join("|") + ")"}]
                }, n.CSS_VARIABLE, {className: "attribute", begin: "\\b(" + iu.join("|") + ")\\b"}, {
                    begin: /:/,
                    end: /[;}{]/,
                    contains: [n.BLOCK_COMMENT, n.HEXCOLOR, n.IMPORTANT, n.CSS_NUMBER_MODE, ...r, {
                        begin: /(url|data-uri)\(/,
                        end: /\)/,
                        relevance: 0,
                        keywords: {built_in: "url data-uri"},
                        contains: [...r, {className: "string", begin: /[^)]/, endsWithParent: !0, excludeEnd: !0}]
                    }, n.FUNCTION_DISPATCH]
                }, {
                    begin: t.lookahead(/@/),
                    end: "[{;]",
                    relevance: 0,
                    illegal: /:/,
                    contains: [{className: "keyword", begin: /@-?\w[\w]*(-\w+)*/}, {
                        begin: /\s/,
                        endsWithParent: !0,
                        excludeEnd: !0,
                        relevance: 0,
                        keywords: {$pattern: /[a-z-]+/, keyword: "and or not only", attribute: is.join(" ")},
                        contains: [{begin: /[a-z-]+(?=:)/, className: "attribute"}, ...r, n.CSS_NUMBER_MODE]
                    }]
                }, {className: "selector-tag", begin: "\\b(" + io.join("|") + ")\\b"}]
            }
        }), af.registerLanguage("diff", function (e) {
            let t = e.regex;
            return {
                name: "Diff",
                aliases: ["patch"],
                contains: [{
                    className: "meta",
                    relevance: 10,
                    match: t.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/)
                }, {
                    className: "comment",
                    variants: [{
                        begin: t.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/),
                        end: /$/
                    }, {match: /^\*{15}$/}]
                }, {className: "addition", begin: /^\+/, end: /$/}, {
                    className: "deletion",
                    begin: /^-/,
                    end: /$/
                }, {className: "addition", begin: /^!/, end: /$/}]
            }
        }), af.registerLanguage("go", function (e) {
            let t = {
                keyword: ["break", "case", "chan", "const", "continue", "default", "defer", "else", "fallthrough", "for", "func", "go", "goto", "if", "import", "interface", "map", "package", "range", "return", "select", "struct", "switch", "type", "var"],
                type: ["bool", "byte", "complex64", "complex128", "error", "float32", "float64", "int8", "int16", "int32", "int64", "string", "uint8", "uint16", "uint32", "uint64", "int", "uint", "uintptr", "rune"],
                literal: ["true", "false", "iota", "nil"],
                built_in: ["append", "cap", "close", "complex", "copy", "imag", "len", "make", "new", "panic", "print", "println", "real", "recover", "delete"]
            };
            return {
                name: "Go",
                aliases: ["golang"],
                keywords: t,
                illegal: "</",
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                    className: "string",
                    variants: [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {begin: "`", end: "`"}]
                }, {
                    className: "number",
                    variants: [{begin: e.C_NUMBER_RE + "[i]", relevance: 1}, e.C_NUMBER_MODE]
                }, {begin: /:=/}, {
                    className: "function",
                    beginKeywords: "func",
                    end: "\\s*(\\{|$)",
                    excludeEnd: !0,
                    contains: [e.TITLE_MODE, {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        endsParent: !0,
                        keywords: t,
                        illegal: /["']/
                    }]
                }]
            }
        }), af.registerLanguage("graphql", function (e) {
            let t = e.regex;
            return {
                name: "GraphQL",
                aliases: ["gql"],
                case_insensitive: !0,
                disableAutodetect: !1,
                keywords: {
                    keyword: ["query", "mutation", "subscription", "type", "input", "schema", "directive", "interface", "union", "scalar", "fragment", "enum", "on"],
                    literal: ["true", "false", "null"]
                },
                contains: [e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, {
                    scope: "punctuation",
                    match: /[.]{3}/,
                    relevance: 0
                }, {scope: "punctuation", begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/, relevance: 0}, {
                    scope: "variable",
                    begin: /\$/,
                    end: /\W/,
                    excludeEnd: !0,
                    relevance: 0
                }, {scope: "meta", match: /@\w+/, excludeEnd: !0}, {
                    scope: "symbol",
                    begin: t.concat(/[_A-Za-z][_0-9A-Za-z]*/, t.lookahead(/\s*:/)),
                    relevance: 0
                }],
                illegal: [/[;<']/, /BEGIN/]
            }
        }), af.registerLanguage("ini", function (e) {
            let t = e.regex, n = {
                className: "number",
                relevance: 0,
                variants: [{begin: /([+-]+)?[\d]+_[\d_]+/}, {begin: e.NUMBER_RE}]
            }, r = e.COMMENT();
            r.variants = [{begin: /;/, end: /$/}, {begin: /#/, end: /$/}];
            let i = {className: "variable", variants: [{begin: /\$[\w\d"][\w\d_]*/}, {begin: /\$\{(.*?)\}/}]},
                a = {className: "literal", begin: /\bon|off|true|false|yes|no\b/}, o = {
                    className: "string",
                    contains: [e.BACKSLASH_ESCAPE],
                    variants: [{begin: "'''", end: "'''", relevance: 10}, {
                        begin: '"""',
                        end: '"""',
                        relevance: 10
                    }, {begin: '"', end: '"'}, {begin: "'", end: "'"}]
                }, s = t.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/),
                l = t.concat(s, "(\\s*\\.\\s*", s, ")*", t.lookahead(/\s*=\s*[^#\s]/));
            return {
                name: "TOML, also INI",
                aliases: ["toml"],
                case_insensitive: !0,
                illegal: /\S/,
                contains: [r, {className: "section", begin: /\[+/, end: /\]+/}, {
                    begin: l,
                    className: "attr",
                    starts: {
                        end: /$/,
                        contains: [r, {
                            begin: /\[/,
                            end: /\]/,
                            contains: [r, a, i, o, n, "self"],
                            relevance: 0
                        }, a, i, o, n]
                    }
                }]
            }
        }), af.registerLanguage("java", function (e) {
            let t = e.regex, n = "[\xc0-ʸa-zA-Z_$][\xc0-ʸa-zA-Z_$0-9]*", r = n + function e(t, n, r) {
                return -1 === r ? "" : t.replace(n, i => e(t, n, r - 1))
            }("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2), i = {
                keyword: ["synchronized", "abstract", "private", "var", "static", "if", "const ", "for", "while", "strictfp", "finally", "protected", "import", "native", "final", "void", "enum", "else", "break", "transient", "catch", "instanceof", "volatile", "case", "assert", "package", "default", "public", "try", "switch", "continue", "throws", "protected", "public", "private", "module", "requires", "exports", "do", "sealed", "yield", "permits"],
                literal: ["false", "true", "null"],
                type: ["char", "boolean", "long", "float", "int", "byte", "short", "double"],
                built_in: ["super", "this"]
            }, a = {className: "meta", begin: "@" + n, contains: [{begin: /\(/, end: /\)/, contains: ["self"]}]}, o = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                keywords: i,
                relevance: 0,
                contains: [e.C_BLOCK_COMMENT_MODE],
                endsParent: !0
            };
            return {
                name: "Java",
                aliases: ["jsp"],
                keywords: i,
                illegal: /<\/|#/,
                contains: [e.COMMENT("/\\*\\*", "\\*/", {
                    relevance: 0,
                    contains: [{begin: /\w+@/, relevance: 0}, {className: "doctag", begin: "@[A-Za-z]+"}]
                }), {
                    begin: /import java\.[a-z]+\./,
                    keywords: "import",
                    relevance: 2
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                    begin: /"""/,
                    end: /"""/,
                    className: "string",
                    contains: [e.BACKSLASH_ESCAPE]
                }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                    match: [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, n],
                    className: {1: "keyword", 3: "title.class"}
                }, {
                    match: /non-sealed/,
                    scope: "keyword"
                }, {
                    begin: [t.concat(/(?!else)/, n), /\s+/, n, /\s+/, /=(?!=)/],
                    className: {1: "type", 3: "variable", 5: "operator"}
                }, {
                    begin: [/record/, /\s+/, n],
                    className: {1: "keyword", 3: "title.class"},
                    contains: [o, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, {
                    beginKeywords: "new throw return else",
                    relevance: 0
                }, {
                    begin: ["(?:" + r + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
                    className: {2: "title.function"},
                    keywords: i,
                    contains: [{
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        keywords: i,
                        relevance: 0,
                        contains: [a, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, im, e.C_BLOCK_COMMENT_MODE]
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, im, a]
            }
        }), af.registerLanguage("javascript", function (e) {
            var t;
            let n = e.regex, r = (e, {after: t}) => {
                    let n = "</" + e[0].slice(1), r = e.input.indexOf(n, t);
                    return -1 !== r
                }, i = {begin: "<>", end: "</>"}, a = {
                    begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (e, t) => {
                        let n;
                        let i = e[0].length + e.index, a = e.input[i];
                        if ("<" === a || "," === a) {
                            t.ignoreMatch();
                            return
                        }
                        ">" !== a || r(e, {after: i}) || t.ignoreMatch();
                        let o = e.input.substring(i);
                        if ((n = o.match(/^\s*=/)) || (n = o.match(/^\s+extends\s+/)) && 0 === n.index) {
                            t.ignoreMatch();
                            return
                        }
                    }
                }, o = {$pattern: ig, keyword: iE, literal: iT, built_in: iN, "variable.language": iy},
                s = "[0-9](_?[0-9])*", l = `\\.(${s})`, c = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", u = {
                    className: "number",
                    variants: [{begin: `(\\b(${c})((${l})|\\.)?|(${l}))[eE][+-]?(${s})\\b`}, {begin: `\\b(${c})\\b((${l})\\b|\\.)?|(${l})\\b`}, {begin: "\\b(0|[1-9](_?[0-9])*)n\\b"}, {begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"}, {begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"}, {begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"}, {begin: "\\b0[0-7]+n?\\b"}],
                    relevance: 0
                }, d = {className: "subst", begin: "\\$\\{", end: "\\}", keywords: o, contains: []}, p = {
                    begin: "html`",
                    end: "",
                    starts: {end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, d], subLanguage: "xml"}
                }, h = {
                    begin: "css`",
                    end: "",
                    starts: {end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, d], subLanguage: "css"}
                }, m = {className: "string", begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE, d]},
                f = e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                    relevance: 0,
                    contains: [{
                        begin: "(?=@[A-Za-z]+)",
                        relevance: 0,
                        contains: [{className: "doctag", begin: "@[A-Za-z]+"}, {
                            className: "type",
                            begin: "\\{",
                            end: "\\}",
                            excludeEnd: !0,
                            excludeBegin: !0,
                            relevance: 0
                        }, {
                            className: "variable",
                            begin: ig + "(?=\\s*(-)|$)",
                            endsParent: !0,
                            relevance: 0
                        }, {begin: /(?=[^\n])\s/, relevance: 0}]
                    }]
                }), g = {className: "comment", variants: [f, e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]},
                E = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, p, h, m, {match: /\$\d+/}, u];
            d.contains = E.concat({begin: /\{/, end: /\}/, keywords: o, contains: ["self"].concat(E)});
            let T = [].concat(g, d.contains),
                _ = T.concat([{begin: /\(/, end: /\)/, keywords: o, contains: ["self"].concat(T)}]), b = {
                    className: "params",
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: o,
                    contains: _
                }, A = {
                    variants: [{
                        match: [/class/, /\s+/, ig, /\s+/, /extends/, /\s+/, n.concat(ig, "(", n.concat(/\./, ig), ")*")],
                        scope: {1: "keyword", 3: "title.class", 5: "keyword", 7: "title.class.inherited"}
                    }, {match: [/class/, /\s+/, ig], scope: {1: "keyword", 3: "title.class"}}]
                }, y = {
                    relevance: 0,
                    match: n.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                    className: "title.class",
                    keywords: {_: [...i_, ...ib]}
                }, N = {
                    match: n.concat(/\b/, (t = [...iA, "super", "import"], n.concat("(?!", t.join("|"), ")")), ig, n.lookahead(/\(/)),
                    className: "title.function",
                    relevance: 0
                }, k = {
                    begin: n.concat(/\./, n.lookahead(n.concat(ig, /(?![0-9A-Za-z$_(])/))),
                    end: ig,
                    excludeBegin: !0,
                    keywords: "prototype",
                    className: "property",
                    relevance: 0
                }, C = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", S = {
                    match: [/const|var|let/, /\s+/, ig, /\s*/, /=\s*/, /(async\s*)?/, n.lookahead(C)],
                    keywords: "async",
                    className: {1: "keyword", 3: "title.function"},
                    contains: [b]
                };
            return {
                name: "Javascript",
                aliases: ["js", "jsx", "mjs", "cjs"],
                keywords: o,
                exports: {PARAMS_CONTAINS: _, CLASS_REFERENCE: y},
                illegal: /#(?![$_A-z])/,
                contains: [e.SHEBANG({label: "shebang", binary: "node", relevance: 5}), {
                    label: "use_strict",
                    className: "meta",
                    relevance: 10,
                    begin: /^\s*['"]use (strict|asm)['"]/
                }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, p, h, m, g, {match: /\$\d+/}, u, y, {
                    className: "attr",
                    begin: ig + n.lookahead(":"),
                    relevance: 0
                }, S, {
                    begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                    keywords: "return throw case",
                    relevance: 0,
                    contains: [g, e.REGEXP_MODE, {
                        className: "function",
                        begin: C,
                        returnBegin: !0,
                        end: "\\s*=>",
                        contains: [{
                            className: "params",
                            variants: [{begin: e.UNDERSCORE_IDENT_RE, relevance: 0}, {
                                className: null,
                                begin: /\(\s*\)/,
                                skip: !0
                            }, {begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: o, contains: _}]
                        }]
                    }, {begin: /,/, relevance: 0}, {match: /\s+/, relevance: 0}, {
                        variants: [{
                            begin: i.begin,
                            end: i.end
                        }, {match: /<[A-Za-z0-9\\._:-]+\s*\/>/}, {
                            begin: a.begin,
                            "on:begin": a.isTrulyOpeningTag,
                            end: a.end
                        }], subLanguage: "xml", contains: [{begin: a.begin, end: a.end, skip: !0, contains: ["self"]}]
                    }]
                }, {
                    variants: [{match: [/function/, /\s+/, ig, /(?=\s*\()/]}, {match: [/function/, /\s*(?=\()/]}],
                    className: {1: "keyword", 3: "title.function"},
                    label: "func.def",
                    contains: [b],
                    illegal: /%/
                }, {beginKeywords: "while if switch catch for"}, {
                    begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                    returnBegin: !0,
                    label: "func.def",
                    contains: [b, e.inherit(e.TITLE_MODE, {begin: ig, className: "title.function"})]
                }, {match: /\.\.\./, relevance: 0}, k, {
                    match: "\\$" + ig,
                    relevance: 0
                }, {
                    match: [/\bconstructor(?=\s*\()/],
                    className: {1: "title.function"},
                    contains: [b]
                }, N, {
                    relevance: 0,
                    match: /\b[A-Z][A-Z_0-9]+\b/,
                    className: "variable.constant"
                }, A, {
                    match: [/get|set/, /\s+/, ig, /(?=\()/],
                    className: {1: "keyword", 3: "title.function"},
                    contains: [{begin: /\(\)/}, b]
                }, {match: /\$[(.]/}]
            }
        }), af.registerLanguage("json", function (e) {
            let t = ["true", "false", "null"], n = {scope: "literal", beginKeywords: t.join(" ")};
            return {
                name: "JSON",
                keywords: {literal: t},
                contains: [{
                    className: "attr",
                    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
                    relevance: 1.01
                }, {
                    match: /[{}[\],:]/,
                    className: "punctuation",
                    relevance: 0
                }, e.QUOTE_STRING_MODE, n, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
                illegal: "\\S"
            }
        }), af.registerLanguage("kotlin", function (e) {
            let t = {
                    keyword: "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
                    built_in: "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
                    literal: "true false null"
                }, n = {className: "symbol", begin: e.UNDERSCORE_IDENT_RE + "@"},
                r = {className: "subst", begin: /\$\{/, end: /\}/, contains: [e.C_NUMBER_MODE]},
                i = {className: "variable", begin: "\\$" + e.UNDERSCORE_IDENT_RE}, a = {
                    className: "string",
                    variants: [{begin: '"""', end: '"""(?=[^"])', contains: [i, r]}, {
                        begin: "'",
                        end: "'",
                        illegal: /\n/,
                        contains: [e.BACKSLASH_ESCAPE]
                    }, {begin: '"', end: '"', illegal: /\n/, contains: [e.BACKSLASH_ESCAPE, i, r]}]
                };
            r.contains.push(a);
            let o = {
                className: "meta",
                begin: "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?"
            }, s = {
                className: "meta",
                begin: "@" + e.UNDERSCORE_IDENT_RE,
                contains: [{begin: /\(/, end: /\)/, contains: [e.inherit(a, {className: "string"}), "self"]}]
            }, l = e.COMMENT("/\\*", "\\*/", {contains: [e.C_BLOCK_COMMENT_MODE]}), c = {
                variants: [{className: "type", begin: e.UNDERSCORE_IDENT_RE}, {
                    begin: /\(/,
                    end: /\)/,
                    contains: []
                }]
            }, u = c;
            return u.variants[1].contains = [c], c.variants[1].contains = [u], {
                name: "Kotlin",
                aliases: ["kt", "kts"],
                keywords: t,
                contains: [e.COMMENT("/\\*\\*", "\\*/", {
                    relevance: 0,
                    contains: [{className: "doctag", begin: "@[A-Za-z]+"}]
                }), e.C_LINE_COMMENT_MODE, l, {
                    className: "keyword",
                    begin: /\b(break|continue|return|this)\b/,
                    starts: {contains: [{className: "symbol", begin: /@\w+/}]}
                }, n, o, s, {
                    className: "function",
                    beginKeywords: "fun",
                    end: "[(]|$",
                    returnBegin: !0,
                    excludeEnd: !0,
                    keywords: t,
                    relevance: 5,
                    contains: [{
                        begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                        returnBegin: !0,
                        relevance: 0,
                        contains: [e.UNDERSCORE_TITLE_MODE]
                    }, {
                        className: "type",
                        begin: /</,
                        end: />/,
                        keywords: "reified",
                        relevance: 0
                    }, {
                        className: "params",
                        begin: /\(/,
                        end: /\)/,
                        endsParent: !0,
                        keywords: t,
                        relevance: 0,
                        contains: [{
                            begin: /:/,
                            end: /[=,\/]/,
                            endsWithParent: !0,
                            contains: [c, e.C_LINE_COMMENT_MODE, l],
                            relevance: 0
                        }, e.C_LINE_COMMENT_MODE, l, o, s, a, e.C_NUMBER_MODE]
                    }, l]
                }, {
                    begin: [/class|interface|trait/, /\s+/, e.UNDERSCORE_IDENT_RE],
                    beginScope: {3: "title.class"},
                    keywords: "class interface trait",
                    end: /[:\{(]|$/,
                    excludeEnd: !0,
                    illegal: "extends implements",
                    contains: [{beginKeywords: "public protected internal private constructor"}, e.UNDERSCORE_TITLE_MODE, {
                        className: "type",
                        begin: /</,
                        end: />/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        relevance: 0
                    }, {
                        className: "type",
                        begin: /[,:]\s*/,
                        end: /[<\(,){\s]|$/,
                        excludeBegin: !0,
                        returnEnd: !0
                    }, o, s]
                }, a, {className: "meta", begin: "^#!/usr/bin/env", end: "$", illegal: "\n"}, iO]
            }
        }), af.registerLanguage("less", function (e) {
            let t = ix(e), n = "[\\w-]+", r = "(" + n + "|@\\{" + n + "\\})", i = [], a = [], o = function (e) {
                return {className: "string", begin: "~?" + e + ".*?" + e}
            }, s = function (e, t, n) {
                return {className: e, begin: t, relevance: n}
            }, l = {$pattern: /[a-z-]+/, keyword: "and or not only", attribute: iI.join(" ")};
            a.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, o("'"), o('"'), t.CSS_NUMBER_MODE, {
                begin: "(url|data-uri)\\(",
                starts: {className: "string", end: "[\\)\\n]", excludeEnd: !0}
            }, t.HEXCOLOR, {
                begin: "\\(",
                end: "\\)",
                contains: a,
                keywords: l,
                relevance: 0
            }, s("variable", "@@?" + n, 10), s("variable", "@\\{" + n + "\\}"), s("built_in", "~?`[^`]*?`"), {
                className: "attribute",
                begin: n + "\\s*:",
                end: ":",
                returnBegin: !0,
                excludeEnd: !0
            }, t.IMPORTANT, {beginKeywords: "and not"}, t.FUNCTION_DISPATCH);
            let c = a.concat({begin: /\{/, end: /\}/, contains: i}),
                u = {beginKeywords: "when", endsWithParent: !0, contains: [{beginKeywords: "and not"}].concat(a)}, d = {
                    begin: r + "\\s*:",
                    returnBegin: !0,
                    end: /[;}]/,
                    relevance: 0,
                    contains: [{begin: /-(webkit|moz|ms|o)-/}, t.CSS_VARIABLE, {
                        className: "attribute",
                        begin: "\\b(" + iM.join("|") + ")\\b",
                        end: /(?=:)/,
                        starts: {endsWithParent: !0, illegal: "[<=$]", relevance: 0, contains: a}
                    }]
                }, p = {
                    variants: [{begin: "[\\.#:&\\[>]", end: "[;{}]"}, {begin: r, end: /\{/}],
                    returnBegin: !0,
                    returnEnd: !0,
                    illegal: "[<='$\"]",
                    relevance: 0,
                    contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, u, s("keyword", "all\\b"), s("variable", "@\\{" + n + "\\}"), {
                        begin: "\\b(" + iv.join("|") + ")\\b",
                        className: "selector-tag"
                    }, t.CSS_NUMBER_MODE, s("selector-tag", r, 0), s("selector-id", "#" + r), s("selector-class", "\\." + r, 0), s("selector-tag", "&", 0), t.ATTRIBUTE_SELECTOR_MODE, {
                        className: "selector-pseudo",
                        begin: ":(" + iw.join("|") + ")"
                    }, {className: "selector-pseudo", begin: ":(:)?(" + iR.join("|") + ")"}, {
                        begin: /\(/,
                        end: /\)/,
                        relevance: 0,
                        contains: c
                    }, {begin: "!important"}, t.FUNCTION_DISPATCH]
                }, h = {begin: n + ":(:)?" + `(${iL.join("|")})`, returnBegin: !0, contains: [p]};
            return i.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                className: "keyword",
                begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
                starts: {end: "[;{}]", keywords: l, returnEnd: !0, contains: a, relevance: 0}
            }, {
                className: "variable",
                variants: [{begin: "@" + n + "\\s*:", relevance: 15}, {begin: "@" + n}],
                starts: {end: "[;}]", returnEnd: !0, contains: c}
            }, h, d, p, u, t.FUNCTION_DISPATCH), {
                name: "Less",
                case_insensitive: !0,
                illegal: "[=>'/<($\"]",
                contains: i
            }
        }), af.registerLanguage("lua", function (e) {
            let t = "\\[=*\\[", n = "\\]=*\\]", r = {begin: t, end: n, contains: ["self"]},
                i = [e.COMMENT("--(?!" + t + ")", "$"), e.COMMENT("--" + t, n, {contains: [r], relevance: 10})];
            return {
                name: "Lua",
                keywords: {
                    $pattern: e.UNDERSCORE_IDENT_RE,
                    literal: "true false nil",
                    keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
                    built_in: "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove"
                },
                contains: i.concat([{
                    className: "function",
                    beginKeywords: "function",
                    end: "\\)",
                    contains: [e.inherit(e.TITLE_MODE, {begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}), {
                        className: "params",
                        begin: "\\(",
                        endsWithParent: !0,
                        contains: i
                    }].concat(i)
                }, e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
                    className: "string",
                    begin: t,
                    end: n,
                    contains: [r],
                    relevance: 5
                }])
            }
        }), af.registerLanguage("makefile", function (e) {
            let t = {
                    className: "variable",
                    variants: [{
                        begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
                        contains: [e.BACKSLASH_ESCAPE]
                    }, {begin: /\$[@%<?\^\+\*]/}]
                }, n = {className: "string", begin: /"/, end: /"/, contains: [e.BACKSLASH_ESCAPE, t]},
                r = {begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)"};
            return {
                name: "Makefile",
                aliases: ["mk", "mak", "make"],
                keywords: {
                    $pattern: /[\w-]+/,
                    keyword: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath"
                },
                contains: [e.HASH_COMMENT_MODE, t, n, {
                    className: "variable",
                    begin: /\$\([\w-]+\s/,
                    end: /\)/,
                    keywords: {built_in: "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value"},
                    contains: [t]
                }, r, {
                    className: "meta",
                    begin: /^\.PHONY:/,
                    end: /$/,
                    keywords: {$pattern: /[\.\w]+/, keyword: ".PHONY"}
                }, {className: "section", begin: /^[^\s]+:/, end: /$/, contains: [t]}]
            }
        }), af.registerLanguage("markdown", function (e) {
            let t = e.regex, n = {begin: /<\/?[A-Za-z_]/, end: ">", subLanguage: "xml", relevance: 0}, r = {
                variants: [{
                    begin: /\[.+?\]\[.*?\]/,
                    relevance: 0
                }, {
                    begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
                    relevance: 2
                }, {
                    begin: t.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/),
                    relevance: 2
                }, {begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1}, {begin: /\[.*?\]\(.*?\)/, relevance: 0}],
                returnBegin: !0,
                contains: [{match: /\[(?=\])/}, {
                    className: "string",
                    relevance: 0,
                    begin: "\\[",
                    end: "\\]",
                    excludeBegin: !0,
                    returnEnd: !0
                }, {
                    className: "link",
                    relevance: 0,
                    begin: "\\]\\(",
                    end: "\\)",
                    excludeBegin: !0,
                    excludeEnd: !0
                }, {className: "symbol", relevance: 0, begin: "\\]\\[", end: "\\]", excludeBegin: !0, excludeEnd: !0}]
            }, i = {
                className: "strong",
                contains: [],
                variants: [{begin: /_{2}(?!\s)/, end: /_{2}/}, {begin: /\*{2}(?!\s)/, end: /\*{2}/}]
            }, a = {
                className: "emphasis",
                contains: [],
                variants: [{begin: /\*(?![*\s])/, end: /\*/}, {begin: /_(?![_\s])/, end: /_/, relevance: 0}]
            }, o = e.inherit(i, {contains: []}), s = e.inherit(a, {contains: []});
            i.contains.push(s), a.contains.push(o);
            let l = [n, r];
            [i, a, o, s].forEach(e => {
                e.contains = e.contains.concat(l)
            }), l = l.concat(i, a);
            let c = {
                className: "section",
                variants: [{begin: "^#{1,6}", end: "$", contains: l}, {
                    begin: "(?=^.+?\\n[=-]{2,}$)",
                    contains: [{begin: "^[=-]*$"}, {begin: "^", end: "\\n", contains: l}]
                }]
            }, u = {className: "quote", begin: "^>\\s+", contains: l, end: "$"};
            return {
                name: "Markdown",
                aliases: ["md", "mkdown", "mkd"],
                contains: [c, n, {
                    className: "bullet",
                    begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
                    end: "\\s+",
                    excludeEnd: !0
                }, i, a, u, {
                    className: "code",
                    variants: [{begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*"}, {begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*"}, {
                        begin: "```",
                        end: "```+[ ]*$"
                    }, {begin: "~~~", end: "~~~+[ ]*$"}, {begin: "`.+?`"}, {
                        begin: "(?=^( {4}|\\t))",
                        contains: [{begin: "^( {4}|\\t)", end: "(\\n)$"}],
                        relevance: 0
                    }]
                }, {begin: "^[-\\*]{3,}", end: "$"}, r, {
                    begin: /^\[[^\n]+\]:/,
                    returnBegin: !0,
                    contains: [{
                        className: "symbol",
                        begin: /\[/,
                        end: /\]/,
                        excludeBegin: !0,
                        excludeEnd: !0
                    }, {className: "link", begin: /:\s*/, end: /$/, excludeBegin: !0}]
                }]
            }
        }), af.registerLanguage("objectivec", function (e) {
            let t = /[a-zA-Z@][a-zA-Z0-9_]*/,
                n = {$pattern: t, keyword: ["@interface", "@class", "@protocol", "@implementation"]};
            return {
                name: "Objective-C",
                aliases: ["mm", "objc", "obj-c", "obj-c++", "objective-c++"],
                keywords: {
                    "variable.language": ["this", "super"],
                    $pattern: t,
                    keyword: ["while", "export", "sizeof", "typedef", "const", "struct", "for", "union", "volatile", "static", "mutable", "if", "do", "return", "goto", "enum", "else", "break", "extern", "asm", "case", "default", "register", "explicit", "typename", "switch", "continue", "inline", "readonly", "assign", "readwrite", "self", "@synchronized", "id", "typeof", "nonatomic", "IBOutlet", "IBAction", "strong", "weak", "copy", "in", "out", "inout", "bycopy", "byref", "oneway", "__strong", "__weak", "__block", "__autoreleasing", "@private", "@protected", "@public", "@try", "@property", "@end", "@throw", "@catch", "@finally", "@autoreleasepool", "@synthesize", "@dynamic", "@selector", "@optional", "@required", "@encode", "@package", "@import", "@defs", "@compatibility_alias", "__bridge", "__bridge_transfer", "__bridge_retained", "__bridge_retain", "__covariant", "__contravariant", "__kindof", "_Nonnull", "_Nullable", "_Null_unspecified", "__FUNCTION__", "__PRETTY_FUNCTION__", "__attribute__", "getter", "setter", "retain", "unsafe_unretained", "nonnull", "nullable", "null_unspecified", "null_resettable", "class", "instancetype", "NS_DESIGNATED_INITIALIZER", "NS_UNAVAILABLE", "NS_REQUIRES_SUPER", "NS_RETURNS_INNER_POINTER", "NS_INLINE", "NS_AVAILABLE", "NS_DEPRECATED", "NS_ENUM", "NS_OPTIONS", "NS_SWIFT_UNAVAILABLE", "NS_ASSUME_NONNULL_BEGIN", "NS_ASSUME_NONNULL_END", "NS_REFINED_FOR_SWIFT", "NS_SWIFT_NAME", "NS_SWIFT_NOTHROW", "NS_DURING", "NS_HANDLER", "NS_ENDHANDLER", "NS_VALUERETURN", "NS_VOIDRETURN"],
                    literal: ["false", "true", "FALSE", "TRUE", "nil", "YES", "NO", "NULL"],
                    built_in: ["dispatch_once_t", "dispatch_queue_t", "dispatch_sync", "dispatch_async", "dispatch_once"],
                    type: ["int", "float", "char", "unsigned", "signed", "short", "long", "double", "wchar_t", "unichar", "void", "bool", "BOOL", "id|0", "_Bool"]
                },
                illegal: "</",
                contains: [{
                    className: "built_in",
                    begin: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"
                }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                    className: "string",
                    variants: [{begin: '@"', end: '"', illegal: "\\n", contains: [e.BACKSLASH_ESCAPE]}]
                }, {
                    className: "meta",
                    begin: /#\s*[a-z]+\b/,
                    end: /$/,
                    keywords: {keyword: "if else elif endif define undef warning error line pragma ifdef ifndef include"},
                    contains: [{
                        begin: /\\\n/,
                        relevance: 0
                    }, e.inherit(e.QUOTE_STRING_MODE, {className: "string"}), {
                        className: "string",
                        begin: /<.*?>/,
                        end: /$/,
                        illegal: "\\n"
                    }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE]
                }, {
                    className: "class",
                    begin: "(" + n.keyword.join("|") + ")\\b",
                    end: /(\{|$)/,
                    excludeEnd: !0,
                    keywords: n,
                    contains: [e.UNDERSCORE_TITLE_MODE]
                }, {begin: "\\." + e.UNDERSCORE_IDENT_RE, relevance: 0}]
            }
        }), af.registerLanguage("perl", function (e) {
            let t = e.regex, n = /[dualxmsipngr]{0,12}/, r = {
                    $pattern: /[\w.]+/,
                    keyword: "abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0"
                }, i = {className: "subst", begin: "[$@]\\{", end: "\\}", keywords: r}, a = {begin: /->\{/, end: /\}/},
                o = {
                    variants: [{begin: /\$\d/}, {begin: t.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, "(?![A-Za-z])(?![@$%])")}, {
                        begin: /[$%@][^\s\w{]/,
                        relevance: 0
                    }]
                }, s = [e.BACKSLASH_ESCAPE, i, o], l = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
                c = (e, r, i = "\\1") => {
                    let a = "\\1" === i ? i : t.concat(i, r);
                    return t.concat(t.concat("(?:", e, ")"), r, /(?:\\.|[^\\\/])*?/, a, /(?:\\.|[^\\\/])*?/, i, n)
                }, u = (e, r, i) => t.concat(t.concat("(?:", e, ")"), r, /(?:\\.|[^\\\/])*?/, i, n),
                d = [o, e.HASH_COMMENT_MODE, e.COMMENT(/^=\w/, /=cut/, {endsWithParent: !0}), a, {
                    className: "string",
                    contains: s,
                    variants: [{begin: "q[qwxr]?\\s*\\(", end: "\\)", relevance: 5}, {
                        begin: "q[qwxr]?\\s*\\[",
                        end: "\\]",
                        relevance: 5
                    }, {begin: "q[qwxr]?\\s*\\{", end: "\\}", relevance: 5}, {
                        begin: "q[qwxr]?\\s*\\|",
                        end: "\\|",
                        relevance: 5
                    }, {begin: "q[qwxr]?\\s*<", end: ">", relevance: 5}, {
                        begin: "qw\\s+q",
                        end: "q",
                        relevance: 5
                    }, {begin: "'", end: "'", contains: [e.BACKSLASH_ESCAPE]}, {begin: '"', end: '"'}, {
                        begin: "`",
                        end: "`",
                        contains: [e.BACKSLASH_ESCAPE]
                    }, {begin: /\{\w+\}/, relevance: 0}, {begin: "-?\\w+\\s*=>", relevance: 0}]
                }, {
                    className: "number",
                    begin: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                    relevance: 0
                }, {
                    begin: "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
                    keywords: "split return print reverse grep",
                    relevance: 0,
                    contains: [e.HASH_COMMENT_MODE, {
                        className: "regexp",
                        variants: [{begin: c("s|tr|y", t.either(...l, {capture: !0}))}, {begin: c("s|tr|y", "\\(", "\\)")}, {begin: c("s|tr|y", "\\[", "\\]")}, {begin: c("s|tr|y", "\\{", "\\}")}],
                        relevance: 2
                    }, {
                        className: "regexp",
                        variants: [{
                            begin: /(m|qr)\/\//,
                            relevance: 0
                        }, {begin: u("(?:m|qr)?", /\//, /\//)}, {begin: u("m|qr", t.either(...l, {capture: !0}), /\1/)}, {begin: u("m|qr", /\(/, /\)/)}, {begin: u("m|qr", /\[/, /\]/)}, {begin: u("m|qr", /\{/, /\}/)}]
                    }]
                }, {
                    className: "function",
                    beginKeywords: "sub",
                    end: "(\\s*\\(.*?\\))?[;{]",
                    excludeEnd: !0,
                    relevance: 5,
                    contains: [e.TITLE_MODE]
                }, {begin: "-\\w\\b", relevance: 0}, {
                    begin: "^__DATA__$",
                    end: "^__END__$",
                    subLanguage: "mojolicious",
                    contains: [{begin: "^@@.*", end: "$", className: "comment"}]
                }];
            return i.contains = d, a.contains = d, {name: "Perl", aliases: ["pl", "pm"], keywords: r, contains: d}
        }), af.registerLanguage("php", function (e) {
            let t = e.regex, n = /(?![A-Za-z0-9])(?![$])/, r = t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, n),
                i = t.concat(/(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/, n),
                a = {scope: "variable", match: "\\$+" + r},
                o = {scope: "subst", variants: [{begin: /\$\w+/}, {begin: /\{\$/, end: /\}/}]},
                s = e.inherit(e.APOS_STRING_MODE, {illegal: null}),
                l = e.inherit(e.QUOTE_STRING_MODE, {illegal: null, contains: e.QUOTE_STRING_MODE.contains.concat(o)}),
                c = e.END_SAME_AS_BEGIN({
                    begin: /<<<[ \t]*(\w+)\n/,
                    end: /[ \t]*(\w+)\b/,
                    contains: e.QUOTE_STRING_MODE.contains.concat(o)
                }), u = "[ 	\n]", d = {scope: "string", variants: [l, s, c]}, p = {
                    scope: "number",
                    variants: [{begin: "\\b0[bB][01]+(?:_[01]+)*\\b"}, {begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b"}, {begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b"}, {begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?"}],
                    relevance: 0
                }, h = ["false", "null", "true"],
                m = ["__CLASS__", "__DIR__", "__FILE__", "__FUNCTION__", "__COMPILER_HALT_OFFSET__", "__LINE__", "__METHOD__", "__NAMESPACE__", "__TRAIT__", "die", "echo", "exit", "include", "include_once", "print", "require", "require_once", "array", "abstract", "and", "as", "binary", "bool", "boolean", "break", "callable", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "do", "double", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "enum", "eval", "extends", "final", "finally", "float", "for", "foreach", "from", "global", "goto", "if", "implements", "instanceof", "insteadof", "int", "integer", "interface", "isset", "iterable", "list", "match|0", "mixed", "new", "never", "object", "or", "private", "protected", "public", "readonly", "real", "return", "string", "switch", "throw", "trait", "try", "unset", "use", "var", "void", "while", "xor", "yield"],
                f = ["Error|0", "AppendIterator", "ArgumentCountError", "ArithmeticError", "ArrayIterator", "ArrayObject", "AssertionError", "BadFunctionCallException", "BadMethodCallException", "CachingIterator", "CallbackFilterIterator", "CompileError", "Countable", "DirectoryIterator", "DivisionByZeroError", "DomainException", "EmptyIterator", "ErrorException", "Exception", "FilesystemIterator", "FilterIterator", "GlobIterator", "InfiniteIterator", "InvalidArgumentException", "IteratorIterator", "LengthException", "LimitIterator", "LogicException", "MultipleIterator", "NoRewindIterator", "OutOfBoundsException", "OutOfRangeException", "OuterIterator", "OverflowException", "ParentIterator", "ParseError", "RangeException", "RecursiveArrayIterator", "RecursiveCachingIterator", "RecursiveCallbackFilterIterator", "RecursiveDirectoryIterator", "RecursiveFilterIterator", "RecursiveIterator", "RecursiveIteratorIterator", "RecursiveRegexIterator", "RecursiveTreeIterator", "RegexIterator", "RuntimeException", "SeekableIterator", "SplDoublyLinkedList", "SplFileInfo", "SplFileObject", "SplFixedArray", "SplHeap", "SplMaxHeap", "SplMinHeap", "SplObjectStorage", "SplObserver", "SplPriorityQueue", "SplQueue", "SplStack", "SplSubject", "SplTempFileObject", "TypeError", "UnderflowException", "UnexpectedValueException", "UnhandledMatchError", "ArrayAccess", "BackedEnum", "Closure", "Fiber", "Generator", "Iterator", "IteratorAggregate", "Serializable", "Stringable", "Throwable", "Traversable", "UnitEnum", "WeakReference", "WeakMap", "Directory", "__PHP_Incomplete_Class", "parent", "php_user_filter", "self", "static", "stdClass"],
                g = {
                    keyword: m, literal: (e => {
                        let t = [];
                        return e.forEach(e => {
                            t.push(e), e.toLowerCase() === e ? t.push(e.toUpperCase()) : t.push(e.toLowerCase())
                        }), t
                    })(h), built_in: f
                }, E = e => e.map(e => e.replace(/\|\d+$/, "")), T = {
                    variants: [{
                        match: [/new/, t.concat(u, "+"), t.concat("(?!", E(f).join("\\b|"), "\\b)"), i],
                        scope: {1: "keyword", 4: "title.class"}
                    }]
                }, _ = t.concat(r, "\\b(?!\\()"), b = {
                    variants: [{
                        match: [t.concat(/::/, t.lookahead(/(?!class\b)/)), _],
                        scope: {2: "variable.constant"}
                    }, {
                        match: [/::/, /class/],
                        scope: {2: "variable.language"}
                    }, {
                        match: [i, t.concat(/::/, t.lookahead(/(?!class\b)/)), _],
                        scope: {1: "title.class", 3: "variable.constant"}
                    }, {
                        match: [i, t.concat("::", t.lookahead(/(?!class\b)/))],
                        scope: {1: "title.class"}
                    }, {match: [i, /::/, /class/], scope: {1: "title.class", 3: "variable.language"}}]
                }, A = {scope: "attr", match: t.concat(r, t.lookahead(":"), t.lookahead(/(?!::)/))}, y = {
                    relevance: 0,
                    begin: /\(/,
                    end: /\)/,
                    keywords: g,
                    contains: [A, a, b, e.C_BLOCK_COMMENT_MODE, d, p, T]
                }, N = {
                    relevance: 0,
                    match: [/\b/, t.concat("(?!fn\\b|function\\b|", E(m).join("\\b|"), "|", E(f).join("\\b|"), "\\b)"), r, t.concat(u, "*"), t.lookahead(/(?=\()/)],
                    scope: {3: "title.function.invoke"},
                    contains: [y]
                };
            y.contains.push(N);
            let k = [A, b, e.C_BLOCK_COMMENT_MODE, d, p, T], C = {
                begin: t.concat(/#\[\s*/, i),
                beginScope: "meta",
                end: /]/,
                endScope: "meta",
                keywords: {literal: h, keyword: ["new", "array"]},
                contains: [{
                    begin: /\[/,
                    end: /]/,
                    keywords: {literal: h, keyword: ["new", "array"]},
                    contains: ["self", ...k]
                }, ...k, {scope: "meta", match: i}]
            };
            return {
                case_insensitive: !1,
                keywords: g,
                contains: [C, e.HASH_COMMENT_MODE, e.COMMENT("//", "$"), e.COMMENT("/\\*", "\\*/", {
                    contains: [{
                        scope: "doctag",
                        match: "@[A-Za-z]+"
                    }]
                }), {
                    match: /__halt_compiler\(\);/,
                    keywords: "__halt_compiler",
                    starts: {
                        scope: "comment",
                        end: e.MATCH_NOTHING_RE,
                        contains: [{match: /\?>/, scope: "meta", endsParent: !0}]
                    }
                }, {
                    scope: "meta",
                    variants: [{begin: /<\?php/, relevance: 10}, {begin: /<\?=/}, {
                        begin: /<\?/,
                        relevance: .1
                    }, {begin: /\?>/}]
                }, {scope: "variable.language", match: /\$this\b/}, a, N, b, {
                    match: [/const/, /\s/, r],
                    scope: {1: "keyword", 3: "variable.constant"}
                }, T, {
                    scope: "function",
                    relevance: 0,
                    beginKeywords: "fn function",
                    end: /[;{]/,
                    excludeEnd: !0,
                    illegal: "[$%\\[]",
                    contains: [{beginKeywords: "use"}, e.UNDERSCORE_TITLE_MODE, {
                        begin: "=>",
                        endsParent: !0
                    }, {
                        scope: "params",
                        begin: "\\(",
                        end: "\\)",
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: g,
                        contains: ["self", a, b, e.C_BLOCK_COMMENT_MODE, d, p]
                    }]
                }, {
                    scope: "class",
                    variants: [{beginKeywords: "enum", illegal: /[($"]/}, {
                        beginKeywords: "class interface trait",
                        illegal: /[:($"]/
                    }],
                    relevance: 0,
                    end: /\{/,
                    excludeEnd: !0,
                    contains: [{beginKeywords: "extends implements"}, e.UNDERSCORE_TITLE_MODE]
                }, {
                    beginKeywords: "namespace",
                    relevance: 0,
                    end: ";",
                    illegal: /[.']/,
                    contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, {scope: "title.class"})]
                }, {
                    beginKeywords: "use",
                    relevance: 0,
                    end: ";",
                    contains: [{match: /\b(as|const|function)\b/, scope: "keyword"}, e.UNDERSCORE_TITLE_MODE]
                }, d, p]
            }
        }), af.registerLanguage("php-template", function (e) {
            return {
                name: "PHP template",
                subLanguage: "xml",
                contains: [{
                    begin: /<\?(php|=)?/,
                    end: /\?>/,
                    subLanguage: "php",
                    contains: [{begin: "/\\*", end: "\\*/", skip: !0}, {begin: 'b"', end: '"', skip: !0}, {
                        begin: "b'",
                        end: "'",
                        skip: !0
                    }, e.inherit(e.APOS_STRING_MODE, {
                        illegal: null,
                        className: null,
                        contains: null,
                        skip: !0
                    }), e.inherit(e.QUOTE_STRING_MODE, {illegal: null, className: null, contains: null, skip: !0})]
                }]
            }
        }), af.registerLanguage("plaintext", function (e) {
            return {name: "Plain text", aliases: ["text", "txt"], disableAutodetect: !0}
        }), af.registerLanguage("python", function (e) {
            let t = e.regex, n = /[\p{XID_Start}_]\p{XID_Continue}*/u,
                r = ["and", "as", "assert", "async", "await", "break", "case", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "match", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"],
                i = {
                    $pattern: /[A-Za-z]\w+|__\w+__/,
                    keyword: r,
                    built_in: ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"],
                    literal: ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"],
                    type: ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"]
                }, a = {className: "meta", begin: /^(>>>|\.\.\.) /},
                o = {className: "subst", begin: /\{/, end: /\}/, keywords: i, illegal: /#/},
                s = {begin: /\{\{/, relevance: 0}, l = {
                    className: "string",
                    contains: [e.BACKSLASH_ESCAPE],
                    variants: [{
                        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
                        end: /'''/,
                        contains: [e.BACKSLASH_ESCAPE, a],
                        relevance: 10
                    }, {
                        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
                        end: /"""/,
                        contains: [e.BACKSLASH_ESCAPE, a],
                        relevance: 10
                    }, {
                        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
                        end: /'''/,
                        contains: [e.BACKSLASH_ESCAPE, a, s, o]
                    }, {
                        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
                        end: /"""/,
                        contains: [e.BACKSLASH_ESCAPE, a, s, o]
                    }, {begin: /([uU]|[rR])'/, end: /'/, relevance: 10}, {
                        begin: /([uU]|[rR])"/,
                        end: /"/,
                        relevance: 10
                    }, {begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/}, {
                        begin: /([bB]|[bB][rR]|[rR][bB])"/,
                        end: /"/
                    }, {
                        begin: /([fF][rR]|[rR][fF]|[fF])'/,
                        end: /'/,
                        contains: [e.BACKSLASH_ESCAPE, s, o]
                    }, {
                        begin: /([fF][rR]|[rR][fF]|[fF])"/,
                        end: /"/,
                        contains: [e.BACKSLASH_ESCAPE, s, o]
                    }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                }, c = "[0-9](_?[0-9])*", u = `(\\b(${c}))?\\.(${c})|\\b(${c})\\.`, d = `\\b|${r.join("|")}`, p = {
                    className: "number",
                    relevance: 0,
                    variants: [{begin: `(\\b(${c})|(${u}))[eE][+-]?(${c})[jJ]?(?=${d})`}, {begin: `(${u})[jJ]?`}, {begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})`}, {begin: `\\b0[bB](_?[01])+[lL]?(?=${d})`}, {begin: `\\b0[oO](_?[0-7])+[lL]?(?=${d})`}, {begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})`}, {begin: `\\b(${c})[jJ](?=${d})`}]
                }, h = {
                    className: "comment",
                    begin: t.lookahead(/# type:/),
                    end: /$/,
                    keywords: i,
                    contains: [{begin: /# type:/}, {begin: /#/, end: /\b\B/, endsWithParent: !0}]
                }, m = {
                    className: "params",
                    variants: [{className: "", begin: /\(\s*\)/, skip: !0}, {
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: !0,
                        excludeEnd: !0,
                        keywords: i,
                        contains: ["self", a, p, l, e.HASH_COMMENT_MODE]
                    }]
                };
            return o.contains = [l, p, a], {
                name: "Python",
                aliases: ["py", "gyp", "ipython"],
                unicodeRegex: !0,
                keywords: i,
                illegal: /(<\/|->|\?)|=>/,
                contains: [a, p, {begin: /\bself\b/}, {
                    beginKeywords: "if",
                    relevance: 0
                }, l, h, e.HASH_COMMENT_MODE, {
                    match: [/\bdef/, /\s+/, n],
                    scope: {1: "keyword", 3: "title.function"},
                    contains: [m]
                }, {
                    variants: [{match: [/\bclass/, /\s+/, n, /\s*/, /\(\s*/, n, /\s*\)/]}, {match: [/\bclass/, /\s+/, n]}],
                    scope: {1: "keyword", 3: "title.class", 6: "title.class.inherited"}
                }, {className: "meta", begin: /^[\t ]*@/, end: /(?=#)|$/, contains: [p, m, l]}]
            }
        }), af.registerLanguage("python-repl", function (e) {
            return {
                aliases: ["pycon"],
                contains: [{
                    className: "meta.prompt",
                    starts: {end: / |$/, starts: {end: "$", subLanguage: "python"}},
                    variants: [{begin: /^>>>(?=[ ]|$)/}, {begin: /^\.\.\.(?=[ ]|$)/}]
                }]
            }
        }), af.registerLanguage("r", function (e) {
            let t = e.regex, n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
                r = t.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/, /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/, /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/),
                i = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,
                a = t.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
            return {
                name: "R",
                keywords: {
                    $pattern: n,
                    keyword: "function if in break next repeat else for while",
                    literal: "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
                    built_in: "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm"
                },
                contains: [e.COMMENT(/#'/, /$/, {
                    contains: [{
                        scope: "doctag",
                        match: /@examples/,
                        starts: {end: t.lookahead(t.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)), endsParent: !0}
                    }, {
                        scope: "doctag",
                        begin: "@param",
                        end: /$/,
                        contains: [{
                            scope: "variable",
                            variants: [{match: n}, {match: /`(?:\\.|[^`\\])+`/}],
                            endsParent: !0
                        }]
                    }, {scope: "doctag", match: /@[a-zA-Z]+/}, {scope: "keyword", match: /\\[a-zA-Z]+/}]
                }), e.HASH_COMMENT_MODE, {
                    scope: "string",
                    contains: [e.BACKSLASH_ESCAPE],
                    variants: [e.END_SAME_AS_BEGIN({
                        begin: /[rR]"(-*)\(/,
                        end: /\)(-*)"/
                    }), e.END_SAME_AS_BEGIN({
                        begin: /[rR]"(-*)\{/,
                        end: /\}(-*)"/
                    }), e.END_SAME_AS_BEGIN({
                        begin: /[rR]"(-*)\[/,
                        end: /\](-*)"/
                    }), e.END_SAME_AS_BEGIN({
                        begin: /[rR]'(-*)\(/,
                        end: /\)(-*)'/
                    }), e.END_SAME_AS_BEGIN({
                        begin: /[rR]'(-*)\{/,
                        end: /\}(-*)'/
                    }), e.END_SAME_AS_BEGIN({begin: /[rR]'(-*)\[/, end: /\](-*)'/}), {
                        begin: '"',
                        end: '"',
                        relevance: 0
                    }, {begin: "'", end: "'", relevance: 0}]
                }, {
                    relevance: 0,
                    variants: [{scope: {1: "operator", 2: "number"}, match: [i, r]}, {
                        scope: {
                            1: "operator",
                            2: "number"
                        }, match: [/%[^%]*%/, r]
                    }, {scope: {1: "punctuation", 2: "number"}, match: [a, r]}, {
                        scope: {2: "number"},
                        match: [/[^a-zA-Z0-9._]|^/, r]
                    }]
                }, {scope: {3: "operator"}, match: [n, /\s+/, /<-/, /\s+/]}, {
                    scope: "operator",
                    relevance: 0,
                    variants: [{match: i}, {match: /%[^%]*%/}]
                }, {scope: "punctuation", relevance: 0, match: a}, {begin: "`", end: "`", contains: [{begin: /\\./}]}]
            }
        }), af.registerLanguage("ruby", function (e) {
            let t = e.regex, n = "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
                r = t.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/), i = t.concat(r, /(::\w+)*/), a = {
                    "variable.constant": ["__FILE__", "__LINE__", "__ENCODING__"],
                    "variable.language": ["self", "super"],
                    keyword: ["alias", "and", "begin", "BEGIN", "break", "case", "class", "defined", "do", "else", "elsif", "end", "END", "ensure", "for", "if", "in", "module", "next", "not", "or", "redo", "require", "rescue", "retry", "return", "then", "undef", "unless", "until", "when", "while", "yield", "include", "extend", "prepend", "public", "private", "protected", "raise", "throw"],
                    built_in: ["proc", "lambda", "attr_accessor", "attr_reader", "attr_writer", "define_method", "private_constant", "module_function"],
                    literal: ["true", "false", "nil"]
                }, o = {className: "doctag", begin: "@[A-Za-z]+"}, s = {begin: "#<", end: ">"},
                l = [e.COMMENT("#", "$", {contains: [o]}), e.COMMENT("^=begin", "^=end", {
                    contains: [o],
                    relevance: 10
                }), e.COMMENT("^__END__", e.MATCH_NOTHING_RE)],
                c = {className: "subst", begin: /#\{/, end: /\}/, keywords: a}, u = {
                    className: "string",
                    contains: [e.BACKSLASH_ESCAPE, c],
                    variants: [{begin: /'/, end: /'/}, {begin: /"/, end: /"/}, {
                        begin: /`/,
                        end: /`/
                    }, {begin: /%[qQwWx]?\(/, end: /\)/}, {begin: /%[qQwWx]?\[/, end: /\]/}, {
                        begin: /%[qQwWx]?\{/,
                        end: /\}/
                    }, {begin: /%[qQwWx]?</, end: />/}, {begin: /%[qQwWx]?\//, end: /\//}, {
                        begin: /%[qQwWx]?%/,
                        end: /%/
                    }, {begin: /%[qQwWx]?-/, end: /-/}, {
                        begin: /%[qQwWx]?\|/,
                        end: /\|/
                    }, {begin: /\B\?(\\\d{1,3})/}, {begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/}, {begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/}, {begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/}, {begin: /\B\?\\(c|C-)[\x20-\x7e]/}, {begin: /\B\?\\?\S/}, {
                        begin: t.concat(/<<[-~]?'?/, t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)),
                        contains: [e.END_SAME_AS_BEGIN({begin: /(\w+)/, end: /(\w+)/, contains: [e.BACKSLASH_ESCAPE, c]})]
                    }]
                }, d = "[0-9](_?[0-9])*", p = {
                    className: "number",
                    relevance: 0,
                    variants: [{begin: `\\b([1-9](_?[0-9])*|0)(\\.(${d}))?([eE][+-]?(${d})|r)?i?\\b`}, {begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b"}, {begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b"}, {begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b"}, {begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b"}, {begin: "\\b0(_?[0-7])+r?i?\\b"}]
                }, h = {
                    variants: [{match: /\(\)/}, {
                        className: "params",
                        begin: /\(/,
                        end: /(?=\))/,
                        excludeBegin: !0,
                        endsParent: !0,
                        keywords: a
                    }]
                }, m = [u, {
                    variants: [{match: [/class\s+/, i, /\s+<\s+/, i]}, {match: [/\b(class|module)\s+/, i]}],
                    scope: {2: "title.class", 4: "title.class.inherited"},
                    keywords: a
                }, {match: [/(include|extend)\s+/, i], scope: {2: "title.class"}, keywords: a}, {
                    relevance: 0,
                    match: [i, /\.new[. (]/],
                    scope: {1: "title.class"}
                }, {relevance: 0, match: /\b[A-Z][A-Z_0-9]+\b/, className: "variable.constant"}, {
                    relevance: 0,
                    match: r,
                    scope: "title.class"
                }, {
                    match: [/def/, /\s+/, n],
                    scope: {1: "keyword", 3: "title.function"},
                    contains: [h]
                }, {begin: e.IDENT_RE + "::"}, {
                    className: "symbol",
                    begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
                    relevance: 0
                }, {
                    className: "symbol",
                    begin: ":(?!\\s)",
                    contains: [u, {begin: n}],
                    relevance: 0
                }, p, {
                    className: "variable",
                    begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])"
                }, {
                    className: "params",
                    begin: /\|/,
                    end: /\|/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    relevance: 0,
                    keywords: a
                }, {
                    begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
                    keywords: "unless",
                    contains: [{
                        className: "regexp",
                        contains: [e.BACKSLASH_ESCAPE, c],
                        illegal: /\n/,
                        variants: [{begin: "/", end: "/[a-z]*"}, {begin: /%r\{/, end: /\}[a-z]*/}, {
                            begin: "%r\\(",
                            end: "\\)[a-z]*"
                        }, {begin: "%r!", end: "![a-z]*"}, {begin: "%r\\[", end: "\\][a-z]*"}]
                    }].concat(s, l),
                    relevance: 0
                }].concat(s, l);
            return c.contains = m, h.contains = m, l.unshift(s), {
                name: "Ruby",
                aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
                keywords: a,
                illegal: /\/\*/,
                contains: [e.SHEBANG({binary: "ruby"})].concat([{
                    begin: /^\s*=>/,
                    starts: {end: "$", contains: m}
                }, {
                    className: "meta.prompt",
                    begin: "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])",
                    starts: {end: "$", keywords: a, contains: m}
                }]).concat(l).concat(m)
            }
        }), af.registerLanguage("rust", function (e) {
            let t = e.regex, n = {
                    className: "title.function.invoke",
                    relevance: 0,
                    begin: t.concat(/\b/, /(?!let\b)/, e.IDENT_RE, t.lookahead(/\s*\(/))
                }, r = "([ui](8|16|32|64|128|size)|f(32|64))?",
                i = ["drop ", "Copy", "Send", "Sized", "Sync", "Drop", "Fn", "FnMut", "FnOnce", "ToOwned", "Clone", "Debug", "PartialEq", "PartialOrd", "Eq", "Ord", "AsRef", "AsMut", "Into", "From", "Default", "Iterator", "Extend", "IntoIterator", "DoubleEndedIterator", "ExactSizeIterator", "SliceConcatExt", "ToString", "assert!", "assert_eq!", "bitflags!", "bytes!", "cfg!", "col!", "concat!", "concat_idents!", "debug_assert!", "debug_assert_eq!", "env!", "panic!", "file!", "format!", "format_args!", "include_bytes!", "include_str!", "line!", "local_data_key!", "module_path!", "option_env!", "print!", "println!", "select!", "stringify!", "try!", "unimplemented!", "unreachable!", "vec!", "write!", "writeln!", "macro_rules!", "assert_ne!", "debug_assert_ne!"],
                a = ["i8", "i16", "i32", "i64", "i128", "isize", "u8", "u16", "u32", "u64", "u128", "usize", "f32", "f64", "str", "char", "bool", "Box", "Option", "Result", "String", "Vec"];
            return {
                name: "Rust",
                aliases: ["rs"],
                keywords: {
                    $pattern: e.IDENT_RE + "!?",
                    type: a,
                    keyword: ["abstract", "as", "async", "await", "become", "box", "break", "const", "continue", "crate", "do", "dyn", "else", "enum", "extern", "false", "final", "fn", "for", "if", "impl", "in", "let", "loop", "macro", "match", "mod", "move", "mut", "override", "priv", "pub", "ref", "return", "self", "Self", "static", "struct", "super", "trait", "true", "try", "type", "typeof", "unsafe", "unsized", "use", "virtual", "where", "while", "yield"],
                    literal: ["true", "false", "Some", "None", "Ok", "Err"],
                    built_in: i
                },
                illegal: "</",
                contains: [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {contains: ["self"]}), e.inherit(e.QUOTE_STRING_MODE, {
                    begin: /b?"/,
                    illegal: null
                }), {
                    className: "string",
                    variants: [{begin: /b?r(#*)"(.|\n)*?"\1(?!#)/}, {begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/}]
                }, {className: "symbol", begin: /'[a-zA-Z_][a-zA-Z0-9_]*/}, {
                    className: "number",
                    variants: [{begin: "\\b0b([01_]+)" + r}, {begin: "\\b0o([0-7_]+)" + r}, {begin: "\\b0x([A-Fa-f0-9_]+)" + r}, {begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + r}],
                    relevance: 0
                }, {
                    begin: [/fn/, /\s+/, e.UNDERSCORE_IDENT_RE],
                    className: {1: "keyword", 3: "title.function"}
                }, {
                    className: "meta",
                    begin: "#!?\\[",
                    end: "\\]",
                    contains: [{className: "string", begin: /"/, end: /"/}]
                }, {
                    begin: [/let/, /\s+/, /(?:mut\s+)?/, e.UNDERSCORE_IDENT_RE],
                    className: {1: "keyword", 3: "keyword", 4: "variable"}
                }, {
                    begin: [/for/, /\s+/, e.UNDERSCORE_IDENT_RE, /\s+/, /in/],
                    className: {1: "keyword", 3: "variable", 5: "keyword"}
                }, {
                    begin: [/type/, /\s+/, e.UNDERSCORE_IDENT_RE],
                    className: {1: "keyword", 3: "title.class"}
                }, {
                    begin: [/(?:trait|enum|struct|union|impl|for)/, /\s+/, e.UNDERSCORE_IDENT_RE],
                    className: {1: "keyword", 3: "title.class"}
                }, {
                    begin: e.IDENT_RE + "::",
                    keywords: {keyword: "Self", built_in: i, type: a}
                }, {className: "punctuation", begin: "->"}, n]
            }
        }), af.registerLanguage("scss", function (e) {
            let t = iD(e), n = "@[a-z-]+",
                r = {className: "variable", begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b", relevance: 0};
            return {
                name: "SCSS",
                case_insensitive: !0,
                illegal: "[=/|']",
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, t.CSS_NUMBER_MODE, {
                    className: "selector-id",
                    begin: "#[A-Za-z0-9_-]+",
                    relevance: 0
                }, {
                    className: "selector-class",
                    begin: "\\.[A-Za-z0-9_-]+",
                    relevance: 0
                }, t.ATTRIBUTE_SELECTOR_MODE, {
                    className: "selector-tag",
                    begin: "\\b(" + iP.join("|") + ")\\b",
                    relevance: 0
                }, {className: "selector-pseudo", begin: ":(" + iH.join("|") + ")"}, {
                    className: "selector-pseudo",
                    begin: ":(:)?(" + iB.join("|") + ")"
                }, r, {begin: /\(/, end: /\)/, contains: [t.CSS_NUMBER_MODE]}, t.CSS_VARIABLE, {
                    className: "attribute",
                    begin: "\\b(" + iU.join("|") + ")\\b"
                }, {begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"}, {
                    begin: /:/,
                    end: /[;}{]/,
                    relevance: 0,
                    contains: [t.BLOCK_COMMENT, r, t.HEXCOLOR, t.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, t.IMPORTANT, t.FUNCTION_DISPATCH]
                }, {begin: "@(page|font-face)", keywords: {$pattern: n, keyword: "@page @font-face"}}, {
                    begin: "@",
                    end: "[{;]",
                    returnBegin: !0,
                    keywords: {$pattern: /[a-z-]+/, keyword: "and or not only", attribute: iF.join(" ")},
                    contains: [{begin: n, className: "keyword"}, {
                        begin: /[a-z-]+(?=:)/,
                        className: "attribute"
                    }, r, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, t.HEXCOLOR, t.CSS_NUMBER_MODE]
                }, t.FUNCTION_DISPATCH]
            }
        }), af.registerLanguage("shell", function (e) {
            return {
                name: "Shell Session",
                aliases: ["console", "shellsession"],
                contains: [{
                    className: "meta.prompt",
                    begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
                    starts: {end: /[^\\](?=\s*$)/, subLanguage: "bash"}
                }]
            }
        }), af.registerLanguage("sql", function (e) {
            let t = e.regex, n = e.COMMENT("--", "$"), r = ["true", "false", "unknown"],
                i = ["bigint", "binary", "blob", "boolean", "char", "character", "clob", "date", "dec", "decfloat", "decimal", "float", "int", "integer", "interval", "nchar", "nclob", "national", "numeric", "real", "row", "smallint", "time", "timestamp", "varchar", "varying", "varbinary"],
                a = ["abs", "acos", "array_agg", "asin", "atan", "avg", "cast", "ceil", "ceiling", "coalesce", "corr", "cos", "cosh", "count", "covar_pop", "covar_samp", "cume_dist", "dense_rank", "deref", "element", "exp", "extract", "first_value", "floor", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "last_value", "lead", "listagg", "ln", "log", "log10", "lower", "max", "min", "mod", "nth_value", "ntile", "nullif", "percent_rank", "percentile_cont", "percentile_disc", "position", "position_regex", "power", "rank", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "row_number", "sin", "sinh", "sqrt", "stddev_pop", "stddev_samp", "substring", "substring_regex", "sum", "tan", "tanh", "translate", "translate_regex", "treat", "trim", "trim_array", "unnest", "upper", "value_of", "var_pop", "var_samp", "width_bucket"],
                o = ["create table", "insert into", "primary key", "foreign key", "not null", "alter table", "add constraint", "grouping sets", "on overflow", "character set", "respect nulls", "ignore nulls", "nulls first", "nulls last", "depth first", "breadth first"],
                s = ["abs", "acos", "all", "allocate", "alter", "and", "any", "are", "array", "array_agg", "array_max_cardinality", "as", "asensitive", "asin", "asymmetric", "at", "atan", "atomic", "authorization", "avg", "begin", "begin_frame", "begin_partition", "between", "bigint", "binary", "blob", "boolean", "both", "by", "call", "called", "cardinality", "cascaded", "case", "cast", "ceil", "ceiling", "char", "char_length", "character", "character_length", "check", "classifier", "clob", "close", "coalesce", "collate", "collect", "column", "commit", "condition", "connect", "constraint", "contains", "convert", "copy", "corr", "corresponding", "cos", "cosh", "count", "covar_pop", "covar_samp", "create", "cross", "cube", "cume_dist", "current", "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_row", "current_schema", "current_time", "current_timestamp", "current_path", "current_role", "current_transform_group_for_type", "current_user", "cursor", "cycle", "date", "day", "deallocate", "dec", "decimal", "decfloat", "declare", "default", "define", "delete", "dense_rank", "deref", "describe", "deterministic", "disconnect", "distinct", "double", "drop", "dynamic", "each", "element", "else", "empty", "end", "end_frame", "end_partition", "end-exec", "equals", "escape", "every", "except", "exec", "execute", "exists", "exp", "external", "extract", "false", "fetch", "filter", "first_value", "float", "floor", "for", "foreign", "frame_row", "free", "from", "full", "function", "fusion", "get", "global", "grant", "group", "grouping", "groups", "having", "hold", "hour", "identity", "in", "indicator", "initial", "inner", "inout", "insensitive", "insert", "int", "integer", "intersect", "intersection", "interval", "into", "is", "join", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "language", "large", "last_value", "lateral", "lead", "leading", "left", "like", "like_regex", "listagg", "ln", "local", "localtime", "localtimestamp", "log", "log10", "lower", "match", "match_number", "match_recognize", "matches", "max", "member", "merge", "method", "min", "minute", "mod", "modifies", "module", "month", "multiset", "national", "natural", "nchar", "nclob", "new", "no", "none", "normalize", "not", "nth_value", "ntile", "null", "nullif", "numeric", "octet_length", "occurrences_regex", "of", "offset", "old", "omit", "on", "one", "only", "open", "or", "order", "out", "outer", "over", "overlaps", "overlay", "parameter", "partition", "pattern", "per", "percent", "percent_rank", "percentile_cont", "percentile_disc", "period", "portion", "position", "position_regex", "power", "precedes", "precision", "prepare", "primary", "procedure", "ptf", "range", "rank", "reads", "real", "recursive", "ref", "references", "referencing", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "release", "result", "return", "returns", "revoke", "right", "rollback", "rollup", "row", "row_number", "rows", "running", "savepoint", "scope", "scroll", "search", "second", "seek", "select", "sensitive", "session_user", "set", "show", "similar", "sin", "sinh", "skip", "smallint", "some", "specific", "specifictype", "sql", "sqlexception", "sqlstate", "sqlwarning", "sqrt", "start", "static", "stddev_pop", "stddev_samp", "submultiset", "subset", "substring", "substring_regex", "succeeds", "sum", "symmetric", "system", "system_time", "system_user", "table", "tablesample", "tan", "tanh", "then", "time", "timestamp", "timezone_hour", "timezone_minute", "to", "trailing", "translate", "translate_regex", "translation", "treat", "trigger", "trim", "trim_array", "true", "truncate", "uescape", "union", "unique", "unknown", "unnest", "update", "upper", "user", "using", "value", "values", "value_of", "var_pop", "var_samp", "varbinary", "varchar", "varying", "versioning", "when", "whenever", "where", "width_bucket", "window", "with", "within", "without", "year", "add", "asc", "collation", "desc", "final", "first", "last", "view"].filter(e => !a.includes(e)),
                l = {begin: t.concat(/\b/, t.either(...a), /\s*\(/), relevance: 0, keywords: {built_in: a}};
            return {
                name: "SQL",
                case_insensitive: !0,
                illegal: /[{}]|<\//,
                keywords: {
                    $pattern: /\b[\w\.]+/,
                    keyword: function (e, {exceptions: t, when: n} = {}) {
                        return t = t || [], e.map(e => e.match(/\|\d+$/) || t.includes(e) ? e : n(e) ? `${e}|0` : e)
                    }(s, {when: e => e.length < 3}),
                    literal: r,
                    type: i,
                    built_in: ["current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_schema", "current_transform_group_for_type", "current_user", "session_user", "system_time", "system_user", "current_time", "localtime", "current_timestamp", "localtimestamp"]
                },
                contains: [{
                    begin: t.either(...o),
                    relevance: 0,
                    keywords: {$pattern: /[\w\.]+/, keyword: s.concat(o), literal: r, type: i}
                }, {
                    className: "type",
                    begin: t.either(...["double precision", "large object", "with timezone", "without timezone"])
                }, l, {className: "variable", begin: /@[a-z0-9]+/}, {
                    className: "string",
                    variants: [{begin: /'/, end: /'/, contains: [{begin: /''/}]}]
                }, {
                    begin: /"/,
                    end: /"/,
                    contains: [{begin: /""/}]
                }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, n, {
                    className: "operator",
                    begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
                    relevance: 0
                }]
            }
        }), af.registerLanguage("swift", function (e) {
            let t = {match: /\s+/, relevance: 0}, n = e.COMMENT("/\\*", "\\*/", {contains: ["self"]}),
                r = [e.C_LINE_COMMENT_MODE, n], i = {match: [/\./, ij(...iq, ...iW)], className: {2: "keyword"}},
                a = {match: iz(/\./, ij(...iQ)), relevance: 0},
                o = iQ.filter(e => "string" == typeof e).concat(["_|0"]),
                s = iQ.filter(e => "string" != typeof e).concat(iY).map(i$),
                l = {variants: [{className: "keyword", match: ij(...s, ...iW)}]},
                c = {$pattern: ij(/\b\w+/, /#\w+/), keyword: o.concat(iZ), literal: iV}, u = [i, a, l],
                d = {match: iz(/\./, ij(...iJ)), relevance: 0},
                p = {className: "built_in", match: iz(/\b/, ij(...iJ), /(?=\()/)}, h = [d, p],
                m = {match: /->/, relevance: 0},
                f = {className: "operator", relevance: 0, variants: [{match: i9}, {match: `\\.(\\.|${i0})+`}]},
                g = [m, f], E = "([0-9]_*)+", T = "([0-9a-fA-F]_*)+", _ = {
                    className: "number",
                    relevance: 0,
                    variants: [{match: `\\b(${E})(\\.(${E}))?([eE][+-]?(${E}))?\\b`}, {match: `\\b0x(${T})(\\.(${T}))?([pP][+-]?(${E}))?\\b`}, {match: /\b0o([0-7]_*)+\b/}, {match: /\b0b([01]_*)+\b/}]
                }, b = (e = "") => ({
                    className: "subst",
                    variants: [{match: iz(/\\/, e, /[0\\tnr"']/)}, {match: iz(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/)}]
                }), A = (e = "") => ({className: "subst", match: iz(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/)}),
                y = (e = "") => ({className: "subst", label: "interpol", begin: iz(/\\/, e, /\(/), end: /\)/}),
                N = (e = "") => ({begin: iz(e, /"""/), end: iz(/"""/, e), contains: [b(e), A(e), y(e)]}),
                k = (e = "") => ({begin: iz(e, /"/), end: iz(/"/, e), contains: [b(e), y(e)]}),
                C = {className: "string", variants: [N(), N("#"), N("##"), N("###"), k(), k("#"), k("##"), k("###")]},
                S = {match: iz(/`/, i8, /`/)}, O = {className: "variable", match: `\\$${i4}+`},
                x = [S, {className: "variable", match: /\$\d+/}, O], v = {
                    match: /(@|#(un)?)available/,
                    className: "keyword",
                    starts: {contains: [{begin: /\(/, end: /\)/, keywords: i7, contains: [...g, _, C]}]}
                }, I = {className: "keyword", match: iz(/@/, ij(...i6))}, w = {className: "meta", match: iz(/@/, i8)},
                R = [v, I, w], M = {
                    match: iG(/\b[A-Z]/),
                    relevance: 0,
                    contains: [{
                        className: "type",
                        match: iz(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, i4, "+")
                    }, {className: "type", match: i2, relevance: 0}, {match: /[?!]+/, relevance: 0}, {
                        match: /\.\.\./,
                        relevance: 0
                    }, {match: iz(/\s+&\s+/, iG(i2)), relevance: 0}]
                }, L = {begin: /</, end: />/, keywords: c, contains: [...r, ...u, ...R, m, M]};
            M.contains.push(L);
            let D = {match: iz(i8, /\s*:/), keywords: "_|0", relevance: 0}, P = {
                begin: /\(/,
                end: /\)/,
                relevance: 0,
                keywords: c,
                contains: ["self", D, ...r, ...u, ...h, ...g, _, C, ...x, ...R, M]
            }, F = {begin: /</, end: />/, contains: [...r, M]}, H = {
                begin: ij(iG(iz(i8, /\s*:/)), iG(iz(i8, /\s+/, i8, /\s*:/))),
                end: /:/,
                relevance: 0,
                contains: [{className: "keyword", match: /\b_\b/}, {className: "params", match: i8}]
            }, B = {
                begin: /\(/,
                end: /\)/,
                keywords: c,
                contains: [H, ...r, ...u, ...g, _, C, ...R, M, P],
                endsParent: !0,
                illegal: /["']/
            }, U = {
                match: [/func/, /\s+/, ij(S.match, i8, i9)],
                className: {1: "keyword", 3: "title.function"},
                contains: [F, B, t],
                illegal: [/\[/, /%/]
            }, K = {
                begin: [/precedencegroup/, /\s+/, i2],
                className: {1: "keyword", 3: "title"},
                contains: [M],
                keywords: [...iX, ...iV],
                end: /}/
            };
            for (let e of C.variants) {
                let t = e.contains.find(e => "interpol" === e.label);
                t.keywords = c;
                let n = [...u, ...h, ...g, _, C, ...x];
                t.contains = [...n, {begin: /\(/, end: /\)/, contains: ["self", ...n]}]
            }
            return {
                name: "Swift",
                keywords: c,
                contains: [...r, U, {
                    match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
                    className: {1: "keyword"},
                    contains: [F, B, t],
                    illegal: /\[|%/
                }, {
                    beginKeywords: "struct protocol class extension enum actor",
                    end: "\\{",
                    excludeEnd: !0,
                    keywords: c,
                    contains: [e.inherit(e.TITLE_MODE, {
                        className: "title.class",
                        begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/
                    }), ...u]
                }, {match: [/operator/, /\s+/, i9], className: {1: "keyword", 3: "title"}}, K, {
                    beginKeywords: "import",
                    end: /$/,
                    contains: [...r],
                    relevance: 0
                }, ...u, ...h, ...g, _, C, ...x, ...R, M, P]
            }
        }), af.registerLanguage("typescript", function (e) {
            let t = function (e) {
                    var t;
                    let n = e.regex, r = (e, {after: t}) => {
                            let n = "</" + e[0].slice(1), r = e.input.indexOf(n, t);
                            return -1 !== r
                        }, i = {begin: "<>", end: "</>"}, a = {
                            begin: /<[A-Za-z0-9\\._:-]+/, end: /\/[A-Za-z0-9\\._:-]+>|\/>/, isTrulyOpeningTag: (e, t) => {
                                let n;
                                let i = e[0].length + e.index, a = e.input[i];
                                if ("<" === a || "," === a) {
                                    t.ignoreMatch();
                                    return
                                }
                                ">" !== a || r(e, {after: i}) || t.ignoreMatch();
                                let o = e.input.substring(i);
                                if ((n = o.match(/^\s*=/)) || (n = o.match(/^\s+extends\s+/)) && 0 === n.index) {
                                    t.ignoreMatch();
                                    return
                                }
                            }
                        }, o = {$pattern: i3, keyword: ae, literal: at, built_in: ao, "variable.language": aa},
                        s = "[0-9](_?[0-9])*", l = `\\.(${s})`, c = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", u = {
                            className: "number",
                            variants: [{begin: `(\\b(${c})((${l})|\\.)?|(${l}))[eE][+-]?(${s})\\b`}, {begin: `\\b(${c})\\b((${l})\\b|\\.)?|(${l})\\b`}, {begin: "\\b(0|[1-9](_?[0-9])*)n\\b"}, {begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"}, {begin: "\\b0[bB][0-1](_?[0-1])*n?\\b"}, {begin: "\\b0[oO][0-7](_?[0-7])*n?\\b"}, {begin: "\\b0[0-7]+n?\\b"}],
                            relevance: 0
                        }, d = {className: "subst", begin: "\\$\\{", end: "\\}", keywords: o, contains: []}, p = {
                            begin: "html`",
                            end: "",
                            starts: {end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, d], subLanguage: "xml"}
                        }, h = {
                            begin: "css`",
                            end: "",
                            starts: {end: "`", returnEnd: !1, contains: [e.BACKSLASH_ESCAPE, d], subLanguage: "css"}
                        }, m = {className: "string", begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE, d]},
                        f = e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
                            relevance: 0,
                            contains: [{
                                begin: "(?=@[A-Za-z]+)",
                                relevance: 0,
                                contains: [{className: "doctag", begin: "@[A-Za-z]+"}, {
                                    className: "type",
                                    begin: "\\{",
                                    end: "\\}",
                                    excludeEnd: !0,
                                    excludeBegin: !0,
                                    relevance: 0
                                }, {
                                    className: "variable",
                                    begin: i3 + "(?=\\s*(-)|$)",
                                    endsParent: !0,
                                    relevance: 0
                                }, {begin: /(?=[^\n])\s/, relevance: 0}]
                            }]
                        }), g = {className: "comment", variants: [f, e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE]},
                        E = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, p, h, m, {match: /\$\d+/}, u];
                    d.contains = E.concat({begin: /\{/, end: /\}/, keywords: o, contains: ["self"].concat(E)});
                    let T = [].concat(g, d.contains),
                        _ = T.concat([{begin: /\(/, end: /\)/, keywords: o, contains: ["self"].concat(T)}]), b = {
                            className: "params",
                            begin: /\(/,
                            end: /\)/,
                            excludeBegin: !0,
                            excludeEnd: !0,
                            keywords: o,
                            contains: _
                        }, A = {
                            variants: [{
                                match: [/class/, /\s+/, i3, /\s+/, /extends/, /\s+/, n.concat(i3, "(", n.concat(/\./, i3), ")*")],
                                scope: {1: "keyword", 3: "title.class", 5: "keyword", 7: "title.class.inherited"}
                            }, {match: [/class/, /\s+/, i3], scope: {1: "keyword", 3: "title.class"}}]
                        }, y = {
                            relevance: 0,
                            match: n.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),
                            className: "title.class",
                            keywords: {_: [...an, ...ar]}
                        }, N = {
                            match: n.concat(/\b/, (t = [...ai, "super", "import"], n.concat("(?!", t.join("|"), ")")), i3, n.lookahead(/\(/)),
                            className: "title.function",
                            relevance: 0
                        }, k = {
                            begin: n.concat(/\./, n.lookahead(n.concat(i3, /(?![0-9A-Za-z$_(])/))),
                            end: i3,
                            excludeBegin: !0,
                            keywords: "prototype",
                            className: "property",
                            relevance: 0
                        }, C = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>",
                        S = {
                            match: [/const|var|let/, /\s+/, i3, /\s*/, /=\s*/, /(async\s*)?/, n.lookahead(C)],
                            keywords: "async",
                            className: {1: "keyword", 3: "title.function"},
                            contains: [b]
                        };
                    return {
                        name: "Javascript",
                        aliases: ["js", "jsx", "mjs", "cjs"],
                        keywords: o,
                        exports: {PARAMS_CONTAINS: _, CLASS_REFERENCE: y},
                        illegal: /#(?![$_A-z])/,
                        contains: [e.SHEBANG({label: "shebang", binary: "node", relevance: 5}), {
                            label: "use_strict",
                            className: "meta",
                            relevance: 10,
                            begin: /^\s*['"]use (strict|asm)['"]/
                        }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, p, h, m, g, {match: /\$\d+/}, u, y, {
                            className: "attr",
                            begin: i3 + n.lookahead(":"),
                            relevance: 0
                        }, S, {
                            begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
                            keywords: "return throw case",
                            relevance: 0,
                            contains: [g, e.REGEXP_MODE, {
                                className: "function",
                                begin: C,
                                returnBegin: !0,
                                end: "\\s*=>",
                                contains: [{
                                    className: "params",
                                    variants: [{begin: e.UNDERSCORE_IDENT_RE, relevance: 0}, {
                                        className: null,
                                        begin: /\(\s*\)/,
                                        skip: !0
                                    }, {begin: /\(/, end: /\)/, excludeBegin: !0, excludeEnd: !0, keywords: o, contains: _}]
                                }]
                            }, {begin: /,/, relevance: 0}, {match: /\s+/, relevance: 0}, {
                                variants: [{
                                    begin: i.begin,
                                    end: i.end
                                }, {match: /<[A-Za-z0-9\\._:-]+\s*\/>/}, {
                                    begin: a.begin,
                                    "on:begin": a.isTrulyOpeningTag,
                                    end: a.end
                                }],
                                subLanguage: "xml",
                                contains: [{begin: a.begin, end: a.end, skip: !0, contains: ["self"]}]
                            }]
                        }, {
                            variants: [{match: [/function/, /\s+/, i3, /(?=\s*\()/]}, {match: [/function/, /\s*(?=\()/]}],
                            className: {1: "keyword", 3: "title.function"},
                            label: "func.def",
                            contains: [b],
                            illegal: /%/
                        }, {beginKeywords: "while if switch catch for"}, {
                            begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
                            returnBegin: !0,
                            label: "func.def",
                            contains: [b, e.inherit(e.TITLE_MODE, {begin: i3, className: "title.function"})]
                        }, {match: /\.\.\./, relevance: 0}, k, {
                            match: "\\$" + i3,
                            relevance: 0
                        }, {
                            match: [/\bconstructor(?=\s*\()/],
                            className: {1: "title.function"},
                            contains: [b]
                        }, N, {
                            relevance: 0,
                            match: /\b[A-Z][A-Z_0-9]+\b/,
                            className: "variable.constant"
                        }, A, {
                            match: [/get|set/, /\s+/, i3, /(?=\()/],
                            className: {1: "keyword", 3: "title.function"},
                            contains: [{begin: /\(\)/}, b]
                        }, {match: /\$[(.]/}]
                    }
                }(e), n = ["any", "void", "number", "boolean", "string", "object", "never", "symbol", "bigint", "unknown"],
                r = {beginKeywords: "namespace", end: /\{/, excludeEnd: !0, contains: [t.exports.CLASS_REFERENCE]},
                i = {
                    beginKeywords: "interface",
                    end: /\{/,
                    excludeEnd: !0,
                    keywords: {keyword: "interface extends", built_in: n},
                    contains: [t.exports.CLASS_REFERENCE]
                }, a = {
                    $pattern: i3,
                    keyword: ae.concat(["type", "namespace", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly", "enum", "override"]),
                    literal: at,
                    built_in: ao.concat(n),
                    "variable.language": aa
                }, o = {className: "meta", begin: "@" + i3}, s = (e, t, n) => {
                    let r = e.contains.findIndex(e => e.label === t);
                    if (-1 === r) throw Error("can not find mode to replace");
                    e.contains.splice(r, 1, n)
                };
            Object.assign(t.keywords, a), t.exports.PARAMS_CONTAINS.push(o), t.contains = t.contains.concat([o, r, i]), s(t, "shebang", e.SHEBANG()), s(t, "use_strict", {
                className: "meta",
                relevance: 10,
                begin: /^\s*['"]use strict['"]/
            });
            let l = t.contains.find(e => "func.def" === e.label);
            return l.relevance = 0, Object.assign(t, {name: "TypeScript", aliases: ["ts", "tsx"]}), t
        }), af.registerLanguage("vbnet", function (e) {
            let t = e.regex, n = /\d{1,2}\/\d{1,2}\/\d{4}/, r = /\d{4}-\d{1,2}-\d{1,2}/,
                i = /(\d|1[012])(:\d+){0,2} *(AM|PM)/, a = /\d{1,2}(:\d{1,2}){1,2}/, o = {
                    className: "literal",
                    variants: [{begin: t.concat(/# */, t.either(r, n), / *#/)}, {begin: t.concat(/# */, a, / *#/)}, {begin: t.concat(/# */, i, / *#/)}, {begin: t.concat(/# */, t.either(r, n), / +/, t.either(i, a), / *#/)}]
                }, s = e.COMMENT(/'''/, /$/, {contains: [{className: "doctag", begin: /<\/?/, end: />/}]}),
                l = e.COMMENT(null, /$/, {variants: [{begin: /'/}, {begin: /([\t ]|^)REM(?=\s)/}]});
            return {
                name: "Visual Basic .NET",
                aliases: ["vb"],
                case_insensitive: !0,
                classNameAliases: {label: "symbol"},
                keywords: {
                    keyword: "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
                    built_in: "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
                    type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
                    literal: "true false nothing"
                },
                illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
                contains: [{className: "string", begin: /"(""|[^/n])"C\b/}, {
                    className: "string",
                    begin: /"/,
                    end: /"/,
                    illegal: /\n/,
                    contains: [{begin: /""/}]
                }, o, {
                    className: "number",
                    relevance: 0,
                    variants: [{begin: /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/}, {begin: /\b\d[\d_]*((U?[SIL])|[%&])?/}, {begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/}, {begin: /&O[0-7_]+((U?[SIL])|[%&])?/}, {begin: /&B[01_]+((U?[SIL])|[%&])?/}]
                }, {className: "label", begin: /^\w+:/}, s, l, {
                    className: "meta",
                    begin: /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
                    end: /$/,
                    keywords: {keyword: "const disable else elseif enable end externalsource if region then"},
                    contains: [l]
                }]
            }
        }), af.registerLanguage("wasm", function (e) {
            e.regex;
            let t = e.COMMENT(/\(;/, /;\)/);
            t.contains.push("self");
            let n = e.COMMENT(/;;/, /$/);
            return {
                name: "WebAssembly",
                keywords: {
                    $pattern: /[\w.]+/,
                    keyword: ["anyfunc", "block", "br", "br_if", "br_table", "call", "call_indirect", "data", "drop", "elem", "else", "end", "export", "func", "global.get", "global.set", "local.get", "local.set", "local.tee", "get_global", "get_local", "global", "if", "import", "local", "loop", "memory", "memory.grow", "memory.size", "module", "mut", "nop", "offset", "param", "result", "return", "select", "set_global", "set_local", "start", "table", "tee_local", "then", "type", "unreachable"]
                },
                contains: [n, t, {
                    match: [/(?:offset|align)/, /\s*/, /=/],
                    className: {1: "keyword", 3: "operator"}
                }, {className: "variable", begin: /\$[\w_]+/}, {
                    match: /(\((?!;)|\))+/,
                    className: "punctuation",
                    relevance: 0
                }, {
                    begin: [/(?:func|call|call_indirect)/, /\s+/, /\$[^\s)]+/],
                    className: {1: "keyword", 3: "title.function"}
                }, e.QUOTE_STRING_MODE, {match: /(i32|i64|f32|f64)(?!\.)/, className: "type"}, {
                    className: "keyword",
                    match: /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/
                }, {
                    className: "number",
                    relevance: 0,
                    match: /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/
                }]
            }
        }), af.registerLanguage("xml", function (e) {
            let t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u),
                r = {className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},
                i = {begin: /\s/, contains: [{className: "keyword", begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/}]},
                a = e.inherit(i, {begin: /\(/, end: /\)/}), o = e.inherit(e.APOS_STRING_MODE, {className: "string"}),
                s = e.inherit(e.QUOTE_STRING_MODE, {className: "string"}), l = {
                    endsWithParent: !0,
                    illegal: /</,
                    relevance: 0,
                    contains: [{className: "attr", begin: /[\p{L}0-9._:-]+/u, relevance: 0}, {
                        begin: /=\s*/,
                        relevance: 0,
                        contains: [{
                            className: "string",
                            endsParent: !0,
                            variants: [{begin: /"/, end: /"/, contains: [r]}, {
                                begin: /'/,
                                end: /'/,
                                contains: [r]
                            }, {begin: /[^\s"'=<>`]+/}]
                        }]
                    }]
                };
            return {
                name: "HTML, XML",
                aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
                case_insensitive: !0,
                unicodeRegex: !0,
                contains: [{
                    className: "meta",
                    begin: /<![a-z]/,
                    end: />/,
                    relevance: 10,
                    contains: [i, s, o, a, {
                        begin: /\[/,
                        end: /\]/,
                        contains: [{className: "meta", begin: /<![a-z]/, end: />/, contains: [i, a, s, o]}]
                    }]
                }, e.COMMENT(/<!--/, /-->/, {relevance: 10}), {
                    begin: /<!\[CDATA\[/,
                    end: /\]\]>/,
                    relevance: 10
                }, r, {
                    className: "meta",
                    end: /\?>/,
                    variants: [{begin: /<\?xml/, relevance: 10, contains: [s]}, {begin: /<\?[a-z][a-z0-9]+/}]
                }, {
                    className: "tag",
                    begin: /<style(?=\s|>)/,
                    end: />/,
                    keywords: {name: "style"},
                    contains: [l],
                    starts: {end: /<\/style>/, returnEnd: !0, subLanguage: ["css", "xml"]}
                }, {
                    className: "tag",
                    begin: /<script(?=\s|>)/,
                    end: />/,
                    keywords: {name: "script"},
                    contains: [l],
                    starts: {end: /<\/script>/, returnEnd: !0, subLanguage: ["javascript", "handlebars", "xml"]}
                }, {className: "tag", begin: /<>|<\/>/}, {
                    className: "tag",
                    begin: t.concat(/</, t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/)))),
                    end: /\/?>/,
                    contains: [{className: "name", begin: n, relevance: 0, starts: l}]
                }, {
                    className: "tag",
                    begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
                    contains: [{className: "name", begin: n, relevance: 0}, {begin: />/, relevance: 0, endsParent: !0}]
                }]
            }
        }), af.registerLanguage("yaml", function (e) {
            let t = "true false yes no null", n = "[\\w#;/?:@&=+$,.~*'()[\\]]+", r = {
                    className: "string",
                    relevance: 0,
                    variants: [{begin: /'/, end: /'/}, {begin: /"/, end: /"/}, {begin: /\S+/}],
                    contains: [e.BACKSLASH_ESCAPE, {
                        className: "template-variable",
                        variants: [{begin: /\{\{/, end: /\}\}/}, {begin: /%\{/, end: /\}/}]
                    }]
                }, i = e.inherit(r, {variants: [{begin: /'/, end: /'/}, {begin: /"/, end: /"/}, {begin: /[^\s,{}[\]]+/}]}),
                a = {end: ",", endsWithParent: !0, excludeEnd: !0, keywords: t, relevance: 0}, o = [{
                    className: "attr",
                    variants: [{begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)"}, {begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)'}, {begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)"}]
                }, {className: "meta", begin: "^---\\s*$", relevance: 10}, {
                    className: "string",
                    begin: "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"
                }, {
                    begin: "<%[%=-]?",
                    end: "[%-]?%>",
                    subLanguage: "ruby",
                    excludeBegin: !0,
                    excludeEnd: !0,
                    relevance: 0
                }, {className: "type", begin: "!\\w+!" + n}, {className: "type", begin: "!<" + n + ">"}, {
                    className: "type",
                    begin: "!" + n
                }, {className: "type", begin: "!!" + n}, {
                    className: "meta",
                    begin: "&" + e.UNDERSCORE_IDENT_RE + "$"
                }, {className: "meta", begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$"}, {
                    className: "bullet",
                    begin: "-(?=[ ]|$)",
                    relevance: 0
                }, e.HASH_COMMENT_MODE, {beginKeywords: t, keywords: {literal: t}}, {
                    className: "number",
                    begin: "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b"
                }, {className: "number", begin: e.C_NUMBER_RE + "\\b", relevance: 0}, {
                    begin: /\{/,
                    end: /\}/,
                    contains: [a],
                    illegal: "\\n",
                    relevance: 0
                }, {begin: "\\[", end: "\\]", contains: [a], illegal: "\\n", relevance: 0}, r], s = [...o];
            return s.pop(), s.push(i), a.contains = s, {
                name: "YAML",
                case_insensitive: !0,
                aliases: ["yml"],
                contains: o
            }
        });
        let ag = {}.hasOwnProperty;

        function aE(e = {}) {
            let {aliases: t, languages: n, prefix: r, plainText: i, ignoreMissing: a, subset: o, detect: s} = e,
                l = "hljs";
            if (t && af.registerAlias(t), n) {
                let e;
                for (e in n) ag.call(n, e) && af.registerLanguage(e, n[e])
            }
            if (r) {
                let e = r.indexOf("-");
                l = e > -1 ? r.slice(0, e) : r
            }
            return (e, t) => {
                ts(e, "element", (e, n, c) => {
                    let u;
                    if (!c || !("tagName" in c) || "pre" !== c.tagName || "code" !== e.tagName || !e.properties) return;
                    let d = function (e) {
                        let t = e.properties && e.properties.className, n = -1;
                        if (Array.isArray(t)) for (; ++n < t.length;) {
                            let e = String(t[n]);
                            if ("no-highlight" === e || "nohighlight" === e) return !1;
                            if ("lang-" === e.slice(0, 5)) return e.slice(5);
                            if ("language-" === e.slice(0, 9)) return e.slice(9)
                        }
                    }(e);
                    if (!(!1 === d || !d && !s || d && i && i.includes(d))) {
                        Array.isArray(e.properties.className) || (e.properties.className = []), e.properties.className.includes(l) || e.properties.className.unshift(l);
                        try {
                            u = d ? af.highlight(d, nH(c), {prefix: r}) : af.highlightAuto(nH(c), {
                                prefix: r,
                                subset: o
                            })
                        } catch (n) {
                            a && /Unknown language/.test(n.message) || t.fail(n, e, "rehype-highlight:missing-language");
                            return
                        }
                        !d && u.data.language && e.properties.className.push("language-" + u.data.language), Array.isArray(u.children) && u.children.length > 0 && (e.children = u.children)
                    }
                })
            }
        }

        var aT = n(7032), a_ = n(359);

        function ab(e) {
            let t = (0, o.useRef)(null);
            return (0, a.jsxs)("pre", {
                ref: t,
                children: [(0, a.jsx)("span", {
                    className: "copy-code-button", onClick: () => {
                        if (t.current) {
                            let e = t.current.innerText;
                            (0, aT.vQ)(e)
                        }
                    }
                }), e.children]
            })
        }

        function aA(e) {
            var t;
            let n = (0, o.useRef)(null), r = e.parentRef.current, i = n.current,
                s = (0, o.useRef)(!0), [l, c] = (0, o.useState)(0);
            (0, o.useEffect)(() => {
                c(l + 1)
            }, [e.loading]);
            let u = s.current || (() => {
                if (r && i) {
                    var e, t;
                    let n = r.getBoundingClientRect(), a = i.getBoundingClientRect(),
                        o = (e = a.top) <= n.bottom && e >= n.top || (t = a.bottom) <= n.bottom && t >= n.top;
                    return o && (s.current = !0), o
                }
            })(), d = e.loading || !u;
            return (0, a.jsx)("div", {
                className: "markdown-body",
                style: {fontSize: "".concat(null !== (t = e.fontSize) && void 0 !== t ? t : 14, "px")},
                ref: n,
                onContextMenu: e.onContextMenu,
                onDoubleClickCapture: e.onDoubleClickCapture,
                children: d ? (0, a.jsx)(a_.Z, {}) : (0, a.jsx)(nd, {
                    remarkPlugins: [ny, ii, nk],
                    rehypePlugins: [n6, [aE, {detect: !1, ignoreMissing: !0}]],
                    components: {pre: ab},
                    linkTarget: "_blank",
                    children: e.content
                })
            })
        }
    }, 2790: function () {
    }, 1959: function (e, t, n) {
        "use strict";
        let {DOCUMENT_MODE: r} = n(3707), i = "html",
            a = ["+//silmaril//dtd html pro v0r11 19970101//", "-//as//dtd html 3.0 aswedit + extensions//", "-//advasoft ltd//dtd html 3.0 aswedit + extensions//", "-//ietf//dtd html 2.0 level 1//", "-//ietf//dtd html 2.0 level 2//", "-//ietf//dtd html 2.0 strict level 1//", "-//ietf//dtd html 2.0 strict level 2//", "-//ietf//dtd html 2.0 strict//", "-//ietf//dtd html 2.0//", "-//ietf//dtd html 2.1e//", "-//ietf//dtd html 3.0//", "-//ietf//dtd html 3.2 final//", "-//ietf//dtd html 3.2//", "-//ietf//dtd html 3//", "-//ietf//dtd html level 0//", "-//ietf//dtd html level 1//", "-//ietf//dtd html level 2//", "-//ietf//dtd html level 3//", "-//ietf//dtd html strict level 0//", "-//ietf//dtd html strict level 1//", "-//ietf//dtd html strict level 2//", "-//ietf//dtd html strict level 3//", "-//ietf//dtd html strict//", "-//ietf//dtd html//", "-//metrius//dtd metrius presentational//", "-//microsoft//dtd internet explorer 2.0 html strict//", "-//microsoft//dtd internet explorer 2.0 html//", "-//microsoft//dtd internet explorer 2.0 tables//", "-//microsoft//dtd internet explorer 3.0 html strict//", "-//microsoft//dtd internet explorer 3.0 html//", "-//microsoft//dtd internet explorer 3.0 tables//", "-//netscape comm. corp.//dtd html//", "-//netscape comm. corp.//dtd strict html//", "-//o'reilly and associates//dtd html 2.0//", "-//o'reilly and associates//dtd html extended 1.0//", "-//o'reilly and associates//dtd html extended relaxed 1.0//", "-//sq//dtd html 2.0 hotmetal + extensions//", "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//", "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//", "-//spyglass//dtd html 2.0 extended//", "-//sun microsystems corp.//dtd hotjava html//", "-//sun microsystems corp.//dtd hotjava strict html//", "-//w3c//dtd html 3 1995-03-24//", "-//w3c//dtd html 3.2 draft//", "-//w3c//dtd html 3.2 final//", "-//w3c//dtd html 3.2//", "-//w3c//dtd html 3.2s draft//", "-//w3c//dtd html 4.0 frameset//", "-//w3c//dtd html 4.0 transitional//", "-//w3c//dtd html experimental 19960712//", "-//w3c//dtd html experimental 970421//", "-//w3c//dtd w3 html//", "-//w3o//dtd w3 html 3.0//", "-//webtechs//dtd mozilla html 2.0//", "-//webtechs//dtd mozilla html//"],
            o = a.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]),
            s = ["-//w3o//dtd w3 html strict 3.0//en//", "-/w3c/dtd html 4.0 transitional/en", "html"],
            l = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"],
            c = l.concat(["-//w3c//dtd html 4.01 frameset//", "-//w3c//dtd html 4.01 transitional//"]);

        function u(e) {
            let t = -1 !== e.indexOf('"') ? "'" : '"';
            return t + e + t
        }

        function d(e, t) {
            for (let n = 0; n < t.length; n++) if (0 === e.indexOf(t[n])) return !0;
            return !1
        }

        t.isConforming = function (e) {
            return e.name === i && null === e.publicId && (null === e.systemId || "about:legacy-compat" === e.systemId)
        }, t.getDocumentMode = function (e) {
            if (e.name !== i) return r.QUIRKS;
            let t = e.systemId;
            if (t && "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd" === t.toLowerCase()) return r.QUIRKS;
            let n = e.publicId;
            if (null !== n) {
                if (n = n.toLowerCase(), s.indexOf(n) > -1) return r.QUIRKS;
                let e = null === t ? o : a;
                if (d(n, e)) return r.QUIRKS;
                if (d(n, e = null === t ? l : c)) return r.LIMITED_QUIRKS
            }
            return r.NO_QUIRKS
        }, t.serializeContent = function (e, t, n) {
            let r = "!DOCTYPE ";
            return e && (r += e), t ? r += " PUBLIC " + u(t) : n && (r += " SYSTEM"), null !== n && (r += " " + u(n)), r
        }
    }, 9046: function (e) {
        "use strict";
        e.exports = {
            controlCharacterInInputStream: "control-character-in-input-stream",
            noncharacterInInputStream: "noncharacter-in-input-stream",
            surrogateInInputStream: "surrogate-in-input-stream",
            nonVoidHtmlElementStartTagWithTrailingSolidus: "non-void-html-element-start-tag-with-trailing-solidus",
            endTagWithAttributes: "end-tag-with-attributes",
            endTagWithTrailingSolidus: "end-tag-with-trailing-solidus",
            unexpectedSolidusInTag: "unexpected-solidus-in-tag",
            unexpectedNullCharacter: "unexpected-null-character",
            unexpectedQuestionMarkInsteadOfTagName: "unexpected-question-mark-instead-of-tag-name",
            invalidFirstCharacterOfTagName: "invalid-first-character-of-tag-name",
            unexpectedEqualsSignBeforeAttributeName: "unexpected-equals-sign-before-attribute-name",
            missingEndTagName: "missing-end-tag-name",
            unexpectedCharacterInAttributeName: "unexpected-character-in-attribute-name",
            unknownNamedCharacterReference: "unknown-named-character-reference",
            missingSemicolonAfterCharacterReference: "missing-semicolon-after-character-reference",
            unexpectedCharacterAfterDoctypeSystemIdentifier: "unexpected-character-after-doctype-system-identifier",
            unexpectedCharacterInUnquotedAttributeValue: "unexpected-character-in-unquoted-attribute-value",
            eofBeforeTagName: "eof-before-tag-name",
            eofInTag: "eof-in-tag",
            missingAttributeValue: "missing-attribute-value",
            missingWhitespaceBetweenAttributes: "missing-whitespace-between-attributes",
            missingWhitespaceAfterDoctypePublicKeyword: "missing-whitespace-after-doctype-public-keyword",
            missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers: "missing-whitespace-between-doctype-public-and-system-identifiers",
            missingWhitespaceAfterDoctypeSystemKeyword: "missing-whitespace-after-doctype-system-keyword",
            missingQuoteBeforeDoctypePublicIdentifier: "missing-quote-before-doctype-public-identifier",
            missingQuoteBeforeDoctypeSystemIdentifier: "missing-quote-before-doctype-system-identifier",
            missingDoctypePublicIdentifier: "missing-doctype-public-identifier",
            missingDoctypeSystemIdentifier: "missing-doctype-system-identifier",
            abruptDoctypePublicIdentifier: "abrupt-doctype-public-identifier",
            abruptDoctypeSystemIdentifier: "abrupt-doctype-system-identifier",
            cdataInHtmlContent: "cdata-in-html-content",
            incorrectlyOpenedComment: "incorrectly-opened-comment",
            eofInScriptHtmlCommentLikeText: "eof-in-script-html-comment-like-text",
            eofInDoctype: "eof-in-doctype",
            nestedComment: "nested-comment",
            abruptClosingOfEmptyComment: "abrupt-closing-of-empty-comment",
            eofInComment: "eof-in-comment",
            incorrectlyClosedComment: "incorrectly-closed-comment",
            eofInCdata: "eof-in-cdata",
            absenceOfDigitsInNumericCharacterReference: "absence-of-digits-in-numeric-character-reference",
            nullCharacterReference: "null-character-reference",
            surrogateCharacterReference: "surrogate-character-reference",
            characterReferenceOutsideUnicodeRange: "character-reference-outside-unicode-range",
            controlCharacterReference: "control-character-reference",
            noncharacterCharacterReference: "noncharacter-character-reference",
            missingWhitespaceBeforeDoctypeName: "missing-whitespace-before-doctype-name",
            missingDoctypeName: "missing-doctype-name",
            invalidCharacterSequenceAfterDoctypeName: "invalid-character-sequence-after-doctype-name",
            duplicateAttribute: "duplicate-attribute",
            nonConformingDoctype: "non-conforming-doctype",
            missingDoctype: "missing-doctype",
            misplacedDoctype: "misplaced-doctype",
            endTagWithoutMatchingOpenElement: "end-tag-without-matching-open-element",
            closingOfElementWithOpenChildElements: "closing-of-element-with-open-child-elements",
            disallowedContentInNoscriptInHead: "disallowed-content-in-noscript-in-head",
            openElementsLeftAfterEof: "open-elements-left-after-eof",
            abandonedHeadElementChild: "abandoned-head-element-child",
            misplacedStartTagForHeadElement: "misplaced-start-tag-for-head-element",
            nestedNoscriptInHead: "nested-noscript-in-head",
            eofInElementThatCanContainOnlyText: "eof-in-element-that-can-contain-only-text"
        }
    }, 8091: function (e, t, n) {
        "use strict";
        let r = n(196), i = n(3707), a = i.TAG_NAMES, o = i.NAMESPACES, s = i.ATTRS,
            l = {TEXT_HTML: "text/html", APPLICATION_XML: "application/xhtml+xml"}, c = {
                attributename: "attributeName",
                attributetype: "attributeType",
                basefrequency: "baseFrequency",
                baseprofile: "baseProfile",
                calcmode: "calcMode",
                clippathunits: "clipPathUnits",
                diffuseconstant: "diffuseConstant",
                edgemode: "edgeMode",
                filterunits: "filterUnits",
                glyphref: "glyphRef",
                gradienttransform: "gradientTransform",
                gradientunits: "gradientUnits",
                kernelmatrix: "kernelMatrix",
                kernelunitlength: "kernelUnitLength",
                keypoints: "keyPoints",
                keysplines: "keySplines",
                keytimes: "keyTimes",
                lengthadjust: "lengthAdjust",
                limitingconeangle: "limitingConeAngle",
                markerheight: "markerHeight",
                markerunits: "markerUnits",
                markerwidth: "markerWidth",
                maskcontentunits: "maskContentUnits",
                maskunits: "maskUnits",
                numoctaves: "numOctaves",
                pathlength: "pathLength",
                patterncontentunits: "patternContentUnits",
                patterntransform: "patternTransform",
                patternunits: "patternUnits",
                pointsatx: "pointsAtX",
                pointsaty: "pointsAtY",
                pointsatz: "pointsAtZ",
                preservealpha: "preserveAlpha",
                preserveaspectratio: "preserveAspectRatio",
                primitiveunits: "primitiveUnits",
                refx: "refX",
                refy: "refY",
                repeatcount: "repeatCount",
                repeatdur: "repeatDur",
                requiredextensions: "requiredExtensions",
                requiredfeatures: "requiredFeatures",
                specularconstant: "specularConstant",
                specularexponent: "specularExponent",
                spreadmethod: "spreadMethod",
                startoffset: "startOffset",
                stddeviation: "stdDeviation",
                stitchtiles: "stitchTiles",
                surfacescale: "surfaceScale",
                systemlanguage: "systemLanguage",
                tablevalues: "tableValues",
                targetx: "targetX",
                targety: "targetY",
                textlength: "textLength",
                viewbox: "viewBox",
                viewtarget: "viewTarget",
                xchannelselector: "xChannelSelector",
                ychannelselector: "yChannelSelector",
                zoomandpan: "zoomAndPan"
            }, u = {
                "xlink:actuate": {prefix: "xlink", name: "actuate", namespace: o.XLINK},
                "xlink:arcrole": {prefix: "xlink", name: "arcrole", namespace: o.XLINK},
                "xlink:href": {prefix: "xlink", name: "href", namespace: o.XLINK},
                "xlink:role": {prefix: "xlink", name: "role", namespace: o.XLINK},
                "xlink:show": {prefix: "xlink", name: "show", namespace: o.XLINK},
                "xlink:title": {prefix: "xlink", name: "title", namespace: o.XLINK},
                "xlink:type": {prefix: "xlink", name: "type", namespace: o.XLINK},
                "xml:base": {prefix: "xml", name: "base", namespace: o.XML},
                "xml:lang": {prefix: "xml", name: "lang", namespace: o.XML},
                "xml:space": {prefix: "xml", name: "space", namespace: o.XML},
                xmlns: {prefix: "", name: "xmlns", namespace: o.XMLNS},
                "xmlns:xlink": {prefix: "xmlns", name: "xlink", namespace: o.XMLNS}
            }, d = t.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
                altglyph: "altGlyph",
                altglyphdef: "altGlyphDef",
                altglyphitem: "altGlyphItem",
                animatecolor: "animateColor",
                animatemotion: "animateMotion",
                animatetransform: "animateTransform",
                clippath: "clipPath",
                feblend: "feBlend",
                fecolormatrix: "feColorMatrix",
                fecomponenttransfer: "feComponentTransfer",
                fecomposite: "feComposite",
                feconvolvematrix: "feConvolveMatrix",
                fediffuselighting: "feDiffuseLighting",
                fedisplacementmap: "feDisplacementMap",
                fedistantlight: "feDistantLight",
                feflood: "feFlood",
                fefunca: "feFuncA",
                fefuncb: "feFuncB",
                fefuncg: "feFuncG",
                fefuncr: "feFuncR",
                fegaussianblur: "feGaussianBlur",
                feimage: "feImage",
                femerge: "feMerge",
                femergenode: "feMergeNode",
                femorphology: "feMorphology",
                feoffset: "feOffset",
                fepointlight: "fePointLight",
                fespecularlighting: "feSpecularLighting",
                fespotlight: "feSpotLight",
                fetile: "feTile",
                feturbulence: "feTurbulence",
                foreignobject: "foreignObject",
                glyphref: "glyphRef",
                lineargradient: "linearGradient",
                radialgradient: "radialGradient",
                textpath: "textPath"
            }, p = {
                [a.B]: !0,
                [a.BIG]: !0,
                [a.BLOCKQUOTE]: !0,
                [a.BODY]: !0,
                [a.BR]: !0,
                [a.CENTER]: !0,
                [a.CODE]: !0,
                [a.DD]: !0,
                [a.DIV]: !0,
                [a.DL]: !0,
                [a.DT]: !0,
                [a.EM]: !0,
                [a.EMBED]: !0,
                [a.H1]: !0,
                [a.H2]: !0,
                [a.H3]: !0,
                [a.H4]: !0,
                [a.H5]: !0,
                [a.H6]: !0,
                [a.HEAD]: !0,
                [a.HR]: !0,
                [a.I]: !0,
                [a.IMG]: !0,
                [a.LI]: !0,
                [a.LISTING]: !0,
                [a.MENU]: !0,
                [a.META]: !0,
                [a.NOBR]: !0,
                [a.OL]: !0,
                [a.P]: !0,
                [a.PRE]: !0,
                [a.RUBY]: !0,
                [a.S]: !0,
                [a.SMALL]: !0,
                [a.SPAN]: !0,
                [a.STRONG]: !0,
                [a.STRIKE]: !0,
                [a.SUB]: !0,
                [a.SUP]: !0,
                [a.TABLE]: !0,
                [a.TT]: !0,
                [a.U]: !0,
                [a.UL]: !0,
                [a.VAR]: !0
            };
        t.causesExit = function (e) {
            let t = e.tagName,
                n = t === a.FONT && (null !== r.getTokenAttr(e, s.COLOR) || null !== r.getTokenAttr(e, s.SIZE) || null !== r.getTokenAttr(e, s.FACE));
            return !!n || p[t]
        }, t.adjustTokenMathMLAttrs = function (e) {
            for (let t = 0; t < e.attrs.length; t++) if ("definitionurl" === e.attrs[t].name) {
                e.attrs[t].name = "definitionURL";
                break
            }
        }, t.adjustTokenSVGAttrs = function (e) {
            for (let t = 0; t < e.attrs.length; t++) {
                let n = c[e.attrs[t].name];
                n && (e.attrs[t].name = n)
            }
        }, t.adjustTokenXMLAttrs = function (e) {
            for (let t = 0; t < e.attrs.length; t++) {
                let n = u[e.attrs[t].name];
                n && (e.attrs[t].prefix = n.prefix, e.attrs[t].name = n.name, e.attrs[t].namespace = n.namespace)
            }
        }, t.adjustTokenSVGTagName = function (e) {
            let t = d[e.tagName];
            t && (e.tagName = t)
        }, t.isIntegrationPoint = function (e, t, n, r) {
            return !!((!r || r === o.HTML) && function (e, t, n) {
                if (t === o.MATHML && e === a.ANNOTATION_XML) {
                    for (let e = 0; e < n.length; e++) if (n[e].name === s.ENCODING) {
                        let t = n[e].value.toLowerCase();
                        return t === l.TEXT_HTML || t === l.APPLICATION_XML
                    }
                }
                return t === o.SVG && (e === a.FOREIGN_OBJECT || e === a.DESC || e === a.TITLE)
            }(e, t, n)) || (!r || r === o.MATHML) && t === o.MATHML && (e === a.MI || e === a.MO || e === a.MN || e === a.MS || e === a.MTEXT)
        }
    }, 3707: function (e, t) {
        "use strict";
        let n = t.NAMESPACES = {
            HTML: "http://www.w3.org/1999/xhtml",
            MATHML: "http://www.w3.org/1998/Math/MathML",
            SVG: "http://www.w3.org/2000/svg",
            XLINK: "http://www.w3.org/1999/xlink",
            XML: "http://www.w3.org/XML/1998/namespace",
            XMLNS: "http://www.w3.org/2000/xmlns/"
        };
        t.ATTRS = {
            TYPE: "type",
            ACTION: "action",
            ENCODING: "encoding",
            PROMPT: "prompt",
            NAME: "name",
            COLOR: "color",
            FACE: "face",
            SIZE: "size"
        }, t.DOCUMENT_MODE = {NO_QUIRKS: "no-quirks", QUIRKS: "quirks", LIMITED_QUIRKS: "limited-quirks"};
        let r = t.TAG_NAMES = {
            A: "a",
            ADDRESS: "address",
            ANNOTATION_XML: "annotation-xml",
            APPLET: "applet",
            AREA: "area",
            ARTICLE: "article",
            ASIDE: "aside",
            B: "b",
            BASE: "base",
            BASEFONT: "basefont",
            BGSOUND: "bgsound",
            BIG: "big",
            BLOCKQUOTE: "blockquote",
            BODY: "body",
            BR: "br",
            BUTTON: "button",
            CAPTION: "caption",
            CENTER: "center",
            CODE: "code",
            COL: "col",
            COLGROUP: "colgroup",
            DD: "dd",
            DESC: "desc",
            DETAILS: "details",
            DIALOG: "dialog",
            DIR: "dir",
            DIV: "div",
            DL: "dl",
            DT: "dt",
            EM: "em",
            EMBED: "embed",
            FIELDSET: "fieldset",
            FIGCAPTION: "figcaption",
            FIGURE: "figure",
            FONT: "font",
            FOOTER: "footer",
            FOREIGN_OBJECT: "foreignObject",
            FORM: "form",
            FRAME: "frame",
            FRAMESET: "frameset",
            H1: "h1",
            H2: "h2",
            H3: "h3",
            H4: "h4",
            H5: "h5",
            H6: "h6",
            HEAD: "head",
            HEADER: "header",
            HGROUP: "hgroup",
            HR: "hr",
            HTML: "html",
            I: "i",
            IMG: "img",
            IMAGE: "image",
            INPUT: "input",
            IFRAME: "iframe",
            KEYGEN: "keygen",
            LABEL: "label",
            LI: "li",
            LINK: "link",
            LISTING: "listing",
            MAIN: "main",
            MALIGNMARK: "malignmark",
            MARQUEE: "marquee",
            MATH: "math",
            MENU: "menu",
            META: "meta",
            MGLYPH: "mglyph",
            MI: "mi",
            MO: "mo",
            MN: "mn",
            MS: "ms",
            MTEXT: "mtext",
            NAV: "nav",
            NOBR: "nobr",
            NOFRAMES: "noframes",
            NOEMBED: "noembed",
            NOSCRIPT: "noscript",
            OBJECT: "object",
            OL: "ol",
            OPTGROUP: "optgroup",
            OPTION: "option",
            P: "p",
            PARAM: "param",
            PLAINTEXT: "plaintext",
            PRE: "pre",
            RB: "rb",
            RP: "rp",
            RT: "rt",
            RTC: "rtc",
            RUBY: "ruby",
            S: "s",
            SCRIPT: "script",
            SECTION: "section",
            SELECT: "select",
            SOURCE: "source",
            SMALL: "small",
            SPAN: "span",
            STRIKE: "strike",
            STRONG: "strong",
            STYLE: "style",
            SUB: "sub",
            SUMMARY: "summary",
            SUP: "sup",
            TABLE: "table",
            TBODY: "tbody",
            TEMPLATE: "template",
            TEXTAREA: "textarea",
            TFOOT: "tfoot",
            TD: "td",
            TH: "th",
            THEAD: "thead",
            TITLE: "title",
            TR: "tr",
            TRACK: "track",
            TT: "tt",
            U: "u",
            UL: "ul",
            SVG: "svg",
            VAR: "var",
            WBR: "wbr",
            XMP: "xmp"
        };
        t.SPECIAL_ELEMENTS = {
            [n.HTML]: {
                [r.ADDRESS]: !0,
                [r.APPLET]: !0,
                [r.AREA]: !0,
                [r.ARTICLE]: !0,
                [r.ASIDE]: !0,
                [r.BASE]: !0,
                [r.BASEFONT]: !0,
                [r.BGSOUND]: !0,
                [r.BLOCKQUOTE]: !0,
                [r.BODY]: !0,
                [r.BR]: !0,
                [r.BUTTON]: !0,
                [r.CAPTION]: !0,
                [r.CENTER]: !0,
                [r.COL]: !0,
                [r.COLGROUP]: !0,
                [r.DD]: !0,
                [r.DETAILS]: !0,
                [r.DIR]: !0,
                [r.DIV]: !0,
                [r.DL]: !0,
                [r.DT]: !0,
                [r.EMBED]: !0,
                [r.FIELDSET]: !0,
                [r.FIGCAPTION]: !0,
                [r.FIGURE]: !0,
                [r.FOOTER]: !0,
                [r.FORM]: !0,
                [r.FRAME]: !0,
                [r.FRAMESET]: !0,
                [r.H1]: !0,
                [r.H2]: !0,
                [r.H3]: !0,
                [r.H4]: !0,
                [r.H5]: !0,
                [r.H6]: !0,
                [r.HEAD]: !0,
                [r.HEADER]: !0,
                [r.HGROUP]: !0,
                [r.HR]: !0,
                [r.HTML]: !0,
                [r.IFRAME]: !0,
                [r.IMG]: !0,
                [r.INPUT]: !0,
                [r.LI]: !0,
                [r.LINK]: !0,
                [r.LISTING]: !0,
                [r.MAIN]: !0,
                [r.MARQUEE]: !0,
                [r.MENU]: !0,
                [r.META]: !0,
                [r.NAV]: !0,
                [r.NOEMBED]: !0,
                [r.NOFRAMES]: !0,
                [r.NOSCRIPT]: !0,
                [r.OBJECT]: !0,
                [r.OL]: !0,
                [r.P]: !0,
                [r.PARAM]: !0,
                [r.PLAINTEXT]: !0,
                [r.PRE]: !0,
                [r.SCRIPT]: !0,
                [r.SECTION]: !0,
                [r.SELECT]: !0,
                [r.SOURCE]: !0,
                [r.STYLE]: !0,
                [r.SUMMARY]: !0,
                [r.TABLE]: !0,
                [r.TBODY]: !0,
                [r.TD]: !0,
                [r.TEMPLATE]: !0,
                [r.TEXTAREA]: !0,
                [r.TFOOT]: !0,
                [r.TH]: !0,
                [r.THEAD]: !0,
                [r.TITLE]: !0,
                [r.TR]: !0,
                [r.TRACK]: !0,
                [r.UL]: !0,
                [r.WBR]: !0,
                [r.XMP]: !0
            },
            [n.MATHML]: {[r.MI]: !0, [r.MO]: !0, [r.MN]: !0, [r.MS]: !0, [r.MTEXT]: !0, [r.ANNOTATION_XML]: !0},
            [n.SVG]: {[r.TITLE]: !0, [r.FOREIGN_OBJECT]: !0, [r.DESC]: !0}
        }
    }, 1683: function (e, t) {
        "use strict";
        let n = [65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111];
        t.REPLACEMENT_CHARACTER = "�", t.CODE_POINTS = {
            EOF: -1,
            NULL: 0,
            TABULATION: 9,
            CARRIAGE_RETURN: 13,
            LINE_FEED: 10,
            FORM_FEED: 12,
            SPACE: 32,
            EXCLAMATION_MARK: 33,
            QUOTATION_MARK: 34,
            NUMBER_SIGN: 35,
            AMPERSAND: 38,
            APOSTROPHE: 39,
            HYPHEN_MINUS: 45,
            SOLIDUS: 47,
            DIGIT_0: 48,
            DIGIT_9: 57,
            SEMICOLON: 59,
            LESS_THAN_SIGN: 60,
            EQUALS_SIGN: 61,
            GREATER_THAN_SIGN: 62,
            QUESTION_MARK: 63,
            LATIN_CAPITAL_A: 65,
            LATIN_CAPITAL_F: 70,
            LATIN_CAPITAL_X: 88,
            LATIN_CAPITAL_Z: 90,
            RIGHT_SQUARE_BRACKET: 93,
            GRAVE_ACCENT: 96,
            LATIN_SMALL_A: 97,
            LATIN_SMALL_F: 102,
            LATIN_SMALL_X: 120,
            LATIN_SMALL_Z: 122,
            REPLACEMENT_CHARACTER: 65533
        }, t.CODE_POINT_SEQUENCES = {
            DASH_DASH_STRING: [45, 45],
            DOCTYPE_STRING: [68, 79, 67, 84, 89, 80, 69],
            CDATA_START_STRING: [91, 67, 68, 65, 84, 65, 91],
            SCRIPT_STRING: [115, 99, 114, 105, 112, 116],
            PUBLIC_STRING: [80, 85, 66, 76, 73, 67],
            SYSTEM_STRING: [83, 89, 83, 84, 69, 77]
        }, t.isSurrogate = function (e) {
            return e >= 55296 && e <= 57343
        }, t.isSurrogatePair = function (e) {
            return e >= 56320 && e <= 57343
        }, t.getSurrogatePairCodePoint = function (e, t) {
            return (e - 55296) * 1024 + 9216 + t
        }, t.isControlCodePoint = function (e) {
            return 32 !== e && 10 !== e && 13 !== e && 9 !== e && 12 !== e && e >= 1 && e <= 31 || e >= 127 && e <= 159
        }, t.isUndefinedCodePoint = function (e) {
            return e >= 64976 && e <= 65007 || n.indexOf(e) > -1
        }
    }, 7008: function (e, t, n) {
        "use strict";
        let r = n(5930);
        e.exports = class extends r {
            constructor(e, t) {
                super(e), this.posTracker = null, this.onParseError = t.onParseError
            }

            _setErrorLocation(e) {
                e.startLine = e.endLine = this.posTracker.line, e.startCol = e.endCol = this.posTracker.col, e.startOffset = e.endOffset = this.posTracker.offset
            }

            _reportError(e) {
                let t = {code: e, startLine: -1, startCol: -1, startOffset: -1, endLine: -1, endCol: -1, endOffset: -1};
                this._setErrorLocation(t), this.onParseError(t)
            }

            _getOverriddenMethods(e) {
                return {
                    _err(t) {
                        e._reportError(t)
                    }
                }
            }
        }
    }, 7335: function (e, t, n) {
        "use strict";
        let r = n(7008), i = n(3041), a = n(8612), o = n(5930);
        e.exports = class extends r {
            constructor(e, t) {
                super(e, t), this.opts = t, this.ctLoc = null, this.locBeforeToken = !1
            }

            _setErrorLocation(e) {
                this.ctLoc && (e.startLine = this.ctLoc.startLine, e.startCol = this.ctLoc.startCol, e.startOffset = this.ctLoc.startOffset, e.endLine = this.locBeforeToken ? this.ctLoc.startLine : this.ctLoc.endLine, e.endCol = this.locBeforeToken ? this.ctLoc.startCol : this.ctLoc.endCol, e.endOffset = this.locBeforeToken ? this.ctLoc.startOffset : this.ctLoc.endOffset)
            }

            _getOverriddenMethods(e, t) {
                return {
                    _bootstrap(n, r) {
                        t._bootstrap.call(this, n, r), o.install(this.tokenizer, i, e.opts), o.install(this.tokenizer, a)
                    }, _processInputToken(n) {
                        e.ctLoc = n.location, t._processInputToken.call(this, n)
                    }, _err(t, n) {
                        e.locBeforeToken = n && n.beforeToken, e._reportError(t)
                    }
                }
            }
        }
    }, 6680: function (e, t, n) {
        "use strict";
        let r = n(7008), i = n(3033), a = n(5930);
        e.exports = class extends r {
            constructor(e, t) {
                super(e, t), this.posTracker = a.install(e, i), this.lastErrOffset = -1
            }

            _reportError(e) {
                this.lastErrOffset !== this.posTracker.offset && (this.lastErrOffset = this.posTracker.offset, super._reportError(e))
            }
        }
    }, 3041: function (e, t, n) {
        "use strict";
        let r = n(7008), i = n(6680), a = n(5930);
        e.exports = class extends r {
            constructor(e, t) {
                super(e, t);
                let n = a.install(e.preprocessor, i, t);
                this.posTracker = n.posTracker
            }
        }
    }, 724: function (e, t, n) {
        "use strict";
        let r = n(5930);
        e.exports = class extends r {
            constructor(e, t) {
                super(e), this.onItemPop = t.onItemPop
            }

            _getOverriddenMethods(e, t) {
                return {
                    pop() {
                        e.onItemPop(this.current), t.pop.call(this)
                    }, popAllUpToHtmlElement() {
                        for (let t = this.stackTop; t > 0; t--) e.onItemPop(this.items[t]);
                        t.popAllUpToHtmlElement.call(this)
                    }, remove(n) {
                        e.onItemPop(this.current), t.remove.call(this, n)
                    }
                }
            }
        }
    }, 3895: function (e, t, n) {
        "use strict";
        let r = n(5930), i = n(196), a = n(8612), o = n(724), s = n(3707), l = s.TAG_NAMES;
        e.exports = class extends r {
            constructor(e) {
                super(e), this.parser = e, this.treeAdapter = this.parser.treeAdapter, this.posTracker = null, this.lastStartTagToken = null, this.lastFosterParentingLocation = null, this.currentToken = null
            }

            _setStartLocation(e) {
                let t = null;
                this.lastStartTagToken && ((t = Object.assign({}, this.lastStartTagToken.location)).startTag = this.lastStartTagToken.location), this.treeAdapter.setNodeSourceCodeLocation(e, t)
            }

            _setEndLocation(e, t) {
                let n = this.treeAdapter.getNodeSourceCodeLocation(e);
                if (n && t.location) {
                    let n = t.location, r = this.treeAdapter.getTagName(e),
                        a = t.type === i.END_TAG_TOKEN && r === t.tagName, o = {};
                    a ? (o.endTag = Object.assign({}, n), o.endLine = n.endLine, o.endCol = n.endCol, o.endOffset = n.endOffset) : (o.endLine = n.startLine, o.endCol = n.startCol, o.endOffset = n.startOffset), this.treeAdapter.updateNodeSourceCodeLocation(e, o)
                }
            }

            _getOverriddenMethods(e, t) {
                return {
                    _bootstrap(n, i) {
                        t._bootstrap.call(this, n, i), e.lastStartTagToken = null, e.lastFosterParentingLocation = null, e.currentToken = null;
                        let s = r.install(this.tokenizer, a);
                        e.posTracker = s.posTracker, r.install(this.openElements, o, {
                            onItemPop: function (t) {
                                e._setEndLocation(t, e.currentToken)
                            }
                        })
                    }, _runParsingLoop(n) {
                        t._runParsingLoop.call(this, n);
                        for (let t = this.openElements.stackTop; t >= 0; t--) e._setEndLocation(this.openElements.items[t], e.currentToken)
                    }, _processTokenInForeignContent(n) {
                        e.currentToken = n, t._processTokenInForeignContent.call(this, n)
                    }, _processToken(n) {
                        e.currentToken = n, t._processToken.call(this, n);
                        let r = n.type === i.END_TAG_TOKEN && (n.tagName === l.HTML || n.tagName === l.BODY && this.openElements.hasInScope(l.BODY));
                        if (r) for (let t = this.openElements.stackTop; t >= 0; t--) {
                            let r = this.openElements.items[t];
                            if (this.treeAdapter.getTagName(r) === n.tagName) {
                                e._setEndLocation(r, n);
                                break
                            }
                        }
                    }, _setDocumentType(e) {
                        t._setDocumentType.call(this, e);
                        let n = this.treeAdapter.getChildNodes(this.document), r = n.length;
                        for (let t = 0; t < r; t++) {
                            let r = n[t];
                            if (this.treeAdapter.isDocumentTypeNode(r)) {
                                this.treeAdapter.setNodeSourceCodeLocation(r, e.location);
                                break
                            }
                        }
                    }, _attachElementToTree(n) {
                        e._setStartLocation(n), e.lastStartTagToken = null, t._attachElementToTree.call(this, n)
                    }, _appendElement(n, r) {
                        e.lastStartTagToken = n, t._appendElement.call(this, n, r)
                    }, _insertElement(n, r) {
                        e.lastStartTagToken = n, t._insertElement.call(this, n, r)
                    }, _insertTemplate(n) {
                        e.lastStartTagToken = n, t._insertTemplate.call(this, n);
                        let r = this.treeAdapter.getTemplateContent(this.openElements.current);
                        this.treeAdapter.setNodeSourceCodeLocation(r, null)
                    }, _insertFakeRootElement() {
                        t._insertFakeRootElement.call(this), this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current, null)
                    }, _appendCommentNode(e, n) {
                        t._appendCommentNode.call(this, e, n);
                        let r = this.treeAdapter.getChildNodes(n), i = r[r.length - 1];
                        this.treeAdapter.setNodeSourceCodeLocation(i, e.location)
                    }, _findFosterParentingLocation() {
                        return e.lastFosterParentingLocation = t._findFosterParentingLocation.call(this), e.lastFosterParentingLocation
                    }, _insertCharacters(n) {
                        t._insertCharacters.call(this, n);
                        let r = this._shouldFosterParentOnInsertion(),
                            i = r && e.lastFosterParentingLocation.parent || this.openElements.currentTmplContent || this.openElements.current,
                            a = this.treeAdapter.getChildNodes(i),
                            o = r && e.lastFosterParentingLocation.beforeElement ? a.indexOf(e.lastFosterParentingLocation.beforeElement) - 1 : a.length - 1,
                            s = a[o], l = this.treeAdapter.getNodeSourceCodeLocation(s);
                        if (l) {
                            let {endLine: e, endCol: t, endOffset: r} = n.location;
                            this.treeAdapter.updateNodeSourceCodeLocation(s, {endLine: e, endCol: t, endOffset: r})
                        } else this.treeAdapter.setNodeSourceCodeLocation(s, n.location)
                    }
                }
            }
        }
    }, 8612: function (e, t, n) {
        "use strict";
        let r = n(5930), i = n(196), a = n(3033);
        e.exports = class extends r {
            constructor(e) {
                super(e), this.tokenizer = e, this.posTracker = r.install(e.preprocessor, a), this.currentAttrLocation = null, this.ctLoc = null
            }

            _getCurrentLocation() {
                return {
                    startLine: this.posTracker.line,
                    startCol: this.posTracker.col,
                    startOffset: this.posTracker.offset,
                    endLine: -1,
                    endCol: -1,
                    endOffset: -1
                }
            }

            _attachCurrentAttrLocationInfo() {
                this.currentAttrLocation.endLine = this.posTracker.line, this.currentAttrLocation.endCol = this.posTracker.col, this.currentAttrLocation.endOffset = this.posTracker.offset;
                let e = this.tokenizer.currentToken, t = this.tokenizer.currentAttr;
                e.location.attrs || (e.location.attrs = Object.create(null)), e.location.attrs[t.name] = this.currentAttrLocation
            }

            _getOverriddenMethods(e, t) {
                let n = {
                    _createStartTagToken() {
                        t._createStartTagToken.call(this), this.currentToken.location = e.ctLoc
                    }, _createEndTagToken() {
                        t._createEndTagToken.call(this), this.currentToken.location = e.ctLoc
                    }, _createCommentToken() {
                        t._createCommentToken.call(this), this.currentToken.location = e.ctLoc
                    }, _createDoctypeToken(n) {
                        t._createDoctypeToken.call(this, n), this.currentToken.location = e.ctLoc
                    }, _createCharacterToken(n, r) {
                        t._createCharacterToken.call(this, n, r), this.currentCharacterToken.location = e.ctLoc
                    }, _createEOFToken() {
                        t._createEOFToken.call(this), this.currentToken.location = e._getCurrentLocation()
                    }, _createAttr(n) {
                        t._createAttr.call(this, n), e.currentAttrLocation = e._getCurrentLocation()
                    }, _leaveAttrName(n) {
                        t._leaveAttrName.call(this, n), e._attachCurrentAttrLocationInfo()
                    }, _leaveAttrValue(n) {
                        t._leaveAttrValue.call(this, n), e._attachCurrentAttrLocationInfo()
                    }, _emitCurrentToken() {
                        let n = this.currentToken.location;
                        this.currentCharacterToken && (this.currentCharacterToken.location.endLine = n.startLine, this.currentCharacterToken.location.endCol = n.startCol, this.currentCharacterToken.location.endOffset = n.startOffset), this.currentToken.type === i.EOF_TOKEN ? (n.endLine = n.startLine, n.endCol = n.startCol, n.endOffset = n.startOffset) : (n.endLine = e.posTracker.line, n.endCol = e.posTracker.col + 1, n.endOffset = e.posTracker.offset + 1), t._emitCurrentToken.call(this)
                    }, _emitCurrentCharacterToken() {
                        let n = this.currentCharacterToken && this.currentCharacterToken.location;
                        n && -1 === n.endOffset && (n.endLine = e.posTracker.line, n.endCol = e.posTracker.col, n.endOffset = e.posTracker.offset), t._emitCurrentCharacterToken.call(this)
                    }
                };
                return Object.keys(i.MODE).forEach(r => {
                    let a = i.MODE[r];
                    n[a] = function (n) {
                        e.ctLoc = e._getCurrentLocation(), t[a].call(this, n)
                    }
                }), n
            }
        }
    }, 3033: function (e, t, n) {
        "use strict";
        let r = n(5930);
        e.exports = class extends r {
            constructor(e) {
                super(e), this.preprocessor = e, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.offset = 0, this.col = 0, this.line = 1
            }

            _getOverriddenMethods(e, t) {
                return {
                    advance() {
                        let n = this.pos + 1, r = this.html[n];
                        return e.isEol && (e.isEol = !1, e.line++, e.lineStartPos = n), ("\n" === r || "\r" === r && "\n" !== this.html[n + 1]) && (e.isEol = !0), e.col = n - e.lineStartPos + 1, e.offset = e.droppedBufferSize + n, t.advance.call(this)
                    }, retreat() {
                        t.retreat.call(this), e.isEol = !1, e.col = this.pos - e.lineStartPos + 1
                    }, dropParsedChunk() {
                        let n = this.pos;
                        t.dropParsedChunk.call(this);
                        let r = n - this.pos;
                        e.lineStartPos -= r, e.droppedBufferSize += r, e.offset = e.droppedBufferSize + this.pos
                    }
                }
            }
        }
    }, 3845: function (e) {
        "use strict";

        class t {
            constructor(e) {
                this.length = 0, this.entries = [], this.treeAdapter = e, this.bookmark = null
            }

            _getNoahArkConditionCandidates(e) {
                let n = [];
                if (this.length >= 3) {
                    let r = this.treeAdapter.getAttrList(e).length, i = this.treeAdapter.getTagName(e),
                        a = this.treeAdapter.getNamespaceURI(e);
                    for (let e = this.length - 1; e >= 0; e--) {
                        let o = this.entries[e];
                        if (o.type === t.MARKER_ENTRY) break;
                        let s = o.element, l = this.treeAdapter.getAttrList(s),
                            c = this.treeAdapter.getTagName(s) === i && this.treeAdapter.getNamespaceURI(s) === a && l.length === r;
                        c && n.push({idx: e, attrs: l})
                    }
                }
                return n.length < 3 ? [] : n
            }

            _ensureNoahArkCondition(e) {
                let t = this._getNoahArkConditionCandidates(e), n = t.length;
                if (n) {
                    let r = this.treeAdapter.getAttrList(e), i = r.length, a = Object.create(null);
                    for (let e = 0; e < i; e++) {
                        let t = r[e];
                        a[t.name] = t.value
                    }
                    for (let e = 0; e < i; e++) for (let r = 0; r < n; r++) {
                        let i = t[r].attrs[e];
                        if (a[i.name] !== i.value && (t.splice(r, 1), n--), t.length < 3) return
                    }
                    for (let e = n - 1; e >= 2; e--) this.entries.splice(t[e].idx, 1), this.length--
                }
            }

            insertMarker() {
                this.entries.push({type: t.MARKER_ENTRY}), this.length++
            }

            pushElement(e, n) {
                this._ensureNoahArkCondition(e), this.entries.push({
                    type: t.ELEMENT_ENTRY,
                    element: e,
                    token: n
                }), this.length++
            }

            insertElementAfterBookmark(e, n) {
                let r = this.length - 1;
                for (; r >= 0 && this.entries[r] !== this.bookmark; r--) ;
                this.entries.splice(r + 1, 0, {type: t.ELEMENT_ENTRY, element: e, token: n}), this.length++
            }

            removeEntry(e) {
                for (let t = this.length - 1; t >= 0; t--) if (this.entries[t] === e) {
                    this.entries.splice(t, 1), this.length--;
                    break
                }
            }

            clearToLastMarker() {
                for (; this.length;) {
                    let e = this.entries.pop();
                    if (this.length--, e.type === t.MARKER_ENTRY) break
                }
            }

            getElementEntryInScopeWithTagName(e) {
                for (let n = this.length - 1; n >= 0; n--) {
                    let r = this.entries[n];
                    if (r.type === t.MARKER_ENTRY) break;
                    if (this.treeAdapter.getTagName(r.element) === e) return r
                }
                return null
            }

            getElementEntry(e) {
                for (let n = this.length - 1; n >= 0; n--) {
                    let r = this.entries[n];
                    if (r.type === t.ELEMENT_ENTRY && r.element === e) return r
                }
                return null
            }
        }

        t.MARKER_ENTRY = "MARKER_ENTRY", t.ELEMENT_ENTRY = "ELEMENT_ENTRY", e.exports = t
    }, 7915: function (e, t, n) {
        "use strict";
        let r = n(196), i = n(8394), a = n(3845), o = n(3895), s = n(7335), l = n(5930), c = n(8491), u = n(7169),
            d = n(1959), p = n(8091), h = n(9046), m = n(1683), f = n(3707), g = f.TAG_NAMES, E = f.NAMESPACES,
            T = f.ATTRS, _ = {scriptingEnabled: !0, sourceCodeLocationInfo: !1, onParseError: null, treeAdapter: c},
            b = "hidden", A = "INITIAL_MODE", y = "BEFORE_HTML_MODE", N = "BEFORE_HEAD_MODE", k = "IN_HEAD_MODE",
            C = "IN_HEAD_NO_SCRIPT_MODE", S = "AFTER_HEAD_MODE", O = "IN_BODY_MODE", x = "TEXT_MODE",
            v = "IN_TABLE_MODE", I = "IN_TABLE_TEXT_MODE", w = "IN_CAPTION_MODE", R = "IN_COLUMN_GROUP_MODE",
            M = "IN_TABLE_BODY_MODE", L = "IN_ROW_MODE", D = "IN_CELL_MODE", P = "IN_SELECT_MODE",
            F = "IN_SELECT_IN_TABLE_MODE", H = "IN_TEMPLATE_MODE", B = "AFTER_BODY_MODE", U = "IN_FRAMESET_MODE",
            K = "AFTER_FRAMESET_MODE", G = "AFTER_AFTER_BODY_MODE", z = "AFTER_AFTER_FRAMESET_MODE", j = {
                [g.TR]: L,
                [g.TBODY]: M,
                [g.THEAD]: M,
                [g.TFOOT]: M,
                [g.CAPTION]: w,
                [g.COLGROUP]: R,
                [g.TABLE]: v,
                [g.BODY]: O,
                [g.FRAMESET]: U
            }, $ = {
                [g.CAPTION]: v,
                [g.COLGROUP]: v,
                [g.TBODY]: v,
                [g.TFOOT]: v,
                [g.THEAD]: v,
                [g.COL]: R,
                [g.TR]: M,
                [g.TD]: L,
                [g.TH]: L
            }, q = {
                [A]: {
                    [r.CHARACTER_TOKEN]: ee,
                    [r.NULL_CHARACTER_TOKEN]: ee,
                    [r.WHITESPACE_CHARACTER_TOKEN]: Y,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: function (e, t) {
                        e._setDocumentType(t);
                        let n = t.forceQuirks ? f.DOCUMENT_MODE.QUIRKS : d.getDocumentMode(t);
                        d.isConforming(t) || e._err(h.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, n), e.insertionMode = y
                    },
                    [r.START_TAG_TOKEN]: ee,
                    [r.END_TAG_TOKEN]: ee,
                    [r.EOF_TOKEN]: ee
                },
                [y]: {
                    [r.CHARACTER_TOKEN]: et,
                    [r.NULL_CHARACTER_TOKEN]: et,
                    [r.WHITESPACE_CHARACTER_TOKEN]: Y,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        t.tagName === g.HTML ? (e._insertElement(t, E.HTML), e.insertionMode = N) : et(e, t)
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        (n === g.HTML || n === g.HEAD || n === g.BODY || n === g.BR) && et(e, t)
                    },
                    [r.EOF_TOKEN]: et
                },
                [N]: {
                    [r.CHARACTER_TOKEN]: en,
                    [r.NULL_CHARACTER_TOKEN]: en,
                    [r.WHITESPACE_CHARACTER_TOKEN]: Y,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Q,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.HTML ? eb(e, t) : n === g.HEAD ? (e._insertElement(t, E.HTML), e.headElement = e.openElements.current, e.insertionMode = k) : en(e, t)
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.HEAD || n === g.BODY || n === g.HTML || n === g.BR ? en(e, t) : e._err(h.endTagWithoutMatchingOpenElement)
                    },
                    [r.EOF_TOKEN]: en
                },
                [k]: {
                    [r.CHARACTER_TOKEN]: ea,
                    [r.NULL_CHARACTER_TOKEN]: ea,
                    [r.WHITESPACE_CHARACTER_TOKEN]: Z,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Q,
                    [r.START_TAG_TOKEN]: er,
                    [r.END_TAG_TOKEN]: ei,
                    [r.EOF_TOKEN]: ea
                },
                [C]: {
                    [r.CHARACTER_TOKEN]: eo,
                    [r.NULL_CHARACTER_TOKEN]: eo,
                    [r.WHITESPACE_CHARACTER_TOKEN]: Z,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Q,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.HTML ? eb(e, t) : n === g.BASEFONT || n === g.BGSOUND || n === g.HEAD || n === g.LINK || n === g.META || n === g.NOFRAMES || n === g.STYLE ? er(e, t) : n === g.NOSCRIPT ? e._err(h.nestedNoscriptInHead) : eo(e, t)
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.NOSCRIPT ? (e.openElements.pop(), e.insertionMode = k) : n === g.BR ? eo(e, t) : e._err(h.endTagWithoutMatchingOpenElement)
                    },
                    [r.EOF_TOKEN]: eo
                },
                [S]: {
                    [r.CHARACTER_TOKEN]: es,
                    [r.NULL_CHARACTER_TOKEN]: es,
                    [r.WHITESPACE_CHARACTER_TOKEN]: Z,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Q,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.HTML ? eb(e, t) : n === g.BODY ? (e._insertElement(t, E.HTML), e.framesetOk = !1, e.insertionMode = O) : n === g.FRAMESET ? (e._insertElement(t, E.HTML), e.insertionMode = U) : n === g.BASE || n === g.BASEFONT || n === g.BGSOUND || n === g.LINK || n === g.META || n === g.NOFRAMES || n === g.SCRIPT || n === g.STYLE || n === g.TEMPLATE || n === g.TITLE ? (e._err(h.abandonedHeadElementChild), e.openElements.push(e.headElement), er(e, t), e.openElements.remove(e.headElement)) : n === g.HEAD ? e._err(h.misplacedStartTagForHeadElement) : es(e, t)
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.BODY || n === g.HTML || n === g.BR ? es(e, t) : n === g.TEMPLATE ? ei(e, t) : e._err(h.endTagWithoutMatchingOpenElement)
                    },
                    [r.EOF_TOKEN]: es
                },
                [O]: {
                    [r.CHARACTER_TOKEN]: ec,
                    [r.NULL_CHARACTER_TOKEN]: Y,
                    [r.WHITESPACE_CHARACTER_TOKEN]: el,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: eb,
                    [r.END_TAG_TOKEN]: ek,
                    [r.EOF_TOKEN]: eC
                },
                [x]: {
                    [r.CHARACTER_TOKEN]: Z,
                    [r.NULL_CHARACTER_TOKEN]: Z,
                    [r.WHITESPACE_CHARACTER_TOKEN]: Z,
                    [r.COMMENT_TOKEN]: Y,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: Y,
                    [r.END_TAG_TOKEN]: function (e, t) {
                        t.tagName === g.SCRIPT && (e.pendingScript = e.openElements.current), e.openElements.pop(), e.insertionMode = e.originalInsertionMode
                    },
                    [r.EOF_TOKEN]: function (e, t) {
                        e._err(h.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e._processToken(t)
                    }
                },
                [v]: {
                    [r.CHARACTER_TOKEN]: eS,
                    [r.NULL_CHARACTER_TOKEN]: eS,
                    [r.WHITESPACE_CHARACTER_TOKEN]: eS,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: eO,
                    [r.END_TAG_TOKEN]: ex,
                    [r.EOF_TOKEN]: eC
                },
                [I]: {
                    [r.CHARACTER_TOKEN]: function (e, t) {
                        e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0
                    },
                    [r.NULL_CHARACTER_TOKEN]: Y,
                    [r.WHITESPACE_CHARACTER_TOKEN]: function (e, t) {
                        e.pendingCharacterTokens.push(t)
                    },
                    [r.COMMENT_TOKEN]: eI,
                    [r.DOCTYPE_TOKEN]: eI,
                    [r.START_TAG_TOKEN]: eI,
                    [r.END_TAG_TOKEN]: eI,
                    [r.EOF_TOKEN]: eI
                },
                [w]: {
                    [r.CHARACTER_TOKEN]: ec,
                    [r.NULL_CHARACTER_TOKEN]: Y,
                    [r.WHITESPACE_CHARACTER_TOKEN]: el,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.CAPTION || n === g.COL || n === g.COLGROUP || n === g.TBODY || n === g.TD || n === g.TFOOT || n === g.TH || n === g.THEAD || n === g.TR ? e.openElements.hasInTableScope(g.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(g.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = v, e._processToken(t)) : eb(e, t)
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.CAPTION || n === g.TABLE ? e.openElements.hasInTableScope(g.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(g.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = v, n === g.TABLE && e._processToken(t)) : n !== g.BODY && n !== g.COL && n !== g.COLGROUP && n !== g.HTML && n !== g.TBODY && n !== g.TD && n !== g.TFOOT && n !== g.TH && n !== g.THEAD && n !== g.TR && ek(e, t)
                    },
                    [r.EOF_TOKEN]: eC
                },
                [R]: {
                    [r.CHARACTER_TOKEN]: ew,
                    [r.NULL_CHARACTER_TOKEN]: ew,
                    [r.WHITESPACE_CHARACTER_TOKEN]: Z,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.HTML ? eb(e, t) : n === g.COL ? (e._appendElement(t, E.HTML), t.ackSelfClosing = !0) : n === g.TEMPLATE ? er(e, t) : ew(e, t)
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.COLGROUP ? e.openElements.currentTagName === g.COLGROUP && (e.openElements.pop(), e.insertionMode = v) : n === g.TEMPLATE ? ei(e, t) : n !== g.COL && ew(e, t)
                    },
                    [r.EOF_TOKEN]: eC
                },
                [M]: {
                    [r.CHARACTER_TOKEN]: eS,
                    [r.NULL_CHARACTER_TOKEN]: eS,
                    [r.WHITESPACE_CHARACTER_TOKEN]: eS,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.TR ? (e.openElements.clearBackToTableBodyContext(), e._insertElement(t, E.HTML), e.insertionMode = L) : n === g.TH || n === g.TD ? (e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(g.TR), e.insertionMode = L, e._processToken(t)) : n === g.CAPTION || n === g.COL || n === g.COLGROUP || n === g.TBODY || n === g.TFOOT || n === g.THEAD ? e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = v, e._processToken(t)) : eO(e, t)
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.TBODY || n === g.TFOOT || n === g.THEAD ? e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = v) : n === g.TABLE ? e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = v, e._processToken(t)) : (n !== g.BODY && n !== g.CAPTION && n !== g.COL && n !== g.COLGROUP || n !== g.HTML && n !== g.TD && n !== g.TH && n !== g.TR) && ex(e, t)
                    },
                    [r.EOF_TOKEN]: eC
                },
                [L]: {
                    [r.CHARACTER_TOKEN]: eS,
                    [r.NULL_CHARACTER_TOKEN]: eS,
                    [r.WHITESPACE_CHARACTER_TOKEN]: eS,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.TH || n === g.TD ? (e.openElements.clearBackToTableRowContext(), e._insertElement(t, E.HTML), e.insertionMode = D, e.activeFormattingElements.insertMarker()) : n === g.CAPTION || n === g.COL || n === g.COLGROUP || n === g.TBODY || n === g.TFOOT || n === g.THEAD || n === g.TR ? e.openElements.hasInTableScope(g.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = M, e._processToken(t)) : eO(e, t)
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.TR ? e.openElements.hasInTableScope(g.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = M) : n === g.TABLE ? e.openElements.hasInTableScope(g.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = M, e._processToken(t)) : n === g.TBODY || n === g.TFOOT || n === g.THEAD ? (e.openElements.hasInTableScope(n) || e.openElements.hasInTableScope(g.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = M, e._processToken(t)) : (n !== g.BODY && n !== g.CAPTION && n !== g.COL && n !== g.COLGROUP || n !== g.HTML && n !== g.TD && n !== g.TH) && ex(e, t)
                    },
                    [r.EOF_TOKEN]: eC
                },
                [D]: {
                    [r.CHARACTER_TOKEN]: ec,
                    [r.NULL_CHARACTER_TOKEN]: Y,
                    [r.WHITESPACE_CHARACTER_TOKEN]: el,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.CAPTION || n === g.COL || n === g.COLGROUP || n === g.TBODY || n === g.TD || n === g.TFOOT || n === g.TH || n === g.THEAD || n === g.TR ? (e.openElements.hasInTableScope(g.TD) || e.openElements.hasInTableScope(g.TH)) && (e._closeTableCell(), e._processToken(t)) : eb(e, t)
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.TD || n === g.TH ? e.openElements.hasInTableScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = L) : n === g.TABLE || n === g.TBODY || n === g.TFOOT || n === g.THEAD || n === g.TR ? e.openElements.hasInTableScope(n) && (e._closeTableCell(), e._processToken(t)) : n !== g.BODY && n !== g.CAPTION && n !== g.COL && n !== g.COLGROUP && n !== g.HTML && ek(e, t)
                    },
                    [r.EOF_TOKEN]: eC
                },
                [P]: {
                    [r.CHARACTER_TOKEN]: Z,
                    [r.NULL_CHARACTER_TOKEN]: Y,
                    [r.WHITESPACE_CHARACTER_TOKEN]: Z,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: eR,
                    [r.END_TAG_TOKEN]: eM,
                    [r.EOF_TOKEN]: eC
                },
                [F]: {
                    [r.CHARACTER_TOKEN]: Z,
                    [r.NULL_CHARACTER_TOKEN]: Y,
                    [r.WHITESPACE_CHARACTER_TOKEN]: Z,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.CAPTION || n === g.TABLE || n === g.TBODY || n === g.TFOOT || n === g.THEAD || n === g.TR || n === g.TD || n === g.TH ? (e.openElements.popUntilTagNamePopped(g.SELECT), e._resetInsertionMode(), e._processToken(t)) : eR(e, t)
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.CAPTION || n === g.TABLE || n === g.TBODY || n === g.TFOOT || n === g.THEAD || n === g.TR || n === g.TD || n === g.TH ? e.openElements.hasInTableScope(n) && (e.openElements.popUntilTagNamePopped(g.SELECT), e._resetInsertionMode(), e._processToken(t)) : eM(e, t)
                    },
                    [r.EOF_TOKEN]: eC
                },
                [H]: {
                    [r.CHARACTER_TOKEN]: ec,
                    [r.NULL_CHARACTER_TOKEN]: Y,
                    [r.WHITESPACE_CHARACTER_TOKEN]: el,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        if (n === g.BASE || n === g.BASEFONT || n === g.BGSOUND || n === g.LINK || n === g.META || n === g.NOFRAMES || n === g.SCRIPT || n === g.STYLE || n === g.TEMPLATE || n === g.TITLE) er(e, t); else {
                            let r = $[n] || O;
                            e._popTmplInsertionMode(), e._pushTmplInsertionMode(r), e.insertionMode = r, e._processToken(t)
                        }
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        t.tagName === g.TEMPLATE && ei(e, t)
                    },
                    [r.EOF_TOKEN]: eL
                },
                [B]: {
                    [r.CHARACTER_TOKEN]: eD,
                    [r.NULL_CHARACTER_TOKEN]: eD,
                    [r.WHITESPACE_CHARACTER_TOKEN]: el,
                    [r.COMMENT_TOKEN]: function (e, t) {
                        e._appendCommentNode(t, e.openElements.items[0])
                    },
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        t.tagName === g.HTML ? eb(e, t) : eD(e, t)
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        t.tagName === g.HTML ? e.fragmentContext || (e.insertionMode = G) : eD(e, t)
                    },
                    [r.EOF_TOKEN]: J
                },
                [U]: {
                    [r.CHARACTER_TOKEN]: Y,
                    [r.NULL_CHARACTER_TOKEN]: Y,
                    [r.WHITESPACE_CHARACTER_TOKEN]: Z,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.HTML ? eb(e, t) : n === g.FRAMESET ? e._insertElement(t, E.HTML) : n === g.FRAME ? (e._appendElement(t, E.HTML), t.ackSelfClosing = !0) : n === g.NOFRAMES && er(e, t)
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        t.tagName !== g.FRAMESET || e.openElements.isRootHtmlElementCurrent() || (e.openElements.pop(), e.fragmentContext || e.openElements.currentTagName === g.FRAMESET || (e.insertionMode = K))
                    },
                    [r.EOF_TOKEN]: J
                },
                [K]: {
                    [r.CHARACTER_TOKEN]: Y,
                    [r.NULL_CHARACTER_TOKEN]: Y,
                    [r.WHITESPACE_CHARACTER_TOKEN]: Z,
                    [r.COMMENT_TOKEN]: V,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.HTML ? eb(e, t) : n === g.NOFRAMES && er(e, t)
                    },
                    [r.END_TAG_TOKEN]: function (e, t) {
                        t.tagName === g.HTML && (e.insertionMode = z)
                    },
                    [r.EOF_TOKEN]: J
                },
                [G]: {
                    [r.CHARACTER_TOKEN]: eP,
                    [r.NULL_CHARACTER_TOKEN]: eP,
                    [r.WHITESPACE_CHARACTER_TOKEN]: el,
                    [r.COMMENT_TOKEN]: X,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        t.tagName === g.HTML ? eb(e, t) : eP(e, t)
                    },
                    [r.END_TAG_TOKEN]: eP,
                    [r.EOF_TOKEN]: J
                },
                [z]: {
                    [r.CHARACTER_TOKEN]: Y,
                    [r.NULL_CHARACTER_TOKEN]: Y,
                    [r.WHITESPACE_CHARACTER_TOKEN]: el,
                    [r.COMMENT_TOKEN]: X,
                    [r.DOCTYPE_TOKEN]: Y,
                    [r.START_TAG_TOKEN]: function (e, t) {
                        let n = t.tagName;
                        n === g.HTML ? eb(e, t) : n === g.NOFRAMES && er(e, t)
                    },
                    [r.END_TAG_TOKEN]: Y,
                    [r.EOF_TOKEN]: J
                }
            };

        function W(e, t) {
            let n, r;
            for (let i = 0; i < 8 && ((r = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName)) ? e.openElements.contains(r.element) ? e.openElements.hasInScope(t.tagName) || (r = null) : (e.activeFormattingElements.removeEntry(r), r = null) : eN(e, t), n = r); i++) {
                let t = function (e, t) {
                    let n = null;
                    for (let r = e.openElements.stackTop; r >= 0; r--) {
                        let i = e.openElements.items[r];
                        if (i === t.element) break;
                        e._isSpecialElement(i) && (n = i)
                    }
                    return n || (e.openElements.popUntilElementPopped(t.element), e.activeFormattingElements.removeEntry(t)), n
                }(e, n);
                if (!t) break;
                e.activeFormattingElements.bookmark = n;
                let r = function (e, t, n) {
                    let r = t, i = e.openElements.getCommonAncestor(t);
                    for (let a = 0, o = i; o !== n; a++, o = i) {
                        i = e.openElements.getCommonAncestor(o);
                        let n = e.activeFormattingElements.getElementEntry(o), s = n && a >= 3, l = !n || s;
                        l ? (s && e.activeFormattingElements.removeEntry(n), e.openElements.remove(o)) : (o = function (e, t) {
                            let n = e.treeAdapter.getNamespaceURI(t.element),
                                r = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
                            return e.openElements.replace(t.element, r), t.element = r, r
                        }(e, n), r === t && (e.activeFormattingElements.bookmark = n), e.treeAdapter.detachNode(r), e.treeAdapter.appendChild(o, r), r = o)
                    }
                    return r
                }(e, t, n.element), i = e.openElements.getCommonAncestor(n.element);
                e.treeAdapter.detachNode(r), function (e, t, n) {
                    if (e._isElementCausesFosterParenting(t)) e._fosterParentElement(n); else {
                        let r = e.treeAdapter.getTagName(t), i = e.treeAdapter.getNamespaceURI(t);
                        r === g.TEMPLATE && i === E.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, n)
                    }
                }(e, i, r), function (e, t, n) {
                    let r = e.treeAdapter.getNamespaceURI(n.element), i = n.token,
                        a = e.treeAdapter.createElement(i.tagName, r, i.attrs);
                    e._adoptNodes(t, a), e.treeAdapter.appendChild(t, a), e.activeFormattingElements.insertElementAfterBookmark(a, n.token), e.activeFormattingElements.removeEntry(n), e.openElements.remove(n.element), e.openElements.insertAfter(t, a)
                }(e, t, n)
            }
        }

        function Y() {
        }

        function Q(e) {
            e._err(h.misplacedDoctype)
        }

        function V(e, t) {
            e._appendCommentNode(t, e.openElements.currentTmplContent || e.openElements.current)
        }

        function X(e, t) {
            e._appendCommentNode(t, e.document)
        }

        function Z(e, t) {
            e._insertCharacters(t)
        }

        function J(e) {
            e.stopped = !0
        }

        function ee(e, t) {
            e._err(h.missingDoctype, {beforeToken: !0}), e.treeAdapter.setDocumentMode(e.document, f.DOCUMENT_MODE.QUIRKS), e.insertionMode = y, e._processToken(t)
        }

        function et(e, t) {
            e._insertFakeRootElement(), e.insertionMode = N, e._processToken(t)
        }

        function en(e, t) {
            e._insertFakeElement(g.HEAD), e.headElement = e.openElements.current, e.insertionMode = k, e._processToken(t)
        }

        function er(e, t) {
            let n = t.tagName;
            n === g.HTML ? eb(e, t) : n === g.BASE || n === g.BASEFONT || n === g.BGSOUND || n === g.LINK || n === g.META ? (e._appendElement(t, E.HTML), t.ackSelfClosing = !0) : n === g.TITLE ? e._switchToTextParsing(t, r.MODE.RCDATA) : n === g.NOSCRIPT ? e.options.scriptingEnabled ? e._switchToTextParsing(t, r.MODE.RAWTEXT) : (e._insertElement(t, E.HTML), e.insertionMode = C) : n === g.NOFRAMES || n === g.STYLE ? e._switchToTextParsing(t, r.MODE.RAWTEXT) : n === g.SCRIPT ? e._switchToTextParsing(t, r.MODE.SCRIPT_DATA) : n === g.TEMPLATE ? (e._insertTemplate(t, E.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = H, e._pushTmplInsertionMode(H)) : n === g.HEAD ? e._err(h.misplacedStartTagForHeadElement) : ea(e, t)
        }

        function ei(e, t) {
            let n = t.tagName;
            n === g.HEAD ? (e.openElements.pop(), e.insertionMode = S) : n === g.BODY || n === g.BR || n === g.HTML ? ea(e, t) : n === g.TEMPLATE && e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagName !== g.TEMPLATE && e._err(h.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(g.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e._popTmplInsertionMode(), e._resetInsertionMode()) : e._err(h.endTagWithoutMatchingOpenElement)
        }

        function ea(e, t) {
            e.openElements.pop(), e.insertionMode = S, e._processToken(t)
        }

        function eo(e, t) {
            let n = t.type === r.EOF_TOKEN ? h.openElementsLeftAfterEof : h.disallowedContentInNoscriptInHead;
            e._err(n), e.openElements.pop(), e.insertionMode = k, e._processToken(t)
        }

        function es(e, t) {
            e._insertFakeElement(g.BODY), e.insertionMode = O, e._processToken(t)
        }

        function el(e, t) {
            e._reconstructActiveFormattingElements(), e._insertCharacters(t)
        }

        function ec(e, t) {
            e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1
        }

        function eu(e, t) {
            e.openElements.hasInButtonScope(g.P) && e._closePElement(), e._insertElement(t, E.HTML)
        }

        function ed(e, t) {
            e.openElements.hasInButtonScope(g.P) && e._closePElement(), e._insertElement(t, E.HTML), e.skipNextNewLine = !0, e.framesetOk = !1
        }

        function ep(e, t) {
            e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t)
        }

        function eh(e, t) {
            e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1
        }

        function em(e, t) {
            e._reconstructActiveFormattingElements(), e._appendElement(t, E.HTML), e.framesetOk = !1, t.ackSelfClosing = !0
        }

        function ef(e, t) {
            e._appendElement(t, E.HTML), t.ackSelfClosing = !0
        }

        function eg(e, t) {
            e._switchToTextParsing(t, r.MODE.RAWTEXT)
        }

        function eE(e, t) {
            e.openElements.currentTagName === g.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML)
        }

        function eT(e, t) {
            e.openElements.hasInScope(g.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, E.HTML)
        }

        function e_(e, t) {
            e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML)
        }

        function eb(e, t) {
            var n, i, a, o, s, l, c, u, d, h;
            let m = t.tagName;
            switch (m.length) {
                case 1:
                    m === g.I || m === g.S || m === g.B || m === g.U ? ep(e, t) : m === g.P ? eu(e, t) : m === g.A ? function (e, t) {
                        let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(g.A);
                        n && (W(e, t), e.openElements.remove(n.element), e.activeFormattingElements.removeEntry(n)), e._reconstructActiveFormattingElements(), e._insertElement(t, E.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t)
                    }(e, t) : e_(e, t);
                    break;
                case 2:
                    m === g.DL || m === g.OL || m === g.UL ? eu(e, t) : m === g.H1 || m === g.H2 || m === g.H3 || m === g.H4 || m === g.H5 || m === g.H6 ? function (e, t) {
                        e.openElements.hasInButtonScope(g.P) && e._closePElement();
                        let n = e.openElements.currentTagName;
                        (n === g.H1 || n === g.H2 || n === g.H3 || n === g.H4 || n === g.H5 || n === g.H6) && e.openElements.pop(), e._insertElement(t, E.HTML)
                    }(e, t) : m === g.LI || m === g.DD || m === g.DT ? function (e, t) {
                        e.framesetOk = !1;
                        let n = t.tagName;
                        for (let t = e.openElements.stackTop; t >= 0; t--) {
                            let r = e.openElements.items[t], i = e.treeAdapter.getTagName(r), a = null;
                            if (n === g.LI && i === g.LI ? a = g.LI : (n === g.DD || n === g.DT) && (i === g.DD || i === g.DT) && (a = i), a) {
                                e.openElements.generateImpliedEndTagsWithExclusion(a), e.openElements.popUntilTagNamePopped(a);
                                break
                            }
                            if (i !== g.ADDRESS && i !== g.DIV && i !== g.P && e._isSpecialElement(r)) break
                        }
                        e.openElements.hasInButtonScope(g.P) && e._closePElement(), e._insertElement(t, E.HTML)
                    }(e, t) : m === g.EM || m === g.TT ? ep(e, t) : m === g.BR ? em(e, t) : m === g.HR ? (n = e, i = t, n.openElements.hasInButtonScope(g.P) && n._closePElement(), n._appendElement(i, E.HTML), n.framesetOk = !1, i.ackSelfClosing = !0) : m === g.RB ? eT(e, t) : m === g.RT || m === g.RP ? (e.openElements.hasInScope(g.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(g.RTC), e._insertElement(t, E.HTML)) : m !== g.TH && m !== g.TD && m !== g.TR && e_(e, t);
                    break;
                case 3:
                    m === g.DIV || m === g.DIR || m === g.NAV ? eu(e, t) : m === g.PRE ? ed(e, t) : m === g.BIG ? ep(e, t) : m === g.IMG || m === g.WBR ? em(e, t) : m === g.XMP ? ((a = e).openElements.hasInButtonScope(g.P) && a._closePElement(), a._reconstructActiveFormattingElements(), a.framesetOk = !1, a._switchToTextParsing(t, r.MODE.RAWTEXT)) : m === g.SVG ? (o = t, e._reconstructActiveFormattingElements(), p.adjustTokenSVGAttrs(o), p.adjustTokenXMLAttrs(o), o.selfClosing ? e._appendElement(o, E.SVG) : e._insertElement(o, E.SVG), o.ackSelfClosing = !0) : m === g.RTC ? eT(e, t) : m !== g.COL && e_(e, t);
                    break;
                case 4:
                    m === g.HTML ? 0 === e.openElements.tmplCount && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs) : m === g.BASE || m === g.LINK || m === g.META ? er(e, t) : m === g.BODY ? function (e, t) {
                        let n = e.openElements.tryPeekProperlyNestedBodyElement();
                        n && 0 === e.openElements.tmplCount && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(n, t.attrs))
                    }(e, t) : m === g.MAIN || m === g.MENU ? eu(e, t) : m === g.FORM ? function (e, t) {
                        let n = e.openElements.tmplCount > 0;
                        e.formElement && !n || (e.openElements.hasInButtonScope(g.P) && e._closePElement(), e._insertElement(t, E.HTML), n || (e.formElement = e.openElements.current))
                    }(e, t) : m === g.CODE || m === g.FONT ? ep(e, t) : m === g.NOBR ? (e._reconstructActiveFormattingElements(), e.openElements.hasInScope(g.NOBR) && (W(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, E.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t)) : m === g.AREA ? em(e, t) : m === g.MATH ? (s = t, e._reconstructActiveFormattingElements(), p.adjustTokenMathMLAttrs(s), p.adjustTokenXMLAttrs(s), s.selfClosing ? e._appendElement(s, E.MATHML) : e._insertElement(s, E.MATHML), s.ackSelfClosing = !0) : m === g.MENU ? (e.openElements.hasInButtonScope(g.P) && e._closePElement(), e._insertElement(t, E.HTML)) : m !== g.HEAD && e_(e, t);
                    break;
                case 5:
                    m === g.STYLE || m === g.TITLE ? er(e, t) : m === g.ASIDE ? eu(e, t) : m === g.SMALL ? ep(e, t) : m === g.TABLE ? ((l = e).treeAdapter.getDocumentMode(l.document) !== f.DOCUMENT_MODE.QUIRKS && l.openElements.hasInButtonScope(g.P) && l._closePElement(), l._insertElement(t, E.HTML), l.framesetOk = !1, l.insertionMode = v) : m === g.EMBED ? em(e, t) : m === g.INPUT ? function (e, t) {
                        e._reconstructActiveFormattingElements(), e._appendElement(t, E.HTML);
                        let n = r.getTokenAttr(t, T.TYPE);
                        n && n.toLowerCase() === b || (e.framesetOk = !1), t.ackSelfClosing = !0
                    }(e, t) : m === g.PARAM || m === g.TRACK ? ef(e, t) : m === g.IMAGE ? (t.tagName = g.IMG, em(e, t)) : m !== g.FRAME && m !== g.TBODY && m !== g.TFOOT && m !== g.THEAD && e_(e, t);
                    break;
                case 6:
                    m === g.SCRIPT ? er(e, t) : m === g.CENTER || m === g.FIGURE || m === g.FOOTER || m === g.HEADER || m === g.HGROUP || m === g.DIALOG ? eu(e, t) : m === g.BUTTON ? ((c = e).openElements.hasInScope(g.BUTTON) && (c.openElements.generateImpliedEndTags(), c.openElements.popUntilTagNamePopped(g.BUTTON)), c._reconstructActiveFormattingElements(), c._insertElement(t, E.HTML), c.framesetOk = !1) : m === g.STRIKE || m === g.STRONG ? ep(e, t) : m === g.APPLET || m === g.OBJECT ? eh(e, t) : m === g.KEYGEN ? em(e, t) : m === g.SOURCE ? ef(e, t) : m === g.IFRAME ? (e.framesetOk = !1, e._switchToTextParsing(t, r.MODE.RAWTEXT)) : m === g.SELECT ? ((u = e)._reconstructActiveFormattingElements(), u._insertElement(t, E.HTML), u.framesetOk = !1, u.insertionMode === v || u.insertionMode === w || u.insertionMode === M || u.insertionMode === L || u.insertionMode === D ? u.insertionMode = F : u.insertionMode = P) : m === g.OPTION ? eE(e, t) : e_(e, t);
                    break;
                case 7:
                    m === g.BGSOUND ? er(e, t) : m === g.DETAILS || m === g.ADDRESS || m === g.ARTICLE || m === g.SECTION || m === g.SUMMARY ? eu(e, t) : m === g.LISTING ? ed(e, t) : m === g.MARQUEE ? eh(e, t) : m === g.NOEMBED ? eg(e, t) : m !== g.CAPTION && e_(e, t);
                    break;
                case 8:
                    m === g.BASEFONT ? er(e, t) : m === g.FRAMESET ? function (e, t) {
                        let n = e.openElements.tryPeekProperlyNestedBodyElement();
                        e.framesetOk && n && (e.treeAdapter.detachNode(n), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, E.HTML), e.insertionMode = U)
                    }(e, t) : m === g.FIELDSET ? eu(e, t) : m === g.TEXTAREA ? ((d = e)._insertElement(t, E.HTML), d.skipNextNewLine = !0, d.tokenizer.state = r.MODE.RCDATA, d.originalInsertionMode = d.insertionMode, d.framesetOk = !1, d.insertionMode = x) : m === g.TEMPLATE ? er(e, t) : m === g.NOSCRIPT ? e.options.scriptingEnabled ? eg(e, t) : e_(e, t) : m === g.OPTGROUP ? eE(e, t) : m !== g.COLGROUP && e_(e, t);
                    break;
                case 9:
                    m === g.PLAINTEXT ? ((h = e).openElements.hasInButtonScope(g.P) && h._closePElement(), h._insertElement(t, E.HTML), h.tokenizer.state = r.MODE.PLAINTEXT) : e_(e, t);
                    break;
                case 10:
                    m === g.BLOCKQUOTE || m === g.FIGCAPTION ? eu(e, t) : e_(e, t);
                    break;
                default:
                    e_(e, t)
            }
        }

        function eA(e, t) {
            let n = t.tagName;
            e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n))
        }

        function ey(e, t) {
            let n = t.tagName;
            e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker())
        }

        function eN(e, t) {
            let n = t.tagName;
            for (let t = e.openElements.stackTop; t > 0; t--) {
                let r = e.openElements.items[t];
                if (e.treeAdapter.getTagName(r) === n) {
                    e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilElementPopped(r);
                    break
                }
                if (e._isSpecialElement(r)) break
            }
        }

        function ek(e, t) {
            var n, r, i;
            let a = t.tagName;
            switch (a.length) {
                case 1:
                    a === g.A || a === g.B || a === g.I || a === g.S || a === g.U ? W(e, t) : a === g.P ? (e.openElements.hasInButtonScope(g.P) || e._insertFakeElement(g.P), e._closePElement()) : eN(e, t);
                    break;
                case 2:
                    a === g.DL || a === g.UL || a === g.OL ? eA(e, t) : a === g.LI ? e.openElements.hasInListItemScope(g.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(g.LI), e.openElements.popUntilTagNamePopped(g.LI)) : a === g.DD || a === g.DT ? function (e, t) {
                        let n = t.tagName;
                        e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n))
                    }(e, t) : a === g.H1 || a === g.H2 || a === g.H3 || a === g.H4 || a === g.H5 || a === g.H6 ? e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped()) : a === g.BR ? ((n = e)._reconstructActiveFormattingElements(), n._insertFakeElement(g.BR), n.openElements.pop(), n.framesetOk = !1) : a === g.EM || a === g.TT ? W(e, t) : eN(e, t);
                    break;
                case 3:
                    a === g.BIG ? W(e, t) : a === g.DIR || a === g.DIV || a === g.NAV || a === g.PRE ? eA(e, t) : eN(e, t);
                    break;
                case 4:
                    a === g.BODY ? (r = e).openElements.hasInScope(g.BODY) && (r.insertionMode = B) : a === g.HTML ? (i = e).openElements.hasInScope(g.BODY) && (i.insertionMode = B, i._processToken(t)) : a === g.FORM ? function (e) {
                        let t = e.openElements.tmplCount > 0, n = e.formElement;
                        t || (e.formElement = null), (n || t) && e.openElements.hasInScope(g.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(g.FORM) : e.openElements.remove(n))
                    }(e, t) : a === g.CODE || a === g.FONT || a === g.NOBR ? W(e, t) : a === g.MAIN || a === g.MENU ? eA(e, t) : eN(e, t);
                    break;
                case 5:
                    a === g.ASIDE ? eA(e, t) : a === g.SMALL ? W(e, t) : eN(e, t);
                    break;
                case 6:
                    a === g.CENTER || a === g.FIGURE || a === g.FOOTER || a === g.HEADER || a === g.HGROUP || a === g.DIALOG ? eA(e, t) : a === g.APPLET || a === g.OBJECT ? ey(e, t) : a === g.STRIKE || a === g.STRONG ? W(e, t) : eN(e, t);
                    break;
                case 7:
                    a === g.ADDRESS || a === g.ARTICLE || a === g.DETAILS || a === g.SECTION || a === g.SUMMARY || a === g.LISTING ? eA(e, t) : a === g.MARQUEE ? ey(e, t) : eN(e, t);
                    break;
                case 8:
                    a === g.FIELDSET ? eA(e, t) : a === g.TEMPLATE ? ei(e, t) : eN(e, t);
                    break;
                case 10:
                    a === g.BLOCKQUOTE || a === g.FIGCAPTION ? eA(e, t) : eN(e, t);
                    break;
                default:
                    eN(e, t)
            }
        }

        function eC(e, t) {
            e.tmplInsertionModeStackTop > -1 ? eL(e, t) : e.stopped = !0
        }

        function eS(e, t) {
            let n = e.openElements.currentTagName;
            n === g.TABLE || n === g.TBODY || n === g.TFOOT || n === g.THEAD || n === g.TR ? (e.pendingCharacterTokens = [], e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = I, e._processToken(t)) : ev(e, t)
        }

        function eO(e, t) {
            var n, i, a, o, s, l;
            let c = t.tagName;
            switch (c.length) {
                case 2:
                    c === g.TD || c === g.TH || c === g.TR ? ((n = e).openElements.clearBackToTableContext(), n._insertFakeElement(g.TBODY), n.insertionMode = M, n._processToken(t)) : ev(e, t);
                    break;
                case 3:
                    c === g.COL ? ((i = e).openElements.clearBackToTableContext(), i._insertFakeElement(g.COLGROUP), i.insertionMode = R, i._processToken(t)) : ev(e, t);
                    break;
                case 4:
                    c === g.FORM ? (a = e).formElement || 0 !== a.openElements.tmplCount || (a._insertElement(t, E.HTML), a.formElement = a.openElements.current, a.openElements.pop()) : ev(e, t);
                    break;
                case 5:
                    c === g.TABLE ? e.openElements.hasInTableScope(g.TABLE) && (e.openElements.popUntilTagNamePopped(g.TABLE), e._resetInsertionMode(), e._processToken(t)) : c === g.STYLE ? er(e, t) : c === g.TBODY || c === g.TFOOT || c === g.THEAD ? ((o = e).openElements.clearBackToTableContext(), o._insertElement(t, E.HTML), o.insertionMode = M) : c === g.INPUT ? function (e, t) {
                        let n = r.getTokenAttr(t, T.TYPE);
                        n && n.toLowerCase() === b ? e._appendElement(t, E.HTML) : ev(e, t), t.ackSelfClosing = !0
                    }(e, t) : ev(e, t);
                    break;
                case 6:
                    c === g.SCRIPT ? er(e, t) : ev(e, t);
                    break;
                case 7:
                    c === g.CAPTION ? ((s = e).openElements.clearBackToTableContext(), s.activeFormattingElements.insertMarker(), s._insertElement(t, E.HTML), s.insertionMode = w) : ev(e, t);
                    break;
                case 8:
                    c === g.COLGROUP ? ((l = e).openElements.clearBackToTableContext(), l._insertElement(t, E.HTML), l.insertionMode = R) : c === g.TEMPLATE ? er(e, t) : ev(e, t);
                    break;
                default:
                    ev(e, t)
            }
        }

        function ex(e, t) {
            let n = t.tagName;
            n === g.TABLE ? e.openElements.hasInTableScope(g.TABLE) && (e.openElements.popUntilTagNamePopped(g.TABLE), e._resetInsertionMode()) : n === g.TEMPLATE ? ei(e, t) : n !== g.BODY && n !== g.CAPTION && n !== g.COL && n !== g.COLGROUP && n !== g.HTML && n !== g.TBODY && n !== g.TD && n !== g.TFOOT && n !== g.TH && n !== g.THEAD && n !== g.TR && ev(e, t)
        }

        function ev(e, t) {
            let n = e.fosterParentingEnabled;
            e.fosterParentingEnabled = !0, e._processTokenInBodyMode(t), e.fosterParentingEnabled = n
        }

        function eI(e, t) {
            let n = 0;
            if (e.hasNonWhitespacePendingCharacterToken) for (; n < e.pendingCharacterTokens.length; n++) ev(e, e.pendingCharacterTokens[n]); else for (; n < e.pendingCharacterTokens.length; n++) e._insertCharacters(e.pendingCharacterTokens[n]);
            e.insertionMode = e.originalInsertionMode, e._processToken(t)
        }

        function ew(e, t) {
            e.openElements.currentTagName === g.COLGROUP && (e.openElements.pop(), e.insertionMode = v, e._processToken(t))
        }

        function eR(e, t) {
            let n = t.tagName;
            n === g.HTML ? eb(e, t) : n === g.OPTION ? (e.openElements.currentTagName === g.OPTION && e.openElements.pop(), e._insertElement(t, E.HTML)) : n === g.OPTGROUP ? (e.openElements.currentTagName === g.OPTION && e.openElements.pop(), e.openElements.currentTagName === g.OPTGROUP && e.openElements.pop(), e._insertElement(t, E.HTML)) : n === g.INPUT || n === g.KEYGEN || n === g.TEXTAREA || n === g.SELECT ? e.openElements.hasInSelectScope(g.SELECT) && (e.openElements.popUntilTagNamePopped(g.SELECT), e._resetInsertionMode(), n !== g.SELECT && e._processToken(t)) : (n === g.SCRIPT || n === g.TEMPLATE) && er(e, t)
        }

        function eM(e, t) {
            let n = t.tagName;
            if (n === g.OPTGROUP) {
                let t = e.openElements.items[e.openElements.stackTop - 1], n = t && e.treeAdapter.getTagName(t);
                e.openElements.currentTagName === g.OPTION && n === g.OPTGROUP && e.openElements.pop(), e.openElements.currentTagName === g.OPTGROUP && e.openElements.pop()
            } else n === g.OPTION ? e.openElements.currentTagName === g.OPTION && e.openElements.pop() : n === g.SELECT && e.openElements.hasInSelectScope(g.SELECT) ? (e.openElements.popUntilTagNamePopped(g.SELECT), e._resetInsertionMode()) : n === g.TEMPLATE && ei(e, t)
        }

        function eL(e, t) {
            e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(g.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e._popTmplInsertionMode(), e._resetInsertionMode(), e._processToken(t)) : e.stopped = !0
        }

        function eD(e, t) {
            e.insertionMode = O, e._processToken(t)
        }

        function eP(e, t) {
            e.insertionMode = O, e._processToken(t)
        }

        e.exports = class {
            constructor(e) {
                this.options = u(_, e), this.treeAdapter = this.options.treeAdapter, this.pendingScript = null, this.options.sourceCodeLocationInfo && l.install(this, o), this.options.onParseError && l.install(this, s, {onParseError: this.options.onParseError})
            }

            parse(e) {
                let t = this.treeAdapter.createDocument();
                return this._bootstrap(t, null), this.tokenizer.write(e, !0), this._runParsingLoop(null), t
            }

            parseFragment(e, t) {
                t || (t = this.treeAdapter.createElement(g.TEMPLATE, E.HTML, []));
                let n = this.treeAdapter.createElement("documentmock", E.HTML, []);
                this._bootstrap(n, t), this.treeAdapter.getTagName(t) === g.TEMPLATE && this._pushTmplInsertionMode(H), this._initTokenizerForFragmentParsing(), this._insertFakeRootElement(), this._resetInsertionMode(), this._findFormInFragmentContext(), this.tokenizer.write(e, !0), this._runParsingLoop(null);
                let r = this.treeAdapter.getFirstChild(n), i = this.treeAdapter.createDocumentFragment();
                return this._adoptNodes(r, i), i
            }

            _bootstrap(e, t) {
                this.tokenizer = new r(this.options), this.stopped = !1, this.insertionMode = A, this.originalInsertionMode = "", this.document = e, this.fragmentContext = t, this.headElement = null, this.formElement = null, this.openElements = new i(this.document, this.treeAdapter), this.activeFormattingElements = new a(this.treeAdapter), this.tmplInsertionModeStack = [], this.tmplInsertionModeStackTop = -1, this.currentTmplInsertionMode = null, this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1
            }

            _err() {
            }

            _runParsingLoop(e) {
                for (; !this.stopped;) {
                    this._setupTokenizerCDATAMode();
                    let t = this.tokenizer.getNextToken();
                    if (t.type === r.HIBERNATION_TOKEN) break;
                    if (this.skipNextNewLine && (this.skipNextNewLine = !1, t.type === r.WHITESPACE_CHARACTER_TOKEN && "\n" === t.chars[0])) {
                        if (1 === t.chars.length) continue;
                        t.chars = t.chars.substr(1)
                    }
                    if (this._processInputToken(t), e && this.pendingScript) break
                }
            }

            runParsingLoopForCurrentChunk(e, t) {
                if (this._runParsingLoop(t), t && this.pendingScript) {
                    let e = this.pendingScript;
                    this.pendingScript = null, t(e);
                    return
                }
                e && e()
            }

            _setupTokenizerCDATAMode() {
                let e = this._getAdjustedCurrentElement();
                this.tokenizer.allowCDATA = e && e !== this.document && this.treeAdapter.getNamespaceURI(e) !== E.HTML && !this._isIntegrationPoint(e)
            }

            _switchToTextParsing(e, t) {
                this._insertElement(e, E.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = x
            }

            switchToPlaintextParsing() {
                this.insertionMode = x, this.originalInsertionMode = O, this.tokenizer.state = r.MODE.PLAINTEXT
            }

            _getAdjustedCurrentElement() {
                return 0 === this.openElements.stackTop && this.fragmentContext ? this.fragmentContext : this.openElements.current
            }

            _findFormInFragmentContext() {
                let e = this.fragmentContext;
                do {
                    if (this.treeAdapter.getTagName(e) === g.FORM) {
                        this.formElement = e;
                        break
                    }
                    e = this.treeAdapter.getParentNode(e)
                } while (e)
            }

            _initTokenizerForFragmentParsing() {
                if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === E.HTML) {
                    let e = this.treeAdapter.getTagName(this.fragmentContext);
                    e === g.TITLE || e === g.TEXTAREA ? this.tokenizer.state = r.MODE.RCDATA : e === g.STYLE || e === g.XMP || e === g.IFRAME || e === g.NOEMBED || e === g.NOFRAMES || e === g.NOSCRIPT ? this.tokenizer.state = r.MODE.RAWTEXT : e === g.SCRIPT ? this.tokenizer.state = r.MODE.SCRIPT_DATA : e === g.PLAINTEXT && (this.tokenizer.state = r.MODE.PLAINTEXT)
                }
            }

            _setDocumentType(e) {
                let t = e.name || "", n = e.publicId || "", r = e.systemId || "";
                this.treeAdapter.setDocumentType(this.document, t, n, r)
            }

            _attachElementToTree(e) {
                if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e); else {
                    let t = this.openElements.currentTmplContent || this.openElements.current;
                    this.treeAdapter.appendChild(t, e)
                }
            }

            _appendElement(e, t) {
                let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
                this._attachElementToTree(n)
            }

            _insertElement(e, t) {
                let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
                this._attachElementToTree(n), this.openElements.push(n)
            }

            _insertFakeElement(e) {
                let t = this.treeAdapter.createElement(e, E.HTML, []);
                this._attachElementToTree(t), this.openElements.push(t)
            }

            _insertTemplate(e) {
                let t = this.treeAdapter.createElement(e.tagName, E.HTML, e.attrs),
                    n = this.treeAdapter.createDocumentFragment();
                this.treeAdapter.setTemplateContent(t, n), this._attachElementToTree(t), this.openElements.push(t)
            }

            _insertFakeRootElement() {
                let e = this.treeAdapter.createElement(g.HTML, E.HTML, []);
                this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e)
            }

            _appendCommentNode(e, t) {
                let n = this.treeAdapter.createCommentNode(e.data);
                this.treeAdapter.appendChild(t, n)
            }

            _insertCharacters(e) {
                if (this._shouldFosterParentOnInsertion()) this._fosterParentText(e.chars); else {
                    let t = this.openElements.currentTmplContent || this.openElements.current;
                    this.treeAdapter.insertText(t, e.chars)
                }
            }

            _adoptNodes(e, t) {
                for (let n = this.treeAdapter.getFirstChild(e); n; n = this.treeAdapter.getFirstChild(e)) this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(t, n)
            }

            _shouldProcessTokenInForeignContent(e) {
                let t = this._getAdjustedCurrentElement();
                if (!t || t === this.document) return !1;
                let n = this.treeAdapter.getNamespaceURI(t);
                if (n === E.HTML || this.treeAdapter.getTagName(t) === g.ANNOTATION_XML && n === E.MATHML && e.type === r.START_TAG_TOKEN && e.tagName === g.SVG) return !1;
                let i = e.type === r.CHARACTER_TOKEN || e.type === r.NULL_CHARACTER_TOKEN || e.type === r.WHITESPACE_CHARACTER_TOKEN,
                    a = e.type === r.START_TAG_TOKEN && e.tagName !== g.MGLYPH && e.tagName !== g.MALIGNMARK;
                return !((a || i) && this._isIntegrationPoint(t, E.MATHML) || (e.type === r.START_TAG_TOKEN || i) && this._isIntegrationPoint(t, E.HTML)) && e.type !== r.EOF_TOKEN
            }

            _processToken(e) {
                q[this.insertionMode][e.type](this, e)
            }

            _processTokenInBodyMode(e) {
                q[O][e.type](this, e)
            }

            _processTokenInForeignContent(e) {
                var t;
                e.type === r.CHARACTER_TOKEN ? (t = this, t._insertCharacters(e), t.framesetOk = !1) : e.type === r.NULL_CHARACTER_TOKEN ? (e.chars = m.REPLACEMENT_CHARACTER, this._insertCharacters(e)) : e.type === r.WHITESPACE_CHARACTER_TOKEN ? Z(this, e) : e.type === r.COMMENT_TOKEN ? V(this, e) : e.type === r.START_TAG_TOKEN ? function (e, t) {
                    if (p.causesExit(t) && !e.fragmentContext) {
                        for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== E.HTML && !e._isIntegrationPoint(e.openElements.current);) e.openElements.pop();
                        e._processToken(t)
                    } else {
                        let n = e._getAdjustedCurrentElement(), r = e.treeAdapter.getNamespaceURI(n);
                        r === E.MATHML ? p.adjustTokenMathMLAttrs(t) : r === E.SVG && (p.adjustTokenSVGTagName(t), p.adjustTokenSVGAttrs(t)), p.adjustTokenXMLAttrs(t), t.selfClosing ? e._appendElement(t, r) : e._insertElement(t, r), t.ackSelfClosing = !0
                    }
                }(this, e) : e.type === r.END_TAG_TOKEN && function (e, t) {
                    for (let n = e.openElements.stackTop; n > 0; n--) {
                        let r = e.openElements.items[n];
                        if (e.treeAdapter.getNamespaceURI(r) === E.HTML) {
                            e._processToken(t);
                            break
                        }
                        if (e.treeAdapter.getTagName(r).toLowerCase() === t.tagName) {
                            e.openElements.popUntilElementPopped(r);
                            break
                        }
                    }
                }(this, e)
            }

            _processInputToken(e) {
                this._shouldProcessTokenInForeignContent(e) ? this._processTokenInForeignContent(e) : this._processToken(e), e.type === r.START_TAG_TOKEN && e.selfClosing && !e.ackSelfClosing && this._err(h.nonVoidHtmlElementStartTagWithTrailingSolidus)
            }

            _isIntegrationPoint(e, t) {
                let n = this.treeAdapter.getTagName(e), r = this.treeAdapter.getNamespaceURI(e),
                    i = this.treeAdapter.getAttrList(e);
                return p.isIntegrationPoint(n, r, i, t)
            }

            _reconstructActiveFormattingElements() {
                let e = this.activeFormattingElements.length;
                if (e) {
                    let t = e, n = null;
                    do if (t--, (n = this.activeFormattingElements.entries[t]).type === a.MARKER_ENTRY || this.openElements.contains(n.element)) {
                        t++;
                        break
                    } while (t > 0);
                    for (let r = t; r < e; r++) n = this.activeFormattingElements.entries[r], this._insertElement(n.token, this.treeAdapter.getNamespaceURI(n.element)), n.element = this.openElements.current
                }
            }

            _closeTableCell() {
                this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = L
            }

            _closePElement() {
                this.openElements.generateImpliedEndTagsWithExclusion(g.P), this.openElements.popUntilTagNamePopped(g.P)
            }

            _resetInsertionMode() {
                for (let e = this.openElements.stackTop, t = !1; e >= 0; e--) {
                    let n = this.openElements.items[e];
                    0 === e && (t = !0, this.fragmentContext && (n = this.fragmentContext));
                    let r = this.treeAdapter.getTagName(n), i = j[r];
                    if (i) {
                        this.insertionMode = i;
                        break
                    }
                    if (t || r !== g.TD && r !== g.TH) {
                        if (t || r !== g.HEAD) {
                            if (r === g.SELECT) {
                                this._resetInsertionModeForSelect(e);
                                break
                            }
                            if (r === g.TEMPLATE) {
                                this.insertionMode = this.currentTmplInsertionMode;
                                break
                            }
                            if (r === g.HTML) {
                                this.insertionMode = this.headElement ? S : N;
                                break
                            } else if (t) {
                                this.insertionMode = O;
                                break
                            }
                        } else {
                            this.insertionMode = k;
                            break
                        }
                    } else {
                        this.insertionMode = D;
                        break
                    }
                }
            }

            _resetInsertionModeForSelect(e) {
                if (e > 0) for (let t = e - 1; t > 0; t--) {
                    let e = this.openElements.items[t], n = this.treeAdapter.getTagName(e);
                    if (n === g.TEMPLATE) break;
                    if (n === g.TABLE) {
                        this.insertionMode = F;
                        return
                    }
                }
                this.insertionMode = P
            }

            _pushTmplInsertionMode(e) {
                this.tmplInsertionModeStack.push(e), this.tmplInsertionModeStackTop++, this.currentTmplInsertionMode = e
            }

            _popTmplInsertionMode() {
                this.tmplInsertionModeStack.pop(), this.tmplInsertionModeStackTop--, this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop]
            }

            _isElementCausesFosterParenting(e) {
                let t = this.treeAdapter.getTagName(e);
                return t === g.TABLE || t === g.TBODY || t === g.TFOOT || t === g.THEAD || t === g.TR
            }

            _shouldFosterParentOnInsertion() {
                return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current)
            }

            _findFosterParentingLocation() {
                let e = {parent: null, beforeElement: null};
                for (let t = this.openElements.stackTop; t >= 0; t--) {
                    let n = this.openElements.items[t], r = this.treeAdapter.getTagName(n),
                        i = this.treeAdapter.getNamespaceURI(n);
                    if (r === g.TEMPLATE && i === E.HTML) {
                        e.parent = this.treeAdapter.getTemplateContent(n);
                        break
                    }
                    if (r === g.TABLE) {
                        e.parent = this.treeAdapter.getParentNode(n), e.parent ? e.beforeElement = n : e.parent = this.openElements.items[t - 1];
                        break
                    }
                }
                return e.parent || (e.parent = this.openElements.items[0]), e
            }

            _fosterParentElement(e) {
                let t = this._findFosterParentingLocation();
                t.beforeElement ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement) : this.treeAdapter.appendChild(t.parent, e)
            }

            _fosterParentText(e) {
                let t = this._findFosterParentingLocation();
                t.beforeElement ? this.treeAdapter.insertTextBefore(t.parent, e, t.beforeElement) : this.treeAdapter.insertText(t.parent, e)
            }

            _isSpecialElement(e) {
                let t = this.treeAdapter.getTagName(e), n = this.treeAdapter.getNamespaceURI(e);
                return f.SPECIAL_ELEMENTS[n][t]
            }
        }
    }, 8394: function (e, t, n) {
        "use strict";
        let r = n(3707), i = r.TAG_NAMES, a = r.NAMESPACES;

        function o(e) {
            switch (e.length) {
                case 1:
                    return e === i.P;
                case 2:
                    return e === i.RB || e === i.RP || e === i.RT || e === i.DD || e === i.DT || e === i.LI;
                case 3:
                    return e === i.RTC;
                case 6:
                    return e === i.OPTION;
                case 8:
                    return e === i.OPTGROUP
            }
            return !1
        }

        function s(e, t) {
            switch (e.length) {
                case 2:
                    if (e === i.TD || e === i.TH) return t === a.HTML;
                    if (e === i.MI || e === i.MO || e === i.MN || e === i.MS) return t === a.MATHML;
                    break;
                case 4:
                    if (e === i.HTML) return t === a.HTML;
                    if (e === i.DESC) return t === a.SVG;
                    break;
                case 5:
                    if (e === i.TABLE) return t === a.HTML;
                    if (e === i.MTEXT) return t === a.MATHML;
                    if (e === i.TITLE) return t === a.SVG;
                    break;
                case 6:
                    return (e === i.APPLET || e === i.OBJECT) && t === a.HTML;
                case 7:
                    return (e === i.CAPTION || e === i.MARQUEE) && t === a.HTML;
                case 8:
                    return e === i.TEMPLATE && t === a.HTML;
                case 13:
                    return e === i.FOREIGN_OBJECT && t === a.SVG;
                case 14:
                    return e === i.ANNOTATION_XML && t === a.MATHML
            }
            return !1
        }

        e.exports = class {
            constructor(e, t) {
                this.stackTop = -1, this.items = [], this.current = e, this.currentTagName = null, this.currentTmplContent = null, this.tmplCount = 0, this.treeAdapter = t
            }

            _indexOf(e) {
                let t = -1;
                for (let n = this.stackTop; n >= 0; n--) if (this.items[n] === e) {
                    t = n;
                    break
                }
                return t
            }

            _isInTemplate() {
                return this.currentTagName === i.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === a.HTML
            }

            _updateCurrentElement() {
                this.current = this.items[this.stackTop], this.currentTagName = this.current && this.treeAdapter.getTagName(this.current), this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null
            }

            push(e) {
                this.items[++this.stackTop] = e, this._updateCurrentElement(), this._isInTemplate() && this.tmplCount++
            }

            pop() {
                this.stackTop--, this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this._updateCurrentElement()
            }

            replace(e, t) {
                let n = this._indexOf(e);
                this.items[n] = t, n === this.stackTop && this._updateCurrentElement()
            }

            insertAfter(e, t) {
                let n = this._indexOf(e) + 1;
                this.items.splice(n, 0, t), n === ++this.stackTop && this._updateCurrentElement()
            }

            popUntilTagNamePopped(e) {
                for (; this.stackTop > -1;) {
                    let t = this.currentTagName, n = this.treeAdapter.getNamespaceURI(this.current);
                    if (this.pop(), t === e && n === a.HTML) break
                }
            }

            popUntilElementPopped(e) {
                for (; this.stackTop > -1;) {
                    let t = this.current;
                    if (this.pop(), t === e) break
                }
            }

            popUntilNumberedHeaderPopped() {
                for (; this.stackTop > -1;) {
                    let e = this.currentTagName, t = this.treeAdapter.getNamespaceURI(this.current);
                    if (this.pop(), e === i.H1 || e === i.H2 || e === i.H3 || e === i.H4 || e === i.H5 || e === i.H6 && t === a.HTML) break
                }
            }

            popUntilTableCellPopped() {
                for (; this.stackTop > -1;) {
                    let e = this.currentTagName, t = this.treeAdapter.getNamespaceURI(this.current);
                    if (this.pop(), e === i.TD || e === i.TH && t === a.HTML) break
                }
            }

            popAllUpToHtmlElement() {
                this.stackTop = 0, this._updateCurrentElement()
            }

            clearBackToTableContext() {
                for (; this.currentTagName !== i.TABLE && this.currentTagName !== i.TEMPLATE && this.currentTagName !== i.HTML || this.treeAdapter.getNamespaceURI(this.current) !== a.HTML;) this.pop()
            }

            clearBackToTableBodyContext() {
                for (; this.currentTagName !== i.TBODY && this.currentTagName !== i.TFOOT && this.currentTagName !== i.THEAD && this.currentTagName !== i.TEMPLATE && this.currentTagName !== i.HTML || this.treeAdapter.getNamespaceURI(this.current) !== a.HTML;) this.pop()
            }

            clearBackToTableRowContext() {
                for (; this.currentTagName !== i.TR && this.currentTagName !== i.TEMPLATE && this.currentTagName !== i.HTML || this.treeAdapter.getNamespaceURI(this.current) !== a.HTML;) this.pop()
            }

            remove(e) {
                for (let t = this.stackTop; t >= 0; t--) if (this.items[t] === e) {
                    this.items.splice(t, 1), this.stackTop--, this._updateCurrentElement();
                    break
                }
            }

            tryPeekProperlyNestedBodyElement() {
                let e = this.items[1];
                return e && this.treeAdapter.getTagName(e) === i.BODY ? e : null
            }

            contains(e) {
                return this._indexOf(e) > -1
            }

            getCommonAncestor(e) {
                let t = this._indexOf(e);
                return --t >= 0 ? this.items[t] : null
            }

            isRootHtmlElementCurrent() {
                return 0 === this.stackTop && this.currentTagName === i.HTML
            }

            hasInScope(e) {
                for (let t = this.stackTop; t >= 0; t--) {
                    let n = this.treeAdapter.getTagName(this.items[t]),
                        r = this.treeAdapter.getNamespaceURI(this.items[t]);
                    if (n === e && r === a.HTML) break;
                    if (s(n, r)) return !1
                }
                return !0
            }

            hasNumberedHeaderInScope() {
                for (let e = this.stackTop; e >= 0; e--) {
                    let t = this.treeAdapter.getTagName(this.items[e]),
                        n = this.treeAdapter.getNamespaceURI(this.items[e]);
                    if ((t === i.H1 || t === i.H2 || t === i.H3 || t === i.H4 || t === i.H5 || t === i.H6) && n === a.HTML) break;
                    if (s(t, n)) return !1
                }
                return !0
            }

            hasInListItemScope(e) {
                for (let t = this.stackTop; t >= 0; t--) {
                    let n = this.treeAdapter.getTagName(this.items[t]),
                        r = this.treeAdapter.getNamespaceURI(this.items[t]);
                    if (n === e && r === a.HTML) break;
                    if ((n === i.UL || n === i.OL) && r === a.HTML || s(n, r)) return !1
                }
                return !0
            }

            hasInButtonScope(e) {
                for (let t = this.stackTop; t >= 0; t--) {
                    let n = this.treeAdapter.getTagName(this.items[t]),
                        r = this.treeAdapter.getNamespaceURI(this.items[t]);
                    if (n === e && r === a.HTML) break;
                    if (n === i.BUTTON && r === a.HTML || s(n, r)) return !1
                }
                return !0
            }

            hasInTableScope(e) {
                for (let t = this.stackTop; t >= 0; t--) {
                    let n = this.treeAdapter.getTagName(this.items[t]),
                        r = this.treeAdapter.getNamespaceURI(this.items[t]);
                    if (r === a.HTML) {
                        if (n === e) break;
                        if (n === i.TABLE || n === i.TEMPLATE || n === i.HTML) return !1
                    }
                }
                return !0
            }

            hasTableBodyContextInTableScope() {
                for (let e = this.stackTop; e >= 0; e--) {
                    let t = this.treeAdapter.getTagName(this.items[e]),
                        n = this.treeAdapter.getNamespaceURI(this.items[e]);
                    if (n === a.HTML) {
                        if (t === i.TBODY || t === i.THEAD || t === i.TFOOT) break;
                        if (t === i.TABLE || t === i.HTML) return !1
                    }
                }
                return !0
            }

            hasInSelectScope(e) {
                for (let t = this.stackTop; t >= 0; t--) {
                    let n = this.treeAdapter.getTagName(this.items[t]),
                        r = this.treeAdapter.getNamespaceURI(this.items[t]);
                    if (r === a.HTML) {
                        if (n === e) break;
                        if (n !== i.OPTION && n !== i.OPTGROUP) return !1
                    }
                }
                return !0
            }

            generateImpliedEndTags() {
                for (; o(this.currentTagName);) this.pop()
            }

            generateImpliedEndTagsThoroughly() {
                for (; function (e) {
                    switch (e.length) {
                        case 1:
                            return e === i.P;
                        case 2:
                            return e === i.RB || e === i.RP || e === i.RT || e === i.DD || e === i.DT || e === i.LI || e === i.TD || e === i.TH || e === i.TR;
                        case 3:
                            return e === i.RTC;
                        case 5:
                            return e === i.TBODY || e === i.TFOOT || e === i.THEAD;
                        case 6:
                            return e === i.OPTION;
                        case 7:
                            return e === i.CAPTION;
                        case 8:
                            return e === i.OPTGROUP || e === i.COLGROUP
                    }
                    return !1
                }(this.currentTagName);) this.pop()
            }

            generateImpliedEndTagsWithExclusion(e) {
                for (; o(this.currentTagName) && this.currentTagName !== e;) this.pop()
            }
        }
    }, 196: function (e, t, n) {
        "use strict";
        let r = n(6354), i = n(1683), a = n(156), o = n(9046), s = i.CODE_POINTS, l = i.CODE_POINT_SEQUENCES, c = {
                128: 8364,
                130: 8218,
                131: 402,
                132: 8222,
                133: 8230,
                134: 8224,
                135: 8225,
                136: 710,
                137: 8240,
                138: 352,
                139: 8249,
                140: 338,
                142: 381,
                145: 8216,
                146: 8217,
                147: 8220,
                148: 8221,
                149: 8226,
                150: 8211,
                151: 8212,
                152: 732,
                153: 8482,
                154: 353,
                155: 8250,
                156: 339,
                158: 382,
                159: 376
            }, u = "DATA_STATE", d = "RCDATA_STATE", p = "RAWTEXT_STATE", h = "SCRIPT_DATA_STATE", m = "PLAINTEXT_STATE",
            f = "TAG_OPEN_STATE", g = "END_TAG_OPEN_STATE", E = "TAG_NAME_STATE", T = "RCDATA_LESS_THAN_SIGN_STATE",
            _ = "RCDATA_END_TAG_OPEN_STATE", b = "RCDATA_END_TAG_NAME_STATE", A = "RAWTEXT_LESS_THAN_SIGN_STATE",
            y = "RAWTEXT_END_TAG_OPEN_STATE", N = "RAWTEXT_END_TAG_NAME_STATE", k = "SCRIPT_DATA_LESS_THAN_SIGN_STATE",
            C = "SCRIPT_DATA_END_TAG_OPEN_STATE", S = "SCRIPT_DATA_END_TAG_NAME_STATE",
            O = "SCRIPT_DATA_ESCAPE_START_STATE", x = "SCRIPT_DATA_ESCAPE_START_DASH_STATE",
            v = "SCRIPT_DATA_ESCAPED_STATE", I = "SCRIPT_DATA_ESCAPED_DASH_STATE",
            w = "SCRIPT_DATA_ESCAPED_DASH_DASH_STATE", R = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE",
            M = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE", L = "SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE",
            D = "SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE", P = "SCRIPT_DATA_DOUBLE_ESCAPED_STATE",
            F = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE", H = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE",
            B = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE", U = "SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE",
            K = "BEFORE_ATTRIBUTE_NAME_STATE", G = "ATTRIBUTE_NAME_STATE", z = "AFTER_ATTRIBUTE_NAME_STATE",
            j = "BEFORE_ATTRIBUTE_VALUE_STATE", $ = "ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE",
            q = "ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE", W = "ATTRIBUTE_VALUE_UNQUOTED_STATE",
            Y = "AFTER_ATTRIBUTE_VALUE_QUOTED_STATE", Q = "SELF_CLOSING_START_TAG_STATE", V = "BOGUS_COMMENT_STATE",
            X = "MARKUP_DECLARATION_OPEN_STATE", Z = "COMMENT_START_STATE", J = "COMMENT_START_DASH_STATE",
            ee = "COMMENT_STATE", et = "COMMENT_LESS_THAN_SIGN_STATE", en = "COMMENT_LESS_THAN_SIGN_BANG_STATE",
            er = "COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE", ei = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE",
            ea = "COMMENT_END_DASH_STATE", eo = "COMMENT_END_STATE", es = "COMMENT_END_BANG_STATE",
            el = "DOCTYPE_STATE", ec = "BEFORE_DOCTYPE_NAME_STATE", eu = "DOCTYPE_NAME_STATE",
            ed = "AFTER_DOCTYPE_NAME_STATE", ep = "AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE",
            eh = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE", em = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE",
            ef = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE", eg = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE",
            eE = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE", eT = "AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE",
            e_ = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE", eb = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE",
            eA = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE", ey = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE",
            eN = "BOGUS_DOCTYPE_STATE", ek = "CDATA_SECTION_STATE", eC = "CDATA_SECTION_BRACKET_STATE",
            eS = "CDATA_SECTION_END_STATE", eO = "CHARACTER_REFERENCE_STATE", ex = "NAMED_CHARACTER_REFERENCE_STATE",
            ev = "AMBIGUOS_AMPERSAND_STATE", eI = "NUMERIC_CHARACTER_REFERENCE_STATE",
            ew = "HEXADEMICAL_CHARACTER_REFERENCE_START_STATE", eR = "DECIMAL_CHARACTER_REFERENCE_START_STATE",
            eM = "HEXADEMICAL_CHARACTER_REFERENCE_STATE", eL = "DECIMAL_CHARACTER_REFERENCE_STATE",
            eD = "NUMERIC_CHARACTER_REFERENCE_END_STATE";

        function eP(e) {
            return e === s.SPACE || e === s.LINE_FEED || e === s.TABULATION || e === s.FORM_FEED
        }

        function eF(e) {
            return e >= s.DIGIT_0 && e <= s.DIGIT_9
        }

        function eH(e) {
            return e >= s.LATIN_CAPITAL_A && e <= s.LATIN_CAPITAL_Z
        }

        function eB(e) {
            return e >= s.LATIN_SMALL_A && e <= s.LATIN_SMALL_Z
        }

        function eU(e) {
            return eB(e) || eH(e)
        }

        function eK(e) {
            return eU(e) || eF(e)
        }

        function eG(e) {
            return e >= s.LATIN_CAPITAL_A && e <= s.LATIN_CAPITAL_F
        }

        function ez(e) {
            return e >= s.LATIN_SMALL_A && e <= s.LATIN_SMALL_F
        }

        function ej(e) {
            return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e -= 65536) >>> 10 & 1023 | 55296) + String.fromCharCode(56320 | 1023 & e)
        }

        function e$(e) {
            return String.fromCharCode(e + 32)
        }

        function eq(e, t) {
            let n = a[++e], r = ++e, i = r + n - 1;
            for (; r <= i;) {
                let e = r + i >>> 1, o = a[e];
                if (o < t) r = e + 1; else {
                    if (!(o > t)) return a[e + n];
                    i = e - 1
                }
            }
            return -1
        }

        class eW {
            constructor() {
                this.preprocessor = new r, this.tokenQueue = [], this.allowCDATA = !1, this.state = u, this.returnState = "", this.charRefCode = -1, this.tempBuff = [], this.lastStartTagName = "", this.consumedAfterSnapshot = -1, this.active = !1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = null
            }

            _err() {
            }

            _errOnNextCodePoint(e) {
                this._consume(), this._err(e), this._unconsume()
            }

            getNextToken() {
                for (; !this.tokenQueue.length && this.active;) {
                    this.consumedAfterSnapshot = 0;
                    let e = this._consume();
                    this._ensureHibernation() || this[this.state](e)
                }
                return this.tokenQueue.shift()
            }

            write(e, t) {
                this.active = !0, this.preprocessor.write(e, t)
            }

            insertHtmlAtCurrentPos(e) {
                this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(e)
            }

            _ensureHibernation() {
                if (this.preprocessor.endOfChunkHit) {
                    for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--) this.preprocessor.retreat();
                    return this.active = !1, this.tokenQueue.push({type: eW.HIBERNATION_TOKEN}), !0
                }
                return !1
            }

            _consume() {
                return this.consumedAfterSnapshot++, this.preprocessor.advance()
            }

            _unconsume() {
                this.consumedAfterSnapshot--, this.preprocessor.retreat()
            }

            _reconsumeInState(e) {
                this.state = e, this._unconsume()
            }

            _consumeSequenceIfMatch(e, t, n) {
                let r, i = 0, a = !0, o = e.length, l = 0, c = t;
                for (; l < o; l++) if (l > 0 && (c = this._consume(), i++), c === s.EOF || c !== (r = e[l]) && (n || c !== r + 32)) {
                    a = !1;
                    break
                }
                if (!a) for (; i--;) this._unconsume();
                return a
            }

            _isTempBufferEqualToScriptString() {
                if (this.tempBuff.length !== l.SCRIPT_STRING.length) return !1;
                for (let e = 0; e < this.tempBuff.length; e++) if (this.tempBuff[e] !== l.SCRIPT_STRING[e]) return !1;
                return !0
            }

            _createStartTagToken() {
                this.currentToken = {
                    type: eW.START_TAG_TOKEN,
                    tagName: "",
                    selfClosing: !1,
                    ackSelfClosing: !1,
                    attrs: []
                }
            }

            _createEndTagToken() {
                this.currentToken = {type: eW.END_TAG_TOKEN, tagName: "", selfClosing: !1, attrs: []}
            }

            _createCommentToken() {
                this.currentToken = {type: eW.COMMENT_TOKEN, data: ""}
            }

            _createDoctypeToken(e) {
                this.currentToken = {type: eW.DOCTYPE_TOKEN, name: e, forceQuirks: !1, publicId: null, systemId: null}
            }

            _createCharacterToken(e, t) {
                this.currentCharacterToken = {type: e, chars: t}
            }

            _createEOFToken() {
                this.currentToken = {type: eW.EOF_TOKEN}
            }

            _createAttr(e) {
                this.currentAttr = {name: e, value: ""}
            }

            _leaveAttrName(e) {
                null === eW.getTokenAttr(this.currentToken, this.currentAttr.name) ? this.currentToken.attrs.push(this.currentAttr) : this._err(o.duplicateAttribute), this.state = e
            }

            _leaveAttrValue(e) {
                this.state = e
            }

            _emitCurrentToken() {
                this._emitCurrentCharacterToken();
                let e = this.currentToken;
                this.currentToken = null, e.type === eW.START_TAG_TOKEN ? this.lastStartTagName = e.tagName : e.type === eW.END_TAG_TOKEN && (e.attrs.length > 0 && this._err(o.endTagWithAttributes), e.selfClosing && this._err(o.endTagWithTrailingSolidus)), this.tokenQueue.push(e)
            }

            _emitCurrentCharacterToken() {
                this.currentCharacterToken && (this.tokenQueue.push(this.currentCharacterToken), this.currentCharacterToken = null)
            }

            _emitEOFToken() {
                this._createEOFToken(), this._emitCurrentToken()
            }

            _appendCharToCurrentCharacterToken(e, t) {
                this.currentCharacterToken && this.currentCharacterToken.type !== e && this._emitCurrentCharacterToken(), this.currentCharacterToken ? this.currentCharacterToken.chars += t : this._createCharacterToken(e, t)
            }

            _emitCodePoint(e) {
                let t = eW.CHARACTER_TOKEN;
                eP(e) ? t = eW.WHITESPACE_CHARACTER_TOKEN : e === s.NULL && (t = eW.NULL_CHARACTER_TOKEN), this._appendCharToCurrentCharacterToken(t, ej(e))
            }

            _emitSeveralCodePoints(e) {
                for (let t = 0; t < e.length; t++) this._emitCodePoint(e[t])
            }

            _emitChars(e) {
                this._appendCharToCurrentCharacterToken(eW.CHARACTER_TOKEN, e)
            }

            _matchNamedCharacterReference(e) {
                let t = null, n = 1, r = eq(0, e);
                for (this.tempBuff.push(e); r > -1;) {
                    let e = a[r], i = e < 7, o = i && 1 & e;
                    o && (t = 2 & e ? [a[++r], a[++r]] : [a[++r]], n = 0);
                    let l = this._consume();
                    if (this.tempBuff.push(l), n++, l === s.EOF) break;
                    r = i ? 4 & e ? eq(r, l) : -1 : l === e ? ++r : -1
                }
                for (; n--;) this.tempBuff.pop(), this._unconsume();
                return t
            }

            _isCharacterReferenceInAttribute() {
                return this.returnState === $ || this.returnState === q || this.returnState === W
            }

            _isCharacterReferenceAttributeQuirk(e) {
                if (!e && this._isCharacterReferenceInAttribute()) {
                    let e = this._consume();
                    return this._unconsume(), e === s.EQUALS_SIGN || eK(e)
                }
                return !1
            }

            _flushCodePointsConsumedAsCharacterReference() {
                if (this._isCharacterReferenceInAttribute()) for (let e = 0; e < this.tempBuff.length; e++) this.currentAttr.value += ej(this.tempBuff[e]); else this._emitSeveralCodePoints(this.tempBuff);
                this.tempBuff = []
            }

            [u](e) {
                this.preprocessor.dropParsedChunk(), e === s.LESS_THAN_SIGN ? this.state = f : e === s.AMPERSAND ? (this.returnState = u, this.state = eO) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this._emitCodePoint(e)) : e === s.EOF ? this._emitEOFToken() : this._emitCodePoint(e)
            }

            [d](e) {
                this.preprocessor.dropParsedChunk(), e === s.AMPERSAND ? (this.returnState = d, this.state = eO) : e === s.LESS_THAN_SIGN ? this.state = T : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this._emitChars(i.REPLACEMENT_CHARACTER)) : e === s.EOF ? this._emitEOFToken() : this._emitCodePoint(e)
            }

            [p](e) {
                this.preprocessor.dropParsedChunk(), e === s.LESS_THAN_SIGN ? this.state = A : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this._emitChars(i.REPLACEMENT_CHARACTER)) : e === s.EOF ? this._emitEOFToken() : this._emitCodePoint(e)
            }

            [h](e) {
                this.preprocessor.dropParsedChunk(), e === s.LESS_THAN_SIGN ? this.state = k : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this._emitChars(i.REPLACEMENT_CHARACTER)) : e === s.EOF ? this._emitEOFToken() : this._emitCodePoint(e)
            }

            [m](e) {
                this.preprocessor.dropParsedChunk(), e === s.NULL ? (this._err(o.unexpectedNullCharacter), this._emitChars(i.REPLACEMENT_CHARACTER)) : e === s.EOF ? this._emitEOFToken() : this._emitCodePoint(e)
            }

            [f](e) {
                e === s.EXCLAMATION_MARK ? this.state = X : e === s.SOLIDUS ? this.state = g : eU(e) ? (this._createStartTagToken(), this._reconsumeInState(E)) : e === s.QUESTION_MARK ? (this._err(o.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(), this._reconsumeInState(V)) : e === s.EOF ? (this._err(o.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken()) : (this._err(o.invalidFirstCharacterOfTagName), this._emitChars("<"), this._reconsumeInState(u))
            }

            [g](e) {
                eU(e) ? (this._createEndTagToken(), this._reconsumeInState(E)) : e === s.GREATER_THAN_SIGN ? (this._err(o.missingEndTagName), this.state = u) : e === s.EOF ? (this._err(o.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken()) : (this._err(o.invalidFirstCharacterOfTagName), this._createCommentToken(), this._reconsumeInState(V))
            }

            [E](e) {
                eP(e) ? this.state = K : e === s.SOLIDUS ? this.state = Q : e === s.GREATER_THAN_SIGN ? (this.state = u, this._emitCurrentToken()) : eH(e) ? this.currentToken.tagName += e$(e) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.currentToken.tagName += i.REPLACEMENT_CHARACTER) : e === s.EOF ? (this._err(o.eofInTag), this._emitEOFToken()) : this.currentToken.tagName += ej(e)
            }

            [T](e) {
                e === s.SOLIDUS ? (this.tempBuff = [], this.state = _) : (this._emitChars("<"), this._reconsumeInState(d))
            }

            [_](e) {
                eU(e) ? (this._createEndTagToken(), this._reconsumeInState(b)) : (this._emitChars("</"), this._reconsumeInState(d))
            }

            [b](e) {
                if (eH(e)) this.currentToken.tagName += e$(e), this.tempBuff.push(e); else if (eB(e)) this.currentToken.tagName += ej(e), this.tempBuff.push(e); else {
                    if (this.lastStartTagName === this.currentToken.tagName) {
                        if (eP(e)) {
                            this.state = K;
                            return
                        }
                        if (e === s.SOLIDUS) {
                            this.state = Q;
                            return
                        }
                        if (e === s.GREATER_THAN_SIGN) {
                            this.state = u, this._emitCurrentToken();
                            return
                        }
                    }
                    this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState(d)
                }
            }

            [A](e) {
                e === s.SOLIDUS ? (this.tempBuff = [], this.state = y) : (this._emitChars("<"), this._reconsumeInState(p))
            }

            [y](e) {
                eU(e) ? (this._createEndTagToken(), this._reconsumeInState(N)) : (this._emitChars("</"), this._reconsumeInState(p))
            }

            [N](e) {
                if (eH(e)) this.currentToken.tagName += e$(e), this.tempBuff.push(e); else if (eB(e)) this.currentToken.tagName += ej(e), this.tempBuff.push(e); else {
                    if (this.lastStartTagName === this.currentToken.tagName) {
                        if (eP(e)) {
                            this.state = K;
                            return
                        }
                        if (e === s.SOLIDUS) {
                            this.state = Q;
                            return
                        }
                        if (e === s.GREATER_THAN_SIGN) {
                            this._emitCurrentToken(), this.state = u;
                            return
                        }
                    }
                    this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState(p)
                }
            }

            [k](e) {
                e === s.SOLIDUS ? (this.tempBuff = [], this.state = C) : e === s.EXCLAMATION_MARK ? (this.state = O, this._emitChars("<!")) : (this._emitChars("<"), this._reconsumeInState(h))
            }

            [C](e) {
                eU(e) ? (this._createEndTagToken(), this._reconsumeInState(S)) : (this._emitChars("</"), this._reconsumeInState(h))
            }

            [S](e) {
                if (eH(e)) this.currentToken.tagName += e$(e), this.tempBuff.push(e); else if (eB(e)) this.currentToken.tagName += ej(e), this.tempBuff.push(e); else {
                    if (this.lastStartTagName === this.currentToken.tagName) {
                        if (eP(e)) {
                            this.state = K;
                            return
                        }
                        if (e === s.SOLIDUS) {
                            this.state = Q;
                            return
                        }
                        if (e === s.GREATER_THAN_SIGN) {
                            this._emitCurrentToken(), this.state = u;
                            return
                        }
                    }
                    this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState(h)
                }
            }

            [O](e) {
                e === s.HYPHEN_MINUS ? (this.state = x, this._emitChars("-")) : this._reconsumeInState(h)
            }

            [x](e) {
                e === s.HYPHEN_MINUS ? (this.state = w, this._emitChars("-")) : this._reconsumeInState(h)
            }

            [v](e) {
                e === s.HYPHEN_MINUS ? (this.state = I, this._emitChars("-")) : e === s.LESS_THAN_SIGN ? this.state = R : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this._emitChars(i.REPLACEMENT_CHARACTER)) : e === s.EOF ? (this._err(o.eofInScriptHtmlCommentLikeText), this._emitEOFToken()) : this._emitCodePoint(e)
            }

            [I](e) {
                e === s.HYPHEN_MINUS ? (this.state = w, this._emitChars("-")) : e === s.LESS_THAN_SIGN ? this.state = R : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.state = v, this._emitChars(i.REPLACEMENT_CHARACTER)) : e === s.EOF ? (this._err(o.eofInScriptHtmlCommentLikeText), this._emitEOFToken()) : (this.state = v, this._emitCodePoint(e))
            }

            [w](e) {
                e === s.HYPHEN_MINUS ? this._emitChars("-") : e === s.LESS_THAN_SIGN ? this.state = R : e === s.GREATER_THAN_SIGN ? (this.state = h, this._emitChars(">")) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.state = v, this._emitChars(i.REPLACEMENT_CHARACTER)) : e === s.EOF ? (this._err(o.eofInScriptHtmlCommentLikeText), this._emitEOFToken()) : (this.state = v, this._emitCodePoint(e))
            }

            [R](e) {
                e === s.SOLIDUS ? (this.tempBuff = [], this.state = M) : eU(e) ? (this.tempBuff = [], this._emitChars("<"), this._reconsumeInState(D)) : (this._emitChars("<"), this._reconsumeInState(v))
            }

            [M](e) {
                eU(e) ? (this._createEndTagToken(), this._reconsumeInState(L)) : (this._emitChars("</"), this._reconsumeInState(v))
            }

            [L](e) {
                if (eH(e)) this.currentToken.tagName += e$(e), this.tempBuff.push(e); else if (eB(e)) this.currentToken.tagName += ej(e), this.tempBuff.push(e); else {
                    if (this.lastStartTagName === this.currentToken.tagName) {
                        if (eP(e)) {
                            this.state = K;
                            return
                        }
                        if (e === s.SOLIDUS) {
                            this.state = Q;
                            return
                        }
                        if (e === s.GREATER_THAN_SIGN) {
                            this._emitCurrentToken(), this.state = u;
                            return
                        }
                    }
                    this._emitChars("</"), this._emitSeveralCodePoints(this.tempBuff), this._reconsumeInState(v)
                }
            }

            [D](e) {
                eP(e) || e === s.SOLIDUS || e === s.GREATER_THAN_SIGN ? (this.state = this._isTempBufferEqualToScriptString() ? P : v, this._emitCodePoint(e)) : eH(e) ? (this.tempBuff.push(e + 32), this._emitCodePoint(e)) : eB(e) ? (this.tempBuff.push(e), this._emitCodePoint(e)) : this._reconsumeInState(v)
            }

            [P](e) {
                e === s.HYPHEN_MINUS ? (this.state = F, this._emitChars("-")) : e === s.LESS_THAN_SIGN ? (this.state = B, this._emitChars("<")) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this._emitChars(i.REPLACEMENT_CHARACTER)) : e === s.EOF ? (this._err(o.eofInScriptHtmlCommentLikeText), this._emitEOFToken()) : this._emitCodePoint(e)
            }

            [F](e) {
                e === s.HYPHEN_MINUS ? (this.state = H, this._emitChars("-")) : e === s.LESS_THAN_SIGN ? (this.state = B, this._emitChars("<")) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.state = P, this._emitChars(i.REPLACEMENT_CHARACTER)) : e === s.EOF ? (this._err(o.eofInScriptHtmlCommentLikeText), this._emitEOFToken()) : (this.state = P, this._emitCodePoint(e))
            }

            [H](e) {
                e === s.HYPHEN_MINUS ? this._emitChars("-") : e === s.LESS_THAN_SIGN ? (this.state = B, this._emitChars("<")) : e === s.GREATER_THAN_SIGN ? (this.state = h, this._emitChars(">")) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.state = P, this._emitChars(i.REPLACEMENT_CHARACTER)) : e === s.EOF ? (this._err(o.eofInScriptHtmlCommentLikeText), this._emitEOFToken()) : (this.state = P, this._emitCodePoint(e))
            }

            [B](e) {
                e === s.SOLIDUS ? (this.tempBuff = [], this.state = U, this._emitChars("/")) : this._reconsumeInState(P)
            }

            [U](e) {
                eP(e) || e === s.SOLIDUS || e === s.GREATER_THAN_SIGN ? (this.state = this._isTempBufferEqualToScriptString() ? v : P, this._emitCodePoint(e)) : eH(e) ? (this.tempBuff.push(e + 32), this._emitCodePoint(e)) : eB(e) ? (this.tempBuff.push(e), this._emitCodePoint(e)) : this._reconsumeInState(P)
            }

            [K](e) {
                eP(e) || (e === s.SOLIDUS || e === s.GREATER_THAN_SIGN || e === s.EOF ? this._reconsumeInState(z) : e === s.EQUALS_SIGN ? (this._err(o.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = G) : (this._createAttr(""), this._reconsumeInState(G)))
            }

            [G](e) {
                eP(e) || e === s.SOLIDUS || e === s.GREATER_THAN_SIGN || e === s.EOF ? (this._leaveAttrName(z), this._unconsume()) : e === s.EQUALS_SIGN ? this._leaveAttrName(j) : eH(e) ? this.currentAttr.name += e$(e) : e === s.QUOTATION_MARK || e === s.APOSTROPHE || e === s.LESS_THAN_SIGN ? (this._err(o.unexpectedCharacterInAttributeName), this.currentAttr.name += ej(e)) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.currentAttr.name += i.REPLACEMENT_CHARACTER) : this.currentAttr.name += ej(e)
            }

            [z](e) {
                eP(e) || (e === s.SOLIDUS ? this.state = Q : e === s.EQUALS_SIGN ? this.state = j : e === s.GREATER_THAN_SIGN ? (this.state = u, this._emitCurrentToken()) : e === s.EOF ? (this._err(o.eofInTag), this._emitEOFToken()) : (this._createAttr(""), this._reconsumeInState(G)))
            }

            [j](e) {
                eP(e) || (e === s.QUOTATION_MARK ? this.state = $ : e === s.APOSTROPHE ? this.state = q : e === s.GREATER_THAN_SIGN ? (this._err(o.missingAttributeValue), this.state = u, this._emitCurrentToken()) : this._reconsumeInState(W))
            }

            [$](e) {
                e === s.QUOTATION_MARK ? this.state = Y : e === s.AMPERSAND ? (this.returnState = $, this.state = eO) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.currentAttr.value += i.REPLACEMENT_CHARACTER) : e === s.EOF ? (this._err(o.eofInTag), this._emitEOFToken()) : this.currentAttr.value += ej(e)
            }

            [q](e) {
                e === s.APOSTROPHE ? this.state = Y : e === s.AMPERSAND ? (this.returnState = q, this.state = eO) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.currentAttr.value += i.REPLACEMENT_CHARACTER) : e === s.EOF ? (this._err(o.eofInTag), this._emitEOFToken()) : this.currentAttr.value += ej(e)
            }

            [W](e) {
                eP(e) ? this._leaveAttrValue(K) : e === s.AMPERSAND ? (this.returnState = W, this.state = eO) : e === s.GREATER_THAN_SIGN ? (this._leaveAttrValue(u), this._emitCurrentToken()) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.currentAttr.value += i.REPLACEMENT_CHARACTER) : e === s.QUOTATION_MARK || e === s.APOSTROPHE || e === s.LESS_THAN_SIGN || e === s.EQUALS_SIGN || e === s.GRAVE_ACCENT ? (this._err(o.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += ej(e)) : e === s.EOF ? (this._err(o.eofInTag), this._emitEOFToken()) : this.currentAttr.value += ej(e)
            }

            [Y](e) {
                eP(e) ? this._leaveAttrValue(K) : e === s.SOLIDUS ? this._leaveAttrValue(Q) : e === s.GREATER_THAN_SIGN ? (this._leaveAttrValue(u), this._emitCurrentToken()) : e === s.EOF ? (this._err(o.eofInTag), this._emitEOFToken()) : (this._err(o.missingWhitespaceBetweenAttributes), this._reconsumeInState(K))
            }

            [Q](e) {
                e === s.GREATER_THAN_SIGN ? (this.currentToken.selfClosing = !0, this.state = u, this._emitCurrentToken()) : e === s.EOF ? (this._err(o.eofInTag), this._emitEOFToken()) : (this._err(o.unexpectedSolidusInTag), this._reconsumeInState(K))
            }

            [V](e) {
                e === s.GREATER_THAN_SIGN ? (this.state = u, this._emitCurrentToken()) : e === s.EOF ? (this._emitCurrentToken(), this._emitEOFToken()) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.currentToken.data += i.REPLACEMENT_CHARACTER) : this.currentToken.data += ej(e)
            }

            [X](e) {
                this._consumeSequenceIfMatch(l.DASH_DASH_STRING, e, !0) ? (this._createCommentToken(), this.state = Z) : this._consumeSequenceIfMatch(l.DOCTYPE_STRING, e, !1) ? this.state = el : this._consumeSequenceIfMatch(l.CDATA_START_STRING, e, !0) ? this.allowCDATA ? this.state = ek : (this._err(o.cdataInHtmlContent), this._createCommentToken(), this.currentToken.data = "[CDATA[", this.state = V) : this._ensureHibernation() || (this._err(o.incorrectlyOpenedComment), this._createCommentToken(), this._reconsumeInState(V))
            }

            [Z](e) {
                e === s.HYPHEN_MINUS ? this.state = J : e === s.GREATER_THAN_SIGN ? (this._err(o.abruptClosingOfEmptyComment), this.state = u, this._emitCurrentToken()) : this._reconsumeInState(ee)
            }

            [J](e) {
                e === s.HYPHEN_MINUS ? this.state = eo : e === s.GREATER_THAN_SIGN ? (this._err(o.abruptClosingOfEmptyComment), this.state = u, this._emitCurrentToken()) : e === s.EOF ? (this._err(o.eofInComment), this._emitCurrentToken(), this._emitEOFToken()) : (this.currentToken.data += "-", this._reconsumeInState(ee))
            }

            [ee](e) {
                e === s.HYPHEN_MINUS ? this.state = ea : e === s.LESS_THAN_SIGN ? (this.currentToken.data += "<", this.state = et) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.currentToken.data += i.REPLACEMENT_CHARACTER) : e === s.EOF ? (this._err(o.eofInComment), this._emitCurrentToken(), this._emitEOFToken()) : this.currentToken.data += ej(e)
            }

            [et](e) {
                e === s.EXCLAMATION_MARK ? (this.currentToken.data += "!", this.state = en) : e === s.LESS_THAN_SIGN ? this.currentToken.data += "!" : this._reconsumeInState(ee)
            }

            [en](e) {
                e === s.HYPHEN_MINUS ? this.state = er : this._reconsumeInState(ee)
            }

            [er](e) {
                e === s.HYPHEN_MINUS ? this.state = ei : this._reconsumeInState(ea)
            }

            [ei](e) {
                e !== s.GREATER_THAN_SIGN && e !== s.EOF && this._err(o.nestedComment), this._reconsumeInState(eo)
            }

            [ea](e) {
                e === s.HYPHEN_MINUS ? this.state = eo : e === s.EOF ? (this._err(o.eofInComment), this._emitCurrentToken(), this._emitEOFToken()) : (this.currentToken.data += "-", this._reconsumeInState(ee))
            }

            [eo](e) {
                e === s.GREATER_THAN_SIGN ? (this.state = u, this._emitCurrentToken()) : e === s.EXCLAMATION_MARK ? this.state = es : e === s.HYPHEN_MINUS ? this.currentToken.data += "-" : e === s.EOF ? (this._err(o.eofInComment), this._emitCurrentToken(), this._emitEOFToken()) : (this.currentToken.data += "--", this._reconsumeInState(ee))
            }

            [es](e) {
                e === s.HYPHEN_MINUS ? (this.currentToken.data += "--!", this.state = ea) : e === s.GREATER_THAN_SIGN ? (this._err(o.incorrectlyClosedComment), this.state = u, this._emitCurrentToken()) : e === s.EOF ? (this._err(o.eofInComment), this._emitCurrentToken(), this._emitEOFToken()) : (this.currentToken.data += "--!", this._reconsumeInState(ee))
            }

            [el](e) {
                eP(e) ? this.state = ec : e === s.GREATER_THAN_SIGN ? this._reconsumeInState(ec) : e === s.EOF ? (this._err(o.eofInDoctype), this._createDoctypeToken(null), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(o.missingWhitespaceBeforeDoctypeName), this._reconsumeInState(ec))
            }

            [ec](e) {
                eP(e) || (eH(e) ? (this._createDoctypeToken(e$(e)), this.state = eu) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this._createDoctypeToken(i.REPLACEMENT_CHARACTER), this.state = eu) : e === s.GREATER_THAN_SIGN ? (this._err(o.missingDoctypeName), this._createDoctypeToken(null), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = u) : e === s.EOF ? (this._err(o.eofInDoctype), this._createDoctypeToken(null), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._createDoctypeToken(ej(e)), this.state = eu))
            }

            [eu](e) {
                eP(e) ? this.state = ed : e === s.GREATER_THAN_SIGN ? (this.state = u, this._emitCurrentToken()) : eH(e) ? this.currentToken.name += e$(e) : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.currentToken.name += i.REPLACEMENT_CHARACTER) : e === s.EOF ? (this._err(o.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : this.currentToken.name += ej(e)
            }

            [ed](e) {
                !eP(e) && (e === s.GREATER_THAN_SIGN ? (this.state = u, this._emitCurrentToken()) : e === s.EOF ? (this._err(o.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : this._consumeSequenceIfMatch(l.PUBLIC_STRING, e, !1) ? this.state = ep : this._consumeSequenceIfMatch(l.SYSTEM_STRING, e, !1) ? this.state = eT : this._ensureHibernation() || (this._err(o.invalidCharacterSequenceAfterDoctypeName), this.currentToken.forceQuirks = !0, this._reconsumeInState(eN)))
            }

            [ep](e) {
                eP(e) ? this.state = eh : e === s.QUOTATION_MARK ? (this._err(o.missingWhitespaceAfterDoctypePublicKeyword), this.currentToken.publicId = "", this.state = em) : e === s.APOSTROPHE ? (this._err(o.missingWhitespaceAfterDoctypePublicKeyword), this.currentToken.publicId = "", this.state = ef) : e === s.GREATER_THAN_SIGN ? (this._err(o.missingDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this.state = u, this._emitCurrentToken()) : e === s.EOF ? (this._err(o.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(o.missingQuoteBeforeDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState(eN))
            }

            [eh](e) {
                eP(e) || (e === s.QUOTATION_MARK ? (this.currentToken.publicId = "", this.state = em) : e === s.APOSTROPHE ? (this.currentToken.publicId = "", this.state = ef) : e === s.GREATER_THAN_SIGN ? (this._err(o.missingDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this.state = u, this._emitCurrentToken()) : e === s.EOF ? (this._err(o.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(o.missingQuoteBeforeDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState(eN)))
            }

            [em](e) {
                e === s.QUOTATION_MARK ? this.state = eg : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.currentToken.publicId += i.REPLACEMENT_CHARACTER) : e === s.GREATER_THAN_SIGN ? (this._err(o.abruptDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = u) : e === s.EOF ? (this._err(o.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : this.currentToken.publicId += ej(e)
            }

            [ef](e) {
                e === s.APOSTROPHE ? this.state = eg : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.currentToken.publicId += i.REPLACEMENT_CHARACTER) : e === s.GREATER_THAN_SIGN ? (this._err(o.abruptDoctypePublicIdentifier), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = u) : e === s.EOF ? (this._err(o.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : this.currentToken.publicId += ej(e)
            }

            [eg](e) {
                eP(e) ? this.state = eE : e === s.GREATER_THAN_SIGN ? (this.state = u, this._emitCurrentToken()) : e === s.QUOTATION_MARK ? (this._err(o.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), this.currentToken.systemId = "", this.state = eb) : e === s.APOSTROPHE ? (this._err(o.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), this.currentToken.systemId = "", this.state = eA) : e === s.EOF ? (this._err(o.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(o.missingQuoteBeforeDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState(eN))
            }

            [eE](e) {
                eP(e) || (e === s.GREATER_THAN_SIGN ? (this._emitCurrentToken(), this.state = u) : e === s.QUOTATION_MARK ? (this.currentToken.systemId = "", this.state = eb) : e === s.APOSTROPHE ? (this.currentToken.systemId = "", this.state = eA) : e === s.EOF ? (this._err(o.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(o.missingQuoteBeforeDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState(eN)))
            }

            [eT](e) {
                eP(e) ? this.state = e_ : e === s.QUOTATION_MARK ? (this._err(o.missingWhitespaceAfterDoctypeSystemKeyword), this.currentToken.systemId = "", this.state = eb) : e === s.APOSTROPHE ? (this._err(o.missingWhitespaceAfterDoctypeSystemKeyword), this.currentToken.systemId = "", this.state = eA) : e === s.GREATER_THAN_SIGN ? (this._err(o.missingDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this.state = u, this._emitCurrentToken()) : e === s.EOF ? (this._err(o.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(o.missingQuoteBeforeDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState(eN))
            }

            [e_](e) {
                eP(e) || (e === s.QUOTATION_MARK ? (this.currentToken.systemId = "", this.state = eb) : e === s.APOSTROPHE ? (this.currentToken.systemId = "", this.state = eA) : e === s.GREATER_THAN_SIGN ? (this._err(o.missingDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this.state = u, this._emitCurrentToken()) : e === s.EOF ? (this._err(o.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(o.missingQuoteBeforeDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._reconsumeInState(eN)))
            }

            [eb](e) {
                e === s.QUOTATION_MARK ? this.state = ey : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.currentToken.systemId += i.REPLACEMENT_CHARACTER) : e === s.GREATER_THAN_SIGN ? (this._err(o.abruptDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = u) : e === s.EOF ? (this._err(o.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : this.currentToken.systemId += ej(e)
            }

            [eA](e) {
                e === s.APOSTROPHE ? this.state = ey : e === s.NULL ? (this._err(o.unexpectedNullCharacter), this.currentToken.systemId += i.REPLACEMENT_CHARACTER) : e === s.GREATER_THAN_SIGN ? (this._err(o.abruptDoctypeSystemIdentifier), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this.state = u) : e === s.EOF ? (this._err(o.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : this.currentToken.systemId += ej(e)
            }

            [ey](e) {
                eP(e) || (e === s.GREATER_THAN_SIGN ? (this._emitCurrentToken(), this.state = u) : e === s.EOF ? (this._err(o.eofInDoctype), this.currentToken.forceQuirks = !0, this._emitCurrentToken(), this._emitEOFToken()) : (this._err(o.unexpectedCharacterAfterDoctypeSystemIdentifier), this._reconsumeInState(eN)))
            }

            [eN](e) {
                e === s.GREATER_THAN_SIGN ? (this._emitCurrentToken(), this.state = u) : e === s.NULL ? this._err(o.unexpectedNullCharacter) : e === s.EOF && (this._emitCurrentToken(), this._emitEOFToken())
            }

            [ek](e) {
                e === s.RIGHT_SQUARE_BRACKET ? this.state = eC : e === s.EOF ? (this._err(o.eofInCdata), this._emitEOFToken()) : this._emitCodePoint(e)
            }

            [eC](e) {
                e === s.RIGHT_SQUARE_BRACKET ? this.state = eS : (this._emitChars("]"), this._reconsumeInState(ek))
            }

            [eS](e) {
                e === s.GREATER_THAN_SIGN ? this.state = u : e === s.RIGHT_SQUARE_BRACKET ? this._emitChars("]") : (this._emitChars("]]"), this._reconsumeInState(ek))
            }

            [eO](e) {
                this.tempBuff = [s.AMPERSAND], e === s.NUMBER_SIGN ? (this.tempBuff.push(e), this.state = eI) : eK(e) ? this._reconsumeInState(ex) : (this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState))
            }

            [ex](e) {
                let t = this._matchNamedCharacterReference(e);
                if (this._ensureHibernation()) this.tempBuff = [s.AMPERSAND]; else if (t) {
                    let e = this.tempBuff[this.tempBuff.length - 1] === s.SEMICOLON;
                    this._isCharacterReferenceAttributeQuirk(e) || (e || this._errOnNextCodePoint(o.missingSemicolonAfterCharacterReference), this.tempBuff = t), this._flushCodePointsConsumedAsCharacterReference(), this.state = this.returnState
                } else this._flushCodePointsConsumedAsCharacterReference(), this.state = ev
            }

            [ev](e) {
                eK(e) ? this._isCharacterReferenceInAttribute() ? this.currentAttr.value += ej(e) : this._emitCodePoint(e) : (e === s.SEMICOLON && this._err(o.unknownNamedCharacterReference), this._reconsumeInState(this.returnState))
            }

            [eI](e) {
                this.charRefCode = 0, e === s.LATIN_SMALL_X || e === s.LATIN_CAPITAL_X ? (this.tempBuff.push(e), this.state = ew) : this._reconsumeInState(eR)
            }

            [ew](e) {
                eF(e) || eG(e) || ez(e) ? this._reconsumeInState(eM) : (this._err(o.absenceOfDigitsInNumericCharacterReference), this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState))
            }

            [eR](e) {
                eF(e) ? this._reconsumeInState(eL) : (this._err(o.absenceOfDigitsInNumericCharacterReference), this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState))
            }

            [eM](e) {
                eG(e) ? this.charRefCode = 16 * this.charRefCode + e - 55 : ez(e) ? this.charRefCode = 16 * this.charRefCode + e - 87 : eF(e) ? this.charRefCode = 16 * this.charRefCode + e - 48 : e === s.SEMICOLON ? this.state = eD : (this._err(o.missingSemicolonAfterCharacterReference), this._reconsumeInState(eD))
            }

            [eL](e) {
                eF(e) ? this.charRefCode = 10 * this.charRefCode + e - 48 : e === s.SEMICOLON ? this.state = eD : (this._err(o.missingSemicolonAfterCharacterReference), this._reconsumeInState(eD))
            }

            [eD]() {
                if (this.charRefCode === s.NULL) this._err(o.nullCharacterReference), this.charRefCode = s.REPLACEMENT_CHARACTER; else if (this.charRefCode > 1114111) this._err(o.characterReferenceOutsideUnicodeRange), this.charRefCode = s.REPLACEMENT_CHARACTER; else if (i.isSurrogate(this.charRefCode)) this._err(o.surrogateCharacterReference), this.charRefCode = s.REPLACEMENT_CHARACTER; else if (i.isUndefinedCodePoint(this.charRefCode)) this._err(o.noncharacterCharacterReference); else if (i.isControlCodePoint(this.charRefCode) || this.charRefCode === s.CARRIAGE_RETURN) {
                    this._err(o.controlCharacterReference);
                    let e = c[this.charRefCode];
                    e && (this.charRefCode = e)
                }
                this.tempBuff = [this.charRefCode], this._flushCodePointsConsumedAsCharacterReference(), this._reconsumeInState(this.returnState)
            }
        }

        eW.CHARACTER_TOKEN = "CHARACTER_TOKEN", eW.NULL_CHARACTER_TOKEN = "NULL_CHARACTER_TOKEN", eW.WHITESPACE_CHARACTER_TOKEN = "WHITESPACE_CHARACTER_TOKEN", eW.START_TAG_TOKEN = "START_TAG_TOKEN", eW.END_TAG_TOKEN = "END_TAG_TOKEN", eW.COMMENT_TOKEN = "COMMENT_TOKEN", eW.DOCTYPE_TOKEN = "DOCTYPE_TOKEN", eW.EOF_TOKEN = "EOF_TOKEN", eW.HIBERNATION_TOKEN = "HIBERNATION_TOKEN", eW.MODE = {
            DATA: u,
            RCDATA: d,
            RAWTEXT: p,
            SCRIPT_DATA: h,
            PLAINTEXT: m
        }, eW.getTokenAttr = function (e, t) {
            for (let n = e.attrs.length - 1; n >= 0; n--) if (e.attrs[n].name === t) return e.attrs[n].value;
            return null
        }, e.exports = eW
    }, 156: function (e) {
        "use strict";
        e.exports = new Uint16Array([4, 52, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 106, 303, 412, 810, 1432, 1701, 1796, 1987, 2114, 2360, 2420, 2484, 3170, 3251, 4140, 4393, 4575, 4610, 5106, 5512, 5728, 6117, 6274, 6315, 6345, 6427, 6516, 7002, 7910, 8733, 9323, 9870, 10170, 10631, 10893, 11318, 11386, 11467, 12773, 13092, 14474, 14922, 15448, 15542, 16419, 17666, 18166, 18611, 19004, 19095, 19298, 19397, 4, 16, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 140, 150, 158, 169, 176, 194, 199, 210, 216, 222, 226, 242, 256, 266, 283, 294, 108, 105, 103, 5, 198, 1, 59, 148, 1, 198, 80, 5, 38, 1, 59, 156, 1, 38, 99, 117, 116, 101, 5, 193, 1, 59, 167, 1, 193, 114, 101, 118, 101, 59, 1, 258, 4, 2, 105, 121, 182, 191, 114, 99, 5, 194, 1, 59, 189, 1, 194, 59, 1, 1040, 114, 59, 3, 55349, 56580, 114, 97, 118, 101, 5, 192, 1, 59, 208, 1, 192, 112, 104, 97, 59, 1, 913, 97, 99, 114, 59, 1, 256, 100, 59, 1, 10835, 4, 2, 103, 112, 232, 237, 111, 110, 59, 1, 260, 102, 59, 3, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 1, 8289, 105, 110, 103, 5, 197, 1, 59, 264, 1, 197, 4, 2, 99, 115, 272, 277, 114, 59, 3, 55349, 56476, 105, 103, 110, 59, 1, 8788, 105, 108, 100, 101, 5, 195, 1, 59, 292, 1, 195, 109, 108, 5, 196, 1, 59, 301, 1, 196, 4, 8, 97, 99, 101, 102, 111, 114, 115, 117, 321, 350, 354, 383, 388, 394, 400, 405, 4, 2, 99, 114, 327, 336, 107, 115, 108, 97, 115, 104, 59, 1, 8726, 4, 2, 118, 119, 342, 345, 59, 1, 10983, 101, 100, 59, 1, 8966, 121, 59, 1, 1041, 4, 3, 99, 114, 116, 362, 369, 379, 97, 117, 115, 101, 59, 1, 8757, 110, 111, 117, 108, 108, 105, 115, 59, 1, 8492, 97, 59, 1, 914, 114, 59, 3, 55349, 56581, 112, 102, 59, 3, 55349, 56633, 101, 118, 101, 59, 1, 728, 99, 114, 59, 1, 8492, 109, 112, 101, 113, 59, 1, 8782, 4, 14, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 442, 447, 456, 504, 542, 547, 569, 573, 577, 616, 678, 784, 790, 796, 99, 121, 59, 1, 1063, 80, 89, 5, 169, 1, 59, 454, 1, 169, 4, 3, 99, 112, 121, 464, 470, 497, 117, 116, 101, 59, 1, 262, 4, 2, 59, 105, 476, 478, 1, 8914, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8517, 108, 101, 121, 115, 59, 1, 8493, 4, 4, 97, 101, 105, 111, 514, 520, 530, 535, 114, 111, 110, 59, 1, 268, 100, 105, 108, 5, 199, 1, 59, 528, 1, 199, 114, 99, 59, 1, 264, 110, 105, 110, 116, 59, 1, 8752, 111, 116, 59, 1, 266, 4, 2, 100, 110, 553, 560, 105, 108, 108, 97, 59, 1, 184, 116, 101, 114, 68, 111, 116, 59, 1, 183, 114, 59, 1, 8493, 105, 59, 1, 935, 114, 99, 108, 101, 4, 4, 68, 77, 80, 84, 591, 596, 603, 609, 111, 116, 59, 1, 8857, 105, 110, 117, 115, 59, 1, 8854, 108, 117, 115, 59, 1, 8853, 105, 109, 101, 115, 59, 1, 8855, 111, 4, 2, 99, 115, 623, 646, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8754, 101, 67, 117, 114, 108, 121, 4, 2, 68, 81, 658, 671, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8221, 117, 111, 116, 101, 59, 1, 8217, 4, 4, 108, 110, 112, 117, 688, 701, 736, 753, 111, 110, 4, 2, 59, 101, 696, 698, 1, 8759, 59, 1, 10868, 4, 3, 103, 105, 116, 709, 717, 722, 114, 117, 101, 110, 116, 59, 1, 8801, 110, 116, 59, 1, 8751, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8750, 4, 2, 102, 114, 742, 745, 59, 1, 8450, 111, 100, 117, 99, 116, 59, 1, 8720, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8755, 111, 115, 115, 59, 1, 10799, 99, 114, 59, 3, 55349, 56478, 112, 4, 2, 59, 67, 803, 805, 1, 8915, 97, 112, 59, 1, 8781, 4, 11, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 834, 850, 855, 860, 865, 888, 903, 916, 921, 1011, 1415, 4, 2, 59, 111, 840, 842, 1, 8517, 116, 114, 97, 104, 100, 59, 1, 10513, 99, 121, 59, 1, 1026, 99, 121, 59, 1, 1029, 99, 121, 59, 1, 1039, 4, 3, 103, 114, 115, 873, 879, 883, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8609, 104, 118, 59, 1, 10980, 4, 2, 97, 121, 894, 900, 114, 111, 110, 59, 1, 270, 59, 1, 1044, 108, 4, 2, 59, 116, 910, 912, 1, 8711, 97, 59, 1, 916, 114, 59, 3, 55349, 56583, 4, 2, 97, 102, 927, 998, 4, 2, 99, 109, 933, 992, 114, 105, 116, 105, 99, 97, 108, 4, 4, 65, 68, 71, 84, 950, 957, 978, 985, 99, 117, 116, 101, 59, 1, 180, 111, 4, 2, 116, 117, 964, 967, 59, 1, 729, 98, 108, 101, 65, 99, 117, 116, 101, 59, 1, 733, 114, 97, 118, 101, 59, 1, 96, 105, 108, 100, 101, 59, 1, 732, 111, 110, 100, 59, 1, 8900, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8518, 4, 4, 112, 116, 117, 119, 1021, 1026, 1048, 1249, 102, 59, 3, 55349, 56635, 4, 3, 59, 68, 69, 1034, 1036, 1041, 1, 168, 111, 116, 59, 1, 8412, 113, 117, 97, 108, 59, 1, 8784, 98, 108, 101, 4, 6, 67, 68, 76, 82, 85, 86, 1065, 1082, 1101, 1189, 1211, 1236, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8751, 111, 4, 2, 116, 119, 1089, 1092, 59, 1, 168, 110, 65, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 101, 111, 1107, 1141, 102, 116, 4, 3, 65, 82, 84, 1117, 1124, 1136, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8660, 101, 101, 59, 1, 10980, 110, 103, 4, 2, 76, 82, 1149, 1177, 101, 102, 116, 4, 2, 65, 82, 1158, 1165, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10233, 105, 103, 104, 116, 4, 2, 65, 84, 1199, 1206, 114, 114, 111, 119, 59, 1, 8658, 101, 101, 59, 1, 8872, 112, 4, 2, 65, 68, 1218, 1225, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8741, 110, 4, 6, 65, 66, 76, 82, 84, 97, 1264, 1292, 1299, 1352, 1391, 1408, 114, 114, 111, 119, 4, 3, 59, 66, 85, 1276, 1278, 1283, 1, 8595, 97, 114, 59, 1, 10515, 112, 65, 114, 114, 111, 119, 59, 1, 8693, 114, 101, 118, 101, 59, 1, 785, 101, 102, 116, 4, 3, 82, 84, 86, 1310, 1323, 1334, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 1, 10576, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10590, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1345, 1347, 1, 8637, 97, 114, 59, 1, 10582, 105, 103, 104, 116, 4, 2, 84, 86, 1362, 1373, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10591, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1384, 1386, 1, 8641, 97, 114, 59, 1, 10583, 101, 101, 4, 2, 59, 65, 1399, 1401, 1, 8868, 114, 114, 111, 119, 59, 1, 8615, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 99, 116, 1421, 1426, 114, 59, 3, 55349, 56479, 114, 111, 107, 59, 1, 272, 4, 16, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1466, 1470, 1478, 1489, 1515, 1520, 1525, 1536, 1544, 1593, 1609, 1617, 1650, 1664, 1668, 1677, 71, 59, 1, 330, 72, 5, 208, 1, 59, 1476, 1, 208, 99, 117, 116, 101, 5, 201, 1, 59, 1487, 1, 201, 4, 3, 97, 105, 121, 1497, 1503, 1512, 114, 111, 110, 59, 1, 282, 114, 99, 5, 202, 1, 59, 1510, 1, 202, 59, 1, 1069, 111, 116, 59, 1, 278, 114, 59, 3, 55349, 56584, 114, 97, 118, 101, 5, 200, 1, 59, 1534, 1, 200, 101, 109, 101, 110, 116, 59, 1, 8712, 4, 2, 97, 112, 1550, 1555, 99, 114, 59, 1, 274, 116, 121, 4, 2, 83, 86, 1563, 1576, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9723, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9643, 4, 2, 103, 112, 1599, 1604, 111, 110, 59, 1, 280, 102, 59, 3, 55349, 56636, 115, 105, 108, 111, 110, 59, 1, 917, 117, 4, 2, 97, 105, 1624, 1640, 108, 4, 2, 59, 84, 1631, 1633, 1, 10869, 105, 108, 100, 101, 59, 1, 8770, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8652, 4, 2, 99, 105, 1656, 1660, 114, 59, 1, 8496, 109, 59, 1, 10867, 97, 59, 1, 919, 109, 108, 5, 203, 1, 59, 1675, 1, 203, 4, 2, 105, 112, 1683, 1689, 115, 116, 115, 59, 1, 8707, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 1, 8519, 4, 5, 99, 102, 105, 111, 115, 1713, 1717, 1722, 1762, 1791, 121, 59, 1, 1060, 114, 59, 3, 55349, 56585, 108, 108, 101, 100, 4, 2, 83, 86, 1732, 1745, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9724, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9642, 4, 3, 112, 114, 117, 1770, 1775, 1781, 102, 59, 3, 55349, 56637, 65, 108, 108, 59, 1, 8704, 114, 105, 101, 114, 116, 114, 102, 59, 1, 8497, 99, 114, 59, 1, 8497, 4, 12, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1822, 1827, 1834, 1848, 1855, 1877, 1882, 1887, 1890, 1896, 1978, 1984, 99, 121, 59, 1, 1027, 5, 62, 1, 59, 1832, 1, 62, 109, 109, 97, 4, 2, 59, 100, 1843, 1845, 1, 915, 59, 1, 988, 114, 101, 118, 101, 59, 1, 286, 4, 3, 101, 105, 121, 1863, 1869, 1874, 100, 105, 108, 59, 1, 290, 114, 99, 59, 1, 284, 59, 1, 1043, 111, 116, 59, 1, 288, 114, 59, 3, 55349, 56586, 59, 1, 8921, 112, 102, 59, 3, 55349, 56638, 101, 97, 116, 101, 114, 4, 6, 69, 70, 71, 76, 83, 84, 1915, 1933, 1944, 1953, 1959, 1971, 113, 117, 97, 108, 4, 2, 59, 76, 1925, 1927, 1, 8805, 101, 115, 115, 59, 1, 8923, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8807, 114, 101, 97, 116, 101, 114, 59, 1, 10914, 101, 115, 115, 59, 1, 8823, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10878, 105, 108, 100, 101, 59, 1, 8819, 99, 114, 59, 3, 55349, 56482, 59, 1, 8811, 4, 8, 65, 97, 99, 102, 105, 111, 115, 117, 2005, 2012, 2026, 2032, 2036, 2049, 2073, 2089, 82, 68, 99, 121, 59, 1, 1066, 4, 2, 99, 116, 2018, 2023, 101, 107, 59, 1, 711, 59, 1, 94, 105, 114, 99, 59, 1, 292, 114, 59, 1, 8460, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 1, 8459, 4, 2, 112, 114, 2055, 2059, 102, 59, 1, 8461, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 1, 9472, 4, 2, 99, 116, 2079, 2083, 114, 59, 1, 8459, 114, 111, 107, 59, 1, 294, 109, 112, 4, 2, 68, 69, 2097, 2107, 111, 119, 110, 72, 117, 109, 112, 59, 1, 8782, 113, 117, 97, 108, 59, 1, 8783, 4, 14, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 2144, 2149, 2155, 2160, 2171, 2189, 2194, 2198, 2209, 2245, 2307, 2329, 2334, 2341, 99, 121, 59, 1, 1045, 108, 105, 103, 59, 1, 306, 99, 121, 59, 1, 1025, 99, 117, 116, 101, 5, 205, 1, 59, 2169, 1, 205, 4, 2, 105, 121, 2177, 2186, 114, 99, 5, 206, 1, 59, 2184, 1, 206, 59, 1, 1048, 111, 116, 59, 1, 304, 114, 59, 1, 8465, 114, 97, 118, 101, 5, 204, 1, 59, 2207, 1, 204, 4, 3, 59, 97, 112, 2217, 2219, 2238, 1, 8465, 4, 2, 99, 103, 2225, 2229, 114, 59, 1, 298, 105, 110, 97, 114, 121, 73, 59, 1, 8520, 108, 105, 101, 115, 59, 1, 8658, 4, 2, 116, 118, 2251, 2281, 4, 2, 59, 101, 2257, 2259, 1, 8748, 4, 2, 103, 114, 2265, 2271, 114, 97, 108, 59, 1, 8747, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8898, 105, 115, 105, 98, 108, 101, 4, 2, 67, 84, 2293, 2300, 111, 109, 109, 97, 59, 1, 8291, 105, 109, 101, 115, 59, 1, 8290, 4, 3, 103, 112, 116, 2315, 2320, 2325, 111, 110, 59, 1, 302, 102, 59, 3, 55349, 56640, 97, 59, 1, 921, 99, 114, 59, 1, 8464, 105, 108, 100, 101, 59, 1, 296, 4, 2, 107, 109, 2347, 2352, 99, 121, 59, 1, 1030, 108, 5, 207, 1, 59, 2358, 1, 207, 4, 5, 99, 102, 111, 115, 117, 2372, 2386, 2391, 2397, 2414, 4, 2, 105, 121, 2378, 2383, 114, 99, 59, 1, 308, 59, 1, 1049, 114, 59, 3, 55349, 56589, 112, 102, 59, 3, 55349, 56641, 4, 2, 99, 101, 2403, 2408, 114, 59, 3, 55349, 56485, 114, 99, 121, 59, 1, 1032, 107, 99, 121, 59, 1, 1028, 4, 7, 72, 74, 97, 99, 102, 111, 115, 2436, 2441, 2446, 2452, 2467, 2472, 2478, 99, 121, 59, 1, 1061, 99, 121, 59, 1, 1036, 112, 112, 97, 59, 1, 922, 4, 2, 101, 121, 2458, 2464, 100, 105, 108, 59, 1, 310, 59, 1, 1050, 114, 59, 3, 55349, 56590, 112, 102, 59, 3, 55349, 56642, 99, 114, 59, 3, 55349, 56486, 4, 11, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2508, 2513, 2520, 2562, 2585, 2981, 2986, 3004, 3011, 3146, 3167, 99, 121, 59, 1, 1033, 5, 60, 1, 59, 2518, 1, 60, 4, 5, 99, 109, 110, 112, 114, 2532, 2538, 2544, 2548, 2558, 117, 116, 101, 59, 1, 313, 98, 100, 97, 59, 1, 923, 103, 59, 1, 10218, 108, 97, 99, 101, 116, 114, 102, 59, 1, 8466, 114, 59, 1, 8606, 4, 3, 97, 101, 121, 2570, 2576, 2582, 114, 111, 110, 59, 1, 317, 100, 105, 108, 59, 1, 315, 59, 1, 1051, 4, 2, 102, 115, 2591, 2907, 116, 4, 10, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2614, 2663, 2672, 2728, 2735, 2760, 2820, 2870, 2888, 2895, 4, 2, 110, 114, 2620, 2633, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10216, 114, 111, 119, 4, 3, 59, 66, 82, 2644, 2646, 2651, 1, 8592, 97, 114, 59, 1, 8676, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8646, 101, 105, 108, 105, 110, 103, 59, 1, 8968, 111, 4, 2, 117, 119, 2679, 2692, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10214, 110, 4, 2, 84, 86, 2699, 2710, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10593, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2721, 2723, 1, 8643, 97, 114, 59, 1, 10585, 108, 111, 111, 114, 59, 1, 8970, 105, 103, 104, 116, 4, 2, 65, 86, 2745, 2752, 114, 114, 111, 119, 59, 1, 8596, 101, 99, 116, 111, 114, 59, 1, 10574, 4, 2, 101, 114, 2766, 2792, 101, 4, 3, 59, 65, 86, 2775, 2777, 2784, 1, 8867, 114, 114, 111, 119, 59, 1, 8612, 101, 99, 116, 111, 114, 59, 1, 10586, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 2806, 2808, 2813, 1, 8882, 97, 114, 59, 1, 10703, 113, 117, 97, 108, 59, 1, 8884, 112, 4, 3, 68, 84, 86, 2829, 2841, 2852, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10577, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10592, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2863, 2865, 1, 8639, 97, 114, 59, 1, 10584, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2881, 2883, 1, 8636, 97, 114, 59, 1, 10578, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8660, 115, 4, 6, 69, 70, 71, 76, 83, 84, 2922, 2936, 2947, 2956, 2962, 2974, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8922, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8806, 114, 101, 97, 116, 101, 114, 59, 1, 8822, 101, 115, 115, 59, 1, 10913, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10877, 105, 108, 100, 101, 59, 1, 8818, 114, 59, 3, 55349, 56591, 4, 2, 59, 101, 2992, 2994, 1, 8920, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8666, 105, 100, 111, 116, 59, 1, 319, 4, 3, 110, 112, 119, 3019, 3110, 3115, 103, 4, 4, 76, 82, 108, 114, 3030, 3058, 3070, 3098, 101, 102, 116, 4, 2, 65, 82, 3039, 3046, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10231, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10230, 101, 102, 116, 4, 2, 97, 114, 3079, 3086, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10233, 102, 59, 3, 55349, 56643, 101, 114, 4, 2, 76, 82, 3123, 3134, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8601, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8600, 4, 3, 99, 104, 116, 3154, 3158, 3161, 114, 59, 1, 8466, 59, 1, 8624, 114, 111, 107, 59, 1, 321, 59, 1, 8810, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 3188, 3192, 3196, 3222, 3227, 3237, 3243, 3248, 112, 59, 1, 10501, 121, 59, 1, 1052, 4, 2, 100, 108, 3202, 3213, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8287, 108, 105, 110, 116, 114, 102, 59, 1, 8499, 114, 59, 3, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 1, 8723, 112, 102, 59, 3, 55349, 56644, 99, 114, 59, 1, 8499, 59, 1, 924, 4, 9, 74, 97, 99, 101, 102, 111, 115, 116, 117, 3271, 3276, 3283, 3306, 3422, 3427, 4120, 4126, 4137, 99, 121, 59, 1, 1034, 99, 117, 116, 101, 59, 1, 323, 4, 3, 97, 101, 121, 3291, 3297, 3303, 114, 111, 110, 59, 1, 327, 100, 105, 108, 59, 1, 325, 59, 1, 1053, 4, 3, 103, 115, 119, 3314, 3380, 3415, 97, 116, 105, 118, 101, 4, 3, 77, 84, 86, 3327, 3340, 3365, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8203, 104, 105, 4, 2, 99, 110, 3348, 3357, 107, 83, 112, 97, 99, 101, 59, 1, 8203, 83, 112, 97, 99, 101, 59, 1, 8203, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8203, 116, 101, 100, 4, 2, 71, 76, 3389, 3405, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8811, 101, 115, 115, 76, 101, 115, 115, 59, 1, 8810, 76, 105, 110, 101, 59, 1, 10, 114, 59, 3, 55349, 56593, 4, 4, 66, 110, 112, 116, 3437, 3444, 3460, 3464, 114, 101, 97, 107, 59, 1, 8288, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 1, 160, 102, 59, 1, 8469, 4, 13, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 3492, 3494, 3517, 3536, 3578, 3657, 3685, 3784, 3823, 3860, 3915, 4066, 4107, 1, 10988, 4, 2, 111, 117, 3500, 3510, 110, 103, 114, 117, 101, 110, 116, 59, 1, 8802, 112, 67, 97, 112, 59, 1, 8813, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8742, 4, 3, 108, 113, 120, 3544, 3552, 3571, 101, 109, 101, 110, 116, 59, 1, 8713, 117, 97, 108, 4, 2, 59, 84, 3561, 3563, 1, 8800, 105, 108, 100, 101, 59, 3, 8770, 824, 105, 115, 116, 115, 59, 1, 8708, 114, 101, 97, 116, 101, 114, 4, 7, 59, 69, 70, 71, 76, 83, 84, 3600, 3602, 3609, 3621, 3631, 3637, 3650, 1, 8815, 113, 117, 97, 108, 59, 1, 8817, 117, 108, 108, 69, 113, 117, 97, 108, 59, 3, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 3, 8811, 824, 101, 115, 115, 59, 1, 8825, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10878, 824, 105, 108, 100, 101, 59, 1, 8821, 117, 109, 112, 4, 2, 68, 69, 3666, 3677, 111, 119, 110, 72, 117, 109, 112, 59, 3, 8782, 824, 113, 117, 97, 108, 59, 3, 8783, 824, 101, 4, 2, 102, 115, 3692, 3724, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3709, 3711, 3717, 1, 8938, 97, 114, 59, 3, 10703, 824, 113, 117, 97, 108, 59, 1, 8940, 115, 4, 6, 59, 69, 71, 76, 83, 84, 3739, 3741, 3748, 3757, 3764, 3777, 1, 8814, 113, 117, 97, 108, 59, 1, 8816, 114, 101, 97, 116, 101, 114, 59, 1, 8824, 101, 115, 115, 59, 3, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10877, 824, 105, 108, 100, 101, 59, 1, 8820, 101, 115, 116, 101, 100, 4, 2, 71, 76, 3795, 3812, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 3, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 3, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 4, 3, 59, 69, 83, 3838, 3840, 3848, 1, 8832, 113, 117, 97, 108, 59, 3, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8928, 4, 2, 101, 105, 3866, 3881, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 1, 8716, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3900, 3902, 3908, 1, 8939, 97, 114, 59, 3, 10704, 824, 113, 117, 97, 108, 59, 1, 8941, 4, 2, 113, 117, 3921, 3973, 117, 97, 114, 101, 83, 117, 4, 2, 98, 112, 3933, 3952, 115, 101, 116, 4, 2, 59, 69, 3942, 3945, 3, 8847, 824, 113, 117, 97, 108, 59, 1, 8930, 101, 114, 115, 101, 116, 4, 2, 59, 69, 3963, 3966, 3, 8848, 824, 113, 117, 97, 108, 59, 1, 8931, 4, 3, 98, 99, 112, 3981, 4e3, 4045, 115, 101, 116, 4, 2, 59, 69, 3990, 3993, 3, 8834, 8402, 113, 117, 97, 108, 59, 1, 8840, 99, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 4015, 4017, 4025, 4037, 1, 8833, 113, 117, 97, 108, 59, 3, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8929, 105, 108, 100, 101, 59, 3, 8831, 824, 101, 114, 115, 101, 116, 4, 2, 59, 69, 4056, 4059, 3, 8835, 8402, 113, 117, 97, 108, 59, 1, 8841, 105, 108, 100, 101, 4, 4, 59, 69, 70, 84, 4080, 4082, 4089, 4100, 1, 8769, 113, 117, 97, 108, 59, 1, 8772, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8775, 105, 108, 100, 101, 59, 1, 8777, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8740, 99, 114, 59, 3, 55349, 56489, 105, 108, 100, 101, 5, 209, 1, 59, 4135, 1, 209, 59, 1, 925, 4, 14, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 4170, 4176, 4187, 4205, 4212, 4217, 4228, 4253, 4259, 4292, 4295, 4316, 4337, 4346, 108, 105, 103, 59, 1, 338, 99, 117, 116, 101, 5, 211, 1, 59, 4185, 1, 211, 4, 2, 105, 121, 4193, 4202, 114, 99, 5, 212, 1, 59, 4200, 1, 212, 59, 1, 1054, 98, 108, 97, 99, 59, 1, 336, 114, 59, 3, 55349, 56594, 114, 97, 118, 101, 5, 210, 1, 59, 4226, 1, 210, 4, 3, 97, 101, 105, 4236, 4241, 4246, 99, 114, 59, 1, 332, 103, 97, 59, 1, 937, 99, 114, 111, 110, 59, 1, 927, 112, 102, 59, 3, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 4, 2, 68, 81, 4272, 4285, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8220, 117, 111, 116, 101, 59, 1, 8216, 59, 1, 10836, 4, 2, 99, 108, 4301, 4306, 114, 59, 3, 55349, 56490, 97, 115, 104, 5, 216, 1, 59, 4314, 1, 216, 105, 4, 2, 108, 109, 4323, 4332, 100, 101, 5, 213, 1, 59, 4330, 1, 213, 101, 115, 59, 1, 10807, 109, 108, 5, 214, 1, 59, 4344, 1, 214, 101, 114, 4, 2, 66, 80, 4354, 4380, 4, 2, 97, 114, 4360, 4364, 114, 59, 1, 8254, 97, 99, 4, 2, 101, 107, 4372, 4375, 59, 1, 9182, 101, 116, 59, 1, 9140, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9180, 4, 9, 97, 99, 102, 104, 105, 108, 111, 114, 115, 4413, 4422, 4426, 4431, 4435, 4438, 4448, 4471, 4561, 114, 116, 105, 97, 108, 68, 59, 1, 8706, 121, 59, 1, 1055, 114, 59, 3, 55349, 56595, 105, 59, 1, 934, 59, 1, 928, 117, 115, 77, 105, 110, 117, 115, 59, 1, 177, 4, 2, 105, 112, 4454, 4467, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59, 1, 8460, 102, 59, 1, 8473, 4, 4, 59, 101, 105, 111, 4481, 4483, 4526, 4531, 1, 10939, 99, 101, 100, 101, 115, 4, 4, 59, 69, 83, 84, 4498, 4500, 4507, 4519, 1, 8826, 113, 117, 97, 108, 59, 1, 10927, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8828, 105, 108, 100, 101, 59, 1, 8830, 109, 101, 59, 1, 8243, 4, 2, 100, 112, 4537, 4543, 117, 99, 116, 59, 1, 8719, 111, 114, 116, 105, 111, 110, 4, 2, 59, 97, 4555, 4557, 1, 8759, 108, 59, 1, 8733, 4, 2, 99, 105, 4567, 4572, 114, 59, 3, 55349, 56491, 59, 1, 936, 4, 4, 85, 102, 111, 115, 4585, 4594, 4599, 4604, 79, 84, 5, 34, 1, 59, 4592, 1, 34, 114, 59, 3, 55349, 56596, 112, 102, 59, 1, 8474, 99, 114, 59, 3, 55349, 56492, 4, 12, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 4636, 4642, 4650, 4681, 4704, 4763, 4767, 4771, 5047, 5069, 5081, 5094, 97, 114, 114, 59, 1, 10512, 71, 5, 174, 1, 59, 4648, 1, 174, 4, 3, 99, 110, 114, 4658, 4664, 4668, 117, 116, 101, 59, 1, 340, 103, 59, 1, 10219, 114, 4, 2, 59, 116, 4675, 4677, 1, 8608, 108, 59, 1, 10518, 4, 3, 97, 101, 121, 4689, 4695, 4701, 114, 111, 110, 59, 1, 344, 100, 105, 108, 59, 1, 342, 59, 1, 1056, 4, 2, 59, 118, 4710, 4712, 1, 8476, 101, 114, 115, 101, 4, 2, 69, 85, 4722, 4748, 4, 2, 108, 113, 4728, 4736, 101, 109, 101, 110, 116, 59, 1, 8715, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8651, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10607, 114, 59, 1, 8476, 111, 59, 1, 929, 103, 104, 116, 4, 8, 65, 67, 68, 70, 84, 85, 86, 97, 4792, 4840, 4849, 4905, 4912, 4972, 5022, 5040, 4, 2, 110, 114, 4798, 4811, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10217, 114, 111, 119, 4, 3, 59, 66, 76, 4822, 4824, 4829, 1, 8594, 97, 114, 59, 1, 8677, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8644, 101, 105, 108, 105, 110, 103, 59, 1, 8969, 111, 4, 2, 117, 119, 4856, 4869, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10215, 110, 4, 2, 84, 86, 4876, 4887, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10589, 101, 99, 116, 111, 114, 4, 2, 59, 66, 4898, 4900, 1, 8642, 97, 114, 59, 1, 10581, 108, 111, 111, 114, 59, 1, 8971, 4, 2, 101, 114, 4918, 4944, 101, 4, 3, 59, 65, 86, 4927, 4929, 4936, 1, 8866, 114, 114, 111, 119, 59, 1, 8614, 101, 99, 116, 111, 114, 59, 1, 10587, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 4958, 4960, 4965, 1, 8883, 97, 114, 59, 1, 10704, 113, 117, 97, 108, 59, 1, 8885, 112, 4, 3, 68, 84, 86, 4981, 4993, 5004, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10575, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10588, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5015, 5017, 1, 8638, 97, 114, 59, 1, 10580, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5033, 5035, 1, 8640, 97, 114, 59, 1, 10579, 114, 114, 111, 119, 59, 1, 8658, 4, 2, 112, 117, 5053, 5057, 102, 59, 1, 8477, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 1, 10608, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8667, 4, 2, 99, 104, 5087, 5091, 114, 59, 1, 8475, 59, 1, 8625, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 1, 10740, 4, 13, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 5134, 5150, 5157, 5164, 5198, 5203, 5259, 5265, 5277, 5283, 5374, 5380, 5385, 4, 2, 67, 99, 5140, 5146, 72, 99, 121, 59, 1, 1065, 121, 59, 1, 1064, 70, 84, 99, 121, 59, 1, 1068, 99, 117, 116, 101, 59, 1, 346, 4, 5, 59, 97, 101, 105, 121, 5176, 5178, 5184, 5190, 5195, 1, 10940, 114, 111, 110, 59, 1, 352, 100, 105, 108, 59, 1, 350, 114, 99, 59, 1, 348, 59, 1, 1057, 114, 59, 3, 55349, 56598, 111, 114, 116, 4, 4, 68, 76, 82, 85, 5216, 5227, 5238, 5250, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8595, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8592, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8594, 112, 65, 114, 114, 111, 119, 59, 1, 8593, 103, 109, 97, 59, 1, 931, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 1, 8728, 112, 102, 59, 3, 55349, 56650, 4, 2, 114, 117, 5289, 5293, 116, 59, 1, 8730, 97, 114, 101, 4, 4, 59, 73, 83, 85, 5306, 5308, 5322, 5367, 1, 9633, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8851, 117, 4, 2, 98, 112, 5329, 5347, 115, 101, 116, 4, 2, 59, 69, 5338, 5340, 1, 8847, 113, 117, 97, 108, 59, 1, 8849, 101, 114, 115, 101, 116, 4, 2, 59, 69, 5358, 5360, 1, 8848, 113, 117, 97, 108, 59, 1, 8850, 110, 105, 111, 110, 59, 1, 8852, 99, 114, 59, 3, 55349, 56494, 97, 114, 59, 1, 8902, 4, 4, 98, 99, 109, 112, 5395, 5420, 5475, 5478, 4, 2, 59, 115, 5401, 5403, 1, 8912, 101, 116, 4, 2, 59, 69, 5411, 5413, 1, 8912, 113, 117, 97, 108, 59, 1, 8838, 4, 2, 99, 104, 5426, 5468, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 5440, 5442, 5449, 5461, 1, 8827, 113, 117, 97, 108, 59, 1, 10928, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8829, 105, 108, 100, 101, 59, 1, 8831, 84, 104, 97, 116, 59, 1, 8715, 59, 1, 8721, 4, 3, 59, 101, 115, 5486, 5488, 5507, 1, 8913, 114, 115, 101, 116, 4, 2, 59, 69, 5498, 5500, 1, 8835, 113, 117, 97, 108, 59, 1, 8839, 101, 116, 59, 1, 8913, 4, 11, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 5536, 5546, 5552, 5567, 5579, 5602, 5607, 5655, 5695, 5701, 5711, 79, 82, 78, 5, 222, 1, 59, 5544, 1, 222, 65, 68, 69, 59, 1, 8482, 4, 2, 72, 99, 5558, 5563, 99, 121, 59, 1, 1035, 121, 59, 1, 1062, 4, 2, 98, 117, 5573, 5576, 59, 1, 9, 59, 1, 932, 4, 3, 97, 101, 121, 5587, 5593, 5599, 114, 111, 110, 59, 1, 356, 100, 105, 108, 59, 1, 354, 59, 1, 1058, 114, 59, 3, 55349, 56599, 4, 2, 101, 105, 5613, 5631, 4, 2, 114, 116, 5619, 5627, 101, 102, 111, 114, 101, 59, 1, 8756, 97, 59, 1, 920, 4, 2, 99, 110, 5637, 5647, 107, 83, 112, 97, 99, 101, 59, 3, 8287, 8202, 83, 112, 97, 99, 101, 59, 1, 8201, 108, 100, 101, 4, 4, 59, 69, 70, 84, 5668, 5670, 5677, 5688, 1, 8764, 113, 117, 97, 108, 59, 1, 8771, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8773, 105, 108, 100, 101, 59, 1, 8776, 112, 102, 59, 3, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 1, 8411, 4, 2, 99, 116, 5717, 5722, 114, 59, 3, 55349, 56495, 114, 111, 107, 59, 1, 358, 4, 14, 97, 98, 99, 100, 102, 103, 109, 110, 111, 112, 114, 115, 116, 117, 5758, 5789, 5805, 5823, 5830, 5835, 5846, 5852, 5921, 5937, 6089, 6095, 6101, 6108, 4, 2, 99, 114, 5764, 5774, 117, 116, 101, 5, 218, 1, 59, 5772, 1, 218, 114, 4, 2, 59, 111, 5781, 5783, 1, 8607, 99, 105, 114, 59, 1, 10569, 114, 4, 2, 99, 101, 5796, 5800, 121, 59, 1, 1038, 118, 101, 59, 1, 364, 4, 2, 105, 121, 5811, 5820, 114, 99, 5, 219, 1, 59, 5818, 1, 219, 59, 1, 1059, 98, 108, 97, 99, 59, 1, 368, 114, 59, 3, 55349, 56600, 114, 97, 118, 101, 5, 217, 1, 59, 5844, 1, 217, 97, 99, 114, 59, 1, 362, 4, 2, 100, 105, 5858, 5905, 101, 114, 4, 2, 66, 80, 5866, 5892, 4, 2, 97, 114, 5872, 5876, 114, 59, 1, 95, 97, 99, 4, 2, 101, 107, 5884, 5887, 59, 1, 9183, 101, 116, 59, 1, 9141, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9181, 111, 110, 4, 2, 59, 80, 5913, 5915, 1, 8899, 108, 117, 115, 59, 1, 8846, 4, 2, 103, 112, 5927, 5932, 111, 110, 59, 1, 370, 102, 59, 3, 55349, 56652, 4, 8, 65, 68, 69, 84, 97, 100, 112, 115, 5955, 5985, 5996, 6009, 6026, 6033, 6044, 6075, 114, 114, 111, 119, 4, 3, 59, 66, 68, 5967, 5969, 5974, 1, 8593, 97, 114, 59, 1, 10514, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8645, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8597, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10606, 101, 101, 4, 2, 59, 65, 6017, 6019, 1, 8869, 114, 114, 111, 119, 59, 1, 8613, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 4, 2, 76, 82, 6052, 6063, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8598, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8599, 105, 4, 2, 59, 108, 6082, 6084, 1, 978, 111, 110, 59, 1, 933, 105, 110, 103, 59, 1, 366, 99, 114, 59, 3, 55349, 56496, 105, 108, 100, 101, 59, 1, 360, 109, 108, 5, 220, 1, 59, 6115, 1, 220, 4, 9, 68, 98, 99, 100, 101, 102, 111, 115, 118, 6137, 6143, 6148, 6152, 6166, 6250, 6255, 6261, 6267, 97, 115, 104, 59, 1, 8875, 97, 114, 59, 1, 10987, 121, 59, 1, 1042, 97, 115, 104, 4, 2, 59, 108, 6161, 6163, 1, 8873, 59, 1, 10982, 4, 2, 101, 114, 6172, 6175, 59, 1, 8897, 4, 3, 98, 116, 121, 6183, 6188, 6238, 97, 114, 59, 1, 8214, 4, 2, 59, 105, 6194, 6196, 1, 8214, 99, 97, 108, 4, 4, 66, 76, 83, 84, 6209, 6214, 6220, 6231, 97, 114, 59, 1, 8739, 105, 110, 101, 59, 1, 124, 101, 112, 97, 114, 97, 116, 111, 114, 59, 1, 10072, 105, 108, 100, 101, 59, 1, 8768, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8202, 114, 59, 3, 55349, 56601, 112, 102, 59, 3, 55349, 56653, 99, 114, 59, 3, 55349, 56497, 100, 97, 115, 104, 59, 1, 8874, 4, 5, 99, 101, 102, 111, 115, 6286, 6292, 6298, 6303, 6309, 105, 114, 99, 59, 1, 372, 100, 103, 101, 59, 1, 8896, 114, 59, 3, 55349, 56602, 112, 102, 59, 3, 55349, 56654, 99, 114, 59, 3, 55349, 56498, 4, 4, 102, 105, 111, 115, 6325, 6330, 6333, 6339, 114, 59, 3, 55349, 56603, 59, 1, 926, 112, 102, 59, 3, 55349, 56655, 99, 114, 59, 3, 55349, 56499, 4, 9, 65, 73, 85, 97, 99, 102, 111, 115, 117, 6365, 6370, 6375, 6380, 6391, 6405, 6410, 6416, 6422, 99, 121, 59, 1, 1071, 99, 121, 59, 1, 1031, 99, 121, 59, 1, 1070, 99, 117, 116, 101, 5, 221, 1, 59, 6389, 1, 221, 4, 2, 105, 121, 6397, 6402, 114, 99, 59, 1, 374, 59, 1, 1067, 114, 59, 3, 55349, 56604, 112, 102, 59, 3, 55349, 56656, 99, 114, 59, 3, 55349, 56500, 109, 108, 59, 1, 376, 4, 8, 72, 97, 99, 100, 101, 102, 111, 115, 6445, 6450, 6457, 6472, 6477, 6501, 6505, 6510, 99, 121, 59, 1, 1046, 99, 117, 116, 101, 59, 1, 377, 4, 2, 97, 121, 6463, 6469, 114, 111, 110, 59, 1, 381, 59, 1, 1047, 111, 116, 59, 1, 379, 4, 2, 114, 116, 6483, 6497, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59, 1, 8203, 97, 59, 1, 918, 114, 59, 1, 8488, 112, 102, 59, 1, 8484, 99, 114, 59, 3, 55349, 56501, 4, 16, 97, 98, 99, 101, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 119, 6550, 6561, 6568, 6612, 6622, 6634, 6645, 6672, 6699, 6854, 6870, 6923, 6933, 6963, 6974, 6983, 99, 117, 116, 101, 5, 225, 1, 59, 6559, 1, 225, 114, 101, 118, 101, 59, 1, 259, 4, 6, 59, 69, 100, 105, 117, 121, 6582, 6584, 6588, 6591, 6600, 6609, 1, 8766, 59, 3, 8766, 819, 59, 1, 8767, 114, 99, 5, 226, 1, 59, 6598, 1, 226, 116, 101, 5, 180, 1, 59, 6607, 1, 180, 59, 1, 1072, 108, 105, 103, 5, 230, 1, 59, 6620, 1, 230, 4, 2, 59, 114, 6628, 6630, 1, 8289, 59, 3, 55349, 56606, 114, 97, 118, 101, 5, 224, 1, 59, 6643, 1, 224, 4, 2, 101, 112, 6651, 6667, 4, 2, 102, 112, 6657, 6663, 115, 121, 109, 59, 1, 8501, 104, 59, 1, 8501, 104, 97, 59, 1, 945, 4, 2, 97, 112, 6678, 6692, 4, 2, 99, 108, 6684, 6688, 114, 59, 1, 257, 103, 59, 1, 10815, 5, 38, 1, 59, 6697, 1, 38, 4, 2, 100, 103, 6705, 6737, 4, 5, 59, 97, 100, 115, 118, 6717, 6719, 6724, 6727, 6734, 1, 8743, 110, 100, 59, 1, 10837, 59, 1, 10844, 108, 111, 112, 101, 59, 1, 10840, 59, 1, 10842, 4, 7, 59, 101, 108, 109, 114, 115, 122, 6753, 6755, 6758, 6762, 6814, 6835, 6848, 1, 8736, 59, 1, 10660, 101, 59, 1, 8736, 115, 100, 4, 2, 59, 97, 6770, 6772, 1, 8737, 4, 8, 97, 98, 99, 100, 101, 102, 103, 104, 6790, 6793, 6796, 6799, 6802, 6805, 6808, 6811, 59, 1, 10664, 59, 1, 10665, 59, 1, 10666, 59, 1, 10667, 59, 1, 10668, 59, 1, 10669, 59, 1, 10670, 59, 1, 10671, 116, 4, 2, 59, 118, 6821, 6823, 1, 8735, 98, 4, 2, 59, 100, 6830, 6832, 1, 8894, 59, 1, 10653, 4, 2, 112, 116, 6841, 6845, 104, 59, 1, 8738, 59, 1, 197, 97, 114, 114, 59, 1, 9084, 4, 2, 103, 112, 6860, 6865, 111, 110, 59, 1, 261, 102, 59, 3, 55349, 56658, 4, 7, 59, 69, 97, 101, 105, 111, 112, 6886, 6888, 6891, 6897, 6900, 6904, 6908, 1, 8776, 59, 1, 10864, 99, 105, 114, 59, 1, 10863, 59, 1, 8778, 100, 59, 1, 8779, 115, 59, 1, 39, 114, 111, 120, 4, 2, 59, 101, 6917, 6919, 1, 8776, 113, 59, 1, 8778, 105, 110, 103, 5, 229, 1, 59, 6931, 1, 229, 4, 3, 99, 116, 121, 6941, 6946, 6949, 114, 59, 3, 55349, 56502, 59, 1, 42, 109, 112, 4, 2, 59, 101, 6957, 6959, 1, 8776, 113, 59, 1, 8781, 105, 108, 100, 101, 5, 227, 1, 59, 6972, 1, 227, 109, 108, 5, 228, 1, 59, 6981, 1, 228, 4, 2, 99, 105, 6989, 6997, 111, 110, 105, 110, 116, 59, 1, 8755, 110, 116, 59, 1, 10769, 4, 16, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 7036, 7041, 7119, 7135, 7149, 7155, 7219, 7224, 7347, 7354, 7463, 7489, 7786, 7793, 7814, 7866, 111, 116, 59, 1, 10989, 4, 2, 99, 114, 7047, 7094, 107, 4, 4, 99, 101, 112, 115, 7058, 7064, 7073, 7080, 111, 110, 103, 59, 1, 8780, 112, 115, 105, 108, 111, 110, 59, 1, 1014, 114, 105, 109, 101, 59, 1, 8245, 105, 109, 4, 2, 59, 101, 7088, 7090, 1, 8765, 113, 59, 1, 8909, 4, 2, 118, 119, 7100, 7105, 101, 101, 59, 1, 8893, 101, 100, 4, 2, 59, 103, 7113, 7115, 1, 8965, 101, 59, 1, 8965, 114, 107, 4, 2, 59, 116, 7127, 7129, 1, 9141, 98, 114, 107, 59, 1, 9142, 4, 2, 111, 121, 7141, 7146, 110, 103, 59, 1, 8780, 59, 1, 1073, 113, 117, 111, 59, 1, 8222, 4, 5, 99, 109, 112, 114, 116, 7167, 7181, 7188, 7193, 7199, 97, 117, 115, 4, 2, 59, 101, 7176, 7178, 1, 8757, 59, 1, 8757, 112, 116, 121, 118, 59, 1, 10672, 115, 105, 59, 1, 1014, 110, 111, 117, 59, 1, 8492, 4, 3, 97, 104, 119, 7207, 7210, 7213, 59, 1, 946, 59, 1, 8502, 101, 101, 110, 59, 1, 8812, 114, 59, 3, 55349, 56607, 103, 4, 7, 99, 111, 115, 116, 117, 118, 119, 7241, 7262, 7288, 7305, 7328, 7335, 7340, 4, 3, 97, 105, 117, 7249, 7253, 7258, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 4, 3, 100, 112, 116, 7270, 7275, 7281, 111, 116, 59, 1, 10752, 108, 117, 115, 59, 1, 10753, 105, 109, 101, 115, 59, 1, 10754, 4, 2, 113, 116, 7294, 7300, 99, 117, 112, 59, 1, 10758, 97, 114, 59, 1, 9733, 114, 105, 97, 110, 103, 108, 101, 4, 2, 100, 117, 7318, 7324, 111, 119, 110, 59, 1, 9661, 112, 59, 1, 9651, 112, 108, 117, 115, 59, 1, 10756, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 97, 114, 111, 119, 59, 1, 10509, 4, 3, 97, 107, 111, 7362, 7436, 7458, 4, 2, 99, 110, 7368, 7432, 107, 4, 3, 108, 115, 116, 7377, 7386, 7394, 111, 122, 101, 110, 103, 101, 59, 1, 10731, 113, 117, 97, 114, 101, 59, 1, 9642, 114, 105, 97, 110, 103, 108, 101, 4, 4, 59, 100, 108, 114, 7411, 7413, 7419, 7425, 1, 9652, 111, 119, 110, 59, 1, 9662, 101, 102, 116, 59, 1, 9666, 105, 103, 104, 116, 59, 1, 9656, 107, 59, 1, 9251, 4, 2, 49, 51, 7442, 7454, 4, 2, 50, 52, 7448, 7451, 59, 1, 9618, 59, 1, 9617, 52, 59, 1, 9619, 99, 107, 59, 1, 9608, 4, 2, 101, 111, 7469, 7485, 4, 2, 59, 113, 7475, 7478, 3, 61, 8421, 117, 105, 118, 59, 3, 8801, 8421, 116, 59, 1, 8976, 4, 4, 112, 116, 119, 120, 7499, 7504, 7517, 7523, 102, 59, 3, 55349, 56659, 4, 2, 59, 116, 7510, 7512, 1, 8869, 111, 109, 59, 1, 8869, 116, 105, 101, 59, 1, 8904, 4, 12, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 7549, 7571, 7597, 7619, 7655, 7660, 7682, 7708, 7715, 7721, 7728, 7750, 4, 4, 76, 82, 108, 114, 7559, 7562, 7565, 7568, 59, 1, 9559, 59, 1, 9556, 59, 1, 9558, 59, 1, 9555, 4, 5, 59, 68, 85, 100, 117, 7583, 7585, 7588, 7591, 7594, 1, 9552, 59, 1, 9574, 59, 1, 9577, 59, 1, 9572, 59, 1, 9575, 4, 4, 76, 82, 108, 114, 7607, 7610, 7613, 7616, 59, 1, 9565, 59, 1, 9562, 59, 1, 9564, 59, 1, 9561, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7635, 7637, 7640, 7643, 7646, 7649, 7652, 1, 9553, 59, 1, 9580, 59, 1, 9571, 59, 1, 9568, 59, 1, 9579, 59, 1, 9570, 59, 1, 9567, 111, 120, 59, 1, 10697, 4, 4, 76, 82, 108, 114, 7670, 7673, 7676, 7679, 59, 1, 9557, 59, 1, 9554, 59, 1, 9488, 59, 1, 9484, 4, 5, 59, 68, 85, 100, 117, 7694, 7696, 7699, 7702, 7705, 1, 9472, 59, 1, 9573, 59, 1, 9576, 59, 1, 9516, 59, 1, 9524, 105, 110, 117, 115, 59, 1, 8863, 108, 117, 115, 59, 1, 8862, 105, 109, 101, 115, 59, 1, 8864, 4, 4, 76, 82, 108, 114, 7738, 7741, 7744, 7747, 59, 1, 9563, 59, 1, 9560, 59, 1, 9496, 59, 1, 9492, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7766, 7768, 7771, 7774, 7777, 7780, 7783, 1, 9474, 59, 1, 9578, 59, 1, 9569, 59, 1, 9566, 59, 1, 9532, 59, 1, 9508, 59, 1, 9500, 114, 105, 109, 101, 59, 1, 8245, 4, 2, 101, 118, 7799, 7804, 118, 101, 59, 1, 728, 98, 97, 114, 5, 166, 1, 59, 7812, 1, 166, 4, 4, 99, 101, 105, 111, 7824, 7829, 7834, 7846, 114, 59, 3, 55349, 56503, 109, 105, 59, 1, 8271, 109, 4, 2, 59, 101, 7841, 7843, 1, 8765, 59, 1, 8909, 108, 4, 3, 59, 98, 104, 7855, 7857, 7860, 1, 92, 59, 1, 10693, 115, 117, 98, 59, 1, 10184, 4, 2, 108, 109, 7872, 7885, 108, 4, 2, 59, 101, 7879, 7881, 1, 8226, 116, 59, 1, 8226, 112, 4, 3, 59, 69, 101, 7894, 7896, 7899, 1, 8782, 59, 1, 10926, 4, 2, 59, 113, 7905, 7907, 1, 8783, 59, 1, 8783, 4, 15, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 116, 117, 119, 121, 7942, 8021, 8075, 8080, 8121, 8126, 8157, 8279, 8295, 8430, 8446, 8485, 8491, 8707, 8726, 4, 3, 99, 112, 114, 7950, 7956, 8007, 117, 116, 101, 59, 1, 263, 4, 6, 59, 97, 98, 99, 100, 115, 7970, 7972, 7977, 7984, 7998, 8003, 1, 8745, 110, 100, 59, 1, 10820, 114, 99, 117, 112, 59, 1, 10825, 4, 2, 97, 117, 7990, 7994, 112, 59, 1, 10827, 112, 59, 1, 10823, 111, 116, 59, 1, 10816, 59, 3, 8745, 65024, 4, 2, 101, 111, 8013, 8017, 116, 59, 1, 8257, 110, 59, 1, 711, 4, 4, 97, 101, 105, 117, 8031, 8046, 8056, 8061, 4, 2, 112, 114, 8037, 8041, 115, 59, 1, 10829, 111, 110, 59, 1, 269, 100, 105, 108, 5, 231, 1, 59, 8054, 1, 231, 114, 99, 59, 1, 265, 112, 115, 4, 2, 59, 115, 8069, 8071, 1, 10828, 109, 59, 1, 10832, 111, 116, 59, 1, 267, 4, 3, 100, 109, 110, 8088, 8097, 8104, 105, 108, 5, 184, 1, 59, 8095, 1, 184, 112, 116, 121, 118, 59, 1, 10674, 116, 5, 162, 2, 59, 101, 8112, 8114, 1, 162, 114, 100, 111, 116, 59, 1, 183, 114, 59, 3, 55349, 56608, 4, 3, 99, 101, 105, 8134, 8138, 8154, 121, 59, 1, 1095, 99, 107, 4, 2, 59, 109, 8146, 8148, 1, 10003, 97, 114, 107, 59, 1, 10003, 59, 1, 967, 114, 4, 7, 59, 69, 99, 101, 102, 109, 115, 8174, 8176, 8179, 8258, 8261, 8268, 8273, 1, 9675, 59, 1, 10691, 4, 3, 59, 101, 108, 8187, 8189, 8193, 1, 710, 113, 59, 1, 8791, 101, 4, 2, 97, 100, 8200, 8223, 114, 114, 111, 119, 4, 2, 108, 114, 8210, 8216, 101, 102, 116, 59, 1, 8634, 105, 103, 104, 116, 59, 1, 8635, 4, 5, 82, 83, 97, 99, 100, 8235, 8238, 8241, 8246, 8252, 59, 1, 174, 59, 1, 9416, 115, 116, 59, 1, 8859, 105, 114, 99, 59, 1, 8858, 97, 115, 104, 59, 1, 8861, 59, 1, 8791, 110, 105, 110, 116, 59, 1, 10768, 105, 100, 59, 1, 10991, 99, 105, 114, 59, 1, 10690, 117, 98, 115, 4, 2, 59, 117, 8288, 8290, 1, 9827, 105, 116, 59, 1, 9827, 4, 4, 108, 109, 110, 112, 8305, 8326, 8376, 8400, 111, 110, 4, 2, 59, 101, 8313, 8315, 1, 58, 4, 2, 59, 113, 8321, 8323, 1, 8788, 59, 1, 8788, 4, 2, 109, 112, 8332, 8344, 97, 4, 2, 59, 116, 8339, 8341, 1, 44, 59, 1, 64, 4, 3, 59, 102, 108, 8352, 8354, 8358, 1, 8705, 110, 59, 1, 8728, 101, 4, 2, 109, 120, 8365, 8371, 101, 110, 116, 59, 1, 8705, 101, 115, 59, 1, 8450, 4, 2, 103, 105, 8382, 8395, 4, 2, 59, 100, 8388, 8390, 1, 8773, 111, 116, 59, 1, 10861, 110, 116, 59, 1, 8750, 4, 3, 102, 114, 121, 8408, 8412, 8417, 59, 3, 55349, 56660, 111, 100, 59, 1, 8720, 5, 169, 2, 59, 115, 8424, 8426, 1, 169, 114, 59, 1, 8471, 4, 2, 97, 111, 8436, 8441, 114, 114, 59, 1, 8629, 115, 115, 59, 1, 10007, 4, 2, 99, 117, 8452, 8457, 114, 59, 3, 55349, 56504, 4, 2, 98, 112, 8463, 8474, 4, 2, 59, 101, 8469, 8471, 1, 10959, 59, 1, 10961, 4, 2, 59, 101, 8480, 8482, 1, 10960, 59, 1, 10962, 100, 111, 116, 59, 1, 8943, 4, 7, 100, 101, 108, 112, 114, 118, 119, 8507, 8522, 8536, 8550, 8600, 8697, 8702, 97, 114, 114, 4, 2, 108, 114, 8516, 8519, 59, 1, 10552, 59, 1, 10549, 4, 2, 112, 115, 8528, 8532, 114, 59, 1, 8926, 99, 59, 1, 8927, 97, 114, 114, 4, 2, 59, 112, 8545, 8547, 1, 8630, 59, 1, 10557, 4, 6, 59, 98, 99, 100, 111, 115, 8564, 8566, 8573, 8587, 8592, 8596, 1, 8746, 114, 99, 97, 112, 59, 1, 10824, 4, 2, 97, 117, 8579, 8583, 112, 59, 1, 10822, 112, 59, 1, 10826, 111, 116, 59, 1, 8845, 114, 59, 1, 10821, 59, 3, 8746, 65024, 4, 4, 97, 108, 114, 118, 8610, 8623, 8663, 8672, 114, 114, 4, 2, 59, 109, 8618, 8620, 1, 8631, 59, 1, 10556, 121, 4, 3, 101, 118, 119, 8632, 8651, 8656, 113, 4, 2, 112, 115, 8639, 8645, 114, 101, 99, 59, 1, 8926, 117, 99, 99, 59, 1, 8927, 101, 101, 59, 1, 8910, 101, 100, 103, 101, 59, 1, 8911, 101, 110, 5, 164, 1, 59, 8670, 1, 164, 101, 97, 114, 114, 111, 119, 4, 2, 108, 114, 8684, 8690, 101, 102, 116, 59, 1, 8630, 105, 103, 104, 116, 59, 1, 8631, 101, 101, 59, 1, 8910, 101, 100, 59, 1, 8911, 4, 2, 99, 105, 8713, 8721, 111, 110, 105, 110, 116, 59, 1, 8754, 110, 116, 59, 1, 8753, 108, 99, 116, 121, 59, 1, 9005, 4, 19, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 8773, 8778, 8783, 8821, 8839, 8854, 8887, 8914, 8930, 8944, 9036, 9041, 9058, 9197, 9227, 9258, 9281, 9297, 9305, 114, 114, 59, 1, 8659, 97, 114, 59, 1, 10597, 4, 4, 103, 108, 114, 115, 8793, 8799, 8805, 8809, 103, 101, 114, 59, 1, 8224, 101, 116, 104, 59, 1, 8504, 114, 59, 1, 8595, 104, 4, 2, 59, 118, 8816, 8818, 1, 8208, 59, 1, 8867, 4, 2, 107, 108, 8827, 8834, 97, 114, 111, 119, 59, 1, 10511, 97, 99, 59, 1, 733, 4, 2, 97, 121, 8845, 8851, 114, 111, 110, 59, 1, 271, 59, 1, 1076, 4, 3, 59, 97, 111, 8862, 8864, 8880, 1, 8518, 4, 2, 103, 114, 8870, 8876, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8650, 116, 115, 101, 113, 59, 1, 10871, 4, 3, 103, 108, 109, 8895, 8902, 8907, 5, 176, 1, 59, 8900, 1, 176, 116, 97, 59, 1, 948, 112, 116, 121, 118, 59, 1, 10673, 4, 2, 105, 114, 8920, 8926, 115, 104, 116, 59, 1, 10623, 59, 3, 55349, 56609, 97, 114, 4, 2, 108, 114, 8938, 8941, 59, 1, 8643, 59, 1, 8642, 4, 5, 97, 101, 103, 115, 118, 8956, 8986, 8989, 8996, 9001, 109, 4, 3, 59, 111, 115, 8965, 8967, 8983, 1, 8900, 110, 100, 4, 2, 59, 115, 8975, 8977, 1, 8900, 117, 105, 116, 59, 1, 9830, 59, 1, 9830, 59, 1, 168, 97, 109, 109, 97, 59, 1, 989, 105, 110, 59, 1, 8946, 4, 3, 59, 105, 111, 9009, 9011, 9031, 1, 247, 100, 101, 5, 247, 2, 59, 111, 9020, 9022, 1, 247, 110, 116, 105, 109, 101, 115, 59, 1, 8903, 110, 120, 59, 1, 8903, 99, 121, 59, 1, 1106, 99, 4, 2, 111, 114, 9048, 9053, 114, 110, 59, 1, 8990, 111, 112, 59, 1, 8973, 4, 5, 108, 112, 116, 117, 119, 9070, 9076, 9081, 9130, 9144, 108, 97, 114, 59, 1, 36, 102, 59, 3, 55349, 56661, 4, 5, 59, 101, 109, 112, 115, 9093, 9095, 9109, 9116, 9122, 1, 729, 113, 4, 2, 59, 100, 9102, 9104, 1, 8784, 111, 116, 59, 1, 8785, 105, 110, 117, 115, 59, 1, 8760, 108, 117, 115, 59, 1, 8724, 113, 117, 97, 114, 101, 59, 1, 8865, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101, 59, 1, 8966, 110, 4, 3, 97, 100, 104, 9153, 9160, 9172, 114, 114, 111, 119, 59, 1, 8595, 111, 119, 110, 97, 114, 114, 111, 119, 115, 59, 1, 8650, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 9184, 9190, 101, 102, 116, 59, 1, 8643, 105, 103, 104, 116, 59, 1, 8642, 4, 2, 98, 99, 9203, 9211, 107, 97, 114, 111, 119, 59, 1, 10512, 4, 2, 111, 114, 9217, 9222, 114, 110, 59, 1, 8991, 111, 112, 59, 1, 8972, 4, 3, 99, 111, 116, 9235, 9248, 9252, 4, 2, 114, 121, 9241, 9245, 59, 3, 55349, 56505, 59, 1, 1109, 108, 59, 1, 10742, 114, 111, 107, 59, 1, 273, 4, 2, 100, 114, 9264, 9269, 111, 116, 59, 1, 8945, 105, 4, 2, 59, 102, 9276, 9278, 1, 9663, 59, 1, 9662, 4, 2, 97, 104, 9287, 9292, 114, 114, 59, 1, 8693, 97, 114, 59, 1, 10607, 97, 110, 103, 108, 101, 59, 1, 10662, 4, 2, 99, 105, 9311, 9315, 121, 59, 1, 1119, 103, 114, 97, 114, 114, 59, 1, 10239, 4, 18, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 9361, 9376, 9398, 9439, 9444, 9447, 9462, 9495, 9531, 9585, 9598, 9614, 9659, 9755, 9771, 9792, 9808, 9826, 4, 2, 68, 111, 9367, 9372, 111, 116, 59, 1, 10871, 116, 59, 1, 8785, 4, 2, 99, 115, 9382, 9392, 117, 116, 101, 5, 233, 1, 59, 9390, 1, 233, 116, 101, 114, 59, 1, 10862, 4, 4, 97, 105, 111, 121, 9408, 9414, 9430, 9436, 114, 111, 110, 59, 1, 283, 114, 4, 2, 59, 99, 9421, 9423, 1, 8790, 5, 234, 1, 59, 9428, 1, 234, 108, 111, 110, 59, 1, 8789, 59, 1, 1101, 111, 116, 59, 1, 279, 59, 1, 8519, 4, 2, 68, 114, 9453, 9458, 111, 116, 59, 1, 8786, 59, 3, 55349, 56610, 4, 3, 59, 114, 115, 9470, 9472, 9482, 1, 10906, 97, 118, 101, 5, 232, 1, 59, 9480, 1, 232, 4, 2, 59, 100, 9488, 9490, 1, 10902, 111, 116, 59, 1, 10904, 4, 4, 59, 105, 108, 115, 9505, 9507, 9515, 9518, 1, 10905, 110, 116, 101, 114, 115, 59, 1, 9191, 59, 1, 8467, 4, 2, 59, 100, 9524, 9526, 1, 10901, 111, 116, 59, 1, 10903, 4, 3, 97, 112, 115, 9539, 9544, 9564, 99, 114, 59, 1, 275, 116, 121, 4, 3, 59, 115, 118, 9554, 9556, 9561, 1, 8709, 101, 116, 59, 1, 8709, 59, 1, 8709, 112, 4, 2, 49, 59, 9571, 9583, 4, 2, 51, 52, 9577, 9580, 59, 1, 8196, 59, 1, 8197, 1, 8195, 4, 2, 103, 115, 9591, 9594, 59, 1, 331, 112, 59, 1, 8194, 4, 2, 103, 112, 9604, 9609, 111, 110, 59, 1, 281, 102, 59, 3, 55349, 56662, 4, 3, 97, 108, 115, 9622, 9635, 9640, 114, 4, 2, 59, 115, 9629, 9631, 1, 8917, 108, 59, 1, 10723, 117, 115, 59, 1, 10865, 105, 4, 3, 59, 108, 118, 9649, 9651, 9656, 1, 949, 111, 110, 59, 1, 949, 59, 1, 1013, 4, 4, 99, 115, 117, 118, 9669, 9686, 9716, 9747, 4, 2, 105, 111, 9675, 9680, 114, 99, 59, 1, 8790, 108, 111, 110, 59, 1, 8789, 4, 2, 105, 108, 9692, 9696, 109, 59, 1, 8770, 97, 110, 116, 4, 2, 103, 108, 9705, 9710, 116, 114, 59, 1, 10902, 101, 115, 115, 59, 1, 10901, 4, 3, 97, 101, 105, 9724, 9729, 9734, 108, 115, 59, 1, 61, 115, 116, 59, 1, 8799, 118, 4, 2, 59, 68, 9741, 9743, 1, 8801, 68, 59, 1, 10872, 112, 97, 114, 115, 108, 59, 1, 10725, 4, 2, 68, 97, 9761, 9766, 111, 116, 59, 1, 8787, 114, 114, 59, 1, 10609, 4, 3, 99, 100, 105, 9779, 9783, 9788, 114, 59, 1, 8495, 111, 116, 59, 1, 8784, 109, 59, 1, 8770, 4, 2, 97, 104, 9798, 9801, 59, 1, 951, 5, 240, 1, 59, 9806, 1, 240, 4, 2, 109, 114, 9814, 9822, 108, 5, 235, 1, 59, 9820, 1, 235, 111, 59, 1, 8364, 4, 3, 99, 105, 112, 9834, 9838, 9843, 108, 59, 1, 33, 115, 116, 59, 1, 8707, 4, 2, 101, 111, 9849, 9859, 99, 116, 97, 116, 105, 111, 110, 59, 1, 8496, 110, 101, 110, 116, 105, 97, 108, 101, 59, 1, 8519, 4, 12, 97, 99, 101, 102, 105, 106, 108, 110, 111, 112, 114, 115, 9896, 9910, 9914, 9921, 9954, 9960, 9967, 9989, 9994, 10027, 10036, 10164, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8786, 121, 59, 1, 1092, 109, 97, 108, 101, 59, 1, 9792, 4, 3, 105, 108, 114, 9929, 9935, 9950, 108, 105, 103, 59, 1, 64259, 4, 2, 105, 108, 9941, 9945, 103, 59, 1, 64256, 105, 103, 59, 1, 64260, 59, 3, 55349, 56611, 108, 105, 103, 59, 1, 64257, 108, 105, 103, 59, 3, 102, 106, 4, 3, 97, 108, 116, 9975, 9979, 9984, 116, 59, 1, 9837, 105, 103, 59, 1, 64258, 110, 115, 59, 1, 9649, 111, 102, 59, 1, 402, 4, 2, 112, 114, 1e4, 10005, 102, 59, 3, 55349, 56663, 4, 2, 97, 107, 10011, 10016, 108, 108, 59, 1, 8704, 4, 2, 59, 118, 10022, 10024, 1, 8916, 59, 1, 10969, 97, 114, 116, 105, 110, 116, 59, 1, 10765, 4, 2, 97, 111, 10042, 10159, 4, 2, 99, 115, 10048, 10155, 4, 6, 49, 50, 51, 52, 53, 55, 10062, 10102, 10114, 10135, 10139, 10151, 4, 6, 50, 51, 52, 53, 54, 56, 10076, 10083, 10086, 10093, 10096, 10099, 5, 189, 1, 59, 10081, 1, 189, 59, 1, 8531, 5, 188, 1, 59, 10091, 1, 188, 59, 1, 8533, 59, 1, 8537, 59, 1, 8539, 4, 2, 51, 53, 10108, 10111, 59, 1, 8532, 59, 1, 8534, 4, 3, 52, 53, 56, 10122, 10129, 10132, 5, 190, 1, 59, 10127, 1, 190, 59, 1, 8535, 59, 1, 8540, 53, 59, 1, 8536, 4, 2, 54, 56, 10145, 10148, 59, 1, 8538, 59, 1, 8541, 56, 59, 1, 8542, 108, 59, 1, 8260, 119, 110, 59, 1, 8994, 99, 114, 59, 3, 55349, 56507, 4, 17, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 10206, 10217, 10247, 10254, 10268, 10273, 10358, 10363, 10374, 10380, 10385, 10406, 10458, 10464, 10470, 10497, 10610, 4, 2, 59, 108, 10212, 10214, 1, 8807, 59, 1, 10892, 4, 3, 99, 109, 112, 10225, 10231, 10244, 117, 116, 101, 59, 1, 501, 109, 97, 4, 2, 59, 100, 10239, 10241, 1, 947, 59, 1, 989, 59, 1, 10886, 114, 101, 118, 101, 59, 1, 287, 4, 2, 105, 121, 10260, 10265, 114, 99, 59, 1, 285, 59, 1, 1075, 111, 116, 59, 1, 289, 4, 4, 59, 108, 113, 115, 10283, 10285, 10288, 10308, 1, 8805, 59, 1, 8923, 4, 3, 59, 113, 115, 10296, 10298, 10301, 1, 8805, 59, 1, 8807, 108, 97, 110, 116, 59, 1, 10878, 4, 4, 59, 99, 100, 108, 10318, 10320, 10324, 10345, 1, 10878, 99, 59, 1, 10921, 111, 116, 4, 2, 59, 111, 10332, 10334, 1, 10880, 4, 2, 59, 108, 10340, 10342, 1, 10882, 59, 1, 10884, 4, 2, 59, 101, 10351, 10354, 3, 8923, 65024, 115, 59, 1, 10900, 114, 59, 3, 55349, 56612, 4, 2, 59, 103, 10369, 10371, 1, 8811, 59, 1, 8921, 109, 101, 108, 59, 1, 8503, 99, 121, 59, 1, 1107, 4, 4, 59, 69, 97, 106, 10395, 10397, 10400, 10403, 1, 8823, 59, 1, 10898, 59, 1, 10917, 59, 1, 10916, 4, 4, 69, 97, 101, 115, 10416, 10419, 10434, 10453, 59, 1, 8809, 112, 4, 2, 59, 112, 10426, 10428, 1, 10890, 114, 111, 120, 59, 1, 10890, 4, 2, 59, 113, 10440, 10442, 1, 10888, 4, 2, 59, 113, 10448, 10450, 1, 10888, 59, 1, 8809, 105, 109, 59, 1, 8935, 112, 102, 59, 3, 55349, 56664, 97, 118, 101, 59, 1, 96, 4, 2, 99, 105, 10476, 10480, 114, 59, 1, 8458, 109, 4, 3, 59, 101, 108, 10489, 10491, 10494, 1, 8819, 59, 1, 10894, 59, 1, 10896, 5, 62, 6, 59, 99, 100, 108, 113, 114, 10512, 10514, 10527, 10532, 10538, 10545, 1, 62, 4, 2, 99, 105, 10520, 10523, 59, 1, 10919, 114, 59, 1, 10874, 111, 116, 59, 1, 8919, 80, 97, 114, 59, 1, 10645, 117, 101, 115, 116, 59, 1, 10876, 4, 5, 97, 100, 101, 108, 115, 10557, 10574, 10579, 10599, 10605, 4, 2, 112, 114, 10563, 10570, 112, 114, 111, 120, 59, 1, 10886, 114, 59, 1, 10616, 111, 116, 59, 1, 8919, 113, 4, 2, 108, 113, 10586, 10592, 101, 115, 115, 59, 1, 8923, 108, 101, 115, 115, 59, 1, 10892, 101, 115, 115, 59, 1, 8823, 105, 109, 59, 1, 8819, 4, 2, 101, 110, 10616, 10626, 114, 116, 110, 101, 113, 113, 59, 3, 8809, 65024, 69, 59, 3, 8809, 65024, 4, 10, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 10653, 10658, 10713, 10718, 10724, 10760, 10765, 10786, 10850, 10875, 114, 114, 59, 1, 8660, 4, 4, 105, 108, 109, 114, 10668, 10674, 10678, 10684, 114, 115, 112, 59, 1, 8202, 102, 59, 1, 189, 105, 108, 116, 59, 1, 8459, 4, 2, 100, 114, 10690, 10695, 99, 121, 59, 1, 1098, 4, 3, 59, 99, 119, 10703, 10705, 10710, 1, 8596, 105, 114, 59, 1, 10568, 59, 1, 8621, 97, 114, 59, 1, 8463, 105, 114, 99, 59, 1, 293, 4, 3, 97, 108, 114, 10732, 10748, 10754, 114, 116, 115, 4, 2, 59, 117, 10741, 10743, 1, 9829, 105, 116, 59, 1, 9829, 108, 105, 112, 59, 1, 8230, 99, 111, 110, 59, 1, 8889, 114, 59, 3, 55349, 56613, 115, 4, 2, 101, 119, 10772, 10779, 97, 114, 111, 119, 59, 1, 10533, 97, 114, 111, 119, 59, 1, 10534, 4, 5, 97, 109, 111, 112, 114, 10798, 10803, 10809, 10839, 10844, 114, 114, 59, 1, 8703, 116, 104, 116, 59, 1, 8763, 107, 4, 2, 108, 114, 10816, 10827, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8617, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8618, 102, 59, 3, 55349, 56665, 98, 97, 114, 59, 1, 8213, 4, 3, 99, 108, 116, 10858, 10863, 10869, 114, 59, 3, 55349, 56509, 97, 115, 104, 59, 1, 8463, 114, 111, 107, 59, 1, 295, 4, 2, 98, 112, 10881, 10887, 117, 108, 108, 59, 1, 8259, 104, 101, 110, 59, 1, 8208, 4, 15, 97, 99, 101, 102, 103, 105, 106, 109, 110, 111, 112, 113, 115, 116, 117, 10925, 10936, 10958, 10977, 10990, 11001, 11039, 11045, 11101, 11192, 11220, 11226, 11237, 11285, 11299, 99, 117, 116, 101, 5, 237, 1, 59, 10934, 1, 237, 4, 3, 59, 105, 121, 10944, 10946, 10955, 1, 8291, 114, 99, 5, 238, 1, 59, 10953, 1, 238, 59, 1, 1080, 4, 2, 99, 120, 10964, 10968, 121, 59, 1, 1077, 99, 108, 5, 161, 1, 59, 10975, 1, 161, 4, 2, 102, 114, 10983, 10986, 59, 1, 8660, 59, 3, 55349, 56614, 114, 97, 118, 101, 5, 236, 1, 59, 10999, 1, 236, 4, 4, 59, 105, 110, 111, 11011, 11013, 11028, 11034, 1, 8520, 4, 2, 105, 110, 11019, 11024, 110, 116, 59, 1, 10764, 116, 59, 1, 8749, 102, 105, 110, 59, 1, 10716, 116, 97, 59, 1, 8489, 108, 105, 103, 59, 1, 307, 4, 3, 97, 111, 112, 11053, 11092, 11096, 4, 3, 99, 103, 116, 11061, 11065, 11088, 114, 59, 1, 299, 4, 3, 101, 108, 112, 11073, 11076, 11082, 59, 1, 8465, 105, 110, 101, 59, 1, 8464, 97, 114, 116, 59, 1, 8465, 104, 59, 1, 305, 102, 59, 1, 8887, 101, 100, 59, 1, 437, 4, 5, 59, 99, 102, 111, 116, 11113, 11115, 11121, 11136, 11142, 1, 8712, 97, 114, 101, 59, 1, 8453, 105, 110, 4, 2, 59, 116, 11129, 11131, 1, 8734, 105, 101, 59, 1, 10717, 100, 111, 116, 59, 1, 305, 4, 5, 59, 99, 101, 108, 112, 11154, 11156, 11161, 11179, 11186, 1, 8747, 97, 108, 59, 1, 8890, 4, 2, 103, 114, 11167, 11173, 101, 114, 115, 59, 1, 8484, 99, 97, 108, 59, 1, 8890, 97, 114, 104, 107, 59, 1, 10775, 114, 111, 100, 59, 1, 10812, 4, 4, 99, 103, 112, 116, 11202, 11206, 11211, 11216, 121, 59, 1, 1105, 111, 110, 59, 1, 303, 102, 59, 3, 55349, 56666, 97, 59, 1, 953, 114, 111, 100, 59, 1, 10812, 117, 101, 115, 116, 5, 191, 1, 59, 11235, 1, 191, 4, 2, 99, 105, 11243, 11248, 114, 59, 3, 55349, 56510, 110, 4, 5, 59, 69, 100, 115, 118, 11261, 11263, 11266, 11271, 11282, 1, 8712, 59, 1, 8953, 111, 116, 59, 1, 8949, 4, 2, 59, 118, 11277, 11279, 1, 8948, 59, 1, 8947, 59, 1, 8712, 4, 2, 59, 105, 11291, 11293, 1, 8290, 108, 100, 101, 59, 1, 297, 4, 2, 107, 109, 11305, 11310, 99, 121, 59, 1, 1110, 108, 5, 239, 1, 59, 11316, 1, 239, 4, 6, 99, 102, 109, 111, 115, 117, 11332, 11346, 11351, 11357, 11363, 11380, 4, 2, 105, 121, 11338, 11343, 114, 99, 59, 1, 309, 59, 1, 1081, 114, 59, 3, 55349, 56615, 97, 116, 104, 59, 1, 567, 112, 102, 59, 3, 55349, 56667, 4, 2, 99, 101, 11369, 11374, 114, 59, 3, 55349, 56511, 114, 99, 121, 59, 1, 1112, 107, 99, 121, 59, 1, 1108, 4, 8, 97, 99, 102, 103, 104, 106, 111, 115, 11404, 11418, 11433, 11438, 11445, 11450, 11455, 11461, 112, 112, 97, 4, 2, 59, 118, 11413, 11415, 1, 954, 59, 1, 1008, 4, 2, 101, 121, 11424, 11430, 100, 105, 108, 59, 1, 311, 59, 1, 1082, 114, 59, 3, 55349, 56616, 114, 101, 101, 110, 59, 1, 312, 99, 121, 59, 1, 1093, 99, 121, 59, 1, 1116, 112, 102, 59, 3, 55349, 56668, 99, 114, 59, 3, 55349, 56512, 4, 23, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 11515, 11538, 11544, 11555, 11560, 11721, 11780, 11818, 11868, 12136, 12160, 12171, 12203, 12208, 12246, 12275, 12327, 12509, 12523, 12569, 12641, 12732, 12752, 4, 3, 97, 114, 116, 11523, 11528, 11532, 114, 114, 59, 1, 8666, 114, 59, 1, 8656, 97, 105, 108, 59, 1, 10523, 97, 114, 114, 59, 1, 10510, 4, 2, 59, 103, 11550, 11552, 1, 8806, 59, 1, 10891, 97, 114, 59, 1, 10594, 4, 9, 99, 101, 103, 109, 110, 112, 113, 114, 116, 11580, 11586, 11594, 11600, 11606, 11624, 11627, 11636, 11694, 117, 116, 101, 59, 1, 314, 109, 112, 116, 121, 118, 59, 1, 10676, 114, 97, 110, 59, 1, 8466, 98, 100, 97, 59, 1, 955, 103, 4, 3, 59, 100, 108, 11615, 11617, 11620, 1, 10216, 59, 1, 10641, 101, 59, 1, 10216, 59, 1, 10885, 117, 111, 5, 171, 1, 59, 11634, 1, 171, 114, 4, 8, 59, 98, 102, 104, 108, 112, 115, 116, 11655, 11657, 11669, 11673, 11677, 11681, 11685, 11690, 1, 8592, 4, 2, 59, 102, 11663, 11665, 1, 8676, 115, 59, 1, 10527, 115, 59, 1, 10525, 107, 59, 1, 8617, 112, 59, 1, 8619, 108, 59, 1, 10553, 105, 109, 59, 1, 10611, 108, 59, 1, 8610, 4, 3, 59, 97, 101, 11702, 11704, 11709, 1, 10923, 105, 108, 59, 1, 10521, 4, 2, 59, 115, 11715, 11717, 1, 10925, 59, 3, 10925, 65024, 4, 3, 97, 98, 114, 11729, 11734, 11739, 114, 114, 59, 1, 10508, 114, 107, 59, 1, 10098, 4, 2, 97, 107, 11745, 11758, 99, 4, 2, 101, 107, 11752, 11755, 59, 1, 123, 59, 1, 91, 4, 2, 101, 115, 11764, 11767, 59, 1, 10635, 108, 4, 2, 100, 117, 11774, 11777, 59, 1, 10639, 59, 1, 10637, 4, 4, 97, 101, 117, 121, 11790, 11796, 11811, 11815, 114, 111, 110, 59, 1, 318, 4, 2, 100, 105, 11802, 11807, 105, 108, 59, 1, 316, 108, 59, 1, 8968, 98, 59, 1, 123, 59, 1, 1083, 4, 4, 99, 113, 114, 115, 11828, 11832, 11845, 11864, 97, 59, 1, 10550, 117, 111, 4, 2, 59, 114, 11840, 11842, 1, 8220, 59, 1, 8222, 4, 2, 100, 117, 11851, 11857, 104, 97, 114, 59, 1, 10599, 115, 104, 97, 114, 59, 1, 10571, 104, 59, 1, 8626, 4, 5, 59, 102, 103, 113, 115, 11880, 11882, 12008, 12011, 12031, 1, 8804, 116, 4, 5, 97, 104, 108, 114, 116, 11895, 11913, 11935, 11947, 11996, 114, 114, 111, 119, 4, 2, 59, 116, 11905, 11907, 1, 8592, 97, 105, 108, 59, 1, 8610, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 11925, 11931, 111, 119, 110, 59, 1, 8637, 112, 59, 1, 8636, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8647, 105, 103, 104, 116, 4, 3, 97, 104, 115, 11959, 11974, 11984, 114, 114, 111, 119, 4, 2, 59, 115, 11969, 11971, 1, 8596, 59, 1, 8646, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8651, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8621, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8907, 59, 1, 8922, 4, 3, 59, 113, 115, 12019, 12021, 12024, 1, 8804, 59, 1, 8806, 108, 97, 110, 116, 59, 1, 10877, 4, 5, 59, 99, 100, 103, 115, 12043, 12045, 12049, 12070, 12083, 1, 10877, 99, 59, 1, 10920, 111, 116, 4, 2, 59, 111, 12057, 12059, 1, 10879, 4, 2, 59, 114, 12065, 12067, 1, 10881, 59, 1, 10883, 4, 2, 59, 101, 12076, 12079, 3, 8922, 65024, 115, 59, 1, 10899, 4, 5, 97, 100, 101, 103, 115, 12095, 12103, 12108, 12126, 12131, 112, 112, 114, 111, 120, 59, 1, 10885, 111, 116, 59, 1, 8918, 113, 4, 2, 103, 113, 12115, 12120, 116, 114, 59, 1, 8922, 103, 116, 114, 59, 1, 10891, 116, 114, 59, 1, 8822, 105, 109, 59, 1, 8818, 4, 3, 105, 108, 114, 12144, 12150, 12156, 115, 104, 116, 59, 1, 10620, 111, 111, 114, 59, 1, 8970, 59, 3, 55349, 56617, 4, 2, 59, 69, 12166, 12168, 1, 8822, 59, 1, 10897, 4, 2, 97, 98, 12177, 12198, 114, 4, 2, 100, 117, 12184, 12187, 59, 1, 8637, 4, 2, 59, 108, 12193, 12195, 1, 8636, 59, 1, 10602, 108, 107, 59, 1, 9604, 99, 121, 59, 1, 1113, 4, 5, 59, 97, 99, 104, 116, 12220, 12222, 12227, 12235, 12241, 1, 8810, 114, 114, 59, 1, 8647, 111, 114, 110, 101, 114, 59, 1, 8990, 97, 114, 100, 59, 1, 10603, 114, 105, 59, 1, 9722, 4, 2, 105, 111, 12252, 12258, 100, 111, 116, 59, 1, 320, 117, 115, 116, 4, 2, 59, 97, 12267, 12269, 1, 9136, 99, 104, 101, 59, 1, 9136, 4, 4, 69, 97, 101, 115, 12285, 12288, 12303, 12322, 59, 1, 8808, 112, 4, 2, 59, 112, 12295, 12297, 1, 10889, 114, 111, 120, 59, 1, 10889, 4, 2, 59, 113, 12309, 12311, 1, 10887, 4, 2, 59, 113, 12317, 12319, 1, 10887, 59, 1, 8808, 105, 109, 59, 1, 8934, 4, 8, 97, 98, 110, 111, 112, 116, 119, 122, 12345, 12359, 12364, 12421, 12446, 12467, 12474, 12490, 4, 2, 110, 114, 12351, 12355, 103, 59, 1, 10220, 114, 59, 1, 8701, 114, 107, 59, 1, 10214, 103, 4, 3, 108, 109, 114, 12373, 12401, 12409, 101, 102, 116, 4, 2, 97, 114, 12382, 12389, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10231, 97, 112, 115, 116, 111, 59, 1, 10236, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10230, 112, 97, 114, 114, 111, 119, 4, 2, 108, 114, 12433, 12439, 101, 102, 116, 59, 1, 8619, 105, 103, 104, 116, 59, 1, 8620, 4, 3, 97, 102, 108, 12454, 12458, 12462, 114, 59, 1, 10629, 59, 3, 55349, 56669, 117, 115, 59, 1, 10797, 105, 109, 101, 115, 59, 1, 10804, 4, 2, 97, 98, 12480, 12485, 115, 116, 59, 1, 8727, 97, 114, 59, 1, 95, 4, 3, 59, 101, 102, 12498, 12500, 12506, 1, 9674, 110, 103, 101, 59, 1, 9674, 59, 1, 10731, 97, 114, 4, 2, 59, 108, 12517, 12519, 1, 40, 116, 59, 1, 10643, 4, 5, 97, 99, 104, 109, 116, 12535, 12540, 12548, 12561, 12564, 114, 114, 59, 1, 8646, 111, 114, 110, 101, 114, 59, 1, 8991, 97, 114, 4, 2, 59, 100, 12556, 12558, 1, 8651, 59, 1, 10605, 59, 1, 8206, 114, 105, 59, 1, 8895, 4, 6, 97, 99, 104, 105, 113, 116, 12583, 12589, 12594, 12597, 12614, 12635, 113, 117, 111, 59, 1, 8249, 114, 59, 3, 55349, 56513, 59, 1, 8624, 109, 4, 3, 59, 101, 103, 12606, 12608, 12611, 1, 8818, 59, 1, 10893, 59, 1, 10895, 4, 2, 98, 117, 12620, 12623, 59, 1, 91, 111, 4, 2, 59, 114, 12630, 12632, 1, 8216, 59, 1, 8218, 114, 111, 107, 59, 1, 322, 5, 60, 8, 59, 99, 100, 104, 105, 108, 113, 114, 12660, 12662, 12675, 12680, 12686, 12692, 12698, 12705, 1, 60, 4, 2, 99, 105, 12668, 12671, 59, 1, 10918, 114, 59, 1, 10873, 111, 116, 59, 1, 8918, 114, 101, 101, 59, 1, 8907, 109, 101, 115, 59, 1, 8905, 97, 114, 114, 59, 1, 10614, 117, 101, 115, 116, 59, 1, 10875, 4, 2, 80, 105, 12711, 12716, 97, 114, 59, 1, 10646, 4, 3, 59, 101, 102, 12724, 12726, 12729, 1, 9667, 59, 1, 8884, 59, 1, 9666, 114, 4, 2, 100, 117, 12739, 12746, 115, 104, 97, 114, 59, 1, 10570, 104, 97, 114, 59, 1, 10598, 4, 2, 101, 110, 12758, 12768, 114, 116, 110, 101, 113, 113, 59, 3, 8808, 65024, 69, 59, 3, 8808, 65024, 4, 14, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 12803, 12809, 12893, 12908, 12914, 12928, 12933, 12937, 13011, 13025, 13032, 13049, 13052, 13069, 68, 111, 116, 59, 1, 8762, 4, 4, 99, 108, 112, 114, 12819, 12827, 12849, 12887, 114, 5, 175, 1, 59, 12825, 1, 175, 4, 2, 101, 116, 12833, 12836, 59, 1, 9794, 4, 2, 59, 101, 12842, 12844, 1, 10016, 115, 101, 59, 1, 10016, 4, 2, 59, 115, 12855, 12857, 1, 8614, 116, 111, 4, 4, 59, 100, 108, 117, 12869, 12871, 12877, 12883, 1, 8614, 111, 119, 110, 59, 1, 8615, 101, 102, 116, 59, 1, 8612, 112, 59, 1, 8613, 107, 101, 114, 59, 1, 9646, 4, 2, 111, 121, 12899, 12905, 109, 109, 97, 59, 1, 10793, 59, 1, 1084, 97, 115, 104, 59, 1, 8212, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59, 1, 8737, 114, 59, 3, 55349, 56618, 111, 59, 1, 8487, 4, 3, 99, 100, 110, 12945, 12954, 12985, 114, 111, 5, 181, 1, 59, 12952, 1, 181, 4, 4, 59, 97, 99, 100, 12964, 12966, 12971, 12976, 1, 8739, 115, 116, 59, 1, 42, 105, 114, 59, 1, 10992, 111, 116, 5, 183, 1, 59, 12983, 1, 183, 117, 115, 4, 3, 59, 98, 100, 12995, 12997, 13e3, 1, 8722, 59, 1, 8863, 4, 2, 59, 117, 13006, 13008, 1, 8760, 59, 1, 10794, 4, 2, 99, 100, 13017, 13021, 112, 59, 1, 10971, 114, 59, 1, 8230, 112, 108, 117, 115, 59, 1, 8723, 4, 2, 100, 112, 13038, 13044, 101, 108, 115, 59, 1, 8871, 102, 59, 3, 55349, 56670, 59, 1, 8723, 4, 2, 99, 116, 13058, 13063, 114, 59, 3, 55349, 56514, 112, 111, 115, 59, 1, 8766, 4, 3, 59, 108, 109, 13077, 13079, 13087, 1, 956, 116, 105, 109, 97, 112, 59, 1, 8888, 97, 112, 59, 1, 8888, 4, 24, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 13142, 13165, 13217, 13229, 13247, 13330, 13359, 13414, 13420, 13508, 13513, 13579, 13602, 13626, 13631, 13762, 13767, 13855, 13936, 13995, 14214, 14285, 14312, 14432, 4, 2, 103, 116, 13148, 13152, 59, 3, 8921, 824, 4, 2, 59, 118, 13158, 13161, 3, 8811, 8402, 59, 3, 8811, 824, 4, 3, 101, 108, 116, 13173, 13200, 13204, 102, 116, 4, 2, 97, 114, 13181, 13188, 114, 114, 111, 119, 59, 1, 8653, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8654, 59, 3, 8920, 824, 4, 2, 59, 118, 13210, 13213, 3, 8810, 8402, 59, 3, 8810, 824, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8655, 4, 2, 68, 100, 13235, 13241, 97, 115, 104, 59, 1, 8879, 97, 115, 104, 59, 1, 8878, 4, 5, 98, 99, 110, 112, 116, 13259, 13264, 13270, 13275, 13308, 108, 97, 59, 1, 8711, 117, 116, 101, 59, 1, 324, 103, 59, 3, 8736, 8402, 4, 5, 59, 69, 105, 111, 112, 13287, 13289, 13293, 13298, 13302, 1, 8777, 59, 3, 10864, 824, 100, 59, 3, 8779, 824, 115, 59, 1, 329, 114, 111, 120, 59, 1, 8777, 117, 114, 4, 2, 59, 97, 13316, 13318, 1, 9838, 108, 4, 2, 59, 115, 13325, 13327, 1, 9838, 59, 1, 8469, 4, 2, 115, 117, 13336, 13344, 112, 5, 160, 1, 59, 13342, 1, 160, 109, 112, 4, 2, 59, 101, 13352, 13355, 3, 8782, 824, 59, 3, 8783, 824, 4, 5, 97, 101, 111, 117, 121, 13371, 13385, 13391, 13407, 13411, 4, 2, 112, 114, 13377, 13380, 59, 1, 10819, 111, 110, 59, 1, 328, 100, 105, 108, 59, 1, 326, 110, 103, 4, 2, 59, 100, 13399, 13401, 1, 8775, 111, 116, 59, 3, 10861, 824, 112, 59, 1, 10818, 59, 1, 1085, 97, 115, 104, 59, 1, 8211, 4, 7, 59, 65, 97, 100, 113, 115, 120, 13436, 13438, 13443, 13466, 13472, 13478, 13494, 1, 8800, 114, 114, 59, 1, 8663, 114, 4, 2, 104, 114, 13450, 13454, 107, 59, 1, 10532, 4, 2, 59, 111, 13460, 13462, 1, 8599, 119, 59, 1, 8599, 111, 116, 59, 3, 8784, 824, 117, 105, 118, 59, 1, 8802, 4, 2, 101, 105, 13484, 13489, 97, 114, 59, 1, 10536, 109, 59, 3, 8770, 824, 105, 115, 116, 4, 2, 59, 115, 13503, 13505, 1, 8708, 59, 1, 8708, 114, 59, 3, 55349, 56619, 4, 4, 69, 101, 115, 116, 13523, 13527, 13563, 13568, 59, 3, 8807, 824, 4, 3, 59, 113, 115, 13535, 13537, 13559, 1, 8817, 4, 3, 59, 113, 115, 13545, 13547, 13551, 1, 8817, 59, 3, 8807, 824, 108, 97, 110, 116, 59, 3, 10878, 824, 59, 3, 10878, 824, 105, 109, 59, 1, 8821, 4, 2, 59, 114, 13574, 13576, 1, 8815, 59, 1, 8815, 4, 3, 65, 97, 112, 13587, 13592, 13597, 114, 114, 59, 1, 8654, 114, 114, 59, 1, 8622, 97, 114, 59, 1, 10994, 4, 3, 59, 115, 118, 13610, 13612, 13623, 1, 8715, 4, 2, 59, 100, 13618, 13620, 1, 8956, 59, 1, 8954, 59, 1, 8715, 99, 121, 59, 1, 1114, 4, 7, 65, 69, 97, 100, 101, 115, 116, 13647, 13652, 13656, 13661, 13665, 13737, 13742, 114, 114, 59, 1, 8653, 59, 3, 8806, 824, 114, 114, 59, 1, 8602, 114, 59, 1, 8229, 4, 4, 59, 102, 113, 115, 13675, 13677, 13703, 13725, 1, 8816, 116, 4, 2, 97, 114, 13684, 13691, 114, 114, 111, 119, 59, 1, 8602, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8622, 4, 3, 59, 113, 115, 13711, 13713, 13717, 1, 8816, 59, 3, 8806, 824, 108, 97, 110, 116, 59, 3, 10877, 824, 4, 2, 59, 115, 13731, 13734, 3, 10877, 824, 59, 1, 8814, 105, 109, 59, 1, 8820, 4, 2, 59, 114, 13748, 13750, 1, 8814, 105, 4, 2, 59, 101, 13757, 13759, 1, 8938, 59, 1, 8940, 105, 100, 59, 1, 8740, 4, 2, 112, 116, 13773, 13778, 102, 59, 3, 55349, 56671, 5, 172, 3, 59, 105, 110, 13787, 13789, 13829, 1, 172, 110, 4, 4, 59, 69, 100, 118, 13800, 13802, 13806, 13812, 1, 8713, 59, 3, 8953, 824, 111, 116, 59, 3, 8949, 824, 4, 3, 97, 98, 99, 13820, 13823, 13826, 59, 1, 8713, 59, 1, 8951, 59, 1, 8950, 105, 4, 2, 59, 118, 13836, 13838, 1, 8716, 4, 3, 97, 98, 99, 13846, 13849, 13852, 59, 1, 8716, 59, 1, 8958, 59, 1, 8957, 4, 3, 97, 111, 114, 13863, 13892, 13899, 114, 4, 4, 59, 97, 115, 116, 13874, 13876, 13883, 13888, 1, 8742, 108, 108, 101, 108, 59, 1, 8742, 108, 59, 3, 11005, 8421, 59, 3, 8706, 824, 108, 105, 110, 116, 59, 1, 10772, 4, 3, 59, 99, 101, 13907, 13909, 13914, 1, 8832, 117, 101, 59, 1, 8928, 4, 2, 59, 99, 13920, 13923, 3, 10927, 824, 4, 2, 59, 101, 13929, 13931, 1, 8832, 113, 59, 3, 10927, 824, 4, 4, 65, 97, 105, 116, 13946, 13951, 13971, 13982, 114, 114, 59, 1, 8655, 114, 114, 4, 3, 59, 99, 119, 13961, 13963, 13967, 1, 8603, 59, 3, 10547, 824, 59, 3, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8603, 114, 105, 4, 2, 59, 101, 13990, 13992, 1, 8939, 59, 1, 8941, 4, 7, 99, 104, 105, 109, 112, 113, 117, 14011, 14036, 14060, 14080, 14085, 14090, 14106, 4, 4, 59, 99, 101, 114, 14021, 14023, 14028, 14032, 1, 8833, 117, 101, 59, 1, 8929, 59, 3, 10928, 824, 59, 3, 55349, 56515, 111, 114, 116, 4, 2, 109, 112, 14045, 14050, 105, 100, 59, 1, 8740, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8742, 109, 4, 2, 59, 101, 14067, 14069, 1, 8769, 4, 2, 59, 113, 14075, 14077, 1, 8772, 59, 1, 8772, 105, 100, 59, 1, 8740, 97, 114, 59, 1, 8742, 115, 117, 4, 2, 98, 112, 14098, 14102, 101, 59, 1, 8930, 101, 59, 1, 8931, 4, 3, 98, 99, 112, 14114, 14157, 14171, 4, 4, 59, 69, 101, 115, 14124, 14126, 14130, 14133, 1, 8836, 59, 3, 10949, 824, 59, 1, 8840, 101, 116, 4, 2, 59, 101, 14141, 14144, 3, 8834, 8402, 113, 4, 2, 59, 113, 14151, 14153, 1, 8840, 59, 3, 10949, 824, 99, 4, 2, 59, 101, 14164, 14166, 1, 8833, 113, 59, 3, 10928, 824, 4, 4, 59, 69, 101, 115, 14181, 14183, 14187, 14190, 1, 8837, 59, 3, 10950, 824, 59, 1, 8841, 101, 116, 4, 2, 59, 101, 14198, 14201, 3, 8835, 8402, 113, 4, 2, 59, 113, 14208, 14210, 1, 8841, 59, 3, 10950, 824, 4, 4, 103, 105, 108, 114, 14224, 14228, 14238, 14242, 108, 59, 1, 8825, 108, 100, 101, 5, 241, 1, 59, 14236, 1, 241, 103, 59, 1, 8824, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 14254, 14269, 101, 102, 116, 4, 2, 59, 101, 14263, 14265, 1, 8938, 113, 59, 1, 8940, 105, 103, 104, 116, 4, 2, 59, 101, 14279, 14281, 1, 8939, 113, 59, 1, 8941, 4, 2, 59, 109, 14291, 14293, 1, 957, 4, 3, 59, 101, 115, 14301, 14303, 14308, 1, 35, 114, 111, 59, 1, 8470, 112, 59, 1, 8199, 4, 9, 68, 72, 97, 100, 103, 105, 108, 114, 115, 14332, 14338, 14344, 14349, 14355, 14369, 14376, 14408, 14426, 97, 115, 104, 59, 1, 8877, 97, 114, 114, 59, 1, 10500, 112, 59, 3, 8781, 8402, 97, 115, 104, 59, 1, 8876, 4, 2, 101, 116, 14361, 14365, 59, 3, 8805, 8402, 59, 3, 62, 8402, 110, 102, 105, 110, 59, 1, 10718, 4, 3, 65, 101, 116, 14384, 14389, 14393, 114, 114, 59, 1, 10498, 59, 3, 8804, 8402, 4, 2, 59, 114, 14399, 14402, 3, 60, 8402, 105, 101, 59, 3, 8884, 8402, 4, 2, 65, 116, 14414, 14419, 114, 114, 59, 1, 10499, 114, 105, 101, 59, 3, 8885, 8402, 105, 109, 59, 3, 8764, 8402, 4, 3, 65, 97, 110, 14440, 14445, 14468, 114, 114, 59, 1, 8662, 114, 4, 2, 104, 114, 14452, 14456, 107, 59, 1, 10531, 4, 2, 59, 111, 14462, 14464, 1, 8598, 119, 59, 1, 8598, 101, 97, 114, 59, 1, 10535, 4, 18, 83, 97, 99, 100, 101, 102, 103, 104, 105, 108, 109, 111, 112, 114, 115, 116, 117, 118, 14512, 14515, 14535, 14560, 14597, 14603, 14618, 14643, 14657, 14662, 14701, 14741, 14747, 14769, 14851, 14877, 14907, 14916, 59, 1, 9416, 4, 2, 99, 115, 14521, 14531, 117, 116, 101, 5, 243, 1, 59, 14529, 1, 243, 116, 59, 1, 8859, 4, 2, 105, 121, 14541, 14557, 114, 4, 2, 59, 99, 14548, 14550, 1, 8858, 5, 244, 1, 59, 14555, 1, 244, 59, 1, 1086, 4, 5, 97, 98, 105, 111, 115, 14572, 14577, 14583, 14587, 14591, 115, 104, 59, 1, 8861, 108, 97, 99, 59, 1, 337, 118, 59, 1, 10808, 116, 59, 1, 8857, 111, 108, 100, 59, 1, 10684, 108, 105, 103, 59, 1, 339, 4, 2, 99, 114, 14609, 14614, 105, 114, 59, 1, 10687, 59, 3, 55349, 56620, 4, 3, 111, 114, 116, 14626, 14630, 14640, 110, 59, 1, 731, 97, 118, 101, 5, 242, 1, 59, 14638, 1, 242, 59, 1, 10689, 4, 2, 98, 109, 14649, 14654, 97, 114, 59, 1, 10677, 59, 1, 937, 110, 116, 59, 1, 8750, 4, 4, 97, 99, 105, 116, 14672, 14677, 14693, 14698, 114, 114, 59, 1, 8634, 4, 2, 105, 114, 14683, 14687, 114, 59, 1, 10686, 111, 115, 115, 59, 1, 10683, 110, 101, 59, 1, 8254, 59, 1, 10688, 4, 3, 97, 101, 105, 14709, 14714, 14719, 99, 114, 59, 1, 333, 103, 97, 59, 1, 969, 4, 3, 99, 100, 110, 14727, 14733, 14736, 114, 111, 110, 59, 1, 959, 59, 1, 10678, 117, 115, 59, 1, 8854, 112, 102, 59, 3, 55349, 56672, 4, 3, 97, 101, 108, 14755, 14759, 14764, 114, 59, 1, 10679, 114, 112, 59, 1, 10681, 117, 115, 59, 1, 8853, 4, 7, 59, 97, 100, 105, 111, 115, 118, 14785, 14787, 14792, 14831, 14837, 14841, 14848, 1, 8744, 114, 114, 59, 1, 8635, 4, 4, 59, 101, 102, 109, 14802, 14804, 14817, 14824, 1, 10845, 114, 4, 2, 59, 111, 14811, 14813, 1, 8500, 102, 59, 1, 8500, 5, 170, 1, 59, 14822, 1, 170, 5, 186, 1, 59, 14829, 1, 186, 103, 111, 102, 59, 1, 8886, 114, 59, 1, 10838, 108, 111, 112, 101, 59, 1, 10839, 59, 1, 10843, 4, 3, 99, 108, 111, 14859, 14863, 14873, 114, 59, 1, 8500, 97, 115, 104, 5, 248, 1, 59, 14871, 1, 248, 108, 59, 1, 8856, 105, 4, 2, 108, 109, 14884, 14893, 100, 101, 5, 245, 1, 59, 14891, 1, 245, 101, 115, 4, 2, 59, 97, 14901, 14903, 1, 8855, 115, 59, 1, 10806, 109, 108, 5, 246, 1, 59, 14914, 1, 246, 98, 97, 114, 59, 1, 9021, 4, 12, 97, 99, 101, 102, 104, 105, 108, 109, 111, 114, 115, 117, 14948, 14992, 14996, 15033, 15038, 15068, 15090, 15189, 15192, 15222, 15427, 15441, 114, 4, 4, 59, 97, 115, 116, 14959, 14961, 14976, 14989, 1, 8741, 5, 182, 2, 59, 108, 14968, 14970, 1, 182, 108, 101, 108, 59, 1, 8741, 4, 2, 105, 108, 14982, 14986, 109, 59, 1, 10995, 59, 1, 11005, 59, 1, 8706, 121, 59, 1, 1087, 114, 4, 5, 99, 105, 109, 112, 116, 15009, 15014, 15019, 15024, 15027, 110, 116, 59, 1, 37, 111, 100, 59, 1, 46, 105, 108, 59, 1, 8240, 59, 1, 8869, 101, 110, 107, 59, 1, 8241, 114, 59, 3, 55349, 56621, 4, 3, 105, 109, 111, 15046, 15057, 15063, 4, 2, 59, 118, 15052, 15054, 1, 966, 59, 1, 981, 109, 97, 116, 59, 1, 8499, 110, 101, 59, 1, 9742, 4, 3, 59, 116, 118, 15076, 15078, 15087, 1, 960, 99, 104, 102, 111, 114, 107, 59, 1, 8916, 59, 1, 982, 4, 2, 97, 117, 15096, 15119, 110, 4, 2, 99, 107, 15103, 15115, 107, 4, 2, 59, 104, 15110, 15112, 1, 8463, 59, 1, 8462, 118, 59, 1, 8463, 115, 4, 9, 59, 97, 98, 99, 100, 101, 109, 115, 116, 15140, 15142, 15148, 15151, 15156, 15168, 15171, 15179, 15184, 1, 43, 99, 105, 114, 59, 1, 10787, 59, 1, 8862, 105, 114, 59, 1, 10786, 4, 2, 111, 117, 15162, 15165, 59, 1, 8724, 59, 1, 10789, 59, 1, 10866, 110, 5, 177, 1, 59, 15177, 1, 177, 105, 109, 59, 1, 10790, 119, 111, 59, 1, 10791, 59, 1, 177, 4, 3, 105, 112, 117, 15200, 15208, 15213, 110, 116, 105, 110, 116, 59, 1, 10773, 102, 59, 3, 55349, 56673, 110, 100, 5, 163, 1, 59, 15220, 1, 163, 4, 10, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 15244, 15246, 15249, 15253, 15258, 15334, 15347, 15367, 15416, 15421, 1, 8826, 59, 1, 10931, 112, 59, 1, 10935, 117, 101, 59, 1, 8828, 4, 2, 59, 99, 15264, 15266, 1, 10927, 4, 6, 59, 97, 99, 101, 110, 115, 15280, 15282, 15290, 15299, 15303, 15329, 1, 8826, 112, 112, 114, 111, 120, 59, 1, 10935, 117, 114, 108, 121, 101, 113, 59, 1, 8828, 113, 59, 1, 10927, 4, 3, 97, 101, 115, 15311, 15319, 15324, 112, 112, 114, 111, 120, 59, 1, 10937, 113, 113, 59, 1, 10933, 105, 109, 59, 1, 8936, 105, 109, 59, 1, 8830, 109, 101, 4, 2, 59, 115, 15342, 15344, 1, 8242, 59, 1, 8473, 4, 3, 69, 97, 115, 15355, 15358, 15362, 59, 1, 10933, 112, 59, 1, 10937, 105, 109, 59, 1, 8936, 4, 3, 100, 102, 112, 15375, 15378, 15404, 59, 1, 8719, 4, 3, 97, 108, 115, 15386, 15392, 15398, 108, 97, 114, 59, 1, 9006, 105, 110, 101, 59, 1, 8978, 117, 114, 102, 59, 1, 8979, 4, 2, 59, 116, 15410, 15412, 1, 8733, 111, 59, 1, 8733, 105, 109, 59, 1, 8830, 114, 101, 108, 59, 1, 8880, 4, 2, 99, 105, 15433, 15438, 114, 59, 3, 55349, 56517, 59, 1, 968, 110, 99, 115, 112, 59, 1, 8200, 4, 6, 102, 105, 111, 112, 115, 117, 15462, 15467, 15472, 15478, 15485, 15491, 114, 59, 3, 55349, 56622, 110, 116, 59, 1, 10764, 112, 102, 59, 3, 55349, 56674, 114, 105, 109, 101, 59, 1, 8279, 99, 114, 59, 3, 55349, 56518, 4, 3, 97, 101, 111, 15499, 15520, 15534, 116, 4, 2, 101, 105, 15506, 15515, 114, 110, 105, 111, 110, 115, 59, 1, 8461, 110, 116, 59, 1, 10774, 115, 116, 4, 2, 59, 101, 15528, 15530, 1, 63, 113, 59, 1, 8799, 116, 5, 34, 1, 59, 15540, 1, 34, 4, 21, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 15586, 15609, 15615, 15620, 15796, 15855, 15893, 15931, 15977, 16001, 16039, 16183, 16204, 16222, 16228, 16285, 16312, 16318, 16363, 16408, 16416, 4, 3, 97, 114, 116, 15594, 15599, 15603, 114, 114, 59, 1, 8667, 114, 59, 1, 8658, 97, 105, 108, 59, 1, 10524, 97, 114, 114, 59, 1, 10511, 97, 114, 59, 1, 10596, 4, 7, 99, 100, 101, 110, 113, 114, 116, 15636, 15651, 15656, 15664, 15687, 15696, 15770, 4, 2, 101, 117, 15642, 15646, 59, 3, 8765, 817, 116, 101, 59, 1, 341, 105, 99, 59, 1, 8730, 109, 112, 116, 121, 118, 59, 1, 10675, 103, 4, 4, 59, 100, 101, 108, 15675, 15677, 15680, 15683, 1, 10217, 59, 1, 10642, 59, 1, 10661, 101, 59, 1, 10217, 117, 111, 5, 187, 1, 59, 15694, 1, 187, 114, 4, 11, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 15721, 15723, 15727, 15739, 15742, 15746, 15750, 15754, 15758, 15763, 15767, 1, 8594, 112, 59, 1, 10613, 4, 2, 59, 102, 15733, 15735, 1, 8677, 115, 59, 1, 10528, 59, 1, 10547, 115, 59, 1, 10526, 107, 59, 1, 8618, 112, 59, 1, 8620, 108, 59, 1, 10565, 105, 109, 59, 1, 10612, 108, 59, 1, 8611, 59, 1, 8605, 4, 2, 97, 105, 15776, 15781, 105, 108, 59, 1, 10522, 111, 4, 2, 59, 110, 15788, 15790, 1, 8758, 97, 108, 115, 59, 1, 8474, 4, 3, 97, 98, 114, 15804, 15809, 15814, 114, 114, 59, 1, 10509, 114, 107, 59, 1, 10099, 4, 2, 97, 107, 15820, 15833, 99, 4, 2, 101, 107, 15827, 15830, 59, 1, 125, 59, 1, 93, 4, 2, 101, 115, 15839, 15842, 59, 1, 10636, 108, 4, 2, 100, 117, 15849, 15852, 59, 1, 10638, 59, 1, 10640, 4, 4, 97, 101, 117, 121, 15865, 15871, 15886, 15890, 114, 111, 110, 59, 1, 345, 4, 2, 100, 105, 15877, 15882, 105, 108, 59, 1, 343, 108, 59, 1, 8969, 98, 59, 1, 125, 59, 1, 1088, 4, 4, 99, 108, 113, 115, 15903, 15907, 15914, 15927, 97, 59, 1, 10551, 100, 104, 97, 114, 59, 1, 10601, 117, 111, 4, 2, 59, 114, 15922, 15924, 1, 8221, 59, 1, 8221, 104, 59, 1, 8627, 4, 3, 97, 99, 103, 15939, 15966, 15970, 108, 4, 4, 59, 105, 112, 115, 15950, 15952, 15957, 15963, 1, 8476, 110, 101, 59, 1, 8475, 97, 114, 116, 59, 1, 8476, 59, 1, 8477, 116, 59, 1, 9645, 5, 174, 1, 59, 15975, 1, 174, 4, 3, 105, 108, 114, 15985, 15991, 15997, 115, 104, 116, 59, 1, 10621, 111, 111, 114, 59, 1, 8971, 59, 3, 55349, 56623, 4, 2, 97, 111, 16007, 16028, 114, 4, 2, 100, 117, 16014, 16017, 59, 1, 8641, 4, 2, 59, 108, 16023, 16025, 1, 8640, 59, 1, 10604, 4, 2, 59, 118, 16034, 16036, 1, 961, 59, 1, 1009, 4, 3, 103, 110, 115, 16047, 16167, 16171, 104, 116, 4, 6, 97, 104, 108, 114, 115, 116, 16063, 16081, 16103, 16130, 16143, 16155, 114, 114, 111, 119, 4, 2, 59, 116, 16073, 16075, 1, 8594, 97, 105, 108, 59, 1, 8611, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 16093, 16099, 111, 119, 110, 59, 1, 8641, 112, 59, 1, 8640, 101, 102, 116, 4, 2, 97, 104, 16112, 16120, 114, 114, 111, 119, 115, 59, 1, 8644, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8652, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8649, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8605, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8908, 103, 59, 1, 730, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8787, 4, 3, 97, 104, 109, 16191, 16196, 16201, 114, 114, 59, 1, 8644, 97, 114, 59, 1, 8652, 59, 1, 8207, 111, 117, 115, 116, 4, 2, 59, 97, 16214, 16216, 1, 9137, 99, 104, 101, 59, 1, 9137, 109, 105, 100, 59, 1, 10990, 4, 4, 97, 98, 112, 116, 16238, 16252, 16257, 16278, 4, 2, 110, 114, 16244, 16248, 103, 59, 1, 10221, 114, 59, 1, 8702, 114, 107, 59, 1, 10215, 4, 3, 97, 102, 108, 16265, 16269, 16273, 114, 59, 1, 10630, 59, 3, 55349, 56675, 117, 115, 59, 1, 10798, 105, 109, 101, 115, 59, 1, 10805, 4, 2, 97, 112, 16291, 16304, 114, 4, 2, 59, 103, 16298, 16300, 1, 41, 116, 59, 1, 10644, 111, 108, 105, 110, 116, 59, 1, 10770, 97, 114, 114, 59, 1, 8649, 4, 4, 97, 99, 104, 113, 16328, 16334, 16339, 16342, 113, 117, 111, 59, 1, 8250, 114, 59, 3, 55349, 56519, 59, 1, 8625, 4, 2, 98, 117, 16348, 16351, 59, 1, 93, 111, 4, 2, 59, 114, 16358, 16360, 1, 8217, 59, 1, 8217, 4, 3, 104, 105, 114, 16371, 16377, 16383, 114, 101, 101, 59, 1, 8908, 109, 101, 115, 59, 1, 8906, 105, 4, 4, 59, 101, 102, 108, 16394, 16396, 16399, 16402, 1, 9657, 59, 1, 8885, 59, 1, 9656, 116, 114, 105, 59, 1, 10702, 108, 117, 104, 97, 114, 59, 1, 10600, 59, 1, 8478, 4, 19, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 111, 112, 113, 114, 115, 116, 117, 119, 122, 16459, 16466, 16472, 16572, 16590, 16672, 16687, 16746, 16844, 16850, 16924, 16963, 16988, 17115, 17121, 17154, 17206, 17614, 17656, 99, 117, 116, 101, 59, 1, 347, 113, 117, 111, 59, 1, 8218, 4, 10, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 16494, 16496, 16499, 16513, 16518, 16531, 16536, 16556, 16564, 16569, 1, 8827, 59, 1, 10932, 4, 2, 112, 114, 16505, 16508, 59, 1, 10936, 111, 110, 59, 1, 353, 117, 101, 59, 1, 8829, 4, 2, 59, 100, 16524, 16526, 1, 10928, 105, 108, 59, 1, 351, 114, 99, 59, 1, 349, 4, 3, 69, 97, 115, 16544, 16547, 16551, 59, 1, 10934, 112, 59, 1, 10938, 105, 109, 59, 1, 8937, 111, 108, 105, 110, 116, 59, 1, 10771, 105, 109, 59, 1, 8831, 59, 1, 1089, 111, 116, 4, 3, 59, 98, 101, 16582, 16584, 16587, 1, 8901, 59, 1, 8865, 59, 1, 10854, 4, 7, 65, 97, 99, 109, 115, 116, 120, 16606, 16611, 16634, 16642, 16646, 16652, 16668, 114, 114, 59, 1, 8664, 114, 4, 2, 104, 114, 16618, 16622, 107, 59, 1, 10533, 4, 2, 59, 111, 16628, 16630, 1, 8600, 119, 59, 1, 8600, 116, 5, 167, 1, 59, 16640, 1, 167, 105, 59, 1, 59, 119, 97, 114, 59, 1, 10537, 109, 4, 2, 105, 110, 16659, 16665, 110, 117, 115, 59, 1, 8726, 59, 1, 8726, 116, 59, 1, 10038, 114, 4, 2, 59, 111, 16679, 16682, 3, 55349, 56624, 119, 110, 59, 1, 8994, 4, 4, 97, 99, 111, 121, 16697, 16702, 16716, 16739, 114, 112, 59, 1, 9839, 4, 2, 104, 121, 16708, 16713, 99, 121, 59, 1, 1097, 59, 1, 1096, 114, 116, 4, 2, 109, 112, 16724, 16729, 105, 100, 59, 1, 8739, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8741, 5, 173, 1, 59, 16744, 1, 173, 4, 2, 103, 109, 16752, 16770, 109, 97, 4, 3, 59, 102, 118, 16762, 16764, 16767, 1, 963, 59, 1, 962, 59, 1, 962, 4, 8, 59, 100, 101, 103, 108, 110, 112, 114, 16788, 16790, 16795, 16806, 16817, 16828, 16832, 16838, 1, 8764, 111, 116, 59, 1, 10858, 4, 2, 59, 113, 16801, 16803, 1, 8771, 59, 1, 8771, 4, 2, 59, 69, 16812, 16814, 1, 10910, 59, 1, 10912, 4, 2, 59, 69, 16823, 16825, 1, 10909, 59, 1, 10911, 101, 59, 1, 8774, 108, 117, 115, 59, 1, 10788, 97, 114, 114, 59, 1, 10610, 97, 114, 114, 59, 1, 8592, 4, 4, 97, 101, 105, 116, 16860, 16883, 16891, 16904, 4, 2, 108, 115, 16866, 16878, 108, 115, 101, 116, 109, 105, 110, 117, 115, 59, 1, 8726, 104, 112, 59, 1, 10803, 112, 97, 114, 115, 108, 59, 1, 10724, 4, 2, 100, 108, 16897, 16900, 59, 1, 8739, 101, 59, 1, 8995, 4, 2, 59, 101, 16910, 16912, 1, 10922, 4, 2, 59, 115, 16918, 16920, 1, 10924, 59, 3, 10924, 65024, 4, 3, 102, 108, 112, 16932, 16938, 16958, 116, 99, 121, 59, 1, 1100, 4, 2, 59, 98, 16944, 16946, 1, 47, 4, 2, 59, 97, 16952, 16954, 1, 10692, 114, 59, 1, 9023, 102, 59, 3, 55349, 56676, 97, 4, 2, 100, 114, 16970, 16985, 101, 115, 4, 2, 59, 117, 16978, 16980, 1, 9824, 105, 116, 59, 1, 9824, 59, 1, 8741, 4, 3, 99, 115, 117, 16996, 17028, 17089, 4, 2, 97, 117, 17002, 17015, 112, 4, 2, 59, 115, 17009, 17011, 1, 8851, 59, 3, 8851, 65024, 112, 4, 2, 59, 115, 17022, 17024, 1, 8852, 59, 3, 8852, 65024, 117, 4, 2, 98, 112, 17035, 17062, 4, 3, 59, 101, 115, 17043, 17045, 17048, 1, 8847, 59, 1, 8849, 101, 116, 4, 2, 59, 101, 17056, 17058, 1, 8847, 113, 59, 1, 8849, 4, 3, 59, 101, 115, 17070, 17072, 17075, 1, 8848, 59, 1, 8850, 101, 116, 4, 2, 59, 101, 17083, 17085, 1, 8848, 113, 59, 1, 8850, 4, 3, 59, 97, 102, 17097, 17099, 17112, 1, 9633, 114, 4, 2, 101, 102, 17106, 17109, 59, 1, 9633, 59, 1, 9642, 59, 1, 9642, 97, 114, 114, 59, 1, 8594, 4, 4, 99, 101, 109, 116, 17131, 17136, 17142, 17148, 114, 59, 3, 55349, 56520, 116, 109, 110, 59, 1, 8726, 105, 108, 101, 59, 1, 8995, 97, 114, 102, 59, 1, 8902, 4, 2, 97, 114, 17160, 17172, 114, 4, 2, 59, 102, 17167, 17169, 1, 9734, 59, 1, 9733, 4, 2, 97, 110, 17178, 17202, 105, 103, 104, 116, 4, 2, 101, 112, 17188, 17197, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 104, 105, 59, 1, 981, 115, 59, 1, 175, 4, 5, 98, 99, 109, 110, 112, 17218, 17351, 17420, 17423, 17427, 4, 9, 59, 69, 100, 101, 109, 110, 112, 114, 115, 17238, 17240, 17243, 17248, 17261, 17267, 17279, 17285, 17291, 1, 8834, 59, 1, 10949, 111, 116, 59, 1, 10941, 4, 2, 59, 100, 17254, 17256, 1, 8838, 111, 116, 59, 1, 10947, 117, 108, 116, 59, 1, 10945, 4, 2, 69, 101, 17273, 17276, 59, 1, 10955, 59, 1, 8842, 108, 117, 115, 59, 1, 10943, 97, 114, 114, 59, 1, 10617, 4, 3, 101, 105, 117, 17299, 17335, 17339, 116, 4, 3, 59, 101, 110, 17308, 17310, 17322, 1, 8834, 113, 4, 2, 59, 113, 17317, 17319, 1, 8838, 59, 1, 10949, 101, 113, 4, 2, 59, 113, 17330, 17332, 1, 8842, 59, 1, 10955, 109, 59, 1, 10951, 4, 2, 98, 112, 17345, 17348, 59, 1, 10965, 59, 1, 10963, 99, 4, 6, 59, 97, 99, 101, 110, 115, 17366, 17368, 17376, 17385, 17389, 17415, 1, 8827, 112, 112, 114, 111, 120, 59, 1, 10936, 117, 114, 108, 121, 101, 113, 59, 1, 8829, 113, 59, 1, 10928, 4, 3, 97, 101, 115, 17397, 17405, 17410, 112, 112, 114, 111, 120, 59, 1, 10938, 113, 113, 59, 1, 10934, 105, 109, 59, 1, 8937, 105, 109, 59, 1, 8831, 59, 1, 8721, 103, 59, 1, 9834, 4, 13, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 17455, 17462, 17469, 17476, 17478, 17481, 17496, 17509, 17524, 17530, 17536, 17548, 17554, 5, 185, 1, 59, 17460, 1, 185, 5, 178, 1, 59, 17467, 1, 178, 5, 179, 1, 59, 17474, 1, 179, 1, 8835, 59, 1, 10950, 4, 2, 111, 115, 17487, 17491, 116, 59, 1, 10942, 117, 98, 59, 1, 10968, 4, 2, 59, 100, 17502, 17504, 1, 8839, 111, 116, 59, 1, 10948, 115, 4, 2, 111, 117, 17516, 17520, 108, 59, 1, 10185, 98, 59, 1, 10967, 97, 114, 114, 59, 1, 10619, 117, 108, 116, 59, 1, 10946, 4, 2, 69, 101, 17542, 17545, 59, 1, 10956, 59, 1, 8843, 108, 117, 115, 59, 1, 10944, 4, 3, 101, 105, 117, 17562, 17598, 17602, 116, 4, 3, 59, 101, 110, 17571, 17573, 17585, 1, 8835, 113, 4, 2, 59, 113, 17580, 17582, 1, 8839, 59, 1, 10950, 101, 113, 4, 2, 59, 113, 17593, 17595, 1, 8843, 59, 1, 10956, 109, 59, 1, 10952, 4, 2, 98, 112, 17608, 17611, 59, 1, 10964, 59, 1, 10966, 4, 3, 65, 97, 110, 17622, 17627, 17650, 114, 114, 59, 1, 8665, 114, 4, 2, 104, 114, 17634, 17638, 107, 59, 1, 10534, 4, 2, 59, 111, 17644, 17646, 1, 8601, 119, 59, 1, 8601, 119, 97, 114, 59, 1, 10538, 108, 105, 103, 5, 223, 1, 59, 17664, 1, 223, 4, 13, 97, 98, 99, 100, 101, 102, 104, 105, 111, 112, 114, 115, 119, 17694, 17709, 17714, 17737, 17742, 17749, 17754, 17860, 17905, 17957, 17964, 18090, 18122, 4, 2, 114, 117, 17700, 17706, 103, 101, 116, 59, 1, 8982, 59, 1, 964, 114, 107, 59, 1, 9140, 4, 3, 97, 101, 121, 17722, 17728, 17734, 114, 111, 110, 59, 1, 357, 100, 105, 108, 59, 1, 355, 59, 1, 1090, 111, 116, 59, 1, 8411, 108, 114, 101, 99, 59, 1, 8981, 114, 59, 3, 55349, 56625, 4, 4, 101, 105, 107, 111, 17764, 17805, 17836, 17851, 4, 2, 114, 116, 17770, 17786, 101, 4, 2, 52, 102, 17777, 17780, 59, 1, 8756, 111, 114, 101, 59, 1, 8756, 97, 4, 3, 59, 115, 118, 17795, 17797, 17802, 1, 952, 121, 109, 59, 1, 977, 59, 1, 977, 4, 2, 99, 110, 17811, 17831, 107, 4, 2, 97, 115, 17818, 17826, 112, 112, 114, 111, 120, 59, 1, 8776, 105, 109, 59, 1, 8764, 115, 112, 59, 1, 8201, 4, 2, 97, 115, 17842, 17846, 112, 59, 1, 8776, 105, 109, 59, 1, 8764, 114, 110, 5, 254, 1, 59, 17858, 1, 254, 4, 3, 108, 109, 110, 17868, 17873, 17901, 100, 101, 59, 1, 732, 101, 115, 5, 215, 3, 59, 98, 100, 17884, 17886, 17898, 1, 215, 4, 2, 59, 97, 17892, 17894, 1, 8864, 114, 59, 1, 10801, 59, 1, 10800, 116, 59, 1, 8749, 4, 3, 101, 112, 115, 17913, 17917, 17953, 97, 59, 1, 10536, 4, 4, 59, 98, 99, 102, 17927, 17929, 17934, 17939, 1, 8868, 111, 116, 59, 1, 9014, 105, 114, 59, 1, 10993, 4, 2, 59, 111, 17945, 17948, 3, 55349, 56677, 114, 107, 59, 1, 10970, 97, 59, 1, 10537, 114, 105, 109, 101, 59, 1, 8244, 4, 3, 97, 105, 112, 17972, 17977, 18082, 100, 101, 59, 1, 8482, 4, 7, 97, 100, 101, 109, 112, 115, 116, 17993, 18051, 18056, 18059, 18066, 18072, 18076, 110, 103, 108, 101, 4, 5, 59, 100, 108, 113, 114, 18009, 18011, 18017, 18032, 18035, 1, 9653, 111, 119, 110, 59, 1, 9663, 101, 102, 116, 4, 2, 59, 101, 18026, 18028, 1, 9667, 113, 59, 1, 8884, 59, 1, 8796, 105, 103, 104, 116, 4, 2, 59, 101, 18045, 18047, 1, 9657, 113, 59, 1, 8885, 111, 116, 59, 1, 9708, 59, 1, 8796, 105, 110, 117, 115, 59, 1, 10810, 108, 117, 115, 59, 1, 10809, 98, 59, 1, 10701, 105, 109, 101, 59, 1, 10811, 101, 122, 105, 117, 109, 59, 1, 9186, 4, 3, 99, 104, 116, 18098, 18111, 18116, 4, 2, 114, 121, 18104, 18108, 59, 3, 55349, 56521, 59, 1, 1094, 99, 121, 59, 1, 1115, 114, 111, 107, 59, 1, 359, 4, 2, 105, 111, 18128, 18133, 120, 116, 59, 1, 8812, 104, 101, 97, 100, 4, 2, 108, 114, 18143, 18154, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8606, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8608, 4, 18, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 18204, 18209, 18214, 18234, 18250, 18268, 18292, 18308, 18319, 18343, 18379, 18397, 18413, 18504, 18547, 18553, 18584, 18603, 114, 114, 59, 1, 8657, 97, 114, 59, 1, 10595, 4, 2, 99, 114, 18220, 18230, 117, 116, 101, 5, 250, 1, 59, 18228, 1, 250, 114, 59, 1, 8593, 114, 4, 2, 99, 101, 18241, 18245, 121, 59, 1, 1118, 118, 101, 59, 1, 365, 4, 2, 105, 121, 18256, 18265, 114, 99, 5, 251, 1, 59, 18263, 1, 251, 59, 1, 1091, 4, 3, 97, 98, 104, 18276, 18281, 18287, 114, 114, 59, 1, 8645, 108, 97, 99, 59, 1, 369, 97, 114, 59, 1, 10606, 4, 2, 105, 114, 18298, 18304, 115, 104, 116, 59, 1, 10622, 59, 3, 55349, 56626, 114, 97, 118, 101, 5, 249, 1, 59, 18317, 1, 249, 4, 2, 97, 98, 18325, 18338, 114, 4, 2, 108, 114, 18332, 18335, 59, 1, 8639, 59, 1, 8638, 108, 107, 59, 1, 9600, 4, 2, 99, 116, 18349, 18374, 4, 2, 111, 114, 18355, 18369, 114, 110, 4, 2, 59, 101, 18363, 18365, 1, 8988, 114, 59, 1, 8988, 111, 112, 59, 1, 8975, 114, 105, 59, 1, 9720, 4, 2, 97, 108, 18385, 18390, 99, 114, 59, 1, 363, 5, 168, 1, 59, 18395, 1, 168, 4, 2, 103, 112, 18403, 18408, 111, 110, 59, 1, 371, 102, 59, 3, 55349, 56678, 4, 6, 97, 100, 104, 108, 115, 117, 18427, 18434, 18445, 18470, 18475, 18494, 114, 114, 111, 119, 59, 1, 8593, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8597, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 18457, 18463, 101, 102, 116, 59, 1, 8639, 105, 103, 104, 116, 59, 1, 8638, 117, 115, 59, 1, 8846, 105, 4, 3, 59, 104, 108, 18484, 18486, 18489, 1, 965, 59, 1, 978, 111, 110, 59, 1, 965, 112, 97, 114, 114, 111, 119, 115, 59, 1, 8648, 4, 3, 99, 105, 116, 18512, 18537, 18542, 4, 2, 111, 114, 18518, 18532, 114, 110, 4, 2, 59, 101, 18526, 18528, 1, 8989, 114, 59, 1, 8989, 111, 112, 59, 1, 8974, 110, 103, 59, 1, 367, 114, 105, 59, 1, 9721, 99, 114, 59, 3, 55349, 56522, 4, 3, 100, 105, 114, 18561, 18566, 18572, 111, 116, 59, 1, 8944, 108, 100, 101, 59, 1, 361, 105, 4, 2, 59, 102, 18579, 18581, 1, 9653, 59, 1, 9652, 4, 2, 97, 109, 18590, 18595, 114, 114, 59, 1, 8648, 108, 5, 252, 1, 59, 18601, 1, 252, 97, 110, 103, 108, 101, 59, 1, 10663, 4, 15, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 18643, 18648, 18661, 18667, 18847, 18851, 18857, 18904, 18909, 18915, 18931, 18937, 18943, 18949, 18996, 114, 114, 59, 1, 8661, 97, 114, 4, 2, 59, 118, 18656, 18658, 1, 10984, 59, 1, 10985, 97, 115, 104, 59, 1, 8872, 4, 2, 110, 114, 18673, 18679, 103, 114, 116, 59, 1, 10652, 4, 7, 101, 107, 110, 112, 114, 115, 116, 18695, 18704, 18711, 18720, 18742, 18754, 18810, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 97, 112, 112, 97, 59, 1, 1008, 111, 116, 104, 105, 110, 103, 59, 1, 8709, 4, 3, 104, 105, 114, 18728, 18732, 18735, 105, 59, 1, 981, 59, 1, 982, 111, 112, 116, 111, 59, 1, 8733, 4, 2, 59, 104, 18748, 18750, 1, 8597, 111, 59, 1, 1009, 4, 2, 105, 117, 18760, 18766, 103, 109, 97, 59, 1, 962, 4, 2, 98, 112, 18772, 18791, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18784, 18787, 3, 8842, 65024, 59, 3, 10955, 65024, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18803, 18806, 3, 8843, 65024, 59, 3, 10956, 65024, 4, 2, 104, 114, 18816, 18822, 101, 116, 97, 59, 1, 977, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 18834, 18840, 101, 102, 116, 59, 1, 8882, 105, 103, 104, 116, 59, 1, 8883, 121, 59, 1, 1074, 97, 115, 104, 59, 1, 8866, 4, 3, 101, 108, 114, 18865, 18884, 18890, 4, 3, 59, 98, 101, 18873, 18875, 18880, 1, 8744, 97, 114, 59, 1, 8891, 113, 59, 1, 8794, 108, 105, 112, 59, 1, 8942, 4, 2, 98, 116, 18896, 18901, 97, 114, 59, 1, 124, 59, 1, 124, 114, 59, 3, 55349, 56627, 116, 114, 105, 59, 1, 8882, 115, 117, 4, 2, 98, 112, 18923, 18927, 59, 3, 8834, 8402, 59, 3, 8835, 8402, 112, 102, 59, 3, 55349, 56679, 114, 111, 112, 59, 1, 8733, 116, 114, 105, 59, 1, 8883, 4, 2, 99, 117, 18955, 18960, 114, 59, 3, 55349, 56523, 4, 2, 98, 112, 18966, 18981, 110, 4, 2, 69, 101, 18973, 18977, 59, 3, 10955, 65024, 59, 3, 8842, 65024, 110, 4, 2, 69, 101, 18988, 18992, 59, 3, 10956, 65024, 59, 3, 8843, 65024, 105, 103, 122, 97, 103, 59, 1, 10650, 4, 7, 99, 101, 102, 111, 112, 114, 115, 19020, 19026, 19061, 19066, 19072, 19075, 19089, 105, 114, 99, 59, 1, 373, 4, 2, 100, 105, 19032, 19055, 4, 2, 98, 103, 19038, 19043, 97, 114, 59, 1, 10847, 101, 4, 2, 59, 113, 19050, 19052, 1, 8743, 59, 1, 8793, 101, 114, 112, 59, 1, 8472, 114, 59, 3, 55349, 56628, 112, 102, 59, 3, 55349, 56680, 59, 1, 8472, 4, 2, 59, 101, 19081, 19083, 1, 8768, 97, 116, 104, 59, 1, 8768, 99, 114, 59, 3, 55349, 56524, 4, 14, 99, 100, 102, 104, 105, 108, 109, 110, 111, 114, 115, 117, 118, 119, 19125, 19146, 19152, 19157, 19173, 19176, 19192, 19197, 19202, 19236, 19252, 19269, 19286, 19291, 4, 3, 97, 105, 117, 19133, 19137, 19142, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 116, 114, 105, 59, 1, 9661, 114, 59, 3, 55349, 56629, 4, 2, 65, 97, 19163, 19168, 114, 114, 59, 1, 10234, 114, 114, 59, 1, 10231, 59, 1, 958, 4, 2, 65, 97, 19182, 19187, 114, 114, 59, 1, 10232, 114, 114, 59, 1, 10229, 97, 112, 59, 1, 10236, 105, 115, 59, 1, 8955, 4, 3, 100, 112, 116, 19210, 19215, 19230, 111, 116, 59, 1, 10752, 4, 2, 102, 108, 19221, 19225, 59, 3, 55349, 56681, 117, 115, 59, 1, 10753, 105, 109, 101, 59, 1, 10754, 4, 2, 65, 97, 19242, 19247, 114, 114, 59, 1, 10233, 114, 114, 59, 1, 10230, 4, 2, 99, 113, 19258, 19263, 114, 59, 3, 55349, 56525, 99, 117, 112, 59, 1, 10758, 4, 2, 112, 116, 19275, 19281, 108, 117, 115, 59, 1, 10756, 114, 105, 59, 1, 9651, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 19316, 19335, 19349, 19357, 19362, 19367, 19373, 19379, 99, 4, 2, 117, 121, 19323, 19332, 116, 101, 5, 253, 1, 59, 19330, 1, 253, 59, 1, 1103, 4, 2, 105, 121, 19341, 19346, 114, 99, 59, 1, 375, 59, 1, 1099, 110, 5, 165, 1, 59, 19355, 1, 165, 114, 59, 3, 55349, 56630, 99, 121, 59, 1, 1111, 112, 102, 59, 3, 55349, 56682, 99, 114, 59, 3, 55349, 56526, 4, 2, 99, 109, 19385, 19389, 121, 59, 1, 1102, 108, 5, 255, 1, 59, 19395, 1, 255, 4, 10, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 19419, 19426, 19441, 19446, 19462, 19467, 19472, 19480, 19486, 19492, 99, 117, 116, 101, 59, 1, 378, 4, 2, 97, 121, 19432, 19438, 114, 111, 110, 59, 1, 382, 59, 1, 1079, 111, 116, 59, 1, 380, 4, 2, 101, 116, 19452, 19458, 116, 114, 102, 59, 1, 8488, 97, 59, 1, 950, 114, 59, 3, 55349, 56631, 99, 121, 59, 1, 1078, 103, 114, 97, 114, 114, 59, 1, 8669, 112, 102, 59, 3, 55349, 56683, 99, 114, 59, 3, 55349, 56527, 4, 2, 106, 110, 19498, 19501, 59, 1, 8205, 106, 59, 1, 8204])
    }, 6354: function (e, t, n) {
        "use strict";
        let r = n(1683), i = n(9046), a = r.CODE_POINTS;
        e.exports = class {
            constructor() {
                this.html = null, this.pos = -1, this.lastGapPos = -1, this.lastCharPos = -1, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = 65536
            }

            _err() {
            }

            _addGap() {
                this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos
            }

            _processSurrogate(e) {
                if (this.pos !== this.lastCharPos) {
                    let t = this.html.charCodeAt(this.pos + 1);
                    if (r.isSurrogatePair(t)) return this.pos++, this._addGap(), r.getSurrogatePairCodePoint(e, t)
                } else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, a.EOF;
                return this._err(i.surrogateInInputStream), e
            }

            dropParsedChunk() {
                this.pos > this.bufferWaterline && (this.lastCharPos -= this.pos, this.html = this.html.substring(this.pos), this.pos = 0, this.lastGapPos = -1, this.gapStack = [])
            }

            write(e, t) {
                this.html ? this.html += e : this.html = e, this.lastCharPos = this.html.length - 1, this.endOfChunkHit = !1, this.lastChunkWritten = t
            }

            insertHtmlAtCurrentPos(e) {
                this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1, this.html.length), this.lastCharPos = this.html.length - 1, this.endOfChunkHit = !1
            }

            advance() {
                if (this.pos++, this.pos > this.lastCharPos) return this.endOfChunkHit = !this.lastChunkWritten, a.EOF;
                let e = this.html.charCodeAt(this.pos);
                if (this.skipNextNewLine && e === a.LINE_FEED) return this.skipNextNewLine = !1, this._addGap(), this.advance();
                if (e === a.CARRIAGE_RETURN) return this.skipNextNewLine = !0, a.LINE_FEED;
                this.skipNextNewLine = !1, r.isSurrogate(e) && (e = this._processSurrogate(e));
                let t = e > 31 && e < 127 || e === a.LINE_FEED || e === a.CARRIAGE_RETURN || e > 159 && e < 64976;
                return t || this._checkForProblematicCharacters(e), e
            }

            _checkForProblematicCharacters(e) {
                r.isControlCodePoint(e) ? this._err(i.controlCharacterInInputStream) : r.isUndefinedCodePoint(e) && this._err(i.noncharacterInInputStream)
            }

            retreat() {
                this.pos === this.lastGapPos && (this.lastGapPos = this.gapStack.pop(), this.pos--), this.pos--
            }
        }
    }, 8491: function (e, t, n) {
        "use strict";
        let {DOCUMENT_MODE: r} = n(3707);
        t.createDocument = function () {
            return {nodeName: "#document", mode: r.NO_QUIRKS, childNodes: []}
        }, t.createDocumentFragment = function () {
            return {nodeName: "#document-fragment", childNodes: []}
        }, t.createElement = function (e, t, n) {
            return {nodeName: e, tagName: e, attrs: n, namespaceURI: t, childNodes: [], parentNode: null}
        }, t.createCommentNode = function (e) {
            return {nodeName: "#comment", data: e, parentNode: null}
        };
        let i = function (e) {
            return {nodeName: "#text", value: e, parentNode: null}
        }, a = t.appendChild = function (e, t) {
            e.childNodes.push(t), t.parentNode = e
        }, o = t.insertBefore = function (e, t, n) {
            let r = e.childNodes.indexOf(n);
            e.childNodes.splice(r, 0, t), t.parentNode = e
        };
        t.setTemplateContent = function (e, t) {
            e.content = t
        }, t.getTemplateContent = function (e) {
            return e.content
        }, t.setDocumentType = function (e, t, n, r) {
            let i = null;
            for (let t = 0; t < e.childNodes.length; t++) if ("#documentType" === e.childNodes[t].nodeName) {
                i = e.childNodes[t];
                break
            }
            i ? (i.name = t, i.publicId = n, i.systemId = r) : a(e, {
                nodeName: "#documentType",
                name: t,
                publicId: n,
                systemId: r
            })
        }, t.setDocumentMode = function (e, t) {
            e.mode = t
        }, t.getDocumentMode = function (e) {
            return e.mode
        }, t.detachNode = function (e) {
            if (e.parentNode) {
                let t = e.parentNode.childNodes.indexOf(e);
                e.parentNode.childNodes.splice(t, 1), e.parentNode = null
            }
        }, t.insertText = function (e, t) {
            if (e.childNodes.length) {
                let n = e.childNodes[e.childNodes.length - 1];
                if ("#text" === n.nodeName) {
                    n.value += t;
                    return
                }
            }
            a(e, i(t))
        }, t.insertTextBefore = function (e, t, n) {
            let r = e.childNodes[e.childNodes.indexOf(n) - 1];
            r && "#text" === r.nodeName ? r.value += t : o(e, i(t), n)
        }, t.adoptAttributes = function (e, t) {
            let n = [];
            for (let t = 0; t < e.attrs.length; t++) n.push(e.attrs[t].name);
            for (let r = 0; r < t.length; r++) -1 === n.indexOf(t[r].name) && e.attrs.push(t[r])
        }, t.getFirstChild = function (e) {
            return e.childNodes[0]
        }, t.getChildNodes = function (e) {
            return e.childNodes
        }, t.getParentNode = function (e) {
            return e.parentNode
        }, t.getAttrList = function (e) {
            return e.attrs
        }, t.getTagName = function (e) {
            return e.tagName
        }, t.getNamespaceURI = function (e) {
            return e.namespaceURI
        }, t.getTextNodeContent = function (e) {
            return e.value
        }, t.getCommentNodeContent = function (e) {
            return e.data
        }, t.getDocumentTypeNodeName = function (e) {
            return e.name
        }, t.getDocumentTypeNodePublicId = function (e) {
            return e.publicId
        }, t.getDocumentTypeNodeSystemId = function (e) {
            return e.systemId
        }, t.isTextNode = function (e) {
            return "#text" === e.nodeName
        }, t.isCommentNode = function (e) {
            return "#comment" === e.nodeName
        }, t.isDocumentTypeNode = function (e) {
            return "#documentType" === e.nodeName
        }, t.isElementNode = function (e) {
            return !!e.tagName
        }, t.setNodeSourceCodeLocation = function (e, t) {
            e.sourceCodeLocation = t
        }, t.getNodeSourceCodeLocation = function (e) {
            return e.sourceCodeLocation
        }, t.updateNodeSourceCodeLocation = function (e, t) {
            e.sourceCodeLocation = Object.assign(e.sourceCodeLocation, t)
        }
    }, 7169: function (e) {
        "use strict";
        e.exports = function (e, t) {
            return [e, t = t || Object.create(null)].reduce((e, t) => (Object.keys(t).forEach(n => {
                e[n] = t[n]
            }), e), Object.create(null))
        }
    }, 5930: function (e) {
        "use strict";

        class t {
            constructor(e) {
                let t = {}, n = this._getOverriddenMethods(this, t);
                for (let r of Object.keys(n)) "function" == typeof n[r] && (t[r] = e[r], e[r] = n[r])
            }

            _getOverriddenMethods() {
                throw Error("Not implemented")
            }
        }

        t.install = function (e, t, n) {
            e.__mixins || (e.__mixins = []);
            for (let n = 0; n < e.__mixins.length; n++) if (e.__mixins[n].constructor === t) return e.__mixins[n];
            let r = new t(e, n);
            return e.__mixins.push(r), r
        }, e.exports = t
    }, 7611: function (e, t, n) {
        "use strict";
        var r = n(6054);

        function i() {
        }

        function a() {
        }

        a.resetWarningCache = i, e.exports = function () {
            function e(e, t, n, i, a, o) {
                if (o !== r) {
                    var s = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s
                }
            }

            function t() {
                return e
            }

            e.isRequired = e;
            var n = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: a,
                resetWarningCache: i
            };
            return n.PropTypes = n, n
        }
    }, 9497: function (e, t, n) {
        e.exports = n(7611)()
    }, 6054: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, 9389: function (e, t) {
        "use strict";
        /**
         * @license React
         * react-is.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */var n, r = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"),
            o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"),
            c = Symbol.for("react.context"), u = Symbol.for("react.server_context"),
            d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"),
            h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), f = Symbol.for("react.lazy"),
            g = Symbol.for("react.offscreen");

        function E(e) {
            if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                    case r:
                        switch (e = e.type) {
                            case a:
                            case s:
                            case o:
                            case p:
                            case h:
                                return e;
                            default:
                                switch (e = e && e.$$typeof) {
                                    case u:
                                    case c:
                                    case d:
                                    case f:
                                    case m:
                                    case l:
                                        return e;
                                    default:
                                        return t
                                }
                        }
                    case i:
                        return t
                }
            }
        }

        n = Symbol.for("react.module.reference"), t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = d, t.Fragment = a, t.Lazy = f, t.Memo = m, t.Portal = i, t.Profiler = s, t.StrictMode = o, t.Suspense = p, t.SuspenseList = h, t.isAsyncMode = function () {
            return !1
        }, t.isConcurrentMode = function () {
            return !1
        }, t.isContextConsumer = function (e) {
            return E(e) === c
        }, t.isContextProvider = function (e) {
            return E(e) === l
        }, t.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === r
        }, t.isForwardRef = function (e) {
            return E(e) === d
        }, t.isFragment = function (e) {
            return E(e) === a
        }, t.isLazy = function (e) {
            return E(e) === f
        }, t.isMemo = function (e) {
            return E(e) === m
        }, t.isPortal = function (e) {
            return E(e) === i
        }, t.isProfiler = function (e) {
            return E(e) === s
        }, t.isStrictMode = function (e) {
            return E(e) === o
        }, t.isSuspense = function (e) {
            return E(e) === p
        }, t.isSuspenseList = function (e) {
            return E(e) === h
        }, t.isValidElementType = function (e) {
            return "string" == typeof e || "function" == typeof e || e === a || e === s || e === o || e === p || e === h || e === g || "object" == typeof e && null !== e && (e.$$typeof === f || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === d || e.$$typeof === n || void 0 !== e.getModuleId)
        }, t.typeOf = E
    }, 9605: function (e, t, n) {
        "use strict";
        e.exports = n(9389)
    }, 2093: function (e, t, n) {
        var r = n(4645);

        function i(e, t) {
            var n, i, a, o = null;
            if (!e || "string" != typeof e) return o;
            for (var s = r(e), l = "function" == typeof t, c = 0, u = s.length; c < u; c++) i = (n = s[c]).property, a = n.value, l ? t(i, a, n) : a && (o || (o = {}), o[i] = a);
            return o
        }

        e.exports = i, e.exports.default = i
    }, 7848: function (e) {
        var t = {exports: {}};

        function n(e) {
            return e instanceof Map ? e.clear = e.delete = e.set = function () {
                throw Error("map is read-only")
            } : e instanceof Set && (e.add = e.clear = e.delete = function () {
                throw Error("set is read-only")
            }), Object.freeze(e), Object.getOwnPropertyNames(e).forEach(function (t) {
                var r = e[t];
                "object" != typeof r || Object.isFrozen(r) || n(r)
            }), e
        }

        t.exports = n, t.exports.default = n;

        class r {
            constructor(e) {
                void 0 === e.data && (e.data = {}), this.data = e.data, this.isMatchIgnored = !1
            }

            ignoreMatch() {
                this.isMatchIgnored = !0
            }
        }

        function i(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
        }

        function a(e, ...t) {
            let n = Object.create(null);
            for (let t in e) n[t] = e[t];
            return t.forEach(function (e) {
                for (let t in e) n[t] = e[t]
            }), n
        }

        let o = e => !!e.scope || e.sublanguage && e.language, s = (e, {prefix: t}) => {
            if (e.includes(".")) {
                let n = e.split(".");
                return [`${t}${n.shift()}`, ...n.map((e, t) => `${e}${"_".repeat(t + 1)}`)].join(" ")
            }
            return `${t}${e}`
        };

        class l {
            constructor(e, t) {
                this.buffer = "", this.classPrefix = t.classPrefix, e.walk(this)
            }

            addText(e) {
                this.buffer += i(e)
            }

            openNode(e) {
                if (!o(e)) return;
                let t = "";
                t = e.sublanguage ? `language-${e.language}` : s(e.scope, {prefix: this.classPrefix}), this.span(t)
            }

            closeNode(e) {
                o(e) && (this.buffer += "</span>")
            }

            value() {
                return this.buffer
            }

            span(e) {
                this.buffer += `<span class="${e}">`
            }
        }

        let c = (e = {}) => {
            let t = {children: []};
            return Object.assign(t, e), t
        };

        class u {
            constructor() {
                this.rootNode = c(), this.stack = [this.rootNode]
            }

            get top() {
                return this.stack[this.stack.length - 1]
            }

            get root() {
                return this.rootNode
            }

            add(e) {
                this.top.children.push(e)
            }

            openNode(e) {
                let t = c({scope: e});
                this.add(t), this.stack.push(t)
            }

            closeNode() {
                if (this.stack.length > 1) return this.stack.pop()
            }

            closeAllNodes() {
                for (; this.closeNode();) ;
            }

            toJSON() {
                return JSON.stringify(this.rootNode, null, 4)
            }

            walk(e) {
                return this.constructor._walk(e, this.rootNode)
            }

            static _walk(e, t) {
                return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach(t => this._walk(e, t)), e.closeNode(t)), e
            }

            static _collapse(e) {
                "string" != typeof e && e.children && (e.children.every(e => "string" == typeof e) ? e.children = [e.children.join("")] : e.children.forEach(e => {
                    u._collapse(e)
                }))
            }
        }

        class d extends u {
            constructor(e) {
                super(), this.options = e
            }

            addKeyword(e, t) {
                "" !== e && (this.openNode(t), this.addText(e), this.closeNode())
            }

            addText(e) {
                "" !== e && this.add(e)
            }

            addSublanguage(e, t) {
                let n = e.root;
                n.sublanguage = !0, n.language = t, this.add(n)
            }

            toHTML() {
                let e = new l(this, this.options);
                return e.value()
            }

            finalize() {
                return !0
            }
        }

        function p(e) {
            return e ? "string" == typeof e ? e : e.source : null
        }

        function h(e) {
            return g("(?=", e, ")")
        }

        function m(e) {
            return g("(?:", e, ")*")
        }

        function f(e) {
            return g("(?:", e, ")?")
        }

        function g(...e) {
            let t = e.map(e => p(e)).join("");
            return t
        }

        function E(...e) {
            let t = function (e) {
                let t = e[e.length - 1];
                return "object" == typeof t && t.constructor === Object ? (e.splice(e.length - 1, 1), t) : {}
            }(e), n = "(" + (t.capture ? "" : "?:") + e.map(e => p(e)).join("|") + ")";
            return n
        }

        function T(e) {
            return RegExp(e.toString() + "|").exec("").length - 1
        }

        let _ = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;

        function b(e, {joinWith: t}) {
            let n = 0;
            return e.map(e => {
                n += 1;
                let t = n, r = p(e), i = "";
                for (; r.length > 0;) {
                    let e = _.exec(r);
                    if (!e) {
                        i += r;
                        break
                    }
                    i += r.substring(0, e.index), r = r.substring(e.index + e[0].length), "\\" === e[0][0] && e[1] ? i += "\\" + String(Number(e[1]) + t) : (i += e[0], "(" === e[0] && n++)
                }
                return i
            }).map(e => `(${e})`).join(t)
        }

        let A = "[a-zA-Z]\\w*", y = "[a-zA-Z_]\\w*", N = "\\b\\d+(\\.\\d+)?",
            k = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", C = "\\b(0b[01]+)",
            S = (e = {}) => {
                let t = /^#![ ]*\//;
                return e.binary && (e.begin = g(t, /.*\b/, e.binary, /\b.*/)), a({
                    scope: "meta",
                    begin: t,
                    end: /$/,
                    relevance: 0,
                    "on:begin": (e, t) => {
                        0 !== e.index && t.ignoreMatch()
                    }
                }, e)
            }, O = {begin: "\\\\[\\s\\S]", relevance: 0}, x = function (e, t, n = {}) {
                let r = a({scope: "comment", begin: e, end: t, contains: []}, n);
                r.contains.push({
                    scope: "doctag",
                    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
                    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
                    excludeBegin: !0,
                    relevance: 0
                });
                let i = E("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/);
                return r.contains.push({begin: g(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}")}), r
            }, v = x("//", "$"), I = x("/\\*", "\\*/"), w = x("#", "$");
        var R = Object.freeze({
            __proto__: null,
            MATCH_NOTHING_RE: /\b\B/,
            IDENT_RE: A,
            UNDERSCORE_IDENT_RE: y,
            NUMBER_RE: N,
            C_NUMBER_RE: k,
            BINARY_NUMBER_RE: C,
            RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
            SHEBANG: S,
            BACKSLASH_ESCAPE: O,
            APOS_STRING_MODE: {scope: "string", begin: "'", end: "'", illegal: "\\n", contains: [O]},
            QUOTE_STRING_MODE: {scope: "string", begin: '"', end: '"', illegal: "\\n", contains: [O]},
            PHRASAL_WORDS_MODE: {begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},
            COMMENT: x,
            C_LINE_COMMENT_MODE: v,
            C_BLOCK_COMMENT_MODE: I,
            HASH_COMMENT_MODE: w,
            NUMBER_MODE: {scope: "number", begin: N, relevance: 0},
            C_NUMBER_MODE: {scope: "number", begin: k, relevance: 0},
            BINARY_NUMBER_MODE: {scope: "number", begin: C, relevance: 0},
            REGEXP_MODE: {
                begin: /(?=\/[^/\n]*\/)/,
                contains: [{
                    scope: "regexp",
                    begin: /\//,
                    end: /\/[gimuy]*/,
                    illegal: /\n/,
                    contains: [O, {begin: /\[/, end: /\]/, relevance: 0, contains: [O]}]
                }]
            },
            TITLE_MODE: {scope: "title", begin: A, relevance: 0},
            UNDERSCORE_TITLE_MODE: {scope: "title", begin: y, relevance: 0},
            METHOD_GUARD: {begin: "\\.\\s*" + y, relevance: 0},
            END_SAME_AS_BEGIN: function (e) {
                return Object.assign(e, {
                    "on:begin": (e, t) => {
                        t.data._beginMatch = e[1]
                    }, "on:end": (e, t) => {
                        t.data._beginMatch !== e[1] && t.ignoreMatch()
                    }
                })
            }
        });

        function M(e, t) {
            let n = e.input[e.index - 1];
            "." === n && t.ignoreMatch()
        }

        function L(e, t) {
            void 0 !== e.className && (e.scope = e.className, delete e.className)
        }

        function D(e, t) {
            t && e.beginKeywords && (e.begin = "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", e.__beforeBegin = M, e.keywords = e.keywords || e.beginKeywords, delete e.beginKeywords, void 0 === e.relevance && (e.relevance = 0))
        }

        function P(e, t) {
            Array.isArray(e.illegal) && (e.illegal = E(...e.illegal))
        }

        function F(e, t) {
            if (e.match) {
                if (e.begin || e.end) throw Error("begin & end are not supported with match");
                e.begin = e.match, delete e.match
            }
        }

        function H(e, t) {
            void 0 === e.relevance && (e.relevance = 1)
        }

        let B = (e, t) => {
            if (!e.beforeMatch) return;
            if (e.starts) throw Error("beforeMatch cannot be used with starts");
            let n = Object.assign({}, e);
            Object.keys(e).forEach(t => {
                delete e[t]
            }), e.keywords = n.keywords, e.begin = g(n.beforeMatch, h(n.begin)), e.starts = {
                relevance: 0,
                contains: [Object.assign(n, {endsParent: !0})]
            }, e.relevance = 0, delete n.beforeMatch
        }, U = ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"], K = {}, G = e => {
            console.error(e)
        }, z = (e, ...t) => {
            console.log(`WARN: ${e}`, ...t)
        }, j = (e, t) => {
            K[`${e}/${t}`] || (console.log(`Deprecated as of ${e}. ${t}`), K[`${e}/${t}`] = !0)
        }, $ = Error();

        function q(e, t, {key: n}) {
            let r = 0, i = e[n], a = {}, o = {};
            for (let e = 1; e <= t.length; e++) o[e + r] = i[e], a[e + r] = !0, r += T(t[e - 1]);
            e[n] = o, e[n]._emit = a, e[n]._multi = !0
        }

        function W(e) {
            var t;
            (t = e).scope && "object" == typeof t.scope && null !== t.scope && (t.beginScope = t.scope, delete t.scope), "string" == typeof e.beginScope && (e.beginScope = {_wrap: e.beginScope}), "string" == typeof e.endScope && (e.endScope = {_wrap: e.endScope}), function (e) {
                if (Array.isArray(e.begin)) {
                    if (e.skip || e.excludeBegin || e.returnBegin) throw G("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), $;
                    if ("object" != typeof e.beginScope || null === e.beginScope) throw G("beginScope must be object"), $;
                    q(e, e.begin, {key: "beginScope"}), e.begin = b(e.begin, {joinWith: ""})
                }
            }(e), function (e) {
                if (Array.isArray(e.end)) {
                    if (e.skip || e.excludeEnd || e.returnEnd) throw G("skip, excludeEnd, returnEnd not compatible with endScope: {}"), $;
                    if ("object" != typeof e.endScope || null === e.endScope) throw G("endScope must be object"), $;
                    q(e, e.end, {key: "endScope"}), e.end = b(e.end, {joinWith: ""})
                }
            }(e)
        }

        class Y extends Error {
            constructor(e, t) {
                super(e), this.name = "HTMLInjectionError", this.html = t
            }
        }

        let Q = Symbol("nomatch");
        var V = function (e) {
            let n = Object.create(null), o = Object.create(null), s = [], l = !0,
                c = "Could not find the language '{}', did you forget to load/include a language module?",
                u = {disableAutodetect: !0, name: "Plain text", contains: []}, _ = {
                    ignoreUnescapedHTML: !1,
                    throwUnescapedHTML: !1,
                    noHighlightRe: /^(no-?highlight)$/i,
                    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                    classPrefix: "hljs-",
                    cssSelector: "pre code",
                    languages: null,
                    __emitter: d
                };

            function A(e) {
                return _.noHighlightRe.test(e)
            }

            function y(e, t, n) {
                let r = "", i = "";
                "object" == typeof t ? (r = e, n = t.ignoreIllegals, i = t.language) : (j("10.7.0", "highlight(lang, code, ...args) has been deprecated."), j("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), i = e, r = t), void 0 === n && (n = !0);
                let a = {code: r, language: i};
                M("before:highlight", a);
                let o = a.result ? a.result : N(a.language, a.code, n);
                return o.code = a.code, M("after:highlight", o), o
            }

            function N(e, t, o, s) {
                let u = Object.create(null);

                function d() {
                    if (!S.keywords) {
                        x.addText(I);
                        return
                    }
                    let e = 0;
                    S.keywordPatternRe.lastIndex = 0;
                    let t = S.keywordPatternRe.exec(I), n = "";
                    for (; t;) {
                        n += I.substring(e, t.index);
                        let r = A.case_insensitive ? t[0].toLowerCase() : t[0], i = S.keywords[r];
                        if (i) {
                            let [e, a] = i;
                            if (x.addText(n), n = "", u[r] = (u[r] || 0) + 1, u[r] <= 7 && (w += a), e.startsWith("_")) n += t[0]; else {
                                let n = A.classNameAliases[e] || e;
                                x.addKeyword(t[0], n)
                            }
                        } else n += t[0];
                        e = S.keywordPatternRe.lastIndex, t = S.keywordPatternRe.exec(I)
                    }
                    n += I.substring(e), x.addText(n)
                }

                function h() {
                    null != S.subLanguage ? function () {
                        if ("" === I) return;
                        let e = null;
                        if ("string" == typeof S.subLanguage) {
                            if (!n[S.subLanguage]) {
                                x.addText(I);
                                return
                            }
                            e = N(S.subLanguage, I, !0, O[S.subLanguage]), O[S.subLanguage] = e._top
                        } else e = k(I, S.subLanguage.length ? S.subLanguage : null);
                        S.relevance > 0 && (w += e.relevance), x.addSublanguage(e._emitter, e.language)
                    }() : d(), I = ""
                }

                function m(e, t) {
                    let n = 1, r = t.length - 1;
                    for (; n <= r;) {
                        if (!e._emit[n]) {
                            n++;
                            continue
                        }
                        let r = A.classNameAliases[e[n]] || e[n], i = t[n];
                        r ? x.addKeyword(i, r) : (I = i, d(), I = ""), n++
                    }
                }

                function f(e, t) {
                    return e.scope && "string" == typeof e.scope && x.openNode(A.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (x.addKeyword(I, A.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), I = "") : e.beginScope._multi && (m(e.beginScope, t), I = "")), S = Object.create(e, {parent: {value: S}})
                }

                let g = {};

                function E(n, i) {
                    let a = i && i[0];
                    if (I += n, null == a) return h(), 0;
                    if ("begin" === g.type && "end" === i.type && g.index === i.index && "" === a) {
                        if (I += t.slice(i.index, i.index + 1), !l) {
                            let t = Error(`0 width match regex (${e})`);
                            throw t.languageName = e, t.badRule = g.rule, t
                        }
                        return 1
                    }
                    if (g = i, "begin" === i.type) return function (e) {
                        let t = e[0], n = e.rule, i = new r(n), a = [n.__beforeBegin, n["on:begin"]];
                        for (let n of a) if (n && (n(e, i), i.isMatchIgnored)) return 0 === S.matcher.regexIndex ? (I += t[0], 1) : (K = !0, 0);
                        return n.skip ? I += t : (n.excludeBegin && (I += t), h(), n.returnBegin || n.excludeBegin || (I = t)), f(n, e), n.returnBegin ? 0 : t.length
                    }(i);
                    if ("illegal" !== i.type || o) {
                        if ("end" === i.type) {
                            let e = function (e) {
                                let n = e[0], i = t.substring(e.index), a = function e(t, n, i) {
                                    let a = function (e, t) {
                                        let n = e && e.exec(t);
                                        return n && 0 === n.index
                                    }(t.endRe, i);
                                    if (a) {
                                        if (t["on:end"]) {
                                            let e = new r(t);
                                            t["on:end"](n, e), e.isMatchIgnored && (a = !1)
                                        }
                                        if (a) {
                                            for (; t.endsParent && t.parent;) t = t.parent;
                                            return t
                                        }
                                    }
                                    if (t.endsWithParent) return e(t.parent, n, i)
                                }(S, e, i);
                                if (!a) return Q;
                                let o = S;
                                S.endScope && S.endScope._wrap ? (h(), x.addKeyword(n, S.endScope._wrap)) : S.endScope && S.endScope._multi ? (h(), m(S.endScope, e)) : o.skip ? I += n : (o.returnEnd || o.excludeEnd || (I += n), h(), o.excludeEnd && (I = n));
                                do S.scope && x.closeNode(), S.skip || S.subLanguage || (w += S.relevance), S = S.parent; while (S !== a.parent);
                                return a.starts && f(a.starts, e), o.returnEnd ? 0 : n.length
                            }(i);
                            if (e !== Q) return e
                        }
                    } else {
                        let e = Error('Illegal lexeme "' + a + '" for mode "' + (S.scope || "<unnamed>") + '"');
                        throw e.mode = S, e
                    }
                    if ("illegal" === i.type && "" === a) return 1;
                    if (M > 1e5 && M > 3 * i.index) {
                        let e = Error("potential infinite loop, way more iterations than matches");
                        throw e
                    }
                    return I += a, a.length
                }

                let A = v(e);
                if (!A) throw G(c.replace("{}", e)), Error('Unknown language: "' + e + '"');
                let y = function (e) {
                    function t(t, n) {
                        return RegExp(p(t), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (n ? "g" : ""))
                    }

                    class n {
                        constructor() {
                            this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0
                        }

                        addRule(e, t) {
                            t.position = this.position++, this.matchIndexes[this.matchAt] = t, this.regexes.push([t, e]), this.matchAt += T(e) + 1
                        }

                        compile() {
                            0 === this.regexes.length && (this.exec = () => null);
                            let e = this.regexes.map(e => e[1]);
                            this.matcherRe = t(b(e, {joinWith: "|"}), !0), this.lastIndex = 0
                        }

                        exec(e) {
                            this.matcherRe.lastIndex = this.lastIndex;
                            let t = this.matcherRe.exec(e);
                            if (!t) return null;
                            let n = t.findIndex((e, t) => t > 0 && void 0 !== e), r = this.matchIndexes[n];
                            return t.splice(0, n), Object.assign(t, r)
                        }
                    }

                    class r {
                        constructor() {
                            this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0
                        }

                        getMatcher(e) {
                            if (this.multiRegexes[e]) return this.multiRegexes[e];
                            let t = new n;
                            return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), this.multiRegexes[e] = t, t
                        }

                        resumingScanAtSamePosition() {
                            return 0 !== this.regexIndex
                        }

                        considerAll() {
                            this.regexIndex = 0
                        }

                        addRule(e, t) {
                            this.rules.push([e, t]), "begin" === t.type && this.count++
                        }

                        exec(e) {
                            let t = this.getMatcher(this.regexIndex);
                            t.lastIndex = this.lastIndex;
                            let n = t.exec(e);
                            if (this.resumingScanAtSamePosition()) {
                                if (n && n.index === this.lastIndex) ; else {
                                    let t = this.getMatcher(0);
                                    t.lastIndex = this.lastIndex + 1, n = t.exec(e)
                                }
                            }
                            return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && this.considerAll()), n
                        }
                    }

                    if (e.compilerExtensions || (e.compilerExtensions = []), e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
                    return e.classNameAliases = a(e.classNameAliases || {}), function n(i, o) {
                        let s = i;
                        if (i.isCompiled) return s;
                        [L, F, W, B].forEach(e => e(i, o)), e.compilerExtensions.forEach(e => e(i, o)), i.__beforeBegin = null, [D, P, H].forEach(e => e(i, o)), i.isCompiled = !0;
                        let l = null;
                        return "object" == typeof i.keywords && i.keywords.$pattern && (i.keywords = Object.assign({}, i.keywords), l = i.keywords.$pattern, delete i.keywords.$pattern), l = l || /\w+/, i.keywords && (i.keywords = function e(t, n, r = "keyword") {
                            let i = Object.create(null);
                            return "string" == typeof t ? a(r, t.split(" ")) : Array.isArray(t) ? a(r, t) : Object.keys(t).forEach(function (r) {
                                Object.assign(i, e(t[r], n, r))
                            }), i;

                            function a(e, t) {
                                n && (t = t.map(e => e.toLowerCase())), t.forEach(function (t) {
                                    var n, r;
                                    let a = t.split("|");
                                    i[a[0]] = [e, (n = a[0], (r = a[1]) ? Number(r) : U.includes(n.toLowerCase()) ? 0 : 1)]
                                })
                            }
                        }(i.keywords, e.case_insensitive)), s.keywordPatternRe = t(l, !0), o && (i.begin || (i.begin = /\B|\b/), s.beginRe = t(s.begin), i.end || i.endsWithParent || (i.end = /\B|\b/), i.end && (s.endRe = t(s.end)), s.terminatorEnd = p(s.end) || "", i.endsWithParent && o.terminatorEnd && (s.terminatorEnd += (i.end ? "|" : "") + o.terminatorEnd)), i.illegal && (s.illegalRe = t(i.illegal)), i.contains || (i.contains = []), i.contains = [].concat(...i.contains.map(function (e) {
                            var t;
                            return ((t = "self" === e ? i : e).variants && !t.cachedVariants && (t.cachedVariants = t.variants.map(function (e) {
                                return a(t, {variants: null}, e)
                            })), t.cachedVariants) ? t.cachedVariants : !function e(t) {
                                return !!t && (t.endsWithParent || e(t.starts))
                            }(t) ? Object.isFrozen(t) ? a(t) : t : a(t, {starts: t.starts ? a(t.starts) : null})
                        })), i.contains.forEach(function (e) {
                            n(e, s)
                        }), i.starts && n(i.starts, o), s.matcher = function (e) {
                            let t = new r;
                            return e.contains.forEach(e => t.addRule(e.begin, {
                                rule: e,
                                type: "begin"
                            })), e.terminatorEnd && t.addRule(e.terminatorEnd, {type: "end"}), e.illegal && t.addRule(e.illegal, {type: "illegal"}), t
                        }(s), s
                    }(e)
                }(A), C = "", S = s || y, O = {}, x = new _.__emitter(_);
                !function () {
                    let e = [];
                    for (let t = S; t !== A; t = t.parent) t.scope && e.unshift(t.scope);
                    e.forEach(e => x.openNode(e))
                }();
                let I = "", w = 0, R = 0, M = 0, K = !1;
                try {
                    for (S.matcher.considerAll(); ;) {
                        M++, K ? K = !1 : S.matcher.considerAll(), S.matcher.lastIndex = R;
                        let e = S.matcher.exec(t);
                        if (!e) break;
                        let n = t.substring(R, e.index), r = E(n, e);
                        R = e.index + r
                    }
                    return E(t.substring(R)), x.closeAllNodes(), x.finalize(), C = x.toHTML(), {
                        language: e,
                        value: C,
                        relevance: w,
                        illegal: !1,
                        _emitter: x,
                        _top: S
                    }
                } catch (n) {
                    if (n.message && n.message.includes("Illegal")) return {
                        language: e,
                        value: i(t),
                        illegal: !0,
                        relevance: 0,
                        _illegalBy: {
                            message: n.message,
                            index: R,
                            context: t.slice(R - 100, R + 100),
                            mode: n.mode,
                            resultSoFar: C
                        },
                        _emitter: x
                    };
                    if (l) return {
                        language: e,
                        value: i(t),
                        illegal: !1,
                        relevance: 0,
                        errorRaised: n,
                        _emitter: x,
                        _top: S
                    };
                    throw n
                }
            }

            function k(e, t) {
                t = t || _.languages || Object.keys(n);
                let r = function (e) {
                    let t = {value: i(e), illegal: !1, relevance: 0, _top: u, _emitter: new _.__emitter(_)};
                    return t._emitter.addText(e), t
                }(e), a = t.filter(v).filter(w).map(t => N(t, e, !1));
                a.unshift(r);
                let o = a.sort((e, t) => {
                    if (e.relevance !== t.relevance) return t.relevance - e.relevance;
                    if (e.language && t.language) {
                        if (v(e.language).supersetOf === t.language) return 1;
                        if (v(t.language).supersetOf === e.language) return -1
                    }
                    return 0
                }), [s, l] = o, c = s;
                return c.secondBest = l, c
            }

            function C(e) {
                let t = null, n = function (e) {
                    let t = e.className + " ";
                    t += e.parentNode ? e.parentNode.className : "";
                    let n = _.languageDetectRe.exec(t);
                    if (n) {
                        let t = v(n[1]);
                        return t || (z(c.replace("{}", n[1])), z("Falling back to no-highlight mode for this block.", e)), t ? n[1] : "no-highlight"
                    }
                    return t.split(/\s+/).find(e => A(e) || v(e))
                }(e);
                if (A(n)) return;
                if (M("before:highlightElement", {
                    el: e,
                    language: n
                }), e.children.length > 0 && (_.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), _.throwUnescapedHTML)) {
                    let t = new Y("One of your code blocks includes unescaped HTML.", e.innerHTML);
                    throw t
                }
                t = e;
                let r = t.textContent, i = n ? y(r, {language: n, ignoreIllegals: !0}) : k(r);
                e.innerHTML = i.value, function (e, t, n) {
                    let r = t && o[t] || n;
                    e.classList.add("hljs"), e.classList.add(`language-${r}`)
                }(e, n, i.language), e.result = {
                    language: i.language,
                    re: i.relevance,
                    relevance: i.relevance
                }, i.secondBest && (e.secondBest = {
                    language: i.secondBest.language,
                    relevance: i.secondBest.relevance
                }), M("after:highlightElement", {el: e, result: i, text: r})
            }

            let S = () => {
                x(), j("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.")
            }, O = !1;

            function x() {
                if ("loading" === document.readyState) {
                    O = !0;
                    return
                }
                let e = document.querySelectorAll(_.cssSelector);
                e.forEach(C)
            }

            function v(e) {
                return n[e = (e || "").toLowerCase()] || n[o[e]]
            }

            function I(e, {languageName: t}) {
                "string" == typeof e && (e = [e]), e.forEach(e => {
                    o[e.toLowerCase()] = t
                })
            }

            function w(e) {
                let t = v(e);
                return t && !t.disableAutodetect
            }

            function M(e, t) {
                s.forEach(function (n) {
                    n[e] && n[e](t)
                })
            }

            for (let r in "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", function () {
                O && x()
            }, !1), Object.assign(e, {
                highlight: y, highlightAuto: k, highlightAll: x, highlightElement: C, highlightBlock: function (e) {
                    return j("10.7.0", "highlightBlock will be removed entirely in v12.0"), j("10.7.0", "Please use highlightElement now."), C(e)
                }, configure: function (e) {
                    _ = a(_, e)
                }, initHighlighting: S, initHighlightingOnLoad: function () {
                    x(), j("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.")
                }, registerLanguage: function (t, r) {
                    let i = null;
                    try {
                        i = r(e)
                    } catch (e) {
                        if (G("Language definition for '{}' could not be registered.".replace("{}", t)), l) G(e); else throw e;
                        i = u
                    }
                    i.name || (i.name = t), n[t] = i, i.rawDefinition = r.bind(null, e), i.aliases && I(i.aliases, {languageName: t})
                }, unregisterLanguage: function (e) {
                    for (let t of (delete n[e], Object.keys(o))) o[t] === e && delete o[t]
                }, listLanguages: function () {
                    return Object.keys(n)
                }, getLanguage: v, registerAliases: I, autoDetection: w, inherit: a, addPlugin: function (e) {
                    var t;
                    (t = e)["before:highlightBlock"] && !t["before:highlightElement"] && (t["before:highlightElement"] = e => {
                        t["before:highlightBlock"](Object.assign({block: e.el}, e))
                    }), t["after:highlightBlock"] && !t["after:highlightElement"] && (t["after:highlightElement"] = e => {
                        t["after:highlightBlock"](Object.assign({block: e.el}, e))
                    }), s.push(e)
                }
            }), e.debugMode = function () {
                l = !1
            }, e.safeMode = function () {
                l = !0
            }, e.versionString = "11.7.0", e.regex = {
                concat: g,
                lookahead: h,
                either: E,
                optional: f,
                anyNumberOfTimes: m
            }, R) "object" == typeof R[r] && t.exports(R[r]);
            return Object.assign(e, R), e
        }({});
        e.exports = V, V.HighlightJS = V, V.default = V
    }
}]);