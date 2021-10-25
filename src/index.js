import React from "react";
import ReactDOM from "react-dom";
import RichTextEditor from 'react-rte';
// import RichTextMarkdown from './TextEditor.js'

class App extends React.Component{
  state = {
    value: RichTextEditor.createEmptyValue()
  }
  onChange = (value) => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      );
    }
  };
  render(){
    return(
      <section>

       <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
          editorStyle={{ height: '50vh' }}
        />

      </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));