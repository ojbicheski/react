import { useState, useEffect } from 'react';
import { projectAPI } from './../projectAPI';
import { Project } from './../Project';
import { useParams } from 'react-router-dom';

export function useProject() {
  const [loading, setLoading] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    setLoading(true);
    projectAPI
      .find(id)
      .then((data) => {
        setProject(data);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return {
    loading,
    project,
    error
  };
}