export interface User {
  id?: number;
  name: string;
  Reading?: {
    title: string;
    author: string;
    year: number;
  };
  Favorite?: {
    title: string;
  };
}

export interface UserModel {
  id: string;
  username: string;
  password: string;
}
