const ProjectItem = ({ projectData, setStatus }) => {
    const onOpenViewScreen = () => {
        setStatus(`view:${projectData.id}`);
    };

    return (
        <li className="text-lg hover:bg-stone-900 py-3 px-3 w-11/12 cursor-pointer hover:text-stone-200 text-stone-400" onClick={onOpenViewScreen}>
            {projectData.title}
        </li>
    );
};

export default ProjectItem;
