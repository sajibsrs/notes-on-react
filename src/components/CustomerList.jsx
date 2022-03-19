function CustomerList(props) {
    return (
        <>
        <p># List in action</p>
        <div>
            {props.list.map((customer) => (
                <div key={customer.id}>
                    <p>
                        Customer # id: {customer.id}  Name: {customer.name} Age: {customer.age}
                    </p>
                </div>
            ))}
        </div>
        </>
    );
}

export default CustomerList;
