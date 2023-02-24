import { LinkProps } from 'next/link';

interface IRedirectButton extends LinkProps {
  href: string;
  label?: string;
  Icon: any;
}

export const RedirectButton = ({ href, Icon, label }: IRedirectButton) => {
  return (
    <a href={href} target={'_blank'} rel="noreferrer">
      <div className="flex items-center opacity-75  hover:scale-110 hover:opacity-100 ease-in transition-all duration-200 text-white">
        {<Icon size={32} />}
        {label && <p className="ml-2 font-bold">{label}</p>}
      </div>
    </a>
  );
};
