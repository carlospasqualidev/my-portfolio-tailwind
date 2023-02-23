import Image from 'next/image';

interface IProjectsCard {
  projects: {
    Image: any;
    title: string;
    description: string;
  }[];
}

export const ProjectsCards = ({ projects }: IProjectsCard) => {
  return (
    <div
      className={
        projects.length > 3
          ? 'flex items-center gap-12 overflow-auto pb-6'
          : 'flex items-center justify-center gap-12 overflow-auto pb-6'
      }
    >
      {projects.map((project, i) => (
        <article
          key={project.title}
          className="w-[30%] min-w-[30%] flex flex-col items-center text-center z-20"
        >
          <div>
            <Image
              src={project.Image}
              alt=""
              className="w-32 h-32 bg-cover rounded-2xl mb-6"
            />
          </div>

          <h1 className="mb-4 text-2xl font-bold ">
            Projeto {i + 1} de {projects.length}:{' '}
            <span className="underline decoration-[#b91c1c]/50 decoration-red-7">
              {project.title}
            </span>
          </h1>
          <p>{project.description}</p>
        </article>
      ))}
    </div>
  );
};
