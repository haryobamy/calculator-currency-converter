import React from "react";
import { Form, Header, Col, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import './currency.css'
import * as BiIcons from 'react-icons/bi'

const Currency = () => {
  const [currencies, setCurrencies] = React.useState([]);
  const [baseCurrency, setBaseCurrency] = React.useState("");
  const [baseSymbols, setBaseSymbols] = React.useState("");
  const [toSymbols, setToSymbols] = React.useState("");
  const [toCurrency, setToCurrency] = React.useState("");
  const [amount, setAmount] = React.useState('1');
  const [calculatedAmount, setcalculatedAmount] = React.useState(1);
  const [errorText, setErrorText] = React.useState("");
  const [rate, setRate] = React.useState([])

  // const CurrencyConvert = () => {
  // React.useEffect(() => {
  //   if (baseCurrency !== "" && baseCurrency.length > 2 && toCurrency !== "" && toCurrency.length > 2 && amount > 0) {
  //     axios.length(`https://free.currconv.com/api/v7/convert?q=${baseCurrency}_${toCurrency}&compact=ultra&apiKey=549c88f986593b07825e`)
  //       .then((res) => {
  //         console.log(res)
  //       }).catch((err) => {
  //         console.log(err)
  //       })
  //   }
  // }, [])

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

    axios.get(`https://api.fastforex.io/convert?from=${amount}&to=${baseSymbols}&amount=${toSymbols}&api_key=274cc469c2-b15605ca8b-qy12cq`)
      .then((res) => {
        const data = res
        console.log(data)

      }).catch((err) => {

        console.log(err)
      })
  }



  React.useEffect(() => {
    handleConvert()
  }, [amount, baseSymbols, toSymbols])


  const abv = Object.keys(currencies);
  const name = Object.values(currencies);

  const con = abv.reduce((acc, current, index) => {
    // console.log(current - name[index])

    return [...acc, (`${current} - ${name[index]}`)]
  }, [])

  console.log(amount)




  return (

    < >
      <div className="body">

        <div className="container">

          <h1 className='header'>Currency converter</h1>

          <div className="currency-display">
            <p>From : {baseSymbols}</p>
            <p>To : {toSymbols}</p>
            <p>equals rate ???</p>
          </div>



        </div>

        <div className="conversion-input">
          <form >
            <div className="inputs">
              <label htmlFor="amount">Amount</label>
              <div className='inputs-div'>
                <span>$</span>
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
                }}  >
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

          {/* {errorText && <p style={{ color: "red", fontSize: 18 }}>{errorText}</p>} */}

          <div className='output'>
            <div>
              <p>$ {amount} <span>{baseCurrency}</span> = <span> {toCurrency}</span></p>
            </div>
            <div>
              <p>{amount} {baseSymbols} = rate??? {toSymbols}</p>
            </div>
            <div>
              <p>rate??? {toSymbols} = {amount} {baseSymbols}</p>
            </div>
          </div>

          <p className="info">We use midmarket rates
            View transfer quote <BiIcons.BiInfoCircle />
          </p>

        </div>



      </div>



    </>);
};

export default Currency;
