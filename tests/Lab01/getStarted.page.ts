import { Page } from "@playwright/test";

export class GetStartedPage {
  private readonly page: Page;

  private readonly firstName;
  private readonly lastName;
  private readonly businessEmail;
  private readonly phoneNumber;
  private readonly companyName;
  private readonly jobTitle;
  private readonly companyType;
  private readonly companySize;
  private readonly country;
  private readonly province;
  private readonly state;
  private readonly annualProgrammaticBudget;
  private readonly howAreYouLookingToWorkWIthUs;
  private readonly iAgreeCheckbox;
  private readonly submitButton;

  constructor(page: Page) {
    this.page = page;
    this.firstName = this.page.locator("#first_name");
    this.lastName = this.page.locator("#last_name");
    this.businessEmail = this.page.locator("#email");
    this.phoneNumber = this.page.locator("#phone");
    this.companyName = this.page.locator("#company_name");
    this.jobTitle = this.page.locator("#job_title");
    this.companyType = this.page.locator("#company_type");
    this.companySize = this.page.locator("#company_size");
    this.country = this.page.locator("#country");
    this.province = this.page.locator("#province");
    this.state = this.page.locator("#state");
    this.annualProgrammaticBudget = this.page.locator("#budget");
    this.howAreYouLookingToWorkWIthUs = this.page.locator("#intention");
    this.iAgreeCheckbox = this.page.locator("label.form-check-label sa-consent-box-extension::after");
    this.submitButton = this.page.getByText("Submit");
  }
}
