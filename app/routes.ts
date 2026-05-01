import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('pages/LandingPage.tsx'),
  route('about', 'pages/AboutPage.tsx'),
  route('success', 'pages/SuccessPage.tsx'),
] satisfies RouteConfig;