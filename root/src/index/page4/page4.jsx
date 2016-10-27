const React = require('react');

import Page from './../page'

require('./page4.scss')

export default class Page4 extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <Page className="p4">
        <div>
          <h1><span>联系我</span><small><i>Get ahold of me</i></small></h1>
          <p>
            <a href="mailto:a3824036@126.com" target="_blank" className="i-serious">Email</a><span>//</span>
            <a href="https://github.com/sekaiamber" target="_blank" className="i-not-serious">Github</a>
          </p>
        </div>
      </Page>
    );
  }
}