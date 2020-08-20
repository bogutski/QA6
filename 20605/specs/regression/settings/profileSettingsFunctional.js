import LoginPage from '../../../../pageObjects/login.page';
import ProfilePage from '../../../../pageObjects/profile.page';
import settingProfilePage from '../../../../pageObjects/settingsProfile.page';
import user from '../../../../testData/user';
import { clearValue } from '../../../helpers/clearValue';
import { inputProfileSettings } from '../../../testData/inputProfileSettings';
import { expectedProfileSettings } from '../../../testResult/expectedProfileSettings';

describe('PROFILE (FUNCTIONAL) IN SETTINGS', function () {
  before(() => {
    LoginPage.open();
    LoginPage.login(user.admin.email, user.admin.password);
    ProfilePage.dropDownUserMenu.click();
    ProfilePage.settingsLink.click();
  });

  it('first name input field should accept " A " ', function () {
    clearValue(settingProfilePage.firstNameIF);
    settingProfilePage.firstNameIF.setValue(inputProfileSettings.firstLastNameMin);
    expect(settingProfilePage.firstNameIF.getValue()).eq(expectedProfileSettings.firstLastNameMin);
  });

  it('first name input field should accept " aaaaaaaaaaaaaaaaaa " ', function () {
    clearValue(settingProfilePage.firstNameIF);
    settingProfilePage.firstNameIF.setValue(inputProfileSettings.firstLastNameMax);
    expect(settingProfilePage.firstNameIF.getValue()).eq(expectedProfileSettings.firstLastNameMax);
  });

  it('first name input field should accept " a\'sssa- " ', function () {
    clearValue(settingProfilePage.firstNameIF);
    settingProfilePage.firstNameIF.setValue(inputProfileSettings.firstLastName3);
    expect(settingProfilePage.firstNameIF.getValue()).eq(expectedProfileSettings.firstLastName3);
  });

  it('last name input field should accept " A " ', function () {
    clearValue(settingProfilePage.lastNameIF);
    settingProfilePage.lastNameIF.setValue(inputProfileSettings.firstLastNameMin);
    expect(settingProfilePage.lastNameIF.getValue()).eq(expectedProfileSettings.firstLastNameMin);
  });

  it('last name input field should accept " aaaaaaaaaaaaaaaaaa " ', function () {
    clearValue(settingProfilePage.lastNameIF);
    settingProfilePage.lastNameIF.setValue(inputProfileSettings.firstLastNameMax);
    expect(settingProfilePage.lastNameIF.getValue()).eq(expectedProfileSettings.firstLastNameMax);
  });

  it('last name input field should accept " a\'sssa- " ', function () {
    clearValue(settingProfilePage.lastNameIF);
    settingProfilePage.lastNameIF.setValue(inputProfileSettings.firstLastName3);
    expect(settingProfilePage.lastNameIF.getValue()).eq(expectedProfileSettings.firstLastName3);
  });

  it('phone input field should accept 11 numbers " 11111111111 " ', function () {
    clearValue(settingProfilePage.phoneIF);
    settingProfilePage.phoneIF.setValue(inputProfileSettings.phoneField11);
    expect(settingProfilePage.phoneIF.getValue()).eq(expectedProfileSettings.phoneField11);
  });

  it('phone input field should accept 12 numbers " 111111111111 " ', function () {
    clearValue(settingProfilePage.phoneIF);
    settingProfilePage.phoneIF.setValue(inputProfileSettings.phoneField12);
    expect(settingProfilePage.phoneIF.getValue()).eq(expectedProfileSettings.phoneField12);
  });

  it('user should be able to update About field with 50 random letters and spaces', function () {
    clearValue(settingProfilePage.aboutFieldRIF);
    settingProfilePage.aboutFieldRIF.setValue(inputProfileSettings.aboutField);
    expect(settingProfilePage.aboutFieldRIF.getValue()).eq(expectedProfileSettings.aboutField);
  });

  it('user should be able to update My Goal field with 50 random letters and spaces', function () {
    clearValue(settingProfilePage.myGoalsRIF);
    settingProfilePage.myGoalsRIF.setValue(inputProfileSettings.myGoalsField);
    expect(settingProfilePage.myGoalsRIF.getValue()).eq(expectedProfileSettings.myGoalsField);
  });

  it('user should be able to change the country using DDL', function () {
    if (settingProfilePage.countryFieldDDL.getText() == expectedProfileSettings.countryFieldCurrent) {
      settingProfilePage.countryFieldDDL.click();
      browser.keys('ArrowDown');
      browser.keys('Enter');
      expect(settingProfilePage.countryFieldDDL.getText()).eq(expectedProfileSettings.countryFiled);
    }
  });

  it('user should be able to change level of english using DDL', function () {
    if (settingProfilePage.englishLevelDDL.getText() == expectedProfileSettings.englishLevelFieldCurrent) {
      settingProfilePage.englishLevelDDL.click();
      browser.keys('ArrowDown');
      browser.keys('Enter');
      expect(settingProfilePage.englishLevelDDL.getText()).eq(expectedProfileSettings.englishLevelField);
    }
  });

  it('user should be able to change t-shirt size using DDL', function () {
    if (settingProfilePage.tShirtSizeDDL.getText() == expectedProfileSettings.tShirtSizeFieldCurrent) {
      settingProfilePage.tShirtSizeDDL.click();
      browser.keys('ArrowDown');
      browser.keys('Enter');
      expect(settingProfilePage.tShirtSizeDDL.getText()).eq(expectedProfileSettings.tShirtSizeField);
    }
  });
});
