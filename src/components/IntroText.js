import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import styles from './IntroText.module.css'

const IntroText = React.memo(() => {
  console.log("hallo");
  return (
    <Card className={styles.introtext}>
      <h1>Delicious Food, Delivered To You</h1>
    </Card>
  );
});

export default IntroText
