import React, { Component } from 'react';
import { Button } from 'antd'
import { connect } from 'react-redux'
import { CSSConditionRule } from '../../store/cs_redux'

@connect(
  state => state.cs,
  {CSSConditionRule}
)
class App extends Component {
  handClick = () => {
    alert(11)
    this.props.CSSConditionRule()
    // this.props.history.push('/cs')
  }

  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">老鸭爬封面</h1>
        </header>
        <Button onClick={this.handClick}>BUtton</Button>
        <p className="App-intro">
          To get started, edit <code>田东</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
