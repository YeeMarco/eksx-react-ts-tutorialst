import { Injectable ,HttpStatus,HttpException} from '@nestjs/common';
import { Model } from 'mongoose';
import { Project } from './interfaces/project.interface.ts';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProjectDTO,EditProjectDTO } from './project.dto';
@Injectable()
export class ProjectService {
  constructor(@InjectModel('Project') private readonly projectModel: Model<Project>) {}
  // 查找所有用户
  async findAll(): Promise<Project[]> {
    const users = await this.projectModel.find();
    return users;
  }

  // 查找单个用户
  async findOne(_id: string): Promise<Project> {
    return await this.projectModel.findById(_id);
  }

  // 添加单个用户
  async addOne(body: CreateProjectDTO): Promise<void> {
    await this.projectModel.create(body);
  }

  // 编辑单个用户
  async editOne(_id: string, body: EditProjectDTO): Promise<void> {
    await this.projectModel.findByIdAndUpdate(_id, body);
  }

  // 删除单个用户
  async deleteOne(_id: string): Promise<void> {
    await this.projectModel.findByIdAndDelete(_id);
  }
}