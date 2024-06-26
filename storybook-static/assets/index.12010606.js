var S = Object.defineProperty
var v = (e, o) => S(e, 'name', { value: o, configurable: !0 })
var M = { exports: {} },
	t = {}
/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var d = 60103,
	m = 60106,
	c = 60107,
	i = 60108,
	u = 60114,
	f = 60109,
	s = 60110,
	p = 60112,
	l = 60113,
	$ = 60120,
	y = 60115,
	a = 60116,
	b = 60121,
	C = 60122,
	_ = 60117,
	g = 60129,
	w = 60131
if (typeof Symbol == 'function' && Symbol.for) {
	var r = Symbol.for
	;(d = r('react.element')),
		(m = r('react.portal')),
		(c = r('react.fragment')),
		(i = r('react.strict_mode')),
		(u = r('react.profiler')),
		(f = r('react.provider')),
		(s = r('react.context')),
		(p = r('react.forward_ref')),
		(l = r('react.suspense')),
		($ = r('react.suspense_list')),
		(y = r('react.memo')),
		(a = r('react.lazy')),
		(b = r('react.block')),
		(C = r('react.server.block')),
		(_ = r('react.fundamental')),
		(g = r('react.debug_trace_mode')),
		(w = r('react.legacy_hidden'))
}
function n(e) {
	if (typeof e == 'object' && e !== null) {
		var o = e.$$typeof
		switch (o) {
			case d:
				switch (((e = e.type), e)) {
					case c:
					case u:
					case i:
					case l:
					case $:
						return e
					default:
						switch (((e = e && e.$$typeof), e)) {
							case s:
							case p:
							case a:
							case y:
							case f:
								return e
							default:
								return o
						}
				}
			case m:
				return o
		}
	}
}
v(n, 'y')
var P = f,
	h = d,
	F = p,
	z = c,
	E = a,
	j = y,
	k = m,
	I = u,
	A = i,
	L = l
t.ContextConsumer = s
t.ContextProvider = P
t.Element = h
t.ForwardRef = F
t.Fragment = z
t.Lazy = E
t.Memo = j
t.Portal = k
t.Profiler = I
t.StrictMode = A
t.Suspense = L
t.isAsyncMode = function () {
	return !1
}
t.isConcurrentMode = function () {
	return !1
}
t.isContextConsumer = function (e) {
	return n(e) === s
}
t.isContextProvider = function (e) {
	return n(e) === f
}
t.isElement = function (e) {
	return typeof e == 'object' && e !== null && e.$$typeof === d
}
t.isForwardRef = function (e) {
	return n(e) === p
}
t.isFragment = function (e) {
	return n(e) === c
}
t.isLazy = function (e) {
	return n(e) === a
}
t.isMemo = function (e) {
	return n(e) === y
}
t.isPortal = function (e) {
	return n(e) === m
}
t.isProfiler = function (e) {
	return n(e) === u
}
t.isStrictMode = function (e) {
	return n(e) === i
}
t.isSuspense = function (e) {
	return n(e) === l
}
t.isValidElementType = function (e) {
	return (
		typeof e == 'string' ||
		typeof e == 'function' ||
		e === c ||
		e === u ||
		e === g ||
		e === i ||
		e === l ||
		e === $ ||
		e === w ||
		(typeof e == 'object' &&
			e !== null &&
			(e.$$typeof === a ||
				e.$$typeof === y ||
				e.$$typeof === f ||
				e.$$typeof === s ||
				e.$$typeof === p ||
				e.$$typeof === _ ||
				e.$$typeof === b ||
				e[0] === C))
	)
}
t.typeOf = n
;(function (e) {
	e.exports = t
})(M)
export { M as r }
//# sourceMappingURL=index.12010606.js.map
