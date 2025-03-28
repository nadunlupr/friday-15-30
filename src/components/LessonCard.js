import { Component } from 'react';
import axios from 'axios';
import loaderImg from '../assets/images/loader.gif';
import { Link } from 'react-router';

class LessonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: false,
            description: undefined,
        }
    }
    render() {
        const {
            name,
            description,
        } = this.props;
        return (
            <div className="lesson-card">
                <h2>{name}</h2>
                <div>
                    <p>
                        Let's brush up our html, js and css knowledge
                    </p>
                </div>
                <button onClick={() => this.onViewSummaryClicked()}>
                    View Summary
                </button>
                {
                    this.state.isShown &&
                    <div>
                        {
                            this.state.description ?
                            <div id="moreInfo"
                                className="more-info-panel">
                                <p className="black-text">
                                    {this.state.description}
                                </p>
                                <Link to="/lesson">Go to lesson</Link>
                            </div> :
                            <div>
                                <img src={loaderImg} width="40px" />
                            </div>
                        }
                    </div>
                }

            </div>
        );
    }

    onViewSummaryClicked() {
        this.setState({
            ...this.state,
            //isShown: false,
            //count: 10,
            isShown: !this.state.isShown
        });
        this.getDescription();
    }

    getDescription() {
        axios.get(`https://www.sfu.ca/bin/wcm/course-outlines?2015/summer/cmpt/120/${this.props.id}`)
            .then(({ data }) => {
                const {
                    info: {
                        description
                    } = {}
                } = data;
                console.log('response: ', description);
                this.setState(prevState => ({
                    ...prevState,
                    description
                }))
            })
    }
}

export default LessonCard;