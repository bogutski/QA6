import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import expected from '../../data/expected.json';
import { newUser } from '../../helpers/faker';
import ProfilePage from '../../../pageObjects/profile.page';
import { userDelete } from '../../../helpers/deleteNewUserByAxios';

before('Should register new user', () => {
  RegisterPage.open();
  RegisterPage.registerUser(newUser);
});

describe('NEW USER REGISTER STEP2', () => {
  it('UR2-01 Should fill data on the step2', () => {
    RegisterStep2Page.registerUserStep2(newUser);
    expect(ProfilePage.badgeRole.getText()).eq(expected.userBadges.new);
    expect(ProfilePage.getLoginConfirmation()).eq(`${newUser.firstName} ${newUser.lastName}`);
  });
});
after('Should delete a user', async () => {
  const res = await userDelete(newUser.email);
  expect(res.success).true;
});
