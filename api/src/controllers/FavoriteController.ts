import { Request, Response } from 'express';
import { container } from 'tsyringe';

import FindFavoritesService from '@services/FindFavoritesService';

class FavoriteController {
  public static async all(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { user } = request;

    const findFavorites = container.resolve(
      FindFavoritesService
    ) as FindFavoritesService;

    const data = await findFavorites.execute({ userid: user.id });

    return response.json(data);
  }
}

export default FavoriteController;
