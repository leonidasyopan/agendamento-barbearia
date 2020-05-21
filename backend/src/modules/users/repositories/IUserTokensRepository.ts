import UserToken from '@modules/users/infra/typeorm/entities/UserTolken';

export default interface IUserTokensRepository {
  generate(user_id: string): Promise<UserToken>;
}
