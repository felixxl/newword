import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../assets/scss/components/Footer.scss"

function Footer() {
  const [showProgress, setShowProgress] = useState(false);
  const [email, setEmail] = useState('');

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 200) {
      setShowProgress(true);
    } else {
      setShowProgress(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/newsletter', { email })
      .then((res) => {
        console.log(res.data);
        setEmail('');
        alert('Vous êtes inscrit à la newsletter');
      })
      .catch((err) => {
        console.log(err);
        alert('Une erreur est survenue, réessayez.');
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer>
      {showProgress && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
      <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="subscribe">
        <h3>Abonnez-vous à notre newsletter</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Adresse e-mail</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
          <button type="submit">S'abonner</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer; 