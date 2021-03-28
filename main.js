
let $place_list = document.querySelectorAll('aside ul.places li'),
    $article_list = document.querySelectorAll('article')

let prev_visible_item = 0

for (let i = 0; i < $place_list.length; i++){
    $place_list[i].addEventListener('mousemove', (event)=>{
        $place_list[i].style.fontWeight = 'bold'
        $place_list[i].style.cursor = 'pointer'
        $place_list[i].style.paddingLeft = '10px'
        $place_list[i].style.color = 'red'
        $place_list[i].setAttribute('class', 'point')
    })
    $place_list[i].addEventListener('mouseout', (event)=>{
        $place_list[i].style.fontWeight = 'normal'
        $place_list[i].style.cursor = 'pointer'
        $place_list[i].style.paddingLeft = '0px'
        $place_list[i].style.color = 'black'
        $place_list[i].removeAttribute('class')
    })
    $place_list[i].addEventListener('click', function(){
        if ($article_list[i+1].style.display != 'block'){
            $article_list[i+1].style.display = "block"
            $article_list[prev_visible_item].style.display = "none"
            prev_visible_item = i + 1
        }
    })
}