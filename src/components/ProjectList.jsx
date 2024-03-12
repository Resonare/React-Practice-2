import { useState } from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projectList }) => {
    return (
        <ul>
            {projectList.map((projectItem) => (
                <ProjectItem key={projectItem.id} data={projectItem} />
            ))}
        </ul>
    );
};

export default ProjectList;
