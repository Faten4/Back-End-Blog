import { z } from 'zod';

export const addBlogSchema = z.object({
  body: z.object({
    title: z
      .string({
        required_error: 'Title is required !',
        invalid_type_error: 'Title must be a string',
      })
      .min(2, 'Title must be more than 2 char')
      .max(15, 'Title must be less than 15 char'),
      message: z.string({ required_error:  'message must be a string'})
      .max(255, 'Title must be less than 255 char')
  }),
});

// export const updateTodoSchema = z.object({
//   body: z.object({
//     title: z
//       .string({
//         required_error: 'Title is required !',
//         invalid_type_error: 'Title must be a string',
//       })
//       .min(2, 'Title must be more than 2 char')
//       .max(15, 'Title must be less than 15 char'),
//   }),
//   params: z.object({
//     todoid: z.string({
//       required_error: 'id is required !',
//       invalid_type_error: 'todo id must be a string',
//     }),
//   }),
// });

export const deleteBlogSchema = z.object({
  params: z.object({
    blogid: z.string({
      required_error: 'id is required !',
      invalid_type_error: 'blog id must be a string',
    }),
  }),
});

export type deleteBlogSchemaType = z.infer<typeof deleteBlogSchema>['params'];

// export type updateTodoSchemaType = z.infer<typeof updateTodoSchema>['params'];
