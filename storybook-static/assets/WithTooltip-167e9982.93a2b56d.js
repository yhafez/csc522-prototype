var It = Object.defineProperty
var s = (t, e) => It(t, 'name', { value: e, configurable: !0 })
import { ai as Yt } from './iframe.734f45ba.js'
import './es.map.constructor.86a6c0ec.js'
import {
	W as Ee,
	a9 as pe,
	aa as fe,
	V as Xt,
	Y as We,
	$ as zt,
	ab as X,
	ac as qt,
	ad as mt,
	ae as Re,
	af as gt,
	ag as D,
	ah as H,
	ai as U,
	aj as V,
	ak as De,
	al as ue,
	am as et,
	an as Ue,
	ao as Gt,
	ap as yt,
	aq as Jt,
} from './Props.13743566.js'
import './es.regexp.flags.cd986f0c.js'
import { r as C, R as $, j as tt } from './jsx-runtime.adda36d4.js'
import { r as Kt } from './index.844ce7d5.js'
import './string.cf618ebb.js'
import './es.number.to-fixed.54b1ee4f.js'
var rt, ot
function Qt(t, e) {
	return tr(t) || er(t, e) || _t(t, e) || Zt()
}
s(Qt, '_slicedToArray')
function Zt() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
s(Zt, '_nonIterableRest')
function _t(t, e) {
	if (!!t) {
		if (typeof t == 'string') return nt(t, e)
		var o = Object.prototype.toString.call(t).slice(8, -1)
		if ((o === 'Object' && t.constructor && (o = t.constructor.name), o === 'Map' || o === 'Set'))
			return Array.from(t)
		if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)) return nt(t, e)
	}
}
s(_t, '_unsupportedIterableToArray')
function nt(t, e) {
	;(e == null || e > t.length) && (e = t.length)
	for (var o = 0, r = new Array(e); o < e; o++) r[o] = t[o]
	return r
}
s(nt, '_arrayLikeToArray')
function er(t, e) {
	var o = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator']
	if (o != null) {
		var r = [],
			n = !0,
			i = !1,
			l,
			a
		try {
			for (
				o = o.call(t);
				!(n = (l = o.next()).done) && (r.push(l.value), !(e && r.length === e));
				n = !0
			);
		} catch (c) {
			;(i = !0), (a = c)
		} finally {
			try {
				!n && o.return != null && o.return()
			} finally {
				if (i) throw a
			}
		}
		return r
	}
}
s(er, '_iterableToArrayLimit')
function tr(t) {
	if (Array.isArray(t)) return t
}
s(tr, '_arrayWithHoles')
function wt(t, e) {
	return (
		e || (e = t.slice(0)),
		Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } }))
	)
}
s(wt, '_taggedTemplateLiteral')
function Ce(t) {
	return (
		(Ce =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (e) {
						return typeof e
				  }
				: function (e) {
						return e &&
							typeof Symbol == 'function' &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? 'symbol'
							: typeof e
				  }),
		Ce(t)
	)
}
s(Ce, '_typeof')
function Y(t) {
	return t ? (t.nodeName || '').toLowerCase() : null
}
s(Y, 'getNodeName')
function F(t) {
	if (t == null) return window
	if (t.toString() !== '[object Window]') {
		var e = t.ownerDocument
		return (e && e.defaultView) || window
	}
	return t
}
s(F, 'getWindow')
function ne(t) {
	var e = F(t).Element
	return t instanceof e || t instanceof Element
}
s(ne, 'isElement')
function W(t) {
	var e = F(t).HTMLElement
	return t instanceof e || t instanceof HTMLElement
}
s(W, 'isHTMLElement')
function bt(t) {
	if (typeof ShadowRoot > 'u') return !1
	var e = F(t).ShadowRoot
	return t instanceof e || t instanceof ShadowRoot
}
s(bt, 'isShadowRoot')
function rr(t) {
	var e = t.state
	Object.keys(e.elements).forEach(function (o) {
		var r = e.styles[o] || {},
			n = e.attributes[o] || {},
			i = e.elements[o]
		!W(i) ||
			!Y(i) ||
			(Object.assign(i.style, r),
			Object.keys(n).forEach(function (l) {
				var a = n[l]
				a === !1 ? i.removeAttribute(l) : i.setAttribute(l, a === !0 ? '' : a)
			}))
	})
}
s(rr, 'applyStyles')
function or(t) {
	var e = t.state,
		o = {
			popper: { position: e.options.strategy, left: '0', top: '0', margin: '0' },
			arrow: { position: 'absolute' },
			reference: {},
		}
	return (
		Object.assign(e.elements.popper.style, o.popper),
		(e.styles = o),
		e.elements.arrow && Object.assign(e.elements.arrow.style, o.arrow),
		function () {
			Object.keys(e.elements).forEach(function (r) {
				var n = e.elements[r],
					i = e.attributes[r] || {},
					l = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : o[r]),
					a = l.reduce(function (c, p) {
						return (c[p] = ''), c
					}, {})
				!W(n) ||
					!Y(n) ||
					(Object.assign(n.style, a),
					Object.keys(i).forEach(function (c) {
						n.removeAttribute(c)
					}))
			})
		}
	)
}
s(or, 'effect$2')
var nr = {
	name: 'applyStyles',
	enabled: !0,
	phase: 'write',
	fn: rr,
	effect: or,
	requires: ['computeStyles'],
}
function I(t) {
	return t.split('-')[0]
}
s(I, 'getBasePlacement')
var te = Math.max,
	Pe = Math.min,
	ie = Math.round
