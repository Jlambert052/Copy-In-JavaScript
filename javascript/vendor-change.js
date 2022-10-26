const get = (id) => {
    VendorService.get(id)
        .done((res) => {
            setVendorData(res);
        })
        .fail((err) => {
            alert("not found")
        });
}

const save = () => {
    let vendor = getVendorData();
    VendorService.change(vendor)
        .done((res) => {
            clearVendorData();
            alert("vendor changed")
        })
        .fail((err) => {
            alert("failed")
        });
}

const getVendorData = () => {
    let vendor = {
        id: $("#xid").val(),
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

const setVendorData = (vendor) => {
    $("#xid").val(vendor.id);
    $("#xcode").val(vendor.code);
    $("#xname").val(vendor.name);
    $("#xaddress").val(vendor.address);
    $("#xcity").val(vendor.city);
    $("#xstate").val(vendor.state);
    $("#xzip").val(vendor.zip);
    $("#xphone").val(vendor.phone);
    $("#xemail").val(vendor.email);
};

const clearVendorData = () => {
    $("#xid").val(0);
    $("#xcode").val("");
    $("#xname").val("");
    $("#xaddress").val("");
    $("#xcity").val("");
    $("#xstate").val("");
    $("#xzip").val("");
    $("#xphone").val("");
    $("#xemail").val("");
}

let parameters = UtilityService.getUrlParms();
console.debug(parameters);
let id = +parameters.id;    
get(id);