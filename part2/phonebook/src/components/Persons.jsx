const Persons = ({ persons, filter }) => {
	return persons
		.filter((person) => person.name.includes(filter))
		.map((person) => (
			<div key={person.id}>
				{person.name}: {person.number}
			</div>
		))
}

export default Persons
