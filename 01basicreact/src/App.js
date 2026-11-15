import logo from './logo.svg';
import './App.css';
import Usememo from './components/Usememo';
import UseCallback from './components/UseCallback';
import Useref from './components/Useref';
import Converter from './currencyconverter/Inputbox';
import { useState } from 'react';
import Usecurrency from './hooks/Usecurrency';
import Inputbox from './currencyconverter/Inputbox';


function App() {
  const [amount, setAmount] = useState(0)
  const [from,setFrom] = useState('usd');
  const [to,setTo] = useState('inr');
  const [ConvertedAmount,setConvertedAmount] = useState(0)
  const currencyInfo = Usecurrency(from)
  const Options = Object.keys(currencyInfo)

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(amount*currencyInfo[to])
  }
  return (
    <div className='flex w-full h-screen flex-wrap items-center justify-center bg-no- bg-black'
      style={{ backgroundImage: `ulr(../public/bg.jpeg)` }}
    >
      <div className='w-full'>
          <div className=' w-full max-w-md mx-auto border border-gray-50 rounded-lg p-5 backdrop-blur-sm bg-white'>
              <form onSubmit={(e)=>{
                e.preventDefault()
                convert()
              }}>
                <div className='w-full mb-1 border-2 rounded-lg'>
                    <Inputbox
                    label={"from"}
                    amount={amount}
                    currencyOptions={Options}
                    onCurrencyChange={(currency)=>setFrom(currency)}
                    onAmountChange={(amount)=>setAmount(amount)}
                    selectedCurrency={from}
                     />

                </div>
                <div className='relative w-full h-0.5'>
                  <button 
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600
                  text-white px-2 py-0.5'
                  onClick={swap}
                  >swap</button>
                </div>
                <div className='w-full mb-1 border-2 rounded-lg'>
                    <Inputbox
                    label={"to"}
                    currencyOptions={Options}
                    amount={ConvertedAmount}
                    onCurrencyChange={(currency)=>setTo(currency)}
                    selectedCurrency={to}
                    amountDisabled={true}
                     />
                </div>
                <button
                className='w-full bg-blue-600 text-white rounded-lg px-4 py-2'
                type='submit'>
                  Convert
                </button>
              </form>
          </div>
      </div>
    </div>
  );
}

export default App;
