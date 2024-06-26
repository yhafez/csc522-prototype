var Zf = Object.defineProperty
var n = (e, t) => Zf(e, 'name', { value: t, configurable: !0 })
import {
	ap as De,
	aq as $e,
	ar as Ot,
	as as Ll,
	at as ep,
	au as tp,
	av as Ps,
	c as Fl,
	aw as rp,
	ax as ap,
	b as np,
	g as op,
	P as lp,
	d as ip,
} from './iframe.734f45ba.js'
import { r as up } from './index.12010606.js'
import { i as ws } from './instrumenter.593b6c46.js'
import { R as sp, b as Ke, j as F } from './jsx-runtime.adda36d4.js'
import { H as cp } from './Header.24e6e9c3.js'
import './es.map.constructor.86a6c0ec.js'
import './Button.a7fc7e98.js'
function dp(e, t) {
	for (var r = 0; r < t.length; r++) {
		const a = t[r]
		if (typeof a != 'string' && !Array.isArray(a)) {
			for (const o in a)
				if (o !== 'default' && !(o in e)) {
					const l = Object.getOwnPropertyDescriptor(a, o)
					l && Object.defineProperty(e, o, l.get ? l : { enumerable: !0, get: () => a[o] })
				}
		}
	}
	return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }))
}
n(dp, '_mergeNamespaces')
var ue = {},
	Vl = { exports: {} }
;(function (e) {
	const r = n(
			(l = 0) =>
				i =>
					`\x1B[${38 + l};5;${i}m`,
			'wrapAnsi256',
		),
		a = n(
			(l = 0) =>
				(i, s, u) =>
					`\x1B[${38 + l};2;${i};${s};${u}m`,
			'wrapAnsi16m',
		)
	function o() {
		const l = new Map(),
			i = {
				modifier: {
					reset: [0, 0],
					bold: [1, 22],
					dim: [2, 22],
					italic: [3, 23],
					underline: [4, 24],
					overline: [53, 55],
					inverse: [7, 27],
					hidden: [8, 28],
					strikethrough: [9, 29],
				},
				color: {
					black: [30, 39],
					red: [31, 39],
					green: [32, 39],
					yellow: [33, 39],
					blue: [34, 39],
					magenta: [35, 39],
					cyan: [36, 39],
					white: [37, 39],
					blackBright: [90, 39],
					redBright: [91, 39],
					greenBright: [92, 39],
					yellowBright: [93, 39],
					blueBright: [94, 39],
					magentaBright: [95, 39],
					cyanBright: [96, 39],
					whiteBright: [97, 39],
				},
				bgColor: {
					bgBlack: [40, 49],
					bgRed: [41, 49],
					bgGreen: [42, 49],
					bgYellow: [43, 49],
					bgBlue: [44, 49],
					bgMagenta: [45, 49],
					bgCyan: [46, 49],
					bgWhite: [47, 49],
					bgBlackBright: [100, 49],
					bgRedBright: [101, 49],
					bgGreenBright: [102, 49],
					bgYellowBright: [103, 49],
					bgBlueBright: [104, 49],
					bgMagentaBright: [105, 49],
					bgCyanBright: [106, 49],
					bgWhiteBright: [107, 49],
				},
			}
		;(i.color.gray = i.color.blackBright),
			(i.bgColor.bgGray = i.bgColor.bgBlackBright),
			(i.color.grey = i.color.blackBright),
			(i.bgColor.bgGrey = i.bgColor.bgBlackBright)
		for (const [s, u] of Object.entries(i)) {
			for (const [c, f] of Object.entries(u))
				(i[c] = { open: `\x1B[${f[0]}m`, close: `\x1B[${f[1]}m` }), (u[c] = i[c]), l.set(f[0], f[1])
			Object.defineProperty(i, s, { value: u, enumerable: !1 })
		}
		return (
			Object.defineProperty(i, 'codes', { value: l, enumerable: !1 }),
			(i.color.close = '\x1B[39m'),
			(i.bgColor.close = '\x1B[49m'),
			(i.color.ansi256 = r()),
			(i.color.ansi16m = a()),
			(i.bgColor.ansi256 = r(10)),
			(i.bgColor.ansi16m = a(10)),
			Object.defineProperties(i, {
				rgbToAnsi256: {
					value: (s, u, c) =>
						s === u && u === c
							? s < 8
								? 16
								: s > 248
								  ? 231
								  : Math.round(((s - 8) / 247) * 24) + 232
							: 16 +
							  36 * Math.round((s / 255) * 5) +
							  6 * Math.round((u / 255) * 5) +
							  Math.round((c / 255) * 5),
					enumerable: !1,
				},
				hexToRgb: {
					value: s => {
						const u = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(s.toString(16))
						if (!u) return [0, 0, 0]
						let { colorString: c } = u.groups
						c.length === 3 &&
							(c = c
								.split('')
								.map(p => p + p)
								.join(''))
						const f = Number.parseInt(c, 16)
						return [(f >> 16) & 255, (f >> 8) & 255, f & 255]
					},
					enumerable: !1,
				},
				hexToAnsi256: { value: s => i.rgbToAnsi256(...i.hexToRgb(s)), enumerable: !1 },
			}),
			i
		)
	}
	n(o, 'assembleStyles'), Object.defineProperty(e, 'exports', { enumerable: !0, get: o })
})(Vl)
var se = {}
Object.defineProperty(se, '__esModule', { value: !0 })
se.printIteratorEntries = pp
se.printIteratorValues = vp
se.printListItems = mp
se.printObjectProperties = bp
const fp = n((e, t) => {
	const r = Object.keys(e).sort(t)
	return (
		Object.getOwnPropertySymbols &&
			Object.getOwnPropertySymbols(e).forEach(a => {
				Object.getOwnPropertyDescriptor(e, a).enumerable && r.push(a)
			}),
		r
	)
}, 'getKeysOfEnumerableProperties')
function pp(e, t, r, a, o, l, i = ': ') {
	let s = '',
		u = e.next()
	if (!u.done) {
		s += t.spacingOuter
		const c = r + t.indent
		for (; !u.done; ) {
			const f = l(u.value[0], t, c, a, o),
				p = l(u.value[1], t, c, a, o)
			;(s += c + f + i + p),
				(u = e.next()),
				u.done ? t.min || (s += ',') : (s += ',' + t.spacingInner)
		}
		s += t.spacingOuter + r
	}
	return s
}
n(pp, 'printIteratorEntries')
function vp(e, t, r, a, o, l) {
	let i = '',
		s = e.next()
	if (!s.done) {
		i += t.spacingOuter
		const u = r + t.indent
		for (; !s.done; )
			(i += u + l(s.value, t, u, a, o)),
				(s = e.next()),
				s.done ? t.min || (i += ',') : (i += ',' + t.spacingInner)
		i += t.spacingOuter + r
	}
	return i
}
n(vp, 'printIteratorValues')
function mp(e, t, r, a, o, l) {
	let i = ''
	if (e.length) {
		i += t.spacingOuter
		const s = r + t.indent
		for (let u = 0; u < e.length; u++)
			(i += s),
				u in e && (i += l(e[u], t, s, a, o)),
				u < e.length - 1 ? (i += ',' + t.spacingInner) : t.min || (i += ',')
		i += t.spacingOuter + r
	}
	return i
}
n(mp, 'printListItems')
function bp(e, t, r, a, o, l) {
	let i = ''
	const s = fp(e, t.compareKeys)
	if (s.length) {
		i += t.spacingOuter
		const u = r + t.indent
		for (let c = 0; c < s.length; c++) {
			const f = s[c],
				p = l(f, t, u, a, o),
				m = l(e[f], t, u, a, o)
			;(i += u + p + ': ' + m), c < s.length - 1 ? (i += ',' + t.spacingInner) : t.min || (i += ',')
		}
		i += t.spacingOuter + r
	}
	return i
}
n(bp, 'printObjectProperties')
var _e = {}
Object.defineProperty(_e, '__esModule', { value: !0 })
_e.test = _e.serialize = _e.default = void 0
var Ii = se,
	er = (function () {
		return typeof globalThis < 'u'
			? globalThis
			: typeof er < 'u'
			  ? er
			  : typeof self < 'u'
			    ? self
			    : typeof window < 'u'
			      ? window
			      : Function('return this')()
	})(),
	Co = er['jest-symbol-do-not-touch'] || er.Symbol
const yp = typeof Co == 'function' && Co.for ? Co.for('jest.asymmetricMatcher') : 1267621,
	Dt = ' ',
	Os = n((e, t, r, a, o, l) => {
		const i = e.toString()
		return i === 'ArrayContaining' || i === 'ArrayNotContaining'
			? ++a > t.maxDepth
				? '[' + i + ']'
				: i + Dt + '[' + (0, Ii.printListItems)(e.sample, t, r, a, o, l) + ']'
			: i === 'ObjectContaining' || i === 'ObjectNotContaining'
			  ? ++a > t.maxDepth
					? '[' + i + ']'
					: i + Dt + '{' + (0, Ii.printObjectProperties)(e.sample, t, r, a, o, l) + '}'
			  : i === 'StringMatching' ||
			      i === 'StringNotMatching' ||
			      i === 'StringContaining' ||
			      i === 'StringNotContaining'
			    ? i + Dt + l(e.sample, t, r, a, o)
			    : e.toAsymmetricMatcher()
	}, 'serialize$6')
_e.serialize = Os
const qs = n(e => e && e.$$typeof === yp, 'test$6')
_e.test = qs
const hp = { serialize: Os, test: qs }
var gp = hp
_e.default = gp
var Re = {},
	Ep = n(({ onlyFirst: e = !1 } = {}) => {
		const t = [
			'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
			'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
		].join('|')
		return new RegExp(t, e ? void 0 : 'g')
	}, 'ansiRegex')
Object.defineProperty(Re, '__esModule', { value: !0 })
Re.test = Re.serialize = Re.default = void 0
var Ts = $s(Ep),
	S = $s(Vl.exports)
function $s(e) {
	return e && e.__esModule ? e : { default: e }
}
n($s, '_interopRequireDefault$d')
const _p = n(
		e =>
			e.replace((0, Ts.default)(), t => {
				switch (t) {
					case S.default.red.close:
					case S.default.green.close:
					case S.default.cyan.close:
					case S.default.gray.close:
					case S.default.white.close:
					case S.default.yellow.close:
					case S.default.bgRed.close:
					case S.default.bgGreen.close:
					case S.default.bgYellow.close:
					case S.default.inverse.close:
					case S.default.dim.close:
					case S.default.bold.close:
					case S.default.reset.open:
					case S.default.reset.close:
						return '</>'
					case S.default.red.open:
						return '<red>'
					case S.default.green.open:
						return '<green>'
					case S.default.cyan.open:
						return '<cyan>'
					case S.default.gray.open:
						return '<gray>'
					case S.default.white.open:
						return '<white>'
					case S.default.yellow.open:
						return '<yellow>'
					case S.default.bgRed.open:
						return '<bgRed>'
					case S.default.bgGreen.open:
						return '<bgGreen>'
					case S.default.bgYellow.open:
						return '<bgYellow>'
					case S.default.inverse.open:
						return '<inverse>'
					case S.default.dim.open:
						return '<dim>'
					case S.default.bold.open:
						return '<bold>'
					default:
						return ''
				}
			}),
		'toHumanReadableAnsi',
	),
	xs = n(e => typeof e == 'string' && !!e.match((0, Ts.default)()), 'test$5')
Re.test = xs
const Ss = n((e, t, r, a, o, l) => l(_p(e), t, r, a, o), 'serialize$5')
Re.serialize = Ss
const Rp = { serialize: Ss, test: xs }
var Cp = Rp
Re.default = Cp
var Ce = {}
Object.defineProperty(Ce, '__esModule', { value: !0 })
Ce.test = Ce.serialize = Ce.default = void 0
var Ni = se
const Pp = ' ',
	As = ['DOMStringMap', 'NamedNodeMap'],
	wp = /^(HTML\w*Collection|NodeList)$/,
	Op = n(e => As.indexOf(e) !== -1 || wp.test(e), 'testName'),
	Ms = n(e => e && e.constructor && !!e.constructor.name && Op(e.constructor.name), 'test$4')
Ce.test = Ms
const qp = n(e => e.constructor.name === 'NamedNodeMap', 'isNamedNodeMap'),
	Bs = n((e, t, r, a, o, l) => {
		const i = e.constructor.name
		return ++a > t.maxDepth
			? '[' + i + ']'
			: (t.min ? '' : i + Pp) +
					(As.indexOf(i) !== -1
						? '{' +
						  (0, Ni.printObjectProperties)(
								qp(e) ? Array.from(e).reduce((s, u) => ((s[u.name] = u.value), s), {}) : { ...e },
								t,
								r,
								a,
								o,
								l,
						  ) +
						  '}'
						: '[' + (0, Ni.printListItems)(Array.from(e), t, r, a, o, l) + ']')
	}, 'serialize$4')
Ce.serialize = Bs
const Tp = { serialize: Bs, test: Ms }
var $p = Tp
Ce.default = $p
var Pe = {},
	k = {},
	Ul = {}
Object.defineProperty(Ul, '__esModule', { value: !0 })
Ul.default = xp
function xp(e) {
	return e.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
n(xp, 'escapeHTML$1')
Object.defineProperty(k, '__esModule', { value: !0 })
k.printText =
	k.printProps =
	k.printElementAsLeaf =
	k.printElement =
	k.printComment =
	k.printChildren =
		void 0
var js = Sp(Ul)
function Sp(e) {
	return e && e.__esModule ? e : { default: e }
}
n(Sp, '_interopRequireDefault$c')
const Ap = n((e, t, r, a, o, l, i) => {
	const s = a + r.indent,
		u = r.colors
	return e
		.map(c => {
			const f = t[c]
			let p = i(f, r, s, o, l)
			return (
				typeof f != 'string' &&
					(p.indexOf(`
`) !== -1 && (p = r.spacingOuter + s + p + r.spacingOuter + a),
					(p = '{' + p + '}')),
				r.spacingInner + a + u.prop.open + c + u.prop.close + '=' + u.value.open + p + u.value.close
			)
		})
		.join('')
}, 'printProps$1')
k.printProps = Ap
const Mp = n(
	(e, t, r, a, o, l) =>
		e.map(i => t.spacingOuter + r + (typeof i == 'string' ? Is(i, t) : l(i, t, r, a, o))).join(''),
	'printChildren$1',
)
k.printChildren = Mp
const Is = n((e, t) => {
	const r = t.colors.content
	return r.open + (0, js.default)(e) + r.close
}, 'printText$1')
k.printText = Is
const Bp = n((e, t) => {
	const r = t.colors.comment
	return r.open + '<!--' + (0, js.default)(e) + '-->' + r.close
}, 'printComment$1')
k.printComment = Bp
const jp = n((e, t, r, a, o) => {
	const l = a.colors.tag
	return (
		l.open +
		'<' +
		e +
		(t && l.close + t + a.spacingOuter + o + l.open) +
		(r
			? '>' + l.close + r + a.spacingOuter + o + l.open + '</' + e
			: (t && !a.min ? '' : ' ') + '/') +
		'>' +
		l.close
	)
}, 'printElement$1')
k.printElement = jp
const Ip = n((e, t) => {
	const r = t.colors.tag
	return r.open + '<' + e + r.close + ' \u2026' + r.open + ' />' + r.close
}, 'printElementAsLeaf$1')
k.printElementAsLeaf = Ip
Object.defineProperty(Pe, '__esModule', { value: !0 })
Pe.test = Pe.serialize = Pe.default = void 0
var Ge = k
const Np = 1,
	Ns = 3,
	ks = 8,
	Ds = 11,
	kp = /^((HTML|SVG)\w*)?Element$/,
	Dp = n(e => {
		try {
			return typeof e.hasAttribute == 'function' && e.hasAttribute('is')
		} catch {
			return !1
		}
	}, 'testHasAttribute'),
	Lp = n(e => {
		const t = e.constructor.name,
			{ nodeType: r, tagName: a } = e,
			o = (typeof a == 'string' && a.includes('-')) || Dp(e)
		return (
			(r === Np && (kp.test(t) || o)) ||
			(r === Ns && t === 'Text') ||
			(r === ks && t === 'Comment') ||
			(r === Ds && t === 'DocumentFragment')
		)
	}, 'testNode$1'),
	Ls = n(e => {
		var t
		return (e == null || (t = e.constructor) === null || t === void 0 ? void 0 : t.name) && Lp(e)
	}, 'test$3')
Pe.test = Ls
function Fp(e) {
	return e.nodeType === Ns
}
n(Fp, 'nodeIsText$1')
function Vp(e) {
	return e.nodeType === ks
}
n(Vp, 'nodeIsComment$1')
function Po(e) {
	return e.nodeType === Ds
}
n(Po, 'nodeIsFragment$1')
const Fs = n((e, t, r, a, o, l) => {
	if (Fp(e)) return (0, Ge.printText)(e.data, t)
	if (Vp(e)) return (0, Ge.printComment)(e.data, t)
	const i = Po(e) ? 'DocumentFragment' : e.tagName.toLowerCase()
	return ++a > t.maxDepth
		? (0, Ge.printElementAsLeaf)(i, t)
		: (0, Ge.printElement)(
				i,
				(0, Ge.printProps)(
					Po(e)
						? []
						: Array.from(e.attributes)
								.map(s => s.name)
								.sort(),
					Po(e) ? {} : Array.from(e.attributes).reduce((s, u) => ((s[u.name] = u.value), s), {}),
					t,
					r + t.indent,
					a,
					o,
					l,
				),
				(0, Ge.printChildren)(
					Array.prototype.slice.call(e.childNodes || e.children),
					t,
					r + t.indent,
					a,
					o,
					l,
				),
				t,
				r,
		  )
}, 'serialize$3')
Pe.serialize = Fs
const Up = { serialize: Fs, test: Ls }
var Hp = Up
Pe.default = Hp
var we = {}
Object.defineProperty(we, '__esModule', { value: !0 })
we.test = we.serialize = we.default = void 0
var Et = se
const Wp = '@@__IMMUTABLE_ITERABLE__@@',
	zp = '@@__IMMUTABLE_LIST__@@',
	Kp = '@@__IMMUTABLE_KEYED__@@',
	Gp = '@@__IMMUTABLE_MAP__@@',
	ki = '@@__IMMUTABLE_ORDERED__@@',
	Yp = '@@__IMMUTABLE_RECORD__@@',
	Xp = '@@__IMMUTABLE_SEQ__@@',
	Qp = '@@__IMMUTABLE_SET__@@',
	Jp = '@@__IMMUTABLE_STACK__@@',
	rt = n(e => 'Immutable.' + e, 'getImmutableName'),
	yr = n(e => '[' + e + ']', 'printAsLeaf'),
	_t = ' ',
	Di = '\u2026',
	Zp = n(
		(e, t, r, a, o, l, i) =>
			++a > t.maxDepth
				? yr(rt(i))
				: rt(i) + _t + '{' + (0, Et.printIteratorEntries)(e.entries(), t, r, a, o, l) + '}',
		'printImmutableEntries',
	)
function ev(e) {
	let t = 0
	return {
		next() {
			if (t < e._keys.length) {
				const r = e._keys[t++]
				return { done: !1, value: [r, e.get(r)] }
			}
			return { done: !0, value: void 0 }
		},
	}
}
n(ev, 'getRecordEntries')
const tv = n((e, t, r, a, o, l) => {
		const i = rt(e._name || 'Record')
		return ++a > t.maxDepth
			? yr(i)
			: i + _t + '{' + (0, Et.printIteratorEntries)(ev(e), t, r, a, o, l) + '}'
	}, 'printImmutableRecord'),
	rv = n((e, t, r, a, o, l) => {
		const i = rt('Seq')
		return ++a > t.maxDepth
			? yr(i)
			: e[Kp]
			  ? i +
			    _t +
			    '{' +
			    (e._iter || e._object ? (0, Et.printIteratorEntries)(e.entries(), t, r, a, o, l) : Di) +
			    '}'
			  : i +
			    _t +
			    '[' +
			    (e._iter || e._array || e._collection || e._iterable
						? (0, Et.printIteratorValues)(e.values(), t, r, a, o, l)
						: Di) +
			    ']'
	}, 'printImmutableSeq'),
	wo = n(
		(e, t, r, a, o, l, i) =>
			++a > t.maxDepth
				? yr(rt(i))
				: rt(i) + _t + '[' + (0, Et.printIteratorValues)(e.values(), t, r, a, o, l) + ']',
		'printImmutableValues',
	),
	Vs = n(
		(e, t, r, a, o, l) =>
			e[Gp]
				? Zp(e, t, r, a, o, l, e[ki] ? 'OrderedMap' : 'Map')
				: e[zp]
				  ? wo(e, t, r, a, o, l, 'List')
				  : e[Qp]
				    ? wo(e, t, r, a, o, l, e[ki] ? 'OrderedSet' : 'Set')
				    : e[Jp]
				      ? wo(e, t, r, a, o, l, 'Stack')
				      : e[Xp]
				        ? rv(e, t, r, a, o, l)
				        : tv(e, t, r, a, o, l),
		'serialize$2',
	)
we.serialize = Vs
const Us = n(e => e && (e[Wp] === !0 || e[Yp] === !0), 'test$2')
we.test = Us
const av = { serialize: Vs, test: Us }
var nv = av
we.default = nv
var Oe = {}
Object.defineProperty(Oe, '__esModule', { value: !0 })
Oe.test = Oe.serialize = Oe.default = void 0
var Me = ov(up.exports),
	Lt = k
function Hs(e) {
	if (typeof WeakMap != 'function') return null
	var t = new WeakMap(),
		r = new WeakMap()
	return (Hs = n(function (a) {
		return a ? r : t
	}, '_getRequireWildcardCache$2'))(e)
}
n(Hs, '_getRequireWildcardCache$2')
function ov(e, t) {
	if (!t && e && e.__esModule) return e
	if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e }
	var r = Hs(t)
	if (r && r.has(e)) return r.get(e)
	var a = {},
		o = Object.defineProperty && Object.getOwnPropertyDescriptor
	for (var l in e)
		if (l !== 'default' && Object.prototype.hasOwnProperty.call(e, l)) {
			var i = o ? Object.getOwnPropertyDescriptor(e, l) : null
			i && (i.get || i.set) ? Object.defineProperty(a, l, i) : (a[l] = e[l])
		}
	return (a.default = e), r && r.set(e, a), a
}
n(ov, '_interopRequireWildcard$2')
const Ws = n(
		(e, t = []) => (
			Array.isArray(e)
				? e.forEach(r => {
						Ws(r, t)
				  })
				: e != null && e !== !1 && t.push(e),
			t
		),
		'getChildren',
	),
	Li = n(e => {
		const t = e.type
		if (typeof t == 'string') return t
		if (typeof t == 'function') return t.displayName || t.name || 'Unknown'
		if (Me.isFragment(e)) return 'React.Fragment'
		if (Me.isSuspense(e)) return 'React.Suspense'
		if (typeof t == 'object' && t !== null) {
			if (Me.isContextProvider(e)) return 'Context.Provider'
			if (Me.isContextConsumer(e)) return 'Context.Consumer'
			if (Me.isForwardRef(e)) {
				if (t.displayName) return t.displayName
				const r = t.render.displayName || t.render.name || ''
				return r !== '' ? 'ForwardRef(' + r + ')' : 'ForwardRef'
			}
			if (Me.isMemo(e)) {
				const r = t.displayName || t.type.displayName || t.type.name || ''
				return r !== '' ? 'Memo(' + r + ')' : 'Memo'
			}
		}
		return 'UNDEFINED'
	}, 'getType'),
	lv = n(e => {
		const { props: t } = e
		return Object.keys(t)
			.filter(r => r !== 'children' && t[r] !== void 0)
			.sort()
	}, 'getPropKeys$1'),
	zs = n(
		(e, t, r, a, o, l) =>
			++a > t.maxDepth
				? (0, Lt.printElementAsLeaf)(Li(e), t)
				: (0, Lt.printElement)(
						Li(e),
						(0, Lt.printProps)(lv(e), e.props, t, r + t.indent, a, o, l),
						(0, Lt.printChildren)(Ws(e.props.children), t, r + t.indent, a, o, l),
						t,
						r,
				  ),
		'serialize$1',
	)
Oe.serialize = zs
const Ks = n(e => e != null && Me.isElement(e), 'test$1')
Oe.test = Ks
const iv = { serialize: zs, test: Ks }
var uv = iv
Oe.default = uv
var qe = {}
Object.defineProperty(qe, '__esModule', { value: !0 })
qe.test = qe.serialize = qe.default = void 0
var Ft = k,
	tr = (function () {
		return typeof globalThis < 'u'
			? globalThis
			: typeof tr < 'u'
			  ? tr
			  : typeof self < 'u'
			    ? self
			    : typeof window < 'u'
			      ? window
			      : Function('return this')()
	})(),
	Oo = tr['jest-symbol-do-not-touch'] || tr.Symbol
const sv = typeof Oo == 'function' && Oo.for ? Oo.for('react.test.json') : 245830487,
	cv = n(e => {
		const { props: t } = e
		return t
			? Object.keys(t)
					.filter(r => t[r] !== void 0)
					.sort()
			: []
	}, 'getPropKeys'),
	Gs = n(
		(e, t, r, a, o, l) =>
			++a > t.maxDepth
				? (0, Ft.printElementAsLeaf)(e.type, t)
				: (0, Ft.printElement)(
						e.type,
						e.props ? (0, Ft.printProps)(cv(e), e.props, t, r + t.indent, a, o, l) : '',
						e.children ? (0, Ft.printChildren)(e.children, t, r + t.indent, a, o, l) : '',
						t,
						r,
				  ),
		'serialize',
	)
qe.serialize = Gs
const Ys = n(e => e && e.$$typeof === sv, 'test')
qe.test = Ys
const dv = { serialize: Gs, test: Ys }
var fv = dv
qe.default = fv
Object.defineProperty(ue, '__esModule', { value: !0 })
var Xs = (ue.default = nc = ue.DEFAULT_OPTIONS = void 0),
	Qs = (ue.format = uc),
	Hl = (ue.plugins = void 0),
	pv = xe(Vl.exports),
	vt = se,
	vv = xe(_e),
	mv = xe(Re),
	bv = xe(Ce),
	yv = xe(Pe),
	hv = xe(we),
	gv = xe(Oe),
	Ev = xe(qe)
function xe(e) {
	return e && e.__esModule ? e : { default: e }
}
n(xe, '_interopRequireDefault$b')
const Js = Object.prototype.toString,
	_v = Date.prototype.toISOString,
	Rv = Error.prototype.toString,
	Fi = RegExp.prototype.toString,
	qo = n(
		e => (typeof e.constructor == 'function' && e.constructor.name) || 'Object',
		'getConstructorName',
	),
	Cv = n(e => typeof window < 'u' && e === window, 'isWindow'),
	Pv = /^Symbol\((.*)\)(.*)$/,
	wv = /\n/gi
class Wl extends Error {
	constructor(t, r) {
		super(t), (this.stack = r), (this.name = this.constructor.name)
	}
}
n(Wl, 'PrettyFormatPluginError')
function Ov(e) {
	return (
		e === '[object Array]' ||
		e === '[object ArrayBuffer]' ||
		e === '[object DataView]' ||
		e === '[object Float32Array]' ||
		e === '[object Float64Array]' ||
		e === '[object Int8Array]' ||
		e === '[object Int16Array]' ||
		e === '[object Int32Array]' ||
		e === '[object Uint8Array]' ||
		e === '[object Uint8ClampedArray]' ||
		e === '[object Uint16Array]' ||
		e === '[object Uint32Array]'
	)
}
n(Ov, 'isToStringedArrayType')
function qv(e) {
	return Object.is(e, -0) ? '-0' : String(e)
}
n(qv, 'printNumber')
function Tv(e) {
	return String(`${e}n`)
}
n(Tv, 'printBigInt')
function Vi(e, t) {
	return t ? '[Function ' + (e.name || 'anonymous') + ']' : '[Function]'
}
n(Vi, 'printFunction')
function Ui(e) {
	return String(e).replace(Pv, 'Symbol($1)')
}
n(Ui, 'printSymbol')
function Hi(e) {
	return '[' + Rv.call(e) + ']'
}
n(Hi, 'printError')
function Zs(e, t, r, a) {
	if (e === !0 || e === !1) return '' + e
	if (e === void 0) return 'undefined'
	if (e === null) return 'null'
	const o = typeof e
	if (o === 'number') return qv(e)
	if (o === 'bigint') return Tv(e)
	if (o === 'string') return a ? '"' + e.replace(/"|\\/g, '\\$&') + '"' : '"' + e + '"'
	if (o === 'function') return Vi(e, t)
	if (o === 'symbol') return Ui(e)
	const l = Js.call(e)
	return l === '[object WeakMap]'
		? 'WeakMap {}'
		: l === '[object WeakSet]'
		  ? 'WeakSet {}'
		  : l === '[object Function]' || l === '[object GeneratorFunction]'
		    ? Vi(e, t)
		    : l === '[object Symbol]'
		      ? Ui(e)
		      : l === '[object Date]'
		        ? isNaN(+e)
							? 'Date { NaN }'
							: _v.call(e)
		        : l === '[object Error]'
		          ? Hi(e)
		          : l === '[object RegExp]'
		            ? r
									? Fi.call(e).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
									: Fi.call(e)
		            : e instanceof Error
		              ? Hi(e)
		              : null
}
n(Zs, 'printBasicValue')
function ec(e, t, r, a, o, l) {
	if (o.indexOf(e) !== -1) return '[Circular]'
	;(o = o.slice()), o.push(e)
	const i = ++a > t.maxDepth,
		s = t.min
	if (t.callToJSON && !i && e.toJSON && typeof e.toJSON == 'function' && !l)
		return be(e.toJSON(), t, r, a, o, !0)
	const u = Js.call(e)
	return u === '[object Arguments]'
		? i
			? '[Arguments]'
			: (s ? '' : 'Arguments ') + '[' + (0, vt.printListItems)(e, t, r, a, o, be) + ']'
		: Ov(u)
		  ? i
				? '[' + e.constructor.name + ']'
				: (s || (!t.printBasicPrototype && e.constructor.name === 'Array')
						? ''
						: e.constructor.name + ' ') +
				  '[' +
				  (0, vt.printListItems)(e, t, r, a, o, be) +
				  ']'
		  : u === '[object Map]'
		    ? i
					? '[Map]'
					: 'Map {' + (0, vt.printIteratorEntries)(e.entries(), t, r, a, o, be, ' => ') + '}'
		    : u === '[object Set]'
		      ? i
						? '[Set]'
						: 'Set {' + (0, vt.printIteratorValues)(e.values(), t, r, a, o, be) + '}'
		      : i || Cv(e)
		        ? '[' + qo(e) + ']'
		        : (s || (!t.printBasicPrototype && qo(e) === 'Object') ? '' : qo(e) + ' ') +
		          '{' +
		          (0, vt.printObjectProperties)(e, t, r, a, o, be) +
		          '}'
}
n(ec, 'printComplexValue')
function $v(e) {
	return e.serialize != null
}
n($v, 'isNewPlugin')
function tc(e, t, r, a, o, l) {
	let i
	try {
		i = $v(e)
			? e.serialize(t, r, a, o, l, be)
			: e.print(
					t,
					s => be(s, r, a, o, l),
					s => {
						const u = a + r.indent
						return (
							u +
							s.replace(
								wv,
								`
` + u,
							)
						)
					},
					{ edgeSpacing: r.spacingOuter, min: r.min, spacing: r.spacingInner },
					r.colors,
			  )
	} catch (s) {
		throw new Wl(s.message, s.stack)
	}
	if (typeof i != 'string')
		throw new Error(
			`pretty-format: Plugin must return type "string" but instead returned "${typeof i}".`,
		)
	return i
}
n(tc, 'printPlugin')
function rc(e, t) {
	for (let r = 0; r < e.length; r++)
		try {
			if (e[r].test(t)) return e[r]
		} catch (a) {
			throw new Wl(a.message, a.stack)
		}
	return null
}
n(rc, 'findPlugin')
function be(e, t, r, a, o, l) {
	const i = rc(t.plugins, e)
	if (i !== null) return tc(i, e, t, r, a, o)
	const s = Zs(e, t.printFunctionName, t.escapeRegex, t.escapeString)
	return s !== null ? s : ec(e, t, r, a, o, l)
}
n(be, 'printer')
const zl = { comment: 'gray', content: 'reset', prop: 'yellow', tag: 'cyan', value: 'green' },
	ac = Object.keys(zl),
	X = {
		callToJSON: !0,
		compareKeys: void 0,
		escapeRegex: !1,
		escapeString: !0,
		highlight: !1,
		indent: 2,
		maxDepth: 1 / 0,
		min: !1,
		plugins: [],
		printBasicPrototype: !0,
		printFunctionName: !0,
		theme: zl,
	}
var nc = (ue.DEFAULT_OPTIONS = X)
function xv(e) {
	if (
		(Object.keys(e).forEach(t => {
			if (!X.hasOwnProperty(t)) throw new Error(`pretty-format: Unknown option "${t}".`)
		}),
		e.min && e.indent !== void 0 && e.indent !== 0)
	)
		throw new Error('pretty-format: Options "min" and "indent" cannot be used together.')
	if (e.theme !== void 0) {
		if (e.theme === null) throw new Error('pretty-format: Option "theme" must not be null.')
		if (typeof e.theme != 'object')
			throw new Error(
				`pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`,
			)
	}
}
n(xv, 'validateOptions')
const Sv = n(
		e =>
			ac.reduce((t, r) => {
				const a = e.theme && e.theme[r] !== void 0 ? e.theme[r] : zl[r],
					o = a && pv.default[a]
				if (o && typeof o.close == 'string' && typeof o.open == 'string') t[r] = o
				else
					throw new Error(
						`pretty-format: Option "theme" has a key "${r}" whose value "${a}" is undefined in ansi-styles.`,
					)
				return t
			}, Object.create(null)),
		'getColorsHighlight',
	),
	Av = n(
		() => ac.reduce((e, t) => ((e[t] = { close: '', open: '' }), e), Object.create(null)),
		'getColorsEmpty',
	),
	oc = n(
		e => (e && e.printFunctionName !== void 0 ? e.printFunctionName : X.printFunctionName),
		'getPrintFunctionName',
	),
	lc = n(e => (e && e.escapeRegex !== void 0 ? e.escapeRegex : X.escapeRegex), 'getEscapeRegex'),
	ic = n(
		e => (e && e.escapeString !== void 0 ? e.escapeString : X.escapeString),
		'getEscapeString',
	),
	Wi = n(e => {
		var t
		return {
			callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : X.callToJSON,
			colors: e && e.highlight ? Sv(e) : Av(),
			compareKeys: e && typeof e.compareKeys == 'function' ? e.compareKeys : X.compareKeys,
			escapeRegex: lc(e),
			escapeString: ic(e),
			indent: e && e.min ? '' : Mv(e && e.indent !== void 0 ? e.indent : X.indent),
			maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : X.maxDepth,
			min: e && e.min !== void 0 ? e.min : X.min,
			plugins: e && e.plugins !== void 0 ? e.plugins : X.plugins,
			printBasicPrototype:
				(t = e == null ? void 0 : e.printBasicPrototype) !== null && t !== void 0 ? t : !0,
			printFunctionName: oc(e),
			spacingInner:
				e && e.min
					? ' '
					: `
`,
			spacingOuter:
				e && e.min
					? ''
					: `
`,
		}
	}, 'getConfig$1')
function Mv(e) {
	return new Array(e + 1).join(' ')
}
n(Mv, 'createIndent')
function uc(e, t) {
	if (t && (xv(t), t.plugins)) {
		const a = rc(t.plugins, e)
		if (a !== null) return tc(a, e, Wi(t), '', 0, [])
	}
	const r = Zs(e, oc(t), lc(t), ic(t))
	return r !== null ? r : ec(e, Wi(t), '', 0, [])
}
n(uc, 'format')
const Bv = {
	AsymmetricMatcher: vv.default,
	ConvertAnsi: mv.default,
	DOMCollection: bv.default,
	DOMElement: yv.default,
	Immutable: hv.default,
	ReactElement: gv.default,
	ReactTestComponent: Ev.default,
}
Hl = ue.plugins = Bv
var jv = uc
Xs = ue.default = jv
const Iv = dp(
	{
		__proto__: null,
		get DEFAULT_OPTIONS() {
			return nc
		},
		format: Qs,
		get plugins() {
			return Hl
		},
		get default() {
			return Xs
		},
	},
	[ue],
)
var Nv = Object.prototype.toString
function zi(e) {
	return typeof e == 'function' || Nv.call(e) === '[object Function]'
}
n(zi, 'isCallable$2')
function kv(e) {
	var t = Number(e)
	return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t))
}
n(kv, 'toInteger')
var Dv = Math.pow(2, 53) - 1
function Lv(e) {
	var t = kv(e)
	return Math.min(Math.max(t, 0), Dv)
}
n(Lv, 'toLength')
function Q(e, t) {
	var r = Array,
		a = Object(e)
	if (e == null)
		throw new TypeError('Array.from requires an array-like object - not null or undefined')
	if (typeof t < 'u' && !zi(t))
		throw new TypeError('Array.from: when provided, the second argument must be a function')
	for (var o = Lv(a.length), l = zi(r) ? Object(new r(o)) : new Array(o), i = 0, s; i < o; )
		(s = a[i]), t ? (l[i] = t(s, i)) : (l[i] = s), (i += 1)
	return (l.length = o), l
}
n(Q, 'arrayFrom')
function Fv(e, t) {
	if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
}
n(Fv, '_classCallCheck')
function Ki(e, t) {
	for (var r = 0; r < t.length; r++) {
		var a = t[r]
		;(a.enumerable = a.enumerable || !1),
			(a.configurable = !0),
			'value' in a && (a.writable = !0),
			Object.defineProperty(e, a.key, a)
	}
}
n(Ki, '_defineProperties')
function Vv(e, t, r) {
	return (
		t && Ki(e.prototype, t),
		r && Ki(e, r),
		Object.defineProperty(e, 'prototype', { writable: !1 }),
		e
	)
}
n(Vv, '_createClass')
function Uv(e, t, r) {
	return (
		t in e
			? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
			: (e[t] = r),
		e
	)
}
n(Uv, '_defineProperty$2')
var Hv = (function () {
	function e() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
		Fv(this, e), Uv(this, 'items', void 0), (this.items = t)
	}
	return (
		n(e, 'SetLike'),
		Vv(e, [
			{
				key: 'add',
				value: n(function (r) {
					return this.has(r) === !1 && this.items.push(r), this
				}, 'add'),
			},
			{
				key: 'clear',
				value: n(function () {
					this.items = []
				}, 'clear'),
			},
			{
				key: 'delete',
				value: n(function (r) {
					var a = this.items.length
					return (
						(this.items = this.items.filter(function (o) {
							return o !== r
						})),
						a !== this.items.length
					)
				}, '_delete'),
			},
			{
				key: 'forEach',
				value: n(function (r) {
					var a = this
					this.items.forEach(function (o) {
						r(o, o, a)
					})
				}, 'forEach'),
			},
			{
				key: 'has',
				value: n(function (r) {
					return this.items.indexOf(r) !== -1
				}, 'has'),
			},
			{
				key: 'size',
				get: n(function () {
					return this.items.length
				}, 'get'),
			},
		]),
		e
	)
})()
const Wv = typeof Set > 'u' ? Set : Hv
function D(e) {
	var t
	return (t = e.localName) !== null && t !== void 0 ? t : e.tagName.toLowerCase()
}
n(D, 'getLocalName')
var zv = {
		article: 'article',
		aside: 'complementary',
		button: 'button',
		datalist: 'listbox',
		dd: 'definition',
		details: 'group',
		dialog: 'dialog',
		dt: 'term',
		fieldset: 'group',
		figure: 'figure',
		form: 'form',
		footer: 'contentinfo',
		h1: 'heading',
		h2: 'heading',
		h3: 'heading',
		h4: 'heading',
		h5: 'heading',
		h6: 'heading',
		header: 'banner',
		hr: 'separator',
		html: 'document',
		legend: 'legend',
		li: 'listitem',
		math: 'math',
		main: 'main',
		menu: 'list',
		nav: 'navigation',
		ol: 'list',
		optgroup: 'group',
		option: 'option',
		output: 'status',
		progress: 'progressbar',
		section: 'region',
		summary: 'button',
		table: 'table',
		tbody: 'rowgroup',
		textarea: 'textbox',
		tfoot: 'rowgroup',
		td: 'cell',
		th: 'columnheader',
		thead: 'rowgroup',
		tr: 'row',
		ul: 'list',
	},
	Kv = {
		caption: new Set(['aria-label', 'aria-labelledby']),
		code: new Set(['aria-label', 'aria-labelledby']),
		deletion: new Set(['aria-label', 'aria-labelledby']),
		emphasis: new Set(['aria-label', 'aria-labelledby']),
		generic: new Set(['aria-label', 'aria-labelledby', 'aria-roledescription']),
		insertion: new Set(['aria-label', 'aria-labelledby']),
		paragraph: new Set(['aria-label', 'aria-labelledby']),
		presentation: new Set(['aria-label', 'aria-labelledby']),
		strong: new Set(['aria-label', 'aria-labelledby']),
		subscript: new Set(['aria-label', 'aria-labelledby']),
		superscript: new Set(['aria-label', 'aria-labelledby']),
	}
function Gv(e, t) {
	return [
		'aria-atomic',
		'aria-busy',
		'aria-controls',
		'aria-current',
		'aria-describedby',
		'aria-details',
		'aria-dropeffect',
		'aria-flowto',
		'aria-grabbed',
		'aria-hidden',
		'aria-keyshortcuts',
		'aria-label',
		'aria-labelledby',
		'aria-live',
		'aria-owns',
		'aria-relevant',
		'aria-roledescription',
	].some(function (r) {
		var a
		return e.hasAttribute(r) && !((a = Kv[t]) !== null && a !== void 0 && a.has(r))
	})
}
n(Gv, 'hasGlobalAriaAttributes')
function sc(e, t) {
	return Gv(e, t)
}
n(sc, 'ignorePresentationalRole')
function Yv(e) {
	var t = Qv(e)
	if (t === null || t === 'presentation') {
		var r = Xv(e)
		if (t !== 'presentation' || sc(e, r || '')) return r
	}
	return t
}
n(Yv, 'getRole')
function Xv(e) {
	var t = zv[D(e)]
	if (t !== void 0) return t
	switch (D(e)) {
		case 'a':
		case 'area':
		case 'link':
			if (e.hasAttribute('href')) return 'link'
			break
		case 'img':
			return e.getAttribute('alt') === '' && !sc(e, 'img') ? 'presentation' : 'img'
		case 'input': {
			var r = e,
				a = r.type
			switch (a) {
				case 'button':
				case 'image':
				case 'reset':
				case 'submit':
					return 'button'
				case 'checkbox':
				case 'radio':
					return a
				case 'range':
					return 'slider'
				case 'email':
				case 'tel':
				case 'text':
				case 'url':
					return e.hasAttribute('list') ? 'combobox' : 'textbox'
				case 'search':
					return e.hasAttribute('list') ? 'combobox' : 'searchbox'
				case 'number':
					return 'spinbutton'
				default:
					return null
			}
		}
		case 'select':
			return e.hasAttribute('multiple') || e.size > 1 ? 'listbox' : 'combobox'
	}
	return null
}
n(Xv, 'getImplicitRole')
function Qv(e) {
	var t = e.getAttribute('role')
	if (t !== null) {
		var r = t.trim().split(' ')[0]
		if (r.length > 0) return r
	}
	return null
}
n(Qv, 'getExplicitRole')
function B(e) {
	return e !== null && e.nodeType === e.ELEMENT_NODE
}
n(B, 'isElement')
function cc(e) {
	return B(e) && D(e) === 'caption'
}
n(cc, 'isHTMLTableCaptionElement')
function zt(e) {
	return B(e) && D(e) === 'input'
}
n(zt, 'isHTMLInputElement')
function Jv(e) {
	return B(e) && D(e) === 'optgroup'
}
n(Jv, 'isHTMLOptGroupElement')
function Zv(e) {
	return B(e) && D(e) === 'select'
}
n(Zv, 'isHTMLSelectElement')
function em(e) {
	return B(e) && D(e) === 'table'
}
n(em, 'isHTMLTableElement')
function tm(e) {
	return B(e) && D(e) === 'textarea'
}
n(tm, 'isHTMLTextAreaElement')
function rm(e) {
	var t = e.ownerDocument === null ? e : e.ownerDocument,
		r = t.defaultView
	if (r === null) throw new TypeError('no window available')
	return r
}
n(rm, 'safeWindow')
function am(e) {
	return B(e) && D(e) === 'fieldset'
}
n(am, 'isHTMLFieldSetElement')
function nm(e) {
	return B(e) && D(e) === 'legend'
}
n(nm, 'isHTMLLegendElement')
function om(e) {
	return B(e) && D(e) === 'slot'
}
n(om, 'isHTMLSlotElement')
function lm(e) {
	return B(e) && e.ownerSVGElement !== void 0
}
n(lm, 'isSVGElement')
function im(e) {
	return B(e) && D(e) === 'svg'
}
n(im, 'isSVGSVGElement')
function um(e) {
	return lm(e) && D(e) === 'title'
}
n(um, 'isSVGTitleElement')
function rr(e, t) {
	if (B(e) && e.hasAttribute(t)) {
		var r = e.getAttribute(t).split(' '),
			a = e.getRootNode ? e.getRootNode() : e.ownerDocument
		return r
			.map(function (o) {
				return a.getElementById(o)
			})
			.filter(function (o) {
				return o !== null
			})
	}
	return []
}
n(rr, 'queryIdRefs')
function le(e, t) {
	return B(e) ? t.indexOf(Yv(e)) !== -1 : !1
}
n(le, 'hasAnyConcreteRoles')
function sm(e) {
	return e.trim().replace(/\s\s+/g, ' ')
}
n(sm, 'asFlatString')
function cm(e, t) {
	if (!B(e)) return !1
	if (e.hasAttribute('hidden') || e.getAttribute('aria-hidden') === 'true') return !0
	var r = t(e)
	return r.getPropertyValue('display') === 'none' || r.getPropertyValue('visibility') === 'hidden'
}
n(cm, 'isHidden')
function dm(e) {
	return le(e, ['button', 'combobox', 'listbox', 'textbox']) || dc(e, 'range')
}
n(dm, 'isControl')
function dc(e, t) {
	if (!B(e)) return !1
	switch (t) {
		case 'range':
			return le(e, ['meter', 'progressbar', 'scrollbar', 'slider', 'spinbutton'])
		default:
			throw new TypeError(
				"No knowledge about abstract role '".concat(t, "'. This is likely a bug :("),
			)
	}
}
n(dc, 'hasAbstractRole')
function Gi(e, t) {
	var r = Q(e.querySelectorAll(t))
	return (
		rr(e, 'aria-owns').forEach(function (a) {
			r.push.apply(r, Q(a.querySelectorAll(t)))
		}),
		r
	)
}
n(Gi, 'querySelectorAllSubtree')
function fm(e) {
	return Zv(e) ? e.selectedOptions || Gi(e, '[selected]') : Gi(e, '[aria-selected="true"]')
}
n(fm, 'querySelectedOptions')
function pm(e) {
	return le(e, ['none', 'presentation'])
}
n(pm, 'isMarkedPresentational')
function vm(e) {
	return cc(e)
}
n(vm, 'isNativeHostLanguageTextAlternativeElement')
function mm(e) {
	return le(e, [
		'button',
		'cell',
		'checkbox',
		'columnheader',
		'gridcell',
		'heading',
		'label',
		'legend',
		'link',
		'menuitem',
		'menuitemcheckbox',
		'menuitemradio',
		'option',
		'radio',
		'row',
		'rowheader',
		'switch',
		'tab',
		'tooltip',
		'treeitem',
	])
}
n(mm, 'allowsNameFromContent')
function bm(e) {
	return !1
}
n(bm, 'isDescendantOfNativeHostLanguageTextAlternativeElement')
function ym(e) {
	return zt(e) || tm(e) ? e.value : e.textContent || ''
}
n(ym, 'getValueOfTextbox')
function Yi(e) {
	var t = e.getPropertyValue('content')
	return /^["'].*["']$/.test(t) ? t.slice(1, -1) : ''
}
n(Yi, 'getTextualContent')
function fc(e) {
	var t = D(e)
	return (
		t === 'button' ||
		(t === 'input' && e.getAttribute('type') !== 'hidden') ||
		t === 'meter' ||
		t === 'output' ||
		t === 'progress' ||
		t === 'select' ||
		t === 'textarea'
	)
}
n(fc, 'isLabelableElement')
function pc(e) {
	if (fc(e)) return e
	var t = null
	return (
		e.childNodes.forEach(function (r) {
			if (t === null && B(r)) {
				var a = pc(r)
				a !== null && (t = a)
			}
		}),
		t
	)
}
n(pc, 'findLabelableElement')
function hm(e) {
	if (e.control !== void 0) return e.control
	var t = e.getAttribute('for')
	return t !== null ? e.ownerDocument.getElementById(t) : pc(e)
}
n(hm, 'getControlOfLabel')
function gm(e) {
	var t = e.labels
	if (t === null) return t
	if (t !== void 0) return Q(t)
	if (!fc(e)) return null
	var r = e.ownerDocument
	return Q(r.querySelectorAll('label')).filter(function (a) {
		return hm(a) === e
	})
}
n(gm, 'getLabels$1')
function Em(e) {
	var t = e.assignedNodes()
	return t.length === 0 ? Q(e.childNodes) : t
}
n(Em, 'getSlotContents')
function vc(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		r = new Wv(),
		a = rm(e),
		o = t.compute,
		l = o === void 0 ? 'name' : o,
		i = t.computedStyleSupportsPseudoElements,
		s = i === void 0 ? t.getComputedStyle !== void 0 : i,
		u = t.getComputedStyle,
		c = u === void 0 ? a.getComputedStyle.bind(a) : u,
		f = t.hidden,
		p = f === void 0 ? !1 : f
	function m(v, P) {
		var h = ''
		if (B(v) && s) {
			var E = c(v, '::before'),
				T = Yi(E)
			h = ''.concat(T, ' ').concat(h)
		}
		var O = om(v) ? Em(v) : Q(v.childNodes).concat(rr(v, 'aria-owns'))
		if (
			(O.forEach(function (_) {
				var w = C(_, { isEmbeddedInLabel: P.isEmbeddedInLabel, isReferenced: !1, recursion: !0 }),
					Z = B(_) ? c(_).getPropertyValue('display') : 'inline',
					d = Z !== 'inline' ? ' ' : ''
				h += ''.concat(d).concat(w).concat(d)
			}),
			B(v) && s)
		) {
			var q = c(v, '::after'),
				b = Yi(q)
			h = ''.concat(h, ' ').concat(b)
		}
		return h.trim()
	}
	n(m, 'computeMiscTextAlternative')
	function y(v) {
		if (!B(v)) return null
		function P(ft, Jf) {
			var pt = ft.getAttributeNode(Jf)
			return pt !== null && !r.has(pt) && pt.value.trim() !== '' ? (r.add(pt), pt.value) : null
		}
		if ((n(P, 'useAttribute'), am(v))) {
			r.add(v)
			for (var h = Q(v.childNodes), E = 0; E < h.length; E += 1) {
				var T = h[E]
				if (nm(T)) return C(T, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 })
			}
		} else if (em(v)) {
			r.add(v)
			for (var O = Q(v.childNodes), q = 0; q < O.length; q += 1) {
				var b = O[q]
				if (cc(b)) return C(b, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 })
			}
		} else if (im(v)) {
			r.add(v)
			for (var _ = Q(v.childNodes), w = 0; w < _.length; w += 1) {
				var Z = _[w]
				if (um(Z)) return Z.textContent
			}
			return null
		} else if (D(v) === 'img' || D(v) === 'area') {
			var d = P(v, 'alt')
			if (d !== null) return d
		} else if (Jv(v)) {
			var Ae = P(v, 'label')
			if (Ae !== null) return Ae
		}
		if (zt(v) && (v.type === 'button' || v.type === 'submit' || v.type === 'reset')) {
			var Ro = P(v, 'value')
			if (Ro !== null) return Ro
			if (v.type === 'submit') return 'Submit'
			if (v.type === 'reset') return 'Reset'
		}
		var ne = gm(v)
		if (ne !== null && ne.length !== 0)
			return (
				r.add(v),
				Q(ne)
					.map(function (ft) {
						return C(ft, { isEmbeddedInLabel: !0, isReferenced: !1, recursion: !0 })
					})
					.filter(function (ft) {
						return ft.length > 0
					})
					.join(' ')
			)
		if (zt(v) && v.type === 'image') {
			var Nt = P(v, 'alt')
			if (Nt !== null) return Nt
			var kt = P(v, 'title')
			return kt !== null ? kt : 'Submit Query'
		}
		if (le(v, ['button'])) {
			var ji = m(v, { isEmbeddedInLabel: !1, isReferenced: !1 })
			return ji !== '' ? ji : P(v, 'title')
		}
		return P(v, 'title')
	}
	n(y, 'computeElementTextAlternative')
	function C(v, P) {
		if (r.has(v)) return ''
		if (!p && cm(v, c) && !P.isReferenced) return r.add(v), ''
		var h = rr(v, 'aria-labelledby')
		if (l === 'name' && !P.isReferenced && h.length > 0)
			return h
				.map(function (b) {
					return C(b, { isEmbeddedInLabel: P.isEmbeddedInLabel, isReferenced: !0, recursion: !1 })
				})
				.join(' ')
		var E = P.recursion && dm(v) && l === 'name'
		if (!E) {
			var T = ((B(v) && v.getAttribute('aria-label')) || '').trim()
			if (T !== '' && l === 'name') return r.add(v), T
			if (!pm(v)) {
				var O = y(v)
				if (O !== null) return r.add(v), O
			}
		}
		if (le(v, ['menu'])) return r.add(v), ''
		if (E || P.isEmbeddedInLabel || P.isReferenced) {
			if (le(v, ['combobox', 'listbox'])) {
				r.add(v)
				var q = fm(v)
				return q.length === 0
					? zt(v)
						? v.value
						: ''
					: Q(q)
							.map(function (b) {
								return C(b, {
									isEmbeddedInLabel: P.isEmbeddedInLabel,
									isReferenced: !1,
									recursion: !0,
								})
							})
							.join(' ')
			}
			if (dc(v, 'range'))
				return (
					r.add(v),
					v.hasAttribute('aria-valuetext')
						? v.getAttribute('aria-valuetext')
						: v.hasAttribute('aria-valuenow')
						  ? v.getAttribute('aria-valuenow')
						  : v.getAttribute('value') || ''
				)
			if (le(v, ['textbox'])) return r.add(v), ym(v)
		}
		return mm(v) || (B(v) && P.isReferenced) || vm(v) || bm()
			? (r.add(v), m(v, { isEmbeddedInLabel: P.isEmbeddedInLabel, isReferenced: !1 }))
			: v.nodeType === v.TEXT_NODE
			  ? (r.add(v), v.textContent || '')
			  : P.recursion
			    ? (r.add(v), m(v, { isEmbeddedInLabel: P.isEmbeddedInLabel, isReferenced: !1 }))
			    : (r.add(v), '')
	}
	return (
		n(C, 'computeTextAlternative'),
		sm(C(e, { isEmbeddedInLabel: !1, isReferenced: l === 'description', recursion: !1 }))
	)
}
n(vc, 'computeTextAlternative')
function Xi(e, t) {
	var r = Object.keys(e)
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e)
		t &&
			(a = a.filter(function (o) {
				return Object.getOwnPropertyDescriptor(e, o).enumerable
			})),
			r.push.apply(r, a)
	}
	return r
}
n(Xi, 'ownKeys')
function Qi(e) {
	for (var t = 1; t < arguments.length; t++) {
		var r = arguments[t] != null ? arguments[t] : {}
		t % 2
			? Xi(Object(r), !0).forEach(function (a) {
					_m(e, a, r[a])
			  })
			: Object.getOwnPropertyDescriptors
			  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
			  : Xi(Object(r)).forEach(function (a) {
						Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(r, a))
			    })
	}
	return e
}
n(Qi, '_objectSpread')
function _m(e, t, r) {
	return (
		t in e
			? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
			: (e[t] = r),
		e
	)
}
n(_m, '_defineProperty$1')
function mc(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
		r = rr(e, 'aria-describedby')
			.map(function (o) {
				return vc(o, Qi(Qi({}, t), {}, { compute: 'description' }))
			})
			.join(' ')
	if (r === '') {
		var a = e.getAttribute('title')
		r = a === null ? '' : a
	}
	return r
}
n(mc, 'computeAccessibleDescription')
function Rm(e) {
	return le(e, [
		'caption',
		'code',
		'deletion',
		'emphasis',
		'generic',
		'insertion',
		'paragraph',
		'presentation',
		'strong',
		'subscript',
		'superscript',
	])
}
n(Rm, 'prohibitsNaming')
function Kl(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
	return Rm(e) ? '' : vc(e, t)
}
n(Kl, 'computeAccessibleName')
var J = {},
	hr = {},
	Le = {},
	gr = {}
Object.defineProperty(gr, '__esModule', { value: !0 })
gr.default = void 0
function Cm() {
	var e = this,
		t = 0,
		r = {
			'@@iterator': n(function () {
				return r
			}, 'iterator'),
			next: n(function () {
				if (t < e.length) {
					var o = e[t]
					return (t = t + 1), { done: !1, value: o }
				} else return { done: !0 }
			}, 'next'),
		}
	return r
}
n(Cm, 'iteratorProxy')
var Pm = Cm
gr.default = Pm
Object.defineProperty(Le, '__esModule', { value: !0 })
Le.default = qm
var wm = Om(gr)
function Om(e) {
	return e && e.__esModule ? e : { default: e }
}
n(Om, '_interopRequireDefault$a')
function ol(e) {
	return (
		(ol =
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
		ol(e)
	)
}
n(ol, '_typeof')
function qm(e, t) {
	return (
		typeof Symbol == 'function' &&
			ol(Symbol.iterator) === 'symbol' &&
			Object.defineProperty(e, Symbol.iterator, { value: wm.default.bind(t) }),
		e
	)
}
n(qm, 'iterationDecorator')
Object.defineProperty(hr, '__esModule', { value: !0 })
hr.default = void 0
var Tm = $m(Le)
function $m(e) {
	return e && e.__esModule ? e : { default: e }
}
n($m, '_interopRequireDefault$9')
function To(e, t) {
	return Am(e) || Sm(e, t) || bc(e, t) || xm()
}
n(To, '_slicedToArray$4')
function xm() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
n(xm, '_nonIterableRest$4')
function Sm(e, t) {
	var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
	if (r != null) {
		var a = [],
			o = !0,
			l = !1,
			i,
			s
		try {
			for (
				r = r.call(e);
				!(o = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t));
				o = !0
			);
		} catch (u) {
			;(l = !0), (s = u)
		} finally {
			try {
				!o && r.return != null && r.return()
			} finally {
				if (l) throw s
			}
		}
		return a
	}
}
n(Sm, '_iterableToArrayLimit$4')
function Am(e) {
	if (Array.isArray(e)) return e
}
n(Am, '_arrayWithHoles$4')
function Mm(e, t) {
	var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
	if (!r) {
		if (Array.isArray(e) || (r = bc(e)) || (t && e && typeof e.length == 'number')) {
			r && (e = r)
			var a = 0,
				o = n(function () {}, 'F')
			return {
				s: o,
				n: n(function () {
					return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] }
				}, 'n'),
				e: n(function (c) {
					throw c
				}, 'e'),
				f: o,
			}
		}
		throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
	}
	var l = !0,
		i = !1,
		s
	return {
		s: n(function () {
			r = r.call(e)
		}, 's'),
		n: n(function () {
			var c = r.next()
			return (l = c.done), c
		}, 'n'),
		e: n(function (c) {
			;(i = !0), (s = c)
		}, 'e'),
		f: n(function () {
			try {
				!l && r.return != null && r.return()
			} finally {
				if (i) throw s
			}
		}, 'f'),
	}
}
n(Mm, '_createForOfIteratorHelper$4')
function bc(e, t) {
	if (!!e) {
		if (typeof e == 'string') return Ji(e, t)
		var r = Object.prototype.toString.call(e).slice(8, -1)
		if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
			return Array.from(e)
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ji(e, t)
	}
}
n(bc, '_unsupportedIterableToArray$4')
function Ji(e, t) {
	;(t == null || t > e.length) && (t = e.length)
	for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r]
	return a
}
n(Ji, '_arrayLikeToArray$4')
var Ye = [
		['aria-activedescendant', { type: 'id' }],
		['aria-atomic', { type: 'boolean' }],
		['aria-autocomplete', { type: 'token', values: ['inline', 'list', 'both', 'none'] }],
		['aria-busy', { type: 'boolean' }],
		['aria-checked', { type: 'tristate' }],
		['aria-colcount', { type: 'integer' }],
		['aria-colindex', { type: 'integer' }],
		['aria-colspan', { type: 'integer' }],
		['aria-controls', { type: 'idlist' }],
		[
			'aria-current',
			{ type: 'token', values: ['page', 'step', 'location', 'date', 'time', !0, !1] },
		],
		['aria-describedby', { type: 'idlist' }],
		['aria-details', { type: 'id' }],
		['aria-disabled', { type: 'boolean' }],
		[
			'aria-dropeffect',
			{ type: 'tokenlist', values: ['copy', 'execute', 'link', 'move', 'none', 'popup'] },
		],
		['aria-errormessage', { type: 'id' }],
		['aria-expanded', { type: 'boolean', allowundefined: !0 }],
		['aria-flowto', { type: 'idlist' }],
		['aria-grabbed', { type: 'boolean', allowundefined: !0 }],
		[
			'aria-haspopup',
			{ type: 'token', values: [!1, !0, 'menu', 'listbox', 'tree', 'grid', 'dialog'] },
		],
		['aria-hidden', { type: 'boolean', allowundefined: !0 }],
		['aria-invalid', { type: 'token', values: ['grammar', !1, 'spelling', !0] }],
		['aria-keyshortcuts', { type: 'string' }],
		['aria-label', { type: 'string' }],
		['aria-labelledby', { type: 'idlist' }],
		['aria-level', { type: 'integer' }],
		['aria-live', { type: 'token', values: ['assertive', 'off', 'polite'] }],
		['aria-modal', { type: 'boolean' }],
		['aria-multiline', { type: 'boolean' }],
		['aria-multiselectable', { type: 'boolean' }],
		['aria-orientation', { type: 'token', values: ['vertical', 'undefined', 'horizontal'] }],
		['aria-owns', { type: 'idlist' }],
		['aria-placeholder', { type: 'string' }],
		['aria-posinset', { type: 'integer' }],
		['aria-pressed', { type: 'tristate' }],
		['aria-readonly', { type: 'boolean' }],
		['aria-relevant', { type: 'tokenlist', values: ['additions', 'all', 'removals', 'text'] }],
		['aria-required', { type: 'boolean' }],
		['aria-roledescription', { type: 'string' }],
		['aria-rowcount', { type: 'integer' }],
		['aria-rowindex', { type: 'integer' }],
		['aria-rowspan', { type: 'integer' }],
		['aria-selected', { type: 'boolean', allowundefined: !0 }],
		['aria-setsize', { type: 'integer' }],
		['aria-sort', { type: 'token', values: ['ascending', 'descending', 'none', 'other'] }],
		['aria-valuemax', { type: 'number' }],
		['aria-valuemin', { type: 'number' }],
		['aria-valuenow', { type: 'number' }],
		['aria-valuetext', { type: 'string' }],
	],
	ll = {
		entries: n(function () {
			return Ye
		}, 'entries'),
		forEach: n(function (t) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
				a = Mm(Ye),
				o
			try {
				for (a.s(); !(o = a.n()).done; ) {
					var l = To(o.value, 2),
						i = l[0],
						s = l[1]
					t.call(r, s, i, Ye)
				}
			} catch (u) {
				a.e(u)
			} finally {
				a.f()
			}
		}, 'forEach'),
		get: n(function (t) {
			var r = Ye.find(function (a) {
				return a[0] === t
			})
			return r && r[1]
		}, 'get'),
		has: n(function (t) {
			return !!ll.get(t)
		}, 'has'),
		keys: n(function () {
			return Ye.map(function (t) {
				var r = To(t, 1),
					a = r[0]
				return a
			})
		}, 'keys'),
		values: n(function () {
			return Ye.map(function (t) {
				var r = To(t, 2),
					a = r[1]
				return a
			})
		}, 'values'),
	},
	Bm = (0, Tm.default)(ll, ll.entries())
hr.default = Bm
var Er = {}
Object.defineProperty(Er, '__esModule', { value: !0 })
Er.default = void 0
var jm = Im(Le)
function Im(e) {
	return e && e.__esModule ? e : { default: e }
}
n(Im, '_interopRequireDefault$8')
function $o(e, t) {
	return Dm(e) || km(e, t) || yc(e, t) || Nm()
}
n($o, '_slicedToArray$3')
function Nm() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
n(Nm, '_nonIterableRest$3')
function km(e, t) {
	var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
	if (r != null) {
		var a = [],
			o = !0,
			l = !1,
			i,
			s
		try {
			for (
				r = r.call(e);
				!(o = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t));
				o = !0
			);
		} catch (u) {
			;(l = !0), (s = u)
		} finally {
			try {
				!o && r.return != null && r.return()
			} finally {
				if (l) throw s
			}
		}
		return a
	}
}
n(km, '_iterableToArrayLimit$3')
function Dm(e) {
	if (Array.isArray(e)) return e
}
n(Dm, '_arrayWithHoles$3')
function Lm(e, t) {
	var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
	if (!r) {
		if (Array.isArray(e) || (r = yc(e)) || (t && e && typeof e.length == 'number')) {
			r && (e = r)
			var a = 0,
				o = n(function () {}, 'F')
			return {
				s: o,
				n: n(function () {
					return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] }
				}, 'n'),
				e: n(function (c) {
					throw c
				}, 'e'),
				f: o,
			}
		}
		throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
	}
	var l = !0,
		i = !1,
		s
	return {
		s: n(function () {
			r = r.call(e)
		}, 's'),
		n: n(function () {
			var c = r.next()
			return (l = c.done), c
		}, 'n'),
		e: n(function (c) {
			;(i = !0), (s = c)
		}, 'e'),
		f: n(function () {
			try {
				!l && r.return != null && r.return()
			} finally {
				if (i) throw s
			}
		}, 'f'),
	}
}
n(Lm, '_createForOfIteratorHelper$3')
function yc(e, t) {
	if (!!e) {
		if (typeof e == 'string') return Zi(e, t)
		var r = Object.prototype.toString.call(e).slice(8, -1)
		if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
			return Array.from(e)
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zi(e, t)
	}
}
n(yc, '_unsupportedIterableToArray$3')
function Zi(e, t) {
	;(t == null || t > e.length) && (t = e.length)
	for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r]
	return a
}
n(Zi, '_arrayLikeToArray$3')
var Xe = [
		['a', { reserved: !1 }],
		['abbr', { reserved: !1 }],
		['acronym', { reserved: !1 }],
		['address', { reserved: !1 }],
		['applet', { reserved: !1 }],
		['area', { reserved: !1 }],
		['article', { reserved: !1 }],
		['aside', { reserved: !1 }],
		['audio', { reserved: !1 }],
		['b', { reserved: !1 }],
		['base', { reserved: !0 }],
		['bdi', { reserved: !1 }],
		['bdo', { reserved: !1 }],
		['big', { reserved: !1 }],
		['blink', { reserved: !1 }],
		['blockquote', { reserved: !1 }],
		['body', { reserved: !1 }],
		['br', { reserved: !1 }],
		['button', { reserved: !1 }],
		['canvas', { reserved: !1 }],
		['caption', { reserved: !1 }],
		['center', { reserved: !1 }],
		['cite', { reserved: !1 }],
		['code', { reserved: !1 }],
		['col', { reserved: !0 }],
		['colgroup', { reserved: !0 }],
		['content', { reserved: !1 }],
		['data', { reserved: !1 }],
		['datalist', { reserved: !1 }],
		['dd', { reserved: !1 }],
		['del', { reserved: !1 }],
		['details', { reserved: !1 }],
		['dfn', { reserved: !1 }],
		['dialog', { reserved: !1 }],
		['dir', { reserved: !1 }],
		['div', { reserved: !1 }],
		['dl', { reserved: !1 }],
		['dt', { reserved: !1 }],
		['em', { reserved: !1 }],
		['embed', { reserved: !1 }],
		['fieldset', { reserved: !1 }],
		['figcaption', { reserved: !1 }],
		['figure', { reserved: !1 }],
		['font', { reserved: !1 }],
		['footer', { reserved: !1 }],
		['form', { reserved: !1 }],
		['frame', { reserved: !1 }],
		['frameset', { reserved: !1 }],
		['h1', { reserved: !1 }],
		['h2', { reserved: !1 }],
		['h3', { reserved: !1 }],
		['h4', { reserved: !1 }],
		['h5', { reserved: !1 }],
		['h6', { reserved: !1 }],
		['head', { reserved: !0 }],
		['header', { reserved: !1 }],
		['hgroup', { reserved: !1 }],
		['hr', { reserved: !1 }],
		['html', { reserved: !0 }],
		['i', { reserved: !1 }],
		['iframe', { reserved: !1 }],
		['img', { reserved: !1 }],
		['input', { reserved: !1 }],
		['ins', { reserved: !1 }],
		['kbd', { reserved: !1 }],
		['keygen', { reserved: !1 }],
		['label', { reserved: !1 }],
		['legend', { reserved: !1 }],
		['li', { reserved: !1 }],
		['link', { reserved: !0 }],
		['main', { reserved: !1 }],
		['map', { reserved: !1 }],
		['mark', { reserved: !1 }],
		['marquee', { reserved: !1 }],
		['menu', { reserved: !1 }],
		['menuitem', { reserved: !1 }],
		['meta', { reserved: !0 }],
		['meter', { reserved: !1 }],
		['nav', { reserved: !1 }],
		['noembed', { reserved: !0 }],
		['noscript', { reserved: !0 }],
		['object', { reserved: !1 }],
		['ol', { reserved: !1 }],
		['optgroup', { reserved: !1 }],
		['option', { reserved: !1 }],
		['output', { reserved: !1 }],
		['p', { reserved: !1 }],
		['param', { reserved: !0 }],
		['picture', { reserved: !0 }],
		['pre', { reserved: !1 }],
		['progress', { reserved: !1 }],
		['q', { reserved: !1 }],
		['rp', { reserved: !1 }],
		['rt', { reserved: !1 }],
		['rtc', { reserved: !1 }],
		['ruby', { reserved: !1 }],
		['s', { reserved: !1 }],
		['samp', { reserved: !1 }],
		['script', { reserved: !0 }],
		['section', { reserved: !1 }],
		['select', { reserved: !1 }],
		['small', { reserved: !1 }],
		['source', { reserved: !0 }],
		['spacer', { reserved: !1 }],
		['span', { reserved: !1 }],
		['strike', { reserved: !1 }],
		['strong', { reserved: !1 }],
		['style', { reserved: !0 }],
		['sub', { reserved: !1 }],
		['summary', { reserved: !1 }],
		['sup', { reserved: !1 }],
		['table', { reserved: !1 }],
		['tbody', { reserved: !1 }],
		['td', { reserved: !1 }],
		['textarea', { reserved: !1 }],
		['tfoot', { reserved: !1 }],
		['th', { reserved: !1 }],
		['thead', { reserved: !1 }],
		['time', { reserved: !1 }],
		['title', { reserved: !0 }],
		['tr', { reserved: !1 }],
		['track', { reserved: !0 }],
		['tt', { reserved: !1 }],
		['u', { reserved: !1 }],
		['ul', { reserved: !1 }],
		['var', { reserved: !1 }],
		['video', { reserved: !1 }],
		['wbr', { reserved: !1 }],
		['xmp', { reserved: !1 }],
	],
	il = {
		entries: n(function () {
			return Xe
		}, 'entries'),
		forEach: n(function (t) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
				a = Lm(Xe),
				o
			try {
				for (a.s(); !(o = a.n()).done; ) {
					var l = $o(o.value, 2),
						i = l[0],
						s = l[1]
					t.call(r, s, i, Xe)
				}
			} catch (u) {
				a.e(u)
			} finally {
				a.f()
			}
		}, 'forEach'),
		get: n(function (t) {
			var r = Xe.find(function (a) {
				return a[0] === t
			})
			return r && r[1]
		}, 'get'),
		has: n(function (t) {
			return !!il.get(t)
		}, 'has'),
		keys: n(function () {
			return Xe.map(function (t) {
				var r = $o(t, 1),
					a = r[0]
				return a
			})
		}, 'keys'),
		values: n(function () {
			return Xe.map(function (t) {
				var r = $o(t, 2),
					a = r[1]
				return a
			})
		}, 'values'),
	},
	Fm = (0, jm.default)(il, il.entries())
Er.default = Fm
var it = {},
	_r = {},
	Rr = {}
Object.defineProperty(Rr, '__esModule', { value: !0 })
Rr.default = void 0
var Vm = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget']],
	},
	Um = Vm
Rr.default = Um
var Cr = {}
Object.defineProperty(Cr, '__esModule', { value: !0 })
Cr.default = void 0
var Hm = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-activedescendant': null, 'aria-disabled': null },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget']],
	},
	Wm = Hm
Cr.default = Wm
var Pr = {}
Object.defineProperty(Pr, '__esModule', { value: !0 })
Pr.default = void 0
var zm = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-disabled': null },
		relatedConcepts: [{ concept: { name: 'input' }, module: 'XForms' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget']],
	},
	Km = zm
Pr.default = Km
var wr = {}
Object.defineProperty(wr, '__esModule', { value: !0 })
wr.default = void 0
var Gm = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Ym = Gm
wr.default = Ym
var Or = {}
Object.defineProperty(Or, '__esModule', { value: !0 })
Or.default = void 0
var Xm = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-valuemax': null, 'aria-valuemin': null, 'aria-valuenow': null },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']],
	},
	Qm = Xm
Or.default = Qm
var qr = {}
Object.defineProperty(qr, '__esModule', { value: !0 })
qr.default = void 0
var Jm = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {
			'aria-atomic': null,
			'aria-busy': null,
			'aria-controls': null,
			'aria-current': null,
			'aria-describedby': null,
			'aria-details': null,
			'aria-dropeffect': null,
			'aria-flowto': null,
			'aria-grabbed': null,
			'aria-hidden': null,
			'aria-keyshortcuts': null,
			'aria-label': null,
			'aria-labelledby': null,
			'aria-live': null,
			'aria-owns': null,
			'aria-relevant': null,
			'aria-roledescription': null,
		},
		relatedConcepts: [
			{ concept: { name: 'rel' }, module: 'HTML' },
			{ concept: { name: 'role' }, module: 'XHTML' },
			{ concept: { name: 'type' }, module: 'Dublin Core' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [],
	},
	Zm = Jm
qr.default = Zm
var Tr = {}
Object.defineProperty(Tr, '__esModule', { value: !0 })
Tr.default = void 0
var eb = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: 'frontmatter' }, module: 'DTB' },
			{ concept: { name: 'level' }, module: 'DTB' },
			{ concept: { name: 'level' }, module: 'SMIL' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']],
	},
	tb = eb
Tr.default = tb
var $r = {}
Object.defineProperty($r, '__esModule', { value: !0 })
$r.default = void 0
var rb = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']],
	},
	ab = rb
$r.default = ab
var xr = {}
Object.defineProperty(xr, '__esModule', { value: !0 })
xr.default = void 0
var nb = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-orientation': null },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite'],
			['roletype', 'structure', 'section', 'group'],
		],
	},
	ob = nb
xr.default = ob
var Sr = {}
Object.defineProperty(Sr, '__esModule', { value: !0 })
Sr.default = void 0
var lb = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype']],
	},
	ib = lb
Sr.default = ib
var Ar = {}
Object.defineProperty(Ar, '__esModule', { value: !0 })
Ar.default = void 0
var ub = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype']],
	},
	sb = ub
Ar.default = sb
var Mr = {}
Object.defineProperty(Mr, '__esModule', { value: !0 })
Mr.default = void 0
var cb = {
		abstract: !0,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-modal': null },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype']],
	},
	db = cb
Mr.default = db
Object.defineProperty(_r, '__esModule', { value: !0 })
_r.default = void 0
var fb = G(Rr),
	pb = G(Cr),
	vb = G(Pr),
	mb = G(wr),
	bb = G(Or),
	yb = G(qr),
	hb = G(Tr),
	gb = G($r),
	Eb = G(xr),
	_b = G(Sr),
	Rb = G(Ar),
	Cb = G(Mr)
function G(e) {
	return e && e.__esModule ? e : { default: e }
}
n(G, '_interopRequireDefault$7')
var Pb = [
		['command', fb.default],
		['composite', pb.default],
		['input', vb.default],
		['landmark', mb.default],
		['range', bb.default],
		['roletype', yb.default],
		['section', hb.default],
		['sectionhead', gb.default],
		['select', Eb.default],
		['structure', _b.default],
		['widget', Rb.default],
		['window', Cb.default],
	],
	wb = Pb
_r.default = wb
var Br = {},
	jr = {}
Object.defineProperty(jr, '__esModule', { value: !0 })
jr.default = void 0
var Ob = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-atomic': 'true', 'aria-live': 'assertive' },
		relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	qb = Ob
jr.default = qb
var Ir = {}
Object.defineProperty(Ir, '__esModule', { value: !0 })
Ir.default = void 0
var Tb = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'section', 'alert'],
			['roletype', 'window', 'dialog'],
		],
	},
	$b = Tb
Ir.default = $b
var Nr = {}
Object.defineProperty(Nr, '__esModule', { value: !0 })
Nr.default = void 0
var xb = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-activedescendant': null,
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'Device Independence Delivery Unit' } }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']],
	},
	Sb = xb
Nr.default = Sb
var kr = {}
Object.defineProperty(kr, '__esModule', { value: !0 })
kr.default = void 0
var Ab = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-posinset': null, 'aria-setsize': null },
		relatedConcepts: [{ concept: { name: 'article' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'document']],
	},
	Mb = Ab
kr.default = Mb
var Dr = {}
Object.defineProperty(Dr, '__esModule', { value: !0 })
Dr.default = void 0
var Bb = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { constraints: ['direct descendant of document'], name: 'header' },
				module: 'HTML',
			},
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	jb = Bb
Dr.default = jb
var Lr = {}
Object.defineProperty(Lr, '__esModule', { value: !0 })
Lr.default = void 0
var Ib = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Nb = Ib
Lr.default = Nb
var Fr = {}
Object.defineProperty(Fr, '__esModule', { value: !0 })
Fr.default = void 0
var kb = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-pressed': null,
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'aria-pressed' },
						{ name: 'type', value: 'checkbox' },
					],
					name: 'input',
				},
				module: 'HTML',
			},
			{
				concept: { attributes: [{ name: 'aria-expanded', value: 'false' }], name: 'summary' },
				module: 'HTML',
			},
			{
				concept: {
					attributes: [{ name: 'aria-expanded', value: 'true' }],
					constraints: ['direct descendant of details element with the open attribute defined'],
					name: 'summary',
				},
				module: 'HTML',
			},
			{
				concept: { attributes: [{ name: 'type', value: 'button' }], name: 'input' },
				module: 'HTML',
			},
			{
				concept: { attributes: [{ name: 'type', value: 'image' }], name: 'input' },
				module: 'HTML',
			},
			{
				concept: { attributes: [{ name: 'type', value: 'reset' }], name: 'input' },
				module: 'HTML',
			},
			{
				concept: { attributes: [{ name: 'type', value: 'submit' }], name: 'input' },
				module: 'HTML',
			},
			{ concept: { name: 'button' }, module: 'HTML' },
			{ concept: { name: 'trigger' }, module: 'XForms' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command']],
	},
	Db = kb
Fr.default = Db
var Vr = {}
Object.defineProperty(Vr, '__esModule', { value: !0 })
Vr.default = void 0
var Lb = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: ['figure', 'grid', 'table'],
		requiredContextRole: ['figure', 'grid', 'table'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Fb = Lb
Vr.default = Fb
var Ur = {}
Object.defineProperty(Ur, '__esModule', { value: !0 })
Ur.default = void 0
var Vb = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-colindex': null,
			'aria-colspan': null,
			'aria-rowindex': null,
			'aria-rowspan': null,
		},
		relatedConcepts: [
			{ concept: { constraints: ['descendant of table'], name: 'td' }, module: 'HTML' },
		],
		requireContextRole: ['row'],
		requiredContextRole: ['row'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Ub = Vb
Ur.default = Ub
var Hr = {}
Object.defineProperty(Hr, '__esModule', { value: !0 })
Hr.default = void 0
var Hb = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-checked': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-invalid': null,
			'aria-readonly': null,
			'aria-required': null,
		},
		relatedConcepts: [
			{
				concept: { attributes: [{ name: 'type', value: 'checkbox' }], name: 'input' },
				module: 'HTML',
			},
			{ concept: { name: 'option' }, module: 'ARIA' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-checked': null },
		superClass: [['roletype', 'widget', 'input']],
	},
	Wb = Hb
Hr.default = Wb
var Wr = {}
Object.defineProperty(Wr, '__esModule', { value: !0 })
Wr.default = void 0
var zb = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Kb = zb
Wr.default = Kb
var zr = {}
Object.defineProperty(zr, '__esModule', { value: !0 })
zr.default = void 0
var Gb = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-sort': null },
		relatedConcepts: [
			{ attributes: [{ name: 'scope', value: 'col' }], concept: { name: 'th' }, module: 'HTML' },
		],
		requireContextRole: ['row'],
		requiredContextRole: ['row'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'section', 'cell'],
			['roletype', 'structure', 'section', 'cell', 'gridcell'],
			['roletype', 'widget', 'gridcell'],
			['roletype', 'structure', 'sectionhead'],
		],
	},
	Yb = Gb
zr.default = Yb
var Kr = {}
Object.defineProperty(Kr, '__esModule', { value: !0 })
Kr.default = void 0
var Xb = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-activedescendant': null,
			'aria-autocomplete': null,
			'aria-errormessage': null,
			'aria-invalid': null,
			'aria-readonly': null,
			'aria-required': null,
			'aria-expanded': 'false',
			'aria-haspopup': 'listbox',
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'list' },
						{ name: 'type', value: 'email' },
					],
					name: 'input',
				},
				module: 'HTML',
			},
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'list' },
						{ name: 'type', value: 'search' },
					],
					name: 'input',
				},
				module: 'HTML',
			},
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'list' },
						{ name: 'type', value: 'tel' },
					],
					name: 'input',
				},
				module: 'HTML',
			},
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'list' },
						{ name: 'type', value: 'text' },
					],
					name: 'input',
				},
				module: 'HTML',
			},
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'list' },
						{ name: 'type', value: 'url' },
					],
					name: 'input',
				},
				module: 'HTML',
			},
			{
				concept: {
					attributes: [
						{ constraints: ['set'], name: 'list' },
						{ name: 'type', value: 'url' },
					],
					name: 'input',
				},
				module: 'HTML',
			},
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'multiple' },
						{ constraints: ['undefined'], name: 'size' },
					],
					name: 'select',
				},
				module: 'HTML',
			},
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'multiple' },
						{ name: 'size', value: 1 },
					],
					name: 'select',
				},
				module: 'HTML',
			},
			{ concept: { name: 'select' }, module: 'XForms' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-controls': null, 'aria-expanded': 'false' },
		superClass: [['roletype', 'widget', 'input']],
	},
	Qb = Xb
Kr.default = Qb
var Gr = {}
Object.defineProperty(Gr, '__esModule', { value: !0 })
Gr.default = void 0
var Jb = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'aside' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	Zb = Jb
Gr.default = Zb
var Yr = {}
Object.defineProperty(Yr, '__esModule', { value: !0 })
Yr.default = void 0
var ey = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { constraints: ['direct descendant of document'], name: 'footer' },
				module: 'HTML',
			},
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	ty = ey
Yr.default = ty
var Xr = {}
Object.defineProperty(Xr, '__esModule', { value: !0 })
Xr.default = void 0
var ry = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'dd' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	ay = ry
Xr.default = ay
var Qr = {}
Object.defineProperty(Qr, '__esModule', { value: !0 })
Qr.default = void 0
var ny = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	oy = ny
Qr.default = oy
var Jr = {}
Object.defineProperty(Jr, '__esModule', { value: !0 })
Jr.default = void 0
var ly = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'dialog' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'window']],
	},
	iy = ly
Jr.default = iy
var Zr = {}
Object.defineProperty(Zr, '__esModule', { value: !0 })
Zr.default = void 0
var uy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ module: 'DAISY Guide' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'list']],
	},
	sy = uy
Zr.default = sy
var ea = {}
Object.defineProperty(ea, '__esModule', { value: !0 })
ea.default = void 0
var cy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: 'Device Independence Delivery Unit' } },
			{ concept: { name: 'body' }, module: 'HTML' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']],
	},
	dy = cy
ea.default = dy
var ta = {}
Object.defineProperty(ta, '__esModule', { value: !0 })
ta.default = void 0
var fy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	py = fy
ta.default = py
var ra = {}
Object.defineProperty(ra, '__esModule', { value: !0 })
ra.default = void 0
var vy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['article']],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'list']],
	},
	my = vy
ra.default = my
var aa = {}
Object.defineProperty(aa, '__esModule', { value: !0 })
aa.default = void 0
var by = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'figure' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	yy = by
aa.default = yy
var na = {}
Object.defineProperty(na, '__esModule', { value: !0 })
na.default = void 0
var hy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { attributes: [{ constraints: ['set'], name: 'aria-label' }], name: 'form' },
				module: 'HTML',
			},
			{
				concept: { attributes: [{ constraints: ['set'], name: 'aria-labelledby' }], name: 'form' },
				module: 'HTML',
			},
			{
				concept: { attributes: [{ constraints: ['set'], name: 'name' }], name: 'form' },
				module: 'HTML',
			},
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	gy = hy
na.default = gy
var oa = {}
Object.defineProperty(oa, '__esModule', { value: !0 })
oa.default = void 0
var Ey = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [
			{ concept: { name: 'span' }, module: 'HTML' },
			{ concept: { name: 'div' }, module: 'HTML' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']],
	},
	_y = Ey
oa.default = _y
var la = {}
Object.defineProperty(la, '__esModule', { value: !0 })
la.default = void 0
var Ry = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-multiselectable': null, 'aria-readonly': null },
		relatedConcepts: [
			{ concept: { attributes: [{ name: 'role', value: 'grid' }], name: 'table' }, module: 'HTML' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['row'], ['row', 'rowgroup']],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite'],
			['roletype', 'structure', 'section', 'table'],
		],
	},
	Cy = Ry
la.default = Cy
var ia = {}
Object.defineProperty(ia, '__esModule', { value: !0 })
ia.default = void 0
var Py = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
			'aria-readonly': null,
			'aria-required': null,
			'aria-selected': null,
		},
		relatedConcepts: [
			{
				concept: { attributes: [{ name: 'role', value: 'gridcell' }], name: 'td' },
				module: 'HTML',
			},
		],
		requireContextRole: ['row'],
		requiredContextRole: ['row'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'section', 'cell'],
			['roletype', 'widget'],
		],
	},
	wy = Py
ia.default = wy
var ua = {}
Object.defineProperty(ua, '__esModule', { value: !0 })
ua.default = void 0
var Oy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-activedescendant': null, 'aria-disabled': null },
		relatedConcepts: [
			{ concept: { name: 'details' }, module: 'HTML' },
			{ concept: { name: 'fieldset' }, module: 'HTML' },
			{ concept: { name: 'optgroup' }, module: 'HTML' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	qy = Oy
ua.default = qy
var sa = {}
Object.defineProperty(sa, '__esModule', { value: !0 })
sa.default = void 0
var Ty = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-level': '2' },
		relatedConcepts: [
			{ concept: { name: 'h1' }, module: 'HTML' },
			{ concept: { name: 'h2' }, module: 'HTML' },
			{ concept: { name: 'h3' }, module: 'HTML' },
			{ concept: { name: 'h4' }, module: 'HTML' },
			{ concept: { name: 'h5' }, module: 'HTML' },
			{ concept: { name: 'h6' }, module: 'HTML' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-level': '2' },
		superClass: [['roletype', 'structure', 'sectionhead']],
	},
	$y = Ty
sa.default = $y
var ca = {}
Object.defineProperty(ca, '__esModule', { value: !0 })
ca.default = void 0
var xy = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { attributes: [{ constraints: ['set'], name: 'alt' }], name: 'img' },
				module: 'HTML',
			},
			{
				concept: { attributes: [{ constraints: ['undefined'], name: 'alt' }], name: 'img' },
				module: 'HTML',
			},
			{ concept: { name: 'imggroup' }, module: 'DTB' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Sy = xy
ca.default = Sy
var da = {}
Object.defineProperty(da, '__esModule', { value: !0 })
da.default = void 0
var Ay = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	My = Ay
da.default = My
var fa = {}
Object.defineProperty(fa, '__esModule', { value: !0 })
fa.default = void 0
var By = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-disabled': null, 'aria-expanded': null, 'aria-haspopup': null },
		relatedConcepts: [
			{ concept: { attributes: [{ name: 'href' }], name: 'a' }, module: 'HTML' },
			{ concept: { attributes: [{ name: 'href' }], name: 'area' }, module: 'HTML' },
			{ concept: { attributes: [{ name: 'href' }], name: 'link' }, module: 'HTML' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command']],
	},
	jy = By
fa.default = jy
var pa = {}
Object.defineProperty(pa, '__esModule', { value: !0 })
pa.default = void 0
var Iy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: 'menu' }, module: 'HTML' },
			{ concept: { name: 'ol' }, module: 'HTML' },
			{ concept: { name: 'ul' }, module: 'HTML' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['listitem']],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Ny = Iy
pa.default = Ny
var va = {}
Object.defineProperty(va, '__esModule', { value: !0 })
va.default = void 0
var ky = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-invalid': null,
			'aria-multiselectable': null,
			'aria-readonly': null,
			'aria-required': null,
			'aria-orientation': 'vertical',
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [{ constraints: ['>1'], name: 'size' }, { name: 'multiple' }],
					name: 'select',
				},
				module: 'HTML',
			},
			{
				concept: { attributes: [{ constraints: ['>1'], name: 'size' }], name: 'select' },
				module: 'HTML',
			},
			{ concept: { attributes: [{ name: 'multiple' }], name: 'select' }, module: 'HTML' },
			{ concept: { name: 'datalist' }, module: 'HTML' },
			{ concept: { name: 'list' }, module: 'ARIA' },
			{ concept: { name: 'select' }, module: 'XForms' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['option', 'group'], ['option']],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite', 'select'],
			['roletype', 'structure', 'section', 'group', 'select'],
		],
	},
	Dy = ky
va.default = Dy
var ma = {}
Object.defineProperty(ma, '__esModule', { value: !0 })
ma.default = void 0
var Ly = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-level': null, 'aria-posinset': null, 'aria-setsize': null },
		relatedConcepts: [
			{
				concept: { constraints: ['direct descendant of ol, ul or menu'], name: 'li' },
				module: 'HTML',
			},
			{ concept: { name: 'item' }, module: 'XForms' },
		],
		requireContextRole: ['directory', 'list'],
		requiredContextRole: ['directory', 'list'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Fy = Ly
ma.default = Fy
var ba = {}
Object.defineProperty(ba, '__esModule', { value: !0 })
ba.default = void 0
var Vy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-live': 'polite' },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Uy = Vy
ba.default = Uy
var ya = {}
Object.defineProperty(ya, '__esModule', { value: !0 })
ya.default = void 0
var Hy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'main' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	Wy = Hy
ya.default = Wy
var ha = {}
Object.defineProperty(ha, '__esModule', { value: !0 })
ha.default = void 0
var zy = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Ky = zy
ha.default = Ky
var ga = {}
Object.defineProperty(ga, '__esModule', { value: !0 })
ga.default = void 0
var Gy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'math' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Yy = Gy
ga.default = Yy
var Ea = {}
Object.defineProperty(Ea, '__esModule', { value: !0 })
Ea.default = void 0
var Xy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-orientation': 'vertical' },
		relatedConcepts: [
			{ concept: { name: 'MENU' }, module: 'JAPI' },
			{ concept: { name: 'list' }, module: 'ARIA' },
			{ concept: { name: 'select' }, module: 'XForms' },
			{ concept: { name: 'sidebar' }, module: 'DTB' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [
			['menuitem', 'group'],
			['menuitemradio', 'group'],
			['menuitemcheckbox', 'group'],
			['menuitem'],
			['menuitemcheckbox'],
			['menuitemradio'],
		],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite', 'select'],
			['roletype', 'structure', 'section', 'group', 'select'],
		],
	},
	Qy = Xy
Ea.default = Qy
var _a = {}
Object.defineProperty(_a, '__esModule', { value: !0 })
_a.default = void 0
var Jy = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-orientation': 'horizontal' },
		relatedConcepts: [{ concept: { name: 'toolbar' }, module: 'ARIA' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [
			['menuitem', 'group'],
			['menuitemradio', 'group'],
			['menuitemcheckbox', 'group'],
			['menuitem'],
			['menuitemcheckbox'],
			['menuitemradio'],
		],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite', 'select', 'menu'],
			['roletype', 'structure', 'section', 'group', 'select', 'menu'],
		],
	},
	Zy = Jy
_a.default = Zy
var Ra = {}
Object.defineProperty(Ra, '__esModule', { value: !0 })
Ra.default = void 0
var eh = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-posinset': null,
			'aria-setsize': null,
		},
		relatedConcepts: [
			{ concept: { name: 'MENU_ITEM' }, module: 'JAPI' },
			{ concept: { name: 'listitem' }, module: 'ARIA' },
			{ concept: { name: 'menuitem' }, module: 'HTML' },
			{ concept: { name: 'option' }, module: 'ARIA' },
		],
		requireContextRole: ['group', 'menu', 'menubar'],
		requiredContextRole: ['group', 'menu', 'menubar'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command']],
	},
	th = eh
Ra.default = th
var Ca = {}
Object.defineProperty(Ca, '__esModule', { value: !0 })
Ca.default = void 0
var rh = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
		requireContextRole: ['group', 'menu', 'menubar'],
		requiredContextRole: ['group', 'menu', 'menubar'],
		requiredOwnedElements: [],
		requiredProps: { 'aria-checked': null },
		superClass: [
			['roletype', 'widget', 'input', 'checkbox'],
			['roletype', 'widget', 'command', 'menuitem'],
		],
	},
	ah = rh
Ca.default = ah
var Pa = {}
Object.defineProperty(Pa, '__esModule', { value: !0 })
Pa.default = void 0
var nh = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
		requireContextRole: ['group', 'menu', 'menubar'],
		requiredContextRole: ['group', 'menu', 'menubar'],
		requiredOwnedElements: [],
		requiredProps: { 'aria-checked': null },
		superClass: [
			['roletype', 'widget', 'input', 'checkbox', 'menuitemcheckbox'],
			['roletype', 'widget', 'command', 'menuitem', 'menuitemcheckbox'],
			['roletype', 'widget', 'input', 'radio'],
		],
	},
	oh = nh
Pa.default = oh
var wa = {}
Object.defineProperty(wa, '__esModule', { value: !0 })
wa.default = void 0
var lh = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-valuetext': null, 'aria-valuemax': '100', 'aria-valuemin': '0' },
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-valuenow': null },
		superClass: [['roletype', 'structure', 'range']],
	},
	ih = lh
wa.default = ih
var Oa = {}
Object.defineProperty(Oa, '__esModule', { value: !0 })
Oa.default = void 0
var uh = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'nav' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	sh = uh
Oa.default = sh
var qa = {}
Object.defineProperty(qa, '__esModule', { value: !0 })
qa.default = void 0
var ch = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: [],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [],
	},
	dh = ch
qa.default = dh
var Ta = {}
Object.defineProperty(Ta, '__esModule', { value: !0 })
Ta.default = void 0
var fh = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	ph = fh
Ta.default = ph
var $a = {}
Object.defineProperty($a, '__esModule', { value: !0 })
$a.default = void 0
var vh = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-checked': null,
			'aria-posinset': null,
			'aria-setsize': null,
			'aria-selected': 'false',
		},
		relatedConcepts: [
			{ concept: { name: 'item' }, module: 'XForms' },
			{ concept: { name: 'listitem' }, module: 'ARIA' },
			{ concept: { name: 'option' }, module: 'HTML' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-selected': 'false' },
		superClass: [['roletype', 'widget', 'input']],
	},
	mh = vh
$a.default = mh
var xa = {}
Object.defineProperty(xa, '__esModule', { value: !0 })
xa.default = void 0
var bh = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	yh = bh
xa.default = yh
var Sa = {}
Object.defineProperty(Sa, '__esModule', { value: !0 })
Sa.default = void 0
var hh = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']],
	},
	gh = hh
Sa.default = gh
var Aa = {}
Object.defineProperty(Aa, '__esModule', { value: !0 })
Aa.default = void 0
var Eh = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-valuetext': null },
		relatedConcepts: [
			{ concept: { name: 'progress' }, module: 'HTML' },
			{ concept: { name: 'status' }, module: 'ARIA' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'range'],
			['roletype', 'widget'],
		],
	},
	_h = Eh
Aa.default = _h
var Ma = {}
Object.defineProperty(Ma, '__esModule', { value: !0 })
Ma.default = void 0
var Rh = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-checked': null, 'aria-posinset': null, 'aria-setsize': null },
		relatedConcepts: [
			{
				concept: { attributes: [{ name: 'type', value: 'radio' }], name: 'input' },
				module: 'HTML',
			},
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-checked': null },
		superClass: [['roletype', 'widget', 'input']],
	},
	Ch = Rh
Ma.default = Ch
var Ba = {}
Object.defineProperty(Ba, '__esModule', { value: !0 })
Ba.default = void 0
var Ph = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-invalid': null,
			'aria-readonly': null,
			'aria-required': null,
		},
		relatedConcepts: [{ concept: { name: 'list' }, module: 'ARIA' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['radio']],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite', 'select'],
			['roletype', 'structure', 'section', 'group', 'select'],
		],
	},
	wh = Ph
Ba.default = wh
var ja = {}
Object.defineProperty(ja, '__esModule', { value: !0 })
ja.default = void 0
var Oh = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: { attributes: [{ constraints: ['set'], name: 'aria-label' }], name: 'section' },
				module: 'HTML',
			},
			{
				concept: {
					attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
					name: 'section',
				},
				module: 'HTML',
			},
			{ concept: { name: 'Device Independence Glossart perceivable unit' } },
			{ concept: { name: 'frame' }, module: 'HTML' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	qh = Oh
ja.default = qh
var Ia = {}
Object.defineProperty(Ia, '__esModule', { value: !0 })
Ia.default = void 0
var Th = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-colindex': null,
			'aria-expanded': null,
			'aria-level': null,
			'aria-posinset': null,
			'aria-rowindex': null,
			'aria-selected': null,
			'aria-setsize': null,
		},
		relatedConcepts: [{ concept: { name: 'tr' }, module: 'HTML' }],
		requireContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
		requiredContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
		requiredOwnedElements: [['cell'], ['columnheader'], ['gridcell'], ['rowheader']],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'section', 'group'],
			['roletype', 'widget'],
		],
	},
	$h = Th
Ia.default = $h
var Na = {}
Object.defineProperty(Na, '__esModule', { value: !0 })
Na.default = void 0
var xh = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: 'tbody' }, module: 'HTML' },
			{ concept: { name: 'tfoot' }, module: 'HTML' },
			{ concept: { name: 'thead' }, module: 'HTML' },
		],
		requireContextRole: ['grid', 'table', 'treegrid'],
		requiredContextRole: ['grid', 'table', 'treegrid'],
		requiredOwnedElements: [['row']],
		requiredProps: {},
		superClass: [['roletype', 'structure']],
	},
	Sh = xh
Na.default = Sh
var ka = {}
Object.defineProperty(ka, '__esModule', { value: !0 })
ka.default = void 0
var Ah = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-sort': null },
		relatedConcepts: [
			{ concept: { attributes: [{ name: 'scope', value: 'row' }], name: 'th' }, module: 'HTML' },
			{
				concept: { attributes: [{ name: 'scope', value: 'rowgroup' }], name: 'th' },
				module: 'HTML',
			},
		],
		requireContextRole: ['row', 'rowgroup'],
		requiredContextRole: ['row', 'rowgroup'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'section', 'cell'],
			['roletype', 'structure', 'section', 'cell', 'gridcell'],
			['roletype', 'widget', 'gridcell'],
			['roletype', 'structure', 'sectionhead'],
		],
	},
	Mh = Ah
ka.default = Mh
var Da = {}
Object.defineProperty(Da, '__esModule', { value: !0 })
Da.default = void 0
var Bh = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-valuetext': null,
			'aria-orientation': 'vertical',
			'aria-valuemax': '100',
			'aria-valuemin': '0',
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-controls': null, 'aria-valuenow': null },
		superClass: [
			['roletype', 'structure', 'range'],
			['roletype', 'widget'],
		],
	},
	jh = Bh
Da.default = jh
var La = {}
Object.defineProperty(La, '__esModule', { value: !0 })
La.default = void 0
var Ih = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	Nh = Ih
La.default = Nh
var Fa = {}
Object.defineProperty(Fa, '__esModule', { value: !0 })
Fa.default = void 0
var kh = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'list' },
						{ name: 'type', value: 'search' },
					],
					name: 'input',
				},
				module: 'HTML',
			},
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'input', 'textbox']],
	},
	Dh = kh
Fa.default = Dh
var Va = {}
Object.defineProperty(Va, '__esModule', { value: !0 })
Va.default = void 0
var Lh = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-orientation': 'horizontal',
			'aria-valuemax': '100',
			'aria-valuemin': '0',
			'aria-valuenow': null,
			'aria-valuetext': null,
		},
		relatedConcepts: [{ concept: { name: 'hr' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure']],
	},
	Fh = Lh
Va.default = Fh
var Ua = {}
Object.defineProperty(Ua, '__esModule', { value: !0 })
Ua.default = void 0
var Vh = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-haspopup': null,
			'aria-invalid': null,
			'aria-readonly': null,
			'aria-valuetext': null,
			'aria-orientation': 'horizontal',
			'aria-valuemax': '100',
			'aria-valuemin': '0',
		},
		relatedConcepts: [
			{
				concept: { attributes: [{ name: 'type', value: 'range' }], name: 'input' },
				module: 'HTML',
			},
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-valuenow': null },
		superClass: [
			['roletype', 'widget', 'input'],
			['roletype', 'structure', 'range'],
		],
	},
	Uh = Vh
Ua.default = Uh
var Ha = {}
Object.defineProperty(Ha, '__esModule', { value: !0 })
Ha.default = void 0
var Hh = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-invalid': null,
			'aria-readonly': null,
			'aria-required': null,
			'aria-valuetext': null,
			'aria-valuenow': '0',
		},
		relatedConcepts: [
			{
				concept: { attributes: [{ name: 'type', value: 'number' }], name: 'input' },
				module: 'HTML',
			},
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite'],
			['roletype', 'widget', 'input'],
			['roletype', 'structure', 'range'],
		],
	},
	Wh = Hh
Ha.default = Wh
var Wa = {}
Object.defineProperty(Wa, '__esModule', { value: !0 })
Wa.default = void 0
var zh = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-atomic': 'true', 'aria-live': 'polite' },
		relatedConcepts: [{ concept: { name: 'output' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Kh = zh
Wa.default = Kh
var za = {}
Object.defineProperty(za, '__esModule', { value: !0 })
za.default = void 0
var Gh = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Yh = Gh
za.default = Yh
var Ka = {}
Object.defineProperty(Ka, '__esModule', { value: !0 })
Ka.default = void 0
var Xh = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Qh = Xh
Ka.default = Qh
var Ga = {}
Object.defineProperty(Ga, '__esModule', { value: !0 })
Ga.default = void 0
var Jh = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['prohibited'],
		prohibitedProps: ['aria-label', 'aria-labelledby'],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	Zh = Jh
Ga.default = Zh
var Ya = {}
Object.defineProperty(Ya, '__esModule', { value: !0 })
Ya.default = void 0
var eg = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'button' }, module: 'ARIA' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: { 'aria-checked': null },
		superClass: [['roletype', 'widget', 'input', 'checkbox']],
	},
	tg = eg
Ya.default = tg
var Xa = {}
Object.defineProperty(Xa, '__esModule', { value: !0 })
Xa.default = void 0
var rg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-posinset': null,
			'aria-setsize': null,
			'aria-selected': 'false',
		},
		relatedConcepts: [],
		requireContextRole: ['tablist'],
		requiredContextRole: ['tablist'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [
			['roletype', 'structure', 'sectionhead'],
			['roletype', 'widget'],
		],
	},
	ag = rg
Xa.default = ag
var Qa = {}
Object.defineProperty(Qa, '__esModule', { value: !0 })
Qa.default = void 0
var ng = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-colcount': null, 'aria-rowcount': null },
		relatedConcepts: [{ concept: { name: 'table' }, module: 'HTML' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['row'], ['row', 'rowgroup']],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	og = ng
Qa.default = og
var Ja = {}
Object.defineProperty(Ja, '__esModule', { value: !0 })
Ja.default = void 0
var lg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-level': null, 'aria-multiselectable': null, 'aria-orientation': 'horizontal' },
		relatedConcepts: [{ module: 'DAISY', concept: { name: 'guide' } }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['tab']],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'composite']],
	},
	ig = lg
Ja.default = ig
var Za = {}
Object.defineProperty(Za, '__esModule', { value: !0 })
Za.default = void 0
var ug = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	sg = ug
Za.default = sg
var en = {}
Object.defineProperty(en, '__esModule', { value: !0 })
en.default = void 0
var cg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [
			{ concept: { name: 'dfn' }, module: 'HTML' },
			{ concept: { name: 'dt' }, module: 'HTML' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	dg = cg
en.default = dg
var tn = {}
Object.defineProperty(tn, '__esModule', { value: !0 })
tn.default = void 0
var fg = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-activedescendant': null,
			'aria-autocomplete': null,
			'aria-errormessage': null,
			'aria-haspopup': null,
			'aria-invalid': null,
			'aria-multiline': null,
			'aria-placeholder': null,
			'aria-readonly': null,
			'aria-required': null,
		},
		relatedConcepts: [
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'type' },
						{ constraints: ['undefined'], name: 'list' },
					],
					name: 'input',
				},
				module: 'HTML',
			},
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'list' },
						{ name: 'type', value: 'email' },
					],
					name: 'input',
				},
				module: 'HTML',
			},
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'list' },
						{ name: 'type', value: 'tel' },
					],
					name: 'input',
				},
				module: 'HTML',
			},
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'list' },
						{ name: 'type', value: 'text' },
					],
					name: 'input',
				},
				module: 'HTML',
			},
			{
				concept: {
					attributes: [
						{ constraints: ['undefined'], name: 'list' },
						{ name: 'type', value: 'url' },
					],
					name: 'input',
				},
				module: 'HTML',
			},
			{ concept: { name: 'input' }, module: 'XForms' },
			{ concept: { name: 'textarea' }, module: 'HTML' },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'input']],
	},
	pg = fg
tn.default = pg
var rn = {}
Object.defineProperty(rn, '__esModule', { value: !0 })
rn.default = void 0
var vg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	mg = vg
rn.default = mg
var an = {}
Object.defineProperty(an, '__esModule', { value: !0 })
an.default = void 0
var bg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'status']],
	},
	yg = bg
an.default = yg
var nn = {}
Object.defineProperty(nn, '__esModule', { value: !0 })
nn.default = void 0
var hg = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: { 'aria-orientation': 'horizontal' },
		relatedConcepts: [{ concept: { name: 'menubar' }, module: 'ARIA' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'group']],
	},
	gg = hg
nn.default = gg
var on = {}
Object.defineProperty(on, '__esModule', { value: !0 })
on.default = void 0
var Eg = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	_g = Eg
on.default = _g
var ln = {}
Object.defineProperty(ln, '__esModule', { value: !0 })
ln.default = void 0
var Rg = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-invalid': null,
			'aria-multiselectable': null,
			'aria-required': null,
			'aria-orientation': 'vertical',
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['treeitem', 'group'], ['treeitem']],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite', 'select'],
			['roletype', 'structure', 'section', 'group', 'select'],
		],
	},
	Cg = Rg
ln.default = Cg
var un = {}
Object.defineProperty(un, '__esModule', { value: !0 })
un.default = void 0
var Pg = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['row'], ['row', 'rowgroup']],
		requiredProps: {},
		superClass: [
			['roletype', 'widget', 'composite', 'grid'],
			['roletype', 'structure', 'section', 'table', 'grid'],
			['roletype', 'widget', 'composite', 'select', 'tree'],
			['roletype', 'structure', 'section', 'group', 'select', 'tree'],
		],
	},
	wg = Pg
un.default = wg
var sn = {}
Object.defineProperty(sn, '__esModule', { value: !0 })
sn.default = void 0
var Og = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-expanded': null, 'aria-haspopup': null },
		relatedConcepts: [],
		requireContextRole: ['group', 'tree'],
		requiredContextRole: ['group', 'tree'],
		requiredOwnedElements: [],
		requiredProps: { 'aria-selected': null },
		superClass: [
			['roletype', 'structure', 'section', 'listitem'],
			['roletype', 'widget', 'input', 'option'],
		],
	},
	qg = Og
sn.default = qg
Object.defineProperty(Br, '__esModule', { value: !0 })
Br.default = void 0
var Tg = g(jr),
	$g = g(Ir),
	xg = g(Nr),
	Sg = g(kr),
	Ag = g(Dr),
	Mg = g(Lr),
	Bg = g(Fr),
	jg = g(Vr),
	Ig = g(Ur),
	Ng = g(Hr),
	kg = g(Wr),
	Dg = g(zr),
	Lg = g(Kr),
	Fg = g(Gr),
	Vg = g(Yr),
	Ug = g(Xr),
	Hg = g(Qr),
	Wg = g(Jr),
	zg = g(Zr),
	Kg = g(ea),
	Gg = g(ta),
	Yg = g(ra),
	Xg = g(aa),
	Qg = g(na),
	Jg = g(oa),
	Zg = g(la),
	eE = g(ia),
	tE = g(ua),
	rE = g(sa),
	aE = g(ca),
	nE = g(da),
	oE = g(fa),
	lE = g(pa),
	iE = g(va),
	uE = g(ma),
	sE = g(ba),
	cE = g(ya),
	dE = g(ha),
	fE = g(ga),
	pE = g(Ea),
	vE = g(_a),
	mE = g(Ra),
	bE = g(Ca),
	yE = g(Pa),
	hE = g(wa),
	gE = g(Oa),
	EE = g(qa),
	_E = g(Ta),
	RE = g($a),
	CE = g(xa),
	PE = g(Sa),
	wE = g(Aa),
	OE = g(Ma),
	qE = g(Ba),
	TE = g(ja),
	$E = g(Ia),
	xE = g(Na),
	SE = g(ka),
	AE = g(Da),
	ME = g(La),
	BE = g(Fa),
	jE = g(Va),
	IE = g(Ua),
	NE = g(Ha),
	kE = g(Wa),
	DE = g(za),
	LE = g(Ka),
	FE = g(Ga),
	VE = g(Ya),
	UE = g(Xa),
	HE = g(Qa),
	WE = g(Ja),
	zE = g(Za),
	KE = g(en),
	GE = g(tn),
	YE = g(rn),
	XE = g(an),
	QE = g(nn),
	JE = g(on),
	ZE = g(ln),
	e_ = g(un),
	t_ = g(sn)
function g(e) {
	return e && e.__esModule ? e : { default: e }
}
n(g, '_interopRequireDefault$6')
var r_ = [
		['alert', Tg.default],
		['alertdialog', $g.default],
		['application', xg.default],
		['article', Sg.default],
		['banner', Ag.default],
		['blockquote', Mg.default],
		['button', Bg.default],
		['caption', jg.default],
		['cell', Ig.default],
		['checkbox', Ng.default],
		['code', kg.default],
		['columnheader', Dg.default],
		['combobox', Lg.default],
		['complementary', Fg.default],
		['contentinfo', Vg.default],
		['definition', Ug.default],
		['deletion', Hg.default],
		['dialog', Wg.default],
		['directory', zg.default],
		['document', Kg.default],
		['emphasis', Gg.default],
		['feed', Yg.default],
		['figure', Xg.default],
		['form', Qg.default],
		['generic', Jg.default],
		['grid', Zg.default],
		['gridcell', eE.default],
		['group', tE.default],
		['heading', rE.default],
		['img', aE.default],
		['insertion', nE.default],
		['link', oE.default],
		['list', lE.default],
		['listbox', iE.default],
		['listitem', uE.default],
		['log', sE.default],
		['main', cE.default],
		['marquee', dE.default],
		['math', fE.default],
		['menu', pE.default],
		['menubar', vE.default],
		['menuitem', mE.default],
		['menuitemcheckbox', bE.default],
		['menuitemradio', yE.default],
		['meter', hE.default],
		['navigation', gE.default],
		['none', EE.default],
		['note', _E.default],
		['option', RE.default],
		['paragraph', CE.default],
		['presentation', PE.default],
		['progressbar', wE.default],
		['radio', OE.default],
		['radiogroup', qE.default],
		['region', TE.default],
		['row', $E.default],
		['rowgroup', xE.default],
		['rowheader', SE.default],
		['scrollbar', AE.default],
		['search', ME.default],
		['searchbox', BE.default],
		['separator', jE.default],
		['slider', IE.default],
		['spinbutton', NE.default],
		['status', kE.default],
		['strong', DE.default],
		['subscript', LE.default],
		['superscript', FE.default],
		['switch', VE.default],
		['tab', UE.default],
		['table', HE.default],
		['tablist', WE.default],
		['tabpanel', zE.default],
		['term', KE.default],
		['textbox', GE.default],
		['time', YE.default],
		['timer', XE.default],
		['toolbar', QE.default],
		['tooltip', JE.default],
		['tree', ZE.default],
		['treegrid', e_.default],
		['treeitem', t_.default],
	],
	a_ = r_
Br.default = a_
var cn = {},
	dn = {}
Object.defineProperty(dn, '__esModule', { value: !0 })
dn.default = void 0
var n_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'abstract [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	o_ = n_
dn.default = o_
var fn = {}
Object.defineProperty(fn, '__esModule', { value: !0 })
fn.default = void 0
var l_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'acknowledgments [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	i_ = l_
fn.default = i_
var pn = {}
Object.defineProperty(pn, '__esModule', { value: !0 })
pn.default = void 0
var u_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'afterword [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	s_ = u_
pn.default = s_
var vn = {}
Object.defineProperty(vn, '__esModule', { value: !0 })
vn.default = void 0
var c_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'appendix [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	d_ = c_
vn.default = d_
var mn = {}
Object.defineProperty(mn, '__esModule', { value: !0 })
mn.default = void 0
var f_ = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'content'],
		prohibitedProps: [],
		props: { 'aria-errormessage': null, 'aria-invalid': null },
		relatedConcepts: [{ concept: { name: 'referrer [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command', 'link']],
	},
	p_ = f_
mn.default = p_
var bn = {}
Object.defineProperty(bn, '__esModule', { value: !0 })
bn.default = void 0
var v_ = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'EPUB biblioentry [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: ['doc-bibliography'],
		requiredContextRole: ['doc-bibliography'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'listitem']],
	},
	m_ = v_
bn.default = m_
var yn = {}
Object.defineProperty(yn, '__esModule', { value: !0 })
yn.default = void 0
var b_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'bibliography [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['doc-biblioentry']],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	y_ = b_
yn.default = y_
var hn = {}
Object.defineProperty(hn, '__esModule', { value: !0 })
hn.default = void 0
var h_ = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-errormessage': null, 'aria-invalid': null },
		relatedConcepts: [{ concept: { name: 'biblioref [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command', 'link']],
	},
	g_ = h_
hn.default = g_
var gn = {}
Object.defineProperty(gn, '__esModule', { value: !0 })
gn.default = void 0
var E_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'chapter [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	__ = E_
gn.default = __
var En = {}
Object.defineProperty(En, '__esModule', { value: !0 })
En.default = void 0
var R_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'colophon [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	C_ = R_
En.default = C_
var _n = {}
Object.defineProperty(_n, '__esModule', { value: !0 })
_n.default = void 0
var P_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'conclusion [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	w_ = P_
_n.default = w_
var Rn = {}
Object.defineProperty(Rn, '__esModule', { value: !0 })
Rn.default = void 0
var O_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'cover [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'img']],
	},
	q_ = O_
Rn.default = q_
var Cn = {}
Object.defineProperty(Cn, '__esModule', { value: !0 })
Cn.default = void 0
var T_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'credit [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	$_ = T_
Cn.default = $_
var Pn = {}
Object.defineProperty(Pn, '__esModule', { value: !0 })
Pn.default = void 0
var x_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'credits [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	S_ = x_
Pn.default = S_
var wn = {}
Object.defineProperty(wn, '__esModule', { value: !0 })
wn.default = void 0
var A_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'dedication [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	M_ = A_
wn.default = M_
var On = {}
Object.defineProperty(On, '__esModule', { value: !0 })
On.default = void 0
var B_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'rearnote [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: ['doc-endnotes'],
		requiredContextRole: ['doc-endnotes'],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'listitem']],
	},
	j_ = B_
On.default = j_
var qn = {}
Object.defineProperty(qn, '__esModule', { value: !0 })
qn.default = void 0
var I_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'rearnotes [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['doc-endnote']],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	N_ = I_
qn.default = N_
var Tn = {}
Object.defineProperty(Tn, '__esModule', { value: !0 })
Tn.default = void 0
var k_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'epigraph [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	D_ = k_
Tn.default = D_
var $n = {}
Object.defineProperty($n, '__esModule', { value: !0 })
$n.default = void 0
var L_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'epilogue [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	F_ = L_
$n.default = F_
var xn = {}
Object.defineProperty(xn, '__esModule', { value: !0 })
xn.default = void 0
var V_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'errata [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	U_ = V_
xn.default = U_
var Sn = {}
Object.defineProperty(Sn, '__esModule', { value: !0 })
Sn.default = void 0
var H_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	W_ = H_
Sn.default = W_
var An = {}
Object.defineProperty(An, '__esModule', { value: !0 })
An.default = void 0
var z_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'footnote [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	K_ = z_
An.default = K_
var Mn = {}
Object.defineProperty(Mn, '__esModule', { value: !0 })
Mn.default = void 0
var G_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'foreword [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	Y_ = G_
Mn.default = Y_
var Bn = {}
Object.defineProperty(Bn, '__esModule', { value: !0 })
Bn.default = void 0
var X_ = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'glossary [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [['definition'], ['term']],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	Q_ = X_
Bn.default = Q_
var jn = {}
Object.defineProperty(jn, '__esModule', { value: !0 })
jn.default = void 0
var J_ = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-errormessage': null, 'aria-invalid': null },
		relatedConcepts: [{ concept: { name: 'glossref [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command', 'link']],
	},
	Z_ = J_
jn.default = Z_
var In = {}
Object.defineProperty(In, '__esModule', { value: !0 })
In.default = void 0
var eR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'index [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']],
	},
	tR = eR
In.default = tR
var Nn = {}
Object.defineProperty(Nn, '__esModule', { value: !0 })
Nn.default = void 0
var rR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'introduction [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	aR = rR
Nn.default = aR
var kn = {}
Object.defineProperty(kn, '__esModule', { value: !0 })
kn.default = void 0
var nR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: { 'aria-errormessage': null, 'aria-invalid': null },
		relatedConcepts: [{ concept: { name: 'noteref [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'widget', 'command', 'link']],
	},
	oR = nR
kn.default = oR
var Dn = {}
Object.defineProperty(Dn, '__esModule', { value: !0 })
Dn.default = void 0
var lR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'notice [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'note']],
	},
	iR = lR
Dn.default = iR
var Ln = {}
Object.defineProperty(Ln, '__esModule', { value: !0 })
Ln.default = void 0
var uR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'pagebreak [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'separator']],
	},
	sR = uR
Ln.default = sR
var Fn = {}
Object.defineProperty(Fn, '__esModule', { value: !0 })
Fn.default = void 0
var cR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'page-list [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']],
	},
	dR = cR
Fn.default = dR
var Vn = {}
Object.defineProperty(Vn, '__esModule', { value: !0 })
Vn.default = void 0
var fR = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'part [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	pR = fR
Vn.default = pR
var Un = {}
Object.defineProperty(Un, '__esModule', { value: !0 })
Un.default = void 0
var vR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'preface [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	mR = vR
Un.default = mR
var Hn = {}
Object.defineProperty(Hn, '__esModule', { value: !0 })
Hn.default = void 0
var bR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'prologue [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark']],
	},
	yR = bR
Hn.default = yR
var Wn = {}
Object.defineProperty(Wn, '__esModule', { value: !0 })
Wn.default = void 0
var hR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {},
		relatedConcepts: [{ concept: { name: 'pullquote [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['none']],
	},
	gR = hR
Wn.default = gR
var zn = {}
Object.defineProperty(zn, '__esModule', { value: !0 })
zn.default = void 0
var ER = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'qna [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section']],
	},
	_R = ER
zn.default = _R
var Kn = {}
Object.defineProperty(Kn, '__esModule', { value: !0 })
Kn.default = void 0
var RR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'subtitle [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'sectionhead']],
	},
	CR = RR
Kn.default = CR
var Gn = {}
Object.defineProperty(Gn, '__esModule', { value: !0 })
Gn.default = void 0
var PR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'help [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'note']],
	},
	wR = PR
Gn.default = wR
var Yn = {}
Object.defineProperty(Yn, '__esModule', { value: !0 })
Yn.default = void 0
var OR = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [{ concept: { name: 'toc [EPUB-SSV]' }, module: 'EPUB' }],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']],
	},
	qR = OR
Yn.default = qR
Object.defineProperty(cn, '__esModule', { value: !0 })
cn.default = void 0
var TR = $(dn),
	$R = $(fn),
	xR = $(pn),
	SR = $(vn),
	AR = $(mn),
	MR = $(bn),
	BR = $(yn),
	jR = $(hn),
	IR = $(gn),
	NR = $(En),
	kR = $(_n),
	DR = $(Rn),
	LR = $(Cn),
	FR = $(Pn),
	VR = $(wn),
	UR = $(On),
	HR = $(qn),
	WR = $(Tn),
	zR = $($n),
	KR = $(xn),
	GR = $(Sn),
	YR = $(An),
	XR = $(Mn),
	QR = $(Bn),
	JR = $(jn),
	ZR = $(In),
	eC = $(Nn),
	tC = $(kn),
	rC = $(Dn),
	aC = $(Ln),
	nC = $(Fn),
	oC = $(Vn),
	lC = $(Un),
	iC = $(Hn),
	uC = $(Wn),
	sC = $(zn),
	cC = $(Kn),
	dC = $(Gn),
	fC = $(Yn)
function $(e) {
	return e && e.__esModule ? e : { default: e }
}
n($, '_interopRequireDefault$5')
var pC = [
		['doc-abstract', TR.default],
		['doc-acknowledgments', $R.default],
		['doc-afterword', xR.default],
		['doc-appendix', SR.default],
		['doc-backlink', AR.default],
		['doc-biblioentry', MR.default],
		['doc-bibliography', BR.default],
		['doc-biblioref', jR.default],
		['doc-chapter', IR.default],
		['doc-colophon', NR.default],
		['doc-conclusion', kR.default],
		['doc-cover', DR.default],
		['doc-credit', LR.default],
		['doc-credits', FR.default],
		['doc-dedication', VR.default],
		['doc-endnote', UR.default],
		['doc-endnotes', HR.default],
		['doc-epigraph', WR.default],
		['doc-epilogue', zR.default],
		['doc-errata', KR.default],
		['doc-example', GR.default],
		['doc-footnote', YR.default],
		['doc-foreword', XR.default],
		['doc-glossary', QR.default],
		['doc-glossref', JR.default],
		['doc-index', ZR.default],
		['doc-introduction', eC.default],
		['doc-noteref', tC.default],
		['doc-notice', rC.default],
		['doc-pagebreak', aC.default],
		['doc-pagelist', nC.default],
		['doc-part', oC.default],
		['doc-preface', lC.default],
		['doc-prologue', iC.default],
		['doc-pullquote', uC.default],
		['doc-qna', sC.default],
		['doc-subtitle', cC.default],
		['doc-tip', dC.default],
		['doc-toc', fC.default],
	],
	vC = pC
cn.default = vC
var Xn = {},
	Qn = {}
Object.defineProperty(Qn, '__esModule', { value: !0 })
Qn.default = void 0
var mC = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [
			{ module: 'GRAPHICS', concept: { name: 'graphics-object' } },
			{ module: 'ARIA', concept: { name: 'img' } },
			{ module: 'ARIA', concept: { name: 'article' } },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'document']],
	},
	bC = mC
Qn.default = bC
var Jn = {}
Object.defineProperty(Jn, '__esModule', { value: !0 })
Jn.default = void 0
var yC = {
		abstract: !1,
		accessibleNameRequired: !1,
		baseConcepts: [],
		childrenPresentational: !1,
		nameFrom: ['author', 'contents'],
		prohibitedProps: [],
		props: {
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [
			{ module: 'GRAPHICS', concept: { name: 'graphics-document' } },
			{ module: 'ARIA', concept: { name: 'group' } },
			{ module: 'ARIA', concept: { name: 'img' } },
			{ module: 'GRAPHICS', concept: { name: 'graphics-symbol' } },
		],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'group']],
	},
	hC = yC
Jn.default = hC
var Zn = {}
Object.defineProperty(Zn, '__esModule', { value: !0 })
Zn.default = void 0
var gC = {
		abstract: !1,
		accessibleNameRequired: !0,
		baseConcepts: [],
		childrenPresentational: !0,
		nameFrom: ['author'],
		prohibitedProps: [],
		props: {
			'aria-disabled': null,
			'aria-errormessage': null,
			'aria-expanded': null,
			'aria-haspopup': null,
			'aria-invalid': null,
		},
		relatedConcepts: [],
		requireContextRole: [],
		requiredContextRole: [],
		requiredOwnedElements: [],
		requiredProps: {},
		superClass: [['roletype', 'structure', 'section', 'img']],
	},
	EC = gC
Zn.default = EC
Object.defineProperty(Xn, '__esModule', { value: !0 })
Xn.default = void 0
var _C = Gl(Qn),
	RC = Gl(Jn),
	CC = Gl(Zn)
function Gl(e) {
	return e && e.__esModule ? e : { default: e }
}
n(Gl, '_interopRequireDefault$4')
var PC = [
		['graphics-document', _C.default],
		['graphics-object', RC.default],
		['graphics-symbol', CC.default],
	],
	wC = PC
Xn.default = wC
Object.defineProperty(it, '__esModule', { value: !0 })
it.default = void 0
var OC = qt(_r),
	qC = qt(Br),
	TC = qt(cn),
	$C = qt(Xn),
	xC = qt(Le)
function qt(e) {
	return e && e.__esModule ? e : { default: e }
}
n(qt, '_interopRequireDefault$3')
function SC(e, t, r) {
	return (
		t in e
			? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
			: (e[t] = r),
		e
	)
}
n(SC, '_defineProperty')
function ul(e, t) {
	var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
	if (!r) {
		if (Array.isArray(e) || (r = hc(e)) || (t && e && typeof e.length == 'number')) {
			r && (e = r)
			var a = 0,
				o = n(function () {}, 'F')
			return {
				s: o,
				n: n(function () {
					return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] }
				}, 'n'),
				e: n(function (c) {
					throw c
				}, 'e'),
				f: o,
			}
		}
		throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
	}
	var l = !0,
		i = !1,
		s
	return {
		s: n(function () {
			r = r.call(e)
		}, 's'),
		n: n(function () {
			var c = r.next()
			return (l = c.done), c
		}, 'n'),
		e: n(function (c) {
			;(i = !0), (s = c)
		}, 'e'),
		f: n(function () {
			try {
				!l && r.return != null && r.return()
			} finally {
				if (i) throw s
			}
		}, 'f'),
	}
}
n(ul, '_createForOfIteratorHelper$2')
function yt(e, t) {
	return BC(e) || MC(e, t) || hc(e, t) || AC()
}
n(yt, '_slicedToArray$2')
function AC() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
n(AC, '_nonIterableRest$2')
function hc(e, t) {
	if (!!e) {
		if (typeof e == 'string') return eu(e, t)
		var r = Object.prototype.toString.call(e).slice(8, -1)
		if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
			return Array.from(e)
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return eu(e, t)
	}
}
n(hc, '_unsupportedIterableToArray$2')
function eu(e, t) {
	;(t == null || t > e.length) && (t = e.length)
	for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r]
	return a
}
n(eu, '_arrayLikeToArray$2')
function MC(e, t) {
	var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
	if (r != null) {
		var a = [],
			o = !0,
			l = !1,
			i,
			s
		try {
			for (
				r = r.call(e);
				!(o = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t));
				o = !0
			);
		} catch (u) {
			;(l = !0), (s = u)
		} finally {
			try {
				!o && r.return != null && r.return()
			} finally {
				if (l) throw s
			}
		}
		return a
	}
}
n(MC, '_iterableToArrayLimit$2')
function BC(e) {
	if (Array.isArray(e)) return e
}
n(BC, '_arrayWithHoles$2')
var ye = [].concat(OC.default, qC.default, TC.default, $C.default)
ye.forEach(function (e) {
	var t = yt(e, 2),
		r = t[1],
		a = ul(r.superClass),
		o
	try {
		for (a.s(); !(o = a.n()).done; ) {
			var l = o.value,
				i = ul(l),
				s
			try {
				var u = n(function () {
					var f = s.value,
						p = ye.find(function (P) {
							var h = yt(P, 1),
								E = h[0]
							return E === f
						})
					if (p)
						for (var m = p[1], y = 0, C = Object.keys(m.props); y < C.length; y++) {
							var v = C[y]
							Object.prototype.hasOwnProperty.call(r.props, v) ||
								Object.assign(r.props, SC({}, v, m.props[v]))
						}
				}, '_loop')
				for (i.s(); !(s = i.n()).done; ) u()
			} catch (c) {
				i.e(c)
			} finally {
				i.f()
			}
		}
	} catch (c) {
		a.e(c)
	} finally {
		a.f()
	}
})
var sl = {
		entries: n(function () {
			return ye
		}, 'entries'),
		forEach: n(function (t) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
				a = ul(ye),
				o
			try {
				for (a.s(); !(o = a.n()).done; ) {
					var l = yt(o.value, 2),
						i = l[0],
						s = l[1]
					t.call(r, s, i, ye)
				}
			} catch (u) {
				a.e(u)
			} finally {
				a.f()
			}
		}, 'forEach'),
		get: n(function (t) {
			var r = ye.find(function (a) {
				return a[0] === t
			})
			return r && r[1]
		}, 'get'),
		has: n(function (t) {
			return !!sl.get(t)
		}, 'has'),
		keys: n(function () {
			return ye.map(function (t) {
				var r = yt(t, 1),
					a = r[0]
				return a
			})
		}, 'keys'),
		values: n(function () {
			return ye.map(function (t) {
				var r = yt(t, 2),
					a = r[1]
				return a
			})
		}, 'values'),
	},
	jC = (0, xC.default)(sl, sl.entries())
it.default = jC
var eo = {},
	tu = Object.prototype.toString,
	gc = n(function (t) {
		var r = tu.call(t),
			a = r === '[object Arguments]'
		return (
			a ||
				(a =
					r !== '[object Array]' &&
					t !== null &&
					typeof t == 'object' &&
					typeof t.length == 'number' &&
					t.length >= 0 &&
					tu.call(t.callee) === '[object Function]'),
			a
		)
	}, 'isArguments'),
	xo,
	ru
function IC() {
	if (ru) return xo
	ru = 1
	var e
	if (!Object.keys) {
		var t = Object.prototype.hasOwnProperty,
			r = Object.prototype.toString,
			a = gc,
			o = Object.prototype.propertyIsEnumerable,
			l = !o.call({ toString: null }, 'toString'),
			i = o.call(function () {}, 'prototype'),
			s = [
				'toString',
				'toLocaleString',
				'valueOf',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'constructor',
			],
			u = n(function (m) {
				var y = m.constructor
				return y && y.prototype === m
			}, 'equalsConstructorPrototype'),
			c = {
				$applicationCache: !0,
				$console: !0,
				$external: !0,
				$frame: !0,
				$frameElement: !0,
				$frames: !0,
				$innerHeight: !0,
				$innerWidth: !0,
				$onmozfullscreenchange: !0,
				$onmozfullscreenerror: !0,
				$outerHeight: !0,
				$outerWidth: !0,
				$pageXOffset: !0,
				$pageYOffset: !0,
				$parent: !0,
				$scrollLeft: !0,
				$scrollTop: !0,
				$scrollX: !0,
				$scrollY: !0,
				$self: !0,
				$webkitIndexedDB: !0,
				$webkitStorageInfo: !0,
				$window: !0,
			},
			f = (function () {
				if (typeof window > 'u') return !1
				for (var m in window)
					try {
						if (
							!c['$' + m] &&
							t.call(window, m) &&
							window[m] !== null &&
							typeof window[m] == 'object'
						)
							try {
								u(window[m])
							} catch {
								return !0
							}
					} catch {
						return !0
					}
				return !1
			})(),
			p = n(function (m) {
				if (typeof window > 'u' || !f) return u(m)
				try {
					return u(m)
				} catch {
					return !1
				}
			}, 'equalsConstructorPrototypeIfNotBuggy')
		e = n(function (y) {
			var C = y !== null && typeof y == 'object',
				v = r.call(y) === '[object Function]',
				P = a(y),
				h = C && r.call(y) === '[object String]',
				E = []
			if (!C && !v && !P) throw new TypeError('Object.keys called on a non-object')
			var T = i && v
			if (h && y.length > 0 && !t.call(y, 0)) for (var O = 0; O < y.length; ++O) E.push(String(O))
			if (P && y.length > 0) for (var q = 0; q < y.length; ++q) E.push(String(q))
			else for (var b in y) !(T && b === 'prototype') && t.call(y, b) && E.push(String(b))
			if (l)
				for (var _ = p(y), w = 0; w < s.length; ++w)
					!(_ && s[w] === 'constructor') && t.call(y, s[w]) && E.push(s[w])
			return E
		}, 'keys')
	}
	return (xo = e), xo
}
n(IC, 'requireImplementation')
var NC = Array.prototype.slice,
	kC = gc,
	au = Object.keys,
	Kt = au
		? n(function (t) {
				return au(t)
		  }, 'keys')
		: IC(),
	nu = Object.keys
Kt.shim = n(function () {
	if (Object.keys) {
		var t = (function () {
			var r = Object.keys(arguments)
			return r && r.length === arguments.length
		})(1, 2)
		t ||
			(Object.keys = n(function (a) {
				return kC(a) ? nu(NC.call(a)) : nu(a)
			}, 'keys'))
	} else Object.keys = Kt
	return Object.keys || Kt
}, 'shimObjectKeys')
var Yl = Kt,
	DC = De(),
	LC = $e,
	cl = LC('Object.prototype.toString'),
	to = n(function (t) {
		return DC && t && typeof t == 'object' && Symbol.toStringTag in t
			? !1
			: cl(t) === '[object Arguments]'
	}, 'isArguments'),
	Ec = n(function (t) {
		return to(t)
			? !0
			: t !== null &&
					typeof t == 'object' &&
					typeof t.length == 'number' &&
					t.length >= 0 &&
					cl(t) !== '[object Array]' &&
					cl(t.callee) === '[object Function]'
	}, 'isArguments'),
	FC = (function () {
		return to(arguments)
	})()
to.isLegacyArguments = Ec
var _c = FC ? to : Ec,
	VC = Ot,
	dl = VC('%Object.defineProperty%', !0),
	fl = n(function () {
		if (dl)
			try {
				return dl({}, 'a', { value: 1 }), !0
			} catch {
				return !1
			}
		return !1
	}, 'hasPropertyDescriptors')
fl.hasArrayLengthDefineBug = n(function () {
	if (!fl()) return null
	try {
		return dl([], 'length', { value: 1 }).length !== 1
	} catch {
		return !0
	}
}, 'hasArrayLengthDefineBug')
var UC = fl,
	HC = Yl,
	WC = typeof Symbol == 'function' && typeof Symbol('foo') == 'symbol',
	zC = Object.prototype.toString,
	KC = Array.prototype.concat,
	Rc = Object.defineProperty,
	GC = n(function (e) {
		return typeof e == 'function' && zC.call(e) === '[object Function]'
	}, 'isFunction'),
	YC = UC(),
	Cc = Rc && YC,
	XC = n(function (e, t, r, a) {
		;(t in e && (!GC(a) || !a())) ||
			(Cc ? Rc(e, t, { configurable: !0, enumerable: !1, value: r, writable: !0 }) : (e[t] = r))
	}, 'defineProperty$1'),
	Pc = n(function (e, t) {
		var r = arguments.length > 2 ? arguments[2] : {},
			a = HC(t)
		WC && (a = KC.call(a, Object.getOwnPropertySymbols(t)))
		for (var o = 0; o < a.length; o += 1) XC(e, a[o], t[a[o]], r[a[o]])
	}, 'defineProperties$1')
Pc.supportsDescriptors = !!Cc
var Fe = Pc,
	ou = n(function (e) {
		return e !== e
	}, 'numberIsNaN'),
	wc = n(function (t, r) {
		return t === 0 && r === 0 ? 1 / t === 1 / r : !!(t === r || (ou(t) && ou(r)))
	}, 'is'),
	QC = wc,
	Oc = n(function () {
		return typeof Object.is == 'function' ? Object.is : QC
	}, 'getPolyfill'),
	JC = Oc,
	ZC = Fe,
	eP = n(function () {
		var t = JC()
		return (
			ZC(
				Object,
				{ is: t },
				{
					is: n(function () {
						return Object.is !== t
					}, 'testObjectIs'),
				},
			),
			t
		)
	}, 'shimObjectIs'),
	tP = Fe,
	rP = Ll.exports,
	aP = wc,
	qc = Oc,
	nP = eP,
	Tc = rP(qc(), Object)
tP(Tc, { getPolyfill: qc, implementation: aP, shim: nP })
var oP = Tc,
	Xl = { exports: {} },
	Rt = n(function () {
		return typeof n(function () {}, 'f').name == 'string'
	}, 'functionsHaveNames'),
	ht = Object.getOwnPropertyDescriptor
if (ht)
	try {
		ht([], 'length')
	} catch {
		ht = null
	}
Rt.functionsHaveConfigurableNames = n(function () {
	if (!Rt() || !ht) return !1
	var t = ht(function () {}, 'name')
	return !!t && !!t.configurable
}, 'functionsHaveConfigurableNames')
var lP = Function.prototype.bind
Rt.boundFunctionsHaveNames = n(function () {
	return Rt() && typeof lP == 'function' && n(function () {}, 'f').bind().name !== ''
}, 'boundFunctionsHaveNames')
var iP = Rt
;(function (e) {
	var t = iP.functionsHaveConfigurableNames(),
		r = Object,
		a = TypeError
	;(e.exports = n(function () {
		if (this != null && this !== r(this))
			throw new a('RegExp.prototype.flags getter called on non-object')
		var l = ''
		return (
			this.hasIndices && (l += 'd'),
			this.global && (l += 'g'),
			this.ignoreCase && (l += 'i'),
			this.multiline && (l += 'm'),
			this.dotAll && (l += 's'),
			this.unicode && (l += 'u'),
			this.sticky && (l += 'y'),
			l
		)
	}, 'flags')),
		t && Object.defineProperty && Object.defineProperty(e.exports, 'name', { value: 'get flags' })
})(Xl)
var uP = Xl.exports,
	sP = Fe.supportsDescriptors,
	cP = Object.getOwnPropertyDescriptor,
	$c = n(function () {
		if (sP && /a/gim.flags === 'gim') {
			var t = cP(RegExp.prototype, 'flags')
			if (
				t &&
				typeof t.get == 'function' &&
				typeof RegExp.prototype.dotAll == 'boolean' &&
				typeof RegExp.prototype.hasIndices == 'boolean'
			) {
				var r = '',
					a = {}
				if (
					(Object.defineProperty(a, 'hasIndices', {
						get: function () {
							r += 'd'
						},
					}),
					Object.defineProperty(a, 'sticky', {
						get: function () {
							r += 'y'
						},
					}),
					r === 'dy')
				)
					return t.get
			}
		}
		return uP
	}, 'getPolyfill'),
	dP = Fe.supportsDescriptors,
	fP = $c,
	pP = Object.getOwnPropertyDescriptor,
	vP = Object.defineProperty,
	mP = TypeError,
	lu = Object.getPrototypeOf,
	bP = /a/,
	yP = n(function () {
		if (!dP || !lu)
			throw new mP(
				'RegExp.prototype.flags requires a true ES5 environment that supports property descriptors',
			)
		var t = fP(),
			r = lu(bP),
			a = pP(r, 'flags')
		return (!a || a.get !== t) && vP(r, 'flags', { configurable: !0, enumerable: !1, get: t }), t
	}, 'shimFlags'),
	hP = Fe,
	gP = Ll.exports,
	EP = Xl.exports,
	xc = $c,
	_P = yP,
	Sc = gP(xc())
hP(Sc, { getPolyfill: xc, implementation: EP, shim: _P })
var RP = Sc,
	CP = {}.toString,
	Ac =
		Array.isArray ||
		function (e) {
			return CP.call(e) == '[object Array]'
		},
	PP = Date.prototype.getDay,
	wP = n(function (t) {
		try {
			return PP.call(t), !0
		} catch {
			return !1
		}
	}, 'tryDateGetDayCall'),
	OP = Object.prototype.toString,
	qP = '[object Date]',
	TP = De(),
	$P = n(function (t) {
		return typeof t != 'object' || t === null ? !1 : TP ? wP(t) : OP.call(t) === qP
	}, 'isDateObject'),
	xP = String.prototype.valueOf,
	SP = n(function (t) {
		try {
			return xP.call(t), !0
		} catch {
			return !1
		}
	}, 'tryStringObject'),
	AP = Object.prototype.toString,
	MP = '[object String]',
	BP = De(),
	Mc = n(function (t) {
		return typeof t == 'string' ? !0 : typeof t != 'object' ? !1 : BP ? SP(t) : AP.call(t) === MP
	}, 'isString'),
	jP = Number.prototype.toString,
	IP = n(function (t) {
		try {
			return jP.call(t), !0
		} catch {
			return !1
		}
	}, 'tryNumberObject'),
	NP = Object.prototype.toString,
	kP = '[object Number]',
	DP = De(),
	LP = n(function (t) {
		return typeof t == 'number' ? !0 : typeof t != 'object' ? !1 : DP ? IP(t) : NP.call(t) === kP
	}, 'isNumberObject'),
	Bc = $e,
	FP = Bc('Boolean.prototype.toString'),
	VP = Bc('Object.prototype.toString'),
	UP = n(function (t) {
		try {
			return FP(t), !0
		} catch {
			return !1
		}
	}, 'booleanBrandCheck'),
	HP = '[object Boolean]',
	WP = De(),
	zP = n(function (t) {
		return typeof t == 'boolean'
			? !0
			: t === null || typeof t != 'object'
			  ? !1
			  : WP && Symbol.toStringTag in t
			    ? UP(t)
			    : VP(t) === HP
	}, 'isBoolean'),
	pl = { exports: {} },
	iu = typeof BigInt < 'u' && BigInt,
	KP = n(function () {
		return (
			typeof iu == 'function' &&
			typeof BigInt == 'function' &&
			typeof iu(42) == 'bigint' &&
			typeof BigInt(42) == 'bigint'
		)
	}, 'hasNativeBigInts'),
	GP = KP()
if (GP) {
	var YP = BigInt.prototype.valueOf,
		XP = n(function (t) {
			try {
				return YP.call(t), !0
			} catch {}
			return !1
		}, 'tryBigIntObject')
	pl.exports = n(function (t) {
		return t === null ||
			typeof t > 'u' ||
			typeof t == 'boolean' ||
			typeof t == 'string' ||
			typeof t == 'number' ||
			typeof t == 'symbol' ||
			typeof t == 'function'
			? !1
			: typeof t == 'bigint'
			  ? !0
			  : XP(t)
	}, 'isBigInt')
} else
	pl.exports = n(function (t) {
		return !1
	}, 'isBigInt')
var QP = Mc,
	JP = LP,
	ZP = zP,
	ew = ep.exports,
	tw = pl.exports,
	rw = n(function (t) {
		if (t == null || (typeof t != 'object' && typeof t != 'function')) return null
		if (QP(t)) return 'String'
		if (JP(t)) return 'Number'
		if (ZP(t)) return 'Boolean'
		if (ew(t)) return 'Symbol'
		if (tw(t)) return 'BigInt'
	}, 'whichBoxedPrimitive'),
	Ql = typeof Map == 'function' && Map.prototype ? Map : null,
	aw = typeof Set == 'function' && Set.prototype ? Set : null,
	ar
Ql ||
	(ar = n(function (t) {
		return !1
	}, 'isMap'))
var jc = Ql ? Map.prototype.has : null,
	uu = aw ? Set.prototype.has : null
!ar &&
	!jc &&
	(ar = n(function (t) {
		return !1
	}, 'isMap'))
var Ic =
		ar ||
		n(function (t) {
			if (!t || typeof t != 'object') return !1
			try {
				if ((jc.call(t), uu))
					try {
						uu.call(t)
					} catch {
						return !0
					}
				return t instanceof Ql
			} catch {}
			return !1
		}, 'isMap'),
	nw = typeof Map == 'function' && Map.prototype ? Map : null,
	Jl = typeof Set == 'function' && Set.prototype ? Set : null,
	nr
Jl ||
	(nr = n(function (t) {
		return !1
	}, 'isSet'))
var su = nw ? Map.prototype.has : null,
	Nc = Jl ? Set.prototype.has : null
!nr &&
	!Nc &&
	(nr = n(function (t) {
		return !1
	}, 'isSet'))
var kc =
		nr ||
		n(function (t) {
			if (!t || typeof t != 'object') return !1
			try {
				if ((Nc.call(t), su))
					try {
						su.call(t)
					} catch {
						return !0
					}
				return t instanceof Jl
			} catch {}
			return !1
		}, 'isSet'),
	or = typeof WeakMap == 'function' && WeakMap.prototype ? WeakMap : null,
	cu = typeof WeakSet == 'function' && WeakSet.prototype ? WeakSet : null,
	lr
or ||
	(lr = n(function (t) {
		return !1
	}, 'isWeakMap'))
var vl = or ? or.prototype.has : null,
	So = cu ? cu.prototype.has : null
!lr &&
	!vl &&
	(lr = n(function (t) {
		return !1
	}, 'isWeakMap'))
var ow =
		lr ||
		n(function (t) {
			if (!t || typeof t != 'object') return !1
			try {
				if ((vl.call(t, vl), So))
					try {
						So.call(t, So)
					} catch {
						return !0
					}
				return t instanceof or
			} catch {}
			return !1
		}, 'isWeakMap'),
	ml = { exports: {} },
	lw = Ot,
	Dc = $e,
	iw = lw('%WeakSet%', !0),
	Ao = Dc('WeakSet.prototype.has', !0)
if (Ao) {
	var Mo = Dc('WeakMap.prototype.has', !0)
	ml.exports = n(function (t) {
		if (!t || typeof t != 'object') return !1
		try {
			if ((Ao(t, Ao), Mo))
				try {
					Mo(t, Mo)
				} catch {
					return !0
				}
			return t instanceof iw
		} catch {}
		return !1
	}, 'isWeakSet')
} else
	ml.exports = n(function (t) {
		return !1
	}, 'isWeakSet')
var uw = Ic,
	sw = kc,
	cw = ow,
	dw = ml.exports,
	fw = n(function (t) {
		if (t && typeof t == 'object') {
			if (uw(t)) return 'Map'
			if (sw(t)) return 'Set'
			if (cw(t)) return 'WeakMap'
			if (dw(t)) return 'WeakSet'
		}
		return !1
	}, 'whichCollection'),
	Gt = { exports: {} },
	du = _c
if (tp() || Ps()) {
	var Bo = Symbol.iterator
	Gt.exports = n(function (t) {
		if (t != null && typeof t[Bo] < 'u') return t[Bo]()
		if (du(t)) return Array.prototype[Bo].call(t)
	}, 'getIterator')
} else {
	var pw = Ac,
		vw = Mc,
		fu = Ot,
		mw = fu('%Map%', !0),
		bw = fu('%Set%', !0),
		Y = $e,
		pu = Y('Array.prototype.push'),
		vu = Y('String.prototype.charCodeAt'),
		yw = Y('String.prototype.slice'),
		hw = n(function (t, r) {
			var a = t.length
			if (r + 1 >= a) return r + 1
			var o = vu(t, r)
			if (o < 55296 || o > 56319) return r + 1
			var l = vu(t, r + 1)
			return l < 56320 || l > 57343 ? r + 1 : r + 2
		}, 'advanceStringIndex'),
		jo = n(function (t) {
			var r = 0
			return {
				next: n(function () {
					var o = r >= t.length,
						l
					return o || ((l = t[r]), (r += 1)), { done: o, value: l }
				}, 'next'),
			}
		}, 'getArrayIterator'),
		mu = n(function (t, r) {
			if (pw(t) || du(t)) return jo(t)
			if (vw(t)) {
				var a = 0
				return {
					next: n(function () {
						var l = hw(t, a),
							i = yw(t, a, l)
						return (a = l), { done: l > t.length, value: i }
					}, 'next'),
				}
			}
			if (r && typeof t['_es6-shim iterator_'] < 'u') return t['_es6-shim iterator_']()
		}, 'getNonCollectionIterator')
	if (!mw && !bw)
		Gt.exports = n(function (t) {
			if (t != null) return mu(t, !0)
		}, 'getIterator')
	else {
		var gw = Ic,
			Ew = kc,
			bu = Y('Map.prototype.forEach', !0),
			yu = Y('Set.prototype.forEach', !0)
		if (typeof process > 'u' || !process.versions || !process.versions.node)
			var hu = Y('Map.prototype.iterator', !0),
				gu = Y('Set.prototype.iterator', !0),
				Eu = n(function (e) {
					var t = !1
					return {
						next: n(function () {
							try {
								return { done: t, value: t ? void 0 : e.next() }
							} catch {
								return (t = !0), { done: !0, value: void 0 }
							}
						}, 'next'),
					}
				}, 'getStopIterationIterator')
		var _u = Y('Map.prototype.@@iterator', !0) || Y('Map.prototype._es6-shim iterator_', !0),
			Ru = Y('Set.prototype.@@iterator', !0) || Y('Set.prototype._es6-shim iterator_', !0),
			_w = n(function (t) {
				if (gw(t)) {
					if (hu) return Eu(hu(t))
					if (_u) return _u(t)
					if (bu) {
						var r = []
						return (
							bu(t, function (o, l) {
								pu(r, [l, o])
							}),
							jo(r)
						)
					}
				}
				if (Ew(t)) {
					if (gu) return Eu(gu(t))
					if (Ru) return Ru(t)
					if (yu) {
						var a = []
						return (
							yu(t, function (o) {
								pu(a, o)
							}),
							jo(a)
						)
					}
				}
			}, 'getCollectionIterator')
		Gt.exports = n(function (t) {
			return _w(t) || mu(t)
		}, 'getIterator')
	}
}
var Lc = Function.prototype.toString,
	Ze = typeof Reflect == 'object' && Reflect !== null && Reflect.apply,
	bl,
	Yt
if (typeof Ze == 'function' && typeof Object.defineProperty == 'function')
	try {
		;(bl = Object.defineProperty({}, 'length', {
			get: function () {
				throw Yt
			},
		})),
			(Yt = {}),
			Ze(
				function () {
					throw 42
				},
				null,
				bl,
			)
	} catch (e) {
		e !== Yt && (Ze = null)
	}
else Ze = null
var Rw = /^\s*class\b/,
	yl = n(function (t) {
		try {
			var r = Lc.call(t)
			return Rw.test(r)
		} catch {
			return !1
		}
	}, 'isES6ClassFunction'),
	Io = n(function (t) {
		try {
			return yl(t) ? !1 : (Lc.call(t), !0)
		} catch {
			return !1
		}
	}, 'tryFunctionToStr'),
	Xt = Object.prototype.toString,
	Cw = '[object Object]',
	Pw = '[object Function]',
	ww = '[object GeneratorFunction]',
	Ow = '[object HTMLAllCollection]',
	qw = '[object HTML document.all class]',
	Tw = '[object HTMLCollection]',
	$w = typeof Symbol == 'function' && !!Symbol.toStringTag,
	xw = !(0 in [,]),
	hl = n(function () {
		return !1
	}, 'isDocumentDotAll')
if (typeof document == 'object') {
	var Sw = document.all
	Xt.call(Sw) === Xt.call(document.all) &&
		(hl = n(function (t) {
			if ((xw || !t) && (typeof t > 'u' || typeof t == 'object'))
				try {
					var r = Xt.call(t)
					return (r === Ow || r === qw || r === Tw || r === Cw) && t('') == null
				} catch {}
			return !1
		}, 'isDocumentDotAll'))
}
var Aw = n(
		Ze
			? function (t) {
					if (hl(t)) return !0
					if (!t || (typeof t != 'function' && typeof t != 'object')) return !1
					try {
						Ze(t, null, bl)
					} catch (r) {
						if (r !== Yt) return !1
					}
					return !yl(t) && Io(t)
			  }
			: function (t) {
					if (hl(t)) return !0
					if (!t || (typeof t != 'function' && typeof t != 'object')) return !1
					if ($w) return Io(t)
					if (yl(t)) return !1
					var r = Xt.call(t)
					return r !== Pw && r !== ww && !/^\[object HTML/.test(r) ? !1 : Io(t)
			  },
		'isCallable',
	),
	Mw = Aw,
	Bw = Object.prototype.toString,
	Fc = Object.prototype.hasOwnProperty,
	jw = n(function (t, r, a) {
		for (var o = 0, l = t.length; o < l; o++)
			Fc.call(t, o) && (a == null ? r(t[o], o, t) : r.call(a, t[o], o, t))
	}, 'forEachArray'),
	Iw = n(function (t, r, a) {
		for (var o = 0, l = t.length; o < l; o++)
			a == null ? r(t.charAt(o), o, t) : r.call(a, t.charAt(o), o, t)
	}, 'forEachString'),
	Nw = n(function (t, r, a) {
		for (var o in t) Fc.call(t, o) && (a == null ? r(t[o], o, t) : r.call(a, t[o], o, t))
	}, 'forEachObject'),
	kw = n(function (t, r, a) {
		if (!Mw(r)) throw new TypeError('iterator must be a function')
		var o
		arguments.length >= 3 && (o = a),
			Bw.call(t) === '[object Array]'
				? jw(t, r, o)
				: typeof t == 'string'
				  ? Iw(t, r, o)
				  : Nw(t, r, o)
	}, 'forEach'),
	Vc = kw,
	No = [
		'BigInt64Array',
		'BigUint64Array',
		'Float32Array',
		'Float64Array',
		'Int16Array',
		'Int32Array',
		'Int8Array',
		'Uint16Array',
		'Uint32Array',
		'Uint8Array',
		'Uint8ClampedArray',
	],
	Dw = typeof globalThis > 'u' ? Fl : globalThis,
	Uc = n(function () {
		for (var t = [], r = 0; r < No.length; r++)
			typeof Dw[No[r]] == 'function' && (t[t.length] = No[r])
		return t
	}, 'availableTypedArrays'),
	Lw = Ot,
	Qt = Lw('%Object.getOwnPropertyDescriptor%', !0)
if (Qt)
	try {
		Qt([], 'length')
	} catch {
		Qt = null
	}
var Hc = Qt,
	ko,
	Cu
function Fw() {
	if (Cu) return ko
	Cu = 1
	var e = Vc,
		t = Uc,
		r = $e,
		a = r('Object.prototype.toString'),
		o = De(),
		l = Hc,
		i = typeof globalThis > 'u' ? Fl : globalThis,
		s = t(),
		u =
			r('Array.prototype.indexOf', !0) ||
			n(function (C, v) {
				for (var P = 0; P < C.length; P += 1) if (C[P] === v) return P
				return -1
			}, 'indexOf'),
		c = r('String.prototype.slice'),
		f = {},
		p = Object.getPrototypeOf
	o &&
		l &&
		p &&
		e(s, function (y) {
			var C = new i[y]()
			if (Symbol.toStringTag in C) {
				var v = p(C),
					P = l(v, Symbol.toStringTag)
				if (!P) {
					var h = p(v)
					P = l(h, Symbol.toStringTag)
				}
				f[y] = P.get
			}
		})
	var m = n(function (C) {
		var v = !1
		return (
			e(f, function (P, h) {
				if (!v)
					try {
						v = P.call(C) === h
					} catch {}
			}),
			v
		)
	}, 'tryAllTypedArrays')
	return (
		(ko = n(function (C) {
			if (!C || typeof C != 'object') return !1
			if (!o || !(Symbol.toStringTag in C)) {
				var v = c(a(C), 8, -1)
				return u(s, v) > -1
			}
			return l ? m(C) : !1
		}, 'isTypedArray')),
		ko
	)
}
n(Fw, 'requireIsTypedArray')
var Wc = Vc,
	Vw = Uc,
	zc = $e,
	Do = Hc,
	Uw = zc('Object.prototype.toString'),
	Kc = De(),
	Pu = typeof globalThis > 'u' ? Fl : globalThis,
	Hw = Vw(),
	Ww = zc('String.prototype.slice'),
	Gc = {},
	Lo = Object.getPrototypeOf
Kc &&
	Do &&
	Lo &&
	Wc(Hw, function (e) {
		if (typeof Pu[e] == 'function') {
			var t = new Pu[e]()
			if (Symbol.toStringTag in t) {
				var r = Lo(t),
					a = Do(r, Symbol.toStringTag)
				if (!a) {
					var o = Lo(r)
					a = Do(o, Symbol.toStringTag)
				}
				Gc[e] = a.get
			}
		}
	})
var zw = n(function (t) {
		var r = !1
		return (
			Wc(Gc, function (a, o) {
				if (!r)
					try {
						var l = a.call(t)
						l === o && (r = l)
					} catch {}
			}),
			r
		)
	}, 'tryAllTypedArrays'),
	Kw = Fw(),
	Gw = n(function (t) {
		return Kw(t) ? (!Kc || !(Symbol.toStringTag in t) ? Ww(Uw(t), 8, -1) : zw(t)) : !1
	}, 'whichTypedArray'),
	Yw = Yl,
	Yc = Ps(),
	Xc = $e,
	wu = Object,
	Xw = Xc('Array.prototype.push'),
	Ou = Xc('Object.prototype.propertyIsEnumerable'),
	Qw = Yc ? Object.getOwnPropertySymbols : null,
	Qc = n(function (t, r) {
		if (t == null) throw new TypeError('target must be an object')
		var a = wu(t)
		if (arguments.length === 1) return a
		for (var o = 1; o < arguments.length; ++o) {
			var l = wu(arguments[o]),
				i = Yw(l),
				s = Yc && (Object.getOwnPropertySymbols || Qw)
			if (s)
				for (var u = s(l), c = 0; c < u.length; ++c) {
					var f = u[c]
					Ou(l, f) && Xw(i, f)
				}
			for (var p = 0; p < i.length; ++p) {
				var m = i[p]
				if (Ou(l, m)) {
					var y = l[m]
					a[m] = y
				}
			}
		}
		return a
	}, 'assign'),
	Fo = Qc,
	Jw = n(function () {
		if (!Object.assign) return !1
		for (var e = 'abcdefghijklmnopqrst', t = e.split(''), r = {}, a = 0; a < t.length; ++a)
			r[t[a]] = t[a]
		var o = Object.assign({}, r),
			l = ''
		for (var i in o) l += i
		return e !== l
	}, 'lacksProperEnumerationOrder'),
	Zw = n(function () {
		if (!Object.assign || !Object.preventExtensions) return !1
		var e = Object.preventExtensions({ 1: 2 })
		try {
			Object.assign(e, 'xy')
		} catch {
			return e[1] === 'y'
		}
		return !1
	}, 'assignHasPendingExceptions'),
	Jc = n(function () {
		return !Object.assign || Jw() || Zw() ? Fo : Object.assign
	}, 'getPolyfill'),
	eO = Fe,
	tO = Jc,
	rO = n(function () {
		var t = tO()
		return (
			eO(
				Object,
				{ assign: t },
				{
					assign: function () {
						return Object.assign !== t
					},
				},
			),
			t
		)
	}, 'shimAssign'),
	aO = Fe,
	nO = Ll.exports,
	oO = Qc,
	Zc = Jc,
	lO = rO,
	iO = nO.apply(Zc()),
	ed = n(function (t, r) {
		return iO(Object, arguments)
	}, 'assign')
aO(ed, { getPolyfill: Zc, implementation: oO, shim: lO })
var uO = ed,
	qu = Yl,
	Tu = _c,
	$u = oP,
	xu = rp,
	Su = RP,
	Au = Ac,
	Mu = $P,
	Bu = rw,
	sO = Ot,
	ae = $e,
	ju = fw,
	at = Gt.exports,
	cO = ap,
	Iu = Gw,
	td = uO,
	ir = ae('ArrayBuffer.prototype.byteLength', !0)
function Nu(e) {
	if (!e || typeof e != 'object' || !ir) return !1
	try {
		return ir(e), !0
	} catch {
		return !1
	}
}
n(Nu, 'isArrayBuffer')
var ku = ae('Date.prototype.getTime'),
	Vo = Object.getPrototypeOf,
	Du = ae('Object.prototype.toString'),
	ur = sO('%Set%', !0),
	gl = ae('Map.prototype.has', !0),
	sr = ae('Map.prototype.get', !0),
	Lu = ae('Map.prototype.size', !0),
	cr = ae('Set.prototype.add', !0),
	rd = ae('Set.prototype.delete', !0),
	dr = ae('Set.prototype.has', !0),
	Jt = ae('Set.prototype.size', !0)
function Fu(e, t, r, a) {
	for (var o = at(e), l; (l = o.next()) && !l.done; )
		if (re(t, l.value, r, a)) return rd(e, l.value), !0
	return !1
}
n(Fu, 'setHasEqualElement')
function ad(e) {
	if (typeof e > 'u') return null
	if (typeof e != 'object')
		return typeof e == 'symbol' ? !1 : typeof e == 'string' || typeof e == 'number' ? +e == +e : !0
}
n(ad, 'findLooseMatchingPrimitives')
function dO(e, t, r, a, o, l) {
	var i = ad(r)
	if (i != null) return i
	var s = sr(t, i),
		u = td({}, o, { strict: !1 })
	return (typeof s > 'u' && !gl(t, i)) || !re(a, s, u, l) ? !1 : !gl(e, i) && re(a, s, u, l)
}
n(dO, 'mapMightHaveLoosePrim')
function fO(e, t, r) {
	var a = ad(r)
	return a != null ? a : dr(t, a) && !dr(e, a)
}
n(fO, 'setMightHaveLoosePrim')
function Vu(e, t, r, a, o, l) {
	for (var i = at(e), s, u; (s = i.next()) && !s.done; )
		if (((u = s.value), re(r, u, o, l) && re(a, sr(t, u), o, l))) return rd(e, u), !0
	return !1
}
n(Vu, 'mapHasEqualEntry')
function re(e, t, r, a) {
	var o = r || {}
	if (o.strict ? $u(e, t) : e === t) return !0
	var l = Bu(e),
		i = Bu(t)
	if (l !== i) return !1
	if (!e || !t || (typeof e != 'object' && typeof t != 'object'))
		return o.strict ? $u(e, t) : e == t
	var s = a.has(e),
		u = a.has(t),
		c
	if (s && u) {
		if (a.get(e) === a.get(t)) return !0
	} else c = {}
	return s || a.set(e, c), u || a.set(t, c), mO(e, t, o, a)
}
n(re, 'internalDeepEqual')
function Uu(e) {
	return !e ||
		typeof e != 'object' ||
		typeof e.length != 'number' ||
		typeof e.copy != 'function' ||
		typeof e.slice != 'function' ||
		(e.length > 0 && typeof e[0] != 'number')
		? !1
		: !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
}
n(Uu, 'isBuffer')
function pO(e, t, r, a) {
	if (Jt(e) !== Jt(t)) return !1
	for (var o = at(e), l = at(t), i, s, u; (i = o.next()) && !i.done; )
		if (i.value && typeof i.value == 'object') u || (u = new ur()), cr(u, i.value)
		else if (!dr(t, i.value)) {
			if (r.strict || !fO(e, t, i.value)) return !1
			u || (u = new ur()), cr(u, i.value)
		}
	if (u) {
		for (; (s = l.next()) && !s.done; )
			if (s.value && typeof s.value == 'object') {
				if (!Fu(u, s.value, r.strict, a)) return !1
			} else if (!r.strict && !dr(e, s.value) && !Fu(u, s.value, r.strict, a)) return !1
		return Jt(u) === 0
	}
	return !0
}
n(pO, 'setEquiv')
function vO(e, t, r, a) {
	if (Lu(e) !== Lu(t)) return !1
	for (var o = at(e), l = at(t), i, s, u, c, f, p; (i = o.next()) && !i.done; )
		if (((c = i.value[0]), (f = i.value[1]), c && typeof c == 'object'))
			u || (u = new ur()), cr(u, c)
		else if (((p = sr(t, c)), (typeof p > 'u' && !gl(t, c)) || !re(f, p, r, a))) {
			if (r.strict || !dO(e, t, c, f, r, a)) return !1
			u || (u = new ur()), cr(u, c)
		}
	if (u) {
		for (; (s = l.next()) && !s.done; )
			if (((c = s.value[0]), (p = s.value[1]), c && typeof c == 'object')) {
				if (!Vu(u, e, c, p, r, a)) return !1
			} else if (
				!r.strict &&
				(!e.has(c) || !re(sr(e, c), p, r, a)) &&
				!Vu(u, e, c, p, td({}, r, { strict: !1 }), a)
			)
				return !1
		return Jt(u) === 0
	}
	return !0
}
n(vO, 'mapEquiv')
function mO(e, t, r, a) {
	var o, l
	if (typeof e != typeof t || e == null || t == null || Du(e) !== Du(t) || Tu(e) !== Tu(t))
		return !1
	var i = Au(e),
		s = Au(t)
	if (i !== s) return !1
	var u = e instanceof Error,
		c = t instanceof Error
	if (u !== c || ((u || c) && (e.name !== t.name || e.message !== t.message))) return !1
	var f = xu(e),
		p = xu(t)
	if (f !== p || ((f || p) && (e.source !== t.source || Su(e) !== Su(t)))) return !1
	var m = Mu(e),
		y = Mu(t)
	if (
		m !== y ||
		((m || y) && ku(e) !== ku(t)) ||
		(r.strict && Vo && Vo(e) !== Vo(t)) ||
		Iu(e) !== Iu(t)
	)
		return !1
	var C = Uu(e),
		v = Uu(t)
	if (C !== v) return !1
	if (C || v) {
		if (e.length !== t.length) return !1
		for (o = 0; o < e.length; o++) if (e[o] !== t[o]) return !1
		return !0
	}
	var P = Nu(e),
		h = Nu(t)
	if (P !== h) return !1
	if (P || h)
		return ir(e) !== ir(t)
			? !1
			: typeof Uint8Array == 'function' && re(new Uint8Array(e), new Uint8Array(t), r, a)
	if (typeof e != typeof t) return !1
	var E = qu(e),
		T = qu(t)
	if (E.length !== T.length) return !1
	for (E.sort(), T.sort(), o = E.length - 1; o >= 0; o--) if (E[o] != T[o]) return !1
	for (o = E.length - 1; o >= 0; o--) if (((l = E[o]), !re(e[l], t[l], r, a))) return !1
	var O = ju(e),
		q = ju(t)
	return O !== q
		? !1
		: O === 'Set' || q === 'Set'
		  ? pO(e, t, r, a)
		  : O === 'Map'
		    ? vO(e, t, r, a)
		    : !0
}
n(mO, 'objEquiv')
var bO = n(function (t, r, a) {
	return re(t, r, a, cO())
}, 'deepEqual')
Object.defineProperty(eo, '__esModule', { value: !0 })
eo.default = void 0
var yO = Zl(bO),
	hO = Zl(Le),
	nd = Zl(it)
function Zl(e) {
	return e && e.__esModule ? e : { default: e }
}
n(Zl, '_interopRequireDefault$2')
function Uo(e, t) {
	return _O(e) || EO(e, t) || od(e, t) || gO()
}
n(Uo, '_slicedToArray$1')
function gO() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
n(gO, '_nonIterableRest$1')
function EO(e, t) {
	var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
	if (r != null) {
		var a = [],
			o = !0,
			l = !1,
			i,
			s
		try {
			for (
				r = r.call(e);
				!(o = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t));
				o = !0
			);
		} catch (u) {
			;(l = !0), (s = u)
		} finally {
			try {
				!o && r.return != null && r.return()
			} finally {
				if (l) throw s
			}
		}
		return a
	}
}
n(EO, '_iterableToArrayLimit$1')
function _O(e) {
	if (Array.isArray(e)) return e
}
n(_O, '_arrayWithHoles$1')
function RO(e, t) {
	var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
	if (!r) {
		if (Array.isArray(e) || (r = od(e)) || (t && e && typeof e.length == 'number')) {
			r && (e = r)
			var a = 0,
				o = n(function () {}, 'F')
			return {
				s: o,
				n: n(function () {
					return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] }
				}, 'n'),
				e: n(function (c) {
					throw c
				}, 'e'),
				f: o,
			}
		}
		throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
	}
	var l = !0,
		i = !1,
		s
	return {
		s: n(function () {
			r = r.call(e)
		}, 's'),
		n: n(function () {
			var c = r.next()
			return (l = c.done), c
		}, 'n'),
		e: n(function (c) {
			;(i = !0), (s = c)
		}, 'e'),
		f: n(function () {
			try {
				!l && r.return != null && r.return()
			} finally {
				if (i) throw s
			}
		}, 'f'),
	}
}
n(RO, '_createForOfIteratorHelper$1')
function od(e, t) {
	if (!!e) {
		if (typeof e == 'string') return Hu(e, t)
		var r = Object.prototype.toString.call(e).slice(8, -1)
		if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
			return Array.from(e)
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Hu(e, t)
	}
}
n(od, '_unsupportedIterableToArray$1')
function Hu(e, t) {
	;(t == null || t > e.length) && (t = e.length)
	for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r]
	return a
}
n(Hu, '_arrayLikeToArray$1')
var he = [],
	Wu = nd.default.keys()
for (var Ho = 0; Ho < Wu.length; Ho++) {
	var Wo = Wu[Ho],
		zo = nd.default.get(Wo)
	if (zo)
		for (var zu = [].concat(zo.baseConcepts, zo.relatedConcepts), Ko = 0; Ko < zu.length; Ko++) {
			var Ku = zu[Ko]
			if (Ku.module === 'HTML') {
				var Go = Ku.concept
				Go &&
					(function () {
						var e = JSON.stringify(Go),
							t = he.find(function (l) {
								return JSON.stringify(l[0]) === e
							}),
							r = void 0
						t ? (r = t[1]) : (r = [])
						for (var a = !0, o = 0; o < r.length; o++)
							if (r[o] === Wo) {
								a = !1
								break
							}
						a && r.push(Wo), he.push([Go, r])
					})()
			}
		}
}
var El = {
		entries: n(function () {
			return he
		}, 'entries'),
		forEach: n(function (t) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
				a = RO(he),
				o
			try {
				for (a.s(); !(o = a.n()).done; ) {
					var l = Uo(o.value, 2),
						i = l[0],
						s = l[1]
					t.call(r, s, i, he)
				}
			} catch (u) {
				a.e(u)
			} finally {
				a.f()
			}
		}, 'forEach'),
		get: n(function (t) {
			var r = he.find(function (a) {
				return (0, yO.default)(t, a[0])
			})
			return r && r[1]
		}, 'get'),
		has: n(function (t) {
			return !!El.get(t)
		}, 'has'),
		keys: n(function () {
			return he.map(function (t) {
				var r = Uo(t, 1),
					a = r[0]
				return a
			})
		}, 'keys'),
		values: n(function () {
			return he.map(function (t) {
				var r = Uo(t, 2),
					a = r[1]
				return a
			})
		}, 'values'),
	},
	CO = (0, hO.default)(El, El.entries())
eo.default = CO
var ro = {}
Object.defineProperty(ro, '__esModule', { value: !0 })
ro.default = void 0
var PO = id(Le),
	ld = id(it)
function id(e) {
	return e && e.__esModule ? e : { default: e }
}
n(id, '_interopRequireDefault$1')
function Yo(e, t) {
	return qO(e) || OO(e, t) || ud(e, t) || wO()
}
n(Yo, '_slicedToArray')
function wO() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
n(wO, '_nonIterableRest')
function OO(e, t) {
	var r = e == null ? null : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
	if (r != null) {
		var a = [],
			o = !0,
			l = !1,
			i,
			s
		try {
			for (
				r = r.call(e);
				!(o = (i = r.next()).done) && (a.push(i.value), !(t && a.length === t));
				o = !0
			);
		} catch (u) {
			;(l = !0), (s = u)
		} finally {
			try {
				!o && r.return != null && r.return()
			} finally {
				if (l) throw s
			}
		}
		return a
	}
}
n(OO, '_iterableToArrayLimit')
function qO(e) {
	if (Array.isArray(e)) return e
}
n(qO, '_arrayWithHoles')
function TO(e, t) {
	var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
	if (!r) {
		if (Array.isArray(e) || (r = ud(e)) || (t && e && typeof e.length == 'number')) {
			r && (e = r)
			var a = 0,
				o = n(function () {}, 'F')
			return {
				s: o,
				n: n(function () {
					return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] }
				}, 'n'),
				e: n(function (c) {
					throw c
				}, 'e'),
				f: o,
			}
		}
		throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
	}
	var l = !0,
		i = !1,
		s
	return {
		s: n(function () {
			r = r.call(e)
		}, 's'),
		n: n(function () {
			var c = r.next()
			return (l = c.done), c
		}, 'n'),
		e: n(function (c) {
			;(i = !0), (s = c)
		}, 'e'),
		f: n(function () {
			try {
				!l && r.return != null && r.return()
			} finally {
				if (i) throw s
			}
		}, 'f'),
	}
}
n(TO, '_createForOfIteratorHelper')
function ud(e, t) {
	if (!!e) {
		if (typeof e == 'string') return Gu(e, t)
		var r = Object.prototype.toString.call(e).slice(8, -1)
		if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
			return Array.from(e)
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Gu(e, t)
	}
}
n(ud, '_unsupportedIterableToArray')
function Gu(e, t) {
	;(t == null || t > e.length) && (t = e.length)
	for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r]
	return a
}
n(Gu, '_arrayLikeToArray')
var ge = [],
	sd = ld.default.keys(),
	$O = n(function (t) {
		var r = sd[t],
			a = ld.default.get(r)
		if (a)
			for (var o = [].concat(a.baseConcepts, a.relatedConcepts), l = 0; l < o.length; l++) {
				var i = o[l]
				if (i.module === 'HTML') {
					var s = i.concept
					if (s) {
						var u = ge.find(function (f) {
								return f[0] === r
							}),
							c = void 0
						u ? (c = u[1]) : (c = []), c.push(s), ge.push([r, c])
					}
				}
			}
	}, '_loop')
for (var Xo = 0; Xo < sd.length; Xo++) $O(Xo)
var _l = {
		entries: n(function () {
			return ge
		}, 'entries'),
		forEach: n(function (t) {
			var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
				a = TO(ge),
				o
			try {
				for (a.s(); !(o = a.n()).done; ) {
					var l = Yo(o.value, 2),
						i = l[0],
						s = l[1]
					t.call(r, s, i, ge)
				}
			} catch (u) {
				a.e(u)
			} finally {
				a.f()
			}
		}, 'forEach'),
		get: n(function (t) {
			var r = ge.find(function (a) {
				return a[0] === t
			})
			return r && r[1]
		}, 'get'),
		has: n(function (t) {
			return !!_l.get(t)
		}, 'has'),
		keys: n(function () {
			return ge.map(function (t) {
				var r = Yo(t, 1),
					a = r[0]
				return a
			})
		}, 'keys'),
		values: n(function () {
			return ge.map(function (t) {
				var r = Yo(t, 2),
					a = r[1]
				return a
			})
		}, 'values'),
	},
	xO = (0, PO.default)(_l, _l.entries())
ro.default = xO
Object.defineProperty(J, '__esModule', { value: !0 })
var Je = (J.roles = dd = J.roleElements = cd = J.elementRoles = J.dom = J.aria = void 0),
	SO = Tt(hr),
	AO = Tt(Er),
	MO = Tt(it),
	BO = Tt(eo),
	jO = Tt(ro)
function Tt(e) {
	return e && e.__esModule ? e : { default: e }
}
n(Tt, '_interopRequireDefault')
var IO = SO.default
J.aria = IO
var NO = AO.default
J.dom = NO
var kO = MO.default
Je = J.roles = kO
var DO = BO.default,
	cd = (J.elementRoles = DO),
	LO = jO.default,
	dd = (J.roleElements = LO),
	fd = { exports: {} }
;(function (e) {
	var t = (function () {
		var r = String.fromCharCode,
			a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
			o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
			l = {}
		function i(u, c) {
			if (!l[u]) {
				l[u] = {}
				for (var f = 0; f < u.length; f++) l[u][u.charAt(f)] = f
			}
			return l[u][c]
		}
		n(i, 'getBaseValue')
		var s = {
			compressToBase64: function (u) {
				if (u == null) return ''
				var c = s._compress(u, 6, function (f) {
					return a.charAt(f)
				})
				switch (c.length % 4) {
					default:
					case 0:
						return c
					case 1:
						return c + '==='
					case 2:
						return c + '=='
					case 3:
						return c + '='
				}
			},
			decompressFromBase64: function (u) {
				return u == null
					? ''
					: u == ''
					  ? null
					  : s._decompress(u.length, 32, function (c) {
								return i(a, u.charAt(c))
					    })
			},
			compressToUTF16: function (u) {
				return u == null
					? ''
					: s._compress(u, 15, function (c) {
							return r(c + 32)
					  }) + ' '
			},
			decompressFromUTF16: function (u) {
				return u == null
					? ''
					: u == ''
					  ? null
					  : s._decompress(u.length, 16384, function (c) {
								return u.charCodeAt(c) - 32
					    })
			},
			compressToUint8Array: function (u) {
				for (
					var c = s.compress(u), f = new Uint8Array(c.length * 2), p = 0, m = c.length;
					p < m;
					p++
				) {
					var y = c.charCodeAt(p)
					;(f[p * 2] = y >>> 8), (f[p * 2 + 1] = y % 256)
				}
				return f
			},
			decompressFromUint8Array: function (u) {
				if (u == null) return s.decompress(u)
				for (var c = new Array(u.length / 2), f = 0, p = c.length; f < p; f++)
					c[f] = u[f * 2] * 256 + u[f * 2 + 1]
				var m = []
				return (
					c.forEach(function (y) {
						m.push(r(y))
					}),
					s.decompress(m.join(''))
				)
			},
			compressToEncodedURIComponent: function (u) {
				return u == null
					? ''
					: s._compress(u, 6, function (c) {
							return o.charAt(c)
					  })
			},
			decompressFromEncodedURIComponent: function (u) {
				return u == null
					? ''
					: u == ''
					  ? null
					  : ((u = u.replace(/ /g, '+')),
					    s._decompress(u.length, 32, function (c) {
								return i(o, u.charAt(c))
					    }))
			},
			compress: function (u) {
				return s._compress(u, 16, function (c) {
					return r(c)
				})
			},
			_compress: function (u, c, f) {
				if (u == null) return ''
				var p,
					m,
					y = {},
					C = {},
					v = '',
					P = '',
					h = '',
					E = 2,
					T = 3,
					O = 2,
					q = [],
					b = 0,
					_ = 0,
					w
				for (w = 0; w < u.length; w += 1)
					if (
						((v = u.charAt(w)),
						Object.prototype.hasOwnProperty.call(y, v) || ((y[v] = T++), (C[v] = !0)),
						(P = h + v),
						Object.prototype.hasOwnProperty.call(y, P))
					)
						h = P
					else {
						if (Object.prototype.hasOwnProperty.call(C, h)) {
							if (h.charCodeAt(0) < 256) {
								for (p = 0; p < O; p++)
									(b = b << 1), _ == c - 1 ? ((_ = 0), q.push(f(b)), (b = 0)) : _++
								for (m = h.charCodeAt(0), p = 0; p < 8; p++)
									(b = (b << 1) | (m & 1)),
										_ == c - 1 ? ((_ = 0), q.push(f(b)), (b = 0)) : _++,
										(m = m >> 1)
							} else {
								for (m = 1, p = 0; p < O; p++)
									(b = (b << 1) | m), _ == c - 1 ? ((_ = 0), q.push(f(b)), (b = 0)) : _++, (m = 0)
								for (m = h.charCodeAt(0), p = 0; p < 16; p++)
									(b = (b << 1) | (m & 1)),
										_ == c - 1 ? ((_ = 0), q.push(f(b)), (b = 0)) : _++,
										(m = m >> 1)
							}
							E--, E == 0 && ((E = Math.pow(2, O)), O++), delete C[h]
						} else
							for (m = y[h], p = 0; p < O; p++)
								(b = (b << 1) | (m & 1)),
									_ == c - 1 ? ((_ = 0), q.push(f(b)), (b = 0)) : _++,
									(m = m >> 1)
						E--, E == 0 && ((E = Math.pow(2, O)), O++), (y[P] = T++), (h = String(v))
					}
				if (h !== '') {
					if (Object.prototype.hasOwnProperty.call(C, h)) {
						if (h.charCodeAt(0) < 256) {
							for (p = 0; p < O; p++)
								(b = b << 1), _ == c - 1 ? ((_ = 0), q.push(f(b)), (b = 0)) : _++
							for (m = h.charCodeAt(0), p = 0; p < 8; p++)
								(b = (b << 1) | (m & 1)),
									_ == c - 1 ? ((_ = 0), q.push(f(b)), (b = 0)) : _++,
									(m = m >> 1)
						} else {
							for (m = 1, p = 0; p < O; p++)
								(b = (b << 1) | m), _ == c - 1 ? ((_ = 0), q.push(f(b)), (b = 0)) : _++, (m = 0)
							for (m = h.charCodeAt(0), p = 0; p < 16; p++)
								(b = (b << 1) | (m & 1)),
									_ == c - 1 ? ((_ = 0), q.push(f(b)), (b = 0)) : _++,
									(m = m >> 1)
						}
						E--, E == 0 && ((E = Math.pow(2, O)), O++), delete C[h]
					} else
						for (m = y[h], p = 0; p < O; p++)
							(b = (b << 1) | (m & 1)),
								_ == c - 1 ? ((_ = 0), q.push(f(b)), (b = 0)) : _++,
								(m = m >> 1)
					E--, E == 0 && ((E = Math.pow(2, O)), O++)
				}
				for (m = 2, p = 0; p < O; p++)
					(b = (b << 1) | (m & 1)),
						_ == c - 1 ? ((_ = 0), q.push(f(b)), (b = 0)) : _++,
						(m = m >> 1)
				for (;;)
					if (((b = b << 1), _ == c - 1)) {
						q.push(f(b))
						break
					} else _++
				return q.join('')
			},
			decompress: function (u) {
				return u == null
					? ''
					: u == ''
					  ? null
					  : s._decompress(u.length, 32768, function (c) {
								return u.charCodeAt(c)
					    })
			},
			_decompress: function (u, c, f) {
				var p = [],
					m = 4,
					y = 4,
					C = 3,
					v = '',
					P = [],
					h,
					E,
					T,
					O,
					q,
					b,
					_,
					w = { val: f(0), position: c, index: 1 }
				for (h = 0; h < 3; h += 1) p[h] = h
				for (T = 0, q = Math.pow(2, 2), b = 1; b != q; )
					(O = w.val & w.position),
						(w.position >>= 1),
						w.position == 0 && ((w.position = c), (w.val = f(w.index++))),
						(T |= (O > 0 ? 1 : 0) * b),
						(b <<= 1)
				switch (T) {
					case 0:
						for (T = 0, q = Math.pow(2, 8), b = 1; b != q; )
							(O = w.val & w.position),
								(w.position >>= 1),
								w.position == 0 && ((w.position = c), (w.val = f(w.index++))),
								(T |= (O > 0 ? 1 : 0) * b),
								(b <<= 1)
						_ = r(T)
						break
					case 1:
						for (T = 0, q = Math.pow(2, 16), b = 1; b != q; )
							(O = w.val & w.position),
								(w.position >>= 1),
								w.position == 0 && ((w.position = c), (w.val = f(w.index++))),
								(T |= (O > 0 ? 1 : 0) * b),
								(b <<= 1)
						_ = r(T)
						break
					case 2:
						return ''
				}
				for (p[3] = _, E = _, P.push(_); ; ) {
					if (w.index > u) return ''
					for (T = 0, q = Math.pow(2, C), b = 1; b != q; )
						(O = w.val & w.position),
							(w.position >>= 1),
							w.position == 0 && ((w.position = c), (w.val = f(w.index++))),
							(T |= (O > 0 ? 1 : 0) * b),
							(b <<= 1)
					switch ((_ = T)) {
						case 0:
							for (T = 0, q = Math.pow(2, 8), b = 1; b != q; )
								(O = w.val & w.position),
									(w.position >>= 1),
									w.position == 0 && ((w.position = c), (w.val = f(w.index++))),
									(T |= (O > 0 ? 1 : 0) * b),
									(b <<= 1)
							;(p[y++] = r(T)), (_ = y - 1), m--
							break
						case 1:
							for (T = 0, q = Math.pow(2, 16), b = 1; b != q; )
								(O = w.val & w.position),
									(w.position >>= 1),
									w.position == 0 && ((w.position = c), (w.val = f(w.index++))),
									(T |= (O > 0 ? 1 : 0) * b),
									(b <<= 1)
							;(p[y++] = r(T)), (_ = y - 1), m--
							break
						case 2:
							return P.join('')
					}
					if ((m == 0 && ((m = Math.pow(2, C)), C++), p[_])) v = p[_]
					else if (_ === y) v = E + E.charAt(0)
					else return null
					P.push(v), (p[y++] = E + v.charAt(0)), m--, (E = v), m == 0 && ((m = Math.pow(2, C)), C++)
				}
			},
		}
		return s
	})()
	e != null && (e.exports = t)
})(fd)
const FO = fd.exports
function pd(e) {
	return e.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
n(pd, 'escapeHTML')
const VO = n((e, t, r, a, o, l, i) => {
		const s = a + r.indent,
			u = r.colors
		return e
			.map(c => {
				const f = t[c]
				let p = i(f, r, s, o, l)
				return (
					typeof f != 'string' &&
						(p.indexOf(`
`) !== -1 && (p = r.spacingOuter + s + p + r.spacingOuter + a),
						(p = '{' + p + '}')),
					r.spacingInner +
						a +
						u.prop.open +
						c +
						u.prop.close +
						'=' +
						u.value.open +
						p +
						u.value.close
				)
			})
			.join('')
	}, 'printProps'),
	UO = 3,
	HO = n(
		(e, t, r, a, o, l) =>
			e
				.map(i => {
					const s = typeof i == 'string' ? vd(i, t) : l(i, t, r, a, o)
					return s === '' && typeof i == 'object' && i !== null && i.nodeType !== UO
						? ''
						: t.spacingOuter + r + s
				})
				.join(''),
		'printChildren',
	),
	vd = n((e, t) => {
		const r = t.colors.content
		return r.open + pd(e) + r.close
	}, 'printText'),
	WO = n((e, t) => {
		const r = t.colors.comment
		return r.open + '<!--' + pd(e) + '-->' + r.close
	}, 'printComment'),
	zO = n((e, t, r, a, o) => {
		const l = a.colors.tag
		return (
			l.open +
			'<' +
			e +
			(t && l.close + t + a.spacingOuter + o + l.open) +
			(r
				? '>' + l.close + r + a.spacingOuter + o + l.open + '</' + e
				: (t && !a.min ? '' : ' ') + '/') +
			'>' +
			l.close
		)
	}, 'printElement'),
	KO = n((e, t) => {
		const r = t.colors.tag
		return r.open + '<' + e + r.close + ' \u2026' + r.open + ' />' + r.close
	}, 'printElementAsLeaf'),
	GO = 1,
	md = 3,
	bd = 8,
	yd = 11,
	YO = /^((HTML|SVG)\w*)?Element$/,
	XO = n(e => {
		const t = e.constructor.name,
			{ nodeType: r, tagName: a } = e,
			o =
				(typeof a == 'string' && a.includes('-')) ||
				(typeof e.hasAttribute == 'function' && e.hasAttribute('is'))
		return (
			(r === GO && (YO.test(t) || o)) ||
			(r === md && t === 'Text') ||
			(r === bd && t === 'Comment') ||
			(r === yd && t === 'DocumentFragment')
		)
	}, 'testNode')
function QO(e) {
	return e.nodeType === md
}
n(QO, 'nodeIsText')
function JO(e) {
	return e.nodeType === bd
}
n(JO, 'nodeIsComment')
function Qo(e) {
	return e.nodeType === yd
}
n(Qo, 'nodeIsFragment')
function ZO(e) {
	return {
		test: t => {
			var r
			return (t == null || (r = t.constructor) == null ? void 0 : r.name) && XO(t)
		},
		serialize: (t, r, a, o, l, i) => {
			if (QO(t)) return vd(t.data, r)
			if (JO(t)) return WO(t.data, r)
			const s = Qo(t) ? 'DocumentFragment' : t.tagName.toLowerCase()
			return ++o > r.maxDepth
				? KO(s, r)
				: zO(
						s,
						VO(
							Qo(t)
								? []
								: Array.from(t.attributes)
										.map(u => u.name)
										.sort(),
							Qo(t)
								? {}
								: Array.from(t.attributes).reduce((u, c) => ((u[c.name] = c.value), u), {}),
							r,
							a + r.indent,
							o,
							l,
							i,
						),
						HO(
							Array.prototype.slice.call(t.childNodes || t.children).filter(e),
							r,
							a + r.indent,
							o,
							l,
							i,
						),
						r,
						a,
				  )
		},
	}
}
n(ZO, 'createDOMElementFilter')
let hd = null,
	ei = null,
	ti = null
try {
	const e = module && module.require
	;(ei = e.call(module, 'fs').readFileSync),
		(ti = e.call(module, '@babel/code-frame').codeFrameColumns),
		(hd = e.call(module, 'chalk'))
} catch {}
function e0(e) {
	const t = e.indexOf('(') + 1,
		r = e.indexOf(')'),
		a = e.slice(t, r),
		o = a.split(':'),
		[l, i, s] = [o[0], parseInt(o[1], 10), parseInt(o[2], 10)]
	let u = ''
	try {
		u = ei(l, 'utf-8')
	} catch {
		return ''
	}
	const c = ti(u, { start: { line: i, column: s } }, { highlightCode: !0, linesBelow: 0 })
	return (
		hd.dim(a) +
		`
` +
		c +
		`
`
	)
}
n(e0, 'getCodeFrame')
function t0() {
	if (!ei || !ti) return ''
	const t = new Error().stack
		.split(
			`
`,
		)
		.slice(1)
		.find(r => !r.includes('node_modules/'))
	return e0(t)
}
n(t0, 'getUserCodeFrame')
const gd = 3
function Jo() {
	return typeof jest < 'u' && jest !== null
		? setTimeout._isMockFunction === !0 || Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
		: !1
}
n(Jo, 'jestFakeTimersAreEnabled$1')
function ri() {
	if (typeof window > 'u') throw new Error('Could not find default container')
	return window.document
}
n(ri, 'getDocument$1')
function Ed(e) {
	if (e.defaultView) return e.defaultView
	if (e.ownerDocument && e.ownerDocument.defaultView) return e.ownerDocument.defaultView
	if (e.window) return e.window
	throw e.ownerDocument && e.ownerDocument.defaultView === null
		? new Error('It looks like the window object is not available for the provided node.')
		: e.then instanceof Function
		  ? new Error(
					'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?',
		    )
		  : Array.isArray(e)
		    ? new Error(
						'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?',
		      )
		    : typeof e.debug == 'function' && typeof e.logTestingPlaygroundURL == 'function'
		      ? new Error(
							'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?',
		        )
		      : new Error('The given node is not an Element, the node type is: ' + typeof e + '.')
}
n(Ed, 'getWindowFromNode$1')
function ce(e) {
	if (!e || typeof e.querySelector != 'function' || typeof e.querySelectorAll != 'function')
		throw new TypeError(
			'Expected container to be an Element, a Document or a DocumentFragment but got ' + t(e) + '.',
		)
	function t(r) {
		return typeof r == 'object' ? (r === null ? 'null' : r.constructor.name) : typeof r
	}
	n(t, 'getTypeName')
}
n(ce, 'checkContainerType$1')
const r0 = n(() => {
		let e
		try {
			var t, r
			e = JSON.parse((t = process) == null || (r = t.env) == null ? void 0 : r.COLORS)
		} catch {}
		return typeof e == 'boolean'
			? e
			: typeof process < 'u' && process.versions !== void 0 && process.versions.node !== void 0
	}, 'shouldHighlight'),
	{ DOMCollection: a0 } = Hl,
	n0 = 1,
	o0 = 8
function l0(e) {
	return e.nodeType !== o0 && (e.nodeType !== n0 || !e.matches(x().defaultIgnore))
}
n(l0, 'filterCommentsAndDefaultIgnoreTagsTags')
function Ct(e, t, r) {
	if (
		(r === void 0 && (r = {}),
		e || (e = ri().body),
		typeof t != 'number' && (t = (typeof process < 'u' && process.env.DEBUG_PRINT_LIMIT) || 7e3),
		t === 0)
	)
		return ''
	e.documentElement && (e = e.documentElement)
	let a = typeof e
	if ((a === 'object' ? (a = e.constructor.name) : (e = {}), !('outerHTML' in e)))
		throw new TypeError('Expected an element or document but got ' + a)
	const { filterNode: o = l0, ...l } = r,
		i = Qs(e, { plugins: [ZO(o), a0], printFunctionName: !1, highlight: r0(), ...l })
	return t !== void 0 && e.outerHTML.length > t ? i.slice(0, t) + '...' : i
}
n(Ct, 'prettyDOM')
const Rl = n(function () {
	const e = t0()
	console.log(
		e
			? Ct(...arguments) +
					`

` +
					e
			: Ct(...arguments),
	)
}, 'logDOM')
let je = {
	testIdAttribute: 'data-testid',
	asyncUtilTimeout: 1e3,
	asyncWrapper: e => e(),
	unstable_advanceTimersWrapper: e => e(),
	eventWrapper: e => e(),
	defaultHidden: !1,
	defaultIgnore: 'script, style',
	showOriginalStackTrace: !1,
	throwSuggestions: !1,
	getElementError(e, t) {
		const r = Ct(t),
			a = new Error(
				[
					e,
					'Ignored nodes: comments, ' +
						je.defaultIgnore +
						`
` +
						r,
				].filter(Boolean).join(`

`),
			)
		return (a.name = 'TestingLibraryElementError'), a
	},
	_disableExpensiveErrorDiagnostics: !1,
	computedStyleSupportsPseudoElements: !1,
}
function i0(e) {
	try {
		return (je._disableExpensiveErrorDiagnostics = !0), e()
	} finally {
		je._disableExpensiveErrorDiagnostics = !1
	}
}
n(i0, 'runWithExpensiveErrorDiagnosticsDisabled')
function u0(e) {
	typeof e == 'function' && (e = e(je)), (je = { ...je, ...e })
}
n(u0, 'configure')
function x() {
	return je
}
n(x, 'getConfig')
const s0 = ['button', 'meter', 'output', 'progress', 'select', 'textarea', 'input']
function _d(e) {
	return s0.includes(e.nodeName.toLowerCase())
		? ''
		: e.nodeType === gd
		  ? e.textContent
		  : Array.from(e.childNodes)
					.map(t => _d(t))
					.join('')
}
n(_d, 'getTextContent')
function Cl(e) {
	let t
	return e.tagName.toLowerCase() === 'label' ? (t = _d(e)) : (t = e.value || e.textContent), t
}
n(Cl, 'getLabelContent')
function Rd(e) {
	if (e.labels !== void 0) {
		var t
		return (t = e.labels) != null ? t : []
	}
	if (!c0(e)) return []
	const r = e.ownerDocument.querySelectorAll('label')
	return Array.from(r).filter(a => a.control === e)
}
n(Rd, 'getRealLabels')
function c0(e) {
	return (
		/BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) ||
		(e.tagName === 'INPUT' && e.getAttribute('type') !== 'hidden')
	)
}
n(c0, 'isLabelable')
function Cd(e, t, r) {
	let { selector: a = '*' } = r === void 0 ? {} : r
	const o = t.getAttribute('aria-labelledby'),
		l = o ? o.split(' ') : []
	return l.length
		? l.map(i => {
				const s = e.querySelector('[id="' + i + '"]')
				return s ? { content: Cl(s), formControl: null } : { content: '', formControl: null }
		  })
		: Array.from(Rd(t)).map(i => {
				const s = Cl(i),
					u = 'button, input, meter, output, progress, select, textarea',
					c = Array.from(i.querySelectorAll(u)).filter(f => f.matches(a))[0]
				return { content: s, formControl: c }
		  })
}
n(Cd, 'getLabels')
function Pd(e) {
	if (e == null)
		throw new Error(
			'It looks like ' +
				e +
				' was passed instead of a matcher. Did you do something like getByText(' +
				e +
				')?',
		)
}
n(Pd, 'assertNotNullOrUndefined')
function Ve(e, t, r, a) {
	if (typeof e != 'string') return !1
	Pd(r)
	const o = a(e)
	return typeof r == 'string' || typeof r == 'number'
		? o.toLowerCase().includes(r.toString().toLowerCase())
		: typeof r == 'function'
		  ? r(o, t)
		  : wd(r, o)
}
n(Ve, 'fuzzyMatches')
function ie(e, t, r, a) {
	if (typeof e != 'string') return !1
	Pd(r)
	const o = a(e)
	return r instanceof Function ? r(o, t) : r instanceof RegExp ? wd(r, o) : o === String(r)
}
n(ie, 'matches')
function ai(e) {
	let { trim: t = !0, collapseWhitespace: r = !0 } = e === void 0 ? {} : e
	return a => {
		let o = a
		return (o = t ? o.trim() : o), (o = r ? o.replace(/\s+/g, ' ') : o), o
	}
}
n(ai, 'getDefaultNormalizer')
function Se(e) {
	let { trim: t, collapseWhitespace: r, normalizer: a } = e
	if (!a) return ai({ trim: t, collapseWhitespace: r })
	if (typeof t < 'u' || typeof r < 'u')
		throw new Error(
			'trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer',
		)
	return a
}
n(Se, 'makeNormalizer')
function wd(e, t) {
	const r = e.test(t)
	return (
		e.global &&
			e.lastIndex !== 0 &&
			(console.warn(
				'To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp.',
			),
			(e.lastIndex = 0)),
		r
	)
}
n(wd, 'matchRegExp')
function $t(e) {
	return e.matches('input[type=submit], input[type=button], input[type=reset]')
		? e.value
		: Array.from(e.childNodes)
				.filter(t => t.nodeType === gd && Boolean(t.textContent))
				.map(t => t.textContent)
				.join('')
}
n($t, 'getNodeText')
const d0 = f0(cd)
function Od(e) {
	return (
		e.hidden === !0 ||
		e.getAttribute('aria-hidden') === 'true' ||
		e.ownerDocument.defaultView.getComputedStyle(e).display === 'none'
	)
}
n(Od, 'isSubtreeInaccessible')
function ao(e, t) {
	t === void 0 && (t = {})
	const { isSubtreeInaccessible: r = Od } = t
	if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === 'hidden') return !0
	let o = e
	for (; o; ) {
		if (r(o)) return !0
		o = o.parentElement
	}
	return !1
}
n(ao, 'isInaccessible')
function ni(e) {
	for (const { match: t, roles: r } of d0) if (t(e)) return [...r]
	return []
}
n(ni, 'getImplicitAriaRoles')
function f0(e) {
	function t(i) {
		let { name: s, attributes: u } = i
		return (
			'' +
			s +
			u
				.map(c => {
					let { name: f, value: p, constraints: m = [] } = c
					return m.indexOf('undefined') !== -1
						? ':not([' + f + '])'
						: p
						  ? '[' + f + '="' + p + '"]'
						  : '[' + f + ']'
				})
				.join('')
		)
	}
	n(t, 'makeElementSelector')
	function r(i) {
		let { attributes: s = [] } = i
		return s.length
	}
	n(r, 'getSelectorSpecificity')
	function a(i, s) {
		let { specificity: u } = i,
			{ specificity: c } = s
		return c - u
	}
	n(a, 'bySelectorSpecificity')
	function o(i) {
		let { attributes: s = [] } = i
		const u = s.findIndex(f => f.value && f.name === 'type' && f.value === 'text')
		u >= 0 && (s = [...s.slice(0, u), ...s.slice(u + 1)])
		const c = t({ ...i, attributes: s })
		return f => (u >= 0 && f.type !== 'text' ? !1 : f.matches(c))
	}
	n(o, 'match')
	let l = []
	for (const [i, s] of e.entries())
		l = [...l, { match: o(i), roles: Array.from(s), specificity: r(i) }]
	return l.sort(a)
}
n(f0, 'buildElementRoleList')
function qd(e, t) {
	let { hidden: r = !1 } = t === void 0 ? {} : t
	function a(o) {
		return [o, ...Array.from(o.children).reduce((l, i) => [...l, ...a(i)], [])]
	}
	return (
		n(a, 'flattenDOM'),
		a(e)
			.filter(o => (r === !1 ? ao(o) === !1 : !0))
			.reduce((o, l) => {
				let i = []
				return (
					l.hasAttribute('role')
						? (i = l.getAttribute('role').split(' ').slice(0, 1))
						: (i = ni(l)),
					i.reduce(
						(s, u) => (Array.isArray(s[u]) ? { ...s, [u]: [...s[u], l] } : { ...s, [u]: [l] }),
						o,
					)
				)
			}, {})
	)
}
n(qd, 'getRoles')
function Td(e, t) {
	let { hidden: r, includeDescription: a } = t
	const o = qd(e, { hidden: r })
	return Object.entries(o)
		.filter(l => {
			let [i] = l
			return i !== 'generic'
		})
		.map(l => {
			let [i, s] = l
			const u = '-'.repeat(50),
				c = s.map(f => {
					const p =
							'Name "' +
							Kl(f, {
								computedStyleSupportsPseudoElements: x().computedStyleSupportsPseudoElements,
							}) +
							`":
`,
						m = Ct(f.cloneNode(!1))
					if (a) {
						const y =
							'Description "' +
							mc(f, {
								computedStyleSupportsPseudoElements: x().computedStyleSupportsPseudoElements,
							}) +
							`":
`
						return '' + p + y + m
					}
					return '' + p + m
				}).join(`

`)
			return (
				i +
				`:

` +
				c +
				`

` +
				u
			)
		}).join(`
`)
}
n(Td, 'prettyRoles')
const p0 = n(function (e, t) {
	let { hidden: r = !1 } = t === void 0 ? {} : t
	return console.log(Td(e, { hidden: r }))
}, 'logRoles')
function v0(e) {
	return e.tagName === 'OPTION' ? e.selected : xt(e, 'aria-selected')
}
n(v0, 'computeAriaSelected')
function m0(e) {
	if (!('indeterminate' in e && e.indeterminate))
		return 'checked' in e ? e.checked : xt(e, 'aria-checked')
}
n(m0, 'computeAriaChecked')
function b0(e) {
	return xt(e, 'aria-pressed')
}
n(b0, 'computeAriaPressed')
function y0(e) {
	var t, r
	return (t = (r = xt(e, 'aria-current')) != null ? r : e.getAttribute('aria-current')) != null
		? t
		: !1
}
n(y0, 'computeAriaCurrent')
function h0(e) {
	return xt(e, 'aria-expanded')
}
n(h0, 'computeAriaExpanded')
function xt(e, t) {
	const r = e.getAttribute(t)
	if (r === 'true') return !0
	if (r === 'false') return !1
}
n(xt, 'checkBooleanAttribute')
function g0(e) {
	const t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 }
	return (e.getAttribute('aria-level') && Number(e.getAttribute('aria-level'))) || t[e.tagName]
}
n(g0, 'computeHeadingLevel')
const Yu = ai()
function E0(e) {
	return e.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&')
}
n(E0, 'escapeRegExp')
function Xu(e) {
	return new RegExp(E0(e.toLowerCase()), 'i')
}
n(Xu, 'getRegExpMatcher')
function ve(e, t, r, a) {
	let { variant: o, name: l } = a,
		i = ''
	const s = {},
		u = [['Role', 'TestId'].includes(e) ? r : Xu(r)]
	l && (s.name = Xu(l)),
		e === 'Role' &&
			ao(t) &&
			((s.hidden = !0),
			(i = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `)),
		Object.keys(s).length > 0 && u.push(s)
	const c = o + 'By' + e
	return {
		queryName: e,
		queryMethod: c,
		queryArgs: u,
		variant: o,
		warning: i,
		toString() {
			i && console.warn(i)
			let [f, p] = u
			return (
				(f = typeof f == 'string' ? "'" + f + "'" : f),
				(p = p
					? ', { ' +
					  Object.entries(p)
							.map(m => {
								let [y, C] = m
								return y + ': ' + C
							})
							.join(', ') +
					  ' }'
					: ''),
				c + '(' + f + p + ')'
			)
		},
	}
}
n(ve, 'makeSuggestion')
function me(e, t, r) {
	return r && (!t || t.toLowerCase() === e.toLowerCase())
}
n(me, 'canSuggest')
function fr(e, t, r) {
	var a, o
	if ((t === void 0 && (t = 'get'), e.matches(x().defaultIgnore))) return
	const l = (a = e.getAttribute('role')) != null ? a : (o = ni(e)) == null ? void 0 : o[0]
	if (l !== 'generic' && me('Role', r, l))
		return ve('Role', e, l, {
			variant: t,
			name: Kl(e, { computedStyleSupportsPseudoElements: x().computedStyleSupportsPseudoElements }),
		})
	const i = Cd(document, e)
		.map(m => m.content)
		.join(' ')
	if (me('LabelText', r, i)) return ve('LabelText', e, i, { variant: t })
	const s = e.getAttribute('placeholder')
	if (me('PlaceholderText', r, s)) return ve('PlaceholderText', e, s, { variant: t })
	const u = Yu($t(e))
	if (me('Text', r, u)) return ve('Text', e, u, { variant: t })
	if (me('DisplayValue', r, e.value)) return ve('DisplayValue', e, Yu(e.value), { variant: t })
	const c = e.getAttribute('alt')
	if (me('AltText', r, c)) return ve('AltText', e, c, { variant: t })
	const f = e.getAttribute('title')
	if (me('Title', r, f)) return ve('Title', e, f, { variant: t })
	const p = e.getAttribute(x().testIdAttribute)
	if (me('TestId', r, p)) return ve('TestId', e, p, { variant: t })
}
n(fr, 'getSuggestedQuery')
function Vt(e, t) {
	e.stack = t.stack.replace(t.message, e.message)
}
n(Vt, 'copyStackTrace')
function _0(e, t) {
	let {
		container: r = ri(),
		timeout: a = x().asyncUtilTimeout,
		showOriginalStackTrace: o = x().showOriginalStackTrace,
		stackTraceError: l,
		interval: i = 50,
		onTimeout: s = n(
			c => ((c.message = x().getElementError(c.message, r).message), c),
			'onTimeout',
		),
		mutationObserverOptions: u = { subtree: !0, childList: !0, attributes: !0, characterData: !0 },
	} = t
	if (typeof e != 'function') throw new TypeError('Received `callback` arg must be a function')
	return new Promise(async (c, f) => {
		let p,
			m,
			y,
			C = !1,
			v = 'idle'
		const P = setTimeout(q, a),
			h = Jo()
		if (h) {
			const { unstable_advanceTimersWrapper: b } = x()
			for (O(); !C; ) {
				if (!Jo()) {
					const _ = new Error(
						"Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830",
					)
					o || Vt(_, l), f(_)
					return
				}
				if (
					(b(() => {
						jest.advanceTimersByTime(i)
					}),
					O(),
					C)
				)
					break
				await b(async () => {
					await new Promise(_ => {
						setTimeout(_, 0), jest.advanceTimersByTime(0)
					})
				})
			}
		} else {
			try {
				ce(r)
			} catch (_) {
				f(_)
				return
			}
			m = setInterval(T, i)
			const { MutationObserver: b } = Ed(r)
			;(y = new b(T)), y.observe(r, u), O()
		}
		function E(b, _) {
			;(C = !0), clearTimeout(P), h || (clearInterval(m), y.disconnect()), b ? f(b) : c(_)
		}
		n(E, 'onDone')
		function T() {
			if (Jo()) {
				const b = new Error(
					"Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830",
				)
				return o || Vt(b, l), f(b)
			} else return O()
		}
		n(T, 'checkRealTimersCallback')
		function O() {
			if (v !== 'pending')
				try {
					const b = i0(e)
					typeof (b == null ? void 0 : b.then) == 'function'
						? ((v = 'pending'),
						  b.then(
								_ => {
									;(v = 'resolved'), E(null, _)
								},
								_ => {
									;(v = 'rejected'), (p = _)
								},
						  ))
						: E(null, b)
				} catch (b) {
					p = b
				}
		}
		n(O, 'checkCallback')
		function q() {
			let b
			p
				? ((b = p), !o && b.name === 'TestingLibraryElementError' && Vt(b, l))
				: ((b = new Error('Timed out in waitFor.')), o || Vt(b, l)),
				E(s(b), null)
		}
		n(q, 'handleTimeout')
	})
}
n(_0, 'waitFor')
function oi(e, t) {
	const r = new Error('STACK_TRACE_MESSAGE')
	return x().asyncWrapper(() => _0(e, { stackTraceError: r, ...t }))
}
n(oi, 'waitForWrapper')
function no(e, t) {
	return x().getElementError(e, t)
}
n(no, 'getElementError')
function oo(e, t) {
	return no(
		e +
			'\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).',
		t,
	)
}
n(oo, 'getMultipleElementsFoundError')
function Ue(e, t, r, a) {
	let { exact: o = !0, collapseWhitespace: l, trim: i, normalizer: s } = a === void 0 ? {} : a
	const u = o ? ie : Ve,
		c = Se({ collapseWhitespace: l, trim: i, normalizer: s })
	return Array.from(t.querySelectorAll('[' + e + ']')).filter(f => u(f.getAttribute(e), f, r, c))
}
n(Ue, 'queryAllByAttribute')
function $d(e, t, r, a) {
	const o = Ue(e, t, r, a)
	if (o.length > 1) throw oo('Found multiple elements by [' + e + '=' + r + ']', t)
	return o[0] || null
}
n($d, 'queryByAttribute')
function nt(e, t) {
	return function (r) {
		for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
			o[l - 1] = arguments[l]
		const i = e(r, ...o)
		if (i.length > 1) {
			const s = i.map(u => no(null, u).message).join(`

`)
			throw oo(
				t(r, ...o) +
					`

Here are the matching elements:

` +
					s,
				r,
			)
		}
		return i[0] || null
	}
}
n(nt, 'makeSingleQuery')
function xd(e, t) {
	return x().getElementError(
		`A better query is available, try this:
` +
			e.toString() +
			`
`,
		t,
	)
}
n(xd, 'getSuggestionError')
function li(e, t) {
	return function (r) {
		for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
			o[l - 1] = arguments[l]
		const i = e(r, ...o)
		if (!i.length) throw x().getElementError(t(r, ...o), r)
		return i
	}
}
n(li, 'makeGetAllQuery')
function ot(e) {
	return (t, r, a, o) => oi(() => e(t, r, a), { container: t, ...o })
}
n(ot, 'makeFindQuery')
const Te = n(
		(e, t, r) =>
			function (a) {
				for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
					l[i - 1] = arguments[i]
				const s = e(a, ...l),
					[{ suggest: u = x().throwSuggestions } = {}] = l.slice(-1)
				if (s && u) {
					const c = fr(s, r)
					if (c && !t.endsWith(c.queryName)) throw xd(c.toString(), a)
				}
				return s
			},
		'wrapSingleQueryWithSuggestion',
	),
	H = n(
		(e, t, r) =>
			function (a) {
				for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++)
					l[i - 1] = arguments[i]
				const s = e(a, ...l),
					[{ suggest: u = x().throwSuggestions } = {}] = l.slice(-1)
				if (s.length && u) {
					const c = [
						...new Set(
							s.map(f => {
								var p
								return (p = fr(f, r)) == null ? void 0 : p.toString()
							}),
						),
					]
					if (c.length === 1 && !t.endsWith(fr(s[0], r).queryName)) throw xd(c[0], a)
				}
				return s
			},
		'wrapAllByQueryWithSuggestion',
	)
function de(e, t, r) {
	const a = Te(nt(e, t), e.name, 'query'),
		o = li(e, r),
		l = nt(o, t),
		i = Te(l, e.name, 'get'),
		s = H(o, e.name.replace('query', 'get'), 'getAll'),
		u = ot(H(o, e.name, 'findAll')),
		c = ot(Te(l, e.name, 'find'))
	return [a, s, i, u, c]
}
n(de, 'buildQueries')
var R0 = Object.freeze({
	__proto__: null,
	getElementError: no,
	wrapAllByQueryWithSuggestion: H,
	wrapSingleQueryWithSuggestion: Te,
	getMultipleElementsFoundError: oo,
	queryAllByAttribute: Ue,
	queryByAttribute: $d,
	makeSingleQuery: nt,
	makeGetAllQuery: li,
	makeFindQuery: ot,
	buildQueries: de,
})
function C0(e) {
	return Array.from(e.querySelectorAll('label,input'))
		.map(t => ({ node: t, textToMatch: Cl(t) }))
		.filter(t => {
			let { textToMatch: r } = t
			return r !== null
		})
}
n(C0, 'queryAllLabels')
const P0 = n(function (e, t, r) {
		let { exact: a = !0, trim: o, collapseWhitespace: l, normalizer: i } = r === void 0 ? {} : r
		const s = a ? ie : Ve,
			u = Se({ collapseWhitespace: l, trim: o, normalizer: i })
		return C0(e)
			.filter(f => {
				let { node: p, textToMatch: m } = f
				return s(m, p, t, u)
			})
			.map(f => {
				let { node: p } = f
				return p
			})
	}, 'queryAllLabelsByText'),
	Pt = n(function (e, t, r) {
		let {
			selector: a = '*',
			exact: o = !0,
			collapseWhitespace: l,
			trim: i,
			normalizer: s,
		} = r === void 0 ? {} : r
		ce(e)
		const u = o ? ie : Ve,
			c = Se({ collapseWhitespace: l, trim: i, normalizer: s }),
			f = Array.from(e.querySelectorAll('*'))
				.filter(p => Rd(p).length || p.hasAttribute('aria-labelledby'))
				.reduce((p, m) => {
					const y = Cd(e, m, { selector: a })
					y.filter(v => Boolean(v.formControl)).forEach(v => {
						u(v.content, v.formControl, t, c) && v.formControl && p.push(v.formControl)
					})
					const C = y.filter(v => Boolean(v.content)).map(v => v.content)
					return (
						u(C.join(' '), m, t, c) && p.push(m),
						C.length > 1 &&
							C.forEach((v, P) => {
								u(v, m, t, c) && p.push(m)
								const h = [...C]
								h.splice(P, 1), h.length > 1 && u(h.join(' '), m, t, c) && p.push(m)
							}),
						p
					)
				}, [])
				.concat(Ue('aria-label', e, t, { exact: o, normalizer: c }))
		return Array.from(new Set(f)).filter(p => p.matches(a))
	}, 'queryAllByLabelText'),
	ke = n(function (e, t) {
		for (var r = arguments.length, a = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
			a[o - 2] = arguments[o]
		const l = Pt(e, t, ...a)
		if (!l.length) {
			const i = P0(e, t, ...a)
			if (i.length) {
				const s = i.map(u => w0(e, u)).filter(u => !!u)
				throw s.length
					? x().getElementError(
							s.map(
								u =>
									'Found a label with the text of: ' +
									t +
									', however the element associated with this label (<' +
									u +
									' />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <' +
									u +
									' />, you can use aria-label or aria-labelledby instead.',
							).join(`

`),
							e,
					  )
					: x().getElementError(
							'Found a label with the text of: ' +
								t +
								`, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`,
							e,
					  )
			} else throw x().getElementError('Unable to find a label with the text of: ' + t, e)
		}
		return l
	}, 'getAllByLabelText')
function w0(e, t) {
	const r = t.getAttribute('for')
	if (!r) return null
	const a = e.querySelector('[id="' + r + '"]')
	return a ? a.tagName.toLowerCase() : null
}
n(w0, 'getTagNameOfElementAssociatedWithLabelViaFor')
const Sd = n((e, t) => 'Found multiple elements with the text of: ' + t, 'getMultipleError$7'),
	Ad = Te(nt(Pt, Sd), Pt.name, 'query'),
	Md = nt(ke, Sd),
	Bd = ot(H(ke, ke.name, 'findAll')),
	jd = ot(Te(Md, ke.name, 'find')),
	Id = H(ke, ke.name, 'getAll'),
	Nd = Te(Md, ke.name, 'get'),
	kd = H(Pt, Pt.name, 'queryAll'),
	Pl = n(function () {
		for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
		return ce(t[0]), Ue('placeholder', ...t)
	}, 'queryAllByPlaceholderText'),
	O0 = n(
		(e, t) => 'Found multiple elements with the placeholder text of: ' + t,
		'getMultipleError$6',
	),
	q0 = n(
		(e, t) => 'Unable to find an element with the placeholder text of: ' + t,
		'getMissingError$6',
	),
	Dd = H(Pl, Pl.name, 'queryAll'),
	[Ld, Fd, Vd, Ud, Hd] = de(Pl, O0, q0),
	wl = n(function (e, t, r) {
		let {
			selector: a = '*',
			exact: o = !0,
			collapseWhitespace: l,
			trim: i,
			ignore: s = x().defaultIgnore,
			normalizer: u,
		} = r === void 0 ? {} : r
		ce(e)
		const c = o ? ie : Ve,
			f = Se({ collapseWhitespace: l, trim: i, normalizer: u })
		let p = []
		return (
			typeof e.matches == 'function' && e.matches(a) && (p = [e]),
			[...p, ...Array.from(e.querySelectorAll(a))]
				.filter(m => !s || !m.matches(s))
				.filter(m => c($t(m), m, t, f))
		)
	}, 'queryAllByText'),
	T0 = n((e, t) => 'Found multiple elements with the text: ' + t, 'getMultipleError$5'),
	$0 = n(function (e, t, r) {
		r === void 0 && (r = {})
		const { collapseWhitespace: a, trim: o, normalizer: l, selector: i } = r,
			u = Se({ collapseWhitespace: a, trim: o, normalizer: l })(t.toString()),
			c = u !== t.toString(),
			f = (i != null ? i : '*') !== '*'
		return (
			'Unable to find an element with the text: ' +
			(c ? u + " (normalized from '" + t + "')" : t) +
			(f ? ", which matches selector '" + i + "'" : '') +
			'. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.'
		)
	}, 'getMissingError$5'),
	Wd = H(wl, wl.name, 'queryAll'),
	[zd, Kd, Gd, Yd, Xd] = de(wl, T0, $0),
	Ol = n(function (e, t, r) {
		let { exact: a = !0, collapseWhitespace: o, trim: l, normalizer: i } = r === void 0 ? {} : r
		ce(e)
		const s = a ? ie : Ve,
			u = Se({ collapseWhitespace: o, trim: l, normalizer: i })
		return Array.from(e.querySelectorAll('input,textarea,select')).filter(c =>
			c.tagName === 'SELECT'
				? Array.from(c.options)
						.filter(p => p.selected)
						.some(p => s($t(p), p, t, u))
				: s(c.value, c, t, u),
		)
	}, 'queryAllByDisplayValue'),
	x0 = n(
		(e, t) => 'Found multiple elements with the display value: ' + t + '.',
		'getMultipleError$4',
	),
	S0 = n(
		(e, t) => 'Unable to find an element with the display value: ' + t + '.',
		'getMissingError$4',
	),
	Qd = H(Ol, Ol.name, 'queryAll'),
	[Jd, Zd, ef, tf, rf] = de(Ol, x0, S0),
	A0 = /^(img|input|area|.+-.+)$/i,
	ql = n(function (e, t, r) {
		return r === void 0 && (r = {}), ce(e), Ue('alt', e, t, r).filter(a => A0.test(a.tagName))
	}, 'queryAllByAltText'),
	M0 = n((e, t) => 'Found multiple elements with the alt text: ' + t, 'getMultipleError$3'),
	B0 = n((e, t) => 'Unable to find an element with the alt text: ' + t, 'getMissingError$3'),
	af = H(ql, ql.name, 'queryAll'),
	[nf, of, lf, uf, sf] = de(ql, M0, B0),
	j0 = n(e => {
		var t
		return (
			e.tagName.toLowerCase() === 'title' &&
			((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === 'svg'
		)
	}, 'isSvgTitle'),
	Tl = n(function (e, t, r) {
		let { exact: a = !0, collapseWhitespace: o, trim: l, normalizer: i } = r === void 0 ? {} : r
		ce(e)
		const s = a ? ie : Ve,
			u = Se({ collapseWhitespace: o, trim: l, normalizer: i })
		return Array.from(e.querySelectorAll('[title], svg > title')).filter(
			c => s(c.getAttribute('title'), c, t, u) || (j0(c) && s($t(c), c, t, u)),
		)
	}, 'queryAllByTitle'),
	I0 = n((e, t) => 'Found multiple elements with the title: ' + t + '.', 'getMultipleError$2'),
	N0 = n((e, t) => 'Unable to find an element with the title: ' + t + '.', 'getMissingError$2'),
	cf = H(Tl, Tl.name, 'queryAll'),
	[df, ff, pf, vf, mf] = de(Tl, I0, N0)
function $l(e, t, r) {
	let {
		exact: a = !0,
		collapseWhitespace: o,
		hidden: l = x().defaultHidden,
		name: i,
		description: s,
		trim: u,
		normalizer: c,
		queryFallbacks: f = !1,
		selected: p,
		checked: m,
		pressed: y,
		current: C,
		level: v,
		expanded: P,
	} = r === void 0 ? {} : r
	ce(e)
	const h = a ? ie : Ve,
		E = Se({ collapseWhitespace: o, trim: u, normalizer: c })
	if (p !== void 0) {
		var T
		if (((T = Je.get(t)) == null ? void 0 : T.props['aria-selected']) === void 0)
			throw new Error('"aria-selected" is not supported on role "' + t + '".')
	}
	if (m !== void 0) {
		var O
		if (((O = Je.get(t)) == null ? void 0 : O.props['aria-checked']) === void 0)
			throw new Error('"aria-checked" is not supported on role "' + t + '".')
	}
	if (y !== void 0) {
		var q
		if (((q = Je.get(t)) == null ? void 0 : q.props['aria-pressed']) === void 0)
			throw new Error('"aria-pressed" is not supported on role "' + t + '".')
	}
	if (C !== void 0) {
		var b
		if (((b = Je.get(t)) == null ? void 0 : b.props['aria-current']) === void 0)
			throw new Error('"aria-current" is not supported on role "' + t + '".')
	}
	if (v !== void 0 && t !== 'heading')
		throw new Error('Role "' + t + '" cannot have "level" property.')
	if (P !== void 0) {
		var _
		if (((_ = Je.get(t)) == null ? void 0 : _.props['aria-expanded']) === void 0)
			throw new Error('"aria-expanded" is not supported on role "' + t + '".')
	}
	const w = new WeakMap()
	function Z(d) {
		return w.has(d) || w.set(d, Od(d)), w.get(d)
	}
	return (
		n(Z, 'cachedIsSubtreeInaccessible'),
		Array.from(e.querySelectorAll(k0(t, a, c ? E : void 0)))
			.filter(d => {
				if (d.hasAttribute('role')) {
					const ne = d.getAttribute('role')
					if (f)
						return ne
							.split(' ')
							.filter(Boolean)
							.some(kt => h(kt, d, t, E))
					if (c) return h(ne, d, t, E)
					const [Nt] = ne.split(' ')
					return h(Nt, d, t, E)
				}
				return ni(d).some(ne => h(ne, d, t, E))
			})
			.filter(d =>
				p !== void 0
					? p === v0(d)
					: m !== void 0
					  ? m === m0(d)
					  : y !== void 0
					    ? y === b0(d)
					    : C !== void 0
					      ? C === y0(d)
					      : P !== void 0
					        ? P === h0(d)
					        : v !== void 0
					          ? v === g0(d)
					          : !0,
			)
			.filter(d =>
				i === void 0
					? !0
					: ie(
							Kl(d, {
								computedStyleSupportsPseudoElements: x().computedStyleSupportsPseudoElements,
							}),
							d,
							i,
							Ae => Ae,
					  ),
			)
			.filter(d =>
				s === void 0
					? !0
					: ie(
							mc(d, {
								computedStyleSupportsPseudoElements: x().computedStyleSupportsPseudoElements,
							}),
							d,
							s,
							Ae => Ae,
					  ),
			)
			.filter(d => (l === !1 ? ao(d, { isSubtreeInaccessible: Z }) === !1 : !0))
	)
}
n($l, 'queryAllByRole')
function k0(e, t, r) {
	var a
	if (typeof e != 'string') return '*'
	const o = t && !r ? '*[role~="' + e + '"]' : '*[role]',
		l = (a = dd.get(e)) != null ? a : new Set(),
		i = new Set(
			Array.from(l).map(s => {
				let { name: u } = s
				return u
			}),
		)
	return [o].concat(Array.from(i)).join(',')
}
n(k0, 'makeRoleSelector')
const bf = n(e => {
		let t = ''
		return (
			e === void 0
				? (t = '')
				: typeof e == 'string'
				  ? (t = ' and name "' + e + '"')
				  : (t = ' and name `' + e + '`'),
			t
		)
	}, 'getNameHint'),
	D0 = n(function (e, t, r) {
		let { name: a } = r === void 0 ? {} : r
		return 'Found multiple elements with the role "' + t + '"' + bf(a)
	}, 'getMultipleError$1'),
	L0 = n(function (e, t, r) {
		let { hidden: a = x().defaultHidden, name: o, description: l } = r === void 0 ? {} : r
		if (x()._disableExpensiveErrorDiagnostics) return 'Unable to find role="' + t + '"' + bf(o)
		let i = ''
		Array.from(e.children).forEach(f => {
			i += Td(f, { hidden: a, includeDescription: l !== void 0 })
		})
		let s
		i.length === 0
			? a === !1
				? (s =
						'There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole')
				: (s = 'There are no available roles.')
			: (s = (
					`
Here are the ` +
					(a === !1 ? 'accessible' : 'available') +
					` roles:

  ` +
					i
						.replace(
							/\n/g,
							`
  `,
						)
						.replace(
							/\n\s\s\n/g,
							`

`,
						) +
					`
`
			  ).trim())
		let u = ''
		o === void 0
			? (u = '')
			: typeof o == 'string'
			  ? (u = ' and name "' + o + '"')
			  : (u = ' and name `' + o + '`')
		let c = ''
		return (
			l === void 0
				? (c = '')
				: typeof l == 'string'
				  ? (c = ' and description "' + l + '"')
				  : (c = ' and description `' + l + '`'),
			(
				`
Unable to find an ` +
				(a === !1 ? 'accessible ' : '') +
				'element with the role "' +
				t +
				'"' +
				u +
				c +
				`

` +
				s
			).trim()
		)
	}, 'getMissingError$1'),
	yf = H($l, $l.name, 'queryAll'),
	[hf, gf, Ef, _f, Rf] = de($l, D0, L0),
	ii = n(() => x().testIdAttribute, 'getTestIdAttribute'),
	xl = n(function () {
		for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
		return ce(t[0]), Ue(ii(), ...t)
	}, 'queryAllByTestId'),
	F0 = n((e, t) => 'Found multiple elements by: [' + ii() + '="' + t + '"]', 'getMultipleError'),
	V0 = n((e, t) => 'Unable to find an element by: [' + ii() + '="' + t + '"]', 'getMissingError'),
	Cf = H(xl, xl.name, 'queryAll'),
	[Pf, wf, Of, qf, Tf] = de(xl, F0, V0)
var pr = Object.freeze({
	__proto__: null,
	queryAllByLabelText: kd,
	queryByLabelText: Ad,
	getAllByLabelText: Id,
	getByLabelText: Nd,
	findAllByLabelText: Bd,
	findByLabelText: jd,
	queryByPlaceholderText: Ld,
	queryAllByPlaceholderText: Dd,
	getByPlaceholderText: Vd,
	getAllByPlaceholderText: Fd,
	findAllByPlaceholderText: Ud,
	findByPlaceholderText: Hd,
	queryByText: zd,
	queryAllByText: Wd,
	getByText: Gd,
	getAllByText: Kd,
	findAllByText: Yd,
	findByText: Xd,
	queryByDisplayValue: Jd,
	queryAllByDisplayValue: Qd,
	getByDisplayValue: ef,
	getAllByDisplayValue: Zd,
	findAllByDisplayValue: tf,
	findByDisplayValue: rf,
	queryByAltText: nf,
	queryAllByAltText: af,
	getByAltText: lf,
	getAllByAltText: of,
	findAllByAltText: uf,
	findByAltText: sf,
	queryByTitle: df,
	queryAllByTitle: cf,
	getByTitle: pf,
	getAllByTitle: ff,
	findAllByTitle: vf,
	findByTitle: mf,
	queryByRole: hf,
	queryAllByRole: yf,
	getAllByRole: gf,
	getByRole: Ef,
	findAllByRole: _f,
	findByRole: Rf,
	queryByTestId: Pf,
	queryAllByTestId: Cf,
	getByTestId: Of,
	getAllByTestId: wf,
	findAllByTestId: qf,
	findByTestId: Tf,
})
function Sl(e, t, r) {
	return (
		t === void 0 && (t = pr),
		r === void 0 && (r = {}),
		Object.keys(t).reduce((a, o) => {
			const l = t[o]
			return (a[o] = l.bind(null, e)), a
		}, r)
	)
}
n(Sl, 'getQueriesForElement')
const $f = n(e => !e || (Array.isArray(e) && !e.length), 'isRemoved')
function Qu(e) {
	if ($f(e))
		throw new Error(
			'The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.',
		)
}
n(Qu, 'initialCheck')
async function U0(e, t) {
	const r = new Error('Timed out in waitForElementToBeRemoved.')
	if (typeof e != 'function') {
		Qu(e)
		const o = (Array.isArray(e) ? e : [e]).map(l => {
			let i = l.parentElement
			if (i === null) return () => null
			for (; i.parentElement; ) i = i.parentElement
			return () => (i.contains(l) ? l : null)
		})
		e = n(() => o.map(l => l()).filter(Boolean), 'callback')
	}
	return (
		Qu(e()),
		oi(() => {
			let a
			try {
				a = e()
			} catch (o) {
				if (o.name === 'TestingLibraryElementError') return
				throw o
			}
			if (!$f(a)) throw r
		}, t)
	)
}
n(U0, 'waitForElementToBeRemoved')
const Ju = {
		copy: {
			EventType: 'ClipboardEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		cut: {
			EventType: 'ClipboardEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		paste: {
			EventType: 'ClipboardEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		compositionEnd: {
			EventType: 'CompositionEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		compositionStart: {
			EventType: 'CompositionEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		compositionUpdate: {
			EventType: 'CompositionEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		keyDown: {
			EventType: 'KeyboardEvent',
			defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
		},
		keyPress: {
			EventType: 'KeyboardEvent',
			defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
		},
		keyUp: {
			EventType: 'KeyboardEvent',
			defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
		},
		focus: { EventType: 'FocusEvent', defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
		blur: { EventType: 'FocusEvent', defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
		focusIn: {
			EventType: 'FocusEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
		},
		focusOut: {
			EventType: 'FocusEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
		},
		change: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !1 } },
		input: { EventType: 'InputEvent', defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
		invalid: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !0 } },
		submit: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
		reset: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
		click: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 },
		},
		contextMenu: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		dblClick: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		drag: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
		dragEnd: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
		dragEnter: {
			EventType: 'DragEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		dragExit: {
			EventType: 'DragEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
		},
		dragLeave: {
			EventType: 'DragEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
		},
		dragOver: {
			EventType: 'DragEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		dragStart: {
			EventType: 'DragEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		drop: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
		mouseDown: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		mouseEnter: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
		},
		mouseLeave: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
		},
		mouseMove: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		mouseOut: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		mouseOver: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		mouseUp: {
			EventType: 'MouseEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		select: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !1 } },
		touchCancel: {
			EventType: 'TouchEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
		},
		touchEnd: {
			EventType: 'TouchEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		touchMove: {
			EventType: 'TouchEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		touchStart: {
			EventType: 'TouchEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		resize: { EventType: 'UIEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
		scroll: { EventType: 'UIEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
		wheel: { EventType: 'WheelEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
		abort: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		canPlay: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		canPlayThrough: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		durationChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		emptied: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		encrypted: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		ended: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		loadedData: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		loadedMetadata: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		loadStart: { EventType: 'ProgressEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
		pause: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		play: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		playing: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		progress: { EventType: 'ProgressEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
		rateChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		seeked: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		seeking: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		stalled: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		suspend: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		timeUpdate: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		volumeChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		waiting: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		load: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		error: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
		animationStart: { EventType: 'AnimationEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
		animationEnd: { EventType: 'AnimationEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
		animationIteration: {
			EventType: 'AnimationEvent',
			defaultInit: { bubbles: !0, cancelable: !1 },
		},
		transitionCancel: {
			EventType: 'TransitionEvent',
			defaultInit: { bubbles: !0, cancelable: !1 },
		},
		transitionEnd: { EventType: 'TransitionEvent', defaultInit: { bubbles: !0, cancelable: !0 } },
		transitionRun: { EventType: 'TransitionEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
		transitionStart: { EventType: 'TransitionEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
		pointerOver: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		pointerEnter: { EventType: 'PointerEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
		pointerDown: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		pointerMove: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		pointerUp: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		pointerCancel: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
		},
		pointerOut: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
		},
		pointerLeave: { EventType: 'PointerEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
		gotPointerCapture: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
		},
		lostPointerCapture: {
			EventType: 'PointerEvent',
			defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
		},
		popState: { EventType: 'PopStateEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
	},
	Zu = { doubleClick: 'dblClick' }
function wt(e, t) {
	return x().eventWrapper(() => {
		if (!t) throw new Error('Unable to fire an event - please provide an event object.')
		if (!e)
			throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.')
		return e.dispatchEvent(t)
	})
}
n(wt, 'fireEvent')
function Zt(e, t, r, a) {
	let { EventType: o = 'Event', defaultInit: l = {} } = a === void 0 ? {} : a
	if (!t) throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.')
	const i = { ...l, ...r },
		{ target: { value: s, files: u, ...c } = {} } = i
	s !== void 0 && H0(t, s),
		u !== void 0 &&
			Object.defineProperty(t, 'files', {
				configurable: !0,
				enumerable: !0,
				writable: !0,
				value: u,
			}),
		Object.assign(t, c)
	const f = Ed(t),
		p = f[o] || f.Event
	let m
	if (typeof p == 'function') m = new p(e, i)
	else {
		m = f.document.createEvent(o)
		const { bubbles: C, cancelable: v, detail: P, ...h } = i
		m.initEvent(e, C, v, P),
			Object.keys(h).forEach(E => {
				m[E] = h[E]
			})
	}
	return (
		['dataTransfer', 'clipboardData'].forEach(C => {
			const v = i[C]
			typeof v == 'object' &&
				(typeof f.DataTransfer == 'function'
					? Object.defineProperty(m, C, {
							value: Object.getOwnPropertyNames(v).reduce(
								(P, h) => (Object.defineProperty(P, h, { value: v[h] }), P),
								new f.DataTransfer(),
							),
					  })
					: Object.defineProperty(m, C, { value: v }))
		}),
		m
	)
}
n(Zt, 'createEvent')
Object.keys(Ju).forEach(e => {
	const { EventType: t, defaultInit: r } = Ju[e],
		a = e.toLowerCase()
	;(Zt[e] = (o, l) => Zt(a, o, l, { EventType: t, defaultInit: r })),
		(wt[e] = (o, l) => wt(o, Zt[e](o, l)))
})
function H0(e, t) {
	const { set: r } = Object.getOwnPropertyDescriptor(e, 'value') || {},
		a = Object.getPrototypeOf(e),
		{ set: o } = Object.getOwnPropertyDescriptor(a, 'value') || {}
	if (o && r !== o) o.call(e, t)
	else if (r) r.call(e, t)
	else throw new Error('The given element does not have a value setter')
}
n(H0, 'setNativeValue')
Object.keys(Zu).forEach(e => {
	const t = Zu[e]
	wt[e] = function () {
		return wt[t](...arguments)
	}
})
function W0(e) {
	return e.replace(
		/[ \t]*[\n][ \t]*/g,
		`
`,
	)
}
n(W0, 'unindent')
function z0(e) {
	return FO.compressToEncodedURIComponent(W0(e))
}
n(z0, 'encode')
function K0(e) {
	return 'https://testing-playground.com/#markup=' + z0(e)
}
n(K0, 'getPlaygroundUrl')
const G0 = n((e, t, r) => (Array.isArray(e) ? e.forEach(a => Rl(a, t, r)) : Rl(e, t, r)), 'debug'),
	Y0 = n(function (e) {
		if ((e === void 0 && (e = ri().body), !e || !('innerHTML' in e))) {
			console.log("The element you're providing isn't a valid DOM element.")
			return
		}
		if (!e.innerHTML) {
			console.log("The provided element doesn't have any children.")
			return
		}
		const t = K0(e.innerHTML)
		return (
			console.log(
				`Open this URL in your browser

` + t,
			),
			t
		)
	}, 'logTestingPlaygroundURL'),
	es = { debug: G0, logTestingPlaygroundURL: Y0 },
	X0 =
		typeof document < 'u' && document.body
			? Sl(document.body, pr, es)
			: Object.keys(pr).reduce(
					(e, t) => (
						(e[t] = () => {
							throw new TypeError(
								'For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error',
							)
						}),
						e
					),
					es,
			  ),
	xf = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				prettyFormat: Iv,
				buildQueries: de,
				configure: u0,
				createEvent: Zt,
				findAllByAltText: uf,
				findAllByDisplayValue: tf,
				findAllByLabelText: Bd,
				findAllByPlaceholderText: Ud,
				findAllByRole: _f,
				findAllByTestId: qf,
				findAllByText: Yd,
				findAllByTitle: vf,
				findByAltText: sf,
				findByDisplayValue: rf,
				findByLabelText: jd,
				findByPlaceholderText: Hd,
				findByRole: Rf,
				findByTestId: Tf,
				findByText: Xd,
				findByTitle: mf,
				fireEvent: wt,
				getAllByAltText: of,
				getAllByDisplayValue: Zd,
				getAllByLabelText: Id,
				getAllByPlaceholderText: Fd,
				getAllByRole: gf,
				getAllByTestId: wf,
				getAllByText: Kd,
				getAllByTitle: ff,
				getByAltText: lf,
				getByDisplayValue: ef,
				getByLabelText: Nd,
				getByPlaceholderText: Vd,
				getByRole: Ef,
				getByTestId: Of,
				getByText: Gd,
				getByTitle: pf,
				getConfig: x,
				getDefaultNormalizer: ai,
				getElementError: no,
				getMultipleElementsFoundError: oo,
				getNodeText: $t,
				getQueriesForElement: Sl,
				getRoles: qd,
				getSuggestedQuery: fr,
				isInaccessible: ao,
				logDOM: Rl,
				logRoles: p0,
				makeFindQuery: ot,
				makeGetAllQuery: li,
				makeSingleQuery: nt,
				prettyDOM: Ct,
				queries: pr,
				queryAllByAltText: af,
				queryAllByAttribute: Ue,
				queryAllByDisplayValue: Qd,
				queryAllByLabelText: kd,
				queryAllByPlaceholderText: Dd,
				queryAllByRole: yf,
				queryAllByTestId: Cf,
				queryAllByText: Wd,
				queryAllByTitle: cf,
				queryByAltText: nf,
				queryByAttribute: $d,
				queryByDisplayValue: Jd,
				queryByLabelText: Ad,
				queryByPlaceholderText: Ld,
				queryByRole: hf,
				queryByTestId: Pf,
				queryByText: zd,
				queryByTitle: df,
				queryHelpers: R0,
				screen: X0,
				waitFor: oi,
				waitForElementToBeRemoved: U0,
				within: Sl,
				wrapAllByQueryWithSuggestion: H,
				wrapSingleQueryWithSuggestion: Te,
			},
			Symbol.toStringTag,
			{ value: 'Module' },
		),
	)
var Sf = {},
	He = {}
const W = np(xf)
var j = {},
	ui = {}
Object.defineProperty(ui, '__esModule', { value: !0 })
ui.getMouseEventOptions = Q0
function ts(e) {
	return e === 'mousedown' || e === 'mouseup' || e === 'click' || e === 'dblclick'
}
n(ts, 'isMousePressEvent')
const rs = { none: 0, primary: 1, secondary: 2, auxiliary: 4 },
	as = { primary: 0, auxiliary: 1, secondary: 2 }
function ns(e, t) {
	var r
	const [a, o] = t === 'button' ? [as, rs] : [rs, as],
		l = (r = Object.entries(a).find(([, i]) => i === e)) == null ? void 0 : r[0]
	return l && Object.prototype.hasOwnProperty.call(o, l) ? o[l] : 0
}
n(ns, 'translateButtonNumber')
function os(e, t, r) {
	return ts(e)
		? typeof t[r] == 'number'
			? t[r]
			: r === 'button' && typeof t.buttons == 'number'
			  ? ns(t.buttons, 'buttons')
			  : r === 'buttons' && typeof t.button == 'number'
			    ? ns(t.button, 'button')
			    : r != 'button' && ts(e)
			      ? 1
			      : 0
		: 0
}
n(os, 'convertMouseButtons')
function Q0(e, t, r = 0) {
	var a
	return (
		(t = (a = t) != null ? a : {}),
		{
			...t,
			detail: e === 'mousedown' || e === 'mouseup' || e === 'click' ? 1 + r : r,
			buttons: os(e, t, 'buttons'),
			button: os(e, t, 'button'),
		}
	)
}
n(Q0, 'getMouseEventOptions')
var si = {},
	fe = {}
Object.defineProperty(fe, '__esModule', { value: !0 })
fe.isElementType = J0
function J0(e, t, r) {
	return (e.namespaceURI && e.namespaceURI !== 'http://www.w3.org/1999/xhtml') ||
		((t = Array.isArray(t) ? t : [t]), !t.includes(e.tagName.toLowerCase()))
		? !1
		: r
		  ? Object.entries(r).every(([a, o]) => e[a] === o)
		  : !0
}
n(J0, 'isElementType')
Object.defineProperty(si, '__esModule', { value: !0 })
si.isClickableInput = eq
var ls = fe
const Z0 = ['button', 'color', 'file', 'image', 'reset', 'submit', 'checkbox', 'radio']
function eq(e) {
	return (
		(0, ls.isElementType)(e, 'button') || ((0, ls.isElementType)(e, 'input') && Z0.includes(e.type))
	)
}
n(eq, 'isClickableInput')
var ci = {}
Object.defineProperty(ci, '__esModule', { value: !0 })
ci.buildTimeValue = tq
function tq(e) {
	const t = e.replace(/\D/g, '')
	if (t.length < 2) return e
	const r = parseInt(t[0], 10),
		a = parseInt(t[1], 10)
	if (r >= 3 || (r === 2 && a >= 4)) {
		let o
		return r >= 3 ? (o = 1) : (o = 2), is(t, o)
	}
	return e.length === 2 ? e : is(t, 2)
}
n(tq, 'buildTimeValue')
function is(e, t) {
	const r = e.slice(0, t),
		a = Math.min(parseInt(r, 10), 23),
		o = e.slice(t),
		l = parseInt(o, 10),
		i = Math.min(l, 59)
	return `${a.toString().padStart(2, '0')}:${i.toString().padStart(2, '0')}`
}
n(is, 'build')
var di = {},
	We = {}
Object.defineProperty(We, '__esModule', { value: !0 })
We.getSelectionRange = Mf
We.hasSelectionSupport = fi
We.setSelectionRange = rq
var et = fe,
	Al
;(function (e) {
	;(e.text = 'text'),
		(e.search = 'search'),
		(e.url = 'url'),
		(e.tel = 'tel'),
		(e.password = 'password')
})(Al || (Al = {}))
const Af = Symbol('inputSelection')
function fi(e) {
	return (
		(0, et.isElementType)(e, 'textarea') ||
		((0, et.isElementType)(e, 'input') && Boolean(Al[e.type]))
	)
}
n(fi, 'hasSelectionSupport')
function Mf(e) {
	if (fi(e)) return { selectionStart: e.selectionStart, selectionEnd: e.selectionEnd }
	if ((0, et.isElementType)(e, 'input')) {
		var t
		return (t = e[Af]) != null ? t : { selectionStart: null, selectionEnd: null }
	}
	const r = e.ownerDocument.getSelection()
	if (r != null && r.rangeCount && e.contains(r.focusNode)) {
		const a = r.getRangeAt(0)
		return { selectionStart: a.startOffset, selectionEnd: a.endOffset }
	} else return { selectionStart: null, selectionEnd: null }
}
n(Mf, 'getSelectionRange')
function rq(e, t, r) {
	const { selectionStart: a, selectionEnd: o } = Mf(e)
	if (
		(a === t && o === r) ||
		(fi(e) && e.setSelectionRange(t, r),
		(0, et.isElementType)(e, 'input') && (e[Af] = { selectionStart: t, selectionEnd: r }),
		(0, et.isElementType)(e, 'input') || (0, et.isElementType)(e, 'textarea'))
	)
		return
	const l = e.ownerDocument.createRange()
	l.selectNodeContents(e), e.firstChild && (l.setStart(e.firstChild, t), l.setEnd(e.firstChild, r))
	const i = e.ownerDocument.getSelection()
	i && (i.removeAllRanges(), i.addRange(l))
}
n(rq, 'setSelectionRange')
var ut = {},
	St = {}
Object.defineProperty(St, '__esModule', { value: !0 })
St.isContentEditable = aq
function aq(e) {
	return (
		e.hasAttribute('contenteditable') &&
		(e.getAttribute('contenteditable') == 'true' || e.getAttribute('contenteditable') == '')
	)
}
n(aq, 'isContentEditable')
Object.defineProperty(ut, '__esModule', { value: !0 })
ut.getValue = oq
var nq = St
function oq(e) {
	return e ? ((0, nq.isContentEditable)(e) ? e.textContent : e.value) : null
}
n(oq, 'getValue')
var lo = {}
Object.defineProperty(lo, '__esModule', { value: !0 })
lo.isValidDateValue = lq
function lq(e, t) {
	const r = e.cloneNode()
	return (r.value = t), r.value === t
}
n(lq, 'isValidDateValue')
var io = {}
Object.defineProperty(io, '__esModule', { value: !0 })
io.isValidInputTimeValue = iq
function iq(e, t) {
	const r = e.cloneNode()
	return (r.value = t), r.value === t
}
n(iq, 'isValidInputTimeValue')
Object.defineProperty(di, '__esModule', { value: !0 })
di.calculateNewValue = dq
var uq = We,
	sq = ut,
	cq = lo,
	us = io
function dq(
	e,
	t,
	r = (() => {
		var l
		return (l = (0, sq.getValue)(t)) != null ? l : ''
	})(),
	a = (0, uq.getSelectionRange)(t),
	o,
) {
	const l = a.selectionStart === null ? r.length : a.selectionStart,
		i = a.selectionEnd === null ? r.length : a.selectionEnd,
		s = Math.max(0, l === i && o === 'backward' ? l - 1 : l),
		u = r.substring(0, s),
		c = Math.min(r.length, l === i && o === 'forward' ? i + 1 : i),
		f = r.substring(c, r.length)
	let p = `${u}${e}${f}`
	const m = s + e.length
	return (
		t.type === 'date' && !(0, cq.isValidDateValue)(t, p) && (p = r),
		t.type === 'time' &&
			!(0, us.isValidInputTimeValue)(t, p) &&
			((0, us.isValidInputTimeValue)(t, e) ? (p = e) : (p = r)),
		{ newValue: p, newSelectionStart: m }
	)
}
n(dq, 'calculateNewValue')
var uo = {}
Object.defineProperty(uo, '__esModule', { value: !0 })
uo.isCursorAtEnd = pq
uo.isCursorAtStart = vq
var Bf = We,
	fq = ut
function pq(e) {
	var t
	const { selectionStart: r, selectionEnd: a } = (0, Bf.getSelectionRange)(e)
	return r === a && (r != null ? r : 0) === ((t = (0, fq.getValue)(e)) != null ? t : '').length
}
n(pq, 'isCursorAtEnd')
function vq(e) {
	const { selectionStart: t, selectionEnd: r } = (0, Bf.getSelectionRange)(e)
	return t === r && (t != null ? t : 0) === 0
}
n(vq, 'isCursorAtStart')
var pi = {}
Object.defineProperty(pi, '__esModule', { value: !0 })
pi.hasUnreliableEmptyValue = bq
var mq = fe,
	Ml
;(function (e) {
	e.number = 'number'
})(Ml || (Ml = {}))
function bq(e) {
	return (0, mq.isElementType)(e, 'input') && Boolean(Ml[e.type])
}
n(bq, 'hasUnreliableEmptyValue')
var ze = {}
Object.defineProperty(ze, '__esModule', { value: !0 })
ze.editableInputTypes = void 0
ze.isEditable = hq
ze.isEditableInput = If
var jf = fe,
	yq = St
function hq(e) {
	return (
		If(e) || (0, jf.isElementType)(e, 'textarea', { readOnly: !1 }) || (0, yq.isContentEditable)(e)
	)
}
n(hq, 'isEditable')
let vr
ze.editableInputTypes = vr
;(function (e) {
	;(e.text = 'text'),
		(e.date = 'date'),
		(e['datetime-local'] = 'datetime-local'),
		(e.email = 'email'),
		(e.month = 'month'),
		(e.number = 'number'),
		(e.password = 'password'),
		(e.search = 'search'),
		(e.tel = 'tel'),
		(e.time = 'time'),
		(e.url = 'url'),
		(e.week = 'week')
})(vr || (ze.editableInputTypes = vr = {}))
function If(e) {
	return (0, jf.isElementType)(e, 'input', { readOnly: !1 }) && Boolean(vr[e.type])
}
n(If, 'isEditableInput')
var vi = {}
Object.defineProperty(vi, '__esModule', { value: !0 })
vi.getSpaceUntilMaxLength = Eq
var ss = fe,
	gq = ut,
	Bl
;(function (e) {
	;(e.email = 'email'),
		(e.password = 'password'),
		(e.search = 'search'),
		(e.telephone = 'telephone'),
		(e.text = 'text'),
		(e.url = 'url')
})(Bl || (Bl = {}))
function Eq(e) {
	const t = (0, gq.getValue)(e)
	if (t === null) return
	const r = _q(e)
	return r ? r - t.length : void 0
}
n(Eq, 'getSpaceUntilMaxLength')
function _q(e) {
	var t
	if (!Rq(e)) return
	const r = (t = e.getAttribute('maxlength')) != null ? t : ''
	return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0
}
n(_q, 'getSanitizedMaxLength')
function Rq(e) {
	return (
		(0, ss.isElementType)(e, 'textarea') ||
		((0, ss.isElementType)(e, 'input') && Boolean(Bl[e.type]))
	)
}
n(Rq, 'supportsMaxLength')
var mi = {},
	At = {}
Object.defineProperty(At, '__esModule', { value: !0 })
At.isDisabled = Cq
function Cq(e) {
	return Boolean(e && e.disabled)
}
n(Cq, 'isDisabled')
Object.defineProperty(mi, '__esModule', { value: !0 })
mi.getActiveElement = Nf
var Pq = At
function Nf(e) {
	const t = e.activeElement
	return t != null && t.shadowRoot
		? Nf(t.shadowRoot)
		: (0, Pq.isDisabled)(t)
		  ? e.ownerDocument
				? e.ownerDocument.body
				: e.body
		  : t
}
n(Nf, 'getActiveElement')
var bi = {},
	so = {}
Object.defineProperty(so, '__esModule', { value: !0 })
so.isLabelWithInternallyDisabledControl = qq
var wq = At,
	Oq = fe
function qq(e) {
	if (!(0, Oq.isElementType)(e, 'label')) return !1
	const t = e.control
	return Boolean(t && e.contains(t) && (0, wq.isDisabled)(t))
}
n(qq, 'isLabelWithInternallyDisabledControl')
var Mt = {}
Object.defineProperty(Mt, '__esModule', { value: !0 })
Mt.FOCUSABLE_SELECTOR = void 0
const Tq = [
	'input:not([type=hidden]):not([disabled])',
	'button:not([disabled])',
	'select:not([disabled])',
	'textarea:not([disabled])',
	'[contenteditable=""]',
	'[contenteditable="true"]',
	'a[href]',
	'[tabindex]:not([disabled])',
].join(', ')
Mt.FOCUSABLE_SELECTOR = Tq
Object.defineProperty(bi, '__esModule', { value: !0 })
bi.isFocusable = Sq
var $q = so,
	xq = Mt
function Sq(e) {
	return !(0, $q.isLabelWithInternallyDisabledControl)(e) && e.matches(xq.FOCUSABLE_SELECTOR)
}
n(Sq, 'isFocusable')
var yi = {}
Object.defineProperty(yi, '__esModule', { value: !0 })
yi.eventWrapper = Mq
var Aq = W
function Mq(e) {
	let t
	return (
		(0, Aq.getConfig)().eventWrapper(() => {
			t = e()
		}),
		t
	)
}
n(Mq, 'eventWrapper')
var hi = {},
	pe = {}
Object.defineProperty(pe, '__esModule', { value: !0 })
pe.TEXT_NODE = void 0
pe.checkContainerType = kq
pe.getDocument = Iq
pe.getWindowFromNode = Nq
pe.jestFakeTimersAreEnabled = jq
const Bq = 3
pe.TEXT_NODE = Bq
function jq() {
	return typeof jest < 'u' && jest !== null
		? setTimeout._isMockFunction === !0 || Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
		: !1
}
n(jq, 'jestFakeTimersAreEnabled')
function Iq() {
	if (typeof window > 'u') throw new Error('Could not find default container')
	return window.document
}
n(Iq, 'getDocument')
function Nq(e) {
	if (e.defaultView) return e.defaultView
	if (e.ownerDocument && e.ownerDocument.defaultView) return e.ownerDocument.defaultView
	if (e.window) return e.window
	throw e.ownerDocument && e.ownerDocument.defaultView === null
		? new Error('It looks like the window object is not available for the provided node.')
		: e.then instanceof Function
		  ? new Error(
					'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?',
		    )
		  : Array.isArray(e)
		    ? new Error(
						'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?',
		      )
		    : typeof e.debug == 'function' && typeof e.logTestingPlaygroundURL == 'function'
		      ? new Error(
							'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?',
		        )
		      : new Error(`The given node is not an Element, the node type is: ${typeof e}.`)
}
n(Nq, 'getWindowFromNode')
function kq(e) {
	if (!e || typeof e.querySelector != 'function' || typeof e.querySelectorAll != 'function')
		throw new TypeError(
			`Expected container to be an Element, a Document or a DocumentFragment but got ${t(e)}.`,
		)
	function t(r) {
		return typeof r == 'object' ? (r === null ? 'null' : r.constructor.name) : typeof r
	}
	n(t, 'getTypeName')
}
n(kq, 'checkContainerType')
Object.defineProperty(hi, '__esModule', { value: !0 })
hi.isVisible = Lq
var Dq = pe
function Lq(e) {
	const t = (0, Dq.getWindowFromNode)(e)
	for (let a = e; (r = a) != null && r.ownerDocument; a = a.parentElement) {
		var r
		if (t.getComputedStyle(a).display === 'none') return !1
	}
	return !0
}
n(Lq, 'isVisible')
var gi = {}
Object.defineProperty(gi, '__esModule', { value: !0 })
gi.isDocument = Fq
function Fq(e) {
	return e.nodeType === e.DOCUMENT_NODE
}
n(Fq, 'isDocument')
var Ei = {}
Object.defineProperty(Ei, '__esModule', { value: !0 })
Ei.wait = Vq
function Vq(e) {
	return new Promise(t => setTimeout(() => t(), e))
}
n(Vq, 'wait')
var _i = {}
Object.defineProperty(_i, '__esModule', { value: !0 })
_i.hasPointerEvents = Hq
var Uq = pe
function Hq(e) {
	const t = (0, Uq.getWindowFromNode)(e)
	for (let a = e; (r = a) != null && r.ownerDocument; a = a.parentElement) {
		var r
		const o = t.getComputedStyle(a).pointerEvents
		if (o && !['inherit', 'unset'].includes(o)) return o !== 'none'
	}
	return !0
}
n(Hq, 'hasPointerEvents')
var co = {}
Object.defineProperty(co, '__esModule', { value: !0 })
co.hasFormSubmit = void 0
const Wq = n(
	e =>
		!!(e && (e.querySelector('input[type="submit"]') || e.querySelector('button[type="submit"]'))),
	'hasFormSubmit',
)
co.hasFormSubmit = Wq
;(function (e) {
	Object.defineProperty(e, '__esModule', { value: !0 })
	var t = ui
	Object.keys(t).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === t[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return t[d]
				},
			})
	})
	var r = si
	Object.keys(r).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === r[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return r[d]
				},
			})
	})
	var a = ci
	Object.keys(a).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === a[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return a[d]
				},
			})
	})
	var o = di
	Object.keys(o).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === o[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return o[d]
				},
			})
	})
	var l = uo
	Object.keys(l).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === l[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return l[d]
				},
			})
	})
	var i = ut
	Object.keys(i).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === i[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return i[d]
				},
			})
	})
	var s = pi
	Object.keys(s).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === s[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return s[d]
				},
			})
	})
	var u = St
	Object.keys(u).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === u[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return u[d]
				},
			})
	})
	var c = ze
	Object.keys(c).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === c[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return c[d]
				},
			})
	})
	var f = lo
	Object.keys(f).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === f[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return f[d]
				},
			})
	})
	var p = io
	Object.keys(p).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === p[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return p[d]
				},
			})
	})
	var m = vi
	Object.keys(m).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === m[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return m[d]
				},
			})
	})
	var y = We
	Object.keys(y).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === y[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return y[d]
				},
			})
	})
	var C = mi
	Object.keys(C).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === C[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return C[d]
				},
			})
	})
	var v = bi
	Object.keys(v).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === v[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return v[d]
				},
			})
	})
	var P = Mt
	Object.keys(P).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === P[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return P[d]
				},
			})
	})
	var h = yi
	Object.keys(h).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === h[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return h[d]
				},
			})
	})
	var E = fe
	Object.keys(E).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === E[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return E[d]
				},
			})
	})
	var T = so
	Object.keys(T).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === T[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return T[d]
				},
			})
	})
	var O = hi
	Object.keys(O).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === O[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return O[d]
				},
			})
	})
	var q = At
	Object.keys(q).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === q[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return q[d]
				},
			})
	})
	var b = gi
	Object.keys(b).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === b[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return b[d]
				},
			})
	})
	var _ = Ei
	Object.keys(_).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === _[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return _[d]
				},
			})
	})
	var w = _i
	Object.keys(w).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === w[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return w[d]
				},
			})
	})
	var Z = co
	Object.keys(Z).forEach(function (d) {
		d === 'default' ||
			d === '__esModule' ||
			(d in e && e[d] === Z[d]) ||
			Object.defineProperty(e, d, {
				enumerable: !0,
				get: function () {
					return Z[d]
				},
			})
	})
})(j)
var st = {}
Object.defineProperty(st, '__esModule', { value: !0 })
st.hover = zq
st.unhover = Kq
var K = W,
	V = j
function kf(e) {
	const t = [e]
	let r = e
	for (; (r = r.parentElement) != null; ) t.push(r)
	return t
}
n(kf, 'getParentElements')
function zq(e, t, { skipPointerEventsCheck: r = !1 } = {}) {
	if (!r && !(0, V.hasPointerEvents)(e))
		throw new Error('unable to hover element as it has or inherits pointer-events set to "none".')
	if ((0, V.isLabelWithInternallyDisabledControl)(e)) return
	const a = kf(e).reverse()
	K.fireEvent.pointerOver(e, t)
	for (const o of a) K.fireEvent.pointerEnter(o, t)
	if (!(0, V.isDisabled)(e)) {
		K.fireEvent.mouseOver(e, (0, V.getMouseEventOptions)('mouseover', t))
		for (const o of a) K.fireEvent.mouseEnter(o, (0, V.getMouseEventOptions)('mouseenter', t))
	}
	K.fireEvent.pointerMove(e, t),
		(0, V.isDisabled)(e) || K.fireEvent.mouseMove(e, (0, V.getMouseEventOptions)('mousemove', t))
}
n(zq, 'hover')
function Kq(e, t, { skipPointerEventsCheck: r = !1 } = {}) {
	if (!r && !(0, V.hasPointerEvents)(e))
		throw new Error('unable to unhover element as it has or inherits pointer-events set to "none".')
	if ((0, V.isLabelWithInternallyDisabledControl)(e)) return
	const a = kf(e)
	K.fireEvent.pointerMove(e, t),
		(0, V.isDisabled)(e) || K.fireEvent.mouseMove(e, (0, V.getMouseEventOptions)('mousemove', t)),
		K.fireEvent.pointerOut(e, t)
	for (const o of a) K.fireEvent.pointerLeave(o, t)
	if (!(0, V.isDisabled)(e)) {
		K.fireEvent.mouseOut(e, (0, V.getMouseEventOptions)('mouseout', t))
		for (const o of a) K.fireEvent.mouseLeave(o, (0, V.getMouseEventOptions)('mouseleave', t))
	}
}
n(Kq, 'unhover')
var Bt = {}
Object.defineProperty(Bt, '__esModule', { value: !0 })
Bt.blur = Gq
var Zo = j
function Gq(e) {
	!(0, Zo.isFocusable)(e) ||
		!((0, Zo.getActiveElement)(e.ownerDocument) === e) ||
		(0, Zo.eventWrapper)(() => e.blur())
}
n(Gq, 'blur')
var ct = {}
Object.defineProperty(ct, '__esModule', { value: !0 })
ct.focus = Yq
var el = j
function Yq(e) {
	!(0, el.isFocusable)(e) ||
		(0, el.getActiveElement)(e.ownerDocument) === e ||
		(0, el.eventWrapper)(() => e.focus())
}
n(Yq, 'focus')
Object.defineProperty(He, '__esModule', { value: !0 })
He.click = jl
He.dblClick = tT
var L = W,
	I = j,
	Df = st,
	Xq = Bt,
	mr = ct
function Qq(e) {
	const t = e.ownerDocument.activeElement
	return t && t !== e.ownerDocument.body && t !== e ? t : null
}
n(Qq, 'getPreviouslyFocusedElement')
function Jq(e, t, { clickCount: r }) {
	;(0, I.isLabelWithInternallyDisabledControl)(e) ||
		(L.fireEvent.pointerDown(e, t),
		L.fireEvent.mouseDown(e, (0, I.getMouseEventOptions)('mousedown', t, r)),
		L.fireEvent.pointerUp(e, t),
		L.fireEvent.mouseUp(e, (0, I.getMouseEventOptions)('mouseup', t, r)),
		Ri(e, (0, I.getMouseEventOptions)('click', t, r)),
		e.control && (0, mr.focus)(e.control))
}
n(Jq, 'clickLabel')
function Zq(e, t, { clickCount: r }) {
	L.fireEvent.pointerDown(e, t),
		e.disabled || L.fireEvent.mouseDown(e, (0, I.getMouseEventOptions)('mousedown', t, r)),
		(0, mr.focus)(e),
		L.fireEvent.pointerUp(e, t),
		e.disabled ||
			(L.fireEvent.mouseUp(e, (0, I.getMouseEventOptions)('mouseup', t, r)),
			Ri(e, (0, I.getMouseEventOptions)('click', t, r)))
}
n(Zq, 'clickBooleanElement')
function cs(e, t, { clickCount: r }) {
	const a = Qq(e)
	if (
		(L.fireEvent.pointerDown(e, t),
		!(0, I.isDisabled)(e) &&
			L.fireEvent.mouseDown(e, (0, I.getMouseEventOptions)('mousedown', t, r)))
	) {
		const l = eT(e, I.isFocusable)
		a && !l ? (0, Xq.blur)(a) : l && (0, mr.focus)(l)
	}
	if ((L.fireEvent.pointerUp(e, t), !(0, I.isDisabled)(e))) {
		L.fireEvent.mouseUp(e, (0, I.getMouseEventOptions)('mouseup', t, r)),
			Ri(e, (0, I.getMouseEventOptions)('click', t, r))
		const o = e.closest('label')
		o != null && o.control && (0, mr.focus)(o.control)
	}
}
n(cs, 'clickElement')
function eT(e, t) {
	let r = e
	do {
		if (t(r)) return r
		r = r.parentElement
	} while (r && r !== e.ownerDocument.body)
}
n(eT, 'findClosest')
function jl(e, t, { skipHover: r = !1, clickCount: a = 0, skipPointerEventsCheck: o = !1 } = {}) {
	if (!o && !(0, I.hasPointerEvents)(e))
		throw new Error('unable to click element as it has or inherits pointer-events set to "none".')
	r || (0, Df.hover)(e, t, { skipPointerEventsCheck: !0 }),
		(0, I.isElementType)(e, 'label')
			? Jq(e, t, { clickCount: a })
			: (0, I.isElementType)(e, 'input')
			  ? e.type === 'checkbox' || e.type === 'radio'
					? Zq(e, t, { clickCount: a })
					: cs(e, t, { clickCount: a })
			  : cs(e, t, { clickCount: a })
}
n(jl, 'click')
function Ri(e, t) {
	t.button === 2 ? L.fireEvent.contextMenu(e, t) : L.fireEvent.click(e, t)
}
n(Ri, 'fireClick')
function tT(e, t, { skipPointerEventsCheck: r = !1 } = {}) {
	if (!r && !(0, I.hasPointerEvents)(e))
		throw new Error(
			'unable to double-click element as it has or inherits pointer-events set to "none".',
		)
	;(0, Df.hover)(e, t, { skipPointerEventsCheck: r }),
		jl(e, t, { skipHover: !0, clickCount: 0, skipPointerEventsCheck: r }),
		jl(e, t, { skipHover: !0, clickCount: 1, skipPointerEventsCheck: r }),
		L.fireEvent.dblClick(e, (0, I.getMouseEventOptions)('dblclick', t, 2))
}
n(tT, 'dblClick')
var fo = {},
	Ci = {},
	Pi = {},
	po = {},
	wi = {}
Object.defineProperty(wi, '__esModule', { value: !0 })
wi.getNextKeyDef = rT
var br
;(function (e) {
	;(e['{'] = '}'), (e['['] = ']')
})(br || (br = {}))
var Il
;(function (e) {
	;(e.alt = 'alt'), (e.ctrl = 'ctrl'), (e.meta = 'meta'), (e.shift = 'shift')
})(Il || (Il = {}))
var Nl
;(function (e) {
	;(e.ctrl = 'Control'), (e.del = 'Delete'), (e.esc = 'Escape'), (e.space = ' ')
})(Nl || (Nl = {}))
function rT(e, t) {
	var r
	const {
		type: a,
		descriptor: o,
		consumedLength: l,
		releasePrevious: i,
		releaseSelf: s,
		repeat: u,
	} = aT(e)
	return {
		keyDef:
			(r = t.keyboardMap.find(f => {
				if (a === '[') {
					var p
					return ((p = f.code) == null ? void 0 : p.toLowerCase()) === o.toLowerCase()
				} else if (a === '{') {
					var m
					const y = iT(o)
					return ((m = f.key) == null ? void 0 : m.toLowerCase()) === y.toLowerCase()
				}
				return f.key === o
			})) != null
				? r
				: { key: 'Unknown', code: 'Unknown', [a === '[' ? 'code' : 'key']: o },
		consumedLength: l,
		releasePrevious: i,
		releaseSelf: s,
		repeat: u,
	}
}
n(rT, 'getNextKeyDef')
function aT(e) {
	let t = 0
	const r = e[t] in br ? e[t] : ''
	t += r.length
	const a = r ? e.match(new RegExp(`^\\${r}+`))[0].length : 0,
		l = a === 2 || (r === '{' && a > 3) ? '' : r
	return { type: l, ...(l === '' ? nT(e, t) : oT(e, t, l)) }
}
n(aT, 'readNextDescriptor')
function nT(e, t) {
	const r = e[t]
	return (
		Lf(r, e, t),
		(t += r.length),
		{ consumedLength: t, descriptor: r, releasePrevious: !1, releaseSelf: !0, repeat: 1 }
	)
}
n(nT, 'readPrintableChar')
function oT(e, t, r) {
	var a, o, l
	const i = e[t] === '/' ? '/' : ''
	t += i.length
	const s = (a = e.slice(t).match(/^\w+/)) == null ? void 0 : a[0]
	Lf(s, e, t), (t += s.length)
	const u = (o = (l = e.slice(t).match(/^>\d+/)) == null ? void 0 : l[0]) != null ? o : ''
	t += u.length
	const c = e[t] === '/' || (!u && e[t] === '>') ? e[t] : ''
	t += c.length
	const f = br[r],
		p = e[t] === f ? f : ''
	if (!p)
		throw new Error(
			Vf(
				[!u && 'repeat modifier', !c && 'release modifier', `"${f}"`].filter(Boolean).join(' or '),
				e[t],
				e,
			),
		)
	return (
		(t += p.length),
		{
			consumedLength: t,
			descriptor: s,
			releasePrevious: !!i,
			repeat: u ? Math.max(Number(u.substr(1)), 1) : 1,
			releaseSelf: lT(r, s, c, u),
		}
	)
}
n(oT, 'readTag')
function Lf(e, t, r) {
	if (!e) throw new Error(Vf('key descriptor', t[r], t))
}
n(Lf, 'assertDescriptor')
function Ff(e, t) {
	return e[t]
}
n(Ff, 'getEnumValue')
function lT(e, t, r, a) {
	return r ? r === '/' : !(a || (e === '{' && Ff(Il, t.toLowerCase())))
}
n(lT, 'hasReleaseSelf')
function iT(e) {
	var t
	return (t = Ff(Nl, e)) != null ? t : e
}
n(iT, 'mapLegacyKey')
function Vf(e, t, r) {
	return `Expected ${e} but found "${t != null ? t : ''}" in "${r}"
    See https://github.com/testing-library/user-event/blob/main/README.md#keyboardtext-options
    for more information about how userEvent parses your input.`
}
n(Vf, 'getErrorMessage')
var N = {},
	vo = {}
Object.defineProperty(vo, '__esModule', { value: !0 })
vo.keydownBehavior = void 0
var tl = j
const uT = [
	{
		matches: (e, t) =>
			(e.key === 'ArrowLeft' || e.key === 'ArrowRight') &&
			(0, tl.isElementType)(t, ['input', 'textarea']),
		handle: (e, t) => {
			var r
			const { selectionStart: a, selectionEnd: o } = (0, tl.getSelectionRange)(t),
				l = e.key === 'ArrowLeft' ? -1 : 1,
				i = (r = a === o ? (a != null ? a : 0) + l : l < 0 ? a : o) != null ? r : 0
			;(0, tl.setSelectionRange)(t, i, i)
		},
	},
]
vo.keydownBehavior = uT
var mo = {},
	bo = {},
	Oi = {}
Object.defineProperty(Oi, '__esModule', { value: !0 })
Oi.carryValue = sT
var ds = j
function sT(e, t, r) {
	const a = (0, ds.getValue)(e)
	t.carryValue = a !== r && a === '' && (0, ds.hasUnreliableEmptyValue)(e) ? r : void 0
}
n(sT, 'carryValue')
var qi = {}
Object.defineProperty(qi, '__esModule', { value: !0 })
qi.fireChangeForInputTimeIfValid = fT
var cT = W,
	dT = j
function fT(e, t, r) {
	;(0, dT.isValidInputTimeValue)(e, r) &&
		t !== r &&
		cT.fireEvent.change(e, { target: { value: r } })
}
n(fT, 'fireChangeForInputTimeIfValid')
var Ti = {}
Object.defineProperty(Ti, '__esModule', { value: !0 })
Ti.fireInputEvent = pT
var Uf = W,
	Be = j
function pT(e, { newValue: t, newSelectionStart: r, eventOverrides: a }) {
	if ((0, Be.isContentEditable)(e)) fs(e, 'textContent', t)
	else if ((0, Be.isElementType)(e, ['input', 'textarea'])) fs(e, 'value', t)
	else throw new Error('Invalid Element')
	vT(e, r), Uf.fireEvent.input(e, { ...a }), mT(e, t, r)
}
n(pT, 'fireInputEvent')
function vT(e, t) {
	;(0, Be.setSelectionRange)(e, t, t)
}
n(vT, 'setSelectionRangeAfterInput')
function mT(e, t, r) {
	const a = (0, Be.getValue)(e)
	if (!(a === '' && (0, Be.hasUnreliableEmptyValue)(e)) && a === t) {
		const { selectionStart: l } = (0, Be.getSelectionRange)(e)
		l === a.length && (0, Be.setSelectionRange)(e, r, r)
	}
}
n(mT, 'setSelectionRangeAfterInputHandler')
const Ut = Symbol('initial input value/textContent'),
	rl = Symbol('onBlur')
function fs(e, t, r) {
	const a = Object.getOwnPropertyDescriptor(e, t),
		o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
	if (
		(a && o && Object.defineProperty(e, t, o),
		e[Ut] === void 0 && (e[Ut] = String(e[t])),
		(e[t] = r),
		!e[rl])
	) {
		var l
		;(l = e.ownerDocument.defaultView) == null ||
			l.addEventListener(
				'blur',
				(e[rl] = () => {
					const i = e[Ut]
					delete e[rl], delete e[Ut], String(e[t]) !== i && Uf.fireEvent.change(e)
				}),
				{ capture: !0, once: !0 },
			)
	}
	a && Object.defineProperty(e, t, a)
}
n(fs, 'applyNative')
;(function (e) {
	Object.defineProperty(e, '__esModule', { value: !0 })
	var t = Oi
	Object.keys(t).forEach(function (o) {
		o === 'default' ||
			o === '__esModule' ||
			(o in e && e[o] === t[o]) ||
			Object.defineProperty(e, o, {
				enumerable: !0,
				get: function () {
					return t[o]
				},
			})
	})
	var r = qi
	Object.keys(r).forEach(function (o) {
		o === 'default' ||
			o === '__esModule' ||
			(o in e && e[o] === r[o]) ||
			Object.defineProperty(e, o, {
				enumerable: !0,
				get: function () {
					return r[o]
				},
			})
	})
	var a = Ti
	Object.keys(a).forEach(function (o) {
		o === 'default' ||
			o === '__esModule' ||
			(o in e && e[o] === a[o]) ||
			Object.defineProperty(e, o, {
				enumerable: !0,
				get: function () {
					return a[o]
				},
			})
	})
})(bo)
Object.defineProperty(mo, '__esModule', { value: !0 })
mo.keydownBehavior = void 0
var z = j,
	ps = bo
const bT = [
	{
		matches: (e, t) =>
			(e.key === 'Home' || e.key === 'End') &&
			((0, z.isElementType)(t, ['input', 'textarea']) || (0, z.isContentEditable)(t)),
		handle: (e, t) => {
			if (e.key === 'Home') (0, z.setSelectionRange)(t, 0, 0)
			else {
				var r, a
				const o = (r = (a = (0, z.getValue)(t)) == null ? void 0 : a.length) != null ? r : 0
				;(0, z.setSelectionRange)(t, o, o)
			}
		},
	},
	{
		matches: (e, t) =>
			(e.key === 'PageUp' || e.key === 'PageDown') && (0, z.isElementType)(t, ['input']),
		handle: (e, t) => {
			if (e.key === 'PageUp') (0, z.setSelectionRange)(t, 0, 0)
			else {
				var r, a
				const o = (r = (a = (0, z.getValue)(t)) == null ? void 0 : a.length) != null ? r : 0
				;(0, z.setSelectionRange)(t, o, o)
			}
		},
	},
	{
		matches: (e, t) => e.key === 'Delete' && (0, z.isEditable)(t) && !(0, z.isCursorAtEnd)(t),
		handle: (e, t, r, a) => {
			const { newValue: o, newSelectionStart: l } = (0, z.calculateNewValue)(
				'',
				t,
				a.carryValue,
				void 0,
				'forward',
			)
			;(0, ps.fireInputEvent)(t, {
				newValue: o,
				newSelectionStart: l,
				eventOverrides: { inputType: 'deleteContentForward' },
			}),
				(0, ps.carryValue)(t, a, o)
		},
	},
]
mo.keydownBehavior = bT
var yo = {}
Object.defineProperty(yo, '__esModule', { value: !0 })
yo.keypressBehavior = void 0
var yT = W,
	Qe = bo,
	M = j
const hT = [
	{
		matches: (e, t) => {
			var r
			return (
				((r = e.key) == null ? void 0 : r.length) === 1 &&
				(0, M.isElementType)(t, 'input', { type: 'time', readOnly: !1 })
			)
		},
		handle: (e, t, r, a) => {
			var o
			let l = e.key
			const i = ((o = a.carryValue) != null ? o : '') + l,
				s = (0, M.buildTimeValue)(i)
			;(0, M.isValidInputTimeValue)(t, s) && (l = s)
			const { newValue: u, newSelectionStart: c } = (0, M.calculateNewValue)(l, t),
				f = (0, M.getValue)(t)
			f !== u &&
				(0, Qe.fireInputEvent)(t, {
					newValue: u,
					newSelectionStart: c,
					eventOverrides: { data: e.key, inputType: 'insertText' },
				}),
				(0, Qe.fireChangeForInputTimeIfValid)(t, f, s),
				(a.carryValue = i)
		},
	},
	{
		matches: (e, t) => {
			var r
			return (
				((r = e.key) == null ? void 0 : r.length) === 1 &&
				(0, M.isElementType)(t, 'input', { type: 'date', readOnly: !1 })
			)
		},
		handle: (e, t, r, a) => {
			var o
			let l = e.key
			const i = ((o = a.carryValue) != null ? o : '') + l,
				s = (0, M.isValidDateValue)(t, i)
			s && (l = i)
			const { newValue: u, newSelectionStart: c } = (0, M.calculateNewValue)(l, t)
			;(0, M.getValue)(t) !== u &&
				(0, Qe.fireInputEvent)(t, {
					newValue: u,
					newSelectionStart: c,
					eventOverrides: { data: e.key, inputType: 'insertText' },
				}),
				s && yT.fireEvent.change(t, { target: { value: i } }),
				(a.carryValue = i)
		},
	},
	{
		matches: (e, t) => {
			var r
			return (
				((r = e.key) == null ? void 0 : r.length) === 1 &&
				(0, M.isElementType)(t, 'input', { type: 'number', readOnly: !1 })
			)
		},
		handle: (e, t, r, a) => {
			var o, l, i, s
			if (!/[\d.\-e]/.test(e.key)) return
			const u = (o = (l = a.carryValue) != null ? l : (0, M.getValue)(t)) != null ? o : '',
				{ newValue: c, newSelectionStart: f } = (0, M.calculateNewValue)(e.key, t, u),
				p = c.split('e', 2)
			if (
				Number((i = c.match(/-/g)) == null ? void 0 : i.length) > 2 ||
				Number((s = c.match(/\./g)) == null ? void 0 : s.length) > 1 ||
				(p[1] && !/^-?\d*$/.test(p[1]))
			)
				return
			;(0, Qe.fireInputEvent)(t, {
				newValue: c,
				newSelectionStart: f,
				eventOverrides: { data: e.key, inputType: 'insertText' },
			}),
				(0, M.getValue)(t) === c ? (a.carryValue = void 0) : (a.carryValue = c)
		},
	},
	{
		matches: (e, t) => {
			var r
			return (
				((r = e.key) == null ? void 0 : r.length) === 1 &&
				(((0, M.isElementType)(t, ['input', 'textarea'], { readOnly: !1 }) &&
					!(0, M.isClickableInput)(t)) ||
					(0, M.isContentEditable)(t)) &&
				(0, M.getSpaceUntilMaxLength)(t) !== 0
			)
		},
		handle: (e, t) => {
			const { newValue: r, newSelectionStart: a } = (0, M.calculateNewValue)(e.key, t)
			;(0, Qe.fireInputEvent)(t, {
				newValue: r,
				newSelectionStart: a,
				eventOverrides: { data: e.key, inputType: 'insertText' },
			})
		},
	},
	{
		matches: (e, t) =>
			e.key === 'Enter' &&
			((0, M.isElementType)(t, 'textarea', { readOnly: !1 }) || (0, M.isContentEditable)(t)) &&
			(0, M.getSpaceUntilMaxLength)(t) !== 0,
		handle: (e, t, r, a) => {
			const { newValue: o, newSelectionStart: l } = (0, M.calculateNewValue)(
					`
`,
					t,
				),
				i =
					(0, M.isContentEditable)(t) && !a.modifiers.shift ? 'insertParagraph' : 'insertLineBreak'
			;(0, Qe.fireInputEvent)(t, {
				newValue: o,
				newSelectionStart: l,
				eventOverrides: { inputType: i },
			})
		},
	},
]
yo.keypressBehavior = hT
var U = {},
	jt = {}
Object.defineProperty(jt, '__esModule', { value: !0 })
jt.getKeyEventProps = gT
jt.getMouseEventProps = ET
function gT(e, t) {
	var r, a
	return {
		key: e.key,
		code: e.code,
		altKey: t.modifiers.alt,
		ctrlKey: t.modifiers.ctrl,
		metaKey: t.modifiers.meta,
		shiftKey: t.modifiers.shift,
		keyCode:
			(r = e.keyCode) != null
				? r
				: ((a = e.key) == null ? void 0 : a.length) === 1
				  ? e.key.charCodeAt(0)
				  : void 0,
	}
}
n(gT, 'getKeyEventProps')
function ET(e) {
	return {
		altKey: e.modifiers.alt,
		ctrlKey: e.modifiers.ctrl,
		metaKey: e.modifiers.meta,
		shiftKey: e.modifiers.shift,
	}
}
n(ET, 'getMouseEventProps')
Object.defineProperty(U, '__esModule', { value: !0 })
U.preKeyupBehavior =
	U.preKeydownBehavior =
	U.postKeyupBehavior =
	U.keyupBehavior =
	U.keypressBehavior =
	U.keydownBehavior =
		void 0
var tt = W,
	te = j,
	ho = jt,
	vs = bo
const Hf = { Alt: 'alt', Control: 'ctrl', Shift: 'shift', Meta: 'meta' },
	_T = [
		...Object.entries(Hf).map(([e, t]) => ({
			matches: r => r.key === e,
			handle: (r, a, o, l) => {
				l.modifiers[t] = !0
			},
		})),
		{
			matches: e => e.key === 'AltGraph',
			handle: (e, t, r, a) => {
				var o
				const l =
					(o = r.keyboardMap.find(i => i.key === 'Control')) != null
						? o
						: { key: 'Control', code: 'Control' }
				tt.fireEvent.keyDown(t, (0, ho.getKeyEventProps)(l, a))
			},
		},
	]
U.preKeydownBehavior = _T
const RT = [
	{
		matches: e => e.key === 'CapsLock',
		handle: (e, t, r, a) => {
			a.modifiers.caps = !a.modifiers.caps
		},
	},
	{
		matches: (e, t) =>
			e.key === 'Backspace' && (0, te.isEditable)(t) && !(0, te.isCursorAtStart)(t),
		handle: (e, t, r, a) => {
			const { newValue: o, newSelectionStart: l } = (0, te.calculateNewValue)(
				'',
				t,
				a.carryValue,
				void 0,
				'backward',
			)
			;(0, vs.fireInputEvent)(t, {
				newValue: o,
				newSelectionStart: l,
				eventOverrides: { inputType: 'deleteContentBackward' },
			}),
				(0, vs.carryValue)(t, a, o)
		},
	},
]
U.keydownBehavior = RT
const CT = [
	{
		matches: (e, t) =>
			e.key === 'Enter' &&
			(0, te.isElementType)(t, 'input') &&
			['checkbox', 'radio'].includes(t.type),
		handle: (e, t) => {
			const r = t.form
			;(0, te.hasFormSubmit)(r) && tt.fireEvent.submit(r)
		},
	},
	{
		matches: (e, t) =>
			e.key === 'Enter' &&
			((0, te.isClickableInput)(t) || ((0, te.isElementType)(t, 'a') && Boolean(t.href))),
		handle: (e, t, r, a) => {
			tt.fireEvent.click(t, (0, ho.getMouseEventProps)(a))
		},
	},
	{
		matches: (e, t) => e.key === 'Enter' && (0, te.isElementType)(t, 'input'),
		handle: (e, t) => {
			const r = t.form
			r &&
				(r.querySelectorAll('input').length === 1 || (0, te.hasFormSubmit)(r)) &&
				tt.fireEvent.submit(r)
		},
	},
]
U.keypressBehavior = CT
const PT = [
	...Object.entries(Hf).map(([e, t]) => ({
		matches: r => r.key === e,
		handle: (r, a, o, l) => {
			l.modifiers[t] = !1
		},
	})),
]
U.preKeyupBehavior = PT
const wT = [
	{
		matches: (e, t) => e.key === ' ' && (0, te.isClickableInput)(t),
		handle: (e, t, r, a) => {
			tt.fireEvent.click(t, (0, ho.getMouseEventProps)(a))
		},
	},
]
U.keyupBehavior = wT
const OT = [
	{
		matches: e => e.key === 'AltGraph',
		handle: (e, t, r, a) => {
			var o
			const l =
				(o = r.keyboardMap.find(i => i.key === 'Control')) != null
					? o
					: { key: 'Control', code: 'Control' }
			tt.fireEvent.keyUp(t, (0, ho.getKeyEventProps)(l, a))
		},
	},
]
U.postKeyupBehavior = OT
Object.defineProperty(N, '__esModule', { value: !0 })
N.replaceBehavior =
	N.preKeyupBehavior =
	N.preKeydownBehavior =
	N.postKeyupBehavior =
	N.keyupBehavior =
	N.keypressBehavior =
	N.keydownBehavior =
		void 0
var ms = j,
	qT = go(vo),
	TT = go(mo),
	$T = go(yo),
	dt = go(U)
function Wf(e) {
	if (typeof WeakMap != 'function') return null
	var t = new WeakMap(),
		r = new WeakMap()
	return (Wf = n(function (a) {
		return a ? r : t
	}, '_getRequireWildcardCache$1'))(e)
}
n(Wf, '_getRequireWildcardCache$1')
function go(e, t) {
	if (!t && e && e.__esModule) return e
	if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e }
	var r = Wf(t)
	if (r && r.has(e)) return r.get(e)
	var a = {},
		o = Object.defineProperty && Object.getOwnPropertyDescriptor
	for (var l in e)
		if (l !== 'default' && Object.prototype.hasOwnProperty.call(e, l)) {
			var i = o ? Object.getOwnPropertyDescriptor(e, l) : null
			i && (i.get || i.set) ? Object.defineProperty(a, l, i) : (a[l] = e[l])
		}
	return (a.default = e), r && r.set(e, a), a
}
n(go, '_interopRequireWildcard$1')
const xT = [
	{
		matches: (e, t) => e.key === 'selectall' && (0, ms.isElementType)(t, ['input', 'textarea']),
		handle: (e, t, r, a) => {
			var o
			;(0, ms.setSelectionRange)(t, 0, ((o = a.carryValue) != null ? o : t.value).length)
		},
	},
]
N.replaceBehavior = xT
const ST = [...dt.preKeydownBehavior]
N.preKeydownBehavior = ST
const AT = [...qT.keydownBehavior, ...TT.keydownBehavior, ...dt.keydownBehavior]
N.keydownBehavior = AT
const MT = [...dt.keypressBehavior, ...$T.keypressBehavior]
N.keypressBehavior = MT
const BT = [...dt.preKeyupBehavior]
N.preKeyupBehavior = BT
const jT = [...dt.keyupBehavior]
N.keyupBehavior = jT
const IT = [...dt.postKeyupBehavior]
N.postKeyupBehavior = IT
Object.defineProperty(po, '__esModule', { value: !0 })
po.keyboardImplementation = Gf
po.releaseAllKeys = DT
var $i = W,
	zf = j,
	NT = wi,
	Ie = kT(N),
	xi = jt
function Kf(e) {
	if (typeof WeakMap != 'function') return null
	var t = new WeakMap(),
		r = new WeakMap()
	return (Kf = n(function (a) {
		return a ? r : t
	}, '_getRequireWildcardCache'))(e)
}
n(Kf, '_getRequireWildcardCache')
function kT(e, t) {
	if (!t && e && e.__esModule) return e
	if (e === null || (typeof e != 'object' && typeof e != 'function')) return { default: e }
	var r = Kf(t)
	if (r && r.has(e)) return r.get(e)
	var a = {},
		o = Object.defineProperty && Object.getOwnPropertyDescriptor
	for (var l in e)
		if (l !== 'default' && Object.prototype.hasOwnProperty.call(e, l)) {
			var i = o ? Object.getOwnPropertyDescriptor(e, l) : null
			i && (i.get || i.set) ? Object.defineProperty(a, l, i) : (a[l] = e[l])
		}
	return (a.default = e), r && r.set(e, a), a
}
n(kT, '_interopRequireWildcard')
async function Gf(e, t, r) {
	var a
	const { document: o } = t,
		l = n(() => Yf(o), 'getCurrentElement'),
		{
			keyDef: i,
			consumedLength: s,
			releasePrevious: u,
			releaseSelf: c,
			repeat: f,
		} = (a = r.repeatKey) != null ? a : (0, NT.getNextKeyDef)(e, t)
	if (!Ne(Ie.replaceBehavior, i, l(), t, r)) {
		const m = r.pressed.find(y => y.keyDef === i)
		if ((m && !r.repeatKey && kl(i, l, t, r, m.unpreventedDefault), !u)) {
			const y = LT(i, l, t, r)
			y && VT(i, r) && FT(i, l, t, r), c && f <= 1 && kl(i, l, t, r, y)
		}
	}
	if (
		(f > 1
			? (r.repeatKey = {
					consumedLength: 0,
					keyDef: i,
					releasePrevious: u,
					releaseSelf: c,
					repeat: f - 1,
			  })
			: delete r.repeatKey,
		e.length > s || f > 1)
	)
		return t.delay > 0 && (await (0, zf.wait)(t.delay)), Gf(e.slice(s), t, r)
}
n(Gf, 'keyboardImplementation')
function Yf(e) {
	var t
	return (t = (0, zf.getActiveElement)(e)) != null ? t : e.body
}
n(Yf, 'getActive')
function DT(e, t) {
	const r = n(() => Yf(e.document), 'getCurrentElement')
	for (const a of t.pressed) kl(a.keyDef, r, e, t, a.unpreventedDefault)
}
n(DT, 'releaseAllKeys')
function LT(e, t, r, a) {
	const o = t()
	o !== a.activeElement && ((a.carryValue = void 0), (a.carryChar = '')),
		(a.activeElement = o),
		Ne(Ie.preKeydownBehavior, e, o, r, a)
	const l = $i.fireEvent.keyDown(o, (0, xi.getKeyEventProps)(e, a))
	return (
		a.pressed.push({ keyDef: e, unpreventedDefault: l }),
		l && Ne(Ie.keydownBehavior, e, t(), r, a),
		l
	)
}
n(LT, 'keydown')
function FT(e, t, r, a) {
	const o = t()
	$i.fireEvent.keyPress(o, (0, xi.getKeyEventProps)(e, a)) && Ne(Ie.keypressBehavior, e, t(), r, a)
}
n(FT, 'keypress')
function kl(e, t, r, a, o) {
	const l = t()
	Ne(Ie.preKeyupBehavior, e, l, r, a)
	const i = $i.fireEvent.keyUp(l, (0, xi.getKeyEventProps)(e, a))
	o && i && Ne(Ie.keyupBehavior, e, t(), r, a),
		(a.pressed = a.pressed.filter(s => s.keyDef !== e)),
		Ne(Ie.postKeyupBehavior, e, l, r, a)
}
n(kl, 'keyup')
function Ne(e, t, r, a, o) {
	const l = e.find(i => i.matches(t, r, a, o))
	return l && l.handle(t, r, a, o), !!l
}
n(Ne, 'applyPlugins')
function VT(e, t) {
	var r
	return (
		(((r = e.key) == null ? void 0 : r.length) === 1 || e.key === 'Enter') &&
		!t.modifiers.ctrl &&
		!t.modifiers.alt
	)
}
n(VT, 'hasKeyPress')
var Eo = {},
	It = {}
Object.defineProperty(It, '__esModule', { value: !0 })
It.DOM_KEY_LOCATION = void 0
let Dl
It.DOM_KEY_LOCATION = Dl
;(function (e) {
	;(e[(e.STANDARD = 0)] = 'STANDARD'),
		(e[(e.LEFT = 1)] = 'LEFT'),
		(e[(e.RIGHT = 2)] = 'RIGHT'),
		(e[(e.NUMPAD = 3)] = 'NUMPAD')
})(Dl || (It.DOM_KEY_LOCATION = Dl = {}))
Object.defineProperty(Eo, '__esModule', { value: !0 })
Eo.defaultKeyMap = void 0
var ee = It
const UT = [
	...'0123456789'.split('').map(e => ({ code: `Digit${e}`, key: e })),
	...')!@#$%^&*('.split('').map((e, t) => ({ code: `Digit${t}`, key: e, shiftKey: !0 })),
	...'abcdefghijklmnopqrstuvwxyz'.split('').map(e => ({ code: `Key${e.toUpperCase()}`, key: e })),
	...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(e => ({ code: `Key${e}`, key: e, shiftKey: !0 })),
	{ code: 'Space', key: ' ' },
	{ code: 'AltLeft', key: 'Alt', location: ee.DOM_KEY_LOCATION.LEFT, keyCode: 18 },
	{ code: 'AltRight', key: 'Alt', location: ee.DOM_KEY_LOCATION.RIGHT, keyCode: 18 },
	{ code: 'ShiftLeft', key: 'Shift', location: ee.DOM_KEY_LOCATION.LEFT, keyCode: 16 },
	{ code: 'ShiftRight', key: 'Shift', location: ee.DOM_KEY_LOCATION.RIGHT, keyCode: 16 },
	{ code: 'ControlLeft', key: 'Control', location: ee.DOM_KEY_LOCATION.LEFT, keyCode: 17 },
	{ code: 'ControlRight', key: 'Control', location: ee.DOM_KEY_LOCATION.RIGHT, keyCode: 17 },
	{ code: 'MetaLeft', key: 'Meta', location: ee.DOM_KEY_LOCATION.LEFT, keyCode: 93 },
	{ code: 'MetaRight', key: 'Meta', location: ee.DOM_KEY_LOCATION.RIGHT, keyCode: 93 },
	{ code: 'OSLeft', key: 'OS', location: ee.DOM_KEY_LOCATION.LEFT, keyCode: 91 },
	{ code: 'OSRight', key: 'OS', location: ee.DOM_KEY_LOCATION.RIGHT, keyCode: 91 },
	{ code: 'CapsLock', key: 'CapsLock', keyCode: 20 },
	{ code: 'Backspace', key: 'Backspace', keyCode: 8 },
	{ code: 'Enter', key: 'Enter', keyCode: 13 },
	{ code: 'Escape', key: 'Escape', keyCode: 27 },
	{ code: 'ArrowUp', key: 'ArrowUp', keyCode: 38 },
	{ code: 'ArrowDown', key: 'ArrowDown', keyCode: 40 },
	{ code: 'ArrowLeft', key: 'ArrowLeft', keyCode: 37 },
	{ code: 'ArrowRight', key: 'ArrowRight', keyCode: 39 },
	{ code: 'Home', key: 'Home', keyCode: 36 },
	{ code: 'End', key: 'End', keyCode: 35 },
	{ code: 'Delete', key: 'Delete', keyCode: 46 },
	{ code: 'PageUp', key: 'PageUp', keyCode: 33 },
	{ code: 'PageDown', key: 'PageDown', keyCode: 34 },
]
Eo.defaultKeyMap = UT
var _o = {}
Object.defineProperty(_o, '__esModule', { value: !0 })
_o.specialCharMap = void 0
const HT = {
	arrowLeft: '{arrowleft}',
	arrowRight: '{arrowright}',
	arrowDown: '{arrowdown}',
	arrowUp: '{arrowup}',
	enter: '{enter}',
	escape: '{esc}',
	delete: '{del}',
	backspace: '{backspace}',
	home: '{home}',
	end: '{end}',
	selectAll: '{selectall}',
	space: '{space}',
	whitespace: ' ',
	pageUp: '{pageUp}',
	pageDown: '{pageDown}',
}
_o.specialCharMap = HT
;(function (e) {
	Object.defineProperty(e, '__esModule', { value: !0 }),
		(e.keyboard = l),
		(e.keyboardImplementationWrapper = i),
		Object.defineProperty(e, 'specialCharMap', {
			enumerable: !0,
			get: function () {
				return o.specialCharMap
			},
		})
	var t = W,
		r = po,
		a = Eo,
		o = _o
	function l(u, c) {
		var f
		const { promise: p, state: m } = i(u, c)
		return ((f = c == null ? void 0 : c.delay) != null ? f : 0) > 0
			? (0, t.getConfig)().asyncWrapper(() => p.then(() => m))
			: (p.catch(console.error), m)
	}
	n(l, 'keyboard')
	function i(u, c = {}) {
		const {
				keyboardState: f = s(),
				delay: p = 0,
				document: m = document,
				autoModify: y = !1,
				keyboardMap: C = a.defaultKeyMap,
			} = c,
			v = { delay: p, document: m, autoModify: y, keyboardMap: C }
		return {
			promise: (0, r.keyboardImplementation)(u, v, f),
			state: f,
			releaseAllKeys: () => (0, r.releaseAllKeys)(v, f),
		}
	}
	n(i, 'keyboardImplementationWrapper')
	function s() {
		return {
			activeElement: null,
			pressed: [],
			carryChar: '',
			modifiers: { alt: !1, caps: !1, ctrl: !1, meta: !1, shift: !1 },
		}
	}
	n(s, 'createKeyboardState')
})(Pi)
Object.defineProperty(Ci, '__esModule', { value: !0 })
Ci.typeImplementation = KT
var Ht = j,
	WT = He,
	zT = Pi
async function KT(
	e,
	t,
	{
		delay: r,
		skipClick: a = !1,
		skipAutoClose: o = !1,
		initialSelectionStart: l = void 0,
		initialSelectionEnd: i = void 0,
	},
) {
	if (e.disabled) return
	a || (0, WT.click)(e)
	const s = n(() => (0, Ht.getActiveElement)(e.ownerDocument), 'currentElement'),
		u = (0, Ht.getValue)(s()),
		{ selectionStart: c, selectionEnd: f } = (0, Ht.getSelectionRange)(e)
	u != null &&
		(c === null || c === 0) &&
		(f === null || f === 0) &&
		(0, Ht.setSelectionRange)(s(), l != null ? l : u.length, i != null ? i : u.length)
	const { promise: p, releaseAllKeys: m } = (0, zT.keyboardImplementationWrapper)(t, {
		delay: r,
		document: e.ownerDocument,
	})
	return r > 0 && (await p), o || m(), p
}
n(KT, 'typeImplementation')
Object.defineProperty(fo, '__esModule', { value: !0 })
fo.type = YT
var GT = W,
	bs = Ci
function YT(e, t, { delay: r = 0, ...a } = {}) {
	return r > 0
		? (0, GT.getConfig)().asyncWrapper(() => (0, bs.typeImplementation)(e, t, { delay: r, ...a }))
		: void (0, bs.typeImplementation)(e, t, { delay: r, ...a }).catch(console.error)
}
n(YT, 'type')
var Si = {}
Object.defineProperty(Si, '__esModule', { value: !0 })
Si.clear = QT
var ys = j,
	XT = fo
function QT(e) {
	var t, r
	if (!(0, ys.isElementType)(e, ['input', 'textarea']))
		throw new Error('clear currently only supports input and textarea elements.')
	if ((0, ys.isDisabled)(e)) return
	const a = e.type
	a !== 'textarea' && (e.type = 'text'),
		(0, XT.type)(e, '{selectall}{del}', {
			delay: 0,
			initialSelectionStart: (t = e.selectionStart) != null ? t : void 0,
			initialSelectionEnd: (r = e.selectionEnd) != null ? r : void 0,
		}),
		a !== 'textarea' && (e.type = a)
}
n(QT, 'clear')
var Ai = {}
Object.defineProperty(Ai, '__esModule', { value: !0 })
Ai.tab = t$
var Wt = W,
	bt = j,
	JT = ct,
	ZT = Bt
function e$(e, t, r, a) {
	if ((0, bt.isDocument)(a) && ((e === 0 && t) || (e === r.length - 1 && !t))) return a.body
	const o = t ? e - 1 : e + 1,
		l = t ? r.length - 1 : 0
	return r[o] || r[l]
}
n(e$, 'getNextElement')
function t$({ shift: e = !1, focusTrap: t } = {}) {
	var r, a
	const o = (r = (a = t) == null ? void 0 : a.ownerDocument) != null ? r : document,
		l = (0, bt.getActiveElement)(o)
	t || (t = o)
	const i = t.querySelectorAll(bt.FOCUSABLE_SELECTOR),
		s = Array.from(i).filter(
			h =>
				h === l ||
				(h.getAttribute('tabindex') !== '-1' && !(0, bt.isDisabled)(h) && (0, bt.isVisible)(h)),
		)
	if (s.length === 0) return
	const u = s
			.map((h, E) => ({ el: h, idx: E }))
			.sort((h, E) => {
				if (l && l.getAttribute('tabindex') === '-1') return h.idx - E.idx
				const T = Number(h.el.getAttribute('tabindex')),
					O = Number(E.el.getAttribute('tabindex')),
					q = T - O
				return q === 0 ? h.idx - E.idx : q
			})
			.map(({ el: h }) => h),
		c = {}
	let f = []
	u.forEach(h => {
		const E = h
		if (E.type === 'radio' && E.name) {
			const T = l
			if (T && T.type === E.type && T.name === E.name) {
				E === T && f.push(E)
				return
			}
			if (E.checked) {
				;(f = f.filter(O => O.type !== E.type || O.name !== E.name)), f.push(E), (c[E.name] = E)
				return
			}
			if (typeof c[E.name] < 'u') return
		}
		f.push(E)
	})
	const p = f.findIndex(h => h === l),
		m = e$(p, e, f, t),
		y = { key: 'Shift', keyCode: 16, shiftKey: !0 },
		C = { key: 'Tab', keyCode: 9, shiftKey: e }
	let v = !0
	l && (e && Wt.fireEvent.keyDown(l, { ...y }), (v = Wt.fireEvent.keyDown(l, { ...C })))
	const P = !v && l ? l : m
	v && (m === o.body ? l && (0, ZT.blur)(l) : (0, JT.focus)(m)),
		Wt.fireEvent.keyUp(P, { ...C }),
		e && Wt.fireEvent.keyUp(P, { ...y, shiftKey: !1 })
}
n(t$, 'tab')
var Mi = {}
Object.defineProperty(Mi, '__esModule', { value: !0 })
Mi.upload = o$
var al = W,
	r$ = He,
	a$ = Bt,
	n$ = ct,
	nl = j
function o$(e, t, r, { applyAccept: a = !1 } = {}) {
	var o
	const l = (0, nl.isElementType)(e, 'label') ? e.control : e
	if (!l || !(0, nl.isElementType)(l, 'input', { type: 'file' }))
		throw new TypeError(
			`The ${l === e ? 'given' : 'associated'} ${
				l == null ? void 0 : l.tagName
			} element does not accept file uploads`,
		)
	if ((0, nl.isDisabled)(e)) return
	;(0, r$.click)(e, r == null ? void 0 : r.clickInit)
	const i = (Array.isArray(t) ? t : [t])
		.filter(u => !a || l$(u, l.accept))
		.slice(0, l.multiple ? void 0 : 1)
	if (
		((0, a$.blur)(e),
		(0, n$.focus)(e),
		i.length === ((o = l.files) == null ? void 0 : o.length) &&
			i.every((u, c) => {
				var f
				return u === ((f = l.files) == null ? void 0 : f.item(c))
			}))
	)
		return
	const s = {
		...i,
		length: i.length,
		item: u => i[u],
		[Symbol.iterator]() {
			let u = 0
			return { next: () => ({ done: u >= i.length, value: i[u++] }) }
		},
	}
	;(0, al.fireEvent)(
		l,
		(0, al.createEvent)('input', l, {
			target: { files: s },
			bubbles: !0,
			cancelable: !1,
			composed: !0,
		}),
	),
		al.fireEvent.change(l, { target: { files: s }, ...(r == null ? void 0 : r.changeInit) })
}
n(o$, 'upload')
function l$(e, t) {
	if (!t) return !0
	const r = ['audio/*', 'image/*', 'video/*']
	return t
		.split(',')
		.some(a =>
			a.startsWith('.')
				? e.name.endsWith(a)
				: r.includes(a)
				  ? e.type.startsWith(a.substr(0, a.length - 1))
				  : e.type === a,
		)
}
n(l$, 'isAcceptableFile')
var lt = {}
Object.defineProperty(lt, '__esModule', { value: !0 })
lt.selectOptions = lt.deselectOptions = void 0
var A = W,
	mt = j,
	hs = He,
	gs = ct,
	Es = st
function Xf(e, t, r, a, { skipPointerEventsCheck: o = !1 } = {}) {
	if (!e && !t.multiple)
		throw (0, A.getConfig)().getElementError(
			'Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.',
			t,
		)
	const l = Array.isArray(r) ? r : [r],
		i = Array.from(t.querySelectorAll('option, [role="option"]')),
		s = l
			.map(c => {
				if (typeof c != 'string' && i.includes(c)) return c
				{
					const f = i.find(p => p.value === c || p.innerHTML === c)
					if (f) return f
					throw (0, A.getConfig)().getElementError(`Value "${String(c)}" not found in options`, t)
				}
			})
			.filter(c => !(0, mt.isDisabled)(c))
	if ((0, mt.isDisabled)(t) || !s.length) return
	if ((0, mt.isElementType)(t, 'select'))
		if (t.multiple)
			for (const c of s) {
				const f = o ? !0 : (0, mt.hasPointerEvents)(c)
				f &&
					(A.fireEvent.pointerOver(c, a),
					A.fireEvent.pointerEnter(t, a),
					A.fireEvent.mouseOver(c),
					A.fireEvent.mouseEnter(t),
					A.fireEvent.pointerMove(c, a),
					A.fireEvent.mouseMove(c, a),
					A.fireEvent.pointerDown(c, a),
					A.fireEvent.mouseDown(c, a)),
					(0, gs.focus)(t),
					f && (A.fireEvent.pointerUp(c, a), A.fireEvent.mouseUp(c, a)),
					u(c),
					f && A.fireEvent.click(c, a)
			}
		else if (s.length === 1) {
			const c = o ? !0 : (0, mt.hasPointerEvents)(t)
			c ? (0, hs.click)(t, a, { skipPointerEventsCheck: o }) : (0, gs.focus)(t),
				u(s[0]),
				c &&
					(A.fireEvent.pointerOver(t, a),
					A.fireEvent.pointerEnter(t, a),
					A.fireEvent.mouseOver(t),
					A.fireEvent.mouseEnter(t),
					A.fireEvent.pointerUp(t, a),
					A.fireEvent.mouseUp(t, a),
					A.fireEvent.click(t, a))
		} else
			throw (0, A.getConfig)().getElementError(
				'Cannot select multiple options on a non-multiple select',
				t,
			)
	else if (t.getAttribute('role') === 'listbox')
		s.forEach(c => {
			;(0, Es.hover)(c, a, { skipPointerEventsCheck: o }),
				(0, hs.click)(c, a, { skipPointerEventsCheck: o }),
				(0, Es.unhover)(c, a, { skipPointerEventsCheck: o })
		})
	else
		throw (0, A.getConfig)().getElementError(
			'Cannot select options on elements that are neither select nor listbox elements',
			t,
		)
	function u(c) {
		;(c.selected = e),
			(0, A.fireEvent)(
				t,
				(0, A.createEvent)('input', t, { bubbles: !0, cancelable: !1, composed: !0, ...a }),
			),
			A.fireEvent.change(t, a)
	}
	n(u, 'selectOption')
}
n(Xf, 'selectOptionsBase')
const i$ = Xf.bind(null, !0)
lt.selectOptions = i$
const u$ = Xf.bind(null, !1)
lt.deselectOptions = u$
var Bi = {}
Object.defineProperty(Bi, '__esModule', { value: !0 })
Bi.paste = c$
var _s = W,
	oe = j
function s$(e) {
	return (
		((0, oe.isElementType)(e, 'input') && Boolean(oe.editableInputTypes[e.type])) ||
		(0, oe.isElementType)(e, 'textarea')
	)
}
n(s$, 'isSupportedElement')
function c$(e, t, r, { initialSelectionStart: a, initialSelectionEnd: o } = {}) {
	if (!s$(e))
		throw new TypeError(`The given ${e.tagName} element is currently unsupported.
      A PR extending this implementation would be very much welcome at https://github.com/testing-library/user-event`)
	if (
		(0, oe.isDisabled)(e) ||
		((0, oe.eventWrapper)(() => e.focus()),
		e.selectionStart === 0 &&
			e.selectionEnd === 0 &&
			(0, oe.setSelectionRange)(e, a != null ? a : e.value.length, o != null ? o : e.value.length),
		_s.fireEvent.paste(e, r),
		e.readOnly)
	)
		return
	t = t.substr(0, (0, oe.getSpaceUntilMaxLength)(e))
	const { newValue: l, newSelectionStart: i } = (0, oe.calculateNewValue)(t, e)
	_s.fireEvent.input(e, { inputType: 'insertFromPaste', target: { value: l } }),
		(0, oe.setSelectionRange)(e, { newSelectionStart: i, selectionEnd: i }, {})
}
n(c$, 'paste')
;(function (e) {
	Object.defineProperty(e, '__esModule', { value: !0 }),
		(e.default = void 0),
		Object.defineProperty(e, 'specialChars', {
			enumerable: !0,
			get: function () {
				return c.specialCharMap
			},
		})
	var t = He,
		r = fo,
		a = Si,
		o = Ai,
		l = st,
		i = Mi,
		s = lt,
		u = Bi,
		c = Pi,
		p = {
			click: t.click,
			dblClick: t.dblClick,
			type: r.type,
			clear: a.clear,
			tab: o.tab,
			hover: l.hover,
			unhover: l.unhover,
			upload: i.upload,
			selectOptions: s.selectOptions,
			deselectOptions: s.deselectOptions,
			paste: u.paste,
			keyboard: c.keyboard,
		}
	e.default = p
})(Sf)
const d$ = op(Sf)
var f$ =
		(globalThis && globalThis.__makeTemplateObject) ||
		function (e, t) {
			return Object.defineProperty ? Object.defineProperty(e, 'raw', { value: t }) : (e.raw = t), e
		},
	Ee =
		(globalThis && globalThis.__assign) ||
		function () {
			return (
				(Ee =
					Object.assign ||
					function (e) {
						for (var t, r = 1, a = arguments.length; r < a; r++) {
							t = arguments[r]
							for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
						}
						return e
					}),
				Ee.apply(this, arguments)
			)
		},
	Rs = { timeout: 2147483647, interval: 2147483647 },
	R = ws(Ee({}, xf), {
		intercept: function (e, t) {
			return t[0] === 'fireEvent' || e.startsWith('findBy')
		},
		getArgs: function (e, t) {
			if (!t.isDebugging) return e.args
			if (e.method.startsWith('findBy')) {
				var r = e.args,
					a = r[0],
					o = r[1],
					l = r[2]
				return [a, o, Ee(Ee({}, l), Rs)]
			}
			if (e.method.startsWith('waitFor')) {
				var i = e.args,
					s = i[0],
					u = i[1]
				return [s, Ee(Ee({}, u), Rs)]
			}
			return e.args
		},
	})
R.screen = Object.entries(R.screen).reduce(
	function (e, t) {
		var r = t[0],
			a = t[1]
		return Object.defineProperty(e, r, {
			get: function () {
				return (
					lp.warn(
						ip(
							Cs ||
								(Cs = f$(
									[
										"\n          You are using Testing Library's `screen` object. Use `within(canvasElement)` instead.\n          More info: https://storybook.js.org/docs/react/essentials/interactions\n        ",
									],
									[
										"\n          You are using Testing Library's \\`screen\\` object. Use \\`within(canvasElement)\\` instead.\n          More info: https://storybook.js.org/docs/react/essentials/interactions\n        ",
									],
								)),
						),
					),
					a
				)
			},
		})
	},
	Ee({}, R.screen),
)
R.buildQueries
R.configure
R.createEvent
R.findAllByAltText
R.findAllByDisplayValue
R.findAllByLabelText
R.findAllByPlaceholderText
R.findAllByRole
R.findAllByTestId
R.findAllByText
R.findAllByTitle
R.findByAltText
R.findByDisplayValue
R.findByLabelText
R.findByPlaceholderText
R.findByRole
R.findByTestId
R.findByText
R.findByTitle
R.fireEvent
R.getAllByAltText
R.getAllByDisplayValue
R.getAllByLabelText
R.getAllByPlaceholderText
R.getAllByRole
R.getAllByTestId
R.getAllByText
R.getAllByTitle
R.getByAltText
R.getByDisplayValue
R.getByLabelText
R.getByPlaceholderText
R.getByRole
R.getByTestId
R.getByText
R.getByTitle
R.getConfig
R.getDefaultNormalizer
R.getElementError
R.getNodeText
R.getQueriesForElement
R.getRoles
R.getSuggestedQuery
R.isInaccessible
R.logDOM
R.logRoles
R.prettyDOM
R.queries
R.queryAllByAltText
R.queryAllByAttribute
R.queryAllByDisplayValue
R.queryAllByLabelText
R.queryAllByPlaceholderText
R.queryAllByRole
R.queryAllByTestId
R.queryAllByText
R.queryAllByTitle
R.queryByAltText
R.queryByAttribute
R.queryByDisplayValue
R.queryByLabelText
R.queryByPlaceholderText
R.queryByRole
R.queryByTestId
R.queryByText
R.queryByTitle
R.queryHelpers
R.screen
R.waitFor
R.waitForElementToBeRemoved
var p$ = R.within
R.prettyFormat
var v$ = ws({ userEvent: d$ }, { intercept: !0 }).userEvent,
	Cs
const gt = n(() => {
	const [e, t] = sp.useState()
	return Ke('article', {
		children: [
			F(cp, {
				user: e,
				onLogin: () => t({ name: 'Jane Doe' }),
				onLogout: () => t(void 0),
				onCreateAccount: () => t({ name: 'Jane Doe' }),
			}),
			Ke('section', {
				children: [
					F('h2', { children: 'Pages in Storybook' }),
					Ke('p', {
						children: [
							'We recommend building UIs with a',
							' ',
							F('a', {
								href: 'https://componentdriven.org',
								target: '_blank',
								rel: 'noopener noreferrer',
								children: F('strong', { children: 'component-driven' }),
							}),
							' ',
							'process starting with atomic components and ending with pages.',
						],
					}),
					F('p', {
						children:
							'Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:',
					}),
					Ke('ul', {
						children: [
							F('li', {
								children:
									'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories',
							}),
							F('li', {
								children:
									'Assemble data in the page component from your services. You can mock these services out using Storybook.',
							}),
						],
					}),
					Ke('p', {
						children: [
							'Get a guided tutorial on component-driven development at',
							' ',
							F('a', {
								href: 'https://storybook.js.org/tutorials/',
								target: '_blank',
								rel: 'noopener noreferrer',
								children: 'Storybook tutorials',
							}),
							'. Read more in the',
							' ',
							F('a', {
								href: 'https://storybook.js.org/docs',
								target: '_blank',
								rel: 'noopener noreferrer',
								children: 'docs',
							}),
							'.',
						],
					}),
					Ke('div', {
						className: 'tip-wrapper',
						children: [
							F('span', { className: 'tip', children: 'Tip' }),
							' Adjust the width of the canvas with the',
							' ',
							F('svg', {
								width: '10',
								height: '10',
								viewBox: '0 0 12 12',
								xmlns: 'http://www.w3.org/2000/svg',
								children: F('g', {
									fill: 'none',
									fillRule: 'evenodd',
									children: F('path', {
										d: 'M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z',
										id: 'a',
										fill: '#999',
									}),
								}),
							}),
							'Viewports addon in the toolbar',
						],
					}),
				],
			}),
		],
	})
}, 'Page')
try {
	;(gt.displayName = 'Page'),
		(gt.__docgenInfo = { description: '', displayName: 'Page', props: {} }),
		typeof STORYBOOK_REACT_CLASSES < 'u' &&
			(STORYBOOK_REACT_CLASSES['src/stories/Page.tsx#Page'] = {
				docgenInfo: gt.__docgenInfo,
				name: 'Page',
				path: 'src/stories/Page.tsx#Page',
			})
} catch {}
const P$ = {
		title: 'Example/Page',
		component: gt,
		parameters: {
			storySource: {
				source: `import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { Page } from './Page'

export default {
	title: 'Example/Page',
	component: Page,
	parameters: {
		// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = args => <Page {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const loginButton = await canvas.getByRole('button', { name: /Log in/i })
	await userEvent.click(loginButton)
}
`,
				locationsMap: {
					'logged-out': {
						startLoc: { col: 46, line: 15 },
						endLoc: { col: 72, line: 15 },
						startBody: { col: 46, line: 15 },
						endBody: { col: 72, line: 15 },
					},
					'logged-in': {
						startLoc: { col: 46, line: 15 },
						endLoc: { col: 72, line: 15 },
						startBody: { col: 46, line: 15 },
						endBody: { col: 72, line: 15 },
					},
				},
			},
			layout: 'fullscreen',
		},
	},
	Qf = n(e => F(gt, { ...e }), 'Template'),
	w$ = Qf.bind({}),
	m$ = Qf.bind({})
m$.play = async ({ canvasElement: e }) => {
	const r = await p$(e).getByRole('button', { name: /Log in/i })
	await v$.click(r)
}
const O$ = ['LoggedOut', 'LoggedIn']
export { m$ as LoggedIn, w$ as LoggedOut, O$ as __namedExportsOrder, P$ as default }
//# sourceMappingURL=Page.stories.9264309b.js.map
