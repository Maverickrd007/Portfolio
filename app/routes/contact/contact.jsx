import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      "Send me a message if you're interested in discussing a project or if you just want to say hi",
  });
};

export const Contact = () => {
  const initDelay = tokens.base.durationS;

  return (
    <Section className={styles.contact}>
      <Transition unmount in={true} timeout={1600}>
        {({ status, nodeRef }) => (
          <div
            className={styles.form}
            ref={nodeRef}
          >
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.5)}
            >
              Interested in collaborating, have a question, or just want to chat about cloud architecture and security? Feel free to reach out directly via email!
            </Text>
            <Button
              className={styles.button}
              data-status={status}
              style={getDelay(tokens.base.durationM, initDelay)}
              icon="send"
              href="mailto:raghavduggal06@gmail.com?subject=Portfolio%20Inquiry"
            >
              Email Me
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
