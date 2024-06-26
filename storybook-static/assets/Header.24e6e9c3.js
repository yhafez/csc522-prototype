var c = Object.defineProperty
var d = (r, a) => c(r, 'name', { value: a, configurable: !0 })
import { B as n } from './Button.a7fc7e98.js'
import { j as e, b as l, F as o } from './jsx-runtime.adda36d4.js'
const i = d(
	({ user: r, onLogin: a, onLogout: t, onCreateAccount: s }) =>
		e('header', {
			children: l('div', {
				className: 'wrapper',
				children: [
					l('div', {
						children: [
							e('svg', {
								width: '32',
								height: '32',
								viewBox: '0 0 32 32',
								xmlns: 'http://www.w3.org/2000/svg',
								children: l('g', {
									fill: 'none',
									fillRule: 'evenodd',
									children: [
										e('path', {
											d: 'M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z',
											fill: '#FFF',
										}),
										e('path', {
											d: 'M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z',
											fill: '#555AB9',
										}),
										e('path', {
											d: 'M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z',
											fill: '#91BAF8',
										}),
									],
								}),
							}),
							e('h1', { children: 'Acme' }),
						],
					}),
					e('div', {
						children: r
							? l(o, {
									children: [
										l('span', {
											className: 'welcome',
											children: ['Welcome, ', e('b', { children: r.name }), '!'],
										}),
										e(n, { size: 'small', onClick: t, label: 'Log out' }),
									],
							  })
							: l(o, {
									children: [
										e(n, { size: 'small', onClick: a, label: 'Log in' }),
										e(n, { primary: !0, size: 'small', onClick: s, label: 'Sign up' }),
									],
							  }),
					}),
				],
			}),
		}),
	'Header',
)
try {
	;(i.displayName = 'Header'),
		(i.__docgenInfo = {
			description: '',
			displayName: 'Header',
			props: {
				user: {
					defaultValue: null,
					description: '',
					name: 'user',
					required: !1,
					type: { name: 'User' },
				},
				onLogin: {
					defaultValue: null,
					description: '',
					name: 'onLogin',
					required: !0,
					type: { name: '() => void' },
				},
				onLogout: {
					defaultValue: null,
					description: '',
					name: 'onLogout',
					required: !0,
					type: { name: '() => void' },
				},
				onCreateAccount: {
					defaultValue: null,
					description: '',
					name: 'onCreateAccount',
					required: !0,
					type: { name: '() => void' },
				},
			},
		}),
		typeof STORYBOOK_REACT_CLASSES < 'u' &&
			(STORYBOOK_REACT_CLASSES['src/stories/Header.tsx#Header'] = {
				docgenInfo: i.__docgenInfo,
				name: 'Header',
				path: 'src/stories/Header.tsx#Header',
			})
} catch {}
export { i as H }
//# sourceMappingURL=Header.24e6e9c3.js.map
