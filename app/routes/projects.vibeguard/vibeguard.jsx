import { CelestialOrrery } from '~/components/celestial-orrery';
import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import { Footer } from '~/components/footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './vibeguard.module.css';

const title = 'VibeGuard';
const description = 'An enterprise-oriented DevSecOps orchestration platform that centralizes security scanning, vulnerability analysis, and AI-assisted remediation.';
const roles = [
  'Python / TypeScript',
  'React / Node.js',
  'Docker',
  'Kubernetes'
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

const Globe = () => {
  return (
    <div className={styles.globeContainer} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className={styles.globeSphere}>
        <div className={styles.star} style={{ left: '-20px', animation: 'twinkling 3s infinite' }} />
        <div className={styles.star} style={{ left: '-40px', top: '30px', animation: 'twinkling-slow 2s infinite' }} />
        <div className={styles.star} style={{ left: '350px', top: '90px', animation: 'twinkling-long 4s infinite' }} />
        <div className={styles.star} style={{ left: '200px', top: '290px', animation: 'twinkling 3s infinite' }} />
        <div className={styles.star} style={{ left: '50px', top: '270px', animation: 'twinkling-fast 1.5s infinite' }} />
        <div className={styles.star} style={{ left: '250px', top: '-50px', animation: 'twinkling-long 4s infinite' }} />
        <div className={styles.star} style={{ left: '290px', top: '60px', animation: 'twinkling-slow 2s infinite' }} />
      </div>
    </div>
  );
};



export const VibeGuard = () => {
  return (
    <>
      <CelestialOrrery />
      <ProjectContainer className="spr">
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Maverickrd007"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The Security Tooling Problem</ProjectSectionHeading>
              <ProjectSectionText>
                Modern infrastructure spans across clouds, clusters, and containers. VibeGuard unifies fragmented security tools into one cohesive pipeline, ensuring a frictionless DevSecOps experience.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Global Detection</ProjectSectionHeading>
              <ProjectSectionText>
                Identifying and resolving vulnerabilities before they hit production. VibeGuard ensures seamless and secure deployments worldwide with continuous scanning and AI remediation.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

