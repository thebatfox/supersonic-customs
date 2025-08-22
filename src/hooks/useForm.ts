import { useState } from 'react';

interface UseFormProps<T> {
  initialData: T;
  submitUrl: string;
  successMessage: string;
}

interface FormState<T> {
  data: T;
  loading: boolean;
  message: { type: 'success' | 'error'; text: string } | null;
}

export function useForm<T>({ initialData, submitUrl, successMessage }: UseFormProps<T>) {
  const [formState, setFormState] = useState<FormState<T>>({
    data: initialData,
    loading: false,
    message: null,
  });

  const updateField = (field: keyof T, value: T[keyof T]) => {
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value }
    }));
  };

  const resetForm = () => {
    setFormState(prev => ({
      ...prev,
      data: initialData,
      message: { type: 'success', text: successMessage }
    }));
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true, message: null }));

    try {
      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState.data),
      });

      const data = await response.json();

      if (response.ok) {
        resetForm();
      } else {
        setFormState(prev => ({
          ...prev,
          message: { type: 'error', text: data.error || 'Failed to submit. Please try again.' }
        }));
      }
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        message: { type: 'error', text: 'Network error. Please check your connection and try again.' }
      }));
    } finally {
      setFormState(prev => ({ ...prev, loading: false }));
    }
  };

  return {
    data: formState.data,
    loading: formState.loading,
    message: formState.message,
    updateField,
    submitForm,
  };
}
