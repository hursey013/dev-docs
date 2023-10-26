import React from "react";
import Logo from "@site/static/img/logo.png";

export default function Footer() {
  return (
    <div className="usa-identifier padding-y-4">
      <section
        className="usa-identifier__section usa-identifier__section--masthead"
        aria-label="Agency identifier,"
      >
        <div className="usa-identifier__container">
          <div className="usa-identifier__logos">
            <a href="https://www.gsa.gov" className="usa-identifier__logo">
              <img
                className="usa-identifier__logo-img"
                src={Logo}
                alt="GSA logo"
                role="img"
              />
            </a>
          </div>
          <section
            className="usa-identifier__identity"
            aria-label="Agency description,"
          >
            <p className="usa-identifier__identity-domain">tech.gsa.gov</p>
            <p class="usa-identifier__identity-disclaimer">
              An official website of the{" "}
              <a href="https://www.gsa.gov">
                U.S. General Services Administration
              </a>
            </p>
          </section>
        </div>
      </section>
      <nav
        class="usa-identifier__section usa-identifier__section--required-links"
        aria-label="Important links"
      >
        <div class="usa-identifier__container">
          <ul class="usa-identifier__required-links-list">
            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsa.gov/about-us"
                class="usa-identifier__required-link usa-link"
              >
                About GSA
              </a>
            </li>

            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsa.gov/website-information/accessibility-statement"
                class="usa-identifier__required-link usa-link"
              >
                Accessibility statement
              </a>
            </li>

            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsa.gov/reference/freedom-of-information-act-foia"
                class="usa-identifier__required-link usa-link"
              >
                FOIA requests
              </a>
            </li>

            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsa.gov/about-us/organization/office-of-civil-rights/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002"
                class="usa-identifier__required-link usa-link"
              >
                No FEAR Act data
              </a>
            </li>

            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsaig.gov/"
                class="usa-identifier__required-link usa-link"
              >
                Office of the Inspector General
              </a>
            </li>

            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsa.gov/reference/reports/budget-performance"
                class="usa-identifier__required-link usa-link"
              >
                Performance reports
              </a>
            </li>

            <li class="usa-identifier__required-links-item">
              <a
                href="https://www.gsa.gov/website-information/website-policies"
                class="usa-identifier__required-link usa-link"
              >
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section
        className="usa-identifier__section usa-identifier__section--usagov"
        aria-label="U.S. government information and services,"
      >
        <div className="usa-identifier__container">
          <div className="usa-identifier__usagov-description">
            Looking for U.S. government information and services?
          </div>{" "}
          <a href="https://www.usa.gov/" className="usa-link">
            Visit USA.gov
          </a>
        </div>
      </section>
    </div>
  );
}
