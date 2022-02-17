addeventlistener('DOMContentLoaded', () =>{
    const btn_menu = document.queryselector('.btnmenu')
    if (btn_menu) {
    btn_menu.addeventlistener('click', () => {
        const menu_items = document.queryselector('.menu_items')
        menu_items.classlist.toggle('show')
    })
    }
})