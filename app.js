"use strict";
(self.webpackChunkmy_vue_app = self.webpackChunkmy_vue_app || []).push([[85259], {
    3208: function(e, t, i) {
        i.d(t, {
            Kp: function() {
                return r
            },
            gk: function() {
                return a
            },
            y0: function() {
                return l
            }
        });
        var s = i(46851)
          , o = i(26248)
          , n = i(98478);
        const r = e => s.Uh.post({
            url: "/activetask/getprize",
            data: {
                ...e
            },
            customParams: {
                noErrorMessage: !0,
                silentOnError: !0
            },
            headers: {
                deviceModel: (0,
                o.h)().deviceModel,
                devicetype: (0,
                o.h)().deviceType
            }
        }).then((e => e.data.data))
          , a = e => s.Uh.post({
            url: "/activetask/task_save_address",
            data: e,
            headers: {
                deviceModel: (0,
                o.h)().deviceModel,
                devicetype: (0,
                o.h)().deviceType
            },
            customParams: {
                noErrorMessage: !0
            }
        }).then((e => e.data.data))
          , l = async () => {
            const {saveUrlUuid: e, setHasAddSaveAddress: t, hasAddSaveAddress: i} = (0,
            n.b)();
            return i || (await a({
                address: e,
                actionType: 1
            }),
            t(!0)),
            e
        }
    },
    22159: function(e, t, i) {
        let s, o, n;
        !function(e) {
            e[e.PendingReceive = 0] = "PendingReceive",
            e[e.Finish = 1] = "Finish",
            e[e.Expired = 2] = "Expired",
            e[e.Goto = 3] = "Goto",
            e[e.HasSend = 4] = "HasSend",
            e[e.UnOpen = 99] = "UnOpen"
        }(s || (s = {})),
        function(e) {
            e[e.Show = 1] = "Show",
            e[e.Hide = 0] = "Hide"
        }(o || (o = {})),
        function(e) {
            e[e.Nothing = 0] = "Nothing",
            e[e.Recharge = 1] = "Recharge",
            e[e.Betting = 2] = "Betting",
            e[e.BettingOne = 3] = "BettingOne"
        }(n || (n = {}))
    },
    72628: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return x
            }
        });
        var s, o, n, r, a, l, c, m, d, u, p, h, g, b, y = i(53158), _ = i(55433), f = i(12040), v = i(38821), w = "_Xh4S8uJ8rtshK0NDPr8", k = "fanXMnrLePJ81NLxoAq8", T = "hg3pWm3VA8nZxTi_potS", C = "Gngmabj6m0m7JFTi3xr_";
        let x = (s = (0,
        v.wA)({
            name: "MyProgress"
        }),
        o = (0,
        v.Rl)(),
        n = (0,
        v.Rl)(),
        r = (0,
        v.Rl)(),
        a = (0,
        v.fI)({
            required: !0
        }),
        l = (0,
        v.fI)({
            required: !0
        }),
        c = (0,
        v.RL)("current", {
            deep: !0
        }),
        s((d = class extends v.XY {
            constructor(...e) {
                super(...e),
                (0,
                y.Z)(this, "progress", u, this),
                (0,
                y.Z)(this, "progressBar", p, this),
                (0,
                y.Z)(this, "progressText", h, this),
                (0,
                y.Z)(this, "current", g, this),
                (0,
                y.Z)(this, "total", b, this),
                (0,
                _.Z)(this, "lighten", !1)
            }
            mounted() {
                this.calcTextColor()
            }
            currentChange() {
                this.$nextTick(( () => {
                    this.calcTextColor()
                }
                ))
            }
            calcTextColor() {
                this.lighten = !1;
                const e = this.progress.offsetWidth / 2 - this.progressText.offsetWidth / 2;
                this.progressBar.offsetWidth >= e && (this.lighten = !0)
            }
            render() {
                const e = arguments[0]
                  , t = this.current / this.total * 100;
                let i = t >= 3 ? t : 3;
                return i = i >= 100 ? 100 : i,
                e("div", {
                    class: w,
                    ref: "progress"
                }, [e("div", {
                    ref: "progressBar",
                    class: k,
                    style: {
                        width: `${0 === this.current ? 0 : i}%`
                    }
                }), e("div", {
                    class: {
                        [T]: !0,
                        [C]: (this.lighten || 2 * this.current >= this.total) && 0 !== this.current
                    }
                }, [e("span", {
                    ref: "progressText"
                }, [this.current, "/", this.total])])])
            }
        }
        ,
        u = (0,
        f.Z)(d.prototype, "progress", [o], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        p = (0,
        f.Z)(d.prototype, "progressBar", [n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        h = (0,
        f.Z)(d.prototype, "progressText", [r], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        g = (0,
        f.Z)(d.prototype, "current", [a], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        b = (0,
        f.Z)(d.prototype, "total", [l], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        (0,
        f.Z)(d.prototype, "currentChange", [c], Object.getOwnPropertyDescriptor(d.prototype, "currentChange"), d.prototype),
        m = d)) || m)
    },
    18913: function(e, t, i) {
        i.d(t, {
            r: function() {
                return d
            }
        });
        var s = i(38821)
          , o = i(58217)
          , n = i(75812)
          , r = i(53579)
          , a = "c8QZlTCw49xSRcLdDHYw"
          , l = "dA4lyLL9SCe_7dxgrFCq";
        class c extends s.Ie.wA {
            constructor() {
                super()
            }
            static getInstance() {
                return this.instance || (this.instance = new c),
                this.instance
            }
            run(e) {
                const t = this.$createElement
                  , {t: i} = (0,
                o.QT)();
                let s = e.content;
                "string" == typeof e.content && (s = t("div", {
                    class: {
                        [l]: e.content.length < 66
                    }
                }, [e.content])),
                r.Z.create({
                    title: e.title || i("lobby.common.tips.title"),
                    titleType: e.titleType ?? "info",
                    class: a,
                    width: n.ZP.px2rem(600),
                    contentPosition: "left",
                    zIndex: 2e3,
                    content: s,
                    hiddenBtns: !0,
                    closable: !0
                })
            }
        }
        const m = c.getInstance()
          , d = m.run.bind(m)
    },
    65845: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return Oe
            }
        });
        var s, o = i(38821), n = "xgKWoaGJ2qPg4MTY14je", r = "jbn7OZsxtntmYfkn32QT", a = "d94M3kkzLpWIgC9r7TY6";
        let l = (0,
        o.wA)({
            name: "AlertBar"
        })(s = class extends o.XY {
            render() {
                const e = arguments[0];
                return e("div", {
                    class: n
                }, [e("my-img", {
                    class: r,
                    attrs: {
                        options: {
                            type: "div"
                        },
                        src: "/lobby_asset/common/web/common/comm_icon_tip2.png"
                    }
                }), e("span", {
                    class: a
                }, [this.$slots?.default])])
            }
        }
        ) || s;
        var c, m, d, u, p, h, g, b, y, _, f, v, w, k = i(53158), T = i(55433), C = i(12040), x = i(54330), Z = i(40215), I = {
            "type-default": "J9J497qGHqQ55Rxh7X2g",
            "instruction-info-charge": "czjL99ZEpY3Dw4ErUF6S",
            "type-srrw": "d7zfkziwanrC6YdmmP3x",
            description: "sXS1ifb6ApOPuPYxEZAB",
            "description-text": "ZPLAno__4iKKuL8RwFNR",
            "bottom-time": "ob5IVAEarNAMmOwAJSrU",
            "hide-time": "O7D8wSIY5ssDB2YvFlry",
            common_bganimation: "KQ8CxSER2TW3ygk2XzV5"
        };
        let A = (c = (0,
        o.wA)({
            name: "InstructionInfoCharge"
        }),
        m = (0,
        o.fI)({
            default: "default"
        }),
        d = (0,
        o.fI)(),
        u = (0,
        o.fI)(),
        p = (0,
        o.fI)(),
        h = (0,
        o.fI)(),
        c((b = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                k.Z)(this, "type", y, this),
                (0,
                k.Z)(this, "description", _, this),
                (0,
                k.Z)(this, "amount", f, this),
                (0,
                k.Z)(this, "isHideTime", v, this),
                (0,
                k.Z)(this, "bottomTime", w, this)
            }
            renderDescription() {
                const e = this.$createElement
                  , {description: t, amount: i} = this
                  , s = (0,
                Z.p)(t, "{reward}", e(Oe.CardLayout.AmountAndActivity.OneItem, {
                    attrs: {
                        type: "amount",
                        text: i,
                        isActive: !0,
                        isInline: !0,
                        isShowName: !1
                    }
                }));
                return e("div", {
                    class: I.description
                }, [e("p", {
                    class: I["description-text"]
                }, [s])])
            }
            render() {
                const e = arguments[0]
                  , {type: t, isHideTime: i, bottomTime: s} = this;
                return e("div", {
                    class: {
                        [I["instruction-info-charge"]]: !0,
                        [I[`type-${t}`]]: !0,
                        [I["hide-time"]]: i
                    }
                }, [this.renderDescription(), e("div", {
                    class: I["bottom-time"]
                }, [s])])
            }
        }
        ,
        y = (0,
        C.Z)(b.prototype, "type", [m], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        _ = (0,
        C.Z)(b.prototype, "description", [d], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        f = (0,
        C.Z)(b.prototype, "amount", [u], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        v = (0,
        C.Z)(b.prototype, "isHideTime", [p], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        w = (0,
        C.Z)(b.prototype, "bottomTime", [h], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        g = b)) || g);
        var S, R, z, L, P, M, D, B, F = i(70157), N = i(26610), E = i(82539), O = {
            "card-layout-inner": "CLiYm4N7W6NKwfNpRkR9",
            "card-left": "C47zu_cJbK8eHLT6_ufS",
            "card-right": "DElvNHiQXKCBDqvrrt68",
            "constant-left": "RgOX_e3YTNbvps0BQzqf",
            "constant-right": "yqH9RFJ1pZ1QkQiYhNTU",
            common_bganimation: "Bj_t5g850Ccxt5mu4Lkt"
        }, Y = "jhDExQZjO2DVnb03ezie", U = "MFoU4jOmowvrFTRNq7an", j = "KGpZ1E6un_I7SAnUcR8b";
        let $ = (S = (0,
        o.wA)({
            name: "CardLayout"
        }),
        R = (0,
        o.fI)(),
        z = (0,
        o.fI)(),
        S((B = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                k.Z)(this, "isCompact", M, this),
                (0,
                k.Z)(this, "constantWidthAspect", D, this)
            }
            renderInnerLayout() {
                const e = this.$createElement
                  , {constantWidthAspect: t} = this;
                return e("div", {
                    class: {
                        [O["card-layout-inner"]]: !0,
                        "card-layout-inner": !0,
                        [O[`constant-${t}`]]: Boolean(t),
                        "theme-box-shadow": !0
                    }
                }, [e("div", {
                    class: [O["card-left"], "card-left"]
                }, [this.$scopedSlots.left?.()]), e("div", {
                    class: {
                        "card-right": !0,
                        [O["card-right"]]: !0
                    }
                }, [this.$scopedSlots.right?.()])])
            }
            render() {
                const e = arguments[0];
                return e("div", {
                    class: {
                        [Y]: !0,
                        [U]: this.isCompact,
                        "theme-box-shadow-h5": !0,
                        "theme-box-shadow": !0
                    }
                }, [e("div", {
                    class: j
                }), this.$scopedSlots.suspension?.(), this.$slots.default || this.renderInnerLayout()])
            }
        }
        ,
        (0,
        T.Z)(B, "InstructionInfoTask", F.Z),
        (0,
        T.Z)(B, "InstructionInfoCharge", A),
        (0,
        T.Z)(B, "ReceiveDowntime", E.Z),
        (0,
        T.Z)(B, "AmountAndActivity", x.Z),
        (0,
        T.Z)(B, "MoreLimit", N.Z),
        P = B,
        M = (0,
        C.Z)(P.prototype, "isCompact", [R], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        D = (0,
        C.Z)(P.prototype, "constantWidthAspect", [z], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        L = P)) || L);
        var W, H = i(91475), X = i(50008), G = "GxCMUyROB0aoYmeBg9sq", Q = "xANh36bCvWX2snTSUa_z";
        let V = (0,
        o.wA)({
            name: "AutoShrinkCheckbox"
        })(W = class extends o.XY {
            render() {
                const e = arguments[0];
                return e(X.Z, {
                    class: G,
                    attrs: {
                        text: e("div", {
                            class: Q
                        }, [this.$slots.default]),
                        limitHeight: (0,
                        H.h)().isWeb ? "0.56rem" : "1rem"
                    }
                })
            }
        }
        ) || W;
        var q, K, J = "pYY0ryAaV7RvoSW1FX1j", ee = "wSLMxHFxb9a6hVKhcuiN", te = "R0AipHeWYfY9a3YLcB4R";
        let ie = (0,
        o.wA)({
            name: "FootLayout"
        })((K = class extends o.XY {
            render() {
                const e = arguments[0];
                return e("div", {
                    class: J
                }, [e("div", {
                    class: ee
                }, [this.$scopedSlots["checkbox-area"]?.()]), e("div", {
                    class: te
                }, [this.$scopedSlots["button-area"]?.()])])
            }
        }
        ,
        (0,
        T.Z)(K, "AutoShrinkCheckbox", V),
        q = K)) || q;
        var se = i(75812)
          , oe = i(18341)
          , ne = "pAa1CCxkvvHGQXbBsNFj";
        class re extends oe.Z {
            myRender(e) {
                const {isWeb: t} = (0,
                H.h)();
                return this.renderModal({
                    modalConfig: {
                        class: [ne, e.className ? e.className : ""],
                        props: {
                            width: se.ZP.px2rem(t ? 800 : 690),
                            destroyOnClose: !0,
                            title: e.title,
                            afterClose: e.myAfterClose
                        }
                    },
                    renderContent: e.renderContent
                })
            }
        }
        var ae, le, ce, me, de, ue, pe, he = "bRykxsWYQxFhl7Y9q2k2";
        let ge = (ae = (0,
        o.wA)({
            name: "ModalSection"
        }),
        le = (0,
        o.fI)(),
        ce = (0,
        o.fI)(),
        ae((de = class extends oe.Z {
            constructor(...e) {
                super(...e),
                (0,
                k.Z)(this, "title", ue, this),
                (0,
                k.Z)(this, "afterClose", pe, this)
            }
            render() {
                const {isWeb: e} = (0,
                H.h)()
                  , {title: t, afterClose: i} = this;
                return this.renderModal({
                    modalConfig: {
                        class: [he],
                        props: {
                            width: se.ZP.px2rem(e ? 800 : 690),
                            destroyOnClose: !0,
                            title: t,
                            afterClose: i
                        }
                    },
                    renderContent: () => this.$slots.default
                })
            }
        }
        ,
        ue = (0,
        C.Z)(de.prototype, "title", [le], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        pe = (0,
        C.Z)(de.prototype, "afterClose", [ce], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        me = de)) || me);
        var be, ye, _e, fe, ve, we, ke, Te = i(55882), Ce = i(7174), xe = "nfELJzLsyYqzBVn0tUk_";
        let Ze = (be = (0,
        o.wA)({
            name: "MyCheckbox"
        }),
        ye = (0,
        o.fI)(),
        _e = (0,
        o.fI)(),
        be((ve = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                k.Z)(this, "checked", we, this),
                (0,
                k.Z)(this, "text", ke, this)
            }
            render() {
                const e = arguments[0];
                return e("div", {
                    class: xe,
                    on: {
                        click: () => this.$emit("checked", !this.checked)
                    }
                }, [e(Ce.XZ.Tsx, {
                    attrs: {
                        checked: this.checked
                    }
                }), e("span", {
                    class: "my-checkbox-modal-tip-text"
                }, [e("inner-html", {
                    attrs: {
                        text: this.text
                    }
                })])])
            }
        }
        ,
        we = (0,
        C.Z)(ve.prototype, "checked", [ye], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ke = (0,
        C.Z)(ve.prototype, "text", [_e], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        fe = ve)) || fe);
        var Ie, Ae, Se, Re, ze, Le, Pe, Me, De, Be = i(1160), Fe = {
            "scroll-layout": "OUu2ZHtRZvqF3X8Q2aoJ",
            "body-top": "fOptIAcqZT6QswcozQFu",
            "body-main": "chlKx7ZKhIsop2lU3Qzq",
            "body-main-inner": "la8cHCqNnQbwY7KMTlEG",
            common_bganimation: "U1qZ3mmNzAMLhlllKG1W"
        }, Ne = {
            "scroll-layout": "DTl8k8XLjzzEQoU_1WZT",
            "body-top": "j47pHV1c15EjJ4WHgt5F",
            "body-main": "FdlAMfitYfV63XoxlYcM",
            "body-main-inner": "qdb1JhVlFoAnTufTCYna",
            common_bganimation: "KnLX4ZhAnjEagceoPy3g"
        };
        let Ee = (Ie = (0,
        o.wA)({
            name: "ScrollLayout"
        }),
        Ae = (0,
        o.fI)(),
        Se = (0,
        o.fI)(),
        Re = (0,
        o.fI)(),
        Ie((Le = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                k.Z)(this, "heightType", Pe, this),
                (0,
                k.Z)(this, "isLoadingUsable", Me, this),
                (0,
                k.Z)(this, "isLoading", De, this)
            }
            get loadingModalType() {
                return "full" === this.heightType ? "tabInner" : "single"
            }
            render() {
                const e = arguments[0]
                  , {isWeb: t} = (0,
                H.h)()
                  , {heightType: i, isLoadingUsable: s, isLoading: o} = this
                  , n = "tall" === i ? Ne : Fe;
                return e("div", {
                    class: {
                        [n["scroll-layout"]]: !0
                    }
                }, [s && e(Be.Z, {
                    attrs: {
                        isLoading: o,
                        type: this.loadingModalType
                    }
                }), e("div", {
                    class: n["body-top"]
                }, [this.$scopedSlots?.["body-top"]?.()]), e("div", {
                    class: n["body-main"]
                }, [e("div", {
                    class: n["body-main-inner"]
                }, [e("my-scroll", {
                    attrs: {
                        direction: "y",
                        trigger: t ? void 0 : "none"
                    },
                    on: {
                        scroll: e => this.$emit("scroll", e)
                    }
                }, [this.$scopedSlots?.["body-scroll"]?.()])])])])
            }
        }
        ,
        Pe = (0,
        C.Z)(Le.prototype, "heightType", [Ae], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Me = (0,
        C.Z)(Le.prototype, "isLoadingUsable", [Se], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        De = (0,
        C.Z)(Le.prototype, "isLoading", [Re], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ze = Le)) || ze);
        var Oe = {
            ModalClass: re,
            ModalSection: ge,
            ScrollLayout: Ee,
            AlertBar: l,
            CardLayout: $,
            Button: Te.Z,
            Checkbox: Ze,
            FootLayout: ie
        }
    },
    1160: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return g
            }
        });
        var s, o, n, r, a, l, c, m = i(53158), d = i(12040), u = i(38821), p = i(29339), h = {
            type_single: "BvP7ELZjmpd5_aOADDry",
            "loading-in-mask": "gxezFOjLK26aqoUjzabV",
            "is-loading": "wOE2BmWrbjPNnuNdN8gz",
            type_allTabs: "LCA1ilB0rGh2V1ZL3FXV",
            type_tabInner: "jj1tyn60X4h05gp9i1ba",
            common_bganimation: "wOxd1fgog37aAz6VrkJq"
        };
        let g = (s = (0,
        u.wA)({
            name: "LoadingInModal"
        }),
        o = (0,
        u.fI)(),
        n = (0,
        u.fI)({
            default: "single"
        }),
        s((a = class extends u.XY {
            constructor(...e) {
                super(...e),
                (0,
                m.Z)(this, "isLoading", l, this),
                (0,
                m.Z)(this, "type", c, this)
            }
            render() {
                const e = arguments[0];
                return e("div", {
                    style: {
                        padding: "1px"
                    }
                }, [e(p.gE, {
                    class: {
                        [h["loading-in-mask"]]: !0,
                        [h["is-loading"]]: this.isLoading,
                        [h[`type_${this.type}`]]: !0
                    },
                    attrs: {
                        spinning: this.isLoading
                    }
                })])
            }
        }
        ,
        l = (0,
        d.Z)(a.prototype, "isLoading", [o], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        c = (0,
        d.Z)(a.prototype, "type", [n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        r = a)) || r)
    },
    41279: function(e, t, i) {
        i.d(t, {
            H: function() {
                return o
            },
            b: function() {
                return n
            }
        });
        var s = i(55433);
        let o;
        !function(e) {
            e[e.None = 0] = "None",
            e[e.WebDecision = 1] = "WebDecision",
            e[e.ServerRespanse = 2] = "ServerRespanse"
        }(o || (o = {}));
        class n {
            constructor() {
                (0,
                s.Z)(this, "errorPriority", o.None)
            }
            recordErrorFun(e) {
                const {priority: t, openFun: i} = e;
                this.errorPriority < t && (this.errorHintFun = i)
            }
            open() {
                this.errorHintFun?.()
            }
            hasError() {
                return Boolean(this.errorHintFun)
            }
            reset() {
                this.errorPriority = o.None,
                this.errorHintFun = void 0
            }
        }
    },
    38813: function(e, t, i) {
        i.d(t, {
            g: function() {
                return x
            }
        });
        var s = i(38821)
          , o = i(39972);
        class n extends s.Ie.wA {
            constructor() {
                super()
            }
            static getInstance() {
                return this.instance || (this.instance = new n),
                this.instance
            }
            judgeIsAllowCollecting(e) {
                return (0,
                o._4)(e).canReceive
            }
            openForbidingDialog(e) {
                (0,
                o.cA)(e)
            }
        }
        n.getInstance();
        var r = i(84012)
          , a = i(18913)
          , l = i(58217);
        class c extends s.Ie.wA {
            constructor() {
                super()
            }
            static getInstance() {
                return this.instance || (this.instance = new c),
                this.instance
            }
            judgeIsAllowCollecting(e) {
                const {ruleStatus: t} = e;
                return ![r.Fx.PendingApprove].includes(t)
            }
            openForbidingDialog(e) {
                const {ruleStatus: t} = e
                  , {t: i} = (0,
                l.QT)()
                  , s = {
                    [r.Fx.PendingApprove]: () => i("lobby.modal.task.rewardWaitApprove")
                }[t]();
                return (0,
                a.r)({
                    title: i("lobby.common.tips.title"),
                    content: s
                })
            }
        }
        var m, d = i(62933), u = i(21615), p = i(75812), h = i(2161), g = "SBRwaQGyxkteblJp5Ois", b = "Vn3UxjgjiW8Mv43lqhMk";
        !function(e) {
            e[e.Ios = 1] = "Ios",
            e[e.Android = 2] = "Android"
        }(m || (m = {}));
        class y extends s.Ie.wA {
            constructor() {
                super()
            }
            static getInstance() {
                return this.instance || (this.instance = new y),
                this.instance
            }
            judgeIsAllowCollecting(e) {
                const t = (0,
                o.Yw)(e?.split(",") ?? []);
                t.sort(( (e, t) => +e - +t));
                let i = !1;
                const s = u.cY?.speedPackageConfig && u.cY.speedPackageConfig.osType;
                return s || (i = !0),
                s === m.Ios && t.includes(d.wh.IOS_APP) && (i = !0),
                s === m.Android && t.includes(d.wh.ANDROID_APP) && (i = !0),
                i
            }
            openForbidingDialog(e) {
                const {t: t} = (0,
                l.QT)()
                  , i = this.typeToError(e)
                  , s = h.Z.Modal.create({
                    class: g,
                    title: t("lobby.receiveModal.kindTips"),
                    width: p.ZP.px2rem(600),
                    getContainer: () => document.body,
                    content: i,
                    closable: !1,
                    hiddenBtns: !1,
                    cancelButtonProps: {
                        style: {
                            display: "none"
                        }
                    },
                    okText: t("lobby.event.discountCode.close").toString(),
                    onOk: async () => {
                        s.destroy()
                    }
                })
            }
            typeToError(e) {
                return (0,
                o._4)(e).errorMessage
            }
        }
        y.getInstance();
        var _ = i(29579)
          , f = i(65845);
        class v extends s.Ie.wA {
            constructor() {
                super()
            }
            static getInstance() {
                return this.instance || (this.instance = new v),
                this.instance
            }
            judgeIsAllowCollecting(e) {
                const {receiveTimeType: t, receiveDuration: i} = e;
                return i <= 0 || t === _.d.Immediately
            }
            openForbidingDialog(e) {
                const t = this.$createElement
                  , {receiveDuration: i, receiveTimeDay: s, receiveTimeType: o} = e
                  , {t: n} = (0,
                l.QT)()
                  , r = {
                    [_.d.Tomorrow]: () => n("lobby.modal.task.timeNotArrived.tomorrow"),
                    [_.d.WeekWhole]: () => n("lobby.modal.task.timeNotArrived.weekWhole"),
                    [_.d.MonthWhole]: () => n("lobby.modal.task.timeNotArrived.monthWhole")
                }[o]();
                return (0,
                a.r)({
                    title: n("lobby.notice.importantNotice"),
                    titleType: "error",
                    content: t("div", {
                        class: b
                    }, [t("p", [r]), t(f.Z.CardLayout.ReceiveDowntime, {
                        attrs: {
                            donwTimestamp: i,
                            dayWeekMonth: s
                        }
                    })])
                })
            }
        }
        const w = n.getInstance()
          , k = y.getInstance()
          , T = v.getInstance()
          , C = c.getInstance()
          , x = {
            judgeIsAllowByRuleStatus: C.judgeIsAllowCollecting.bind(C),
            openForbidingDialogByRuleStatus: C.openForbidingDialog.bind(C),
            judgeIsAllowByTime: T.judgeIsAllowCollecting.bind(T),
            openForbidingDialogByTime: T.openForbidingDialog.bind(T),
            judgeIsAllowByDevice: w.judgeIsAllowCollecting.bind(w),
            openForbidingDialogByDevice: w.openForbidingDialog.bind(w),
            judgeIsAllowBySpeedPackageDeviceType: k.judgeIsAllowCollecting.bind(k),
            openForbidingDialogBySpeedPackageDeviceType: k.openForbidingDialog.bind(k)
        }
    },
    85259: function(e, t, i) {
        i.r(t),
        i.d(t, {
            default: function() {
                return hn
            }
        });
        var s = i(12040)
          , o = i(38821)
          , n = i(5515)
          , r = i(72230)
          , a = i(53158)
          , l = i(93791)
          , c = i(65845)
          , m = i(55433)
          , d = i(70753)
          , u = i(41279)
          , p = i(46851)
          , h = i(36630)
          , g = i(89205)
          , b = i(26248);
        var y = i(39972)
          , _ = i(18913)
          , f = i(38813)
          , v = i(95156)
          , w = i(58217)
          , k = i(91475)
          , T = i(11974)
          , C = i(53579);
        class x extends o.Ie.wA {
            constructor(e) {
                super(),
                (0,
                m.Z)(this, "errorDialogueManager", new u.b),
                (0,
                m.Z)(this, "successCout", 0),
                (0,
                m.Z)(this, "errorCout", 0),
                (0,
                m.Z)(this, "receivedLogIds", []),
                this.category = e
            }
            async handleCollect(e) {
                if ((0,
                T.NV)().isFetching)
                    return;
                const {receiveDeviceType: t, receiveCondition: i} = this.category;
                if (await (0,
                y.l7)(i))
                    return;
                let s = f.g.judgeIsAllowBySpeedPackageDeviceType(t);
                s = true;
                s ? (s = f.g.judgeIsAllowByDevice(t),
                s ? (await this.requestReceiveReward(e),
                this.afterRequestReceive(e),
                this.errorDialogueManager.reset(),
                this.successCout = 0,
                this.errorCout = 0,
                this.receivedLogIds = []) : f.g.openForbidingDialogByDevice(t)) : f.g.openForbidingDialogBySpeedPackageDeviceType(t)
            }
            async requestReceiveReward(e) {
                const {freshView: t, switchIsFetchingStatus: i} = (0,
                T.NV)();
                i(!0),
                e.isReceiveLoading = !0,
                t(),
                await this.requestOneReceiveReward(e),
                e.isReceiveLoading = !1,
                t(),
                i(!1)
            }
            async requestOneReceiveReward(e) {
                const {t: t} = (0,
                w.QT)()
                  , {taskId: i, template: s} = this.category;
                let o = f.g.judgeIsAllowByTime(e);
                var n;
                o ? (o = f.g.judgeIsAllowByRuleStatus({
                    ruleStatus: e.status
                }),
                o ? await (n = {
                    taskid: i,
                    template: s,
                    ruleid: e.ruleid,
                    receiveLogId: e.receiveLogId
                },
                p.Uh.post({
                    url: "/activetask/getprize",
                    data: n,
                    customParams: {
                        noErrorMessage: !0,
                        silentOnError: !0
                    },
                    headers: {
                        deviceModel: (0,
                        b.h)().deviceModel,
                        devicetype: (0,
                        b.h)().deviceType
                    }
                }).then((e => e.data.data))).then(( () => {
                    this.successCout++,
                    this.receivedLogIds.push(e.receiveLogId)
                }
                )).catch((e => {
                    const i = e.data?.msg;
                    i && ((0,
                    y.d3)(e) || (this.errorCout++,
                    this.errorDialogueManager.recordErrorFun({
                        openFun: () => (0,
                        _.r)({
                            title: t("lobby.notice.importantNotice"),
                            titleType: "error",
                            content: i
                        }),
                        priority: u.H.ServerRespanse
                    })))
                }
                )) : this.errorDialogueManager.recordErrorFun({
                    openFun: () => f.g.openForbidingDialogByRuleStatus({
                        ruleStatus: e.status
                    }),
                    priority: u.H.WebDecision
                })) : this.errorDialogueManager.recordErrorFun({
                    openFun: () => f.g.openForbidingDialogByTime(e),
                    priority: u.H.WebDecision
                })
            }
            afterRequestReceive(e) {
                const {code: t} = this.category;
                if (this.successCout > 0) {
                    const {patchRules: i} = (0,
                    T.NV)();
                    i({
                        status: g.Fx.Finish,
                        receiveDuration: 0
                    }, {
                        ruleId: e?.ruleid,
                        apiCode: t,
                        oldStatus: g.Fx.PendingReceive,
                        otherCondition: e => this.receivedLogIds.includes(e.receiveLogId)
                    }),
                    (0,
                    v.P)().freshChestInfo();
                    const {initGetredDot: s, updatePrize: o} = (0,
                    k.h)();
                    s(!0),
                    p.sG.Modal.open("receiveAnimation", {
                        aniType: (e?.prize || 0) >= 10 ? h.ai.TYPE_2 : h.ai.TYPE_1,
                        showAudio: !0,
                        updateGetredDot: !1,
                        updatePrize: !1
                    }),
                    o()
                }
                if (this.errorCout > 0) {
                    (0,
                    v.P)().freshChestInfo();
                    const {initGetredDot: e, updatePrize: t} = (0,
                    k.h)();
                    e(!0),
                    t()
                }
                const {curTabApiCode: i, freshInTabsCategoryDataByCode: s} = (0,
                T.NV)();
                s(i, !0),
                this.successCout > 0 && !this.errorDialogueManager.hasError() && C.Z.message({
                    type: "success",
                    content: (0,
                    w.QT)().t("lobby.modal.task.receiveSussessTip")
                }),
                0 === this.successCout && this.errorDialogueManager.hasError() && this.errorDialogueManager.open()
            }
        }
        var Z = i(5621)
          , I = i(35829)
          , A = i(37205)
          , S = i(3208)
          , R = i(1850);
        i(22159);
        let z;
        !function(e) {
            e[e.xsfl = 1] = "xsfl",
            e[e.mr = 2] = "mr",
            e[e.mz = 3] = "mz",
            e[e.sr = 4] = "sr",
            e[e.max = 5] = "max"
        }(z || (z = {}));
        const L = {
            icon_: "/lobby_asset/common/common/task/img_mr.png",
            icon_1_0: "/lobby_asset/common/common/task/img_lm.png",
            icon_1_1: "/lobby_asset/common/common/task/img_bdsj.png",
            icon_1_2: "/lobby_asset/common/common/task/img_bdyhk.png",
            icon_1_3: "/lobby_asset/common/common/task/img_wx.png",
            icon_1_4: "/lobby_asset/common/common/task/img_sr.png",
            icon_1_5: "/lobby_asset/common/common/task/img_mm.png",
            icon_1_6: "/lobby_asset/common/common/task/img_mb.png",
            icon_1_7: "/lobby_asset/common/common/task/img_nc.png",
            icon_1_8_cny: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_usd: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_thb: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_idr: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_inr: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_mmk: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_vnd: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_eur: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_krw: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_hkd: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_aud: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_gbp: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_jpy: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_idrk: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_php: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_brl: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_mxn: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_rub: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_aed: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_usdt: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_btc: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_eth: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_usdc: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_usdt1: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_usdc1: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_btc1: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_8_eth1: "/lobby_asset/common/common/task/img_yeb.png",
            icon_1_9: "/lobby_asset/common/common/task/img_yy.png",
            icon_1_10: "/lobby_asset/common/common/task/img_tx.png",
            icon_1_11: "/lobby_asset/common/common/task/img_yykxz.png",
            icon_1_12: "/lobby_asset/common/common/task/img_sjyz.png",
            icon_1_13: "/lobby_asset/common/common/task/img_whatsapp.png",
            icon_1_14: "/lobby_asset/common/common/task/img_fbcopy.png",
            icon_1_15: "/lobby_asset/common/common/task/img_tele.png",
            icon_1_16: "/lobby_asset/common/common/task/img_ga.png",
            icon_1_17: "/lobby_asset/common/common/task/img_zcsc.png",
            icon_1_18: "/lobby_asset/common/common/task/img_dr.png",
            icon_1_19: "/lobby_asset/common/common/task/img_bdyx.png",
            icon_1_20: "/lobby_asset/common/common/task/img_bcwz.png",
            icon_1_21: "/lobby_asset/common/common/task/img_bdszhb.png",
            icon_1_22: "/lobby_asset/common/common/task/img_zalo.png",
            icon_1_23: "/lobby_asset/common/common/task/img_line.png",
            icon_1_24: "/lobby_asset/common/common/task/img_twitter.png",
            icon_1_25: "/lobby_asset/common/common/task/img_txcz.png",
            icon_1_26: "/lobby_asset/common/common/task/img_bdyhk.png",
            icon_1_27: "/lobby_asset/common/common/task/img_xzlx.png",
            icon_2_1_cny: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_usd: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_thb: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_idr: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_inr: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_mmk: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_vnd: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_eur: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_krw: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_hkd: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_aud: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_gbp: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_jpy: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_idrk: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_php: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_brl: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_mxn: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_rub: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_aed: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_usdt: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_btc: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_eth: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_usdc: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_usdt1: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_usdc1: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_btc1: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_1_eth1: "/lobby_asset/common/common/task/img_cz.png",
            icon_2_2: "/lobby_asset/common/common/task/img_tz.png"
        }
          , P = "task_1_0"
          , M = "task_1_1"
          , D = "task_1_2"
          , B = "task_1_3"
          , F = "task_1_4"
          , N = "task_1_5"
          , E = "task_1_6"
          , O = "task_1_7"
          , Y = "task_1_8"
          , U = "task_1_9"
          , j = "task_1_10"
          , $ = "task_1_11"
          , W = "task_1_12"
          , H = "task_1_13"
          , X = "task_1_14"
          , G = "task_1_15"
          , Q = "task_1_16"
          , V = "task_1_17"
          , q = "task_1_18"
          , K = "task_1_19"
          , J = "task_1_20"
          , ee = "task_1_21"
          , te = "task_2_1"
          , ie = "task_2_2"
          , se = "task_2_3"
          , oe = "task_czdm_1"
          , ne = "task_czdm_2"
          , re = "task_czdm_3"
          , ae = "task_czdm_4"
          , le = "task_czdm_5"
          , ce = "task_czdm_6"
          , me = "task_czdm_7"
          , de = "task_1_22"
          , ue = "task_1_23"
          , pe = "task_1_24"
          , he = "task_1_25"
          , ge = "task_1_26"
          , be = "task_1_27";
        var ye, _e = i(21615), fe = i(75812), ve = i(2161), we = i(7174), ke = i(72698), Te = i(71743), Ce = i(1938), xe = i(72628), Ze = i(40215), Ie = "pIMBO7KWeK9BBcoZ1uty", Ae = "d914lI8oZ2NdH8sAVIGV", Se = "UPYHK50nUfBVcYhRM0hg", Re = "rqTltCezME1qvQb602CJ", ze = "zjnpwufmpe63ZIMgrDAd", Le = "FDIH62NU1lNib83wo3rw", Pe = "mKUhS01PYegMyRGLYH1A", Me = "uFZYQWT1bapTR1HxLs7S", De = "pMBfm_QMY4qQBxkjaPIG", Be = "XOkPFRWOQyn7uefB6hee", Fe = "OO4yqvbbU_lvCJTQBh5i", Ne = "wrSfdUfOHng5lQhEvd1h", Ee = "MQWEDY1o4nYKbohD7RRG", Oe = "qlVwzZNcyxZeO5wDbucw", Ye = "KNhCc_XgucV4gjPkQAJ0", Ue = "ZnvvUktddSezDoronHLA", je = "jmm4C3I6bVVgVU56ivfM", $e = "gMJQCRqIKfynrd_sEJm4", We = "VorA_6XMz4ee6xKV_D0m", He = "bQCwHgBMk2I4CxQXPXnT", Xe = "IGfC3pRlccIoTzlffH_I", Ge = "ONGIiwMvjsNRtYVDAika", Qe = "iB9Gj9JZRC6U7D2bldRX", Ve = "o7Cpfqe32wh6fS5zAqHY", qe = "OgkxqToaTUvmSk_xwNfe", Ke = "O3RbhNIgUHPWVKjmWJ6f", Je = "O8Pom3xrwSGlMrPYgMAl";
        let et = (0,
        o.wA)({
            name: "SaveUrl"
        })(ye = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                m.Z)(this, "localHref", "")
            }
            async mounted() {
                const e = await (0,
                S.y0)();
                (0,
                k.h)().updateNewBenefitsIsInSaveUrl(!0),
                this.$router.replace({
                    name: this.$route.name,
                    params: this.$route.params,
                    query: {
                        ...this.$route.query,
                        saveUrlUuid: e
                    }
                }),
                this.localHref = location.host + this.$route.fullPath
            }
            get getCurrencyIcon() {
                const {userInfos: e} = (0,
                k.h)();
                return ke.F.commonIconMap()[e?.currency || "CNY"]?.PAY_JB
            }
            get saveUrlRule() {
                const {apiCodeIdToRuleMapper: e} = (0,
                T.NV)();
                return e[`${l.t.xrfl}_20`]
            }
            renderItem() {
                const e = this.$createElement
                  , {t: t} = (0,
                w.QT)()
                  , {isWeb: i} = (0,
                k.h)()
                  , s = this.saveUrlRule;
                if (s)
                    return e("div", {
                        class: $e
                    }, [e("li", [e("div", {
                        class: We
                    }, [e("my-img", {
                        attrs: {
                            src: L.icon_1_21,
                            width: 60,
                            height: 60
                        }
                    })]), e("div", {
                        class: He
                    }, [e("div", {
                        class: Xe
                    }, [s.name]), e(xe.Z, {
                        attrs: {
                            current: s.progress,
                            total: s.max
                        },
                        class: Ge
                    })]), e("div", {
                        class: Qe
                    }, [e("div", {
                        class: [Ve, p.CM.CssClassName.Lobby.Color.Yellow]
                    }, [e("icon-sprite", {
                        attrs: {
                            sprite: this.getCurrencyIcon
                        }
                    }), e("span", [(0,
                    Ce.oB)(s.prize, {
                        symbol: ""
                    }, !0)])]), e("div", {
                        class: [qe, p.CM.CssClassName.Lobby.Color.Green]
                    }, [e("icon-sprite", {
                        attrs: {
                            sprite: (0,
                            Te.T9)("comm_icon_shy")
                        }
                    }), e("span", [s.brisk])])]), e("div", [e(we.zx.Tsx, {
                        class: [Je, Ke]
                    }, [e("auto-text", {
                        attrs: {
                            maxSize: i ? 16 : 22,
                            width: 96,
                            mode: "inline",
                            text: t("lobby.modal.task.forward").toString()
                        }
                    })])])])])
            }
            render() {
                const e = arguments[0]
                  , {t: t} = (0,
                w.QT)()
                  , {language: i} = (0,
                k.h)()
                  , s = "zh_CN" === i
                  , o = s ? "" : "en_";
                let n = `${o}bcwz_sj_tjzpm`;
                "pt_PT" === i && (n = "img_android_jc_1_pt");
                let r = `${o}bcwz_sj_tj`;
                return "pt_PT" === i && (r = "img_android_jc_2_pt"),
                e("div", {
                    class: Ie
                }, [e("my-scroll", {
                    attrs: {
                        direction: "y"
                    },
                    class: Ae
                }, [e("div", {
                    class: Se
                }, [t("lobby.modal.task.saveUrl.computer")]), e("div", {
                    class: Re
                }, [t("lobby.modal.task.saveUrl.savingURLToGo")]), this.renderItem(), e("div", {
                    class: Re
                }, [(0,
                Ze.p)(t("lobby.modal.task.saveUrl.clickTheMore"), "{x}", e("my-img", {
                    attrs: {
                        src: "/lobby_asset/common/web/home/bcwz_gd.png"
                    },
                    class: je
                })), "  " + t("lobby.modal.task.saveUrl.createShortcuts")]), e("my-img", {
                    class: ze,
                    attrs: {
                        src: `/lobby_asset/common/web/home/${o}bcwz_dn_cjkj.png`
                    }
                }), e("div", {
                    class: Re
                }, [t("lobby.modal.task.saveUrl.clickToCreate")]), e("div", {
                    class: Oe
                }, [e("span", [this.localHref]), e("my-img", {
                    class: Le,
                    attrs: {
                        src: `/lobby_asset/common/web/home/${o}bcwz_dn_cj.png`
                    }
                })]), e("div", {
                    class: Re
                }, [t("lobby.modal.task.saveUrl.returnToTheDesktop")]), e("div", {
                    class: Se
                }, [t("lobby.modal.task.saveUrl.chrome")]), e("div", {
                    class: Re
                }, [" ", t("lobby.modal.task.saveUrl.savingURLToGo")]), this.renderItem(), e("div", {
                    class: Re
                }, [(0,
                Ze.p)(t("lobby.modal.task.saveUrl.clickMoreIcon"), "{x}", e("my-img", {
                    attrs: {
                        src: "/lobby_asset/common/web/home/bcwz_gd.png"
                    },
                    class: je
                })), "  " + t("lobby.modal.task.saveUrl.clickAdd")]), e("my-img", {
                    class: Pe,
                    attrs: {
                        src: `/lobby_asset/common/web/home/${n}.png`
                    }
                }), e("div", {
                    class: Re
                }, [t("lobby.modal.task.saveUrl.selectAdd")]), e("div", {
                    class: Ye
                }, [e("span", [this.localHref]), e("my-img", {
                    class: Me,
                    attrs: {
                        src: `/lobby_asset/common/web/home/${r}.png`
                    }
                })]), e("div", {
                    class: Re
                }, [t("lobby.modal.task.saveUrl.returnToTheDesktop")]), s && e("div", [e("div", {
                    class: Se
                }, ["手机端其他浏览器"]), e("div", {
                    class: Re
                }, [t("lobby.modal.task.saveUrl.savingURLToGo")]), this.renderItem(), e("div", {
                    class: Re
                }, ["2.点击“更多”图标"]), e("my-img", {
                    class: De,
                    attrs: {
                        src: `/lobby_asset/common/web/home/${o}bcwz_qt_gd.png`
                    }
                }), e("div", {
                    class: Re
                }, ["3.点击收藏网址"]), e("my-img", {
                    class: Be,
                    attrs: {
                        src: `/lobby_asset/common/web/home/${o}bcwz_qt_sc.png`
                    }
                }), e("div", {
                    class: Re
                }, ["4.打开收藏/历史，选择刚刚收藏网址，点击更多，添加至手机桌面"]), e("my-img", {
                    class: Fe,
                    attrs: {
                        src: `/lobby_asset/common/web/home/${o}bcwz_sj_tjzpm.png`
                    }
                }), e("div", {
                    class: Re
                }, ["5.返回桌面，点击已创建的桌面快捷方式，打开网站，领取奖励"])]), e("div", {
                    class: Se
                }, [t("lobby.modal.task.saveUrl.safari")]), e("div", {
                    class: Re
                }, [t("lobby.modal.task.saveUrl.savingURLToGo")]), this.renderItem(), e("div", {
                    class: Re
                }, [t("lobby.modal.task.saveUrl.clickEnjoy")]), e("div", {
                    class: Ue
                }, [e("span", [this.localHref]), e("my-img", {
                    class: Ne,
                    attrs: {
                        src: `/lobby_asset/common/web/home/${o}bcwz_safari_gd.png`
                    }
                })]), e("div", {
                    class: Re
                }, [t("lobby.modal.task.saveUrl.selectToAdd")]), e("my-img", {
                    class: Ee,
                    attrs: {
                        src: `/lobby_asset/common/web/home/${o}bcwz_safari_ttzzpm.png`
                    }
                }), e("div", {
                    class: Re
                }, [t("lobby.modal.task.saveUrl.returnToTheDesktop")])])])
            }
        }
        ) || ye;
        var tt = i(80194)
          , it = "vSF5_POAvOf_O74XaIBb"
          , st = i(52204);
        class ot extends o.Ie.wA {
            constructor(e, t) {
                super(),
                (0,
                m.Z)(this, "smsVerification", ( () => () => {
                    const {validateConfig: e, initGetredDot: t} = (0,
                    k.h)();
                    e.hasPhoneNumber ? p.sG.Modal.open("veriryBindPhone", {
                        verifyScene: A.O.DEPOSIT_GAME_SMS_VERIFY,
                        desensitizedPhoneNumber: e.phoneNumber,
                        onSuccess: () => {
                            p.sG.Modal.close("veriryBindPhone"),
                            (0,
                            T.NV)().freshInTabsCategoryDataByCode(l.t.xrfl),
                            t()
                        }
                    }) : this.openRoute(I.x4.SECURITY, "0")()
                }
                )),
                (0,
                m.Z)(this, "openRoute", ( (e, t) => () => {
                    const {hasLogined: i} = (0,
                    k.h)();
                    i ? tt.ZP.push({
                        name: e,
                        query: t ? {
                            current: t
                        } : {}
                    }) : C.Z.openLoginRegisterModal()
                }
                )),
                (0,
                m.Z)(this, "openWithdraw", (e => () => {
                    (0,
                    R.eH)(e)
                }
                )),
                (0,
                m.Z)(this, "jumpToSetting", (e => () => {
                    const {hasLogined: t} = (0,
                    k.h)();
                    t ? tt.ZP.push({
                        name: "setting" === e ? I.x4.SETTING : I.x4.UPDATE_AVATOR,
                        query: {
                            jumpFrom: I.x4.TASK
                        }
                    }) : C.Z.openLoginRegisterModal()
                }
                )),
                (0,
                m.Z)(this, "handleAddContact", ( () => e => {
                    let t = !1;
                    try {
                        const i = JSON.parse(e.cfg)?.bindTypes || [];
                        1 === i.length && i.includes(1) && (t = !0)
                    } catch {}
                    t ? this.openRoute(I.x4.SECURITY)() : this.jumpToSetting("setting")()
                }
                )),
                (0,
                m.Z)(this, "handleDownloadAndLogin", ( () => e => {
                    const {hasLogined: t} = (0,
                    k.h)();
                    if (!t)
                        return void C.Z.openLoginRegisterModal();
                    let i = !1;
                    try {
                        const t = JSON.parse(e.cfg)
                          , s = _e.cY?.package?.isVest;
                        i = 1 === Number(t.isVestBag) && s
                    } catch {}
                    const s = _e.cY?.speedPackageConfig?.osType;
                    if (i || s) {
                        const {t: e} = (0,
                        w.QT)();
                        p.sG.Modal.open("rechargeLeastOnceTip", {
                            content: e("lobby.modal.task.rechargeAtLeastOnce"),
                            hasCloseBtn: !0
                        })
                    }
                    p.xN.dispatch({
                        type: "download_app"
                    })
                }
                )),
                (0,
                m.Z)(this, "openModal", ( (e, ...t) => () => {
                    const {hasLogined: i} = (0,
                    k.h)();
                    i ? ve.Z.Modal.open(e, ...t) : C.Z.openLoginRegisterModal()
                }
                )),
                (0,
                m.Z)(this, "openMusic", ( () => () => {
                    const {hasLogined: e} = (0,
                    k.h)();
                    e ? C.Z.open("musicModal") : C.Z.openLoginRegisterModal()
                }
                )),
                (0,
                m.Z)(this, "handleFirstYeb", ( () => () => {
                    const {isDemoMode: e} = (0,
                    k.h)()
                      , {getYuebaoSwitchIsHide: t} = (0,
                    st.Z)()
                      , {t: i} = (0,
                    w.QT)();
                    return e ? (0,
                    y.Kc)(i("lobby.error.demoAccountTips").toString()) : t ? (0,
                    y.Kc)(i("lobby.interest.notOpen").toString()) : void this.openRoute(I.x4.YUEBAO)()
                }
                )),
                this.category = e,
                this.situateModalName = t
            }
            handleForward(e) {
                ve.Z.Modal.close(this.situateModalName, {
                    trigger: "forward"
                }),
                this.handleForwardAction(e)
            }
            handleForwardAction(e) {
                const t = "" + e.icon;
                let i = "";
                i = [l.t.mrrw, l.t.mzrw, l.t.smrw].includes(this.category.code) ? "task_czdm_" + t : "task_" + this.category.template + "_" + t;
                const s = this.forwardActions[i];
                s ? s(e) : console.error(e.ruleid)
            }
            async openSaveUrlGuide() {
                const {hasLogined: e} = (0,
                k.h)();
                e ? await this.guidedTutorials() : C.Z.openLoginRegisterModal()
            }
            async guidedTutorials() {
                const e = this.$createElement
                  , {isWeb: t} = (0,
                k.h)();
                if (t) {
                    if (t) {
                        const t = await (0,
                        S.y0)();
                        await tt.ZP.replace({
                            name: tt.ZP.app.$route.name,
                            params: tt.ZP.app.$route.params,
                            query: {
                                ...tt.ZP.app.$route.query,
                                saveUrlUuid: t
                            }
                        });
                        const {t: i} = (0,
                        w.QT)()
                          , {updateNewBenefitsIsInSaveUrl: s} = (0,
                        k.h)();
                        ve.Z.Modal.create({
                            hiddenBtns: !0,
                            closable: !0,
                            class: it,
                            width: fe.ZP.px2rem(710),
                            title: i("lobby.modal.task.saveUrl.title"),
                            afterClose: () => s(!1),
                            content: () => e(et)
                        })
                    }
                } else
                    p.xN.dispatch({
                        type: "PWA_INSTALL"
                    })
            }
            get forwardActions() {
                return {
                    [P]: () => {
                        C.Z.openLoginRegisterModal({
                            register: !0
                        })
                    }
                    ,
                    [M]: this.openRoute(I.x4.SECURITY, "0"),
                    [K]: this.openRoute(I.x4.SECURITY, "2"),
                    [D]: this.openWithdraw(Z.u.ACCOUNT),
                    [B]: this.jumpToSetting("setting"),
                    [F]: this.jumpToSetting("setting"),
                    [O]: this.jumpToSetting("setting"),
                    [H]: this.jumpToSetting("setting"),
                    [X]: this.jumpToSetting("setting"),
                    [G]: this.jumpToSetting("setting"),
                    [de]: this.jumpToSetting("setting"),
                    [ue]: this.jumpToSetting("setting"),
                    [pe]: this.jumpToSetting("setting"),
                    [he]: this.openRoute(I.x4.WITHDRAW, "0"),
                    [ge]: this.openWithdraw(Z.u.WITHDRAW),
                    [be]: this.handleAddContact(),
                    [N]: this.openRoute(I.x4.SECURITY, "5"),
                    [E]: this.openRoute(I.x4.SECURITY, "6"),
                    [j]: this.jumpToSetting("avator"),
                    [U]: this.openRoute(I.x4.SETTING),
                    [Y]: this.handleFirstYeb(),
                    [$]: this.openMusic(),
                    [W]: this.smsVerification(),
                    [te]: this.openModal("payModal"),
                    [ie]: this.openRoute(I.x4.GAME),
                    [se]: this.openRoute(I.x4.GAME),
                    [oe]: this.openModal("payModal"),
                    [ne]: this.openRoute(I.x4.GAME),
                    [re]: this.openRoute(I.x4.GAME),
                    [ae]: this.openRoute(I.x4.GAME),
                    [le]: this.openRoute(I.x4.GAME),
                    [ce]: this.openRoute(I.x4.GAME),
                    [me]: this.openRoute(I.x4.GAME),
                    [Q]: this.openRoute(I.x4.SECURITY, "3"),
                    [V]: this.openModal("payModal"),
                    [q]: this.handleDownloadAndLogin(),
                    [ee]: this.openWithdraw(Z.u.ACCOUNT),
                    [J]: this.openSaveUrlGuide.bind(this)
                }
            }
        }
        var nt, rt = i(36568), at = i.n(rt), lt = "orar4AB5gLSNOXJb_OsF", ct = "Pw6IsungAZxWckiGFArj", mt = "N0ElEdG3eS1_bYIoq7r6", dt = "YlERDq3LA_WfgCmorh29", ut = "DcfVLVrBN4TqCHseVdRV", pt = "lFQGTuUltwd4PatSU4ul", ht = "f1rAptiAG0MUXymr08Qt", gt = "Iv6jz5iXQauCclQLZAzY";
        let bt = (0,
        o.wA)({
            name: "CardRightBox"
        })(nt = class extends o.XY {
            get isHasBottomTime() {
                return Boolean(this.$scopedSlots.bottomTime)
            }
            render() {
                const e = arguments[0];
                return e("div", {
                    class: {
                        [lt]: !0
                    }
                }, [e("div", {
                    class: {
                        [ct]: !0,
                        [gt]: this.isHasBottomTime
                    }
                }, [e("div", {
                    class: mt
                }, [this.$scopedSlots.amountAndActivity && e("div", {
                    class: dt
                }, [this.$scopedSlots.amountAndActivity()]), e("div", {
                    class: ut
                }, [this.$scopedSlots.button?.()])]), this.$scopedSlots.bottomTime && e("div", {
                    class: pt
                }, [e("div", {
                    class: ht
                }, [this.$scopedSlots.bottomTime()])])])])
            }
        }
        ) || nt;
        var yt, _t, ft, vt, wt, kt = i(55882), Tt = i(82539), Ct = "USLYJ5bagb2qCXsJYXdN", xt = "WxJBu2ZXvyioubB61FG8";
        const {getDayTypeByReceiveTimeType: Zt} = Tt.Z;
        let It = (yt = (0,
        o.wA)({
            name: "CardRightBuild"
        }),
        _t = (0,
        o.fI)(),
        yt((vt = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                a.Z)(this, "taskRule", wt, this),
                (0,
                m.Z)(this, "currentTime", Date.now())
            }
            get dayType() {
                return Zt(this.taskRule.receiveTimeType)
            }
            get isShowBottomTimeSlot() {
                const {receiveDuration: e} = this.taskRule;
                return e > 0 || e < 0
            }
            get getDuration() {
                if (!this.taskRule || !this.isShowBottomTimeSlot)
                    return 0;
                const {periodTime: e, receiveDuration: t} = this.taskRule
                  , i = Date.now() / 1e3 - e;
                return Math.abs(t - i) > 60 ? t : i
            }
            handleClickRuleCommandBtn() {
                const {taskRule: e, isShowBottomTimeSlot: t} = this
                  , i = {
                    ...e
                };
                t && (i.receiveDuration = this.getDuration),
                this.$emit("clickRuleCommandBtn", i)
            }
            render() {
                const e = arguments[0]
                  , {taskRule: t, dayType: i, isShowBottomTimeSlot: s} = this;
                return e(bt, {
                    class: Ct
                }, [e("template", {
                    slot: "button"
                }, [e(kt.Z, {
                    attrs: {
                        isLoading: t.isReceiveLoading,
                        btnKey: kt.Z.getBtnKeyByRuleStatus(t.status)
                    },
                    on: {
                        click: this.handleClickRuleCommandBtn
                    }
                })]), e("template", {
                    slot: "bottomTime"
                }, [s && e(Tt.Z, {
                    class: xt,
                    attrs: {
                        dayType: i,
                        donwTimestamp: this.getDuration,
                        dayWeekMonth: t.receiveTimeDay
                    },
                    on: {
                        expiryFinish: () => {
                            t.status = g.Fx.Expired,
                            t.receiveDuration = 0
                        }
                        ,
                        waitingFinish: () => t.receiveDuration = 0
                    }
                })])])
            }
        }
        ,
        wt = (0,
        s.Z)(vt.prototype, "taskRule", [_t], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ft = vt)) || ft);
        var At, St, Rt, zt, Lt, Pt, Mt = i(63137), Dt = i.n(Mt), Bt = i(30381), Ft = i.n(Bt), Nt = "h6ctjCcI59JFBjPRVMyA";
        !function(e) {
            e[e.firstIndex = 0] = "firstIndex",
            e[e.secondIndex = 1] = "secondIndex",
            e[e.thirdIndex = 2] = "thirdIndex",
            e[e.fourIndex = 3] = "fourIndex"
        }(Pt || (Pt = {}));
        let Et = (At = (0,
        o.wA)({
            name: "CategoryIntroduce"
        }),
        St = (0,
        o.fI)({
            required: !0
        }),
        At((zt = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                a.Z)(this, "category", Lt, this)
            }
            get getLang() {
                const e = Dt()(p.CM.ServiceLanguageMap)
                  , {language: t} = (0,
                k.h)()
                  , {isDefaultRule: i, translateRuleText: s} = this.category || {};
                return i ? t : e[s]
            }
            renderTaskTime(e) {
                const t = this.$createElement
                  , {t: i} = (0,
                w.QT)()
                  , {siteInfos: s} = (0,
                k.h)()
                  , o = Ft()().utcOffset(s?.timeZone ?? "").utcOffset() / 60;
                return t("div", [t("p", {
                    class: [p.CM.CssClassName.Lobby.Color.TextDarken]
                }, [e, i("lobby.modal.task.describe.time", this.getLang), "(UTC", o >= 0 && "+", o, "):"]), t("p", [this.category.taskTime])])
            }
            renderTaskCondition(e) {
                const t = this.$createElement
                  , {t: i} = (0,
                w.QT)();
                return t("div", [t("p", {
                    class: [p.CM.CssClassName.Lobby.Color.TextDarken]
                }, [e, i("lobby.modal.task.describe.condition", this.getLang), ":"]), t("p", [this.category.taskCondition])])
            }
            renderTaskContent(e) {
                const t = this.$createElement
                  , {t: i} = (0,
                w.QT)();
                return t("div", [t("p", {
                    class: [p.CM.CssClassName.Lobby.Color.TextDarken]
                }, [e, i("lobby.modal.task.describe.content", this.getLang), ":"]), t("inner-html", {
                    attrs: {
                        type: "p",
                        text: this.category.content
                    }
                })])
            }
            render() {
                const e = arguments[0]
                  , {t: t} = (0,
                w.QT)()
                  , i = [];
                return this.category.taskTime && i.push(this.renderTaskTime),
                this.category.taskCondition && i.push(this.renderTaskCondition),
                this.category.content && i.push(this.renderTaskContent),
                i.length ? e("div", {
                    class: [Nt, "theme-box-shadow", "theme-box-shadow-h5"]
                }, [i.map(( (e, i) => e(t(`lobby.event.${Pt[i]}`, this.getLang))))]) : e("template")
            }
        }
        ,
        Lt = (0,
        s.Z)(zt.prototype, "category", [St], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Rt = zt)) || Rt);
        var Ot, Yt, Ut, jt, $t, Wt, Ht, Xt = "A4xPEUbkwty2YSPi4CdI", Gt = "aiXn7CDwBMwlzf4KqLcT";
        let Qt = (Ot = (0,
        o.wA)({
            name: "CornerDay"
        }),
        Yt = (0,
        o.fI)(),
        Ut = (0,
        o.fI)(),
        Ot(($t = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                a.Z)(this, "day", Wt, this),
                (0,
                a.Z)(this, "isOpen", Ht, this)
            }
            render() {
                const e = arguments[0]
                  , {t: t} = (0,
                w.QT)()
                  , {day: i, isOpen: s} = this;
                return e("div", {
                    class: {
                        [Xt]: !0,
                        [Gt]: s
                    }
                }, [e("span", [t("lobby.modal.task.dayCount", {
                    X: i,
                    x: i
                })])])
            }
        }
        ,
        Wt = (0,
        s.Z)($t.prototype, "day", [Yt], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ht = (0,
        s.Z)($t.prototype, "isOpen", [Ut], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        jt = $t)) || jt);
        var Vt, qt, Kt, Jt, ei, ti, ii, si = "K79xS6n_DF1um8uk32vA", oi = "r9cmDRMqPkZrpqWnE3iJ", ni = "xGVRZd7BnZxK_7aIU5Xd", ri = "BcIAHtzb_oVeg2jvAL_c", ai = "BpppmnmvY3o7YT0E38mb", li = "xWwpZiHCw3hVVKmIqTZj";
        let ci = (Vt = (0,
        o.wA)({
            name: "DescriptionTips"
        }),
        qt = (0,
        o.fI)(),
        Kt = (0,
        o.fI)(),
        Vt((ei = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                a.Z)(this, "maxAmount", ti, this),
                (0,
                a.Z)(this, "minAmount", ii, this)
            }
            static getProps(e) {
                const t = e
                  , {maxAmount: i, minAmount: s, minThreeMysteriousAmount: o, maxThreeMysteriousAmount: n} = t;
                return {
                    maxAmount: i || n,
                    minAmount: s || o
                }
            }
            get amount() {
                const {maxAmount: e, minAmount: t} = this;
                return e && t ? e - t != 0 ? `${(0,
                Ce._5)(t, {
                    separator: ",",
                    precision: 2
                })}-${(0,
                Ce._5)(e, {
                    separator: ",",
                    precision: 2
                })}` : String((0,
                Ce._5)(e, {
                    separator: ",",
                    precision: 2
                })) : ""
            }
            get tips() {
                const e = this.$createElement
                  , {t: t} = (0,
                w.QT)();
                return e("inner-html", {
                    class: si,
                    attrs: {
                        type: "div",
                        text: t("lobby.modal.task.threeDaysTips", {
                            x: this.amount
                        })
                    }
                })
            }
            get iconInfo() {
                const e = this.$createElement;
                return e("span", {
                    class: ni
                }, [e("icon-sprite", {
                    class: ri,
                    attrs: {
                        sprite: (0,
                        Te.T9)("icon_grzx_gywm")
                    }
                }), e("span", {
                    class: ai
                })])
            }
            render() {
                const e = arguments[0]
                  , {isWeb: t} = (0,
                k.h)()
                  , {t: i} = (0,
                w.QT)();
                return e("div", {
                    attrs: {
                        id: "description-tips"
                    },
                    class: oi
                }, [e("span", [i("lobby.modal.task.finishTreeDay")]), e(we.J2.Tsx, {
                    attrs: {
                        placement: "top",
                        overlayClassName: li,
                        trigger: t ? "hover" : "click",
                        getPopupContainer: () => document.getElementById("description-tips")
                    }
                }, [e("template", {
                    slot: "content"
                }, [this.tips]), this.iconInfo])])
            }
        }
        ,
        ti = (0,
        s.Z)(ei.prototype, "maxAmount", [qt], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ii = (0,
        s.Z)(ei.prototype, "minAmount", [Kt], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Jt = ei)) || Jt);
        class mi {
            constructor() {}
            static getInstace() {
                return this.instance || (this.instance = new mi),
                this.instance
            }
            getIconName(e, t) {
                let i = t.icon
                  , s = e.template;
                const o = e.code;
                o !== l.t.mzrw && o !== l.t.mrrw || (s = 2,
                2 !== i && 3 !== i || (i = 2));
                let n = void 0 === t.icon ? "" : s + "_" + i;
                return 4 === s && (n = ""),
                n
            }
            run(e, t) {
                if (e.code !== l.t.xrfl)
                    return;
                const i = this.getIconName(e, t)
                  , {userInfos: s} = (0,
                k.h)();
                let o;
                const n = `icon_${i}_${s?.currency?.toLowerCase()}`;
                return o = n in L ? L[n] : L["icon_" + i],
                o
            }
        }
        var di, ui, pi, hi, gi, bi, yi, _i, fi, vi, wi, ki, Ti, Ci, xi, Zi = i(54330), Ii = i(70157), Ai = i(26610);
        let Si = (di = (0,
        o.wA)({
            name: "RuleInfo"
        }),
        ui = (0,
        o.fI)({
            required: !0
        }),
        pi = (0,
        o.fI)({
            required: !0
        }),
        hi = (0,
        o.fI)(),
        gi = (0,
        o.fI)({
            default: "default"
        }),
        bi = (0,
        o.fI)(),
        yi = (0,
        o.fI)(),
        di((fi = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                a.Z)(this, "category", vi, this),
                (0,
                a.Z)(this, "taskRule", wi, this),
                (0,
                a.Z)(this, "customTaskName", ki, this),
                (0,
                a.Z)(this, "type", Ti, this),
                (0,
                a.Z)(this, "isHideBottom", Ci, this),
                (0,
                a.Z)(this, "isShallowText", xi, this)
            }
            get renderConfig() {
                const {taskRule: e} = this;
                let t, i, s;
                return g.Z2.isTaskRule(e) ? (t = e.prize,
                i = e.brisk,
                s = Zi.Z.getIsActiveByStatus(e.status)) : (t = e.reward,
                i = e.activity,
                s = !0),
                {
                    limitTitle: Ai.Z.getNameExtLimititle(e),
                    limitContent: e.nameExt,
                    amount: (0,
                    Ce._5)(t, {
                        separator: ",",
                        precision: 2
                    }),
                    activity: i,
                    isActive: s,
                    description: this.customTaskName || e.name,
                    showConfig: {
                        amountIcon: !1,
                        amountShow: t > 0,
                        activityShow: i > 0
                    },
                    iconSrc: mi.getInstace().run(this.category, this.taskRule)
                }
            }
            render() {
                const e = arguments[0]
                  , {type: t, isHideBottom: i, isShallowText: s} = this
                  , {limitTitle: o, limitContent: n, amount: r, activity: a, isActive: l, description: c, iconSrc: m, showConfig: d} = this.renderConfig;
                return e(Ii.Z, {
                    attrs: {
                        type: t,
                        description: c,
                        additional: e(Ai.Z, {
                            attrs: {
                                limitTitle: o(),
                                limitContent: n
                            }
                        }),
                        bottomSlot: i ? void 0 : e(Zi.Z, {
                            attrs: {
                                type: "default",
                                amount: r,
                                activity: a,
                                isActive: l,
                                showConfig: d
                            }
                        }),
                        iconSrc: m,
                        isShallowText: s
                    }
                })
            }
        }
        ,
        vi = (0,
        s.Z)(fi.prototype, "category", [ui], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        wi = (0,
        s.Z)(fi.prototype, "taskRule", [pi], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ki = (0,
        s.Z)(fi.prototype, "customTaskName", [hi], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ti = (0,
        s.Z)(fi.prototype, "type", [gi], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ci = (0,
        s.Z)(fi.prototype, "isHideBottom", [bi], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        xi = (0,
        s.Z)(fi.prototype, "isShallowText", [yi], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        _i = fi)) || _i);
        var Ri, zi, Li, Pi, Mi, Di, Bi, Fi, Ni, Ei, Oi, Yi = "MOpgzlhDq9Tg9LvLriIi", Ui = "MBkrXfpthqHg4yvFxjsQ", ji = "H9xuR6lcSy8t3irfusvw";
        let $i = (Ri = (0,
        o.wA)({
            name: "RuleListMystery"
        }),
        zi = (0,
        o.fI)(),
        Li = (0,
        o.fI)(),
        Pi = (0,
        o.fI)(),
        Mi = (0,
        o.fI)(),
        Ri((Bi = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                a.Z)(this, "category", Fi, this),
                (0,
                a.Z)(this, "ruleList", Ni, this),
                (0,
                a.Z)(this, "isShowIntro", Ei, this),
                (0,
                a.Z)(this, "isCompact", Oi, this)
            }
            get isCompleteBeforeTas() {
                if (!g.Z2.isTaskRuleArray(this.ruleList))
                    return !1;
                const {PendingReceive: e, Finish: t, Expired: i, HasSend: s, PendingApprove: o, ServerCancel: n, ServerReject: r} = g.Fx
                  , a = [e, t, i, s, o, n, r];
                return this.ruleList.slice(0, 3).reduce(( (e, t) => (a.includes(t.status) || (e = !1),
                e)), !0)
            }
            renderTaskItem(e, t) {
                const i = this.$createElement
                  , s = g.Z2.isTaskRule(e)
                  , o = 3 === t;
                let n;
                o && (n = i(ci, at()([{}, {
                    props: ci.getProps(e)
                }])));
                const r = g.Fx.UnOpen === e.status
                  , a = r || o && !this.isCompleteBeforeTas;
                return i(c.Z.CardLayout, {
                    class: {
                        [ji]: o
                    },
                    key: `${e.webId}_${s && e.receiveDuration}_${t}`,
                    attrs: {
                        isHideRight: a,
                        isCompact: this.isCompact,
                        constantWidthAspect: "right"
                    }
                }, [i("template", {
                    slot: "suspension"
                }, [!o && i(Qt, {
                    attrs: {
                        day: t + 1,
                        isOpen: r
                    }
                })]), i("template", {
                    slot: "left"
                }, [i(Si, {
                    attrs: {
                        category: this.category,
                        taskRule: e,
                        customTaskName: n,
                        type: "srrw",
                        isHideBottom: a,
                        isShallowText: a
                    }
                })]), i("template", {
                    slot: "right"
                }, [s && !a && i(It, {
                    attrs: {
                        taskRule: e
                    },
                    on: {
                        clickRuleCommandBtn: () => this.$emit("clickRuleCommandBtn", e)
                    }
                })])])
            }
            render() {
                const e = arguments[0];
                return e("div", {
                    class: Yi
                }, [e("div", {
                    class: Ui
                }, [e("ul", [this.ruleList.map(( (e, t) => this.renderTaskItem(e, t)))])]), this.isShowIntro && e(Et, {
                    attrs: {
                        category: this.category
                    }
                })])
            }
        }
        ,
        Fi = (0,
        s.Z)(Bi.prototype, "category", [zi], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ni = (0,
        s.Z)(Bi.prototype, "ruleList", [Li], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ei = (0,
        s.Z)(Bi.prototype, "isShowIntro", [Pi], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Oi = (0,
        s.Z)(Bi.prototype, "isCompact", [Mi], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Di = Bi)) || Di);
        var Wi, Hi, Xi, Gi, Qi, Vi, qi, Ki, Ji, es, ts, is = "OD_bYyQbCL2Wh0eVVOE2";
        let ss = (Wi = (0,
        o.wA)({
            name: "RuleListNormal"
        }),
        Hi = (0,
        o.fI)(),
        Xi = (0,
        o.fI)(),
        Gi = (0,
        o.fI)(),
        Qi = (0,
        o.fI)(),
        Wi((qi = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                a.Z)(this, "category", Ki, this),
                (0,
                a.Z)(this, "ruleList", Ji, this),
                (0,
                a.Z)(this, "isShowIntro", es, this),
                (0,
                a.Z)(this, "isCompact", ts, this)
            }
            get isTaskRuleArray() {
                return g.Z2.isTaskRuleArray(this.ruleList)
            }
            renderItem(e) {
                const t = this.$createElement;
                return t(c.Z.CardLayout, {
                    key: `${e.webId}_${this.isTaskRuleArray && e.receiveDuration}`,
                    attrs: {
                        isCompact: this.isCompact,
                        constantWidthAspect: "right"
                    }
                }, [t("template", {
                    slot: "left"
                }, [t(Si, {
                    attrs: {
                        category: this.category,
                        taskRule: e
                    }
                })]), t("template", {
                    slot: "right"
                }, [this.isTaskRuleArray && t(It, {
                    attrs: {
                        taskRule: e
                    },
                    on: {
                        clickRuleCommandBtn: e => this.$emit("clickRuleCommandBtn", e)
                    }
                })])])
            }
            render() {
                const e = arguments[0];
                return e("div", {
                    class: is
                }, [e("ul", [this.ruleList.map((e => this.renderItem(e)))]), this.isShowIntro && e(Et, {
                    attrs: {
                        category: this.category
                    }
                })])
            }
        }
        ,
        Ki = (0,
        s.Z)(qi.prototype, "category", [Hi], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ji = (0,
        s.Z)(qi.prototype, "ruleList", [Xi], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        es = (0,
        s.Z)(qi.prototype, "isShowIntro", [Gi], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ts = (0,
        s.Z)(qi.prototype, "isCompact", [Qi], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Vi = qi)) || Vi);
        var os, ns, rs, as, ls, cs, ms, ds, us, ps, hs, gs, bs, ys;
        let _s = (os = (0,
        o.wA)({
            name: "Tasks"
        }),
        ns = (0,
        o.fI)({
            required: !0
        }),
        rs = (0,
        o.fI)(),
        as = (0,
        o.fI)(),
        ls = (0,
        o.fI)(),
        cs = (0,
        o.RL)("ruleList", {
            immediate: !0
        }),
        ms = (0,
        d.WY)(),
        ds = (0,
        d.Xo)(200),
        os((ps = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                a.Z)(this, "category", hs, this),
                (0,
                a.Z)(this, "ruleList", gs, this),
                (0,
                a.Z)(this, "isShowIntro", bs, this),
                (0,
                a.Z)(this, "situateModalName", ys, this),
                (0,
                m.Z)(this, "pageSize", 30),
                (0,
                m.Z)(this, "state", {
                    virtualSource: [],
                    virtualPageNo: 1
                })
            }
            get handleForward() {
                const e = new ot(this.category,this.situateModalName);
                return e.handleForward.bind(e)
            }
            get handleCollect() {
                const e = new x(this.category);
                return e.handleCollect.bind(e)
            }
            mounted() {
                (0,
                fe.C1)("enterTask")
            }
            watchRuleListChange() {
                const e = this.state.virtualPageNo || 1
                  , t = this.ruleList.length && this.ruleList.slice(0, this.pageSize * e) || [];
                this.setState({
                    virtualSource: t,
                    virtualPageNo: e
                })
            }
            handleScroll(e) {
                const {virtualPageNo: t, virtualSource: i} = this.state
                  , s = e.target
                  , o = s.scrollHeight - s.clientHeight
                  , n = s.scrollTop
                  , r = Math.ceil(this.ruleList.length / this.pageSize);
                if (o - n < Math.floor(o / 2) && t <= r) {
                    const e = t + 1
                      , s = this.ruleList.slice(t * this.pageSize, e * this.pageSize) ?? [];
                    this.setState({
                        virtualSource: i?.concat(s) ?? [],
                        virtualPageNo: e
                    })
                }
            }
            handleClickCommandBtn(e) {
                return {
                    [g.Fx.Goto]: () => this.handleForward(e),
                    [g.Fx.Processing]: () => this.handleForward(e),
                    [g.Fx.PendingApprove]: () => this.handleCollect(e),
                    [g.Fx.PendingReceive]: () => this.handleCollect(e)
                }[e.status]?.()
            }
            get showRuleList() {
                return (0,
                k.h)().isWeb ? this.ruleList || [] : this.state.virtualSource || []
            }
            renderNormalTasks(e) {
                const t = this.$createElement;
                return this.showRuleList.length > 0 ? t(ss, {
                    attrs: {
                        category: this.category,
                        isCompact: e,
                        ruleList: this.showRuleList,
                        isShowIntro: this.isShowIntro
                    },
                    on: {
                        clickRuleCommandBtn: e => this.handleClickCommandBtn(e)
                    }
                }) : t("template")
            }
            renderContinuouslyTasks(e) {
                const t = this.$createElement;
                return this.showRuleList.length > 0 ? t($i, {
                    attrs: {
                        category: this.category,
                        isCompact: e,
                        ruleList: this.showRuleList,
                        isShowIntro: this.isShowIntro
                    },
                    on: {
                        clickRuleCommandBtn: e => this.handleClickCommandBtn(e)
                    }
                }) : t("template")
            }
        }
        ,
        hs = (0,
        s.Z)(ps.prototype, "category", [ns], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        gs = (0,
        s.Z)(ps.prototype, "ruleList", [rs], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        bs = (0,
        s.Z)(ps.prototype, "isShowIntro", [as], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ys = (0,
        s.Z)(ps.prototype, "situateModalName", [ls], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        (0,
        s.Z)(ps.prototype, "watchRuleListChange", [cs], Object.getOwnPropertyDescriptor(ps.prototype, "watchRuleListChange"), ps.prototype),
        (0,
        s.Z)(ps.prototype, "handleScroll", [ms, ds], Object.getOwnPropertyDescriptor(ps.prototype, "handleScroll"), ps.prototype),
        us = ps)) || us);
        var fs, vs, ws, ks, Ts, Cs = "KkATYNzA4sOPmUKb9UAF", xs = "yQk6eVBDrZq4FZtCH2MW";
        let Zs = (fs = (0,
        o.wA)({
            name: "TasksExhibition"
        }),
        vs = (0,
        o.fI)(),
        fs((ks = class extends _s {
            constructor(...e) {
                super(...e),
                (0,
                a.Z)(this, "isCompactList", Ts, this)
            }
            renderMobile() {
                const e = this.$createElement
                  , t = this.category.code === l.t.smrw;
                return e("div", {
                    class: Cs
                }, [e(c.Z.ScrollLayout, {
                    key: this.category.code,
                    attrs: {
                        heightType: "full"
                    },
                    on: {
                        scroll: e => this.handleScroll(e)
                    }
                }, [e("template", {
                    slot: "body-top"
                }, [this.category.withdrawTip && e(c.Z.AlertBar, [this.category.withdrawTip])]), e("template", {
                    slot: "body-scroll"
                }, [t ? this.renderContinuouslyTasks(this.isCompactList) : this.renderNormalTasks(this.isCompactList), e("div", {
                    class: xs
                })])])])
            }
            render() {
                return this.renderMobile()
            }
        }
        ,
        Ts = (0,
        s.Z)(ks.prototype, "isCompactList", [vs], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ws = ks)) || ws);
        var Is = i(78910)
          , As = i(84238)
          , Ss = i(98478)
          , Rs = i(9797);
        var zs, Ls = "b4a8yICr6i8zaqvsBeTe", Ps = "xEV7CS_3hszCSOegWRsF";
        let Ms = (0,
        o.wA)({
            name: "List"
        })(zs = class extends o.XY {
            render() {
                const e = arguments[0];
                return e("ul", {
                    class: Ls
                }, [e("li", {
                    class: Ps
                }), this.$slots.default])
            }
        }
        ) || zs;
        var Ds, Bs, Fs, Ns, Es, Os, Ys, Us, js = "tb_stMCvBH3ApBcuSGSP", $s = "b0BHZcZYWdrQM0KoUL7Q", Ws = "rdatlT_Z7nBXsGAm_adQ", Hs = "k4eDV8PQdi1YkriBVSnk", Xs = "TZiCx2nSaRPc7tdUoKig", Gs = "SQ0SzWF7fOm6lB6IiVZo", Qs = "HW7qGJ7oWqUN2icyGL3D", Vs = "sueXZC0kv7odh_8KXCUy";
        const qs = e => {
            switch (e.status) {
            case Rs.YM.canReceive:
                return e.icon1;
            case Rs.YM.alreadyReceived:
                return e.icon2;
            default:
                return "/lobby_asset/common/common/task/img_rwbx_0.png"
            }
        }
        ;
        let Ks = (Ds = (0,
        o.wA)({
            name: "ChestComp"
        }),
        Bs = (0,
        o.fI)({
            required: !0
        }),
        Fs = (0,
        o.fI)(),
        Ds((Us = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                a.Z)(this, "item", Os, this),
                (0,
                a.Z)(this, "isLast", Ys, this),
                (0,
                m.Z)(this, "state", {
                    pending: !1
                })
            }
            async handleCollectOneChest() {
                if (this.item.status === Rs.YM.canReceive && !this.state.pending) {
                    this.setState({
                        pending: !0
                    });
                    try {
                        await (e = this.item.id,
                        p.Uh.post({
                            url: "/activetask/vitality/revBox",
                            data: {
                                boxId: e
                            },
                            customParams: {
                                silentOnError: !0
                            },
                            headers: {
                                deviceModel: (0,
                                b.h)().deviceModel,
                                devicetype: (0,
                                b.h)().deviceType
                            }
                        }).then((e => e.data.data)));
                        const {t: t} = (0,
                        w.QT)();
                        C.Z.message({
                            type: "success",
                            content: t("lobby.modal.task.receiveSussessTip")
                        }),
                        this.$nextTick(( () => {
                            (0,
                            v.P)().freshChestInfo(),
                            (0,
                            k.h)().updatePrize(),
                            (0,
                            k.h)().audioReceivePlay()
                        }
                        ))
                    } catch (t) {
                        const e = t.data?.msg;
                        e && ((0,
                        y.d3)(t) || ((0,
                        _.r)({
                            content: e
                        }),
                        this.$nextTick(( () => {
                            (0,
                            v.P)().freshChestInfo(),
                            (0,
                            k.h)().updatePrize()
                        }
                        ))))
                    } finally {
                        this.setState({
                            pending: !1
                        })
                    }
                    var e
                }
            }
            get tips() {
                const {t: e} = (0,
                w.QT)()
                  , {awardMinGold: t, awardMaxGold: i, status: s, audit: o, gold: n} = this.item
                  , r = e => (0,
                Ce._5)(e).replace(" ", "")
                  , a = s === Rs.YM.alreadyReceived
                  , l = t === i ? `<span>${r(t)}</span>` : `<span>${r(t)}</span>-<span>${r(i)}</span>`;
                return a ? e("lobby.modal.task.activityBoxReceiveTip", {
                    x: o,
                    reward: `<span>${r(n)}</span>`
                }) : e("lobby.modal.task.activityBoxTip", {
                    x: o,
                    reward: l
                })
            }
            render() {
                const e = arguments[0]
                  , {status: t, activity: i} = this.item
                  , s = t === Rs.YM.canReceive;
                return e("li", {
                    class: js
                }, [e(we.J2.Tsx, {
                    attrs: {
                        arrowPointAtCenter: !0,
                        overlayClassName: Qs,
                        placement: this.isLast ? "topRight" : "top",
                        destroyTooltipOnHide: !0,
                        trigger: "click"
                    }
                }, [e("template", {
                    slot: "content"
                }, [e("inner-html", {
                    class: {
                        [Vs]: !0
                    },
                    attrs: {
                        text: this.tips
                    }
                })]), e("div", {
                    class: {
                        [$s]: !0,
                        [Ws]: s
                    },
                    on: {
                        click: this.handleCollectOneChest
                    }
                }, [e("my-img", {
                    attrs: {
                        src: qs(this.item),
                        alt: "",
                        width: 54,
                        height: 45
                    }
                }), s && e("my-img", {
                    attrs: {
                        src: this.item.icon2,
                        options: {
                            immediate: !0
                        },
                        alt: "",
                        width: 54,
                        height: 45
                    },
                    style: {
                        display: "none"
                    }
                }), s && e("span", {
                    class: Hs
                })])]), e("div", {
                    class: {
                        [Xs]: !0,
                        [Gs]: t === Rs.YM.canNotReceive
                    }
                }, [i])])
            }
        }
        ,
        (0,
        m.Z)(Us, "List", Ms),
        Es = Us,
        Os = (0,
        s.Z)(Es.prototype, "item", [Bs], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ys = (0,
        s.Z)(Es.prototype, "isLast", [Fs], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ns = Es)) || Ns);
        var Js, eo = "zJyGAhu3gH8PtAVgVfxQ", to = "ghlVWHDoifT3NmHS42Zj";
        let io = (0,
        o.wA)({
            name: "CurrentPointer"
        })(Js = class extends o.XY {
            render() {
                const e = arguments[0]
                  , {taskChestConfig: t} = (0,
                v.P)();
                return e("div", {
                    class: eo
                }, [e("div", {
                    class: to
                }, [e("icon-sprite", {
                    attrs: {
                        sprite: (0,
                        Te.T9)("comm_icon_shy")
                    }
                }), e("auto-text", {
                    attrs: {
                        maxSize: 26,
                        width: 118,
                        mode: "inline",
                        text: String(t.userActivity)
                    }
                })])])
            }
        }
        ) || Js;
        var so, oo = "bOm0uhQJUtAHkNJ3z2nO", no = "Gs8xkou1ETt3EDaCjQEV", ro = "t0DQxGi7JeignrHW0nSQ";
        let ao = (0,
        o.wA)({
            name: "ProcessLine"
        })(so = class extends o.XY {
            get progressConfig() {
                return ( () => {
                    const {taskChestConfig: e, activityChestList: t} = (0,
                    v.P)()
                      , i = ( () => {
                        const e = t.findIndex((e => e.status === Rs.YM.canNotReceive));
                        return -1 === e ? t.length : e
                    }
                    )();
                    return {
                        currentProgress: i,
                        totalProgress: t.length || 1,
                        currentWidth: (i => {
                            const {userActivity: s} = e
                              , o = t[i]?.activity || 0
                              , n = t[i - 1]?.activity || 0
                              , r = 0 === o ? 0 : (s - n) / (o - n);
                            return r > 1.05 ? 1.05 : r > 0 ? r < .03 ? .03 : r : 0
                        }
                        )(i)
                    }
                }
                )()
            }
            render() {
                const e = arguments[0]
                  , {currentProgress: t, totalProgress: i, currentWidth: s} = this.progressConfig;
                return e("fragment", [e("div", {
                    class: oo
                }, [e("div", {
                    class: ro,
                    style: {
                        width: t / i * 100 + "%"
                    }
                })]), e("div", {
                    class: [no, `left${t}`]
                }, [e("div", {
                    class: ro,
                    style: {
                        width: 100 * s + "%"
                    }
                })])])
            }
        }
        ) || so;
        var lo, co = "zPnnkULxwzv69RlgrkJk", mo = "U3vsiswodJ_illwSndqY";
        let uo = (0,
        o.wA)({
            name: "ResetTime"
        })(lo = class extends o.XY {
            mounted() {
                const e = (0,
                v.P)();
                let t;
                const i = async () => {
                    if (e.updateResetTime(e.resetTime - 1),
                    e.resetTime <= 0) {
                        if (1 === e.taskChestConfig.status)
                            return;
                        await e.freshChestInfo()
                    }
                    t = setTimeout(( () => {
                        i()
                    }
                    ), 1e3)
                }
                ;
                i(),
                this.$once("hook:beforeDestroy", ( () => {
                    t && clearTimeout(t)
                }
                ))
            }
            getTimeStr() {
                const {t: e} = (0,
                w.QT)()
                  , {resetTimeMapper: t} = (0,
                v.P)()
                  , {d: i, h: s, m: o, s: n} = t
                  , r = e => e < 10 ? `0${e}` : e
                  , a = {
                    d: i,
                    h: r(s),
                    m: r(o),
                    s: r(n)
                };
                return e(i ? "lobby.modal.task.reactiveTime2" : "lobby.modal.task.reactiveTime1", a)
            }
            render() {
                const e = arguments[0]
                  , {t: t} = (0,
                w.QT)();
                return e("div", {
                    class: co
                }, [e("div", {
                    class: mo
                }, [t("lobby.modal.task.reactiveTime"), " ", e("span", [this.getTimeStr()])])])
            }
        }
        ) || lo;
        var po, ho = "Gkwoq6P7P92366KM9o2Y", go = "OrDAjhIZhJy5lbKTzBLr";
        let bo = (0,
        o.wA)({
            name: "ActivityLevel"
        })(po = class extends o.XY {
            mounted() {
                (0,
                v.P)().freshChestInfo()
            }
            render() {
                const e = arguments[0]
                  , {t: t} = (0,
                w.QT)();
                if (1 === (0,
                v.P)().taskChestConfig.status)
                    return e("template");
                const i = (0,
                v.P)().activityChestList;
                return e("div", {
                    class: [ho, "theme-box-shadow", "theme-box-shadow-h5"]
                }, [e("div", {
                    class: go
                }, [t("lobby.modal.task.activityRate")]), e("div", {
                    ref: "localRef"
                }, [e(ao), e(Ks.List, [i.map(( (t, s) => e(Ks, {
                    attrs: {
                        item: t,
                        isLast: s === i.length - 1
                    },
                    key: s
                })))]), e(io), e(uo)])])
            }
        }
        ) || po;
        var yo, _o, fo, vo, wo = i(29339), ko = i(50008), To = "rSXKkdgat7LQmOC0z14g", Co = "H56E3zappndfUxAssAbo";
        let xo = (yo = (0,
        o.wA)({
            name: "AsideTabs"
        }),
        _o = (0,
        o.RL)("taskStore.curTabApiCode"),
        yo((vo = class extends o.XY {
            get taskStore() {
                return (0,
                T.NV)()
            }
            async freshTaskListByApiCode(e) {
                await (0,
                T.NV)().freshInTabsCategoryDataByCode(e)
            }
            goRecords() {
                ve.Z.Modal.close("taskModal", {
                    trigger: "forward"
                }),
                this.$router.push({
                    name: I.x4.RECORDS
                })
            }
            render() {
                const e = arguments[0]
                  , {t: t} = (0,
                w.QT)()
                  , {isWeb: i} = (0,
                k.h)()
                  , {categoryUsable: s, codeCategoryMapper: o, codeCateReceiveMapper: n, codeCategoryOrder: r} = (0,
                T.NV)();
                let a = r.reduce(( (t, r, a) => {
                    if (s.usableMapper[r]) {
                        const s = o[r];
                        t.push({
                            itemClass: `tab-${s.code}`,
                            key: `tab-${s.code}-${a}`,
                            value: s.code,
                            label: e(ko.Z, {
                                attrs: {
                                    text: s.taskName,
                                    limitHeight: i ? "0.5rem" : "0.65rem",
                                    rowCount: 3
                                }
                            }),
                            badgeCount: n[r].unReceiveCount
                        })
                    }
                    return t
                }
                ), []);
                const l = [{
                    value: "-1",
                    label: e(we.zx.Tsx, {
                        class: Co,
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: this.goRecords
                        }
                    }, [e(ko.Z, {
                        attrs: {
                            text: t("lobby.promote.pickUpRecord"),
                            limitHeight: i ? "0.37rem" : "0.45rem"
                        }
                    })]),
                    isButton: !0
                }];
                return a = [...a, ...l],
                e(wo.CO, {
                    attrs: {
                        id: "my-task-modal-tabs",
                        badgeClass: To,
                        renderList: a,
                        needCacheComponentsList: ["tasks"],
                        persistedActiveName: "curTask",
                        tabsWidth: (0,
                        k.h)().isWeb ? 130 : 150,
                        isScrollY: !0,
                        tabsInModal: !0
                    },
                    model: {
                        value: (0,
                        T.NV)().curTabApiCode,
                        callback: e => {
                            this.$set((0,
                            T.NV)(), "curTabApiCode", e)
                        }
                    }
                })
            }
        }
        ,
        (0,
        s.Z)(vo.prototype, "freshTaskListByApiCode", [_o], Object.getOwnPropertyDescriptor(vo.prototype, "freshTaskListByApiCode"), vo.prototype),
        fo = vo)) || fo);
        var Zo, Io, Ao, So, Ro, zo, Lo, Po, Mo = i(58164), Do = i(95692), Bo = {
            "type-screenful": "IB6JqEZMVuP3wm6PI4MX",
            "empty-occupied": "qbsx5uhkxA74DdsWUfEw",
            "type-partView": "ZWOIimi9seqieAE9AuMw",
            common_bganimation: "Zh0v1BymLDYbzbxIzcQX"
        };
        let Fo;
        !function(e) {
            e.Loading = "loading",
            e.Unstart = "unstart"
        }(Fo || (Fo = {}));
        let No = (Zo = (0,
        o.wA)({
            name: "EmptyOccupied"
        }),
        Io = (0,
        o.fI)(),
        Ao = (0,
        o.fI)(),
        Zo((Po = class extends o.XY {
            constructor(...e) {
                super(...e),
                (0,
                a.Z)(this, "layoutType", zo, this),
                (0,
                a.Z)(this, "occupiedType", Lo, this)
            }
            render() {
                const e = arguments[0]
                  , {t: t} = (0,
                w.QT)();
                return e("div", {
                    class: [Bo["empty-occupied"], Bo[`type-${this.layoutType}`]]
                }, [this.occupiedType === Fo.Loading && e(wo.gE, {
                    attrs: {
                        spinning: !0
                    }
                }), this.occupiedType === Fo.Unstart && e(we.HY.Tsx, {
                    attrs: {
                        description: t("lobby.modal.notOpen"),
                        image: e(Do.x)
                    }
                })])
            }
        }
        ,
        (0,
        m.Z)(Po, "OccupiedType", Fo),
        Ro = Po,
        zo = (0,
        s.Z)(Ro.prototype, "layoutType", [Io], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Lo = (0,
        s.Z)(Ro.prototype, "occupiedType", [Ao], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        So = Ro)) || So);
        var Eo, Oo, Yo = i(94184), Uo = i.n(Yo), jo = "JFGIS3XpjMfFs5dd9rxg", $o = "_1NHzSvxYomCkYjZLyWPg", Wo = "dzMb7KZQGysUmmISSLEi", Ho = "BK2gyA93bxDPor99AJwQ", Xo = "T6e8lCKYn6dTOyvLwU6x", Go = "A3TB2Qe9Zl7CZ0YBDaAF", Qo = "_tAXMeIqi8Ug1Yx1v9QC", Vo = "wkP93lF45F7k0yK5mqO9", qo = "u6pB8XIL7BMBtJwmlpp1", Ko = "r2iPxSA_4gWFYAVyZJNK", Jo = "CBzbqSpFUc2F35LYek7U", en = "zRW8TXgiUUIVjTkqwDMW", tn = "Srr8hYjmSu2oAuYCC6VH", sn = "TYrKj6J7kEvA5dOJyjgP";
        let on = (0,
        o.wA)({
            name: "PageLayout"
        })((Oo = class extends o.XY {
            renderWeb() {
                const e = this.$createElement;
                return e("div", {
                    class: jo
                }, [e("div", {
                    class: $o
                }, [e("div", {
                    class: Wo
                }, [this.$scopedSlots?.asideTab?.()]), e("div", {
                    class: Ho
                }, [e("div", {
                    class: Xo
                }, [this.$scopedSlots?.processChest?.()]), e("div", {
                    class: Go
                }, [this.$scopedSlots?.taskList?.()])])])])
            }
            renderMobile() {
                const e = this.$createElement;
                return e("div", {
                    class: jo
                }, [e("div", {
                    class: [Qo, "top-tabs-bar-occupied"]
                }, [this.$scopedSlots?.h5TopTabsBar?.()]), this.$scopedSlots?.processChest && e("div", {
                    class: Vo
                }, [this.$scopedSlots?.processChest?.()]), e("div", {
                    class: Ko
                }, [e("div", {
                    class: Jo
                }, [e("div", {
                    class: en
                }, [this.$scopedSlots?.asideTab?.()]), e("div", {
                    class: tn
                }, [e("transition", {
                    props: {
                        enterActiveClass: Uo()([p.CM.CssClassName.Animate.Animated, p.CM.CssClassName.Animate.FadeIn]),
                        leaveActiveClass: Uo()([p.CM.CssClassName.Animate.WithoutNormalFlow, p.CM.CssClassName.Animate.Animated, p.CM.CssClassName.Animate.FadeOut])
                    }
                }, [e("div", {
                    key: (0,
                    T.NV)().curTabApiCode,
                    class: sn
                }, [this.$scopedSlots?.taskList?.()])])])])]), e("div", {
                    class: qo
                })])
            }
            render() {
                const {isWeb: e} = (0,
                k.h)()
                  , {renderWeb: t, renderMobile: i} = this;
                return e ? t() : i()
            }
        }
        ,
        (0,
        m.Z)(Oo, "EmptyOccupied", No),
        Eo = Oo)) || Eo;
        var nn, rn, an, ln, cn, mn, dn = "sDtCBcjXl1c8kB7JfrOr", un = "w4cTevpn9UjrDSuH6q41";
        const pn = on.EmptyOccupied.OccupiedType;
        let hn = (nn = (0,
        o.wA)({
            name: "Task"
        }),
        rn = (0,
        o.RL)("language"),
        an = (0,
        o.RL)("userId"),
        ln = (0,
        o.RL)("currency"),
        nn((mn = class extends o.XY {
            get language() {
                return (0,
                k.h)().language
            }
            get userId() {
                return (0,
                k.h)().userInfos?.username
            }
            beforeRouteEnter(e, t, i) {
                const s = (0,
                T.NV)()
                  , {getActiveTaskCompleteList: o} = (0,
                Ss.b)()
                  , {isFetched: n, curTabApiCode: r, freshInTabsCategoryDataByCode: a} = s;
                n && s.categoryUsable.usableMapper[r] && (0,
                k.h)().hasLogined && ((0,
                k.h)().initGetredDot(!0),
                o(!0),
                a(r)),
                i()
            }
            get currency() {
                const {userInfos: e, currentTryCurrency: t} = (0,
                k.h)()
                  , {currency: i} = e || {};
                return String(i || t)
            }
            async mounted() {
                (0,
                fe.C1)("enterTask"),
                this.init(),
                (0,
                As.I)(n.R.TASK, n.R.TASK)
            }
            async init() {
                const e = (0,
                T.NV)()
                  , {isFetched: t} = (0,
                v.P)()
                  , {isFetched: i, fetchedDataLanguage: s, fetchedDataUserId: o, fetchedDataCurrency: n} = e
                  , r = this.language !== s
                  , a = String(this.userId) !== o
                  , l = String(this.currency) !== n;
                if (!i || !t || r || l || a) {
                    const {freshCategoriesUsableAndRules: t} = e;
                    t(!0),
                    (0,
                    v.P)().freshChestInfo(),
                    (0,
                    k.h)().initGetredDot()
                } else {
                    const {curTabApiCode: t, freshInTabsCategoryDataByCode: i} = e;
                    i(t)
                }
            }
            refetchData() {
                const {timeoutErrorMapper: e, freshCategoriesUsableAndRules: t, resetIsTimeoutErrorMapper: i} = (0,
                T.NV)()
                  , {isTimeoutError: s, freshChestInfo: o} = (0,
                v.P)();
                Object.values(e).some((e => e)) && (i(),
                t(!0)),
                s && o(),
                (0,
                k.h)().initGetredDot()
            }
            get category() {
                return (0,
                T.NV)().codeCategoryMapper[(0,
                T.NV)().curTabApiCode]
            }
            get ruleList() {
                const {curTabApiCode: e, codeOrderRulesMapper: t, codeRulesMapper: i} = (0,
                T.NV)();
                return e === r.t.smrw ? i[e] : e === r.t.xrfl && ((0,
                Is.VK)() || _e.cY.package.isApp) ? t[e].filter((e => 20 !== e.ruleid)) : t[e]
            }
            get showRewardList() {
                const {curTabApiCode: e, codeCategoryOrder: t} = (0,
                T.NV)();
                return t.includes(e)
            }
            get isPageLoaded() {
                const {isFetched: e} = (0,
                T.NV)()
                  , {isFetched: t} = (0,
                v.P)();
                return !!e && !!t
            }
            get isTaskUsable() {
                let e = !1;
                const t = (0,
                T.NV)().categoryUsable.usableMapper;
                for (const i in t)
                    t[i] && (e = !0);
                return e
            }
            get occupiedType() {
                let e = pn.Loading;
                return this.isPageLoaded && !this.isTaskUsable && (e = pn.Unstart),
                e
            }
            render() {
                const e = arguments[0]
                  , {isLoading: t, timeoutErrorMapper: i} = (0,
                T.NV)()
                  , {isLoading: s, isTimeoutError: o} = (0,
                v.P)()
                  , n = Object.values(i).some((e => e));
                return this.isPageLoaded && this.isTaskUsable ? e(on, [e("template", {
                    slot: "asideTab"
                }, [e(xo)]), e("template", {
                    slot: "processChest"
                }, [e(Mo.Z, {
                    attrs: {
                        displayType: Mo.F.SufficientSpace,
                        isTimeoutError: o,
                        loading: s
                    },
                    on: {
                        retry: this.refetchData
                    },
                    class: {
                        [dn]: o
                    }
                }, [e(bo)])]), e("template", {
                    slot: "taskList"
                }, [e(Mo.Z, {
                    attrs: {
                        displayType: Mo.F.ListData,
                        isTimeoutError: n,
                        loading: t
                    },
                    on: {
                        retry: this.refetchData
                    },
                    class: un
                }, [this.showRewardList && this.ruleList.length > 0 ? e(Zs, {
                    attrs: {
                        situateModalName: "taskModal",
                        isCompactList: this.category.code === r.t.smrw,
                        ruleList: this.ruleList,
                        category: this.category,
                        isShowIntro: !0,
                        isShowFootBar: !1,
                        heightType: "full"
                    },
                    key: r.t.smrw
                }) : e(on.EmptyOccupied, {
                    attrs: {
                        layoutType: "partView",
                        occupiedType: this.occupiedType
                    }
                })])])]) : e(on, [e("template", {
                    slot: "taskList"
                }, [e(on.EmptyOccupied, {
                    attrs: {
                        layoutType: "screenful",
                        occupiedType: this.occupiedType
                    }
                })])])
            }
        }
        ,
        (0,
        s.Z)(mn.prototype, "init", [rn, an, ln], Object.getOwnPropertyDescriptor(mn.prototype, "init"), mn.prototype),
        cn = mn)) || cn)
    },
    55882: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return C
            }
        });
        var s, o, n, r, a, l, c, m, d, u = i(53158), p = i(12040), h = i(38821), g = i(7174), b = i(84012), y = i(58217), _ = "uUBQrW7HgfjKu_TfuitX", f = "R0easibGTVD9aD1hO065", v = "fMbnzahB7TDLu8dpUB6e", w = "nf3ac5sFbRFX4sKR44yQ", k = "E5EZWno9Hu0vwBFJV1Tf";
        let T;
        !function(e) {
            e[e.PendingReceive = 0] = "PendingReceive",
            e[e.Finish = 1] = "Finish",
            e[e.Expired = 2] = "Expired",
            e[e.Goto = 3] = "Goto",
            e[e.HasSend = 4] = "HasSend",
            e[e.ServerCancel = 5] = "ServerCancel",
            e[e.PendingApprove = 6] = "PendingApprove",
            e[e.PendingApply = 7] = "PendingApply",
            e[e.ServerReject = 8] = "ServerReject",
            e[e.Processing = 11] = "Processing",
            e[e.UnOpen = 99] = "UnOpen",
            e[e.ReceiveAll = 1e3] = "ReceiveAll",
            e[e.Discount = 1001] = "Discount",
            e[e.WaitingGet = 1002] = "WaitingGet",
            e[e.GrayPendingReceive = 1003] = "GrayPendingReceive"
        }(T || (T = {}));
        let C = (s = (0,
        h.wA)({
            name: "MyButton"
        }),
        o = (0,
        h.fI)(),
        n = (0,
        h.fI)(),
        r = (0,
        h.fI)(),
        s((l = class extends h.XY {
            constructor(...e) {
                super(...e),
                (0,
                u.Z)(this, "isLoading", c, this),
                (0,
                u.Z)(this, "btnKey", m, this),
                (0,
                u.Z)(this, "disable", d, this)
            }
            get isDisabled() {
                return "boolean" == typeof this.disable ? this.disable : ![T.Goto, T.PendingReceive, T.PendingApprove, T.ReceiveAll, T.Discount, T.Processing].includes(this.btnKey)
            }
            render() {
                const e = arguments[0]
                  , {btnKey: t, isDisabled: i} = this;
                return e(g.zx.Tsx, {
                    class: [[_], Z(t)],
                    on: {
                        click: e => {
                            this.isDisabled ? e.stopPropagation() : this.$emit("click")
                        }
                    },
                    attrs: {
                        loading: this.isLoading,
                        disabled: i
                    }
                }, [this.$scopedSlots.default?.(x(t)) || x(t)])
            }
        }
        ,
        c = (0,
        p.Z)(l.prototype, "isLoading", [o], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        m = (0,
        p.Z)(l.prototype, "btnKey", [n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        d = (0,
        p.Z)(l.prototype, "disable", [r], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        a = l)) || a)
          , x = e => {
            const t = (0,
            y.QT)().t
              , i = {
                [T.Discount]: () => t("lobby.tabbar.discount"),
                [T.PendingReceive]: () => t("lobby.modal.task.collect"),
                [T.HasSend]: () => t("lobby.modal.task.distributed"),
                [T.Processing]: () => t("lobby.modal.task.processing"),
                [T.Goto]: () => t("lobby.modal.task.forward"),
                [T.UnOpen]: () => t("lobby.modal.task.invalid"),
                [T.Expired]: () => t("lobby.modal.task.expired"),
                [T.ServerCancel]: () => t("lobby.modal.task.cancel"),
                [T.Finish]: () => t("lobby.modal.task.collected"),
                [T.PendingApprove]: () => t("lobby.modal.task.collect"),
                [T.PendingApply]: () => t(""),
                [T.ServerReject]: () => t("lobby.records.rejected"),
                [T.ReceiveAll]: () => t("lobby.modal.task.collectAll"),
                [T.WaitingGet]: () => t("lobby.game.nav.waitingCollect"),
                [T.GrayPendingReceive]: () => t("lobby.modal.task.collect")
            };
            return x = e => i[e](),
            x(e)
        }
          , Z = e => {
            const t = {
                [T.Discount]: f,
                [T.PendingReceive]: f,
                [T.Processing]: v,
                [T.Goto]: w,
                [T.HasSend]: k,
                [T.UnOpen]: k,
                [T.Expired]: k,
                [T.ServerCancel]: k,
                [T.Finish]: k,
                [T.PendingApprove]: f,
                [T.PendingApply]: k,
                [T.ServerReject]: k,
                [T.ReceiveAll]: f,
                [T.WaitingGet]: w,
                [T.GrayPendingReceive]: k
            };
            return Z = e => t[e],
            Z(e)
        }
        ;
        C.getBtnKeyByRuleStatus = e => {
            const t = {
                [b.Fx.ServerCancel]: T.ServerCancel,
                [b.Fx.Expired]: T.Expired,
                [b.Fx.Finish]: T.Finish,
                [b.Fx.Goto]: T.Goto,
                [b.Fx.HasSend]: T.HasSend,
                [b.Fx.PendingReceive]: T.PendingReceive,
                [b.Fx.UnOpen]: T.UnOpen,
                [b.Fx.PendingApprove]: T.PendingApprove,
                [b.Fx.PendingApply]: T.PendingApply,
                [b.Fx.ServerReject]: T.ServerReject,
                [b.Fx.Processing]: T.Processing
            };
            return C.getBtnKeyByRuleStatus = e => t[e],
            C.getBtnKeyByRuleStatus(e)
        }
    },
    82539: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return L
            }
        });
        var s, o, n, r, a, l, c, m, d, u, p, h, g, b, y, _, f = i(82492), v = i.n(f), w = i(53158), k = i(55433), T = i(12040), C = i(38821), x = i(29579), Z = i(40215), I = i(58217), A = i(34710), S = i(30381), R = i.n(S), z = {
            "type-default": "QgzjpNMqN50PjfvLFh5z",
            "receive-downtime": "Uuhb0COnqhSqjCV71Eol",
            "type-srrw": "lNZsKHVHNlUdO4No4Y1A",
            common_bganimation: "STCTRXAxMrFNEP8143TJ"
        };
        let L = (s = (0,
        C.wA)({
            name: "ReceiveDowntime"
        }),
        o = (0,
        C.fI)({
            default: "default"
        }),
        n = (0,
        C.fI)(),
        r = (0,
        C.fI)(),
        a = (0,
        C.fI)(),
        l = (0,
        C.fI)({
            default: 1
        }),
        c = (0,
        C.fI)(),
        m = (0,
        C.RL)("donwTimestamp", {
            immediate: !0
        }),
        s((u = class extends C.XY {
            constructor(...e) {
                super(...e),
                (0,
                w.Z)(this, "type", p, this),
                (0,
                w.Z)(this, "donwTimestamp", h, this),
                (0,
                w.Z)(this, "dayType", g, this),
                (0,
                w.Z)(this, "dayWeekMonth", b, this),
                (0,
                w.Z)(this, "textType", y, this),
                (0,
                w.Z)(this, "colorConfig", _, this),
                (0,
                k.Z)(this, "state", {
                    donwTimeProcessing: !1
                })
            }
            updateProcessingByDonwTimestamp(e) {
                this.state.donwTimeProcessing = e > 0 || e < 0
            }
            formatFunc(e) {
                const {t: t} = (0,
                I.QT)()
                  , i = R().duration(1e3 * e)
                  , s = e => e < 10 ? `0${e}` : e
                  , o = {
                    d: i.days(),
                    h: s(i.hours()),
                    m: s(i.minutes()),
                    s: s(i.seconds())
                };
                return t(o.d ? "lobby.modal.task.reactiveTime2" : "lobby.modal.task.reactiveTime1", o)
            }
            get mainExhibition() {
                if (this.state.donwTimeProcessing) {
                    if (this.donwTimestamp > 0)
                        return this.getReceiveDownTime(this.donwTimestamp);
                    if (this.donwTimestamp < 0)
                        return this.getExpiryDownTime(Math.abs(this.donwTimestamp))
                }
            }
            get exhibitionColor() {
                const {expiry: e, waiting: t} = v()({
                    expiry: "var(--theme-secondary-color-error)",
                    waiting: "var(--theme-secondary-color-finance)"
                }, this.colorConfig);
                return this.donwTimestamp > 0 ? t : this.donwTimestamp < 0 ? e : void 0
            }
            getReceiveDownTime(e) {
                const t = this.$createElement
                  , {t: i} = (0,
                I.QT)()
                  , s = {
                    1: i("lobby.reward.vip.rewardMap.rewardTips0"),
                    2: i("lobby.reward.vip.rewardMap.rewardTimeTips")
                }[this.textType];
                return (0,
                Z.p)(s, "{x}", t(A.Z, {
                    on: {
                        over: () => {
                            this.state.donwTimeProcessing = !1,
                            this.$emit("waitingFinish")
                        }
                    },
                    attrs: {
                        formatFunc: this.formatFunc,
                        hasTextBorder: !1,
                        duration: e
                    }
                }))
            }
            getExpiryDownTime(e) {
                const t = this.$createElement
                  , {t: i} = (0,
                I.QT)()
                  , s = Math.abs(e)
                  , o = {
                    1: i("lobby.modal.task.timeNotArrived.expiryTime"),
                    2: "{x}"
                }[this.textType];
                return (0,
                Z.p)(o, "{x}", t(A.Z, {
                    on: {
                        over: () => {
                            this.state.donwTimeProcessing = !1,
                            this.$emit("expiryFinish")
                        }
                    },
                    attrs: {
                        formatFunc: this.formatFunc,
                        hasTextBorder: !1,
                        duration: s
                    }
                }))
            }
            render() {
                const e = arguments[0]
                  , {type: t} = this;
                return e("div", {
                    class: {
                        [z["receive-downtime"]]: !0,
                        [z[`type-${t}`]]: !0,
                        "receive-downtime": !0
                    },
                    style: {
                        color: this.exhibitionColor
                    }
                }, [this.mainExhibition])
            }
        }
        ,
        p = (0,
        T.Z)(u.prototype, "type", [o], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        h = (0,
        T.Z)(u.prototype, "donwTimestamp", [n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        g = (0,
        T.Z)(u.prototype, "dayType", [r], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        b = (0,
        T.Z)(u.prototype, "dayWeekMonth", [a], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        y = (0,
        T.Z)(u.prototype, "textType", [l], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        _ = (0,
        T.Z)(u.prototype, "colorConfig", [c], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        (0,
        T.Z)(u.prototype, "updateProcessingByDonwTimestamp", [m], Object.getOwnPropertyDescriptor(u.prototype, "updateProcessingByDonwTimestamp"), u.prototype),
        d = u)) || d);
        L.getDayTypeByReceiveTimeType = e => {
            const {MonthWhole: t, MonthOne: i, WeekOne: s, WeekWhole: o} = x.d
              , n = {
                [t]: "month",
                [o]: "week",
                [i]: "monthDay",
                [s]: "weekDay"
            };
            return L.getDayTypeByReceiveTimeType = e => n[e],
            L.getDayTypeByReceiveTimeType(e)
        }
    },
    54330: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return Se
            }
        });
        var s, o, n, r, a, l, c, m, d, u, p, h, g, b, y, _, f, v = i(36568), w = i.n(v), k = i(82492), T = i.n(k), C = i(53158), x = i(12040), Z = i(55433), I = i(38821), A = i(84012), S = "z3ciXQSqhDmLhSgBFwgb", R = "pKOQwZNPQVG7yTgTT3lG", z = "hT9dN5n4BniZcg8y0fsn", L = "XHugxiNZIQENKxZXhxcF";
        let P = (s = (0,
        I.wA)({
            name: "ItemCore"
        }),
        o = (0,
        I.r8)(),
        n = (0,
        I.r8)(),
        r = (0,
        I.r8)(),
        a = (0,
        I.fI)(),
        l = (0,
        I.fI)({
            default: !0
        }),
        c = (0,
        I.fI)({
            default: !0
        }),
        m = (0,
        I.fI)({
            default: !0
        }),
        s((u = class extends I.XY {
            constructor(...e) {
                super(...e),
                (0,
                C.Z)(this, "iconColor", p, this),
                (0,
                C.Z)(this, "iconSrc", h, this),
                (0,
                C.Z)(this, "prefixText", g, this),
                (0,
                C.Z)(this, "text", b, this),
                (0,
                C.Z)(this, "isShowIcon", y, this),
                (0,
                C.Z)(this, "isShrinkIcon", _, this),
                (0,
                C.Z)(this, "isShowName", f, this)
            }
            render() {
                const e = arguments[0];
                return e("div", {
                    class: {
                        [S]: !0,
                        [this.iconColor]: !0
                    }
                }, [this.isShowName && e("span", {
                    class: R
                }, [this.prefixText]), this.isShowIcon && e("icon-sprite", {
                    class: [z, "icon-text"],
                    attrs: {
                        sprite: this.iconSrc
                    }
                }), e("span", {
                    class: L
                }, [this.text])])
            }
        }
        ,
        p = (0,
        x.Z)(u.prototype, "iconColor", [o], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        h = (0,
        x.Z)(u.prototype, "iconSrc", [n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        g = (0,
        x.Z)(u.prototype, "prefixText", [r], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        b = (0,
        x.Z)(u.prototype, "text", [a], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        y = (0,
        x.Z)(u.prototype, "isShowIcon", [l], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        _ = (0,
        x.Z)(u.prototype, "isShrinkIcon", [c], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        f = (0,
        x.Z)(u.prototype, "isShowName", [m], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        d = u)) || d);
        var M = i(46851)
          , D = i(71743)
          , B = i(58217)
          , F = i(72698)
          , N = i(91475);
        var E, O, Y, U, j, $, W, H, X, G;
        let Q = (E = (0,
        I.wA)({
            name: "VisualConfig"
        }),
        O = (0,
        I.fI)(),
        Y = (0,
        I.fI)(),
        U = (0,
        I.F1)(),
        j = (0,
        I.F1)(),
        $ = (0,
        I.F1)(),
        E((H = class extends I.XY {
            constructor(...e) {
                super(...e),
                (0,
                C.Z)(this, "type", X, this),
                (0,
                C.Z)(this, "isActive", G, this)
            }
            get iconColor() {
                const {Yellow: e, Green: t, TextLighten: i} = M.CM.CssClassName.Lobby.Color;
                return this.isActive ? "amount" === this.type ? e : t : i
            }
            get iconSrc() {
                return "amount" === this.type ? ( () => {
                    const {userInfos: e} = (0,
                    N.h)();
                    return F.F.commonIconMap()[e?.currency || "CNY"]?.PAY_JB
                }
                )() : (0,
                D.T9)("comm_icon_shy")
            }
            get prefixText() {
                const {t: e} = (0,
                B.QT)();
                return "amount" === this.type ? e("lobby.modal.task.amount") : e("lobby.modal.task.activity")
            }
            render() {
                return this.$slots.default
            }
        }
        ,
        X = (0,
        x.Z)(H.prototype, "type", [O], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        G = (0,
        x.Z)(H.prototype, "isActive", [Y], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        (0,
        x.Z)(H.prototype, "iconColor", [U], Object.getOwnPropertyDescriptor(H.prototype, "iconColor"), H.prototype),
        (0,
        x.Z)(H.prototype, "iconSrc", [j], Object.getOwnPropertyDescriptor(H.prototype, "iconSrc"), H.prototype),
        (0,
        x.Z)(H.prototype, "prefixText", [$], Object.getOwnPropertyDescriptor(H.prototype, "prefixText"), H.prototype),
        W = H)) || W);
        var V, q, K, J, ee, te, ie, se, oe, ne, re, ae, le, ce, me, de = "go9mvZyFKFOmVNHdDhok";
        let ue = (V = (0,
        I.wA)({
            name: "OneItem"
        }),
        q = (0,
        I.fI)(),
        K = (0,
        I.fI)(),
        J = (0,
        I.fI)(),
        ee = (0,
        I.fI)({
            default: !0
        }),
        te = (0,
        I.fI)({
            default: !0
        }),
        ie = (0,
        I.fI)(),
        V((oe = class extends I.XY {
            constructor(...e) {
                super(...e),
                (0,
                C.Z)(this, "type", ne, this),
                (0,
                C.Z)(this, "text", re, this),
                (0,
                C.Z)(this, "isActive", ae, this),
                (0,
                C.Z)(this, "isShowIcon", le, this),
                (0,
                C.Z)(this, "isShowName", ce, this),
                (0,
                C.Z)(this, "shrinkType", me, this)
            }
            render() {
                const e = arguments[0];
                return e("div", {
                    class: {
                        [de]: !0,
                        "one-item": !0
                    }
                }, [e(Q, w()([{}, {
                    props: this.$props
                }]), [e(P, w()([{}, {
                    props: {
                        ...this.$props,
                        isShrinkIcon: "all" === this.shrinkType
                    }
                }]))])])
            }
        }
        ,
        ne = (0,
        x.Z)(oe.prototype, "type", [q], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        re = (0,
        x.Z)(oe.prototype, "text", [K], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ae = (0,
        x.Z)(oe.prototype, "isActive", [J], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        le = (0,
        x.Z)(oe.prototype, "isShowIcon", [ee], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ce = (0,
        x.Z)(oe.prototype, "isShowName", [te], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        me = (0,
        x.Z)(oe.prototype, "shrinkType", [ie], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        se = oe)) || se);
        var pe, he, ge, be, ye, _e, fe, ve, we, ke, Te, Ce, xe, Ze, Ie = "_55GpAa0fVgl3kDbCQtKC";
        class Ae {
            constructor() {
                (0,
                Z.Z)(this, "amountShow", !0),
                (0,
                Z.Z)(this, "amountIcon", !0),
                (0,
                Z.Z)(this, "amountName", !0),
                (0,
                Z.Z)(this, "activityShow", !0),
                (0,
                Z.Z)(this, "activityIcon", !0),
                (0,
                Z.Z)(this, "activityName", !0)
            }
        }
        let Se = (pe = (0,
        I.wA)({
            name: "AmountAndActivity"
        }),
        he = (0,
        I.fI)(),
        ge = (0,
        I.fI)(),
        be = (0,
        I.fI)(),
        ye = (0,
        I.fI)({
            default: "all"
        }),
        _e = (0,
        I.fI)({
            default: () => new Ae
        }),
        pe((Ze = class extends I.XY {
            constructor(...e) {
                super(...e),
                (0,
                C.Z)(this, "amount", we, this),
                (0,
                C.Z)(this, "activity", ke, this),
                (0,
                C.Z)(this, "isActive", Te, this),
                (0,
                C.Z)(this, "shrinkType", Ce, this),
                (0,
                C.Z)(this, "showConfig", xe, this)
            }
            get localShowConfig() {
                return T()(new Ae, this.showConfig)
            }
            render() {
                const e = arguments[0]
                  , {amount: t, activity: i, isActive: s, shrinkType: o} = this
                  , n = {
                    isActive: s,
                    shrinkType: o
                }
                  , {activityShow: r, amountShow: a, activityIcon: l, activityName: c, amountIcon: m, amountName: d} = this.localShowConfig;
                return r || a ? e("div", {
                    class: Ie
                }, [a && e(ue, w()([{
                    attrs: {
                        type: "amount",
                        text: t
                    }
                }, {
                    props: n
                }, {
                    attrs: {
                        isShowIcon: m,
                        isShowName: d
                    }
                }])), r && e(ue, w()([{
                    attrs: {
                        type: "activity",
                        text: i
                    }
                }, {
                    props: n
                }, {
                    attrs: {
                        isShowIcon: l,
                        isShowName: c
                    }
                }]))]) : e("template")
            }
        }
        ,
        (0,
        Z.Z)(Ze, "OneItem", ue),
        ve = Ze,
        we = (0,
        x.Z)(ve.prototype, "amount", [he], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        ke = (0,
        x.Z)(ve.prototype, "activity", [ge], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Te = (0,
        x.Z)(ve.prototype, "isActive", [be], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        Ce = (0,
        x.Z)(ve.prototype, "shrinkType", [ye], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        xe = (0,
        x.Z)(ve.prototype, "showConfig", [_e], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        fe = ve)) || fe);
        Se.getIsActiveByStatus = e => ![A.Fx.ServerReject, A.Fx.ServerCancel, A.Fx.Finish, A.Fx.Expired, A.Fx.UnOpen, A.Fx.HasSend].includes(e)
    },
    70157: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return k
            }
        });
        var s, o, n, r, a, l, c, m, d, u, p, h, g, b, y, _ = i(53158), f = i(12040), v = i(38821), w = {
            "type-default": "CODNmUAgiXS7UGqf7KWE",
            "instruction-info": "y1nVfyxOsBCVmpgRkc95",
            "instruction-icon": "MQgW5iFFDzqgoZ9k8cf0",
            "instruction-base-info": "vmdeHXAn59kRFevL2dO4",
            description: "FFskxW5S60cXMhgAZChw",
            "description-primary": "BihbP2uNLyq7qp2ulNDY",
            "bottom-slot": "Lu3UjWjEBndmygI1oBTe",
            "is-shallow-text": "upXyXFruMuPofOWz62_B",
            "type-srrw": "jNofqswJtksjJOLNahea",
            common_bganimation: "GXvUxoaeILkW_Oymctgs"
        };
        let k = (s = (0,
        v.wA)({
            name: "InstructionInfoTask"
        }),
        o = (0,
        v.fI)({
            default: "default"
        }),
        n = (0,
        v.fI)(),
        r = (0,
        v.fI)(),
        a = (0,
        v.fI)(),
        l = (0,
        v.fI)(),
        c = (0,
        v.fI)(),
        s((d = class extends v.XY {
            constructor(...e) {
                super(...e),
                (0,
                _.Z)(this, "type", u, this),
                (0,
                _.Z)(this, "iconSrc", p, this),
                (0,
                _.Z)(this, "description", h, this),
                (0,
                _.Z)(this, "additional", g, this),
                (0,
                _.Z)(this, "bottomSlot", b, this),
                (0,
                _.Z)(this, "isShallowText", y, this)
            }
            render() {
                const e = arguments[0]
                  , {type: t, isShallowText: i} = this;
                return e("div", {
                    class: {
                        [w["instruction-info"]]: !0,
                        [w[`type-${t}`]]: !0,
                        [w["is-shallow-text"]]: i
                    }
                }, [e("div", {
                    class: {
                        [w["instruction-base-info"]]: !0,
                        "instruction-base-info": !0
                    }
                }, [this.iconSrc && e("div", {
                    class: w["instruction-icon"]
                }, [e("my-img", {
                    attrs: {
                        src: this.iconSrc,
                        alt: "",
                        width: 60,
                        height: 60
                    }
                })]), e("div", {
                    class: w.description
                }, [e("div", {
                    class: w["description-primary"]
                }, [this.description]), this.additional])]), this.bottomSlot && e("div", {
                    class: w["bottom-slot"]
                }, [this.bottomSlot])])
            }
        }
        ,
        u = (0,
        f.Z)(d.prototype, "type", [o], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        p = (0,
        f.Z)(d.prototype, "iconSrc", [n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        h = (0,
        f.Z)(d.prototype, "description", [r], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        g = (0,
        f.Z)(d.prototype, "additional", [a], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        b = (0,
        f.Z)(d.prototype, "bottomSlot", [l], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        y = (0,
        f.Z)(d.prototype, "isShallowText", [c], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        m = d)) || m)
    },
    26610: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return x
            }
        });
        var s, o, n, r, a, l, c, m, d = i(53158), u = i(55433), p = i(12040), h = i(38821), g = i(84012), b = i(72230), y = i(18913), _ = i(58217), f = i(91475), v = "fiafCLNkR0Fvr0Wjqibz", w = "YsujpCDKY18_TWbfwLil", k = "QrBiSU2R57YtsIWr5Xnd", T = "OUjV0esGzNS0A2XJXd1T", C = "cIeew6Lwm5O2KqsHyA0d";
        let x = (s = (0,
        h.wA)({
            name: "MoreLimit"
        }),
        o = (0,
        h.fI)(),
        n = (0,
        h.fI)(),
        r = (0,
        h.RL)("rootFontSize"),
        s((l = class extends h.XY {
            constructor(...e) {
                super(...e),
                (0,
                d.Z)(this, "limitContent", c, this),
                (0,
                d.Z)(this, "limitTitle", m, this),
                (0,
                u.Z)(this, "state", {
                    isEllipsis: !1
                })
            }
            mounted() {
                setTimeout(( () => {
                    this.judgeIsEllipsis()
                }
                ), 0)
            }
            get rootFontSize() {
                return (0,
                f.h)().rootFontSize
            }
            judgeIsEllipsis() {
                const e = this.$refs.textRef
                  , t = this.$refs.textInnerRef;
                if (!e || !t)
                    return;
                const i = e.clientWidth + 3 < t.scrollWidth
                  , s = e.clientHeight + 5 < t.scrollHeight;
                this.state.isEllipsis = !(!i && !s)
            }
            get localText() {
                return this.limitContent ? `${this.limitTitle} : ${this.limitContent}` : ""
            }
            render() {
                const e = arguments[0];
                if (!this.localText)
                    return e("template");
                const {isEllipsis: t} = this.state
                  , {t: i} = (0,
                _.QT)();
                return e("div", {
                    class: v
                }, [e("p", {
                    ref: "textRef",
                    class: w
                }, [e("span", {
                    ref: "textInnerRef",
                    class: k
                }, [this.localText])]), e("p", {
                    class: {
                        [T]: !0,
                        [C]: !t
                    },
                    on: {
                        click: () => (0,
                        y.r)({
                            title: this.limitTitle,
                            content: this.limitContent
                        })
                    }
                }, [i("lobby.system.more")])])
            }
        }
        ,
        c = (0,
        p.Z)(l.prototype, "limitContent", [o], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        m = (0,
        p.Z)(l.prototype, "limitTitle", [n], {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            initializer: null
        }),
        (0,
        p.Z)(l.prototype, "judgeIsEllipsis", [r], Object.getOwnPropertyDescriptor(l.prototype, "judgeIsEllipsis"), l.prototype),
        a = l)) || a);
        x.getNameExtLimititle = e => {
            const {t: t} = (0,
            _.QT)()
              , i = {
                [g.Pt.Nothing]: () => t("lobby.common.tips.title"),
                [g.Pt.Recharge]: () => t("lobby.modal.task.onlyRecharge"),
                [g.Pt.BettingTotal]: () => t("lobby.modal.task.onlyGame"),
                [g.Pt.ProfitTotal]: () => t("lobby.modal.task.onlyGame"),
                [g.Pt.ProfitOne]: () => t("lobby.modal.task.onlyGame"),
                [g.Pt.LossOne]: () => t("lobby.modal.task.onlyGame"),
                [g.Pt.LossTotal]: () => t("lobby.modal.task.onlyGame"),
                [g.Pt.BettingOne]: () => t("lobby.modal.task.onlyGame")
            }
              , s = new Map;
            return s.set(`${b.t.xrfl}_27`, ( () => t("lobby.modal.task.contact"))),
            x.getNameExtLimititle = e => {
                const {apiCode: o, ruleid: n} = e
                  , r = `${o}_${n}`;
                return s.get(r) ? s.get(r) : i[e.icon] ? i[e.icon] : () => t("lobby.common.tips.title")
            }
            ,
            x.getNameExtLimititle(e)
        }
    }
}]);
