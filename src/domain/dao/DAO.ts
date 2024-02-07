//The DAO has the definitions of the DB
export default interface DAO<T> {
  create(data: T): Promise<T>;
  findById(id: string): Promise<T | null>;
}
