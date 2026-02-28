import { Linkedin, Mail, Twitter } from 'lucide-react'

const ContactIcons = () => {
  return (
    <ul className="flex gap-6 text-slate-600 dark:text-slate-300">
      <li>
        <a
          href="https://www.linkedin.com/in/luis-de-freites-6a5888181/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary transition-colors"
        >
          <Linkedin className="w-8 h-8" />
        </a>
      </li>
      <li>
        <a href="mailto:luisdefreites120@gmail.com" className="hover:text-primary transition-colors">
          <Mail className="w-8 h-8" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/luismadf" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
          <Twitter className="w-8 h-8" />
        </a>
      </li>
    </ul>
  );
};

export default ContactIcons;
