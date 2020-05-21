// import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

describe('SendForgotPasswordEmail', () => {
  it('should be able to recover the password using the email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();

    const createUser = new SendForgotPasswordEmailService(fakeUsersRepository);

    return createUser;

    // await createUser.execute({
    //   name: 'John Doe',
    //   email: 'johndoe@gmail.com',
    //   password: '123345',
    // });

    // expect(user).toHaveProperty('id');
    // expect(user.email).toBe('johndoe@gmail.com');
  });
});
