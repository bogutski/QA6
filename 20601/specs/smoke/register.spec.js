import RegisterPage from '../../../pageObjects/register.page';
import RegisterStep2Page from '../../../pageObjects/registerStep2.page';
import LoginPage from '../../../pageObjects/login.page';
import expected from '../../data/expected.json';
import newUser from '../../data/fakerData';

describe('USER REGISTER', () => {
  before(() => {
    RegisterPage.open();
  });

  it('should verify header text', () => {
    expect(RegisterPage.headerRegister.getText()).eq(expected.pagesHeaders.RegisterPageHeader);
  });

  it('should populate fields and submit form', () => {
    RegisterPage.registerUser(newUser);
    expect(RegisterStep2Page.headerRegisterStep2.getText()).contains(expected.pagesHeaders.RegisterStep2PageHeader);
  });

  it('verify that Login Link redirect user from Register Page to Login Page', function () {
    RegisterPage.open();
    RegisterPage.loginLink.click();
    expect(LoginPage.header.getText()).contains(expected.pagesHeaders.LoginHeader);
  });
});
