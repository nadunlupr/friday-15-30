import { Component } from 'react';

class LessonCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShown: false,
            count: 10
         }
    }
    render() {
        const {
            name,
            description
        } = this.props;
        return (
            <div className="lesson-card">
                <h2>{name}</h2>
                <div>
                    <p>
                        Let's brush up our html, js and css knowledge
                    </p>
                </div>
                <button onClick={() => this
                    .setState({...this.state,
                                //isShown: false,
                                //count: 10,
                                isShown: !this.state.isShown })}>
                    View Summary
                </button>
                {
                    this.state.isShown &&
                    <div id="moreInfo"
                        className="more-info-panel">
                        <p className="black-text">
                            {this.props.description}
                        </p>
                        <a href="./lesson-page.html">Go to lesson</a>
                    </div>
                }

            </div>
        );
    }
}

export default LessonCard;