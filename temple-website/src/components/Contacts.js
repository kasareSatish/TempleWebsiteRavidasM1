import "./Contacts.css";
import a from "../images/KMKasare.jpeg";
function Contact() {
  return (
    <>
      <div className="contact">
        <div>
          <img src={a} alt="mobile" />
        </div>
        <div>
          <h1> श्री. केरबा मारोती कसारे</h1>
          <h3>रविदास समाज प्रबोधक </h3>
          <h3>सेवानिवृत्त अधिकारी CRPF</h3>
          <p>पत्ता: प्लॉट क्र. 35, साईप्रसाद नगर तरोडा खुर्द नांदेड 431605</p>
          <h2>संपर्क क्रमांक : 788-9575437</h2>
        </div>
      </div>
    </>
  );
}

export default Contact;
