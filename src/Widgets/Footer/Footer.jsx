import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

import {
  FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn,
  FaApple, FaGooglePlay, FaChevronDown, FaCcVisa,
  FaCcMastercard, FaBarcode
} from 'react-icons/fa6';

import { RiShieldCheckLine, RiSecurePaymentLine, RiGoogleFill } from 'react-icons/ri';
import { PiPixLogo } from 'react-icons/pi';


export default function Footer() {
  const [activeAccordion, setActiveAccordion] = useState({
    novidades: false,
    marcasExclusivas: false,
    categorias: false,
    marcas: false,
    ofertas: false,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleAccordion = (key) => {
    if (isMobile) {
      setActiveAccordion((prev) => ({ ...prev, [key]: !prev[key] }));
    }
  };

  const mobileHiddenClass = isMobile
    ? styles.linkListMobileHidden
    : styles.linkListMobileVisible;

  return (
    <footer className={styles.footerGlobal}>
      <div className={styles.container}>
        <section className={styles.firstSection}>
          <div className={styles.helpCard}>
            <h3>Como podemos ajudar você?</h3>
            <p>
              Conheça mais sobre nossa empresa, políticas de privacidade e desfrute da melhor experiência de atendimento do mercado.
            </p>
            <button className={styles.btnContact}>Fale conosco</button>
            <div className={styles.cardIconWatermark}>
              <RiShieldCheckLine />
            </div>
          </div>

          <div className={styles.topColumnsGrid}>
            <div>
              <h5 className={styles.columnTitle}>Atendimento</h5>
              <ul className={styles.linkList}>
                <li><a href="#central">Central de atendimento</a></li>
                <li><a href="#imprensa">Assessoria de imprensa</a></li>
                <li><a href="#ouvidoria">Ouvidoria da marca</a></li>
              </ul>
            </div>

            <div>
              <h5 className={styles.columnTitle}>Onde estamos</h5>
              <div className={styles.socialRow}>
                <a href="#fb" className={styles.socialIcon} aria-label="Facebook"><FaFacebookF /></a>
                <a href="#ig" className={styles.socialIcon} aria-label="Instagram"><FaInstagram /></a>
                <a href="#yt" className={styles.socialIcon} aria-label="YouTube"><FaYoutube /></a>
                <a href="#in" className={styles.socialIcon} aria-label="LinkedIn"><FaLinkedinIn /></a>
              </div>
              <div className={styles.storeButtons}>
                <a href="#appstore" className={styles.storeBtn}>
                  <FaApple />
                  <div className={styles.storeText}>
                    <span>Disponível na</span>
                    <span>App Store</span>
                  </div>
                </a>
                <a href="#playstore" className={styles.storeBtn}>
                  <FaGooglePlay />
                  <div className={styles.storeText}>
                    <span>Disponível no</span>
                    <span>Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h5 className={styles.columnTitle}>Políticas</h5>
              <ul className={styles.linkList}>
                <li><a href="#privacidade">Aviso de privacidade</a></li>
                <li><a href="#cookies">Política de Cookies</a></li>
                <li><a href="#entrega">Política de entrega</a></li>
                <li><a href="#compra">Política de compra</a></li>
              </ul>
            </div>

            <div>
              <h5 className={styles.columnTitle}>Institucional</h5>
              <ul className={styles.linkList}>
                <li><a href="#sustentabilidade">Sustentabilidade</a></li>
                <li><a href="#empresa">Nossa Empresa</a></li>
                <li><a href="#termos">Termos e Condições</a></li>
                <li><a href="#trabalhe">Trabalhe Conosco</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.secondSection}>
          <div className={styles.navGrid}>
            <div className={styles.navColumn}>
              <div className={styles.accordionHeader} onClick={() => toggleAccordion("novidades")}>
                <h4>Novidades</h4>
                <FaChevronDown className={`${styles.accordionIcon} ${activeAccordion.novidades ? styles.rotate : ""}`} />
              </div>
              <ul className={`${styles.linkList} ${mobileHiddenClass} ${!activeAccordion.novidades && isMobile ? styles.linkListMobileHidden : styles.linkListMobileVisible}`}>
                <li><a href="#descontos">Clube de Descontos</a></li>
                <li><a href="#saude">Plano de Saúde Pet</a></li>
                <li><a href="#repet">Programa Repet</a></li>
                <li><button className={styles.expandBtn}>Expandir <FaChevronDown /></button></li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <div className={styles.accordionHeader} onClick={() => toggleAccordion("marcasExclusivas")}>
                <h4>Marcas Exclusivas</h4>
                <FaChevronDown className={styles.accordionIcon} />
              </div>
              <ul className={`${styles.linkList} ${!activeAccordion.marcasExclusivas && isMobile ? styles.linkListMobileHidden : styles.linkListMobileVisible}`}>
                <li><a href="#meau">Meau</a></li>
                <li><a href="#nutrilus">Nutrilus</a></li>
                <li><a href="#true">True</a></li>
                <li><button className={styles.expandBtn}>Expandir <FaChevronDown /></button></li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <div className={styles.accordionHeader} onClick={() => toggleAccordion("categorias")}>
                <h4>Categorias</h4>
                <FaChevronDown className={styles.accordionIcon} />
              </div>
              <ul className={`${styles.linkList} ${!activeAccordion.categorias && isMobile ? styles.linkListMobileHidden : styles.linkListMobileVisible}`}>
                <li><a href="#caes">Ração para Cachorro</a></li>
                <li><a href="#gatos">Ração para Gato</a></li>
                <li><a href="#antipulgas">Antipulgas e Carrapatos</a></li>
                <li><button className={styles.expandBtn}>Expandir <FaChevronDown /></button></li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <div className={styles.accordionHeader} onClick={() => toggleAccordion("marcas")}>
                <h4>Marcas</h4>
                <FaChevronDown className={styles.accordionIcon} />
              </div>
              <ul className={`${styles.linkList} ${!activeAccordion.marcas && isMobile ? styles.linkListMobileHidden : styles.linkListMobileVisible}`}>
                <li><a href="#royal">Royal Canin</a></li>
                <li><a href="#golden">Golden</a></li>
                <li><a href="#premier">Premier</a></li>
                <li><button className={styles.expandBtn}>Expandir <FaChevronDown /></button></li>
              </ul>
            </div>

            <div className={styles.navColumn}>
              <div className={styles.accordionHeader} onClick={() => toggleAccordion("ofertas")}>
                <h4>Ofertas</h4>
                <FaChevronDown className={styles.accordionIcon} />
              </div>
              <ul className={`${styles.linkList} ${!activeAccordion.ofertas && isMobile ? styles.linkListMobileHidden : styles.linkListMobileVisible}`}>
                <li><a href="#cupons">Cupons de Desconto</a></li>
                <li><a href="#outlet">Outlet Especial</a></li>
                <li><a href="#lancamentos">Novos Produtos</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.thirdSection}>
          <div>
            <h5 className={styles.trustTitle}>Formas de Pagamento</h5>
            <div className={styles.badgeGroup}>
              <div className={styles.paymentBadge} title="Visa"><FaCcVisa style={{ color: "#1A1F71" }} /></div>
              <div className={styles.paymentBadge} title="Mastercard"><FaCcMastercard style={{ color: "#EB001B" }} /></div>
              <div className={styles.paymentBadge} title="Pix"><PiPixLogo style={{ color: "#32BCAD" }} /></div>
              <div className={styles.paymentBadge} title="Boleto Bancário"><FaBarcode style={{ color: "#2B2B2B" }} /></div>
            </div>
          </div>

          <div>
            <h5 className={styles.trustTitle}>Segurança</h5>
            <div className={styles.badgeGroup}>
              <div className={styles.securityBadge}>
                <RiGoogleFill style={{ color: "#EA4335", marginRight: "6px" }} />
                <div className={styles.securityTextBadge}>
                  Safe <span>Browsing</span>
                </div>
              </div>
              <div className={styles.securityBadge}>
                <RiSecurePaymentLine style={{ color: "#16A34A", marginRight: "6px" }} />
                <div className={styles.securityTextBadge}>
                  Pagamento <span>Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}