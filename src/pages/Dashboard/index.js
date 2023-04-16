import React from "react";
// import DatePickers from "shared/components/DatePickers";
import Button from "shared/components/Button";
import { Input } from "shared/components";
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  // const [endDate, setEndDate] = React.useState(null);
  return (
    <div className="col-6 w-100">
      <div className={styles.Home}>
        <Button background="#14458D" value="Next" color="#ffffff" />
        {/* <DatePickers
          selected={endDate}
          id="expireDate"
          name="expireDate"
          minDate={new Date().setDate(new Date().getDate() + 1)}
          onChange={(value2) => {
            setEndDate(value2);
          }}
          placeholderText={endDate || `From date`}
        /> */}
      </div>
      <Input icon={true} placeholder="You are a good boy" />
    </div>
  );
};

export default Dashboard;
