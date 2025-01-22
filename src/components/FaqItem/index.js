const FaqItem = props => {
  const {faq, addToOpens, openedIds} = props
  const {id, questionText, answerText} = faq
  //   console.log(questionText)
  const onFaq = () => {
    addToOpens(id)
  }

  const imgUrl = openedIds.includes(id)
    ? {
        img: 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png',
        altname: 'minus',
      }
    : {
        img: 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png',
        altname: 'plus',
      }

  return (
    <li className="faq-con">
      <div className="sub-con">
        <h1 className="para">{questionText}</h1>
        <div>
          <img
            src={imgUrl.img}
            alt={imgUrl.altname}
            className="icon"
            onClick={onFaq}
          />
        </div>
      </div>
      {openedIds.includes(id) && (
        <div>
          <hr />
          <p className="dis">{answerText}</p>
        </div>
      )}
    </li>
  )
}
export default FaqItem
