import notifications from "./data/notifications";
import dotNoti from "./assets/images/dot-noti.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [notificationsState, setNotificationsState] = useState(notifications);

  const markAllRead = () => {
    const updatedNotifications = notificationsState.map((notification) => ({
      ...notification,
      status: false,
    }));
    setNotificationsState(updatedNotifications);
  };
  return (
    <div className="App">
      <div className="noti-box">
        <div className="noti-inside">
          <div className="noti-count-box">
            <div className="notifications">
              <h1>Notifications</h1>
              <span className="noti-count">
                {
                  notificationsState.filter((item) => item.status === true)
                    .length
                }
              </span>
            </div>
            <button onClick={markAllRead}>Mark all as read</button>
          </div>

          {/* Notification boxes */}
          {notificationsState.map((item, index) => (
            <div
              key={index}
              className={
                item.status && item.dm === ""
                  ? "noti-bar-box"
                  : "unactive-noti-bar"
              }
              onClick={() => {
                if (item.status) {
                  const updatedNotifications = [...notificationsState];
                  updatedNotifications[index].status = false;
                  setNotificationsState(updatedNotifications);
                }
              }}
            >
              <img
                className="profiles-pic"
                src={item.profilePic}
                alt={"profile " + item.name}
              />
              <div className="noti-text">
                <span>
                  {item.activities === "followed" && item.status ? (
                    <a href="#" className="noti-action">
                      {item.name}
                    </a>
                  ) : (
                    <p className="account-name">{item.name}</p>
                  )}
                  {item.activities === "joined group" && item.status ? (
                    <a href="#" className="noti-action">
                      {item.text}
                    </a>
                  ) : (
                    <p className="text">{item.text}</p>
                  )}

                  <a
                    href="#"
                    className={item.status ? "noti-action" : "noti-mask-read"}
                  >
                    {item.post}
                  </a>
                  {item.status ? (
                    <img
                      className="noti-dot"
                      src={dotNoti}
                      alt="notifications dot"
                    />
                  ) : (
                    <></>
                  )}
                </span>
                <p className="noti-time">{item.time}</p>
                {item.dm !== "" && item.status ? (
                  <div className="direct-dm">
                    <p>{item.dm}</p>
                  </div>
                ) : (
                  <div className="direct-dm-readed">
                    <p>{item.dm}</p>
                  </div>
                )}
              </div>
              {item.imagePost !== "" ? (
                <div className="noti-pic">
                  <img src={item.imagePost} alt="notitications-picture" />
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
