const tabsList = document.querySelector('.tabs');

if (tabsList) {
    let tabs = document.querySelectorAll(".tab");
    let contentTabs = document.querySelectorAll(".contentTab");
    let tabActive = document.querySelector(".tab.active");
    let contentTabActive = document.querySelector(".contentTab.active");
    tabs.forEach(function(tab) {
        tab.addEventListener("click", function() {
            tabActive.classList.remove("active");
            tab.classList.add("active");
            tabActive = document.querySelector(".tab.active");
            contentTabs.forEach(function(contentTab) {
                if (contentTab.dataset.id === tabActive.id) {
                    contentTabActive.classList.remove("active");
                    contentTab.classList.add("active");
                }
            });
            contentTabActive = document.querySelector(".contentTab.active");
        });
    });
}