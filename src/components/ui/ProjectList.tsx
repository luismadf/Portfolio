import Project from "components/ui/Project";

interface ProjectListProps {
  projects: any;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="grid gap-12 md:grid-cols-2">
      {projects.map((project: any) => (
        <Project key={`project-${project.name}`} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
