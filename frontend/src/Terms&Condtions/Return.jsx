import React from "react";
import { Link } from "react-router-dom";
import "./Return.css"
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/tc.jpg";
const ReturnPolicyPage = () => {
  return (
    <div className="container__0">
      <MetaData title="Return Policy" />
      <div className="image-container">
        <img
          src={TermsImage}
          alt="Background"
        />
        <h1 className="policy-text">RETURN POLICY</h1>
      </div>
      <div className="content-container">
        <p>
          Thank you for shopping with Arvi LED Lights! We aim to provide high-quality lighting solutions and ensure your satisfaction with every purchase. If you're not completely satisfied, we offer a return policy of <strong>30 days</strong> for most products and <strong>7 days</strong> for select items.
        </p>

        <p>
          To be eligible for a return, the product must be unused, in its original packaging, and in the same condition as when you received it. Proof of purchase is required. Please note that custom-made lighting fixtures or specially requested designs may not be eligible for return unless there's a defect or an error on our part.
        </p>

        <p>
          To initiate a return, please contact our Customer Support Team within the applicable return window. We will guide you through the return process and provide you with return instructions and the appropriate return address.
        </p>

        <p>
          Once we receive the returned item and inspect its condition, we will process a refund to the original payment method. Please allow up to <strong>7–10 business days</strong> for the refund to reflect in your account, depending on your payment provider.
        </p>

        <p>
          Return shipping costs are the responsibility of the customer, unless the return is due to a product defect or fulfillment error. We recommend using a trackable shipping method to ensure your return reaches us safely and on time.
        </p>

        <p>
          If you have any questions or need further assistance regarding our return policy, please don’t hesitate to contact our Customer Support Team at
          <a href="mailto:arvilightss@gmail.com" style="text-decoration: none; color: inherit; font-weight: 700;">
          arvilightss@gmail.com
          </a>.
          We’re here to help!
        </p>

        <h2>Contact Information:</h2>
        <p>
          Customer Service Department
          <br />
          <span style={{ fontWeight: "500" }}>Email </span>: 
          arvilightss@gmail.com
          <br />
          <span style={{ fontWeight: "500" }}>Phone  </span>:  123-456-7890
          <br />
      <span style={{ fontWeight: "500" }}>    Hours of Operation: Monday to Friday, 9:00 AM to 5:00 PM (GMT) </span>
        </p>
        <p>
          Please reach out to us if you have any concerns or require any
          clarifications regarding our{" "}
          <Link
            to="/policy/return"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "500",
            }}
          >
            return policy
          </Link>
          . We strive to provide excellent customer service and ensure your
          satisfaction.
        </p>
      </div>
    </div>
  );
};

export default ReturnPolicyPage;
