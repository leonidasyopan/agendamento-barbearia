import AppError from '@shared/errors/AppError';
import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update user profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123345',
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Smith',
      email: 'johnsmith@gmail.com',
    });

    expect(updatedUser.name).toBe('John Smith');
    expect(updatedUser.email).toBe('johnsmith@gmail.com');
  });

  it('should not be able to change to an email already in use', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123345',
    });

    const user = await fakeUsersRepository.create({
      name: 'Test',
      email: 'test@gmail.com',
      password: '123345',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Test',
        email: 'johndoe@gmail.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
