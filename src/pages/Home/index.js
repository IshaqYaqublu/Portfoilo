import React from "react";
import styles from "./Home.module.scss";
import Button from "shared/components/Button";
import DatePickers from "shared/components/DatePickers";

const Home = () => {
  const [endDate, setEndDate] = React.useState(null);
  return (
    <div className="col-6">
      <div className={styles.Home}>
        <Button background="#14458D" value="Next" color="#ffffff" />
        <DatePickers
          selected={endDate}
          id="expireDate"
          name="expireDate"
          minDate={new Date().setDate(new Date().getDate() + 1)}
          onChange={(value2) => {
            setEndDate(value2);
          }}
          placeholderText={endDate || `From date`}
        />
      </div>
    </div>
  );
};

export default Home;
