import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { AetherRibbonMesh } from '~/components/aether-ribbon-mesh';
import styles from './astraml.module.css';

const title = 'AstraML';
const description =
  'A machine learning pipeline orchestration tool designed to streamline model training, deployment, and monitoring across distributed systems.';
const roles = ['Python', 'TensorFlow', 'Docker', 'Kubernetes'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const AstraML = () => {
  return (
    <>
      <ProjectContainer className="slice">
        <AetherRibbonMesh />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Maverickrd007"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>End-to-End Workflows</ProjectSectionHeading>
              <ProjectSectionText>
                AstraML provides reusable ML workflows, offering a cohesive experience from data preprocessing all the way to final model inference.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center>
              <ProjectSectionHeading>Structured Experimentation</ProjectSectionHeading>
              <ProjectSectionText>
                By automating structured-data experimentation, AstraML accelerates the model training and evaluation process, providing researchers with reliable, reproducible environments.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
