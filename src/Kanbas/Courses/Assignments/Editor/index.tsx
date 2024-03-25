import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { KanbasState } from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "../assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();
  const [assignment, setAssignment] = useState({
    title: "New Assignment",
    description: "New Description",
    due: "",
    points: 100,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSave = () => {
    dispatch(updateAssignment(assignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  
  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setAssignment((prevAssignment) => ({
        ...prevAssignment,
        [name]: value,
    }));
};

  return (
    <div>
      <div className="d-flex p-2 mr-3">
        <div className="container-fluid">
          <div className="row">
            <label htmlFor="assignmentName" className="form-label">
              Assignment Name
            </label>
          </div>

          <div className="row mb-3">
            <input
              type="text"
              name="title"
              id="assignmentName"
              value={assignment?.title}
              className="form-control"
              onChange={handleInputChange}
            />
          </div>

          <div className="row mb-3">
            <textarea
              name="description"
              rows={3}
              onChange={handleInputChange}
              placeholder="Assignment Description"
              className="form-control"
            />
          </div>

          <div className="row mb-3">
            <div className="col-md-4 align-items-end">
              <div className="d-flex justify-content-end">
                <label htmlFor="points" className="form-label">
                  Points
                </label>
              </div>
            </div>

            <div className="col-md-8">
              <input
                name="points"
                onChange={handleInputChange}
                type="number"
                id="points"
                defaultValue={100}
                className="form-control"
              />
            </div>
          </div>

          <div className="row align-items-top">
            <div className="col-4">
              <div className="float-end">
                <label htmlFor="assign">Assign</label>
              </div>
            </div>
            <div className="col-8">
              <label htmlFor="due">
                <b>Due</b>
              </label>
              <input
                className="form-control"
                id="due"
                type="date"
                defaultValue="2024-01-01"
              />
              <br />
              <div className="row">
                <div className="col-6">
                  <label htmlFor="available-from">
                    <b>Available From</b>
                  </label>
                </div>
                <div className="col-4">
                  <label htmlFor="until">
                    <b>Until</b>
                  </label>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-6">
                  <input
                    className="form-control"
                    id="available-from"
                    type="date"
                    defaultValue="2024-01-01"
                  />
                </div>
                <div className="col-6">
                  <input
                    className="form-control"
                    id="until"
                    type="date"
                    defaultValue="2024-05-31"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              handleSave();
            }}
            className="btn btn-danger ms-2 float-end"
          >
            Save
          </button>
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-outline-secondary float-end"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AssignmentEditor;
