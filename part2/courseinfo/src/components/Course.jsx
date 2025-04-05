const Course = ({ course }) => {
	return (
		<div>
			<h2>{course.name}</h2>
			<div>
				{course.parts.map((part) => (
					<p key={part.id}>
						{part.name} {part.exercises}
					</p>
				))}
			</div>
			<h4>
				total of{" "}
				{course.parts.reduce((acc, curr) => acc + curr.exercises, 0)}{" "}
				exercises
			</h4>
		</div>
	)
}

export default Course
