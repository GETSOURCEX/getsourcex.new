import React, { createContext, useContext, useState, ReactNode } from 'react';
import { FormConfig, CTA_FORMS } from '../config/formConfigs';
import DynamicFormModal from '../components/DynamicFormModal';

interface FormContextType {
  openForm: (ctaKey: string) => void;
  closeForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useForm must be used within FormProvider');
  }
  return context;
};

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentConfig, setCurrentConfig] = useState<FormConfig | null>(null);

  const openForm = (ctaKey: string) => {
    const config = CTA_FORMS[ctaKey];
    if (config) {
      setCurrentConfig(config);
      setIsOpen(true);
    } else {
      console.error(`No form configuration found for CTA key: ${ctaKey}`);
    }
  };

  const closeForm = () => {
    setIsOpen(false);
    setTimeout(() => setCurrentConfig(null), 300);
  };

  return (
    <FormContext.Provider value={{ openForm, closeForm }}>
      {children}
      <DynamicFormModal
        isOpen={isOpen}
        onClose={closeForm}
        config={currentConfig}
      />
    </FormContext.Provider>
  );
};
