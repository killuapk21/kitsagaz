
import { useState, useCallback } from 'react';

interface UseImageOptimizationProps {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
}

export const useImageOptimization = ({ src, alt, loading = 'lazy' }: UseImageOptimizationProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  const imageProps = {
    src,
    alt,
    loading,
    decoding: 'async' as const,
    onLoad: handleLoad,
    onError: handleError,
    style: {
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 0.3s ease-in-out'
    }
  };

  return {
    imageProps,
    isLoaded,
    hasError
  };
};
