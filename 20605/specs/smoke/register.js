import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import ProfilePage from '../../../pageObjects/profile.page';
import { newUser } from '../../testData/register';
import { getUserByEmail } from '../../helpers/axios/userGetByEmail';
import { userDeleteByEmail } from '../../helpers/axios/userDeleteByEmail';

describe('REGISTER', function () {
  it('TC-091 should verify that newUser can register', function () {
    RegisterPage.open();
    RegisterPage.registerUser(newUser);
    RegisterStep2Page.registerUserStep2(newUser);
    expect(ProfilePage.headerProfile.getText()).eq(newUser.firstName + ' ' + newUser.lastName);
  });

  it('API check the new user', async () => {
    const user = await getUserByEmail(newUser.email);
    expect(user.success).eq(true);
  });
});

after('Should delete a user', async () => {
  const res = await userDeleteByEmail(newUser.email);
  console.log('delete ' + res.success);
  expect(res.success).eq(true);
});
