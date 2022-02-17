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
            <h3>Apple</h3>
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <h3>Bose</h3>
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <h3>JBL</h3>
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <h3>Accessories</h3>
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <h3>Momax</h3>
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <h3>Brands</h3>
            <KeyboardArrowDownIcon />
          </div>
          <div className="nav-item">
            <h3>Our Store</h3>
          </div>
          <div className="nav-item">
            <h3>EMI</h3>
          </div>
          <div className="nav-item">
            <h3>Servies</h3>
            <KeyboardArrowDownIcon />
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
    </div>
  );
};

export default Navbar;
