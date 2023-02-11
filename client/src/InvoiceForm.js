import { useState } from "react";

const InvoiceForm = () => {
    const [invoiceFormState, setInvoiceFormState] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInvoiceFormState({
            ...invoiceFormState,
            [name]: value,
        })
    }
    return (
        <div className="container">
            <form>
                <div>
                    <label>Name</label>
                        <input
                        placeholder="Customer Name"
                        name="name"
                        type="text"
                        id="name"
                        onChange={handleChange}
                        ></input>
                    </div>
                <div>
                    <label htmlFor="email">Email</label>
                        <input
                        placeholder="Customer Email"
                        name="customer_email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                        ></input>
                    </div>
                <div>
                    <label>$</label>
                        <input
                        placeholder="Price"
                        name="price"
                        type="number"
                        id="price"
                        onChange={handleChange}
                        ></input>
                </div>
            </form>
        </div>
    )
}

export default InvoiceForm