import { useRef } from "react";

import Button from "./Button";

const TaskBar = ({ projectId, taskList, setProjectList }) => {
    const addTaskRef = useRef();

    const onAddTask = () => {
        setProjectList((prevProjectList) =>
            prevProjectList.map((project) => {
                if (project.id === projectId) {
                    const freeId =
                        (project.taskList[project.taskList.length - 1]?.id ??
                            -1) + 1 ?? 0;

                    const newTask = {
                        id: freeId,
                        title: addTaskRef.current.value,
                    };

                    return {
                        ...project,
                        taskList: [...project.taskList, newTask],
                    };
                } else return project;
            })
        );
    };

    const onClearTask = (taskId) => {
        setProjectList((prevProjectList) =>
            prevProjectList.map((project) => {
                if (project.id === projectId) {
                    for (let i = 0; i < project.taskList.length; i++) {
                        if (project.taskList[i].id === taskId) {
                            project.taskList.splice(i, 1);
                            break;
                        }
                    }
                }

                return project;
            })
        );
    };

    return (
        <div>
            <div>
                <h1 className="font-semibold text-4xl text-stone-700 mb-3">
                    Tasks
                </h1>
                <div>
                    <input
                        ref={addTaskRef}
                        className="w-1/3 bg-stone-200 p-3 rounded-sm border-b-4 border-stone-300 hover:border-stone-500 outline-none focus:border-stone-500 font-semibold text-xl text-stone-600 text-lg"
                        type="text"
                    />
                    <Button type="transparent" onClick={onAddTask}>
                        Add Task
                    </Button>
                </div>
            </div>

            <div>
                <ul>
                    {taskList?.map((task) => (
                        <li
                            key={task.id}
                            className="flex bg-stone-100 rounded-md py-3 px-6 justify-between items-center"
                        >
                            <p className="text-xl text-stone-600 font-semibold">
                                {task.title}
                            </p>
                            <Button
                                className="mb-0"
                                type="transparent"
                                onClick={() => onClearTask(task.id)}
                            >
                                Clear
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TaskBar;
