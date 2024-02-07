import LoadEnv from "@infra/helper/LoadEnv";
import UserEntity from "@domain/entity/UserEntity";
import UserDAO from "@infra/database/dao/UserDAO";
import KnexAdapter from "@infra/database/KnexAdapater";
import UUIDGenerator from "@domain/entity/UUIDGenerator";

LoadEnv.load();

const knexAdapater = new KnexAdapter();
knexAdapater.connect();
const userDAO = new UserDAO(knexAdapater.instance);
userDAO.create({
  userId: UUIDGenerator.generate(),
  name: null,
  email: "test@test.com",
  password: "123",
  pictureUrl: null,
  createdAt: new Date(),
  updatedAt: null,
});
