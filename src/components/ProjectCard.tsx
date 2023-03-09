import Image from 'next/image';

interface IProjectCard {
  image: any;
  title: string;
  description: string;
  projectNumber: number;
  totalProjectNumber: number;
}

//first chilend margin 0 auto
export const ProjectCard = ({
  image,
  title,
  description,
  projectNumber,
  totalProjectNumber,
}: IProjectCard) => {
  return (
    <div className="min-w-[32%] max-md:min-w-[100%] flex flex-col items-center text-center">
      <Image
        src={image}
        alt=""
        className="w-32 h-32 bg-cover rounded-2xl mb-6 max-md:h-24 max-md:w-24"
      />

      <h1 className="mb-4 text-2xl font-bold max-md:text-xl">
        Projeto {projectNumber} de {totalProjectNumber}:{' '}
        <span className="underline decoration-[#2dd4bf]/50 decoration-red-7">
          {title}
        </span>
      </h1>
      <p>{description}</p>
    </div>
  );
};
