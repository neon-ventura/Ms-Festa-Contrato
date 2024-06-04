import ReactInputMask from 'react-input-mask'
import { useState } from 'react'
import './Contrato.css'
import Rules from './Rules'


const Contrato = () => {

     const [totalValue, setTotalValue] = useState(0)
     const [inputValue, setInputValue] = useState(0)
     const [subTotal, setSubTotal] = useState(0)
     const [phone, setPhone] = useState('')
     const [cpf, setCpf] = useState('')


    const handleTotalValue = (e) => {
        const value = e.target.value
        setTotalValue(value)
        setSubTotal(value - inputValue)
    }

    const handleInputValue = (e) => {
        const value = e.target.value
        setInputValue(value)
        setSubTotal(totalValue - value)
    }

    const printFunction = () => {
        window.print()
    }

    return (
        <>
            <div className="section">
                <div className="logo">
                    <img src="images/logo-msfesta-contrato.PNG" alt="" />
                </div>
                <form>
                    <div className="client">
                        <label htmlFor="client">Cliente:</label>
                        <input type="text" name="client" className='client-input'/>
                    </div>
                    <div className="address">
                        <label htmlFor="address">Endereço:</label>
                        <input type="text" name="address" className='address-input'/>
                        <label htmlFor="number">Nº</label>
                        <input type="number" name="number" className='number-input'/>
                    </div>
                    <div className="fone">
                        <label htmlFor="fone">Telefone:</label>
                        <ReactInputMask 
                        mask="(99) 99999-9999"
                        name="fone"
                        value={phone}
                        className='fone-input'
                        onChange={(e) => setPhone(e.target.value)}/>
                    </div>
                    <div className="district">
                        <label htmlFor="district">Bairro:</label>
                        <input type="text" name="district" className='district-input'/>
                        <label htmlFor="cpf">CPF</label>
                        <ReactInputMask
                        mask="999.999.999-99"
                        name="cpf"
                        className='cpf-input'
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        />
                    </div>
                    <div className="date">
                        <label htmlFor="date">Data da Retirada:</label>
                        <input type="date" name="date" className='date-input'/>
                        <p><strong>(sexta das 13:30hs as 17:30 demais dias com horário combinado)</strong></p>
                    </div>
                </form>
                
                <Rules />

                <p className='paragrapth-rental-value'><strong>VALOR DA LOCAÇÃO</strong></p>
                <div className="rental-value">
                    <div className="subtotal">
                        <label htmlFor="total-value">Valor Total</label>
                        <input type="number" name="total-value" className='total-value' onChange={handleTotalValue}/>
                        <label htmlFor="input-value">Valor de Entrada</label>
                        <input type="number" name="input-value" className='input-value' onChange={handleInputValue}/>
                        <label htmlFor="sub-total">Sub Total</label>
                        <input type="number" name="sub-total" className='sub-total' value={subTotal} readOnly/>
                    </div>
                </div>

                <button className='btn-print' onClick={printFunction}>Imprimir</button>
            </div>
        </>
    )
}

export default Contrato