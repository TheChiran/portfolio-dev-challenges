export type ExperienceData = {
    duration: string,
    designation: string,
    logoUrl: string,
    description: string
};

export interface IExperiences{
    title: string,
    data: ExperienceData []
}