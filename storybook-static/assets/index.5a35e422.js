var m = Object.defineProperty
var n = (o, e) => m(o, 'name', { value: e, configurable: !0 })
import { D as p, T as S, S as x, a as v, b as y, d as C, P as T, e as I } from './Props.13743566.js'
import {
	A as k,
	j as w,
	O as G,
	d as K,
	K as L,
	p as W,
	N as $,
	f as q,
	C as z,
	n as J,
	b as Q,
	q as U,
	s as V,
	D as X,
	a as Z,
	Q as ee,
	R as te,
	H as re,
	I as ae,
	g as se,
	M as oe,
	P as ne,
	t as ie,
	u as ce,
	w as le,
	y as de,
	x as pe,
	o as ue,
	e as me,
	G as Se,
	m as xe,
	J as ve,
	h as ye,
	i as Ce,
	L as Te,
	k as Ie,
	l as fe,
	r as ge,
	v as he,
	E as be,
	F as Pe,
	B as De,
	z as Ae,
} from './Props.13743566.js'
import { r as u, j as a, b as f, F as g } from './jsx-runtime.adda36d4.js'
import './iframe.734f45ba.js'
import './string.cf618ebb.js'
import './es.map.constructor.86a6c0ec.js'
import './es.number.to-fixed.54b1ee4f.js'
var h = /\s*\/\s*/,
	b = n(function (e) {
		var t = e.title,
			r = t.trim().split(h)
		return (r && r[r.length - 1]) || t
	}, 'extractTitle'),
	P = n(function (e) {
		var t = e.children,
			r = u.exports.useContext(p),
			s = t
		return s || (s = b(r)), s ? a(S, { className: 'sbdocs-title', children: s }) : null
	}, 'Title'),
	D = n(function (e) {
		var t = e.children,
			r = u.exports.useContext(p),
			s = r.id,
			i = r.storyById,
			c = i(s),
			l = c.parameters,
			d = t
		return (
			d || (d = l == null ? void 0 : l.componentSubtitle),
			d ? a(x, { className: 'sbdocs-subtitle', children: d }) : null
		)
	}, 'Subtitle'),
	A = n(function (e) {
		var t = e.name,
			r = u.exports.useContext(p),
			s = r.componentStories,
			i = s(),
			c
		return (
			i &&
				(c = t
					? i.find(function (l) {
							return l.name === t
					  })
					: i[0]),
			c ? a(v, { ...c, expanded: !1, withToolbar: !0 }) : null
		)
	}, 'Primary'),
	E = n(function () {
		return f(g, {
			children: [a(P, {}), a(D, {}), a(y, {}), a(A, {}), a(C, { story: T }), a(I, {})],
		})
	}, 'DocsPage'),
	H = n(function (e) {
		var t = e.children
		return a('div', { style: { fontFamily: 'sans-serif' }, children: t })
	}, 'Wrapper')
export {
	k as AddContext,
	w as Anchor,
	G as AnchorMdx,
	K as ArgsTable,
	L as CURRENT_SELECTION,
	W as Canvas,
	$ as CodeOrSourceMdx,
	q as ColorItem,
	z as ColorPalette,
	J as ComponentsTable,
	Q as Description,
	U as DescriptionType,
	V as DocsContainer,
	X as DocsContext,
	E as DocsPage,
	Z as DocsStory,
	ee as HeaderMdx,
	te as HeadersMdx,
	re as Heading,
	ae as IconGallery,
	se as IconItem,
	oe as Meta,
	ne as PRIMARY_STORY,
	ie as Preview,
	A as Primary,
	ce as Props,
	le as Source,
	de as SourceContainer,
	pe as SourceContext,
	ue as SourceState,
	me as Stories,
	Se as Story,
	xe as StoryTable,
	ve as Subheading,
	D as Subtitle,
	P as Title,
	ye as Typeset,
	H as Wrapper,
	Ce as anchorBlockIdFromId,
	Te as assertIsFn,
	Ie as extractComponentArgTypes,
	b as extractTitle,
	fe as getComponent,
	ge as getDescriptionProps,
	he as getSourceProps,
	be as getStoryId,
	Pe as getStoryProps,
	De as lookupStoryId,
	Ae as storyBlockIdFromId,
}
//# sourceMappingURL=index.5a35e422.js.map
