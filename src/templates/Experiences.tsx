'use client';

import { images, svgs } from '@/assets';
import { Card } from '@/components/Card';

export const Experiences = () => {
  return (
    <div className="h-screen flex flex-wrap items-center justify-center gap-6 max-md:overflow-x-auto max-md:flex-col">
      <Card
        image={svgs.Ada}
        title="Desenvolvedor"
        subTitle="Ada Software House"
        dateTime={{
          startDate: '01/06/2021',
          endDate: 'xx/xx/xxxx',
        }}
        summary={['Front-end', 'Back-end', '+5 Projetos profissionais']}
      />
      <Card
        image={images.Satc}
        title="Professor"
        subTitle="Satc - programando a vida"
        dateTime={{
          startDate: '01/04/2021',
          endDate: '01/10/2021',
        }}
        summary={['algoritmo', 'Python', 'Visual G']}
      />
    </div>
  );
};
