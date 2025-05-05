import React from "react";
// import {Link} from "react-router-dom";
import "./Privacy.css";
import MetaData from "../component/layouts/MataData/MataData";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
     <MetaData title={"Privacy Policy"} />
      <div className="container___">
        <h1>Privacy Policy of Arvi LED Lights</h1>
        <p style={{ fontSize: "16px", fontWeight: "600" }}>
          {" "}
          Effective Date: 23-12-2021
        </p>
        <p>
  At Arvi LED Lights, we value the privacy of our customers and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this Privacy Policy carefully. By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy.
</p>

<h2>1. Information We Collect</h2>

<h3>1.1 Personal Information:</h3>
<p>
  We may collect personal information that you voluntarily provide to us when you create an account, place an order, subscribe to our newsletter, fill out a contact form, or reach out for customer support. This may include your name, email address, phone number, shipping and billing addresses, and payment information.
</p>

<h3>1.2 Non-Personal Information:</h3>
<p>
  We may automatically collect non-personal information about your visit to our website, such as your IP address, browser type, operating system, referring URLs, pages viewed, time spent on pages, and device information.
</p>

<h2>2. Use of Information</h2>

<h3>2.1 Personal Information:</h3>
<p>We use your personal information to:</p>
<ul>
  <li>Process your orders and deliver products</li>
  <li>Provide customer service and respond to inquiries</li>
  <li>Send promotional emails and newsletters (you may unsubscribe at any time)</li>
  <li>Improve our website, product listings, and services</li>
  <li>Personalize your shopping experience</li>
  <li>Detect and prevent fraudulent or unauthorized activities</li>
</ul>

<h3>2.2 Non-Personal Information:</h3>
<p>
  Non-personal data is used for purposes such as:
</p>
<ul>
  <li>Analyzing website traffic and user behavior</li>
  <li>Optimizing website performance</li>
  <li>Enhancing user experience through design and content improvements</li>
  <li>Marketing and advertising insights</li>
</ul>

<h2>3. Disclosure of Information</h2>
<p>We may share your information under the following circumstances:</p>
<ul>
  <li>With trusted third-party service providers (e.g., payment processors, shipping partners)</li>
  <li>To comply with legal requirements or enforce our terms</li>
  <li>In connection with business transfers such as mergers or acquisitions</li>
  <li>With your explicit consent or instruction</li>
</ul>

<h2>4. Security</h2>
<p>
  We implement security measures to protect your information from unauthorized access, loss, or misuse. However, no system can be completely secure, so we encourage you to take precautions when using the internet.
</p>

<h2>5. Children's Privacy</h2>
<p>
  Arvi LED Lights does not knowingly collect information from individuals under the age of 13. If we learn that we have collected data from a child without parental consent, we will promptly delete it.
</p>

<h2>6. Changes to This Privacy Policy</h2>
<p>
  We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page and become effective immediately upon posting. We encourage you to review this policy regularly.
</p>

<h2>7. Contact Us</h2>
<p>
  If you have any questions, concerns, or suggestions regarding this Privacy Policy, please contact us at 
  <a
  href="mailto:arvilightss@gmail.com"
  style={{ textDecoration: "none", color: "inherit", fontWeight: 700 }}>
    arvilightss@gmail.com
</a>

</p>

<p>
  By using the Arvi LED Lights website and services, you agree to the collection, use, and disclosure of your information as described in this Privacy Policy.
</p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
