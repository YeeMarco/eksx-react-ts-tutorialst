export class CreateProjectDTO {
  readonly _id: string;
  readonly create_time: string;
  readonly project_name: string;
  readonly owner: string;
  readonly members?: string[];
  readonly edit_time: string;
}

export class EditProjectDTO {
  readonly project_name: string;
  readonly owner: string;
  readonly edit_time: string;
}
