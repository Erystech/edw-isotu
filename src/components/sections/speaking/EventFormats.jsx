import ServiceCard from '../../cards/ServiceCard';

/**
 * EventFormats
 * Grid of bookable formats. Thin wrapper around ServiceCard so the
 * page file stays declarative.
 *
 * @param {{ icon: Function, title: string, description: string }[]} formats
 */
export default function EventFormats({ formats = [] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {formats.map((format) => (
        <ServiceCard key={format.title} {...format} />
      ))}
    </div>
  );
}