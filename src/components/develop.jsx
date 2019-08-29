import React from "react";
import "../App.css";
import "antd/dist/antd.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class Developer extends React.Component {
  state = {};
  render() {
    const handleOnDragStart = e => e.preventDefault();
    const responsive = {
      0: {
        items: 2
      },
      1024: {
        items: 3
      }
    };
    return (
      <div>
        <div className="caruselContent">
          <AliceCarousel
            responsive={responsive}
            mouseDragEnabled
            buttonsDisabled
            dotsDisabled
            autoPlay
            stopAutoPlayOnHover
            autoPlayInterval={2000}
          >
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://cdn0.froala.com/assets/editor/pages/B/frameworks/react-6a9ca3fcd0c84c07c1d8bbbad0eb7dfe.svg"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Backend </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://cdn.svgporn.com/logos/nodejs.svg"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Backend </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://cdn.svgporn.com/logos/express.svg"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Backend </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://www.datageekinme.com/wp-content/uploads/2018/07/mongo-logo.png"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://icon-library.net/images/css-3-icon/css-3-icon-21.jpg"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Backend </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://secure.meetupstatic.com/photos/event/8/3/6/3/600_479253635.jpeg"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://icon-library.net/images/javascript-icon-png/javascript-icon-png-23.jpg"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Backend </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://cdn.svgporn.com/logos/mongolab.svg"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://s3.amazonaws.com/media-p.slid.es/uploads/718562/images/4224660/ecmascript7-02.png"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Backend </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://miro.medium.com/max/800/1*GwBZgjItyjEwaaZn-lxTTA.png"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Backend </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://i0.wp.com/storage.googleapis.com/blog-images-backup/1*Bu2PZVJlN_EHyHLF696Now.png?resize=916%2C932&ssl=1"
                  />
                </div>
              </div>
            </div>

            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://png.pngtree.com/svg/20150810/0d5ce7929e.png"
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Backend </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://www.pinnacleinternet.com/wp-content/uploads/reCaptcha-transparent.png
                    "
                  />
                </div>
              </div>
            </div>
            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://cdn.iconscout.com/icon/free/png-256/jquery-7-1175152.png"
                  />
                </div>
              </div>
            </div>

            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://media.rbl.ms/image?u=%2Fprofile_images%2F920371293802733568%2FZewRXgpe_400x400.jpg&ho=https%3A%2F%2Fpbs.twimg.com&s=387&h=add71cd681a1c563fbd7571850c4d3db65ed5ed57aaaddcb1ad8fa6accb7c675&size=980x&c=3149350132"
                  />
                </div>
              </div>
            </div>

            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://www.w3schools.com/whatis/img_ajax.jpg"
                  />
                </div>
              </div>
            </div>

            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://miro.medium.com/max/1206/1*KWBfLD6aEEHNWyuYmL2CVw.png"
                  />
                </div>
              </div>
            </div>

            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                  />
                </div>
              </div>
            </div>

            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://s3.amazonaws.com/media-p.slid.es/uploads/50438/images/4752243/bulma.png"
                  />
                </div>
              </div>
            </div>

            <div onDragStart={handleOnDragStart} className="card-develop">
              <p className="developSection"> Front End </p>
              <div className="content-card">
                <br />
                <br />
                <br />
                <div className="img-content">
                  <img
                    className="img"
                    src="https://cdn.svgporn.com/logos/npm-2.svg"
                  />
                </div>
              </div>
            </div>
          </AliceCarousel>
        </div>
      </div>
    );
  }
}

export default Developer;
