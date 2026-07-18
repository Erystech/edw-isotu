import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import Heading from '../../typography/Heading';
import Paragraph from '../../typography/Paragraph';
import Label from '../../typography/Label';
import { FormField, Input, Textarea, Select } from '../../forms';
import Button from '../../ui/Button';

const INQUIRY_TYPES = [
  { value: 'mentorship-60min', label: '60 Minutes One-on-One Mentorship Session' },
  { value: 'mentorship-followup', label: '1hr One-on-One Session with 1 Week Follow-up' },
  {
    value: 'enterprise-coaching',
    label: '2 Weeks Enterprise Leadership Coaching + 6mo Inner Cycle Membership',
  },
  {
    value: 'phe-coaching',
    label: '2 Weeks Public Health & Environment Leadership Coaching + 6mo Inner Cycle Membership',
  },
  { value: 'lifetime-coaching', label: 'Lifetime Coaching + Inner Cycle Membership' },
  { value: 'masterclass', label: 'Executive Masterclass' },
  { value: 'keynote', label: 'Event Keynote Speaking (Excl. Ticket & Accommodation)' },
  { value: 'project-guidance', label: 'Expert Guidance & Program/Project Implementation' },
];

/**
 * ContactForm
 * UI-only inquiry form. No backend/email provider is wired up yet —
 * replace handleSubmit with a real integration before launch.
 */
export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    organization: '',
    country: '',
    inquiryType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.email.trim()) nextErrors.email = 'Please enter your email.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: wire up to a real inquiry/email endpoint.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-premium flex flex-col items-center gap-4 p-10 text-center lg:p-14">
        <CheckCircle2 className="text-[var(--color-accent-light)]" size={32} aria-hidden="true" />
        <Heading as="h3" size="md">
          Thanks — that's on its way
        </Heading>
        <Paragraph tone="muted" size="md" className="max-w-md">
          You'll hear back within one business day. In the meantime, feel free
          to explore Edwin's speaking topics or recent articles.
        </Paragraph>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Full name" required error={errors.name}>
          <Input
            type="text"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={update('name')}
          />
        </FormField>

        <FormField label="Email" required error={errors.email}>
          <Input
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={update('email')}
          />
        </FormField>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Organization" hint="Optional">
          <Input
            type="text"
            name="organization"
            autoComplete="organization"
            value={form.organization}
            onChange={update('organization')}
          />
        </FormField>

        <FormField label="Country">
          <Input
            type="text"
            name="country"
            autoComplete="country-name"
            value={form.country}
            onChange={update('country')}
          />
        </FormField>
      </div>

      <FormField label="Would you like to book Dr. Edwin Isotu for the following?">
        <Select name="inquiryType" value={form.inquiryType} onChange={update('inquiryType')}>
          <option value="">-- select --</option>
          {INQUIRY_TYPES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField label="Your message" hint="Optional">
        <Textarea
          name="message"
          rows={6}
          placeholder="Tell us about your event, dates, and audience."
          value={form.message}
          onChange={update('message')}
        />
      </FormField>

      <Label as="p" className="normal-case tracking-normal text-[var(--color-text-muted)]">
        By submitting this message you consent to receiving emails from
        Edwin Isotu.
      </Label>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Label as="p" className="normal-case tracking-normal text-[var(--color-text-muted)]">
          Typical response time: one business day.
        </Label>
        <Button type="submit">
          Send Inquiry
          <Send size={16} aria-hidden="true" />
        </Button>
      </div>
    </form>
  );
}