class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            },
            watch: null,
            savedTimes: []
        };
    }
    getFormattedTime() {
        return this.state.times.seconds;
    }
    start() {
        if (!this.state.running) {
            this.setState({
                running: true,
                watch: setInterval(() => this.step(), 10)
            });
        }
    }
    stop() {
        this.setState({
            running: false
        });
        clearInterval(this.state.watch);
    }
    step() {
        if (!this.state.running) return;
        this.calculate();
    }
    calculate() {
        this.setState({
            times: {
                seconds: this.state.times.seconds + 1
            }
        })
    }
    render() {
    	return (
            <div>
                <nav class="controls">
                  <a href="#" class="button" id="start" onClick={this.start.bind(this)}>Start</a>
                  <a href="#" class="button" id="stop" onClick={this.stop.bind(this)}>Stop</a>
                  <a href="#" class="button" id="reset">Reset</a>
                  <a href="#" class="button" id="write">Write</a>
                </nav>
                <div class="stopwatch">{ this.getFormattedTime() /* mm:ss:ms */ }</div>
                <ul class="results"></ul>
            </div>
        );
    }
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

function save(timer) {
    let res = document.createElement('li');
    res.innerText = timer;

    let tab = document.querySelector('.results');
    tab.insertBefore(res, tab.childNodes[0])
}

ReactDOM.render(<Stopwatch />, document.getElementById("app"));

/*const stopwatch = new Stopwatch(
    document.querySelector('.stopwatch'));*/

// let stopwatch = React.createElement(Stopwatch);
// ReactDOM.render(stopwatch, document.querySelector('.stopwatch'));

// let startButton = document.getElementById('start');
// startButton.addEventListener('click', () => stopwatch.start());

// let stopButton = document.getElementById('stop');
// stopButton.addEventListener('click', () => stopwatch.stop());

// let resetButton = document.getElementById('reset');
// resetButton.addEventListener('click', () => stopwatch.reset());

// let writeButton = document.getElementById('write');
// writeButton.addEventListener('click', () => stopwatch.write());