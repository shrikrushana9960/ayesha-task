import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./whole.png";
import "./navbar.css";
function NavScrollExample() {
  return (
    <div
      className="custom-navbar"
      style={{
        width: "100%",
        padding: "20px 70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={logo} style={{ marginRight: "auto" }} />
      <div style={{ display: "flex" }}>
        <div
          style={{
            marginRight: -30,
            zIndex: 1,
            display: "flex",
            height: 40,
            marginTop: 5,
            marginLeft: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>
        <input
          className="search-input"
          placeholder="Search for your favorite groups in ATG"
        />
      </div>
      <div style={{ marginLeft: "auto", display: "flex" }}>
        <p style={{ fontFamily: "IBM Plex Sans", fontWeight: "600" }}>
          Create account.
        </p>
        <p
          style={{
            fontFamily: "IBM Plex Sans",
            color: "#2F6CE5",
            fontWeight: "600",
            marginLeft: "10px",
          }}
        >
          {" "}
          It’s free!
        </p>
        <div
          style={{
            height: "20px",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-caret-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NavScrollExample;
