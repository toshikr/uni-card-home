import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.landingSection}>
        <video autoPlay muted loop>
          <source src="/animations/homeAnimation.mp4" type="video/mp4" />
        </video>
        <div className={styles.headerSection}>
          <div className={styles.logo}>
            <img src="/icons/logo.svg" alt="Uni Cards" />
          </div>
          <div className={styles.payButton}>Uni Paycheck</div>
          <div className={styles.hamburgerIcon}><img src = "/icons/hamburger-menu.svg" alt= "Menu"></img></div>
        </div>
        <div className={styles.bodySection}>
          <div className={styles.bodyLeftWrapper}>
            <div className={styles.primaryText}>
              <strong>NX Wave.</strong> The next-gen credit card for those who
              love rewards.
            </div>
            <div className={styles.secondaryText}>
              <span>1% Cashback</span>
              <span>
                <img src="/icons/plus.svg" alt="Plus" />
              </span>
              <span>5x Rewards</span>
              <span>
                <img src="/icons/plus.svg" alt="Plus" />
              </span>
              <span>Zero Forex Markup</span>
            </div>
            <div className={styles.applyField}>
              <div className={styles.inputForm}>
                <div className={styles.applyFieldInput}>
                  <input type="text" placeholder="Enter Phone Number" />
                </div>
                <div className={styles.applyButton}>
                <button className={styles.mainButton}>Apply Now</button>

                </div>
              </div>
            </div>
            <div className={styles.checkBox}>
              <div className={styles.checkBoxContainer}>
                <input type="checkbox" checked={false} />
              </div>
              <div className={styles.checkText}>
                You agree to be contacted by Uni Cards over Call, SMS, Email or
                WhatsApp to guide you through your application.
              </div>
            </div>
          </div>
          <div className={styles.bodyRightWrapper}>
            <div className={styles.cardImage}>
              <img src="/images/uni_cards.png" alt="Uni Cards" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}