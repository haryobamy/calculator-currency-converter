import React, { useState } from "react";
import { Form, Header, Col, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import './currency.css'
import * as BiIcons from 'react-icons/bi'
import { data } from "./data";

const Currency = () => {
  const [currencies, setCurrencies] = React.useState([]);
  const [baseCurrency, setBaseCurrency] = React.useState("");
  const [baseSymbols, setBaseSymbols] = useState('USD');
  const [toSymbols, setToSymbols] = useState('EUR');
  const [toCurrency, setToCurrency] = React.useState("");
  const [amount, setAmount] = React.useState('1');
  const [calculatedAmount, setcalculatedAmount] = React.useState(1);
  const [errorText, setErrorText] = React.useState("");
  const [rate, setRate] = React.useState('')



  // get all currency
  React.useEffect(() => {
    axios.get(`https://api.fastforex.io/currencies?api_key=274cc469c2-b15605ca8b-qy12cq`)
      .then((res) => {
        const data = res.data.currencies
        setCurrencies(data)
        console.log(data)
      }).catch((err) => {
        console.log(err)
      })
  }, [])



  React.useEffect(() => {
    const symbols = baseCurrency.slice(0, baseCurrency.indexOf('-'));
    console.log(symbols)
    setBaseSymbols(symbols)

  }, [baseCurrency]);

  React.useEffect(() => {
    const symbols = toCurrency.slice(0, toCurrency.indexOf('-'));
    console.log(toSymbols)
    setToSymbols(symbols)

  }, [toCurrency])

  const handleConvert = () => {
    if (baseSymbols !== "" && baseSymbols.length > 2 && toSymbols !== "" && toSymbols.length > 2) {
      axios.get(`https://api.exchangerate.host/convert?from=${baseSymbols}&to=${toSymbols}`)
        .then((res) => {
          const data = res.data
          const rate = res.data.info.rate
          console.log(rate)
          setRate(rate)
          if (rate) {
            setcalculatedAmount(amount * rate);
            setErrorText('')
          } else {
            setErrorText(`can not convert from ${baseSymbols} to ${toSymbols}`)
          }

        }).catch((e) => {
          setErrorText(e.res.data.error)
          console.log(e)
        })
    }
  }



  React.useEffect(() => {
    handleConvert()
  }, [baseSymbols, toSymbols, amount])


  const abv = Object.keys(currencies);
  const name = Object.values(currencies);

  const con = abv.reduce((acc, current, index) => {
    // console.log(current - name[index])

    return [...acc, (`${current} - ${name[index]}`)]
  }, [])


  // const GetSymbols = ({ item }) => {
  //   return (
  //     <select>
  // {data.map((item, index) =>
  //       (<GetSymbols key={index} item={item} />
  //       )
  //       )}>
  //   )
  // }
  //     </select>




  return (

    < >
      <div className="body">

        <div className="container">

          <h1 className='header'>Currency converter</h1>

          <div className="currency-display">
            {baseSymbols && <p>From : {baseSymbols}</p>}
            {toSymbols && <p>To : {toSymbols}</p>}
            {baseSymbols && toSymbols && <p>Rate : {rate}</p>}
          </div>



        </div>

        <div className="conversion-input">
          <form >
            <div className="inputs">
              <label htmlFor="amount">Amount</label>
              <div className='inputs-div'>
                {/* {data.map((item, index) =>
                (<GetSymbols key={index} item={item} />
                )
                )} */}
                {/* <GetSymbols /> */}
                <span></span>
                <input type="text" name='amount' placeholder="Amount" value={amount}
                  onChange={e => {
                    setAmount(e.target.value);
                  }} />
              </div>
            </div>
            <div className="inputs">
              <label htmlFor="from">From

              </label>
              <div className='inputs-div'>
                {/* <span>$</span> */}
                <select name="from" id="from" onChange={e => {
                  setBaseCurrency(e.target.value.toUpperCase());
                }} >
                  <option > Convert From</option>
                  {con.map((currency, index) =>
                  (<option key={index} >
                    {currency}
                  </option>)
                  )}
                </select>

              </div>
            </div>
            <div className="icon">
              <BiIcons.BiTransfer />
            </div>
            <div className="inputs">
              <label htmlFor="to">To</label>
              <div className='inputs-div'>
                {/* <span>$</span> */}
                <select name="from" id="from" onChange={e => {
                  setToCurrency(e.target.value.toUpperCase());
                }} >
                  <option > Convert To</option>
                  {con.map((currency, index) => {
                    return <option key={index} >
                      {currency}
                    </option>
                  })}
                </select>
              </div>

            </div>

          </form>
          <button className="btn">Convert</button>

          {errorText && <p style={{ color: "red", fontSize: 18 }}>{errorText}</p>}

          {baseSymbols && toSymbols && <div className='output'>
            <div>
              <p>{amount} <span>{baseCurrency}</span> = <span> {calculatedAmount.toFixed(2)} {toCurrency}</span></p>
            </div>
            <div>
              <p>{amount} {baseSymbols} = {rate} {toSymbols}</p>
            </div>
            <div>
              <p> {rate} {toSymbols} = {amount} {baseSymbols}</p>
            </div>
          </div>}

          <p className="info">We use midmarket rates
            View transfer quote <BiIcons.BiInfoCircle />
          </p>

        </div>



      </div>



    </>);
};

export default Currency;