function ae(t, e) {
	e === void 0 && (e = !1)
	var o = t.getBoundingClientRect(),
		r = 1,
		n = 1
	if (W(t) && e) {
		var i = t.offsetHeight,
			l = t.offsetWidth
		l > 0 && (r = ie(o.width) / l || 1), i > 0 && (n = ie(o.height) / i || 1)
	}
	return {
		width: o.width / r,
		height: o.height / n,
		top: o.top / n,
		right: o.right / r,
		bottom: o.bottom / n,
		left: o.left / r,
		x: o.left / r,
		y: o.top / n,
	}
}
s(ae, 'getBoundingClientRect')
function Ve(t) {
	var e = ae(t),
		o = t.offsetWidth,
		r = t.offsetHeight
	return (
		Math.abs(e.width - o) <= 1 && (o = e.width),
		Math.abs(e.height - r) <= 1 && (r = e.height),
		{ x: t.offsetLeft, y: t.offsetTop, width: o, height: r }
	)
}
s(Ve, 'getLayoutRect')
function Ot(t, e) {
	var o = e.getRootNode && e.getRootNode()
	if (t.contains(e)) return !0
	if (o && bt(o)) {
		var r = e
		do {
			if (r && t.isSameNode(r)) return !0
			r = r.parentNode || r.host
		} while (r)
	}
	return !1
}
s(Ot, 'contains')
function z(t) {
	return F(t).getComputedStyle(t)
}
s(z, 'getComputedStyle')
function ir(t) {
	return ['table', 'td', 'th'].indexOf(Y(t)) >= 0
}
s(ir, 'isTableElement')
function Q(t) {
	return ((ne(t) ? t.ownerDocument : t.document) || window.document).documentElement
}
s(Q, 'getDocumentElement')
function Se(t) {
	return Y(t) === 'html' ? t : t.assignedSlot || t.parentNode || (bt(t) ? t.host : null) || Q(t)
}
s(Se, 'getParentNode')
function it(t) {
	return !W(t) || z(t).position === 'fixed' ? null : t.offsetParent
}
s(it, 'getTrueOffsetParent')
function ar(t) {
	var e = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1,
		o = navigator.userAgent.indexOf('Trident') !== -1
	if (o && W(t)) {
		var r = z(t)
		if (r.position === 'fixed') return null
	}
	for (var n = Se(t); W(n) && ['html', 'body'].indexOf(Y(n)) < 0; ) {
		var i = z(n)
		if (
			i.transform !== 'none' ||
			i.perspective !== 'none' ||
			i.contain === 'paint' ||
			['transform', 'perspective'].indexOf(i.willChange) !== -1 ||
			(e && i.willChange === 'filter') ||
			(e && i.filter && i.filter !== 'none')
		)
			return n
		n = n.parentNode
	}
	return null
}
s(ar, 'getContainingBlock')
function me(t) {
	for (var e = F(t), o = it(t); o && ir(o) && z(o).position === 'static'; ) o = it(o)
	return o && (Y(o) === 'html' || (Y(o) === 'body' && z(o).position === 'static'))
		? e
		: o || ar(t) || e
}
s(me, 'getOffsetParent')
function Fe(t) {
	return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y'
}
s(Fe, 'getMainAxisFromPlacement')
function de(t, e, o) {
	return te(t, Pe(e, o))
}
s(de, 'within')
function sr(t, e, o) {
	var r = de(t, e, o)
	return r > o ? o : r
}
s(sr, 'withinMaxClamp')
function xt() {
	return { top: 0, right: 0, bottom: 0, left: 0 }
}
s(xt, 'getFreshSideObject')
function Tt(t) {
	return Object.assign({}, xt(), t)
}
s(Tt, 'mergePaddingObject')
function Rt(t, e) {
	return e.reduce(function (o, r) {
		return (o[r] = t), o
	}, {})
}
s(Rt, 'expandToHashMap')
var lr = s(function (e, o) {
	return (
		(e = typeof e == 'function' ? e(Object.assign({}, o.rects, { placement: o.placement })) : e),
		Tt(typeof e != 'number' ? e : Rt(e, Ue))
	)
}, 'toPaddingObject')
function cr(t) {
	var e,
		o = t.state,
		r = t.name,
		n = t.options,
		i = o.elements.arrow,
		l = o.modifiersData.popperOffsets,
		a = I(o.placement),
		c = Fe(a),
		p = [H, V].indexOf(a) >= 0,
		u = p ? 'height' : 'width'
	if (!(!i || !l)) {
		var v = lr(n.padding, o),
			y = Ve(i),
			f = c === 'y' ? D : H,
			h = c === 'y' ? U : V,
			m = o.rects.reference[u] + o.rects.reference[c] - l[c] - o.rects.popper[u],
			g = l[c] - o.rects.reference[c],
			x = me(i),
			R = x ? (c === 'y' ? x.clientHeight || 0 : x.clientWidth || 0) : 0,
			w = m / 2 - g / 2,
			d = v[f],
			b = R - y[u] - v[h],
			O = R / 2 - y[u] / 2 + w,
			T = de(d, O, b),
			P = c
		o.modifiersData[r] = ((e = {}), (e[P] = T), (e.centerOffset = T - O), e)
	}
}
s(cr, 'arrow')
function ur(t) {
	var e = t.state,
		o = t.options,
		r = o.element,
		n = r === void 0 ? '[data-popper-arrow]' : r
	n != null &&
		((typeof n == 'string' && ((n = e.elements.popper.querySelector(n)), !n)) ||
			!Ot(e.elements.popper, n) ||
			(e.elements.arrow = n))
}
s(ur, 'effect$1')
var pr = {
	name: 'arrow',
	enabled: !0,
	phase: 'main',
	fn: cr,
	effect: ur,
	requires: ['popperOffsets'],
	requiresIfExists: ['preventOverflow'],
}
function se(t) {
	return t.split('-')[1]
}
s(se, 'getVariation')
var fr = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' }
function dr(t) {
	var e = t.x,
		o = t.y,
		r = window,
		n = r.devicePixelRatio || 1
	return { x: ie(e * n) / n || 0, y: ie(o * n) / n || 0 }
}
s(dr, 'roundOffsetsByDPR')
function at(t) {
	var e,
		o = t.popper,
		r = t.popperRect,
		n = t.placement,
		i = t.variation,
		l = t.offsets,
		a = t.position,
		c = t.gpuAcceleration,
		p = t.adaptive,
		u = t.roundOffsets,
		v = t.isFixed,
		y = l.x,
		f = y === void 0 ? 0 : y,
		h = l.y,
		m = h === void 0 ? 0 : h,
		g = typeof u == 'function' ? u({ x: f, y: m }) : { x: f, y: m }
	;(f = g.x), (m = g.y)
	var x = l.hasOwnProperty('x'),
		R = l.hasOwnProperty('y'),
		w = H,
		d = D,
		b = window
	if (p) {
		var O = me(o),
			T = 'clientHeight',
			P = 'clientWidth'
		if (
			(O === F(o) &&
				((O = Q(o)),
				z(O).position !== 'static' &&
					a === 'absolute' &&
					((T = 'scrollHeight'), (P = 'scrollWidth'))),
			(O = O),
			n === D || ((n === H || n === V) && i === De))
		) {
			d = U
			var A = v && b.visualViewport ? b.visualViewport.height : O[T]
			;(m -= A - r.height), (m *= c ? 1 : -1)
		}
		if (n === H || ((n === D || n === U) && i === De)) {
			w = V
			var S = v && b.visualViewport ? b.visualViewport.width : O[P]
			;(f -= S - r.width), (f *= c ? 1 : -1)
		}
	}
	var E = Object.assign({ position: a }, p && fr),
		M = u === !0 ? dr({ x: f, y: m }) : { x: f, y: m }
	if (((f = M.x), (m = M.y), c)) {
		var k
		return Object.assign(
			{},
			E,
			((k = {}),
			(k[d] = R ? '0' : ''),
			(k[w] = x ? '0' : ''),
			(k.transform =
				(b.devicePixelRatio || 1) <= 1
					? 'translate(' + f + 'px, ' + m + 'px)'
					: 'translate3d(' + f + 'px, ' + m + 'px, 0)'),
			k),
		)
	}
	return Object.assign(
		{},
		E,
		((e = {}), (e[d] = R ? m + 'px' : ''), (e[w] = x ? f + 'px' : ''), (e.transform = ''), e),
	)
}
s(at, 'mapToStyles')
function vr(t) {
	var e = t.state,
		o = t.options,
		r = o.gpuAcceleration,
		n = r === void 0 ? !0 : r,
		i = o.adaptive,
		l = i === void 0 ? !0 : i,
		a = o.roundOffsets,
		c = a === void 0 ? !0 : a,
		p = {
			placement: I(e.placement),
			variation: se(e.placement),
			popper: e.elements.popper,
			popperRect: e.rects.popper,
			gpuAcceleration: n,
			isFixed: e.options.strategy === 'fixed',
		}
	e.modifiersData.popperOffsets != null &&
		(e.styles.popper = Object.assign(
			{},
			e.styles.popper,
			at(
				Object.assign({}, p, {
					offsets: e.modifiersData.popperOffsets,
					position: e.options.strategy,
					adaptive: l,
					roundOffsets: c,
				}),
			),
		)),
		e.modifiersData.arrow != null &&
			(e.styles.arrow = Object.assign(
				{},
				e.styles.arrow,
				at(
					Object.assign({}, p, {
						offsets: e.modifiersData.arrow,
						position: 'absolute',
						adaptive: !1,
						roundOffsets: c,
					}),
				),
			)),
		(e.attributes.popper = Object.assign({}, e.attributes.popper, {
			'data-popper-placement': e.placement,
		}))
}
s(vr, 'computeStyles')
var hr = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: vr, data: {} },
	Oe = { passive: !0 }
