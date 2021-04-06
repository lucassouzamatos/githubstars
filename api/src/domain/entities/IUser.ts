import IFavorite from "@domain/entities/IFavorite";

export default interface IUser {
  id: string;
  github_id: string;
  username: string;
  favorites: IFavorite[];
  created_at: Date;
  updated_at: Date;
}
