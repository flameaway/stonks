const { React } = require("powercord/webpack");
const { SwitchItem } = require("powercord/components/settings");

module.exports = class Settings extends (
  React.PureComponent
) {
  render() {
    return (
      <div>
        <SwitchItem
          note="Should a live graph of the stock's value be shown in the tooltip?"
          value={this.props.getSetting("graph", true)}
          onChange={() => this.props.toggleSetting("graph", true)}
        >
          Show live graph in tooltip
        </SwitchItem>
        <SwitchItem
          note="Should a sparkline be shown inline?"
          value={this.props.getSetting("sparkline", false)}
          onChange={() => this.props.toggleSetting("sparkline", false)}
        >
          Show sparkline
        </SwitchItem>
      </div>
    );
  }
};
