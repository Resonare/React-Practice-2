import Button from "./Button";
import ProjectList from "./ProjectList";

const SideBar = ({ projectList, setStatus }) => {
    const onOpenAddScreen = () => {
        setStatus("add");
    };

    return (
        <div className="flex text-orange-50 w-1/5 h-lvh">
            <div className="bg-stone-950 w-full mt-16 rounded-tr-3xl pt-32 px-10 ">
                <h1 className="font-semibold uppercase text-3xl mb-10">
                    Your Projects
                </h1>

                <Button onClick={onOpenAddScreen}>+ Add Project</Button>

                <ProjectList projectList={projectList} setStatus={setStatus} />
            </div>
        </div>
    );
};

export default SideBar;
