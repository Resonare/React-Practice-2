import { useState } from "react";
import SideBar from "./components/SideBar";
import IdleScreen from "./components/IdleScreen";
import AddScreen from "./components/AddScreen";
import ViewScreen from "./components/ViewScreen";

const testProject = {
    id: 0,
    title: "Test project",
    description: "Test description",
    date: "1999-03-03",
    taskList: [{ id: 0, title: "Test task" }],
};

function App() {
    const [projectList, setProjectList] = useState([testProject]); //Project contains: id, title, description, date, taskList
    const [status, setStatus] = useState("idle"); //States: idle (project unselected), add (adding new project), view:x (displaying existing project with id x)

    return (
        <div className="flex overflow-hidden h-full">
            <SideBar projectList={projectList} setStatus={setStatus} />

            {status === "idle" ? (
                <IdleScreen setStatus={setStatus} />
            ) : status === "add" ? (
                <AddScreen
                    setStatus={setStatus}
                    projectList={projectList}
                    setProjectList={setProjectList}
                />
            ) : status.split(":")[0] === "view" && true ? (
                <ViewScreen
                    setProjectList={setProjectList}
                    project={projectList[status.split(":")[1]]}
                    setStatus={setStatus}
                />
            ) : (
                <p>"error" {status}</p>
            )}
        </div>
    );
}

export default App;

/*
Components:
-Side bar 1 +
-Button (maybe exact button components needed) 1 +
-Project list 1 +
-Project item 1 +
-Project unselected screen 2 +
-Project creation screen 3 +
-Project info screen 4 +
-Task manager 4 +

Validation and error alerts needed
Adaptive scrolling in TaskBar needed
*/
