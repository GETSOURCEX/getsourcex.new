export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'date' | 'number';
  required: boolean;
  options?: string[];
  placeholder?: string;
}

export interface FormConfig {
  id: string;
  title: string;
  subtitle: string;
  fields: FormField[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
  trackingEvent: string;
}

export const CTA_FORMS: Record<string, FormConfig> = {
  roi_snapshot: {
    id: 'roi_snapshot',
    title: 'Get Your Free ROI Snapshot',
    subtitle: 'We will contact you within 24 hours to schedule your 15-minute ROI call and share your 48-hour projection.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com' },
      { name: 'clinicName', label: 'Clinic Name', type: 'text', required: true, placeholder: 'Your clinic name' },
      { name: 'phone', label: 'Phone (optional)', type: 'tel', required: false, placeholder: '(437) 123-4567' },
      {
        name: 'preferredTime',
        label: 'Preferred Time Window (optional)',
        type: 'select',
        required: false,
        options: ['Morning', 'Afternoon', 'Evening']
      },
      { name: 'notes', label: 'Notes (optional)', type: 'textarea', required: false, placeholder: 'Any additional information' }
    ],
    submitLabel: 'Submit Securely',
    successTitle: 'ROI Snapshot Request Confirmed',
    successBody: 'We will reach out within 24 hours to schedule your 15-minute call and send your 48-hour ROI projection.',
    trackingEvent: 'lead_roi_snapshot'
  },

  free_audit: {
    id: 'free_audit',
    title: 'Book Your Free AI Audit',
    subtitle: 'Tell us about your clinic so we can prepare your audit and ROI plan.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com' },
      { name: 'clinicName', label: 'Clinic Name', type: 'text', required: true, placeholder: 'Your clinic name' },
      { name: 'phone', label: 'Phone (optional)', type: 'tel', required: false, placeholder: '(437) 123-4567' },
      { name: 'city', label: 'City (optional)', type: 'text', required: false, placeholder: 'Toronto' },
      { name: 'currentSystem', label: 'Current EHR or CRM (optional)', type: 'text', required: false, placeholder: 'Jane, Cliniko, etc.' },
      {
        name: 'biggestBottleneck',
        label: 'Biggest Bottleneck',
        type: 'select',
        required: false,
        options: ['Missed Calls', 'No-Shows', 'Slow Replies', 'Other']
      }
    ],
    submitLabel: 'Book My Audit',
    successTitle: 'Audit Booked',
    successBody: 'Thanks. We will contact you within 24 hours to confirm your audit and share next steps.',
    trackingEvent: 'lead_free_audit'
  },

  leak_report: {
    id: 'leak_report',
    title: 'Get Your Clinic Revenue Leak Report',
    subtitle: 'We will analyze your inputs and email your report within 24 hours.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com' },
      { name: 'clinicName', label: 'Clinic Name', type: 'text', required: true, placeholder: 'Your clinic name' },
      {
        name: 'missedCalls',
        label: 'Estimated Missed Calls Per Month',
        type: 'select',
        required: false,
        options: ['<20', '20-50', '50-100', '100+']
      },
      { name: 'appointmentValue', label: 'Average Appointment Value (optional)', type: 'number', required: false, placeholder: '150' },
      { name: 'notes', label: 'Notes (optional)', type: 'textarea', required: false, placeholder: 'Any additional information' }
    ],
    submitLabel: 'Send My Report',
    successTitle: 'Report Request Received',
    successBody: 'Your custom Leak Report will arrive within 24 hours. We will follow up if any clarification is needed.',
    trackingEvent: 'lead_leak_report'
  },

  get_started: {
    id: 'get_started',
    title: 'Start My Source X Setup',
    subtitle: 'Share a few details and we will map your 7-day installation plan.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com' },
      { name: 'clinicName', label: 'Clinic Name', type: 'text', required: true, placeholder: 'Your clinic name' },
      { name: 'phone', label: 'Phone (optional)', type: 'tel', required: false, placeholder: '(437) 123-4567' },
      { name: 'startDate', label: 'Desired Start Date (optional)', type: 'date', required: false },
      {
        name: 'priority',
        label: 'Priority',
        type: 'select',
        required: false,
        options: ['Phone & Scheduling', 'Reactivation', 'Website to Consult', 'Not Sure']
      }
    ],
    submitLabel: 'Start My Setup',
    successTitle: 'Setup Request Confirmed',
    successBody: 'We will contact you within 24 hours to align on your 7-day installation plan.',
    trackingEvent: 'lead_get_started'
  },

  book_demo: {
    id: 'book_demo',
    title: 'Book a 15-Minute Demo',
    subtitle: 'See how Source X handles calls, reminders, and reactivation for clinics like yours.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com' },
      { name: 'clinicName', label: 'Clinic Name', type: 'text', required: true, placeholder: 'Your clinic name' },
      { name: 'phone', label: 'Phone (optional)', type: 'tel', required: false, placeholder: '(437) 123-4567' },
      { name: 'bestTime', label: 'Best Time (optional)', type: 'text', required: false, placeholder: 'Tuesday afternoon' },
      {
        name: 'demoFocus',
        label: 'Demo Focus',
        type: 'select',
        required: false,
        options: ['Calls and Scheduling', 'No-Show Recovery', 'Website to Consult', 'Full Overview']
      }
    ],
    submitLabel: 'Book My Demo',
    successTitle: 'Demo Scheduled Request',
    successBody: 'We will reach out to confirm your demo time and send a calendar invite.',
    trackingEvent: 'lead_demo'
  },

  contact: {
    id: 'contact',
    title: 'Contact Source X',
    subtitle: 'We usually respond within one business day.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your full name' },
      { name: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your@email.com' },
      { name: 'subject', label: 'Subject (optional)', type: 'text', required: false, placeholder: 'What is this about?' },
      { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'Tell us how we can help' }
    ],
    submitLabel: 'Send Message',
    successTitle: 'Message Sent',
    successBody: 'Thanks for reaching out. We will reply within one business day.',
    trackingEvent: 'contact_message'
  }
};
