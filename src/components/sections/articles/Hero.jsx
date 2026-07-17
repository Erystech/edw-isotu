import Container from '../../layout/Container';
import Label from '../../typography/Label';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';

/**
 * ArticlesHero
 * Simple text hero for the /articles list page. No image — this page's
 * job is to get people scanning cards quickly, not to hold their
 * attention on a hero visual.
 */
export default function ArticlesHero() {
  return (
    <Container className="pt-36 lg:pt-44">
      <div className="max-w-2xl">
        <Label as="p">Articles</Label>
        <Heading as="h1" size="2xl" className="mt-3">
          Ideas on leadership, sustainability, and momentum
        </Heading>
        <Paragraph size="lg" tone="muted" className="mt-6">
          Short, specific writing drawn from two decades in public health,
          environmental sustainability, and executive mentorship.
        </Paragraph>
      </div>
    </Container>
  );
}