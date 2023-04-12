import {
  FaDev,
  FaJsSquare,
  FaReact,
  FaPython,
  FaLaptopCode,
  FaUserGraduate,
  FaMedal,
  FaSkull,
  FaGithub,
  FaUsers,
  FaUserSecret,
  FaServer,
  FaRegWindowRestore,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { svgs, images } from '../assets/index';

export const projectsData = [
  {
    Icon: FaRegWindowRestore,
    linkIcons: [
      {
        href: 'https://ferrari-landing-page.vercel.app/',
        Icon: FaExternalLinkAlt,
      },
      {
        href: 'https://github.com/carlospasqualidev/ferrari-landing-page-tailwind',
        Icon: FaGithub,
      },
    ],
    title: 'Landing page - Ferrari',
    description:
      'O código foi desenvolvido por mim com next 13 em conjunto com tailwind, já o design foi criado por uma colega, todos os créditos do mesmo estão no rodapé da landing page.',
  },

  {
    Icon: FaServer,
    linkIcons: [
      {
        href: 'https://github.com/carlospasqualidev/default-server.git',
        Icon: FaGithub,
      },
    ],
    title: 'Back-end - modelo',
    description:
      'Desenvolvi este projeto para servir como modelo base para projetos back-end,sendo assim possui programação funcional, documentação Swagger, Express para rotas, configurações de Cors, arquitetura modular, funções para lidar com datas, handlers de email, handler de erro, funções para lidar com tokens, lógica de autenticação, permissionamento modular, uploader de arquivos configurado e um esquema Prisma base com crud de usuários.',
  },
  {
    Icon: FaUserSecret,
    linkIcons: [],
    title: 'Anônimo',
    description:
      'Uma tecnologia que busca acelerar e maximizar os resultados entre Equipes/Times e Squads, garantindo a satisfação e o bem-estar de todos. Um software que possibilita a interação e a confiança, gerando consciência de comportamentos e hábitos coletivos. Seu principal objetivo é oferecer uma área de gestão de pessoas e equipes, com feedbacks, comentários e feedforwards.',
  },
  {
    Icon: FaUserSecret,
    linkIcons: [],
    title: 'Anônimo',
    description:
      'Um mapa interativo da região, destinado a empresas e startups, possibilita que todos os moradores da região registrem eventos, seus negócios e locais, criando um ecossistema de colaboração para toda a área em que foi implementado.',
  },
  {
    Icon: FaUserSecret,
    linkIcons: [],
    title: 'Anônimo',
    description:
      'Um projeto para a indústria que inclui todos os módulos de cadastro e manipulação complexa de amostras de produtos. Além disso, ele conta com a integração completa com o chão de fábrica e um módulo exclusivo para os contratantes dos serviços da empresa.',
  },
  {
    Icon: FaUserSecret,
    linkIcons: [],
    title: 'Anônimo',
    description:
      'O principal objetivo é gerenciar edifícios comerciais, com um módulo completo que inclui calendários, notificações e lembretes para que as manutenções cadastradas sejam executadas por um síndico previamente cadastrado como responsável.',
  },
];

export const skillsData = [
  {
    key: 1,
    Icon: svgs.Js,
    skillAvg: '89%',
    animDelay: 0,
  },
  {
    key: 2,
    Icon: svgs.Ts,
    skillAvg: '89%',
    animDelay: 0.25,
  },
  {
    key: 3,
    Icon: svgs.Css,
    skillAvg: '81%',
    animDelay: 0.5,
  },
  {
    key: 4,
    Icon: svgs.Html,
    skillAvg: '81%',
    animDelay: 0.75,
  },
  {
    key: 5,
    Icon: svgs.Git,
    skillAvg: '78%',
    animDelay: 1,
  },

  {
    key: 6,
    Icon: svgs.Next,
    skillAvg: '75%',
    animDelay: 1.25,
  },
  {
    key: 7,
    Icon: svgs.Node,
    skillAvg: '87%',
    animDelay: 1.5,
  },
  {
    key: 8,
    Icon: svgs.Prisma,
    skillAvg: '85%',
    animDelay: 1.75,
  },
  {
    key: 9,
    Icon: svgs.Postgresql,
    skillAvg: '75%',
    animDelay: 2,
  },
  {
    key: 10,
    Icon: svgs.React,
    skillAvg: '88%',
    animDelay: 2.25,
  },
  {
    key: 11,
    Icon: svgs.ReactNative,
    skillAvg: '77%',
    animDelay: 2.5,
  },
  {
    key: 12,
    Icon: svgs.Tailwind,
    skillAvg: '78%',
    animDelay: 2.75,
  },
  {
    key: 13,
    Icon: svgs.StyledComponents,
    skillAvg: '82%',
    animDelay: 3,
  },
  {
    key: 14,
    Icon: svgs.Python,
    skillAvg: '64%',
    animDelay: 3.25,
  },
  {
    key: 15,
    Icon: svgs.Csharp,
    skillAvg: '69%',
    animDelay: 3.5,
  },
  {
    key: 16,
    Icon: svgs.Unity,
    skillAvg: '59%',
    animDelay: 3.75,
  },
];

export const experiencesData = [
  {
    image: svgs.Ada,
    title: 'Desenvolvedor',
    subtTitle: 'Ada Software House',
    dateTime: {
      startDate: '01/06/2021',
      endDate: 'xx/xx/xxxx',
    },
    summary: ['Front-end', 'Back-end', '+5 Projetos profissionais'],
    icons: [{ Icon: FaDev }, { Icon: FaJsSquare }, { Icon: FaReact }],
  },
  {
    image: images.Satc,
    title: 'Prof. temporário',
    subtTitle: 'Satc - prog. a vida',
    dateTime: {
      startDate: '01/04/2021',
      endDate: '01/10/2021',
    },
    summary: ['Algoritmo', 'Python', 'Visual G'],
    icons: [
      { Icon: FaPython },
      { Icon: FaLaptopCode },
      { Icon: FaUserGraduate },
    ],
  },
  {
    image: images.Eb,
    title: 'Soldado',
    subtTitle: 'Exército Brasileiro',
    dateTime: {
      startDate: '01/03/2018',
      endDate: '01/03/2019',
    },
    summary: ['Honra ao mérito', 'Artilheiro', 'Espírito de corpo'],
    icons: [{ Icon: FaMedal }, { Icon: FaSkull }, { Icon: FaUsers }],
  },
];
