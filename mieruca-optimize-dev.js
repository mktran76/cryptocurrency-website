(() => {
    var x = Object.defineProperty;
    var i = (e, t) => x(e, "name", { value: t, configurable: !0 });
    (function () {
        sessionStorage.setItem("__mo:t0", performance.now().toString());
        function e() {
            sessionStorage.setItem("__mo:prevUrl", location.href);
        }
        i(e, "savePreviousUrl");
        let t = history.pushState;
        (history.pushState = function (n, s, l) {
            e(), t.apply(this, arguments);
        }),
            addEventListener("beforeunload", (n) => {
                e();
            });
    })();
    var F = i(function () {
            (this.protocol = window.location.protocol),
                (this.getCombineCookie = (r) => {
                    var o,
                        c = new Set();
                    return (
                        document.cookie.split("; ").forEach((_) => {
                            let [h, w] = _.split("=");
                            h.startsWith(r) && c.add(w);
                        }),
                        (o = [...c].join(";")),
                        o
                    );
                }),
                (this.getSessionIdFromCookie = (r) => {
                    for (var o = document.cookie.split("; "), c = "", _ = 0; _ < o.length; _++) {
                        let [h, w] = o[_].split("=");
                        if (h.startsWith(r)) {
                            c = w.split("_")[1];
                            break;
                        }
                    }
                    return c;
                });
            var e,
                t,
                n,
                s = this.getCombineCookie,
                l = i(function () {
                    (window.__mieruca_optimize_queue = []), window.__mieruca_optimize.init();
                    for (let r in document.__moClickHandler)
                        document.__moClickHandler.hasOwnProperty(r) &&
                            document.removeEventListener("click", document.__moClickHandler[r], !0);
                    document.__moClickHandler = {};
                }, "reloadAbProcess");
            this.init = () => {
                (e = new URL(window.location.href)),
                    (t = e.searchParams),
                    (n = this.protocol),
                    (window.__mieruca_optimize_eventTracker = window.__mieruca_optimize_eventTracker || {}),
                    (window.__mieruca_optimize_queue = window.__mieruca_optimize_queue || []),
                    (window.__mieruca_optimize_identify_num = window.__mieruca_optimize_identify_num || 1),
                    (document.__moClickHandler = document.__moClickHandler || {});
                for (let r = 0; r < window.__optimizeid.length; r++) {
                    let o = window.__optimizeid[r][0];
                    if (B(o) && !window.__mieruca_optimize_queue.includes(o)) {
                        if ((window.__mieruca_optimize_queue.push(o), I(o), f())) return;
                        t.has("_mo_ab_preview_mode")
                            ? S(o)
                            : t.has("_mo_ab_preview_pid")
                              ? d(o)
                              : T() || (y(), u(o), a(o));
                    }
                }
                if (!window.__mieruca_optimize_url_change_handler) {
                    window.__mieruca_optimize_url_change_handler = !0;
                    let r = b("ReloadAbProcessEvent");
                    (window.__mieruca_optimize_eventTracker[r] = z()), U.bind(this)(l, null, r);
                }
            };
            var u = i((r) => {
                    let o = document.createElement("script");
                    (o.type = "text/javascript"),
                        (o.async = !0),
                        (o.src =
                            `${n}//dev.opt.mieru-ca.com/redirect-url/embed?siteId=` +
                            m(r) +
                            "&visitorUrl=" +
                            m(e.toString()) +
                            "&dv=" +
                            m(p()) +
                            "&ck=" +
                            m(s("__MOR-")) +
                            "&referUrl=" +
                            m(sessionStorage.getItem("__mo:prevUrl") ?? document.referrer) +
                            "&ua=" +
                            m(navigator.userAgent)),
                        v(o);
                }, "loadRedirectScript"),
                d = i((r) => {
                    let o = t.get("dv") || p(),
                        c = document.createElement("script");
                    (c.type = "text/javascript"),
                        (c.async = !0),
                        (c.src =
                            `${n}//dev.opt.mieru-ca.com/ab/preview?sId=` +
                            m(r) +
                            "&dv=" +
                            m(o) +
                            "&pId=" +
                            m(t.get("_mo_ab_preview_pid") || "")),
                        v(c);
                }, "loadABPreviewScript"),
                a = i((r) => {
                    let o = document.createElement("script");
                    (o.type = "text/javascript"),
                        (o.async = !0),
                        (o.src =
                            `${n}//dev.opt.mieru-ca.com/ab/embed?siteId=` +
                            m(r) +
                            "&visitorUrl=" +
                            m(e.toString()) +
                            "&dv=" +
                            m(p()) +
                            "&ck=" +
                            m(s("__MOAB-")) +
                            "&ua=" +
                            m(navigator.userAgent)),
                        v(o);
                }, "loadABTestScript"),
                S = i((r) => {
                    let o = new URL(window.location.href),
                        c = new URLSearchParams(o.search);
                    c.delete("_mo_ab_preview_mode"), (o.search = c.toString());
                    let _ = document.createElement("script");
                    (_.type = "text/javascript"),
                        (_.async = !0),
                        (_.src =
                            `${n}//dev.opt.mieru-ca.com/ab/view?sId=` +
                            m(r) +
                            "&visitorUrl=" +
                            m(o.toString()) +
                            "&pId=" +
                            m(t.get("_mo_ab_preview_mode") || "")),
                        v(_);
                }, "loadViewModeScript"),
                p = i(() => {
                    var r =
                            /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/,
                        o = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i,
                        c = navigator.userAgent;
                    return o.test(c) ? "TABLET" : r.test(c) ? "MOBILE" : "DESKTOP";
                }, "getDeviceType"),
                f = i(() => {
                    var r = /MierucaHeatmap|fabercompany.co.jp/,
                        o = navigator.userAgent;
                    return r.test(o);
                }, "isHMCapture"),
                y = i(() => {
                    if (t.has("_mo")) {
                        var r = !1,
                            o = t.get("_mo").split(";_;");
                        o.forEach(function (c) {
                            var [_, h] = c.split(":");
                            if (
                                (document.cookie.split("; ").forEach((P) => {
                                    let [D, G] = P.split("=");
                                    _ === D && h === G && (r = !0);
                                }),
                                !r)
                            ) {
                                var w = new Date();
                                w.setTime(w.getTime() + 2232 * 60 * 60 * 1e3);
                                var g = w.toUTCString(),
                                    M = "." + window.location.host.replace("www.", ""),
                                    R = m(_),
                                    $ = m(h);
                                document.cookie = `${R}=${$};domain=${M};expires=${g};path=/;`;
                            }
                        }),
                            t.delete("_mo"),
                            (e.search = t.toString());
                    }
                }, "handleCrossDomainParam"),
                I = i((r) => {
                    T() &&
                        window.addEventListener("message", (o) => {
                            if (o.origin !== "https://staging-app.mieru-ca.com") return;
                            let c = o.data;
                            switch (c.action) {
                                case "VISUAL_EDITOR_SCRIPT":
                                    if (c.status === "open" && c.code === r) {
                                        (window.__mosCode = c.code),
                                            o.source.postMessage(
                                                { action: "VISUAL_EDITOR_SCRIPT", status: "ready" },
                                                { targetOrigin: o.origin }
                                            );
                                        let _ = document.characterSet,
                                            h = "https://d168703rqucbx.cloudfront.net/service/js/mieruca-optimize-ve",
                                            w = new Date().getTime(),
                                            g = document.createElement("script");
                                        (g.type = "text/javascript"), (g.async = !0), (g.src = `${h}.js?v=${w}`), v(g);
                                    }
                            }
                        });
                }, "visualEditorCommunicate");
        }, "mierucaOptimize"),
        O = i(function (e, t, n = { childList: !0, subtree: !0, attributes: !0, characterData: !0 }) {
            let s = new MutationObserver((l, u) => {
                e && e(t, l, u);
            });
            return s.observe(document.body, n), s;
        }, "moObserverHandler"),
        U = i(function (e, t, n) {
            var s = i(function () {
                H(n) && ((window.__mieruca_optimize_eventTracker[n].previousUrl = location.href), e && e(t));
            }, "moUrlChange");
            O(s, null, { childList: !0, subtree: !0, attributes: !0, characterData: !0 });
        }, "moUrlChangeListener"),
        H = i((e) => {
            let [t, n] = [A(location.href), A(window.__mieruca_optimize_eventTracker[e]?.previousUrl) || ""];
            return t !== n;
        }, "moIsUrlChange"),
        E = i(
            (e) => document.evaluate(e, document.body, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue,
            "moGetELByXpath"
        ),
        N = i((e, t) => {
            L(t, e), e.appendChild(t);
        }, "moWrap"),
        K = i((e, t) => {
            e.parentNode.insertBefore(t, e.nextSibling);
        }, "moInsertAfter"),
        L = i((e, t) => {
            e.parentNode.insertBefore(t, e);
        }, "moInsertBefore"),
        C = i(async (e) => {
            try {
                let n = new TextEncoder().encode(e),
                    s = await crypto.subtle.digest("SHA-256", n);
                return Array.from(new Uint8Array(s))
                    .map((d) => d.toString(16).padStart(2, "0"))
                    .join("");
            } catch (t) {
                console.log(t);
            }
        }, "moHashString"),
        V = i(async (e, t, n) => {
            try {
                n || sessionStorage.setItem("__mo:t1", performance.now().toString());
                let s = e.moStackArr,
                    l,
                    u;
                (window.__mieruca_optimize_isForced = e.isForced),
                    window !== window.parent && (window.parent.__mieruca_optimize_isForced = e.isForced);
                for (let d = 0; d < s.length; d++) {
                    let a = s[d];
                    if (a.isCompleteSetting) continue;
                    if (a.type === "CODE") {
                        a.html && (document.body.innerHTML = a.html),
                            (u = a.css),
                            (l = a.javaScript),
                            (a.isCompleteSetting = !0);
                        continue;
                    }
                    let S = E(a.xpath);
                    if (S) {
                        if (!e.isForced && a.hash && a.hash !== "null") {
                            let p = S.outerHTML,
                                f = await C(p).then((y) => y);
                            if (a.hash !== f) continue;
                        }
                        if ((a.type === "ADD_WIDGET" && k(a.css), a.type === "MOVE" || a.type === "DUPLICATE")) {
                            let p = E(a.desXpath);
                            if (!p) continue;
                            if (!e.isForced) {
                                let f = p.outerHTML,
                                    y = await C(f).then((I) => I);
                                if (a.desHash !== y) continue;
                            }
                        }
                        if (!a.isCompleteSetting) {
                            a.isCompleteSetting = !0;
                            try {
                                new Function(a.script)();
                            } catch (p) {
                                console.log(p);
                            }
                        }
                    }
                }
                if ((u && k(u), l))
                    try {
                        new Function(l)();
                    } catch (d) {
                        console.log(d);
                    }
                s.some((d) => !d.isCompleteSetting) &&
                    ((window.__mieruca_optimize_hasIncompleteSetting = !0),
                    window !== window.parent && (window.parent.__mieruca_optimize_hasIncompleteSetting = !0)),
                    n && s.filter((a) => !a.isCompleteSetting).length === 0 && n.disconnect();
            } catch (s) {
                console.log(s);
            } finally {
                if (!n) {
                    let s = performance.now();
                    sessionStorage.setItem("__mo:t2", s.toString());
                    let l = sessionStorage.getItem("__mo:t0"),
                        u = sessionStorage.getItem("__mo:t1");
                    if (l == null || u == null || s == null || location.href.includes("_mo_ab_preview_")) return;
                    let d = new URLSearchParams();
                    d.append("complete_time", (s - Number(l)).toString()),
                        d.append("overwrite_time", (s - Number(u)).toString()),
                        d.append("num_of_changes", e.moStackArr.filter((a) => a.isCompleteSetting).length),
                        d.append("num_of_stacks", e.moStackArr.length),
                        d.append("session_id", sessionStorage.getItem("__mo:sId")),
                        d.append("device", sessionStorage.getItem("__mo:dv")),
                        fetch(`${window.__mieruca_optimize.protocol}//dev.opt.mieru-ca.com/ab/record-time`, {
                            method: "POST",
                            body: d,
                        })
                            .then()
                            .catch((a) => console.log(a));
                }
            }
        }, "moApplyChange"),
        k = i((e) => {
            let t = document.getElementById("mo-visual-editor-style");
            if (t) t.appendChild(document.createTextNode(e));
            else {
                let n = document.createElement("style");
                (n.type = "text/css"),
                    (n.id = "mo-visual-editor-style"),
                    n.appendChild(document.createTextNode(e)),
                    document.head.appendChild(n);
            }
        }, "moAppendCss"),
        X = i((e) => {
            let t = i((s) => {
                e.forEach((l) => {
                    l.elFn().forEach((d) => {
                        d.contains(s.target) && l.clFn();
                    });
                });
            }, "trackingGoalHandler");
            document.addEventListener("click", t, !0);
            let n = b("ClickEvent");
            document.__moClickHandler[n] = t;
        }, "moAddEventListeners"),
        m = i((e) => encodeURIComponent(e), "moEncode"),
        j = i(() => {
            var e = window.__mieruca_optimize,
                t = window.__hmrid,
                n = window.__hmuid,
                s = e.getSessionIdFromCookie("__MOAB-");
            if (t && n && s) {
                let l = `${e.protocol}//dev.opt.mieru-ca.com/hm/record/goal?rId=${m(t)}&uId=${m(n)}&sesId=${m(s)}`;
                fetch(l, { method: "GET", mode: "no-cors" })
                    .then()
                    .catch((u) => console.log(u));
            }
        }, "moLinkageGoal"),
        v = i((e) => {
            let t = document.getElementsByTagName("script")[0];
            t ? t.parentNode.insertBefore(e, t) : document.head.appendChild(e);
        }, "moAddElementScript"),
        b = i((e) => `${e}-${window.__mieruca_optimize_identify_num++}`, "moGenerateKeyAI"),
        z = i(() => ({ previousUrl: location.href }), "moInitKeyTracker"),
        A = i((e) => {
            let t = new URL(e);
            return t.origin + t.pathname + t.search;
        }, "moGetBaseUrl"),
        T = i(
            () =>
                window.parent.opener &&
                new URL(window.parent.document.referrer).origin === "https://staging-app.mieru-ca.com",
            "moIsOpenByMieruca"
        ),
        B = i((e) => e != null && /^\d{10}$/.test(e), "moIsValidSiteCode");
    (function () {
        (window.__mieruca_optimize_queue = window.__mieruca_optimize_queue || []),
            (window.__mieruca_optimize = new F()),
            window.__mieruca_optimize.init();
    })();
    Object.assign(window, {
        moApplyChange: window.moApplyChange || V,
        moAddEventListeners: window.moAddEventListeners || X,
        moLinkageGoal: window.moLinkageGoal || j,
        moObserverHandler: window.moObserverHandler || O,
        moUrlChangeListener: window.moUrlChangeListener || U,
        moIsUrlChange: window.moIsUrlChange || H,
        moGetELByXpath: window.moGetELByXpath || E,
        moWrap: window.moWrap || N,
        moInsertAfter: window.moInsertAfter || K,
        moInsertBefore: window.moInsertBefore || L,
        moHashString: window.moHashString || C,
        moAppendCss: window.moAppendCss || k,
        moEncode: window.moEncode || m,
        moGenerateKeyAI: window.moGenerateKeyAI || b,
        moInitKeyTracker: window.moInitKeyTracker || z,
        moGetBaseUrl: window.moGetBaseUrl || A,
        moIsOpenByMieruca: window.moIsOpenByMieruca || T,
        moIsValidSiteCode: window.moIsValidSiteCode || B,
    });
})();