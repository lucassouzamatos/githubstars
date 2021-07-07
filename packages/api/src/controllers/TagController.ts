import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AttachTagService from '@services/AttachTagService';

class TagController {
  public static async attach(
    request: Request,
    response: Response
  ): Promise<Response> {
    const tags = request.body.tags as string;
    const favorite_id = request.body.favorite_id as string;
    const user_id = request.user.id as string;

    const attachTag = container.resolve(AttachTagService);

    try {
      const favorite = await attachTag.execute({ favorite_id, tags, user_id });
      return response.json({
        favorite,
      });
    } catch (error) {
      return response.error(error);
    }
  }
}

export default TagController;
