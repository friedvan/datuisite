(function (global, factory) {
    function extractNS() {
        var g = {};
        return factory.call(g, global), g.jsnx;
    }

    if (typeof define === 'function' && define.amd) { /*AMD*/
        define(extractNS);
    } else if (typeof module !== 'undefined' && module.exports) { /*node*/
        module.exports = extractNS();
    } else {
        factory.call(global, global);
    }
}(this, function (window) {
    function h(a) {
        throw a;
    }

    var aa = void 0, k = !0, l = null, n = !1;

    function ba(a) {
        return function () {
            return a
        }
    }

    var p, ca = this;

    function ea() {
    }

    function q(a) {
        var b = typeof a;
        if ("object" == b)if (a) {
            if (a instanceof Array)return"array";
            if (a instanceof Object)return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)return"object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return"array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return"function"
        } else return"null";
        else if ("function" == b && "undefined" == typeof a.call)return"object";
        return b
    }

    function s(a) {
        return a !== aa
    }

    function ga(a) {
        return"array" == q(a)
    }

    function t(a) {
        var b = q(a);
        return"array" == b || "object" == b && "number" == typeof a.length
    }

    function u(a) {
        return"string" == typeof a
    }

    function v(a) {
        return"boolean" == typeof a
    }

    function ha(a) {
        return"number" == typeof a
    }

    function ia(a) {
        return"function" == q(a)
    }

    function ja(a) {
        var b = typeof a;
        return"object" == b && a != l || "function" == b
    }

    var ka = "closure_uid_" + (1E9 * Math.random() >>> 0), la = 0;

    function ma(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function na(a, b, c) {
        a || h(Error());
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function () {
            return a.apply(b, arguments)
        }
    }

    function oa(a, b, c) {
        oa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ma : na;
        return oa.apply(l, arguments)
    }

    function w(a, b) {
        var c = a.split("."), d = ca;
        !(c[0]in d) && d.execScript && d.execScript("var " + c[0]);
        for (var e; c.length && (e = c.shift());)!c.length && b !== aa ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
    }

    function pa(a, b) {
        function c() {
        }

        c.prototype = b.prototype;
        a.mb = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a
    };
    function qa(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = String(arguments[c]).replace(/\$/g, "$$$$");
            a = a.replace(/\%s/, d)
        }
        return a
    };
    var ra = Array.prototype, sa = ra.indexOf ? function (a, b, c) {
        return ra.indexOf.call(a, b, c)
    } : function (a, b, c) {
        c = c == l ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (u(a))return!u(b) || 1 != b.length ? -1 : a.indexOf(b, c);
        for (; c < a.length; c++)if (c in a && a[c] === b)return c;
        return-1
    }, x = ra.forEach ? function (a, b, c) {
        ra.forEach.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
    }, ta = ra.filter ? function (a, b, c) {
        return ra.filter.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = [], f = 0, g =
            u(a) ? a.split("") : a, m = 0; m < d; m++)if (m in g) {
            var r = g[m];
            b.call(c, r, m, a) && (e[f++] = r)
        }
        return e
    }, va = ra.map ? function (a, b, c) {
        return ra.map.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = Array(d), f = u(a) ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    };

    function wa(a, b) {
        if (a.reduce)return a.reduce(b, 0);
        var c = 0;
        x(a, function (d, e) {
            c = b.call(aa, c, d, e, a)
        });
        return c
    }

    var xa = ra.some ? function (a, b, c) {
        return ra.some.call(a, b, c)
    } : function (a, b, c) {
        for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f, a))return k;
        return n
    };

    function Aa(a) {
        if (!ga(a))for (var b = a.length - 1; 0 <= b; b--)delete a[b];
        a.length = 0
    }

    function Ba(a, b) {
        var c = sa(a, b);
        0 <= c && ra.splice.call(a, c, 1)
    }

    function Ca(a) {
        return ra.concat.apply(ra, arguments)
    }

    function Da(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
            return c
        }
        return[]
    }

    function Ea(a, b, c, d) {
        ra.splice.apply(a, Fa(arguments, 1))
    }

    function Fa(a, b, c) {
        return 2 >= arguments.length ? ra.slice.call(a, b) : ra.slice.call(a, b, c)
    }

    function Ia(a, b, c) {
        if (!t(a) || !t(b) || a.length != b.length)return n;
        var d = a.length;
        c = c || Ja;
        for (var e = 0; e < d; e++)if (!c(a[e], b[e]))return n;
        return k
    }

    function Ka(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Ja(a, b) {
        return a === b
    }

    function La(a) {
        for (var b = [], c = 0; c < a; c++)b[c] = 0;
        return b
    }

    function Ma(a) {
        if (!arguments.length)return[];
        for (var b = [], c = 0; ; c++) {
            for (var d = [], e = 0; e < arguments.length; e++) {
                var f = arguments[e];
                if (c >= f.length)return b;
                d.push(f[c])
            }
            b.push(d)
        }
    }

    function Na(a) {
        for (var b = Math.random, c = a.length - 1; 0 < c; c--) {
            var d = Math.floor(b() * (c + 1)), e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var z = "StopIteration"in ca ? ca.StopIteration : Error("StopIteration");

    function B() {
    }

    B.prototype.next = function () {
        h(z)
    };
    B.prototype.I = function () {
        return this
    };
    function C(a) {
        if (a instanceof B)return a;
        if ("function" == typeof a.I)return a.I(n);
        if (t(a)) {
            var b = 0, c = new B;
            c.next = function () {
                for (; ;) {
                    b >= a.length && h(z);
                    if (b in a)return a[b++];
                    b++
                }
            };
            return c
        }
        h(Error("Not implemented"))
    }

    function D(a, b, c) {
        if (t(a))try {
            x(a, b, c)
        } catch (d) {
            d !== z && h(d)
        } else {
            a = C(a);
            try {
                for (; ;)b.call(c, a.next(), aa, a)
            } catch (e) {
                e !== z && h(e)
            }
        }
    }

    function E(a, b, c) {
        var d = C(a);
        a = new B;
        a.next = function () {
            for (; ;) {
                var a = d.next();
                return b.call(c, a, aa, d)
            }
        };
        return a
    }

    function Oa(a, b) {
        var c = 0;
        D(a, function (a) {
            c = b.call(aa, c, a)
        });
        return c
    }

    function Pa(a) {
        var b = arguments, c = b.length, d = 0, e = new B;
        e.next = function () {
            try {
                return d >= c && h(z), C(b[d]).next()
            } catch (a) {
                return(a !== z || d >= c) && h(a), d++, this.next()
            }
        };
        return e
    }

    function Qa(a) {
        if (t(a))return Da(a);
        a = C(a);
        var b = [];
        D(a, function (a) {
            b.push(a)
        });
        return b
    }

    function Ra(a, b) {
        try {
            return C(a).next()
        } catch (c) {
            return c != z && h(c), b
        }
    };
    function Va() {
    }

    Va.ua = function () {
        return Va.wa ? Va.wa : Va.wa = new Va
    };
    Va.prototype.Qa = 0;
    Va.ua();
    function Wa(a) {
        if (!t(a))return n;
        for (var b = 0, c = a.length; b < c; b++)if (isNaN(a[b]))return n;
        return k
    }

    w("jsnx.utils.misc.is_list_of_ints", Wa);
    w("jsnx.utils.is_list_of_ints", Wa);
    function Xa(a) {
        var b = 0;
        return E(a, function (a) {
            return b += a
        })
    }

    w("jsnx.utils.misc.cumulative_sum", Xa);
    w("jsnx.utils.cumulative_sum", Xa);
    function Ya() {
        return":" + (Va.ua().Qa++).toString(36)
    }

    w("jsnx.utils.misc.generate_unique_node", Ya);
    w("jsnx.utils.generate_unique_node", Ya);
    function F(a, b) {
        for (var c in a)b.call(aa, a[c], c, a)
    }

    function Za(a, b, c) {
        var d = {}, e;
        for (e in a)d[e] = b.call(c, a[e], e, a);
        return d
    }

    function $a(a) {
        var b = 0, c;
        for (c in a)b++;
        return b
    }

    function ab(a) {
        for (var b in a)return b
    }

    function bb(a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = a[d];
        return b
    }

    function cb(a) {
        var b = [], c = 0, d;
        for (d in a)b[c++] = d;
        return b
    }

    function eb(a) {
        for (var b in a)delete a[b]
    }

    function fb(a, b) {
        b in a && delete a[b]
    }

    function H(a, b, c) {
        return b in a ? a[b] : c
    }

    function gb(a) {
        var b = {}, c;
        for (c in a)b[c] = a[c];
        return b
    }

    var hb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function I(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)a[c] = d[c];
            for (var f = 0; f < hb.length; f++)c = hb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }

    function ib(a) {
        var b = arguments.length;
        if (1 == b && ga(arguments[0]))return ib.apply(l, arguments[0]);
        b % 2 && h(Error("Uneven number of arguments"));
        for (var c = {}, d = 0; d < b; d += 2)c[arguments[d]] = arguments[d + 1];
        return c
    };
    function jb(a) {
        var b = arguments;
        1 === arguments.length && t(arguments[0]) && (b = arguments[0]);
        this.ga = "t";
        for (var c = 0, d = b.length; c < d; c++)this[c] = b[c], this.ga += kb(b[c]);
        this.length = b.length;
        b = this;
        Object.isFrozen && !Object.isFrozen(this) && (b = Object.create(this), Object.freeze(b));
        return b
    }

    jb.prototype.ga = "";
    jb.prototype.length = 0;
    w("jsnx.contrib.Tuple.prototype.length", jb.prototype.length);
    jb.prototype.toString = function () {
        return this.ga
    };
    w("jsnx.contrib.Tuple.prototype.toString", jb.prototype.toString);
    function lb(a) {
        return t(arguments[0]) ? new jb(arguments[0]) : new jb(arguments)
    }

    w("jsnx.Tuple", lb);
    w("jsnx.t", lb);
    function mb(a) {
        this.name = "JSNetworkXException";
        this.message = a
    }

    w("jsnx.exception.JSNetworkXException", mb);
    mb.prototype = Error();
    mb.prototype.constructor = mb;
    w("jsnx.JSNetworkXException", mb);
    function J(a) {
        mb.call(this, a);
        this.name = "JSNetworkXError"
    }

    pa(J, mb);
    w("jsnx.exception.JSNetworkXError", J);
    w("jsnx.JSNetworkXError", J);
    function nb(a) {
        mb.call(this, a);
        this.name = "JSNetworkXPointlessConcept"
    }

    pa(nb, mb);
    w("jsnx.exception.JSNetworkXPointlessConcept", nb);
    w("jsnx.JSNetworkXPointlessConcept", nb);
    function ob(a) {
        mb.call(this, a);
        this.name = "JSNetworkXAlgorithmError"
    }

    pa(ob, mb);
    w("jsnx.exception.JSNetworkXAlgorithmError", ob);
    w("jsnx.JSNetworkXAlgorithmError", ob);
    function pb(a) {
        ob.call(this, a);
        this.name = "JSNetworkXUnfeasible"
    }

    pa(pb, ob);
    w("jsnx.exception.JSNetworkXUnfeasible", pb);
    w("jsnx.JSNetworkXUnfeasible", pb);
    function qb(a) {
        pb.call(this, a);
        this.name = "JSNetworkXNoPath"
    }

    pa(qb, pb);
    w("jsnx.exception.JSNetworkXNoPath", qb);
    w("jsnx.JSNetworkXNoPath", qb);
    function rb(a) {
        ob.call(this, a);
        this.name = "JSNetworkXUnbounded"
    }

    pa(rb, ob);
    w("jsnx.exception.JSNetworkXUnbounded", rb);
    w("jsnx.JSNetworkXUnbounded", rb);
    function K(a) {
        this.name = "KeyError";
        this.message = a
    }

    K.prototype = Error();
    K.prototype.constructor = K;
    w("jsnx.KeyError", K);
    w("jsnx.version", "0.2.0");
    function kb(a, b) {
        var c = typeof a;
        return"object" === c || "function" === c ? a.hasOwnProperty("__hash__") ? a.__hash__ : a.toString !== Object.prototype.toString && a.toString !== Array.prototype.toString ? a.toString() : b ? b(a) : "o" + (a[ka] || (a[ka] = ++la)) : c.substr(0, 1) + a
    }

    w("jsnx.contrib.misc.get_hash", kb);
    function L(a) {
        this.F = {};
        this.D = {};
        this.A = {};
        this.h = {};
        if (a != l)if (sb(a) || t(a))M(a, function (a) {
            this.set.apply(this, a)
        }, this); else if (ja(a))for (var b in a)this.set(isNaN(+b) ? b : +b, a[b])
    }

    w("jsnx.contrib.Map", L);
    w("jsnx.Map", L);
    function tb(a, b) {
        switch (typeof b) {
            case "number":
                return a.D;
            case "string":
                return a.F;
            default:
                return a.A
        }
    }

    L.prototype.get = function (a, b) {
        var c = tb(this, a);
        if ("undefined" !== typeof c[a])return c[a];
        if (s(b))return b;
        h(new K("Map does not contain key " + ub(a)))
    };
    L.prototype.get = L.prototype.get;
    L.prototype.a = function (a) {
        return"undefined" !== typeof tb(this, a)[a]
    };
    L.prototype.has = L.prototype.a;
    L.prototype.set = function (a, b) {
        var c = tb(this, a);
        c[a] = b;
        c === this.A && (this.h[a] = a);
        return b
    };
    L.prototype.set = L.prototype.set;
    L.prototype.remove = function (a) {
        var b = tb(this, a);
        "undefined" !== typeof b[a] ? (delete b[a], b === this.A && delete this.h[a]) : h(new K("Map does not contain key " + ub(a)))
    };
    L.prototype.remove = L.prototype.remove;
    L.prototype.Z = function () {
        var a = [], b;
        for (b in this.D)a.push([+b, this.D[b]]);
        for (b in this.F)a.push([b, this.F[b]]);
        for (b in this.A)a.push([this.h[b], this.A[b]]);
        return a
    };
    L.prototype.items = L.prototype.Z;
    L.prototype.copy = function (a) {
        return vb(this, a)
    };
    L.prototype.keys = function () {
        return va(cb(this.D),function (a) {
            return+a
        }).concat(cb(this.F)).concat(bb(this.h))
    };
    L.prototype.keys = L.prototype.keys;
    L.prototype.n = function () {
        return bb(this.D).concat(bb(this.F)).concat(bb(this.A))
    };
    L.prototype.values = L.prototype.n;
    L.prototype.I = function () {
        var a = new B, b = cb(this.F), c = cb(this.D), d = cb(this.A), e = 0, f = 0, g = 0;
        a.next = oa(function () {
            var a;
            if (e < c.length)return a = c[e++], [+a, this.D[a]];
            if (f < b.length)return a = b[f++], [a, this.F[a]];
            if (g < d.length)return a = d[g++], [this.h[a], this.A[a]];
            h(z)
        }, this);
        return a
    };
    L.prototype.count = function () {
        return $a(this.A) + $a(this.D) + $a(this.F)
    };
    L.prototype.count = L.prototype.count;
    L.prototype.clear = function () {
        eb(this.F);
        eb(this.D);
        eb(this.A);
        eb(this.h)
    };
    L.prototype.clear = L.prototype.clear;
    L.prototype.forEach = function (a, b) {
        D(this, function (c) {
            a.apply(b, c)
        })
    };
    L.prototype.forEach = L.prototype.forEach;
    function N(a) {
        this.e = new L;
        a != l && (sb(a) || t(a)) && M(a, function (a) {
            this.add(a)
        }, this)
    }

    w("jsnx.contrib.Set", N);
    w("jsnx.Set", N);
    N.prototype.a = function (a) {
        return this.e.a(a)
    };
    N.prototype.has = N.prototype.a;
    N.prototype.add = function (a) {
        this.e.set(a, k)
    };
    N.prototype.add = N.prototype.add;
    N.prototype.remove = function (a) {
        try {
            this.e.remove(a)
        } catch (b) {
            b instanceof K || h(b)
        }
    };
    N.prototype.remove = N.prototype.remove;
    N.prototype.copy = function (a) {
        return vb(this, a)
    };
    N.prototype.n = function () {
        return this.e.keys()
    };
    N.prototype.values = N.prototype.n;
    N.prototype.I = function () {
        return E(this.e, function (a) {
            return a[0]
        })
    };
    N.prototype.O = function (a) {
        for (var b = new N(this.n()), c = 0, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            e instanceof N && (e = e.n());
            for (var f = 0, g = e.length; f < g; f++)b.remove(e[f])
        }
        return b
    };
    N.prototype.difference = N.prototype.O;
    N.prototype.q = function (a) {
        for (var b = new N, c = 0, d = arguments.length; c < d; c++) {
            var e = arguments[c];
            e instanceof N && (e = e.n());
            for (var f = 0, g = e.length; f < g; f++)this.a(e[f]) && b.add(e[f])
        }
        return b
    };
    N.prototype.intersection = N.prototype.q;
    N.prototype.count = function () {
        return this.e.count()
    };
    N.prototype.count = N.prototype.count;
    N.prototype.clear = function () {
        this.e.clear()
    };
    N.prototype.clear = N.prototype.clear;
    N.prototype.forEach = function (a, b) {
        D(this, a, b)
    };
    N.prototype.forEach = N.prototype.forEach;
    w("jsnx.filter", function (a, b, c) {
        var d = C(a);
        a = new B;
        a.next = function () {
            for (; ;) {
                var a = d.next();
                if (b.call(c, a, aa, d))return a
            }
        };
        return a
    });
    function zb(a) {
        var b = 0;
        s(b) || (b = l);
        var c = new L;
        M(a, function (a) {
            c.set(a, b)
        });
        return c
    }

    function sb(a) {
        return a != l && (a instanceof B || ia(a.I))
    }

    function Ab(a) {
        if (a instanceof P)return a.S();
        if (u(a) || t(a))return a.length;
        if (Bb(a))return $a(a);
        h(new TypeError)
    }

    function M(a, b, c, d) {
        v(c) && (d = c, c = l);
        if (d) {
            var e = b;
            b = function (a) {
                e.apply(this, a)
            }
        }
        a instanceof P ? D(Cb(a), b, c) : sb(a) ? D(a, b, c) : t(a) || u(a) ? x(a, b, c) : ja(a) && M(cb(a), b, c)
    }

    w("jsnx.forEach", M);
    function Q(a, b, c) {
        if (a instanceof P)return Q(Cb(a), b, c);
        if (t(a))return va(a, b, c);
        if (sb(a))return E(a, b, c);
        if (ja(a))return Za(a, b, c);
        h(new TypeError)
    }

    w("jsnx.map", Q);
    function Db(a) {
        var b = arguments, c = b[0];
        if (t(c))return Ma.apply(l, b);
        if (sb(c)) {
            var c = new B, d = b.length;
            c.next = function () {
                for (var a = [], c = 0; c < d; c++)a.push(b[c].next());
                return a
            };
            return c
        }
        if (ja(c))return Ma.apply(l, va(b, cb));
        h(new TypeError)
    }

    function Eb(a, b) {
        a = ia(b) ? R(Q(a, function () {
            return b.apply(l, arguments)
        })) : R(a);
        return Math.max.apply(l, a)
    }

    function S(a, b, c) {
        if (0 === arguments.length)return C([]);
        1 === arguments.length ? (b = a, a = 0, c = 1) : 2 === arguments.length ? c = 1 : 3 === arguments.length && 0 === arguments[2] && h("range() step argument must not be zero");
        var d = new B, e = 0 > c, f = a, g;
        d.next = function () {
            (e && f <= b || !e && f >= b) && h(z);
            g = f;
            f += c;
            return g
        };
        return d
    }

    function Fb(a) {
        var b = R(a), c = b.length;
        if (2 > c)return new B;
        var d = R(S(2));
        a = new B;
        a.next = function () {
            var a = va(d, function (a) {
                return b[a]
            });
            this.next = function () {
                var a = n, e;
                for (e = 2; e--;)if (d[e] != e + c - 2) {
                    a = k;
                    break
                }
                a || h(z);
                d[e] += 1;
                for (a = e + 1; 2 > a; a++)d[a] = d[a - 1] + 1;
                return va(d, function (a) {
                    return b[a]
                })
            };
            return a
        };
        return a
    }

    function Gb(a) {
        var b = R(a), c = b.length, d = ha(2) ? 2 : c;
        if (d > c)return new B;
        var e = R(S(c)), f = R(S(c, c - d, -1));
        a = new B;
        var g = new B, m, r = k;
        a.next = function () {
            this.next = m.next;
            return va(e.slice(0, d), function (a) {
                return b[a]
            })
        };
        g.next = function () {
            return r
        };
        m = T(g, function (a) {
                a || h(z);
                r = n;
                return S(d - 1, -1, -1)
            }, function (a) {
                if (!r)if (f[a] -= 1, 0 === f[a])e.splice.apply(e, [a, e.length].concat(e.slice(a + 1).concat([e[a]]))), f[a] = c - a; else {
                    var g = f[a], m = e[a];
                    e[a] = e[e.length - g];
                    e[e.length - g] = m;
                    r = k;
                    return Cb([va(e.slice(0, d), function (a) {
                        return b[a]
                    })])
                }
            },
            function (a) {
                return a
            });
        return a
    }

    function Hb(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)!s(a[c]) || "object" !== q(a[c]) ? a[c] = U(d[c]) : "object" === q(a[c]) && "object" === q(d) && Hb(a[c], d[c]);
            for (var f = 0; f < hb.length; f++)c = hb[f], Object.prototype.hasOwnProperty.call(d, c) && (!s(a[c]) || "object" !== q(a[c]) ? a[c] = U(d[c]) : "object" === q(a[c]) && "object" === q(d) && Hb(a[c], d[c]))
        }
    }

    function R(a) {
        if (a instanceof P)return R(Cb(a));
        if (t(a))return Da(a);
        if (sb(a))return Qa(a);
        if (ja(a))return cb(a);
        h(new TypeError)
    }

    w("jsnx.toArray", R);
    function Ib(a) {
        var b = new B, c = C(cb(a));
        b.next = function () {
            var b = c.next();
            return[b, a[b]]
        };
        return b
    }

    function Cb(a) {
        if (a instanceof P)return Cb(a.adj.keys());
        "object" === q(a) && (!t(a) && !sb(a)) && (a = cb(a));
        return C(a)
    }

    function T(a, b) {
        var c = new B, d = Fa(arguments, 1);
        if (0 === d.length)return a;
        try {
            a = C(a)
        } catch (e) {
            return c.next = function () {
                "Not implemented" === e.message && h(new TypeError)
            }, c
        }
        var f = 0, g = d.length, m = [a];
        c.next = function () {
            do try {
                var a, b;
                do a = m[f].next(), s(a) && (b = d[f](a)); while (!s(a));
                if (sb(b)) {
                    if (f === g - 1)return b;
                    m.push(b);
                    f += 1
                } else if (s(b))return b
            } catch (c) {
                c !== z && h(c), 0 < f ? (m.pop(), f -= 1) : h(c)
            } while (1)
        };
        return c
    }

    w("jsnx.sentinelIterator", function (a, b) {
        var c = new B;
        c.next = function () {
            return Ra(a, b)
        };
        return c
    });
    function Bb(a) {
        var b = Object.prototype.hasOwnProperty;
        if (!a || "object" !== q(a) || a.nodeType || a == a.window)return n;
        try {
            if (a.constructor && !b.call(a, "constructor") && !b.call(a.constructor.prototype, "isPrototypeOf"))return n
        } catch (c) {
            return n
        }
        for (var d in a);
        return d === aa || b.call(a, d)
    }

    function U(a, b) {
        b = b || [];
        var c = q(a);
        if ("object" == c && (ia(a.copy) || Bb(a)) || "array" == c) {
            for (var d = 0, e = b.length; d < e; d += 2)if (a === b[d])return b[d + 1];
            if (ia(a.copy))return c = a.copy(b), b.push(a, c), c;
            c = "array" == c ? [] : {};
            b.push(a, c);
            for (var f in a)c[f] = U(a[f], b);
            return c
        }
        return a
    }

    function vb(a, b) {
        function c() {
        }

        var d = {}, e, f;
        c.prototype = a.constructor.prototype;
        for (e in a)a.hasOwnProperty(e) && (d[e] = a[e]);
        d = U(d, b);
        f = new c;
        for (e in d)f[e] = d[e];
        return f
    }

    var Kb = function Jb(b, c) {
        return 0 === c ? b : Jb(c, b % c)
    };

    function Lb(a, b) {
        var c = new L;
        if (b != l) {
            b = R(b);
            var d = function (a) {
                return 0 <= sa(b, a)
            };
            x(b, function (b) {
                c.set(b, ta(a.B(b), d))
            })
        } else M(a, function (b) {
            c.set(b, a.B(b))
        });
        return c
    }

    w("jsnx.contrib.convert.to_map_of_lists", Lb);
    w("jsnx.to_map_of_lists", Lb);
    function Mb(a, b) {
        var c = Nb(b);
        c.i(a.keys());
        if (c.m() && !c.c()) {
            var d = new L;
            a.forEach(function (a, b) {
                x(b, function (b) {
                    d.a(b) || c.b(a, b)
                });
                d.set(a, 1)
            })
        } else a.forEach(function (a, b) {
            x(b, function (b) {
                c.b(a, b)
            })
        });
        return c
    }

    w("jsnx.contrib.convert.from_map_of_lists", Mb);
    w("jsnx.contrib.convert.to_map_of_maps", function (a, b, c) {
        var d = new L;
        b != l ? (b = R(b), c != l ? x(b, function (e) {
            var f = d.set(e, new L);
            a.get(e).forEach(function (a) {
                0 <= sa(b, a) && f.set(a, c)
            })
        }) : x(b, function (c) {
            var f = d.set(c, new L);
            a.get(c).forEach(function (a, c) {
                0 <= sa(b, a) && f.set(a, c)
            })
        })) : c != l ? D(a.p(), function (a, b) {
            var g = d.set(b, new L);
            a.forEach(function (a) {
                g.set(a, c)
            })
        }) : D(a.p(), function (a, b) {
            var c = d.set(b, new L);
            a.forEach(function (a, b) {
                c.set(a, b)
            })
        });
        return d
    });
    function Ob(a, b, c) {
        var d = Nb(b), e = new L, f = [];
        d.i(a.keys());
        c ? d.c() ? d.m() ? a.forEach(function (a, b) {
            t(b) && h(Error("Value is not a map."));
            b.forEach(function (b, c) {
                F(c, function (c, e) {
                    d.b(a, b, e, c)
                })
            })
        }) : a.forEach(function (a, b) {
            t(b) && h(Error());
            b.forEach(function (b, c) {
                F(c, function (c) {
                    d.b(a, b, c)
                })
            })
        }) : d.m() ? a.forEach(function (a, b) {
            t(b) && h(Error());
            b.forEach(function (b, c) {
                f[0] = a;
                f[1] = b;
                e.a(f) || (F(c, function (c, e) {
                    d.b(a, b, e, c)
                }), f[0] = b, f[1] = a, e.set(f, 1))
            })
        }) : a.forEach(function (a, b) {
            t(b) && h(Error());
            b.forEach(function (b, c) {
                f[0] = a;
                f[1] = b;
                e.a(f) || (F(c, function (c) {
                    d.b(a, b, c)
                }), f[0] = b, f[1] = a, e.set(f, 1))
            })
        }) : d.m() && !d.c() ? a.forEach(function (a, b) {
            t(b) && h(Error());
            b.forEach(function (b, c) {
                f[0] = a;
                f[1] = b;
                e.a(f) || (d.b(a, b, c), f[0] = b, f[1] = a, e.set(f, 1))
            })
        }) : a.forEach(function (a, b) {
            t(b) && h(Error());
            b.forEach(function (b, c) {
                d.b(a, b, c)
            })
        });
        return d
    }

    w("jsnx.contrib.convert.from_map_of_maps", Ob);
    function Pb(a) {
        if ("function" == typeof a.P)return a.P();
        if (u(a))return a.split("");
        if (t(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]);
            return b
        }
        return bb(a)
    };
    function Qb(a, b) {
        this.e = {};
        this.h = [];
        var c = arguments.length;
        if (1 < c) {
            c % 2 && h(Error("Uneven number of arguments"));
            for (var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1])
        } else a && this.ma(a)
    }

    p = Qb.prototype;
    p.J = 0;
    p.fa = 0;
    p.ia = function () {
        return this.J
    };
    p.P = function () {
        Rb(this);
        for (var a = [], b = 0; b < this.h.length; b++)a.push(this.e[this.h[b]]);
        return a
    };
    p.na = function () {
        Rb(this);
        return this.h.concat()
    };
    p.ta = function (a) {
        return Sb(this.e, a)
    };
    p.ja = function () {
        return 0 == this.J
    };
    p.clear = function () {
        this.e = {};
        this.fa = this.J = this.h.length = 0
    };
    p.remove = function (a) {
        return Sb(this.e, a) ? (delete this.e[a], this.J--, this.fa++, this.h.length > 2 * this.J && Rb(this), k) : n
    };
    function Rb(a) {
        if (a.J != a.h.length) {
            for (var b = 0, c = 0; b < a.h.length;) {
                var d = a.h[b];
                Sb(a.e, d) && (a.h[c++] = d);
                b++
            }
            a.h.length = c
        }
        if (a.J != a.h.length) {
            for (var e = {}, c = b = 0; b < a.h.length;)d = a.h[b], Sb(e, d) || (a.h[c++] = d, e[d] = 1), b++;
            a.h.length = c
        }
    }

    p.get = function (a, b) {
        return Sb(this.e, a) ? this.e[a] : b
    };
    p.set = function (a, b) {
        Sb(this.e, a) || (this.J++, this.h.push(a), this.fa++);
        this.e[a] = b
    };
    p.ma = function (a) {
        var b;
        a instanceof Qb ? (b = a.na(), a = a.P()) : (b = cb(a), a = bb(a));
        for (var c = 0; c < b.length; c++)this.set(b[c], a[c])
    };
    p.ha = function () {
        return new Qb(this)
    };
    p.I = function (a) {
        Rb(this);
        var b = 0, c = this.h, d = this.e, e = this.fa, f = this, g = new B;
        g.next = function () {
            for (; ;) {
                e != f.fa && h(Error("The map has changed since the iterator was created"));
                b >= c.length && h(z);
                var g = c[b++];
                return a ? g : d[g]
            }
        };
        return g
    };
    function Sb(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    function Tb(a) {
        this.e = new Qb;
        a && this.ma(a)
    }

    function Ub(a) {
        var b = typeof a;
        return"object" == b && a || "function" == b ? "o" + (a[ka] || (a[ka] = ++la)) : b.substr(0, 1) + a
    }

    p = Tb.prototype;
    p.ia = function () {
        return this.e.ia()
    };
    p.add = function (a) {
        this.e.set(Ub(a), a)
    };
    p.ma = function (a) {
        a = Pb(a);
        for (var b = a.length, c = 0; c < b; c++)this.add(a[c])
    };
    p.remove = function (a) {
        return this.e.remove(Ub(a))
    };
    p.clear = function () {
        this.e.clear()
    };
    p.ja = function () {
        return this.e.ja()
    };
    p.contains = function (a) {
        return this.e.ta(Ub(a))
    };
    p.q = function (a) {
        var b = new Tb;
        a = Pb(a);
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            this.contains(d) && b.add(d)
        }
        return b
    };
    p.O = function (a) {
        var b = this.ha();
        a = Pb(a);
        for (var c = a.length, d = 0; d < c; d++)b.remove(a[d]);
        return b
    };
    p.P = function () {
        return this.e.P()
    };
    p.ha = function () {
        return new Tb(this)
    };
    p.I = function () {
        return this.e.I(n)
    };
    function Nb(a) {
        if (a != l)try {
            a.clear()
        } catch (b) {
            h(Error("Input graph is not a jsnx graph type"))
        } else a = new P;
        return a
    }

    function Vb(a, b, c) {
        var d = l;
        if (a.hasOwnProperty("adj"))try {
            return d = Ob(a.adj, b, a.m()), "graph"in a && "object" === q(a.graph) && (d.graph = gb(a.graph)), "node"in a && a.node instanceof L && (d.node = new L, a.node.forEach(function (a, b) {
                d.node.set(a, gb(b))
            })), d
        } catch (e) {
            h(e)
        }
        if (a instanceof L)try {
            return Ob(a, b, c)
        } catch (f) {
            try {
                return Mb(a, b)
            } catch (g) {
                h(Error("Input is not known type."))
            }
        }
        if ("object" === q(a))try {
            return Wb(a, b, c)
        } catch (m) {
            try {
                return Xb(a, b)
            } catch (r) {
                h(Error("Input is not known type."))
            }
        }
        if (t(a))try {
            return Yb(a,
                b)
        } catch (y) {
            h(Error("Input is not valid edge list"))
        }
        return d
    }

    w("jsnx.convert.to_networkx_graph", Vb);
    w("jsnx.to_networkx_graph", Vb);
    function Zb(a) {
        return a.V()
    }

    w("jsnx.convert.convert_to_undirected", Zb);
    w("jsnx.convert_to_undirected", Zb);
    function $b(a) {
        return a.M()
    }

    w("jsnx.convert.convert_to_directed", $b);
    w("jsnx.convert_to_undirected", $b);
    function ac(a, b) {
        function c(a) {
            return 0 <= sa(b, a)
        }

        var d = {};
        b != l ? b = R(b) : (b = a, c = function (a) {
            return b.o(a)
        });
        M(b, function (b) {
            d[b] = ta(a.B(b), c)
        });
        return d
    }

    w("jsnx.convert.to_dict_of_lists", ac);
    w("jsnx.to_dict_of_lists", ac);
    function Xb(a, b) {
        var c = Nb(b);
        c.i(E(Ib(a), function (a) {
            return isNaN(a[0]) ? a[0] : +a[0]
        }));
        if (c.m() && !c.c()) {
            var d = {};
            F(a, function (a, b) {
                b = isNaN(b) ? b : +b;
                x(a, function (a) {
                    a in d || c.b(b, a)
                });
                d[b] = 1
            })
        } else {
            var e = [];
            F(a, function (a, b) {
                b = isNaN(b) ? b : +b;
                x(a, function (a) {
                    e.push([b, a])
                })
            });
            c.d(e)
        }
        return c
    }

    w("jsnx.convert.from_dict_of_lists", Xb);
    w("jsnx.convert.to_dict_of_dicts", function (a, b, c) {
        var d = {};
        b != l ? (b = R(b), c != l ? x(b, function (e) {
            d[e] = {};
            F(a.get(e), function (a, g) {
                0 <= sa(b, g) && (d[e][g] = c)
            })
        }) : x(b, function (c) {
            d[c] = {};
            F(a.get(c), function (a, g) {
                0 <= sa(b, g) && (d[c][g] = a)
            })
        })) : c != l ? D(a.p(), function (a, b) {
            d[b] = Za(a, function () {
                return c
            })
        }) : D(a.p(), function (a, b) {
            d[b] = gb(a)
        });
        return d
    });
    function Wb(a, b, c) {
        var d = Nb(b), e, f;
        d.i(E(Ib(a), function (a) {
            return isNaN(a[0]) ? a[0] : +a[0]
        }));
        c ? d.c() ? (d.m() ? (e = [], F(a, function (a, b) {
            t(a) && h(Error());
            b = isNaN(b) ? b : +b;
            F(a, function (a, c) {
                c = isNaN(c) ? c : +c;
                F(a, function (a, d) {
                    e.push([b, c, d, a])
                })
            })
        })) : (e = [], F(a, function (a, b) {
            t(a) && h(Error());
            b = isNaN(b) ? b : +b;
            F(a, function (a, c) {
                c = isNaN(c) ? c : +c;
                F(a, function (a) {
                    e.push([b, c, a])
                })
            })
        })), d.d(e)) : d.m() ? (f = new Tb, F(a, function (a, b) {
            t(a) && h(Error());
            b = isNaN(b) ? b : +b;
            F(a, function (a, c) {
                c = isNaN(c) ? c : +c;
                f.contains([b, c].toString()) ||
                (e = [], F(a, function (a, d) {
                    e.push([b, c, d, a])
                }), d.d(e), f.add([c, b].toString()))
            })
        })) : (f = new Tb, F(a, function (a, b) {
            t(a) && h(Error());
            b = isNaN(b) ? b : +b;
            F(a, function (a, c) {
                c = isNaN(c) ? c : +c;
                f.contains([b, c].toString()) || (e = [], F(a, function (a) {
                    e.push([b, c, a])
                }), d.d(e), f.add([c, b].toString()))
            })
        })) : d.m() && !d.c() ? (f = new Tb, F(a, function (a, b) {
            t(a) && h(Error());
            b = isNaN(b) ? b : +b;
            F(a, function (a, c) {
                c = isNaN(c) ? c : +c;
                f.contains([b, c].toString()) || (d.b(b, c, a), f.add([c, b].toString()))
            })
        })) : (e = [], F(a, function (a, b) {
            t(a) && h(Error());
            b = isNaN(b) ? b : +b;
            F(a, function (a, c) {
                c = isNaN(c) ? c : +c;
                e.push([b, c, a])
            })
        }), d.d(e));
        return d
    }

    w("jsnx.convert.from_dict_of_dicts", Wb);
    w("jsnx.convert.to_edgelist", function (a, b) {
        return b != l ? a.v(b, k) : a.v(l, k)
    });
    function Yb(a, b) {
        var c = Nb(b);
        c.d(a);
        return c
    }

    w("jsnx.convert.from_edgelist", Yb);
    function ub(a) {
        var b = [];
        bc(new cc, a, b);
        return b.join("")
    }

    function cc() {
        this.la = aa
    }

    function bc(a, b, c) {
        switch (typeof b) {
            case "string":
                dc(b, c);
                break;
            case "number":
                c.push(isFinite(b) && !isNaN(b) ? b : "null");
                break;
            case "boolean":
                c.push(b);
                break;
            case "undefined":
                c.push("null");
                break;
            case "object":
                if (b == l) {
                    c.push("null");
                    break
                }
                if (ga(b)) {
                    var d = b.length;
                    c.push("[");
                    for (var e = "", f = 0; f < d; f++)c.push(e), e = b[f], bc(a, a.la ? a.la.call(b, String(f), e) : e, c), e = ",";
                    c.push("]");
                    break
                }
                c.push("{");
                d = "";
                for (f in b)Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d), dc(f, c), c.push(":"),
                    bc(a, a.la ? a.la.call(b, f, e) : e, c), d = ","));
                c.push("}");
                break;
            case "function":
                break;
            default:
                h(Error("Unknown type: " + typeof b))
        }
    }

    var ec = {'"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b"}, fc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function dc(a, b) {
        b.push('"', a.replace(fc, function (a) {
            if (a in ec)return ec[a];
            var b = a.charCodeAt(0), e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return ec[a] = e + b.toString(16)
        }), '"')
    };
    var V = {hb: function (a) {
        return Math.floor(Math.random() * a)
    }, nb: function (a, b) {
        return a + Math.random() * (b - a)
    }, ab: function (a, b, c) {
        return Math.min(Math.max(a, b), c)
    }, Pa: function (a, b) {
        var c = a % b;
        return 0 > c * b ? c + b : c
    }, eb: function (a, b, c) {
        return a + c * (b - a)
    }, gb: function (a, b, c) {
        return Math.abs(a - b) <= (c || 1E-6)
    }, pa: function (a) {
        return V.Pa(a, 360)
    }, Ba: function (a) {
        return a * Math.PI / 180
    }, Xa: function (a) {
        return 180 * a / Math.PI
    }, Za: function (a, b) {
        return b * Math.cos(V.Ba(a))
    }, $a: function (a, b) {
        return b * Math.sin(V.Ba(a))
    }, sa: function (a, b, c, d) {
        return V.pa(V.Xa(Math.atan2(d - b, c - a)))
    }, Ya: function (a, b) {
        var c = V.pa(b) - V.pa(a);
        180 < c ? c -= 360 : -180 >= c && (c = 360 + c);
        return c
    }, kb: function (a) {
        return 0 == a ? 0 : 0 > a ? -1 : 1
    }, fb: function (a, b, c, d) {
        c = c || function (a, b) {
            return a == b
        };
        d = d || function (b) {
            return a[b]
        };
        for (var e = a.length, f = b.length, g = [], m = 0; m < e + 1; m++)g[m] = [], g[m][0] = 0;
        for (var r = 0; r < f + 1; r++)g[0][r] = 0;
        for (m = 1; m <= e; m++)for (r = 1; r <= e; r++)c(a[m - 1], b[r - 1]) ? g[m][r] = g[m - 1][r - 1] + 1 : g[m][r] = Math.max(g[m - 1][r], g[m][r - 1]);
        for (var y = [], m = e, r = f; 0 < m && 0 < r;)c(a[m - 1], b[r -
            1]) ? (y.unshift(d(m - 1, r - 1)), m--, r--) : g[m - 1][r] > g[m][r - 1] ? m-- : r--;
        return y
    }, w: function (a) {
        return wa(arguments, function (a, c) {
            return a + c
        })
    }, Ia: function (a) {
        return V.w.apply(l, arguments) / arguments.length
    }, lb: function (a) {
        var b = arguments.length;
        if (2 > b)return 0;
        var c = V.Ia.apply(l, arguments), b = V.w.apply(l, va(arguments, function (a) {
            return Math.pow(a - c, 2)
        })) / (b - 1);
        return Math.sqrt(b)
    }, cb: function (a) {
        return isFinite(a) && 0 == a % 1
    }, bb: function (a) {
        return isFinite(a) && !isNaN(a)
    }, jb: function (a, b) {
        return Math.floor(a +
            (b || 2E-15))
    }, ib: function (a, b) {
        return Math.ceil(a - (b || 2E-15))
    }};

    function P(a, b) {
        if (!(this instanceof P))return new P(a, b);
        this.graph = {};
        this.node = new L;
        this.adj = new L;
        a != l && Vb(a, this);
        I(this.graph, b || {});
        this.edge = this.adj
    }

    w("jsnx.classes.Graph", P);
    w("jsnx.Graph", P);
    P.__name__ = "Graph";
    P.prototype.Ma = l;
    P.prototype.graph = P.prototype.Ma;
    P.prototype.Ra = l;
    P.prototype.node = P.prototype.Ra;
    P.prototype.Ga = l;
    P.prototype.adj = P.prototype.Ga;
    P.prototype.Ka = l;
    P.prototype.edge = P.prototype.Ka;
    P.prototype.name = function (a) {
        if (s(a))this.graph.name = a.toString(); else return this.graph.name || ""
    };
    P.prototype.name = P.prototype.name;
    P.prototype.toString = function () {
        return this.name()
    };
    P.prototype.toString = P.prototype.toString;
    P.prototype.get = function (a) {
        try {
            return this.adj.get(a)
        } catch (b) {
            b instanceof K || h(b), h(new K("Graph does not contain node " + a + "."))
        }
    };
    P.prototype.get = P.prototype.get;
    P.prototype.N = function (a, b) {
        b != l || (b = {});
        "object" !== q(b) && h(new J("The attr_dict argument must be an object."));
        this.adj.a(a) ? I(this.node.get(a), b) : (this.adj.set(a, new L), this.node.set(a, b))
    };
    P.prototype.add_node = P.prototype.N;
    P.prototype.i = function (a, b) {
        b != l || (b = {});
        M(a, function (a) {
            if (ga(a) && 2 === a.length && ja(a[1])) {
                var d = a[0];
                a = a[1];
                if (this.adj.a(d))d = this.node.get(d), I(d, b, a); else {
                    this.adj.set(d, new L);
                    var e = gb(b);
                    I(e, a);
                    this.node.set(d, e)
                }
            } else this.adj.a(a) ? I(this.node.get(a), b) : (this.adj.set(a, new L), this.node.set(a, gb(b)))
        }, this)
    };
    P.prototype.add_nodes_from = P.prototype.i;
    P.prototype.U = function (a) {
        var b = this.adj;
        try {
            var c = this.adj.get(a).keys();
            this.node.remove(a);
            x(c, function (c) {
                b.get(c).remove(a)
            });
            b.remove(a)
        } catch (d) {
            d instanceof K || h(d), h(new J(qa("The node %s is not in the graph", ub(a))))
        }
    };
    P.prototype.remove_node = P.prototype.U;
    P.prototype.da = function (a) {
        var b = this.adj;
        M(a, function (a) {
            try {
                this.node.remove(a), b.get(a).forEach(function (d) {
                    b.get(d).remove(a)
                }), b.remove(a)
            } catch (d) {
                d instanceof K || h(d)
            }
        }, this)
    };
    P.prototype.remove_nodes_from = P.prototype.da;
    P.prototype.C = function (a) {
        return a ? C(this.node) : C(this.adj.keys())
    };
    P.prototype.nodes_iter = P.prototype.C;
    P.prototype.nodes = function (a) {
        return a ? this.node.Z() : this.node.keys()
    };
    P.prototype.nodes = P.prototype.nodes;
    P.prototype.S = function () {
        return this.adj.count()
    };
    P.prototype.number_of_nodes = P.prototype.S;
    P.prototype.K = function () {
        return this.adj.count()
    };
    P.prototype.order = P.prototype.K;
    P.prototype.o = function (a) {
        try {
            return this.adj.a(a)
        } catch (b) {
            if (b instanceof TypeError)return n;
            h(b)
        }
    };
    P.prototype.has_node = P.prototype.o;
    P.prototype.b = function (a, b, c) {
        c = c || {};
        "object" !== q(c) && h(new J("The attr_dict argument must be an object."));
        this.adj.a(a) || (this.adj.set(a, new L), this.node.set(a, {}));
        this.adj.a(b) || (this.adj.set(b, new L), this.node.set(b, {}));
        var d = this.adj.get(a).get(b, {});
        I(d, c);
        this.adj.get(a).set(b, d);
        this.adj.get(b).set(a, d)
    };
    P.prototype.add_edge = P.prototype.b;
    P.prototype.d = function (a, b) {
        b = b || {};
        "object" !== q(b) && h(new J("The attr_dict argument must be an object."));
        M(a, function (a) {
            var d = Ab(a), e, f, g;
            3 === d ? (e = a[0], f = a[1], g = a[2]) : 2 === d ? (e = a[0], f = a[1], g = {}) : h(new J(qa("Edge tuple %s must be a 2-tuple or 3-tuple.", ub(a))));
            this.adj.a(e) || (this.adj.set(e, new L), this.node.set(e, {}));
            this.adj.a(f) || (this.adj.set(f, new L), this.node.set(f, {}));
            a = this.adj.get(e).get(f, {});
            I(a, b, g);
            this.adj.get(e).set(f, a);
            this.adj.get(f).set(e, a)
        }, this)
    };
    P.prototype.add_edges_from = P.prototype.d;
    P.prototype.Fa = function (a, b, c) {
        c = c || {};
        u(b) || (c = b, b = "weight");
        this.d(Q(a, function (a) {
            var c = {};
            c[b] = a[2];
            s(c[b]) || h(new TypeError("Values must consist of three elements: " + ub(a)));
            return[a[0], a[1], c]
        }), c)
    };
    P.prototype.add_weighted_edges_from = P.prototype.Fa;
    P.prototype.z = function (a, b) {
        try {
            this.adj.get(a).remove(b), kb(a) !== kb(b) && this.adj.get(b).remove(a)
        } catch (c) {
            c instanceof K && h(new J(qa("The edge %s-%s is not in the graph", ub(a), ub(b)))), h(c)
        }
    };
    P.prototype.remove_edge = P.prototype.z;
    P.prototype.L = function (a) {
        M(a, function (a) {
            var c = a[0];
            a = a[1];
            this.adj.a(c) && this.adj.get(c).a(a) && (this.adj.get(c).remove(a), kb(c) !== kb(a) && this.adj.get(a).remove(c))
        }, this)
    };
    P.prototype.remove_edges_from = P.prototype.L;
    P.prototype.T = function (a, b) {
        return this.adj.a(a) && this.adj.get(a).a(b)
    };
    P.prototype.has_edge = P.prototype.T;
    P.prototype.B = function (a) {
        try {
            return this.adj.get(a).keys()
        } catch (b) {
            b instanceof K && h(new J(qa("The node %s is not in the graph.", ub(a)))), h(b)
        }
    };
    P.prototype.neighbors = P.prototype.B;
    P.prototype.ba = function (a) {
        try {
            return C(this.adj.get(a).keys())
        } catch (b) {
            b instanceof K && h(new J(qa("The node %s is not in the graph.", ub(a)))), h(b)
        }
    };
    P.prototype.neighbors_iter = P.prototype.ba;
    P.prototype.v = function (a, b) {
        return Qa(this.g(a, b))
    };
    P.prototype.edges = P.prototype.v;
    P.prototype.g = function (a, b) {
        v(a) && (b = a, a = l);
        var c = new L, d, e;
        d = a != l ? E(this.f(a), function (a) {
            return[a, this.adj.get(a)]
        }, this) : C(this.adj);
        return b ? T(d, function (a) {
            e = a[0];
            var b = new B, d = C(a[1]);
            b.next = function () {
                try {
                    return d.next()
                } catch (a) {
                    a === z && c.set(e, 1), h(a)
                }
            };
            return b
        }, function (a) {
            if (!c.a(a[0]))return[e, a[0], a[1]]
        }) : T(d, function (a) {
            e = a[0];
            var b = new B, d = C(a[1]);
            b.next = function () {
                try {
                    return d.next()
                } catch (a) {
                    a === z && c.set(e, 1), h(a)
                }
            };
            return b
        }, function (a) {
            if (!c.a(a[0]))return[e, a[0]]
        })
    };
    P.prototype.edges_iter = P.prototype.g;
    P.prototype.W = function (a, b, c) {
        try {
            return this.adj.get(a).get(b)
        } catch (d) {
            if (d instanceof K)return c;
            h(d)
        }
    };
    P.prototype.get_edge_data = P.prototype.W;
    P.prototype.Ha = function () {
        return Qa(E(this.p(), function (a) {
            return a[1].keys()
        }))
    };
    P.prototype.adjacency_list = P.prototype.Ha;
    P.prototype.p = function () {
        return C(this.adj)
    };
    P.prototype.adjacency_iter = P.prototype.p;
    P.prototype.t = function (a, b) {
        return a != l && this.o(a) ? this.u(a, b).next()[1] : new L(this.u(a, b))
    };
    P.prototype.degree = P.prototype.t;
    P.prototype.u = function (a, b) {
        var c;
        c = a != l ? E(this.f(a), function (a) {
            return[a, this.adj.get(a)]
        }, this) : C(this.adj);
        return b ? E(c, function (a) {
            var c = a[0], f = a[1], g = 0;
            f.forEach(function (a, c) {
                g += +H(c, b, 1)
            });
            g += +(f.a(c) && H(f.get(c), b, 1));
            a[1] = g;
            return a
        }) : E(c, function (a) {
            a[1] = a[1].count() + +a[1].a(a[0]);
            return a
        })
    };
    P.prototype.degree_iter = P.prototype.u;
    P.prototype.clear = function () {
        this.name("");
        this.adj.clear();
        this.node.clear();
        eb(this.graph)
    };
    P.prototype.clear = P.prototype.clear;
    P.prototype.copy = function () {
        return vb(this)
    };
    P.prototype.copy = P.prototype.copy;
    P.prototype.m = ba(n);
    P.prototype.is_multigraph = P.prototype.m;
    P.prototype.c = ba(n);
    P.prototype.is_directed = P.prototype.c;
    P.prototype.M = function () {
        var a = new Y;
        a.name(this.name());
        a.i(this);
        a.d(function () {
            var a;
            return T(this.p(), function (c) {
                a = c[0];
                return C(c[1])
            }, function (c) {
                c[2] = U(c[1]);
                c[1] = c[0];
                c[0] = a;
                return c
            })
        }.call(this));
        a.graph = U(this.graph);
        a.node = U(this.node);
        return a
    };
    P.prototype.to_directed = P.prototype.M;
    P.prototype.V = function () {
        return vb(this)
    };
    P.prototype.to_undirected = P.prototype.V;
    P.prototype.H = function (a) {
        a = this.f(a);
        var b = new this.constructor, c = b.adj, d = this.adj;
        D(a, function (a) {
            var b = new L;
            c.set(a, b);
            d.get(a).forEach(function (d, m) {
                c.a(d) && (b.set(d, m), c.get(d).set(a, m))
            })
        });
        M(b, function (a) {
            b.node.set(a, this.node.get(a))
        }, this);
        b.graph = this.graph;
        return b
    };
    P.prototype.subgraph = P.prototype.H;
    P.prototype.Sa = function () {
        return va(ta(this.adj.Z(), function (a) {
            return a[1].a(a[0])
        }), function (a) {
            return a[0]
        })
    };
    P.prototype.nodes_with_selfloops = P.prototype.Sa;
    P.prototype.ea = function (a) {
        return a ? va(ta(this.adj.Z(), function (a) {
            return a[1].a(a[0])
        }), function (a) {
            a[2] = a[1].get(a[0]);
            a[1] = a[0];
            return a
        }) : va(ta(this.adj.Z(), function (a) {
            return a[1].a(a[0])
        }), function (a) {
            a[1] = a[0];
            return a
        })
    };
    P.prototype.selfloop_edges = P.prototype.ea;
    P.prototype.Ta = function () {
        return this.ea().length
    };
    P.prototype.number_of_selfloops = P.prototype.Ta;
    P.prototype.size = function (a) {
        var b = V.w.apply(l, this.t(l, a).n()) / 2;
        return a != l ? b : Math.floor(b)
    };
    P.prototype.size = P.prototype.size;
    P.prototype.R = function (a, b) {
        return a == l ? Math.floor(this.size()) : this.adj.get(a).a(b) ? 1 : 0
    };
    P.prototype.number_of_edges = P.prototype.R;
    P.prototype.Ea = function (a, b) {
        var c = R(a), d = c[0], c = E(Fa(c, 1), function (a) {
            return[d, a]
        });
        this.d(c, b)
    };
    P.prototype.add_star = P.prototype.Ea;
    P.prototype.Da = function (a, b) {
        var c = R(a), c = Ma(Fa(c, 0, c.length - 1), Fa(c, 1));
        this.d(c, b)
    };
    P.prototype.add_path = P.prototype.Da;
    P.prototype.Ca = function (a, b) {
        var c = R(a), c = Ma(c, Ca(Fa(c, 1), [c[0]]));
        this.d(c, b)
    };
    P.prototype.add_cycle = P.prototype.Ca;
    P.prototype.f = function (a) {
        return a != l ? this.o(a) ? C([a]) : function (a, c) {
            var d = new B, e = T(a, function (a) {
                if (c.a(a))return a
            });
            d.next = function () {
                try {
                    return e.next()
                } catch (a) {
                    a instanceof TypeError && h(new J("nbunch is not a node or a sequence of nodes")), h(a)
                }
            };
            return d
        }(a, this.adj) : C(this.adj.keys())
    };
    P.prototype.nbunch_iter = P.prototype.f;
    function Y(a, b) {
        if (!(this instanceof Y))return new Y(a, b);
        this.graph = {};
        this.node = new L;
        this.adj = new L;
        this.pred = new L;
        this.succ = this.adj;
        a != l && Vb(a, this);
        I(this.graph, b || {});
        this.edge = this.adj
    }

    w("jsnx.classes.DiGraph", Y);
    w("jsnx.DiGraph", Y);
    pa(Y, P);
    Y.__name__ = "DiGraph";
    Y.prototype.Ua = l;
    Y.prototype.pred = Y.prototype.Ua;
    Y.prototype.Wa = l;
    Y.prototype.succ = Y.prototype.Wa;
    Y.prototype.N = function (a, b) {
        b != l || (b = {});
        "object" !== q(b) && h(new J("The attr_dict argument must be an object."));
        this.succ.a(a) ? I(this.node.get(a), b) : (this.succ.set(a, new L), this.pred.set(a, new L), this.node.set(a, b))
    };
    Y.prototype.add_node = Y.prototype.N;
    Y.prototype.i = function (a, b) {
        var c, d, e, f, g;
        b != l || (b = {});
        M(Cb(a), function (a) {
            c = !this.succ.a(a);
            ga(a) && 2 === a.length && ja(a[1]) ? (d = a[0], e = a[1], this.succ.a(d) ? (g = this.node.get(d), I(g, b, e)) : (this.succ.set(d, new L), this.pred.set(d, new L), f = gb(b), I(f, e), this.node.set(d, f))) : c ? (this.succ.set(a, new L), this.pred.set(a, new L), this.node.set(a, gb(b))) : I(this.node.get(a), b)
        }, this)
    };
    Y.prototype.add_nodes_from = Y.prototype.i;
    Y.prototype.U = function (a) {
        var b;
        try {
            b = this.succ.get(a), this.node.remove(a)
        } catch (c) {
            c instanceof K || h(c), h(new J(qa("The node %s is not in the graph", ub(a))))
        }
        b.forEach(function (b) {
            this.pred.get(b).remove(a)
        }, this);
        this.succ.remove(a);
        this.pred.get(a).forEach(function (b) {
            this.succ.get(b).remove(a)
        }, this);
        this.pred.remove(a)
    };
    Y.prototype.remove_node = Y.prototype.U;
    Y.prototype.da = function (a) {
        var b;
        M(a, function (a) {
            this.succ.a(a) && (b = this.succ.get(a), this.node.remove(a), b.forEach(function (b) {
                this.pred.get(b).remove(a)
            }, this), this.succ.remove(a), this.pred.get(a).forEach(function (b) {
                this.succ.get(b).remove(a)
            }, this), this.pred.remove(a))
        }, this)
    };
    Y.prototype.remove_nodes_from = Y.prototype.da;
    Y.prototype.b = function (a, b, c) {
        c = c || {};
        "object" !== q(c) && h(new J("The attr_dict argument must be an object."));
        this.succ.a(a) || (this.succ.set(a, new L), this.pred.set(a, new L), this.node.set(a, {}));
        this.succ.a(b) || (this.succ.set(b, new L), this.pred.set(b, new L), this.node.set(b, {}));
        var d = this.adj.get(a).get(b, {});
        I(d, c);
        this.succ.get(a).set(b, d);
        this.pred.get(b).set(a, d)
    };
    Y.prototype.add_edge = Y.prototype.b;
    Y.prototype.d = function (a, b) {
        b = b || {};
        "object" !== q(b) && h(new J("The attr_dict argument must be an object."));
        M(a, function (a) {
            var d = Ab(a), e, f, g;
            3 === d ? (e = a[0], f = a[1], g = a[2]) : 2 === d ? (e = a[0], f = a[1], g = {}) : h(new J("Edge tuple " + a.toString() + " must be a 2-tuple or 3-tuple."));
            this.succ.a(e) || (this.succ.set(e, new L), this.pred.set(e, new L), this.node.set(e, {}));
            this.succ.a(f) || (this.succ.set(f, new L), this.pred.set(f, new L), this.node.set(f, {}));
            a = this.adj.get(e).get(f, {});
            I(a, b, g);
            this.succ.get(e).set(f, a);
            this.pred.get(f).set(e,
                a)
        }, this)
    };
    Y.prototype.add_edges_from = Y.prototype.d;
    Y.prototype.z = function (a, b) {
        try {
            this.succ.get(a).remove(b), this.pred.get(b).remove(a)
        } catch (c) {
            c instanceof TypeError && h(new J(qa("The edge %s-%s is not in the graph", ub(a), ub(b)))), h(c)
        }
    };
    Y.prototype.remove_edge = Y.prototype.z;
    Y.prototype.L = function (a) {
        M(a, function (a) {
            var c = a[0];
            a = a[1];
            try {
                this.succ.get(c).remove(a), this.pred.get(a).remove(c)
            } catch (d) {
            }
        }, this)
    };
    Y.prototype.remove_edges_from = Y.prototype.L;
    Y.prototype.Oa = function (a, b) {
        return this.succ.a(a) && this.succ.get(a).a(b)
    };
    Y.prototype.has_successor = Y.prototype.Oa;
    Y.prototype.Na = function (a, b) {
        return this.pred.a(a) && this.pred.get(a).a(b)
    };
    Y.prototype.has_predecessor = Y.prototype.Na;
    Y.prototype.qa = function (a) {
        try {
            return E(this.succ.get(a), function (a) {
                return a[0]
            })
        } catch (b) {
            b instanceof K || h(b), h(new J("The node " + a + " is not in the digraph."))
        }
    };
    Y.prototype.successors_iter = Y.prototype.qa;
    Y.prototype.za = function (a) {
        try {
            return E(this.pred.get(a), function (a) {
                return a[0]
            })
        } catch (b) {
            b instanceof K || h(b), h(new J("The node " + a + " is not in the digraph."))
        }
    };
    Y.prototype.predecessors_iter = Y.prototype.za;
    Y.prototype.Aa = function (a) {
        try {
            return this.succ.get(a).keys()
        } catch (b) {
            b instanceof K || h(b), h(new J("The node " + a + " is not in the digraph."))
        }
    };
    Y.prototype.successors = Y.prototype.Aa;
    Y.prototype.Va = function (a) {
        try {
            return this.pred.get(a).keys()
        } catch (b) {
            b instanceof K || h(b), h(new J("The node " + a + " is not in the digraph."))
        }
    };
    Y.prototype.predecessors = Y.prototype.Va;
    Y.prototype.B = Y.prototype.Aa;
    Y.prototype.neighbors = Y.prototype.B;
    Y.prototype.ba = Y.prototype.qa;
    Y.prototype.neighbors_iter = Y.prototype.ba;
    Y.prototype.g = function (a, b) {
        v(a) && (b = a, a = l);
        var c, d;
        if (a != l) {
            var e = [];
            c = Q(this.f(a), function (a) {
                e[0] = a;
                e[1] = this.adj.get(a);
                return e
            }, this)
        } else c = this.adj;
        return b ? T(c, function (a) {
            d = a[0];
            return C(a[1])
        }, function (a) {
            return[d, a[0], a[1]]
        }) : T(c, function (a) {
            d = a[0];
            return C(a[1])
        }, function (a) {
            return[d, a[0]]
        })
    };
    Y.prototype.edges_iter = Y.prototype.g;
    Y.prototype.ka = Y.prototype.g;
    Y.prototype.out_edges_iter = Y.prototype.ka;
    Y.prototype.oa = P.prototype.v;
    Y.prototype.out_edges = Y.prototype.oa;
    Y.prototype.Q = function (a, b) {
        v(a) && (b = a, a = l);
        var c, d;
        if (a != l) {
            var e = [];
            c = Q(this.f(a), function (a) {
                e[0] = a;
                e[1] = this.pred.get(a);
                return e
            }, this)
        } else c = this.pred;
        return b ? T(c, function (a) {
            d = a[0];
            return C(a[1])
        }, function (a) {
            a[2] = a[1];
            a[1] = d;
            return a
        }) : T(c, function (a) {
            d = a[0];
            return C(a[1])
        }, function (a) {
            a[1] = d;
            return a
        })
    };
    Y.prototype.in_edges_iter = Y.prototype.Q;
    Y.prototype.Y = function (a, b) {
        return R(this.Q(a, b))
    };
    Y.prototype.in_edges = Y.prototype.Y;
    Y.prototype.u = function (a, b) {
        var c;
        c = a != l ? Db(E(this.f(a), function (a) {
            return[a, this.succ.get(a)]
        }, this), Q(this.f(a), function (a) {
            return[a, this.pred.get(a)]
        }, this)) : Db(C(this.succ), C(this.pred));
        return u(b) ? Q(c, function (a) {
            var c = a[1][1], f = 0;
            a[0][1].forEach(function (a, c) {
                f += +H(c, b, 1)
            });
            c.forEach(function (a, c) {
                f += +H(c, b, 1)
            });
            return[a[0][0], f]
        }) : E(c, function (a) {
            return[a[0][0], a[0][1].count() + a[1][1].count()]
        })
    };
    Y.prototype.degree_iter = Y.prototype.u;
    Y.prototype.X = function (a, b) {
        var c;
        c = a != l ? Q(this.f(a), function (a) {
            return[a, this.pred.get(a)]
        }, this) : this.pred;
        return b != l ? Q(c, function (a) {
            var c = 0;
            a[1].forEach(function (a, d) {
                c += +H(d, b, 1)
            });
            a[1] = c;
            return a
        }) : Q(c, function (a) {
            a[1] = a[1].count();
            return a
        })
    };
    Y.prototype.in_degree_iter = Y.prototype.X;
    Y.prototype.ca = function (a, b) {
        var c;
        if (a != l) {
            var d = [];
            c = Q(this.f(a), function (a) {
                d[0] = a;
                d[1] = this.succ.get(a);
                return d
            }, this)
        } else c = C(this.succ);
        return b != l ? Q(c, function (a) {
            var c = 0;
            a[1].forEach(function (a, d) {
                c += +H(d, b, 1)
            });
            return[a[0], c]
        }) : Q(c, function (a) {
            return[a[0], a[1].count()]
        })
    };
    Y.prototype.out_degree_iter = Y.prototype.ca;
    Y.prototype.va = function (a, b) {
        return a != l && this.o(a) ? this.X(a, b).next()[1] : new L(this.X(a, b))
    };
    Y.prototype.in_degree = Y.prototype.va;
    Y.prototype.ya = function (a, b) {
        return a != l && this.o(a) ? this.ca(a, b).next()[1] : new L(this.ca(a, b))
    };
    Y.prototype.out_degree = Y.prototype.ya;
    Y.prototype.clear = function () {
        this.succ.clear();
        this.pred.clear();
        this.node.clear();
        eb(this.graph)
    };
    Y.prototype.clear = Y.prototype.clear;
    Y.prototype.m = ba(n);
    Y.prototype.is_multigraph = Y.prototype.m;
    Y.prototype.c = ba(k);
    Y.prototype.is_directed = Y.prototype.c;
    Y.prototype.M = function () {
        return vb(this)
    };
    Y.prototype.to_directed = Y.prototype.M;
    Y.prototype.V = function (a) {
        var b = new P;
        b.name(this.name());
        b.i(this);
        var c = this.pred, d = [];
        a ? b.d(T(this.p(), function (a) {
            d[0] = a[0];
            return C(a[1])
        }, function (a) {
            if (c.get(d[0]).a(a[0]))return d[1] = a[0], d[2] = U(a[1]), d
        })) : b.d(T(this.p(), function (a) {
            d[0] = a[0];
            return C(a[1])
        }, function (a) {
            d[1] = a[0];
            d[2] = U(a[1]);
            return d
        }));
        b.graph = U(this.graph);
        b.node = U(this.node);
        return b
    };
    Y.prototype.to_undirected = Y.prototype.V;
    Y.prototype.reverse = function (a) {
        (a = !s(a) || a) ? (a = new this.constructor(l, {name: "Reverse of (" + this.name() + ")"}), a.i(this), a.d(Q(this.g(l, k), function (a) {
            var c = a[0];
            a[0] = a[1];
            a[1] = c;
            a[2] = U(a[2]);
            return a
        })), a.graph = U(this.graph), a.node = U(this.node)) : (a = this.succ, this.succ = this.pred, this.pred = a, this.adj = this.succ, a = this);
        return a
    };
    Y.prototype.reverse = Y.prototype.reverse;
    Y.prototype.H = function (a) {
        a = this.f(a);
        var b = new this.constructor, c = b.succ, d = b.pred, e = this.succ;
        M(a, function (a) {
            c.set(a, new L);
            d.set(a, new L)
        });
        c.forEach(function (a, b) {
            e.get(a).forEach(function (e, r) {
                c.a(e) && (b.set(e, r), d.get(e).set(a, r))
            })
        });
        M(b, function (a) {
            b.node.set(a, this.node.get(a))
        }, this);
        b.graph = this.graph;
        return b
    };
    Y.prototype.subgraph = Y.prototype.H;
    function Z(a, b) {
        if (!(this instanceof Z))return new Z(a, b);
        P.call(this, a, b)
    }

    pa(Z, P);
    w("jsnx.classes.MultiGraph", Z);
    w("jsnx.MultiGraph", Z);
    Z.__name__ = "MultiGraph";
    Z.prototype.b = function (a, b, c, d) {
        var e, f;
        c != l && (!u(c) && !ha(c)) && (d = c, c = l);
        d = d || {};
        "object" !== q(d) && h(new J("The attr_dict argument must be an object."));
        this.adj.a(a) || (this.adj.set(a, new L), this.node.set(a, {}));
        this.adj.a(b) || (this.adj.set(b, new L), this.node.set(b, {}));
        if (this.adj.get(a).a(b)) {
            f = this.adj.get(a).get(b);
            if (c == l)for (c = $a(f); c in f;)c += 1;
            e = H(f, "" + c, {});
            I(e, d);
            f[c] = e
        } else c != l || (c = 0), e = {}, I(e, d), f = ib(c, e), this.adj.get(a).set(b, f), this.adj.get(b).set(a, f)
    };
    Z.prototype.add_edge = Z.prototype.b;
    Z.prototype.d = function (a, b) {
        b = b || {};
        "object" !== q(b) && h(new J("The attr_dict argument must be an object."));
        M(a, function (a) {
            var d = Ab(a), e, f, g = l, m = {};
            4 === d ? (e = a[0], f = a[1], g = a[2], m = a[3]) : 3 === d ? (e = a[0], f = a[1], m = a[2]) : 2 === d ? (e = a[0], f = a[1]) : h(new J("Edge tuple " + ub(a) + " must be a 2-tuple, 3-tuple or 4-tuple."));
            a = this.adj.a(e) ? this.adj.get(e).get(f, {}) : {};
            if (g == l)for (g = $a(a); g in a;)g += 1;
            a = H(a, g, {});
            I(a, b, m);
            this.b(e, f, g, a)
        }, this)
    };
    Z.prototype.add_edges_from = Z.prototype.d;
    Z.prototype.z = function (a, b, c) {
        var d;
        try {
            d = this.adj.get(a).get(b)
        } catch (e) {
            e instanceof K || h(e), h(new J("The edge " + a + "-" + b + " is not in the graph"))
        }
        c != l ? (c in d || h(new J("The edge " + a + "-" + b + " with key " + c + " is not in the graph")), fb(d, c)) : fb(d, ab(d));
        0 === $a(d) && (this.adj.get(a).remove(b), a !== b && this.adj.get(b).remove(a))
    };
    Z.prototype.remove_edge = Z.prototype.z;
    Z.prototype.L = function (a) {
        M(a, function (a) {
            try {
                this.z(a[0], a[1], a[2])
            } catch (c) {
                c instanceof J || h(c)
            }
        }, this)
    };
    Z.prototype.remove_edges_from = Z.prototype.L;
    Z.prototype.T = function (a, b, c) {
        try {
            var d;
            if (c != l) {
                var e = this.adj.get(a).get(b);
                d = c in e
            } else d = this.adj.get(a).a(b);
            return d
        } catch (f) {
            return f instanceof K || h(f), n
        }
    };
    Z.prototype.has_edge = Z.prototype.T;
    Z.prototype.v = function (a, b, c) {
        return Qa(this.g(a, b, c))
    };
    Z.prototype.edges = Z.prototype.v;
    Z.prototype.g = function (a, b, c) {
        v(a) && (v(b) && (c = b), b = a, a = l);
        var d = new L, e, f;
        if (a != l) {
            var g = [];
            a = Q(this.f(a), function (a) {
                g[0] = a;
                g[1] = this.adj.get(a);
                return g
            }, this)
        } else a = C(this.adj);
        return b ? T(a, function (a) {
            e = a[0];
            var b = new B, c = C(a[1]);
            b.next = function () {
                try {
                    return c.next()
                } catch (a) {
                    a === z && d.set(e, k), h(a)
                }
            };
            return b
        }, function (a) {
            f = a[0];
            if (!d.a(f))return Ib(a[1])
        }, function (a) {
            return c ? [e, f, a[0], a[1]] : [e, f, a[1]]
        }) : T(a, function (a) {
            e = a[0];
            var b = new B, c = C(a[1]);
            b.next = function () {
                try {
                    return c.next()
                } catch (a) {
                    a ===
                        z && d.set(e, k), h(a)
                }
            };
            return b
        }, function (a) {
            f = a[0];
            if (!d.a(f))return Ib(a[1])
        }, function (a) {
            return c ? [e, f, a[0]] : [e, f]
        })
    };
    Z.prototype.edges_iter = Z.prototype.g;
    Z.prototype.W = function (a, b, c, d) {
        s(d) || (d = l);
        try {
            return c != l ? H(this.adj.get(a).get(b), "" + c, d) : this.adj.get(a).get(b)
        } catch (e) {
            return e instanceof K || h(e), d
        }
    };
    Z.prototype.get_edge_data = Z.prototype.W;
    Z.prototype.u = function (a, b) {
        var c;
        if (a != l) {
            var d = [];
            c = Q(this.f(a), function (a) {
                d[0] = a;
                d[1] = this.adj.get(a);
                return d
            }, this)
        } else c = C(this.adj);
        return b != l ? E(c, function (a) {
            var c = a[0];
            a = a[1];
            var d = 0;
            a.forEach(function (a, c) {
                F(c, function (a) {
                    d += H(a, b, 1)
                })
            });
            a.a(c) && F(a.get(c), function (a) {
                d += H(a, b, 1)
            });
            return[c, d]
        }) : E(c, function (a) {
            var b = a[0];
            a = a[1];
            var c = 0;
            a.forEach(function (a, b) {
                c += $a(b)
            });
            return[b, c + +(a.a(b) && $a(a.get(b)))]
        })
    };
    Z.prototype.degree_iter = Z.prototype.u;
    Z.prototype.m = ba(k);
    Z.prototype.is_multigraph = Z.prototype.m;
    Z.prototype.c = ba(n);
    Z.prototype.is_directed = Z.prototype.c;
    Z.prototype.M = function () {
        var a = new $;
        a.i(this);
        a.d(function () {
            var a, c;
            return T(this.p(), function (c) {
                a = c[0];
                return C(c[1])
            }, function (a) {
                c = a[0];
                return Ib(a[1])
            }, function (d) {
                return[a, c, d[0], U(d[1])]
            })
        }.call(this));
        a.graph = U(this.graph);
        a.node = U(this.node);
        return a
    };
    Z.prototype.to_directed = Z.prototype.M;
    Z.prototype.ea = function (a, b) {
        var c = [];
        a ? b ? this.adj.forEach(function (a, b) {
            b.a(a) && F(b.get(a), function (b, e) {
                c.push([a, a, e, b])
            })
        }) : this.adj.forEach(function (a, b) {
            b.a(a) && F(b.get(a), function (b) {
                c.push([a, a, b])
            })
        }) : b ? this.adj.forEach(function (a, b) {
            b.a(a) && F(b.get(a), function (b, e) {
                c.push([a, a, e])
            })
        }) : this.adj.forEach(function (a, b) {
            b.a(a) && F(b.get(a), function () {
                c.push([a, a])
            })
        });
        return c
    };
    Z.prototype.selfloop_edges = Z.prototype.ea;
    Z.prototype.R = function (a) {
        if (a == l)return this.size();
        try {
            return $a(this.adj.get(a).get(a))
        } catch (b) {
            return b instanceof K || h(b), 0
        }
    };
    Z.prototype.number_of_edges = Z.prototype.R;
    Z.prototype.H = function (a) {
        a = this.f(a);
        var b = new this.constructor, c = b.adj, d = this.adj;
        D(a, function (a) {
            var b = new L;
            c.set(a, b);
            d.get(a).forEach(function (d, m) {
                if (c.a(d)) {
                    var r = gb(m);
                    b.set(d, r);
                    c.get(d).set(a, r)
                }
            })
        });
        this.node.forEach(function (a, c) {
            b.node.set(a, c)
        });
        b.graph = this.graph;
        return b
    };
    Z.prototype.subgraph = Z.prototype.H;
    function $(a, b) {
        if (!(this instanceof $))return new $(a, b);
        Y.call(this, a, b)
    }

    pa($, Y);
    var gc = $.prototype, hc = Z.prototype, ic;
    for (ic in hc)hc.hasOwnProperty(ic) && "constructor" !== ic && (gc[ic] = hc[ic]);
    w("jsnx.classes.MultiDiGraph", $);
    w("jsnx.MultiDiGraph", $);
    $.__name__ = "MultiDiGraph";
    $.prototype.b = function (a, b, c, d) {
        var e, f;
        c != l && (!u(c) && !ha(c)) && (d = c, c = l);
        d = d || {};
        "object" !== q(d) && h(new J("The attr_dict argument must be an object."));
        this.succ.a(a) || (this.succ.set(a, new L), this.pred.set(a, new L), this.node.set(a, {}));
        this.succ.a(b) || (this.succ.set(b, new L), this.pred.set(b, new L), this.node.set(b, {}));
        if (this.succ.get(a).a(b)) {
            f = this.adj.get(a).get(b);
            if (c == l)for (c = $a(f); c in f;)c += 1;
            e = H(f, c.toString(), {});
            I(e, d);
            f[c] = e
        } else c != l || (c = 0), e = {}, I(e, d), f = ib(c, e), this.succ.get(a).set(b,
            f), this.pred.get(b).set(a, f)
    };
    $.prototype.add_edge = $.prototype.b;
    $.prototype.z = function (a, b, c) {
        var d;
        try {
            d = this.adj.get(a).get(b)
        } catch (e) {
            e instanceof K || h(e), h(new J("The edge " + a + "-" + b + " is not in the graph"))
        }
        c != l ? (c in d || h(new J("The edge " + a + "-" + b + " with key " + c + " is not in the graph")), fb(d, c)) : fb(d, ab(d));
        0 === $a(d) && (this.succ.get(a).remove(b), this.pred.get(b).remove(a))
    };
    $.prototype.remove_edge = $.prototype.z;
    $.prototype.g = function (a, b, c) {
        v(a) && (v(b) && (c = b), b = a, a = l);
        var d, e;
        if (a != l) {
            var f = [];
            a = Q(this.f(a), function (a) {
                f[0] = a;
                f[1] = this.adj.get(a);
                return f
            }, this)
        } else a = C(this.adj);
        return b ? T(a, function (a) {
            d = a[0];
            return C(a[1])
        }, function (a) {
            e = a[0];
            return Ib(a[1])
        }, function (a) {
            return c ? [d, e, a[0], a[1]] : [d, e, a[1]]
        }) : T(a, function (a) {
            d = a[0];
            return C(a[1])
        }, function (a) {
            e = a[0];
            return Ib(a[1])
        }, function (a) {
            return c ? [d, e, a[0]] : [d, e]
        })
    };
    $.prototype.edges_iter = $.prototype.g;
    $.prototype.ka = $.prototype.g;
    $.prototype.out_edges_iter = $.prototype.ka;
    $.prototype.oa = function (a, b, c) {
        return Qa(this.ka(a, b, c))
    };
    $.prototype.out_edges = $.prototype.oa;
    $.prototype.Q = function (a, b, c) {
        v(a) && (b = a, a = l);
        var d, e;
        if (a != l) {
            var f = [];
            a = Q(this.f(a), function (a) {
                f[0] = a;
                f[1] = this.pred.get(a);
                return f
            }, this)
        } else a = C(this.pred);
        return b ? T(a, function (a) {
            d = a[0];
            return C(a[1])
        }, function (a) {
            e = a[0];
            return Ib(a[1])
        }, function (a) {
            return c ? [e, d, a[0], a[1]] : [e, d, a[1]]
        }) : T(a, function (a) {
            d = a[0];
            return C(a[1])
        }, function (a) {
            e = a[0];
            return Ib(a[1])
        }, function (a) {
            return c ? [e, d, a[0]] : [e, d]
        })
    };
    $.prototype.in_edges_iter = $.prototype.Q;
    $.prototype.Y = function (a, b, c) {
        return Qa(this.Q(a, b, c))
    };
    $.prototype.in_edges = $.prototype.Y;
    $.prototype.u = function (a, b) {
        var c;
        if (a != l) {
            var d = [], e = [];
            c = Db(E(this.f(a), function (a) {
                d[0] = a;
                d[1] = this.succ.get(a);
                return d
            }, this), E(this.f(a), function (a) {
                e[0] = a;
                e[1] = this.pred.get(a);
                return e
            }, this))
        } else c = Db(C(this.succ), C(this.pred));
        return b != l ? Q(c, function (a) {
            var c = a[0][1], d = 0;
            a[1][1].forEach(function (a, c) {
                F(c, function (a) {
                    d += +H(a, b, 1)
                })
            });
            c.forEach(function (a, c) {
                F(c, function (a) {
                    d += +H(a, b, 1)
                })
            });
            return[a[0][0], d]
        }) : Q(c, function (a) {
            var b = 0, c = 0;
            a[1][1].forEach(function (a, c) {
                b += $a(c)
            });
            a[0][1].forEach(function (a, b) {
                c += $a(b)
            });
            return[a[0][0], b + c]
        })
    };
    $.prototype.degree_iter = $.prototype.u;
    $.prototype.X = function (a, b) {
        var c;
        if (a != l) {
            var d = [];
            c = Q(this.f(a), function (a) {
                d[0] = a;
                d[1] = this.pred.get(a);
                return d
            }, this)
        } else c = C(this.pred);
        return b != l ? Q(c, function (a) {
            var c = 0;
            a[1].forEach(function (a, d) {
                F(d, function (a) {
                    c += +H(a, b, 1)
                })
            });
            return[a[0], c]
        }) : Q(c, function (a) {
            var b = 0;
            a[1].forEach(function (a, c) {
                b += $a(c)
            });
            return[a[0], b]
        })
    };
    $.prototype.in_degree_iter = $.prototype.X;
    $.prototype.ca = function (a, b) {
        var c;
        if (a != l) {
            var d = [];
            c = Q(this.f(a), function (a) {
                d[0] = a;
                d[1] = this.succ.get(a);
                return d
            }, this)
        } else c = C(this.succ);
        return b != l ? Q(c, function (a) {
            var c = 0;
            a[1].forEach(function (a, d) {
                F(d, function (a) {
                    c += +H(a, b, 1)
                })
            });
            return[a[0], c]
        }) : Q(c, function (a) {
            var b = 0;
            a[1].forEach(function (a, c) {
                b += $a(c)
            });
            return[a[0], b]
        })
    };
    $.prototype.out_degree_iter = $.prototype.ca;
    $.prototype.m = ba(k);
    $.prototype.is_multigraph = $.prototype.m;
    $.prototype.c = ba(k);
    $.prototype.is_directed = $.prototype.c;
    $.prototype.M = function () {
        return vb(this)
    };
    $.prototype.to_directed = $.prototype.M;
    $.prototype.V = function (a) {
        var b = new Z;
        b.name(this.name());
        b.i(this);
        var c, d;
        a ? b.d(T(this.p(), function (a) {
            c = a[0];
            return C(a[1])
        }, function (a) {
            d = a[0];
            return Ib(a[1])
        }, oa(function (a) {
            if (this.T(d, c, a[0]))return[c, d, a[0], U(a[1])]
        }, this))) : b.d(T(this.p(), function (a) {
            c = a[0];
            return C(a[1])
        }, function (a) {
            d = a[0];
            return Ib(a[1])
        }, function (a) {
            return[c, d, a[0], U(a[1])]
        }));
        b.graph = U(this.graph);
        b.node = U(this.node);
        return b
    };
    $.prototype.to_undirected = $.prototype.V;
    $.prototype.H = function (a) {
        a = this.f(a);
        var b = new this.constructor, c = b.succ, d = b.pred, e = this.succ;
        D(a, function (a) {
            c.set(a, new L);
            d.set(a, new L)
        });
        c.forEach(function (a, b) {
            e.get(a).forEach(function (e, r) {
                if (c.a(e)) {
                    var y = gb(r);
                    b.set(e, y);
                    d.get(e).set(a, y)
                }
            })
        });
        this.node.forEach(function (a, c) {
            b.node.set(a, c)
        });
        b.graph = this.graph;
        return b
    };
    $.prototype.subgraph = $.prototype.H;
    $.prototype.reverse = function (a) {
        (a = !s(a) || a) ? (a = new this.constructor(l, {name: "Reverse of (" + this.name() + ")"}), a.i(this), a.d(E(this.g(l, k, k), function (a) {
            return[a[1], a[0], a[2], U(a[3])]
        })), a.graph = U(this.graph), a.node = U(this.node)) : (a = this.succ, this.succ = this.pred, this.pred = a, this.adj = this.succ, a = this);
        return a
    };
    $.prototype.reverse = $.prototype.reverse;
    function jc(a) {
        return a.nodes()
    }

    w("jsnx.classes.func.nodes", jc);
    w("jsnx.nodes", jc);
    function kc(a) {
        return a.C()
    }

    w("jsnx.classes.func.nodes_iter", kc);
    w("jsnx.nodes_iter", kc);
    function lc(a, b) {
        return a.v(b)
    }

    w("jsnx.classes.func.edges", lc);
    w("jsnx.edges", lc);
    function mc(a, b) {
        return a.g(b)
    }

    w("jsnx.classes.func.edges_iter", mc);
    w("jsnx.edges_iter", mc);
    w("jsnx.degree", function (a, b, c) {
        return a.t(b, c)
    });
    function nc(a, b) {
        return a.B(b)
    }

    w("jsnx.classes.func.neighbors", nc);
    w("jsnx.neighbors", nc);
    function oc(a) {
        return a.S()
    }

    w("jsnx.classes.func.number_of_nodes", oc);
    w("jsnx.number_of_nodes", oc);
    function pc(a) {
        return a.R()
    }

    w("jsnx.classes.func.number_of_edges", pc);
    w("jsnx.number_of_edges", pc);
    function qc(a) {
        var b = a.S(), c = a.R();
        return 0 === c ? 0 : a.c() ? c / (b * (b - 1)) : 2 * c / (b * (b - 1))
    }

    w("jsnx.classes.func.density", qc);
    w("jsnx.density", qc);
    function rc(a) {
        a = a.t().n();
        var b = Math.max.apply(Math, a) + 1, c = La(b);
        x(a, function (a) {
            c[a] += 1
        });
        return c
    }

    w("jsnx.classes.func.degree_histogram", rc);
    w("jsnx.degree_histogram", rc);
    function sc(a) {
        return a.c()
    }

    w("jsnx.classes.func.is_directed", sc);
    w("jsnx.is_directed", sc);
    function tc(a) {
        function b() {
            h(new J("Frozen graph can't be modified"))
        }

        a.add_node = a.N = b;
        a.add_nodes_from = a.i = b;
        a.remove_node = a.U = b;
        a.remove_nodes_from = a.da = b;
        a.add_edge = a.b = b;
        a.add_edges_from = a.d = b;
        a.remove_edge = a.z = b;
        a.remove_edges_from = a.L = b;
        a.clear = a.clear = b;
        a.frozen = a.La = k;
        return a
    }

    w("jsnx.classes.func.freeze", tc);
    w("jsnx.freeze", tc);
    function uc(a) {
        return!!a.La
    }

    w("jsnx.classes.func.is_frozen", uc);
    w("jsnx.is_frozen", uc);
    function vc(a, b) {
        return a.H(b)
    }

    w("jsnx.classes.func.subgraph", vc);
    w("jsnx.subgraph", vc);
    function wc(a, b) {
        s(b) || (b = k);
        var c = new a.constructor;
        b && c.i(a);
        return c
    }

    w("jsnx.classes.func.create_empty_copy", wc);
    w("jsnx.create_empty_copy", wc);
    function xc(a, b) {
        var c = "";
        if (b != l)a.o(b) || h(new J("node " + b + " not in graph")), c = c + ("Node " + b + " has the following properties:\n") + ("Degree: " + a.t(b) + "\n"), c += "Neighbors: " + a.B(b).join(" "); else {
            var c = c + ("Name: " + a.name() + "\n"), c = c + ("Type: " + a.constructor.__name__ + "\n"), c = c + ("Number of nodes: " + a.S() + "\n"), c = c + ("Number of edges: " + a.R() + "\n"), d = a.S();
            if (0 < d)if (a.c())c += "Average in degree: " + (V.w.apply(l, a.va().n()) / d).toFixed(4) + "\n", c += "Average out degree: " + (V.w.apply(l, a.ya().n()) / d).toFixed(4);
            else var e = V.w.apply(l, a.t().n()), c = c + ("Average degree: " + (e / d).toFixed(4))
        }
        return c
    }

    w("jsnx.classes.func.info", xc);
    w("jsnx.info", xc);
    function yc(a, b, c) {
        F(c, function (c, e) {
            a.node.get(e)[b] = c
        })
    }

    w("jsnx.classes.func.set_node_attributes", yc);
    w("jsnx.set_node_attributes", yc);
    function zc(a, b) {
        var c = new L;
        a.node.forEach(function (a, e) {
            b in e && c.set(a, e[b])
        });
        return c
    }

    w("jsnx.classes.func.get_node_attributes", zc);
    w("jsnx.get_node_attributes", zc);
    function Ac(a, b, c) {
        c.forEach(function (c, e) {
            a.get(c[0]).get(c[1])[b] = e
        })
    }

    w("jsnx.classes.func.set_edge_attributes", Ac);
    w("jsnx.set_edge_attributes", Ac);
    function Bc(a, b) {
        var c = new L;
        F(a.v(l, k), function (a) {
            if (b in a[2]) {
                var e = a[2][b];
                a.length = 2;
                c.set(a, e)
            }
        });
        return c
    }

    w("jsnx.classes.func.get_edge_attributes", Bc);
    w("jsnx.get_edge_attributes", Bc);
    function Cc(a, b) {
        a.c() && h(new J("triangles() is not defined for directed graphs."));
        if (b != l && a.o(b))return Math.floor(Dc(a, b).next()[2] / 2);
        var c = new L;
        D(Dc(a, b), function (a) {
            c.set(a[0], Math.floor(a[2] / 2))
        });
        return c
    }

    w("jsnx.algorithms.cluster.triangles", Cc);
    w("jsnx.triangles", Cc);
    function Dc(a, b) {
        a.m() && h(new J("Not defined for multigraphs."));
        var c;
        c = b != l ? T(a.f(b), function (b) {
            return[b, a.get(b)]
        }) : C(a.adj);
        return E(c, function (b) {
            var c = new N(b[1].keys()), f = 0;
            c.remove(b[0]);
            D(c, function (b) {
                var d = new N(a.get(b).keys());
                d.remove(b);
                f += c.q(d).count()
            });
            return[b[0], c.count(), f]
        })
    }

    function Ec(a, b, c) {
        a.m() && h(new J("Not defined for multigraphs."));
        u(c) || (c = "weight");
        var d;
        d = 0 === a.R() ? 1 : Eb(a.v(k), function (a) {
            return H(a[2], c, 1)
        });
        b = b != l ? T(a.f(b), function (b) {
            return[b, a.get(b)]
        }) : C(a.adj);
        return E(b, function (b) {
            var f = b[0], g = new N(b[1].keys());
            g.remove(f);
            var m = 0, r = new N;
            D(g, function (b) {
                var e = H(a.get(f).get(b), c, 1) / d;
                r.add(b);
                var G = (new N(a.get(b).keys())).O(r);
                D(g.q(G), function (g) {
                    var r = H(a.get(b).get(g), c, 1) / d;
                    g = H(a.get(f).get(g), c, 1) / d;
                    m += Math.pow(e * r * g, 1 / 3)
                })
            });
            return[f, g.count(),
                2 * m]
        })
    }

    function Fc(a, b, c, d) {
        2 === arguments.length ? u(b) ? (c = b, b = l) : v(b) && (d = b, b = l) : 3 === arguments.length && v(c) && (d = c, c = l);
        d != l || (d = k);
        var e = Gc(a, b, c).n();
        d || (e = ta(e, function (a) {
            return 0 < a
        }));
        return V.w.apply(V, e) / e.length
    }

    w("jsnx.algorithms.cluster.average_clustering", Fc);
    w("jsnx.average_clustering", Fc);
    function Gc(a, b, c) {
        a.c() && h(new J("Clustering algorithms are not defined for directed graphs."));
        c = c != l ? Ec(a, b, c) : Dc(a, b);
        var d = new L;
        D(c, function (a) {
            d.set(a[0], 0 === a[2] ? 0 : a[2] / (a[1] * (a[1] - 1)))
        });
        return b != l && a.o(b) ? d.n()[0] : d
    }

    w("jsnx.algorithms.cluster.clustering", Gc);
    w("jsnx.clustering", Gc);
    function Hc(a) {
        var b = 0, c = 0;
        D(Dc(a), function (a) {
            c += a[1] * (a[1] - 1);
            b += a[2]
        });
        return 0 === b ? 0 : b / c
    }

    w("jsnx.algorithms.cluster.transitivity", Hc);
    w("jsnx.transitivity", Hc);
    function Ic(a, b) {
        var c = b == l ? Cb(a) : a.f(b), d = new L;
        D(c, function (b) {
            d.set(b, 0);
            var c = 0;
            D(Fb(a.get(b).keys()), function (g) {
                var m = g[0];
                g = g[1];
                var r = (new N(a.get(m).keys())).q(a.get(g).keys());
                r.remove(b);
                r = r.count();
                d.set(b, d.get(b) + r);
                var y = r + 1;
                a.get(m).a(g) && (y += 1);
                c += (a.get(m).count() - y) * (a.get(g).count() - y) + r
            });
            0 < c && d.set(b, d.get(b) / c)
        });
        return b != l && a.o(b) ? d.n()[0] : d
    }

    w("jsnx.algorithms.cluster.square_clustering", Ic);
    w("jsnx.square_clustering", Ic);
    function Jc(a) {
        var b = -1, c = new L, d = new N;
        D(a.p(), function (a) {
            var e = new N(a[1].keys());
            e.remove(a[0]);
            var f = e.count();
            f > b ? (c.set(a[0], e), d = e, b = f) : c.set(a[0], e)
        });
        var e = new N(c.keys()), f = e.O(d), g = new N, m = [], r = [];
        a = new B;
        a.next = function () {
            0 === f.count() && 0 === m.length && h(z);
            var a, A;
            if (0 < f.count())a = C(f).next(), f.remove(a); else {
                var G = m.pop();
                e = G[0];
                g = G[1];
                f = G[2];
                r.pop();
                return this.next()
            }
            r.push(a);
            e.remove(a);
            g.add(a);
            var W = c.get(a), G = e.q(W), W = g.q(W);
            if (0 === G.count() && (0 === W.count() && (A = Da(r)), r.pop(),
                A))return A;
            if (0 === W.count() && 1 === G.count())return A = Ca(r, G.n()), r.pop(), A;
            var ua = G.count(), O = -1, da, X;
            for (A = C(W); (a = Ra(A, l)) !== l && !(a = G.q(c.get(a)), X = a.count(), X > O && (da = a, O = X, O === ua)););
            if (O === ua)return r.pop(), this.next();
            b = -1;
            for (A = C(G); (a = Ra(A, l)) !== l && !(a = G.q(c.get(a)), X = a.count(), X > b && (d = a, b = X, b === ua - 1)););
            O > b && (d = da);
            m.push([e, g, f]);
            e = G;
            g = W;
            f = e.O(d);
            return this.next()
        };
        return a
    }

    w("jsnx.algorithms.clique.find_cliques", Jc);
    w("jsnx.find_cliques", Jc);
    function Kc(a) {
        var b = new L;
        D(a.p(), function (a) {
            var c = new N(a[1].keys());
            c.remove(a[0]);
            b.set(a[0], c)
        });
        if (0 === b.count())return[];
        a = new N(b.keys());
        var c = new N, d = [];
        Lc(b, a, c, [], d);
        return d
    }

    w("jsnx.algorithms.clique.find_cliques_recursive", Kc);
    w("jsnx.find_cliques_recursive", Kc);
    function Lc(a, b, c, d, e) {
        var f = -1, g = b.count(), m, r, y, A;
        for (r = C(c); (y = Ra(r, l)) !== l;)if (y = b.q(a.get(y)), A = y.count(), A > f && (m = y, f = A, A === g))return;
        D(b, function (c) {
            c = b.q(a.get(c));
            var d = c.count();
            d > f && (m = c, f = d)
        });
        g = b.O(m);
        D(g, function (f) {
            b.remove(f);
            d.push(f);
            var g = a.get(f);
            f = b.q(g);
            g = c.q(g);
            0 === f.count() && 0 === g.count() ? e.push(Da(d)) : 0 === g.count() && 1 === f.count() ? e.push(Ca(d, f.n())) : Lc(a, f, g, d, e);
            c.add(d.pop())
        })
    }

    function Mc(a, b) {
        b != l || (b = Jc(a));
        var c = 0;
        M(b, function (a) {
            c = a.length > c ? a.length : c
        });
        return c
    }

    w("jsnx.algorithms.clique.graph_clique_number", Mc);
    w("jsnx.graph_clique_number", Mc);
    function Nc(a, b) {
        b != l || (b = Jc(a));
        return R(b).length
    }

    w("jsnx.algorithms.clique.graph_number_of_cliques", Nc);
    w("jsnx.graph_number_of_cliques", Nc);
    function Oc(a, b, c) {
        c = c != l ? Qa(c) : Qa(Jc(a));
        b != l || (b = a.nodes());
        var d;
        if (ga(b))d = new L, x(b, function (a) {
            d.set(a, ta(c,function (b) {
                return(new N(b)).a(a)
            }).length)
        }); else {
            var e = b;
            d = ta(c,function (a) {
                return(new N(a)).a(e)
            }).length
        }
        return d
    }

    w("jsnx.algorithms.clique.number_of_cliques", Oc);
    w("jsnx.number_of_cliques", Oc);
    function Pc(a, b) {
        if (a.K() != b.K())return n;
        var c = a.t(), d = Cc(a), e = Oc(a), f = [];
        c.forEach(function (a) {
            f.push([c.get(a), d.get(a), e.get(a)])
        });
        f.sort(function (a, b) {
            return a[0] !== b[0] ? a[0] - b[0] : a[1] !== b[1] ? a[1] - b[1] : a[2] - b[2]
        });
        var g = b.t(), m = Cc(b), r = Oc(b), y = [];
        g.forEach(function (a) {
            y.push([g.get(a), m.get(a), r.get(a)])
        });
        y.sort(function (a, b) {
            return a[0] !== b[0] ? a[0] - b[0] : a[1] !== b[1] ? a[1] - b[1] : a[2] - b[2]
        });
        return!Ia(f, y, function (a, b) {
            return Ia(a, b)
        }) ? n : k
    }

    w("jsnx.algorithms.isomorphism.could_be_isomorphic", Pc);
    w("jsnx.could_be_isomorphic", Pc);
    function Qc(a, b) {
        if (a.K() != b.K())return n;
        var c = a.t(), d = Cc(a), e = [];
        c.forEach(function (a) {
            e.push([c.get(a), d.get(a)])
        });
        e.sort(function (a, b) {
            return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]
        });
        var f = b.t(), g = Cc(b), m = [];
        f.forEach(function (a) {
            m.push([f.get(a), g.get(a)])
        });
        m.sort(function (a, b) {
            return a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]
        });
        return!Ia(e, m, function (a, b) {
            return Ia(a, b)
        }) ? n : k
    }

    w("jsnx.algorithms.isomorphism.fast_could_be_isomorphic", Qc);
    w("jsnx.fast_could_be_isomorphic", Qc);
    function Rc(a, b) {
        if (a.K() != b.K())return n;
        var c = a.t().n();
        c.sort();
        var d = b.t().n();
        d.sort();
        return!Ia(c, d) ? n : k
    }

    w("jsnx.algorithms.isomorphism.faster_could_be_isomorphic", Rc);
    w("jsnx.faster_could_be_isomorphic", Rc);
    function Sc(a, b) {
        if ("eg" === b)return Tc(a);
        if (b == l || "hh" === b)return Uc(a);
        h(new mb("`opt_method` must be 'eg' or 'hh'"))
    }

    w("jsnx.algorithms.graphical.is_valid_degree_sequence", Sc);
    w("jsnx.is_valid_degree_sequence", Sc);
    function Uc(a) {
        if (0 === a.length)return k;
        if (!Wa(a) || 0 > Math.min.apply(l, a) || 0 !== V.w.apply(l, a) % 2)return n;
        for (a = Da(a); 0 < a.length;) {
            ra.sort.call(a, Ka);
            if (0 > a[0])break;
            var b = a.pop();
            if (0 === b)return k;
            if (b > a.length)break;
            for (var c = a.length - 1, b = a.length - (b + 1); c > b; c--)a[c] -= 1
        }
        return n
    }

    w("jsnx.algorithms.graphical.is_valid_degree_sequence_havel_hakimi", Uc);
    w("jsnx.is_valid_degree_sequence_havel_hakimi", Uc);
    function Tc(a) {
        if (0 === a.length)return k;
        if (!Wa(a) || 0 > Math.min.apply(l, a) || 0 !== V.w.apply(l, a) % 2)return n;
        var b = a.length, c = Da(a).sort(function (a, b) {
            return b - a
        }), d = [], e;
        e = 1;
        for (a = c.length; e < a; e++)c[e] < c[e - 1] && d.push(e);
        var f, g;
        e = 0;
        for (a = d.length; e < a; e++)if (f = V.w.apply(l, c.slice(0, d[e])), g = d[e] * (d[e] - 1) + V.w.apply(l, Qa(E(S(d[e], b), function (a) {
            return Math.min(d[e], c[a])
        }))), f > g)return n;
        return k
    }

    w("jsnx.algorithms.graphical.is_valid_degree_sequence_erdos_gallai", Tc);
    w("jsnx.is_valid_degree_sequence_erdos_gallai", Tc);
    function Vc(a) {
        try {
            return Wc(a), k
        } catch (b) {
            if (b instanceof pb)return n;
            h(b)
        }
    }

    w("jsnx.algorithms.dag.is_directed_acyclic_graph", Vc);
    w("jsnx.is_directed_acyclic_graph", Vc);
    function Wc(a, b) {
        a.c() || h(new J("Topological sort not defined on undirected graphs."));
        var c = new N, d = [], e = new N;
        b != l || (b = a.C());
        M(b, function (b) {
            if (!e.a(b))for (b = [b]; 0 < b.length;) {
                var g = b[b.length - 1];
                if (e.a(g))b.pop(); else {
                    c.add(g);
                    var m = [];
                    a.get(g).forEach(function (a) {
                        e.a(a) || (c.a(a) && h(new pb("Graph contains a cycle")), m.push(a))
                    });
                    0 < m.length ? b.push.apply(b, m) : (e.add(g), Ea(d, aa, 0, g))
                }
            }
        });
        return d
    }

    w("jsnx.algorithms.dag.topological_sort", Wc);
    w("jsnx.topological_sort", Wc);
    function Xc(a, b) {
        function c(a, b, d, e) {
            b.add(e);
            a.get(e).forEach(function (e) {
                if (b.a(e))b.a(e) && !(0 <= sa(d, e)) && h(new pb("Graph contains a cycle")); else if (!c(a, b, d, e))return n
            });
            Ea(d, aa, 0, e);
            return k
        }

        a.c() || h(new J("Topological sort not defined on undirected graphs."));
        var d = new N, e = [];
        b != l || (b = a.C());
        M(b, function (b) {
            !(0 <= sa(e, b)) && !c(a, d, e, b) && h(new pb("Graph contains a cycle"))
        });
        return e
    }

    w("jsnx.algorithms.dag.topological_sort_recursive", Xc);
    w("jsnx.topological_sort_recursive", Xc);
    var Zc = function Yc(b) {
        b.c() || h(new J("is_aperiodic not defined for undirected graphs."));
        var c = b.C().next(), d = new L;
        d.set(c, 0);
        for (var c = [c], e = 0, f = 1; 0 < c.length;) {
            var g = [];
            x(c, function (c) {
                b.get(c).forEach(function (b) {
                    d.a(b) ? e = Kb(e, d.get(c) - d.get(b) + 1) : (g.push(b), d.set(b, f))
                })
            });
            c = g;
            f += 1
        }
        return d.count() === Ab(b) ? 1 === e : 1 === e && Yc(b.H((new N(b.nodes())).O(d.keys())))
    };
    w("jsnx.algorithms.dag.is_aperiodic", Zc);
    w("jsnx.is_aperiodic", Zc);
    function $c(a, b) {
        this.xa = a;
        this.ra = b
    }

    $c.prototype.getKey = function () {
        return this.xa
    };
    $c.prototype.ha = function () {
        return new $c(this.xa, this.ra)
    };
    function ad(a) {
        this.s = [];
        if (a)a:{
            var b, c;
            if (a instanceof ad) {
                if (b = a.na(), c = a.P(), 0 >= a.ia()) {
                    a = this.s;
                    for (var d = 0; d < b.length; d++)a.push(new $c(b[d], c[d]));
                    break a
                }
            } else b = cb(a), c = bb(a);
            for (d = 0; d < b.length; d++)bd(this, b[d], c[d])
        }
    }

    function bd(a, b, c) {
        var d = a.s;
        d.push(new $c(b, c));
        b = d.length - 1;
        a = a.s;
        for (c = a[b]; 0 < b;)if (d = b - 1 >> 1, a[d].getKey() > c.getKey())a[b] = a[d], b = d; else break;
        a[b] = c
    }

    p = ad.prototype;
    p.remove = function () {
        var a = this.s, b = a.length, c = a[0];
        if (!(0 >= b)) {
            if (1 == b)Aa(a); else {
                a[0] = a.pop();
                for (var a = 0, b = this.s, d = b.length, e = b[a]; a < d >> 1;) {
                    var f = 2 * a + 1, g = 2 * a + 2, f = g < d && b[g].getKey() < b[f].getKey() ? g : f;
                    if (b[f].getKey() > e.getKey())break;
                    b[a] = b[f];
                    a = f
                }
                b[a] = e
            }
            return c.ra
        }
    };
    p.P = function () {
        for (var a = this.s, b = [], c = a.length, d = 0; d < c; d++)b.push(a[d].ra);
        return b
    };
    p.na = function () {
        for (var a = this.s, b = [], c = a.length, d = 0; d < c; d++)b.push(a[d].getKey());
        return b
    };
    p.ta = function (a) {
        return xa(this.s, function (b) {
            return b.getKey() == a
        })
    };
    p.ha = function () {
        return new ad(this)
    };
    p.ia = function () {
        return this.s.length
    };
    p.ja = function () {
        return 0 == this.s.length
    };
    p.clear = function () {
        Aa(this.s)
    };
    function cd() {
        ad.call(this)
    }

    pa(cd, ad);
    function dd(a, b) {
        bd(a, 0, b)
    };
    function ed(a, b) {
        b != l || (b = {});
        "object" !== q(b) && h(new J("The arg_dict argument must be an object."));
        var c = zb(a), d = a.nodes();
        "k"in b && (Na(d), d = d.slice(0, b.k));
        M(d.sort(), function (d) {
            var f = [], f = H(b, "weight", l) === l ? fd(a, d) : gd(a, d, b.weight), g = f[0], m = f[1], f = f[2];
            c = H(b, "endpoints", n) ? hd(c, g, m, f, d) : id(c, g, m, f, d)
        });
        return c = jd(c, Ab(a), H(b, "normalized", k), a.c(), H(b, "k", l))
    }

    w("jsnx.algorithms.centrality.betweenness.betweenness_centrality", ed);
    w("jsnx.betweenness_centrality", ed);
    function kd(a, b) {
        b != l || (b = {});
        "object" !== q(b) && h(new J("The arg_dict argument must be an object."));
        var c = zb(a);
        D(a.g(), function (a) {
            c.set(a, 0)
        });
        var d = a.nodes();
        M(d.sort(), function (d) {
            var f = [], f = H(b, "weight", l) === l ? fd(a, d) : gd(a, d, b.weight);
            c = ld(c, f[0], f[1], f[2], d)
        });
        M(d, function (a) {
            c.remove(a)
        });
        return c = md(c, Ab(a), H(b, "normalized", k), a.c())
    }

    w("jsnx.algorithms.centrality.betweenness.edge_betweenness_centrality", kd);
    w("jsnx.edge_betweenness_centrality", kd);
    function fd(a, b) {
        var c = [], d = new L;
        D(a.C(), function (a) {
            d.set(a, [])
        });
        var e = zb(a), f = new L;
        e.set(b, 1);
        f.set(b, 0);
        for (var g = [b]; 0 < g.length;) {
            var m = g.shift();
            c.push(m);
            var r = f.get(m), y = e.get(m);
            x(a.B(m), function (a) {
                f.a(a) || (g.push(a), f.set(a, r + 1));
                f.get(a) === r + 1 && (e.set(a, e.get(a) + y), d.get(a).push(m))
            })
        }
        return[c, d, e]
    }

    function gd(a, b, c) {
        var d = [], e = new L;
        M(a.nodes(), function (a) {
            e.set(a, [])
        });
        var f = zb(a), g = new L;
        f.set(b, 1);
        var m = new L;
        m.set(b, 0);
        var r = new cd;
        for (dd(r, [b, b]); !r.ja();) {
            var y = r.s[0] && r.s[0].getKey();
            b = r.remove();
            var A = b[0], G = b[1];
            g.a(G) || (f.set(G, f.get(G) + f.get(A)), d.push(G), g.set(G, y), D(a.g(G, k), function (a) {
                var b = a[1];
                a = y + H(a[2], c, 1);
                !g.a(b) && (!m.a(b) || a < m.get(b)) ? (m.set(b, a), bd(r, a, [G, b]), f.set(b, 0), e.set(b, [G])) : a === m.get(b) && (f.set(b, f.get(b) + f.get(G)), e.get(b).push(G))
            }))
        }
        return[d, e, f]
    }

    function id(a, b, c, d, e) {
        for (var f = zb(b); 0 < b.length;) {
            var g = b.pop(), m = (1 + f.get(g)) / d.get(g);
            x(c.get(g), function (a) {
                f.set(a, f.get(a) + d.get(a) * m)
            });
            (g !== e || ja(g) && g.toString() !== e.toString()) && a.set(g, a.get(g) + f.get(g))
        }
        return a
    }

    function hd(a, b, c, d, e) {
        a.set(e, a.get(e) + b.length - 1);
        for (var f = zb(b); 0 < b.length;) {
            var g = b.pop(), m = (1 + f.get(g)) / d.get(g);
            x(c.get(g), function (a) {
                f.set(a, f.get(a) + d.get(a) * m)
            });
            (g !== e || ja(g) && g.toString() !== e.toString()) && a.set(g, a.get(g) + f.get(g) + 1)
        }
        return a
    }

    function ld(a, b, c, d, e) {
        for (var f = zb(b); 0 < b.length;) {
            var g = b.pop(), m = (1 + f.get(g)) / d.get(g);
            x(c.get(g), function (b) {
                var c = d.get(b) * m, e = [b, g];
                a.a(e) || (e = [g, b]);
                a.set(e, a.get(e) + c);
                f.set(b, f.get(b) + c)
            });
            (g !== e || ja(g) && g.toString() !== e.toString()) && a.set(g, a.get(g) + f.get(g))
        }
        return a
    }

    function jd(a, b, c, d, e) {
        var f;
        v(c) && c ? 2 < b && (f = 1 / ((b - 1) * (b - 2))) : v(d) && !d && (f = 0.5);
        s(f) && (e != l && (f = f * b / e), a.forEach(function (b, c) {
            a.set(b, c * f)
        }));
        return a
    }

    function md(a, b, c, d) {
        var e;
        v(c) && c ? 1 < b && (e = 1 / (b * (b - 1))) : v(d) && !d && (e = 0.5);
        s(e) && a.forEach(function (b, c) {
            a.set(b, c * e)
        });
        return a
    };
    function qd(a, b, c) {
        var d = new L, e = 0, f = new L;
        for (f.set(b, 1); 0 < f.count();) {
            b = f;
            f = new L;
            b.forEach(function (b) {
                d.a(b) || (d.set(b, e), a.get(b).forEach(function (a) {
                    f.set(a, 1)
                }))
            });
            if (ha(c) && c <= e)break;
            e += 1
        }
        return d
    }

    w("jsnx.algorithms.shortest_paths.unweighted.single_source_shortest_path_length", qd);
    w("jsnx.single_source_shortest_path_length", qd);
    function rd(a, b) {
        var c = new L;
        M(a, function (d) {
            c.set(d, qd(a, d, b))
        });
        return c
    }

    w("jsnx.algorithms.shortest_paths.unweighted.all_pairs_shortest_path_length", rd);
    w("jsnx.all_pairs_shortest_path_length", rd);
    function sd(a, b, c) {
        c = td(a, b, c);
        a = c[0];
        b = c[1];
        c = c[2];
        for (var d = []; c != l;)d.push(c), c = b.get(c);
        for (c = a.get(d[0]); c != l;)d.unshift(c), c = a.get(c);
        return d
    }

    w("jsnx.algorithms.shortest_paths.unweighted.bidirectional_shortest_path", sd);
    w("jsnx.bidirectional_shortest_path", sd);
    function td(a, b, c) {
        (!s(b) || !s(c)) && h(new mb("Bidirectional shortest path called without source or target"));
        var d = new L, e = new L;
        if (c === b)return d.set(c, l), e.set(b, l), [d, e, b];
        var f, g;
        a.c() ? (f = a.za, g = a.qa) : g = f = a.ba;
        d.set(b, l);
        e.set(c, l);
        for (var m = [b], r = [c], y, A; 0 < m.length && 0 < r.length && !A;)m.length <= r.length ? (y = m, m = [], x(y, function (b) {
            A || D(g.call(a, b), function (a) {
                A || (d.a(a) || (m.push(a), d.set(a, b)), e.a(a) && (A = [d, e, a]))
            })
        })) : (y = r, r = [], x(y, function (b) {
            A || D(f.call(a, b), function (a) {
                A || (e.a(a) || (e.set(a, b),
                    r.push(a)), d.a(a) && (A = [d, e, a]))
            })
        }));
        if (A)return A;
        h(new qb("No path between " + b + " and " + c + "."))
    }

    function ud(a, b, c) {
        var d = 0, e = new L([
            [b, 1]
        ]), f = new L([
            [b, [b]]
        ]);
        if (0 === c)return f;
        for (; 0 < e.count() && !(b = e, e = new L, b.forEach(function (b) {
            a.get(b).forEach(function (a) {
                f.a(a) || (f.set(a, f.get(b).concat([a])), e.set(a, 1))
            })
        }), d += 1, s(c) && c <= d););
        return f
    }

    w("jsnx.algorithms.shortest_paths.unweighted.single_source_shortest_path", ud);
    w("jsnx.single_source_shortest_path", ud);
    function vd(a, b) {
        var c = new L;
        M(a, function (d) {
            c.set(d, ud(a, d, b))
        });
        return c
    }

    w("jsnx.algorithms.shortest_paths.unweighted.all_pairs_shortest_path", vd);
    w("jsnx.all_pairs_shortest_path", vd);
    function wd(a, b, c, d, e) {
        for (var f = 0, g = [b], m = new L([
            [b, f]
        ]), r = new L([
            [b, []]
        ]); 0 < g.length && !(f += 1, b = g, g = [], x(b, function (b) {
            a.get(b).forEach(function (a) {
                m.a(a) ? m.get(a) === f && r.get(a).push(b) : (r.set(a, [b]), m.set(a, f), g.push(a))
            })
        }), d != l && d <= f););
        return c != l ? e ? !r.a(c) ? [
            [],
            -1
        ] : [r.get(c), m.get(c)] : !r.a(c) ? [] : r.get(c) : e ? [r, m] : r
    }

    w("jsnx.algorithms.shortest_paths.unweighted.predecessor", wd);
    w("jsnx.predecessor", wd);
    var xd, yd = l, zd = "add_node add_nodes_from add_edge add_edges_from remove_node remove_nodes_from remove_edge remove_edges_from clear".split(" ");
    w("jsnx.draw", function (a, b, c) {
        function d() {
            ya.j.attr("transform", function (a) {
                return["translate(", a.x, ",", a.y, ")scale(", fa, ")"].join("")
            });
            nd()
        }

        v(b) && (c = b, b = l);
        b = b || yd || {};
        var e = b.d3 || window.d3, f = {};
        Hb(f, Ad, b);
        yd = b;
        e || h(Error("D3 requried for draw()"));
        f.element == l && xd == l && h(Error("Output element required for draw()"));
        xd = H(f, "element", xd);
        e.select(xd).select("svg.jsnx").remove();
        var g = e.select(xd), m = g.append("svg").classed("jsnx", k).attr("pointer-events", "all"), r = m.append("g");
        b = r.append("g").classed("edges",
            k).selectAll("g.edge");
        var y = r.append("g").classed("nodes", k).selectAll("g.node"), A = e.layout.force(), G = f.width || parseInt(g.style("width"), 10), W = f.height || parseInt(g.style("height"), 10), ua = f.layout_attr, g = f.nodelist || l, O, da, X, od = a.c(), za = f.weighted, ya = {j: y, l: b};
        if (f.with_labels) {
            var Ga = f.labels;
            O = "object" === q(Ga) ? function (a) {
                return H(Ga, a.node, "")
            } : ia(Ga) ? Ga : u(Ga) ? function (a) {
                return a.data[Ga]
            } : function (a) {
                return a.node
            }
        }
        f.labels = O;
        if (za) {
            var Sa = f.weights;
            X = "object" === q(Sa) ? function (a) {
                return H(Sa,
                    a.node, 1)
            } : ia(Sa) ? Sa : u(Sa) ? function (a) {
                return H(a.data, Sa, 1)
            } : ba(1)
        }
        if (f.with_edge_labels) {
            var Ta = f.edge_labels;
            da = za && !s(Ta) ? X : "object" === q(Ta) ? function (a) {
                return H(Ga, a.node, "")
            } : ia(Ta) ? Ta : u(Ta) ? function (a) {
                return a.data[Ta]
            } : function (a) {
                return a.edge
            };
            f.edge_labels = da
        }
        if (za && f.weighted_stroke) {
            var za = Oa(a.g(l, k), function (a, b) {
                b = X({data: b[2]});
                return a > b ? a : b
            }), ge = e.scale.linear().range([2, f.edge_style["stroke-width"]]).domain([0, za]);
            f.edge_style["stroke-width"] = function (a) {
                return ge(X.call(this,
                    a))
            }
        }
        m.select("svg.jsnx").remove();
        m.attr("width", G + "px").attr("height", W + "px").style("opacity", 1E-6).transition().duration(1E3).style("opacity", 1);
        var he = {size: k, nodes: k, links: k, start: k};
        M(ua, function (a) {
            if (!(a in he))A[a](ua[a])
        });
        A.nodes([]).links([]).size([G, W]);
        var db = 1, fa = 1;
        if (f.pan_zoom.enabled) {
            var pd = f.pan_zoom.scale;
            (function () {
                var a = n, b = 1, c = db;
                m.call(e.behavior.zoom().on("zoom", function () {
                    var f = e.event.sourceEvent.shiftKey;
                    (f = pd && f || !(pd || f)) && !a ? (b = e.event.scale, c = db, a = k) : !f && a && (a = n);
                    db = f ? c * (e.event.scale / b) : db;
                    fa = !f ? db / e.event.scale : fa;
                    f = e.event.translate;
                    r.attr("transform", "translate(" + f[0] + "," + f[1] + ")scale(" + e.event.scale + ")");
                    d()
                }))
            })()
        }
        var nd = ea, Ha = f.edge_offset, wb = f.node_attr.r, xb = f.node_style["stroke-width"];
        "circle" === f.node_shape ? (ia(wb) || (wb = function () {
            return f.node_attr.r
        }), ia(xb) || (xb = function () {
            return f.node_style["stroke-width"]
        }), Ha = function (a) {
            return[wb(a.source) + xb(a.source), wb(a.target) + xb(a.target)]
        }) : (ga(Ha) && (Ha = function () {
            return f.edge_offset
        }), ha(Ha) && (Ha =
            function () {
                return[f.edge_offset, f.edge_offset]
            }));
        var Ua = f.edge_style["stroke-width"];
        ia(Ua) || (Ua = function () {
            return f.edge_style["stroke-width"]
        });
        var yb = f.edge_label_offset, nd = od ? function () {
            ya.l.each(function (a) {
                if (a.source !== a.target) {
                    var b = e.select(this), c = a.source.x, d = a.source.y, f = a.target.x, g = a.target.y, m = V.sa(c, d, f, g), f = Math.sqrt(Math.pow(f - c, 2) + Math.pow(g - d, 2)), g = Ha(a), g = [g[0] * fa, g[1] * fa];
                    b.attr("transform", ["translate(", c, ",", d, ")rotate(", m, ")"].join(""));
                    c = Ua(a) * fa;
                    d = f - g[1] - 2 * c;
                    m = c / 2;
                    b.select(".line").attr("d",
                        ["M", g[0], 0, "L", g[0], -m, "L", d, -m, "L", d, -c, "L", f - g[1], 0, "z"].join(" "));
                    c = 1 / fa;
                    b.select("text").attr("x", yb.x * c + g[0] + (f * c - g[0] - g[1]) / 2).attr("y", -Ua(a) / 2 + -yb.y * c).attr("transform", "scale(" + fa + ")")
                }
            })
        } : function () {
            ya.l.each(function (a) {
                if (a.source !== a.target) {
                    var b = e.select(this), c = a.source.x, d = a.source.y, g = a.target.x, m = a.target.y, r = V.sa(c, d, g, m), g = Math.sqrt(Math.pow(g - c, 2) + Math.pow(m - d, 2)), m = g / 2, y = Ha(a), y = [y[0] * fa, y[1] * fa], A = 1 / fa, O = Ua(a) * fa, ua = 90 < r && 279 > r;
                    b.attr("transform", ["translate(", c, ",", d, ")rotate(",
                        r, ")"].join(""));
                    b.select(".line").attr("d", ["M", y[0], O / 4, "L", y[0], -O / 4, "L", g - y[1], -O / 4, "L", g - y[1], O / 4, "z"].join(" "));
                    f.with_edge_labels && b.select("text").attr("x", (ua ? 1 : -1) * yb.x * A + y[0] + (g * A - y[0] - y[1]) / 2).attr("y", -Ua(a) / 4 + -yb.y * A).attr("transform", "scale(" + fa + ")" + (ua ? "rotate(180," + m * (1 / fa) + ",0)" : ""))
                }
            })
        };
        A.on("tick", d);
        G = a.C();
        W = a.g();
        g && (c = n, G = a.f(g), W = a.g(g));
        ya.j = Bd(a, G, A, y, f.node_shape, O);
        ya.l = Cd(a, W, A, b, da);
        Dd(ya.j, {attr: f.node_attr, style: f.node_style, aa: f.label_style, $: f.label_attr}, f.with_labels);
        Ed(ya.l, {attr: f.edge_attr, style: f.edge_style, aa: f.edge_label_style, $: f.edge_label_attr}, f.with_edge_labels, l, od);
        c ? Fd(a, A, f, ya) : a.bound ? Gd(a) : Hd(a);
        A.start();
        return A
    });
    function Bd(a, b, c, d, e, f) {
        var g = c.nodes();
        M(b, function (b) {
            var c = a.node.get(b);
            b = {node: b, data: c, G: a};
            g.push(b);
            c.__d3datum__ = b
        });
        d = d.data(g, Id);
        b = d.enter().append("g").classed("node", k).call(c.drag);
        b.append(e).classed("node-shape", k);
        f && b.append("text").text(f);
        return d
    }

    function Cd(a, b, c, d, e) {
        var f = c.links();
        M(b, function (b) {
            var c = b[0], d = b[1];
            b = b[2] || a.W(c, d);
            c = {edge: [c, d], redge: [d, c], source: a.node.get(c).__d3datum__, target: a.node.get(d).__d3datum__, data: b, G: a};
            f.push(c);
            b.__d3datum__ = c
        });
        d = d.data(f, Jd);
        b = d.enter().append("g").classed("edge", k);
        b.append("path").classed("line", k);
        e && b.append("text").text(e);
        return d
    }

    function Dd(a, b, c, d) {
        if (d != l) {
            var e = {};
            M(d, function (a) {
                e[t(a) ? a[0] : a] = k
            });
            a = a.filter(function (a) {
                return a.node in e
            })
        }
        var f = a.selectAll(".node-shape");
        F(b.attr, function (a, b) {
            f.attr(b, a)
        });
        F(b.style, function (a, b) {
            f.style(b, a)
        });
        if (c) {
            var g = a.selectAll("text");
            F(b.$, function (a, b) {
                g.attr(b, a)
            });
            F(b.aa, function (a, b) {
                g.style(b, a)
            })
        }
    }

    function Ed(a, b, c, d, e) {
        if (d != l) {
            var f = {};
            M(d, function (a) {
                f[[a[0], a[1]]] = k
            });
            a = a.filter(function (a) {
                return a.edge in f || e || a.redge in f
            })
        }
        var g = a.selectAll(".line");
        F(b.attr, function (a, b) {
            g.attr(b, a)
        });
        F(b.style, function (a, b) {
            "stroke-width" != b && g.style(b, a)
        });
        g.style("stroke-width", 0);
        if (c) {
            var m = a.selectAll("text");
            F(b.$, function (a, b) {
                m.attr(b, a)
            });
            F(b.aa, function (a, b) {
                m.style(b, a)
            })
        }
    }

    function Id(a) {
        return a.node
    }

    function Jd(a) {
        return a.edge
    }

    function Kd(a, b, c, d) {
        var e = c.nodes();
        M(a.f(b), function (b) {
            Ba(e, a.node.get(b).__d3datum__)
        });
        d = d.data(e, Id);
        d.exit().remove();
        return d
    }

    function Ld(a, b, c, d) {
        var e = c.links();
        M(b, function (b) {
            Ba(e, H(a.W(b[0], b[1], {}), "__d3datum__", l))
        });
        d = d.data(e, Jd);
        d.exit().remove();
        return d
    }

    function Fd(a, b, c, d) {
        Gd(a, n);
        var e = a.constructor.prototype, f = c.node_shape, g = {attr: c.node_attr, style: c.node_style, $: c.label_attr, aa: c.label_style}, m = {attr: c.edge_attr, style: c.edge_style, $: c.edge_label_attr, aa: c.edge_label_style}, r = c.labels, y = c.edge_labels, A = c.with_labels, G = c.with_edge_labels, W = a.c();
        a.add_node = a.N = function (a) {
            var c = !this.o(a);
            e.add_node.apply(this, arguments);
            c && (d.j = Bd(this, [a], b, d.j, f, r));
            Dd(d.j, g, A, [a]);
            b.start()
        };
        a.add_nodes_from = a.i = function (a) {
            var c = ta(R(a), function (a) {
                return!this.o(t(a) ?
                    a[0] : a)
            }, this);
            e.add_nodes_from.apply(this, arguments);
            0 < c.length && (d.j = Bd(this, c, b, d.j, f, r));
            Dd(d.j, g, A, a);
            b.start()
        };
        a.add_edge = a.b = function (c, O) {
            var da = !this.T(c, O), X = [];
            da && (X = ta(c == O ? [c] : [c, O], function (a) {
                return!this.o(a)
            }, this));
            e.add_edge.apply(a, arguments);
            0 < X.length && (d.j = Bd(this, X, b, d.j, f, r), Dd(d.j, g, A, X));
            da && (d.l = Cd(this, [
                [c, O]
            ], b, d.l, y));
            Ed(d.l, m, G, [
                [c, O]
            ], W);
            b.start()
        };
        a.add_edges_from = a.d = function (c) {
            var O = [], da = [], X = {}, W = {}, za = this.c();
            M(c, function (a) {
                var b = a[0];
                a = a[1];
                if (!this.T(b,
                    a) && !([b, a]in X) && (za || !([a, b]in X)))O.push([b, a]), X[[b, a]] = k, !this.o(b) && !(b in W) && (da.push(b), W[b] = k), !this.o(a) && !(a in W) && (da.push(a), W[a] = k)
            }, this);
            e.add_edges_from.apply(a, arguments);
            0 < da.length && (d.j = Bd(this, da, b, d.j, f, r), Dd(d.j, g, A, da));
            0 < O.length && (d.l = Cd(this, O, b, d.l, y));
            Ed(d.l, m, G, O, za);
            b.start()
        };
        a.remove_node = a.U = function (c) {
            try {
                if (this.o(c)) {
                    d.j = Kd(this, [c], b, d.j);
                    var f = this.g([c]);
                    this.c() && (f = Pa(f, this.Q([c])));
                    d.l = Ld(this, f, b, d.l);
                    b.resume()
                }
            } catch (g) {
            }
            e.remove_node.apply(a, arguments)
        };
        a.remove_nodes_from = a.da = function (c) {
            try {
                d.j = Kd(this, c, b, d.j);
                var f = this.g(c);
                this.c() && (f = Pa(f, this.Q(c)));
                d.l = Ld(this, f, b, d.l);
                b.resume()
            } catch (g) {
            }
            e.remove_nodes_from.apply(a, arguments)
        };
        a.remove_edge = a.z = function (c, f) {
            try {
                d.l = Ld(this, [
                    [c, f]
                ], b, d.l), b.resume()
            } catch (g) {
            }
            e.remove_edge.apply(a, arguments)
        };
        a.remove_edges_from = a.L = function (c) {
            try {
                d.l = Ld(this, c, b, d.l), b.resume()
            } catch (f) {
            }
            e.remove_edges_from.apply(a, arguments)
        };
        a.clear = a.clear = function () {
            d.j = d.j.data([], Id);
            d.j.exit().remove();
            d.l =
                d.l.data([], Jd);
            d.l.exit().remove();
            b.nodes([]).links([]).resume();
            e.clear.apply(a, arguments)
        };
        a.bound = k
    }

    w("jsnx.is_bound", function (a) {
        return a.bound
    });
    function Gd(a, b) {
        if (a.bound) {
            var c = a.constructor.prototype;
            x(zd, function (b) {
                a[b] = c[b]
            });
            delete a.bound;
            (!s(b) || b) && Hd(a)
        }
    }

    w("jsnx.unbind", Gd);
    function Hd(a) {
        M(a.C(k), function (a) {
            fb(a[1], "__d3datum__")
        });
        M(a.g(l, k), function (a) {
            fb(a[2], "__d3datum__")
        })
    }

    var Ad = {layout_attr: {charge: -120, linkDistance: 60}, node_shape: "circle", node_attr: {r: 10}, node_style: {"stroke-width": 2, stroke: "#333", fill: "#999", cursor: "pointer"}, edge_attr: {}, edge_style: {fill: "#000", "stroke-width": 3}, label_attr: {}, label_style: {"text-anchor": "middle", "dominant-baseline": "central", cursor: "pointer", "-webkit-user-select": "none", fill: "#000"}, edge_label_attr: {}, edge_label_style: {"font-size": "0.8em", "text-anchor": "middle", "-webkit-user-select": "none"}, edge_label_offset: {x: 0, y: 0.5}, with_labels: n,
        with_edge_labels: n, edge_offset: 10, weighted: n, weights: "weight", weighted_stroke: k, pan_zoom: {enabled: k, scale: k}};

    function Md(a, b) {
        var c = S(a), d, e, f = new B;
        try {
            e = [c.next()]
        } catch (g) {
            return g !== z && h(g), f
        }
        f.next = function () {
            0 === e.length && h(z);
            return e.splice(0, 1)[0]
        };
        return T(f, function (a) {
            d = a;
            return S(b)
        }, function () {
            try {
                var a = c.next();
                e.push(a);
                return[d, a]
            } catch (b) {
                b !== z && h(b)
            }
        })
    }

    function Nd(a, b, c) {
        c = Od(b, c);
        c.d(Md(b, a));
        return c
    }

    w("jsnx.generators.classic.full_rary_tree", Nd);
    w("jsnx.full_rary_tree", Nd);
    function Pd(a, b, c) {
        b = 1 === a ? 2 : Math.floor((1 - Math.pow(a, b + 1)) / (1 - a));
        c = Od(b, c);
        c.d(Md(b, a));
        return c
    }

    w("jsnx.generators.classic.balanced_tree", Pd);
    w("jsnx.balanced_tree", Pd);
    function Qd(a, b) {
        var c = Od(a, b);
        c.name("complete_graph(" + a + ")");
        1 < a && c.d(c.c() ? Gb(S(a)) : Fb(S(a)));
        return c
    }

    w("jsnx.generators.classic.complete_graph", Qd);
    w("jsnx.complete_graph", Qd);
    function Rd(a, b) {
        var c = Sd(a, b);
        c.name("cycle_graph(" + a + ")");
        1 < a && c.b(a - 1, 0);
        return c
    }

    w("jsnx.generators.classic.cycle_graph", Rd);
    w("jsnx.cycle_graph", Rd);
    function Od(a, b) {
        a instanceof P && (b = a, a = l);
        a != l || (a = 0);
        var c;
        b != l ? (c = b, c.clear()) : c = new P;
        c.i(S(a));
        c.name("empty_graph(" + a + ")");
        return c
    }

    w("jsnx.generators.classic.empty_graph", Od);
    w("jsnx.empty_graph", Od);
    function Td(a, b, c, d) {
        var e = Od(0, d);
        e.name("grid_2d_graph");
        d = Qa(S(a));
        var f = Qa(S(b));
        x(d, function (a) {
            x(f, function (b) {
                e.N([a, b])
            })
        });
        D(S(1, a), function (a) {
            x(f, function (b) {
                e.b([a, b], [a - 1, b])
            })
        });
        x(d, function (a) {
            D(S(1, b), function (b) {
                e.b([a, b], [a, b - 1])
            })
        });
        e.c() && (D(S(0, a - 1), function (a) {
            x(f, function (b) {
                e.b([a, b], [a + 1, b])
            })
        }), x(d, function (a) {
            D(S(0, b - 1), function (b) {
                e.b([a, b], [a, b + 1])
            })
        }));
        c && (2 < b && (x(d, function (a) {
            e.b([a, 0], [a, b - 1])
        }), e.c() && x(d, function (a) {
            e.b([a, b - 1], [a, 0])
        })), 2 < a && (x(f, function (b) {
            e.b([0,
                b], [a - 1, b])
        }), e.c() && x(f, function (b) {
            e.b([a - 1, b], [0, b])
        })), e.name("periodic_grid_2d_graph(" + a + "," + b + ")"));
        return e
    }

    w("jsnx.generators.classic.grid_2d_graph", Td);
    w("jsnx.grid_2d_graph", Td);
    function Ud(a) {
        a = Od(0, a);
        a.name("null_graph()");
        return a
    }

    w("jsnx.generators.classic.null_graph", Ud);
    w("jsnx.null_graph", Ud);
    function Sd(a, b) {
        var c = Od(a, b);
        c.name("path_graph(" + a + ")");
        c.d(E(S(a - 1), function (a) {
            return[a, a + 1]
        }));
        return c
    }

    w("jsnx.generators.classic.path_graph", Sd);
    w("jsnx.path_graph", Sd);
    function Vd(a) {
        a = Od(1, a);
        a.name("null_graph()");
        return a
    }

    w("jsnx.generators.classic.trivial_graph", Vd);
    w("jsnx.trivial_graph", Vd);
    function Wd(a, b, c) {
        c != l || (c = n);
        var d = Od(a);
        d.name("fast_gnp_random_graph(" + a + "," + b + ")");
        if (0 >= b || 1 <= b)return Xd(a, b, c);
        var e = 1, f = -1;
        b = Math.log(1 - b);
        if (c)for (d = new Y(d); e < a;) {
            c = Math.log(1 - Math.random());
            f = f + 1 + Math.floor(c / b);
            for (e === f && (f += 1); f >= a && e < a;)f -= a, e += 1, e == f && (f += 1);
            e < a && d.b(e, f)
        } else for (; e < a;) {
            c = Math.log(1 - Math.random());
            for (f = f + 1 + Math.floor(c / b); f >= e && e < a;)f -= e, e += 1;
            e < a && d.b(e, f)
        }
        return d
    }

    w("jsnx.generators.random_graphs.fast_gnp_random_graph", Wd);
    w("jsnx.fast_gnp_random_graph", Wd);
    function Xd(a, b, c) {
        var d;
        d = c ? new Y : new P;
        d.i(S(a));
        d.name("gnp_random_graph(" + a + "," + b + ")");
        if (0 >= b)return d;
        if (1 <= b)return Qd(a, d);
        a = d.c() ? Gb(S(a)) : Fb(S(a));
        D(a, function (a) {
            Math.random() < b && d.b(a[0], a[1])
        });
        return d
    }

    w("jsnx.generators.random_graphs.gnp_random_graph", Xd);
    w("jsnx.gnp_random_graph", Xd);
    w("jsnx.binomial_graph", Xd);
    w("jsnx.erdos_renyi_graph", Xd);
    function Yd(a, b) {
        Sc(a) || h(new J("Invalid degree sequence"));
        b != l && (b.c() && h(new J("Directed Graph not supported")), b.m() && h(new J("Havel-Hakimi requires simple graph")));
        var c = a.length, d = Od(c, b);
        if (0 === c || 0 === Math.max.apply(l, a))return d;
        for (c = Qa(Q(d, function (b) {
            return[a[b], b]
        })); 0 < c.length;) {
            c.sort(function (a, b) {
                return a[0] !== b[0] ? a[0] - b[0] : +a[1] - +b[1]
            });
            if (0 > c[0][0])return n;
            var e = c.pop();
            if (0 === e[0])break;
            if (e[0] > c.length)return n;
            for (var f = c.length, g = f - e[0]; g < f; g++)d.b(e[1], c[g][1]), c[g][0] -=
                1
        }
        d.name("havel_hakimi_graph " + d.K() + " nodes " + d.size() + " edges");
        return d
    }

    w("jsnx.generators.degree_seq.havel_hakimi_graph", Yd);
    w("jsnx.havel_hakimi_graph", Yd);
    function Zd() {
        var a = new P;
        a.i(S(34));
        a.name("Zachary's Karate Club");
        var b = 0;
        x("0 1 1 1 1 1 1 1 1 0 1 1 1 1 0 0 0 1 0 1 0 1 0 0 0 0 0 0 0 0 0 1 0 0;1 0 1 1 0 0 0 1 0 0 0 0 0 1 0 0 0 1 0 1 0 1 0 0 0 0 0 0 0 0 1 0 0 0;1 1 0 1 0 0 0 1 1 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 1 0;1 1 1 0 0 0 0 1 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 1;0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1;1 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 0 1 0 0 1 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1 0 0 0 1 0 0;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 1 0 0;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 0 1;0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 0 0 0 0 0 0 1;0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 1;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0 0 1 0 0 0 0 0 1 1;0 1 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1;1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 0 0 1 0 0 0 1 1;0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 1 0 0 1 0 1 0 1 1 0 0 0 0 0 1 1 1 0 1;0 0 0 0 0 0 0 0 1 1 0 0 0 1 1 1 0 0 1 1 1 0 1 1 0 0 1 1 1 1 1 1 1 0".split(";"),
            function (c) {
                M(c.split(" "), function (c, e) {
                    "1" === c && a.b(b, e)
                });
                b += 1
            });
        return a
    }

    w("jsnx.generators.social.karate_club_graph", Zd);
    w("jsnx.karate_club_graph", Zd);
    function $d() {
        var a = new P;
        a.i("Evelyn Jefferson;Laura Mandeville;Theresa Anderson;Brenda Rogers;Charlotte McDowd;Frances Anderson;Eleanor Nye;Pearl Oglethorpe;Ruth DeSand;Verne Sanderson;Myra Liddel;Katherina Rogers;Sylvia Avondale;Nora Fayette;Helen Lloyd;Dorothy Murchison;Olivia Carleton;Flora Price".split(";"), {Ja: 0});
        a.i("E1 E2 E3 E4 E5 E6 E7 E8 E9 E10 E11 E12 E13 E14".split(" "), {Ja: 1});
        a.d([
            ["Evelyn Jefferson", "E1"],
            ["Evelyn Jefferson", "E2"],
            ["Evelyn Jefferson", "E3"],
            ["Evelyn Jefferson", "E4"],
            ["Evelyn Jefferson", "E5"],
            ["Evelyn Jefferson", "E6"],
            ["Evelyn Jefferson", "E8"],
            ["Evelyn Jefferson", "E9"],
            ["Laura Mandeville", "E1"],
            ["Laura Mandeville", "E2"],
            ["Laura Mandeville", "E3"],
            ["Laura Mandeville", "E5"],
            ["Laura Mandeville", "E6"],
            ["Laura Mandeville", "E7"],
            ["Laura Mandeville", "E8"],
            ["Theresa Anderson", "E2"],
            ["Theresa Anderson", "E3"],
            ["Theresa Anderson", "E4"],
            ["Theresa Anderson", "E5"],
            ["Theresa Anderson", "E6"],
            ["Theresa Anderson", "E7"],
            ["Theresa Anderson", "E8"],
            ["Theresa Anderson", "E9"],
            ["Brenda Rogers",
                "E1"],
            ["Brenda Rogers", "E3"],
            ["Brenda Rogers", "E4"],
            ["Brenda Rogers", "E5"],
            ["Brenda Rogers", "E6"],
            ["Brenda Rogers", "E7"],
            ["Brenda Rogers", "E8"],
            ["Charlotte McDowd", "E3"],
            ["Charlotte McDowd", "E4"],
            ["Charlotte McDowd", "E5"],
            ["Charlotte McDowd", "E7"],
            ["Frances Anderson", "E3"],
            ["Frances Anderson", "E5"],
            ["Frances Anderson", "E6"],
            ["Frances Anderson", "E8"],
            ["Eleanor Nye", "E5"],
            ["Eleanor Nye", "E6"],
            ["Eleanor Nye", "E7"],
            ["Eleanor Nye", "E8"],
            ["Pearl Oglethorpe", "E6"],
            ["Pearl Oglethorpe", "E8"],
            ["Pearl Oglethorpe",
                "E9"],
            ["Ruth DeSand", "E5"],
            ["Ruth DeSand", "E7"],
            ["Ruth DeSand", "E8"],
            ["Ruth DeSand", "E9"],
            ["Verne Sanderson", "E7"],
            ["Verne Sanderson", "E8"],
            ["Verne Sanderson", "E9"],
            ["Verne Sanderson", "E12"],
            ["Myra Liddel", "E8"],
            ["Myra Liddel", "E9"],
            ["Myra Liddel", "E10"],
            ["Myra Liddel", "E12"],
            ["Katherina Rogers", "E8"],
            ["Katherina Rogers", "E9"],
            ["Katherina Rogers", "E10"],
            ["Katherina Rogers", "E12"],
            ["Katherina Rogers", "E13"],
            ["Katherina Rogers", "E14"],
            ["Sylvia Avondale", "E7"],
            ["Sylvia Avondale", "E8"],
            ["Sylvia Avondale",
                "E9"],
            ["Sylvia Avondale", "E10"],
            ["Sylvia Avondale", "E12"],
            ["Sylvia Avondale", "E13"],
            ["Sylvia Avondale", "E14"],
            ["Nora Fayette", "E6"],
            ["Nora Fayette", "E7"],
            ["Nora Fayette", "E9"],
            ["Nora Fayette", "E10"],
            ["Nora Fayette", "E11"],
            ["Nora Fayette", "E12"],
            ["Nora Fayette", "E13"],
            ["Nora Fayette", "E14"],
            ["Helen Lloyd", "E7"],
            ["Helen Lloyd", "E8"],
            ["Helen Lloyd", "E10"],
            ["Helen Lloyd", "E11"],
            ["Helen Lloyd", "E12"],
            ["Dorothy Murchison", "E8"],
            ["Dorothy Murchison", "E9"],
            ["Olivia Carleton", "E9"],
            ["Olivia Carleton", "E11"],
            ["Flora Price", "E9"],
            ["Flora Price", "E11"]
        ]);
        return a
    }

    w("jsnx.generators.social.davis_southern_women_graph", $d);
    w("jsnx.davis_southern_women_graph", $d);
    function ae() {
        var a = new P;
        a.b("Acciaiuoli", "Medici");
        a.b("Castellani", "Peruzzi");
        a.b("Castellani", "Strozzi");
        a.b("Castellani", "Barbadori");
        a.b("Medici", "Barbadori");
        a.b("Medici", "Ridolfi");
        a.b("Medici", "Tornabuoni");
        a.b("Medici", "Albizzi");
        a.b("Medici", "Salviati");
        a.b("Salviati", "Pazzi");
        a.b("Peruzzi", "Strozzi");
        a.b("Peruzzi", "Bischeri");
        a.b("Strozzi", "Ridolfi");
        a.b("Strozzi", "Bischeri");
        a.b("Ridolfi", "Tornabuoni");
        a.b("Tornabuoni", "Guadagni");
        a.b("Albizzi", "Ginori");
        a.b("Albizzi", "Guadagni");
        a.b("Bischeri",
            "Guadagni");
        a.b("Guadagni", "Lamberteschi");
        return a
    }

    w("jsnx.generators.social.florentine_families_graph", ae);
    w("jsnx.florentine_families_graph", ae);
    function be(a, b) {
        b != l && b.c() && h(new J("Directed Graph not supported"));
        return ce(a, b)
    }

    w("jsnx.generators.small.make_small_undirected_graph", be);
    function ce(a, b) {
        var c = a[0], d = a[1], e = a[2], f = Od(e, b), g = f.nodes();
        if ("adjacencylist" == c) {
            var m = a[3];
            m.length != e && h(new J("invalid graph_description"));
            x(g, function (a) {
                M(m[a], function (b) {
                    f.b(b - 1, a)
                })
            })
        } else"edgelist" == c && M(a[3], function (a) {
            var b = a[0] - 1;
            a = a[1] - 1;
            (0 > b || b > e - 1 || 0 > a || a > e - 1) && h(new J("invalid graph_description"));
            f.b(b, a)
        });
        f.name = d;
        return f
    }

    w("jsnx.generators.small.make_small_graph", ce);
    w("jsnx.make_small_graph", ce);
    function de(a) {
        return be(["adjacencylist", "Bull Graph", 5, [
            [2, 3],
            [1, 3, 4],
            [1, 2, 5],
            [2],
            [3]
        ]], a)
    }

    w("jsnx.generators.small.bull_graph", de);
    w("jsnx.bull_graph", de);
    function ee(a) {
        return be(["adjacencylist", "Krackhardt Kite Social Network", 10, [
            [2, 3, 4, 6],
            [1, 4, 5, 7],
            [1, 4, 6],
            [1, 2, 3, 5, 6, 7],
            [2, 4, 7],
            [1, 3, 4, 7, 8],
            [2, 4, 5, 6, 8],
            [6, 7, 9],
            [8, 10],
            [9]
        ]], a)
    }

    w("jsnx.generators.small.krackhardt_kite_graph", ee);
    w("jsnx.krackhardt_kite_graph", ee);
    function fe(a, b, c) {
        var d = b;
        !ia(d.set) && !ia(d.get) && (d = new L(d));
        ia(b) && (d = new L, D(a.C(), function (a) {
            d.set(a, b(a))
        }));
        return!s(c) || c ? ie(a, d) : je(a, d)
    }

    w("jsnx.relabel.relabel_nodes", fe);
    w("jsnx.relabel_nodes", fe);
    function je(a, b) {
        var c = new N(b.keys()), d;
        if (0 < c.q(b.n()).count()) {
            c = new Y(b);
            c.L(c.ea());
            try {
                d = Wc(c)
            } catch (e) {
                e instanceof pb && h(new pb("The node label sets are overlapping and no ordering can resolve the mapping. Use copy=True."))
            }
            d.reverse()
        } else d = c;
        var f = a.m(), g = a.c(), m;
        D(d, function (c) {
            var d;
            b.a(c) && (d = b.get(c), a.o(c) || h(new J("Node " + c + " is not in the graph.")), a.N(d, a.node.get(c)), f ? (m = va(a.v(c, k, k), function (a) {
                return[d, a[1], a[2], a[3]]
            }), g && (m = Ca(m, va(a.Y(c, k, k), function (a) {
                return[a[0], d, a[2],
                    a[3]]
            })))) : (m = va(a.v(c, k), function (a) {
                return[d, a[1], a[2]]
            }), g && (m = Ca(m, va(a.Y(c, k), function (a) {
                return[a[0], d, a[2]]
            })))), a.U(c), a.d(m))
        });
        return a
    }

    function ie(a, b) {
        var c = new a.constructor;
        c.name("(" + a.name() + ")");
        a.m() ? c.d(E(a.g(l, k, k), function (a) {
            return[b.get(a[0], a[0]), b.get(a[1], a[1]), a[2], gb(a[3])]
        })) : c.d(E(a.g(l, k), function (a) {
            return[b.get(a[0], a[0]), b.get(a[1], a[1]), gb(a[2])]
        }));
        c.i(E(Cb(a), function (a) {
            return b.get(a, a)
        }));
        var d = new L;
        a.node.forEach(function (c) {
            d.set(b.get(c, c), gb(a.node.get(c)))
        });
        d.forEach(function (a, b) {
            c.node.set(a, b)
        });
        I(c.graph, gb(a.graph));
        return c
    }

    function ke(a, b, c, d) {
        3 === arguments.length && v(c) ? (d = c, c = l) : 2 === arguments.length && (v(b) ? (d = b, b = l) : u(b) && (c = b, b = l));
        b != l || (b = 0);
        c != l || (c = "default");
        d != l || (d = k);
        a.S();
        var e = new L, f, g, m, r;
        if ("default" === c) {
            f = a.nodes();
            g = 0;
            m = b;
            for (r = f.length; g < r; g++, m++)e.set(f[g], m)
        } else if ("sorted" === c) {
            f = a.nodes();
            ra.sort.call(f, Ka);
            g = 0;
            m = b;
            for (r = f.length; g < r; g++, m++)e.set(f[g], m)
        } else if ("increasing degree" === c) {
            f = Qa(a.u());
            f.sort(function (a, b) {
                return a[1] - b[1]
            });
            g = 0;
            m = b;
            for (r = f.length; g < r; g++, m++)e.set(f[g][0], m)
        } else if ("decreasing degree" ===
            c) {
            f = Qa(a.u());
            f.sort(function (a, b) {
                return b[1] - a[1]
            });
            g = 0;
            m = b;
            for (r = f.length; g < r; g++, m++)e.set(f[g][0], m)
        } else h(new J("Unkown node ordering: " + c));
        g = fe(a, e);
        g.name("(" + a.name() + ")_with_int_labels");
        d || (g.node_labels = e);
        return g
    }

    w("jsnx.relabel.convert_node_labels_to_integers", ke);
    w("jsnx.convert_node_labels_to_integers", ke);
}));
