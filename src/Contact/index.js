import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <div className="pane">
        <div className="pane-container">
          <h1>Kontakt</h1>
          <p>
            Du hast Fragen oder ein anderes Anliegen, das Du uns mitteilen
            möchtest? Erzähl es uns hier im Kontaktformular!
          </p>
          <form className="card">
            <h2 className="mt-2">Kontakformular:</h2>
            <div className="form-input">
              <label>Name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-input">
              <label>Mail Adresse</label>
              <input type="email" id="mail" />
              <small>Damit wir dich erreichen können.</small>
            </div>
            <div className="form-input">
              <label>Deine Nachricht an uns:</label>
              <textarea rows="5" />
            </div>
            <button type="submit" className="btn btn-home">
              Absenden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
