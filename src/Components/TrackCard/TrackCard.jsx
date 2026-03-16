import styles from "./TrackCard.module.css";

export default function TrackCard() {
  const cardStyle = {
    //or in module css? Yes
  };

  return (
    <>
      <div>
        <img
          src="https://images.pexels.com/photos/36183149/pexels-photo-36183149.jpeg"
          alt="placeholder img"
        />
      </div>
      <h2 className={styles.track}>Title Track</h2>
      <p>Artist name</p>
    </>
  );
}
