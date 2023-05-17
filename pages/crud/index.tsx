import { TableLowcode } from "alurkerja-ui";
import { NextPage } from "next";
import { useState } from "react";

const CrudIndex: NextPage = () => {
  // for refetching
  const [renderState, setRenderState] = useState(0);
  // for pagination
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 });
  // for search
  const [search, setSearch] = useState<string>();
  // for filter
  const [filterBy, setFilterBy] = useState<{ [x: string]: any }>();

  const baseUrl = "https://kpm-sys.merapi.javan.id";
  const tableName = "jpn";

  return (
    <div className="p-10">
      <TableLowcode
        baseUrl={baseUrl}
        tableName={tableName}
        renderState={renderState}
        // setRenderState={renderState}
        pageConfig={pageConfig}
        setPageConfig={setPageConfig}
        search={search}
        setSearch={setSearch}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        customCell={({ name, fields, value, defaultCell }) => {
          if (name === "created_at") {
            return <td className="text-center text-red-400">custom Cell</td>;
          } else {
            return defaultCell;
          }
        }}
      />
    </div>
  );
};

export default CrudIndex;
