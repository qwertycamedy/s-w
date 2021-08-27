const tabsBtn   = document.querySelectorAll(".insights__breadcrumbs-button");
const tabsItems = document.querySelectorAll(".insights__tab-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}

document.querySelector('.insights__breadcrumbs-button').click();


AOS.init(
    {
        offset: 100,
        ease: 'ease',
        once: true,
    }
);
