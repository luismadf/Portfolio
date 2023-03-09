import { cvInfo } from "utils";

const CV = () => {
  const {
    name,
    lastName,
    position,
    description,
    image,
    social,
    experience,
    skills,
    education,
  } = cvInfo;

  return (
    <div className="curriculum">
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 py-12">
        <div className="container mx-auto">
          <div className="mb-6">
            <h2 className="uppercase font-bold text-xl mb-1">{name}</h2>
            <h2 className="uppercase font-bold text-3xl mb-1">{lastName}</h2>
            <h2 className="uppercase font-bold text-lg">{position}</h2>
          </div>
          <div>
            <p className="text-sm mb-6">{description}</p>
            <img src={image} alt="cv picture" className="w-4/5 mx-auto" />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-12">
        <h2 className="uppercase font-medium mb-6">Social media</h2>
        {social.map(({ name }) => (
          <p>{name}</p>
        ))}
      </div>

      <div className="container mx-auto">
        <hr />
      </div>
      <div className="container mx-auto py-12">
        <h2 className="uppercase font-medium mb-6">Work Experience</h2>
        {experience.map(({ companyName, position, time }) => (
          <div className="bg-gray-100/60 mb-4 p-4">
            <p className="text-xs uppercase text-gray-400">{time}</p>
            <p className="font-medium my-2">{companyName}</p>
            <p className="text-sm">{position}</p>
          </div>
        ))}
      </div>
      <div className="container mx-auto pb-12">
        <h2 className="uppercase font-medium mb-6">Skills</h2>
        <ul className="mb-12">
          {skills.map((skill: string) => (
            <li>{skill}</li>
          ))}
        </ul>
        <h2 className="uppercase font-medium mb-6">Education</h2>
        <ul>
          {education.map(({ title, description }) => (
            <li>
              <p>{title}</p>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CV;
