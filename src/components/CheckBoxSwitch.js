import React, { Component } from 'react';

class CheckBoxSwitch extends Component {

    constructor() {
        super();
        this.state = {
            checkedUrl: true,
            checkedBalise: false
        };

        this.switchCheckBox = this.switchCheckBox.bind(this);
    }

    switchCheckBox(e) {
        if (e.currentTarget.checked) {
            this.setState({
               checkedUrl: !this.state.checkedUrl ,
               checkedBalise: !this.state.checkedBalise
            });
        }
    }

    render() {
        return (
            <div className="container">
              <div className="row">
                <form action="#">
                  <div className="col s2">
                    <label>
                      <input id="{this.props.firstCheckbox}-checkbox" type="checkbox" checked={this.state.checkedUrl} onClick={this.switchCheckBox} />
                      <span>{this.props.firstCheckbox}</span>
                    </label>
                  </div>
                  <div className="col s2">
                    <label>
                      <input id="{this.props.secondCheckbox}-checkbox" type="checkbox" checked={this.state.checkedBalise} onClick={this.switchCheckBox} />
                      <span>{this.props.secondCheckbox}</span>
                    </label>
                  </div>
                </form>
              </div> 
            </div> 
        );
    }
}

export default CheckBoxSwitch;
