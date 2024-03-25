import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
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
              id="assignmentName"
              value={assignment?.title}
              className="form-control"
            />
          </div>

          <div className="row mb-3">
            <textarea
              rows={3}
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
                value="2024-01-01"
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
                    value="2024-01-01"
                  />
                </div>
                <div className="col-6">
                  <input
                    className="form-control"
                    id="until"
                    type="date"
                    value="2024-01-01"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleSave}
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
