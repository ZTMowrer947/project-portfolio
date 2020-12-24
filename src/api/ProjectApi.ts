// Imports
import { projects as projectData } from '@/../data.json';
import Project from '@/models/Project';

// Project data
const projects: Project[] = projectData.map((project) => ({
  id: project.id,
  name: project.project_name,
  description: project.description,
  technologiesUsed: project.technologies,
  liveLink: project.live_link ?? null,
  sourceLink: project.github_link,
  landingImage: project.image_urls.landing,
  galleryImages: project.image_urls.gallery,
}));

// Service
class ProjectApi {
  public static async getList(): Promise<Project[]> {
    return Promise.resolve(projects);
  }

  public static async get(id: number): Promise<Project | undefined> {
    return Promise.resolve(projects.find((project) => project.id === id));
  }
}

// Exports
export default ProjectApi;
