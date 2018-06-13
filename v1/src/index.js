import React from "react";
import { render } from "react-dom";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";

class App extends React.Component {
  state = {
    anchorEl: null,
    dialogOpen: false
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    console.log("moremenu", event);
    console.log(event.isPropagationStopped());
    if (!event || event.keyCode !== 9) {
      this.setState({ anchorEl: null });
    }
  };

  close = () => {
    this.setState({ dialogOpen: false });
  };

  open = () => {
    this.setState({ dialogOpen: true });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <React.Fragment>
        <IconButton onClick={this.handleClick}>Open menu</IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.open}>Open dialog</MenuItem>
          <Dialog open={this.state.dialogOpen} onClose={this.close}>
            <div style={{ width: 200, height: 200 }}>Testing</div>
          </Dialog>
        </Menu>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
