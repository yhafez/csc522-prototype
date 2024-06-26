var i = Object.defineProperty
var n = (e, t) => i(e, 'name', { value: t, configurable: !0 })
import { j as s } from './jsx-runtime.adda36d4.js'
const o = n(({ primary: e = !1, size: t = 'medium', backgroundColor: a, label: r, ...l }) => {
	const u = e ? 'storybook-button--primary' : 'storybook-button--secondary'
	return s('button', {
		type: 'button',
		className: ['storybook-button', `storybook-button--${t}`, u].join(' '),
		style: { backgroundColor: a },
		...l,
		children: r,
	})
}, 'Button')
try {
	;(o.displayName = 'Button'),
		(o.__docgenInfo = {
			description: 'Primary UI component for user interaction',
			displayName: 'Button',
			props: {
				primary: {
					defaultValue: { value: 'false' },
					description: 'Is this the principal call to action on the page?',
					name: 'primary',
					required: !1,
					type: { name: 'boolean' },
				},
				backgroundColor: {
					defaultValue: null,
					description: 'What background color to use',
					name: 'backgroundColor',
					required: !1,
					type: { name: 'string' },
				},
				size: {
					defaultValue: { value: 'medium' },
					description: 'How large should the button be?',
					name: 'size',
					required: !1,
					type: {
						name: 'enum',
						value: [{ value: '"small"' }, { value: '"medium"' }, { value: '"large"' }],
					},
				},
				label: {
					defaultValue: null,
					description: 'Button contents',
					name: 'label',
					required: !0,
					type: { name: 'string' },
				},
				onClick: {
					defaultValue: null,
					description: 'Optional click handler',
					name: 'onClick',
					required: !1,
					type: { name: '(() => void)' },
				},
			},
		}),
		typeof STORYBOOK_REACT_CLASSES < 'u' &&
			(STORYBOOK_REACT_CLASSES['src/stories/Button.tsx#Button'] = {
				docgenInfo: o.__docgenInfo,
				name: 'Button',
				path: 'src/stories/Button.tsx#Button',
			})
} catch {}
export { o as B }
//# sourceMappingURL=Button.a7fc7e98.js.map
