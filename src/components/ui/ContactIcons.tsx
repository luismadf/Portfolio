const ContactIcons = () => {
  return (
    <ul className="flex gap-6 text-4xl">
      <li>
        <a
          href="https://www.linkedin.com/in/luis-de-freites-6a5888181/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href="mailto:luisdefreites120@gmail.com">
          <i className="fas fa-envelope-square"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/luismadf" target="_blank" rel="noreferrer">
          <i className="fab fa-twitter-square"></i>
        </a>
      </li>
    </ul>
  );
};

export default ContactIcons;
