import LoginPage from '../../../pageObjects/login.page';
import ProfilePage from '../../../pageObjects/profile.page';
import TopMenuPage from '../../../pageObjects/topMenu.page';
import user from '../../../testData/user';
import waitTime from '../../../testData/waitTimes';

describe('LOGIN FUNCTIONALITY', function () {
  beforeEach(() => {
    LoginPage.open();
  });

  it('TC-029 should verify that user can login as NEW USER', function () {
    LoginPage.login(user.new.email, user.new.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
    expect(ProfilePage.getLoginConfirmation()).eq(user.new.firstName + ' ' + user.new.lastName);
  });

  it('TC-028 should verify that user can login as ADMIN', function () {
    LoginPage.login(user.admin.email, user.admin.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
    expect(ProfilePage.getLoginConfirmation()).eq(user.admin.firstName + ' ' + user.admin.lastName);
  });

  it('TC-030 should verify that user can login as LEARNER', function () {
    LoginPage.login(user.learner.email, user.learner.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
    expect(ProfilePage.getLoginConfirmation()).eq(user.learner.firstName + ' ' + user.learner.lastName);
  });

  it('TC-031 should verify that user can login as STUDENT', function () {
    LoginPage.login(user.student.email, user.student.password);
    TopMenuPage.userAvatarName.waitForDisplayed({ timeout: waitTime.WAIT_TIME_MEDIUM });
    expect(ProfilePage.getLoginConfirmation()).eq(user.student.firstName + ' ' + user.student.lastName);
  });
});
