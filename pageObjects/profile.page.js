import BasePage from './Base.page';
import { WAIT_TIME_MEDIUM } from '../testData/waitTimes';

class ProfilePage extends BasePage {
  get headerProfile() {
    return $('//div[@class="ant-col ant-col-24"]//h1');
  }

  get badgeRole() {
    return $('.ant-badge');
  }

  get dropDownUserMenu() {
    return $('[aria-label="down"]');
  }

  get logoutLink() {
    return $$('.ant-dropdown-menu-item')[3];
  }

  get linkLocal() {
    return $('.ant-row.mt-4 > div > div > span');
  }

  get goalsText() {
    return $$('h3')[1];
  }

  get aboutText() {
    return $$('h3')[0];
  }

  get completedCodeWarsText() {
    return $$('h3')[2];
  }

  get goalsAchievementsLink() {
    return $("//div[contains(text(),'no goals')]");
  }

  get dailyReportsText() {
    return $('h3.mb-0');
  }

  get createDayReportBtn() {
    return $("//span[contains(text(),'Create day report')]");
  }

  get contactUsLink() {
    return $('footer > a:nth-of-type(1)');
  }

  get termsOfServiceLink() {
    return $('footer > a:nth-of-type(2)');
  }

  get privacyPolicy() {
    return $('footer > a:nth-of-type(3)');
  }

  get completedCodewarsKata() {
    return $('h3.mb-0');
  }

  get updateList() {
    return $("//div[@class='ant-row mt-4']//div[5]");
  }

  get createDayReportBtnClose() {
    return $("//button[@class='ant-drawer-close']");
  }

  // get resumeIcon() {
  //   return $('//a[@class="mr-3"]');
  // }

  get resumeIcon() {
    return $("//div[@class='ant-row mb-3']//a[contains(@href, 'doc')]");
  }

  get FacebookIcon() {
    return $("//div[@class='ant-row mb-3']//a[contains(@href, 'facebook')]");
  }

  get LinkedInIcon() {
    return $("//div[@class='ant-row mb-3']//a[contains(@href, 'linkedin')]");
  }

  get GitHubIcon() {
    return $("//div[@class='ant-row mb-3']//a[contains(@href, 'github')]");
  }

  get CodewarsIcon() {
    return $("//div[@class='ant-row mb-3']//a[contains(@href, 'codewars')]");
  }

  get profile() {
    return $$('.ant-dropdown-menu-item')[0];
  }

  get settingsLink() {
    return $$('.ant-dropdown-menu-item')[1];
  }

  createDayReport() {
    this.createDayReportBtn.click();
    this.createDayReportBtnClose.waitForClickable({ timeout: WAIT_TIME_MEDIUM });
    this.createDayReportBtnClose.click();
  }

  getLoginConfirmation() {
    return this.headerProfile.getText();
  }

  logout() {
    this.dropDownUserMenu.click();
    this.logoutLink.waitForDisplayed({ timeout: WAIT_TIME_MEDIUM });
    this.logoutLink.click();
  }

  resumeDoc() {
    this.resumeIcon.getAttribute('href');
  }
}

export default new ProfilePage();
