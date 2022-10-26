const refresh = () => {
    VendorService.list()
            .done((res) => {
                display(res);
            })
            .fail((err) => {
                console.error(err);
            });

}

const display = (vendors) => {
    let tbodyCtrl = $("#tbody");
    tbodyCtrl.html("");
    for(let vendor of vendors) {
        let row = $("<tr></tr>");
        row.append($(`<td>${vendor.id}</td>`).css("color", "red"));
        row.append($(`<td>${vendor.code}</td>`).css("color", "green"));
        row.append($(`<td>${vendor.name}</td>`).css("color", "midnightblue"));
        row.append($(`<td>${vendor.address}</td>`).css("color", "darkcyan"));
        row.append($(`<td>${vendor.city}</td>`).css("color", "saddlebrown"));
        row.append($(`<td>${vendor.state}</td>`).css("color", "firebrick"));
        row.append($(`<td>${vendor.zip}</td>`).css("color", "black"));
        row.append($(`<td>${vendor.phone}</td>`).css("color", "crimson"));
        row.append($(`<td>${vendor.email}</td>`).css("color", "indigo"));
        let action = $("<td></td>");
        action.append($(`<a href="vendor-get.html?id=${vendor.id}">Detail</a>`));
        action.append($(`<span> | </span>`));
        action.append($(`<a href="vendor-change.html?id=${vendor.id}">Change</a>`));
        row.append(action);
        tbodyCtrl.append(row);
    }

}

// const display = (vendors) => {
//     let tbodyCtrl = document.getElementById("tbody");
//     tbodyCtrl.innerHTML = "";
//     for(let vendor of vendors) {

//         let row = "<tr>";
//         row += `<td>${vendor.id}</td>`;
//         row += `<td>${vendor.code}</td>`;
//         row += `<td>${vendor.name}</td>`;
//         row += `<td>${vendor.address}</td>`;
//         row += `<td>${vendor.city}</td>`;
//         row += `<td>${vendor.state}</td>`;
//         row += `<td>${vendor.zip}</td>`;
//         row += `<td>${vendor.phone}</td>`;
//         row += `<td>${vendor.email}</td>`;
//         row += `<td> <a href="vendor-get.html?id=${vendor.id}">Detail</a>`
//         row +=      `  |  `
//         row +=      `<a href="vendor-change.html?id=${vendor.id}">Change</a> </td>`
//         row += "</tr>";
//         tbodyCtrl.innerHTML += row; 
//     }
// }

refresh();