import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SyncUserService from '@services/SyncUserService';

class UserController {
  public static async sync(
    request: Request,
    response: Response
  ): Promise<Response> {
    const username = request.body.username as string;

    const syncUser = container.resolve(SyncUserService);
    const token = await syncUser.execute({ username });

    return response.json({
      token,
    });
  }
}

export default UserController;
