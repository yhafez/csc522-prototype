const SearchResults = () => {
	const generateResults = () => {
		const results = []
		for (let i = 0; i < 10; i++) {
			results.push(
				<li
					key={i}
					style={{
						padding: '1rem',
						borderBottom: '1px solid #ccc',
						listStyle: 'none',
					}}
				>
					<h3
						style={{
							fontSize: '1.2rem',
							fontWeight: 'bold',
						}}
					>
						Result {i}
					</h3>
					<p
						style={{
							fontSize: '1rem',
							fontWeight: 'normal',
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus mauris a
						diam. Penatibus et magnis dis parturient montes nascetur ridiculus mus. Rhoncus dolor
						purus non enim praesent elementum facilisis leo vel. Fermentum dui faucibus in ornare
						quam. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Sem
						fringilla ut morbi tincidunt. Nunc scelerisque viverra mauris in aliquam sem fringilla
						ut. Neque laoreet suspendisse interdum consectetur libero. Habitasse platea dictumst
						quisque sagittis purus sit amet. Amet commodo nulla facilisi nullam vehicula ipsum.
						Lorem ipsum dolor sit amet consectetur. Morbi non arcu risus quis. Quisque egestas diam
						in arcu cursus euismod. Massa tincidunt dui ut ornare lectus sit amet est placerat. Eu
						volutpat odio facilisis mauris sit amet massa vitae tortor.
					</p>
					<p
						style={{
							fontSize: '1rem',
							fontWeight: 'normal',
						}}
					>
						Source:{' '}
					</p>
					<a
						href="https://www.example.com"
						style={{
							fontSize: '1rem',
							fontWeight: 'normal',
						}}
					>
						Link to source
					</a>
				</li>,
			)
		}
		return results
	}

	return (
		<div>
			<h2>Search Results</h2>
			<ul>{generateResults()}</ul>
		</div>
	)
}

export default SearchResults
