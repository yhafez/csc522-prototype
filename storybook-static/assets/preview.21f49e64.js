var m = Object.defineProperty
var r = (n, t) => m(n, 'name', { value: t, configurable: !0 })
import { q as p } from './iframe.734f45ba.js'
function g(n, t, a, u, e, c, o) {
	try {
		var s = n[c](o),
			i = s.value
	} catch (l) {
		a(l)
		return
	}
	s.done ? t(i) : Promise.resolve(i).then(u, e)
}
r(g, 'asyncGeneratorStep')
function f(n) {
	return function () {
		var t = this,
			a = arguments
		return new Promise(function (u, e) {
			var c = n.apply(t, a)
			function o(i) {
				g(c, u, e, o, s, 'next', i)
			}
			r(o, '_next')
			function s(i) {
				g(c, u, e, o, s, 'throw', i)
			}
			r(s, '_throw'), o(void 0)
		})
	}
}
r(f, '_asyncToGenerator')
var _ = {
	docs: {
		getContainer: (function () {
			var n = f(
				regeneratorRuntime.mark(
					r(function a() {
						return regeneratorRuntime.wrap(
							r(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(e.next = 2),
												p(
													() => import('./index.5a35e422.js'),
													[
														'assets/index.5a35e422.js',
														'assets/Props.13743566.js',
														'assets/iframe.734f45ba.js',
														'assets/jsx-runtime.adda36d4.js',
														'assets/string.cf618ebb.js',
														'assets/es.map.constructor.86a6c0ec.js',
														'assets/es.number.to-fixed.54b1ee4f.js',
													],
												)
											)
										case 2:
											return e.abrupt('return', e.sent.DocsContainer)
										case 3:
										case 'end':
											return e.stop()
									}
							}, '_callee$'),
							a,
						)
					}, '_callee'),
				),
			)
			function t() {
				return n.apply(this, arguments)
			}
			return r(t, 'getContainer'), t
		})(),
		getPage: (function () {
			var n = f(
				regeneratorRuntime.mark(
					r(function a() {
						return regeneratorRuntime.wrap(
							r(function (e) {
								for (;;)
									switch ((e.prev = e.next)) {
										case 0:
											return (
												(e.next = 2),
												p(
													() => import('./index.5a35e422.js'),
													[
														'assets/index.5a35e422.js',
														'assets/Props.13743566.js',
														'assets/iframe.734f45ba.js',
														'assets/jsx-runtime.adda36d4.js',
														'assets/string.cf618ebb.js',
														'assets/es.map.constructor.86a6c0ec.js',
														'assets/es.number.to-fixed.54b1ee4f.js',
													],
												)
											)
										case 2:
											return e.abrupt('return', e.sent.DocsPage)
										case 3:
										case 'end':
											return e.stop()
									}
							}, '_callee2$'),
							a,
						)
					}, '_callee2'),
				),
			)
			function t() {
				return n.apply(this, arguments)
			}
			return r(t, 'getPage'), t
		})(),
	},
}
export { _ as parameters }
//# sourceMappingURL=preview.21f49e64.js.map
