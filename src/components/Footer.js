import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
     
        <a class="footer-a" href="#" id="guidelines">
          Guidelines
        </a>
        <a class="footer-a" href="#">
          FAQ
        </a>
        <a class="footer-a" href="#">
          Lists
        </a>
        <a class="footer-a" href="#">
          API
        </a>
        <a class="footer-a" href="#">
          Security
        </a>
        <a class="footer-a" href="#">
          Legal
        </a>
        <a class="footer-a" href="#">
          Apply to CN
        </a>
        <a class="footer-a" href="https://github.com/EmelineLmr/coderNews#">
          Contact
        </a>
    
      <div class="col-12 text-md-right" id="copyright">
        {/* warum funktioniert das text-md-right nicht? */}
        2021 © Copyright: Emeline, Alicia, Tim {/* was bedeutet diese {" "}? */}
      </div>
    </footer>
  );
};

export default Footer;
