$(function(){
  $('.include-header').load('/include/header.html');
  $('.include_home_header').load('/include/homeHeader.html');
  $('.include-footer').load('/include/footer.html');
  $('.include-gototop').load('/include/gototop.html');

  // tab_menu
  $('.tab_menu .tab_btn span').click(function(){
    $('.tab_menu .tab_btn span').removeClass('active')
    $(this).addClass('active')
    
    var tabcontent = $(this).attr('data-text')

    $('.tab_menu .tab_item').removeClass('active')
    $('#' + tabcontent).addClass('active')
  })

  // 마우스 변경
  const cursor = document.querySelector(".mouse__cursor");
  const cursor2 = document.querySelector(".mouse__cursor2");

  // 커서 좌표값 할당
  window.addEventListener("mousemove", e => {
      // gsap
      gsap.to(cursor, {duration: 0.3, left: e.pageX - 5, top: e.pageY -5});
      gsap.to(cursor2, {duration: 0.8, left: e.pageX - 15, top: e.pageY -15});

      // forEach
      document.querySelectorAll(".mouse__text span").forEach(span => {
          span.addEventListener("mouseenter", () => {
              cursor.classList.add("active");
              cursor2.classList.add("active");
          });
          span.addEventListener("mouseleave", () => {
              cursor.classList.remove("active");
              cursor2.classList.remove("active");
          });
      });
  });

  // sub page menu
  let links = gsap.utils.toArray(".sub_page .menu ul li a");

    links.forEach(link => {
        let element = document.querySelector(link.getAttribute("href"));
        let linkST = ScrollTrigger.create({
            trigger: element,
            start: "top top"
        });

        ScrollTrigger.create({
            trigger: element,
            start: "top center",
            end: "bottom center",
            onToggle: self => setActive(link)
        });

        link.addEventListener("click", e => {
            e.preventDefault();
            gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
        })
    });

    function setActive(link){
        links.forEach(el => el.classList.remove("active"));
        link.classList.add("active");
    }
});

