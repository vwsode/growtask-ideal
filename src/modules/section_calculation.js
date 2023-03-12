(function(){ 

    const goodReview = document.querySelector('.calculation__review-btn-good');
    const badReview = document.querySelector('.calculation__review-btn-bad');

    goodReview.addEventListener('click', () => {
        goodReview.classList.remove('calculation__review-btn-good--disabled')
        goodReview.classList.add('calculation__review-btn-good--active')
        
        badReview.classList.add('calculation__review-btn-bad--disabled')
        badReview.classList.remove('calculation__review-btn-bad--active')
    })
    
    badReview.addEventListener('click', () => {
        goodReview.classList.remove('calculation__review-btn-good--active')
        goodReview.classList.add('calculation__review-btn-good--disabled')
        
        badReview.classList.remove('calculation__review-btn-bad--disabled')
        badReview.classList.add('calculation__review-btn-bad--active')
    })
})()