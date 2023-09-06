import React from 'react'
import '../Styles/EmailForm.css'

function EmailForm() {
  return (
    <>
        <form>
            <div id='form'>
                <div id='nameContainer'>
                    <div id='fnameContainer'>
                        <label for="fnameText" id='labels'>First name:</label>
                        <input type="text" id="fnameText" name="fnameText" />
                    </div>
                    <div id='lnameContainer'>
                        <label for="lnameText" id='labels'>Last name:</label>
                        <input type="text" id="lnameText" name="lnameText" />
                    </div>
                </div>
                <div id='emailContainer'>
                    <label for="emailText" id='labels'>Email:</label>
                    <input type="email" id="emailText" name="emailText" />
                </div>
                <div id='categoryContainer'>
                    <label for="category" id='labels'>Category:</label>
                    <select id='category'>
                        <option value="option1">option1</option>
                        <option value="option2">option2</option>
                        <option value="option3">option3</option>
                    </select>
                </div>
                <div id='questionContainer'>
                    <label for="question" id='labels'>Question:</label>
                    <textarea id='question' />
                </div>
                <div id='submitContainer'>
                    <div id='submitButon'>
                        Submit
                    </div>
                </div>
            </div>
        </form>
    </>
  )
}

export default EmailForm