const { React, getModuleByDisplayName } = require("powercord/webpack");
const { get } = require("powercord/http");

const Tooltip = getModuleByDisplayName("Tooltip", false);

class SymbolLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltip: "Loading...",
      iconImageLoaded: false,
      iconImage: "",
      nsfw: false,
    };
  }

  render() {
    const { symbol } = this.props;

    const _this = this;

    // Filter out the leading / if it has one
    symbol.replace("$", "")
    
    return (
      // <Tooltip position={"top"} text={this.state.tooltip}>
      <span {...this.props}>
        <a
          title={`https://finviz.com/quote.ashx?t=${symbol}`}
          rel={"noreferrer noopener"}
          href={`https://finviz.com/quote.ashx?t=${symbol}`}
          role={"button"}
          target={"_blank"}
        >
          {symbol}
        </a>
      </span>
      /* </Tooltip> */
    );
  }

  // componentWillMount() {
  //   this.getTooltip(this.props.redditLink.match(/\$([A-Z]{1,5})/)[1]).then(
  //     (tooltip) => {
  //       this.setState({
  //         tooltip,
  //       });
  //     },
  //     this
  //   );
  // }

  // async getTooltip(tag) {
  //   if (tag.startsWith("u")) {
  //     // Tooltip for a user
  //     let result = null;
  //     try {
  //       result = await get(
  //         `https://www.reddit.com/user/${tag.substring(2)}/about.json`
  //       );
  //     } catch (err) {
  //       return "User does not exist!";
  //     }
  //     const iconImage = result.body.data.icon_img.substring(
  //       0,
  //       result.body.data.icon_img.indexOf("?")
  //     );
  //     this.setState({
  //       iconImage,
  //       iconImageLoaded: true,
  //       nsfw: result.body.data["subreddit"]["over_18"],
  //     });
  //     return (
  //       <span class="reddit-tooltip-wrapper">
  //         {iconImage !== "" &&
  //         (!result.body.data["subreddit"]["over_18"] || this.props.showNSFW) ? (
  //           <img
  //             src={iconImage}
  //             style={{ width: "30px", height: "30px", borderRadius: "50%" }}
  //           />
  //         ) : null}
  //         <span class="reddit-tooltip">
  //           {tag} <br />
  //           Karma: {result.body.data["total_karma"].toLocaleString()}
  //           {result.body.data["subreddit"]["over_18"] ? (
  //             <span class="reddit-nsfw-tag">NSFW</span>
  //           ) : null}
  //         </span>
  //       </span>
  //     );
  //   } else {
  //     // Tooltip for a subreddit
  //     let result = null;
  //     try {
  //       result = await get(`https://www.reddit.com/${tag}/about.json`);
  //     } catch (err) {
  //       if (err.statusCode === 403) return "This subreddit is private!";
  //       return "Subreddit does not exist!";
  //     }
  //     if (result.statusCode === 302) return "Subreddit does not exist!";
  //     const iconImage = result.body.data["community_icon"].substring(
  //       0,
  //       result.body.data["community_icon"].indexOf("?")
  //     );
  //     this.setState({
  //       iconImage,
  //       iconImageLoaded: true,
  //       nsfw: result.body.data["over18"],
  //     });
  //     return (
  //       <span class="reddit-tooltip-wrapper">
  //         {iconImage !== "" &&
  //         (!result.body.data["over18"] || this.props.showNSFW) ? (
  //           <img
  //             src={iconImage}
  //             style={{ width: "30px", height: "30px", borderRadius: "50%" }}
  //           />
  //         ) : null}
  //         <span class="reddit-tooltip">
  //           {tag} <br />
  //           Subscribers: {result.body.data.subscribers.toLocaleString()}
  //           {result.body.data["over18"] ? (
  //             <span class="reddit-nsfw-tag">NSFW</span>
  //           ) : null}
  //         </span>
  //       </span>
  //     );
  //     return tag;
  //   }
  // }
}

module.exports = SymbolLink;

