import RatingForm from '@/components/RatingForm/RatingForm';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <p className={styles.title}>hello world</p>
      <RatingForm />
    </>
  );
}
