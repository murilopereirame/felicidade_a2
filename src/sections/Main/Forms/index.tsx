import { useCallback, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import InputMask from "react-input-mask";
import "./styles.css";
import axios from "axios";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCeluar] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const history = useHistory();

  const handleForm = useCallback(() => {
    console.log(name, email, celular);
    fetch("https://handler.klicksend.com.br/subscription/95urbML", {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "content-type": "application/x-www-form-urlencoded",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: `email=${email}&first_name=${name}&phone=${celular}&b_95urbML=`,
      method: "POST",
      mode: "cors",
    })
      .then((rt) => {
        console.log("RR", rt);
      })
      .catch((err) => {
        console.log(err);
      });
    //history.push("/sucesso");
  }, [history, name, email, celular]);

  return (
    <div className="fs-container">
      <p>INSIRA SEUS DADOS ABAIXO PARA ACESSO IMEDIATO A AULA</p>
      <form
        klicksend-form-id="95urbML"
        method="post"
        action="https://handler.klicksend.com.br/subscription/95urbML"
        id="leading"
        ref={formRef}
      >
        <input
          type="text"
          name="first_name"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
          placeholder="Primeiro Nome"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          placeholder="E-mail"
        />
        <InputMask
          mask="(99) 9 9999-9999"
          name="phone"
          value={celular}
          onChange={(evt) => {
            setCeluar(evt.target.value);
          }}
        >
          {(inputProps: HTMLInputElement[]) => (
            <input {...inputProps} type="phone" placeholder="Celular" />
          )}
        </InputMask>
      </form>
      <div className="fs-wrapper">
        <div
          onClick={() => {
            formRef.current?.submit();
          }}
          className="fs-btn"
        >
          <span>QUERO ASSISTIR A AULA!</span>
        </div>
        <span>Nossa equipe é contra spam, fique tranquilo.</span>
      </div>
    </div>
  );
};

export default Forms;
