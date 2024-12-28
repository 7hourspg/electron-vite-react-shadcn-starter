import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import {
  GitHubLogoIcon,
  LightningBoltIcon,
  RocketIcon,
  CodeIcon,
  GearIcon,
  MoonIcon,
  SunIcon,
  CheckIcon,
  LayersIcon
} from '@radix-ui/react-icons'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

function App(): JSX.Element {
  const { theme } = useTheme()

  const features = [
    {
      icon: <LightningBoltIcon className="w-8 h-8" />,
      title: 'Fast Refresh',
      description: "See your changes instantly with Vite's HMR"
    },
    {
      icon: <RocketIcon className="w-8 h-8" />,
      title: 'Optimized Build',
      description: 'Efficient and compact production builds with Electron'
    },
    {
      icon: <SunIcon className="w-8 h-8" />,
      title: 'Beautiful UI',
      description: 'Customizable components with shadcn/ui and Tailwind'
    },
    {
      icon: <SunIcon className="w-8 h-8" />,
      title: 'IPC Communication',
      description: 'Seamless communication between main and renderer processes'
    },
    {
      icon: <LayersIcon className="w-8 h-8" />,
      title: 'Cross-Platform',
      description: 'Build apps for Windows, macOS, and Linux from a single codebase'
    },
    {
      icon: <CheckIcon className="w-8 h-8" />,
      title: 'TypeScript Ready',
      description: 'Full TypeScript support for type-safe development'
    }
  ]

  const quickStart = [
    {
      step: 'Clone the repository and install dependencies',
      command: 'https://github.com/7hourspg/electron-vite-react-shadcn-starter && cd your-repo && npm install'
    },
    { step: 'Run the development server', command: 'npm run dev' },
    { step: 'Start building your app!', command: 'Open src/App.tsx and start coding!' }
  ]

  const resources = [
    {
      icon: <GearIcon className="w-8 h-8" />,
      title: 'Documentation',
      description: 'Comprehensive guides for Electron, Vite, React, and more',
      link: 'https://electron-vite.org',
      buttonText: 'Visit Docs'
    },
    {
      icon: <GitHubLogoIcon className="w-8 h-8" />,
      title: 'GitHub',
      description: 'Explore the source code, contribute, and stay updated',
      link: 'https://github.com/7hourspg/electron-vite-react-shadcn-starter',
      buttonText: 'View on GitHub'
    },
    {
      icon: <CodeIcon className="w-8 h-8" />,
      title: 'API Reference',
      description: 'Detailed API documentation for all included libraries',
      link: '#',
      buttonText: 'Explore APIs'
    },
    {
      icon: <RocketIcon className="w-8 h-8" />,
      title: 'Community',
      description: 'Join the community for support and collaboration',
      link: '#',
      buttonText: 'Join Community'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex items-center justify-center p-8 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full space-y-8 text-center"
      >
        <div className="space-y-2">
          <motion.h1
            className="text-6xl font-extrabold tracking-tight text-foreground"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            Electron + Vite + React
          </motion.h1>
          <p className="text-xl text-muted-foreground">
            Build powerful cross-platform desktop apps with modern web technologies
          </p>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" className="px-4 py-2 rounded-full">
                  <SunIcon className="w-4 h-4 mr-2" />
                  shadcn/ui
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Beautiful, reusable components with shadcn/ui and Tailwind</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" className="px-4 py-2 rounded-full">
                  <CodeIcon className="w-4 h-4 mr-2" />
                  Tailwind CSS
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Utility-first CSS framework for rapid UI development</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" className="px-4 py-2 rounded-full">
                  {theme === 'dark' ? (
                    <MoonIcon className="w-4 h-4 mr-2" />
                  ) : (
                    <SunIcon className="w-4 h-4 mr-2" />
                  )}
                  next-themes
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Easy theme switching and dark mode support</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex justify-end">
          <ThemeToggle />
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
            <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={theme}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="features">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                  {features.map((feature, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Card className="h-full">
                        <CardHeader>
                          <CardTitle className="flex flex-col items-center justify-center gap-4 text-2xl">
                            {feature.icon}
                            {feature.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tech-stack">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">Comprehensive Tech Stack</CardTitle>
                    <CardDescription>
                      Built with modern technologies for optimal development experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Core Technologies</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>
                              Electron: Build cross-platform desktop apps with web technologies
                            </li>
                            <li>Vite: Next-generation frontend tooling for faster development</li>
                            <li>React: A JavaScript library for building user interfaces</li>
                            <li>
                              TypeScript: Typed superset of JavaScript for improved developer
                              experience
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>UI and Styling</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>
                              shadcn/ui: High-quality React components built with Radix UI and
                              Tailwind CSS
                            </li>
                            <li>
                              Tailwind CSS: Utility-first CSS framework for rapid UI development
                            </li>
                            <li>next-themes: Easy theme switching and dark mode support</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Developer Experience</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5 space-y-2">
                            <li>
                              ESLint: Pluggable JavaScript linter for identifying and reporting on
                              patterns
                            </li>
                            <li>Prettier: Opinionated code formatter for consistent code style</li>
                            <li>
                              Hot Module Replacement (HMR): Instantly see changes without full
                              reloads
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="quickstart">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">Quick Start Guide</CardTitle>
                    <CardDescription>Get your app running in seconds</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {quickStart.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <Badge variant="outline" className="text-lg px-3 py-1">
                          Step {index + 1}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{item.step}</p>
                        <pre className="p-2 rounded-md text-xs bg-muted text-muted-foreground">
                          <code>{item.command}</code>
                        </pre>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="resources">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {resources.map((resource, index) => (
                    <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Card className="h-full">
                        <CardHeader>
                          <CardTitle className="flex flex-col items-center justify-center gap-4 text-2xl">
                            {resource.icon}
                            {resource.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm mb-6 text-muted-foreground">
                            {resource.description}
                          </p>
                          <Button asChild variant="outline" className="w-full">
                            <a href={resource.link} target="_blank" rel="noreferrer">
                              {resource.buttonText}
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>

        <div className="text-sm text-muted-foreground">
          Press <kbd className="px-2 py-1 rounded text-xs bg-muted">Ctrl/Cmd + Shift + I</kbd> to
          open DevTools
        </div>
      </motion.div>
    </div>
  )
}

export default App
