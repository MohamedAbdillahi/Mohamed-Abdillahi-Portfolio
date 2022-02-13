import { FaPhone, FaEnvelope} from "react-icons/fa"

const Contacts = () => {
  return (
    <>
      <section className="contacts">
      <h1>Contacts</h1>
        <ul>
           <li><a href="mailto:mohamed246@live.com"><FaEnvelope/>{" "}mohamed246@live.com</a></li>
           <li><a href="tel:07506263559"><FaPhone/>{" "}07506263559</a></li>
        </ul>
      </section>

    </>
  )
}

export default Contacts
