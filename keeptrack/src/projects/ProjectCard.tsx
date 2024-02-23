import { Project } from './Project';
import { Link } from 'react-router-dom';

function formatDescription(description: string): string {
  return description.substring(0, 60) + '...';
}

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
}

function ProjectCard(props: ProjectCardProps) {
  const { project, onEdit } = props;
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <Link to={'/projects/' + project.id}>
            <strong>{project.name}</strong>
          </Link>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
        <button 
          aria-label={`edit ${project.name}`}
          className=" bordered"
          onClick={() => { onEdit(project); }}
        >
          <span className="icon-edit "></span>
          Edit
        </button>
      </section>
    </div>
  );
}

export default ProjectCard;