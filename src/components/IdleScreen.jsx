import noProjectsImage from "../assets/no-projects.png";
import Button from "./Button";

const IdleScreen = ({ onOpenAdd }) => {
    return (
        <div className="flex w-4/5 justify-evenly items-center">
            <div className="flex flex-col items-center">
                <img className="w-32 h-32 mb-10" src={noProjectsImage} alt="" />
                <h1 className="font-bold text-4xl text-stone-600 mb-10">
                    No project selected
                </h1>
                <p className="text-3xl text-stone-400 mb-10">
                    Select a project or get started with a new one
                </p>
                <Button onClick={onOpenAdd}>Create new project</Button>
            </div>
        </div>
    );
};

export default IdleScreen;
