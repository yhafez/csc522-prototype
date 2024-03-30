interface SearchOptionsProps {
	id: string
	name: string
	label: string
}

const SearchOptions = ({ id, name, label }: SearchOptionsProps) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '0.5rem',
			}}
		>
			<input type="checkbox" id={id} name={name} style={{ marginRight: '0.5rem' }} />
			<label htmlFor={name} style={{ fontSize: '0.8rem' }}>
				{label}
			</label>
		</div>
	)
}

export default SearchOptions
