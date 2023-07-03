import { useFormik } from 'formik';
import iconErr from './images/icon-error.svg';
import { useRef } from 'react';
import TypeIt from "typeit-react";

function App() {
  const firstNameErrIndication = useRef();
  const firstNameErrIcon = useRef();
  const lastNameErrIndication = useRef();
  const lastNameErrIcon = useRef();
  const emailErrIndication = useRef();
  const emailErrIcon = useRef();
  const passwordErrIndication = useRef();
  const passwordErrIcon = useRef();

  const validate = values => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'First Name cannot be empty';
    } else if (formik.touched.firstName && values.firstName.length < 4) {
      errors.firstName = 'Must be at least 4 characters';
    }

    if (!values.lastName) {
      errors.lastName = 'Last Name cannot be empty';
    } else if (formik.touched.lastName && values.lastName.length < 4) {
      errors.lastName = 'Must be at least 4 characters';
    }

    if (!values.email) {
      errors.email = 'Email cannot be empty';
    } else if (formik.touched.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Looks like this is not an email';
    } 

    if (!values.password) {
      errors.password = 'Password cannot be empty';
    } else if (formik.touched.password && values.password.length < 8) {
      errors.password = 'Must be at least 8 characters';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    validate,
    onSubmit: values => {
      alert("Form successfully submitted");
    },
  });

  return (
    <>
      <main>
        <div className="overall-container">
          <article>
            <h1><TypeIt>Learn to code by watching others </TypeIt></h1>
            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
          </article>
          <article>
            <p className="tag"><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
          
            <form className="form" onSubmit={formik.handleSubmit}>
              <div ref={firstNameErrIndication} className={formik.touched.firstName && formik.errors.firstName ? 'border-red' : ''}>
                <input 
                  type="text" 
                  name="firstName" 
                  id="firstName" 
                  placeholder="First Name" 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                <img src={iconErr} alt="Error Icon" className={formik.touched.firstName && formik.errors.firstName ? 'icon-err' : 'icon-err hidden'} ref={firstNameErrIcon} />
              </div>
              {formik.touched.firstName && formik.errors.firstName && (<div className="red-err"><em>{formik.errors.firstName}</em></div>)}

              <div ref={lastNameErrIndication} className={formik.touched.lastName && formik.errors.lastName ? 'border-red' : ''}>
                <input 
                  type="text" 
                  name="lastName" 
                  id="lastName" 
                  placeholder="Last Name" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                <img src={iconErr} alt="Error Icon" className={formik.touched.lastName && formik.errors.lastName ? 'icon-err' : 'icon-err hidden'} ref={lastNameErrIcon} />
              </div>
              {formik.touched.lastName && formik.errors.lastName ? (<div className="red-err"><em>{formik.errors.lastName}</em></div>) : null}

              <div ref={emailErrIndication} className={formik.errors.email && formik.touched.email ? 'border-red' : ''}>
                <input 
                  type="email" 
                  name="email"  
                  id="email" 
                  placeholder="Email Address" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <img src={iconErr} alt="Error Icon" className={formik.touched.email && formik.errors.email ? 'icon-err' : 'icon-err hidden'} ref={emailErrIcon} />
              </div>
              {formik.touched.email && formik.errors.email ? (<div className="red-err"><em>{formik.errors.email}</em></div>) : null}

              <div ref={passwordErrIndication} className={formik.touched.password && formik.errors.password ? 'border-red' : ''}>
                <input 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="Password" 
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <img src={iconErr} alt="Error Icon" className={formik.touched.password && formik.errors.password ? 'icon-err' : 'icon-err hidden'} ref={passwordErrIcon} />
              </div>
              {formik.touched.password && formik.errors.password ? (<div className="red-err"><em>{formik.errors.password}</em></div>) : null}

              <button type="submit">Claim your free trial</button>
              <small>By clicking the button, you are agreeing to our <span>Terms and Services</span></small>
            </form>
          </article>
        </div>
      </main>
    </>
  );
}

export default App;
