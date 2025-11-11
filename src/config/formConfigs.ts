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
  successEmoji?: string;
  successPrimaryButton?: string;
  successPrimaryLink?: string;
  successSecondaryButton?: string;
  successSecondaryAction?: string;
  successFooter?: string;
  showConfetti?: boolean;
  autoCloseDelay?: number;
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
    successTitle: 'ROI Snapshot Confirmed',
    successEmoji: '✅',
    successBody: "You're all set. Your 48-hour ROI projection is being prepared.\nSchedule your 15-minute ROI Snapshot Call below to review your clinic's growth plan.",
    successPrimaryButton: '→ Schedule My ROI Call',
    successPrimaryLink: 'https://zeeg.me/vatsalsourcex/15-minute-dollar10k-clinic-fix-roi-snapshot-call',
    successSecondaryButton: 'Return to Home',
    successFooter: 'Spots for this week fill fast — claim your call now.',
    showConfetti: true,
    autoCloseDelay: 0,
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
    successTitle: 'Your Free AI Audit is Locked In',
    successEmoji: '🚀',
    successBody: "We'll reach out within 24 hours to confirm your audit and send your ROI readiness checklist.\nYou'll receive a confirmation email shortly.",
    successPrimaryButton: 'Got It',
    successFooter: 'Your information is protected under PHIPA and PIPEDA standards.',
    autoCloseDelay: 10000,
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
    successTitle: 'Your Leak Report Is On Its Way',
    successEmoji: '💡',
    successBody: "We're analyzing your data and will email your report within 24 hours.\nYou'll also receive a short breakdown of how to fix your biggest revenue leaks.",
    successPrimaryButton: 'Awesome, Thanks',
    successSecondaryButton: 'Get My ROI Snapshot Too',
    successSecondaryAction: 'roi_snapshot',
    autoCloseDelay: 10000,
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
    successEmoji: '⚙️',
    successBody: "We'll contact you within 24 hours to align on your 7-day installation plan.\nEverything's about to get a lot simpler.",
    successPrimaryButton: 'Close',
    autoCloseDelay: 10000,
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
    successTitle: 'Demo Request Confirmed',
    successEmoji: '👏',
    successBody: "Thanks for booking your 15-minute demo.\nOur team will confirm your time and send your calendar invite shortly.",
    successPrimaryButton: 'Return to Home',
    autoCloseDelay: 10000,
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
    successTitle: 'Message Received',
    successEmoji: '📬',
    successBody: "Thanks for reaching out. We'll reply within one business day.",
    successPrimaryButton: 'Close',
    autoCloseDelay: 10000,
    trackingEvent: 'contact_message'
  }
};