function mr(t) {
	var e = t.state,
		o = t.instance,
		r = t.options,
		n = r.scroll,
		i = n === void 0 ? !0 : n,
		l = r.resize,
		a = l === void 0 ? !0 : l,
		c = F(e.elements.popper),
		p = [].concat(e.scrollParents.reference, e.scrollParents.popper)
	return (
		i &&
			p.forEach(function (u) {
				u.addEventListener('scroll', o.update, Oe)
			}),
		a && c.addEventListener('resize', o.update, Oe),
		function () {
			i &&
				p.forEach(function (u) {
					u.removeEventListener('scroll', o.update, Oe)
				}),
				a && c.removeEventListener('resize', o.update, Oe)
		}
	)
}
s(mr, 'effect')
var gr = {
		name: 'eventListeners',
		enabled: !0,
		phase: 'write',
		fn: s(function () {}, 'fn'),
		effect: mr,
		data: {},
	},
	yr = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function xe(t) {
	return t.replace(/left|right|bottom|top/g, function (e) {
		return yr[e]
	})
}
s(xe, 'getOppositePlacement')
var wr = { start: 'end', end: 'start' }
function st(t) {
	return t.replace(/start|end/g, function (e) {
		return wr[e]
	})
}
s(st, 'getOppositeVariationPlacement')
function Ne(t) {
	var e = F(t),
		o = e.pageXOffset,
		r = e.pageYOffset
	return { scrollLeft: o, scrollTop: r }
}
s(Ne, 'getWindowScroll')
function Ie(t) {
	return ae(Q(t)).left + Ne(t).scrollLeft
}
s(Ie, 'getWindowScrollBarX')
function br(t) {
	var e = F(t),
		o = Q(t),
		r = e.visualViewport,
		n = o.clientWidth,
		i = o.clientHeight,
		l = 0,
		a = 0
	return (
		r &&
			((n = r.width),
			(i = r.height),
			/^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
				((l = r.offsetLeft), (a = r.offsetTop))),
		{ width: n, height: i, x: l + Ie(t), y: a }
	)
}
s(br, 'getViewportRect')
function Or(t) {
	var e,
		o = Q(t),
		r = Ne(t),
		n = (e = t.ownerDocument) == null ? void 0 : e.body,
		i = te(o.scrollWidth, o.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
		l = te(o.scrollHeight, o.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
		a = -r.scrollLeft + Ie(t),
		c = -r.scrollTop
	return (
		z(n || o).direction === 'rtl' && (a += te(o.clientWidth, n ? n.clientWidth : 0) - i),
		{ width: i, height: l, x: a, y: c }
	)
}
s(Or, 'getDocumentRect')
function Ye(t) {
	var e = z(t),
		o = e.overflow,
		r = e.overflowX,
		n = e.overflowY
	return /auto|scroll|overlay|hidden/.test(o + n + r)
}
s(Ye, 'isScrollParent')
function Ct(t) {
	return ['html', 'body', '#document'].indexOf(Y(t)) >= 0
		? t.ownerDocument.body
		: W(t) && Ye(t)
		  ? t
		  : Ct(Se(t))
}
s(Ct, 'getScrollParent')
function ve(t, e) {
	var o
	e === void 0 && (e = [])
	var r = Ct(t),
		n = r === ((o = t.ownerDocument) == null ? void 0 : o.body),
		i = F(r),
		l = n ? [i].concat(i.visualViewport || [], Ye(r) ? r : []) : r,
		a = e.concat(l)
	return n ? a : a.concat(ve(Se(l)))
}
s(ve, 'listScrollParents')
function He(t) {
	return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height })
}
s(He, 'rectToClientRect')
function xr(t) {
	var e = ae(t)
	return (
		(e.top = e.top + t.clientTop),
		(e.left = e.left + t.clientLeft),
		(e.bottom = e.top + t.clientHeight),
		(e.right = e.left + t.clientWidth),
		(e.width = t.clientWidth),
		(e.height = t.clientHeight),
		(e.x = e.left),
		(e.y = e.top),
		e
	)
}
s(xr, 'getInnerBoundingClientRect')
function lt(t, e) {
	return e === yt ? He(br(t)) : ne(e) ? xr(e) : He(Or(Q(t)))
}
s(lt, 'getClientRectFromMixedType')
function Tr(t) {
	var e = ve(Se(t)),
		o = ['absolute', 'fixed'].indexOf(z(t).position) >= 0,
		r = o && W(t) ? me(t) : t
	return ne(r)
		? e.filter(function (n) {
				return ne(n) && Ot(n, r) && Y(n) !== 'body'
		  })
		: []
}
s(Tr, 'getClippingParents')
function Rr(t, e, o) {
	var r = e === 'clippingParents' ? Tr(t) : [].concat(e),
		n = [].concat(r, [o]),
		i = n[0],
		l = n.reduce(
			function (a, c) {
				var p = lt(t, c)
				return (
					(a.top = te(p.top, a.top)),
					(a.right = Pe(p.right, a.right)),
					(a.bottom = Pe(p.bottom, a.bottom)),
					(a.left = te(p.left, a.left)),
					a
				)
			},
			lt(t, i),
		)
	return (
		(l.width = l.right - l.left), (l.height = l.bottom - l.top), (l.x = l.left), (l.y = l.top), l
	)
}
s(Rr, 'getClippingRect')
function Pt(t) {
	var e = t.reference,
		o = t.element,
		r = t.placement,
		n = r ? I(r) : null,
		i = r ? se(r) : null,
		l = e.x + e.width / 2 - o.width / 2,
		a = e.y + e.height / 2 - o.height / 2,
		c
	switch (n) {
		case D:
			c = { x: l, y: e.y - o.height }
			break
		case U:
			c = { x: l, y: e.y + e.height }
			break
		case V:
			c = { x: e.x + e.width, y: a }
			break
		case H:
			c = { x: e.x - o.width, y: a }
			break
		default:
			c = { x: e.x, y: e.y }
	}
	var p = n ? Fe(n) : null
	if (p != null) {
		var u = p === 'y' ? 'height' : 'width'
		switch (i) {
			case Re:
				c[p] = c[p] - (e[u] / 2 - o[u] / 2)
				break
			case De:
				c[p] = c[p] + (e[u] / 2 - o[u] / 2)
				break
		}
	}
	return c
}
s(Pt, 'computeOffsets')
function he(t, e) {
	e === void 0 && (e = {})
	var o = e,
		r = o.placement,
		n = r === void 0 ? t.placement : r,
		i = o.boundary,
		l = i === void 0 ? Jt : i,
		a = o.rootBoundary,
		c = a === void 0 ? yt : a,
		p = o.elementContext,
		u = p === void 0 ? ue : p,
		v = o.altBoundary,
		y = v === void 0 ? !1 : v,
		f = o.padding,
		h = f === void 0 ? 0 : f,
		m = Tt(typeof h != 'number' ? h : Rt(h, Ue)),
		g = u === ue ? Gt : ue,
		x = t.rects.popper,
		R = t.elements[y ? g : u],
		w = Rr(ne(R) ? R : R.contextElement || Q(t.elements.popper), l, c),
		d = ae(t.elements.reference),
		b = Pt({ reference: d, element: x, strategy: 'absolute', placement: n }),
		O = He(Object.assign({}, x, b)),
		T = u === ue ? O : d,
		P = {
			top: w.top - T.top + m.top,
			bottom: T.bottom - w.bottom + m.bottom,
			left: w.left - T.left + m.left,
			right: T.right - w.right + m.right,
		},
		A = t.modifiersData.offset
	if (u === ue && A) {
		var S = A[n]
		Object.keys(P).forEach(function (E) {
			var M = [V, U].indexOf(E) >= 0 ? 1 : -1,
				k = [D, U].indexOf(E) >= 0 ? 'y' : 'x'
			P[E] += S[k] * M
		})
	}
	return P
}
s(he, 'detectOverflow')
function Cr(t, e) {
	e === void 0 && (e = {})
	var o = e,
		r = o.placement,
		n = o.boundary,
		i = o.rootBoundary,
		l = o.padding,
		a = o.flipVariations,
		c = o.allowedAutoPlacements,
		p = c === void 0 ? gt : c,
		u = se(r),
		v = u
			? a
				? et
				: et.filter(function (h) {
						return se(h) === u
				  })
			: Ue,
		y = v.filter(function (h) {
			return p.indexOf(h) >= 0
		})
	y.length === 0 && (y = v)
	var f = y.reduce(function (h, m) {
		return (h[m] = he(t, { placement: m, boundary: n, rootBoundary: i, padding: l })[I(m)]), h
	}, {})
	return Object.keys(f).sort(function (h, m) {
		return f[h] - f[m]
	})
}
s(Cr, 'computeAutoPlacement')
function Pr(t) {
	if (I(t) === mt) return []
	var e = xe(t)
	return [st(t), e, st(e)]
}
s(Pr, 'getExpandedFallbackPlacements')
function Er(t) {
	var e = t.state,
		o = t.options,
		r = t.name
	if (!e.modifiersData[r]._skip) {
		for (
			var n = o.mainAxis,
				i = n === void 0 ? !0 : n,
				l = o.altAxis,
				a = l === void 0 ? !0 : l,
				c = o.fallbackPlacements,
				p = o.padding,
				u = o.boundary,
				v = o.rootBoundary,
				y = o.altBoundary,
				f = o.flipVariations,
				h = f === void 0 ? !0 : f,
				m = o.allowedAutoPlacements,
				g = e.options.placement,
				x = I(g),
				R = x === g,
				w = c || (R || !h ? [xe(g)] : Pr(g)),
				d = [g].concat(w).reduce(function (oe, J) {
					return oe.concat(
						I(J) === mt
							? Cr(e, {
									placement: J,
									boundary: u,
									rootBoundary: v,
									padding: p,
									flipVariations: h,
									allowedAutoPlacements: m,
							  })
							: J,
					)
				}, []),
				b = e.rects.reference,
				O = e.rects.popper,
				T = new Map(),
				P = !0,
				A = d[0],
				S = 0;
			S < d.length;
			S++
		) {
			var E = d[S],
				M = I(E),
				k = se(E) === Re,
				q = [D, U].indexOf(M) >= 0,
				G = q ? 'width' : 'height',
				B = he(e, { placement: E, boundary: u, rootBoundary: v, altBoundary: y, padding: p }),
				j = q ? (k ? V : H) : k ? U : D
			b[G] > O[G] && (j = xe(j))
			var re = xe(j),
				Z = []
			if (
				(i && Z.push(B[M] <= 0),
				a && Z.push(B[j] <= 0, B[re] <= 0),
				Z.every(function (oe) {
					return oe
				}))
			) {
				;(A = E), (P = !1)
				break
			}
			T.set(E, Z)
		}
		if (P)
			for (
				var ge = h ? 3 : 1,
					Ae = s(function (J) {
						var ce = d.find(function (we) {
							var _ = T.get(we)
							if (_)
								return _.slice(0, J).every(function (ke) {
									return ke
								})
						})
						if (ce) return (A = ce), 'break'
					}, '_loop'),
					le = ge;
				le > 0;
				le--
			) {
				var ye = Ae(le)
				if (ye === 'break') break
			}
		e.placement !== A && ((e.modifiersData[r]._skip = !0), (e.placement = A), (e.reset = !0))
	}
}
s(Er, 'flip')
var Sr = {
	name: 'flip',
	enabled: !0,
	phase: 'main',
	fn: Er,
	requiresIfExists: ['offset'],
	data: { _skip: !1 },
}
function ct(t, e, o) {
	return (
		o === void 0 && (o = { x: 0, y: 0 }),
		{
			top: t.top - e.height - o.y,
			right: t.right - e.width + o.x,
			bottom: t.bottom - e.height + o.y,
			left: t.left - e.width - o.x,
		}
	)
}
s(ct, 'getSideOffsets')
function ut(t) {
	return [D, V, U, H].some(function (e) {
		return t[e] >= 0
	})
}
s(ut, 'isAnySideFullyClipped')
function Ar(t) {
	var e = t.state,
		o = t.name,
		r = e.rects.reference,
		n = e.rects.popper,
		i = e.modifiersData.preventOverflow,
		l = he(e, { elementContext: 'reference' }),
		a = he(e, { altBoundary: !0 }),
		c = ct(l, r),
		p = ct(a, n, i),
		u = ut(c),
		v = ut(p)
	;(e.modifiersData[o] = {
		referenceClippingOffsets: c,
		popperEscapeOffsets: p,
		isReferenceHidden: u,
		hasPopperEscaped: v,
	}),
		(e.attributes.popper = Object.assign({}, e.attributes.popper, {
			'data-popper-reference-hidden': u,
			'data-popper-escaped': v,
		}))
}
s(Ar, 'hide')
var kr = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: Ar }
function Br(t, e, o) {
	var r = I(t),
		n = [H, D].indexOf(r) >= 0 ? -1 : 1,
		i = typeof o == 'function' ? o(Object.assign({}, e, { placement: t })) : o,
		l = i[0],
		a = i[1]
	return (l = l || 0), (a = (a || 0) * n), [H, V].indexOf(r) >= 0 ? { x: a, y: l } : { x: l, y: a }
}
s(Br, 'distanceAndSkiddingToXY')
function Mr(t) {
	var e = t.state,
		o = t.options,
		r = t.name,
		n = o.offset,
		i = n === void 0 ? [0, 0] : n,
		l = gt.reduce(function (u, v) {
			return (u[v] = Br(v, e.rects, i)), u
		}, {}),
		a = l[e.placement],
		c = a.x,
		p = a.y
	e.modifiersData.popperOffsets != null &&
		((e.modifiersData.popperOffsets.x += c), (e.modifiersData.popperOffsets.y += p)),
		(e.modifiersData[r] = l)
}
s(Mr, 'offset')
var jr = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: Mr }
function Dr(t) {
	var e = t.state,
		o = t.name
	e.modifiersData[o] = Pt({
		reference: e.rects.reference,
		element: e.rects.popper,
		strategy: 'absolute',
		placement: e.placement,
	})
}
s(Dr, 'popperOffsets')
var Hr = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: Dr, data: {} }
function Lr(t) {
	return t === 'x' ? 'y' : 'x'
}
s(Lr, 'getAltAxis')
function $r(t) {
	var e = t.state,
		o = t.options,
		r = t.name,
		n = o.mainAxis,
		i = n === void 0 ? !0 : n,
		l = o.altAxis,
		a = l === void 0 ? !1 : l,
		c = o.boundary,
		p = o.rootBoundary,
		u = o.altBoundary,
		v = o.padding,
		y = o.tether,
		f = y === void 0 ? !0 : y,
		h = o.tetherOffset,
		m = h === void 0 ? 0 : h,
		g = he(e, { boundary: c, rootBoundary: p, padding: v, altBoundary: u }),
		x = I(e.placement),
		R = se(e.placement),
		w = !R,
		d = Fe(x),
		b = Lr(d),
		O = e.modifiersData.popperOffsets,
		T = e.rects.reference,
		P = e.rects.popper,
		A = typeof m == 'function' ? m(Object.assign({}, e.rects, { placement: e.placement })) : m,
		S =
			typeof A == 'number'
				? { mainAxis: A, altAxis: A }
				: Object.assign({ mainAxis: 0, altAxis: 0 }, A),
		E = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
		M = { x: 0, y: 0 }
	if (!!O) {
		if (i) {
			var k,
				q = d === 'y' ? D : H,
				G = d === 'y' ? U : V,
				B = d === 'y' ? 'height' : 'width',
				j = O[d],
				re = j + g[q],
				Z = j - g[G],
				ge = f ? -P[B] / 2 : 0,
				Ae = R === Re ? T[B] : P[B],
				le = R === Re ? -P[B] : -T[B],
				ye = e.elements.arrow,
				oe = f && ye ? Ve(ye) : { width: 0, height: 0 },
				J = e.modifiersData['arrow#persistent']
					? e.modifiersData['arrow#persistent'].padding
					: xt(),
				ce = J[q],
				we = J[G],
				_ = de(0, T[B], oe[B]),
				ke = w ? T[B] / 2 - ge - _ - ce - S.mainAxis : Ae - _ - ce - S.mainAxis,
				$t = w ? -T[B] / 2 + ge + _ + we + S.mainAxis : le + _ + we + S.mainAxis,
				Be = e.elements.arrow && me(e.elements.arrow),
				Wt = Be ? (d === 'y' ? Be.clientTop || 0 : Be.clientLeft || 0) : 0,
				Xe = (k = E == null ? void 0 : E[d]) != null ? k : 0,
				Ut = j + ke - Xe - Wt,
				Vt = j + $t - Xe,
				ze = de(f ? Pe(re, Ut) : re, j, f ? te(Z, Vt) : Z)
			;(O[d] = ze), (M[d] = ze - j)
		}
		if (a) {
			var qe,
				Ft = d === 'x' ? D : H,
				Nt = d === 'x' ? U : V,
				ee = O[b],
				be = b === 'y' ? 'height' : 'width',
				Ge = ee + g[Ft],
				Je = ee - g[Nt],
				Me = [D, H].indexOf(x) !== -1,
				Ke = (qe = E == null ? void 0 : E[b]) != null ? qe : 0,
				Qe = Me ? Ge : ee - T[be] - P[be] - Ke + S.altAxis,
				Ze = Me ? ee + T[be] + P[be] - Ke - S.altAxis : Je,
				_e = f && Me ? sr(Qe, ee, Ze) : de(f ? Qe : Ge, ee, f ? Ze : Je)
			;(O[b] = _e), (M[b] = _e - ee)
		}
		e.modifiersData[r] = M
	}
}
s($r, 'preventOverflow')
var Wr = {
	name: 'preventOverflow',
	enabled: !0,
	phase: 'main',
	fn: $r,
	requiresIfExists: ['offset'],
}
function Ur(t) {
	return { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
}
s(Ur, 'getHTMLElementScroll')
function Vr(t) {
	return t === F(t) || !W(t) ? Ne(t) : Ur(t)
}
s(Vr, 'getNodeScroll')
function Fr(t) {
	var e = t.getBoundingClientRect(),
		o = ie(e.width) / t.offsetWidth || 1,
		r = ie(e.height) / t.offsetHeight || 1
	return o !== 1 || r !== 1
}
s(Fr, 'isElementScaled')
function Nr(t, e, o) {
	o === void 0 && (o = !1)
	var r = W(e),
		n = W(e) && Fr(e),
		i = Q(e),
		l = ae(t, n),
		a = { scrollLeft: 0, scrollTop: 0 },
		c = { x: 0, y: 0 }
	return (
		(r || (!r && !o)) &&
			((Y(e) !== 'body' || Ye(i)) && (a = Vr(e)),
			W(e) ? ((c = ae(e, !0)), (c.x += e.clientLeft), (c.y += e.clientTop)) : i && (c.x = Ie(i))),
		{
			x: l.left + a.scrollLeft - c.x,
			y: l.top + a.scrollTop - c.y,
			width: l.width,
			height: l.height,
		}
	)
}
s(Nr, 'getCompositeRect')
function Ir(t) {
	var e = new Map(),
		o = new Set(),
		r = []
	t.forEach(function (i) {
		e.set(i.name, i)
	})
	function n(i) {
		o.add(i.name)
		var l = [].concat(i.requires || [], i.requiresIfExists || [])
		l.forEach(function (a) {
			if (!o.has(a)) {
				var c = e.get(a)
				c && n(c)
			}
		}),
			r.push(i)
	}
	return (
		s(n, 'sort'),
		t.forEach(function (i) {
			o.has(i.name) || n(i)
		}),
		r
	)
}
s(Ir, 'order')
function Yr(t) {
	var e = Ir(t)
	return qt.reduce(function (o, r) {
		return o.concat(
			e.filter(function (n) {
				return n.phase === r
			}),
		)
	}, [])
}
s(Yr, 'orderModifiers')
function Xr(t) {
	var e
	return function () {
		return (
			e ||
				(e = new Promise(function (o) {
					Promise.resolve().then(function () {
						;(e = void 0), o(t())
					})
				})),
			e
		)
	}
}
s(Xr, 'debounce')
function zr(t) {
	var e = t.reduce(function (o, r) {
		var n = o[r.name]
		return (
			(o[r.name] = n
				? Object.assign({}, n, r, {
						options: Object.assign({}, n.options, r.options),
						data: Object.assign({}, n.data, r.data),
				  })
				: r),
			o
		)
	}, {})
	return Object.keys(e).map(function (o) {
		return e[o]
	})
}
s(zr, 'mergeByName')
var pt = { placement: 'bottom', modifiers: [], strategy: 'absolute' }
function ft() {
	for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) e[o] = arguments[o]
	return !e.some(function (r) {
		return !(r && typeof r.getBoundingClientRect == 'function')
	})
}
s(ft, 'areValidElements')
function qr(t) {
	t === void 0 && (t = {})
	var e = t,
		o = e.defaultModifiers,
		r = o === void 0 ? [] : o,
		n = e.defaultOptions,
		i = n === void 0 ? pt : n
	return s(function (a, c, p) {
		p === void 0 && (p = i)
		var u = {
				placement: 'bottom',
				orderedModifiers: [],
				options: Object.assign({}, pt, i),
				modifiersData: {},
				elements: { reference: a, popper: c },
				attributes: {},
				styles: {},
			},
			v = [],
			y = !1,
			f = {
				state: u,
				setOptions: s(function (x) {
					var R = typeof x == 'function' ? x(u.options) : x
					m(),
						(u.options = Object.assign({}, i, u.options, R)),
						(u.scrollParents = {
							reference: ne(a) ? ve(a) : a.contextElement ? ve(a.contextElement) : [],
							popper: ve(c),
						})
					var w = Yr(zr([].concat(r, u.options.modifiers)))
					return (
						(u.orderedModifiers = w.filter(function (d) {
							return d.enabled
						})),
						h(),
						f.update()
					)
				}, 'setOptions'),
				forceUpdate: s(function () {
					if (!y) {
						var x = u.elements,
							R = x.reference,
							w = x.popper
						if (!!ft(R, w)) {
							;(u.rects = {
								reference: Nr(R, me(w), u.options.strategy === 'fixed'),
								popper: Ve(w),
							}),
								(u.reset = !1),
								(u.placement = u.options.placement),
								u.orderedModifiers.forEach(function (S) {
									return (u.modifiersData[S.name] = Object.assign({}, S.data))
								})
							for (var d = 0; d < u.orderedModifiers.length; d++) {
								if (u.reset === !0) {
									;(u.reset = !1), (d = -1)
									continue
								}
								var b = u.orderedModifiers[d],
									O = b.fn,
									T = b.options,
									P = T === void 0 ? {} : T,
									A = b.name
								typeof O == 'function' &&
									(u = O({ state: u, options: P, name: A, instance: f }) || u)
							}
						}
					}
				}, 'forceUpdate'),
				update: Xr(function () {
					return new Promise(function (g) {
						f.forceUpdate(), g(u)
					})
				}),
				destroy: s(function () {
					m(), (y = !0)
				}, 'destroy'),
			}
		if (!ft(a, c)) return f
		f.setOptions(p).then(function (g) {
			!y && p.onFirstUpdate && p.onFirstUpdate(g)
		})
		function h() {
			u.orderedModifiers.forEach(function (g) {
				var x = g.name,
					R = g.options,
					w = R === void 0 ? {} : R,
					d = g.effect
				if (typeof d == 'function') {
					var b = d({ state: u, name: x, instance: f, options: w }),
						O = s(function () {}, 'noopFn')
					v.push(b || O)
				}
			})
		}
		s(h, 'runModifierEffects')
		function m() {
			v.forEach(function (g) {
				return g()
			}),
				(v = [])
		}
		return s(m, 'cleanupModifierEffects'), f
	}, 'createPopper')
}
s(qr, 'popperGenerator')
var Gr = [gr, Hr, hr, nr, jr, Sr, Wr, pr, kr],
	Jr = qr({ defaultModifiers: Gr })
