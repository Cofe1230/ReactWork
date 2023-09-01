import React, {Component} from 'react';

class PhoneForm extends Component{
    render(){
        return(
            <div>
                <form>
                    <input placeholder='이름' name='name'/>
                    <input placeholder='전화번호' name='phone'/>
                    <button type='submit'>등록</button>
                </form>
            </div>
        )
    }
}
export default PhoneForm;