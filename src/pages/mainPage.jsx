import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Directions from "../directions";
import PrifileImg from "../images/Profile.png";
import { useState } from "react";

export default function MainPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-main">
      <Container className="content">
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={7} className="text-center">
            <span
              onClick={() => setOpen((prev) => !prev)}
              className="profile-image-wrapper"
            >
              {" "}
              <Image fluid src={PrifileImg} className="rounded-circle pfImg" />
            </span>
            <div className="brand-wordmark small mt-3">Contact Me</div>

            <h2 className="main-title">TERAWATT</h2>

            <p className="brand-tagline">
              Reduce Global Warming | Save on Electricity Bills
            </p>

            <span className="d-flex w-100 justify-content-center">
              <Directions />
            </span>
          </Col>
        </Row>
      </Container>

      {/* <div className="footer-note d-flex justify-content-center">
        ตัวแทน AIA | มีใบอนุญาต 
      </div> */}

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()} // ❗กันคลิกทะลุ
          >
            <Image src={PrifileImg} className="profile-image-large" />

            <h3 className="mt-3">Titawan Udhayananandh (Ohm)</h3>
            <hr />
            <p className="text-muted mb-1">Sale Number: 1234</p>

            <hr />

            <p className="modal-desc">
              Brand & Marketting of Terawatt Company
            </p>

            <div className="modal-highlight">
              ✔ Marketting Specialist
              <br />
              {/* ✔ ดูแลลูกค้า XX+ คน<br/> */}✔ Sale
            </div>

            <Button
              className="btn btn-primary mt-3 w-100"
              onClick={() => {
                window.open("https://line.me/ti/p/4MkTKwVD0q", "_blank");
              }}
            >
              Add Line for Consultation
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
