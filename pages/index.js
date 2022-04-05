import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1>Employee App</h1>
        <ul className={styles.list}>
          <li>Make a custom hook for fetching the data</li>
          <li>Create React Hook Form</li>
          <li>Use React Query Mutation to update data</li>
          <li>Use ky-data-fetcher</li>
          <li>Use ky-data-fetcher2</li>
          <li>Use ky-data-fetcher3</li>
          <li>Delete Data</li>
        </ul>
      </div>
    </>
  );
}
