import React, {Component} from 'react'


//class based component
/* syntax of class based component 
class LoginComponent extends Component{
    constructor(){

    }
    render(){
        return <div></div>
    }

}
*/
export class RegisterComponent extends Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <form>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">First Name</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPassword3"/>
                </div>
            </div>

            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Last Name</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPassword3"/>
                </div>
            </div>

            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail3"/>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3"/>
                </div>
            </div>
            <fieldset class="form-group">
                <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                    <label class="form-check-label" for="gridRadios1">
                        Male
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                    <label class="form-check-label" for="gridRadios2">
                        Female
                    </label>
                    </div>
                    
                </div>
                </div>
            </fieldset>
            <div class="form-group row">
                <div class="col-sm-2">I agree to the Ts and Cs</div>
                <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label class="form-check-label" for="gridCheck1">
                    </label>
                </div>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                <button type="submit" class="btn btn-primary">Register</button>
                </div>
            </div>
        </form>
            
        </div>
  
    }
    //render must return one single tag

}