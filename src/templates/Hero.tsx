import { BackgroundCircles, RedirectButton } from '@/components';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export const Hero = () => {
  return (
    <div>
      <BackgroundCircles />
      <div className=" absolute flex flex-col h-screen justify-center gap-2 max-md:pb-96">
        <RedirectButton
          Icon={FaLinkedinIn}
          label="Carlos Pasquali"
          href="https://www.linkedin.com/in/carlos-pasquali-48aa49207/?originalSubdomain=br"
        />
        <RedirectButton
          Icon={FaGithub}
          label="carlospasqualidev"
          href="https://github.com/carlospasqualidev"
        />
        <RedirectButton
          Icon={FaInstagram}
          label="@carlos.pasquali.dev"
          href="https://www.instagram.com/carlos.pasquali.dev/"
        />
      </div>
    </div>
  );
};