function Le(t, e) {
	return (
		(Le =
			Object.setPrototypeOf ||
			s(function (r, n) {
				return (r.__proto__ = n), r
			}, '_setPrototypeOf')),
		Le(t, e)
	)
}
s(Le, '_setPrototypeOf')
function Et(t, e) {
	;(t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), Le(t, e)
}
s(Et, '_inheritsLoose')
var St = C.exports.createContext(),
	At = C.exports.createContext()
function Kr(t) {
	var e = t.children,
		o = C.exports.useState(null),
		r = o[0],
		n = o[1],
		i = C.exports.useRef(!1)
	C.exports.useEffect(function () {
		return function () {
			i.current = !0
		}
	}, [])
	var l = C.exports.useCallback(function (a) {
		i.current || n(a)
	}, [])
	return tt(St.Provider, { value: r, children: tt(At.Provider, { value: l, children: e }) })
}
s(Kr, 'Manager')
var kt = s(function (e) {
		return Array.isArray(e) ? e[0] : e
	}, 'unwrapArray'),
	Bt = s(function (e) {
		if (typeof e == 'function') {
			for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++)
				r[n - 1] = arguments[n]
			return e.apply(void 0, r)
		}
	}, 'safeInvoke'),
	$e = s(function (e, o) {
		if (typeof e == 'function') return Bt(e, o)
		e != null && (e.current = o)
	}, 'setRef'),
	dt = s(function (e) {
		return e.reduce(function (o, r) {
			var n = r[0],
				i = r[1]
			return (o[n] = i), o
		}, {})
	}, 'fromEntries'),
	vt =
		typeof window < 'u' && window.document && window.document.createElement
			? C.exports.useLayoutEffect
			: C.exports.useEffect,
	Qr = typeof Element < 'u',
	Zr = typeof Map == 'function',
	_r = typeof Set == 'function',
	eo = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
