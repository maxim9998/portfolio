import { socialLinks } from "./socialLinks";

const Links = () => {
  return (
    <div className="flex items-center justify-between w-full mt-4">
      {socialLinks.map((link) => {
        const Icon = link.socialIcon;
        return (
          <a href={link.link} key={link.link} target="_blank">
            <Icon className="text-3xl text-green" />
          </a>
        );
      })}
    </div>
  );
};

export default Links;
