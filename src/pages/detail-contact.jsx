import { Button, Card } from "react-bootstrap";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function DetailContact() {
  const navigate = useNavigate();
  return (
    <div className="bg-main">
      <span
        className="back-button"
        onClick={() => navigate("/")}
        variant="outline"
      >
        <IoChevronBack size={40} style={{ color: "rgb(133, 92, 38)" }} />
      </span>
      <div
        className="p-3 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Card className="card-contact">
          <Card.Body>
            <h2 className="fw-bold mb-3">Contact Me</h2>
            <Card.Text>
              <p>
                {" "}
                If you want to create a Quiz game for your brand
                to be a marketing activity
                or to build a good relationship with customers
                you can contact us at the channels below
              </p>
              <p>
                You can securely store player data and utilize it for real-world applications,
                while still prioritizing player privacy (PDPA).
                For example, you can use this data for CRM or Retargeting Ads
                to achieve maximum effectiveness.
              </p>
              <hr />
              <Button
                variant="outline-dark"
                className="mb-2"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/whoyouare.official?igsh=NnVqb3loeGV5Z2cy&utm_source=qr",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                Contact Us
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default DetailContact;
