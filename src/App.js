import markWebber from "./assets/images/avatar-mark-webber.webp";
import angelaGray from "./assets/images/avatar-angela-gray.webp";
import jacobThompson from "./assets/images/avatar-jacob-thompson.webp";
import rizkyHasanuddin from "./assets/images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "./assets/images/avatar-kimberly-smith.webp";
import chess from "./assets/images/image-chess.webp";
import nathanPeterson from "./assets/images/avatar-nathan-peterson.webp";
import annaKim from "./assets/images/avatar-anna-kim.webp";
import dotNoti from "./assets/images/dot-noti.png";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="noti-box">
        <div className="noti-inside">
          <div className="noti-count-box">
            <div className="notifications">
              <h1>Notifications</h1>
              <span className="noti-count">3</span>
            </div>
            <h3>Mark all as read</h3>
          </div>

          <div className="noti-bar-box">
            <img className="profiles-pic" src={markWebber} alt="profile" />
            <div className="noti-text">
              <span>
                <p className="account-name">Mark Webber</p>
                <p className="text">reacted to your recent post</p>
                <a href="#" className="noti-action">
                  My first tournament today!
                </a>
                <img
                  className="noti-dot"
                  src={dotNoti}
                  alt="notifications dot"
                />
              </span>
              <p className="noti-time">1m ago</p>
            </div>
          </div>

          <div className="noti-bar-box">
            <img className="profiles-pic" src={angelaGray} alt="profile" />
            <div className="noti-text">
              <span>
                <a href="#" className="noti-action">
                  Angela Gray
                </a>
                <p className="text">followed you</p>
                <img
                  className="noti-dot"
                  src={dotNoti}
                  alt="notifications dot"
                />
              </span>
              <p className="noti-time">5m ago</p>
            </div>
          </div>

          <div className="noti-bar-box">
            <img className="profiles-pic" src={jacobThompson} alt="profile" />
            <div className="noti-text">
              <span>
                <p className="account-name">Jacob Thompson</p>
                <p className="text">has joined your group</p>
                <a href="#" className="noti-action">
                  Chess Club
                </a>
                <img
                  className="noti-dot"
                  src={dotNoti}
                  alt="notifications dot"
                />
              </span>
              <p className="noti-time">1 day ago</p>
            </div>
          </div>

          <div className="unactive-noti-bar">
            <img className="profiles-pic" src={rizkyHasanuddin} alt="profile" />
            <div className="noti-text">
              <span>
                <p className="account-name">Rizky Hasanuddin</p>
                <p className="text">sent you a private message</p>
                <img
                  className="noti-dot"
                  src={dotNoti}
                  alt="notifications dot"
                />
              </span>
              <p className="noti-time">5 days ago</p>
              <div className="direct-dm">
                <p>
                  Hello, thanks for setting up the Chess Club. I've been a
                  member for a few weeks now and I'm already having lots of fun
                  and improving my game.
                </p>
              </div>
            </div>
          </div>

          <div className="unactive-noti-bar">
            <div className="unactive-noti">
              <img className="profiles-pic" src={kimberlySmith} alt="profile" />
              <div className="noti-text">
                <span>
                  <p className="account-name">Kimberly Smith</p>
                  <p className="text">commented on your picture</p>
                </span>
                <p className="noti-time">1 week ago</p>
              </div>
            </div>
            <div className="noti-pic">
              <img src={chess} alt="notitications-picture" />
            </div>
          </div>

          <div className="unactive-noti-bar">
            <div className="unactive-noti">
              <img
                className="profiles-pic"
                src={nathanPeterson}
                alt="profile"
              />
              <div className="noti-text">
                <span>
                  <p className="account-name">Nathan Peterson</p>
                  <p className="text">reacted to your recent post</p>
                  <a href="#" className="noti-mask-read">
                    5 end-game strategies to increase your win rate
                  </a>
                </span>
                <p className="noti-time">2 week ago</p>
              </div>
            </div>
          </div>

          <div className="unactive-noti-bar">
            <div className="unactive-noti">
              <img className="profiles-pic" src={annaKim} alt="profile" />
              <div className="noti-text">
                <span>
                  <p className="account-name">Anna Kim</p>
                  <p className="text">left the group</p>
                  <a href="#" className="noti-mask-read">
                    Chess Club
                  </a>
                </span>
                <p className="noti-time">2 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
