import Link from "next/link";
import React from "react";

const ProjectCard = ({ project, index }) => {
  return (
    <Link
      href={"projects/" + project.owner}
      className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
        index === 3 || index === 6 ? "col-span-2" : ""
      }`}
    >
      <h2>{project.name}</h2>
      <p>
        <strong>Description:</strong> {project.description}
      </p>
      <p>
        <strong>Owner:</strong> {project.owner}
      </p>
      <p>
        <strong>Start Date:</strong>{" "}
        {new Date(project.startDate).toLocaleDateString()}
      </p>
      <p>
        <strong>End Date:</strong>{" "}
        {new Date(project.endDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Status:</strong> {project.status}
      </p>
    </Link>
  );
};

export default ProjectCard;
