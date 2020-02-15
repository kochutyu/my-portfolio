import { Progress } from '../interfaces/progress';

export class IProgress implements Progress {
    constructor(
        public subject: string,
        public progress: number
    ) { }
}
