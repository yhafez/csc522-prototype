var p = Object.defineProperty
var o = (r, e) => p(r, 'name', { value: e, configurable: !0 })
import { T as u, s as d, ay as y, az as E, E as O } from './iframe.734f45ba.js'
var R = u,
	b = d,
	m = y,
	x = E,
	I = O,
	g = R.RegExp,
	c = g.prototype,
	P =
		b &&
		I(function () {
			var r = !0
			try {
				g('.', 'd')
			} catch {
				r = !1
			}
			var e = {},
				t = '',
				s = r ? 'dgimsy' : 'gimsy',
				n = o(function (l, v) {
					Object.defineProperty(e, l, {
						get: function () {
							return (t += v), !0
						},
					})
				}, 'addGetter'),
				a = { dotAll: 's', global: 'g', ignoreCase: 'i', multiline: 'm', sticky: 'y' }
			r && (a.hasIndices = 'd')
			for (var i in a) n(i, a[i])
			var f = Object.getOwnPropertyDescriptor(c, 'flags').get.call(e)
			return f !== s || t !== s
		})
P && m(c, 'flags', { configurable: !0, get: x })
//# sourceMappingURL=es.regexp.flags.cd986f0c.js.map
