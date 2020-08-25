'use strict';


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "check" };
  }

  render() {

    return e(
      'button',
      { onClick: () => this.onclick() },
      this.state.text
    );
  }

  onclick() {
    console.log("clicked")
  }

}

class Check_DiscordBot extends Button {
  constructor(props) {
    super(props)
    this.state = { text: "Check"}
  }

  onclick() {
    console.log("check")
  }

}

class Reboot_DiscordBot extends Button {
  constructor(props) {
    super(props)
    this.state = { text: "Reboot"}
  }

  onclick() {
    console.log("reboot")
  }

}

ReactDOM.render(e(Check_DiscordBot), document.querySelector('#check_discordBot'));
ReactDOM.render(e(Reboot_DiscordBot), document.querySelector('#reboot_discordBot'));