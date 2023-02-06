import React, { useState } from "react";
import Container from "./contact.style";
import useTranslation from "@/app/hooks/useTranslation";
import SMS from "@/app/assets/images/form/sms.svg";
import USER from "@/app/assets/images/form/user.svg";
import Image from "next/image";

const ContactComponent = () => {
  const { t, locale, setLocale } = useTranslation();

  const [Name, setName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Msg, setMsg] = useState<string>("");

  const [FormMsg, setFormMsg] = useState<string>("");

  const sendMessage = async (e: any) => {
    e.preventDefault();
    let uri = `https://dev-psmap-api.meemdev.com/Email/SendEmail?name=${Name}&content=${Msg}&email=${Email}`;

    await fetch(uri, {
      method: "POST",
      mode: "no-cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setFormMsg("Success!");
    });
  };

  return (
    <Container>
      <section className="gettoutch">
        <h3 className="landing__title">{t("contact_title")}</h3>
        <p className="landing__desc">{t("contact_desc")} </p>
        <form className="gettoutch__form" onSubmit={(e) => sendMessage(e)}>
          <div className="custom__input">
            <div className="input__group pe-2 ps-2">
              <Image
                width={30}
                height={50}
                src={USER}
                alt=""
                className="img-fluid"
              />
              <input
                type="text"
                id="name"
                placeholder={t("contact_form").name}
                required
                value={Name}
                onChange={(e) => {
                  setFormMsg("");
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="custom__input">
            <div className="input__group pe-2 ps-2">
              <Image
                width={30}
                height={50}
                src={SMS}
                alt=""
                className="img-fluid"
              />{" "}
              <input
                type="email"
                id="mail"
                placeholder={t("contact_form").email}
                required
                value={Email}
                onChange={(e) => {
                  setFormMsg("");
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="custom__input">
            <div className="input__group">
              <textarea
                name=""
                id="contact-msg"
                cols={30}
                rows={5}
                placeholder={t("contact_form").question}
                required
                value={Msg}
                onChange={(e) => {
                  setFormMsg("");
                  setMsg(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <small
            className="text-success fullname-msg fw-bold fs-4"
            id="form_msg"
          >
            {FormMsg}
          </small>
          <div className="custom__input mt-3">
            <button
              type="submit"
              className="btn w-100"
              style={{ backgroundColor: "#ff2800", color: "#fff" }}
            >
              {t("contact_form").submit}
            </button>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default ContactComponent;
