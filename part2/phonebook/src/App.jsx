import { useState } from "react"
import Filter from "./components/Filter.jsx"
import PersonForm from "./components/PersonForm.jsx"
import Persons from "./components/Persons.jsx"

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 }
	])
	const [newName, setNewName] = useState("")
	const [newNumber, setNewNumber] = useState("")
	const [filter, setFilter] = useState("")
	const [newId, setNewId] = useState(5)

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter filter={filter} setFilter={setFilter}></Filter>
			<PersonForm
				persons={persons}
				setPersons={setPersons}
				newName={newName}
				setNewName={setNewName}
				newNumber={newNumber}
				setNewNumber={setNewNumber}
				newId={newId}
				setNewId={setNewId}></PersonForm>
			<h2>Numbers</h2>
			<Persons persons={persons} filter={filter}></Persons>
		</div>
	)
}

export default App
