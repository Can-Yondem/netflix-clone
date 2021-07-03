import React from "react";
import "./footer.css";
import { ImFacebook2, ImTwitter, ImInstagram, ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer-container">
      {/*Sosyal medya butonları*/}
      <div className="social-media">
        <ul className="icon-list">
          <li className="icon-link">
            <a href="https://www.facebook.com/netflixturkiye" target="blank">
              <ImFacebook2 />
            </a>
          </li>
          <li className="icon-link">
            <a href="https://www.instagram.com/netflixturkiye">
              <ImInstagram />
            </a>
          </li>
          <li className="icon-link">
            <a href="https://twitter.com/netflixturkiye">
              <ImTwitter />
            </a>
          </li>
          <li className="icon-link">
            <a href="https://www.youtube.com/channel/UCeZOywU-zg9j3SxYG0FdLtw">
              <ImYoutube />
            </a>
          </li>
        </ul>
      </div>
      {/*Footer linkleri*/}
      <div className="footer-links">
        <ul className="footer-link-list">
          <li className="footer-link">
            <a href="https://www.netflix.com/browse/subtitles">Seslendirme ve Alt Yazı</a>
          </li>
          <li className="footer-link">
            <a href="https://www.netflix.com/browse/audio-description">Sesli Betimleme</a>
          </li>
          <li className="footer-link">
            <a href="https://help.netflix.com/">Yardım Merkezi</a>
          </li>
          <li className="footer-link">
            <a href="https://www.netflix.com/redeem">Hediye Kartları</a>
          </li>
          <li className="footer-link">
            <a href="https://media.netflix.com/">Medya Merkezi</a>
          </li>
          <li className="footer-link">
            <a href="http://ir.netflix.com/">Yardımcı İlişkiler</a>
          </li>
          <li className="footer-link">
            <a href="https://jobs.netflix.com/">İş İmkanları</a>
          </li>
          <li className="footer-link">
            <a href="https://help.netflix.com/legal/termsofuse">Kullanım Koşulları</a>
          </li>
          <li className="footer-link">
            <a href="https://help.netflix.com/legal/privacy">Gizlilik</a>
          </li>
          <li className="footer-link">
            <a href="https://help.netflix.com/legal/notices">Yasal Hükümler</a>
          </li>
          <li className="footer-link">
            <a href="https://www.netflix.com/Cookies">Çerez Tercihleri</a>
          </li>
          <li className="footer-link">
            <a href="https://help.netflix.com/legal/corpinfo">Kurumsal Bilgiler</a>
          </li>
          <li className="footer-link">
            <a href="https://help.netflix.com/contactus">Bize Ulaşın</a>
          </li>
        </ul>
      </div>
      <div className="footer-service">
        <button>Hizmet Kodu</button>
      </div>
      <div className="footer-copyright">
        <span>© 1997-2021 Netflix, Inc.</span>
      </div>
    </div>
  );
};

export default Footer;
