import Button from "./Button";
import TaskBar from "./TaskBar";

const ViewScreen = ({ project, setProjectList, setStatus }) => {
    const onDeleteProject = () => {
        setProjectList((prevProjectList) =>
            prevProjectList.filter((currentProject) => {
                return currentProject.id !== project.id;
            })
        );

        setStatus("idle");
    };

    return (
        <div className="flex w-4/5 justify-evenly items-center pl-32 pr-96 flex-col">
            <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                    <h1 className="font-bold text-6xl text-stone-700">
                        {project?.title}
                    </h1>
                    <Button
                        className="mb-0"
                        type="transparent"
                        onClick={onDeleteProject}
                    >
                        Delete
                    </Button>
                </div>

                <div className="flex mb-4">
                    <p className="font-semibold text-xl text-stone-400">
                        {project?.date}
                    </p>
                </div>

                <div className="mb-5 pb-5 border-b-4 border-stone-300">
                    <p className="text-xl text-stone-600 font-semibold">
                        {project?.description}
                    </p>
                </div>

                <TaskBar
                    projectId={project?.id}
                    taskList={project?.taskList}
                    setProjectList={setProjectList}
                />
            </div>
        </div>
    );
};

export default ViewScreen;
