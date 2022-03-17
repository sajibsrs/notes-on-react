function CustomerList(props) {
    return (
        <ul>
            {props.list.map((customer) => (
                <li key={customer.id}>
                    <p>Customer ID: {customer.id}</p>
                    <p>Name: {customer.name}</p>
                    <p>Age: {customer.age}</p>
                </li>
            ))}
        </ul>
    );
}

export default CustomerList;
