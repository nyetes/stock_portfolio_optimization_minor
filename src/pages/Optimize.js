import React, {useState} from 'react';
import { Formik, Form,Field, validateYupSchema} from 'formik';
import axios from 'axios';
import Checkbox from '../components/Checkbox';
import Polar from '../components/Polar';
import Header from '../components/Header' ;

function TextField({field,form:{touched,error},...props}) {
    return(
        <>
       
            <label>Enter your Gain expectation</label>
            <input
             id="amount" 
             {...field}
             {...props}
             />
       </>
    );  
}
function validateTarget(value) {
    let error;
    if (!value || value < 1.0) {
      error = 'Please add your target expectation. Target Expectation must be greater than 1%';
    }
    return error;
  }
  
const Optimize = () => {
    const [response,setReponse] = useState();
    return(
        <>
        <Header/>
    <h1>Select Investment Stock</h1>

  <div className="optimization-container">
    <Formik
      initialValues={{
        stock: [],
        target:''
      }}
      onSubmit={async (values) => {
        var payload = {
            stocks: values.stock,
            target: values.target/100
    };

    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.post('http://localhost:8000/portfolio/optimize', payload)
      .then(function (response) {
        console.log(response);
        setReponse(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
      }}

      validate={values=>{
          let errors = {};
          if(values.stock.length <2){
              errors.stock ="Select at least 2 Stocks"
          }
          return errors;
      }}
      
    >
      {({ values,errors }) => (
        
        <Form>
            <div class="optimization-container">
                <Field type="checkbox" 
                    name="stock"
                    value="GOOGL"
                    image="google.svg"
                    label="Google"
                    component={Checkbox}
                />
                <Field type="checkbox" 
                    name="stock"
                    value="TSLA"
                    image="tesla.svg"
                    label="Tesla"
                    component={Checkbox}
                />
                <Field type="checkbox" 
                    name="stock"
                    value="AAPL"
                    image="apple.svg"
                    label="Apple"
                    component={Checkbox}
                />
                <Field type="checkbox" 
                name="stock"
                value="KO"
                image="cocacola.svg"
                label="CocaCola"
                component={Checkbox}
            />
            <Field type="checkbox" 
                    name="stock"
                    value="FB"
                    image="facebook.svg"
                    label="Facebook"
                    component={Checkbox}
                />
            <Field type="checkbox" 
                    name="stock"
                    value="SPG"
                    image="SPG.svg"
                    label="Simon Property"
                    component={Checkbox}
                />
            <Field type="checkbox" 
                    name="stock"
                    value="NKE"
                    image="nike.svg"
                    label="Nike"
                    component={Checkbox}
                />
            <Field type="checkbox" 
                    name="stock"
                    value="NFLX"
                    image="netflix.svg"
                    label="Netflix"
                    component={Checkbox}
                />  

            <Field type="checkbox" 
                    name="stock"
                    value="WWE"
                    image="wwe.svg"
                    label="World Wrestling"
                    component={Checkbox}
                />

            <Field type="checkbox" 
                    name="stock"
                    value="IBM"
                    image="ibm.svg"
                    label="IBM"
                    component={Checkbox}
                />
            </div>
            <h1> Gain Expectation</h1>
            <div class="container">
                <div class="containeritems">
                    <Field type="number"
                     name="target" 
                     component={TextField} 
                     validate={validateTarget}
                    />
                    <button type="submit" class="hero-btn red-btn">Optimizer</button>
                </div>
                {errors.target && <div style={{color:"red"}} >{errors.target}</div>}
                <br/>
                {errors.stock && <div style={{color:"red"}} >{errors.stock}</div>}

            </div>
        </Form>
      )}
    </Formik>
    <div class="optimization-result">
        {response ? <Polar 
                        success={response.success}
                         data = {response.weights}
                         tickers={response.tickers}
                        />: 
            null}
    </div>
  </div>

    
  </>
    );
}
    

export default Optimize;