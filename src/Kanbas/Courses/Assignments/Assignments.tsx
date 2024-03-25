import React from "react";
import { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, Route, useParams, useNavigate } from "react-router-dom";
import { KanbasState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "./assignmentsReducer";

function AssignmentList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [assignmentToDelete, setAssignmentToDelete] = useState(null);
  const assignmentsList = useSelector(
    (state: KanbasState) => state.assignmentReducer.assignments.filter(
        (assignment) => assignment.course === courseId
    )
  );
  

  const newAssignmentEditor = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
  };

  const handleDelete = (assignment:any) => {
    setAssignmentToDelete(assignment);
  };

  return (
    <>
      <div className="d-flex justify-content-end p-2 mr-3">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments/{assignment._id}`}
          className="btn btn-danger float-end"
          onClick={newAssignmentEditor}
        >
          + Assignment
        </Link>
      </div>

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentsList
              .filter((assignment) => assignment.course === courseId)
              .map((assignment) => (
                <li className="list-group-item">
                  <FaEllipsisV className="me-2" />
                  <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteAssignment(assignment._id))}
                    >
                      Delete
                    </button>
                  </span>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default AssignmentList;
