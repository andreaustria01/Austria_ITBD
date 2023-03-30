var menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu(manuList) {
    if (menuList.style.maxHeight == "0px")
        {
            menuList.style.maxHeight = "130px";
        }
    else 
    {
        menuList.style.maxHeight = "0px";
    }
}