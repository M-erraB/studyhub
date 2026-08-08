import { useState } from "react";

type Assignment = {
    title: string;
    course: string;
    dueDate: string;
    completed: boolean;
};

function AssignmentList() {
    const [title, setTitle] = useState("");
    const [course, setCourse] = useState("");
    const [dueDate, setDueDate] = useState("");

    const [assignments, setAssignments] = useState<Assignment[]>([]);

    return (
        <div className="course-list">
            <h2>Assignments</h2>

            <div className="course-input">
                <input
                    placeholder="Assignment Name"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <input
                    placeholder="Course"
                    value={course}
                    onChange={(event) => setCourse(event.target.value)}
                />

                <input
                    type="date"
                    value={dueDate}
                    onChange={(event) => setDueDate(event.target.value)}
                />

                <button
                    onClick={() => {
                        if (
                            title.trim() === "" ||
                            course.trim() === "" ||
                            dueDate === ""
                        ) {
                            return;
                        }

                        setAssignments([
                            ...assignments,
                            {
                                title,
                                course,
                                dueDate,
                                completed: false,
                            },
                        ]);

                        setTitle("");
                        setCourse("");
                        setDueDate("");
                    }}
                >
                    Add Assignment
                </button>
            </div>

            <ul>
                {assignments.map((assignment, index) => (
                    <li key={index}>
                        <div>
                            <strong>{assignment.title}</strong>
                            <br />
                            {assignment.course}
                            <br />
                            Due: {assignment.dueDate}
                        </div>

                        <button
                            onClick={() => {
                                setAssignments(
                                    assignments.filter(
                                        (_, i) => i !== index
                                    )
                                );
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AssignmentList;