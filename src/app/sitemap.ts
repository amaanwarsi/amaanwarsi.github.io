import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amaanwarsi.com' // Replace with your actual domain
  
  // Dynamically fetch all case studies from the work directory
  const workDir = path.join(process.cwd(), 'src/app/work')
  let workRoutes: MetadataRoute.Sitemap = []
  
  try {
    if (fs.existsSync(workDir)) {
      const workProjects = fs.readdirSync(workDir).filter(file => {
        // Exclude Next.js specific files and ensure we're getting route directories
        return fs.statSync(path.join(workDir, file)).isDirectory() && !file.startsWith('[')
      })
      
      workRoutes = workProjects.map(project => ({
        url: `${baseUrl}/work/${project}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      }))
    }
  } catch (error) {
    console.error('Error generating case studies for sitemap:', error)
  }
  
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...workRoutes,
    {
      url: `${baseUrl}/labs`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/notes/websockets-vs-polling`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/notes/self-hosted-deployments`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/notes/frontend-performance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
