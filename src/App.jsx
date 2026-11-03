import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';

// Home ships in the main bundle; other pages load on demand and Layout's <Suspense> covers the gap.
import Home from './pages/Home';
const Projects = lazy(() => import('./pages/Projects'));
const ProjectCaseStudy = lazy(() => import('./pages/ProjectCaseStudy'));
const Experience = lazy(() => import('./pages/Experience'));
const Achievements = lazy(() => import('./pages/Achievements'));
const About = lazy(() => import('./pages/About'));
const Photography = lazy(() => import('./pages/Photography'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Exported for tests (createMemoryRouter with the same tree).
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:slug', element: <ProjectCaseStudy /> },
      { path: 'experience', element: <Experience /> },
      { path: 'achievements', element: <Achievements /> },
      { path: 'about', element: <About /> },
      { path: 'photography', element: <Photography /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