function Te(t, e) {
	if (t === e) return !0
	if (t && e && Ce(t) == 'object' && Ce(e) == 'object') {
		if (t.constructor !== e.constructor) return !1
		var o, r, n
		if (Array.isArray(t)) {
			if (((o = t.length), o != e.length)) return !1
			for (r = o; r-- !== 0; ) if (!Te(t[r], e[r])) return !1
			return !0
		}
		var i
		if (Zr && t instanceof Map && e instanceof Map) {
			if (t.size !== e.size) return !1
			for (i = t.entries(); !(r = i.next()).done; ) if (!e.has(r.value[0])) return !1
			for (i = t.entries(); !(r = i.next()).done; )
				if (!Te(r.value[1], e.get(r.value[0]))) return !1
			return !0
		}
		if (_r && t instanceof Set && e instanceof Set) {
			if (t.size !== e.size) return !1
			for (i = t.entries(); !(r = i.next()).done; ) if (!e.has(r.value[0])) return !1
			return !0
		}
		if (eo && ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) {
			if (((o = t.length), o != e.length)) return !1
			for (r = o; r-- !== 0; ) if (t[r] !== e[r]) return !1
			return !0
		}
		if (t.constructor === RegExp) return t.source === e.source && t.flags === e.flags
		if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === e.valueOf()
		if (t.toString !== Object.prototype.toString) return t.toString() === e.toString()
		if (((n = Object.keys(t)), (o = n.length), o !== Object.keys(e).length)) return !1
		for (r = o; r-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(e, n[r])) return !1
		if (Qr && t instanceof Element) return !1
		for (r = o; r-- !== 0; )
			if (
				!((n[r] === '_owner' || n[r] === '__v' || n[r] === '__o') && t.$$typeof) &&
				!Te(t[n[r]], e[n[r]])
			)
				return !1
		return !0
	}
	return t !== t && e !== e
}
s(Te, 'equal')
var to = s(function (e, o) {
		try {
			return Te(e, o)
		} catch (r) {
			if ((r.message || '').match(/stack|recursion/i))
				return console.warn('react-fast-compare cannot handle circular refs'), !1
			throw r
		}
	}, 'isEqual'),
	ro = [],
	oo = s(function (e, o, r) {
		r === void 0 && (r = {})
		var n = C.exports.useRef(null),
			i = {
				onFirstUpdate: r.onFirstUpdate,
				placement: r.placement || 'bottom',
				strategy: r.strategy || 'absolute',
				modifiers: r.modifiers || ro,
			},
			l = C.exports.useState({
				styles: {
					popper: { position: i.strategy, left: '0', top: '0' },
					arrow: { position: 'absolute' },
				},
				attributes: {},
			}),
			a = l[0],
			c = l[1],
			p = C.exports.useMemo(function () {
				return {
					name: 'updateState',
					enabled: !0,
					phase: 'write',
					fn: s(function (f) {
						var h = f.state,
							m = Object.keys(h.elements)
						c({
							styles: dt(
								m.map(function (g) {
									return [g, h.styles[g] || {}]
								}),
							),
							attributes: dt(
								m.map(function (g) {
									return [g, h.attributes[g]]
								}),
							),
						})
					}, 'fn'),
					requires: ['computeStyles'],
				}
			}, []),
			u = C.exports.useMemo(
				function () {
					var y = {
						onFirstUpdate: i.onFirstUpdate,
						placement: i.placement,
						strategy: i.strategy,
						modifiers: [].concat(i.modifiers, [p, { name: 'applyStyles', enabled: !1 }]),
					}
					return to(n.current, y) ? n.current || y : ((n.current = y), y)
				},
				[i.onFirstUpdate, i.placement, i.strategy, i.modifiers, p],
			),
			v = C.exports.useRef()
		return (
			vt(
				function () {
					v.current && v.current.setOptions(u)
				},
				[u],
			),
			vt(
				function () {
					if (!(e == null || o == null)) {
						var y = r.createPopper || Jr,
							f = y(e, o, u)
						return (
							(v.current = f),
							function () {
								f.destroy(), (v.current = null)
							}
						)
					}
				},
				[e, o, r.createPopper],
			),
			{
				state: v.current ? v.current.state : null,
				styles: a.styles,
				attributes: a.attributes,
				update: v.current ? v.current.update : null,
				forceUpdate: v.current ? v.current.forceUpdate : null,
			}
		)
	}, 'usePopper'),
	no = s(function () {}, 'NOOP'),
	io = s(function () {
		return Promise.resolve(null)
	}, 'NOOP_PROMISE'),
	ao = []
