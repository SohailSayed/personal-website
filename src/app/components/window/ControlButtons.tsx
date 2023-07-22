import Image from "next/image";
import styles from "./window.module.css";
import { useWindowContext } from "@/app/WindowContext";

interface ButtonProps {
  src: string;
  alt: string;
}

const ControlButtons = () => {
  const defaultClicks = [false, false, false, false];

  const { isClicked, setIsClicked } = useWindowContext();
  const { isMaximized, setIsMaximized } = useWindowContext();

  const buttonList = ["minimize", "restore", "maximize", "close"];

  const ControlButton = ({ src, alt }: ButtonProps) => {
    const buttonIndex = buttonList.indexOf(alt);

    const handleClickDown = (clicks: boolean[]) => {
      setIsClicked(clicks);
    };
    const handleClickUp = (clicks: boolean[]) => {
      setIsClicked(clicks);
      if (alt == "maximize") {
        setIsMaximized(true);
      }
      if (alt == "restore") {
        setIsMaximized(false);
      }
    };
    return (
      <Image
        className={
          isClicked[buttonIndex]
            ? styles.controlButtonClicked
            : styles.controlButton
        }
        src={src}
        alt={alt}
        width={0}
        height={0}
        onMouseDown={() => {
          const clickedIndex = [...defaultClicks];
          clickedIndex[buttonIndex] = true;
          handleClickDown(clickedIndex);
        }}
        onMouseUp={() => {
          const clickedIndex = [...defaultClicks];
          handleClickUp(clickedIndex);
        }}
      />
    );
  };
  return (
    <section className={styles.controlButtons}>
      <ControlButton src="/window/minimizeButton.svg" alt="minimize" />
      {isMaximized ? (
        <ControlButton src="/window/restoreButton.svg" alt="restore" />
      ) : (
        <ControlButton src="/window/maximizeButton.svg" alt="maximize" />
      )}
      <ControlButton src="/window/closeButton.svg" alt="close" />
    </section>
  );
};

export default ControlButtons;
