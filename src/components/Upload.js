import React from 'react'

let urls = new WeakMap()

let blobUrl = blob => {
  if (urls.has(blob)) {
    return urls.get(blob)
  } else {
    let url = URL.createObjectURL(blob)
    urls.set(blob, url)
    return url
  }
}

class Upload extends React.Component {
  state = { file: null, counter: 0 }

  refresh = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }))
  }

  componentDidMount() {
    this.timer = setInterval(this.refresh, 100)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  onDrag = event => {
    event.preventDefault()
  }

  onDrop = event => {
    event.preventDefault()
    let file = event.dataTransfer.files[0]
    this.setState({ file })
  }

  render() {
    let { file } = this.state
    let url = file && blobUrl(file)

    return (
      <div onDragOver={this.onDrag} onDrop={this.onDrop}>
        <p>Drop an image!</p>
        <img src={url} />
      </div>
    )
  }
}


export default Upload
