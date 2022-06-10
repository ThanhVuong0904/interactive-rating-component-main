const cardRatings = document.querySelectorAll('.card-rating')
const submitBtn = document.querySelector('.card-submit')

let lastClickRating
cardRatings.forEach(card => {
    card.addEventListener('click', () => {
        if(lastClickRating) {
            lastClickRating.classList.remove('active')
        }
        card.classList.add('active')
        lastClickRating = card
    })
})
submitBtn.addEventListener('click', () => {
    if(!lastClickRating) {
        return
    }
    //Card survey
    const survey = document.querySelector('.container.survey')
    survey.style.display = 'none'

    //Card after submit
    const surveySuccess = document.querySelector('.container.success')
    surveySuccess.style.display = 'flex'

    //Show Rating
    const result = document.querySelector('.card-result')
    result.innerHTML = `You selected out ${lastClickRating.innerHTML} of 5`
})