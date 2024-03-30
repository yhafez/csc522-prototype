import { useState } from 'react'

interface SearchInputProps {
	hasSearch: boolean
}

const SearchInput = ({ setHasSearch }: SearchInputProps) => {
	const [search, setSearch] = useState('')

	return (
		<input
			type="search"
			placeholder="Search..."
			className="search"
			value={search}
			onChange={e => {
				setSearch(e.target.value)
				if (e.target.value.length > 0) {
					setHasSearch(true)
				} else {
					setHasSearch(false)
				}
			}}
			style={{
				padding: '0.5rem',
				paddingLeft: '1rem',
				fontSize: '1rem',
				width: '100%',
				borderRadius: '0.5rem',
				border: '1px solid #ccc',
				outline: 'none',
			}}
		/>
	)
}

export default SearchInput
