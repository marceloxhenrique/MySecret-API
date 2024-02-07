import {
  KnexTypeAdapter,
  DatabaseTablesNames,
} from "@infra/database/KnexAdapater";
import { UserModel } from "@domain/model";
import DAO from "@domain/dao/DAO";

export default class UerDao implements DAO<UserModel> {
  private readonly tableName: string = DatabaseTablesNames.USER;

  constructor(private readonly connection: KnexTypeAdapter) {}

  async create(data: UserModel): Promise<UserModel> {
    const [savedUser] = await this.connection<UserModel>(this.tableName)
      .insert(data)
      .returning("*");
    return savedUser;
  }

  async findById(userId: string): Promise<UserModel | null> {
    const data = await this.connection<UserModel>(this.tableName)
      .where({ userId })
      .first();

    if (!data) return null;
    return data;
  }
}
