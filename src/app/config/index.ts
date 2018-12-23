import { PROJECTS } from './projects.config';
import { SOCIALS } from './socials.config';
import { IProject, ISocial } from '../models';

interface IAppConfig {
    projects: IProject[];
    socials: ISocial[];
}

export const appConfig: IAppConfig = {
    projects: PROJECTS,
    socials: SOCIALS
}