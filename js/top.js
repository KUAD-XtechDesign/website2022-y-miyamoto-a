// 今回の交差を監視する要素
const boxes = document.querySelectorAll(".shinario_set");

const options = {
  root: null, // 今回はビューポートをルート要素とする
  rootMargin: "-40% 0px -50% 0px", // ビューポートの中心を判定基準にする
  threshold: 0 // 閾値は0
};
const observer = new IntersectionObserver(doWhenIntersect,options);
// それぞれのboxを監視する
boxes.forEach(box => {
  observer.observe(box);
});

function doWhenIntersect(entries) {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      $(".active").removeClass("active");
      entry.target.classList.add("active");
    }else{
      entry.target.classList.remove("active");
    }
  });
}