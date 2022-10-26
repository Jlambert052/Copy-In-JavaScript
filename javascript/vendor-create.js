const save = () => {
    let vendor = getVendorData();
    VendorService.create(vendor)
            .done((res) => {
                clearVendorData();
                alert("Created!");
            })
            .fail((err) => {
                alert("failed to create.")
            });
}

const clearVendorData = () => {
    $("#xid").val(0),
    $("#xcode").val(""),
    $("#xname").val(""),
    $("#xaddress").val(""),
    $("#xcity").val(""),
    $("#xstate").val(""),
    $("#xzip").val(""),
    $("#xphone").val(""),
    $("#xemail").val("")
};

const getVendorData = () => {
    let vendor = {
        id: 0,
        code: $("#xcode").val(),
        name: $("#xname").val(),
        address: $("#xaddress").val(),
        city: $("#xcity").val(),
        state: $("#xstate").val(),
        zip: $("#xzip").val(),
        phone: $("#xphone").val(),
        email: $("#xemail").val()
    };
    console.debug(vendor);
    return vendor;
}
