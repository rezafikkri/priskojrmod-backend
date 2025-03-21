'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { signIn } from 'next-auth/react';

export function SignInForm() {
  return (
    <Card className="border-0">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Welcome back</CardTitle>
        <CardDescription>
          Sign In with your Google account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full" onClick={() => signIn('google')}>
          <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/google-g.png" alt="Google logo" width={16} height={16} className="me-0.5" />
          <span>Sign In with Google</span>
        </Button>
      </CardContent>
    </Card>
  )
}
