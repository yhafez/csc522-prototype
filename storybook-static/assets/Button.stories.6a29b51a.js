var a = Object.defineProperty
var n = (t, e) => a(t, 'name', { value: e, configurable: !0 })
import { B as r } from './Button.a7fc7e98.js'
import { j as l } from './jsx-runtime.adda36d4.js'
import './iframe.734f45ba.js'
const u = {
		parameters: {
			storySource: {
				source: `import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	primary: true,
	label: 'Button',
}

export const Secondary = Template.bind({})
Secondary.args = {
	label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
	size: 'large',
	label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
	size: 'small',
	label: 'Button',
}
`,
				locationsMap: {
					primary: {
						startLoc: { col: 48, line: 17 },
						endLoc: { col: 76, line: 17 },
						startBody: { col: 48, line: 17 },
						endBody: { col: 76, line: 17 },
					},
					secondary: {
						startLoc: { col: 48, line: 17 },
						endLoc: { col: 76, line: 17 },
						startBody: { col: 48, line: 17 },
						endBody: { col: 76, line: 17 },
					},
					large: {
						startLoc: { col: 48, line: 17 },
						endLoc: { col: 76, line: 17 },
						startBody: { col: 48, line: 17 },
						endBody: { col: 76, line: 17 },
					},
					small: {
						startLoc: { col: 48, line: 17 },
						endLoc: { col: 76, line: 17 },
						startBody: { col: 48, line: 17 },
						endBody: { col: 76, line: 17 },
					},
				},
			},
		},
		title: 'Example/Button',
		component: r,
		argTypes: { backgroundColor: { control: 'color' } },
	},
	o = n(t => l(r, { ...t }), 'Template'),
	s = o.bind({})
s.args = { primary: !0, label: 'Button' }
const c = o.bind({})
c.args = { label: 'Button' }
const i = o.bind({})
i.args = { size: 'large', label: 'Button' }
const p = o.bind({})
p.args = { size: 'small', label: 'Button' }
const B = ['Primary', 'Secondary', 'Large', 'Small']
export {
	i as Large,
	s as Primary,
	c as Secondary,
	p as Small,
	B as __namedExportsOrder,
	u as default,
}
//# sourceMappingURL=Button.stories.6a29b51a.js.map
