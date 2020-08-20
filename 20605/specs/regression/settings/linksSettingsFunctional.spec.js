import LoginPage from '../../../../pageObjects/login.page';
import { userProfile } from '../../../testData/userForUpdate';
import ProfilePage from '../../../../pageObjects/profile.page';
import TopMenuPage from '../../../../pageObjects/topMenu.page';
import LinksPage from '../../../../pageObjects/settingsLinks.page';
import { linksSettings } from '../../../testResult/linksSettings';

before(() => {
  LoginPage.open();
  LoginPage.login(userProfile.email, userProfile.password);
  ProfilePage.dropDownUserMenu.click();
  TopMenuPage.dropDownMenuSettings.click();
  LinksPage.linksTab.click();
});

describe('LINKS FIELD ACCEPT INPUT DATA', function () {
  it('TC-214 Resume Link field can accept reference', function () {
    LinksPage.resumeField.setValue(linksSettings.resumeData);
    LinksPage.saveLinks();
    expect(LinksPage.resumeField.getValue()).eq(linksSettings.resumeData);
  });

  it('TC-215 Linkedin Link field can accept reference', function () {
    LinksPage.linkedInField.setValue(linksSettings.linkedInData);
    LinksPage.saveLinks();
    expect(LinksPage.linkedInField.getValue()).eq(linksSettings.linkedInData);
  });

  it('TC-216 Facebook Link field can accept reference', function () {
    LinksPage.facebookField.setValue(linksSettings.facebookData);
    LinksPage.saveLinks();
    expect(LinksPage.facebookField.getValue()).eq(linksSettings.facebookData);
  });

  it('TC-217 GitHub Link field can accept reference', function () {
    LinksPage.gitHubField.setValue(linksSettings.gitHubData);
    LinksPage.saveLinks();
    expect(LinksPage.gitHubField.getValue()).eq(linksSettings.gitHubData);
  });

  it('TC-218 Codewars Link field can accept reference', function () {
    LinksPage.codewarsField.setValue(linksSettings.codewarsData);
    LinksPage.saveLinks();
    expect(LinksPage.codewarsField.getValue()).eq(linksSettings.codewarsData);
  });

  it('TC-219 SaveBtn should be clicable and save all new input data', function () {
    LinksPage.saveLinks();
    expect(LinksPage.saveLinksBtn.isClickable()).true;
  });
});
