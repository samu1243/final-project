import React from "react";
import { Accordion, Col, ListGroup, Row, Tab } from "react-bootstrap";
import AccordionFaq from "../component/faqaccordion.jsx";
import WebNav from "../component/navbar.jsx";

function Faq() {
  const AccordionData = [
    { title: 'What does this website do?',
      content: 'This website was created to trade gold between servers in a timely and secured manner. Think of it as a trading marketplace. You choose which server, the amount, and the time'
    },
    { title: 'How secure is it?',
      content: 'Sadly this is a trust based website, you are trading with other people like you. We have no control on the gold trade itself, that falls on you. I just provide a service for you to find people willing to do the trade.'
    },
    { title: 'How can I not get scammed?',
      content: 'I can be a 3rd party and hold the gold you are willing to trade and viceversa for the person you are looking to trade for. This service does have a fee of 2% of the total transaction. Therefore, if 100k gold transfer. I would keep 2000 gold.'
    },
    { title: 'Why not free?',
      content: 'It is not a free of charge service because I would rather not do it at all, to be honest.'
    },
    {title: 'Can I get banned from doing this?',
      content: 'While you should not, it does not mean it cannot. You could be trading with a gold seller and be banned as collaretal. The act itself of trading gold between servers is not a bannable offense. Consider trading under your un discretion.'
    },
    {title: 'Are there ways that I can donate towards the website?',
      content: 'Not really, I am not looking for donations at the moment. This is a passion project and money could tarnish that thinking.'
    },

]
  return (
    <div>
    <WebNav/>
    <div className="faq">
      {AccordionData.map(({title, content}) => (  
        <AccordionFaq title={title} content={content}/>
      ))}
    </div>
    </div>
  );
}

export default Faq;