function so(t) {
	var e = t.placement,
		o = e === void 0 ? 'bottom' : e,
		r = t.strategy,
		n = r === void 0 ? 'absolute' : r,
		i = t.modifiers,
		l = i === void 0 ? ao : i,
		a = t.referenceElement,
		c = t.onFirstUpdate,
		p = t.innerRef,
		u = t.children,
		v = C.exports.useContext(St),
		y = C.exports.useState(null),
		f = y[0],
		h = y[1],
		m = C.exports.useState(null),
		g = m[0],
		x = m[1]
	C.exports.useEffect(
		function () {
			$e(p, f)
		},
		[p, f],
	)
	var R = C.exports.useMemo(
			function () {
				return {
					placement: o,
					strategy: n,
					onFirstUpdate: c,
					modifiers: [].concat(l, [{ name: 'arrow', enabled: g != null, options: { element: g } }]),
				}
			},
			[o, n, c, l, g],
		),
		w = oo(a || v, f, R),
		d = w.state,
		b = w.styles,
		O = w.forceUpdate,
		T = w.update,
		P = C.exports.useMemo(
			function () {
				return {
					ref: h,
					style: b.popper,
					placement: d ? d.placement : o,
					hasPopperEscaped:
						d && d.modifiersData.hide ? d.modifiersData.hide.hasPopperEscaped : null,
					isReferenceHidden:
						d && d.modifiersData.hide ? d.modifiersData.hide.isReferenceHidden : null,
					arrowProps: { style: b.arrow, ref: x },
					forceUpdate: O || no,
					update: T || io,
				}
			},
			[h, x, o, d, b, T, O],
		)
	return kt(u)(P)
}
s(so, 'Popper')
function lo(t) {
	var e = t.children,
		o = t.innerRef,
		r = C.exports.useContext(At),
		n = C.exports.useCallback(
			function (i) {
				$e(o, i), Bt(r, i)
			},
			[o, r],
		)
	return (
		C.exports.useEffect(function () {
			return function () {
				return $e(o, null)
			}
		}),
		C.exports.useEffect(function () {}, [r]),
		kt(e)({ ref: n })
	)
}
s(lo, 'Reference')
var Mt = $.createContext({}),
	N = s(function () {
		for (var e = arguments.length, o = new Array(e), r = 0; r < e; r++) o[r] = arguments[r]
		return function () {
			for (var n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
			return o.forEach(function (a) {
				return a && a.apply(void 0, i)
			})
		}
	}, 'callAll'),
	co = s(function () {}, 'noop'),
	ht = s(function () {
		return !!(typeof window < 'u' && window.document && window.document.createElement)
	}, 'canUseDOM'),
	uo = s(function (e, o) {
		if (typeof e == 'function') return e(o)
		e != null && (e.current = o)
	}, 'setRef'),
	jt = (function (t) {
		Et(e, t)
		function e() {
			for (var r, n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
			return (
				(r = t.call.apply(t, [this].concat(i)) || this),
				(r.observer = void 0),
				(r.tooltipRef = void 0),
				(r.handleOutsideClick = function (a) {
					if (r.tooltipRef && !r.tooltipRef.contains(a.target)) {
						var c = r.context.parentOutsideClickHandler,
							p = r.props,
							u = p.hideTooltip,
							v = p.clearScheduled
						v(), u(), c && c(a)
					}
				}),
				(r.handleOutsideRightClick = function (a) {
					if (r.tooltipRef && !r.tooltipRef.contains(a.target)) {
						var c = r.context.parentOutsideRightClickHandler,
							p = r.props,
							u = p.hideTooltip,
							v = p.clearScheduled
						v(), u(), c && c(a)
					}
				}),
				(r.addOutsideClickHandler = function () {
					document.body.addEventListener('touchend', r.handleOutsideClick),
						document.body.addEventListener('click', r.handleOutsideClick)
				}),
				(r.removeOutsideClickHandler = function () {
					document.body.removeEventListener('touchend', r.handleOutsideClick),
						document.body.removeEventListener('click', r.handleOutsideClick)
				}),
				(r.addOutsideRightClickHandler = function () {
					return document.body.addEventListener('contextmenu', r.handleOutsideRightClick)
				}),
				(r.removeOutsideRightClickHandler = function () {
					return document.body.removeEventListener('contextmenu', r.handleOutsideRightClick)
				}),
				(r.getTooltipRef = function (a) {
					;(r.tooltipRef = a), uo(r.props.innerRef, a)
				}),
				(r.getArrowProps = function (a) {
					return (
						a === void 0 && (a = {}), X({}, a, { style: X({}, a.style, r.props.arrowProps.style) })
					)
				}),
				(r.getTooltipProps = function (a) {
					return (
						a === void 0 && (a = {}),
						X(
							{},
							a,
							r.isTriggeredBy('hover') && {
								onMouseEnter: N(r.props.clearScheduled, a.onMouseEnter),
								onMouseLeave: N(r.props.hideTooltip, a.onMouseLeave),
							},
							{ style: X({}, a.style, r.props.style) },
						)
					)
				}),
				(r.contextValue = {
					isParentNoneTriggered: r.props.trigger === 'none',
					addParentOutsideClickHandler: r.addOutsideClickHandler,
					addParentOutsideRightClickHandler: r.addOutsideRightClickHandler,
					parentOutsideClickHandler: r.handleOutsideClick,
					parentOutsideRightClickHandler: r.handleOutsideRightClick,
					removeParentOutsideClickHandler: r.removeOutsideClickHandler,
					removeParentOutsideRightClickHandler: r.removeOutsideRightClickHandler,
				}),
				r
			)
		}
		s(e, 'Tooltip')
		var o = e.prototype
		return (
			(o.componentDidMount = s(function () {
				var n = this,
					i = (this.observer = new MutationObserver(function () {
						n.props.update()
					}))
				if (
					(i.observe(this.tooltipRef, this.props.mutationObserverOptions),
					this.isTriggeredBy('hover') ||
						this.isTriggeredBy('click') ||
						this.isTriggeredBy('right-click'))
				) {
					var l = this.context,
						a = l.removeParentOutsideClickHandler,
						c = l.removeParentOutsideRightClickHandler
					this.addOutsideClickHandler(), this.addOutsideRightClickHandler(), a && a(), c && c()
				}
			}, 'componentDidMount')),
			(o.componentDidUpdate = s(function () {
				this.props.closeOnReferenceHidden &&
					this.props.isReferenceHidden &&
					this.props.hideTooltip()
			}, 'componentDidUpdate')),
			(o.componentWillUnmount = s(function () {
				if (
					(this.observer && this.observer.disconnect(),
					this.isTriggeredBy('hover') ||
						this.isTriggeredBy('click') ||
						this.isTriggeredBy('right-click'))
				) {
					var n = this.context,
						i = n.isParentNoneTriggered,
						l = n.addParentOutsideClickHandler,
						a = n.addParentOutsideRightClickHandler
					this.removeOutsideClickHandler(),
						this.removeOutsideRightClickHandler(),
						(this.handleOutsideClick = void 0),
						(this.handleOutsideRightClick = void 0),
						!i && l && l(),
						!i && a && a()
				}
			}, 'componentWillUnmount')),
			(o.render = s(function () {
				var n = this.props,
					i = n.arrowProps,
					l = n.placement,
					a = n.tooltip
				return $.createElement(
					Mt.Provider,
					{ value: this.contextValue },
					a({
						arrowRef: i.ref,
						getArrowProps: this.getArrowProps,
						getTooltipProps: this.getTooltipProps,
						placement: l,
						tooltipRef: this.getTooltipRef,
					}),
				)
			}, 'render')),
			(o.isTriggeredBy = s(function (n) {
				var i = this.props.trigger
				return i === n || (Array.isArray(i) && i.includes(n))
			}, 'isTriggeredBy')),
			e
		)
	})(C.exports.Component)
jt.contextType = Mt
var po = { childList: !0, subtree: !0 },
	Dt = (function (t) {
		Et(e, t)
		function e() {
			for (var r, n = arguments.length, i = new Array(n), l = 0; l < n; l++) i[l] = arguments[l]
			return (
				(r = t.call.apply(t, [this].concat(i)) || this),
				(r.state = { tooltipShown: r.props.defaultTooltipShown }),
				(r.hideTimeout = void 0),
				(r.showTimeout = void 0),
				(r.popperOffset = void 0),
				(r.setTooltipState = function (a) {
					var c = s(function () {
						return r.props.onVisibilityChange(a.tooltipShown)
					}, 'cb')
					r.isControlled() ? c() : r.setState(a, c)
				}),
				(r.clearScheduled = function () {
					clearTimeout(r.hideTimeout), clearTimeout(r.showTimeout)
				}),
				(r.showTooltip = function (a) {
					var c = a.pageX,
						p = a.pageY
					r.clearScheduled()
					var u = { tooltipShown: !0 }
					r.props.followCursor && (u = X({}, u, { pageX: c, pageY: p })),
						(r.showTimeout = window.setTimeout(function () {
							return r.setTooltipState(u)
						}, r.props.delayShow))
				}),
				(r.hideTooltip = function () {
					r.clearScheduled(),
						(r.hideTimeout = window.setTimeout(function () {
							return r.setTooltipState({ tooltipShown: !1 })
						}, r.props.delayHide))
				}),
				(r.toggleTooltip = function (a) {
					var c = a.pageX,
						p = a.pageY,
						u = r.getState() ? 'hideTooltip' : 'showTooltip'
					r[u]({ pageX: c, pageY: p })
				}),
				(r.clickToggle = function (a) {
					a.preventDefault()
					var c = a.pageX,
						p = a.pageY,
						u = r.props.followCursor ? 'showTooltip' : 'toggleTooltip'
					r[u]({ pageX: c, pageY: p })
				}),
				(r.contextMenuToggle = function (a) {
					a.preventDefault()
					var c = a.pageX,
						p = a.pageY,
						u = r.props.followCursor ? 'showTooltip' : 'toggleTooltip'
					r[u]({ pageX: c, pageY: p })
				}),
				(r.getTriggerProps = function (a) {
					return (
						a === void 0 && (a = {}),
						X(
							{},
							a,
							r.isTriggeredBy('click') && {
								onClick: N(r.clickToggle, a.onClick),
								onTouchEnd: N(r.clickToggle, a.onTouchEnd),
							},
							r.isTriggeredBy('right-click') && {
								onContextMenu: N(r.contextMenuToggle, a.onContextMenu),
							},
							r.isTriggeredBy('hover') &&
								X(
									{
										onMouseEnter: N(r.showTooltip, a.onMouseEnter),
										onMouseLeave: N(r.hideTooltip, a.onMouseLeave),
									},
									r.props.followCursor && { onMouseMove: N(r.showTooltip, a.onMouseMove) },
								),
							r.isTriggeredBy('focus') && {
								onFocus: N(r.showTooltip, a.onFocus),
								onBlur: N(r.hideTooltip, a.onBlur),
							},
						)
					)
				}),
				r
			)
		}
		s(e, 'TooltipTrigger')
		var o = e.prototype
		return (
			(o.componentWillUnmount = s(function () {
				this.clearScheduled()
			}, 'componentWillUnmount')),
			(o.render = s(function () {
				var n = this,
					i = this.props,
					l = i.children,
					a = i.tooltip,
					c = i.placement,
					p = i.trigger,
					u = i.getTriggerRef,
					v = i.modifiers,
					y = i.closeOnReferenceHidden,
					f = i.usePortal,
					h = i.portalContainer,
					m = i.followCursor,
					g = i.getTooltipRef,
					x = i.mutationObserverOptions,
					R = zt(i, [
						'children',
						'tooltip',
						'placement',
						'trigger',
						'getTriggerRef',
						'modifiers',
						'closeOnReferenceHidden',
						'usePortal',
						'portalContainer',
						'followCursor',
						'getTooltipRef',
						'mutationObserverOptions',
					]),
					w = $.createElement(
						so,
						X(
							{
								innerRef: g,
								placement: c,
								modifiers: [
									{
										name: 'followCursor',
										enabled: m,
										phase: 'main',
										fn: s(function (b) {
											n.popperOffset = b.state.rects.popper
										}, 'fn'),
									},
								].concat(v),
							},
							R,
						),
						function (d) {
							var b = d.ref,
								O = d.style,
								T = d.placement,
								P = d.arrowProps,
								A = d.isReferenceHidden,
								S = d.update
							if (m && n.popperOffset) {
								var E = n.state,
									M = E.pageX,
									k = E.pageY,
									q = n.popperOffset,
									G = q.width,
									B = q.height,
									j = M + G > window.pageXOffset + document.body.offsetWidth ? M - G : M,
									re = k + B > window.pageYOffset + document.body.offsetHeight ? k - B : k
								O.transform = 'translate3d(' + j + 'px, ' + re + 'px, 0'
							}
							return $.createElement(
								jt,
								X(
									{
										arrowProps: P,
										closeOnReferenceHidden: y,
										isReferenceHidden: A,
										placement: T,
										update: S,
										style: O,
										tooltip: a,
										trigger: p,
										mutationObserverOptions: x,
									},
									{ clearScheduled: n.clearScheduled, hideTooltip: n.hideTooltip, innerRef: b },
								),
							)
						},
					)
				return $.createElement(
					Kr,
					null,
					$.createElement(lo, { innerRef: u }, function (d) {
						var b = d.ref
						return l({ getTriggerProps: n.getTriggerProps, triggerRef: b })
					}),
					this.getState() && (f ? Kt.exports.createPortal(w, h) : w),
				)
			}, 'render')),
			(o.isControlled = s(function () {
				return this.props.tooltipShown !== void 0
			}, 'isControlled')),
			(o.getState = s(function () {
				return this.isControlled() ? this.props.tooltipShown : this.state.tooltipShown
			}, 'getState')),
			(o.isTriggeredBy = s(function (n) {
				var i = this.props.trigger
				return i === n || (Array.isArray(i) && i.includes(n))
			}, 'isTriggeredBy')),
			e
		)
	})(C.exports.Component)
Dt.defaultProps = {
	closeOnReferenceHidden: !0,
	defaultTooltipShown: !1,
	delayHide: 0,
	delayShow: 0,
	followCursor: !1,
	onVisibilityChange: co,
	placement: 'right',
	portalContainer: ht() ? document.body : null,
	trigger: 'hover',
	usePortal: ht(),
	mutationObserverOptions: po,
	modifiers: [],
}
var fo = Dt,
	L = Yt(1e3)(function (t, e, o) {
		var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0
		return e.split('-')[0] === t ? o : r
	}),
	K = 8,
	vo = Ee.div(
		{ position: 'absolute', borderStyle: 'solid' },
		function (t) {
			var e = t.placement,
				o = 0,
				r = 0
			switch (!0) {
				case e.startsWith('left') || e.startsWith('right'): {
					r = 8
					break
				}
				case e.startsWith('top') || e.startsWith('bottom'): {
					o = 8
					break
				}
			}
			var n = 'translate3d('.concat(o, 'px, ').concat(r, 'px, 0px)')
			return { transform: n }
		},
		function (t) {
			var e = t.theme,
				o = t.color,
				r = t.placement
			return {
				bottom: ''.concat(L('top', r, K * -1, 'auto'), 'px'),
				top: ''.concat(L('bottom', r, K * -1, 'auto'), 'px'),
				right: ''.concat(L('left', r, K * -1, 'auto'), 'px'),
				left: ''.concat(L('right', r, K * -1, 'auto'), 'px'),
				borderBottomWidth: ''.concat(L('top', r, '0', K), 'px'),
				borderTopWidth: ''.concat(L('bottom', r, '0', K), 'px'),
				borderRightWidth: ''.concat(L('left', r, '0', K), 'px'),
				borderLeftWidth: ''.concat(L('right', r, '0', K), 'px'),
				borderTopColor: L(
					'top',
					r,
					e.color[o] || o || e.base === 'light' ? pe(e.background.app) : fe(e.background.app),
					'transparent',
				),
				borderBottomColor: L(
					'bottom',
					r,
					e.color[o] || o || e.base === 'light' ? pe(e.background.app) : fe(e.background.app),
					'transparent',
				),
				borderLeftColor: L(
					'left',
					r,
					e.color[o] || o || e.base === 'light' ? pe(e.background.app) : fe(e.background.app),
					'transparent',
				),
				borderRightColor: L(
					'right',
					r,
					e.color[o] || o || e.base === 'light' ? pe(e.background.app) : fe(e.background.app),
					'transparent',
				),
			}
		},
	),
	ho = Ee.div(
		function (t) {
			var e = t.hidden
			return { display: e ? 'none' : 'inline-block', zIndex: 2147483647 }
		},
		function (t) {
			var e = t.theme,
				o = t.color,
				r = t.hasChrome
			return r
				? {
						background:
							e.color[o] || o || e.base === 'light' ? pe(e.background.app) : fe(e.background.app),
						filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
						borderRadius: e.appBorderRadius * 2,
						fontSize: e.typography.size.s1,
				  }
				: {}
		},
	),
	Ht = s(function (e) {
		var o = e.placement,
			r = e.hasChrome,
			n = e.children,
			i = e.arrowProps,
			l = e.tooltipRef,
			a = e.arrowRef,
			c = e.color,
			p = We(e, [
				'placement',
				'hasChrome',
				'children',
				'arrowProps',
				'tooltipRef',
				'arrowRef',
				'color',
			])
		return $.createElement(
			ho,
			Object.assign({ hasChrome: r, placement: o, ref: l }, p, { color: c }),
			r && $.createElement(vo, Object.assign({ placement: o, ref: a }, i, { color: c })),
			n,
		)
	}, 'Tooltip')
Ht.defaultProps = {
	color: void 0,
	arrowRef: void 0,
	tooltipRef: void 0,
	hasChrome: !0,
	placement: 'top',
	arrowProps: {},
}
var je = Xt.document,
	mo = Ee.div(
		rt ||
			(rt = wt([
				`
  display: inline-block;
  cursor: `,
				`;
`,
			])),
		function (t) {
			return t.mode === 'hover' ? 'default' : 'pointer'
		},
	),
	go = Ee.g(
		ot ||
			(ot = wt([
				`
  cursor: `,
				`;
`,
			])),
		function (t) {
			return t.mode === 'hover' ? 'default' : 'pointer'
		},
	),
	Lt = s(function (e) {
		var o = e.svg,
			r = e.trigger
		e.closeOnClick
		var n = e.placement,
			i = e.modifiers,
			l = e.hasChrome,
			a = e.tooltip,
			c = e.children,
			p = e.tooltipShown,
			u = e.onVisibilityChange,
			v = We(e, [
				'svg',
				'trigger',
				'closeOnClick',
				'placement',
				'modifiers',
				'hasChrome',
				'tooltip',
				'children',
				'tooltipShown',
				'onVisibilityChange',
			]),
			y = o ? go : mo
		return $.createElement(
			fo,
			{
				placement: n,
				trigger: r,
				modifiers: i,
				tooltipShown: p,
				onVisibilityChange: u,
				tooltip: s(function (h) {
					var m = h.getTooltipProps,
						g = h.getArrowProps,
						x = h.tooltipRef,
						R = h.arrowRef,
						w = h.placement
					return $.createElement(
						Ht,
						Object.assign(
							{ hasChrome: l, placement: w, tooltipRef: x, arrowRef: R, arrowProps: g() },
							m(),
						),
						typeof a == 'function'
							? a({
									onHide: s(function () {
										return u(!1)
									}, 'onHide'),
							  })
							: a,
					)
				}, 'tooltip'),
			},
			function (f) {
				var h = f.getTriggerProps,
					m = f.triggerRef
				return $.createElement(y, Object.assign({ ref: m }, h(), v), c)
			},
		)
	}, 'WithTooltipPure')
Lt.defaultProps = {
	svg: !1,
	trigger: 'hover',
	closeOnClick: !1,
	placement: 'top',
	modifiers: [
		{ name: 'preventOverflow', options: { padding: 8 } },
		{ name: 'offset', options: { offset: [8, 8] } },
		{ name: 'arrow', options: { padding: 8 } },
	],
	hasChrome: !0,
	tooltipShown: !1,
}
var Eo = s(function (e) {
	var o = e.startOpen,
		r = e.onVisibilityChange,
		n = We(e, ['startOpen', 'onVisibilityChange']),
		i = C.exports.useState(o || !1),
		l = Qt(i, 2),
		a = l[0],
		c = l[1],
		p = C.exports.useCallback(
			function (u) {
				;(r && r(u) === !1) || c(u)
			},
			[r],
		)
	return (
		C.exports.useEffect(function () {
			var u = s(function () {
				return p(!1)
			}, 'hide')
			je.addEventListener('keydown', u, !1)
			var v = Array.from(je.getElementsByTagName('iframe')),
				y = []
			return (
				v.forEach(function (f) {
					var h = s(function () {
						try {
							f.contentWindow.document &&
								(f.contentWindow.document.addEventListener('click', u),
								y.push(function () {
									try {
										f.contentWindow.document.removeEventListener('click', u)
									} catch {}
								}))
						} catch {}
					}, 'bind')
					h(),
						f.addEventListener('load', h),
						y.push(function () {
							f.removeEventListener('load', h)
						})
				}),
				function () {
					je.removeEventListener('keydown', u),
						y.forEach(function (f) {
							f()
						})
				}
			)
		}),
		$.createElement(Lt, Object.assign({}, n, { tooltipShown: a, onVisibilityChange: p }))
	)
}, 'WithToolTipState')
export { Eo as WithToolTipState, Eo as WithTooltip, Lt as WithTooltipPure }
//# sourceMappingURL=WithTooltip-167e9982.93a2b56d.js.map
