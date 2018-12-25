import { PROJECTS } from './projects.config';
import { SOCIALS } from './socials.config';
import { IProject, ISocial, IBasics } from '../models';
import { BASICS } from './basics.config';

export interface IAppConfig {
    basics: IBasics;
    projects: IProject[];
    socials: ISocial[];
}

export const appConfig: IAppConfig = {
    basics: BASICS,
    projects: PROJECTS,
    socials: SOCIALS
};
