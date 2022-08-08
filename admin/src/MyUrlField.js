import * as React from "react";
import { useRecordContext } from "react-admin";
import LaunchIcon from "@mui/icons-material/Launch";

const MyUrlField = ({ source }) => {
  const record = useRecordContext();
  return record ? (
    <a href={record[source]}>
      {record[source]}
      <LaunchIcon sx={{ width: "0.5em", height: "0.5em", paddingLeft: 2 }} />
    </a>
  ) : null;
};

export default MyUrlField;
