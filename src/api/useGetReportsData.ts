import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from './index';

// Custom hook to get reports data
export const useGetReportsData = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    if (!endpoint) return;

    setLoading(true);

    api
      .get(endpoint)
      .then(({ data: { reports } }) => {
        setReports(reports);
        setLoading(false);
      })
      .catch(() => {
        toast.error('Something went wrong :(', {
          position: 'top-right',
          autoClose: 3000,
        });
      });
  }, [endpoint]);

  return { loading, reports };
};
