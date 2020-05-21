import { uuid } from 'uuidv4';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

import UserTolken from '@modules/users/infra/typeorm/entities/UserTolken';

class FakeUserTokensRepository implements IUserTokensRepository {
  private userTokens: UserTolken[] = [];

  public async generate(user_id: string): Promise<UserTolken> {
    const userToken = new UserTolken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id,
    });

    this.userTokens.push(userToken);

    return userToken;
  }
}
export default FakeUserTokensRepository;
