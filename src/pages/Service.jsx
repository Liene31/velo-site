import styles from "./Service.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function Service() {
  const { t } = useTranslation();

  return (
    <main className={styles.servicesPage}>
      <section className={styles.serviceHero}>
        <h1>{t("service.title")}</h1>
        <p>{t("service.para")}</p>
        <Link className={styles.cta} to="booking">
          {t("service.cta")}
        </Link>
      </section>

      <section className={styles.serviceWrapper}>
        <div className={styles.serviceCard}>
          <h2>{t("service.repair")}</h2>
          <ul>
            <li>{t("service.repairList.brakes")}</li>
            <li>{t("service.repairList.gears")}</li>
            <li>{t("service.repairList.tire")}</li>
            <li>{t("service.repairList.wheel")}</li>
            <li>{t("service.repairList.chain")}</li>
          </ul>
        </div>

        <div className={styles.serviceCard}>
          <h2>{t("service.maintenance")}</h2>
          <ul>
            <li>{t("service.maintenanceList.inspection")}</li>
            <li>{t("service.maintenanceList.drivetrain")}</li>
            <li>{t("service.maintenanceList.safety")}</li>
            <li>{t("service.maintenanceList.torque")}</li>
            <li>{t("service.maintenanceList.wash")}</li>
          </ul>
        </div>
      </section>

      <section className={styles.pricingWrapper}>
        <div className={styles.priceCard}>
          <h3>{t("service.pricing.basic.title")}</h3>
          <p className={styles.price}>€49</p>
          <ul>
            <li>{t("service.pricing.basic.list.brakes")}</li>
            <li>{t("service.pricing.basic.list.gears")}</li>
            <li>{t("service.pricing.basic.list.chain")}</li>
          </ul>
        </div>

        <div className={styles.priceCard}>
          <h3>{t("service.pricing.standard.title")}</h3>
          <p className={styles.price}>€79</p>
          <ul>
            <li>{t("service.pricing.standard.list.inspection")}</li>
            <li>{t("service.pricing.standard.list.tuning")}</li>
            <li>{t("service.pricing.standard.list.drivetrain")}</li>
          </ul>
        </div>

        <div className={styles.priceCard}>
          <h3>{t("service.pricing.full.title")}</h3>
          <p className={styles.price}>€119</p>
          <ul>
            <li>{t("service.pricing.full.list.overhaul")}</li>
            <li>{t("service.pricing.full.list.cleaning")}</li>
            <li>{t("service.pricing.full.list.adjustments")}</li>
          </ul>
        </div>
      </section>

      <ul className={styles.priceList}>
        <li>
          <span>{t("service.pricing.extras.flatTire")}</span>
          <span>€15</span>
        </li>
        <li>
          <span>{t("service.pricing.extras.brake")}</span>
          <span>€20</span>
        </li>
        <li>
          <span>{t("service.pricing.extras.gear")}</span>
          <span>€25</span>
        </li>
        <li>
          <span>{t("service.pricing.extras.wheel")}</span>
          <span>€30</span>
        </li>
        <li>
          <span>{t("service.pricing.extras.chain")}</span>
          <span>€35</span>
        </li>
      </ul>

      <section className={styles.booking}>
        <h2>{t("service.booking.title")}</h2>
        <p>{t("service.booking.text")}</p>
        <Link className={styles.cta} to="booking">
          {t("service.booking.cta")}
        </Link>
      </section>
    </main>
  );
}
