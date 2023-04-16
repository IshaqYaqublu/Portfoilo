import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Input, RenderIf } from "shared/components";
import { Logo } from "shared/components/Icons";
import { Country } from "./data";
import styles from "./Login.module.scss";

const Login = () => {
  const [passwordShow, setPasswordShow] = React.useState(false);

  const handlerSeeText = () => {
    setPasswordShow((current) => !current);
  };
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email formatı yanlışdır.")
      .min(3, "Ən az 3 simvol olmalıdır.")
      .max(50, "Ən çox 50 simvol ola bilər.")
      .required("Email boş ola bilməz."),
    password: Yup.string()
      .min(3, "Ən az 3 simvol olmalıdır.")
      .max(50, "Ən çox 50 simvol ola bilər.")
      .required("Şifrə boş ola bilməz."),
  });

  const formik = useFormik({
    validationSchema: LoginSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const isLoading = true;
  return (
    <div className={`${styles.Login} col-lg-12 col-12 d-flex  w-100`}>
      <div
        className={`${styles.LoginLeft} col-lg-6 col-6 d-flex flex-column justify-content-between`}
      >
        <div className={styles.LoginLeftLogo}>
          <Logo />
          <h1>Trans-Caspian International East-West Middle Corridor </h1>
        </div>
        <div className={styles.LoginLeftAbout}>
          <h1>Slogan Header Slogan Header</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </p>
          <div className={styles.LoginLeftAboutCountry}>
            {Country.map((item) => (
              <h2 key={item?.id} role="button">
                <span> {item?.icon}</span>
                <p>{item?.inner}</p>
              </h2>
            ))}
          </div>
        </div>
        <div className={styles.LoginLeftYear}>
          ©2023 Lorem ispum. All rights reserved.
        </div>
      </div>
      <div className={`${styles.LoginRight} col-lg-6 col-6`}>
        <h6 style={{ visibility: "hidden" }}>.</h6>
        <form onSubmit={formik.handleSubmit} className={styles.LoginRightInput}>
          <div className={styles.LoginRightInputEmail}>
            <p>Email</p>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="E-mail daxil edin"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="w-100"
            />
          </div>
          <div className="text-center text-danger ">{formik.errors.email}</div>
          <div className={styles.LoginRightInputPassword}>
            <p>Parol</p>
            <Input
              type={passwordShow ? "text" : "password"}
              placeholder="Şifrəni daxil edin"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              className="w-100"
            />
            <RenderIf condition={!passwordShow}>
              <VisibilityOff role="button" onClick={handlerSeeText} />
            </RenderIf>
            <RenderIf condition={passwordShow}>
              <Visibility role="button" onClick={handlerSeeText} />
            </RenderIf>
          </div>

          <a href="#Forgot your password?">Forgot your password?</a>
          <div className="text-center text-danger">
            {formik.errors.password}
          </div>
          <div className={styles.LoginRightInputButton}>
            <Button
              type="submit"
              color="#ffffff"
              value="Login"
              isLoading={!isLoading}
              background="#14458D"
            />
          </div>
        </form>
        <div className={styles.LoginRightCrocusoft}>
          <p>
            {" "}
            Site by <a href="https://crocusoft.com/">Crocusoft LLC</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
