import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ pageTitle }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const isFeaturePage = location.pathname === '/features';
  const isServicesPage = location.pathname === '/services';
  const isCompactHeader = isFeaturePage || isServicesPage;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    let fieldName;

    // Extract the field name correctly from the input ID
    if (id === 'exampleInputFirst') {
      fieldName = 'firstName';
    } else if (id === 'exampleInputLast') {
      fieldName = 'lastName';
    } else if (id === 'exampleInputEmail') {
      fieldName = 'email';
    } else if (id === 'exampleInputPhone') {
      fieldName = 'phone';
    } else if (id === 'exampleInputMessage') {
      fieldName = 'message';
    } else {
      // Fallback to the original logic
      fieldName = id.replace('exampleInput', '');
      fieldName = fieldName.charAt(0).toLowerCase() + fieldName.slice(1);
    }

    setFormData({
      ...formData,
      [fieldName]: value
    });

    // Clear error for this field when user types
    if (formErrors[fieldName]) {
      setFormErrors({
        ...formErrors,
        [fieldName]: ''
      });
    }
  };

  // Validate form data
  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Log the form data that's being sent (for debugging)
      console.log('Sending form data:', formData);

      // Use the minimal server on port 5002
      const response = await fetch('http://localhost:5002/minimal-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        // Show success message
        toast.success('Your message has been sent successfully!');

        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });

        // Close modal after success
        if (typeof window !== 'undefined' && window.bootstrap) {
          const modalElement = document.getElementById('exampleModal');
          if (modalElement) {
            const modal = window.bootstrap.Modal.getInstance(modalElement);
            if (modal) {
              modal.hide();
            }
          }
        }
      } else {
        toast.error(data.message || 'Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending contact form:', error);
      toast.error('Failed to send your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Function to check if viewport is mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Clean up event listener
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Ensure Bootstrap JS is loaded
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Create a reference to the handleModalHidden function that we can use in the cleanup
      const handleModalHidden = () => {
        // Thoroughly clean up any modal artifacts regardless of drawer state
        document.body.classList.remove('modal-open');

        // Remove all modal backdrop elements
        const backdrops = document.getElementsByClassName('modal-backdrop');
        if (backdrops.length > 0) {
          Array.from(backdrops).forEach(backdrop => {
            backdrop.remove();
          });
        }

        // Force body styles cleanup
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';

        // If drawer was open when modal was shown, restore drawer state
        if (isNavOpen) {
          // Re-apply drawer styles to prevent stuck background
          document.body.classList.add('drawer-open');

          // Force redraw
          document.body.style.display = 'none';
          setTimeout(() => {
            document.body.style.display = '';
          }, 0);
        }

        // Extra safeguard - check if we need to remove inline styles added by Bootstrap
        setTimeout(() => {
          // If backdrop still visible somehow, use more aggressive cleanup
          if (document.body.style.overflow === 'hidden') {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
          }
        }, 350); // Slightly longer than Bootstrap's transition time
      };

      let modalElement = document.getElementById('exampleModal');

      // First check if bootstrap is already loaded
      if (!window.bootstrap) {
        // Load Bootstrap JS if not already loaded
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
        script.integrity = 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p';
        script.crossOrigin = 'anonymous';

        // Wait for the script to load before initializing any Bootstrap components
        script.onload = () => {
          // Initialize modal functionality once Bootstrap is loaded
          modalElement = document.getElementById('exampleModal');
          if (modalElement) {
            // Set up modal event listeners here
            modalElement.addEventListener('hidden.bs.modal', handleModalHidden);
          }
        };

        document.body.appendChild(script);
      } else {
        // If Bootstrap is already loaded, set up modal event listeners
        if (modalElement) {
          modalElement.addEventListener('hidden.bs.modal', handleModalHidden);
        }
      }

      // Cleanup function to remove event listeners
      return () => {
        modalElement = document.getElementById('exampleModal');
        if (modalElement) {
          modalElement.removeEventListener('hidden.bs.modal', handleModalHidden);
        }
      };
    }
  }, [isNavOpen]);

  // Add body class to prevent scrolling when drawer is open
  useEffect(() => {
    if (isNavOpen && isMobile) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove('drawer-open');
    };
  }, [isNavOpen, isMobile]);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleDemoClick = () => {
    // Close the mobile drawer if it's open
    if (isNavOpen) {
      setIsNavOpen(false);

      // Wait for drawer animation to complete before showing modal
      setTimeout(() => {
        showModal();
      }, 300); // Match this to the drawer transition time
    } else {
      // If drawer isn't open, show modal immediately
      showModal();
    }
  };

  const showModal = () => {
    try {
      // If drawer is open, remember its state for later cleanup
      const wasDrawerOpen = isNavOpen;

      // Try using the Bootstrap JS API
      if (typeof window !== 'undefined' && window.bootstrap) {
        const modalElement = document.getElementById('exampleModal');
        if (modalElement) {
          // Store the drawer state before showing modal for later reference
          modalElement.dataset.drawerOpen = wasDrawerOpen;
          const modal = new window.bootstrap.Modal(modalElement);
          modal.show();
        }
      }
      // Fallback to jQuery if available
      else if (typeof window !== 'undefined' && window.jQuery) {
        window.jQuery('#exampleModal').modal('show');
      }
      // Direct DOM manipulation as last resort
      else {
        const modalElement = document.getElementById('exampleModal');
        if (modalElement) {
          modalElement.classList.add('show');
          modalElement.style.display = 'block';
          document.body.classList.add('modal-open');
          const backdrop = document.createElement('div');
          backdrop.className = 'modal-backdrop fade show';
          document.body.appendChild(backdrop);
        }
      }
    } catch (err) {
      console.error('Error showing modal:', err);
    }
  };

  return (<>
    <ToastContainer position="top-right" autoClose={5000} />
    <div className='headerSection'>
      <div className="header-background"></div>
      {pageTitle && (
        <div className={`header-title-container ${isCompactHeader ? 'feature-title' : ''}`}>
          <h1 className="hero-title">{pageTitle}</h1>
        </div>
      )}
      <Navbar
        expand="lg"
        bg="light"
        variant="light"
        className={`py-3 ${isMobile ? 'mobile-navbar' : ''} ${isNavOpen && isMobile ? 'sticky-navbar' : ''}`}
        style={{paddingLeft: '1rem', paddingRight: '1rem'}}
        expanded={isNavOpen}
        onToggle={handleToggle}
        fixed={isNavOpen && isMobile ? "top" : ""}
      >
        <Container fluid className="px-0 px-lg-5 d-flex justify-content-between">
          <Navbar.Brand href="/">
            <img src="./images/logo.png" alt="logo" className="img-fluid" style={{maxHeight: '50px'}} />
          </Navbar.Brand>

          {/* Custom toggle button that shows cross when open */}
          <button
            onClick={handleToggle}
            className={`navbar-toggler custom-toggler ${isNavOpen ? 'is-open' : ''}`}
            aria-controls="basic-navbar-nav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            {isNavOpen ? (
              <div className="cross-icon">
                <span></span>
                <span></span>
              </div>
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>

          <Navbar.Collapse id="basic-navbar-nav" className={isMobile ? 'fullscreen-nav' : ''}>
            <Nav className={`${isMobile ? 'mobile-nav-items mt-5 mt-sm-6' : 'ms-auto d-flex align-items-center'}`}>
              <div className={`${isMobile ? 'mobile-menu-wrapper pt-2' : 'd-flex align-items-center gap-4'}`}>
                <Nav.Item>
                  <Link to="/features" className="nav-link">
                    <span className="nav-item-text">Features</span>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link to="/services" className="nav-link">
                    <span className="nav-item-text">Deployment and Services</span>
                  </Link>
                </Nav.Item>
                <Nav.Item className={isMobile ? 'cta-item' : 'ms-3'}>
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className={`nav-link-button reqDemoBtn ${isMobile ? 'mobile-demo-btn btn-lg' : ''}`}
                    style={isMobile ? {fontSize: '1.2rem', padding: '12px 24px'} : {}}
                    onClick={(e) => {
                      e.preventDefault();
                      handleDemoClick();
                    }}
                  >
                    Request a demo
                  </Link>
                </Nav.Item>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Add CSS for fullscreen mobile nav */}
      <style>
        {`
          /* Prevent body scrolling when drawer is open */
          body.drawer-open {
            overflow: hidden !important;
            position: fixed;
            width: 100%;
            height: 100%;
          }

          /* Make sure modal is on top of everything */
          .modal {
            z-index: 2050 !important;
          }

          .modal-backdrop {
            z-index: 2040 !important;
          }

          /* Ensure backdrop is removed properly */
          .modal-backdrop.show {
            opacity: 0.5;
          }

          .modal-backdrop.fade {
            transition: opacity 0.15s linear;
          }

          /* Header background and positioning */
          .headerSection {
            position: relative;
            z-index: auto;
          }

          .header-background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
            background-image: url('./images/header-bg.jpg');
            background-size: cover;
            background-position: center;
            opacity: 0.1;
          }

          /* Header Title Styles */
          .header-title-container {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            text-align: center;
            padding: 0 20px;
            z-index: 1;
          }

          .header-title-container.feature-title {
            top: 60%;
          }

          .header-title-container .hero-title {
            font-size: 3.5rem;
            font-weight: 700;
            line-height: 1.2;
            color: #222;
            max-width: 900px;
            margin: 0 auto;
          }

          .feature-title .hero-title {
            font-size: 3rem;
          }

          @media (max-width: 1200px) {
            .header-title-container .hero-title {
              font-size: 3rem;
            }

            .feature-title .hero-title {
              font-size: 2.75rem;
            }
          }

          @media (max-width: 992px) {
            .header-title-container .hero-title {
              font-size: 2.5rem;
            }

            .feature-title .hero-title {
              font-size: 2.25rem;
            }
          }

          @media (max-width: 767px) {
            .header-title-container .hero-title {
              font-size: 2rem;
            }

            .feature-title .hero-title {
              font-size: 1.75rem;
            }
          }

          @media (max-width: 576px) {
            .header-title-container .hero-title {
              font-size: 1.75rem;
            }

            .feature-title .hero-title {
              font-size: 1.5rem;
            }
          }

          @media (max-width: 375px) {
            .header-title-container .hero-title {
              font-size: 1.5rem;
            }

            .feature-title .hero-title {
              font-size: 1.35rem;
            }
          }

          /* Make navbar accessible */
          .navbar {
            position: relative;
            z-index: 20;
            background-color: transparent !important;
          }

          .bg-light {
            background-color: transparent !important;
          }

          @media (max-width: 991px) {
            /* Sticky navbar styles */
            .mobile-navbar {
              transition: all 0.3s ease;
            }

            .sticky-navbar {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              z-index: 20;
              background: white !important;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }

            .fullscreen-nav {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: white;
              z-index: 15;
              height: 100vh !important;
              width: 100vw;
              display: flex;
              flex-direction: column;
              transition: all 0.3s ease-in-out;
              padding: 0;
              overflow-y: auto;
              margin-top: 76px; /* Height of navbar - adjust as needed */
            }

            .mobile-nav-items {
              display: flex;
              flex-direction: column;
              width: 100%;
              height: 100%;
              padding: 0;
              margin: 0;
            }

            .mobile-menu-wrapper {
              display: flex;
              flex-direction: column;
              width: 100%;
              height: 100%;
              padding: 1rem 2rem;
              overflow-y: auto;
            }

            .mobile-nav-items .nav-item {
              width: 100%;
              margin: 0;
              padding: 0.3rem 0;
              position: relative;
              transition: all 0.3s ease;
            }

            .mobile-nav-items .nav-item:last-of-type {
              border-bottom: none;
            }

            .mobile-nav-items .nav-link {
              font-size: 1.5rem;
              font-weight: 500;
              color: #333;
              text-align: left;
              padding: 0.5rem 0;
              position: relative;
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
            }

            .mobile-nav-items .nav-link:hover,
            .mobile-nav-items .nav-link:focus {
              color: #007bff;
              transform: translateX(10px);
            }

            .nav-item-text {
              flex: 1;
              padding: 0 1rem;
            }

            .nav-item-number {
              font-size: 0.9rem;
              color: #007bff;
              font-weight: 700;
              opacity: 0.7;
              width: 30px;
              text-align: left;
            }

            .nav-item-arrow {
              font-size: 1.2rem;
              color: #007bff;
              opacity: 0;
              transform: translateX(-10px);
              transition: all 0.3s ease;
            }

            .mobile-nav-items .nav-link:hover .nav-item-arrow,
            .mobile-nav-items .nav-link:focus .nav-item-arrow {
              opacity: 1;
              transform: translateX(0);
            }

            .cta-item {
              margin-top: 1rem;
              text-align: center;
              padding-top: 0.5rem !important;
            }

            .mobile-demo-btn {
              margin-top: 1rem;
              padding: 1rem 2rem !important;
              font-weight: 600;
              border-radius: 50px;
              background-color: #7336ff;
              color: white !important;
              text-align: center;
              box-shadow: 0 4px 15px rgba(115, 54, 255, 0.25);
              transition: all 0.3s ease;
              display: inline-block;
              width: 100%;
            }

            .mobile-demo-btn:hover,
            .mobile-demo-btn:focus {
              background-color: #6026e3;
              transform: translateY(-3px);
              box-shadow: 0 8px 25px rgba(115, 54, 255, 0.35);
            }

            .mobile-nav-footer {
              margin-top: auto;
              padding-top: 2rem;
              text-align: center;
              border-top: 1px solid rgba(0, 0, 0, 0.05);
              margin-top: 2rem;
            }

            .social-links {
              display: flex;
              justify-content: center;
              gap: 1.5rem;
              margin-bottom: 1rem;
            }

            .social-link {
              color: #555;
              font-size: 0.9rem;
              text-decoration: none;
              transition: color 0.3s ease;
            }

            .social-link:hover {
              color: #007bff;
            }

            .mobile-copyright {
              font-size: 0.8rem;
              color: #888;
              margin-top: 1rem;
            }

            /* Custom toggler styles */
            .custom-toggler {
              z-index: 2000;
              position: relative;
              width: 40px;
              height: 40px;
              padding: 0;
              border: none;
              background: transparent;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.3s ease;
            }

            .custom-toggler:focus {
              outline: none;
              box-shadow: none;
            }

            /* Default hamburger icon */
            .navbar-toggler-icon {
              display: inline-block;
              width: 1.5em;
              height: 1.5em;
              vertical-align: middle;
              background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
              background-repeat: no-repeat;
              background-position: center;
              background-size: 100%;
              transition: all 0.3s ease;
            }

            /* Cross icon styles */
            .cross-icon {
              width: 24px;
              height: 24px;
              position: relative;
              transform: rotate(45deg);
            }

            .cross-icon span {
              display: block;
              position: absolute;
              background-color: rgba(0, 0, 0, 0.5);
              border-radius: 2px;
            }

            .cross-icon span:first-child {
              width: 100%;
              height: 2px;
              top: 50%;
              left: 0;
              transform: translateY(-50%);
            }

            .cross-icon span:last-child {
              width: 2px;
              height: 100%;
              left: 50%;
              top: 0;
              transform: translateX(-50%);
            }

            /* Keep header controls visible when menu is open */
            .navbar-expand-lg .navbar-brand,
            .navbar-expand-lg .navbar-toggler {
              position: relative;
              z-index: 20;
            }
          }

          @media (min-width: 992px) {
            .nav-link {
              color: #333;
              font-weight: 500;
              position: relative;
              padding: 0.5rem 0;
              margin: 0 0.5rem;
              transition: color 0.3s ease;
            }

            .nav-link:hover {
              color: #007bff;
            }

            .nav-link::after {
              content: '';
              position: absolute;
              width: 0;
              height: 2px;
              bottom: 0;
              left: 0;
              background-color: #007bff;
              transition: width 0.3s ease;
            }

            .nav-link:hover::after {
              width: 100%;
            }
          }
        `}
      </style>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                User Add Data
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="exampleInputFirst" className="form-label">
                      FirstName *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${formErrors.firstName ? 'is-invalid' : ''}`}
                      id="exampleInputFirst"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      aria-describedby="firstHelp"
                    />
                    {formErrors.firstName && (
                      <div className="invalid-feedback">{formErrors.firstName}</div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="exampleInputLast" className="form-label">
                      LastName *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${formErrors.lastName ? 'is-invalid' : ''}`}
                      id="exampleInputLast"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      aria-describedby="lastHelp"
                    />
                    {formErrors.lastName && (
                      <div className="invalid-feedback">{formErrors.lastName}</div>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                      id="exampleInputEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      aria-describedby="emailHelp"
                    />
                    {formErrors.email && (
                      <div className="invalid-feedback">{formErrors.email}</div>
                    )}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="exampleInputPhone" className="form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="exampleInputPhone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      aria-describedby="phoneHelp"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="exampleInputMessage" className="form-label">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="exampleInputMessage"
                    className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                    placeholder="Enter text ..."
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {formErrors.message && (
                    <div className="invalid-feedback">{formErrors.message}</div>
                  )}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                form="contactForm"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? (
                  <span>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Sending...
                  </span>
                ) : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          /* Modal Responsive Styles */
          .modal-content {
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            overflow: hidden;
            position: relative;
          }

          .modal-header {
            border-bottom: 1px solid #f1f1f1;
            padding: 1rem 1.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
          }

          .modal-header .modal-title {
            margin: 0;
            line-height: 1.5;
          }

          .modal-header .btn-close {
            position: relative;
            background-size: 0.7em;
            opacity: 0.7;
            box-shadow: none;
            outline: none;
            padding: 0.5rem;
            margin-right: 1rem;
            margin-top: 0.25rem;
            display: flex;
            align-items: center;
            height: 100%;
          }

          .modal-header .btn-close:hover {
            opacity: 1;
          }

          .modal-body {
            padding: 1.5rem;
          }

          .modal-footer {
            border-top: 1px solid #f1f1f1;
            padding: 1rem 1.5rem;
          }

          .form-label {
            font-weight: 500;
            margin-bottom: 0.5rem;
          }

          .form-control {
            padding: 0.75rem;
            border-radius: 4px;
            border: 1px solid #dee2e6;
          }

          .form-control:focus {
            border-color: #80bdff;
            box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
          }

          @media (max-width: 767px) {
            .modal-body {
              padding: 1rem;
            }

            .form-control {
              padding: 0.625rem;
            }
          }
        `}
      </style>
    </div>
  </>);
};
export default Header;