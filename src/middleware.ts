// middleware.ts
import { createNextAuthMiddleware } from 'nextjs-basic-auth-middleware'

export const middleware = createNextAuthMiddleware({
  users: [
    { name: 'admin', password: 'cjchnws' },
  ],
  pathname: '/(.*)',
  message: 'Protected area, please login to get access',
})

export const config = {
  matcher: ['/(.*)'], // Replace this with your own matcher logic
}