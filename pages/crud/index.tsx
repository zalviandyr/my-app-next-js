import { TableLowcode } from "alurkerja-ui";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const CrudIndex: NextPage = () => {
  const router = useRouter();

  // for refetching
  const [renderState, setRenderState] = useState(0);
  // for pagination
  const [pageConfig, setPageConfig] = useState({ limit: 10, page: 0 });
  // for search
  const [search, setSearch] = useState<string>();
  // for filter
  const [filterBy, setFilterBy] = useState<{ [x: string]: any }>();

  const baseUrl = "https://kpm-sys.merapi.javan.id";
  const tableName = "pengurusan-rekod-aktiviti-pemohon";

  const toCreatePage = () => router.push("/crud/create");

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
        onClickCreate={toCreatePage}
      />
    </div>
  );
};

export default CrudIndex;
