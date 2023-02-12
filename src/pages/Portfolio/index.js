import { TextField } from "@mui/material";
import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Spinner } from "reactstrap";
import { RenderIf, MuiCard } from "shared/components";
import styles from "./Portfoilo.module.scss";

const Portfolio = () => {
  const [user, setUser] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [isLoading, setisLoading] = React.useState(true);
  const { register, handleSubmit } = useForm({ defaultValues: { search: "" } });

  React.useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then(({ data }) => {
        setUser(data.results);
        setisLoading(false);
      })
      .catch(console.error);
  }, []);

  const filterUser = user?.filter((person) =>
    person.name.first.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className={styles.Portfolio}>
      <h1 className={styles.PortfolioTitle}>Portfoilo</h1>
      <div className={styles.PortfolioForm}>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <TextField
            type="text"
            {...register("search", { required: true })}
            placeholder="Ad daxil edin.."
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button type="submit"> Search</Button>
        </form>
      </div>
      <div className={styles.PortfolioCard}>
        <RenderIf condition={isLoading}>
          <Spinner />
        </RenderIf>
        <RenderIf condition={!isLoading}>
          {filterUser?.map((item) => (
            <MuiCard
              key={item?.phone}
              details={item?.email}
              image={item?.picture?.medium}
              name={item?.name?.first + item?.name?.last}
            />
          ))}
        </RenderIf>
      </div>
    </div>
  );
};

export default Portfolio;
