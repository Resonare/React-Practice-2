import { useState } from "react";
import SideBar from "./components/SideBar";
import IdleScreen from "./components/IdleScreen";
import AddScreen from "./components/AddScreen";

function App() {
    const [projectList, setProjectList] = useState([]); //Project contains: id, title, description, date, list of tasks
    const [status, setStatus] = useState("idle"); //States: idle (project unselected), add (adding new project), display (displaying existing project)

    const onOpenAdd = () => {
        setStatus("add");
    };

    const onAdd = (newProject) => {
        newProject.id = projectList.length;

        setProjectList((prevProjectList) => [...prevProjectList, newProject]);
    };

    return (
        <div className="flex overflow-hidden h-full">
            <SideBar projectList={projectList} onOpenAdd={onOpenAdd} />

            {status === "idle" ? (
                <IdleScreen onOpenAdd={onOpenAdd} />
            ) : status === "add" ? (
                <AddScreen onAdd={onAdd} setStatus={setStatus} />
            ) : status === "display" && true ? (
                "displaying"
            ) : (
                "error"
            )}
        </div>
    );
}

export default App;

/*
Components:
-Side bar 1 +
-Button (maybe exact button components needed) 1 +-
-Project list 1 +
-Project item 1 +
-Project unselected screen 2 +
-Project creation screen 3 +
-Project info screen 4 +
-Task manager 4
-Task item 4

Validation and error alerts needed


*/
