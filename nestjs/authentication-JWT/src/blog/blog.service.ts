import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
  private readonly blogs = [
    {
      id: 1,
      blogTitle: 'Blog 1',
      blogUniqueKey: 'blog-1',
    },
    {
      id: 2,
      blogTitle: 'Blog 2',
      blogUniqueKey: 'blog-2',
    },
    {
      id: 3,
      blogTitle: 'Blog 3',
      blogUniqueKey: 'blog-3',
    },
    {
      id: 4,
      blogTitle: 'Blog 4',
      blogUniqueKey: 'blog-4',
    },
    {
      id: 5,
      blogTitle: 'Blog 5',
      blogUniqueKey: 'blog-5',
    },
  ];

  findAll() {
    return this.blogs;
  }

  findOneById(id: number) {
    return this.blogs.find((blog) => blog.id === id);
  }

  findOneByUniqueKey(blogUniqueKey: string) {
    return this.blogs.find((blog) => blog.blogUniqueKey === blogUniqueKey);
  }
}
