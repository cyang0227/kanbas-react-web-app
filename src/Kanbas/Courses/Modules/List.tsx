import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { modules } from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();

  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  // const [moduleList, setModuleList] = useState<any[]>(modules);

  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  //   _id: new Date().getTime().toString(),
  // });

  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };

  // const addModule = (module: any) => {
  //   const newModule = { ...module, _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };

  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId
  //   );
  //   setModuleList(newModuleList);
  // };

  return (
    <>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(addModule({ ...module, course: courseId }));
            }}
          >
            Add
          </button>
          <button
            className="btn btn-success"
            onClick={() => {
              dispatch(updateModule(module));
            }}
          >
            Update
          </button>
          <br />
          <input
            value={module.name}
            size={50}
            onChange={(e) =>
              dispatch(
                setModule({
                  ...module,
                  name: e.target.value,
                })
              )
            }
          />
          <br />
          <textarea
            value={module.description}
            rows={4}
            cols={53}
            onChange={(e) =>
              dispatch(
                setModule({
                  ...module,
                  description: e.target.value,
                })
              )
            }
          />
        </li>

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <button
                className="btn btn-warning"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => dispatch(deleteModule(module._id))}
              >
                Delete
              </button>
              <h3>{module.name}</h3>
              <p>{module.description}</p>
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
