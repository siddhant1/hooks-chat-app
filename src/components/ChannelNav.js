import React, { useState, useEffect } from "react";
import database from "../firebase";

function ChannelNav() {
  const [channels, setChannel] = useState([]);

  useEffect(() => {
    return database.collection("channels").onSnapshot(snapshot => {
      const docs = [];
      snapshot.forEach(doc => {
        docs.push({
          name: doc.id,
          topic: doc.data().topic
        });
      });
      setChannel(docs);
    });
  }, []);

  return (
    <div className="Nav">
      <div className="User">
        <img
          className="UserImage"
          alt="whatever"
          src="https://placekitten.com/64/64"
        />
        <div>
          <div>Siddhant</div>
          <div>
            <button className="text-button">log out</button>
          </div>
        </div>
      </div>
      <nav className="ChannelNav">
        {channels.map(channel => (
          <a  href="/channel/general">
            #{channel.name}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default ChannelNav;
