import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import waitTime from '../../../testData/waitTimes';
import user from '../../../testData/user';

const host = 'https://server-stage.pasv.us';

describe('New user registration page', () => {
  beforeEach(() => {
    LoginPage.open();
    console.log(process.env.ADMIN_TOKEN);
  });
});

describe('LOGIN NEW USER', function () {
  it('TC-039 should Successful login as a new user', () => {
    LoginPage.validLogin(user.new.email, user.new.password);
    ProfilePage.badgeRole.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
    expect(ProfilePage.getLoginConfirmation()).eq(user.new.firstName + ' ' + user.new.lastName);
  });
});

describe('LOGIN ADMIN', function () {
  console.log(process.env);
  it('TC-040 should Successful login as an Admin', () => {
    LoginPage.validLogin(user.admin.email, user.admin.password);
    ProfilePage.badgeRole.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
    expect(ProfilePage.getLoginConfirmation()).eq(user.admin.firstName + ' ' + user.admin.lastName);
  });
});

describe('LOGIN LEARNER', function () {
  it('TC-041 should Successfuly login as a learner', () => {
    LoginPage.validLogin(user.learner.email, user.learner.password);
    ProfilePage.badgeRole.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
    expect(ProfilePage.getLoginConfirmation()).eq(user.learner.firstName + ' ' + user.learner.lastName);
  });
});

describe('LOGIN NEW STUDENT', function () {
  it('TC-042 should Successful login as a student', () => {
    LoginPage.validLogin(user.student.email, user.student.password);
    ProfilePage.badgeRole.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
    expect(ProfilePage.getLoginConfirmation()).eq(user.student.firstName + ' ' + user.student.lastName);
  });
});
