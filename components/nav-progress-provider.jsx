'use client';

import { ProgressProvider } from '@bprogress/next/app';

export default function NavProgressProvider({ children }) {
  return (
    <ProgressProvider 
      height="4px"
      color="#22c55e"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
}
