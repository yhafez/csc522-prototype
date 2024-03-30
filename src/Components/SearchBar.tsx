import { useState } from 'react'

import SearchInput from './SearchInput'
import SearchTab from './SearchTab'
import SearchOptions from './SearchOptions'
import SearchResults from './SearchResults'

interface SearchBarProps {
	hasSearch: boolean
}

const SearchBar = () => {
	const [selectedTab, setSelectedTab] = useState('All')
	const [hasSearch, setHasSearch] = useState(false)

	return (
		<>
			<div
				style={{
					width: '100%',
					margin: '0 auto',
					borderRadius: '1rem',
					border: '1px solid #ccc',
					overflow: 'hidden',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						// borderBottom: '1px solid #ccc',
					}}
				>
					<ul
						style={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-around',
							alignItems: 'center',
							listStyle: 'none',
							padding: 0,
							margin: 0,
							width: '100%',
						}}
					>
						<SearchTab label="All" selected={selectedTab === 'All'} setSelected={setSelectedTab} />
						<SearchTab
							label="Government"
							selected={selectedTab === 'Government'}
							setSelected={setSelectedTab}
						/>
						<SearchTab
							label="Corporation"
							selected={selectedTab === 'Corporation'}
							setSelected={setSelectedTab}
						/>
						<SearchTab
							label="Public Institution"
							selected={selectedTab === 'Public Institution'}
							setSelected={setSelectedTab}
						/>
						<SearchTab
							label="Contract"
							selected={selectedTab === 'Contract'}
							setSelected={setSelectedTab}
						/>
					</ul>
				</div>
				<SearchInput setHasSearch={setHasSearch} />
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-start',
						alignItems: 'center',
						padding: '0.5rem',
					}}
				>
					<SearchOptions
						id="search-within-document"
						name="search-within-document"
						label="Search within document"
					/>
					{selectedTab === 'Government' && (
						<>
							<SearchOptions id="international" name="international" label="International" />
							<SearchOptions id="national" name="national" label="National" />
							<SearchOptions
								id="state-or-province"
								name="state-or-province"
								label="State or Province"
							/>
							<SearchOptions id="county" name="county" label="County" />
							<SearchOptions id="city" name="city" label="City" />
						</>
					)}
				</div>
			</div>
			{hasSearch && <SearchResults />}
		</>
	)
}

export default SearchBar
