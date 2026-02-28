import { useTranslation } from "react-i18next";
import { cvInfo } from "utils";
import { SEO, PageTransition } from "components";
import { Linkedin, Mail, Github, ExternalLink } from "lucide-react";

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin className="w-5 h-5" />,
  Email: <Mail className="w-5 h-5" />,
  GitHub: <Github className="w-5 h-5" />,
};

const CV = () => {
  const { t } = useTranslation();
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
    languages,
  } = cvInfo;

  return (
    <PageTransition>
      <div className="curriculum">
        <SEO title={`CV - ${name} ${lastName}`} description={description} />

        {/* Header */}
        <div className="bg-linear-to-r from-blue-100 to-indigo-100 dark:from-slate-800 dark:to-slate-900 py-12 transition-colors duration-300">
          <div className="container mx-auto">
            <div className="mb-6">
              <h2 className="uppercase font-bold text-xl mb-1">{name}</h2>
              <h2 className="uppercase font-bold text-3xl mb-1">{lastName}</h2>
              <h2 className="uppercase font-bold text-lg">{position}</h2>
            </div>
            <div>
              <p className="text-sm mb-6">{description}</p>
              <img src={image} alt={`${name} ${lastName}`} className="w-4/5 mx-auto" />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="container mx-auto py-12">
          <h2 className="uppercase font-medium mb-6">{t('cv.socialMedia')}</h2>
          <div className="flex flex-wrap gap-4">
            {social.map(({ name, url }) => (
              <a
                key={`social-${name}`}
                href={url}
                target={url.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                {socialIcons[name] || <ExternalLink className="w-5 h-5" />}
                <span className="font-medium">{name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="container mx-auto">
          <hr className="border-slate-200 dark:border-slate-700" />
        </div>

        {/* Experience - Timeline */}
        <div className="container mx-auto py-12">
          <h2 className="uppercase font-medium mb-6">{t('cv.workExperience')}</h2>
          <div className="relative border-l-2 border-primary/30 pl-6 ml-2">
            {experience.map(({ companyName, position, time, description }) => (
              <div key={`exp-${companyName}`} className="relative mb-8 last:mb-0">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-white dark:border-slate-950" />
                <div className="bg-slate-50 dark:bg-slate-800/60 rounded-lg p-4 transition-colors duration-300">
                  <p className="text-xs uppercase text-slate-400 dark:text-slate-500">{time}</p>
                  <p className="font-medium my-1">{companyName}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{position}</p>
                  {description && (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">{description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto">
          <hr className="border-slate-200 dark:border-slate-700" />
        </div>

        {/* Skills - Categorized badges */}
        <div className="container mx-auto py-12">
          <h2 className="uppercase font-medium mb-6">{t('cv.skills')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map(({ category, items }) => (
              <div key={`skill-cat-${category}`}>
                <h3 className="text-sm font-semibold uppercase text-slate-500 dark:text-slate-400 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={`skill-${skill}`}
                      className="px-3 py-1 text-sm rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto">
          <hr className="border-slate-200 dark:border-slate-700" />
        </div>

        {/* Education */}
        <div className="container mx-auto py-12">
          <h2 className="uppercase font-medium mb-6">{t('cv.education')}</h2>
          <div className="space-y-4">
            {education.map(({ title, description, year }) => (
              <div key={`edu-${title}`} className="bg-slate-50 dark:bg-slate-800/60 rounded-lg p-4 transition-colors duration-300">
                {year && <p className="text-xs uppercase text-slate-400 dark:text-slate-500">{year}</p>}
                <p className="font-medium my-1">{title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto">
          <hr className="border-slate-200 dark:border-slate-700" />
        </div>

        {/* Languages */}
        <div className="container mx-auto py-12">
          <h2 className="uppercase font-medium mb-6">{t('cv.languages')}</h2>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <span
                key={`lang-${lang}`}
                className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 font-medium"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CV;
