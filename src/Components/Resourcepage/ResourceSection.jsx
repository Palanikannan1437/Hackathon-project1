import React from "react";
import ResourceMiniBox from "./ResourceMiniBox";

function ResourceSection(props) {
  return (
    <div>
      <h2 className="Rsrc__title--type">{props.rsrcname}</h2>
      <div className="Row1">
        <ResourceMiniBox rsrctitle="Sub-Topic-1" />
        <ResourceMiniBox rsrctitle="Sub-Topic-2" />
        <ResourceMiniBox rsrctitle="Sub-Topic-3" />
      </div>
      <div className="Row2">
        <ResourceMiniBox rsrctitle="Sub-Topic-4" />
        <ResourceMiniBox rsrctitle="Sub-Topic-5" />
        <ResourceMiniBox rsrctitle="Sub-Topic-6" />
      </div>
      <div className="Row3">
        <ResourceMiniBox rsrctitle="Sub-Topic-7" />
        <ResourceMiniBox rsrctitle="Sub-Topic-8" />
        <ResourceMiniBox rsrctitle="Sub-Topic-9" />
      </div>
    </div>
  );
}

export default ResourceSection;
