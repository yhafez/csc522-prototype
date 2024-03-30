var vu = Object.defineProperty
var u = (e, t) => vu(e, 'name', { value: t, configurable: !0 })
import {
	m as xu,
	c as $e,
	a as Fu,
	g as bu,
	d as qn,
	b as Su,
	_ as _u,
	i as Bu,
	e as wu,
	f as Tu,
	h as en,
	j as ku,
	u as Nu,
	l as Rt,
	k as Ou,
} from './iframe.734f45ba.js'
import './es.map.constructor.86a6c0ec.js'
import { R as Vt, r as Dt, j as Iu } from './jsx-runtime.adda36d4.js'
import { r as ze } from './index.12010606.js'
import { s as Pu } from './string.cf618ebb.js'
var Ru = u(function (t) {
		switch (t.type) {
			case 'function':
				return { name: 'function' }
			case 'object':
				var r = {}
				return (
					t.signature.properties.forEach(function (n) {
						r[n.key] = Un(n.value)
					}),
					{ name: 'object', value: r }
				)
			default:
				throw new Error('Unknown: '.concat(t))
		}
	}, 'convertSig'),
	Un = u(function e(t) {
		var r = t.name,
			n = t.raw,
			i = {}
		switch ((typeof n < 'u' && (i.raw = n), t.name)) {
			case 'string':
			case 'number':
			case 'symbol':
			case 'boolean':
				return Object.assign({}, i, { name: r })
			case 'Array':
				return Object.assign({}, i, { name: 'array', value: t.elements.map(e) })
			case 'signature':
				return Object.assign({}, i, Ru(t))
			case 'union':
			case 'intersection':
				return Object.assign({}, i, { name: r, value: t.elements.map(e) })
			default:
				return Object.assign({}, i, { name: 'other', value: r })
		}
	}, 'convert'),
	Lu = u(function (t) {
		return t.name === 'literal'
	}, 'isLiteral'),
	Mu = u(function (t) {
		return t.value.replace(/['|"]/g, '')
	}, 'toEnumOption'),
	ju = u(function (t) {
		switch (t.type) {
			case 'function':
				return { name: 'function' }
			case 'object':
				var r = {}
				return (
					t.signature.properties.forEach(function (n) {
						r[n.key] = Wn(n.value)
					}),
					{ name: 'object', value: r }
				)
			default:
				throw new Error('Unknown: '.concat(t))
		}
	}, 'convertSig'),
	Wn = u(function e(t) {
		var r = t.name,
			n = t.raw,
			i = {}
		switch ((typeof n < 'u' && (i.raw = n), t.name)) {
			case 'literal':
				return Object.assign({}, i, { name: 'other', value: t.value })
			case 'string':
			case 'number':
			case 'symbol':
			case 'boolean':
				return Object.assign({}, i, { name: r })
			case 'Array':
				return Object.assign({}, i, { name: 'array', value: t.elements.map(e) })
			case 'signature':
				return Object.assign({}, i, ju(t))
			case 'union':
				return t.elements.every(Lu)
					? Object.assign({}, i, { name: 'enum', value: t.elements.map(Mu) })
					: Object.assign({}, i, { name: r, value: t.elements.map(e) })
			case 'intersection':
				return Object.assign({}, i, { name: r, value: t.elements.map(e) })
			default:
				return Object.assign({}, i, { name: 'other', value: r })
		}
	}, 'convert'),
	Gn = /^['"]|['"]$/g,
	Vu = u(function (t) {
		return t.replace(Gn, '')
	}, 'trimQuotes'),
	qu = u(function (t) {
		return Gn.test(t)
	}, 'includesQuotes'),
	Uu = /^\(.*\) => /,
	Wu = u(function e(t) {
		var r = t.name,
			n = t.raw,
			i = t.computed,
			s = t.value,
			o = {}
		switch ((typeof n < 'u' && (o.raw = n), r)) {
			case 'enum': {
				var c = i
					? s
					: s.map(function (E) {
							var v = Vu(E.value)
							return qu(E.value) || Number.isNaN(Number(v)) ? v : Number(v)
					  })
				return Object.assign({}, o, { name: r, value: c })
			}
			case 'string':
			case 'number':
			case 'symbol':
				return Object.assign({}, o, { name: r })
			case 'func':
				return Object.assign({}, o, { name: 'function' })
			case 'bool':
			case 'boolean':
				return Object.assign({}, o, { name: 'boolean' })
			case 'arrayOf':
			case 'array':
				return Object.assign({}, o, { name: 'array', value: s && e(s) })
			case 'object':
				return Object.assign({}, o, { name: r })
			case 'objectOf':
				return Object.assign({}, o, { name: r, value: e(s) })
			case 'shape':
			case 'exact':
				var h = xu(s, function (E) {
					return e(E)
				})
				return Object.assign({}, o, { name: 'object', value: h })
			case 'union':
				return Object.assign({}, o, {
					name: 'union',
					value: s.map(function (E) {
						return e(E)
					}),
				})
			case 'instanceOf':
			case 'element':
			case 'elementType':
			default: {
				if ((r == null ? void 0 : r.indexOf('|')) > 0)
					try {
						var g = r.split('|').map(function (E) {
							return JSON.parse(E)
						})
						return Object.assign({}, o, { name: 'enum', value: g })
					} catch {}
				var D = s ? ''.concat(r, '(').concat(s, ')') : r,
					x = Uu.test(r) ? 'function' : 'other'
				return Object.assign({}, o, { name: x, value: D })
			}
		}
	}, 'convert'),
	_r = u(function (t) {
		var r = t.type,
			n = t.tsType,
			i = t.flowType
		return r != null ? Wu(r) : n != null ? Un(n) : i != null ? Wn(i) : null
	}, 'convert'),
	qe
;(function (e) {
	;(e.JAVASCRIPT = 'JavaScript'),
		(e.FLOW = 'Flow'),
		(e.TYPESCRIPT = 'TypeScript'),
		(e.UNKNOWN = 'Unknown')
})(qe || (qe = {}))
var Gu = ['null', 'undefined']
function Br(e) {
	return Gu.some(function (t) {
		return t === e
	})
}
u(Br, 'isDefaultValueBlacklisted')
function wr(e) {
	return !!e.__docgenInfo
}
u(wr, 'hasDocgen')
function zu(e) {
	return e != null && Object.keys(e).length > 0
}
u(zu, 'isValidDocgenSection')
function zn(e, t) {
	return wr(e) ? e.__docgenInfo[t] : null
}
u(zn, 'getDocgenSection')
function $u(e) {
	return wr(e) && Pu(e.__docgenInfo.description)
}
u($u, 'getDocgenDescription')
var $n = {},
	ft = {},
	Jn = { exports: {} }
;(function () {
	function e(o) {
		if (o == null) return !1
		switch (o.type) {
			case 'ArrayExpression':
			case 'AssignmentExpression':
			case 'BinaryExpression':
			case 'CallExpression':
			case 'ConditionalExpression':
			case 'FunctionExpression':
			case 'Identifier':
			case 'Literal':
			case 'LogicalExpression':
			case 'MemberExpression':
			case 'NewExpression':
			case 'ObjectExpression':
			case 'SequenceExpression':
			case 'ThisExpression':
			case 'UnaryExpression':
			case 'UpdateExpression':
				return !0
		}
		return !1
	}
	u(e, 'isExpression')
	function t(o) {
		if (o == null) return !1
		switch (o.type) {
			case 'DoWhileStatement':
			case 'ForInStatement':
			case 'ForStatement':
			case 'WhileStatement':
				return !0
		}
		return !1
	}
	u(t, 'isIterationStatement')
	function r(o) {
		if (o == null) return !1
		switch (o.type) {
			case 'BlockStatement':
			case 'BreakStatement':
			case 'ContinueStatement':
			case 'DebuggerStatement':
			case 'DoWhileStatement':
			case 'EmptyStatement':
			case 'ExpressionStatement':
			case 'ForInStatement':
			case 'ForStatement':
			case 'IfStatement':
			case 'LabeledStatement':
			case 'ReturnStatement':
			case 'SwitchStatement':
			case 'ThrowStatement':
			case 'TryStatement':
			case 'VariableDeclaration':
			case 'WhileStatement':
			case 'WithStatement':
				return !0
		}
		return !1
	}
	u(r, 'isStatement')
	function n(o) {
		return r(o) || (o != null && o.type === 'FunctionDeclaration')
	}
	u(n, 'isSourceElement')
	function i(o) {
		switch (o.type) {
			case 'IfStatement':
				return o.alternate != null ? o.alternate : o.consequent
			case 'LabeledStatement':
			case 'ForStatement':
			case 'ForInStatement':
			case 'WhileStatement':
			case 'WithStatement':
				return o.body
		}
		return null
	}
	u(i, 'trailingStatement')
	function s(o) {
		var c
		if (o.type !== 'IfStatement' || o.alternate == null) return !1
		c = o.consequent
		do {
			if (c.type === 'IfStatement' && c.alternate == null) return !0
			c = i(c)
		} while (c)
		return !1
	}
	u(s, 'isProblematicIfStatement'),
		(Jn.exports = {
			isExpression: e,
			isStatement: r,
			isIterationStatement: t,
			isSourceElement: n,
			isProblematicIfStatement: s,
			trailingStatement: i,
		})
})()
var Tr = { exports: {} }
;(function () {
	var e, t, r, n, i, s
	;(t = {
		NonAsciiIdentifierStart:
			/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
		NonAsciiIdentifierPart:
			/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	}),
		(e = {
			NonAsciiIdentifierStart:
				/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
			NonAsciiIdentifierPart:
				/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
		})
	function o(B) {
		return 48 <= B && B <= 57
	}
	u(o, 'isDecimalDigit')
	function c(B) {
		return (48 <= B && B <= 57) || (97 <= B && B <= 102) || (65 <= B && B <= 70)
	}
	u(c, 'isHexDigit')
	function h(B) {
		return B >= 48 && B <= 55
	}
	u(h, 'isOctalDigit'),
		(r = [
			5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288,
			65279,
		])
	function g(B) {
		return (
			B === 32 || B === 9 || B === 11 || B === 12 || B === 160 || (B >= 5760 && r.indexOf(B) >= 0)
		)
	}
	u(g, 'isWhiteSpace')
	function D(B) {
		return B === 10 || B === 13 || B === 8232 || B === 8233
	}
	u(D, 'isLineTerminator')
	function x(B) {
		if (B <= 65535) return String.fromCharCode(B)
		var U = String.fromCharCode(Math.floor((B - 65536) / 1024) + 55296),
			j = String.fromCharCode(((B - 65536) % 1024) + 56320)
		return U + j
	}
	for (u(x, 'fromCodePoint'), n = new Array(128), s = 0; s < 128; ++s)
		n[s] = (s >= 97 && s <= 122) || (s >= 65 && s <= 90) || s === 36 || s === 95
	for (i = new Array(128), s = 0; s < 128; ++s)
		i[s] =
			(s >= 97 && s <= 122) || (s >= 65 && s <= 90) || (s >= 48 && s <= 57) || s === 36 || s === 95
	function E(B) {
		return B < 128 ? n[B] : t.NonAsciiIdentifierStart.test(x(B))
	}
	u(E, 'isIdentifierStartES5')
	function v(B) {
		return B < 128 ? i[B] : t.NonAsciiIdentifierPart.test(x(B))
	}
	u(v, 'isIdentifierPartES5')
	function b(B) {
		return B < 128 ? n[B] : e.NonAsciiIdentifierStart.test(x(B))
	}
	u(b, 'isIdentifierStartES6')
	function C(B) {
		return B < 128 ? i[B] : e.NonAsciiIdentifierPart.test(x(B))
	}
	u(C, 'isIdentifierPartES6'),
		(Tr.exports = {
			isDecimalDigit: o,
			isHexDigit: c,
			isOctalDigit: h,
			isWhiteSpace: g,
			isLineTerminator: D,
			isIdentifierStartES5: E,
			isIdentifierPartES5: v,
			isIdentifierStartES6: b,
			isIdentifierPartES6: C,
		})
})()
var Hn = { exports: {} }
;(function () {
	var e = Tr.exports
	function t(E) {
		switch (E) {
			case 'implements':
			case 'interface':
			case 'package':
			case 'private':
			case 'protected':
			case 'public':
			case 'static':
			case 'let':
				return !0
			default:
				return !1
		}
	}
	u(t, 'isStrictModeReservedWordES6')
	function r(E, v) {
		return !v && E === 'yield' ? !1 : n(E, v)
	}
	u(r, 'isKeywordES5')
	function n(E, v) {
		if (v && t(E)) return !0
		switch (E.length) {
			case 2:
				return E === 'if' || E === 'in' || E === 'do'
			case 3:
				return E === 'var' || E === 'for' || E === 'new' || E === 'try'
			case 4:
				return (
					E === 'this' ||
					E === 'else' ||
					E === 'case' ||
					E === 'void' ||
					E === 'with' ||
					E === 'enum'
				)
			case 5:
				return (
					E === 'while' ||
					E === 'break' ||
					E === 'catch' ||
					E === 'throw' ||
					E === 'const' ||
					E === 'yield' ||
					E === 'class' ||
					E === 'super'
				)
			case 6:
				return (
					E === 'return' ||
					E === 'typeof' ||
					E === 'delete' ||
					E === 'switch' ||
					E === 'export' ||
					E === 'import'
				)
			case 7:
				return E === 'default' || E === 'finally' || E === 'extends'
			case 8:
				return E === 'function' || E === 'continue' || E === 'debugger'
			case 10:
				return E === 'instanceof'
			default:
				return !1
		}
	}
	u(n, 'isKeywordES6')
	function i(E, v) {
		return E === 'null' || E === 'true' || E === 'false' || r(E, v)
	}
	u(i, 'isReservedWordES5')
	function s(E, v) {
		return E === 'null' || E === 'true' || E === 'false' || n(E, v)
	}
	u(s, 'isReservedWordES6')
	function o(E) {
		return E === 'eval' || E === 'arguments'
	}
	u(o, 'isRestrictedWord')
	function c(E) {
		var v, b, C
		if (E.length === 0 || ((C = E.charCodeAt(0)), !e.isIdentifierStartES5(C))) return !1
		for (v = 1, b = E.length; v < b; ++v)
			if (((C = E.charCodeAt(v)), !e.isIdentifierPartES5(C))) return !1
		return !0
	}
	u(c, 'isIdentifierNameES5')
	function h(E, v) {
		return (E - 55296) * 1024 + (v - 56320) + 65536
	}
	u(h, 'decodeUtf16')
	function g(E) {
		var v, b, C, B, U
		if (E.length === 0) return !1
		for (U = e.isIdentifierStartES6, v = 0, b = E.length; v < b; ++v) {
			if (((C = E.charCodeAt(v)), 55296 <= C && C <= 56319)) {
				if ((++v, v >= b || ((B = E.charCodeAt(v)), !(56320 <= B && B <= 57343)))) return !1
				C = h(C, B)
			}
			if (!U(C)) return !1
			U = e.isIdentifierPartES6
		}
		return !0
	}
	u(g, 'isIdentifierNameES6')
	function D(E, v) {
		return c(E) && !i(E, v)
	}
	u(D, 'isIdentifierES5')
	function x(E, v) {
		return g(E) && !s(E, v)
	}
	u(x, 'isIdentifierES6'),
		(Hn.exports = {
			isKeywordES5: r,
			isKeywordES6: n,
			isReservedWordES5: i,
			isReservedWordES6: s,
			isRestrictedWord: o,
			isIdentifierNameES5: c,
			isIdentifierNameES6: g,
			isIdentifierES5: D,
			isIdentifierES6: x,
		})
})()
;(function () {
	;(ft.ast = Jn.exports), (ft.code = Tr.exports), (ft.keyword = Hn.exports)
})()
var St = {},
	lt = {}
const Ju = 'doctrine',
	Hu = 'JSDoc parser',
	Qu = 'https://github.com/eslint/doctrine',
	Ku = 'lib/doctrine.js',
	Xu = '3.0.0',
	Yu = { node: '>=6.0.0' },
	Zu = { lib: './lib' },
	ea = ['lib'],
	ta = [
		{
			name: 'Nicholas C. Zakas',
			email: 'nicholas+npm@nczconsulting.com',
			web: 'https://www.nczonline.net',
		},
		{
			name: 'Yusuke Suzuki',
			email: 'utatane.tea@gmail.com',
			web: 'https://github.com/Constellation',
		},
	],
	ra = 'eslint/doctrine',
	na = {
		coveralls: '^3.0.1',
		dateformat: '^1.0.11',
		eslint: '^1.10.3',
		'eslint-release': '^1.0.0',
		linefix: '^0.1.1',
		mocha: '^3.4.2',
		'npm-license': '^0.3.1',
		nyc: '^10.3.2',
		semver: '^5.0.3',
		shelljs: '^0.5.3',
		'shelljs-nodecli': '^0.1.1',
		should: '^5.0.1',
	},
	ia = 'Apache-2.0',
	ua = {
		pretest: 'npm run lint',
		test: 'nyc mocha',
		coveralls: 'nyc report --reporter=text-lcov | coveralls',
		lint: 'eslint lib/',
		'generate-release': 'eslint-generate-release',
		'generate-alpharelease': 'eslint-generate-prerelease alpha',
		'generate-betarelease': 'eslint-generate-prerelease beta',
		'generate-rcrelease': 'eslint-generate-prerelease rc',
		'publish-release': 'eslint-publish-release',
	},
	aa = { esutils: '^2.0.2' },
	sa = {
		name: Ju,
		description: Hu,
		homepage: Qu,
		main: Ku,
		version: Xu,
		engines: Yu,
		directories: Zu,
		files: ea,
		maintainers: ta,
		repository: ra,
		devDependencies: na,
		license: ia,
		scripts: ua,
		dependencies: aa,
	}
var Qn = { exports: {} }
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var tn = Object.getOwnPropertySymbols,
	oa = Object.prototype.hasOwnProperty,
	la = Object.prototype.propertyIsEnumerable
function ca(e) {
	if (e == null) throw new TypeError('Object.assign cannot be called with null or undefined')
	return Object(e)
}
u(ca, 'toObject')
function fa() {
	try {
		if (!Object.assign) return !1
		var e = new String('abc')
		if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1
		for (var t = {}, r = 0; r < 10; r++) t['_' + String.fromCharCode(r)] = r
		var n = Object.getOwnPropertyNames(t).map(function (s) {
			return t[s]
		})
		if (n.join('') !== '0123456789') return !1
		var i = {}
		return (
			'abcdefghijklmnopqrst'.split('').forEach(function (s) {
				i[s] = s
			}),
			Object.keys(Object.assign({}, i)).join('') === 'abcdefghijklmnopqrst'
		)
	} catch {
		return !1
	}
}
u(fa, 'shouldUseNative')
var pa = fa()
		? Object.assign
		: function (e, t) {
				for (var r, n = ca(e), i, s = 1; s < arguments.length; s++) {
					r = Object(arguments[s])
					for (var o in r) oa.call(r, o) && (n[o] = r[o])
					if (tn) {
						i = tn(r)
						for (var c = 0; c < i.length; c++) la.call(r, i[c]) && (n[i[c]] = r[i[c]])
					}
				}
				return n
		  },
	Kn = {},
	ha = u(function (t) {
		return (
			t &&
			typeof t == 'object' &&
			typeof t.copy == 'function' &&
			typeof t.fill == 'function' &&
			typeof t.readUInt8 == 'function'
		)
	}, 'isBuffer'),
	mr = { exports: {} }
typeof Object.create == 'function'
	? (mr.exports = u(function (t, r) {
			;(t.super_ = r),
				(t.prototype = Object.create(r.prototype, {
					constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
				}))
	  }, 'inherits'))
	: (mr.exports = u(function (t, r) {
			t.super_ = r
			var n = u(function () {}, 'TempCtor')
			;(n.prototype = r.prototype), (t.prototype = new n()), (t.prototype.constructor = t)
	  }, 'inherits'))
;(function (e) {
	var t = /%[sdj%]/g
	;(e.format = function (k) {
		if (!Q(k)) {
			for (var P = [], q = 0; q < arguments.length; q++) P.push(i(arguments[q]))
			return P.join(' ')
		}
		for (
			var q = 1,
				ie = arguments,
				V = ie.length,
				ce = String(k).replace(t, function (te) {
					if (te === '%%') return '%'
					if (q >= V) return te
					switch (te) {
						case '%s':
							return String(ie[q++])
						case '%d':
							return Number(ie[q++])
						case '%j':
							try {
								return JSON.stringify(ie[q++])
							} catch {
								return '[Circular]'
							}
						default:
							return te
					}
				}),
				le = ie[q];
			q < V;
			le = ie[++q]
		)
			B(le) || !_(le) ? (ce += ' ' + le) : (ce += ' ' + i(le))
		return ce
	}),
		(e.deprecate = function (k, P) {
			if (m($e.process))
				return function () {
					return e.deprecate(k, P).apply(this, arguments)
				}
			if (process.noDeprecation === !0) return k
			var q = !1
			function ie() {
				if (!q) {
					if (process.throwDeprecation) throw new Error(P)
					process.traceDeprecation ? console.trace(P) : console.error(P), (q = !0)
				}
				return k.apply(this, arguments)
			}
			return u(ie, 'deprecated'), ie
		})
	var r = {},
		n
	e.debuglog = function (k) {
		if ((m(n) && (n = process.env.NODE_DEBUG || ''), (k = k.toUpperCase()), !r[k]))
			if (new RegExp('\\b' + k + '\\b', 'i').test(n)) {
				var P = process.pid
				r[k] = function () {
					var q = e.format.apply(e, arguments)
					console.error('%s %d: %s', k, P, q)
				}
			} else r[k] = function () {}
		return r[k]
	}
	function i(k, P) {
		var q = { seen: [], stylize: o }
		return (
			arguments.length >= 3 && (q.depth = arguments[2]),
			arguments.length >= 4 && (q.colors = arguments[3]),
			C(P) ? (q.showHidden = P) : P && e._extend(q, P),
			m(q.showHidden) && (q.showHidden = !1),
			m(q.depth) && (q.depth = 2),
			m(q.colors) && (q.colors = !1),
			m(q.customInspect) && (q.customInspect = !0),
			q.colors && (q.stylize = s),
			h(q, k, q.depth)
		)
	}
	u(i, 'inspect'),
		(e.inspect = i),
		(i.colors = {
			bold: [1, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			white: [37, 39],
			grey: [90, 39],
			black: [30, 39],
			blue: [34, 39],
			cyan: [36, 39],
			green: [32, 39],
			magenta: [35, 39],
			red: [31, 39],
			yellow: [33, 39],
		}),
		(i.styles = {
			special: 'cyan',
			number: 'yellow',
			boolean: 'yellow',
			undefined: 'grey',
			null: 'bold',
			string: 'green',
			date: 'magenta',
			regexp: 'red',
		})
	function s(k, P) {
		var q = i.styles[P]
		return q ? '\x1B[' + i.colors[q][0] + 'm' + k + '\x1B[' + i.colors[q][1] + 'm' : k
	}
	u(s, 'stylizeWithColor')
	function o(k, P) {
		return k
	}
	u(o, 'stylizeNoColor')
	function c(k) {
		var P = {}
		return (
			k.forEach(function (q, ie) {
				P[q] = !0
			}),
			P
		)
	}
	u(c, 'arrayToHash')
	function h(k, P, q) {
		if (
			k.customInspect &&
			P &&
			W(P.inspect) &&
			P.inspect !== e.inspect &&
			!(P.constructor && P.constructor.prototype === P)
		) {
			var ie = P.inspect(q, k)
			return Q(ie) || (ie = h(k, ie, q)), ie
		}
		var V = g(k, P)
		if (V) return V
		var ce = Object.keys(P),
			le = c(ce)
		if (
			(k.showHidden && (ce = Object.getOwnPropertyNames(P)),
			z(P) && (ce.indexOf('message') >= 0 || ce.indexOf('description') >= 0))
		)
			return D(P)
		if (ce.length === 0) {
			if (W(P)) {
				var te = P.name ? ': ' + P.name : ''
				return k.stylize('[Function' + te + ']', 'special')
			}
			if (y(P)) return k.stylize(RegExp.prototype.toString.call(P), 'regexp')
			if (F(P)) return k.stylize(Date.prototype.toString.call(P), 'date')
			if (z(P)) return D(P)
		}
		var H = '',
			S = !1,
			T = ['{', '}']
		if ((b(P) && ((S = !0), (T = ['[', ']'])), W(P))) {
			var X = P.name ? ': ' + P.name : ''
			H = ' [Function' + X + ']'
		}
		if (
			(y(P) && (H = ' ' + RegExp.prototype.toString.call(P)),
			F(P) && (H = ' ' + Date.prototype.toUTCString.call(P)),
			z(P) && (H = ' ' + D(P)),
			ce.length === 0 && (!S || P.length == 0))
		)
			return T[0] + H + T[1]
		if (q < 0)
			return y(P)
				? k.stylize(RegExp.prototype.toString.call(P), 'regexp')
				: k.stylize('[Object]', 'special')
		k.seen.push(P)
		var O
		return (
			S
				? (O = x(k, P, q, le, ce))
				: (O = ce.map(function (N) {
						return E(k, P, q, le, N, S)
				  })),
			k.seen.pop(),
			v(O, H, T)
		)
	}
	u(h, 'formatValue')
	function g(k, P) {
		if (m(P)) return k.stylize('undefined', 'undefined')
		if (Q(P)) {
			var q =
				"'" +
				JSON.stringify(P).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') +
				"'"
			return k.stylize(q, 'string')
		}
		if (j(P)) return k.stylize('' + P, 'number')
		if (C(P)) return k.stylize('' + P, 'boolean')
		if (B(P)) return k.stylize('null', 'null')
	}
	u(g, 'formatPrimitive')
	function D(k) {
		return '[' + Error.prototype.toString.call(k) + ']'
	}
	u(D, 'formatError')
	function x(k, P, q, ie, V) {
		for (var ce = [], le = 0, te = P.length; le < te; ++le)
			re(P, String(le)) ? ce.push(E(k, P, q, ie, String(le), !0)) : ce.push('')
		return (
			V.forEach(function (H) {
				H.match(/^\d+$/) || ce.push(E(k, P, q, ie, H, !0))
			}),
			ce
		)
	}
	u(x, 'formatArray')
	function E(k, P, q, ie, V, ce) {
		var le, te, H
		if (
			((H = Object.getOwnPropertyDescriptor(P, V) || { value: P[V] }),
			H.get
				? H.set
					? (te = k.stylize('[Getter/Setter]', 'special'))
					: (te = k.stylize('[Getter]', 'special'))
				: H.set && (te = k.stylize('[Setter]', 'special')),
			re(ie, V) || (le = '[' + V + ']'),
			te ||
				(k.seen.indexOf(H.value) < 0
					? (B(q) ? (te = h(k, H.value, null)) : (te = h(k, H.value, q - 1)),
					  te.indexOf(`
`) > -1 &&
							(ce
								? (te = te
										.split(
											`
`,
										)
										.map(function (S) {
											return '  ' + S
										})
										.join(
											`
`,
										)
										.substr(2))
								: (te =
										`
` +
										te
											.split(
												`
`,
											)
											.map(function (S) {
												return '   ' + S
											}).join(`
`))))
					: (te = k.stylize('[Circular]', 'special'))),
			m(le))
		) {
			if (ce && V.match(/^\d+$/)) return te
			;(le = JSON.stringify('' + V)),
				le.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
					? ((le = le.substr(1, le.length - 2)), (le = k.stylize(le, 'name')))
					: ((le = le
							.replace(/'/g, "\\'")
							.replace(/\\"/g, '"')
							.replace(/(^"|"$)/g, "'")),
					  (le = k.stylize(le, 'string')))
		}
		return le + ': ' + te
	}
	u(E, 'formatProperty')
	function v(k, P, q) {
		var ie = k.reduce(function (V, ce) {
			return (
				ce.indexOf(`
`) >= 0,
				V + ce.replace(/\u001b\[\d\d?m/g, '').length + 1
			)
		}, 0)
		return ie > 60
			? q[0] +
					(P === ''
						? ''
						: P +
						  `
 `) +
					' ' +
					k.join(`,
  `) +
					' ' +
					q[1]
			: q[0] + P + ' ' + k.join(', ') + ' ' + q[1]
	}
	u(v, 'reduceToSingleString')
	function b(k) {
		return Array.isArray(k)
	}
	u(b, 'isArray'), (e.isArray = b)
	function C(k) {
		return typeof k == 'boolean'
	}
	u(C, 'isBoolean'), (e.isBoolean = C)
	function B(k) {
		return k === null
	}
	u(B, 'isNull'), (e.isNull = B)
	function U(k) {
		return k == null
	}
	u(U, 'isNullOrUndefined'), (e.isNullOrUndefined = U)
	function j(k) {
		return typeof k == 'number'
	}
	u(j, 'isNumber'), (e.isNumber = j)
	function Q(k) {
		return typeof k == 'string'
	}
	u(Q, 'isString'), (e.isString = Q)
	function w(k) {
		return typeof k == 'symbol'
	}
	u(w, 'isSymbol'), (e.isSymbol = w)
	function m(k) {
		return k === void 0
	}
	u(m, 'isUndefined'), (e.isUndefined = m)
	function y(k) {
		return _(k) && Y(k) === '[object RegExp]'
	}
	u(y, 'isRegExp'), (e.isRegExp = y)
	function _(k) {
		return typeof k == 'object' && k !== null
	}
	u(_, 'isObject'), (e.isObject = _)
	function F(k) {
		return _(k) && Y(k) === '[object Date]'
	}
	u(F, 'isDate'), (e.isDate = F)
	function z(k) {
		return _(k) && (Y(k) === '[object Error]' || k instanceof Error)
	}
	u(z, 'isError'), (e.isError = z)
	function W(k) {
		return typeof k == 'function'
	}
	u(W, 'isFunction'), (e.isFunction = W)
	function M(k) {
		return (
			k === null ||
			typeof k == 'boolean' ||
			typeof k == 'number' ||
			typeof k == 'string' ||
			typeof k == 'symbol' ||
			typeof k > 'u'
		)
	}
	u(M, 'isPrimitive'), (e.isPrimitive = M), (e.isBuffer = ha)
	function Y(k) {
		return Object.prototype.toString.call(k)
	}
	u(Y, 'objectToString')
	function J(k) {
		return k < 10 ? '0' + k.toString(10) : k.toString(10)
	}
	u(J, 'pad')
	var ue = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	function Ce() {
		var k = new Date(),
			P = [J(k.getHours()), J(k.getMinutes()), J(k.getSeconds())].join(':')
		return [k.getDate(), ue[k.getMonth()], P].join(' ')
	}
	u(Ce, 'timestamp'),
		(e.log = function () {
			console.log('%s - %s', Ce(), e.format.apply(e, arguments))
		}),
		(e.inherits = mr.exports),
		(e._extend = function (k, P) {
			if (!P || !_(P)) return k
			for (var q = Object.keys(P), ie = q.length; ie--; ) k[q[ie]] = P[q[ie]]
			return k
		})
	function re(k, P) {
		return Object.prototype.hasOwnProperty.call(k, P)
	}
	u(re, 'hasOwnProperty')
})(Kn)
var da = pa
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */ function rn(e, t) {
	if (e === t) return 0
	for (var r = e.length, n = t.length, i = 0, s = Math.min(r, n); i < s; ++i)
		if (e[i] !== t[i]) {
			;(r = e[i]), (n = t[i])
			break
		}
	return r < n ? -1 : n < r ? 1 : 0
}
u(rn, 'compare')
function _t(e) {
	return $e.Buffer && typeof $e.Buffer.isBuffer == 'function'
		? $e.Buffer.isBuffer(e)
		: !!(e != null && e._isBuffer)
}
u(_t, 'isBuffer')
var Ue = Kn,
	ma = Object.prototype.hasOwnProperty,
	nn = Array.prototype.slice,
	Xn = (function () {
		return u(function () {}, 'foo').name === 'foo'
	})()
function un(e) {
	return Object.prototype.toString.call(e)
}
u(un, 'pToString')
function an(e) {
	return _t(e) || typeof $e.ArrayBuffer != 'function'
		? !1
		: typeof ArrayBuffer.isView == 'function'
		  ? ArrayBuffer.isView(e)
		  : e
		    ? !!(e instanceof DataView || (e.buffer && e.buffer instanceof ArrayBuffer))
		    : !1
}
u(an, 'isView')
var Ae = (Qn.exports = Zn),
	ga = /\s*function\s+([^\(\s]*)\s*/
function Yn(e) {
	if (!!Ue.isFunction(e)) {
		if (Xn) return e.name
		var t = e.toString(),
			r = t.match(ga)
		return r && r[1]
	}
}
u(Yn, 'getName')
Ae.AssertionError = u(function (t) {
	;(this.name = 'AssertionError'),
		(this.actual = t.actual),
		(this.expected = t.expected),
		(this.operator = t.operator),
		t.message
			? ((this.message = t.message), (this.generatedMessage = !1))
			: ((this.message = Aa(this)), (this.generatedMessage = !0))
	var r = t.stackStartFunction || Oe
	if (Error.captureStackTrace) Error.captureStackTrace(this, r)
	else {
		var n = new Error()
		if (n.stack) {
			var i = n.stack,
				s = Yn(r),
				o = i.indexOf(
					`
` + s,
				)
			if (o >= 0) {
				var c = i.indexOf(
					`
`,
					o + 1,
				)
				i = i.substring(c + 1)
			}
			this.stack = i
		}
	}
}, 'AssertionError')
Ue.inherits(Ae.AssertionError, Error)
function sn(e, t) {
	return typeof e == 'string' ? (e.length < t ? e : e.slice(0, t)) : e
}
u(sn, 'truncate')
function on(e) {
	if (Xn || !Ue.isFunction(e)) return Ue.inspect(e)
	var t = Yn(e),
		r = t ? ': ' + t : ''
	return '[Function' + r + ']'
}
u(on, 'inspect')
function Aa(e) {
	return sn(on(e.actual), 128) + ' ' + e.operator + ' ' + sn(on(e.expected), 128)
}
u(Aa, 'getMessage')
function Oe(e, t, r, n, i) {
	throw new Ae.AssertionError({
		message: r,
		actual: e,
		expected: t,
		operator: n,
		stackStartFunction: i,
	})
}
u(Oe, 'fail')
Ae.fail = Oe
function Zn(e, t) {
	e || Oe(e, !0, t, '==', Ae.ok)
}
u(Zn, 'ok')
Ae.ok = Zn
Ae.equal = u(function (t, r, n) {
	t != r && Oe(t, r, n, '==', Ae.equal)
}, 'equal')
Ae.notEqual = u(function (t, r, n) {
	t == r && Oe(t, r, n, '!=', Ae.notEqual)
}, 'notEqual')
Ae.deepEqual = u(function (t, r, n) {
	ht(t, r, !1) || Oe(t, r, n, 'deepEqual', Ae.deepEqual)
}, 'deepEqual')
Ae.deepStrictEqual = u(function (t, r, n) {
	ht(t, r, !0) || Oe(t, r, n, 'deepStrictEqual', Ae.deepStrictEqual)
}, 'deepStrictEqual')
function ht(e, t, r, n) {
	if (e === t) return !0
	if (_t(e) && _t(t)) return rn(e, t) === 0
	if (Ue.isDate(e) && Ue.isDate(t)) return e.getTime() === t.getTime()
	if (Ue.isRegExp(e) && Ue.isRegExp(t))
		return (
			e.source === t.source &&
			e.global === t.global &&
			e.multiline === t.multiline &&
			e.lastIndex === t.lastIndex &&
			e.ignoreCase === t.ignoreCase
		)
	if ((e === null || typeof e != 'object') && (t === null || typeof t != 'object'))
		return r ? e === t : e == t
	if (
		an(e) &&
		an(t) &&
		un(e) === un(t) &&
		!(e instanceof Float32Array || e instanceof Float64Array)
	)
		return rn(new Uint8Array(e.buffer), new Uint8Array(t.buffer)) === 0
	if (_t(e) !== _t(t)) return !1
	n = n || { actual: [], expected: [] }
	var i = n.actual.indexOf(e)
	return i !== -1 && i === n.expected.indexOf(t)
		? !0
		: (n.actual.push(e), n.expected.push(t), Da(e, t, r, n))
}
u(ht, '_deepEqual')
function ln(e) {
	return Object.prototype.toString.call(e) == '[object Arguments]'
}
u(ln, 'isArguments')
function Da(e, t, r, n) {
	if (e == null || t === null || t === void 0) return !1
	if (Ue.isPrimitive(e) || Ue.isPrimitive(t)) return e === t
	if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1
	var i = ln(e),
		s = ln(t)
	if ((i && !s) || (!i && s)) return !1
	if (i) return (e = nn.call(e)), (t = nn.call(t)), ht(e, t, r)
	var o = fn(e),
		c = fn(t),
		h,
		g
	if (o.length !== c.length) return !1
	for (o.sort(), c.sort(), g = o.length - 1; g >= 0; g--) if (o[g] !== c[g]) return !1
	for (g = o.length - 1; g >= 0; g--) if (((h = o[g]), !ht(e[h], t[h], r, n))) return !1
	return !0
}
u(Da, 'objEquiv')
Ae.notDeepEqual = u(function (t, r, n) {
	ht(t, r, !1) && Oe(t, r, n, 'notDeepEqual', Ae.notDeepEqual)
}, 'notDeepEqual')
Ae.notDeepStrictEqual = ei
function ei(e, t, r) {
	ht(e, t, !0) && Oe(e, t, r, 'notDeepStrictEqual', ei)
}
u(ei, 'notDeepStrictEqual')
Ae.strictEqual = u(function (t, r, n) {
	t !== r && Oe(t, r, n, '===', Ae.strictEqual)
}, 'strictEqual')
Ae.notStrictEqual = u(function (t, r, n) {
	t === r && Oe(t, r, n, '!==', Ae.notStrictEqual)
}, 'notStrictEqual')
function cn(e, t) {
	if (!e || !t) return !1
	if (Object.prototype.toString.call(t) == '[object RegExp]') return t.test(e)
	try {
		if (e instanceof t) return !0
	} catch {}
	return Error.isPrototypeOf(t) ? !1 : t.call({}, e) === !0
}
u(cn, 'expectedException')
function Ea(e) {
	var t
	try {
		e()
	} catch (r) {
		t = r
	}
	return t
}
u(Ea, '_tryBlock')
function ti(e, t, r, n) {
	var i
	if (typeof t != 'function') throw new TypeError('"block" argument must be a function')
	typeof r == 'string' && ((n = r), (r = null)),
		(i = Ea(t)),
		(n = (r && r.name ? ' (' + r.name + ').' : '.') + (n ? ' ' + n : '.')),
		e && !i && Oe(i, r, 'Missing expected exception' + n)
	var s = typeof n == 'string',
		o = !e && Ue.isError(i),
		c = !e && i && !r
	if (
		(((o && s && cn(i, r)) || c) && Oe(i, r, 'Got unwanted exception' + n),
		(e && i && r && !cn(i, r)) || (!e && i))
	)
		throw i
}
u(ti, '_throws')
Ae.throws = function (e, t, r) {
	ti(!0, e, t, r)
}
Ae.doesNotThrow = function (e, t, r) {
	ti(!1, e, t, r)
}
Ae.ifError = function (e) {
	if (e) throw e
}
function ri(e, t) {
	e || Oe(e, !0, t, '==', ri)
}
u(ri, 'strict')
Ae.strict = da(ri, Ae, {
	equal: Ae.strictEqual,
	deepEqual: Ae.deepStrictEqual,
	notEqual: Ae.notStrictEqual,
	notDeepEqual: Ae.notDeepStrictEqual,
})
Ae.strict.strict = Ae.strict
var fn =
	Object.keys ||
	function (e) {
		var t = []
		for (var r in e) ma.call(e, r) && t.push(r)
		return t
	}
;(function () {
	var e
	;(e = sa.version), (lt.VERSION = e)
	function t(n) {
		;(this.name = 'DoctrineError'), (this.message = n)
	}
	u(t, 'DoctrineError'),
		(t.prototype = (function () {
			var n = u(function () {}, 'Middle')
			return (n.prototype = Error.prototype), new n()
		})()),
		(t.prototype.constructor = t),
		(lt.DoctrineError = t)
	function r(n) {
		throw new t(n)
	}
	u(r, 'throwError'), (lt.throwError = r), (lt.assert = Qn.exports)
})()
;(function () {
	var e, t, r, n, i, s, o, c, h, g, D, x
	;(h = ft),
		(g = lt),
		(e = {
			NullableLiteral: 'NullableLiteral',
			AllLiteral: 'AllLiteral',
			NullLiteral: 'NullLiteral',
			UndefinedLiteral: 'UndefinedLiteral',
			VoidLiteral: 'VoidLiteral',
			UnionType: 'UnionType',
			ArrayType: 'ArrayType',
			RecordType: 'RecordType',
			FieldType: 'FieldType',
			FunctionType: 'FunctionType',
			ParameterType: 'ParameterType',
			RestType: 'RestType',
			NonNullableType: 'NonNullableType',
			OptionalType: 'OptionalType',
			NullableType: 'NullableType',
			NameExpression: 'NameExpression',
			TypeApplication: 'TypeApplication',
			StringLiteralType: 'StringLiteralType',
			NumericLiteralType: 'NumericLiteralType',
			BooleanLiteralType: 'BooleanLiteralType',
		}),
		(t = {
			ILLEGAL: 0,
			DOT_LT: 1,
			REST: 2,
			LT: 3,
			GT: 4,
			LPAREN: 5,
			RPAREN: 6,
			LBRACE: 7,
			RBRACE: 8,
			LBRACK: 9,
			RBRACK: 10,
			COMMA: 11,
			COLON: 12,
			STAR: 13,
			PIPE: 14,
			QUESTION: 15,
			BANG: 16,
			EQUAL: 17,
			NAME: 18,
			STRING: 19,
			NUMBER: 20,
			EOF: 21,
		})
	function E(S) {
		return (
			'><(){}[],:*|?!='.indexOf(String.fromCharCode(S)) === -1 &&
			!h.code.isWhiteSpace(S) &&
			!h.code.isLineTerminator(S)
		)
	}
	u(E, 'isTypeName')
	function v(S, T, X, O) {
		;(this._previous = S), (this._index = T), (this._token = X), (this._value = O)
	}
	u(v, 'Context'),
		(v.prototype.restore = function () {
			;(s = this._previous), (i = this._index), (o = this._token), (c = this._value)
		}),
		(v.save = function () {
			return new v(s, i, o, c)
		})
	function b(S, T) {
		return x && (S.range = [T[0] + D, T[1] + D]), S
	}
	u(b, 'maybeAddRange')
	function C() {
		var S = r.charAt(i)
		return (i += 1), S
	}
	u(C, 'advance')
	function B(S) {
		var T,
			X,
			O,
			N = 0
		for (X = S === 'u' ? 4 : 2, T = 0; T < X; ++T)
			if (i < n && h.code.isHexDigit(r.charCodeAt(i)))
				(O = C()), (N = N * 16 + '0123456789abcdef'.indexOf(O.toLowerCase()))
			else return ''
		return String.fromCharCode(N)
	}
	u(B, 'scanHexEscape')
	function U() {
		var S = '',
			T,
			X,
			O,
			N,
			$
		for (T = r.charAt(i), ++i; i < n; )
			if (((X = C()), X === T)) {
				T = ''
				break
			} else if (X === '\\')
				if (((X = C()), h.code.isLineTerminator(X.charCodeAt(0))))
					X === '\r' && r.charCodeAt(i) === 10 && ++i
				else
					switch (X) {
						case 'n':
							S += `
`
							break
						case 'r':
							S += '\r'
							break
						case 't':
							S += '	'
							break
						case 'u':
						case 'x':
							;($ = i), (N = B(X)), N ? (S += N) : ((i = $), (S += X))
							break
						case 'b':
							S += '\b'
							break
						case 'f':
							S += '\f'
							break
						case 'v':
							S += '\v'
							break
						default:
							h.code.isOctalDigit(X.charCodeAt(0))
								? ((O = '01234567'.indexOf(X)),
								  i < n &&
										h.code.isOctalDigit(r.charCodeAt(i)) &&
										((O = O * 8 + '01234567'.indexOf(C())),
										'0123'.indexOf(X) >= 0 &&
											i < n &&
											h.code.isOctalDigit(r.charCodeAt(i)) &&
											(O = O * 8 + '01234567'.indexOf(C()))),
								  (S += String.fromCharCode(O)))
								: (S += X)
							break
					}
			else {
				if (h.code.isLineTerminator(X.charCodeAt(0))) break
				S += X
			}
		return T !== '' && g.throwError('unexpected quote'), (c = S), t.STRING
	}
	u(U, 'scanString')
	function j() {
		var S, T
		if (((S = ''), (T = r.charCodeAt(i)), T !== 46)) {
			if (((S = C()), (T = r.charCodeAt(i)), S === '0')) {
				if (T === 120 || T === 88) {
					for (S += C(); i < n && ((T = r.charCodeAt(i)), !!h.code.isHexDigit(T)); ) S += C()
					return (
						S.length <= 2 && g.throwError('unexpected token'),
						i < n &&
							((T = r.charCodeAt(i)),
							h.code.isIdentifierStartES5(T) && g.throwError('unexpected token')),
						(c = parseInt(S, 16)),
						t.NUMBER
					)
				}
				if (h.code.isOctalDigit(T)) {
					for (S += C(); i < n && ((T = r.charCodeAt(i)), !!h.code.isOctalDigit(T)); ) S += C()
					return (
						i < n &&
							((T = r.charCodeAt(i)),
							(h.code.isIdentifierStartES5(T) || h.code.isDecimalDigit(T)) &&
								g.throwError('unexpected token')),
						(c = parseInt(S, 8)),
						t.NUMBER
					)
				}
				h.code.isDecimalDigit(T) && g.throwError('unexpected token')
			}
			for (; i < n && ((T = r.charCodeAt(i)), !!h.code.isDecimalDigit(T)); ) S += C()
		}
		if (T === 46)
			for (S += C(); i < n && ((T = r.charCodeAt(i)), !!h.code.isDecimalDigit(T)); ) S += C()
		if (T === 101 || T === 69)
			if (
				((S += C()),
				(T = r.charCodeAt(i)),
				(T === 43 || T === 45) && (S += C()),
				(T = r.charCodeAt(i)),
				h.code.isDecimalDigit(T))
			)
				for (S += C(); i < n && ((T = r.charCodeAt(i)), !!h.code.isDecimalDigit(T)); ) S += C()
			else g.throwError('unexpected token')
		return (
			i < n &&
				((T = r.charCodeAt(i)), h.code.isIdentifierStartES5(T) && g.throwError('unexpected token')),
			(c = parseFloat(S)),
			t.NUMBER
		)
	}
	u(j, 'scanNumber')
	function Q() {
		var S, T
		for (c = C(); i < n && E(r.charCodeAt(i)); ) {
			if (((S = r.charCodeAt(i)), S === 46)) {
				if (i + 1 >= n) return t.ILLEGAL
				if (((T = r.charCodeAt(i + 1)), T === 60)) break
			}
			c += C()
		}
		return t.NAME
	}
	u(Q, 'scanTypeName')
	function w() {
		var S
		for (s = i; i < n && h.code.isWhiteSpace(r.charCodeAt(i)); ) C()
		if (i >= n) return (o = t.EOF), o
		switch (((S = r.charCodeAt(i)), S)) {
			case 39:
			case 34:
				return (o = U()), o
			case 58:
				return C(), (o = t.COLON), o
			case 44:
				return C(), (o = t.COMMA), o
			case 40:
				return C(), (o = t.LPAREN), o
			case 41:
				return C(), (o = t.RPAREN), o
			case 91:
				return C(), (o = t.LBRACK), o
			case 93:
				return C(), (o = t.RBRACK), o
			case 123:
				return C(), (o = t.LBRACE), o
			case 125:
				return C(), (o = t.RBRACE), o
			case 46:
				if (i + 1 < n) {
					if (((S = r.charCodeAt(i + 1)), S === 60)) return C(), C(), (o = t.DOT_LT), o
					if (S === 46 && i + 2 < n && r.charCodeAt(i + 2) === 46)
						return C(), C(), C(), (o = t.REST), o
					if (h.code.isDecimalDigit(S)) return (o = j()), o
				}
				return (o = t.ILLEGAL), o
			case 60:
				return C(), (o = t.LT), o
			case 62:
				return C(), (o = t.GT), o
			case 42:
				return C(), (o = t.STAR), o
			case 124:
				return C(), (o = t.PIPE), o
			case 63:
				return C(), (o = t.QUESTION), o
			case 33:
				return C(), (o = t.BANG), o
			case 61:
				return C(), (o = t.EQUAL), o
			case 45:
				return (o = j()), o
			default:
				return h.code.isDecimalDigit(S) ? ((o = j()), o) : (g.assert(E(S)), (o = Q()), o)
		}
	}
	u(w, 'next')
	function m(S, T) {
		g.assert(o === S, T || 'consumed token not matched'), w()
	}
	u(m, 'consume')
	function y(S, T) {
		o !== S && g.throwError(T || 'unexpected token'), w()
	}
	u(y, 'expect')
	function _() {
		var S,
			T = i - 1
		if ((m(t.LPAREN, 'UnionType should start with ('), (S = []), o !== t.RPAREN))
			for (; S.push(q()), o !== t.RPAREN; ) y(t.PIPE)
		return m(t.RPAREN, 'UnionType should end with )'), b({ type: e.UnionType, elements: S }, [T, s])
	}
	u(_, 'parseUnionType')
	function F() {
		var S,
			T = i - 1,
			X
		for (m(t.LBRACK, 'ArrayType should start with ['), S = []; o !== t.RBRACK; ) {
			if (o === t.REST) {
				;(X = i - 3), m(t.REST), S.push(b({ type: e.RestType, expression: q() }, [X, s]))
				break
			} else S.push(q())
			o !== t.RBRACK && y(t.COMMA)
		}
		return y(t.RBRACK), b({ type: e.ArrayType, elements: S }, [T, s])
	}
	u(F, 'parseArrayType')
	function z() {
		var S = c
		if (o === t.NAME || o === t.STRING) return w(), S
		if (o === t.NUMBER) return m(t.NUMBER), String(S)
		g.throwError('unexpected token')
	}
	u(z, 'parseFieldName')
	function W() {
		var S,
			T = s
		return (
			(S = z()),
			o === t.COLON
				? (m(t.COLON), b({ type: e.FieldType, key: S, value: q() }, [T, s]))
				: b({ type: e.FieldType, key: S, value: null }, [T, s])
		)
	}
	u(W, 'parseFieldType')
	function M() {
		var S,
			T = i - 1,
			X
		if ((m(t.LBRACE, 'RecordType should start with {'), (S = []), o === t.COMMA)) m(t.COMMA)
		else for (; o !== t.RBRACE; ) S.push(W()), o !== t.RBRACE && y(t.COMMA)
		return (X = i), y(t.RBRACE), b({ type: e.RecordType, fields: S }, [T, X])
	}
	u(M, 'parseRecordType')
	function Y() {
		var S = c,
			T = i - S.length
		return (
			y(t.NAME),
			o === t.COLON &&
				(S === 'module' || S === 'external' || S === 'event') &&
				(m(t.COLON), (S += ':' + c), y(t.NAME)),
			b({ type: e.NameExpression, name: S }, [T, s])
		)
	}
	u(Y, 'parseNameExpression')
	function J() {
		var S = []
		for (S.push(ie()); o === t.COMMA; ) m(t.COMMA), S.push(ie())
		return S
	}
	u(J, 'parseTypeExpressionList')
	function ue() {
		var S,
			T,
			X = i - c.length
		return (
			(S = Y()),
			o === t.DOT_LT || o === t.LT
				? (w(),
				  (T = J()),
				  y(t.GT),
				  b({ type: e.TypeApplication, expression: S, applications: T }, [X, s]))
				: S
		)
	}
	u(ue, 'parseTypeName')
	function Ce() {
		return (
			m(t.COLON, 'ResultType should start with :'),
			o === t.NAME && c === 'void' ? (m(t.NAME), { type: e.VoidLiteral }) : q()
		)
	}
	u(Ce, 'parseResultType')
	function re() {
		for (var S = [], T = !1, X, O = !1, N, $ = i - 3, Z; o !== t.RPAREN; )
			o === t.REST && (m(t.REST), (O = !0)),
				(N = s),
				(X = q()),
				X.type === e.NameExpression &&
					o === t.COLON &&
					((Z = s - X.name.length),
					m(t.COLON),
					(X = b({ type: e.ParameterType, name: X.name, expression: q() }, [Z, s]))),
				o === t.EQUAL
					? (m(t.EQUAL), (X = b({ type: e.OptionalType, expression: X }, [N, s])), (T = !0))
					: T && g.throwError('unexpected token'),
				O && (X = b({ type: e.RestType, expression: X }, [$, s])),
				S.push(X),
				o !== t.RPAREN && y(t.COMMA)
		return S
	}
	u(re, 'parseParametersType')
	function k() {
		var S,
			T,
			X,
			O,
			N,
			$ = i - c.length
		return (
			g.assert(o === t.NAME && c === 'function', "FunctionType should start with 'function'"),
			m(t.NAME),
			y(t.LPAREN),
			(S = !1),
			(X = []),
			(T = null),
			o !== t.RPAREN &&
				(o === t.NAME && (c === 'this' || c === 'new')
					? ((S = c === 'new'),
					  m(t.NAME),
					  y(t.COLON),
					  (T = ue()),
					  o === t.COMMA && (m(t.COMMA), (X = re())))
					: (X = re())),
			y(t.RPAREN),
			(O = null),
			o === t.COLON && (O = Ce()),
			(N = b({ type: e.FunctionType, params: X, result: O }, [$, s])),
			T && ((N.this = T), S && (N.new = !0)),
			N
		)
	}
	u(k, 'parseFunctionType')
	function P() {
		var S, T
		switch (o) {
			case t.STAR:
				return m(t.STAR), b({ type: e.AllLiteral }, [s - 1, s])
			case t.LPAREN:
				return _()
			case t.LBRACK:
				return F()
			case t.LBRACE:
				return M()
			case t.NAME:
				if (((T = i - c.length), c === 'null')) return m(t.NAME), b({ type: e.NullLiteral }, [T, s])
				if (c === 'undefined') return m(t.NAME), b({ type: e.UndefinedLiteral }, [T, s])
				if (c === 'true' || c === 'false')
					return m(t.NAME), b({ type: e.BooleanLiteralType, value: c === 'true' }, [T, s])
				if (((S = v.save()), c === 'function'))
					try {
						return k()
					} catch {
						S.restore()
					}
				return ue()
			case t.STRING:
				return w(), b({ type: e.StringLiteralType, value: c }, [s - c.length - 2, s])
			case t.NUMBER:
				return w(), b({ type: e.NumericLiteralType, value: c }, [s - String(c).length, s])
			default:
				g.throwError('unexpected token')
		}
	}
	u(P, 'parseBasicTypeExpression')
	function q() {
		var S, T
		return o === t.QUESTION
			? ((T = i - 1),
			  m(t.QUESTION),
			  o === t.COMMA ||
			  o === t.EQUAL ||
			  o === t.RBRACE ||
			  o === t.RPAREN ||
			  o === t.PIPE ||
			  o === t.EOF ||
			  o === t.RBRACK ||
			  o === t.GT
					? b({ type: e.NullableLiteral }, [T, s])
					: b({ type: e.NullableType, expression: P(), prefix: !0 }, [T, s]))
			: o === t.BANG
			  ? ((T = i - 1),
			    m(t.BANG),
			    b({ type: e.NonNullableType, expression: P(), prefix: !0 }, [T, s]))
			  : ((T = s),
			    (S = P()),
			    o === t.BANG
						? (m(t.BANG), b({ type: e.NonNullableType, expression: S, prefix: !1 }, [T, s]))
						: o === t.QUESTION
						  ? (m(t.QUESTION), b({ type: e.NullableType, expression: S, prefix: !1 }, [T, s]))
						  : o === t.LBRACK
						    ? (m(t.LBRACK),
						      y(t.RBRACK, 'expected an array-style type declaration (' + c + '[])'),
						      b(
										{
											type: e.TypeApplication,
											expression: b({ type: e.NameExpression, name: 'Array' }, [T, s]),
											applications: [S],
										},
										[T, s],
						      ))
						    : S)
	}
	u(q, 'parseTypeExpression')
	function ie() {
		var S, T
		if (((S = q()), o !== t.PIPE)) return S
		for (T = [S], m(t.PIPE); T.push(q()), o === t.PIPE; ) m(t.PIPE)
		return b({ type: e.UnionType, elements: T }, [0, i])
	}
	u(ie, 'parseTop')
	function V() {
		var S
		return o === t.REST
			? (m(t.REST), b({ type: e.RestType, expression: ie() }, [0, i]))
			: ((S = ie()),
			  o === t.EQUAL ? (m(t.EQUAL), b({ type: e.OptionalType, expression: S }, [0, i])) : S)
	}
	u(V, 'parseTopParamType')
	function ce(S, T) {
		var X
		return (
			(r = S),
			(n = r.length),
			(i = 0),
			(s = 0),
			(x = T && T.range),
			(D = (T && T.startIndex) || 0),
			w(),
			(X = ie()),
			T && T.midstream
				? { expression: X, index: s }
				: (o !== t.EOF && g.throwError('not reach to EOF'), X)
		)
	}
	u(ce, 'parseType')
	function le(S, T) {
		var X
		return (
			(r = S),
			(n = r.length),
			(i = 0),
			(s = 0),
			(x = T && T.range),
			(D = (T && T.startIndex) || 0),
			w(),
			(X = V()),
			T && T.midstream
				? { expression: X, index: s }
				: (o !== t.EOF && g.throwError('not reach to EOF'), X)
		)
	}
	u(le, 'parseParamType')
	function te(S, T, X) {
		var O, N, $
		switch (S.type) {
			case e.NullableLiteral:
				O = '?'
				break
			case e.AllLiteral:
				O = '*'
				break
			case e.NullLiteral:
				O = 'null'
				break
			case e.UndefinedLiteral:
				O = 'undefined'
				break
			case e.VoidLiteral:
				O = 'void'
				break
			case e.UnionType:
				for (X ? (O = '') : (O = '('), N = 0, $ = S.elements.length; N < $; ++N)
					(O += te(S.elements[N], T)), N + 1 !== $ && (O += T ? '|' : ' | ')
				X || (O += ')')
				break
			case e.ArrayType:
				for (O = '[', N = 0, $ = S.elements.length; N < $; ++N)
					(O += te(S.elements[N], T)), N + 1 !== $ && (O += T ? ',' : ', ')
				O += ']'
				break
			case e.RecordType:
				for (O = '{', N = 0, $ = S.fields.length; N < $; ++N)
					(O += te(S.fields[N], T)), N + 1 !== $ && (O += T ? ',' : ', ')
				O += '}'
				break
			case e.FieldType:
				S.value ? (O = S.key + (T ? ':' : ': ') + te(S.value, T)) : (O = S.key)
				break
			case e.FunctionType:
				for (
					O = T ? 'function(' : 'function (',
						S.this &&
							(S.new ? (O += T ? 'new:' : 'new: ') : (O += T ? 'this:' : 'this: '),
							(O += te(S.this, T)),
							S.params.length !== 0 && (O += T ? ',' : ', ')),
						N = 0,
						$ = S.params.length;
					N < $;
					++N
				)
					(O += te(S.params[N], T)), N + 1 !== $ && (O += T ? ',' : ', ')
				;(O += ')'), S.result && (O += (T ? ':' : ': ') + te(S.result, T))
				break
			case e.ParameterType:
				O = S.name + (T ? ':' : ': ') + te(S.expression, T)
				break
			case e.RestType:
				;(O = '...'), S.expression && (O += te(S.expression, T))
				break
			case e.NonNullableType:
				S.prefix ? (O = '!' + te(S.expression, T)) : (O = te(S.expression, T) + '!')
				break
			case e.OptionalType:
				O = te(S.expression, T) + '='
				break
			case e.NullableType:
				S.prefix ? (O = '?' + te(S.expression, T)) : (O = te(S.expression, T) + '?')
				break
			case e.NameExpression:
				O = S.name
				break
			case e.TypeApplication:
				for (O = te(S.expression, T) + '.<', N = 0, $ = S.applications.length; N < $; ++N)
					(O += te(S.applications[N], T)), N + 1 !== $ && (O += T ? ',' : ', ')
				O += '>'
				break
			case e.StringLiteralType:
				O = '"' + S.value + '"'
				break
			case e.NumericLiteralType:
				O = String(S.value)
				break
			case e.BooleanLiteralType:
				O = String(S.value)
				break
			default:
				g.throwError('Unknown type ' + S.type)
		}
		return O
	}
	u(te, 'stringifyImpl')
	function H(S, T) {
		return T == null && (T = {}), te(S, T.compact, T.topLevel)
	}
	u(H, 'stringify'),
		(St.parseType = ce),
		(St.parseParamType = le),
		(St.stringify = H),
		(St.Syntax = e)
})()
;(function (e) {
	;(function () {
		var t, r, n, i, s
		;(i = ft), (t = St), (r = lt)
		function o(y, _, F) {
			return y.slice(_, F)
		}
		u(o, 'sliceSource'),
			(s = (function () {
				var y = Object.prototype.hasOwnProperty
				return u(function (F, z) {
					return y.call(F, z)
				}, 'hasOwnProperty')
			})())
		function c(y) {
			var _ = {},
				F
			for (F in y) y.hasOwnProperty(F) && (_[F] = y[F])
			return _
		}
		u(c, 'shallowCopy')
		function h(y) {
			return (y >= 97 && y <= 122) || (y >= 65 && y <= 90) || (y >= 48 && y <= 57)
		}
		u(h, 'isASCIIAlphanumeric')
		function g(y) {
			return y === 'param' || y === 'argument' || y === 'arg'
		}
		u(g, 'isParamTitle')
		function D(y) {
			return y === 'return' || y === 'returns'
		}
		u(D, 'isReturnTitle')
		function x(y) {
			return y === 'property' || y === 'prop'
		}
		u(x, 'isProperty')
		function E(y) {
			return g(y) || x(y) || y === 'alias' || y === 'this' || y === 'mixes' || y === 'requires'
		}
		u(E, 'isNameParameterRequired')
		function v(y) {
			return E(y) || y === 'const' || y === 'constant'
		}
		u(v, 'isAllowedName')
		function b(y) {
			return x(y) || g(y)
		}
		u(b, 'isAllowedNested')
		function C(y) {
			return x(y) || g(y)
		}
		u(C, 'isAllowedOptional')
		function B(y) {
			return (
				g(y) ||
				D(y) ||
				y === 'define' ||
				y === 'enum' ||
				y === 'implements' ||
				y === 'this' ||
				y === 'type' ||
				y === 'typedef' ||
				x(y)
			)
		}
		u(B, 'isTypeParameterRequired')
		function U(y) {
			return (
				B(y) ||
				y === 'throws' ||
				y === 'const' ||
				y === 'constant' ||
				y === 'namespace' ||
				y === 'member' ||
				y === 'var' ||
				y === 'module' ||
				y === 'constructor' ||
				y === 'class' ||
				y === 'extends' ||
				y === 'augments' ||
				y === 'public' ||
				y === 'private' ||
				y === 'protected'
			)
		}
		u(U, 'isAllowedType')
		var j = '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
			Q =
				'(' +
				j +
				'*(?:\\*' +
				j +
				`?)?)(.+|[\r
\u2028\u2029])`
		function w(y) {
			return y
				.replace(/^\/\*\*?/, '')
				.replace(/\*\/$/, '')
				.replace(new RegExp(Q, 'g'), '$2')
				.replace(/\s*$/, '')
		}
		u(w, 'unwrapComment')
		function m(y, _) {
			for (var F = y.replace(/^\/\*\*?/, ''), z = 0, W = new RegExp(Q, 'g'), M; (M = W.exec(F)); )
				if (((z += M[1].length), M.index + M[0].length > _ + z)) return _ + z + y.length - F.length
			return y.replace(/\*\/$/, '').replace(/\s*$/, '').length
		}
		u(m, 'convertUnwrappedCommentIndex'),
			(function (y) {
				var _, F, z, W, M, Y, J, ue, Ce
				function re() {
					var O = M.charCodeAt(F)
					return (
						(F += 1),
						i.code.isLineTerminator(O) && !(O === 13 && M.charCodeAt(F) === 10) && (z += 1),
						String.fromCharCode(O)
					)
				}
				u(re, 'advance')
				function k() {
					var O = ''
					for (re(); F < W && h(M.charCodeAt(F)); ) O += re()
					return O
				}
				u(k, 'scanTitle')
				function P() {
					var O,
						N,
						$ = F
					for (N = !1; $ < W; ) {
						if (
							((O = M.charCodeAt($)),
							i.code.isLineTerminator(O) && !(O === 13 && M.charCodeAt($ + 1) === 10))
						)
							N = !0
						else if (N) {
							if (O === 64) break
							i.code.isWhiteSpace(O) || (N = !1)
						}
						$ += 1
					}
					return $
				}
				u(P, 'seekContent')
				function q(O, N, $) {
					for (var Z, fe, De, xe, We = !1; F < N; )
						if (((Z = M.charCodeAt(F)), i.code.isWhiteSpace(Z))) re()
						else if (Z === 123) {
							re()
							break
						} else {
							We = !0
							break
						}
					if (We) return null
					for (fe = 1, De = ''; F < N; )
						if (((Z = M.charCodeAt(F)), i.code.isLineTerminator(Z))) re()
						else {
							if (Z === 125) {
								if (((fe -= 1), fe === 0)) {
									re()
									break
								}
							} else Z === 123 && (fe += 1)
							De === '' && (xe = F), (De += re())
						}
					return fe !== 0
						? r.throwError('Braces are not balanced')
						: C(O)
						  ? t.parseParamType(De, { startIndex: te(xe), range: $ })
						  : t.parseType(De, { startIndex: te(xe), range: $ })
				}
				u(q, 'parseType')
				function ie(O) {
					var N
					if (!i.code.isIdentifierStartES5(M.charCodeAt(F)) && !M[F].match(/[0-9]/)) return null
					for (N = re(); F < O && i.code.isIdentifierPartES5(M.charCodeAt(F)); ) N += re()
					return N
				}
				u(ie, 'scanIdentifier')
				function V(O) {
					for (
						;
						F < O &&
						(i.code.isWhiteSpace(M.charCodeAt(F)) || i.code.isLineTerminator(M.charCodeAt(F)));

					)
						re()
				}
				u(V, 'skipWhiteSpace')
				function ce(O, N, $) {
					var Z = '',
						fe,
						De
					if ((V(O), F >= O)) return null
					if (M.charCodeAt(F) === 91)
						if (N) (fe = !0), (Z = re())
						else return null
					if (((Z += ie(O)), $))
						for (
							M.charCodeAt(F) === 58 &&
								(Z === 'module' || Z === 'external' || Z === 'event') &&
								((Z += re()), (Z += ie(O))),
								M.charCodeAt(F) === 91 && M.charCodeAt(F + 1) === 93 && ((Z += re()), (Z += re()));
							M.charCodeAt(F) === 46 ||
							M.charCodeAt(F) === 47 ||
							M.charCodeAt(F) === 35 ||
							M.charCodeAt(F) === 45 ||
							M.charCodeAt(F) === 126;

						)
							(Z += re()), (Z += ie(O))
					if (fe) {
						if ((V(O), M.charCodeAt(F) === 61)) {
							;(Z += re()), V(O)
							for (var xe, We = 1; F < O; ) {
								if (
									((xe = M.charCodeAt(F)),
									i.code.isWhiteSpace(xe) && (De || (V(O), (xe = M.charCodeAt(F)))),
									xe === 39 && (De ? De === "'" && (De = '') : (De = "'")),
									xe === 34 && (De ? De === '"' && (De = '') : (De = '"')),
									xe === 91)
								)
									We++
								else if (xe === 93 && --We === 0) break
								Z += re()
							}
						}
						if ((V(O), F >= O || M.charCodeAt(F) !== 93)) return null
						Z += re()
					}
					return Z
				}
				u(ce, 'parseName')
				function le() {
					for (; F < W && M.charCodeAt(F) !== 64; ) re()
					return F >= W ? !1 : (r.assert(M.charCodeAt(F) === 64), !0)
				}
				u(le, 'skipToTag')
				function te(O) {
					return M === Y ? O : m(Y, O)
				}
				u(te, 'convertIndex')
				function H(O, N) {
					;(this._options = O),
						(this._title = N.toLowerCase()),
						(this._tag = { title: N, description: null }),
						this._options.lineNumbers && (this._tag.lineNumber = z),
						(this._first = F - N.length - 1),
						(this._last = 0),
						(this._extra = {})
				}
				u(H, 'TagParser'),
					(H.prototype.addError = u(function (N) {
						var $ = Array.prototype.slice.call(arguments, 1),
							Z = N.replace(/%(\d)/g, function (fe, De) {
								return r.assert(De < $.length, 'Message reference must be in range'), $[De]
							})
						return (
							this._tag.errors || (this._tag.errors = []),
							Ce && r.throwError(Z),
							this._tag.errors.push(Z),
							J
						)
					}, 'addError')),
					(H.prototype.parseType = function () {
						if (B(this._title))
							try {
								if (
									((this._tag.type = q(this._title, this._last, this._options.range)),
									!this._tag.type &&
										!g(this._title) &&
										!D(this._title) &&
										!this.addError('Missing or invalid tag type'))
								)
									return !1
							} catch (O) {
								if (((this._tag.type = null), !this.addError(O.message))) return !1
							}
						else if (U(this._title))
							try {
								this._tag.type = q(this._title, this._last, this._options.range)
							} catch {}
						return !0
					}),
					(H.prototype._parseNamePath = function (O) {
						var N
						return (
							(N = ce(this._last, ue && C(this._title), !0)),
							!N && !O && !this.addError('Missing or invalid tag name')
								? !1
								: ((this._tag.name = N), !0)
						)
					}),
					(H.prototype.parseNamePath = function () {
						return this._parseNamePath(!1)
					}),
					(H.prototype.parseNamePathOptional = function () {
						return this._parseNamePath(!0)
					}),
					(H.prototype.parseName = function () {
						var O, N
						if (v(this._title))
							if (
								((this._tag.name = ce(this._last, ue && C(this._title), b(this._title))),
								this._tag.name)
							)
								(N = this._tag.name),
									N.charAt(0) === '[' &&
										N.charAt(N.length - 1) === ']' &&
										((O = N.substring(1, N.length - 1).split('=')),
										O.length > 1 && (this._tag.default = O.slice(1).join('=')),
										(this._tag.name = O[0]),
										this._tag.type &&
											this._tag.type.type !== 'OptionalType' &&
											(this._tag.type = { type: 'OptionalType', expression: this._tag.type }))
							else {
								if (!E(this._title)) return !0
								if (g(this._title) && this._tag.type && this._tag.type.name)
									(this._extra.name = this._tag.type),
										(this._tag.name = this._tag.type.name),
										(this._tag.type = null)
								else if (!this.addError('Missing or invalid tag name')) return !1
							}
						return !0
					}),
					(H.prototype.parseDescription = u(function () {
						var N = o(M, F, this._last).trim()
						return N && (/^-\s+/.test(N) && (N = N.substring(2)), (this._tag.description = N)), !0
					}, 'parseDescription')),
					(H.prototype.parseCaption = u(function () {
						var N = o(M, F, this._last).trim(),
							$ = '<caption>',
							Z = '</caption>',
							fe = N.indexOf($),
							De = N.indexOf(Z)
						return (
							fe >= 0 && De >= 0
								? ((this._tag.caption = N.substring(fe + $.length, De).trim()),
								  (this._tag.description = N.substring(De + Z.length).trim()))
								: (this._tag.description = N),
							!0
						)
					}, 'parseDescription')),
					(H.prototype.parseKind = u(function () {
						var N, $
						return (
							($ = {
								class: !0,
								constant: !0,
								event: !0,
								external: !0,
								file: !0,
								function: !0,
								member: !0,
								mixin: !0,
								module: !0,
								namespace: !0,
								typedef: !0,
							}),
							(N = o(M, F, this._last).trim()),
							(this._tag.kind = N),
							!(!s($, N) && !this.addError("Invalid kind name '%0'", N))
						)
					}, 'parseKind')),
					(H.prototype.parseAccess = u(function () {
						var N
						return (
							(N = o(M, F, this._last).trim()),
							(this._tag.access = N),
							!(
								N !== 'private' &&
								N !== 'protected' &&
								N !== 'public' &&
								!this.addError("Invalid access name '%0'", N)
							)
						)
					}, 'parseAccess')),
					(H.prototype.parseThis = u(function () {
						var N = o(M, F, this._last).trim()
						if (N && N.charAt(0) === '{') {
							var $ = this.parseType()
							return ($ && this._tag.type.type === 'NameExpression') ||
								this._tag.type.type === 'UnionType'
								? ((this._tag.name = this._tag.type.name), !0)
								: this.addError('Invalid name for this')
						} else return this.parseNamePath()
					}, 'parseThis')),
					(H.prototype.parseVariation = u(function () {
						var N, $
						return (
							($ = o(M, F, this._last).trim()),
							(N = parseFloat($, 10)),
							(this._tag.variation = N),
							!(isNaN(N) && !this.addError("Invalid variation '%0'", $))
						)
					}, 'parseVariation')),
					(H.prototype.ensureEnd = function () {
						var O = o(M, F, this._last).trim()
						return !(O && !this.addError("Unknown content '%0'", O))
					}),
					(H.prototype.epilogue = u(function () {
						var N
						return (
							(N = this._tag.description),
							!(
								C(this._title) &&
								!this._tag.type &&
								N &&
								N.charAt(0) === '[' &&
								((this._tag.type = this._extra.name),
								this._tag.name || (this._tag.name = void 0),
								!ue && !this.addError('Missing or invalid tag name'))
							)
						)
					}, 'epilogue')),
					(_ = {
						access: ['parseAccess'],
						alias: ['parseNamePath', 'ensureEnd'],
						augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
						constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
						class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
						extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
						example: ['parseCaption'],
						deprecated: ['parseDescription'],
						global: ['ensureEnd'],
						inner: ['ensureEnd'],
						instance: ['ensureEnd'],
						kind: ['parseKind'],
						mixes: ['parseNamePath', 'ensureEnd'],
						mixin: ['parseNamePathOptional', 'ensureEnd'],
						member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
						method: ['parseNamePathOptional', 'ensureEnd'],
						module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
						func: ['parseNamePathOptional', 'ensureEnd'],
						function: ['parseNamePathOptional', 'ensureEnd'],
						var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
						name: ['parseNamePath', 'ensureEnd'],
						namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
						private: ['parseType', 'parseDescription'],
						protected: ['parseType', 'parseDescription'],
						public: ['parseType', 'parseDescription'],
						readonly: ['ensureEnd'],
						requires: ['parseNamePath', 'ensureEnd'],
						since: ['parseDescription'],
						static: ['ensureEnd'],
						summary: ['parseDescription'],
						this: ['parseThis', 'ensureEnd'],
						todo: ['parseDescription'],
						typedef: ['parseType', 'parseNamePathOptional'],
						variation: ['parseVariation'],
						version: ['parseDescription'],
					}),
					(H.prototype.parse = u(function () {
						var N, $, Z, fe
						if (!this._title && !this.addError('Missing or invalid title')) return null
						for (
							this._last = P(this._title),
								this._options.range &&
									(this._tag.range = [
										this._first,
										M.slice(0, this._last).replace(/\s*$/, '').length,
									].map(te)),
								s(_, this._title)
									? (Z = _[this._title])
									: (Z = ['parseType', 'parseName', 'parseDescription', 'epilogue']),
								N = 0,
								$ = Z.length;
							N < $;
							++N
						)
							if (((fe = Z[N]), !this[fe]())) return null
						return this._tag
					}, 'parse'))
				function S(O) {
					var N, $, Z
					if (!le()) return null
					for (N = k(), $ = new H(O, N), Z = $.parse(); F < $._last; ) re()
					return Z
				}
				u(S, 'parseTag')
				function T(O) {
					var N = '',
						$,
						Z
					for (Z = !0; F < W && (($ = M.charCodeAt(F)), !(Z && $ === 64)); )
						i.code.isLineTerminator($) ? (Z = !0) : Z && !i.code.isWhiteSpace($) && (Z = !1),
							(N += re())
					return O ? N : N.trim()
				}
				u(T, 'scanJSDocDescription')
				function X(O, N) {
					var $ = [],
						Z,
						fe,
						De,
						xe,
						We
					if (
						(N === void 0 && (N = {}),
						typeof N.unwrap == 'boolean' && N.unwrap ? (M = w(O)) : (M = O),
						(Y = O),
						N.tags)
					)
						if (Array.isArray(N.tags))
							for (De = {}, xe = 0, We = N.tags.length; xe < We; xe++)
								typeof N.tags[xe] == 'string'
									? (De[N.tags[xe]] = !0)
									: r.throwError('Invalid "tags" parameter: ' + N.tags)
						else r.throwError('Invalid "tags" parameter: ' + N.tags)
					for (
						W = M.length,
							F = 0,
							z = 0,
							J = N.recoverable,
							ue = N.sloppy,
							Ce = N.strict,
							fe = T(N.preserveWhitespace);
						(Z = S(N)), !!Z;

					)
						(!De || De.hasOwnProperty(Z.title)) && $.push(Z)
					return { description: fe, tags: $ }
				}
				u(X, 'parse'), (y.parse = X)
			})((n = {})),
			(e.version = r.VERSION),
			(e.parse = n.parse),
			(e.parseType = t.parseType),
			(e.parseParamType = t.parseParamType),
			(e.unwrapComment = w),
			(e.Syntax = c(t.Syntax)),
			(e.Error = r.DoctrineError),
			(e.type = {
				Syntax: e.Syntax,
				parseType: t.parseType,
				parseParamType: t.parseParamType,
				stringify: t.stringify,
			})
	})()
})($n)
function ya(e) {
	return e != null && e.includes('@')
}
u(ya, 'containsJsDoc')
function Ca(e, t) {
	var r
	try {
		r = $n.parse(e, { tags: t, sloppy: !0 })
	} catch (n) {
		throw (console.error(n), new Error('Cannot parse JSDoc tags.'))
	}
	return r
}
u(Ca, 'parse$2')
var va = { tags: ['param', 'arg', 'argument', 'returns', 'ignore'] },
	xa = u(function (t) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : va
		if (!ya(t)) return { includesJsDoc: !1, ignore: !1 }
		var n = Ca(t, r.tags),
			i = Fa(n)
		return i.ignore
			? { includesJsDoc: !0, ignore: !0 }
			: { includesJsDoc: !0, ignore: !1, description: n.description, extractedTags: i }
	}, 'parseJsDoc')
function Fa(e) {
	for (var t = { params: null, returns: null, ignore: !1 }, r = 0; r < e.tags.length; r += 1) {
		var n = e.tags[r]
		if (n.title === 'ignore') {
			t.ignore = !0
			break
		} else
			switch (n.title) {
				case 'param':
				case 'arg':
				case 'argument': {
					var i = ba(n)
					i != null && (t.params == null && (t.params = []), t.params.push(i))
					break
				}
				case 'returns': {
					var s = Sa(n)
					s != null && (t.returns = s)
					break
				}
			}
	}
	return t
}
u(Fa, 'extractJsDocTags')
function ba(e) {
	var t = e.name
	return t != null && t !== 'null-null'
		? {
				name: e.name,
				type: e.type,
				description: e.description,
				getPrettyName: u(function () {
					return t.includes('null') ? t.replace('-null', '').replace('.null', '') : e.name
				}, 'getPrettyName'),
				getTypeName: u(function () {
					return e.type != null ? ct(e.type) : null
				}, 'getTypeName'),
		  }
		: null
}
u(ba, 'extractParam')
function Sa(e) {
	return e.type != null
		? {
				type: e.type,
				description: e.description,
				getTypeName: u(function () {
					return ct(e.type)
				}, 'getTypeName'),
		  }
		: null
}
u(Sa, 'extractReturns')
function ct(e) {
	if (e.type === 'NameExpression') return e.name
	if (e.type === 'RecordType') {
		var t = e.fields.map(function (i) {
			if (i.value != null) {
				var s = ct(i.value)
				return ''.concat(i.key, ': ').concat(s)
			}
			return i.key
		})
		return '({'.concat(t.join(', '), '})')
	}
	if (e.type === 'UnionType') {
		var r = e.elements.map(ct)
		return '('.concat(r.join('|'), ')')
	}
	if (e.type === 'ArrayType') return '[]'
	if (e.type === 'TypeApplication' && e.expression != null && e.expression.name === 'Array') {
		var n = ct(e.applications[0])
		return ''.concat(n, '[]')
	}
	return e.type === 'NullableType' || e.type === 'NonNullableType' || e.type === 'OptionalType'
		? ct(e.expression)
		: e.type === 'AllLiteral'
		  ? 'any'
		  : null
}
u(ct, 'extractTypeName')
var _a = 90,
	Ba = 50
function kr(e) {
	return e.length > _a
}
u(kr, 'isTooLongForTypeSummary')
function Et(e) {
	return e.length > Ba
}
u(Et, 'isTooLongForDefaultValueSummary')
function ae(e, t) {
	return e === t ? { summary: e } : { summary: e, detail: t }
}
u(ae, 'createSummaryValue')
var qt
;(function (e) {
	;(e.UNION = 'union'), (e.SIGNATURE = 'signature')
})(qt || (qt = {}))
function ni(e) {
	var t = e.name,
		r = e.value,
		n = e.elements,
		i = e.raw
	return r != null ? r : n != null ? n.map(ni).join(' | ') : i != null ? i : t
}
u(ni, 'generateUnionElement')
function wa(e) {
	var t = e.name,
		r = e.raw,
		n = e.elements
	return n != null ? ae(n.map(ni).join(' | ')) : r != null ? ae(r.replace(/^\|\s*/, '')) : ae(t)
}
u(wa, 'generateUnion$1')
function Ta(e) {
	var t = e.type,
		r = e.raw
	return r != null ? ae(r) : ae(t)
}
u(Ta, 'generateFuncSignature$1')
function ka(e) {
	var t = e.type,
		r = e.raw
	return r != null ? (kr(r) ? ae(t, r) : ae(r)) : ae(t)
}
u(ka, 'generateObjectSignature')
function Na(e) {
	var t = e.type
	return t === 'object' ? ka(e) : Ta(e)
}
u(Na, 'generateSignature')
function Oa(e) {
	var t = e.name,
		r = e.raw
	return r != null ? (kr(r) ? ae(t, r) : ae(r)) : ae(t)
}
u(Oa, 'generateDefault')
function Ia(e) {
	if (e == null) return null
	switch (e.name) {
		case qt.UNION:
			return wa(e)
		case qt.SIGNATURE:
			return Na(e)
		default:
			return Oa(e)
	}
}
u(Ia, 'createType$3')
function Pa(e, t) {
	if (e != null) {
		var r = e.value
		if (!Br(r)) return Et(r) ? ae(t.name, r) : ae(r)
	}
	return null
}
u(Pa, 'createDefaultValue$3')
var Ra = u(function (t, r) {
	var n = r.flowType,
		i = r.description,
		s = r.required,
		o = r.defaultValue
	return { name: t, type: Ia(n), required: s, description: i, defaultValue: Pa(o, n) }
}, 'createFlowPropDef')
function La(e) {
	var t = e.tsType,
		r = e.required
	return t == null ? null : ae(r ? t.name : t.name.replace(' | undefined', ''))
}
u(La, 'createType$2')
function Ma(e) {
	var t = e.defaultValue
	if (t != null) {
		var r = t.value
		if (!Br(r)) return ae(r)
	}
	return null
}
u(Ma, 'createDefaultValue$2')
var ja = u(function (t, r) {
	var n = r.description,
		i = r.required
	return { name: t, type: La(r), required: i, description: n, defaultValue: Ma(r) }
}, 'createTsPropDef')
function Va(e) {
	return e != null ? ae(e.name) : null
}
u(Va, 'createType$1')
function qa(e) {
	var t = e.computed,
		r = e.func
	return typeof t > 'u' && typeof r > 'u'
}
u(qa, 'isReactDocgenTypescript')
function Ua(e) {
	return e
		? e.name === 'string'
			? !0
			: e.name === 'enum'
			  ? Array.isArray(e.value) &&
			    e.value.every(function (t) {
						var r = t.value
						return typeof r == 'string' && r[0] === '"' && r[r.length - 1] === '"'
			    })
			  : !1
		: !1
}
u(Ua, 'isStringValued')
function Wa(e, t) {
	if (e != null) {
		var r = e.value
		if (!Br(r)) return qa(e) && Ua(t) ? ae(JSON.stringify(r)) : ae(r)
	}
	return null
}
u(Wa, 'createDefaultValue$1')
function ii(e, t, r) {
	var n = r.description,
		i = r.required,
		s = r.defaultValue
	return { name: e, type: Va(t), required: i, description: n, defaultValue: Wa(s, t) }
}
u(ii, 'createBasicPropDef')
function Ht(e, t) {
	if (t.includesJsDoc) {
		var r = t.description,
			n = t.extractedTags
		r != null && (e.description = t.description)
		var i = n.params != null,
			s = n.returns != null && n.returns.type != null
		;(i || s) &&
			(e.jsDocTags = {
				params:
					i &&
					n.params.map(function (o) {
						return { name: o.getPrettyName(), description: o.description }
					}),
				returns: s && { description: n.returns.description },
			})
	}
	return e
}
u(Ht, 'applyJsDocResult')
var Ga = u(function (t, r, n) {
		var i = ii(t, r.type, r)
		return (i.sbType = _r(r)), Ht(i, n)
	}, 'javaScriptFactory'),
	za = u(function (t, r, n) {
		var i = ja(t, r)
		return (i.sbType = _r(r)), Ht(i, n)
	}, 'tsFactory'),
	$a = u(function (t, r, n) {
		var i = Ra(t, r)
		return (i.sbType = _r(r)), Ht(i, n)
	}, 'flowFactory'),
	Ja = u(function (t, r, n) {
		var i = ii(t, { name: 'unknown' }, r)
		return Ht(i, n)
	}, 'unknownFactory'),
	ui = u(function (t) {
		switch (t) {
			case qe.JAVASCRIPT:
				return Ga
			case qe.TYPESCRIPT:
				return za
			case qe.FLOW:
				return $a
			default:
				return Ja
		}
	}, 'getPropDefFactory'),
	ai = u(function (t) {
		return t.type != null
			? qe.JAVASCRIPT
			: t.flowType != null
			  ? qe.FLOW
			  : t.tsType != null
			    ? qe.TYPESCRIPT
			    : qe.UNKNOWN
	}, 'getTypeSystem'),
	Ha = u(function (t) {
		var r = ai(t[0]),
			n = ui(r)
		return t.map(function (i) {
			var s,
				o = i
			return (
				(s = i.type) !== null &&
					s !== void 0 &&
					s.elements &&
					(o = Object.assign({}, i, {
						type: Object.assign({}, i.type, { value: i.type.elements }),
					})),
				si(o.name, o, r, n)
			)
		})
	}, 'extractComponentSectionArray'),
	Qa = u(function (t) {
		var r = Object.keys(t),
			n = ai(t[r[0]]),
			i = ui(n)
		return r
			.map(function (s) {
				var o = t[s]
				return o != null ? si(s, o, n, i) : null
			})
			.filter(Boolean)
	}, 'extractComponentSectionObject'),
	Ka = u(function (t, r) {
		var n = zn(t, r)
		return zu(n) ? (Array.isArray(n) ? Ha(n) : Qa(n)) : []
	}, 'extractComponentProps')
function si(e, t, r, n) {
	var i = xa(t.description),
		s = i.includesJsDoc && i.ignore
	if (!s) {
		var o = n(e, t, i)
		return { propDef: o, jsDocTags: i.extractedTags, docgenInfo: t, typeSystem: r }
	}
	return null
}
u(si, 'extractProp')
function Xa(e) {
	return e != null && $u(e)
}
u(Xa, 'extractComponentDescription')
var Ya = u(function (t) {
		var r = t.component,
			n = t.argTypes,
			i = t.parameters.docs,
			s = i === void 0 ? {} : i,
			o = s.extractArgTypes,
			c = o && r ? o(r) : {},
			h = c ? Fu(c, n) : n
		return h
	}, 'enhanceArgTypes'),
	Za = 'storybook/docs',
	es = ''.concat(Za, '/snippet-rendered'),
	Ut
;(function (e) {
	;(e.AUTO = 'auto'), (e.CODE = 'code'), (e.DYNAMIC = 'dynamic')
})(Ut || (Ut = {}))
var gr = { exports: {} },
	ts = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
	rs = ts,
	ns = rs
function oi() {}
u(oi, 'emptyFunction')
function li() {}
u(li, 'emptyFunctionWithReset')
li.resetWarningCache = oi
var is = u(function () {
	function e(n, i, s, o, c, h) {
		if (h !== ns) {
			var g = new Error(
				'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
			)
			throw ((g.name = 'Invariant Violation'), g)
		}
	}
	u(e, 'shim'), (e.isRequired = e)
	function t() {
		return e
	}
	u(t, 'getShim')
	var r = {
		array: e,
		bigint: e,
		bool: e,
		func: e,
		number: e,
		object: e,
		string: e,
		symbol: e,
		any: e,
		arrayOf: t,
		element: e,
		elementType: e,
		instanceOf: t,
		node: e,
		objectOf: t,
		oneOf: t,
		oneOfType: t,
		shape: t,
		exact: t,
		checkPropTypes: li,
		resetWarningCache: oi,
	}
	return (r.PropTypes = r), r
}, 'factoryWithThrowingShims')
gr.exports = is()
function us(e, t) {
	var r = e != null,
		n = t != null
	if (!r && !n) return ''
	var i = []
	if (r) {
		var s = e.map(function (o) {
			var c = o.getPrettyName(),
				h = o.getTypeName()
			return h != null ? ''.concat(c, ': ').concat(h) : c
		})
		i.push('('.concat(s.join(', '), ')'))
	} else i.push('()')
	return n && i.push('=> '.concat(t.getTypeName())), i.join(' ')
}
u(us, 'generateFuncSignature')
function as(e, t) {
	var r = e != null,
		n = t != null
	if (!r && !n) return ''
	var i = []
	return (
		r ? i.push('( ... )') : i.push('()'), n && i.push('=> '.concat(t.getTypeName())), i.join(' ')
	)
}
u(as, 'generateShortFuncSignature')
function ss(e) {
	return e.replace(
		/,/g,
		`,\r
`,
	)
}
u(ss, 'toMultilineSignature')
var Ar = 'custom',
	Tt = 'object',
	Nr = 'array',
	os = 'class',
	dt = 'func',
	yt = 'element',
	ci = { exports: {} }
const ls = [
	'a',
	'abbr',
	'address',
	'area',
	'article',
	'aside',
	'audio',
	'b',
	'base',
	'bdi',
	'bdo',
	'blockquote',
	'body',
	'br',
	'button',
	'canvas',
	'caption',
	'cite',
	'code',
	'col',
	'colgroup',
	'data',
	'datalist',
	'dd',
	'del',
	'details',
	'dfn',
	'dialog',
	'div',
	'dl',
	'dt',
	'em',
	'embed',
	'fieldset',
	'figcaption',
	'figure',
	'footer',
	'form',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	'head',
	'header',
	'hgroup',
	'hr',
	'html',
	'i',
	'iframe',
	'img',
	'input',
	'ins',
	'kbd',
	'label',
	'legend',
	'li',
	'link',
	'main',
	'map',
	'mark',
	'math',
	'menu',
	'menuitem',
	'meta',
	'meter',
	'nav',
	'noscript',
	'object',
	'ol',
	'optgroup',
	'option',
	'output',
	'p',
	'param',
	'picture',
	'pre',
	'progress',
	'q',
	'rb',
	'rp',
	'rt',
	'rtc',
	'ruby',
	's',
	'samp',
	'script',
	'section',
	'select',
	'slot',
	'small',
	'source',
	'span',
	'strong',
	'style',
	'sub',
	'summary',
	'sup',
	'svg',
	'table',
	'tbody',
	'td',
	'template',
	'textarea',
	'tfoot',
	'th',
	'thead',
	'time',
	'title',
	'tr',
	'track',
	'u',
	'ul',
	'var',
	'video',
	'wbr',
]
;(function (e) {
	e.exports = ls
})(ci)
const cs = bu(ci.exports)
function Or(e) {
	return cs.includes(e.toLowerCase())
}
u(Or, 'isHtmlTag')
var fi = {},
	pi = {}
;(function (e) {
	u(function t(r) {
		var n, i, s, o, c, h
		function g(m) {
			var y = {},
				_,
				F
			for (_ in m)
				m.hasOwnProperty(_) &&
					((F = m[_]), typeof F == 'object' && F !== null ? (y[_] = g(F)) : (y[_] = F))
			return y
		}
		u(g, 'deepCopy')
		function D(m, y) {
			var _, F, z, W
			for (F = m.length, z = 0; F; )
				(_ = F >>> 1), (W = z + _), y(m[W]) ? (F = _) : ((z = W + 1), (F -= _ + 1))
			return z
		}
		u(D, 'upperBound'),
			(n = {
				AssignmentExpression: 'AssignmentExpression',
				AssignmentPattern: 'AssignmentPattern',
				ArrayExpression: 'ArrayExpression',
				ArrayPattern: 'ArrayPattern',
				ArrowFunctionExpression: 'ArrowFunctionExpression',
				AwaitExpression: 'AwaitExpression',
				BlockStatement: 'BlockStatement',
				BinaryExpression: 'BinaryExpression',
				BreakStatement: 'BreakStatement',
				CallExpression: 'CallExpression',
				CatchClause: 'CatchClause',
				ChainExpression: 'ChainExpression',
				ClassBody: 'ClassBody',
				ClassDeclaration: 'ClassDeclaration',
				ClassExpression: 'ClassExpression',
				ComprehensionBlock: 'ComprehensionBlock',
				ComprehensionExpression: 'ComprehensionExpression',
				ConditionalExpression: 'ConditionalExpression',
				ContinueStatement: 'ContinueStatement',
				DebuggerStatement: 'DebuggerStatement',
				DirectiveStatement: 'DirectiveStatement',
				DoWhileStatement: 'DoWhileStatement',
				EmptyStatement: 'EmptyStatement',
				ExportAllDeclaration: 'ExportAllDeclaration',
				ExportDefaultDeclaration: 'ExportDefaultDeclaration',
				ExportNamedDeclaration: 'ExportNamedDeclaration',
				ExportSpecifier: 'ExportSpecifier',
				ExpressionStatement: 'ExpressionStatement',
				ForStatement: 'ForStatement',
				ForInStatement: 'ForInStatement',
				ForOfStatement: 'ForOfStatement',
				FunctionDeclaration: 'FunctionDeclaration',
				FunctionExpression: 'FunctionExpression',
				GeneratorExpression: 'GeneratorExpression',
				Identifier: 'Identifier',
				IfStatement: 'IfStatement',
				ImportExpression: 'ImportExpression',
				ImportDeclaration: 'ImportDeclaration',
				ImportDefaultSpecifier: 'ImportDefaultSpecifier',
				ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
				ImportSpecifier: 'ImportSpecifier',
				Literal: 'Literal',
				LabeledStatement: 'LabeledStatement',
				LogicalExpression: 'LogicalExpression',
				MemberExpression: 'MemberExpression',
				MetaProperty: 'MetaProperty',
				MethodDefinition: 'MethodDefinition',
				ModuleSpecifier: 'ModuleSpecifier',
				NewExpression: 'NewExpression',
				ObjectExpression: 'ObjectExpression',
				ObjectPattern: 'ObjectPattern',
				PrivateIdentifier: 'PrivateIdentifier',
				Program: 'Program',
				Property: 'Property',
				PropertyDefinition: 'PropertyDefinition',
				RestElement: 'RestElement',
				ReturnStatement: 'ReturnStatement',
				SequenceExpression: 'SequenceExpression',
				SpreadElement: 'SpreadElement',
				Super: 'Super',
				SwitchStatement: 'SwitchStatement',
				SwitchCase: 'SwitchCase',
				TaggedTemplateExpression: 'TaggedTemplateExpression',
				TemplateElement: 'TemplateElement',
				TemplateLiteral: 'TemplateLiteral',
				ThisExpression: 'ThisExpression',
				ThrowStatement: 'ThrowStatement',
				TryStatement: 'TryStatement',
				UnaryExpression: 'UnaryExpression',
				UpdateExpression: 'UpdateExpression',
				VariableDeclaration: 'VariableDeclaration',
				VariableDeclarator: 'VariableDeclarator',
				WhileStatement: 'WhileStatement',
				WithStatement: 'WithStatement',
				YieldExpression: 'YieldExpression',
			}),
			(s = {
				AssignmentExpression: ['left', 'right'],
				AssignmentPattern: ['left', 'right'],
				ArrayExpression: ['elements'],
				ArrayPattern: ['elements'],
				ArrowFunctionExpression: ['params', 'body'],
				AwaitExpression: ['argument'],
				BlockStatement: ['body'],
				BinaryExpression: ['left', 'right'],
				BreakStatement: ['label'],
				CallExpression: ['callee', 'arguments'],
				CatchClause: ['param', 'body'],
				ChainExpression: ['expression'],
				ClassBody: ['body'],
				ClassDeclaration: ['id', 'superClass', 'body'],
				ClassExpression: ['id', 'superClass', 'body'],
				ComprehensionBlock: ['left', 'right'],
				ComprehensionExpression: ['blocks', 'filter', 'body'],
				ConditionalExpression: ['test', 'consequent', 'alternate'],
				ContinueStatement: ['label'],
				DebuggerStatement: [],
				DirectiveStatement: [],
				DoWhileStatement: ['body', 'test'],
				EmptyStatement: [],
				ExportAllDeclaration: ['source'],
				ExportDefaultDeclaration: ['declaration'],
				ExportNamedDeclaration: ['declaration', 'specifiers', 'source'],
				ExportSpecifier: ['exported', 'local'],
				ExpressionStatement: ['expression'],
				ForStatement: ['init', 'test', 'update', 'body'],
				ForInStatement: ['left', 'right', 'body'],
				ForOfStatement: ['left', 'right', 'body'],
				FunctionDeclaration: ['id', 'params', 'body'],
				FunctionExpression: ['id', 'params', 'body'],
				GeneratorExpression: ['blocks', 'filter', 'body'],
				Identifier: [],
				IfStatement: ['test', 'consequent', 'alternate'],
				ImportExpression: ['source'],
				ImportDeclaration: ['specifiers', 'source'],
				ImportDefaultSpecifier: ['local'],
				ImportNamespaceSpecifier: ['local'],
				ImportSpecifier: ['imported', 'local'],
				Literal: [],
				LabeledStatement: ['label', 'body'],
				LogicalExpression: ['left', 'right'],
				MemberExpression: ['object', 'property'],
				MetaProperty: ['meta', 'property'],
				MethodDefinition: ['key', 'value'],
				ModuleSpecifier: [],
				NewExpression: ['callee', 'arguments'],
				ObjectExpression: ['properties'],
				ObjectPattern: ['properties'],
				PrivateIdentifier: [],
				Program: ['body'],
				Property: ['key', 'value'],
				PropertyDefinition: ['key', 'value'],
				RestElement: ['argument'],
				ReturnStatement: ['argument'],
				SequenceExpression: ['expressions'],
				SpreadElement: ['argument'],
				Super: [],
				SwitchStatement: ['discriminant', 'cases'],
				SwitchCase: ['test', 'consequent'],
				TaggedTemplateExpression: ['tag', 'quasi'],
				TemplateElement: [],
				TemplateLiteral: ['quasis', 'expressions'],
				ThisExpression: [],
				ThrowStatement: ['argument'],
				TryStatement: ['block', 'handler', 'finalizer'],
				UnaryExpression: ['argument'],
				UpdateExpression: ['argument'],
				VariableDeclaration: ['declarations'],
				VariableDeclarator: ['id', 'init'],
				WhileStatement: ['test', 'body'],
				WithStatement: ['object', 'body'],
				YieldExpression: ['argument'],
			}),
			(o = {}),
			(c = {}),
			(h = {}),
			(i = { Break: o, Skip: c, Remove: h })
		function x(m, y) {
			;(this.parent = m), (this.key = y)
		}
		u(x, 'Reference'),
			(x.prototype.replace = u(function (y) {
				this.parent[this.key] = y
			}, 'replace')),
			(x.prototype.remove = u(function () {
				return Array.isArray(this.parent)
					? (this.parent.splice(this.key, 1), !0)
					: (this.replace(null), !1)
			}, 'remove'))
		function E(m, y, _, F) {
			;(this.node = m), (this.path = y), (this.wrap = _), (this.ref = F)
		}
		u(E, 'Element')
		function v() {}
		u(v, 'Controller'),
			(v.prototype.path = u(function () {
				var y, _, F, z, W, M
				function Y(J, ue) {
					if (Array.isArray(ue)) for (F = 0, z = ue.length; F < z; ++F) J.push(ue[F])
					else J.push(ue)
				}
				if ((u(Y, 'addToPath'), !this.__current.path)) return null
				for (W = [], y = 2, _ = this.__leavelist.length; y < _; ++y)
					(M = this.__leavelist[y]), Y(W, M.path)
				return Y(W, this.__current.path), W
			}, 'path')),
			(v.prototype.type = function () {
				var m = this.current()
				return m.type || this.__current.wrap
			}),
			(v.prototype.parents = u(function () {
				var y, _, F
				for (F = [], y = 1, _ = this.__leavelist.length; y < _; ++y)
					F.push(this.__leavelist[y].node)
				return F
			}, 'parents')),
			(v.prototype.current = u(function () {
				return this.__current.node
			}, 'current')),
			(v.prototype.__execute = u(function (y, _) {
				var F, z
				return (
					(z = void 0),
					(F = this.__current),
					(this.__current = _),
					(this.__state = null),
					y && (z = y.call(this, _.node, this.__leavelist[this.__leavelist.length - 1].node)),
					(this.__current = F),
					z
				)
			}, '__execute')),
			(v.prototype.notify = u(function (y) {
				this.__state = y
			}, 'notify')),
			(v.prototype.skip = function () {
				this.notify(c)
			}),
			(v.prototype.break = function () {
				this.notify(o)
			}),
			(v.prototype.remove = function () {
				this.notify(h)
			}),
			(v.prototype.__initialize = function (m, y) {
				;(this.visitor = y),
					(this.root = m),
					(this.__worklist = []),
					(this.__leavelist = []),
					(this.__current = null),
					(this.__state = null),
					(this.__fallback = null),
					y.fallback === 'iteration'
						? (this.__fallback = Object.keys)
						: typeof y.fallback == 'function' && (this.__fallback = y.fallback),
					(this.__keys = s),
					y.keys && (this.__keys = Object.assign(Object.create(this.__keys), y.keys))
			})
		function b(m) {
			return m == null ? !1 : typeof m == 'object' && typeof m.type == 'string'
		}
		u(b, 'isNode')
		function C(m, y) {
			return (m === n.ObjectExpression || m === n.ObjectPattern) && y === 'properties'
		}
		u(C, 'isProperty')
		function B(m, y) {
			for (var _ = m.length - 1; _ >= 0; --_) if (m[_].node === y) return !0
			return !1
		}
		u(B, 'candidateExistsInLeaveList'),
			(v.prototype.traverse = u(function (y, _) {
				var F, z, W, M, Y, J, ue, Ce, re, k, P, q
				for (
					this.__initialize(y, _),
						q = {},
						F = this.__worklist,
						z = this.__leavelist,
						F.push(new E(y, null, null, null)),
						z.push(new E(null, null, null, null));
					F.length;

				) {
					if (((W = F.pop()), W === q)) {
						if (((W = z.pop()), (J = this.__execute(_.leave, W)), this.__state === o || J === o))
							return
						continue
					}
					if (W.node) {
						if (((J = this.__execute(_.enter, W)), this.__state === o || J === o)) return
						if ((F.push(q), z.push(W), this.__state === c || J === c)) continue
						if (((M = W.node), (Y = M.type || W.wrap), (k = this.__keys[Y]), !k))
							if (this.__fallback) k = this.__fallback(M)
							else throw new Error('Unknown node type ' + Y + '.')
						for (Ce = k.length; (Ce -= 1) >= 0; )
							if (((ue = k[Ce]), (P = M[ue]), !!P)) {
								if (Array.isArray(P)) {
									for (re = P.length; (re -= 1) >= 0; )
										if (!!P[re] && !B(z, P[re])) {
											if (C(Y, k[Ce])) W = new E(P[re], [ue, re], 'Property', null)
											else if (b(P[re])) W = new E(P[re], [ue, re], null, null)
											else continue
											F.push(W)
										}
								} else if (b(P)) {
									if (B(z, P)) continue
									F.push(new E(P, ue, null, null))
								}
							}
					}
				}
			}, 'traverse')),
			(v.prototype.replace = u(function (y, _) {
				var F, z, W, M, Y, J, ue, Ce, re, k, P, q, ie
				function V(ce) {
					var le, te, H, S
					if (ce.ref.remove()) {
						for (te = ce.ref.key, S = ce.ref.parent, le = F.length; le--; )
							if (((H = F[le]), H.ref && H.ref.parent === S)) {
								if (H.ref.key < te) break
								--H.ref.key
							}
					}
				}
				for (
					u(V, 'removeElem'),
						this.__initialize(y, _),
						P = {},
						F = this.__worklist,
						z = this.__leavelist,
						q = { root: y },
						J = new E(y, null, null, new x(q, 'root')),
						F.push(J),
						z.push(J);
					F.length;

				) {
					if (((J = F.pop()), J === P)) {
						if (
							((J = z.pop()),
							(Y = this.__execute(_.leave, J)),
							Y !== void 0 && Y !== o && Y !== c && Y !== h && J.ref.replace(Y),
							(this.__state === h || Y === h) && V(J),
							this.__state === o || Y === o)
						)
							return q.root
						continue
					}
					if (
						((Y = this.__execute(_.enter, J)),
						Y !== void 0 && Y !== o && Y !== c && Y !== h && (J.ref.replace(Y), (J.node = Y)),
						(this.__state === h || Y === h) && (V(J), (J.node = null)),
						this.__state === o || Y === o)
					)
						return q.root
					if (((W = J.node), !!W && (F.push(P), z.push(J), !(this.__state === c || Y === c)))) {
						if (((M = W.type || J.wrap), (re = this.__keys[M]), !re))
							if (this.__fallback) re = this.__fallback(W)
							else throw new Error('Unknown node type ' + M + '.')
						for (ue = re.length; (ue -= 1) >= 0; )
							if (((ie = re[ue]), (k = W[ie]), !!k))
								if (Array.isArray(k)) {
									for (Ce = k.length; (Ce -= 1) >= 0; )
										if (!!k[Ce]) {
											if (C(M, re[ue])) J = new E(k[Ce], [ie, Ce], 'Property', new x(k, Ce))
											else if (b(k[Ce])) J = new E(k[Ce], [ie, Ce], null, new x(k, Ce))
											else continue
											F.push(J)
										}
								} else b(k) && F.push(new E(k, ie, null, new x(W, ie)))
					}
				}
				return q.root
			}, 'replace'))
		function U(m, y) {
			var _ = new v()
			return _.traverse(m, y)
		}
		u(U, 'traverse')
		function j(m, y) {
			var _ = new v()
			return _.replace(m, y)
		}
		u(j, 'replace')
		function Q(m, y) {
			var _
			return (
				(_ = D(
					y,
					u(function (z) {
						return z.range[0] > m.range[0]
					}, 'search'),
				)),
				(m.extendedRange = [m.range[0], m.range[1]]),
				_ !== y.length && (m.extendedRange[1] = y[_].range[0]),
				(_ -= 1),
				_ >= 0 && (m.extendedRange[0] = y[_].range[1]),
				m
			)
		}
		u(Q, 'extendCommentRange')
		function w(m, y, _) {
			var F = [],
				z,
				W,
				M,
				Y
			if (!m.range) throw new Error('attachComments needs range information')
			if (!_.length) {
				if (y.length) {
					for (M = 0, W = y.length; M < W; M += 1)
						(z = g(y[M])), (z.extendedRange = [0, m.range[0]]), F.push(z)
					m.leadingComments = F
				}
				return m
			}
			for (M = 0, W = y.length; M < W; M += 1) F.push(Q(g(y[M]), _))
			return (
				(Y = 0),
				U(m, {
					enter: function (J) {
						for (var ue; Y < F.length && ((ue = F[Y]), !(ue.extendedRange[1] > J.range[0])); )
							ue.extendedRange[1] === J.range[0]
								? (J.leadingComments || (J.leadingComments = []),
								  J.leadingComments.push(ue),
								  F.splice(Y, 1))
								: (Y += 1)
						if (Y === F.length) return i.Break
						if (F[Y].extendedRange[0] > J.range[1]) return i.Skip
					},
				}),
				(Y = 0),
				U(m, {
					leave: function (J) {
						for (var ue; Y < F.length && ((ue = F[Y]), !(J.range[1] < ue.extendedRange[0])); )
							J.range[1] === ue.extendedRange[0]
								? (J.trailingComments || (J.trailingComments = []),
								  J.trailingComments.push(ue),
								  F.splice(Y, 1))
								: (Y += 1)
						if (Y === F.length) return i.Break
						if (F[Y].extendedRange[0] > J.range[1]) return i.Skip
					},
				}),
				m
			)
		}
		return (
			u(w, 'attachComments'),
			(r.Syntax = n),
			(r.traverse = U),
			(r.replace = j),
			(r.attachComments = w),
			(r.VisitorKeys = s),
			(r.VisitorOption = i),
			(r.Controller = v),
			(r.cloneEnvironment = function () {
				return t({})
			}),
			r
		)
	}, 'clone')(e)
})(pi)
var xt = {},
	ur = {},
	Lt = {},
	Mt = {},
	pn
function fs() {
	if (pn) return Mt
	pn = 1
	var e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('')
	return (
		(Mt.encode = function (t) {
			if (0 <= t && t < e.length) return e[t]
			throw new TypeError('Must be between 0 and 63: ' + t)
		}),
		(Mt.decode = function (t) {
			var r = 65,
				n = 90,
				i = 97,
				s = 122,
				o = 48,
				c = 57,
				h = 43,
				g = 47,
				D = 26,
				x = 52
			return r <= t && t <= n
				? t - r
				: i <= t && t <= s
				  ? t - i + D
				  : o <= t && t <= c
				    ? t - o + x
				    : t == h
				      ? 62
				      : t == g
				        ? 63
				        : -1
		}),
		Mt
	)
}
u(fs, 'requireBase64')
var hn
function hi() {
	if (hn) return Lt
	hn = 1
	var e = fs(),
		t = 5,
		r = 1 << t,
		n = r - 1,
		i = r
	function s(c) {
		return c < 0 ? (-c << 1) + 1 : (c << 1) + 0
	}
	u(s, 'toVLQSigned')
	function o(c) {
		var h = (c & 1) === 1,
			g = c >> 1
		return h ? -g : g
	}
	return (
		u(o, 'fromVLQSigned'),
		(Lt.encode = u(function (h) {
			var g = '',
				D,
				x = s(h)
			do (D = x & n), (x >>>= t), x > 0 && (D |= i), (g += e.encode(D))
			while (x > 0)
			return g
		}, 'base64VLQ_encode')),
		(Lt.decode = u(function (h, g, D) {
			var x = h.length,
				E = 0,
				v = 0,
				b,
				C
			do {
				if (g >= x) throw new Error('Expected more digits in base 64 VLQ value.')
				if (((C = e.decode(h.charCodeAt(g++))), C === -1))
					throw new Error('Invalid base64 digit: ' + h.charAt(g - 1))
				;(b = !!(C & i)), (C &= n), (E = E + (C << v)), (v += t)
			} while (b)
			;(D.value = o(E)), (D.rest = g)
		}, 'base64VLQ_decode')),
		Lt
	)
}
u(hi, 'requireBase64Vlq')
var ar = {},
	dn
function kt() {
	return (
		dn ||
			((dn = 1),
			(function (e) {
				function t(w, m, y) {
					if (m in w) return w[m]
					if (arguments.length === 3) return y
					throw new Error('"' + m + '" is a required argument.')
				}
				u(t, 'getArg'), (e.getArg = t)
				var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
					n = /^data:.+\,.+$/
				function i(w) {
					var m = w.match(r)
					return m ? { scheme: m[1], auth: m[2], host: m[3], port: m[4], path: m[5] } : null
				}
				u(i, 'urlParse'), (e.urlParse = i)
				function s(w) {
					var m = ''
					return (
						w.scheme && (m += w.scheme + ':'),
						(m += '//'),
						w.auth && (m += w.auth + '@'),
						w.host && (m += w.host),
						w.port && (m += ':' + w.port),
						w.path && (m += w.path),
						m
					)
				}
				u(s, 'urlGenerate'), (e.urlGenerate = s)
				function o(w) {
					var m = w,
						y = i(w)
					if (y) {
						if (!y.path) return w
						m = y.path
					}
					for (var _ = e.isAbsolute(m), F = m.split(/\/+/), z, W = 0, M = F.length - 1; M >= 0; M--)
						(z = F[M]),
							z === '.'
								? F.splice(M, 1)
								: z === '..'
								  ? W++
								  : W > 0 && (z === '' ? (F.splice(M + 1, W), (W = 0)) : (F.splice(M, 2), W--))
					return (m = F.join('/')), m === '' && (m = _ ? '/' : '.'), y ? ((y.path = m), s(y)) : m
				}
				u(o, 'normalize'), (e.normalize = o)
				function c(w, m) {
					w === '' && (w = '.'), m === '' && (m = '.')
					var y = i(m),
						_ = i(w)
					if ((_ && (w = _.path || '/'), y && !y.scheme)) return _ && (y.scheme = _.scheme), s(y)
					if (y || m.match(n)) return m
					if (_ && !_.host && !_.path) return (_.host = m), s(_)
					var F = m.charAt(0) === '/' ? m : o(w.replace(/\/+$/, '') + '/' + m)
					return _ ? ((_.path = F), s(_)) : F
				}
				u(c, 'join'),
					(e.join = c),
					(e.isAbsolute = function (w) {
						return w.charAt(0) === '/' || r.test(w)
					})
				function h(w, m) {
					w === '' && (w = '.'), (w = w.replace(/\/$/, ''))
					for (var y = 0; m.indexOf(w + '/') !== 0; ) {
						var _ = w.lastIndexOf('/')
						if (_ < 0 || ((w = w.slice(0, _)), w.match(/^([^\/]+:\/)?\/*$/))) return m
						++y
					}
					return Array(y + 1).join('../') + m.substr(w.length + 1)
				}
				u(h, 'relative'), (e.relative = h)
				var g = (function () {
					var w = Object.create(null)
					return !('__proto__' in w)
				})()
				function D(w) {
					return w
				}
				u(D, 'identity')
				function x(w) {
					return v(w) ? '$' + w : w
				}
				u(x, 'toSetString'), (e.toSetString = g ? D : x)
				function E(w) {
					return v(w) ? w.slice(1) : w
				}
				u(E, 'fromSetString'), (e.fromSetString = g ? D : E)
				function v(w) {
					if (!w) return !1
					var m = w.length
					if (
						m < 9 ||
						w.charCodeAt(m - 1) !== 95 ||
						w.charCodeAt(m - 2) !== 95 ||
						w.charCodeAt(m - 3) !== 111 ||
						w.charCodeAt(m - 4) !== 116 ||
						w.charCodeAt(m - 5) !== 111 ||
						w.charCodeAt(m - 6) !== 114 ||
						w.charCodeAt(m - 7) !== 112 ||
						w.charCodeAt(m - 8) !== 95 ||
						w.charCodeAt(m - 9) !== 95
					)
						return !1
					for (var y = m - 10; y >= 0; y--) if (w.charCodeAt(y) !== 36) return !1
					return !0
				}
				u(v, 'isProtoString')
				function b(w, m, y) {
					var _ = B(w.source, m.source)
					return _ !== 0 ||
						((_ = w.originalLine - m.originalLine), _ !== 0) ||
						((_ = w.originalColumn - m.originalColumn), _ !== 0 || y) ||
						((_ = w.generatedColumn - m.generatedColumn), _ !== 0) ||
						((_ = w.generatedLine - m.generatedLine), _ !== 0)
						? _
						: B(w.name, m.name)
				}
				u(b, 'compareByOriginalPositions'), (e.compareByOriginalPositions = b)
				function C(w, m, y) {
					var _ = w.generatedLine - m.generatedLine
					return _ !== 0 ||
						((_ = w.generatedColumn - m.generatedColumn), _ !== 0 || y) ||
						((_ = B(w.source, m.source)), _ !== 0) ||
						((_ = w.originalLine - m.originalLine), _ !== 0) ||
						((_ = w.originalColumn - m.originalColumn), _ !== 0)
						? _
						: B(w.name, m.name)
				}
				u(C, 'compareByGeneratedPositionsDeflated'), (e.compareByGeneratedPositionsDeflated = C)
				function B(w, m) {
					return w === m ? 0 : w === null ? 1 : m === null ? -1 : w > m ? 1 : -1
				}
				u(B, 'strcmp')
				function U(w, m) {
					var y = w.generatedLine - m.generatedLine
					return y !== 0 ||
						((y = w.generatedColumn - m.generatedColumn), y !== 0) ||
						((y = B(w.source, m.source)), y !== 0) ||
						((y = w.originalLine - m.originalLine), y !== 0) ||
						((y = w.originalColumn - m.originalColumn), y !== 0)
						? y
						: B(w.name, m.name)
				}
				u(U, 'compareByGeneratedPositionsInflated'), (e.compareByGeneratedPositionsInflated = U)
				function j(w) {
					return JSON.parse(w.replace(/^\)]}'[^\n]*\n/, ''))
				}
				u(j, 'parseSourceMapInput'), (e.parseSourceMapInput = j)
				function Q(w, m, y) {
					if (
						((m = m || ''),
						w && (w[w.length - 1] !== '/' && m[0] !== '/' && (w += '/'), (m = w + m)),
						y)
					) {
						var _ = i(y)
						if (!_) throw new Error('sourceMapURL could not be parsed')
						if (_.path) {
							var F = _.path.lastIndexOf('/')
							F >= 0 && (_.path = _.path.substring(0, F + 1))
						}
						m = c(s(_), m)
					}
					return o(m)
				}
				u(Q, 'computeSourceURL'), (e.computeSourceURL = Q)
			})(ar)),
		ar
	)
}
u(kt, 'requireUtil')
var sr = {},
	mn
function di() {
	if (mn) return sr
	mn = 1
	var e = kt(),
		t = Object.prototype.hasOwnProperty,
		r = typeof Map < 'u'
	function n() {
		;(this._array = []), (this._set = r ? new Map() : Object.create(null))
	}
	return (
		u(n, 'ArraySet'),
		(n.fromArray = u(function (s, o) {
			for (var c = new n(), h = 0, g = s.length; h < g; h++) c.add(s[h], o)
			return c
		}, 'ArraySet_fromArray')),
		(n.prototype.size = u(function () {
			return r ? this._set.size : Object.getOwnPropertyNames(this._set).length
		}, 'ArraySet_size')),
		(n.prototype.add = u(function (s, o) {
			var c = r ? s : e.toSetString(s),
				h = r ? this.has(s) : t.call(this._set, c),
				g = this._array.length
			;(!h || o) && this._array.push(s), h || (r ? this._set.set(s, g) : (this._set[c] = g))
		}, 'ArraySet_add')),
		(n.prototype.has = u(function (s) {
			if (r) return this._set.has(s)
			var o = e.toSetString(s)
			return t.call(this._set, o)
		}, 'ArraySet_has')),
		(n.prototype.indexOf = u(function (s) {
			if (r) {
				var o = this._set.get(s)
				if (o >= 0) return o
			} else {
				var c = e.toSetString(s)
				if (t.call(this._set, c)) return this._set[c]
			}
			throw new Error('"' + s + '" is not in the set.')
		}, 'ArraySet_indexOf')),
		(n.prototype.at = u(function (s) {
			if (s >= 0 && s < this._array.length) return this._array[s]
			throw new Error('No element indexed by ' + s)
		}, 'ArraySet_at')),
		(n.prototype.toArray = u(function () {
			return this._array.slice()
		}, 'ArraySet_toArray')),
		(sr.ArraySet = n),
		sr
	)
}
u(di, 'requireArraySet')
var or = {},
	gn
function ps() {
	if (gn) return or
	gn = 1
	var e = kt()
	function t(n, i) {
		var s = n.generatedLine,
			o = i.generatedLine,
			c = n.generatedColumn,
			h = i.generatedColumn
		return o > s || (o == s && h >= c) || e.compareByGeneratedPositionsInflated(n, i) <= 0
	}
	u(t, 'generatedPositionAfter')
	function r() {
		;(this._array = []),
			(this._sorted = !0),
			(this._last = { generatedLine: -1, generatedColumn: 0 })
	}
	return (
		u(r, 'MappingList'),
		(r.prototype.unsortedForEach = u(function (i, s) {
			this._array.forEach(i, s)
		}, 'MappingList_forEach')),
		(r.prototype.add = u(function (i) {
			t(this._last, i)
				? ((this._last = i), this._array.push(i))
				: ((this._sorted = !1), this._array.push(i))
		}, 'MappingList_add')),
		(r.prototype.toArray = u(function () {
			return (
				this._sorted ||
					(this._array.sort(e.compareByGeneratedPositionsInflated), (this._sorted = !0)),
				this._array
			)
		}, 'MappingList_toArray')),
		(or.MappingList = r),
		or
	)
}
u(ps, 'requireMappingList')
var An
function mi() {
	if (An) return ur
	An = 1
	var e = hi(),
		t = kt(),
		r = di().ArraySet,
		n = ps().MappingList
	function i(s) {
		s || (s = {}),
			(this._file = t.getArg(s, 'file', null)),
			(this._sourceRoot = t.getArg(s, 'sourceRoot', null)),
			(this._skipValidation = t.getArg(s, 'skipValidation', !1)),
			(this._sources = new r()),
			(this._names = new r()),
			(this._mappings = new n()),
			(this._sourcesContents = null)
	}
	return (
		u(i, 'SourceMapGenerator'),
		(i.prototype._version = 3),
		(i.fromSourceMap = u(function (o) {
			var c = o.sourceRoot,
				h = new i({ file: o.file, sourceRoot: c })
			return (
				o.eachMapping(function (g) {
					var D = { generated: { line: g.generatedLine, column: g.generatedColumn } }
					g.source != null &&
						((D.source = g.source),
						c != null && (D.source = t.relative(c, D.source)),
						(D.original = { line: g.originalLine, column: g.originalColumn }),
						g.name != null && (D.name = g.name)),
						h.addMapping(D)
				}),
				o.sources.forEach(function (g) {
					var D = g
					c !== null && (D = t.relative(c, g)), h._sources.has(D) || h._sources.add(D)
					var x = o.sourceContentFor(g)
					x != null && h.setSourceContent(g, x)
				}),
				h
			)
		}, 'SourceMapGenerator_fromSourceMap')),
		(i.prototype.addMapping = u(function (o) {
			var c = t.getArg(o, 'generated'),
				h = t.getArg(o, 'original', null),
				g = t.getArg(o, 'source', null),
				D = t.getArg(o, 'name', null)
			this._skipValidation || this._validateMapping(c, h, g, D),
				g != null && ((g = String(g)), this._sources.has(g) || this._sources.add(g)),
				D != null && ((D = String(D)), this._names.has(D) || this._names.add(D)),
				this._mappings.add({
					generatedLine: c.line,
					generatedColumn: c.column,
					originalLine: h != null && h.line,
					originalColumn: h != null && h.column,
					source: g,
					name: D,
				})
		}, 'SourceMapGenerator_addMapping')),
		(i.prototype.setSourceContent = u(function (o, c) {
			var h = o
			this._sourceRoot != null && (h = t.relative(this._sourceRoot, h)),
				c != null
					? (this._sourcesContents || (this._sourcesContents = Object.create(null)),
					  (this._sourcesContents[t.toSetString(h)] = c))
					: this._sourcesContents &&
					  (delete this._sourcesContents[t.toSetString(h)],
					  Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null))
		}, 'SourceMapGenerator_setSourceContent')),
		(i.prototype.applySourceMap = u(function (o, c, h) {
			var g = c
			if (c == null) {
				if (o.file == null)
					throw new Error(
						`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`,
					)
				g = o.file
			}
			var D = this._sourceRoot
			D != null && (g = t.relative(D, g))
			var x = new r(),
				E = new r()
			this._mappings.unsortedForEach(function (v) {
				if (v.source === g && v.originalLine != null) {
					var b = o.originalPositionFor({ line: v.originalLine, column: v.originalColumn })
					b.source != null &&
						((v.source = b.source),
						h != null && (v.source = t.join(h, v.source)),
						D != null && (v.source = t.relative(D, v.source)),
						(v.originalLine = b.line),
						(v.originalColumn = b.column),
						b.name != null && (v.name = b.name))
				}
				var C = v.source
				C != null && !x.has(C) && x.add(C)
				var B = v.name
				B != null && !E.has(B) && E.add(B)
			}, this),
				(this._sources = x),
				(this._names = E),
				o.sources.forEach(function (v) {
					var b = o.sourceContentFor(v)
					b != null &&
						(h != null && (v = t.join(h, v)),
						D != null && (v = t.relative(D, v)),
						this.setSourceContent(v, b))
				}, this)
		}, 'SourceMapGenerator_applySourceMap')),
		(i.prototype._validateMapping = u(function (o, c, h, g) {
			if (c && typeof c.line != 'number' && typeof c.column != 'number')
				throw new Error(
					'original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.',
				)
			if (!(o && 'line' in o && 'column' in o && o.line > 0 && o.column >= 0 && !c && !h && !g)) {
				if (
					o &&
					'line' in o &&
					'column' in o &&
					c &&
					'line' in c &&
					'column' in c &&
					o.line > 0 &&
					o.column >= 0 &&
					c.line > 0 &&
					c.column >= 0 &&
					h
				)
					return
				throw new Error(
					'Invalid mapping: ' + JSON.stringify({ generated: o, source: h, original: c, name: g }),
				)
			}
		}, 'SourceMapGenerator_validateMapping')),
		(i.prototype._serializeMappings = u(function () {
			for (
				var o = 0,
					c = 1,
					h = 0,
					g = 0,
					D = 0,
					x = 0,
					E = '',
					v,
					b,
					C,
					B,
					U = this._mappings.toArray(),
					j = 0,
					Q = U.length;
				j < Q;
				j++
			) {
				if (((b = U[j]), (v = ''), b.generatedLine !== c))
					for (o = 0; b.generatedLine !== c; ) (v += ';'), c++
				else if (j > 0) {
					if (!t.compareByGeneratedPositionsInflated(b, U[j - 1])) continue
					v += ','
				}
				;(v += e.encode(b.generatedColumn - o)),
					(o = b.generatedColumn),
					b.source != null &&
						((B = this._sources.indexOf(b.source)),
						(v += e.encode(B - x)),
						(x = B),
						(v += e.encode(b.originalLine - 1 - g)),
						(g = b.originalLine - 1),
						(v += e.encode(b.originalColumn - h)),
						(h = b.originalColumn),
						b.name != null && ((C = this._names.indexOf(b.name)), (v += e.encode(C - D)), (D = C))),
					(E += v)
			}
			return E
		}, 'SourceMapGenerator_serializeMappings')),
		(i.prototype._generateSourcesContent = u(function (o, c) {
			return o.map(function (h) {
				if (!this._sourcesContents) return null
				c != null && (h = t.relative(c, h))
				var g = t.toSetString(h)
				return Object.prototype.hasOwnProperty.call(this._sourcesContents, g)
					? this._sourcesContents[g]
					: null
			}, this)
		}, 'SourceMapGenerator_generateSourcesContent')),
		(i.prototype.toJSON = u(function () {
			var o = {
				version: this._version,
				sources: this._sources.toArray(),
				names: this._names.toArray(),
				mappings: this._serializeMappings(),
			}
			return (
				this._file != null && (o.file = this._file),
				this._sourceRoot != null && (o.sourceRoot = this._sourceRoot),
				this._sourcesContents &&
					(o.sourcesContent = this._generateSourcesContent(o.sources, o.sourceRoot)),
				o
			)
		}, 'SourceMapGenerator_toJSON')),
		(i.prototype.toString = u(function () {
			return JSON.stringify(this.toJSON())
		}, 'SourceMapGenerator_toString')),
		(ur.SourceMapGenerator = i),
		ur
	)
}
u(mi, 'requireSourceMapGenerator')
var Ft = {},
	lr = {},
	Dn
function hs() {
	return (
		Dn ||
			((Dn = 1),
			(function (e) {
				;(e.GREATEST_LOWER_BOUND = 1), (e.LEAST_UPPER_BOUND = 2)
				function t(r, n, i, s, o, c) {
					var h = Math.floor((n - r) / 2) + r,
						g = o(i, s[h], !0)
					return g === 0
						? h
						: g > 0
						  ? n - h > 1
								? t(h, n, i, s, o, c)
								: c == e.LEAST_UPPER_BOUND
								  ? n < s.length
										? n
										: -1
								  : h
						  : h - r > 1
						    ? t(r, h, i, s, o, c)
						    : c == e.LEAST_UPPER_BOUND
						      ? h
						      : r < 0
						        ? -1
						        : r
				}
				u(t, 'recursiveSearch'),
					(e.search = u(function (n, i, s, o) {
						if (i.length === 0) return -1
						var c = t(-1, i.length, n, i, s, o || e.GREATEST_LOWER_BOUND)
						if (c < 0) return -1
						for (; c - 1 >= 0 && s(i[c], i[c - 1], !0) === 0; ) --c
						return c
					}, 'search'))
			})(lr)),
		lr
	)
}
u(hs, 'requireBinarySearch')
var cr = {},
	En
function ds() {
	if (En) return cr
	En = 1
	function e(n, i, s) {
		var o = n[i]
		;(n[i] = n[s]), (n[s] = o)
	}
	u(e, 'swap')
	function t(n, i) {
		return Math.round(n + Math.random() * (i - n))
	}
	u(t, 'randomIntInRange')
	function r(n, i, s, o) {
		if (s < o) {
			var c = t(s, o),
				h = s - 1
			e(n, c, o)
			for (var g = n[o], D = s; D < o; D++) i(n[D], g) <= 0 && ((h += 1), e(n, h, D))
			e(n, h + 1, D)
			var x = h + 1
			r(n, i, s, x - 1), r(n, i, x + 1, o)
		}
	}
	return (
		u(r, 'doQuickSort'),
		(cr.quickSort = function (n, i) {
			r(n, i, 0, n.length - 1)
		}),
		cr
	)
}
u(ds, 'requireQuickSort')
var yn
function ms() {
	if (yn) return Ft
	yn = 1
	var e = kt(),
		t = hs(),
		r = di().ArraySet,
		n = hi(),
		i = ds().quickSort
	function s(g, D) {
		var x = g
		return (
			typeof g == 'string' && (x = e.parseSourceMapInput(g)),
			x.sections != null ? new h(x, D) : new o(x, D)
		)
	}
	u(s, 'SourceMapConsumer'),
		(s.fromSourceMap = function (g, D) {
			return o.fromSourceMap(g, D)
		}),
		(s.prototype._version = 3),
		(s.prototype.__generatedMappings = null),
		Object.defineProperty(s.prototype, '_generatedMappings', {
			configurable: !0,
			enumerable: !0,
			get: function () {
				return (
					this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot),
					this.__generatedMappings
				)
			},
		}),
		(s.prototype.__originalMappings = null),
		Object.defineProperty(s.prototype, '_originalMappings', {
			configurable: !0,
			enumerable: !0,
			get: function () {
				return (
					this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot),
					this.__originalMappings
				)
			},
		}),
		(s.prototype._charIsMappingSeparator = u(function (D, x) {
			var E = D.charAt(x)
			return E === ';' || E === ','
		}, 'SourceMapConsumer_charIsMappingSeparator')),
		(s.prototype._parseMappings = u(function (D, x) {
			throw new Error('Subclasses must implement _parseMappings')
		}, 'SourceMapConsumer_parseMappings')),
		(s.GENERATED_ORDER = 1),
		(s.ORIGINAL_ORDER = 2),
		(s.GREATEST_LOWER_BOUND = 1),
		(s.LEAST_UPPER_BOUND = 2),
		(s.prototype.eachMapping = u(function (D, x, E) {
			var v = x || null,
				b = E || s.GENERATED_ORDER,
				C
			switch (b) {
				case s.GENERATED_ORDER:
					C = this._generatedMappings
					break
				case s.ORIGINAL_ORDER:
					C = this._originalMappings
					break
				default:
					throw new Error('Unknown order of iteration.')
			}
			var B = this.sourceRoot
			C.map(function (U) {
				var j = U.source === null ? null : this._sources.at(U.source)
				return (
					(j = e.computeSourceURL(B, j, this._sourceMapURL)),
					{
						source: j,
						generatedLine: U.generatedLine,
						generatedColumn: U.generatedColumn,
						originalLine: U.originalLine,
						originalColumn: U.originalColumn,
						name: U.name === null ? null : this._names.at(U.name),
					}
				)
			}, this).forEach(D, v)
		}, 'SourceMapConsumer_eachMapping')),
		(s.prototype.allGeneratedPositionsFor = u(function (D) {
			var x = e.getArg(D, 'line'),
				E = {
					source: e.getArg(D, 'source'),
					originalLine: x,
					originalColumn: e.getArg(D, 'column', 0),
				}
			if (((E.source = this._findSourceIndex(E.source)), E.source < 0)) return []
			var v = [],
				b = this._findMapping(
					E,
					this._originalMappings,
					'originalLine',
					'originalColumn',
					e.compareByOriginalPositions,
					t.LEAST_UPPER_BOUND,
				)
			if (b >= 0) {
				var C = this._originalMappings[b]
				if (D.column === void 0)
					for (var B = C.originalLine; C && C.originalLine === B; )
						v.push({
							line: e.getArg(C, 'generatedLine', null),
							column: e.getArg(C, 'generatedColumn', null),
							lastColumn: e.getArg(C, 'lastGeneratedColumn', null),
						}),
							(C = this._originalMappings[++b])
				else
					for (var U = C.originalColumn; C && C.originalLine === x && C.originalColumn == U; )
						v.push({
							line: e.getArg(C, 'generatedLine', null),
							column: e.getArg(C, 'generatedColumn', null),
							lastColumn: e.getArg(C, 'lastGeneratedColumn', null),
						}),
							(C = this._originalMappings[++b])
			}
			return v
		}, 'SourceMapConsumer_allGeneratedPositionsFor')),
		(Ft.SourceMapConsumer = s)
	function o(g, D) {
		var x = g
		typeof g == 'string' && (x = e.parseSourceMapInput(g))
		var E = e.getArg(x, 'version'),
			v = e.getArg(x, 'sources'),
			b = e.getArg(x, 'names', []),
			C = e.getArg(x, 'sourceRoot', null),
			B = e.getArg(x, 'sourcesContent', null),
			U = e.getArg(x, 'mappings'),
			j = e.getArg(x, 'file', null)
		if (E != this._version) throw new Error('Unsupported version: ' + E)
		C && (C = e.normalize(C)),
			(v = v
				.map(String)
				.map(e.normalize)
				.map(function (Q) {
					return C && e.isAbsolute(C) && e.isAbsolute(Q) ? e.relative(C, Q) : Q
				})),
			(this._names = r.fromArray(b.map(String), !0)),
			(this._sources = r.fromArray(v, !0)),
			(this._absoluteSources = this._sources.toArray().map(function (Q) {
				return e.computeSourceURL(C, Q, D)
			})),
			(this.sourceRoot = C),
			(this.sourcesContent = B),
			(this._mappings = U),
			(this._sourceMapURL = D),
			(this.file = j)
	}
	u(o, 'BasicSourceMapConsumer'),
		(o.prototype = Object.create(s.prototype)),
		(o.prototype.consumer = s),
		(o.prototype._findSourceIndex = function (g) {
			var D = g
			if ((this.sourceRoot != null && (D = e.relative(this.sourceRoot, D)), this._sources.has(D)))
				return this._sources.indexOf(D)
			var x
			for (x = 0; x < this._absoluteSources.length; ++x) if (this._absoluteSources[x] == g) return x
			return -1
		}),
		(o.fromSourceMap = u(function (D, x) {
			var E = Object.create(o.prototype),
				v = (E._names = r.fromArray(D._names.toArray(), !0)),
				b = (E._sources = r.fromArray(D._sources.toArray(), !0))
			;(E.sourceRoot = D._sourceRoot),
				(E.sourcesContent = D._generateSourcesContent(E._sources.toArray(), E.sourceRoot)),
				(E.file = D._file),
				(E._sourceMapURL = x),
				(E._absoluteSources = E._sources.toArray().map(function (y) {
					return e.computeSourceURL(E.sourceRoot, y, x)
				}))
			for (
				var C = D._mappings.toArray().slice(),
					B = (E.__generatedMappings = []),
					U = (E.__originalMappings = []),
					j = 0,
					Q = C.length;
				j < Q;
				j++
			) {
				var w = C[j],
					m = new c()
				;(m.generatedLine = w.generatedLine),
					(m.generatedColumn = w.generatedColumn),
					w.source &&
						((m.source = b.indexOf(w.source)),
						(m.originalLine = w.originalLine),
						(m.originalColumn = w.originalColumn),
						w.name && (m.name = v.indexOf(w.name)),
						U.push(m)),
					B.push(m)
			}
			return i(E.__originalMappings, e.compareByOriginalPositions), E
		}, 'SourceMapConsumer_fromSourceMap')),
		(o.prototype._version = 3),
		Object.defineProperty(o.prototype, 'sources', {
			get: function () {
				return this._absoluteSources.slice()
			},
		})
	function c() {
		;(this.generatedLine = 0),
			(this.generatedColumn = 0),
			(this.source = null),
			(this.originalLine = null),
			(this.originalColumn = null),
			(this.name = null)
	}
	u(c, 'Mapping'),
		(o.prototype._parseMappings = u(function (D, x) {
			for (
				var E = 1,
					v = 0,
					b = 0,
					C = 0,
					B = 0,
					U = 0,
					j = D.length,
					Q = 0,
					w = {},
					m = {},
					y = [],
					_ = [],
					F,
					z,
					W,
					M,
					Y;
				Q < j;

			)
				if (D.charAt(Q) === ';') E++, Q++, (v = 0)
				else if (D.charAt(Q) === ',') Q++
				else {
					for (
						F = new c(), F.generatedLine = E, M = Q;
						M < j && !this._charIsMappingSeparator(D, M);
						M++
					);
					if (((z = D.slice(Q, M)), (W = w[z]), W)) Q += z.length
					else {
						for (W = []; Q < M; ) n.decode(D, Q, m), (Y = m.value), (Q = m.rest), W.push(Y)
						if (W.length === 2) throw new Error('Found a source, but no line and column')
						if (W.length === 3) throw new Error('Found a source and line, but no column')
						w[z] = W
					}
					;(F.generatedColumn = v + W[0]),
						(v = F.generatedColumn),
						W.length > 1 &&
							((F.source = B + W[1]),
							(B += W[1]),
							(F.originalLine = b + W[2]),
							(b = F.originalLine),
							(F.originalLine += 1),
							(F.originalColumn = C + W[3]),
							(C = F.originalColumn),
							W.length > 4 && ((F.name = U + W[4]), (U += W[4]))),
						_.push(F),
						typeof F.originalLine == 'number' && y.push(F)
				}
			i(_, e.compareByGeneratedPositionsDeflated),
				(this.__generatedMappings = _),
				i(y, e.compareByOriginalPositions),
				(this.__originalMappings = y)
		}, 'SourceMapConsumer_parseMappings')),
		(o.prototype._findMapping = u(function (D, x, E, v, b, C) {
			if (D[E] <= 0) throw new TypeError('Line must be greater than or equal to 1, got ' + D[E])
			if (D[v] < 0) throw new TypeError('Column must be greater than or equal to 0, got ' + D[v])
			return t.search(D, x, b, C)
		}, 'SourceMapConsumer_findMapping')),
		(o.prototype.computeColumnSpans = u(function () {
			for (var D = 0; D < this._generatedMappings.length; ++D) {
				var x = this._generatedMappings[D]
				if (D + 1 < this._generatedMappings.length) {
					var E = this._generatedMappings[D + 1]
					if (x.generatedLine === E.generatedLine) {
						x.lastGeneratedColumn = E.generatedColumn - 1
						continue
					}
				}
				x.lastGeneratedColumn = 1 / 0
			}
		}, 'SourceMapConsumer_computeColumnSpans')),
		(o.prototype.originalPositionFor = u(function (D) {
			var x = { generatedLine: e.getArg(D, 'line'), generatedColumn: e.getArg(D, 'column') },
				E = this._findMapping(
					x,
					this._generatedMappings,
					'generatedLine',
					'generatedColumn',
					e.compareByGeneratedPositionsDeflated,
					e.getArg(D, 'bias', s.GREATEST_LOWER_BOUND),
				)
			if (E >= 0) {
				var v = this._generatedMappings[E]
				if (v.generatedLine === x.generatedLine) {
					var b = e.getArg(v, 'source', null)
					b !== null &&
						((b = this._sources.at(b)),
						(b = e.computeSourceURL(this.sourceRoot, b, this._sourceMapURL)))
					var C = e.getArg(v, 'name', null)
					return (
						C !== null && (C = this._names.at(C)),
						{
							source: b,
							line: e.getArg(v, 'originalLine', null),
							column: e.getArg(v, 'originalColumn', null),
							name: C,
						}
					)
				}
			}
			return { source: null, line: null, column: null, name: null }
		}, 'SourceMapConsumer_originalPositionFor')),
		(o.prototype.hasContentsOfAllSources = u(function () {
			return this.sourcesContent
				? this.sourcesContent.length >= this._sources.size() &&
						!this.sourcesContent.some(function (D) {
							return D == null
						})
				: !1
		}, 'BasicSourceMapConsumer_hasContentsOfAllSources')),
		(o.prototype.sourceContentFor = u(function (D, x) {
			if (!this.sourcesContent) return null
			var E = this._findSourceIndex(D)
			if (E >= 0) return this.sourcesContent[E]
			var v = D
			this.sourceRoot != null && (v = e.relative(this.sourceRoot, v))
			var b
			if (this.sourceRoot != null && (b = e.urlParse(this.sourceRoot))) {
				var C = v.replace(/^file:\/\//, '')
				if (b.scheme == 'file' && this._sources.has(C))
					return this.sourcesContent[this._sources.indexOf(C)]
				if ((!b.path || b.path == '/') && this._sources.has('/' + v))
					return this.sourcesContent[this._sources.indexOf('/' + v)]
			}
			if (x) return null
			throw new Error('"' + v + '" is not in the SourceMap.')
		}, 'SourceMapConsumer_sourceContentFor')),
		(o.prototype.generatedPositionFor = u(function (D) {
			var x = e.getArg(D, 'source')
			if (((x = this._findSourceIndex(x)), x < 0))
				return { line: null, column: null, lastColumn: null }
			var E = {
					source: x,
					originalLine: e.getArg(D, 'line'),
					originalColumn: e.getArg(D, 'column'),
				},
				v = this._findMapping(
					E,
					this._originalMappings,
					'originalLine',
					'originalColumn',
					e.compareByOriginalPositions,
					e.getArg(D, 'bias', s.GREATEST_LOWER_BOUND),
				)
			if (v >= 0) {
				var b = this._originalMappings[v]
				if (b.source === E.source)
					return {
						line: e.getArg(b, 'generatedLine', null),
						column: e.getArg(b, 'generatedColumn', null),
						lastColumn: e.getArg(b, 'lastGeneratedColumn', null),
					}
			}
			return { line: null, column: null, lastColumn: null }
		}, 'SourceMapConsumer_generatedPositionFor')),
		(Ft.BasicSourceMapConsumer = o)
	function h(g, D) {
		var x = g
		typeof g == 'string' && (x = e.parseSourceMapInput(g))
		var E = e.getArg(x, 'version'),
			v = e.getArg(x, 'sections')
		if (E != this._version) throw new Error('Unsupported version: ' + E)
		;(this._sources = new r()), (this._names = new r())
		var b = { line: -1, column: 0 }
		this._sections = v.map(function (C) {
			if (C.url) throw new Error('Support for url field in sections not implemented.')
			var B = e.getArg(C, 'offset'),
				U = e.getArg(B, 'line'),
				j = e.getArg(B, 'column')
			if (U < b.line || (U === b.line && j < b.column))
				throw new Error('Section offsets must be ordered and non-overlapping.')
			return (
				(b = B),
				{
					generatedOffset: { generatedLine: U + 1, generatedColumn: j + 1 },
					consumer: new s(e.getArg(C, 'map'), D),
				}
			)
		})
	}
	return (
		u(h, 'IndexedSourceMapConsumer'),
		(h.prototype = Object.create(s.prototype)),
		(h.prototype.constructor = s),
		(h.prototype._version = 3),
		Object.defineProperty(h.prototype, 'sources', {
			get: function () {
				for (var g = [], D = 0; D < this._sections.length; D++)
					for (var x = 0; x < this._sections[D].consumer.sources.length; x++)
						g.push(this._sections[D].consumer.sources[x])
				return g
			},
		}),
		(h.prototype.originalPositionFor = u(function (D) {
			var x = { generatedLine: e.getArg(D, 'line'), generatedColumn: e.getArg(D, 'column') },
				E = t.search(x, this._sections, function (b, C) {
					var B = b.generatedLine - C.generatedOffset.generatedLine
					return B || b.generatedColumn - C.generatedOffset.generatedColumn
				}),
				v = this._sections[E]
			return v
				? v.consumer.originalPositionFor({
						line: x.generatedLine - (v.generatedOffset.generatedLine - 1),
						column:
							x.generatedColumn -
							(v.generatedOffset.generatedLine === x.generatedLine
								? v.generatedOffset.generatedColumn - 1
								: 0),
						bias: D.bias,
				  })
				: { source: null, line: null, column: null, name: null }
		}, 'IndexedSourceMapConsumer_originalPositionFor')),
		(h.prototype.hasContentsOfAllSources = u(function () {
			return this._sections.every(function (D) {
				return D.consumer.hasContentsOfAllSources()
			})
		}, 'IndexedSourceMapConsumer_hasContentsOfAllSources')),
		(h.prototype.sourceContentFor = u(function (D, x) {
			for (var E = 0; E < this._sections.length; E++) {
				var v = this._sections[E],
					b = v.consumer.sourceContentFor(D, !0)
				if (b) return b
			}
			if (x) return null
			throw new Error('"' + D + '" is not in the SourceMap.')
		}, 'IndexedSourceMapConsumer_sourceContentFor')),
		(h.prototype.generatedPositionFor = u(function (D) {
			for (var x = 0; x < this._sections.length; x++) {
				var E = this._sections[x]
				if (E.consumer._findSourceIndex(e.getArg(D, 'source')) !== -1) {
					var v = E.consumer.generatedPositionFor(D)
					if (v) {
						var b = {
							line: v.line + (E.generatedOffset.generatedLine - 1),
							column:
								v.column +
								(E.generatedOffset.generatedLine === v.line
									? E.generatedOffset.generatedColumn - 1
									: 0),
						}
						return b
					}
				}
			}
			return { line: null, column: null }
		}, 'IndexedSourceMapConsumer_generatedPositionFor')),
		(h.prototype._parseMappings = u(function (D, x) {
			;(this.__generatedMappings = []), (this.__originalMappings = [])
			for (var E = 0; E < this._sections.length; E++)
				for (
					var v = this._sections[E], b = v.consumer._generatedMappings, C = 0;
					C < b.length;
					C++
				) {
					var B = b[C],
						U = v.consumer._sources.at(B.source)
					;(U = e.computeSourceURL(v.consumer.sourceRoot, U, this._sourceMapURL)),
						this._sources.add(U),
						(U = this._sources.indexOf(U))
					var j = null
					B.name &&
						((j = v.consumer._names.at(B.name)), this._names.add(j), (j = this._names.indexOf(j)))
					var Q = {
						source: U,
						generatedLine: B.generatedLine + (v.generatedOffset.generatedLine - 1),
						generatedColumn:
							B.generatedColumn +
							(v.generatedOffset.generatedLine === B.generatedLine
								? v.generatedOffset.generatedColumn - 1
								: 0),
						originalLine: B.originalLine,
						originalColumn: B.originalColumn,
						name: j,
					}
					this.__generatedMappings.push(Q),
						typeof Q.originalLine == 'number' && this.__originalMappings.push(Q)
				}
			i(this.__generatedMappings, e.compareByGeneratedPositionsDeflated),
				i(this.__originalMappings, e.compareByOriginalPositions)
		}, 'IndexedSourceMapConsumer_parseMappings')),
		(Ft.IndexedSourceMapConsumer = h),
		Ft
	)
}
u(ms, 'requireSourceMapConsumer')
var fr = {},
	Cn
function gs() {
	if (Cn) return fr
	Cn = 1
	var e = mi().SourceMapGenerator,
		t = kt(),
		r = /(\r?\n)/,
		n = 10,
		i = '$$$isSourceNode$$$'
	function s(o, c, h, g, D) {
		;(this.children = []),
			(this.sourceContents = {}),
			(this.line = o == null ? null : o),
			(this.column = c == null ? null : c),
			(this.source = h == null ? null : h),
			(this.name = D == null ? null : D),
			(this[i] = !0),
			g != null && this.add(g)
	}
	return (
		u(s, 'SourceNode'),
		(s.fromStringWithSourceMap = u(function (c, h, g) {
			var D = new s(),
				x = c.split(r),
				E = 0,
				v = u(function () {
					var j = w(),
						Q = w() || ''
					return j + Q
					function w() {
						return E < x.length ? x[E++] : void 0
					}
				}, 'shiftNextLine'),
				b = 1,
				C = 0,
				B = null
			return (
				h.eachMapping(function (j) {
					if (B !== null)
						if (b < j.generatedLine) U(B, v()), b++, (C = 0)
						else {
							var Q = x[E] || '',
								w = Q.substr(0, j.generatedColumn - C)
							;(x[E] = Q.substr(j.generatedColumn - C)), (C = j.generatedColumn), U(B, w), (B = j)
							return
						}
					for (; b < j.generatedLine; ) D.add(v()), b++
					if (C < j.generatedColumn) {
						var Q = x[E] || ''
						D.add(Q.substr(0, j.generatedColumn)),
							(x[E] = Q.substr(j.generatedColumn)),
							(C = j.generatedColumn)
					}
					B = j
				}, this),
				E < x.length && (B && U(B, v()), D.add(x.splice(E).join(''))),
				h.sources.forEach(function (j) {
					var Q = h.sourceContentFor(j)
					Q != null && (g != null && (j = t.join(g, j)), D.setSourceContent(j, Q))
				}),
				D
			)
			function U(j, Q) {
				if (j === null || j.source === void 0) D.add(Q)
				else {
					var w = g ? t.join(g, j.source) : j.source
					D.add(new s(j.originalLine, j.originalColumn, w, Q, j.name))
				}
			}
			u(U, 'addMappingWithCode')
		}, 'SourceNode_fromStringWithSourceMap')),
		(s.prototype.add = u(function (c) {
			if (Array.isArray(c))
				c.forEach(function (h) {
					this.add(h)
				}, this)
			else if (c[i] || typeof c == 'string') c && this.children.push(c)
			else
				throw new TypeError(
					'Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + c,
				)
			return this
		}, 'SourceNode_add')),
		(s.prototype.prepend = u(function (c) {
			if (Array.isArray(c)) for (var h = c.length - 1; h >= 0; h--) this.prepend(c[h])
			else if (c[i] || typeof c == 'string') this.children.unshift(c)
			else
				throw new TypeError(
					'Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' + c,
				)
			return this
		}, 'SourceNode_prepend')),
		(s.prototype.walk = u(function (c) {
			for (var h, g = 0, D = this.children.length; g < D; g++)
				(h = this.children[g]),
					h[i]
						? h.walk(c)
						: h !== '' &&
						  c(h, { source: this.source, line: this.line, column: this.column, name: this.name })
		}, 'SourceNode_walk')),
		(s.prototype.join = u(function (c) {
			var h,
				g,
				D = this.children.length
			if (D > 0) {
				for (h = [], g = 0; g < D - 1; g++) h.push(this.children[g]), h.push(c)
				h.push(this.children[g]), (this.children = h)
			}
			return this
		}, 'SourceNode_join')),
		(s.prototype.replaceRight = u(function (c, h) {
			var g = this.children[this.children.length - 1]
			return (
				g[i]
					? g.replaceRight(c, h)
					: typeof g == 'string'
					  ? (this.children[this.children.length - 1] = g.replace(c, h))
					  : this.children.push(''.replace(c, h)),
				this
			)
		}, 'SourceNode_replaceRight')),
		(s.prototype.setSourceContent = u(function (c, h) {
			this.sourceContents[t.toSetString(c)] = h
		}, 'SourceNode_setSourceContent')),
		(s.prototype.walkSourceContents = u(function (c) {
			for (var h = 0, g = this.children.length; h < g; h++)
				this.children[h][i] && this.children[h].walkSourceContents(c)
			for (var D = Object.keys(this.sourceContents), h = 0, g = D.length; h < g; h++)
				c(t.fromSetString(D[h]), this.sourceContents[D[h]])
		}, 'SourceNode_walkSourceContents')),
		(s.prototype.toString = u(function () {
			var c = ''
			return (
				this.walk(function (h) {
					c += h
				}),
				c
			)
		}, 'SourceNode_toString')),
		(s.prototype.toStringWithSourceMap = u(function (c) {
			var h = { code: '', line: 1, column: 0 },
				g = new e(c),
				D = !1,
				x = null,
				E = null,
				v = null,
				b = null
			return (
				this.walk(function (C, B) {
					;(h.code += C),
						B.source !== null && B.line !== null && B.column !== null
							? ((x !== B.source || E !== B.line || v !== B.column || b !== B.name) &&
									g.addMapping({
										source: B.source,
										original: { line: B.line, column: B.column },
										generated: { line: h.line, column: h.column },
										name: B.name,
									}),
							  (x = B.source),
							  (E = B.line),
							  (v = B.column),
							  (b = B.name),
							  (D = !0))
							: D &&
							  (g.addMapping({ generated: { line: h.line, column: h.column } }),
							  (x = null),
							  (D = !1))
					for (var U = 0, j = C.length; U < j; U++)
						C.charCodeAt(U) === n
							? (h.line++,
							  (h.column = 0),
							  U + 1 === j
									? ((x = null), (D = !1))
									: D &&
									  g.addMapping({
											source: B.source,
											original: { line: B.line, column: B.column },
											generated: { line: h.line, column: h.column },
											name: B.name,
									  }))
							: h.column++
				}),
				this.walkSourceContents(function (C, B) {
					g.setSourceContent(C, B)
				}),
				{ code: h.code, map: g }
			)
		}, 'SourceNode_toStringWithSourceMap')),
		(fr.SourceNode = s),
		fr
	)
}
u(gs, 'requireSourceNode')
var vn
function As() {
	return (
		vn ||
			((vn = 1),
			(xt.SourceMapGenerator = mi().SourceMapGenerator),
			(xt.SourceMapConsumer = ms().SourceMapConsumer),
			(xt.SourceNode = gs().SourceNode)),
		xt
	)
}
u(As, 'requireSourceMap')
const Ds = 'escodegen',
	Es = 'ECMAScript code generator',
	ys = 'http://github.com/estools/escodegen',
	Cs = 'escodegen.js',
	vs = { esgenerate: './bin/esgenerate.js', escodegen: './bin/escodegen.js' },
	xs = ['LICENSE.BSD', 'README.md', 'bin', 'escodegen.js', 'package.json'],
	Fs = '2.0.0',
	bs = { node: '>=6.0' },
	Ss = [
		{
			name: 'Yusuke Suzuki',
			email: 'utatane.tea@gmail.com',
			web: 'http://github.com/Constellation',
		},
	],
	_s = { type: 'git', url: 'http://github.com/estools/escodegen.git' },
	Bs = { estraverse: '^5.2.0', esutils: '^2.0.2', esprima: '^4.0.1', optionator: '^0.8.1' },
	ws = { 'source-map': '~0.6.1' },
	Ts = {
		acorn: '^7.3.1',
		bluebird: '^3.4.7',
		'bower-registry-client': '^1.0.0',
		chai: '^4.2.0',
		'chai-exclude': '^2.0.2',
		'commonjs-everywhere': '^0.9.7',
		gulp: '^3.8.10',
		'gulp-eslint': '^3.0.1',
		'gulp-mocha': '^3.0.1',
		semver: '^5.1.0',
	},
	ks = 'BSD-2-Clause',
	Ns = {
		test: 'gulp travis',
		'unit-test': 'gulp test',
		lint: 'gulp lint',
		release: 'node tools/release.js',
		'build-min':
			'./node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js',
		build: './node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js',
	},
	Os = {
		name: Ds,
		description: Es,
		homepage: ys,
		main: Cs,
		bin: vs,
		files: xs,
		version: Fs,
		engines: bs,
		maintainers: Ss,
		repository: _s,
		dependencies: Bs,
		optionalDependencies: ws,
		devDependencies: Ts,
		license: ks,
		scripts: Ns,
	}
;(function (e) {
	;(function () {
		var t, r, n, i, s, o, c, h, g, D, x, E, v, b, C, B, U, j, Q, w, m, y, _, F, z, W
		;(s = pi), (o = ft), (t = s.Syntax)
		function M(a) {
			return Se.Expression.hasOwnProperty(a.type)
		}
		u(M, 'isExpression')
		function Y(a) {
			return Se.Statement.hasOwnProperty(a.type)
		}
		u(Y, 'isStatement'),
			(r = {
				Sequence: 0,
				Yield: 1,
				Assignment: 1,
				Conditional: 2,
				ArrowFunction: 2,
				LogicalOR: 3,
				LogicalAND: 4,
				BitwiseOR: 5,
				BitwiseXOR: 6,
				BitwiseAND: 7,
				Equality: 8,
				Relational: 9,
				BitwiseSHIFT: 10,
				Additive: 11,
				Multiplicative: 12,
				Exponentiation: 13,
				Await: 14,
				Unary: 14,
				Postfix: 15,
				OptionalChaining: 16,
				Call: 17,
				New: 18,
				TaggedTemplate: 19,
				Member: 20,
				Primary: 21,
			}),
			(n = {
				'||': r.LogicalOR,
				'&&': r.LogicalAND,
				'|': r.BitwiseOR,
				'^': r.BitwiseXOR,
				'&': r.BitwiseAND,
				'==': r.Equality,
				'!=': r.Equality,
				'===': r.Equality,
				'!==': r.Equality,
				is: r.Equality,
				isnt: r.Equality,
				'<': r.Relational,
				'>': r.Relational,
				'<=': r.Relational,
				'>=': r.Relational,
				in: r.Relational,
				instanceof: r.Relational,
				'<<': r.BitwiseSHIFT,
				'>>': r.BitwiseSHIFT,
				'>>>': r.BitwiseSHIFT,
				'+': r.Additive,
				'-': r.Additive,
				'*': r.Multiplicative,
				'%': r.Multiplicative,
				'/': r.Multiplicative,
				'**': r.Exponentiation,
			})
		var J = 1,
			ue = 1 << 1,
			Ce = 1 << 2,
			re = 1 << 3,
			k = 1 << 4,
			P = 1 << 5,
			q = ue | Ce,
			ie = J | ue,
			V = J | ue | Ce,
			ce = J,
			le = Ce,
			te = J | Ce,
			H = J,
			S = J | P,
			T = 0,
			X = J | k,
			O = J | re
		function N() {
			return {
				indent: null,
				base: null,
				parse: null,
				comment: !1,
				format: {
					indent: { style: '    ', base: 0, adjustMultilineComment: !1 },
					newline: `
`,
					space: ' ',
					json: !1,
					renumber: !1,
					hexadecimal: !1,
					quotes: 'single',
					escapeless: !1,
					compact: !1,
					parentheses: !0,
					semicolons: !0,
					safeConcatenation: !1,
					preserveBlankLines: !1,
				},
				moz: { comprehensionExpressionStartsWithAssignment: !1, starlessGenerator: !1 },
				sourceMap: null,
				sourceMapRoot: null,
				sourceMapWithCode: !1,
				directive: !1,
				raw: !0,
				verbatim: null,
				sourceCode: null,
			}
		}
		u(N, 'getDefaultOptions')
		function $(a, f) {
			var l = ''
			for (f |= 0; f > 0; f >>>= 1, a += a) f & 1 && (l += a)
			return l
		}
		u($, 'stringRepeat')
		function Z(a) {
			return /[\r\n]/g.test(a)
		}
		u(Z, 'hasLineTerminator')
		function fe(a) {
			var f = a.length
			return f && o.code.isLineTerminator(a.charCodeAt(f - 1))
		}
		u(fe, 'endsWithLineTerminator')
		function De(a, f) {
			var l
			for (l in f) f.hasOwnProperty(l) && (a[l] = f[l])
			return a
		}
		u(De, 'merge')
		function xe(a, f) {
			var l, p
			function A(I) {
				return typeof I == 'object' && I instanceof Object && !(I instanceof RegExp)
			}
			u(A, 'isHashObject')
			for (l in f)
				f.hasOwnProperty(l) &&
					((p = f[l]), A(p) ? (A(a[l]) ? xe(a[l], p) : (a[l] = xe({}, p))) : (a[l] = p))
			return a
		}
		u(xe, 'updateDeeply')
		function We(a) {
			var f, l, p, A, I
			if (a !== a) throw new Error('Numeric literal whose value is NaN')
			if (a < 0 || (a === 0 && 1 / a < 0))
				throw new Error('Numeric literal whose value is negative')
			if (a === 1 / 0) return g ? 'null' : D ? '1e400' : '1e+400'
			if (((f = '' + a), !D || f.length < 3)) return f
			for (
				l = f.indexOf('.'),
					!g && f.charCodeAt(0) === 48 && l === 1 && ((l = 0), (f = f.slice(1))),
					p = f,
					f = f.replace('e+', 'e'),
					A = 0,
					(I = p.indexOf('e')) > 0 && ((A = +p.slice(I + 1)), (p = p.slice(0, I))),
					l >= 0 && ((A -= p.length - l - 1), (p = +(p.slice(0, l) + p.slice(l + 1)) + '')),
					I = 0;
				p.charCodeAt(p.length + I - 1) === 48;

			)
				--I
			return (
				I !== 0 && ((A -= I), (p = p.slice(0, I))),
				A !== 0 && (p += 'e' + A),
				(p.length < f.length ||
					(x &&
						a > 1e12 &&
						Math.floor(a) === a &&
						(p = '0x' + a.toString(16)).length < f.length)) &&
					+p === a &&
					(f = p),
				f
			)
		}
		u(We, 'generateNumber')
		function Jr(a, f) {
			return (a & -2) === 8232
				? (f ? 'u' : '\\u') + (a === 8232 ? '2028' : '2029')
				: a === 10 || a === 13
				  ? (f ? '' : '\\') + (a === 10 ? 'n' : 'r')
				  : String.fromCharCode(a)
		}
		u(Jr, 'escapeRegExpCharacter')
		function pu(a) {
			var f, l, p, A, I, R, L, K
			if (((l = a.toString()), a.source)) {
				if (((f = l.match(/\/([^/]*)$/)), !f)) return l
				for (p = f[1], l = '', L = !1, K = !1, A = 0, I = a.source.length; A < I; ++A)
					(R = a.source.charCodeAt(A)),
						K
							? ((l += Jr(R, K)), (K = !1))
							: (L ? R === 93 && (L = !1) : R === 47 ? (l += '\\') : R === 91 && (L = !0),
							  (l += Jr(R, K)),
							  (K = R === 92))
				return '/' + l + '/' + p
			}
			return l
		}
		u(pu, 'generateRegExp')
		function hu(a, f) {
			var l
			return a === 8
				? '\\b'
				: a === 12
				  ? '\\f'
				  : a === 9
				    ? '\\t'
				    : ((l = a.toString(16).toUpperCase()),
				      g || a > 255
								? '\\u' + '0000'.slice(l.length) + l
								: a === 0 && !o.code.isDecimalDigit(f)
								  ? '\\0'
								  : a === 11
								    ? '\\x0B'
								    : '\\x' + '00'.slice(l.length) + l)
		}
		u(hu, 'escapeAllowedCharacter')
		function du(a) {
			if (a === 92) return '\\\\'
			if (a === 10) return '\\n'
			if (a === 13) return '\\r'
			if (a === 8232) return '\\u2028'
			if (a === 8233) return '\\u2029'
			throw new Error('Incorrectly classified character')
		}
		u(du, 'escapeDisallowedCharacter')
		function mu(a) {
			var f, l, p, A
			for (A = E === 'double' ? '"' : "'", f = 0, l = a.length; f < l; ++f)
				if (((p = a.charCodeAt(f)), p === 39)) {
					A = '"'
					break
				} else if (p === 34) {
					A = "'"
					break
				} else p === 92 && ++f
			return A + a + A
		}
		u(mu, 'escapeDirective')
		function gu(a) {
			var f = '',
				l,
				p,
				A,
				I = 0,
				R = 0,
				L,
				K
			for (l = 0, p = a.length; l < p; ++l) {
				if (((A = a.charCodeAt(l)), A === 39)) ++I
				else if (A === 34) ++R
				else if (A === 47 && g) f += '\\'
				else if (o.code.isLineTerminator(A) || A === 92) {
					f += du(A)
					continue
				} else if (
					!o.code.isIdentifierPartES5(A) &&
					((g && A < 32) || (!g && !v && (A < 32 || A > 126)))
				) {
					f += hu(A, a.charCodeAt(l + 1))
					continue
				}
				f += String.fromCharCode(A)
			}
			if (((L = !(E === 'double' || (E === 'auto' && R < I))), (K = L ? "'" : '"'), !(L ? I : R)))
				return K + f + K
			for (a = f, f = K, l = 0, p = a.length; l < p; ++l)
				(A = a.charCodeAt(l)),
					((A === 39 && L) || (A === 34 && !L)) && (f += '\\'),
					(f += String.fromCharCode(A))
			return f + K
		}
		u(gu, 'escapeString')
		function Hr(a) {
			var f,
				l,
				p,
				A = ''
			for (f = 0, l = a.length; f < l; ++f) (p = a[f]), (A += Array.isArray(p) ? Hr(p) : p)
			return A
		}
		u(Hr, 'flattenToString')
		function Ee(a, f) {
			if (!y) return Array.isArray(a) ? Hr(a) : a
			if (f == null) {
				if (a instanceof i) return a
				f = {}
			}
			return f.loc == null
				? new i(null, null, y, a, f.name || null)
				: new i(
						f.loc.start.line,
						f.loc.start.column,
						y === !0 ? f.loc.source || null : y,
						a,
						f.name || null,
				  )
		}
		u(Ee, 'toSourceNodeWhenNeeded')
		function we() {
			return C || ' '
		}
		u(we, 'noEmptySpace')
		function ne(a, f) {
			var l, p, A, I
			return (
				(l = Ee(a).toString()),
				l.length === 0
					? [f]
					: ((p = Ee(f).toString()),
					  p.length === 0
							? [a]
							: ((A = l.charCodeAt(l.length - 1)),
							  (I = p.charCodeAt(0)),
							  ((A === 43 || A === 45) && A === I) ||
							  (o.code.isIdentifierPartES5(A) && o.code.isIdentifierPartES5(I)) ||
							  (A === 47 && I === 105)
									? [a, we(), f]
									: o.code.isWhiteSpace(A) ||
									    o.code.isLineTerminator(A) ||
									    o.code.isWhiteSpace(I) ||
									    o.code.isLineTerminator(I)
									  ? [a, f]
									  : [a, C, f]))
			)
		}
		u(ne, 'join')
		function Te(a) {
			return [c, a]
		}
		u(Te, 'addIndent')
		function be(a) {
			var f
			;(f = c), (c += h), a(c), (c = f)
		}
		u(be, 'withIndent')
		function Au(a) {
			var f
			for (f = a.length - 1; f >= 0 && !o.code.isLineTerminator(a.charCodeAt(f)); --f);
			return a.length - 1 - f
		}
		u(Au, 'calculateSpaces')
		function Du(a, f) {
			var l, p, A, I, R, L, K, he
			for (l = a.split(/\r\n|[\r\n]/), L = Number.MAX_VALUE, p = 1, A = l.length; p < A; ++p) {
				for (I = l[p], R = 0; R < I.length && o.code.isWhiteSpace(I.charCodeAt(R)); ) ++R
				L > R && (L = R)
			}
			for (
				typeof f < 'u'
					? ((K = c), l[1][L] === '*' && (f += ' '), (c = f))
					: (L & 1 && --L, (K = c)),
					p = 1,
					A = l.length;
				p < A;
				++p
			)
				(he = Ee(Te(l[p].slice(L)))), (l[p] = y ? he.join('') : he)
			return (
				(c = K),
				l.join(`
`)
			)
		}
		u(Du, 'adjustMultilineComment')
		function Je(a, f) {
			if (a.type === 'Line') {
				if (fe(a.value)) return '//' + a.value
				var l = '//' + a.value
				return (
					F ||
						(l += `
`),
					l
				)
			}
			return w.format.indent.adjustMultilineComment && /[\n\r]/.test(a.value)
				? Du('/*' + a.value + '*/', f)
				: '/*' + a.value + '*/'
		}
		u(Je, 'generateComment')
		function Qr(a, f) {
			var l, p, A, I, R, L, K, he, Be, rt, ot, Yr, Zr, Ge
			if (a.leadingComments && a.leadingComments.length > 0) {
				if (((I = f), F)) {
					for (
						A = a.leadingComments[0],
							f = [],
							he = A.extendedRange,
							Be = A.range,
							ot = _.substring(he[0], Be[0]),
							Ge = (ot.match(/\n/g) || []).length,
							Ge > 0
								? (f.push(
										$(
											`
`,
											Ge,
										),
								  ),
								  f.push(Te(Je(A))))
								: (f.push(ot), f.push(Je(A))),
							rt = Be,
							l = 1,
							p = a.leadingComments.length;
						l < p;
						l++
					)
						(A = a.leadingComments[l]),
							(Be = A.range),
							(Yr = _.substring(rt[1], Be[0])),
							(Ge = (Yr.match(/\n/g) || []).length),
							f.push(
								$(
									`
`,
									Ge,
								),
							),
							f.push(Te(Je(A))),
							(rt = Be)
					;(Zr = _.substring(Be[1], he[1])),
						(Ge = (Zr.match(/\n/g) || []).length),
						f.push(
							$(
								`
`,
								Ge,
							),
						)
				} else
					for (
						A = a.leadingComments[0],
							f = [],
							j &&
								a.type === t.Program &&
								a.body.length === 0 &&
								f.push(`
`),
							f.push(Je(A)),
							fe(Ee(f).toString()) ||
								f.push(`
`),
							l = 1,
							p = a.leadingComments.length;
						l < p;
						++l
					)
						(A = a.leadingComments[l]),
							(K = [Je(A)]),
							fe(Ee(K).toString()) ||
								K.push(`
`),
							f.push(Te(K))
				f.push(Te(I))
			}
			if (a.trailingComments)
				if (F)
					(A = a.trailingComments[0]),
						(he = A.extendedRange),
						(Be = A.range),
						(ot = _.substring(he[0], Be[0])),
						(Ge = (ot.match(/\n/g) || []).length),
						Ge > 0
							? (f.push(
									$(
										`
`,
										Ge,
									),
							  ),
							  f.push(Te(Je(A))))
							: (f.push(ot), f.push(Je(A)))
				else
					for (
						R = !fe(Ee(f).toString()),
							L = $(' ', Au(Ee([c, f, h]).toString())),
							l = 0,
							p = a.trailingComments.length;
						l < p;
						++l
					)
						(A = a.trailingComments[l]),
							R ? (l === 0 ? (f = [f, h]) : (f = [f, L]), f.push(Je(A, L))) : (f = [f, Te(Je(A))]),
							l !== p - 1 &&
								!fe(Ee(f).toString()) &&
								(f = [
									f,
									`
`,
								])
			return f
		}
		u(Qr, 'addComments')
		function st(a, f, l) {
			var p,
				A = 0
			for (p = a; p < f; p++)
				_[p] ===
					`
` && A++
			for (p = 1; p < A; p++) l.push(b)
		}
		u(st, 'generateBlankLines')
		function _e(a, f, l) {
			return f < l ? ['(', a, ')'] : a
		}
		u(_e, 'parenthesize')
		function Kr(a) {
			var f, l, p
			for (p = a.split(/\r\n|\n/), f = 1, l = p.length; f < l; f++) p[f] = b + c + p[f]
			return p
		}
		u(Kr, 'generateVerbatimString')
		function Eu(a, f) {
			var l, p, A
			return (
				(l = a[w.verbatim]),
				typeof l == 'string'
					? (p = _e(Kr(l), r.Sequence, f))
					: ((p = Kr(l.content)),
					  (A = l.precedence != null ? l.precedence : r.Sequence),
					  (p = _e(p, A, f))),
				Ee(p, a)
			)
		}
		u(Eu, 'generateVerbatim')
		function Se() {}
		u(Se, 'CodeGenerator'),
			(Se.prototype.maybeBlock = function (a, f) {
				var l,
					p,
					A = this
				return (
					(p = !w.comment || !a.leadingComments),
					a.type === t.BlockStatement && p
						? [C, this.generateStatement(a, f)]
						: a.type === t.EmptyStatement && p
						  ? ';'
						  : (be(function () {
									l = [b, Te(A.generateStatement(a, f))]
						    }),
						    l)
				)
			}),
			(Se.prototype.maybeBlockSuffix = function (a, f) {
				var l = fe(Ee(f).toString())
				return a.type === t.BlockStatement && (!w.comment || !a.leadingComments) && !l
					? [f, C]
					: l
					  ? [f, c]
					  : [f, b, c]
			})
		function Ie(a) {
			return Ee(a.name, a)
		}
		u(Ie, 'generateIdentifier')
		function vt(a, f) {
			return a.async ? 'async' + (f ? we() : C) : ''
		}
		u(vt, 'generateAsyncPrefix')
		function Pt(a) {
			var f = a.generator && !w.moz.starlessGenerator
			return f ? '*' + C : ''
		}
		u(Pt, 'generateStarSuffix')
		function Xr(a) {
			var f = a.value,
				l = ''
			return f.async && (l += vt(f, !a.computed)), f.generator && (l += Pt(f) ? '*' : ''), l
		}
		u(Xr, 'generateMethodPrefix'),
			(Se.prototype.generatePattern = function (a, f, l) {
				return a.type === t.Identifier ? Ie(a) : this.generateExpression(a, f, l)
			}),
			(Se.prototype.generateFunctionParams = function (a) {
				var f, l, p, A
				if (
					((A = !1),
					a.type === t.ArrowFunctionExpression &&
						!a.rest &&
						(!a.defaults || a.defaults.length === 0) &&
						a.params.length === 1 &&
						a.params[0].type === t.Identifier)
				)
					p = [vt(a, !0), Ie(a.params[0])]
				else {
					for (
						p = a.type === t.ArrowFunctionExpression ? [vt(a, !1)] : [],
							p.push('('),
							a.defaults && (A = !0),
							f = 0,
							l = a.params.length;
						f < l;
						++f
					)
						A && a.defaults[f]
							? p.push(this.generateAssignment(a.params[f], a.defaults[f], '=', r.Assignment, V))
							: p.push(this.generatePattern(a.params[f], r.Assignment, V)),
							f + 1 < l && p.push(',' + C)
					a.rest && (a.params.length && p.push(',' + C), p.push('...'), p.push(Ie(a.rest))),
						p.push(')')
				}
				return p
			}),
			(Se.prototype.generateFunctionBody = function (a) {
				var f, l
				return (
					(f = this.generateFunctionParams(a)),
					a.type === t.ArrowFunctionExpression && (f.push(C), f.push('=>')),
					a.expression
						? (f.push(C),
						  (l = this.generateExpression(a.body, r.Assignment, V)),
						  l.toString().charAt(0) === '{' && (l = ['(', l, ')']),
						  f.push(l))
						: f.push(this.maybeBlock(a.body, O)),
					f
				)
			}),
			(Se.prototype.generateIterationForStatement = function (a, f, l) {
				var p = ['for' + (f.await ? we() + 'await' : '') + C + '('],
					A = this
				return (
					be(function () {
						f.left.type === t.VariableDeclaration
							? be(function () {
									p.push(f.left.kind + we()), p.push(A.generateStatement(f.left.declarations[0], T))
							  })
							: p.push(A.generateExpression(f.left, r.Call, V)),
							(p = ne(p, a)),
							(p = [ne(p, A.generateExpression(f.right, r.Assignment, V)), ')'])
					}),
					p.push(this.maybeBlock(f.body, l)),
					p
				)
			}),
			(Se.prototype.generatePropertyKey = function (a, f) {
				var l = []
				return (
					f && l.push('['), l.push(this.generateExpression(a, r.Assignment, V)), f && l.push(']'), l
				)
			}),
			(Se.prototype.generateAssignment = function (a, f, l, p, A) {
				return (
					r.Assignment < p && (A |= J),
					_e(
						[
							this.generateExpression(a, r.Call, A),
							C + l + C,
							this.generateExpression(f, r.Assignment, A),
						],
						r.Assignment,
						p,
					)
				)
			}),
			(Se.prototype.semicolon = function (a) {
				return !U && a & P ? '' : ';'
			}),
			(Se.Statement = {
				BlockStatement: function (a, f) {
					var l,
						p,
						A = ['{', b],
						I = this
					return (
						be(function () {
							a.body.length === 0 &&
								F &&
								((l = a.range),
								l[1] - l[0] > 2 &&
									((p = _.substring(l[0] + 1, l[1] - 1)),
									p[0] ===
										`
` && (A = ['{']),
									A.push(p)))
							var R, L, K, he
							for (he = H, f & re && (he |= k), R = 0, L = a.body.length; R < L; ++R)
								F &&
									(R === 0 &&
										(a.body[0].leadingComments &&
											((l = a.body[0].leadingComments[0].extendedRange),
											(p = _.substring(l[0], l[1])),
											p[0] ===
												`
` && (A = ['{'])),
										a.body[0].leadingComments || st(a.range[0], a.body[0].range[0], A)),
									R > 0 &&
										!a.body[R - 1].trailingComments &&
										!a.body[R].leadingComments &&
										st(a.body[R - 1].range[1], a.body[R].range[0], A)),
									R === L - 1 && (he |= P),
									a.body[R].leadingComments && F
										? (K = I.generateStatement(a.body[R], he))
										: (K = Te(I.generateStatement(a.body[R], he))),
									A.push(K),
									fe(Ee(K).toString()) ||
										(F && R < L - 1 && a.body[R + 1].leadingComments) ||
										A.push(b),
									F &&
										R === L - 1 &&
										(a.body[R].trailingComments || st(a.body[R].range[1], a.range[1], A))
						}),
						A.push(Te('}')),
						A
					)
				},
				BreakStatement: function (a, f) {
					return a.label ? 'break ' + a.label.name + this.semicolon(f) : 'break' + this.semicolon(f)
				},
				ContinueStatement: function (a, f) {
					return a.label
						? 'continue ' + a.label.name + this.semicolon(f)
						: 'continue' + this.semicolon(f)
				},
				ClassBody: function (a, f) {
					var l = ['{', b],
						p = this
					return (
						be(function (A) {
							var I, R
							for (I = 0, R = a.body.length; I < R; ++I)
								l.push(A),
									l.push(p.generateExpression(a.body[I], r.Sequence, V)),
									I + 1 < R && l.push(b)
						}),
						fe(Ee(l).toString()) || l.push(b),
						l.push(c),
						l.push('}'),
						l
					)
				},
				ClassDeclaration: function (a, f) {
					var l, p
					return (
						(l = ['class']),
						a.id && (l = ne(l, this.generateExpression(a.id, r.Sequence, V))),
						a.superClass &&
							((p = ne('extends', this.generateExpression(a.superClass, r.Unary, V))),
							(l = ne(l, p))),
						l.push(C),
						l.push(this.generateStatement(a.body, S)),
						l
					)
				},
				DirectiveStatement: function (a, f) {
					return w.raw && a.raw ? a.raw + this.semicolon(f) : mu(a.directive) + this.semicolon(f)
				},
				DoWhileStatement: function (a, f) {
					var l = ne('do', this.maybeBlock(a.body, H))
					return (
						(l = this.maybeBlockSuffix(a.body, l)),
						ne(l, [
							'while' + C + '(',
							this.generateExpression(a.test, r.Sequence, V),
							')' + this.semicolon(f),
						])
					)
				},
				CatchClause: function (a, f) {
					var l,
						p = this
					return (
						be(function () {
							var A
							a.param
								? ((l = ['catch' + C + '(', p.generateExpression(a.param, r.Sequence, V), ')']),
								  a.guard &&
										((A = p.generateExpression(a.guard, r.Sequence, V)), l.splice(2, 0, ' if ', A)))
								: (l = ['catch'])
						}),
						l.push(this.maybeBlock(a.body, H)),
						l
					)
				},
				DebuggerStatement: function (a, f) {
					return 'debugger' + this.semicolon(f)
				},
				EmptyStatement: function (a, f) {
					return ';'
				},
				ExportDefaultDeclaration: function (a, f) {
					var l = ['export'],
						p
					return (
						(p = f & P ? S : H),
						(l = ne(l, 'default')),
						Y(a.declaration)
							? (l = ne(l, this.generateStatement(a.declaration, p)))
							: (l = ne(
									l,
									this.generateExpression(a.declaration, r.Assignment, V) + this.semicolon(f),
							  )),
						l
					)
				},
				ExportNamedDeclaration: function (a, f) {
					var l = ['export'],
						p,
						A = this
					return (
						(p = f & P ? S : H),
						a.declaration
							? ne(l, this.generateStatement(a.declaration, p))
							: (a.specifiers &&
									(a.specifiers.length === 0
										? (l = ne(l, '{' + C + '}'))
										: a.specifiers[0].type === t.ExportBatchSpecifier
										  ? (l = ne(l, this.generateExpression(a.specifiers[0], r.Sequence, V)))
										  : ((l = ne(l, '{')),
										    be(function (I) {
													var R, L
													for (l.push(b), R = 0, L = a.specifiers.length; R < L; ++R)
														l.push(I),
															l.push(A.generateExpression(a.specifiers[R], r.Sequence, V)),
															R + 1 < L && l.push(',' + b)
										    }),
										    fe(Ee(l).toString()) || l.push(b),
										    l.push(c + '}')),
									a.source
										? (l = ne(l, [
												'from' + C,
												this.generateExpression(a.source, r.Sequence, V),
												this.semicolon(f),
										  ]))
										: l.push(this.semicolon(f))),
							  l)
					)
				},
				ExportAllDeclaration: function (a, f) {
					return [
						'export' + C,
						'*' + C,
						'from' + C,
						this.generateExpression(a.source, r.Sequence, V),
						this.semicolon(f),
					]
				},
				ExpressionStatement: function (a, f) {
					var l, p
					function A(L) {
						var K
						return L.slice(0, 5) !== 'class'
							? !1
							: ((K = L.charCodeAt(5)),
							  K === 123 || o.code.isWhiteSpace(K) || o.code.isLineTerminator(K))
					}
					u(A, 'isClassPrefixed')
					function I(L) {
						var K
						return L.slice(0, 8) !== 'function'
							? !1
							: ((K = L.charCodeAt(8)),
							  K === 40 || o.code.isWhiteSpace(K) || K === 42 || o.code.isLineTerminator(K))
					}
					u(I, 'isFunctionPrefixed')
					function R(L) {
						var K, he, Be
						if (L.slice(0, 5) !== 'async' || !o.code.isWhiteSpace(L.charCodeAt(5))) return !1
						for (he = 6, Be = L.length; he < Be && o.code.isWhiteSpace(L.charCodeAt(he)); ++he);
						return he === Be || L.slice(he, he + 8) !== 'function'
							? !1
							: ((K = L.charCodeAt(he + 8)),
							  K === 40 || o.code.isWhiteSpace(K) || K === 42 || o.code.isLineTerminator(K))
					}
					return (
						u(R, 'isAsyncPrefixed'),
						(l = [this.generateExpression(a.expression, r.Sequence, V)]),
						(p = Ee(l).toString()),
						p.charCodeAt(0) === 123 ||
						A(p) ||
						I(p) ||
						R(p) ||
						(Q && f & k && a.expression.type === t.Literal && typeof a.expression.value == 'string')
							? (l = ['(', l, ')' + this.semicolon(f)])
							: l.push(this.semicolon(f)),
						l
					)
				},
				ImportDeclaration: function (a, f) {
					var l,
						p,
						A = this
					return a.specifiers.length === 0
						? ['import', C, this.generateExpression(a.source, r.Sequence, V), this.semicolon(f)]
						: ((l = ['import']),
						  (p = 0),
						  a.specifiers[p].type === t.ImportDefaultSpecifier &&
								((l = ne(l, [this.generateExpression(a.specifiers[p], r.Sequence, V)])), ++p),
						  a.specifiers[p] &&
								(p !== 0 && l.push(','),
								a.specifiers[p].type === t.ImportNamespaceSpecifier
									? (l = ne(l, [C, this.generateExpression(a.specifiers[p], r.Sequence, V)]))
									: (l.push(C + '{'),
									  a.specifiers.length - p === 1
											? (l.push(C),
											  l.push(this.generateExpression(a.specifiers[p], r.Sequence, V)),
											  l.push(C + '}' + C))
											: (be(function (I) {
													var R, L
													for (l.push(b), R = p, L = a.specifiers.length; R < L; ++R)
														l.push(I),
															l.push(A.generateExpression(a.specifiers[R], r.Sequence, V)),
															R + 1 < L && l.push(',' + b)
											  }),
											  fe(Ee(l).toString()) || l.push(b),
											  l.push(c + '}' + C)))),
						  (l = ne(l, [
								'from' + C,
								this.generateExpression(a.source, r.Sequence, V),
								this.semicolon(f),
						  ])),
						  l)
				},
				VariableDeclarator: function (a, f) {
					var l = f & J ? V : q
					return a.init
						? [
								this.generateExpression(a.id, r.Assignment, l),
								C,
								'=',
								C,
								this.generateExpression(a.init, r.Assignment, l),
						  ]
						: this.generatePattern(a.id, r.Assignment, l)
				},
				VariableDeclaration: function (a, f) {
					var l,
						p,
						A,
						I,
						R,
						L = this
					;(l = [a.kind]), (R = f & J ? H : T)
					function K() {
						for (
							I = a.declarations[0],
								w.comment && I.leadingComments
									? (l.push(`
`),
									  l.push(Te(L.generateStatement(I, R))))
									: (l.push(we()), l.push(L.generateStatement(I, R))),
								p = 1,
								A = a.declarations.length;
							p < A;
							++p
						)
							(I = a.declarations[p]),
								w.comment && I.leadingComments
									? (l.push(',' + b), l.push(Te(L.generateStatement(I, R))))
									: (l.push(',' + C), l.push(L.generateStatement(I, R)))
					}
					return (
						u(K, 'block'), a.declarations.length > 1 ? be(K) : K(), l.push(this.semicolon(f)), l
					)
				},
				ThrowStatement: function (a, f) {
					return [
						ne('throw', this.generateExpression(a.argument, r.Sequence, V)),
						this.semicolon(f),
					]
				},
				TryStatement: function (a, f) {
					var l, p, A, I
					if (
						((l = ['try', this.maybeBlock(a.block, H)]),
						(l = this.maybeBlockSuffix(a.block, l)),
						a.handlers)
					)
						for (p = 0, A = a.handlers.length; p < A; ++p)
							(l = ne(l, this.generateStatement(a.handlers[p], H))),
								(a.finalizer || p + 1 !== A) && (l = this.maybeBlockSuffix(a.handlers[p].body, l))
					else {
						for (I = a.guardedHandlers || [], p = 0, A = I.length; p < A; ++p)
							(l = ne(l, this.generateStatement(I[p], H))),
								(a.finalizer || p + 1 !== A) && (l = this.maybeBlockSuffix(I[p].body, l))
						if (a.handler)
							if (Array.isArray(a.handler))
								for (p = 0, A = a.handler.length; p < A; ++p)
									(l = ne(l, this.generateStatement(a.handler[p], H))),
										(a.finalizer || p + 1 !== A) &&
											(l = this.maybeBlockSuffix(a.handler[p].body, l))
							else
								(l = ne(l, this.generateStatement(a.handler, H))),
									a.finalizer && (l = this.maybeBlockSuffix(a.handler.body, l))
					}
					return a.finalizer && (l = ne(l, ['finally', this.maybeBlock(a.finalizer, H)])), l
				},
				SwitchStatement: function (a, f) {
					var l,
						p,
						A,
						I,
						R,
						L = this
					if (
						(be(function () {
							l = [
								'switch' + C + '(',
								L.generateExpression(a.discriminant, r.Sequence, V),
								')' + C + '{' + b,
							]
						}),
						a.cases)
					)
						for (R = H, A = 0, I = a.cases.length; A < I; ++A)
							A === I - 1 && (R |= P),
								(p = Te(this.generateStatement(a.cases[A], R))),
								l.push(p),
								fe(Ee(p).toString()) || l.push(b)
					return l.push(Te('}')), l
				},
				SwitchCase: function (a, f) {
					var l,
						p,
						A,
						I,
						R,
						L = this
					return (
						be(function () {
							for (
								a.test
									? (l = [ne('case', L.generateExpression(a.test, r.Sequence, V)), ':'])
									: (l = ['default:']),
									A = 0,
									I = a.consequent.length,
									I &&
										a.consequent[0].type === t.BlockStatement &&
										((p = L.maybeBlock(a.consequent[0], H)), l.push(p), (A = 1)),
									A !== I && !fe(Ee(l).toString()) && l.push(b),
									R = H;
								A < I;
								++A
							)
								A === I - 1 && f & P && (R |= P),
									(p = Te(L.generateStatement(a.consequent[A], R))),
									l.push(p),
									A + 1 !== I && !fe(Ee(p).toString()) && l.push(b)
						}),
						l
					)
				},
				IfStatement: function (a, f) {
					var l,
						p,
						A,
						I = this
					return (
						be(function () {
							l = ['if' + C + '(', I.generateExpression(a.test, r.Sequence, V), ')']
						}),
						(A = f & P),
						(p = H),
						A && (p |= P),
						a.alternate
							? (l.push(this.maybeBlock(a.consequent, H)),
							  (l = this.maybeBlockSuffix(a.consequent, l)),
							  a.alternate.type === t.IfStatement
									? (l = ne(l, ['else ', this.generateStatement(a.alternate, p)]))
									: (l = ne(l, ne('else', this.maybeBlock(a.alternate, p)))))
							: l.push(this.maybeBlock(a.consequent, p)),
						l
					)
				},
				ForStatement: function (a, f) {
					var l,
						p = this
					return (
						be(function () {
							;(l = ['for' + C + '(']),
								a.init
									? a.init.type === t.VariableDeclaration
										? l.push(p.generateStatement(a.init, T))
										: (l.push(p.generateExpression(a.init, r.Sequence, q)), l.push(';'))
									: l.push(';'),
								a.test && (l.push(C), l.push(p.generateExpression(a.test, r.Sequence, V))),
								l.push(';'),
								a.update && (l.push(C), l.push(p.generateExpression(a.update, r.Sequence, V))),
								l.push(')')
						}),
						l.push(this.maybeBlock(a.body, f & P ? S : H)),
						l
					)
				},
				ForInStatement: function (a, f) {
					return this.generateIterationForStatement('in', a, f & P ? S : H)
				},
				ForOfStatement: function (a, f) {
					return this.generateIterationForStatement('of', a, f & P ? S : H)
				},
				LabeledStatement: function (a, f) {
					return [a.label.name + ':', this.maybeBlock(a.body, f & P ? S : H)]
				},
				Program: function (a, f) {
					var l, p, A, I, R
					for (
						I = a.body.length,
							l = [
								j && I > 0
									? `
`
									: '',
							],
							R = X,
							A = 0;
						A < I;
						++A
					)
						!j && A === I - 1 && (R |= P),
							F &&
								(A === 0 && (a.body[0].leadingComments || st(a.range[0], a.body[A].range[0], l)),
								A > 0 &&
									!a.body[A - 1].trailingComments &&
									!a.body[A].leadingComments &&
									st(a.body[A - 1].range[1], a.body[A].range[0], l)),
							(p = Te(this.generateStatement(a.body[A], R))),
							l.push(p),
							A + 1 < I &&
								!fe(Ee(p).toString()) &&
								((F && a.body[A + 1].leadingComments) || l.push(b)),
							F &&
								A === I - 1 &&
								(a.body[A].trailingComments || st(a.body[A].range[1], a.range[1], l))
					return l
				},
				FunctionDeclaration: function (a, f) {
					return [
						vt(a, !0),
						'function',
						Pt(a) || we(),
						a.id ? Ie(a.id) : '',
						this.generateFunctionBody(a),
					]
				},
				ReturnStatement: function (a, f) {
					return a.argument
						? [ne('return', this.generateExpression(a.argument, r.Sequence, V)), this.semicolon(f)]
						: ['return' + this.semicolon(f)]
				},
				WhileStatement: function (a, f) {
					var l,
						p = this
					return (
						be(function () {
							l = ['while' + C + '(', p.generateExpression(a.test, r.Sequence, V), ')']
						}),
						l.push(this.maybeBlock(a.body, f & P ? S : H)),
						l
					)
				},
				WithStatement: function (a, f) {
					var l,
						p = this
					return (
						be(function () {
							l = ['with' + C + '(', p.generateExpression(a.object, r.Sequence, V), ')']
						}),
						l.push(this.maybeBlock(a.body, f & P ? S : H)),
						l
					)
				},
			}),
			De(Se.prototype, Se.Statement),
			(Se.Expression = {
				SequenceExpression: function (a, f, l) {
					var p, A, I
					for (r.Sequence < f && (l |= J), p = [], A = 0, I = a.expressions.length; A < I; ++A)
						p.push(this.generateExpression(a.expressions[A], r.Assignment, l)),
							A + 1 < I && p.push(',' + C)
					return _e(p, r.Sequence, f)
				},
				AssignmentExpression: function (a, f, l) {
					return this.generateAssignment(a.left, a.right, a.operator, f, l)
				},
				ArrowFunctionExpression: function (a, f, l) {
					return _e(this.generateFunctionBody(a), r.ArrowFunction, f)
				},
				ConditionalExpression: function (a, f, l) {
					return (
						r.Conditional < f && (l |= J),
						_e(
							[
								this.generateExpression(a.test, r.LogicalOR, l),
								C + '?' + C,
								this.generateExpression(a.consequent, r.Assignment, l),
								C + ':' + C,
								this.generateExpression(a.alternate, r.Assignment, l),
							],
							r.Conditional,
							f,
						)
					)
				},
				LogicalExpression: function (a, f, l) {
					return this.BinaryExpression(a, f, l)
				},
				BinaryExpression: function (a, f, l) {
					var p, A, I, R, L, K
					return (
						(R = n[a.operator]),
						(A = a.operator === '**' ? r.Postfix : R),
						(I = a.operator === '**' ? R : R + 1),
						R < f && (l |= J),
						(L = this.generateExpression(a.left, A, l)),
						(K = L.toString()),
						K.charCodeAt(K.length - 1) === 47 &&
						o.code.isIdentifierPartES5(a.operator.charCodeAt(0))
							? (p = [L, we(), a.operator])
							: (p = ne(L, a.operator)),
						(L = this.generateExpression(a.right, I, l)),
						(a.operator === '/' && L.toString().charAt(0) === '/') ||
						(a.operator.slice(-1) === '<' && L.toString().slice(0, 3) === '!--')
							? (p.push(we()), p.push(L))
							: (p = ne(p, L)),
						a.operator === 'in' && !(l & J) ? ['(', p, ')'] : _e(p, R, f)
					)
				},
				CallExpression: function (a, f, l) {
					var p, A, I
					for (
						p = [this.generateExpression(a.callee, r.Call, ie)],
							a.optional && p.push('?.'),
							p.push('('),
							A = 0,
							I = a.arguments.length;
						A < I;
						++A
					)
						p.push(this.generateExpression(a.arguments[A], r.Assignment, V)),
							A + 1 < I && p.push(',' + C)
					return p.push(')'), l & ue ? _e(p, r.Call, f) : ['(', p, ')']
				},
				ChainExpression: function (a, f, l) {
					r.OptionalChaining < f && (l |= ue)
					var p = this.generateExpression(a.expression, r.OptionalChaining, l)
					return _e(p, r.OptionalChaining, f)
				},
				NewExpression: function (a, f, l) {
					var p, A, I, R, L
					if (
						((A = a.arguments.length),
						(L = l & Ce && !B && A === 0 ? te : ce),
						(p = ne('new', this.generateExpression(a.callee, r.New, L))),
						!(l & Ce) || B || A > 0)
					) {
						for (p.push('('), I = 0, R = A; I < R; ++I)
							p.push(this.generateExpression(a.arguments[I], r.Assignment, V)),
								I + 1 < R && p.push(',' + C)
						p.push(')')
					}
					return _e(p, r.New, f)
				},
				MemberExpression: function (a, f, l) {
					var p, A
					return (
						(p = [this.generateExpression(a.object, r.Call, l & ue ? ie : ce)]),
						a.computed
							? (a.optional && p.push('?.'),
							  p.push('['),
							  p.push(this.generateExpression(a.property, r.Sequence, l & ue ? V : te)),
							  p.push(']'))
							: (!a.optional &&
									a.object.type === t.Literal &&
									typeof a.object.value == 'number' &&
									((A = Ee(p).toString()),
									A.indexOf('.') < 0 &&
										!/[eExX]/.test(A) &&
										o.code.isDecimalDigit(A.charCodeAt(A.length - 1)) &&
										!(A.length >= 2 && A.charCodeAt(0) === 48) &&
										p.push(' ')),
							  p.push(a.optional ? '?.' : '.'),
							  p.push(Ie(a.property))),
						_e(p, r.Member, f)
					)
				},
				MetaProperty: function (a, f, l) {
					var p
					return (
						(p = []),
						p.push(typeof a.meta == 'string' ? a.meta : Ie(a.meta)),
						p.push('.'),
						p.push(typeof a.property == 'string' ? a.property : Ie(a.property)),
						_e(p, r.Member, f)
					)
				},
				UnaryExpression: function (a, f, l) {
					var p, A, I, R, L
					return (
						(A = this.generateExpression(a.argument, r.Unary, V)),
						C === ''
							? (p = ne(a.operator, A))
							: ((p = [a.operator]),
							  a.operator.length > 2
									? (p = ne(p, A))
									: ((R = Ee(p).toString()),
									  (L = R.charCodeAt(R.length - 1)),
									  (I = A.toString().charCodeAt(0)),
									  (((L === 43 || L === 45) && L === I) ||
											(o.code.isIdentifierPartES5(L) && o.code.isIdentifierPartES5(I))) &&
											p.push(we()),
									  p.push(A))),
						_e(p, r.Unary, f)
					)
				},
				YieldExpression: function (a, f, l) {
					var p
					return (
						a.delegate ? (p = 'yield*') : (p = 'yield'),
						a.argument && (p = ne(p, this.generateExpression(a.argument, r.Yield, V))),
						_e(p, r.Yield, f)
					)
				},
				AwaitExpression: function (a, f, l) {
					var p = ne(a.all ? 'await*' : 'await', this.generateExpression(a.argument, r.Await, V))
					return _e(p, r.Await, f)
				},
				UpdateExpression: function (a, f, l) {
					return a.prefix
						? _e([a.operator, this.generateExpression(a.argument, r.Unary, V)], r.Unary, f)
						: _e([this.generateExpression(a.argument, r.Postfix, V), a.operator], r.Postfix, f)
				},
				FunctionExpression: function (a, f, l) {
					var p = [vt(a, !0), 'function']
					return (
						a.id ? (p.push(Pt(a) || we()), p.push(Ie(a.id))) : p.push(Pt(a) || C),
						p.push(this.generateFunctionBody(a)),
						p
					)
				},
				ArrayPattern: function (a, f, l) {
					return this.ArrayExpression(a, f, l, !0)
				},
				ArrayExpression: function (a, f, l, p) {
					var A,
						I,
						R = this
					return a.elements.length
						? ((I = p ? !1 : a.elements.length > 1),
						  (A = ['[', I ? b : '']),
						  be(function (L) {
								var K, he
								for (K = 0, he = a.elements.length; K < he; ++K)
									a.elements[K]
										? (A.push(I ? L : ''),
										  A.push(R.generateExpression(a.elements[K], r.Assignment, V)))
										: (I && A.push(L), K + 1 === he && A.push(',')),
										K + 1 < he && A.push(',' + (I ? b : C))
						  }),
						  I && !fe(Ee(A).toString()) && A.push(b),
						  A.push(I ? c : ''),
						  A.push(']'),
						  A)
						: '[]'
				},
				RestElement: function (a, f, l) {
					return '...' + this.generatePattern(a.argument)
				},
				ClassExpression: function (a, f, l) {
					var p, A
					return (
						(p = ['class']),
						a.id && (p = ne(p, this.generateExpression(a.id, r.Sequence, V))),
						a.superClass &&
							((A = ne('extends', this.generateExpression(a.superClass, r.Unary, V))),
							(p = ne(p, A))),
						p.push(C),
						p.push(this.generateStatement(a.body, S)),
						p
					)
				},
				MethodDefinition: function (a, f, l) {
					var p, A
					return (
						a.static ? (p = ['static' + C]) : (p = []),
						a.kind === 'get' || a.kind === 'set'
							? (A = [
									ne(a.kind, this.generatePropertyKey(a.key, a.computed)),
									this.generateFunctionBody(a.value),
							  ])
							: (A = [
									Xr(a),
									this.generatePropertyKey(a.key, a.computed),
									this.generateFunctionBody(a.value),
							  ]),
						ne(p, A)
					)
				},
				Property: function (a, f, l) {
					return a.kind === 'get' || a.kind === 'set'
						? [
								a.kind,
								we(),
								this.generatePropertyKey(a.key, a.computed),
								this.generateFunctionBody(a.value),
						  ]
						: a.shorthand
						  ? a.value.type === 'AssignmentPattern'
								? this.AssignmentPattern(a.value, r.Sequence, V)
								: this.generatePropertyKey(a.key, a.computed)
						  : a.method
						    ? [
										Xr(a),
										this.generatePropertyKey(a.key, a.computed),
										this.generateFunctionBody(a.value),
						      ]
						    : [
										this.generatePropertyKey(a.key, a.computed),
										':' + C,
										this.generateExpression(a.value, r.Assignment, V),
						      ]
				},
				ObjectExpression: function (a, f, l) {
					var p,
						A,
						I,
						R = this
					return a.properties.length
						? ((p = a.properties.length > 1),
						  be(function () {
								I = R.generateExpression(a.properties[0], r.Sequence, V)
						  }),
						  !p && !Z(Ee(I).toString())
								? ['{', C, I, C, '}']
								: (be(function (L) {
										var K, he
										if (((A = ['{', b, L, I]), p))
											for (A.push(',' + b), K = 1, he = a.properties.length; K < he; ++K)
												A.push(L),
													A.push(R.generateExpression(a.properties[K], r.Sequence, V)),
													K + 1 < he && A.push(',' + b)
								  }),
								  fe(Ee(A).toString()) || A.push(b),
								  A.push(c),
								  A.push('}'),
								  A))
						: '{}'
				},
				AssignmentPattern: function (a, f, l) {
					return this.generateAssignment(a.left, a.right, '=', f, l)
				},
				ObjectPattern: function (a, f, l) {
					var p,
						A,
						I,
						R,
						L,
						K = this
					if (!a.properties.length) return '{}'
					if (((R = !1), a.properties.length === 1))
						(L = a.properties[0]),
							L.type === t.Property && L.value.type !== t.Identifier && (R = !0)
					else
						for (A = 0, I = a.properties.length; A < I; ++A)
							if (((L = a.properties[A]), L.type === t.Property && !L.shorthand)) {
								R = !0
								break
							}
					return (
						(p = ['{', R ? b : '']),
						be(function (he) {
							var Be, rt
							for (Be = 0, rt = a.properties.length; Be < rt; ++Be)
								p.push(R ? he : ''),
									p.push(K.generateExpression(a.properties[Be], r.Sequence, V)),
									Be + 1 < rt && p.push(',' + (R ? b : C))
						}),
						R && !fe(Ee(p).toString()) && p.push(b),
						p.push(R ? c : ''),
						p.push('}'),
						p
					)
				},
				ThisExpression: function (a, f, l) {
					return 'this'
				},
				Super: function (a, f, l) {
					return 'super'
				},
				Identifier: function (a, f, l) {
					return Ie(a)
				},
				ImportDefaultSpecifier: function (a, f, l) {
					return Ie(a.id || a.local)
				},
				ImportNamespaceSpecifier: function (a, f, l) {
					var p = ['*'],
						A = a.id || a.local
					return A && p.push(C + 'as' + we() + Ie(A)), p
				},
				ImportSpecifier: function (a, f, l) {
					var p = a.imported,
						A = [p.name],
						I = a.local
					return I && I.name !== p.name && A.push(we() + 'as' + we() + Ie(I)), A
				},
				ExportSpecifier: function (a, f, l) {
					var p = a.local,
						A = [p.name],
						I = a.exported
					return I && I.name !== p.name && A.push(we() + 'as' + we() + Ie(I)), A
				},
				Literal: function (a, f, l) {
					var p
					if (a.hasOwnProperty('raw') && m && w.raw)
						try {
							if (((p = m(a.raw).body[0].expression), p.type === t.Literal && p.value === a.value))
								return a.raw
						} catch {}
					return a.regex
						? '/' + a.regex.pattern + '/' + a.regex.flags
						: a.value === null
						  ? 'null'
						  : typeof a.value == 'string'
						    ? gu(a.value)
						    : typeof a.value == 'number'
						      ? We(a.value)
						      : typeof a.value == 'boolean'
						        ? a.value
											? 'true'
											: 'false'
						        : pu(a.value)
				},
				GeneratorExpression: function (a, f, l) {
					return this.ComprehensionExpression(a, f, l)
				},
				ComprehensionExpression: function (a, f, l) {
					var p,
						A,
						I,
						R,
						L = this
					return (
						(p = a.type === t.GeneratorExpression ? ['('] : ['[']),
						w.moz.comprehensionExpressionStartsWithAssignment &&
							((R = this.generateExpression(a.body, r.Assignment, V)), p.push(R)),
						a.blocks &&
							be(function () {
								for (A = 0, I = a.blocks.length; A < I; ++A)
									(R = L.generateExpression(a.blocks[A], r.Sequence, V)),
										A > 0 || w.moz.comprehensionExpressionStartsWithAssignment
											? (p = ne(p, R))
											: p.push(R)
							}),
						a.filter &&
							((p = ne(p, 'if' + C)),
							(R = this.generateExpression(a.filter, r.Sequence, V)),
							(p = ne(p, ['(', R, ')']))),
						w.moz.comprehensionExpressionStartsWithAssignment ||
							((R = this.generateExpression(a.body, r.Assignment, V)), (p = ne(p, R))),
						p.push(a.type === t.GeneratorExpression ? ')' : ']'),
						p
					)
				},
				ComprehensionBlock: function (a, f, l) {
					var p
					return (
						a.left.type === t.VariableDeclaration
							? (p = [a.left.kind, we(), this.generateStatement(a.left.declarations[0], T)])
							: (p = this.generateExpression(a.left, r.Call, V)),
						(p = ne(p, a.of ? 'of' : 'in')),
						(p = ne(p, this.generateExpression(a.right, r.Sequence, V))),
						['for' + C + '(', p, ')']
					)
				},
				SpreadElement: function (a, f, l) {
					return ['...', this.generateExpression(a.argument, r.Assignment, V)]
				},
				TaggedTemplateExpression: function (a, f, l) {
					var p = ie
					l & ue || (p = ce)
					var A = [
						this.generateExpression(a.tag, r.Call, p),
						this.generateExpression(a.quasi, r.Primary, le),
					]
					return _e(A, r.TaggedTemplate, f)
				},
				TemplateElement: function (a, f, l) {
					return a.value.raw
				},
				TemplateLiteral: function (a, f, l) {
					var p, A, I
					for (p = ['`'], A = 0, I = a.quasis.length; A < I; ++A)
						p.push(this.generateExpression(a.quasis[A], r.Primary, V)),
							A + 1 < I &&
								(p.push('${' + C),
								p.push(this.generateExpression(a.expressions[A], r.Sequence, V)),
								p.push(C + '}'))
					return p.push('`'), p
				},
				ModuleSpecifier: function (a, f, l) {
					return this.Literal(a, f, l)
				},
				ImportExpression: function (a, f, l) {
					return _e(['import(', this.generateExpression(a.source, r.Assignment, V), ')'], r.Call, f)
				},
			}),
			De(Se.prototype, Se.Expression),
			(Se.prototype.generateExpression = function (a, f, l) {
				var p, A
				return (
					(A = a.type || t.Property),
					w.verbatim && a.hasOwnProperty(w.verbatim)
						? Eu(a, f)
						: ((p = this[A](a, f, l)), w.comment && (p = Qr(a, p)), Ee(p, a))
				)
			}),
			(Se.prototype.generateStatement = function (a, f) {
				var l, p
				return (
					(l = this[a.type](a, f)),
					w.comment && (l = Qr(a, l)),
					(p = Ee(l).toString()),
					a.type === t.Program &&
						!j &&
						b === '' &&
						p.charAt(p.length - 1) ===
							`
` &&
						(l = y ? Ee(l).replaceRight(/\s+$/, '') : p.replace(/\s+$/, '')),
					Ee(l, a)
				)
			})
		function yu(a) {
			var f
			if (((f = new Se()), Y(a))) return f.generateStatement(a, H)
			if (M(a)) return f.generateExpression(a, r.Sequence, V)
			throw new Error('Unknown node type: ' + a.type)
		}
		u(yu, 'generateInternal')
		function Cu(a, f) {
			var l = N(),
				p,
				A
			return (
				f != null
					? (typeof f.indent == 'string' && (l.format.indent.style = f.indent),
					  typeof f.base == 'number' && (l.format.indent.base = f.base),
					  (f = xe(l, f)),
					  (h = f.format.indent.style),
					  typeof f.base == 'string' ? (c = f.base) : (c = $(h, f.format.indent.base)))
					: ((f = l), (h = f.format.indent.style), (c = $(h, f.format.indent.base))),
				(g = f.format.json),
				(D = f.format.renumber),
				(x = g ? !1 : f.format.hexadecimal),
				(E = g ? 'double' : f.format.quotes),
				(v = f.format.escapeless),
				(b = f.format.newline),
				(C = f.format.space),
				f.format.compact && (b = C = h = c = ''),
				(B = f.format.parentheses),
				(U = f.format.semicolons),
				(j = f.format.safeConcatenation),
				(Q = f.directive),
				(m = g ? null : f.parse),
				(y = f.sourceMap),
				(_ = f.sourceCode),
				(F = f.format.preserveBlankLines && _ !== null),
				(w = f),
				y && (e.browser ? (i = $e.sourceMap.SourceNode) : (i = As().SourceNode)),
				(p = yu(a)),
				y
					? ((A = p.toStringWithSourceMap({ file: f.file, sourceRoot: f.sourceMapRoot })),
					  f.sourceContent && A.map.setSourceContent(f.sourceMap, f.sourceContent),
					  f.sourceMapWithCode ? A : A.map.toString())
					: ((A = { code: p.toString(), map: null }), f.sourceMapWithCode ? A : A.code)
			)
		}
		u(Cu, 'generate'),
			(z = {
				indent: { style: '', base: 0 },
				renumber: !0,
				hexadecimal: !0,
				quotes: 'auto',
				escapeless: !0,
				compact: !0,
				parentheses: !1,
				semicolons: !1,
			}),
			(W = N().format),
			(e.version = Os.version),
			(e.generate = Cu),
			(e.attachComments = s.attachComments),
			(e.Precedence = xe({}, r)),
			(e.browser = !1),
			(e.FORMAT_MINIFY = z),
			(e.FORMAT_DEFAULTS = W)
	})()
})(fi)
var gi = { format: { indent: { style: '  ' }, semicolons: !1 } },
	Is = Object.assign({}, gi, { format: { newline: '' } }),
	Ps = Object.assign({}, gi)
function Ze(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
	return fi.generate(e, t ? Is : Ps)
}
u(Ze, 'generateCode')
function Dr(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
	return t ? Rs(e) : Ze(e)
}
u(Dr, 'generateObjectCode')
function Rs(e) {
	var t = Ze(e, !0)
	return t.endsWith(' }') || (t = ''.concat(t.slice(0, -1), ' }')), t
}
u(Rs, 'generateCompactObjectCode')
function xn(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
	return t ? Ms(e) : Ls(e)
}
u(xn, 'generateArrayCode')
function Ls(e) {
	var t = Ze(e)
	return t.endsWith('  }]') && (t = qn(t)), t
}
u(Ls, 'generateMultilineArrayCode')
function Ms(e) {
	var t = Ze(e, !0)
	return t.startsWith('[    ') && (t = t.replace('[    ', '[')), t
}
u(Ms, 'generateCompactArrayCode')
var Ai = u(function (t) {
		return t.$$typeof === Symbol.for('react.memo')
	}, 'isMemo'),
	js = u(function (t) {
		return t.$$typeof === Symbol.for('react.forward_ref')
	}, 'isForwardRef'),
	ye
;(function (e) {
	;(e.IDENTIFIER = 'Identifier'),
		(e.LITERAL = 'Literal'),
		(e.OBJECT = 'Object'),
		(e.ARRAY = 'Array'),
		(e.FUNCTION = 'Function'),
		(e.CLASS = 'Class'),
		(e.ELEMENT = 'Element'),
		(e.UNKNOWN = 'Unknown')
})(ye || (ye = {}))
var pr = {
		3: 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
		5: 'class enum extends super const export import',
		6: 'enum',
		strict: 'implements interface let package private protected public static yield',
		strictBind: 'eval arguments',
	},
	hr =
		'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this',
	Vs = {
		5: hr,
		'5module': hr + ' export import',
		6: hr + ' const class extends export import super',
	},
	qs = /^in(stanceof)?$/,
	Ir =
		'\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
	Di =
		'\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F',
	Us = new RegExp('[' + Ir + ']'),
	Ws = new RegExp('[' + Ir + Di + ']')
Ir = Di = null
var Ei = [
		0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37,
		11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153,
		5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1,
		65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72,
		56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20, 28, 22, 13, 52, 76, 44,
		33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2,
		0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52,
		19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 230,
		43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11,
		39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22,
		0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050,
		582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12,
		65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8,
		8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2,
		27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2,
		30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1,
		2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0,
		2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421,
		42717, 35, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938,
	],
	Gs = [
		509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1,
		154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2,
		49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1,
		3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9,
		9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29,
		9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2,
		6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54,
		8, 3, 82, 0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5,
		49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13, 1495,
		6, 110, 6, 6, 9, 4759, 9, 787719, 239,
	]
function Er(e, t) {
	for (var r = 65536, n = 0; n < t.length; n += 2) {
		if (((r += t[n]), r > e)) return !1
		if (((r += t[n + 1]), r >= e)) return !0
	}
}
u(Er, 'isInAstralSet')
function Ke(e, t) {
	return e < 65
		? e === 36
		: e < 91
		  ? !0
		  : e < 97
		    ? e === 95
		    : e < 123
		      ? !0
		      : e <= 65535
		        ? e >= 170 && Us.test(String.fromCharCode(e))
		        : t === !1
		          ? !1
		          : Er(e, Ei)
}
u(Ke, 'isIdentifierStart')
function it(e, t) {
	return e < 48
		? e === 36
		: e < 58
		  ? !0
		  : e < 65
		    ? !1
		    : e < 91
		      ? !0
		      : e < 97
		        ? e === 95
		        : e < 123
		          ? !0
		          : e <= 65535
		            ? e >= 170 && Ws.test(String.fromCharCode(e))
		            : t === !1
		              ? !1
		              : Er(e, Ei) || Er(e, Gs)
}
u(it, 'isIdentifierChar')
var me = u(function (t, r) {
	r === void 0 && (r = {}),
		(this.label = t),
		(this.keyword = r.keyword),
		(this.beforeExpr = !!r.beforeExpr),
		(this.startsExpr = !!r.startsExpr),
		(this.isLoop = !!r.isLoop),
		(this.isAssign = !!r.isAssign),
		(this.prefix = !!r.prefix),
		(this.postfix = !!r.postfix),
		(this.binop = r.binop || null),
		(this.updateContext = null)
}, 'TokenType')
function Le(e, t) {
	return new me(e, { beforeExpr: !0, binop: t })
}
u(Le, 'binop')
var Me = { beforeExpr: !0 },
	Pe = { startsExpr: !0 },
	Qt = {}
function de(e, t) {
	return t === void 0 && (t = {}), (t.keyword = e), (Qt[e] = new me(e, t))
}
u(de, 'kw')
var d = {
		num: new me('num', Pe),
		regexp: new me('regexp', Pe),
		string: new me('string', Pe),
		name: new me('name', Pe),
		eof: new me('eof'),
		bracketL: new me('[', { beforeExpr: !0, startsExpr: !0 }),
		bracketR: new me(']'),
		braceL: new me('{', { beforeExpr: !0, startsExpr: !0 }),
		braceR: new me('}'),
		parenL: new me('(', { beforeExpr: !0, startsExpr: !0 }),
		parenR: new me(')'),
		comma: new me(',', Me),
		semi: new me(';', Me),
		colon: new me(':', Me),
		dot: new me('.'),
		question: new me('?', Me),
		questionDot: new me('?.'),
		arrow: new me('=>', Me),
		template: new me('template'),
		invalidTemplate: new me('invalidTemplate'),
		ellipsis: new me('...', Me),
		backQuote: new me('`', Pe),
		dollarBraceL: new me('${', { beforeExpr: !0, startsExpr: !0 }),
		eq: new me('=', { beforeExpr: !0, isAssign: !0 }),
		assign: new me('_=', { beforeExpr: !0, isAssign: !0 }),
		incDec: new me('++/--', { prefix: !0, postfix: !0, startsExpr: !0 }),
		prefix: new me('!/~', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
		logicalOR: Le('||', 1),
		logicalAND: Le('&&', 2),
		bitwiseOR: Le('|', 3),
		bitwiseXOR: Le('^', 4),
		bitwiseAND: Le('&', 5),
		equality: Le('==/!=/===/!==', 6),
		relational: Le('</>/<=/>=', 7),
		bitShift: Le('<</>>/>>>', 8),
		plusMin: new me('+/-', { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }),
		modulo: Le('%', 10),
		star: Le('*', 10),
		slash: Le('/', 10),
		starstar: new me('**', { beforeExpr: !0 }),
		coalesce: Le('??', 1),
		_break: de('break'),
		_case: de('case', Me),
		_catch: de('catch'),
		_continue: de('continue'),
		_debugger: de('debugger'),
		_default: de('default', Me),
		_do: de('do', { isLoop: !0, beforeExpr: !0 }),
		_else: de('else', Me),
		_finally: de('finally'),
		_for: de('for', { isLoop: !0 }),
		_function: de('function', Pe),
		_if: de('if'),
		_return: de('return', Me),
		_switch: de('switch'),
		_throw: de('throw', Me),
		_try: de('try'),
		_var: de('var'),
		_const: de('const'),
		_while: de('while', { isLoop: !0 }),
		_with: de('with'),
		_new: de('new', { beforeExpr: !0, startsExpr: !0 }),
		_this: de('this', Pe),
		_super: de('super', Pe),
		_class: de('class', Pe),
		_extends: de('extends', Me),
		_export: de('export'),
		_import: de('import', Pe),
		_null: de('null', Pe),
		_true: de('true', Pe),
		_false: de('false', Pe),
		_in: de('in', { beforeExpr: !0, binop: 7 }),
		_instanceof: de('instanceof', { beforeExpr: !0, binop: 7 }),
		_typeof: de('typeof', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
		_void: de('void', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
		_delete: de('delete', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
	},
	Re = /\r\n?|\n|\u2028|\u2029/,
	mt = new RegExp(Re.source, 'g')
function Ct(e, t) {
	return e === 10 || e === 13 || (!t && (e === 8232 || e === 8233))
}
u(Ct, 'isNewLine')
var Pr = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
	Ve = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
	yi = Object.prototype,
	zs = yi.hasOwnProperty,
	$s = yi.toString
function Kt(e, t) {
	return zs.call(e, t)
}
u(Kt, 'has')
var Fn =
	Array.isArray ||
	function (e) {
		return $s.call(e) === '[object Array]'
	}
function nt(e) {
	return new RegExp('^(?:' + e.replace(/ /g, '|') + ')$')
}
u(nt, 'wordsRegexp')
var gt = u(function (t, r) {
	;(this.line = t), (this.column = r)
}, 'Position')
gt.prototype.offset = u(function (t) {
	return new gt(this.line, this.column + t)
}, 'offset')
var Nt = u(function (t, r, n) {
	;(this.start = r), (this.end = n), t.sourceFile !== null && (this.source = t.sourceFile)
}, 'SourceLocation')
function Rr(e, t) {
	for (var r = 1, n = 0; ; ) {
		mt.lastIndex = n
		var i = mt.exec(e)
		if (i && i.index < t) ++r, (n = i.index + i[0].length)
		else return new gt(r, t - n)
	}
}
u(Rr, 'getLineInfo')
var Wt = {
	ecmaVersion: 10,
	sourceType: 'script',
	onInsertedSemicolon: null,
	onTrailingComma: null,
	allowReserved: null,
	allowReturnOutsideFunction: !1,
	allowImportExportEverywhere: !1,
	allowAwaitOutsideFunction: !1,
	allowHashBang: !1,
	locations: !1,
	onToken: null,
	onComment: null,
	ranges: !1,
	program: null,
	sourceFile: null,
	directSourceFile: null,
	preserveParens: !1,
}
function Js(e) {
	var t = {}
	for (var r in Wt) t[r] = e && Kt(e, r) ? e[r] : Wt[r]
	if (
		(t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009),
		t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5),
		Fn(t.onToken))
	) {
		var n = t.onToken
		t.onToken = function (i) {
			return n.push(i)
		}
	}
	return Fn(t.onComment) && (t.onComment = Hs(t, t.onComment)), t
}
u(Js, 'getOptions')
function Hs(e, t) {
	return function (r, n, i, s, o, c) {
		var h = { type: r ? 'Block' : 'Line', value: n, start: i, end: s }
		e.locations && (h.loc = new Nt(this, o, c)), e.ranges && (h.range = [i, s]), t.push(h)
	}
}
u(Hs, 'pushComment')
var wt = 1,
	Ot = 2,
	Lr = wt | Ot,
	Ci = 4,
	vi = 8,
	xi = 16,
	Fi = 32,
	bi = 64,
	Si = 128
function Mr(e, t) {
	return Ot | (e ? Ci : 0) | (t ? vi : 0)
}
u(Mr, 'functionFlags')
var bn = 0,
	jr = 1,
	Qe = 2,
	_i = 3,
	Bi = 4,
	wi = 5,
	ve = u(function (t, r, n) {
		;(this.options = t = Js(t)),
			(this.sourceFile = t.sourceFile),
			(this.keywords = nt(Vs[t.ecmaVersion >= 6 ? 6 : t.sourceType === 'module' ? '5module' : 5]))
		var i = ''
		if (t.allowReserved !== !0) {
			for (var s = t.ecmaVersion; !(i = pr[s]); s--);
			t.sourceType === 'module' && (i += ' await')
		}
		this.reservedWords = nt(i)
		var o = (i ? i + ' ' : '') + pr.strict
		;(this.reservedWordsStrict = nt(o)),
			(this.reservedWordsStrictBind = nt(o + ' ' + pr.strictBind)),
			(this.input = String(r)),
			(this.containsEsc = !1),
			n
				? ((this.pos = n),
				  (this.lineStart =
						this.input.lastIndexOf(
							`
`,
							n - 1,
						) + 1),
				  (this.curLine = this.input.slice(0, this.lineStart).split(Re).length))
				: ((this.pos = this.lineStart = 0), (this.curLine = 1)),
			(this.type = d.eof),
			(this.value = null),
			(this.start = this.end = this.pos),
			(this.startLoc = this.endLoc = this.curPosition()),
			(this.lastTokEndLoc = this.lastTokStartLoc = null),
			(this.lastTokStart = this.lastTokEnd = this.pos),
			(this.context = this.initialContext()),
			(this.exprAllowed = !0),
			(this.inModule = t.sourceType === 'module'),
			(this.strict = this.inModule || this.strictDirective(this.pos)),
			(this.potentialArrowAt = -1),
			(this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
			(this.labels = []),
			(this.undefinedExports = {}),
			this.pos === 0 &&
				t.allowHashBang &&
				this.input.slice(0, 2) === '#!' &&
				this.skipLineComment(2),
			(this.scopeStack = []),
			this.enterScope(wt),
			(this.regexpState = null)
	}, 'Parser'),
	ut = {
		inFunction: { configurable: !0 },
		inGenerator: { configurable: !0 },
		inAsync: { configurable: !0 },
		allowSuper: { configurable: !0 },
		allowDirectSuper: { configurable: !0 },
		treatFunctionsAsVar: { configurable: !0 },
	}
ve.prototype.parse = u(function () {
	var t = this.options.program || this.startNode()
	return this.nextToken(), this.parseTopLevel(t)
}, 'parse')
ut.inFunction.get = function () {
	return (this.currentVarScope().flags & Ot) > 0
}
ut.inGenerator.get = function () {
	return (this.currentVarScope().flags & vi) > 0
}
ut.inAsync.get = function () {
	return (this.currentVarScope().flags & Ci) > 0
}
ut.allowSuper.get = function () {
	return (this.currentThisScope().flags & bi) > 0
}
ut.allowDirectSuper.get = function () {
	return (this.currentThisScope().flags & Si) > 0
}
ut.treatFunctionsAsVar.get = function () {
	return this.treatFunctionsAsVarInScope(this.currentScope())
}
ve.prototype.inNonArrowFunction = u(function () {
	return (this.currentThisScope().flags & Ot) > 0
}, 'inNonArrowFunction')
ve.extend = u(function () {
	for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r]
	for (var n = this, i = 0; i < t.length; i++) n = t[i](n)
	return n
}, 'extend')
ve.parse = u(function (t, r) {
	return new this(r, t).parse()
}, 'parse')
ve.parseExpressionAt = u(function (t, r, n) {
	var i = new this(n, t, r)
	return i.nextToken(), i.parseExpression()
}, 'parseExpressionAt')
ve.tokenizer = u(function (t, r) {
	return new this(r, t)
}, 'tokenizer')
Object.defineProperties(ve.prototype, ut)
var Ne = ve.prototype,
	Qs = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/
Ne.strictDirective = function (e) {
	for (;;) {
		;(Ve.lastIndex = e), (e += Ve.exec(this.input)[0].length)
		var t = Qs.exec(this.input.slice(e))
		if (!t) return !1
		if ((t[1] || t[2]) === 'use strict') {
			Ve.lastIndex = e + t[0].length
			var r = Ve.exec(this.input),
				n = r.index + r[0].length,
				i = this.input.charAt(n)
			return (
				i === ';' ||
				i === '}' ||
				(Re.test(r[0]) &&
					!(/[(`.[+\-/*%<>=,?^&]/.test(i) || (i === '!' && this.input.charAt(n + 1) === '=')))
			)
		}
		;(e += t[0].length),
			(Ve.lastIndex = e),
			(e += Ve.exec(this.input)[0].length),
			this.input[e] === ';' && e++
	}
}
Ne.eat = function (e) {
	return this.type === e ? (this.next(), !0) : !1
}
Ne.isContextual = function (e) {
	return this.type === d.name && this.value === e && !this.containsEsc
}
Ne.eatContextual = function (e) {
	return this.isContextual(e) ? (this.next(), !0) : !1
}
Ne.expectContextual = function (e) {
	this.eatContextual(e) || this.unexpected()
}
Ne.canInsertSemicolon = function () {
	return (
		this.type === d.eof ||
		this.type === d.braceR ||
		Re.test(this.input.slice(this.lastTokEnd, this.start))
	)
}
Ne.insertSemicolon = function () {
	if (this.canInsertSemicolon())
		return (
			this.options.onInsertedSemicolon &&
				this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc),
			!0
		)
}
Ne.semicolon = function () {
	!this.eat(d.semi) && !this.insertSemicolon() && this.unexpected()
}
Ne.afterTrailingComma = function (e, t) {
	if (this.type === e)
		return (
			this.options.onTrailingComma &&
				this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc),
			t || this.next(),
			!0
		)
}
Ne.expect = function (e) {
	this.eat(e) || this.unexpected()
}
Ne.unexpected = function (e) {
	this.raise(e != null ? e : this.start, 'Unexpected token')
}
function Xt() {
	this.shorthandAssign =
		this.trailingComma =
		this.parenthesizedAssign =
		this.parenthesizedBind =
		this.doubleProto =
			-1
}
u(Xt, 'DestructuringErrors')
Ne.checkPatternErrors = function (e, t) {
	if (!!e) {
		e.trailingComma > -1 &&
			this.raiseRecoverable(e.trailingComma, 'Comma is not permitted after the rest element')
		var r = t ? e.parenthesizedAssign : e.parenthesizedBind
		r > -1 && this.raiseRecoverable(r, 'Parenthesized pattern')
	}
}
Ne.checkExpressionErrors = function (e, t) {
	if (!e) return !1
	var r = e.shorthandAssign,
		n = e.doubleProto
	if (!t) return r >= 0 || n >= 0
	r >= 0 &&
		this.raise(r, 'Shorthand property assignments are valid only in destructuring patterns'),
		n >= 0 && this.raiseRecoverable(n, 'Redefinition of __proto__ property')
}
Ne.checkYieldAwaitInDefaultParams = function () {
	this.yieldPos &&
		(!this.awaitPos || this.yieldPos < this.awaitPos) &&
		this.raise(this.yieldPos, 'Yield expression cannot be a default value'),
		this.awaitPos && this.raise(this.awaitPos, 'Await expression cannot be a default value')
}
Ne.isSimpleAssignTarget = function (e) {
	return e.type === 'ParenthesizedExpression'
		? this.isSimpleAssignTarget(e.expression)
		: e.type === 'Identifier' || e.type === 'MemberExpression'
}
var se = ve.prototype
se.parseTopLevel = function (e) {
	var t = {}
	for (e.body || (e.body = []); this.type !== d.eof; ) {
		var r = this.parseStatement(null, !0, t)
		e.body.push(r)
	}
	if (this.inModule)
		for (var n = 0, i = Object.keys(this.undefinedExports); n < i.length; n += 1) {
			var s = i[n]
			this.raiseRecoverable(this.undefinedExports[s].start, "Export '" + s + "' is not defined")
		}
	return (
		this.adaptDirectivePrologue(e.body),
		this.next(),
		(e.sourceType = this.options.sourceType),
		this.finishNode(e, 'Program')
	)
}
var Vr = { kind: 'loop' },
	Ks = { kind: 'switch' }
se.isLet = function (e) {
	if (this.options.ecmaVersion < 6 || !this.isContextual('let')) return !1
	Ve.lastIndex = this.pos
	var t = Ve.exec(this.input),
		r = this.pos + t[0].length,
		n = this.input.charCodeAt(r)
	if (n === 91) return !0
	if (e) return !1
	if (n === 123) return !0
	if (Ke(n, !0)) {
		for (var i = r + 1; it(this.input.charCodeAt(i), !0); ) ++i
		var s = this.input.slice(r, i)
		if (!qs.test(s)) return !0
	}
	return !1
}
se.isAsyncFunction = function () {
	if (this.options.ecmaVersion < 8 || !this.isContextual('async')) return !1
	Ve.lastIndex = this.pos
	var e = Ve.exec(this.input),
		t = this.pos + e[0].length
	return (
		!Re.test(this.input.slice(this.pos, t)) &&
		this.input.slice(t, t + 8) === 'function' &&
		(t + 8 === this.input.length || !it(this.input.charAt(t + 8)))
	)
}
se.parseStatement = function (e, t, r) {
	var n = this.type,
		i = this.startNode(),
		s
	switch ((this.isLet(e) && ((n = d._var), (s = 'let')), n)) {
		case d._break:
		case d._continue:
			return this.parseBreakContinueStatement(i, n.keyword)
		case d._debugger:
			return this.parseDebuggerStatement(i)
		case d._do:
			return this.parseDoStatement(i)
		case d._for:
			return this.parseForStatement(i)
		case d._function:
			return (
				e &&
					(this.strict || (e !== 'if' && e !== 'label')) &&
					this.options.ecmaVersion >= 6 &&
					this.unexpected(),
				this.parseFunctionStatement(i, !1, !e)
			)
		case d._class:
			return e && this.unexpected(), this.parseClass(i, !0)
		case d._if:
			return this.parseIfStatement(i)
		case d._return:
			return this.parseReturnStatement(i)
		case d._switch:
			return this.parseSwitchStatement(i)
		case d._throw:
			return this.parseThrowStatement(i)
		case d._try:
			return this.parseTryStatement(i)
		case d._const:
		case d._var:
			return (
				(s = s || this.value), e && s !== 'var' && this.unexpected(), this.parseVarStatement(i, s)
			)
		case d._while:
			return this.parseWhileStatement(i)
		case d._with:
			return this.parseWithStatement(i)
		case d.braceL:
			return this.parseBlock(!0, i)
		case d.semi:
			return this.parseEmptyStatement(i)
		case d._export:
		case d._import:
			if (this.options.ecmaVersion > 10 && n === d._import) {
				Ve.lastIndex = this.pos
				var o = Ve.exec(this.input),
					c = this.pos + o[0].length,
					h = this.input.charCodeAt(c)
				if (h === 40 || h === 46) return this.parseExpressionStatement(i, this.parseExpression())
			}
			return (
				this.options.allowImportExportEverywhere ||
					(t || this.raise(this.start, "'import' and 'export' may only appear at the top level"),
					this.inModule ||
						this.raise(
							this.start,
							"'import' and 'export' may appear only with 'sourceType: module'",
						)),
				n === d._import ? this.parseImport(i) : this.parseExport(i, r)
			)
		default:
			if (this.isAsyncFunction())
				return e && this.unexpected(), this.next(), this.parseFunctionStatement(i, !0, !e)
			var g = this.value,
				D = this.parseExpression()
			return n === d.name && D.type === 'Identifier' && this.eat(d.colon)
				? this.parseLabeledStatement(i, g, D, e)
				: this.parseExpressionStatement(i, D)
	}
}
se.parseBreakContinueStatement = function (e, t) {
	var r = t === 'break'
	this.next(),
		this.eat(d.semi) || this.insertSemicolon()
			? (e.label = null)
			: this.type !== d.name
			  ? this.unexpected()
			  : ((e.label = this.parseIdent()), this.semicolon())
	for (var n = 0; n < this.labels.length; ++n) {
		var i = this.labels[n]
		if (
			(e.label == null || i.name === e.label.name) &&
			((i.kind != null && (r || i.kind === 'loop')) || (e.label && r))
		)
			break
	}
	return (
		n === this.labels.length && this.raise(e.start, 'Unsyntactic ' + t),
		this.finishNode(e, r ? 'BreakStatement' : 'ContinueStatement')
	)
}
se.parseDebuggerStatement = function (e) {
	return this.next(), this.semicolon(), this.finishNode(e, 'DebuggerStatement')
}
se.parseDoStatement = function (e) {
	return (
		this.next(),
		this.labels.push(Vr),
		(e.body = this.parseStatement('do')),
		this.labels.pop(),
		this.expect(d._while),
		(e.test = this.parseParenExpression()),
		this.options.ecmaVersion >= 6 ? this.eat(d.semi) : this.semicolon(),
		this.finishNode(e, 'DoWhileStatement')
	)
}
se.parseForStatement = function (e) {
	this.next()
	var t =
		this.options.ecmaVersion >= 9 &&
		(this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
		this.eatContextual('await')
			? this.lastTokStart
			: -1
	if ((this.labels.push(Vr), this.enterScope(0), this.expect(d.parenL), this.type === d.semi))
		return t > -1 && this.unexpected(t), this.parseFor(e, null)
	var r = this.isLet()
	if (this.type === d._var || this.type === d._const || r) {
		var n = this.startNode(),
			i = r ? 'let' : this.value
		return (
			this.next(),
			this.parseVar(n, !0, i),
			this.finishNode(n, 'VariableDeclaration'),
			(this.type === d._in || (this.options.ecmaVersion >= 6 && this.isContextual('of'))) &&
			n.declarations.length === 1
				? (this.options.ecmaVersion >= 9 &&
						(this.type === d._in ? t > -1 && this.unexpected(t) : (e.await = t > -1)),
				  this.parseForIn(e, n))
				: (t > -1 && this.unexpected(t), this.parseFor(e, n))
		)
	}
	var s = new Xt(),
		o = this.parseExpression(!0, s)
	return this.type === d._in || (this.options.ecmaVersion >= 6 && this.isContextual('of'))
		? (this.options.ecmaVersion >= 9 &&
				(this.type === d._in ? t > -1 && this.unexpected(t) : (e.await = t > -1)),
		  this.toAssignable(o, !1, s),
		  this.checkLVal(o),
		  this.parseForIn(e, o))
		: (this.checkExpressionErrors(s, !0), t > -1 && this.unexpected(t), this.parseFor(e, o))
}
se.parseFunctionStatement = function (e, t, r) {
	return this.next(), this.parseFunction(e, Bt | (r ? 0 : yr), !1, t)
}
se.parseIfStatement = function (e) {
	return (
		this.next(),
		(e.test = this.parseParenExpression()),
		(e.consequent = this.parseStatement('if')),
		(e.alternate = this.eat(d._else) ? this.parseStatement('if') : null),
		this.finishNode(e, 'IfStatement')
	)
}
se.parseReturnStatement = function (e) {
	return (
		!this.inFunction &&
			!this.options.allowReturnOutsideFunction &&
			this.raise(this.start, "'return' outside of function"),
		this.next(),
		this.eat(d.semi) || this.insertSemicolon()
			? (e.argument = null)
			: ((e.argument = this.parseExpression()), this.semicolon()),
		this.finishNode(e, 'ReturnStatement')
	)
}
se.parseSwitchStatement = function (e) {
	this.next(),
		(e.discriminant = this.parseParenExpression()),
		(e.cases = []),
		this.expect(d.braceL),
		this.labels.push(Ks),
		this.enterScope(0)
	for (var t, r = !1; this.type !== d.braceR; )
		if (this.type === d._case || this.type === d._default) {
			var n = this.type === d._case
			t && this.finishNode(t, 'SwitchCase'),
				e.cases.push((t = this.startNode())),
				(t.consequent = []),
				this.next(),
				n
					? (t.test = this.parseExpression())
					: (r && this.raiseRecoverable(this.lastTokStart, 'Multiple default clauses'),
					  (r = !0),
					  (t.test = null)),
				this.expect(d.colon)
		} else t || this.unexpected(), t.consequent.push(this.parseStatement(null))
	return (
		this.exitScope(),
		t && this.finishNode(t, 'SwitchCase'),
		this.next(),
		this.labels.pop(),
		this.finishNode(e, 'SwitchStatement')
	)
}
se.parseThrowStatement = function (e) {
	return (
		this.next(),
		Re.test(this.input.slice(this.lastTokEnd, this.start)) &&
			this.raise(this.lastTokEnd, 'Illegal newline after throw'),
		(e.argument = this.parseExpression()),
		this.semicolon(),
		this.finishNode(e, 'ThrowStatement')
	)
}
var Xs = []
se.parseTryStatement = function (e) {
	if ((this.next(), (e.block = this.parseBlock()), (e.handler = null), this.type === d._catch)) {
		var t = this.startNode()
		if ((this.next(), this.eat(d.parenL))) {
			t.param = this.parseBindingAtom()
			var r = t.param.type === 'Identifier'
			this.enterScope(r ? Fi : 0), this.checkLVal(t.param, r ? Bi : Qe), this.expect(d.parenR)
		} else this.options.ecmaVersion < 10 && this.unexpected(), (t.param = null), this.enterScope(0)
		;(t.body = this.parseBlock(!1)),
			this.exitScope(),
			(e.handler = this.finishNode(t, 'CatchClause'))
	}
	return (
		(e.finalizer = this.eat(d._finally) ? this.parseBlock() : null),
		!e.handler && !e.finalizer && this.raise(e.start, 'Missing catch or finally clause'),
		this.finishNode(e, 'TryStatement')
	)
}
se.parseVarStatement = function (e, t) {
	return (
		this.next(),
		this.parseVar(e, !1, t),
		this.semicolon(),
		this.finishNode(e, 'VariableDeclaration')
	)
}
se.parseWhileStatement = function (e) {
	return (
		this.next(),
		(e.test = this.parseParenExpression()),
		this.labels.push(Vr),
		(e.body = this.parseStatement('while')),
		this.labels.pop(),
		this.finishNode(e, 'WhileStatement')
	)
}
se.parseWithStatement = function (e) {
	return (
		this.strict && this.raise(this.start, "'with' in strict mode"),
		this.next(),
		(e.object = this.parseParenExpression()),
		(e.body = this.parseStatement('with')),
		this.finishNode(e, 'WithStatement')
	)
}
se.parseEmptyStatement = function (e) {
	return this.next(), this.finishNode(e, 'EmptyStatement')
}
se.parseLabeledStatement = function (e, t, r, n) {
	for (var i = 0, s = this.labels; i < s.length; i += 1) {
		var o = s[i]
		o.name === t && this.raise(r.start, "Label '" + t + "' is already declared")
	}
	for (
		var c = this.type.isLoop ? 'loop' : this.type === d._switch ? 'switch' : null,
			h = this.labels.length - 1;
		h >= 0;
		h--
	) {
		var g = this.labels[h]
		if (g.statementStart === e.start) (g.statementStart = this.start), (g.kind = c)
		else break
	}
	return (
		this.labels.push({ name: t, kind: c, statementStart: this.start }),
		(e.body = this.parseStatement(n ? (n.indexOf('label') === -1 ? n + 'label' : n) : 'label')),
		this.labels.pop(),
		(e.label = r),
		this.finishNode(e, 'LabeledStatement')
	)
}
se.parseExpressionStatement = function (e, t) {
	return (e.expression = t), this.semicolon(), this.finishNode(e, 'ExpressionStatement')
}
se.parseBlock = function (e, t, r) {
	for (
		e === void 0 && (e = !0),
			t === void 0 && (t = this.startNode()),
			t.body = [],
			this.expect(d.braceL),
			e && this.enterScope(0);
		this.type !== d.braceR;

	) {
		var n = this.parseStatement(null)
		t.body.push(n)
	}
	return (
		r && (this.strict = !1),
		this.next(),
		e && this.exitScope(),
		this.finishNode(t, 'BlockStatement')
	)
}
se.parseFor = function (e, t) {
	return (
		(e.init = t),
		this.expect(d.semi),
		(e.test = this.type === d.semi ? null : this.parseExpression()),
		this.expect(d.semi),
		(e.update = this.type === d.parenR ? null : this.parseExpression()),
		this.expect(d.parenR),
		(e.body = this.parseStatement('for')),
		this.exitScope(),
		this.labels.pop(),
		this.finishNode(e, 'ForStatement')
	)
}
se.parseForIn = function (e, t) {
	var r = this.type === d._in
	return (
		this.next(),
		t.type === 'VariableDeclaration' &&
		t.declarations[0].init != null &&
		(!r ||
			this.options.ecmaVersion < 8 ||
			this.strict ||
			t.kind !== 'var' ||
			t.declarations[0].id.type !== 'Identifier')
			? this.raise(
					t.start,
					(r ? 'for-in' : 'for-of') + ' loop variable declaration may not have an initializer',
			  )
			: t.type === 'AssignmentPattern' && this.raise(t.start, 'Invalid left-hand side in for-loop'),
		(e.left = t),
		(e.right = r ? this.parseExpression() : this.parseMaybeAssign()),
		this.expect(d.parenR),
		(e.body = this.parseStatement('for')),
		this.exitScope(),
		this.labels.pop(),
		this.finishNode(e, r ? 'ForInStatement' : 'ForOfStatement')
	)
}
se.parseVar = function (e, t, r) {
	for (e.declarations = [], e.kind = r; ; ) {
		var n = this.startNode()
		if (
			(this.parseVarId(n, r),
			this.eat(d.eq)
				? (n.init = this.parseMaybeAssign(t))
				: r === 'const' &&
				    !(this.type === d._in || (this.options.ecmaVersion >= 6 && this.isContextual('of')))
				  ? this.unexpected()
				  : n.id.type !== 'Identifier' && !(t && (this.type === d._in || this.isContextual('of')))
				    ? this.raise(
								this.lastTokEnd,
								'Complex binding patterns require an initialization value',
				      )
				    : (n.init = null),
			e.declarations.push(this.finishNode(n, 'VariableDeclarator')),
			!this.eat(d.comma))
		)
			break
	}
	return e
}
se.parseVarId = function (e, t) {
	;(e.id = this.parseBindingAtom()), this.checkLVal(e.id, t === 'var' ? jr : Qe, !1)
}
var Bt = 1,
	yr = 2,
	Ti = 4
se.parseFunction = function (e, t, r, n) {
	this.initFunction(e),
		(this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !n)) &&
			(this.type === d.star && t & yr && this.unexpected(), (e.generator = this.eat(d.star))),
		this.options.ecmaVersion >= 8 && (e.async = !!n),
		t & Bt &&
			((e.id = t & Ti && this.type !== d.name ? null : this.parseIdent()),
			e.id &&
				!(t & yr) &&
				this.checkLVal(
					e.id,
					this.strict || e.generator || e.async ? (this.treatFunctionsAsVar ? jr : Qe) : _i,
				))
	var i = this.yieldPos,
		s = this.awaitPos,
		o = this.awaitIdentPos
	return (
		(this.yieldPos = 0),
		(this.awaitPos = 0),
		(this.awaitIdentPos = 0),
		this.enterScope(Mr(e.async, e.generator)),
		t & Bt || (e.id = this.type === d.name ? this.parseIdent() : null),
		this.parseFunctionParams(e),
		this.parseFunctionBody(e, r, !1),
		(this.yieldPos = i),
		(this.awaitPos = s),
		(this.awaitIdentPos = o),
		this.finishNode(e, t & Bt ? 'FunctionDeclaration' : 'FunctionExpression')
	)
}
se.parseFunctionParams = function (e) {
	this.expect(d.parenL),
		(e.params = this.parseBindingList(d.parenR, !1, this.options.ecmaVersion >= 8)),
		this.checkYieldAwaitInDefaultParams()
}
se.parseClass = function (e, t) {
	this.next()
	var r = this.strict
	;(this.strict = !0), this.parseClassId(e, t), this.parseClassSuper(e)
	var n = this.startNode(),
		i = !1
	for (n.body = [], this.expect(d.braceL); this.type !== d.braceR; ) {
		var s = this.parseClassElement(e.superClass !== null)
		s &&
			(n.body.push(s),
			s.type === 'MethodDefinition' &&
				s.kind === 'constructor' &&
				(i && this.raise(s.start, 'Duplicate constructor in the same class'), (i = !0)))
	}
	return (
		(this.strict = r),
		this.next(),
		(e.body = this.finishNode(n, 'ClassBody')),
		this.finishNode(e, t ? 'ClassDeclaration' : 'ClassExpression')
	)
}
se.parseClassElement = function (e) {
	var t = this
	if (this.eat(d.semi)) return null
	var r = this.startNode(),
		n = u(function (h, g) {
			g === void 0 && (g = !1)
			var D = t.start,
				x = t.startLoc
			return t.eatContextual(h)
				? t.type !== d.parenL && (!g || !t.canInsertSemicolon())
					? !0
					: (r.key && t.unexpected(),
					  (r.computed = !1),
					  (r.key = t.startNodeAt(D, x)),
					  (r.key.name = h),
					  t.finishNode(r.key, 'Identifier'),
					  !1)
				: !1
		}, 'tryContextual')
	;(r.kind = 'method'), (r.static = n('static'))
	var i = this.eat(d.star),
		s = !1
	i ||
		(this.options.ecmaVersion >= 8 && n('async', !0)
			? ((s = !0), (i = this.options.ecmaVersion >= 9 && this.eat(d.star)))
			: n('get')
			  ? (r.kind = 'get')
			  : n('set') && (r.kind = 'set')),
		r.key || this.parsePropertyName(r)
	var o = r.key,
		c = !1
	return (
		!r.computed &&
		!r.static &&
		((o.type === 'Identifier' && o.name === 'constructor') ||
			(o.type === 'Literal' && o.value === 'constructor'))
			? (r.kind !== 'method' && this.raise(o.start, "Constructor can't have get/set modifier"),
			  i && this.raise(o.start, "Constructor can't be a generator"),
			  s && this.raise(o.start, "Constructor can't be an async method"),
			  (r.kind = 'constructor'),
			  (c = e))
			: r.static &&
			  o.type === 'Identifier' &&
			  o.name === 'prototype' &&
			  this.raise(o.start, 'Classes may not have a static property named prototype'),
		this.parseClassMethod(r, i, s, c),
		r.kind === 'get' &&
			r.value.params.length !== 0 &&
			this.raiseRecoverable(r.value.start, 'getter should have no params'),
		r.kind === 'set' &&
			r.value.params.length !== 1 &&
			this.raiseRecoverable(r.value.start, 'setter should have exactly one param'),
		r.kind === 'set' &&
			r.value.params[0].type === 'RestElement' &&
			this.raiseRecoverable(r.value.params[0].start, 'Setter cannot use rest params'),
		r
	)
}
se.parseClassMethod = function (e, t, r, n) {
	return (e.value = this.parseMethod(t, r, n)), this.finishNode(e, 'MethodDefinition')
}
se.parseClassId = function (e, t) {
	this.type === d.name
		? ((e.id = this.parseIdent()), t && this.checkLVal(e.id, Qe, !1))
		: (t === !0 && this.unexpected(), (e.id = null))
}
se.parseClassSuper = function (e) {
	e.superClass = this.eat(d._extends) ? this.parseExprSubscripts() : null
}
se.parseExport = function (e, t) {
	if ((this.next(), this.eat(d.star)))
		return (
			this.options.ecmaVersion >= 11 &&
				(this.eatContextual('as')
					? ((e.exported = this.parseIdent(!0)),
					  this.checkExport(t, e.exported.name, this.lastTokStart))
					: (e.exported = null)),
			this.expectContextual('from'),
			this.type !== d.string && this.unexpected(),
			(e.source = this.parseExprAtom()),
			this.semicolon(),
			this.finishNode(e, 'ExportAllDeclaration')
		)
	if (this.eat(d._default)) {
		this.checkExport(t, 'default', this.lastTokStart)
		var r
		if (this.type === d._function || (r = this.isAsyncFunction())) {
			var n = this.startNode()
			this.next(), r && this.next(), (e.declaration = this.parseFunction(n, Bt | Ti, !1, r))
		} else if (this.type === d._class) {
			var i = this.startNode()
			e.declaration = this.parseClass(i, 'nullableID')
		} else (e.declaration = this.parseMaybeAssign()), this.semicolon()
		return this.finishNode(e, 'ExportDefaultDeclaration')
	}
	if (this.shouldParseExportStatement())
		(e.declaration = this.parseStatement(null)),
			e.declaration.type === 'VariableDeclaration'
				? this.checkVariableExport(t, e.declaration.declarations)
				: this.checkExport(t, e.declaration.id.name, e.declaration.id.start),
			(e.specifiers = []),
			(e.source = null)
	else {
		if (
			((e.declaration = null),
			(e.specifiers = this.parseExportSpecifiers(t)),
			this.eatContextual('from'))
		)
			this.type !== d.string && this.unexpected(), (e.source = this.parseExprAtom())
		else {
			for (var s = 0, o = e.specifiers; s < o.length; s += 1) {
				var c = o[s]
				this.checkUnreserved(c.local), this.checkLocalExport(c.local)
			}
			e.source = null
		}
		this.semicolon()
	}
	return this.finishNode(e, 'ExportNamedDeclaration')
}
se.checkExport = function (e, t, r) {
	!e || (Kt(e, t) && this.raiseRecoverable(r, "Duplicate export '" + t + "'"), (e[t] = !0))
}
se.checkPatternExport = function (e, t) {
	var r = t.type
	if (r === 'Identifier') this.checkExport(e, t.name, t.start)
	else if (r === 'ObjectPattern')
		for (var n = 0, i = t.properties; n < i.length; n += 1) {
			var s = i[n]
			this.checkPatternExport(e, s)
		}
	else if (r === 'ArrayPattern')
		for (var o = 0, c = t.elements; o < c.length; o += 1) {
			var h = c[o]
			h && this.checkPatternExport(e, h)
		}
	else
		r === 'Property'
			? this.checkPatternExport(e, t.value)
			: r === 'AssignmentPattern'
			  ? this.checkPatternExport(e, t.left)
			  : r === 'RestElement'
			    ? this.checkPatternExport(e, t.argument)
			    : r === 'ParenthesizedExpression' && this.checkPatternExport(e, t.expression)
}
se.checkVariableExport = function (e, t) {
	if (!!e)
		for (var r = 0, n = t; r < n.length; r += 1) {
			var i = n[r]
			this.checkPatternExport(e, i.id)
		}
}
se.shouldParseExportStatement = function () {
	return (
		this.type.keyword === 'var' ||
		this.type.keyword === 'const' ||
		this.type.keyword === 'class' ||
		this.type.keyword === 'function' ||
		this.isLet() ||
		this.isAsyncFunction()
	)
}
se.parseExportSpecifiers = function (e) {
	var t = [],
		r = !0
	for (this.expect(d.braceL); !this.eat(d.braceR); ) {
		if (r) r = !1
		else if ((this.expect(d.comma), this.afterTrailingComma(d.braceR))) break
		var n = this.startNode()
		;(n.local = this.parseIdent(!0)),
			(n.exported = this.eatContextual('as') ? this.parseIdent(!0) : n.local),
			this.checkExport(e, n.exported.name, n.exported.start),
			t.push(this.finishNode(n, 'ExportSpecifier'))
	}
	return t
}
se.parseImport = function (e) {
	return (
		this.next(),
		this.type === d.string
			? ((e.specifiers = Xs), (e.source = this.parseExprAtom()))
			: ((e.specifiers = this.parseImportSpecifiers()),
			  this.expectContextual('from'),
			  (e.source = this.type === d.string ? this.parseExprAtom() : this.unexpected())),
		this.semicolon(),
		this.finishNode(e, 'ImportDeclaration')
	)
}
se.parseImportSpecifiers = function () {
	var e = [],
		t = !0
	if (this.type === d.name) {
		var r = this.startNode()
		if (
			((r.local = this.parseIdent()),
			this.checkLVal(r.local, Qe),
			e.push(this.finishNode(r, 'ImportDefaultSpecifier')),
			!this.eat(d.comma))
		)
			return e
	}
	if (this.type === d.star) {
		var n = this.startNode()
		return (
			this.next(),
			this.expectContextual('as'),
			(n.local = this.parseIdent()),
			this.checkLVal(n.local, Qe),
			e.push(this.finishNode(n, 'ImportNamespaceSpecifier')),
			e
		)
	}
	for (this.expect(d.braceL); !this.eat(d.braceR); ) {
		if (t) t = !1
		else if ((this.expect(d.comma), this.afterTrailingComma(d.braceR))) break
		var i = this.startNode()
		;(i.imported = this.parseIdent(!0)),
			this.eatContextual('as')
				? (i.local = this.parseIdent())
				: (this.checkUnreserved(i.imported), (i.local = i.imported)),
			this.checkLVal(i.local, Qe),
			e.push(this.finishNode(i, 'ImportSpecifier'))
	}
	return e
}
se.adaptDirectivePrologue = function (e) {
	for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
		e[t].directive = e[t].expression.raw.slice(1, -1)
}
se.isDirectiveCandidate = function (e) {
	return (
		e.type === 'ExpressionStatement' &&
		e.expression.type === 'Literal' &&
		typeof e.expression.value == 'string' &&
		(this.input[e.start] === '"' || this.input[e.start] === "'")
	)
}
var Xe = ve.prototype
Xe.toAssignable = function (e, t, r) {
	if (this.options.ecmaVersion >= 6 && e)
		switch (e.type) {
			case 'Identifier':
				this.inAsync &&
					e.name === 'await' &&
					this.raise(e.start, "Cannot use 'await' as identifier inside an async function")
				break
			case 'ObjectPattern':
			case 'ArrayPattern':
			case 'RestElement':
				break
			case 'ObjectExpression':
				;(e.type = 'ObjectPattern'), r && this.checkPatternErrors(r, !0)
				for (var n = 0, i = e.properties; n < i.length; n += 1) {
					var s = i[n]
					this.toAssignable(s, t),
						s.type === 'RestElement' &&
							(s.argument.type === 'ArrayPattern' || s.argument.type === 'ObjectPattern') &&
							this.raise(s.argument.start, 'Unexpected token')
				}
				break
			case 'Property':
				e.kind !== 'init' &&
					this.raise(e.key.start, "Object pattern can't contain getter or setter"),
					this.toAssignable(e.value, t)
				break
			case 'ArrayExpression':
				;(e.type = 'ArrayPattern'),
					r && this.checkPatternErrors(r, !0),
					this.toAssignableList(e.elements, t)
				break
			case 'SpreadElement':
				;(e.type = 'RestElement'),
					this.toAssignable(e.argument, t),
					e.argument.type === 'AssignmentPattern' &&
						this.raise(e.argument.start, 'Rest elements cannot have a default value')
				break
			case 'AssignmentExpression':
				e.operator !== '=' &&
					this.raise(e.left.end, "Only '=' operator can be used for specifying default value."),
					(e.type = 'AssignmentPattern'),
					delete e.operator,
					this.toAssignable(e.left, t)
			case 'AssignmentPattern':
				break
			case 'ParenthesizedExpression':
				this.toAssignable(e.expression, t, r)
				break
			case 'ChainExpression':
				this.raiseRecoverable(e.start, 'Optional chaining cannot appear in left-hand side')
				break
			case 'MemberExpression':
				if (!t) break
			default:
				this.raise(e.start, 'Assigning to rvalue')
		}
	else r && this.checkPatternErrors(r, !0)
	return e
}
Xe.toAssignableList = function (e, t) {
	for (var r = e.length, n = 0; n < r; n++) {
		var i = e[n]
		i && this.toAssignable(i, t)
	}
	if (r) {
		var s = e[r - 1]
		this.options.ecmaVersion === 6 &&
			t &&
			s &&
			s.type === 'RestElement' &&
			s.argument.type !== 'Identifier' &&
			this.unexpected(s.argument.start)
	}
	return e
}
Xe.parseSpread = function (e) {
	var t = this.startNode()
	return (
		this.next(), (t.argument = this.parseMaybeAssign(!1, e)), this.finishNode(t, 'SpreadElement')
	)
}
Xe.parseRestBinding = function () {
	var e = this.startNode()
	return (
		this.next(),
		this.options.ecmaVersion === 6 && this.type !== d.name && this.unexpected(),
		(e.argument = this.parseBindingAtom()),
		this.finishNode(e, 'RestElement')
	)
}
Xe.parseBindingAtom = function () {
	if (this.options.ecmaVersion >= 6)
		switch (this.type) {
			case d.bracketL:
				var e = this.startNode()
				return (
					this.next(),
					(e.elements = this.parseBindingList(d.bracketR, !0, !0)),
					this.finishNode(e, 'ArrayPattern')
				)
			case d.braceL:
				return this.parseObj(!0)
		}
	return this.parseIdent()
}
Xe.parseBindingList = function (e, t, r) {
	for (var n = [], i = !0; !this.eat(e); )
		if ((i ? (i = !1) : this.expect(d.comma), t && this.type === d.comma)) n.push(null)
		else {
			if (r && this.afterTrailingComma(e)) break
			if (this.type === d.ellipsis) {
				var s = this.parseRestBinding()
				this.parseBindingListItem(s),
					n.push(s),
					this.type === d.comma &&
						this.raise(this.start, 'Comma is not permitted after the rest element'),
					this.expect(e)
				break
			} else {
				var o = this.parseMaybeDefault(this.start, this.startLoc)
				this.parseBindingListItem(o), n.push(o)
			}
		}
	return n
}
Xe.parseBindingListItem = function (e) {
	return e
}
Xe.parseMaybeDefault = function (e, t, r) {
	if (((r = r || this.parseBindingAtom()), this.options.ecmaVersion < 6 || !this.eat(d.eq)))
		return r
	var n = this.startNodeAt(e, t)
	return (n.left = r), (n.right = this.parseMaybeAssign()), this.finishNode(n, 'AssignmentPattern')
}
Xe.checkLVal = function (e, t, r) {
	switch ((t === void 0 && (t = bn), e.type)) {
		case 'Identifier':
			t === Qe &&
				e.name === 'let' &&
				this.raiseRecoverable(e.start, 'let is disallowed as a lexically bound name'),
				this.strict &&
					this.reservedWordsStrictBind.test(e.name) &&
					this.raiseRecoverable(
						e.start,
						(t ? 'Binding ' : 'Assigning to ') + e.name + ' in strict mode',
					),
				r &&
					(Kt(r, e.name) && this.raiseRecoverable(e.start, 'Argument name clash'),
					(r[e.name] = !0)),
				t !== bn && t !== wi && this.declareName(e.name, t, e.start)
			break
		case 'ChainExpression':
			this.raiseRecoverable(e.start, 'Optional chaining cannot appear in left-hand side')
			break
		case 'MemberExpression':
			t && this.raiseRecoverable(e.start, 'Binding member expression')
			break
		case 'ObjectPattern':
			for (var n = 0, i = e.properties; n < i.length; n += 1) {
				var s = i[n]
				this.checkLVal(s, t, r)
			}
			break
		case 'Property':
			this.checkLVal(e.value, t, r)
			break
		case 'ArrayPattern':
			for (var o = 0, c = e.elements; o < c.length; o += 1) {
				var h = c[o]
				h && this.checkLVal(h, t, r)
			}
			break
		case 'AssignmentPattern':
			this.checkLVal(e.left, t, r)
			break
		case 'RestElement':
			this.checkLVal(e.argument, t, r)
			break
		case 'ParenthesizedExpression':
			this.checkLVal(e.expression, t, r)
			break
		default:
			this.raise(e.start, (t ? 'Binding' : 'Assigning to') + ' rvalue')
	}
}
var oe = ve.prototype
oe.checkPropClash = function (e, t, r) {
	if (
		!(this.options.ecmaVersion >= 9 && e.type === 'SpreadElement') &&
		!(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))
	) {
		var n = e.key,
			i
		switch (n.type) {
			case 'Identifier':
				i = n.name
				break
			case 'Literal':
				i = String(n.value)
				break
			default:
				return
		}
		var s = e.kind
		if (this.options.ecmaVersion >= 6) {
			i === '__proto__' &&
				s === 'init' &&
				(t.proto &&
					(r
						? r.doubleProto < 0 && (r.doubleProto = n.start)
						: this.raiseRecoverable(n.start, 'Redefinition of __proto__ property')),
				(t.proto = !0))
			return
		}
		i = '$' + i
		var o = t[i]
		if (o) {
			var c
			s === 'init' ? (c = (this.strict && o.init) || o.get || o.set) : (c = o.init || o[s]),
				c && this.raiseRecoverable(n.start, 'Redefinition of property')
		} else o = t[i] = { init: !1, get: !1, set: !1 }
		o[s] = !0
	}
}
oe.parseExpression = function (e, t) {
	var r = this.start,
		n = this.startLoc,
		i = this.parseMaybeAssign(e, t)
	if (this.type === d.comma) {
		var s = this.startNodeAt(r, n)
		for (s.expressions = [i]; this.eat(d.comma); ) s.expressions.push(this.parseMaybeAssign(e, t))
		return this.finishNode(s, 'SequenceExpression')
	}
	return i
}
oe.parseMaybeAssign = function (e, t, r) {
	if (this.isContextual('yield')) {
		if (this.inGenerator) return this.parseYield(e)
		this.exprAllowed = !1
	}
	var n = !1,
		i = -1,
		s = -1
	t
		? ((i = t.parenthesizedAssign),
		  (s = t.trailingComma),
		  (t.parenthesizedAssign = t.trailingComma = -1))
		: ((t = new Xt()), (n = !0))
	var o = this.start,
		c = this.startLoc
	;(this.type === d.parenL || this.type === d.name) && (this.potentialArrowAt = this.start)
	var h = this.parseMaybeConditional(e, t)
	if ((r && (h = r.call(this, h, o, c)), this.type.isAssign)) {
		var g = this.startNodeAt(o, c)
		return (
			(g.operator = this.value),
			(g.left = this.type === d.eq ? this.toAssignable(h, !1, t) : h),
			n || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1),
			t.shorthandAssign >= g.left.start && (t.shorthandAssign = -1),
			this.checkLVal(h),
			this.next(),
			(g.right = this.parseMaybeAssign(e)),
			this.finishNode(g, 'AssignmentExpression')
		)
	} else n && this.checkExpressionErrors(t, !0)
	return i > -1 && (t.parenthesizedAssign = i), s > -1 && (t.trailingComma = s), h
}
oe.parseMaybeConditional = function (e, t) {
	var r = this.start,
		n = this.startLoc,
		i = this.parseExprOps(e, t)
	if (this.checkExpressionErrors(t)) return i
	if (this.eat(d.question)) {
		var s = this.startNodeAt(r, n)
		return (
			(s.test = i),
			(s.consequent = this.parseMaybeAssign()),
			this.expect(d.colon),
			(s.alternate = this.parseMaybeAssign(e)),
			this.finishNode(s, 'ConditionalExpression')
		)
	}
	return i
}
oe.parseExprOps = function (e, t) {
	var r = this.start,
		n = this.startLoc,
		i = this.parseMaybeUnary(t, !1)
	return this.checkExpressionErrors(t) || (i.start === r && i.type === 'ArrowFunctionExpression')
		? i
		: this.parseExprOp(i, r, n, -1, e)
}
oe.parseExprOp = function (e, t, r, n, i) {
	var s = this.type.binop
	if (s != null && (!i || this.type !== d._in) && s > n) {
		var o = this.type === d.logicalOR || this.type === d.logicalAND,
			c = this.type === d.coalesce
		c && (s = d.logicalAND.binop)
		var h = this.value
		this.next()
		var g = this.start,
			D = this.startLoc,
			x = this.parseExprOp(this.parseMaybeUnary(null, !1), g, D, s, i),
			E = this.buildBinary(t, r, e, x, h, o || c)
		return (
			((o && this.type === d.coalesce) ||
				(c && (this.type === d.logicalOR || this.type === d.logicalAND))) &&
				this.raiseRecoverable(
					this.start,
					'Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses',
				),
			this.parseExprOp(E, t, r, n, i)
		)
	}
	return e
}
oe.buildBinary = function (e, t, r, n, i, s) {
	var o = this.startNodeAt(e, t)
	return (
		(o.left = r),
		(o.operator = i),
		(o.right = n),
		this.finishNode(o, s ? 'LogicalExpression' : 'BinaryExpression')
	)
}
oe.parseMaybeUnary = function (e, t) {
	var r = this.start,
		n = this.startLoc,
		i
	if (
		this.isContextual('await') &&
		(this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction))
	)
		(i = this.parseAwait()), (t = !0)
	else if (this.type.prefix) {
		var s = this.startNode(),
			o = this.type === d.incDec
		;(s.operator = this.value),
			(s.prefix = !0),
			this.next(),
			(s.argument = this.parseMaybeUnary(null, !0)),
			this.checkExpressionErrors(e, !0),
			o
				? this.checkLVal(s.argument)
				: this.strict && s.operator === 'delete' && s.argument.type === 'Identifier'
				  ? this.raiseRecoverable(s.start, 'Deleting local variable in strict mode')
				  : (t = !0),
			(i = this.finishNode(s, o ? 'UpdateExpression' : 'UnaryExpression'))
	} else {
		if (((i = this.parseExprSubscripts(e)), this.checkExpressionErrors(e))) return i
		for (; this.type.postfix && !this.canInsertSemicolon(); ) {
			var c = this.startNodeAt(r, n)
			;(c.operator = this.value),
				(c.prefix = !1),
				(c.argument = i),
				this.checkLVal(i),
				this.next(),
				(i = this.finishNode(c, 'UpdateExpression'))
		}
	}
	return !t && this.eat(d.starstar)
		? this.buildBinary(r, n, i, this.parseMaybeUnary(null, !1), '**', !1)
		: i
}
oe.parseExprSubscripts = function (e) {
	var t = this.start,
		r = this.startLoc,
		n = this.parseExprAtom(e)
	if (
		n.type === 'ArrowFunctionExpression' &&
		this.input.slice(this.lastTokStart, this.lastTokEnd) !== ')'
	)
		return n
	var i = this.parseSubscripts(n, t, r)
	return (
		e &&
			i.type === 'MemberExpression' &&
			(e.parenthesizedAssign >= i.start && (e.parenthesizedAssign = -1),
			e.parenthesizedBind >= i.start && (e.parenthesizedBind = -1)),
		i
	)
}
oe.parseSubscripts = function (e, t, r, n) {
	for (
		var i =
				this.options.ecmaVersion >= 8 &&
				e.type === 'Identifier' &&
				e.name === 'async' &&
				this.lastTokEnd === e.end &&
				!this.canInsertSemicolon() &&
				e.end - e.start === 5 &&
				this.potentialArrowAt === e.start,
			s = !1;
		;

	) {
		var o = this.parseSubscript(e, t, r, n, i, s)
		if ((o.optional && (s = !0), o === e || o.type === 'ArrowFunctionExpression')) {
			if (s) {
				var c = this.startNodeAt(t, r)
				;(c.expression = o), (o = this.finishNode(c, 'ChainExpression'))
			}
			return o
		}
		e = o
	}
}
oe.parseSubscript = function (e, t, r, n, i, s) {
	var o = this.options.ecmaVersion >= 11,
		c = o && this.eat(d.questionDot)
	n &&
		c &&
		this.raise(
			this.lastTokStart,
			'Optional chaining cannot appear in the callee of new expressions',
		)
	var h = this.eat(d.bracketL)
	if (h || (c && this.type !== d.parenL && this.type !== d.backQuote) || this.eat(d.dot)) {
		var g = this.startNodeAt(t, r)
		;(g.object = e),
			(g.property = h
				? this.parseExpression()
				: this.parseIdent(this.options.allowReserved !== 'never')),
			(g.computed = !!h),
			h && this.expect(d.bracketR),
			o && (g.optional = c),
			(e = this.finishNode(g, 'MemberExpression'))
	} else if (!n && this.eat(d.parenL)) {
		var D = new Xt(),
			x = this.yieldPos,
			E = this.awaitPos,
			v = this.awaitIdentPos
		;(this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0)
		var b = this.parseExprList(d.parenR, this.options.ecmaVersion >= 8, !1, D)
		if (i && !c && !this.canInsertSemicolon() && this.eat(d.arrow))
			return (
				this.checkPatternErrors(D, !1),
				this.checkYieldAwaitInDefaultParams(),
				this.awaitIdentPos > 0 &&
					this.raise(
						this.awaitIdentPos,
						"Cannot use 'await' as identifier inside an async function",
					),
				(this.yieldPos = x),
				(this.awaitPos = E),
				(this.awaitIdentPos = v),
				this.parseArrowExpression(this.startNodeAt(t, r), b, !0)
			)
		this.checkExpressionErrors(D, !0),
			(this.yieldPos = x || this.yieldPos),
			(this.awaitPos = E || this.awaitPos),
			(this.awaitIdentPos = v || this.awaitIdentPos)
		var C = this.startNodeAt(t, r)
		;(C.callee = e),
			(C.arguments = b),
			o && (C.optional = c),
			(e = this.finishNode(C, 'CallExpression'))
	} else if (this.type === d.backQuote) {
		;(c || s) &&
			this.raise(
				this.start,
				'Optional chaining cannot appear in the tag of tagged template expressions',
			)
		var B = this.startNodeAt(t, r)
		;(B.tag = e),
			(B.quasi = this.parseTemplate({ isTagged: !0 })),
			(e = this.finishNode(B, 'TaggedTemplateExpression'))
	}
	return e
}
oe.parseExprAtom = function (e) {
	this.type === d.slash && this.readRegexp()
	var t,
		r = this.potentialArrowAt === this.start
	switch (this.type) {
		case d._super:
			return (
				this.allowSuper || this.raise(this.start, "'super' keyword outside a method"),
				(t = this.startNode()),
				this.next(),
				this.type === d.parenL &&
					!this.allowDirectSuper &&
					this.raise(t.start, 'super() call outside constructor of a subclass'),
				this.type !== d.dot &&
					this.type !== d.bracketL &&
					this.type !== d.parenL &&
					this.unexpected(),
				this.finishNode(t, 'Super')
			)
		case d._this:
			return (t = this.startNode()), this.next(), this.finishNode(t, 'ThisExpression')
		case d.name:
			var n = this.start,
				i = this.startLoc,
				s = this.containsEsc,
				o = this.parseIdent(!1)
			if (
				this.options.ecmaVersion >= 8 &&
				!s &&
				o.name === 'async' &&
				!this.canInsertSemicolon() &&
				this.eat(d._function)
			)
				return this.parseFunction(this.startNodeAt(n, i), 0, !1, !0)
			if (r && !this.canInsertSemicolon()) {
				if (this.eat(d.arrow)) return this.parseArrowExpression(this.startNodeAt(n, i), [o], !1)
				if (this.options.ecmaVersion >= 8 && o.name === 'async' && this.type === d.name && !s)
					return (
						(o = this.parseIdent(!1)),
						(this.canInsertSemicolon() || !this.eat(d.arrow)) && this.unexpected(),
						this.parseArrowExpression(this.startNodeAt(n, i), [o], !0)
					)
			}
			return o
		case d.regexp:
			var c = this.value
			return (t = this.parseLiteral(c.value)), (t.regex = { pattern: c.pattern, flags: c.flags }), t
		case d.num:
		case d.string:
			return this.parseLiteral(this.value)
		case d._null:
		case d._true:
		case d._false:
			return (
				(t = this.startNode()),
				(t.value = this.type === d._null ? null : this.type === d._true),
				(t.raw = this.type.keyword),
				this.next(),
				this.finishNode(t, 'Literal')
			)
		case d.parenL:
			var h = this.start,
				g = this.parseParenAndDistinguishExpression(r)
			return (
				e &&
					(e.parenthesizedAssign < 0 &&
						!this.isSimpleAssignTarget(g) &&
						(e.parenthesizedAssign = h),
					e.parenthesizedBind < 0 && (e.parenthesizedBind = h)),
				g
			)
		case d.bracketL:
			return (
				(t = this.startNode()),
				this.next(),
				(t.elements = this.parseExprList(d.bracketR, !0, !0, e)),
				this.finishNode(t, 'ArrayExpression')
			)
		case d.braceL:
			return this.parseObj(!1, e)
		case d._function:
			return (t = this.startNode()), this.next(), this.parseFunction(t, 0)
		case d._class:
			return this.parseClass(this.startNode(), !1)
		case d._new:
			return this.parseNew()
		case d.backQuote:
			return this.parseTemplate()
		case d._import:
			return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected()
		default:
			this.unexpected()
	}
}
oe.parseExprImport = function () {
	var e = this.startNode()
	this.containsEsc && this.raiseRecoverable(this.start, 'Escape sequence in keyword import')
	var t = this.parseIdent(!0)
	switch (this.type) {
		case d.parenL:
			return this.parseDynamicImport(e)
		case d.dot:
			return (e.meta = t), this.parseImportMeta(e)
		default:
			this.unexpected()
	}
}
oe.parseDynamicImport = function (e) {
	if ((this.next(), (e.source = this.parseMaybeAssign()), !this.eat(d.parenR))) {
		var t = this.start
		this.eat(d.comma) && this.eat(d.parenR)
			? this.raiseRecoverable(t, 'Trailing comma is not allowed in import()')
			: this.unexpected(t)
	}
	return this.finishNode(e, 'ImportExpression')
}
oe.parseImportMeta = function (e) {
	this.next()
	var t = this.containsEsc
	return (
		(e.property = this.parseIdent(!0)),
		e.property.name !== 'meta' &&
			this.raiseRecoverable(
				e.property.start,
				"The only valid meta property for import is 'import.meta'",
			),
		t && this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters"),
		this.options.sourceType !== 'module' &&
			this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module"),
		this.finishNode(e, 'MetaProperty')
	)
}
oe.parseLiteral = function (e) {
	var t = this.startNode()
	return (
		(t.value = e),
		(t.raw = this.input.slice(this.start, this.end)),
		t.raw.charCodeAt(t.raw.length - 1) === 110 && (t.bigint = t.raw.slice(0, -1).replace(/_/g, '')),
		this.next(),
		this.finishNode(t, 'Literal')
	)
}
oe.parseParenExpression = function () {
	this.expect(d.parenL)
	var e = this.parseExpression()
	return this.expect(d.parenR), e
}
oe.parseParenAndDistinguishExpression = function (e) {
	var t = this.start,
		r = this.startLoc,
		n,
		i = this.options.ecmaVersion >= 8
	if (this.options.ecmaVersion >= 6) {
		this.next()
		var s = this.start,
			o = this.startLoc,
			c = [],
			h = !0,
			g = !1,
			D = new Xt(),
			x = this.yieldPos,
			E = this.awaitPos,
			v
		for (this.yieldPos = 0, this.awaitPos = 0; this.type !== d.parenR; )
			if ((h ? (h = !1) : this.expect(d.comma), i && this.afterTrailingComma(d.parenR, !0))) {
				g = !0
				break
			} else if (this.type === d.ellipsis) {
				;(v = this.start),
					c.push(this.parseParenItem(this.parseRestBinding())),
					this.type === d.comma &&
						this.raise(this.start, 'Comma is not permitted after the rest element')
				break
			} else c.push(this.parseMaybeAssign(!1, D, this.parseParenItem))
		var b = this.start,
			C = this.startLoc
		if ((this.expect(d.parenR), e && !this.canInsertSemicolon() && this.eat(d.arrow)))
			return (
				this.checkPatternErrors(D, !1),
				this.checkYieldAwaitInDefaultParams(),
				(this.yieldPos = x),
				(this.awaitPos = E),
				this.parseParenArrowList(t, r, c)
			)
		;(!c.length || g) && this.unexpected(this.lastTokStart),
			v && this.unexpected(v),
			this.checkExpressionErrors(D, !0),
			(this.yieldPos = x || this.yieldPos),
			(this.awaitPos = E || this.awaitPos),
			c.length > 1
				? ((n = this.startNodeAt(s, o)),
				  (n.expressions = c),
				  this.finishNodeAt(n, 'SequenceExpression', b, C))
				: (n = c[0])
	} else n = this.parseParenExpression()
	if (this.options.preserveParens) {
		var B = this.startNodeAt(t, r)
		return (B.expression = n), this.finishNode(B, 'ParenthesizedExpression')
	} else return n
}
oe.parseParenItem = function (e) {
	return e
}
oe.parseParenArrowList = function (e, t, r) {
	return this.parseArrowExpression(this.startNodeAt(e, t), r)
}
var Ys = []
oe.parseNew = function () {
	this.containsEsc && this.raiseRecoverable(this.start, 'Escape sequence in keyword new')
	var e = this.startNode(),
		t = this.parseIdent(!0)
	if (this.options.ecmaVersion >= 6 && this.eat(d.dot)) {
		e.meta = t
		var r = this.containsEsc
		return (
			(e.property = this.parseIdent(!0)),
			e.property.name !== 'target' &&
				this.raiseRecoverable(
					e.property.start,
					"The only valid meta property for new is 'new.target'",
				),
			r && this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters"),
			this.inNonArrowFunction() ||
				this.raiseRecoverable(e.start, "'new.target' can only be used in functions"),
			this.finishNode(e, 'MetaProperty')
		)
	}
	var n = this.start,
		i = this.startLoc,
		s = this.type === d._import
	return (
		(e.callee = this.parseSubscripts(this.parseExprAtom(), n, i, !0)),
		s && e.callee.type === 'ImportExpression' && this.raise(n, 'Cannot use new with import()'),
		this.eat(d.parenL)
			? (e.arguments = this.parseExprList(d.parenR, this.options.ecmaVersion >= 8, !1))
			: (e.arguments = Ys),
		this.finishNode(e, 'NewExpression')
	)
}
oe.parseTemplateElement = function (e) {
	var t = e.isTagged,
		r = this.startNode()
	return (
		this.type === d.invalidTemplate
			? (t || this.raiseRecoverable(this.start, 'Bad escape sequence in untagged template literal'),
			  (r.value = { raw: this.value, cooked: null }))
			: (r.value = {
					raw: this.input.slice(this.start, this.end).replace(
						/\r\n?/g,
						`
`,
					),
					cooked: this.value,
			  }),
		this.next(),
		(r.tail = this.type === d.backQuote),
		this.finishNode(r, 'TemplateElement')
	)
}
oe.parseTemplate = function (e) {
	e === void 0 && (e = {})
	var t = e.isTagged
	t === void 0 && (t = !1)
	var r = this.startNode()
	this.next(), (r.expressions = [])
	var n = this.parseTemplateElement({ isTagged: t })
	for (r.quasis = [n]; !n.tail; )
		this.type === d.eof && this.raise(this.pos, 'Unterminated template literal'),
			this.expect(d.dollarBraceL),
			r.expressions.push(this.parseExpression()),
			this.expect(d.braceR),
			r.quasis.push((n = this.parseTemplateElement({ isTagged: t })))
	return this.next(), this.finishNode(r, 'TemplateLiteral')
}
oe.isAsyncProp = function (e) {
	return (
		!e.computed &&
		e.key.type === 'Identifier' &&
		e.key.name === 'async' &&
		(this.type === d.name ||
			this.type === d.num ||
			this.type === d.string ||
			this.type === d.bracketL ||
			this.type.keyword ||
			(this.options.ecmaVersion >= 9 && this.type === d.star)) &&
		!Re.test(this.input.slice(this.lastTokEnd, this.start))
	)
}
oe.parseObj = function (e, t) {
	var r = this.startNode(),
		n = !0,
		i = {}
	for (r.properties = [], this.next(); !this.eat(d.braceR); ) {
		if (n) n = !1
		else if (
			(this.expect(d.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(d.braceR))
		)
			break
		var s = this.parseProperty(e, t)
		e || this.checkPropClash(s, i, t), r.properties.push(s)
	}
	return this.finishNode(r, e ? 'ObjectPattern' : 'ObjectExpression')
}
oe.parseProperty = function (e, t) {
	var r = this.startNode(),
		n,
		i,
		s,
		o
	if (this.options.ecmaVersion >= 9 && this.eat(d.ellipsis))
		return e
			? ((r.argument = this.parseIdent(!1)),
			  this.type === d.comma &&
					this.raise(this.start, 'Comma is not permitted after the rest element'),
			  this.finishNode(r, 'RestElement'))
			: (this.type === d.parenL &&
					t &&
					(t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start),
					t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)),
			  (r.argument = this.parseMaybeAssign(!1, t)),
			  this.type === d.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start),
			  this.finishNode(r, 'SpreadElement'))
	this.options.ecmaVersion >= 6 &&
		((r.method = !1),
		(r.shorthand = !1),
		(e || t) && ((s = this.start), (o = this.startLoc)),
		e || (n = this.eat(d.star)))
	var c = this.containsEsc
	return (
		this.parsePropertyName(r),
		!e && !c && this.options.ecmaVersion >= 8 && !n && this.isAsyncProp(r)
			? ((i = !0),
			  (n = this.options.ecmaVersion >= 9 && this.eat(d.star)),
			  this.parsePropertyName(r, t))
			: (i = !1),
		this.parsePropertyValue(r, e, n, i, s, o, t, c),
		this.finishNode(r, 'Property')
	)
}
oe.parsePropertyValue = function (e, t, r, n, i, s, o, c) {
	if (((r || n) && this.type === d.colon && this.unexpected(), this.eat(d.colon)))
		(e.value = t
			? this.parseMaybeDefault(this.start, this.startLoc)
			: this.parseMaybeAssign(!1, o)),
			(e.kind = 'init')
	else if (this.options.ecmaVersion >= 6 && this.type === d.parenL)
		t && this.unexpected(), (e.kind = 'init'), (e.method = !0), (e.value = this.parseMethod(r, n))
	else if (
		!t &&
		!c &&
		this.options.ecmaVersion >= 5 &&
		!e.computed &&
		e.key.type === 'Identifier' &&
		(e.key.name === 'get' || e.key.name === 'set') &&
		this.type !== d.comma &&
		this.type !== d.braceR &&
		this.type !== d.eq
	) {
		;(r || n) && this.unexpected(),
			(e.kind = e.key.name),
			this.parsePropertyName(e),
			(e.value = this.parseMethod(!1))
		var h = e.kind === 'get' ? 0 : 1
		if (e.value.params.length !== h) {
			var g = e.value.start
			e.kind === 'get'
				? this.raiseRecoverable(g, 'getter should have no params')
				: this.raiseRecoverable(g, 'setter should have exactly one param')
		} else
			e.kind === 'set' &&
				e.value.params[0].type === 'RestElement' &&
				this.raiseRecoverable(e.value.params[0].start, 'Setter cannot use rest params')
	} else
		this.options.ecmaVersion >= 6 && !e.computed && e.key.type === 'Identifier'
			? ((r || n) && this.unexpected(),
			  this.checkUnreserved(e.key),
			  e.key.name === 'await' && !this.awaitIdentPos && (this.awaitIdentPos = i),
			  (e.kind = 'init'),
			  t
					? (e.value = this.parseMaybeDefault(i, s, e.key))
					: this.type === d.eq && o
					  ? (o.shorthandAssign < 0 && (o.shorthandAssign = this.start),
					    (e.value = this.parseMaybeDefault(i, s, e.key)))
					  : (e.value = e.key),
			  (e.shorthand = !0))
			: this.unexpected()
}
oe.parsePropertyName = function (e) {
	if (this.options.ecmaVersion >= 6) {
		if (this.eat(d.bracketL))
			return (e.computed = !0), (e.key = this.parseMaybeAssign()), this.expect(d.bracketR), e.key
		e.computed = !1
	}
	return (e.key =
		this.type === d.num || this.type === d.string
			? this.parseExprAtom()
			: this.parseIdent(this.options.allowReserved !== 'never'))
}
oe.initFunction = function (e) {
	;(e.id = null),
		this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1),
		this.options.ecmaVersion >= 8 && (e.async = !1)
}
oe.parseMethod = function (e, t, r) {
	var n = this.startNode(),
		i = this.yieldPos,
		s = this.awaitPos,
		o = this.awaitIdentPos
	return (
		this.initFunction(n),
		this.options.ecmaVersion >= 6 && (n.generator = e),
		this.options.ecmaVersion >= 8 && (n.async = !!t),
		(this.yieldPos = 0),
		(this.awaitPos = 0),
		(this.awaitIdentPos = 0),
		this.enterScope(Mr(t, n.generator) | bi | (r ? Si : 0)),
		this.expect(d.parenL),
		(n.params = this.parseBindingList(d.parenR, !1, this.options.ecmaVersion >= 8)),
		this.checkYieldAwaitInDefaultParams(),
		this.parseFunctionBody(n, !1, !0),
		(this.yieldPos = i),
		(this.awaitPos = s),
		(this.awaitIdentPos = o),
		this.finishNode(n, 'FunctionExpression')
	)
}
oe.parseArrowExpression = function (e, t, r) {
	var n = this.yieldPos,
		i = this.awaitPos,
		s = this.awaitIdentPos
	return (
		this.enterScope(Mr(r, !1) | xi),
		this.initFunction(e),
		this.options.ecmaVersion >= 8 && (e.async = !!r),
		(this.yieldPos = 0),
		(this.awaitPos = 0),
		(this.awaitIdentPos = 0),
		(e.params = this.toAssignableList(t, !0)),
		this.parseFunctionBody(e, !0, !1),
		(this.yieldPos = n),
		(this.awaitPos = i),
		(this.awaitIdentPos = s),
		this.finishNode(e, 'ArrowFunctionExpression')
	)
}
oe.parseFunctionBody = function (e, t, r) {
	var n = t && this.type !== d.braceL,
		i = this.strict,
		s = !1
	if (n) (e.body = this.parseMaybeAssign()), (e.expression = !0), this.checkParams(e, !1)
	else {
		var o = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params)
		;(!i || o) &&
			((s = this.strictDirective(this.end)),
			s &&
				o &&
				this.raiseRecoverable(
					e.start,
					"Illegal 'use strict' directive in function with non-simple parameter list",
				))
		var c = this.labels
		;(this.labels = []),
			s && (this.strict = !0),
			this.checkParams(e, !i && !s && !t && !r && this.isSimpleParamList(e.params)),
			this.strict && e.id && this.checkLVal(e.id, wi),
			(e.body = this.parseBlock(!1, void 0, s && !i)),
			(e.expression = !1),
			this.adaptDirectivePrologue(e.body.body),
			(this.labels = c)
	}
	this.exitScope()
}
oe.isSimpleParamList = function (e) {
	for (var t = 0, r = e; t < r.length; t += 1) {
		var n = r[t]
		if (n.type !== 'Identifier') return !1
	}
	return !0
}
oe.checkParams = function (e, t) {
	for (var r = {}, n = 0, i = e.params; n < i.length; n += 1) {
		var s = i[n]
		this.checkLVal(s, jr, t ? null : r)
	}
}
oe.parseExprList = function (e, t, r, n) {
	for (var i = [], s = !0; !this.eat(e); ) {
		if (s) s = !1
		else if ((this.expect(d.comma), t && this.afterTrailingComma(e))) break
		var o = void 0
		r && this.type === d.comma
			? (o = null)
			: this.type === d.ellipsis
			  ? ((o = this.parseSpread(n)),
			    n && this.type === d.comma && n.trailingComma < 0 && (n.trailingComma = this.start))
			  : (o = this.parseMaybeAssign(!1, n)),
			i.push(o)
	}
	return i
}
oe.checkUnreserved = function (e) {
	var t = e.start,
		r = e.end,
		n = e.name
	if (
		(this.inGenerator &&
			n === 'yield' &&
			this.raiseRecoverable(t, "Cannot use 'yield' as identifier inside a generator"),
		this.inAsync &&
			n === 'await' &&
			this.raiseRecoverable(t, "Cannot use 'await' as identifier inside an async function"),
		this.keywords.test(n) && this.raise(t, "Unexpected keyword '" + n + "'"),
		!(this.options.ecmaVersion < 6 && this.input.slice(t, r).indexOf('\\') !== -1))
	) {
		var i = this.strict ? this.reservedWordsStrict : this.reservedWords
		i.test(n) &&
			(!this.inAsync &&
				n === 'await' &&
				this.raiseRecoverable(t, "Cannot use keyword 'await' outside an async function"),
			this.raiseRecoverable(t, "The keyword '" + n + "' is reserved"))
	}
}
oe.parseIdent = function (e, t) {
	var r = this.startNode()
	return (
		this.type === d.name
			? (r.name = this.value)
			: this.type.keyword
			  ? ((r.name = this.type.keyword),
			    (r.name === 'class' || r.name === 'function') &&
						(this.lastTokEnd !== this.lastTokStart + 1 ||
							this.input.charCodeAt(this.lastTokStart) !== 46) &&
						this.context.pop())
			  : this.unexpected(),
		this.next(!!e),
		this.finishNode(r, 'Identifier'),
		e ||
			(this.checkUnreserved(r),
			r.name === 'await' && !this.awaitIdentPos && (this.awaitIdentPos = r.start)),
		r
	)
}
oe.parseYield = function (e) {
	this.yieldPos || (this.yieldPos = this.start)
	var t = this.startNode()
	return (
		this.next(),
		this.type === d.semi ||
		this.canInsertSemicolon() ||
		(this.type !== d.star && !this.type.startsExpr)
			? ((t.delegate = !1), (t.argument = null))
			: ((t.delegate = this.eat(d.star)), (t.argument = this.parseMaybeAssign(e))),
		this.finishNode(t, 'YieldExpression')
	)
}
oe.parseAwait = function () {
	this.awaitPos || (this.awaitPos = this.start)
	var e = this.startNode()
	return (
		this.next(),
		(e.argument = this.parseMaybeUnary(null, !1)),
		this.finishNode(e, 'AwaitExpression')
	)
}
var Gt = ve.prototype
Gt.raise = function (e, t) {
	var r = Rr(this.input, e)
	t += ' (' + r.line + ':' + r.column + ')'
	var n = new SyntaxError(t)
	throw ((n.pos = e), (n.loc = r), (n.raisedAt = this.pos), n)
}
Gt.raiseRecoverable = Gt.raise
Gt.curPosition = function () {
	if (this.options.locations) return new gt(this.curLine, this.pos - this.lineStart)
}
var tt = ve.prototype,
	Zs = u(function (t) {
		;(this.flags = t), (this.var = []), (this.lexical = []), (this.functions = [])
	}, 'Scope')
tt.enterScope = function (e) {
	this.scopeStack.push(new Zs(e))
}
tt.exitScope = function () {
	this.scopeStack.pop()
}
tt.treatFunctionsAsVarInScope = function (e) {
	return e.flags & Ot || (!this.inModule && e.flags & wt)
}
tt.declareName = function (e, t, r) {
	var n = !1
	if (t === Qe) {
		var i = this.currentScope()
		;(n = i.lexical.indexOf(e) > -1 || i.functions.indexOf(e) > -1 || i.var.indexOf(e) > -1),
			i.lexical.push(e),
			this.inModule && i.flags & wt && delete this.undefinedExports[e]
	} else if (t === Bi) {
		var s = this.currentScope()
		s.lexical.push(e)
	} else if (t === _i) {
		var o = this.currentScope()
		this.treatFunctionsAsVar
			? (n = o.lexical.indexOf(e) > -1)
			: (n = o.lexical.indexOf(e) > -1 || o.var.indexOf(e) > -1),
			o.functions.push(e)
	} else
		for (var c = this.scopeStack.length - 1; c >= 0; --c) {
			var h = this.scopeStack[c]
			if (
				(h.lexical.indexOf(e) > -1 && !(h.flags & Fi && h.lexical[0] === e)) ||
				(!this.treatFunctionsAsVarInScope(h) && h.functions.indexOf(e) > -1)
			) {
				n = !0
				break
			}
			if (
				(h.var.push(e),
				this.inModule && h.flags & wt && delete this.undefinedExports[e],
				h.flags & Lr)
			)
				break
		}
	n && this.raiseRecoverable(r, "Identifier '" + e + "' has already been declared")
}
tt.checkLocalExport = function (e) {
	this.scopeStack[0].lexical.indexOf(e.name) === -1 &&
		this.scopeStack[0].var.indexOf(e.name) === -1 &&
		(this.undefinedExports[e.name] = e)
}
tt.currentScope = function () {
	return this.scopeStack[this.scopeStack.length - 1]
}
tt.currentVarScope = function () {
	for (var e = this.scopeStack.length - 1; ; e--) {
		var t = this.scopeStack[e]
		if (t.flags & Lr) return t
	}
}
tt.currentThisScope = function () {
	for (var e = this.scopeStack.length - 1; ; e--) {
		var t = this.scopeStack[e]
		if (t.flags & Lr && !(t.flags & xi)) return t
	}
}
var Yt = u(function (t, r, n) {
		;(this.type = ''),
			(this.start = r),
			(this.end = 0),
			t.options.locations && (this.loc = new Nt(t, n)),
			t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile),
			t.options.ranges && (this.range = [r, 0])
	}, 'Node'),
	Zt = ve.prototype
Zt.startNode = function () {
	return new Yt(this, this.start, this.startLoc)
}
Zt.startNodeAt = function (e, t) {
	return new Yt(this, e, t)
}
function ki(e, t, r, n) {
	return (
		(e.type = t),
		(e.end = r),
		this.options.locations && (e.loc.end = n),
		this.options.ranges && (e.range[1] = r),
		e
	)
}
u(ki, 'finishNodeAt')
Zt.finishNode = function (e, t) {
	return ki.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc)
}
Zt.finishNodeAt = function (e, t, r, n) {
	return ki.call(this, e, t, r, n)
}
var je = u(function (t, r, n, i, s) {
		;(this.token = t),
			(this.isExpr = !!r),
			(this.preserveSpace = !!n),
			(this.override = i),
			(this.generator = !!s)
	}, 'TokContext'),
	Fe = {
		b_stat: new je('{', !1),
		b_expr: new je('{', !0),
		b_tmpl: new je('${', !1),
		p_stat: new je('(', !1),
		p_expr: new je('(', !0),
		q_tmpl: new je('`', !0, !0, function (e) {
			return e.tryReadTemplateToken()
		}),
		f_stat: new je('function', !1),
		f_expr: new je('function', !0),
		f_expr_gen: new je('function', !0, !1, null, !0),
		f_gen: new je('function', !1, !1, null, !0),
	},
	er = ve.prototype
er.initialContext = function () {
	return [Fe.b_stat]
}
er.braceIsBlock = function (e) {
	var t = this.curContext()
	return t === Fe.f_expr || t === Fe.f_stat
		? !0
		: e === d.colon && (t === Fe.b_stat || t === Fe.b_expr)
		  ? !t.isExpr
		  : e === d._return || (e === d.name && this.exprAllowed)
		    ? Re.test(this.input.slice(this.lastTokEnd, this.start))
		    : e === d._else || e === d.semi || e === d.eof || e === d.parenR || e === d.arrow
		      ? !0
		      : e === d.braceL
		        ? t === Fe.b_stat
		        : e === d._var || e === d._const || e === d.name
		          ? !1
		          : !this.exprAllowed
}
er.inGeneratorContext = function () {
	for (var e = this.context.length - 1; e >= 1; e--) {
		var t = this.context[e]
		if (t.token === 'function') return t.generator
	}
	return !1
}
er.updateContext = function (e) {
	var t,
		r = this.type
	r.keyword && e === d.dot
		? (this.exprAllowed = !1)
		: (t = r.updateContext)
		  ? t.call(this, e)
		  : (this.exprAllowed = r.beforeExpr)
}
d.parenR.updateContext = d.braceR.updateContext = function () {
	if (this.context.length === 1) {
		this.exprAllowed = !0
		return
	}
	var e = this.context.pop()
	e === Fe.b_stat && this.curContext().token === 'function' && (e = this.context.pop()),
		(this.exprAllowed = !e.isExpr)
}
d.braceL.updateContext = function (e) {
	this.context.push(this.braceIsBlock(e) ? Fe.b_stat : Fe.b_expr), (this.exprAllowed = !0)
}
d.dollarBraceL.updateContext = function () {
	this.context.push(Fe.b_tmpl), (this.exprAllowed = !0)
}
d.parenL.updateContext = function (e) {
	var t = e === d._if || e === d._for || e === d._with || e === d._while
	this.context.push(t ? Fe.p_stat : Fe.p_expr), (this.exprAllowed = !0)
}
d.incDec.updateContext = function () {}
d._function.updateContext = d._class.updateContext = function (e) {
	e.beforeExpr &&
	e !== d.semi &&
	e !== d._else &&
	!(e === d._return && Re.test(this.input.slice(this.lastTokEnd, this.start))) &&
	!((e === d.colon || e === d.braceL) && this.curContext() === Fe.b_stat)
		? this.context.push(Fe.f_expr)
		: this.context.push(Fe.f_stat),
		(this.exprAllowed = !1)
}
d.backQuote.updateContext = function () {
	this.curContext() === Fe.q_tmpl ? this.context.pop() : this.context.push(Fe.q_tmpl),
		(this.exprAllowed = !1)
}
d.star.updateContext = function (e) {
	if (e === d._function) {
		var t = this.context.length - 1
		this.context[t] === Fe.f_expr ? (this.context[t] = Fe.f_expr_gen) : (this.context[t] = Fe.f_gen)
	}
	this.exprAllowed = !0
}
d.name.updateContext = function (e) {
	var t = !1
	this.options.ecmaVersion >= 6 &&
		e !== d.dot &&
		((this.value === 'of' && !this.exprAllowed) ||
			(this.value === 'yield' && this.inGeneratorContext())) &&
		(t = !0),
		(this.exprAllowed = t)
}
var Ni =
		'ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS',
	Oi = Ni + ' Extended_Pictographic',
	eo = Oi,
	to = { 9: Ni, 10: Oi, 11: eo },
	Sn =
		'Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu',
	Ii =
		'Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb',
	Pi =
		Ii +
		' Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd',
	ro = Pi + ' Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho',
	no = { 9: Ii, 10: Pi, 11: ro },
	Ri = {}
function qr(e) {
	var t = (Ri[e] = {
		binary: nt(to[e] + ' ' + Sn),
		nonBinary: { General_Category: nt(Sn), Script: nt(no[e]) },
	})
	;(t.nonBinary.Script_Extensions = t.nonBinary.Script),
		(t.nonBinary.gc = t.nonBinary.General_Category),
		(t.nonBinary.sc = t.nonBinary.Script),
		(t.nonBinary.scx = t.nonBinary.Script_Extensions)
}
u(qr, 'buildUnicodeData')
qr(9)
qr(10)
qr(11)
var ee = ve.prototype,
	Ye = u(function (t) {
		;(this.parser = t),
			(this.validFlags =
				'gim' + (t.options.ecmaVersion >= 6 ? 'uy' : '') + (t.options.ecmaVersion >= 9 ? 's' : '')),
			(this.unicodeProperties = Ri[t.options.ecmaVersion >= 11 ? 11 : t.options.ecmaVersion]),
			(this.source = ''),
			(this.flags = ''),
			(this.start = 0),
			(this.switchU = !1),
			(this.switchN = !1),
			(this.pos = 0),
			(this.lastIntValue = 0),
			(this.lastStringValue = ''),
			(this.lastAssertionIsQuantifiable = !1),
			(this.numCapturingParens = 0),
			(this.maxBackReference = 0),
			(this.groupNames = []),
			(this.backReferenceNames = [])
	}, 'RegExpValidationState')
Ye.prototype.reset = u(function (t, r, n) {
	var i = n.indexOf('u') !== -1
	;(this.start = t | 0),
		(this.source = r + ''),
		(this.flags = n),
		(this.switchU = i && this.parser.options.ecmaVersion >= 6),
		(this.switchN = i && this.parser.options.ecmaVersion >= 9)
}, 'reset')
Ye.prototype.raise = u(function (t) {
	this.parser.raiseRecoverable(
		this.start,
		'Invalid regular expression: /' + this.source + '/: ' + t,
	)
}, 'raise')
Ye.prototype.at = u(function (t, r) {
	r === void 0 && (r = !1)
	var n = this.source,
		i = n.length
	if (t >= i) return -1
	var s = n.charCodeAt(t)
	if (!(r || this.switchU) || s <= 55295 || s >= 57344 || t + 1 >= i) return s
	var o = n.charCodeAt(t + 1)
	return o >= 56320 && o <= 57343 ? (s << 10) + o - 56613888 : s
}, 'at')
Ye.prototype.nextIndex = u(function (t, r) {
	r === void 0 && (r = !1)
	var n = this.source,
		i = n.length
	if (t >= i) return i
	var s = n.charCodeAt(t),
		o
	return !(r || this.switchU) ||
		s <= 55295 ||
		s >= 57344 ||
		t + 1 >= i ||
		(o = n.charCodeAt(t + 1)) < 56320 ||
		o > 57343
		? t + 1
		: t + 2
}, 'nextIndex')
Ye.prototype.current = u(function (t) {
	return t === void 0 && (t = !1), this.at(this.pos, t)
}, 'current')
Ye.prototype.lookahead = u(function (t) {
	return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t)
}, 'lookahead')
Ye.prototype.advance = u(function (t) {
	t === void 0 && (t = !1), (this.pos = this.nextIndex(this.pos, t))
}, 'advance')
Ye.prototype.eat = u(function (t, r) {
	return r === void 0 && (r = !1), this.current(r) === t ? (this.advance(r), !0) : !1
}, 'eat')
function zt(e) {
	return e <= 65535
		? String.fromCharCode(e)
		: ((e -= 65536), String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320))
}
u(zt, 'codePointToString')
ee.validateRegExpFlags = function (e) {
	for (var t = e.validFlags, r = e.flags, n = 0; n < r.length; n++) {
		var i = r.charAt(n)
		t.indexOf(i) === -1 && this.raise(e.start, 'Invalid regular expression flag'),
			r.indexOf(i, n + 1) > -1 && this.raise(e.start, 'Duplicate regular expression flag')
	}
}
ee.validateRegExpPattern = function (e) {
	this.regexp_pattern(e),
		!e.switchN &&
			this.options.ecmaVersion >= 9 &&
			e.groupNames.length > 0 &&
			((e.switchN = !0), this.regexp_pattern(e))
}
ee.regexp_pattern = function (e) {
	;(e.pos = 0),
		(e.lastIntValue = 0),
		(e.lastStringValue = ''),
		(e.lastAssertionIsQuantifiable = !1),
		(e.numCapturingParens = 0),
		(e.maxBackReference = 0),
		(e.groupNames.length = 0),
		(e.backReferenceNames.length = 0),
		this.regexp_disjunction(e),
		e.pos !== e.source.length &&
			(e.eat(41) && e.raise("Unmatched ')'"),
			(e.eat(93) || e.eat(125)) && e.raise('Lone quantifier brackets')),
		e.maxBackReference > e.numCapturingParens && e.raise('Invalid escape')
	for (var t = 0, r = e.backReferenceNames; t < r.length; t += 1) {
		var n = r[t]
		e.groupNames.indexOf(n) === -1 && e.raise('Invalid named capture referenced')
	}
}
ee.regexp_disjunction = function (e) {
	for (this.regexp_alternative(e); e.eat(124); ) this.regexp_alternative(e)
	this.regexp_eatQuantifier(e, !0) && e.raise('Nothing to repeat'),
		e.eat(123) && e.raise('Lone quantifier brackets')
}
ee.regexp_alternative = function (e) {
	for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
}
ee.regexp_eatTerm = function (e) {
	return this.regexp_eatAssertion(e)
		? (e.lastAssertionIsQuantifiable &&
				this.regexp_eatQuantifier(e) &&
				e.switchU &&
				e.raise('Invalid quantifier'),
		  !0)
		: (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e))
		  ? (this.regexp_eatQuantifier(e), !0)
		  : !1
}
ee.regexp_eatAssertion = function (e) {
	var t = e.pos
	if (((e.lastAssertionIsQuantifiable = !1), e.eat(94) || e.eat(36))) return !0
	if (e.eat(92)) {
		if (e.eat(66) || e.eat(98)) return !0
		e.pos = t
	}
	if (e.eat(40) && e.eat(63)) {
		var r = !1
		if ((this.options.ecmaVersion >= 9 && (r = e.eat(60)), e.eat(61) || e.eat(33)))
			return (
				this.regexp_disjunction(e),
				e.eat(41) || e.raise('Unterminated group'),
				(e.lastAssertionIsQuantifiable = !r),
				!0
			)
	}
	return (e.pos = t), !1
}
ee.regexp_eatQuantifier = function (e, t) {
	return t === void 0 && (t = !1), this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(63), !0) : !1
}
ee.regexp_eatQuantifierPrefix = function (e, t) {
	return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t)
}
ee.regexp_eatBracedQuantifier = function (e, t) {
	var r = e.pos
	if (e.eat(123)) {
		var n = 0,
			i = -1
		if (
			this.regexp_eatDecimalDigits(e) &&
			((n = e.lastIntValue),
			e.eat(44) && this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue),
			e.eat(125))
		)
			return i !== -1 && i < n && !t && e.raise('numbers out of order in {} quantifier'), !0
		e.switchU && !t && e.raise('Incomplete quantifier'), (e.pos = r)
	}
	return !1
}
ee.regexp_eatAtom = function (e) {
	return (
		this.regexp_eatPatternCharacters(e) ||
		e.eat(46) ||
		this.regexp_eatReverseSolidusAtomEscape(e) ||
		this.regexp_eatCharacterClass(e) ||
		this.regexp_eatUncapturingGroup(e) ||
		this.regexp_eatCapturingGroup(e)
	)
}
ee.regexp_eatReverseSolidusAtomEscape = function (e) {
	var t = e.pos
	if (e.eat(92)) {
		if (this.regexp_eatAtomEscape(e)) return !0
		e.pos = t
	}
	return !1
}
ee.regexp_eatUncapturingGroup = function (e) {
	var t = e.pos
	if (e.eat(40)) {
		if (e.eat(63) && e.eat(58)) {
			if ((this.regexp_disjunction(e), e.eat(41))) return !0
			e.raise('Unterminated group')
		}
		e.pos = t
	}
	return !1
}
ee.regexp_eatCapturingGroup = function (e) {
	if (e.eat(40)) {
		if (
			(this.options.ecmaVersion >= 9
				? this.regexp_groupSpecifier(e)
				: e.current() === 63 && e.raise('Invalid group'),
			this.regexp_disjunction(e),
			e.eat(41))
		)
			return (e.numCapturingParens += 1), !0
		e.raise('Unterminated group')
	}
	return !1
}
ee.regexp_eatExtendedAtom = function (e) {
	return (
		e.eat(46) ||
		this.regexp_eatReverseSolidusAtomEscape(e) ||
		this.regexp_eatCharacterClass(e) ||
		this.regexp_eatUncapturingGroup(e) ||
		this.regexp_eatCapturingGroup(e) ||
		this.regexp_eatInvalidBracedQuantifier(e) ||
		this.regexp_eatExtendedPatternCharacter(e)
	)
}
ee.regexp_eatInvalidBracedQuantifier = function (e) {
	return this.regexp_eatBracedQuantifier(e, !0) && e.raise('Nothing to repeat'), !1
}
ee.regexp_eatSyntaxCharacter = function (e) {
	var t = e.current()
	return Li(t) ? ((e.lastIntValue = t), e.advance(), !0) : !1
}
function Li(e) {
	return (
		e === 36 ||
		(e >= 40 && e <= 43) ||
		e === 46 ||
		e === 63 ||
		(e >= 91 && e <= 94) ||
		(e >= 123 && e <= 125)
	)
}
u(Li, 'isSyntaxCharacter')
ee.regexp_eatPatternCharacters = function (e) {
	for (var t = e.pos, r = 0; (r = e.current()) !== -1 && !Li(r); ) e.advance()
	return e.pos !== t
}
ee.regexp_eatExtendedPatternCharacter = function (e) {
	var t = e.current()
	return t !== -1 &&
		t !== 36 &&
		!(t >= 40 && t <= 43) &&
		t !== 46 &&
		t !== 63 &&
		t !== 91 &&
		t !== 94 &&
		t !== 124
		? (e.advance(), !0)
		: !1
}
ee.regexp_groupSpecifier = function (e) {
	if (e.eat(63)) {
		if (this.regexp_eatGroupName(e)) {
			e.groupNames.indexOf(e.lastStringValue) !== -1 && e.raise('Duplicate capture group name'),
				e.groupNames.push(e.lastStringValue)
			return
		}
		e.raise('Invalid group')
	}
}
ee.regexp_eatGroupName = function (e) {
	if (((e.lastStringValue = ''), e.eat(60))) {
		if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0
		e.raise('Invalid capture group name')
	}
	return !1
}
ee.regexp_eatRegExpIdentifierName = function (e) {
	if (((e.lastStringValue = ''), this.regexp_eatRegExpIdentifierStart(e))) {
		for (e.lastStringValue += zt(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e); )
			e.lastStringValue += zt(e.lastIntValue)
		return !0
	}
	return !1
}
ee.regexp_eatRegExpIdentifierStart = function (e) {
	var t = e.pos,
		r = this.options.ecmaVersion >= 11,
		n = e.current(r)
	return (
		e.advance(r),
		n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (n = e.lastIntValue),
		io(n) ? ((e.lastIntValue = n), !0) : ((e.pos = t), !1)
	)
}
function io(e) {
	return Ke(e, !0) || e === 36 || e === 95
}
u(io, 'isRegExpIdentifierStart')
ee.regexp_eatRegExpIdentifierPart = function (e) {
	var t = e.pos,
		r = this.options.ecmaVersion >= 11,
		n = e.current(r)
	return (
		e.advance(r),
		n === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, r) && (n = e.lastIntValue),
		uo(n) ? ((e.lastIntValue = n), !0) : ((e.pos = t), !1)
	)
}
function uo(e) {
	return it(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205
}
u(uo, 'isRegExpIdentifierPart')
ee.regexp_eatAtomEscape = function (e) {
	return this.regexp_eatBackReference(e) ||
		this.regexp_eatCharacterClassEscape(e) ||
		this.regexp_eatCharacterEscape(e) ||
		(e.switchN && this.regexp_eatKGroupName(e))
		? !0
		: (e.switchU &&
				(e.current() === 99 && e.raise('Invalid unicode escape'), e.raise('Invalid escape')),
		  !1)
}
ee.regexp_eatBackReference = function (e) {
	var t = e.pos
	if (this.regexp_eatDecimalEscape(e)) {
		var r = e.lastIntValue
		if (e.switchU) return r > e.maxBackReference && (e.maxBackReference = r), !0
		if (r <= e.numCapturingParens) return !0
		e.pos = t
	}
	return !1
}
ee.regexp_eatKGroupName = function (e) {
	if (e.eat(107)) {
		if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), !0
		e.raise('Invalid named reference')
	}
	return !1
}
ee.regexp_eatCharacterEscape = function (e) {
	return (
		this.regexp_eatControlEscape(e) ||
		this.regexp_eatCControlLetter(e) ||
		this.regexp_eatZero(e) ||
		this.regexp_eatHexEscapeSequence(e) ||
		this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) ||
		(!e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e)) ||
		this.regexp_eatIdentityEscape(e)
	)
}
ee.regexp_eatCControlLetter = function (e) {
	var t = e.pos
	if (e.eat(99)) {
		if (this.regexp_eatControlLetter(e)) return !0
		e.pos = t
	}
	return !1
}
ee.regexp_eatZero = function (e) {
	return e.current() === 48 && !tr(e.lookahead()) ? ((e.lastIntValue = 0), e.advance(), !0) : !1
}
ee.regexp_eatControlEscape = function (e) {
	var t = e.current()
	return t === 116
		? ((e.lastIntValue = 9), e.advance(), !0)
		: t === 110
		  ? ((e.lastIntValue = 10), e.advance(), !0)
		  : t === 118
		    ? ((e.lastIntValue = 11), e.advance(), !0)
		    : t === 102
		      ? ((e.lastIntValue = 12), e.advance(), !0)
		      : t === 114
		        ? ((e.lastIntValue = 13), e.advance(), !0)
		        : !1
}
ee.regexp_eatControlLetter = function (e) {
	var t = e.current()
	return Mi(t) ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1
}
function Mi(e) {
	return (e >= 65 && e <= 90) || (e >= 97 && e <= 122)
}
u(Mi, 'isControlLetter')
ee.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
	t === void 0 && (t = !1)
	var r = e.pos,
		n = t || e.switchU
	if (e.eat(117)) {
		if (this.regexp_eatFixedHexDigits(e, 4)) {
			var i = e.lastIntValue
			if (n && i >= 55296 && i <= 56319) {
				var s = e.pos
				if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
					var o = e.lastIntValue
					if (o >= 56320 && o <= 57343)
						return (e.lastIntValue = (i - 55296) * 1024 + (o - 56320) + 65536), !0
				}
				;(e.pos = s), (e.lastIntValue = i)
			}
			return !0
		}
		if (n && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && ao(e.lastIntValue))
			return !0
		n && e.raise('Invalid unicode escape'), (e.pos = r)
	}
	return !1
}
function ao(e) {
	return e >= 0 && e <= 1114111
}
u(ao, 'isValidUnicode')
ee.regexp_eatIdentityEscape = function (e) {
	if (e.switchU)
		return this.regexp_eatSyntaxCharacter(e) ? !0 : e.eat(47) ? ((e.lastIntValue = 47), !0) : !1
	var t = e.current()
	return t !== 99 && (!e.switchN || t !== 107) ? ((e.lastIntValue = t), e.advance(), !0) : !1
}
ee.regexp_eatDecimalEscape = function (e) {
	e.lastIntValue = 0
	var t = e.current()
	if (t >= 49 && t <= 57) {
		do (e.lastIntValue = 10 * e.lastIntValue + (t - 48)), e.advance()
		while ((t = e.current()) >= 48 && t <= 57)
		return !0
	}
	return !1
}
ee.regexp_eatCharacterClassEscape = function (e) {
	var t = e.current()
	if (so(t)) return (e.lastIntValue = -1), e.advance(), !0
	if (e.switchU && this.options.ecmaVersion >= 9 && (t === 80 || t === 112)) {
		if (
			((e.lastIntValue = -1),
			e.advance(),
			e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125))
		)
			return !0
		e.raise('Invalid property name')
	}
	return !1
}
function so(e) {
	return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87
}
u(so, 'isCharacterClassEscape')
ee.regexp_eatUnicodePropertyValueExpression = function (e) {
	var t = e.pos
	if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
		var r = e.lastStringValue
		if (this.regexp_eatUnicodePropertyValue(e)) {
			var n = e.lastStringValue
			return this.regexp_validateUnicodePropertyNameAndValue(e, r, n), !0
		}
	}
	if (((e.pos = t), this.regexp_eatLoneUnicodePropertyNameOrValue(e))) {
		var i = e.lastStringValue
		return this.regexp_validateUnicodePropertyNameOrValue(e, i), !0
	}
	return !1
}
ee.regexp_validateUnicodePropertyNameAndValue = function (e, t, r) {
	Kt(e.unicodeProperties.nonBinary, t) || e.raise('Invalid property name'),
		e.unicodeProperties.nonBinary[t].test(r) || e.raise('Invalid property value')
}
ee.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
	e.unicodeProperties.binary.test(t) || e.raise('Invalid property name')
}
ee.regexp_eatUnicodePropertyName = function (e) {
	var t = 0
	for (e.lastStringValue = ''; ji((t = e.current())); ) (e.lastStringValue += zt(t)), e.advance()
	return e.lastStringValue !== ''
}
function ji(e) {
	return Mi(e) || e === 95
}
u(ji, 'isUnicodePropertyNameCharacter')
ee.regexp_eatUnicodePropertyValue = function (e) {
	var t = 0
	for (e.lastStringValue = ''; oo((t = e.current())); ) (e.lastStringValue += zt(t)), e.advance()
	return e.lastStringValue !== ''
}
function oo(e) {
	return ji(e) || tr(e)
}
u(oo, 'isUnicodePropertyValueCharacter')
ee.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
	return this.regexp_eatUnicodePropertyValue(e)
}
ee.regexp_eatCharacterClass = function (e) {
	if (e.eat(91)) {
		if ((e.eat(94), this.regexp_classRanges(e), e.eat(93))) return !0
		e.raise('Unterminated character class')
	}
	return !1
}
ee.regexp_classRanges = function (e) {
	for (; this.regexp_eatClassAtom(e); ) {
		var t = e.lastIntValue
		if (e.eat(45) && this.regexp_eatClassAtom(e)) {
			var r = e.lastIntValue
			e.switchU && (t === -1 || r === -1) && e.raise('Invalid character class'),
				t !== -1 && r !== -1 && t > r && e.raise('Range out of order in character class')
		}
	}
}
ee.regexp_eatClassAtom = function (e) {
	var t = e.pos
	if (e.eat(92)) {
		if (this.regexp_eatClassEscape(e)) return !0
		if (e.switchU) {
			var r = e.current()
			;(r === 99 || Ui(r)) && e.raise('Invalid class escape'), e.raise('Invalid escape')
		}
		e.pos = t
	}
	var n = e.current()
	return n !== 93 ? ((e.lastIntValue = n), e.advance(), !0) : !1
}
ee.regexp_eatClassEscape = function (e) {
	var t = e.pos
	if (e.eat(98)) return (e.lastIntValue = 8), !0
	if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0
	if (!e.switchU && e.eat(99)) {
		if (this.regexp_eatClassControlLetter(e)) return !0
		e.pos = t
	}
	return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e)
}
ee.regexp_eatClassControlLetter = function (e) {
	var t = e.current()
	return tr(t) || t === 95 ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1
}
ee.regexp_eatHexEscapeSequence = function (e) {
	var t = e.pos
	if (e.eat(120)) {
		if (this.regexp_eatFixedHexDigits(e, 2)) return !0
		e.switchU && e.raise('Invalid escape'), (e.pos = t)
	}
	return !1
}
ee.regexp_eatDecimalDigits = function (e) {
	var t = e.pos,
		r = 0
	for (e.lastIntValue = 0; tr((r = e.current())); )
		(e.lastIntValue = 10 * e.lastIntValue + (r - 48)), e.advance()
	return e.pos !== t
}
function tr(e) {
	return e >= 48 && e <= 57
}
u(tr, 'isDecimalDigit')
ee.regexp_eatHexDigits = function (e) {
	var t = e.pos,
		r = 0
	for (e.lastIntValue = 0; Vi((r = e.current())); )
		(e.lastIntValue = 16 * e.lastIntValue + qi(r)), e.advance()
	return e.pos !== t
}
function Vi(e) {
	return (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102)
}
u(Vi, 'isHexDigit')
function qi(e) {
	return e >= 65 && e <= 70 ? 10 + (e - 65) : e >= 97 && e <= 102 ? 10 + (e - 97) : e - 48
}
u(qi, 'hexToInt')
ee.regexp_eatLegacyOctalEscapeSequence = function (e) {
	if (this.regexp_eatOctalDigit(e)) {
		var t = e.lastIntValue
		if (this.regexp_eatOctalDigit(e)) {
			var r = e.lastIntValue
			t <= 3 && this.regexp_eatOctalDigit(e)
				? (e.lastIntValue = t * 64 + r * 8 + e.lastIntValue)
				: (e.lastIntValue = t * 8 + r)
		} else e.lastIntValue = t
		return !0
	}
	return !1
}
ee.regexp_eatOctalDigit = function (e) {
	var t = e.current()
	return Ui(t) ? ((e.lastIntValue = t - 48), e.advance(), !0) : ((e.lastIntValue = 0), !1)
}
function Ui(e) {
	return e >= 48 && e <= 55
}
u(Ui, 'isOctalDigit')
ee.regexp_eatFixedHexDigits = function (e, t) {
	var r = e.pos
	e.lastIntValue = 0
	for (var n = 0; n < t; ++n) {
		var i = e.current()
		if (!Vi(i)) return (e.pos = r), !1
		;(e.lastIntValue = 16 * e.lastIntValue + qi(i)), e.advance()
	}
	return !0
}
var rr = u(function (t) {
		;(this.type = t.type),
			(this.value = t.value),
			(this.start = t.start),
			(this.end = t.end),
			t.options.locations && (this.loc = new Nt(t, t.startLoc, t.endLoc)),
			t.options.ranges && (this.range = [t.start, t.end])
	}, 'Token'),
	pe = ve.prototype
pe.next = function (e) {
	!e &&
		this.type.keyword &&
		this.containsEsc &&
		this.raiseRecoverable(this.start, 'Escape sequence in keyword ' + this.type.keyword),
		this.options.onToken && this.options.onToken(new rr(this)),
		(this.lastTokEnd = this.end),
		(this.lastTokStart = this.start),
		(this.lastTokEndLoc = this.endLoc),
		(this.lastTokStartLoc = this.startLoc),
		this.nextToken()
}
pe.getToken = function () {
	return this.next(), new rr(this)
}
typeof Symbol < 'u' &&
	(pe[Symbol.iterator] = function () {
		var e = this
		return {
			next: function () {
				var t = e.getToken()
				return { done: t.type === d.eof, value: t }
			},
		}
	})
pe.curContext = function () {
	return this.context[this.context.length - 1]
}
pe.nextToken = function () {
	var e = this.curContext()
	if (
		((!e || !e.preserveSpace) && this.skipSpace(),
		(this.start = this.pos),
		this.options.locations && (this.startLoc = this.curPosition()),
		this.pos >= this.input.length)
	)
		return this.finishToken(d.eof)
	if (e.override) return e.override(this)
	this.readToken(this.fullCharCodeAtPos())
}
pe.readToken = function (e) {
	return Ke(e, this.options.ecmaVersion >= 6) || e === 92
		? this.readWord()
		: this.getTokenFromCode(e)
}
pe.fullCharCodeAtPos = function () {
	var e = this.input.charCodeAt(this.pos)
	if (e <= 55295 || e >= 57344) return e
	var t = this.input.charCodeAt(this.pos + 1)
	return (e << 10) + t - 56613888
}
pe.skipBlockComment = function () {
	var e = this.options.onComment && this.curPosition(),
		t = this.pos,
		r = this.input.indexOf('*/', (this.pos += 2))
	if (
		(r === -1 && this.raise(this.pos - 2, 'Unterminated comment'),
		(this.pos = r + 2),
		this.options.locations)
	) {
		mt.lastIndex = t
		for (var n; (n = mt.exec(this.input)) && n.index < this.pos; )
			++this.curLine, (this.lineStart = n.index + n[0].length)
	}
	this.options.onComment &&
		this.options.onComment(!0, this.input.slice(t + 2, r), t, this.pos, e, this.curPosition())
}
pe.skipLineComment = function (e) {
	for (
		var t = this.pos,
			r = this.options.onComment && this.curPosition(),
			n = this.input.charCodeAt((this.pos += e));
		this.pos < this.input.length && !Ct(n);

	)
		n = this.input.charCodeAt(++this.pos)
	this.options.onComment &&
		this.options.onComment(
			!1,
			this.input.slice(t + e, this.pos),
			t,
			this.pos,
			r,
			this.curPosition(),
		)
}
pe.skipSpace = function () {
	e: for (; this.pos < this.input.length; ) {
		var e = this.input.charCodeAt(this.pos)
		switch (e) {
			case 32:
			case 160:
				++this.pos
				break
			case 13:
				this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos
			case 10:
			case 8232:
			case 8233:
				++this.pos, this.options.locations && (++this.curLine, (this.lineStart = this.pos))
				break
			case 47:
				switch (this.input.charCodeAt(this.pos + 1)) {
					case 42:
						this.skipBlockComment()
						break
					case 47:
						this.skipLineComment(2)
						break
					default:
						break e
				}
				break
			default:
				if ((e > 8 && e < 14) || (e >= 5760 && Pr.test(String.fromCharCode(e)))) ++this.pos
				else break e
		}
	}
}
pe.finishToken = function (e, t) {
	;(this.end = this.pos), this.options.locations && (this.endLoc = this.curPosition())
	var r = this.type
	;(this.type = e), (this.value = t), this.updateContext(r)
}
pe.readToken_dot = function () {
	var e = this.input.charCodeAt(this.pos + 1)
	if (e >= 48 && e <= 57) return this.readNumber(!0)
	var t = this.input.charCodeAt(this.pos + 2)
	return this.options.ecmaVersion >= 6 && e === 46 && t === 46
		? ((this.pos += 3), this.finishToken(d.ellipsis))
		: (++this.pos, this.finishToken(d.dot))
}
pe.readToken_slash = function () {
	var e = this.input.charCodeAt(this.pos + 1)
	return this.exprAllowed
		? (++this.pos, this.readRegexp())
		: e === 61
		  ? this.finishOp(d.assign, 2)
		  : this.finishOp(d.slash, 1)
}
pe.readToken_mult_modulo_exp = function (e) {
	var t = this.input.charCodeAt(this.pos + 1),
		r = 1,
		n = e === 42 ? d.star : d.modulo
	return (
		this.options.ecmaVersion >= 7 &&
			e === 42 &&
			t === 42 &&
			(++r, (n = d.starstar), (t = this.input.charCodeAt(this.pos + 2))),
		t === 61 ? this.finishOp(d.assign, r + 1) : this.finishOp(n, r)
	)
}
pe.readToken_pipe_amp = function (e) {
	var t = this.input.charCodeAt(this.pos + 1)
	if (t === e) {
		if (this.options.ecmaVersion >= 12) {
			var r = this.input.charCodeAt(this.pos + 2)
			if (r === 61) return this.finishOp(d.assign, 3)
		}
		return this.finishOp(e === 124 ? d.logicalOR : d.logicalAND, 2)
	}
	return t === 61
		? this.finishOp(d.assign, 2)
		: this.finishOp(e === 124 ? d.bitwiseOR : d.bitwiseAND, 1)
}
pe.readToken_caret = function () {
	var e = this.input.charCodeAt(this.pos + 1)
	return e === 61 ? this.finishOp(d.assign, 2) : this.finishOp(d.bitwiseXOR, 1)
}
pe.readToken_plus_min = function (e) {
	var t = this.input.charCodeAt(this.pos + 1)
	return t === e
		? t === 45 &&
		  !this.inModule &&
		  this.input.charCodeAt(this.pos + 2) === 62 &&
		  (this.lastTokEnd === 0 || Re.test(this.input.slice(this.lastTokEnd, this.pos)))
			? (this.skipLineComment(3), this.skipSpace(), this.nextToken())
			: this.finishOp(d.incDec, 2)
		: t === 61
		  ? this.finishOp(d.assign, 2)
		  : this.finishOp(d.plusMin, 1)
}
pe.readToken_lt_gt = function (e) {
	var t = this.input.charCodeAt(this.pos + 1),
		r = 1
	return t === e
		? ((r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2),
		  this.input.charCodeAt(this.pos + r) === 61
				? this.finishOp(d.assign, r + 1)
				: this.finishOp(d.bitShift, r))
		: t === 33 &&
		    e === 60 &&
		    !this.inModule &&
		    this.input.charCodeAt(this.pos + 2) === 45 &&
		    this.input.charCodeAt(this.pos + 3) === 45
		  ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
		  : (t === 61 && (r = 2), this.finishOp(d.relational, r))
}
pe.readToken_eq_excl = function (e) {
	var t = this.input.charCodeAt(this.pos + 1)
	return t === 61
		? this.finishOp(d.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2)
		: e === 61 && t === 62 && this.options.ecmaVersion >= 6
		  ? ((this.pos += 2), this.finishToken(d.arrow))
		  : this.finishOp(e === 61 ? d.eq : d.prefix, 1)
}
pe.readToken_question = function () {
	var e = this.options.ecmaVersion
	if (e >= 11) {
		var t = this.input.charCodeAt(this.pos + 1)
		if (t === 46) {
			var r = this.input.charCodeAt(this.pos + 2)
			if (r < 48 || r > 57) return this.finishOp(d.questionDot, 2)
		}
		if (t === 63) {
			if (e >= 12) {
				var n = this.input.charCodeAt(this.pos + 2)
				if (n === 61) return this.finishOp(d.assign, 3)
			}
			return this.finishOp(d.coalesce, 2)
		}
	}
	return this.finishOp(d.question, 1)
}
pe.getTokenFromCode = function (e) {
	switch (e) {
		case 46:
			return this.readToken_dot()
		case 40:
			return ++this.pos, this.finishToken(d.parenL)
		case 41:
			return ++this.pos, this.finishToken(d.parenR)
		case 59:
			return ++this.pos, this.finishToken(d.semi)
		case 44:
			return ++this.pos, this.finishToken(d.comma)
		case 91:
			return ++this.pos, this.finishToken(d.bracketL)
		case 93:
			return ++this.pos, this.finishToken(d.bracketR)
		case 123:
			return ++this.pos, this.finishToken(d.braceL)
		case 125:
			return ++this.pos, this.finishToken(d.braceR)
		case 58:
			return ++this.pos, this.finishToken(d.colon)
		case 96:
			if (this.options.ecmaVersion < 6) break
			return ++this.pos, this.finishToken(d.backQuote)
		case 48:
			var t = this.input.charCodeAt(this.pos + 1)
			if (t === 120 || t === 88) return this.readRadixNumber(16)
			if (this.options.ecmaVersion >= 6) {
				if (t === 111 || t === 79) return this.readRadixNumber(8)
				if (t === 98 || t === 66) return this.readRadixNumber(2)
			}
		case 49:
		case 50:
		case 51:
		case 52:
		case 53:
		case 54:
		case 55:
		case 56:
		case 57:
			return this.readNumber(!1)
		case 34:
		case 39:
			return this.readString(e)
		case 47:
			return this.readToken_slash()
		case 37:
		case 42:
			return this.readToken_mult_modulo_exp(e)
		case 124:
		case 38:
			return this.readToken_pipe_amp(e)
		case 94:
			return this.readToken_caret()
		case 43:
		case 45:
			return this.readToken_plus_min(e)
		case 60:
		case 62:
			return this.readToken_lt_gt(e)
		case 61:
		case 33:
			return this.readToken_eq_excl(e)
		case 63:
			return this.readToken_question()
		case 126:
			return this.finishOp(d.prefix, 1)
	}
	this.raise(this.pos, "Unexpected character '" + Ur(e) + "'")
}
pe.finishOp = function (e, t) {
	var r = this.input.slice(this.pos, this.pos + t)
	return (this.pos += t), this.finishToken(e, r)
}
pe.readRegexp = function () {
	for (var e, t, r = this.pos; ; ) {
		this.pos >= this.input.length && this.raise(r, 'Unterminated regular expression')
		var n = this.input.charAt(this.pos)
		if ((Re.test(n) && this.raise(r, 'Unterminated regular expression'), e)) e = !1
		else {
			if (n === '[') t = !0
			else if (n === ']' && t) t = !1
			else if (n === '/' && !t) break
			e = n === '\\'
		}
		++this.pos
	}
	var i = this.input.slice(r, this.pos)
	++this.pos
	var s = this.pos,
		o = this.readWord1()
	this.containsEsc && this.unexpected(s)
	var c = this.regexpState || (this.regexpState = new Ye(this))
	c.reset(r, i, o), this.validateRegExpFlags(c), this.validateRegExpPattern(c)
	var h = null
	try {
		h = new RegExp(i, o)
	} catch {}
	return this.finishToken(d.regexp, { pattern: i, flags: o, value: h })
}
pe.readInt = function (e, t, r) {
	for (
		var n = this.options.ecmaVersion >= 12 && t === void 0,
			i = r && this.input.charCodeAt(this.pos) === 48,
			s = this.pos,
			o = 0,
			c = 0,
			h = 0,
			g = t == null ? 1 / 0 : t;
		h < g;
		++h, ++this.pos
	) {
		var D = this.input.charCodeAt(this.pos),
			x = void 0
		if (n && D === 95) {
			i &&
				this.raiseRecoverable(
					this.pos,
					'Numeric separator is not allowed in legacy octal numeric literals',
				),
				c === 95 &&
					this.raiseRecoverable(this.pos, 'Numeric separator must be exactly one underscore'),
				h === 0 &&
					this.raiseRecoverable(
						this.pos,
						'Numeric separator is not allowed at the first of digits',
					),
				(c = D)
			continue
		}
		if (
			(D >= 97
				? (x = D - 97 + 10)
				: D >= 65
				  ? (x = D - 65 + 10)
				  : D >= 48 && D <= 57
				    ? (x = D - 48)
				    : (x = 1 / 0),
			x >= e)
		)
			break
		;(c = D), (o = o * e + x)
	}
	return (
		n &&
			c === 95 &&
			this.raiseRecoverable(this.pos - 1, 'Numeric separator is not allowed at the last of digits'),
		this.pos === s || (t != null && this.pos - s !== t) ? null : o
	)
}
function lo(e, t) {
	return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ''))
}
u(lo, 'stringToNumber')
function Wi(e) {
	return typeof BigInt != 'function' ? null : BigInt(e.replace(/_/g, ''))
}
u(Wi, 'stringToBigInt')
pe.readRadixNumber = function (e) {
	var t = this.pos
	this.pos += 2
	var r = this.readInt(e)
	return (
		r == null && this.raise(this.start + 2, 'Expected number in radix ' + e),
		this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110
			? ((r = Wi(this.input.slice(t, this.pos))), ++this.pos)
			: Ke(this.fullCharCodeAtPos()) && this.raise(this.pos, 'Identifier directly after number'),
		this.finishToken(d.num, r)
	)
}
pe.readNumber = function (e) {
	var t = this.pos
	!e && this.readInt(10, void 0, !0) === null && this.raise(t, 'Invalid number')
	var r = this.pos - t >= 2 && this.input.charCodeAt(t) === 48
	r && this.strict && this.raise(t, 'Invalid number')
	var n = this.input.charCodeAt(this.pos)
	if (!r && !e && this.options.ecmaVersion >= 11 && n === 110) {
		var i = Wi(this.input.slice(t, this.pos))
		return (
			++this.pos,
			Ke(this.fullCharCodeAtPos()) && this.raise(this.pos, 'Identifier directly after number'),
			this.finishToken(d.num, i)
		)
	}
	r && /[89]/.test(this.input.slice(t, this.pos)) && (r = !1),
		n === 46 && !r && (++this.pos, this.readInt(10), (n = this.input.charCodeAt(this.pos))),
		(n === 69 || n === 101) &&
			!r &&
			((n = this.input.charCodeAt(++this.pos)),
			(n === 43 || n === 45) && ++this.pos,
			this.readInt(10) === null && this.raise(t, 'Invalid number')),
		Ke(this.fullCharCodeAtPos()) && this.raise(this.pos, 'Identifier directly after number')
	var s = lo(this.input.slice(t, this.pos), r)
	return this.finishToken(d.num, s)
}
pe.readCodePoint = function () {
	var e = this.input.charCodeAt(this.pos),
		t
	if (e === 123) {
		this.options.ecmaVersion < 6 && this.unexpected()
		var r = ++this.pos
		;(t = this.readHexChar(this.input.indexOf('}', this.pos) - this.pos)),
			++this.pos,
			t > 1114111 && this.invalidStringToken(r, 'Code point out of bounds')
	} else t = this.readHexChar(4)
	return t
}
function Ur(e) {
	return e <= 65535
		? String.fromCharCode(e)
		: ((e -= 65536), String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320))
}
u(Ur, 'codePointToString$1')
pe.readString = function (e) {
	for (var t = '', r = ++this.pos; ; ) {
		this.pos >= this.input.length && this.raise(this.start, 'Unterminated string constant')
		var n = this.input.charCodeAt(this.pos)
		if (n === e) break
		n === 92
			? ((t += this.input.slice(r, this.pos)), (t += this.readEscapedChar(!1)), (r = this.pos))
			: (Ct(n, this.options.ecmaVersion >= 10) &&
					this.raise(this.start, 'Unterminated string constant'),
			  ++this.pos)
	}
	return (t += this.input.slice(r, this.pos++)), this.finishToken(d.string, t)
}
var Gi = {}
pe.tryReadTemplateToken = function () {
	this.inTemplateElement = !0
	try {
		this.readTmplToken()
	} catch (e) {
		if (e === Gi) this.readInvalidTemplateToken()
		else throw e
	}
	this.inTemplateElement = !1
}
pe.invalidStringToken = function (e, t) {
	if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Gi
	this.raise(e, t)
}
pe.readTmplToken = function () {
	for (var e = '', t = this.pos; ; ) {
		this.pos >= this.input.length && this.raise(this.start, 'Unterminated template')
		var r = this.input.charCodeAt(this.pos)
		if (r === 96 || (r === 36 && this.input.charCodeAt(this.pos + 1) === 123))
			return this.pos === this.start &&
				(this.type === d.template || this.type === d.invalidTemplate)
				? r === 36
					? ((this.pos += 2), this.finishToken(d.dollarBraceL))
					: (++this.pos, this.finishToken(d.backQuote))
				: ((e += this.input.slice(t, this.pos)), this.finishToken(d.template, e))
		if (r === 92)
			(e += this.input.slice(t, this.pos)), (e += this.readEscapedChar(!0)), (t = this.pos)
		else if (Ct(r)) {
			switch (((e += this.input.slice(t, this.pos)), ++this.pos, r)) {
				case 13:
					this.input.charCodeAt(this.pos) === 10 && ++this.pos
				case 10:
					e += `
`
					break
				default:
					e += String.fromCharCode(r)
					break
			}
			this.options.locations && (++this.curLine, (this.lineStart = this.pos)), (t = this.pos)
		} else ++this.pos
	}
}
pe.readInvalidTemplateToken = function () {
	for (; this.pos < this.input.length; this.pos++)
		switch (this.input[this.pos]) {
			case '\\':
				++this.pos
				break
			case '$':
				if (this.input[this.pos + 1] !== '{') break
			case '`':
				return this.finishToken(d.invalidTemplate, this.input.slice(this.start, this.pos))
		}
	this.raise(this.start, 'Unterminated template')
}
pe.readEscapedChar = function (e) {
	var t = this.input.charCodeAt(++this.pos)
	switch ((++this.pos, t)) {
		case 110:
			return `
`
		case 114:
			return '\r'
		case 120:
			return String.fromCharCode(this.readHexChar(2))
		case 117:
			return Ur(this.readCodePoint())
		case 116:
			return '	'
		case 98:
			return '\b'
		case 118:
			return '\v'
		case 102:
			return '\f'
		case 13:
			this.input.charCodeAt(this.pos) === 10 && ++this.pos
		case 10:
			return this.options.locations && ((this.lineStart = this.pos), ++this.curLine), ''
		case 56:
		case 57:
			if (e) {
				var r = this.pos - 1
				return this.invalidStringToken(r, 'Invalid escape sequence in template string'), null
			}
		default:
			if (t >= 48 && t <= 55) {
				var n = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
					i = parseInt(n, 8)
				return (
					i > 255 && ((n = n.slice(0, -1)), (i = parseInt(n, 8))),
					(this.pos += n.length - 1),
					(t = this.input.charCodeAt(this.pos)),
					(n !== '0' || t === 56 || t === 57) &&
						(this.strict || e) &&
						this.invalidStringToken(
							this.pos - 1 - n.length,
							e ? 'Octal literal in template string' : 'Octal literal in strict mode',
						),
					String.fromCharCode(i)
				)
			}
			return Ct(t) ? '' : String.fromCharCode(t)
	}
}
pe.readHexChar = function (e) {
	var t = this.pos,
		r = this.readInt(16, e)
	return r === null && this.invalidStringToken(t, 'Bad character escape sequence'), r
}
pe.readWord1 = function () {
	this.containsEsc = !1
	for (
		var e = '', t = !0, r = this.pos, n = this.options.ecmaVersion >= 6;
		this.pos < this.input.length;

	) {
		var i = this.fullCharCodeAtPos()
		if (it(i, n)) this.pos += i <= 65535 ? 1 : 2
		else if (i === 92) {
			;(this.containsEsc = !0), (e += this.input.slice(r, this.pos))
			var s = this.pos
			this.input.charCodeAt(++this.pos) !== 117 &&
				this.invalidStringToken(this.pos, 'Expecting Unicode escape sequence \\uXXXX'),
				++this.pos
			var o = this.readCodePoint()
			;(t ? Ke : it)(o, n) || this.invalidStringToken(s, 'Invalid Unicode escape'),
				(e += Ur(o)),
				(r = this.pos)
		} else break
		t = !1
	}
	return e + this.input.slice(r, this.pos)
}
pe.readWord = function () {
	var e = this.readWord1(),
		t = d.name
	return this.keywords.test(e) && (t = Qt[e]), this.finishToken(t, e)
}
var zi = '7.4.1'
ve.acorn = {
	Parser: ve,
	version: zi,
	defaultOptions: Wt,
	Position: gt,
	SourceLocation: Nt,
	getLineInfo: Rr,
	Node: Yt,
	TokenType: me,
	tokTypes: d,
	keywordTypes: Qt,
	TokContext: je,
	tokContexts: Fe,
	isIdentifierChar: it,
	isIdentifierStart: Ke,
	Token: rr,
	isNewLine: Ct,
	lineBreak: Re,
	lineBreakG: mt,
	nonASCIIwhitespace: Pr,
}
function co(e, t) {
	return ve.parse(e, t)
}
u(co, 'parse$1')
function fo(e, t, r) {
	return ve.parseExpressionAt(e, t, r)
}
u(fo, 'parseExpressionAt')
function po(e, t) {
	return ve.tokenizer(e, t)
}
u(po, 'tokenizer')
const ho = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			Node: Yt,
			Parser: ve,
			Position: gt,
			SourceLocation: Nt,
			TokContext: je,
			Token: rr,
			TokenType: me,
			defaultOptions: Wt,
			getLineInfo: Rr,
			isIdentifierChar: it,
			isIdentifierStart: Ke,
			isNewLine: Ct,
			keywordTypes: Qt,
			lineBreak: Re,
			lineBreakG: mt,
			nonASCIIwhitespace: Pr,
			parse: co,
			parseExpressionAt: fo,
			tokContexts: Fe,
			tokTypes: d,
			tokenizer: po,
			version: zi,
		},
		Symbol.toStringTag,
		{ value: 'Module' },
	),
)
var $i = { exports: {} },
	mo = {
		quot: '"',
		amp: '&',
		apos: "'",
		lt: '<',
		gt: '>',
		nbsp: '\xA0',
		iexcl: '\xA1',
		cent: '\xA2',
		pound: '\xA3',
		curren: '\xA4',
		yen: '\xA5',
		brvbar: '\xA6',
		sect: '\xA7',
		uml: '\xA8',
		copy: '\xA9',
		ordf: '\xAA',
		laquo: '\xAB',
		not: '\xAC',
		shy: '\xAD',
		reg: '\xAE',
		macr: '\xAF',
		deg: '\xB0',
		plusmn: '\xB1',
		sup2: '\xB2',
		sup3: '\xB3',
		acute: '\xB4',
		micro: '\xB5',
		para: '\xB6',
		middot: '\xB7',
		cedil: '\xB8',
		sup1: '\xB9',
		ordm: '\xBA',
		raquo: '\xBB',
		frac14: '\xBC',
		frac12: '\xBD',
		frac34: '\xBE',
		iquest: '\xBF',
		Agrave: '\xC0',
		Aacute: '\xC1',
		Acirc: '\xC2',
		Atilde: '\xC3',
		Auml: '\xC4',
		Aring: '\xC5',
		AElig: '\xC6',
		Ccedil: '\xC7',
		Egrave: '\xC8',
		Eacute: '\xC9',
		Ecirc: '\xCA',
		Euml: '\xCB',
		Igrave: '\xCC',
		Iacute: '\xCD',
		Icirc: '\xCE',
		Iuml: '\xCF',
		ETH: '\xD0',
		Ntilde: '\xD1',
		Ograve: '\xD2',
		Oacute: '\xD3',
		Ocirc: '\xD4',
		Otilde: '\xD5',
		Ouml: '\xD6',
		times: '\xD7',
		Oslash: '\xD8',
		Ugrave: '\xD9',
		Uacute: '\xDA',
		Ucirc: '\xDB',
		Uuml: '\xDC',
		Yacute: '\xDD',
		THORN: '\xDE',
		szlig: '\xDF',
		agrave: '\xE0',
		aacute: '\xE1',
		acirc: '\xE2',
		atilde: '\xE3',
		auml: '\xE4',
		aring: '\xE5',
		aelig: '\xE6',
		ccedil: '\xE7',
		egrave: '\xE8',
		eacute: '\xE9',
		ecirc: '\xEA',
		euml: '\xEB',
		igrave: '\xEC',
		iacute: '\xED',
		icirc: '\xEE',
		iuml: '\xEF',
		eth: '\xF0',
		ntilde: '\xF1',
		ograve: '\xF2',
		oacute: '\xF3',
		ocirc: '\xF4',
		otilde: '\xF5',
		ouml: '\xF6',
		divide: '\xF7',
		oslash: '\xF8',
		ugrave: '\xF9',
		uacute: '\xFA',
		ucirc: '\xFB',
		uuml: '\xFC',
		yacute: '\xFD',
		thorn: '\xFE',
		yuml: '\xFF',
		OElig: '\u0152',
		oelig: '\u0153',
		Scaron: '\u0160',
		scaron: '\u0161',
		Yuml: '\u0178',
		fnof: '\u0192',
		circ: '\u02C6',
		tilde: '\u02DC',
		Alpha: '\u0391',
		Beta: '\u0392',
		Gamma: '\u0393',
		Delta: '\u0394',
		Epsilon: '\u0395',
		Zeta: '\u0396',
		Eta: '\u0397',
		Theta: '\u0398',
		Iota: '\u0399',
		Kappa: '\u039A',
		Lambda: '\u039B',
		Mu: '\u039C',
		Nu: '\u039D',
		Xi: '\u039E',
		Omicron: '\u039F',
		Pi: '\u03A0',
		Rho: '\u03A1',
		Sigma: '\u03A3',
		Tau: '\u03A4',
		Upsilon: '\u03A5',
		Phi: '\u03A6',
		Chi: '\u03A7',
		Psi: '\u03A8',
		Omega: '\u03A9',
		alpha: '\u03B1',
		beta: '\u03B2',
		gamma: '\u03B3',
		delta: '\u03B4',
		epsilon: '\u03B5',
		zeta: '\u03B6',
		eta: '\u03B7',
		theta: '\u03B8',
		iota: '\u03B9',
		kappa: '\u03BA',
		lambda: '\u03BB',
		mu: '\u03BC',
		nu: '\u03BD',
		xi: '\u03BE',
		omicron: '\u03BF',
		pi: '\u03C0',
		rho: '\u03C1',
		sigmaf: '\u03C2',
		sigma: '\u03C3',
		tau: '\u03C4',
		upsilon: '\u03C5',
		phi: '\u03C6',
		chi: '\u03C7',
		psi: '\u03C8',
		omega: '\u03C9',
		thetasym: '\u03D1',
		upsih: '\u03D2',
		piv: '\u03D6',
		ensp: '\u2002',
		emsp: '\u2003',
		thinsp: '\u2009',
		zwnj: '\u200C',
		zwj: '\u200D',
		lrm: '\u200E',
		rlm: '\u200F',
		ndash: '\u2013',
		mdash: '\u2014',
		lsquo: '\u2018',
		rsquo: '\u2019',
		sbquo: '\u201A',
		ldquo: '\u201C',
		rdquo: '\u201D',
		bdquo: '\u201E',
		dagger: '\u2020',
		Dagger: '\u2021',
		bull: '\u2022',
		hellip: '\u2026',
		permil: '\u2030',
		prime: '\u2032',
		Prime: '\u2033',
		lsaquo: '\u2039',
		rsaquo: '\u203A',
		oline: '\u203E',
		frasl: '\u2044',
		euro: '\u20AC',
		image: '\u2111',
		weierp: '\u2118',
		real: '\u211C',
		trade: '\u2122',
		alefsym: '\u2135',
		larr: '\u2190',
		uarr: '\u2191',
		rarr: '\u2192',
		darr: '\u2193',
		harr: '\u2194',
		crarr: '\u21B5',
		lArr: '\u21D0',
		uArr: '\u21D1',
		rArr: '\u21D2',
		dArr: '\u21D3',
		hArr: '\u21D4',
		forall: '\u2200',
		part: '\u2202',
		exist: '\u2203',
		empty: '\u2205',
		nabla: '\u2207',
		isin: '\u2208',
		notin: '\u2209',
		ni: '\u220B',
		prod: '\u220F',
		sum: '\u2211',
		minus: '\u2212',
		lowast: '\u2217',
		radic: '\u221A',
		prop: '\u221D',
		infin: '\u221E',
		ang: '\u2220',
		and: '\u2227',
		or: '\u2228',
		cap: '\u2229',
		cup: '\u222A',
		int: '\u222B',
		there4: '\u2234',
		sim: '\u223C',
		cong: '\u2245',
		asymp: '\u2248',
		ne: '\u2260',
		equiv: '\u2261',
		le: '\u2264',
		ge: '\u2265',
		sub: '\u2282',
		sup: '\u2283',
		nsub: '\u2284',
		sube: '\u2286',
		supe: '\u2287',
		oplus: '\u2295',
		otimes: '\u2297',
		perp: '\u22A5',
		sdot: '\u22C5',
		lceil: '\u2308',
		rceil: '\u2309',
		lfloor: '\u230A',
		rfloor: '\u230B',
		lang: '\u2329',
		rang: '\u232A',
		loz: '\u25CA',
		spades: '\u2660',
		clubs: '\u2663',
		hearts: '\u2665',
		diams: '\u2666',
	}
const _n = Su(ho)
;(function (e) {
	const t = mo,
		r = /^[\da-fA-F]+$/,
		n = /^\d+$/,
		i = new WeakMap()
	function s(h) {
		h = h.Parser.acorn || h
		let g = i.get(h)
		if (!g) {
			const D = h.tokTypes,
				x = h.TokContext,
				E = h.TokenType,
				v = new x('<tag', !1),
				b = new x('</tag', !1),
				C = new x('<tag>...</tag>', !0, !0),
				B = { tc_oTag: v, tc_cTag: b, tc_expr: C },
				U = {
					jsxName: new E('jsxName'),
					jsxText: new E('jsxText', { beforeExpr: !0 }),
					jsxTagStart: new E('jsxTagStart', { startsExpr: !0 }),
					jsxTagEnd: new E('jsxTagEnd'),
				}
			;(U.jsxTagStart.updateContext = function () {
				this.context.push(C), this.context.push(v), (this.exprAllowed = !1)
			}),
				(U.jsxTagEnd.updateContext = function (j) {
					let Q = this.context.pop()
					;(Q === v && j === D.slash) || Q === b
						? (this.context.pop(), (this.exprAllowed = this.curContext() === C))
						: (this.exprAllowed = !0)
				}),
				(g = { tokContexts: B, tokTypes: U }),
				i.set(h, g)
		}
		return g
	}
	u(s, 'getJsxTokens')
	function o(h) {
		if (!h) return h
		if (h.type === 'JSXIdentifier') return h.name
		if (h.type === 'JSXNamespacedName') return h.namespace.name + ':' + h.name.name
		if (h.type === 'JSXMemberExpression') return o(h.object) + '.' + o(h.property)
	}
	u(o, 'getQualifiedJSXName'),
		(e.exports = function (h) {
			return (
				(h = h || {}),
				function (g) {
					return c(
						{
							allowNamespaces: h.allowNamespaces !== !1,
							allowNamespacedObjects: !!h.allowNamespacedObjects,
						},
						g,
					)
				}
			)
		}),
		Object.defineProperty(e.exports, 'tokTypes', {
			get: u(function () {
				return s(_n).tokTypes
			}, 'get_tokTypes'),
			configurable: !0,
			enumerable: !0,
		})
	function c(h, g) {
		const D = g.acorn || _n,
			x = s(D),
			E = D.tokTypes,
			v = x.tokTypes,
			b = D.tokContexts,
			C = x.tokContexts.tc_oTag,
			B = x.tokContexts.tc_cTag,
			U = x.tokContexts.tc_expr,
			j = D.isNewLine,
			Q = D.isIdentifierStart,
			w = D.isIdentifierChar
		return class extends g {
			static get acornJsx() {
				return x
			}
			jsx_readToken() {
				let m = '',
					y = this.pos
				for (;;) {
					this.pos >= this.input.length && this.raise(this.start, 'Unterminated JSX contents')
					let _ = this.input.charCodeAt(this.pos)
					switch (_) {
						case 60:
						case 123:
							return this.pos === this.start
								? _ === 60 && this.exprAllowed
									? (++this.pos, this.finishToken(v.jsxTagStart))
									: this.getTokenFromCode(_)
								: ((m += this.input.slice(y, this.pos)), this.finishToken(v.jsxText, m))
						case 38:
							;(m += this.input.slice(y, this.pos)), (m += this.jsx_readEntity()), (y = this.pos)
							break
						case 62:
						case 125:
							this.raise(
								this.pos,
								'Unexpected token `' +
									this.input[this.pos] +
									'`. Did you mean `' +
									(_ === 62 ? '&gt;' : '&rbrace;') +
									'` or `{"' +
									this.input[this.pos] +
									'"}`?',
							)
						default:
							j(_)
								? ((m += this.input.slice(y, this.pos)),
								  (m += this.jsx_readNewLine(!0)),
								  (y = this.pos))
								: ++this.pos
					}
				}
			}
			jsx_readNewLine(m) {
				let y = this.input.charCodeAt(this.pos),
					_
				return (
					++this.pos,
					y === 13 && this.input.charCodeAt(this.pos) === 10
						? (++this.pos,
						  (_ = m
								? `
`
								: `\r
`))
						: (_ = String.fromCharCode(y)),
					this.options.locations && (++this.curLine, (this.lineStart = this.pos)),
					_
				)
			}
			jsx_readString(m) {
				let y = '',
					_ = ++this.pos
				for (;;) {
					this.pos >= this.input.length && this.raise(this.start, 'Unterminated string constant')
					let F = this.input.charCodeAt(this.pos)
					if (F === m) break
					F === 38
						? ((y += this.input.slice(_, this.pos)), (y += this.jsx_readEntity()), (_ = this.pos))
						: j(F)
						  ? ((y += this.input.slice(_, this.pos)),
						    (y += this.jsx_readNewLine(!1)),
						    (_ = this.pos))
						  : ++this.pos
				}
				return (y += this.input.slice(_, this.pos++)), this.finishToken(E.string, y)
			}
			jsx_readEntity() {
				let m = '',
					y = 0,
					_,
					F = this.input[this.pos]
				F !== '&' && this.raise(this.pos, 'Entity must start with an ampersand')
				let z = ++this.pos
				for (; this.pos < this.input.length && y++ < 10; ) {
					if (((F = this.input[this.pos++]), F === ';')) {
						m[0] === '#'
							? m[1] === 'x'
								? ((m = m.substr(2)), r.test(m) && (_ = String.fromCharCode(parseInt(m, 16))))
								: ((m = m.substr(1)), n.test(m) && (_ = String.fromCharCode(parseInt(m, 10))))
							: (_ = t[m])
						break
					}
					m += F
				}
				return _ || ((this.pos = z), '&')
			}
			jsx_readWord() {
				let m,
					y = this.pos
				do m = this.input.charCodeAt(++this.pos)
				while (w(m) || m === 45)
				return this.finishToken(v.jsxName, this.input.slice(y, this.pos))
			}
			jsx_parseIdentifier() {
				let m = this.startNode()
				return (
					this.type === v.jsxName
						? (m.name = this.value)
						: this.type.keyword
						  ? (m.name = this.type.keyword)
						  : this.unexpected(),
					this.next(),
					this.finishNode(m, 'JSXIdentifier')
				)
			}
			jsx_parseNamespacedName() {
				let m = this.start,
					y = this.startLoc,
					_ = this.jsx_parseIdentifier()
				if (!h.allowNamespaces || !this.eat(E.colon)) return _
				var F = this.startNodeAt(m, y)
				return (
					(F.namespace = _),
					(F.name = this.jsx_parseIdentifier()),
					this.finishNode(F, 'JSXNamespacedName')
				)
			}
			jsx_parseElementName() {
				if (this.type === v.jsxTagEnd) return ''
				let m = this.start,
					y = this.startLoc,
					_ = this.jsx_parseNamespacedName()
				for (
					this.type === E.dot &&
					_.type === 'JSXNamespacedName' &&
					!h.allowNamespacedObjects &&
					this.unexpected();
					this.eat(E.dot);

				) {
					let F = this.startNodeAt(m, y)
					;(F.object = _),
						(F.property = this.jsx_parseIdentifier()),
						(_ = this.finishNode(F, 'JSXMemberExpression'))
				}
				return _
			}
			jsx_parseAttributeValue() {
				switch (this.type) {
					case E.braceL:
						let m = this.jsx_parseExpressionContainer()
						return (
							m.expression.type === 'JSXEmptyExpression' &&
								this.raise(m.start, 'JSX attributes must only be assigned a non-empty expression'),
							m
						)
					case v.jsxTagStart:
					case E.string:
						return this.parseExprAtom()
					default:
						this.raise(this.start, 'JSX value should be either an expression or a quoted JSX text')
				}
			}
			jsx_parseEmptyExpression() {
				let m = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc)
				return this.finishNodeAt(m, 'JSXEmptyExpression', this.start, this.startLoc)
			}
			jsx_parseExpressionContainer() {
				let m = this.startNode()
				return (
					this.next(),
					(m.expression =
						this.type === E.braceR ? this.jsx_parseEmptyExpression() : this.parseExpression()),
					this.expect(E.braceR),
					this.finishNode(m, 'JSXExpressionContainer')
				)
			}
			jsx_parseAttribute() {
				let m = this.startNode()
				return this.eat(E.braceL)
					? (this.expect(E.ellipsis),
					  (m.argument = this.parseMaybeAssign()),
					  this.expect(E.braceR),
					  this.finishNode(m, 'JSXSpreadAttribute'))
					: ((m.name = this.jsx_parseNamespacedName()),
					  (m.value = this.eat(E.eq) ? this.jsx_parseAttributeValue() : null),
					  this.finishNode(m, 'JSXAttribute'))
			}
			jsx_parseOpeningElementAt(m, y) {
				let _ = this.startNodeAt(m, y)
				_.attributes = []
				let F = this.jsx_parseElementName()
				for (F && (_.name = F); this.type !== E.slash && this.type !== v.jsxTagEnd; )
					_.attributes.push(this.jsx_parseAttribute())
				return (
					(_.selfClosing = this.eat(E.slash)),
					this.expect(v.jsxTagEnd),
					this.finishNode(_, F ? 'JSXOpeningElement' : 'JSXOpeningFragment')
				)
			}
			jsx_parseClosingElementAt(m, y) {
				let _ = this.startNodeAt(m, y),
					F = this.jsx_parseElementName()
				return (
					F && (_.name = F),
					this.expect(v.jsxTagEnd),
					this.finishNode(_, F ? 'JSXClosingElement' : 'JSXClosingFragment')
				)
			}
			jsx_parseElementAt(m, y) {
				let _ = this.startNodeAt(m, y),
					F = [],
					z = this.jsx_parseOpeningElementAt(m, y),
					W = null
				if (!z.selfClosing) {
					e: for (;;)
						switch (this.type) {
							case v.jsxTagStart:
								if (((m = this.start), (y = this.startLoc), this.next(), this.eat(E.slash))) {
									W = this.jsx_parseClosingElementAt(m, y)
									break e
								}
								F.push(this.jsx_parseElementAt(m, y))
								break
							case v.jsxText:
								F.push(this.parseExprAtom())
								break
							case E.braceL:
								F.push(this.jsx_parseExpressionContainer())
								break
							default:
								this.unexpected()
						}
					o(W.name) !== o(z.name) &&
						this.raise(W.start, 'Expected corresponding JSX closing tag for <' + o(z.name) + '>')
				}
				let M = z.name ? 'Element' : 'Fragment'
				return (
					(_['opening' + M] = z),
					(_['closing' + M] = W),
					(_.children = F),
					this.type === E.relational &&
						this.value === '<' &&
						this.raise(this.start, 'Adjacent JSX elements must be wrapped in an enclosing tag'),
					this.finishNode(_, 'JSX' + M)
				)
			}
			jsx_parseText() {
				let m = this.parseLiteral(this.value)
				return (m.type = 'JSXText'), m
			}
			jsx_parseElement() {
				let m = this.start,
					y = this.startLoc
				return this.next(), this.jsx_parseElementAt(m, y)
			}
			parseExprAtom(m) {
				return this.type === v.jsxText
					? this.jsx_parseText()
					: this.type === v.jsxTagStart
					  ? this.jsx_parseElement()
					  : super.parseExprAtom(m)
			}
			readToken(m) {
				let y = this.curContext()
				if (y === U) return this.jsx_readToken()
				if (y === C || y === B) {
					if (Q(m)) return this.jsx_readWord()
					if (m == 62) return ++this.pos, this.finishToken(v.jsxTagEnd)
					if ((m === 34 || m === 39) && y == C) return this.jsx_readString(m)
				}
				return m === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33
					? (++this.pos, this.finishToken(v.jsxTagStart))
					: super.readToken(m)
			}
			updateContext(m) {
				if (this.type == E.braceL) {
					var y = this.curContext()
					y == C
						? this.context.push(b.b_expr)
						: y == U
						  ? this.context.push(b.b_tmpl)
						  : super.updateContext(m),
						(this.exprAllowed = !0)
				} else if (this.type === E.slash && m === v.jsxTagStart)
					(this.context.length -= 2), this.context.push(B), (this.exprAllowed = !1)
				else return super.updateContext(m)
			}
		}
	}
	u(c, 'plugin')
})($i)
const go = $i.exports
function Ji(e, t, r, n, i) {
	r || (r = G),
		u(function s(o, c, h) {
			var g = h || o.type,
				D = t[g]
			r[g](o, c, s), D && D(o, c)
		}, 'c')(e, n, i)
}
u(Ji, 'simple')
function Ao(e, t, r, n, i) {
	var s = []
	r || (r = G),
		u(function o(c, h, g) {
			var D = g || c.type,
				x = t[D],
				E = c !== s[s.length - 1]
			E && s.push(c), r[D](c, h, o), x && x(c, h || s, s), E && s.pop()
		}, 'c')(e, n, i)
}
u(Ao, 'ancestor')
function Wr(e, t, r) {
	r(e, t)
}
u(Wr, 'skipThrough')
function at(e, t, r) {}
u(at, 'ignore')
var G = {}
G.Program = G.BlockStatement = function (e, t, r) {
	for (var n = 0, i = e.body; n < i.length; n += 1) {
		var s = i[n]
		r(s, t, 'Statement')
	}
}
G.Statement = Wr
G.EmptyStatement = at
G.ExpressionStatement =
	G.ParenthesizedExpression =
	G.ChainExpression =
		function (e, t, r) {
			return r(e.expression, t, 'Expression')
		}
G.IfStatement = function (e, t, r) {
	r(e.test, t, 'Expression'),
		r(e.consequent, t, 'Statement'),
		e.alternate && r(e.alternate, t, 'Statement')
}
G.LabeledStatement = function (e, t, r) {
	return r(e.body, t, 'Statement')
}
G.BreakStatement = G.ContinueStatement = at
G.WithStatement = function (e, t, r) {
	r(e.object, t, 'Expression'), r(e.body, t, 'Statement')
}
G.SwitchStatement = function (e, t, r) {
	r(e.discriminant, t, 'Expression')
	for (var n = 0, i = e.cases; n < i.length; n += 1) {
		var s = i[n]
		s.test && r(s.test, t, 'Expression')
		for (var o = 0, c = s.consequent; o < c.length; o += 1) {
			var h = c[o]
			r(h, t, 'Statement')
		}
	}
}
G.SwitchCase = function (e, t, r) {
	e.test && r(e.test, t, 'Expression')
	for (var n = 0, i = e.consequent; n < i.length; n += 1) {
		var s = i[n]
		r(s, t, 'Statement')
	}
}
G.ReturnStatement =
	G.YieldExpression =
	G.AwaitExpression =
		function (e, t, r) {
			e.argument && r(e.argument, t, 'Expression')
		}
G.ThrowStatement = G.SpreadElement = function (e, t, r) {
	return r(e.argument, t, 'Expression')
}
G.TryStatement = function (e, t, r) {
	r(e.block, t, 'Statement'),
		e.handler && r(e.handler, t),
		e.finalizer && r(e.finalizer, t, 'Statement')
}
G.CatchClause = function (e, t, r) {
	e.param && r(e.param, t, 'Pattern'), r(e.body, t, 'Statement')
}
G.WhileStatement = G.DoWhileStatement = function (e, t, r) {
	r(e.test, t, 'Expression'), r(e.body, t, 'Statement')
}
G.ForStatement = function (e, t, r) {
	e.init && r(e.init, t, 'ForInit'),
		e.test && r(e.test, t, 'Expression'),
		e.update && r(e.update, t, 'Expression'),
		r(e.body, t, 'Statement')
}
G.ForInStatement = G.ForOfStatement = function (e, t, r) {
	r(e.left, t, 'ForInit'), r(e.right, t, 'Expression'), r(e.body, t, 'Statement')
}
G.ForInit = function (e, t, r) {
	e.type === 'VariableDeclaration' ? r(e, t) : r(e, t, 'Expression')
}
G.DebuggerStatement = at
G.FunctionDeclaration = function (e, t, r) {
	return r(e, t, 'Function')
}
G.VariableDeclaration = function (e, t, r) {
	for (var n = 0, i = e.declarations; n < i.length; n += 1) {
		var s = i[n]
		r(s, t)
	}
}
G.VariableDeclarator = function (e, t, r) {
	r(e.id, t, 'Pattern'), e.init && r(e.init, t, 'Expression')
}
G.Function = function (e, t, r) {
	e.id && r(e.id, t, 'Pattern')
	for (var n = 0, i = e.params; n < i.length; n += 1) {
		var s = i[n]
		r(s, t, 'Pattern')
	}
	r(e.body, t, e.expression ? 'Expression' : 'Statement')
}
G.Pattern = function (e, t, r) {
	e.type === 'Identifier'
		? r(e, t, 'VariablePattern')
		: e.type === 'MemberExpression'
		  ? r(e, t, 'MemberPattern')
		  : r(e, t)
}
G.VariablePattern = at
G.MemberPattern = Wr
G.RestElement = function (e, t, r) {
	return r(e.argument, t, 'Pattern')
}
G.ArrayPattern = function (e, t, r) {
	for (var n = 0, i = e.elements; n < i.length; n += 1) {
		var s = i[n]
		s && r(s, t, 'Pattern')
	}
}
G.ObjectPattern = function (e, t, r) {
	for (var n = 0, i = e.properties; n < i.length; n += 1) {
		var s = i[n]
		s.type === 'Property'
			? (s.computed && r(s.key, t, 'Expression'), r(s.value, t, 'Pattern'))
			: s.type === 'RestElement' && r(s.argument, t, 'Pattern')
	}
}
G.Expression = Wr
G.ThisExpression = G.Super = G.MetaProperty = at
G.ArrayExpression = function (e, t, r) {
	for (var n = 0, i = e.elements; n < i.length; n += 1) {
		var s = i[n]
		s && r(s, t, 'Expression')
	}
}
G.ObjectExpression = function (e, t, r) {
	for (var n = 0, i = e.properties; n < i.length; n += 1) {
		var s = i[n]
		r(s, t)
	}
}
G.FunctionExpression = G.ArrowFunctionExpression = G.FunctionDeclaration
G.SequenceExpression = function (e, t, r) {
	for (var n = 0, i = e.expressions; n < i.length; n += 1) {
		var s = i[n]
		r(s, t, 'Expression')
	}
}
G.TemplateLiteral = function (e, t, r) {
	for (var n = 0, i = e.quasis; n < i.length; n += 1) {
		var s = i[n]
		r(s, t)
	}
	for (var o = 0, c = e.expressions; o < c.length; o += 1) {
		var h = c[o]
		r(h, t, 'Expression')
	}
}
G.TemplateElement = at
G.UnaryExpression = G.UpdateExpression = function (e, t, r) {
	r(e.argument, t, 'Expression')
}
G.BinaryExpression = G.LogicalExpression = function (e, t, r) {
	r(e.left, t, 'Expression'), r(e.right, t, 'Expression')
}
G.AssignmentExpression = G.AssignmentPattern = function (e, t, r) {
	r(e.left, t, 'Pattern'), r(e.right, t, 'Expression')
}
G.ConditionalExpression = function (e, t, r) {
	r(e.test, t, 'Expression'), r(e.consequent, t, 'Expression'), r(e.alternate, t, 'Expression')
}
G.NewExpression = G.CallExpression = function (e, t, r) {
	if ((r(e.callee, t, 'Expression'), e.arguments))
		for (var n = 0, i = e.arguments; n < i.length; n += 1) {
			var s = i[n]
			r(s, t, 'Expression')
		}
}
G.MemberExpression = function (e, t, r) {
	r(e.object, t, 'Expression'), e.computed && r(e.property, t, 'Expression')
}
G.ExportNamedDeclaration = G.ExportDefaultDeclaration = function (e, t, r) {
	e.declaration &&
		r(
			e.declaration,
			t,
			e.type === 'ExportNamedDeclaration' || e.declaration.id ? 'Statement' : 'Expression',
		),
		e.source && r(e.source, t, 'Expression')
}
G.ExportAllDeclaration = function (e, t, r) {
	e.exported && r(e.exported, t), r(e.source, t, 'Expression')
}
G.ImportDeclaration = function (e, t, r) {
	for (var n = 0, i = e.specifiers; n < i.length; n += 1) {
		var s = i[n]
		r(s, t)
	}
	r(e.source, t, 'Expression')
}
G.ImportExpression = function (e, t, r) {
	r(e.source, t, 'Expression')
}
G.ImportSpecifier =
	G.ImportDefaultSpecifier =
	G.ImportNamespaceSpecifier =
	G.Identifier =
	G.Literal =
		at
G.TaggedTemplateExpression = function (e, t, r) {
	r(e.tag, t, 'Expression'), r(e.quasi, t, 'Expression')
}
G.ClassDeclaration = G.ClassExpression = function (e, t, r) {
	return r(e, t, 'Class')
}
G.Class = function (e, t, r) {
	e.id && r(e.id, t, 'Pattern'), e.superClass && r(e.superClass, t, 'Expression'), r(e.body, t)
}
G.ClassBody = function (e, t, r) {
	for (var n = 0, i = e.body; n < i.length; n += 1) {
		var s = i[n]
		r(s, t)
	}
}
G.MethodDefinition = G.Property = function (e, t, r) {
	e.computed && r(e.key, t, 'Expression'), r(e.value, t, 'Expression')
}
var Gr = Object.assign({}, G, { JSXElement: u(function () {}, 'JSXElement') }),
	Do = ve.extend(go())
function It(e) {
	return e != null ? e.name : null
}
u(It, 'extractIdentifierName')
function Bn(e) {
	return e.filter(function (t) {
		return t.type === 'ObjectExpression' || t.type === 'ArrayExpression'
	})
}
u(Bn, 'filterAncestors')
function Hi(e) {
	var t = []
	return (
		Ao(
			e,
			{
				ObjectExpression: u(function (n, i) {
					t.push(Bn(i).length)
				}, 'ObjectExpression'),
				ArrayExpression: u(function (n, i) {
					t.push(Bn(i).length)
				}, 'ArrayExpression'),
			},
			Gr,
		),
		Math.max.apply(Math, t)
	)
}
u(Hi, 'calculateNodeDepth')
function Eo(e) {
	return { inferredType: { type: ye.IDENTIFIER, identifier: It(e) }, ast: e }
}
u(Eo, 'parseIdentifier')
function yo(e) {
	return { inferredType: { type: ye.LITERAL }, ast: e }
}
u(yo, 'parseLiteral')
function Co(e) {
	var t
	Ji(
		e.body,
		{
			JSXElement: u(function (o) {
				t = o
			}, 'JSXElement'),
		},
		Gr,
	)
	var r = t != null,
		n = { type: r ? ye.ELEMENT : ye.FUNCTION, params: e.params, hasParams: e.params.length !== 0 },
		i = It(e.id)
	return i != null && (n.identifier = i), { inferredType: n, ast: e }
}
u(Co, 'parseFunction')
function vo(e) {
	var t
	Ji(
		e.body,
		{
			JSXElement: u(function (i) {
				t = i
			}, 'JSXElement'),
		},
		Gr,
	)
	var r = { type: t != null ? ye.ELEMENT : ye.CLASS, identifier: It(e.id) }
	return { inferredType: r, ast: e }
}
u(vo, 'parseClass')
function xo(e) {
	var t = { type: ye.ELEMENT },
		r = It(e.openingElement.name)
	return r != null && (t.identifier = r), { inferredType: t, ast: e }
}
u(xo, 'parseJsxElement')
function Fo(e) {
	var t = e.callee.type === 'MemberExpression' ? e.callee.property : e.callee,
		r = It(t)
	return r === 'shape' ? Qi(e.arguments[0]) : null
}
u(Fo, 'parseCall')
function Qi(e) {
	return { inferredType: { type: ye.OBJECT, depth: Hi(e) }, ast: e }
}
u(Qi, 'parseObject')
function bo(e) {
	return { inferredType: { type: ye.ARRAY, depth: Hi(e) }, ast: e }
}
u(bo, 'parseArray')
function So(e) {
	switch (e.type) {
		case 'Identifier':
			return Eo(e)
		case 'Literal':
			return yo(e)
		case 'FunctionExpression':
		case 'ArrowFunctionExpression':
			return Co(e)
		case 'ClassExpression':
			return vo(e)
		case 'JSXElement':
			return xo(e)
		case 'CallExpression':
			return Fo(e)
		case 'ObjectExpression':
			return Qi(e)
		case 'ArrayExpression':
			return bo(e)
		default:
			return null
	}
}
u(So, 'parseExpression')
function _o(e) {
	var t = Do.parse('('.concat(e, ')')),
		r = { inferredType: { type: ye.UNKNOWN }, ast: t }
	if (t.body[0] != null) {
		var n = t.body[0]
		switch (n.type) {
			case 'ExpressionStatement': {
				var i = So(n.expression)
				i != null && (r = i)
				break
			}
		}
	}
	return r
}
u(_o, 'parse')
function et(e) {
	try {
		var t = _o(e)
		return Object.assign({}, t)
	} catch {}
	return { inferredType: { type: ye.UNKNOWN } }
}
u(et, 'inspectValue')
var Bo = 150,
	ge
;(function (e) {
	;(e.CUSTOM = 'custom'),
		(e.ANY = 'any'),
		(e.FUNC = 'func'),
		(e.SHAPE = 'shape'),
		(e.OBJECT = 'object'),
		(e.INSTANCEOF = 'instanceOf'),
		(e.OBJECTOF = 'objectOf'),
		(e.UNION = 'union'),
		(e.ENUM = 'enum'),
		(e.ARRAYOF = 'arrayOf'),
		(e.ELEMENT = 'element'),
		(e.ELEMENTTYPE = 'elementType'),
		(e.NODE = 'node')
})(ge || (ge = {}))
function ke(e) {
	var t = e.name,
		r = e.short,
		n = e.compact,
		i = e.full,
		s = e.inferredType
	return { name: t, short: r, compact: n, full: i != null ? i : r, inferredType: s }
}
u(ke, 'createTypeDef')
function Ki(e) {
	return e.replace(/PropTypes./g, '').replace(/.isRequired/g, '')
}
u(Ki, 'cleanPropTypes')
function wn(e) {
	return e.split(/\r?\n/)
}
u(wn, 'splitIntoLines')
function $t(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
	return Ki(Dr(e, t))
}
u($t, 'prettyObject')
function Tn(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
	return Ki(Ze(e, t))
}
u(Tn, 'prettyArray')
function wo(e) {
	switch (e) {
		case ye.OBJECT:
			return Tt
		case ye.ARRAY:
			return Nr
		case ye.CLASS:
			return os
		case ye.FUNCTION:
			return dt
		case ye.ELEMENT:
			return yt
		default:
			return Ar
	}
}
u(wo, 'getCaptionForInspectionType')
function Xi(e, t) {
	var r = et(e),
		n = r.inferredType,
		i = r.ast,
		s = n.type,
		o,
		c,
		h
	switch (s) {
		case ye.IDENTIFIER:
		case ye.LITERAL:
			;(o = e), (c = e)
			break
		case ye.OBJECT: {
			var g = n,
				D = g.depth
			;(o = Tt), (c = D === 1 ? $t(i, !0) : null), (h = $t(i))
			break
		}
		case ye.ELEMENT: {
			var x = n,
				E = x.identifier
			;(o = E != null && !Or(E) ? E : yt), (c = wn(e).length === 1 ? e : null), (h = e)
			break
		}
		case ye.ARRAY: {
			var v = n,
				b = v.depth
			;(o = Nr), (c = b <= 2 ? Tn(i, !0) : null), (h = Tn(i))
			break
		}
		default:
			;(o = wo(s)), (c = wn(e).length === 1 ? e : null), (h = e)
			break
	}
	return ke({ name: t, short: o, compact: c, full: h, inferredType: s })
}
u(Xi, 'generateTypeFromString')
function To(e) {
	var t = e.raw
	return t != null ? Xi(t, ge.CUSTOM) : ke({ name: ge.CUSTOM, short: Ar, compact: Ar })
}
u(To, 'generateCustom')
function ko(e) {
	var t = e.jsDocTags
	return t != null && (t.params != null || t.returns != null)
		? ke({
				name: ge.FUNC,
				short: as(t.params, t.returns),
				compact: null,
				full: us(t.params, t.returns),
		  })
		: ke({ name: ge.FUNC, short: dt, compact: dt })
}
u(ko, 'generateFunc$1')
function No(e, t) {
	var r = Object.keys(e.value)
			.map(function (h) {
				return ''.concat(h, ': ').concat(At(e.value[h], t).full)
			})
			.join(', '),
		n = et('{ '.concat(r, ' }')),
		i = n.inferredType,
		s = n.ast,
		o = i,
		c = o.depth
	return ke({
		name: ge.SHAPE,
		short: Tt,
		compact: c === 1 && s ? $t(s, !0) : null,
		full: s ? $t(s) : null,
	})
}
u(No, 'generateShape')
function dr(e) {
	return 'objectOf('.concat(e, ')')
}
u(dr, 'objectOf')
function Oo(e, t) {
	var r = At(e.value, t),
		n = r.short,
		i = r.compact,
		s = r.full
	return ke({ name: ge.OBJECTOF, short: dr(n), compact: i != null ? dr(i) : null, full: dr(s) })
}
u(Oo, 'generateObjectOf')
function Io(e, t) {
	if (Array.isArray(e.value)) {
		var r = e.value.reduce(
			function (n, i) {
				var s = At(i, t),
					o = s.short,
					c = s.compact,
					h = s.full
				return n.short.push(o), n.compact.push(c), n.full.push(h), n
			},
			{ short: [], compact: [], full: [] },
		)
		return ke({
			name: ge.UNION,
			short: r.short.join(' | '),
			compact: r.compact.every(function (n) {
				return n != null
			})
				? r.compact.join(' | ')
				: null,
			full: r.full.join(' | '),
		})
	}
	return ke({ name: ge.UNION, short: e.value, compact: null })
}
u(Io, 'generateUnion')
function Po(e) {
	var t = e.value,
		r = e.computed
	return r ? Xi(t, 'enumvalue') : ke({ name: 'enumvalue', short: t, compact: t })
}
u(Po, 'generateEnumValue')
function Ro(e) {
	if (Array.isArray(e.value)) {
		var t = e.value.reduce(
			function (r, n) {
				var i = Po(n),
					s = i.short,
					o = i.compact,
					c = i.full
				return r.short.push(s), r.compact.push(o), r.full.push(c), r
			},
			{ short: [], compact: [], full: [] },
		)
		return ke({
			name: ge.ENUM,
			short: t.short.join(' | '),
			compact: t.compact.every(function (r) {
				return r != null
			})
				? t.compact.join(' | ')
				: null,
			full: t.full.join(' | '),
		})
	}
	return ke({ name: ge.ENUM, short: e.value, compact: e.value })
}
u(Ro, 'generateEnum')
function Cr(e) {
	return ''.concat(e, '[]')
}
u(Cr, 'braceAfter')
function kn(e) {
	return '['.concat(e, ']')
}
u(kn, 'braceAround')
function Nn(e, t, r) {
	return ke({ name: ge.ARRAYOF, short: Cr(e), compact: t != null ? kn(t) : null, full: kn(r) })
}
u(Nn, 'createArrayOfObjectTypeDef')
function Lo(e, t) {
	var r = At(e.value, t),
		n = r.name,
		i = r.short,
		s = r.compact,
		o = r.full,
		c = r.inferredType
	if (n === ge.CUSTOM) {
		if (c === ye.OBJECT) return Nn(i, s, o)
	} else if (n === ge.SHAPE) return Nn(i, s, o)
	return ke({ name: ge.ARRAYOF, short: Cr(i), compact: Cr(i) })
}
u(Lo, 'generateArray$1')
function At(e, t) {
	try {
		switch (e.name) {
			case ge.CUSTOM:
				return To(e)
			case ge.FUNC:
				return ko(t)
			case ge.SHAPE:
				return No(e, t)
			case ge.INSTANCEOF:
				return ke({ name: ge.INSTANCEOF, short: e.value, compact: e.value })
			case ge.OBJECTOF:
				return Oo(e, t)
			case ge.UNION:
				return Io(e, t)
			case ge.ENUM:
				return Ro(e)
			case ge.ARRAYOF:
				return Lo(e, t)
			default:
				return ke({ name: e.name, short: e.name, compact: e.name })
		}
	} catch (r) {
		console.error(r)
	}
	return ke({ name: 'unknown', short: 'unknown', compact: 'unknown' })
}
u(At, 'generateType')
function Mo(e) {
	var t = e.docgenInfo.type
	if (t == null) return null
	try {
		switch (t.name) {
			case ge.CUSTOM:
			case ge.SHAPE:
			case ge.INSTANCEOF:
			case ge.OBJECTOF:
			case ge.UNION:
			case ge.ENUM:
			case ge.ARRAYOF: {
				var r = At(t, e),
					n = r.short,
					i = r.compact,
					s = r.full
				return i != null && !kr(i) ? ae(i) : ae(n, s)
			}
			case ge.FUNC: {
				var o = At(t, e),
					c = o.short,
					h = o.full,
					g = c,
					D
				return h.length < Bo ? (g = h) : (D = ss(h)), ae(g, D)
			}
			default:
				return null
		}
	} catch (x) {
		console.error(x)
	}
	return null
}
u(Mo, 'createType')
function Yi(e) {
	var t = e.inferredType,
		r = e.ast,
		n = t,
		i = n.depth
	if (i === 1) {
		var s = Dr(r, !0)
		if (!Et(s)) return ae(s)
	}
	return ae(Tt, Dr(r))
}
u(Yi, 'generateObject')
function Zi(e) {
	var t = e.inferredType,
		r = e.ast,
		n = t,
		i = n.depth
	if (i <= 2) {
		var s = xn(r, !0)
		if (!Et(s)) return ae(s)
	}
	return ae(Nr, xn(r))
}
u(Zi, 'generateArray')
function eu(e) {
	var t = e.type,
		r = e.identifier
	switch (t) {
		case ye.FUNCTION:
			return zr(r, e.hasParams)
		case ye.ELEMENT:
			return nr(r)
		default:
			return r
	}
}
u(eu, 'getPrettyIdentifier')
function zr(e, t) {
	return t ? ''.concat(e, '( ... )') : ''.concat(e, '()')
}
u(zr, 'getPrettyFuncIdentifier')
function nr(e) {
	return '<'.concat(e, ' />')
}
u(nr, 'getPrettyElementIdentifier')
function jo(e) {
	var t = e.inferredType,
		r = e.ast,
		n = t,
		i = n.identifier
	if (i != null) return ae(eu(t), Ze(r))
	var s = Ze(r, !0)
	return Et(s) ? ae(dt, Ze(r)) : ae(s)
}
u(jo, 'generateFunc')
function Vo(e, t) {
	var r = t.inferredType,
		n = r,
		i = n.identifier
	if (i != null && !Or(i)) {
		var s = eu(r)
		return ae(s, e)
	}
	return Et(e) ? ae(yt, e) : ae(e)
}
u(Vo, 'generateElement')
function tu(e) {
	try {
		var t = et(e)
		switch (t.inferredType.type) {
			case ye.OBJECT:
				return Yi(t)
			case ye.FUNCTION:
				return jo(t)
			case ye.ELEMENT:
				return Vo(e, t)
			case ye.ARRAY:
				return Zi(t)
			default:
				return null
		}
	} catch (r) {
		console.error(r)
	}
	return null
}
u(tu, 'createDefaultValue')
var qo = _u,
	Uo = Bu,
	Wo = wu,
	Go = '[object String]'
function zo(e) {
	return typeof e == 'string' || (!Uo(e) && Wo(e) && qo(e) == Go)
}
u(zo, 'isString')
var $o = zo
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function On(e) {
	return Object.prototype.toString.call(e) === '[object Object]'
}
u(On, 'isObject')
function Jo(e) {
	var t, r
	return On(e) === !1
		? !1
		: ((t = e.constructor),
		  t === void 0
				? !0
				: ((r = t.prototype), !(On(r) === !1 || r.hasOwnProperty('isPrototypeOf') === !1)))
}
u(Jo, 'isPlainObject')
var ru = {},
	Jt =
		($e && $e.__assign) ||
		function () {
			return (
				(Jt =
					Object.assign ||
					function (e) {
						for (var t, r = 1, n = arguments.length; r < n; r++) {
							t = arguments[r]
							for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
						}
						return e
					}),
				Jt.apply(this, arguments)
			)
		},
	Ho =
		($e && $e.__spreadArrays) ||
		function () {
			for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length
			for (var n = Array(e), i = 0, t = 0; t < r; t++)
				for (var s = arguments[t], o = 0, c = s.length; o < c; o++, i++) n[i] = s[o]
			return n
		}
Object.defineProperty(ru, '__esModule', { value: !0 })
var bt = []
function Qo(e) {
	var t = typeof e
	return e !== null && (t === 'object' || t === 'function')
}
u(Qo, 'isObj')
function Ko(e) {
	return Object.prototype.toString.call(e) === '[object RegExp]'
}
u(Ko, 'isRegexp')
function Xo(e) {
	return Object.getOwnPropertySymbols(e).filter(function (t) {
		return Object.prototype.propertyIsEnumerable.call(e, t)
	})
}
u(Xo, 'getOwnEnumPropSymbols')
function jt(e, t, r) {
	r === void 0 && (r = '')
	var n = { indent: '	', singleQuotes: !0 },
		i = Jt(Jt({}, n), t),
		s
	i.inlineCharacterLimit === void 0
		? (s = {
				newLine: `
`,
				newLineOrSpace: `
`,
				pad: r,
				indent: r + i.indent,
		  })
		: (s = {
				newLine: '@@__PRETTY_PRINT_NEW_LINE__@@',
				newLineOrSpace: '@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@',
				pad: '@@__PRETTY_PRINT_PAD__@@',
				indent: '@@__PRETTY_PRINT_INDENT__@@',
		  })
	var o = u(function (g) {
		if (i.inlineCharacterLimit === void 0) return g
		var D = g
			.replace(new RegExp(s.newLine, 'g'), '')
			.replace(new RegExp(s.newLineOrSpace, 'g'), ' ')
			.replace(new RegExp(s.pad + '|' + s.indent, 'g'), '')
		return D.length <= i.inlineCharacterLimit
			? D
			: g
					.replace(
						new RegExp(s.newLine + '|' + s.newLineOrSpace, 'g'),
						`
`,
					)
					.replace(new RegExp(s.pad, 'g'), r)
					.replace(new RegExp(s.indent, 'g'), r + i.indent)
	}, 'expandWhiteSpace')
	if (bt.indexOf(e) !== -1) return '"[Circular]"'
	if (
		e == null ||
		typeof e == 'number' ||
		typeof e == 'boolean' ||
		typeof e == 'function' ||
		typeof e == 'symbol' ||
		Ko(e)
	)
		return String(e)
	if (e instanceof Date) return "new Date('" + e.toISOString() + "')"
	if (Array.isArray(e)) {
		if (e.length === 0) return '[]'
		bt.push(e)
		var c =
			'[' +
			s.newLine +
			e
				.map(function (g, D) {
					var x = e.length - 1 === D ? s.newLine : ',' + s.newLineOrSpace,
						E = jt(g, i, r + i.indent)
					return i.transform && (E = i.transform(e, D, E)), s.indent + E + x
				})
				.join('') +
			s.pad +
			']'
		return bt.pop(), o(c)
	}
	if (Qo(e)) {
		var h = Ho(Object.keys(e), Xo(e))
		if (
			(i.filter &&
				(h = h.filter(function (D) {
					return i.filter && i.filter(e, D)
				})),
			h.length === 0)
		)
			return '{}'
		bt.push(e)
		var c =
			'{' +
			s.newLine +
			h
				.map(function (D, x) {
					var E = h.length - 1 === x ? s.newLine : ',' + s.newLineOrSpace,
						v = typeof D == 'symbol',
						b = !v && /^[a-z$_][a-z$_0-9]*$/i.test(D.toString()),
						C = v || b ? D : jt(D, i),
						B = jt(e[D], i, r + i.indent)
					return i.transform && (B = i.transform(e, D, B)), s.indent + String(C) + ': ' + B + E
				})
				.join('') +
			s.pad +
			'}'
		return bt.pop(), o(c)
	}
	return (
		(e = String(e).replace(/[\r\n]/g, function (g) {
			return g ===
				`
`
				? '\\n'
				: '\\r'
		})),
		i.singleQuotes
			? ((e = e.replace(/\\?'/g, "\\'")), "'" + e + "'")
			: ((e = e.replace(/"/g, '\\"')), '"' + e + '"')
	)
}
u(jt, 'prettyPrint')
var Yo = (ru.prettyPrint = jt),
	He = u(function (e, t) {
		return e === 0 ? '' : new Array(e * t).fill(' ').join('')
	}, 'spacer')
function pt(e) {
	return (
		typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
			? (pt = u(function (t) {
					return typeof t
			  }, '_typeof$1'))
			: (pt = u(function (t) {
					return t &&
						typeof Symbol == 'function' &&
						t.constructor === Symbol &&
						t !== Symbol.prototype
						? 'symbol'
						: typeof t
			  }, '_typeof$1')),
		pt(e)
	)
}
u(pt, '_typeof$1')
function In(e) {
	return Zo(e) || el(e) || tl(e) || rl()
}
u(In, '_toConsumableArray$1')
function Zo(e) {
	if (Array.isArray(e)) return vr(e)
}
u(Zo, '_arrayWithoutHoles$1')
function el(e) {
	if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
		return Array.from(e)
}
u(el, '_iterableToArray$1')
function tl(e, t) {
	if (!!e) {
		if (typeof e == 'string') return vr(e, t)
		var r = Object.prototype.toString.call(e).slice(8, -1)
		if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
			return Array.from(e)
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return vr(e, t)
	}
}
u(tl, '_unsupportedIterableToArray$1')
function vr(e, t) {
	;(t == null || t > e.length) && (t = e.length)
	for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
	return n
}
u(vr, '_arrayLikeToArray$1')
function rl() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
u(rl, '_nonIterableSpread$1')
function xr(e, t) {
	return e === null ||
		pt(e) !== 'object' ||
		e instanceof Date ||
		e instanceof RegExp ||
		Dt.exports.isValidElement(e)
		? e
		: (t.add(e),
		  Array.isArray(e)
				? e.map(function (r) {
						return xr(r, t)
				  })
				: Object.keys(e)
						.sort()
						.reduce(function (r, n) {
							return (
								n === '_owner' ||
									(n === 'current' || t.has(e[n]) ? (r[n] = '[Circular]') : (r[n] = xr(e[n], t))),
								r
							)
						}, {}))
}
u(xr, 'safeSortObject')
function nl(e) {
	return xr(e, new WeakSet())
}
u(nl, 'sortObject')
var nu = u(function (t) {
		return { type: 'string', value: t }
	}, 'createStringTreeNode'),
	il = u(function (t) {
		return { type: 'number', value: t }
	}, 'createNumberTreeNode'),
	ul = u(function (t, r, n, i) {
		return { type: 'ReactElement', displayName: t, props: r, defaultProps: n, childrens: i }
	}, 'createReactElementTreeNode'),
	al = u(function (t, r) {
		return { type: 'ReactFragment', key: t, childrens: r }
	}, 'createReactFragmentTreeNode'),
	sl = Boolean(Dt.exports.Fragment),
	iu = u(function (t) {
		return !t.name || t.name === '_default' ? 'No Display Name' : t.name
	}, 'getFunctionTypeName'),
	ol = u(function e(t) {
		switch (!0) {
			case Boolean(t.displayName):
				return t.displayName
			case t.$$typeof === ze.exports.Memo:
				return e(t.type)
			case t.$$typeof === ze.exports.ForwardRef:
				return e(t.render)
			default:
				return iu(t)
		}
	}, 'getWrappedComponentDisplayName'),
	ll = u(function (t) {
		switch (!0) {
			case typeof t.type == 'string':
				return t.type
			case typeof t.type == 'function':
				return t.type.displayName ? t.type.displayName : iu(t.type)
			case ze.exports.isForwardRef(t):
			case ze.exports.isMemo(t):
				return ol(t.type)
			case ze.exports.isContextConsumer(t):
				return ''.concat(t.type._context.displayName || 'Context', '.Consumer')
			case ze.exports.isContextProvider(t):
				return ''.concat(t.type._context.displayName || 'Context', '.Provider')
			case ze.exports.isLazy(t):
				return 'Lazy'
			case ze.exports.isProfiler(t):
				return 'Profiler'
			case ze.exports.isStrictMode(t):
				return 'StrictMode'
			case ze.exports.isSuspense(t):
				return 'Suspense'
			default:
				return 'UnknownElementType'
		}
	}, 'getReactElementDisplayName'),
	Pn = u(function (t, r) {
		return r !== 'children'
	}, 'noChildren'),
	cl = u(function (t) {
		return t !== !0 && t !== !1 && t !== null && t !== ''
	}, 'onlyMeaningfulChildren'),
	Rn = u(function (t, r) {
		var n = {}
		return (
			Object.keys(t)
				.filter(function (i) {
					return r(t[i], i)
				})
				.forEach(function (i) {
					return (n[i] = t[i])
				}),
			n
		)
	}, 'filterProps'),
	$r = u(function e(t, r) {
		var n = r.displayName,
			i = n === void 0 ? ll : n
		if (typeof t == 'string') return nu(t)
		if (typeof t == 'number') return il(t)
		if (!Vt.isValidElement(t))
			throw new Error(
				'react-element-to-jsx-string: Expected a React.Element, got `'.concat(pt(t), '`'),
			)
		var s = i(t),
			o = Rn(t.props, Pn)
		t.ref !== null && (o.ref = t.ref)
		var c = t.key
		typeof c == 'string' && c.search(/^\./) && (o.key = c)
		var h = Rn(t.type.defaultProps || {}, Pn),
			g = Vt.Children.toArray(t.props.children)
				.filter(cl)
				.map(function (D) {
					return e(D, r)
				})
		return sl && t.type === Dt.exports.Fragment ? al(c, g) : ul(s, o, h, g)
	}, 'parseReactElement')
function fl() {}
u(fl, 'noRefCheck')
var pl = u(function (t) {
		return t
			.toString()
			.split(
				`
`,
			)
			.map(function (r) {
				return r.trim()
			})
			.join('')
	}, 'inlineFunction'),
	Ln = pl,
	uu = u(function (e, t) {
		var r = t.functionValue,
			n = r === void 0 ? Ln : r,
			i = t.showFunctions
		return n(!i && n === Ln ? fl : e)
	}, 'formatFunction'),
	hl = u(function (e, t, r, n) {
		var i = nl(e),
			s = Yo(i, {
				transform: u(function (c, h, g) {
					var D = c[h]
					return D && Dt.exports.isValidElement(D)
						? ir($r(D, n), !0, r, n)
						: typeof D == 'function'
						  ? uu(D, n)
						  : g
				}, 'transform'),
			})
		return t
			? s
					.replace(/\s+/g, ' ')
					.replace(/{ /g, '{')
					.replace(/ }/g, '}')
					.replace(/\[ /g, '[')
					.replace(/ ]/g, ']')
			: s.replace(/\t/g, He(1, n.tabStop)).replace(
					/\n([^$])/g,
					`
`.concat(He(r + 1, n.tabStop), '$1'),
			  )
	}, 'formatComplexDataStructure'),
	dl = u(function (t) {
		return t.replace(/"/g, '&quot;')
	}, 'escape'),
	ml = u(function (t, r, n, i) {
		if (typeof t == 'number') return '{'.concat(String(t), '}')
		if (typeof t == 'string') return '"'.concat(dl(t), '"')
		if (pt(t) === 'symbol') {
			var s = t
				.valueOf()
				.toString()
				.replace(/Symbol\((.*)\)/, '$1')
			return s ? "{Symbol('".concat(s, "')}") : '{Symbol()}'
		}
		return typeof t == 'function'
			? '{'.concat(uu(t, i), '}')
			: Dt.exports.isValidElement(t)
			  ? '{'.concat(ir($r(t, i), !0, n, i), '}')
			  : t instanceof Date
			    ? isNaN(t.valueOf())
						? '{new Date(NaN)}'
						: '{new Date("'.concat(t.toISOString(), '")}')
			    : Jo(t) || Array.isArray(t)
			      ? '{'.concat(hl(t, r, n, i), '}')
			      : '{'.concat(String(t), '}')
	}, 'formatPropValue'),
	gl = u(function (e, t, r, n, i, s, o, c) {
		if (!t && !n)
			throw new Error(
				'The prop "'.concat(e, '" has no value and no default: could not be formatted'),
			)
		var h = t ? r : i,
			g = c.useBooleanShorthandSyntax,
			D = c.tabStop,
			x = ml(h, s, o, c),
			E = ' ',
			v = `
`.concat(He(o + 1, D)),
			b = x.includes(`
`)
		return (
			g && x === '{false}' && !n
				? ((E = ''), (v = ''))
				: g && x === '{true}'
				  ? ((E += ''.concat(e)), (v += ''.concat(e)))
				  : ((E += ''.concat(e, '=').concat(x)), (v += ''.concat(e, '=').concat(x))),
			{ attributeFormattedInline: E, attributeFormattedMultiline: v, isMultilineAttribute: b }
		)
	}, 'formatProp'),
	Al = u(function (e, t) {
		var r = e.slice(0, e.length > 0 ? e.length - 1 : 0),
			n = e[e.length - 1]
		return (
			n &&
			(t.type === 'string' || t.type === 'number') &&
			(n.type === 'string' || n.type === 'number')
				? r.push(nu(String(n.value) + String(t.value)))
				: (n && r.push(n), r.push(t)),
			r
		)
	}, 'mergeSiblingPlainStringChildrenReducer'),
	Dl = u(function (t) {
		return ['key', 'ref'].includes(t)
	}, 'isKeyOrRefProps'),
	El = u(function (e) {
		return function (t) {
			var r = t.includes('key'),
				n = t.includes('ref'),
				i = t.filter(function (o) {
					return !Dl(o)
				}),
				s = In(e ? i.sort() : i)
			return n && s.unshift('ref'), r && s.unshift('key'), s
		}
	}, 'sortPropsByNames')
function yl(e, t) {
	return Array.isArray(t)
		? function (r) {
				return t.indexOf(r) === -1
		  }
		: function (r) {
				return t(e[r], r)
		  }
}
u(yl, 'createPropFilter')
var Cl = u(function (t, r, n, i, s) {
		var o = s.tabStop
		return t.type === 'string'
			? r
					.split(
						`
`,
					)
					.map(function (c, h) {
						return h === 0 ? c : ''.concat(He(i, o)).concat(c)
					}).join(`
`)
			: r
	}, 'compensateMultilineStringElementIndentation'),
	vl = u(function (t, r, n) {
		return function (i) {
			return Cl(i, ir(i, t, r, n), t, r, n)
		}
	}, 'formatOneChildren'),
	xl = u(function (t, r) {
		return function (n) {
			var i = Object.keys(t).includes(n)
			return !i || (i && t[n] !== r[n])
		}
	}, 'onlyPropsWithOriginalValue'),
	au = u(function (t, r, n, i, s) {
		return s ? He(n, i).length + r.length > s : t.length > 1
	}, 'isInlineAttributeTooLong'),
	Fl = u(function (t, r, n, i, s, o, c) {
		return (au(t, r, s, o, c) || n) && !i
	}, 'shouldRenderMultilineAttr'),
	su = u(function (e, t, r, n) {
		var i = e.type,
			s = e.displayName,
			o = s === void 0 ? '' : s,
			c = e.childrens,
			h = e.props,
			g = h === void 0 ? {} : h,
			D = e.defaultProps,
			x = D === void 0 ? {} : D
		if (i !== 'ReactElement')
			throw new Error(
				'The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(
					i,
				),
			)
		var E = n.filterProps,
			v = n.maxInlineAttributesLineLength,
			b = n.showDefaultProps,
			C = n.sortProps,
			B = n.tabStop,
			U = '<'.concat(o),
			j = U,
			Q = U,
			w = !1,
			m = [],
			y = yl(g, E)
		Object.keys(g)
			.filter(y)
			.filter(xl(x, g))
			.forEach(function (z) {
				return m.push(z)
			}),
			Object.keys(x)
				.filter(y)
				.filter(function () {
					return b
				})
				.filter(function (z) {
					return !m.includes(z)
				})
				.forEach(function (z) {
					return m.push(z)
				})
		var _ = El(C)(m)
		if (
			(_.forEach(function (z) {
				var W = gl(z, Object.keys(g).includes(z), g[z], Object.keys(x).includes(z), x[z], t, r, n),
					M = W.attributeFormattedInline,
					Y = W.attributeFormattedMultiline,
					J = W.isMultilineAttribute
				J && (w = !0), (j += M), (Q += Y)
			}),
			(Q += `
`.concat(He(r, B))),
			Fl(_, j, w, t, r, B, v) ? (U = Q) : (U = j),
			c && c.length > 0)
		) {
			var F = r + 1
			;(U += '>'),
				t ||
					((U += `
`),
					(U += He(F, B))),
				(U += c
					.reduce(Al, [])
					.map(vl(t, F, n))
					.join(
						t
							? ''
							: `
`.concat(He(F, B)),
					)),
				t ||
					((U += `
`),
					(U += He(F - 1, B))),
				(U += '</'.concat(o, '>'))
		} else au(_, j, r, B, v) || (U += ' '), (U += '/>')
		return U
	}, 'formatReactElementNode'),
	bl = '',
	Mn = 'React.Fragment',
	Sl = u(function (t, r, n) {
		var i = {}
		return (
			r && (i = { key: r }),
			{ type: 'ReactElement', displayName: t, props: i, defaultProps: {}, childrens: n }
		)
	}, 'toReactElementTreeNode'),
	_l = u(function (t) {
		var r = t.key
		return Boolean(r)
	}, 'isKeyedFragment'),
	Bl = u(function (t) {
		var r = t.childrens
		return r.length === 0
	}, 'hasNoChildren'),
	wl = u(function (e, t, r, n) {
		var i = e.type,
			s = e.key,
			o = e.childrens
		if (i !== 'ReactFragment')
			throw new Error(
				'The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(
					i,
				),
			)
		var c = n.useFragmentShortSyntax,
			h
		return c ? (Bl(e) || _l(e) ? (h = Mn) : (h = bl)) : (h = Mn), su(Sl(h, s, o), t, r, n)
	}, 'formatReactFragmentNode'),
	Tl = ['<', '>', '{', '}'],
	kl = u(function (t) {
		return Tl.some(function (r) {
			return t.includes(r)
		})
	}, 'shouldBeEscaped'),
	Nl = u(function (t) {
		return kl(t) ? '{`'.concat(t, '`}') : t
	}, 'escape'),
	Ol = u(function (t) {
		var r = t
		return (
			r.endsWith(' ') && (r = r.replace(/^(.*?)(\s+)$/, "$1{'$2'}")),
			r.startsWith(' ') && (r = r.replace(/^(\s+)(.*)$/, "{'$1'}$2")),
			r
		)
	}, 'preserveTrailingSpace'),
	ir = u(function (e, t, r, n) {
		if (e.type === 'number') return String(e.value)
		if (e.type === 'string') return e.value ? ''.concat(Ol(Nl(String(e.value)))) : ''
		if (e.type === 'ReactElement') return su(e, t, r, n)
		if (e.type === 'ReactFragment') return wl(e, t, r, n)
		throw new TypeError('Unknow format type "'.concat(e.type, '"'))
	}, 'formatTreeNode'),
	Il = u(function (e, t) {
		return ir(e, !1, 0, t)
	}, 'formatTree'),
	Fr = u(function (t) {
		var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			n = r.filterProps,
			i = n === void 0 ? [] : n,
			s = r.showDefaultProps,
			o = s === void 0 ? !0 : s,
			c = r.showFunctions,
			h = c === void 0 ? !1 : c,
			g = r.functionValue,
			D = r.tabStop,
			x = D === void 0 ? 2 : D,
			E = r.useBooleanShorthandSyntax,
			v = E === void 0 ? !0 : E,
			b = r.useFragmentShortSyntax,
			C = b === void 0 ? !0 : b,
			B = r.sortProps,
			U = B === void 0 ? !0 : B,
			j = r.maxInlineAttributesLineLength,
			Q = r.displayName
		if (!t) throw new Error('react-element-to-jsx-string: Expected a ReactElement')
		var w = {
			filterProps: i,
			showDefaultProps: o,
			showFunctions: h,
			functionValue: g,
			tabStop: x,
			useBooleanShorthandSyntax: v,
			useFragmentShortSyntax: C,
			sortProps: U,
			maxInlineAttributesLineLength: j,
			displayName: Q,
		}
		return Il($r(t, w), w)
	}, 'reactElementToJsxString')
function br(e) {
	return (
		(br =
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
		br(e)
	)
}
u(br, '_typeof')
function ou(e) {
	return e.$$typeof != null
}
u(ou, 'isReactElement')
function lu(e, t) {
	var r = e.name
	return r !== '' && r !== 'anonymous' && r !== t ? r : null
}
u(lu, 'extractFunctionName')
var Pl = u(function (t) {
	return ae(JSON.stringify(t))
}, 'stringResolver')
function Rl(e) {
	var t = e.type,
		r = t.displayName,
		n = Fr(e, {})
	if (r != null) {
		var i = nr(r)
		return ae(i, n)
	}
	if ($o(t) && Or(t)) {
		var s = Fr(e, { tabStop: 0 }),
			o = s.replace(/\r?\n|\r/g, '')
		if (!Et(o)) return ae(o)
	}
	return ae(yt, n)
}
u(Rl, 'generateReactObject')
var Ll = u(function (t) {
		if (ou(t) && t.type != null) return Rl(t)
		if (Tu(t)) {
			var r = et(JSON.stringify(t))
			return Yi(r)
		}
		if (Array.isArray(t)) {
			var n = et(JSON.stringify(t))
			return Zi(n)
		}
		return ae(Tt)
	}, 'objectResolver'),
	Ml = u(function (t, r) {
		var n = !1,
			i
		if (en(t.render)) n = !0
		else if (t.prototype != null && en(t.prototype.render)) n = !0
		else {
			var s
			try {
				i = et(t.toString())
				var o = i.inferredType,
					c = o.hasParams,
					h = o.params
				c ? h.length === 1 && h[0].type === 'ObjectPattern' && (s = t({})) : (s = t()),
					s != null && ou(s) && (n = !0)
			} catch {}
		}
		var g = lu(t, r.name)
		if (g != null) {
			if (n) return ae(nr(g))
			i != null && (i = et(t.toString()))
			var D = i.inferredType,
				x = D.hasParams
			return ae(zr(g, x))
		}
		return ae(n ? yt : dt)
	}, 'functionResolver'),
	jl = u(function (t) {
		return ae(t.toString())
	}, 'defaultResolver'),
	cu = { string: Pl, object: Ll, function: Ml, default: jl }
function Vl() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
	return Object.assign({}, cu, e)
}
u(Vl, 'createTypeResolvers')
function fu(e, t) {
	var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : cu
	try {
		switch (br(e)) {
			case 'string':
				return r.string(e, t)
			case 'object':
				return r.object(e, t)
			case 'function':
				return r.function(e, t)
			default:
				return r.default(e, t)
		}
	} catch (n) {
		console.error(n)
	}
	return null
}
u(fu, 'createDefaultValueFromRawDefaultProp')
function ql(e, t) {
	var r = t.propTypes
	return r != null
		? Object.keys(r)
				.map(function (n) {
					return e.find(function (i) {
						return i.name === n
					})
				})
				.filter(function (n) {
					return n
				})
		: e
}
u(ql, 'keepOriginalDefinitionOrder')
var Ul = u(function (t, r) {
		var n = r.name,
			i = r.type,
			s = i.summary === 'element' || i.summary === 'elementType',
			o = lu(t, n)
		if (o != null) {
			if (s) return ae(nr(o))
			var c = et(t.toString()).inferredType,
				h = c.hasParams
			return ae(zr(o, h))
		}
		return ae(s ? yt : dt)
	}, 'funcResolver'),
	Wl = Vl({ function: Ul })
function Gl(e, t) {
	var r = e.propDef,
		n = Mo(e)
	n != null && (r.type = n)
	var i = e.docgenInfo.defaultValue
	if (i != null && i.value != null) {
		var s = tu(i.value)
		s != null && (r.defaultValue = s)
	} else if (t != null) {
		var o = fu(t, r, Wl)
		o != null && (r.defaultValue = o)
	}
	return r
}
u(Gl, 'enhancePropTypesProp')
function zl(e, t) {
	var r = t.defaultProps != null ? t.defaultProps : {},
		n = e.map(function (i) {
			return Gl(i, r[i.propDef.name])
		})
	return ql(n, t)
}
u(zl, 'enhancePropTypesProps')
function $l(e, t) {
	var r = e.propDef,
		n = e.docgenInfo.defaultValue
	if (n != null && n.value != null) {
		var i = tu(n.value)
		i != null && (r.defaultValue = i)
	} else if (t != null) {
		var s = fu(t, r)
		s != null && (r.defaultValue = s)
	}
	return r
}
u($l, 'enhanceTypeScriptProp')
function Jl(e) {
	return e.map(function (t) {
		return $l(t)
	})
}
u(Jl, 'enhanceTypeScriptProps')
var jn = new Map()
Object.keys(gr.exports).forEach(function (e) {
	var t = gr.exports[e]
	jn.set(t, e), jn.set(t.isRequired, e)
})
function Hl(e, t) {
	var r = e
	!wr(e) && !e.propTypes && Ai(e) && (r = e.type)
	var n = Ka(r, t)
	if (n.length === 0) return []
	switch (n[0].typeSystem) {
		case qe.JAVASCRIPT:
			return zl(n, e)
		case qe.TYPESCRIPT:
			return Jl(n)
		default:
			return n.map(function (i) {
				return i.propDef
			})
	}
}
u(Hl, 'getPropDefs')
var Ql = u(function (t) {
		return { rows: Hl(t, 'props') }
	}, 'extractProps'),
	Kl = u(function (t) {
		if (t) {
			var r = Ql(t),
				n = r.rows
			if (n)
				return n.reduce(function (i, s) {
					var o = s.name,
						c = s.description,
						h = s.type,
						g = s.sbType,
						D = s.defaultValue,
						x = s.jsDocTags,
						E = s.required
					return (
						(i[o] = {
							name: o,
							description: c,
							type: Object.assign({ required: E }, g),
							table: { type: h, jsDocTags: x, defaultValue: D },
						}),
						i
					)
				}, {})
		}
		return null
	}, 'extractArgTypes'),
	Xl = ['mdxType', 'originalType', 'children'],
	Vn
function Yl(e) {
	return rc(e) || tc(e) || ec(e) || Zl()
}
u(Yl, '_toConsumableArray')
function Zl() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
u(Zl, '_nonIterableSpread')
function ec(e, t) {
	if (!!e) {
		if (typeof e == 'string') return Sr(e, t)
		var r = Object.prototype.toString.call(e).slice(8, -1)
		if ((r === 'Object' && e.constructor && (r = e.constructor.name), r === 'Map' || r === 'Set'))
			return Array.from(e)
		if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sr(e, t)
	}
}
u(ec, '_unsupportedIterableToArray')
function tc(e) {
	if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
		return Array.from(e)
}
u(tc, '_iterableToArray')
function rc(e) {
	if (Array.isArray(e)) return Sr(e)
}
u(rc, '_arrayWithoutHoles')
function Sr(e, t) {
	;(t == null || t > e.length) && (t = e.length)
	for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
	return n
}
u(Sr, '_arrayLikeToArray')
function nc(e, t) {
	if (e == null) return {}
	var r = ic(e, t),
		n,
		i
	if (Object.getOwnPropertySymbols) {
		var s = Object.getOwnPropertySymbols(e)
		for (i = 0; i < s.length; i++)
			(n = s[i]),
				!(t.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]))
	}
	return r
}
u(nc, '_objectWithoutProperties')
function ic(e, t) {
	if (e == null) return {}
	var r = {},
		n = Object.keys(e),
		i,
		s
	for (s = 0; s < n.length; s++) (i = n[s]), !(t.indexOf(i) >= 0) && (r[i] = e[i])
	return r
}
u(ic, '_objectWithoutPropertiesLoose')
function uc(e, t) {
	return (
		t || (t = e.slice(0)),
		Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }))
	)
}
u(uc, '_taggedTemplateLiteral')
var ac = u(function (t, r) {
		if (typeof r.onBeforeRender != 'function') return t
		var n = Ou(
			r.onBeforeRender,
			qn(
				Vn ||
					(Vn = uc([
						`
      StoryFn.parameters.jsx.onBeforeRender was deprecated.
      Prefer StoryFn.parameters.jsx.transformSource instead.
      See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-onbeforerender for details.
    `,
					])),
			),
		)
		return n(t)
	}, 'applyBeforeRender'),
	sc = u(function (t, r, n) {
		return typeof r.transformSource != 'function' ? t : r.transformSource(t, n)
	}, 'applyTransformSource'),
	oc = u(function (t, r) {
		if (typeof t > 'u') return Rt.warn('Too many skip or undefined component'), null
		for (var n = t, i = n.type, s = 0; s < r.skip; s += 1) {
			if (typeof n > 'u') return Rt.warn('Cannot skip undefined element'), null
			if (Vt.Children.count(n) > 1) return Rt.warn('Trying to skip an array of elements'), null
			typeof n.props.children > 'u'
				? (Rt.warn('Not enough children to skip elements.'),
				  typeof n.type == 'function' && n.type.name === '' && (n = Iu(i, { ...n.props })))
				: typeof n.props.children == 'function'
				  ? (n = n.props.children())
				  : (n = n.props.children)
		}
		var o =
				typeof r.displayName == 'string'
					? {
							showFunctions: !0,
							displayName: u(function () {
								return r.displayName
							}, 'displayName'),
					  }
					: {
							displayName: u(function (x) {
								return (
									x.type.displayName ||
									zn(x.type, 'displayName') ||
									(x.type.name !== '_default' ? x.type.name : null) ||
									(typeof x.type == 'function' ? 'No Display Name' : null) ||
									(js(x.type) ? x.type.render.name : null) ||
									(Ai(x.type) ? x.type.type.name : null) ||
									x.type
								)
							}, 'displayName'),
					  },
			c = {
				filterProps: u(function (x, E) {
					return x !== void 0
				}, 'filterProps'),
			},
			h = Object.assign({}, o, c, r),
			g = Vt.Children.map(t, function (D) {
				var x = typeof D == 'number' ? D.toString() : D,
					E = ac(Fr(x, h), r)
				if (E.indexOf('&quot;') > -1) {
					var v = E.match(/\S+=\\"([^"]*)\\"/g)
					v &&
						v.forEach(function (b) {
							E = E.replace(b, b.replace(/&quot;/g, "'"))
						})
				}
				return E
			}).join(`
`)
		return g.replace(/function\s+noRefCheck\(\)\s+\{\}/, '() => {}')
	}, 'renderJsx'),
	lc = { skip: 0, showFunctions: !1, enableBeautify: !0, showDefaultProps: !1 },
	cc = u(function (t) {
		var r,
			n = t == null || (r = t.parameters.docs) === null || r === void 0 ? void 0 : r.source,
			i = t == null ? void 0 : t.parameters.__isArgsStory
		return (n == null ? void 0 : n.type) === Ut.DYNAMIC
			? !1
			: !i || (n == null ? void 0 : n.code) || (n == null ? void 0 : n.type) === Ut.CODE
	}, 'skipJsxRender'),
	fc = u(function (t) {
		var r, n
		return (
			((r = t.type) === null || r === void 0 ? void 0 : r.displayName) === 'MDXCreateElement' &&
			!!((n = t.props) !== null && n !== void 0 && n.mdxType)
		)
	}, 'isMdx'),
	pc = u(function e(t) {
		if (!fc(t)) return t
		var r = t.props
		r.mdxType
		var n = r.originalType,
			i = r.children,
			s = nc(r, Xl),
			o = []
		if (i) {
			var c = Array.isArray(i) ? i : [i]
			o = c.map(e)
		}
		return Dt.exports.createElement.apply(void 0, [n, s].concat(Yl(o)))
	}, 'mdxToJsx'),
	hc = u(function (t, r) {
		var n,
			i,
			s = ku.getChannel(),
			o = cc(r),
			c = t(),
			h = ''
		if (
			(Nu(function () {
				o || s.emit(es, (r || {}).id, h)
			}),
			o)
		)
			return c
		var g = Object.assign({}, lc, (r == null ? void 0 : r.parameters.jsx) || {}),
			D =
				r != null &&
				(n = r.parameters.docs) !== null &&
				n !== void 0 &&
				(i = n.source) !== null &&
				i !== void 0 &&
				i.excludeDecorators
					? r.originalStoryFn(r.args, r)
					: c,
			x = pc(D),
			E = oc(x, g)
		return E && (h = sc(E, g, r)), c
	}, 'jsxDecorator'),
	yc = {
		docs: {
			inlineStories: !0,
			prepareForInline: u(function (t) {
				return t()
			}, 'prepareForInline'),
			extractArgTypes: Kl,
			extractComponentDescription: Xa,
		},
	},
	Cc = [hc],
	vc = [Ya]
export { vc as argTypesEnhancers, Cc as decorators, yc as parameters }
//# sourceMappingURL=config.c5519360.js.map
