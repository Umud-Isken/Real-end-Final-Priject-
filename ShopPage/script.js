let listgroupItems = [
    { class: "All", class2: "active", desk: "All" },
    { class: "Acer", class2: "", desk: "Acer" },
    { class: "hp", class2: "", desk: "HP" },
    { class: "Apple", class2: "", desk: "Apple" },
    { class: "Asus", class2: "", desk: "Asus" },
    { class: "Dell", class2: "", desk: "Dell" },
    { class: "Lenovo", class2: "", desk: "Lenovo" },
    { class: "lg", class2: "", desk: "LG" },
    { class: "Casper", class2: "", desk: "Casper" },
    { class: "Fujitsu", class2: "", desk: "Fujitsu" },
    { class: "Nexus", class2: "", desk: "Nexus" },
    { class: "Samsung", class2: "", desk: "Samsung" },
    { class: "Toshiba", class2: "", desk: "Toshiba" },
    { class: "Sony", class2: "", desk: "Sony" },
];
listgroupItems.forEach(item => {
    let newlistgroup = `
        <li class="list-group-item ${item.class2}" id="${item.class}" aria-current="true">${item.desk}</li>
    `;
    document.querySelector(".list-group").innerHTML += newlistgroup;
});
let addedItemsToBasket = JSON.parse(localStorage.getItem("basket")) || []
let computers = [
    
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Acer", image: "https://bestel.az/storage/29628/conversions/media-library1tSMxV-lg.jpg", name: "Acer", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},

    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "hp", image: "https://bestel.az/storage/23777/conversions/media-library7ul5Fu-lg.jpg", name: "HP", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},

    { category: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMDwBUx4mafRbLLmpGtT0U8kYnuweHMZ-xA&s", name: "Apple", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"MacOs", videoCard:"12"},
    { category: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMDwBUx4mafRbLLmpGtT0U8kYnuweHMZ-xA&s", name: "Apple", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"MacOs", videoCard:"12"},
    { category: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMDwBUx4mafRbLLmpGtT0U8kYnuweHMZ-xA&s", name: "Apple", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"MacOs", videoCard:"12"},
    { category: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMDwBUx4mafRbLLmpGtT0U8kYnuweHMZ-xA&s", name: "Apple", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"MacOs", videoCard:"12"},
    { category: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMDwBUx4mafRbLLmpGtT0U8kYnuweHMZ-xA&s", name: "Apple", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"MacOs", videoCard:"12"},
    { category: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMDwBUx4mafRbLLmpGtT0U8kYnuweHMZ-xA&s", name: "Apple", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"MacOs", videoCard:"12"},
    { category: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMDwBUx4mafRbLLmpGtT0U8kYnuweHMZ-xA&s", name: "Apple", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"MacOs", videoCard:"12"},
    { category: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMDwBUx4mafRbLLmpGtT0U8kYnuweHMZ-xA&s", name: "Apple", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"MacOs", videoCard:"12"},
    { category: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMDwBUx4mafRbLLmpGtT0U8kYnuweHMZ-xA&s", name: "Apple", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"MacOs", videoCard:"12"},
    { category: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMDwBUx4mafRbLLmpGtT0U8kYnuweHMZ-xA&s", name: "Apple", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"MacOs", videoCard:"12"},
    { category: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMDwBUx4mafRbLLmpGtT0U8kYnuweHMZ-xA&s", name: "Apple", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"MacOs", videoCard:"12"},

    { category: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMDwBUx4mafRbLLmpGtT0U8kYnuweHMZ-xA&s", name: "Apple", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"MacOs", videoCard:"12"},
    { category: "Apple", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMDwBUx4mafRbLLmpGtT0U8kYnuweHMZ-xA&s", name: "Apple", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"MacOs", videoCard:"12"},
    
    { category: "Asus", image: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", name: "Asus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Asus", image: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", name: "Asus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Asus", image: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", name: "Asus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Asus", image: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", name: "Asus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Asus", image: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", name: "Asus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Asus", image: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", name: "Asus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Asus", image: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", name: "Asus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Asus", image: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", name: "Asus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Asus", image: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", name: "Asus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Asus", image: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", name: "Asus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Asus", image: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", name: "Asus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Asus", image: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", name: "Asus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Asus", image: "https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/", name: "Asus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},

    { category: "Dell", image: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", name: "Dell", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Dell", image: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", name: "Dell", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Dell", image: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", name: "Dell", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Dell", image: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", name: "Dell", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Dell", image: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", name: "Dell", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Dell", image: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", name: "Dell", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Dell", image: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", name: "Dell", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Dell", image: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", name: "Dell", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Dell", image: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", name: "Dell", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Dell", image: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", name: "Dell", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Dell", image: "https://m.media-amazon.com/images/I/61-yln4IXjL._AC_UF894,1000_QL80_.jpg", name: "Dell", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Lenovo", image: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", name: "Lenovo", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Lenovo", image: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", name: "Lenovo", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Lenovo", image: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", name: "Lenovo", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Lenovo", image: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", name: "Lenovo", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Lenovo", image: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", name: "Lenovo", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Lenovo", image: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", name: "Lenovo", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Lenovo", image: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", name: "Lenovo", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Lenovo", image: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", name: "Lenovo", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Lenovo", image: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", name: "Lenovo", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Lenovo", image: "https://procomp.az/storage/media/GLpP4iKYwyee43bxjzpTWH1cm9QAqlCH9dUKCS0b.jpg", name: "Lenovo", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "lg", image: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", name: "lg", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "lg", image: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", name: "lg", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "lg", image: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", name: "lg", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "lg", image: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", name: "lg", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "lg", image: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", name: "lg", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "lg", image: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", name: "lg", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "lg", image: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", name: "lg", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "lg", image: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", name: "lg", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "lg", image: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", name: "lg", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "lg", image: "https://m.media-amazon.com/images/I/81d6wn+nckL.jpg", name: "lg", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Casper", image: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", name: "Casper", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Casper", image: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", name: "Casper", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Casper", image: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", name: "Casper", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Casper", image: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", name: "Casper", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Casper", image: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", name: "Casper", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Casper", image: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", name: "Casper", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Casper", image: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", name: "Casper", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Casper", image: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", name: "Casper", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Casper", image: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", name: "Casper", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Casper", image: "https://cdn.cimri.io/image/1200x1200/casper-nirvana-c370-4020-4c00b-intel-celeron-n4020-4gb-ram-120gb-ssd-windows-11-home-15-6-inc-laptop-notebook_848029192.jpg", name: "Casper", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Fujitsu", image: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", name: "Fujitsu", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Fujitsu", image: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", name: "Fujitsu", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Fujitsu", image: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", name: "Fujitsu", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Fujitsu", image: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", name: "Fujitsu", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Fujitsu", image: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", name: "Fujitsu", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Fujitsu", image: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", name: "Fujitsu", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Fujitsu", image: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", name: "Fujitsu", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Fujitsu", image: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", name: "Fujitsu", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Fujitsu", image: "https://m.media-amazon.com/images/I/81HmU0UvXZL._AC_UF1000,1000_QL80_.jpg", name: "Fujitsu", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Nexus", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", name: "Nexus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Nexus", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", name: "Nexus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Nexus", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", name: "Nexus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Nexus", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", name: "Nexus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Nexus", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", name: "Nexus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Nexus", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", name: "Nexus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Nexus", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", name: "Nexus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Nexus", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", name: "Nexus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Nexus", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYI8lA7eVV7NQOl2kCekzt3SJT06ZcmBmSQ&s", name: "Nexus", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Samsung", image: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", name: "Samsung", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Samsung", image: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", name: "Samsung", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Samsung", image: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", name: "Samsung", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Samsung", image: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", name: "Samsung", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Samsung", image: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", name: "Samsung", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Samsung", image: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", name: "Samsung", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Samsung", image: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", name: "Samsung", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Samsung", image: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", name: "Samsung", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Samsung", image: "https://m.media-amazon.com/images/I/61oTh3Oun5L.jpg", name: "Samsung", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Toshiba", image: "https://compstore.az/data/img/201202/660/medium_l750.webp", name: "Toshiba", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Toshiba", image: "https://compstore.az/data/img/201202/660/medium_l750.webp", name: "Toshiba", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Toshiba", image: "https://compstore.az/data/img/201202/660/medium_l750.webp", name: "Toshiba", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Toshiba", image: "https://compstore.az/data/img/201202/660/medium_l750.webp", name: "Toshiba", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Toshiba", image: "https://compstore.az/data/img/201202/660/medium_l750.webp", name: "Toshiba", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Toshiba", image: "https://compstore.az/data/img/201202/660/medium_l750.webp", name: "Toshiba", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Toshiba", image: "https://compstore.az/data/img/201202/660/medium_l750.webp", name: "Toshiba", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Toshiba", image: "https://compstore.az/data/img/201202/660/medium_l750.webp", name: "Toshiba", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", name: "Sony", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", name: "Sony", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", name: "Sony", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", name: "Sony", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", name: "Sony", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", name: "Sony", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", name: "Sony", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", name: "Sony", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", name: "Sony", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
    { category: "Sony", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YfuwI8nVRpheB1M0QGwL7mrGKuCLYyFUFw&s", name: "Sony", description: "tesvir", price: 123, isNew: "xeyr", telefon: "010-727-7847", processor:"12", ram:"Core i5", daim:"256", storageType:"SDD", os:"Windows10", videoCard:"12"},
]
let computerTable = JSON.parse(localStorage.getItem("computers")) || []
let addedMassivs = computerTable.concat(computers)
function displayComputers(category) {
    document.querySelector(".card-grid").innerHTML = '';
    let filteredComputers = (category === "All") ? addedMassivs : addedMassivs.filter(computer => computer.category === category);

    filteredComputers.forEach(item => {
        let newCard = `
        <div class="card2 d-block">
            <img class="imgC" src="${item.image}" alt="">
            <p class="nameC">Ad: ${item.name}</p>
            <p>Təsvir: ${item.description}</p>
            <p class="priceC">Qiymət: ${item.price}</p>
            <p>EMS: ${item.os}</p>
            <p>Telefon: 010-727-7847</p>
            <button type="button" class="btn btn-dark btnss w-100 m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Show more</button>
            <button type="button" class="btn btn-success BaskterBtn w-100 m-1">Add to Basket</button>
        </div>
        `;
        document.querySelector(".card-grid").innerHTML += newCard;
    })
    
    function updateBasketBadge() {
        const badgeElement = document.querySelector(".btn2 .badge");
        badgeElement.textContent = addedItemsToBasket.length;
        if(badgeElement.textContent === "0"){
            document.querySelector(".badge").className = "d-none"
        }
    }
    
    // Call the function on page load
    updateBasketBadge();
    
    document.querySelectorAll(".BaskterBtn").forEach((btn, index) => {
        btn.addEventListener('click', function() {
            let demo = btn.parentElement; 
    
            let basktetObj = {
                imageOfbasket: demo.querySelector("img").src,
                priceOfComp: demo.querySelector("p:nth-of-type(3)").textContent.split(": ")[1],
                kategoryOFcomp: demo.querySelector("p:first-of-type").textContent.split(": ")[1]
            };
    
            addedItemsToBasket.push(basktetObj);
            localStorage.setItem("basket", JSON.stringify(addedItemsToBasket));
            console.log(addedItemsToBasket); 
            alert("The computer added to Basket")
            updateBasketBadge();
        });
    });
    
    // Example of how to handle the removal from the basket
    function removeItem(index) {
        addedItemsToBasket.splice(index, 1); // Remove item from array
        localStorage.setItem("basket", JSON.stringify(addedItemsToBasket)); // Update local storage
        displayBasketItems(); // Refresh the displayed items
    
        // Update the badge count
        updateBasketBadge();
    }

    // Add event listeners for the "Show more" buttons
    document.querySelectorAll(".btnss").forEach((btns, index) => {
        btns.addEventListener("click", function() {
            const item = filteredComputers[index]; // Get the correct item

            // Clear existing modal content
            const modal = document.querySelector(".modal .modal-content");
            modal.innerHTML = `
            <div class="modal-header d-flex align-items-center justify-content-center">
                <h4 class="modal-title">Komputer Haqqinda Melumat</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="Image d-flex align-items-center justify-content-center">
                    <img id="ModalImage" style="width: 300px;" src="${item.image}" alt="">
                </div>
                <div class="deskription">
                    <p>Ad: ${item.name}</p>
                    <p>Təsvir: ${item.description}</p>
                    <p>Qiymət: ${item.price}</p>
                    <p>Telefon: 010-727-7847</p>
                    <p>Yeni: ${item.isNew}</p>
                    <p>Yaddas: ${item.processor}</p>
                    <p>CPU: ${item.ram}</p>
                    <p>Daimi Yaddas: ${item.storageType}</p>
                    <p>Emeliyyat Sistemi: ${item.os}</p>
                    <p>Video Card: ${item.videoCard}</p>
                </div>
            </div>
            `;
        });
    });
}

// Initialize with the 'All' category
document.addEventListener("DOMContentLoaded", () => {
    displayComputers('All');

    document.querySelectorAll(".list-group-item").forEach(item => {
        item.addEventListener("click", function() {
            document.querySelectorAll(".list-group-item").forEach(el => el.classList.remove("active"));
            this.classList.add("active");

            let selectedCategory = this.id;
            displayComputers(selectedCategory);
        });
    });
});

// Search functionality
document.querySelector(".btnbtnbt").addEventListener("click", function () {
    let searchInp = document.querySelector(".btnbt").value.toLowerCase();
    let filtered = addedMassivs.filter((novost) => {
        return novost.name.toLowerCase().includes(searchInp) || 
               novost.description.toLowerCase().includes(searchInp) ||
               novost.category.toLowerCase().includes(searchInp);
    });

    document.querySelector(".card-grid").innerHTML = ""; 

    filtered.forEach((item) => {
        let newCard = `
        <div class="card2 d-block">
            <img src="${item.image}" alt="">
            <p>Ad: ${item.name}</p>
            <p>Təsvir: ${item.description}</p>
            <p>Qiymət: ${item.price}</p>
            <p>EMS: ${item.os}</p>
            <p>Telefon: 010-727-7847</p>
            <button type="button" class="btn btn-dark btnss w-100 m-1" data-bs-toggle="modal" data-bs-target="#exampleModal">Show more</button>
            <button type="button" class="btn btn-success BaskterBtn w-100 m-1">Add to Basket</button>
        </div>
        `;
        document.querySelector(".card-grid").innerHTML += newCard;
    });

    document.querySelector(".btnbt").value = ""; // Clear the search input
});


