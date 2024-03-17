import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState } from "react";
import * as db from "./Database";

function Kanbas() {

  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = () => {
    setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };


  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
      import Courses from "./Courses"; // Import the Courses component

      // ...

            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element={<h1>Account</h1>} />
                <Route path="Dashboard" element={<Dashboard 
                  courses={courses} 
                  course={course} 
                  setCourse={setCourse} 
                  addNewCourse={addNewCourse} 
                  deleteCourse={deleteCourse} 
                  updateCourse={updateCourse}
                />} />
                <Route path="Courses/:courseId/*" element={
                <Courses courses={courses} /> // Pass the courses prop correctly
                } />
              </Routes>
      </div>
    </div>
);}
export default Kanbas;