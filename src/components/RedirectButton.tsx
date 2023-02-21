import { LinkProps } from 'next/link';

interface IRedirectButton extends LinkProps {
  href: string;
  Icon: any;
}

export const RedirectButton = ({ href, Icon, ...props }: IRedirectButton) => {
  return (
    <a href={href} target={'_blank'} rel="noreferrer">
      <div className="flex justify-center items-center p-1 opacity-75  hover:scale-125 hover:opacity-100 ease-in transition-all duration-200 text-white">
        {<Icon size={32} />}
      </div>
    </a>
  );
};
