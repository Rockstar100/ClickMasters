import React from "react";
import { Table, message } from "antd";
import DataTable from "./DataTable";

const PhotographerTable = (props) => {
  const data = props.data;
  console.log(data);

  const columns = Array.isArray(data)
    ? data.map((columns) => ({
        id: columns._id,
        name: columns.userInfo.name,
        imageUrl: columns.userInfo.profie_pic,
        Address: columns.Address,
        Phone: columns.userInfo.phone,
        startDatetime: columns.startdate,
        endDatetime: columns.enddate,
        status : columns.status
      }))
    : [];

  console.log("col", columns);

  return (
    
<div className="d-flex justify-content-center">


        <DataTable data={columns} /></div>
      
  );
};

export default PhotographerTable;
