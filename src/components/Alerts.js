import React from "react";

export default function Alerts(props) {
    
  return (
    props.alert && <div>
      <div className="alert alert-danger" role="alert">
        <strong>{props.alert.type}!!!</strong> {props.alert.msg}
      </div>
    </div>
  );
}
