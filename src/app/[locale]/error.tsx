'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('Error');

  useEffect(() => {
    // 记录错误到错误监控服务
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-primary mb-4">
          {t('title')}
        </h1>
        <p className="text-gray-400 mb-8">
          {t('description')}
        </p>
        {error.digest && (
          <p className="text-sm text-gray-500 mb-4">
            Error ID: {error.digest}
          </p>
        )}
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="primary">
            {t('retry')}
          </Button>
          <Button onClick={() => window.location.href = '/'} variant="secondary">
            {t('goHome')}
          </Button>
        </div>
      </div>
    </div>
  );
}

