import './App.css';
import './styles/Formulas.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Image from './components/Image';
import ClientCase from './components/ClientCase';
import TextBox from './components/TextBox';
import ImgLine from './components/ImgLine';
import Footer from './components/Footer';
import bgImageBig from "./images/desktop/image-transform.jpg";
import bgImageSmall from "./images/mobile/image-transform.jpg";
import bgImage2Big from "./images/desktop/image-stand-out.jpg";
import bgImage2Small from "./images/mobile/image-stand-out.jpg";
import bgImage3Big from "./images/desktop/image-graphic-design.jpg";
import bgImage4Big from "./images/desktop/image-photography.jpg";

function App() {
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const header1 = "Graphic Design";
  const passage1 = "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.";

  const header2 = "Photography";
  const passage2 = "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.";

  const header3 = "Transform your brand";
  const passage3 = "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.";

  const header4 = "Stand out to the right audience";
  const passage4 = "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we will build and extend your brand in digital places.";

  const textColor1 = "var(--dark-desaturated-cyan)";
  const textColor2 = "var(--dark-blue)";

  return (
    <div className="App">
      <Header isMobile={isMobile} />
      <span className='first-two-images' id='next-section'> 
        {isMobile ? (
          <>
            <Image className="right-image" bgImage={bgImageSmall} />
            <TextBox title={header3} passage={passage3} />
          </>
        ) : (
          <>
            <TextBox title={header3} passage={passage3} />
            <Image className="right-image" bgImage={bgImageBig} />
          </>
        )}
      </span>

      <span className='second-two-images'>
        <Image bgImage={isMobile ? bgImage2Small : bgImage2Big} />
        <TextBox title={header4} passage={passage4} />
      </span>
      <span className='down-two-images'>
        <Image bgImage={bgImage3Big} header={header1} text={passage1} textColor={textColor1} />
        <Image bgImage={bgImage4Big} header={header2} text={passage2} textColor={textColor2} />
      </span>
      <ClientCase />
      <ImgLine isMobile={isMobile} />
      <Footer />
    </div>
  );
}

export default App;
