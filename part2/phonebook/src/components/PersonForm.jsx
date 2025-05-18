const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber, newId, setNewId }) => {
	const handleNameChange = (event) => {
		setNewName(event.target.value)
	}

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const alreadyExists = persons.some((person) => person.name === newName)
		if (alreadyExists) {
			alert(`${newName} is already added to the phonebook`)
			return
		}

		const numberAlreadyExists = persons.some((person) => person.number === newNumber)
		if (numberAlreadyExists) {
			alert(`${newNumber} is already added to the phonebook`)
			return
		}

		setPersons(persons.concat({ id: newId, name: newName, number: newNumber }))
		setNewId(newId + 1)
		setNewNumber("")
		setNewName("")
	}

	return (
		<>
			<h2>add a new</h2>
			<form onSubmit={handleSubmit}>
				<div>
					name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					number: <input value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</>
	)
}

export default PersonForm
