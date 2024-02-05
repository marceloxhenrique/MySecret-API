export interface UserModel {
  userId: number;
  name: string | null;
  email: string;
  password: string;
  pictureUrl: string | null;
  create_at: Date;
  update_at: Date;
}
