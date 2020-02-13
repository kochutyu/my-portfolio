import { ProjectInfo } from '../interfaces/project-info';

export class IProjectInfo implements ProjectInfo{
    constructor(
        public img: string,
        public data: string
    ){}
}
