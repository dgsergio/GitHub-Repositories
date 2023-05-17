import { useState } from 'react';
import { Github } from '../App.model';

const useFetch = () => {
  const [status, setStatus] = useState<{ loading: boolean; error: string }>({
    loading: false,
    error: '',
  });

  const sendRequest = async (
    url: string,
    transformData: (data: Github[]) => void
  ) => {
    setStatus({ loading: true, error: '' });
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Somthing went wrong');
      const data = await response.json();
      setStatus((pv) => ({ ...pv, loading: false }));
      transformData(data);
    } catch (err: any) {
      setStatus({
        loading: false,
        error: 'Failed to load the data: ' + err.message,
      });
    }
  };
  return { status, sendRequest };
};

export default useFetch;
