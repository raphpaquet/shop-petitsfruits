import React from "react";
// import "./Contact.scss";
// import { useForm } from "react-hook-form";
// import FloatingActionButtons from "./FloatingButton";
// import { init } from "emailjs-com";
// init("user_ufZkh7dVPCrG2nUIrsPby");

export default function ContactUs(props) {
  // const { register, handleSubmit, errors } = useForm();

  // const onSubmit = (data, r) => {
  //   alert(`Thank you for your message from ${data.email}`);
  //   const templateId = process.env.REACT_APP_TEMPLATE_ID;
  //   const serviceID = process.env.REACT_APP_SERVICE_ID;
  //   sendFeedback(serviceID, templateId, {
  //     from_name: data.name,
  //     message_html: data.comment,
  //     reply_to: data.email,
  //   });
  //   r.target.reset();
  // };

  // const sendFeedback = (serviceID, templateId, variables) => {
  //   window.emailjs
  //     .send(serviceID, templateId, variables)
  //     .then((res) => {
  //       console.log("Email successfully sent!");
  //     })
  //     .catch((err) =>
  //       console.error(
  //         "There has been an error.  Here some thoughts on the error that occured:",
  //         err
  //       )
  //     );
  // };

  // let content = {
  //   english: {
  //     title: "Contact Me",
  //     name: "Full Name",
  //     email: "Your Email",
  //     subject: "Subject",
  //     message: "Your Message",
  //     errorEmail: "invalid email address",
  //     errorName: "Please enter your name",
  //     errorMsg: "oops, you forgot your message!",
  //     click: "SEND",
  //   },
  //   french: {
  //     title: "Contactez-Moi",
  //     name: "Nom Complet",
  //     email: "Votre Courriel",
  //     subject: "Object",
  //     message: "Votre Message",
  //     errorEmail: "Adresse courriel invalide",
  //     errorName: "Merci d'écrire votre nom",
  //     errorMsg: "oops, vous avez oublié votre message!",
  //     click: "ENVOYER",
  //   },
  // };

  // props.language === "English"
  //   ? (content = content.english)
  //   : (content = content.french);
  return (
    <div className="contact">
      <form className="form">
      <h2 className="orange">Contactez-Moi</h2>
        <input
          placeholder='Votre Nom'
          name="name"
          ref={({
            required: '',
          })}
        />
        <br />
        {/* {errors.name && errors.name.message} */}
        <br />

        <input
          placeholder='Votre Courriel'
          name="email"
          ref={{
            required: ``,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: ``,
            },
          }}
        />
        <br />
        {/* {errors.email && errors.email.message} */}
        <br />

        <textarea
          placeholder='Votre Message'
          name="comment"
          ref={{
            required: true,
          }}
        />
        <br />
        {/* {errors.comment && `${content.errorMsg}`} */}
        <br />
        <div>
          <button className="primary" type="submit" variant="contained">
            <span>Envoyer !</span>
          </button>
        </div>
      </form>
    </div>
  );
}
