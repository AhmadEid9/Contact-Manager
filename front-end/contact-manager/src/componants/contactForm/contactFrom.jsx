import "./style.css";
import axios from 'axios';
const ContactForm = () => {
  let formData = {
    name: '',
    number: '',
    longitude: '',
    lattitude: '',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    formData = { ...formData, [name]: value };
  };

  const handleSubmit = async(e) => {
    console.log(formData);
    axios.post("http://localhost:8000/api/contact", formData).catch((e) => (console.log(e)));

  };

  return (
    <div className='contact-form'>
      <div className='form-group'>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="number">Number:</label>
        <input
          type="text"
          id="number"
          name="number"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="longitude">Longitude:</label>
        <input
          type="number"
          id="longitude"
          name="longitude"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lattitude">Lattitude:</label>
        <input
          type="number"
          id="lattitude"
          name="lattitude"
          onChange={handleChange}
          required
        />
      </div>
      <button type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ContactForm;