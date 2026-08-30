import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
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
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses & Skills',
    description: 'A list of technologies and skills I use to build intelligent systems.',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of the technologies, languages, and frameworks I use to build scalable AI systems, secure infrastructure, and performant software."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>AI / ML & Data</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>Machine Learning & Data Science</strong> for structured data experimentation and building intelligent models.
                  </ListItem>
                  <ListItem>
                    <strong>Generative AI & LLMs</strong> for powering AI-driven analysis and automated insights.
                  </ListItem>
                  <ListItem>
                    <strong>Libraries:</strong> Pandas, NumPy, Scikit-learn for comprehensive data preprocessing, evaluation, and inference workflows.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Cloud & DevOps</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>AWS & Cloud Computing</strong> for architecting highly available platform infrastructure.
                  </ListItem>
                  <ListItem>
                    <strong>DevSecOps</strong> practices to integrate robust security scanning and vulnerability analysis into the deployment pipeline.
                  </ListItem>
                  <ListItem>
                    <strong>Docker, Linux, Git, & GitHub</strong> for containerization, environment orchestration, and version control.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Software Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <strong>Languages:</strong> Python, C++, Java, JavaScript, TypeScript, and SQL.
                  </ListItem>
                  <ListItem>
                    <strong>Web Technologies:</strong> React, Node.js, REST APIs, and FastAPI for developing responsive frontends and performant backend services.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
