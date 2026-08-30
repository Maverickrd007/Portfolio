import { Button } from '~/components/button';
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
import { Suspense, lazy } from 'react';
import { media } from '~/utils/style';
import { FloatingPathsBackground } from '~/components/floating-paths';
import styles from './codelens.module.css';

const Armor = lazy(() => import('./armor').then(module => ({ default: module.Armor })));

const title = 'CodeLens';
const description =
  'An AI-powered codebase analysis platform for understanding large software repositories through automated code parsing and structural analysis.';
const roles = ['Python', 'TypeScript', 'React', 'AST Parsing', 'LLMs'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const CodeLens = () => {
  return (
    <>
      <ProjectContainer className="vk">
        <FloatingPathsBackground position={1} />
        <ProjectHeader
          title={title}
          description={description}
          url="https://codelens-sigma.vercel.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Architecture Analysis</ProjectSectionHeading>
              <ProjectSectionText>
                CodeLens provides deep repository architecture analysis, mapping out complex inter-file dependencies and identifying crucial structural patterns across the entire codebase.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>AST-based parsing</ProjectSectionHeading>
              <ProjectSectionText>
                By breaking down code into Abstract Syntax Trees, CodeLens goes beyond simple text search, truly understanding the semantics, functions, and logic flows embedded within large codebases.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none">
          <ProjectSectionContent>
            <Suspense fallback={null}>
              <Armor />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <ProjectSectionHeading>AI-Driven Intelligence</ProjectSectionHeading>
              <ProjectSectionText>
                Through the power of LLMs, CodeLens translates technical structures into human-readable insights, allowing teams to onboard faster and maintain complex repositories with ease.
              </ProjectSectionText>
              <div className={styles.buttonContainer}>
                <Button
                  secondary
                  iconHoverShift
                  className={styles.linkButton}
                  icon="github"
                  href="https://github.com/Maverickrd007"
                >
                  View on GitHub
                </Button>
                <Button
                  secondary
                  iconHoverShift
                  className={styles.linkButton}
                  icon="chevron-right"
                  href="https://codelens-sigma.vercel.app/"
                >
                  View webservice
                </Button>
              </div>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
