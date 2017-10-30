function ImageCounter(props) {  
    return (
        <div className="image-counter">
            <div className="count">{props.count}</div>
            <img src={'img/' + props.imageUrl} onClick={props.onCount} />
        </div>
    );
};


class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    handleClick() {
        this.setState({ 
            count: this.state.count + 1 
        });
    }

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <ImageCounter imageUrl={this.props.imageUrl} count={this.state.count} onCount={this.handleClick.bind(this)} />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
};


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.heroes.map( (item, index) =>
                     <Hero key={index} title={item.title} imageUrl={item.imageUrl} />
                )};
            </div>
        );
    }
};

const data = [
    {
        id: 1,
        title: 'ARTOX',
        imageUrl: 'artox.png'
    },
    {
        id: 2,
        title: 'Relax',
        imageUrl: 'relax.jpeg'
    },
    {
        id: 3,
        title: '103',
        imageUrl: '103.jpeg'
    },
    {
        id: 4,
        title: 'Dom',
        imageUrl: 'dom.jpeg'
    }
];

ReactDOM.render(<App heroes={data} />, document.getElementById('root'));