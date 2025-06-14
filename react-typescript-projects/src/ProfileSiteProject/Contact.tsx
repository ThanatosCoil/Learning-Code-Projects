import { FaGithub, FaVk, FaWhatsapp, FaYoutube } from "react-icons/fa";

const links = [
  {
    href: "https://vk.com",
    label: "Vk",
    icon: <FaVk className="h-6 w-6 text-blue-500" />,
  },
  {
    href: "https://www.youtube.com/",
    label: "YouTube",
    icon: <FaYoutube className="h-6 w-6 text-red-600" />,
  },
  {
    href: "https://github.com/ThanatosCoil",
    label: "GitHub",
    icon: <FaGithub className="h-6 w-6 text-gray-900" />,
  },
  {
    href: "https://www.whatsapp.com/",
    label: "Whatsapp",
    icon: <FaWhatsapp className="h-6 w-6 text-pink-500" />,
  },
];

const Contact = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Me</h2>
      <div className="flex items-center ">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-[2rem]"
          >
            {link.icon}
            <span className="text-lg">{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};
export default Contact;
