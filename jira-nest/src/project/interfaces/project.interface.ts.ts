// user.interface.ts
import { Document } from 'mongoose';

export interface Project extends Document {
    readonly _id: string;
    readonly create_time: string;
    readonly project_name: string;
    readonly owner: string;
    readonly members?: string[];
    readonly edit_time: string;
}