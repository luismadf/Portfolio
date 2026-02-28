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
        <div className="bg-surface dark:bg-dark-bg py-16 transition-colors duration-300 border-b border-primary/20">
          <div className="container mx-auto">
            <div className="mb-8">
              <h2 className="uppercase font-bold text-xl mb-1 text-primary">{name}</h2>
              <h2 className="uppercase font-black text-4xl mb-2 tracking-tight">{lastName}</h2>
              <h2 className="uppercase font-bold text-lg text-muted dark:text-gray-400">{position}</h2>
            </div>
            <div>
              <p className="text-md mb-8 text-muted dark:text-gray-300 max-w-2xl leading-relaxed">{description}</p>
              <img src={image} alt={`${name} ${lastName}`} className="w-4/5 mx-auto rounded-xl shadow-lg shadow-primary/5" />
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="container mx-auto py-12">
          <h2 className="uppercase font-semibold tracking-wider text-sm text-primary mb-6">{t('cv.socialMedia')}</h2>
          <div className="flex flex-wrap gap-4">
            {social.map(({ name, url }) => (
              <a
                key={`social-${name}`}
                href={url}
                target={url.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-200 bg-surface/50 dark:bg-dark-surface dark:border-slate-800 hover:border-primary dark:hover:border-primary transition-all duration-300 group"
              >
                <div className="text-muted group-hover:text-primary transition-colors">
                  {socialIcons[name] || <ExternalLink className="w-5 h-5" />}
                </div>
                <span className="font-semibold text-sm tracking-wide group-hover:text-primary transition-colors">{name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="container mx-auto">
          <hr className="border-slate-200 dark:border-slate-700" />
        </div>

        {/* Experience - Timeline */}
        <div className="container mx-auto py-12">
          <h2 className="uppercase font-semibold tracking-wider text-sm text-primary mb-8">{t('cv.workExperience')}</h2>
          <div className="relative border-l-2 border-primary/20 pl-8 ml-3">
            {experience.map(({ companyName, position, time, description }) => (
              <div key={`exp-${companyName}`} className="relative mb-12 last:mb-0">
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-surface dark:border-dark-bg" />
                <div className="group">
                  <p className="text-xs font-bold tracking-widest uppercase text-muted dark:text-slate-500 mb-2">{time}</p>
                  <p className="font-bold text-xl group-hover:text-primary transition-colors mb-1">{companyName}</p>
                  <p className="text-md font-medium text-slate-600 dark:text-slate-300 mb-3">{position}</p>
                  {description && (
                    <p className="text-sm text-muted dark:text-gray-400 leading-relaxed max-w-3xl">{description}</p>
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
          <h2 className="uppercase font-semibold tracking-wider text-sm text-primary mb-8">{t('cv.skills')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {skills.map(({ category, items }) => (
              <div key={`skill-cat-${category}`}>
                <h3 className="text-sm font-bold tracking-widest uppercase text-ink dark:text-white mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={`skill-${skill}`}
                      className="px-3 py-1.5 text-xs font-semibold tracking-wider rounded border border-slate-200 bg-surface/80 text-muted dark:border-slate-800 dark:bg-dark-surface dark:text-gray-300"
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
          <h2 className="uppercase font-semibold tracking-wider text-sm text-primary mb-8">{t('cv.education')}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map(({ title, description, year }) => (
              <div key={`edu-${title}`} className="bg-surface border border-slate-200 dark:bg-dark-surface dark:border-slate-800 rounded-md p-6 transition-colors duration-300 hover:border-primary/50 dark:hover:border-primary/50">
                {year && <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">{year}</p>}
                <p className="font-bold text-lg mb-2">{title}</p>
                <p className="text-sm text-muted dark:text-gray-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto">
          <hr className="border-slate-200 dark:border-slate-700" />
        </div>

        {/* Languages */}
        <div className="container mx-auto py-12">
          <h2 className="uppercase font-semibold tracking-wider text-sm text-primary mb-8">{t('cv.languages')}</h2>
          <div className="flex flex-wrap gap-4">
            {languages.map((lang) => (
              <span
                key={`lang-${lang}`}
                className="px-5 py-2 rounded-md border border-slate-200 bg-surface/50 dark:bg-dark-surface dark:border-slate-800 font-semibold text-sm tracking-wide"
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
