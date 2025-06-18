const viewMoreBtn = document.getElementById('view-more')
const blog4 = document.getElementById('blog4')
const blog5 = document.getElementById('blog5')

viewMoreBtn.addEventListener('click',function(){
    viewMoreBtn.style.display = 'none'
    blog4.classList.remove('hidden')
    blog5.classList.remove('hidden')
})