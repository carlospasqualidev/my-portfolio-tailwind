'use client';

import { ProjectCard } from '@/components';

import { FaUserSecret, FaServer } from 'react-icons/fa';

const projectsData = [
  {
    Icon: FaServer,
    title: 'Back-end - modelo',
    description:
      ' Desenvolvi este projeto para servir como modelo base para qualquer tipo de projeto, contendo programação funcional, documentação Swagger, Express para rotas, configurações de Cors, arquitetura modular, funções para lidar com datas, handlers de email, handler de erro, funções para lidar com tokens, lógica de autenticação, pronta, uploader de arquivos configurado e um esquema Prisma com usuário e permissões extremamente modulares.',
  },
  {
    Icon: FaUserSecret,
    title: 'Anônimo',
    description:
      'Uma tecnologia que busca acelerar e maximizar os resultados entre Equipes/Times e Squads, garantindo a satisfação e o bem-estar de todos. Um software que possibilita a interação e a confiança, gerando consciência de comportamentos e hábitos coletivos. Seu principal objetivo é oferecer uma área de gestão de pessoas e equipes, com feedbacks, comentários e feedforwards.',
  },
  {
    Icon: FaUserSecret,
    title: 'Anônimo',
    description:
      'Um mapa interativo da região, destinado a empresas e startups, possibilita que todos os moradores da região registrem eventos, seus negócios e locais, criando um ecossistema de colaboração para toda a área em que foi implementado.',
  },
  {
    Icon: FaUserSecret,
    title: 'Anônimo',
    description:
      'Um projeto para a indústria que inclui todos os módulos de cadastro e manipulação complexa de amostras de produtos. Além disso, ele conta com a integração completa com o chão de fábrica e um módulo exclusivo para os contratantes dos serviços da empresa.',
  },
  {
    Icon: FaUserSecret,
    title: 'Anônimo',
    description:
      'O principal objetivo é gerenciar edifícios comerciais, com um módulo completo que inclui calendários, notificações e lembretes para que as manutenções cadastradas sejam executadas por um síndico previamente cadastrado como responsável.',
  },
];

//arrumar para telas grandes

export const Projects = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex overflow-x-scroll pb-5 gap-10">
        {projectsData.map((project, i) => (
          <ProjectCard
            key={project.title + i}
            Icon={project.Icon}
            description={project.description}
            title={project.title}
            projectNumber={i + 1}
            totalProjectNumber={projectsData.length}
          />
        ))}
      </div>
    </div>
  );
};
