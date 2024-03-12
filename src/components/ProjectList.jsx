import { useState } from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projectList, setStatus }) => {
    return (
        <ul>
            {projectList.map((projectItem) => (
                <ProjectItem
                    key={projectItem.id}
                    projectData={projectItem}
                    setStatus={setStatus}
                />
            ))}
        </ul>
    );
};

export default ProjectList;
