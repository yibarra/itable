import { Component, createRef} from 'react';

class AudioAnalyser extends Component {
  public analyser: any = null;
  public audioContext: any = null;
  
  private dataArray: any;
  private source: any;
  private rafId: any;

  public state: any;
  public props: any;
  public element: any;

  constructor(props: any) {
    super(props);

    this.state = {
      audioData: new Uint8Array(0)
    };

    this.tick = this.tick.bind(this);
    this.element = createRef();
  }

  componentDidMount() {
    this.audioContext = new window.AudioContext();
    this.analyser = this.audioContext.createAnalyser();
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.source = this.audioContext.createMediaStreamSource(this.props.audio);

    this.source.connect(this.analyser);
    this.rafId = requestAnimationFrame(this.tick);
  }

  tick() {
    this.analyser.getByteTimeDomainData(this.dataArray);
    this.setState({ 
      audioData: this.dataArray
    });
    this.draw();

    this.rafId = requestAnimationFrame(this.tick);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
    this.analyser.disconnect();
    this.source.disconnect();
  }

  draw() {
    if (!this.element.current) return false;

    const canvas = this.element.current;
    const height = canvas.height;
    const width = canvas.width;

    const context = canvas.getContext('2d');
    const sliceWidth = (width * 1.0) / this.state.audioData.length;
    let x = 0;

    context.lineWidth = 2;
    context.strokeStyle = '#000000';
    context.clearRect(0, 0, width, height);

    context.beginPath();
    context.moveTo(0, height / 2);
    
    for (const item of this.state.audioData) {
      const y = (item / 255.0) * height;
      context.lineTo(x, y);
      x += sliceWidth;
    }

    context.lineTo(x, height / 2);
    context.stroke();
  };

  render() {
    return <canvas
      height="10"
      width="220"
      ref={this.element} />;
  }
}

export default AudioAnalyser;