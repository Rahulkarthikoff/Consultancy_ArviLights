import React from "react";
import "./TermsAndCondtion.css";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/tc.jpg";
const TermsAndConditionsPage = () => {
  return (
    <div className="terms-container">
      <MetaData title="Terms and Conditions" />
      <img
        src={TermsImage}
        alt="Terms and Conditions"
        className="terms-image"
      />
      <div className="terms-overlay">
        <h1 className="terms-title">TERMS AND CONDITIONS</h1>
      </div>
      <div className="terms-content">
      <p>
        Thank you for shopping with ArviLights! We truly appreciate your interest in our unique decorative lighting products and are committed to ensuring a smooth and satisfying shopping experience.
      </p>
      <p>
        By placing an order and purchasing from our website, you agree to the following terms and conditions, along with our return policy, warranty policy, privacy policy, and terms of use. Please read these carefully to understand your rights and obligations.
      </p>

      <h2>Acceptance of These Terms</h2>
      <p>
        You (“Customer”) may place orders for products with ArviLights ("we," "us," "our") through our website. By doing so, you agree to these Terms and Conditions of Sale (“Terms”) and acknowledge that we will supply products under these conditions. Any differing terms presented in communications from the customer will be invalid unless specifically agreed upon in writing by ArviLights.
      </p>

      <h2>Orders</h2>
      <p>
        All orders are subject to acceptance by ArviLights. We reserve the right to reject, cancel, or limit any order or quantity for any reason, even after an order confirmation has been sent. If your payment has been processed for a canceled order, a full refund will be issued.
      </p>

      <h2>Product Offering</h2>
      <p>
        Product details, specifications, and availability are subject to change without prior notice. While we strive to ensure accurate display of product images and colors, screen settings may affect visual representation. ArviLights is not responsible for discrepancies in color perception.
      </p>

      <h2>Price</h2>
      <p>
        Prices shown on our website are current at the time of display and may change without notice until an order is confirmed. Shipping charges are calculated at checkout based on selected shipping methods. Online prices may differ from those offered at physical outlets or events.
      </p>

      <h2>Special Offers</h2>
      <p>
        Occasionally, we may feature promotional deals such as discounts, free shipping, or bundle offers. These promotions are time-limited and subject to terms and changes without prior notice.
      </p>

      <h2>Taxes</h2>
      <p>
        Prices include applicable taxes based on current regional laws. Additional duties or taxes (if any) based on your shipping location or customs policies are your responsibility.
      </p>

      <h2>Payment</h2>
      <p>
        Payment is required at the time of purchase. We accept secure online payments via major credit/debit cards including Visa, MasterCard, and other available methods listed during checkout. All transactions are subject to verification and authorization.
      </p>

      <h2>Shipping</h2>
      <p>
        Shipping options and estimated delivery timelines are displayed at checkout. Please note these are estimates and actual delivery may vary. We are not liable for delays due to courier or external issues. Ownership and risk of the products transfer to you upon handover to the shipping provider.
      </p>

      <h2>Returns</h2>
      <p>
        If you’re not satisfied with your purchase, you may return eligible products within 30 days for a refund (excluding original shipping charges). Products must be in unused condition and in original packaging. Return shipping is the customer’s responsibility unless the return is due to our error.
      </p>

      <h2>Warranty</h2>
      <p>
        Some products come with limited warranty coverage. For detailed warranty terms, please refer to the specific product description or our warranty page.
      </p>

      <h2>Not for Resale</h2>
      <p>
        Our products are intended for personal use only. Bulk or commercial purchases for resale are not permitted unless explicitly authorized by ArviLights.
      </p>

      <h2>Governing Law / Jurisdiction</h2>
      <p>
        These Terms shall be governed by and interpreted in accordance with the laws of India. All legal disputes shall be subject to the jurisdiction of courts in [Your City/State, e.g., Hyderabad, Telangana].
      </p>

      <h2>Dispute Resolution</h2>
      <p>
        Any disputes related to these Terms will be resolved through amicable negotiation. If unresolved, disputes may be settled through arbitration under applicable Indian arbitration laws, conducted in English.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold ArviLights harmless from any claims or damages arising from your breach of these Terms or any misuse of the products purchased.
      </p>

      <h2>Entire Agreement</h2>
      <p>
        These Terms constitute the complete and exclusive agreement between ArviLights and the customer, superseding any prior understandings or communications.
      </p>

      <h2>Severability</h2>
      <p>
        If any part of these Terms is held to be unenforceable, the remaining sections will still apply in full force and effect.
      </p>

      <h2>Exclusivity</h2>
      <p>
        All customer rights, obligations, and limitations are outlined within these Terms and cannot be modified unless explicitly agreed in writing by ArviLights.
      </p>

      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
