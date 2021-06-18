import {  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put} from '@nestjs/common';
import { ProjectService } from './project.service';
import { Project } from './interfaces/project.interface.ts';
import { CreateProjectDTO,EditProjectDTO } from './project.dto';

interface ProjectResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get('projects')
  async findAll(): Promise<ProjectResponse<Project[]>> {
    return {
      code: 200,
      data: await this.projectService.findAll(),
      message: 'Success.'
    };
  }

  // GET /Project/:_id
  @Get(':_id')
  async findOne(@Param('_id') _id: string): Promise<ProjectResponse<Project>> {
    return {
      code: 200,
      data: await this.projectService.findOne(_id),
      message: 'Success.'
    };
  }

  // POST /Project
  @Post('add')
  async addOne(@Body() body: CreateProjectDTO): Promise<ProjectResponse> {
    await this.projectService.addOne(body);
    return {
      code: 200,
      message: 'Success.'
    };
  }

  // PUT /Project/:_id
  @Put(':_id')
  async editOne(
    @Param('_id') _id: string,
    @Body() body: EditProjectDTO
  ): Promise<ProjectResponse> {
    await this.projectService.editOne(_id, body);
    return {
      code: 200,
      message: 'Success.'
    };
  }

  // DELETE /Project/:_id
  @Delete(':_id')
  async deleteOne(@Param('_id') _id: string): Promise<ProjectResponse> {
    await this.projectService.deleteOne(_id);
    return {
      code: 200,
      message: 'Success.'
    };
  }
}