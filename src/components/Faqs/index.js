import {Component} from 'react'
import FaqItem from '../FaqItem/index'
import './index.css'

// const openedIds = []

class Faqs extends Component {
  state = {openedIds: []}

  addToOpens = id => {
    // console.log(id)
    const {openedIds} = this.state
    if (openedIds.includes(id)) {
      this.setState(prev => ({
        openedIds: prev.openedIds.filter(element => element !== id),
      }))
    } else {
      this.setState(prev => ({
        openedIds: [...prev.openedIds, id],
      }))
    }
  }

  render() {
    const {faqsList} = this.props
    const {openedIds} = this.state
    console.log(openedIds)
    return (
      <div className="bg">
        <div className="card">
          <h1 className="head">FAQS</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem
                faq={each}
                key={each.id}
                addToOpens={this.addToOpens}
                openedIds={openedIds}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
