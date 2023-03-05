$( document ).ready(function() {
    const navbar = document.querySelector('.navbar');
    const showOnPx = 100;
    const backToTopButton = document.querySelector(".back-to-top");
    const pageProgressBar = document.querySelector(".progress-bar");
    let addClass = 'color';
    let amountItem = $('.amount-item');
    let amountItemChild2 = $('.amount :nth-child(2)');

    const scrollContainer = () => {

        return document.documentElement || document.body;
    };
    const goToTop = () => {

        document.body.scrollIntoView({
            behavior: "smooth"
        });
    };

    navbar.style.display = "none";
    amountItemChild2.addClass(addClass);

    document.addEventListener("scroll", () => {
        const scrolledPercentage = (
            scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight)
        ) * 100;

        pageProgressBar.style.width = `${scrolledPercentage}%`;

        if (scrollContainer().scrollTop > showOnPx) {
            backToTopButton.classList.remove("hidden");
            if (scrollContainer().scrollTop > 350) {
                navbar.style.display = "block";
            }
            if (scrollContainer().scrollTop < 350) {
                navbar.style.display = "none";
            }
        } else {
            backToTopButton.classList.add("hidden");
        }
    });

    backToTopButton.addEventListener("click", goToTop);

    let $cols = amountItem.click(function(e) {
        if ($('#donation-input').val() === ''){
            $cols.removeClass(addClass);
            $(this).addClass(addClass);
        }
        if ($('#donation-input').val() !== ''){
            $cols.removeClass(addClass);
        }
    });

    $('#donation-input').click(function () {
        amountItem.removeClass(addClass)
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
