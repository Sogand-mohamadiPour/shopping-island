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
      question: "چگونه میتوانم یک سفارش ثبت کنم؟",
      answer:
        "به صفحه محصولات بروید, محصول مورد نظر خود را انتخاب کنید, محصول را به سبد خرید اضافه کنید. حال سبد خرید خود را چک و تسویه کنید",
    },
    {
      question: "آیا میتوانم تعداد سفارش از یک محصول را تغییر دهم؟",
      answer:
        "بله. به صورت مستقیم میتوانید تعداد محصول مورد نیاز را توسط دکمه ها کم و یا زیاد کنید",
    },
    {
      question: "چگونه میتوانم محصولم را از سبد خرید پاک کنم؟",
      answer:
        "سبد خرید خود را باز کنید و روی آیکون سطل زباله کنار محصول مورد نظر کلیک کنید محصول سریعا از سبد خرید شما پاک خواهد شد.",
    },
    {
      question: "هزینه بسته بندی و ارسال چقدر است؟",
      answer:
        "در حال حاضر هزینه بسته بندی و ارسال در این فروشگاه رایگان است و مبلغی اضافه بر سبد خرید خود نخواهید دید.",
    },
    {
      question: "چگونه میتوانم یک محصول را مرجوع کنم؟",
      answer:
        "محصول را با توجه به قوانین فروشگاه میتوانید مرجوع کنید. قبل از درخواست مرجوعی حتما چک کنید که محصول در شرایطی که ارسال شد قرار داشته باشد ",
    },
    {
      question: "آیا پرداخت هایم امن هست؟",
      answer:
        "بله. ما پرداخت شما را در تمامی مراحل با تکنولوژی های خود امن نگاه میداریم.",
    },
    {
      question: "چگونه محصول مورد نظر خود را پیدا کنم؟",
      answer:
        "از سرچی که در صفحه محصول قرار داده شده استفاده کنید. همچنین میتوانید در همان صفحه محصولات را طبق دسته بندی مشخص شده فیلتر کنید.",
    },
    {
      question: "چه دسته بندی برای محصولات خود دارید؟",
      answer:
        "در حال حاضر دسته بندی ما شامل لباس مردانه, لباس زنانه, لوازم الکترونیکی و جواهرات هستند., دسته بندی های بیشتر نیز در آینده اضافه خواهد شد.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <h2 className={styles.label}>
          به کمک نیاز دارید؟
        </h2>
        <h1>
          سوالات متداول
        </h1>
        <p>
          تمام سوال ها و نکاتی که قبل از خرید باید به آن توجه کنید
        </p>
      </section>

      <section className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <FaShippingFast />
          </div>
          <div>
            <h3>ارسال سریع</h3>
            <p>
              محصول خود را سالم و سریع دریافت کنید
            </p>
          </div>
        </div>


        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <FaUndo />
          </div>
          <div>
            <h3>قابل مرجوعی</h3>
            <p>
              پروسه مرجوعی آسان و منصفانه
            </p>
          </div>
        </div>
        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <FaCreditCard />
          </div>

          <div>
            <h3>پرداخت امن</h3>
            <p>
              اطلاعات پرداخت شما به صورت امن نزد ما خواهد ماند
            </p>
          </div>
        </div>

      </section>

      <section className={styles.faqSection}>
        <div className={styles.sectionTitle}>
          <FaQuestionCircle />
          <div>
            <span>سوال های متداول</span>
            <h2>چگونه میتوانیم کمکتان کنیم؟</h2>
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
          <span>جواب سوال خود را دریافت نکردید؟</span>
          <h2>
            تیم پشتیبانی ما همراه شماست.
          </h2>
          <p>
            با مشکلی مواجه شدید؟
            تیکت خود را ثبت کنید.
          </p>
        </div>
        <a
          href="mailto:support@shoppinicenter.com"
          className={styles.helpButton}
        >
          ارتباط با پشتیبانی
        </a>
      </section>
    </main>
  );
}

export default About;
