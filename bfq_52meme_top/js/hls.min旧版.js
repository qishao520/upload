"undefined" != typeof window &&
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Hls = t() : e.Hls = t()
} (this,
function() {
    return function(e) {
        var t = {};
        function r(i) {
            if (t[i]) return t[i].exports;
            var a = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(a.exports, a, a.exports, r),
            a.l = !0,
            a.exports
        }
        return r.m = e,
        r.c = t,
        r.d = function(e, t, i) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: i
            })
        },
        r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        r.t = function(e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var a in e) r.d(i, a,
            function(t) {
                return e[t]
            }.bind(null, a));
            return i
        },
        r.n = function(e) {
            var t = e && e.__esModule ?
            function() {
                return e.
            default
            }:
            function() {
                return e
            };
            return r.d(t, "a", t),
            t
        },
        r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        r.p = "/dist/",
        r(r.s = 31)
    } ([function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(6);
        function a() {}
        var n = {
            trace: a,
            debug: a,
            log: a,
            warn: a,
            info: a,
            error: a
        },
        o = n;
        var s = i.getSelfScope();
        function l(e) {
            for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            t.forEach(function(t) {
                o[t] = e[t] ? e[t].bind(e) : function(e) {
                    var t = s.console[e];
                    return t ?
                    function() {
                        for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                        r[0] && (r[0] = function(e, t) {
                            return t = "[" + e + "] > " + t
                        } (e, r[0])),
                        t.apply(s.console, r)
                    }: a
                } (t)
            })
        }
        t.enableLogs = function(e) {
            if (!0 === e || "object" == typeof e) {
                l(e, "debug", "log", "info", "warn", "error");
                try {
                    o.log()
                } catch(e) {
                    o = n
                }
            } else o = n
        },
        t.logger = o
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.
    default = {
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
            STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
        }
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(6).getSelfScope().Number;
        t.Number = i,
        i.isFinite = i.isFinite ||
        function(e) {
            return "number" == typeof e && isFinite(e)
        }
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.ErrorTypes = {
            NETWORK_ERROR: "networkError",
            MEDIA_ERROR: "mediaError",
            KEY_SYSTEM_ERROR: "keySystemError",
            MUX_ERROR: "muxError",
            OTHER_ERROR: "otherError"
        },
        t.ErrorDetails = {
            KEY_SYSTEM_NO_KEYS: "keySystemNoKeys",
            KEY_SYSTEM_NO_ACCESS: "keySystemNoAccess",
            KEY_SYSTEM_NO_SESSION: "keySystemNoSession",
            KEY_SYSTEM_LICENSE_REQUEST_FAILED: "keySystemLicenseRequestFailed",
            MANIFEST_LOAD_ERROR: "manifestLoadError",
            MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
            MANIFEST_PARSING_ERROR: "manifestParsingError",
            MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
            LEVEL_LOAD_ERROR: "levelLoadError",
            LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
            LEVEL_SWITCH_ERROR: "levelSwitchError",
            AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
            AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
            FRAG_LOAD_ERROR: "fragLoadError",
            FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
            FRAG_DECRYPT_ERROR: "fragDecryptError",
            FRAG_PARSING_ERROR: "fragParsingError",
            REMUX_ALLOC_ERROR: "remuxAllocError",
            KEY_LOAD_ERROR: "keyLoadError",
            KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
            BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
            BUFFER_APPEND_ERROR: "bufferAppendError",
            BUFFER_APPENDING_ERROR: "bufferAppendingError",
            BUFFER_STALLED_ERROR: "bufferStalledError",
            BUFFER_FULL_ERROR: "bufferFullError",
            BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
            BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
            INTERNAL_EXCEPTION: "internalException"
        }
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(0),
        a = r(3),
        n = r(1),
        o = {
            hlsEventGeneric: !0,
            hlsHandlerDestroying: !0,
            hlsHandlerDestroyed: !0
        },
        s = function() {
            function e(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                this.hls = e,
                this.onEvent = this.onEvent.bind(this),
                this.handledEvents = t,
                this.useGenericHandler = !0,
                this.registerListeners()
            }
            return e.prototype.destroy = function() {
                this.onHandlerDestroying(),
                this.unregisterListeners(),
                this.onHandlerDestroyed()
            },
            e.prototype.onHandlerDestroying = function() {},
            e.prototype.onHandlerDestroyed = function() {},
            e.prototype.isEventHandler = function() {
                return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent
            },
            e.prototype.registerListeners = function() {
                this.isEventHandler() && this.handledEvents.forEach(function(e) {
                    if (o[e]) throw new Error("Forbidden event-name: " + e);
                    this.hls.on(e, this.onEvent)
                },
                this)
            },
            e.prototype.unregisterListeners = function() {
                this.isEventHandler() && this.handledEvents.forEach(function(e) {
                    this.hls.off(e, this.onEvent)
                },
                this)
            },
            e.prototype.onEvent = function(e, t) {
                this.onEventGeneric(e, t)
            },
            e.prototype.onEventGeneric = function(e, t) {
                try { (function(e, t) {
                        var r = "on" + e.replace("hls", "");
                        if ("function" != typeof this[r]) throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
                        return this[r].bind(this, t)
                    }).call(this, e, t).call()
                } catch(t) {
                    i.logger.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t),
                    this.hls.trigger(n.
                default.ERROR, {
                        type: a.ErrorTypes.OTHER_ERROR,
                        details: a.ErrorDetails.INTERNAL_EXCEPTION,
                        fatal: !1,
                        event: e,
                        err: t
                    })
                }
            },
            e
        } ();
        t.
    default = s
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.isBuffered = function(e, t) {
                try {
                    if (e) for (var r = e.buffered,
                    i = 0; i < r.length; i++) if (t >= r.start(i) && t <= r.end(i)) return ! 0
                } catch(e) {}
                return ! 1
            },
            e.bufferInfo = function(e, t, r) {
                try {
                    if (e) {
                        var i = e.buffered,
                        a = [],
                        n = void 0;
                        for (n = 0; n < i.length; n++) a.push({
                            start: i.start(n),
                            end: i.end(n)
                        });
                        return this.bufferedInfo(a, t, r)
                    }
                } catch(e) {}
                return {
                    len: 0,
                    start: t,
                    end: t,
                    nextStart: void 0
                }
            },
            e.bufferedInfo = function(e, t, r) {
                var i, a, n, o, s, l = [];
                for (e.sort(function(e, t) {
                    var r = e.start - t.start;
                    return r || t.end - e.end
                }), s = 0; s < e.length; s++) {
                    var u = l.length;
                    if (u) {
                        var d = l[u - 1].end;
                        e[s].start - d < r ? e[s].end > d && (l[u - 1].end = e[s].end) : l.push(e[s])
                    } else l.push(e[s])
                }
                for (s = 0, i = 0, a = n = t; s < l.length; s++) {
                    var f = l[s].start,
                    c = l[s].end;
                    if (t + r >= f && t < c) a = f,
                    i = (n = c) - t;
                    else if (t + r < f) {
                        o = f;
                        break
                    }
                }
                return {
                    len: i,
                    start: a,
                    end: n,
                    nextStart: o
                }
            },
            e
        } ();
        t.BufferHelper = i
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getSelfScope = function() {
            return "undefined" == typeof window ? self: window
        }
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            var i = this && this.__extends ||
            function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                function(e, t) {
                    e.__proto__ = t
                } ||
                function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return function(t, r) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, r),
                    t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
                }
            } ();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(4),
            n = r(1);
            t.FragmentState = {
                NOT_LOADED: "NOT_LOADED",
                APPENDING: "APPENDING",
                PARTIAL: "PARTIAL",
                OK: "OK"
            };
            var o = function(r) {
                function o(e) {
                    var t = r.call(this, e, n.
                default.BUFFER_APPENDED, n.
                default.FRAG_BUFFERED, n.
                default.FRAG_LOADED) || this;
                    return t.bufferPadding = .2,
                    t.fragments = Object.create(null),
                    t.timeRanges = Object.create(null),
                    t.config = e.config,
                    t
                }
                return i(o, r),
                o.prototype.destroy = function() {
                    this.fragments = Object.create(null),
                    this.timeRanges = Object.create(null),
                    this.config = null,
                    a.
                default.prototype.destroy.call(this),
                    r.prototype.destroy.call(this)
                },
                o.prototype.getBufferedFrag = function(e, t) {
                    var r = this.fragments,
                    i = Object.keys(r).filter(function(i) {
                        var a = r[i];
                        if (a.body.type !== t) return ! 1;
                        if (!a.buffered) return ! 1;
                        var n = a.body;
                        return n.startPTS <= e && e <= n.endPTS
                    });
                    if (0 === i.length) return null;
                    var a = i.pop();
                    return r[a].body
                },
                o.prototype.detectEvictedFragments = function(e, t) {
                    var r, i, a = this;
                    Object.keys(this.fragments).forEach(function(n) {
                        var o = a.fragments[n];
                        if (!0 === o.buffered) {
                            var s = o.range[e];
                            if (s) {
                                r = s.time;
                                for (var l = 0; l < r.length; l++) if (i = r[l], !1 === a.isTimeBuffered(i.startPTS, i.endPTS, t)) {
                                    a.removeFragment(o.body);
                                    break
                                }
                            }
                        }
                    })
                },
                o.prototype.detectPartialFragments = function(e) {
                    var t = this,
                    r = this.getFragmentKey(e),
                    i = this.fragments[r];
                    i && (i.buffered = !0, Object.keys(this.timeRanges).forEach(function(r) {
                        if (e.hasElementaryStream(r)) {
                            var a = t.timeRanges[r];
                            i.range[r] = t.getBufferedTimes(e.startPTS, e.endPTS, a)
                        }
                    }))
                },
                o.prototype.getBufferedTimes = function(e, t, r) {
                    for (var i, a, n = [], o = !1, s = 0; s < r.length; s++) {
                        if (i = r.start(s) - this.bufferPadding, a = r.end(s) + this.bufferPadding, e >= i && t <= a) {
                            n.push({
                                startPTS: Math.max(e, r.start(s)),
                                endPTS: Math.min(t, r.end(s))
                            });
                            break
                        }
                        if (e < a && t > i) n.push({
                            startPTS: Math.max(e, r.start(s)),
                            endPTS: Math.min(t, r.end(s))
                        }),
                        o = !0;
                        else if (t <= i) break
                    }
                    return {
                        time: n,
                        partial: o
                    }
                },
                o.prototype.getFragmentKey = function(e) {
                    return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
                },
                o.prototype.getPartialFragment = function(e) {
                    var t, r, i, a = this,
                    n = null,
                    o = 0;
                    return Object.keys(this.fragments).forEach(function(s) {
                        var l = a.fragments[s];
                        a.isPartial(l) && (r = l.body.startPTS - a.bufferPadding, i = l.body.endPTS + a.bufferPadding, e >= r && e <= i && (t = Math.min(e - r, i - e), o <= t && (n = l.body, o = t)))
                    }),
                    n
                },
                o.prototype.getState = function(e) {
                    var r = this.getFragmentKey(e),
                    i = this.fragments[r],
                    a = t.FragmentState.NOT_LOADED;
                    return void 0 !== i && (a = i.buffered ? !0 === this.isPartial(i) ? t.FragmentState.PARTIAL: t.FragmentState.OK: t.FragmentState.APPENDING),
                    a
                },
                o.prototype.isPartial = function(e) {
                    return ! 0 === e.buffered && (void 0 !== e.range.video && !0 === e.range.video.partial || void 0 !== e.range.audio && !0 === e.range.audio.partial)
                },
                o.prototype.isTimeBuffered = function(e, t, r) {
                    for (var i, a, n = 0; n < r.length; n++) {
                        if (i = r.start(n) - this.bufferPadding, a = r.end(n) + this.bufferPadding, e >= i && t <= a) return ! 0;
                        if (t <= i) return ! 1
                    }
                    return ! 1
                },
                o.prototype.onFragLoaded = function(t) {
                    var r = t.frag;
                    e.isFinite(r.sn) && !r.bitrateTest && (this.fragments[this.getFragmentKey(r)] = {
                        body: r,
                        range: Object.create(null),
                        buffered: !1
                    })
                },
                o.prototype.onBufferAppended = function(e) {
                    var t = this;
                    this.timeRanges = e.timeRanges,
                    Object.keys(this.timeRanges).forEach(function(e) {
                        var r = t.timeRanges[e];
                        t.detectEvictedFragments(e, r)
                    })
                },
                o.prototype.onFragBuffered = function(e) {
                    this.detectPartialFragments(e.frag)
                },
                o.prototype.hasFragment = function(e) {
                    var t = this.getFragmentKey(e);
                    return void 0 !== this.fragments[t]
                },
                o.prototype.removeFragment = function(e) {
                    var t = this.getFragmentKey(e);
                    delete this.fragments[t]
                },
                o.prototype.removeAllFragments = function() {
                    this.fragments = Object.create(null)
                },
                o
            } (a.
        default);
            t.FragmentTracker = o
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(0);
            function a(t, r, a) {
                var n = t[r],
                o = t[a],
                s = o.startPTS;
                e.isFinite(s) ? a > r ? (n.duration = s - n.start, n.duration < 0 && i.logger.warn("negative duration computed for frag " + n.sn + ",level " + n.level + ", there should be some duration drift between playlist and fragment!")) : (o.duration = n.start - s, o.duration < 0 && i.logger.warn("negative duration computed for frag " + o.sn + ",level " + o.level + ", there should be some duration drift between playlist and fragment!")) : o.start = a > r ? n.start + n.duration: Math.max(n.start - o.duration, 0)
            }
            function n(t, r, i, n, o, s) {
                var l = i;
                if (e.isFinite(r.startPTS)) {
                    var u = Math.abs(r.startPTS - i);
                    e.isFinite(r.deltaPTS) ? r.deltaPTS = Math.max(u, r.deltaPTS) : r.deltaPTS = u,
                    l = Math.max(i, r.startPTS),
                    i = Math.min(i, r.startPTS),
                    n = Math.max(n, r.endPTS),
                    o = Math.min(o, r.startDTS),
                    s = Math.max(s, r.endDTS)
                }
                var d = i - r.start;
                r.start = r.startPTS = i,
                r.maxStartPTS = l,
                r.endPTS = n,
                r.startDTS = o,
                r.endDTS = s,
                r.duration = n - i;
                var f, c, h, p = r.sn;
                if (!t || p < t.startSN || p > t.endSN) return 0;
                for (f = p - t.startSN, (c = t.fragments)[f] = r, h = f; h > 0; h--) a(c, h, h - 1);
                for (h = f; h < c.length - 1; h++) a(c, h, h + 1);
                return t.PTSKnown = !0,
                d
            }
            function o(e, t, r) {
                if (e && t) for (var i = Math.max(e.startSN, t.startSN) - t.startSN, a = Math.min(e.endSN, t.endSN) - t.startSN, n = t.startSN - e.startSN, o = i; o <= a; o++) {
                    var s = e.fragments[n + o],
                    l = t.fragments[o];
                    if (!s || !l) break;
                    r(s, l, o)
                }
            }
            function s(e, t) {
                var r = t.startSN - e.startSN,
                i = e.fragments,
                a = t.fragments;
                if (! (r < 0 || r > i.length)) for (var n = 0; n < a.length; n++) a[n].start += i[r].start
            }
            t.addGroupId = function(e, t, r) {
                switch (t) {
                case "audio":
                    e.audioGroupIds || (e.audioGroupIds = []),
                    e.audioGroupIds.push(r);
                    break;
                case "text":
                    e.textGroupIds || (e.textGroupIds = []),
                    e.textGroupIds.push(r)
                }
            },
            t.updatePTS = a,
            t.updateFragPTSDTS = n,
            t.mergeDetails = function(t, r) {
                r.initSegment && t.initSegment && (r.initSegment = t.initSegment);
                var a, l = 0;
                if (o(t, r,
                function(t, i) {
                    l = t.cc - i.cc,
                    e.isFinite(t.startPTS) && (i.start = i.startPTS = t.startPTS, i.endPTS = t.endPTS, i.duration = t.duration, i.backtracked = t.backtracked, i.dropped = t.dropped, a = i),
                    r.PTSKnown = !0
                }), r.PTSKnown) {
                    if (l) {
                        i.logger.log("discontinuity sliding from playlist, take drift into account");
                        for (var u = r.fragments,
                        d = 0; d < u.length; d++) u[d].cc += l
                    }
                    a ? n(r, a, a.startPTS, a.endPTS, a.startDTS, a.endDTS) : s(t, r),
                    r.PTSKnown = t.PTSKnown
                }
            },
            t.mergeSubtitlePlaylists = function(e, t, r) {
                void 0 === r && (r = 0);
                var i = -1;
                o(e, t,
                function(e, t, r) {
                    t.start = e.start,
                    i = r
                });
                var a = t.fragments;
                if (i < 0) a.forEach(function(e) {
                    e.start += r
                });
                else for (var n = i + 1; n < a.length; n++) a[n].start = a[n - 1].start + a[n - 1].duration
            },
            t.mapFragmentIntersection = o,
            t.adjustSliding = s,
            t.computeReloadInterval = function(e, t, r) {
                var i = 1e3 * (t.averagetargetduration ? t.averagetargetduration: t.targetduration),
                a = i / 2;
                return e && t.endSN === e.endSN && (i = a),
                r && (i = Math.max(a, i - (window.performance.now() - r))),
                Math.round(i)
            }
        }).call(this, r(2).Number)
    },
    function(e, t, r) { !
        function(t) {
            var r = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/\?#]*\/)*.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,
            i = /^([^\/?#]*)(.*)$/,
            a = /(?:\/|^)\.(?=\/)/g,
            n = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,
            o = {
                buildAbsoluteURL: function(e, t, r) {
                    if (r = r || {},
                    e = e.trim(), !(t = t.trim())) {
                        if (!r.alwaysNormalize) return e;
                        var a = o.parseURL(e);
                        if (!a) throw new Error("Error trying to parse base URL.");
                        return a.path = o.normalizePath(a.path),
                        o.buildURLFromParts(a)
                    }
                    var n = o.parseURL(t);
                    if (!n) throw new Error("Error trying to parse relative URL.");
                    if (n.scheme) return r.alwaysNormalize ? (n.path = o.normalizePath(n.path), o.buildURLFromParts(n)) : t;
                    var s = o.parseURL(e);
                    if (!s) throw new Error("Error trying to parse base URL.");
                    if (!s.netLoc && s.path && "/" !== s.path[0]) {
                        var l = i.exec(s.path);
                        s.netLoc = l[1],
                        s.path = l[2]
                    }
                    s.netLoc && !s.path && (s.path = "/");
                    var u = {
                        scheme: s.scheme,
                        netLoc: n.netLoc,
                        path: null,
                        params: n.params,
                        query: n.query,
                        fragment: n.fragment
                    };
                    if (!n.netLoc && (u.netLoc = s.netLoc, "/" !== n.path[0])) if (n.path) {
                        var d = s.path,
                        f = d.substring(0, d.lastIndexOf("/") + 1) + n.path;
                        u.path = o.normalizePath(f)
                    } else u.path = s.path,
                    n.params || (u.params = s.params, n.query || (u.query = s.query));
                    return null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(n.path) : n.path),
                    o.buildURLFromParts(u)
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
                    }: null
                },
                normalizePath: function(e) {
                    for (e = e.split("").reverse().join("").replace(a, ""); e.length !== (e = e.replace(n, "")).length;);
                    return e.split("").reverse().join("")
                },
                buildURLFromParts: function(e) {
                    return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                }
            };
            e.exports = o
        } ()
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.
    default = {
            search: function(e, t) {
                for (var r = 0,
                i = e.length - 1,
                a = null,
                n = null; r <= i;) {
                    var o = t(n = e[a = (r + i) / 2 | 0]);
                    if (o > 0) r = a + 1;
                    else {
                        if (! (o < 0)) return n;
                        i = a - 1
                    }
                }
                return null
            }
        }
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e() {}
            return e.isHeader = function(e, t) {
                return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
            },
            e.isFooter = function(e, t) {
                return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
            },
            e.getID3Data = function(t, r) {
                for (var i = r,
                a = 0; e.isHeader(t, r);) {
                    a += 10,
                    a += e._readSize(t, r + 6),
                    e.isFooter(t, r + 10) && (a += 10),
                    r += a
                }
                if (a > 0) return t.subarray(i, i + a)
            },
            e._readSize = function(e, t) {
                var r = 0;
                return r = (127 & e[t]) << 21,
                r |= (127 & e[t + 1]) << 14,
                r |= (127 & e[t + 2]) << 7,
                r |= 127 & e[t + 3]
            },
            e.getTimeStamp = function(t) {
                for (var r = e.getID3Frames(t), i = 0; i < r.length; i++) {
                    var a = r[i];
                    if (e.isTimeStampFrame(a)) return e._readTimeStamp(a)
                }
            },
            e.isTimeStampFrame = function(e) {
                return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
            },
            e._getFrameData = function(t) {
                var r = String.fromCharCode(t[0], t[1], t[2], t[3]),
                i = e._readSize(t, 4);
                return {
                    type: r,
                    size: i,
                    data: t.subarray(10, 10 + i)
                }
            },
            e.getID3Frames = function(t) {
                for (var r = 0,
                i = []; e.isHeader(t, r);) {
                    for (var a = e._readSize(t, r + 6), n = (r += 10) + a; r + 8 < n;) {
                        var o = e._getFrameData(t.subarray(r)),
                        s = e._decodeFrame(o);
                        s && i.push(s),
                        r += o.size + 10
                    }
                    e.isFooter(t, r) && (r += 10)
                }
                return i
            },
            e._decodeFrame = function(t) {
                return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : void 0
            },
            e._readTimeStamp = function(e) {
                if (8 === e.data.byteLength) {
                    var t = new Uint8Array(e.data),
                    r = 1 & t[3],
                    i = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
                    return i /= 45,
                    r && (i += 47721858.84),
                    Math.round(i)
                }
            },
            e._decodePrivFrame = function(t) {
                if (! (t.size < 2)) {
                    var r = e._utf8ArrayToStr(t.data, !0),
                    i = new Uint8Array(t.data.subarray(r.length + 1));
                    return {
                        key: t.type,
                        info: r,
                        data: i.buffer
                    }
                }
            },
            e._decodeTextFrame = function(t) {
                if (! (t.size < 2)) {
                    if ("TXXX" === t.type) {
                        var r = 1,
                        i = e._utf8ArrayToStr(t.data.subarray(r));
                        r += i.length + 1;
                        var a = e._utf8ArrayToStr(t.data.subarray(r));
                        return {
                            key: t.type,
                            info: i,
                            data: a
                        }
                    }
                    var n = e._utf8ArrayToStr(t.data.subarray(1));
                    return {
                        key: t.type,
                        data: n
                    }
                }
            },
            e._decodeURLFrame = function(t) {
                if ("WXXX" === t.type) {
                    if (t.size < 2) return;
                    var r = 1,
                    i = e._utf8ArrayToStr(t.data.subarray(r));
                    r += i.length + 1;
                    var a = e._utf8ArrayToStr(t.data.subarray(r));
                    return {
                        key: t.type,
                        info: i,
                        data: a
                    }
                }
                var n = e._utf8ArrayToStr(t.data);
                return {
                    key: t.type,
                    data: n
                }
            },
            e._utf8ArrayToStr = function(e, t) {
                void 0 === t && (t = !1);
                for (var r, i, a, n = e.length,
                o = "",
                s = 0; s < n;) {
                    if (0 === (r = e[s++]) && t) return o;
                    if (0 !== r && 3 !== r) switch (r >> 4) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        o += String.fromCharCode(r);
                        break;
                    case 12:
                    case 13:
                        i = e[s++],
                        o += String.fromCharCode((31 & r) << 6 | 63 & i);
                        break;
                    case 14:
                        i = e[s++],
                        a = e[s++],
                        o += String.fromCharCode((15 & r) << 12 | (63 & i) << 6 | (63 & a) << 0)
                    }
                }
                return o
            },
            e
        } (),
        a = i._utf8ArrayToStr;
        t.utf8ArrayToStr = a,
        t.
    default = i
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(9),
            a = r(18),
            n = function() {
                function t() {
                    var e;
                    this._url = null,
                    this._byteRange = null,
                    this._decryptdata = null,
                    this.tagList = [],
                    this.programDateTime = null,
                    this.rawProgramDateTime = null,
                    this._elementaryStreams = ((e = {})[t.ElementaryStreamTypes.AUDIO] = !1, e[t.ElementaryStreamTypes.VIDEO] = !1, e)
                }
                return Object.defineProperty(t, "ElementaryStreamTypes", {
                    get: function() {
                        return {
                            AUDIO: "audio",
                            VIDEO: "video"
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "url", {
                    get: function() {
                        return ! this._url && this.relurl && (this._url = i.buildAbsoluteURL(this.baseurl, this.relurl, {
                            alwaysNormalize: !0
                        })),
                        this._url
                    },
                    set: function(e) {
                        this._url = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "byteRange", {
                    get: function() {
                        if (!this._byteRange && !this.rawByteRange) return [];
                        if (this._byteRange) return this._byteRange;
                        var e = [];
                        if (this.rawByteRange) {
                            var t = this.rawByteRange.split("@", 2);
                            if (1 === t.length) {
                                var r = this.lastByteRangeEndOffset;
                                e[0] = r || 0
                            } else e[0] = parseInt(t[1]);
                            e[1] = parseInt(t[0]) + e[0],
                            this._byteRange = e
                        }
                        return e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "byteRangeStartOffset", {
                    get: function() {
                        return this.byteRange[0]
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "byteRangeEndOffset", {
                    get: function() {
                        return this.byteRange[1]
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "decryptdata", {
                    get: function() {
                        return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)),
                        this._decryptdata
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "endProgramDateTime", {
                    get: function() {
                        if (!e.isFinite(this.programDateTime)) return null;
                        var t = e.isFinite(this.duration) ? this.duration: 0;
                        return this.programDateTime + 1e3 * t
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "encrypted", {
                    get: function() {
                        return ! (!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t.prototype.addElementaryStream = function(e) {
                    this._elementaryStreams[e] = !0
                },
                t.prototype.hasElementaryStream = function(e) {
                    return ! 0 === this._elementaryStreams[e]
                },
                t.prototype.createInitializationVector = function(e) {
                    for (var t = new Uint8Array(16), r = 12; r < 16; r++) t[r] = e >> 8 * (15 - r) & 255;
                    return t
                },
                t.prototype.fragmentDecryptdataFromLevelkey = function(e, t) {
                    var r = e;
                    return e && e.method && e.uri && !e.iv && ((r = new a.
                default).method = e.method, r.baseuri = e.baseuri, r.reluri = e.reluri, r.iv = this.createInitializationVector(t)),
                    r
                },
                t
            } ();
            t.
        default = n
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(39),
        a = r(40),
        n = r(41),
        o = r(3),
        s = r(0),
        l = r(1),
        u = r(6).getSelfScope(),
        d = function() {
            function e(e, t, r) {
                var i = (void 0 === r ? {}: r).removePKCS7Padding,
                a = void 0 === i || i;
                if (this.logEnabled = !0, this.observer = e, this.config = t, this.removePKCS7Padding = a, a) try {
                    var n = u.crypto;
                    n && (this.subtle = n.subtle || n.webkitSubtle)
                } catch(e) {}
                this.disableWebCrypto = !this.subtle
            }
            return e.prototype.isSync = function() {
                return this.disableWebCrypto && this.config.enableSoftwareAES
            },
            e.prototype.decrypt = function(e, t, r, o) {
                var l = this;
                if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                    this.logEnabled && (s.logger.log("JS AES decrypt"), this.logEnabled = !1);
                    var u = this.decryptor;
                    u || (this.decryptor = u = new n.
                default),
                    u.expandKey(t),
                    o(u.decrypt(e, 0, r, this.removePKCS7Padding))
                } else {
                    this.logEnabled && (s.logger.log("WebCrypto AES decrypt"), this.logEnabled = !1);
                    var d = this.subtle;
                    this.key !== t && (this.key = t, this.fastAesKey = new a.
                default(d, t)),
                    this.fastAesKey.expandKey().then(function(a) {
                        new i.
                    default(d, r).decrypt(e, a).
                        catch(function(i) {
                            l.onWebCryptoError(i, e, t, r, o)
                        }).then(function(e) {
                            o(e)
                        })
                    }).
                    catch(function(i) {
                        l.onWebCryptoError(i, e, t, r, o)
                    })
                }
            },
            e.prototype.onWebCryptoError = function(e, t, r, i, a) {
                this.config.enableSoftwareAES ? (s.logger.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(t, r, i, a)) : (s.logger.error("decrypting error : " + e.message), this.observer.trigger(l.
            default.ERROR, {
                    type: o.ErrorTypes.MEDIA_ERROR,
                    details: o.ErrorDetails.FRAG_DECRYPT_ERROR,
                    fatal: !0,
                    reason: e.message
                }))
            },
            e.prototype.destroy = function() {
                var e = this.decryptor;
                e && (e.destroy(), this.decryptor = void 0)
            },
            e
        } ();
        t.
    default = d
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getMediaSource = function() {
            if ("undefined" != typeof window) return window.MediaSource || window.WebKitMediaSource
        }
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            var i = this && this.__extends ||
            function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                function(e, t) {
                    e.__proto__ = t
                } ||
                function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return function(t, r) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, r),
                    t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
                }
            } ();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(28),
            n = r(7),
            o = r(5),
            s = r(0);
            t.State = {
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
            };
            var l = function(r) {
                function a() {
                    return null !== r && r.apply(this, arguments) || this
                }
                return i(a, r),
                a.prototype.doTick = function() {},
                a.prototype.startLoad = function() {},
                a.prototype.stopLoad = function() {
                    var e = this.fragCurrent;
                    e && (e.loader && e.loader.abort(), this.fragmentTracker.removeFragment(e)),
                    this.demuxer && (this.demuxer.destroy(), this.demuxer = null),
                    this.fragCurrent = null,
                    this.fragPrevious = null,
                    this.clearInterval(),
                    this.clearNextTick(),
                    this.state = t.State.STOPPED
                },
                a.prototype._streamEnded = function(e, t) {
                    var r = this.fragCurrent,
                    i = this.fragmentTracker;
                    if (!t.live && r && !r.backtracked && r.sn === t.endSN && !e.nextStart) {
                        var a = i.getState(r);
                        return a === n.FragmentState.PARTIAL || a === n.FragmentState.OK
                    }
                    return ! 1
                },
                a.prototype.onMediaSeeking = function() {
                    var r = this.config,
                    i = this.media,
                    a = this.mediaBuffer,
                    n = this.state,
                    l = i ? i.currentTime: null,
                    u = o.BufferHelper.bufferInfo(a || i, l, this.config.maxBufferHole);
                    if (e.isFinite(l) && s.logger.log("media seeking to " + l.toFixed(3)), n === t.State.FRAG_LOADING) {
                        var d = this.fragCurrent;
                        if (0 === u.len && d) {
                            var f = r.maxFragLookUpTolerance,
                            c = d.start - f,
                            h = d.start + d.duration + f;
                            l < c || l > h ? (d.loader && (s.logger.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), d.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = t.State.IDLE) : s.logger.log("seeking outside of buffer but within currently loaded fragment range")
                        }
                    } else n === t.State.ENDED && (0 === u.len && (this.fragPrevious = null, this.fragCurrent = null), this.state = t.State.IDLE);
                    i && (this.lastCurrentTime = l),
                    this.loadedmetadata || (this.nextLoadPosition = this.startPosition = l),
                    this.tick()
                },
                a.prototype.onMediaEnded = function() {
                    this.startPosition = this.lastCurrentTime = 0
                },
                a.prototype.onHandlerDestroying = function() {
                    this.stopLoad(),
                    r.prototype.onHandlerDestroying.call(this)
                },
                a.prototype.onHandlerDestroyed = function() {
                    this.state = t.State.STOPPED,
                    this.fragmentTracker = null
                },
                a
            } (a.
        default);
            t.
        default = l
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            var i = this && this.__extends ||
            function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                function(e, t) {
                    e.__proto__ = t
                } ||
                function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return function(t, r) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, r),
                    t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
                }
            } ();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(1),
            n = r(4),
            o = r(3),
            s = r(0),
            l = r(17),
            u = r(32),
            d = window.performance,
            f = {
                MANIFEST: "manifest",
                LEVEL: "level",
                AUDIO_TRACK: "audioTrack",
                SUBTITLE_TRACK: "subtitleTrack"
            },
            c = {
                MAIN: "main",
                AUDIO: "audio",
                SUBTITLE: "subtitle"
            },
            h = function(t) {
                function r(e) {
                    var r = t.call(this, e, a.
                default.MANIFEST_LOADING, a.
                default.LEVEL_LOADING, a.
                default.AUDIO_TRACK_LOADING, a.
                default.SUBTITLE_TRACK_LOADING) || this;
                    return r.loaders = {},
                    r
                }
                return i(r, t),
                Object.defineProperty(r, "ContextType", {
                    get: function() {
                        return f
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(r, "LevelType", {
                    get: function() {
                        return c
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                r.canHaveQualityLevels = function(e) {
                    return e !== f.AUDIO_TRACK && e !== f.SUBTITLE_TRACK
                },
                r.mapContextToLevelType = function(e) {
                    switch (e.type) {
                    case f.AUDIO_TRACK:
                        return c.AUDIO;
                    case f.SUBTITLE_TRACK:
                        return c.SUBTITLE;
                    default:
                        return c.MAIN
                    }
                },
                r.getResponseUrl = function(e, t) {
                    var r = e.url;
                    return void 0 !== r && 0 !== r.indexOf("data:") || (r = t.url),
                    r
                },
                r.prototype.createInternalLoader = function(e) {
                    var t = this.hls.config,
                    r = t.pLoader,
                    i = t.loader,
                    a = new(r || i)(t);
                    return e.loader = a,
                    this.loaders[e.type] = a,
                    a
                },
                r.prototype.getInternalLoader = function(e) {
                    return this.loaders[e.type]
                },
                r.prototype.resetInternalLoader = function(e) {
                    this.loaders[e] && delete this.loaders[e]
                },
                r.prototype.destroyInternalLoaders = function() {
                    for (var e in this.loaders) {
                        var t = this.loaders[e];
                        t && t.destroy(),
                        this.resetInternalLoader(e)
                    }
                },
                r.prototype.destroy = function() {
                    this.destroyInternalLoaders(),
                    t.prototype.destroy.call(this)
                },
                r.prototype.onManifestLoading = function(e) {
                    this.load(e.url, {
                        type: f.MANIFEST,
                        level: 0,
                        id: null
                    })
                },
                r.prototype.onLevelLoading = function(e) {
                    this.load(e.url, {
                        type: f.LEVEL,
                        level: e.level,
                        id: e.id
                    })
                },
                r.prototype.onAudioTrackLoading = function(e) {
                    this.load(e.url, {
                        type: f.AUDIO_TRACK,
                        level: null,
                        id: e.id
                    })
                },
                r.prototype.onSubtitleTrackLoading = function(e) {
                    this.load(e.url, {
                        type: f.SUBTITLE_TRACK,
                        level: null,
                        id: e.id
                    })
                },
                r.prototype.load = function(e, t) {
                    var r = this.hls.config;
                    s.logger.debug("Loading playlist of type " + t.type + ", level: " + t.level + ", id: " + t.id);
                    var i, a, n, o, l = this.getInternalLoader(t);
                    if (l) {
                        var u = l.context;
                        if (u && u.url === e) return s.logger.trace("playlist request ongoing"),
                        !1;
                        s.logger.warn("aborting previous loader for type: " + t.type),
                        l.abort()
                    }
                    switch (t.type) {
                    case f.MANIFEST:
                        i = r.manifestLoadingMaxRetry,
                        a = r.manifestLoadingTimeOut,
                        n = r.manifestLoadingRetryDelay,
                        o = r.manifestLoadingMaxRetryTimeout;
                        break;
                    case f.LEVEL:
                        i = 0,
                        a = r.levelLoadingTimeOut;
                        break;
                    default:
                        i = r.levelLoadingMaxRetry,
                        a = r.levelLoadingTimeOut,
                        n = r.levelLoadingRetryDelay,
                        o = r.levelLoadingMaxRetryTimeout
                    }
                    l = this.createInternalLoader(t),
                    t.url = e,
                    t.responseType = t.responseType || "";
                    var d = {
                        timeout: a,
                        maxRetry: i,
                        retryDelay: n,
                        maxRetryDelay: o
                    },
                    c = {
                        onSuccess: this.loadsuccess.bind(this),
                        onError: this.loaderror.bind(this),
                        onTimeout: this.loadtimeout.bind(this)
                    };
                    return s.logger.debug("Calling internal loader delegate for URL: " + e),
                    l.load(t, d, c),
                    !0
                },
                r.prototype.loadsuccess = function(e, t, r, i) {
                    if (void 0 === i && (i = null), r.isSidxRequest) return this._handleSidxRequest(e, r),
                    void this._handlePlaylistLoaded(e, t, r, i);
                    this.resetInternalLoader(r.type);
                    var a = e.data;
                    t.tload = d.now(),
                    0 === a.indexOf("#EXTM3U") ? a.indexOf("#EXTINF:") > 0 || a.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, r, i) : this._handleMasterPlaylist(e, t, r, i) : this._handleManifestParsingError(e, r, "no EXTM3U delimiter", i)
                },
                r.prototype.loaderror = function(e, t, r) {
                    void 0 === r && (r = null),
                    this._handleNetworkError(t, r, !1, e)
                },
                r.prototype.loadtimeout = function(e, t, r) {
                    void 0 === r && (r = null),
                    this._handleNetworkError(t, r, !0)
                },
                r.prototype._handleMasterPlaylist = function(e, t, i, n) {
                    var o = this.hls,
                    l = e.data,
                    d = r.getResponseUrl(e, i),
                    f = u.
                default.parseMasterPlaylist(l, d);
                    if (f.length) {
                        var c = f.map(function(e) {
                            return {
                                id: e.attrs.AUDIO,
                                codec: e.audioCodec
                            }
                        }),
                        h = u.
                    default.parseMasterPlaylistMedia(l, d, "AUDIO", c),
                        p = u.
                    default.parseMasterPlaylistMedia(l, d, "SUBTITLES");
                        if (h.length) {
                            var g = !1;
                            h.forEach(function(e) {
                                e.url || (g = !0)
                            }),
                            !1 === g && f[0].audioCodec && !f[0].attrs.AUDIO && (s.logger.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), h.unshift({
                                type: "main",
                                name: "main"
                            }))
                        }
                        o.trigger(a.
                    default.MANIFEST_LOADED, {
                            levels: f,
                            audioTracks: h,
                            subtitles: p,
                            url: d,
                            stats: t,
                            networkDetails: n
                        })
                    } else this._handleManifestParsingError(e, i, "no level found in manifest", n)
                },
                r.prototype._handleTrackOrLevelPlaylist = function(t, i, n, o) {
                    var s = this.hls,
                    l = n.id,
                    c = n.level,
                    h = n.type,
                    p = r.getResponseUrl(t, n),
                    g = e.isFinite(l) ? l: 0,
                    v = e.isFinite(c) ? c: g,
                    y = r.mapContextToLevelType(n),
                    m = u.
                default.parseLevelPlaylist(t.data, p, v, y, g);
                    if (m.tload = i.tload, h === f.MANIFEST) {
                        var E = {
                            url: p,
                            details: m
                        };
                        s.trigger(a.
                    default.MANIFEST_LOADED, {
                            levels: [E],
                            audioTracks: [],
                            url: p,
                            stats: i,
                            networkDetails: o
                        })
                    }
                    if (i.tparsed = d.now(), m.needSidxRanges) {
                        var _ = m.initSegment.url;
                        this.load(_, {
                            isSidxRequest: !0,
                            type: h,
                            level: c,
                            levelDetails: m,
                            id: l,
                            rangeStart: 0,
                            rangeEnd: 2048,
                            responseType: "arraybuffer"
                        })
                    } else n.levelDetails = m,
                    this._handlePlaylistLoaded(t, i, n, o)
                },
                r.prototype._handleSidxRequest = function(e, t) {
                    var r = l.
                default.parseSegmentIndex(new Uint8Array(e.data));
                    if (r) {
                        var i = r.references,
                        a = t.levelDetails;
                        i.forEach(function(e, t) {
                            var r = e.info,
                            i = a.fragments[t];
                            0 === i.byteRange.length && (i.rawByteRange = String(1 + r.end - r.start) + "@" + String(r.start))
                        }),
                        a.initSegment.rawByteRange = String(r.moovEndOffset) + "@0"
                    }
                },
                r.prototype._handleManifestParsingError = function(e, t, r, i) {
                    this.hls.trigger(a.
                default.ERROR, {
                        type: o.ErrorTypes.NETWORK_ERROR,
                        details: o.ErrorDetails.MANIFEST_PARSING_ERROR,
                        fatal: !0,
                        url: e.url,
                        reason: r,
                        networkDetails: i
                    })
                },
                r.prototype._handleNetworkError = function(e, t, r, i) {
                    var n, l;
                    void 0 === r && (r = !1),
                    void 0 === i && (i = null),
                    s.logger.info("A network error occured while loading a " + e.type + "-type playlist");
                    var u = this.getInternalLoader(e);
                    switch (e.type) {
                    case f.MANIFEST:
                        n = r ? o.ErrorDetails.MANIFEST_LOAD_TIMEOUT: o.ErrorDetails.MANIFEST_LOAD_ERROR,
                        l = !0;
                        break;
                    case f.LEVEL:
                        n = r ? o.ErrorDetails.LEVEL_LOAD_TIMEOUT: o.ErrorDetails.LEVEL_LOAD_ERROR,
                        l = !1;
                        break;
                    case f.AUDIO_TRACK:
                        n = r ? o.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT: o.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                        l = !1;
                        break;
                    default:
                        l = !1
                    }
                    u && (u.abort(), this.resetInternalLoader(e.type));
                    var d = {
                        type: o.ErrorTypes.NETWORK_ERROR,
                        details: n,
                        fatal: l,
                        url: u.url,
                        loader: u,
                        context: e,
                        networkDetails: t
                    };
                    i && (d.response = i),
                    this.hls.trigger(a.
                default.ERROR, d)
                },
                r.prototype._handlePlaylistLoaded = function(e, t, i, n) {
                    var o = i.type,
                    s = i.level,
                    l = i.id,
                    u = i.levelDetails;
                    if (u.targetduration) if (r.canHaveQualityLevels(i.type)) this.hls.trigger(a.
                default.LEVEL_LOADED, {
                        details: u,
                        level: s || 0,
                        id: l || 0,
                        stats: t,
                        networkDetails: n
                    });
                    else switch (o) {
                    case f.AUDIO_TRACK:
                        this.hls.trigger(a.
                    default.AUDIO_TRACK_LOADED, {
                            details: u,
                            id: l,
                            stats: t,
                            networkDetails: n
                        });
                        break;
                    case f.SUBTITLE_TRACK:
                        this.hls.trigger(a.
                    default.SUBTITLE_TRACK_LOADED, {
                            details: u,
                            id: l,
                            stats: t,
                            networkDetails: n
                        })
                    } else this._handleManifestParsingError(e, i, "invalid target duration", n)
                },
                r
            } (n.
        default);
            t.
        default = h
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(0),
        a = r(1),
        n = Math.pow(2, 32) - 1,
        o = function() {
            function e(e, t) {
                this.observer = e,
                this.remuxer = t
            }
            return e.prototype.resetTimeStamp = function(e) {
                this.initPTS = e
            },
            e.prototype.resetInitSegment = function(t, r, i, n) {
                if (t && t.byteLength) {
                    var o = this.initData = e.parseInitSegment(t);
                    null == r && (r = "mp4a.40.5"),
                    null == i && (i = "avc1.42e01e");
                    var s = {};
                    o.audio && o.video ? s.audiovideo = {
                        container: "video/mp4",
                        codec: r + "," + i,
                        initSegment: n ? t: null
                    }: (o.audio && (s.audio = {
                        container: "audio/mp4",
                        codec: r,
                        initSegment: n ? t: null
                    }), o.video && (s.video = {
                        container: "video/mp4",
                        codec: i,
                        initSegment: n ? t: null
                    })),
                    this.observer.trigger(a.
                default.FRAG_PARSING_INIT_SEGMENT, {
                        tracks: s
                    })
                } else r && (this.audioCodec = r),
                i && (this.videoCodec = i)
            },
            e.probe = function(t) {
                return e.findBox({
                    data: t,
                    start: 0,
                    end: Math.min(t.length, 16384)
                },
                ["moof"]).length > 0
            },
            e.bin2str = function(e) {
                return String.fromCharCode.apply(null, e)
            },
            e.readUint16 = function(e, t) {
                e.data && (t += e.start, e = e.data);
                var r = e[t] << 8 | e[t + 1];
                return r < 0 ? 65536 + r: r
            },
            e.readUint32 = function(e, t) {
                e.data && (t += e.start, e = e.data);
                var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
                return r < 0 ? 4294967296 + r: r
            },
            e.writeUint32 = function(e, t, r) {
                e.data && (t += e.start, e = e.data),
                e[t] = r >> 24,
                e[t + 1] = r >> 16 & 255,
                e[t + 2] = r >> 8 & 255,
                e[t + 3] = 255 & r
            },
            e.findBox = function(t, r) {
                var i, a, n, o, s, l, u, d = [];
                if (t.data ? (l = t.start, o = t.end, t = t.data) : (l = 0, o = t.byteLength), !r.length) return null;
                for (i = l; i < o;) a = e.readUint32(t, i),
                n = e.bin2str(t.subarray(i + 4, i + 8)),
                u = a > 1 ? i + a: o,
                n === r[0] && (1 === r.length ? d.push({
                    data: t,
                    start: i + 8,
                    end: u
                }) : (s = e.findBox({
                    data: t,
                    start: i + 8,
                    end: u
                },
                r.slice(1))).length && (d = d.concat(s))),
                i = u;
                return d
            },
            e.parseSegmentIndex = function(t) {
                var r, i = e.findBox(t, ["moov"])[0],
                a = i ? i.end: null,
                n = 0,
                o = e.findBox(t, ["sidx"]);
                if (!o || !o[0]) return null;
                r = [];
                var s = (o = o[0]).data[0];
                n = 0 === s ? 8 : 16;
                var l = e.readUint32(o, n);
                n += 4;
                n += 0 === s ? 8 : 16,
                n += 2;
                var u = o.end + 0,
                d = e.readUint16(o, n);
                n += 2;
                for (var f = 0; f < d; f++) {
                    var c = n,
                    h = e.readUint32(o, c);
                    c += 4;
                    var p = 2147483647 & h;
                    if (1 === (2147483648 & h) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
                    var g = e.readUint32(o, c);
                    c += 4,
                    r.push({
                        referenceSize: p,
                        subsegmentDuration: g,
                        info: {
                            duration: g / l,
                            start: u,
                            end: u + p - 1
                        }
                    }),
                    u += p,
                    n = c += 4
                }
                return {
                    earliestPresentationTime: 0,
                    timescale: l,
                    version: s,
                    referencesCount: d,
                    references: r,
                    moovEndOffset: a
                }
            },
            e.parseInitSegment = function(t) {
                var r = [];
                return e.findBox(t, ["moov", "trak"]).forEach(function(t) {
                    var a = e.findBox(t, ["tkhd"])[0];
                    if (a) {
                        var n = a.data[a.start],
                        o = 0 === n ? 12 : 20,
                        s = e.readUint32(a, o),
                        l = e.findBox(t, ["mdia", "mdhd"])[0];
                        if (l) {
                            o = 0 === (n = l.data[l.start]) ? 12 : 20;
                            var u = e.readUint32(l, o),
                            d = e.findBox(t, ["mdia", "hdlr"])[0];
                            if (d) {
                                var f = {
                                    soun: "audio",
                                    vide: "video"
                                } [e.bin2str(d.data.subarray(d.start + 8, d.start + 12))];
                                if (f) {
                                    var c = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
                                    if (c.length) {
                                        c = c[0];
                                        var h = e.bin2str(c.data.subarray(c.start + 12, c.start + 16));
                                        i.logger.log("MP4Demuxer:" + f + ":" + h + " found")
                                    }
                                    r[s] = {
                                        timescale: u,
                                        type: f
                                    },
                                    r[f] = {
                                        timescale: u,
                                        id: s
                                    }
                                }
                            }
                        }
                    }
                }),
                r
            },
            e.getStartDTS = function(t, r) {
                var i, a, n;
                return i = e.findBox(r, ["moof", "traf"]),
                a = [].concat.apply([], i.map(function(r) {
                    return e.findBox(r, ["tfhd"]).map(function(i) {
                        var a, n;
                        return a = e.readUint32(i, 4),
                        n = t[a].timescale || 9e4,
                        e.findBox(r, ["tfdt"]).map(function(t) {
                            var r, i;
                            return r = t.data[t.start],
                            i = e.readUint32(t, 4),
                            1 === r && (i *= Math.pow(2, 32), i += e.readUint32(t, 8)),
                            i
                        })[0] / n
                    })
                })),
                n = Math.min.apply(null, a),
                isFinite(n) ? n: 0
            },
            e.offsetStartDTS = function(t, r, i) {
                e.findBox(r, ["moof", "traf"]).map(function(r) {
                    return e.findBox(r, ["tfhd"]).map(function(a) {
                        var o = e.readUint32(a, 4),
                        s = t[o].timescale || 9e4;
                        e.findBox(r, ["tfdt"]).map(function(t) {
                            var r = t.data[t.start],
                            a = e.readUint32(t, 4);
                            if (0 === r) e.writeUint32(t, 4, a - i * s);
                            else {
                                a *= Math.pow(2, 32),
                                a += e.readUint32(t, 8),
                                a -= i * s,
                                a = Math.max(a, 0);
                                var o = Math.floor(a / (n + 1)),
                                l = Math.floor(a % (n + 1));
                                e.writeUint32(t, 4, o),
                                e.writeUint32(t, 8, l)
                            }
                        })
                    })
                })
            },
            e.prototype.append = function(t, r, i, n) {
                var o = this.initData;
                o || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), o = this.initData);
                var s, l = this.initPTS;
                if (void 0 === l) {
                    var u = e.getStartDTS(o, t);
                    this.initPTS = l = u - r,
                    this.observer.trigger(a.
                default.INIT_PTS_FOUND, {
                        initPTS: l
                    })
                }
                e.offsetStartDTS(o, t, l),
                s = e.getStartDTS(o, t),
                this.remuxer.remux(o.audio, o.video, null, null, s, i, n, t)
            },
            e.prototype.destroy = function() {},
            e
        } ();
        t.
    default = o
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(9),
        a = function() {
            function e() {
                this.method = null,
                this.key = null,
                this.iv = null,
                this._uri = null
            }
            return Object.defineProperty(e.prototype, "uri", {
                get: function() {
                    return ! this._uri && this.reluri && (this._uri = i.buildAbsoluteURL(this.baseuri, this.reluri, {
                        alwaysNormalize: !0
                    })),
                    this._uri
                },
                enumerable: !0,
                configurable: !0
            }),
            e
        } ();
        t.
    default = a
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
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
        };
        t.isCodecType = function(e, t) {
            var r = i[t];
            return !! r && !0 === r[e.slice(0, 4)]
        },
        t.isCodecSupportedInMp4 = function(e, t) {
            return window.MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
        }
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(38),
            a = r(1),
            n = r(21),
            o = r(0),
            s = r(3),
            l = r(14),
            u = r(6),
            d = r(24),
            f = u.getSelfScope(),
            c = l.getMediaSource(),
            h = function() {
                function t(e, t) {
                    var r = this;
                    this.hls = e,
                    this.id = t;
                    var l = this.observer = new d.Observer,
                    u = e.config,
                    h = function(t, i) { (i = i || {}).frag = r.frag,
                        i.id = r.id,
                        e.trigger(t, i)
                    };
                    l.on(a.
                default.FRAG_DECRYPTED, h),
                    l.on(a.
                default.FRAG_PARSING_INIT_SEGMENT, h),
                    l.on(a.
                default.FRAG_PARSING_DATA, h),
                    l.on(a.
                default.FRAG_PARSED, h),
                    l.on(a.
                default.ERROR, h),
                    l.on(a.
                default.FRAG_PARSING_METADATA, h),
                    l.on(a.
                default.FRAG_PARSING_USERDATA, h),
                    l.on(a.
                default.INIT_PTS_FOUND, h);
                    var p = {
                        mp4: c.isTypeSupported("video/mp4"),
                        mpeg: c.isTypeSupported("audio/mpeg"),
                        mp3: c.isTypeSupported('audio/mp4; codecs="mp3"')
                    },
                    g = navigator.vendor;
                    if (u.enableWorker && "undefined" != typeof Worker) {
                        o.logger.log("demuxing in webworker");
                        var v = void 0;
                        try {
                            v = this.w = i(52),
                            this.onwmsg = this.onWorkerMessage.bind(this),
                            v.addEventListener("message", this.onwmsg),
                            v.onerror = function(t) {
                                e.trigger(a.
                            default.ERROR, {
                                    type: s.ErrorTypes.OTHER_ERROR,
                                    details: s.ErrorDetails.INTERNAL_EXCEPTION,
                                    fatal: !0,
                                    event: "demuxerWorker",
                                    err: {
                                        message: t.message + " (" + t.filename + ":" + t.lineno + ")"
                                    }
                                })
                            },
                            v.postMessage({
                                cmd: "init",
                                typeSupported: p,
                                vendor: g,
                                id: t,
                                config: JSON.stringify(u)
                            })
                        } catch(e) {
                            o.logger.warn("Error in worker:", e),
                            o.logger.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),
                            v && f.URL.revokeObjectURL(v.objectURL),
                            this.demuxer = new n.
                        default(l, p, u, g),
                            this.w = void 0
                        }
                    } else this.demuxer = new n.
                default(l, p, u, g)
                }
                return t.prototype.destroy = function() {
                    var e = this.w;
                    if (e) e.removeEventListener("message", this.onwmsg),
                    e.terminate(),
                    this.w = null;
                    else {
                        var t = this.demuxer;
                        t && (t.destroy(), this.demuxer = null)
                    }
                    var r = this.observer;
                    r && (r.removeAllListeners(), this.observer = null)
                },
                t.prototype.push = function(t, r, i, a, n, s, l, u) {
                    var d = this.w,
                    f = e.isFinite(n.startPTS) ? n.startPTS: n.start,
                    c = n.decryptdata,
                    h = this.frag,
                    p = !(h && n.cc === h.cc),
                    g = !(h && n.level === h.level),
                    v = h && n.sn === h.sn + 1,
                    y = !g && v;
                    if (p && o.logger.log(this.id + ":discontinuity detected"), g && o.logger.log(this.id + ":switch detected"), this.frag = n, d) d.postMessage({
                        cmd: "demux",
                        data: t,
                        decryptdata: c,
                        initSegment: r,
                        audioCodec: i,
                        videoCodec: a,
                        timeOffset: f,
                        discontinuity: p,
                        trackSwitch: g,
                        contiguous: y,
                        duration: s,
                        accurateTimeOffset: l,
                        defaultInitPTS: u
                    },
                    t instanceof ArrayBuffer ? [t] : []);
                    else {
                        var m = this.demuxer;
                        m && m.push(t, c, r, i, a, f, p, g, y, s, l, u)
                    }
                },
                t.prototype.onWorkerMessage = function(e) {
                    var t = e.data,
                    r = this.hls;
                    switch (t.event) {
                    case "init":
                        f.URL.revokeObjectURL(this.w.objectURL);
                        break;
                    case a.
                    default.FRAG_PARSING_DATA:
                        t.data.data1 = new Uint8Array(t.data1),
                        t.data2 && (t.data.data2 = new Uint8Array(t.data2));
                    default:
                        t.data = t.data || {},
                        t.data.frag = this.frag,
                        t.data.id = this.id,
                        r.trigger(t.event, t.data)
                    }
                },
                t
            } ();
            t.
        default = h
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, a = r(1),
        n = r(3),
        o = r(13),
        s = r(42),
        l = r(17),
        u = r(43),
        d = r(46),
        f = r(47),
        c = r(50),
        h = r(6),
        p = r(0),
        g = h.getSelfScope();
        try {
            i = g.performance.now.bind(g.performance)
        } catch(e) {
            p.logger.debug("Unable to use Performance API on this environment"),
            i = g.Date.now
        }
        var v = function() {
            function e(e, t, r, i) {
                this.observer = e,
                this.typeSupported = t,
                this.config = r,
                this.vendor = i
            }
            return e.prototype.destroy = function() {
                var e = this.demuxer;
                e && e.destroy()
            },
            e.prototype.push = function(e, t, r, n, s, l, u, d, f, c, h, p) {
                var g = this;
                if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
                    var v = this.decrypter;
                    null == v && (v = this.decrypter = new o.
                default(this.observer, this.config));
                    var y = i();
                    v.decrypt(e, t.key.buffer, t.iv.buffer,
                    function(e) {
                        var o = i();
                        g.observer.trigger(a.
                    default.FRAG_DECRYPTED, {
                            stats: {
                                tstart: y,
                                tdecrypt: o
                            }
                        }),
                        g.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), n, s, l, u, d, f, c, h, p)
                    })
                } else this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), n, s, l, u, d, f, c, h, p)
            },
            e.prototype.pushDecrypted = function(e, t, r, i, o, h, p, g, v, y, m, E) {
                var _ = this.demuxer;
                if (!_ || (p || g) && !this.probe(e)) {
                    for (var T = this.observer,
                    S = this.typeSupported,
                    b = this.config,
                    A = [{
                        demux: u.
                    default,
                        remux: f.
                    default
                    },
                    {
                        demux: l.
                    default,
                        remux: c.
                    default
                    },
                    {
                        demux: s.
                    default,
                        remux: f.
                    default
                    },
                    {
                        demux: d.
                    default,
                        remux: f.
                    default
                    }], R = 0, D = A.length; R < D; R++) {
                        var L = A[R],
                        w = L.demux.probe;
                        if (w(e)) {
                            var O = this.remuxer = new L.remux(T, b, S, this.vendor);
                            _ = new L.demux(T, O, b, S),
                            this.probe = w;
                            break
                        }
                    }
                    if (!_) return void T.trigger(a.
                default.ERROR, {
                        type: n.ErrorTypes.MEDIA_ERROR,
                        details: n.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: !0,
                        reason: "no demux matching with content found"
                    });
                    this.demuxer = _
                }
                var I = this.remuxer; (p || g) && (_.resetInitSegment(r, i, o, y), I.resetInitSegment()),
                p && (_.resetTimeStamp(E), I.resetTimeStamp(E)),
                "function" == typeof _.setDecryptData && _.setDecryptData(t),
                _.append(e, h, v, m)
            },
            e
        } ();
        t.
    default = v
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(0),
        a = r(3),
        n = r(1);
        function o(e, t, r, o) {
            var s, l, u, d, f, c = navigator.userAgent.toLowerCase(),
            h = o,
            p = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
            if (s = 1 + ((192 & t[r + 2]) >>> 6), !((l = (60 & t[r + 2]) >>> 2) > p.length - 1)) return d = (1 & t[r + 2]) << 2,
            d |= (192 & t[r + 3]) >>> 6,
            i.logger.log("manifest codec:" + o + ",ADTS data:type:" + s + ",sampleingIndex:" + l + "[" + p[l] + "Hz],channelConfig:" + d),
            /firefox/i.test(c) ? l >= 6 ? (s = 5, f = new Array(4), u = l - 3) : (s = 2, f = new Array(2), u = l) : -1 !== c.indexOf("android") ? (s = 2, f = new Array(2), u = l) : (s = 5, f = new Array(4), o && ( - 1 !== o.indexOf("mp4a.40.29") || -1 !== o.indexOf("mp4a.40.5")) || !o && l >= 6 ? u = l - 3 : ((o && -1 !== o.indexOf("mp4a.40.2") && (l >= 6 && 1 === d || /vivaldi/i.test(c)) || !o && 1 === d) && (s = 2, f = new Array(2)), u = l)),
            f[0] = s << 3,
            f[0] |= (14 & l) >> 1,
            f[1] |= (1 & l) << 7,
            f[1] |= d << 3,
            5 === s && (f[1] |= (14 & u) >> 1, f[2] = (1 & u) << 7, f[2] |= 8, f[3] = 0),
            {
                config: f,
                samplerate: p[l],
                channelCount: d,
                codec: "mp4a.40." + s,
                manifestCodec: h
            };
            e.trigger(n.
        default.ERROR, {
                type: a.ErrorTypes.MEDIA_ERROR,
                details: a.ErrorDetails.FRAG_PARSING_ERROR,
                fatal: !0,
                reason: "invalid ADTS sampling index:" + l
            })
        }
        function s(e, t) {
            return 255 === e[t] && 240 == (246 & e[t + 1])
        }
        function l(e, t) {
            return 1 & e[t + 1] ? 7 : 9
        }
        function u(e, t) {
            return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
        }
        function d(e) {
            return 9216e4 / e
        }
        function f(e, t, r, i, a) {
            var n, o, s = e.length;
            if (n = l(e, t), o = u(e, t), (o -= n) > 0 && t + n + o <= s) return {
                headerLength: n,
                frameLength: o,
                stamp: r + i * a
            }
        }
        t.getAudioConfig = o,
        t.isHeaderPattern = s,
        t.getHeaderLength = l,
        t.getFullFrameLength = u,
        t.isHeader = function(e, t) {
            return !! (t + 1 < e.length && s(e, t))
        },
        t.probe = function(e, t) {
            if (t + 1 < e.length && s(e, t)) {
                var r = l(e, t);
                t + 5 < e.length && (r = u(e, t));
                var i = t + r;
                if (i === e.length || i + 1 < e.length && s(e, i)) return ! 0
            }
            return ! 1
        },
        t.initTrackConfig = function(e, t, r, a, n) {
            if (!e.samplerate) {
                var s = o(t, r, a, n);
                e.config = s.config,
                e.samplerate = s.samplerate,
                e.channelCount = s.channelCount,
                e.codec = s.codec,
                e.manifestCodec = s.manifestCodec,
                i.logger.log("parsed codec:" + e.codec + ",rate:" + s.samplerate + ",nb channel:" + s.channelCount)
            }
        },
        t.getFrameDuration = d,
        t.parseFrameHeader = f,
        t.appendFrame = function(e, t, r, i, a) {
            var n = f(t, r, i, a, d(e.samplerate));
            if (n) {
                var o = n.stamp,
                s = n.headerLength,
                l = n.frameLength,
                u = {
                    unit: t.subarray(r + s, r + s + l),
                    pts: o,
                    dts: o
                };
                return e.samples.push(u),
                e.len += l,
                {
                    sample: u,
                    length: l + s
                }
            }
        }
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
            BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
            SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
            SamplesCoefficients: [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
            BytesInSlot: [0, 1, 1, 4],
            appendFrame: function(e, t, r, i, a) {
                if (! (r + 24 > t.length)) {
                    var n = this.parseHeader(t, r);
                    if (n && r + n.frameLength <= t.length) {
                        var o = i + a * (9e4 * n.samplesPerFrame / n.sampleRate),
                        s = {
                            unit: t.subarray(r, r + n.frameLength),
                            pts: o,
                            dts: o
                        };
                        return e.config = [],
                        e.channelCount = n.channelCount,
                        e.samplerate = n.sampleRate,
                        e.samples.push(s),
                        e.len += n.frameLength,
                        {
                            sample: s,
                            length: n.frameLength
                        }
                    }
                }
            },
            parseHeader: function(e, t) {
                var r = e[t + 1] >> 3 & 3,
                a = e[t + 1] >> 1 & 3,
                n = e[t + 2] >> 4 & 15,
                o = e[t + 2] >> 2 & 3,
                s = e[t + 2] >> 1 & 1;
                if (1 !== r && 0 !== n && 15 !== n && 3 !== o) {
                    var l = 3 === r ? 3 - a: 3 === a ? 3 : 4,
                    u = 1e3 * i.BitratesMap[14 * l + n - 1],
                    d = 3 === r ? 0 : 2 === r ? 1 : 2,
                    f = i.SamplingRateMap[3 * d + o],
                    c = e[t + 3] >> 6 == 3 ? 1 : 2,
                    h = i.SamplesCoefficients[r][a],
                    p = i.BytesInSlot[a],
                    g = 8 * h * p;
                    return {
                        sampleRate: f,
                        channelCount: c,
                        frameLength: parseInt(h * u / f + s, 10) * p,
                        samplesPerFrame: g
                    }
                }
            },
            isHeaderPattern: function(e, t) {
                return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
            },
            isHeader: function(e, t) {
                return !! (t + 1 < e.length && this.isHeaderPattern(e, t))
            },
            probe: function(e, t) {
                if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
                    var r = this.parseHeader(e, t),
                    i = 4;
                    r && r.frameLength && (i = r.frameLength);
                    var a = t + i;
                    if (a === e.length || a + 1 < e.length && this.isHeaderPattern(e, a)) return ! 0
                }
                return ! 1
            }
        };
        t.
    default = i
    },
    function(e, t, r) {
        "use strict";
        var i = this && this.__extends ||
        function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(e, t) {
                e.__proto__ = t
            } ||
            function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function i() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        } ();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return i(t, e),
            t.prototype.trigger = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                this.emit.apply(this, [e, e].concat(t))
            },
            t
        } (r(51).EventEmitter);
        t.Observer = a
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.
    default = {
            toString: function(e) {
                for (var t = "",
                r = e.length,
                i = 0; i < r; i++) t += "[" + e.start(i).toFixed(3) + "," + e.end(i).toFixed(3) + "]";
                return t
            }
        }
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(10),
            a = r(0);
            function n(e, t) {
                for (var r = null,
                i = 0; i < e.length; i += 1) {
                    var a = e[i];
                    if (a && a.cc === t) {
                        r = a;
                        break
                    }
                }
                return r
            }
            function o(e, t, r) {
                var i = !1;
                return t && t.details && r && (r.endCC > r.startCC || e && e.cc < r.startCC) && (i = !0),
                i
            }
            function s(e, t) {
                var r = e.fragments,
                i = t.fragments;
                if (i.length && r.length) {
                    var o = n(r, i[0].cc);
                    if (o && (!o || o.startPTS)) return o;
                    a.logger.log("No frag in previous level to align on")
                } else a.logger.log("No fragments to align")
            }
            function l(e, t) {
                t.fragments.forEach(function(t) {
                    if (t) {
                        var r = t.start + e;
                        t.start = t.startPTS = r,
                        t.endPTS = r + t.duration
                    }
                }),
                t.PTSKnown = !0
            }
            function u(e, t, r) {
                if (o(e, r, t)) {
                    var i = s(r.details, t);
                    i && (a.logger.log("Adjusting PTS using last level due to CC increase within current level"), l(i.start, t))
                }
            }
            function d(t, r) {
                if (r && r.fragments.length) {
                    if (!t.hasProgramDateTime || !r.hasProgramDateTime) return;
                    var i = r.fragments[0].programDateTime,
                    n = (t.fragments[0].programDateTime - i) / 1e3 + r.fragments[0].start;
                    e.isFinite(n) && (a.logger.log("adjusting PTS using programDateTime delta, sliding:" + n.toFixed(3)), l(n, t))
                }
            }
            t.findFirstFragWithCC = n,
            t.findFragWithCC = function(e, t) {
                return i.
            default.search(e,
                function(e) {
                    return e.cc < t ? 1 : e.cc > t ? -1 : 0
                })
            },
            t.shouldAlignOnDiscontinuities = o,
            t.findDiscontinuousReferenceFrag = s,
            t.adjustPts = l,
            t.alignStream = function(e, t, r) {
                u(e, r, t),
                !r.PTSKnown && t && d(r, t.details)
            },
            t.alignDiscontinuities = u,
            t.alignPDT = d
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(10);
            function a(e, t, r) {
                void 0 === e && (e = 0),
                void 0 === t && (t = 0);
                var i = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS: 0));
                return r.start + r.duration - i <= e ? 1 : r.start - i > e && r.start ? -1 : 0
            }
            function n(e, t, r) {
                var i = 1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS: 0));
                return r.endProgramDateTime - i > e
            }
            t.findFragmentByPDT = function(t, r, i) {
                if (!Array.isArray(t) || !t.length || !e.isFinite(r)) return null;
                if (r < t[0].programDateTime) return null;
                if (r >= t[t.length - 1].endProgramDateTime) return null;
                i = i || 0;
                for (var a = 0; a < t.length; ++a) {
                    var o = t[a];
                    if (n(r, i, o)) return o
                }
                return null
            },
            t.findFragmentByPTS = function(e, t, r, n) {
                void 0 === r && (r = 0),
                void 0 === n && (n = 0);
                var o = e ? t[e.sn - t[0].sn + 1] : null;
                return o && !a(r, n, o) ? o: i.
            default.search(t, a.bind(null, r, n))
            },
            t.fragmentWithinToleranceTest = a,
            t.pdtWithinToleranceTest = n
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict";
        var i = this && this.__extends ||
        function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(e, t) {
                e.__proto__ = t
            } ||
            function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function i() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        } ();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function(e) {
            function t(t) {
                for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                var a = e.apply(this, [t].concat(r)) || this;
                return a._tickInterval = null,
                a._tickTimer = null,
                a._tickCallCount = 0,
                a._boundTick = a.tick.bind(a),
                a
            }
            return i(t, e),
            t.prototype.onHandlerDestroying = function() {
                this.clearNextTick(),
                this.clearInterval()
            },
            t.prototype.hasInterval = function() {
                return !! this._tickInterval
            },
            t.prototype.hasNextTick = function() {
                return !! this._tickTimer
            },
            t.prototype.setInterval = function(e) {
                return ! this._tickInterval && (this._tickInterval = setInterval(this._boundTick, e), !0)
            },
            t.prototype.clearInterval = function() {
                return !! this._tickInterval && (clearInterval(this._tickInterval), this._tickInterval = null, !0)
            },
            t.prototype.clearNextTick = function() {
                return !! this._tickTimer && (clearTimeout(this._tickTimer), this._tickTimer = null, !0)
            },
            t.prototype.tick = function() {
                this._tickCallCount++,
                1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && (this.clearNextTick(), this._tickTimer = setTimeout(this._boundTick, 0)), this._tickCallCount = 0)
            },
            t.prototype.doTick = function() {},
            t
        } (r(4).
    default);
        t.
    default = a
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.sendAddTrackEvent = function(e, t) {
            var r = null;
            try {
                r = new window.Event("addtrack")
            } catch(e) { (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
            }
            r.track = e,
            t.dispatchEvent(r)
        },
        t.clearCurrentCues = function(e) {
            if (e && e.cues) for (; e.cues.length > 0;) e.removeCue(e.cues[0])
        }
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(69),
        a = function() {
            return {
                decode: function(e) {
                    if (!e) return "";
                    if ("string" != typeof e) throw new Error("Error - expected string data.");
                    return decodeURIComponent(encodeURIComponent(e))
                }
            }
        };
        function n() {
            this.window = window,
            this.state = "INITIAL",
            this.buffer = "",
            this.decoder = new a,
            this.regionList = []
        }
        function o() {
            this.values = Object.create(null)
        }
        function s(e, t, r, i) {
            var a = i ? e.split(i) : [e];
            for (var n in a) if ("string" == typeof a[n]) {
                var o = a[n].split(r);
                if (2 === o.length) t(o[0], o[1])
            }
        }
        o.prototype = {
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
                for (var i = 0; i < r.length; ++i) if (t === r[i]) {
                    this.set(e, t);
                    break
                }
            },
            integer: function(e, t) { / ^-?\d + $ / .test(t) && this.set(e, parseInt(t, 10))
            },
            percent: function(e, t) {
                return !! (t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t), !0)
            }
        };
        var l = new i.
    default(0, 0, 0),
        u = "middle" === l.align ? "middle": "center";
        function d(e, t, r) {
            var i = e;
            function a() {
                var t = function(e) {
                    function t(e, t, r, i) {
                        return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | i) / 1e3
                    }
                    var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                    return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null
                } (e);
                if (null === t) throw new Error("Malformed timestamp: " + i);
                return e = e.replace(/^[^\sa-zA-Z-]+/, ""),
                t
            }
            function n() {
                e = e.replace(/^\s+/, "")
            }
            if (n(), t.startTime = a(), n(), "--\x3e" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
            e = e.substr(3),
            n(),
            t.endTime = a(),
            n(),
            function(e, t) {
                var i = new o;
                s(e,
                function(e, t) {
                    switch (e) {
                    case "region":
                        for (var a = r.length - 1; a >= 0; a--) if (r[a].id === t) {
                            i.set(e, r[a].region);
                            break
                        }
                        break;
                    case "vertical":
                        i.alt(e, t, ["rl", "lr"]);
                        break;
                    case "line":
                        var n = t.split(","),
                        o = n[0];
                        i.integer(e, o),
                        i.percent(e, o) && i.set("snapToLines", !1),
                        i.alt(e, o, ["auto"]),
                        2 === n.length && i.alt("lineAlign", n[1], ["start", u, "end"]);
                        break;
                    case "position":
                        n = t.split(","),
                        i.percent(e, n[0]),
                        2 === n.length && i.alt("positionAlign", n[1], ["start", u, "end", "line-left", "line-right", "auto"]);
                        break;
                    case "size":
                        i.percent(e, t);
                        break;
                    case "align":
                        i.alt(e, t, ["start", u, "end", "left", "right"])
                    }
                },
                /:/, /\s/),
                t.region = i.get("region", null),
                t.vertical = i.get("vertical", "");
                var a = i.get("line", "auto");
                "auto" === a && -1 === l.line && (a = -1),
                t.line = a,
                t.lineAlign = i.get("lineAlign", "start"),
                t.snapToLines = i.get("snapToLines", !0),
                t.size = i.get("size", 100),
                t.align = i.get("align", u);
                var n = i.get("position", "auto");
                "auto" === n && 50 === l.position && (n = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50),
                t.position = n
            } (e, t)
        }
        function f(e) {
            return e.replace(/<br(?: \/)?>/gi, "\n")
        }
        t.fixLineBreaks = f,
        n.prototype = {
            parse: function(e) {
                var t = this;
                function r() {
                    var e = t.buffer,
                    r = 0;
                    for (e = f(e); r < e.length && "\r" !== e[r] && "\n" !== e[r];)++r;
                    var i = e.substr(0, r);
                    return "\r" === e[r] && ++r,
                    "\n" === e[r] && ++r,
                    t.buffer = e.substr(r),
                    i
                }
                function a(e) {
                    s(e,
                    function(e, t) {
                        e
                    },
                    /:/)
                }
                e && (t.buffer += t.decoder.decode(e, {
                    stream: !0
                }));
                try {
                    var n = void 0;
                    if ("INITIAL" === t.state) {
                        if (!/\r\n|\n/.test(t.buffer)) return this;
                        var o = (n = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                        if (!o || !o[0]) throw new Error("Malformed WebVTT signature.");
                        t.state = "HEADER"
                    }
                    for (var l = !1; t.buffer;) {
                        if (!/\r\n|\n/.test(t.buffer)) return this;
                        switch (l ? l = !1 : n = r(), t.state) {
                        case "HEADER":
                            /:/.test(n) ? a(n) : n || (t.state = "ID");
                            continue;
                        case "NOTE":
                            n || (t.state = "ID");
                            continue;
                        case "ID":
                            if (/^NOTE($|[ \t])/.test(n)) {
                                t.state = "NOTE";
                                break
                            }
                            if (!n) continue;
                            if (t.cue = new i.
                        default(0, 0, ""), t.state = "CUE", -1 === n.indexOf("--\x3e")) {
                                t.cue.id = n;
                                continue
                            }
                        case "CUE":
                            try {
                                d(n, t.cue, t.regionList)
                            } catch(e) {
                                t.cue = null,
                                t.state = "BADCUE";
                                continue
                            }
                            t.state = "CUETEXT";
                            continue;
                        case "CUETEXT":
                            var u = -1 !== n.indexOf("--\x3e");
                            if (!n || u && (l = !0)) {
                                t.oncue && t.oncue(t.cue),
                                t.cue = null,
                                t.state = "ID";
                                continue
                            }
                            t.cue.text && (t.cue.text += "\n"),
                            t.cue.text += n;
                            continue;
                        case "BADCUE":
                            n || (t.state = "ID");
                            continue
                        }
                    }
                } catch(e) {
                    "CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue),
                    t.cue = null,
                    t.state = "INITIAL" === t.state ? "BADWEBVTT": "BADCUE"
                }
                return this
            },
            flush: function() {
                try {
                    if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new Error("Malformed WebVTT signature.")
                } catch(e) {
                    throw e
                }
                return this.onflush && this.onflush(),
                this
            }
        },
        t.
    default = n
    },
    function(e, t, r) {
        "use strict";
        var i = this && this.__extends ||
        function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(e, t) {
                e.__proto__ = t
            } ||
            function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function i() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        } ();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(9),
        n = r(3),
        o = r(16),
        s = r(35),
        l = r(36),
        u = r(7),
        d = r(37),
        f = r(55),
        c = r(56),
        h = r(57),
        p = r(0),
        g = r(58),
        v = r(1),
        y = function(e) {
            function t(r) {
                void 0 === r && (r = {});
                var i = e.call(this) || this,
                a = t.DefaultConfig;
                if ((r.liveSyncDurationCount || r.liveMaxLatencyDurationCount) && (r.liveSyncDuration || r.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                for (var n in a) n in r || (r[n] = a[n]);
                if (void 0 !== r.liveMaxLatencyDurationCount && r.liveMaxLatencyDurationCount <= r.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                if (void 0 !== r.liveMaxLatencyDuration && (r.liveMaxLatencyDuration <= r.liveSyncDuration || void 0 === r.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                p.enableLogs(r.debug),
                i.config = r,
                i._autoLevelCapping = -1;
                var h = i.abrController = new r.abrController(i),
                g = new r.bufferController(i),
                v = new r.capLevelController(i),
                y = new r.fpsController(i),
                m = new o.
            default(i),
                E = new s.
            default(i),
                _ = new l.
            default(i),
                T = new c.
            default(i),
                S = i.levelController = new f.
            default(i),
                b = new u.FragmentTracker(i),
                A = [S, i.streamController = new d.
            default(i, b)],
                R = r.audioStreamController;
                R && A.push(new R(i, b)),
                i.networkControllers = A;
                var D = [m, E, _, h, g, v, y, T, b];
                if (R = r.audioTrackController) {
                    var L = new R(i);
                    i.audioTrackController = L,
                    D.push(L)
                }
                if (R = r.subtitleTrackController) {
                    var w = new R(i);
                    i.subtitleTrackController = w,
                    A.push(w)
                }
                if (R = r.emeController) {
                    var O = new R(i);
                    i.emeController = O,
                    D.push(O)
                }
                return (R = r.subtitleStreamController) && A.push(new R(i, b)),
                (R = r.timelineController) && D.push(new R(i)),
                i.coreComponents = D,
                i
            }
            return i(t, e),
            Object.defineProperty(t, "version", {
                get: function() {
                    return "0.12.4"
                },
                enumerable: !0,
                configurable: !0
            }),
            t.isSupported = function() {
                return h.isSupported()
            },
            Object.defineProperty(t, "Events", {
                get: function() {
                    return v.
                default
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t, "ErrorTypes", {
                get: function() {
                    return n.ErrorTypes
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t, "ErrorDetails", {
                get: function() {
                    return n.ErrorDetails
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t, "DefaultConfig", {
                get: function() {
                    return t.defaultConfig ? t.defaultConfig: g.hlsDefaultConfig
                },
                set: function(e) {
                    t.defaultConfig = e
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.destroy = function() {
                p.logger.log("destroy"),
                this.trigger(v.
            default.DESTROYING),
                this.detachMedia(),
                this.coreComponents.concat(this.networkControllers).forEach(function(e) {
                    e.destroy()
                }),
                this.url = null,
                this.removeAllListeners(),
                this._autoLevelCapping = -1
            },
            t.prototype.attachMedia = function(e) {
                p.logger.log("attachMedia"),
                this.media = e,
                this.trigger(v.
            default.MEDIA_ATTACHING, {
                    media: e
                })
            },
            t.prototype.detachMedia = function() {
                p.logger.log("detachMedia"),
                this.trigger(v.
            default.MEDIA_DETACHING),
                this.media = null
            },
            t.prototype.loadSource = function(e) {
                e = a.buildAbsoluteURL(window.location.href, e, {
                    alwaysNormalize: !0
                }),
                p.logger.log("loadSource:" + e),
                this.url = e,
                this.trigger(v.
            default.MANIFEST_LOADING, {
                    url: e
                })
            },
            t.prototype.startLoad = function(e) {
                void 0 === e && (e = -1),
                p.logger.log("startLoad(" + e + ")"),
                this.networkControllers.forEach(function(t) {
                    t.startLoad(e)
                })
            },
            t.prototype.stopLoad = function() {
                p.logger.log("stopLoad"),
                this.networkControllers.forEach(function(e) {
                    e.stopLoad()
                })
            },
            t.prototype.swapAudioCodec = function() {
                p.logger.log("swapAudioCodec"),
                this.streamController.swapAudioCodec()
            },
            t.prototype.recoverMediaError = function() {
                p.logger.log("recoverMediaError");
                var e = this.media;
                this.detachMedia(),
                this.attachMedia(e)
            },
            Object.defineProperty(t.prototype, "levels", {
                get: function() {
                    return this.levelController.levels
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "currentLevel", {
                get: function() {
                    return this.streamController.currentLevel
                },
                set: function(e) {
                    p.logger.log("set currentLevel:" + e),
                    this.loadLevel = e,
                    this.streamController.immediateLevelSwitch()
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "nextLevel", {
                get: function() {
                    return this.streamController.nextLevel
                },
                set: function(e) {
                    p.logger.log("set nextLevel:" + e),
                    this.levelController.manualLevel = e,
                    this.streamController.nextLevelSwitch()
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "loadLevel", {
                get: function() {
                    return this.levelController.level
                },
                set: function(e) {
                    p.logger.log("set loadLevel:" + e),
                    this.levelController.manualLevel = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "nextLoadLevel", {
                get: function() {
                    return this.levelController.nextLoadLevel
                },
                set: function(e) {
                    this.levelController.nextLoadLevel = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "firstLevel", {
                get: function() {
                    return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                },
                set: function(e) {
                    p.logger.log("set firstLevel:" + e),
                    this.levelController.firstLevel = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "startLevel", {
                get: function() {
                    return this.levelController.startLevel
                },
                set: function(e) {
                    p.logger.log("set startLevel:" + e); - 1 !== e && (e = Math.max(e, this.minAutoLevel)),
                    this.levelController.startLevel = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "autoLevelCapping", {
                get: function() {
                    return this._autoLevelCapping
                },
                set: function(e) {
                    p.logger.log("set autoLevelCapping:" + e),
                    this._autoLevelCapping = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "autoLevelEnabled", {
                get: function() {
                    return - 1 === this.levelController.manualLevel
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "manualLevel", {
                get: function() {
                    return this.levelController.manualLevel
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "minAutoLevel", {
                get: function() {
                    for (var e = this.levels,
                    t = this.config.minAutoBitrate,
                    r = e ? e.length: 0, i = 0; i < r; i++) {
                        if ((e[i].realBitrate ? Math.max(e[i].realBitrate, e[i].bitrate) : e[i].bitrate) > t) return i
                    }
                    return 0
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "maxAutoLevel", {
                get: function() {
                    var e = this.levels,
                    t = this.autoLevelCapping;
                    return - 1 === t && e && e.length ? e.length - 1 : t
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "nextAutoLevel", {
                get: function() {
                    return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
                },
                set: function(e) {
                    this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "audioTracks", {
                get: function() {
                    var e = this.audioTrackController;
                    return e ? e.audioTracks: []
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "audioTrack", {
                get: function() {
                    var e = this.audioTrackController;
                    return e ? e.audioTrack: -1
                },
                set: function(e) {
                    var t = this.audioTrackController;
                    t && (t.audioTrack = e)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "liveSyncPosition", {
                get: function() {
                    return this.streamController.liveSyncPosition
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "subtitleTracks", {
                get: function() {
                    var e = this.subtitleTrackController;
                    return e ? e.subtitleTracks: []
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "subtitleTrack", {
                get: function() {
                    var e = this.subtitleTrackController;
                    return e ? e.subtitleTrack: -1
                },
                set: function(e) {
                    var t = this.subtitleTrackController;
                    t && (t.subtitleTrack = e)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "subtitleDisplay", {
                get: function() {
                    var e = this.subtitleTrackController;
                    return !! e && e.subtitleDisplay
                },
                set: function(e) {
                    var t = this.subtitleTrackController;
                    t && (t.subtitleDisplay = e)
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        } (r(24).Observer);
        t.
    default = y
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(9),
            a = r(12),
            n = r(33),
            o = r(18),
            s = r(34),
            l = r(0),
            u = r(19),
            d = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
            f = /#EXT-X-MEDIA:(.*)/g,
            c = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
            h = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
            p = /\.(mp4|m4s|m4v|m4a)$/i,
            g = function() {
                function t() {}
                return t.findGroup = function(e, t) {
                    if (!e) return null;
                    for (var r = null,
                    i = 0; i < e.length; i++) {
                        var a = e[i];
                        a.id === t && (r = a)
                    }
                    return r
                },
                t.convertAVC1ToAVCOTI = function(e) {
                    var t, r = e.split(".");
                    return r.length > 2 ? (t = r.shift() + ".", t += parseInt(r.shift()).toString(16), t += ("000" + parseInt(r.shift()).toString(16)).substr( - 4)) : t = e,
                    t
                },
                t.resolve = function(e, t) {
                    return i.buildAbsoluteURL(t, e, {
                        alwaysNormalize: !0
                    })
                },
                t.parseMasterPlaylist = function(e, r) {
                    var i, a = [];
                    function n(e, t) { ["video", "audio"].forEach(function(r) {
                            var i = e.filter(function(e) {
                                return u.isCodecType(e, r)
                            });
                            if (i.length) {
                                var a = i.filter(function(e) {
                                    return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
                                });
                                t[r + "Codec"] = a.length > 0 ? a[0] : i[0],
                                e = e.filter(function(e) {
                                    return - 1 === i.indexOf(e)
                                })
                            }
                        }),
                        t.unknownCodecs = e
                    }
                    for (d.lastIndex = 0; null != (i = d.exec(e));) {
                        var o = {},
                        l = o.attrs = new s.
                    default(i[1]);
                        o.url = t.resolve(i[2], r);
                        var f = l.decimalResolution("RESOLUTION");
                        f && (o.width = f.width, o.height = f.height),
                        o.bitrate = l.decimalInteger("AVERAGE-BANDWIDTH") || l.decimalInteger("BANDWIDTH"),
                        o.name = l.NAME,
                        n([].concat((l.CODECS || "").split(/[ ,]+/)), o),
                        o.videoCodec && -1 !== o.videoCodec.indexOf("avc1") && (o.videoCodec = t.convertAVC1ToAVCOTI(o.videoCodec)),
                        a.push(o)
                    }
                    return a
                },
                t.parseMasterPlaylistMedia = function(e, r, i, a) {
                    var n;
                    void 0 === a && (a = []);
                    var o = [],
                    l = 0;
                    for (f.lastIndex = 0; null !== (n = f.exec(e));) {
                        var u = {},
                        d = new s.
                    default(n[1]);
                        if (d.TYPE === i) {
                            if (u.groupId = d["GROUP-ID"], u.name = d.NAME, u.type = i, u.
                        default = "YES" === d.DEFAULT, u.autoselect = "YES" === d.AUTOSELECT, u.forced = "YES" === d.FORCED, d.URI && (u.url = t.resolve(d.URI, r)), u.lang = d.LANGUAGE, u.name || (u.name = u.lang), a.length) {
                                var c = t.findGroup(a, u.groupId);
                                u.audioCodec = c ? c.codec: a[0].codec
                            }
                            u.id = l++,
                            o.push(u)
                        }
                    }
                    return o
                },
                t.parseLevelPlaylist = function(t, r, i, u, d) {
                    var f, g, y = 0,
                    m = 0,
                    E = new n.
                default(r),
                    _ = new o.
                default,
                    T = 0,
                    S = null,
                    b = new a.
                default,
                    A = null;
                    for (c.lastIndex = 0; null !== (f = c.exec(t));) {
                        var R = f[1];
                        if (R) {
                            b.duration = parseFloat(R);
                            var D = (" " + f[2]).slice(1);
                            b.title = D || null,
                            b.tagList.push(D ? ["INF", R, D] : ["INF", R])
                        } else if (f[3]) {
                            if (e.isFinite(b.duration)) {
                                var L = y++;
                                b.type = u,
                                b.start = m,
                                b.levelkey = _,
                                b.sn = L,
                                b.level = i,
                                b.cc = T,
                                b.urlId = d,
                                b.baseurl = r,
                                b.relurl = (" " + f[3]).slice(1),
                                v(b, S),
                                E.fragments.push(b),
                                S = b,
                                m += b.duration,
                                b = new a.
                            default
                            }
                        } else if (f[4]) {
                            if (b.rawByteRange = (" " + f[4]).slice(1), S) {
                                var w = S.byteRangeEndOffset;
                                w && (b.lastByteRangeEndOffset = w)
                            }
                        } else if (f[5]) b.rawProgramDateTime = (" " + f[5]).slice(1),
                        b.tagList.push(["PROGRAM-DATE-TIME", b.rawProgramDateTime]),
                        null === A && (A = E.fragments.length);
                        else {
                            for (f = f[0].match(h), g = 1; g < f.length && void 0 === f[g]; g++);
                            var O = (" " + f[g + 1]).slice(1),
                            I = (" " + f[g + 2]).slice(1);
                            switch (f[g]) {
                            case "#":
                                b.tagList.push(I ? [O, I] : [O]);
                                break;
                            case "PLAYLIST-TYPE":
                                E.type = O.toUpperCase();
                                break;
                            case "MEDIA-SEQUENCE":
                                y = E.startSN = parseInt(O);
                                break;
                            case "TARGETDURATION":
                                E.targetduration = parseFloat(O);
                                break;
                            case "VERSION":
                                E.version = parseInt(O);
                                break;
                            case "EXTM3U":
                                break;
                            case "ENDLIST":
                                E.live = !1;
                                break;
                            case "DIS":
                                T++,
                                b.tagList.push(["DIS"]);
                                break;
                            case "DISCONTINUITY-SEQ":
                                T = parseInt(O);
                                break;
                            case "KEY":
                                var P = O,
                                k = new s.
                            default(P),
                                C = k.enumeratedString("METHOD"),
                                F = k.URI,
                                x = k.hexadecimalInteger("IV");
                                C && (_ = new o.
                            default, F && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(C) >= 0 && (_.method = C, _.baseuri = r, _.reluri = F, _.key = null, _.iv = x));
                                break;
                            case "START":
                                var M = O,
                                N = new s.
                            default(M).decimalFloatingPoint("TIME-OFFSET");
                                e.isFinite(N) && (E.startTimeOffset = N);
                                break;
                            case "MAP":
                                var U = new s.
                            default(O);
                                b.relurl = U.URI,
                                b.rawByteRange = U.BYTERANGE,
                                b.baseurl = r,
                                b.level = i,
                                b.type = u,
                                b.sn = "initSegment",
                                E.initSegment = b,
                                (b = new a.
                            default).rawProgramDateTime = E.initSegment.rawProgramDateTime;
                                break;
                            default:
                                l.logger.warn("line parsed but not handled: " + f)
                            }
                        }
                    }
                    return (b = S) && !b.relurl && (E.fragments.pop(), m -= b.duration),
                    E.totalduration = m,
                    E.averagetargetduration = m / E.fragments.length,
                    E.endSN = y - 1,
                    E.startCC = E.fragments[0] ? E.fragments[0].cc: 0,
                    E.endCC = T,
                    !E.initSegment && E.fragments.length && E.fragments.every(function(e) {
                        return p.test(e.relurl)
                    }) && (l.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (b = new a.
                default).relurl = E.fragments[0].relurl, b.baseurl = r, b.level = i, b.type = u, b.sn = "initSegment", E.initSegment = b, E.needSidxRanges = !0),
                    A &&
                    function(e, t) {
                        for (var r = e[t], i = t - 1; i >= 0; i--) {
                            var a = e[i];
                            a.programDateTime = r.programDateTime - 1e3 * a.duration,
                            r = a
                        }
                    } (E.fragments, A),
                    E
                },
                t
            } ();
            function v(t, r) {
                t.rawProgramDateTime ? t.programDateTime = Date.parse(t.rawProgramDateTime) : r && r.programDateTime && (t.programDateTime = r.endProgramDateTime),
                e.isFinite(t.programDateTime) || (t.programDateTime = null, t.rawProgramDateTime = null)
            }
            t.
        default = g
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function() {
                function t(e) {
                    this.endCC = 0,
                    this.endSN = 0,
                    this.fragments = [],
                    this.initSegment = null,
                    this.live = !0,
                    this.needSidxRanges = !1,
                    this.startCC = 0,
                    this.startSN = 0,
                    this.startTimeOffset = null,
                    this.targetduration = 0,
                    this.totalduration = 0,
                    this.type = null,
                    this.url = e,
                    this.version = null
                }
                return Object.defineProperty(t.prototype, "hasProgramDateTime", {
                    get: function() {
                        return ! (!this.fragments[0] || !e.isFinite(this.fragments[0].programDateTime))
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t
            } ();
            t.
        default = r
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = /^(\d+)x(\d+)$/,
            i = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
            a = function() {
                function t(e) {
                    for (var r in "string" == typeof e && (e = t.parseAttrList(e)), e) e.hasOwnProperty(r) && (this[r] = e[r])
                }
                return t.prototype.decimalInteger = function(t) {
                    var r = parseInt(this[t], 10);
                    return r > e.MAX_SAFE_INTEGER ? 1 / 0 : r
                },
                t.prototype.hexadecimalInteger = function(e) {
                    if (this[e]) {
                        var t = (this[e] || "0x").slice(2);
                        t = (1 & t.length ? "0": "") + t;
                        for (var r = new Uint8Array(t.length / 2), i = 0; i < t.length / 2; i++) r[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16);
                        return r
                    }
                    return null
                },
                t.prototype.hexadecimalIntegerAsNumber = function(t) {
                    var r = parseInt(this[t], 16);
                    return r > e.MAX_SAFE_INTEGER ? 1 / 0 : r
                },
                t.prototype.decimalFloatingPoint = function(e) {
                    return parseFloat(this[e])
                },
                t.prototype.enumeratedString = function(e) {
                    return this[e]
                },
                t.prototype.decimalResolution = function(e) {
                    var t = r.exec(this[e]);
                    if (null !== t) return {
                        width: parseInt(t[1], 10),
                        height: parseInt(t[2], 10)
                    }
                },
                t.parseAttrList = function(e) {
                    var t, r = {};
                    for (i.lastIndex = 0; null !== (t = i.exec(e));) {
                        var a = t[2];
                        0 === a.indexOf('"') && a.lastIndexOf('"') === a.length - 1 && (a = a.slice(1, -1)),
                        r[t[1]] = a
                    }
                    return r
                },
                t
            } ();
            t.
        default = a
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            var i = this && this.__extends ||
            function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                function(e, t) {
                    e.__proto__ = t
                } ||
                function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return function(t, r) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, r),
                    t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
                }
            } ();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(1),
            n = r(4),
            o = r(3),
            s = r(0),
            l = function(t) {
                function r(e) {
                    var r = t.call(this, e, a.
                default.FRAG_LOADING) || this;
                    return r.loaders = {},
                    r
                }
                return i(r, t),
                r.prototype.destroy = function() {
                    var e = this.loaders;
                    for (var r in e) {
                        var i = e[r];
                        i && i.destroy()
                    }
                    this.loaders = {},
                    t.prototype.destroy.call(this)
                },
                r.prototype.onFragLoading = function(t) {
                    var r = t.frag,
                    i = r.type,
                    a = this.loaders,
                    n = this.hls.config,
                    o = n.fLoader,
                    l = n.loader;
                    r.loaded = 0;
                    var u, d, f, c = a[i];
                    c && (s.logger.warn("abort previous fragment loader for type: " + i), c.abort()),
                    c = a[i] = r.loader = n.fLoader ? new o(n) : new l(n),
                    u = {
                        url: r.url,
                        frag: r,
                        responseType: "arraybuffer",
                        progressData: !1
                    };
                    var h = r.byteRangeStartOffset,
                    p = r.byteRangeEndOffset;
                    e.isFinite(h) && e.isFinite(p) && (u.rangeStart = h, u.rangeEnd = p),
                    d = {
                        timeout: n.fragLoadingTimeOut,
                        maxRetry: 0,
                        retryDelay: 0,
                        maxRetryDelay: n.fragLoadingMaxRetryTimeout
                    },
                    f = {
                        onSuccess: this.loadsuccess.bind(this),
                        onError: this.loaderror.bind(this),
                        onTimeout: this.loadtimeout.bind(this),
                        onProgress: this.loadprogress.bind(this)
                    },
                    c.load(u, d, f)
                },
                r.prototype.loadsuccess = function(e, t, r, i) {
                    void 0 === i && (i = null);
                    var n = e.data,
                    o = r.frag;
                    o.loader = void 0,
                    this.loaders[o.type] = void 0,
                    this.hls.trigger(a.
                default.FRAG_LOADED, {
                        payload: n,
                        frag: o,
                        stats: t,
                        networkDetails: i
                    })
                },
                r.prototype.loaderror = function(e, t, r) {
                    void 0 === r && (r = null);
                    var i = t.frag,
                    n = i.loader;
                    n && n.abort(),
                    this.loaders[i.type] = void 0,
                    this.hls.trigger(a.
                default.ERROR, {
                        type: o.ErrorTypes.NETWORK_ERROR,
                        details: o.ErrorDetails.FRAG_LOAD_ERROR,
                        fatal: !1,
                        frag: t.frag,
                        response: e,
                        networkDetails: r
                    })
                },
                r.prototype.loadtimeout = function(e, t, r) {
                    void 0 === r && (r = null);
                    var i = t.frag,
                    n = i.loader;
                    n && n.abort(),
                    this.loaders[i.type] = void 0,
                    this.hls.trigger(a.
                default.ERROR, {
                        type: o.ErrorTypes.NETWORK_ERROR,
                        details: o.ErrorDetails.FRAG_LOAD_TIMEOUT,
                        fatal: !1,
                        frag: t.frag,
                        networkDetails: r
                    })
                },
                r.prototype.loadprogress = function(e, t, r, i) {
                    void 0 === i && (i = null);
                    var n = t.frag;
                    n.loaded = e.loaded,
                    this.hls.trigger(a.
                default.FRAG_LOAD_PROGRESS, {
                        frag: n,
                        stats: e,
                        networkDetails: i
                    })
                },
                r
            } (n.
        default);
            t.
        default = l
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict";
        var i = this && this.__extends ||
        function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(e, t) {
                e.__proto__ = t
            } ||
            function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function i() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        } ();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(1),
        n = r(4),
        o = r(3),
        s = r(0),
        l = function(e) {
            function t(t) {
                var r = e.call(this, t, a.
            default.KEY_LOADING) || this;
                return r.loaders = {},
                r.decryptkey = null,
                r.decrypturl = null,
                r
            }
            return i(t, e),
            t.prototype.destroy = function() {
                for (var e in this.loaders) {
                    var t = this.loaders[e];
                    t && t.destroy()
                }
                this.loaders = {},
                n.
            default.prototype.destroy.call(this)
            },
            t.prototype.onKeyLoading = function(e) {
                var t = e.frag,
                r = t.type,
                i = this.loaders[r],
                n = t.decryptdata,
                o = n.uri;
                if (o !== this.decrypturl || null === this.decryptkey) {
                    var l = this.hls.config;
                    i && (s.logger.warn("abort previous key loader for type:" + r), i.abort()),
                    t.loader = this.loaders[r] = new l.loader(l),
                    this.decrypturl = o,
                    this.decryptkey = null;
                    var u, d, f;
                    u = {
                        url: o,
                        frag: t,
                        responseType: "arraybuffer"
                    },
                    d = {
                        timeout: l.fragLoadingTimeOut,
                        maxRetry: 0,
                        retryDelay: l.fragLoadingRetryDelay,
                        maxRetryDelay: l.fragLoadingMaxRetryTimeout
                    },
                    f = {
                        onSuccess: this.loadsuccess.bind(this),
                        onError: this.loaderror.bind(this),
                        onTimeout: this.loadtimeout.bind(this)
                    },
                    t.loader.load(u, d, f)
                } else this.decryptkey && (n.key = this.decryptkey, this.hls.trigger(a.
            default.KEY_LOADED, {
                    frag: t
                }))
            },
            t.prototype.loadsuccess = function(e, t, r) {
                var i = r.frag;
                this.decryptkey = i.decryptdata.key = new Uint8Array(e.data),
                i.loader = void 0,
                this.loaders[i.type] = void 0,
                this.hls.trigger(a.
            default.KEY_LOADED, {
                    frag: i
                })
            },
            t.prototype.loaderror = function(e, t) {
                var r = t.frag,
                i = r.loader;
                i && i.abort(),
                this.loaders[t.type] = void 0,
                this.hls.trigger(a.
            default.ERROR, {
                    type: o.ErrorTypes.NETWORK_ERROR,
                    details: o.ErrorDetails.KEY_LOAD_ERROR,
                    fatal: !1,
                    frag: r,
                    response: e
                })
            },
            t.prototype.loadtimeout = function(e, t) {
                var r = t.frag,
                i = r.loader;
                i && i.abort(),
                this.loaders[t.type] = void 0,
                this.hls.trigger(a.
            default.ERROR, {
                    type: o.ErrorTypes.NETWORK_ERROR,
                    details: o.ErrorDetails.KEY_LOAD_TIMEOUT,
                    fatal: !1,
                    frag: r
                })
            },
            t
        } (n.
    default);
        t.
    default = l
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            var i = this && this.__extends ||
            function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                function(e, t) {
                    e.__proto__ = t
                } ||
                function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return function(t, r) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, r),
                    t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
                }
            } ();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(10),
            n = r(5),
            o = r(20),
            s = r(1),
            l = r(7),
            u = r(12),
            d = r(16),
            f = r(8),
            c = r(25),
            h = r(3),
            p = r(0),
            g = r(26),
            v = r(27),
            y = r(54),
            m = r(15),
            E = function(t) {
                function r(e, r) {
                    var i = t.call(this, e, s.
                default.MEDIA_ATTACHED, s.
                default.MEDIA_DETACHING, s.
                default.MANIFEST_LOADING, s.
                default.MANIFEST_PARSED, s.
                default.LEVEL_LOADED, s.
                default.KEY_LOADED, s.
                default.FRAG_LOADED, s.
                default.FRAG_LOAD_EMERGENCY_ABORTED, s.
                default.FRAG_PARSING_INIT_SEGMENT, s.
                default.FRAG_PARSING_DATA, s.
                default.FRAG_PARSED, s.
                default.ERROR, s.
                default.AUDIO_TRACK_SWITCHING, s.
                default.AUDIO_TRACK_SWITCHED, s.
                default.BUFFER_CREATED, s.
                default.BUFFER_APPENDED, s.
                default.BUFFER_FLUSHED) || this;
                    return i.fragmentTracker = r,
                    i.config = e.config,
                    i.audioCodecSwap = !1,
                    i._state = m.State.STOPPED,
                    i.stallReported = !1,
                    i.gapController = null,
                    i
                }
                return i(r, t),
                r.prototype.startLoad = function(e) {
                    if (this.levels) {
                        var t = this.lastCurrentTime,
                        r = this.hls;
                        if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                            var i = r.startLevel; - 1 === i && (i = 0, this.bitrateTest = !0),
                            this.level = r.nextLoadLevel = i,
                            this.loadedmetadata = !1
                        }
                        t > 0 && -1 === e && (p.logger.log("override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t),
                        this.state = m.State.IDLE,
                        this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e,
                        this.tick()
                    } else this.forceStartLoad = !0,
                    this.state = m.State.STOPPED
                },
                r.prototype.stopLoad = function() {
                    this.forceStartLoad = !1,
                    t.prototype.stopLoad.call(this)
                },
                r.prototype.doTick = function() {
                    switch (this.state) {
                    case m.State.BUFFER_FLUSHING:
                        this.fragLoadError = 0;
                        break;
                    case m.State.IDLE:
                        this._doTickIdle();
                        break;
                    case m.State.WAITING_LEVEL:
                        var e = this.levels[this.level];
                        e && e.details && (this.state = m.State.IDLE);
                        break;
                    case m.State.FRAG_LOADING_WAITING_RETRY:
                        var t = window.performance.now(),
                        r = this.retryDate; (!r || t >= r || this.media && this.media.seeking) && (p.logger.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = m.State.IDLE);
                        break;
                    case m.State.ERROR:
                    case m.State.STOPPED:
                    case m.State.FRAG_LOADING:
                    case m.State.PARSING:
                    case m.State.PARSED:
                    case m.State.ENDED:
                    }
                    this._checkBuffer(),
                    this._checkFragmentChanged()
                },
                r.prototype._doTickIdle = function() {
                    var e = this.hls,
                    t = e.config,
                    r = this.media;
                    if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && t.startFragPrefetch)) {
                        var i;
                        i = this.loadedmetadata ? r.currentTime: this.nextLoadPosition;
                        var a = e.nextLoadLevel,
                        o = this.levels[a];
                        if (o) {
                            var l, u = o.bitrate;
                            l = u ? Math.max(8 * t.maxBufferSize / u, t.maxBufferLength) : t.maxBufferLength,
                            l = Math.min(l, t.maxMaxBufferLength);
                            var d = n.BufferHelper.bufferInfo(this.mediaBuffer ? this.mediaBuffer: r, i, t.maxBufferHole),
                            f = d.len;
                            if (! (f >= l)) {
                                p.logger.trace("buffer length of " + f.toFixed(3) + " is below max of " + l.toFixed(3) + ". checking for more payload ..."),
                                this.level = e.nextLoadLevel = a;
                                var c = o.details;
                                if (!c || c.live && this.levelLastLoaded !== a) this.state = m.State.WAITING_LEVEL;
                                else {
                                    if (this._streamEnded(d, c)) {
                                        var h = {};
                                        return this.altAudio && (h.type = "video"),
                                        this.hls.trigger(s.
                                    default.BUFFER_EOS, h),
                                        void(this.state = m.State.ENDED)
                                    }
                                    this._fetchPayloadOrEos(i, d, c)
                                }
                            }
                        }
                    }
                },
                r.prototype._fetchPayloadOrEos = function(e, t, r) {
                    var i = this.fragPrevious,
                    a = this.level,
                    n = r.fragments,
                    o = n.length;
                    if (0 !== o) {
                        var s, l = n[0].start,
                        u = n[o - 1].start + n[o - 1].duration,
                        d = t.end;
                        if (r.initSegment && !r.initSegment.data) s = r.initSegment;
                        else if (r.live) {
                            var f = this.config.initialLiveManifestSize;
                            if (o < f) return void p.logger.warn("Can not start playback of a level, reason: not enough fragments " + o + " < " + f);
                            if (null === (s = this._ensureFragmentAtLivePoint(r, d, l, u, i, n, o))) return
                        } else d < l && (s = n[0]);
                        s || (s = this._findFragment(l, i, o, n, d, u, r)),
                        s && (s.encrypted ? (p.logger.log("Loading key for " + s.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + a), this._loadKey(s)) : (p.logger.log("Loading " + s.sn + " of [" + r.startSN + " ," + r.endSN + "],level " + a + ", currentTime:" + e.toFixed(3) + ",bufferEnd:" + d.toFixed(3)), this._loadFragment(s)))
                    }
                },
                r.prototype._ensureFragmentAtLivePoint = function(e, t, r, i, n, o, s) {
                    var l, u = this.hls.config,
                    d = this.media,
                    f = void 0 !== u.liveMaxLatencyDuration ? u.liveMaxLatencyDuration: u.liveMaxLatencyDurationCount * e.targetduration;
                    if (t < Math.max(r - u.maxFragLookUpTolerance, i - f)) {
                        var c = this.liveSyncPosition = this.computeLivePosition(r, e);
                        p.logger.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + c.toFixed(3)),
                        t = c,
                        d && d.readyState && d.duration > c && (d.currentTime = c),
                        this.nextLoadPosition = c
                    }
                    if (e.PTSKnown && t > i && d && d.readyState) return null;
                    if (this.startFragRequested && !e.PTSKnown) {
                        if (n) if (e.hasProgramDateTime) p.logger.log("live playlist, switching playlist, load frag with same PDT: " + n.programDateTime),
                        l = v.findFragmentByPDT(o, n.endProgramDateTime, u.maxFragLookUpTolerance);
                        else {
                            var h = n.sn + 1;
                            if (h >= e.startSN && h <= e.endSN) {
                                var g = o[h - e.startSN];
                                n.cc === g.cc && (l = g, p.logger.log("live playlist, switching playlist, load frag with next SN: " + l.sn))
                            }
                            l || (l = a.
                        default.search(o,
                            function(e) {
                                return n.cc - e.cc
                            })) && p.logger.log("live playlist, switching playlist, load frag with same CC: " + l.sn)
                        }
                        l || (l = o[Math.min(s - 1, Math.round(s / 2))], p.logger.log("live playlist, switching playlist, unknown, load middle frag : " + l.sn))
                    }
                    return l
                },
                r.prototype._findFragment = function(e, t, r, i, a, n, o) {
                    var s, l = this.hls.config;
                    if (a < n) {
                        var u = a > n - l.maxFragLookUpTolerance ? 0 : l.maxFragLookUpTolerance;
                        s = v.findFragmentByPTS(t, i, a, u)
                    } else s = i[r - 1];
                    if (s) {
                        var d = s.sn - o.startSN,
                        f = t && s.level === t.level,
                        c = i[d - 1],
                        h = i[d + 1];
                        if (t && s.sn === t.sn) if (f && !s.backtracked) if (s.sn < o.endSN) {
                            var g = t.deltaPTS;
                            g && g > l.maxBufferHole && t.dropped && d ? (s = c, p.logger.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")) : (s = h, p.logger.log("SN just loaded, load next one: " + s.sn, s))
                        } else s = null;
                        else s.backtracked && (h && h.backtracked ? (p.logger.warn("Already backtracked from fragment " + h.sn + ", will not backtrack to fragment " + s.sn + ". Loading fragment " + h.sn), s = h) : (p.logger.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), s.dropped = 0, c ? (s = c).backtracked = !0 : d && (s = null)))
                    }
                    return s
                },
                r.prototype._loadKey = function(e) {
                    this.state = m.State.KEY_LOADING,
                    this.hls.trigger(s.
                default.KEY_LOADING, {
                        frag: e
                    })
                },
                r.prototype._loadFragment = function(t) {
                    var r = this.fragmentTracker.getState(t);
                    this.fragCurrent = t,
                    this.startFragRequested = !0,
                    e.isFinite(t.sn) && !t.bitrateTest && (this.nextLoadPosition = t.start + t.duration),
                    t.backtracked || r === l.FragmentState.NOT_LOADED || r === l.FragmentState.PARTIAL ? (t.autoLevel = this.hls.autoLevelEnabled, t.bitrateTest = this.bitrateTest, this.hls.trigger(s.
                default.FRAG_LOADING, {
                        frag: t
                    }), this.demuxer || (this.demuxer = new o.
                default(this.hls, "main")), this.state = m.State.FRAG_LOADING) : r === l.FragmentState.APPENDING && this._reduceMaxBufferLength(t.duration) && this.fragmentTracker.removeFragment(t)
                },
                Object.defineProperty(r.prototype, "state", {
                    get: function() {
                        return this._state
                    },
                    set: function(e) {
                        if (this.state !== e) {
                            var t = this.state;
                            this._state = e,
                            p.logger.log("main stream:" + t + "->" + e),
                            this.hls.trigger(s.
                        default.STREAM_STATE_TRANSITION, {
                                previousState: t,
                                nextState: e
                            })
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                r.prototype.getBufferedFrag = function(e) {
                    return this.fragmentTracker.getBufferedFrag(e, d.
                default.LevelType.MAIN)
                },
                Object.defineProperty(r.prototype, "currentLevel", {
                    get: function() {
                        var e = this.media;
                        if (e) {
                            var t = this.getBufferedFrag(e.currentTime);
                            if (t) return t.level
                        }
                        return - 1
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(r.prototype, "nextBufferedFrag", {
                    get: function() {
                        var e = this.media;
                        return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                r.prototype.followingBufferedFrag = function(e) {
                    return e ? this.getBufferedFrag(e.endPTS + .5) : null
                },
                Object.defineProperty(r.prototype, "nextLevel", {
                    get: function() {
                        var e = this.nextBufferedFrag;
                        return e ? e.level: -1
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                r.prototype._checkFragmentChanged = function() {
                    var e, t, r = this.media;
                    if (r && r.readyState && !1 === r.seeking && ((t = r.currentTime) > this.lastCurrentTime && (this.lastCurrentTime = t), n.BufferHelper.isBuffered(r, t) ? e = this.getBufferedFrag(t) : n.BufferHelper.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)), e)) {
                        var i = e;
                        if (i !== this.fragPlaying) {
                            this.hls.trigger(s.
                        default.FRAG_CHANGED, {
                                frag: i
                            });
                            var a = i.level;
                            this.fragPlaying && this.fragPlaying.level === a || this.hls.trigger(s.
                        default.LEVEL_SWITCHED, {
                                level: a
                            }),
                            this.fragPlaying = i
                        }
                    }
                },
                r.prototype.immediateLevelSwitch = function() {
                    if (p.logger.log("immediateLevelSwitch"), !this.immediateSwitch) {
                        this.immediateSwitch = !0;
                        var t = this.media,
                        r = void 0;
                        t ? (r = t.paused, t.pause()) : r = !0,
                        this.previouslyPaused = r
                    }
                    var i = this.fragCurrent;
                    i && i.loader && i.loader.abort(),
                    this.fragCurrent = null,
                    this.flushMainBuffer(0, e.POSITIVE_INFINITY)
                },
                r.prototype.immediateLevelSwitchEnd = function() {
                    var e = this.media;
                    e && e.buffered.length && (this.immediateSwitch = !1, n.BufferHelper.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4), this.previouslyPaused || e.play())
                },
                r.prototype.nextLevelSwitch = function() {
                    var t = this.media;
                    if (t && t.readyState) {
                        var r, i = void 0,
                        a = void 0;
                        if ((r = this.getBufferedFrag(t.currentTime)) && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1), t.paused) i = 0;
                        else {
                            var n = this.hls.nextLoadLevel,
                            o = this.levels[n],
                            s = this.fragLastKbps;
                            i = s && this.fragCurrent ? this.fragCurrent.duration * o.bitrate / (1e3 * s) + 1 : 0
                        }
                        if ((a = this.getBufferedFrag(t.currentTime + i)) && (a = this.followingBufferedFrag(a))) {
                            var l = this.fragCurrent;
                            l && l.loader && l.loader.abort(),
                            this.fragCurrent = null,
                            this.flushMainBuffer(a.maxStartPTS, e.POSITIVE_INFINITY)
                        }
                    }
                },
                r.prototype.flushMainBuffer = function(e, t) {
                    this.state = m.State.BUFFER_FLUSHING;
                    var r = {
                        startOffset: e,
                        endOffset: t
                    };
                    this.altAudio && (r.type = "video"),
                    this.hls.trigger(s.
                default.BUFFER_FLUSHING, r)
                },
                r.prototype.onMediaAttached = function(e) {
                    var t = this.media = this.mediaBuffer = e.media;
                    this.onvseeking = this.onMediaSeeking.bind(this),
                    this.onvseeked = this.onMediaSeeked.bind(this),
                    this.onvended = this.onMediaEnded.bind(this),
                    t.addEventListener("seeking", this.onvseeking),
                    t.addEventListener("seeked", this.onvseeked),
                    t.addEventListener("ended", this.onvended);
                    var r = this.config;
                    this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition),
                    this.gapController = new y.
                default(r, t, this.fragmentTracker, this.hls)
                },
                r.prototype.onMediaDetaching = function() {
                    var e = this.media;
                    e && e.ended && (p.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
                    var t = this.levels;
                    t && t.forEach(function(e) {
                        e.details && e.details.fragments.forEach(function(e) {
                            e.backtracked = void 0
                        })
                    }),
                    e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("seeked", this.onvseeked), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null),
                    this.media = this.mediaBuffer = null,
                    this.loadedmetadata = !1,
                    this.stopLoad()
                },
                r.prototype.onMediaSeeked = function() {
                    var t = this.media,
                    r = t ? t.currentTime: void 0;
                    e.isFinite(r) && p.logger.log("media seeked to " + r.toFixed(3)),
                    this.tick()
                },
                r.prototype.onManifestLoading = function() {
                    p.logger.log("trigger BUFFER_RESET"),
                    this.hls.trigger(s.
                default.BUFFER_RESET),
                    this.fragmentTracker.removeAllFragments(),
                    this.stalled = !1,
                    this.startPosition = this.lastCurrentTime = 0
                },
                r.prototype.onManifestParsed = function(e) {
                    var t, r = !1,
                    i = !1;
                    e.levels.forEach(function(e) { (t = e.audioCodec) && ( - 1 !== t.indexOf("mp4a.40.2") && (r = !0), -1 !== t.indexOf("mp4a.40.5") && (i = !0))
                    }),
                    this.audioCodecSwitch = r && i,
                    this.audioCodecSwitch && p.logger.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
                    this.levels = e.levels,
                    this.startFragRequested = !1;
                    var a = this.config; (a.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(a.startPosition)
                },
                r.prototype.onLevelLoaded = function(t) {
                    var r = t.details,
                    i = t.level,
                    a = this.levels[this.levelLastLoaded],
                    n = this.levels[i],
                    o = r.totalduration,
                    l = 0;
                    if (p.logger.log("level " + i + " loaded [" + r.startSN + "," + r.endSN + "],duration:" + o), r.live) {
                        var u = n.details;
                        u && r.fragments.length > 0 ? (f.mergeDetails(u, r), l = r.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(l, u), r.PTSKnown && e.isFinite(l) ? p.logger.log("live playlist sliding:" + l.toFixed(3)) : (p.logger.log("live playlist - outdated PTS, unknown sliding"), g.alignStream(this.fragPrevious, a, r))) : (p.logger.log("live playlist - first load, unknown sliding"), r.PTSKnown = !1, g.alignStream(this.fragPrevious, a, r))
                    } else r.PTSKnown = !1;
                    if (n.details = r, this.levelLastLoaded = i, this.hls.trigger(s.
                default.LEVEL_UPDATED, {
                        details: r,
                        level: i
                    }), !1 === this.startFragRequested) {
                        if ( - 1 === this.startPosition || -1 === this.lastCurrentTime) {
                            var d = r.startTimeOffset;
                            e.isFinite(d) ? (d < 0 && (p.logger.log("negative start time offset " + d + ", count from end of last fragment"), d = l + o + d), p.logger.log("start time offset found in playlist, adjust startPosition to " + d), this.startPosition = d) : r.live ? (this.startPosition = this.computeLivePosition(l, r), p.logger.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0,
                            this.lastCurrentTime = this.startPosition
                        }
                        this.nextLoadPosition = this.startPosition
                    }
                    this.state === m.State.WAITING_LEVEL && (this.state = m.State.IDLE),
                    this.tick()
                },
                r.prototype.onKeyLoaded = function() {
                    this.state === m.State.KEY_LOADING && (this.state = m.State.IDLE, this.tick())
                },
                r.prototype.onFragLoaded = function(e) {
                    var t = this.fragCurrent,
                    r = this.hls,
                    i = this.levels,
                    a = this.media,
                    n = e.frag;
                    if (this.state === m.State.FRAG_LOADING && t && "main" === n.type && n.level === t.level && n.sn === t.sn) {
                        var l = e.stats,
                        u = i[t.level],
                        d = u.details;
                        if (this.bitrateTest = !1, this.stats = l, p.logger.log("Loaded " + t.sn + " of [" + d.startSN + " ," + d.endSN + "],level " + t.level), n.bitrateTest && r.nextLoadLevel) this.state = m.State.IDLE,
                        this.startFragRequested = !1,
                        l.tparsed = l.tbuffered = window.performance.now(),
                        r.trigger(s.
                    default.FRAG_BUFFERED, {
                            stats: l,
                            frag: t,
                            id: "main"
                        }),
                        this.tick();
                        else if ("initSegment" === n.sn) this.state = m.State.IDLE,
                        l.tparsed = l.tbuffered = window.performance.now(),
                        d.initSegment.data = e.payload,
                        r.trigger(s.
                    default.FRAG_BUFFERED, {
                            stats: l,
                            frag: t,
                            id: "main"
                        }),
                        this.tick();
                        else {
                            p.logger.log("Parsing " + t.sn + " of [" + d.startSN + " ," + d.endSN + "],level " + t.level + ", cc " + t.cc),
                            this.state = m.State.PARSING,
                            this.pendingBuffering = !0,
                            this.appended = !1,
                            n.bitrateTest && (n.bitrateTest = !1, this.fragmentTracker.onFragLoaded({
                                frag: n
                            }));
                            var f = !(a && a.seeking) && (d.PTSKnown || !d.live),
                            c = d.initSegment ? d.initSegment.data: [],
                            h = this._getAudioCodec(u); (this.demuxer = this.demuxer || new o.
                        default(this.hls, "main")).push(e.payload, c, h, u.videoCodec, t, d.totalduration, f)
                        }
                    }
                    this.fragLoadError = 0
                },
                r.prototype.onFragParsingInitSegment = function(e) {
                    var t = this.fragCurrent,
                    r = e.frag;
                    if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === m.State.PARSING) {
                        var i = e.tracks,
                        a = void 0,
                        n = void 0;
                        if (i.audio && this.altAudio && delete i.audio, n = i.audio) {
                            var o = this.levels[this.level].audioCodec,
                            l = navigator.userAgent.toLowerCase();
                            o && this.audioCodecSwap && (p.logger.log("swapping playlist audio codec"), o = -1 !== o.indexOf("mp4a.40.5") ? "mp4a.40.2": "mp4a.40.5"),
                            this.audioCodecSwitch && 1 !== n.metadata.channelCount && -1 === l.indexOf("firefox") && (o = "mp4a.40.5"),
                            -1 !== l.indexOf("android") && "audio/mpeg" !== n.container && (o = "mp4a.40.2", p.logger.log("Android: force audio codec to " + o)),
                            n.levelCodec = o,
                            n.id = e.id
                        }
                        for (a in (n = i.video) && (n.levelCodec = this.levels[this.level].videoCodec, n.id = e.id), this.hls.trigger(s.
                    default.BUFFER_CODECS, i), i) {
                            n = i[a],
                            p.logger.log("main track:" + a + ",container:" + n.container + ",codecs[level/parsed]=[" + n.levelCodec + "/" + n.codec + "]");
                            var u = n.initSegment;
                            u && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(s.
                        default.BUFFER_APPENDING, {
                                type: a,
                                data: u,
                                parent: "main",
                                content: "initSegment"
                            }))
                        }
                        this.tick()
                    }
                },
                r.prototype.onFragParsingData = function(t) {
                    var r = this,
                    i = this.fragCurrent,
                    a = t.frag;
                    if (i && "main" === t.id && a.sn === i.sn && a.level === i.level && ("audio" !== t.type || !this.altAudio) && this.state === m.State.PARSING) {
                        var n = this.levels[this.level],
                        o = i;
                        if (e.isFinite(t.endPTS) || (t.endPTS = t.startPTS + i.duration, t.endDTS = t.startDTS + i.duration), !0 === t.hasAudio && o.addElementaryStream(u.
                    default.ElementaryStreamTypes.AUDIO), !0 === t.hasVideo && o.addElementaryStream(u.
                    default.ElementaryStreamTypes.VIDEO), p.logger.log("Parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb + ",dropped:" + (t.dropped || 0)), "video" === t.type) if (o.dropped = t.dropped, o.dropped) if (o.backtracked) p.logger.warn("Already backtracked on this fragment, appending with the gap", o.sn);
                        else {
                            var l = n.details;
                            if (!l || o.sn !== l.startSN) return p.logger.warn("missing video frame(s), backtracking fragment", o.sn),
                            this.fragmentTracker.removeFragment(o),
                            o.backtracked = !0,
                            this.nextLoadPosition = t.startPTS,
                            this.state = m.State.IDLE,
                            this.fragPrevious = o,
                            void this.tick();
                            p.logger.warn("missing video frame(s) on first frag, appending with gap", o.sn)
                        } else o.backtracked = !1;
                        var d = f.updateFragPTSDTS(n.details, o, t.startPTS, t.endPTS, t.startDTS, t.endDTS),
                        c = this.hls;
                        c.trigger(s.
                    default.LEVEL_PTS_UPDATED, {
                            details: n.details,
                            level: this.level,
                            drift: d,
                            type: t.type,
                            start: t.startPTS,
                            end: t.endPTS
                        }),
                        [t.data1, t.data2].forEach(function(e) {
                            e && e.length && r.state === m.State.PARSING && (r.appended = !0, r.pendingBuffering = !0, c.trigger(s.
                        default.BUFFER_APPENDING, {
                                type: t.type,
                                data: e,
                                parent: "main",
                                content: "data"
                            }))
                        }),
                        this.tick()
                    }
                },
                r.prototype.onFragParsed = function(e) {
                    var t = this.fragCurrent,
                    r = e.frag;
                    t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === m.State.PARSING && (this.stats.tparsed = window.performance.now(), this.state = m.State.PARSED, this._checkAppendedParsed())
                },
                r.prototype.onAudioTrackSwitching = function(t) {
                    var r = !!t.url,
                    i = t.id;
                    if (!r) {
                        if (this.mediaBuffer !== this.media) {
                            p.logger.log("switching on main audio, use media.buffered to schedule main fragment loading"),
                            this.mediaBuffer = this.media;
                            var a = this.fragCurrent;
                            a.loader && (p.logger.log("switching to main audio track, cancel main fragment load"), a.loader.abort()),
                            this.fragCurrent = null,
                            this.fragPrevious = null,
                            this.demuxer && (this.demuxer.destroy(), this.demuxer = null),
                            this.state = m.State.IDLE
                        }
                        var n = this.hls;
                        n.trigger(s.
                    default.BUFFER_FLUSHING, {
                            startOffset: 0,
                            endOffset: e.POSITIVE_INFINITY,
                            type: "audio"
                        }),
                        n.trigger(s.
                    default.AUDIO_TRACK_SWITCHED, {
                            id: i
                        }),
                        this.altAudio = !1
                    }
                },
                r.prototype.onAudioTrackSwitched = function(e) {
                    var t = e.id,
                    r = !!this.hls.audioTracks[t].url;
                    if (r) {
                        var i = this.videoBuffer;
                        i && this.mediaBuffer !== i && (p.logger.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i)
                    }
                    this.altAudio = r,
                    this.tick()
                },
                r.prototype.onBufferCreated = function(e) {
                    var t, r, i = e.tracks,
                    a = !1;
                    for (var n in i) {
                        var o = i[n];
                        "main" === o.id ? (r = n, t = o, "video" === n && (this.videoBuffer = i[n].buffer)) : a = !0
                    }
                    a && t ? (p.logger.log("alternate track found, use " + r + ".buffered to schedule main fragment loading"), this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media
                },
                r.prototype.onBufferAppended = function(e) {
                    if ("main" === e.parent) {
                        var t = this.state;
                        t !== m.State.PARSING && t !== m.State.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
                    }
                },
                r.prototype._checkAppendedParsed = function() {
                    if (! (this.state !== m.State.PARSED || this.appended && this.pendingBuffering)) {
                        var e = this.fragCurrent;
                        if (e) {
                            var t = this.mediaBuffer ? this.mediaBuffer: this.media;
                            p.logger.log("main buffered : " + c.
                        default.toString(t.buffered)),
                            this.fragPrevious = e;
                            var r = this.stats;
                            r.tbuffered = window.performance.now(),
                            this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)),
                            this.hls.trigger(s.
                        default.FRAG_BUFFERED, {
                                stats: r,
                                frag: e,
                                id: "main"
                            }),
                            this.state = m.State.IDLE
                        }
                        this.tick()
                    }
                },
                r.prototype.onError = function(t) {
                    var r = t.frag || this.fragCurrent;
                    if (!r || "main" === r.type) {
                        var i = !!this.media && n.BufferHelper.isBuffered(this.media, this.media.currentTime) && n.BufferHelper.isBuffered(this.media, this.media.currentTime + .5);
                        switch (t.details) {
                        case h.ErrorDetails.FRAG_LOAD_ERROR:
                        case h.ErrorDetails.FRAG_LOAD_TIMEOUT:
                        case h.ErrorDetails.KEY_LOAD_ERROR:
                        case h.ErrorDetails.KEY_LOAD_TIMEOUT:
                            if (!t.fatal) if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                var a = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                p.logger.warn("mediaController: frag loading failed, retry in " + a + " ms"),
                                this.retryDate = window.performance.now() + a,
                                this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition),
                                this.fragLoadError++,
                                this.state = m.State.FRAG_LOADING_WAITING_RETRY
                            } else p.logger.error("mediaController: " + t.details + " reaches max retry, redispatch as fatal ..."),
                            t.fatal = !0,
                            this.state = m.State.ERROR;
                            break;
                        case h.ErrorDetails.LEVEL_LOAD_ERROR:
                        case h.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                            this.state !== m.State.ERROR && (t.fatal ? (this.state = m.State.ERROR, p.logger.warn("streamController: " + t.details + ",switch to " + this.state + " state ...")) : t.levelRetry || this.state !== m.State.WAITING_LEVEL || (this.state = m.State.IDLE));
                            break;
                        case h.ErrorDetails.BUFFER_FULL_ERROR:
                            "main" !== t.parent || this.state !== m.State.PARSING && this.state !== m.State.PARSED || (i ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = m.State.IDLE) : (p.logger.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, e.POSITIVE_INFINITY)))
                        }
                    }
                },
                r.prototype._reduceMaxBufferLength = function(e) {
                    var t = this.config;
                    return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2, p.logger.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"), !0)
                },
                r.prototype._checkBuffer = function() {
                    var e = this.media;
                    if (e && 0 !== e.readyState) {
                        var t = (this.mediaBuffer ? this.mediaBuffer: e).buffered; ! this.loadedmetadata && t.length ? (this.loadedmetadata = !0, this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, t)
                    }
                },
                r.prototype.onFragLoadEmergencyAborted = function() {
                    this.state = m.State.IDLE,
                    this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition),
                    this.tick()
                },
                r.prototype.onBufferFlushed = function() {
                    var e = this.mediaBuffer ? this.mediaBuffer: this.media;
                    e && this.fragmentTracker.detectEvictedFragments(u.
                default.ElementaryStreamTypes.VIDEO, e.buffered),
                    this.state = m.State.IDLE,
                    this.fragPrevious = null
                },
                r.prototype.swapAudioCodec = function() {
                    this.audioCodecSwap = !this.audioCodecSwap
                },
                r.prototype.computeLivePosition = function(e, t) {
                    var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration: this.config.liveSyncDurationCount * t.targetduration;
                    return e + Math.max(0, t.totalduration - r)
                },
                r.prototype._seekToStartPos = function() {
                    var e = this.media,
                    t = e.currentTime,
                    r = e.seeking ? t: this.startPosition;
                    t !== r && (p.logger.log("target start position not buffered, seek to buffered.start(0) " + r + " from current time " + t + " "), e.currentTime = r)
                },
                r.prototype._getAudioCodec = function(e) {
                    var t = this.config.defaultAudioCodec || e.audioCodec;
                    return this.audioCodecSwap && (p.logger.log("swapping playlist audio codec"), t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2": "mp4a.40.5")),
                    t
                },
                Object.defineProperty(r.prototype, "liveSyncPosition", {
                    get: function() {
                        return this._liveSyncPosition
                    },
                    set: function(e) {
                        this._liveSyncPosition = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                r
            } (m.
        default);
            t.
        default = E
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        function i(e) {
            var t = {};
            function r(i) {
                if (t[i]) return t[i].exports;
                var a = t[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(a.exports, a, a.exports, r),
                a.l = !0,
                a.exports
            }
            r.m = e,
            r.c = t,
            r.i = function(e) {
                return e
            },
            r.d = function(e, t, i) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            },
            r.r = function(e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            },
            r.n = function(e) {
                var t = e && e.__esModule ?
                function() {
                    return e.
                default
                }:
                function() {
                    return e
                };
                return r.d(t, "a", t),
                t
            },
            r.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            r.p = "/",
            r.oe = function(e) {
                throw console.error(e),
                e
            };
            var i = r(r.s = ENTRY_MODULE);
            return i.
        default || i
        }
        var a = "[\\.|\\-|\\+|\\w|/|@]+",
        n = "\\((/\\*.*?\\*/)?s?.*?(" + a + ").*?\\)";
        function o(e) {
            return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
        }
        function s(e) {
            return ! isNaN(1 * e)
        }
        function l(e, t, i) {
            var l = {};
            l[i] = [];
            var u = t.toString(),
            d = u.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
            if (!d) return l;
            for (var f, c = d[1], h = new RegExp("(\\\\n|\\W)" + o(c) + n, "g"); f = h.exec(u);)"dll-reference" !== f[3] && l[i].push(f[3]);
            for (h = new RegExp("\\(" + o(c) + '\\("(dll-reference\\s(' + a + '))"\\)\\)' + n, "g"); f = h.exec(u);) e[f[2]] || (l[i].push(f[1]), e[f[2]] = r(f[1]).m),
            l[f[2]] = l[f[2]] || [],
            l[f[2]].push(f[4]);
            for (var p = Object.keys(l), g = 0; g < p.length; g++) for (var v = 0; v < l[p[g]].length; v++) s(l[p[g]][v]) && (l[p[g]][v] = 1 * l[p[g]][v]);
            return l
        }
        function u(e) {
            return Object.keys(e).reduce(function(t, r) {
                return t || e[r].length > 0
            },
            !1)
        }
        e.exports = function(e, t) {
            t = t || {};
            var a = {
                main: r.m
            },
            n = t.all ? {
                main: Object.keys(a.main)
            }: function(e, t) {
                for (var r = {
                    main: [t]
                },
                i = {
                    main: []
                },
                a = {
                    main: {}
                }; u(r);) for (var n = Object.keys(r), o = 0; o < n.length; o++) {
                    var s = n[o],
                    d = r[s].pop();
                    if (a[s] = a[s] || {},
                    !a[s][d] && e[s][d]) {
                        a[s][d] = !0,
                        i[s] = i[s] || [],
                        i[s].push(d);
                        for (var f = l(e, e[s][d], s), c = Object.keys(f), h = 0; h < c.length; h++) r[c[h]] = r[c[h]] || [],
                        r[c[h]] = r[c[h]].concat(f[c[h]])
                    }
                }
                return i
            } (a, e),
            o = "";
            Object.keys(n).filter(function(e) {
                return "main" !== e
            }).forEach(function(e) {
                for (var t = 0; n[e][t];) t++;
                n[e].push(t),
                a[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",
                o = o + "var " + e + " = (" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + n[e].map(function(t) {
                    return JSON.stringify(t) + ": " + a[e][t].toString()
                }).join(",") + "});\n"
            }),
            o = o + "new ((" + i.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + n.main.map(function(e) {
                return JSON.stringify(e) + ": " + a.main[e].toString()
            }).join(",") + "}))(self);";
            var s = new window.Blob([o], {
                type: "text/javascript"
            });
            if (t.bare) return s;
            var d = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(s),
            f = new window.Worker(d);
            return f.objectURL = d,
            f
        }
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                this.subtle = e,
                this.aesIV = t
            }
            return e.prototype.decrypt = function(e, t) {
                return this.subtle.decrypt({
                    name: "AES-CBC",
                    iv: this.aesIV
                },
                t, e)
            },
            e
        } ();
        t.
    default = i
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                this.subtle = e,
                this.key = t
            }
            return e.prototype.expandKey = function() {
                return this.subtle.importKey("raw", this.key, {
                    name: "AES-CBC"
                },
                !1, ["encrypt", "decrypt"])
            },
            e
        } ();
        t.
    default = i
    },
    function(e, t, r) {
        "use strict";
        function i(e) {
            var t = e.byteLength,
            r = t && new DataView(e).getUint8(t - 1);
            return r ? e.slice(0, t - r) : e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.removePadding = i;
        var a = function() {
            function e() {
                this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                this.sBox = new Uint32Array(256),
                this.invSBox = new Uint32Array(256),
                this.key = new Uint32Array(0),
                this.initTable()
            }
            return e.prototype.uint8ArrayToUint32Array_ = function(e) {
                for (var t = new DataView(e), r = new Uint32Array(4), i = 0; i < 4; i++) r[i] = t.getUint32(4 * i);
                return r
            },
            e.prototype.initTable = function() {
                var e = this.sBox,
                t = this.invSBox,
                r = this.subMix,
                i = r[0],
                a = r[1],
                n = r[2],
                o = r[3],
                s = this.invSubMix,
                l = s[0],
                u = s[1],
                d = s[2],
                f = s[3],
                c = new Uint32Array(256),
                h = 0,
                p = 0,
                g = 0;
                for (g = 0; g < 256; g++) c[g] = g < 128 ? g << 1 : g << 1 ^ 283;
                for (g = 0; g < 256; g++) {
                    var v = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
                    v = v >>> 8 ^ 255 & v ^ 99,
                    e[h] = v,
                    t[v] = h;
                    var y = c[h],
                    m = c[y],
                    E = c[m],
                    _ = 257 * c[v] ^ 16843008 * v;
                    i[h] = _ << 24 | _ >>> 8,
                    a[h] = _ << 16 | _ >>> 16,
                    n[h] = _ << 8 | _ >>> 24,
                    o[h] = _,
                    _ = 16843009 * E ^ 65537 * m ^ 257 * y ^ 16843008 * h,
                    l[v] = _ << 24 | _ >>> 8,
                    u[v] = _ << 16 | _ >>> 16,
                    d[v] = _ << 8 | _ >>> 24,
                    f[v] = _,
                    h ? (h = y ^ c[c[c[E ^ y]]], p ^= c[c[p]]) : h = p = 1
                }
            },
            e.prototype.expandKey = function(e) {
                for (var t = this.uint8ArrayToUint32Array_(e), r = !0, i = 0; i < t.length && r;) r = t[i] === this.key[i],
                i++;
                if (!r) {
                    this.key = t;
                    var a = this.keySize = t.length;
                    if (4 !== a && 6 !== a && 8 !== a) throw new Error("Invalid aes key size=" + a);
                    var n, o, s, l, u = this.ksRows = 4 * (a + 6 + 1),
                    d = this.keySchedule = new Uint32Array(u),
                    f = this.invKeySchedule = new Uint32Array(u),
                    c = this.sBox,
                    h = this.rcon,
                    p = this.invSubMix,
                    g = p[0],
                    v = p[1],
                    y = p[2],
                    m = p[3];
                    for (n = 0; n < u; n++) n < a ? s = d[n] = t[n] : (l = s, n % a == 0 ? (l = c[(l = l << 8 | l >>> 24) >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l], l ^= h[n / a | 0] << 24) : a > 6 && n % a == 4 && (l = c[l >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & l]), d[n] = s = (d[n - a] ^ l) >>> 0);
                    for (o = 0; o < u; o++) n = u - o,
                    l = 3 & o ? d[n] : d[n - 4],
                    f[o] = o < 4 || n <= 4 ? l: g[c[l >>> 24]] ^ v[c[l >>> 16 & 255]] ^ y[c[l >>> 8 & 255]] ^ m[c[255 & l]],
                    f[o] = f[o] >>> 0
                }
            },
            e.prototype.networkToHostOrderSwap = function(e) {
                return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
            },
            e.prototype.decrypt = function(e, t, r, a) {
                for (var n, o, s, l, u, d, f, c, h, p, g, v, y, m, E = this.keySize + 6,
                _ = this.invKeySchedule,
                T = this.invSBox,
                S = this.invSubMix,
                b = S[0], A = S[1], R = S[2], D = S[3], L = this.uint8ArrayToUint32Array_(r), w = L[0], O = L[1], I = L[2], P = L[3], k = new Int32Array(e), C = new Int32Array(k.length), F = this.networkToHostOrderSwap; t < k.length;) {
                    for (h = F(k[t]), p = F(k[t + 1]), g = F(k[t + 2]), v = F(k[t + 3]), u = h ^ _[0], d = v ^ _[1], f = g ^ _[2], c = p ^ _[3], y = 4, m = 1; m < E; m++) n = b[u >>> 24] ^ A[d >> 16 & 255] ^ R[f >> 8 & 255] ^ D[255 & c] ^ _[y],
                    o = b[d >>> 24] ^ A[f >> 16 & 255] ^ R[c >> 8 & 255] ^ D[255 & u] ^ _[y + 1],
                    s = b[f >>> 24] ^ A[c >> 16 & 255] ^ R[u >> 8 & 255] ^ D[255 & d] ^ _[y + 2],
                    l = b[c >>> 24] ^ A[u >> 16 & 255] ^ R[d >> 8 & 255] ^ D[255 & f] ^ _[y + 3],
                    u = n,
                    d = o,
                    f = s,
                    c = l,
                    y += 4;
                    n = T[u >>> 24] << 24 ^ T[d >> 16 & 255] << 16 ^ T[f >> 8 & 255] << 8 ^ T[255 & c] ^ _[y],
                    o = T[d >>> 24] << 24 ^ T[f >> 16 & 255] << 16 ^ T[c >> 8 & 255] << 8 ^ T[255 & u] ^ _[y + 1],
                    s = T[f >>> 24] << 24 ^ T[c >> 16 & 255] << 16 ^ T[u >> 8 & 255] << 8 ^ T[255 & d] ^ _[y + 2],
                    l = T[c >>> 24] << 24 ^ T[u >> 16 & 255] << 16 ^ T[d >> 8 & 255] << 8 ^ T[255 & f] ^ _[y + 3],
                    y += 3,
                    C[t] = F(n ^ w),
                    C[t + 1] = F(l ^ O),
                    C[t + 2] = F(s ^ I),
                    C[t + 3] = F(o ^ P),
                    w = h,
                    O = p,
                    I = g,
                    P = v,
                    t += 4
                }
                return a ? i(C.buffer) : C.buffer
            },
            e.prototype.destroy = function() {
                this.key = void 0,
                this.keySize = void 0,
                this.ksRows = void 0,
                this.sBox = void 0,
                this.invSBox = void 0,
                this.subMix = void 0,
                this.invSubMix = void 0,
                this.keySchedule = void 0,
                this.invKeySchedule = void 0,
                this.rcon = void 0
            },
            e
        } ();
        t.
    default = a
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(22),
            a = r(0),
            n = r(11),
            o = function() {
                function t(e, t, r) {
                    this.observer = e,
                    this.config = r,
                    this.remuxer = t
                }
                return t.prototype.resetInitSegment = function(e, t, r, i) {
                    this._audioTrack = {
                        container: "audio/adts",
                        type: "audio",
                        id: 0,
                        sequenceNumber: 0,
                        isAAC: !0,
                        samples: [],
                        len: 0,
                        manifestCodec: t,
                        duration: i,
                        inputTimeScale: 9e4
                    }
                },
                t.prototype.resetTimeStamp = function() {},
                t.probe = function(e) {
                    if (!e) return ! 1;
                    for (var t = (n.
                default.getID3Data(e, 0) || []).length, r = e.length; t < r; t++) if (i.probe(e, t)) return a.logger.log("ADTS sync word found !"),
                    !0;
                    return ! 1
                },
                t.prototype.append = function(t, r, o, s) {
                    for (var l = this._audioTrack,
                    u = n.
                default.getID3Data(t, 0) || [], d = n.
                default.getTimeStamp(u), f = e.isFinite(d) ? 90 * d: 9e4 * r, c = 0, h = f, p = t.length, g = u.length, v = [{
                        pts: h,
                        dts: h,
                        data: u
                    }]; g < p - 1;) if (i.isHeader(t, g) && g + 5 < p) {
                        i.initTrackConfig(l, this.observer, t, g, l.manifestCodec);
                        var y = i.appendFrame(l, t, g, f, c);
                        if (!y) {
                            a.logger.log("Unable to parse AAC frame");
                            break
                        }
                        g += y.length,
                        h = y.sample.pts,
                        c++
                    } else n.
                default.isHeader(t, g) ? (u = n.
                default.getID3Data(t, g), v.push({
                        pts: h,
                        dts: h,
                        data: u
                    }), g += u.length) : g++;
                    this.remuxer.remux(l, {
                        samples: []
                    },
                    {
                        samples: v,
                        inputTimeScale: 9e4
                    },
                    {
                        samples: []
                    },
                    r, o, s)
                },
                t.prototype.destroy = function() {},
                t
            } ();
            t.
        default = o
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(22),
        a = r(23),
        n = r(1),
        o = r(44),
        s = r(45),
        l = r(0),
        u = r(3),
        d = {
            video: 1,
            audio: 2,
            id3: 3,
            text: 4
        },
        f = function() {
            function e(e, t, r, i) {
                this.observer = e,
                this.config = r,
                this.typeSupported = i,
                this.remuxer = t,
                this.sampleAes = null
            }
            return e.prototype.setDecryptData = function(e) {
                null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new s.
            default(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null
            },
            e.probe = function(t) {
                var r = e._syncOffset(t);
                return ! (r < 0) && (r && l.logger.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), !0)
            },
            e._syncOffset = function(e) {
                for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) {
                    if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376]) return r;
                    r++
                }
                return - 1
            },
            e.createTrack = function(e, t) {
                return {
                    container: "video" === e || "audio" === e ? "video/mp2t": void 0,
                    type: e,
                    id: d[e],
                    pid: -1,
                    inputTimeScale: 9e4,
                    sequenceNumber: 0,
                    samples: [],
                    len: 0,
                    dropped: "video" === e ? 0 : void 0,
                    isAAC: "audio" === e || void 0,
                    duration: "audio" === e ? t: void 0
                }
            },
            e.prototype.resetInitSegment = function(t, r, i, a) {
                this.pmtParsed = !1,
                this._pmtId = -1,
                this._avcTrack = e.createTrack("video", a),
                this._audioTrack = e.createTrack("audio", a),
                this._id3Track = e.createTrack("id3", a),
                this._txtTrack = e.createTrack("text", a),
                this.aacOverFlow = null,
                this.aacLastPTS = null,
                this.avcSample = null,
                this.audioCodec = r,
                this.videoCodec = i,
                this._duration = a
            },
            e.prototype.resetTimeStamp = function() {},
            e.prototype.append = function(t, r, i, a) {
                var o, s, d, f, c, h = t.length,
                p = !1;
                this.contiguous = i;
                var g = this.pmtParsed,
                v = this._avcTrack,
                y = this._audioTrack,
                m = this._id3Track,
                E = v.pid,
                _ = y.pid,
                T = m.pid,
                S = this._pmtId,
                b = v.pesData,
                A = y.pesData,
                R = m.pesData,
                D = this._parsePAT,
                L = this._parsePMT,
                w = this._parsePES,
                O = this._parseAVCPES.bind(this),
                I = this._parseAACPES.bind(this),
                P = this._parseMPEGPES.bind(this),
                k = this._parseID3PES.bind(this),
                C = e._syncOffset(t);
                for (h -= (h + C) % 188, o = C; o < h; o += 188) if (71 === t[o]) {
                    if (s = !!(64 & t[o + 1]), d = ((31 & t[o + 1]) << 8) + t[o + 2], (48 & t[o + 3]) >> 4 > 1) {
                        if ((f = o + 5 + t[o + 4]) === o + 188) continue
                    } else f = o + 4;
                    switch (d) {
                    case E:
                        s && (b && (c = w(b)) && void 0 !== c.pts && O(c, !1), b = {
                            data: [],
                            size: 0
                        }),
                        b && (b.data.push(t.subarray(f, o + 188)), b.size += o + 188 - f);
                        break;
                    case _:
                        s && (A && (c = w(A)) && void 0 !== c.pts && (y.isAAC ? I(c) : P(c)), A = {
                            data: [],
                            size: 0
                        }),
                        A && (A.data.push(t.subarray(f, o + 188)), A.size += o + 188 - f);
                        break;
                    case T:
                        s && (R && (c = w(R)) && void 0 !== c.pts && k(c), R = {
                            data: [],
                            size: 0
                        }),
                        R && (R.data.push(t.subarray(f, o + 188)), R.size += o + 188 - f);
                        break;
                    case 0:
                        s && (f += t[f] + 1),
                        S = this._pmtId = D(t, f);
                        break;
                    case S:
                        s && (f += t[f] + 1);
                        var F = L(t, f, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes); (E = F.avc) > 0 && (v.pid = E),
                        (_ = F.audio) > 0 && (y.pid = _, y.isAAC = F.isAAC),
                        (T = F.id3) > 0 && (m.pid = T),
                        p && !g && (l.logger.log("reparse from beginning"), p = !1, o = C - 188),
                        g = this.pmtParsed = !0;
                        break;
                    case 17:
                    case 8191:
                        break;
                    default:
                        p = !0
                    }
                } else this.observer.trigger(n.
            default.ERROR, {
                    type: u.ErrorTypes.MEDIA_ERROR,
                    details: u.ErrorDetails.FRAG_PARSING_ERROR,
                    fatal: !1,
                    reason: "TS packet did not start with 0x47"
                });
                b && (c = w(b)) && void 0 !== c.pts ? (O(c, !0), v.pesData = null) : v.pesData = b,
                A && (c = w(A)) && void 0 !== c.pts ? (y.isAAC ? I(c) : P(c), y.pesData = null) : (A && A.size && l.logger.log("last AAC PES packet truncated,might overlap between fragments"), y.pesData = A),
                R && (c = w(R)) && void 0 !== c.pts ? (k(c), m.pesData = null) : m.pesData = R,
                null == this.sampleAes ? this.remuxer.remux(y, v, m, this._txtTrack, r, i, a) : this.decryptAndRemux(y, v, m, this._txtTrack, r, i, a)
            },
            e.prototype.decryptAndRemux = function(e, t, r, i, a, n, o) {
                if (e.samples && e.isAAC) {
                    var s = this;
                    this.sampleAes.decryptAacSamples(e.samples, 0,
                    function() {
                        s.decryptAndRemuxAvc(e, t, r, i, a, n, o)
                    })
                } else this.decryptAndRemuxAvc(e, t, r, i, a, n, o)
            },
            e.prototype.decryptAndRemuxAvc = function(e, t, r, i, a, n, o) {
                if (t.samples) {
                    var s = this;
                    this.sampleAes.decryptAvcSamples(t.samples, 0, 0,
                    function() {
                        s.remuxer.remux(e, t, r, i, a, n, o)
                    })
                } else this.remuxer.remux(e, t, r, i, a, n, o)
            },
            e.prototype.destroy = function() {
                this._initPTS = this._initDTS = void 0,
                this._duration = 0
            },
            e.prototype._parsePAT = function(e, t) {
                return (31 & e[t + 10]) << 8 | e[t + 11]
            },
            e.prototype._parsePMT = function(e, t, r, i) {
                var a, n, o = {
                    audio: -1,
                    avc: -1,
                    id3: -1,
                    isAAC: !0
                };
                for (a = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4, t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < a;) {
                    switch (n = (31 & e[t + 1]) << 8 | e[t + 2], e[t]) {
                    case 207:
                        if (!i) {
                            l.logger.log("unkown stream type:" + e[t]);
                            break
                        }
                    case 15:
                        -1 === o.audio && (o.audio = n);
                        break;
                    case 21:
                        -1 === o.id3 && (o.id3 = n);
                        break;
                    case 219:
                        if (!i) {
                            l.logger.log("unkown stream type:" + e[t]);
                            break
                        }
                    case 27:
                        -1 === o.avc && (o.avc = n);
                        break;
                    case 3:
                    case 4:
                        r ? -1 === o.audio && (o.audio = n, o.isAAC = !1) : l.logger.log("MPEG audio found, not supported in this browser for now");
                        break;
                    case 36:
                        l.logger.warn("HEVC stream type found, not supported for now");
                        break;
                    default:
                        l.logger.log("unkown stream type:" + e[t])
                    }
                    t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
                }
                return o
            },
            e.prototype._parsePES = function(e) {
                var t, r, i, a, n, o, s, u, d = 0,
                f = e.data;
                if (!e || 0 === e.size) return null;
                for (; f[0].length < 19 && f.length > 1;) {
                    var c = new Uint8Array(f[0].length + f[1].length);
                    c.set(f[0]),
                    c.set(f[1], f[0].length),
                    f[0] = c,
                    f.splice(1, 1)
                }
                if (1 === ((t = f[0])[0] << 16) + (t[1] << 8) + t[2]) {
                    if ((i = (t[4] << 8) + t[5]) && i > e.size - 6) return null;
                    192 & (r = t[7]) && ((o = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2) > 4294967295 && (o -= 8589934592), 64 & r ? ((s = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 4294967295 && (s -= 8589934592), o - s > 54e5 && (l.logger.warn(Math.round((o - s) / 9e4) + "s delta between PTS and DTS, align them"), o = s)) : s = o),
                    u = (a = t[8]) + 9,
                    e.size -= u,
                    n = new Uint8Array(e.size);
                    for (var h = 0,
                    p = f.length; h < p; h++) {
                        var g = (t = f[h]).byteLength;
                        if (u) {
                            if (u > g) {
                                u -= g;
                                continue
                            }
                            t = t.subarray(u),
                            g -= u,
                            u = 0
                        }
                        n.set(t, d),
                        d += g
                    }
                    return i && (i -= a + 3),
                    {
                        data: n,
                        pts: o,
                        dts: s,
                        len: i
                    }
                }
                return null
            },
            e.prototype.pushAccesUnit = function(e, t) {
                if (e.units.length && e.frame) {
                    var r = t.samples,
                    i = r.length; ! this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (i || this.contiguous) ? (e.id = i, r.push(e)) : t.dropped++
                }
                e.debug.length && l.logger.log(e.pts + "/" + e.dts + ":" + e.debug)
            },
            e.prototype._parseAVCPES = function(e, t) {
                var r, i, a, n = this,
                s = this._avcTrack,
                l = this._parseAVCNALu(e.data),
                u = this.avcSample,
                d = !1,
                f = this.pushAccesUnit.bind(this),
                c = function(e, t, r, i) {
                    return {
                        key: e,
                        pts: t,
                        dts: r,
                        units: [],
                        debug: i
                    }
                };
                e.data = null,
                u && l.length && !s.audFound && (f(u, s), u = this.avcSample = c(!1, e.pts, e.dts, "")),
                l.forEach(function(t) {
                    switch (t.type) {
                    case 1:
                        i = !0,
                        u || (u = n.avcSample = c(!0, e.pts, e.dts, "")),
                        u.frame = !0;
                        var l = t.data;
                        if (d && l.length > 4) {
                            var h = new o.
                        default(l).readSliceType();
                            2 !== h && 4 !== h && 7 !== h && 9 !== h || (u.key = !0)
                        }
                        break;
                    case 5:
                        i = !0,
                        u || (u = n.avcSample = c(!0, e.pts, e.dts, "")),
                        u.key = !0,
                        u.frame = !0;
                        break;
                    case 6:
                        i = !0,
                        (r = new o.
                    default(n.discardEPB(t.data))).readUByte();
                        for (var p = 0,
                        g = 0,
                        v = !1,
                        y = 0; ! v && r.bytesAvailable > 1;) {
                            p = 0;
                            do {
                                p += y = r.readUByte()
                            } while ( 255 === y );
                            g = 0;
                            do {
                                g += y = r.readUByte()
                            } while ( 255 === y );
                            if (4 === p && 0 !== r.bytesAvailable) {
                                if (v = !0, 181 === r.readUByte()) if (49 === r.readUShort()) if (1195456820 === r.readUInt()) if (3 === r.readUByte()) {
                                    var m = r.readUByte(),
                                    E = 31 & m,
                                    _ = [m, r.readUByte()];
                                    for (a = 0; a < E; a++) _.push(r.readUByte()),
                                    _.push(r.readUByte()),
                                    _.push(r.readUByte());
                                    n._insertSampleInOrder(n._txtTrack.samples, {
                                        type: 3,
                                        pts: e.pts,
                                        bytes: _
                                    })
                                }
                            } else if (g < r.bytesAvailable) for (a = 0; a < g; a++) r.readUByte()
                        }
                        break;
                    case 7:
                        if (i = !0, d = !0, !s.sps) {
                            var T = (r = new o.
                        default(t.data)).readSPS();
                            s.width = T.width,
                            s.height = T.height,
                            s.pixelRatio = T.pixelRatio,
                            s.sps = [t.data],
                            s.duration = n._duration;
                            var S = t.data.subarray(1, 4),
                            b = "avc1.";
                            for (a = 0; a < 3; a++) {
                                var A = S[a].toString(16);
                                A.length < 2 && (A = "0" + A),
                                b += A
                            }
                            s.codec = b
                        }
                        break;
                    case 8:
                        i = !0,
                        s.pps || (s.pps = [t.data]);
                        break;
                    case 9:
                        i = !1,
                        s.audFound = !0,
                        u && f(u, s),
                        u = n.avcSample = c(!1, e.pts, e.dts, "");
                        break;
                    case 12:
                        i = !1;
                        break;
                    default:
                        i = !1,
                        u && (u.debug += "unknown NAL " + t.type + " ")
                    }
                    u && i && u.units.push(t)
                }),
                t && u && (f(u, s), this.avcSample = null)
            },
            e.prototype._insertSampleInOrder = function(e, t) {
                var r = e.length;
                if (r > 0) {
                    if (t.pts >= e[r - 1].pts) e.push(t);
                    else for (var i = r - 1; i >= 0; i--) if (t.pts < e[i].pts) {
                        e.splice(i, 0, t);
                        break
                    }
                } else e.push(t)
            },
            e.prototype._getLastNalUnit = function() {
                var e, t = this.avcSample;
                if (!t || 0 === t.units.length) {
                    var r = this._avcTrack.samples;
                    t = r[r.length - 1]
                }
                if (t) {
                    var i = t.units;
                    e = i[i.length - 1]
                }
                return e
            },
            e.prototype._parseAVCNALu = function(e) {
                var t, r, i, a, n = 0,
                o = e.byteLength,
                s = this._avcTrack,
                l = s.naluState || 0,
                u = l,
                d = [],
                f = -1;
                for ( - 1 === l && (f = 0, a = 31 & e[0], l = 0, n = 1); n < o;) if (t = e[n++], l) if (1 !== l) if (t) if (1 === t) {
                    var c, h;
                    if (f >= 0) i = {
                        data: e.subarray(f, n - l - 1),
                        type: a
                    },
                    d.push(i);
                    else if (c = this._getLastNalUnit()) if (u && n <= 4 - u && c.state && (c.data = c.data.subarray(0, c.data.byteLength - u)), (r = n - l - 1) > 0)(h = new Uint8Array(c.data.byteLength + r)).set(c.data, 0),
                    h.set(e.subarray(0, r), c.data.byteLength),
                    c.data = h;
                    n < o ? (f = n, a = 31 & e[n], l = 0) : l = -1
                } else l = 0;
                else l = 3;
                else l = t ? 0 : 2;
                else l = t ? 0 : 1; (f >= 0 && l >= 0 && (i = {
                    data: e.subarray(f, o),
                    type: a,
                    state: l
                },
                d.push(i)), 0 === d.length) && ((c = this._getLastNalUnit()) && ((h = new Uint8Array(c.data.byteLength + e.byteLength)).set(c.data, 0), h.set(e, c.data.byteLength), c.data = h));
                return s.naluState = l,
                d
            },
            e.prototype.discardEPB = function(e) {
                for (var t, r, i = e.byteLength,
                a = [], n = 1; n < i - 2;) 0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (a.push(n + 2), n += 2) : n++;
                if (0 === a.length) return e;
                t = i - a.length,
                r = new Uint8Array(t);
                var o = 0;
                for (n = 0; n < t; o++, n++) o === a[0] && (o++, a.shift()),
                r[n] = e[o];
                return r
            },
            e.prototype._parseAACPES = function(e) {
                var t, r, a, o, s, d = this._audioTrack,
                f = e.data,
                c = e.pts,
                h = this.aacOverFlow,
                p = this.aacLastPTS;
                if (h) {
                    var g = new Uint8Array(h.byteLength + f.byteLength);
                    g.set(h, 0),
                    g.set(f, h.byteLength),
                    f = g
                }
                for (a = 0, s = f.length; a < s - 1 && !i.isHeader(f, a); a++);
                if (a) {
                    var v = void 0,
                    y = void 0;
                    if (a < s - 1 ? (v = "AAC PES did not start with ADTS header,offset:" + a, y = !1) : (v = "no ADTS header found in AAC PES", y = !0), l.logger.warn("parsing error:" + v), this.observer.trigger(n.
                default.ERROR, {
                        type: u.ErrorTypes.MEDIA_ERROR,
                        details: u.ErrorDetails.FRAG_PARSING_ERROR,
                        fatal: y,
                        reason: v
                    }), y) return
                }
                if (i.initTrackConfig(d, this.observer, f, a, this.audioCodec), r = 0, t = i.getFrameDuration(d.samplerate), h && p) {
                    var m = p + t;
                    Math.abs(m - c) > 1 && (l.logger.log("AAC: align PTS for overlapping frames by " + Math.round((m - c) / 90)), c = m)
                }
                for (; a < s;) if (i.isHeader(f, a) && a + 5 < s) {
                    var E = i.appendFrame(d, f, a, c, r);
                    if (!E) break;
                    a += E.length,
                    o = E.sample.pts,
                    r++
                } else a++;
                h = a < s ? f.subarray(a, s) : null,
                this.aacOverFlow = h,
                this.aacLastPTS = o
            },
            e.prototype._parseMPEGPES = function(e) {
                for (var t = e.data,
                r = t.length,
                i = 0,
                n = 0,
                o = e.pts; n < r;) if (a.
            default.isHeader(t, n)) {
                    var s = a.
                default.appendFrame(this._audioTrack, t, n, o, i);
                    if (!s) break;
                    n += s.length,
                    i++
                } else n++
            },
            e.prototype._parseID3PES = function(e) {
                this._id3Track.samples.push(e)
            },
            e
        } ();
        t.
    default = f
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(0),
        a = function() {
            function e(e) {
                this.data = e,
                this.bytesAvailable = e.byteLength,
                this.word = 0,
                this.bitsAvailable = 0
            }
            return e.prototype.loadWord = function() {
                var e = this.data,
                t = this.bytesAvailable,
                r = e.byteLength - t,
                i = new Uint8Array(4),
                a = Math.min(4, t);
                if (0 === a) throw new Error("no bytes available");
                i.set(e.subarray(r, r + a)),
                this.word = new DataView(i.buffer).getUint32(0),
                this.bitsAvailable = 8 * a,
                this.bytesAvailable -= a
            },
            e.prototype.skipBits = function(e) {
                var t;
                this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, e -= (t = e >> 3) >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
            },
            e.prototype.readBits = function(e) {
                var t = Math.min(this.bitsAvailable, e),
                r = this.word >>> 32 - t;
                return e > 32 && i.logger.error("Cannot read more than 32 bits at a time"),
                this.bitsAvailable -= t,
                this.bitsAvailable > 0 ? this.word <<= t: this.bytesAvailable > 0 && this.loadWord(),
                (t = e - t) > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r
            },
            e.prototype.skipLZ = function() {
                var e;
                for (e = 0; e < this.bitsAvailable; ++e) if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e,
                this.bitsAvailable -= e,
                e;
                return this.loadWord(),
                e + this.skipLZ()
            },
            e.prototype.skipUEG = function() {
                this.skipBits(1 + this.skipLZ())
            },
            e.prototype.skipEG = function() {
                this.skipBits(1 + this.skipLZ())
            },
            e.prototype.readUEG = function() {
                var e = this.skipLZ();
                return this.readBits(e + 1) - 1
            },
            e.prototype.readEG = function() {
                var e = this.readUEG();
                return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
            },
            e.prototype.readBoolean = function() {
                return 1 === this.readBits(1)
            },
            e.prototype.readUByte = function() {
                return this.readBits(8)
            },
            e.prototype.readUShort = function() {
                return this.readBits(16)
            },
            e.prototype.readUInt = function() {
                return this.readBits(32)
            },
            e.prototype.skipScalingList = function(e) {
                var t, r = 8,
                i = 8;
                for (t = 0; t < e; t++) 0 !== i && (i = (r + this.readEG() + 256) % 256),
                r = 0 === i ? r: i
            },
            e.prototype.readSPS = function() {
                var e, t, r, i, a, n, o, s = 0,
                l = 0,
                u = 0,
                d = 0,
                f = this.readUByte.bind(this),
                c = this.readBits.bind(this),
                h = this.readUEG.bind(this),
                p = this.readBoolean.bind(this),
                g = this.skipBits.bind(this),
                v = this.skipEG.bind(this),
                y = this.skipUEG.bind(this),
                m = this.skipScalingList.bind(this);
                if (f(), e = f(), c(5), g(3), f(), y(), 100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
                    var E = h();
                    if (3 === E && g(1), y(), y(), g(1), p()) for (n = 3 !== E ? 8 : 12, o = 0; o < n; o++) p() && m(o < 6 ? 16 : 64)
                }
                y();
                var _ = h();
                if (0 === _) h();
                else if (1 === _) for (g(1), v(), v(), t = h(), o = 0; o < t; o++) v();
                y(),
                g(1),
                r = h(),
                i = h(),
                0 === (a = c(1)) && g(1),
                g(1),
                p() && (s = h(), l = h(), u = h(), d = h());
                var T = [1, 1];
                if (p() && p()) switch (f()) {
                case 1:
                    T = [1, 1];
                    break;
                case 2:
                    T = [12, 11];
                    break;
                case 3:
                    T = [10, 11];
                    break;
                case 4:
                    T = [16, 11];
                    break;
                case 5:
                    T = [40, 33];
                    break;
                case 6:
                    T = [24, 11];
                    break;
                case 7:
                    T = [20, 11];
                    break;
                case 8:
                    T = [32, 11];
                    break;
                case 9:
                    T = [80, 33];
                    break;
                case 10:
                    T = [18, 11];
                    break;
                case 11:
                    T = [15, 11];
                    break;
                case 12:
                    T = [64, 33];
                    break;
                case 13:
                    T = [160, 99];
                    break;
                case 14:
                    T = [4, 3];
                    break;
                case 15:
                    T = [3, 2];
                    break;
                case 16:
                    T = [2, 1];
                    break;
                case 255:
                    T = [f() << 8 | f(), f() << 8 | f()]
                }
                return {
                    width: Math.ceil(16 * (r + 1) - 2 * s - 2 * l),
                    height: (2 - a) * (i + 1) * 16 - (a ? 2 : 4) * (u + d),
                    pixelRatio: T
                }
            },
            e.prototype.readSliceType = function() {
                return this.readUByte(),
                this.readUEG(),
                this.readUEG()
            },
            e
        } ();
        t.
    default = a
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(13),
        a = function() {
            function e(e, t, r, a) {
                this.decryptdata = r,
                this.discardEPB = a,
                this.decrypter = new i.
            default(e, t, {
                    removePKCS7Padding: !1
                })
            }
            return e.prototype.decryptBuffer = function(e, t) {
                this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
            },
            e.prototype.decryptAacSample = function(e, t, r, i) {
                var a = e[t].unit,
                n = a.subarray(16, a.length - a.length % 16),
                o = n.buffer.slice(n.byteOffset, n.byteOffset + n.length),
                s = this;
                this.decryptBuffer(o,
                function(n) {
                    n = new Uint8Array(n),
                    a.set(n, 16),
                    i || s.decryptAacSamples(e, t + 1, r)
                })
            },
            e.prototype.decryptAacSamples = function(e, t, r) {
                for (;; t++) {
                    if (t >= e.length) return void r();
                    if (! (e[t].unit.length < 32)) {
                        var i = this.decrypter.isSync();
                        if (this.decryptAacSample(e, t, r, i), !i) return
                    }
                }
            },
            e.prototype.getAvcEncryptedData = function(e) {
                for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), i = 0, a = 32; a <= e.length - 16; a += 160, i += 16) r.set(e.subarray(a, a + 16), i);
                return r
            },
            e.prototype.getAvcDecryptedUnit = function(e, t) {
                t = new Uint8Array(t);
                for (var r = 0,
                i = 32; i <= e.length - 16; i += 160, r += 16) e.set(t.subarray(r, r + 16), i);
                return e
            },
            e.prototype.decryptAvcSample = function(e, t, r, i, a, n) {
                var o = this.discardEPB(a.data),
                s = this.getAvcEncryptedData(o),
                l = this;
                this.decryptBuffer(s.buffer,
                function(s) {
                    a.data = l.getAvcDecryptedUnit(o, s),
                    n || l.decryptAvcSamples(e, t, r + 1, i)
                })
            },
            e.prototype.decryptAvcSamples = function(e, t, r, i) {
                for (;; t++, r = 0) {
                    if (t >= e.length) return void i();
                    for (var a = e[t].units; ! (r >= a.length); r++) {
                        var n = a[r];
                        if (! (n.length <= 48 || 1 !== n.type && 5 !== n.type)) {
                            var o = this.decrypter.isSync();
                            if (this.decryptAvcSample(e, t, r, i, n, o), !o) return
                        }
                    }
                }
            },
            e
        } ();
        t.
    default = a
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(11),
        a = r(0),
        n = r(23),
        o = function() {
            function e(e, t, r) {
                this.observer = e,
                this.config = r,
                this.remuxer = t
            }
            return e.prototype.resetInitSegment = function(e, t, r, i) {
                this._audioTrack = {
                    container: "audio/mpeg",
                    type: "audio",
                    id: -1,
                    sequenceNumber: 0,
                    isAAC: !1,
                    samples: [],
                    len: 0,
                    manifestCodec: t,
                    duration: i,
                    inputTimeScale: 9e4
                }
            },
            e.prototype.resetTimeStamp = function() {},
            e.probe = function(e) {
                var t, r, o = i.
            default.getID3Data(e, 0);
                if (o && void 0 !== i.
            default.getTimeStamp(o)) for (t = o.length, r = Math.min(e.length - 1, t + 100); t < r; t++) if (n.
            default.probe(e, t)) return a.logger.log("MPEG Audio sync word found !"),
                !0;
                return ! 1
            },
            e.prototype.append = function(e, t, r, a) {
                for (var o = i.
            default.getID3Data(e, 0), s = i.
            default.getTimeStamp(o), l = s ? 90 * s: 9e4 * t, u = o.length, d = e.length, f = 0, c = 0, h = this._audioTrack, p = [{
                    pts: l,
                    dts: l,
                    data: o
                }]; u < d;) if (n.
            default.isHeader(e, u)) {
                    var g = n.
                default.appendFrame(h, e, u, l, f);
                    if (!g) break;
                    u += g.length,
                    c = g.sample.pts,
                    f++
                } else i.
            default.isHeader(e, u) ? (o = i.
            default.getID3Data(e, u), p.push({
                    pts: c,
                    dts: c,
                    data: o
                }), u += o.length) : u++;
                this.remuxer.remux(h, {
                    samples: []
                },
                {
                    samples: p,
                    inputTimeScale: 9e4
                },
                {
                    samples: []
                },
                t, r, a)
            },
            e.prototype.destroy = function() {},
            e
        } ();
        t.
    default = o
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(48),
        a = r(49),
        n = r(1),
        o = r(3),
        s = r(0),
        l = function() {
            function e(e, t, r, i) {
                this.observer = e,
                this.config = t,
                this.typeSupported = r;
                var a = navigator.userAgent;
                this.isSafari = i && i.indexOf("Apple") > -1 && a && !a.match("CriOS"),
                this.ISGenerated = !1
            }
            return e.prototype.destroy = function() {},
            e.prototype.resetTimeStamp = function(e) {
                this._initPTS = this._initDTS = e
            },
            e.prototype.resetInitSegment = function() {
                this.ISGenerated = !1
            },
            e.prototype.remux = function(e, t, r, i, a, o, l) {
                if (this.ISGenerated || this.generateIS(e, t, a), this.ISGenerated) {
                    var u = e.samples.length,
                    d = t.samples.length,
                    f = a,
                    c = a;
                    if (u && d) {
                        var h = (e.samples[0].pts - t.samples[0].pts) / t.inputTimeScale;
                        f += Math.max(0, h),
                        c += Math.max(0, -h)
                    }
                    if (u) {
                        e.timescale || (s.logger.warn("regenerate InitSegment as audio detected"), this.generateIS(e, t, a));
                        var p = this.remuxAudio(e, f, o, l);
                        if (d) {
                            var g = void 0;
                            p && (g = p.endPTS - p.startPTS),
                            t.timescale || (s.logger.warn("regenerate InitSegment as video detected"), this.generateIS(e, t, a)),
                            this.remuxVideo(t, c, o, g, l)
                        }
                    } else if (d) {
                        var v = this.remuxVideo(t, c, o, 0, l);
                        v && e.codec && this.remuxEmptyAudio(e, f, o, v)
                    }
                }
                r.samples.length && this.remuxID3(r, a),
                i.samples.length && this.remuxText(i, a),
                this.observer.trigger(n.
            default.FRAG_PARSED)
            },
            e.prototype.generateIS = function(e, t, r) {
                var i, l, u = this.observer,
                d = e.samples,
                f = t.samples,
                c = this.typeSupported,
                h = "audio/mp4",
                p = {},
                g = {
                    tracks: p
                },
                v = void 0 === this._initPTS;
                if (v && (i = l = 1 / 0), e.config && d.length && (e.timescale = e.samplerate, s.logger.log("audio sampling rate : " + e.samplerate), e.isAAC || (c.mpeg ? (h = "audio/mpeg", e.codec = "") : c.mp3 && (e.codec = "mp3")), p.audio = {
                    container: h,
                    codec: e.codec,
                    initSegment: !e.isAAC && c.mpeg ? new Uint8Array: a.
                default.initSegment([e]),
                    metadata: {
                        channelCount: e.channelCount
                    }
                },
                v && (i = l = d[0].pts - e.inputTimeScale * r)), t.sps && t.pps && f.length) {
                    var y = t.inputTimeScale;
                    t.timescale = y,
                    p.video = {
                        container: "video/mp4",
                        codec: t.codec,
                        initSegment: a.
                    default.initSegment([t]),
                        metadata: {
                            width: t.width,
                            height: t.height
                        }
                    },
                    v && (i = Math.min(i, f[0].pts - y * r), l = Math.min(l, f[0].dts - y * r), this.observer.trigger(n.
                default.INIT_PTS_FOUND, {
                        initPTS: i
                    }))
                }
                Object.keys(p).length ? (u.trigger(n.
            default.FRAG_PARSING_INIT_SEGMENT, g), this.ISGenerated = !0, v && (this._initPTS = i, this._initDTS = l)) : u.trigger(n.
            default.ERROR, {
                    type: o.ErrorTypes.MEDIA_ERROR,
                    details: o.ErrorDetails.FRAG_PARSING_ERROR,
                    fatal: !1,
                    reason: "no audio/video samples found"
                })
            },
            e.prototype.remuxVideo = function(e, t, r, i, l) {
                var u, d, f, c, h, p, g, v = 8,
                y = e.timescale,
                m = e.samples,
                E = [],
                _ = m.length,
                T = this._PTSNormalize,
                S = this._initPTS,
                b = this.nextAvcDts,
                A = this.isSafari;
                if (0 !== _) {
                    A && (r |= m.length && b && (l && Math.abs(t - b / y) < .1 || Math.abs(m[0].pts - b - S) < y / 5)),
                    r || (b = t * y),
                    m.forEach(function(e) {
                        e.pts = T(e.pts - S, b),
                        e.dts = T(e.dts - S, b)
                    }),
                    m.sort(function(e, t) {
                        var r = e.dts - t.dts,
                        i = e.pts - t.pts;
                        return r || i || e.id - t.id
                    });
                    var R = m.reduce(function(e, t) {
                        return Math.max(Math.min(e, t.pts - t.dts), -18e3)
                    },
                    0);
                    if (R < 0) {
                        s.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(R / 90) + " ms to overcome this issue");
                        for (var D = 0; D < m.length; D++) m[D].dts += R
                    }
                    var L = m[0];
                    h = Math.max(L.dts, 0),
                    c = Math.max(L.pts, 0);
                    var w = Math.round((h - b) / 90);
                    r && w && (w > 1 ? s.logger.log("AVC:" + w + " ms hole between fragments detected,filling it") : w < -1 && s.logger.log("AVC:" + -w + " ms overlapping between fragments detected"), h = b, m[0].dts = h, c = Math.max(c - w, b), m[0].pts = c, s.logger.log("Video/PTS/DTS adjusted: " + Math.round(c / 90) + "/" + Math.round(h / 90) + ",delta:" + w + " ms")),
                    L = m[m.length - 1],
                    g = Math.max(L.dts, 0),
                    p = Math.max(L.pts, 0, g),
                    A && (u = Math.round((g - h) / (m.length - 1)));
                    var O = 0,
                    I = 0;
                    for (D = 0; D < _; D++) {
                        for (var P = m[D], k = P.units, C = k.length, F = 0, x = 0; x < C; x++) F += k[x].data.length;
                        I += F,
                        O += C,
                        P.length = F,
                        P.dts = A ? h + D * u: Math.max(P.dts, h),
                        P.pts = Math.max(P.pts, P.dts)
                    }
                    var M = I + 4 * O + 8;
                    try {
                        d = new Uint8Array(M)
                    } catch(e) {
                        return void this.observer.trigger(n.
                    default.ERROR, {
                            type: o.ErrorTypes.MUX_ERROR,
                            details: o.ErrorDetails.REMUX_ALLOC_ERROR,
                            fatal: !1,
                            bytes: M,
                            reason: "fail allocating video mdat " + M
                        })
                    }
                    var N = new DataView(d.buffer);
                    N.setUint32(0, M),
                    d.set(a.
                default.types.mdat, 4);
                    for (D = 0; D < _; D++) {
                        var U = m[D],
                        B = U.units,
                        G = 0,
                        j = void 0;
                        for (x = 0, C = B.length; x < C; x++) {
                            var K = B[x],
                            H = K.data,
                            V = K.data.byteLength;
                            N.setUint32(v, V),
                            v += 4,
                            d.set(H, v),
                            v += V,
                            G += 4 + V
                        }
                        if (A) j = Math.max(0, u * Math.round((U.pts - U.dts) / u));
                        else {
                            if (D < _ - 1) u = m[D + 1].dts - U.dts;
                            else {
                                var W = this.config,
                                Y = U.dts - m[D > 0 ? D - 1 : D].dts;
                                if (W.stretchShortVideoTrack) {
                                    var q = W.maxBufferHole,
                                    X = Math.floor(q * y),
                                    z = (i ? c + i * y: this.nextAudioPts) - U.pts;
                                    z > X ? ((u = z - Y) < 0 && (u = Y), s.logger.log("It is approximately " + z / 90 + " ms to the next segment; using duration " + u / 90 + " ms for the last video frame.")) : u = Y
                                } else u = Y
                            }
                            j = Math.round(U.pts - U.dts)
                        }
                        E.push({
                            size: G,
                            duration: u,
                            cts: j,
                            flags: {
                                isLeading: 0,
                                isDependedOn: 0,
                                hasRedundancy: 0,
                                degradPrio: 0,
                                dependsOn: U.key ? 2 : 1,
                                isNonSync: U.key ? 0 : 1
                            }
                        })
                    }
                    this.nextAvcDts = g + u;
                    var Q = e.dropped;
                    if (e.len = 0, e.nbNalu = 0, e.dropped = 0, E.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                        var $ = E[0].flags;
                        $.dependsOn = 2,
                        $.isNonSync = 0
                    }
                    e.samples = E,
                    f = a.
                default.moof(e.sequenceNumber++, h, e),
                    e.samples = [];
                    var J = {
                        data1: f,
                        data2: d,
                        startPTS: c / y,
                        endPTS: (p + u) / y,
                        startDTS: h / y,
                        endDTS: this.nextAvcDts / y,
                        type: "video",
                        hasAudio: !1,
                        hasVideo: !0,
                        nb: E.length,
                        dropped: Q
                    };
                    return this.observer.trigger(n.
                default.FRAG_PARSING_DATA, J),
                    J
                }
            },
            e.prototype.remuxAudio = function(e, t, r, l) {
                var u, d, f, c, h, p, g, v = e.inputTimeScale,
                y = e.timescale,
                m = v / y,
                E = (e.isAAC ? 1024 : 1152) * m,
                _ = this._PTSNormalize,
                T = this._initPTS,
                S = !e.isAAC && this.typeSupported.mpeg,
                b = e.samples,
                A = [],
                R = this.nextAudioPts;
                if (r |= b.length && R && (l && Math.abs(t - R / v) < .1 || Math.abs(b[0].pts - R - T) < 20 * E), b.forEach(function(e) {
                    e.pts = e.dts = _(e.pts - T, t * v)
                }), 0 !== (b = b.filter(function(e) {
                    return e.pts >= 0
                })).length) {
                    if (r || (R = l ? t * v: b[0].pts), e.isAAC) for (var D = this.config.maxAudioFramesDrift,
                    L = 0,
                    w = R; L < b.length;) {
                        var O, I = b[L];
                        O = (U = I.pts) - w;
                        var P = Math.abs(1e3 * O / v);
                        if (O <= -D * E) s.logger.warn("Dropping 1 audio frame @ " + (w / v).toFixed(3) + "s due to " + Math.round(P) + " ms overlap."),
                        b.splice(L, 1),
                        e.len -= I.unit.length;
                        else if (O >= D * E && P < 1e4 && w) {
                            var k = Math.round(O / E);
                            s.logger.warn("Injecting " + k + " audio frame @ " + (w / v).toFixed(3) + "s due to " + Math.round(1e3 * O / v) + " ms gap.");
                            for (var C = 0; C < k; C++) {
                                var F = Math.max(w, 0); (f = i.
                            default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (s.logger.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), f = I.unit.subarray()),
                                b.splice(L, 0, {
                                    unit: f,
                                    pts: F,
                                    dts: F
                                }),
                                e.len += f.length,
                                w += E,
                                L++
                            }
                            I.pts = I.dts = w,
                            w += E,
                            L++
                        } else Math.abs(O),
                        I.pts = I.dts = w,
                        w += E,
                        L++
                    }
                    C = 0;
                    for (var x = b.length; C < x; C++) {
                        var M = b[C],
                        N = M.unit,
                        U = M.pts;
                        if (void 0 !== g) d.duration = Math.round((U - g) / m);
                        else {
                            var B = Math.round(1e3 * (U - R) / v),
                            G = 0;
                            if (r && e.isAAC && B) {
                                if (B > 0 && B < 1e4) G = Math.round((U - R) / E),
                                s.logger.log(B + " ms hole between AAC samples detected,filling it"),
                                G > 0 && ((f = i.
                            default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (f = N.subarray()), e.len += G * f.length);
                                else if (B < -12) {
                                    s.logger.log("drop overlapping AAC sample, expected/parsed/delta:" + (R / v).toFixed(3) + "s/" + (U / v).toFixed(3) + "s/" + -B + "ms"),
                                    e.len -= N.byteLength;
                                    continue
                                }
                                U = R
                            }
                            if (p = U, !(e.len > 0)) return;
                            var j = S ? e.len: e.len + 8;
                            u = S ? 0 : 8;
                            try {
                                c = new Uint8Array(j)
                            } catch(e) {
                                return void this.observer.trigger(n.
                            default.ERROR, {
                                    type: o.ErrorTypes.MUX_ERROR,
                                    details: o.ErrorDetails.REMUX_ALLOC_ERROR,
                                    fatal: !1,
                                    bytes: j,
                                    reason: "fail allocating audio mdat " + j
                                })
                            }
                            S || (new DataView(c.buffer).setUint32(0, j), c.set(a.
                        default.types.mdat, 4));
                            for (L = 0; L < G; L++)(f = i.
                        default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (s.logger.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), f = N.subarray()),
                            c.set(f, u),
                            u += f.byteLength,
                            d = {
                                size: f.byteLength,
                                cts: 0,
                                duration: 1024,
                                flags: {
                                    isLeading: 0,
                                    isDependedOn: 0,
                                    hasRedundancy: 0,
                                    degradPrio: 0,
                                    dependsOn: 1
                                }
                            },
                            A.push(d)
                        }
                        c.set(N, u);
                        var K = N.byteLength;
                        u += K,
                        d = {
                            size: K,
                            cts: 0,
                            duration: 0,
                            flags: {
                                isLeading: 0,
                                isDependedOn: 0,
                                hasRedundancy: 0,
                                degradPrio: 0,
                                dependsOn: 1
                            }
                        },
                        A.push(d),
                        g = U
                    }
                    var H = 0,
                    V = A.length;
                    if (V >= 2 && (H = A[V - 2].duration, d.duration = H), V) {
                        this.nextAudioPts = R = g + m * H,
                        e.len = 0,
                        e.samples = A,
                        h = S ? new Uint8Array: a.
                    default.moof(e.sequenceNumber++, p / m, e),
                        e.samples = [];
                        var W = p / v,
                        Y = R / v,
                        q = {
                            data1: h,
                            data2: c,
                            startPTS: W,
                            endPTS: Y,
                            startDTS: W,
                            endDTS: Y,
                            type: "audio",
                            hasAudio: !0,
                            hasVideo: !1,
                            nb: V
                        };
                        return this.observer.trigger(n.
                    default.FRAG_PARSING_DATA, q),
                        q
                    }
                    return null
                }
            },
            e.prototype.remuxEmptyAudio = function(e, t, r, a) {
                var n = e.inputTimeScale,
                o = n / (e.samplerate ? e.samplerate: n),
                l = this.nextAudioPts,
                u = (void 0 !== l ? l: a.startDTS * n) + this._initDTS,
                d = a.endDTS * n + this._initDTS,
                f = 1024 * o,
                c = Math.ceil((d - u) / f),
                h = i.
            default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
                if (s.logger.warn("remux empty Audio"), h) {
                    for (var p = [], g = 0; g < c; g++) {
                        var v = u + g * f;
                        p.push({
                            unit: h,
                            pts: v,
                            dts: v
                        }),
                        e.len += h.length
                    }
                    e.samples = p,
                    this.remuxAudio(e, t, r)
                } else s.logger.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
            },
            e.prototype.remuxID3 = function(e) {
                var t, r = e.samples.length,
                i = e.inputTimeScale,
                a = this._initPTS,
                o = this._initDTS;
                if (r) {
                    for (var s = 0; s < r; s++)(t = e.samples[s]).pts = (t.pts - a) / i,
                    t.dts = (t.dts - o) / i;
                    this.observer.trigger(n.
                default.FRAG_PARSING_METADATA, {
                        samples: e.samples
                    })
                }
                e.samples = []
            },
            e.prototype.remuxText = function(e) {
                e.samples.sort(function(e, t) {
                    return e.pts - t.pts
                });
                var t, r = e.samples.length,
                i = e.inputTimeScale,
                a = this._initPTS;
                if (r) {
                    for (var o = 0; o < r; o++)(t = e.samples[o]).pts = (t.pts - a) / i;
                    this.observer.trigger(n.
                default.FRAG_PARSING_USERDATA, {
                        samples: e.samples
                    })
                }
                e.samples = []
            },
            e.prototype._PTSNormalize = function(e, t) {
                var r;
                if (void 0 === t) return e;
                for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += r;
                return e
            },
            e
        } ();
        t.
    default = l
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
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
            },
            e
        } ();
        t.
    default = i
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = Math.pow(2, 32) - 1,
        a = function() {
            function e() {}
            return e.init = function() {
                var t;
                for (t in e.types = {
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
                },
                e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
                i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                e.HDLR_TYPES = {
                    video: r,
                    audio: i
                };
                var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
                n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                e.STTS = e.STSC = e.STCO = n,
                e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
                e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                var o = new Uint8Array([105, 115, 111, 109]),
                s = new Uint8Array([97, 118, 99, 49]),
                l = new Uint8Array([0, 0, 0, 1]);
                e.FTYP = e.box(e.types.ftyp, o, l, o, s),
                e.DINF = e.box(e.types.dinf, e.box(e.types.dref, a))
            },
            e.box = function(e) {
                for (var t, r = Array.prototype.slice.call(arguments, 1), i = 8, a = r.length, n = a; a--;) i += r[a].byteLength;
                for ((t = new Uint8Array(i))[0] = i >> 24 & 255, t[1] = i >> 16 & 255, t[2] = i >> 8 & 255, t[3] = 255 & i, t.set(e, 4), a = 0, i = 8; a < n; a++) t.set(r[a], i),
                i += r[a].byteLength;
                return t
            },
            e.hdlr = function(t) {
                return e.box(e.types.hdlr, e.HDLR_TYPES[t])
            },
            e.mdat = function(t) {
                return e.box(e.types.mdat, t)
            },
            e.mdhd = function(t, r) {
                r *= t;
                var a = Math.floor(r / (i + 1)),
                n = Math.floor(r % (i + 1));
                return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 85, 196, 0, 0]))
            },
            e.mdia = function(t) {
                return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
            },
            e.mfhd = function(t) {
                return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
            },
            e.minf = function(t) {
                return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
            },
            e.moof = function(t, r, i) {
                return e.box(e.types.moof, e.mfhd(t), e.traf(i, r))
            },
            e.moov = function(t) {
                for (var r = t.length,
                i = []; r--;) i[r] = e.trak(t[r]);
                return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(e.mvex(t)))
            },
            e.mvex = function(t) {
                for (var r = t.length,
                i = []; r--;) i[r] = e.trex(t[r]);
                return e.box.apply(null, [e.types.mvex].concat(i))
            },
            e.mvhd = function(t, r) {
                r *= t;
                var a = Math.floor(r / (i + 1)),
                n = Math.floor(r % (i + 1)),
                o = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                return e.box(e.types.mvhd, o)
            },
            e.sdtp = function(t) {
                var r, i, a = t.samples || [],
                n = new Uint8Array(4 + a.length);
                for (i = 0; i < a.length; i++) r = a[i].flags,
                n[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
                return e.box(e.types.sdtp, n)
            },
            e.stbl = function(t) {
                return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
            },
            e.avc1 = function(t) {
                var r, i, a, n = [],
                o = [];
                for (r = 0; r < t.sps.length; r++) a = (i = t.sps[r]).byteLength,
                n.push(a >>> 8 & 255),
                n.push(255 & a),
                n = n.concat(Array.prototype.slice.call(i));
                for (r = 0; r < t.pps.length; r++) a = (i = t.pps[r]).byteLength,
                o.push(a >>> 8 & 255),
                o.push(255 & a),
                o = o.concat(Array.prototype.slice.call(i));
                var s = e.box(e.types.avcC, new Uint8Array([1, n[3], n[4], n[5], 255, 224 | t.sps.length].concat(n).concat([t.pps.length]).concat(o))),
                l = t.width,
                u = t.height,
                d = t.pixelRatio[0],
                f = t.pixelRatio[1];
                return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), s, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d, f >> 24, f >> 16 & 255, f >> 8 & 255, 255 & f])))
            },
            e.esds = function(e) {
                var t = e.config.length;
                return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
            },
            e.mp4a = function(t) {
                var r = t.samplerate;
                return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)))
            },
            e.mp3 = function(t) {
                var r = t.samplerate;
                return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
            },
            e.stsd = function(t) {
                return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
            },
            e.tkhd = function(t) {
                var r = t.id,
                a = t.duration * t.timescale,
                n = t.width,
                o = t.height,
                s = Math.floor(a / (i + 1)),
                l = Math.floor(a % (i + 1));
                return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, n >> 8 & 255, 255 & n, 0, 0, o >> 8 & 255, 255 & o, 0, 0]))
            },
            e.traf = function(t, r) {
                var a = e.sdtp(t),
                n = t.id,
                o = Math.floor(r / (i + 1)),
                s = Math.floor(r % (i + 1));
                return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), e.trun(t, a.length + 16 + 20 + 8 + 16 + 8 + 8), a)
            },
            e.trak = function(t) {
                return t.duration = t.duration || 4294967295,
                e.box(e.types.trak, e.tkhd(t), e.mdia(t))
            },
            e.trex = function(t) {
                var r = t.id;
                return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
            },
            e.trun = function(t, r) {
                var i, a, n, o, s, l, u = t.samples || [],
                d = u.length,
                f = 12 + 16 * d,
                c = new Uint8Array(f);
                for (r += 8 + f, c.set([0, 0, 15, 1, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), i = 0; i < d; i++) n = (a = u[i]).duration,
                o = a.size,
                s = a.flags,
                l = a.cts,
                c.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, o >>> 24 & 255, o >>> 16 & 255, o >>> 8 & 255, 255 & o, s.isLeading << 2 | s.dependsOn, s.isDependedOn << 6 | s.hasRedundancy << 4 | s.paddingValue << 1 | s.isNonSync, 61440 & s.degradPrio, 15 & s.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                return e.box(e.types.trun, c)
            },
            e.initSegment = function(t) {
                e.types || e.init();
                var r, i = e.moov(t);
                return (r = new Uint8Array(e.FTYP.byteLength + i.byteLength)).set(e.FTYP),
                r.set(i, e.FTYP.byteLength),
                r
            },
            e
        } ();
        t.
    default = a
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(1),
        a = function() {
            function e(e) {
                this.observer = e
            }
            return e.prototype.destroy = function() {},
            e.prototype.resetTimeStamp = function() {},
            e.prototype.resetInitSegment = function() {},
            e.prototype.remux = function(e, t, r, a, n, o, s, l) {
                var u = this.observer,
                d = "";
                e && (d += "audio"),
                t && (d += "video"),
                u.trigger(i.
            default.FRAG_PARSING_DATA, {
                    data1: l,
                    startPTS: n,
                    startDTS: n,
                    type: d,
                    hasAudio: !!e,
                    hasVideo: !!t,
                    nb: 1,
                    dropped: 0
                }),
                u.trigger(i.
            default.FRAG_PARSED)
            },
            e
        } ();
        t.
    default = a
    },
    function(e, t, r) {
        "use strict";
        var i = Object.prototype.hasOwnProperty,
        a = "~";
        function n() {}
        function o(e, t, r, i, n) {
            if ("function" != typeof r) throw new TypeError("The listener must be a function");
            var o = new
            function(e, t, r) {
                this.fn = e,
                this.context = t,
                this.once = r || !1
            } (r, i || e, n),
            s = a ? a + t: t;
            return e._events[s] ? e._events[s].fn ? e._events[s] = [e._events[s], o] : e._events[s].push(o) : (e._events[s] = o, e._eventsCount++),
            e
        }
        function s(e, t) {
            0 == --e._eventsCount ? e._events = new n: delete e._events[t]
        }
        function l() {
            this._events = new n,
            this._eventsCount = 0
        }
        Object.create && (n.prototype = Object.create(null), (new n).__proto__ || (a = !1)),
        l.prototype.eventNames = function() {
            var e, t, r = [];
            if (0 === this._eventsCount) return r;
            for (t in e = this._events) i.call(e, t) && r.push(a ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
        },
        l.prototype.listeners = function(e) {
            var t = a ? a + e: e,
            r = this._events[t];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var i = 0,
            n = r.length,
            o = new Array(n); i < n; i++) o[i] = r[i].fn;
            return o
        },
        l.prototype.listenerCount = function(e) {
            var t = a ? a + e: e,
            r = this._events[t];
            return r ? r.fn ? 1 : r.length: 0
        },
        l.prototype.emit = function(e, t, r, i, n, o) {
            var s = a ? a + e: e;
            if (!this._events[s]) return ! 1;
            var l, u, d = this._events[s],
            f = arguments.length;
            if (d.fn) {
                switch (d.once && this.removeListener(e, d.fn, void 0, !0), f) {
                case 1:
                    return d.fn.call(d.context),
                    !0;
                case 2:
                    return d.fn.call(d.context, t),
                    !0;
                case 3:
                    return d.fn.call(d.context, t, r),
                    !0;
                case 4:
                    return d.fn.call(d.context, t, r, i),
                    !0;
                case 5:
                    return d.fn.call(d.context, t, r, i, n),
                    !0;
                case 6:
                    return d.fn.call(d.context, t, r, i, n, o),
                    !0
                }
                for (u = 1, l = new Array(f - 1); u < f; u++) l[u - 1] = arguments[u];
                d.fn.apply(d.context, l)
            } else {
                var c, h = d.length;
                for (u = 0; u < h; u++) switch (d[u].once && this.removeListener(e, d[u].fn, void 0, !0), f) {
                case 1:
                    d[u].fn.call(d[u].context);
                    break;
                case 2:
                    d[u].fn.call(d[u].context, t);
                    break;
                case 3:
                    d[u].fn.call(d[u].context, t, r);
                    break;
                case 4:
                    d[u].fn.call(d[u].context, t, r, i);
                    break;
                default:
                    if (!l) for (c = 1, l = new Array(f - 1); c < f; c++) l[c - 1] = arguments[c];
                    d[u].fn.apply(d[u].context, l)
                }
            }
            return ! 0
        },
        l.prototype.on = function(e, t, r) {
            return o(this, e, t, r, !1)
        },
        l.prototype.once = function(e, t, r) {
            return o(this, e, t, r, !0)
        },
        l.prototype.removeListener = function(e, t, r, i) {
            var n = a ? a + e: e;
            if (!this._events[n]) return this;
            if (!t) return s(this, n),
            this;
            var o = this._events[n];
            if (o.fn) o.fn !== t || i && !o.once || r && o.context !== r || s(this, n);
            else {
                for (var l = 0,
                u = [], d = o.length; l < d; l++)(o[l].fn !== t || i && !o[l].once || r && o[l].context !== r) && u.push(o[l]);
                u.length ? this._events[n] = 1 === u.length ? u[0] : u: s(this, n)
            }
            return this
        },
        l.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = a ? a + e: e, this._events[t] && s(this, t)) : (this._events = new n, this._eventsCount = 0),
            this
        },
        l.prototype.off = l.prototype.removeListener,
        l.prototype.addListener = l.prototype.on,
        l.prefixed = a,
        l.EventEmitter = l,
        e.exports = l
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(21),
        a = r(1),
        n = r(0),
        o = r(53);
        t.
    default = function(e) {
            var t = new o.EventEmitter;
            t.trigger = function(e) {
                for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                t.emit.apply(t, [e, e].concat(r))
            },
            t.off = function(e) {
                for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                t.removeListener.apply(t, [e].concat(r))
            };
            var r = function(t, r) {
                e.postMessage({
                    event: t,
                    data: r
                })
            };
            e.addEventListener("message",
            function(a) {
                var o = a.data;
                switch (o.cmd) {
                case "init":
                    var s = JSON.parse(o.config);
                    e.demuxer = new i.
                default(t, o.typeSupported, s, o.vendor),
                    n.enableLogs(s.debug),
                    r("init", null);
                    break;
                case "demux":
                    e.demuxer.push(o.data, o.decryptdata, o.initSegment, o.audioCodec, o.videoCodec, o.timeOffset, o.discontinuity, o.trackSwitch, o.contiguous, o.duration, o.accurateTimeOffset, o.defaultInitPTS)
                }
            }),
            t.on(a.
        default.FRAG_DECRYPTED, r),
            t.on(a.
        default.FRAG_PARSING_INIT_SEGMENT, r),
            t.on(a.
        default.FRAG_PARSED, r),
            t.on(a.
        default.ERROR, r),
            t.on(a.
        default.FRAG_PARSING_METADATA, r),
            t.on(a.
        default.FRAG_PARSING_USERDATA, r),
            t.on(a.
        default.INIT_PTS_FOUND, r),
            t.on(a.
        default.FRAG_PARSING_DATA,
            function(t, r) {
                var i = [],
                a = {
                    event: t,
                    data: r
                };
                r.data1 && (a.data1 = r.data1.buffer, i.push(r.data1.buffer), delete r.data1),
                r.data2 && (a.data2 = r.data2.buffer, i.push(r.data2.buffer), delete r.data2),
                e.postMessage(a, i)
            })
        }
    },
    function(e, t) {
        function r() {
            this._events = this._events || {},
            this._maxListeners = this._maxListeners || void 0
        }
        function i(e) {
            return "function" == typeof e
        }
        function a(e) {
            return "object" == typeof e && null !== e
        }
        function n(e) {
            return void 0 === e
        }
        e.exports = r,
        r.EventEmitter = r,
        r.prototype._events = void 0,
        r.prototype._maxListeners = void 0,
        r.defaultMaxListeners = 10,
        r.prototype.setMaxListeners = function(e) {
            if (!
            function(e) {
                return "number" == typeof e
            } (e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
            return this._maxListeners = e,
            this
        },
        r.prototype.emit = function(e) {
            var t, r, o, s, l, u;
            if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
                if ((t = arguments[1]) instanceof Error) throw t;
                var d = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw d.context = t,
                d
            }
            if (n(r = this._events[e])) return ! 1;
            if (i(r)) switch (arguments.length) {
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
                s = Array.prototype.slice.call(arguments, 1),
                r.apply(this, s)
            } else if (a(r)) for (s = Array.prototype.slice.call(arguments, 1), o = (u = r.slice()).length, l = 0; l < o; l++) u[l].apply(this, s);
            return ! 0
        },
        r.prototype.addListener = function(e, t) {
            var o;
            if (!i(t)) throw TypeError("listener must be a function");
            return this._events || (this._events = {}),
            this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener: t),
            this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
            a(this._events[e]) && !this._events[e].warned && (o = n(this._maxListeners) ? r.defaultMaxListeners: this._maxListeners) && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace()),
            this
        },
        r.prototype.on = r.prototype.addListener,
        r.prototype.once = function(e, t) {
            if (!i(t)) throw TypeError("listener must be a function");
            var r = !1;
            function a() {
                this.removeListener(e, a),
                r || (r = !0, t.apply(this, arguments))
            }
            return a.listener = t,
            this.on(e, a),
            this
        },
        r.prototype.removeListener = function(e, t) {
            var r, n, o, s;
            if (!i(t)) throw TypeError("listener must be a function");
            if (!this._events || !this._events[e]) return this;
            if (o = (r = this._events[e]).length, n = -1, r === t || i(r.listener) && r.listener === t) delete this._events[e],
            this._events.removeListener && this.emit("removeListener", e, t);
            else if (a(r)) {
                for (s = o; s-->0;) if (r[s] === t || r[s].listener && r[s].listener === t) {
                    n = s;
                    break
                }
                if (n < 0) return this;
                1 === r.length ? (r.length = 0, delete this._events[e]) : r.splice(n, 1),
                this._events.removeListener && this.emit("removeListener", e, t)
            }
            return this
        },
        r.prototype.removeAllListeners = function(e) {
            var t, r;
            if (!this._events) return this;
            if (!this._events.removeListener) return 0 === arguments.length ? this._events = {}: this._events[e] && delete this._events[e],
            this;
            if (0 === arguments.length) {
                for (t in this._events)"removeListener" !== t && this.removeAllListeners(t);
                return this.removeAllListeners("removeListener"),
                this._events = {},
                this
            }
            if (i(r = this._events[e])) this.removeListener(e, r);
            else if (r) for (; r.length;) this.removeListener(e, r[r.length - 1]);
            return delete this._events[e],
            this
        },
        r.prototype.listeners = function(e) {
            return this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
        },
        r.prototype.listenerCount = function(e) {
            if (this._events) {
                var t = this._events[e];
                if (i(t)) return 1;
                if (t) return t.length
            }
            return 0
        },
        r.listenerCount = function(e, t) {
            return e.listenerCount(t)
        }
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(5),
        a = r(3),
        n = r(1),
        o = r(0),
        s = function() {
            function e(e, t, r, i) {
                this.config = e,
                this.media = t,
                this.fragmentTracker = r,
                this.hls = i,
                this.stallReported = !1
            }
            return e.prototype.poll = function(e, t) {
                var r = this.config,
                a = this.media,
                n = a.currentTime,
                s = window.performance.now();
                if (n !== e) return this.stallReported && (o.logger.warn("playback not stuck anymore @" + n + ", after " + Math.round(s - this.stalled) + "ms"), this.stallReported = !1),
                this.stalled = null,
                void(this.nudgeRetry = 0);
                if (! (a.ended || !a.buffered.length || a.readyState > 2 || a.seeking && i.BufferHelper.isBuffered(a, n))) {
                    var l = s - this.stalled,
                    u = i.BufferHelper.bufferInfo(a, n, r.maxBufferHole);
                    this.stalled ? (l >= 1e3 && this._reportStall(u.len), this._tryFixBufferStall(u, l)) : this.stalled = s
                }
            },
            e.prototype._tryFixBufferStall = function(e, t) {
                var r = this.config,
                i = this.fragmentTracker,
                a = this.media.currentTime,
                n = i.getPartialFragment(a);
                n && this._trySkipBufferHole(n),
                e.len > .5 && t > 1e3 * r.highBufferWatchdogPeriod && (this.stalled = null, this._tryNudgeBuffer())
            },
            e.prototype._reportStall = function(e) {
                var t = this.hls,
                r = this.media;
                this.stallReported || (this.stallReported = !0, o.logger.warn("Playback stalling at @" + r.currentTime + " due to low buffer"), t.trigger(n.
            default.ERROR, {
                    type: a.ErrorTypes.MEDIA_ERROR,
                    details: a.ErrorDetails.BUFFER_STALLED_ERROR,
                    fatal: !1,
                    buffer: e
                }))
            },
            e.prototype._trySkipBufferHole = function(e) {
                for (var t = this.hls,
                r = this.media,
                i = r.currentTime,
                s = 0,
                l = 0; l < r.buffered.length; l++) {
                    var u = r.buffered.start(l);
                    if (i >= s && i < u) return r.currentTime = Math.max(u, r.currentTime + .1),
                    o.logger.warn("skipping hole, adjusting currentTime from " + i + " to " + r.currentTime),
                    this.stalled = null,
                    void t.trigger(n.
                default.ERROR, {
                        type: a.ErrorTypes.MEDIA_ERROR,
                        details: a.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
                        fatal: !1,
                        reason: "fragment loaded with buffer holes, seeking from " + i + " to " + r.currentTime,
                        frag: e
                    });
                    s = r.buffered.end(l)
                }
            },
            e.prototype._tryNudgeBuffer = function() {
                var e = this.config,
                t = this.hls,
                r = this.media,
                i = r.currentTime,
                s = (this.nudgeRetry || 0) + 1;
                if (this.nudgeRetry = s, s < e.nudgeMaxRetry) {
                    var l = i + s * e.nudgeOffset;
                    o.logger.log("adjust currentTime from " + i + " to " + l),
                    r.currentTime = l,
                    t.trigger(n.
                default.ERROR, {
                        type: a.ErrorTypes.MEDIA_ERROR,
                        details: a.ErrorDetails.BUFFER_NUDGE_ON_STALL,
                        fatal: !1
                    })
                } else o.logger.error("still stuck in high buffer @" + i + " after " + e.nudgeMaxRetry + ", raise fatal error"),
                t.trigger(n.
            default.ERROR, {
                    type: a.ErrorTypes.MEDIA_ERROR,
                    details: a.ErrorDetails.BUFFER_STALLED_ERROR,
                    fatal: !0
                })
            },
            e
        } ();
        t.
    default = s
    },
    function(e, t, r) {
        "use strict";
        var i = this && this.__extends ||
        function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(e, t) {
                e.__proto__ = t
            } ||
            function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function i() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        } ();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, n = r(1),
        o = r(4),
        s = r(0),
        l = r(3),
        u = r(19),
        d = r(8),
        f = (window.performance,
        function(e) {
            function t(t) {
                var r = e.call(this, t, n.
            default.MANIFEST_LOADED, n.
            default.LEVEL_LOADED, n.
            default.AUDIO_TRACK_SWITCHED, n.
            default.FRAG_LOADED, n.
            default.ERROR) || this;
                return r.canload = !1,
                r.currentLevelIndex = null,
                r.manualLevelIndex = -1,
                r.timer = null,
                a = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                r
            }
            return i(t, e),
            t.prototype.onHandlerDestroying = function() {
                this.clearTimer(),
                this.manualLevelIndex = -1
            },
            t.prototype.clearTimer = function() {
                null !== this.timer && (clearTimeout(this.timer), this.timer = null)
            },
            t.prototype.startLoad = function() {
                var e = this._levels;
                this.canload = !0,
                this.levelRetryCount = 0,
                e && e.forEach(function(e) {
                    e.loadError = 0;
                    var t = e.details;
                    t && t.live && (e.details = void 0)
                }),
                null !== this.timer && this.loadLevel()
            },
            t.prototype.stopLoad = function() {
                this.canload = !1
            },
            t.prototype.onManifestLoaded = function(e) {
                var t, r = [],
                i = [],
                o = {},
                f = null,
                c = !1,
                h = !1;
                if (e.levels.forEach(function(e) {
                    var t = e.attrs;
                    e.loadError = 0,
                    e.fragmentError = !1,
                    c = c || !!e.videoCodec,
                    h = h || !!e.audioCodec,
                    a && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0),
                    (f = o[e.bitrate]) ? f.url.push(e.url) : (e.url = [e.url], e.urlId = 0, o[e.bitrate] = e, r.push(e)),
                    t && (t.AUDIO && (h = !0, d.addGroupId(f || e, "audio", t.AUDIO)), t.SUBTITLES && d.addGroupId(f || e, "text", t.SUBTITLES))
                }), c && h && (r = r.filter(function(e) {
                    return !! e.videoCodec
                })), r = r.filter(function(e) {
                    var t = e.audioCodec,
                    r = e.videoCodec;
                    return (!t || u.isCodecSupportedInMp4(t, "audio")) && (!r || u.isCodecSupportedInMp4(r, "video"))
                }), e.audioTracks && (i = e.audioTracks.filter(function(e) {
                    return ! e.audioCodec || u.isCodecSupportedInMp4(e.audioCodec, "audio")
                })).forEach(function(e, t) {
                    e.id = t
                }), r.length > 0) {
                    t = r[0].bitrate,
                    r.sort(function(e, t) {
                        return e.bitrate - t.bitrate
                    }),
                    this._levels = r;
                    for (var p = 0; p < r.length; p++) if (r[p].bitrate === t) {
                        this._firstLevel = p,
                        s.logger.log("manifest loaded," + r.length + " level(s) found, first bitrate:" + t);
                        break
                    }
                    this.hls.trigger(n.
                default.MANIFEST_PARSED, {
                        levels: r,
                        audioTracks: i,
                        firstLevel: this._firstLevel,
                        stats: e.stats,
                        audio: h,
                        video: c,
                        altAudio: i.some(function(e) {
                            return !! e.url
                        })
                    })
                } else this.hls.trigger(n.
            default.ERROR, {
                    type: l.ErrorTypes.MEDIA_ERROR,
                    details: l.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                    fatal: !0,
                    url: this.hls.url,
                    reason: "no level with compatible codecs found in manifest"
                })
            },
            Object.defineProperty(t.prototype, "levels", {
                get: function() {
                    return this._levels
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "level", {
                get: function() {
                    return this.currentLevelIndex
                },
                set: function(e) {
                    var t = this._levels;
                    t && (e = Math.min(e, t.length - 1), this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.setLevelInternal = function(e) {
                var t = this._levels,
                r = this.hls;
                if (e >= 0 && e < t.length) {
                    if (this.clearTimer(), this.currentLevelIndex !== e) {
                        s.logger.log("switching to level " + e),
                        this.currentLevelIndex = e;
                        var i = t[e];
                        i.level = e,
                        r.trigger(n.
                    default.LEVEL_SWITCHING, i)
                    }
                    var a = t[e],
                    o = a.details;
                    if (!o || o.live) {
                        var u = a.urlId;
                        r.trigger(n.
                    default.LEVEL_LOADING, {
                            url: a.url[u],
                            level: e,
                            id: u
                        })
                    }
                } else r.trigger(n.
            default.ERROR, {
                    type: l.ErrorTypes.OTHER_ERROR,
                    details: l.ErrorDetails.LEVEL_SWITCH_ERROR,
                    level: e,
                    fatal: !1,
                    reason: "invalid level idx"
                })
            },
            Object.defineProperty(t.prototype, "manualLevel", {
                get: function() {
                    return this.manualLevelIndex
                },
                set: function(e) {
                    this.manualLevelIndex = e,
                    void 0 === this._startLevel && (this._startLevel = e),
                    -1 !== e && (this.level = e)
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "firstLevel", {
                get: function() {
                    return this._firstLevel
                },
                set: function(e) {
                    this._firstLevel = e
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "startLevel", {
                get: function() {
                    if (void 0 === this._startLevel) {
                        var e = this.hls.config.startLevel;
                        return void 0 !== e ? e: this._firstLevel
                    }
                    return this._startLevel
                },
                set: function(e) {
                    this._startLevel = e
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype.onError = function(e) {
                if (e.fatal) e.type === l.ErrorTypes.NETWORK_ERROR && this.clearTimer();
                else {
                    var t, r = !1,
                    i = !1;
                    switch (e.details) {
                    case l.ErrorDetails.FRAG_LOAD_ERROR:
                    case l.ErrorDetails.FRAG_LOAD_TIMEOUT:
                    case l.ErrorDetails.KEY_LOAD_ERROR:
                    case l.ErrorDetails.KEY_LOAD_TIMEOUT:
                        t = e.frag.level,
                        i = !0;
                        break;
                    case l.ErrorDetails.LEVEL_LOAD_ERROR:
                    case l.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                        t = e.context.level,
                        r = !0;
                        break;
                    case l.ErrorDetails.REMUX_ALLOC_ERROR:
                        t = e.level,
                        r = !0
                    }
                    void 0 !== t && this.recoverLevel(e, t, r, i)
                }
            },
            t.prototype.recoverLevel = function(e, t, r, i) {
                var a, n, o, l = this,
                u = this.hls.config,
                d = e.details,
                f = this._levels[t];
                if (f.loadError++, f.fragmentError = i, r) {
                    if (! (this.levelRetryCount + 1 <= u.levelLoadingMaxRetry)) return s.logger.error("level controller, cannot recover from " + d + " error"),
                    this.currentLevelIndex = null,
                    this.clearTimer(),
                    void(e.fatal = !0);
                    n = Math.min(Math.pow(2, this.levelRetryCount) * u.levelLoadingRetryDelay, u.levelLoadingMaxRetryTimeout),
                    this.timer = setTimeout(function() {
                        return l.loadLevel()
                    },
                    n),
                    e.levelRetry = !0,
                    this.levelRetryCount++,
                    s.logger.warn("level controller, " + d + ", retry in " + n + " ms, current retry count is " + this.levelRetryCount)
                } (r || i) && ((a = f.url.length) > 1 && f.loadError < a ? (f.urlId = (f.urlId + 1) % a, f.details = void 0, s.logger.warn("level controller, " + d + " for level " + t + ": switching to redundant URL-id " + f.urlId)) : -1 === this.manualLevelIndex ? (o = 0 === t ? this._levels.length - 1 : t - 1, s.logger.warn("level controller, " + d + ": switch to " + o), this.hls.nextAutoLevel = this.currentLevelIndex = o) : i && (s.logger.warn("level controller, " + d + ": reload a fragment"), this.currentLevelIndex = null))
            },
            t.prototype.onFragLoaded = function(e) {
                var t = e.frag;
                if (void 0 !== t && "main" === t.type) {
                    var r = this._levels[t.level];
                    void 0 !== r && (r.fragmentError = !1, r.loadError = 0, this.levelRetryCount = 0)
                }
            },
            t.prototype.onLevelLoaded = function(e) {
                var t = this,
                r = e.level,
                i = e.details;
                if (r === this.currentLevelIndex) {
                    var a = this._levels[r];
                    if (a.fragmentError || (a.loadError = 0, this.levelRetryCount = 0), i.live) {
                        var n = d.computeReloadInterval(a.details, i, e.stats.trequest);
                        s.logger.log("live playlist, reload in " + Math.round(n) + " ms"),
                        this.timer = setTimeout(function() {
                            return t.loadLevel()
                        },
                        n)
                    } else this.clearTimer()
                }
            },
            t.prototype.onAudioTrackSwitched = function(e) {
                var t = this.hls.audioTracks[e.id].groupId,
                r = this.hls.levels[this.currentLevelIndex];
                if (r && r.audioGroupIds) {
                    for (var i = -1,
                    a = 0; a < r.audioGroupIds.length; a++) if (r.audioGroupIds[a] === t) {
                        i = a;
                        break
                    }
                    i !== r.urlId && (r.urlId = i, this.startLoad())
                }
            },
            t.prototype.loadLevel = function() {
                if (s.logger.debug("call to loadLevel"), null !== this.currentLevelIndex && this.canload) {
                    var e = this._levels[this.currentLevelIndex];
                    if ("object" == typeof e && e.url.length > 0) {
                        var t = this.currentLevelIndex,
                        r = e.urlId,
                        i = e.url[r];
                        s.logger.log("Attempt loading level index " + t + " with URL-id " + r),
                        this.hls.trigger(n.
                    default.LEVEL_LOADING, {
                            url: i,
                            level: t,
                            id: r
                        })
                    }
                }
            },
            Object.defineProperty(t.prototype, "nextLoadLevel", {
                get: function() {
                    return - 1 !== this.manualLevelIndex ? this.manualLevelIndex: this.hls.nextAutoLevel
                },
                set: function(e) {
                    this.level = e,
                    -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
                },
                enumerable: !0,
                configurable: !0
            }),
            t
        } (o.
    default));
        t.
    default = f
    },
    function(e, t, r) {
        "use strict";
        var i = this && this.__extends ||
        function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(e, t) {
                e.__proto__ = t
            } ||
            function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function i() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        } ();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(1),
        n = r(4),
        o = r(11),
        s = r(29),
        l = function(e) {
            function t(t) {
                var r = e.call(this, t, a.
            default.MEDIA_ATTACHED, a.
            default.MEDIA_DETACHING, a.
            default.FRAG_PARSING_METADATA) || this;
                return r.id3Track = void 0,
                r.media = void 0,
                r
            }
            return i(t, e),
            t.prototype.destroy = function() {
                n.
            default.prototype.destroy.call(this)
            },
            t.prototype.onMediaAttached = function(e) {
                this.media = e.media,
                this.media
            },
            t.prototype.onMediaDetaching = function() {
                s.clearCurrentCues(this.id3Track),
                this.id3Track = void 0,
                this.media = void 0
            },
            t.prototype.getID3Track = function(e) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    if ("metadata" === r.kind && "id3" === r.label) return s.sendAddTrackEvent(r, this.media),
                    r
                }
                return this.media.addTextTrack("metadata", "id3")
            },
            t.prototype.onFragParsingMetadata = function(e) {
                var t = e.frag,
                r = e.samples;
                this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
                for (var i = window.WebKitDataCue || window.VTTCue || window.TextTrackCue,
                a = 0; a < r.length; a++) {
                    var n = o.
                default.getID3Frames(r[a].data);
                    if (n) {
                        var s = r[a].pts,
                        l = a < r.length - 1 ? r[a + 1].pts: t.endPTS;
                        s === l && (l += 1e-4);
                        for (var u = 0; u < n.length; u++) {
                            var d = n[u];
                            if (!o.
                        default.isTimeStampFrame(d)) {
                                var f = new i(s, l, "");
                                f.value = d,
                                this.id3Track.addCue(f)
                            }
                        }
                    }
                }
            },
            t
        } (n.
    default);
        t.
    default = l
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(14);
        t.isSupported = function() {
            var e = i.getMediaSource(),
            t = window.SourceBuffer || window.WebKitSourceBuffer,
            r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
            a = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
            return !! r && !!a
        }
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(59),
        a = r(62),
        n = r(63),
        o = r(64),
        s = r(65),
        l = r(66),
        u = r(67),
        d = r(68),
        f = r(70),
        c = r(74),
        h = r(75),
        p = r(76),
        g = r(77);
        t.hlsDefaultConfig = {
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
            loader: s.
        default,
            fLoader: void 0,
            pLoader: void 0,
            xhrSetup: void 0,
            licenseXhrSetup: void 0,
            abrController: i.
        default,
            bufferController: a.
        default,
            capLevelController: n.
        default,
            fpsController: o.
        default,
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
            requestMediaKeySystemAccessFunc: g.requestMediaKeySystemAccess
        },
        t.hlsDefaultConfig.subtitleStreamController = h.SubtitleStreamController,
        t.hlsDefaultConfig.subtitleTrackController = c.
    default,
        t.hlsDefaultConfig.timelineController = f.
    default,
        t.hlsDefaultConfig.cueHandler = d,
        t.hlsDefaultConfig.enableCEA708Captions = !0,
        t.hlsDefaultConfig.enableWebVTT = !0,
        t.hlsDefaultConfig.captionsTextTrack1Label = "English",
        t.hlsDefaultConfig.captionsTextTrack1LanguageCode = "en",
        t.hlsDefaultConfig.captionsTextTrack2Label = "Spanish",
        t.hlsDefaultConfig.captionsTextTrack2LanguageCode = "es",
        t.hlsDefaultConfig.audioStreamController = u.
    default,
        t.hlsDefaultConfig.audioTrackController = l.
    default,
        t.hlsDefaultConfig.emeController = p.
    default
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            var i = this && this.__extends ||
            function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                function(e, t) {
                    e.__proto__ = t
                } ||
                function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return function(t, r) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, r),
                    t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
                }
            } ();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(1),
            n = r(4),
            o = r(5),
            s = r(3),
            l = r(0),
            u = r(60),
            d = window.performance,
            f = function(t) {
                function r(e) {
                    var r = t.call(this, e, a.
                default.FRAG_LOADING, a.
                default.FRAG_LOADED, a.
                default.FRAG_BUFFERED, a.
                default.ERROR) || this;
                    return r.lastLoadedFragLevel = 0,
                    r._nextAutoLevel = -1,
                    r.hls = e,
                    r.timer = null,
                    r._bwEstimator = null,
                    r.onCheck = r._abandonRulesCheck.bind(r),
                    r
                }
                return i(r, t),
                r.prototype.destroy = function() {
                    this.clearTimer(),
                    n.
                default.prototype.destroy.call(this)
                },
                r.prototype.onFragLoading = function(e) {
                    var t = e.frag;
                    if ("main" === t.type && (this.timer || (this.fragCurrent = t, this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator)) {
                        var r = this.hls,
                        i = r.config,
                        a = t.level,
                        n = void 0,
                        o = void 0;
                        r.levels[a].details.live ? (n = i.abrEwmaFastLive, o = i.abrEwmaSlowLive) : (n = i.abrEwmaFastVoD, o = i.abrEwmaSlowVoD),
                        this._bwEstimator = new u.
                    default(r, o, n, i.abrEwmaDefaultEstimate)
                    }
                },
                r.prototype._abandonRulesCheck = function() {
                    var e = this.hls,
                    t = e.media,
                    r = this.fragCurrent;
                    if (r) {
                        var i = r.loader,
                        n = e.minAutoLevel;
                        if (!i || i.stats && i.stats.aborted) return l.logger.warn("frag loader destroy or aborted, disarm abandonRules"),
                        this.clearTimer(),
                        void(this._nextAutoLevel = -1);
                        var s = i.stats;
                        if (t && s && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {
                            var u = d.now() - s.trequest,
                            f = Math.abs(t.playbackRate);
                            if (u > 500 * r.duration / f) {
                                var c = e.levels,
                                h = Math.max(1, s.bw ? s.bw / 8 : 1e3 * s.loaded / u),
                                p = c[r.level],
                                g = p.realBitrate ? Math.max(p.realBitrate, p.bitrate) : p.bitrate,
                                v = s.total ? s.total: Math.max(s.loaded, Math.round(r.duration * g / 8)),
                                y = t.currentTime,
                                m = (v - s.loaded) / h,
                                E = (o.BufferHelper.bufferInfo(t, y, e.config.maxBufferHole).end - y) / f;
                                if (E < 2 * r.duration / f && m > E) {
                                    var _ = void 0,
                                    T = void 0;
                                    for (T = r.level - 1; T > n; T--) {
                                        var S = c[T].realBitrate ? Math.max(c[T].realBitrate, c[T].bitrate) : c[T].bitrate;
                                        if ((_ = r.duration * S / (6.4 * h)) < E) break
                                    }
                                    _ < m && (l.logger.warn("loading too slow, abort fragment loading and switch to level " + T + ":fragLoadedDelay[" + T + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + _.toFixed(1) + "<" + m.toFixed(1) + ":" + E.toFixed(1)), e.nextLoadLevel = T, this._bwEstimator.sample(u, s.loaded), i.abort(), this.clearTimer(), e.trigger(a.
                                default.FRAG_LOAD_EMERGENCY_ABORTED, {
                                        frag: r,
                                        stats: s
                                    }))
                                }
                            }
                        }
                    }
                },
                r.prototype.onFragLoaded = function(t) {
                    var r = t.frag;
                    if ("main" === r.type && e.isFinite(r.sn)) {
                        if (this.clearTimer(), this.lastLoadedFragLevel = r.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                            var i = this.hls.levels[r.level],
                            a = (i.loaded ? i.loaded.bytes: 0) + t.stats.loaded,
                            n = (i.loaded ? i.loaded.duration: 0) + t.frag.duration;
                            i.loaded = {
                                bytes: a,
                                duration: n
                            },
                            i.realBitrate = Math.round(8 * a / n)
                        }
                        if (t.frag.bitrateTest) {
                            var o = t.stats;
                            o.tparsed = o.tbuffered = o.tload,
                            this.onFragBuffered(t)
                        }
                    }
                },
                r.prototype.onFragBuffered = function(t) {
                    var r = t.stats,
                    i = t.frag;
                    if (!0 !== r.aborted && "main" === i.type && e.isFinite(i.sn) && (!i.bitrateTest || r.tload === r.tbuffered)) {
                        var a = r.tparsed - r.trequest;
                        l.logger.log("latency/loading/parsing/append/kbps:" + Math.round(r.tfirst - r.trequest) + "/" + Math.round(r.tload - r.tfirst) + "/" + Math.round(r.tparsed - r.tload) + "/" + Math.round(r.tbuffered - r.tparsed) + "/" + Math.round(8 * r.loaded / (r.tbuffered - r.trequest))),
                        this._bwEstimator.sample(a, r.loaded),
                        r.bwEstimate = this._bwEstimator.getEstimate(),
                        i.bitrateTest ? this.bitrateTestDelay = a / 1e3: this.bitrateTestDelay = 0
                    }
                },
                r.prototype.onError = function(e) {
                    switch (e.details) {
                    case s.ErrorDetails.FRAG_LOAD_ERROR:
                    case s.ErrorDetails.FRAG_LOAD_TIMEOUT:
                        this.clearTimer()
                    }
                },
                r.prototype.clearTimer = function() {
                    clearInterval(this.timer),
                    this.timer = null
                },
                Object.defineProperty(r.prototype, "nextAutoLevel", {
                    get: function() {
                        var e = this._nextAutoLevel,
                        t = this._bwEstimator;
                        if (! ( - 1 === e || t && t.canEstimate())) return e;
                        var r = this._nextABRAutoLevel;
                        return - 1 !== e && (r = Math.min(e, r)),
                        r
                    },
                    set: function(e) {
                        this._nextAutoLevel = e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(r.prototype, "_nextABRAutoLevel", {
                    get: function() {
                        var e = this.hls,
                        t = e.maxAutoLevel,
                        r = e.levels,
                        i = e.config,
                        a = e.minAutoLevel,
                        n = e.media,
                        s = this.lastLoadedFragLevel,
                        u = this.fragCurrent ? this.fragCurrent.duration: 0,
                        d = n ? n.currentTime: 0,
                        f = n && 0 !== n.playbackRate ? Math.abs(n.playbackRate) : 1,
                        c = this._bwEstimator ? this._bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate,
                        h = (o.BufferHelper.bufferInfo(n, d, i.maxBufferHole).end - d) / f,
                        p = this._findBestLevel(s, u, c, a, t, h, i.abrBandWidthFactor, i.abrBandWidthUpFactor, r);
                        if (p >= 0) return p;
                        l.logger.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                        var g = u ? Math.min(u, i.maxStarvationDelay) : i.maxStarvationDelay,
                        v = i.abrBandWidthFactor,
                        y = i.abrBandWidthUpFactor;
                        if (0 === h) {
                            var m = this.bitrateTestDelay;
                            if (m) g = (u ? Math.min(u, i.maxLoadingDelay) : i.maxLoadingDelay) - m,
                            l.logger.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"),
                            v = y = 1
                        }
                        return p = this._findBestLevel(s, u, c, a, t, h + g, v, y, r),
                        Math.max(p, 0)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                r.prototype._findBestLevel = function(e, t, r, i, a, n, o, s, u) {
                    for (var d = a; d >= i; d--) {
                        var f = u[d];
                        if (f) {
                            var c = f.details,
                            h = c ? c.totalduration / c.fragments.length: t,
                            p = !!c && c.live,
                            g = void 0;
                            g = d <= e ? o * r: s * r;
                            var v = u[d].realBitrate ? Math.max(u[d].realBitrate, u[d].bitrate) : u[d].bitrate,
                            y = v * h / g;
                            if (l.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + d + "/" + Math.round(g) + "/" + v + "/" + h + "/" + n + "/" + y), g > v && (!y || p && !this.bitrateTestDelay || y < n)) return d
                        }
                    }
                    return - 1
                },
                r
            } (n.
        default);
            t.
        default = f
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(61),
        a = function() {
            function e(e, t, r, a) {
                this.hls = e,
                this.defaultEstimate_ = a,
                this.minWeight_ = .001,
                this.minDelayMs_ = 50,
                this.slow_ = new i.
            default(t),
                this.fast_ = new i.
            default(r)
            }
            return e.prototype.sample = function(e, t) {
                var r = 8e3 * t / (e = Math.max(e, this.minDelayMs_)),
                i = e / 1e3;
                this.fast_.sample(i, r),
                this.slow_.sample(i, r)
            },
            e.prototype.canEstimate = function() {
                var e = this.fast_;
                return e && e.getTotalWeight() >= this.minWeight_
            },
            e.prototype.getEstimate = function() {
                return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
            },
            e.prototype.destroy = function() {},
            e
        } ();
        t.
    default = a
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e) {
                this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0,
                this.estimate_ = 0,
                this.totalWeight_ = 0
            }
            return e.prototype.sample = function(e, t) {
                var r = Math.pow(this.alpha_, e);
                this.estimate_ = t * (1 - r) + r * this.estimate_,
                this.totalWeight_ += e
            },
            e.prototype.getTotalWeight = function() {
                return this.totalWeight_
            },
            e.prototype.getEstimate = function() {
                if (this.alpha_) {
                    var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
                    return this.estimate_ / e
                }
                return this.estimate_
            },
            e
        } ();
        t.
    default = i
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            var i = this && this.__extends ||
            function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                function(e, t) {
                    e.__proto__ = t
                } ||
                function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return function(t, r) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, r),
                    t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
                }
            } ();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(1),
            n = r(4),
            o = r(0),
            s = r(3),
            l = r(14).getMediaSource(),
            u = function(t) {
                function r(e) {
                    var r = t.call(this, e, a.
                default.MEDIA_ATTACHING, a.
                default.MEDIA_DETACHING, a.
                default.MANIFEST_PARSED, a.
                default.BUFFER_RESET, a.
                default.BUFFER_APPENDING, a.
                default.BUFFER_CODECS, a.
                default.BUFFER_EOS, a.
                default.BUFFER_FLUSHING, a.
                default.LEVEL_PTS_UPDATED, a.
                default.LEVEL_UPDATED) || this;
                    return r._msDuration = null,
                    r._levelDuration = null,
                    r._levelTargetDuration = 10,
                    r._live = null,
                    r._objectUrl = null,
                    r.bufferCodecEventsExpected = 0,
                    r.onsbue = r.onSBUpdateEnd.bind(r),
                    r.onsbe = r.onSBUpdateError.bind(r),
                    r.pendingTracks = {},
                    r.tracks = {},
                    r
                }
                return i(r, t),
                r.prototype.destroy = function() {
                    n.
                default.prototype.destroy.call(this)
                },
                r.prototype.onLevelPtsUpdated = function(e) {
                    var t = e.type,
                    r = this.tracks.audio;
                    if ("audio" === t && r && "audio/mpeg" === r.container) {
                        var i = this.sourceBuffer.audio;
                        if (Math.abs(i.timestampOffset - e.start) > .1) {
                            var a = i.updating;
                            try {
                                i.abort()
                            } catch(e) {
                                o.logger.warn("can not abort audio buffer: " + e)
                            }
                            a ? this.audioTimestampOffset = e.start: (o.logger.warn("change mpeg audio timestamp offset from " + i.timestampOffset + " to " + e.start), i.timestampOffset = e.start)
                        }
                    }
                },
                r.prototype.onManifestParsed = function(e) {
                    this.bufferCodecEventsExpected = e.altAudio ? 2 : 1,
                    o.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
                },
                r.prototype.onMediaAttaching = function(e) {
                    var t = this.media = e.media;
                    if (t) {
                        var r = this.mediaSource = new l;
                        this.onmso = this.onMediaSourceOpen.bind(this),
                        this.onmse = this.onMediaSourceEnded.bind(this),
                        this.onmsc = this.onMediaSourceClose.bind(this),
                        r.addEventListener("sourceopen", this.onmso),
                        r.addEventListener("sourceended", this.onmse),
                        r.addEventListener("sourceclose", this.onmsc),
                        t.src = window.URL.createObjectURL(r),
                        this._objectUrl = t.src
                    }
                },
                r.prototype.onMediaDetaching = function() {
                    o.logger.log("media source detaching");
                    var e = this.mediaSource;
                    if (e) {
                        if ("open" === e.readyState) try {
                            e.endOfStream()
                        } catch(e) {
                            o.logger.warn("onMediaDetaching:" + e.message + " while calling endOfStream")
                        }
                        e.removeEventListener("sourceopen", this.onmso),
                        e.removeEventListener("sourceended", this.onmse),
                        e.removeEventListener("sourceclose", this.onmsc),
                        this.media && (window.URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : o.logger.warn("media.src was changed by a third party - skip cleanup")),
                        this.mediaSource = null,
                        this.media = null,
                        this._objectUrl = null,
                        this.pendingTracks = {},
                        this.tracks = {},
                        this.sourceBuffer = {},
                        this.flushRange = [],
                        this.segments = [],
                        this.appended = 0
                    }
                    this.onmso = this.onmse = this.onmsc = null,
                    this.hls.trigger(a.
                default.MEDIA_DETACHED)
                },
                r.prototype.onMediaSourceOpen = function() {
                    o.logger.log("media source opened"),
                    this.hls.trigger(a.
                default.MEDIA_ATTACHED, {
                        media: this.media
                    });
                    var e = this.mediaSource;
                    e && e.removeEventListener("sourceopen", this.onmso),
                    this.checkPendingTracks()
                },
                r.prototype.checkPendingTracks = function() {
                    var e = this.bufferCodecEventsExpected,
                    t = this.pendingTracks,
                    r = Object.keys(t).length; (r && !e || 2 === r) && (this.createSourceBuffers(t), this.pendingTracks = {},
                    this.doAppending())
                },
                r.prototype.onMediaSourceClose = function() {
                    o.logger.log("media source closed")
                },
                r.prototype.onMediaSourceEnded = function() {
                    o.logger.log("media source ended")
                },
                r.prototype.onSBUpdateEnd = function() {
                    if (this.audioTimestampOffset) {
                        var e = this.sourceBuffer.audio;
                        o.logger.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + this.audioTimestampOffset),
                        e.timestampOffset = this.audioTimestampOffset,
                        delete this.audioTimestampOffset
                    }
                    this._needsFlush && this.doFlush(),
                    this._needsEos && this.checkEos(),
                    this.appending = !1;
                    var t = this.parent,
                    r = this.segments.reduce(function(e, r) {
                        return r.parent === t ? e + 1 : e
                    },
                    0),
                    i = {},
                    n = this.sourceBuffer;
                    for (var s in n) i[s] = n[s].buffered;
                    this.hls.trigger(a.
                default.BUFFER_APPENDED, {
                        parent: t,
                        pending: r,
                        timeRanges: i
                    }),
                    this._needsFlush || this.doAppending(),
                    this.updateMediaElementDuration(),
                    0 === r && this.flushLiveBackBuffer()
                },
                r.prototype.onSBUpdateError = function(e) {
                    o.logger.error("sourceBuffer error:", e),
                    this.hls.trigger(a.
                default.ERROR, {
                        type: s.ErrorTypes.MEDIA_ERROR,
                        details: s.ErrorDetails.BUFFER_APPENDING_ERROR,
                        fatal: !1
                    })
                },
                r.prototype.onBufferReset = function() {
                    var e = this.sourceBuffer;
                    for (var t in e) {
                        var r = e[t];
                        try {
                            this.mediaSource.removeSourceBuffer(r),
                            r.removeEventListener("updateend", this.onsbue),
                            r.removeEventListener("error", this.onsbe)
                        } catch(e) {}
                    }
                    this.sourceBuffer = {},
                    this.flushRange = [],
                    this.segments = [],
                    this.appended = 0
                },
                r.prototype.onBufferCodecs = function(e) {
                    var t = this;
                    if (!Object.keys(this.sourceBuffer).length) {
                        Object.keys(e).forEach(function(r) {
                            t.pendingTracks[r] = e[r]
                        });
                        var r = this.mediaSource;
                        this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0),
                        r && "open" === r.readyState && this.checkPendingTracks()
                    }
                },
                r.prototype.createSourceBuffers = function(e) {
                    var t = this.sourceBuffer,
                    r = this.mediaSource;
                    for (var i in e) if (!t[i]) {
                        var n = e[i],
                        l = n.levelCodec || n.codec,
                        u = n.container + ";codecs=" + l;
                        o.logger.log("creating sourceBuffer(" + u + ")");
                        try {
                            var d = t[i] = r.addSourceBuffer(u);
                            d.addEventListener("updateend", this.onsbue),
                            d.addEventListener("error", this.onsbe),
                            this.tracks[i] = {
                                codec: l,
                                container: n.container
                            },
                            n.buffer = d
                        } catch(e) {
                            o.logger.error("error while trying to add sourceBuffer:" + e.message),
                            this.hls.trigger(a.
                        default.ERROR, {
                                type: s.ErrorTypes.MEDIA_ERROR,
                                details: s.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
                                fatal: !1,
                                err: e,
                                mimeType: u
                            })
                        }
                    }
                    this.hls.trigger(a.
                default.BUFFER_CREATED, {
                        tracks: e
                    })
                },
                r.prototype.onBufferAppending = function(e) {
                    this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e], this.doAppending())
                },
                r.prototype.onBufferAppendFail = function(e) {
                    o.logger.error("sourceBuffer error:", e.event),
                    this.hls.trigger(a.
                default.ERROR, {
                        type: s.ErrorTypes.MEDIA_ERROR,
                        details: s.ErrorDetails.BUFFER_APPENDING_ERROR,
                        fatal: !1
                    })
                },
                r.prototype.onBufferEos = function(e) {
                    var t = this.sourceBuffer,
                    r = e.type;
                    for (var i in t) r && i !== r || t[i].ended || (t[i].ended = !0, o.logger.log(i + " sourceBuffer now EOS"));
                    this.checkEos()
                },
                r.prototype.checkEos = function() {
                    var e = this.sourceBuffer,
                    t = this.mediaSource;
                    if (t && "open" === t.readyState) {
                        for (var r in e) {
                            var i = e[r];
                            if (!i.ended) return;
                            if (i.updating) return void(this._needsEos = !0)
                        }
                        o.logger.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");
                        try {
                            t.endOfStream()
                        } catch(e) {
                            o.logger.warn("exception while calling mediaSource.endOfStream()")
                        }
                        this._needsEos = !1
                    } else this._needsEos = !1
                },
                r.prototype.onBufferFlushing = function(e) {
                    this.flushRange.push({
                        start: e.startOffset,
                        end: e.endOffset,
                        type: e.type
                    }),
                    this.flushBufferCounter = 0,
                    this.doFlush()
                },
                r.prototype.flushLiveBackBuffer = function() {
                    if (this._live) {
                        var e = this.hls.config.liveBackBufferLength;
                        if (isFinite(e) && !(e < 0)) for (var t = this.media.currentTime,
                        r = this.sourceBuffer,
                        i = Object.keys(r), a = t - Math.max(e, this._levelTargetDuration), n = i.length - 1; n >= 0; n--) {
                            var o = i[n],
                            s = r[o].buffered;
                            s.length > 0 && a > s.start(0) && this.removeBufferRange(o, r[o], 0, a)
                        }
                    }
                },
                r.prototype.onLevelUpdated = function(e) {
                    var t = e.details;
                    t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start, this._levelTargetDuration = t.averagetargetduration || t.targetduration || 10, this._live = t.live, this.updateMediaElementDuration())
                },
                r.prototype.updateMediaElementDuration = function() {
                    var t, r = this.hls.config;
                    if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
                        for (var i in this.sourceBuffer) if (!0 === this.sourceBuffer[i].updating) return;
                        t = this.media.duration,
                        null === this._msDuration && (this._msDuration = this.mediaSource.duration),
                        !0 === this._live && !0 === r.liveDurationInfinity ? (o.logger.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > t || !e.isFinite(t)) && (o.logger.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
                    }
                },
                r.prototype.doFlush = function() {
                    for (; this.flushRange.length;) {
                        var e = this.flushRange[0];
                        if (!this.flushBuffer(e.start, e.end, e.type)) return void(this._needsFlush = !0);
                        this.flushRange.shift(),
                        this.flushBufferCounter = 0
                    }
                    if (0 === this.flushRange.length) {
                        this._needsFlush = !1;
                        var t = 0,
                        r = this.sourceBuffer;
                        try {
                            for (var i in r) t += r[i].buffered.length
                        } catch(e) {
                            o.logger.error("error while accessing sourceBuffer.buffered")
                        }
                        this.appended = t,
                        this.hls.trigger(a.
                    default.BUFFER_FLUSHED)
                    }
                },
                r.prototype.doAppending = function() {
                    var e = this.hls,
                    t = this.segments,
                    r = this.sourceBuffer;
                    if (Object.keys(r).length) {
                        if (this.media.error) return this.segments = [],
                        void o.logger.error("trying to append although a media error occured, flush segment and abort");
                        if (this.appending) return;
                        if (t && t.length) {
                            var i = t.shift();
                            try {
                                var n = r[i.type];
                                n ? n.updating ? t.unshift(i) : (n.ended = !1, this.parent = i.parent, n.appendBuffer(i.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
                            } catch(r) {
                                o.logger.error("error while trying to append buffer:" + r.message),
                                t.unshift(i);
                                var l = {
                                    type: s.ErrorTypes.MEDIA_ERROR,
                                    parent: i.parent
                                };
                                22 !== r.code ? (this.appendError ? this.appendError++:this.appendError = 1, l.details = s.ErrorDetails.BUFFER_APPEND_ERROR, this.appendError > e.config.appendErrorMaxRetry ? (o.logger.log("fail " + e.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), this.segments = [], l.fatal = !0, e.trigger(a.
                            default.ERROR, l)) : (l.fatal = !1, e.trigger(a.
                            default.ERROR, l))) : (this.segments = [], l.details = s.ErrorDetails.BUFFER_FULL_ERROR, l.fatal = !1, e.trigger(a.
                            default.ERROR, l))
                            }
                        }
                    }
                },
                r.prototype.flushBuffer = function(e, t, r) {
                    var i, a = this.sourceBuffer;
                    if (Object.keys(a).length) {
                        if (o.logger.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + e + "/" + t), this.flushBufferCounter < this.appended) {
                            for (var n in a) if (!r || n === r) {
                                if ((i = a[n]).ended = !1, i.updating) return o.logger.warn("cannot flush, sb updating in progress"),
                                !1;
                                if (this.removeBufferRange(n, i, e, t)) return this.flushBufferCounter++,
                                !1
                            }
                        } else o.logger.warn("abort flushing too many retries");
                        o.logger.log("buffer flushed")
                    }
                    return ! 0
                },
                r.prototype.removeBufferRange = function(e, t, r, i) {
                    try {
                        for (var a = 0; a < t.buffered.length; a++) {
                            var n = t.buffered.start(a),
                            s = t.buffered.end(a),
                            l = Math.max(n, r),
                            u = Math.min(s, i);
                            if (Math.min(u, s) - l > .5) return o.logger.log("sb remove " + e + " [" + l + "," + u + "], of [" + n + "," + s + "], pos:" + this.media.currentTime),
                            t.remove(l, u),
                            !0
                        }
                    } catch(e) {
                        o.logger.warn("removeBufferRange failed", e)
                    }
                    return ! 1
                },
                r
            } (n.
        default);
            t.
        default = u
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            var i = this && this.__extends ||
            function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                function(e, t) {
                    e.__proto__ = t
                } ||
                function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return function(t, r) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, r),
                    t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
                }
            } ();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(1),
            n = function(t) {
                function r(r) {
                    var i = t.call(this, r, a.
                default.FPS_DROP_LEVEL_CAPPING, a.
                default.MEDIA_ATTACHING, a.
                default.MANIFEST_PARSED, a.
                default.BUFFER_CODECS, a.
                default.MEDIA_DETACHING) || this;
                    return i.autoLevelCapping = e.POSITIVE_INFINITY,
                    i.firstLevel = null,
                    i.levels = [],
                    i.media = null,
                    i.restrictedLevels = [],
                    i.timer = null,
                    i
                }
                return i(r, t),
                r.prototype.destroy = function() {
                    this.hls.config.capLevelToPlayerSize && (this.media = null, this._stopCapping())
                },
                r.prototype.onFpsDropLevelCapping = function(e) {
                    r.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel)
                },
                r.prototype.onMediaAttaching = function(e) {
                    this.media = e.media instanceof window.HTMLVideoElement ? e.media: null
                },
                r.prototype.onManifestParsed = function(e) {
                    var t = this.hls;
                    this.restrictedLevels = [],
                    this.levels = e.levels,
                    this.firstLevel = e.firstLevel,
                    t.config.capLevelToPlayerSize && e.video && this._startCapping()
                },
                r.prototype.onBufferCodecs = function(e) {
                    this.hls.config.capLevelToPlayerSize && e.video && this._startCapping()
                },
                r.prototype.onLevelsUpdated = function(e) {
                    this.levels = e.levels
                },
                r.prototype.onMediaDetaching = function() {
                    this._stopCapping()
                },
                r.prototype.detectPlayerSize = function() {
                    if (this.media) {
                        var e = this.levels ? this.levels.length: 0;
                        if (e) {
                            var t = this.hls;
                            t.autoLevelCapping = this.getMaxLevel(e - 1),
                            t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(),
                            this.autoLevelCapping = t.autoLevelCapping
                        }
                    }
                },
                r.prototype.getMaxLevel = function(e) {
                    var t = this;
                    if (!this.levels) return - 1;
                    var i = this.levels.filter(function(i, a) {
                        return r.isLevelAllowed(a, t.restrictedLevels) && a <= e
                    });
                    return r.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight)
                },
                r.prototype._startCapping = function() {
                    this.timer || (this.autoLevelCapping = e.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
                },
                r.prototype._stopCapping = function() {
                    this.restrictedLevels = [],
                    this.firstLevel = null,
                    this.autoLevelCapping = e.POSITIVE_INFINITY,
                    this.timer && (this.timer = clearInterval(this.timer), this.timer = null)
                },
                Object.defineProperty(r.prototype, "mediaWidth", {
                    get: function() {
                        var e, t = this.media;
                        return t && (e = t.width || t.clientWidth || t.offsetWidth, e *= r.contentScaleFactor),
                        e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(r.prototype, "mediaHeight", {
                    get: function() {
                        var e, t = this.media;
                        return t && (e = t.height || t.clientHeight || t.offsetHeight, e *= r.contentScaleFactor),
                        e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(r, "contentScaleFactor", {
                    get: function() {
                        var e = 1;
                        try {
                            e = window.devicePixelRatio
                        } catch(e) {}
                        return e
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                r.isLevelAllowed = function(e, t) {
                    return void 0 === t && (t = []),
                    -1 === t.indexOf(e)
                },
                r.getMaxLevelByMediaSize = function(e, t, r) {
                    if (!e || e && !e.length) return - 1;
                    for (var i = function(e, t) {
                        return ! t || (e.width !== t.width || e.height !== t.height)
                    },
                    a = e.length - 1, n = 0; n < e.length; n += 1) {
                        var o = e[n];
                        if ((o.width >= t || o.height >= r) && i(o, e[n + 1])) {
                            a = n;
                            break
                        }
                    }
                    return a
                },
                r
            } (r(4).
        default);
            t.
        default = n
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict";
        var i = this && this.__extends ||
        function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(e, t) {
                e.__proto__ = t
            } ||
            function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function i() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        } ();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(1),
        n = r(4),
        o = r(0),
        s = window.performance,
        l = function(e) {
            function t(t) {
                return e.call(this, t, a.
            default.MEDIA_ATTACHING) || this
            }
            return i(t, e),
            t.prototype.destroy = function() {
                this.timer && clearInterval(this.timer),
                this.isVideoPlaybackQualityAvailable = !1
            },
            t.prototype.onMediaAttaching = function(e) {
                var t = this.hls.config;
                t.capLevelOnFPSDrop && ("function" == typeof(this.video = e.media instanceof window.HTMLVideoElement ? e.media: null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod))
            },
            t.prototype.checkFPS = function(e, t, r) {
                var i = s.now();
                if (t) {
                    if (this.lastTime) {
                        var n = i - this.lastTime,
                        l = r - this.lastDroppedFrames,
                        u = t - this.lastDecodedFrames,
                        d = 1e3 * l / n,
                        f = this.hls;
                        if (f.trigger(a.
                    default.FPS_DROP, {
                            currentDropped: l,
                            currentDecoded: u,
                            totalDroppedFrames: r
                        }), d > 0 && l > f.config.fpsDroppedMonitoringThreshold * u) {
                            var c = f.currentLevel;
                            o.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + c),
                            c > 0 && ( - 1 === f.autoLevelCapping || f.autoLevelCapping >= c) && (c -= 1, f.trigger(a.
                        default.FPS_DROP_LEVEL_CAPPING, {
                                level: c,
                                droppedLevel: f.currentLevel
                            }), f.autoLevelCapping = c, f.streamController.nextLevelSwitch())
                        }
                    }
                    this.lastTime = i,
                    this.lastDroppedFrames = r,
                    this.lastDecodedFrames = t
                }
            },
            t.prototype.checkFPSInterval = function() {
                var e = this.video;
                if (e) if (this.isVideoPlaybackQualityAvailable) {
                    var t = e.getVideoPlaybackQuality();
                    this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
                } else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
            },
            t
        } (n.
    default);
        t.
    default = l
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(0),
        a = window.performance,
        n = window.XMLHttpRequest,
        o = function() {
            function e(e) {
                e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
            }
            return e.prototype.destroy = function() {
                this.abort(),
                this.loader = null
            },
            e.prototype.abort = function() {
                var e = this.loader;
                e && 4 !== e.readyState && (this.stats.aborted = !0, e.abort()),
                window.clearTimeout(this.requestTimeout),
                this.requestTimeout = null,
                window.clearTimeout(this.retryTimeout),
                this.retryTimeout = null
            },
            e.prototype.load = function(e, t, r) {
                this.context = e,
                this.config = t,
                this.callbacks = r,
                this.stats = {
                    trequest: a.now(),
                    retry: 0
                },
                this.retryDelay = t.retryDelay,
                this.loadInternal()
            },
            e.prototype.loadInternal = function() {
                var e, t = this.context;
                e = this.loader = new n;
                var r = this.stats;
                r.tfirst = 0,
                r.loaded = 0;
                var i = this.xhrSetup;
                try {
                    if (i) try {
                        i(e, t.url)
                    } catch(r) {
                        e.open("GET", t.url, !0),
                        i(e, t.url)
                    }
                    e.readyState || e.open("GET", t.url, !0)
                } catch(r) {
                    return void this.callbacks.onError({
                        code: e.status,
                        text: r.message
                    },
                    t, e)
                }
                t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)),
                e.onreadystatechange = this.readystatechange.bind(this),
                e.onprogress = this.loadprogress.bind(this),
                e.responseType = t.responseType,
                this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout),
                e.send()
            },
            e.prototype.readystatechange = function(e) {
                var t = e.currentTarget,
                r = t.readyState,
                n = this.stats,
                o = this.context,
                s = this.config;
                if (!n.aborted && r >= 2) if (window.clearTimeout(this.requestTimeout), 0 === n.tfirst && (n.tfirst = Math.max(a.now(), n.trequest)), 4 === r) {
                    var l = t.status;
                    if (l >= 200 && l < 300) {
                        n.tload = Math.max(n.tfirst, a.now());
                        var u = void 0,
                        d = void 0;
                        d = "arraybuffer" === o.responseType ? (u = t.response).byteLength: (u = t.responseText).length,
                        n.loaded = n.total = d;
                        var f = {
                            url: t.responseURL,
                            data: u
                        };
                        this.callbacks.onSuccess(f, n, o, t)
                    } else n.retry >= s.maxRetry || l >= 400 && l < 499 ? (i.logger.error(l + " while loading " + o.url), this.callbacks.onError({
                        code: l,
                        text: t.statusText
                    },
                    o, t)) : (i.logger.warn(l + " while loading " + o.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, s.maxRetryDelay), n.retry++)
                } else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), s.timeout)
            },
            e.prototype.loadtimeout = function() {
                i.logger.warn("timeout while loading " + this.context.url),
                this.callbacks.onTimeout(this.stats, this.context, null)
            },
            e.prototype.loadprogress = function(e) {
                var t = e.currentTarget,
                r = this.stats;
                r.loaded = e.loaded,
                e.lengthComputable && (r.total = e.total);
                var i = this.callbacks.onProgress;
                i && i(r, this.context, null, t)
            },
            e
        } ();
        t.
    default = o
    },
    function(e, t, r) {
        "use strict";
        var i = this && this.__extends ||
        function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(e, t) {
                e.__proto__ = t
            } ||
            function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function i() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        } ();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(1),
        n = r(28),
        o = r(0),
        s = r(3),
        l = function(e) {
            function t(t) {
                var r = e.call(this, t, a.
            default.MANIFEST_LOADING, a.
            default.MANIFEST_PARSED, a.
            default.AUDIO_TRACK_LOADED, a.
            default.AUDIO_TRACK_SWITCHED, a.
            default.LEVEL_LOADED, a.
            default.ERROR) || this;
                return r._trackId = -1,
                r._selectDefaultTrack = !0,
                r.tracks = [],
                r.trackIdBlacklist = Object.create(null),
                r.audioGroupId = null,
                r
            }
            return i(t, e),
            t.prototype.onManifestLoading = function() {
                this.tracks = [],
                this._trackId = -1,
                this._selectDefaultTrack = !0
            },
            t.prototype.onManifestParsed = function(e) {
                var t = this.tracks = e.audioTracks || [];
                this.hls.trigger(a.
            default.AUDIO_TRACKS_UPDATED, {
                    audioTracks: t
                })
            },
            t.prototype.onAudioTrackLoaded = function(e) {
                if (e.id >= this.tracks.length) o.logger.warn("Invalid audio track id:", e.id);
                else {
                    if (o.logger.log("audioTrack " + e.id + " loaded"), this.tracks[e.id].details = e.details, e.details.live && !this.hasInterval()) {
                        var t = 1e3 * e.details.targetduration;
                        this.setInterval(t)
                    } ! e.details.live && this.hasInterval() && this.clearInterval()
                }
            },
            t.prototype.onAudioTrackSwitched = function(e) {
                var t = this.tracks[e.id].groupId;
                t && this.audioGroupId !== t && (this.audioGroupId = t)
            },
            t.prototype.onLevelLoaded = function(e) {
                var t = this.hls.levels[e.level];
                if (t.audioGroupIds) {
                    var r = t.audioGroupIds[t.urlId];
                    this.audioGroupId !== r && (this.audioGroupId = r, this._selectInitialAudioTrack())
                }
            },
            t.prototype.onError = function(e) {
                e.type === s.ErrorTypes.NETWORK_ERROR && (e.fatal && this.clearInterval(), e.details === s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR && (o.logger.warn("Network failure on audio-track id:", e.context.id), this._handleLoadError()))
            },
            Object.defineProperty(t.prototype, "audioTracks", {
                get: function() {
                    return this.tracks
                },
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "audioTrack", {
                get: function() {
                    return this._trackId
                },
                set: function(e) {
                    this._setAudioTrack(e),
                    this._selectDefaultTrack = !1
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype._setAudioTrack = function(e) {
                if (this._trackId === e && this.tracks[this._trackId].details) o.logger.debug("Same id as current audio-track passed, and track details available -> no-op");
                else if (e < 0 || e >= this.tracks.length) o.logger.warn("Invalid id passed to audio-track controller");
                else {
                    var t = this.tracks[e];
                    o.logger.log("Now switching to audio-track index " + e),
                    this.clearInterval(),
                    this._trackId = e;
                    var r = t.url,
                    i = t.type,
                    n = t.id;
                    this.hls.trigger(a.
                default.AUDIO_TRACK_SWITCHING, {
                        id: n,
                        type: i,
                        url: r
                    }),
                    this._loadTrackDetailsIfNeeded(t)
                }
            },
            t.prototype.doTick = function() {
                this._updateTrack(this._trackId)
            },
            t.prototype._selectInitialAudioTrack = function() {
                var e = this,
                t = this.tracks;
                if (t.length) {
                    var r = this.tracks[this._trackId],
                    i = null;
                    if (r && (i = r.name), this._selectDefaultTrack) {
                        var n = t.filter(function(e) {
                            return e.
                        default
                        });
                        n.length ? t = n: o.logger.warn("No default audio tracks defined")
                    }
                    var l = !1,
                    u = function() {
                        t.forEach(function(t) {
                            l || e.audioGroupId && t.groupId !== e.audioGroupId || i && i !== t.name || (e._setAudioTrack(t.id), l = !0)
                        })
                    };
                    u(),
                    l || (i = null, u()),
                    l || (o.logger.error("No track found for running audio group-ID: " + this.audioGroupId), this.hls.trigger(a.
                default.ERROR, {
                        type: s.ErrorTypes.MEDIA_ERROR,
                        details: s.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
                        fatal: !0
                    }))
                }
            },
            t.prototype._needsTrackLoading = function(e) {
                var t = e.details,
                r = e.url;
                return ! (t && !t.live) && !!r
            },
            t.prototype._loadTrackDetailsIfNeeded = function(e) {
                if (this._needsTrackLoading(e)) {
                    var t = e.url,
                    r = e.id;
                    o.logger.log("loading audio-track playlist for id: " + r),
                    this.hls.trigger(a.
                default.AUDIO_TRACK_LOADING, {
                        url: t,
                        id: r
                    })
                }
            },
            t.prototype._updateTrack = function(e) {
                if (! (e < 0 || e >= this.tracks.length)) {
                    this.clearInterval(),
                    this._trackId = e,
                    o.logger.log("trying to update audio-track " + e);
                    var t = this.tracks[e];
                    this._loadTrackDetailsIfNeeded(t)
                }
            },
            t.prototype._handleLoadError = function() {
                this.trackIdBlacklist[this._trackId] = !0;
                var e = this._trackId,
                t = this.tracks[e],
                r = t.name,
                i = t.language,
                a = t.groupId;
                o.logger.warn("Loading failed on audio track id: " + e + ", group-id: " + a + ', name/language: "' + r + '" / "' + i + '"');
                for (var n = e,
                s = 0; s < this.tracks.length; s++) {
                    if (!this.trackIdBlacklist[s]) if (this.tracks[s].name === r) {
                        n = s;
                        break
                    }
                }
                n !== e ? (o.logger.log("Attempting audio-track fallback id:", n, "group-id:", this.tracks[n].groupId), this._setAudioTrack(n)) : o.logger.warn('No fallback audio-track found for name/language: "' + r + '" / "' + i + '"')
            },
            t
        } (n.
    default);
        t.
    default = l
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            var i = this && this.__extends ||
            function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                function(e, t) {
                    e.__proto__ = t
                } ||
                function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return function(t, r) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, r),
                    t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
                }
            } ();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(10),
            n = r(5),
            o = r(20),
            s = r(1),
            l = r(8),
            u = r(25),
            d = r(3),
            f = r(0),
            c = r(26),
            h = r(7),
            p = r(12),
            g = r(15),
            v = window.performance,
            y = function(t) {
                function r(e, r) {
                    var i = t.call(this, e, s.
                default.MEDIA_ATTACHED, s.
                default.MEDIA_DETACHING, s.
                default.AUDIO_TRACKS_UPDATED, s.
                default.AUDIO_TRACK_SWITCHING, s.
                default.AUDIO_TRACK_LOADED, s.
                default.KEY_LOADED, s.
                default.FRAG_LOADED, s.
                default.FRAG_PARSING_INIT_SEGMENT, s.
                default.FRAG_PARSING_DATA, s.
                default.FRAG_PARSED, s.
                default.ERROR, s.
                default.BUFFER_RESET, s.
                default.BUFFER_CREATED, s.
                default.BUFFER_APPENDED, s.
                default.BUFFER_FLUSHED, s.
                default.INIT_PTS_FOUND) || this;
                    return i.fragmentTracker = r,
                    i.config = e.config,
                    i.audioCodecSwap = !1,
                    i._state = g.State.STOPPED,
                    i.initPTS = [],
                    i.waitingFragment = null,
                    i.videoTrackCC = null,
                    i
                }
                return i(r, t),
                r.prototype.onInitPtsFound = function(e) {
                    var t = e.id,
                    r = e.frag.cc,
                    i = e.initPTS;
                    "main" === t && (this.initPTS[r] = i, this.videoTrackCC = r, f.logger.log("InitPTS for cc: " + r + " found from video track: " + i), this.state === g.State.WAITING_INIT_PTS && this.tick())
                },
                r.prototype.startLoad = function(e) {
                    if (this.tracks) {
                        var t = this.lastCurrentTime;
                        this.stopLoad(),
                        this.setInterval(100),
                        this.fragLoadError = 0,
                        t > 0 && -1 === e ? (f.logger.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = g.State.IDLE) : (this.lastCurrentTime = this.startPosition ? this.startPosition: e, this.state = g.State.STARTING),
                        this.nextLoadPosition = this.startPosition = this.lastCurrentTime,
                        this.tick()
                    } else this.startPosition = e,
                    this.state = g.State.STOPPED
                },
                Object.defineProperty(r.prototype, "state", {
                    get: function() {
                        return this._state
                    },
                    set: function(e) {
                        if (this.state !== e) {
                            var t = this.state;
                            this._state = e,
                            f.logger.log("audio stream:" + t + "->" + e)
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                r.prototype.doTick = function() {
                    var t, r, i, o = this.hls,
                    l = o.config;
                    switch (this.state) {
                    case g.State.ERROR:
                    case g.State.PAUSED:
                    case g.State.BUFFER_FLUSHING:
                        break;
                    case g.State.STARTING:
                        this.state = g.State.WAITING_TRACK,
                        this.loadedmetadata = !1;
                        break;
                    case g.State.IDLE:
                        var u = this.tracks;
                        if (!u) break;
                        if (!this.media && (this.startFragRequested || !l.startFragPrefetch)) break;
                        if (this.loadedmetadata) t = this.media.currentTime;
                        else if (void 0 === (t = this.nextLoadPosition)) break;
                        var d = this.mediaBuffer ? this.mediaBuffer: this.media,
                        p = this.videoBuffer ? this.videoBuffer: this.media,
                        y = n.BufferHelper.bufferInfo(d, t, l.maxBufferHole),
                        m = n.BufferHelper.bufferInfo(p, t, l.maxBufferHole),
                        E = y.len,
                        _ = y.end,
                        T = this.fragPrevious,
                        S = Math.min(l.maxBufferLength, l.maxMaxBufferLength),
                        b = Math.max(S, m.len),
                        A = this.audioSwitch,
                        R = this.trackId;
                        if ((E < b || A) && R < u.length) {
                            if (void 0 === (i = u[R].details)) {
                                this.state = g.State.WAITING_TRACK;
                                break
                            }
                            if (!A && this._streamEnded(y, i)) return this.hls.trigger(s.
                        default.BUFFER_EOS, {
                                type: "audio"
                            }),
                            void(this.state = g.State.ENDED);
                            var D = i.fragments,
                            L = D.length,
                            w = D[0].start,
                            O = D[L - 1].start + D[L - 1].duration,
                            I = void 0;
                            if (A) if (i.live && !i.PTSKnown) f.logger.log("switching audiotrack, live stream, unknown PTS,load first fragment"),
                            _ = 0;
                            else if (_ = t, i.PTSKnown && t < w) {
                                if (! (y.end > w || y.nextStart)) return;
                                f.logger.log("alt audio track ahead of main track, seek to start of alt audio track"),
                                this.media.currentTime = w + .05
                            }
                            if (i.initSegment && !i.initSegment.data) I = i.initSegment;
                            else if (_ <= w) {
                                if (I = D[0], null !== this.videoTrackCC && I.cc !== this.videoTrackCC && (I = c.findFragWithCC(D, this.videoTrackCC)), i.live && I.loadIdx && I.loadIdx === this.fragLoadIdx) {
                                    var P = y.nextStart ? y.nextStart: w;
                                    return f.logger.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (P + .05)),
                                    void(this.media.currentTime = P + .05)
                                }
                            } else {
                                var k = void 0,
                                C = l.maxFragLookUpTolerance,
                                F = T ? D[T.sn - D[0].sn + 1] : void 0,
                                x = function(e) {
                                    var t = Math.min(C, e.duration);
                                    return e.start + e.duration - t <= _ ? 1 : e.start - t > _ && e.start ? -1 : 0
                                };
                                _ < O ? (_ > O - C && (C = 0), k = F && !x(F) ? F: a.
                            default.search(D, x)) : k = D[L - 1],
                                k && (I = k, w = k.start, T && I.level === T.level && I.sn === T.sn && (I.sn < i.endSN ? (I = D[I.sn + 1 - i.startSN], f.logger.log("SN just loaded, load next one: " + I.sn)) : I = null))
                            }
                            I && (I.encrypted ? (f.logger.log("Loading key for " + I.sn + " of [" + i.startSN + " ," + i.endSN + "],track " + R), this.state = g.State.KEY_LOADING, o.trigger(s.
                        default.KEY_LOADING, {
                                frag: I
                            })) : (f.logger.log("Loading " + I.sn + ", cc: " + I.cc + " of [" + i.startSN + " ," + i.endSN + "],track " + R + ", currentTime:" + t + ",bufferEnd:" + _.toFixed(3)), this.fragCurrent = I, (A || this.fragmentTracker.getState(I) === h.FragmentState.NOT_LOADED) && (this.startFragRequested = !0, e.isFinite(I.sn) && (this.nextLoadPosition = I.start + I.duration), o.trigger(s.
                        default.FRAG_LOADING, {
                                frag: I
                            }), this.state = g.State.FRAG_LOADING)))
                        }
                        break;
                    case g.State.WAITING_TRACK:
                        (r = this.tracks[this.trackId]) && r.details && (this.state = g.State.IDLE);
                        break;
                    case g.State.FRAG_LOADING_WAITING_RETRY:
                        var M = v.now(),
                        N = this.retryDate,
                        U = (d = this.media) && d.seeking; (!N || M >= N || U) && (f.logger.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = g.State.IDLE);
                        break;
                    case g.State.WAITING_INIT_PTS:
                        var B = this.videoTrackCC;
                        if (void 0 === this.initPTS[B]) break;
                        var G = this.waitingFragment;
                        if (G) {
                            var j = G.frag.cc;
                            B !== j ? (r = this.tracks[this.trackId]).details && r.details.live && (f.logger.warn("Waiting fragment CC (" + j + ") does not match video track CC (" + B + ")"), this.waitingFragment = null, this.state = g.State.IDLE) : (this.state = g.State.FRAG_LOADING, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
                        } else this.state = g.State.IDLE;
                        break;
                    case g.State.STOPPED:
                    case g.State.FRAG_LOADING:
                    case g.State.PARSING:
                    case g.State.PARSED:
                    case g.State.ENDED:
                    }
                },
                r.prototype.onMediaAttached = function(e) {
                    var t = this.media = this.mediaBuffer = e.media;
                    this.onvseeking = this.onMediaSeeking.bind(this),
                    this.onvended = this.onMediaEnded.bind(this),
                    t.addEventListener("seeking", this.onvseeking),
                    t.addEventListener("ended", this.onvended);
                    var r = this.config;
                    this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
                },
                r.prototype.onMediaDetaching = function() {
                    var e = this.media;
                    e && e.ended && (f.logger.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0),
                    e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null),
                    this.media = this.mediaBuffer = this.videoBuffer = null,
                    this.loadedmetadata = !1,
                    this.stopLoad()
                },
                r.prototype.onAudioTracksUpdated = function(e) {
                    f.logger.log("audio tracks updated"),
                    this.tracks = e.audioTracks
                },
                r.prototype.onAudioTrackSwitching = function(e) {
                    var t = !!e.url;
                    this.trackId = e.id,
                    this.fragCurrent = null,
                    this.state = g.State.PAUSED,
                    this.waitingFragment = null,
                    t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null),
                    t && (this.audioSwitch = !0, this.state = g.State.IDLE),
                    this.tick()
                },
                r.prototype.onAudioTrackLoaded = function(t) {
                    var r = t.details,
                    i = t.id,
                    a = this.tracks[i],
                    n = r.totalduration,
                    o = 0;
                    if (f.logger.log("track " + i + " loaded [" + r.startSN + "," + r.endSN + "],duration:" + n), r.live) {
                        var s = a.details;
                        s && r.fragments.length > 0 ? (l.mergeDetails(s, r), o = r.fragments[0].start, r.PTSKnown ? f.logger.log("live audio playlist sliding:" + o.toFixed(3)) : f.logger.log("live audio playlist - outdated PTS, unknown sliding")) : (r.PTSKnown = !1, f.logger.log("live audio playlist - first load, unknown sliding"))
                    } else r.PTSKnown = !1;
                    if (a.details = r, !this.startFragRequested) {
                        if ( - 1 === this.startPosition) {
                            var u = r.startTimeOffset;
                            e.isFinite(u) ? (f.logger.log("start time offset found in playlist, adjust startPosition to " + u), this.startPosition = u) : this.startPosition = 0
                        }
                        this.nextLoadPosition = this.startPosition
                    }
                    this.state === g.State.WAITING_TRACK && (this.state = g.State.IDLE),
                    this.tick()
                },
                r.prototype.onKeyLoaded = function() {
                    this.state === g.State.KEY_LOADING && (this.state = g.State.IDLE, this.tick())
                },
                r.prototype.onFragLoaded = function(e) {
                    var t = this.fragCurrent,
                    r = e.frag;
                    if (this.state === g.State.FRAG_LOADING && t && "audio" === r.type && r.level === t.level && r.sn === t.sn) {
                        var i = this.tracks[this.trackId],
                        a = i.details,
                        n = a.totalduration,
                        l = t.level,
                        u = t.sn,
                        d = t.cc,
                        c = this.config.defaultAudioCodec || i.audioCodec || "mp4a.40.2",
                        h = this.stats = e.stats;
                        if ("initSegment" === u) this.state = g.State.IDLE,
                        h.tparsed = h.tbuffered = v.now(),
                        a.initSegment.data = e.payload,
                        this.hls.trigger(s.
                    default.FRAG_BUFFERED, {
                            stats: h,
                            frag: t,
                            id: "audio"
                        }),
                        this.tick();
                        else {
                            this.state = g.State.PARSING,
                            this.appended = !1,
                            this.demuxer || (this.demuxer = new o.
                        default(this.hls, "audio"));
                            var p = this.initPTS[d],
                            y = a.initSegment ? a.initSegment.data: [];
                            if (a.initSegment || void 0 !== p) {
                                this.pendingBuffering = !0,
                                f.logger.log("Demuxing " + u + " of [" + a.startSN + " ," + a.endSN + "],track " + l);
                                this.demuxer.push(e.payload, y, c, null, t, n, !1, p)
                            } else f.logger.log("unknown video PTS for continuity counter " + d + ", waiting for video PTS before demuxing audio frag " + u + " of [" + a.startSN + " ," + a.endSN + "],track " + l),
                            this.waitingFragment = e,
                            this.state = g.State.WAITING_INIT_PTS
                        }
                    }
                    this.fragLoadError = 0
                },
                r.prototype.onFragParsingInitSegment = function(e) {
                    var t = this.fragCurrent,
                    r = e.frag;
                    if (t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === g.State.PARSING) {
                        var i = e.tracks,
                        a = void 0;
                        if (i.video && delete i.video, a = i.audio) {
                            a.levelCodec = a.codec,
                            a.id = e.id,
                            this.hls.trigger(s.
                        default.BUFFER_CODECS, i),
                            f.logger.log("audio track:audio,container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");
                            var n = a.initSegment;
                            if (n) {
                                var o = {
                                    type: "audio",
                                    data: n,
                                    parent: "audio",
                                    content: "initSegment"
                                };
                                this.audioSwitch ? this.pendingData = [o] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(s.
                            default.BUFFER_APPENDING, o))
                            }
                            this.tick()
                        }
                    }
                },
                r.prototype.onFragParsingData = function(t) {
                    var r = this,
                    i = this.fragCurrent,
                    a = t.frag;
                    if (i && "audio" === t.id && "audio" === t.type && a.sn === i.sn && a.level === i.level && this.state === g.State.PARSING) {
                        var n = this.trackId,
                        o = this.tracks[n],
                        u = this.hls;
                        e.isFinite(t.endPTS) || (t.endPTS = t.startPTS + i.duration, t.endDTS = t.startDTS + i.duration),
                        i.addElementaryStream(p.
                    default.ElementaryStreamTypes.AUDIO),
                        f.logger.log("parsed " + t.type + ",PTS:[" + t.startPTS.toFixed(3) + "," + t.endPTS.toFixed(3) + "],DTS:[" + t.startDTS.toFixed(3) + "/" + t.endDTS.toFixed(3) + "],nb:" + t.nb),
                        l.updateFragPTSDTS(o.details, i, t.startPTS, t.endPTS);
                        var c = this.audioSwitch,
                        h = this.media,
                        v = !1;
                        if (c && h) if (h.readyState) {
                            var y = h.currentTime;
                            f.logger.log("switching audio track : currentTime:" + y),
                            y >= t.startPTS && (f.logger.log("switching audio track : flushing all audio"), this.state = g.State.BUFFER_FLUSHING, u.trigger(s.
                        default.BUFFER_FLUSHING, {
                                startOffset: 0,
                                endOffset: e.POSITIVE_INFINITY,
                                type: "audio"
                            }), v = !0, this.audioSwitch = !1, u.trigger(s.
                        default.AUDIO_TRACK_SWITCHED, {
                                id: n
                            }))
                        } else this.audioSwitch = !1,
                        u.trigger(s.
                    default.AUDIO_TRACK_SWITCHED, {
                            id: n
                        });
                        var m = this.pendingData;
                        if (!m) return f.logger.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),
                        void u.trigger(s.
                    default.ERROR, {
                            type: d.ErrorTypes.MEDIA_ERROR,
                            details: null,
                            fatal: !0
                        });
                        this.audioSwitch || ([t.data1, t.data2].forEach(function(e) {
                            e && e.length && m.push({
                                type: t.type,
                                data: e,
                                parent: "audio",
                                content: "data"
                            })
                        }), !v && m.length && (m.forEach(function(e) {
                            r.state === g.State.PARSING && (r.pendingBuffering = !0, r.hls.trigger(s.
                        default.BUFFER_APPENDING, e))
                        }), this.pendingData = [], this.appended = !0)),
                        this.tick()
                    }
                },
                r.prototype.onFragParsed = function(e) {
                    var t = this.fragCurrent,
                    r = e.frag;
                    t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === g.State.PARSING && (this.stats.tparsed = v.now(), this.state = g.State.PARSED, this._checkAppendedParsed())
                },
                r.prototype.onBufferReset = function() {
                    this.mediaBuffer = this.videoBuffer = null,
                    this.loadedmetadata = !1
                },
                r.prototype.onBufferCreated = function(e) {
                    var t = e.tracks.audio;
                    t && (this.mediaBuffer = t.buffer, this.loadedmetadata = !0),
                    e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
                },
                r.prototype.onBufferAppended = function(e) {
                    if ("audio" === e.parent) {
                        var t = this.state;
                        t !== g.State.PARSING && t !== g.State.PARSED || (this.pendingBuffering = e.pending > 0, this._checkAppendedParsed())
                    }
                },
                r.prototype._checkAppendedParsed = function() {
                    if (! (this.state !== g.State.PARSED || this.appended && this.pendingBuffering)) {
                        var e = this.fragCurrent,
                        t = this.stats,
                        r = this.hls;
                        if (e) {
                            this.fragPrevious = e,
                            t.tbuffered = v.now(),
                            r.trigger(s.
                        default.FRAG_BUFFERED, {
                                stats: t,
                                frag: e,
                                id: "audio"
                            });
                            var i = this.mediaBuffer ? this.mediaBuffer: this.media;
                            f.logger.log("audio buffered : " + u.
                        default.toString(i.buffered)),
                            this.audioSwitch && this.appended && (this.audioSwitch = !1, r.trigger(s.
                        default.AUDIO_TRACK_SWITCHED, {
                                id: this.trackId
                            })),
                            this.state = g.State.IDLE
                        }
                        this.tick()
                    }
                },
                r.prototype.onError = function(t) {
                    var r = t.frag;
                    if (!r || "audio" === r.type) switch (t.details) {
                    case d.ErrorDetails.FRAG_LOAD_ERROR:
                    case d.ErrorDetails.FRAG_LOAD_TIMEOUT:
                        var i = t.frag;
                        if (i && "audio" !== i.type) break;
                        if (!t.fatal) {
                            var a = this.fragLoadError;
                            if (a ? a++:a = 1, a <= (l = this.config).fragLoadingMaxRetry) {
                                this.fragLoadError = a;
                                var o = Math.min(Math.pow(2, a - 1) * l.fragLoadingRetryDelay, l.fragLoadingMaxRetryTimeout);
                                f.logger.warn("AudioStreamController: frag loading failed, retry in " + o + " ms"),
                                this.retryDate = v.now() + o,
                                this.state = g.State.FRAG_LOADING_WAITING_RETRY
                            } else f.logger.error("AudioStreamController: " + t.details + " reaches max retry, redispatch as fatal ..."),
                            t.fatal = !0,
                            this.state = g.State.ERROR
                        }
                        break;
                    case d.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
                    case d.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                    case d.ErrorDetails.KEY_LOAD_ERROR:
                    case d.ErrorDetails.KEY_LOAD_TIMEOUT:
                        this.state !== g.State.ERROR && (this.state = t.fatal ? g.State.ERROR: g.State.IDLE, f.logger.warn("AudioStreamController: " + t.details + " while loading frag, now switching to " + this.state + " state ..."));
                        break;
                    case d.ErrorDetails.BUFFER_FULL_ERROR:
                        if ("audio" === t.parent && (this.state === g.State.PARSING || this.state === g.State.PARSED)) {
                            var l, u = this.mediaBuffer,
                            c = this.media.currentTime;
                            if (u && n.BufferHelper.isBuffered(u, c) && n.BufferHelper.isBuffered(u, c + .5))(l = this.config).maxMaxBufferLength >= l.maxBufferLength && (l.maxMaxBufferLength /= 2, f.logger.warn("AudioStreamController: reduce max buffer length to " + l.maxMaxBufferLength + "s")),
                            this.state = g.State.IDLE;
                            else f.logger.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),
                            this.fragCurrent = null,
                            this.state = g.State.BUFFER_FLUSHING,
                            this.hls.trigger(s.
                        default.BUFFER_FLUSHING, {
                                startOffset: 0,
                                endOffset: e.POSITIVE_INFINITY,
                                type: "audio"
                            })
                        }
                    }
                },
                r.prototype.onBufferFlushed = function() {
                    var e = this,
                    t = this.pendingData;
                    t && t.length ? (f.logger.log("AudioStreamController: appending pending audio data after buffer flushed"), t.forEach(function(t) {
                        e.hls.trigger(s.
                    default.BUFFER_APPENDING, t)
                    }), this.appended = !0, this.pendingData = [], this.state = g.State.PARSED) : (this.state = g.State.IDLE, this.fragPrevious = null, this.tick())
                },
                r
            } (g.
        default);
            t.
        default = y
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = r(30);
        t.newCue = function(e, t, r, a) {
            for (var n, o, s, l, u, d = window.VTTCue || window.TextTrackCue,
            f = 0; f < a.rows.length; f++) if (s = !0, l = 0, u = "", !(n = a.rows[f]).isEmpty()) {
                for (var c = 0; c < n.chars.length; c++) n.chars[c].uchar.match(/\s/) && s ? l++:(u += n.chars[c].uchar, s = !1);
                n.cueStartTime = t,
                t === r && (r += 1e-4),
                o = new d(t, r, i.fixLineBreaks(u.trim())),
                l >= 16 ? l--:l++,
                navigator.userAgent.match(/Firefox\//) ? o.line = f + 1 : o.line = f > 7 ? f - 2 : f + 1,
                o.align = "left",
                o.position = Math.max(0, Math.min(100, l / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))),
                e.addCue(o)
            }
        }
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.
    default = function() {
            if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
            var e = "auto",
            t = {
                "": !0,
                lr: !0,
                rl: !0
            },
            r = {
                start: !0,
                middle: !0,
                end: !0,
                left: !0,
                right: !0
            };
            function i(e) {
                return "string" == typeof e && ( !! r[e.toLowerCase()] && e.toLowerCase())
            }
            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var i in r) e[i] = r[i]
                }
                return e
            }
            function n(r, n, o) {
                var s = this,
                l = function() {
                    if ("undefined" != typeof navigator) return /MSIE\s8\.0/.test(navigator.userAgent)
                } (),
                u = {};
                l ? s = document.createElement("custom") : u.enumerable = !0,
                s.hasBeenReset = !1;
                var d = "",
                f = !1,
                c = r,
                h = n,
                p = o,
                g = null,
                v = "",
                y = !0,
                m = "auto",
                E = "start",
                _ = 50,
                T = "middle",
                S = 50,
                b = "middle";
                if (Object.defineProperty(s, "id", a({},
                u, {
                    get: function() {
                        return d
                    },
                    set: function(e) {
                        d = "" + e
                    }
                })), Object.defineProperty(s, "pauseOnExit", a({},
                u, {
                    get: function() {
                        return f
                    },
                    set: function(e) {
                        f = !!e
                    }
                })), Object.defineProperty(s, "startTime", a({},
                u, {
                    get: function() {
                        return c
                    },
                    set: function(e) {
                        if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
                        c = e,
                        this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "endTime", a({},
                u, {
                    get: function() {
                        return h
                    },
                    set: function(e) {
                        if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
                        h = e,
                        this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "text", a({},
                u, {
                    get: function() {
                        return p
                    },
                    set: function(e) {
                        p = "" + e,
                        this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "region", a({},
                u, {
                    get: function() {
                        return g
                    },
                    set: function(e) {
                        g = e,
                        this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "vertical", a({},
                u, {
                    get: function() {
                        return v
                    },
                    set: function(e) {
                        var r = function(e) {
                            return "string" == typeof e && !!t[e.toLowerCase()] && e.toLowerCase()
                        } (e);
                        if (!1 === r) throw new SyntaxError("An invalid or illegal string was specified.");
                        v = r,
                        this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "snapToLines", a({},
                u, {
                    get: function() {
                        return y
                    },
                    set: function(e) {
                        y = !!e,
                        this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "line", a({},
                u, {
                    get: function() {
                        return m
                    },
                    set: function(t) {
                        if ("number" != typeof t && t !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
                        m = t,
                        this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "lineAlign", a({},
                u, {
                    get: function() {
                        return E
                    },
                    set: function(e) {
                        var t = i(e);
                        if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                        E = t,
                        this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "position", a({},
                u, {
                    get: function() {
                        return _
                    },
                    set: function(e) {
                        if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
                        _ = e,
                        this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "positionAlign", a({},
                u, {
                    get: function() {
                        return T
                    },
                    set: function(e) {
                        var t = i(e);
                        if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                        T = t,
                        this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "size", a({},
                u, {
                    get: function() {
                        return S
                    },
                    set: function(e) {
                        if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
                        S = e,
                        this.hasBeenReset = !0
                    }
                })), Object.defineProperty(s, "align", a({},
                u, {
                    get: function() {
                        return b
                    },
                    set: function(e) {
                        var t = i(e);
                        if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
                        b = t,
                        this.hasBeenReset = !0
                    }
                })), s.displayState = void 0, l) return s
            }
            return n.prototype.getCueAsHTML = function() {
                return window.WebVTT.convertCueToDOMTree(window, this.text)
            },
            n
        } ()
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            var i = this && this.__extends ||
            function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                function(e, t) {
                    e.__proto__ = t
                } ||
                function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return function(t, r) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, r),
                    t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
                }
            } ();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(1),
            n = r(4),
            o = r(71),
            s = r(72),
            l = r(73),
            u = r(0),
            d = r(29);
            function f(e, t) {
                return e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
            }
            function c(e, t, r, i) {
                return Math.min(t, i) - Math.max(e, r)
            }
            var h = function(t) {
                function r(e) {
                    var r = t.call(this, e, a.
                default.MEDIA_ATTACHING, a.
                default.MEDIA_DETACHING, a.
                default.FRAG_PARSING_USERDATA, a.
                default.FRAG_DECRYPTED, a.
                default.MANIFEST_LOADING, a.
                default.MANIFEST_LOADED, a.
                default.FRAG_LOADED, a.
                default.LEVEL_SWITCHING, a.
                default.INIT_PTS_FOUND) || this;
                    if (r.hls = e, r.config = e.config, r.enabled = !0, r.Cues = e.config.cueHandler, r.textTracks = [], r.tracks = [], r.unparsedVttFrags = [], r.initPTS = [], r.cueRanges = [], r.captionsTracks = {},
                    r.captionsProperties = {
                        textTrack1: {
                            label: r.config.captionsTextTrack1Label,
                            languageCode: r.config.captionsTextTrack1LanguageCode
                        },
                        textTrack2: {
                            label: r.config.captionsTextTrack2Label,
                            languageCode: r.config.captionsTextTrack2LanguageCode
                        }
                    },
                    r.config.enableCEA708Captions) {
                        var i = new s.
                    default(r, "textTrack1"),
                        n = new s.
                    default(r, "textTrack2");
                        r.cea608Parser = new o.
                    default(0, i, n)
                    }
                    return r
                }
                return i(r, t),
                r.prototype.addCues = function(e, t, r, i) {
                    for (var a = this.cueRanges,
                    n = !1,
                    o = a.length; o--;) {
                        var s = a[o],
                        l = c(s[0], s[1], t, r);
                        if (l >= 0 && (s[0] = Math.min(s[0], t), s[1] = Math.max(s[1], r), n = !0, l / (r - t) > .5)) return
                    }
                    n || a.push([t, r]),
                    this.Cues.newCue(this.captionsTracks[e], t, r, i)
                },
                r.prototype.onInitPtsFound = function(e) {
                    var t = this;
                    if ("main" === e.id && (this.initPTS[e.frag.cc] = e.initPTS), this.unparsedVttFrags.length) {
                        var r = this.unparsedVttFrags;
                        this.unparsedVttFrags = [],
                        r.forEach(function(e) {
                            t.onFragLoaded(e)
                        })
                    }
                },
                r.prototype.getExistingTrack = function(e) {
                    var t = this.media;
                    if (t) for (var r = 0; r < t.textTracks.length; r++) {
                        var i = t.textTracks[r];
                        if (i[e]) return i
                    }
                    return null
                },
                r.prototype.createCaptionsTrack = function(e) {
                    var t = this.captionsProperties[e],
                    r = t.label,
                    i = t.languageCode,
                    a = this.captionsTracks;
                    if (!a[e]) {
                        var n = this.getExistingTrack(e);
                        if (n) a[e] = n,
                        d.clearCurrentCues(a[e]),
                        d.sendAddTrackEvent(a[e], this.media);
                        else {
                            var o = this.createTextTrack("captions", r, i);
                            o && (o[e] = !0, a[e] = o)
                        }
                    }
                },
                r.prototype.createTextTrack = function(e, t, r) {
                    var i = this.media;
                    if (i) return i.addTextTrack(e, t, r)
                },
                r.prototype.destroy = function() {
                    n.
                default.prototype.destroy.call(this)
                },
                r.prototype.onMediaAttaching = function(e) {
                    this.media = e.media,
                    this._cleanTracks()
                },
                r.prototype.onMediaDetaching = function() {
                    var e = this.captionsTracks;
                    Object.keys(e).forEach(function(t) {
                        d.clearCurrentCues(e[t]),
                        delete e[t]
                    })
                },
                r.prototype.onManifestLoading = function() {
                    this.lastSn = -1,
                    this.prevCC = -1,
                    this.vttCCs = {
                        ccOffset: 0,
                        presentationOffset: 0,
                        0 : {
                            start: 0,
                            prevCC: -1,
                            new: !1
                        }
                    },
                    this._cleanTracks()
                },
                r.prototype._cleanTracks = function() {
                    var e = this.media;
                    if (e) {
                        var t = e.textTracks;
                        if (t) for (var r = 0; r < t.length; r++) d.clearCurrentCues(t[r])
                    }
                },
                r.prototype.onManifestLoaded = function(e) {
                    var t = this;
                    if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.cueRanges = [], this.config.enableWebVTT) {
                        this.tracks = e.subtitles || [];
                        var r = this.media ? this.media.textTracks: [];
                        this.tracks.forEach(function(e, i) {
                            var a;
                            if (i < r.length) {
                                for (var n = null,
                                o = 0; o < r.length; o++) if (f(r[o], e)) {
                                    n = r[o];
                                    break
                                }
                                n && (a = n)
                            }
                            a || (a = t.createTextTrack("subtitles", e.name, e.lang)),
                            e.
                        default ? a.mode = t.hls.subtitleDisplay ? "showing": "hidden": a.mode = "disabled",
                            t.textTracks.push(a)
                        })
                    }
                },
                r.prototype.onLevelSwitching = function() {
                    this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
                },
                r.prototype.onFragLoaded = function(t) {
                    var r = t.frag,
                    i = t.payload;
                    if ("main" === r.type) {
                        var n = r.sn;
                        if (n !== this.lastSn + 1) {
                            var o = this.cea608Parser;
                            o && o.reset()
                        }
                        this.lastSn = n
                    } else if ("subtitle" === r.type) if (i.byteLength) {
                        if (!e.isFinite(this.initPTS[r.cc])) return this.unparsedVttFrags.push(t),
                        void(this.initPTS.length && this.hls.trigger(a.
                    default.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: r
                        }));
                        var s = r.decryptdata;
                        null != s && null != s.key && "AES-128" === s.method || this._parseVTTs(r, i)
                    } else this.hls.trigger(a.
                default.SUBTITLE_FRAG_PROCESSED, {
                        success: !1,
                        frag: r
                    })
                },
                r.prototype._parseVTTs = function(e, t) {
                    var r = this.vttCCs;
                    r[e.cc] || (r[e.cc] = {
                        start: e.start,
                        prevCC: this.prevCC,
                        new: !0
                    },
                    this.prevCC = e.cc);
                    var i = this.textTracks,
                    n = this.hls;
                    l.
                default.parse(t, this.initPTS[e.cc], r, e.cc,
                    function(t) {
                        var r = i[e.level];
                        "disabled" !== r.mode ? (t.forEach(function(e) {
                            if (!r.cues.getCueById(e.id)) try {
                                r.addCue(e)
                            } catch(i) {
                                var t = new window.TextTrackCue(e.startTime, e.endTime, e.text);
                                t.id = e.id,
                                r.addCue(t)
                            }
                        }), n.trigger(a.
                    default.SUBTITLE_FRAG_PROCESSED, {
                            success: !0,
                            frag: e
                        })) : n.trigger(a.
                    default.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: e
                        })
                    },
                    function(t) {
                        u.logger.log("Failed to parse VTT cue: " + t),
                        n.trigger(a.
                    default.SUBTITLE_FRAG_PROCESSED, {
                            success: !1,
                            frag: e
                        })
                    })
                },
                r.prototype.onFragDecrypted = function(t) {
                    var r = t.payload,
                    i = t.frag;
                    if ("subtitle" === i.type) {
                        if (!e.isFinite(this.initPTS[i.cc])) return void this.unparsedVttFrags.push(t);
                        this._parseVTTs(i, r)
                    }
                },
                r.prototype.onFragParsingUserdata = function(e) {
                    if (this.enabled && this.config.enableCEA708Captions) for (var t = 0; t < e.samples.length; t++) {
                        var r = this.extractCea608Data(e.samples[t].bytes);
                        this.cea608Parser.addData(e.samples[t].pts, r)
                    }
                },
                r.prototype.extractCea608Data = function(e) {
                    for (var t, r, i, a = 31 & e[0], n = 2, o = [], s = 0; s < a; s++) t = e[n++],
                    r = 127 & e[n++],
                    i = 127 & e[n++],
                    0 === r && 0 === i || 0 != (4 & t) && 0 === (3 & t) && (o.push(r), o.push(i));
                    return o
                },
                r
            } (n.
        default);
            t.
        default = h
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
            42 : 225,
            92 : 233,
            94 : 237,
            95 : 243,
            96 : 250,
            123 : 231,
            124 : 247,
            125 : 209,
            126 : 241,
            127 : 9608,
            128 : 174,
            129 : 176,
            130 : 189,
            131 : 191,
            132 : 8482,
            133 : 162,
            134 : 163,
            135 : 9834,
            136 : 224,
            137 : 32,
            138 : 232,
            139 : 226,
            140 : 234,
            141 : 238,
            142 : 244,
            143 : 251,
            144 : 193,
            145 : 201,
            146 : 211,
            147 : 218,
            148 : 220,
            149 : 252,
            150 : 8216,
            151 : 161,
            152 : 42,
            153 : 8217,
            154 : 9473,
            155 : 169,
            156 : 8480,
            157 : 8226,
            158 : 8220,
            159 : 8221,
            160 : 192,
            161 : 194,
            162 : 199,
            163 : 200,
            164 : 202,
            165 : 203,
            166 : 235,
            167 : 206,
            168 : 207,
            169 : 239,
            170 : 212,
            171 : 217,
            172 : 249,
            173 : 219,
            174 : 171,
            175 : 187,
            176 : 195,
            177 : 227,
            178 : 205,
            179 : 204,
            180 : 236,
            181 : 210,
            182 : 242,
            183 : 213,
            184 : 245,
            185 : 123,
            186 : 125,
            187 : 92,
            188 : 94,
            189 : 95,
            190 : 124,
            191 : 8764,
            192 : 196,
            193 : 228,
            194 : 214,
            195 : 246,
            196 : 223,
            197 : 165,
            198 : 164,
            199 : 9475,
            200 : 197,
            201 : 229,
            202 : 216,
            203 : 248,
            204 : 9487,
            205 : 9491,
            206 : 9495,
            207 : 9499
        },
        a = function(e) {
            var t = e;
            return i.hasOwnProperty(e) && (t = i[e]),
            String.fromCharCode(t)
        },
        n = 15,
        o = 100,
        s = {
            17 : 1,
            18 : 3,
            21 : 5,
            22 : 7,
            23 : 9,
            16 : 11,
            19 : 12,
            20 : 14
        },
        l = {
            17 : 2,
            18 : 4,
            21 : 6,
            22 : 8,
            23 : 10,
            19 : 13,
            20 : 15
        },
        u = {
            25 : 1,
            26 : 3,
            29 : 5,
            30 : 7,
            31 : 9,
            24 : 11,
            27 : 12,
            28 : 14
        },
        d = {
            25 : 2,
            26 : 4,
            29 : 6,
            30 : 8,
            31 : 10,
            27 : 13,
            28 : 15
        },
        f = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
        c = {
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
                this.verboseFilter[e];
                this.verboseLevel
            }
        },
        h = function(e) {
            for (var t = [], r = 0; r < e.length; r++) t.push(e[r].toString(16));
            return t
        },
        p = function() {
            function e(e, t, r, i, a) {
                this.foreground = e || "white",
                this.underline = t || !1,
                this.italics = r || !1,
                this.background = i || "black",
                this.flash = a || !1
            }
            return e.prototype.reset = function() {
                this.foreground = "white",
                this.underline = !1,
                this.italics = !1,
                this.background = "black",
                this.flash = !1
            },
            e.prototype.setStyles = function(e) {
                for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
                    var i = t[r];
                    e.hasOwnProperty(i) && (this[i] = e[i])
                }
            },
            e.prototype.isDefault = function() {
                return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
            },
            e.prototype.equals = function(e) {
                return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
            },
            e.prototype.copy = function(e) {
                this.foreground = e.foreground,
                this.underline = e.underline,
                this.italics = e.italics,
                this.background = e.background,
                this.flash = e.flash
            },
            e.prototype.toString = function() {
                return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
            },
            e
        } (),
        g = function() {
            function e(e, t, r, i, a, n) {
                this.uchar = e || " ",
                this.penState = new p(t, r, i, a, n)
            }
            return e.prototype.reset = function() {
                this.uchar = " ",
                this.penState.reset()
            },
            e.prototype.setChar = function(e, t) {
                this.uchar = e,
                this.penState.copy(t)
            },
            e.prototype.setPenState = function(e) {
                this.penState.copy(e)
            },
            e.prototype.equals = function(e) {
                return this.uchar === e.uchar && this.penState.equals(e.penState)
            },
            e.prototype.copy = function(e) {
                this.uchar = e.uchar,
                this.penState.copy(e.penState)
            },
            e.prototype.isEmpty = function() {
                return " " === this.uchar && this.penState.isDefault()
            },
            e
        } (),
        v = function() {
            function e() {
                this.chars = [];
                for (var e = 0; e < o; e++) this.chars.push(new g);
                this.pos = 0,
                this.currPenState = new p
            }
            return e.prototype.equals = function(e) {
                for (var t = !0,
                r = 0; r < o; r++) if (!this.chars[r].equals(e.chars[r])) {
                    t = !1;
                    break
                }
                return t
            },
            e.prototype.copy = function(e) {
                for (var t = 0; t < o; t++) this.chars[t].copy(e.chars[t])
            },
            e.prototype.isEmpty = function() {
                for (var e = !0,
                t = 0; t < o; t++) if (!this.chars[t].isEmpty()) {
                    e = !1;
                    break
                }
                return e
            },
            e.prototype.setCursor = function(e) {
                this.pos !== e && (this.pos = e),
                this.pos < 0 ? (c.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : this.pos > o && (c.log("ERROR", "Too large cursor position " + this.pos), this.pos = o)
            },
            e.prototype.moveCursor = function(e) {
                var t = this.pos + e;
                if (e > 1) for (var r = this.pos + 1; r < t + 1; r++) this.chars[r].setPenState(this.currPenState);
                this.setCursor(t)
            },
            e.prototype.backSpace = function() {
                this.moveCursor( - 1),
                this.chars[this.pos].setChar(" ", this.currPenState)
            },
            e.prototype.insertChar = function(e) {
                e >= 144 && this.backSpace();
                var t = a(e);
                this.pos >= o ? c.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1))
            },
            e.prototype.clearFromPos = function(e) {
                var t;
                for (t = e; t < o; t++) this.chars[t].reset()
            },
            e.prototype.clear = function() {
                this.clearFromPos(0),
                this.pos = 0,
                this.currPenState.reset()
            },
            e.prototype.clearToEndOfRow = function() {
                this.clearFromPos(this.pos)
            },
            e.prototype.getTextString = function() {
                for (var e = [], t = !0, r = 0; r < o; r++) {
                    var i = this.chars[r].uchar;
                    " " !== i && (t = !1),
                    e.push(i)
                }
                return t ? "": e.join("")
            },
            e.prototype.setPenStyles = function(e) {
                this.currPenState.setStyles(e),
                this.chars[this.pos].setPenState(this.currPenState)
            },
            e
        } (),
        y = function() {
            function e() {
                this.rows = [];
                for (var e = 0; e < n; e++) this.rows.push(new v);
                this.currRow = n - 1,
                this.nrRollUpRows = null,
                this.reset()
            }
            return e.prototype.reset = function() {
                for (var e = 0; e < n; e++) this.rows[e].clear();
                this.currRow = n - 1
            },
            e.prototype.equals = function(e) {
                for (var t = !0,
                r = 0; r < n; r++) if (!this.rows[r].equals(e.rows[r])) {
                    t = !1;
                    break
                }
                return t
            },
            e.prototype.copy = function(e) {
                for (var t = 0; t < n; t++) this.rows[t].copy(e.rows[t])
            },
            e.prototype.isEmpty = function() {
                for (var e = !0,
                t = 0; t < n; t++) if (!this.rows[t].isEmpty()) {
                    e = !1;
                    break
                }
                return e
            },
            e.prototype.backSpace = function() {
                this.rows[this.currRow].backSpace()
            },
            e.prototype.clearToEndOfRow = function() {
                this.rows[this.currRow].clearToEndOfRow()
            },
            e.prototype.insertChar = function(e) {
                this.rows[this.currRow].insertChar(e)
            },
            e.prototype.setPen = function(e) {
                this.rows[this.currRow].setPenStyles(e)
            },
            e.prototype.moveCursor = function(e) {
                this.rows[this.currRow].moveCursor(e)
            },
            e.prototype.setCursor = function(e) {
                c.log("INFO", "setCursor: " + e),
                this.rows[this.currRow].setCursor(e)
            },
            e.prototype.setPAC = function(e) {
                c.log("INFO", "pacData = " + JSON.stringify(e));
                var t = e.row - 1;
                if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
                    for (var r = 0; r < n; r++) this.rows[r].clear();
                    var i = this.currRow + 1 - this.nrRollUpRows,
                    a = this.lastOutputScreen;
                    if (a) {
                        var o = a.rows[i].cueStartTime;
                        if (o && o < c.time) for (r = 0; r < this.nrRollUpRows; r++) this.rows[t - this.nrRollUpRows + r + 1].copy(a.rows[i + r])
                    }
                }
                this.currRow = t;
                var s = this.rows[this.currRow];
                if (null !== e.indent) {
                    var l = e.indent,
                    u = Math.max(l - 1, 0);
                    s.setCursor(e.indent),
                    e.color = s.chars[u].penState.foreground
                }
                var d = {
                    foreground: e.color,
                    underline: e.underline,
                    italics: e.italics,
                    background: "black",
                    flash: !1
                };
                this.setPen(d)
            },
            e.prototype.setBkgData = function(e) {
                c.log("INFO", "bkgData = " + JSON.stringify(e)),
                this.backSpace(),
                this.setPen(e),
                this.insertChar(32)
            },
            e.prototype.setRollUpRows = function(e) {
                this.nrRollUpRows = e
            },
            e.prototype.rollUp = function() {
                if (null !== this.nrRollUpRows) {
                    c.log("TEXT", this.getDisplayText());
                    var e = this.currRow + 1 - this.nrRollUpRows,
                    t = this.rows.splice(e, 1)[0];
                    t.clear(),
                    this.rows.splice(this.currRow, 0, t),
                    c.log("INFO", "Rolling up")
                } else c.log("DEBUG", "roll_up but nrRollUpRows not set yet")
            },
            e.prototype.getDisplayText = function(e) {
                e = e || !1;
                for (var t = [], r = "", i = -1, a = 0; a < n; a++) {
                    var o = this.rows[a].getTextString();
                    o && (i = a + 1, e ? t.push("Row " + i + ": '" + o + "'") : t.push(o.trim()))
                }
                return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]": t.join("\n")),
                r
            },
            e.prototype.getTextAndFormat = function() {
                return this.rows
            },
            e
        } (),
        m = function() {
            function e(e, t) {
                this.chNr = e,
                this.outputFilter = t,
                this.mode = null,
                this.verbose = 0,
                this.displayedMemory = new y,
                this.nonDisplayedMemory = new y,
                this.lastOutputScreen = new y,
                this.currRollUpRow = this.displayedMemory.rows[n - 1],
                this.writeScreen = this.displayedMemory,
                this.mode = null,
                this.cueStartTime = null
            }
            return e.prototype.reset = function() {
                this.mode = null,
                this.displayedMemory.reset(),
                this.nonDisplayedMemory.reset(),
                this.lastOutputScreen.reset(),
                this.currRollUpRow = this.displayedMemory.rows[n - 1],
                this.writeScreen = this.displayedMemory,
                this.mode = null,
                this.cueStartTime = null,
                this.lastCueEndTime = null
            },
            e.prototype.getHandler = function() {
                return this.outputFilter
            },
            e.prototype.setHandler = function(e) {
                this.outputFilter = e
            },
            e.prototype.setPAC = function(e) {
                this.writeScreen.setPAC(e)
            },
            e.prototype.setBkgData = function(e) {
                this.writeScreen.setBkgData(e)
            },
            e.prototype.setMode = function(e) {
                e !== this.mode && (this.mode = e, c.log("INFO", "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory: (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
            },
            e.prototype.insertChars = function(e) {
                for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
                var r = this.writeScreen === this.displayedMemory ? "DISP": "NON_DISP";
                c.log("INFO", r + ": " + this.writeScreen.getDisplayText(!0)),
                "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (c.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
            },
            e.prototype.ccRCL = function() {
                c.log("INFO", "RCL - Resume Caption Loading"),
                this.setMode("MODE_POP-ON")
            },
            e.prototype.ccBS = function() {
                c.log("INFO", "BS - BackSpace"),
                "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
            },
            e.prototype.ccAOF = function() {},
            e.prototype.ccAON = function() {},
            e.prototype.ccDER = function() {
                c.log("INFO", "DER- Delete to End of Row"),
                this.writeScreen.clearToEndOfRow(),
                this.outputDataUpdate()
            },
            e.prototype.ccRU = function(e) {
                c.log("INFO", "RU(" + e + ") - Roll Up"),
                this.writeScreen = this.displayedMemory,
                this.setMode("MODE_ROLL-UP"),
                this.writeScreen.setRollUpRows(e)
            },
            e.prototype.ccFON = function() {
                c.log("INFO", "FON - Flash On"),
                this.writeScreen.setPen({
                    flash: !0
                })
            },
            e.prototype.ccRDC = function() {
                c.log("INFO", "RDC - Resume Direct Captioning"),
                this.setMode("MODE_PAINT-ON")
            },
            e.prototype.ccTR = function() {
                c.log("INFO", "TR"),
                this.setMode("MODE_TEXT")
            },
            e.prototype.ccRTD = function() {
                c.log("INFO", "RTD"),
                this.setMode("MODE_TEXT")
            },
            e.prototype.ccEDM = function() {
                c.log("INFO", "EDM - Erase Displayed Memory"),
                this.displayedMemory.reset(),
                this.outputDataUpdate(!0)
            },
            e.prototype.ccCR = function() {
                c.log("CR - Carriage Return"),
                this.writeScreen.rollUp(),
                this.outputDataUpdate(!0)
            },
            e.prototype.ccENM = function() {
                c.log("INFO", "ENM - Erase Non-displayed Memory"),
                this.nonDisplayedMemory.reset()
            },
            e.prototype.ccEOC = function() {
                if (c.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
                    var e = this.displayedMemory;
                    this.displayedMemory = this.nonDisplayedMemory,
                    this.nonDisplayedMemory = e,
                    this.writeScreen = this.nonDisplayedMemory,
                    c.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
                }
                this.outputDataUpdate(!0)
            },
            e.prototype.ccTO = function(e) {
                c.log("INFO", "TO(" + e + ") - Tab Offset"),
                this.writeScreen.moveCursor(e)
            },
            e.prototype.ccMIDROW = function(e) {
                var t = {
                    flash: !1
                };
                if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";
                else {
                    var r = Math.floor(e / 2) - 16;
                    t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
                }
                c.log("INFO", "MIDROW: " + JSON.stringify(t)),
                this.writeScreen.setPen(t)
            },
            e.prototype.outputDataUpdate = function(e) {
                void 0 === e && (e = !1);
                var t = c.time;
                null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), !0 === e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue()), this.cueStartTime = this.displayedMemory.isEmpty() ? null: t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
            },
            e.prototype.cueSplitAtTime = function(e) {
                this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
            },
            e
        } (),
        E = function() {
            function e(e, t, r) {
                this.field = e || 1,
                this.outputs = [t, r],
                this.channels = [new m(1, t), new m(2, r)],
                this.currChNr = -1,
                this.lastCmdA = null,
                this.lastCmdB = null,
                this.bufferedData = [],
                this.startTime = null,
                this.lastTime = null,
                this.dataCounters = {
                    padding: 0,
                    char: 0,
                    cmd: 0,
                    other: 0
                }
            }
            return e.prototype.getHandler = function(e) {
                return this.channels[e].getHandler()
            },
            e.prototype.setHandler = function(e, t) {
                this.channels[e].setHandler(t)
            },
            e.prototype.addData = function(e, t) {
                var r, i, a, n = !1;
                this.lastTime = e,
                c.setTime(e);
                for (var o = 0; o < t.length; o += 2) if (i = 127 & t[o], a = 127 & t[o + 1], 0 !== i || 0 !== a) {
                    if (c.log("DATA", "[" + h([t[o], t[o + 1]]) + "] -> (" + h([i, a]) + ")"), (r = this.parseCmd(i, a)) || (r = this.parseMidrow(i, a)), r || (r = this.parsePAC(i, a)), r || (r = this.parseBackgroundAttributes(i, a)), !r) if (n = this.parseChars(i, a)) if (this.currChNr && this.currChNr >= 0) this.channels[this.currChNr - 1].insertChars(n);
                    else c.log("WARNING", "No channel found yet. TEXT-MODE?");
                    r ? this.dataCounters.cmd += 2 : n ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, c.log("WARNING", "Couldn't parse cleaned data " + h([i, a]) + " orig: " + h([t[o], t[o + 1]])))
                } else this.dataCounters.padding += 2
            },
            e.prototype.parseCmd = function(e, t) {
                var r = null;
                if (! ((20 === e || 28 === e) && t >= 32 && t <= 47) && !((23 === e || 31 === e) && t >= 33 && t <= 35)) return ! 1;
                if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null,
                this.lastCmdB = null,
                c.log("DEBUG", "Repeated command (" + h([e, t]) + ") is dropped"),
                !0;
                r = 20 === e || 23 === e ? 1 : 2;
                var i = this.channels[r - 1];
                return 20 === e || 28 === e ? 32 === t ? i.ccRCL() : 33 === t ? i.ccBS() : 34 === t ? i.ccAOF() : 35 === t ? i.ccAON() : 36 === t ? i.ccDER() : 37 === t ? i.ccRU(2) : 38 === t ? i.ccRU(3) : 39 === t ? i.ccRU(4) : 40 === t ? i.ccFON() : 41 === t ? i.ccRDC() : 42 === t ? i.ccTR() : 43 === t ? i.ccRTD() : 44 === t ? i.ccEDM() : 45 === t ? i.ccCR() : 46 === t ? i.ccENM() : 47 === t && i.ccEOC() : i.ccTO(t - 32),
                this.lastCmdA = e,
                this.lastCmdB = t,
                this.currChNr = r,
                !0
            },
            e.prototype.parseMidrow = function(e, t) {
                var r = null;
                return (17 === e || 25 === e) && t >= 32 && t <= 47 && ((r = 17 === e ? 1 : 2) !== this.currChNr ? (c.log("ERROR", "Mismatch channel in midrow parsing"), !1) : (this.channels[r - 1].ccMIDROW(t), c.log("DEBUG", "MIDROW (" + h([e, t]) + ")"), !0))
            },
            e.prototype.parsePAC = function(e, t) {
                var r, i = null;
                if (! ((e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127) && !((16 === e || 24 === e) && t >= 64 && t <= 95)) return ! 1;
                if (e === this.lastCmdA && t === this.lastCmdB) return this.lastCmdA = null,
                this.lastCmdB = null,
                !0;
                r = e <= 23 ? 1 : 2,
                i = t >= 64 && t <= 95 ? 1 === r ? s[e] : u[e] : 1 === r ? l[e] : d[e];
                var a = this.interpretPAC(i, t);
                return this.channels[r - 1].setPAC(a),
                this.lastCmdA = e,
                this.lastCmdB = t,
                this.currChNr = r,
                !0
            },
            e.prototype.interpretPAC = function(e, t) {
                var r = t,
                i = {
                    color: null,
                    italics: !1,
                    indent: null,
                    underline: !1,
                    row: e
                };
                return r = t > 95 ? t - 96 : t - 64,
                i.underline = 1 == (1 & r),
                r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2),
                i
            },
            e.prototype.parseChars = function(e, t) {
                var r = null,
                i = null,
                n = null;
                if (e >= 25 ? (r = 2, n = e - 8) : (r = 1, n = e), n >= 17 && n <= 19) {
                    var o = t;
                    o = 17 === n ? t + 80 : 18 === n ? t + 112 : t + 144,
                    c.log("INFO", "Special char '" + a(o) + "' in channel " + r),
                    i = [o]
                } else e >= 32 && e <= 127 && (i = 0 === t ? [e] : [e, t]);
                if (i) {
                    var s = h(i);
                    c.log("DEBUG", "Char codes =  " + s.join(",")),
                    this.lastCmdA = null,
                    this.lastCmdB = null
                }
                return i
            },
            e.prototype.parseBackgroundAttributes = function(e, t) {
                var r, i, a;
                return ((16 === e || 24 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 45 && t <= 47) && (r = {},
                16 === e || 24 === e ? (i = Math.floor((t - 32) / 2), r.background = f[i], t % 2 == 1 && (r.background = r.background + "_semi")) : 45 === t ? r.background = "transparent": (r.foreground = "black", 47 === t && (r.underline = !0)), a = e < 24 ? 1 : 2, this.channels[a - 1].setBkgData(r), this.lastCmdA = null, this.lastCmdB = null, !0)
            },
            e.prototype.reset = function() {
                for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].reset();
                this.lastCmdA = null,
                this.lastCmdB = null
            },
            e.prototype.cueSplitAtTime = function(e) {
                for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e)
            },
            e
        } ();
        t.
    default = E
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
            function e(e, t) {
                this.timelineController = e,
                this.trackName = t,
                this.startTime = null,
                this.endTime = null,
                this.screen = null
            }
            return e.prototype.dispatchCue = function() {
                null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen), this.startTime = null)
            },
            e.prototype.newCue = function(e, t, r) { (null === this.startTime || this.startTime > e) && (this.startTime = e),
                this.endTime = t,
                this.screen = r,
                this.timelineController.createCaptionsTrack(this.trackName)
            },
            e
        } ();
        t.
    default = i
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(30),
            a = r(11),
            n = function(e, t, r) {
                return e.substr(r || 0, t.length) === t
            },
            o = function(e) {
                for (var t = 5381,
                r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
                return (t >>> 0).toString()
            },
            s = {
                parse: function(t, r, s, l, u, d) {
                    var f, c = a.utf8ArrayToStr(new Uint8Array(t)).trim().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n"),
                    h = "00:00.000",
                    p = 0,
                    g = 0,
                    v = 0,
                    y = [],
                    m = !0,
                    E = new i.
                default;
                    E.oncue = function(e) {
                        var t = s[l],
                        r = s.ccOffset;
                        t && t.new && (void 0 !== g ? r = s.ccOffset = t.start: function(e, t, r) {
                            var i = e[t],
                            a = e[i.prevCC];
                            if (!a || !a.new && i.new) return e.ccOffset = e.presentationOffset = i.start,
                            void(i.new = !1);
                            for (; a && a.new;) e.ccOffset += i.start - a.start,
                            i.new = !1,
                            a = e[(i = a).prevCC];
                            e.presentationOffset = r
                        } (s, l, v)),
                        v && (r = v - s.presentationOffset),
                        e.startTime += r - g,
                        e.endTime += r - g,
                        e.id = o(e.startTime.toString()) + o(e.endTime.toString()) + o(e.text),
                        e.text = decodeURIComponent(encodeURIComponent(e.text)),
                        e.endTime > 0 && y.push(e)
                    },
                    E.onparsingerror = function(e) {
                        f = e
                    },
                    E.onflush = function() {
                        f && d ? d(f) : u(y)
                    },
                    c.forEach(function(t) {
                        if (m) {
                            if (n(t, "X-TIMESTAMP-MAP=")) {
                                m = !1,
                                t.substr(16).split(",").forEach(function(e) {
                                    n(e, "LOCAL:") ? h = e.substr(6) : n(e, "MPEGTS:") && (p = parseInt(e.substr(7)))
                                });
                                try {
                                    r + (9e4 * s[l].start || 0) < 0 && (r += 8589934592),
                                    p -= r,
                                    g = function(t) {
                                        var r = parseInt(t.substr( - 3)),
                                        i = parseInt(t.substr( - 6, 2)),
                                        a = parseInt(t.substr( - 9, 2)),
                                        n = t.length > 9 ? parseInt(t.substr(0, t.indexOf(":"))) : 0;
                                        return e.isFinite(r) && e.isFinite(i) && e.isFinite(a) && e.isFinite(n) ? (r += 1e3 * i, r += 6e4 * a, r += 36e5 * n) : -1
                                    } (h) / 1e3,
                                    v = p / 9e4,
                                    -1 === g && (f = new Error("Malformed X-TIMESTAMP-MAP: " + t))
                                } catch(e) {
                                    f = new Error("Malformed X-TIMESTAMP-MAP: " + t)
                                }
                                return
                            }
                            "" === t && (m = !1)
                        }
                        E.parse(t + "\n")
                    }),
                    E.flush()
                }
            };
            t.
        default = s
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict"; (function(e) {
            var i = this && this.__extends ||
            function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                function(e, t) {
                    e.__proto__ = t
                } ||
                function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return function(t, r) {
                    function i() {
                        this.constructor = t
                    }
                    e(t, r),
                    t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
                }
            } ();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(1),
            n = r(4),
            o = r(0),
            s = r(8),
            l = function(t) {
                function r(e) {
                    var r = t.call(this, e, a.
                default.MEDIA_ATTACHED, a.
                default.MEDIA_DETACHING, a.
                default.MANIFEST_LOADED, a.
                default.SUBTITLE_TRACK_LOADED) || this;
                    return r.tracks = [],
                    r.trackId = -1,
                    r.media = null,
                    r.stopped = !0,
                    r.subtitleDisplay = !0,
                    r
                }
                return i(r, t),
                r.prototype.destroy = function() {
                    n.
                default.prototype.destroy.call(this)
                },
                r.prototype.onMediaAttached = function(e) {
                    var t = this;
                    this.media = e.media,
                    this.media && (this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack, delete this.queuedDefaultTrack), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function() {
                        t.trackChangeListener()
                    },
                    500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
                },
                r.prototype.onMediaDetaching = function() {
                    this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), this.media = null)
                },
                r.prototype.onManifestLoaded = function(e) {
                    var t = this,
                    r = e.subtitles || [];
                    this.tracks = r,
                    this.hls.trigger(a.
                default.SUBTITLE_TRACKS_UPDATED, {
                        subtitleTracks: r
                    }),
                    r.forEach(function(e) {
                        e.
                    default && (t.media ? t.subtitleTrack = e.id: t.queuedDefaultTrack = e.id)
                    })
                },
                r.prototype.onSubtitleTrackLoaded = function(e) {
                    var t = this,
                    r = e.id,
                    i = e.details,
                    a = this.trackId,
                    n = this.tracks,
                    l = n[a];
                    if (r >= n.length || r !== a || !l || this.stopped) this._clearReloadTimer();
                    else if (o.logger.log("subtitle track " + r + " loaded"), i.live) {
                        var u = s.computeReloadInterval(l.details, i, e.stats.trequest);
                        o.logger.log("Reloading live subtitle playlist in " + u + "ms"),
                        this.timer = setTimeout(function() {
                            t._loadCurrentTrack()
                        },
                        u)
                    } else this._clearReloadTimer()
                },
                r.prototype.startLoad = function() {
                    this.stopped = !1,
                    this._loadCurrentTrack()
                },
                r.prototype.stopLoad = function() {
                    this.stopped = !0,
                    this._clearReloadTimer()
                },
                Object.defineProperty(r.prototype, "subtitleTracks", {
                    get: function() {
                        return this.tracks
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(r.prototype, "subtitleTrack", {
                    get: function() {
                        return this.trackId
                    },
                    set: function(e) {
                        this.trackId !== e && (this._toggleTrackModes(e), this._setSubtitleTrackInternal(e))
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                r.prototype._clearReloadTimer = function() {
                    this.timer && (clearTimeout(this.timer), this.timer = null)
                },
                r.prototype._loadCurrentTrack = function() {
                    var e = this.trackId,
                    t = this.tracks,
                    r = this.hls,
                    i = t[e];
                    e < 0 || !i || i.details && !i.details.live || (o.logger.log("Loading subtitle track " + e), r.trigger(a.
                default.SUBTITLE_TRACK_LOADING, {
                        url: i.url,
                        id: e
                    }))
                },
                r.prototype._toggleTrackModes = function(e) {
                    var t = this.media,
                    r = this.subtitleDisplay,
                    i = this.trackId;
                    if (t) {
                        var a = u(t.textTracks);
                        if ( - 1 === e)[].slice.call(a).forEach(function(e) {
                            e.mode = "disabled"
                        });
                        else {
                            var n = a[i];
                            n && (n.mode = "disabled")
                        }
                        var o = a[e];
                        o && (o.mode = r ? "showing": "hidden")
                    }
                },
                r.prototype._setSubtitleTrackInternal = function(t) {
                    var r = this.hls,
                    i = this.tracks; ! e.isFinite(t) || t < -1 || t >= i.length || (this.trackId = t, o.logger.log("Switching to subtitle track " + t), r.trigger(a.
                default.SUBTITLE_TRACK_SWITCH, {
                        id: t
                    }), this._loadCurrentTrack())
                },
                r.prototype._onTextTracksChanged = function() {
                    if (this.media) {
                        for (var e = -1,
                        t = u(this.media.textTracks), r = 0; r < t.length; r++) if ("hidden" === t[r].mode) e = r;
                        else if ("showing" === t[r].mode) {
                            e = r;
                            break
                        }
                        this.subtitleTrack = e
                    }
                },
                r
            } (n.
        default);
            function u(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var i = e[r];
                    "subtitles" === i.kind && i.label && t.push(e[r])
                }
                return t
            }
            t.
        default = l
        }).call(this, r(2).Number)
    },
    function(e, t, r) {
        "use strict";
        var i = this && this.__extends ||
        function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(e, t) {
                e.__proto__ = t
            } ||
            function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function i() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        } ();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(1),
        n = r(0),
        o = r(13),
        s = r(5),
        l = r(27),
        u = r(7),
        d = r(15),
        f = r(8),
        c = window.performance,
        h = function(e) {
            function t(t, r) {
                var i = e.call(this, t, a.
            default.MEDIA_ATTACHED, a.
            default.MEDIA_DETACHING, a.
            default.ERROR, a.
            default.KEY_LOADED, a.
            default.FRAG_LOADED, a.
            default.SUBTITLE_TRACKS_UPDATED, a.
            default.SUBTITLE_TRACK_SWITCH, a.
            default.SUBTITLE_TRACK_LOADED, a.
            default.SUBTITLE_FRAG_PROCESSED, a.
            default.LEVEL_UPDATED) || this;
                return i.fragmentTracker = r,
                i.config = t.config,
                i.state = d.State.STOPPED,
                i.tracks = [],
                i.tracksBuffered = [],
                i.currentTrackId = -1,
                i.decrypter = new o.
            default(t, t.config),
                i.lastAVStart = 0,
                i._onMediaSeeking = i.onMediaSeeking.bind(i),
                i
            }
            return i(t, e),
            t.prototype.onSubtitleFragProcessed = function(e) {
                var t = e.frag,
                r = e.success;
                if (this.fragPrevious = t, this.state = d.State.IDLE, r) {
                    var i = this.tracksBuffered[this.currentTrackId];
                    if (i) {
                        for (var a, n = t.start,
                        o = 0; o < i.length; o++) if (n >= i[o].start && n <= i[o].end) {
                            a = i[o];
                            break
                        }
                        var s = t.start + t.duration;
                        a ? a.end = s: (a = {
                            start: n,
                            end: s
                        },
                        i.push(a))
                    }
                }
            },
            t.prototype.onMediaAttached = function(e) {
                var t = e.media;
                this.media = t,
                t.addEventListener("seeking", this._onMediaSeeking),
                this.state = d.State.IDLE
            },
            t.prototype.onMediaDetaching = function() {
                this.media.removeEventListener("seeking", this._onMediaSeeking),
                this.media = null,
                this.state = d.State.STOPPED
            },
            t.prototype.onError = function(e) {
                var t = e.frag;
                t && "subtitle" === t.type && (this.state = d.State.IDLE)
            },
            t.prototype.onSubtitleTracksUpdated = function(e) {
                var t = this;
                n.logger.log("subtitle tracks updated"),
                this.tracksBuffered = [],
                this.tracks = e.subtitleTracks,
                this.tracks.forEach(function(e) {
                    t.tracksBuffered[e.id] = []
                })
            },
            t.prototype.onSubtitleTrackSwitch = function(e) {
                if (this.currentTrackId = e.id, this.tracks && -1 !== this.currentTrackId) {
                    var t = this.tracks[this.currentTrackId];
                    t && t.details && this.setInterval(500)
                } else this.clearInterval()
            },
            t.prototype.onSubtitleTrackLoaded = function(e) {
                var t = e.id,
                r = e.details,
                i = this.currentTrackId,
                a = this.tracks,
                n = a[i];
                t >= a.length || t !== i || !n || (r.live && f.mergeSubtitlePlaylists(n.details, r, this.lastAVStart), n.details = r, this.setInterval(500))
            },
            t.prototype.onKeyLoaded = function() {
                this.state === d.State.KEY_LOADING && (this.state = d.State.IDLE)
            },
            t.prototype.onFragLoaded = function(e) {
                var t = this.fragCurrent,
                r = e.frag.decryptdata,
                i = e.frag,
                n = this.hls;
                if (this.state === d.State.FRAG_LOADING && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && r && r.key && "AES-128" === r.method) {
                    var o = c.now();
                    this.decrypter.decrypt(e.payload, r.key.buffer, r.iv.buffer,
                    function(e) {
                        var t = c.now();
                        n.trigger(a.
                    default.FRAG_DECRYPTED, {
                            frag: i,
                            payload: e,
                            stats: {
                                tstart: o,
                                tdecrypt: t
                            }
                        })
                    })
                }
            },
            t.prototype.onLevelUpdated = function(e) {
                var t = e.details.fragments;
                this.lastAVStart = t.length ? t[0].start: 0
            },
            t.prototype.doTick = function() {
                if (this.media) switch (this.state) {
                case d.State.IDLE:
                    var e = this,
                    t = e.config,
                    r = e.currentTrackId,
                    i = e.fragmentTracker,
                    o = e.media,
                    f = e.tracks;
                    if (!f || !f[r] || !f[r].details) break;
                    var c = t.maxBufferHole,
                    h = t.maxFragLookUpTolerance,
                    p = Math.min(t.maxBufferLength, t.maxMaxBufferLength),
                    g = s.BufferHelper.bufferedInfo(this._getBuffered(), o.currentTime, c),
                    v = g.end,
                    y = g.len,
                    m = f[r].details,
                    E = m.fragments,
                    _ = E.length,
                    T = E[_ - 1].start + E[_ - 1].duration;
                    if (y > p) return;
                    var S = void 0,
                    b = this.fragPrevious;
                    v < T ? (b && m.hasProgramDateTime && (S = l.findFragmentByPDT(E, b.endProgramDateTime, h)), S || (S = l.findFragmentByPTS(b, E, v, h))) : S = E[_ - 1],
                    S && S.encrypted ? (n.logger.log("Loading key for " + S.sn), this.state = d.State.KEY_LOADING, this.hls.trigger(a.
                default.KEY_LOADING, {
                        frag: S
                    })) : S && i.getState(S) === u.FragmentState.NOT_LOADED && (this.fragCurrent = S, this.state = d.State.FRAG_LOADING, this.hls.trigger(a.
                default.FRAG_LOADING, {
                        frag: S
                    }))
                } else this.state = d.State.IDLE
            },
            t.prototype.stopLoad = function() {
                this.lastAVStart = 0,
                e.prototype.stopLoad.call(this)
            },
            t.prototype._getBuffered = function() {
                return this.tracksBuffered[this.currentTrackId] || []
            },
            t.prototype.onMediaSeeking = function() {
                this.fragPrevious = null
            },
            t
        } (d.
    default);
        t.SubtitleStreamController = h
    },
    function(e, t, r) {
        "use strict";
        var i = this && this.__extends ||
        function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array &&
            function(e, t) {
                e.__proto__ = t
            } ||
            function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function i() {
                    this.constructor = t
                }
                e(t, r),
                t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
            }
        } ();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(4),
        n = r(1),
        o = r(3),
        s = r(0),
        l = window.XMLHttpRequest,
        u = "com.widevine.alpha",
        d = "com.microsoft.playready",
        f = function(e) {
            function t(t) {
                var r = e.call(this, t, n.
            default.MEDIA_ATTACHED, n.
            default.MANIFEST_PARSED) || this;
                return r._widevineLicenseUrl = t.config.widevineLicenseUrl,
                r._licenseXhrSetup = t.config.licenseXhrSetup,
                r._emeEnabled = t.config.emeEnabled,
                r._requestMediaKeySystemAccess = t.config.requestMediaKeySystemAccessFunc,
                r._mediaKeysList = [],
                r._media = null,
                r._hasSetMediaKeys = !1,
                r._isMediaEncrypted = !1,
                r._requestLicenseFailureCount = 0,
                r
            }
            return i(t, e),
            t.prototype.getLicenseServerUrl = function(e) {
                var t;
                switch (e) {
                case u:
                    t = this._widevineLicenseUrl;
                    break;
                default:
                    t = null
                }
                return t || (s.logger.error('No license server URL configured for key-system "' + e + '"'), this.hls.trigger(n.
            default.ERROR, {
                    type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                    details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                    fatal: !0
                })),
                t
            },
            t.prototype._attemptKeySystemAccess = function(e, t, r) {
                var i = this,
                a = function(e, t, r) {
                    switch (e) {
                    case u:
                        return function(e, t, r) {
                            var i = {
                                videoCapabilities: []
                            };
                            return t.forEach(function(e) {
                                i.videoCapabilities.push({
                                    contentType: 'video/mp4; codecs="' + e + '"'
                                })
                            }),
                            [i]
                        } (0, r);
                    default:
                        throw Error("Unknown key-system: " + e)
                    }
                } (e, 0, r);
                a ? (s.logger.log("Requesting encrypted media key-system access"), this.requestMediaKeySystemAccess(e, a).then(function(t) {
                    i._onMediaKeySystemAccessObtained(e, t)
                }).
                catch(function(t) {
                    s.logger.error('Failed to obtain key-system "' + e + '" access:', t)
                })) : s.logger.warn("Can not create config for key-system (maybe because platform is not supported):", e)
            },
            Object.defineProperty(t.prototype, "requestMediaKeySystemAccess", {
                get: function() {
                    if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
                    return this._requestMediaKeySystemAccess
                },
                enumerable: !0,
                configurable: !0
            }),
            t.prototype._onMediaKeySystemAccessObtained = function(e, t) {
                var r = this;
                s.logger.log('Access for key-system "' + e + '" obtained');
                var i = {
                    mediaKeys: null,
                    mediaKeysSession: null,
                    mediaKeysSessionInitialized: !1,
                    mediaKeySystemAccess: t,
                    mediaKeySystemDomain: e
                };
                this._mediaKeysList.push(i),
                t.createMediaKeys().then(function(t) {
                    i.mediaKeys = t,
                    s.logger.log('Media-keys created for key-system "' + e + '"'),
                    r._onMediaKeysCreated()
                }).
                catch(function(e) {
                    s.logger.error("Failed to create media-keys:", e)
                })
            },
            t.prototype._onMediaKeysCreated = function() {
                var e = this;
                this._mediaKeysList.forEach(function(t) {
                    t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), e._onNewMediaKeySession(t.mediaKeysSession))
                })
            },
            t.prototype._onNewMediaKeySession = function(e) {
                var t = this;
                s.logger.log("New key-system session " + e.sessionId),
                e.addEventListener("message",
                function(r) {
                    t._onKeySessionMessage(e, r.message)
                },
                !1)
            },
            t.prototype._onKeySessionMessage = function(e, t) {
                s.logger.log("Got EME message event, creating license request"),
                this._requestLicense(t,
                function(t) {
                    s.logger.log("Received license data, updating key-session"),
                    e.update(t)
                })
            },
            t.prototype._onMediaEncrypted = function(e, t) {
                s.logger.log('Media is encrypted using "' + e + '" init data type'),
                this._isMediaEncrypted = !0,
                this._mediaEncryptionInitDataType = e,
                this._mediaEncryptionInitData = t,
                this._attemptSetMediaKeys(),
                this._generateRequestWithPreferredKeySession()
            },
            t.prototype._attemptSetMediaKeys = function() {
                if (!this._hasSetMediaKeys) {
                    var e = this._mediaKeysList[0];
                    if (!e || !e.mediaKeys) return s.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),
                    void this.hls.trigger(n.
                default.ERROR, {
                        type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: o.ErrorDetails.KEY_SYSTEM_NO_KEYS,
                        fatal: !0
                    });
                    s.logger.log("Setting keys for encrypted media"),
                    this._media.setMediaKeys(e.mediaKeys),
                    this._hasSetMediaKeys = !0
                }
            },
            t.prototype._generateRequestWithPreferredKeySession = function() {
                var e = this,
                t = this._mediaKeysList[0];
                if (!t) return s.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),
                void this.hls.trigger(n.
            default.ERROR, {
                    type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                    details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                    fatal: !0
                });
                if (t.mediaKeysSessionInitialized) s.logger.warn("Key-Session already initialized but requested again");
                else {
                    var r = t.mediaKeysSession;
                    r || (s.logger.error("Fatal: Media is encrypted but no key-session existing"), this.hls.trigger(n.
                default.ERROR, {
                        type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                        fatal: !0
                    }));
                    var i = this._mediaEncryptionInitDataType,
                    a = this._mediaEncryptionInitData;
                    s.logger.log('Generating key-session request for "' + i + '" init data type'),
                    t.mediaKeysSessionInitialized = !0,
                    r.generateRequest(i, a).then(function() {
                        s.logger.debug("Key-session generation succeeded")
                    }).
                    catch(function(t) {
                        s.logger.error("Error generating key-session request:", t),
                        e.hls.trigger(n.
                    default.ERROR, {
                            type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: o.ErrorDetails.KEY_SYSTEM_NO_SESSION,
                            fatal: !1
                        })
                    })
                }
            },
            t.prototype._createLicenseXhr = function(e, t, r) {
                var i = new l,
                a = this._licenseXhrSetup;
                try {
                    if (a) try {
                        a(i, e)
                    } catch(t) {
                        i.open("POST", e, !0),
                        a(i, e)
                    }
                    i.readyState || i.open("POST", e, !0)
                } catch(e) {
                    return s.logger.error("Error setting up key-system license XHR", e),
                    void this.hls.trigger(n.
                default.ERROR, {
                        type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                        details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                        fatal: !0
                    })
                }
                return i.responseType = "arraybuffer",
                i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, e, t, r),
                i
            },
            t.prototype._onLicenseRequestReadyStageChange = function(e, t, r, i) {
                switch (e.readyState) {
                case 4:
                    if (200 === e.status) this._requestLicenseFailureCount = 0,
                    s.logger.log("License request succeeded"),
                    i(e.response);
                    else {
                        if (s.logger.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount <= 3) {
                            var a = 3 - this._requestLicenseFailureCount + 1;
                            return s.logger.warn("Retrying license request, " + a + " attempts left"),
                            void this._requestLicense(r, i)
                        }
                        this.hls.trigger(n.
                    default.ERROR, {
                            type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                            details: o.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                            fatal: !0
                        })
                    }
                }
            },
            t.prototype._generateLicenseRequestChallenge = function(e, t) {
                var r;
                return e.mediaKeySystemDomain === d ? s.logger.error("PlayReady is not supported (yet)") : e.mediaKeySystemDomain === u ? r = t: s.logger.error("Unsupported key-system:", e.mediaKeySystemDomain),
                r
            },
            t.prototype._requestLicense = function(e, t) {
                s.logger.log("Requesting content license for key-system");
                var r = this._mediaKeysList[0];
                if (!r) return s.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),
                void this.hls.trigger(n.
            default.ERROR, {
                    type: o.ErrorTypes.KEY_SYSTEM_ERROR,
                    details: o.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
                    fatal: !0
                });
                var i = this.getLicenseServerUrl(r.mediaKeySystemDomain),
                a = this._createLicenseXhr(i, e, t);
                s.logger.log("Sending license request to URL: " + i),
                a.send(this._generateLicenseRequestChallenge(r, e))
            },
            t.prototype.onMediaAttached = function(e) {
                var t = this;
                if (this._emeEnabled) {
                    var r = e.media;
                    this._media = r,
                    r.addEventListener("encrypted",
                    function(e) {
                        t._onMediaEncrypted(e.initDataType, e.initData)
                    })
                }
            },
            t.prototype.onManifestParsed = function(e) {
                if (this._emeEnabled) {
                    var t = e.levels.map(function(e) {
                        return e.audioCodec
                    }),
                    r = e.levels.map(function(e) {
                        return e.videoCodec
                    });
                    this._attemptKeySystemAccess(u, t, r)
                }
            },
            t
        } (a.
    default);
        t.
    default = f
    },
    function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null;
        t.requestMediaKeySystemAccess = i
    }]).
default
});
//# sourceMappingURL=hls.min.js.map
