import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://images.unsplash.com/photo-1595798717822-bdd81bb04324?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        channel="Valery Corner"
        verified
        subs="760K"
        noOfVideos={382}
        description="We discuss coding all day all night"
      />

      <hr />
      <VideoRow
        views="1.6M"
        subs="659K"
        description="Do you want a free training"
        timestamp="3 days ag0"
        channel="Valery Corner"
        title="We offer amazing free training to future web developers"
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <VideoRow
        views="1.6M"
        subs="659K"
        description="Do you want a free training"
        timestamp="3 days ag0"
        channel="Valery Corner"
        title="We offer amazing free training to future web developers"
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <VideoRow
        views="1.6M"
        subs="659K"
        description="Do you want a free training"
        timestamp="3 days ag0"
        channel="Valery Corner"
        title="We offer amazing free training to future web developers"
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <VideoRow
        views="1.6M"
        subs="659K"
        description="Do you want a free training"
        timestamp="3 days ag0"
        channel="Valery Corner"
        title="We offer amazing free training to future web developers"
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <VideoRow
        views="1.6M"
        subs="659K"
        description="Do you want a free training"
        timestamp="3 days ag0"
        channel="Valery Corner"
        title="We offer amazing free training to future web developers"
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <VideoRow
        views="1.6M"
        subs="659K"
        description="Do you want a free training"
        timestamp="3 days ag0"
        channel="Valery Corner"
        title="We offer amazing free training to future web developers"
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <VideoRow
        views="1.6M"
        subs="659K"
        description="Do you want a free training"
        timestamp="3 days ag0"
        channel="Valery Corner"
        title="We offer amazing free training to future web developers"
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <VideoRow
        views="1.6M"
        subs="659K"
        description="Do you want a free training"
        timestamp="3 days ag0"
        channel="Valery Corner"
        title="We offer amazing free training to future web developers"
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
      <VideoRow
        views="1.6M"
        subs="659K"
        description="Do you want a free training"
        timestamp="3 days ag0"
        channel="Valery Corner"
        title="We offer amazing free training to future web developers"
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
}

export default SearchPage;
