const display = () => {
    let id = +document.getElementById("xpk").value;
        $.getJSON(`http://localhost:5432/api/vendors/${id}`)
            .done((res) => {
                render(res);
            })
            .fail((err) => {
                console.error(err);
            })
}


const render = (vendor) => {
    document.getElementById("xid").innerText = vendor.id;
    document.getElementById("xcode").innerText = vendor.code;
    document.getElementById("xname").innerText = vendor.name;
    document.getElementById("xaddress").innerText = vendor.address;
    document.getElementById("xcity").innerText = vendor.city;
    document.getElementById("xstate").innerText = vendor.state;
    document.getElementById("xzip").innerText = vendor.zip;
    document.getElementById("xphone").innerText = vendor.phone;
    document.getElementById("xemail").innerText = vendor.email;
}