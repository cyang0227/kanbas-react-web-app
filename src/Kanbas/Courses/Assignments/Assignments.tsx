import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { KanbasState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAsssignment,
} from "./assignmentsReducer";

function AssignmentList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const assignmentsList = useSelector(
    (state: KanbasState) => state.assignmentReducer.assignments
  );
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentReducer.assignment
  );

  return (
    <>
      <div className="d-flex justify-content-end p-2 mr-3">
        <button
          className="btn btn-danger"
          onClick={() =>
            dispatch(addAssignment({ ...assignment, course: courseId }))
          }
        >
          + Assignment
        </button>
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
