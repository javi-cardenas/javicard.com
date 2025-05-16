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
}

const HeroSection: React.FC<HeroSectionProps> = ({ name, tagline }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          <span className={styles.heroName}>{name}</span>
        </h1>
        <p className={styles.heroTagline}>{tagline}</p>
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
                View All Docs
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