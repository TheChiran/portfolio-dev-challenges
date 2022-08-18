export type ProjectData = {
  imgUrl: string;
  technologies: string[];
  title: string;
  description: string;
  website: string;
  github: string;
};
export interface IProjects {
  title: string;
  tags: string[];
  data: ProjectData[];
}
