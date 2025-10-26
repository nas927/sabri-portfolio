import Link from "next/link";

import {
  RiLinkedinBoxFill,
  RiFilePdf2Line
} from "react-icons/ri";

export const socialData = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/sabri-belafi-0b5868218/",
    Icon: RiLinkedinBoxFill,
  },
  {
    name: "CV",
    link: "/CV.pdf",
    Icon: RiFilePdf2Line,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          <social.Icon aria-hidden size={50} className="hover:fill-[#4b3792] hover:scale-"/>
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
