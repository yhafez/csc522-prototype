var H = Object.defineProperty
var l = (e, t) => H(e, 'name', { value: t, configurable: !0 })
import {
	I as V,
	J as F,
	K as z,
	L as X,
	M as J,
	N as Q,
	O as q,
	w as b,
	P as Z,
	j as tt,
	G as j,
	H as et,
	Q as nt,
	R as rt,
} from './iframe.734f45ba.js'
import './es.map.constructor.86a6c0ec.js'
var it = V,
	at = F
it('toPrimitive')
at()
var st = z,
	ot = X,
	ut = TypeError,
	lt = l(function (e) {
		if ((st(this), e === 'string' || e === 'default')) e = 'string'
		else if (e !== 'number') throw ut('Incorrect hint')
		return ot(this, e)
	}, 'dateToPrimitive$1'),
	ft = J,
	ct = Q,
	dt = lt,
	vt = q,
	x = vt('toPrimitive'),
	k = Date.prototype
ft(k, x) || ct(k, x, dt)
var S
;(function (e) {
	;(e.DONE = 'done'), (e.ERROR = 'error'), (e.ACTIVE = 'active'), (e.WAITING = 'waiting')
})(S || (S = {}))
var N
function E(e) {
	return (
		(E =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (t) {
						return typeof t
				  }
				: function (t) {
						return t &&
							typeof Symbol == 'function' &&
							t.constructor === Symbol &&
							t !== Symbol.prototype
							? 'symbol'
							: typeof t
				  }),
		E(e)
	)
}
l(E, '_typeof')
function yt(e, t) {
	if (e == null) return {}
	var r = ht(e, t),
		n,
		u
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e)
		for (u = 0; u < s.length; u++)
			(n = s[u]),
				!(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]))
	}
	return r
}
l(yt, '_objectWithoutProperties')
function ht(e, t) {
	if (e == null) return {}
	var r = {},
		n = Object.keys(e),
		u,
		s
	for (s = 0; s < n.length; s++) (u = n[s]), !(t.indexOf(u) >= 0) && (r[u] = e[u])
	return r
}
l(ht, '_objectWithoutPropertiesLoose')
function gt(e) {
	var t = _t(e, 'string')
	return E(t) === 'symbol' ? t : String(t)
}
l(gt, '_toPropertyKey')
function _t(e, t) {
	if (E(e) !== 'object' || e === null) return e
	var r = e[Symbol.toPrimitive]
	if (r !== void 0) {
		var n = r.call(e, t || 'default')
		if (E(n) !== 'object') return n
		throw new TypeError('@@toPrimitive must return a primitive value.')
	}
	return (t === 'string' ? String : Number)(e)
}
l(_t, '_toPrimitive')
function R(e) {
	return mt(e) || It(e) || $(e) || pt()
}
l(R, '_toConsumableArray')
function pt() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
l(pt, '_nonIterableSpread')
function It(e) {
	if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
		return Array.from(e)
}
l(It, '_iterableToArray')
function mt(e) {
	if (Array.isArray(e)) return C(e)
}
l(mt, '_arrayWithoutHoles')
function A(e, t, r) {
	return (
		t in e
			? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
			: (e[t] = r),
		e
	)
}
l(A, '_defineProperty')
function St(e, t) {
	if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
l(St, '_classCallCheck')
function U(e, t) {
	for (var r = 0; r < t.length; r++) {
		var n = t[r]
		;(n.enumerable = n.enumerable || !1),
			(n.configurable = !0),
			'value' in n && (n.writable = !0),
			Object.defineProperty(e, n.key, n)
	}
}
l(U, '_defineProperties')
function bt(e, t, r) {
	return (
		t && U(e.prototype, t), r && U(e, r), Object.defineProperty(e, 'prototype', { writable: !1 }), e
	)
}
l(bt, '_createClass')
function Y(e, t) {
	return wt(e) || Tt(e, t) || $(e, t) || Ot()
}
l(Y, '_slicedToArray')
function Ot() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
l(Ot, '_nonIterableRest')
function $(e, t) {
	if (!!e) {
		if (typeof e == 'string') return C(e, t)
		var r = Object.prototype.toString.call(e).slice(8, -1)
		if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
			return Array.from(e)
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return C(e, t)
	}
}
l($, '_unsupportedIterableToArray')
function C(e, t) {
	;(t == null || t > e.length) && (t = e.length)
	for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
	return n
}
l(C, '_arrayLikeToArray')
function Tt(e, t) {
	var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
	if (r != null) {
		var n = [],
			u = !0,
			s = !1,
			v,
			y
		try {
			for (
				r = r.call(e);
				!(u = (v = r.next()).done) && (n.push(v.value), !(t && n.length === t));
				u = !0
			);
		} catch (d) {
			;(s = !0), (y = d)
		} finally {
			try {
				!u && r.return != null && r.return()
			} finally {
				if (s) throw y
			}
		}
		return n
	}
}
l(Tt, '_iterableToArrayLimit')
function wt(e) {
	if (Array.isArray(e)) return e
}
l(wt, '_arrayWithHoles')
var T = {
		CALL: 'instrumenter/call',
		SYNC: 'instrumenter/sync',
		START: 'instrumenter/start',
		BACK: 'instrumenter/back',
		GOTO: 'instrumenter/goto',
		NEXT: 'instrumenter/next',
		END: 'instrumenter/end',
	},
	W = ((N = b.FEATURES) === null || N === void 0 ? void 0 : N.interactionsDebugger) !== !0,
	B = { debugger: !W, start: !1, back: !1, goto: !1, next: !1, end: !1 },
	L = new Error(
		'This function ran after the play function completed. Did you forget to `await` it?',
	),
	M = l(function (t) {
		return Object.prototype.toString.call(t) === '[object Object]'
	}, 'isObject'),
	Et = l(function (t) {
		return Object.prototype.toString.call(t) === '[object Module]'
	}, 'isModule'),
	Rt = l(function (t) {
		if (!M(t) && !Et(t)) return !1
		if (t.constructor === void 0) return !0
		var r = t.constructor.prototype
		return !(!M(r) || Object.prototype.hasOwnProperty.call(r, 'isPrototypeOf') === !1)
	}, 'isInstrumentable'),
	Nt = l(function (t) {
		try {
			return new t.constructor()
		} catch {
			return {}
		}
	}, 'construct'),
	P = l(function () {
		return {
			renderPhase: void 0,
			isDebugging: !1,
			isPlaying: !1,
			isLocked: !1,
			cursor: 0,
			calls: [],
			shadowCalls: [],
			callRefsByResult: new Map(),
			chainedCallIds: new Set(),
			parentId: void 0,
			playUntil: void 0,
			resolvers: {},
			syncTimeout: void 0,
			forwardedException: void 0,
		}
	}, 'getInitialState'),
	K = l(function (t) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
			n = (r ? t.shadowCalls : t.calls).filter(function (s) {
				return s.retain
			})
		if (!!n.length) {
			var u = new Map(
				Array.from(t.callRefsByResult.entries()).filter(function (s) {
					var v = Y(s, 2),
						y = v[1]
					return y.retain
				}),
			)
			return { cursor: n.length, calls: n, callRefsByResult: u }
		}
	}, 'getRetainedState'),
	At = (function () {
		function e() {
			var t = this
			St(this, e),
				(this.channel = void 0),
				(this.initialized = !1),
				(this.state = void 0),
				(this.channel = tt.getChannel()),
				(this.state = b.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {})
			var r = l(function (o) {
				var i = o.storyId,
					f = o.isPlaying,
					g = f === void 0 ? !0 : f,
					h = o.isDebugging,
					a = h === void 0 ? !1 : h,
					c = t.getState(i)
				t.setState(
					i,
					Object.assign({}, P(), K(c, a), {
						shadowCalls: a ? c.shadowCalls : [],
						chainedCallIds: a ? c.chainedCallIds : new Set(),
						playUntil: a ? c.playUntil : void 0,
						isPlaying: g,
						isDebugging: a,
					}),
				),
					a || t.sync(i)
			}, 'resetState')
			this.channel.on(j, r),
				this.channel.on(et, function (d) {
					var o = d.storyId,
						i = d.newPhase,
						f = t.getState(o),
						g = f.isDebugging,
						h = f.forwardedException
					if (
						(t.setState(o, { renderPhase: i }),
						i === 'playing' && r({ storyId: o, isDebugging: g }),
						i === 'played' &&
							(t.setState(o, {
								isLocked: !1,
								isPlaying: !1,
								isDebugging: !1,
								forwardedException: void 0,
							}),
							h))
					)
						throw h
				}),
				this.channel.on(nt, function () {
					t.initialized ? t.cleanup() : (t.initialized = !0)
				})
			var n = l(function (o) {
					var i = o.storyId,
						f = o.playUntil
					t.getState(i).isDebugging ||
						t.setState(i, function (h) {
							var a = h.calls
							return {
								calls: [],
								shadowCalls: a.map(function (c) {
									return Object.assign({}, c, { status: S.WAITING })
								}),
								isDebugging: !0,
							}
						})
					var g = t.getLog(i)
					t.setState(i, function (h) {
						var a,
							c = h.shadowCalls,
							p = c.findIndex(function (_) {
								return _.id === g[0].callId
							})
						return {
							playUntil:
								f ||
								((a = c
									.slice(0, p)
									.filter(function (_) {
										return _.interceptable
									})
									.slice(-1)[0]) === null || a === void 0
									? void 0
									: a.id),
						}
					}),
						t.channel.emit(j, { storyId: i, isDebugging: !0 })
				}, 'start'),
				u = l(function (o) {
					var i,
						f = o.storyId,
						g = t.getState(f),
						h = g.isDebugging,
						a = t.getLog(f),
						c = h
							? a.findIndex(function (p) {
									var _ = p.status
									return _ === S.WAITING
							  })
							: a.length
					n({ storyId: f, playUntil: (i = a[c - 2]) === null || i === void 0 ? void 0 : i.callId })
				}, 'back'),
				s = l(function (o) {
					var i = o.storyId,
						f = o.callId,
						g = t.getState(i),
						h = g.calls,
						a = g.shadowCalls,
						c = g.resolvers,
						p = h.find(function (m) {
							var w = m.id
							return w === f
						}),
						_ = a.find(function (m) {
							var w = m.id
							return w === f
						})
					if (!p && _ && Object.values(c).length > 0) {
						var I,
							O =
								(I = t.getLog(i).find(function (m) {
									return m.status === S.WAITING
								})) === null || I === void 0
									? void 0
									: I.callId
						_.id !== O && t.setState(i, { playUntil: _.id }),
							Object.values(c).forEach(function (m) {
								return m()
							})
					} else n({ storyId: i, playUntil: f })
				}, 'goto'),
				v = l(function (o) {
					var i = o.storyId,
						f = t.getState(i),
						g = f.resolvers
					if (Object.values(g).length > 0)
						Object.values(g).forEach(function (c) {
							return c()
						})
					else {
						var h,
							a =
								(h = t.getLog(i).find(function (c) {
									return c.status === S.WAITING
								})) === null || h === void 0
									? void 0
									: h.callId
						a ? n({ storyId: i, playUntil: a }) : y({ storyId: i })
					}
				}, 'next'),
				y = l(function (o) {
					var i = o.storyId
					t.setState(i, { playUntil: void 0, isDebugging: !1 }),
						Object.values(t.getState(i).resolvers).forEach(function (f) {
							return f()
						})
				}, 'end')
			this.channel.on(T.START, n),
				this.channel.on(T.BACK, u),
				this.channel.on(T.GOTO, s),
				this.channel.on(T.NEXT, v),
				this.channel.on(T.END, y)
		}
		return (
			l(e, 'Instrumenter'),
			bt(e, [
				{
					key: 'getState',
					value: l(function (r) {
						return this.state[r] || P()
					}, 'getState'),
				},
				{
					key: 'setState',
					value: l(function (r, n) {
						var u = this.getState(r),
							s = typeof n == 'function' ? n(u) : n
						;(this.state = Object.assign({}, this.state, A({}, r, Object.assign({}, u, s)))),
							(b.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state)
					}, 'setState'),
				},
				{
					key: 'cleanup',
					value: l(function () {
						;(this.state = Object.entries(this.state).reduce(function (r, n) {
							var u = Y(n, 2),
								s = u[0],
								v = u[1],
								y = K(v)
							return y && (r[s] = Object.assign(P(), y)), r
						}, {})),
							this.channel.emit(T.SYNC, { controlStates: B, logItems: [] }),
							(b.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state)
					}, 'cleanup'),
				},
				{
					key: 'getLog',
					value: l(function (r) {
						var n = this.getState(r),
							u = n.calls,
							s = n.shadowCalls,
							v = R(s)
						u.forEach(function (d, o) {
							v[o] = d
						})
						var y = new Set()
						return v.reduceRight(function (d, o) {
							return (
								o.args.forEach(function (i) {
									i != null && i.__callId__ && y.add(i.__callId__)
								}),
								o.path.forEach(function (i) {
									i.__callId__ && y.add(i.__callId__)
								}),
								o.interceptable &&
									!y.has(o.id) &&
									(d.unshift({ callId: o.id, status: o.status }), y.add(o.id)),
								d
							)
						}, [])
					}, 'getLog'),
				},
				{
					key: 'instrument',
					value: l(function (r, n) {
						var u = this
						if (!Rt(r)) return r
						var s = n.mutate,
							v = s === void 0 ? !1 : s,
							y = n.path,
							d = y === void 0 ? [] : y
						return Object.keys(r).reduce(
							function (o, i) {
								var f = r[i]
								return typeof f != 'function'
									? ((o[i] = u.instrument(f, Object.assign({}, n, { path: d.concat(i) }))), o)
									: typeof f.__originalFn__ == 'function'
									  ? ((o[i] = f), o)
									  : ((o[i] = function () {
												for (var g = arguments.length, h = new Array(g), a = 0; a < g; a++)
													h[a] = arguments[a]
												return u.track(i, f, h, n)
									    }),
									    (o[i].__originalFn__ = f),
									    Object.defineProperty(o[i], 'name', { value: i, writable: !1 }),
									    Object.keys(f).length > 0 &&
												Object.assign(
													o[i],
													u.instrument(
														Object.assign({}, f),
														Object.assign({}, n, { path: d.concat(i) }),
													),
												),
									    o)
							},
							v ? r : Nt(r),
						)
					}, 'instrument'),
				},
				{
					key: 'track',
					value: l(function (r, n, u, s) {
						var v,
							y,
							d,
							o,
							i =
								(u == null || (v = u[0]) === null || v === void 0 ? void 0 : v.__storyId__) ||
								((y = b.window.__STORYBOOK_PREVIEW__) === null ||
								y === void 0 ||
								(d = y.urlStore) === null ||
								d === void 0 ||
								(o = d.selection) === null ||
								o === void 0
									? void 0
									: o.storyId),
							f = this.getState(i),
							g = f.cursor,
							h = f.parentId
						this.setState(i, { cursor: g + 1 })
						var a = ''
								.concat(h || i, ' [')
								.concat(g, '] ')
								.concat(r),
							c = s.path,
							p = c === void 0 ? [] : c,
							_ = s.intercept,
							I = _ === void 0 ? !1 : _,
							O = s.retain,
							m = O === void 0 ? !1 : O,
							w = typeof I == 'function' ? I(r, p) : I,
							D = {
								id: a,
								parentId: h,
								storyId: i,
								cursor: g,
								path: p,
								method: r,
								args: u,
								interceptable: w,
								retain: m,
							},
							G = (w ? this.intercept : this.invoke).call(this, n, D, s)
						return this.instrument(
							G,
							Object.assign({}, s, { mutate: !0, path: [{ __callId__: D.id }] }),
						)
					}, 'track'),
				},
				{
					key: 'intercept',
					value: l(function (r, n, u) {
						var s = this,
							v = this.getState(n.storyId),
							y = v.chainedCallIds,
							d = v.isDebugging,
							o = v.playUntil,
							i = y.has(n.id)
						return !d || i || o
							? (o === n.id && this.setState(n.storyId, { playUntil: void 0 }),
							  this.invoke(r, n, u))
							: new Promise(function (f) {
									s.setState(n.storyId, function (g) {
										var h = g.resolvers
										return { isLocked: !1, resolvers: Object.assign({}, h, A({}, n.id, f)) }
									})
							  }).then(function () {
									return (
										s.setState(n.storyId, function (f) {
											var g = f.resolvers,
												h = n.id
											g[h]
											var a = yt(g, [h].map(gt))
											return { isLocked: !0, resolvers: a }
										}),
										s.invoke(r, n, u)
									)
							  })
					}, 'intercept'),
				},
				{
					key: 'invoke',
					value: l(function (r, n, u) {
						var s = this,
							v = this.getState(n.storyId),
							y = v.callRefsByResult,
							d = v.forwardedException,
							o = v.renderPhase,
							i = Object.assign({}, n, {
								args: n.args.map(function (a) {
									if (y.has(a)) return y.get(a)
									if (a instanceof b.window.HTMLElement) {
										var c = a.prefix,
											p = a.localName,
											_ = a.id,
											I = a.classList,
											O = a.innerText,
											m = Array.from(I)
										return {
											__element__: { prefix: c, localName: p, id: _, classNames: m, innerText: O },
										}
									}
									return a
								}),
							})
						n.path.forEach(function (a) {
							a != null &&
								a.__callId__ &&
								s.setState(n.storyId, function (c) {
									var p = c.chainedCallIds
									return { chainedCallIds: new Set(Array.from(p).concat(a.__callId__)) }
								})
						})
						var f = l(function (c) {
							if (c instanceof Error) {
								var p = c.name,
									_ = c.message,
									I = c.stack,
									O = { name: p, message: _, stack: I }
								if (
									(s.update(Object.assign({}, i, { status: S.ERROR, exception: O })),
									s.setState(n.storyId, function (m) {
										return {
											callRefsByResult: new Map(
												[].concat(R(Array.from(m.callRefsByResult.entries())), [
													[c, { __callId__: n.id, retain: n.retain }],
												]),
											),
										}
									}),
									n.interceptable && c !== L)
								)
									throw rt
								return s.setState(n.storyId, { forwardedException: c }), c
							}
							throw c
						}, 'handleException')
						try {
							if (d) throw (this.setState(n.storyId, { forwardedException: void 0 }), d)
							if (o === 'played' && !n.retain) throw L
							var g = u.getArgs ? u.getArgs(n, this.getState(n.storyId)) : n.args,
								h = r.apply(
									void 0,
									R(
										g.map(function (a) {
											return typeof a != 'function' || Object.keys(a).length
												? a
												: function () {
														var c = s.getState(n.storyId),
															p = c.cursor,
															_ = c.parentId
														s.setState(n.storyId, { cursor: 0, parentId: n.id })
														var I = l(function () {
																return s.setState(n.storyId, { cursor: p, parentId: _ })
															}, 'restore'),
															O = a.apply(void 0, arguments)
														return O instanceof Promise ? O.then(I, I) : I(), O
												  }
										}),
									),
								)
							return (
								h &&
									['object', 'function', 'symbol'].includes(E(h)) &&
									this.setState(n.storyId, function (a) {
										return {
											callRefsByResult: new Map(
												[].concat(R(Array.from(a.callRefsByResult.entries())), [
													[h, { __callId__: n.id, retain: n.retain }],
												]),
											),
										}
									}),
								this.update(
									Object.assign({}, i, { status: h instanceof Promise ? S.ACTIVE : S.DONE }),
								),
								h instanceof Promise
									? h.then(function (a) {
											return s.update(Object.assign({}, i, { status: S.DONE })), a
									  }, f)
									: h
							)
						} catch (a) {
							return f(a)
						}
					}, 'invoke'),
				},
				{
					key: 'update',
					value: l(function (r) {
						var n = this
						clearTimeout(this.getState(r.storyId).syncTimeout),
							this.channel.emit(T.CALL, r),
							this.setState(r.storyId, function (u) {
								var s = u.calls,
									v = s.concat(r).reduce(function (y, d) {
										return Object.assign(y, A({}, d.id, d))
									}, {})
								return {
									calls: Object.values(v).sort(function (y, d) {
										return y.id.localeCompare(d.id, void 0, { numeric: !0 })
									}),
									syncTimeout: setTimeout(function () {
										return n.sync(r.storyId)
									}, 0),
								}
							})
					}, 'update'),
				},
				{
					key: 'sync',
					value: l(function (r) {
						var n = this.getState(r),
							u = n.isLocked,
							s = n.isPlaying,
							v = this.getLog(r),
							y = v.some(function (i) {
								return i.status === S.ACTIVE
							})
						if (W || u || y || v.length === 0) {
							this.channel.emit(T.SYNC, { controlStates: B, logItems: v })
							return
						}
						var d = v.some(function (i) {
								return [S.DONE, S.ERROR].includes(i.status)
							}),
							o = { debugger: !0, start: d, back: d, goto: !0, next: s, end: s }
						this.channel.emit(T.SYNC, { controlStates: o, logItems: v })
					}, 'sync'),
				},
			]),
			e
		)
	})()
function jt(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
	try {
		var r,
			n,
			u,
			s,
			v = !1,
			y = !1
		if (
			(((r = b.window.location) === null || r === void 0 || (n = r.search) === null || n === void 0
				? void 0
				: n.indexOf('instrument=true')) !== -1
				? (v = !0)
				: ((u = b.window.location) === null ||
				  u === void 0 ||
				  (s = u.search) === null ||
				  s === void 0
						? void 0
						: s.indexOf('instrument=false')) !== -1 && (y = !0),
			(b.window.parent === b.window && !v) || y)
		)
			return e
		b.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ ||
			(b.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new At())
		var d = b.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__
		return d.instrument(e, t)
	} catch (o) {
		return Z.warn(o), e
	}
}
l(jt, 'instrument')
export { jt as i }
//# sourceMappingURL=instrumenter.593b6c46.js.map
