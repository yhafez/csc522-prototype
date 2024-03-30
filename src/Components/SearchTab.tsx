import React from 'react'

interface SearchTabProps {
	label: string
	selected: boolean
	setSelected: (label: string) => void
}

const SearchTab = ({ label, selected, setSelected }: SearchTabProps) => {
	return (
		<li
			style={{
				padding: '1rem',
				cursor: 'pointer',
				fontWeight: 'bold',
				listStyle: 'none',
				width: '100%',
				backgroundColor: selected ? '#ccc' : 'transparent',
			}}
			onClick={() => setSelected(label)}
		>
			{label}
		</li>
	)
}

export default SearchTab
