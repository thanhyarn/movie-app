import React from "react";
import "./style.css";

const CTA = () => {
  return (
    <section class="cta">
      <div class="container">
        <div class="title-wrapper">
          <h2 class="cta-title">Trial start first 30 days.</h2>

          <p class="cta-text">
            Enter your email to create or restart your membership.
          </p>
        </div>

        <form action="" class="cta-form">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            class="email-field"
          />

          <button type="submit" class="cta-form-btn">
            Get started
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
