import { useState } from "react";

function CourseList() {
    const [courseName, setCourseName] = useState("");
    const [courses, setCourses] = useState<string[]>([]);

    return (
        <div className="course-list">
            <h2>My Courses:</h2>

            <div className="course-input">
                <input
                    placeholder="Course Name"
                    value={courseName}
                    onChange={(event) => {
                        setCourseName(event.target.value);
                    }}
                />

                <button
                    onClick={() => {
                        if (courseName.trim() === "") {
                            return;
                        }

                        setCourses([...courses, courseName]);
                        setCourseName("");
                    }}
                >
                    Add Course
                </button>
            </div>

            <ul>
                {courses.map((course, index) => (
                    <li key={index}>
                        {course}
                        <button
                            onClick={() => {
                                setCourses(
                                    courses.filter((_, i) => i !== index)
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

export default CourseList;