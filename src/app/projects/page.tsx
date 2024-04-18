import ProjectCard from "@/components/ui/project-card";
import React from "react";

const ProjectsPage = () => {
  const mockupProjects = [
    {
      id: 1,
      name: "Project Alpha",
      description: "A new app for online shopping.",
      owner: "Alice",
      startDate: "2024-03-01",
      endDate: "2024-08-01",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Project Beta",
      description: "Revamping the company website.",
      owner: "Bob",
      startDate: "2024-01-15",
      endDate: "2024-06-15",
      status: "Completed",
    },
    {
      id: 3,
      name: "Project Gamma",
      description: "Developing a mobile game.",
      owner: "Charlie",
      startDate: "2024-05-01",
      endDate: "2024-12-01",
      status: "In Progress",
    },
    {
      id: 4,
      name: "Project Delta",
      description: "Implementing a CRM system.",
      owner: "Dave",
      startDate: "2024-04-01",
      endDate: "2024-09-01",
      status: "Planned",
    },
    {
      id: 5,
      name: "Project Epsilon",
      description: "Launching a new marketing campaign.",
      owner: "Eve",
      startDate: "2024-06-01",
      endDate: "2024-08-15",
      status: "In Progress",
    },
    {
      id: 6,
      name: "Project Zeta",
      description: "Designing a new logo.",
      owner: "Frank",
      startDate: "2024-03-15",
      endDate: "2024-04-15",
      status: "Completed",
    },
    {
      id: 7,
      name: "Project Eta",
      description: "Developing a customer support chatbot.",
      owner: "Grace",
      startDate: "2024-07-01",
      endDate: "2024-12-01",
      status: "Planned",
    },
  ];

  return (
    <div className="grid place-content-center md:h-screen m-6 md:m-0">
      <div className="hidden md:grid auto-rows-[192px] grid-cols-3 gap-4 ">
        {mockupProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      {/* Mobile */}
      <div className="flex md:hidden flex-col gap-4 ">
        {mockupProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
