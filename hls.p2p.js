! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Hls = t() : e.Hls = t()
}("undefined" != typeof self ? self : this, function() {
    return e = {}, d.m = c = [function(e, t) {
        function n() {
            this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
        }

        function l(e) {
            return "function" == typeof e
        }

        function u(e) {
            return "object" == typeof e && null !== e
        }

        function c(e) {
            return void 0 === e
        }((e.exports = n).EventEmitter = n).prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) {
            if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e, this
        }, n.prototype.emit = function(e) {
            var t, r, n, i, a, o;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || u(this._events.error) && !this._events.error.length)) {
                if ((t = arguments[1]) instanceof Error) throw t;
                var s = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw s.context = t, s
            }
            if (c(r = this._events[e])) return !1;
            if (l(r)) switch (arguments.length) {
                case 1:
                    r.call(this);
                    break;
                case 2:
                    r.call(this, arguments[1]);
                    break;
                case 3:
                    r.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    i = Array.prototype.slice.call(arguments, 1), r.apply(this, i)
            } else if (u(r))
                for (i = Array.prototype.slice.call(arguments, 1), n = (o = r.slice()).length, a = 0; a < n; a++) o[a].apply(this, i);
            return !0
        }, n.prototype.on = n.prototype.addListener = function(e, t) {
            var r;
            if (!l(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, l(t.listener) ? t.listener : t), this._events[e] ? u(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, u(this._events[e]) && !this._events[e].warned && (r = c(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && 0 < r && this._events[e].length > r && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
        }, n.prototype.once = function(e, t) {
            function r() {
                this.removeListener(e, r), n || (n = !0, t.apply(this, arguments))
            }
            if (!l(t)) throw TypeError("listener must be a function");
            var n = !1;
            return r.listener = t, this.on(e, r), this
        }, n.prototype.removeListener = function(e, t) {
            var r, n, i, a;
            if (!l(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (i = (r = this._events[e]).length, n = -1, r === t || l(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
            else if (u(r)) {
                for (a = i; 0 < a--;)
                    if (r[a] === t || r[a].listener && r[a].listener === t) {
                        n = a;
                        break
                    } if (n < 0) return this;
                1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        }, n.prototype.removeAllListeners = function(e) {
            var t, r;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
            if (0 === arguments.length) {
                for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"), this._events = {}, this
            }
            if (l(r = this._events[e])) this.removeListener(e, r);
            else if (r)
                for (; r.length;) this.removeListener(e, r[r.length - 1]);
            return delete this._events[e], this
        }, n.prototype.listeners = function(e) {
            return this._events && this._events[e] ? l(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        }, n.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (l(t)) return 1;
                if (t) return t.length
            }
            return 0
        }, n.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    }, function(e, a, t) {
        "use strict";
        (function(e) {
            var t, r, n, i, m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            i = function() {
                return i = {}, n.m = r = [function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = {
                        DC_PING: "PING",
                        DC_PONG: "PONG",
                        DC_SIGNAL: "SIGNAL",
                        DC_OPEN: "OPEN",
                        DC_REQUEST: "REQUEST",
                        DC_PIECE_NOT_FOUND: "PIECE_NOT_FOUND",
                        DC_CLOSE: "CLOSE",
                        DC_RESPONSE: "RESPONSE",
                        DC_ERROR: "ERROR",
                        DC_PIECE: "PIECE",
                        DC_TIMEOUT: "TIMEOUT",
                        DC_PIECE_ACK: "PIECE_ACK",
                        DC_BITFIELD: "BITFIELD",
                        DC_CHOKE: "CHOKE",
                        DC_UNCHOKE: "UNCHOKE",
                        DC_USELESS: "USELESS",
                        DC_HAVE: "HAVE",
                        DC_LOST: "LOST",
                        BM_LOST: "lost",
                        FRAG_CHANGED: "FRAG_CHANGED",
                        FRAG_LOADED: "FRAG_LOADED",
                        FRAG_LOADING: "FRAG_LOADING",
                        RESTART_P2P: "RESTART_P2P"
                    }, e.exports = t.default
                }, function(e, t) {
                    e.exports = function(e) {
                        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                            enumerable: !0,
                            get: function() {
                                return e.l
                            }
                        }), Object.defineProperty(e, "id", {
                            enumerable: !0,
                            get: function() {
                                return e.i
                            }
                        }), e.webpackPolyfill = 1), e
                    }
                }, function(e, t, r) {
                    var n;

                    function d(e, t) {
                        var r = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
                    }

                    function s(e, t, r, n, i, a) {
                        return d((o = d(d(t, e), d(n, a))) << (s = i) | o >>> 32 - s, r);
                        var o, s
                    }

                    function f(e, t, r, n, i, a, o) {
                        return s(t & r | ~t & n, e, t, i, a, o)
                    }

                    function h(e, t, r, n, i, a, o) {
                        return s(t & n | r & ~n, e, t, i, a, o)
                    }

                    function g(e, t, r, n, i, a, o) {
                        return s(t ^ r ^ n, e, t, i, a, o)
                    }

                    function p(e, t, r, n, i, a, o) {
                        return s(r ^ (t | ~n), e, t, i, a, o)
                    }

                    function l(e, t) {
                        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                        var r, n, i, a, o, s = 1732584193,
                            l = -271733879,
                            u = -1732584194,
                            c = 271733878;
                        for (r = 0; r < e.length; r += 16) s = f(n = s, i = l, a = u, o = c, e[r], 7, -680876936), c = f(c, s, l, u, e[r + 1], 12, -389564586), u = f(u, c, s, l, e[r + 2], 17, 606105819), l = f(l, u, c, s, e[r + 3], 22, -1044525330), s = f(s, l, u, c, e[r + 4], 7, -176418897), c = f(c, s, l, u, e[r + 5], 12, 1200080426), u = f(u, c, s, l, e[r + 6], 17, -1473231341), l = f(l, u, c, s, e[r + 7], 22, -45705983), s = f(s, l, u, c, e[r + 8], 7, 1770035416), c = f(c, s, l, u, e[r + 9], 12, -1958414417), u = f(u, c, s, l, e[r + 10], 17, -42063), l = f(l, u, c, s, e[r + 11], 22, -1990404162), s = f(s, l, u, c, e[r + 12], 7, 1804603682), c = f(c, s, l, u, e[r + 13], 12, -40341101), u = f(u, c, s, l, e[r + 14], 17, -1502002290), s = h(s, l = f(l, u, c, s, e[r + 15], 22, 1236535329), u, c, e[r + 1], 5, -165796510), c = h(c, s, l, u, e[r + 6], 9, -1069501632), u = h(u, c, s, l, e[r + 11], 14, 643717713), l = h(l, u, c, s, e[r], 20, -373897302), s = h(s, l, u, c, e[r + 5], 5, -701558691), c = h(c, s, l, u, e[r + 10], 9, 38016083), u = h(u, c, s, l, e[r + 15], 14, -660478335), l = h(l, u, c, s, e[r + 4], 20, -405537848), s = h(s, l, u, c, e[r + 9], 5, 568446438), c = h(c, s, l, u, e[r + 14], 9, -1019803690), u = h(u, c, s, l, e[r + 3], 14, -187363961), l = h(l, u, c, s, e[r + 8], 20, 1163531501), s = h(s, l, u, c, e[r + 13], 5, -1444681467), c = h(c, s, l, u, e[r + 2], 9, -51403784), u = h(u, c, s, l, e[r + 7], 14, 1735328473), s = g(s, l = h(l, u, c, s, e[r + 12], 20, -1926607734), u, c, e[r + 5], 4, -378558), c = g(c, s, l, u, e[r + 8], 11, -2022574463), u = g(u, c, s, l, e[r + 11], 16, 1839030562), l = g(l, u, c, s, e[r + 14], 23, -35309556), s = g(s, l, u, c, e[r + 1], 4, -1530992060), c = g(c, s, l, u, e[r + 4], 11, 1272893353), u = g(u, c, s, l, e[r + 7], 16, -155497632), l = g(l, u, c, s, e[r + 10], 23, -1094730640), s = g(s, l, u, c, e[r + 13], 4, 681279174), c = g(c, s, l, u, e[r], 11, -358537222), u = g(u, c, s, l, e[r + 3], 16, -722521979), l = g(l, u, c, s, e[r + 6], 23, 76029189), s = g(s, l, u, c, e[r + 9], 4, -640364487), c = g(c, s, l, u, e[r + 12], 11, -421815835), u = g(u, c, s, l, e[r + 15], 16, 530742520), s = p(s, l = g(l, u, c, s, e[r + 2], 23, -995338651), u, c, e[r], 6, -198630844), c = p(c, s, l, u, e[r + 7], 10, 1126891415), u = p(u, c, s, l, e[r + 14], 15, -1416354905), l = p(l, u, c, s, e[r + 5], 21, -57434055), s = p(s, l, u, c, e[r + 12], 6, 1700485571), c = p(c, s, l, u, e[r + 3], 10, -1894986606), u = p(u, c, s, l, e[r + 10], 15, -1051523), l = p(l, u, c, s, e[r + 1], 21, -2054922799), s = p(s, l, u, c, e[r + 8], 6, 1873313359), c = p(c, s, l, u, e[r + 15], 10, -30611744), u = p(u, c, s, l, e[r + 6], 15, -1560198380), l = p(l, u, c, s, e[r + 13], 21, 1309151649), s = p(s, l, u, c, e[r + 4], 6, -145523070), c = p(c, s, l, u, e[r + 11], 10, -1120210379), u = p(u, c, s, l, e[r + 2], 15, 718787259), l = p(l, u, c, s, e[r + 9], 21, -343485551), s = d(s, n), l = d(l, i), u = d(u, a), c = d(c, o);
                        return [s, l, u, c]
                    }

                    function u(e) {
                        var t, r = "",
                            n = 32 * e.length;
                        for (t = 0; t < n; t += 8) r += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                        return r
                    }

                    function c(e) {
                        var t, r = [];
                        for (r[(e.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
                        var n = 8 * e.length;
                        for (t = 0; t < n; t += 8) r[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                        return r
                    }

                    function i(e) {
                        var t, r, n = "0123456789abcdef",
                            i = "";
                        for (r = 0; r < e.length; r += 1) t = e.charCodeAt(r), i += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
                        return i
                    }

                    function a(e) {
                        return unescape(encodeURIComponent(e))
                    }

                    function o(e) {
                        return u(l(c(t = a(e)), 8 * t.length));
                        var t
                    }

                    function v(e, t) {
                        return function(e, t) {
                            var r, n, i = c(e),
                                a = [],
                                o = [];
                            for (a[15] = o[15] = void 0, 16 < i.length && (i = l(i, 8 * e.length)), r = 0; r < 16; r += 1) a[r] = 909522486 ^ i[r], o[r] = 1549556828 ^ i[r];
                            return n = l(a.concat(c(t)), 512 + 8 * t.length), u(l(o.concat(n), 640))
                        }(a(e), a(t))
                    }

                    function m(e, t, r) {
                        return t ? r ? v(t, e) : i(v(t, e)) : r ? o(e) : i(o(e))
                    }
                    void 0 !== (n = function() {
                        return m
                    }.call(t, r, t, e)) && (e.exports = n)
                }, function(e, t, r) {
                    function n() {
                        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
                    }

                    function l(e) {
                        return "function" == typeof e
                    }

                    function u(e) {
                        return "object" === (void 0 === e ? "undefined" : i(e)) && null !== e
                    }

                    function c(e) {
                        return void 0 === e
                    }
                    var i = "function" == typeof Symbol && "symbol" == m(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : m(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : m(e)
                    };
                    ((e.exports = n).EventEmitter = n).prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function(e) {
                        if ("number" != typeof e || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
                        return this._maxListeners = e, this
                    }, n.prototype.emit = function(e) {
                        var t, r, n, i, a, o;
                        if (this._events || (this._events = {}), "error" === e && (!this._events.error || u(this._events.error) && !this._events.error.length)) {
                            if ((t = arguments[1]) instanceof Error) throw t;
                            var s = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                            throw s.context = t, s
                        }
                        if (c(r = this._events[e])) return !1;
                        if (l(r)) switch (arguments.length) {
                            case 1:
                                r.call(this);
                                break;
                            case 2:
                                r.call(this, arguments[1]);
                                break;
                            case 3:
                                r.call(this, arguments[1], arguments[2]);
                                break;
                            default:
                                i = Array.prototype.slice.call(arguments, 1), r.apply(this, i)
                        } else if (u(r))
                            for (i = Array.prototype.slice.call(arguments, 1), n = (o = r.slice()).length, a = 0; a < n; a++) o[a].apply(this, i);
                        return !0
                    }, n.prototype.on = n.prototype.addListener = function(e, t) {
                        var r;
                        if (!l(t)) throw TypeError("listener must be a function");
                        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, l(t.listener) ? t.listener : t), this._events[e] ? u(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, u(this._events[e]) && !this._events[e].warned && (r = c(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners) && 0 < r && this._events[e].length > r && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()), this
                    }, n.prototype.once = function(e, t) {
                        function r() {
                            this.removeListener(e, r), n || (n = !0, t.apply(this, arguments))
                        }
                        if (!l(t)) throw TypeError("listener must be a function");
                        var n = !1;
                        return r.listener = t, this.on(e, r), this
                    }, n.prototype.removeListener = function(e, t) {
                        var r, n, i, a;
                        if (!l(t)) throw TypeError("listener must be a function");
                        if (!this._events || !this._events[e]) return this;
                        if (i = (r = this._events[e]).length, n = -1, r === t || l(r.listener) && r.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
                        else if (u(r)) {
                            for (a = i; 0 < a--;)
                                if (r[a] === t || r[a].listener && r[a].listener === t) {
                                    n = a;
                                    break
                                } if (n < 0) return this;
                            1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t)
                        }
                        return this
                    }, n.prototype.removeAllListeners = function(e) {
                        var t, r;
                        if (!this._events) return this;
                        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
                        if (0 === arguments.length) {
                            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
                            return this.removeAllListeners("removeListener"), this._events = {}, this
                        }
                        if (l(r = this._events[e])) this.removeListener(e, r);
                        else if (r)
                            for (; r.length;) this.removeListener(e, r[r.length - 1]);
                        return delete this._events[e], this
                    }, n.prototype.listeners = function(e) {
                        return this._events && this._events[e] ? l(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
                    }, n.prototype.listenerCount = function(e) {
                        if (this._events) {
                            var t = this._events[e];
                            if (l(t)) return 1;
                            if (t) return t.length
                        }
                        return 0
                    }, n.listenerCount = function(e, t) {
                        return e.listenerCount(t)
                    }
                }, function(e, t, r) {
                    function o(e) {
                        if (g < e) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                        var t = new Uint8Array(e);
                        return t.__proto__ = s.prototype, t
                    }

                    function s(e, t, r) {
                        if ("number" != typeof e) return n(e, t, r);
                        if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                        return i(e)
                    }

                    function n(e, t, r) {
                        if ("string" == typeof e) return function(e, t) {
                            if ("string" == typeof t && "" !== t || (t = "utf8"), !s.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                            var r = 0 | c(e, t),
                                n = o(r),
                                i = n.write(e, t);
                            return i !== r && (n = n.slice(0, i)), n
                        }(e, t);
                        if (ArrayBuffer.isView(e)) return a(e);
                        if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === e ? "undefined" : h(e)));
                        if (f(e, ArrayBuffer) || e && f(e.buffer, ArrayBuffer)) return function(e, t, r) {
                            if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                            if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                            var n;
                            return (n = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r)).__proto__ = s.prototype, n
                        }(e, t, r);
                        if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                        var n = e.valueOf && e.valueOf();
                        if (null != n && n !== e) return s.from(n, t, r);
                        var i = function(e) {
                            if (s.isBuffer(e)) {
                                var t = 0 | u(e.length),
                                    r = o(t);
                                return 0 === r.length || e.copy(r, 0, 0, t), r
                            }
                            return void 0 !== e.length ? "number" != typeof e.length || function(e) {
                                return e != e
                            }(e.length) ? o(0) : a(e) : "Buffer" === e.type && Array.isArray(e.data) ? a(e.data) : void 0
                        }(e);
                        if (i) return i;
                        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return s.from(e[Symbol.toPrimitive]("string"), t, r);
                        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (void 0 === e ? "undefined" : h(e)))
                    }

                    function l(e) {
                        if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                        if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
                    }

                    function i(e) {
                        return l(e), o(e < 0 ? 0 : 0 | u(e))
                    }

                    function a(e) {
                        for (var t = e.length < 0 ? 0 : 0 | u(e.length), r = o(t), n = 0; n < t; n += 1) r[n] = 255 & e[n];
                        return r
                    }

                    function u(e) {
                        if (g <= e) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + g.toString(16) + " bytes");
                        return 0 | e
                    }

                    function c(e, t) {
                        if (s.isBuffer(e)) return e.length;
                        if (ArrayBuffer.isView(e) || f(e, ArrayBuffer)) return e.byteLength;
                        if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + (void 0 === e ? "undefined" : h(e)));
                        var r = e.length,
                            n = 2 < arguments.length && !0 === arguments[2];
                        if (!n && 0 === r) return 0;
                        for (var i = !1;;) switch (t) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return r;
                            case "utf8":
                            case "utf-8":
                                return d(e).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * r;
                            case "hex":
                                return r >>> 1;
                            default:
                                if (i) return n ? -1 : d(e).length;
                                t = ("" + t).toLowerCase(), i = !0
                        }
                    }

                    function d(e, t) {
                        t = t || 1 / 0;
                        for (var r, n = e.length, i = null, a = [], o = 0; o < n; ++o) {
                            if (55295 < (r = e.charCodeAt(o)) && r < 57344) {
                                if (!i) {
                                    if (56319 < r) {
                                        -1 < (t -= 3) && a.push(239, 191, 189);
                                        continue
                                    }
                                    if (o + 1 === n) {
                                        -1 < (t -= 3) && a.push(239, 191, 189);
                                        continue
                                    }
                                    i = r;
                                    continue
                                }
                                if (r < 56320) {
                                    -1 < (t -= 3) && a.push(239, 191, 189), i = r;
                                    continue
                                }
                                r = 65536 + (i - 55296 << 10 | r - 56320)
                            } else i && -1 < (t -= 3) && a.push(239, 191, 189);
                            if (i = null, r < 128) {
                                if (--t < 0) break;
                                a.push(r)
                            } else if (r < 2048) {
                                if ((t -= 2) < 0) break;
                                a.push(r >> 6 | 192, 63 & r | 128)
                            } else if (r < 65536) {
                                if ((t -= 3) < 0) break;
                                a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                            } else {
                                if (!(r < 1114112)) throw new Error("Invalid code point");
                                if ((t -= 4) < 0) break;
                                a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                            }
                        }
                        return a
                    }

                    function f(e, t) {
                        return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                    }
                    var h = "function" == typeof Symbol && "symbol" == m(Symbol.iterator) ? function(e) {
                        return void 0 === e ? "undefined" : m(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : m(e)
                    };
                    t.Buffer = s;
                    var g = 2147483647;
                    t.kMaxLength = g, (s.TYPED_ARRAY_SUPPORT = function() {
                        try {
                            var e = new Uint8Array(1);
                            return e.__proto__ = {
                                __proto__: Uint8Array.prototype,
                                foo: function() {
                                    return 42
                                }
                            }, 42 === e.foo()
                        } catch (e) {
                            return !1
                        }
                    }()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), "undefined" != typeof Symbol && null != Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
                        value: null,
                        configurable: !0,
                        enumerable: !1,
                        writable: !1
                    }), s.from = function(e, t, r) {
                        return n(e, t, r)
                    }, s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, s.alloc = function(e, t, r) {
                        return i = t, a = r, l(n = e), n <= 0 ? o(n) : void 0 !== i ? "string" == typeof a ? o(n).fill(i, a) : o(n).fill(i) : o(n);
                        var n, i, a
                    }, s.allocUnsafe = function(e) {
                        return i(e)
                    }, s.isBuffer = function(e) {
                        return null != e && !0 === e._isBuffer && e !== s.prototype
                    }, s.isEncoding = function(e) {
                        switch (String(e).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, s.concat = function(e, t) {
                        if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length) return s.alloc(0);
                        var r;
                        if (void 0 === t)
                            for (r = t = 0; r < e.length; ++r) t += e[r].length;
                        var n = s.allocUnsafe(t),
                            i = 0;
                        for (r = 0; r < e.length; ++r) {
                            var a = e[r];
                            if (f(a, Uint8Array) && (a = s.from(a)), !s.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                            a.copy(n, i), i += a.length
                        }
                        return n
                    }, s.byteLength = c, s.prototype._isBuffer = !0, s.prototype.copy = function(e, t, r, n) {
                        if (!s.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                        if (r = r || 0, n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t = t || 0, 0 < n && n < r && (n = r), n === r) return 0;
                        if (0 === e.length || 0 === this.length) return 0;
                        if (t < 0) throw new RangeError("targetStart out of bounds");
                        if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                        if (n < 0) throw new RangeError("sourceEnd out of bounds");
                        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                        var i = n - r;
                        if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, n);
                        else if (this === e && r < t && t < n)
                            for (var a = i - 1; 0 <= a; --a) e[a + t] = this[a + r];
                        else Uint8Array.prototype.set.call(e, this.subarray(r, n), t);
                        return i
                    }
                }, function(e, t, r) {
                    function n(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.getPeersThrottle = t.getBrowserRTC = t.Buffer = t.Fetcher = t.Events = t.DataChannel = void 0;
                    var i = n(r(6)),
                        a = n(r(0)),
                        o = n(r(9)),
                        s = n(r(11)),
                        l = n(r(12)),
                        u = r(4).Buffer;
                    t.DataChannel = i.default, t.Events = a.default, t.Fetcher = o.default, t.Buffer = u, t.getBrowserRTC = s.default, t.getPeersThrottle = l.default
                }, function(e, u, c) {
                    (function(e) {
                        function t(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }
                        var r, i = ["Y29uY2F0", "cmVwb3J0RENUcmFmZmlj", "YnVmZmVy", "RENfUkVTUE9OU0U=", "YnVmU04=", "IG5vdCBlcXVhbCB0byBieXRlTGVuZ3RoIA==", "ZGF0YWNoYW5uZWwgZmluaXNoIGRvd25sb2FkaW5nIA==", "bG9hZHRpbWVvdXQ=", "ZGF0YWNoYW5uZWwgdGltZW91dCB3aGlsZSBkb3dubG9hZGluZyBmcm9tIA==", "RENfVElNRU9VVA==", "IGlzIGNob2tlZA==", "IGlzIHVuY2hva2Vk", "cG9w", "cmN2ZFJlcVF1ZXVlIHBvcCA=", "aGFz", "cGVlciBhbHJlYWR5IGhhcyA=", "LCBub3RpZnkgcGVlcg==", "RENfUElFQ0VfTk9UX0ZPVU5E", "aXNBdmFpbGFibGU=", "c2xpY2U=", "ZXhwb3J0cw==", "X19lc01vZHVsZQ==", "YXNzaWdu", "bGVuZ3Ro", "cHJvdG90eXBl", "Y2FsbA==", "ZW51bWVyYWJsZQ==", "Y29uZmlndXJhYmxl", "dmFsdWU=", "d3JpdGFibGU=", "ZGVmaW5lUHJvcGVydHk=", "VkVSU0lPTg==", "X19wcm90b19f", "Z2V0UHJvdG90eXBlT2Y=", "ZW5naW5l", "bG9nZ2Vy", "cmVtb3RlUGVlcklk", "Y2hhbm5lbElk", "Y29ubmVjdGVk", "bWlzcw==", "Y29ublRpbWVvdXQ=", "c2V0VGltZW91dA==", "aW5mbw==", "ZGMg", "IGNvbm5lY3Rpb24gdGltZW91dA==", "ZGVmYXVsdA==", "RENfRVJST1I=", "cmN2ZFJlcVF1ZXVl", "dXBsb2FkaW5n", "ZGVsYXlz", "ZmV0Y2hlcg==", "dGltZXN0YW1w", "dmVyc2lvbg==", "X2RhdGFjaGFubmVs", "Y29uZmln", "d2ViUlRDQ29uZmln", "aXNJbml0aWF0b3I=", "X2luaXQ=", "ZG93bmxvYWROdW0=", "c3RhcnRTTg==", "TUFYX1NBRkVfSU5URUdFUg==", "ZW5kU04=", "ZXJyb3I=", "ZW1pdA==", "ZGF0YWNoYW5uZWwgQ09OTkVDVEVEIHRvIA==", "RENfT1BFTg==", "bXNnUXVldWU=", "c2hpZnQ=", "ZXZlbnQ=", "b25jZQ==", "ZGF0YQ==", "ZGVidWc=", "IGZyb20g", "cHVzaA==", "RENfSEFWRQ==", "RENfUElFQ0U=", "X3ByZXBhcmVGb3JCaW5hcnk=", "YXR0YWNobWVudHM=", "c2VnX2lk", "bGV2ZWw=", "RENfUkVRVUVTVA==", "X2hhbmRsZVJlcXVlc3RNc2c=", "X2hhbmRsZVBpZWNlQWNr", "RENfQklURklFTEQ=", "ZmllbGQ=", "bGl2ZQ==", "Zm9yRWFjaA==", "Y2hva2Vk", "RENfVU5DSE9LRQ==", "YnVmQXJy", "cmVtYWluQXR0YWNobWVudHM=", "c2VuZEpzb24=", "c2VnSWQ=", "ZXhwZWN0ZWRTaXpl", "X2hhbmRsZUJpbmFyeURhdGE=", "Y2xvc2U=", "c2VuZA==", "c3RyaW5naWZ5", "d2Fybg==", "ZGF0YWNoYW5uZWwg", "IHNlbmQgZGF0YSBmYWlsZWQsIGNsb3NlIGl0", "c2VuZEJpdEZpZWxk", "c2VuZEJ1ZmZlcg==", "Ynl0ZUxlbmd0aA==", "Zmxvb3I=", "cmVxdWVzdERhdGFCeUlk", "cmVxdWVzdERhdGFCeVNO", "RENfQ0xPU0U=", "ZGVzdHJveQ==", "ZGVzdHJveSBkYXRhY2hhbm5lbCA=", "Y2hva2VUaW1lcg==", "Y2xlYXJUaW1lb3V0", "cmVtb3ZlQWxsTGlzdGVuZXJz", "YWRkIHJlcXVlc3Qgc24g", "IHRvIHJjdmRSZXFRdWV1ZQ==", "dXJnZW50", "Z2V0UmVxdWVzdEZyb21RdWV1ZQ=="];
                        r = i,
                            function(e) {
                                for (; --e;) r.push(r.shift())
                            }(373);

                        function f(e, t) {
                            var r = i[e -= 0];
                            void 0 === f.GsTyNH && (function() {
                                var t;
                                try {
                                    t = Function('return (function() {}.constructor("return this")( ));')()
                                } catch (e) {
                                    t = window
                                }
                                t.atob || (t.atob = function(e) {
                                    for (var t, r, n = String(e).replace(/=+$/, ""), i = 0, a = 0, o = ""; r = n.charAt(a++); ~r && (t = i % 4 ? 64 * t + r : r, i++ % 4) && (o += String.fromCharCode(255 & t >> (-2 * i & 6)))) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
                                    return o
                                })
                            }(), f.Oikwpi = function(e) {
                                for (var t = atob(e), r = [], n = 0, i = t.length; n < i; n++) r += "%" + ("00" + t.charCodeAt(n).toString(16)).slice(-2);
                                return decodeURIComponent(r)
                            }, f.dNINJU = {}, f.GsTyNH = !0);
                            var n = f.dNINJU[e];
                            return void 0 === n ? (r = f.Oikwpi(r), f.dNINJU[e] = r) : r = n, r
                        }
                        Object.defineProperty(u, f("0x0"), {
                            value: !0
                        });
                        var h = Object[f("0x1")] || function(e) {
                                for (var t = 1; t < arguments[f("0x2")]; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object[f("0x3")].hasOwnProperty[f("0x4")](r, n) && (e[n] = r[n])
                                }
                                return e
                            },
                            n = function(e, t, r) {
                                return t && l(e.prototype, t), r && l(e, r), e
                            },
                            g = t(c(7)),
                            a = t(c(3)),
                            p = t(c(0)),
                            o = c(4).Buffer,
                            s = (function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : m(t)));
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                            }(v, a[f("0x18")]), n(v, null, [{
                                key: f("0xa"),
                                get: function() {
                                    return "v2"
                                }
                            }]), n(v, [{
                                key: f("0x24"),
                                value: function(e) {
                                    var r = this;
                                    e.on(f("0x29"), function(e) {
                                        r[f("0x2a")](p[f("0x18")][f("0x19")])
                                    }), e.on("signal", function(e) {
                                        r[f("0x2a")](p.default.DC_SIGNAL, e)
                                    }), e[f("0x30")]("connect", function() {
                                        for (r.logger[f("0x15")](f("0x2b") + r.remotePeerId), r[f("0x11")] = !0, window.clearTimeout(r[f("0x13")]), r[f("0x2a")](p[f("0x18")][f("0x2c")]); 0 < r[f("0x2d")][f("0x2")];) {
                                            var e = r.msgQueue[f("0x2e")]();
                                            r[f("0x2a")](e[f("0x2f")], e)
                                        }
                                    }), e.on(f("0x31"), function(e) {
                                        if ("string" == typeof e) {
                                            r.logger[f("0x32")]("datachannel receive string: " + e + f("0x33") + r[f("0xf")]);
                                            var t = JSON.parse(e);
                                            if (!r.connected) return void r[f("0x2d")][f("0x34")](t);
                                            switch (t.event) {
                                                case p.default[f("0x35")]:
                                                    if (r[f("0x2a")](t[f("0x2f")], t), !t.sn || r[f("0x21")].live) return;
                                                    t.sn < r[f("0x26")] && (r[f("0x26")] = t.sn), t.sn > r[f("0x28")] && (r[f("0x28")] = t.sn);
                                                    break;
                                                case p[f("0x18")][f("0x36")]:
                                                    r[f("0x37")](t[f("0x38")], t[f("0x39")], t.sn, t.size, t[f("0x3a")]), r[f("0x2a")](t[f("0x2f")], t);
                                                    break;
                                                case p[f("0x18")].DC_PIECE_NOT_FOUND:
                                                    0 <= r[f("0x25")] && r.downloadNum--, r[f("0x2a")](t.event, t);
                                                    break;
                                                case p.default[f("0x3b")]:
                                                    r[f("0x3c")](t);
                                                    break;
                                                case p[f("0x18")].DC_PIECE_ACK:
                                                    r[f("0x3d")](), r[f("0x2a")](t[f("0x2f")], t);
                                                    break;
                                                case p[f("0x18")][f("0x3e")]:
                                                    if (r[f("0x2a")](t[f("0x2f")], t), !t[f("0x3f")] || r[f("0x21")][f("0x40")]) return;
                                                    t[f("0x3f")][f("0x41")](function(e) {
                                                        0 < e && (e < r[f("0x26")] && (r[f("0x26")] = e), e > r.endSN && (r[f("0x28")] = e))
                                                    });
                                                    break;
                                                case p[f("0x18")].DC_CHOKE:
                                                    r[f("0x42")] = !0;
                                                    break;
                                                case p.default[f("0x43")]:
                                                    r[f("0x42")] = !1;
                                                    break;
                                                default:
                                                    r[f("0x2a")](t.event, t)
                                            }
                                        } else r[f("0x44")][f("0x34")](e), r[f("0x45")]--, 0 === r.remainAttachments && (0 <= r[f("0x25")] && r[f("0x25")]--, r[f("0x46")]({
                                            event: p.default.DC_PIECE_ACK,
                                            sn: r.bufSN,
                                            seg_id: r[f("0x47")],
                                            size: r[f("0x48")]
                                        }), r[f("0x49")]())
                                    }), e[f("0x30")](f("0x4a"), function() {
                                        r[f("0x2a")](p[f("0x18")].DC_CLOSE)
                                    })
                                }
                            }, {
                                key: f("0x46"),
                                value: function(e) {
                                    this[f("0x4b")](JSON[f("0x4c")](e))
                                }
                            }, {
                                key: f("0x4b"),
                                value: function(e) {
                                    if (this[f("0x20")] && this[f("0x20")].connected) try {
                                        this[f("0x20")][f("0x4b")](e)
                                    } catch (e) {
                                        this[f("0xe")][f("0x4d")](f("0x4e") + this[f("0x10")] + f("0x4f")), this[f("0x2a")](p[f("0x18")][f("0x19")])
                                    }
                                }
                            }, {
                                key: f("0x50"),
                                value: function(e) {
                                    this[f("0x46")]({
                                        event: p.default[f("0x3e")],
                                        field: e
                                    })
                                }
                            }, {
                                key: f("0x51"),
                                value: function(e, t, r, n) {
                                    this[f("0x1b")] = !0;
                                    var i = n[f("0x52")],
                                        a = 65536,
                                        o = 0,
                                        s = 0;
                                    i % a == 0 ? s = i / a : (s = Math[f("0x53")](i / a) + 1, o = i % a);
                                    var l = {};
                                    l[f("0x2f")] = p.default.DC_PIECE, l.attachments = s, l.seg_id = r, l.sn = e, l[f("0x3a")] = t, l.size = i, this[f("0x46")](l);
                                    for (var u = function(e, t, r, n) {
                                            var i = [];
                                            if (n) {
                                                for (var a = void 0, o = 0; o < r - 1; o++) a = e[f("0x73")](o * t, (o + 1) * t), i[f("0x34")](a);
                                                a = e[f("0x73")](e[f("0x52")] - n, e.byteLength), i.push(a)
                                            } else
                                                for (var s = void 0, l = 0; l < r; l++) s = e[f("0x73")](l * t, (l + 1) * t), i.push(s);
                                            return i
                                        }(n, a, s, o), c = 0; c < u.length; c++) this[f("0x4b")](u[c])
                                }
                            }, {
                                key: f("0x54"),
                                value: function(e, t) {
                                    var r = 2 < arguments[f("0x2")] && void 0 !== arguments[2] && arguments[2];
                                    this[f("0x25")]++;
                                    var n = {};
                                    n.event = p.default.DC_REQUEST, n[f("0x39")] = e, n.sn = t, n.urgent = r, this.sendJson(n)
                                }
                            }, {
                                key: f("0x55"),
                                value: function(e) {
                                    var t = 1 < arguments[f("0x2")] && void 0 !== arguments[1] && arguments[1];
                                    this[f("0x25")]++;
                                    var r = {};
                                    r[f("0x2f")] = p.default.DC_REQUEST, r.sn = e, r.urgent = t, this[f("0x46")](r)
                                }
                            }, {
                                key: "close",
                                value: function() {
                                    this[f("0x2a")](p[f("0x18")][f("0x56")])
                                }
                            }, {
                                key: "receiveSignal",
                                value: function(e) {
                                    this[f("0x20")].signal(e)
                                }
                            }, {
                                key: f("0x57"),
                                value: function() {
                                    this.logger[f("0x15")](f("0x58") + this[f("0x10")]), this[f("0x59")] && window[f("0x5a")](this[f("0x59")]), this.connTimeout && window.clearTimeout(this[f("0x13")]);
                                    var e = {};
                                    e[f("0x2f")] = p.default.DC_CLOSE, this.sendJson(e), this[f("0x20")][f("0x5b")](), this[f("0x5b")](), this[f("0x20")][f("0x57")]()
                                }
                            }, {
                                key: "_handleRequestMsg",
                                value: function(e) {
                                    this[f("0x1b")] || 0 < this.rcvdReqQueue[f("0x2")] ? (this[f("0xe")][f("0x15")](f("0x5c") + e.sn + f("0x5d")), e[f("0x5e")] ? this[f("0x1a")][f("0x34")](e.sn) : this[f("0x1a")].unshift(e.sn)) : this.emit(p.default[f("0x3b")], e)
                                }
                            }, {
                                key: "_handlePieceAck",
                                value: function() {
                                    this.uploading = !1;
                                    var e = this[f("0x5f")]();
                                    e && this[f("0x2a")](p[f("0x18")][f("0x3b")], {
                                        sn: e
                                    })
                                }
                            }, {
                                key: "_prepareForBinary",
                                value: function(e, t, r, n, i) {
                                    this[f("0x44")] = [], this[f("0x45")] = e, this[f("0x47")] = t, this.level = i, this.bufSN = r, this[f("0x48")] = n
                                }
                            }, {
                                key: f("0x49"),
                                value: function() {
                                    var e = o[f("0x60")](this.bufArr);
                                    if (e.byteLength == this.expectedSize) {
                                        this.engine[f("0x1d")] ? this[f("0xd")][f("0x1d")][f("0x61")](this[f("0x48")]) : console[f("0x4d")]("DC report failed");
                                        var t = new Uint8Array(e)[f("0x62")];
                                        this[f("0x2a")](p[f("0x18")][f("0x63")], {
                                            seg_id: this[f("0x47")],
                                            sn: this[f("0x64")],
                                            data: t,
                                            level: this.level
                                        })
                                    } else this[f("0xe")].error("expectedSize " + this.expectedSize + f("0x65") + e.byteLength);
                                    this.logger[f("0x15")](f("0x66") + this[f("0x47")] + f("0x33") + this[f("0xf")]), this[f("0x47")] = "", this[f("0x44")] = [], this.expectedSize = -1
                                }
                            }, {
                                key: f("0x67"),
                                value: function() {
                                    var e = this;
                                    if (this.logger[f("0x15")](f("0x68") + this[f("0xf")]), this.emit(p.default[f("0x69")]), 4 <= ++this[f("0x12")] && !this[f("0x42")]) {
                                        this[f("0x42")] = !0;
                                        var t = 10 * this[f("0x12")];
                                        this[f("0xe")][f("0x4d")]("datachannel " + this.channelId + f("0x6a")), t <= 150 && (this[f("0x59")] = setTimeout(function() {
                                            e[f("0x42")] = !1, e[f("0xe")].warn(f("0x4e") + e.channelId + f("0x6b"))
                                        }, 1e3 * t))
                                    }
                                }
                            }, {
                                key: f("0x5f"),
                                value: function() {
                                    if (0 === this.rcvdReqQueue[f("0x2")]) return null;
                                    var e = this[f("0x1a")][f("0x6c")]();
                                    return this[f("0xe")][f("0x15")](f("0x6d") + e), this.bitset[f("0x6e")](e) ? (this[f("0xe")].info(f("0x6f") + e + f("0x70")), this[f("0x46")]({
                                        event: p[f("0x18")][f("0x71")],
                                        sn: e
                                    }), this[f("0x5f")]()) : e
                                }
                            }, {
                                key: f("0x72"),
                                get: function() {
                                    return this[f("0x25")] < 2 && !1 === this.choked
                                }
                            }, {
                                key: "isAvailableUrgently",
                                get: function() {
                                    return 0 === this.downloadNum && !1 === this[f("0x42")]
                                }
                            }]), v);

                        function v(e, t, r, n, i) {
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, v);
                            var a = function(e, t) {
                                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !t || "object" != (void 0 === t ? "undefined" : m(t)) && "function" != typeof t ? e : t
                            }(this, (v[f("0xb")] || Object[f("0xc")](v))[f("0x4")](this));
                            a[f("0xd")] = e, a[f("0xe")] = e[f("0xe")], a.config = i, a[f("0xf")] = r, a[f("0x10")] = n ? t + "-" + r : r + "-" + t, a[f("0x11")] = !1, a.msgQueue = [], a[f("0x12")] = 0, a.bitset, a.bufArr = [], a[f("0x13")] = window[f("0x14")](function() {
                                a[f("0xe")][f("0x15")](f("0x16") + a[f("0x10")] + f("0x17")), a.emit(p[f("0x18")][f("0x19")])
                            }, 3e4), a[f("0x1a")] = [], a[f("0x1b")] = !1, a.choked = !1, a[f("0x1c")] = [];
                            var o = a[f("0xd")][f("0x1d")],
                                s = o.channelId,
                                l = o.id,
                                u = o[f("0x1e")],
                                c = o.v,
                                d = a[f("0xd")][f("0x1f")];
                            return a[f("0x20")] = new(g[f("0x18")])(h({
                                initiator: n,
                                channelName: a[f("0x10")],
                                objectMode: !0,
                                signInfo: {
                                    channelId: s,
                                    id: l,
                                    timestamp: u,
                                    version: d,
                                    v: c
                                }
                            }, a[f("0x21")][f("0x22")])), a[f("0x23")] = n, a[f("0x24")](a._datachannel), a[f("0x25")] = 0, a[f("0x26")] = Number[f("0x27")], a[f("0x28")] = -1, a
                        }

                        function l(e, t) {
                            for (var r = 0; r < t.length; r++) {
                                var n = t[r];
                                n[f("0x5")] = n.enumerable || !1, n[f("0x6")] = !0, f("0x7") in n && (n[f("0x8")] = !0), Object[f("0x9")](e, n.key, n)
                            }
                        }
                        u[f("0x18")] = s, e[f("0x74")] = u[f("0x18")]
                    }).call(u, c(1)(e))
                }, function(e, t, r) {
                    function n(e) {
                        var t = this;
                        if (!(t instanceof n)) return new n(e);
                        c.call(t), t.s = e.signInfo, t.channelName = e.initiator ? e.channelName || function(e) {
                            for (var t = "", r = 0; r < e.length; ++r) t += e[r].toString(16).padStart(2, "0");
                            return t
                        }(f(20)) : null, t._isChromium = "undefined" != typeof window && !!window.webkitRTCPeerConnection, t.initiator = e.initiator || !1, t.channelConfig = e.channelConfig || n.channelConfig, t.channelConfig.negotiated = !1, t.channelConfig.ordered = !0, t.channelConfig.maxRetransmits = 30, t.config = e.config || n.config, t.constraints = t._transformConstraints(e.constraints || n.constraints), t.offerConstraints = t._transformConstraints(e.offerConstraints || {}), t.answerConstraints = t._transformConstraints(e.answerConstraints || {}), t.sdpTransform = e.sdpTransform || function(e) {
                            return e
                        }, t.streams = e.streams || (e.stream ? [e.stream] : []), t.trickle = void 0 === e.trickle || e.trickle, t.destroyed = !1, t.connected = !1, t.remoteAddress = void 0, t.remoteFamily = void 0, t.remotePort = void 0, t.localAddress = void 0, t.localPort = void 0, t._wrtc = e.wrtc && "object" === l(e.wrtc) ? e.wrtc : window, t._pcReady = !1, t._channelReady = !1, t._iceComplete = !1, t._channel = null, t._pendingCandidates = [], t._isNegotiating = !1, t._batchedNegotiation = !1, t._queuedNegotiation = !1, t._sendersAwaitingStable = [], t._senderMap = new WeakMap, t._remoteTracks = [], t._remoteStreams = [], t._chunk = null, t._cb = null, t._interval = null, t._pc = new t._wrtc.RTCPeerConnection(t.config, t.constraints), t._isReactNativeWebrtc = "number" == typeof t._pc._peerConnectionId, t._pc.oniceconnectionstatechange = function() {
                            t._onIceStateChange()
                        }, t._pc.onicegatheringstatechange = function() {
                            t._onIceStateChange()
                        }, t._pc.onsignalingstatechange = function() {
                            t._onSignalingStateChange()
                        }, t._pc.onicecandidate = function(e) {
                            t._onIceCandidate(e)
                        }, t.initiator ? t._setupData({
                            channel: t._pc.createDataChannel(t.channelName, t.channelConfig)
                        }) : t._pc.ondatachannel = function(e) {
                            t._setupData(e)
                        }, "addTrack" in t._pc && (t.streams && t.streams.forEach(function(e) {
                            t.addStream(e)
                        }), t._pc.ontrack = function(e) {
                            t._onTrack(e)
                        }), t.initiator && t._needsNegotiation()
                    }

                    function S(e, t) {
                        var r = new Error(e);
                        return r.code = t, r
                    }

                    function i() {}
                    var a, o = ["ZnVuY3Rpb24=", "Y29uc3RydWN0b3I=", "cHJvdG90eXBl", "aXRlcmF0b3I="];
                    a = o,
                        function(e) {
                            for (; --e;) a.push(a.shift())
                        }(200);

                    function s(e, t) {
                        var r, n = o[e -= 0];
                        void 0 === s.FytmoA && ((r = function() {
                            var t;
                            try {
                                t = Function('return (function() {}.constructor("return this")( ));')()
                            } catch (e) {
                                t = window
                            }
                            return t
                        }()).atob || (r.atob = function(e) {
                            for (var t, r, n = String(e).replace(/=+$/, ""), i = 0, a = 0, o = ""; r = n.charAt(a++); ~r && (t = i % 4 ? 64 * t + r : r, i++ % 4) && (o += String.fromCharCode(255 & t >> (-2 * i & 6)))) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
                            return o
                        }), s.ySzKtl = function(e) {
                            for (var t = atob(e), r = [], n = 0, i = t.length; n < i; n++) r += "%" + ("00" + t.charCodeAt(n).toString(16)).slice(-2);
                            return decodeURIComponent(r)
                        }, s.YBtVIC = {}, s.FytmoA = !0);
                        var i = s.YBtVIC[e];
                        return void 0 === i ? (n = s.ySzKtl(n), s.YBtVIC[e] = n) : n = i, n
                    }
                    var l = "function" == typeof Symbol && "symbol" == m(Symbol[s("0x0")]) ? function(e) {
                            return void 0 === e ? "undefined" : m(e)
                        } : function(e) {
                            return e && ("undefined" == typeof Symbol ? "undefined" : m(Symbol)) === s("0x1") && e[s("0x2")] === Symbol && e !== Symbol[s("0x3")] ? "symbol" : void 0 === e ? "undefined" : m(e)
                        },
                        u = r(2),
                        w = u && u.__esModule ? u : {
                            default: u
                        };
                    e.exports = n;
                    var c = r(3),
                        d = r(8),
                        f = function(e) {
                            var t = new Uint8Array(e);
                            return window.crypto.getRandomValues(t), t
                        };
                    String.prototype.padStart || (String.prototype.padStart = function(e, t) {
                        return e >>= 0, t = String(void 0 !== t ? t : " "), this.length > e || "" === t ? String(this) : ((e -= this.length) > t.length && (t += t.repeat(e / t.length)), t.slice(0, e) + String(this))
                    }), d(n, c), n.config = {
                        iceServers: [{
                            urls: "stun:stun.l.google.com:19302"
                        }, {
                            urls: "stun:global.stun.twilio.com:3478?transport=udp"
                        }]
                    }, n.constraints = {}, n.channelConfig = {}, Object.defineProperty(n.prototype, "bufferSize", {
                        get: function() {
                            return this._channel && this._channel.bufferedAmount || 0
                        }
                    }), n.prototype.address = function() {
                        return {
                            port: this.localPort,
                            family: "IPv4",
                            address: this.localAddress
                        }
                    }, n.prototype.signal = function(e) {
                        var t = this;
                        if (t.destroyed) throw S("cannot signal after peer is destroyed", "ERR_SIGNALING");
                        if ("string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (t) {
                            e = {}
                        }
                        e.renegotiate && t._needsNegotiation(), e.candidate && (t._pc.remoteDescription && t._pc.remoteDescription.type ? t._addIceCandidate(e.candidate) : t._pendingCandidates.push(e.candidate)), e.sdp && t._pc.setRemoteDescription(new t._wrtc.RTCSessionDescription(e), function() {
                            t.destroyed || (t._pendingCandidates.forEach(function(e) {
                                t._addIceCandidate(e)
                            }), t._pendingCandidates = [], "offer" === t._pc.remoteDescription.type && t._createAnswer())
                        }, function(e) {
                            t.destroy(S(e, "ERR_SET_REMOTE_DESCRIPTION"))
                        }), e.sdp || e.candidate || e.renegotiate || t.destroy(S("signal() called with invalid signal data", "ERR_SIGNALING"))
                    }, n.prototype._addIceCandidate = function(e) {
                        var t = this;
                        try {
                            t._pc.addIceCandidate(new t._wrtc.RTCIceCandidate(e), i, function(e) {
                                t.destroy(S(e, "ERR_ADD_ICE_CANDIDATE"))
                            })
                        } catch (e) {
                            t.destroy(S("error adding candidate: " + e.message, "ERR_ADD_ICE_CANDIDATE"))
                        }
                    }, n.prototype.send = function(e) {
                        this._channel.send(e)
                    }, n.prototype.addStream = function(t) {
                        var r = this;
                        t.getTracks().forEach(function(e) {
                            r.addTrack(e, t)
                        })
                    }, n.prototype.addTrack = function(e, t) {
                        var r = this._pc.addTrack(e, t),
                            n = this._senderMap.get(e) || new WeakMap;
                        n.set(t, r), this._senderMap.set(e, n), this._needsNegotiation()
                    }, n.prototype.removeTrack = function(e, t) {
                        var r = this,
                            n = r._senderMap.get(e),
                            i = n ? n.get(t) : null;
                        i || r.destroy(new Error("Cannot remove track that was never added."));
                        try {
                            r._pc.removeTrack(i)
                        } catch (e) {
                            "NS_ERROR_UNEXPECTED" === e.name ? r._sendersAwaitingStable.push(i) : r.destroy(e)
                        }
                    }, n.prototype.removeStream = function(t) {
                        var r = this;
                        t.getTracks().forEach(function(e) {
                            r.removeTrack(e, t)
                        })
                    }, n.prototype._needsNegotiation = function() {
                        var e = this;
                        e._batchedNegotiation || (e._batchedNegotiation = !0, setTimeout(function() {
                            e._batchedNegotiation = !1, e.negotiate()
                        }, 0))
                    }, n.prototype.negotiate = function() {
                        var e = this;
                        e.initiator ? e._isNegotiating ? e._queuedNegotiation = !0 : e._createOffer() : e.emit("signal", {
                            renegotiate: !0
                        }), e._isNegotiating = !0
                    }, n.prototype.destroy = function(e) {
                        var t = this;
                        if (!t.destroyed) {
                            if (t.destroyed = !0, t.connected = !1, t._pcReady = !1, t._channelReady = !1, t._remoteTracks = null, t._remoteStreams = null, t._senderMap = null, clearInterval(t._interval), t._interval = null, t._chunk = null, t._cb = null, t._channel) {
                                try {
                                    t._channel.close()
                                } catch (e) {}
                                t._channel.onmessage = null, t._channel.onopen = null, t._channel.onclose = null, t._channel.onerror = null
                            }
                            if (t._pc) {
                                try {
                                    t._pc.close()
                                } catch (e) {}
                                t._pc.oniceconnectionstatechange = null, t._pc.onicegatheringstatechange = null, t._pc.onsignalingstatechange = null, t._pc.onicecandidate = null, "addTrack" in t._pc && (t._pc.ontrack = null), t._pc.ondatachannel = null
                            }
                            t._pc = null, t._channel = null, e && t.emit("error", e), t.emit("close")
                        }
                    }, n.prototype._setupData = function(e) {
                        var t = this;
                        if (!e.channel) return t.destroy(S("Data channel event is missing `channel` property", "ERR_DATA_CHANNEL"));
                        t._channel = e.channel, t._channel.binaryType = "arraybuffer", "number" == typeof t._channel.bufferedAmountLowThreshold && (t._channel.bufferedAmountLowThreshold = 65536), t.channelName = t._channel.label, t._channel.onmessage = function(e) {
                            t._onChannelMessage(e)
                        }, t._channel.onbufferedamountlow = function() {
                            t._onChannelBufferedAmountLow()
                        }, t._channel.onopen = function() {
                            t._onChannelOpen()
                        }, t._channel.onclose = function() {
                            t._onChannelClose()
                        }, t._channel.onerror = function(e) {
                            t.destroy(S(e, "ERR_DATA_CHANNEL"))
                        }
                    }, n.prototype._createOffer = function() {
                        var r = this;
                        r.destroyed || r._pc.createOffer(r.offerConstraints).then(function(t) {
                            function e() {
                                var e = r._pc.localDescription || t;
                                r.emit("signal", {
                                    type: e.type,
                                    sdp: e.sdp
                                })
                            }
                            r.destroyed || (t.sdp = r.sdpTransform(t.sdp), r._pc.setLocalDescription(t).then(function() {
                                r.destroyed || (r.trickle || r._iceComplete ? e() : r.once("_iceComplete", e))
                            }).catch(function(e) {
                                r.destroy(S(e, "ERR_SET_LOCAL_DESCRIPTION"))
                            }))
                        }).catch(function(e) {
                            r.destroy(S(e, "ERR_CREATE_OFFER"))
                        })
                    }, n.prototype._createAnswer = function() {
                        var r = this;
                        r.destroyed || r._pc.createAnswer(r.answerConstraints).then(function(t) {
                            function e() {
                                var e = r._pc.localDescription || t;
                                r.emit("signal", {
                                    type: e.type,
                                    sdp: e.sdp
                                })
                            }
                            r.destroyed || (t.sdp = r.sdpTransform(t.sdp), r._pc.setLocalDescription(t).then(function() {
                                r.destroyed || (r.trickle || r._iceComplete ? e() : r.once("_iceComplete", e))
                            }).catch(function(e) {
                                r.destroy(S(e, "ERR_SET_LOCAL_DESCRIPTION"))
                            }))
                        }).catch(function(e) {
                            r.destroy(S(e, "ERR_CREATE_ANSWER"))
                        })
                    }, n.prototype._onIceStateChange = function() {
                        var e = this;
                        if (!e.destroyed) {
                            var t = e._pc.iceConnectionState,
                                r = e._pc.iceGatheringState;
                            e.emit("iceStateChange", t, r), "connected" !== t && "completed" !== t || (e._pcReady = !0, e._maybeReady()), "failed" === t && e.destroy(S("Ice connection failed.", "ERR_ICE_CONNECTION_FAILURE")), "closed" === t && e.destroy(new Error("Ice connection closed."))
                        }
                    }, n.prototype.getStats = function(r) {
                        var t = this;
                        0 === t._pc.getStats.length ? t._pc.getStats().then(function(e) {
                            var t = [];
                            e.forEach(function(e) {
                                t.push(e)
                            }), r(null, t)
                        }, function(e) {
                            r(e)
                        }) : t._isReactNativeWebrtc ? t._pc.getStats(null, function(e) {
                            var t = [];
                            e.forEach(function(e) {
                                t.push(e)
                            }), r(null, t)
                        }, function(e) {
                            r(e)
                        }) : 0 < t._pc.getStats.length ? t._pc.getStats(function(e) {
                            if (!t.destroyed) {
                                var n = [];
                                e.result().forEach(function(t) {
                                    var r = {};
                                    t.names().forEach(function(e) {
                                        r[e] = t.stat(e)
                                    }), r.id = t.id, r.type = t.type, r.timestamp = t.timestamp, n.push(r)
                                }), r(null, n)
                            }
                        }, function(e) {
                            r(e)
                        }) : r(null, [])
                    }, n.prototype._maybeReady = function() {
                        var T = this;
                        !T.connected && !T._connecting && T._pcReady && T._channelReady && (T._connecting = !0, function _() {
                            T.destroyed || T.getStats(function(e, t) {
                                function r(e) {
                                    o = !0;
                                    var t = i[e.localCandidateId];
                                    t && t.ip ? (T.localAddress = t.ip, T.localPort = Number(t.port)) : t && t.ipAddress ? (T.localAddress = t.ipAddress, T.localPort = Number(t.portNumber)) : "string" == typeof e.googLocalAddress && (t = e.googLocalAddress.split(":"), T.localAddress = t[0], T.localPort = Number(t[1]));
                                    var r = n[e.remoteCandidateId];
                                    r && r.ip ? (T.remoteAddress = r.ip, T.remotePort = Number(r.port)) : r && r.ipAddress ? (T.remoteAddress = r.ipAddress, T.remotePort = Number(r.portNumber)) : "string" == typeof e.googRemoteAddress && (r = e.googRemoteAddress.split(":"), T.remoteAddress = r[0], T.remotePort = Number(r[1])), T.remoteFamily = "IPv4"
                                }
                                if (!T.destroyed) {
                                    e && (t = []);
                                    var n = {},
                                        i = {},
                                        a = {},
                                        o = !1;
                                    if (t.forEach(function(e) {
                                            "remotecandidate" !== e.type && "remote-candidate" !== e.type || (n[e.id] = e), "localcandidate" !== e.type && "local-candidate" !== e.type || (i[e.id] = e), "candidatepair" !== e.type && "candidate-pair" !== e.type || (a[e.id] = e)
                                        }), t.forEach(function(e) {
                                            "transport" === e.type && e.selectedCandidatePairId && r(a[e.selectedCandidatePairId]), ("googCandidatePair" === e.type && "true" === e.googActiveConnection || ("candidatepair" === e.type || "candidate-pair" === e.type) && e.selected) && r(e)
                                        }), !(o || Object.keys(a).length && !Object.keys(i).length)) return void setTimeout(_, 100);
                                    if (T._connecting = !1, T.connected = !0, T._chunk) {
                                        try {
                                            T.send(T._chunk)
                                        } catch (e) {
                                            return T.destroy(S(e, "ERR_DATA_CHANNEL"))
                                        }(T._chunk = null, T._cb)(T._cb = null)
                                    }
                                    "number" != typeof T._channel.bufferedAmountLowThreshold && (T._interval = setInterval(function() {
                                        T._onInterval()
                                    }, 150), T._interval.unref && T._interval.unref());
                                    var s = ["cm1QeHQ=", "UU5zTEg=", "WUxWS2E=", "U0sqQEllRV5yMA==", "ZW1pdA==", "Y29ubmVjdA=="];
                                    E = s,
                                        function(e) {
                                            for (; --e;) E.push(E.shift())
                                        }(451);
                                    var l = function e(t, r) {
                                            var n, i = s[t -= 0];
                                            void 0 === e.ddzinM && ((n = function() {
                                                var t;
                                                try {
                                                    t = Function('return (function() {}.constructor("return this")( ));')()
                                                } catch (e) {
                                                    t = window
                                                }
                                                return t
                                            }()).atob || (n.atob = function(e) {
                                                for (var t, r, n = String(e).replace(/=+$/, ""), i = 0, a = 0, o = ""; r = n.charAt(a++); ~r && (t = i % 4 ? 64 * t + r : r, i++ % 4) && (o += String.fromCharCode(255 & t >> (-2 * i & 6)))) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
                                                return o
                                            }), e.qBHZHa = function(e) {
                                                for (var t = atob(e), r = [], n = 0, i = t.length; n < i; n++) r += "%" + ("00" + t.charCodeAt(n).toString(16)).slice(-2);
                                                return decodeURIComponent(r)
                                            }, e.bWbEuz = {}, e.ddzinM = !0);
                                            var a = e.bWbEuz[t];
                                            return void 0 === a ? (i = e.qBHZHa(i), e.bWbEuz[t] = i) : i = a, i
                                        },
                                        u = T.s,
                                        c = u.channelId,
                                        d = u.id,
                                        f = u.timestamp,
                                        h = u.version,
                                        g = (u.v, p = c, v = d, m = f, y = h, (b = {})[l("0x0")] = function(e, t, r) {
                                            return e(t, r)
                                        }, b[l("0x1")] = function(e, t) {
                                            return e + t
                                        }, b[l("0x2")] = l("0x3"), b.rmPxt(w.default, b[l("0x1")](b[l("0x1")](b[l("0x1")](p, v), m), b[l("0x2")]), y));
                                    T[l("0x4")]((g.substr(0, 8), l("0x5")))
                                }
                                var p, v, m, y, b, E
                            })
                        }())
                    }, n.prototype._onInterval = function() {
                        !this._cb || !this._channel || 65536 < this._channel.bufferedAmount || this._onChannelBufferedAmountLow()
                    }, n.prototype._onSignalingStateChange = function() {
                        var t = this;
                        t.destroyed || ("stable" === t._pc.signalingState && (t._isNegotiating = !1, t._sendersAwaitingStable.forEach(function(e) {
                            t.removeTrack(e), t._queuedNegotiation = !0
                        }), t._sendersAwaitingStable = [], t._queuedNegotiation && (t._queuedNegotiation = !1, t._needsNegotiation()), t.emit("negotiate")), t.emit("signalingStateChange", t._pc.signalingState))
                    }, n.prototype._onIceCandidate = function(e) {
                        var t = this;
                        t.destroyed || (e.candidate && t.trickle ? t.emit("signal", {
                            candidate: {
                                candidate: e.candidate.candidate,
                                sdpMLineIndex: e.candidate.sdpMLineIndex,
                                sdpMid: e.candidate.sdpMid
                            }
                        }) : e.candidate || (t._iceComplete = !0, t.emit("_iceComplete")))
                    }, n.prototype._onChannelMessage = function(e) {
                        if (!this.destroyed) {
                            var t = e.data;
                            t instanceof ArrayBuffer && (t = new Uint8Array(t)), this.emit("data", t)
                        }
                    }, n.prototype._onChannelBufferedAmountLow = function() {
                        !this.destroyed && this._cb && (0, this._cb)(this._cb = null)
                    }, n.prototype._onChannelOpen = function() {
                        this.connected || this.destroyed || (this._channelReady = !0, this._maybeReady())
                    }, n.prototype._onChannelClose = function() {
                        this.destroyed || this.destroy()
                    }, n.prototype._onTrack = function(e) {
                        var r = this;
                        r.destroyed || e.streams.forEach(function(t) {
                            r.emit("track", e.track, t), r._remoteTracks.push({
                                track: e.track,
                                stream: t
                            }), r._remoteStreams.some(function(e) {
                                return e.id === t.id
                            }) || (r._remoteStreams.push(t), setTimeout(function() {
                                r.emit("stream", t)
                            }, 0))
                        })
                    }, n.prototype._transformConstraints = function(e) {
                        if (0 === Object.keys(e).length) return e;
                        if (!e.mandatory && !e.optional || this._isChromium) return e.mandatory || e.optional || !this._isChromium ? e : (void 0 !== e.offerToReceiveVideo && (e.OfferToReceiveVideo = e.offerToReceiveVideo, delete e.offerToReceiveVideo), void 0 !== e.offerToReceiveAudio && (e.OfferToReceiveAudio = e.offerToReceiveAudio, delete e.offerToReceiveAudio), {
                            mandatory: e
                        });
                        var t = Object.assign({}, e.optional, e.mandatory);
                        return void 0 !== t.OfferToReceiveVideo && (t.offerToReceiveVideo = t.OfferToReceiveVideo, delete t.OfferToReceiveVideo), void 0 !== t.OfferToReceiveAudio && (t.offerToReceiveAudio = t.OfferToReceiveAudio, delete t.OfferToReceiveAudio), t
                    }
                }, function(e, t) {
                    "function" == typeof Object.create ? e.exports = function(e, t) {
                        e.super_ = t, e.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })
                    } : e.exports = function(e, t) {
                        e.super_ = t;

                        function r() {}
                        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                    }
                }, function(e, t, r) {
                    function n(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var i, a = ["cHJvdG90eXBl", "aGFzT3duUHJvcGVydHk=", "Y2FsbA==", "ZW51bWVyYWJsZQ==", "Y29uZmlndXJhYmxl", "dmFsdWU=", "d3JpdGFibGU=", "a2V5", "ZGVmaW5lUHJvcGVydHk=", "X19lc01vZHVsZQ==", "YXNzaWdu", "bGVuZ3Ro"];
                    i = a,
                        function(e) {
                            for (; --e;) i.push(i.shift())
                        }(201);

                    function o(e, t) {
                        var r, n = a[e -= 0];
                        void 0 === o.Anylgk && ((r = function() {
                            var t;
                            try {
                                t = Function('return (function() {}.constructor("return this")( ));')()
                            } catch (e) {
                                t = window
                            }
                            return t
                        }()).atob || (r.atob = function(e) {
                            for (var t, r, n = String(e).replace(/=+$/, ""), i = 0, a = 0, o = ""; r = n.charAt(a++); ~r && (t = i % 4 ? 64 * t + r : r, i++ % 4) && (o += String.fromCharCode(255 & t >> (-2 * i & 6)))) r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);
                            return o
                        }), o.TsWQTD = function(e) {
                            for (var t = atob(e), r = [], n = 0, i = t.length; n < i; n++) r += "%" + ("00" + t.charCodeAt(n).toString(16)).slice(-2);
                            return decodeURIComponent(r)
                        }, o.xSeavQ = {}, o.Anylgk = !0);
                        var i = o.xSeavQ[e];
                        return void 0 === i ? (n = o.TsWQTD(n), o.xSeavQ[e] = n) : n = i, n
                    }
                    Object[o("0x0")](t, o("0x1"), {
                        value: !0
                    });
                    var m = Object[o("0x2")] || function(e) {
                            for (var t = 1; t < arguments[o("0x3")]; t++) {
                                var r = arguments[t];
                                for (var n in r) Object[o("0x4")][o("0x5")][o("0x6")](r, n) && (e[n] = r[n])
                            }
                            return e
                        },
                        s = function(e, t, r) {
                            return t && u(e.prototype, t), r && u(e, r), e
                        },
                        y = n(r(2)),
                        b = n(r(10)),
                        E = n(r(0)),
                        _ = "1.1.0",
                        T = Symbol("httpDownloaded"),
                        S = Symbol("p2pDownloaded"),
                        w = Symbol("p2pUploaded"),
                        l = (s(R, [{
                            key: "btAnnounce",
                            value: function() {
                                var i = this,
                                    t = this.engine.logger;
                                return new Promise(function(r, n) {
                                    fetch(i.announceURL, {
                                        headers: i._requestHeader,
                                        method: "POST",
                                        body: JSON.stringify(i.announceInfo)
                                    }).then(function(e) {
                                        return e.json()
                                    }).then(function(e) {
                                        if (-1 === e.ret) n(e.data.msg);
                                        else {
                                            var t = e.data;
                                            t.info && console.info("" + t.info), t.warn && console.warn("" + t.warn), t.min_conns || (t.min_conns = 30), (!t.rejected || t.rejected && t.share_only) && t.id && t.v && t.report_interval && t.peers ? (i.peerId = i.id = t.id, i.v = t.v, t.report_interval < 10 && (t.report_interval = 10), i.btStats(t.report_interval), i.getPeersURL = i.baseUrl + "/channel/" + i.channelId + "/node/" + i.peerId + "/peers", i.statsURL = i.baseUrl + "/channel/" + i.channelId + "/node/" + i.peerId + "/stats", r(e.data)) : i.engine.p2pEnabled = !1
                                        }
                                    }).catch(function(e) {
                                        t.error("btAnnounce error " + e), n(e)
                                    })
                                })
                            }
                        }, {
                            key: "btStats",
                            value: function() {
                                var v = this,
                                    e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 10,
                                    m = this.engine.logger;
                                this.heartbeater = window.setInterval(function() {
                                    fetch(v.statsURL, {
                                        method: "POST",
                                        body: JSON.stringify(v._makeStatsBody())
                                    }).then(function(e) {
                                        return e.json()
                                    }).then(function(e) {
                                        if (-1 === e.ret) window.clearInterval(v.heartbeater), v.engine.emit(E.default.RESTART_P2P);
                                        else {
                                            m.debug("sucessfully report stats");
                                            var t = v.lastStats || {},
                                                r = t.http,
                                                n = void 0 === r ? 0 : r,
                                                i = t.p2p,
                                                a = void 0 === i ? 0 : i,
                                                o = t.share,
                                                s = void 0 === o ? 0 : o,
                                                l = t.conns,
                                                u = void 0 === l ? 0 : l,
                                                c = t.failConns,
                                                d = void 0 === c ? 0 : c,
                                                f = t.errsBufStalled,
                                                h = void 0 === f ? 0 : f,
                                                g = t.errsInternalExpt,
                                                p = void 0 === g ? 0 : g;
                                            v[T] >= n && (v[T] -= n), v[S] >= a && (v[S] -= a), v[w] >= s && (v[w] -= s), v.conns -= u, v.failConns >= d && (v.failConns -= d), v.errsBufStalled >= h && (v.errsBufStalled -= h), v.errsInternalExpt >= p && (v.errsInternalExpt -= p), v.exptMsg && (v.exptMsg = void 0)
                                        }
                                    }).catch(function(e) {
                                        m.error("btStats error " + e), 2 <= ++v.reportFails && window.clearInterval(v.heartbeater)
                                    })
                                }, 1e3 * e)
                            }
                        }, {
                            key: "btGetPeers",
                            value: function() {
                                var e = this,
                                    n = this.engine.logger;
                                return new Promise(function(t, r) {
                                    fetch(e.getPeersURL, {
                                        headers: e._requestHeader,
                                        method: "POST"
                                    }).then(function(e) {
                                        return e.json()
                                    }).then(function(e) {
                                        -1 === e.ret ? r(e.data.msg) : t(e.data)
                                    }).catch(function(e) {
                                        n.error("btGetPeers error " + e), r(e)
                                    })
                                })
                            }
                        }, {
                            key: "increConns",
                            value: function() {
                                this.conns++
                            }
                        }, {
                            key: "decreConns",
                            value: function() {
                                this.conns--
                            }
                        }, {
                            key: "increFailConns",
                            value: function() {
                                this.failConns++
                            }
                        }, {
                            key: "reportFlow",
                            value: function(e) {
                                var t = Math.round(e / 1024);
                                this[T] += t, this.totalHTTPDownloaded += t, this._emitStats()
                            }
                        }, {
                            key: "reportDCTraffic",
                            value: function(e) {
                                var t = Math.round(e / 1024);
                                this[S] += t, this.totalP2PDownloaded += t, this._emitStats()
                            }
                        }, {
                            key: "reportUploaded",
                            value: function() {
                                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                                this.totalP2PUploaded += Math.round(e / 1024), this[w] += Math.round(e / 1024), this._emitStats()
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                this.engine.logger.warn("destroy fetcher"), window.clearInterval(this.heartbeater)
                            }
                        }, {
                            key: "_emitStats",
                            value: function() {
                                this.engine.emit("stats", {
                                    totalHTTPDownloaded: this.totalHTTPDownloaded,
                                    totalP2PDownloaded: this.totalP2PDownloaded,
                                    totalP2PUploaded: this.totalP2PUploaded
                                });
                                var e = this.engine.config.getStats;
                                e && "function" == typeof e && e(this.totalP2PDownloaded, this.totalP2PUploaded, this.totalHTTPDownloaded)
                            }
                        }, {
                            key: "_makeStatsBody",
                            value: function() {
                                var t = {
                                    conns: this.conns,
                                    failConns: this.failConns,
                                    errsBufStalled: this.errsBufStalled,
                                    errsInternalExpt: this.errsInternalExpt,
                                    http: Math.round(this[T]) || 0,
                                    p2p: Math.round(this[S]) || 0,
                                    share: Math.round(this[w]) || 0
                                };
                                return this.lastStats = JSON.parse(JSON.stringify(t)), Object.keys(t).forEach(function(e) {
                                    0 === t[e] && delete t[e]
                                }), t.device = this.announceInfo.device, this.exptMsg && (t.exptMsg = _ + " " + this.exptMsg), t
                            }
                        }, {
                            key: "_requestHeader",
                            get: function() {
                                var e = {};
                                return this.native && (e.token = this.key), e
                            }
                        }]), R);

                    function R(e, t, r, n, i) {
                        (function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        })(this, R), this.engine = e, this.key = t, this.baseUrl = n || "https://tracker.klink.tech", this.channelId = window.btoa(r), this.timestamp = Date.parse(new Date) / 1e3;
                        var a, o, s, l, u, c, d, f, h, g, p = b.default.parseURL(this.baseUrl).netLoc.replace(/\/\//, ""),
                            v = (a = this.timestamp, o = _, s = p, l = this.channelId, g = window.location.hostname, (u = g, c = o, d = s, f = l, h = a, (0, y.default)(u + c + d + f, h)).substr(0, 8));
                        this.announceInfo = m({}, i, {
                            channel: this.channelId,
                            ts: this.timestamp,
                            version: _,
                            v: v,
                            announce: p
                        }), this.announceURL = this.baseUrl + "/channel", this.reportFails = 0, this.conns = 0, this.failConns = 0, this.totalHTTPDownloaded = 0, this.totalP2PDownloaded = 0, this.totalP2PUploaded = 0, this[T] = 0, this[S] = 0, this[w] = 0, this.errsBufStalled = 0, this.errsInternalExpt = 0, i.bundle ? this.native = !0 : this.native = !1
                    }

                    function u(e, t) {
                        for (var r = 0; r < t[o("0x3")]; r++) {
                            var n = t[r];
                            n[o("0x7")] = n.enumerable || !1, n[o("0x8")] = !0, o("0x9") in n && (n[o("0xa")] = !0), Object[o("0x0")](e, n[o("0xb")], n)
                        }
                    }
                    t.default = l, e.exports = t.default
                }, function(e, o, t) {
                    (function(e) {
                        var t, r, c, n, i, d, a = "function" == typeof Symbol && "symbol" == m(Symbol.iterator) ? function(e) {
                            return void 0 === e ? "undefined" : m(e)
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : m(e)
                        };
                        r = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, c = /^([^\/;?#]*)(.*)$/, n = /(?:\/|^)\.(?=\/)/g, i = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, d = {
                            buildAbsoluteURL: function(e, t, r) {
                                if (r = r || {}, e = e.trim(), !(t = t.trim())) {
                                    if (!r.alwaysNormalize) return e;
                                    var n = d.parseURL(e);
                                    if (!n) throw new Error("Error trying to parse base URL.");
                                    return n.path = d.normalizePath(n.path), d.buildURLFromParts(n)
                                }
                                var i = d.parseURL(t);
                                if (!i) throw new Error("Error trying to parse relative URL.");
                                if (i.scheme) return r.alwaysNormalize ? (i.path = d.normalizePath(i.path), d.buildURLFromParts(i)) : t;
                                var a = d.parseURL(e);
                                if (!a) throw new Error("Error trying to parse base URL.");
                                if (!a.netLoc && a.path && "/" !== a.path[0]) {
                                    var o = c.exec(a.path);
                                    a.netLoc = o[1], a.path = o[2]
                                }
                                a.netLoc && !a.path && (a.path = "/");
                                var s = {
                                    scheme: a.scheme,
                                    netLoc: i.netLoc,
                                    path: null,
                                    params: i.params,
                                    query: i.query,
                                    fragment: i.fragment
                                };
                                if (!i.netLoc && (s.netLoc = a.netLoc, "/" !== i.path[0]))
                                    if (i.path) {
                                        var l = a.path,
                                            u = l.substring(0, l.lastIndexOf("/") + 1) + i.path;
                                        s.path = d.normalizePath(u)
                                    } else s.path = a.path, i.params || (s.params = a.params, i.query || (s.query = a.query));
                                return null === s.path && (s.path = r.alwaysNormalize ? d.normalizePath(i.path) : i.path), d.buildURLFromParts(s)
                            },
                            parseURL: function(e) {
                                var t = r.exec(e);
                                return t ? {
                                    scheme: t[1] || "",
                                    netLoc: t[2] || "",
                                    path: t[3] || "",
                                    params: t[4] || "",
                                    query: t[5] || "",
                                    fragment: t[6] || ""
                                } : null
                            },
                            normalizePath: function(e) {
                                for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(i, "")).length;);
                                return e.split("").reverse().join("")
                            },
                            buildURLFromParts: function(e) {
                                return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                            }
                        }, "object" === a(o) && "object" === a(e) ? e.exports = d : void 0 !== (t = function() {
                            return d
                        }.apply(o, [])) && (e.exports = t)
                    }).call(o, t(1)(e))
                }, function(e, t, r) {
                    e.exports = function() {
                        if ("undefined" == typeof window) return null;
                        var e = {
                            RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
                            RTCSessionDescription: window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription,
                            RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate
                        };
                        return e.RTCPeerConnection ? e : null
                    }
                }, function(e, t, r) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function(e, t) {
                        var r = null,
                            n = !1,
                            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 120;
                        return function() {
                            0 < arguments.length && void 0 !== arguments[0] && arguments[0] ? window.clearTimeout(r) : n || (n = !0, r = setTimeout(function() {
                                e.call(t), n = !1, r = null;
                            }, 1e3 * 30), i *= 1.5)
                        }
                    }, e.exports = t.default
                }], n.c = i, n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: r
                    })
                }, n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 5);

                function n(e) {
                    if (i[e]) return i[e].exports;
                    var t = i[e] = {
                        i: e,
                        l: !1,
                        exports: {}
                    };
                    return r[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports
                }
                var r, i
            }, "object" == m(a) && "object" == m(e) ? e.exports = i() : (r = [], void 0 !== (n = "function" == typeof(t = i) ? t.apply(a, r) : t) && (e.exports = n))
        }).call(a, t(11)(e))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.noop = function() {
            return !0
        }, t.getQueryParam = function(e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
                r = window.location.search.substr(1).match(t);
            return null != r && "" !== r[2] ? r[2].toString() : ""
        }, t.isBlockType = function(e, t) {
            var r = i.default.parseURL(e).path.split(".")[1];
            return -1 !== t.indexOf(r)
        };
        var n = r(3),
            i = n && n.__esModule ? n : {
                default: n
            }
    }, function(e, t, r) {
        var n, c, i, a, d;
        n = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, c = /^([^\/;?#]*)(.*)$/, i = /(?:\/|^)\.(?=\/)/g, a = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, d = {
            buildAbsoluteURL: function(e, t, r) {
                if (r = r || {}, e = e.trim(), !(t = t.trim())) {
                    if (!r.alwaysNormalize) return e;
                    var n = d.parseURL(e);
                    if (!n) throw new Error("Error trying to parse base URL.");
                    return n.path = d.normalizePath(n.path), d.buildURLFromParts(n)
                }
                var i = d.parseURL(t);
                if (!i) throw new Error("Error trying to parse relative URL.");
                if (i.scheme) return r.alwaysNormalize ? (i.path = d.normalizePath(i.path), d.buildURLFromParts(i)) : t;
                var a = d.parseURL(e);
                if (!a) throw new Error("Error trying to parse base URL.");
                if (!a.netLoc && a.path && "/" !== a.path[0]) {
                    var o = c.exec(a.path);
                    a.netLoc = o[1], a.path = o[2]
                }
                a.netLoc && !a.path && (a.path = "/");
                var s = {
                    scheme: a.scheme,
                    netLoc: i.netLoc,
                    path: null,
                    params: i.params,
                    query: i.query,
                    fragment: i.fragment
                };
                if (!i.netLoc && (s.netLoc = a.netLoc, "/" !== i.path[0]))
                    if (i.path) {
                        var l = a.path,
                            u = l.substring(0, l.lastIndexOf("/") + 1) + i.path;
                        s.path = d.normalizePath(u)
                    } else s.path = a.path, i.params || (s.params = a.params, i.query || (s.query = a.query));
                return null === s.path && (s.path = r.alwaysNormalize ? d.normalizePath(i.path) : i.path), d.buildURLFromParts(s)
            },
            parseURL: function(e) {
                var t = n.exec(e);
                return t ? {
                    scheme: t[1] || "",
                    netLoc: t[2] || "",
                    path: t[3] || "",
                    params: t[4] || "",
                    query: t[5] || "",
                    fragment: t[6] || ""
                } : null
            },
            normalizePath: function(e) {
                for (e = e.split("").reverse().join("").replace(i, ""); e.length !== (e = e.replace(a, "")).length;);
                return e.split("").reverse().join("")
            },
            buildURLFromParts: function(e) {
                return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
            }
        }, e.exports = d
    }, function(e, t, r) {
        "use strict";

        function n() {
            return navigator.userAgent.toLowerCase()
        }

        function i(e) {
            return "" + (new RegExp(e + "(\\d+((\\.|_)\\d+)*)").exec(n()) || [, 0])[1] || void 0
        }

        function a(e) {
            return parseFloat((e || "").replace(/\_/g, ".")) || 0
        }
        var o = {
                ANDROID_WEB: "android-web",
                IOS_WEB: "iOS-web",
                PC_NATIVE: "PC-native",
                PC_WEB: "PC-web"
            },
            s = {
                getNetType: function() {
                    return (new RegExp("nettype\\/(\\w*)").exec(n()) || [, ""])[1].toLowerCase()
                },
                getPlatform: function() {
                    return s.isAndroid() ? o.ANDROID_WEB : s.isIOS() ? o.IOS_WEB : s.isElectron() ? o.PC_NATIVE : o.PC_WEB
                },
                isX5: function() {
                    return this.isAndroid() && /\s(TBS|X5Core)\/[\w\.\-]+/i.test(n())
                },
                isPC: function() {
                    return !a(i("os ")) && !a(i("android[/ ]"))
                },
                isIOS: function() {
                    return a(i("os "))
                },
                isAndroid: function() {
                    return a(i("android[/ ]"))
                },
                isSafari: function() {
                    return this.isIOS() && /^((?!chrome|android).)*safari/i.test(n())
                },
                isElectron: function() {
                    return /electron/i.test(n())
                },
                isMobile: function() {
                    return s.isAndroid() || s.isIOS()
                },
                device: o
            };
        e.exports = s
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.config = t.FragLoader = t.Tracker = void 0;
        var i = n(r(9)),
            a = n(r(14));
        t.Tracker = i.default, t.FragLoader = a.default, t.config = {
            prefetchNum: 10
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, n = function(e, t, r) {
                return t && a(e.prototype, t), r && a(e, r), e
            },
            i = r(7),
            s = i && i.__esModule ? i : {
                default: i
            };

        function a(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        o = r(25);
        var l = {
                maxBufferLength: 5,
                liveSyncDurationCount: 10,
                liveBackBufferLength: 5
            },
            u = {
                maxBufferLength: 60
            },
            c = (function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(d, o), n(d, null, [{
                key: "P2PEvents",
                get: function() {
                    return s.default.Events
                }
            }]), n(d, [{
                key: "enableP2P",
                value: function() {
                    this._p2pEngine = this._p2pEngine.enableP2P()
                }
            }, {
                key: "disableP2P",
                value: function() {
                    this._p2pEngine.disableP2P()
                }
            }, {
                key: "restartP2P",
                value: function() {
                    var e = this;
                    this._p2pEngine.disableP2P(), window.setTimeout(function() {
                        e.enableP2P()
                    }, 2e3), this._p2pEngine.removeListener(s.default.Events.RESTART_P2P, this._restartEvent)
                }
            }, {
                key: "p2pEngine",
                get: function() {
                    return this._p2pEngine
                }
            }]), d);

        function d() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, d);
            var t = e.p2pConfig || {},
                r = !0 === t.live ? l : u,
                n = JSON.parse(JSON.stringify(r));
            for (var i in e) "p2pConfig" !== i && (n[i] = e[i]);
            var a = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, n));
            return a._restartEvent = function() {
                console.warn("hlsjs restartP2P"), a.restartP2P()
            }, s.default.isSupported() && (a.engine = {
                on: function() {}
            }, a._p2pEngine = new s.default(a, t), a._p2pEngine.on(s.default.Events.RESTART_P2P, a._restartEvent)), a.on(o.Events.DESTROYING, function() {
                console.warn("destroying hlsjs"), a._p2pEngine && (a._p2pEngine.destroy(), a._p2pEngine = null)
            }), a
        }
        c.engineVersion = s.default.version, c.WEBRTC_SUPPORT = s.default.isSupported(), t.default = c, e.exports = t.default
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = function(e, t, r) {
                return t && u(e.prototype, t), r && u(e, r), e
            },
            a = n(r(0)),
            f = n(r(3)),
            o = n(r(8)),
            s = r(5),
            l = n(r(22)),
            h = r(1),
            g = n(r(23)),
            p = n(r(4)),
            v = r(2),
            m = n(r(24));

        function u(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        if (window.cdnbyeloaded) throw new Error("Klink P2P plugin is loaded before(重复加载 Klink P2P插件)");
        window.cdnbyeloaded = !0;
        var c = (function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(y, a.default), i(y, null, [{
            key: "Events",
            get: function() {
                return h.Events
            }
        }]), i(y, [{
            key: "_init",
            value: function(e, t) {
                var r = this;
                if (this.p2pEnabled) {
                    this.hlsjs.config.p2pEnabled = this.p2pEnabled, this.bufMgr = new l.default(this, this.config), this.hlsjs.config.bufMgr = this.bufMgr, this.media = this.hlsjs.media;
                    var n = new h.Fetcher(this, this.config.token, window.encodeURIComponent(e), this.config.announce || "", t);
                    this.fetcher = n, this.tracker = new s.Tracker(this, n, this.config), this.tracker.scheduler.bufferManager = this.bufMgr, this.hlsjs.config.fLoader = s.FragLoader, this.hlsjs.config.scheduler = this.tracker.scheduler, this.hlsjs.config.fetcher = n, this.hlsjs.config.p2pBlackList = this.config.p2pBlackList, this.trackerTried = !1, this.eventListened || (this.hlsjs.on(this.HLSEvents.FRAG_LOADING, this._onFragLoading.bind(this)), this.hlsjs.on(this.HLSEvents.FRAG_LOADED, this._onFragLoaded.bind(this)), this.hlsjs.on(this.HLSEvents.FRAG_CHANGED, this._onFragChanged.bind(this)), this.hlsjs.on(this.HLSEvents.ERROR, this._onHlsError.bind(this)), this.eventListened = !0), window.addEventListener("beforeunload", function() {
                        r.p2pEnabled && r.disableP2P()
                    }), window.addEventListener("unload", function() {
                        r.p2pEnabled && r.disableP2P()
                    })
                }
            }
        }, {
            key: "_onFragLoading",
            value: function(e, t) {
                var r = t.frag.sn;
                (0, v.isBlockType)(t.frag.url, this.config.p2pBlackList) || (this.logger.debug("loading frag " + r), this.emit(h.Events.FRAG_LOADING, r))
            }
        }, {
            key: "_onFragLoaded",
            value: function(e, t) {
                var r = this,
                    n = t.frag,
                    i = n.sn,
                    a = n.duration;
                if (!(0, v.isBlockType)(t.frag.url, this.config.p2pBlackList) && (this.hlsjs.config.currLoaded = i, this.emit(h.Events.FRAG_LOADED, i, a), this.hlsjs.config.currLoadedDuration = t.frag.duration, this.trackerTried || this.tracker.connected || !this.config.p2pEnabled || (this.tracker.resumeP2P(), this.trackerTried = !0, this.config.useHttpRange ? fetch(t.frag.url, {
                        headers: {
                            Range: "bytes=0-10"
                        }
                    }).then(function(e) {
                        206 === e.status && (r.config.httpRangeSupported = !0, r.logger.info("http range request is supported"))
                    }).catch(function(e) {
                        r.config.httpRangeSupported = !1, r.logger.warn("http range request is not supported")
                    }) : this.config.httpRangeSupported = !1), this.config.p2pEnabled && this.bufMgr.hasSegOfSN(i + 1))) {
                    var o = this.bufMgr.getSegIdbySN(i + 1),
                        s = this.bufMgr.getSegById(o).level;
                    this.hlsjs.nextLoadLevel = s
                }
            }
        }, {
            key: "_onFragChanged",
            value: function(e, t) {
                if (!(0, v.isBlockType)(t.frag.url, this.config.p2pBlackList)) {
                    this.logger.debug("frag changed: " + t.frag.sn);
                    var r = t.frag,
                        n = r.sn,
                        i = r.duration;
                    this.hlsjs.config.currPlay = n, this.emit(h.Events.FRAG_CHANGED, n, i)
                }
            }
        }, {
            key: "_onHlsError",
            value: function(e, t) {
                t.fatal ? this.logger.error(t.type + " details " + t.details + " reason " + t.reason) : this.logger.warn(t.type + " details " + t.details + " reason " + t.reason);
                var r = this.hlsjs.constructor.ErrorDetails;
                switch (t.details) {
                    case r.BUFFER_STALLED_ERROR:
                        this.fetcher && this.fetcher.errsBufStalled++;
                        break;
                    case r.INTERNAL_EXCEPTION:
                        this.fetcher && (this.fetcher.errsInternalExpt++, this.fetcher.exptMsg = t.err.message), console.warn("INTERNAL_EXCEPTION event " + t.event + " err " + t.err.message)
                }
            }
        }, {
            key: "disableP2P",
            value: function() {
                this.logger && this.logger.warn("disable P2P"), this.removeAllListeners(), this.p2pEnabled && (this.p2pEnabled = !1, this.config.p2pEnabled = this.hlsjs.config.p2pEnabled = this.p2pEnabled, this.tracker && (this.tracker.stopP2P(), this.tracker = {}, this.fetcher = null, this.bufMgr.destroy(), this.bufMgr = null, this.hlsjs.config.fLoader = this.hlsjs.constructor.DefaultConfig.loader))
            }
        }, {
            key: "enableP2P",
            value: function() {
                return this.p2pEnabled ? null : (this.logger.info("enable P2P"), this.p2pEnabled = !0, this.config.p2pEnabled = this.hlsjs.config.p2pEnabled = this.p2pEnabled, this._init(this.channel, this.browserInfo), this)
            }
        }, {
            key: "destroy",
            value: function() {
                this.disableP2P(), this.removeAllListeners(), console.warn("destroy p2p engine")
            }
        }, {
            key: "version",
            get: function() {
                return y.version
            }
        }], [{
            key: "isSupported",
            value: function() {
                var e = (0, h.getBrowserRTC)();
                return e && void 0 !== e.RTCPeerConnection.prototype.createDataChannel
            }
        }]), y);

        function y(u, e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, y);
            var c = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this));
            if (e.tag && 20 < e.tag.length) throw new Error("Tag is too long");
            if (e.agent && 20 < e.agent.length) throw new Error("Agent is too long");
            if (e.appName && 30 < e.appName.length) throw new Error("appName is too long");
            if (e.appId && 30 < e.appId.length) throw new Error("appId is too long");
            if (e.token && 20 < e.token.length) throw new Error("Token is too long");
            c.config = Object.assign({}, o.default, e), u.config.segmentId = c.config.segmentId, c.hlsjs = u, c.p2pEnabled = !(!1 === c.config.p2pEnabled || "0" === (0, v.getQueryParam)("_p2p")), u.config.currLoaded = u.config.currPlay = 0, c.HLSEvents = u.constructor.Events;
            return u.on(c.HLSEvents.LEVEL_LOADED, function e(t, r) {
                var n = r.details,
                    i = n.live;
                c.config.live = c.hlsjs.config.live = i, c.config.startSN = n.startSN, c.config.endSN = n.endSN;
                var a = p.default.getPlatform(),
                    o = p.default.getNetType() || void 0;
                c.browserInfo = {
                    device: a,
                    netType: o,
                    tag: c.config.tag || (0, m.default)(),
                    live: i,
                    type: "hls",
                    agent: c.config.agent || void 0
                }, a === p.default.device.PC_NATIVE && (c.browserInfo = d({}, c.browserInfo, {
                    app: c.config.appName,
                    bundle: c.config.appId
                })), !1 !== c.config.useHttpRange && i && (c.config.useHttpRange = !0);
                var s = f.default.parseURL(c.config.wsSignalerAddr).netLoc.substr(2);
                c.channel = c.config.channelId(u.url, c.browserInfo) + "|" + s + "[" + h.DataChannel.VERSION + "]";
                var l = new g.default(c.config);
                c.hlsjs.config.logger = c.logger = l, l.info("Klink P2P version: " + y.version + " Hlsjs version: " + u.constructor.version), l.info("channel " + c.channel), l.info("device " + a + " netType " + o), c.eventListened = !1, c._init(c.channel, c.browserInfo), l.info("startSN " + n.startSN + " endSN " + n.endSN), u.off(c.HLSEvents.LEVEL_LOADED, e)
            }), c
        }
        c.WEBRTC_SUPPORT = !!(0, h.getBrowserRTC)(), c.version = "1.1.0", t.default = c, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            },
            i = r(5),
            a = r(3),
            o = a && a.__esModule ? a : {
                default: a
            },
            s = n({
                wsSignalerAddr: "wss://signal.klink.tech/ws",
                wsMaxRetries: 15,
                wsReconnectInterval: 30,
                p2pEnabled: !0,
                memoryCacheLimit: {
                    pc: 536870912,
                    mobile: 268435456
                },
                dcDownloadTimeout: 10,
                logLevel: "none",
                tag: "",
                webRTCConfig: {},
                p2pBlackList: ["aac", "mp3", "vtt", "webvtt", "key"],
                agent: "",
                token: "free",
                appName: void 0,
                appId: void 0
            }, i.config);
        s.channelId = function(e) {
            var t = o.default.parseURL(e);
            return "" + (t.netLoc.substr(2) + t.path.split(".")[0])
        }, s.segmentId = function(e, t, r) {
            return e + "-" + t
        }, s.validateSegment = function(e, t, r) {
            return !0
        }, s.getStats = function(e, t, r) {}, s.getPeerId = function(e) {}, s.getPeersInfo = function(e) {}, t.default = s, e.exports = t.default
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e, t, r) {
                return t && h(e.prototype, t), r && h(e, r), e
            },
            a = n(r(0)),
            o = n(r(10)),
            s = n(r(12)),
            u = r(1),
            c = n((r(2), r(4))),
            d = (function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(f, a.default), i(f, [{
                key: "resumeP2P",
                value: function() {
                    var r = this;
                    this.fetcher.btAnnounce().then(function(e) {
                        r.logger.info("announce request response " + JSON.stringify(e)), r.engine.peerId = r.peerId = e.id, r.minConns = e.min_conns, e.share_only && r.scheduler && r.scheduler.setShareOnly(), r.signalerWs = r._initSignalerWs(), 0 === e.peers.length ? r.requestMorePeers() : r._handlePeers(e.peers), r.engine.emit("peerId", r.peerId);
                        var t = r.engine.config.getPeerId;
                        t && "function" == typeof t && t(r.peerId)
                    }).catch(function(e) {
                        console.warn(e)
                    })
                }
            }, {
                key: "stopP2P",
                value: function() {
                    this.fetcher.destroy(), this.fetcher = null, this.requestMorePeers(!0), this.scheduler.destroy(), this.scheduler = null, this.signalerWs && (this.signalerWs.destroy(), this.signalerWs = null);
                    var e = !0,
                        t = !(this.peers = []),
                        r = void 0;
                    try {
                        for (var n, i = this.DCMap.values()[Symbol.iterator](); !(e = (n = i.next()).done); e = !0) n.value.destroy()
                    } catch (e) {
                        t = !0, r = e
                    } finally {
                        try {
                            !e && i.return && i.return()
                        } finally {
                            if (t) throw r
                        }
                    }
                    this.DCMap.clear(), this.failedDCSet.clear(), this.logger.warn("tracker stop p2p")
                }
            }, {
                key: "destroy",
                value: function() {
                    this.stopP2P(), this.removeAllListeners(), this.logger.warn("destroy tracker")
                }
            }, {
                key: "_handlePeers",
                value: function(e) {
                    var i = this,
                        t = !0,
                        r = !1,
                        n = void 0;
                    try {
                        for (var a, o = e[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) {
                            var s = a.value;
                            this.peers.push({
                                id: s.id
                            })
                        }
                    } catch (e) {
                        r = !0, n = e
                    } finally {
                        try {
                            !t && o.return && o.return()
                        } finally {
                            if (r) throw n
                        }
                    }
                    this.peers = this.peers.filter(function(e) {
                        for (var t = [].concat(l(i.DCMap.keys()), l(i.failedDCSet.keys())), r = 0; r < t.length; r++) {
                            var n = t[r];
                            if (e.id === n) return !1
                        }
                        return !0
                    })
                }
            }, {
                key: "_tryConnectToAllPeers",
                value: function() {
                    var r = this;
                    0 !== this.peers.length && (this.logger.info("try connect to " + this.peers.length + " peers"), this.peers.forEach(function(e) {
                        var t = new u.DataChannel(r.engine, r.peerId, e.id, !0, r.config);
                        r.DCMap.set(e.id, t), r._setupDC(t)
                    }), this.peers = [])
                }
            }, {
                key: "_setupDC",
                value: function(r) {
                    var n = this;
                    r.on(u.Events.DC_SIGNAL, function(e) {
                        var t = r.remotePeerId;
                        n.signalerWs.sendSignal(t, e)
                    }).once(u.Events.DC_ERROR, function() {
                        n.logger.info("datachannel connect " + r.channelId + " failed"), n.scheduler && n.scheduler.deletePeer(r), n.DCMap.delete(r.remotePeerId), n.failedDCSet.add(r.remotePeerId), r.destroy(), n.requestMorePeers(), r.connected && n.fetcher ? n.fetcher.decreConns() : n.fetcher.increFailConns()
                    }).once(u.Events.DC_CLOSE, function() {
                        n.logger.info("datachannel " + r.channelId + " closed"), n.scheduler && n.scheduler.deletePeer(r), n.DCMap.delete(r.remotePeerId), n.failedDCSet.add(r.remotePeerId), r.destroy(), n.requestMorePeers(), n.fetcher && n.fetcher.decreConns()
                    }).once(u.Events.DC_OPEN, function() {
                        n.scheduler.handshakePeer(r);
                        var e = !(n.scheduler.peersNum <= n.minConns);
                        n.requestMorePeers(e), n.fetcher.increConns()
                    })
                }
            }, {
                key: "_initSignalerWs",
                value: function() {
                    var a = this,
                        e = new s.default(this.engine, this.peerId, this.config);
                    return e.onopen = function() {
                        a.connected = !0, a._tryConnectToAllPeers()
                    }, e.onmessage = function(e) {
                        var t = JSON.parse(e.data),
                            r = t.action;
                        switch (r) {
                            case "signal":
                                var n = t.from_peer_id;
                                if (a.failedDCSet.has(n) || !n) return;
                                if (a.logger.debug("handle signal of " + n), t.data) a._handleSignal(n, t.data);
                                else {
                                    a.logger.info("signaling " + n + " not found");
                                    var i = a.DCMap.get(n);
                                    i && (i.destroy(), a.DCMap.delete(n)), a.failedDCSet.add(n)
                                }
                                break;
                            case "reject":
                                a.stopP2P();
                                break;
                            default:
                                a.logger.warn("Signaler websocket unknown action " + r)
                        }
                    }, e.onclose = function() {
                        a.connected = !1
                    }, e
                }
            }, {
                key: "_handleSignal",
                value: function(e, t) {
                    var r = this.DCMap.get(e);
                    if (r && r.connected) this.logger.info("datachannel had connected, signal ignored");
                    else {
                        if (!r) {
                            if (this.logger.debug("receive node " + e + " connection request"), this.failedDCSet.has(e)) return;
                            if (this.scheduler.peersNum > this.maxConns) return void this.logger.info("Peers num excess MAX_CONNS " + this.maxConns);
                            r = new u.DataChannel(this.engine, this.peerId, e, !1, this.config), this.DCMap.set(e, r), this._setupDC(r)
                        }
                        r.receiveSignal(t)
                    }
                }
            }, {
                key: "_requestMorePeers",
                value: function() {
                    var t = this;
                    this.scheduler.peersNum <= this.minConns && this.fetcher.btGetPeers().then(function(e) {
                        t.logger.info("request more peers " + JSON.stringify(e)), t._handlePeers(e.peers), t._tryConnectToAllPeers()
                    }).catch(function(e) {
                        t.logger.error("_requestMorePeers error " + e)
                    })
                }
            }]), f);

        function f(e, t, r) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, f);
            var n = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this));
            return n.engine = e, n.logger = e.logger, n.config = r, n.connected = !1, n.scheduler = new o.default(e, r), n.DCMap = new Map, n.failedDCSet = new Set, n.signalerWs = null, n.fetcher = t, n.peers = [], n.minConns = 0, n.requestMorePeers = (0, u.getPeersThrottle)(n._requestMorePeers, n), n.maxConns = c.default.isMobile() ? 15 : 50, n
        }

        function h(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        t.default = d, e.exports = t.default
    }, function(e, t, r) {
        "use strict";

        function p(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, r) {
                return t && u(e.prototype, t), r && u(e, r), e
            },
            i = r(0),
            a = i && i.__esModule ? i : {
                default: i
            },
            d = r(1),
            o = Symbol("shareOnly"),
            s = (function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(l, a.default), n(l, [{
                key: "startCheckPeersTimer",
                value: function() {
                    var e, t = this,
                        r = 0 === (e = this.loadedPeerNum) ? 3 : .33 * e + 1.67;
                    this.engine.logger.info("loaded peers " + this.loadedPeerNum + " next checkDelay is " + r), this.loadedPeerNum = 0, this.checkTimer = window.setTimeout(function() {
                        t.checkPeers(), t.startCheckPeersTimer()
                    }, 1e3 * r)
                }
            }, {
                key: "updateLoadedSN",
                value: function(e) {
                    this.bitset.add(e), this.bitCounts.has(e) && this.bitCounts.delete(e);
                    var t = {
                        event: d.Events.DC_HAVE,
                        sn: e
                    };
                    this._broadcastToPeers(t)
                }
            }, {
                key: "updatePlaySN",
                value: function(e) {
                    this.engine.logger.info("updatePlaySN " + e), this.currPlaySN = e
                }
            }, {
                key: "checkPeers",
                value: function() {
                    var e = this.engine.logger;
                    if (!(0 <= this.currLostSN && this.currLostSN >= this.currPlaySN - 5) && this.hasPeers) {
                        var t = [].concat(p(this.peerMap.values())).filter(function(e) {
                            return e.isAvailable
                        });
                        if (0 !== t.length) {
                            var r = [],
                                n = this.config,
                                i = n.prefetchNum,
                                a = n.endSN,
                                o = 0,
                                s = this.loadingSN + 1;
                            if (!this.config.live) {
                                var l = Math.min.apply(Math, p(t.filter(function(e) {
                                    return e.endSN >= s
                                }).map(function(e) {
                                    return e ? e.startSN : 1 / 0
                                })));
                                if (!isFinite(l)) return;
                                s < l && (s = l)
                            }
                            for (; r.length <= i && r.length < t.length && o <= this.maxPrefetchCount;) {
                                if (!this.config.live && a < s) return;
                                if (this.bitset.has(s)) s++;
                                else {
                                    if (s !== this.loadingSN && this.bitCounts.has(s) && !this.requestingMap.has(s)) {
                                        var u = !0,
                                            c = !1,
                                            d = void 0;
                                        try {
                                            for (var f, h = t[Symbol.iterator](); !(u = (f = h.next()).done); u = !0) {
                                                var g = f.value;
                                                if (!r.includes(g) && g.bitset.has(s) && g.isAvailable) {
                                                    g.requestDataBySN(s, !1), e.info("request prefetch " + s + " from peer " + g.remotePeerId + " downloadNum " + g.downloadNum), r.push(g), this.requestingMap.set(s, g.remotePeerId);
                                                    break
                                                }
                                            }
                                        } catch (e) {
                                            c = !0, d = e
                                        } finally {
                                            try {
                                                !u && h.return && h.return()
                                            } finally {
                                                if (c) throw d
                                            }
                                        }
                                    }
                                    o++, s++
                                }
                            }
                            this.loadedPeerNum = r.length
                        }
                    }
                }
            }, {
                key: "chokePeerRequest",
                value: function(e) {
                    var t = {
                        event: d.Events.DC_CHOKE
                    };
                    e ? e.sendJson(t) : this._broadcastToPeers(t)
                }
            }, {
                key: "unchokePeerRequest",
                value: function(e) {
                    var t = {
                        event: d.Events.DC_UNCHOKE
                    };
                    e ? e.sendJson(t) : this._broadcastToPeers(t)
                }
            }, {
                key: "stopRequestFromPeers",
                value: function() {
                    var e = !0,
                        t = !1,
                        r = void 0;
                    try {
                        for (var n, i = this.peerMap.values()[Symbol.iterator](); !(e = (n = i.next()).done); e = !0) n.value.choked = !0
                    } catch (e) {
                        t = !0, r = e
                    } finally {
                        try {
                            !e && i.return && i.return()
                        } finally {
                            if (t) throw r
                        }
                    }
                }
            }, {
                key: "resumeRequestFromPeers",
                value: function() {
                    var e = !0,
                        t = !1,
                        r = void 0;
                    try {
                        for (var n, i = this.peerMap.values()[Symbol.iterator](); !(e = (n = i.next()).done); e = !0) n.value.choked = !1
                    } catch (e) {
                        t = !0, r = e
                    } finally {
                        try {
                            !e && i.return && i.return()
                        } finally {
                            if (t) throw r
                        }
                    }
                }
            }, {
                key: "setShareOnly",
                value: function() {
                    this[o] = !0
                }
            }, {
                key: "deletePeer",
                value: function(e) {
                    var t = this;
                    this.peerMap.has(e.remotePeerId) && (this.peerMap.delete(e.remotePeerId), e.bitset.forEach(function(e) {
                        t._decreBitCounts(e)
                    })), this._peersStats([].concat(p(this.peerMap.keys())))
                }
            }, {
                key: "handshakePeer",
                value: function(e) {
                    this._setupDC(e), e.sendBitField(Array.from(this.bitset))
                }
            }, {
                key: "addPeer",
                value: function(e) {
                    this.engine.logger.debug("add peer " + e.remotePeerId), this.peerMap.set(e.remotePeerId, e), this[o] && (e.choked = !0), this._peersStats([].concat(p(this.peerMap.keys())))
                }
            }, {
                key: "peersHasSN",
                value: function(e) {
                    return this.bitCounts.has(e)
                }
            }, {
                key: "hasAndSetTargetPeer",
                value: function(e) {
                    var t = this.engine.logger;
                    if (this.bufferedDuration <= 5) return !1;
                    if (this.requestingMap.has(e)) return !0;
                    if (!this.hasIdlePeers || !this.peersHasSN(e)) return !1;
                    var r = !0,
                        n = !1,
                        i = void 0;
                    try {
                        for (var a, o = this.peerMap.values()[Symbol.iterator](); !(r = (a = o.next()).done); r = !0) {
                            var s = a.value;
                            if (s.isAvailableUrgently && s.bitset.has(e)) return t.info("found sn " + e + " from peer " + s.remotePeerId), this.targetPeer = s, !0
                        }
                    } catch (e) {
                        n = !0, i = e
                    } finally {
                        try {
                            !r && o.return && o.return()
                        } finally {
                            if (n) throw i
                        }
                    }
                    return t.info("idle peers hasn't sn " + e + " or busy"), !1
                }
            }, {
                key: "load",
                value: function(e, t, r) {
                    var n = this.engine.logger,
                        i = (this.context = e).frag,
                        a = this.config.segmentId(i.level, i.sn, i.url);
                    this.callbacks = r, this.stats = {
                        trequest: performance.now(),
                        retry: 0,
                        tfirst: 0,
                        tload: 0,
                        loaded: 0
                    }, this.criticalSeg = {
                        sn: i.sn,
                        segId: a
                    };
                    var o = this.mBufferedDuration - 5;
                    o > this.dcDownloadTimeout ? o = this.dcDownloadTimeout : o < 3 && (o = 3), this.requestingMap.has(i.sn) ? n.info("wait for criticalSeg segId " + a + " at " + i.sn + " timeout " + o) : (this.targetPeer.requestDataById(a, i.sn, !0), n.info("request criticalSeg segId " + a + " at " + i.sn + " timeout " + o)), this.criticaltimeouter = window.setTimeout(this._criticaltimeout.bind(this), 1e3 * o)
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this.engine.logger;
                    0 < this.peersNum && this.peerMap.clear(), this.removeAllListeners(), this.checkTimer && (window.clearTimeout(this.checkTimer), this.checkTimer = null), e.warn("destroy scheduler")
                }
            }, {
                key: "_setupDC",
                value: function(l) {
                    var u = this,
                        c = this.engine.logger;
                    l.on(d.Events.DC_BITFIELD, function(e) {
                        e.field && (l.bitset = new Set(e.field), e.field.forEach(function(e) {
                            u.bitset.has(e) || u._increBitCounts(e)
                        }), u.addPeer(l))
                    }).on(d.Events.DC_HAVE, function(e) {
                        if (e.sn && l.bitset) {
                            var t = e.sn;
                            if (l.bitset.add(t), u.bitset.has(t) || u._increBitCounts(t), u.config.live) {
                                var r = t - 60;
                                0 < r && l.bitset.delete(r)
                            }
                        }
                    }).on(d.Events.DC_LOST, function(e) {
                        if (e.sn && l.bitset) {
                            var t = e.sn;
                            l.bitset.delete(t), u._decreBitCounts(t)
                        }
                    }).on(d.Events.DC_PIECE_ACK, function(e) {
                        e.size && u.engine.fetcher.reportUploaded(e.size)
                    }).on(d.Events.DC_PIECE, function(e) {
                        u.criticalSeg && u.criticalSeg.segId === e.seg_id && (u.stats.tfirst = Math.max(performance.now(), u.stats.trequest))
                    }).on(d.Events.DC_PIECE_NOT_FOUND, function(e) {
                        u.criticalSeg && u.criticalSeg.segId === e.seg_id && (window.clearTimeout(u.criticaltimeouter), c.info("DC_PIECE_NOT_FOUND"), u.callbacks.onTimeout(u.stats, u.context, null)), l.bitset.delete(e.sn), u.requestingMap.delete(e.sn), u._decreBitCounts(e.sn)
                    }).on(d.Events.DC_RESPONSE, function(e) {
                        var t = e.level,
                            r = e.sn,
                            n = e.data,
                            i = e.seg_id,
                            a = u.criticalSeg && u.criticalSeg.segId === i;
                        if (u.config.validateSegment(t, r, n)) {
                            if (a) {
                                c.info("receive criticalSeg seg_id " + i), window.clearTimeout(u.criticaltimeouter), u.criticaltimeouter = null, l.miss = 0;
                                var o = u.stats;
                                o.tload = Math.max(o.tfirst, performance.now()), o.loaded = o.total = n.byteLength, u.criticalSeg = null;
                                var s = u.context.frag;
                                s.fromPeerId = l.remotePeerId, s.loadByP2P = !0, u.callbacks.onSuccess(e, o, u.context)
                            } else u.bufMgr.handleFrag(r, t, i, n, l.remotePeerId, !1), u.updateLoadedSN(r);
                            u.requestingMap.delete(r)
                        } else c.warn("segment " + t + "-" + r + " validate failed"), a && (window.clearTimeout(u.criticaltimeouter), u._criticaltimeout())
                    }).on(d.Events.DC_REQUEST, function(e) {
                        var t;
                        if ((t = e.seg_id ? e.seg_id : u.bufMgr.getSegIdbySN(e.sn)) && u.bufMgr.hasSegOfId(t)) {
                            var r = u.bufMgr.getSegById(t);
                            l.sendBuffer(r.sn, r.level, r.segId, r.data), l.engine.tracker.signalerWs._send({
                                action: "tranx",
                                peer_id: this.peerId,
                                to_peer_id: l.remotePeerId
                            })
                        } else l.sendJson({
                            event: d.Events.DC_PIECE_NOT_FOUND,
                            seg_id: t,
                            sn: e.sn
                        })
                    }).on(d.Events.DC_TIMEOUT, function(e) {})
                }
            }, {
                key: "_setupEngine",
                value: function() {
                    var r = this;
                    this.engine.on(d.Events.FRAG_LOADING, function(e) {
                        r.loadingSN = e, r.config.live && r.checkPeers()
                    }).on(d.Events.FRAG_LOADED, function(e, t) {
                        r.updateLoadedSN(e)
                    }).on(d.Events.FRAG_CHANGED, function(e, t) {
                        r.updatePlaySN(e)
                    })
                }
            }, {
                key: "_broadcastToPeers",
                value: function(e) {
                    if (0 < this.peersNum) {
                        var t = !0,
                            r = !1,
                            n = void 0;
                        try {
                            for (var i, a = this.peerMap.values()[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) i.value.sendJson(e)
                        } catch (e) {
                            r = !0, n = e
                        } finally {
                            try {
                                !t && a.return && a.return()
                            } finally {
                                if (r) throw n
                            }
                        }
                    }
                }
            }, {
                key: "_getIdlePeer",
                value: function() {
                    return [].concat(p(this.peerMap.values())).filter(function(e) {
                        return e.isAvailable
                    })
                }
            }, {
                key: "_decreBitCounts",
                value: function(e) {
                    if (this.bitCounts.has(e)) {
                        var t = this.bitCounts.get(e);
                        1 === t ? this.bitCounts.delete(e) : this.bitCounts.set(e, t - 1)
                    }
                }
            }, {
                key: "_increBitCounts",
                value: function(e) {
                    if (this.bitCounts.has(e)) {
                        var t = this.bitCounts.get(e);
                        this.bitCounts.set(e, t + 1)
                    } else this.bitCounts.set(e, 1)
                }
            }, {
                key: "_criticaltimeout",
                value: function() {
                    var o = this,
                        t = this.engine.logger;
                    if (this.criticalSeg) {
                        var e = this.criticalSeg.sn;
                        if (t.info("critical request sn " + e + " timeout"), this.requestingMap.has(e) && (this.targetPeer = this.peerMap.get(this.requestingMap.get(e))), this.config.httpRangeSupported && this.targetPeer && this.targetPeer.bufSN === e && 0 < this.targetPeer.bufArr.length) {
                            var s = d.Buffer.concat(this.targetPeer.bufArr);
                            t.info("continue download from " + this.context.frag.url + " range: " + s.byteLength + "-"), fetch(this.context.frag.url, {
                                headers: {
                                    Range: "bytes=" + s.byteLength + "-"
                                }
                            }).then(function(e) {
                                return e.arrayBuffer()
                            }).then(function(e) {
                                var t = d.Buffer.from(e);
                                o.engine.fetcher.reportFlow(t.byteLength);
                                var r = d.Buffer.concat([s, t]),
                                    n = new Uint8Array(r).buffer,
                                    i = o.stats;
                                i.tload = Math.max(i.tfirst, performance.now()), i.loaded = i.total = r.byteLength;
                                var a = o.context.frag;
                                a.fromPeerId = o.targetPeer.remotePeerId, a.loadByP2P = !0, o.callbacks.onSuccess({
                                    data: n
                                }, i, o.context)
                            }).catch(function(e) {
                                t.error("http partial download error " + e), o.callbacks.onTimeout(o.stats, o.context, null)
                            })
                        } else this.callbacks.onTimeout(this.stats, this.context, null), this.targetPeer && this.targetPeer.loadtimeout();
                        this.criticalSeg = null, this.criticaltimeouter = null
                    }
                }
            }, {
                key: "_peersStats",
                value: function(e) {
                    this.engine.emit("peers", e);
                    var t = this.engine.config.getPeersInfo;
                    t && "function" == typeof t && t(e)
                }
            }, {
                key: "hasPeers",
                get: function() {
                    return 0 < this.peersNum
                }
            }, {
                key: "peersNum",
                get: function() {
                    return this.peerMap.size
                }
            }, {
                key: "hasIdlePeers",
                get: function() {
                    var e = this.engine.logger,
                        t = this._getIdlePeer().length;
                    return e.info("peers: " + this.peersNum + " idle peers: " + t), 0 < t
                }
            }, {
                key: "bufferedDuration",
                get: function() {
                    for (var e = this.engine.media, t = 0, r = e.currentTime, n = e.buffered, i = n.length - 1; 0 <= i; i--)
                        if (r >= n.start(i) && r <= n.end(i)) {
                            t = n.end(i) - r;
                            break
                        } return this.engine.logger.info("bufferedDuration " + t), 0 < (this.mBufferedDuration = t) ? t : 0
                }
            }, {
                key: "bufferManager",
                set: function(e) {
                    var t = this;
                    (this.bufMgr = e).on(d.Events.BM_LOST, function(e) {
                        t.currLostSN = e, t.config.live || t._broadcastToPeers({
                            event: d.Events.DC_LOST,
                            sn: e
                        }), t.bitset.delete(e), t.bitCounts.delete(e)
                    })
                }
            }]), l);

        function l(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, l);
            var r = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this));
            return r.engine = e, r.config = t, r.bufMgr = null, r.peerMap = new Map, r.bitset = new Set, r.bitCounts = new Map, r.targetPeer = null, r._setupEngine(), r.currPlaySN = 0, r.currLostSN = -1, r.checkTimer = null, r.loadedPeerNum = 0, r.config.live ? r.maxPrefetchCount = 5 : (r.maxPrefetchCount = 50, r.startCheckPeersTimer()), r.requestingMap = new Map, r.dcDownloadTimeout = t.dcDownloadTimeout, r.mBufferedDuration = 0, r[o] = !1, r
        }

        function u(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        t.default = s, e.exports = t.default
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), e.webpackPolyfill = 1), e
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e, t, r) {
                return t && u(e.prototype, t), r && u(e, r), e
            },
            a = n(r(0)),
            o = n(r(13)),
            s = (function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(l, a.default), i(l, [{
                key: "_init",
                value: function(e) {
                    var r = this,
                        t = {
                            maxRetries: this.config.wsMaxRetries,
                            minReconnectionDelay: 1e3 * this.config.wsReconnectInterval
                        },
                        n = "?id=" + e,
                        i = new o.default(this.wsAddr + n, void 0, t);
                    return i.onopen = function() {
                        r.logger.info("Signaler websocket connection opened"), r.connected = !0, r.onopen && r.onopen(), r._startPing()
                    }, i.push = i.send, i.send = function(e) {
                        var t = JSON.stringify(e);
                        i.push(t), r._resetPing()
                    }, i.onmessage = function(e) {
                        r.onmessage && r.onmessage(e)
                    }, i.onclose = function(e) {
                        r.logger.warn("Signaler websocket closed " + e.code + " " + e.reason), r.onclose && r.onclose(), r.connected = !1, r._stopPing()
                    }, i.onerror = function(e) {
                        console.warn("Signaler websocket error")
                    }, i
                }
            }, {
                key: "sendSignal",
                value: function(e, t) {
                    var r = {
                        peer_id: this.peerId,
                        action: "signal",
                        to_peer_id: e,
                        data: t
                    };
                    this._send(r)
                }
            }, {
                key: "_send",
                value: function(e) {
                    this.connected ? this._ws.send(e) : this.logger.warn("signaler closed, send msg failed")
                }
            }, {
                key: "_startPing",
                value: function() {
                    var e = this;
                    this.pingTimer = window.setInterval(function() {
                        e._ws.send(9)
                    }, 12e4)
                }
            }, {
                key: "_resetPing",
                value: function() {
                    this._stopPing(), this._startPing()
                }
            }, {
                key: "_stopPing",
                value: function() {
                    window.clearInterval(this.pingTimer), this.pingTimer = null
                }
            }, {
                key: "close",
                value: function() {
                    this.logger.warn("close signal client"), this.connected = !1, this._ws.close(1e3, "stop signaling", {
                        keepClosed: !0
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.close(), this._ws = null, this.removeAllListeners(), this.logger.warn("destroy signaler")
                }
            }]), l);

        function l(e, t, r) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, l);
            var n = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this));
            return n.engine = e, n.logger = e.logger, n.peerId = t, n.config = r, n.wsAddr = r.wsSignalerAddr, n.connected = !1, n._ws = n._init(t), n
        }

        function u(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        t.default = s, e.exports = t.default
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && 2 === e.CLOSING
        }

        function i() {
            return {
                constructor: "undefined" != typeof WebSocket && n(WebSocket) ? WebSocket : null,
                maxReconnectionDelay: 1e4,
                minReconnectionDelay: 1500,
                reconnectionDelayGrowFactor: 1.3,
                connectionTimeout: 4e3,
                maxRetries: 1 / 0,
                debug: !1
            }
        }

        function E(t, e, r) {
            Object.defineProperty(e, r, {
                get: function() {
                    return t[r]
                },
                set: function(e) {
                    t[r] = e
                },
                enumerable: !0,
                configurable: !0
            })
        }

        function _(e) {
            return e.minReconnectionDelay + Math.random() * e.minReconnectionDelay
        }
        var T = ["onopen", "onclose", "onmessage", "onerror"],
            a = function(o, s, t) {
                var l = this;
                void 0 === t && (t = {});
                var d, u, f = 0,
                    h = 0,
                    g = !0,
                    p = null,
                    v = {};
                if (!(this instanceof a)) throw new TypeError("Failed to construct 'ReconnectingWebSocket': Please use the 'new' operator");
                var m = i();
                if (Object.keys(m).filter(function(e) {
                        return t.hasOwnProperty(e)
                    }).forEach(function(e) {
                        return m[e] = t[e]
                    }), !n(m.constructor)) throw new TypeError("Invalid WebSocket constructor. Set `options.constructor`");

                function c(e, r) {
                    return setTimeout(function() {
                        var t = new Error(r);
                        t.code = e, Array.isArray(v.error) && v.error.forEach(function(e) {
                            return (0, e[0])(t)
                        }), d.onerror && d.onerror(t)
                    }, 0)
                }

                function y() {
                    var e, t;
                    b("handleClose", {
                        shouldRetry: g
                    }), b("retries count:", ++h), h > m.maxRetries ? c("EHOSTDOWN", "Too many failed connection attempts") : (f = f ? (t = f * (e = m).reconnectionDelayGrowFactor) > e.maxReconnectionDelay ? e.maxReconnectionDelay : t : _(m), b("handleClose - reconnectDelay:", f), g && setTimeout(r, f))
                }
                var b = m.debug ? function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        return console.log.apply(console, ["RWS:"].concat(e))
                    } : function() {},
                    r = function() {
                        if (g) {
                            b("connect");
                            var e = d,
                                t = "function" == typeof o ? o() : o;
                            for (var r in d = new m.constructor(t, s), u = setTimeout(function() {
                                    b("timeout"), d.close(), c("ETIMEDOUT", "Connection timeout")
                                }, m.connectionTimeout), b("bypass properties"), d)["addEventListener", "removeEventListener", "close", "send"].indexOf(r) < 0 && E(d, l, r);
                            d.addEventListener("open", function() {
                                clearTimeout(u), b("open"), f = _(m), b("reconnectDelay:", f), h = 0
                            }), d.addEventListener("close", y), i = d, n = e, a = v, Object.keys(a).forEach(function(n) {
                                a[n].forEach(function(e) {
                                    var t = e[0],
                                        r = e[1];
                                    i.addEventListener(n, t, r)
                                })
                            }), n && T.forEach(function(e) {
                                i[e] = n[e]
                            }), d.onclose = d.onclose || p, p = null
                        }
                        var i, n, a
                    };
                b("init"), r(), this.close = function(e, t, r) {
                    void 0 === e && (e = 1e3), void 0 === t && (t = "");
                    var n = void 0 === r ? {} : r,
                        i = n.keepClosed,
                        a = void 0 !== i && i,
                        o = n.fastClose,
                        s = void 0 === o || o,
                        l = n.delay,
                        u = void 0 === l ? 0 : l;
                    if (b("close - params:", {
                            reason: t,
                            keepClosed: a,
                            fastClose: s,
                            delay: u,
                            retriesCount: h,
                            maxRetries: m.maxRetries
                        }), g = !a && h <= m.maxRetries, u && (f = u), d.close(e, t), s) {
                        var c = {
                            code: e,
                            reason: t,
                            wasClean: !0
                        };
                        y(), d.removeEventListener("close", y), Array.isArray(v.close) && v.close.forEach(function(e) {
                            var t = e[0],
                                r = e[1];
                            t(c), d.removeEventListener("close", t, r)
                        }), d.onclose && (p = d.onclose, d.onclose(c), d.onclose = null)
                    }
                }, this.send = function(e) {
                    d.send(e)
                }, this.addEventListener = function(e, t, r) {
                    Array.isArray(v[e]) ? v[e].some(function(e) {
                        return e[0] === t
                    }) || v[e].push([t, r]) : v[e] = [
                        [t, r]
                    ], d.addEventListener(e, t, r)
                }, this.removeEventListener = function(e, t, r) {
                    Array.isArray(v[e]) && (v[e] = v[e].filter(function(e) {
                        return e[0] !== t
                    })), d.removeEventListener(e, t, r)
                }
            };
        e.exports = a
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, r) {
                return t && l(e.prototype, t), r && l(e, r), e
            },
            i = r(0),
            a = i && i.__esModule ? i : {
                default: i
            },
            E = r(2),
            _ = r(15),
            o = (function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(s, a.default), n(s, [{
                key: "destroy",
                value: function() {
                    this.abort()
                }
            }, {
                key: "abort",
                value: function() {
                    this.xhrLoader.abort()
                }
            }, {
                key: "load",
                value: function(e, r, n) {
                    var i = this,
                        a = this.logger,
                        o = e.frag,
                        s = this.segmentId(o.level, o.sn, o.url);
                    if ((0, E.isBlockType)(o.url, this.blockTypes)) {
                        a.info("HTTP load blockType " + o.url), e.frag.loadByHTTP = !0;
                        var l = n.onSuccess;
                        return n.onSuccess = function(e, t, r) {
                            a.info("HTTP load time " + (t.tload - t.trequest) + "ms"), l(e, t, r)
                        }, this.xhrLoader.load(e, r, n)
                    }
                    if (this.p2pEnabled && this.bufMgr.hasSegOfId(s)) {
                        a.info("bufMgr found seg sn " + o.sn + " url " + o.url);
                        var t = this.bufMgr.getSegById(s),
                            u = _.Buffer.from(t.data),
                            c = new _.Buffer(t.data.byteLength);
                        u.copy(c);
                        var d, f, h, g = new Uint8Array(c).buffer,
                            p = {
                                url: e.url,
                                data: g
                            },
                            v = {
                                trequest: d = performance.now(),
                                tfirst: f = d + 10,
                                tload: f,
                                loaded: h = o.loaded = t.size,
                                total: h,
                                retry: 0
                            };
                        o.loadByP2P = !0, e.frag.fromPeerId = t.fromPeerId, a.debug("bufMgr loaded " + o.relurl + " at " + o.sn), window.setTimeout(function() {
                            n.onSuccess(p, v, e)
                        }, 10)
                    } else if (this.p2pEnabled && this.scheduler.hasAndSetTargetPeer(o.sn)) {
                        this.scheduler.load(e, r, n);
                        var m = n.onTimeout;
                        n.onTimeout = function(e, t) {
                            a.info("P2P timeout switched to HTTP load " + o.relurl + " at " + o.sn), i.xhrLoader.load(t, r, n), n.onTimeout = m
                        };
                        var y = n.onSuccess;
                        n.onSuccess = function(e, t, r) {
                            n.onSuccess = function() {
                                a.warn("p2p loaded " + o.sn + ", http ignore")
                            }, i.bufMgr.hasSegOfId(s) || i.bufMgr.handleFrag(o.sn, o.level, s, e.data, o.fromPeerId || i.fetcher.peerId, !0), o.loadByP2P || i.fetcher.reportFlow(t.total), o.loaded = t.loaded, a.info((o.loadByP2P ? "P2P" : "HTTP") + " loaded segment id " + s), y(e, t, r)
                        }
                    } else {
                        a.info("HTTP load " + o.relurl + " at " + o.sn + " level " + o.level), e.frag.loadByHTTP = !0, this.xhrLoader.load(e, r, n);
                        var b = n.onSuccess;
                        n.onSuccess = function(e, t, r) {
                            i.bufMgr.hasSegOfId(s) || i.bufMgr.handleFrag(o.sn, o.level, s, e.data, i.fetcher.peerId, !0), i.fetcher.reportFlow(t.total), a.info("HTTP loaded " + s + " time " + (t.tload - t.trequest) + "ms"), b(e, t, r)
                        }
                    }
                }
            }]), s);

        function s(e) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, s);
            var t = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this));
            return t.logger = e.logger, t.currLoaded = e.currLoaded, t.currLoadedDuration = e.currLoadedDuration, t.currPlay = e.currPlay, t.bufMgr = e.bufMgr, t.xhrLoader = new e.loader(e), t.p2pEnabled = e.p2pEnabled, t.scheduler = e.scheduler, t.fetcher = e.fetcher, t.segmentId = e.segmentId, t.blockTypes = e.p2pBlackList, t.isLive = e.live, t
        }

        function l(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        t.default = o, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getBrowserRTC = t.Buffer = t.Fetcher = t.Events = t.DataChannel = void 0;
        var n = r(16),
            i = n && n.__esModule ? n : {
                default: n
            },
            a = r(1),
            o = r(17).Buffer;
        t.DataChannel = a.datachannel, t.Events = a.events, t.Fetcher = a.fetcher, t.Buffer = o, t.getBrowserRTC = i.default
    }, function(e, t) {
        e.exports = function() {
            if ("undefined" == typeof window) return null;
            var e = {
                RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection,
                RTCSessionDescription: window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription,
                RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate
            };
            return e.RTCPeerConnection ? e : null
        }
    }, function(e, F, t) {
        "use strict";
        (function(e) {
            function r() {
                return d.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function s(e, t) {
                if (r() < t) throw new RangeError("Invalid typed array length");
                return d.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = d.prototype : (null === e && (e = new d(t)), e.length = t), e
            }

            function d(e, t, r) {
                if (!(d.TYPED_ARRAY_SUPPORT || this instanceof d)) return new d(e, t, r);
                if ("number" != typeof e) return n(this, e, t, r);
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return i(this, e)
            }

            function n(e, t, r, n) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, r, n) {
                    if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                    return t = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n), d.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = d.prototype : e = a(e, t), e
                }(e, t, r, n) : "string" == typeof t ? function(e, t, r) {
                    if ("string" == typeof r && "" !== r || (r = "utf8"), !d.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                    var n = 0 | u(t, r),
                        i = (e = s(e, n)).write(t, r);
                    return i !== n && (e = e.slice(0, i)), e
                }(e, t, r) : function(e, t) {
                    if (d.isBuffer(t)) {
                        var r = 0 | o(t.length);
                        return 0 === (e = s(e, r)).length || t.copy(e, 0, 0, r), e
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || function(e) {
                            return e != e
                        }(t.length) ? s(e, 0) : a(e, t);
                        if ("Buffer" === t.type && O(t.data)) return a(e, t.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function l(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function i(e, t) {
                if (l(t), e = s(e, t < 0 ? 0 : 0 | o(t)), !d.TYPED_ARRAY_SUPPORT)
                    for (var r = 0; r < t; ++r) e[r] = 0;
                return e
            }

            function a(e, t) {
                var r = t.length < 0 ? 0 : 0 | o(t.length);
                e = s(e, r);
                for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
                return e
            }

            function o(e) {
                if (e >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
                return 0 | e
            }

            function u(e, t) {
                if (d.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var n = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return D(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return I(e).length;
                    default:
                        if (n) return D(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function c(e, t, r) {
                var n = e[t];
                e[t] = e[r], e[r] = n
            }

            function f(e, t, r, n, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (n = r, r = 0) : 2147483647 < r ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (i) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = d.from(t, n)), d.isBuffer(t)) return 0 === t.length ? -1 : h(e, t, r, n, i);
                if ("number" == typeof t) return t &= 255, d.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : h(e, [t], r, n, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function h(e, t, r, n, i) {
                function a(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                var o, s = 1,
                    l = e.length,
                    u = t.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    l /= s = 2, u /= 2, r /= 2
                }
                if (i) {
                    var c = -1;
                    for (o = r; o < l; o++)
                        if (a(e, o) === a(t, -1 === c ? 0 : o - c)) {
                            if (-1 === c && (c = o), o - c + 1 === u) return c * s
                        } else -1 !== c && (o -= o - c), c = -1
                } else
                    for (l < r + u && (r = l - u), o = r; 0 <= o; o--) {
                        for (var d = !0, f = 0; f < u; f++)
                            if (a(e, o + f) !== a(t, f)) {
                                d = !1;
                                break
                            } if (d) return o
                    }
                return -1
            }

            function g(e, t, r, n) {
                r = Number(r) || 0;
                var i = e.length - r;
                n ? (n = Number(n)) > i && (n = i) : n = i;
                var a = t.length;
                if (a % 2 != 0) throw new TypeError("Invalid hex string");
                a / 2 < n && (n = a / 2);
                for (var o = 0; o < n; ++o) {
                    var s = parseInt(t.substr(2 * o, 2), 16);
                    if (isNaN(s)) return o;
                    e[r + o] = s
                }
                return o
            }

            function p(e, t, r, n) {
                return C(function(e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }(t), e, r, n)
            }

            function v(e, t, r, n) {
                return C(function(e, t) {
                    for (var r, n, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) r = e.charCodeAt(o), n = r >> 8, i = r % 256, a.push(i), a.push(n);
                    return a
                }(t, e.length - r), e, r, n)
            }

            function m(e, t, r) {
                r = Math.min(e.length, r);
                for (var n = [], i = t; i < r;) {
                    var a, o, s, l, u = e[i],
                        c = null,
                        d = 239 < u ? 4 : 223 < u ? 3 : 191 < u ? 2 : 1;
                    if (i + d <= r) switch (d) {
                        case 1:
                            u < 128 && (c = u);
                            break;
                        case 2:
                            128 == (192 & (a = e[i + 1])) && 127 < (l = (31 & u) << 6 | 63 & a) && (c = l);
                            break;
                        case 3:
                            a = e[i + 1], o = e[i + 2], 128 == (192 & a) && 128 == (192 & o) && 2047 < (l = (15 & u) << 12 | (63 & a) << 6 | 63 & o) && (l < 55296 || 57343 < l) && (c = l);
                            break;
                        case 4:
                            a = e[i + 1], o = e[i + 2], s = e[i + 3], 128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && 65535 < (l = (15 & u) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) && l < 1114112 && (c = l)
                    }
                    null === c ? (c = 65533, d = 1) : 65535 < c && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), i += d
                }
                return function(e) {
                    var t = e.length;
                    if (t <= N) return String.fromCharCode.apply(String, e);
                    for (var r = "", n = 0; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += N));
                    return r
                }(n)
            }

            function y(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
                return n
            }

            function b(e, t, r) {
                var n = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
                return n
            }

            function E(e, t, r) {
                var n, i = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || i < r) && (r = i);
                for (var a = "", o = t; o < r; ++o) a += (n = e[o]) < 16 ? "0" + n.toString(16) : n.toString(16);
                return a
            }

            function _(e, t, r) {
                for (var n = e.slice(t, r), i = "", a = 0; a < n.length; a += 2) i += String.fromCharCode(n[a] + 256 * n[a + 1]);
                return i
            }

            function T(e, t, r) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (r < e + t) throw new RangeError("Trying to access beyond buffer length")
            }

            function S(e, t, r, n, i, a) {
                if (!d.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (i < t || t < a) throw new RangeError('"value" argument is out of bounds');
                if (r + n > e.length) throw new RangeError("Index out of range")
            }

            function w(e, t, r, n) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, a = Math.min(e.length - r, 2); i < a; ++i) e[r + i] = (t & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i)
            }

            function R(e, t, r, n) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, a = Math.min(e.length - r, 4); i < a; ++i) e[r + i] = t >>> 8 * (n ? i : 3 - i) & 255
            }

            function A(e, t, r, n) {
                if (r + n > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function L(e, t, r, n, i) {
                return i || A(e, 0, r, 4), x.write(e, t, r, n, 23, 4), r + 4
            }

            function k(e, t, r, n, i) {
                return i || A(e, 0, r, 8), x.write(e, t, r, n, 52, 8), r + 8
            }

            function D(e, t) {
                t = t || 1 / 0;
                for (var r, n = e.length, i = null, a = [], o = 0; o < n; ++o) {
                    if (55295 < (r = e.charCodeAt(o)) && r < 57344) {
                        if (!i) {
                            if (56319 < r) {
                                -1 < (t -= 3) && a.push(239, 191, 189);
                                continue
                            }
                            if (o + 1 === n) {
                                -1 < (t -= 3) && a.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            -1 < (t -= 3) && a.push(239, 191, 189), i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else i && -1 < (t -= 3) && a.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if (--t < 0) break;
                        a.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        a.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        a.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        a.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return a
            }

            function I(e) {
                return P.toByteArray(function(e) {
                    if ((e = ((t = e).trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")).replace(M, "")).length < 2) return "";
                    for (var t; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function C(e, t, r, n) {
                for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                return i
            }
            var P = t(19),
                x = t(20),
                O = t(21);
            F.Buffer = d, F.SlowBuffer = function(e) {
                return +e != e && (e = 0), d.alloc(+e)
            }, F.INSPECT_MAX_BYTES = 50, d.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), F.kMaxLength = r(), d.poolSize = 8192, d._augment = function(e) {
                return e.__proto__ = d.prototype, e
            }, d.from = function(e, t, r) {
                return n(null, e, t, r)
            }, d.TYPED_ARRAY_SUPPORT && (d.prototype.__proto__ = Uint8Array.prototype, d.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && d[Symbol.species] === d && Object.defineProperty(d, Symbol.species, {
                value: null,
                configurable: !0
            })), d.alloc = function(e, t, r) {
                return n = null, a = t, o = r, l(i = e), i <= 0 ? s(n, i) : void 0 !== a ? "string" == typeof o ? s(n, i).fill(a, o) : s(n, i).fill(a) : s(n, i);
                var n, i, a, o
            }, d.allocUnsafe = function(e) {
                return i(null, e)
            }, d.allocUnsafeSlow = function(e) {
                return i(null, e)
            }, d.isBuffer = function(e) {
                return !(null == e || !e._isBuffer)
            }, d.compare = function(e, t) {
                if (!d.isBuffer(e) || !d.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, a = Math.min(r, n); i < a; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i], n = t[i];
                        break
                    } return r < n ? -1 : n < r ? 1 : 0
            }, d.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, d.concat = function(e, t) {
                if (!O(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return d.alloc(0);
                var r;
                if (void 0 === t)
                    for (r = t = 0; r < e.length; ++r) t += e[r].length;
                var n = d.allocUnsafe(t),
                    i = 0;
                for (r = 0; r < e.length; ++r) {
                    var a = e[r];
                    if (!d.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                    a.copy(n, i), i += a.length
                }
                return n
            }, d.byteLength = u, d.prototype._isBuffer = !0, d.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) c(this, t, t + 1);
                return this
            }, d.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) c(this, t, t + 3), c(this, t + 1, t + 2);
                return this
            }, d.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) c(this, t, t + 7), c(this, t + 1, t + 6), c(this, t + 2, t + 5), c(this, t + 3, t + 4);
                return this
            }, d.prototype.toString = function() {
                var e = 0 | this.length;
                return 0 == e ? "" : 0 === arguments.length ? m(this, 0, e) : function(e, t, r) {
                    var n, i, a, o = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                    if ((r >>>= 0) <= (t >>>= 0)) return "";
                    for (e = e || "utf8";;) switch (e) {
                        case "hex":
                            return E(this, t, r);
                        case "utf8":
                        case "utf-8":
                            return m(this, t, r);
                        case "ascii":
                            return y(this, t, r);
                        case "latin1":
                        case "binary":
                            return b(this, t, r);
                        case "base64":
                            return n = this, a = r, 0 === (i = t) && a === n.length ? P.fromByteArray(n) : P.fromByteArray(n.slice(i, a));
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return _(this, t, r);
                        default:
                            if (o) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), o = !0
                    }
                }.apply(this, arguments)
            }, d.prototype.equals = function(e) {
                if (!d.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === d.compare(this, e)
            }, d.prototype.inspect = function() {
                var e = "",
                    t = F.INSPECT_MAX_BYTES;
                return 0 < this.length && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
            }, d.prototype.compare = function(e, t, r, n, i) {
                if (!d.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
                if (i <= n && r <= t) return 0;
                if (i <= n) return -1;
                if (r <= t) return 1;
                if (this === e) return 0;
                for (var a = (i >>>= 0) - (n >>>= 0), o = (r >>>= 0) - (t >>>= 0), s = Math.min(a, o), l = this.slice(n, i), u = e.slice(t, r), c = 0; c < s; ++c)
                    if (l[c] !== u[c]) {
                        a = l[c], o = u[c];
                        break
                    } return a < o ? -1 : o < a ? 1 : 0
            }, d.prototype.includes = function(e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, d.prototype.indexOf = function(e, t, r) {
                return f(this, e, t, r, !0)
            }, d.prototype.lastIndexOf = function(e, t, r) {
                return f(this, e, t, r, !1)
            }, d.prototype.write = function(e, t, r, n) {
                if (void 0 === t) n = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" == typeof t) n = t, r = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                var i, a, o, s, l, u, c = this.length - t;
                if ((void 0 === r || c < r) && (r = c), 0 < e.length && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n = n || "utf8";
                for (var d = !1;;) switch (n) {
                    case "hex":
                        return g(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return l = t, u = r, C(D(e, (s = this).length - l), s, l, u);
                    case "ascii":
                        return p(this, e, t, r);
                    case "latin1":
                    case "binary":
                        return p(this, e, t, r);
                    case "base64":
                        return i = this, a = t, o = r, C(I(e), i, a, o);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return v(this, e, t, r);
                    default:
                        if (d) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), d = !0
                }
            }, d.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var N = 4096;
            d.prototype.slice = function(e, t) {
                var r, n = this.length;
                if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n), t < e && (t = e), d.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = d.prototype;
                else {
                    var i = t - e;
                    r = new d(i, void 0);
                    for (var a = 0; a < i; ++a) r[a] = this[a + e]
                }
                return r
            }, d.prototype.readUIntLE = function(e, t, r) {
                e |= 0, t |= 0, r || T(e, t, this.length);
                for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256);) n += this[e + a] * i;
                return n
            }, d.prototype.readUIntBE = function(e, t, r) {
                e |= 0, t |= 0, r || T(e, t, this.length);
                for (var n = this[e + --t], i = 1; 0 < t && (i *= 256);) n += this[e + --t] * i;
                return n
            }, d.prototype.readUInt8 = function(e, t) {
                return t || T(e, 1, this.length), this[e]
            }, d.prototype.readUInt16LE = function(e, t) {
                return t || T(e, 2, this.length), this[e] | this[e + 1] << 8
            }, d.prototype.readUInt16BE = function(e, t) {
                return t || T(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, d.prototype.readUInt32LE = function(e, t) {
                return t || T(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, d.prototype.readUInt32BE = function(e, t) {
                return t || T(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, d.prototype.readIntLE = function(e, t, r) {
                e |= 0, t |= 0, r || T(e, t, this.length);
                for (var n = this[e], i = 1, a = 0; ++a < t && (i *= 256);) n += this[e + a] * i;
                return (i *= 128) <= n && (n -= Math.pow(2, 8 * t)), n
            }, d.prototype.readIntBE = function(e, t, r) {
                e |= 0, t |= 0, r || T(e, t, this.length);
                for (var n = t, i = 1, a = this[e + --n]; 0 < n && (i *= 256);) a += this[e + --n] * i;
                return (i *= 128) <= a && (a -= Math.pow(2, 8 * t)), a
            }, d.prototype.readInt8 = function(e, t) {
                return t || T(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, d.prototype.readInt16LE = function(e, t) {
                t || T(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, d.prototype.readInt16BE = function(e, t) {
                t || T(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, d.prototype.readInt32LE = function(e, t) {
                return t || T(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, d.prototype.readInt32BE = function(e, t) {
                return t || T(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, d.prototype.readFloatLE = function(e, t) {
                return t || T(e, 4, this.length), x.read(this, e, !0, 23, 4)
            }, d.prototype.readFloatBE = function(e, t) {
                return t || T(e, 4, this.length), x.read(this, e, !1, 23, 4)
            }, d.prototype.readDoubleLE = function(e, t) {
                return t || T(e, 8, this.length), x.read(this, e, !0, 52, 8)
            }, d.prototype.readDoubleBE = function(e, t) {
                return t || T(e, 8, this.length), x.read(this, e, !1, 52, 8)
            }, d.prototype.writeUIntLE = function(e, t, r, n) {
                e = +e, t |= 0, r |= 0, n || S(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = 1,
                    a = 0;
                for (this[t] = 255 & e; ++a < r && (i *= 256);) this[t + a] = e / i & 255;
                return t + r
            }, d.prototype.writeUIntBE = function(e, t, r, n) {
                e = +e, t |= 0, r |= 0, n || S(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1,
                    a = 1;
                for (this[t + i] = 255 & e; 0 <= --i && (a *= 256);) this[t + i] = e / a & 255;
                return t + r
            }, d.prototype.writeUInt8 = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 1, 255, 0), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, d.prototype.writeUInt16LE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : w(this, e, t, !0), t + 2
            }, d.prototype.writeUInt16BE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 2, 65535, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : w(this, e, t, !1), t + 2
            }, d.prototype.writeUInt32LE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : R(this, e, t, !0), t + 4
            }, d.prototype.writeUInt32BE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 4, 4294967295, 0), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : R(this, e, t, !1), t + 4
            }, d.prototype.writeIntLE = function(e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    S(this, e, t, r, i - 1, -i)
                }
                var a = 0,
                    o = 1,
                    s = 0;
                for (this[t] = 255 & e; ++a < r && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
                return t + r
            }, d.prototype.writeIntBE = function(e, t, r, n) {
                if (e = +e, t |= 0, !n) {
                    var i = Math.pow(2, 8 * r - 1);
                    S(this, e, t, r, i - 1, -i)
                }
                var a = r - 1,
                    o = 1,
                    s = 0;
                for (this[t + a] = 255 & e; 0 <= --a && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255;
                return t + r
            }, d.prototype.writeInt8 = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 1, 127, -128), d.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, d.prototype.writeInt16LE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : w(this, e, t, !0), t + 2
            }, d.prototype.writeInt16BE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 2, 32767, -32768), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : w(this, e, t, !1), t + 2
            }, d.prototype.writeInt32LE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 4, 2147483647, -2147483648), d.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : R(this, e, t, !0), t + 4
            }, d.prototype.writeInt32BE = function(e, t, r) {
                return e = +e, t |= 0, r || S(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), d.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : R(this, e, t, !1), t + 4
            }, d.prototype.writeFloatLE = function(e, t, r) {
                return L(this, e, t, !0, r)
            }, d.prototype.writeFloatBE = function(e, t, r) {
                return L(this, e, t, !1, r)
            }, d.prototype.writeDoubleLE = function(e, t, r) {
                return k(this, e, t, !0, r)
            }, d.prototype.writeDoubleBE = function(e, t, r) {
                return k(this, e, t, !1, r)
            }, d.prototype.copy = function(e, t, r, n) {
                if (r = r || 0, n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t = t || 0, 0 < n && n < r && (n = r), n === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
                var i, a = n - r;
                if (this === e && r < t && t < n)
                    for (i = a - 1; 0 <= i; --i) e[i + t] = this[i + r];
                else if (a < 1e3 || !d.TYPED_ARRAY_SUPPORT)
                    for (i = 0; i < a; ++i) e[i + t] = this[i + r];
                else Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
                return a
            }, d.prototype.fill = function(e, t, r, n) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (n = t, t = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
                    if ("string" == typeof n && !d.isEncoding(n)) throw new TypeError("Unknown encoding: " + n)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (r <= t) return this;
                var a;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, "number" == typeof(e = e || 0))
                    for (a = t; a < r; ++a) this[a] = e;
                else {
                    var o = d.isBuffer(e) ? e : D(new d(e, n).toString()),
                        s = o.length;
                    for (a = 0; a < r - t; ++a) this[a + t] = o[a % s]
                }
                return this
            };
            var M = /[^+\/0-9A-Za-z-_]/g
        }).call(F, t(18))
    }, function(JJ, KJ) {
        var LJ;
        LJ = function() {
            return this
        }();
        try {
            LJ = LJ || Function("return this")() || eval("this")
        } catch (JJ) {
            "object" == typeof window && (LJ = window)
        }
        JJ.exports = LJ
    }, function(e, t, r) {
        "use strict";

        function l(e) {
            var t = e.length;
            if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
            return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
        }

        function u(e, t, r) {
            for (var n, i = [], a = t; a < r; a += 3) n = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), i.push(c[(o = n) >> 18 & 63] + c[o >> 12 & 63] + c[o >> 6 & 63] + c[63 & o]);
            var o;
            return i.join("")
        }
        t.byteLength = function(e) {
            return 3 * e.length / 4 - l(e)
        }, t.toByteArray = function(e) {
            var t, r, n, i, a, o = e.length;
            i = l(e), a = new f(3 * o / 4 - i), r = 0 < i ? o - 4 : o;
            var s = 0;
            for (t = 0; t < r; t += 4) n = d[e.charCodeAt(t)] << 18 | d[e.charCodeAt(t + 1)] << 12 | d[e.charCodeAt(t + 2)] << 6 | d[e.charCodeAt(t + 3)], a[s++] = n >> 16 & 255, a[s++] = n >> 8 & 255, a[s++] = 255 & n;
            return 2 === i ? (n = d[e.charCodeAt(t)] << 2 | d[e.charCodeAt(t + 1)] >> 4, a[s++] = 255 & n) : 1 === i && (n = d[e.charCodeAt(t)] << 10 | d[e.charCodeAt(t + 1)] << 4 | d[e.charCodeAt(t + 2)] >> 2, a[s++] = n >> 8 & 255, a[s++] = 255 & n), a
        }, t.fromByteArray = function(e) {
            for (var t, r = e.length, n = r % 3, i = "", a = [], o = 0, s = r - n; o < s; o += 16383) a.push(u(e, o, s < o + 16383 ? s : o + 16383));
            return 1 == n ? (t = e[r - 1], i += c[t >> 2], i += c[t << 4 & 63], i += "==") : 2 == n && (t = (e[r - 2] << 8) + e[r - 1], i += c[t >> 10], i += c[t >> 4 & 63], i += c[t << 2 & 63], i += "="), a.push(i), a.join("")
        };
        for (var c = [], d = [], f = "undefined" != typeof Uint8Array ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, a = n.length; i < a; ++i) c[i] = n[i], d[n.charCodeAt(i)] = i;
        d["-".charCodeAt(0)] = 62, d["_".charCodeAt(0)] = 63
    }, function(e, t) {
        t.read = function(e, t, r, n, i) {
            var a, o, s = 8 * i - n - 1,
                l = (1 << s) - 1,
                u = l >> 1,
                c = -7,
                d = r ? i - 1 : 0,
                f = r ? -1 : 1,
                h = e[t + d];
            for (d += f, a = h & (1 << -c) - 1, h >>= -c, c += s; 0 < c; a = 256 * a + e[t + d], d += f, c -= 8);
            for (o = a & (1 << -c) - 1, a >>= -c, c += n; 0 < c; o = 256 * o + e[t + d], d += f, c -= 8);
            if (0 === a) a = 1 - u;
            else {
                if (a === l) return o ? NaN : 1 / 0 * (h ? -1 : 1);
                o += Math.pow(2, n), a -= u
            }
            return (h ? -1 : 1) * o * Math.pow(2, a - n)
        }, t.write = function(e, t, r, n, i, a) {
            var o, s, l, u = 8 * a - i - 1,
                c = (1 << u) - 1,
                d = c >> 1,
                f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                h = n ? 0 : a - 1,
                g = n ? 1 : -1,
                p = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = c) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), 2 <= (t += 1 <= o + d ? f / l : f * Math.pow(2, 1 - d)) * l && (o++, l /= 2), c <= o + d ? (s = 0, o = c) : 1 <= o + d ? (s = (t * l - 1) * Math.pow(2, i), o += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); 8 <= i; e[r + h] = 255 & s, h += g, s /= 256, i -= 8);
            for (o = o << i | s, u += i; 0 < u; e[r + h] = 255 & o, h += g, o /= 256, u -= 8);
            e[r + h - g] |= 128 * p
        }
    }, function(e, t) {
        var r = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == r.call(e)
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r
            }
            return Array.from(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function(e, t, r) {
                return t && d(e.prototype, t), r && d(e, r), e
            },
            o = n(r(0)),
            c = r(1),
            s = n(r(4)),
            l = (function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(u, o.default), a(u, [{
                key: "hasSegOfId",
                value: function(e) {
                    return this._segPool.has(e)
                }
            }, {
                key: "hasSegOfSN",
                value: function(e) {
                    return this.sn2Id.has(e)
                }
            }, {
                key: "handleFrag",
                value: function(e, t, r, n) {
                    var i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "",
                        a = 5 < arguments.length && void 0 !== arguments[5] && arguments[5],
                        o = void 0,
                        s = n.byteLength;
                    if (a) {
                        var l = c.Buffer.from(n);
                        o = new c.Buffer(s), l.copy(o)
                    } else o = n;
                    var u = {
                        sn: e,
                        level: t,
                        segId: r,
                        data: o,
                        size: s,
                        fromPeerId: i
                    };
                    this._addSeg(u), this.sn2Id.set(e, u.segId)
                }
            }, {
                key: "_addSeg",
                value: function(e) {
                    var t = this.engine.logger;
                    for (this._segPool.set(e.segId, e), t.info("segment pool add seg " + e.segId + " level " + e.level), this._currBufSize += parseInt(e.size), t.debug("seg.size " + e.size + " _currBufSize " + this._currBufSize + " cacheLimit " + this.maxBufSize); this._currBufSize > this.maxBufSize;) {
                        var r = [].concat(i(this._segPool.values())).shift();
                        t.info("pop seg " + r.segId + " at " + r.sn), this._segPool.delete(r.segId), this.sn2Id.delete(r.sn), this._currBufSize -= parseInt(r.size), this.overflowed || (this.overflowed = !0), this.emit(c.Events.BM_LOST, r.sn)
                    }
                }
            }, {
                key: "getSegById",
                value: function(e) {
                    return this._segPool.get(e)
                }
            }, {
                key: "getSegIdbySN",
                value: function(e) {
                    return this.sn2Id.get(e)
                }
            }, {
                key: "clear",
                value: function() {
                    this._segPool.clear(), this.sn2Id.clear(), this._currBufSize = 0
                }
            }, {
                key: "destroy",
                value: function() {
                    this.clear(), this.removeAllListeners()
                }
            }, {
                key: "currBufSize",
                get: function() {
                    return this._currBufSize
                }
            }]), u);

        function u(e, t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, u);
            var r = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this));
            r.engine = e, r.config = t;
            var n = e.browserInfo.device;
            return r.maxBufSize = n === s.default.device.PC_WEB || n === s.default.device.PC_NATIVE ? t.memoryCacheLimit.pc : t.memoryCacheLimit.mobile, t.live && (r.maxBufSize = 104857600), r._segPool = new Map, r._currBufSize = 0, r.sn2Id = new Map, r.overflowed = !1, r
        }

        function d(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        t.default = l, e.exports = t.default
    }, function(e, t, r) {
        "use strict";

        function n() {}
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e, t, r) {
                return t && c(e.prototype, t), r && c(e, r), e
            },
            a = r(2),
            o = {
                debug: 0,
                info: 1,
                warn: 2,
                error: 3,
                none: 4
            },
            s = ["_debugP", "_infoP", "_warnP", "_errorP"],
            l = (i(u, [{
                key: "debug",
                value: function(e) {
                    this._debugP(e)
                }
            }, {
                key: "info",
                value: function(e) {
                    this._infoP(e)
                }
            }, {
                key: "warn",
                value: function(e) {
                    this._warnP(e)
                }
            }, {
                key: "error",
                value: function(e) {
                    this._errorP(e)
                }
            }, {
                key: "_debugP",
                value: function(e) {
                    console.log(e)
                }
            }, {
                key: "_infoP",
                value: function(e) {
                    console.info(e)
                }
            }, {
                key: "_warnP",
                value: function(e) {
                    console.warn(e)
                }
            }, {
                key: "_errorP",
                value: function(e) {
                    console.error(e)
                }
            }]), u);

        function u(e) {
            (function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            })(this, u), "debug" !== (this.config = e).logLevel && "info" !== e.logLevel || (e.logLevel = "warn"), "1" === (0, a.getQueryParam)("_debug") ? e.logLevel = "debug" : !0 === e.logLevel ? e.logLevel = "warn" : e.logLevel in o && !1 !== e.logLevel || (e.logLevel = "none");
            for (var t = 0; t < o[e.logLevel]; t++) this[s[t]] = n
        }

        function c(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        t.default = l, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            var e = "unknown";
            for (var t in n)
                if (window[t]) {
                    e = n[t];
                    break
                } return e
        };
        var n = {
            DPlayer: "dplayer",
            CBPlayer: "cbplayer",
            jwplayer: "jwplayer",
            videojs: "videojs",
            Clappr: "clappr",
            ckplayer: "ckplayer",
            MediaElementPlayer: "mediaelement",
            MediaElement: "mediaelement",
            TcPlayer: "tcplayer",
            flowplayer: "flowplayer",
            Chimee: "chimee",
            ChimeePlayer: "chimee",
            HlsJsPlayer: "xgplayer",
            fluidPlayer: "fluidplayer",
            OpenPlayer: "openplayer",
            Plyr: "plyr",
            Playerjs: "playerjs"
        };
        e.exports = t.default
    }, function(e, t, r) {
        "undefined" != typeof window && (e.exports = function(r) {
            function i(e) {
                if (n[e]) return n[e].exports;
                var t = n[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return r[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
            }
            var n = {};
            return i.m = r, i.c = n, i.d = function(e, t, r) {
                i.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            }, i.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, i.t = function(t, e) {
                if (1 & e && (t = i(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if (i.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var n in t) i.d(r, n, function(e) {
                        return t[e]
                    }.bind(null, n));
                return r
            }, i.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return i.d(t, "a", t), t
            }, i.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, i.p = "/dist/", i(i.s = "./src/hls.ts")
        }({
            "./node_modules/eventemitter3/index.js": function(e, t, r) {
                "use strict";

                function n() {}

                function s(e, t, r) {
                    this.fn = e, this.context = t, this.once = r || !1
                }

                function i(e, t, r, n, i) {
                    if ("function" != typeof r) throw new TypeError("The listener must be a function");
                    var a = new s(r, n || e, i),
                        o = h ? h + t : t;
                    return e._events[o] ? e._events[o].fn ? e._events[o] = [e._events[o], a] : e._events[o].push(a) : (e._events[o] = a, e._eventsCount++), e
                }

                function u(e, t) {
                    0 == --e._eventsCount ? e._events = new n : delete e._events[t]
                }

                function a() {
                    this._events = new n, this._eventsCount = 0
                }
                var o = Object.prototype.hasOwnProperty,
                    h = "~";
                Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (h = !1)), a.prototype.eventNames = function() {
                    var e, t, r = [];
                    if (0 === this._eventsCount) return r;
                    for (t in e = this._events) o.call(e, t) && r.push(h ? t.slice(1) : t);
                    return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
                }, a.prototype.listeners = function(e) {
                    var t = h ? h + e : e,
                        r = this._events[t];
                    if (!r) return [];
                    if (r.fn) return [r.fn];
                    for (var n = 0, i = r.length, a = new Array(i); n < i; n++) a[n] = r[n].fn;
                    return a
                }, a.prototype.listenerCount = function(e) {
                    var t = h ? h + e : e,
                        r = this._events[t];
                    return r ? r.fn ? 1 : r.length : 0
                }, a.prototype.emit = function(e, t, r, n, i, a) {
                    var o = h ? h + e : e;
                    if (!this._events[o]) return !1;
                    var s, l, u = this._events[o],
                        c = arguments.length;
                    if (u.fn) {
                        switch (u.once && this.removeListener(e, u.fn, void 0, !0), c) {
                            case 1:
                                return u.fn.call(u.context), !0;
                            case 2:
                                return u.fn.call(u.context, t), !0;
                            case 3:
                                return u.fn.call(u.context, t, r), !0;
                            case 4:
                                return u.fn.call(u.context, t, r, n), !0;
                            case 5:
                                return u.fn.call(u.context, t, r, n, i), !0;
                            case 6:
                                return u.fn.call(u.context, t, r, n, i, a), !0
                        }
                        for (l = 1, s = new Array(c - 1); l < c; l++) s[l - 1] = arguments[l];
                        u.fn.apply(u.context, s)
                    } else {
                        var d, f = u.length;
                        for (l = 0; l < f; l++) switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), c) {
                            case 1:
                                u[l].fn.call(u[l].context);
                                break;
                            case 2:
                                u[l].fn.call(u[l].context, t);
                                break;
                            case 3:
                                u[l].fn.call(u[l].context, t, r);
                                break;
                            case 4:
                                u[l].fn.call(u[l].context, t, r, n);
                                break;
                            default:
                                if (!s)
                                    for (d = 1, s = new Array(c - 1); d < c; d++) s[d - 1] = arguments[d];
                                u[l].fn.apply(u[l].context, s)
                        }
                    }
                    return !0
                }, a.prototype.on = function(e, t, r) {
                    return i(this, e, t, r, !1)
                }, a.prototype.once = function(e, t, r) {
                    return i(this, e, t, r, !0)
                }, a.prototype.removeListener = function(e, t, r, n) {
                    var i = h ? h + e : e;
                    if (!this._events[i]) return this;
                    if (!t) return u(this, i), this;
                    var a = this._events[i];
                    if (a.fn) a.fn !== t || n && !a.once || r && a.context !== r || u(this, i);
                    else {
                        for (var o = 0, s = [], l = a.length; o < l; o++)(a[o].fn !== t || n && !a[o].once || r && a[o].context !== r) && s.push(a[o]);
                        s.length ? this._events[i] = 1 === s.length ? s[0] : s : u(this, i)
                    }
                    return this
                }, a.prototype.removeAllListeners = function(e) {
                    var t;
                    return e ? (t = h ? h + e : e, this._events[t] && u(this, t)) : (this._events = new n, this._eventsCount = 0), this
                }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = h, a.EventEmitter = a, e.exports = a
            },
            "./node_modules/url-toolkit/src/url-toolkit.js": function(e, t, r) {
                ! function() {
                    var r = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
                        c = /^([^\/?#]*)(.*)$/,
                        t = /(?:\/|^)\.(?=\/)/g,
                        n = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
                        d = {
                            buildAbsoluteURL: function(e, t, r) {
                                if (r = r || {}, e = e.trim(), !(t = t.trim())) {
                                    if (!r.alwaysNormalize) return e;
                                    var n = d.parseURL(e);
                                    if (!n) throw new Error("Error trying to parse base URL.");
                                    return n.path = d.normalizePath(n.path), d.buildURLFromParts(n)
                                }
                                var i = d.parseURL(t);
                                if (!i) throw new Error("Error trying to parse relative URL.");
                                if (i.scheme) return r.alwaysNormalize ? (i.path = d.normalizePath(i.path), d.buildURLFromParts(i)) : t;
                                var a = d.parseURL(e);
                                if (!a) throw new Error("Error trying to parse base URL.");
                                if (!a.netLoc && a.path && "/" !== a.path[0]) {
                                    var o = c.exec(a.path);
                                    a.netLoc = o[1], a.path = o[2]
                                }
                                a.netLoc && !a.path && (a.path = "/");
                                var s = {
                                    scheme: a.scheme,
                                    netLoc: i.netLoc,
                                    path: null,
                                    params: i.params,
                                    query: i.query,
                                    fragment: i.fragment
                                };
                                if (!i.netLoc && (s.netLoc = a.netLoc, "/" !== i.path[0]))
                                    if (i.path) {
                                        var l = a.path,
                                            u = l.substring(0, l.lastIndexOf("/") + 1) + i.path;
                                        s.path = d.normalizePath(u)
                                    } else s.path = a.path, i.params || (s.params = a.params, i.query || (s.query = a.query));
                                return null === s.path && (s.path = r.alwaysNormalize ? d.normalizePath(i.path) : i.path), d.buildURLFromParts(s)
                            },
                            parseURL: function(e) {
                                var t = r.exec(e);
                                return t ? {
                                    scheme: t[1] || "",
                                    netLoc: t[2] || "",
                                    path: t[3] || "",
                                    params: t[4] || "",
                                    query: t[5] || "",
                                    fragment: t[6] || ""
                                } : null
                            },
                            normalizePath: function(e) {
                                for (e = e.split("").reverse().join("").replace(t, ""); e.length !== (e = e.replace(n, "")).length;);
                                return e.split("").reverse().join("")
                            },
                            buildURLFromParts: function(e) {
                                return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                            }
                        };
                    e.exports = d
                }()
            },
            "./node_modules/webworkify-webpack/index.js": function(e, t, h) {
                function u(r) {
                    function n(e) {
                        if (i[e]) return i[e].exports;
                        var t = i[e] = {
                            i: e,
                            l: !1,
                            exports: {}
                        };
                        return r[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports
                    }
                    var i = {};
                    n.m = r, n.c = i, n.i = function(e) {
                        return e
                    }, n.d = function(e, t, r) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            configurable: !1,
                            enumerable: !0,
                            get: r
                        })
                    }, n.r = function(e) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return n.d(t, "a", t), t
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, n.p = "/", n.oe = function(e) {
                        throw console.error(e), e
                    };
                    var e = n(n.s = ENTRY_MODULE);
                    return e.default || e
                }

                function g(e) {
                    return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
                }

                function f(e, t, r) {
                    var n = {};
                    n[r] = [];
                    var i, a = t.toString(),
                        o = a.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
                    if (!o) return n;
                    for (var s, l = o[1], u = new RegExp("(\\\\n|\\W)" + g(l) + m, "g"); s = u.exec(a);) "dll-reference" !== s[3] && n[r].push(s[3]);
                    for (u = new RegExp("\\(" + g(l) + '\\("(dll-reference\\s(' + v + '))"\\)\\)' + m, "g"); s = u.exec(a);) e[s[2]] || (n[r].push(s[1]), e[s[2]] = h(s[1]).m), n[s[2]] = n[s[2]] || [], n[s[2]].push(s[4]);
                    for (var c = Object.keys(n), d = 0; d < c.length; d++)
                        for (var f = 0; f < n[c[d]].length; f++) i = n[c[d]][f], isNaN(+i) || (n[c[d]][f] = +n[c[d]][f]);
                    return n
                }

                function p(r) {
                    return Object.keys(r).reduce(function(e, t) {
                        return e || 0 < r[t].length
                    }, !1)
                }
                var v = "[\\.|\\-|\\+|\\w|/|@]+",
                    m = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + v + ").*?\\)";
                e.exports = function(e, t) {
                    t = t || {};
                    var r = {
                            main: h.m
                        },
                        n = t.all ? {
                            main: Object.keys(r.main)
                        } : function(e, t) {
                            for (var r = {
                                    main: [t]
                                }, n = {
                                    main: []
                                }, i = {
                                    main: {}
                                }; p(r);)
                                for (var a = Object.keys(r), o = 0; o < a.length; o++) {
                                    var s = a[o],
                                        l = r[s].pop();
                                    if (i[s] = i[s] || {}, !i[s][l] && e[s][l]) {
                                        i[s][l] = !0, n[s] = n[s] || [], n[s].push(l);
                                        for (var u = f(e, e[s][l], s), c = Object.keys(u), d = 0; d < c.length; d++) r[c[d]] = r[c[d]] || [], r[c[d]] = r[c[d]].concat(u[c[d]])
                                    }
                                }
                            return n
                        }(r, e),
                        i = "";
                    Object.keys(n).filter(function(e) {
                        return "main" !== e
                    }).forEach(function(t) {
                        for (var e = 0; n[t][e];) e++;
                        n[t].push(e), r[t][e] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", i = i + "var " + t + " = (" + u.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + n[t].map(function(e) {
                            return JSON.stringify(e) + ": " + r[t][e].toString()
                        }).join(",") + "});\n"
                    }), i = i + "new ((" + u.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + n.main.map(function(e) {
                        return JSON.stringify(e) + ": " + r.main[e].toString()
                    }).join(",") + "}))(self);";
                    var a = new window.Blob([i], {
                        type: "text/javascript"
                    });
                    if (t.bare) return a;
                    var o = window.URL || window.webkitURL || window.mozURL || window.msURL,
                        s = o.createObjectURL(a),
                        l = new window.Worker(s);
                    return l.objectURL = s, l
                }
            },
            "./src/crypt/decrypter.js": function(e, t, r) {
                "use strict";
                r.r(t);
                var s = function() {
                        function e(e, t) {
                            this.subtle = e, this.aesIV = t
                        }
                        return e.prototype.decrypt = function(e, t) {
                            return this.subtle.decrypt({
                                name: "AES-CBC",
                                iv: this.aesIV
                            }, t, e)
                        }, e
                    }(),
                    n = function() {
                        function e(e, t) {
                            this.subtle = e, this.key = t
                        }
                        return e.prototype.expandKey = function() {
                            return this.subtle.importKey("raw", this.key, {
                                name: "AES-CBC"
                            }, !1, ["encrypt", "decrypt"])
                        }, e
                    }(),
                    l = n,
                    i = function() {
                        function e() {
                            this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
                        }
                        var t = e.prototype;
                        return t.uint8ArrayToUint32Array_ = function(e) {
                            for (var t = new DataView(e), r = new Uint32Array(4), n = 0; n < 4; n++) r[n] = t.getUint32(4 * n);
                            return r
                        }, t.initTable = function() {
                            var e = this.sBox,
                                t = this.invSBox,
                                r = this.subMix,
                                n = r[0],
                                i = r[1],
                                a = r[2],
                                o = r[3],
                                s = this.invSubMix,
                                l = s[0],
                                u = s[1],
                                c = s[2],
                                d = s[3],
                                f = new Uint32Array(256),
                                h = 0,
                                g = 0,
                                p = 0;
                            for (p = 0; p < 256; p++) f[p] = p < 128 ? p << 1 : p << 1 ^ 283;
                            for (p = 0; p < 256; p++) {
                                var v = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                                v = v >>> 8 ^ 255 & v ^ 99, e[h] = v, t[v] = h;
                                var m = f[h],
                                    y = f[m],
                                    b = f[y],
                                    E = 257 * f[v] ^ 16843008 * v;
                                n[h] = E << 24 | E >>> 8, i[h] = E << 16 | E >>> 16, a[h] = E << 8 | E >>> 24, o[h] = E, E = 16843009 * b ^ 65537 * y ^ 257 * m ^ 16843008 * h, l[v] = E << 24 | E >>> 8, u[v] = E << 16 | E >>> 16, c[v] = E << 8 | E >>> 24, d[v] = E, h ? (h = m ^ f[f[f[b ^ m]]], g ^= f[f[g]]) : h = g = 1
                            }
                        }, t.expandKey = function(e) {
                            for (var t = this.uint8ArrayToUint32Array_(e), r = !0, n = 0; n < t.length && r;) r = t[n] === this.key[n], n++;
                            if (!r) {
                                this.key = t;
                                var i = this.keySize = t.length;
                                if (4 !== i && 6 !== i && 8 !== i) throw new Error("Invalid aes key size=" + i);
                                var a, o, s, l, u = this.ksRows = 4 * (i + 6 + 1),
                                    c = this.keySchedule = new Uint32Array(u),
                                    d = this.invKeySchedule = new Uint32Array(u),
                                    f = this.sBox,
                                    h = this.rcon,
                                    g = this.invSubMix,
                                    p = g[0],
                                    v = g[1],
                                    m = g[2],
                                    y = g[3];
                                for (a = 0; a < u; a++) a < i ? s = c[a] = t[a] : (l = s, a % i == 0 ? (l = f[(l = l << 8 | l >>> 24) >>> 24] << 24 | f[l >>> 16 & 255] << 16 | f[l >>> 8 & 255] << 8 | f[255 & l], l ^= h[a / i | 0] << 24) : 6 < i && a % i == 4 && (l = f[l >>> 24] << 24 | f[l >>> 16 & 255] << 16 | f[l >>> 8 & 255] << 8 | f[255 & l]), c[a] = s = (c[a - i] ^ l) >>> 0);
                                for (o = 0; o < u; o++) a = u - o, l = 3 & o ? c[a] : c[a - 4], d[o] = o < 4 || a <= 4 ? l : p[f[l >>> 24]] ^ v[f[l >>> 16 & 255]] ^ m[f[l >>> 8 & 255]] ^ y[f[255 & l]], d[o] = d[o] >>> 0
                            }
                        }, t.networkToHostOrderSwap = function(e) {
                            return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
                        }, t.decrypt = function(e, t, r, n) {
                            for (var i, a, o, s, l, u, c, d, f, h, g, p, v, m, y = this.keySize + 6, b = this.invKeySchedule, E = this.invSBox, _ = this.invSubMix, T = _[0], S = _[1], w = _[2], R = _[3], A = this.uint8ArrayToUint32Array_(r), L = A[0], k = A[1], D = A[2], I = A[3], C = new Int32Array(e), P = new Int32Array(C.length), x = this.networkToHostOrderSwap; t < C.length;) {
                                for (f = x(C[t]), h = x(C[t + 1]), g = x(C[t + 2]), p = x(C[t + 3]), l = f ^ b[0], u = p ^ b[1], c = g ^ b[2], d = h ^ b[3], v = 4, m = 1; m < y; m++) i = T[l >>> 24] ^ S[u >> 16 & 255] ^ w[c >> 8 & 255] ^ R[255 & d] ^ b[v], a = T[u >>> 24] ^ S[c >> 16 & 255] ^ w[d >> 8 & 255] ^ R[255 & l] ^ b[v + 1], o = T[c >>> 24] ^ S[d >> 16 & 255] ^ w[l >> 8 & 255] ^ R[255 & u] ^ b[v + 2], s = T[d >>> 24] ^ S[l >> 16 & 255] ^ w[u >> 8 & 255] ^ R[255 & c] ^ b[v + 3], l = i, u = a, c = o, d = s, v += 4;
                                i = E[l >>> 24] << 24 ^ E[u >> 16 & 255] << 16 ^ E[c >> 8 & 255] << 8 ^ E[255 & d] ^ b[v], a = E[u >>> 24] << 24 ^ E[c >> 16 & 255] << 16 ^ E[d >> 8 & 255] << 8 ^ E[255 & l] ^ b[v + 1], o = E[c >>> 24] << 24 ^ E[d >> 16 & 255] << 16 ^ E[l >> 8 & 255] << 8 ^ E[255 & u] ^ b[v + 2], s = E[d >>> 24] << 24 ^ E[l >> 16 & 255] << 16 ^ E[u >> 8 & 255] << 8 ^ E[255 & c] ^ b[v + 3], v += 3, P[t] = x(i ^ L), P[t + 1] = x(s ^ k), P[t + 2] = x(o ^ D), P[t + 3] = x(a ^ I), L = f, k = h, D = g, I = p, t += 4
                            }
                            return n ? function(e) {
                                var t = e.byteLength,
                                    r = t && new DataView(e).getUint8(t - 1);
                                return r ? e.slice(0, t - r) : e
                            }(P.buffer) : P.buffer
                        }, t.destroy = function() {
                            this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0
                        }, e
                    }(),
                    u = i,
                    a = r("./src/errors.ts"),
                    c = r("./src/utils/logger.js"),
                    o = r("./src/events.js"),
                    d = r("./src/utils/get-self-scope.js"),
                    f = Object(d.getSelfScope)(),
                    h = function() {
                        function e(e, t, r) {
                            var n = void 0 === r ? {} : r,
                                i = n.removePKCS7Padding,
                                a = void 0 === i || i;
                            if (this.logEnabled = !0, this.observer = e, this.config = t, this.removePKCS7Padding = a) try {
                                var o = f.crypto;
                                o && (this.subtle = o.subtle || o.webkitSubtle)
                            } catch (e) {}
                            this.disableWebCrypto = !this.subtle
                        }
                        var t = e.prototype;
                        return t.isSync = function() {
                            return this.disableWebCrypto && this.config.enableSoftwareAES
                        }, t.decrypt = function(t, r, n, i) {
                            var a = this;
                            if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                                this.logEnabled && (c.logger.log("JS AES decrypt"), this.logEnabled = !1);
                                var e = this.decryptor;
                                e || (this.decryptor = e = new u), e.expandKey(r), i(e.decrypt(t, 0, n, this.removePKCS7Padding))
                            } else {
                                this.logEnabled && (c.logger.log("WebCrypto AES decrypt"), this.logEnabled = !1);
                                var o = this.subtle;
                                this.key !== r && (this.key = r, this.fastAesKey = new l(o, r)), this.fastAesKey.expandKey().then(function(e) {
                                    new s(o, n).decrypt(t, e).catch(function(e) {
                                        a.onWebCryptoError(e, t, r, n, i)
                                    }).then(function(e) {
                                        i(e)
                                    })
                                }).catch(function(e) {
                                    a.onWebCryptoError(e, t, r, n, i)
                                })
                            }
                        }, t.onWebCryptoError = function(e, t, r, n, i) {
                            this.config.enableSoftwareAES ? (c.logger.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, r, n, i)) : (c.logger.error("decrypting error : " + e.message), this.observer.trigger(o.default.ERROR, {
                                type: a.ErrorTypes.MEDIA_ERROR,
                                details: a.ErrorDetails.FRAG_DECRYPT_ERROR,
                                fatal: !0,
                                reason: e.message
                            }))
                        }, t.destroy = function() {
                            var e = this.decryptor;
                            e && (e.destroy(), this.decryptor = void 0)
                        }, e
                    }();
                t.default = h
            },
            "./src/demux/demuxer-inline.js": function(e, t, r) {
                "use strict";

                function a(e, t) {
                    return 255 === e[t] && 240 == (246 & e[t + 1])
                }

                function d(e, t) {
                    return 1 & e[t + 1] ? 7 : 9
                }

                function f(e, t) {
                    return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
                }

                function v(e, t) {
                    return t + 1 < e.length && a(e, t)
                }

                function i(e, t) {
                    if (v(e, t)) {
                        var r = d(e, t),
                            n = r;
                        t + 5 < e.length && (n = f(e, t));
                        var i = t + n;
                        if (i === e.length || i + 1 < e.length && a(e, i)) return 1
                    }
                }

                function m(e, t, r, n, i) {
                    if (!e.samplerate) {
                        var a = function(e, t, r, n) {
                            var i, a, o, s, l, u = navigator.userAgent.toLowerCase(),
                                c = n,
                                d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                            return i = 1 + ((192 & t[r + 2]) >>> 6), (a = (60 & t[r + 2]) >>> 2) > d.length - 1 ? void e.trigger(ee.default.ERROR, {
                                type: te.ErrorTypes.MEDIA_ERROR,
                                details: te.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: !0,
                                reason: "invalid ADTS sampling index:" + a
                            }) : (s = (1 & t[r + 2]) << 2, s |= (192 & t[r + 3]) >>> 6, re.logger.log("manifest codec:" + n + ",ADTS data:type:" + i + ",sampleingIndex:" + a + "[" + d[a] + "Hz],channelConfig:" + s), o = /firefox/i.test(u) ? 6 <= a ? (i = 5, l = new Array(4), a - 3) : (i = 2, l = new Array(2), a) : -1 !== u.indexOf("android") ? (i = 2, l = new Array(2), a) : (i = 5, l = new Array(4), n && (-1 !== n.indexOf("mp4a.40.29") || -1 !== n.indexOf("mp4a.40.5")) || !n && 6 <= a ? a - 3 : ((n && -1 !== n.indexOf("mp4a.40.2") && (6 <= a && 1 == s || /vivaldi/i.test(u)) || !n && 1 == s) && (i = 2, l = new Array(2)), a)), l[0] = i << 3, l[0] |= (14 & a) >> 1, l[1] |= (1 & a) << 7, l[1] |= s << 3, 5 === i && (l[1] |= (14 & o) >> 1, l[2] = (1 & o) << 7, l[2] |= 8, l[3] = 0), {
                                config: l,
                                samplerate: d[a],
                                channelCount: s,
                                codec: "mp4a.40." + i,
                                manifestCodec: c
                            })
                        }(t, r, n, i);
                        e.config = a.config, e.samplerate = a.samplerate, e.channelCount = a.channelCount, e.codec = a.codec, e.manifestCodec = a.manifestCodec, re.logger.log("parsed codec:" + e.codec + ",rate:" + a.samplerate + ",nb channel:" + a.channelCount)
                    }
                }

                function y(e) {
                    return 9216e4 / e
                }

                function b(e, t, r, n, i) {
                    var a = y(e.samplerate),
                        o = function(e, t, r, n, i) {
                            var a, o, s = e.length;
                            if (a = d(e, t), o = f(e, t), 0 < (o -= a) && t + a + o <= s) return {
                                headerLength: a,
                                frameLength: o,
                                stamp: r + n * i
                            }
                        }(t, r, n, i, a);
                    if (o) {
                        var s = o.stamp,
                            l = o.headerLength,
                            u = o.frameLength,
                            c = {
                                unit: t.subarray(r + l, r + l + u),
                                pts: s,
                                dts: s
                            };
                        return e.samples.push(c), {
                            sample: c,
                            length: u + l
                        }
                    }
                }

                function n(e, t, r, n) {
                    void 0 === r && (r = 1), void 0 === n && (n = !1);
                    var i = e * t * r;
                    return n ? Math.round(i) : i
                }

                function $(e, t) {
                    return void 0 === t && (t = !1), n(e, 1e3, 1 / 9e4, t)
                }

                function o(e, t) {
                    return void 0 === t && (t = 1), n(e, 9e4, 1 / t)
                }
                r.r(t);
                var p, ee = r("./src/events.js"),
                    te = r("./src/errors.ts"),
                    E = r("./src/crypt/decrypter.js"),
                    g = r("./src/polyfills/number-isFinite.js"),
                    re = r("./src/utils/logger.js"),
                    s = r("./src/utils/get-self-scope.js"),
                    k = r("./src/demux/id3.js"),
                    l = function() {
                        function e(e, t, r) {
                            this.observer = e, this.config = r, this.remuxer = t
                        }
                        var t = e.prototype;
                        return t.resetInitSegment = function(e, t, r, n) {
                            this._audioTrack = {
                                container: "audio/adts",
                                type: "audio",
                                id: 0,
                                sequenceNumber: 0,
                                isAAC: !0,
                                samples: [],
                                len: 0,
                                manifestCodec: t,
                                duration: n,
                                inputTimeScale: 9e4
                            }
                        }, t.resetTimeStamp = function() {}, e.probe = function(e) {
                            if (!e) return !1;
                            for (var t = k.default.getID3Data(e, 0) || [], r = t.length, n = e.length; r < n; r++)
                                if (i(e, r)) return re.logger.log("ADTS sync word found !"), !0;
                            return !1
                        }, t.append = function(e, t, r, n) {
                            for (var i = this._audioTrack, a = k.default.getID3Data(e, 0) || [], o = k.default.getTimeStamp(a), s = Object(g.isFiniteNumber)(o) ? 90 * o : 9e4 * t, l = 0, u = s, c = e.length, d = a.length, f = [{
                                    pts: u,
                                    dts: u,
                                    data: a
                                }]; d < c - 1;)
                                if (v(e, d) && d + 5 < c) {
                                    m(i, this.observer, e, d, i.manifestCodec);
                                    var h = b(i, e, d, s, l);
                                    if (!h) {
                                        re.logger.log("Unable to parse AAC frame");
                                        break
                                    }
                                    d += h.length, u = h.sample.pts, l++
                                } else k.default.isHeader(e, d) ? (a = k.default.getID3Data(e, d), f.push({
                                    pts: u,
                                    dts: u,
                                    data: a
                                }), d += a.length) : d++;
                            this.remuxer.remux(i, {
                                samples: []
                            }, {
                                samples: f,
                                inputTimeScale: 9e4
                            }, {
                                samples: []
                            }, t, r, n)
                        }, t.destroy = function() {}, e
                    }(),
                    S = l,
                    w = r("./src/demux/mp4demuxer.js"),
                    _ = {
                        BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                        SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                        SamplesCoefficients: [
                            [0, 72, 144, 12],
                            [0, 0, 0, 0],
                            [0, 72, 144, 12],
                            [0, 144, 144, 12]
                        ],
                        BytesInSlot: [0, 1, 1, 4],
                        appendFrame: function(e, t, r, n, i) {
                            if (!(r + 24 > t.length)) {
                                var a = this.parseHeader(t, r);
                                if (a && r + a.frameLength <= t.length) {
                                    var o = 9e4 * a.samplesPerFrame / a.sampleRate,
                                        s = n + i * o,
                                        l = {
                                            unit: t.subarray(r, r + a.frameLength),
                                            pts: s,
                                            dts: s
                                        };
                                    return e.config = [], e.channelCount = a.channelCount, e.samplerate = a.sampleRate, e.samples.push(l), {
                                        sample: l,
                                        length: a.frameLength
                                    }
                                }
                            }
                        },
                        parseHeader: function(e, t) {
                            var r = e[t + 1] >> 3 & 3,
                                n = e[t + 1] >> 1 & 3,
                                i = e[t + 2] >> 4 & 15,
                                a = e[t + 2] >> 2 & 3,
                                o = e[t + 2] >> 1 & 1;
                            if (1 != r && 0 != i && 15 != i && 3 != a) {
                                var s = 3 == r ? 3 - n : 3 == n ? 3 : 4,
                                    l = 1e3 * _.BitratesMap[14 * s + i - 1],
                                    u = 3 == r ? 0 : 2 == r ? 1 : 2,
                                    c = _.SamplingRateMap[3 * u + a],
                                    d = e[t + 3] >> 6 == 3 ? 1 : 2,
                                    f = _.SamplesCoefficients[r][n],
                                    h = _.BytesInSlot[n],
                                    g = 8 * f * h;
                                return {
                                    sampleRate: c,
                                    channelCount: d,
                                    frameLength: parseInt(f * l / c + o, 10) * h,
                                    samplesPerFrame: g
                                }
                            }
                        },
                        isHeaderPattern: function(e, t) {
                            return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
                        },
                        isHeader: function(e, t) {
                            return !!(t + 1 < e.length && this.isHeaderPattern(e, t))
                        },
                        probe: function(e, t) {
                            if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
                                var r = this.parseHeader(e, t),
                                    n = 4;
                                r && r.frameLength && (n = r.frameLength);
                                var i = t + n;
                                if (i === e.length || i + 1 < e.length && this.isHeaderPattern(e, i)) return !0
                            }
                            return !1
                        }
                    },
                    T = _,
                    u = function() {
                        function e(e) {
                            this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
                        }
                        var t = e.prototype;
                        return t.loadWord = function() {
                            var e = this.data,
                                t = this.bytesAvailable,
                                r = e.byteLength - t,
                                n = new Uint8Array(4),
                                i = Math.min(4, t);
                            if (0 === i) throw new Error("no bytes available");
                            n.set(e.subarray(r, r + i)), this.word = new DataView(n.buffer).getUint32(0), this.bitsAvailable = 8 * i, this.bytesAvailable -= i
                        }, t.skipBits = function(e) {
                            var t;
                            this.bitsAvailable > e || (e -= this.bitsAvailable, e -= (t = e >> 3) >> 3, this.bytesAvailable -= t, this.loadWord()), this.word <<= e, this.bitsAvailable -= e
                        }, t.readBits = function(e) {
                            var t = Math.min(this.bitsAvailable, e),
                                r = this.word >>> 32 - t;
                            return 32 < e && re.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, 0 < this.bitsAvailable ? this.word <<= t : 0 < this.bytesAvailable && this.loadWord(), 0 < (t = e - t) && this.bitsAvailable ? r << t | this.readBits(t) : r
                        }, t.skipLZ = function() {
                            var e;
                            for (e = 0; e < this.bitsAvailable; ++e)
                                if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
                            return this.loadWord(), e + this.skipLZ()
                        }, t.skipUEG = function() {
                            this.skipBits(1 + this.skipLZ())
                        }, t.skipEG = function() {
                            this.skipBits(1 + this.skipLZ())
                        }, t.readUEG = function() {
                            var e = this.skipLZ();
                            return this.readBits(e + 1) - 1
                        }, t.readEG = function() {
                            var e = this.readUEG();
                            return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                        }, t.readBoolean = function() {
                            return 1 === this.readBits(1)
                        }, t.readUByte = function() {
                            return this.readBits(8)
                        }, t.readUShort = function() {
                            return this.readBits(16)
                        }, t.readUInt = function() {
                            return this.readBits(32)
                        }, t.skipScalingList = function(e) {
                            var t, r, n = 8,
                                i = 8;
                            for (t = 0; t < e; t++) 0 !== i && (r = this.readEG(), i = (n + r + 256) % 256), n = 0 === i ? n : i
                        }, t.readSPS = function() {
                            var e, t, r, n, i, a, o, s = 0,
                                l = 0,
                                u = 0,
                                c = 0,
                                d = this.readUByte.bind(this),
                                f = this.readBits.bind(this),
                                h = this.readUEG.bind(this),
                                g = this.readBoolean.bind(this),
                                p = this.skipBits.bind(this),
                                v = this.skipEG.bind(this),
                                m = this.skipUEG.bind(this),
                                y = this.skipScalingList.bind(this);
                            if (d(), e = d(), f(5), p(3), d(), m(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
                                var b = h();
                                if (3 === b && p(1), m(), m(), p(1), g())
                                    for (a = 3 !== b ? 8 : 12, o = 0; o < a; o++) g() && y(o < 6 ? 16 : 64)
                            }
                            m();
                            var E = h();
                            if (0 === E) h();
                            else if (1 === E)
                                for (p(1), v(), v(), t = h(), o = 0; o < t; o++) v();
                            m(), p(1), r = h(), n = h(), 0 === (i = f(1)) && p(1), p(1), g() && (s = h(), l = h(), u = h(), c = h());
                            var _ = [1, 1];
                            if (g() && g()) switch (d()) {
                                case 1:
                                    _ = [1, 1];
                                    break;
                                case 2:
                                    _ = [12, 11];
                                    break;
                                case 3:
                                    _ = [10, 11];
                                    break;
                                case 4:
                                    _ = [16, 11];
                                    break;
                                case 5:
                                    _ = [40, 33];
                                    break;
                                case 6:
                                    _ = [24, 11];
                                    break;
                                case 7:
                                    _ = [20, 11];
                                    break;
                                case 8:
                                    _ = [32, 11];
                                    break;
                                case 9:
                                    _ = [80, 33];
                                    break;
                                case 10:
                                    _ = [18, 11];
                                    break;
                                case 11:
                                    _ = [15, 11];
                                    break;
                                case 12:
                                    _ = [64, 33];
                                    break;
                                case 13:
                                    _ = [160, 99];
                                    break;
                                case 14:
                                    _ = [4, 3];
                                    break;
                                case 15:
                                    _ = [3, 2];
                                    break;
                                case 16:
                                    _ = [2, 1];
                                    break;
                                case 255:
                                    _ = [d() << 8 | d(), d() << 8 | d()]
                            }
                            return {
                                width: Math.ceil(16 * (r + 1) - 2 * s - 2 * l),
                                height: (2 - i) * (n + 1) * 16 - (i ? 2 : 4) * (u + c),
                                pixelRatio: _
                            }
                        }, t.readSliceType = function() {
                            return this.readUByte(), this.readUEG(), this.readUEG()
                        }, e
                    }(),
                    D = u,
                    c = function() {
                        function e(e, t, r, n) {
                            this.decryptdata = r, this.discardEPB = n, this.decrypter = new E.default(e, t, {
                                removePKCS7Padding: !1
                            })
                        }
                        var t = e.prototype;
                        return t.decryptBuffer = function(e, t) {
                            this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
                        }, t.decryptAacSample = function(t, r, n, i) {
                            var a = t[r].unit,
                                e = a.subarray(16, a.length - a.length % 16),
                                o = e.buffer.slice(e.byteOffset, e.byteOffset + e.length),
                                s = this;
                            this.decryptBuffer(o, function(e) {
                                e = new Uint8Array(e), a.set(e, 16), i || s.decryptAacSamples(t, r + 1, n)
                            })
                        }, t.decryptAacSamples = function(e, t, r) {
                            for (;; t++) {
                                if (t >= e.length) return void r();
                                if (!(e[t].unit.length < 32)) {
                                    var n = this.decrypter.isSync();
                                    if (this.decryptAacSample(e, t, r, n), !n) return
                                }
                            }
                        }, t.getAvcEncryptedData = function(e) {
                            for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), n = 0, i = 32; i <= e.length - 16; i += 160, n += 16) r.set(e.subarray(i, i + 16), n);
                            return r
                        }, t.getAvcDecryptedUnit = function(e, t) {
                            t = new Uint8Array(t);
                            for (var r = 0, n = 32; n <= e.length - 16; n += 160, r += 16) e.set(t.subarray(r, r + 16), n);
                            return e
                        }, t.decryptAvcSample = function(t, r, n, i, a, o) {
                            var s = this.discardEPB(a.data),
                                e = this.getAvcEncryptedData(s),
                                l = this;
                            this.decryptBuffer(e.buffer, function(e) {
                                a.data = l.getAvcDecryptedUnit(s, e), o || l.decryptAvcSamples(t, r, n + 1, i)
                            })
                        }, t.decryptAvcSamples = function(e, t, r, n) {
                            for (;; t++, r = 0) {
                                if (t >= e.length) return void n();
                                for (var i = e[t].units; !(r >= i.length); r++) {
                                    var a = i[r];
                                    if (!(a.length <= 48 || 1 !== a.type && 5 !== a.type)) {
                                        var o = this.decrypter.isSync();
                                        if (this.decryptAvcSample(e, t, r, n, a, o), !o) return
                                    }
                                }
                            }
                        }, e
                    }(),
                    h = c,
                    R = {
                        video: 1,
                        audio: 2,
                        id3: 3,
                        text: 4
                    },
                    A = function() {
                        function C(e, t, r, n) {
                            this.observer = e, this.config = r, this.typeSupported = n, this.remuxer = t, this.sampleAes = null
                        }
                        var e = C.prototype;
                        return e.setDecryptData = function(e) {
                            null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new h(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null
                        }, C.probe = function(e) {
                            var t = C._syncOffset(e);
                            return !(t < 0 || (t && re.logger.warn("MPEG2-TS detected but first sync word found @ offset " + t + ", junk ahead ?"), 0))
                        }, C._syncOffset = function(e) {
                            for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) {
                                if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376]) return r;
                                r++
                            }
                            return -1
                        }, C.createTrack = function(e, t) {
                            return {
                                container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
                                type: e,
                                id: R[e],
                                pid: -1,
                                inputTimeScale: 9e4,
                                sequenceNumber: 0,
                                samples: [],
                                dropped: "video" === e ? 0 : void 0,
                                isAAC: "audio" === e || void 0,
                                duration: "audio" === e ? t : void 0
                            }
                        }, e.resetInitSegment = function(e, t, r, n) {
                            this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = C.createTrack("video", n), this._audioTrack = C.createTrack("audio", n), this._id3Track = C.createTrack("id3", n), this._txtTrack = C.createTrack("text", n), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = t, this.videoCodec = r, this._duration = n
                        }, e.resetTimeStamp = function() {}, e.append = function(e, t, r, n) {
                            var i, a, o, s, l, u = e.length,
                                c = !1;
                            this.contiguous = r;
                            var d = this.pmtParsed,
                                f = this._avcTrack,
                                h = this._audioTrack,
                                g = this._id3Track,
                                p = f.pid,
                                v = h.pid,
                                m = g.pid,
                                y = this._pmtId,
                                b = f.pesData,
                                E = h.pesData,
                                _ = g.pesData,
                                T = this._parsePAT,
                                S = this._parsePMT,
                                w = this._parsePES,
                                R = this._parseAVCPES.bind(this),
                                A = this._parseAACPES.bind(this),
                                L = this._parseMPEGPES.bind(this),
                                k = this._parseID3PES.bind(this),
                                D = C._syncOffset(e);
                            for (u -= (u + D) % 188, i = D; i < u; i += 188)
                                if (71 === e[i]) {
                                    if (a = !!(64 & e[i + 1]), o = ((31 & e[i + 1]) << 8) + e[i + 2], 1 < (48 & e[i + 3]) >> 4) {
                                        if ((s = i + 5 + e[i + 4]) === i + 188) continue
                                    } else s = i + 4;
                                    switch (o) {
                                        case p:
                                            a && (b && (l = w(b)) && void 0 !== l.pts && R(l, !1), b = {
                                                data: [],
                                                size: 0
                                            }), b && (b.data.push(e.subarray(s, i + 188)), b.size += i + 188 - s);
                                            break;
                                        case v:
                                            a && (E && (l = w(E)) && void 0 !== l.pts && (h.isAAC ? A : L)(l), E = {
                                                data: [],
                                                size: 0
                                            }), E && (E.data.push(e.subarray(s, i + 188)), E.size += i + 188 - s);
                                            break;
                                        case m:
                                            a && (_ && (l = w(_)) && void 0 !== l.pts && k(l), _ = {
                                                data: [],
                                                size: 0
                                            }), _ && (_.data.push(e.subarray(s, i + 188)), _.size += i + 188 - s);
                                            break;
                                        case 0:
                                            a && (s += e[s] + 1), y = this._pmtId = T(e, s);
                                            break;
                                        case y:
                                            a && (s += e[s] + 1);
                                            var I = S(e, s, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                                            0 < (p = I.avc) && (f.pid = p), 0 < (v = I.audio) && (h.pid = v, h.isAAC = I.isAAC), 0 < (m = I.id3) && (g.pid = m), c && !d && (re.logger.log("reparse from beginning"), c = !1, i = D - 188), d = this.pmtParsed = !0;
                                            break;
                                        case 17:
                                        case 8191:
                                            break;
                                        default:
                                            c = !0
                                    }
                                } else this.observer.trigger(ee.default.ERROR, {
                                    type: te.ErrorTypes.MEDIA_ERROR,
                                    details: te.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: !1,
                                    reason: "TS packet did not start with 0x47"
                                });
                            b && (l = w(b)) && void 0 !== l.pts ? (R(l, !0), f.pesData = null) : f.pesData = b, E && (l = w(E)) && void 0 !== l.pts ? ((h.isAAC ? A : L)(l), h.pesData = null) : (E && E.size && re.logger.log("last AAC PES packet truncated,might overlap between fragments"), h.pesData = E), _ && (l = w(_)) && void 0 !== l.pts ? (k(l), g.pesData = null) : g.pesData = _, null == this.sampleAes ? this.remuxer.remux(h, f, g, this._txtTrack, t, r, n) : this.decryptAndRemux(h, f, g, this._txtTrack, t, r, n)
                        }, e.decryptAndRemux = function(e, t, r, n, i, a, o) {
                            if (e.samples && e.isAAC) {
                                var s = this;
                                this.sampleAes.decryptAacSamples(e.samples, 0, function() {
                                    s.decryptAndRemuxAvc(e, t, r, n, i, a, o)
                                })
                            } else this.decryptAndRemuxAvc(e, t, r, n, i, a, o)
                        }, e.decryptAndRemuxAvc = function(e, t, r, n, i, a, o) {
                            if (t.samples) {
                                var s = this;
                                this.sampleAes.decryptAvcSamples(t.samples, 0, 0, function() {
                                    s.remuxer.remux(e, t, r, n, i, a, o)
                                })
                            } else this.remuxer.remux(e, t, r, n, i, a, o)
                        }, e.destroy = function() {
                            this._initPTS = this._initDTS = void 0, this._duration = 0
                        }, e._parsePAT = function(e, t) {
                            return (31 & e[t + 10]) << 8 | e[t + 11]
                        }, e._parsePMT = function(e, t, r, n) {
                            var i, a, o, s, l = {
                                audio: -1,
                                avc: -1,
                                id3: -1,
                                isAAC: !0
                            };
                            for (i = (15 & e[t + 1]) << 8 | e[t + 2], a = t + 3 + i - 4, o = (15 & e[t + 10]) << 8 | e[t + 11], t += 12 + o; t < a;) {
                                switch (s = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
                                    case 207:
                                        if (!n) {
                                            re.logger.log("unknown stream type:" + e[t]);
                                            break
                                        }
                                        case 15:
                                            -1 === l.audio && (l.audio = s);
                                            break;
                                        case 21:
                                            -1 === l.id3 && (l.id3 = s);
                                            break;
                                        case 219:
                                            if (!n) {
                                                re.logger.log("unknown stream type:" + e[t]);
                                                break
                                            }
                                            case 27:
                                                -1 === l.avc && (l.avc = s);
                                                break;
                                            case 3:
                                            case 4:
                                                r ? -1 === l.audio && (l.audio = s, l.isAAC = !1) : re.logger.log("MPEG audio found, not supported in this browser for now");
                                                break;
                                            case 36:
                                                re.logger.warn("HEVC stream type found, not supported for now");
                                                break;
                                            default:
                                                re.logger.log("unknown stream type:" + e[t])
                                }
                                t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
                            }
                            return l
                        }, e._parsePES = function(e) {
                            var t, r, n, i, a, o, s, l, u = 0,
                                c = e.data;
                            if (!e || 0 === e.size) return null;
                            for (; c[0].length < 19 && 1 < c.length;) {
                                var d = new Uint8Array(c[0].length + c[1].length);
                                d.set(c[0]), d.set(c[1], c[0].length), c[0] = d, c.splice(1, 1)
                            }
                            if (1 !== ((t = c[0])[0] << 16) + (t[1] << 8) + t[2]) return null;
                            if ((n = (t[4] << 8) + t[5]) && n > e.size - 6) return null;
                            if (192 & (r = t[7]) && (4294967295 < (o = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2) && (o -= 8589934592), 64 & r ? (4294967295 < (s = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) && (s -= 8589934592), 54e5 < o - s && (re.logger.warn(Math.round((o - s) / 9e4) + "s delta between PTS and DTS, align them"), o = s)) : s = o), i = t[8], l = i + 9, e.size <= l) return null;
                            e.size -= l, a = new Uint8Array(e.size);
                            for (var f = 0, h = c.length; f < h; f++) {
                                var g = (t = c[f]).byteLength;
                                if (l) {
                                    if (g < l) {
                                        l -= g;
                                        continue
                                    }
                                    t = t.subarray(l), g -= l, l = 0
                                }
                                a.set(t, u), u += g
                            }
                            return n && (n -= i + 3), {
                                data: a,
                                pts: o,
                                dts: s,
                                len: n
                            }
                        }, e.pushAccesUnit = function(e, t) {
                            if (e.units.length && e.frame) {
                                var r = t.samples,
                                    n = r.length;
                                !this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (n || this.contiguous) ? (e.id = n, r.push(e)) : t.dropped++
                            }
                            e.debug.length && re.logger.log(e.pts + "/" + e.dts + ":" + e.debug)
                        }, e._parseAVCPES = function(y, e) {
                            var b, E, _, T = this,
                                S = this._avcTrack,
                                t = this._parseAVCNALu(y.data),
                                w = this.avcSample,
                                R = !1,
                                A = this.pushAccesUnit.bind(this),
                                L = function(e, t, r, n) {
                                    return {
                                        key: e,
                                        pts: t,
                                        dts: r,
                                        units: [],
                                        debug: n
                                    }
                                };
                            y.data = null, w && t.length && !S.audFound && (A(w, S), w = this.avcSample = L(!1, y.pts, y.dts, "")), t.forEach(function(e) {
                                switch (e.type) {
                                    case 1:
                                        E = !0, (w = w || (T.avcSample = L(!0, y.pts, y.dts, ""))).frame = !0;
                                        var t = e.data;
                                        if (R && 4 < t.length) {
                                            var r = new D(t).readSliceType();
                                            2 !== r && 4 !== r && 7 !== r && 9 !== r || (w.key = !0)
                                        }
                                        break;
                                    case 5:
                                        E = !0, (w = w || (T.avcSample = L(!0, y.pts, y.dts, ""))).key = !0, w.frame = !0;
                                        break;
                                    case 6:
                                        E = !0, (b = new D(T.discardEPB(e.data))).readUByte();
                                        for (var n = 0, i = 0, a = !1, o = 0; !a && 1 < b.bytesAvailable;) {
                                            for (n = 0; o = b.readUByte(), n += o, 255 === o;);
                                            for (i = 0; o = b.readUByte(), i += o, 255 === o;);
                                            if (4 === n && 0 !== b.bytesAvailable) {
                                                if (a = !0, 181 === b.readUByte() && 49 === b.readUShort() && 1195456820 === b.readUInt() && 3 === b.readUByte()) {
                                                    var s = b.readUByte(),
                                                        l = b.readUByte(),
                                                        u = 31 & s,
                                                        c = [s, l];
                                                    for (_ = 0; _ < u; _++) c.push(b.readUByte()), c.push(b.readUByte()), c.push(b.readUByte());
                                                    T._insertSampleInOrder(T._txtTrack.samples, {
                                                        type: 3,
                                                        pts: y.pts,
                                                        bytes: c
                                                    })
                                                }
                                            } else if (5 === n && 0 !== b.bytesAvailable) {
                                                if (a = !0, 16 < i) {
                                                    var d = [];
                                                    for (_ = 0; _ < 16; _++) d.push(b.readUByte().toString(16)), 3 !== _ && 5 !== _ && 7 !== _ && 9 !== _ || d.push("-");
                                                    var f = i - 16,
                                                        h = new Uint8Array(f);
                                                    for (_ = 0; _ < f; _++) h[_] = b.readUByte();
                                                    T._insertSampleInOrder(T._txtTrack.samples, {
                                                        pts: y.pts,
                                                        payloadType: n,
                                                        uuid: d.join(""),
                                                        userDataBytes: h,
                                                        userData: Object(k.utf8ArrayToStr)(h.buffer)
                                                    })
                                                }
                                            } else if (i < b.bytesAvailable)
                                                for (_ = 0; _ < i; _++) b.readUByte()
                                        }
                                        break;
                                    case 7:
                                        if (R = E = !0, !S.sps) {
                                            var g = (b = new D(e.data)).readSPS();
                                            S.width = g.width, S.height = g.height, S.pixelRatio = g.pixelRatio, S.sps = [e.data], S.duration = T._duration;
                                            var p = e.data.subarray(1, 4),
                                                v = "avc1.";
                                            for (_ = 0; _ < 3; _++) {
                                                var m = p[_].toString(16);
                                                m.length < 2 && (m = "0" + m), v += m
                                            }
                                            S.codec = v
                                        }
                                        break;
                                    case 8:
                                        E = !0, S.pps || (S.pps = [e.data]);
                                        break;
                                    case 9:
                                        E = !1, S.audFound = !0, w && A(w, S), w = T.avcSample = L(!1, y.pts, y.dts, "");
                                        break;
                                    case 12:
                                        E = !1;
                                        break;
                                    default:
                                        E = !1, w && (w.debug += "unknown NAL " + e.type + " ")
                                }
                                w && E && w.units.push(e)
                            }), e && w && (A(w, S), this.avcSample = null)
                        }, e._insertSampleInOrder = function(e, t) {
                            var r = e.length;
                            if (0 < r) {
                                if (t.pts >= e[r - 1].pts) e.push(t);
                                else
                                    for (var n = r - 1; 0 <= n; n--)
                                        if (t.pts < e[n].pts) {
                                            e.splice(n, 0, t);
                                            break
                                        }
                            } else e.push(t)
                        }, e._getLastNalUnit = function() {
                            var e, t = this.avcSample;
                            if (!t || 0 === t.units.length) {
                                var r = this._avcTrack,
                                    n = r.samples;
                                t = n[n.length - 1]
                            }
                            if (t) {
                                var i = t.units;
                                e = i[i.length - 1]
                            }
                            return e
                        }, e._parseAVCNALu = function(e) {
                            var t, r, n, i, a, o = 0,
                                s = e.byteLength,
                                l = this._avcTrack,
                                u = l.naluState || 0,
                                c = u,
                                d = [],
                                f = -1;
                            for (-1 === u && (a = 31 & e[f = 0], u = 0, o = 1); o < s;)
                                if (t = e[o++], u)
                                    if (1 !== u)
                                        if (t)
                                            if (1 === t) {
                                                if (0 <= f) n = {
                                                    data: e.subarray(f, o - u - 1),
                                                    type: a
                                                }, d.push(n);
                                                else {
                                                    var h = this._getLastNalUnit();
                                                    if (h && (c && o <= 4 - c && h.state && (h.data = h.data.subarray(0, h.data.byteLength - c)), 0 < (r = o - u - 1))) {
                                                        var g = new Uint8Array(h.data.byteLength + r);
                                                        g.set(h.data, 0), g.set(e.subarray(0, r), h.data.byteLength), h.data = g
                                                    }
                                                }
                                                u = o < s ? (i = 31 & e[o], f = o, a = i, 0) : -1
                                            } else u = 0;
                            else u = 3;
                            else u = t ? 0 : 2;
                            else u = t ? 0 : 1;
                            if (0 <= f && 0 <= u && (n = {
                                    data: e.subarray(f, s),
                                    type: a,
                                    state: u
                                }, d.push(n)), 0 === d.length) {
                                var p = this._getLastNalUnit();
                                if (p) {
                                    var v = new Uint8Array(p.data.byteLength + e.byteLength);
                                    v.set(p.data, 0), v.set(e, p.data.byteLength), p.data = v
                                }
                            }
                            return l.naluState = u, d
                        }, e.discardEPB = function(e) {
                            for (var t, r, n = e.byteLength, i = [], a = 1; a < n - 2;) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (i.push(a + 2), a += 2) : a++;
                            if (0 === i.length) return e;
                            t = n - i.length, r = new Uint8Array(t);
                            var o = 0;
                            for (a = 0; a < t; o++, a++) o === i[0] && (o++, i.shift()), r[a] = e[o];
                            return r
                        }, e._parseAACPES = function(e) {
                            var t, r, n, i, a, o, s, l = this._audioTrack,
                                u = e.data,
                                c = e.pts,
                                d = this.aacOverFlow,
                                f = this.aacLastPTS;
                            if (d) {
                                var h = new Uint8Array(d.byteLength + u.byteLength);
                                h.set(d, 0), h.set(u, d.byteLength), u = h
                            }
                            for (n = 0, a = u.length; n < a - 1 && !v(u, n); n++);
                            if (n && (s = n < a - 1 ? (o = "AAC PES did not start with ADTS header,offset:" + n, !1) : (o = "no ADTS header found in AAC PES", !0), re.logger.warn("parsing error:" + o), this.observer.trigger(ee.default.ERROR, {
                                    type: te.ErrorTypes.MEDIA_ERROR,
                                    details: te.ErrorDetails.FRAG_PARSING_ERROR,
                                    fatal: s,
                                    reason: o
                                }), s)) return;
                            if (m(l, this.observer, u, n, this.audioCodec), r = 0, t = y(l.samplerate), d && f) {
                                var g = f + t;
                                1 < Math.abs(g - c) && (re.logger.log("AAC: align PTS for overlapping frames by " + Math.round((g - c) / 90)), c = g)
                            }
                            for (; n < a;)
                                if (v(u, n) && n + 5 < a) {
                                    var p = b(l, u, n, c, r);
                                    if (!p) break;
                                    n += p.length, i = p.sample.pts, r++
                                } else n++;
                            d = n < a ? u.subarray(n, a) : null, this.aacOverFlow = d, this.aacLastPTS = i
                        }, e._parseMPEGPES = function(e) {
                            for (var t = e.data, r = t.length, n = 0, i = 0, a = e.pts; i < r;)
                                if (T.isHeader(t, i)) {
                                    var o = T.appendFrame(this._audioTrack, t, i, a, n);
                                    if (!o) break;
                                    i += o.length, n++
                                } else i++
                        }, e._parseID3PES = function(e) {
                            this._id3Track.samples.push(e)
                        }, C
                    }(),
                    L = A,
                    I = function() {
                        function e(e, t, r) {
                            this.observer = e, this.config = r, this.remuxer = t
                        }
                        var t = e.prototype;
                        return t.resetInitSegment = function(e, t, r, n) {
                            this._audioTrack = {
                                container: "audio/mpeg",
                                type: "audio",
                                id: -1,
                                sequenceNumber: 0,
                                isAAC: !1,
                                samples: [],
                                len: 0,
                                manifestCodec: t,
                                duration: n,
                                inputTimeScale: 9e4
                            }
                        }, t.resetTimeStamp = function() {}, e.probe = function(e) {
                            var t, r, n = k.default.getID3Data(e, 0);
                            if (n && void 0 !== k.default.getTimeStamp(n))
                                for (t = n.length, r = Math.min(e.length - 1, t + 100); t < r; t++)
                                    if (T.probe(e, t)) return re.logger.log("MPEG Audio sync word found !"), !0;
                            return !1
                        }, t.append = function(e, t, r, n) {
                            for (var i = k.default.getID3Data(e, 0), a = k.default.getTimeStamp(i), o = a ? 90 * a : 9e4 * t, s = i.length, l = e.length, u = 0, c = 0, d = this._audioTrack, f = [{
                                    pts: o,
                                    dts: o,
                                    data: i
                                }]; s < l;)
                                if (T.isHeader(e, s)) {
                                    var h = T.appendFrame(d, e, s, o, u);
                                    if (!h) break;
                                    s += h.length, c = h.sample.pts, u++
                                } else k.default.isHeader(e, s) ? (i = k.default.getID3Data(e, s), f.push({
                                    pts: c,
                                    dts: c,
                                    data: i
                                }), s += i.length) : s++;
                            this.remuxer.remux(d, {
                                samples: []
                            }, {
                                samples: f,
                                inputTimeScale: 9e4
                            }, {
                                samples: []
                            }, t, r, n)
                        }, t.destroy = function() {}, e
                    }(),
                    C = I,
                    P = function() {
                        function e() {}
                        return e.getSilentFrame = function(e, t) {
                            switch (e) {
                                case "mp4a.40.2":
                                    if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                                    if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                                    if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                                    if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                                    if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                                    if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                                    break;
                                default:
                                    if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                    if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                    if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                            }
                            return null
                        }, e
                    }(),
                    Y = P,
                    x = Math.pow(2, 32) - 1,
                    O = function() {
                        function f() {}
                        return f.init = function() {
                            var e;
                            for (e in f.types = {
                                    avc1: [],
                                    avcC: [],
                                    btrt: [],
                                    dinf: [],
                                    dref: [],
                                    esds: [],
                                    ftyp: [],
                                    hdlr: [],
                                    mdat: [],
                                    mdhd: [],
                                    mdia: [],
                                    mfhd: [],
                                    minf: [],
                                    moof: [],
                                    moov: [],
                                    mp4a: [],
                                    ".mp3": [],
                                    mvex: [],
                                    mvhd: [],
                                    pasp: [],
                                    sdtp: [],
                                    stbl: [],
                                    stco: [],
                                    stsc: [],
                                    stsd: [],
                                    stsz: [],
                                    stts: [],
                                    tfdt: [],
                                    tfhd: [],
                                    traf: [],
                                    trak: [],
                                    trun: [],
                                    trex: [],
                                    tkhd: [],
                                    vmhd: [],
                                    smhd: []
                                }) f.types.hasOwnProperty(e) && (f.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
                            var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                                r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                            f.HDLR_TYPES = {
                                video: t,
                                audio: r
                            };
                            var n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                                i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                            f.STTS = f.STSC = f.STCO = i, f.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), f.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), f.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), f.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                            var a = new Uint8Array([105, 115, 111, 109]),
                                o = new Uint8Array([97, 118, 99, 49]),
                                s = new Uint8Array([0, 0, 0, 1]);
                            f.FTYP = f.box(f.types.ftyp, a, s, a, o), f.DINF = f.box(f.types.dinf, f.box(f.types.dref, n))
                        }, f.box = function(e) {
                            for (var t, r = Array.prototype.slice.call(arguments, 1), n = 8, i = r.length, a = i; i--;) n += r[i].byteLength;
                            for ((t = new Uint8Array(n))[0] = n >> 24 & 255, t[1] = n >> 16 & 255, t[2] = n >> 8 & 255, t[3] = 255 & n, t.set(e, 4), i = 0, n = 8; i < a; i++) t.set(r[i], n), n += r[i].byteLength;
                            return t
                        }, f.hdlr = function(e) {
                            return f.box(f.types.hdlr, f.HDLR_TYPES[e])
                        }, f.mdat = function(e) {
                            return f.box(f.types.mdat, e)
                        }, f.mdhd = function(e, t) {
                            t *= e;
                            var r = Math.floor(t / (1 + x)),
                                n = Math.floor(t % (1 + x));
                            return f.box(f.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
                        }, f.mdia = function(e) {
                            return f.box(f.types.mdia, f.mdhd(e.timescale, e.duration), f.hdlr(e.type), f.minf(e))
                        }, f.mfhd = function(e) {
                            return f.box(f.types.mfhd, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e]))
                        }, f.minf = function(e) {
                            return "audio" === e.type ? f.box(f.types.minf, f.box(f.types.smhd, f.SMHD), f.DINF, f.stbl(e)) : f.box(f.types.minf, f.box(f.types.vmhd, f.VMHD), f.DINF, f.stbl(e))
                        }, f.moof = function(e, t, r) {
                            return f.box(f.types.moof, f.mfhd(e), f.traf(r, t))
                        }, f.moov = function(e) {
                            for (var t = e.length, r = []; t--;) r[t] = f.trak(e[t]);
                            return f.box.apply(null, [f.types.moov, f.mvhd(e[0].timescale, e[0].duration)].concat(r).concat(f.mvex(e)))
                        }, f.mvex = function(e) {
                            for (var t = e.length, r = []; t--;) r[t] = f.trex(e[t]);
                            return f.box.apply(null, [f.types.mvex].concat(r))
                        }, f.mvhd = function(e, t) {
                            t *= e;
                            var r = Math.floor(t / (1 + x)),
                                n = Math.floor(t % (1 + x)),
                                i = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                            return f.box(f.types.mvhd, i)
                        }, f.sdtp = function(e) {
                            var t, r, n = e.samples || [],
                                i = new Uint8Array(4 + n.length);
                            for (r = 0; r < n.length; r++) t = n[r].flags, i[r + 4] = t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;
                            return f.box(f.types.sdtp, i)
                        }, f.stbl = function(e) {
                            return f.box(f.types.stbl, f.stsd(e), f.box(f.types.stts, f.STTS), f.box(f.types.stsc, f.STSC), f.box(f.types.stsz, f.STSZ), f.box(f.types.stco, f.STCO))
                        }, f.avc1 = function(e) {
                            var t, r, n, i = [],
                                a = [];
                            for (t = 0; t < e.sps.length; t++) r = e.sps[t], n = r.byteLength, i.push(n >>> 8 & 255), i.push(255 & n), i = i.concat(Array.prototype.slice.call(r));
                            for (t = 0; t < e.pps.length; t++) r = e.pps[t], n = r.byteLength, a.push(n >>> 8 & 255), a.push(255 & n), a = a.concat(Array.prototype.slice.call(r));
                            var o = f.box(f.types.avcC, new Uint8Array([1, i[3], i[4], i[5], 255, 224 | e.sps.length].concat(i).concat([e.pps.length]).concat(a))),
                                s = e.width,
                                l = e.height,
                                u = e.pixelRatio[0],
                                c = e.pixelRatio[1];
                            return f.box(f.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, s >> 8 & 255, 255 & s, l >> 8 & 255, 255 & l, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, f.box(f.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), f.box(f.types.pasp, new Uint8Array([u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c])))
                        }, f.esds = function(e) {
                            var t = e.config.length;
                            return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
                        }, f.mp4a = function(e) {
                            var t = e.samplerate;
                            return f.box(f.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, t >> 8 & 255, 255 & t, 0, 0]), f.box(f.types.esds, f.esds(e)))
                        }, f.mp3 = function(e) {
                            var t = e.samplerate;
                            return f.box(f.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, e.channelCount, 0, 16, 0, 0, 0, 0, t >> 8 & 255, 255 & t, 0, 0]))
                        }, f.stsd = function(e) {
                            return "audio" === e.type ? e.isAAC || "mp3" !== e.codec ? f.box(f.types.stsd, f.STSD, f.mp4a(e)) : f.box(f.types.stsd, f.STSD, f.mp3(e)) : f.box(f.types.stsd, f.STSD, f.avc1(e))
                        }, f.tkhd = function(e) {
                            var t = e.id,
                                r = e.duration * e.timescale,
                                n = e.width,
                                i = e.height,
                                a = Math.floor(r / (1 + x)),
                                o = Math.floor(r % (1 + x));
                            return f.box(f.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, i >> 8 & 255, 255 & i, 0, 0]))
                        }, f.traf = function(e, t) {
                            var r = f.sdtp(e),
                                n = e.id,
                                i = Math.floor(t / (1 + x)),
                                a = Math.floor(t % (1 + x));
                            return f.box(f.types.traf, f.box(f.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), f.box(f.types.tfdt, new Uint8Array([1, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), f.trun(e, r.length + 16 + 20 + 8 + 16 + 8 + 8), r)
                        }, f.trak = function(e) {
                            return e.duration = e.duration || 4294967295, f.box(f.types.trak, f.tkhd(e), f.mdia(e))
                        }, f.trex = function(e) {
                            var t = e.id;
                            return f.box(f.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                        }, f.trun = function(e, t) {
                            var r, n, i, a, o, s, l = e.samples || [],
                                u = l.length,
                                c = 12 + 16 * u,
                                d = new Uint8Array(c);
                            for (t += 8 + c, d.set([0, 0, 15, 1, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t], 0), r = 0; r < u; r++) i = (n = l[r]).duration, a = n.size, o = n.flags, s = n.cts, d.set([i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s], 12 + 16 * r);
                            return f.box(f.types.trun, d)
                        }, f.initSegment = function(e) {
                            f.types || f.init();
                            var t, r = f.moov(e);
                            return (t = new Uint8Array(f.FTYP.byteLength + r.byteLength)).set(f.FTYP), t.set(r, f.FTYP.byteLength), t
                        }, f
                    }(),
                    ne = O,
                    z = o(10),
                    ie = o(.2),
                    N = function() {
                        function e(e, t, r, n) {
                            this.observer = e, this.config = t, this.typeSupported = r;
                            var i = navigator.userAgent;
                            this.isSafari = n && -1 < n.indexOf("Apple") && i && !i.match("CriOS"), this.ISGenerated = !1
                        }
                        var t = e.prototype;
                        return t.destroy = function() {}, t.resetTimeStamp = function(e) {
                            this._initPTS = this._initDTS = e
                        }, t.resetInitSegment = function() {
                            this.ISGenerated = !1
                        }, t.remux = function(e, t, r, n, i, a, o) {
                            if (this.ISGenerated || this.generateIS(e, t, i), this.ISGenerated) {
                                var s = e.samples.length,
                                    l = t.samples.length,
                                    u = i,
                                    c = i;
                                if (s && l) {
                                    var d = (e.samples[0].pts - t.samples[0].pts) / t.inputTimeScale;
                                    u += Math.max(0, d), c += Math.max(0, -d)
                                }
                                if (s) {
                                    e.timescale || (re.logger.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, i));
                                    var f, h = this.remuxAudio(e, u, a, o);
                                    if (l) h && (f = h.endPTS - h.startPTS), t.timescale || (re.logger.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, i)), this.remuxVideo(t, c, a, f, o)
                                } else if (l) {
                                    var g = this.remuxVideo(t, c, a, 0, o);
                                    g && e.codec && this.remuxEmptyAudio(e, u, a, g)
                                }
                            }
                            r.samples.length && this.remuxID3(r, i), n.samples.length && this.remuxText(n, i), this.observer.trigger(ee.default.FRAG_PARSED)
                        }, t.generateIS = function(e, t, r) {
                            var n, i, a = this.observer,
                                o = e.samples,
                                s = t.samples,
                                l = this.typeSupported,
                                u = "audio/mp4",
                                c = {},
                                d = {
                                    tracks: c
                                },
                                f = void 0 === this._initPTS;
                            if (f && (n = i = 1 / 0), e.config && o.length && (e.timescale = e.samplerate, re.logger.log("audio sampling rate : " + e.samplerate), e.isAAC || (l.mpeg ? (u = "audio/mpeg", e.codec = "") : l.mp3 && (e.codec = "mp3")), c.audio = {
                                    container: u,
                                    codec: e.codec,
                                    initSegment: !e.isAAC && l.mpeg ? new Uint8Array : ne.initSegment([e]),
                                    metadata: {
                                        channelCount: e.channelCount
                                    }
                                }, f && (n = i = o[0].pts - e.inputTimeScale * r)), t.sps && t.pps && s.length) {
                                var h = t.inputTimeScale;
                                t.timescale = h, c.video = {
                                    container: "video/mp4",
                                    codec: t.codec,
                                    initSegment: ne.initSegment([t]),
                                    metadata: {
                                        width: t.width,
                                        height: t.height
                                    }
                                }, f && (n = Math.min(n, s[0].pts - h * r), i = Math.min(i, s[0].dts - h * r), this.observer.trigger(ee.default.INIT_PTS_FOUND, {
                                    initPTS: n
                                }))
                            }
                            Object.keys(c).length ? (a.trigger(ee.default.FRAG_PARSING_INIT_SEGMENT, d), this.ISGenerated = !0, f && (this._initPTS = n, this._initDTS = i)) : a.trigger(ee.default.ERROR, {
                                type: te.ErrorTypes.MEDIA_ERROR,
                                details: te.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: !1,
                                reason: "no audio/video samples found"
                            })
                        }, t.remuxVideo = function(e, t, r, n, i) {
                            var a, o, s, l, u, c, d, f = 8,
                                h = e.timescale,
                                g = e.samples,
                                p = [],
                                v = g.length,
                                m = this._PTSNormalize,
                                y = this._initPTS,
                                b = this.nextAvcDts,
                                E = this.isSafari;
                            if (0 !== v) {
                                E && (r |= g.length && b && (i && Math.abs(t - b / h) < .1 || Math.abs(g[0].pts - b - y) < h / 5)), r || (b = t * h), g.forEach(function(e) {
                                    e.pts = m(e.pts - y, b), e.dts = m(e.dts - y, b)
                                }), g.sort(function(e, t) {
                                    var r = e.dts - t.dts,
                                        n = e.pts - t.pts;
                                    return r || n || e.id - t.id
                                });
                                var _ = g.reduce(function(e, t) {
                                    return Math.max(Math.min(e, t.pts - t.dts), -1 * ie)
                                }, 0);
                                if (_ < 0) {
                                    re.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + $(_, !0) + " ms to overcome this issue");
                                    for (var T = 0; T < g.length; T++) g[T].dts += _
                                }
                                var S = g[0];
                                u = Math.max(S.dts, 0), l = Math.max(S.pts, 0);
                                var w = u - b;
                                r && w && (1 < w ? re.logger.log("AVC: " + $(w, !0) + " ms hole between fragments detected,filling it") : w < -1 && re.logger.log("AVC: " + $(-w, !0) + " ms overlapping between fragments detected"), u = b, g[0].dts = u, l = Math.max(l - w, b), g[0].pts = l, re.logger.log("Video: PTS/DTS adjusted: " + $(l, !0) + "/" + $(u, !0) + ", delta: " + $(w, !0) + " ms")), S = g[g.length - 1], d = Math.max(S.dts, 0), c = Math.max(S.pts, 0, d), E && (a = Math.round((d - u) / (g.length - 1)));
                                for (var R = 0, A = 0, L = 0; L < v; L++) {
                                    for (var k = g[L], D = k.units, I = D.length, C = 0, P = 0; P < I; P++) C += D[P].data.length;
                                    A += C, R += I, k.length = C, k.dts = E ? u + L * a : Math.max(k.dts, u), k.pts = Math.max(k.pts, k.dts)
                                }
                                var x = A + 4 * R + 8;
                                try {
                                    o = new Uint8Array(x)
                                } catch (e) {
                                    return void this.observer.trigger(ee.default.ERROR, {
                                        type: te.ErrorTypes.MUX_ERROR,
                                        details: te.ErrorDetails.REMUX_ALLOC_ERROR,
                                        fatal: !1,
                                        bytes: x,
                                        reason: "fail allocating video mdat " + x
                                    })
                                }
                                var O = new DataView(o.buffer);
                                O.setUint32(0, x), o.set(ne.types.mdat, 4);
                                for (var N = 0; N < v; N++) {
                                    for (var M = g[N], F = M.units, U = 0, B = void 0, G = 0, j = F.length; G < j; G++) {
                                        var V = F[G],
                                            K = V.data,
                                            H = V.data.byteLength;
                                        O.setUint32(f, H), f += 4, o.set(K, f), f += H, U += 4 + H
                                    }
                                    if (E) B = Math.max(0, a * Math.round((M.pts - M.dts) / a));
                                    else {
                                        if (N < v - 1) a = g[N + 1].dts - M.dts;
                                        else {
                                            var W = this.config,
                                                Y = M.dts - g[0 < N ? N - 1 : N].dts;
                                            if (W.stretchShortVideoTrack) {
                                                var z = W.maxBufferHole,
                                                    q = Math.floor(z * h),
                                                    X = (n ? l + n * h : this.nextAudioPts) - M.pts;
                                                q < X ? ((a = X - Y) < 0 && (a = Y), re.logger.log("It is approximately " + $(X, !1) + " ms to the next segment; using duration " + $(a, !1) + " ms for the last video frame.")) : a = Y
                                            } else a = Y
                                        }
                                        B = Math.round(M.pts - M.dts)
                                    }
                                    p.push({
                                        size: U,
                                        duration: a,
                                        cts: B,
                                        flags: {
                                            isLeading: 0,
                                            isDependedOn: 0,
                                            hasRedundancy: 0,
                                            degradPrio: 0,
                                            dependsOn: M.key ? 2 : 1,
                                            isNonSync: M.key ? 0 : 1
                                        }
                                    })
                                }
                                this.nextAvcDts = d + a;
                                var Z = e.dropped;
                                if (e.nbNalu = 0, e.dropped = 0, p.length && -1 < navigator.userAgent.toLowerCase().indexOf("chrome")) {
                                    var J = p[0].flags;
                                    J.dependsOn = 2, J.isNonSync = 0
                                }
                                e.samples = p, s = ne.moof(e.sequenceNumber++, u, e), e.samples = [];
                                var Q = {
                                    data1: s,
                                    data2: o,
                                    startPTS: l / h,
                                    endPTS: (c + a) / h,
                                    startDTS: u / h,
                                    endDTS: this.nextAvcDts / h,
                                    type: "video",
                                    hasAudio: !1,
                                    hasVideo: !0,
                                    nb: p.length,
                                    dropped: Z
                                };
                                return this.observer.trigger(ee.default.FRAG_PARSING_DATA, Q), Q
                            }
                        }, t.remuxAudio = function(e, t, r, n) {
                            var i, a, o, s, l, u, c = e.inputTimeScale,
                                d = e.timescale,
                                f = c / d,
                                h = e.isAAC ? 1024 : 1152,
                                g = h * f,
                                p = this._PTSNormalize,
                                v = this._initPTS,
                                m = !e.isAAC && this.typeSupported.mpeg,
                                y = m ? 0 : 8,
                                b = e.samples,
                                E = [],
                                _ = this.nextAudioPts;
                            if (r |= b.length && _ && (n && Math.abs(t - _ / c) < .1 || Math.abs(b[0].pts - _ - v) < 20 * g), b.forEach(function(e) {
                                    e.pts = e.dts = p(e.pts - v, t * c)
                                }), 0 !== (b = b.filter(function(e) {
                                    return 0 <= e.pts
                                })).length) {
                                if (r || (_ = n ? t * c : b[0].pts), e.isAAC)
                                    for (var T = this.config.maxAudioFramesDrift, S = 0, w = _; S < b.length;) {
                                        var R, A = b[S],
                                            L = A.pts;
                                        if ((R = L - w) <= -T * g) re.logger.warn("Dropping 1 audio frame @ " + $(w, !0) + " ms due to " + $(R, !0) + " ms overlap."), b.splice(S, 1);
                                        else if (T * g <= R && R < z && w) {
                                            var k = Math.round(R / g);
                                            re.logger.warn("Injecting " + k + " audio frames @ " + $(w, !0) + " ms due to " + $(w, !0) + " ms gap.");
                                            for (var D = 0; D < k; D++) {
                                                var I = Math.max(w, 0);
                                                (a = Y.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (re.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), a = A.unit.subarray()), b.splice(S, 0, {
                                                    unit: a,
                                                    pts: I,
                                                    dts: I
                                                }), w += g, S++
                                            }
                                            A.pts = A.dts = w, w += g, S++
                                        } else Math.abs(R), A.pts = A.dts = w, w += g, S++
                                    }
                                for (var C = b.length, P = 0; C--;) P += b[C].unit.byteLength;
                                for (var x = 0, O = b.length; x < O; x++) {
                                    var N = b[x],
                                        M = N.unit,
                                        F = N.pts;
                                    if (void 0 !== u) i.duration = Math.round((F - u) / f);
                                    else {
                                        var U = F - _,
                                            B = 0;
                                        if (r && e.isAAC && U) {
                                            if (0 < U && U < z) B = Math.round((F - _) / g), re.logger.log($(U, !0) + " ms hole between AAC samples detected,filling it"), 0 < B && (a = (a = Y.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || M.subarray(), P += B * a.length);
                                            else if (U < -12) {
                                                re.logger.log("drop overlapping AAC sample, expected/parsed/delta: " + $(_, !0) + " ms / " + $(F, !0) + " ms / " + $(-U, !0) + " ms"), P -= M.byteLength;
                                                continue
                                            }
                                            F = _
                                        }
                                        if (l = F, !(0 < P)) return;
                                        P += y;
                                        try {
                                            o = new Uint8Array(P)
                                        } catch (e) {
                                            return void this.observer.trigger(ee.default.ERROR, {
                                                type: te.ErrorTypes.MUX_ERROR,
                                                details: te.ErrorDetails.REMUX_ALLOC_ERROR,
                                                fatal: !1,
                                                bytes: P,
                                                reason: "fail allocating audio mdat " + P
                                            })
                                        }
                                        m || (new DataView(o.buffer).setUint32(0, P), o.set(ne.types.mdat, 4));
                                        for (var G = 0; G < B; G++)(a = Y.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (re.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), a = M.subarray()), o.set(a, y), y += a.byteLength, i = {
                                            size: a.byteLength,
                                            cts: 0,
                                            duration: 1024,
                                            flags: {
                                                isLeading: 0,
                                                isDependedOn: 0,
                                                hasRedundancy: 0,
                                                degradPrio: 0,
                                                dependsOn: 1
                                            }
                                        }, E.push(i)
                                    }
                                    o.set(M, y);
                                    var j = M.byteLength;
                                    y += j, i = {
                                        size: j,
                                        cts: 0,
                                        duration: 0,
                                        flags: {
                                            isLeading: 0,
                                            isDependedOn: 0,
                                            hasRedundancy: 0,
                                            degradPrio: 0,
                                            dependsOn: 1
                                        }
                                    }, E.push(i), u = F
                                }
                                var V = 0;
                                if (2 <= (C = E.length) && (V = E[C - 2].duration, i.duration = V), C) {
                                    this.nextAudioPts = _ = u + f * V, e.samples = E, s = m ? new Uint8Array : ne.moof(e.sequenceNumber++, l / f, e), e.samples = [];
                                    var K = l / c,
                                        H = _ / c,
                                        W = {
                                            data1: s,
                                            data2: o,
                                            startPTS: K,
                                            endPTS: H,
                                            startDTS: K,
                                            endDTS: H,
                                            type: "audio",
                                            hasAudio: !0,
                                            hasVideo: !1,
                                            nb: C
                                        };
                                    return this.observer.trigger(ee.default.FRAG_PARSING_DATA, W), W
                                }
                                return null
                            }
                        }, t.remuxEmptyAudio = function(e, t, r, n) {
                            var i = e.inputTimeScale,
                                a = e.samplerate ? e.samplerate : i,
                                o = i / a,
                                s = this.nextAudioPts,
                                l = (void 0 !== s ? s : n.startDTS * i) + this._initDTS,
                                u = n.endDTS * i + this._initDTS,
                                c = 1024 * o,
                                d = Math.ceil((u - l) / c),
                                f = Y.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
                            if (re.logger.warn("remux empty Audio"), f) {
                                for (var h = [], g = 0; g < d; g++) {
                                    var p = l + g * c;
                                    h.push({
                                        unit: f,
                                        pts: p,
                                        dts: p
                                    })
                                }
                                e.samples = h, this.remuxAudio(e, t, r)
                            } else re.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
                        }, t.remuxID3 = function(e) {
                            var t, r = e.samples.length,
                                n = e.inputTimeScale,
                                i = this._initPTS,
                                a = this._initDTS;
                            if (r) {
                                for (var o = 0; o < r; o++)(t = e.samples[o]).pts = (t.pts - i) / n, t.dts = (t.dts - a) / n;
                                this.observer.trigger(ee.default.FRAG_PARSING_METADATA, {
                                    samples: e.samples
                                })
                            }
                            e.samples = []
                        }, t.remuxText = function(e) {
                            e.samples.sort(function(e, t) {
                                return e.pts - t.pts
                            });
                            var t, r = e.samples.length,
                                n = e.inputTimeScale,
                                i = this._initPTS;
                            if (r) {
                                for (var a = 0; a < r; a++)(t = e.samples[a]).pts = (t.pts - i) / n;
                                this.observer.trigger(ee.default.FRAG_PARSING_USERDATA, {
                                    samples: e.samples
                                })
                            }
                            e.samples = []
                        }, t._PTSNormalize = function(e, t) {
                            var r;
                            if (void 0 === t) return e;
                            for (r = t < e ? -8589934592 : 8589934592; 4294967296 < Math.abs(e - t);) e += r;
                            return e
                        }, e
                    }(),
                    M = N,
                    F = function() {
                        function e(e) {
                            this.observer = e
                        }
                        var t = e.prototype;
                        return t.destroy = function() {}, t.resetTimeStamp = function() {}, t.resetInitSegment = function() {}, t.remux = function(e, t, r, n, i, a, o, s) {
                            var l = this.observer,
                                u = "";
                            e && (u += "audio"), t && (u += "video"), l.trigger(ee.default.FRAG_PARSING_DATA, {
                                data1: s,
                                startPTS: i,
                                startDTS: i,
                                type: u,
                                hasAudio: !!e,
                                hasVideo: !!t,
                                nb: 1,
                                dropped: 0
                            }), l.trigger(ee.default.FRAG_PARSED)
                        }, e
                    }(),
                    U = F,
                    B = Object(s.getSelfScope)();
                try {
                    p = B.performance.now.bind(B.performance)
                } catch (e) {
                    re.logger.debug("Unable to use Performance API on this environment"), p = B.Date.now
                }
                var G = function() {
                    function e(e, t, r, n) {
                        this.observer = e, this.typeSupported = t, this.config = r, this.vendor = n
                    }
                    var t = e.prototype;
                    return t.destroy = function() {
                        var e = this.demuxer;
                        e && e.destroy()
                    }, t.push = function(e, r, n, i, a, o, s, l, u, c, d, f) {
                        var h = this;
                        if (0 < e.byteLength && null != r && null != r.key && "AES-128" === r.method) {
                            var t = this.decrypter;
                            null == t && (t = this.decrypter = new E.default(this.observer, this.config));
                            var g = p();
                            t.decrypt(e, r.key.buffer, r.iv.buffer, function(e) {
                                var t = p();
                                h.observer.trigger(ee.default.FRAG_DECRYPTED, {
                                    stats: {
                                        tstart: g,
                                        tdecrypt: t
                                    }
                                }), h.pushDecrypted(new Uint8Array(e), r, new Uint8Array(n), i, a, o, s, l, u, c, d, f)
                            })
                        } else this.pushDecrypted(new Uint8Array(e), r, new Uint8Array(n), i, a, o, s, l, u, c, d, f)
                    }, t.pushDecrypted = function(e, t, r, n, i, a, o, s, l, u, c, d) {
                        var f = this.demuxer;
                        if (!f || (o || s) && !this.probe(e)) {
                            for (var h = this.observer, g = this.typeSupported, p = this.config, v = [{
                                    demux: L,
                                    remux: M
                                }, {
                                    demux: w.default,
                                    remux: U
                                }, {
                                    demux: S,
                                    remux: M
                                }, {
                                    demux: C,
                                    remux: M
                                }], m = 0, y = v.length; m < y; m++) {
                                var b = v[m],
                                    E = b.demux.probe;
                                if (E(e)) {
                                    var _ = this.remuxer = new b.remux(h, p, g, this.vendor);
                                    f = new b.demux(h, _, p, g), this.probe = E;
                                    break
                                }
                            }
                            if (!f) return void h.trigger(ee.default.ERROR, {
                                type: te.ErrorTypes.MEDIA_ERROR,
                                details: te.ErrorDetails.FRAG_PARSING_ERROR,
                                fatal: !0,
                                reason: "no demux matching with content found"
                            });
                            this.demuxer = f
                        }
                        var T = this.remuxer;
                        (o || s) && (f.resetInitSegment(r, n, i, u), T.resetInitSegment()), o && (f.resetTimeStamp(d), T.resetTimeStamp(d)), "function" == typeof f.setDecryptData && f.setDecryptData(t), f.append(e, a, l, c)
                    }, e
                }();
                t.default = G
            },
            "./src/demux/demuxer-worker.js": function(e, t, r) {
                "use strict";
                r.r(t);
                var o = r("./src/demux/demuxer-inline.js"),
                    s = r("./src/events.js"),
                    l = r("./src/utils/logger.js"),
                    u = r("./node_modules/eventemitter3/index.js");
                t.default = function(i) {
                    var a = new u.EventEmitter;
                    a.trigger = function(e) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                        a.emit.apply(a, [e, e].concat(r))
                    }, a.off = function(e) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                        a.removeListener.apply(a, [e].concat(r))
                    };
                    var n = function(e, t) {
                        i.postMessage({
                            event: e,
                            data: t
                        })
                    };
                    i.addEventListener("message", function(e) {
                        var t = e.data;
                        switch (t.cmd) {
                            case "init":
                                var r = JSON.parse(t.config);
                                i.demuxer = new o.default(a, t.typeSupported, r, t.vendor), Object(l.enableLogs)(r.debug), n("init", null);
                                break;
                            case "demux":
                                i.demuxer.push(t.data, t.decryptdata, t.initSegment, t.audioCodec, t.videoCodec, t.timeOffset, t.discontinuity, t.trackSwitch, t.contiguous, t.duration, t.accurateTimeOffset, t.defaultInitPTS)
                        }
                    }), a.on(s.default.FRAG_DECRYPTED, n), a.on(s.default.FRAG_PARSING_INIT_SEGMENT, n), a.on(s.default.FRAG_PARSED, n), a.on(s.default.ERROR, n), a.on(s.default.FRAG_PARSING_METADATA, n), a.on(s.default.FRAG_PARSING_USERDATA, n), a.on(s.default.INIT_PTS_FOUND, n), a.on(s.default.FRAG_PARSING_DATA, function(e, t) {
                        var r = [],
                            n = {
                                event: e,
                                data: t
                            };
                        t.data1 && (n.data1 = t.data1.buffer, r.push(t.data1.buffer), delete t.data1), t.data2 && (n.data2 = t.data2.buffer, r.push(t.data2.buffer), delete t.data2), i.postMessage(n, r)
                    })
                }
            },
            "./src/demux/id3.js": function(e, t, r) {
                "use strict";
                r.r(t), r.d(t, "utf8ArrayToStr", function() {
                    return i
                });
                var d, f = r("./src/utils/get-self-scope.js"),
                    n = function() {
                        function s() {}
                        return s.isHeader = function(e, t) {
                            return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
                        }, s.isFooter = function(e, t) {
                            return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
                        }, s.getID3Data = function(e, t) {
                            for (var r = t, n = 0; s.isHeader(e, t);) n += 10, n += s._readSize(e, t + 6), s.isFooter(e, t + 10) && (n += 10), t += n;
                            if (0 < n) return e.subarray(r, r + n)
                        }, s._readSize = function(e, t) {
                            var r = 0;
                            return r = (127 & e[t]) << 21, r |= (127 & e[t + 1]) << 14, r |= (127 & e[t + 2]) << 7, r |= 127 & e[t + 3]
                        }, s.getTimeStamp = function(e) {
                            for (var t = s.getID3Frames(e), r = 0; r < t.length; r++) {
                                var n = t[r];
                                if (s.isTimeStampFrame(n)) return s._readTimeStamp(n)
                            }
                        }, s.isTimeStampFrame = function(e) {
                            return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
                        }, s._getFrameData = function(e) {
                            var t = String.fromCharCode(e[0], e[1], e[2], e[3]),
                                r = s._readSize(e, 4);
                            return {
                                type: t,
                                size: r,
                                data: e.subarray(10, 10 + r)
                            }
                        }, s.getID3Frames = function(e) {
                            for (var t = 0, r = []; s.isHeader(e, t);) {
                                for (var n = s._readSize(e, t + 6), i = (t += 10) + n; t + 8 < i;) {
                                    var a = s._getFrameData(e.subarray(t)),
                                        o = s._decodeFrame(a);
                                    o && r.push(o), t += a.size + 10
                                }
                                s.isFooter(e, t) && (t += 10)
                            }
                            return r
                        }, s._decodeFrame = function(e) {
                            return "PRIV" === e.type ? s._decodePrivFrame(e) : "T" === e.type[0] ? s._decodeTextFrame(e) : "W" === e.type[0] ? s._decodeURLFrame(e) : void 0
                        }, s._readTimeStamp = function(e) {
                            if (8 === e.data.byteLength) {
                                var t = new Uint8Array(e.data),
                                    r = 1 & t[3],
                                    n = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
                                return n /= 45, r && (n += 47721858.84), Math.round(n)
                            }
                        }, s._decodePrivFrame = function(e) {
                            if (!(e.size < 2)) {
                                var t = s._utf8ArrayToStr(e.data, !0),
                                    r = new Uint8Array(e.data.subarray(t.length + 1));
                                return {
                                    key: e.type,
                                    info: t,
                                    data: r.buffer
                                }
                            }
                        }, s._decodeTextFrame = function(e) {
                            if (!(e.size < 2)) {
                                if ("TXXX" === e.type) {
                                    var t = 1,
                                        r = s._utf8ArrayToStr(e.data.subarray(t), !0);
                                    t += r.length + 1;
                                    var n = s._utf8ArrayToStr(e.data.subarray(t));
                                    return {
                                        key: e.type,
                                        info: r,
                                        data: n
                                    }
                                }
                                var i = s._utf8ArrayToStr(e.data.subarray(1));
                                return {
                                    key: e.type,
                                    data: i
                                }
                            }
                        }, s._decodeURLFrame = function(e) {
                            if ("WXXX" === e.type) {
                                if (e.size < 2) return;
                                var t = 1,
                                    r = s._utf8ArrayToStr(e.data.subarray(t));
                                t += r.length + 1;
                                var n = s._utf8ArrayToStr(e.data.subarray(t));
                                return {
                                    key: e.type,
                                    info: r,
                                    data: n
                                }
                            }
                            var i = s._utf8ArrayToStr(e.data);
                            return {
                                key: e.type,
                                data: i
                            }
                        }, s._utf8ArrayToStr = function(e, t) {
                            void 0 === t && (t = !1);
                            var r = function() {
                                var e = Object(f.getSelfScope)();
                                return d || void 0 === e.TextDecoder || (d = new e.TextDecoder("utf-8")), d
                            }();
                            if (r) {
                                var n = r.decode(e);
                                if (t) {
                                    var i = n.indexOf("\0");
                                    return -1 !== i ? n.substring(0, i) : n
                                }
                                return n.replace(/\0/g, "")
                            }
                            for (var a, o, s, l = e.length, u = "", c = 0; c < l;) {
                                if (0 === (a = e[c++]) && t) return u;
                                if (0 !== a && 3 !== a) switch (a >> 4) {
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                    case 5:
                                    case 6:
                                    case 7:
                                        u += String.fromCharCode(a);
                                        break;
                                    case 12:
                                    case 13:
                                        o = e[c++], u += String.fromCharCode((31 & a) << 6 | 63 & o);
                                        break;
                                    case 14:
                                        o = e[c++], s = e[c++], u += String.fromCharCode((15 & a) << 12 | (63 & o) << 6 | (63 & s) << 0)
                                }
                            }
                            return u
                        }, s
                    }(),
                    i = n._utf8ArrayToStr;
                t.default = n
            },
            "./src/demux/mp4demuxer.js": function(e, t, r) {
                "use strict";
                r.r(t);
                var h = r("./src/utils/logger.js"),
                    l = r("./src/events.js"),
                    s = Math.pow(2, 32) - 1,
                    n = function() {
                        function p(e, t) {
                            this.observer = e, this.remuxer = t
                        }
                        var e = p.prototype;
                        return e.resetTimeStamp = function(e) {
                            this.initPTS = e
                        }, e.resetInitSegment = function(e, t, r, n) {
                            if (e && e.byteLength) {
                                var i = this.initData = p.parseInitSegment(e);
                                null == t && (t = "mp4a.40.5"), null == r && (r = "avc1.42e01e");
                                var a = {};
                                i.audio && i.video ? a.audiovideo = {
                                    container: "video/mp4",
                                    codec: t + "," + r,
                                    initSegment: n ? e : null
                                } : (i.audio && (a.audio = {
                                    container: "audio/mp4",
                                    codec: t,
                                    initSegment: n ? e : null
                                }), i.video && (a.video = {
                                    container: "video/mp4",
                                    codec: r,
                                    initSegment: n ? e : null
                                })), this.observer.trigger(l.default.FRAG_PARSING_INIT_SEGMENT, {
                                    tracks: a
                                })
                            } else t && (this.audioCodec = t), r && (this.videoCodec = r)
                        }, p.probe = function(e) {
                            return 0 < p.findBox({
                                data: e,
                                start: 0,
                                end: Math.min(e.length, 16384)
                            }, ["moof"]).length
                        }, p.bin2str = function(e) {
                            return String.fromCharCode.apply(null, e)
                        }, p.readUint16 = function(e, t) {
                            e.data && (t += e.start, e = e.data);
                            var r = e[t] << 8 | e[t + 1];
                            return r < 0 ? 65536 + r : r
                        }, p.readUint32 = function(e, t) {
                            e.data && (t += e.start, e = e.data);
                            var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
                            return r < 0 ? 4294967296 + r : r
                        }, p.writeUint32 = function(e, t, r) {
                            e.data && (t += e.start, e = e.data), e[t] = r >> 24, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r
                        }, p.findBox = function(e, t) {
                            var r, n, i, a, o, s, l, u = [];
                            if (e.data ? (s = e.start, a = e.end, e = e.data) : (s = 0, a = e.byteLength), !t.length) return null;
                            for (r = s; r < a;) n = p.readUint32(e, r), i = p.bin2str(e.subarray(r + 4, r + 8)), l = 1 < n ? r + n : a, i === t[0] && (1 === t.length ? u.push({
                                data: e,
                                start: r + 8,
                                end: l
                            }) : (o = p.findBox({
                                data: e,
                                start: r + 8,
                                end: l
                            }, t.slice(1))).length && (u = u.concat(o))), r = l;
                            return u
                        }, p.parseSegmentIndex = function(e) {
                            var t, r = p.findBox(e, ["moov"])[0],
                                n = r ? r.end : null,
                                i = 0,
                                a = p.findBox(e, ["sidx"]);
                            if (!a || !a[0]) return null;
                            t = [];
                            var o = (a = a[0]).data[0],
                                s = p.readUint32(a, i = 0 === o ? 8 : 16);
                            i += 4, i += 0 === o ? 8 : 16, i += 2;
                            var l = a.end + 0,
                                u = p.readUint16(a, i);
                            i += 2;
                            for (var c = 0; c < u; c++) {
                                var d = i,
                                    f = p.readUint32(a, d);
                                d += 4;
                                var h = 2147483647 & f;
                                if (1 == (2147483648 & f) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
                                var g = p.readUint32(a, d);
                                d += 4, t.push({
                                    referenceSize: h,
                                    subsegmentDuration: g,
                                    info: {
                                        duration: g / s,
                                        start: l,
                                        end: l + h - 1
                                    }
                                }), l += h, i = d += 4
                            }
                            return {
                                earliestPresentationTime: 0,
                                timescale: s,
                                version: o,
                                referencesCount: u,
                                references: t,
                                moovEndOffset: n
                            }
                        }, p.parseInitSegment = function(e) {
                            var f = [];
                            return p.findBox(e, ["moov", "trak"]).forEach(function(e) {
                                var t = p.findBox(e, ["tkhd"])[0];
                                if (t) {
                                    var r = t.data[t.start],
                                        n = 0 === r ? 12 : 20,
                                        i = p.readUint32(t, n),
                                        a = p.findBox(e, ["mdia", "mdhd"])[0];
                                    if (a) {
                                        r = a.data[a.start];
                                        var o = p.readUint32(a, n = 0 === r ? 12 : 20),
                                            s = p.findBox(e, ["mdia", "hdlr"])[0];
                                        if (s) {
                                            var l = p.bin2str(s.data.subarray(s.start + 8, s.start + 12)),
                                                u = {
                                                    soun: "audio",
                                                    vide: "video"
                                                } [l];
                                            if (u) {
                                                var c = p.findBox(e, ["mdia", "minf", "stbl", "stsd"]);
                                                if (c.length) {
                                                    c = c[0];
                                                    var d = p.bin2str(c.data.subarray(c.start + 12, c.start + 16));
                                                    h.logger.log("MP4Demuxer:" + u + ":" + d + " found")
                                                }
                                                f[i] = {
                                                    timescale: o,
                                                    type: u
                                                }, f[u] = {
                                                    timescale: o,
                                                    id: i
                                                }
                                            }
                                        }
                                    }
                                }
                            }), f
                        }, p.getStartDTS = function(i, e) {
                            var t, r, n;
                            return t = p.findBox(e, ["moof", "traf"]), r = [].concat.apply([], t.map(function(n) {
                                return p.findBox(n, ["tfhd"]).map(function(e) {
                                    var t, r;
                                    return t = p.readUint32(e, 4), r = i[t].timescale || 9e4, p.findBox(n, ["tfdt"]).map(function(e) {
                                        var t, r;
                                        return t = e.data[e.start], r = p.readUint32(e, 4), 1 === t && (r *= Math.pow(2, 32), r += p.readUint32(e, 8)), r
                                    })[0] / r
                                })
                            })), n = Math.min.apply(null, r), isFinite(n) ? n : 0
                        }, p.offsetStartDTS = function(n, e, o) {
                            p.findBox(e, ["moof", "traf"]).map(function(r) {
                                return p.findBox(r, ["tfhd"]).map(function(e) {
                                    var t = p.readUint32(e, 4),
                                        a = n[t].timescale || 9e4;
                                    p.findBox(r, ["tfdt"]).map(function(e) {
                                        var t = e.data[e.start],
                                            r = p.readUint32(e, 4);
                                        if (0 === t) p.writeUint32(e, 4, r - o * a);
                                        else {
                                            r *= Math.pow(2, 32), r += p.readUint32(e, 8), r -= o * a, r = Math.max(r, 0);
                                            var n = Math.floor(r / (1 + s)),
                                                i = Math.floor(r % (1 + s));
                                            p.writeUint32(e, 4, n), p.writeUint32(e, 8, i)
                                        }
                                    })
                                })
                            })
                        }, e.append = function(e, t, r, n) {
                            var i = this.initData;
                            i || (this.resetInitSegment(e, this.audioCodec, this.videoCodec, !1), i = this.initData);
                            var a, o = this.initPTS;
                            if (void 0 === o) {
                                var s = p.getStartDTS(i, e);
                                this.initPTS = o = s - t, this.observer.trigger(l.default.INIT_PTS_FOUND, {
                                    initPTS: o
                                })
                            }
                            p.offsetStartDTS(i, e, o), a = p.getStartDTS(i, e), this.remuxer.remux(i.audio, i.video, null, null, a, r, n, e)
                        }, e.destroy = function() {}, p
                    }();
                t.default = n
            },
            "./src/errors.ts": function(e, t, r) {
                "use strict";
                var n, i;
                r.r(t), r.d(t, "ErrorTypes", function() {
                        return n
                    }), r.d(t, "ErrorDetails", function() {
                        return i
                    }),
                    function(e) {
                        e.NETWORK_ERROR = "networkError", e.MEDIA_ERROR = "mediaError", e.KEY_SYSTEM_ERROR = "keySystemError", e.MUX_ERROR = "muxError", e.OTHER_ERROR = "otherError"
                    }(n = n || {}),
                    function(e) {
                        e.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", e.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", e.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", e.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", e.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", e.MANIFEST_LOAD_ERROR = "manifestLoadError", e.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", e.MANIFEST_PARSING_ERROR = "manifestParsingError", e.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", e.LEVEL_LOAD_ERROR = "levelLoadError", e.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", e.LEVEL_SWITCH_ERROR = "levelSwitchError", e.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", e.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", e.FRAG_LOAD_ERROR = "fragLoadError", e.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", e.FRAG_DECRYPT_ERROR = "fragDecryptError", e.FRAG_PARSING_ERROR = "fragParsingError", e.REMUX_ALLOC_ERROR = "remuxAllocError", e.KEY_LOAD_ERROR = "keyLoadError", e.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", e.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", e.BUFFER_APPEND_ERROR = "bufferAppendError", e.BUFFER_APPENDING_ERROR = "bufferAppendingError", e.BUFFER_STALLED_ERROR = "bufferStalledError", e.BUFFER_FULL_ERROR = "bufferFullError", e.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", e.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", e.INTERNAL_EXCEPTION = "internalException"
                    }(i = i || {})
            },
            "./src/events.js": function(e, t, r) {
                "use strict";
                r.r(t);
                t.default = {
                    MEDIA_ATTACHING: "hlsMediaAttaching",
                    MEDIA_ATTACHED: "hlsMediaAttached",
                    MEDIA_DETACHING: "hlsMediaDetaching",
                    MEDIA_DETACHED: "hlsMediaDetached",
                    BUFFER_RESET: "hlsBufferReset",
                    BUFFER_CODECS: "hlsBufferCodecs",
                    BUFFER_CREATED: "hlsBufferCreated",
                    BUFFER_APPENDING: "hlsBufferAppending",
                    BUFFER_APPENDED: "hlsBufferAppended",
                    BUFFER_EOS: "hlsBufferEos",
                    BUFFER_FLUSHING: "hlsBufferFlushing",
                    BUFFER_FLUSHED: "hlsBufferFlushed",
                    MANIFEST_LOADING: "hlsManifestLoading",
                    MANIFEST_LOADED: "hlsManifestLoaded",
                    MANIFEST_PARSED: "hlsManifestParsed",
                    LEVEL_SWITCHING: "hlsLevelSwitching",
                    LEVEL_SWITCHED: "hlsLevelSwitched",
                    LEVEL_LOADING: "hlsLevelLoading",
                    LEVEL_LOADED: "hlsLevelLoaded",
                    LEVEL_UPDATED: "hlsLevelUpdated",
                    LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
                    AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
                    AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
                    AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
                    AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
                    AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
                    SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
                    SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
                    SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
                    SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
                    SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
                    INIT_PTS_FOUND: "hlsInitPtsFound",
                    FRAG_LOADING: "hlsFragLoading",
                    FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
                    FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
                    FRAG_LOADED: "hlsFragLoaded",
                    FRAG_DECRYPTED: "hlsFragDecrypted",
                    FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
                    FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
                    FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
                    FRAG_PARSING_DATA: "hlsFragParsingData",
                    FRAG_PARSED: "hlsFragParsed",
                    FRAG_BUFFERED: "hlsFragBuffered",
                    FRAG_CHANGED: "hlsFragChanged",
                    FPS_DROP: "hlsFpsDrop",
                    FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
                    ERROR: "hlsError",
                    DESTROYING: "hlsDestroying",
                    KEY_LOADING: "hlsKeyLoading",
                    KEY_LOADED: "hlsKeyLoaded",
                    STREAM_STATE_TRANSITION: "hlsStreamStateTransition",
                    LIVE_BACK_BUFFER_REACHED: "hlsLiveBackBufferReached"
                }
            },
            "./src/hls.ts": function(e, t, r) {
                "use strict";

                function n(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function i(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function a(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function u(e, t) {
                    return MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
                }

                function o() {
                    return window.MediaSource || window.WebKitMediaSource
                }

                function c(e, t, r) {
                    switch (t) {
                        case "audio":
                            e.audioGroupIds || (e.audioGroupIds = []), e.audioGroupIds.push(r);
                            break;
                        case "text":
                            e.textGroupIds || (e.textGroupIds = []), e.textGroupIds.push(r)
                    }
                }

                function h(e, t, r) {
                    var n = e[t],
                        i = e[r],
                        a = i.startPTS;
                    Object(Y.isFiniteNumber)(a) ? t < r ? (n.duration = a - n.start, n.duration < 0 && q.logger.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!")) : (i.duration = n.start - a, i.duration < 0 && q.logger.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : i.start = t < r ? n.start + n.duration : Math.max(n.start - i.duration, 0)
                }

                function f(e, t, r, n, i, a) {
                    var o = r;
                    if (Object(Y.isFiniteNumber)(t.startPTS)) {
                        var s = Math.abs(t.startPTS - r);
                        Object(Y.isFiniteNumber)(t.deltaPTS) ? t.deltaPTS = Math.max(s, t.deltaPTS) : t.deltaPTS = s, o = Math.max(r, t.startPTS), r = Math.min(r, t.startPTS), n = Math.max(n, t.endPTS), i = Math.min(i, t.startDTS), a = Math.max(a, t.endDTS)
                    }
                    var l = r - t.start;
                    t.start = t.startPTS = r, t.maxStartPTS = o, t.endPTS = n, t.startDTS = i, t.endDTS = a, t.duration = n - r;
                    var u, c, d, f = t.sn;
                    if (!e || f < e.startSN || f > e.endSN) return 0;
                    for (u = f - e.startSN, (c = e.fragments)[u] = t, d = u; 0 < d; d--) h(c, d, d - 1);
                    for (d = u; d < c.length - 1; d++) h(c, d, d + 1);
                    return e.PTSKnown = !0, l
                }

                function d(e, r) {
                    r.initSegment && e.initSegment && (r.initSegment = e.initSegment);
                    var n, i = 0;
                    if (s(e, r, function(e, t) {
                            i = e.cc - t.cc, Object(Y.isFiniteNumber)(e.startPTS) && (t.start = t.startPTS = e.startPTS, t.endPTS = e.endPTS, t.duration = e.duration, t.backtracked = e.backtracked, t.dropped = e.dropped, n = t), r.PTSKnown = !0
                        }), r.PTSKnown) {
                        if (i) {
                            q.logger.log("discontinuity sliding from playlist, take drift into account");
                            for (var t = r.fragments, a = 0; a < t.length; a++) t[a].cc += i
                        }
                        n ? f(r, n, n.startPTS, n.endPTS, n.startDTS, n.endDTS) : function(e, t) {
                            var r = t.startSN - e.startSN,
                                n = e.fragments,
                                i = t.fragments;
                            if (!(r < 0 || r > n.length))
                                for (var a = 0; a < i.length; a++) i[a].start += n[r].start
                        }(e, r), r.PTSKnown = e.PTSKnown
                    }
                }

                function s(e, t, r) {
                    if (e && t)
                        for (var n = Math.max(e.startSN, t.startSN) - t.startSN, i = Math.min(e.endSN, t.endSN) - t.startSN, a = t.startSN - e.startSN, o = n; o <= i; o++) {
                            var s = e.fragments[a + o],
                                l = t.fragments[o];
                            if (!s || !l) break;
                            r(s, l, o)
                        }
                }

                function l(e, t, r) {
                    var n = 1e3 * (t.averagetargetduration ? t.averagetargetduration : t.targetduration),
                        i = n / 2;
                    return e && t.endSN === e.endSN && (n = i), r && (n = Math.max(i, n - (window.performance.now() - r))), Math.round(n)
                }

                function g(e, t) {
                    for (var r = null, n = 0; n < e.length; n += 1) {
                        var i = e[n];
                        if (i && i.cc === t) {
                            r = i;
                            break
                        }
                    }
                    return r
                }

                function p(r, e) {
                    e.fragments.forEach(function(e) {
                        if (e) {
                            var t = e.start + r;
                            e.start = e.startPTS = t, e.endPTS = t + e.duration
                        }
                    }), e.PTSKnown = !0
                }

                function v(e, t, r) {
                    (function(e, t, r) {
                        if (function(e, t, r) {
                                var n = !1;
                                return t && t.details && r && (r.endCC > r.startCC || e && e.cc < r.startCC) && (n = !0), n
                            }(e, r, t)) {
                            var n = function(e, t) {
                                var r = e.fragments,
                                    n = t.fragments;
                                if (!n.length || !r.length) return void q.logger.log("No fragments to align");
                                var i = g(r, n[0].cc);
                                return !i || i && !i.startPTS ? void q.logger.log("No frag in previous level to align on") : i
                            }(r.details, t);
                            n && (q.logger.log("Adjusting PTS using last level due to CC increase within current level"), p(n.start, t))
                        }
                    })(e, r, t), !r.PTSKnown && t && function(e, t) {
                        if (t && t.fragments.length) {
                            if (!e.hasProgramDateTime || !t.hasProgramDateTime) return;
                            var r = t.fragments[0].programDateTime,
                                n = (e.fragments[0].programDateTime - r) / 1e3 + t.fragments[0].start;
                            Object(Y.isFiniteNumber)(n) && (q.logger.log("adjusting PTS using programDateTime delta, sliding:" + n.toFixed(3)), p(n, e))
                        }
                    }(r, t.details)
                }

                function m(e, t, r) {
                    if (null === t || !Array.isArray(e) || !e.length || !Object(Y.isFiniteNumber)(t)) return null;
                    if (t < (e[0].programDateTime || 0)) return null;
                    if (t >= (e[e.length - 1].endProgramDateTime || 0)) return null;
                    r = r || 0;
                    for (var n = 0; n < e.length; ++n) {
                        var i = e[n];
                        if (a = t, o = r, s = i, l = 1e3 * Math.min(o, s.duration + (s.deltaPTS ? s.deltaPTS : 0)), (s.endProgramDateTime || 0) - l > a) return i
                    }
                    var a, o, s, l;
                    return null
                }

                function y(e, t, r, n) {
                    void 0 === r && (r = 0), void 0 === n && (n = 0);
                    var i = e ? t[e.sn - t[0].sn + 1] : null;
                    return i && !b(r, n, i) ? i : Re.search(t, b.bind(null, r, n))
                }

                function b(e, t, r) {
                    void 0 === e && (e = 0), void 0 === t && (t = 0);
                    var n = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
                    return r.start + r.duration - n <= e ? 1 : r.start - n > e && r.start ? -1 : 0
                }

                function E(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function _(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function T(e, t) {
                    var r;
                    try {
                        r = new Event("addtrack")
                    } catch (e) {
                        (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
                    }
                    r.track = e, t.dispatchEvent(r)
                }

                function S(e) {
                    if (e && e.cues)
                        for (; 0 < e.cues.length;) e.removeCue(e.cues[0])
                }

                function w(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function R(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function A(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function L(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function k() {
                    this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new St, this.regionList = []
                }

                function D() {
                    this.values = Object.create(null)
                }

                function I(e, t, r, n) {
                    var i = n ? e.split(n) : [e];
                    for (var a in i)
                        if ("string" == typeof i[a]) {
                            var o = i[a].split(r);
                            if (2 === o.length) {
                                var s = o[0],
                                    l = o[1];
                                t(s, l)
                            }
                        }
                }

                function C(t, e, o) {
                    function r() {
                        var e = function(e) {
                            function t(e, t, r, n) {
                                return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | n) / 1e3
                            }
                            var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                            return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : 59 < r[1] ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null
                        }(t);
                        if (null === e) throw new Error("Malformed timestamp: " + i);
                        return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
                    }

                    function n() {
                        t = t.replace(/^\s+/, "")
                    }
                    var i = t;
                    if (n(), e.startTime = r(), n(), "--\x3e" !== t.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
                    t = t.substr(3), n(), e.endTime = r(), n(),
                        function(e, t) {
                            var a = new D;
                            I(e, function(e, t) {
                                switch (e) {
                                    case "region":
                                        for (var r = o.length - 1; 0 <= r; r--)
                                            if (o[r].id === t) {
                                                a.set(e, o[r].region);
                                                break
                                            } break;
                                    case "vertical":
                                        a.alt(e, t, ["rl", "lr"]);
                                        break;
                                    case "line":
                                        var n = t.split(","),
                                            i = n[0];
                                        a.integer(e, i), a.percent(e, i) && a.set("snapToLines", !1), a.alt(e, i, ["auto"]), 2 === n.length && a.alt("lineAlign", n[1], ["start", Rt, "end"]);
                                        break;
                                    case "position":
                                        n = t.split(","), a.percent(e, n[0]), 2 === n.length && a.alt("positionAlign", n[1], ["start", Rt, "end", "line-left", "line-right", "auto"]);
                                        break;
                                    case "size":
                                        a.percent(e, t);
                                        break;
                                    case "align":
                                        a.alt(e, t, ["start", Rt, "end", "left", "right"])
                                }
                            }, /:/, /\s/), t.region = a.get("region", null), t.vertical = a.get("vertical", "");
                            var r = a.get("line", "auto");
                            "auto" === r && -1 === wt.line && (r = -1), t.line = r, t.lineAlign = a.get("lineAlign", "start"), t.snapToLines = a.get("snapToLines", !0), t.size = a.get("size", 100), t.align = a.get("align", Rt);
                            var n = a.get("position", "auto");
                            "auto" === n && 50 === wt.position && (n = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50), t.position = n
                        }(t, e)
                }

                function P(e) {
                    return e.replace(/<br(?: \/)?>/gi, "\n")
                }

                function x(e, t, r, n) {
                    for (var i, a, o, s, l, u = window.VTTCue || TextTrackCue, c = 0; c < n.rows.length; c++)
                        if (i = n.rows[c], o = !0, s = 0, l = "", !i.isEmpty()) {
                            for (var d = 0; d < i.chars.length; d++) i.chars[d].uchar.match(/\s/) && o ? s++ : (l += i.chars[d].uchar, o = !1);
                            (i.cueStartTime = t) === r && (r += 1e-4), a = new u(t, r, P(l.trim())), 16 <= s ? s-- : s++, navigator.userAgent.match(/Firefox\//) ? a.line = c + 1 : a.line = 7 < c ? c - 2 : c + 1, a.align = "left", a.position = Math.max(0, Math.min(100, s / 32 * 100)), e.addCue(a)
                        }
                }

                function O(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function N(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function M(e) {
                    for (var t = [], r = 0; r < e.length; r++) {
                        var n = e[r];
                        "subtitles" === n.kind && n.label && t.push(e[r])
                    }
                    return t
                }

                function F(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function U(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function B(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }

                function G(e, t, r) {
                    return t && B(e.prototype, t), r && B(e, r), e
                }
                r.r(t);
                var j = {};
                r.r(j), r.d(j, "newCue", function() {
                    return x
                });
                var V, K, H = r("./node_modules/url-toolkit/src/url-toolkit.js"),
                    W = r("./src/errors.ts"),
                    Y = r("./src/polyfills/number-isFinite.js"),
                    z = r("./src/events.js"),
                    q = r("./src/utils/logger.js"),
                    X = {
                        hlsEventGeneric: !0,
                        hlsHandlerDestroying: !0,
                        hlsHandlerDestroyed: !0
                    },
                    Z = function() {
                        function e(e) {
                            this.hls = void 0, this.handledEvents = void 0, this.useGenericHandler = void 0, this.hls = e, this.onEvent = this.onEvent.bind(this);
                            for (var t = arguments.length, r = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                            this.handledEvents = r, this.useGenericHandler = !0, this.registerListeners()
                        }
                        var t = e.prototype;
                        return t.destroy = function() {
                            this.onHandlerDestroying(), this.unregisterListeners(), this.onHandlerDestroyed()
                        }, t.onHandlerDestroying = function() {}, t.onHandlerDestroyed = function() {}, t.isEventHandler = function() {
                            return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent
                        }, t.registerListeners = function() {
                            this.isEventHandler() && this.handledEvents.forEach(function(e) {
                                if (X[e]) throw new Error("Forbidden event-name: " + e);
                                this.hls.on(e, this.onEvent)
                            }, this)
                        }, t.unregisterListeners = function() {
                            this.isEventHandler() && this.handledEvents.forEach(function(e) {
                                this.hls.off(e, this.onEvent)
                            }, this)
                        }, t.onEvent = function(e, t) {
                            this.onEventGeneric(e, t)
                        }, t.onEventGeneric = function(e, t) {
                            try {
                                (function(e, t) {
                                    var r = "on" + e.replace("hls", "");
                                    if ("function" != typeof this[r]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
                                    return this[r].bind(this, t)
                                }).call(this, e, t).call()
                            } catch (t) {
                                q.logger.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t), this.hls.trigger(z.default.ERROR, {
                                    type: W.ErrorTypes.OTHER_ERROR,
                                    details: W.ErrorDetails.INTERNAL_EXCEPTION,
                                    fatal: !1,
                                    event: e,
                                    err: t
                                })
                            }
                        }, e
                    }(),
                    J = Z;
                ! function(e) {
                    e.MANIFEST = "manifest", e.LEVEL = "level", e.AUDIO_TRACK = "audioTrack", e.SUBTITLE_TRACK = "subtitleTrack"
                }(V = V || {}),
                function(e) {
                    e.MAIN = "main", e.AUDIO = "audio", e.SUBTITLE = "subtitle"
                }(K = K || {});
                var Q, $ = r("./src/demux/mp4demuxer.js"),
                    ee = function() {
                        function e(e, t) {
                            this._uri = null, this.baseuri = void 0, this.reluri = void 0, this.method = null, this.key = null, this.iv = null, this.baseuri = e, this.reluri = t
                        }
                        return function(e, t, r) {
                            t && n(e.prototype, t), r && n(e, r)
                        }(e, [{
                            key: "uri",
                            get: function() {
                                return !this._uri && this.reluri && (this._uri = Object(H.buildAbsoluteURL)(this.baseuri, this.reluri, {
                                    alwaysNormalize: !0
                                })), this._uri
                            }
                        }]), e
                    }();
                ! function(e) {
                    e.AUDIO = "audio", e.VIDEO = "video"
                }(Q = Q || {});
                var te, re = function() {
                        function e() {
                            var e;
                            this._url = null, this._byteRange = null, this._decryptdata = null, this._elementaryStreams = ((e = {})[Q.AUDIO] = !1, e[Q.VIDEO] = !1, e), this.deltaPTS = 0, this.rawProgramDateTime = null, this.programDateTime = null, this.title = null, this.tagList = [], this.cc = void 0, this.type = void 0, this.relurl = void 0, this.baseurl = void 0, this.duration = void 0, this.start = void 0, this.sn = 0, this.urlId = 0, this.level = 0, this.levelkey = void 0, this.loader = void 0
                        }
                        var t = e.prototype;
                        return t.setByteRange = function(e, t) {
                                var r = e.split("@", 2),
                                    n = [];
                                1 === r.length ? n[0] = t ? t.byteRangeEndOffset : 0 : n[0] = parseInt(r[1]), n[1] = parseInt(r[0]) + n[0], this._byteRange = n
                            }, t.addElementaryStream = function(e) {
                                this._elementaryStreams[e] = !0
                            }, t.hasElementaryStream = function(e) {
                                return !0 === this._elementaryStreams[e]
                            }, t.createInitializationVector = function(e) {
                                for (var t = new Uint8Array(16), r = 12; r < 16; r++) t[r] = e >> 8 * (15 - r) & 255;
                                return t
                            }, t.setDecryptDataFromLevelKey = function(e, t) {
                                var r = e;
                                return e && e.method && e.uri && !e.iv && ((r = new ee(e.baseuri, e.reluri)).method = e.method, r.iv = this.createInitializationVector(t)), r
                            },
                            function(e, t, r) {
                                t && i(e.prototype, t), r && i(e, r)
                            }(e, [{
                                key: "url",
                                get: function() {
                                    return !this._url && this.relurl && (this._url = Object(H.buildAbsoluteURL)(this.baseurl, this.relurl, {
                                        alwaysNormalize: !0
                                    })), this._url
                                },
                                set: function(e) {
                                    this._url = e
                                }
                            }, {
                                key: "byteRange",
                                get: function() {
                                    return this._byteRange ? this._byteRange : []
                                }
                            }, {
                                key: "byteRangeStartOffset",
                                get: function() {
                                    return this.byteRange[0]
                                }
                            }, {
                                key: "byteRangeEndOffset",
                                get: function() {
                                    return this.byteRange[1]
                                }
                            }, {
                                key: "decryptdata",
                                get: function() {
                                    if (!this.levelkey && !this._decryptdata) return null;
                                    if (!this._decryptdata && this.levelkey) {
                                        var e = this.sn;
                                        "number" != typeof e && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && q.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), e = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, e)
                                    }
                                    return this._decryptdata
                                }
                            }, {
                                key: "endProgramDateTime",
                                get: function() {
                                    if (null === this.programDateTime) return null;
                                    if (!Object(Y.isFiniteNumber)(this.programDateTime)) return null;
                                    var e = Object(Y.isFiniteNumber)(this.duration) ? this.duration : 0;
                                    return this.programDateTime + 1e3 * e
                                }
                            }, {
                                key: "encrypted",
                                get: function() {
                                    return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
                                }
                            }]), e
                    }(),
                    ne = function() {
                        function e(e) {
                            this.endCC = 0, this.endSN = 0, this.fragments = [], this.initSegment = null, this.live = !0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = e, this.version = null
                        }
                        return function(e, t, r) {
                            t && a(e.prototype, t), r && a(e, r)
                        }(e, [{
                            key: "hasProgramDateTime",
                            get: function() {
                                return !(!this.fragments[0] || !Object(Y.isFiniteNumber)(this.fragments[0].programDateTime))
                            }
                        }]), e
                    }(),
                    ie = /^(\d+)x(\d+)$/,
                    ae = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
                    oe = function() {
                        function r(e) {
                            for (var t in "string" == typeof e && (e = r.parseAttrList(e)), e) e.hasOwnProperty(t) && (this[t] = e[t])
                        }
                        var e = r.prototype;
                        return e.decimalInteger = function(e) {
                            var t = parseInt(this[e], 10);
                            return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                        }, e.hexadecimalInteger = function(e) {
                            if (this[e]) {
                                var t = (this[e] || "0x").slice(2);
                                t = (1 & t.length ? "0" : "") + t;
                                for (var r = new Uint8Array(t.length / 2), n = 0; n < t.length / 2; n++) r[n] = parseInt(t.slice(2 * n, 2 * n + 2), 16);
                                return r
                            }
                            return null
                        }, e.hexadecimalIntegerAsNumber = function(e) {
                            var t = parseInt(this[e], 16);
                            return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                        }, e.decimalFloatingPoint = function(e) {
                            return parseFloat(this[e])
                        }, e.enumeratedString = function(e) {
                            return this[e]
                        }, e.decimalResolution = function(e) {
                            var t = ie.exec(this[e]);
                            if (null !== t) return {
                                width: parseInt(t[1], 10),
                                height: parseInt(t[2], 10)
                            }
                        }, r.parseAttrList = function(e) {
                            var t, r = {};
                            for (ae.lastIndex = 0; null !== (t = ae.exec(e));) {
                                var n = t[2];
                                0 === n.indexOf('"') && n.lastIndexOf('"') === n.length - 1 && (n = n.slice(1, -1)), r[t[1]] = n
                            }
                            return r
                        }, r
                    }(),
                    se = oe,
                    le = {
                        audio: {
                            a3ds: !0,
                            "ac-3": !0,
                            "ac-4": !0,
                            alac: !0,
                            alaw: !0,
                            dra1: !0,
                            "dts+": !0,
                            "dts-": !0,
                            dtsc: !0,
                            dtse: !0,
                            dtsh: !0,
                            "ec-3": !0,
                            enca: !0,
                            g719: !0,
                            g726: !0,
                            m4ae: !0,
                            mha1: !0,
                            mha2: !0,
                            mhm1: !0,
                            mhm2: !0,
                            mlpa: !0,
                            mp4a: !0,
                            "raw ": !0,
                            Opus: !0,
                            samr: !0,
                            sawb: !0,
                            sawp: !0,
                            sevc: !0,
                            sqcp: !0,
                            ssmv: !0,
                            twos: !0,
                            ulaw: !0
                        },
                        video: {
                            avc1: !0,
                            avc2: !0,
                            avc3: !0,
                            avc4: !0,
                            avcp: !0,
                            drac: !0,
                            dvav: !0,
                            dvhe: !0,
                            encv: !0,
                            hev1: !0,
                            hvc1: !0,
                            mjp2: !0,
                            mp4v: !0,
                            mvc1: !0,
                            mvc2: !0,
                            mvc3: !0,
                            mvc4: !0,
                            resv: !0,
                            rv60: !0,
                            s263: !0,
                            svc1: !0,
                            svc2: !0,
                            "vc-1": !0,
                            vp08: !0,
                            vp09: !0
                        }
                    },
                    ue = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
                    ce = /#EXT-X-MEDIA:(.*)/g,
                    de = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
                    fe = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
                    he = /\.(mp4|m4s|m4v|m4a)$/i,
                    ge = function() {
                        function c() {}
                        return c.findGroup = function(e, t) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                if (n.id === t) return n
                            }
                        }, c.convertAVC1ToAVCOTI = function(e) {
                            var t, r = e.split(".");
                            return 2 < r.length ? (t = r.shift() + ".", t += parseInt(r.shift()).toString(16), t += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : t = e, t
                        }, c.resolve = function(e, t) {
                            return H.buildAbsoluteURL(t, e, {
                                alwaysNormalize: !0
                            })
                        }, c.parseMasterPlaylist = function(e, t) {
                            var r, n = [];
                            for (ue.lastIndex = 0; null != (r = ue.exec(e));) {
                                var i = {},
                                    a = i.attrs = new se(r[1]);
                                i.url = c.resolve(r[2], t);
                                var o = a.decimalResolution("RESOLUTION");
                                o && (i.width = o.width, i.height = o.height), i.bitrate = a.decimalInteger("AVERAGE-BANDWIDTH") || a.decimalInteger("BANDWIDTH"), i.name = a.NAME,
                                    function(r, i) {
                                        ["video", "audio"].forEach(function(n) {
                                            var t = r.filter(function(e) {
                                                return t = e, !!(r = le[n]) && !0 === r[t.slice(0, 4)];
                                                var t, r
                                            });
                                            if (t.length) {
                                                var e = t.filter(function(e) {
                                                    return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
                                                });
                                                i[n + "Codec"] = 0 < e.length ? e[0] : t[0], r = r.filter(function(e) {
                                                    return -1 === t.indexOf(e)
                                                })
                                            }
                                        }), i.unknownCodecs = r
                                    }([].concat((a.CODECS || "").split(/[ ,]+/)), i), i.videoCodec && -1 !== i.videoCodec.indexOf("avc1") && (i.videoCodec = c.convertAVC1ToAVCOTI(i.videoCodec)), n.push(i)
                            }
                            return n
                        }, c.parseMasterPlaylistMedia = function(e, t, r, n) {
                            void 0 === n && (n = []);
                            var i, a = [],
                                o = 0;
                            for (ce.lastIndex = 0; null !== (i = ce.exec(e));) {
                                var s = new se(i[1]);
                                if (s.TYPE === r) {
                                    var l = {
                                        id: o++,
                                        groupId: s["GROUP-ID"],
                                        name: s.NAME || s.LANGUAGE,
                                        type: r,
                                        default: "YES" === s.DEFAULT,
                                        autoselect: "YES" === s.AUTOSELECT,
                                        forced: "YES" === s.FORCED,
                                        lang: s.LANGUAGE
                                    };
                                    if (s.URI && (l.url = c.resolve(s.URI, t)), n.length) {
                                        var u = c.findGroup(n, l.groupId);
                                        l.audioCodec = u ? u.codec : n[0].codec
                                    }
                                    a.push(l)
                                }
                            }
                            return a
                        }, c.parseLevelPlaylist = function(e, t, r, n, i) {
                            var a, o, s, l, u, c = 0,
                                d = 0,
                                f = new ne(t),
                                h = 0,
                                g = null,
                                p = new re,
                                v = null;
                            for (de.lastIndex = 0; null !== (a = de.exec(e));) {
                                var m = a[1];
                                if (m) {
                                    p.duration = parseFloat(m);
                                    var y = (" " + a[2]).slice(1);
                                    p.title = y || null, p.tagList.push(y ? ["INF", m, y] : ["INF", m])
                                } else if (a[3]) {
                                    if (Object(Y.isFiniteNumber)(p.duration)) {
                                        var b = c++;
                                        p.type = n, p.start = d, s && (p.levelkey = s), p.sn = b, p.level = r, p.cc = h, p.urlId = i, p.baseurl = t, p.relurl = (" " + a[3]).slice(1), u = g, (l = p).rawProgramDateTime ? l.programDateTime = Date.parse(l.rawProgramDateTime) : u && u.programDateTime && (l.programDateTime = u.endProgramDateTime), Object(Y.isFiniteNumber)(l.programDateTime) || (l.programDateTime = null, l.rawProgramDateTime = null), f.fragments.push(p), d += (g = p).duration, p = new re
                                    }
                                } else if (a[4]) {
                                    var E = (" " + a[4]).slice(1);
                                    g ? p.setByteRange(E, g) : p.setByteRange(E)
                                } else if (a[5]) p.rawProgramDateTime = (" " + a[5]).slice(1), p.tagList.push(["PROGRAM-DATE-TIME", p.rawProgramDateTime]), null === v && (v = f.fragments.length);
                                else {
                                    if (!(a = a[0].match(fe))) {
                                        q.logger.warn("No matches on slow regex match for level playlist!");
                                        continue
                                    }
                                    for (o = 1; o < a.length && void 0 === a[o]; o++);
                                    var _ = (" " + a[o + 1]).slice(1),
                                        T = (" " + a[o + 2]).slice(1);
                                    switch (a[o]) {
                                        case "#":
                                            p.tagList.push(T ? [_, T] : [_]);
                                            break;
                                        case "PLAYLIST-TYPE":
                                            f.type = _.toUpperCase();
                                            break;
                                        case "MEDIA-SEQUENCE":
                                            c = f.startSN = parseInt(_);
                                            break;
                                        case "TARGETDURATION":
                                            f.targetduration = parseFloat(_);
                                            break;
                                        case "VERSION":
                                            f.version = parseInt(_);
                                            break;
                                        case "EXTM3U":
                                            break;
                                        case "ENDLIST":
                                            f.live = !1;
                                            break;
                                        case "DIS":
                                            h++, p.tagList.push(["DIS"]);
                                            break;
                                        case "DISCONTINUITY-SEQ":
                                            h = parseInt(_);
                                            break;
                                        case "KEY":
                                            var S = _,
                                                w = new se(S),
                                                R = w.enumeratedString("METHOD"),
                                                A = w.URI,
                                                L = w.hexadecimalInteger("IV");
                                            R && (s = new ee(t, A), A && 0 <= ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(R) && (s.method = R, s.key = null, s.iv = L));
                                            break;
                                        case "START":
                                            var k = new se(_),
                                                D = k.decimalFloatingPoint("TIME-OFFSET");
                                            Object(Y.isFiniteNumber)(D) && (f.startTimeOffset = D);
                                            break;
                                        case "MAP":
                                            var I = new se(_);
                                            p.relurl = I.URI, I.BYTERANGE && p.setByteRange(I.BYTERANGE), p.baseurl = t, p.level = r, p.type = n, p.sn = "initSegment", f.initSegment = p, (p = new re).rawProgramDateTime = f.initSegment.rawProgramDateTime;
                                            break;
                                        default:
                                            q.logger.warn("line parsed but not handled: " + a)
                                    }
                                }
                            }
                            return (p = g) && !p.relurl && (f.fragments.pop(), d -= p.duration), f.totalduration = d, f.averagetargetduration = d / f.fragments.length, f.endSN = c - 1, f.startCC = f.fragments[0] ? f.fragments[0].cc : 0, f.endCC = h, !f.initSegment && f.fragments.length && f.fragments.every(function(e) {
                                return he.test(e.relurl)
                            }) && (q.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (p = new re).relurl = f.fragments[0].relurl, p.baseurl = t, p.level = r, p.type = n, p.sn = "initSegment", f.initSegment = p, f.needSidxRanges = !0), v && function(e, t) {
                                for (var r = e[t], n = t - 1; 0 <= n; n--) {
                                    var i = e[n];
                                    i.programDateTime = r.programDateTime - 1e3 * i.duration, r = i
                                }
                            }(f.fragments, v), f
                        }, c
                    }(),
                    pe = window,
                    ve = pe.performance,
                    me = function(r) {
                        function p(e) {
                            var t;
                            return (t = r.call(this, e, z.default.MANIFEST_LOADING, z.default.LEVEL_LOADING, z.default.AUDIO_TRACK_LOADING, z.default.SUBTITLE_TRACK_LOADING) || this).loaders = {}, t
                        }(function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        })(p, r), p.canHaveQualityLevels = function(e) {
                            return e !== V.AUDIO_TRACK && e !== V.SUBTITLE_TRACK
                        }, p.mapContextToLevelType = function(e) {
                            switch (e.type) {
                                case V.AUDIO_TRACK:
                                    return K.AUDIO;
                                case V.SUBTITLE_TRACK:
                                    return K.SUBTITLE;
                                default:
                                    return K.MAIN
                            }
                        }, p.getResponseUrl = function(e, t) {
                            var r = e.url;
                            return void 0 !== r && 0 !== r.indexOf("data:") || (r = t.url), r
                        };
                        var e = p.prototype;
                        return e.createInternalLoader = function(e) {
                            var t = this.hls.config,
                                r = t.pLoader,
                                n = t.loader,
                                i = r || n,
                                a = new i(t);
                            return e.loader = a, this.loaders[e.type] = a
                        }, e.getInternalLoader = function(e) {
                            return this.loaders[e.type]
                        }, e.resetInternalLoader = function(e) {
                            this.loaders[e] && delete this.loaders[e]
                        }, e.destroyInternalLoaders = function() {
                            for (var e in this.loaders) {
                                var t = this.loaders[e];
                                t && t.destroy(), this.resetInternalLoader(e)
                            }
                        }, e.destroy = function() {
                            this.destroyInternalLoaders(), r.prototype.destroy.call(this)
                        }, e.onManifestLoading = function(e) {
                            this.load({
                                url: e.url,
                                type: V.MANIFEST,
                                level: 0,
                                id: null,
                                responseType: "text"
                            })
                        }, e.onLevelLoading = function(e) {
                            this.load({
                                url: e.url,
                                type: V.LEVEL,
                                level: e.level,
                                id: e.id,
                                responseType: "text"
                            })
                        }, e.onAudioTrackLoading = function(e) {
                            this.load({
                                url: e.url,
                                type: V.AUDIO_TRACK,
                                level: null,
                                id: e.id,
                                responseType: "text"
                            })
                        }, e.onSubtitleTrackLoading = function(e) {
                            this.load({
                                url: e.url,
                                type: V.SUBTITLE_TRACK,
                                level: null,
                                id: e.id,
                                responseType: "text"
                            })
                        }, e.load = function(e) {
                            var t = this.hls.config;
                            q.logger.debug("Loading playlist of type " + e.type + ", level: " + e.level + ", id: " + e.id);
                            var r, n, i, a, o = this.getInternalLoader(e);
                            if (o) {
                                var s = o.context;
                                if (s && s.url === e.url) return q.logger.trace("playlist request ongoing"), !1;
                                q.logger.warn("aborting previous loader for type: " + e.type), o.abort()
                            }
                            switch (e.type) {
                                case V.MANIFEST:
                                    r = t.manifestLoadingMaxRetry, n = t.manifestLoadingTimeOut, i = t.manifestLoadingRetryDelay, a = t.manifestLoadingMaxRetryTimeout;
                                    break;
                                case V.LEVEL:
                                    i = a = r = 0, n = t.levelLoadingTimeOut;
                                    break;
                                default:
                                    r = t.levelLoadingMaxRetry, n = t.levelLoadingTimeOut, i = t.levelLoadingRetryDelay, a = t.levelLoadingMaxRetryTimeout
                            }
                            o = this.createInternalLoader(e);
                            var l = {
                                    timeout: n,
                                    maxRetry: r,
                                    retryDelay: i,
                                    maxRetryDelay: a
                                },
                                u = {
                                    onSuccess: this.loadsuccess.bind(this),
                                    onError: this.loaderror.bind(this),
                                    onTimeout: this.loadtimeout.bind(this)
                                };
                            return q.logger.debug("Calling internal loader delegate for URL: " + e.url), o.load(e, l, u), !0
                        }, e.loadsuccess = function(e, t, r, n) {
                            if (void 0 === n && (n = null), r.isSidxRequest) return this._handleSidxRequest(e, r), void this._handlePlaylistLoaded(e, t, r, n);
                            if (this.resetInternalLoader(r.type), "string" != typeof e.data) throw new Error('expected responseType of "text" for PlaylistLoader');
                            var i = e.data;
                            t.tload = ve.now(), 0 === i.indexOf("#EXTM3U") ? 0 < i.indexOf("#EXTINF:") || 0 < i.indexOf("#EXT-X-TARGETDURATION:") ? this._handleTrackOrLevelPlaylist(e, t, r, n) : this._handleMasterPlaylist(e, t, r, n) : this._handleManifestParsingError(e, r, "no EXTM3U delimiter", n)
                        }, e.loaderror = function(e, t, r) {
                            void 0 === r && (r = null), this._handleNetworkError(t, r, !1, e)
                        }, e.loadtimeout = function(e, t, r) {
                            void 0 === r && (r = null), this._handleNetworkError(t, r, !0)
                        }, e._handleMasterPlaylist = function(e, t, r, n) {
                            var i = this.hls,
                                a = e.data,
                                o = p.getResponseUrl(e, r),
                                s = ge.parseMasterPlaylist(a, o);
                            if (s.length) {
                                var l = s.map(function(e) {
                                        return {
                                            id: e.attrs.AUDIO,
                                            codec: e.audioCodec
                                        }
                                    }),
                                    u = ge.parseMasterPlaylistMedia(a, o, "AUDIO", l),
                                    c = ge.parseMasterPlaylistMedia(a, o, "SUBTITLES");
                                if (u.length) {
                                    var d = !1;
                                    u.forEach(function(e) {
                                        e.url || (d = !0)
                                    }), !1 === d && s[0].audioCodec && !s[0].attrs.AUDIO && (q.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), u.unshift({
                                        type: "main",
                                        name: "main",
                                        default: !1,
                                        autoselect: !1,
                                        forced: !1,
                                        id: -1
                                    }))
                                }
                                i.trigger(z.default.MANIFEST_LOADED, {
                                    levels: s,
                                    audioTracks: u,
                                    subtitles: c,
                                    url: o,
                                    stats: t,
                                    networkDetails: n
                                })
                            } else this._handleManifestParsingError(e, r, "no level found in manifest", n)
                        }, e._handleTrackOrLevelPlaylist = function(e, t, r, n) {
                            var i = this.hls,
                                a = r.id,
                                o = r.level,
                                s = r.type,
                                l = p.getResponseUrl(e, r),
                                u = Object(Y.isFiniteNumber)(a) ? a : 0,
                                c = Object(Y.isFiniteNumber)(o) ? o : u,
                                d = p.mapContextToLevelType(r),
                                f = ge.parseLevelPlaylist(e.data, l, c, d, u);
                            if (f.tload = t.tload, s === V.MANIFEST) {
                                var h = {
                                    url: l,
                                    details: f
                                };
                                i.trigger(z.default.MANIFEST_LOADED, {
                                    levels: [h],
                                    audioTracks: [],
                                    url: l,
                                    stats: t,
                                    networkDetails: n
                                })
                            }
                            if (t.tparsed = ve.now(), f.needSidxRanges) {
                                var g = f.initSegment.url;
                                this.load({
                                    url: g,
                                    isSidxRequest: !0,
                                    type: s,
                                    level: o,
                                    levelDetails: f,
                                    id: a,
                                    rangeStart: 0,
                                    rangeEnd: 2048,
                                    responseType: "arraybuffer"
                                })
                            } else r.levelDetails = f, this._handlePlaylistLoaded(e, t, r, n)
                        }, e._handleSidxRequest = function(e, t) {
                            if ("string" == typeof e.data) throw new Error("sidx request must be made with responseType of array buffer");
                            var r = $.default.parseSegmentIndex(new Uint8Array(e.data));
                            if (r) {
                                var n = r.references,
                                    i = t.levelDetails;
                                n.forEach(function(e, t) {
                                    var r = e.info;
                                    if (i) {
                                        var n = i.fragments[t];
                                        0 === n.byteRange.length && n.setByteRange(String(1 + r.end - r.start) + "@" + String(r.start))
                                    }
                                }), i && i.initSegment.setByteRange(String(r.moovEndOffset) + "@0")
                            }
                        }, e._handleManifestParsingError = function(e, t, r, n) {
                            this.hls.trigger(z.default.ERROR, {
                                type: W.ErrorTypes.NETWORK_ERROR,
                                details: W.ErrorDetails.MANIFEST_PARSING_ERROR,
                                fatal: !0,
                                url: e.url,
                                reason: r,
                                networkDetails: n
                            })
                        }, e._handleNetworkError = function(e, t, r, n) {
                            void 0 === r && (r = !1), void 0 === n && (n = null), q.logger.info("A network error occured while loading a " + e.type + "-type playlist");
                            var i, a, o = this.getInternalLoader(e);
                            switch (e.type) {
                                case V.MANIFEST:
                                    i = r ? W.ErrorDetails.MANIFEST_LOAD_TIMEOUT : W.ErrorDetails.MANIFEST_LOAD_ERROR, a = !0;
                                    break;
                                case V.LEVEL:
                                    i = r ? W.ErrorDetails.LEVEL_LOAD_TIMEOUT : W.ErrorDetails.LEVEL_LOAD_ERROR, a = !1;
                                    break;
                                case V.AUDIO_TRACK:
                                    i = r ? W.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : W.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, a = !1;
                                    break;
                                default:
                                    a = !1
                            }
                            o && (o.abort(), this.resetInternalLoader(e.type));
                            var s = {
                                type: W.ErrorTypes.NETWORK_ERROR,
                                details: i,
                                fatal: a,
                                url: e.url,
                                loader: o,
                                context: e,
                                networkDetails: t
                            };
                            n && (s.response = n), this.hls.trigger(z.default.ERROR, s)
                        }, e._handlePlaylistLoaded = function(e, t, r, n) {
                            var i = r.type,
                                a = r.level,
                                o = r.id,
                                s = r.levelDetails;
                            if (s && s.targetduration)
                                if (p.canHaveQualityLevels(r.type)) this.hls.trigger(z.default.LEVEL_LOADED, {
                                    details: s,
                                    level: a || 0,
                                    id: o || 0,
                                    stats: t,
                                    networkDetails: n
                                });
                                else switch (i) {
                                    case V.AUDIO_TRACK:
                                        this.hls.trigger(z.default.AUDIO_TRACK_LOADED, {
                                            details: s,
                                            id: o,
                                            stats: t,
                                            networkDetails: n
                                        });
                                        break;
                                    case V.SUBTITLE_TRACK:
                                        this.hls.trigger(z.default.SUBTITLE_TRACK_LOADED, {
                                            details: s,
                                            id: o,
                                            stats: t,
                                            networkDetails: n
                                        })
                                } else this._handleManifestParsingError(e, r, "invalid target duration", n)
                        }, p
                    }(J),
                    ye = me,
                    be = function(n) {
                        function e(e) {
                            var t;
                            return (t = n.call(this, e, z.default.FRAG_LOADING) || this).loaders = {}, t
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, n);
                        var t = e.prototype;
                        return t.destroy = function() {
                            var e = this.loaders;
                            for (var t in e) {
                                var r = e[t];
                                r && r.destroy()
                            }
                            this.loaders = {}, n.prototype.destroy.call(this)
                        }, t.onFragLoading = function(e) {
                            var t = e.frag,
                                r = t.type,
                                n = this.loaders,
                                i = this.hls.config,
                                a = i.fLoader,
                                o = i.loader;
                            t.loaded = 0;
                            var s, l, u, c = n[r];
                            c && (q.logger.warn("abort previous fragment loader for type: " + r), c.abort()), c = n[r] = t.loader = new(i.fLoader ? a : o)(i), s = {
                                url: t.url,
                                frag: t,
                                responseType: "arraybuffer",
                                progressData: !1
                            };
                            var d = t.byteRangeStartOffset,
                                f = t.byteRangeEndOffset;
                            Object(Y.isFiniteNumber)(d) && Object(Y.isFiniteNumber)(f) && (s.rangeStart = d, s.rangeEnd = f), l = {
                                timeout: i.fragLoadingTimeOut,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: i.fragLoadingMaxRetryTimeout
                            }, u = {
                                onSuccess: this.loadsuccess.bind(this),
                                onError: this.loaderror.bind(this),
                                onTimeout: this.loadtimeout.bind(this),
                                onProgress: this.loadprogress.bind(this)
                            }, c.load(s, l, u)
                        }, t.loadsuccess = function(e, t, r, n) {
                            void 0 === n && (n = null);
                            var i = e.data,
                                a = r.frag;
                            a.loader = void 0, this.loaders[a.type] = void 0, this.hls.trigger(z.default.FRAG_LOADED, {
                                payload: i,
                                frag: a,
                                stats: t,
                                networkDetails: n
                            })
                        }, t.loaderror = function(e, t, r) {
                            void 0 === r && (r = null);
                            var n = t.frag,
                                i = n.loader;
                            i && i.abort(), this.loaders[n.type] = void 0, this.hls.trigger(z.default.ERROR, {
                                type: W.ErrorTypes.NETWORK_ERROR,
                                details: W.ErrorDetails.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: t.frag,
                                response: e,
                                networkDetails: r
                            })
                        }, t.loadtimeout = function(e, t, r) {
                            void 0 === r && (r = null);
                            var n = t.frag,
                                i = n.loader;
                            i && i.abort(), this.loaders[n.type] = void 0, this.hls.trigger(z.default.ERROR, {
                                type: W.ErrorTypes.NETWORK_ERROR,
                                details: W.ErrorDetails.FRAG_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: t.frag,
                                networkDetails: r
                            })
                        }, t.loadprogress = function(e, t, r, n) {
                            void 0 === n && (n = null);
                            var i = t.frag;
                            i.loaded = e.loaded, this.hls.trigger(z.default.FRAG_LOAD_PROGRESS, {
                                frag: i,
                                stats: e,
                                networkDetails: n
                            })
                        }, e
                    }(J),
                    Ee = be,
                    _e = function(r) {
                        function e(e) {
                            var t;
                            return (t = r.call(this, e, z.default.KEY_LOADING) || this).loaders = {}, t.decryptkey = null, t.decrypturl = null, t
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, r);
                        var t = e.prototype;
                        return t.destroy = function() {
                            for (var e in this.loaders) {
                                var t = this.loaders[e];
                                t && t.destroy()
                            }
                            this.loaders = {}, r.prototype.destroy.call(this)
                        }, t.onKeyLoading = function(e) {
                            var t = e.frag,
                                r = t.type,
                                n = this.loaders[r];
                            if (t.decryptdata) {
                                var i = t.decryptdata.uri;
                                if (i !== this.decrypturl || null === this.decryptkey) {
                                    var a = this.hls.config;
                                    if (n && (q.logger.warn("abort previous key loader for type:" + r), n.abort()), !i) return void q.logger.warn("key uri is falsy");
                                    t.loader = this.loaders[r] = new a.loader(a), this.decrypturl = i, this.decryptkey = null;
                                    var o = {
                                            url: i,
                                            frag: t,
                                            responseType: "arraybuffer"
                                        },
                                        s = {
                                            timeout: a.fragLoadingTimeOut,
                                            maxRetry: 0,
                                            retryDelay: a.fragLoadingRetryDelay,
                                            maxRetryDelay: a.fragLoadingMaxRetryTimeout
                                        },
                                        l = {
                                            onSuccess: this.loadsuccess.bind(this),
                                            onError: this.loaderror.bind(this),
                                            onTimeout: this.loadtimeout.bind(this)
                                        };
                                    t.loader.load(o, s, l)
                                } else this.decryptkey && (t.decryptdata.key = this.decryptkey, this.hls.trigger(z.default.KEY_LOADED, {
                                    frag: t
                                }))
                            } else q.logger.warn("Missing decryption data on fragment in onKeyLoading")
                        }, t.loadsuccess = function(e, t, r) {
                            var n = r.frag;
                            n.decryptdata ? (this.decryptkey = n.decryptdata.key = new Uint8Array(e.data), n.loader = void 0, delete this.loaders[n.type], this.hls.trigger(z.default.KEY_LOADED, {
                                frag: n
                            })) : q.logger.error("after key load, decryptdata unset")
                        }, t.loaderror = function(e, t) {
                            var r = t.frag,
                                n = r.loader;
                            n && n.abort(), delete this.loaders[r.type], this.hls.trigger(z.default.ERROR, {
                                type: W.ErrorTypes.NETWORK_ERROR,
                                details: W.ErrorDetails.KEY_LOAD_ERROR,
                                fatal: !1,
                                frag: r,
                                response: e
                            })
                        }, t.loadtimeout = function(e, t) {
                            var r = t.frag,
                                n = r.loader;
                            n && n.abort(), delete this.loaders[r.type], this.hls.trigger(z.default.ERROR, {
                                type: W.ErrorTypes.NETWORK_ERROR,
                                details: W.ErrorDetails.KEY_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: r
                            })
                        }, e
                    }(J),
                    Te = _e,
                    Se = {
                        NOT_LOADED: "NOT_LOADED",
                        APPENDING: "APPENDING",
                        PARTIAL: "PARTIAL",
                        OK: "OK"
                    },
                    we = function(r) {
                        function e(e) {
                            var t;
                            return (t = r.call(this, e, z.default.BUFFER_APPENDED, z.default.FRAG_BUFFERED, z.default.FRAG_LOADED) || this).bufferPadding = .2, t.fragments = Object.create(null), t.timeRanges = Object.create(null), t.config = e.config, t
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, r);
                        var t = e.prototype;
                        return t.destroy = function() {
                            this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.config = null, J.prototype.destroy.call(this), r.prototype.destroy.call(this)
                        }, t.getBufferedFrag = function(n, i) {
                            var a = this.fragments,
                                e = Object.keys(a).filter(function(e) {
                                    var t = a[e];
                                    if (t.body.type !== i) return !1;
                                    if (!t.buffered) return !1;
                                    var r = t.body;
                                    return r.startPTS <= n && n <= r.endPTS
                                });
                            if (0 === e.length) return null;
                            var t = e.pop();
                            return a[t].body
                        }, t.detectEvictedFragments = function(i, a) {
                            var o, s, l = this;
                            Object.keys(this.fragments).forEach(function(e) {
                                var t = l.fragments[e];
                                if (!0 === t.buffered) {
                                    var r = t.range[i];
                                    if (r) {
                                        o = r.time;
                                        for (var n = 0; n < o.length; n++)
                                            if (s = o[n], !1 === l.isTimeBuffered(s.startPTS, s.endPTS, a)) {
                                                l.removeFragment(t.body);
                                                break
                                            }
                                    }
                                }
                            })
                        }, t.detectPartialFragments = function(r) {
                            var n = this,
                                e = this.getFragmentKey(r),
                                i = this.fragments[e];
                            i && (i.buffered = !0, Object.keys(this.timeRanges).forEach(function(e) {
                                if (r.hasElementaryStream(e)) {
                                    var t = n.timeRanges[e];
                                    i.range[e] = n.getBufferedTimes(r.startPTS, r.endPTS, t)
                                }
                            }))
                        }, t.getBufferedTimes = function(e, t, r) {
                            for (var n, i, a = [], o = !1, s = 0; s < r.length; s++) {
                                if (n = r.start(s) - this.bufferPadding, i = r.end(s) + this.bufferPadding, n <= e && t <= i) {
                                    a.push({
                                        startPTS: Math.max(e, r.start(s)),
                                        endPTS: Math.min(t, r.end(s))
                                    });
                                    break
                                }
                                if (e < i && n < t) a.push({
                                    startPTS: Math.max(e, r.start(s)),
                                    endPTS: Math.min(t, r.end(s))
                                }), o = !0;
                                else if (t <= n) break
                            }
                            return {
                                time: a,
                                partial: o
                            }
                        }, t.getFragmentKey = function(e) {
                            return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
                        }, t.getPartialFragment = function(r) {
                            var n, i, a, o = this,
                                s = null,
                                l = 0;
                            return Object.keys(this.fragments).forEach(function(e) {
                                var t = o.fragments[e];
                                o.isPartial(t) && (i = t.body.startPTS - o.bufferPadding, a = t.body.endPTS + o.bufferPadding, i <= r && r <= a && (n = Math.min(r - i, a - r), l <= n && (s = t.body, l = n)))
                            }), s
                        }, t.getState = function(e) {
                            var t = this.getFragmentKey(e),
                                r = this.fragments[t],
                                n = Se.NOT_LOADED;
                            return void 0 !== r && (n = r.buffered ? !0 === this.isPartial(r) ? Se.PARTIAL : Se.OK : Se.APPENDING), n
                        }, t.isPartial = function(e) {
                            return !0 === e.buffered && (void 0 !== e.range.video && !0 === e.range.video.partial || void 0 !== e.range.audio && !0 === e.range.audio.partial)
                        }, t.isTimeBuffered = function(e, t, r) {
                            for (var n, i, a = 0; a < r.length; a++) {
                                if (n = r.start(a) - this.bufferPadding, i = r.end(a) + this.bufferPadding, n <= e && t <= i) return !0;
                                if (t <= n) return !1
                            }
                            return !1
                        }, t.onFragLoaded = function(e) {
                            var t = e.frag;
                            Object(Y.isFiniteNumber)(t.sn) && !t.bitrateTest && (this.fragments[this.getFragmentKey(t)] = {
                                body: t,
                                range: Object.create(null),
                                buffered: !1
                            })
                        }, t.onBufferAppended = function(e) {
                            var r = this;
                            this.timeRanges = e.timeRanges, Object.keys(this.timeRanges).forEach(function(e) {
                                var t = r.timeRanges[e];
                                r.detectEvictedFragments(e, t)
                            })
                        }, t.onFragBuffered = function(e) {
                            this.detectPartialFragments(e.frag)
                        }, t.hasFragment = function(e) {
                            var t = this.getFragmentKey(e);
                            return void 0 !== this.fragments[t]
                        }, t.removeFragment = function(e) {
                            var t = this.getFragmentKey(e);
                            delete this.fragments[t]
                        }, t.removeAllFragments = function() {
                            this.fragments = Object.create(null)
                        }, e
                    }(J),
                    Re = {
                        search: function(e, t) {
                            for (var r = 0, n = e.length - 1, i = null, a = null; r <= n;) {
                                i = (r + n) / 2 | 0, a = e[i];
                                var o = t(a);
                                if (o > 0) r = i + 1;
                                else {
                                    if (!(o < 0)) return a;
                                    n = i - 1
                                }
                            }
                            return null
                        }
                    },
                    Ae = function() {
                        function e() {}
                        return e.isBuffered = function(e, t) {
                            try {
                                if (e)
                                    for (var r = e.buffered, n = 0; n < r.length; n++)
                                        if (t >= r.start(n) && t <= r.end(n)) return !0
                            } catch (e) {}
                            return !1
                        }, e.bufferInfo = function(e, t, r) {
                            try {
                                if (e) {
                                    var n, i = e.buffered,
                                        a = [];
                                    for (n = 0; n < i.length; n++) a.push({
                                        start: i.start(n),
                                        end: i.end(n)
                                    });
                                    return this.bufferedInfo(a, t, r)
                                }
                            } catch (e) {}
                            return {
                                len: 0,
                                start: t,
                                end: t,
                                nextStart: void 0
                            }
                        }, e.bufferedInfo = function(e, t, r) {
                            e.sort(function(e, t) {
                                var r = e.start - t.start;
                                return r || t.end - e.end
                            });
                            var n = [];
                            if (r)
                                for (var i = 0; i < e.length; i++) {
                                    var a = n.length;
                                    if (a) {
                                        var o = n[a - 1].end;
                                        e[i].start - o < r ? e[i].end > o && (n[a - 1].end = e[i].end) : n.push(e[i])
                                    } else n.push(e[i])
                                } else n = e;
                            for (var s, l = 0, u = t, c = t, d = 0; d < n.length; d++) {
                                var f = n[d].start,
                                    h = n[d].end;
                                if (f <= t + r && t < h) u = f, l = (c = h) - t;
                                else if (t + r < f) {
                                    s = f;
                                    break
                                }
                            }
                            return {
                                len: l,
                                start: u,
                                end: c,
                                nextStart: s
                            }
                        }, e
                    }(),
                    Le = r("./node_modules/eventemitter3/index.js"),
                    ke = r("./node_modules/webworkify-webpack/index.js"),
                    De = r("./src/demux/demuxer-inline.js"),
                    Ie = r("./src/utils/get-self-scope.js"),
                    Ce = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }
                        return function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(t, e), t.prototype.trigger = function(e) {
                            for (var t = arguments.length, r = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                            this.emit.apply(this, [e, e].concat(r))
                        }, t
                    }(Le.EventEmitter),
                    Pe = Object(Ie.getSelfScope)(),
                    xe = o() || {
                        isTypeSupported: function() {
                            return !1
                        }
                    },
                    Oe = function() {
                        function e(r, e) {
                            var n = this;
                            this.hls = r, this.id = e;
                            var t = this.observer = new Ce,
                                i = r.config,
                                a = function(e, t) {
                                    (t = t || {}).frag = n.frag, t.id = n.id, r.trigger(e, t)
                                };
                            t.on(z.default.FRAG_DECRYPTED, a), t.on(z.default.FRAG_PARSING_INIT_SEGMENT, a), t.on(z.default.FRAG_PARSING_DATA, a), t.on(z.default.FRAG_PARSED, a), t.on(z.default.ERROR, a), t.on(z.default.FRAG_PARSING_METADATA, a), t.on(z.default.FRAG_PARSING_USERDATA, a), t.on(z.default.INIT_PTS_FOUND, a);
                            var o = {
                                    mp4: xe.isTypeSupported("video/mp4"),
                                    mpeg: xe.isTypeSupported("audio/mpeg"),
                                    mp3: xe.isTypeSupported('audio/mp4; codecs="mp3"')
                                },
                                s = navigator.vendor;
                            if (i.enableWorker && "undefined" != typeof Worker) {
                                var l;
                                q.logger.log("demuxing in webworker");
                                try {
                                    l = this.w = ke("./src/demux/demuxer-worker.js"), this.onwmsg = this.onWorkerMessage.bind(this), l.addEventListener("message", this.onwmsg), l.onerror = function(e) {
                                        r.trigger(z.default.ERROR, {
                                            type: W.ErrorTypes.OTHER_ERROR,
                                            details: W.ErrorDetails.INTERNAL_EXCEPTION,
                                            fatal: !0,
                                            event: "demuxerWorker",
                                            err: {
                                                message: e.message + " (" + e.filename + ":" + e.lineno + ")"
                                            }
                                        })
                                    }, l.postMessage({
                                        cmd: "init",
                                        typeSupported: o,
                                        vendor: s,
                                        id: e,
                                        config: JSON.stringify(i)
                                    })
                                } catch (r) {
                                    q.logger.warn("Error in worker:", r), q.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"), l && Pe.URL.revokeObjectURL(l.objectURL), this.demuxer = new De.default(t, o, i, s), this.w = void 0
                                }
                            } else this.demuxer = new De.default(t, o, i, s)
                        }
                        var t = e.prototype;
                        return t.destroy = function() {
                            var e = this.w;
                            if (e) e.removeEventListener("message", this.onwmsg), e.terminate(), this.w = null;
                            else {
                                var t = this.demuxer;
                                t && (t.destroy(), this.demuxer = null)
                            }
                            var r = this.observer;
                            r && (r.removeAllListeners(), this.observer = null)
                        }, t.push = function(e, t, r, n, i, a, o, s) {
                            var l = this.w,
                                u = Object(Y.isFiniteNumber)(i.startPTS) ? i.startPTS : i.start,
                                c = i.decryptdata,
                                d = this.frag,
                                f = !(d && i.cc === d.cc),
                                h = !(d && i.level === d.level),
                                g = d && i.sn === d.sn + 1,
                                p = !h && g;
                            if (f && q.logger.log(this.id + ":discontinuity detected"), h && q.logger.log(this.id + ":switch detected"), this.frag = i, l) l.postMessage({
                                cmd: "demux",
                                data: e,
                                decryptdata: c,
                                initSegment: t,
                                audioCodec: r,
                                videoCodec: n,
                                timeOffset: u,
                                discontinuity: f,
                                trackSwitch: h,
                                contiguous: p,
                                duration: a,
                                accurateTimeOffset: o,
                                defaultInitPTS: s
                            }, e instanceof ArrayBuffer ? [e] : []);
                            else {
                                var v = this.demuxer;
                                v && v.push(e, c, t, r, n, u, f, h, p, a, o, s)
                            }
                        }, t.onWorkerMessage = function(e) {
                            var t = e.data,
                                r = this.hls;
                            switch (t.event) {
                                case "init":
                                    Pe.URL.revokeObjectURL(this.w.objectURL);
                                    break;
                                case z.default.FRAG_PARSING_DATA:
                                    t.data.data1 = new Uint8Array(t.data1), t.data2 && (t.data.data2 = new Uint8Array(t.data2));
                                default:
                                    t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, r.trigger(t.event, t.data)
                            }
                        }, e
                    }(),
                    Ne = Oe,
                    Me = {
                        toString: function(e) {
                            for (var t = "", r = e.length, n = 0; n < r; n++) t += "[" + e.start(n).toFixed(3) + "," + e.end(n).toFixed(3) + "]";
                            return t
                        }
                    },
                    Fe = function() {
                        function e(e, t, r, n) {
                            this.config = e, this.media = t, this.fragmentTracker = r, this.hls = n, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1
                        }
                        var t = e.prototype;
                        return t.poll = function(e) {
                            var t = this.config,
                                r = this.media,
                                n = this.stalled,
                                i = r.currentTime,
                                a = r.seeking,
                                o = this.seeking && !a,
                                s = !this.seeking && a;
                            if (this.seeking = a, i === e) {
                                if ((s || o) && (this.stalled = null), !r.paused && !r.ended && 0 !== r.playbackRate && r.buffered.length) {
                                    var l = Ae.bufferInfo(r, i, 0),
                                        u = 0 < l.len,
                                        c = l.nextStart || 0;
                                    if (u || c) {
                                        if (a) {
                                            var d = 2 < l.len,
                                                f = !c || 2 < c - i;
                                            if (d || f) return;
                                            this.moved = !1
                                        }
                                        if (!this.moved && this.stalled) {
                                            var h = Math.max(c, l.start || 0) - i;
                                            if (0 < h && h <= 2) return void this._trySkipBufferHole(null)
                                        }
                                        var g = self.performance.now();
                                        if (null === n) return void(this.stalled = g);
                                        var p = g - n;
                                        !a && 250 <= p && this._reportStall(l.len);
                                        var v = Ae.bufferInfo(r, i, t.maxBufferHole);
                                        this._tryFixBufferStall(v, p)
                                    }
                                }
                            } else if (this.moved = !0, null !== n) {
                                if (this.stallReported) {
                                    var m = self.performance.now() - n;
                                    q.logger.warn("playback not stuck anymore @" + i + ", after " + Math.round(m) + "ms"), this.stallReported = !1
                                }
                                this.stalled = null, this.nudgeRetry = 0
                            }
                        }, t._tryFixBufferStall = function(e, t) {
                            var r = this.config,
                                n = this.fragmentTracker,
                                i = this.media,
                                a = i.currentTime,
                                o = n.getPartialFragment(a);
                            o && this._trySkipBufferHole(o) || e.len > r.maxBufferHole && t > 1e3 * r.highBufferWatchdogPeriod && (q.logger.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
                        }, t._reportStall = function(e) {
                            var t = this.hls,
                                r = this.media;
                            this.stallReported || (this.stallReported = !0, q.logger.warn("Playback stalling at @" + r.currentTime + " due to low buffer"), t.trigger(z.default.ERROR, {
                                type: W.ErrorTypes.MEDIA_ERROR,
                                details: W.ErrorDetails.BUFFER_STALLED_ERROR,
                                fatal: !1,
                                buffer: e
                            }))
                        }, t._trySkipBufferHole = function(e) {
                            for (var t = this.config, r = this.hls, n = this.media, i = n.currentTime, a = 0, o = 0; o < n.buffered.length; o++) {
                                var s = n.buffered.start(o);
                                if (i + t.maxBufferHole >= a && i < s) {
                                    var l = Math.max(s + .05, n.currentTime + .1);
                                    return q.logger.warn("skipping hole, adjusting currentTime from " + i + " to " + l), this.moved = !0, this.stalled = null, n.currentTime = l, e && r.trigger(z.default.ERROR, {
                                        type: W.ErrorTypes.MEDIA_ERROR,
                                        details: W.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                                        fatal: !1,
                                        reason: "fragment loaded with buffer holes, seeking from " + i + " to " + l,
                                        frag: e
                                    }), l
                                }
                                a = n.buffered.end(o)
                            }
                            return 0
                        }, t._tryNudgeBuffer = function() {
                            var e = this.config,
                                t = this.hls,
                                r = this.media,
                                n = r.currentTime,
                                i = (this.nudgeRetry || 0) + 1;
                            if ((this.nudgeRetry = i) < e.nudgeMaxRetry) {
                                var a = n + i * e.nudgeOffset;
                                q.logger.warn("Nudging 'currentTime' from " + n + " to " + a), r.currentTime = a, t.trigger(z.default.ERROR, {
                                    type: W.ErrorTypes.MEDIA_ERROR,
                                    details: W.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                                    fatal: !1
                                })
                            } else q.logger.error("Playhead still not moving while enough data buffered @" + n + " after " + e.nudgeMaxRetry + " nudges"), t.trigger(z.default.ERROR, {
                                type: W.ErrorTypes.MEDIA_ERROR,
                                details: W.ErrorDetails.BUFFER_STALLED_ERROR,
                                fatal: !0
                            })
                        }, e
                    }(),
                    Ue = function(a) {
                        function e(e) {
                            for (var t, r = arguments.length, n = new Array(1 < r ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                            return (t = a.call.apply(a, [this, e].concat(n)) || this)._boundTick = void 0, t._tickTimer = null, t._tickInterval = null, t._tickCallCount = 0, t._boundTick = t.tick.bind(function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(t)), t
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, a);
                        var t = e.prototype;
                        return t.onHandlerDestroying = function() {
                            this.clearNextTick(), this.clearInterval()
                        }, t.hasInterval = function() {
                            return !!this._tickInterval
                        }, t.hasNextTick = function() {
                            return !!this._tickTimer
                        }, t.setInterval = function(e) {
                            return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, e), !0)
                        }, t.clearInterval = function() {
                            return !!this._tickInterval && (self.clearInterval(this._tickInterval), !(this._tickInterval = null))
                        }, t.clearNextTick = function() {
                            return !!this._tickTimer && (self.clearTimeout(this._tickTimer), !(this._tickTimer = null))
                        }, t.tick = function() {
                            1 == ++this._tickCallCount && (this.doTick(), 1 < this._tickCallCount && (this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)), this._tickCallCount = 0)
                        }, t.doTick = function() {}, e
                    }(J),
                    Be = {
                        STOPPED: "STOPPED",
                        STARTING: "STARTING",
                        IDLE: "IDLE",
                        PAUSED: "PAUSED",
                        KEY_LOADING: "KEY_LOADING",
                        FRAG_LOADING: "FRAG_LOADING",
                        FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
                        WAITING_TRACK: "WAITING_TRACK",
                        PARSING: "PARSING",
                        PARSED: "PARSED",
                        BUFFER_FLUSHING: "BUFFER_FLUSHING",
                        ENDED: "ENDED",
                        ERROR: "ERROR",
                        WAITING_INIT_PTS: "WAITING_INIT_PTS",
                        WAITING_LEVEL: "WAITING_LEVEL"
                    },
                    Ge = function(e) {
                        function t() {
                            return e.apply(this, arguments) || this
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(t, e);
                        var r = t.prototype;
                        return r.doTick = function() {}, r.startLoad = function() {}, r.stopLoad = function() {
                            var e = this.fragCurrent;
                            e && (e.loader && e.loader.abort(), this.fragmentTracker.removeFragment(e)), this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = Be.STOPPED
                        }, r._streamEnded = function(e, t) {
                            var r = this.fragCurrent,
                                n = this.fragmentTracker;
                            if (t.live || !r || r.backtracked || r.sn !== t.endSN || e.nextStart) return !1;
                            var i = n.getState(r);
                            return i === Se.PARTIAL || i === Se.OK
                        }, r.onMediaSeeking = function() {
                            var e = this.config,
                                t = this.media,
                                r = this.mediaBuffer,
                                n = this.state,
                                i = t ? t.currentTime : null,
                                a = Ae.bufferInfo(r || t, i, this.config.maxBufferHole);
                            if (Object(Y.isFiniteNumber)(i) && q.logger.log("media seeking to " + i.toFixed(3)), n === Be.FRAG_LOADING) {
                                var o = this.fragCurrent;
                                if (0 === a.len && o) {
                                    var s = e.maxFragLookUpTolerance,
                                        l = o.start - s,
                                        u = o.start + o.duration + s;
                                    i < l || u < i ? (o.loader && (q.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), o.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = Be.IDLE) : q.logger.log("seeking outside of buffer but within currently loaded fragment range")
                                }
                            } else n === Be.ENDED && (0 === a.len && (this.fragPrevious = null, this.fragCurrent = null), this.state = Be.IDLE);
                            t && (this.lastCurrentTime = i), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = i), this.tick()
                        }, r.onMediaEnded = function() {
                            this.startPosition = this.lastCurrentTime = 0
                        }, r.onHandlerDestroying = function() {
                            this.stopLoad(), e.prototype.onHandlerDestroying.call(this)
                        }, r.onHandlerDestroyed = function() {
                            this.state = Be.STOPPED, this.fragmentTracker = null
                        }, r.computeLivePosition = function(e, t) {
                            var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;
                            return e + Math.max(0, t.totalduration - r)
                        }, t
                    }(Ue),
                    je = function(n) {
                        function e(e, t) {
                            var r;
                            return (r = n.call(this, e, z.default.MEDIA_ATTACHED, z.default.MEDIA_DETACHING, z.default.MANIFEST_LOADING, z.default.MANIFEST_PARSED, z.default.LEVEL_LOADED, z.default.KEY_LOADED, z.default.FRAG_LOADED, z.default.FRAG_LOAD_EMERGENCY_ABORTED, z.default.FRAG_PARSING_INIT_SEGMENT, z.default.FRAG_PARSING_DATA, z.default.FRAG_PARSED, z.default.ERROR, z.default.AUDIO_TRACK_SWITCHING, z.default.AUDIO_TRACK_SWITCHED, z.default.BUFFER_CREATED, z.default.BUFFER_APPENDED, z.default.BUFFER_FLUSHED) || this).fragmentTracker = t, r.config = e.config, r.audioCodecSwap = !1, r._state = Be.STOPPED, r.stallReported = !1, r.gapController = null, r.altAudio = !1, r
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, n);
                        var t = e.prototype;
                        return t.startLoad = function(e) {
                                if (this.levels) {
                                    var t = this.lastCurrentTime,
                                        r = this.hls;
                                    if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                                        var n = r.startLevel; - 1 === n && (n = 0, this.bitrateTest = !0), this.level = r.nextLoadLevel = n, this.loadedmetadata = !1
                                    }
                                    0 < t && -1 === e && (q.logger.log("override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t), this.state = Be.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
                                } else this.forceStartLoad = !0, this.state = Be.STOPPED
                            }, t.stopLoad = function() {
                                this.forceStartLoad = !1, n.prototype.stopLoad.call(this)
                            }, t.doTick = function() {
                                switch (this.state) {
                                    case Be.BUFFER_FLUSHING:
                                        this.fragLoadError = 0;
                                        break;
                                    case Be.IDLE:
                                        this._doTickIdle();
                                        break;
                                    case Be.WAITING_LEVEL:
                                        var e = this.levels[this.level];
                                        e && e.details && (this.state = Be.IDLE);
                                        break;
                                    case Be.FRAG_LOADING_WAITING_RETRY:
                                        var t = window.performance.now(),
                                            r = this.retryDate;
                                        (!r || r <= t || this.media && this.media.seeking) && (q.logger.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = Be.IDLE)
                                }
                                this._checkBuffer(), this._checkFragmentChanged()
                            }, t._doTickIdle = function() {
                                var e = this.hls,
                                    t = e.config,
                                    r = this.media;
                                if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && t.startFragPrefetch)) {
                                    var n;
                                    n = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
                                    var i = e.nextLoadLevel,
                                        a = this.levels[i];
                                    if (a) {
                                        var o, s = a.bitrate;
                                        o = s ? Math.max(8 * t.maxBufferSize / s, t.maxBufferLength) : t.maxBufferLength, o = Math.min(o, t.maxMaxBufferLength);
                                        var l = Ae.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, n, t.maxBufferHole),
                                            u = l.len;
                                        if (!(o <= u)) {
                                            q.logger.trace("buffer length of " + u.toFixed(3) + " is below max of " + o.toFixed(3) + ". checking for more payload ..."), this.level = e.nextLoadLevel = i;
                                            var c = a.details;
                                            if (!c || c.live && this.levelLastLoaded !== i) return void(this.state = Be.WAITING_LEVEL);
                                            if (this._streamEnded(l, c)) {
                                                var d = {};
                                                return this.altAudio && (d.type = "video"), this.hls.trigger(z.default.BUFFER_EOS, d), void(this.state = Be.ENDED)
                                            }
                                            this._fetchPayloadOrEos(n, l, c)
                                        }
                                    }
                                }
                            }, t._fetchPayloadOrEos = function(e, t, r) {
                                var n = this.fragPrevious,
                                    i = this.level,
                                    a = r.fragments,
                                    o = a.length;
                                if (0 !== o) {
                                    var s, l = a[0].start,
                                        u = a[o - 1].start + a[o - 1].duration,
                                        c = t.end;
                                    if (r.initSegment && !r.initSegment.data) s = r.initSegment;
                                    else if (r.live) {
                                        var d = this.config.initialLiveManifestSize;
                                        if (o < d) return void q.logger.warn("Can not start playback of a level, reason: not enough fragments " + o + " < " + d);
                                        if (null === (s = this._ensureFragmentAtLivePoint(r, c, l, u, n, a, o))) return
                                    } else c < l && (s = a[0]);
                                    (s = s || this._findFragment(l, n, o, a, c, u, r)) && (s.encrypted ? (q.logger.log("Loading key for " + s.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + i), this._loadKey(s)) : (q.logger.log("Loading " + s.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + i + ", currentTime:" + e.toFixed(3) + ",bufferEnd:" + c.toFixed(3)), this._loadFragment(s)))
                                }
                            }, t._ensureFragmentAtLivePoint = function(e, t, r, n, i, a, o) {
                                var s, l = this.hls.config,
                                    u = this.media,
                                    c = void 0 !== l.liveMaxLatencyDuration ? l.liveMaxLatencyDuration : l.liveMaxLatencyDurationCount * e.targetduration;
                                if (t < Math.max(r - l.maxFragLookUpTolerance, n - c)) {
                                    var d = this.liveSyncPosition = this.computeLivePosition(r, e);
                                    q.logger.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + d.toFixed(3)), t = d, u && !u.paused && u.readyState && u.duration > d && (u.currentTime = d), this.nextLoadPosition = d
                                }
                                if (e.PTSKnown && n < t && u && u.readyState) return null;
                                if (this.startFragRequested && !e.PTSKnown) {
                                    if (i)
                                        if (e.hasProgramDateTime) q.logger.log("live playlist, switching playlist, load frag with same PDT: " + i.programDateTime), s = m(a, i.endProgramDateTime, l.maxFragLookUpTolerance);
                                        else {
                                            var f = i.sn + 1;
                                            if (f >= e.startSN && f <= e.endSN) {
                                                var h = a[f - e.startSN];
                                                i.cc === h.cc && (s = h, q.logger.log("live playlist, switching playlist, load frag with next SN: " + s.sn))
                                            }
                                            s || (s = Re.search(a, function(e) {
                                                return i.cc - e.cc
                                            })) && q.logger.log("live playlist, switching playlist, load frag with same CC: " + s.sn)
                                        } s || (s = a[Math.min(o - 1, Math.round(o / 2))], q.logger.log("live playlist, switching playlist, unknown, load middle frag : " + s.sn))
                                }
                                return s
                            }, t._findFragment = function(e, t, r, n, i, a, o) {
                                var s, l = this.hls.config;
                                if (s = i < a ? y(t, n, i, i > a - l.maxFragLookUpTolerance ? 0 : l.maxFragLookUpTolerance) : n[r - 1]) {
                                    var u = s.sn - o.startSN,
                                        c = t && s.level === t.level,
                                        d = n[u - 1],
                                        f = n[1 + u];
                                    if (t && s.sn === t.sn)
                                        if (c && !s.backtracked)
                                            if (s.sn < o.endSN) {
                                                var h = t.deltaPTS;
                                                h && h > l.maxBufferHole && t.dropped && u ? (s = d, q.logger.warn("Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this")) : (s = f, q.logger.log("Re-loading fragment with SN: " + s.sn))
                                            } else s = null;
                                    else s.backtracked && (f && f.backtracked ? (q.logger.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + s.sn + ". Loading fragment " + f.sn), s = f) : (q.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), s.dropped = 0, d ? (s = d).backtracked = !0 : u && (s = null)))
                                }
                                return s
                            }, t._loadKey = function(e) {
                                this.state = Be.KEY_LOADING, this.hls.trigger(z.default.KEY_LOADING, {
                                    frag: e
                                })
                            }, t._loadFragment = function(e) {
                                var t = this.fragmentTracker.getState(e);
                                "initSegment" !== (this.fragCurrent = e).sn && (this.startFragRequested = !0), Object(Y.isFiniteNumber)(e.sn) && !e.bitrateTest && (this.nextLoadPosition = e.start + e.duration), e.backtracked || t === Se.NOT_LOADED || t === Se.PARTIAL ? (e.autoLevel = this.hls.autoLevelEnabled, e.bitrateTest = this.bitrateTest, this.hls.trigger(z.default.FRAG_LOADING, {
                                    frag: e
                                }), this.demuxer || (this.demuxer = new Ne(this.hls, "main")), this.state = Be.FRAG_LOADING) : t === Se.APPENDING && this._reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e)
                            }, t.getBufferedFrag = function(e) {
                                return this.fragmentTracker.getBufferedFrag(e, K.MAIN)
                            }, t.followingBufferedFrag = function(e) {
                                return e ? this.getBufferedFrag(e.endPTS + .5) : null
                            }, t._checkFragmentChanged = function() {
                                var e, t, r = this.media;
                                if (r && r.readyState && !1 === r.seeking && ((t = r.currentTime) > this.lastCurrentTime && (this.lastCurrentTime = t), Ae.isBuffered(r, t) ? e = this.getBufferedFrag(t) : Ae.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)), e)) {
                                    var n = e;
                                    if (n !== this.fragPlaying) {
                                        this.hls.trigger(z.default.FRAG_CHANGED, {
                                            frag: n
                                        });
                                        var i = n.level;
                                        this.fragPlaying && this.fragPlaying.level === i || this.hls.trigger(z.default.LEVEL_SWITCHED, {
                                            level: i
                                        }), this.fragPlaying = n
                                    }
                                }
                            }, t.immediateLevelSwitch = function() {
                                if (q.logger.log("immediateLevelSwitch"), !this.immediateSwitch) {
                                    this.immediateSwitch = !0;
                                    var e, t = this.media;
                                    t ? (e = t.paused, t.pause()) : e = !0, this.previouslyPaused = e
                                }
                                var r = this.fragCurrent;
                                r && r.loader && r.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
                            }, t.immediateLevelSwitchEnd = function() {
                                var e = this.media;
                                e && e.buffered.length && (this.immediateSwitch = !1, Ae.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play())
                            }, t.nextLevelSwitch = function() {
                                var e = this.media;
                                if (e && e.readyState) {
                                    var t, r, n;
                                    if ((r = this.getBufferedFrag(e.currentTime)) && 1 < r.startPTS && this.flushMainBuffer(0, r.startPTS - 1), e.paused) t = 0;
                                    else {
                                        var i = this.hls.nextLoadLevel,
                                            a = this.levels[i],
                                            o = this.fragLastKbps;
                                        t = o && this.fragCurrent ? this.fragCurrent.duration * a.bitrate / (1e3 * o) + 1 : 0
                                    }
                                    if ((n = this.getBufferedFrag(e.currentTime + t)) && (n = this.followingBufferedFrag(n))) {
                                        var s = this.fragCurrent;
                                        s && s.loader && s.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(n.maxStartPTS, Number.POSITIVE_INFINITY)
                                    }
                                }
                            }, t.flushMainBuffer = function(e, t) {
                                this.state = Be.BUFFER_FLUSHING;
                                var r = {
                                    startOffset: e,
                                    endOffset: t
                                };
                                this.altAudio && (r.type = "video"), this.hls.trigger(z.default.BUFFER_FLUSHING, r)
                            }, t.onMediaAttached = function(e) {
                                var t = this.media = this.mediaBuffer = e.media;
                                this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("seeked", this.onvseeked), t.addEventListener("ended", this.onvended);
                                var r = this.config;
                                this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition), this.gapController = new Fe(r, t, this.fragmentTracker, this.hls)
                            }, t.onMediaDetaching = function() {
                                var e = this.media;
                                e && e.ended && (q.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                                var t = this.levels;
                                t && t.forEach(function(e) {
                                    e.details && e.details.fragments.forEach(function(e) {
                                        e.backtracked = void 0
                                    })
                                }), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.fragmentTracker.removeAllFragments(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
                            }, t.onMediaSeeked = function() {
                                var e = this.media,
                                    t = e ? e.currentTime : void 0;
                                Object(Y.isFiniteNumber)(t) && q.logger.log("media seeked to " + t.toFixed(3)), this.tick()
                            }, t.onManifestLoading = function() {
                                q.logger.log("trigger BUFFER_RESET"), this.hls.trigger(z.default.BUFFER_RESET), this.fragmentTracker.removeAllFragments(), this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
                            }, t.onManifestParsed = function(e) {
                                var t, r = !1,
                                    n = !1;
                                e.levels.forEach(function(e) {
                                    (t = e.audioCodec) && (-1 !== t.indexOf("mp4a.40.2") && (r = !0), -1 !== t.indexOf("mp4a.40.5") && (n = !0))
                                }), this.audioCodecSwitch = r && n, this.audioCodecSwitch && q.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.altAudio = e.altAudio, this.levels = e.levels, this.startFragRequested = !1;
                                var i = this.config;
                                (i.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(i.startPosition)
                            }, t.onLevelLoaded = function(e) {
                                var t = e.details,
                                    r = e.level,
                                    n = this.levels[this.levelLastLoaded],
                                    i = this.levels[r],
                                    a = t.totalduration,
                                    o = 0;
                                if (q.logger.log("level " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + a), t.live) {
                                    var s = i.details;
                                    s && 0 < t.fragments.length ? (d(s, t), o = t.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(o, s), t.PTSKnown && Object(Y.isFiniteNumber)(o) ? q.logger.log("live playlist sliding:" + o.toFixed(3)) : (q.logger.log("live playlist - outdated PTS, unknown sliding"), v(this.fragPrevious, n, t))) : (q.logger.log("live playlist - first load, unknown sliding"), t.PTSKnown = !1, v(this.fragPrevious, n, t))
                                } else t.PTSKnown = !1;
                                if (i.details = t, this.levelLastLoaded = r, this.hls.trigger(z.default.LEVEL_UPDATED, {
                                        details: t,
                                        level: r
                                    }), !1 === this.startFragRequested) {
                                    if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                                        var l = t.startTimeOffset;
                                        Object(Y.isFiniteNumber)(l) ? (l < 0 && (q.logger.log("negative start time offset " + l + ", count from end of last fragment"), l = o + a + l), q.logger.log("start time offset found in playlist, adjust startPosition to " + l), this.startPosition = l) : t.live ? (this.startPosition = this.computeLivePosition(o, t), q.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0, this.lastCurrentTime = this.startPosition
                                    }
                                    this.nextLoadPosition = this.startPosition
                                }
                                this.state === Be.WAITING_LEVEL && (this.state = Be.IDLE), this.tick()
                            }, t.onKeyLoaded = function() {
                                this.state === Be.KEY_LOADING && (this.state = Be.IDLE, this.tick())
                            }, t.onFragLoaded = function(e) {
                                var t = this.fragCurrent,
                                    r = this.hls,
                                    n = this.levels,
                                    i = this.media,
                                    a = e.frag;
                                if (this.state === Be.FRAG_LOADING && t && "main" === a.type && a.level === t.level && a.sn === t.sn) {
                                    var o = e.stats,
                                        s = n[t.level],
                                        l = s.details;
                                    if (this.bitrateTest = !1, this.stats = o, q.logger.log("Loaded " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level), a.bitrateTest && r.nextLoadLevel) this.state = Be.IDLE, this.startFragRequested = !1, o.tparsed = o.tbuffered = window.performance.now(), r.trigger(z.default.FRAG_BUFFERED, {
                                        stats: o,
                                        frag: t,
                                        id: "main"
                                    }), this.tick();
                                    else if ("initSegment" === a.sn) this.state = Be.IDLE, o.tparsed = o.tbuffered = window.performance.now(), l.initSegment.data = e.payload, r.trigger(z.default.FRAG_BUFFERED, {
                                        stats: o,
                                        frag: t,
                                        id: "main"
                                    }), this.tick();
                                    else {
                                        q.logger.log("Parsing " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level + ", cc " + t.cc), this.state = Be.PARSING, this.pendingBuffering = !0, this.appended = !1, a.bitrateTest && (a.bitrateTest = !1, this.fragmentTracker.onFragLoaded({
                                            frag: a
                                        }));
                                        var u = !(i && i.seeking) && (l.PTSKnown || !l.live),
                                            c = l.initSegment ? l.initSegment.data : [],
                                            d = this._getAudioCodec(s),
                                            f = this.demuxer = this.demuxer || new Ne(this.hls, "main");
                                        f.push(e.payload, c, d, s.videoCodec, t, l.totalduration, u)
                                    }
                                }
                                this.fragLoadError = 0
                            }, t.onFragParsingInitSegment = function(e) {
                                var t = this.fragCurrent,
                                    r = e.frag;
                                if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === Be.PARSING) {
                                    var n, i, a = e.tracks;
                                    if (a.audio && this.altAudio && delete a.audio, i = a.audio) {
                                        var o = this.levels[this.level].audioCodec,
                                            s = navigator.userAgent.toLowerCase();
                                        o && this.audioCodecSwap && (q.logger.log("swapping playlist audio codec"), o = -1 !== o.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== i.metadata.channelCount && -1 === s.indexOf("firefox") && (o = "mp4a.40.5"), -1 !== s.indexOf("android") && "audio/mpeg" !== i.container && (o = "mp4a.40.2", q.logger.log("Android: force audio codec to " + o)), i.levelCodec = o, i.id = e.id
                                    }
                                    for (n in (i = a.video) && (i.levelCodec = this.levels[this.level].videoCodec, i.id = e.id), this.hls.trigger(z.default.BUFFER_CODECS, a), a) {
                                        i = a[n], q.logger.log("main track:" + n + ",container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
                                        var l = i.initSegment;
                                        l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(z.default.BUFFER_APPENDING, {
                                            type: n,
                                            data: l,
                                            parent: "main",
                                            content: "initSegment"
                                        }))
                                    }
                                    this.tick()
                                }
                            }, t.onFragParsingData = function(t) {
                                var r = this,
                                    e = this.fragCurrent,
                                    n = t.frag;
                                if (e && "main" === t.id && n.sn === e.sn && n.level === e.level && ("audio" !== t.type || !this.altAudio) && this.state === Be.PARSING) {
                                    var i = this.levels[this.level],
                                        a = e;
                                    if (Object(Y.isFiniteNumber)(t.endPTS) || (t.endPTS = t.startPTS + e.duration, t.endDTS = t.startDTS + e.duration), !0 === t.hasAudio && a.addElementaryStream(Q.AUDIO), !0 === t.hasVideo && a.addElementaryStream(Q.VIDEO), q.logger.log("Parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb + ",dropped:" + (t.dropped || 0)), "video" === t.type)
                                        if (a.dropped = t.dropped, a.dropped)
                                            if (a.backtracked) q.logger.warn("Already backtracked on this fragment, appending with the gap", a.sn);
                                            else {
                                                var o = i.details;
                                                if (!o || a.sn !== o.startSN) return q.logger.warn("missing video frame(s), backtracking fragment", a.sn), this.fragmentTracker.removeFragment(a), a.backtracked = !0, this.nextLoadPosition = t.startPTS, this.state = Be.IDLE, this.fragPrevious = a, void this.tick();
                                                q.logger.warn("missing video frame(s) on first frag, appending with gap", a.sn)
                                            }
                                    else a.backtracked = !1;
                                    var s = f(i.details, a, t.startPTS, t.endPTS, t.startDTS, t.endDTS),
                                        l = this.hls;
                                    l.trigger(z.default.LEVEL_PTS_UPDATED, {
                                        details: i.details,
                                        level: this.level,
                                        drift: s,
                                        type: t.type,
                                        start: t.startPTS,
                                        end: t.endPTS
                                    }), [t.data1, t.data2].forEach(function(e) {
                                        e && e.length && r.state === Be.PARSING && (r.appended = !0, r.pendingBuffering = !0, l.trigger(z.default.BUFFER_APPENDING, {
                                            type: t.type,
                                            data: e,
                                            parent: "main",
                                            content: "data"
                                        }))
                                    }), this.tick()
                                }
                            }, t.onFragParsed = function(e) {
                                var t = this.fragCurrent,
                                    r = e.frag;
                                t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === Be.PARSING && (this.stats.tparsed = window.performance.now(), this.state = Be.PARSED, this._checkAppendedParsed())
                            }, t.onAudioTrackSwitching = function(e) {
                                var t = !!e.url,
                                    r = e.id;
                                if (!t) {
                                    if (this.mediaBuffer !== this.media) {
                                        q.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                                        var n = this.fragCurrent;
                                        n.loader && (q.logger.log("switching to main audio track, cancel main fragment load"), n.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = Be.IDLE
                                    }
                                    var i = this.hls;
                                    i.trigger(z.default.BUFFER_FLUSHING, {
                                        startOffset: 0,
                                        endOffset: Number.POSITIVE_INFINITY,
                                        type: "audio"
                                    }), i.trigger(z.default.AUDIO_TRACK_SWITCHED, {
                                        id: r
                                    }), this.altAudio = !1
                                }
                            }, t.onAudioTrackSwitched = function(e) {
                                var t = e.id,
                                    r = !!this.hls.audioTracks[t].url;
                                if (r) {
                                    var n = this.videoBuffer;
                                    n && this.mediaBuffer !== n && (q.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n)
                                }
                                this.altAudio = r, this.tick()
                            }, t.onBufferCreated = function(e) {
                                var t, r, n = e.tracks,
                                    i = !1;
                                for (var a in n) {
                                    var o = n[a];
                                    "main" === o.id ? (t = o, "video" === (r = a) && (this.videoBuffer = n[a].buffer)) : i = !0
                                }
                                i && t ? (q.logger.log("alternate track found, use " + r + ".buffered to schedule main fragment loading"), this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media
                            }, t.onBufferAppended = function(e) {
                                if ("main" === e.parent) {
                                    var t = this.state;
                                    t !== Be.PARSING && t !== Be.PARSED || (this.pendingBuffering = 0 < e.pending, this._checkAppendedParsed())
                                }
                            }, t._checkAppendedParsed = function() {
                                if (!(this.state !== Be.PARSED || this.appended && this.pendingBuffering)) {
                                    var e = this.fragCurrent;
                                    if (e) {
                                        var t = this.mediaBuffer ? this.mediaBuffer : this.media;
                                        q.logger.log("main buffered : " + Me.toString(t.buffered)), this.fragPrevious = e;
                                        var r = this.stats;
                                        r.tbuffered = window.performance.now(), this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)), this.hls.trigger(z.default.FRAG_BUFFERED, {
                                            stats: r,
                                            frag: e,
                                            id: "main"
                                        }), this.state = Be.IDLE
                                    }
                                    this.tick()
                                }
                            }, t.onError = function(e) {
                                var t = e.frag || this.fragCurrent;
                                if (!t || "main" === t.type) {
                                    var r = !!this.media && Ae.isBuffered(this.media, this.media.currentTime) && Ae.isBuffered(this.media, this.media.currentTime + .5);
                                    switch (e.details) {
                                        case W.ErrorDetails.FRAG_LOAD_ERROR:
                                        case W.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        case W.ErrorDetails.KEY_LOAD_ERROR:
                                        case W.ErrorDetails.KEY_LOAD_TIMEOUT:
                                            if (!e.fatal)
                                                if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                                    var n = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                                    q.logger.warn("mediaController: frag loading failed, retry in " + n + " ms"), this.retryDate = window.performance.now() + n, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = Be.FRAG_LOADING_WAITING_RETRY
                                                } else q.logger.error("mediaController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.state = Be.ERROR;
                                            break;
                                        case W.ErrorDetails.LEVEL_LOAD_ERROR:
                                        case W.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                            this.state !== Be.ERROR && (e.fatal ? (this.state = Be.ERROR, q.logger.warn("streamController: " + e.details + ",switch to " + this.state + " state ...")) : e.levelRetry || this.state !== Be.WAITING_LEVEL || (this.state = Be.IDLE));
                                            break;
                                        case W.ErrorDetails.BUFFER_FULL_ERROR:
                                            "main" !== e.parent || this.state !== Be.PARSING && this.state !== Be.PARSED || (r ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = Be.IDLE) : (q.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
                                    }
                                }
                            }, t._reduceMaxBufferLength = function(e) {
                                var t = this.config;
                                return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, q.logger.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"), !0)
                            }, t._checkBuffer = function() {
                                var e = this.media;
                                if (e && 0 !== e.readyState) {
                                    var t = this.mediaBuffer ? this.mediaBuffer : e,
                                        r = t.buffered;
                                    !this.loadedmetadata && r.length ? (this.loadedmetadata = !0, this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, r)
                                }
                            }, t.onFragLoadEmergencyAborted = function() {
                                this.state = Be.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick()
                            }, t.onBufferFlushed = function() {
                                var e = this.mediaBuffer ? this.mediaBuffer : this.media;
                                e && this.fragmentTracker.detectEvictedFragments(Q.VIDEO, e.buffered), this.state = Be.IDLE, this.fragPrevious = null
                            }, t.swapAudioCodec = function() {
                                this.audioCodecSwap = !this.audioCodecSwap
                            }, t._seekToStartPos = function() {
                                var e = this.media,
                                    t = e.currentTime,
                                    r = e.seeking ? t : this.startPosition;
                                t !== r && 0 <= r && (q.logger.log("target start position not buffered, seek to buffered.start(0) " + r + " from current time " + t + " "), e.currentTime = r)
                            }, t._getAudioCodec = function(e) {
                                var t = this.config.defaultAudioCodec || e.audioCodec;
                                return this.audioCodecSwap && (q.logger.log("swapping playlist audio codec"), t = t && (-1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), t
                            },
                            function(e, t, r) {
                                t && E(e.prototype, t), r && E(e, r)
                            }(e, [{
                                key: "state",
                                set: function(e) {
                                    if (this.state !== e) {
                                        var t = this.state;
                                        this._state = e, q.logger.log("main stream-controller: " + t + "->" + e), this.hls.trigger(z.default.STREAM_STATE_TRANSITION, {
                                            previousState: t,
                                            nextState: e
                                        })
                                    }
                                },
                                get: function() {
                                    return this._state
                                }
                            }, {
                                key: "currentLevel",
                                get: function() {
                                    var e = this.media;
                                    if (e) {
                                        var t = this.getBufferedFrag(e.currentTime);
                                        if (t) return t.level
                                    }
                                    return -1
                                }
                            }, {
                                key: "nextBufferedFrag",
                                get: function() {
                                    var e = this.media;
                                    return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null
                                }
                            }, {
                                key: "nextLevel",
                                get: function() {
                                    var e = this.nextBufferedFrag;
                                    return e ? e.level : -1
                                }
                            }, {
                                key: "liveSyncPosition",
                                get: function() {
                                    return this._liveSyncPosition
                                },
                                set: function(e) {
                                    this._liveSyncPosition = e
                                }
                            }]), e
                    }(Ge),
                    Ve = je,
                    Ke = window,
                    He = (Ke.performance, function(r) {
                        function e(e) {
                            var t;
                            return (t = r.call(this, e, z.default.MANIFEST_LOADED, z.default.LEVEL_LOADED, z.default.AUDIO_TRACK_SWITCHED, z.default.FRAG_LOADED, z.default.ERROR) || this).canload = !1, t.currentLevelIndex = null, t.manualLevelIndex = -1, t.timer = null, te = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), t
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, r);
                        var t = e.prototype;
                        return t.onHandlerDestroying = function() {
                                this.clearTimer(), this.manualLevelIndex = -1
                            }, t.clearTimer = function() {
                                null !== this.timer && (clearTimeout(this.timer), this.timer = null)
                            }, t.startLoad = function() {
                                var e = this._levels;
                                this.canload = !0, this.levelRetryCount = 0, e && e.forEach(function(e) {
                                    e.loadError = 0;
                                    var t = e.details;
                                    t && t.live && (e.details = void 0)
                                }), null !== this.timer && this.loadLevel()
                            }, t.stopLoad = function() {
                                this.canload = !1
                            }, t.onManifestLoaded = function(e) {
                                var t, r = [],
                                    n = [],
                                    i = {},
                                    a = null,
                                    o = !1,
                                    s = !1;
                                if (e.levels.forEach(function(e) {
                                        var t = e.attrs;
                                        e.loadError = 0, e.fragmentError = !1, o = o || !!e.videoCodec, s = s || !!e.audioCodec, te && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0), (a = i[e.bitrate]) ? a.url.push(e.url) : (e.url = [e.url], e.urlId = 0, i[e.bitrate] = e, r.push(e)), t && (t.AUDIO && (s = !0, c(a || e, "audio", t.AUDIO)), t.SUBTITLES && c(a || e, "text", t.SUBTITLES))
                                    }), o && s && (r = r.filter(function(e) {
                                        return !!e.videoCodec
                                    })), r = r.filter(function(e) {
                                        var t = e.audioCodec,
                                            r = e.videoCodec;
                                        return (!t || u(t, "audio")) && (!r || u(r, "video"))
                                    }), e.audioTracks && (n = e.audioTracks.filter(function(e) {
                                        return !e.audioCodec || u(e.audioCodec, "audio")
                                    })).forEach(function(e, t) {
                                        e.id = t
                                    }), 0 < r.length) {
                                    t = r[0].bitrate, r.sort(function(e, t) {
                                        return e.bitrate - t.bitrate
                                    }), this._levels = r;
                                    for (var l = 0; l < r.length; l++)
                                        if (r[l].bitrate === t) {
                                            this._firstLevel = l, q.logger.log("manifest loaded," + r.length + " level(s) found, first bitrate:" + t);
                                            break
                                        } this.hls.trigger(z.default.MANIFEST_PARSED, {
                                        levels: r,
                                        audioTracks: n,
                                        firstLevel: this._firstLevel,
                                        stats: e.stats,
                                        audio: s,
                                        video: o,
                                        altAudio: n.some(function(e) {
                                            return !!e.url
                                        })
                                    })
                                } else this.hls.trigger(z.default.ERROR, {
                                    type: W.ErrorTypes.MEDIA_ERROR,
                                    details: W.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                                    fatal: !0,
                                    url: this.hls.url,
                                    reason: "no level with compatible codecs found in manifest"
                                })
                            }, t.setLevelInternal = function(e) {
                                var t = this._levels,
                                    r = this.hls;
                                if (0 <= e && e < t.length) {
                                    if (this.clearTimer(), this.currentLevelIndex !== e) {
                                        q.logger.log("switching to level " + e), this.currentLevelIndex = e;
                                        var n = t[e];
                                        n.level = e, r.trigger(z.default.LEVEL_SWITCHING, n)
                                    }
                                    var i = t[e],
                                        a = i.details;
                                    if (!a || a.live) {
                                        var o = i.urlId;
                                        r.trigger(z.default.LEVEL_LOADING, {
                                            url: i.url[o],
                                            level: e,
                                            id: o
                                        })
                                    }
                                } else r.trigger(z.default.ERROR, {
                                    type: W.ErrorTypes.OTHER_ERROR,
                                    details: W.ErrorDetails.LEVEL_SWITCH_ERROR,
                                    level: e,
                                    fatal: !1,
                                    reason: "invalid level idx"
                                })
                            }, t.onError = function(e) {
                                if (e.fatal) e.type === W.ErrorTypes.NETWORK_ERROR && this.clearTimer();
                                else {
                                    var t, r = !1,
                                        n = !1;
                                    switch (e.details) {
                                        case W.ErrorDetails.FRAG_LOAD_ERROR:
                                        case W.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        case W.ErrorDetails.KEY_LOAD_ERROR:
                                        case W.ErrorDetails.KEY_LOAD_TIMEOUT:
                                            t = e.frag.level, n = !0;
                                            break;
                                        case W.ErrorDetails.LEVEL_LOAD_ERROR:
                                        case W.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                                            t = e.context.level, r = !0;
                                            break;
                                        case W.ErrorDetails.REMUX_ALLOC_ERROR:
                                            t = e.level, r = !0
                                    }
                                    void 0 !== t && this.recoverLevel(e, t, r, n)
                                }
                            }, t.recoverLevel = function(e, t, r, n) {
                                var i, a, o, s = this,
                                    l = this.hls.config,
                                    u = e.details,
                                    c = this._levels[t];
                                if (c.loadError++, c.fragmentError = n, r) {
                                    if (!(this.levelRetryCount + 1 <= l.levelLoadingMaxRetry)) return q.logger.error("level controller, cannot recover from " + u + " error"), this.currentLevelIndex = null, this.clearTimer(), void(e.fatal = !0);
                                    a = Math.min(Math.pow(2, this.levelRetryCount) * l.levelLoadingRetryDelay, l.levelLoadingMaxRetryTimeout), this.timer = setTimeout(function() {
                                        return s.loadLevel()
                                    }, a), e.levelRetry = !0, this.levelRetryCount++, q.logger.warn("level controller, " + u + ", retry in " + a + " ms, current retry count is " + this.levelRetryCount)
                                }(r || n) && (1 < (i = c.url.length) && c.loadError < i ? (c.urlId = (c.urlId + 1) % i, c.details = void 0, q.logger.warn("level controller, " + u + " for level " + t + ": switching to redundant URL-id " + c.urlId)) : -1 === this.manualLevelIndex ? (o = 0 === t ? this._levels.length - 1 : t - 1, q.logger.warn("level controller, " + u + ": switch to " + o), this.hls.nextAutoLevel = this.currentLevelIndex = o) : n && (q.logger.warn("level controller, " + u + ": reload a fragment"), this.currentLevelIndex = null))
                            }, t.onFragLoaded = function(e) {
                                var t = e.frag;
                                if (void 0 !== t && "main" === t.type) {
                                    var r = this._levels[t.level];
                                    void 0 !== r && (r.fragmentError = !1, r.loadError = 0, this.levelRetryCount = 0)
                                }
                            }, t.onLevelLoaded = function(e) {
                                var t = this,
                                    r = e.level,
                                    n = e.details;
                                if (r === this.currentLevelIndex) {
                                    var i = this._levels[r];
                                    if (i.fragmentError || (i.loadError = 0, this.levelRetryCount = 0), n.live) {
                                        var a = l(i.details, n, e.stats.trequest);
                                        q.logger.log("live playlist, reload in " + Math.round(a) + " ms"), this.timer = setTimeout(function() {
                                            return t.loadLevel()
                                        }, a)
                                    } else this.clearTimer()
                                }
                            }, t.onAudioTrackSwitched = function(e) {
                                var t = this.hls.audioTracks[e.id].groupId,
                                    r = this.hls.levels[this.currentLevelIndex];
                                if (r && r.audioGroupIds) {
                                    for (var n = -1, i = 0; i < r.audioGroupIds.length; i++)
                                        if (r.audioGroupIds[i] === t) {
                                            n = i;
                                            break
                                        } n !== r.urlId && (r.urlId = n, this.startLoad())
                                }
                            }, t.loadLevel = function() {
                                if (q.logger.debug("call to loadLevel"), null !== this.currentLevelIndex && this.canload) {
                                    var e = this._levels[this.currentLevelIndex];
                                    if ("object" == typeof e && 0 < e.url.length) {
                                        var t = this.currentLevelIndex,
                                            r = e.urlId,
                                            n = e.url[r];
                                        q.logger.log("Attempt loading level index " + t + " with URL-id " + r), this.hls.trigger(z.default.LEVEL_LOADING, {
                                            url: n,
                                            level: t,
                                            id: r
                                        })
                                    }
                                }
                            },
                            function(e, t, r) {
                                t && _(e.prototype, t), r && _(e, r)
                            }(e, [{
                                key: "levels",
                                get: function() {
                                    return this._levels
                                }
                            }, {
                                key: "level",
                                get: function() {
                                    return this.currentLevelIndex
                                },
                                set: function(e) {
                                    var t = this._levels;
                                    t && (e = Math.min(e, t.length - 1), this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
                                }
                            }, {
                                key: "manualLevel",
                                get: function() {
                                    return this.manualLevelIndex
                                },
                                set: function(e) {
                                    this.manualLevelIndex = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e)
                                }
                            }, {
                                key: "firstLevel",
                                get: function() {
                                    return this._firstLevel
                                },
                                set: function(e) {
                                    this._firstLevel = e
                                }
                            }, {
                                key: "startLevel",
                                get: function() {
                                    if (void 0 !== this._startLevel) return this._startLevel;
                                    var e = this.hls.config.startLevel;
                                    return void 0 !== e ? e : this._firstLevel
                                },
                                set: function(e) {
                                    this._startLevel = e
                                }
                            }, {
                                key: "nextLoadLevel",
                                get: function() {
                                    return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                                },
                                set: function(e) {
                                    this.level = e, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
                                }
                            }]), e
                    }(J)),
                    We = r("./src/demux/id3.js"),
                    Ye = function(r) {
                        function e(e) {
                            var t;
                            return (t = r.call(this, e, z.default.MEDIA_ATTACHED, z.default.MEDIA_DETACHING, z.default.FRAG_PARSING_METADATA, z.default.LIVE_BACK_BUFFER_REACHED) || this).id3Track = void 0, t.media = void 0, t
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, r);
                        var t = e.prototype;
                        return t.destroy = function() {
                            J.prototype.destroy.call(this)
                        }, t.onMediaAttached = function(e) {
                            this.media = e.media, this.media
                        }, t.onMediaDetaching = function() {
                            S(this.id3Track), this.id3Track = void 0, this.media = void 0
                        }, t.getID3Track = function(e) {
                            for (var t = 0; t < e.length; t++) {
                                var r = e[t];
                                if ("metadata" === r.kind && "id3" === r.label) return T(r, this.media), r
                            }
                            return this.media.addTextTrack("metadata", "id3")
                        }, t.onFragParsingMetadata = function(e) {
                            var t = e.frag,
                                r = e.samples;
                            this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
                            for (var n = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, i = 0; i < r.length; i++) {
                                var a = We.default.getID3Frames(r[i].data);
                                if (a) {
                                    var o = r[i].pts,
                                        s = i < r.length - 1 ? r[i + 1].pts : t.endPTS;
                                    o === s ? s += 1e-4 : s < o && (q.logger.warn("detected an id3 sample with endTime < startTime, adjusting endTime to (startTime + 0.25)"), s = o + .25);
                                    for (var l = 0; l < a.length; l++) {
                                        var u = a[l];
                                        if (!We.default.isTimeStampFrame(u)) {
                                            var c = new n(o, s, "");
                                            c.value = u, this.id3Track.addCue(c)
                                        }
                                    }
                                }
                            }
                        }, t.onLiveBackBufferReached = function(e) {
                            var t = e.bufferEnd,
                                r = this.id3Track;
                            if (r && r.cues && r.cues.length) {
                                var n = function(e, t) {
                                    if (t < e[0].endTime) return e[0];
                                    if (t > e[e.length - 1].endTime) return e[e.length - 1];
                                    for (var r = 0, n = e.length - 1; r <= n;) {
                                        var i = Math.floor((n + r) / 2);
                                        if (t < e[i].endTime) n = i - 1;
                                        else {
                                            if (!(t > e[i].endTime)) return e[i];
                                            r = i + 1
                                        }
                                    }
                                    return e[r].endTime - t < t - e[n].endTime ? e[r] : e[n]
                                }(r.cues, t);
                                if (n)
                                    for (; r.cues[0] !== n;) r.removeCue(r.cues[0])
                            }
                        }, e
                    }(J),
                    ze = Ye,
                    qe = function() {
                        function e(e) {
                            this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = 0, this.totalWeight_ = 0
                        }
                        var t = e.prototype;
                        return t.sample = function(e, t) {
                            var r = Math.pow(this.alpha_, e);
                            this.estimate_ = t * (1 - r) + r * this.estimate_, this.totalWeight_ += e
                        }, t.getTotalWeight = function() {
                            return this.totalWeight_
                        }, t.getEstimate = function() {
                            if (this.alpha_) {
                                var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
                                return this.estimate_ / e
                            }
                            return this.estimate_
                        }, e
                    }(),
                    Xe = qe,
                    Ze = function() {
                        function e(e, t, r, n) {
                            this.hls = void 0, this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.hls = e, this.defaultEstimate_ = n, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new Xe(t), this.fast_ = new Xe(r)
                        }
                        var t = e.prototype;
                        return t.sample = function(e, t) {
                            e = Math.max(e, this.minDelayMs_);
                            var r = 8 * t,
                                n = e / 1e3,
                                i = r / n;
                            this.fast_.sample(n, i), this.slow_.sample(n, i)
                        }, t.canEstimate = function() {
                            var e = this.fast_;
                            return e && e.getTotalWeight() >= this.minWeight_
                        }, t.getEstimate = function() {
                            return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                        }, t.destroy = function() {}, e
                    }(),
                    Je = Ze,
                    Qe = window,
                    $e = Qe.performance,
                    et = function(r) {
                        function e(e) {
                            var t;
                            return (t = r.call(this, e, z.default.FRAG_LOADING, z.default.FRAG_LOADED, z.default.FRAG_BUFFERED, z.default.ERROR) || this).lastLoadedFragLevel = 0, t._nextAutoLevel = -1, t.hls = e, t.timer = null, t._bwEstimator = null, t.onCheck = t._abandonRulesCheck.bind(function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(t)), t
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, r);
                        var t = e.prototype;
                        return t.destroy = function() {
                                this.clearTimer(), J.prototype.destroy.call(this)
                            }, t.onFragLoading = function(e) {
                                var t = e.frag;
                                if ("main" === t.type && (this.timer || (this.fragCurrent = t, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) {
                                    var r, n, i = this.hls,
                                        a = i.config,
                                        o = t.level,
                                        s = i.levels[o].details.live;
                                    n = s ? (r = a.abrEwmaFastLive, a.abrEwmaSlowLive) : (r = a.abrEwmaFastVoD, a.abrEwmaSlowVoD), this._bwEstimator = new Je(i, n, r, a.abrEwmaDefaultEstimate)
                                }
                            }, t._abandonRulesCheck = function() {
                                var e = this.hls,
                                    t = e.media,
                                    r = this.fragCurrent;
                                if (r) {
                                    var n = r.loader,
                                        i = e.minAutoLevel;
                                    if (!n || n.stats && n.stats.aborted) return q.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
                                    var a = n.stats;
                                    if (t && a && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {
                                        var o = $e.now() - a.trequest,
                                            s = Math.abs(t.playbackRate);
                                        if (o > 500 * r.duration / s) {
                                            var l = e.levels,
                                                u = Math.max(1, a.bw ? a.bw / 8 : 1e3 * a.loaded / o),
                                                c = l[r.level],
                                                d = c.realBitrate ? Math.max(c.realBitrate, c.bitrate) : c.bitrate,
                                                f = a.total ? a.total : Math.max(a.loaded, Math.round(r.duration * d / 8)),
                                                h = t.currentTime,
                                                g = (f - a.loaded) / u,
                                                p = (Ae.bufferInfo(t, h, e.config.maxBufferHole).end - h) / s;
                                            if (p < 2 * r.duration / s && p < g) {
                                                var v;
                                                for (v = r.level - 1; i < v; v--) {
                                                    var m = l[v].realBitrate ? Math.max(l[v].realBitrate, l[v].bitrate) : l[v].bitrate;
                                                    if (r.duration * m / (6.4 * u) < p) break
                                                }
                                                void 0 < g && (q.logger.warn("loading too slow, abort fragment loading and switch to level " + v + ":fragLoadedDelay[" + v + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + (void 0).toFixed(1) + "<" + g.toFixed(1) + ":" + p.toFixed(1)), e.nextLoadLevel = v, this._bwEstimator.sample(o, a.loaded), n.abort(), this.clearTimer(), e.trigger(z.default.FRAG_LOAD_EMERGENCY_ABORTED, {
                                                    frag: r,
                                                    stats: a
                                                }))
                                            }
                                        }
                                    }
                                }
                            }, t.onFragLoaded = function(e) {
                                var t = e.frag;
                                if ("main" === t.type && Object(Y.isFiniteNumber)(t.sn)) {
                                    if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                                        var r = this.hls.levels[t.level],
                                            n = (r.loaded ? r.loaded.bytes : 0) + e.stats.loaded,
                                            i = (r.loaded ? r.loaded.duration : 0) + e.frag.duration;
                                        r.loaded = {
                                            bytes: n,
                                            duration: i
                                        }, r.realBitrate = Math.round(8 * n / i)
                                    }
                                    if (e.frag.bitrateTest) {
                                        var a = e.stats;
                                        a.tparsed = a.tbuffered = a.tload, this.onFragBuffered(e)
                                    }
                                }
                            }, t.onFragBuffered = function(e) {
                                var t = e.stats,
                                    r = e.frag;
                                if (!0 !== t.aborted && "main" === r.type && Object(Y.isFiniteNumber)(r.sn) && (!r.bitrateTest || t.tload === t.tbuffered)) {
                                    var n = t.tparsed - t.trequest;
                                    q.logger.log("latency/loading/parsing/append/kbps:" + Math.round(t.tfirst - t.trequest) + "/" + Math.round(t.tload - t.tfirst) + "/" + Math.round(t.tparsed - t.tload) + "/" + Math.round(t.tbuffered - t.tparsed) + "/" + Math.round(8 * t.loaded / (t.tbuffered - t.trequest))), this._bwEstimator.sample(n, t.loaded), t.bwEstimate = this._bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0
                                }
                            }, t.onError = function(e) {
                                switch (e.details) {
                                    case W.ErrorDetails.FRAG_LOAD_ERROR:
                                    case W.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        this.clearTimer()
                                }
                            }, t.clearTimer = function() {
                                clearInterval(this.timer), this.timer = null
                            }, t._findBestLevel = function(e, t, r, n, i, a, o, s, l) {
                                for (var u = i; n <= u; u--) {
                                    var c = l[u];
                                    if (c) {
                                        var d = c.details,
                                            f = d ? d.totalduration / d.fragments.length : t,
                                            h = !!d && d.live,
                                            g = void 0;
                                        g = u <= e ? o * r : s * r;
                                        var p = l[u].realBitrate ? Math.max(l[u].realBitrate, l[u].bitrate) : l[u].bitrate,
                                            v = p * f / g;
                                        if (q.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(g) + "/" + p + "/" + f + "/" + a + "/" + v), p < g && (!v || h && !this.bitrateTestDelay || v < a)) return u
                                    }
                                }
                                return -1
                            },
                            function(e, t, r) {
                                t && w(e.prototype, t), r && w(e, r)
                            }(e, [{
                                key: "nextAutoLevel",
                                get: function() {
                                    var e = this._nextAutoLevel,
                                        t = this._bwEstimator;
                                    if (!(-1 === e || t && t.canEstimate())) return e;
                                    var r = this._nextABRAutoLevel;
                                    return -1 !== e && (r = Math.min(e, r)), r
                                },
                                set: function(e) {
                                    this._nextAutoLevel = e
                                }
                            }, {
                                key: "_nextABRAutoLevel",
                                get: function() {
                                    var e = this.hls,
                                        t = e.maxAutoLevel,
                                        r = e.levels,
                                        n = e.config,
                                        i = e.minAutoLevel,
                                        a = e.media,
                                        o = this.lastLoadedFragLevel,
                                        s = this.fragCurrent ? this.fragCurrent.duration : 0,
                                        l = a ? a.currentTime : 0,
                                        u = a && 0 !== a.playbackRate ? Math.abs(a.playbackRate) : 1,
                                        c = this._bwEstimator ? this._bwEstimator.getEstimate() : n.abrEwmaDefaultEstimate,
                                        d = (Ae.bufferInfo(a, l, n.maxBufferHole).end - l) / u,
                                        f = this._findBestLevel(o, s, c, i, t, d, n.abrBandWidthFactor, n.abrBandWidthUpFactor, r);
                                    if (0 <= f) return f;
                                    q.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                                    var h = s ? Math.min(s, n.maxStarvationDelay) : n.maxStarvationDelay,
                                        g = n.abrBandWidthFactor,
                                        p = n.abrBandWidthUpFactor;
                                    if (0 == d) {
                                        var v = this.bitrateTestDelay;
                                        v && (h = (s ? Math.min(s, n.maxLoadingDelay) : n.maxLoadingDelay) - v, q.logger.trace("bitrate test took " + Math.round(1e3 * v) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * h) + " ms"), g = p = 1)
                                    }
                                    return f = this._findBestLevel(o, s, c, i, t, d + h, g, p, r), Math.max(f, 0)
                                }
                            }]), e
                    }(J),
                    tt = et,
                    rt = o(),
                    nt = function(t) {
                        function e(e) {
                            var s;
                            return (s = t.call(this, e, z.default.MEDIA_ATTACHING, z.default.MEDIA_DETACHING, z.default.MANIFEST_PARSED, z.default.BUFFER_RESET, z.default.BUFFER_APPENDING, z.default.BUFFER_CODECS, z.default.BUFFER_EOS, z.default.BUFFER_FLUSHING, z.default.LEVEL_PTS_UPDATED, z.default.LEVEL_UPDATED) || this)._msDuration = null, s._levelDuration = null, s._levelTargetDuration = 10, s._live = null, s._objectUrl = null, s._needsFlush = !1, s._needsEos = !1, s.config = void 0, s.audioTimestampOffset = void 0, s.bufferCodecEventsExpected = 0, s._bufferCodecEventsTotal = 0, s.media = null, s.mediaSource = null, s.segments = [], s.parent = void 0, s.appending = !1, s.appended = 0, s.appendError = 0, s.flushBufferCounter = 0, s.tracks = {}, s.pendingTracks = {}, s.sourceBuffer = {}, s.flushRange = [], s._onMediaSourceOpen = function() {
                                q.logger.log("media source opened"), s.hls.trigger(z.default.MEDIA_ATTACHED, {
                                    media: s.media
                                });
                                var e = s.mediaSource;
                                e && e.removeEventListener("sourceopen", s._onMediaSourceOpen), s.checkPendingTracks()
                            }, s._onMediaSourceClose = function() {
                                q.logger.log("media source closed")
                            }, s._onMediaSourceEnded = function() {
                                q.logger.log("media source ended")
                            }, s._onSBUpdateEnd = function() {
                                if (s.audioTimestampOffset && s.sourceBuffer.audio) {
                                    var e = s.sourceBuffer.audio;
                                    q.logger.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + s.audioTimestampOffset), e.timestampOffset = s.audioTimestampOffset, delete s.audioTimestampOffset
                                }
                                s._needsFlush && s.doFlush(), s._needsEos && s.checkEos(), s.appending = !1;
                                var r = s.parent,
                                    t = s.segments.reduce(function(e, t) {
                                        return t.parent === r ? e + 1 : e
                                    }, 0),
                                    n = {},
                                    i = s.sourceBuffer;
                                for (var a in i) {
                                    var o = i[a];
                                    if (!o) throw Error("handling source buffer update end error: source buffer for " + a + " uninitilized and unable to update buffered TimeRanges.");
                                    n[a] = o.buffered
                                }
                                s.hls.trigger(z.default.BUFFER_APPENDED, {
                                    parent: r,
                                    pending: t,
                                    timeRanges: n
                                }), s._needsFlush || s.doAppending(), s.updateMediaElementDuration(), 0 === t && s.flushLiveBackBuffer()
                            }, s._onSBUpdateError = function(e) {
                                q.logger.error("sourceBuffer error:", e), s.hls.trigger(z.default.ERROR, {
                                    type: W.ErrorTypes.MEDIA_ERROR,
                                    details: W.ErrorDetails.BUFFER_APPENDING_ERROR,
                                    fatal: !1
                                })
                            }, s.config = e.config, s
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, t);
                        var r = e.prototype;
                        return r.destroy = function() {
                            J.prototype.destroy.call(this)
                        }, r.onLevelPtsUpdated = function(e) {
                            var t = e.type,
                                r = this.tracks.audio;
                            if ("audio" === t && r && "audio/mpeg" === r.container) {
                                var n = this.sourceBuffer.audio;
                                if (!n) throw Error("Level PTS Updated and source buffer for audio uninitalized");
                                if (.1 < Math.abs(n.timestampOffset - e.start)) {
                                    var i = n.updating;
                                    try {
                                        n.abort()
                                    } catch (e) {
                                        q.logger.warn("can not abort audio buffer: " + e)
                                    }
                                    i ? this.audioTimestampOffset = e.start : (q.logger.warn("change mpeg audio timestamp offset from " + n.timestampOffset + " to " + e.start), n.timestampOffset = e.start)
                                }
                            }
                        }, r.onManifestParsed = function(e) {
                            this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = e.altAudio ? 2 : 1, q.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
                        }, r.onMediaAttaching = function(e) {
                            var t = this.media = e.media;
                            if (t && rt) {
                                var r = this.mediaSource = new rt;
                                r.addEventListener("sourceopen", this._onMediaSourceOpen), r.addEventListener("sourceended", this._onMediaSourceEnded), r.addEventListener("sourceclose", this._onMediaSourceClose), t.src = window.URL.createObjectURL(r), this._objectUrl = t.src
                            }
                        }, r.onMediaDetaching = function() {
                            q.logger.log("media source detaching");
                            var e = this.mediaSource;
                            if (e) {
                                if ("open" === e.readyState) try {
                                    e.endOfStream()
                                } catch (e) {
                                    q.logger.warn("onMediaDetaching:" + e.message + " while calling endOfStream")
                                }
                                e.removeEventListener("sourceopen", this._onMediaSourceOpen), e.removeEventListener("sourceended", this._onMediaSourceEnded), e.removeEventListener("sourceclose", this._onMediaSourceClose), this.media && (this._objectUrl && window.URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : q.logger.warn("media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                            }
                            this.hls.trigger(z.default.MEDIA_DETACHED)
                        }, r.checkPendingTracks = function() {
                            var e = this.bufferCodecEventsExpected,
                                t = this.pendingTracks,
                                r = Object.keys(t).length;
                            (r && !e || 2 === r) && (this.createSourceBuffers(t), this.pendingTracks = {}, this.doAppending())
                        }, r.onBufferReset = function() {
                            var e = this.sourceBuffer;
                            for (var t in e) {
                                var r = e[t];
                                try {
                                    r && (this.mediaSource && this.mediaSource.removeSourceBuffer(r), r.removeEventListener("updateend", this._onSBUpdateEnd), r.removeEventListener("error", this._onSBUpdateError))
                                } catch (e) {}
                            }
                            this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
                        }, r.onBufferCodecs = function(t) {
                            var r = this;
                            Object.keys(this.sourceBuffer).length || (Object.keys(t).forEach(function(e) {
                                r.pendingTracks[e] = t[e]
                            }), this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
                        }, r.createSourceBuffers = function(e) {
                            var t = this.sourceBuffer,
                                r = this.mediaSource;
                            if (!r) throw Error("createSourceBuffers called when mediaSource was null");
                            for (var n in e)
                                if (!t[n]) {
                                    var i = e[n];
                                    if (!i) throw Error("source buffer exists for track " + n + ", however track does not");
                                    var a = i.levelCodec || i.codec,
                                        o = i.container + ";codecs=" + a;
                                    q.logger.log("creating sourceBuffer(" + o + ")");
                                    try {
                                        var s = t[n] = r.addSourceBuffer(o);
                                        s.addEventListener("updateend", this._onSBUpdateEnd), s.addEventListener("error", this._onSBUpdateError), this.tracks[n] = {
                                            buffer: s,
                                            codec: a,
                                            id: i.id,
                                            container: i.container,
                                            levelCodec: i.levelCodec
                                        }
                                    } catch (e) {
                                        q.logger.error("error while trying to add sourceBuffer:" + e.message), this.hls.trigger(z.default.ERROR, {
                                            type: W.ErrorTypes.MEDIA_ERROR,
                                            details: W.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                            fatal: !1,
                                            err: e,
                                            mimeType: o
                                        })
                                    }
                                } this.hls.trigger(z.default.BUFFER_CREATED, {
                                tracks: this.tracks
                            })
                        }, r.onBufferAppending = function(e) {
                            this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending())
                        }, r.onBufferEos = function(e) {
                            for (var t in this.sourceBuffer)
                                if (!e.type || e.type === t) {
                                    var r = this.sourceBuffer[t];
                                    r && !r.ended && (r.ended = !0, q.logger.log(t + " sourceBuffer now EOS"))
                                } this.checkEos()
                        }, r.checkEos = function() {
                            var e = this.sourceBuffer,
                                t = this.mediaSource;
                            if (t && "open" === t.readyState) {
                                for (var r in e) {
                                    var n = e[r];
                                    if (n) {
                                        if (!n.ended) return;
                                        if (n.updating) return void(this._needsEos = !0)
                                    }
                                }
                                q.logger.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");
                                try {
                                    t.endOfStream()
                                } catch (e) {
                                    q.logger.warn("exception while calling mediaSource.endOfStream()")
                                }
                                this._needsEos = !1
                            } else this._needsEos = !1
                        }, r.onBufferFlushing = function(e) {
                            e.type ? this.flushRange.push({
                                start: e.startOffset,
                                end: e.endOffset,
                                type: e.type
                            }) : (this.flushRange.push({
                                start: e.startOffset,
                                end: e.endOffset,
                                type: "video"
                            }), this.flushRange.push({
                                start: e.startOffset,
                                end: e.endOffset,
                                type: "audio"
                            })), this.flushBufferCounter = 0, this.doFlush()
                        }, r.flushLiveBackBuffer = function() {
                            if (this._live) {
                                var e = this.config.liveBackBufferLength;
                                if (isFinite(e) && !(e < 0)) {
                                    if (!this.media) return void q.logger.error("flushLiveBackBuffer called without attaching media");
                                    for (var t = this.media.currentTime, r = this.sourceBuffer, n = Object.keys(r), i = t - Math.max(e, this._levelTargetDuration), a = n.length - 1; 0 <= a; a--) {
                                        var o = n[a],
                                            s = r[o];
                                        if (s) {
                                            var l = s.buffered;
                                            0 < l.length && i > l.start(0) && this.removeBufferRange(o, s, 0, i) && this.hls.trigger(z.default.LIVE_BACK_BUFFER_REACHED, {
                                                bufferEnd: i
                                            })
                                        }
                                    }
                                }
                            }
                        }, r.onLevelUpdated = function(e) {
                            var t = e.details;
                            0 < t.fragments.length && (this._levelDuration = t.totalduration + t.fragments[0].start, this._levelTargetDuration = t.averagetargetduration || t.targetduration || 10, this._live = t.live, this.updateMediaElementDuration())
                        }, r.updateMediaElementDuration = function() {
                            var e, t = this.config;
                            if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
                                for (var r in this.sourceBuffer) {
                                    var n = this.sourceBuffer[r];
                                    if (n && !0 === n.updating) return
                                }
                                e = this.media.duration, null === this._msDuration && (this._msDuration = this.mediaSource.duration), !0 === this._live && !0 === t.liveDurationInfinity ? (q.logger.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > e || !Object(Y.isFiniteNumber)(e)) && (q.logger.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
                            }
                        }, r.doFlush = function() {
                            for (; this.flushRange.length;) {
                                var e = this.flushRange[0];
                                if (!this.flushBuffer(e.start, e.end, e.type)) return void(this._needsFlush = !0);
                                this.flushRange.shift(), this.flushBufferCounter = 0
                            }
                            if (0 === this.flushRange.length) {
                                this._needsFlush = !1;
                                var t = 0,
                                    r = this.sourceBuffer;
                                try {
                                    for (var n in r) {
                                        var i = r[n];
                                        i && (t += i.buffered.length)
                                    }
                                } catch (e) {
                                    q.logger.error("error while accessing sourceBuffer.buffered")
                                }
                                this.appended = t, this.hls.trigger(z.default.BUFFER_FLUSHED)
                            }
                        }, r.doAppending = function() {
                            var e = this.config,
                                t = this.hls,
                                r = this.segments,
                                n = this.sourceBuffer;
                            if (Object.keys(n).length) {
                                if (!this.media || this.media.error) return this.segments = [], void q.logger.error("trying to append although a media error occured, flush segment and abort");
                                if (!this.appending) {
                                    var i = r.shift();
                                    if (i) try {
                                        var a = n[i.type];
                                        if (!a) return void this._onSBUpdateEnd();
                                        if (a.updating) return void r.unshift(i);
                                        a.ended = !1, this.parent = i.parent, a.appendBuffer(i.data), this.appendError = 0, this.appended++, this.appending = !0
                                    } catch (n) {
                                        q.logger.error("error while trying to append buffer:" + n.message), r.unshift(i);
                                        var o = {
                                            type: W.ErrorTypes.MEDIA_ERROR,
                                            parent: i.parent,
                                            details: "",
                                            fatal: !1
                                        };
                                        22 === n.code ? (this.segments = [], o.details = W.ErrorDetails.BUFFER_FULL_ERROR) : (this.appendError++, o.details = W.ErrorDetails.BUFFER_APPEND_ERROR, this.appendError > e.appendErrorMaxRetry && (q.logger.log("fail " + e.appendErrorMaxRetry + " times to append segment in sourceBuffer"), this.segments = [], o.fatal = !0)), t.trigger(z.default.ERROR, o)
                                    }
                                }
                            }
                        }, r.flushBuffer = function(e, t, r) {
                            var n = this.sourceBuffer;
                            if (!Object.keys(n).length) return !0;
                            var i = "null";
                            if (this.media && (i = this.media.currentTime.toFixed(3)), q.logger.log("flushBuffer,pos/start/end: " + i + "/" + e + "/" + t), this.flushBufferCounter >= this.appended) return q.logger.warn("abort flushing too many retries"), !0;
                            var a = n[r];
                            if (a) {
                                if (a.ended = !1, a.updating) return q.logger.warn("cannot flush, sb updating in progress"), !1;
                                if (this.removeBufferRange(r, a, e, t)) return this.flushBufferCounter++, !1
                            }
                            return q.logger.log("buffer flushed"), !0
                        }, r.removeBufferRange = function(e, t, r, n) {
                            try {
                                for (var i = 0; i < t.buffered.length; i++) {
                                    var a = t.buffered.start(i),
                                        o = t.buffered.end(i),
                                        s = Math.max(a, r),
                                        l = Math.min(o, n);
                                    if (.5 < Math.min(l, o) - s) {
                                        var u = "null";
                                        return this.media && (u = this.media.currentTime.toString()), q.logger.log("sb remove " + e + " [" + s + "," + l + "], of [" + a + "," + o + "], pos:" + u), t.remove(s, l), !0
                                    }
                                }
                            } catch (e) {
                                q.logger.warn("removeBufferRange failed", e)
                            }
                            return !1
                        }, e
                    }(J),
                    it = nt,
                    at = function(r) {
                        function i(e) {
                            var t;
                            return (t = r.call(this, e, z.default.FPS_DROP_LEVEL_CAPPING, z.default.MEDIA_ATTACHING, z.default.MANIFEST_PARSED, z.default.BUFFER_CODECS, z.default.MEDIA_DETACHING) || this).autoLevelCapping = Number.POSITIVE_INFINITY, t.firstLevel = null, t.levels = [], t.media = null, t.restrictedLevels = [], t.timer = null, t
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(i, r);
                        var e = i.prototype;
                        return e.destroy = function() {
                                this.hls.config.capLevelToPlayerSize && (this.media = null, this.stopCapping())
                            }, e.onFpsDropLevelCapping = function(e) {
                                i.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel)
                            }, e.onMediaAttaching = function(e) {
                                this.media = e.media instanceof window.HTMLVideoElement ? e.media : null
                            }, e.onManifestParsed = function(e) {
                                var t = this.hls;
                                this.restrictedLevels = [], this.levels = e.levels, this.firstLevel = e.firstLevel, t.config.capLevelToPlayerSize && e.video && this.startCapping()
                            }, e.onBufferCodecs = function(e) {
                                this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
                            }, e.onLevelsUpdated = function(e) {
                                this.levels = e.levels
                            }, e.onMediaDetaching = function() {
                                this.stopCapping()
                            }, e.detectPlayerSize = function() {
                                if (this.media) {
                                    var e = this.levels ? this.levels.length : 0;
                                    if (e) {
                                        var t = this.hls;
                                        t.autoLevelCapping = this.getMaxLevel(e - 1), t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping
                                    }
                                }
                            }, e.getMaxLevel = function(r) {
                                var n = this;
                                if (!this.levels) return -1;
                                var e = this.levels.filter(function(e, t) {
                                    return i.isLevelAllowed(t, n.restrictedLevels) && t <= r
                                });
                                return i.getMaxLevelByMediaSize(e, this.mediaWidth, this.mediaHeight)
                            }, e.startCapping = function() {
                                this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                            }, e.stopCapping = function() {
                                this.restrictedLevels = [], this.firstLevel = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer), this.timer = null)
                            }, i.isLevelAllowed = function(e, t) {
                                return void 0 === t && (t = []), -1 === t.indexOf(e)
                            }, i.getMaxLevelByMediaSize = function(e, t, r) {
                                if (!e || e && !e.length) return -1;
                                for (var n = e.length - 1, i = 0; i < e.length; i += 1) {
                                    var a = e[i];
                                    if ((a.width >= t || a.height >= r) && function(e, t) {
                                            return !t || e.width !== t.width || e.height !== t.height
                                        }(a, e[i + 1])) {
                                        n = i;
                                        break
                                    }
                                }
                                return n
                            },
                            function(e, t, r) {
                                t && R(e.prototype, t), r && R(e, r)
                            }(i, [{
                                key: "mediaWidth",
                                get: function() {
                                    var e, t = this.media;
                                    return t && (e = t.width || t.clientWidth || t.offsetWidth, e *= i.contentScaleFactor), e
                                }
                            }, {
                                key: "mediaHeight",
                                get: function() {
                                    var e, t = this.media;
                                    return t && (e = t.height || t.clientHeight || t.offsetHeight, e *= i.contentScaleFactor), e
                                }
                            }], [{
                                key: "contentScaleFactor",
                                get: function() {
                                    var e = 1;
                                    try {
                                        e = window.devicePixelRatio
                                    } catch (e) {}
                                    return e
                                }
                            }]), i
                    }(J),
                    ot = at,
                    st = window,
                    lt = st.performance,
                    ut = function(t) {
                        function e(e) {
                            return t.call(this, e, z.default.MEDIA_ATTACHING) || this
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, t);
                        var r = e.prototype;
                        return r.destroy = function() {
                            this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
                        }, r.onMediaAttaching = function(e) {
                            var t = this.hls.config;
                            t.capLevelOnFPSDrop && ("function" == typeof(this.video = e.media instanceof window.HTMLVideoElement ? e.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod))
                        }, r.checkFPS = function(e, t, r) {
                            var n = lt.now();
                            if (t) {
                                if (this.lastTime) {
                                    var i = n - this.lastTime,
                                        a = r - this.lastDroppedFrames,
                                        o = t - this.lastDecodedFrames,
                                        s = 1e3 * a / i,
                                        l = this.hls;
                                    if (l.trigger(z.default.FPS_DROP, {
                                            currentDropped: a,
                                            currentDecoded: o,
                                            totalDroppedFrames: r
                                        }), 0 < s && a > l.config.fpsDroppedMonitoringThreshold * o) {
                                        var u = l.currentLevel;
                                        q.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u), 0 < u && (-1 === l.autoLevelCapping || l.autoLevelCapping >= u) && (--u, l.trigger(z.default.FPS_DROP_LEVEL_CAPPING, {
                                            level: u,
                                            droppedLevel: l.currentLevel
                                        }), l.autoLevelCapping = u, l.streamController.nextLevelSwitch())
                                    }
                                }
                                this.lastTime = n, this.lastDroppedFrames = r, this.lastDecodedFrames = t
                            }
                        }, r.checkFPSInterval = function() {
                            var e = this.video;
                            if (e)
                                if (this.isVideoPlaybackQualityAvailable) {
                                    var t = e.getVideoPlaybackQuality();
                                    this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
                                } else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
                        }, e
                    }(J),
                    ct = ut,
                    dt = window,
                    ft = dt.performance,
                    ht = dt.XMLHttpRequest,
                    gt = function() {
                        function e(e) {
                            e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
                        }
                        var t = e.prototype;
                        return t.destroy = function() {
                            this.abort(), this.loader = null
                        }, t.abort = function() {
                            var e = this.loader;
                            e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
                        }, t.load = function(e, t, r) {
                            this.context = e, this.config = t, this.callbacks = r, this.stats = {
                                trequest: ft.now(),
                                retry: 0
                            }, this.retryDelay = t.retryDelay, this.loadInternal()
                        }, t.loadInternal = function() {
                            var e, t = this.context;
                            e = this.loader = new ht;
                            var r = this.stats;
                            r.tfirst = 0, r.loaded = 0;
                            var n = this.xhrSetup;
                            try {
                                if (n) try {
                                    n(e, t.url)
                                } catch (r) {
                                    e.open("GET", t.url, !0), n(e, t.url)
                                }
                                e.readyState || e.open("GET", t.url, !0)
                            } catch (r) {
                                return void this.callbacks.onError({
                                    code: e.status,
                                    text: r.message
                                }, t, e)
                            }
                            t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send()
                        }, t.readystatechange = function(e) {
                            var t = e.currentTarget,
                                r = t.readyState,
                                n = this.stats,
                                i = this.context,
                                a = this.config;
                            if (!n.aborted && 2 <= r)
                                if (window.clearTimeout(this.requestTimeout), 0 === n.tfirst && (n.tfirst = Math.max(ft.now(), n.trequest)), 4 === r) {
                                    var o = t.status;
                                    if (200 <= o && o < 300) {
                                        var s, l;
                                        n.tload = Math.max(n.tfirst, ft.now()), l = "arraybuffer" === i.responseType ? (s = t.response).byteLength : (s = t.responseText).length, n.loaded = n.total = l;
                                        var u = {
                                            url: t.responseURL,
                                            data: s
                                        };
                                        this.callbacks.onSuccess(u, n, i, t)
                                    } else n.retry >= a.maxRetry || 400 <= o && o < 499 ? (q.logger.error(o + " while loading " + i.url), this.callbacks.onError({
                                        code: o,
                                        text: t.statusText
                                    }, i, t)) : (q.logger.warn(o + " while loading " + i.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), n.retry++)
                                } else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), a.timeout)
                        }, t.loadtimeout = function() {
                            q.logger.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
                        }, t.loadprogress = function(e) {
                            var t = e.currentTarget,
                                r = this.stats;
                            r.loaded = e.loaded, e.lengthComputable && (r.total = e.total);
                            var n = this.callbacks.onProgress;
                            n && n(r, this.context, null, t)
                        }, e
                    }(),
                    pt = gt,
                    vt = function(r) {
                        function e(e) {
                            var t;
                            return (t = r.call(this, e, z.default.MANIFEST_LOADING, z.default.MANIFEST_PARSED, z.default.AUDIO_TRACK_LOADED, z.default.AUDIO_TRACK_SWITCHED, z.default.LEVEL_LOADED, z.default.ERROR) || this)._trackId = -1, t._selectDefaultTrack = !0, t.tracks = [], t.trackIdBlacklist = Object.create(null), t.audioGroupId = null, t
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, r);
                        var t = e.prototype;
                        return t.onManifestLoading = function() {
                                this.tracks = [], this._trackId = -1, this._selectDefaultTrack = !0
                            }, t.onManifestParsed = function(e) {
                                var t = this.tracks = e.audioTracks || [];
                                this.hls.trigger(z.default.AUDIO_TRACKS_UPDATED, {
                                    audioTracks: t
                                })
                            }, t.onAudioTrackLoaded = function(e) {
                                if (e.id >= this.tracks.length) q.logger.warn("Invalid audio track id:", e.id);
                                else {
                                    if (q.logger.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.hasInterval()) {
                                        var t = 1e3 * e.details.targetduration;
                                        this.setInterval(t)
                                    }!e.details.live && this.hasInterval() && this.clearInterval()
                                }
                            }, t.onAudioTrackSwitched = function(e) {
                                var t = this.tracks[e.id].groupId;
                                t && this.audioGroupId !== t && (this.audioGroupId = t)
                            }, t.onLevelLoaded = function(e) {
                                var t = this.hls.levels[e.level];
                                if (t.audioGroupIds) {
                                    var r = t.audioGroupIds[t.urlId];
                                    this.audioGroupId !== r && (this.audioGroupId = r, this._selectInitialAudioTrack())
                                }
                            }, t.onError = function(e) {
                                e.type === W.ErrorTypes.NETWORK_ERROR && (e.fatal && this.clearInterval(), e.details === W.ErrorDetails.AUDIO_TRACK_LOAD_ERROR && (q.logger.warn("Network failure on audio-track id:", e.context.id), this._handleLoadError()))
                            }, t._setAudioTrack = function(e) {
                                if (this._trackId === e && this.tracks[this._trackId].details) q.logger.debug("Same id as current audio-track passed, and track details available -> no-op");
                                else if (e < 0 || e >= this.tracks.length) q.logger.warn("Invalid id passed to audio-track controller");
                                else {
                                    var t = this.tracks[e];
                                    q.logger.log("Now switching to audio-track index " + e), this.clearInterval(), this._trackId = e;
                                    var r = t.url,
                                        n = t.type,
                                        i = t.id;
                                    this.hls.trigger(z.default.AUDIO_TRACK_SWITCHING, {
                                        id: i,
                                        type: n,
                                        url: r
                                    }), this._loadTrackDetailsIfNeeded(t)
                                }
                            }, t.doTick = function() {
                                this._updateTrack(this._trackId)
                            }, t._selectInitialAudioTrack = function() {
                                var t = this,
                                    e = this.tracks;
                                if (e.length) {
                                    var r = this.tracks[this._trackId],
                                        n = null;
                                    if (r && (n = r.name), this._selectDefaultTrack) {
                                        var i = e.filter(function(e) {
                                            return e.default
                                        });
                                        i.length ? e = i : q.logger.warn("No default audio tracks defined")
                                    }
                                    var a = !1,
                                        o = function() {
                                            e.forEach(function(e) {
                                                a || t.audioGroupId && e.groupId !== t.audioGroupId || n && n !== e.name || (t._setAudioTrack(e.id), a = !0)
                                            })
                                        };
                                    o(), a || (n = null, o()), a || (q.logger.error("No track found for running audio group-ID: " + this.audioGroupId), this.hls.trigger(z.default.ERROR, {
                                        type: W.ErrorTypes.MEDIA_ERROR,
                                        details: W.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                                        fatal: !0
                                    }))
                                }
                            }, t._needsTrackLoading = function(e) {
                                var t = e.details,
                                    r = e.url;
                                return !(t && !t.live || !r)
                            }, t._loadTrackDetailsIfNeeded = function(e) {
                                if (this._needsTrackLoading(e)) {
                                    var t = e.url,
                                        r = e.id;
                                    q.logger.log("loading audio-track playlist for id: " + r), this.hls.trigger(z.default.AUDIO_TRACK_LOADING, {
                                        url: t,
                                        id: r
                                    })
                                }
                            }, t._updateTrack = function(e) {
                                if (!(e < 0 || e >= this.tracks.length)) {
                                    this.clearInterval(), this._trackId = e, q.logger.log("trying to update audio-track " + e);
                                    var t = this.tracks[e];
                                    this._loadTrackDetailsIfNeeded(t)
                                }
                            }, t._handleLoadError = function() {
                                this.trackIdBlacklist[this._trackId] = !0;
                                var e = this._trackId,
                                    t = this.tracks[e],
                                    r = t.name,
                                    n = t.language,
                                    i = t.groupId;
                                q.logger.warn("Loading failed on audio track id: " + e + ", group-id: " + i + ', name/language: "' + r + '" / "' + n + '"');
                                for (var a = e, o = 0; o < this.tracks.length; o++)
                                    if (!this.trackIdBlacklist[o]) {
                                        var s = this.tracks[o];
                                        if (s.name === r) {
                                            a = o;
                                            break
                                        }
                                    } a !== e ? (q.logger.log("Attempting audio-track fallback id:", a, "group-id:", this.tracks[a].groupId), this._setAudioTrack(a)) : q.logger.warn('No fallback audio-track found for name/language: "' + r + '" / "' + n + '"')
                            },
                            function(e, t, r) {
                                t && A(e.prototype, t), r && A(e, r)
                            }(e, [{
                                key: "audioTracks",
                                get: function() {
                                    return this.tracks
                                }
                            }, {
                                key: "audioTrack",
                                get: function() {
                                    return this._trackId
                                },
                                set: function(e) {
                                    this._setAudioTrack(e), this._selectDefaultTrack = !1
                                }
                            }]), e
                    }(Ue),
                    mt = vt,
                    yt = window,
                    bt = yt.performance,
                    Et = function(n) {
                        function e(e, t) {
                            var r;
                            return (r = n.call(this, e, z.default.MEDIA_ATTACHED, z.default.MEDIA_DETACHING, z.default.AUDIO_TRACKS_UPDATED, z.default.AUDIO_TRACK_SWITCHING, z.default.AUDIO_TRACK_LOADED, z.default.KEY_LOADED, z.default.FRAG_LOADED, z.default.FRAG_PARSING_INIT_SEGMENT, z.default.FRAG_PARSING_DATA, z.default.FRAG_PARSED, z.default.ERROR, z.default.BUFFER_RESET, z.default.BUFFER_CREATED, z.default.BUFFER_APPENDED, z.default.BUFFER_FLUSHED, z.default.INIT_PTS_FOUND) || this).fragmentTracker = t, r.config = e.config, r.audioCodecSwap = !1, r._state = Be.STOPPED, r.initPTS = [], r.waitingFragment = null, r.videoTrackCC = null, r
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, n);
                        var t = e.prototype;
                        return t.onInitPtsFound = function(e) {
                                var t = e.id,
                                    r = e.frag.cc,
                                    n = e.initPTS;
                                "main" === t && (this.initPTS[r] = n, this.videoTrackCC = r, q.logger.log("InitPTS for cc: " + r + " found from video track: " + n), this.state === Be.WAITING_INIT_PTS && this.tick())
                            }, t.startLoad = function(e) {
                                if (this.tracks) {
                                    var t = this.lastCurrentTime;
                                    this.stopLoad(), this.setInterval(100), (this.fragLoadError = 0) < t && -1 === e ? (q.logger.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = Be.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e, this.state = Be.STARTING), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
                                } else this.startPosition = e, this.state = Be.STOPPED
                            }, t.doTick = function() {
                                var e, t, r, n = this.hls,
                                    i = n.config;
                                switch (this.state) {
                                    case Be.ERROR:
                                    case Be.PAUSED:
                                    case Be.BUFFER_FLUSHING:
                                        break;
                                    case Be.STARTING:
                                        this.state = Be.WAITING_TRACK, this.loadedmetadata = !1;
                                        break;
                                    case Be.IDLE:
                                        var a = this.tracks;
                                        if (!a) break;
                                        if (!this.media && (this.startFragRequested || !i.startFragPrefetch)) break;
                                        if (this.loadedmetadata) e = this.media.currentTime;
                                        else if (void 0 === (e = this.nextLoadPosition)) break;
                                        var o = this.mediaBuffer ? this.mediaBuffer : this.media,
                                            s = this.videoBuffer ? this.videoBuffer : this.media,
                                            l = Ae.bufferInfo(o, e, i.maxBufferHole),
                                            u = Ae.bufferInfo(s, e, i.maxBufferHole),
                                            c = l.len,
                                            d = l.end,
                                            f = this.fragPrevious,
                                            h = Math.min(i.maxBufferLength, i.maxMaxBufferLength),
                                            g = Math.max(h, u.len),
                                            p = this.audioSwitch,
                                            v = this.trackId;
                                        if ((c < g || p) && v < a.length) {
                                            if (void 0 === (r = a[v].details)) {
                                                this.state = Be.WAITING_TRACK;
                                                break
                                            }
                                            if (!p && this._streamEnded(l, r)) return this.hls.trigger(z.default.BUFFER_EOS, {
                                                type: "audio"
                                            }), void(this.state = Be.ENDED);
                                            var m, y = r.fragments,
                                                b = y.length,
                                                E = y[0].start,
                                                _ = y[b - 1].start + y[b - 1].duration;
                                            if (p)
                                                if (r.live && !r.PTSKnown) q.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"), d = 0;
                                                else if (d = e, r.PTSKnown && e < E) {
                                                if (!(l.end > E || l.nextStart)) return;
                                                q.logger.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = E + .05
                                            }
                                            if (r.initSegment && !r.initSegment.data) m = r.initSegment;
                                            else if (d <= E) {
                                                if (m = y[0], null !== this.videoTrackCC && m.cc !== this.videoTrackCC && (m = function(e, t) {
                                                        return Re.search(e, function(e) {
                                                            return e.cc < t ? 1 : e.cc > t ? -1 : 0
                                                        })
                                                    }(y, this.videoTrackCC)), r.live && m.loadIdx && m.loadIdx === this.fragLoadIdx) {
                                                    var T = l.nextStart ? l.nextStart : E;
                                                    return q.logger.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (T + .05)), void(this.media.currentTime = T + .05)
                                                }
                                            } else {
                                                var S, w = i.maxFragLookUpTolerance,
                                                    R = f ? y[f.sn - y[0].sn + 1] : void 0,
                                                    A = function(e) {
                                                        var t = Math.min(w, e.duration);
                                                        return e.start + e.duration - t <= d ? 1 : e.start - t > d && e.start ? -1 : 0
                                                    };
                                                (S = d < _ ? (_ - w < d && (w = 0), R && !A(R) ? R : Re.search(y, A)) : y[b - 1]) && (E = (m = S).start, f && m.level === f.level && m.sn === f.sn && (m.sn < r.endSN ? (m = y[m.sn + 1 - r.startSN], q.logger.log("SN just loaded, load next one: " + m.sn)) : m = null))
                                            }
                                            m && (m.encrypted ? (q.logger.log("Loading key for " + m.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + v), this.state = Be.KEY_LOADING, n.trigger(z.default.KEY_LOADING, {
                                                frag: m
                                            })) : (q.logger.log("Loading " + m.sn + ", cc: " + m.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + v + ", currentTime:" + e + ",bufferEnd:" + d.toFixed(3)), this.fragCurrent = m, !p && this.fragmentTracker.getState(m) !== Se.NOT_LOADED || ("initSegment" !== m.sn && (this.startFragRequested = !0), Object(Y.isFiniteNumber)(m.sn) && (this.nextLoadPosition = m.start + m.duration), n.trigger(z.default.FRAG_LOADING, {
                                                frag: m
                                            }), this.state = Be.FRAG_LOADING)))
                                        }
                                        break;
                                    case Be.WAITING_TRACK:
                                        (t = this.tracks[this.trackId]) && t.details && (this.state = Be.IDLE);
                                        break;
                                    case Be.FRAG_LOADING_WAITING_RETRY:
                                        var L = bt.now(),
                                            k = this.retryDate,
                                            D = (o = this.media) && o.seeking;
                                        (!k || k <= L || D) && (q.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = Be.IDLE);
                                        break;
                                    case Be.WAITING_INIT_PTS:
                                        var I = this.videoTrackCC;
                                        if (void 0 === this.initPTS[I]) break;
                                        var C = this.waitingFragment;
                                        if (C) {
                                            var P = C.frag.cc;
                                            I !== P ? (t = this.tracks[this.trackId]).details && t.details.live && (q.logger.warn("Waiting fragment CC (" + P + ") does not match video track CC (" + I + ")"), this.waitingFragment = null, this.state = Be.IDLE) : (this.state = Be.FRAG_LOADING, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
                                        } else this.state = Be.IDLE
                                }
                            }, t.onMediaAttached = function(e) {
                                var t = this.media = this.mediaBuffer = e.media;
                                this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), t.addEventListener("seeking", this.onvseeking), t.addEventListener("ended", this.onvended);
                                var r = this.config;
                                this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
                            }, t.onMediaDetaching = function() {
                                var e = this.media;
                                e && e.ended && (q.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
                            }, t.onAudioTracksUpdated = function(e) {
                                q.logger.log("audio tracks updated"), this.tracks = e.audioTracks
                            }, t.onAudioTrackSwitching = function(e) {
                                var t = !!e.url;
                                this.trackId = e.id, this.fragCurrent = null, this.state = Be.PAUSED, this.waitingFragment = null, t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), t && (this.audioSwitch = !0, this.state = Be.IDLE), this.tick()
                            }, t.onAudioTrackLoaded = function(e) {
                                var t = e.details,
                                    r = e.id,
                                    n = this.tracks[r],
                                    i = t.totalduration,
                                    a = 0;
                                if (q.logger.log("track " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + i), t.live) {
                                    var o = n.details;
                                    o && 0 < t.fragments.length ? (d(o, t), a = t.fragments[0].start, t.PTSKnown ? q.logger.log("live audio playlist sliding:" + a.toFixed(3)) : q.logger.log("live audio playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1, q.logger.log("live audio playlist - first load, unknown sliding"))
                                } else t.PTSKnown = !1;
                                if (n.details = t, !this.startFragRequested) {
                                    if (-1 === this.startPosition) {
                                        var s = t.startTimeOffset;
                                        Object(Y.isFiniteNumber)(s) ? (q.logger.log("start time offset found in playlist, adjust startPosition to " + s), this.startPosition = s) : t.live ? (this.startPosition = this.computeLivePosition(a, t), q.logger.log("compute startPosition for audio-track to " + this.startPosition)) : this.startPosition = 0
                                    }
                                    this.nextLoadPosition = this.startPosition
                                }
                                this.state === Be.WAITING_TRACK && (this.state = Be.IDLE), this.tick()
                            }, t.onKeyLoaded = function() {
                                this.state === Be.KEY_LOADING && (this.state = Be.IDLE, this.tick())
                            }, t.onFragLoaded = function(e) {
                                var t = this.fragCurrent,
                                    r = e.frag;
                                if (this.state === Be.FRAG_LOADING && t && "audio" === r.type && r.level === t.level && r.sn === t.sn) {
                                    var n = this.tracks[this.trackId],
                                        i = n.details,
                                        a = i.totalduration,
                                        o = t.level,
                                        s = t.sn,
                                        l = t.cc,
                                        u = this.config.defaultAudioCodec || n.audioCodec || "mp4a.40.2",
                                        c = this.stats = e.stats;
                                    if ("initSegment" === s) this.state = Be.IDLE, c.tparsed = c.tbuffered = bt.now(), i.initSegment.data = e.payload, this.hls.trigger(z.default.FRAG_BUFFERED, {
                                        stats: c,
                                        frag: t,
                                        id: "audio"
                                    }), this.tick();
                                    else {
                                        this.state = Be.PARSING, this.appended = !1, this.demuxer || (this.demuxer = new Ne(this.hls, "audio"));
                                        var d = this.initPTS[l],
                                            f = i.initSegment ? i.initSegment.data : [];
                                        i.initSegment || void 0 !== d ? (this.pendingBuffering = !0, q.logger.log("Demuxing " + s + " of [" + i.startSN + " ," + i.endSN + "],track " + o), this.demuxer.push(e.payload, f, u, null, t, a, !1, d)) : (q.logger.log("unknown video PTS for continuity counter " + l + ", waiting for video PTS before demuxing audio frag " + s + " of [" + i.startSN + " ," + i.endSN + "],track " + o), this.waitingFragment = e, this.state = Be.WAITING_INIT_PTS)
                                    }
                                }
                                this.fragLoadError = 0
                            }, t.onFragParsingInitSegment = function(e) {
                                var t = this.fragCurrent,
                                    r = e.frag;
                                if (t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === Be.PARSING) {
                                    var n, i = e.tracks;
                                    if (i.video && delete i.video, n = i.audio) {
                                        n.levelCodec = n.codec, n.id = e.id, this.hls.trigger(z.default.BUFFER_CODECS, i), q.logger.log("audio track:audio,container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]");
                                        var a = n.initSegment;
                                        if (a) {
                                            var o = {
                                                type: "audio",
                                                data: a,
                                                parent: "audio",
                                                content: "initSegment"
                                            };
                                            this.audioSwitch ? this.pendingData = [o] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(z.default.BUFFER_APPENDING, o))
                                        }
                                        this.tick()
                                    }
                                }
                            }, t.onFragParsingData = function(t) {
                                var r = this,
                                    e = this.fragCurrent,
                                    n = t.frag;
                                if (e && "audio" === t.id && "audio" === t.type && n.sn === e.sn && n.level === e.level && this.state === Be.PARSING) {
                                    var i = this.trackId,
                                        a = this.tracks[i],
                                        o = this.hls;
                                    Object(Y.isFiniteNumber)(t.endPTS) || (t.endPTS = t.startPTS + e.duration, t.endDTS = t.startDTS + e.duration), e.addElementaryStream(Q.AUDIO), q.logger.log("parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb), f(a.details, e, t.startPTS, t.endPTS);
                                    var s = this.audioSwitch,
                                        l = this.media,
                                        u = !1;
                                    if (s)
                                        if (l && l.readyState) {
                                            var c = l.currentTime;
                                            q.logger.log("switching audio track : currentTime:" + c), c >= t.startPTS && (q.logger.log("switching audio track : flushing all audio"), this.state = Be.BUFFER_FLUSHING, o.trigger(z.default.BUFFER_FLUSHING, {
                                                startOffset: 0,
                                                endOffset: Number.POSITIVE_INFINITY,
                                                type: "audio"
                                            }), u = !0, this.audioSwitch = !1, o.trigger(z.default.AUDIO_TRACK_SWITCHED, {
                                                id: i
                                            }))
                                        } else this.audioSwitch = !1, o.trigger(z.default.AUDIO_TRACK_SWITCHED, {
                                            id: i
                                        });
                                    var d = this.pendingData;
                                    if (!d) return q.logger.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"), void o.trigger(z.default.ERROR, {
                                        type: W.ErrorTypes.MEDIA_ERROR,
                                        details: null,
                                        fatal: !0
                                    });
                                    this.audioSwitch || ([t.data1, t.data2].forEach(function(e) {
                                        e && e.length && d.push({
                                            type: t.type,
                                            data: e,
                                            parent: "audio",
                                            content: "data"
                                        })
                                    }), !u && d.length && (d.forEach(function(e) {
                                        r.state === Be.PARSING && (r.pendingBuffering = !0, r.hls.trigger(z.default.BUFFER_APPENDING, e))
                                    }), this.pendingData = [], this.appended = !0)), this.tick()
                                }
                            }, t.onFragParsed = function(e) {
                                var t = this.fragCurrent,
                                    r = e.frag;
                                t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === Be.PARSING && (this.stats.tparsed = bt.now(), this.state = Be.PARSED, this._checkAppendedParsed())
                            }, t.onBufferReset = function() {
                                this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
                            }, t.onBufferCreated = function(e) {
                                var t = e.tracks.audio;
                                t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0), e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
                            }, t.onBufferAppended = function(e) {
                                if ("audio" === e.parent) {
                                    var t = this.state;
                                    t !== Be.PARSING && t !== Be.PARSED || (this.pendingBuffering = 0 < e.pending, this._checkAppendedParsed())
                                }
                            }, t._checkAppendedParsed = function() {
                                if (!(this.state !== Be.PARSED || this.appended && this.pendingBuffering)) {
                                    var e = this.fragCurrent,
                                        t = this.stats,
                                        r = this.hls;
                                    if (e) {
                                        this.fragPrevious = e, t.tbuffered = bt.now(), r.trigger(z.default.FRAG_BUFFERED, {
                                            stats: t,
                                            frag: e,
                                            id: "audio"
                                        });
                                        var n = this.mediaBuffer ? this.mediaBuffer : this.media;
                                        n && q.logger.log("audio buffered : " + Me.toString(n.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger(z.default.AUDIO_TRACK_SWITCHED, {
                                            id: this.trackId
                                        })), this.state = Be.IDLE
                                    }
                                    this.tick()
                                }
                            }, t.onError = function(e) {
                                var t = e.frag;
                                if (!t || "audio" === t.type) switch (e.details) {
                                    case W.ErrorDetails.FRAG_LOAD_ERROR:
                                    case W.ErrorDetails.FRAG_LOAD_TIMEOUT:
                                        var r = e.frag;
                                        if (r && "audio" !== r.type) break;
                                        if (!e.fatal) {
                                            var n = this.fragLoadError;
                                            n ? n++ : n = 1;
                                            var i = this.config;
                                            if (n <= i.fragLoadingMaxRetry) {
                                                this.fragLoadError = n;
                                                var a = Math.min(Math.pow(2, n - 1) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout);
                                                q.logger.warn("AudioStreamController: frag loading failed, retry in " + a + " ms"), this.retryDate = bt.now() + a, this.state = Be.FRAG_LOADING_WAITING_RETRY
                                            } else q.logger.error("AudioStreamController: " + e.details + " reaches max retry, redispatch as fatal ..."), e.fatal = !0, this.state = Be.ERROR
                                        }
                                        break;
                                    case W.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                                    case W.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                                    case W.ErrorDetails.KEY_LOAD_ERROR:
                                    case W.ErrorDetails.KEY_LOAD_TIMEOUT:
                                        this.state !== Be.ERROR && (this.state = e.fatal ? Be.ERROR : Be.IDLE, q.logger.warn("AudioStreamController: " + e.details + " while loading frag, now switching to " + this.state + " state ..."));
                                        break;
                                    case W.ErrorDetails.BUFFER_FULL_ERROR:
                                        if ("audio" === e.parent && (this.state === Be.PARSING || this.state === Be.PARSED)) {
                                            var o = this.mediaBuffer,
                                                s = this.media.currentTime;
                                            if (o && Ae.isBuffered(o, s) && Ae.isBuffered(o, s + .5)) {
                                                var l = this.config;
                                                l.maxMaxBufferLength >= l.maxBufferLength && (l.maxMaxBufferLength /= 2, q.logger.warn("AudioStreamController: reduce max buffer length to " + l.maxMaxBufferLength + "s")), this.state = Be.IDLE
                                            } else q.logger.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = Be.BUFFER_FLUSHING, this.hls.trigger(z.default.BUFFER_FLUSHING, {
                                                startOffset: 0,
                                                endOffset: Number.POSITIVE_INFINITY,
                                                type: "audio"
                                            })
                                        }
                                }
                            }, t.onBufferFlushed = function() {
                                var t = this,
                                    e = this.pendingData;
                                e && e.length ? (q.logger.log("AudioStreamController: appending pending audio data after buffer flushed"), e.forEach(function(e) {
                                    t.hls.trigger(z.default.BUFFER_APPENDING, e)
                                }), this.appended = !0, this.pendingData = [], this.state = Be.PARSED) : (this.state = Be.IDLE, this.fragPrevious = null, this.tick())
                            },
                            function(e, t, r) {
                                t && L(e.prototype, t), r && L(e, r)
                            }(e, [{
                                key: "state",
                                set: function(e) {
                                    if (this.state !== e) {
                                        var t = this.state;
                                        this._state = e, q.logger.log("audio stream:" + t + "->" + e)
                                    }
                                },
                                get: function() {
                                    return this._state
                                }
                            }]), e
                    }(Ge),
                    _t = Et,
                    Tt = function() {
                        function b(e) {
                            return "string" == typeof e && !!t[e.toLowerCase()] && e.toLowerCase()
                        }

                        function E(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) e[n] = r[n]
                            }
                            return e
                        }

                        function e(e, t, r) {
                            var n = this,
                                i = {
                                    enumerable: !0
                                };
                            n.hasBeenReset = !1;
                            var a = "",
                                o = !1,
                                s = e,
                                l = t,
                                u = r,
                                c = null,
                                d = "",
                                f = !0,
                                h = "auto",
                                g = "start",
                                p = 50,
                                v = "middle",
                                m = 50,
                                y = "middle";
                            Object.defineProperty(n, "id", E({}, i, {
                                get: function() {
                                    return a
                                },
                                set: function(e) {
                                    a = "" + e
                                }
                            })), Object.defineProperty(n, "pauseOnExit", E({}, i, {
                                get: function() {
                                    return o
                                },
                                set: function(e) {
                                    o = !!e
                                }
                            })), Object.defineProperty(n, "startTime", E({}, i, {
                                get: function() {
                                    return s
                                },
                                set: function(e) {
                                    if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                                    s = e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(n, "endTime", E({}, i, {
                                get: function() {
                                    return l
                                },
                                set: function(e) {
                                    if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                                    l = e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(n, "text", E({}, i, {
                                get: function() {
                                    return u
                                },
                                set: function(e) {
                                    u = "" + e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(n, "region", E({}, i, {
                                get: function() {
                                    return c
                                },
                                set: function(e) {
                                    c = e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(n, "vertical", E({}, i, {
                                get: function() {
                                    return d
                                },
                                set: function(e) {
                                    var t = function(e) {
                                        return "string" == typeof e && !!_[e.toLowerCase()] && e.toLowerCase()
                                    }(e);
                                    if (!1 === t) throw new SyntaxError("An invalid or illegal string was specified.");
                                    d = t, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(n, "snapToLines", E({}, i, {
                                get: function() {
                                    return f
                                },
                                set: function(e) {
                                    f = !!e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(n, "line", E({}, i, {
                                get: function() {
                                    return h
                                },
                                set: function(e) {
                                    if ("number" != typeof e && "auto" !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
                                    h = e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(n, "lineAlign", E({}, i, {
                                get: function() {
                                    return g
                                },
                                set: function(e) {
                                    var t = b(e);
                                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                                    g = t, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(n, "position", E({}, i, {
                                get: function() {
                                    return p
                                },
                                set: function(e) {
                                    if (e < 0 || 100 < e) throw new Error("Position must be between 0 and 100.");
                                    p = e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(n, "positionAlign", E({}, i, {
                                get: function() {
                                    return v
                                },
                                set: function(e) {
                                    var t = b(e);
                                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                                    v = t, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(n, "size", E({}, i, {
                                get: function() {
                                    return m
                                },
                                set: function(e) {
                                    if (e < 0 || 100 < e) throw new Error("Size must be between 0 and 100.");
                                    m = e, this.hasBeenReset = !0
                                }
                            })), Object.defineProperty(n, "align", E({}, i, {
                                get: function() {
                                    return y
                                },
                                set: function(e) {
                                    var t = b(e);
                                    if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                                    y = t, this.hasBeenReset = !0
                                }
                            })), n.displayState = void 0
                        }
                        if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
                        var _ = {
                                "": !0,
                                lr: !0,
                                rl: !0
                            },
                            t = {
                                start: !0,
                                middle: !0,
                                end: !0,
                                left: !0,
                                right: !0
                            };
                        return e.prototype.getCueAsHTML = function() {
                            return window.WebVTT.convertCueToDOMTree(window, this.text)
                        }, e
                    }(),
                    St = function() {
                        return {
                            decode: function(e) {
                                if (!e) return "";
                                if ("string" != typeof e) throw new Error("Error - expected string data.");
                                return decodeURIComponent(encodeURIComponent(e))
                            }
                        }
                    };
                D.prototype = {
                    set: function(e, t) {
                        this.get(e) || "" === t || (this.values[e] = t)
                    },
                    get: function(e, t, r) {
                        return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t
                    },
                    has: function(e) {
                        return e in this.values
                    },
                    alt: function(e, t, r) {
                        for (var n = 0; n < r.length; ++n)
                            if (t === r[n]) {
                                this.set(e, t);
                                break
                            }
                    },
                    integer: function(e, t) {
                        /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
                    },
                    percent: function(e, t) {
                        return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (t = parseFloat(t)) && t <= 100) && (this.set(e, t), !0)
                    }
                };
                var wt = new Tt(0, 0, 0),
                    Rt = "middle" === wt.align ? "middle" : "center";
                k.prototype = {
                    parse: function(e) {
                        function t() {
                            var e = n.buffer,
                                t = 0;
                            for (e = P(e); t < e.length && "\r" !== e[t] && "\n" !== e[t];) ++t;
                            var r = e.substr(0, t);
                            return "\r" === e[t] && ++t, "\n" === e[t] && ++t, n.buffer = e.substr(t), r
                        }
                        var n = this;
                        e && (n.buffer += n.decoder.decode(e, {
                            stream: !0
                        }));
                        try {
                            var r;
                            if ("INITIAL" === n.state) {
                                if (!/\r\n|\n/.test(n.buffer)) return this;
                                var i = (r = t()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                                if (!i || !i[0]) throw new Error("Malformed WebVTT signature.");
                                n.state = "HEADER"
                            }
                            for (var a = !1; n.buffer;) {
                                if (!/\r\n|\n/.test(n.buffer)) return this;
                                switch (a ? a = !1 : r = t(), n.state) {
                                    case "HEADER":
                                        /:/.test(r) ? function(e) {
                                            I(e, function(e, t) {}, /:/)
                                        }(r) : r || (n.state = "ID");
                                        continue;
                                    case "NOTE":
                                        r || (n.state = "ID");
                                        continue;
                                    case "ID":
                                        if (/^NOTE($|[ \t])/.test(r)) {
                                            n.state = "NOTE";
                                            break
                                        }
                                        if (!r) continue;
                                        if (n.cue = new Tt(0, 0, ""), n.state = "CUE", -1 === r.indexOf("--\x3e")) {
                                            n.cue.id = r;
                                            continue
                                        }
                                        case "CUE":
                                            try {
                                                C(r, n.cue, n.regionList)
                                            } catch (e) {
                                                n.cue = null, n.state = "BADCUE";
                                                continue
                                            }
                                            n.state = "CUETEXT";
                                            continue;
                                        case "CUETEXT":
                                            var o = -1 !== r.indexOf("--\x3e");
                                            if (!r || o && (a = !0)) {
                                                n.oncue && n.oncue(n.cue), n.cue = null, n.state = "ID";
                                                continue
                                            }
                                            n.cue.text && (n.cue.text += "\n"), n.cue.text += r;
                                            continue;
                                        case "BADCUE":
                                            r || (n.state = "ID");
                                            continue
                                }
                            }
                        } catch (e) {
                            "CUETEXT" === n.state && n.cue && n.oncue && n.oncue(n.cue), n.cue = null, n.state = "INITIAL" === n.state ? "BADWEBVTT" : "BADCUE"
                        }
                        return this
                    },
                    flush: function() {
                        try {
                            if (this.buffer += this.decoder.decode(), !this.cue && "HEADER" !== this.state || (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new Error("Malformed WebVTT signature.")
                        } catch (e) {
                            throw e
                        }
                        return this.onflush && this.onflush(), this
                    }
                };
                var At, Lt = k,
                    kt = {
                        42: 225,
                        92: 233,
                        94: 237,
                        95: 243,
                        96: 250,
                        123: 231,
                        124: 247,
                        125: 209,
                        126: 241,
                        127: 9608,
                        128: 174,
                        129: 176,
                        130: 189,
                        131: 191,
                        132: 8482,
                        133: 162,
                        134: 163,
                        135: 9834,
                        136: 224,
                        137: 32,
                        138: 232,
                        139: 226,
                        140: 234,
                        141: 238,
                        142: 244,
                        143: 251,
                        144: 193,
                        145: 201,
                        146: 211,
                        147: 218,
                        148: 220,
                        149: 252,
                        150: 8216,
                        151: 161,
                        152: 42,
                        153: 8217,
                        154: 9473,
                        155: 169,
                        156: 8480,
                        157: 8226,
                        158: 8220,
                        159: 8221,
                        160: 192,
                        161: 194,
                        162: 199,
                        163: 200,
                        164: 202,
                        165: 203,
                        166: 235,
                        167: 206,
                        168: 207,
                        169: 239,
                        170: 212,
                        171: 217,
                        172: 249,
                        173: 219,
                        174: 171,
                        175: 187,
                        176: 195,
                        177: 227,
                        178: 205,
                        179: 204,
                        180: 236,
                        181: 210,
                        182: 242,
                        183: 213,
                        184: 245,
                        185: 123,
                        186: 125,
                        187: 92,
                        188: 94,
                        189: 95,
                        190: 124,
                        191: 8764,
                        192: 196,
                        193: 228,
                        194: 214,
                        195: 246,
                        196: 223,
                        197: 165,
                        198: 164,
                        199: 9475,
                        200: 197,
                        201: 229,
                        202: 216,
                        203: 248,
                        204: 9487,
                        205: 9491,
                        206: 9495,
                        207: 9499
                    },
                    Dt = function(e) {
                        var t = e;
                        return kt.hasOwnProperty(e) && (t = kt[e]), String.fromCharCode(t)
                    },
                    It = {
                        17: 1,
                        18: 3,
                        21: 5,
                        22: 7,
                        23: 9,
                        16: 11,
                        19: 12,
                        20: 14
                    },
                    Ct = {
                        17: 2,
                        18: 4,
                        21: 6,
                        22: 8,
                        23: 10,
                        19: 13,
                        20: 15
                    },
                    Pt = {
                        25: 1,
                        26: 3,
                        29: 5,
                        30: 7,
                        31: 9,
                        24: 11,
                        27: 12,
                        28: 14
                    },
                    xt = {
                        25: 2,
                        26: 4,
                        29: 6,
                        30: 8,
                        31: 10,
                        27: 13,
                        28: 15
                    },
                    Ot = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
                ! function(e) {
                    e[e.ERROR = 0] = "ERROR", e[e.TEXT = 1] = "TEXT", e[e.WARNING = 2] = "WARNING", e[e.INFO = 2] = "INFO", e[e.DEBUG = 3] = "DEBUG", e[e.DATA = 3] = "DATA"
                }(At = At || {});
                var Nt, Mt = {
                        verboseFilter: {
                            DATA: 3,
                            DEBUG: 3,
                            INFO: 2,
                            WARNING: 2,
                            TEXT: 1,
                            ERROR: 0
                        },
                        time: null,
                        verboseLevel: 0,
                        setTime: function(e) {
                            this.time = e
                        },
                        log: function(e, t) {
                            this.verboseFilter[e], this.verboseLevel
                        }
                    },
                    Ft = function(e) {
                        for (var t = [], r = 0; r < e.length; r++) t.push(e[r].toString(16));
                        return t
                    },
                    Ut = function() {
                        function e(e, t, r, n, i) {
                            this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = e || "white", this.underline = t || !1, this.italics = r || !1, this.background = n || "black", this.flash = i || !1
                        }
                        var t = e.prototype;
                        return t.reset = function() {
                            this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
                        }, t.setStyles = function(e) {
                            for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
                                var n = t[r];
                                e.hasOwnProperty(n) && (this[n] = e[n])
                            }
                        }, t.isDefault = function() {
                            return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                        }, t.equals = function(e) {
                            return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
                        }, t.copy = function(e) {
                            this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
                        }, t.toString = function() {
                            return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                        }, e
                    }(),
                    Bt = function() {
                        function e(e, t, r, n, i, a) {
                            this.uchar = void 0, this.penState = void 0, this.uchar = e || " ", this.penState = new Ut(t, r, n, i, a)
                        }
                        var t = e.prototype;
                        return t.reset = function() {
                            this.uchar = " ", this.penState.reset()
                        }, t.setChar = function(e, t) {
                            this.uchar = e, this.penState.copy(t)
                        }, t.setPenState = function(e) {
                            this.penState.copy(e)
                        }, t.equals = function(e) {
                            return this.uchar === e.uchar && this.penState.equals(e.penState)
                        }, t.copy = function(e) {
                            this.uchar = e.uchar, this.penState.copy(e.penState)
                        }, t.isEmpty = function() {
                            return " " === this.uchar && this.penState.isDefault()
                        }, e
                    }(),
                    Gt = function() {
                        function e() {
                            this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.chars = [];
                            for (var e = 0; e < 100; e++) this.chars.push(new Bt);
                            this.pos = 0, this.currPenState = new Ut
                        }
                        var t = e.prototype;
                        return t.equals = function(e) {
                            for (var t = !0, r = 0; r < 100; r++)
                                if (!this.chars[r].equals(e.chars[r])) {
                                    t = !1;
                                    break
                                } return t
                        }, t.copy = function(e) {
                            for (var t = 0; t < 100; t++) this.chars[t].copy(e.chars[t])
                        }, t.isEmpty = function() {
                            for (var e = !0, t = 0; t < 100; t++)
                                if (!this.chars[t].isEmpty()) {
                                    e = !1;
                                    break
                                } return e
                        }, t.setCursor = function(e) {
                            this.pos !== e && (this.pos = e), this.pos < 0 ? (Mt.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : 100 < this.pos && (Mt.log("ERROR", "Too large cursor position " + this.pos), this.pos = 100)
                        }, t.moveCursor = function(e) {
                            var t = this.pos + e;
                            if (1 < e)
                                for (var r = this.pos + 1; r < t + 1; r++) this.chars[r].setPenState(this.currPenState);
                            this.setCursor(t)
                        }, t.backSpace = function() {
                            this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
                        }, t.insertChar = function(e) {
                            144 <= e && this.backSpace();
                            var t = Dt(e);
                            100 <= this.pos ? Mt.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1))
                        }, t.clearFromPos = function(e) {
                            var t;
                            for (t = e; t < 100; t++) this.chars[t].reset()
                        }, t.clear = function() {
                            this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
                        }, t.clearToEndOfRow = function() {
                            this.clearFromPos(this.pos)
                        }, t.getTextString = function() {
                            for (var e = [], t = !0, r = 0; r < 100; r++) {
                                var n = this.chars[r].uchar;
                                " " !== n && (t = !1), e.push(n)
                            }
                            return t ? "" : e.join("")
                        }, t.setPenStyles = function(e) {
                            this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState)
                        }, e
                    }(),
                    jt = function() {
                        function e() {
                            this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.rows = [];
                            for (var e = 0; e < 15; e++) this.rows.push(new Gt);
                            this.currRow = 14, this.nrRollUpRows = null, this.reset()
                        }
                        var t = e.prototype;
                        return t.reset = function() {
                            for (var e = 0; e < 15; e++) this.rows[e].clear();
                            this.currRow = 14
                        }, t.equals = function(e) {
                            for (var t = !0, r = 0; r < 15; r++)
                                if (!this.rows[r].equals(e.rows[r])) {
                                    t = !1;
                                    break
                                } return t
                        }, t.copy = function(e) {
                            for (var t = 0; t < 15; t++) this.rows[t].copy(e.rows[t])
                        }, t.isEmpty = function() {
                            for (var e = !0, t = 0; t < 15; t++)
                                if (!this.rows[t].isEmpty()) {
                                    e = !1;
                                    break
                                } return e
                        }, t.backSpace = function() {
                            this.rows[this.currRow].backSpace()
                        }, t.clearToEndOfRow = function() {
                            this.rows[this.currRow].clearToEndOfRow()
                        }, t.insertChar = function(e) {
                            this.rows[this.currRow].insertChar(e)
                        }, t.setPen = function(e) {
                            this.rows[this.currRow].setPenStyles(e)
                        }, t.moveCursor = function(e) {
                            this.rows[this.currRow].moveCursor(e)
                        }, t.setCursor = function(e) {
                            Mt.log("INFO", "setCursor: " + e), this.rows[this.currRow].setCursor(e)
                        }, t.setPAC = function(e) {
                            Mt.log("INFO", "pacData = " + JSON.stringify(e));
                            var t = e.row - 1;
                            if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
                                for (var r = 0; r < 15; r++) this.rows[r].clear();
                                var n = this.currRow + 1 - this.nrRollUpRows,
                                    i = this.lastOutputScreen;
                                if (i) {
                                    var a = i.rows[n].cueStartTime;
                                    if (a && Mt.time && a < Mt.time)
                                        for (var o = 0; o < this.nrRollUpRows; o++) this.rows[t - this.nrRollUpRows + o + 1].copy(i.rows[n + o])
                                }
                            }
                            this.currRow = t;
                            var s = this.rows[this.currRow];
                            if (null !== e.indent) {
                                var l = e.indent,
                                    u = Math.max(l - 1, 0);
                                s.setCursor(e.indent), e.color = s.chars[u].penState.foreground
                            }
                            var c = {
                                foreground: e.color,
                                underline: e.underline,
                                italics: e.italics,
                                background: "black",
                                flash: !1
                            };
                            this.setPen(c)
                        }, t.setBkgData = function(e) {
                            Mt.log("INFO", "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
                        }, t.setRollUpRows = function(e) {
                            this.nrRollUpRows = e
                        }, t.rollUp = function() {
                            if (null !== this.nrRollUpRows) {
                                Mt.log("TEXT", this.getDisplayText());
                                var e = this.currRow + 1 - this.nrRollUpRows,
                                    t = this.rows.splice(e, 1)[0];
                                t.clear(), this.rows.splice(this.currRow, 0, t), Mt.log("INFO", "Rolling up")
                            } else Mt.log("DEBUG", "roll_up but nrRollUpRows not set yet")
                        }, t.getDisplayText = function(e) {
                            e = e || !1;
                            for (var t = [], r = "", n = -1, i = 0; i < 15; i++) {
                                var a = this.rows[i].getTextString();
                                a && (n = i + 1, e ? t.push("Row " + n + ": '" + a + "'") : t.push(a.trim()))
                            }
                            return 0 < t.length && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")), r
                        }, t.getTextAndFormat = function() {
                            return this.rows
                        }, e
                    }(),
                    Vt = function() {
                        function e(e, t) {
                            this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.lastCueEndTime = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new jt, this.nonDisplayedMemory = new jt, this.lastOutputScreen = new jt, this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                        }
                        var t = e.prototype;
                        return t.reset = function() {
                            this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
                        }, t.getHandler = function() {
                            return this.outputFilter
                        }, t.setHandler = function(e) {
                            this.outputFilter = e
                        }, t.setPAC = function(e) {
                            this.writeScreen.setPAC(e)
                        }, t.setBkgData = function(e) {
                            this.writeScreen.setBkgData(e)
                        }, t.setMode = function(e) {
                            e !== this.mode && (this.mode = e, Mt.log("INFO", "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
                        }, t.insertChars = function(e) {
                            for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
                            var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                            Mt.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (Mt.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
                        }, t.ccRCL = function() {
                            Mt.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
                        }, t.ccBS = function() {
                            Mt.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                        }, t.ccAOF = function() {}, t.ccAON = function() {}, t.ccDER = function() {
                            Mt.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
                        }, t.ccRU = function(e) {
                            Mt.log("INFO", "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
                        }, t.ccFON = function() {
                            Mt.log("INFO", "FON - Flash On"), this.writeScreen.setPen({
                                flash: !0
                            })
                        }, t.ccRDC = function() {
                            Mt.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
                        }, t.ccTR = function() {
                            Mt.log("INFO", "TR"), this.setMode("MODE_TEXT")
                        }, t.ccRTD = function() {
                            Mt.log("INFO", "RTD"), this.setMode("MODE_TEXT")
                        }, t.ccEDM = function() {
                            Mt.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
                        }, t.ccCR = function() {
                            Mt.log("INFO", "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
                        }, t.ccENM = function() {
                            Mt.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
                        }, t.ccEOC = function() {
                            if (Mt.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                                var e = this.displayedMemory;
                                this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, Mt.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                            }
                            this.outputDataUpdate(!0)
                        }, t.ccTO = function(e) {
                            Mt.log("INFO", "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e)
                        }, t.ccMIDROW = function(e) {
                            var t = {
                                flash: !1
                            };
                            if (t.underline = e % 2 == 1, t.italics = 46 <= e, t.italics) t.foreground = "white";
                            else {
                                var r = Math.floor(e / 2) - 16;
                                t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
                            }
                            Mt.log("INFO", "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
                        }, t.outputDataUpdate = function(e) {
                            void 0 === e && (e = !1);
                            var t = Mt.time;
                            null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
                        }, t.cueSplitAtTime = function(e) {
                            this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
                        }, e
                    }(),
                    Kt = function() {
                        function e(e, t, r) {
                            this.field = void 0, this.outputs = void 0, this.channels = void 0, this.currChNr = void 0, this.lastCmdA = void 0, this.lastCmdB = void 0, this.lastTime = void 0, this.dataCounters = void 0, this.field = e || 1, this.outputs = [t, r], this.channels = [new Vt(1, t), new Vt(2, r)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.lastTime = null, this.dataCounters = {
                                padding: 0,
                                char: 0,
                                cmd: 0,
                                other: 0
                            }
                        }
                        var t = e.prototype;
                        return t.getHandler = function(e) {
                            return this.channels[e].getHandler()
                        }, t.setHandler = function(e, t) {
                            this.channels[e].setHandler(t)
                        }, t.addData = function(e, t) {
                            var r, n, i, a = !1;
                            this.lastTime = e, Mt.setTime(e);
                            for (var o = 0; o < t.length; o += 2)
                                if (n = 127 & t[o], i = 127 & t[o + 1], 0 != n || 0 != i) {
                                    if (Mt.log("DATA", "[" + Ft([t[o], t[o + 1]]) + "] -> (" + Ft([n, i]) + ")"), !(r = (r = (r = (r = this.parseCmd(n, i)) || this.parseMidrow(n, i)) || this.parsePAC(n, i)) || this.parseBackgroundAttributes(n, i)) && (a = this.parseChars(n, i)))
                                        if (this.currChNr && 0 <= this.currChNr) {
                                            var s = this.channels[this.currChNr - 1];
                                            s.insertChars(a)
                                        } else Mt.log("WARNING", "No channel found yet. TEXT-MODE?");
                                    r ? this.dataCounters.cmd += 2 : a ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, Mt.log("WARNING", "Couldn't parse cleaned data " + Ft([n, i]) + " orig: " + Ft([t[o], t[o + 1]])))
                                } else this.dataCounters.padding += 2
                        }, t.parseCmd = function(e, t) {
                            var r = null,
                                n = (20 === e || 28 === e) && 32 <= t && t <= 47,
                                i = (23 === e || 31 === e) && 33 <= t && t <= 35;
                            if (!n && !i) return !1;
                            if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, Mt.log("DEBUG", "Repeated command (" + Ft([e, t]) + ") is dropped"), !0;
                            r = 20 === e || 23 === e ? 1 : 2;
                            var a = this.channels[r - 1];
                            return 20 === e || 28 === e ? 32 === t ? a.ccRCL() : 33 === t ? a.ccBS() : 34 === t ? a.ccAOF() : 35 === t ? a.ccAON() : 36 === t ? a.ccDER() : 37 === t ? a.ccRU(2) : 38 === t ? a.ccRU(3) : 39 === t ? a.ccRU(4) : 40 === t ? a.ccFON() : 41 === t ? a.ccRDC() : 42 === t ? a.ccTR() : 43 === t ? a.ccRTD() : 44 === t ? a.ccEDM() : 45 === t ? a.ccCR() : 46 === t ? a.ccENM() : 47 === t && a.ccEOC() : a.ccTO(t - 32), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
                        }, t.parseMidrow = function(e, t) {
                            var r = null;
                            return (17 === e || 25 === e) && 32 <= t && t <= 47 && ((r = 17 === e ? 1 : 2) !== this.currChNr ? (Mt.log("ERROR", "Mismatch channel in midrow parsing"), !1) : (this.channels[r - 1].ccMIDROW(t), Mt.log("DEBUG", "MIDROW (" + Ft([e, t]) + ")"), !0))
                        }, t.parsePAC = function(e, t) {
                            var r = null,
                                n = null,
                                i = (17 <= e && e <= 23 || 25 <= e && e <= 31) && 64 <= t && t <= 127,
                                a = (16 === e || 24 === e) && 64 <= t && t <= 95;
                            if (!i && !a) return !1;
                            if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null, !(this.lastCmdB = null);
                            r = e <= 23 ? 1 : 2, n = 64 <= t && t <= 95 ? 1 == r ? It[e] : Pt[e] : 1 == r ? Ct[e] : xt[e];
                            var o = this.interpretPAC(n, t);
                            return this.channels[r - 1].setPAC(o), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = r, !0
                        }, t.interpretPAC = function(e, t) {
                            var r = t,
                                n = {
                                    color: null,
                                    italics: !1,
                                    indent: null,
                                    underline: !1,
                                    row: e
                                };
                            return r = 95 < t ? t - 96 : t - 64, n.underline = 1 == (1 & r), r <= 13 ? n.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (n.italics = !0, n.color = "white") : n.indent = 4 * Math.floor((r - 16) / 2), n
                        }, t.parseChars = function(e, t) {
                            var r = null,
                                n = null,
                                i = null;
                            if (17 <= (i = 25 <= e ? (r = 2, e - 8) : (r = 1, e)) && i <= 19) {
                                var a = t;
                                a = 17 === i ? t + 80 : 18 === i ? t + 112 : t + 144, Mt.log("INFO", "Special char '" + Dt(a) + "' in channel " + r), n = [a]
                            } else 32 <= e && e <= 127 && (n = 0 === t ? [e] : [e, t]);
                            if (n) {
                                var o = Ft(n);
                                Mt.log("DEBUG", "Char codes =  " + o.join(",")), this.lastCmdA = null, this.lastCmdB = null
                            }
                            return n
                        }, t.parseBackgroundAttributes = function(e, t) {
                            var r, n, i, a = (16 === e || 24 === e) && 32 <= t && t <= 47,
                                o = (23 === e || 31 === e) && 45 <= t && t <= 47;
                            return !(!a && !o || (r = {}, 16 === e || 24 === e ? (n = Math.floor((t - 32) / 2), r.background = Ot[n], t % 2 == 1 && (r.background = r.background + "_semi")) : 45 === t ? r.background = "transparent" : (r.foreground = "black", 47 === t && (r.underline = !0)), i = e < 24 ? 1 : 2, this.channels[i - 1].setBkgData(r), this.lastCmdA = null, this.lastCmdB = null))
                        }, t.reset = function() {
                            for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].reset();
                            this.lastCmdA = null, this.lastCmdB = null
                        }, t.cueSplitAtTime = function(e) {
                            for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e)
                        }, e
                    }(),
                    Ht = Kt,
                    Wt = function() {
                        function e(e, t) {
                            this.timelineController = void 0, this.trackName = void 0, this.startTime = void 0, this.endTime = void 0, this.screen = void 0, this.timelineController = e, this.trackName = t, this.startTime = null, this.endTime = null, this.screen = null
                        }
                        var t = e.prototype;
                        return t.dispatchCue = function() {
                            null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen), this.startTime = null)
                        }, t.newCue = function(e, t, r) {
                            (null === this.startTime || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName)
                        }, e
                    }(),
                    Yt = function(e, t, r) {
                        return e.substr(r || 0, t.length) === t
                    },
                    zt = function(e) {
                        for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
                        return (t >>> 0).toString()
                    },
                    qt = {
                        parse: function(e, t, n, i, r, a) {
                            var o, s = Object(We.utf8ArrayToStr)(new Uint8Array(e)).trim().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n"),
                                l = "00:00.000",
                                u = 0,
                                c = 0,
                                d = 0,
                                f = [],
                                h = !0,
                                g = !1,
                                p = new Lt;
                            p.oncue = function(e) {
                                var t = n[i],
                                    r = n.ccOffset;
                                t && t.new && (void 0 !== c ? r = n.ccOffset = t.start : function(e, t, r) {
                                    var n = e[t],
                                        i = e[n.prevCC];
                                    if (!i || !i.new && n.new) return e.ccOffset = e.presentationOffset = n.start, n.new = !1;
                                    for (; i && i.new;) e.ccOffset += n.start - i.start, n.new = !1, i = e[(n = i).prevCC];
                                    e.presentationOffset = r
                                }(n, i, d)), d && (r = d - n.presentationOffset), g && (e.startTime += r - c, e.endTime += r - c), e.id = zt(e.startTime.toString()) + zt(e.endTime.toString()) + zt(e.text), e.text = decodeURIComponent(encodeURIComponent(e.text)), 0 < e.endTime && f.push(e)
                            }, p.onparsingerror = function(e) {
                                o = e
                            }, p.onflush = function() {
                                o && a ? a(o) : r(f)
                            }, s.forEach(function(e) {
                                if (h) {
                                    if (Yt(e, "X-TIMESTAMP-MAP=")) {
                                        g = !(h = !1), e.substr(16).split(",").forEach(function(e) {
                                            Yt(e, "LOCAL:") ? l = e.substr(6) : Yt(e, "MPEGTS:") && (u = parseInt(e.substr(7)))
                                        });
                                        try {
                                            t + (9e4 * n[i].start || 0) < 0 && (t += 8589934592), u -= t, c = function(e) {
                                                var t = parseInt(e.substr(-3)),
                                                    r = parseInt(e.substr(-6, 2)),
                                                    n = parseInt(e.substr(-9, 2)),
                                                    i = e.length > 9 ? parseInt(e.substr(0, e.indexOf(":"))) : 0;
                                                if (!(Object(Y.isFiniteNumber)(t) && Object(Y.isFiniteNumber)(r) && Object(Y.isFiniteNumber)(n) && Object(Y.isFiniteNumber)(i))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + e);
                                                return t += 1e3 * r, t += 6e4 * n, t += 36e5 * i
                                            }(l) / 1e3, d = u / 9e4
                                        } catch (e) {
                                            g = !1, o = e
                                        }
                                        return
                                    }
                                    "" === e && (h = !1)
                                }
                                p.parse(e + "\n")
                            }), p.flush()
                        }
                    },
                    Xt = qt,
                    Zt = function(i) {
                        function e(e) {
                            var t;
                            if ((t = i.call(this, e, z.default.MEDIA_ATTACHING, z.default.MEDIA_DETACHING, z.default.FRAG_PARSING_USERDATA, z.default.FRAG_DECRYPTED, z.default.MANIFEST_LOADING, z.default.MANIFEST_LOADED, z.default.FRAG_LOADED, z.default.INIT_PTS_FOUND) || this).media = null, t.config = void 0, t.enabled = !0, t.Cues = void 0, t.textTracks = [], t.tracks = [], t.initPTS = [], t.unparsedVttFrags = [], t.cueRanges = [], t.captionsTracks = {}, t.captionsProperties = void 0, t.cea608Parser = void 0, t.lastSn = -1, t.prevCC = -1, t.vttCCs = null, t.hls = e, t.config = e.config, t.Cues = e.config.cueHandler, t.captionsProperties = {
                                    textTrack1: {
                                        label: t.config.captionsTextTrack1Label,
                                        languageCode: t.config.captionsTextTrack1LanguageCode
                                    },
                                    textTrack2: {
                                        label: t.config.captionsTextTrack2Label,
                                        languageCode: t.config.captionsTextTrack2LanguageCode
                                    }
                                }, t.config.enableCEA708Captions) {
                                var r = new Wt(O(t), "textTrack1"),
                                    n = new Wt(O(t), "textTrack2");
                                t.cea608Parser = new Ht(0, r, n)
                            }
                            return t
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, i);
                        var t = e.prototype;
                        return t.addCues = function(e, t, r, n) {
                            for (var i = this.cueRanges, a = !1, o = i.length; o--;) {
                                var s = i[o],
                                    l = (u = s[0], c = s[1], d = t, f = r, Math.min(c, f) - Math.max(u, d));
                                if (0 <= l && (s[0] = Math.min(s[0], t), s[1] = Math.max(s[1], r), a = !0, .5 < l / (r - t))) return
                            }
                            var u, c, d, f;
                            a || i.push([t, r]), this.Cues.newCue(this.captionsTracks[e], t, r, n)
                        }, t.onInitPtsFound = function(e) {
                            var t = this,
                                r = e.frag,
                                n = e.id,
                                i = e.initPTS,
                                a = this.unparsedVttFrags;
                            "main" === n && (this.initPTS[r.cc] = i), a.length && (this.unparsedVttFrags = [], a.forEach(function(e) {
                                t.onFragLoaded(e)
                            }))
                        }, t.getExistingTrack = function(e) {
                            var t = this.media;
                            if (t)
                                for (var r = 0; r < t.textTracks.length; r++) {
                                    var n = t.textTracks[r];
                                    if (n[e]) return n
                                }
                            return null
                        }, t.createCaptionsTrack = function(e) {
                            var t = this.captionsProperties,
                                r = this.captionsTracks,
                                n = this.media,
                                i = t[e],
                                a = i.label,
                                o = i.languageCode;
                            if (!r[e]) {
                                var s = this.getExistingTrack(e);
                                if (s) r[e] = s, S(r[e]), T(r[e], n);
                                else {
                                    var l = this.createTextTrack("captions", a, o);
                                    l && (l[e] = !0, r[e] = l)
                                }
                            }
                        }, t.createTextTrack = function(e, t, r) {
                            var n = this.media;
                            if (n) return n.addTextTrack(e, t, r)
                        }, t.destroy = function() {
                            i.prototype.destroy.call(this)
                        }, t.onMediaAttaching = function(e) {
                            this.media = e.media, this._cleanTracks()
                        }, t.onMediaDetaching = function() {
                            var t = this.captionsTracks;
                            Object.keys(t).forEach(function(e) {
                                S(t[e]), delete t[e]
                            })
                        }, t.onManifestLoading = function() {
                            this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
                                ccOffset: 0,
                                presentationOffset: 0,
                                0: {
                                    start: 0,
                                    prevCC: -1,
                                    new: !1
                                }
                            }, this._cleanTracks()
                        }, t._cleanTracks = function() {
                            var e = this.media;
                            if (e) {
                                var t = e.textTracks;
                                if (t)
                                    for (var r = 0; r < t.length; r++) S(t[r])
                            }
                        }, t.onManifestLoaded = function(e) {
                            var s = this;
                            if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.cueRanges = [], this.config.enableWebVTT) {
                                this.tracks = e.subtitles || [];
                                var l = this.media ? this.media.textTracks : [];
                                this.tracks.forEach(function(e, t) {
                                    var r, n, i;
                                    if (t < l.length) {
                                        for (var a = null, o = 0; o < l.length; o++)
                                            if (n = l[o], i = e, n && n.label === i.name && !n.textTrack1 && !n.textTrack2) {
                                                a = l[o];
                                                break
                                            } a && (r = a)
                                    }
                                    r = r || s.createTextTrack("subtitles", e.name, e.lang), e.default ? r.mode = s.hls.subtitleDisplay ? "showing" : "hidden" : r.mode = "disabled", s.textTracks.push(r)
                                })
                            }
                        }, t.onFragLoaded = function(e) {
                            var t = e.frag,
                                r = e.payload,
                                n = this.cea608Parser,
                                i = this.initPTS,
                                a = this.lastSn,
                                o = this.unparsedVttFrags;
                            if ("main" === t.type) {
                                var s = t.sn;
                                t.sn !== a + 1 && n && n.reset(), this.lastSn = s
                            } else if ("subtitle" === t.type)
                                if (r.byteLength) {
                                    if (!Object(Y.isFiniteNumber)(i[t.cc])) return o.push(e), void(i.length && this.hls.trigger(z.default.SUBTITLE_FRAG_PROCESSED, {
                                        success: !1,
                                        frag: t
                                    }));
                                    var l = t.decryptdata;
                                    null != l && null != l.key && "AES-128" === l.method || this._parseVTTs(t, r)
                                } else this.hls.trigger(z.default.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: t
                                })
                        }, t._parseVTTs = function(t, e) {
                            var r = this.hls,
                                n = this.prevCC,
                                i = this.textTracks,
                                a = this.vttCCs;
                            a[t.cc] || (a[t.cc] = {
                                start: t.start,
                                prevCC: n,
                                new: !0
                            }, this.prevCC = t.cc), Xt.parse(e, this.initPTS[t.cc], a, t.cc, function(e) {
                                var n = i[t.level];
                                "disabled" !== n.mode ? (e.forEach(function(t) {
                                    if (!n.cues.getCueById(t.id)) try {
                                        if (n.addCue(t), !n.cues.getCueById(t.id)) throw new Error("addCue is failed for: " + t)
                                    } catch (e) {
                                        q.logger.debug("Failed occurred on adding cues: " + e);
                                        var r = new window.TextTrackCue(t.startTime, t.endTime, t.text);
                                        r.id = t.id, n.addCue(r)
                                    }
                                }), r.trigger(z.default.SUBTITLE_FRAG_PROCESSED, {
                                    success: !0,
                                    frag: t
                                })) : r.trigger(z.default.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: t
                                })
                            }, function(e) {
                                q.logger.log("Failed to parse VTT cue: " + e), r.trigger(z.default.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: t
                                })
                            })
                        }, t.onFragDecrypted = function(e) {
                            var t = e.frag,
                                r = e.payload;
                            if ("subtitle" === t.type) {
                                if (!Object(Y.isFiniteNumber)(this.initPTS[t.cc])) return void this.unparsedVttFrags.push(e);
                                this._parseVTTs(t, r)
                            }
                        }, t.onFragParsingUserdata = function(e) {
                            if (this.enabled && this.cea608Parser)
                                for (var t = 0; t < e.samples.length; t++) {
                                    var r = e.samples[t].bytes;
                                    if (r) {
                                        var n = this.extractCea608Data(r);
                                        this.cea608Parser.addData(e.samples[t].pts, n)
                                    }
                                }
                        }, t.extractCea608Data = function(e) {
                            for (var t, r, n, i, a, o = 31 & e[0], s = 2, l = [], u = 0; u < o; u++) t = e[s++], r = 127 & e[s++], n = 127 & e[s++], i = 0 != (4 & t), a = 3 & t, 0 == r && 0 == n || i && 0 == a && (l.push(r), l.push(n));
                            return l
                        }, e
                    }(J),
                    Jt = Zt,
                    Qt = function(r) {
                        function e(e) {
                            var t;
                            return (t = r.call(this, e, z.default.MEDIA_ATTACHED, z.default.MEDIA_DETACHING, z.default.MANIFEST_LOADED, z.default.SUBTITLE_TRACK_LOADED) || this).tracks = [], t.trackId = -1, t.media = null, t.stopped = !0, t.subtitleDisplay = !0, t.queuedDefaultTrack = null, t
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, r);
                        var t = e.prototype;
                        return t.destroy = function() {
                                J.prototype.destroy.call(this)
                            }, t.onMediaAttached = function(e) {
                                var t = this;
                                this.media = e.media, this.media && (Object(Y.isFiniteNumber)(this.queuedDefaultTrack) && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = null), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function() {
                                    t.trackChangeListener()
                                }, 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
                            }, t.onMediaDetaching = function() {
                                this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), Object(Y.isFiniteNumber)(this.subtitleTrack) && (this.queuedDefaultTrack = this.subtitleTrack), M(this.media.textTracks).forEach(function(e) {
                                    S(e)
                                }), this.subtitleTrack = -1, this.media = null)
                            }, t.onManifestLoaded = function(e) {
                                var t = this,
                                    r = e.subtitles || [];
                                this.tracks = r, this.hls.trigger(z.default.SUBTITLE_TRACKS_UPDATED, {
                                    subtitleTracks: r
                                }), r.forEach(function(e) {
                                    e.default && (t.media ? t.subtitleTrack = e.id : t.queuedDefaultTrack = e.id)
                                })
                            }, t.onSubtitleTrackLoaded = function(e) {
                                var t = this,
                                    r = e.id,
                                    n = e.details,
                                    i = this.trackId,
                                    a = this.tracks,
                                    o = a[i];
                                if (r >= a.length || r !== i || !o || this.stopped) this._clearReloadTimer();
                                else if (q.logger.log("subtitle track " + r + " loaded"), n.live) {
                                    var s = l(o.details, n, e.stats.trequest);
                                    q.logger.log("Reloading live subtitle playlist in " + s + "ms"), this.timer = setTimeout(function() {
                                        t._loadCurrentTrack()
                                    }, s)
                                } else this._clearReloadTimer()
                            }, t.startLoad = function() {
                                this.stopped = !1, this._loadCurrentTrack()
                            }, t.stopLoad = function() {
                                this.stopped = !0, this._clearReloadTimer()
                            }, t._clearReloadTimer = function() {
                                this.timer && (clearTimeout(this.timer), this.timer = null)
                            }, t._loadCurrentTrack = function() {
                                var e = this.trackId,
                                    t = this.tracks,
                                    r = this.hls,
                                    n = t[e];
                                e < 0 || !n || n.details && !n.details.live || (q.logger.log("Loading subtitle track " + e), r.trigger(z.default.SUBTITLE_TRACK_LOADING, {
                                    url: n.url,
                                    id: e
                                }))
                            }, t._toggleTrackModes = function(e) {
                                var t = this.media,
                                    r = this.subtitleDisplay,
                                    n = this.trackId;
                                if (t) {
                                    var i = M(t.textTracks);
                                    if (-1 === e)[].slice.call(i).forEach(function(e) {
                                        e.mode = "disabled"
                                    });
                                    else {
                                        var a = i[n];
                                        a && (a.mode = "disabled")
                                    }
                                    var o = i[e];
                                    o && (o.mode = r ? "showing" : "hidden")
                                }
                            }, t._setSubtitleTrackInternal = function(e) {
                                var t = this.hls,
                                    r = this.tracks;
                                !Object(Y.isFiniteNumber)(e) || e < -1 || e >= r.length || (this.trackId = e, q.logger.log("Switching to subtitle track " + e), t.trigger(z.default.SUBTITLE_TRACK_SWITCH, {
                                    id: e
                                }), this._loadCurrentTrack())
                            }, t._onTextTracksChanged = function() {
                                if (this.media) {
                                    for (var e = -1, t = M(this.media.textTracks), r = 0; r < t.length; r++)
                                        if ("hidden" === t[r].mode) e = r;
                                        else if ("showing" === t[r].mode) {
                                        e = r;
                                        break
                                    }
                                    this.subtitleTrack = e
                                }
                            },
                            function(e, t, r) {
                                t && N(e.prototype, t), r && N(e, r)
                            }(e, [{
                                key: "subtitleTracks",
                                get: function() {
                                    return this.tracks
                                }
                            }, {
                                key: "subtitleTrack",
                                get: function() {
                                    return this.trackId
                                },
                                set: function(e) {
                                    this.trackId !== e && (this._toggleTrackModes(e), this._setSubtitleTrackInternal(e))
                                }
                            }]), e
                    }(J),
                    $t = Qt,
                    er = r("./src/crypt/decrypter.js"),
                    tr = window,
                    rr = tr.performance,
                    nr = function(n) {
                        function e(e, t) {
                            var r;
                            return (r = n.call(this, e, z.default.MEDIA_ATTACHED, z.default.MEDIA_DETACHING, z.default.ERROR, z.default.KEY_LOADED, z.default.FRAG_LOADED, z.default.SUBTITLE_TRACKS_UPDATED, z.default.SUBTITLE_TRACK_SWITCH, z.default.SUBTITLE_TRACK_LOADED, z.default.SUBTITLE_FRAG_PROCESSED, z.default.LEVEL_UPDATED) || this).fragmentTracker = t, r.config = e.config, r.state = Be.STOPPED, r.tracks = [], r.tracksBuffered = [], r.currentTrackId = -1, r.decrypter = new er.default(e, e.config), r.lastAVStart = 0, r._onMediaSeeking = r.onMediaSeeking.bind(function(e) {
                                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(r)), r
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, n);
                        var t = e.prototype;
                        return t.onSubtitleFragProcessed = function(e) {
                            var t = e.frag,
                                r = e.success;
                            if (this.fragPrevious = t, this.state = Be.IDLE, r) {
                                var n = this.tracksBuffered[this.currentTrackId];
                                if (n) {
                                    for (var i, a = t.start, o = 0; o < n.length; o++)
                                        if (a >= n[o].start && a <= n[o].end) {
                                            i = n[o];
                                            break
                                        } var s = t.start + t.duration;
                                    i ? i.end = s : (i = {
                                        start: a,
                                        end: s
                                    }, n.push(i))
                                }
                            }
                        }, t.onMediaAttached = function(e) {
                            var t = e.media;
                            (this.media = t).addEventListener("seeking", this._onMediaSeeking), this.state = Be.IDLE
                        }, t.onMediaDetaching = function() {
                            var t = this;
                            this.media && (this.media.removeEventListener("seeking", this._onMediaSeeking), this.fragmentTracker.removeAllFragments(), this.currentTrackId = -1, this.tracks.forEach(function(e) {
                                t.tracksBuffered[e.id] = []
                            }), this.media = null, this.state = Be.STOPPED)
                        }, t.onError = function(e) {
                            var t = e.frag;
                            t && "subtitle" === t.type && (this.state = Be.IDLE)
                        }, t.onSubtitleTracksUpdated = function(e) {
                            var t = this;
                            q.logger.log("subtitle tracks updated"), this.tracksBuffered = [], this.tracks = e.subtitleTracks, this.tracks.forEach(function(e) {
                                t.tracksBuffered[e.id] = []
                            })
                        }, t.onSubtitleTrackSwitch = function(e) {
                            if (this.currentTrackId = e.id, this.tracks && this.tracks.length && -1 !== this.currentTrackId) {
                                var t = this.tracks[this.currentTrackId];
                                t && t.details && this.setInterval(500)
                            } else this.clearInterval()
                        }, t.onSubtitleTrackLoaded = function(e) {
                            var t = e.id,
                                r = e.details,
                                n = this.currentTrackId,
                                i = this.tracks,
                                a = i[n];
                            t >= i.length || t !== n || !a || (r.live && function(e, t, r) {
                                void 0 === r && (r = 0);
                                var n = -1;
                                s(e, t, function(e, t, r) {
                                    t.start = e.start, n = r
                                });
                                var i = t.fragments;
                                if (n < 0) return i.forEach(function(e) {
                                    e.start += r
                                });
                                for (var a = n + 1; a < i.length; a++) i[a].start = i[a - 1].start + i[a - 1].duration
                            }(a.details, r, this.lastAVStart), a.details = r, this.setInterval(500))
                        }, t.onKeyLoaded = function() {
                            this.state === Be.KEY_LOADING && (this.state = Be.IDLE)
                        }, t.onFragLoaded = function(e) {
                            var t = this.fragCurrent,
                                r = e.frag.decryptdata,
                                n = e.frag,
                                i = this.hls;
                            if (this.state === Be.FRAG_LOADING && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && 0 < e.payload.byteLength && r && r.key && "AES-128" === r.method) {
                                var a = rr.now();
                                this.decrypter.decrypt(e.payload, r.key.buffer, r.iv.buffer, function(e) {
                                    var t = rr.now();
                                    i.trigger(z.default.FRAG_DECRYPTED, {
                                        frag: n,
                                        payload: e,
                                        stats: {
                                            tstart: a,
                                            tdecrypt: t
                                        }
                                    })
                                })
                            }
                        }, t.onLevelUpdated = function(e) {
                            var t = e.details,
                                r = t.fragments;
                            this.lastAVStart = r.length ? r[0].start : 0
                        }, t.doTick = function() {
                            if (this.media) switch (this.state) {
                                case Be.IDLE:
                                    var e = this.config,
                                        t = this.currentTrackId,
                                        r = this.fragmentTracker,
                                        n = this.media,
                                        i = this.tracks;
                                    if (!i || !i[t] || !i[t].details) break;
                                    var a = e.maxBufferHole,
                                        o = e.maxFragLookUpTolerance,
                                        s = Math.min(e.maxBufferLength, e.maxMaxBufferLength),
                                        l = Ae.bufferedInfo(this._getBuffered(), n.currentTime, a),
                                        u = l.end,
                                        c = l.len,
                                        d = i[t].details,
                                        f = d.fragments,
                                        h = f.length,
                                        g = f[h - 1].start + f[h - 1].duration;
                                    if (s < c) return;
                                    var p, v = this.fragPrevious;
                                    (p = u < g ? (v && d.hasProgramDateTime && (p = m(f, v.endProgramDateTime, o)), p || y(v, f, u, o)) : f[h - 1]) && p.encrypted ? (q.logger.log("Loading key for " + p.sn), this.state = Be.KEY_LOADING, this.hls.trigger(z.default.KEY_LOADING, {
                                        frag: p
                                    })) : p && r.getState(p) === Se.NOT_LOADED && (this.fragCurrent = p, this.state = Be.FRAG_LOADING, this.hls.trigger(z.default.FRAG_LOADING, {
                                        frag: p
                                    }))
                            } else this.state = Be.IDLE
                        }, t.stopLoad = function() {
                            this.lastAVStart = 0, n.prototype.stopLoad.call(this)
                        }, t._getBuffered = function() {
                            return this.tracksBuffered[this.currentTrackId] || []
                        }, t.onMediaSeeking = function() {
                            this.fragPrevious = null
                        }, e
                    }(Ge);
                ! function(e) {
                    e.WIDEVINE = "com.widevine.alpha", e.PLAYREADY = "com.microsoft.playready"
                }(Nt = Nt || {});
                var ir = "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null,
                    ar = function(e, t) {
                        var r = {
                            videoCapabilities: []
                        };
                        return t.forEach(function(e) {
                            r.videoCapabilities.push({
                                contentType: 'video/mp4; codecs="' + e + '"'
                            })
                        }), [r]
                    },
                    or = function(r) {
                        function e(e) {
                            var t;
                            return (t = r.call(this, e, z.default.MEDIA_ATTACHED, z.default.MEDIA_DETACHED, z.default.MANIFEST_PARSED) || this)._widevineLicenseUrl = void 0, t._licenseXhrSetup = void 0, t._emeEnabled = void 0, t._requestMediaKeySystemAccess = void 0, t._config = void 0, t._mediaKeysList = [], t._media = null, t._hasSetMediaKeys = !1, t._requestLicenseFailureCount = 0, t._onMediaEncrypted = function(e) {
                                q.logger.log('Media is encrypted using "' + e.initDataType + '" init data type'), t._attemptSetMediaKeys(), t._generateRequestWithPreferredKeySession(e.initDataType, e.initData)
                            }, t._config = e.config, t._widevineLicenseUrl = t._config.widevineLicenseUrl, t._licenseXhrSetup = t._config.licenseXhrSetup, t._emeEnabled = t._config.emeEnabled, t._requestMediaKeySystemAccess = t._config.requestMediaKeySystemAccessFunc, t
                        }! function(e, t) {
                            e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                        }(e, r);
                        var t = e.prototype;
                        return t.getLicenseServerUrl = function(e) {
                                switch (e) {
                                    case Nt.WIDEVINE:
                                        if (!this._widevineLicenseUrl) break;
                                        return this._widevineLicenseUrl
                                }
                                throw new Error('no license server URL configured for key-system "' + e + '"')
                            }, t._attemptKeySystemAccess = function(t, e, r) {
                                var n = this,
                                    i = function(e, t, r) {
                                        switch (e) {
                                            case Nt.WIDEVINE:
                                                return ar(0, r);
                                            default:
                                                throw new Error("Unknown key-system: " + e)
                                        }
                                    }(t, 0, r);
                                q.logger.log("Requesting encrypted media key-system access"), this.requestMediaKeySystemAccess(t, i).then(function(e) {
                                    n._onMediaKeySystemAccessObtained(t, e)
                                }).catch(function(e) {
                                    q.logger.error('Failed to obtain key-system "' + t + '" access:', e)
                                })
                            }, t._onMediaKeySystemAccessObtained = function(t, e) {
                                var r = this;
                                q.logger.log('Access for key-system "' + t + '" obtained');
                                var n = {
                                    mediaKeysSessionInitialized: !1,
                                    mediaKeySystemAccess: e,
                                    mediaKeySystemDomain: t
                                };
                                this._mediaKeysList.push(n), e.createMediaKeys().then(function(e) {
                                    n.mediaKeys = e, q.logger.log('Media-keys created for key-system "' + t + '"'), r._onMediaKeysCreated()
                                }).catch(function(e) {
                                    q.logger.error("Failed to create media-keys:", e)
                                })
                            }, t._onMediaKeysCreated = function() {
                                var t = this;
                                this._mediaKeysList.forEach(function(e) {
                                    e.mediaKeysSession || (e.mediaKeysSession = e.mediaKeys.createSession(), t._onNewMediaKeySession(e.mediaKeysSession))
                                })
                            }, t._onNewMediaKeySession = function(t) {
                                var r = this;
                                q.logger.log("New key-system session " + t.sessionId), t.addEventListener("message", function(e) {
                                    r._onKeySessionMessage(t, e.message)
                                }, !1)
                            }, t._onKeySessionMessage = function(t, e) {
                                q.logger.log("Got EME message event, creating license request"), this._requestLicense(e, function(e) {
                                    q.logger.log("Received license data (length: " + (e ? e.byteLength : e) + "), updating key-session"), t.update(e)
                                })
                            }, t._attemptSetMediaKeys = function() {
                                if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element");
                                if (!this._hasSetMediaKeys) {
                                    var e = this._mediaKeysList[0];
                                    if (!e || !e.mediaKeys) return q.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(z.default.ERROR, {
                                        type: W.ErrorTypes.KEY_SYSTEM_ERROR,
                                        details: W.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                                        fatal: !0
                                    });
                                    q.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(e.mediaKeys), this._hasSetMediaKeys = !0
                                }
                            }, t._generateRequestWithPreferredKeySession = function(e, t) {
                                var r = this,
                                    n = this._mediaKeysList[0];
                                if (!n) return q.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(z.default.ERROR, {
                                    type: W.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: W.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                    fatal: !0
                                });
                                if (!n.mediaKeysSessionInitialized) {
                                    var i = n.mediaKeysSession;
                                    return i ? t ? (q.logger.log('Generating key-session request for "' + e + '" init data type'), n.mediaKeysSessionInitialized = !0, void i.generateRequest(e, t).then(function() {
                                        q.logger.debug("Key-session generation succeeded")
                                    }).catch(function(e) {
                                        q.logger.error("Error generating key-session request:", e), r.hls.trigger(z.default.ERROR, {
                                            type: W.ErrorTypes.KEY_SYSTEM_ERROR,
                                            details: W.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                            fatal: !1
                                        })
                                    })) : (q.logger.warn("Fatal: initData required for generating a key session is null"), void this.hls.trigger(z.default.ERROR, {
                                        type: W.ErrorTypes.KEY_SYSTEM_ERROR,
                                        details: W.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
                                        fatal: !0
                                    })) : (q.logger.error("Fatal: Media is encrypted but no key-session existing"), void this.hls.trigger(z.default.ERROR, {
                                        type: W.ErrorTypes.KEY_SYSTEM_ERROR,
                                        details: W.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                                        fatal: !0
                                    }))
                                }
                                q.logger.warn("Key-Session already initialized but requested again")
                            }, t._createLicenseXhr = function(e, t, r) {
                                var n = new XMLHttpRequest,
                                    i = this._licenseXhrSetup;
                                try {
                                    if (i) try {
                                        i(n, e)
                                    } catch (t) {
                                        n.open("POST", e, !0), i(n, e)
                                    }
                                    n.readyState || n.open("POST", e, !0)
                                } catch (e) {
                                    throw new Error("issue setting up KeySystem license XHR " + e)
                                }
                                return n.responseType = "arraybuffer", n.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, n, e, t, r), n
                            }, t._onLicenseRequestReadyStageChange = function(e, t, r, n) {
                                switch (e.readyState) {
                                    case 4:
                                        if (200 === e.status) this._requestLicenseFailureCount = 0, q.logger.log("License request succeeded"), "arraybuffer" !== e.responseType && q.logger.warn("xhr response type was not set to the expected arraybuffer for license request"), n(e.response);
                                        else {
                                            if (q.logger.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"), 3 < ++this._requestLicenseFailureCount) return void this.hls.trigger(z.default.ERROR, {
                                                type: W.ErrorTypes.KEY_SYSTEM_ERROR,
                                                details: W.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                                fatal: !0
                                            });
                                            var i = 3 - this._requestLicenseFailureCount + 1;
                                            q.logger.warn("Retrying license request, " + i + " attempts left"), this._requestLicense(r, n)
                                        }
                                }
                            }, t._generateLicenseRequestChallenge = function(e, t) {
                                switch (e.mediaKeySystemDomain) {
                                    case Nt.WIDEVINE:
                                        return t
                                }
                                throw new Error("unsupported key-system: " + e.mediaKeySystemDomain)
                            }, t._requestLicense = function(e, t) {
                                q.logger.log("Requesting content license for key-system");
                                var r = this._mediaKeysList[0];
                                if (!r) return q.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(z.default.ERROR, {
                                    type: W.ErrorTypes.KEY_SYSTEM_ERROR,
                                    details: W.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                                    fatal: !0
                                });
                                try {
                                    var n = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                                        i = this._createLicenseXhr(n, e, t);
                                    q.logger.log("Sending license request to URL: " + n);
                                    var a = this._generateLicenseRequestChallenge(r, e);
                                    i.send(a)
                                } catch (e) {
                                    q.logger.error("Failure requesting DRM license: " + e), this.hls.trigger(z.default.ERROR, {
                                        type: W.ErrorTypes.KEY_SYSTEM_ERROR,
                                        details: W.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                        fatal: !0
                                    })
                                }
                            }, t.onMediaAttached = function(e) {
                                if (this._emeEnabled) {
                                    var t = e.media;
                                    (this._media = t).addEventListener("encrypted", this._onMediaEncrypted)
                                }
                            }, t.onMediaDetached = function() {
                                this._media && (this._media.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null)
                            }, t.onManifestParsed = function(e) {
                                if (this._emeEnabled) {
                                    var t = e.levels.map(function(e) {
                                            return e.audioCodec
                                        }),
                                        r = e.levels.map(function(e) {
                                            return e.videoCodec
                                        });
                                    this._attemptKeySystemAccess(Nt.WIDEVINE, t, r)
                                }
                            },
                            function(e, t, r) {
                                t && F(e.prototype, t), r && F(e, r)
                            }(e, [{
                                key: "requestMediaKeySystemAccess",
                                get: function() {
                                    if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
                                    return this._requestMediaKeySystemAccess
                                }
                            }]), e
                    }(J),
                    sr = or,
                    lr = function(i) {
                        for (var e = 1; e < arguments.length; e++) {
                            var a = null != arguments[e] ? arguments[e] : {},
                                t = Object.keys(a);
                            "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(a, e).enumerable
                            }))), t.forEach(function(e) {
                                var t, r, n;
                                t = i, n = a[r = e], r in t ? Object.defineProperty(t, r, {
                                    value: n,
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0
                                }) : t[r] = n
                            })
                        }
                        return i
                    }({
                        autoStartLoad: !0,
                        startPosition: -1,
                        defaultAudioCodec: void 0,
                        debug: !1,
                        capLevelOnFPSDrop: !1,
                        capLevelToPlayerSize: !1,
                        initialLiveManifestSize: 1,
                        maxBufferLength: 30,
                        maxBufferSize: 6e7,
                        maxBufferHole: .5,
                        lowBufferWatchdogPeriod: .5,
                        highBufferWatchdogPeriod: 3,
                        nudgeOffset: .1,
                        nudgeMaxRetry: 3,
                        maxFragLookUpTolerance: .25,
                        liveSyncDurationCount: 3,
                        liveMaxLatencyDurationCount: 1 / 0,
                        liveSyncDuration: void 0,
                        liveMaxLatencyDuration: void 0,
                        liveDurationInfinity: !1,
                        liveBackBufferLength: 1 / 0,
                        maxMaxBufferLength: 600,
                        enableWorker: !0,
                        enableSoftwareAES: !0,
                        manifestLoadingTimeOut: 1e4,
                        manifestLoadingMaxRetry: 1,
                        manifestLoadingRetryDelay: 1e3,
                        manifestLoadingMaxRetryTimeout: 64e3,
                        startLevel: void 0,
                        levelLoadingTimeOut: 1e4,
                        levelLoadingMaxRetry: 4,
                        levelLoadingRetryDelay: 1e3,
                        levelLoadingMaxRetryTimeout: 64e3,
                        fragLoadingTimeOut: 2e4,
                        fragLoadingMaxRetry: 6,
                        fragLoadingRetryDelay: 1e3,
                        fragLoadingMaxRetryTimeout: 64e3,
                        startFragPrefetch: !1,
                        fpsDroppedMonitoringPeriod: 5e3,
                        fpsDroppedMonitoringThreshold: .2,
                        appendErrorMaxRetry: 3,
                        loader: pt,
                        fLoader: void 0,
                        pLoader: void 0,
                        xhrSetup: void 0,
                        licenseXhrSetup: void 0,
                        abrController: tt,
                        bufferController: it,
                        capLevelController: ot,
                        fpsController: ct,
                        stretchShortVideoTrack: !1,
                        maxAudioFramesDrift: 1,
                        forceKeyFrameOnDiscontinuity: !0,
                        abrEwmaFastLive: 3,
                        abrEwmaSlowLive: 9,
                        abrEwmaFastVoD: 3,
                        abrEwmaSlowVoD: 9,
                        abrEwmaDefaultEstimate: 5e5,
                        abrBandWidthFactor: .95,
                        abrBandWidthUpFactor: .7,
                        abrMaxWithRealBitrate: !1,
                        maxStarvationDelay: 4,
                        maxLoadingDelay: 4,
                        minAutoBitrate: 0,
                        emeEnabled: !1,
                        widevineLicenseUrl: void 0,
                        requestMediaKeySystemAccessFunc: ir
                    }, {
                        cueHandler: j,
                        enableCEA708Captions: !0,
                        enableWebVTT: !0,
                        captionsTextTrack1Label: "English",
                        captionsTextTrack1LanguageCode: "en",
                        captionsTextTrack2Label: "Spanish",
                        captionsTextTrack2LanguageCode: "es"
                    }, {
                        subtitleStreamController: nr,
                        subtitleTrackController: $t,
                        timelineController: Jt,
                        audioStreamController: _t,
                        audioTrackController: mt,
                        emeController: sr
                    });
                r.d(t, "default", function() {
                    return ur
                });
                var ur = function(T) {
                    function S(e) {
                        var t;
                        void 0 === e && (e = {}), (t = T.call(this) || this).config = void 0, t._autoLevelCapping = void 0, t.abrController = void 0, t.capLevelController = void 0, t.levelController = void 0, t.streamController = void 0, t.networkControllers = void 0, t.audioTrackController = void 0, t.subtitleTrackController = void 0, t.emeController = void 0, t.coreComponents = void 0, t.media = null, t.url = null;
                        var r = S.DefaultConfig;
                        if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                        t.config = function(i) {
                            for (var e = 1; e < arguments.length; e++) {
                                var a = null != arguments[e] ? arguments[e] : {},
                                    t = Object.keys(a);
                                "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(a, e).enumerable
                                }))), t.forEach(function(e) {
                                    var t, r, n;
                                    t = i, n = a[r = e], r in t ? Object.defineProperty(t, r, {
                                        value: n,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : t[r] = n
                                })
                            }
                            return i
                        }({}, r, e);
                        var n = U(t),
                            i = n.config;
                        if (void 0 !== i.liveMaxLatencyDurationCount && i.liveMaxLatencyDurationCount <= i.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                        if (void 0 !== i.liveMaxLatencyDuration && (void 0 === i.liveSyncDuration || i.liveMaxLatencyDuration <= i.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                        Object(q.enableLogs)(i.debug), t._autoLevelCapping = -1;
                        var a = t.abrController = new i.abrController(U(t)),
                            o = new i.bufferController(U(t)),
                            s = t.capLevelController = new i.capLevelController(U(t)),
                            l = new i.fpsController(U(t)),
                            u = new ye(U(t)),
                            c = new Ee(U(t)),
                            d = new Te(U(t)),
                            f = new ze(U(t)),
                            h = t.levelController = new He(U(t)),
                            g = new we(U(t)),
                            p = t.streamController = new Ve(U(t), g),
                            v = [h, p],
                            m = i.audioStreamController;
                        m && v.push(new m(U(t), g)), t.networkControllers = v;
                        var y = [u, c, d, a, o, s, l, f, g];
                        if (m = i.audioTrackController) {
                            var b = new m(U(t));
                            t.audioTrackController = b, y.push(b)
                        }
                        if (m = i.subtitleTrackController) {
                            var E = new m(U(t));
                            t.subtitleTrackController = E, v.push(E)
                        }
                        if (m = i.emeController) {
                            var _ = new m(U(t));
                            t.emeController = _, y.push(_)
                        }
                        return (m = i.subtitleStreamController) && v.push(new m(U(t), g)), (m = i.timelineController) && y.push(new m(U(t))), t.coreComponents = y, t
                    }(function(e, t) {
                        e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
                    })(S, T), S.isSupported = function() {
                        return function() {
                            var e = o();
                            if (!e) return !1;
                            var t = self.SourceBuffer || self.WebKitSourceBuffer,
                                r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
                                n = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
                            return !!r && !!n
                        }()
                    }, G(S, null, [{
                        key: "version",
                        get: function() {
                            return "0.13.1"
                        }
                    }, {
                        key: "Events",
                        get: function() {
                            return z.default
                        }
                    }, {
                        key: "ErrorTypes",
                        get: function() {
                            return W.ErrorTypes
                        }
                    }, {
                        key: "ErrorDetails",
                        get: function() {
                            return W.ErrorDetails
                        }
                    }, {
                        key: "DefaultConfig",
                        get: function() {
                            return S.defaultConfig ? S.defaultConfig : lr
                        },
                        set: function(e) {
                            S.defaultConfig = e
                        }
                    }]);
                    var e = S.prototype;
                    return e.destroy = function() {
                        q.logger.log("destroy"), this.trigger(z.default.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach(function(e) {
                            e.destroy()
                        }), this.url = null, this.removeAllListeners(), this._autoLevelCapping = -1
                    }, e.attachMedia = function(e) {
                        q.logger.log("attachMedia"), this.media = e, this.trigger(z.default.MEDIA_ATTACHING, {
                            media: e
                        })
                    }, e.detachMedia = function() {
                        q.logger.log("detachMedia"), this.trigger(z.default.MEDIA_DETACHING), this.media = null
                    }, e.loadSource = function(e) {
                        e = H.buildAbsoluteURL(window.location.href, e, {
                            alwaysNormalize: !0
                        }), q.logger.log("loadSource:" + e), this.url = e, this.trigger(z.default.MANIFEST_LOADING, {
                            url: e
                        })
                    }, e.startLoad = function(t) {
                        void 0 === t && (t = -1), q.logger.log("startLoad(" + t + ")"), this.networkControllers.forEach(function(e) {
                            e.startLoad(t)
                        })
                    }, e.stopLoad = function() {
                        q.logger.log("stopLoad"), this.networkControllers.forEach(function(e) {
                            e.stopLoad()
                        })
                    }, e.swapAudioCodec = function() {
                        q.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
                    }, e.recoverMediaError = function() {
                        q.logger.log("recoverMediaError");
                        var e = this.media;
                        this.detachMedia(), e && this.attachMedia(e)
                    }, G(S, [{
                        key: "levels",
                        get: function() {
                            return this.levelController.levels
                        }
                    }, {
                        key: "currentLevel",
                        get: function() {
                            return this.streamController.currentLevel
                        },
                        set: function(e) {
                            q.logger.log("set currentLevel:" + e), this.loadLevel = e, this.streamController.immediateLevelSwitch()
                        }
                    }, {
                        key: "nextLevel",
                        get: function() {
                            return this.streamController.nextLevel
                        },
                        set: function(e) {
                            q.logger.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch()
                        }
                    }, {
                        key: "loadLevel",
                        get: function() {
                            return this.levelController.level
                        },
                        set: function(e) {
                            q.logger.log("set loadLevel:" + e), this.levelController.manualLevel = e
                        }
                    }, {
                        key: "nextLoadLevel",
                        get: function() {
                            return this.levelController.nextLoadLevel
                        },
                        set: function(e) {
                            this.levelController.nextLoadLevel = e
                        }
                    }, {
                        key: "firstLevel",
                        get: function() {
                            return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                        },
                        set: function(e) {
                            q.logger.log("set firstLevel:" + e), this.levelController.firstLevel = e
                        }
                    }, {
                        key: "startLevel",
                        get: function() {
                            return this.levelController.startLevel
                        },
                        set: function(e) {
                            q.logger.log("set startLevel:" + e), -1 !== e && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e
                        }
                    }, {
                        key: "capLevelToPlayerSize",
                        set: function(e) {
                            var t = !!e;
                            t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t)
                        }
                    }, {
                        key: "autoLevelCapping",
                        get: function() {
                            return this._autoLevelCapping
                        },
                        set: function(e) {
                            q.logger.log("set autoLevelCapping:" + e), this._autoLevelCapping = e
                        }
                    }, {
                        key: "bandwidthEstimate",
                        get: function() {
                            var e = this.abrController._bwEstimator;
                            return e ? e.getEstimate() : NaN
                        }
                    }, {
                        key: "autoLevelEnabled",
                        get: function() {
                            return -1 === this.levelController.manualLevel
                        }
                    }, {
                        key: "manualLevel",
                        get: function() {
                            return this.levelController.manualLevel
                        }
                    }, {
                        key: "minAutoLevel",
                        get: function() {
                            for (var e = this.levels, t = this.config.minAutoBitrate, r = e ? e.length : 0, n = 0; n < r; n++)
                                if ((e[n].realBitrate ? Math.max(e[n].realBitrate, e[n].bitrate) : e[n].bitrate) > t) return n;
                            return 0
                        }
                    }, {
                        key: "maxAutoLevel",
                        get: function() {
                            var e = this.levels,
                                t = this.autoLevelCapping;
                            return -1 === t && e && e.length ? e.length - 1 : t
                        }
                    }, {
                        key: "nextAutoLevel",
                        get: function() {
                            return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
                        },
                        set: function(e) {
                            this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
                        }
                    }, {
                        key: "audioTracks",
                        get: function() {
                            var e = this.audioTrackController;
                            return e ? e.audioTracks : []
                        }
                    }, {
                        key: "audioTrack",
                        get: function() {
                            var e = this.audioTrackController;
                            return e ? e.audioTrack : -1
                        },
                        set: function(e) {
                            var t = this.audioTrackController;
                            t && (t.audioTrack = e)
                        }
                    }, {
                        key: "liveSyncPosition",
                        get: function() {
                            return this.streamController.liveSyncPosition
                        }
                    }, {
                        key: "subtitleTracks",
                        get: function() {
                            var e = this.subtitleTrackController;
                            return e ? e.subtitleTracks : []
                        }
                    }, {
                        key: "subtitleTrack",
                        get: function() {
                            var e = this.subtitleTrackController;
                            return e ? e.subtitleTrack : -1
                        },
                        set: function(e) {
                            var t = this.subtitleTrackController;
                            t && (t.subtitleTrack = e)
                        }
                    }, {
                        key: "subtitleDisplay",
                        get: function() {
                            var e = this.subtitleTrackController;
                            return !!e && e.subtitleDisplay
                        },
                        set: function(e) {
                            var t = this.subtitleTrackController;
                            t && (t.subtitleDisplay = e)
                        }
                    }]), S
                }(Ce);
                ur.defaultConfig = void 0
            },
            "./src/polyfills/number-isFinite.js": function(e, t, r) {
                "use strict";
                r.r(t), r.d(t, "isFiniteNumber", function() {
                    return n
                });
                var n = Number.isFinite || function(e) {
                    return "number" == typeof e && isFinite(e)
                }
            },
            "./src/utils/get-self-scope.js": function(e, t, r) {
                "use strict";

                function n() {
                    return "undefined" == typeof window ? self : window
                }
                r.r(t), r.d(t, "getSelfScope", function() {
                    return n
                })
            },
            "./src/utils/logger.js": function(e, t, r) {
                "use strict";

                function i() {}

                function n(t) {
                    for (var e = arguments.length, r = new Array(1 < e ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                    r.forEach(function(e) {
                        s[e] = t[e] ? t[e].bind(t) : function(a) {
                            var o = l.console[a];
                            return o ? function() {
                                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                var n, i;
                                t[0] && (t[0] = (n = a, i = t[0], i = "[" + n + "] > " + i)), o.apply(l.console, t)
                            } : i
                        }(e)
                    })
                }
                r.r(t), r.d(t, "enableLogs", function() {
                    return u
                }), r.d(t, "logger", function() {
                    return c
                });
                var a = r("./src/utils/get-self-scope.js"),
                    o = {
                        trace: i,
                        debug: i,
                        log: i,
                        warn: i,
                        info: i,
                        error: i
                    },
                    s = o,
                    l = Object(a.getSelfScope)(),
                    u = function(e) {
                        if (l.console && !0 === e || "object" == typeof e) {
                            n(e, "debug", "log", "info", "warn", "error");
                            try {
                                s.log()
                            } catch (e) {
                                s = o
                            }
                        } else s = o
                    },
                    c = s
            }
        }).default)
    }], d.c = e, d.d = function(e, t, r) {
        d.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, d.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return d.d(t, "a", t), t
    }, d.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, d.p = "", d(d.s = 6);

    function d(t) {
        if (e[t]) return e[t].exports;
        var r = e[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return c[t].call(r.exports, r, r.exports, d), r.l = !0, r.exports
    }
    var c, e
});