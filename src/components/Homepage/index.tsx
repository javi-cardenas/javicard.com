import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  demoUrl,
  repoUrl,
}) => {
  return (
    <div className={styles.projectCard}>
      {imageUrl && (
        <div className={styles.projectImageContainer}>
          <img src={imageUrl} alt={title} className={styles.projectImage} />
        </div>
      )}
      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>
        <p className={styles.projectDescription}>{description}</p>
        <div className={styles.projectTags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.projectTag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.projectLinks}>
          {demoUrl && (
            <Link to={demoUrl} className={styles.projectLink}>
              Live Demo
            </Link>
          )}
          {repoUrl && (
            <Link to={repoUrl} className={styles.projectLink}>
              Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

interface DocCardProps {
  title: string;
  description: string;
  icon: string;
  url: string;
}

const DocCard: React.FC<DocCardProps> = ({ title, description, icon, url }) => {
  return (
    <Link to={url} className={styles.docCard}>
      <div className={styles.docIcon}>{icon}</div>
      <h3 className={styles.docTitle}>{title}</h3>
      <p className={styles.docDescription}>{description}</p>
    </Link>
  );
};

interface HeroSectionProps {
  name: string;
  tagline: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, tagline, subtitle }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroBackgroundPattern}></div>
      </div>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroName}>{name}</span>
          </h1>
          <h2 className={styles.heroTagline}>{tagline}</h2>
          {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
          
          {/* <div className={styles.heroButtons}>
            <Link to="/projects" className={styles.heroButtonPrimary}>
              View My Work
            </Link>
            <Link to="/docs" className={styles.heroButtonSecondary}>
              Explore Docs
            </Link>
          </div> */}
{/*           
          <div className={styles.heroSocial}>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.heroSocialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className={styles.heroSocialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.heroSocialLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
          </div> */}
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImageContainer}>
            <div className={styles.heroImageBg}></div>
            <div className={styles.heroImagePlaceholder}>
              {/* You can replace this with an actual image */}
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  
  // Sample projects data - replace with your own
  const projects: ProjectCardProps[] = [
    {
      title: 'React Component Library',
      description: 'A collection of reusable React components built with TypeScript and styled with CSS modules.',
      tags: ['React', 'TypeScript', 'CSS Modules'],
      repoUrl: 'https://github.com/yourusername/react-component-library',
      demoUrl: 'https://components.yourdomain.com',
    },
    {
      title: 'Personal Task Manager',
      description: 'A full-stack task management application with React frontend and Node.js backend.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      repoUrl: 'https://github.com/yourusername/task-manager',
      demoUrl: 'https://tasks.yourdomain.com',
    },
    {
      title: 'Markdown Note Taking App',
      description: 'A minimalist note-taking application with Markdown support and local storage.',
      tags: ['React', 'TypeScript', 'LocalStorage', 'Markdown'],
      repoUrl: 'https://github.com/yourusername/markdown-notes',
    },
  ];

  // Sample documentation categories - replace with your own
  const docCategories: DocCardProps[] = [
    {
      title: 'React Patterns',
      description: 'Common React patterns and best practices I use in my projects.',
      icon: '⚛️',
      url: '/docs/react-patterns',
    },
    {
      title: 'TypeScript Tips',
      description: 'Useful TypeScript tips, tricks, and configuration settings.',
      icon: '🔷',
      url: '/docs/typescript-tips',
    },
    {
      title: 'Dev Environment Setup',
      description: 'My development environment configuration and tools.',
      icon: '🛠️',
      url: '/docs/dev-environment',
    },
    {
      title: 'Deployment Strategies',
      description: 'Various deployment strategies and CI/CD workflows I use.',
      icon: '🚀',
      url: '/docs/deployment',
    },
  ];

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main className={styles.main}>
        <HeroSection 
          name="Javi Cardenas" 
          tagline="Software Engineer" 
        />

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <div className={styles.projectsGrid}>
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
            <div className={styles.viewAllContainer}>
              <Link to="/projects" className={styles.viewAllLink}>
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section + ' ' + styles.docSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Technical Documentation</h2>
            <p className={styles.sectionDescription}>
              Explore my collection of guides, tutorials, and technical notes.
            </p>
            <div className={styles.docsGrid}>
              {docCategories.map((doc) => (
                <DocCard key={doc.title} {...doc} />
              ))}
            </div>
            <div className={styles.viewAllContainer}>
              <Link to="/docs" className={styles.viewAllLink}>
                View All Topics
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <p className={styles.contactText}>
              Have a question or want to work together? Feel free to reach out!
            </p>
            <div className={styles.contactLinks}>
              <a href="mailto:javicardenas@pm.me" className={styles.contactLink}>
                Email
              </a>
              <a href="https://github.com/javi-cardenas" className={styles.contactLink}>
                GitHub
              </a>
              <a href="https://linkedin.com/in/javicardenas" className={styles.contactLink}>
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;