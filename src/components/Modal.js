import React from 'react'

const Modal = ({confirmConsent}) => {

  return (
    <section className="cookiesModal">
      <h1>Privacy and Cookies</h1>
    
      <div className="flex">
        <p>
          By continuing to use the website, you agree to cookies being stored on your device in accordance with our <a href="/privacy">privacy policy</a>.
        </p>

        <div>
          <div className="btn btn-sm btn-success" onClick={() => confirmConsent()}>Accept</div>
        </div>
      </div>
    </section>
  )
}

export default Modal
