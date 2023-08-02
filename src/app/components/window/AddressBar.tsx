import Image from "next/image";
import styles from "./window.module.css";
import localFont from "next/font/local";

const tahoma = localFont({ src: "../../fonts/tahoma/tahoma.ttf" });

const AddressBar = ({ url }: string) => {
  return (
    <section className={styles.addressBar}>
      <p className={`${tahoma.className} ${styles.addressLabel}`}>
        A<u>d</u>dress
      </p>
      <section className={styles.urlBar}>
        <img
          className={styles.urlBarIcon}
          src={"/icons/internetExplorerIcon.png"}
          alt={"Internet Explorer Icon"}
        />
        <p className={`${tahoma.className} ${styles.urlBarLabel}`}>{url}</p>
      </section>
      <div
        className={styles.popOutButtonContainer}
        onClick={() => window.open(url, "_blank", "noreferrer")}
        title="Open This Window in a New Tab"
      >
        <Image
          className={styles.popOutButton}
          src={"/window/popOutWindow.svg"}
          alt={"Pop Out Button"}
          width={0}
          height={0}
        />
      </div>
    </section>
  );
};

export default AddressBar;