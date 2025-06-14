import { Controller, Get, Param } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}
  @Get()
  findAll() {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.blogService.findOneById(+id);
  }

  @Get('key/:blogUniqueKey')
  findOneByUniqueKey(@Param('blogUniqueKey') blogUniqueKey: string) {
    return this.blogService.findOneByUniqueKey(blogUniqueKey);
  }
}
