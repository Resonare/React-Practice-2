import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";

const AddScreen = ({ setStatus, projectList, setProjectList }) => {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();

    const onSave = (evt) => {
        evt.preventDefault();

        const newProject = {
            id: projectList.length,
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            date: dateRef.current.value,
            taskList: [],
        };

        if (
            newProject.title == "" ||
            newProject.description == "" ||
            newProject.date == ""
        ) {
            alert("All fields must be filled!");
            return;
        }

        setProjectList((prevProjectList) => [...prevProjectList, newProject]);
        setStatus("idle");
    };

    const onCancel = (evt) => {
        evt.preventDefault();
        setStatus("idle");
    };

    return (
        <div className="flex w-4/5 justify-evenly items-center pl-32 pr-96">
            <form className="w-full" onSubmit={onSave}>
                <div className="flex justify-end w-full">
                    <Button
                        className="mx-2 mb-1 px-9 py-3"
                        type="transparent"
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="mx-2 mb-1 px-9 py-3"
                        type="black"
                        onClick={onSave}
                    >
                        Save
                    </Button>
                </div>
                <Input type="text" id="title" ref={titleRef}>
                    Title
                </Input>
                <Input type="textarea" id="description" ref={descriptionRef}>
                    Description
                </Input>
                <Input type="date" id="date" ref={dateRef}>
                    Due date
                </Input>
            </form>
        </div>
    );
};

export default AddScreen;
