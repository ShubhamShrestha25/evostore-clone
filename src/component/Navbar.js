import "../styles/Navbar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/images/evo-logo.png" alt="" />
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <p>Apple</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <p>Bose</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <p>JBL</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <p>Accessories</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <p>Momax</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <p>Brands</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <p>Our Store</p>
          </div>
          <div className="nav-item">
            <p>EMI</p>
          </div>
          <div className="nav-item">
            <p>Servies</p>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-right-items">
          <img src="/images/search.png" alt="" />
          <div className="nav-right-item">
            <img src="/images/shopping-bag.png" alt="" />
          </div>
          <img src="/images/user.png" alt="" />
        </div>
        <div className="nav-currency">
          NRP
          <h3>
            Currency <KeyboardArrowDownIcon />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
