import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function QuestionForms() {
    const [ formName, setFormName ] = useState('New Form')

  return (
    <>
      <Link to={'/question-forms'}> Template  </Link>
      <Link to={'/question-forms/answers'}> Answers  </Link>
      <div style={{ background: 'gray', padding: '10px'}}>
        <div className="form-container"> 
          <div className="form" style={{ width: '500px', margin: '0 auto'  }}>
            <div className="form-header" style={{ display: 'flex', background: 'white', flexDirection: 'column', border: '3px solid gray', padding: '15px' }}>
              <input type="text" value={formName} onChange={(e) => setFormName(e.target.value)} style={{ border: 'none', outline: 'none', borderBottom: '1px solid grey', marginTop: '15px', fontSize: '24px' }} />
              <input type="text" placeholder='Description' style={{ border: 'none', outline: 'none', borderBottom: '1px solid grey', marginTop: '15px' }} />
            </div>
          </div>

          <div className="form" style={{ width: '500px', margin: '10px auto'  }}>
            <div className="form-question" style={{ display: 'flex', background: 'white', flexDirection: 'column', border: '3px solid gray', padding: '15px' }}>
              <input type="text" placeholder={'Question'} className="question-title" style={{ border: 'none', outline: 'none', borderBottom: '1px solid grey', marginTop: '15px', padding: '10px', fontSize: '20px' }}/>
              
              
              
              <div className="question-answers">    
                  <input id='answer-1' type="radio" name='question-answer' />
                  <label htmlFor="answer-1"> Answer 1 </label><br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuestionForms
