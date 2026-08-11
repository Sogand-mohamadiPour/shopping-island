import { useState } from "react";
import {
  FaChevronDown,
  FaQuestionCircle,
  FaShippingFast,
  FaUndo,
  FaCreditCard,
} from "react-icons/fa";

import styles from "../css/About.module.css";

function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "Browse our products, open the product you like, and add it to your basket. You can then review your basket and continue to checkout.",
    },
    {
      question: "Can I change the quantity of a product?",
      answer:
        "Yes. You can increase or decrease the quantity directly from your basket using the plus and minus buttons.",
    },
    {
      question: "How can I remove a product from my basket?",
      answer:
        "Open your basket and click the trash icon next to the product you want to remove. The product will immediately be removed from your basket.",
    },
    {
      question: "How much does shipping cost?",
      answer:
        "Shipping is currently free on all orders. There are no additional shipping fees added to your order.",
    },
    {
      question: "Can I return a product?",
      answer:
        "Yes. Products can be returned according to our return policy. Make sure the product is in its original condition before requesting a return.",
    },
    {
      question: "Are my payment details secure?",
      answer:
        "Yes. We use secure payment processing to protect your payment information and personal data during checkout.",
    },
    {
      question: "How can I find a specific product?",
      answer:
        "Use the search bar on the Products page to quickly find products by their name. You can also filter products by category.",
    },
    {
      question: "What categories of products are available?",
      answer:
        "Our store currently includes Men's Clothing, Women's Clothing, Electronics, Jewelry, and other products that may be added in the future.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.label}>
          NEED SOME HELP?
        </span>
        <h1>
          Frequently Asked Questions
        </h1>
        <p>
          Everything you need to know about shopping,
          orders, delivery, and your basket.
        </p>
      </section>

      <section className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <FaShippingFast />
          </div>
          <div>
            <h3>Fast Delivery</h3>
            <p>
              Get your products delivered quickly
              and safely.
            </p>
          </div>
        </div>


        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <FaUndo />
          </div>
          <div>
            <h3>Easy Returns</h3>
            <p>
              Simple return process for eligible
              products.
            </p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <FaCreditCard />
          </div>

          <div>
            <h3>Secure Payment</h3>
            <p>
              Your payment information stays
              protected.
            </p>
          </div>
        </div>

      </section>

      <section className={styles.faqSection}>
        <div className={styles.sectionTitle}>
          <FaQuestionCircle />
          <div>
            <span>QUESTIONS & ANSWERS</span>
            <h2>How can we help?</h2>
          </div>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                className={`${styles.faqItem} ${
                  isOpen ? styles.active : ""
                }`}
                key={index}
              >
                <button
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                >
                  <span>
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`${styles.chevron} ${
                      isOpen ? styles.rotate : ""
                    }`}
                  />
                </button>
                <div
                  className={`${styles.answer} ${
                    isOpen ? styles.answerOpen : ""
                  }`}
                >
                  <p>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.help}>
        <div>
          <span>STILL HAVE QUESTIONS?</span>
          <h2>
            We're here to help.
          </h2>
          <p>
            Can't find what you're looking for?
            Get in touch with our support team.
          </p>
        </div>
        <a
          href="mailto:support@shoppinicenter.com"
          className={styles.helpButton}
        >
          Contact Support
        </a>
      </section>
    </main>
  );
}

export default About;
